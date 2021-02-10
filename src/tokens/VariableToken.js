import GroupToken from "./GroupToken";
import addMultiplicationOperator from "./transformModifier/addMultiplicationOperator";
import BracketToken from "./BracketToken";
import ArgumentToken from "./ArgumentToken";

export default class VariableToken extends GroupToken {
    static isApplicable(character) {
        return /^[a-z]$/i.test(character);
    }

    constructor(iterator) {
        super(iterator);
        this.name = iterator.getValue();
        this.isFunction = false;
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    parseArguments() {
        const nextValue = this.getIterator().getNextValue();
        if (nextValue === "(") {
            this.getIterator().moveLeft();
            this.isFunction = true;
            const nextValue = this.getIterator().getNextValue();
            if (nextValue === ")") {
                this.getIterator().moveLeft();
            } else {
                while (true) {
                    this.parseArgument();
                    if (this.getIterator().getValue() !== ",") {
                        break;
                    }
                }
            }
        }
    }

    parseArgument() {
        const argumentToken = new ArgumentToken(this.getIterator());
        this.addChild(argumentToken);
        argumentToken.setRoot(this.getRoot());
        argumentToken.setParent(this);
        argumentToken.parse();
    }

    parseName() {
        while (true) {
            const nextValue = this.getIterator().getNextValue();
            if (/^[a-z0-9]$/i.test(nextValue)) {
                this.getIterator().moveLeft();
                this.setName(this.getName() + "" + nextValue);
            } else {
                break;
            }
        }
    }

    parse() {
        this.parseName();
        this.parseArguments();
        this.parseLeft();
    }

    transform() {
        /*
        const rightOperand = this.getRight();
        if (rightOperand && rightOperand instanceof BracketToken) {
            this.isFunction = true;
            const rightOperandSibling = rightOperand.getRight();
            if(rightOperand.getParent()) {
                rightOperand.getParent().removeChild(rightOperand);
            }
            rightOperand.getParent().removeChild(rightOperand);
            rightOperand.setParent(this);
            rightOperand.setLeft(null);
            rightOperand.setRight(null);
            if(rightOperandSibling) {
                rightOperandSibling.setLeft(this);
            }
            this.addChild(rightOperand);
        }
        */
        addMultiplicationOperator(this);
    }

    evaluate(declarations) {
        const variableName = this.getName();
        if (!declarations || !(variableName in declarations)) {
            throw SyntaxError(`Expected variable is not defined ${variableName}`);
        }
        const variable = declarations[variableName];
        if (typeof variable === "function") {
            if (variable.length !== this.getNumChildren()) {
                throw SyntaxError(
                    `Expected number of arguments ${
                        variable.length
                    } but got ${this.getNumChildren()}`
                );
            }
            const evaluatedArguments = this.getChildren().map(child =>
                child.evaluate(declarations)
            );
            return Number(variable.apply({}, evaluatedArguments));
        }
        if (this.isFunction) {
            throw SyntaxError(`Expected variable but got function ${variableName}`);
        }
        return Number(variable);
    }
}
