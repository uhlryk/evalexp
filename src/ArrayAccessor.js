export default class ArrayAccessor {
    constructor(iterable) {
        this.iterable = iterable;
        this.index = -1;
    }

    getValue() {
        return this.iterable[this.index];
    }

    getNextValue() {
        return this.iterable[this.index + 1];
    }

    getPrevValue() {
        return this.iterable[this.index - 1];
    }

    moveLeft() {
        if(this.index +1 >= this.iterable.length) {
            return null;
        } else {
            this.index++;
            return true;
        }
    }

    moveRight() {
        if(this.index - 1 < 0) {
            return null;
        } else {
            this.index--;
            return true;
        }
    }
}