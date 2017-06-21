const readline = require('readline');

// 1 - Utiliser dans Random les Methods Properties
// http://es6-features.org/#MethodProperties
const Random = {
  get: function () {
    return Math.random();
  },
  getArbitrary: function (min, max) {
    return Math.random() * (max - min) + min;
  },
  getInt: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  },
  getIntInclusive: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  }
};

// 2 - Utiliser le mot clé class
// http://es6-features.org/#ClassDefinition
const Jeu = function(options) {
  // 3 - Utiliser les valeurs par défaut
  // http://es6-features.org/#DefaultParameterValues
  options = options || {};
  // 4 - Destructurer options avec des valeurs par défaut
  // http://es6-features.org/#ObjectAndArrayMatchingDefaultValues
  const min = options.min || 0;
  const max = (options.max !== undefined) ? options.max : 100;
  this._rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  this._entierAlea = Random.getIntInclusive(min, max);
  this._essais = [];
};

Jeu.prototype.jouer = function() {
  if (this._essais.length) {
    // 5 - Utiliser une template string
    // http://es6-features.org/#StringInterpolation
    console.log('Vous avez déjà joué : ' + this._essais.join(' - '));
  }

  this._rl.question('Saisir un entier : ', (answer) => {

    // 6 - Passer par l'objet Number pour parseInt
    // et isNaN
    // http://es6-features.org/#NumberTypeChecking
    const entierSaisi = parseInt(answer);

    if (isNaN(entierSaisi)) {
      console.log('Erreur : il faut saisir un nombre');
      return this.jouer();
    }

    this._essais.push(entierSaisi);

    if (entierSaisi < this._entierAlea) {
      console.log(entierSaisi + ' est trop petit');
      return this.jouer();
    }

    if (entierSaisi > this._entierAlea) {
      console.log(entierSaisi + ' est trop grand');
      return this.jouer();
    }

    console.log('Gagné');
    this._rl.close();
  });
};


const jeu = new Jeu();

jeu.jouer();
