import ValueToken from "./ValueToken";


export default class NumberToken extends ValueToken {

    static isApplicable(character) {
        return /^[0-9]$/i.test( character );
    }

    process() {
        while(true) {
            const nextValue = this.getIterator().getNextValue();
            if(/^[0-9]$/i.test( nextValue )) {
                this.getIterator().moveLeft();
                this.setValue(this.getValue() + "" + nextValue);
            } else {
                break;
            }
        }
        this.processLeft();
    }
}