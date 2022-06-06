// tema obigatorie 1

let myArray = [1, 9, 4, 2, 8, 4, 7, 2, 1, 5, 4, 4, 3, 3, 8, 9];


// tema obligatorie 2

myArray.forEach(function(myArray) {
  console.log(myArray);
});


// tema obligatorie 3

let sum = 0;

for (let i = 0; i < myArray.length; i++) {
    sum += myArray[i];
    }
console.log(sum);


// tema obligatorie 4

let numberFour = 0;

for ( let i = 0; i < myArray.length; i++) {
   if (myArray[i] === 4) {
        numberFour ++ }
}

console.log(numberFour);


// tema creativa obligatorie 1

let mySecondArray = myArray.map (newArray);
function newArray(myArray) {
    return myArray - 1;
}

console.log(mySecondArray)


// tema creativa obligatorie 2






// tema creativa obligatorie 3

let sign = prompt ('Choose a number between 0 and 15!');
if (sign.toLowerCase () === mySecondArray) {
alert( '');
}






