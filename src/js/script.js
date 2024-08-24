'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const modal = require('./modules/modal'),
    tabs = require('./modules/tabs'),
    timer = require('./modules/timer'),
    cards = require('./modules/cards'),
    calculator = require('./modules/calculator'),
    forms = require('./modules/forms'),
    sliders = require('./modules/sliders');
  tabs();
  modal();
  timer();
  cards();
  calculator();
  forms();
  sliders();
});
