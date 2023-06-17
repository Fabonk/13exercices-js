alert("EXERCICE N°10")
let nbr10 = parseInt(prompt("Entrez un nombre de départ :"));
let somme = 0;

for (let i = 1; i <= nbr10; i++) {
  somme += i;
}

console.log("La somme des entiers jusqu'à " + nbr10 + " est : " + somme);
