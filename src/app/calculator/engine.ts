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
            return; 
        }

        let result; 
        try {
            result= eval(this.getOperationsAsString());
         }
        catch (e) {
            throw(e);
        }
        finally {
            this.operationsList = [];
        }
        return result;       
    }

    addSymbol(sym: ISymbol) {


        if (sym.isOperation) {
            if (this.operationsList.length === 0 || this.operationsList[this.operationsList.length - 1].isOperation) {

                if (sym === CalcSymbol.DOT) {
                    this.operationsList.push(CalcSymbol.ZERO); 
                }
                else return; // Do nothing
             }
        }

        this.operationsList.push(sym);
    }
}
