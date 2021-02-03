import GroupToken from "./GroupToken";


export default class OperatorToken extends GroupToken {
    parse() {
        this.parseLeft();
    }
}