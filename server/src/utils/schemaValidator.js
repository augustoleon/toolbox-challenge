const Ajv = require('ajv')
const fs = require('fs')
const path = require('path')

// Inicializar AJV
const ajv = new Ajv()

// Carga y compila un esquema JSON desde un archivo.
const loadSchema = (schemaName) => {
  const schemaPath = path.resolve(__dirname, `../schemas/${schemaName}.json`)
  const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf8'))
  return ajv.compile(schema)
}

// Valida los datos contra el esquema especificado.
const validateData = (schemaName, data) => {
  const validate = loadSchema(schemaName)
  const isValid = validate(data)
  if (!isValid) {
    return ajv.errorsText(validate.errors)
  }
  return null
}

module.exports = validateData
