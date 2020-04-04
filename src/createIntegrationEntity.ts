import { EntityFromIntegration, RawUploadJobInput } from './types';
import { validateRawData } from './util';
import {
  IntegrationEntitySchema,
  IntegrationSchema,
  IntegrationSchemaMap,
} from './schemas';
import { assignTags, ResourceTagList, ResourceTagMap } from './tagging';
import { getTime } from '.';

/**
 * Properties required to build a valid `EntityFromIntegration`.
 *
 * These properties are more strict (than their counterpart definitions on
 * `EntityFromIntegration`) to prevent literal assignments of `undefined`
 * values.
 */
type RequiredEntityProperties = { _class: string | string[]; _type: string };

/**
 * Allows assignment of any additional properties without being forced to use
 * specific types where that isn't helpful.
 *
 * During development, schema validation prevents failures to provide properties
 * required by the entity `_class`. Combined with automatic transfer of many
 * properties from the `ProviderSourceData`, there may be no strong case to be
 * made for referencing specific TypeScript types. In those cases, it should be
 * possible to provide additional literal entity properties.
 */
type AdditionalEntityProperties = { [key: string]: any };

/**
 * Properties to be assigned to a generated entity which are declared in code
 * literals.
 *
 * Many values can be transferred from the `ProviderSourceData` without any
 * additional effort. Other properties must transferred by using code to specify
 * the property value. These properties can be any name/value, but the list
 * certainly includes those of `EntityFromIntegration`, and some properties
 * *must* be provided.
 */
type LiteralAssignments = Partial<EntityFromIntegration> &
  RequiredEntityProperties &
  AdditionalEntityProperties;

/**
 * A type representing entity data from a provider.
 */
type ProviderSourceData = {
  /**
   * Some providers include a collection of `tags` that will be stored on the
   * generated entity as `tag.propertyName`, `propertyName` when the tag is
   * registered in `tagProperties` or is known to be a common tag property name,
   * and the tag values will be collected in the generated entity as `tags` (a
   * `string[]`);
   */
  tags?: ResourceTagList | ResourceTagMap;

  [key: string]: any;
};

/**
 * Data used to generate an `EntityFromIntegration`.
 */
export type IntegrationEntityData = {
  /**
   * Data from a provider API that will be selectively transferred to an
   * `EntityFromIntegration`.
   *
   * The common properties defined by data model schemas, selected by the
   * `assign._class`, will be found and transferred to the generated entity.
   */
  source: ProviderSourceData;

  /**
   * Literal property assignments. These values will override anything
   * transferred from the `source` data.
   */
  assign: LiteralAssignments;

  /**
   * The names of properties that will be assigned directly to the entity from
   * tags with matching names. See `assignTags`.
   */
  tagProperties?: string[];
};

/**
 * A generated `EntityFromIntegration` that includes additional properties
 * specific to the entity class and some properties are guaranteed.
 */
type GeneratedEntityFromIntegration = EntityFromIntegration &
  AdditionalEntityProperties & { _key: string; _class: string[] };

export type IntegrationEntityBuilderInput = {
  /**
   * Data used to generate an `EntityFromIntegration`.
   */
  entityData: IntegrationEntityData;

  // The plan is to allow another property that contains metadata to drive the
  // transfer process further, placing transformations that are common to the
  // integration in one place, and allowing transformation reuse across
  // integrations.
};

/**
 * Generates an `EntityFromIntegration` using the provided `entityData`.
 *
 * WARNING: This is a work in progress. Only certain schemas are supported as
 * the API is worked out in the Azure integration.
 */
export function createIntegrationEntity(
  input: IntegrationEntityBuilderInput
): GeneratedEntityFromIntegration {
  const generatedEntity = generateEntity(input.entityData);

  validateRawData(generatedEntity);

  if (process.env.ENABLE_GRAPH_OBJECT_SCHEMA_VALIDATION) {
    validateEntityWithSchema(generatedEntity);
  }

  return generatedEntity;
}

