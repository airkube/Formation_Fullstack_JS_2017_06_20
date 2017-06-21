// 1 - En JS on manipule beaucoup d'objets existants
console.log(typeof Math); // object
console.log(typeof console); // object
console.log(typeof process); // object
console.log(typeof document); // undefined

// 2 - Extensibilité
console.log(typeof Math.sum); // undefined

Math.sum = (a, b) => {
  return Number(a) + Number(b);
};

console.log(typeof Math.sum); // function
delete Math.sum;
console.log(typeof Math.sum); // undefined

// 3 - Deux opérateurs pour accéder aux membres
const method = 'sum';
console['log'](typeof Math[method]); // undefined

// 4 - Besoin ponctuel d'un nouvel objet
// Syntaxe Object Literal

const contact = {
  prenom: 'Romain',
  adresse: {
    ville: 'Paris'
  }
};
contact.nom = 'Bohdanowicz';
console.log(typeof contact); // object

const capitales = {
  France: 'Paris',
  Allemagne: 'Berlin',
  Espagne: 'Madrid',
};

// 5 - Boucler sur les clés

for (let prop in contact) {
  console.log(prop); // clé
  if (contact.hasOwnProperty(prop)) {
    console.log(contact[prop]); // valeur
  }
}

// 6 - Besoin récurrent de nouveaux objet de la
// même forme
// Utiliser une fonction constructeur
const Voiture = function(marque, modele) {
  this._marque = marque;
  this._modele = modele;
};

Voiture.prototype.demarrer = function() {
  return 'Vrrrooooomm ' + this._marque;
};

const clio = new Voiture('Renault', 'Clio');
const p208 = new Voiture('Peugeot', '208');
console.log(typeof Voiture); // function
console.log(typeof clio); // object
console.log(clio._marque); // Renault
console.log(clio.demarrer()); // Clio
console.log(clio.hasOwnProperty('_marque')); // true
console.log(clio.hasOwnProperty('demarrer')); // false
console.log(clio.demarrer === p208.demarrer); // true

