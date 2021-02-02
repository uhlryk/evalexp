import organize from "./organize";
import organizeType from "./organizeType";
import tokenizeType from "../tokenization/tokenizeType";
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
  it("numA+((numB + nuumC)*numD+ numE)/numF ", () => {
    // "5+((10+11)*2+3)/9"
    const tokens = [
      { value: "5", type: tokenizeType.NUMBER },
      { value: "+", type: tokenizeType.OPERATOR },
      { value: "(", type: tokenizeType.BRACKET_OPEN },
      { value: "(", type: tokenizeType.BRACKET_OPEN },
      { value: "10", type: tokenizeType.NUMBER },
      { value: "+", type: tokenizeType.OPERATOR },
      { value: "11", type: tokenizeType.NUMBER },
      { value: ")", type: tokenizeType.BRACKET_CLOSE },
      { value: "*", type: tokenizeType.OPERATOR },
      { value: "2", type: tokenizeType.NUMBER },
      { value: "+", type: tokenizeType.OPERATOR },
      { value: "3", type: tokenizeType.NUMBER },
      { value: ")", type: tokenizeType.BRACKET_CLOSE },
      { value: "/", type: tokenizeType.OPERATOR },
      { value: "9", type: tokenizeType.NUMBER }
    ];

    const result = organize(tokens);
    expect(result).to.be.eql({
      type: "expression",
      value: [
        {
          type: "math_expression",
          math: "+",
          value: [
            { value: "5", type: "number" },
            {
              type: "math_expression",
              math: "/",
              value: [
                {
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
                            {
                              type: "expression",
                              value: [
                                {
                                  type: "math_expression",
                                  math: "+",
                                  value: [
                                    { value: "10", type: "number" },
                                    { value: "11", type: "number" }
                                  ]
                                }
                              ]
                            },
                            { value: "2", type: "number" }
                          ]
                        },
                        { value: "3", type: "number" }
                      ]
                    }
                  ]
                },
                { value: "9", type: "number" }
              ]
            }
          ]
        }
      ]
    });
  });
});
