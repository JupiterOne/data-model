/* eslint-disable */
import { Entity } from './Base';

/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A communication channel, such as a Slack channel or AWS SNS topic.
 */
export type Channel = Entity & {
  /**
   * Indicates whether the communication channel is encrypted.
   */
  encrypted?: boolean;
  [k: string]: unknown;
};
