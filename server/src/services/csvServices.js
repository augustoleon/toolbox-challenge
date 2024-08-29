const csv = require('csv-parser')
const { fetchFileStream } = require('./apiServices')

// Función para parsear y formatear un archivo CSV
const parserCsvFile = (stream) => {
  const parser = stream.pipe(csv())

  let fileFormat = {}
  parser.on('data', (data) => {
    if (
      Object.keys(data).length === 4 &&
            Object.values(data).filter((value) => value !== '').length === 4
    ) {
      fileFormat = {
        ...fileFormat,
        file: data.file,
        lines: [
          ...(fileFormat.lines || []),
          {
            text: data.text,
            number: data.number,
            hex: data.hex
          }
        ]
      }
    }
  })

  return new Promise((resolve, reject) => {
    parser.on('finish', () => {
      resolve(fileFormat && Object.keys(fileFormat).length !== 0 ? fileFormat : null)
    })

    parser.on('error', (error) => {
      reject(error)
    })
  })
}

// Función para formatear un conjunto de archivos CSV
const formatterFiles = async (files) => {
  return await Promise.all(
    files.map(async (file) => {
      try {
        const res = await fetchFileStream(file)
        if (res.status !== 200) {
          throw new Error(`Failed to fetch file ${file}: ${res.status} ${res.statusText}`)
        }
        return await parserCsvFile(res.data)
      } catch (err) {
        console.error(`Error fetching file ${file}: ${err.message}`)
        return null
      }
    })
  )
}

module.exports = {
  parserCsvFile,
  formatterFiles
}
