import ValueToken from "./ValueToken";
import NumberToken from "./NumberToken";
import MultiplicationToken from "./MultiplicationToken";


export default class VariableToken extends ValueToken {

    static isApplicable(character) {
        return /^[a-z]$/i.test( character );
    }

    parse() {
        while(true) {
            const nextValue = this.getIterator().getNextValue();
            if(/^[a-z0-9]$/i.test( nextValue )) {
                this.getIterator().moveLeft();
                this.setValue(this.getValue() + "" + nextValue);
            } else {
                break;
            }
        }
        this.parseLeft();
    }

    transformAddMultiplicationOperator() {
        const operand = this.getLeft();
        if(operand && operand instanceof NumberToken) {
            const multiplicationToken = new MultiplicationToken(this.getIterator());
            operand.setRight(multiplicationToken);
            multiplicationToken.setLeft(operand);
            this.setLeft(multiplicationToken);
            multiplicationToken.setRight(this);
            multiplicationToken.setParent(this.getParent());
            this.getParent().addChild(multiplicationToken);
            multiplicationToken.setRoot(this.getRoot());
        }
    }

    transform() {
        this.transformAddMultiplicationOperator();
    }

    evaluate(declarations) {
        const variableName = this.getValue();
        if(!declarations || !(variableName in declarations)) {
            throw SyntaxError(`Expected variable is not defined ${variableName}`);
        }
        const variable = declarations[variableName];
        if(typeof variable === "function") {
            return Number(variable());
        }
        return Number(variable);
    }
}