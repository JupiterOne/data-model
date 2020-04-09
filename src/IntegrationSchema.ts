import { readdirSync } from 'fs';
import Ajv from 'ajv';

// JSON Schema allows an object to contain properties that are not specified by
// the schema. This can be disabled with `additionalProperties: false`. Ajv then
// supports a `removeAdditional` option, directing it to remove any properties
// from an object which are not specified in the schema.
//
// We need to allow additional properties in practice because:
//
// 1) we already have a lot of integrations throwing all sorts of custom
//    properties on entities and
// 2) when an entity has multiple classes, each schema needs to allow for
//    properties from other schemas.
/**
 * An Ajv schema for integration graph objects, useful for validating entities
 * creating by an integration.
 */
export const IntegrationSchema = new Ajv({ unknownFormats: 'ignore' });

for (const schemaFilename of readdirSync(__dirname + "/schemas")) {
  const schema = require(`./schemas/${schemaFilename}`);
  IntegrationSchema.addSchema(schema);
}
