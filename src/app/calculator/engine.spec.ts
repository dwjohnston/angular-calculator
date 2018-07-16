import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorEngine } from './engine';
import {ISymbol, CalcSymbol} from './symbol';

describe('CalculatorEngine', () => {
  let engine: CalculatorEngine;

  beforeEach(() => {
    engine = new CalculatorEngine();
  });

  describe('addSymbol(sym: ISymbol)', () => {
    it('does not add operations to empty list', () => {
        expect(engine.getOperations().length).toBe(0);
        engine.addSymbol(CalcSymbol.PLUS);
        expect(engine.getOperations().length).toBe(0);
    });

    it('will add non-operations to empty list', () => {
        expect(engine.getOperations().length).toBe(0);
        engine.addSymbol(CalcSymbol.ONE);
        expect(engine.getOperations().length).toBe(1);
    });


    it('does not add two operations in a row', () => {
        expect(engine.getOperations().length).toBe(0);
        engine.addSymbol(CalcSymbol.ONE);
        expect(engine.getOperations().length).toBe(1);
        engine.addSymbol(CalcSymbol.PLUS);
        expect(engine.getOperations().length).toBe(2);
        engine.addSymbol(CalcSymbol.PLUS);
        expect(engine.getOperations().length).toBe(2);
    });

    it('keeps the existing operation when a second operation is attempted to be added', () => {
        expect(engine.getOperations().length).toBe(0);
        engine.addSymbol(CalcSymbol.ONE);
        expect(engine.getOperations().length).toBe(1);
        engine.addSymbol(CalcSymbol.PLUS);
        expect(engine.getOperations().length).toBe(2);
        engine.addSymbol(CalcSymbol.MINUS);
        expect(engine.getOperations().length).toBe(2);
        expect(engine.getOperations()[1]).toEqual(CalcSymbol.PLUS);
    });

  });

  describe('calculate()', () => {
    it ('returns nothing, if last symbol is an operation', () => {
        expect(engine.getOperations().length).toBe(0);
        engine.addSymbol(CalcSymbol.ONE);
        expect(engine.getOperations().length).toBe(1);
        engine.addSymbol(CalcSymbol.PLUS);
        expect(engine.calculate()).not.toBeDefined();
    });
    it ("1 +1 = 2", () => {
        engine.addSymbol(CalcSymbol.ONE);
        engine.addSymbol(CalcSymbol.PLUS);
        engine.addSymbol(CalcSymbol.ONE);

        expect(engine.calculate()).toBe(2);

    })

    it ("1 -1 = 0", () => {
        engine.addSymbol(CalcSymbol.ONE);
        engine.addSymbol(CalcSymbol.MINUS);
        engine.addSymbol(CalcSymbol.ONE);

        expect(engine.calculate()).toBe(0);

    })

    it ("1 *0 = 0", () => {
        engine.addSymbol(CalcSymbol.ONE);
        engine.addSymbol(CalcSymbol.TIMES);
        engine.addSymbol(CalcSymbol.ZERO);

        expect(engine.calculate()).toBe(0);

    })

    it ("1 / 0 throws error", () => {
        engine.addSymbol(CalcSymbol.ONE);
        engine.addSymbol(CalcSymbol.DIVIDE);
        engine.addSymbol(CalcSymbol.ZERO);

        expect(engine.calculate()).toThrowError();
    })


    it ("11 +11 = 22", () => {


        engine.addSymbol(CalcSymbol.ONE);
        engine.addSymbol(CalcSymbol.ONE);

        engine.addSymbol(CalcSymbol.PLUS);

        engine.addSymbol(CalcSymbol.ONE);
        engine.addSymbol(CalcSymbol.ONE);

        expect(engine.calculate()).toBe(22);

    })


    it ("11 +11 - 2 = 20", () => {
        engine.addSymbol(CalcSymbol.ONE);
        engine.addSymbol(CalcSymbol.ONE);

        engine.addSymbol(CalcSymbol.PLUS);

        engine.addSymbol(CalcSymbol.ONE);
        engine.addSymbol(CalcSymbol.ONE);

        engine.addSymbol(CalcSymbol.MINUS);
        engine.addSymbol(CalcSymbol.TWO);


        expect(engine.calculate()).toBe(20);

    })

    it("9/2 = 4.5", () => {
        engine.addSymbol(CalcSymbol.NINE);
        engine.addSymbol(CalcSymbol.DIVIDE); 
        engine.addSymbol(CalcSymbol.TWO); 
        expect(engine.calculate()).toBe(4.5);
    });
    
  });


});
