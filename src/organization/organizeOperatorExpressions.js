import organizeType from "./organizeType";
import tokenizeType from "../tokenization/tokenizeType";

export default function organizeOperatorExpressions(rootTokenNode, operators) {
  if (
    ![organizeType.MATH_EXPRESSION, organizeType.EXPRESSION].includes(
      rootTokenNode.type
    )
  ) {
    return rootTokenNode;
  }
  const tokens = rootTokenNode.value;
  rootTokenNode.value = [];
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (
      token.type === tokenizeType.OPERATOR &&
      operators.includes(token.value)
    ) {
      const prevToken = rootTokenNode.value.pop();
      let nextToken = tokens[i + 1];
      if (nextToken.type === tokenizeType.EXPRESSION) {
        nextToken = organizeOperatorExpressions(nextToken, operators);
      }
      i++;
      const newTokenNode = {
        type: organizeType.MATH_EXPRESSION,
        math: token.value,
        value: [prevToken, nextToken]
      };
      rootTokenNode.value.push(newTokenNode);
    } else if (token.type === tokenizeType.EXPRESSION) {
      rootTokenNode.value.push(organizeOperatorExpressions(token, operators));
    } else if (token.type === organizeType.MATH_EXPRESSION) {
      const childTokens = token.value;
      token.value = [
        organizeOperatorExpressions(childTokens[0], operators),
        organizeOperatorExpressions(childTokens[1], operators)
      ];
      rootTokenNode.value.push(token);
    } else {
      rootTokenNode.value.push(token);
    }
  }
  return rootTokenNode;
}
