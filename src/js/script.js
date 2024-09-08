'use strict';
import modal from './modules/modal';
import tabs from './modules/tabs';
import timer from './modules/timer';
import cards from './modules/cards';
import calculator from './modules/calculator';
import forms from './modules/forms';
import sliders from './modules/sliders';
import { openModal } from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
  const modalTimerId = setTimeout(
    () => openModal('.modal', modalTimerId),
    50000
  );
  tabs(
    '.tabheader__item',
    '.tabcontent',
    '.tabheader__items',
    'tabheader__item_active'
  );
  modal('[data-modal]', '.modal', modalTimerId);
  timer('.timer', '2024-12-31');
  cards();
  calculator();
  forms('form', modalTimerId);
  sliders({
    container: '.offer__slider',
    nextArrow: '.offer__slider-next',
    prevArrow: '.offer__slider-prev',
    slide: '.offer__slide',
    totalCounter: '#total',
    currentnCounter: '#current',
    wrapper: '.offer__slider-wrapper',
    field: '.offer__slider-inner',
  });
});
