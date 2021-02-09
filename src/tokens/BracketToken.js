import GroupToken from "./GroupToken";
import addMultiplicationOperator from "./transformModifier/addMultiplicationOperator";

export default class BracketToken extends GroupToken {
    static isApplicable(character) {
        return character === "(";
    }

    isChildAllowed() {
        return this.getIterator().getValue() !== ")";
    }

    transform() {
        addMultiplicationOperator(this);
    }

    parse() {
        const nextValue = this.getIterator().getNextValue();
        if (nextValue === ")") {
            this.getIterator().moveNext();
            this.parseLeft();
        }
        this.parseUp();
        this.parseLeft();
    }
}
