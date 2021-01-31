export default function(stringExpression = "") {
  if (typeof stringExpression !== "string") {
    return {
      value: null,
      errors: "Wrong arguments",
      parsedData: null
    };
  }
  const parsedData = [];

  return {
    value: 0,
    errors: null,
    parsedData: []
  };
}
