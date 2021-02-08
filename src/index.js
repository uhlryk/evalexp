import lexer from "./lexer";
import transformer from "./transformer";

class EvalExp {
    static evaluate(expression, declarations = {}) {
        const evalExp = new EvalExp(expression);
        return evalExp.evaluate(declarations);
    }

    constructor(expression) {
        this.expression = expression;
        this.rootToken = null;
    }

    parse() {
        this.rootToken = lexer(this.expression);
        transformer(this.rootToken);
    }

    getParsedTree() {
        this.parseIfNotParsed();
        return this.rootToken;
    }

    evaluate(declarations = {}) {
        this.parseIfNotParsed();
        return this.rootToken.evaluate(declarations);
    }

    parseIfNotParsed() {
        if (!this.rootToken) {
            this.parse();
        }
    }
}
function evaluate(expression, declarations) {
    return EvalExp.evaluate(expression, declarations);
}

export default EvalExp;
export { EvalExp, evaluate };
