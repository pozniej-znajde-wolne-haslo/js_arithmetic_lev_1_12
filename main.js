// Multiplikation geht vor und so wird 5 * 10 zuerst durchgeführt.

/* let score = 5 + 5 * 10;
console.log('Ergebnis: ' + score); */

// Du kannst Klammern() hinzufügen, um die Reihenfolge der Prioritäten zu ändern.

/* let score = (5 + 5) * 10;
console.log('Ergebnis: ' + score); */

// Du kannst Werte auf Variablen addieren.
let score = 0;
score = score + 10;
console.log('Ergebnis: ' + score);

// Hiervon gibt es eine verkürzte Version.
score += 10; // score = score + 10
console.log('Ergebnis: ' + score);

// Inkrementierung und Dekrementierungen können wie folgt verwendet werden:
let zahl = 1;
zahl = zahl + 1;
zahl += 1;

// Verwende Inkrement-Operatoren
console.log(zahl); // '3' 
zahl++;
console.log('increment: ' + zahl); // zahl ('3' plus increment 'zahl++' = 3 + 1 = 4)

// Verwende Dekrement-Operatoren

console.log(zahl); // it's '4' now
zahl--;
console.log('dekrement: ' + zahl); // zahl ('4' decremented with 'zahl--' = 4 - 1 = 3)





