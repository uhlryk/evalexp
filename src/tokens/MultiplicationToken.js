import OperatorToken from "./OperatorToken";


export default class MultiplicationToken extends OperatorToken {
    static isApplicable(character) {
        return character === "*";
    }
}