import lexer from "./lexer";
import RootToken from "./tokens/RootToken";
import NumberToken from "./tokens/NumberToken";
import OperatorToken from "./tokens/OperatorToken";
import AdditionToken from "./tokens/AdditionToken";
import BracketToken from "./tokens/BracketToken";
import MultiplicationToken from "./tokens/MultiplicationToken";
import VariableToken from "./tokens/VariableToken";

describe("lexer", () => {
    it("numA", () => {
        const result = lexer("10");
        expect(result).to.be.an.instanceof(RootToken);
        const tokenList = result.getGlobalList();
        expect(tokenList.length).to.be.eql(1);
        expect(tokenList[0]).to.be.an.instanceof(NumberToken);
        expect(tokenList[0]).to.have.property("value", "10");
    });
    it("numA + numB", () => {
        const result = lexer("10 + 20");
        expect(result).to.be.an.instanceof(RootToken);
        const tokenList = result.getGlobalList();
        expect(tokenList.length).to.be.eql(3);
        expect(tokenList[0]).to.be.an.instanceof(NumberToken);
        expect(tokenList[0]).to.have.property("value", "10");

        expect(tokenList[1]).to.be.an.instanceof(AdditionToken);

        expect(tokenList[2]).to.be.an.instanceof(NumberToken);
        expect(tokenList[2]).to.have.property("value", "20");
    });

    it("numA + varA", () => {
        const result = lexer("10 + varA");
        expect(result).to.be.an.instanceof(RootToken);
        const tokenList = result.getGlobalList();
        expect(tokenList.length).to.be.eql(3);
        expect(tokenList[0]).to.be.an.instanceof(NumberToken);
        expect(tokenList[0]).to.have.property("value", "10");

        expect(tokenList[1]).to.be.an.instanceof(AdditionToken);

        expect(tokenList[2]).to.be.an.instanceof(VariableToken);
        expect(tokenList[2]).to.have.property("name", "varA");
    });

    it("numA + (numB + num C) * numD", () => {
        const result = lexer("10 + (20 + 5) * 2");
        expect(result).to.be.an.instanceof(RootToken);
        const tokenList = result.getGlobalList();
        expect(tokenList.length).to.be.eql(8);
        expect(tokenList[0]).to.be.an.instanceof(NumberToken);
        expect(tokenList[0]).to.have.property("value", "10");

        expect(tokenList[1]).to.be.an.instanceof(AdditionToken);

        expect(tokenList[2]).to.be.an.instanceof(BracketToken);

        expect(tokenList[3]).to.be.an.instanceof(NumberToken);
        expect(tokenList[3]).to.have.property("value", "20");

        expect(tokenList[4]).to.be.an.instanceof(AdditionToken);

        expect(tokenList[5]).to.be.an.instanceof(NumberToken);
        expect(tokenList[5]).to.have.property("value", "5");

        expect(tokenList[6]).to.be.an.instanceof(MultiplicationToken);

        expect(tokenList[7]).to.be.an.instanceof(NumberToken);
        expect(tokenList[7]).to.have.property("value", "2");
    });
});