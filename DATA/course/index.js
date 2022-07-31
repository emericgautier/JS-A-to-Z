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
