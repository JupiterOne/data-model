export { EVERYONE, INTERNET } from './globalEntities';

export { RelationshipClass } from './RelationshipClass';
export * from './relationships';

export type IntegrationEntitySchema = {
  $ref?: string;
  allOf?: IntegrationEntitySchema[];
  properties?: {
    [propertyName: string]: any;
  };
  required?: string[];
};
export {
  IntegrationSchema,
  EntityClass,
  entitySchemas,
  entityClasses,
} from './IntegrationSchema';

export { validateEntityWithSchema } from './validateEntityWithSchema';
export { getSchema } from './getSchema';
