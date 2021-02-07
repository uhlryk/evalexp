export default class AbstractTransformModifier {
    constructor() {
        if (new.target === AbstractTransformModifier) {
            throw SyntaxError("AbstractModificator is abstract class");
        }
    }

    transform() {
        return true;
    }
}
