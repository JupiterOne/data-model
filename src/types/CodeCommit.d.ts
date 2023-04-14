/* eslint-disable */
import { EntityJson } from './Base';

/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A code commit to a repo. The commit id is captured in the _id property of the Entity.
 */
export type CodeCommitJson = EntityJson & {
  /**
   * The branch the code was committed to.
   */
  branch: string;
  /**
   * The commit message.
   */
  message: string;
  /**
   * Indicates if this commit is a merge, defaults to false.
   */
  merge: boolean;
  /**
   * Indicates if this commit is a versionBump, defaults to false.
   */
  versionBump: boolean;
  [k: string]: unknown;
};
