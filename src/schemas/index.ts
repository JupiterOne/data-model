import Ajv from 'ajv';

import GraphObject from './GraphObject.json';
import Entity from './Entity.json';

import Account from './Account.json';
import ControlPolicy from './ControlPolicy.json';
import Database from './Database.json';
import DataStore from './DataStore.json';
import Device from './Device.json';
import Firewall from './Firewall.json';
import Gateway from './Gateway.json';
import Group from './Group.json';
import Host from './Host.json';
import HostAgent from './HostAgent.json';
import Network from './Network.json';
import Service from './Service.json';
import User from './User.json';
import UserGroup from './UserGroup.json';

export enum RelationshipClass {
  ALLOWS = 'ALLOWS',
  ASSIGNED = 'ASSIGNED',
  CONNECTS = 'CONNECTS',
  CONTAINS = 'CONTAINS',
  DEPLOYED = 'DEPLOYED',
  EXTENDS = 'EXTENDS',
  HAS = 'HAS',
  IDENTIFIED = 'IDENTIFIED',
  IMPLEMENTS = 'IMPLEMENTS',
  IS = 'IS',
  MANAGES = 'MANAGES',
  MITIGATES = 'MITIGATES',
  MONITORS = 'MONITORS',
  OPENED = 'OPENED',
  OWNS = 'OWNS',
  PERFORMED = 'PERFORMED',
  PROTECTS = 'PROTECTS',
  PROVIDES = 'PROVIDES',
  TRIGGERS = 'TRIGGERS',
  TRUSTS = 'TRUSTS',
  USES = 'USES',
}

type SchemaProperties = {
  [propertyName: string]: any;
};

export type IntegrationEntitySchema = {
  $ref?: string;
  allOf?: IntegrationEntitySchema[];
  properties?: SchemaProperties;
  required?: string[];
};

export const IntegrationSchemaMap: {
  [_class: string]: IntegrationEntitySchema;
} = {
  GraphObject,
  Entity,

  Account,
  ControlPolicy,
  Database,
  DataStore,
  Device,
  Firewall,
  Gateway,
  Group,
  Host,
  HostAgent,
  Network,
  Service,
  User,
  UserGroup,
};

// JSON Schema allows an object to contain properties that are not specified by
// the schema. This can be disabled with `additionalProperties: false`. Ajv then
// supports a `removeAdditional` option, directing it to remove any properties
// from an object which are not specified in the schema.
//
// We need to allow additional properties in practice because:
//
// 1) we already have a lot of integrations throwing all sorts of custom
//    properties on entities and
// 2) when an entity has multiple classes, each schema needs to allow for
//    properties from other schemas.
/**
 * An Ajv schema for integration graph objects, useful for validating entities
 * creating by an integration.
 */
export const IntegrationSchema = new Ajv({ unknownFormats: 'ignore' });
IntegrationSchema.addSchema(Object.values(IntegrationSchemaMap));
