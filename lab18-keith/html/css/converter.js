//september 5, keith, lab 18


let usdAmount = Number(prompt("Enter the USD amount: "));
let currentExchangeRate = 1.38;
let previousExchangeRate = 1.35;
let currentCadAmount = usdAmount * currentExchangeRate;
let previousCadAmount = usdAmount * previousExchangeRate;



let cadComparison = "";
    if (currentCadAmount > previousCadAmount) {
      cadComparison = "higher than yesterday";
    } else if (currentCadAmount < previousCadAmount) {
      cadComparison = "lower than yesterday";
    } else {
      cadComparison = "the same as yesterday";
    }

let rateComparison = "";
    if (currentExchangeRate > previousExchangeRate) {
      rateComparison = "increased";
    } else if (currentExchangeRate < previousExchangeRate) {
      rateComparison = "decreased";
    } else {
      rateComparison = "stayed the same";
    }

let message = "Today's CAD amount: $" + currentCadAmount + ". Yesterdays CAD amount would have been: $" + previousCadAmount + ". Compared to yesterday, the CAD equivalent is " + cadComparison + " The exchange rate has " + rateComparison;
                  
                   
                  


    alert(message);

    console.log("Original USD amount: $" + usdAmount);
    console.log("Todays CAD amount: $" + currentCadAmount);
    console.log("Yesterday's CAD amount: $" + previousCadAmount);
    console.log("CAD equivalent comparison: " + cadComparison);
    console.log("Exchange rate comparison: " + rateComparison);