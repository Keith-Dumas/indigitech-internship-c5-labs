//spetember 3, keith, lab17


var basefare = prompt("Enter the base fare for the ride")
var distance = prompt("Enter the distance traveled in miles")
var rate = prompt("Enter the Rate Per Mile")
var add = prompt("Enter the additional fees")
basefare = Number(basefare)
distance = Number(distance)
rate = Number(rate)
add = Number(add)

var distancefare = distance * rate
var total = basefare + distancefare + add


alert(`Total Fare:$ ${total}`);