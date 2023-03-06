
//break using for loop
/*
for (let i = 1; i < 20; i++) {
    console.log(i);
    if(i > 10){
        break;
    }
    
}
*/


// break using while loop
/*
var roastGiven = 0;
while(roastGiven < 10){
    console.log('Roast Den, Gift item ansi');
    roastGiven++;
    if (roastGiven > 4) {
        break;
        
    }
}
*/

/*
var items = ['bottle', 'mouse', 'sunglass', 'pen', 'notebook'];

for(var i = 0; i < items.length; i++){
   var item = items[i];
   if (item == 'pen') {
    break;
    
   }
   console.log(item);
}
*/



var numbers = [52, 35, 86, 81, 98, 69, 102];

for(var i = 0; i < numbers.length; i++){
   var number = numbers[i];
   if (number > 100) {
    break;
   }
   console.log(number);
}
