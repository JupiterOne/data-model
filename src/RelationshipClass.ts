/**
 * Standardized values for relationship `_class`.
 */
export enum RelationshipClass {
  /**
   * A relationship between an {AccessPolicy, Firewall} and a resource Entity.
   */
  ALLOWS = 'ALLOWS',

  /**
   * A relationship between a User and a PR.
   */
  APPROVED = 'APPROVED',

  /**
   * A relationship between a {AccessRole, User, Group} and AccessPolicy.
   */
  ASSIGNED = 'ASSIGNED',
  CONNECTS = 'CONNECTS',

  /**
   * Closely related to or interchangeable with HAS.
   */
  CONTAINS = 'CONTAINS',

  /**
   * A relationship between a User and any Entity.
   */
  CREATED = 'CREATED',

  /**
   * A relationship between a CodeRepo and Function.
   */
  DEFINES = 'DEFINES',

  /**
   * A relationship between an {AccessPolicy, Firewall} and a resource Entity.
   */
  DENIES = 'DENIES',

  DEPLOYED = 'DEPLOYED',

  /**
   * A relationship between a {Vulnerability, Finding} and Weakness.
   */
  EXPLOITS = 'EXPLOITS',

  EXTENDS = 'EXTENDS',

  /**
   * A relationship indicating an Entity is responsible for generating another Entity.
   *
   * Examples:
   *
   * * Project - GENERATED -> Finding
   */
  GENERATED = 'GENERATED',

  /**
   * A relationship between a group or service Entity and a member of that Entity.
   * Closely related to or interchangeable with CONTAINS.
   */
  HAS = 'HAS',

  /**
   * A relationship indicating an Entity identified another Entity.
   *
   * Examples:
   *
   * * Service - IDENTIFIED -> Finding
   */
  IDENTIFIED = 'IDENTIFIED',

  IMPLEMENTS = 'IMPLEMENTS',

  /**
   * A relationship indicating an Entity is an instance of another Entity.
   *
   * Examples:
   *
   * * Finding - IS -> Vulnerability
   * * User - IS -> Person
   */
  IS = 'IS',

  MANAGES = 'MANAGES',
  MITIGATES = 'MITIGATES',
  MONITORS = 'MONITORS',
  OPENED = 'OPENED',
  OWNS = 'OWNS',
  PERFORMED = 'PERFORMED',
  PROTECTS = 'PROTECTS',
  PROVIDES = 'PROVIDES',

  /**
   * A relationships indicating an Entity performs some kind of scan on another Entity.
   *
   * Examples:
   *
   * * Service - SCANS -> Host
   */
  SCANS = 'SCANS',

  TRIGGERS = 'TRIGGERS',
  TRUSTS = 'TRUSTS',

  /**
   * A relationship between a User and any Entity.
   */
  UPDATED = 'UPDATED',

  /**
   * A relationship indicating an Entity utilizes another Entity. Typically, the
   * target Entity can be "used" by many source Entities.
   *
   * Examples:
   *
   * * Host - USES -> DataStore
   * * UserRole - USES -> AccessPolicy
   */
  USES = 'USES',
}
