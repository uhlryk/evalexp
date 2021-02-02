import OperatorToken from "./OperatorToken";


export default class AdditionToken extends OperatorToken {
    static isApplicable(character) {
        return character === "+";
    }
}