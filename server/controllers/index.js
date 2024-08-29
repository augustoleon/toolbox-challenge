const { downloadAndFormatterFiles, getFiles } = require('../services')

// controllers
const getFilesData = async (req, res) => {
  try {
    const formatteredFiles = await downloadAndFormatterFiles()
    res.json({ data: formatteredFiles })
  } catch (err) {
    console.error(`Error in /api/v1/files/data: ${err.message}`)
    res.status(500).send({ message: err.message })
  }
}

const getFilesList = async (req, res) => {
  try {
    const files = await getFiles()
    res.json({ data: files })
  } catch (err) {
    console.error(`Error in /api/v1/files/list: ${err.message}`)
    res.status(500).send({ message: err.message })
  }
}

module.exports = { getFilesData, getFilesList }
