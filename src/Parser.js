const fs = require('fs')
const parser = require('@babel/parser')
const chalk = require('chalk')
const traverse = require('@babel/traverse')
class Parser {
  constructor(filepath) {
    try {
      this.code = fs.readFileSync(filepath, 'utf-8')
      const pathParts =  filepath.split('/')
      this.filename = pathParts[pathParts.length - 1]
    } catch (e) {
      throw e
    }
  }

  ast () {
    const ast = parser.parse(this.code)

    fs.writeFileSync('./data/ast.json', JSON.stringify(ast, null, 2))

    const sloc = ast.loc.end.line - ast.loc.start.line
    console.log(`Source file: ${chalk.green(this.filename)} has ${chalk.green(sloc)} lines`)

    // const traversalOrder = {}

    // let i = 0;

    // traverse.default(ast, {
    //   exit(path) {
    //     console.log(path.parent)
    //     traversalOrder[i++] = (path.node)
    //   }
    // })

    fs.writeFileSync('./data/traversal_order.json', JSON.stringify(traversalOrder, null, 2))
  }
}

module.exports = Parser
