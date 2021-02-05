import ValueToken from "./ValueToken";

export default class NumberToken extends ValueToken {

    static isApplicable(character) {
        return /^[0-9]$/i.test( character );
    }

    parse() {
        let isFloatingPoint = false;
        while(true) {
            const nextValue = this.getIterator().getNextValue();
            if(/^[0-9.]$/i.test( nextValue )) {
                if(nextValue === ".") {
                    if(isFloatingPoint) {
                        throw SyntaxError("More than one floating point in number");
                    } else {
                        isFloatingPoint = true;

                    }
                }
                this.getIterator().moveLeft();
                this.setValue(this.getValue() + "" + nextValue);
            } else {
                break;
            }
        }
        this.parseLeft();
    }

    evaluate() {
        return Number(this.getValue());
    }
}