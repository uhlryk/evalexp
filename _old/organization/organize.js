import organizeType from "./organizeType";
import organizeOperatorExpressions from "./organizeOperatorExpressions";
import organizeBracketExpressions from "./organizeBracketExpressions";

export default function organization(tokens) {
  const rootTokenNode = {
    type: organizeType.EXPRESSION,
    value: tokens
  };
  let result = organizeBracketExpressions(rootTokenNode);
  result = organizeOperatorExpressions(result, ["*", "/"]);
  result = organizeOperatorExpressions(result, ["+", "-"]);
  return result;
}
