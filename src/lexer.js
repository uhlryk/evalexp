import CharacterAccessor from "./CharacterAccessor";
import BaseToken from "./tokens/AbstractToken";
import RootToken from "./tokens/RootToken";
import NumberToken from "./tokens/NumberToken";
import VariableToken from "./tokens/VariableToken";
import BracketToken from "./tokens/BracketToken";
import AdditionToken from "./tokens/AdditionToken";
import DivisionToken from "./tokens/DivisionToken";
import MultiplicationToken from "./tokens/MultiplicationToken";
import SubtractionToken from "./tokens/SubtractionToken";
import PowerToken from "./tokens/PowerToken";

BaseToken.registerTokenType(NumberToken);
BaseToken.registerTokenType(VariableToken);
BaseToken.registerTokenType(AdditionToken);
BaseToken.registerTokenType(SubtractionToken);
BaseToken.registerTokenType(DivisionToken);
BaseToken.registerTokenType(MultiplicationToken);
BaseToken.registerTokenType(PowerToken);
BaseToken.registerTokenType(BracketToken);

export default function lexer(stringExpression) {
    const iterator = new CharacterAccessor(stringExpression);
    iterator.removeCharacters(/\s/g);
    const rootToken = new RootToken(iterator);
    rootToken.parse();
    return rootToken;
}
