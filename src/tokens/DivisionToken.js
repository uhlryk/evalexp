import OperatorToken from "./OperatorToken";


export default class DivisionToken extends OperatorToken {
    static isApplicable(character) {
        return character === "/";
    }
}