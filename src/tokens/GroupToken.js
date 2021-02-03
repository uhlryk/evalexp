import BaseToken from "./BaseToken";


export default class GroupToken extends BaseToken{
    constructor(props) {
        super(props);
        this.children = [];
    }

    addChild(child) {
        this.children.push(child);
    }

    getChild(index) {
        return this.children[index];
    }

    parseUp() {
        const applicableToken = this.getApplicableToken();
        if(applicableToken) {
            this.addChild(applicableToken);
            applicableToken.setParent(this);
            applicableToken.parse();
        }
    }
}