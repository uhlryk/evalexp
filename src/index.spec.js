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

    describe("when variable not defined in expression numA + (varA + num C) * numD", () => {
        it("should throw error", () => {
            const evalExp = new EvalExp("10 + (varA + 5) * 2");
            evalExp.parse();
            expect(() => evalExp.evaluate()).to.throw(
                "Expected variable is not defined varA"
            );
        });
    });

    describe("when variable is defined in expression numA + (varA + num C) * numD", () => {
        it("should evaluate", () => {
            const evalExp = new EvalExp("10 + (varA + 5) * 2");
            evalExp.parse();
            expect(
                evalExp.evaluate({
                    varA: 3
                })
            ).to.eql(26);
        });
    });

    describe("when variable is defined and is no arg func in expression numA + (varA + num C) * numD", () => {
        it("should evaluate", () => {
            const evalExp = new EvalExp("10 + (varA + 5) * 2");
            evalExp.parse();
            expect(
                evalExp.evaluate({
                    varA: () => 5
                })
            ).to.eql(30);
        });
    });
});
