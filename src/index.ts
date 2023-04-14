export { getSchema } from './getSchema';
export { EVERYONE, INTERNET } from './globalEntities';
export { IntegrationSchema } from './IntegrationSchema';
export { RelationshipClass } from './RelationshipClass';
export * from './relationships';
export { validateEntityWithSchema } from './validateEntityWithSchema';

export type IntegrationEntitySchema = {
  $ref?: string;
  allOf?: IntegrationEntitySchema[];
  properties?: {
    [propertyName: string]: any;
  };
  required?: string[];
};

import * as integrationSchemas from './IntegrationSchema';
const { IntegrationSchema, ...allSchemas } = integrationSchemas;
export const entitySchemas = allSchemas;
export type EntityClass = keyof typeof entitySchemas;
export const entityClasses = Object.keys(entitySchemas) as EntityClass[];
