alert("EXERCICE N°6")
let nbr6;

do {
  nbr6 = parseInt(prompt("Entrez un nombre compris entre 1 et 3 :"));
} while (nbr6 < 1 || nbr6 > 3);

console.log("Le nombre choisi est :", nbr6);
