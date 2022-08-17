const obj = {
  // index:value
  pseudo: "From Scratch",
  ville: "Bordeaux",
  admin: false,

  direBonjour: function () {
    console.log("Bonjour je suis " + this.pseudo);
  },
};

// Ajouter des choses dans un objet
obj.age = 24;
obj["admin"] = true;

// Modifier
obj.pseudo = "FS";

// supprimer un paramètre de l'objet
delete obj.ville;
// console.log(obj);

// Vérifier si une propriété existe, renvoi un boolean
// console.log("pseudo" in obj); // true
// console.log("ville" in obj); // false

// Parcourir l'objet pour avoir les valeurs
// via une boucle for pour se lister des choses, se ballader dans l'objet
// soit se mettre de côté que les clés, soit que les valeurs
for (const key in obj) {
  //   console.log(key + " : " + obj[key]);
}

// console.log(obj.direBonjour());

//------ Methode Native (Object du code source de JS)

// Obtenir les clés d'un objet
// Object, MAJ est un objet native js, comme Math.random() - JSON
// Object.keys , on appelle sa methode keys
// pour manipuler des tableaux depuis un objet
const keys = Object.keys(obj);
// console.log(keys);

// Obtenir les valeurs
const values = Object.values(obj);
// console.log(values);

// creé des tableaux pour chacun des éléments
const nestedArray = Object.entries(obj);
// console.log(nestedArray);

const obj2 = {
  taille: "1m80",
  poids: "75kg",
};

// fusionner des objets
// se stocker dans une variable
const fusion = Object.assign({}, obj, obj2);
// console.log(fusion);

// Empecher les modifications sur des paramètres
// const newObj = Object.freeze(obj);
const newObj = Object.seal(obj);
newObj.pseudo = "Test";
newObj.adresse = "42 avenue du code";

// console.log(newObj);

//---------------------
// Contruire des objets
//---------------------

// Fonction constructeur
// objet User, Maj
// getCity est une methode de User
// le this fait référence à l'objet qui a été instancié, ex: user2
function User(pseudo, ville) {
  this.pseudo = pseudo;
  this.ville = ville;

  this.getCity = function () {
    console.log(this.pseudo + " habite à " + this.ville);
  };
}

// on fait référence à la function constructeur, lui passer 2 para
// faire une nouvelle instance de l'objet pour se créer un autre utilisateur
const user1 = new User("From Scratch", "Bordeaux");
const user2 = new User("Denis", "Nantes");

// console.log(user2.getCity());

//------------------------
// Factory functions
// pseudo, càd pseudo:pseudo, l'index pseudo prend le para pseudo
function User3(pseudo, ville) {
  return {
    pseudo,
    ville,
  };
}
const user4 = User3("FS", "nice");
// console.log(user4);

//-----------------
// Class

class Utilisateur {
  constructor(pseudo, ville) {
    this.pseudo = pseudo;
    this.ville = ville;
  }
  sayMyName = function () {
    console.log("Bonjour je suis " + this.pseudo);
  };
}

// en POO ne pas utiliser de function fléché => ne fonctionne pas ici, il pert le contexte de la cope 'undefined'
const user5 = new Utilisateur("Samia", "Lyon");
Utilisateur.prototype.sayCity = function () {
  console.log("J'habite à " + this.ville);
};

// le principe des prototype, que l'on retrouve dans la console
// function déclaré dans le prototype, 30% plus rapide, que celle joué dans la class
Object.assign(Utilisateur.prototype, {
  method1() {
    // Ma méthode
  },
  method2() {
    // Ma méthode
  },
});

// console.log(user5);

//-----------
// L'héritage
//-----------

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  saySomething(text) {
    console.log(this.name + " dit : " + text);
  }
}

class Dog extends Animal {
  run() {
    console.log("Le chien court !");
  }
}

class Cat extends Animal {
  hunt() {
    console.log("j'ai tué un oiseau");
  }
}

const rintintin = new Dog("Rintintin", 9);
console.log(rintintin);
