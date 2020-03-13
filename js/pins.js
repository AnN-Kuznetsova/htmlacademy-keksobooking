'use strict';

(function () {
  var PIN = {
    'width': 50,
    'height': 70
  };

  var map = document.querySelector('.map');
  var mapPins = map.querySelector('.map__pins');

  var pinTemplate = document.querySelector('#pin').content;

  var renderPins = [];


  var renderPin = function (pinData) {
    var pinElement = pinTemplate.cloneNode(true);
    pinElement.querySelector('img').src = pinData.author.avatar;
    pinElement.querySelector('img').alt = pinData.offer.title;
    pinElement.querySelector('.map__pin').style.left = (pinData.location.x - PIN.width / 2) + 'px';
    pinElement.querySelector('.map__pin').style.top = (pinData.location.y - PIN.height) + 'px';
    return pinElement;
  };

  var renderMapPins = function (pins) {
    renderPins = pins;
    var fragment = document.createDocumentFragment();
    renderPins.forEach(function (pin) {
      fragment.appendChild(renderPin(pin));
    });

    /* while (mapPins.querySelectorAll('.map__pin').length > 0) {
      mapPins.removeChild(mapPins.querySelector('.map__pin'));
    } */
    // window.removeElements()
    mapPins.appendChild(fragment);

    /* mapPins.addEventListener('click', onMapPinsClick);
    //mapPins.addEventListener('keydown', onMapPinsKeydown); */
  };

  /* var getLocation = function () {

  }; */


  window.pins = {
    render: renderMapPins/* ,
    getLocation: getLocation */
  };
})();
