export interface FirewallRuleProperties {
  /**
   * The rule's position in the list, indicating priority order of the rule.
   * Aliased as `priority`.
   */
  ruleNumber?: number;

  /**
   * The rule's position in the list, indicating priority order of the rule.
   * Aliased as `ruleNumber`.
   */
  priority?: number;

  /**
   * The internet protocol allowed by the rule, '*' indicating there is no
   * restriction on the protocol.
   * Aliased as `protocol`.
   */
  ipProtocol: '*' | string;

  /**
   * The internet protocol allowed by the rule, '*' indicating there is no
   * restriction on the protocol.
   * Aliased as `ipProtocol`.
   */
  protocol: '*' | string;

  /**
   * Packets having a src port matching the fromPort are allowed.
   */
  fromPort?: number;

  /**
   * Packets having a dst port matching the toPort are allowed.
   */
  toPort?: number;

  /**
   * 'fromPort-toPort' or '*' (any)
   */
  portRange?: '*' | string;

  /**
   * Traffic is allowed to flow out of instances associated with the owning
   * entity.
   * Aliased as `outbound`.
   */
  egress: boolean;

  /**
   * Traffic is allowed to flow out of instances associated with the owning
   * entity.
   * Aliased as `egress`.
   */
  outbound: boolean;

  /**
   * Traffic is allowed to flow into instances associated with the owning
   * entity.
   * Aliased as `inbound`.
   */
  ingress: boolean;

  /**
   * Traffic is allowed to flow into instances associated with the owning
   * entity.
   * Aliased as `ingress`.
   */
  inbound: boolean;
}
