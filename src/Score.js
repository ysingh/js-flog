const SCORES = {
  Program: 0,
  ClassMethod: 1,
  BlockStatement: 1,
  FunctionDeclaration: 1,

}

const chalk = require('chalk')

class Score {
  score(node) {
    console.log(`Node type ${node.type} SCORE: ${SCORES[node.type]}`)

    if (this.isFunction(node)) return this.scoreFunction(node)

    switch(node.type) {
      case 'ExpressionStatement':
        return this.scoreExpressionStatement(node)
        break
      case 'ClassDeclaration':
        return this.scoreClassDeclaration(node)
        break
      default:
        return 0
        break
    }
    return SCORES[node.type] || 0
  }

  scoreExpressionStatement(node) {
    if (!node || !node.expression) console.log(chalk.blue(JSON.stringify(node, null, 2)))
    if (node.expression.type === 'Assignment') return 1
    if (node.expression.type === 'NumericLiteral') return 1
    if (node.expression.type === 'ArrowFunctionExpression') return this.scoreFunction(node)
    return 0
  }

  scoreFunction(node) {
    return 1
  }

  scoreClassDeclaration(node) {
  }

  isFunction(node) {
    return node.type === 'ClassMethod' || node.type === 'FunctionDeclaration' || node.type === 'ArrowFunctionExpression'
  }
}

module.exports = new Score()
