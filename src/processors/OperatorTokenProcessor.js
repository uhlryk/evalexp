import tokenizeType from "../tokenizeType";

const operators = ["+","-", "*", "/"];
class OperatorTokenProcessor {

    static isApplicable(character) {
        return operators.includes(character);
    }

    static start() {
        return new OperatorTokenProcessor();
    }

    constructor() {
        this.data = "";
    }

    isStillApplicable(character) {
        return false;
    }

    process(character) {
        this.data = this.data + "" + character;
    }

    getToken() {
        return {
            value: this.data,
            type: tokenizeType.OPERATOR
        };
    }
}
export default OperatorTokenProcessor;