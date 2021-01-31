import organizeType from "./organizeType";
import tokenizeType from "../tokenization/tokenizeType";

export default function organizeSubExpressions(tokens) {
    const rootTokenNode = {
        type: organizeType.EXPRESSION,
        value: []
    };
    const subExpressions = [rootTokenNode];
    for(const token of tokens) {
        const tokenNode = subExpressions[subExpressions.length -1];
        if(token.type === tokenizeType.BRACKET_OPEN) {
            const newTokenNode = {
                type: organizeType.EXPRESSION,
                value: []
            };
            tokenNode.value.push(newTokenNode);
            subExpressions.push(newTokenNode);

        } else if(token.type === tokenizeType.BRACKET_CLOSE) {
            subExpressions.pop();
        } else {
            tokenNode.value.push(token);
        }
    }
    return rootTokenNode;
}