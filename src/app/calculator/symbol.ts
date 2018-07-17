export interface ISymbol {
  label: string;
  isOperation: boolean;
}

export interface ISymbolsSet {
    [key: string]: ISymbol;
}


// Symbol is taken by Javascript
export const CalcSymbol: ISymbolsSet = {


  ONE  :  {
      label: '1',
      isOperation: false
    },
    TWO  :  {
      label: '2',
      isOperation: false
    },
    THREE  :  {
      label: '3',
      isOperation: false
    },
    FOUR  :  {
      label: '4',
      isOperation: false
    },
    FIVE  :  {
      label: '5',
      isOperation: false
    },
    SIX  :  {
      label: '6',
      isOperation: false
    },

    SEVEN  :  {
      label: '7',
      isOperation: false
    },
    EIGHT  :  {
      label: '8',
      isOperation: false
    },

    NINE  :  {
      label: '9',
      isOperation: false
    },

    ZERO  :  {
      label: '0',
      isOperation: false
    },

    DOT  :  {
      label: '.',
      isOperation: false
    },

    PLUS  :  {
      label: '+',
      isOperation: true
    },


    MINUS  :  {
      label: '-',
      isOperation: true
    },


    TIMES  :  {
      label: '*',
      isOperation: true
    },


    DIVIDE  :  {
      label: '/',
      isOperation: true
    }

};
