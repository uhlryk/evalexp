import LeftRightOperatorToken from "./LeftRightOperatorToken";


export default class SubtractionToken extends LeftRightOperatorToken {
    static isApplicable(character) {
        return character === "-";
    }
}