import {
  Component,
  OnInit, EventEmitter

} from '@angular/core';

import { ISymbol, CalcSymbol } from './symbol';
import { CalculatorEngine } from './engine';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() {}


  engine: CalculatorEngine; 
  symbols: ISymbol[];
  currentString: string;

  focusEmitter: EventEmitter<boolean>;

  
  public onOutput(value) { 
    this.engine.addSymbol(value);
    this.currentString = this.engine.getOperationsAsString() || this.currentString; 
  
  }

  public onCalculate(value) {

    let result; 
    try {
       result = this.engine.calculate(); 
    } catch (e) {
       result = "err"; 
    }

    if (result !== undefined) {
      this.currentString = result.toString();
      this.focusEmitter.emit(true);
    }

  }

  ngOnInit() {
    this.engine = new CalculatorEngine();
    this.symbols = Object.values(CalcSymbol);
    this.currentString = "0";
    this.focusEmitter = new EventEmitter<boolean>(); 


    console.log(this.focusEmitter);
  }

}
