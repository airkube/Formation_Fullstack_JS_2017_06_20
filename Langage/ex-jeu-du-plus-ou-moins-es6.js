const readline = require('readline');

// 1 - Utiliser dans Random les Methods Properties
// http://es6-features.org/#MethodProperties
const Random = {
  get() {
    return Math.random();
  },
  getArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  },
  getInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  },
  getIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  }
};

// 2 - Utiliser le mot clé class
// http://es6-features.org/#ClassDefinition
class Jeu {
  constructor(options = {}) {
    // 3 - Utiliser les valeurs par défaut
    // http://es6-features.org/#DefaultParameterValues
    // options = options || {};
    // 4 - Destructurer options avec des valeurs par défaut
    // http://es6-features.org/#ObjectAndArrayMatchingDefaultValues
    const {min = 0, max = 100} = options;
    this._rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    this._entierAlea = Random.getIntInclusive(min, max);
    this._essais = [];
  }

  jouer() {
    if (this._essais.length) {
      // 5 - Utiliser une template string
      // http://es6-features.org/#StringInterpolation
      console.log(`Vous avez déjà joué : ${this._essais.join(' - ')}`);
    }

    this._rl.question('Saisir un entier : ', (answer) => {

      // 6 - Passer par l'objet Number pour parseInt
      // et isNaN
      // http://es6-features.org/#NumberTypeChecking
      const entierSaisi = Number.parseInt(answer);

      if (Number.isNaN(entierSaisi)) {
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
  }
}

const jeu = new Jeu();
jeu.jouer();
