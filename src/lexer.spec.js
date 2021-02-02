import lexer from "./lexer";

describe("lexer", () => {
    it("numA", () => {
        expect(lexer("10+10+(5*7)/4")).to.be.eql({});
    });
});