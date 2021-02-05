import BaseToken from "./BaseToken";

export default class ValueToken extends BaseToken {
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
