/* eslint-disable */
import { EntityJson } from './Base';

/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A software or hardware module. Such as an npm_module or java_library.
 */
export type ModuleJson = EntityJson & {
  /**
   * Indicates if this is a public module.
   */
  public?: boolean;
  [k: string]: unknown;
};
