import organizeOperatorExpressions from "./organizeOperatorExpressions";
import organizeType from "./organizeType";
import tokenizeType from "../tokenization/tokenizeType";

describe("organizeOperatorExpressions", () => {
  describe("[+-]]", () => {
    it("numA+numB", () => {
      const rootTokenNode = {
        type: organizeType.EXPRESSION,
        value: [
          { value: "3", type: tokenizeType.NUMBER },
          { value: "+", type: tokenizeType.OPERATOR },
          { value: "5", type: tokenizeType.NUMBER }
        ]
      };
      const result = organizeOperatorExpressions(rootTokenNode, ["+", "-"]);
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
    it("numA+numB-numC", () => {
      const rootTokenNode = {
        type: organizeType.EXPRESSION,
        value: [
          { value: "3", type: tokenizeType.NUMBER },
          { value: "+", type: tokenizeType.OPERATOR },
          { value: "5", type: tokenizeType.NUMBER },
          { value: "-", type: tokenizeType.OPERATOR },
          { value: "2", type: tokenizeType.NUMBER }
        ]
      };
      const result = organizeOperatorExpressions(rootTokenNode, ["+", "-"]);
      expect(result).to.be.eql({
        type: organizeType.EXPRESSION,
        value: [
          {
            type: organizeType.MATH_EXPRESSION,
            math: "-",
            value: [
              {
                type: organizeType.MATH_EXPRESSION,
                math: "+",
                value: [
                  { value: "3", type: tokenizeType.NUMBER },
                  { value: "5", type: tokenizeType.NUMBER }
                ]
              },
              { value: "2", type: tokenizeType.NUMBER }
            ]
          }
        ]
      });
    });
  });
  describe("[*/]]", () => {
    it("numA*numB", () => {
      const rootTokenNode = {
        type: organizeType.EXPRESSION,
        value: [
          { value: "3", type: tokenizeType.NUMBER },
          { value: "*", type: tokenizeType.OPERATOR },
          { value: "5", type: tokenizeType.NUMBER }
        ]
      };
      const result = organizeOperatorExpressions(rootTokenNode, ["*", "/"]);
      expect(result).to.be.eql({
        type: organizeType.EXPRESSION,
        value: [
          {
            type: organizeType.MATH_EXPRESSION,
            math: "*",
            value: [
              { value: "3", type: tokenizeType.NUMBER },
              { value: "5", type: tokenizeType.NUMBER }
            ]
          }
        ]
      });
    });
    it("numA+numB*numC", () => {
      const rootTokenNode = {
        type: organizeType.EXPRESSION,
        value: [
          { value: "3", type: tokenizeType.NUMBER },
          { value: "+", type: tokenizeType.OPERATOR },
          { value: "5", type: tokenizeType.NUMBER },
          { value: "*", type: tokenizeType.OPERATOR },
          { value: "2", type: tokenizeType.NUMBER }
        ]
      };
      const result = organizeOperatorExpressions(rootTokenNode, ["*", "/"]);
      expect(result).to.be.eql({
        type: organizeType.EXPRESSION,
        value: [
          { value: "3", type: tokenizeType.NUMBER },
          { value: "+", type: tokenizeType.OPERATOR },
          {
            type: organizeType.MATH_EXPRESSION,
            math: "*",
            value: [
              { value: "5", type: tokenizeType.NUMBER },
              { value: "2", type: tokenizeType.NUMBER }
            ]
          }
        ]
      });
    });
  });
});
