alert("EXERCICE N°13")
let nbr13 = prompt("Entrez un nombre (ou 0 pour terminer la saisie) :");
let max = nbr13;
let position = 1;

while (nbr13 !== "0") {
  nbr13 = prompt("Entrez un nombre (ou 0 pour terminer la saisie) :");
  position++;

  if (nbr13 > max) {
    max = nbr13;
  }
}

console.log(`Le plus grand de ces nombres est : ${max}`);
console.log(`C'était le nombre numéro ${position - 1}`);
