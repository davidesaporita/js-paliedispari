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


/** Functions **/

function checkPalindrome (word) {
    var reversed = '';
    for ( i = word.length-1 ; i>=0 ; i-- ) {
        reversed += word[i];
    }
    // Restituisco true se la parola è palindroma e false se non lo é, testando l'operatore ternario
    return word.toLowerCase() === reversed.toLowerCase() ? true : false;
}