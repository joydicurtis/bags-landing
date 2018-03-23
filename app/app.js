// God save the Dev

'use strict';

if (process.env.NODE_ENV !== 'production') {
  require('./assets/templates/layouts/index.html');
}

// Depends
var $ = require('jquery');
require('bootstrap');

// Modules
var Forms = require('_modules/forms');
var Slider = require('_modules/slider');
var Popup = require('_modules/popup');
var Fancy_select = require('_modules/fancyselect');
var Jscrollpane = require('_modules/jscrollpane');
// var LightGallery = require('_modules/lightgallery');
var Jslider = require('_modules/jslider');
var Fancybox = require('_modules/fancybox');
var Chosen = require('_modules/chosen');

// счетчики
require('../node_modules/odometer/odometer.js');

// обрезание текста
require('./modules/succinct/succinct.js');

// Stylesheet entrypoint
require('_stylesheets/app.scss');

// Are you ready?
$(function() {
  new Forms();
  new Popup();
  new Fancy_select();
  new Jscrollpane();
  // new LightGallery();
  new Slider();
  new Jslider();
  new Fancybox();
  new Chosen();
  $(document).ready(function() {
    $('.js-callback-popup').magnificPopup({
      type: 'inline',
      preloader: false,
      focus: '#name',
      callbacks: {
        beforeOpen: function() {
          if ($(window).width() < 700) {
            this.st.focus = false;
          }
          else  {
            this.st.focus = '#name';
          }
        }
      }
    });
    $('.js-catalogue-popup').magnificPopup({
      type: 'inline',
      preloader: false,
      focus: '#name',
      callbacks: {
        beforeOpen: function() {
          if ($(window).width() < 700) {
            this.st.focus = false;
          }
          else  {
            this.st.focus = '#name';
          }
        }
      }
    });
    $('.js-buybag-popup').magnificPopup({
      type: 'inline',
      preloader: false,
      focus: '#name',
      callbacks: {
        beforeOpen: function() {
          if ($(window).width() < 700) {
            this.st.focus = false;
          }
          else  {
            this.st.focus = '#name';
          }
        }
      }
    });
  });
});

