import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-calculator-display',
  templateUrl: './calculator-display.component.html',
  styleUrls: ['./calculator-display.component.css']
})
export class CalculatorDisplayComponent implements OnInit {

  constructor() { }

  @Input() opString: string; 

  ngOnInit() {

  }

}
