import OperatorToken from "./OperatorToken";


export default class LeftRightOperatorToken extends OperatorToken {

    setLeftChild(child) {
        this.addChildAtIndex(child, 0);
    }

    setRightChild(child) {
        this.addChildAtIndex(child, 1);
    }

    transformOperator() {

    }
}