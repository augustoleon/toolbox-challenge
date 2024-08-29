const { downloadAndFormatterFiles, getFiles } = require('../services')
const validateData = require('../utils/schemaValidator');

// Controllers
const getFilesData = async (req, res) => {
  try {
    const formatteredFiles = await downloadAndFormatterFiles()

    // Validar la respuesta contra el esquema
    const validationError = validateData('getFilesDataSchema', formatteredFiles);
    if (validationError) {
      throw new Error(`Response validation failed: ${validationError}`);
    }
    res.json({ data: formatteredFiles })
  } catch (err) {
    console.error(`Error in /api/v1/files/data: ${err.message}`)
    res.status(500).send({ message: err.message })
  }
}

const getFilesList = async (req, res) => {
  try {
    const files = await getFiles()

    // Validar la respuesta contra el esquema
    const validationError = validateData('getFilesListSchema', files);
    if (validationError) {
      throw new Error(`Response validation failed: ${validationError}`);
    }
    res.json({ data: files })
  } catch (err) {
    console.error(`Error in /api/v1/files/list: ${err.message}`)
    res.status(500).send({ message: err.message })
  }
}

module.exports = { getFilesData, getFilesList }
