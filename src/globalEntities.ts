export const EVERYONE = {
  _class: ['UserGroup', 'Everyone'],
  _type: 'everyone',
  _key: 'global:everyone',
  principal: '*',
  public: true,
  displayName: 'Everyone (Public Global)',
};

export const INTERNET = {
  _class: ['Internet', 'Network'],
  _type: 'internet',
  _key: 'global:internet',
  CIDR: '0.0.0.0/0',
  CIDRv6: '::/0',
  public: true,
  displayName: 'Internet',
};
