import organizeType from "./organizeType";
import tokenizeType from "../tokenization/tokenizeType";

export default function organizeSubExpressions(rootTokenNode) {
    const subExpressions = [rootTokenNode];
    const tokens = rootTokenNode.value;
    rootTokenNode.value= [];
    for(const token of tokens) {
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
            currentTokenNode.value.push(organizeSubExpressions(token));
        } else {
            currentTokenNode.value.push(token);
        }
    }
    return rootTokenNode;
}