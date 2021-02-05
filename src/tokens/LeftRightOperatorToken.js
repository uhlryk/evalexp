import OperatorToken from "./OperatorToken";

export default class LeftRightOperatorToken extends OperatorToken {

    setLeftChild(child) {
        this.addChildAtIndex(child, 0);
    }

    getLeftChild() {
        return this.getChild(0);
    }

    setRightChild(child) {
        this.addChildAtIndex(child, 1);
    }

    getRightChild() {
        return this.getChild(1);
    }

    transformLeftOperand() {
        const operand = this.getLeft();
        if(!operand) {
            throw SyntaxError("Left operand is required");
        }
        const leftOperandSibling = operand.getLeft();
        operand.getParent().removeChild(operand);
        operand.setParent(this);
        operand.setLeft(null);
        operand.setRight(null);
        this.setLeftChild(operand);
        if(leftOperandSibling) {
            leftOperandSibling.setRight(this);
        }
        this.setLeft(leftOperandSibling);
    }

    transformRightOperand() {
        const operand = this.getRight();
        if(!operand) {
            throw SyntaxError("Right operand is required");
        }
        const rightOperandSibling = operand.getRight();
        operand.getParent().removeChild(operand);
        operand.setParent(this);
        operand.setLeft(null);
        operand.setRight(null);
        this.setRightChild(operand);
        if(rightOperandSibling) {
            rightOperandSibling.setLeft(this);
        }
        this.setRight(rightOperandSibling);
    }

    transform() {
        this.transformLeftOperand();
        this.transformRightOperand();
    }
}