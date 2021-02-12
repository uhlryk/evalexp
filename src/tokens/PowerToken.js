import LeftRightOperatorToken from "./LeftRightOperatorToken";


export default class PowerToken extends LeftRightOperatorToken {
    static isApplicable(character) {
        return character === "^";
    }

    evaluate(declarations) {
        return Math.pow(this.getLeftChild().evaluate(declarations), this.getRightChild().evaluate(declarations));
    }
}