/**
 * An ssh-key, access-key, api-key/token, pgp-key, etc.
 */
export type Key = Entity & {
  /**
   * The fingerprint that identifies the key
   */
  fingerprint?: string;
  /**
   * The key material
   */
  material?: string;
  /**
   * The key usage - for example: ssh access or data encryption
   */
  usage?: string;
  [k: string]: unknown;
};
/**
 * A node in the graph database that represents an Entity. This reference schema defines common shared properties among most Entities.
 */
export type Entity = GraphObject & {
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
/**
 * Standard metadata properties of a graph object, maintained by the system. These are visible to users but may not be directly modified.
 */
export interface GraphObject {
  /**
   * Named tags assigned to the entity (i.e., 'tag.Name', 'tag.OtherName')
   *
   * This interface was referenced by `GraphObject`'s JSON-Schema definition
   * via the `patternProperty` "^tag\.".
   */
  [k: string]: string | number | boolean;
  /**
   * An identifier unique within the scope containing the object. For example, for a Bitbucket repo, this will be the GUID of the repo as assigned by Bitbucket. For an IAM Role, this will be the ARN of the role.
   */
  _key: string;
  /**
   * One or more classes conforming to a standard, abstract security data model. For example, an EC2 instance will have '_class':'Host'.
   */
  _class: string | [string, ...string[]];
  /**
   * The type of object, typically reflecting the vendor and resource type. For example, 'aws_iam_user'. In some cases, a system knows about a type of entity that other systems know about, such as 'user_endpoint' or 'cve'.
   */
  _type: string;
}
/**
 * A node in the graph database that represents a Record Entity, with a set of different defined common properties than standard (resource) entities.
 */
export type RecordEntity = GraphObject & {
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
   * The sensitivity of the data; should match company data classification scheme. For example: critical - confidential - internal - public.
   */
  classification?: string;
  /**
   * The category of the official record
   */
  category?: string;
  /**
   * Hyperlink to the location of this record, e.g. URL to a Jira issue
   */
  webLink?: string;
  /**
   * Text content of the record/documentation
   */
  content?: string;
  /**
   * Indicates if this record is currently open. For example, an open Vulnerability finding (Vulnerability extends Record).
   */
  open?: boolean;
  /**
   * If this is a public record. Defaults to false.
   */
  public?: boolean;
  /**
   * If this is a production record. For example, a production change management ticket would have this set to `true`, and have a `category` = `change` property. Another example would be a Vulnerability finding in production.
   */
  production?: boolean;
  /**
   * If this is record has been reviewed and approved.
   */
  approved?: boolean;
  /**
   * The timestamp (in milliseconds since epoch) when this record was approved.
   */
  approvedOn?: number;
  /**
   * The list of approvers on the record.
   */
  approvers?: string[];
  /**
   * The person or system that reported or created this record.
   */
  reporter?: string;
  /**
   * The timestamp (in milliseconds since epoch) when this record was reported/opened. In most cases, this would be the same as `createdOn` but occasionally a record can be created at a different time than when it was first reported.
   */
  reportedOn?: number;
  /**
   * The timestamp (in milliseconds since epoch) when the entity was created at the source. This is different than `_createdOn` which is the timestamp the entity was first ingested into JupiterOne.
   */
  createdOn?: number;
  /**
   * The timestamp (in milliseconds since epoch) when the entity was last updated at the source.
   */
  updatedOn?: number;
  /**
   * Indicates if this record has an applied exception. For example, exception for a known finding or a PR that is not fully approved.
   */
  exception?: boolean;
  /**
   * Reason / description of the exception.
   */
  exceptionReason?: string;
  [k: string]: unknown;
};
