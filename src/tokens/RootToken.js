import GroupToken from "./GroupToken";


export default class RootToken extends GroupToken {
    process() {
        this.processUp();
    }
}