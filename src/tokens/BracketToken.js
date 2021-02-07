import GroupToken from "./GroupToken";
import AddMultiplicationOperatorTransformModifier from "./transformModifier/AddMultiplicationOperatorTransformModifier";

export default class BracketToken extends GroupToken {
    static isApplicable(character) {
        return character === "(";
    }

    constructor(iterator) {
        super(iterator);
        this.addTransformModifier(new AddMultiplicationOperatorTransformModifier());
    }

    isChildAllowed() {
        return this.getIterator().getValue() !== ")";
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
