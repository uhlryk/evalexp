import tokenizeType from "../tokenizeType";

const operators = ["("];
class OpenBracketTokenProcessor {

    static isApplicable(character) {
        return operators.includes(character);
    }

    constructor() {
        this.data = "";
    }

    isStillApplicable(character) {
        return false;
    }

    process(character) {
        this.data = character;
    }

    getToken() {
        return {
            value: this.data,
            type: tokenizeType.BRACKET_OPEN
        };
    }
}
export default OpenBracketTokenProcessor;