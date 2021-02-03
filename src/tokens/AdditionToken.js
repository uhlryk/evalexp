import LeftRightOperatorToken from "./LeftRightOperatorToken";


export default class AdditionToken extends LeftRightOperatorToken {
    static isApplicable(character) {
        return character === "+";
    }
}