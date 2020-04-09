import { IntegrationSchema } from './index';

describe('GraphObject', () => {
  const entity = {
    _type: 'some-type-of-thing',
    _class: ['GraphObject'],
    _key: 'some-key-unique',
  };

  const validate = IntegrationSchema.getSchema('#GraphObject')!;

  test('validates complete entity', () => {
    expect(validate(entity)).toBe(true);
  });
});

describe('Entity', () => {
  const entity = {
    _type: 'some-type-of-thing',
    _class: ['Entity'],
    _key: 'some-key-unique',
    name: 'Name of Thing',
    displayName: 'Name of Thing',
  };

  const validate = IntegrationSchema.getSchema('#Entity')!;

  test('validates complete entity', () => {
    expect(validate(entity)).toBe(true);
  });
});

describe('DataStore', () => {
  const entity = {
    _type: 'some-type-of-thing',
    _class: ['DataStore'],
    _key: 'some-key-unique',
    name: 'Name of Thing',
    displayName: 'Name of Thing',
    classification: 'not an enum',
    encrypted: true,
  };

  const validate = IntegrationSchema.getSchema('#DataStore')!;

  test('validates complete entity', () => {
    expect(validate(entity)).toBe(true);
  });

  test('classification diallows undefined value', () => {
    validate({
      ...entity,
      classification: undefined,
    });
    expect(validate.errors![0]).toMatchObject({
      message: expect.stringContaining('classification'),
    });
  });

  test('classification allows null value', () => {
    expect(
      validate({
        ...entity,
        classification: null,
      })
    ).toBe(true);
  });

  test('encrypted disallows undefined value', () => {
    validate({
      ...entity,
      encrypted: undefined,
    });
    expect(validate.errors![0]).toMatchObject({
      message: expect.stringContaining('encrypted'),
    });
  });

  test('encrypted allows null value', () => {
    expect(
      validate({
        ...entity,
        encrypted: null,
      })
    ).toBe(true);
  });
});
