'use strict';

import moment from 'moment';

const delay = 1000;

export class Horloge {
    constructor(container) {
        this._container = container;
    }
    update() {
        this._container.innerText = moment().format('HH:mm:ss');
    }
    start() {
        this.update();
        setInterval(this.update.bind(this), delay);
    }
}