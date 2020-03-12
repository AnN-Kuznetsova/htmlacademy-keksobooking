'use strict';
(function () {
  var ADVERTS_AMOUNT = 8;
  var TYPE_VALUES = ['palace', 'flat', 'house', 'bungalo'];
  var CHACKIN_VALUES = ['12:00', '13:00', '14:00'];
  var FEATURES_VALUES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
  var PHOTOS_SRC = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
  var BoundaryCoordinates = {
    X_MIN: 0,
    X_MAX: Math.floor(document.querySelector('.map__pins').getBoundingClientRect().width),
    Y_MIN: 130,
    Y_MAX: 630
  };


  var Author = function (avatarNumber) {
    this.avatar = 'img/avatars/user0' + avatarNumber + '.png';
  };

  var Offer = function (title, address, price, type, rooms, guests, checkin, checkout, features, description, photos) {
    this.title = title;
    this.address = address;
    this.price = price;
    this.type = type;
    this.rooms = rooms;
    this.guests = guests;
    this.checkin = checkin;
    this.checkout = checkout;
    this.features = features;
    this.description = description;
    this.photos = photos;
  };

  var Location = function (x, y) {
    this.x = x; // случайное число, координата x метки на карте. Значение ограничено размерами блока, в котором перетаскивается метка.
    this.y = y; // случайное число, координата y метки на карте от 130 до 630.
  };

  var Advert = function (avatarNumber, title, address, price, type, rooms, guests, checkin, checkout, features, description, photos, x, y) {
    this.author = new Author(avatarNumber);
    this.offer = new Offer(title, address, price, type, rooms, guests, checkin, checkout, features, description, photos);
    this.location = new Location(x, y);
  };

  var createNewAdvert = function (index) {
    var title = 'Строка, заголовок предложения';
    var address = '600, 350';
    var price = window.random.number(1000);
    var type = window.random.arrayElement(TYPE_VALUES);
    var rooms = window.random.number(5);
    var guests = window.random.number(5);
    var checkin = window.random.arrayElement(CHACKIN_VALUES);
    var checkout = window.random.arrayElement(CHACKIN_VALUES);
    var features = window.random.array(FEATURES_VALUES);
    var description = 'Строка с описанием';
    var photos = [];
    while (photos.length === 0) {
      photos = window.random.array(PHOTOS_SRC);
    }
    var x = window.random.numberOfRange(BoundaryCoordinates.X_MIN, BoundaryCoordinates.X_MAX);
    var y = window.random.numberOfRange(BoundaryCoordinates.Y_MIN, BoundaryCoordinates.Y_MAX);

    return new Advert(index, title, address, price, type, rooms, guests, checkin, checkout, features, description, photos, x, y);
  };

  var createAdverts = function () {
    var adverts = [];
    for (var i = 0; i < ADVERTS_AMOUNT; i++) {
      adverts.push(createNewAdvert(i + 1));
    }
    return adverts;
  };


  window.data = createAdverts;
})();
