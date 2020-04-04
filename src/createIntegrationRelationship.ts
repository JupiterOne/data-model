import {
  EntityFromIntegration,
  IntegrationRelationship,
  RelationshipFromIntegration,
  RelationshipMapping,
  RelationshipDirection,
  TargetEntityProperties,
  TargetFilterKey,
  MappedRelationshipFromIntegration,
} from './types';

import { generateRelationshipType, generateRelationshipKey } from './util';

type DirectRelationshipOptions = {
  _class: string;
  from: EntityFromIntegration;
  to: EntityFromIntegration;
  properties?: AdditionalRelationshipProperties;
};

type DirectRelationshipLiteralOptions = {
  _class: string;
  fromType: string;
  fromKey: string;
  toType: string;
  toKey: string;
  properties?: AdditionalRelationshipProperties;
};

type MappedRelationshipOptions = {
  _class: string;
  source: EntityFromIntegration;
  target: TargetEntity;
  properties?: AdditionalRelationshipProperties;

  /**
   * Defaults to `RelationshipDirection.FORWARD`, assuming the common case of
   * source -> target.
   */
  relationshipDirection?: RelationshipDirection;

  /**
   * Defaults to `[["_type", "_key"]]`, allowing for the simple case of mapping
   * to a known type and key.
   */
  targetFilterKeys?: TargetFilterKey[];

  /**
   * Defaults to `undefined`, leaving it up to the default established in the
   * mapper.
   */
  skipTargetCreation?: boolean;
};

type MappedRelationshipLiteralOptions = {
  _class: string;
  _mapping: RelationshipMapping;
  properties?: AdditionalRelationshipProperties;
};

type TargetEntity = TargetEntityProperties & {
  _type: string;
  _key: string;
};

/**
 * Allows assignment of any additional properties without being forced to use
 * specific types where that isn't helpful.
 */
type AdditionalRelationshipProperties = { [key: string]: any };

/**
 * Create an `IntegrationRelationship`.
 *
 * `DirectRelationshipOptions` and `MappedRelationshipOptions` are recommended
 * over literal forms. Older integrations may need to use the literal forms to
 * control values for some reason or other.
 */
export function createIntegrationRelationship(
  options:
    | DirectRelationshipOptions
    | DirectRelationshipLiteralOptions
    | MappedRelationshipOptions
    | MappedRelationshipLiteralOptions
): IntegrationRelationship {
  if ('_mapping' in options) {
    return createMappedRelationship(options);
  } else if ('target' in options) {
    return createMappedRelationship({
      _class: options._class,
      _mapping: {
        relationshipDirection:
          options.relationshipDirection || RelationshipDirection.FORWARD,
        sourceEntityKey: options.source._key,
        targetEntity: options.target,
        targetFilterKeys: options.targetFilterKeys || [['_type', '_key']],
        skipTargetCreation: options.skipTargetCreation,
      },
      properties: options.properties,
    });
  } else if ('fromType' in options) {
    return createRelationshipFromIntegration(options);
  } else {
    return createRelationshipFromIntegration({
      _class: options._class,
      fromType: options.from._type,
      fromKey: options.from._key,
      toType: options.to._type,
      toKey: options.to._key,
      properties: options.properties,
    });
  }
}

function createMappedRelationship(
  options: MappedRelationshipLiteralOptions
): MappedRelationshipFromIntegration {
  const mapping = options._mapping;

  if (mapping.skipTargetCreation === undefined) {
    delete mapping.skipTargetCreation;
  }

  const _type = type(
    options.properties,
    options._class,
    'mapping_source',
    mapping.targetEntity._type
  );

  const relationshipClass = options._class.toUpperCase();

  return {
    _class: relationshipClass,
    _type,
    _mapping: options._mapping,
    _key: key(
      options.properties,
      options._class,
      mapping.sourceEntityKey,
      mapping.targetEntity._key
    ),
    displayName: relationshipClass,
    ...options.properties,
  };
}

function createRelationshipFromIntegration({
  _class,
  fromType,
  fromKey,
  toType,
  toKey,
  properties,
}: DirectRelationshipLiteralOptions): RelationshipFromIntegration {
  const relationshipClass = _class.toUpperCase();
  const _type = generateRelationshipType(_class, fromType, toType);
  return {
    _key: `${fromKey}|${_class.toLowerCase()}|${toKey}`,
    _type,
    _class: relationshipClass,
    _fromEntityKey: fromKey,
    _toEntityKey: toKey,
    displayName: relationshipClass,
    ...properties,
  };
}

function key(
  properties: AdditionalRelationshipProperties | undefined,
  _class: string,
  fromKey: string,
  toKey: string | undefined
): string {
  if (properties && properties._key) {
    return properties._key;
  } else {
    if (!toKey) {
      throw new Error(
        'Without _key provided in properties, _key generation requires mapping.targetEntity._key!'
      );
    }

    return generateRelationshipKey(_class, fromKey, toKey);
  }
}

function type(
  properties: AdditionalRelationshipProperties | undefined,
  _class: string,
  fromType: string,
  toType: string | undefined
): string {
  if (properties && properties._type) {
    return properties._type;
  } else {
    if (!toType) {
      throw new Error(
        'Without _type provided in properties, _type generation requires mapping.targetEntity._type!'
      );
    }

    return generateRelationshipType(_class, fromType, toType);
  }
}
