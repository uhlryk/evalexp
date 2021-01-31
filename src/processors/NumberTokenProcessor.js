import tokenizeType from "../tokenizeType";

class NumberTokenProcessor {
  static isApplicable(character) {
    return !isNaN(parseInt(character));
  }

  constructor() {
    this.data = "";
  }

  isStillApplicable(character) {
    return !isNaN(parseInt(character));
  }

  process(character) {
    this.data = this.data + "" + character;
  }

  getToken() {
    return {
      value: this.data,
      type: tokenizeType.NUMBER
    };
  }
}
export default NumberTokenProcessor;
