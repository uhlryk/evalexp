import GroupToken from "./GroupToken";

export default class ArgumentToken extends GroupToken {
    static isApplicable(character) {
        return character === "(";
    }

    isChildAllowed() {
        return ![")", ","].includes(this.getIterator().getValue());
    }

    parse() {
        this.parseUp();
    }
}
