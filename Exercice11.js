alert("EXERCICE N°11")
let nbr11 = parseInt(prompt("Entrez un nombre de départ :"));
let factorielle = 1;

for (let i = 2; i <= nbr11; i++) {
  factorielle *= i;
}

console.log("La factorielle de " + nbr11 + " est : " + factorielle);