function generateEntity({
  source,
  assign,
  tagProperties,
}: IntegrationEntityData): GeneratedEntityFromIntegration {
  const _rawData: RawUploadJobInput[] = [];
  if (Object.entries(source).length > 0) {
    _rawData.push({ name: 'default', rawData: source });
  }
  if (assign._rawData) {
    _rawData.push(...assign._rawData);
  }

  const _key = assign._key || generateEntityKey(assign._type, source);
  const _class = Array.isArray(assign._class) ? assign._class : [assign._class];

  const entity: GeneratedEntityFromIntegration = {
    ...whitelistedProviderData(source, _class),
    ...assign,
    _key,
    _class,
    _rawData,
  };

  if (entity.createdOn === undefined) {
    entity.createdOn =
      (source.createdAt && getTime(source.createdAt)) ||
      (source.creationDate && getTime(source.creationDate)) ||
      (source.creationTime && getTime(source.creationTime)) ||
      (source.creationTimestamp && getTime(source.creationTimestamp));
  }

  if (entity.active === undefined && source.status) {
    entity.active = source.status === 'Online' || source.status === 'Active';
  }

  // Remove transferred `source.tags` property from the entity. `tags` is in the
  // schema white list, but the structure isn't what we want `tags` to be.
  // `assignTags` will take care of preparing `tags` properly.
  delete entity.tags;

  assignTags(entity, source.tags, tagProperties);

  // `assignTags` may populate `displayName` from the `source.tags`. When there
  // is an `assign.displayName`, use that instead assuming that an assigned
  // value is meant to override an automatic function.
  if (assign.displayName) {
    entity.displayName = assign.displayName;
  }

  // When a `displayName` is not derived from `source.tags` nor explicitly set
  // by `assign.displayName`, use `entity.name`. This is a last attempt to
  // to provide a value automatically.
  if (!entity.displayName && entity.name) {
    entity.displayName = entity.name;
  }

  return entity;
}

/**
 * Validates an entity using the data model schemas, throwing an error when
 * validation fails. It is expected that this will only be used during
 * development, not in production!
 */
function validateEntityWithSchema(entity: { _class: string[] }): void {
  for (const c of entity._class) {
    const validate = IntegrationSchema.getSchema(`#${c}`);
    if (!validate) {
      throw new Error("Could not find schema for class ${c}!");
    }

    if (!validate(entity)) {
      throw new Error(
        `Entity fails to validate as class '${c}':\n\n${JSON.stringify(
          validate.errors,
          null,
          2
        )}`
      );
    }
  }
}

function generateEntityKey(_type: string, data: any): string {
  const id = data.providerId || data.id;
  if (!id) {
    throw new Error(
      'Entity key generation requires one of data.{providerId,id}'
    );
  }
  return id;
}

function whitelistedProviderData(
  source: ProviderSourceData,
  _class: string[]
): ProviderSourceData {
  const whitelistedProviderData: ProviderSourceData = {};
  const schemaProperties = schemaWhitelistedPropertyNames(_class);
  for (const e of Object.entries(source)) {
    if (schemaProperties.includes(e[0])) {
      whitelistedProviderData[e[0]] = e[1];
    }
  }
  return whitelistedProviderData;
}

const schemaWhitelists = new Map<string[], string[]>();

/**
 * Answers all the property names defined by the schemas referenced in the set
 * of classes. Values are cached to avoid rebuilding, since there could be
 * thousands of entities constructed during a single execution.
 */
function schemaWhitelistedPropertyNames(_class: string[]): string[] {
  let properties = schemaWhitelists.get(_class);
  if (!properties) {
    properties = [];
    for (const c of _class) {
      const schema = IntegrationSchemaMap[c];
      if (!schema) {
        throw new Error(
          `Class '${c}' does not yet have a schema supported by the SDK!`
        );
      }
      properties.push(...schemaPropertyNames(schema));
    }
    schemaWhitelists.set(_class, properties);
  }
  return properties;
}

function schemaPropertyNames(schema: IntegrationEntitySchema): string[] {
  const names: string[] = [];
  if (schema.properties) {
    names.push(...Object.keys(schema.properties));
  }
  if (schema.allOf) {
    for (const s of schema.allOf) {
      names.push(...schemaPropertyNames(s));
    }
  }
  if (schema.$ref) {
    const refSchema = IntegrationSchemaMap[schema.$ref.slice(1)];
    if (refSchema) {
      names.push(...schemaPropertyNames(refSchema));
    } else {
      throw new Error(`Schema $ref '${schema.$ref}' cannot be resolved!`);
    }
  }
  return names;
}
