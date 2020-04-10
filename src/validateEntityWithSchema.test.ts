import { validateEntityWithSchema } from './validateEntityWithSchema';

test('throws error if schema does not exist', () => {
  expect(
    () => validateEntityWithSchema({ _class: ["ChimkenNumget"] })
  ).toThrow("Could not find schema for class ChimkenNumget!");
});

test('throws error if entity fails to validate', () => {
  expect(
    () => validateEntityWithSchema({ _class: ["Account"] })
  ).toThrow("Entity fails to validate as class 'Account'");
});

test('does not throw if entity successfully validates', () => {
  expect(
    () => validateEntityWithSchema({
      _class: ["GraphObject"],
      _key: "my_testing_key",
      _type: "my_testing_type",
    } as any)
  ).not.toThrow();
});
