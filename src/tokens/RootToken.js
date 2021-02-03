import GroupToken from "./GroupToken";


export default class RootToken extends GroupToken {

    constructor(iterator) {
        super(iterator);
        this.setRoot(this);
    }

    parse() {
        this.parseUp();
    }
}