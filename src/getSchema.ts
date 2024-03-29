import { IntegrationEntitySchema, IntegrationSchema } from '.';

export function getSchema(_class: string): IntegrationEntitySchema | undefined {
  const validate = IntegrationSchema.getSchema('#' + _class);
  if (!validate) {
    return undefined;
  }

  return validate.schema as IntegrationEntitySchema;
}
