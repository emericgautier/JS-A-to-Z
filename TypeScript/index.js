"use strict";
//---------
// variables
//---------
let num1 = 24;
let num2; // pas encore la donnée
let numOrString;
//---------
// Tableaux
//---------
let arr = ['chien', 'chat', 'poisson'];
let tableau = [];
let tableau1 = [];
// instancier un nouveau joueur
const zidane = {
    id: 0,
    name: "Zidane",
};
//-----------
// Les classes
//-----------
class Singer {
    constructor(id, name, alive) {
        this.id = id;
        this.name = name;
        this.alive = alive;
    }
}
const prince = new Singer(0, "Prince");
console.log(prince);
//-------------
// Les fonctions
//-------------
const sayMyName = (name) => {
    console.log(`Bonjour ${name}`);
};
sayMyName("Richie");
const ageDuCapitaine = (age, size) => {
    if (size) {
        console.log(`La taille du capitaine est de ${size}cm et il est âgé de ${age} ans`);
    }
    else {
        console.log(`Le capitaine est agé de ${age} ans`);
    }
};
ageDuCapitaine(37, 185);
//-------------
// Enum & Tuple
//-------------
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["PREMIUM"] = 1] = "PREMIUM";
    Role[Role["BASIC"] = 2] = "BASIC";
})(Role || (Role = {}));
console.log(Role.ADMIN);
console.log(Role.PREMIUM);
// user1 reprend la logique de l'iterface User
const user1 = {
    name: "Adam",
    attributes: [42, "author"],
    role: Role.ADMIN,
};
if (user1.role === Role.ADMIN) {
    console.log("Connexion spéciale pour les Admins");
}
