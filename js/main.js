'use strict';

(function () {
  var adverts = window.data();

  var pinMain = document.querySelector('.map__pin--main');


  var activatePage = function () {
    window.pageState.active();
    window.renderPins(adverts);
  };

  var onPinMainMousedown = function (evt) {
    window.util.isLeftButtonMouseClick(evt, function () {
      activatePage();
    });
  };

  var onPinMainKeydown = function (evt) {
    window.util.isEnterEvent(evt, function () {
      activatePage();
    });
  };

  window.pageState.inactive();

  pinMain.addEventListener('mousedown', onPinMainMousedown);
  pinMain.addEventListener('keydown', onPinMainKeydown);


  // window.renderCard(adverts[0]);
})();
