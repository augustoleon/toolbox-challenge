const axios = require('axios')

const baseUrl = process.env.BASE_URL || "https://echo-serv.tbxnet.com/v1"
const headers = { Authorization: 'Bearer aSuperSecretKey' }

// Función para obtener la lista de archivos
const fetchFiles = async () => {
  return await axios.get(`${baseUrl}/secret/files`, { headers })
}

// Función para obtener un archivo específico como stream
const fetchFileStream = async (fileName) => {
  return await axios.get(`${baseUrl}/secret/file/${fileName}`, { headers, responseType: 'stream' })
}

module.exports = {
  fetchFiles,
  fetchFileStream,
  baseUrl,
  headers
}
