import organizeSubExpressions from "./organizeSubExpressions";
import organizeType from "./organizeType";
import tokenizeType from "../tokenization/tokenizeType";

describe("organizeSubExpressions", () => {
  it("numA*(numB+numC)+numD", () => {
    const rootTokenNode = {
      type: organizeType.EXPRESSION,
      value: [
        { value: "3", type: tokenizeType.NUMBER },
        { value: "*", type: tokenizeType.OPERATOR },
        { value: "(", type: tokenizeType.BRACKET_OPEN },
        { value: "5", type: tokenizeType.NUMBER },
        { value: "+", type: tokenizeType.OPERATOR },
        { value: "7", type: tokenizeType.NUMBER },
        { value: ")", type: tokenizeType.BRACKET_CLOSE },
        { value: "+", type: tokenizeType.OPERATOR },
        { value: "10", type: tokenizeType.NUMBER }
      ]
    };

    const result = organizeSubExpressions(rootTokenNode);
    expect(result).to.be.eql({
      type: organizeType.EXPRESSION,
      value: [
        { value: "3", type: tokenizeType.NUMBER },
        { value: "*", type: tokenizeType.OPERATOR },
        {
          type: tokenizeType.EXPRESSION,
          value: [
            { value: "5", type: tokenizeType.NUMBER },
            { value: "+", type: tokenizeType.OPERATOR },
            { value: "7", type: tokenizeType.NUMBER }
          ]
        },
        { value: "+", type: tokenizeType.OPERATOR },
        { value: "10", type: tokenizeType.NUMBER }
      ]
    });
  });
  it("numA*(numB+expression[numE + (numF + numG)])+numD", () => {
    const rootTokenNode = {
      type: organizeType.EXPRESSION,
      value: [
        { value: "3", type: tokenizeType.NUMBER },
        { value: "*", type: tokenizeType.OPERATOR },
        { value: "(", type: tokenizeType.BRACKET_OPEN },
        { value: "5", type: tokenizeType.NUMBER },
        { value: "+", type: tokenizeType.OPERATOR },
        {
          type: tokenizeType.EXPRESSION,
          value: [
            { value: "2", type: tokenizeType.NUMBER },
            { value: "+", type: tokenizeType.OPERATOR },
            { value: "(", type: tokenizeType.BRACKET_OPEN },
            { value: "7", type: tokenizeType.NUMBER },
            { value: "+", type: tokenizeType.OPERATOR },
            { value: "8", type: tokenizeType.NUMBER },
            { value: ")", type: tokenizeType.BRACKET_CLOSE }
          ]
        },
        { value: ")", type: tokenizeType.BRACKET_CLOSE },
        { value: "+", type: tokenizeType.OPERATOR },
        { value: "10", type: tokenizeType.NUMBER }
      ]
    };

    const result = organizeSubExpressions(rootTokenNode);
    expect(result).to.be.eql({
      type: organizeType.EXPRESSION,
      value: [
        { value: "3", type: tokenizeType.NUMBER },
        { value: "*", type: tokenizeType.OPERATOR },
        {
          type: tokenizeType.EXPRESSION,
          value: [
            { value: "5", type: tokenizeType.NUMBER },
            { value: "+", type: tokenizeType.OPERATOR },
            {
              type: tokenizeType.EXPRESSION,
              value: [
                { value: "2", type: tokenizeType.NUMBER },
                { value: "+", type: tokenizeType.OPERATOR },
                {
                  type: tokenizeType.EXPRESSION,
                  value: [
                    { value: "7", type: tokenizeType.NUMBER },
                    { value: "+", type: tokenizeType.OPERATOR },
                    { value: "8", type: tokenizeType.NUMBER }
                  ]
                }
              ]
            }
          ]
        },
        { value: "+", type: tokenizeType.OPERATOR },
        { value: "10", type: tokenizeType.NUMBER }
      ]
    });
  });
  it("numA*(numB+(numC+numE))+numD", () => {
    const rootTokenNode = {
      type: organizeType.EXPRESSION,
      value: [
        { value: "3", type: tokenizeType.NUMBER },
        { value: "*", type: tokenizeType.OPERATOR },
        { value: "(", type: tokenizeType.BRACKET_OPEN },
        { value: "5", type: tokenizeType.NUMBER },
        { value: "+", type: tokenizeType.OPERATOR },
        { value: "(", type: tokenizeType.BRACKET_OPEN },
        { value: "7", type: tokenizeType.NUMBER },
        { value: "+", type: tokenizeType.OPERATOR },
        { value: "8", type: tokenizeType.NUMBER },
        { value: ")", type: tokenizeType.BRACKET_CLOSE },
        { value: ")", type: tokenizeType.BRACKET_CLOSE },
        { value: "+", type: tokenizeType.OPERATOR },
        { value: "10", type: tokenizeType.NUMBER }
      ]
    };
    const result = organizeSubExpressions(rootTokenNode);
    expect(result).to.be.eql({
      type: organizeType.EXPRESSION,
      value: [
        { value: "3", type: tokenizeType.NUMBER },
        { value: "*", type: tokenizeType.OPERATOR },
        {
          type: tokenizeType.EXPRESSION,
          value: [
            { value: "5", type: tokenizeType.NUMBER },
            { value: "+", type: tokenizeType.OPERATOR },
            {
              type: tokenizeType.EXPRESSION,
              value: [
                { value: "7", type: tokenizeType.NUMBER },
                { value: "+", type: tokenizeType.OPERATOR },
                { value: "8", type: tokenizeType.NUMBER }
              ]
            }
          ]
        },
        { value: "+", type: tokenizeType.OPERATOR },
        { value: "10", type: tokenizeType.NUMBER }
      ]
    });
  });
});
