# JupiterOne Graph Data Model

The **JupiterOne Graph Data Model** describes a set of common classifications
for data found in an organization's set of digital assets, as well as common
property names and relationships.

## Table of Contents

- [Introduction](#introduction)
- [Entity Classifications](#entity-classifications)

## Introduction

The JupiterOne Graph Data Model is a set of common classifications for data
found in an organization's set of digital assets, as well as common property
names and relationships.

Use of the model is not a strict requirements for data stored in the JupiterOne
graph. It is acceptable and common for additional properties to be included on
any class of entity and relationship. However, it is strongly recommended that
similar data use the common classes and properties names from the data model
where possible.

The use of a common data model is realized when writing queries, opr using
queries others have writtern. For example,
`find Host with ipAddress="192.168.10.23"` depends on the data model, which
works whether the asset is in AWS, Azure, GCP, or detected by an on-prem
scanner, or is a machine in the classic sense or a serverless function. The list
of results would have some common property names no matter what a value is
labeled in external systems.

Though the data model is not a strict schema, [there are schemas](/src/schemas)
which serve to communicate the data model and are used in JupiterOne UIs to
support entity creation, editing, and visualization. Additionally, integrations
are encouraged to generate entities and relationships that conform to the
schemas to help to drive the advancement of the data model and provide
consistency in the data we ingest. See the
[Integration SDK](https://github.com/JupiterOne/integration-sdk) for functions
that make this easy to do.

## Entity Classifications

### [AccessKey](https://github.com/JupiterOne/data-model/blob/main/src/schemas/AccessKey.json)

A key used to grant access, such as ssh-key, access-key, api-key/token,
mfa-token/device, etc.

### Properties:

### [AccessPolicy](https://github.com/JupiterOne/data-model/blob/main/src/schemas/AccessPolicy.json)

A policy for access control assigned to a Host, Role, User, UserGroup, or
Service.

### Properties:

**admin**: `boolean`

- Indicates if the policy grants administrative privilege.

**content**: `string`

- Content of a policy contains the raw policy rules, if applicable. For example,
  the JSON text of an AWS IAM Policy. This is stored in raw data.

**rules**: `array`

- Rules of this policy. Each rule is written 'as-code' that can be
  operationalized with a control provider or within JupiterOne's rules engine.

### [AccessRole](https://github.com/JupiterOne/data-model/blob/main/src/schemas/AccessRole.json)

An access control role mapped to a Principal (e.g. user, group, or service).

### Properties:

**privilegeNames**: `array`

- The role's privilege names

**privilegeServiceIds**: `array`

- The role's privilege service IDs

**superAdmin**: `boolean`

- Is the role an administrator role?

**systemRole**: `boolean`

- Is this a system role?

### [Account](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Account.json)

An organizational account for a service or a set of services (e.g. AWS, Okta,
Bitbucket Team, Google G-Suite account, Apple Developer Account). Each Account
should be connected to a Service.

### Properties:

**accessURL**: `string`

- The main URL to access this account, e.g. https://jupiterone.okta.com

**mfaEnabled**: `boolean`

- Specifies whether multi-factor authentication (MFA) is enabled/required for
  users of this account.

### [Alert](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Alert.json)

A notice of any unusual or dangerous circumstance that is sent to responsible
parties for the purpose of triggering action.

### Properties:

### [Application](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Application.json)

A software product or application.

### Properties:

**COTS**: `boolean`

- Indicates if this is a Commercial Off-The-Shelf software application. Custom
  in-house developed application should have this set to false.

**FOSS**: `boolean`

- Indicates if this is a Free or Open-Source software application or library.
  Custom in-house developed application should have this set to false.

**SaaS**: `boolean`

- Indicates if this is a Software-as-a-Service product.

**alternateURLs**: `array`

- The additional URLs related to this application.

**devURL**: `string`

- The Development URL

**external**: `boolean`

- Indicates if this is an externally acquired software application. Custom
  in-house developed application should have this set to false.

**license**: `string`

- Stores the type of license

**licenseURL**: `string`

- The URL to the full license

**mobile**: `boolean`

- Indicates if this is a mobile app.

**productionURL**: `string`

- The Production URL

**stagingURL**: `string`

- The Non-Production / Staging URL

**testURL**: `string`

- The Test URL

### [ApplicationEndpoint](https://github.com/JupiterOne/data-model/blob/main/src/schemas/ApplicationEndpoint.json)

An application endpoint is a program interface that either initiates or receives
a request, such as an API.

### Properties:

**address**: `string`

- The endpoint address (e.g. an URI/URL, hostname)

### [Assessment](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Assessment.json)

An object to represent an assessment, including both compliance assessment such
as a HIPAA Risk Assessment or a technical assessment such as a Penetration
Testing. Each assessment should have findings (e.g. Vulnerability or Risk)
associated.

### Properties:

**assessor**: `string`

- Email or name or ID of the assessor

**assessors**: `array`

- List of email or name or ID of the assessors

**category**: `string`

- The category of the Assessment.

**completedOn**: `number`

- The timestamp (in milliseconds since epoch) when the Assessment was completed.

**internal**: `boolean`

- Indicates if this is an internal or external assessment/audit. Defaults to
  true.

**reportURL**: `string`

- Link to the assessment report, if available.

**startedOn**: `number`

- The timestamp (in milliseconds since epoch) when the Assessment was started.

**summary**: `string`

- The summary description of the Assessment.

### [Attacker](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Attacker.json)

An attacker or threat actor.

### Properties:

### [Backup](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Backup.json)

A specific repository or data store containing backup data.

### Properties:

**encrypted**: `boolean`

- Indicates whether the backup data is encrypted.

### [Certificate](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Certificate.json)

A digital Certificate such as an SSL or S/MIME certificate.

### Properties:

### [Channel](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Channel.json)

A communication channel, such as a Slack channel or AWS SNS topic.

### Properties:

**encrypted**: `boolean`

- Indicates whether the communication channel is encrypted.

### [Cluster](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Cluster.json)

A cluster of compute or database resources/workloads.

### Properties:

### [CodeCommit](https://github.com/JupiterOne/data-model/blob/main/src/schemas/CodeCommit.json)

A code commit to a repo. The commit id is captured in the \_id property of the
Entity.

### Properties:

**branch**: `string`

- The branch the code was committed to.

**merge**: `boolean`

- Indicates if this commit is a merge, defaults to false.

**message**: `string`

- The commit message.

**versionBump**: `boolean`

- Indicates if this commit is a versionBump, defaults to false.

### [CodeDeploy](https://github.com/JupiterOne/data-model/blob/main/src/schemas/CodeDeploy.json)

A code deploy job.

### Properties:

**action**: `string`

- Deploy action (e.g. plan, apply, destroy, rollback).

**jobName**: `string`

- Build/deploy job name.

**jobNumber**: `integer`

- Build/deploy job number.

**production**: `boolean`

- Indicates if this is a production deploy, defaults to true.

**summary**: `string`

- Descriptive text of the job.

**target**: `string`

- Name of the target system or environment.

### [CodeModule](https://github.com/JupiterOne/data-model/blob/main/src/schemas/CodeModule.json)

A software module. Such as an npm_module or java_library.

### Properties:

**public**: `boolean`

- Indicates if this is a public module.

### [CodeRepo](https://github.com/JupiterOne/data-model/blob/main/src/schemas/CodeRepo.json)

A source code repository. A CodeRepo is also a DataRepository therefore should
carry all the required properties of DataRepository.

### Properties:

**application**: `string`

- The application that this repo is part of.

**project**: `string`

- The project that this repo belongs to.

**public**: `boolean`

- Indicates if this is a public repo.

### [CodeReview](https://github.com/JupiterOne/data-model/blob/main/src/schemas/CodeReview.json)

A code review record.

### Properties:

**state**: `string`

- The state of the review.

**summary**: `string`

- The summary text of the review.

**title**: `string`

- The title text of the review.

### [Configuration](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Configuration.json)

A Configuration contains definitions that describe a resource such as a Task,
Deployment or Workload. For example, an `aws_ecs_task_definition` is a
`Configuration`.

### Properties:

### [Container](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Container.json)

A standard unit of software that packages up code and all its dependencies and
configurations.

### Properties:

**dockerVersion**: `string`

- The version of the Docker Engine

**image**: `string`

- The container image that the container is built from

### [Control](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Control.json)

A security or IT Control. A control can be implemented by a vendor/service, a
person/team, a program/process, an automation code/script/configuration, or a
system/host/device. Therefore, this is most likely an additional Class applied
to a Service (e.g. Okta SSO), a Device (e.g. a physical firewall), or a
HostAgent (e.g. Carbon Black CbDefense Agent). Controls are mapped to security
policy procedures and compliance standards/requirements.

### Properties:

**function**:

- The function of the control. It can be a string or string array. Value of each
  item should be either all lower case or, in the case of an acronym, all upper
  case.

### [ControlPolicy](https://github.com/JupiterOne/data-model/blob/main/src/schemas/ControlPolicy.json)

An technical or operational policy with rules that govern (or enforce, evaluate,
monitor) a security control.

### Properties:

**category**: `string`

- The category of policy.

**content**: `string`

- Contents of the raw rules, if applicable.

**rules**: `array`

- Rules of policy.

### [CryptoKey](https://github.com/JupiterOne/data-model/blob/main/src/schemas/CryptoKey.json)

A key used to perform cryptographic functions, such as an encryption key.

### Properties:

### [DataCollection](https://github.com/JupiterOne/data-model/blob/main/src/schemas/DataCollection.json)

An individual collection of data. The collection may exist in various formats,
such as a table (e.g. a MySQL table). The exact data type is described in the
\_type property of the Entity.

### Properties:

**PCI**: `boolean`

- Indicates if this data table contains Payment Card Information

**PHI**: `boolean`

- Indicates if this data table contains Protected Health Information

**PII**: `boolean`

- Indicates if this data table contains Personally Identifiable Information

**encrypted**: `boolean`

- If the data in the table is encrypted

**encryptionRequired**: `boolean`

- If the objects in the table need to be encrypted

**public**: `boolean`

- Indicates if the data table is open to public access

### [DataObject](https://github.com/JupiterOne/data-model/blob/main/src/schemas/DataObject.json)

An individual data object, such as an aws-s3-object, sharepoint-document,
source-code, or a file (on disk). The exact data type is described in the \_type
property of the Entity.

### Properties:

**PCI**: `boolean`

- Indicates if this data object is or contains Payment Card Information

**PHI**: `boolean`

- Indicates if this data object is or contains Protected Health Information

**PII**: `boolean`

- Indicates if this data object is or contains Personally Identifiable
  Information

**category**: `string`

- A user-provided category of the data, such as 'Source Code', 'Report', 'Patent
  Application', 'Business Plan', 'Customer Record', 'Genetic Data', etc.

**encrypted**: `boolean`

- If the data is encrypted

**encryptionRequired**: `boolean`

- If the data needs to be encrypted

**format**: `string`

- The format of the data, such as 'document', 'raw', 'plaintext', 'binary', etc.

**location**: `string`

- URI to the data, e.g. file path

**public**: `boolean`

- Indicates if the data object is open to public access

### [DataStore](https://github.com/JupiterOne/data-model/blob/main/src/schemas/DataStore.json)

A virtual repository where data is stored, such as aws-s3-bucket,
aws-rds-cluster, aws-dynamodb-table, bitbucket-repo, sharepoint-site,
docker-registry. The exact type is described in the \_type property of the
Entity.

### Properties:

**encrypted**: `boolean` `null`

- If the data store is encrypted

**encryptionAlgorithm**: `string`

- Encryption algorithm used to encrypt the data store

**encryptionKeyRef**: `string`

- Reference to the encryption key used to encrypt the data store

**encryptionRequired**: `boolean`

- If the data needs to be encrypted

**hasBackup**: `boolean`

- Indicates if the data store is data backup has been configured/enabled.

**location**: `string`

- URI to the data store, e.g. https://docker-registry.jupiterone.com or
  https://jupiterone.sharepoint.com. Or a description to the physical location.

**public**: `boolean`

- Indicates if the data store is open to public access

**retentionPeriodDays**: `number`

- The number of days for which data is retained

### [Database](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Database.json)

A database cluster/instance.

### Properties:

**encrypted**: `boolean` `null`

- If the repository is encrypted

**encryptionRequired**: `boolean`

- If the data needs to be encrypted

**location**: `string`

- URI to access the database.

### [Deployment](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Deployment.json)

A deployment of code, application, infrastructure or service. For example, a
Kubernetes deployment. An auto scaling group is also considered a deployment.

### Properties:

**currentSize**: `number`

- Current size (i.e. number of instances) active with this deployment.

**desiredSize**: `number`

- Desired size (i.e. number of instances) associated with this deployment.

**maxSize**: `number`

- Maximum size (i.e. number of instances) limited by this deployment.

### [Device](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Device.json)

A physical device or media, such as a server, laptop, workstation, smartphone,
tablet, router, firewall, switch, wifi-access-point, usb-drive, etc. The exact
data type is described in the \_type property of the Entity.

### Properties:

**BYOD**: `boolean`

- Indicates if this is a BYOD device -- an employee-provided device that has
  access to company systems/resources.

**assetTag**: `string`

- The asset tag number/label that matches the identifier in asset tracking
  system, for company owned physical devices

**autoSecurityPatchEnabled**: `boolean`

- Indicates if security updates are auto-installed

**autoSystemPatchEnabled**: `boolean`

- Indicates if operating system updates are auto-installed

**category**: `string` `null`

- The device category

**cost**: `number`

- The purchase cost of the device.

**deviceId**: `string` `null`

- The unique device identifier, traditionally known as a UDID

**encrypted**: `boolean`

- Indicates if the primary device storage is encrypted

**firewallEnabled**: `boolean`

- Indicates if local/host firewall is enabled

**hardwareModel**: `string`

- The device hardware model, e.g. MacBookPro13,3

**hardwareSerial**: `string`

- The device serial number

**hardwareVendor**: `string`

- The manufacturer or vendor of the device, e.g. Apple Inc., Generic

**hardwareVersion**: `string`

- The device hardware version

**location**: `string`

- Site where this device is located.

**make**: `string` `null`

- Same as hardwareVendor: The manufacturer or vendor of the device, e.g. Apple
  Inc., Generic

**malwareProtected**: `boolean`

- Indicates if malware protection is enabled

**model**: `string` `null`

- Same as hardwareModel: The device hardware model, e.g. MacBookPro13,3

**osDetails**: `string`

- Operating System Full Details (e.g. macOS High Sierra version 10.13.6)

**osName**: `string`

- Operating System Name (e.g. macOS)

**osVersion**: `string`

- Operating System Version (e.g. 10.13.6)

**platform**: `string`

- Operating System Platform

**remoteAccessEnabled**: `boolean`

- Indicates if remote access/login to the device is enabled

**screenLockEnabled**: `boolean`

- Indicates if screen lock protection is enabled

**screenLockTimeout**: `number`

- Screen lock timeout in seconds

**serial**: `string` `null`

- Same as hardwareSerial: The device serial number

**status**: `string`

- Status label of this device

**userEmails**: `array`

- The email addresses of the users this device is assigned to. Used if the
  device is shared by more than one user. Otherwise the 'owner' is the sole
  user. Leave empty/undefined if the device is unassigned.

**value**: `number`

- The estimated business value of the device. The value is typically calculated
  as the monetary cost of the device + the value of data on the device.

**version**: `string`

- Same as hardwareVersion: The device hardware version

### [Directory](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Directory.json)

Directory, such as LDAP or Active Directory.

### Properties:

**directoryServers**: `array`

- List of directory servers.

**domainControllers**: `array`

- List of domain controllers.

**parent**: `string`

- Parent directory, if the entity is a sub-directory.

**type**: `string`

- Directory type.

### [Disk](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Disk.json)

A disk storage device such as an AWS EBS volume

### Properties:

### [Document](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Document.json)

A document or data object.

### Properties:

### [Domain](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Domain.json)

An internet domain.

### Properties:

**abuseContactEmail**: `string`

- Abuse contact email.

**adminContactEmail**: `string`

- Administrative contact email.

**autoRenew**: `boolean`

- Indicates whether auto-renewal is configured.

**billingContactEmail**: `string`

- Billing contact email.

**contactEmails**: `array`

- List of contact emails.

**domainName**: `string`

- Domain name.

**locked**: `boolean`

- Indicates whether domain transfer is locked/protected.

**nameservers**: `array`

- List of nameservers.

**parent**: `string`

- Parent domain, if the entity is a sub-domain.

**registrantContactEmail**: `string`

- Registrant contact email.

**registrar**: `string`

- Domain registrar where this domain is registered.

**registrarName**: `string`

- Domain registrar name.

**registrarUrl**: `string`

- Domain registrar URL.

**techContactEmail**: `string`

- Technical contact email.

**whoisServer**: `string`

- WHOIS server that is responsible for resolving the details of this domain.

### [DomainRecord](https://github.com/JupiterOne/data-model/blob/main/src/schemas/DomainRecord.json)

The DNS Record of a Domain Zone.

### Properties:

**TTL**: `number`

- Time to Live before resolver cache expires.

**type**: `string`

- DNS Record type.

**value**:

- The record value. Could be referenced as `data`, `content`, `resourceRecords`,
  `aliasTarget` or another property name depending on the DNS provider.

### [DomainZone](https://github.com/JupiterOne/data-model/blob/main/src/schemas/DomainZone.json)

The DNS Zone of an Internet Domain.

### Properties:

**domainName**: `string`

- Domain name.

**parent**: `string`

- Parent domain, if the entity is a sub-domain.

**recordsCount**: `number`

- Total number of DNS records in this zone.

### [Entity](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Entity.json)

A node in the graph database that represents an Entity. This reference schema
defines common shared properties among most Entities.

### Properties:

**active**: `boolean`

- Indicates if this entity is currently active.

**classification**: `string` `null`

- The sensitivity of the data; should match company data classification scheme

**complianceStatus**: `number`

- The compliance status of the entity, as a percentage of compliancy.

**createdBy**: `string`

- The source/principal/user that created the entity

**createdOn**: `number`

- The timestamp (in milliseconds since epoch) when the entity was created at the
  source. This is different than `_createdOn` which is the timestamp the entity
  was first ingested into JupiterOne.

**criticality**: `integer`

- A number that represents the value or criticality of this entity, on a scale
  between 1-10.

**deletedBy**: `string`

- The source/principal/user that deleted the entity

**deletedOn**: `number`

- The timestamp (in milliseconds since epoch) when the entity was deleted at the
  source.

**description**: `string`

- An extended description of this entity.

**discoveredBy**: `string`

- The source/principal/user that discovered the entity

**discoveredOn**: `number`

- The timestamp (in milliseconds since epoch) when the entity was discovered.

**displayName**: `string`

- Display name, e.g. a person's preferred name or an AWS account alias

**expiresOn**: `number`

- If the entity is a temporary resource, optionally set the expiration date. For
  example, the expiration date of an SSL cert.

**id**:

- Identifiers of this entity assigned by the providers. Values are expected to
  be unique within the provider scope.

**name**: `string`

- Name of this entity

**notes**: `array`

- User provided notes about this entity

**owner**: `string`

- The owner of this entity. This could reference the name of the owner, or as
  reference ID/key to another entity in the graph as the owner.

**public**: `boolean`

- Indicates if this is a public-facing resource (e.g. a public IP or public DNS
  record) or if the entity is publicly accessible. Default is false.

**risk**: `integer`

- The risk level of this entity, on a scale between 1-10.

**status**: `string`

- Status of this entity set by the external source system or by a user, e.g.
  Active, Inactive, Decommissioned

**summary**: `string`

- A summary / short description of this entity.

**tags**: `array`

- An array of unnamed tags

**temporary**: `boolean`

- Indicates if this node is a temporary resource, such as a lambda instance or
  an EC2 instance started by ECS.

**trust**: `integer`

- The trust level of this entity, on a scale between 1-10.

**trusted**: `boolean`

- Indicates if this is a trusted resource. For example, a trusted Network, Host,
  Device, Application, Person, User, or Vendor.

**updatedBy**: `string`

- The source/principal/user that updated the entity

**updatedOn**: `number`

- The timestamp (in milliseconds since epoch) when the entity was last updated
  at the source.

**validated**: `boolean`

- Indicates if this node has been validated as a known/valid Entity.

**webLink**: `string`

- Web link to the source. For example:
  https://console.aws.amazon.com/iam/home#/roles/Administrator. This property is
  used by the UI to add a hyperlink to the entity.

### [Finding](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Finding.json)

A security finding, which may be a vulnerability or just an informative issue. A
single finding may impact one or more resources. The `IMPACTS` relationship
between the Vulnerability and the resource entity that was impacted serves as
the record of the finding. The `IMPACTS` relationship carries properties such as
'identifiedOn', 'remediatedOn', 'remediationDueOn', 'issueLink', etc.

### Properties:

**assessment**: `string`

- The name/id of the assessment that produced this finding.

**blocksProduction**: `boolean`

- Indicates whether this vulnerability finding is a blocking issue. If true, it
  should block a production deploy. Defaults to false.

**category**:

- The category of the finding.

**exploitability**: `number`

- The exploitability score/rating.

**impact**: `string`

- The impact description or rating.

**numericSeverity**: `number`

- Severity rating based on impact and exploitability.

**open**: `boolean`

- Indicates if this is an open vulnerability.

**priority**: `string`

- Priority level mapping to Severity rating. Can be a string such as 'critical',
  'high', 'medium', 'low', 'info'. Or an integer usually between 0-5.

**production**: `boolean`

- Indicates if this vulnerability is in production.

**public**: `boolean`

- Indicates if this is a publicly disclosed vulnerability. If yes, this is
  usually a CVE and the 'webLink' should be set to
  'https://nvd.nist.gov/vuln/detail/${CVE-Number}' or to a vendor URL. If not,
  it is most likely a custom application vulnerability.

**recommendation**: `string`

- Recommendation on how to remediate/fix this finding.

**references**: `array`

- The array of links to references.

**remediationSLA**: `integer`

- The number of days that the Vulnerability must be remediated within, based on
  SLA set by the organization's internal vulnerability management program
  policy. The actually due date is set by 'remediationDueOn' property on the
  `IMPACTS` relationship between the Vulnerability and its impacted resource
  entity.

**score**: `number`

- The overall vulnerability score, e.g. CVSSv3.

**severity**: `string`

- Severity rating based on impact and exploitability.

**status**: `string`

- Status of the vulnerability

**stepsToReproduce**: `array`

- Steps to reproduce this finding.

**targetDetails**: `array`

- Additional details about the targets. Can be a string or an array.

**targets**: `array`

- The target listing of projects, applications, repos or systems this
  vulnerability impacts. Specifying either the project/repo name or the
  application URL here will auto-map this Vulnerability to the corresponding
  Project/CodeRepo/Application entity if a match is found.

**validated**: `boolean`

- Indicates if this Vulnerability finding has been validated by the security
  team.

**vector**: `string`

- The vulnerability attack vector. (e.g. a CVSSv3 vector looks like this -
  'AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:N')

### [Firewall](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Firewall.json)

A piece of hardware or software that protects a network/host/application.

### Properties:

**category**: `array`

- The category of the Firewall. Indicates the scope that the Firewall applies to
  -- i.e. Network, Host, Application.

**isStateful**: `boolean`

- Indicates if the rules in the firewall is stateful.

### [Framework](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Framework.json)

An object to represent a standard compliance or technical security framework.

### Properties:

**description**: `string`

- An extended description of this entity.

**displayName**: `string`

- Display name

**name**: `string`

- Name of this entity

**standard**: `string`

- The name of the framework standard.

**summary**: `string`

- A summary / short description of this entity.

**version**: `string`

- The version of the framework. For example, OWASP may have version 2010,
  2013, 2017.

### [Function](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Function.json)

A virtual application function. For example, an aws_lambda_function,
azure_function, or google_cloud_function

### Properties:

**codeHash**: `string`

- The hash of code of this function.

**codeSize**: `string`

- The size of code of this function.

**handler**: `string`

- The handler of this function

**image**: `string`

- The image of this function, typically refers to a zip package.

**memorySize**: `string`

- The allocated memory of this function to execute.

**runtime**: `string`

- The runtime of this function. For example: 'nodejs6.10', 'nodejs8.10', or
  'python2.7'.

**trigger**: `string`

- What triggers this function to execute.

**version**: `string`

- The version of this function.

### [Gateway](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Gateway.json)

A gateway/proxy that can be a system/appliance or software service, such as a
network router or application gateway.

### Properties:

**category**: `array`

- The category of the Gateway (corresponds to which OSI layer does the Proxy
  operates at).

**function**: `array`

- The function of the Gateway

**public**: `boolean`

- Indicates if the Gateway is open to public access

### [GraphObject](https://github.com/JupiterOne/data-model/blob/main/src/schemas/GraphObject.json)

Standard metadata properties of a graph object, maintained by the system. These
are visible to users but may not be directly modified.

### Properties:

### [Group](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Group.json)

A defined, generic group of Entities. This could represent a group of Resources,
Users, Workloads, DataRepositories, etc.

### Properties:

### [Host](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Host.json)

A compute instance that itself owns a whole network stack and serves as an
environment for workloads. Typically it runs an operating system. The exact host
type is described in the \_type property of the Entity. The UUID of the host
should be captured in the \_id property of the Entity

### Properties:

**fqdn**:

- Fully qualified domain name(s)

**hostname**: `string` `null`

- The primary/local hostname

**ipAddress**:

- A listing of all IP addresses associated with this Host

**macAddress**:

- A listing of all MAC addresses associated with this Host

**osDetails**: `string`

- Operating System Full Details (e.g. macOS High Sierra version 10.13.6)

**osName**: `string`

- Operating System Name (e.g. macOS)

**osVersion**: `string`

- Operating System Version (e.g. 10.13.6)

**physical**: `boolean`

- Indicates if this is a physical host, such as a physical server.

**platform**: `string`

- Operating System Platform

**privateDnsName**: `string`

- The private DNS name

**privateIpAddress**:

- The private IP address or addresses

**publicDnsName**: `string`

- The public DNS name

**publicIpAddress**:

- The public IP address or addresses

**state**: `string`

- The current state of a host (e.g. pending, running, shutting-down, terminated,
  stopping, stopped)

### [HostAgent](https://github.com/JupiterOne/data-model/blob/main/src/schemas/HostAgent.json)

A software agent or sensor that runs on a host/endpoint.

### Properties:

**function**: `array`

- The function of sensor/agent

### [Image](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Image.json)

A system image. For example, an AWS AMI (Amazon Machine Image).

### Properties:

### [Incident](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Incident.json)

An operational or security incident. An event that negatively affects the
confidentiality, integrity or availability of an organization's assets.

### Properties:

**category**: `string`

- The category of the incident

**impacts**: `array`

- The target listing of [IDs/keys to] systems and resources this incident
  impacts.

**postmortem**: `string`

- Summary and/or a link to the documented lesson learned.

**reportable**: `boolean`

- Indicates if this is a reportable incident per applicable regulations, such as
  HIPAA, PCI, or GDPR.

**reporter**: `string`

- The person/entity who reported this incident.

**severity**: `string`

- Severity rating based on impact. Can be a string such as 'critical', 'major',
  'minor', or an integer usually between 1-3.

### [Internet](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Internet.json)

The Internet node in the graph. There should be only one Internet node.

### Properties:

**CIDR**: `string`

- The IPv4 network CIDR block

**CIDRv6**: `string`

- The IPv6 network CIDR block

**displayName**: `string`

- Display name

**public**: `boolean`

- Indicates if the network is open to public access

### [IpAddress](https://github.com/JupiterOne/data-model/blob/main/src/schemas/IpAddress.json)

An re-assignable IpAddress resource entity. Do not create an entity for an IP
Address _configured_ on a Host. Use this only if the IP Address is a reusable
resource, such as an Elastic IP Address object in AWS.

### Properties:

**dnsName**: `string`

- The assigned DNS name

**ipAddress**: `string`

- The assigned IP address

**ipVersion**: `integer`

- Indicates IP version 4 or 6

**privateIpAddress**: `string`

- The assigned private IP address

**publicIpAddress**: `string`

- The assigned public IP address

### [Issue](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Issue.json)

An issue as used by GitHub, Jira, or other project trackers.

### Properties:

### [Key](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Key.json)

An ssh-key, access-key, api-key/token, pgp-key, etc.

### Properties:

**fingerprint**: `string`

- The fingerprint that identifies the key

**material**: `string`

- The key material

**usage**: `string`

- The key usage - for example: ssh access or data encryption

### [Logs](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Logs.json)

A specific repository or destination containing application, network, or system
logs.

### Properties:

**type**: `string`

- The type of logs

### [Model](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Model.json)

A system of postulates, data, and inferences presented as a mathematical
description of an entity or state of affairs. For example, a machine learning
model.

### Properties:

**encrypted**: `boolean`

- Indicates whether the model is encrypted

### [Module](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Module.json)

A software or hardware module. Such as an npm_module or java_library.

### Properties:

**public**: `boolean`

- Indicates if this is a public module.

### [Network](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Network.json)

A network, such as an aws-vpc, aws-subnet, cisco-meraki-vlan.

### Properties:

**CIDR**: `string` `null`

- The IPv4 network CIDR block (e.g. 0.0.0.0/0)

**CIDRv6**: `string`

- The IPv6 network CIDR block (e.g. ::/0)

**environment**: `string`

- The environment of network

**internal**: `boolean`

- Indicates if this is an internal/private network.

**public**: `boolean`

- Indicates if the network is publicly accessible.

**wireless**: `boolean`

- Indicates if this is a wireless network.

### [NetworkEndpoint](https://github.com/JupiterOne/data-model/blob/main/src/schemas/NetworkEndpoint.json)

A network endpoint for connecting to or accessing network resources. For
example, NFS mount targets or VPN endpoints.

### Properties:

**ipAddress**: `string`

- The endpoint IP address

### [NetworkInterface](https://github.com/JupiterOne/data-model/blob/main/src/schemas/NetworkInterface.json)

An re-assignable software defined network interface resource entity. Do not
create an entity for a network interface _configured_ on a Host. Use this only
if the network interface is a reusable resource, such as an Elastic Network
Interface object in AWS.

### Properties:

**dnsName**: `string`

- The assigned DNS name

**ipAddress**: `string`

- The assigned primary IP address

**ipVersion**: `integer`

- Indicates IP version 4 or 6

**macAddress**: `string`

- The assigned MAC address

**privateIpAddress**: `string`

- The assigned private IP address

**publicIpAddress**: `string`

- The assigned public IP address

### [Organization](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Organization.json)

An organization, such as a company (e.g. JupiterOne) or a business unit (e.g.
HR). An organization can be internal or external. Note that there is a more
specific Vendor class.

### Properties:

**\_type**: `string`

- The type of organization (within the context of the primary organization).

**emailDomain**: `string`

- The domain name for internal organization email addresses.

**external**: `boolean`

- Indicates if this organization is external

**website**: `string`

- The organization's main website URL.

### [PR](https://github.com/JupiterOne/data-model/blob/main/src/schemas/PR.json)

A pull request.

### Properties:

**approved**: `boolean`

- Indicates if every commit associated with this PR has been approved by a
  reviewer other than the code author.

**repository**: `string`

- The name of the CodeRepo this PR belongs to.

**source**: `string`

- The source branch.

**state**: `string`

- The state of the PR.

**summary**: `string`

- The summary text of the PR.

**target**: `string`

- The target/destination branch.

**title**: `string`

- The title text of the PR.

**validated**: `boolean`

- Indicates if every commit associated with this PR was submitted by a validated
  author known to the organization.

### [PasswordPolicy](https://github.com/JupiterOne/data-model/blob/main/src/schemas/PasswordPolicy.json)

A password policy is a specific `Ruleset`. It is separately defined because of
its pervasive usage across digital environments and the well known properties
(such as length and complexity) unique to a password policy.

### Properties:

**autoUnlockMins**: `integer`

- Specifies the time interval (in minutes) a locked account remains locked
  before it is automatically unlocked (0 indicates no limit)

**excludeAttributes**: `array`

- The user profile attributes whose values must be excluded from the password

**excludeCommonPasswords**: `boolean`

- Indicates whether to check passwords against a common/weak password dictionary

**excludeUsername**: `boolean`

- Indicates if the username must be excluded from the password

**expiryWarningDays**: `integer`

- Specifies the number of days prior to password expiration when a user will be
  warned to reset their password (0 indicates no warning)

**hardExpiry**: `boolean`

- Specifies whether users are prevented from setting a new password after their
  password has expired

**historyCount**: `integer`

- Specifies the number of previous passwords that users are prevented from
  reusing (0 indicates none)

**lockoutAttempts**: `integer`

- Specifies the number of times users can attempt to log in to their accounts
  with an invalid password before their accounts are locked (0 indicates no
  limit)

**maxAgeDays**: `integer`

- Specifies how long (in days) a password remains valid before it expires (0
  indicates no limit - passwords do not expire)

**minAgeMins**: `integer`

- Specifies the minimum time interval (in minutes) between password changes (0
  indicates no limit)

**minLength**: `integer`

- Minimum password length

**preventReset**: `boolean`

- Indicates if the user is allowed/prevented to change their own password

**requireLowercase**: `boolean`

- Indicates if a password must contain at least one lowercase character

**requireMFA**: `boolean`

- Specifies whether multi-factor authentication (MFA) is required

**requireNumbers**: `boolean`

- Indicates if a password must contain at least one number

**requireSymbols**: `boolean`

- Indicates if a password must contain at least one symbol

**requireUppercase**: `boolean`

- Indicates if a password must contain at least one uppercase character

### [Person](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Person.json)

An entity that represents an actual person, such as an employee of an
organization.

### Properties:

**address**: `string`

- The person's physical contact address

**backgroundCheckedBy**: `string`

- The agency or person conducted the background/reference check

**backgroundCheckedOn**: `number`

- Timestamp of the background and/or reference check

**email**: `array`

- The email addresses of the person; the first one in the array is the primary
  email.

**emailDomain**: `array`

- The domain portion of the email addresses associated with the user account.

**employeeId**: `string`

- The person's employee ID/number within an organization

**employeeType**: `string`

- The type of employment

**firstName**: `string`

- The person's official first name in the system (such as HR database)

**lastName**: `string`

- The person's official last name in the system (such as HR database)

**manager**: `string`

- Name of the person's manager

**managerEmail**: `string`

- Email of the person's manager

**managerId**: `string`

- Employee ID of the person's manager

**middleName**: `string`

- The person's official middle name in the system (such as HR database)

**phone**: `array`

- The person's phone numbers; the first one in the array is the primary contact
  number.

**title**: `string`

- The person's role or title within an organization

**userIds**: `array`

- One or more user Ids associated with this person

### [Policy](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Policy.json)

A written policy documentation.

### Properties:

**adopted**: `boolean`

- Indicates if policy or procedure has been adopted. Only adopted policies and
  procedures are included in the published view of the Policy Builder app.

**applicable**: `boolean`

- Indicates if policy or procedure is applicable based on the organization's
  current risk and compliance needs. A Policy that is not applicable may become
  applicable later as the organization's requirements and maturity change.

**author**: `string`

- Author of the record

**content**: `string`

- Text content of the policy. For policies/procedures used by the Policy Builder
  app, this will contain the template text in markdown format. Stored in raw
  data.

**summary**: `string`

- Summary or overview the describes the policy. Summary text is intended as
  guidance to the author and not included in the published version.

**title**: `string`

- Title of the policy

### [Problem](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Problem.json)

A problem identified from the analysis and correlation of assets and findings
that is a notable issue worthy of action. It could be (or become) the cause, or
potential cause, of one or more incidents or findings.

### Properties:

### [Procedure](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Procedure.json)

A written procedure and control documentation. A Procedure typically
`IMPLEMENTS` a parent Policy. An actual Control further `IMPLEMENTS` a
Procedure.

### Properties:

**adopted**: `boolean`

- Indicates if procedure has been adopted. Only adopted policies and procedures
  are included in the published view of the Policy Builder app.

**applicable**: `boolean`

- Indicates if procedure is applicable based on the organization's current risk
  and compliance needs. A Policy that is not applicable may become applicable
  later as the organization's requirements and maturity change.

**author**: `string`

- Author of the record

**content**: `string`

- Text content of the policy. For policies/procedures used by the Policy Builder
  app, this will contain the template text in markdown format. Stored in raw
  data.

**control**: `string`

- The type of control specified by this procedure.

**summary**: `string`

- Summary or overview the describes the procedure. Summary text is intended as
  guidance to the author and not included in the published version.

**title**: `string`

- Title of the procedure

### [Process](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Process.json)

A compute process -- i.e. an instance of a computer program / software
application that is being executed by one or many threads. This is NOT a program
level operational process (i.e. a Procedure).

### Properties:

**state**: `string`

- Indicates the state of the process.

### [Product](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Product.json)

A product developed by the organization, such as a software product.

### Properties:

**appLink**: `array`

- App links/URLs related to this product.

**category**: `string`

- Category that defines the product (e.g. 'web', 'mobile').

**description**: `string`

- Description of the product

**projectKey**: `array`

- Project key(s) that reference a Jira project, Bitbucket project, or similar
  related to this product.

**statusPage**: `array`

- Link to the status page of this product (for a SaaS product).

### [Program](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Program.json)

A program. For example, a bug bounty/vuln disclosure program.

### Properties:

**overview**: `string`

- Program overview.

**type**: `string`

- The type of program.

### [Project](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Project.json)

A software development project. Can be used for other generic projects as well
but the defined properties are geared towards software development projects.

### Properties:

**alternateURLs**: `array`

- The additional URLs related to this application.

**devURL**: `string`

- The Development URL

**key**: `string`

- A defined project key. It is ideal for a code project to have a consistent key
  that matches that of issue tracking project. For example, the key for a
  Bitbucket project should match the key of its corresponding Jira project.

**productionURL**: `string`

- The Production URL

**stagingURL**: `string`

- The Non-Production / Staging URL

**testURL**: `string`

- The Test URL

### [Question](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Question.json)

An object that represents an inquiry, usually around some matter of uncertainty
or difficulty.

### Properties:

**queries**:

- A request for information that contributes to answering a question.

### [Queue](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Queue.json)

A scheduling queue of computing processes or devices.

### Properties:

**items**: `array`

- The items (processes, devices, jobs, etc.) in the queue

**priority**: `number`

- The priority of the queue

### [Record](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Record.json)

A DNS record; or an official record (e.g. Risk); or a written document (e.g.
Policy/Procedure); or a reference (e.g. Vulnerability/Weakness). The exact
record type is captured in the \_type property of the Entity.

### Properties:

### [RecordEntity](https://github.com/JupiterOne/data-model/blob/main/src/schemas/RecordEntity.json)

A node in the graph database that represents a Record Entity, with a set of
different defined common properties than standard (resource) entities.

### Properties:

**approved**: `boolean`

- If this is record has been reviewed and approved.

**approvedOn**: `number`

- The timestamp (in milliseconds since epoch) when this record was approved.

**approvers**: `array`

- The list of approvers on the record.

**category**: `string`

- The category of the official record

**classification**: `string`

- The sensitivity of the data; should match company data classification scheme.
  For example: critical - confidential - internal - public.

**content**: `string`

- Text content of the record/documentation

**createdOn**: `number`

- The timestamp (in milliseconds since epoch) when the entity was created at the
  source. This is different than `_createdOn` which is the timestamp the entity
  was first ingested into JupiterOne.

**description**: `string`

- An extended description of this entity.

**displayName**: `string`

- Display name, e.g. a person's preferred name or an AWS account alias

**exception**: `boolean`

- Indicates if this record has an applied exception. For example, exception for
  a known finding or a PR that is not fully approved.

**exceptionReason**: `string`

- Reason / description of the exception.

**name**: `string`

- Name of this entity

**open**: `boolean`

- Indicates if this record is currently open. For example, an open Vulnerability
  finding (Vulnerability extends Record).

**production**: `boolean`

- If this is a production record. For example, a production change management
  ticket would have this set to `true`, and have a `category` = `change`
  property. Another example would be a Vulnerability finding in production.

**public**: `boolean`

- If this is a public record. Defaults to false.

**reportedOn**: `number`

- The timestamp (in milliseconds since epoch) when this record was
  reported/opened. In most cases, this would be the same as `createdOn` but
  occasionally a record can be created at a different time than when it was
  first reported.

**reporter**: `string`

- The person or system that reported or created this record.

**summary**: `string`

- A summary / short description of this entity.

**updatedOn**: `number`

- The timestamp (in milliseconds since epoch) when the entity was last updated
  at the source.

**webLink**: `string`

- Hyperlink to the location of this record, e.g. URL to a Jira issue

### [Repository](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Repository.json)

A repository that contains resources. For example, a Docker container registry
repository hosting Docker container images.

### Properties:

**public**: `boolean`

- Indicates if this is a public repo.

### [Requirement](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Requirement.json)

An individual requirement for security, compliance, regulation or design.

### Properties:

**state**: `string`

- The state of the requirement (e.g. 'implemented').

**summary**: `string`

- The summary text of the requirement.

**title**: `string`

- The title text of the requirement.

### [Resource](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Resource.json)

A generic assignable resource. A resource is typically non-functional by itself
unless used by or attached to a host or workload.

### Properties:

### [Review](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Review.json)

A review record.

### Properties:

**state**: `string`

- The state of the review.

**summary**: `string`

- The summary text of the review.

**title**: `string`

- The title text of the review.

### [Risk](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Risk.json)

An object that represents an identified Risk as the result of an Assessment. The
collection of Risk objects in JupiterOne make up the Risk Register. A Control
may have a `MITIGATES` relationship to a Risk.

### Properties:

**assessment**: `string`

- The name/id of the assessment that produced this risk.

**category**: `string`

- The category (or area) of the risk. For example, 'process maturity' or
  'natural disaster'.

**details**: `string`

- Additional details to describe the risk.

**impact**: `integer`

- Impact rating. '3: high/severe', '2: medium/moderate', '1: low/minor', '0:
  none/insignificant'.

**mitigation**: `string`

- Description of the mitigation, either planned or implemented, if applicable.

**probability**: `integer`

- Probability rating of the risk: '3: high/certain', '2: medium/likely', '1:
  low/unlikely', '0: none/negligible'.

**score**: `integer`

- Overall Risk Score = Probability x Impact

**status**: `string`

- Current status of this documented risk. Default status is `open`.

### [Root](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Root.json)

The root node in the graph. There should be only one Root node per organization
account.

### Properties:

**displayName**: `string`

- Display name

### [Rule](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Rule.json)

An operational or configuration compliance rule, often part of a Ruleset.

### Properties:

**category**: `string`

- The category of ruleset.

**content**: `string`

- Contents of the rule, if applicable.

### [Ruleset](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Ruleset.json)

An operational or configuration compliance ruleset with rules that govern (or
enforce, evaluate, monitor) a security control or IT system.

### Properties:

**category**: `string`

- The category of ruleset.

**content**: `string`

- Contents of the raw rules, if applicable.

**rules**: `array`

- Rules of ruleset. Each rule is written 'as-code' that can be operationalized
  with a control provider or within JupiterOne's rules engine.

### [Scanner](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Scanner.json)

A system vulnerability, application code or network infrastructure scanner.

### Properties:

**category**: `array`

- The category of scanner

### [Secret](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Secret.json)

A stored encrypted secret, accessed by permitted users or applications.

### Properties:

### [Section](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Section.json)

An object to represent a section such as a compliance section.

### Properties:

### [Service](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Service.json)

A service provided by a vendor.

### Properties:

**category**: `array`

- The category of service, e.g. software, platform, infrastructure, other

**endpoints**: `array`

- Array of service endpoints, e.g. ec2.amazonaws.com

**fedrampModerate**: `boolean`

- Indicates whether this service is compliant with FedRAMP Moderate

**function**: `array`

- The functions provided by the service, e.g. access-review, database,
  load-balancing, other

**hipaaEligible**: `boolean`

- Indicates whether this service is HIPPA eligible

### [Site](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Site.json)

The physical location of an organization. A Person (i.e. employee) would
typically has a relationship to a Site (i.e. located_at or work_at). Also used
as the abstract reference to AWS Regions.

### Properties:

**category**: `array`

- Type of site

**hours**: `string`

- Hours of operation. e.g. M-F 9am-6pm

**location**: `string`

- The address/location of the site. Or an AWS Region (e.g. us-east-2).

**restricted**: `boolean`

- Indicates that access to the site is restricted (a level above secured
  access).

**secured**: `boolean`

- Indicates the site is secured with physical controls such as key card access
  and surveillance cameras.

### [Standard](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Standard.json)

An object to represent a standard such as a compliance or technical standard.

### Properties:

**name**: `string`

- The name of the standard.

**version**: `string`

- The version of the standard. For example, OWASP may have version 2010,
  2013, 2017.

### [Subscription](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Subscription.json)

A subscription to a service or channel.

### Properties:

**authenticated**: `boolean`

- Indicates whether the subscription is authenticated.

**pending**: `boolean`

- Indicates whether the subscription is pending.

### [Task](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Task.json)

A computational task. Examples include AWS Batch Job, ECS Task, etc.

### Properties:

### [Team](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Team.json)

A team consists of multiple member Person entities. For example, the Development
team or the Security team.

### Properties:

**email**: `string`

- The team email address

### [ThreatIntel](https://github.com/JupiterOne/data-model/blob/main/src/schemas/ThreatIntel.json)

Threat intelligence captures information collected from vulnerability risk
analysis by those with substantive expertise and access to all-source
information. Threat intelligence helps a security professional determine the
risk of a vulnerability finding to their organization.

### Properties:

**references**: `array`

- The array of links to references.

### [Training](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Training.json)

A training module, such as a security awareness training or secure development
training.

### Properties:

### [User](https://github.com/JupiterOne/data-model/blob/main/src/schemas/User.json)

A user account/login to access certain systems and/or services. Examples include
okta-user, aws-iam-user, ssh-user, local-user (on a host), etc.

### Properties:

**active**: `boolean`

- Specifies whether user account is active or disabled.

**email**: `string`

- The primary email address associated with the user account

**emailDomain**: `array`

- The domain portion of the email addresses associated with the user account.

**firstName**: `string`

- The user's official first name in the system (such as HR database)

**lastName**: `string`

- The user's official last name in the system (such as HR database)

**mfaEnabled**: `boolean`

- Specifies whether multi-factor authentication (MFA) is enabled for this user.

**passwordChangedOn**: `number`

- The timestamp (in milliseconds since epoch) of when the user's password was
  last rotated for this particular account.

**shortLoginId**: `string`

- The shortened login Id. For example, if the username is the full email address
  (first.last@company.com), the shortLoginId would be the part before @
  (first.last).

**username**: `string`

- Username

### [UserGroup](https://github.com/JupiterOne/data-model/blob/main/src/schemas/UserGroup.json)

A user group, typically associated with some type of access control, such as a
group in Okta or in Office365. If a UserGroup has an access policy attached, and
all member Users of the UserGroup would inherit the policy.

### Properties:

**email**: `string`

- The group email address

### [Vault](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Vault.json)

A collection of secrets such as a key ring

### Properties:

**name**: `string`

- Name of the vault

### [Vendor](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Vendor.json)

An external organization that is a vendor or service provider.

### Properties:

**admins**: `array`

- List of admin users to the vendor account, if applicable. If this vendor
  account is integrated directly to JupiterOne and its data is ingested, the
  admin users should be already mapped as User entities.

**alternateContactAddress**: `string`

- Alternate/secondary physical/mailing address of the vendor.

**alternateContactEmail**: `string`

- Email of the vendor's alternate/secondary point of contact person.

**alternateContactName**: `string`

- The vendor's alternate/secondary point of contact person.

**alternateContactPhone**: `string`

- Phone number of the vendor's alternate/secondary point of contact person.

**alternateContactTitle**: `string`

- The title of the vendor's alternate/secondary point of contact. For example,
  'CISO'.

**breachResponseDays**: `integer`

- The number of days the vendor agrees to report an identified data breach, per
  vendor agreement and/or SLA. This is typically 3 to 30 days. Note that GDPR
  requires breach notification within 3 days / 72 hours.

**category**:

- The category of vendor.

**departments**: `array`

- List of business departments the vendor provides service for (e.g. IT, HR,
  Finance, Marketing, Development/Engineering, Security).

**emailDomain**: `string`

- The email domain for the vendor (e.g. @jupiterone.io).

**linkToBAA**: `string`

- Link to Business Associate Agreement (BAA) document - for HIPAA only.

**linkToDPA**: `string`

- Link to GDPR Data Processing Addendum (DPA) document - for GDPR only.

**linkToISA**: `string`

- Link to the external information security assessment (ISA) report.

**linkToMSA**: `string`

- Link to Master Service Agreement (MSA) document.

**linkToNDA**: `string`

- Link to Non-Disclosure Agreement (NDA) document.

**linkToSLA**: `string`

- Link to Service Level Agreement (SLA) document.

**linkToVTR**: `string`

- Link to the external vendor technology risk (VTR) report.

**mainContactAddress**: `string`

- Main physical/mailing address of the vendor.

**mainContactEmail**: `string`

- Email of the vendor's point of contact person.

**mainContactName**: `string`

- The vendor's point of contact person.

**mainContactPhone**: `string`

- Phone number of the vendor's point of contact person.

**mainContactTitle**: `string`

- The title of the vendor's main point of contact. For example, 'Manager of
  Operations'.

**statusPage**: `string`

- Link to the vendor's service status page (e.g.
  https://status.aws.amazon.com/).

**validatedOn**: `number`

- The timestamp (in milliseconds since epoch) of when this vendor was last
  validated per the vendor management policy.

**website**: `string`

- The vendor's main website URL.

### [Vulnerability](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Vulnerability.json)

A security vulnerability (application or system or infrastructure). A single
vulnerability may relate to multiple findings and impact multiple resources. The
`IMPACTS` relationship between the Vulnerability and the resource entity that
was impacted serves as the record of the finding. The `IMPACTS` relationship
carries properties such as 'identifiedOn', 'remediatedOn', 'remediationDueOn',
'issueLink', etc.

### Properties:

**blocking**: `boolean` `null`

- Indicates whether this vulnerability finding is a blocking issue. If true, it
  should block a production deploy. Defaults to false.

**category**: `string` `null`

- The category of the vulnerability finding

**exploitability**: `number`

- The exploitability score/rating.

**impact**: `number`

- The impact score/rating.

**impacts**: `array`

- The target listing of projects, applications, repos or systems this
  vulnerability impacts. Specifying either the project/repo name or the
  application URL here will auto-map this Vulnerability to the corresponding
  Project/CodeRepo/Application entity if a match is found.

**open**: `boolean` `null`

- Indicates if this is an open vulnerability.

**priority**: `string`

- Priority level mapping to Severity rating. Can be a string such as 'critical',
  'high', 'medium', 'low', 'info'. Or an integer usually between 0-5.

**production**: `boolean` `null`

- Indicates if this vulnerability is in production.

**public**: `boolean` `null`

- Indicates if this is a publicly disclosed vulnerability. If yes, this is
  usually a CVE and the 'webLink' should be set to
  'https://nvd.nist.gov/vuln/detail/${CVE-Number}' or to a vendor URL. If not,
  it is most likely a custom application vulnerability.

**references**: `array`

- The array of links to references.

**remediationSLA**: `integer`

- The number of days that the Vulnerability must be remediated within, based on
  SLA set by the organization's internal vulnerability management program
  policy. The actually due date is set by 'remediationDueOn' property on the
  `IMPACTS` relationship between the Vulnerability and its impacted resource
  entity.

**score**: `number`

- The overall vulnerability score, e.g. CVSSv3.

**severity**: `string` `null`

- Severity rating based on impact and exploitability. Can be a string such as
  'critical', 'high', 'medium', 'low', 'info'. Or an integer usually between
  0-5.

**status**: `string`

- Status of the vulnerability

**validated**: `boolean`

- Indicates if this Vulnerability finding has been validated by the security
  team.

**vector**: `string`

- The vulnerability attack vector. (e.g. a CVSSv3 vector looks like this -
  'AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:N')

### [Weakness](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Weakness.json)

A security weakness.

### Properties:

**category**: `string`

- The category of the vulnerability finding

**exploitability**: `string`

- Indicates the likelihood of exploit.

**references**: `array`

- The array of links to references.

### [Workload](https://github.com/JupiterOne/data-model/blob/main/src/schemas/Workload.json)

A virtual compute instance, it could be an aws-ec2-instance, a docker-container,
an aws-lambda-function, an application-process, or a vmware-instance. The exact
workload type is described in the \_type property of the Entity.

### Properties:

**fqdn**: `string`

- The fully qualified domain name of attached to the instance, if applicable

**image**: `string`

- The image this workload is derived from, such as an AMI or docker image. At
  the abstract level, this usually maps to the \_id of a Resource.
