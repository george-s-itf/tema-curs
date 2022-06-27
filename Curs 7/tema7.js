

let firstPosition = function () {
    let mySquare = document.querySelector('.square');
    mySquare.style.position = 'fixed';
    mySquare.style.top = '5px';
    mySquare.style.left = '5px';
};

firstPosition();

let mySecondPosition = function () {
    let mySquare = document.querySelector('.square');
    mySquare.style.position = 'fixed';
    mySquare.style.right = '5px';
    mySquare.style.bottom = '5px';
    mySquare.style.removeProperty ('left');
    mySquare.style.removeProperty ('top');
};

let movingSquare = document.querySelector('.square');
movingSquare.addEventListener('click', mySecondPosition);

