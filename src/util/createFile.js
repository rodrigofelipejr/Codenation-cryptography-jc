const axios = require('axios')
const fs = require('fs').promises

const config = require('../config') 

async function fncreateFile (path) { 
  try {
    // buscando dados
    const result = await axios.get(`${config.url}/generate-data?token=${config.token}`)

    // convertendo para json
    const json = JSON.stringify(result.data)

    // criando arquivo
    await fs.writeFile(path, json)

    console.log('Successfully created file...')
  } catch (error) {
    console.log('Error fncreateFile...', error)
  } 
}

module.exports = fncreateFile