import EvalExp from "./index";

describe("EvalExp", () => {
    it("numA", () => {
        const evalExp = new EvalExp("10");
        evalExp.parse();
        expect(evalExp.evaluate()).to.be.eql(10);
    });
    it("numA + numB", () => {
        const evalExp = new EvalExp("10 + 20");
        evalExp.parse();
        expect(evalExp.evaluate()).to.be.eql(30);
    });

    it("numA + (numB + num C) * numD", () => {
        const evalExp = new EvalExp("10 + (20 + 5) * 2");
        evalExp.parse();
        expect(evalExp.evaluate()).to.be.eql(60);
    });
});