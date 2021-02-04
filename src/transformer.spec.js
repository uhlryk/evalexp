import lexer from "./lexer";
import RootToken from "./tokens/RootToken";
import NumberToken from "./tokens/NumberToken";
import OperatorToken from "./tokens/OperatorToken";
import AdditionToken from "./tokens/AdditionToken";
import BracketToken from "./tokens/BracketToken";
import MultiplicationToken from "./tokens/MultiplicationToken";
import transformer from "./transformer";

describe("transformer", () => {
    describe("numA", () => {
        let rootToken;
        before(function() {
            rootToken = lexer("10");
        });

        it("should transform", function() {
            transformer(rootToken);
            const tokenList = rootToken.getGlobalList();
            expect(tokenList.length).to.be.eql(1);
            expect(tokenList[0]).to.be.an.instanceof(NumberToken);
            expect(tokenList[0]).to.have.property("value", "10");
        });
    });
    describe("numA + numB", () => {
        let rootToken;
        before(function() {
            rootToken = lexer("10 + 20");
        });

        it("should transform", function() {
            transformer(rootToken);
            const tokenList = rootToken.getGlobalList();
            expect(tokenList.length).to.be.eql(3);
            const numAToken = tokenList[0];
            const operAdditionToken = tokenList[1];
            const numBToken = tokenList[2];
            expect(numAToken.value).to.be.eql("10");
            expect(numBToken.value).to.be.eql("20");
            expect(operAdditionToken).to.be.an.instanceof(AdditionToken);
            expect(numAToken.parent).to.be.eql(operAdditionToken);
            expect(numBToken.parent).to.be.eql(operAdditionToken);
            expect(operAdditionToken.parent).to.be.eql(rootToken);

        });
    });
    describe("numA + (numB + num C) * numD", () => {
        let rootToken;
        before(function() {
            rootToken = lexer("10 + (20 + 5) * 2");
        });

        it("should transform", function() {
            transformer(rootToken);
            const tokenList = rootToken.getGlobalList();
            expect(tokenList.length).to.be.eql(8);
            const numAToken = tokenList[0];
            const operAdditionAToken = tokenList[1];
            const bracketToken = tokenList[2];
            const numBToken = tokenList[3];
            const operAdditionBToken = tokenList[4];
            const numCToken = tokenList[5];
            const operMultiToken = tokenList[6];
            const numDToken = tokenList[7];
            expect(numAToken.value).to.be.eql("10");
            expect(numBToken.value).to.be.eql("20");
            expect(numCToken.value).to.be.eql("5");
            expect(numDToken.value).to.be.eql("2");
            expect(operAdditionAToken).to.be.an.instanceof(AdditionToken);
            expect(operAdditionBToken).to.be.an.instanceof(AdditionToken);
            expect(bracketToken).to.be.an.instanceof(BracketToken);
            expect(operMultiToken).to.be.an.instanceof(MultiplicationToken);

            expect(operAdditionAToken.parent).to.be.eql(rootToken);
            expect(operMultiToken.parent).to.be.eql(operAdditionAToken);
            expect(numAToken.parent).to.be.eql(operAdditionAToken);

            expect(bracketToken.parent).to.be.eql(operMultiToken);
            expect(numDToken.parent).to.be.eql(operMultiToken);

            expect(operAdditionBToken.parent).to.be.eql(bracketToken);
            expect(numBToken.parent).to.be.eql(operAdditionBToken);
            expect(numCToken.parent).to.be.eql(operAdditionBToken);
        });
    });
});
