import EvalExp from "./index";
import {expect} from "@jest/globals";

describe("When create instance", () => {
  test('should return 0 when no args', () => {
    const evalExp = new EvalExp();
    expect(evalExp instanceof EvalExp).toBeTruthy();
    expect(evalExp.getValue()).toBe(0);
  });
  describe("when wrong argument", () => {
    test("should throw error when number", () => {
      expect(() => {
        const evalExp = new EvalExp(123);
      }).toThrow(TypeError)
    })
  });
});