'use strict';

const DateField = require('./date.class');
const NumberField = require('./number.class');
const ReferenceField = require('./reference.class');
const SchemaField = require('./schemaField.class');
const StringField = require('./string.class');
const BooleanField = require('./boolean.class');

const factory = {
  boolean: () => new BooleanField(),
  date: () => new DateField(),
  number: () => new NumberField(),
  reference: () => new ReferenceField(),
  string: () => new StringField(),
};

factory.Types = {
  Boolean: BooleanField,
  Date: DateField,
  Number: NumberField,
  Reference: ReferenceField,
  SchemaField,
  String: StringField,
};

module.exports = factory;
