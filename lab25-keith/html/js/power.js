// october 2, keith, lab25


//task1
//for some reason base and exponent in this code are taken as values by the power(), weird i'll fix that or figure out why
    function power(base, exponent) {
      let result = 1;

      if (exponent == 0) {
        return result = 1;
      }
      for (let i = 0; i < exponent; i++) {
        result *= base;
      }

      return result;
    }

    
    let base = Number(prompt("Enter the base value:"));

    
    let exponent = 1;

    do {
      exponent = Number(prompt("enter the exponent:"));
      if (exponent < 0) {
        alert("exponent cannot be negative");
      }
      //if condition is false loop exits
    } while (exponent < 0);

    let result = power(base, exponent);

    
    alert(base + "^" + exponent + " = " + result);
    
    document.getElementById("output").innerHTML =
      "Result: " + base + "<sup>" + exponent + "</sup> = " + result;







