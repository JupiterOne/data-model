# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Added `createdBy`, `updatedBy`, `deletedBy`, `discoveredBy` to `Entity`
  schema.
- Added `RelationshipClass.SCANS` constant.

### Changed

- `Entity.id` allows `string | number | (string | number)[]`. Though typically
  it is best that Array properties are homogenious, `id` is a case where
  different providers identify an Entity with different values, some using a
  `string`, others a `number`. This change will allow `id` to capture the value
  from each provider that tracks the Entity.

## 0.10.0 - 2020-09-09

### Added

- Added `NS` as valid `DomainRecord`.`type` value.

## 0.9.0 - 2020-08-26

### Added

- Added `DENIES` relationship class.

## 0.8.1 - 2020-08-20

### Changed

- [#30](https://github.com/JupiterOne/data-model/issues/30) - Remove requirement
  for `hostname` property in `Host` schema.
