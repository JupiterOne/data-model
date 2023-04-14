/* eslint-disable */
import { EntityJson } from './Base';

/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * An object to represent an assessment, including both compliance assessment such as a HIPAA Risk Assessment or a technical assessment such as a Penetration Testing. Each assessment should have findings (e.g. Vulnerability or Risk) associated.
 */
export type AssessmentJson = EntityJson & {
  /**
   * The category of the Assessment.
   */
  category: string;
  /**
   * The summary description of the Assessment.
   */
  summary: string;
  /**
   * Indicates if this is an internal or external assessment/audit. Defaults to true.
   */
  internal: boolean;
  /**
   * The timestamp (in milliseconds since epoch) when the Assessment was started.
   */
  startedOn?: number;
  /**
   * The timestamp (in milliseconds since epoch) when the Assessment was completed.
   */
  completedOn?: number;
  /**
   * Link to the assessment report, if available.
   */
  reportURL?: string;
  /**
   * Email or name or ID of the assessor
   */
  assessor?: string;
  /**
   * List of email or name or ID of the assessors
   */
  assessors?: string[];
  [k: string]: unknown;
};
