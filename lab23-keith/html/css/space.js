//september 23, keith, lab 23



//p1
//index count:0,1,2,3,4,5,6,7,8,9
//length:1,2,3,4,5,6,7,8,9,10
let spaceModules = [1, 0, 1, 1, 0, 0, 1, 0, 1, 1];

let malfunctionCount = 0;//variable is given a value of 0, start with 0 malfunctions

//variable,condition,increment
for (let i = 0; i < spaceModules.length; i++) {
  //[i]==0 checks if they have a value of zero rather than length or index number, and if they do they icrease the count of malfunctions

  if (spaceModules[i] == 0) {
    malfunctionCount++;
  }
}
//prints all our malfunctions
console.log("malfunctioning modules: " + malfunctionCount);




//amal example
let spaceModulesamal1 = [1, 0, 1, 1, 0, 0, 1, 0, 1, 1];
let malfunctionCountAmal1 = 0;
for (let i = 0; i < spaceModulesamal1.length; i++) {
  if (spaceModulesamal1[i] == 0) {
    malfunctionCountAmal1++;
  }
}
console.log("malfunctioning modules: " + malfunctionCountAmal1);

//p1 is correct


//p2
//the language was confusing for this one
let spaceModules2 = [0, 1, 1, 0, 1, 0, 1, 0, 1, 1];

//0 would mean it already found the value, -1 is what needs to be here to show its not found but still has a value?,
let firstIndex = -1;
let lastIndex = -1;


for (let i = 0; i < spaceModules2.length; i++) {
 
  if (spaceModules2[i] == 1) {
     //this if statement checks if it hasn't been found yet
    if (firstIndex == -1) {
      firstIndex = i;  
    }
    lastIndex = i; 
  }
}
console.log("first functional module at index: " + firstIndex);
console.log("last functional module at index: " + lastIndex);

//amal example


let firstIndexAmal2 = -1
let lastIndexAmal2;
let spaceModulesAmal2 = [0, 1, 1, 0, 1, 0, 1, 0, 1, 1];
for (let i = 0; i < spaceModulesAmal2.length; i++){
  if (spaceModulesAmal2[i] == 1) {
    if (firstIndexAmal2 == -1) {
      firstIndexAmal2 = i;  
    }
    lastIndexAmal2 = i; 
  }
}


console.log("first functional module at index: " + firstIndexAmal2);
console.log("last functional module at index: " + lastIndexAmal2);

//got this one right as well, except the last doesn't need to have a value, after the 3 this will all be new to me


//september 24, 
//p3
let dockingBays = [0, 0, 1, 0, 0, 1, 0, 1, 0, 0];

let nearestDock = -1; 

for (let i = 0; i < dockingBays.length; i++) {
    if (dockingBays[i] == 1) {
        nearestDock = i; 

        
        break; 
    }
}

console.log("Nearest docking bay index: " + nearestDock);



//amal example
let dockingBaysAmal3 = [0, 0, 1, 0, 0, 1, 0, 1, 0, 0];
let firstFuncAmal3=-1;
for (let i = 0; i < dockingBaysAmal3.length; i++) {
    if (dockingBaysAmal3[i] == 1) {
      if (firstFuncAmal3==-1){
        firstFuncAmal3 = i; 
      }
    }
}
console.log("first function is "+ firstFuncAmal3)

//mine gets same answer but is different, im gonna go with a maybe on this one, no on this one, shouldn't us ebreak to end my loops if i can. Hans said the break is okay to aaron, but i'd still prefer not to use it.











//p4, amal example, the ones i didn't get to do
let spaceshipSystemAmal4 = [1, 0, 1, 1, 1, 0, 0, 1, 1];
let countFuelAmal4=0;
for(let i=0;i<spaceshipSystemAmal4;spaceshipSystemAmal4++){
  if(spaceshipSystemAmal4[i]){
    countFuelAmal4++
  }
}
console.log("fuel number is " + countFuelAmal4);

//p5, amal example
let modulesAmal5 = [0, 1, 0, 1, 0, 0, 1];
for(let i=0; i<modulesAmal5.length;i++){
  if(modulesAmal5[i]==0){
    modulesAmal5[i]=1;
  }
}

console.log(modulesAmal5);


//p6, i get to do this on my own later


let spaceshipPath = [1, 0, 1, 1, 0, 1, 1, 0, 1, 0];

for (let i = 0; i < spaceshipPath.length; i++) {
    console.log("Module " + i + " status: " + spaceshipPath[i]);
}
//is there a way to print the length as well?





//p7, amal example
let systemStatusAmal7 = [1, 1, 1, 1, 1, 1, 1, 1];
let countAmal7 = 0;
for(let i=0; i < systemStatusAmal7.length; i++){
  if(systemStatusAmal7[i]=0){
    countAmal7++
  }
}
if(countAmal7>0){
  console.log("system malfunction")
}else{
  console.log("systems good")
}





