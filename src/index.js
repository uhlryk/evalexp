import tokenize from "./tokenization/tokenize";
import organize from "./organization/organize";
import evaluate from "./evaluation/evaluate";

export default function(stringExpression = "0") {
  const tokens = tokenize(stringExpression);

  const tokenNodes = organize(tokens);

  const evaluation = evaluate(tokenNodes);
  return evaluation;
}
