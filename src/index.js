import lexer from "./lexer";
import transformer from "./transformer";

export default class EvalExp {
    constructor(rawString) {
        this.rawString = rawString;
    }

    parse() {
        this.rootToken = lexer(this.rawString);
        transformer(this.rootToken);
    }

    getParsedTree() {
        return this.rootToken;
    }

    evaluate(declarations) {
        return this.rootToken.evaluate(declarations);
    }
}