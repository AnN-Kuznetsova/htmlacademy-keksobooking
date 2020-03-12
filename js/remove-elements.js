'use strict';

(function () {
  var removeElements = function (parentElement, childElementSelector) {
    while (parentElement.querySelectorAll(childElementSelector).length > 0) {
      parentElement.removeChild(parentElement.querySelector(childElementSelector));
    }
  };

  window.removeElements = removeElements;
})();
