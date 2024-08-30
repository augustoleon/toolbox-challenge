require('dotenv').config()

const { fetchFiles } = require('./apiServices')
const { formatterFiles } = require('./csvServices')

// Función para obtener y procesar los nombres de archivos
const getFiles = async () => {
  try {
    const filesRes = await fetchFiles()

    if (filesRes.status !== 200) {
      throw new Error(`Request failed with status ${filesRes.status}`)
    }
    return filesRes.data.files
  } catch (err) {
    console.error(`Error in getFiles: ${err.message}`)
    throw err
  }
}

// Función principal para descargar y formatear archivos
const downloadAndFormatterFiles = async () => {
  try {
    const files = await getFiles()
    const formattedFiles = await formatterFiles(files)
    return formattedFiles.filter((item) => item !== null)
  } catch (err) {
    console.log(`Error in downloadAndFormatterFiles: ${err.message}`)
    throw err
  }
}

module.exports = {
  downloadAndFormatterFiles,
  getFiles
}
