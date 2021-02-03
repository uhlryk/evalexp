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
            throw SyntaxError(`No applicable token type for ${character}`);
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

    setRoot(root) {
        this.root = root;
        this.root.addGlobalChild(this);
    }

    getRoot() {
        return this.root;
    }

    isChildAllowed() {
        return true;
    }

    getApplicableToken() {
        if (this.getIterator().moveLeft()) {
            const value = this.getIterator().getValue();
            if (value && (!this.getParent() || this.getParent().isChildAllowed())) {
                const ApplicableTokenType = BaseToken.getApplicable(value);
                const applicableToken = new ApplicableTokenType(this.getIterator());
                return applicableToken;
            } else {
                return null;
            }
        } else {
            return null;
        }
    }

    parseLeft() {
        const applicableToken = this.getApplicableToken();
        if(applicableToken) {
            this.setRight(applicableToken);
            applicableToken.setRoot(this.getRoot());
            applicableToken.setLeft(this);
            applicableToken.setParent(this.getParent());
            this.getParent().addChild(applicableToken);
            applicableToken.parse();
        }
    }

    parse() {}
}
