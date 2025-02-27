const Ajv2020 = require("ajv/dist/2020");
const ajv = new Ajv2020();

const schema_profesor = require("./profesor.schema.json");
const schema_universidad = require("./universidad.schema.json");

ajv.addSchema(schema_universidad, "universidad");
ajv.addSchema(schema_profesor, "profesor");

module.exports = ajv;
