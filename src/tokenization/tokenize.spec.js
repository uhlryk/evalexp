import tokenize from "./tokenize";
import tokenizeType from "./tokenizeType";

describe("tokenization", () => {
  it("numA", () => {
    expect(tokenize("10")).to.be.eql([
      {
        type: tokenizeType.NUMBER,
        value: "10"
      }
    ]);
  });
  it("-numA", () => {
    expect(tokenize("-10")).to.be.eql([
      {
        type: tokenizeType.OPERATOR,
        value: "-"
      },
      {
        type: tokenizeType.NUMBER,
        value: "10"
      }
    ]);
  });
  it("numA+numB", () => {
    expect(tokenize("10+20")).to.be.eql([
      {
        type: tokenizeType.NUMBER,
        value: "10"
      },
      {
        type: tokenizeType.OPERATOR,
        value: "+"
      },
      {
        type: tokenizeType.NUMBER,
        value: "20"
      }
    ]);
  });
  it(" numA + numB ", () => {
    expect(tokenize(" 10 + 20 ")).to.be.eql([
      {
        type: tokenizeType.NUMBER,
        value: "10"
      },
      {
        type: tokenizeType.OPERATOR,
        value: "+"
      },
      {
        type: tokenizeType.NUMBER,
        value: "20"
      }
    ]);
  });
  it("numA*(numB+numC)", () => {
    expect(tokenize("5*(3+4)")).to.be.eql([
      {
        type: tokenizeType.NUMBER,
        value: "5"
      },
      {
        type: tokenizeType.OPERATOR,
        value: "*"
      },
      {
        type: tokenizeType.BRACKET_OPEN,
        value: "("
      },
      {
        type: tokenizeType.NUMBER,
        value: "3"
      },
      {
        type: tokenizeType.OPERATOR,
        value: "+"
      },
      {
        type: tokenizeType.NUMBER,
        value: "4"
      },
      {
        type: tokenizeType.BRACKET_CLOSE,
        value: ")"
      }
    ]);
  });
  it(" numA * ( numB + numC ) ", () => {
    expect(tokenize(" 5 * ( 3 + 4 ) ")).to.be.eql([
      {
        type: tokenizeType.NUMBER,
        value: "5"
      },
      {
        type: tokenizeType.OPERATOR,
        value: "*"
      },
      {
        type: tokenizeType.BRACKET_OPEN,
        value: "("
      },
      {
        type: tokenizeType.NUMBER,
        value: "3"
      },
      {
        type: tokenizeType.OPERATOR,
        value: "+"
      },
      {
        type: tokenizeType.NUMBER,
        value: "4"
      },
      {
        type: tokenizeType.BRACKET_CLOSE,
        value: ")"
      }
    ]);
  });
  it("variable", () => {
    expect(tokenize("myVar123")).to.be.eql([
      {
        type: tokenizeType.VARIABLE,
        value: "myVar123"
      }
    ]);
  });
  it("10+variable", () => {
    expect(tokenize("10+myVar123")).to.be.eql([
      {
        type: tokenizeType.NUMBER,
        value: "10"
      },
      {
        type: tokenizeType.OPERATOR,
        value: "+"
      },
      {
        type: tokenizeType.VARIABLE,
        value: "myVar123"
      }
    ]);
  });
  it("10+variable+20", () => {
    expect(tokenize("10+myVar123*5")).to.be.eql([
      {
        type: tokenizeType.NUMBER,
        value: "10"
      },
      {
        type: tokenizeType.OPERATOR,
        value: "+"
      },
      {
        type: tokenizeType.VARIABLE,
        value: "myVar123"
      },
      {
        type: tokenizeType.OPERATOR,
        value: "*"
      },
      {
        type: tokenizeType.NUMBER,
        value: "5"
      }
    ]);
  });
});
