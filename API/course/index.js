// XMLHttpRequest
// permet de faire des requête
// function joué au onload
function reqListener() {
  //   console.log(this.responseText);
}

// plein de methodes dans XMLHttpRequest() objet // appel de methodes
let req = new XMLHttpRequest();
req.onload = reqListener;
// req.open("get", "data.txt", true);
// req.open("get", "data.json", true);
req.open("get", "https://api.blablagues.net/?rub=blagues", true);

// pour finir la requête // aller chercher des données distantes
req.send();

//--------------------------------
// FETCH (traduction : va chercher)
//--------------------------------

// Theorie
// fetch("mon-url", "objet d'options")
//   .then((response) => {
//     // console.log(response)
//   })
//   .catch((err) => console.log(err)); // loguer l'érreur

// .then((res)) ce qui a été fait avant, je t'applique la methode text, .then((data)) ton résultat de la methode text traité avant montre là moi
fetch("data.txt").then((res) => res.text());
//   .then((data) => console.log(data));

// traiter cette data, appliquer une methode res.json, pour permettre de lire cette donnée, ce que tu as traité en .json je l'appel data
fetch("data.json")
  .then((res) => res.json())
  .then((data) => console.log(data));
