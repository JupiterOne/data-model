import { generateRelationshipType } from './util';

describe('generateRelationshipType', () => {
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

  test('entities', () => {
    expect(generateRelationshipType('HAS', entityA, entityB)).toEqual(
      'a_entity_has_b_entity'
    );
  });

  test('strings', () => {
    expect(generateRelationshipType('HAS', 'a_entity', 'b_entity')).toEqual(
      'a_entity_has_b_entity'
    );
  });

  test('from entity to string', () => {
    expect(generateRelationshipType('HAS', entityA, 'b_entity')).toEqual(
      'a_entity_has_b_entity'
    );
  });

  test('from string to entity', () => {
    expect(generateRelationshipType('HAS', 'a_entity', entityB)).toEqual(
      'a_entity_has_b_entity'
    );
  });

  test('from and to entities of the same type', () => {
    expect(
      generateRelationshipType('HAS', 'aws_instance', 'aws_instance')
    ).toEqual('aws_instance_has_instance');
  });

  test('from and to entities within the same provider but different service scope', () => {
    expect(
      generateRelationshipType('HAS', 'aws_vpc', 'aws_lambda_function')
    ).toEqual('aws_vpc_has_lambda_function');
  });

  test('from and to entities within the same provider and service scope', () => {
    expect(
      generateRelationshipType('HAS', 'azure_sql_server', 'azure_sql_database')
    ).toEqual('azure_sql_server_has_database');
  });

  test('entity type has no underscore', () => {
    expect(
      generateRelationshipType('HAS', 'employee', 'user_endpoint')
    ).toEqual('employee_has_user_endpoint');
  });
});
