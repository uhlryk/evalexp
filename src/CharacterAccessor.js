export default class CharacterAccessor {
    constructor(rawString) {
        this.rawString = rawString;
        this.index = -1;
    }

    removeCharacters(charactersRegexp) {
        this.rawString = this.rawString.replace(charactersRegexp, "");
    }

    getValue() {
        return this.rawString[this.index];
    }

    getNextValue() {
        return this.rawString[this.index + 1];
    }

    getPrevValue() {
        return this.rawString[this.index - 1];
    }

    moveLeft() {
        if (this.index + 1 >= this.rawString.length) {
            return null;
        } else {
            this.index++;
            return true;
        }
    }

    moveRight() {
        if (this.index - 1 < 0) {
            return null;
        } else {
            this.index--;
            return true;
        }
    }
}
