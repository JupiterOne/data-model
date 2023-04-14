/* eslint-disable */
import { EntityJson } from './Base';

/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * An access control role mapped to a Principal (e.g. user, group, or service).
 */
export type AccessRoleJson = EntityJson & {
  /**
   * Is the role an administrator role?
   */
  superAdmin?: boolean;
  /**
   * Is this a system role?
   */
  systemRole?: boolean;
  /**
   * The role's privilege service IDs
   */
  privilegeServiceIds?: string[];
  /**
   * The role's privilege names
   */
  privilegeNames?: string[];
  [k: string]: unknown;
};
