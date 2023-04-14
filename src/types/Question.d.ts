/* eslint-disable */
import { EntityJson } from './Base';

/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * An object that represents an inquiry, usually around some matter of uncertainty or difficulty.
 */
export type QuestionJson = EntityJson & {
  /**
   * A request for information that contributes to answering a question.
   */
  queries: string[];
  [k: string]: unknown;
};
