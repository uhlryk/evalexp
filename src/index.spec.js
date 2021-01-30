import evalexp from "./index";
import {describe, expect} from "@jest/globals";

describe("evalexp", () => {
  describe("when no arguments", () => {
    test("should evaluate to object with value 0", () => {
      expect(evalexp()).toEqual({
        value: 0,
        errors: null,
        parsedData: []
      });
    });
  });
  describe("when wrong argument", () => {
    test("should return object with error", () => {
      expect(evalexp(1234)).toEqual({
        value: null,
        errors: "Wrong arguments",
        parsedData: null
      });
    });
  });
});
