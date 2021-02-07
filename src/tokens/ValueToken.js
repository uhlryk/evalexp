import AbstractToken from "./AbstractToken";

export default class ValueToken extends AbstractToken {
    constructor(iterator) {
        super(iterator);
        this.value = iterator.getValue();
    }

    setValue(value) {
        this.value = value;
    }

    getValue() {
        return this.value;
    }

    parse() {
        this.parseLeft();
    }
}
