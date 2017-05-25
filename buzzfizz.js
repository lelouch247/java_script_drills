var foo = [];
var threeFive = "FizzBuzz"
var three = "Fizz"
var five = "Buzz"

for (var i = 1; i <= 100; i++) {
   foo.push(i);
}

foo.forEach(function(i) {
 if(i%15 === 0) {
   console.log(threeFive)
 } else if(i%3 ===0) {
   console.log(three)
 } else if( i%5 === 0) {
   console.log(five)
 } else {
   console.log(i)
 }
});
