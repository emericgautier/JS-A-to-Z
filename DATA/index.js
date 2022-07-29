// Rappel des types de données
let string = "chaine";
let number = 25;
let cool = true;
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
// object.adesse = "22 Rue du Code";

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
