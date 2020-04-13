const axios = require('axios')
const FormData = require('form-data')
const { createReadStream } = require('fs')

const config = require('../config') 

async function fnSendFile(path) {
  try {
    const form = new FormData()
    form.append('answer', createReadStream(path))

    const res = await axios.post(`${config.url}/submit-solution?token=${config.token}`, form, {
      headers: form.getHeaders()
    })

    if (res.status === 200)
      console.log('Sending success...')

    console.log(res.data)
    } catch (error) {
    console.log('Error fnSendFile...', error)
  }
}

module.exports = fnSendFile