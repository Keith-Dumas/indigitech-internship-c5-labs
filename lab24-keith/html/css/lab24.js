//september 26, keith, lab24

//t1
function welcomePirate(name) {
    console.log("Ahoy, " +name+"! welcome aboard the Black Pearl!" );
}

welcomePirate(prompt("Whats your name lad!"))








//t2
//may wanna use return on this one
function calculateTreasure(goldCoins, silverCoins) {
    let totalValue = (goldCoins * 1000) + (silverCoins * 100);
    console.log("The treasure chest holds a total value of " + totalValue + " doubloons!");
}
calculateTreasure(10, 30);
//prompt example
// calculateTreasure(5, 12);
// function calculateTreasure() {
//     let goldCoins = Number(prompt("how many gold coins are in the chest?"));
//     let silverCoins = Number(prompt("how many silver coins are in the chest?"));

//     let totalValue = (goldCoins * 1000) + (silverCoins * 100);

//     alert("the treasure chest holds a total value of " + totalValue + " doubloons!");
// }

// calculateTreasure();

//t3
//return on this one despite it not being used
function checkBattleReadiness(shipStatus){
    if(shipStatus == "ready"){
        console.log("your ship is ready for battle, Captain!")
    }else{
        console.log("your ship is not ready, prepare for battle!")
    }
}
checkBattleReadiness(prompt("is your ship ready for battle?(ready)").toLowerCase())

//t4
//should use this as a retuen too
function countCrewMembers(crewList) {
    let crewCount = crewList.length;
    console.log("there are " + crewCount + " members in the crew!");
}

let crew = ["jack", "bilbo", "goliath", "sherlock", "nato"];
countCrewMembers(crew);

//i think thats good
//everyone still on 4 this is supposed to be a prompt i think
//make it a for loop with an if elee statement, sentinal value will be done, or just use break

// function countCrewMembers() {

    //empty array to store names
//     let crewList = [];

//     while (true) {
//         let name = prompt("enter crew member name (done to finish)");
//         if (name.toLowerCase() == "done") {
//             break;
//         } else if (name != "") {
//             crewList.push(name);
//         } else {
//             console.log("invalid entry, try again.");
//         }
//     }
//     console.log("There are " + crewList.length + " members in the crew!");
//     return crewList.length;
// }

// countCrewMembers();



//t5
//take console log out of function

function sailToIsland( distance) {
    let  days = distance / 30; 
    
    return days;
}

//didn't know this works
//this should work now
let distance = Number(prompt("How many miles away is the island?"));
let days = sailToIsland(distance);
//not sure if let days goes here for the return but it works
console.log("number of days " + days)

//t6
//have to make the days above the same days variable as below
//take console log out of here 

function calculateRations(days, crewCount) {
    let rationsPerCrew = 3;
    let totalRations = days * crewCount * rationsPerCrew;//3 is rations per crew member, had this as *3
    return totalRations;

}

let rations = calculateRations(days, 5); //5 is our crew count as i was to lazy to make it actually work above
console.log("the crew will need " + rations + " rations for " + days + " days");

//finally done this that was a bit exhausting

//watching them struggle when i have it done is amusing


//t7

function displayCoordinates(latitude, longitude) {
    console.log("current coordinates: " + latitude + ", " + longitude);
}

displayCoordinates(29, -83);













