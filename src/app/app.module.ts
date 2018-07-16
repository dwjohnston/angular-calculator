import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalculatorButtonComponent } from './calculator/calculator-button/calculator-button.component';
import { CalculatorDisplayComponent } from './calculator/calculator-display/calculator-display.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    CalculatorButtonComponent,
    CalculatorDisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
