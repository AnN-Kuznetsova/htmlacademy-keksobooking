'use strict';

(function () {
  var map = document.querySelector('.map');

  var adverts = window.data();

  window.renderPins(adverts);
  map.classList.remove('map--faded');

})();
