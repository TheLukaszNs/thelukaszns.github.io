webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Navbar/index.tsx":
/*!*************************************!*\
  !*** ./components/Navbar/index.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components-breakpoint */ "./node_modules/styled-components-breakpoint/dist/esm/index.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Button */ "./components/Button/index.tsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "/mnt/e/Lukasz/Programowanie/Web/Frontend/React/portfolio2/components/Navbar/index.tsx";


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: flex;\n    flex-direction: column;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var StyledNav = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].nav.withConfig({
  displayName: "Navbar__StyledNav",
  componentId: "jjuae7-0"
})(["display:flex;justify-content:space-between;align-items:center;padding:10px 0;"]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h2.withConfig({
  displayName: "Navbar__Title",
  componentId: "jjuae7-1"
})(["font-size:2.3em;font-weight:normal;position:relative;transition:all 0.1s;&::before{content:'';z-index:-1;position:absolute;bottom:-7px;left:0;background:#f2994a;width:15%;padding:5px 0;transition:all 0.4s cubic-bezier(0.68,-0.55,0.27,1.55);}&:hover{&::before{transform:rotateZ(-6deg) skewX(-30deg);padding-top:14px;padding-bottom:14px;bottom:0;width:100%;}}"]);
var Nav = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].ul.withConfig({
  displayName: "Navbar__Nav",
  componentId: "jjuae7-2"
})(["list-style-type:none;", ""], Object(styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_3__["default"])('tablet')(_templateObject()));
var NavItem = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].li.withConfig({
  displayName: "Navbar__NavItem",
  componentId: "jjuae7-3"
})(["display:inline;font-size:1.6em;:not(:last-child){margin-right:75px;}"]);

var Navbar = function Navbar(_ref) {
  var title = _ref.title;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledNav, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, title))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Nav, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    buttonType: "raised",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "contact")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/projects",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "projects"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "about")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./node_modules/styled-components-breakpoint/dist/esm/core.js":
/*!********************************************************************!*\
  !*** ./node_modules/styled-components-breakpoint/dist/esm/core.js ***!
  \********************************************************************/
/*! exports provided: _gt, _gte, _lt, _lte, _between, _breakpoint, _map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_gt", function() { return _gt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_gte", function() { return _gte; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_lt", function() { return _lt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_lte", function() { return _lte; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_between", function() { return _between; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_breakpoint", function() { return _breakpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_map", function() { return _map; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _templateObject = _taggedTemplateLiteral(['@media (', ': ', 'em) {\n      ', '\n    }'], ['@media (', ': ', 'em) {\n      ', '\n    }']),
    _templateObject2 = _taggedTemplateLiteral(['@media (min-width: ', 'em) and (max-width: ', 'em) {\n      ', '\n    }'], ['@media (min-width: ', 'em) and (max-width: ', 'em) {\n      ', '\n    }']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/* global process */


// eslint-disable-line no-undef

function convertPxToEm(pixels) {
  // @media is always calculated off 16px regardless of whether the root font size is the default or not
  return pixels / 16;
}

function getValueFromName(breakpoints, name) {
  var value = breakpoints[name];
  if ( true && typeof value === 'undefined') {
    console.error('A breakpoint named "' + name + '" does not exist.'); // eslint-disable-line no-console
    return 0;
  }
  return value;
}

function withSingleCriteria(breakpoints, name, operator) {
  var offset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

  var value = getValueFromName(breakpoints, name);

  // special case for 0 to avoid wrapping styles in an unnecessary @media block
  // FIXME: typings
  // if (operator === 'max-width' && value === 0) {
  //   return () => '';
  // }

  // special case for 0 to avoid wrapping styles in an unnecessary @media block
  if (operator === 'min-width' && value === 0) {
    return function (strings) {
      for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        interpolations[_key - 1] = arguments[_key];
      }

      return styled_components__WEBPACK_IMPORTED_MODULE_0__["css"].apply(undefined, [strings].concat(_toConsumableArray(interpolations)));
    };
  }

  return function (strings) {
    for (var _len2 = arguments.length, interpolations = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      interpolations[_key2 - 1] = arguments[_key2];
    }

    return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject, operator, convertPxToEm(value + offset), styled_components__WEBPACK_IMPORTED_MODULE_0__["css"].apply(undefined, [strings].concat(_toConsumableArray(interpolations))));
  };
}

