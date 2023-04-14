/* eslint-disable */
import { RecordEntity } from './Base';

/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A review record.
 */
export type Review = RecordEntity & {
  /**
   * The title text of the review.
   */
  title: string;
  /**
   * The summary text of the review.
   */
  summary?: string;
  /**
   * The state of the review.
   */
  state?: string;
  [k: string]: unknown;
};