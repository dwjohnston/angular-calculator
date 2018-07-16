import {
  Component,
  OnInit
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

  public onOutput(value) { 
    this.engine.addSymbol(value);
    this.currentString = this.engine.getOperationsAsString(); 
  }

  public onCalculate(value) {

    try {
      this.currentString = this.engine.calculate().toString(); 
    }
    catch (err) {
      this.currentString = "err";
    }
  }

  ngOnInit() {
    this.engine = new CalculatorEngine();
    this.symbols = Object.values(CalcSymbol);
    this.currentString = "0";
  }

}
