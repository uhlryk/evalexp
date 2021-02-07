import NumberToken from "../NumberToken";
import MultiplicationToken from "../MultiplicationToken";
import AbstractTransformModifier from "./AbstractTransformModifier";

export default class AddMultiplicationOperatorTransformModifier extends AbstractTransformModifier{
    transform(token) {
        const operand = token.getLeft();
        if(operand && operand instanceof NumberToken) {
            const multiplicationToken = new MultiplicationToken(token.getIterator());
            operand.setRight(multiplicationToken);
            multiplicationToken.setLeft(operand);
            token.setLeft(multiplicationToken);
            multiplicationToken.setRight(token);
            multiplicationToken.setParent(token.getParent());
            token.getParent().addChild(multiplicationToken);
            multiplicationToken.setRoot(token.getRoot());
        }
    }
}