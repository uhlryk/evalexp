export default class BaseToken {
    static registeredTokenTypes = [];

    static registerTokenType(TokenType) {
        BaseToken.registeredTokenTypes.push(TokenType);
    }

    static getApplicable(character) {
        const ApplicableToken = BaseToken.registeredTokenTypes.find(TokenType =>
            TokenType.isApplicable(character)
        );
        if (ApplicableToken) {
            return ApplicableToken;
        } else {
            console.log(character);
            throw SyntaxError("No applicable token types");
        }
    }

    static isApplicable(character) {
        return false;
    }

    constructor(iterator) {
        this.iterator = iterator;
    }

    getIterator() {
        return this.iterator;
    }

    setLeft(left) {
        this.left = left;
    }

    getLeft() {
        return this.left;
    }

    setRight(right) {
        this.right = right;
    }

    getRight() {
        return this.right;
    }

    setParent(parent) {
        this.parent = parent;
    }

    getParent() {
        return this.parent;
    }

    isChildAllowed() {
        return true;
    }

    getApplicableToken() {
        if (this.getIterator().moveLeft()) {
            const value = this.getIterator().getValue();
            if (value && (!this.getParent() || this.getParent().isChildAllowed())) {
                const ApplicableTokenType = BaseToken.getApplicable(value);
                return new ApplicableTokenType(this.getIterator());
            } else {
                return null;
            }
        } else {
            return null;
        }
    }

    processLeft() {
        const applicableToken = this.getApplicableToken();
        if(applicableToken) {
            this.setRight(applicableToken);
            applicableToken.setLeft(this);
            applicableToken.setParent(this.getParent());
            this.getParent().addChild(applicableToken);
            applicableToken.process();
        }
    }

    process() {}
}
