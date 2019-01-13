'use strict';
import {calc} from './modules/calc.js';
import {form} from './modules/form.js';
import {slider} from './modules/slider.js';
import {tabs} from './modules/tabs.js';
import {timer} from './modules/timer.js';
import {modal} from './modules/modal.js';

window.addEventListener('DOMContentLoaded', function() {
    calc();
    form();
    slider();
    tabs();
    timer();
    modal();
});   