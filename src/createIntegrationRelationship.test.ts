import { RelationshipDirection } from './types';
import { createIntegrationRelationship } from './createIntegrationRelationship';

describe('DirectRelationshipOptions', () => {
  const entityA = {
    _type: 'a_entity',
    _class: 'A',
    _key: 'a',
  };

  const entityB = {
    _type: 'b_entity',
    _class: 'B',
    _key: 'b',
  };

  const expected = {
    _type: 'a_entity_has_b_entity',
    _class: 'HAS',
    _key: 'a|has|b',
    _fromEntityKey: 'a',
    _toEntityKey: 'b',
    displayName: 'HAS',
  };

  test('defaults', () => {
    expect(
      createIntegrationRelationship({
        _class: 'HAS',
        from: entityA,
        to: entityB,
      })
    ).toEqual(expected);
  });

  test('_class is upcased', () => {
    expect(
      createIntegrationRelationship({
        _class: 'has',
        from: entityA,
        to: entityB,
      })
    ).toEqual(expected);
  });

  test('transfers additional properties', () => {
    expect(
      createIntegrationRelationship({
        _class: 'HAS',
        from: entityA,
        to: entityB,
        properties: {
          region: 'useast',
        },
      })
    ).toEqual({ ...expected, region: 'useast' });
  });
});

describe('DirectRelationshipLiteralOptions', () => {
  const expected = {
    _type: 'a_entity_has_b_entity',
    _class: 'HAS',
    _key: 'a|has|b',
    _fromEntityKey: 'a',
    _toEntityKey: 'b',
    displayName: 'HAS',
  };

  test('defaults', () => {
    expect(
      createIntegrationRelationship({
        _class: 'HAS',
        fromKey: 'a',
        fromType: 'a_entity',
        toKey: 'b',
        toType: 'b_entity',
      })
    ).toEqual(expected);
  });

  test('_class is upcased', () => {
    expect(
      createIntegrationRelationship({
        _class: 'has',
        fromKey: 'a',
        fromType: 'a_entity',
        toKey: 'b',
        toType: 'b_entity',
      })
    ).toEqual(expected);
  });
});

describe('MappedRelationshipOptions', () => {
  const entityA = {
    _type: 'a_entity',
    _class: 'A',
    _key: 'a',
  };

  const entityB = {
    _type: 'b_entity',
    _class: 'B',
    _key: 'b',
  };

  const expected = {
    _key: 'a|has|b',
    _type: 'mapping_source_has_b_entity',
    _class: 'HAS',
    _mapping: {
      relationshipDirection: "FORWARD",
      sourceEntityKey: 'a',
      targetFilterKeys: [['_type', '_key']],
      targetEntity: {
        _key: 'b',
        _class: 'B',
        _type: 'b_entity',
      },
    },
    displayName: 'HAS',
  };

  test('defaults', () => {
    expect(
      createIntegrationRelationship({
        _class: 'HAS',
        source: entityA,
        target: entityB,
      })
    ).toEqual(expected);
  });

  test('_class is upcased', () => {
    expect(
      createIntegrationRelationship({
        _class: 'has',
        source: entityA,
        target: entityB,
      })
    ).toEqual(expected);
  });

  test('additional properties', () => {
    expect(
      createIntegrationRelationship({
        _class: 'HAS',
        source: entityA,
        target: entityB,
        properties: {
          region: 'useast',
        },
      })
    ).toEqual({ ...expected, region: 'useast' });
  });

  test('override defaults', () => {
    expect(
      createIntegrationRelationship({
        _class: 'HAS',
        source: entityA,
        target: entityB,
        properties: {
          _key: 'use-my-key-yo',
          _type: 'a_entity_has_b_entity',
          displayName: 'ISHASING',
        },
      })
    ).toEqual({
      ...expected,
      _key: 'use-my-key-yo',
      _type: 'a_entity_has_b_entity',
      displayName: 'ISHASING',
    });
  });
});

describe('MappedRelationshipLiteralOptions', () => {
  const expected = {
    _key: 'a|has|b',
    _type: 'mapping_source_has_b_entity',
    _class: 'HAS',
    _mapping: {
      relationshipDirection: "REVERSE",
      sourceEntityKey: 'a',
      targetFilterKeys: [['something']],
      targetEntity: {
        _key: 'b',
        _type: 'b_entity',
      },
    },
    displayName: 'HAS',
  };

  test('defaults', () => {
    expect(
      createIntegrationRelationship({
        _class: 'HAS',
        _mapping: {
          relationshipDirection: RelationshipDirection.REVERSE,
          targetEntity: {
            _key: 'b',
            _type: 'b_entity',
          },
          targetFilterKeys: [['something']],
          sourceEntityKey: 'a',
        },
      })
    ).toEqual(expected);
  });

  test('missing _key in targetEntity', () => {
    expect(() => {
      createIntegrationRelationship({
        _class: 'HAS',
        _mapping: {
          relationshipDirection: RelationshipDirection.REVERSE,
          targetEntity: {
            something: 'missing',
            _type: 'b_entity',
          },
          targetFilterKeys: [['something']],
          sourceEntityKey: 'a',
        },
      });
    }).toThrowError(/_key/);
  });

  test('missing _type in targetEntity', () => {
    expect(() => {
      createIntegrationRelationship({
        _class: 'HAS',
        _mapping: {
          relationshipDirection: RelationshipDirection.REVERSE,
          targetEntity: {
            something: 'missing',
            _key: 'b',
          },
          targetFilterKeys: [['something']],
          sourceEntityKey: 'a',
        },
      });
    }).toThrowError(/_type/);
  });

  test('_key, _type provided explicitly', () => {
    expect(
      createIntegrationRelationship({
        _class: 'HAS',
        _mapping: {
          relationshipDirection: RelationshipDirection.REVERSE,
          targetEntity: {
            something: 'missing',
          },
          targetFilterKeys: [['something']],
          sourceEntityKey: 'a',
        },
        properties: {
          _key: 'a-has-b',
          _type: 'a_entity_has_b_entity',
        },
      })
    ).toEqual({
      ...expected,
      _key: 'a-has-b',
      _type: 'a_entity_has_b_entity',
      _mapping: {
        ...expected._mapping,
        targetEntity: {
          something: 'missing',
        },
      },
    });
  });
});
