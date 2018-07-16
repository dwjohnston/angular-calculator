import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ISymbol } from '../symbol';

@Component({
  selector: 'app-calculator-button',
  templateUrl: './calculator-button.component.html',
  styleUrls: ['./calculator-button.component.css']
})
export class CalculatorButtonComponent implements OnInit {

  constructor() { }


  @Input() public value: ISymbol;

  @Output() public output: EventEmitter<ISymbol> = new EventEmitter<ISymbol>();


  onClick() {
    this.output.emit(this.value);
  }

  ngOnInit() {
  }

}
