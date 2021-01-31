import organizeType from "./organizeType";
import tokenizeType from "../tokenization/tokenizeType";

export default function organizeBracketExpressions(rootTokenNode) {
    const subExpressions = [rootTokenNode];
    const tokens = rootTokenNode.value;
    rootTokenNode.value= [];
    for(let i=0; i < tokens.length; i++) {
        const token = tokens[i];
        const currentTokenNode = subExpressions[subExpressions.length -1];
        if(token.type === tokenizeType.BRACKET_OPEN) {
            const newTokenNode = {
                type: organizeType.EXPRESSION,
                value: []
            };
            currentTokenNode.value.push(newTokenNode);
            subExpressions.push(newTokenNode);
        } else if(token.type === tokenizeType.BRACKET_CLOSE) {
            subExpressions.pop();
        } else if(token.type === tokenizeType.EXPRESSION) {
            currentTokenNode.value.push(organizeBracketExpressions(token));
        } else {
            currentTokenNode.value.push(token);
        }
    }
    return rootTokenNode;
}