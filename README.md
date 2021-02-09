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

## my motivation to write it

User writes input like this

```
"3+k6+2*strength"
```

**and it should be evaluated on backend server and should be secure and safe**

## How to start

```javascript
import EvalExp from "evalexp";
// or
const { EvalExp } = require("evalexp");

const evalExp = new EvalExp("3k6 + 2strength");
evalExp.parse();
evalExp.evaluate({
    k6: () => 3,
    strength: 2
}); //return number 13
```

or if you plan to evaluate expression only once

```javascript
EvalExp.evaluate("3k6+2strength", {
    k6: () => 3,
    strength: 2
}); //return number 13
```

or from function
```javascript
import {evaluate} from "evalexp";
//or
const {evaluate} =  require("evalexp");

evaluate("3k6+2strength", {
    k6: () => 3,
    strength: 2
});
```

## methods
-   **EvalExp.evaluate(expression string, variable declaration)** - evaluate expression and return value   
-   **new EvalExp(<expression string>)** - create instance for expression
-   **instance.parse()** - parse expression
-   **instance.evaluate(variable declaration)** - evaluate expression and return value. Can be invoked multiple times with different variable declarations

## supported grammar

-   minus numbers:

```javascript
EvalExp.evaluate("-5") 
EvalExp.evaluate("-5*3") 
```

-   plus numbers:

```javascript
EvalExp.evaluate("5")
EvalExp.evaluate("+5")
```

-   floating numbers :

```javascript
EvalExp.evaluate("4.345")
```

-   addition:

```javascript
EvalExp.evaluate("5+4")
EvalExp.evaluate("+4+34")
EvalExp.evaluate("56.43+32")
```

-   subtraction:

```javascript
EvalExp.evaluate("34-21")
EvalExp.evaluate("33-44")
```

-   multiplication:

```javascript
EvalExp.evaluate("5*5")
EvalExp.evaluate("-3*8")
```

-   division:

```javascript
EvalExp.evaluate("10/2")
```

-   brackets:

```javascript
EvalExp.evaluate("5*(3+(5-3)/4)")
```

multiplication operator can be ignored

```javascript
EvalExp.evaluate("3(10+45)")
```

-   variables

```javascript
EvalExp.evaluate("3*someVariable")
```

multiplication operator can be ignored

```javascript
EvalExp.evaluate("3someVariable")
```

-   functions without arguments - use like variables (without brackets)

```javascript
EvalExp.evaluate("3*someFunctions")
```

multiplication operator can be ignored

```javascript
EvalExp.evaluate("3someFunctions")
```

- functions with one argument

```javascript
EvalExp.evaluate("3*someFunctions(10)")
```

complex arguments with inner functions are supported

```javascript
EvalExp.evaluate("2+funcA(2*funcB(3+4))");
```

## About variables and functions

This library does not give access to your global variables. In **execute** method all possible variables should be declared. If
not declared variable is used in expression it will throw error.
If you declare function and use it as variable (without bracked) it will be execeuted as zero argument function

variable varA is used in expression and is declated in evaluate function:

```javascript
import EvalExp from "evalexp";

const evalExp = new EvalExp("10 + (varA + 5) * 2");
evalExp.parse();
evalExp.evaluate({
    varA: 3
});
```

varA is declared as function and because of it, it will be executed as function in expression

```javascript
import EvalExp from "evalexp";

const evalExp = new EvalExp("10 + (varA + 5) * 2");
evalExp.parse();
evalExp.evaluate({
    varA() {
        return 5;
    }
});
```

## limitations

-   functions with brackets and arguments (functions with one argument are supported)
