// Rappel des types de données
let string = "chaine";
let number = 25;
let boolean = true;
let maVariable; // type Undefined
// console.log(typeof boolean);

// Tableaux
let array = ["Bordeaux", "Toulouse", "Nantes"];
// console.log(array[0][3]);

let array2 = ["Bordeaux", 24, true, [1, 2], { name: "Denis", job: "Artist" }];
// console.log(array2[4].job);

// Object
let object = {
  pseudo: "Denis",
  age: 33,
  technos: ["Javascript", "React", "NodeJs"],
  admin: false,
};

// ajouter un élément dans un objet
// object.adresse = "22 Rue du Code";

// mettre à jour une valeur
// object.age = 35;

// console.log(object);

// BDD
let data = [
  {
    pseudo: "Denis",
    age: 33,
    technos: ["Javascript", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Samia",
    age: 24,
    technos: ["CSS", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Nikola",
    age: 42,
    technos: ["Php", "React", "NodeJs"],
    admin: true,
  },
];
// console.log(data[2].technos[1]);

//---------------------------
// Les structures de controle
//---------------------------

if (data[0].age > data[1].age) {
  // console.log(data[0].pseudo + " est plus agé que " + data[1].pseudo);
} else {
  // valeur si faux
}

// sur une seule ligne
// if (data[0].age > data[1].age) console.log("yes!");

// ternaire sur une ligne
// data[0].age > data[1].age ? console.log("yes!") : console.log("is not");

// While
let w = 0;

while (w < 10) {
  w++;
  // console.log("La valeur de w est de " + w);
}

// Do while
let d = 0;

do {
  d++;
  // console.log(d);
} while (d < 5);

// Les boucles for

for (const user of data) {
  // document.body.innerHTML += `<li>${user.pseudo} - ${user.age} ans</li>`;
}

// console.log(data.length);

// on déclare la valeur de i | jusqu'où on boucle | on incrémente i si la condition 2 n'est pas remplie
for (i = 0; i < data.length; i++) {
  // console.log(i);
  // console.log(data[i].technos[0]);
  // document.body.innerHTML += "<h2>" + data[i].technos.join(" / ") + "</h2";
}

// Switch
document.body.addEventListener("click", (e) => {
  console.log(e.target.id);
  switch (e.target.id) {
    case "javascript":
      document.body.style.background = "#EBD31C";
      break;
    case "php":
      document.body.style.background = "#7175AA";
      break;
    case "python":
      document.body.style.background = "#3371A2";
      break;
    default:
      null;
  }
});

//----------------
// Méthodes String
//----------------
let string2 = "Javascript est un langage orienté objet";

// console.log(typeof "42");
// console.log(eval(parseInt("1") + 2));
// console.log(isNaN(string2));

// console.log(string2.length);
// console.log(string2[string2.length - 1]);

// console.log(string2.indexOf("langage")); // 18
// console.log(string2.indexOf("x")); // Retourne -1 s'il ne le connait pas

// let newString = string2.slice(18);
// let newString = string2.slice(5, 20);
// console.log(newString);

// console.log(string2.split(" "));

// console.log(string2.toLocaleLowerCase());
// console.log(string2.toUpperCase());

// console.log(string2.replace("Javascript", "PHP"));
//-----------------
// Méthodes Numbers
//-----------------
let number2 = 42.1234;
let numberString = "42.12 est un chiffre";

// console.log(number2.toFixed(2));
// console.log(parseInt("43"));
// console.log(parseInt(numberString));
// console.log(parseFloat(numberString));

// Math
// console.log(Math.PI); // 3.1415926...
// console.log(Math.round(4.5)); // 5
// console.log(Math.floor(4.9)); // 4
// console.log(Math.ceil(4.1)); // 5
// console.log(Math.pow(2, 7)); // 128 (puissance)
// console.log(Math.sqrt(16)); // 4 (square)

// console.log(Math.floor(Math.random() * 50)); // à retenir
//-----------------
// Méthodes Arrays
//-----------------

// Créer 2 tableaux
let array3 = ["Javascript", "Php", "Python"];
let array4 = ["Ruby", "Solidity"];

// let newArray = array3.concat(array4); // fusionner 2 tableaux
// console.log(newArray);

// let newArray = [...array3, ...array4]; // spread operator (fusionner 2 tableaux)
// console.log(newArray);

// casser le tableau, faire une chaine de caractère, très utilisé
// console.log(array3.join(" / "));

// console.log(array3.slice(1));
// console.log(newArray.slice(3, 5));

// console.log(array3.indexOf("Python"));

// array3.forEach((languages) => console.log(languages)); // énumérer les éléments du tableau un par un

// console.log(array3.every((language) => language == "Php")); // false (php n'est pas trouvé à chaque boucle)
// console.log(array3.some((language) => language == "Php")); // true (php trouvé dans le tableau)

// let shift = array3.shift(); // suprime le 1er élément (Javascript)
// console.log(array3);

// console.log(array3.pop()); // suprime le dernier élément (python)

// const restArray = array3.splice(0, 2, "c++"); // de 0 à 2 tu enlèves ces éléments, et remplace par "c++"
// console.log(array3);

// const restArray = array3.splice(0, 2, ...array4); // de 0 à 2 tu enlèves ces éléments, et fusionne array4
// console.log(array3);

//-------- IMPORTANT ---------//
let arrayNumber = [4, 74, 28, 12, 1];
// console.log(arrayNumber.reduce((x, y) => x + y)); //methode pour additionner des éléments, des tableaux
arrayNumber.push(17); // ajouter des éléments à un tableau (number, string, boolean...)
// console.log(arrayNumber);

// FILTER, SORT, MAP (filtrer, trier, lister(even better than "forEach"))

// console.log(arrayNumber.filter((number) => number > 10)); // appeler 'number' à chaque tour de boucle
// console.log(arrayNumber.sort());
// console.log(arrayNumber.sort((a, b) => a - b)); // ordre croissant, inversement en décroissant b - a
// console.log(arrayNumber.filter((number) => number > 10).sort((a, b) => a - b)); // combine filter & sort

// arrayNumber.map((number) => console.log(number)); // énumérer les number à chaque tour de boucle
// // arrayNumber.map((number) => (document.body.innerHTML += `<li>${number}</li>`)); // barbare
// document.body.innerHTML += arrayNumber
//   .map((number) => `<span>${number}</span>`)
//   .join(" • ");

//-----------------
// Méthodes Objects
//-----------------

// document.body.innerHTML += data
//   // .filter((user) => user.admin === false)
//   .filter((user) => user.pseudo.includes("a"))
//   .sort((a, b) => b.age - a.age)
//   .map(
//     (user) => `
// <div class="user-card">
// <h2>${user.pseudo}</h2>
// <p>Age : ${user.age} ans</p>
// <p>Status : ${user.admin ? "Modérateur" : "Membre"}</p>
// </div>

// `
//   )
//   .join("");

//-----------------
// Les dates
//-----------------

// Date classique
let date = new Date(); //crée un nouvel objet new Date()
// console.log(date);

// Timestamp
let timestamp = Date.parse(date); // transforme une date js en Timestamp // parse est une methode qui appartient à l'objet date
// console.log(timestamp);

// IsoString
// console.log(date.toISOString());
let iso = date.toISOString();

function dateParser(chaine) {
  let newDate = new Date(chaine).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
  return newDate;
}
// console.log(dateParser(date));
// console.log(dateParser(timestamp));
// console.log(dateParser(iso));

//--------------
// Destructuring
//--------------
// permet d'aller plus vite, avoir un code plus propre

let moreData = {
  destVar: ["element 1", "element 2"],
};

// shortcut, accès au tabeau
const { destVar } = moreData; // equivalent const destVar = moreData.destVar;

// console.log(moreData.destVar);
// console.log(destVar);

let array5 = [70, 80, 90];
// isoler les données d'un tableau dans une variable
// console.log(array5[0]);
// console.log(array5[1]);
// console.log(array5[2]);

let [x, y, z] = array5;
// console.log(x);
// console.log(y);
// console.log(z);

// console.log(iso);
// passer chaine à modifier, à la place la date 'iso'
const dateDestructuring = (chaine) => {
  let newDate = chaine.split("T")[0];
  // console.log(newDate.split("-")); // casser la chaine de caractère
  let [y, m, d] = newDate.split("-"); // enlève les tirets
  return [d, m, y].join("/");
  // [y, a, d] = newDate;
  // console.log(newDate); // on a un tableau de 2 élément, le T à disparu, [0] pour garder que l'avant T (isoler les données)
};
// console.log(dateDestructuring(iso)); // appel la fonction, et lui passe la variable

//-------------
// Les Datasets
//-------------

const h3js = document.getElementById("javascript");
// console.log(h3js.dataset.lang);

const h3 = document.querySelectorAll("h3");
// console.log(h3);

// h3.forEach((language) => console.log(language.dataset.lang));

//----------
// Les Regex
//----------

let mail = "from_scratch33@gmail.com";
// console.log(mail.search(/frscceeceom/));

// console.log(mail.replace(/from/, "de"));
// console.log(mail.match(/SCratch/i)); // n'est plus 'case sensitive', true, avec la MAJ
// console.log(mail.match(/[zug]/)); // chercher si la lettre z u g figure dans l'email
// console.log(mail.match(/[12]/));

// Tous les chiffres
// console.log(mail.match(/\d/)); // vérifier si il y a un chiffre

// Matcher toutes les lettres
// console.log(mail.match(/[a-z]/)); // dès qu'il y a une lettre, 'f' true

// console.log(mail.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)); //controler un mail \w veut dire tous les chiffres ou lettres

//separateur de millier
let separator = 265264849;
// console.log(separator.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "));
