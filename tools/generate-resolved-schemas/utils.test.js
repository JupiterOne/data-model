const { resolveSchema, buildIdToSchemaMap } = require('./utils');

test('resolves a basic single schema', () => {
  const graphObjectSchema = createGraphObjectSchema();
  const idToSchemaMap = buildIdToSchemaMap([graphObjectSchema]);
  const resolvedSchema = resolveSchema(idToSchemaMap, graphObjectSchema.$id);

  // because there are no external references, we don't expect any changes
  expect(resolvedSchema).toEqual(graphObjectSchema);
});

test('resolves a schema with references to other schemas', () => {
  const basicSchema = createGraphObjectSchema();
  const entitySchema = createEntitySchema();
  const idToSchemaMap = buildIdToSchemaMap([basicSchema, entitySchema]);

  const resolvedSchema = resolveSchema(idToSchemaMap, entitySchema.$id);

  expect(resolvedSchema).toEqual({
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'Entity.json',
    description:
      'A node in the graph database that represents an Entity. This reference schema defines common shared properties among most Entities.',
    type: 'object',
    properties: {
      _key: {
        inherited: true,
        description:
          'An identifier unique within the scope containing the object. For example, for a Bitbucket repo, this will be the GUID of the repo as assigned by Bitbucket. For an IAM Role, this will be the ARN of the role.',
        type: 'string',
        minLength: 10,
      },
      _class: {
        inherited: true,
        description:
          "One or more classes conforming to a standard, abstract security data model. For example, an EC2 instance will have '_class':'Host'.",
        oneOf: [
          {
            type: 'string',
            minLength: 2,
          },
          {
            type: 'array',
            minItems: 1,
            items: {
              type: 'string',
              minLength: 2,
            },
          },
        ],
      },
      _type: {
        inherited: true,
        description:
          "The type of object, typically reflecting the vendor and resource type. For example, 'aws_iam_user'. In some cases, a system knows about a type of entity that other systems know about, such as 'user_endpoint'.",
        type: 'string',
        minLength: 5,
      },
      id: {
        description:
          'Identifiers of this entity assigned by the providers. Values are expected to be unique within the provider scope.',
        anyOf: [
          {
            type: 'string',
          },
          {
            type: 'array',
            items: {
              type: 'string',
            },
          },
        ],
      },
      name: {
        description: 'Name of this entity',
        type: 'string',
      },
      displayName: {
        description:
          "Display name, e.g. a person's preferred name or an AWS account alias",
        type: 'string',
      },
      summary: {
        description: 'A summary / short description of this entity.',
        type: 'string',
      },
      description: {
        description: 'An extended description of this entity.',
        type: 'string',
      },
      classification: {
        description:
          'The sensitivity of the data; should match company data classification scheme',
        type: ['string', 'null'],
        examples: ['critical', 'confidential', 'internal', 'public'],
      },
      criticality: {
        description:
          'A number that represents the value or criticality of this entity, on a scale between 1-10.',
        type: 'integer',
        minimum: 1,
        maximum: 10,
      },
      risk: {
        description: 'The risk level of this entity, on a scale between 1-10.',
        type: 'integer',
        minimum: 1,
        maximum: 10,
      },
      trust: {
        description: 'The trust level of this entity, on a scale between 1-10.',
        type: 'integer',
        minimum: 1,
        maximum: 10,
      },
      complianceStatus: {
        description:
          'The compliance status of the entity, as a percentage of compliancy.',
        type: 'number',
        minimum: 0,
        maximum: 1,
      },
      status: {
        description:
          'Status of this entity set by the external source system or by a user, e.g. Active, Inactive, Decommissioned',
        type: 'string',
        examples: [
          'active',
          'inactive',
          'suspended',
          'terminated',
          'open',
          'closed',
          'pending',
          'unknown',
          'other',
        ],
      },
      active: {
        description: 'Indicates if this entity is currently active.',
        type: 'boolean',
      },
      public: {
        description:
          'Indicates if this is a public-facing resource (e.g. a public IP or public DNS record) or if the entity is publicly accessible. Default is false.',
        type: 'boolean',
      },
      validated: {
        description:
          'Indicates if this node has been validated as a known/valid Entity.',
        type: 'boolean',
      },
      temporary: {
        description:
          'Indicates if this node is a temporary resource, such as a lambda instance or an EC2 instance started by ECS.',
        type: 'boolean',
      },
      trusted: {
        description:
          'Indicates if this is a trusted resource. For example, a trusted Network, Host, Device, Application, Person, User, or Vendor.',
        type: 'boolean',
      },
      createdOn: {
        description:
          'The timestamp (in milliseconds since epoch) when the entity was created at the source. This is different than `_createdOn` which is the timestamp the entity was first ingested into JupiterOne.',
        type: 'number',
        format: 'date-time',
      },
      updatedOn: {
        description:
          'The timestamp (in milliseconds since epoch) when the entity was last updated at the source.',
        type: 'number',
        format: 'date-time',
      },
      deletedOn: {
        description:
          'The timestamp (in milliseconds since epoch) when the entity was deleted at the source.',
        type: 'number',
        format: 'date-time',
      },
      discoveredOn: {
        description:
          'The timestamp (in milliseconds since epoch) when the entity was discovered.',
        type: 'number',
        format: 'date-time',
      },
      expiresOn: {
        description:
          'If the entity is a temporary resource, optionally set the expiration date. For example, the expiration date of an SSL cert.',
        type: 'number',
        format: 'date-time',
      },
      createdBy: {
        description: 'The source/principal/user that created the entity',
        type: 'string',
      },
      updatedBy: {
        description: 'The source/principal/user that updated the entity',
        type: 'string',
      },
      deletedBy: {
        description: 'The source/principal/user that deleted the entity',
        type: 'string',
      },
      discoveredBy: {
        description: 'The source/principal/user that discovered the entity',
        type: 'string',
      },
      webLink: {
        description:
          'Web link to the source. For example: https://console.aws.amazon.com/iam/home#/roles/Administrator. This property is used by the UI to add a hyperlink to the entity.',
        type: 'string',
        format: 'uri',
      },
      owner: {
        description:
          'The owner of this entity. This could reference the name of the owner, or as reference ID/key to another entity in the graph as the owner.',
        type: 'string',
      },
      tags: {
        description: 'An array of unnamed tags',
        type: 'array',
        items: {
          type: 'string',
        },
      },
      notes: {
        description: 'User provided notes about this entity',
        type: 'array',
        items: {
          type: 'string',
        },
      },
    },
  });
});

