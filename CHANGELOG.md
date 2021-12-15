# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

- Added `RelationshipClass.HOSTS`
- Added `RelationshipClass.LOGS`

## 0.40.0 - 2021-10-25

- Added `RelationshipClass.VIOLATES`

## 0.39.0 - 2021-09-30

- Added `Issue` entity class.

## 0.38.0 - 2021-08-27

- Added `Secret` entity class.

## 0.37.0 - 2021-08-26

- Added `Question` entity class.

## 0.36.0 - 2021-08-26

### Added

- Added `RelationshipClass.ENFORCES`

## 0.35.0 - 2021-08-03

- Added `Alert` class.

## 0.34.0 - 2021-07-27

### Added

- Added `Problem` class.

## 0.33.0 - 2021-07-20

### Added

- Changed `DomainRecord.value` to be `string | string[]`

## 0.32.0 - 2021-07-08

### Added

- Added `RelationshipClass.PUBLISHED`

## 0.31.0 - 2021-07-02

### Added

- `firstName` and `lastName` properties to `User` entity class

## 0.30.0 - 2021-06-25

### Added

- Added `COMPLETED` to the `RelationshipClass` enum

## 0.29.0 - 2021-06-21

### Added

- Added `exception` flag and `exceptionReason` string property to `RecordEntity`

## 0.28.0 - 2021-06-10

### Added

- Added `REPORTED` to the `RelationshipClass` enum

## 0.27.0 - 2021-06-05

### Added

- [#104](https://github.com/JupiterOne/data-model/issues/104) - Introduce
  `Model` entity class

## 0.26.0 - 2021-05-28

- Added required property `Service.function` description and example/recommended
  values to encourage consistency.
- Added optional `boolean` properties `Service.fedrampModerate` and
  `Service.hipaaEligible`.

## 0.25.0 - 2021-05-26

### Added

- Added `RESTRICTS` relationship class

## 0.24.0 - 2021-05-25

### Added

- [#96](https://github.com/JupiterOne/data-model/issues/96) - Introduce
  `DataCollection` entity class

## 0.23.0 - 2021-05-24

### Added

- Added `LIMITS` relationship classes

## 0.22.2 - 2021-05-24

### Fixed

- [#90](https://github.com/JupiterOne/data-model/issues/90) - `DataObject`
  `classification` field should accept `null`

## 0.22.1 - 2021-05-19

### Changed

- Stop requiring `ipAddress` on `NetworkEndpoint` class. Azure private endpoints
  actually relate to a `NetworkInterface` entity, where the IP address lives.

### Fixed

- [#87](https://github.com/JupiterOne/data-model/issues/87) - `Control` entity
  class should allow an array of `function`

## 0.22.0 - 2021-05-05

### Added

- Added `REVIEWED` to the `RelationshipClass` enum

## 0.21.0 - 2021-04-28

### Added

- Fix [#82](https://github.com/JupiterOne/data-model/issues/82) - Add
  `retentionPeriodDays` property to `DataStore` class that represents the number
  of days that data will be retained for.

## 0.20.1 - 2021-04-15

### Fixed

- Fixed additional log warnings by correcting schema structures to conform to
  strict settings.

## 0.20.0 - 2021-04-14

### Fixed

- Fixed `validateEntityWithSchema()` emitting log warning for missing format
  `"ip"` by adding a custom format. These properties will now be validated as
  `ipv4` or `ipv6`.

### Changed

- Upgraded to `ajv@8.0.0`. This drove some schema structure changes that may
  impact JupiterOne where the schema is used to drive an entity editor UI.

## 0.19.1 - 2021-04-14

### Fixed

- Fixed schema for `tag.*` properties to allow `number` and `boolean` values.

## 0.19.0 - 2021-04-02

### Added

- `NOTIFIES` relationship class

## 0.18.0 - 2021-03-16

### Added

- `Vendor.category` now supports `string` or `string[]` values.

## 0.17.0 - 2021-02-26

### Added

- Added `RelationshipClass.INSTALLED` relationship class, which can be used to
  represent a device that has installed an application.

## 0.16.5

### Added

- `ThreatIntel` entity for collecting threat intelligence, typically related to
  a `Finding` as `Finding - HAS -> ThreatIntel`
- Clarification and examples of use in documentation for
  `RelationshipClass.{HAS, CONTAINS}`.

## 0.16.4 2021-01-13

### Fixed

- 0.16.1-4 were changes to fix the build

## 0.16.0 2020-12-21

### Changed

- BREAKING! `import { schemas } from '@jupiterone/data-model'` must be changed
  to `import { entitySchemas } from '@jupiterone/data-model'`

## 0.15.1 2020-11-11

### Added

- Added `backgroundCheckedOn` and `backgroundCheckedBy` properties to `Person`
  entity

## 0.15.0 2020-10-30

### Added

- Added `APPROVED` to the `RelationshipClass` enum
- Added `numericSeverity` as a required property to `Finding` entity

### Changed

- `Finding.severity` provides `examples`
- `Finding.category` may now be a `string | string[]`, and `examples` have been
  added.

## 0.14.1 2020-10-07

### Updated

- Added `locked` as a common property to `Domain` entity

## 0.14.0 2020-10-05

### Updated

- [#48](https://github.com/JupiterOne/data-model/pull/48) - Allow array type for
  publicIpAddress and privateIpAddress in `Host` class
- [#49](https://github.com/JupiterOne/data-model/pull/49) Allow `null` value for
  `Network` class `CIDR` property

## 0.13.0 - 2020-10-03

### Added

- Added `Vault` schema, which should be used to classify a collection of secrets
  such as a key ring.

## 0.12.0 - 2020-10-01

### Added

- Added `createdBy`, `updatedBy`, `deletedBy`, `discoveredBy` to `Entity`
  schema.
- Added `RelationshipClass.SCANS` constant.

### Changed

- `Entity.id` allows `string | string[]`. This change will allow `id` to capture
  values from each provider that tracks an Entity.

## 0.11.0 - 2020-09-24

### Added

- Added `NS` as valid `DomainRecord`.`type` value.

## 0.9.0 - 2020-08-26

### Added

- Added `DENIES` relationship class.

## 0.8.1 - 2020-08-20

### Changed

- [#30](https://github.com/JupiterOne/data-model/issues/30) - Remove requirement
  for `hostname` property in `Host` schema.
