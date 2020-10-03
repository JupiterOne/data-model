# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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
