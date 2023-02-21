// A questo punto, calcolo il prezzo base del biglietto (0.21€ per km percorso);
// SE il passeggero è minorenne, applico uno sconto del 20% (prezzo del biglietto / 100 * 80);
// SE il passeggero è over 65, applico invece uno sconto del 40% (prezzo del biglietto / 100 * 60);
// Per fornire un output in forma umana, il numero ricavato dovrà contenere un massimo di due decimali che indicheranno i centesimi da pagare per il biglietto.

'use strict';

// Tramite l'utilizzo di un prompt, chiedo all'utente di inserire il numero di chilometri che il passeggero deve percorrere
const passengerDistance = prompt('Inserisci il numero di chilometri da percorrere');

// Allo stesso modo, chiedo quanti anni ha il passeggero;
const passengerAge = prompt('Inserisci l\'età del passeggero');

// Per calcolare il prezzo del biglietto, devo trasformare le stringhe fornite dall'utente in numeri;
const setDistance = Number(passengerDistance);
const setAge = Number(passengerAge);