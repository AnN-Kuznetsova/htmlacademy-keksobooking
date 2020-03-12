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

  var activeState = function () {
    map.classList.remove('map--faded');
    adForm.classList.remove('ad-form--disabled');
    window.formControl(adForm, 'enabled');
    window.formControl(mapFiltersForm, 'enabled');
  };


  window.pageState = {
    inactive: inactiveState,
    active: activeState
  };
})();
