"use strict";

var _interopRequireDefault = require("C:/Users/DELL/OneDrive/\u684C\u9762/openclassroom/202306 project 14/library/component-library/node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./ListDeroulant.css");
var _jsxRuntime = require("react/jsx-runtime");
var ListDeroulant = function ListDeroulant(_ref) {
  var _onChange = _ref.onChange,
    datas = _ref.datas,
    optionName = _ref.optionName,
    valueName = _ref.valueName;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "bloc",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("select", {
      id: "myselect",
      onChange: function onChange(e) {
        return _onChange(e.target.value);
      },
      children: datas.map(function (data, index) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
          className: "option",
          value: valueName ? data[valueName] : data[optionName],
          children: data[optionName]
        }, index);
      })
    })
  });
};
var _default = ListDeroulant;
exports.default = _default;