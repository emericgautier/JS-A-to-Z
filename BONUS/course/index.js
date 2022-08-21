"use strict"; // version JS moins permissive avec plus d'erreur dans la console

// CANVAS
//-------

function draw() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d"); // ma balise je te donne un context

  ctx.fillStyle = "rgb(200, 0, 0)"; // crée un élément à remplir
  ctx.fillRect(50, 50, 50, 150); // donner les dimensions, sur l'axe de x: 50, y: 50, dim: 50x150

  ctx.fillStyle = "rgba(0,100,200,0.5)"; // opacity: 0.5
  ctx.fillRect(100, 30, 100, 50);

  ctx.fillStyle = "rgba(100,100,200, 0.5)";
  ctx.fillRect(10, 25, 100, 100);
  ctx.clearRect(35, 25, 40, 40); // carré dont il ne peut pas avoir de carré à l'intérieur
  ctx.strokeRect(125, 75, 50, 50); // juste des lignes qui se déssine

  ctx.fillStyle = "rgba(200,100,200, 0.8)";
  ctx.beginPath(); // démarrer une forme géométrique
  ctx.moveTo(180, 150); // 180x150
  ctx.lineTo(100, 75); // d'abord faire une ligne de 100x75
  ctx.lineTo(100, 150); // d'abord faire une ligne de 100x150
  ctx.fill();
}

// on se joue cette function quand la page est chargé
window.addEventListener("load", draw);

//------------
// TRY / CATCH
//------------

try {
  // Test un block de code
  myFunction();
} catch (err) {
  // console.log(err);
}

function isValidJSON(txt) {
  try {
    JSON.parse(txt);
    return true;
  } catch {
    return false;
  }
}

// console.log(isValidJSON());

// Finally
try {
  // Test un block de code
  // myFunction();
} catch (err) {
  console.log(err);
} finally {
  // console.log("on est arrivé au bout");
}

// Throw
function isNumber(num) {
  if (isNaN(num)) {
    throw "Not a number !";
  } else {
    console.log("c'est un nombre");
  }
  // PLEIN DE CODE
}

try {
  isNumber("2d");
  // catch attrappe le throw
} catch (err) {
  // console.log("Erreur : " + err); // Not a number
}

//------------
// Strict mode
//------------

voiture = "Toyota"; // index.js:85 Uncaught ReferenceError: voiture is not defined
console.log(voiture);
