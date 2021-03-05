"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _data = _interopRequireDefault(require("./data"));

var _redux = require("redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var initialState = {};

var reducer = function reducer(state, action) {
  return {
    products: _data["default"].products
  };
};

var store = (0, _redux.createStore)(reducer, initialState);
var _default = store;
exports["default"] = _default;