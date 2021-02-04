import LeftRightOperatorToken from "./LeftRightOperatorToken";


export default class AdditionToken extends LeftRightOperatorToken {
    static isApplicable(character) {
        return character === "+";
    }

    evaluate() {
        return this.getLeftChild().evaluate() + this.getRightChild().evaluate();
    }
}