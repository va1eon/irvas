import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';


document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  modals();
  tabs({
    tabSelector: '.glazing_block',
    headerSelector: '.glazing_slider',
    contentSelector: '.glazing_content',
    activeClass: 'active',
  });

  tabs({
    tabSelector: '.no_click',
    headerSelector: '.decoration_slider',
    contentSelector: '.decoration_content > div > div',
    activeClass: 'after_click',
  });

  forms();
});