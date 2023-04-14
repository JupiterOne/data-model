import { getSchema } from './getSchema';

test('returns undefined if no schema for class', () => {
  expect(getSchema('ChimkenNumget')).toBeUndefined();
});

test('returns schema if it exists for class', () => {
  expect(getSchema('Account')).toMatchObject({
    $id: 'Account.json',
  });
});
test('returns schema if it exists for class even with .json', () => {
  expect(getSchema('Account.json')).toMatchObject({
    $id: 'Account.json',
  });
});
