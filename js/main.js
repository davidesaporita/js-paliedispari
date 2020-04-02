/**
 * Palidroma
 * Chiedere all’utente di inserire una parola
 * Creare una funzione per capire se la parola inserita è palindroma
 * 
 * Pari e Dispari
 * L’utente sceglie pari o dispari e un numero da 1 a 5. 
 * Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
 * Sommiamo i due numeri
 * Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
 * Dichiariamo chi ha vinto.
 * 
 */

var userWord = prompt('Inserisci una ed una sola parola:');

while(!isNaN(userWord)) {
    userWord = prompt('Ho detto inserisci una ed una sola PAROLA:');
} 
if(checkPalindrome(userWord)) {
    console.log('La parola ' + userWord + ' è palindroma. Cogratulazioni!');    
} else {
    console.log('Se pensi che la parola ' + userWord + ' sia palindroma, allora chiamiamo subito il CENTODICIOTTO');    
}

// Pari o dispari 
var choice = '';
var choice = prompt('Scrivi pari, oppure dispari:').toLowerCase();
while(['pari','dispari'].indexOf(choice) === -1) {
    choice = prompt('HO DETTO scrivi "pari", oppure "dispari" (senza virgolette):');
} 
var numUser = prompt('Digita un numero da 1 a 5');
var userChoice = choice % 2 == 0 ? 0 : 1;
var results = play(userChoice, numUser);
console.log('Il Giocatore ha tirato: ' + results[0]);
console.log('Il Computer ha tirato: ' + results[1]);
console.log('La somma è: ' + results[2]);
console.log('Il Giocatore aveva scelto: ' + results[3]);
console.log('Il Computer aveva scelto: ' + results[4]);
console.log('Quindi, fondamentalmente, ' + results[5]);


/* Functions */
function checkPalindrome (word) {
    var reversed = '';
    for ( i = word.length-1 ; i>=0 ; i-- ) {
        reversed += word[i];
    }
    // Restituisco true se la parola è palindroma e false se non lo é, testando l'operatore ternario
    return word.toLowerCase() === reversed.toLowerCase() ? true : false;
}

function play(userChoice, userNum) {
    var cpuNum = Math.ceil(Math.random()*5);
    var cpuChoice = (userChoice === 0) ? 1 : 0;
    var sum = userNum + cpuNum;
    var result = (sum % 2 == userChoice) ? 'ha vinto il Giocatore' : 'ha vinto il Computer';
    return array = [userNum, cpuNum, sum, userChoice, cpuChoice, result];
}