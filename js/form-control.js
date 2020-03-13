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

  var setReadOnly = function (element) {
    element.setAttribute('readonly', true);
  };

  var setTabindex = function (element, value) {
    element.setAttribute('tabindex', value);
  };


  window.formControl = {
    state: formControl,
    setReadOnly: setReadOnly,
    setTabindex: setTabindex,
    NO_TABULATION: NO_TABULATION
  };
})();
