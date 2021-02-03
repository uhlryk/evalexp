import LeftRightOperatorToken from "./LeftRightOperatorToken";


export default class DivisionToken extends LeftRightOperatorToken {
    static isApplicable(character) {
        return character === "/";
    }
}