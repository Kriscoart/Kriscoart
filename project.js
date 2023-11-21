//1. Deposit some money
//2. Collect bet amount
/*
3. Determine number of lines to bet on
4. Spin the slot machine
5. Check if user won
6. Give user their winnings or take if lost
7. Play again if money available
*/

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    A:2,
    B:4,
    C:6,
    D:8
}  

const SYMBOL_VALUES = {
    A:5,
    B:4,
    C:3,
    D:2
}




function deposit(){
    while (true){
    const depositAmount= prompt("Enter a deposit amount: ")
    const numberDepositAMount = parseFloat(depositAmount)   //take a string and convert it to a floating point value
    if (isNaN(numberDepositAMount) || numberDepositAMount<=0){
        console.log("Invalid deposit amount please try again")
    }
    else{
        return numberDepositAMount
    }
  }
}

function getNumberOfLines(){
        while (true){
            const lines= prompt("Enter a number of lines(1-3): ")
            const numberOfLines = parseFloat(lines)   //take a string and convert it to a floating point value
            if (isNaN(numberOfLines) || numberOfLines<=0 || numberOfLines >3){
                console.log("Invalid number of lines please try again")
            }
            else{
                return numberOfLines
            }   
    
        }
}



function getBet(balance, lines){
    while (true){
        const NumberBet= prompt("Enter bet per line: ")
        const bet = parseFloat(NumberBet)   //take a string and convert it to a floating point value
        if (isNaN(bet) || bet<=0 || bet >balance / lines){
            console.log("Invalid bet, please try again")
        }
        else{
            return bet
        }   

    }
}


function spin(){
    const symbols = [];
    for (const[symbol,count] of Object.entries(SYMBOLS_COUNT)){
        for (let i = 0; i<count;i++){
            symbols.push(symbol)
        }
    }

    const reels = [[],[],[]]
    for (let i=0; i < COLS;i++){
        const reelSymbols= [...symbols]; 
        for (let j =0; j<ROWS;j++){
            const selectedSymbol=  
        }
    }
}




spin()
 
let balance= deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance,numberOfLines);
