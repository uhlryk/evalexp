import ValueToken from "./ValueToken";
import AddMultiplicationOperatorTransformModifier from "./transformModifier/AddMultiplicationOperatorTransformModifier";


export default class VariableToken extends ValueToken {

    static isApplicable(character) {
        return /^[a-z]$/i.test( character );
    }

    constructor(iterator) {
        super(iterator);
        this.addTransformModifier(new AddMultiplicationOperatorTransformModifier());
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