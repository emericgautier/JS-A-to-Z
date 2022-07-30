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
