// Per fornire un output in forma umana, il numero ricavato dovrà contenere un massimo di due decimali che indicheranno i centesimi da pagare per il biglietto.

'use strict';

// Tramite l'utilizzo di un prompt, chiedo all'utente di inserire il numero di chilometri che il passeggero deve percorrere
let passengerDistance = prompt('Inserisci il numero di chilometri da percorrere');

// Allo stesso modo, chiedo quanti anni ha il passeggero;
let passengerAge = prompt('Inserisci l\'età del passeggero');

// Per calcolare il prezzo del biglietto, devo trasformare le stringhe fornite dall'utente in numeri;
passengerDistance = Number(passengerDistance);
passengerAge = Number(passengerAge);

// A questo punto, calcolo il prezzo base del biglietto (0.21€ per km percorso);
let ticketPrice = 0.21 * passengerDistance;

// SE il passeggero è minorenne, applico uno sconto del 20% (prezzo del biglietto / 100 * 80);
// SE il passeggero è over 65, applico invece uno sconto del 40% (prezzo del biglietto / 100 * 60);
if (passengerAge < 18) {
  ticketPrice = ticketPrice / 100 * 80;
} else if (passengerAge >= 65) {
  ticketPrice = ticketPrice / 100 * 60;
}