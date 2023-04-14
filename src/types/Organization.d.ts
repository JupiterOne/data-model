/* eslint-disable */
import { EntityJson } from './Base';

/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * An organization, such as a company (e.g. JupiterOne) or a business unit (e.g. HR). An organization can be internal or external. Note that there is a more specific Vendor class.
 */
export type OrganizationJson = EntityJson & {
  /**
   * The type of organization (within the context of the primary organization).
   */
  _type?: string;
  /**
   * The organization's main website URL.
   */
  website?: string;
  /**
   * The domain name for internal organization email addresses.
   */
  emailDomain?: string;
  /**
   * Indicates if this organization is external
   */
  external?: boolean;
  [k: string]: unknown;
};
