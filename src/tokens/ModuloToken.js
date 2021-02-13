import LeftRightOperatorToken from "./LeftRightOperatorToken";


export default class ModuloToken extends LeftRightOperatorToken {
    static isApplicable(character) {
        return character === "%";
    }

    evaluate(declarations) {
        return this.getLeftChild().evaluate(declarations) % this.getRightChild().evaluate(declarations);
    }
}