const fs = require('fs/promises');
const path = require('path');

/**
 * buildIdToSchemaMap creates a lookup map for schemas from their id.
 * @param { Schema[] } schemas - an array of schemas
 * @returns { Record<string, Schema> } an object with each schema mapped to it's id
 */
function buildIdToSchemaMap(schemas) {
  const map = {};
  for (const schema of schemas) {
    map[schema.$id] = schema;
  }
  return map;
}

/**
 * resolveSchema resolves a schema with `id` to have all properties, both
 * defined and inherited in a single object `properties`.
 * @param { Record<string, Schema> } idToSchemas - lookup for schemas by their id
 * @param { string } id - the id of the schema to resolve
 * @returns resolved schema with all properties under a single `properties` field
 */
function resolveSchema(idToSchemas, id) {
  const schema = idToSchemas[id];
  if (schema.properties) {
    return schema;
  }

  const properties = sortObject(resolveProperties(idToSchemas, id));

  return {
    $schema: schema.$schema,
    $id: schema.$id,
    description: schema.description,
    type: schema.type,
    properties,
  };
}

/**
 * resolveProperties resolves the properties of a schema by first recursively
 * resolving the properties of any parent schemas, then resolving the properties
 * defined on the schema itself.
 *
 * Inherited properties will be overwritten by the more local version of the
 * property. {e.g. parent defines `username` and child defines `username`.
 * the child's version of `username` will overwrite the parent's. }
 *
 * @param { Record<string, Schema> } idToSchemas - a lookup for schema ids to the schema
 * @param { string } id - the $id of the schema to resolve
 * @returns { Record<string, any> } an object with all resolved properties of the schema
 */
function resolveProperties(idToSchemas, id) {
  let resolvedProperties = {};
  const schema = idToSchemas[id];
  // The top-level schema that all other schemas inherit from is
  // GraphObject. It defines properties at the top-level. This is
  // used as the base case.
  if (schema.$id === 'GraphObject.json') {
    return schema.properties;
  }

  if (schema.allOf) {
    for (const obj of schema.allOf) {
      if ('$ref' in obj) {
        const parentProperties = resolveProperties(idToSchemas, obj['$ref']);

        resolvedProperties = {
          ...addInheritedToProperties(parentProperties),
          ...resolveProperties,
        };
      }

      if ('properties' in obj) {
        resolvedProperties = {
          ...resolvedProperties,
          ...obj['properties'],
        };
      }
    }
  }

  return resolvedProperties;
}
/**
 * sortObject sorts an objects and returns an object with keys in alphabetical
 * order
 * @param { Object } obj
 * @returns an object with the keys in sorted alphabetical order
 */
function sortObject(obj) {
  const orderedKeys = Object.keys(obj).sort((a, b) => {
    if (a.toLowerCase() < b.toLowerCase()) {
      return -1;
    } else {
      return 1;
    }
  });

  const sortedObj = {};
  for (const key of orderedKeys) {
    sortedObj[key] = obj[key];
  }
  return sortedObj;
}

/**
 * addInheritedToProperties adds an inherited property set to true in each
 * child object
 * @param { Record<string, any> } properties
 * @returns an object with inherited properties set to true
 */
function addInheritedToProperties(properties) {
  const inheritedProperties = {};
  for (const [key, value] of Object.entries(properties)) {
    const clone = Object.assign({}, value);
    clone.inherited = true;
    inheritedProperties[key] = clone;
  }
  return inheritedProperties;
}

/**
 * readAllSchemas reads all schemas from `src/schemas` and returns an array of
 * parsed Schemas.
 * @returns { Promise<Schema[]> } - An array of parsed Schemas
 */
async function readAllSchemas(dir) {
  const files = await fs.readdir(dir);
  let schemas = [];
  for (const file of files) {
    const filePath = path.join(dir, file);
    const schemaBlob = await fs.readFile(filePath);
    const schemaString = schemaBlob.toString();
    try {
      JSON.parse(schemaString);
    } catch (err) {
      console.log(filePath, schemaString);
    }
    const parsedSchema = JSON.parse(schemaString);
    schemas.push(parsedSchema);
  }

  return schemas;
}

module.exports = {
  readAllSchemas,
  buildIdToSchemaMap,
  resolveSchema,
};
