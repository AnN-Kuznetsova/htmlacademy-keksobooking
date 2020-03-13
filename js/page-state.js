'use strict';

(function () {
  var NO_TABULATION = window.formControl.NO_TABULATION;

  var map = document.querySelector('.map');
  var mapFiltersForm = map.querySelector('.map__filters');
  var adForm = document.querySelector('.ad-form');
  var addressInput = adForm.querySelector('#address');


  var inactiveState = function () {
    map.classList.add('map--faded');
    adForm.classList.add('ad-form--disabled');
    window.formControl.state(adForm, 'disabled');
    window.formControl.state(mapFiltersForm, 'disabled');
  };

  var activeState = function () {
    map.classList.remove('map--faded');
    adForm.classList.remove('ad-form--disabled');
    window.formControl.state(adForm, 'enabled');
    window.formControl.state(mapFiltersForm, 'enabled');
    window.formControl.setReadOnly(addressInput);
    window.formControl.setTabindex(addressInput, NO_TABULATION);
  };


  window.pageState = {
    inactive: inactiveState,
    active: activeState
  };
})();
