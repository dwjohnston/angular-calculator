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
  //@Input() focusEmmiter: EventEmitter<boolean>;
  @Input() focusEmitter: any;

  ngOnInit() {

    console.log(this.opString);

    console.log(this.focusEmitter, "aa"); 
    this.focusEmitter.subscribe((e : boolean) =>  {

      console.log(e);
      console.log(this.me);
      setTimeout(() => this.me.nativeElement.focus(), 50);
    });
  }

}
