import debug from "debug";
import NumberTokenProcessor from "./processors/NumberTokenProcessor";
import OperatorTokenProcessor from "./processors/OperatorTokenProcessor";
import WhitespaceTokenProcessor from "./processors/WhitespaceTokenProcessor";
import OpenBracketTokenProcessor from "./processors/OpenBracketTokenProcessor";
import CloseBracketTokenProcessor from "./processors/CloseBracketTokenProcessor";
const processors = [
  OpenBracketTokenProcessor,
  CloseBracketTokenProcessor,
  WhitespaceTokenProcessor,
  OperatorTokenProcessor,
  NumberTokenProcessor
];
const log = debug("evalexp:tokenize");
export default function tokenize(stringExpression) {
  const result = [];
  let currentProcessor = null;

  for (let i = 0; i < stringExpression.length; i++) {
    const character = stringExpression[i];
    log("process character ", character);
    log("current Processor ", currentProcessor);
    if (currentProcessor && !currentProcessor.isStillApplicable(character)) {
      log("finalize processor");
      const token = currentProcessor.getToken();
      currentProcessor = null;
      if (token) {
        result.push(token);

        log("new token", token);
      }
    }
    if (!currentProcessor) {
      log("look for new processor");
      const CurrentProcessorConstructor = processors.find(
        processors => processors && processors.isApplicable(character)
      );
      if (CurrentProcessorConstructor) {
        currentProcessor = new CurrentProcessorConstructor();
        log("new processor ", currentProcessor);
      } else {
        log("not found new processor - ignoring - in future throw error");
      }
    }
    if (currentProcessor) {
      log("process");
      currentProcessor.process(character);
    }
  }
  if (currentProcessor) {
    log("finalize tokenizer");
    const token = currentProcessor.getToken();
    if (token) {
      result.push(token);
      log("new token", token);
    }
  }

  return result;
}
