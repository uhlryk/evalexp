import EvalExp, {evaluate} from "./index";

describe("EvalExp", () => {
    it("numA", () => {
        const evalExp = new EvalExp("10");
        evalExp.parse();
        expect(evalExp.evaluate()).to.be.eql(10);
    });
    it("numA from function", () => {
        expect(evaluate("10")).to.be.eql(10);
    });
    it("-numA*numB", () => {
        const evalExp = new EvalExp("-5*3");
        evalExp.parse();
        expect(evalExp.evaluate()).to.be.eql(-15);
    });
    it("floatA", () => {
        const evalExp = new EvalExp("10.4");
        evalExp.parse();
        expect(evalExp.evaluate()).to.be.eql(10.4);
    });
    it("numA + numB", () => {
        const evalExp = new EvalExp("10 + 20");
        evalExp.parse();
        expect(evalExp.evaluate()).to.be.eql(30);
    });

    it("+numA", () => {
        const evalExp = new EvalExp("+10");
        evalExp.parse();
        expect(evalExp.evaluate()).to.be.eql(10);
    });

    it("-numA", () => {
        const evalExp = new EvalExp("-10");
        evalExp.parse();
        expect(evalExp.evaluate()).to.be.eql(-10);
    });

    it("numA + (numB + num C) * numD", () => {
        const evalExp = new EvalExp("10 + (20 + 5) * 2");
        evalExp.parse();
        expect(evalExp.evaluate()).to.be.eql(60);
    });

    it("numA + (-num C) * numD", () => {
        const evalExp = new EvalExp("10 + (-10) * 2");
        evalExp.parse();
        expect(evalExp.evaluate()).to.be.eql(-10);
    });

    it("numA + (numBsmall-numCbig) * numD", () => {
        const evalExp = new EvalExp("10 + (5-10) * 2");
        evalExp.parse();
        expect(evalExp.evaluate()).to.be.eql(0);
    });

    it("6 % 2", () => {
        const evalExp = new EvalExp("6 % 2");
        evalExp.parse();
        expect(evalExp.evaluate()).to.be.eql(0);
    });

    it("7 % 2", () => {
        const evalExp = new EvalExp("7 % 2");
        evalExp.parse();
        expect(evalExp.evaluate()).to.be.eql(1);
    });

    it("7 % 2 * 3", () => {
        const evalExp = new EvalExp("7 % 2 * 3");
        evalExp.parse();
        expect(evalExp.evaluate()).to.be.eql(3);
    });

    it("3^2", () => {
        const evalExp = new EvalExp("3^2");
        evalExp.parse();
        expect(evalExp.evaluate()).to.be.eql(9);
    });
    it("3^2*2", () => {
        const evalExp = new EvalExp("3^2*2");
        evalExp.parse();
        expect(evalExp.evaluate()).to.be.eql(18);
    });
    it("3^(2+1)", () => {
        const evalExp = new EvalExp("3^(2+1)");
        evalExp.parse();
        expect(evalExp.evaluate()).to.be.eql(27);
    });
    it("-3^2", () => {
        const evalExp = new EvalExp("-3^2");
        evalExp.parse();
        expect(evalExp.evaluate()).to.be.eql(-9);
    });
    it("(-3)^2", () => {
        const evalExp = new EvalExp("(-3)^2");
        evalExp.parse();
        expect(evalExp.evaluate()).to.be.eql(9);
    });
    it("9^0.5", () => {
        const evalExp = new EvalExp("9^0.5");
        evalExp.parse();
        expect(evalExp.evaluate()).to.be.eql(3);
    });
    it("27^(1/3)", () => {
        const evalExp = new EvalExp("27^(1/3)");
        evalExp.parse();
        expect(evalExp.evaluate()).to.be.eql(3);
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

    describe("when parse method whas not executed", () => {
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
            expect(
                evalExp.evaluate({
                    varA: () => 5
                })
            ).to.eql(30);
        });
    });

    describe("when number and variable are together without multiplication operator", () => {
        it("should evaluate", () => {
            const evalExp = new EvalExp("10varA");
            expect(
                evalExp.evaluate({
                    varA: () => 5
                })
            ).to.eql(50);
        });
    });

    describe("when number and bracket are together without multiplication operator", () => {
        it("should evaluate", () => {
            const evalExp = new EvalExp("10(5+3)");
            expect(
                evalExp.evaluate()
            ).to.eql(80);
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

    it("3k6+2strength", () => {
        const evalExp = new EvalExp("3k6+2strength");
        evalExp.parse();
        expect(
            evalExp.evaluate({
                k6: () => 3,
                strength: 2
            })
        ).to.eql(13);
    });

    it("3k6+2strength from factory", () => {
        expect(
            EvalExp.evaluate("3k6+2strength", {
                k6: () => 3,
                strength: 2
            })
        ).to.eql(13);
    });

    it("function with one number argument should evaluate", () => {
        expect(
            EvalExp.evaluate("2+func(10)", {
                func: (arg) => 3*arg
            })
        ).to.eql(32);
    });

    it("function with one complex number argument should evaluate", () => {
        expect(
            EvalExp.evaluate("2+func(2*(1+3))", {
                func: (arg) => 3*arg
            })
        ).to.eql(26);
    });

    it("function with other function as argument should evaluate", () => {
        expect(
            EvalExp.evaluate("2+funcA(2*funcB(3+4))", {
                funcA: (arg) => 3*arg,
                funcB: (arg) => 2*arg
            })
        ).to.eql(86);
    });

    it("function with one number argument should throw error that wrong number of arguments", () => {
        expect(() =>
            EvalExp.evaluate("2+func(10)", {
                func: (arg1, arg2) => 3*arg2
            })
        ).to.throw("Expected number of arguments 2 but got 1");
    });

    it("brackets without values should throw ", () => {
        expect(() =>
            EvalExp.evaluate("2+()", )
        ).to.throw("Empty brackets are not allowed");
    });

    it("expression with function should throw error because variable was expected", () => {
        expect(() =>
            EvalExp.evaluate("2+varA(12)", {
                varA: 10
            })
        ).to.throw("Expected variable but got function varA");
    });

    it("function with zero number arguments should evaluate", () => {
        expect(
            EvalExp.evaluate("2+func()", {
                func: () => 3
            })
        ).to.eql(5);
    });

    it("function with two number arguments should evaluate", () => {
        expect(
            EvalExp.evaluate("2+func(10, 12)", {
                func: (arg1, arg2) => 3*arg1 + arg2
            })
        ).to.eql(44);
    });

    it("function with two complex function arguments should evaluate", () => {
        expect(
            EvalExp.evaluate("2+func1(10, func2(1,2))", {
                func1: (arg1, arg2) => 3*arg1 + arg2,
                func2: (arg1, arg2) => arg1 + arg2
            })
        ).to.eql(35);
    });
    describe("IF function", () => {
        const IF = (condition, isTrue, isFalse) => condition ? isTrue: isFalse;
        it("IF function is true", () => {
            expect(
                EvalExp.evaluate("IF(1, 2, 3)", {
                    IF
                })
            ).to.eql(2);
        });
        it("IF function is true", () => {
            expect(
                EvalExp.evaluate("IF(0, 2, 3)", {
                    IF
                })
            ).to.eql(3);
        });
    });
    it("Power function should evaluate", () => {
        expect(
            EvalExp.evaluate("POW(2, 2)", {
                POW: (arg1, arg) => Math.pow(arg1, arg)
            })
        ).to.eql(4);
    });

    it("Evaluate array of inputs", () => {
        const someInput = [1, 2, 3, 4, 5, 6, 7];
        const evalExp = new EvalExp("x+1");
        evalExp.parse();
        expect(
            someInput.map(x => evalExp.evaluate({x}))
        ).to.eql([2,3,4,5,6,7,8]);
    });
});
