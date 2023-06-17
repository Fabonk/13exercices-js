alert("EXERCICE N°5")
// Simuler les valeurs de a, b et c
let a = 2;
let b = 5;
let c = -3;

// Calculer le discriminant
let discriminant = b * b - 4 * a * c;

// Déterminer les racines
if (discriminant > 0) {
  let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
  let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
  console.log("Les racines sont réelles et distinctes : x1 =", x1, ", x2 =", x2);
} else if (discriminant == 0) {
  let x = -b / (2 * a);
  console.log("Les racines sont réelles et confondues : x =", x);
} else {
  console.log("Les racines sont complexes.");
}
