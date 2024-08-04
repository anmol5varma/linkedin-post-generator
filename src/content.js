const HexColor = require('./colors.js')
const userInput = require('../user_input.json')

const content = [
  { title: userInput.title, description: '' }
].concat(userInput.pages.map(o => ({ title: o.heading, description: o.description }))
).concat([{
  title: 'cta',
  description: userInput.cta
}])

const bgColorHex = HexColor[userInput.bgColor]

const authorName = "Anmol Varma"

module.exports = { content, bgColorHex, authorName }