# JupiterOne Graph Data Model

- [Data Model Guide](https://community.askj1.com/kb/articles/846-jupiterone-data-model)

The **JupiterOne Graph Data Model** describes a set of common classifications
for data found in an organization's set of digital assets, as well as common
property names and relationships.

The model does not represent a strict requirement for data stored in the JupiterOne
graph. It is acceptable and common to include many additional properties on any
class of entity or relationship, when those properties provide value for
querying and reporting. It is however strongly recommended that similar data use
common class and property names where possible.

The value is realized when writing queries, or using queries others have
written, and when viewing a list of similar assets from any number of external
systems. For example, `find Host with ipAddress="192.168.10.23"` depends on the
data model, which works whether the asset is in AWS, Azure, GCP, or detected by
an on-prem scanner, or is a machine in the classic sense or a serverless
function. The list of results would have some common property names no matter
what a value is labeled in external systems.

Though the data model is not a strict schema, [there are schemas](/src/schemas)
which serve to communicate the data model and are used in JupiterOne UIs to
support entity creation, editing, and visualization. Additionally, integrations
are encouraged to generate entities and relationships that conform to the
schemas to help to drive the advancement of the data model and provide
consistency in the data we ingest. See the
[Integration SDK](https://github.com/JupiterOne/integration-sdk) for functions
that make this easy to do.

## Entities and Relationships

The data model is built for a knowledge graph -- entities and relationships, or
nodes and edges -- that reflects the stateful representation of the cyber
infrastructure and digital operations of an organization.

The schema for each entity and relationship describes a collection of common
attributes for that specific abstract class, along with graph object metadata
as described in [`GraphObject.json`](/src/schemas/GraphObject.json).

The data model combines the benefit of having vendor/provider specific attributes
together with abstract/normalized attributes. The vendor/provider specific
attributes are dynamically assigned and not defined by the data model. 

## The Concept of `_type` and `_class`

Each entity represents an actual operating element (a "thing") that is part of an organization's
cyber operations or infrastructure. This "thing" can be either physical or logical.

The metadata attributes `_type` and `_class` are used to defined what the asset is:

- `_type`: The value is a single string typically in the format of `${vendor}_${resource}`
  or `${vendor}_${product}_${resource}` in `snake_case`.

  > For example: `aws_instance`, `google_cloud_function`, `apple_tv`, `sentinelone_agent`

  It is important to note that in some cases, `${vendor}_${resource}` may not be ideal or feasible. 
  Here are some exceptions:

  For example, we may have directory data that comes in from an HR integration such as
  BambooHR or Rippling. The `Person` entity being created should have `_type: 'employee'` 
  `_type: 'contractor'` rather than `_type: 'bamboohr_employee'` or `_type: 'bamboohr_contractor'`.

  Another exception is for data that comes from integration with another ITSM or system, or another
  asset discovery tool, device management tool, or CMDB. While the system might be a good "source 
  of truth" or "system or record", they are not the actual vendor of those devices. Here are some 
  examples:
  
  - If a server or application is ingested from **ServiceNow**, the `_type` should *not* be
    `servicenow_server` or `servicenow_application`. 

  - If a Cisco switch is ingested from **Rumble** or **Netbox**, the `_type` shoule be
    `cisco_switch` instead of `rumble_switch` or `netbox_device`. 

  - If a smartphone/mobile device is managed by Google Workspace and ingested via the integration,
    the `_type` for the device should *not* be `google_mobile_device` because the device could be
    and Apple iPhone and it would be very confusing to call an iPhone a Google mobile device. 
    Instead, it should be `apple_iphone` (if we know what it is), or just using a generic value of
    `mobile_device`.

- `_class`: The value is a string or string array in `TitleCase` using a generic
  IT or Security terminology to describe the higher level category of the asset.

  > These are defined in [`src/schemas`](src/schemas).
