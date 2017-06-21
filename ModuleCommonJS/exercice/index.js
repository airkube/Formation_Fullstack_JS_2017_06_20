// Exercice
// Ecrire le jeu en 3 fichier
// index.js - Démarrage de la partie (const jeu = new Jeu(); et jeu.jouer())
// jeu.js - Exporte la classe Jeu
// random.js - Export un objet avec les 4 méthodes

const readline = require('readline');

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

class Jeu {
    constructor(options = {}) {
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
            console.log(`Vous avez déjà joué : ${this._essais.join(' - ')}`);
        }

        this._rl.question('Saisir un entier : ', (answer) => {

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
