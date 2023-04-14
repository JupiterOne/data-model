/* eslint-disable */

import { entityClasses } from './index';
import { validateEntityWithSchema } from './validateEntityWithSchema';

const requiredGraphObjectProperties = {
  _class: ['GraphObject'],
  _key: 'my_testing_key',
  _type: 'my_testing_type',
  name: 'John',
  displayName: 'Wick',
};

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

describe('schemas', () => {
  for (const entityClass of entityClasses) {
    test(entityClass, () => {
      expect(() =>
        validateEntityWithSchema({
          ...requiredGraphObjectProperties,
          _class: [entityClass],
          _key: undefined,
        } as any),
      ).toThrow(/'_key'/);

      expect(() =>
        validateEntityWithSchema({
          ...requiredGraphObjectProperties,
          _class: [entityClass],
          _type: undefined,
        } as any),
      ).toThrow(/'_type'/);

      if ('GraphObject' === entityClass) return;

      expect(() =>
        validateEntityWithSchema({
          ...requiredGraphObjectProperties,
          _class: [entityClass],
          displayName: undefined,
        } as any),
      ).toThrow(/'displayName'/);
    });
  }
});

describe('Host', () => {
  const requiredProperties = {
    ...requiredGraphObjectProperties,
    hostname: 'test',
    _class: ['Host'],
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
    ...requiredGraphObjectProperties,
    _class: ['IpAddress'],
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
    ...requiredGraphObjectProperties,
    _class: ['Entity'],
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
        ...requiredGraphObjectProperties,
        _class: ['Vendor'],
        category: 'fighter',
      } as any),
    ).not.toThrow();
  });

  test('allows string[] as category', () => {
    expect(() =>
      validateEntityWithSchema({
        ...requiredGraphObjectProperties,
        _class: ['Vendor'],
        category: ['lover', 'fighter'],
      } as any),
    ).not.toThrow();
  });
});

describe('#DataObject', () => {
  test('should accept "classification" string value', () => {
    expect(() =>
      validateEntityWithSchema({
        ...requiredGraphObjectProperties,
        _class: ['DataObject'],
        classification: 'critical',
      } as any),
    ).not.toThrow();
  });

  test('should accept "classification" null value', () => {
    expect(() =>
      validateEntityWithSchema({
        ...requiredGraphObjectProperties,
        _class: ['DataObject'],
        classification: null,
      } as any),
    ).not.toThrow();
  });
});

describe('DataCollection', () => {
  function createDataCollectionEntity(partial?: Record<string, any>): any {
    return {
      ...requiredGraphObjectProperties,
      PII: false,
      PHI: false,
      PCI: false,
      encryptionRequired: false,
      encrypted: false,
      public: false,
      classification: 'critical',
      ...partial,
      _class: ['DataCollection'],
    };
  }

  test('should accept known properties', () => {
    expect(() =>
      validateEntityWithSchema(createDataCollectionEntity()),
    ).not.toThrow();
  });

  test('should accept "classification" null value', () => {
    expect(() =>
      validateEntityWithSchema(
        createDataCollectionEntity({
          classification: null,
        }),
      ),
    ).not.toThrow();
  });
});
