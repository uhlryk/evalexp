import AbstractToken from "./AbstractToken";


export default class GroupToken extends AbstractToken{
    constructor(props) {
        super(props);
        this.children = [];
    }

    addChild(child) {
        this.children.push(child);
    }

    removeChild(removeChild) {
        this.children = this.children.filter(child => child !== removeChild);
    }

    addChildAtIndex(child, index) {
        this.children[index] = child;
    }

    getChild(index) {
        return this.children[index];
    }

    parseUp() {
        const applicableToken = this.getApplicableToken();
        if(applicableToken) {
            this.addChild(applicableToken);
            applicableToken.setRoot(this.getRoot());
            applicableToken.setParent(this);
            applicableToken.parse();
        }
    }

    evaluate(declarations) {
        return this.getChild(0).evaluate(declarations);
    }
}