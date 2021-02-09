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

    transformLeftOperand(operand) {
        const leftOperandSibling = operand.getLeft();
        if(operand.getParent()) {
            operand.getParent().removeChild(operand);
        }
        operand.setParent(this);
        operand.setLeft(null);
        operand.setRight(null);
        if(leftOperandSibling) {
            leftOperandSibling.setRight(this);
        }
    }

    getRightOperand() {
        const operand = this.getRight();
        if(!operand) {
            throw SyntaxError("Right operand is required");
        }
        return operand;
    }

    transformRightOperand(operand) {
        const rightOperandSibling = operand.getRight();
        if(operand.getParent()) {
            operand.getParent().removeChild(operand);
        }
        operand.getParent().removeChild(operand);
        operand.setParent(this);
        operand.setLeft(null);
        operand.setRight(null);
        if(rightOperandSibling) {
            rightOperandSibling.setLeft(this);
        }
    }

    transform() {
        const leftOperand = this.getLeftOperand();
        this.transformLeftOperand(leftOperand);
        this.setLeftChild(leftOperand);
        const rightOperand = this.getRightOperand();
        this.transformRightOperand(rightOperand);
        this.setRightChild(rightOperand);
    }
}