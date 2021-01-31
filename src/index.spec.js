import evalexp from "./index";

describe("evalexp", () => {
  describe("when no arguments", () => {
    it("should evaluate to object with value 0", () => {
      expect(evalexp()).to.be.eql({
        value: 0,
        errors: null,
        parsedData: []
      });
    });
  });
  describe("when wrong argument", () => {
    it("should return object with error", () => {
      expect(evalexp(1234)).to.be.eql({
        value: null,
        errors: "Wrong arguments",
        parsedData: null
      });
    });
  });
});
