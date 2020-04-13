const path = require('path')

const fncreateFile = require('./util/createFile')
const fnReadFile = require('./util/readFile')
const fnDecrypt = require('./util/decrypt')
const fnSha1 = require('./util/sha1')
const fnWriteFile = require('./util/writeFile')
const fnSendFile = require('./util/sendFile')
const config = require('./config') 

const filePath = path.join(__dirname, config.path) 

const init = async () => {  
  console.log('Process started...')

  // criando arquivo 
  await fncreateFile(filePath) 

  // lendo dados do arquivo
  let file = await fnReadFile(filePath)

  // decifrando dados
  const decifrado = fnDecrypt(file.numero_casas, file.cifrado)

  file.decifrado = decifrado  
  file.resumo_criptografico = fnSha1(decifrado) // gerando hash sha1

  const json = JSON.stringify(file) // convertendo para json
  
  // salvando alterações
  await fnWriteFile(filePath, json)

  // enviando arquivo para avaliação
  await fnSendFile(filePath) 
  
  console.log('Completed process...')
}

init()