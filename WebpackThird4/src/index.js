'use strict';
import {calc} from './parts/calc.js';
import {form} from './parts/form.js';
import {slider} from './parts/slider.js';
import {tabs} from './parts/tabs.js';
import {timer} from './parts/timer.js';
import {modal} from './parts/modal.js';

window.addEventListener('DOMContentLoaded', function() {
    calc();
    form();
    slider();
    tabs();
    timer();
    modal();
});   