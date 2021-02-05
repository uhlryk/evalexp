# evalexp

Mathematical expression parser and evaluator
It accepts string expression. Then it creates parsed object and and evaluate it.

#### **Library is not using eval()**

It is parsing string, based on it, creates new expression and evaluating it.

-   It don't have access to global variables.
-   It is not creating global variables
-   It is only using operators and grammars defined by this library.
-   Everything else will throw error

Because parsing is complex, library is creating parsing object and when you need to use different variables with same expression it should be evaluated faster

## How to start

```javascript
import EvalExp from "evalexp";

const evalExp = new EvalExp("10 + (varA + 5) * 2");
evalExp.parse();
evalExp.evaluate({
    varA: 3
}); //return number 26
```

## methods

- **new EvalExp(<expression string>)**  - create instance for expression
- **instance.parse()**  - parse expression
- **instance.evaluate(<variable declaration>)**  - evaluate expression and return value. Can be invoked multiple times with different variable declarations


## supported grammar

- minus numbers: -numA
- plus numbers: +numA
- floating numbers 
- addition:  numA + numB
- subtraction: numA - numB
- multiplication: numA * numB
- multiplication of number and variable without operator: numAvarA e.g. 10someVar means 10*someVar
- division: numA / numB
- brackets: numA * ( numB + (numC + numD))
- variables
- functions without arguments - use like variables

## limitations

- functions with brackets and arguments
