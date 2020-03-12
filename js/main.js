'use strict';

(function () {
  var adverts = window.data();

  var pinMain = document.querySelector('.map__pin--main');


  var onPinMainMousedown = function () {
    window.pageState.active();
    window.renderPins(adverts);
  };

  window.pageState.inactive();

  pinMain.addEventListener('mousedown', onPinMainMousedown);


  // window.renderCard(adverts[0]);
})();
