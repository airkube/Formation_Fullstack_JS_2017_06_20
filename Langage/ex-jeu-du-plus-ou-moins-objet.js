// 1 - Avec la syntaxe Object Literal
// Créer un objet Random (dans l'esprit Math)
// Avec ces 4 fonctions à l'intérieur

// 2 - Faire en sorte que le code suivant fonctionne

const jeu = new Jeu({
  min: 0,
  max: 100,
});

jeu.jouer();

function getRandom() {
  return Math.random();
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const entierAlea = getRandomIntInclusive(0, 100);
const essais = [];

const jouer = function() {
  if (essais.length) {
    console.log('Vous avez déjà joué : ' + essais.join(' - '));
  }

  rl.question('Saisir un entier : ', (answer) => {

    const entierSaisi = parseInt(answer);

    if (isNaN(entierSaisi)) {
      console.log('Erreur : il faut saisir un nombre');
      return jouer();
    }

    essais.push(entierSaisi);

    if (entierSaisi < entierAlea) {
      console.log(entierSaisi + ' est trop petit');
      return jouer();
    }

    if (entierSaisi > entierAlea) {
      console.log(entierSaisi + ' est trop grand');
      return jouer();
    }

    console.log('Gagné');
    rl.close();
  });
};

jouer();
