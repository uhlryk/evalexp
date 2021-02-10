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
        // TODO I think we should not accept empty brackets  like 2 + ()*3 we should throw error in this condition
        if (nextValue === ")") {
            this.getIterator().moveNext();
            this.parseLeft();
        }
        this.parseUp();
        this.parseLeft();
    }
}
