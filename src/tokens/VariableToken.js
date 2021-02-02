import ValueToken from "./ValueToken";


export default class VariableToken extends ValueToken {

    static isApplicable(character) {
        return /^[a-z]$/i.test( character );
    }

    process() {
        while(true) {
            const nextValue = this.getIterator().getNextValue();
            if(/^[a-z0-9]$/i.test( nextValue )) {
                this.getIterator().moveNext();
                this.setValue(this.getValue() + "" + nextValue);
            } else {
                break;
            }
        }
        this.processLeft();
    }
}