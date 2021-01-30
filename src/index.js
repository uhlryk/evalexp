class EvalExp {
  constructor(rawString = "") {

    if(typeof rawString !== "string") {
      throw TypeError("Argument should be string")
    }
    this.rawString = rawString;
    this.value = 0;

  }

  valueOf() {
    return this.getValue();
  }
  getValue () {
    return this.value;
  }
}

export default EvalExp;
