// tema obigatorie 1

let myArray = [1, 9, 4, 2, 8, 4, 7, 2, 1, 5, 4, 4, 3, 3, 8, 9];


// tema obligatorie 2

myArray.forEach(function(item) {
  console.log(item);
});


// tema obligatorie 3

let sum = 0;

for (let i = 0; i < myArray.length; i++) {
    sum += myArray[i];
}
console.log(sum);


// tema obligatorie 4

let numberFour = 0;

for (let i = 0; i < myArray.length; i++) {
  if (myArray[i] === 4) {
    numberFour ++;
  }
}

console.log('number 4 appears ' + numberFour + ' times');


// tema creativa obligatorie 1

let onItem = function(item) {
  return item - 1;
};

let mySecondArray = myArray.map(onItem);

console.log(mySecondArray)


// tema creativa obligatorie 2

for (let i = 0; i < myArray.length; i++) {
  if (myArray[i-1] === myArray[i]) {
    console.log (myArray[i-1], myArray[i]);
  }
}

// tema creativa obligatorie 3



//tema creativa obligatorie 4

for (let i = 0; i<mySecondArray.length; i++){
    let curentItem = mySecondArray [i];
    if (curentItem <=4) {
        mySecondArray[i] = [curentItem, curentItem + 1, curentItem + 2];
    } else {
      mySecondArray[i] = [curentItem, curentItem - 1, curentItem - 2];
    }
}

console.log(mySecondArray)



