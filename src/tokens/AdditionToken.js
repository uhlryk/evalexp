import LeftNotNullRightOperatorToken from "./LeftNotNullRightOperatorToken";

export default class AdditionToken extends LeftNotNullRightOperatorToken {
    static isApplicable(character) {
        return character === "+";
    }

    evaluate(declarations) {
        return this.getLeftChild().evaluate(declarations) + this.getRightChild().evaluate(declarations);
    }
}