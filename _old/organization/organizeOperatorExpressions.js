import debug from "debug";
import organizeType from "./organizeType";
import tokenizeType from "../tokenization/tokenizeType";
const log = debug("evalexp:organize:organizeOperatorExpressions");
export default function organizeOperatorExpressions(rootTokenNode, operators) {
  log("processing token node [" + operators + "] " + JSON.stringify(rootTokenNode));
  if (
    ![organizeType.MATH_EXPRESSION, organizeType.EXPRESSION].includes(
      rootTokenNode.type
    )
  ) {
    log(JSON.stringify(`node type ${rootTokenNode.type} is not expression type`));
    return rootTokenNode;
  }
  const tokens = rootTokenNode.value;
  rootTokenNode.value = [];
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    log("processing token " +JSON.stringify(token));
    if (
      token.type === tokenizeType.OPERATOR &&
      operators.includes(token.value)
    ) {
      log("handling operator");
      const prevToken = rootTokenNode.value.pop();
      let nextToken = tokens[i + 1];
      if ([tokenizeType.EXPRESSION, organizeType.MATH_EXPRESSION].includes(nextToken.type)) {
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
      log("handling expression");
      rootTokenNode.value.push(organizeOperatorExpressions(token, operators));
    } else if (token.type === organizeType.MATH_EXPRESSION) {
      log("handling math");
      const childTokens = token.value;
      token.value = [
        organizeOperatorExpressions(childTokens[0], operators),
        organizeOperatorExpressions(childTokens[1], operators)
      ];
      rootTokenNode.value.push(token);
    } else {
      log("handling else ", token.type);
      rootTokenNode.value.push(token);
    }
  }
  return rootTokenNode;
}
