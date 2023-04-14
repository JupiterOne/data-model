/* eslint-disable */
import { Entity } from './Base';

/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A service provided by a vendor.
 */
export type Service = Entity & {
  /**
   * The category of service, e.g. software, platform, infrastructure, other
   */
  category: string[];
  /**
   * The functions provided by the service, e.g. access-review, database, load-balancing, other
   */
  function: string[];
  /**
   * Array of service endpoints, e.g. ec2.amazonaws.com
   */
  endpoints?: string[];
  /**
   * Indicates whether this service is compliant with FedRAMP Moderate
   */
  fedrampModerate?: boolean;
  /**
   * Indicates whether this service is HIPPA eligible
   */
  hipaaEligible?: boolean;
  [k: string]: unknown;
};