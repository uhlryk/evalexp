import lexer from "./lexer";

export default class EvalExp {
    constructor(rawString) {
        this.rawString = rawString;
    }

    parse() {
        this.rootToken = lexer(this.rawString);
    }

}