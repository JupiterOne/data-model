import { RawDataTracking } from './types';
/**
 * Relationship `_type` can be generated from the `_type`s of related entities.
 * The relationship `_class` is required to ensure that the relationship `_type`
 * is distinguished from other relationships between entities of the same
 * `_type`s. This supports finding all relationships of a type for the purpose
 * of set synchronization.
 */
export function generateRelationshipType(
  _class: string,
  from: { _type: string } | string,
  to: { _type: string } | string
): string {
  if (!from || !to) {
    throw new Error(
      '"from" and "to" must be provided to generate a relationship _type!'
    );
  }

  const fromValue = typeof from === 'string' ? from : from._type;
  const toValue = typeof to === 'string' ? to : to._type;

  const fromValueParts = fromValue.split('_');
  const toValueParts = toValue.split('_');

  let i = 0;
  do {
    if (toValueParts[i] === fromValueParts[i]) {
      i++;
    } else {
      break;
    }
  } while (i < toValueParts.length - 1);

  return `${fromValue}_${_class.toLowerCase()}_${toValueParts
    .slice(i)
    .join('_')}`;
}

/**
 * Relationship `_key` can be generated from the `_key`s of related entities.
 * The relationship `_class` is required to ensure that the relationship `_key`
 * is distinguished from other relationships between entities of the same
 * `_key`s.
 */
export function generateRelationshipKey(
  _class: string,
  from: { _key: string } | string,
  to: { _key: string } | string
): string {
  if (!from || !to) {
    throw new Error(
      '"from" and "to" must be provided to generate a relationship _key!'
    );
  }

  const fromValue = typeof from === 'string' ? from : from._key;
  const toValue = typeof to === 'string' ? to : to._key;
  return `${fromValue}|${_class.toLowerCase()}|${toValue}`;
}

/**
 * Validates collection of raw data, throwing an error when invalid.
 *
 * @param trackingEntity entity with _rawData
 * @throws Error when a duplicate name is encountered
 */
export function validateRawData(trackingEntity: RawDataTracking): void {
  if (trackingEntity._rawData) {
    const names = new Set<string>();
    for (const data of trackingEntity._rawData) {
      if (names.has(data.name)) {
        throw new Error(`Duplicate raw data name '${data.name}'!`);
      } else {
        names.add(data.name);
      }
    }
  }
}
