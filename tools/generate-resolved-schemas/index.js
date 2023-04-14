const fs = require('fs/promises');
const {
  resolveSchema,
  buildIdToSchemaMap,
  readAllSchemas,
} = require('./utils');

void (async function () {
  if (process.argv.length < 3) {
    console.error(
      `Not enough arguments supplied.\nUsage: node generate-resolved-schemas.js <schema directory> <output path>`,
    );
    return;
  }
  const schemaPath = process.argv[2];
  const outputPath = process.argv[3];

  const schemas = await readAllSchemas(schemaPath);
  const idToSchemaMap = buildIdToSchemaMap(schemas);
  const resolvedSchemas = {};

  for (const id of Object.keys(idToSchemaMap)) {
    const resolvedSchema = resolveSchema(idToSchemaMap, id);
    resolvedSchemas[id] = resolvedSchema;
  }

  await fs.writeFile(outputPath, JSON.stringify(resolvedSchemas));
})();
