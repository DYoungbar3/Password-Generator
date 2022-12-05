const alphaChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const numChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const symbolChars = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstPasswordEl = document.getElementById('first-password');
let secondPasswordEl = document.getElementById('second-password');

let symbolBox = document.getElementById('symbols');
let numBox = document.getElementById('numbers');

function generate() {
    firstPasswordEl.textContent = newPassword();
    secondPasswordEl.textContent = newPassword();
}

function newPassword() {
    let newest = '';
    for (let i=0; i<15; i++) {
        newest += randomChar();
    }
    return newest;
}

function randomChar() {
    let randomIndex = Math.floor(Math.random()*characters.length) + 1;
    return characters[randomIndex];
}
