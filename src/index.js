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

    evaluate(declarations = {}) {
        if (!this.rootToken) {
            this.rootToken = lexer(this.expression);
            transformer(this.rootToken);
        }
        return this.rootToken.evaluate(declarations);
    }
}
function evaluate(expression, declarations) {
    return EvalExp.evaluate(expression, declarations);
}

export default EvalExp;
export { EvalExp, evaluate };
