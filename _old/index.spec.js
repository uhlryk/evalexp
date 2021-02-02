import evalexp from "./index";

describe("evalexp", () => {
  it("''", () => {
    expect(evalexp()).to.be.eql(0);
  });
  it("numA+numB ", () => {
    expect(evalexp("5+10")).to.be.eql(15);
  });
  it("numA+((numB + nuumC)*numD+ numE)/numF ", () => {
    expect(evalexp("5+((10+11)*2+3)/9")).to.be.eql(10);
  });

  it("numA+varA", () => {
    expect(function() {
      evalexp("5+someVariable");
    }).to.throw("Variable not initialized");
  });
  it("<varA> numA+varA", () => {
    expect(
      evalexp("5+someVariable", {
        someVariable: 10
      })
    ).to.be.eql(15);
  });
  it("<funcA> numA+funcA", () => {
    expect(
      evalexp("5+someFunc", {
        someFunc: () => 5
      })
    ).to.be.eql(10);
  });
});
