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
export default function evaluate(rootTokenNode, variableObject = {}) {
  if (rootTokenNode.type === organizeType.EXPRESSION) {
    return evaluate(rootTokenNode.value[0], variableObject);
  } else if (rootTokenNode.type === organizeType.MATH_EXPRESSION) {
    const leftTokenValue = evaluate(rootTokenNode.value[0], variableObject);
    const rightTokenValue = evaluate(rootTokenNode.value[1], variableObject);
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
    if(typeof variableObject[rootTokenNode.value] !== "undefined") {
      if(typeof variableObject[rootTokenNode.value] === "function") {
        return variableObject[rootTokenNode.value]();
      } else {
        return variableObject[rootTokenNode.value];
      }
    } else {
      throw Error("Variable not initialized");
    }
  } else {
    return Number(rootTokenNode.value);
  }
}
