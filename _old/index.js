import tokenize from "./tokenization/tokenize";
import organize from "./organization/organize";
import evaluate from "./evaluation/evaluate";

export default function(stringExpression = "0", variableObject = {}) {
  const tokens = tokenize(stringExpression);
  const tokenNodes = organize(tokens);
  const evaluation = evaluate(tokenNodes, variableObject);
  return evaluation;
}
