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

export { IntegrationSchema } from './IntegrationSchema';

import * as integrationSchemas from './IntegrationSchema';
const { IntegrationSchema, ...allSchemas } = integrationSchemas;
export const entitySchemas = allSchemas;
export type EntityClass = keyof typeof entitySchemas;
export const entityClasses = Object.keys(entitySchemas) as EntityClass[];

export { validateEntityWithSchema } from './validateEntityWithSchema';
export { getSchema } from './getSchema';
