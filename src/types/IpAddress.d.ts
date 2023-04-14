/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * An re-assignable IpAddress resource entity. Do not create an entity for an IP Address _configured_ on a Host. Use this only if the IP Address is a reusable resource, such as an Elastic IP Address object in AWS.
 */
export type IpAddress = Entity & {
  /**
   * The assigned DNS name
   */
  dnsName?: string;
  /**
   * The assigned IP address
   */
  ipAddress: string;
  /**
   * The assigned public IP address
   */
  publicIpAddress?: string;
  /**
   * The assigned private IP address
   */
  privateIpAddress?: string;
  /**
   * Indicates IP version 4 or 6
   */
  ipVersion?: 4 | 6;
  [k: string]: unknown;
};
/**
 * A node in the graph database that represents an Entity. This reference schema defines common shared properties among most Entities.
 */
export type Entity = {
  [k: string]: unknown;
} & {
  /**
   * Identifiers of this entity assigned by the providers. Values are expected to be unique within the provider scope.
   */
  id?: string | string[];
  /**
   * Name of this entity
   */
  name: string;
  /**
   * Display name, e.g. a person's preferred name or an AWS account alias
   */
  displayName: string;
  /**
   * A summary / short description of this entity.
   */
  summary?: string;
  /**
   * An extended description of this entity.
   */
  description?: string;
  /**
   * The sensitivity of the data; should match company data classification scheme
   */
  classification?: string | null;
  /**
   * A number that represents the value or criticality of this entity, on a scale between 1-10.
   */
  criticality?: number;
  /**
   * The risk level of this entity, on a scale between 1-10.
   */
  risk?: number;
  /**
   * The trust level of this entity, on a scale between 1-10.
   */
  trust?: number;
  /**
   * The compliance status of the entity, as a percentage of compliancy.
   */
  complianceStatus?: number;
  /**
   * Status of this entity set by the external source system or by a user, e.g. Active, Inactive, Decommissioned
   */
  status?: string;
  /**
   * Indicates if this entity is currently active.
   */
  active?: boolean;
  /**
   * Indicates if this is a public-facing resource (e.g. a public IP or public DNS record) or if the entity is publicly accessible. Default is false.
   */
  public?: boolean;
  /**
   * Indicates if this node has been validated as a known/valid Entity.
   */
  validated?: boolean;
  /**
   * Indicates if this node is a temporary resource, such as a lambda instance or an EC2 instance started by ECS.
   */
  temporary?: boolean;
  /**
   * Indicates if this is a trusted resource. For example, a trusted Network, Host, Device, Application, Person, User, or Vendor.
   */
  trusted?: boolean;
  /**
   * The timestamp (in milliseconds since epoch) when the entity was created at the source. This is different than `_createdOn` which is the timestamp the entity was first ingested into JupiterOne.
   */
  createdOn?: number;
  /**
   * The timestamp (in milliseconds since epoch) when the entity was last updated at the source.
   */
  updatedOn?: number;
  /**
   * The timestamp (in milliseconds since epoch) when the entity was deleted at the source.
   */
  deletedOn?: number;
  /**
   * The timestamp (in milliseconds since epoch) when the entity was discovered.
   */
  discoveredOn?: number;
  /**
   * If the entity is a temporary resource, optionally set the expiration date. For example, the expiration date of an SSL cert.
   */
  expiresOn?: number;
  /**
   * The source/principal/user that created the entity
   */
  createdBy?: string;
  /**
   * The source/principal/user that updated the entity
   */
  updatedBy?: string;
  /**
   * The source/principal/user that deleted the entity
   */
  deletedBy?: string;
  /**
   * The source/principal/user that discovered the entity
   */
  discoveredBy?: string;
  /**
   * Web link to the source. For example: https://console.aws.amazon.com/iam/home#/roles/Administrator. This property is used by the UI to add a hyperlink to the entity.
   */
  webLink?: string;
  /**
   * The owner of this entity. This could reference the name of the owner, or as reference ID/key to another entity in the graph as the owner.
   */
  owner?: string;
  /**
   * An array of unnamed tags
   */
  tags?: string[];
  /**
   * User provided notes about this entity
   */
  notes?: string[];
  [k: string]: unknown;
};
