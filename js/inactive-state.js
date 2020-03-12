'use strict';

(function () {
  var map = document.querySelector('.map');
  var mapFiltersForm = map.querySelector('.map__filters');
  var adForm = document.querySelector('.ad-form');


  var inactiveState = function () {
    map.classList.add('map--faded');
    adForm.classList.add('ad-form--disabled');
    window.formControl(adForm, 'disabled');
    window.formControl(mapFiltersForm, 'disabled');
  };


  window.inactiveState = inactiveState;
})();
