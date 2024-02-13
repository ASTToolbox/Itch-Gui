(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["addon-entry-remove-sprite-confirm"],{

/***/ "./src/addons/addons/remove-sprite-confirm/_runtime_entry.js":
/*!*******************************************************************!*\
  !*** ./src/addons/addons/remove-sprite-confirm/_runtime_entry.js ***!
  \*******************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/remove-sprite-confirm/userscript.js");
/* generated by pull.js */

const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./src/addons/addons/remove-sprite-confirm/userscript.js":
/*!***************************************************************!*\
  !*** ./src/addons/addons/remove-sprite-confirm/userscript.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (async ({
  addon,
  console,
  msg
}) => {
  if (!addon.tab.redux.state) return console.warn("Redux is not available!");
  const vm = addon.tab.traps.vm;
  if (!vm) return;
  const oldDeleteSprite = vm.deleteSprite;
  const newDeleteSprite = function newDeleteSprite(...args) {
    if (addon.self.disabled) return oldDeleteSprite.apply(this, args);
    const canDelete = confirm(msg("confirm"));
    if (canDelete) return oldDeleteSprite.apply(this, args);
    const restoreDeletionState = Object.assign({}, addon.tab.redux.state.scratchGui.restoreDeletion);
    setTimeout(() => addon.tab.redux.dispatch({
      type: "scratch-gui/restore-deletion/RESTORE_UPDATE",
      state: restoreDeletionState
    }), 100);
    return Promise.resolve();
  };
  vm.deleteSprite = newDeleteSprite;
});

/***/ })

}]);
//# sourceMappingURL=addon-entry-remove-sprite-confirm.js.map