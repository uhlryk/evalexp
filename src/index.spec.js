import evalexp from "./index";

describe("evalexp", () => {
  it("''", () => {
    expect(evalexp()).to.be.eql(0);
  });
  it("numA+numB ", () => {
    expect(evalexp("5+10")).to.be.eql(15);
  });
});
