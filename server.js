const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const ajv = require("./schemas");

const app = express();
app.use(bodyParser.json());

const universitySchema = require("./schemas/universidad_schema.json");
const professorSchema = require("./schemas/profesor_schema.json");

const validateJson = (data, schema) => {
    const validate = ajv.compile(schema);
    const valid = validate(data);
    return { valid, errors: validate.errors };
};

app.post("/validate/universidad", (req, res) => {
    const { valid, errors } = validateJson(req.body, universitySchema);
    if (valid) {
        res.status(200).json({ message: "JSON de Universidad válido" });
    } else {
        res.status(400).json({ error: errors });
    }
});

app.post("/validate/profesor", (req, res) => {
    const { valid, errors } = validateJson(req.body, professorSchema);
    if (valid) {
        res.status(200).json({ message: "JSON de Profesor válido" });
    } else {
        res.status(400).json({ error: errors });
    }
});

app.listen(3000, () => {
    console.log("Servidor puerto 3000");
});
