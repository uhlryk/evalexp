import organizeType from "../organization/organizeType";
import additionMath from "./operators/additionMath";
import tokenizeType from "../tokenization/tokenizeType";
import subtractionMath from "./operators/subtractionMath";
import multiplicationMath from "./operators/multiplicationMath";
import divisionMath from "./operators/divisionMath";

const operators = [
  additionMath,
  subtractionMath,
  multiplicationMath,
  divisionMath
];
export default function evaluate(rootTokenNode) {
  if (rootTokenNode.type === organizeType.EXPRESSION) {
    return evaluate(rootTokenNode.value[0]);
  } else if (rootTokenNode.type === organizeType.MATH_EXPRESSION) {
    const leftTokenValue = evaluate(rootTokenNode.value[0]);
    const rightTokenValue = evaluate(rootTokenNode.value[1]);
    const operator = operators.find(operator =>
      operator.isApplicable(rootTokenNode)
    );
    if (operator) {
      return operator.process(leftTokenValue, rightTokenValue);
    } else {
      // throw error
      return 0;
    }
  } else if (rootTokenNode.type === tokenizeType.VARIABLE) {
  } else {
    return Number(rootTokenNode.value);
  }
}
