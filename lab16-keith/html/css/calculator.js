//september 2, keith, lab 16
    var billAmount = prompt("Enter the Bill Amount:");
    var tipPercentage = prompt("Enter the Tip Percentage:");


    billAmount = Number(billAmount);
    tipPercentage = Number(tipPercentage);


    var tipAmount = (billAmount * tipPercentage) / 100;
    var totalAmount = billAmount + tipAmount;

    var message = "Bill Amount: $" + billAmount +
    "\nTip (" + tipPercentage + "%): $" + tipAmount +
    "\nTotal Amount: $" + totalAmount;


    alert(message);