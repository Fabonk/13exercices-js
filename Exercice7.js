alert("EXERCICE N°7")
let nbr7;

do {
  nbr7 = parseInt(prompt("Entrez un nombre compris entre 10 et 20 :"));
  if (nbr7 > 20) {
    console.log("Plus petit !");
  } else if (nbr7 < 10) {
    console.log("Plus grand !");
  }
} while (nbr7 < 10 || nbr7 > 20);

console.log("Le nombre choisi est :", nbr7);
