//september 19, keith, lab22


//mini 1
//first one
// let age;//age becomes a variable
// do {
//     age = Number(prompt("How old are you?"))//age is assigned a value of whatever the user enters

//     if(isNaN(age) || age <= 0){
//         alert("invalid, enter a valid entry/number greater than 0")
//     }
// }while(isNaN(age) || age <=0)//sentinal value, makes it restart the loop if its not a valid number
// alert("You are " + age + " years old!");
// console.log("You are " + age + " years old!");





//amal example

//sentinel value is age any num > 0
let age = prompt("please enter your age")//makes age a variable and has you assign the value using a prompt
while(age<=0 || age >100 || isNaN(age)){//enter an invalid entry above and it activates this loop, criteria is the brackets after the while().
    age=prompt("Please enter your age")
}
console.log("Your age is: " + age)//combines a string and the age variable witha value assigned to it.



// mini 2
//     //my first one
// let food;//declares food a variable for later
// let summary = "";//declares summary a variable with a string value
//     do {
//       food = prompt("what food would you like?(no to exit)");


//       if (food == "") {
//         alert("enter a valid food item");


            
//       }else if (food != "no" && isNaN(food)){
//         console.log("food item added: " + food);
//         summary += food + "  ";//uses strings and loops to store food items and make a summary
//       }

      
//     } while ( food != "no");//sentinal value, restarts loop if entry is invalid

//     console.log(food);
//     console.log("no more food, list done");
    
//     console.log("summary of food items: " + summary);




    //amal example
    //declaring variables
let favFood;
let userEntry="yes";
let summary=' ';
while(userEntry=="yes"){//when user says yes to more food on line 65 it starts line 59 again.
    let favFood=prompt("what is your fav food? ");
    while( !isNaN(favFood)){//return true if fav food is number
        favFood=prompt("please enter a valid food. What is yout fav food?");
    }
    summary=summary+favFood+ "\n";
    userEntry=prompt("do you want another food?");
}
console.log("the summary is: \n" + summary)





//mini 3
//hope i did this right
//my first loop
let num = Number(prompt("Enter a number:"));//declares num a variable and has a value of whatever the user enters
if (!isNaN(num) && num > 0) {//uses if to store the criteria for the loop to activate
    for(let num1 = 1; num1 <= num; num1++){//for loop with equation to count up to the number
        console.log(num1);//console logs the whole process using the for loop
}
}

//amal example
//actually no need i did this one right







//mini4
//choose 50 as our number, use if else with the "<" ">" to say if its lower or greater and have it loop again, sentinal value(50) will be in the while at the end of the code. has to be a do loop
let Snum;//declares a variable for later use
do {
    Snum = Number(prompt("guess the secret number"))//assigns Snum a variable and assigns a value of whatever the user enters 
    sec=50;

    //using if and else to create a loop that keeps asking until provided a proper number
    if (Snum < sec) {
        alert("Your guess is too low");
    } else if (Snum > sec) {
        alert("Your guess is too high");
    } else if (isNaN(Snum)) {
        alert("Invalid entry, Please enter a number.");
    }
    
}while(Snum != sec)//sentinal value/variable we need to exit the loop or restart it
alert("correct, the number was " + sec);
console.log("correct, the number was " + sec);



//mini 5
//we did this before
//this ones good to im pretty sure
let Mnum = Number(prompt("enter a number for the multiplication table: "));//Mnum becomes a variable and is assigned a value of whatever the user enters

//if its a number it starts
if (!isNaN(Mnum)) {
    //the equation in a for loop that logs each time it loops
    for (let m = 1; m<=10; m++){
        console.log(Mnum + " x " + m + " = " + (Mnum * m));
    }
}else {
    alert("invalid")
}//stops the loop if a valid entry isnt entered








//amal is showing examples i write thoughts here
//mini 1, alright already messed up on mini 1 thought we were meant to do a do loop, thought this time i should try and do it less simple than i usually do. Well it works i think we keep as is.
//mini 2, should of read this one more closely thought it was more similar to yesterdays, will fix in pd and experiment. Will have to watch recording, it works but doesn't ask for fav food and if you want another food, only one prompt.
//mini 3, mines good for this one, wanted to include other things i learned in the code
//mini 4, i kept this one more simple, oop mines already a lil different, was testing sentinal loop out for this one, since the count was known maybe i should of done counted? I thought it was sentinal as it was a guessing one and the answer was hidden from user.
//mini 5, already different i messed up i suppose, i mean it works but its not like amals, close enough i suppose.







