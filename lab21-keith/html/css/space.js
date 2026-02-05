//september 15, Keith, Lab 21

//comp:the program needs to repeat the numbers so we use an algorithm to simplify it 

//s2
//close enough
//okay i may have done sum different mine is very different froms hans
//sapceCount is atleast the same, mines just not as special

for (let spaceCount = 10; spaceCount >= 0; spaceCount--) {
      console.log("T-minus " + spaceCount + " seconds");

    if (spaceCount % 3 == 0 ) {
    let missionReady = prompt("Is mission control ready? (yes/no)");

    if (missionReady.toLowerCase() == "no") {
        console.log("Countdown paused. Waiting for mission control");
        alert("Countdown paused.");
         spaceCount++;
        }
      }

      if (spaceCount == 0) {
        alert("We have Lift-Off");
        console.log("We have Lift-Off");
      }
    }

    
    

//s3
//just made it so it repeats each time when you say no and doesn't continue(it broke and then i shared my screen, now its fixed)
//have to put this in the for loop somehow
//keeps looping until you say anything other than no

//first s3
/*let missionReady = prompt("Is mission control ready? (yes/no)");

while (missionReady.toLowerCase() == "no") {

    console.log("Mission control is not ready.");
    missionReady = prompt("Is mission control ready? (yes/no)");
}
console.log("Mission control is ready.");

for  (let spaceCount = 10; spaceCount >= 0; spaceCount--) {
  console.log("T-minus " + spaceCount + " seconds");

  if (spaceCount == 0) {
    alert("We have Lift-Off");
    console.log("We have Lift-Off");
    }
}*/
//second s3
for (let spaceCount = 10; spaceCount >= 0; spaceCount--) {
    

  if (spaceCount % 3 == 0) {
    let missionReady = prompt("Is mission control ready? (yes/no)");

    while (missionReady.toLowerCase() === "no") {
      console.log("Mission control is not ready.");
      missionReady = prompt("Is mission control ready? (yes/no)");
    }

    console.log("Mission control is ready.");
  }

  console.log("T-minus " + spaceCount + " seconds");

  if (spaceCount == 0) {
    alert("We have Lift-Off!");
    console.log("We have Lift-Off!");
  }
}





//s4
for (let spaceCount = 10; spaceCount >= 0; spaceCount--) {
  console.log("T-minus " + spaceCount + " seconds");

    if ( spaceCount % 2 == 0 && spaceCount != 0) {
    let stop = prompt("Do you want to stop the countdown? (yes/no)");

    if (stop.toLowerCase() == "yes") {
      console.log("Launch aborted");
      alert("Launch aborted");
      spaceCount = 0;
      //didn't know i could do that, thanks hans
    }
  }
}
