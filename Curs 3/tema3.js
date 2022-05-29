var name = 'Jane Smith ';
var money = ' $' + 12450;
var car = ' Toyota Yaris ';
var newLine = '<br />';
var buy = ' to buy ';
var lot = ' is a lot of money '
var has = ' has '
var bank = ' in her bank account '
var end = '====================================';
var end1 = '====================================';

document.getElementById('paragraph1').innerHTML = 
    name + has + money + bank + '.' +  newLine + money + lot + '.' + newLine + name + ' plans' + buy + ' a ' + car + ' . ' +
    newLine + name + ' will use her ' + money + buy + ' a ' + car + '.' + newLine + money + lot + ' for a' + car + '.';
document.getElementById('end').innerHTML = end;

document.getElementById('paragraph2').innerHTML =
    money + lot + ' . ' + newLine + money + lot + car + ' . ' + newLine + name + ' plans ' + buy + ' a ' + car + ' . ' + 
    newLine + name + ' has ' + money + bank + ' . ' + newLine + name + ' will use her ' + money + buy + car + ' . ';
document.getElementById('end1').innerHTML = end;

document.getElementById('paragraph3').innerHTML=
    name + ' plans ' + buy + ' a ' + car + ' . ' + newLine + money + lot + ' for a ' + car + '.' + 
    newLine + name + 'will use her' + money + buy + 'a' + car + '.' + newLine + name + 'has' + money + bank + '.' + newLine + money + lot + '.'
