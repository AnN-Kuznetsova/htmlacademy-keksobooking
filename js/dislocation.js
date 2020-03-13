'use strict';

(function () {
  var BoundaryCoordinates = {
    X_MIN: 0,
    X_MAX: Math.floor(document.querySelector('.map__pins').getBoundingClientRect().width),
    Y_MIN: 130,
    Y_MAX: 630
  };

  var adForm = document.querySelector('.ad-form');
  var addressInput = adForm.querySelector('#address');

  var Location = function (x, y) {
    this.x = x; // случайное число, координата x метки на карте. Значение ограничено размерами блока, в котором перетаскивается метка.
    this.y = y; // случайное число, координата y метки на карте от 130 до 630.
  };

  var getLocation = function (pin, isPageActive) {
    var pinParameters = pin.getBoundingClientRect();
    var x = Math.floor(pinParameters.x + pinParameters.width / 2);
    var y = Math.floor(pinParameters.y + pinParameters.height);
    if (!isPageActive) {
      y = Math.floor(pinParameters.y + pinParameters.height / 2);
    }
    return new window.dislocation.Сreate(x, y);
  };

  var setAddress = function (pin, isPageActive) {
    var location = getLocation(pin, isPageActive);
    addressInput.value = location.x + ', ' + location.y;
  };


  window.dislocation = {
    boundaryCoordinates: BoundaryCoordinates,
    Сreate: Location,
    setAddress: setAddress
  };
})();