test('resolves a schema with references to other schemas without side-effects', () => {
  const basicSchema = createGraphObjectSchema();
  const entitySchema = createEntitySchema();
  const idToSchemaMap = buildIdToSchemaMap([basicSchema, entitySchema]);

  // first resolve entity schema since it references basic schema
  // and could, in theory, have side effects
  resolveSchema(idToSchemaMap, entitySchema.$id);

  const resolvedSchema = resolveSchema(idToSchemaMap, basicSchema.$id);

  expect(resolvedSchema).toEqual(basicSchema);
});

// createBasicSchema returns a basic schema with no $ref's to other schemas
function createGraphObjectSchema() {
  return {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'GraphObject.json',
    description:
      'Standard metadata properties of a graph object, maintained by the system. These are visible to users but may not be directly modified.',
    type: 'object',
    propertyNames: {
      pattern: '^(_|tag\\.)?[A-Za-z0-9. -]+$',
    },
    properties: {
      _key: {
        description:
          'An identifier unique within the scope containing the object. For example, for a Bitbucket repo, this will be the GUID of the repo as assigned by Bitbucket. For an IAM Role, this will be the ARN of the role.',
        type: 'string',
        minLength: 10,
      },
      _class: {
        description:
          "One or more classes conforming to a standard, abstract security data model. For example, an EC2 instance will have '_class':'Host'.",
        oneOf: [
          {
            type: 'string',
            minLength: 2,
          },
          {
            type: 'array',
            minItems: 1,
            items: {
              type: 'string',
              minLength: 2,
            },
          },
        ],
      },
      _type: {
        description:
          "The type of object, typically reflecting the vendor and resource type. For example, 'aws_iam_user'. In some cases, a system knows about a type of entity that other systems know about, such as 'user_endpoint'.",
        type: 'string',
        minLength: 5,
      },
    },
    patternProperties: {
      '^tag\\.': {
        description:
          "Named tags assigned to the entity (i.e., 'tag.Name', 'tag.OtherName')",
        anyOf: [
          {
            type: 'string',
          },
          {
            type: 'number',
          },
          {
            type: 'boolean',
          },
        ],
      },
    },
    required: ['_key', '_class', '_type'],
  };
}

