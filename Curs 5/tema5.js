// exercitiul 1

let x = prompt('Choose a number : 4 / x + 5 - x * (34 - x + 10) / 6 + x');

let addition = function (a,b) {
    return (a+b)
};

let substraction = function (a,b) {
    return (a-b)
};

let multiplication = function (a,b) {
    return (a*b)
};

let division = function (a,b) {
    return (a/b)
};


let exercise = function () {
    let fstDivision = division(4, parseInt(x));
    let sndSubstraction = substraction(34, parseInt(x));
    let sndAddition = addition(sndSubstraction, 10);
    let fstMultiplication = multiplication(parseInt(x), sndAddition);
    let sndDivision = division(fstMultiplication, 6);
    let fstAddition = addition(fstDivision, 5);
    let fstSubstraction = substraction (fstAddition, sndDivision);
    let trdAddition =  addition (fstSubstraction, parseInt(x));

    alert ('The result is '  +  trdAddition);
}

exercise();


// exercitiul 2

let string = prompt('Choose a minimum of two digits to check if it is a palindrom');

let checkPalindrome = function() {
    let stringLength = string.length;
    for (let i = 0; i < length / 2; i++) {
        if (string[i] === string [stringLength - 1 - i]) {
        }
        else {
            return alert('It is not a palindrome');
        }
        return alert('It is a palindrome');
    }
}

checkPalindrome();




// let checkPalindrome = function() {
//     const arrValue = string.split ('');
//     const reveArrVal = arrValue.rseverse ();
//     const revString = reveArrVal.join ('');
//     if (string == revString) {
//         alert ('It is a Palindrome string');
//     }
//     else {
//         alert (' It is not a Palindrome string');
//     }
// }

// checkPalindrome();