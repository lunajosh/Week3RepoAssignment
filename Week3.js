var ages = [3, 9, 23, 64, 2, 8, 28, 93, 40];
console.log(3-93);



function calculateAverage(ages) {
    var total = 0;
    var count = 0;

    ages.forEach(function(item, index) {
        total += item;
        count++;
    });
    return total / count;

}
console.log(calculateAverage(ages));

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
let lengths = names.map(function(element){
  
})

// next question

var newNames = ["Kelly", "Sam", "Kate"];
var namesLength = newNames.length;
for (var i = 0; i < namesLength; i++) {
    console.log(names[i]);
    //Do something
}