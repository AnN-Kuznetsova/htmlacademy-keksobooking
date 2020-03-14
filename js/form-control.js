'use strict';

(function () {
  var NO_TABULATION = -1;
  /* var getFormElements = function () {

  }; */

  var setDisabled = function (disabledValue, form) {
    var formElements = form.elements;
    Array.from(formElements).forEach(function (element) {
      element.disabled = disabledValue;
    });
  };

  var FormControlEffects = {
    'disabled': setDisabled.bind({}, true),
    'enabled': setDisabled.bind({}, false)
  };

  var formControl = function (form, effect) {
    for (var controlEffect in FormControlEffects) {
      if (FormControlEffects.hasOwnProperty(controlEffect)) {
        if (controlEffect === effect) {
          FormControlEffects[controlEffect](form);
          break;
        }
      }
    }
  };

  var setElementAttribute = function (element, attributeName, value) {
    element.setAttribute(attributeName, value);
  };


  window.formControl = {
    state: formControl,
    setElementAttribute: setElementAttribute,
    NO_TABULATION: NO_TABULATION
  };
})();
