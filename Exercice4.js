alert("EXERCICE N°4")
// Demander une année à l'utilisateur
let annee = prompt("Entrez une année :");

// Vérifier si c'est une année bissextile
if ((annee % 4 == 0 && annee % 100 != 0) || annee % 400 == 0) {
  console.log("Oui c'est une année bissextile");
} else {
  console.log("NON ce n'est pas une année bissextile");
}
