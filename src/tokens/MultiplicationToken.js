import LeftRightOperatorToken from "./LeftRightOperatorToken";


export default class MultiplicationToken extends LeftRightOperatorToken {
    static isApplicable(character) {
        return character === "*";
    }

    evaluate(declarations) {
        return this.getLeftChild().evaluate(declarations) * this.getRightChild().evaluate(declarations);
    }
}