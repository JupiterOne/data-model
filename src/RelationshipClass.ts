/**
 * Standardized values for relationship `_class`.
 */
export enum RelationshipClass {
  /**
   * A relationship between an AccessPolicy and a resource Entity.
   */
  ALLOWS = "ALLOWS",

  /**
   * A relationship between a {AccessRole, User, Group} and AccessPolicy.
   */
  ASSIGNED = "ASSIGNED",
  CONNECTS = "CONNECTS",
  CONTAINS = "CONTAINS",

  /**
   * A relationship between a User and any Entity.
   */
  CREATED = "CREATED",

  /**
   * A relationship between a CodeRepo and Function.
   */
  DEFINES = "DEFINES",

  /**
   * A relationship between an AccessPolicy and a resource Entity.
   */
  DENIES = "DENIES",

  DEPLOYED = "DEPLOYED",

  /**
   * A relationship between a {Vulnerability, Finding} and Weakness.
   */
  EXPLOITS = "EXPLOITS",

  EXTENDS = "EXTENDS",

  /**
   * A relationship between any Entity and {Finding, Incident}.
   */
  GENERATED = "GENERATED",

  /**
   * A relationship between any Entity and a direct descendant of that Entity.
   * The target entity cannot be "had" by more than one source entity.
   */
  HAS = "HAS",

  IDENTIFIED = "IDENTIFIED",
  IMPLEMENTS = "IMPLEMENTS",
  IS = "IS",
  MANAGES = "MANAGES",
  MITIGATES = "MITIGATES",
  MONITORS = "MONITORS",
  OPENED = "OPENED",
  OWNS = "OWNS",
  PERFORMED = "PERFORMED",
  PROTECTS = "PROTECTS",
  PROVIDES = "PROVIDES",
  TRIGGERS = "TRIGGERS",
  TRUSTS = "TRUSTS",

  /**
   * A relationship between a User and any Entity.
   */
  UPDATED = "UPDATED",

  /**
   * A relationship between any Entity and a utility Entity.
   * The target entity can be "used" by many source entities.
   */
  USES = "USES",
}
