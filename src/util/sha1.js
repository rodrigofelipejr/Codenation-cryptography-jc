const crypto = require('crypto')

const fnSha1 = (data) => {
  const hash = crypto.createHash('sha1')
  hash.update(data)
  return hash.digest('hex')
}

module.exports = fnSha1