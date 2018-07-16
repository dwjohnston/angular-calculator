import { ISymbol, CalcSymbol } from './symbol';

export class CalculatorEngine {


    private operationsList: ISymbol[];

    constructor() {
        this.operationsList = [];
    }


    getOperations(): ISymbol[] {
        return this.operationsList;
    }

    getOperationsAsString(): string {
        return this.operationsList.reduce( (acc: string, v: ISymbol) => {
            acc += v.label;
            return acc;
        }, ''   );
    }

    calculate(): number {

        if (this.operationsList.length === 0 || this.operationsList[this.operationsList.length - 1].isOperation) {
            return;
        }

        if (!this.operationsList.some(v => v.isOperation)){
            console.log("aa");
            return; 
        }

        let result = eval(this.getOperationsAsString());
        this.operationsList = [];
        return result; 
    }

    addSymbol(sym: ISymbol) {


        if (sym.isOperation) {
            if (this.operationsList.length === 0 || this.operationsList[this.operationsList.length - 1].isOperation) {
                return; // Do nothing
             }
        }


        this.operationsList.push(sym);
        console.log(this.operationsList);
    }
}
