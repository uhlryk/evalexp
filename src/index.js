import lexer from "./lexer";
import transformer from "./transformer";

class EvalExp {
    constructor(rawString) {
        this.rawString = rawString;
        this.rootToken = null;
    }

    parse() {
        this.rootToken = lexer(this.rawString);
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
        if(!this.rootToken) {
            this.parse();
        }
    }
}

export default EvalExp;
export {
    EvalExp
};