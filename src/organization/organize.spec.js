import organize from "./organize";
import organizeType from "./organizeType";
import tokenizeType from "../tokenization/tokenizeType";
import organizeBracketExpressions from "./organizeBracketExpressions";
describe("organize", () => {
  it("numA+numD", () => {
    const tokens = [
      { value: "3", type: tokenizeType.NUMBER },
      { value: "+", type: tokenizeType.OPERATOR },
      { value: "5", type: tokenizeType.NUMBER }
    ];
    const result = organize(tokens);
    expect(result).to.be.eql({
      type: organizeType.EXPRESSION,
      value: [
        {
          type: organizeType.MATH_EXPRESSION,
          math: "+",
          value: [
            { value: "3", type: tokenizeType.NUMBER },
            { value: "5", type: tokenizeType.NUMBER }
          ]
        }
      ]
    });
  });
  it("numA*(numB+numC)+numD", () => {
    const tokens = [
      { value: "3", type: tokenizeType.NUMBER },
      { value: "*", type: tokenizeType.OPERATOR },
      { value: "(", type: tokenizeType.BRACKET_OPEN },
      { value: "5", type: tokenizeType.NUMBER },
      { value: "+", type: tokenizeType.OPERATOR },
      { value: "7", type: tokenizeType.NUMBER },
      { value: ")", type: tokenizeType.BRACKET_CLOSE },
      { value: "+", type: tokenizeType.OPERATOR },
      { value: "10", type: tokenizeType.NUMBER }
    ];

    const result = organize(tokens);
    expect(result).to.be.eql({
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
    });
  });
});
