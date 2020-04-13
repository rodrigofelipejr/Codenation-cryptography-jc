const fs = require('fs').promises

async function fnReadFile (path) { 
  try {
   const data = await fs.readFile(path, 'utf8')
   return JSON.parse(data)
  } catch (error) {
    console.log('Error fnReadFile...', error)
  } 
}

module.exports = fnReadFile