import tokenizeType from "../tokenizeType";

class VariableTokenProcessor {
  static isApplicable(character) {
    return /^[a-z]+$/i.test( character );
  }

  constructor() {
    this.data = "";
  }

  isStillApplicable(character) {
    return /^[a-z0-9]+$/i.test( character );
  }

  process(character) {
    this.data = this.data + "" + character;
  }

  getToken() {
    return {
      value: this.data,
      type: tokenizeType.VARIABLE
    };
  }
}
export default VariableTokenProcessor;
