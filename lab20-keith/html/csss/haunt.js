/* lab 20, keith, september 12*/


//p1
let welcome = prompt("Welcome to the haunted mansion game! you will make a series of choices to try and escape the mansion. continue?");

if (welcome.toLowerCase() == "yes"){
    alert("Welcome To The Game.");
}else {
    alert("we didn't want you here anyway");
}


//p2
let pName = prompt("What is your name?");
let cross = prompt("As you enter the dark cold mansion, and walk down its first winding hallway covered in dust you come across two doors, one on the, and one on the right. Which do you walk through?(right or left)");

if (cross.toLowerCase() == "left") {
    alert("you chose left door");
}else if (cross.toLowerCase() == "right"){
    alert("you have chosen right door");
}else{
    alert("enter valid entry");
}



//p3
let room = alert("as you enter the room you find a chest, but to open it you need a key and a code")
let key = prompt("Do you have a key? (yes or no)");
let code = prompt("Do you have the code? (yes or no)");

if (key.toLowerCase() == "yes" && code.toLowerCase() == "yes"){
    alert("You find an old key, and as you hold the key up you notice a door within view");
}else if (key.toLowerCase() == "yes" || code.toLowerCase() == "yes"){
    alert("you try and try but you only have one piece of the puzzle, through your frustration you throw something across the room and notice a door");
}else {
    alert("coming to the reality that you suck at finding things you wallow in despair knowing you can't continue, as you bawl your eyes out you hear a voice coming from a door");
}



//p4
let doorRiddle1 = prompt("as you walk up to the door a voice prompts you with a riddle. I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?");

if (doorRiddle1.toLowerCase() == "echo"){
    alert("you have answered my riddle correctly and you may now leave in safety (you have recieved an old key)");
}else if (prompt("You have answered incorrectly and get one more try   I build up castles and tear down mountains. I make some men blind and help some men to see. What am I?").toLowerCase() == "sand") {
    alert("you have answered my second riddle correctly and you may now leave in safety");
} else {
    alert("Wrong, The door seals shut and you are trapped forever!");
}



//p5 
let escape1 = prompt("As you answer the second riddle a lock on the door appears and a voice booms, Have you answered the riddle correctly?(yes or no)");
let escape2 = prompt("Do you have the old key? (yes or no?)");
if (escape1.toLowerCase() == "yes" && code.toLowerCase() == "yes"){
    alert("You are now allowed to leave.");
}else {
    alert("You are now doomed to remain here.");
}








/*else {
    alert("you have answered incorrectly and get one more try");
    let doorRiddle2 = prompt("I build up castles and tear down mountains. I make some men blind and help some men to see. What am I?");
    if (doorRiddle2.toLowerCase() == "sand") {
    alert("you have answered my second riddle correctly and you may now leave in safety");
}else {
        alert("Wrong, The door seals shut and you are trapped forever!");
    }
}*/



/*else if (prompt("You have answered incorrectly and get one more try   I build up castles and tear down mountains. I make some men blind and help some men to see. What am I?").toLowerCase() == "sand") {
    alert("you have answered my seconf riddle correctly and you may now leave in safety");
} else {
    alert("Wrong, The door seals shut and you are trapped forever!");
}*/