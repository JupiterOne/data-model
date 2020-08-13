/**
 * Standardized values for relationship `_class`.
 */
export enum RelationshipClass {
  ALLOWS = 'ALLOWS',
  ASSIGNED = 'ASSIGNED',
  CONNECTS = 'CONNECTS',
  CONTAINS = 'CONTAINS',

  /**
   * A relationship between a User and any Entity.
   */
  CREATED = 'CREATED',

  /**
   * A relationship between a CodeRepo and Function.
   */
  DEFINES = 'DEFINES',
  
  DEPLOYED = 'DEPLOYED',

  /**
   * A relationship between a {Vulnerability, Finding} and Weakness.
   */
  EXPLOITS = 'EXPLOITS',

  EXTENDS = 'EXTENDS',

  /**
   * A relationship between any Entity and {Finding, Incident}.
   */
  GENERATED = 'GENERATED',

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

  /**
   * A relationship between a User and any Entity.
   */
  UPDATED = 'UPDATED',

  USES = 'USES',
};
