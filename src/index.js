const Parser = require('./Parser')

module.exports.getABCScore = (filePath) => {
  const parser = new Parser(filePath)
  parser.ast()
} 
