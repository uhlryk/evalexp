import OperatorToken from "./OperatorToken";
import ValueToken from "./ValueToken";


export default class LeftRightOperatorToken extends OperatorToken {

    setLeftChild(child) {
        this.addChildAtIndex(child, 0);
    }

    setRightChild(child) {
        this.addChildAtIndex(child, 1);
    }

    transformLeftOperand() {
        const operand = this.getLeft();
        if(!operand) {
            throw SyntaxError("Left operand is required");
        }
        if(!(operand instanceof ValueToken)) {
            throw SyntaxError("Left operand Should be an instance of ValueToken");
        }
        const leftOperandSibling = operand.getLeft();
        operand.setParent(this);
        operand.setLeft(null);
        operand.setRight(null);
        this.setLeftChild(operand);
        leftOperandSibling.setRight(this);
        this.setLeft(leftOperandSibling);
    }

    transformRightOperand() {
        const operand = this.getRight();
        if(!operand) {
            throw SyntaxError("Right operand is required");
        }
        if(!(operand instanceof ValueToken)) {
            throw SyntaxError("Right operand Should be an instance of ValueToken");
        }
        const rightOperandSibling = operand.getRight();
        operand.setParent(this);
        operand.setLeft(null);
        operand.setRight(null);
        this.setRightChild(operand);
        rightOperandSibling.setLeft(this);
        this.setRight(rightOperandSibling);
    }

    transform() {
        this.transformLeftOperand();
        this.transformRightOperand();
    }
}