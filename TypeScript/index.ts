//---------
// variables
//---------
let num1 = 24;
let num2:number; // pas encore la donnée
let numOrString: number | string

//---------
// Tableaux
//---------
let arr = ['chien', 'chat', 'poisson']
let tableau: string[] = []
let tableau1: (number | boolean)[] = []

// tableau1.push(false)
// tableau1.push(24)

//---------
// Les objets
//---------

// (?) pas obligé d'être annoncé
interface Player {
    id: number,
    name: string,
    jersey?: number;
}

// instancier un nouveau joueur
const zidane:Player = {
    id: 0,
    name: "Zidane",
  };
  
//-----------
// Les classes
//-----------
class Singer {
    id: number;
    name: string;
    alive?: boolean;

    constructor(id:number, name:string, alive?: boolean) {
        this.id = id;
        this.name = name;
        this.alive = alive
    }
}

const prince = new Singer(0, "Prince")
console.log(prince);

//-------------
// Les fonctions
//-------------

const sayMyName = (name: string) => {
    console.log(`Bonjour ${name}`);
  };
  
  sayMyName("Richie");
  
const ageDuCapitaine = (age: number | string, size?: number):void => {
    if (size) {    
        console.log(`La taille du capitaine est de ${size}cm et il est âgé de ${age} ans`);    
    } else {
        console.log(`Le capitaine est agé de ${age} ans`);   
    }
}

ageDuCapitaine(37, 185)

//-------------
// Enum & Tuple
//-------------

enum Role {ADMIN, PREMIUM, BASIC}

console.log(Role.ADMIN);
console.log(Role.PREMIUM);


interface User {
    name: string;
    attributes: [number | boolean, string];
    role: Role
}

// user1 reprend la logique de l'iterface User
const user1:User = {
    name: "Adam",
    attributes: [42, "author"],
    role: Role.ADMIN,
}

if (user1.role === Role.ADMIN) {
    console.log("Connexion spéciale pour les Admins");
}
