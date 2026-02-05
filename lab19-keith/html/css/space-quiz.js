/*september 10, keith, lab 19*/


alert("Welcome to the Interactive Space Quiz! Get ready to test your knowledge of the universe.")


let q1 = prompt("Is the Sun a star? (yes/no)");
if (q1.toLowerCase() == "yes") {
  alert("Correct!");
  console.log("That's one small step for a quiz taker, one giant leap for knowledge!");
} /*else {
  alert("Incorrect.");
  console.log("The correct answer is: yes");
}*/
if (q1.toLowerCase() == "no") {
  alert("Incorrect.");
  console.log("The correct answer is: yes");
}
console.log("User answered Q1:", q1);









let q2 = prompt("Which planet is known as the 'Red Planet'? (Mars or Jupiter)");
if (q2.toLowerCase() == "mars") {
  alert("Correct!");
  console.log("correct");
} else {
  alert("Incorrect.");
  console.log("incorrect");
}
console.log("User answered Q2:", q2);





let q3 = prompt("What is the largest planet in our solar system? (Jupiter, Saturn, Uranus, Neptune)");
if (q3.toLowerCase() == "jupiter") {
  alert("Correct!");
} else if (q3.toLowerCase() == "saturn") {
  alert("Incorrect! It's Jupiter!");
} else if (q3.toLowerCase() == "uranus") {
  alert("Incorrect! It's Jupiter!");
} else if (q3.toLowerCase() == "neptune") {
  alert("Incorrect! It's Jupiter!");
} else {
  alert("invalid");
}
console.log("User answered Q3:", q3);




//this is mine before i followed hans example for q4

/*let q4 = Number(prompt("How many planets are in our solar system?"));
if (q4 == 8) {
  alert("Correct!");
} else {
  alert("Incorrect!");
}
console.log("User answered Q4:", q4);*/

let q4 = Number(prompt("How many planets are in our solar system?"));

if (q4 == 8) {
  alert("Correct!");
} else {
  alert("Incorrect!");
}

//mine before hans examples

/*let q5 = prompt("True or False: The Earth is flat.");
if (q5.toLowerCase() == "false") {
  alert("Correct!");
} else {
  alert("Incorrect!");
}
console.log("User answered Q5:", q5);*/

let q5 = prompt("True or False: The Earth is flat.")

if (q5.toLowerCase() =="true") {
console.log("earth is mot flat!");
}else if (q5,toLowerCase()== "false") {
  console.log("Correct!");
}else {
  console.log("please enter true or false");
}
