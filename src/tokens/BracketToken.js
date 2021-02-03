import GroupToken from "./GroupToken";

export default class BracketToken extends GroupToken {
    static isApplicable(character) {
        return character === "(";
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
