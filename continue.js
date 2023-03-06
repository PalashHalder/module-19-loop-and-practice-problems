
var numbers = [52, 35, 86, 81, 98, 69, 102];

for(var i = 0; i < numbers.length; i++){
   var number = numbers[i];
   if (number > 50) {
    continue;
   }
   console.log(number);
}