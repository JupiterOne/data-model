/* eslint-disable */
import { EntityJson } from './Base';

/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A network, such as an aws-vpc, aws-subnet, cisco-meraki-vlan.
 */
export type NetworkJson = EntityJson & {
  /**
   * The environment of network
   */
  environment?: string;
  /**
   * The IPv4 network CIDR block (e.g. 0.0.0.0/0)
   */
  CIDR: string | null;
  /**
   * The IPv6 network CIDR block (e.g. ::/0)
   */
  CIDRv6?: string;
  /**
   * Indicates if the network is publicly accessible.
   */
  public: boolean;
  /**
   * Indicates if this is an internal/private network.
   */
  internal: boolean;
  /**
   * Indicates if this is a wireless network.
   */
  wireless?: boolean;
  [k: string]: unknown;
};
