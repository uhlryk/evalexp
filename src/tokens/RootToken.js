import GroupToken from "./GroupToken";


export default class RootToken extends GroupToken {
    parse() {
        this.parseUp();
    }
}