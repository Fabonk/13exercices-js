alert("EXERCICE N°2 a")
// Demander un nombre à l'utilisateur
let nombre1 = prompt("Entrez un nombre:");

// Convertir la chaîne de caractères en nombre entier
nombre1 = parseInt(nombre1);

// Afficher les nombres pairs de 0 à nombre
for (let i = 0; i <= nombre1; i += 2) {
  console.log(i);
}

alert("EXERCICE N°2 b")
// Demander un nombre à l'utilisateur
let nombre2 = prompt("Entrez un nombre:");

// Convertir la chaîne de caractères en nombre entier
nombre2 = parseInt(nombre2);

// Afficher les nombres impairs de 0 à nombre
for (let i = 1; i <= nombre2; i += 2) {
  console.log(i);
}