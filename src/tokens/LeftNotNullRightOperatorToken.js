import LeftRightOperatorToken from "./LeftRightOperatorToken";
import NumberToken from "./NumberToken";

export default class LeftNotNullRightOperatorToken extends LeftRightOperatorToken {

    getLeftOperand() {
        const operand = this.getLeft();
        if(!operand) {
            const numberToken = new NumberToken(this.getIterator());
            numberToken.setValue(0);
            return numberToken;
        }
        return operand;
    }
}