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

export default function tokenize(stringExpression) {
  const result = [];
  let currentProcessor = null;

  for (let i = 0; i < stringExpression.length; i++) {
    const character = stringExpression[i];
    console.log("process character ", character);
    console.log("current Processor ", currentProcessor);
    if (currentProcessor && !currentProcessor.isStillApplicable(character)) {
      console.log("finalize processor");
      const token = currentProcessor.getToken();
      currentProcessor = null;
      if (token) {
        result.push(token);

        console.log("new token", token);
      }
    }
    if (!currentProcessor) {
      console.log("look for new processor");
      const CurrentProcessorConstructor = processors.find(
        processors => processors && processors.isApplicable(character)
      );
      if (CurrentProcessorConstructor) {
        currentProcessor = new CurrentProcessorConstructor();
        console.log("new processor ", currentProcessor);
      } else {
        console.log(
          "not found new processor - ignoring - in future throw error"
        );
      }
    }
    if (currentProcessor) {
      console.log("process");
      currentProcessor.process(character);
    }
  }
  if (currentProcessor) {
    console.log("finalize tokenizer");
    const token = currentProcessor.getToken();
    if (token) {
      result.push(token);
      console.log("new token", token);
    }
  }

  return result;
}
