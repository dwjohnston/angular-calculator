# Calculator

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.3.

Demo here: https://dwjohnston.github.io/angular-calculator/

## Run

```
npm start
```

or 

```
ng serve
```

## Tests

```
npm test
```

or 

```
ng test
```

Unit tests on the `CalculatorEngine` only. 


## Model / Core implementation

The core of the implementation is framework agnostic. 

The calculation is done essentially by calling `eval()` on a valid math string. 



### ISymbol 

Represents either a single digit, a .,  or an operation (+,-, *, /). 

#### Fields
- `isOperation` boolean value to denote an operation. This should be replaced with an enum type value as the calculator vocabulary expands to opening parenthesis etc.
- `label` - The label of the symbol - also it's literal value when being evalutated. 


### CalcSymbol 

An enum like constant listing all of the symbols in our calculator, except `=`. 

### CalculatorEngine

A plain javascript class, the does the calculation. 

#### Methods

- `addSymbol(sym: ISymbol)` - Attempt to add a symbol. If it is an operation and there are no preceeding numbers or it follows an existing operation, nothing will happen. 

- `calculate()` - Attempt to calculate the current list of operations. If the operation is invalid (ie. ends with an operation, or has no operations), it will return `undefined`. It will throw an error if encountering any syntax errors (eg `001+1` or `0..1 + 1`). 

- `getOperationList()` - Return an array of ISymbol. 

- `getOperationListAsString()`- Return the operation list as a string. 

## What's a valid number? 

The implementation of what is a syntatically correct string of symbols is not trivial - when you throw the `.` symbol in the mix. Should `.` be considered a number or an operator? Should `1+.1` be valid? 

In this implementation, leading zeros (eg. `001`) and multiple periods will throw an error. There are tests convering these scenarios. 

## Accessibility

Focus shifts to display on calculation, so screen readers can read it. 


