import evaluate from "./evaluate";
import tokenizeType from "../tokenization/tokenizeType";
import organizeType from "../organization/organizeType";
import organize from "../organization/organize";

describe("evaluate", () => {
    it("numA", () => {
        expect(evaluate({
            type: tokenizeType.NUMBER,
            value: 10
        })).to.be.eql(10);
    });
    it("exp[numA]", () => {
        expect(evaluate({
            type: organizeType.EXPRESSION,
            value: [{
                type: tokenizeType.NUMBER,
                value: 10
            }]
        })).to.be.eql(10);
    });
    it("exp[math[numA+numB]]", () => {
        expect(evaluate({
            type: organizeType.EXPRESSION,
            value: [{
                type: organizeType.MATH_EXPRESSION,
                math: "+",
                value: [
                    {
                        type: tokenizeType.NUMBER,
                        value: 10
                    },
                    {
                        type: tokenizeType.NUMBER,
                        value: 20
                    }
                ]
            }]
        })).to.be.eql(30);
    });
    it("numA*(numB+numC)+numD", () => {
        // 3 * (5 + 7) + 10
        const rootTokenNode = {
            type: "expression",
            value: [
                {
                    type: "math_expression",
                    math: "+",
                    value: [
                        {
                            type: "math_expression",
                            math: "*",
                            value: [
                                { value: "3", type: "number" },
                                {
                                    type: "expression",
                                    value: [
                                        {
                                            type: "math_expression",
                                            math: "+",
                                            value: [
                                                { value: "5", type: "number" },
                                                { value: "7", type: "number" }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        { value: "10", type: "number" }
                    ]
                }
            ]
        };

        const result = evaluate(rootTokenNode);
        expect(result).to.be.eql(46);
    });
});
