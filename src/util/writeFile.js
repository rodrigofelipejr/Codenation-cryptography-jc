const fs = require('fs').promises

async function fnWriteFile(path, data) {
  try {
    await fs.writeFile(path, data)
    console.log('Change completed...');
  } catch (error) {
    console.log('Error fnWriteFile...', error)
  }
}

module.exports = fnWriteFile