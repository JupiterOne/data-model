# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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
