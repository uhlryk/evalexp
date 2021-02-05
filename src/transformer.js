import MultiplicationToken from "./tokens/MultiplicationToken";
import DivisionToken from "./tokens/DivisionToken";
import AdditionToken from "./tokens/AdditionToken";
import SubtractionToken from "./tokens/SubtractionToken";

export default function transformer(rootToken) {
    const orderedOperatorTypes = [
        MultiplicationToken,
        DivisionToken,
        AdditionToken,
        SubtractionToken
    ];

    const tokenList = rootToken.getGlobalList();
    orderedOperatorTypes.forEach(operatorType => {
        tokenList.forEach(token => {
            if (token instanceof operatorType) {
                token.transform();
            }
        });
    });
    return rootToken;
}
