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
fetch("data.json").then((res) => res.json());
// .then((data) => console.log(data));

const myHeaders = new Headers(); // va me chercher un objet JS
const init = {
  method: "GET", // on demande des données
  headers: myHeaders,
  mode: "cors", // gère les permissions
  cache: "default",
};

// fetch("data.json", init).then((res) => console.log(res));

// les methodes les plus populaire, y en a d'autre...
// CRUD => Create (POST), read (GET), update (PUT), delete (DELETE)

const init2 = {
  method: "POST", // incrémenter des données dans la bdd
  headers: { "Content-Type": "application/json" }, // .json
  body: JSON.stringify({
    // je vais te passer en body pseudo, age
    pseudo: "From Scratch",
    age: 25,
  }),
  mode: "cors",
  Credentials: "same-origin",
};

// quand mon formulaire je le soumet, alors tu me déclenches un POST, de psudo et message
document.querySelector("form").addEventListener("submit", () => {
  fetch("http://localhost:3000/users", init2).then(() =>
    console.log("data envoyée")
  );
});

//-----------------------
// Asynchrone
//-----------------------

// attendre avant d'exécuté le code
setTimeout(() => {
  // console.log("test"); // loggé 2s après l'avoir appelé
}, 2000);

// Promise
// avec la methode then
// fetch("monlien").then((res) => res); // then... ne sera exécuté, après que fetch('monlien') 'aller chercher les choses sur un serveur distant, que lorsqu'on aura un retour, des données, then tu me fais ça, then....

// async/await
async function fetchData() {
  await fetch("monlien"); // attend que le await soit exécuté avant de faire la suite

  executeFunction();
}

// function fléché, la function démarre après le = , car c'est une variable qui stock une function
const fetchData2 = async () => {
  await fetch("monlien");

  executeFunction();
};

//-----------------------
// Le JSON
//-----------------------
// format pour faire transiter des données

// methode .json() => qui s'auto-résout en renvoyant le body de la requête (fetch...) Transforme de façon  à ce que le body de la réponse soit lisible au format, et compréhensible par js. Ensuite on transforme le .json pour être interprété

// comment on convertit en JSON / comment convertit en objet JS
fetch("data.json")
  .then((res) => res.json()) // la plus importante quand on fait des requête à des API
  .then((data) => {
    let settings = JSON.stringify(data); // stringify => convertit en JSON
    // parse transforme json en objet js, difference les index ne sont pas entre ""
    // console.log(JSON.parse(settings));
  });

//-----------------------
// Web API (du navigateur)
//-----------------------

// CLIENT STORAGE
//-----------------------

//-----------------------
// Local Storage
//-----------------------
localStorage.data = "Je stock la data";
// document.body.textContent = localStorage.data;

localStorage.removeItem("data");

const obj = {
  name: "Denis",
  age: 22,
};

// Il faut passer des chaines de caractères // convertir l'objet 'obj' en un objet JSON
// La convertir en objet JSON pour la sauvegarder
localStorage.user = JSON.stringify(obj);

// console.log(JSON.parse(localStorage.user)); // la convertir en objet js quand on veut l'afficher

//-----------------------
// Session Storage
//-----------------------
// sessionStorage.dataSettings = "55px";
// console.log(sessionStorage.dataSettings);
sessionStorage.clear();