function createEntitySchema() {
  return {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'Entity.json',
    description:
      'A node in the graph database that represents an Entity. This reference schema defines common shared properties among most Entities.',
    type: 'object',
    allOf: [
      { $ref: 'GraphObject.json' },
      {
        properties: {
          id: {
            description:
              'Identifiers of this entity assigned by the providers. Values are expected to be unique within the provider scope.',
            anyOf: [
              {
                type: 'string',
              },
              {
                type: 'array',
                items: {
                  type: 'string',
                },
              },
            ],
          },
          name: {
            description: 'Name of this entity',
            type: 'string',
          },
          displayName: {
            description:
              "Display name, e.g. a person's preferred name or an AWS account alias",
            type: 'string',
          },
          summary: {
            description: 'A summary / short description of this entity.',
            type: 'string',
          },
          description: {
            description: 'An extended description of this entity.',
            type: 'string',
          },
          classification: {
            description:
              'The sensitivity of the data; should match company data classification scheme',
            type: ['string', 'null'],
            examples: ['critical', 'confidential', 'internal', 'public'],
          },
          criticality: {
            description:
              'A number that represents the value or criticality of this entity, on a scale between 1-10.',
            type: 'integer',
            minimum: 1,
            maximum: 10,
          },
          risk: {
            description:
              'The risk level of this entity, on a scale between 1-10.',
            type: 'integer',
            minimum: 1,
            maximum: 10,
          },
          trust: {
            description:
              'The trust level of this entity, on a scale between 1-10.',
            type: 'integer',
            minimum: 1,
            maximum: 10,
          },
          complianceStatus: {
            description:
              'The compliance status of the entity, as a percentage of compliancy.',
            type: 'number',
            minimum: 0,
            maximum: 1,
          },
          status: {
            description:
              'Status of this entity set by the external source system or by a user, e.g. Active, Inactive, Decommissioned',
            type: 'string',
            examples: [
              'active',
              'inactive',
              'suspended',
              'terminated',
              'open',
              'closed',
              'pending',
              'unknown',
              'other',
            ],
          },
          active: {
            description: 'Indicates if this entity is currently active.',
            type: 'boolean',
          },
          public: {
            description:
              'Indicates if this is a public-facing resource (e.g. a public IP or public DNS record) or if the entity is publicly accessible. Default is false.',
            type: 'boolean',
          },
          validated: {
            description:
              'Indicates if this node has been validated as a known/valid Entity.',
            type: 'boolean',
          },
          temporary: {
            description:
              'Indicates if this node is a temporary resource, such as a lambda instance or an EC2 instance started by ECS.',
            type: 'boolean',
          },
          trusted: {
            description:
              'Indicates if this is a trusted resource. For example, a trusted Network, Host, Device, Application, Person, User, or Vendor.',
            type: 'boolean',
          },
          createdOn: {
            description:
              'The timestamp (in milliseconds since epoch) when the entity was created at the source. This is different than `_createdOn` which is the timestamp the entity was first ingested into JupiterOne.',
            type: 'number',
            format: 'date-time',
          },
          updatedOn: {
            description:
              'The timestamp (in milliseconds since epoch) when the entity was last updated at the source.',
            type: 'number',
            format: 'date-time',
          },
          deletedOn: {
            description:
              'The timestamp (in milliseconds since epoch) when the entity was deleted at the source.',
            type: 'number',
            format: 'date-time',
          },
          discoveredOn: {
            description:
              'The timestamp (in milliseconds since epoch) when the entity was discovered.',
            type: 'number',
            format: 'date-time',
          },
          expiresOn: {
            description:
              'If the entity is a temporary resource, optionally set the expiration date. For example, the expiration date of an SSL cert.',
            type: 'number',
            format: 'date-time',
          },
          createdBy: {
            description: 'The source/principal/user that created the entity',
            type: 'string',
          },
          updatedBy: {
            description: 'The source/principal/user that updated the entity',
            type: 'string',
          },
          deletedBy: {
            description: 'The source/principal/user that deleted the entity',
            type: 'string',
          },
          discoveredBy: {
            description: 'The source/principal/user that discovered the entity',
            type: 'string',
          },
          webLink: {
            description:
              'Web link to the source. For example: https://console.aws.amazon.com/iam/home#/roles/Administrator. This property is used by the UI to add a hyperlink to the entity.',
            type: 'string',
            format: 'uri',
          },
          owner: {
            description:
              'The owner of this entity. This could reference the name of the owner, or as reference ID/key to another entity in the graph as the owner.',
            type: 'string',
          },
          tags: {
            description: 'An array of unnamed tags',
            type: 'array',
            items: {
              type: 'string',
            },
          },
          notes: {
            description: 'User provided notes about this entity',
            type: 'array',
            items: {
              type: 'string',
            },
          },
        },
        required: ['name', 'displayName'],
      },
    ],
  };
}
