export { createIntegrationEntity } from './createIntegrationEntity';
export { createIntegrationRelationship } from './createIntegrationRelationship';
export { assignTags, ResourceTagList, ResourceTagMap } from './tagging';
export { generateRelationshipKey, generateRelationshipType } from './util';
export * from './converters';
export * from './relationships';

import * as ipUtil from './ip';
import { EVERYONE, INTERNET } from './globalEntities';
import { RelationshipClass } from './schemas';

export const DataModel = {
  ipUtil,
  EVERYONE,
  INTERNET,
  RelationshipClass,
};
