'use strict';

(function () {
  var map = document.querySelector('.map');
  var mapFiltersContainer = map.querySelector('.map__filters-container');

  var cardTemplate = document.querySelector('#card').content;

  var typeValue = {
    'flat': 'Квартира ',
    'bungalo': 'Бунгало ',
    'house': 'Дом',
    'palace': 'Дворец '
  };


  var createFeatureClass = function (advertFeature) {
    return 'popup__feature--' + advertFeature;
  };

  var renderFeatures = function (cardElement, advertFeatures) {
    var popupFeaturesList = cardElement.querySelector('.popup__features');
    var popupFeatures = cardElement.querySelectorAll('.popup__feature');
    popupFeatures.forEach(function (popupFeature) {
      for (var i = 0; i < advertFeatures.length; i++) {
        var isFeature = false;
        if (popupFeature.classList.contains(createFeatureClass(advertFeatures[i]))) {
          isFeature = true;
          break;
        }
      }
      if (!isFeature) {
        popupFeaturesList.removeChild(popupFeature);
      }
    });
  };

  var renderPhoto = function (photoTemplate, advertPhoto) {
    var photoElement = photoTemplate.cloneNode(true);
    photoElement.src = advertPhoto;
    return photoElement;
  };

  var trenderPhotos = function (cardElement, advertPhotos) {
    var fragment = document.createDocumentFragment();
    var popupPhotos = cardElement.querySelector('.popup__photos');
    var popupPhoto = popupPhotos.querySelector('.popup__photo');
    window.removeElements(popupPhotos, ('.' + popupPhoto.className + ''));

    advertPhotos.forEach(function (advertPhoto) {
      fragment.appendChild(renderPhoto(popupPhoto, advertPhoto));
    });
    popupPhotos.appendChild(fragment);
  };

  var renderCard = function (advertData) {
    var cardElement = cardTemplate.cloneNode(true);
    cardElement.querySelector('.popup__title').textContent = advertData.offer.title;
    cardElement.querySelector('.popup__text--address').textContent = advertData.offer.address;
    cardElement.querySelector('.popup__text--price').textContent = advertData.offer.price + '₽/ночь';
    cardElement.querySelector('.popup__type').textContent = typeValue[advertData.offer.type];
    cardElement.querySelector('.popup__text--capacity').textContent = advertData.offer.rooms + ' комнаты для ' + advertData.offer.guests + ' гостей';
    cardElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + advertData.offer.checkin + ', выезд до ' + advertData.offer.checkout;
    cardElement.querySelector('.popup__description').textContent = advertData.offer.description;
    cardElement.querySelector('.popup__avatar').src = advertData.author.avatar;
    renderFeatures(cardElement, advertData.offer.features);
    trenderPhotos(cardElement, advertData.offer.photos);
    return cardElement;
  };

  var createCard = function (advertData) {
    var fragment = document.createDocumentFragment();
    fragment.appendChild(renderCard(advertData));
    map.insertBefore(fragment, mapFiltersContainer);
  };


  window.renderCard = createCard;
})();
