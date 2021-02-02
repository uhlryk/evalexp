import OperatorToken from "./OperatorToken";


export default class SubtractionToken extends OperatorToken {
    static isApplicable(character) {
        return character === "-";
    }
}