const readline = require('readline');
const Random = require('./random');

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

module.exports = Jeu;