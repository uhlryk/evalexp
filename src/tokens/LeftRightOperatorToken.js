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

    getLeftOperand() {
        const operand = this.getLeft();
        if(!operand) {
            throw SyntaxError("Left operand is required");
        }
        return operand;
    }

    transformLeftOperand() {
        const operand = this.getLeftOperand();
        const leftOperandSibling = operand.getLeft();
        if(operand.getParent()) {
            operand.getParent().removeChild(operand);
        }
        operand.setParent(this);
        operand.setLeft(null);
        operand.setRight(null);
        this.setLeftChild(operand);
        if(leftOperandSibling) {
            leftOperandSibling.setRight(this);
        }
        this.setLeft(leftOperandSibling);
    }

    getRightOperand() {
        const operand = this.getRight();
        if(!operand) {
            throw SyntaxError("Right operand is required");
        }
        return operand;
    }

    transformRightOperand() {
        const operand = this.getRightOperand();
        const rightOperandSibling = operand.getRight();
        if(operand.getParent()) {
            operand.getParent().removeChild(operand);
        }
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