'use strict';

import { format } from 'date-fns'

const delay = 1000;

export class Horloge {
    constructor(container) {
        this._container = container;
    }
    update() {
        this._container.innerText = format(new Date(), 'HH:mm:ss');
    }
    start() {
        this.update();
        setInterval(this.update.bind(this), delay);
    }
}
