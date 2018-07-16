import { Component, OnInit, Input, ViewChild, ElementRef, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calculator-display',
  templateUrl: './calculator-display.component.html',
  styleUrls: ['./calculator-display.component.css']
})
export class CalculatorDisplayComponent implements OnInit {


  @ViewChild('me') me: ElementRef; 

  constructor() { }

  @Input() opString: string; 
  @Input() focusEmitter: any;

  ngOnInit() {
    this.focusEmitter.subscribe((e : boolean) =>  {
      setTimeout(() => this.me.nativeElement.focus(), 50);
    });
  }

}
