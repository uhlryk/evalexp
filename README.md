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

- minus numbers:
```
-5
-5*3
```
- plus numbers:
```
5
+5
```
- floating numbers :
```
4.345
```
- addition:  
```
5+4
+4+34
56.43+32
```
- subtraction:
```
34-21
33-44
```
- multiplication:
```
5*5
-3*8
```
- division: 
```
10/2
```
- brackets:
```
5*(3+(5-3)/4)
```
multiplication operator can be ignored
```
3(10+45)
```
- variables 
```
3*someVariable
```
multiplication operator can be ignored
```
3someVariable
```


- functions without arguments - use like variables (without brackets)

```
3*someFunctions
```
multiplication operator can be ignored
```
3someFunctions
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

- functions with brackets and arguments
