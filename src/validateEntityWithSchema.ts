import { IntegrationSchema } from ".";

/**
 * Validates an entity using the data model schemas, throwing an error when
 * validation fails.
 */
export function validateEntityWithSchema(entity: { _class: string[] }): void {
  for (const c of entity._class) {
    const validate = IntegrationSchema.getSchema(`#${c}`);
    if (!validate) {
      throw new Error(`Could not find schema for class ${c}!`);
    }

    if (!validate(entity)) {
      throw new Error(
        `Entity fails to validate as class '${c}':\n\n${JSON.stringify(
          validate.errors,
          null,
          2,
        )}`,
      );
    }
  }
}
