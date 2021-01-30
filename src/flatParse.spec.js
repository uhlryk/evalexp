import flatParse from "./flatParse";
import flatParseType from "./flatParseType";
import {describe, expect} from "@jest/globals";

describe("flatParse", () => {
  test("numA", () => {
    expect(flatParse("10")).toEqual([
      {
        type: flatParseType.NUMBER,
        value: "10"
      }
    ]);
  });
  test("-numA", () => {
    expect(flatParse("-10")).toEqual([
      {
        type: flatParseType.OPERATOR,
        value: "-"
      },
      {
        type: flatParseType.NUMBER,
        value: "10"
      }
    ]);
  });
  test("numA+numB", () => {
    expect(flatParse("10+10")).toEqual([
      {
        type: flatParseType.NUMBER,
        value: "10"
      },
      {
        type: flatParseType.OPERATOR,
        value: "+"
      },
      {
        type: flatParseType.NUMBER,
        value: "20"
      }
    ]);
  });
  test("numA*(numB+numC)", () => {
    expect(flatParse("5*(3+4)")).toEqual([
      {
        type: flatParseType.NUMBER,
        value: "5"
      },
      {
        type: flatParseType.OPERATOR,
        value: "*"
      },
      {
        type: flatParseType.EXPRESSION,
        value: "3+4"
      }
    ]);
  });
});
