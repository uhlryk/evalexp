import GroupToken from "./GroupToken";


export default class RootToken extends GroupToken {

    constructor(iterator) {
        super(iterator);
        this.globalChildren = [];
        this.setRoot(this);
    }

    setRoot(root) {
        this.root = root;
    }

    addGlobalChild(child) {
        this.globalChildren.push(child);
    }

    getGlobalList(index) {
        return this.globalChildren;
    }

    parse() {
        this.parseUp();
    }
}