function _gt(breakpoints, name) {
  return withSingleCriteria(breakpoints, name, 'min-width', +1);
}

function _gte(breakpoints, name) {
  return withSingleCriteria(breakpoints, name, 'min-width');
}

function _lt(breakpoints, name) {
  return withSingleCriteria(breakpoints, name, 'max-width', -1);
}

function _lte(breakpoints, name) {
  return withSingleCriteria(breakpoints, name, 'max-width');
}

function _between(breakpoints, gte, lt) {
  var gteValue = getValueFromName(breakpoints, gte);
  var ltValue = getValueFromName(breakpoints, lt);
  return function (strings) {
    for (var _len3 = arguments.length, interpolations = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      interpolations[_key3 - 1] = arguments[_key3];
    }

    return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject2, convertPxToEm(gteValue), convertPxToEm(ltValue - 1), styled_components__WEBPACK_IMPORTED_MODULE_0__["css"].apply(undefined, [strings].concat(_toConsumableArray(interpolations))));
  };
}

function _breakpoint(breakpoints, gte, lt) {
  if (typeof lt === 'undefined') {
    return _gte(breakpoints, gte);
  } else {
    return _between(breakpoints, gte, lt);
  }
};

// TODO: allow the operator to be customised
function _map(breakpoints, value, mapValueToCSS) {
  var values = value;

  if (values === null || (typeof values === 'undefined' ? 'undefined' : _typeof(values)) !== 'object') {
    return mapValueToCSS(values);
  }

  return [
  // eslint-disable-next-line no-undefined
  mapValueToCSS(undefined)].concat(_toConsumableArray(Object.keys(values).map(function (name) {
    var tag = _gte(breakpoints, name);
    var val = values[name];
    var styles = tag([], [].concat(mapValueToCSS(val)));
    return styles;
  })));
};

/***/ }),

/***/ "./node_modules/styled-components-breakpoint/dist/esm/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/styled-components-breakpoint/dist/esm/index.js ***!
  \*********************************************************************/
/*! exports provided: map, createStatic, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStatic", function() { return createStatic; });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./node_modules/styled-components-breakpoint/dist/esm/core.js");
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }



var defaultBreakpoints = {
  mobile: 0, // targeting all devices
  tablet: 737, // targeting devices that are LARGER than the iPhone 6 Plus (which is 736px in landscape mode)
  desktop: 1025 // targeting devices that are LARGER than the iPad (which is 1024px in landscape mode)
};

function breakpoint(gte, lt) {
  return function (strings) {
    for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      interpolations[_key - 1] = arguments[_key];
    }

    return function (_ref) {
      var _ref$theme = _ref.theme,
          theme = _ref$theme === undefined ? {} : _ref$theme;

      return Object(_core__WEBPACK_IMPORTED_MODULE_0__["_breakpoint"])(theme.breakpoints || defaultBreakpoints, gte, lt).apply(undefined, [strings].concat(_toConsumableArray(interpolations)));
    };
  };
}

function map(value, mapValueToCSS) {
  return function (_ref2) {
    var _ref2$theme = _ref2.theme,
        theme = _ref2$theme === undefined ? {} : _ref2$theme;

    return Object(_core__WEBPACK_IMPORTED_MODULE_0__["_map"])(theme.breakpoints || defaultBreakpoints, value, mapValueToCSS);
  };
}

function createStatic() {
  var breakpoints = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultBreakpoints;

  return Object.keys(breakpoints).reduce(function (accum, name) {
    accum[name] = Object(_core__WEBPACK_IMPORTED_MODULE_0__["_breakpoint"])(breakpoints, name);
    return accum;
  }, {
    breakpoint: function breakpoint(gte, lt) {
      return Object(_core__WEBPACK_IMPORTED_MODULE_0__["_breakpoint"])(breakpoints, gte, lt);
    },
    map: function map(value, mapValueToCSS) {
      return Object(_core__WEBPACK_IMPORTED_MODULE_0__["_map"])(breakpoints, value, mapValueToCSS);
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (breakpoint);

/***/ })

})
//# sourceMappingURL=_app.js.301ee701ad0ed7d50cf1.hot-update.js.map