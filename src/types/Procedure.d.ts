/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A written procedure and control documentation. A Procedure typically `IMPLEMENTS` a parent Policy. An actual Control further `IMPLEMENTS` a Procedure.
 */
export type Procedure = RecordEntity & {
  /**
   * Title of the procedure
   */
  title: string;
  /**
   * Summary or overview the describes the procedure. Summary text is intended as guidance to the author and not included in the published version.
   */
  summary: string;
  /**
   * Author of the record
   */
  author?: string;
  /**
   * Text content of the policy. For policies/procedures used by the Policy Builder app, this will contain the template text in markdown format. Stored in raw data.
   */
  content: string;
  /**
   * The type of control specified by this procedure.
   */
  control?: string;
  /**
   * Indicates if procedure is applicable based on the organization's current risk and compliance needs. A Policy that is not applicable may become applicable later as the organization's requirements and maturity change.
   */
  applicable?: boolean;
  /**
   * Indicates if procedure has been adopted. Only adopted policies and procedures are included in the published view of the Policy Builder app.
   */
  adopted?: boolean;
  [k: string]: unknown;
};
/**
 * A node in the graph database that represents a Record Entity, with a set of different defined common properties than standard (resource) entities.
 */
export type RecordEntity = {
  [k: string]: unknown;
} & {
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
