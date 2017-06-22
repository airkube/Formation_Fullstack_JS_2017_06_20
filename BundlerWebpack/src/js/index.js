'use strict';

import { Horloge } from './horloge';

const container = document.querySelector('.horloge');
const horloge = new Horloge(container);
horloge.start();
