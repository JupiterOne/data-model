# JupiterOne Graph Data Model

- [Data Model Guide](https://support.jupiterone.io/hc/en-us/sections/360002424373-JupiterOne-Graph-Data-Model)

The **JupiterOne Graph Data Model** describes a set of common classifications
for data found in an organization's set of digital assets, as well as common
property names and relationships.

The model not represent a strict requirement for data stored in the JupiterOne
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
