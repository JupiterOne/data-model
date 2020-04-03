/**
 * A relationship between two entities, created by an integration.
 *
 * Integrations create instances of `RelationshipFromIntegration` or
 * `MappedRelationshipFromIntegration`.
 */
export interface IntegrationRelationship {
  _key: string;
  _type: string;
  _class: string;
  displayName: string;
}

/**
 * A relationship between two entities known to be managed by the integration.
 * See also `MappedRelationshipFromIntegration`.
 */
export interface RelationshipFromIntegration extends IntegrationRelationship {
  _fromEntityKey: string;
  _toEntityKey: string;
}

/**
 * Relationship direction.
 * `FORWARD` is from source to target.
 * `REVERSE` is from target to source.
 */
export enum RelationshipDirection {
  FORWARD = "FORWARD",
  REVERSE = "REVERSE"
}

export type TargetEntityProperties = any;

export type TargetFilterKey = string | string[];

/**
 * Metadata assigned to a `MappedRelationshipFromIntegration._mapping`.
 */
export interface RelationshipMapping {
  relationshipDirection: RelationshipDirection;
  sourceEntityKey: string;
  targetFilterKeys: TargetFilterKey[];
  targetEntity: TargetEntityProperties;
  skipTargetCreation?: boolean;
}

/**
 * A relationship between an entity managed by the integration, and an entity
 * that may be managed by a different integration or may not be known to any
 * integration.
 */
export interface MappedRelationshipFromIntegration extends IntegrationRelationship {
  _mapping: RelationshipMapping;
}

/**
 * `RawDataUploader` upload job input.
 */
export type RawUploadJobInput = {
  /**
   * A name that identifies the payload when there are multiple data sources
   * used to build an entity.
   *
   * This name is part of a permanent key associated with the data. It must be
   * unique within the context of the entity. `'default'` is an acceptable value
   * when there is only one data payload, though it is recommended to use names
   * that are more meaningful when there is more than one.
   *
   * For example, consider an AWS IAM Role entity, where the role has an
   * embedded policy obtained through a separate API call:
   *
   * ```
   * [
   *   { name: 'role', ... },
   *   { name: 'policy', ... }
   * ]
   * ```
   */
  name: string;

  /**
   * Any type of data representing the source content used to build an entity.
   */
  rawData: any;
};

/**
 * Properties used to track raw data associated with entities.
 */
export interface RawDataTracking {
  /**
   * Maintains references to a collection of raw data uploads accumulated during
   * the construction of an entity.
   *
   * This data will not be included in any operations delivered to the persister.
   * Each input is placed in a queue by the `RawDataUploader` for upload to
   * temporary storage and the associated storage URI is added to
   * `_rawDataTempUris`.
   */
  _rawData?: RawUploadJobInput[];
}

export interface EntityFromIntegration extends RawDataTracking {
  _type: string;
  _key: string;
}
