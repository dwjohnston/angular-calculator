# Calculator

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.3.


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

Represents either a single digit, or an operation (+,-, *, /). 


### CalcSymbol 

An enum like constant listing all of the symbols in our calculator, except `=`. 

### CalculatorEngine

A plain javascript class. 

- addSymbol(sym: ISymbol) - Attempt to add a symbol. If it is an operation and there are no preceeding numbers or it follows an existing operation, nothing will happen. 

- calculate() - Attempt to calculate the current list of operations. If the operation is invalid (ie. ends with an operation, or has no operations), it will return `undefined`. 

- getOperationList() - Return an array of ISymbol. 

- getOperationListAsString() - Return the operation list as a string. 


## Accessibility

Focus shifts to display on calculation, so screen readers can read it. 


