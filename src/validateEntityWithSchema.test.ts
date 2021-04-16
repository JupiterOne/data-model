import { getSchema } from './getSchema';
import { entityClasses } from './index';
import { validateEntityWithSchema } from './validateEntityWithSchema';

test('throws error if schema does not exist', () => {
  expect(() => validateEntityWithSchema({ _class: ['ChimkenNumget'] })).toThrow(
    'Could not find schema for class ChimkenNumget!',
  );
});

test('throws error if entity fails to validate', () => {
  expect(() => validateEntityWithSchema({ _class: ['Account'] })).toThrow(
    "Entity fails to validate as class 'Account'",
  );
});

test('does not throw if entity successfully validates', () => {
  expect(() =>
    validateEntityWithSchema({
      _class: ['GraphObject'],
      _key: 'my_testing_key',
      _type: 'my_testing_type',
    } as any),
  ).not.toThrow();
});

describe('schemas load without warnings', () => {
  for (const entityClass of entityClasses) {
    getSchema(entityClass);
  }
});

describe('Host', () => {
  const requiredProperties = {
    _class: ['Host'],
    _key: 'my_testing_key',
    _type: 'my_testing_type',
    name: 'John',
    displayName: 'Wick',
  };

  test('allows IPv4 as publicIpAddress', () => {
    expect(() =>
      validateEntityWithSchema({
        ...requiredProperties,
        publicIpAddress: '10.10.10.10',
      } as any),
    ).not.toThrow();
  });

  test('disallows IPv4 with netmask as publicIpAddress', () => {
    expect(() =>
      validateEntityWithSchema({
        ...requiredProperties,
        publicIpAddress: '10.10.10.10/32',
      } as any),
    ).toThrow(/must match format/);
  });

  test('allows IPv6 as publicIpAddress', () => {
    expect(() =>
      validateEntityWithSchema({
        ...requiredProperties,
        publicIpAddress: 'FE80:0000:0000:0000:0202:B3FF:FE1E:8329',
      } as any),
    ).not.toThrow();
  });
});

describe('IpAddress', () => {
  const requiredProperties = {
    _class: ['IpAddress'],
    _key: 'my_testing_key',
    _type: 'my_testing_type',
    name: 'John',
    displayName: 'Wick',
  };

  test('allows IPv4 as ipAddress', () => {
    expect(() =>
      validateEntityWithSchema({
        ...requiredProperties,
        ipAddress: '10.10.10.10',
      } as any),
    ).not.toThrow();
  });

  test('disallows IPv4 with netmask as ipAddress', () => {
    expect(() =>
      validateEntityWithSchema({
        ...requiredProperties,
        ipAddress: '10.10.10.10/32',
      } as any),
    ).toThrow(/must match format/);
  });

  test('allows IPv6 as ipAddress', () => {
    expect(() =>
      validateEntityWithSchema({
        ...requiredProperties,
        ipAddress: 'FE80:0000:0000:0000:0202:B3FF:FE1E:8329',
      } as any),
    ).not.toThrow();
  });
});

describe('Entity', () => {
  const requiredProperties = {
    _class: ['Entity'],
    _key: 'my_testing_key',
    _type: 'my_testing_type',
    name: 'John',
    displayName: 'Wick',
  };

  test('allows string as id', () => {
    expect(() =>
      validateEntityWithSchema({
        ...requiredProperties,
        id: 'sumpinsumpin',
      } as any),
    ).not.toThrow();
  });

  test('allows string[] as id', () => {
    expect(() =>
      validateEntityWithSchema({
        ...requiredProperties,
        id: ['sumpinsumpin', 'nuttinnuttin'],
      } as any),
    ).not.toThrow();
  });

  test('allows number as tag.*', () => {
    expect(() =>
      validateEntityWithSchema({
        ...requiredProperties,
        'tag.Anything': 1234,
      } as any),
    ).not.toThrow();
  });

  test('allows boolean as tag.*', () => {
    expect(() =>
      validateEntityWithSchema({
        ...requiredProperties,
        'tag.Anything': true,
      } as any),
    ).not.toThrow();
  });
});

describe('Vendor: category can be string | string[]', () => {
  test('allows string as category', () => {
    expect(() =>
      validateEntityWithSchema({
        _class: ['Vendor'],
        _key: 'super_samurai',
        _type: 'Vendor',
        name: 'Super',
        displayName: 'Samurai',
        category: 'fighter',
      } as any),
    ).not.toThrow();
  });

  test('allows string[] as category', () => {
    expect(() =>
      validateEntityWithSchema({
        _class: ['Vendor'],
        _key: 'awesome_ninja',
        _type: 'Vendor',
        name: 'Awesome',
        displayName: 'Ninja',
        category: ['lover', 'fighter'],
      } as any),
    ).not.toThrow();
  });
});
