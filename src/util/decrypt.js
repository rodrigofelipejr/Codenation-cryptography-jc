const ref = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const regex = new RegExp("^([A-Za-z])$")

function fnDecrypt(numJumps, str) {
  const arr = str.split('')
  
  const result = arr.map((char) => {
    if (regex.test(char)) {
      const index = ref.indexOf(char)
      let pos = index - numJumps

      if (pos < 0) 
      pos += ref.length

      return ref[pos]
    } else {
      return char
    }
  })
  
  console.log('Decrypt successfully...')
  return result.join('')
}

module.exports = fnDecrypt