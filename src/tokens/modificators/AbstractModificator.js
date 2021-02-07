
export default class AbstractModificator {
    constructor() {
        if(new.target === AbstractModificator) {
            throw SyntaxError("AbstractModificator is abstract class");
        }
    }
}