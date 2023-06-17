alert("EXERCICE N°12")
let max = -Infinity;
let positionMax = 0;

for (let i = 1; i <= 20; i++) {
  const nbr12 = parseInt(prompt(`Entrez le nombre numéro ${i}`));
  if (nbr12 > max) {
    max = nbr12;
    positionMax = i;
  }
}

console.log(`Le plus grand de ces nombres est : ${max}`);
console.log(`C'était le nombre numéro ${positionMax}`);
