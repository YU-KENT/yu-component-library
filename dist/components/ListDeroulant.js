"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var ListDeroulant = function ListDeroulant(_ref) {
  var _onChange = _ref.onChange,
    datas = _ref.datas,
    optionName = _ref.optionName,
    valueName = _ref.valueName;
  return /*#__PURE__*/React.createElement("div", null, " ", /*#__PURE__*/React.createElement("span", null, "Hello Wordl"), /*#__PURE__*/React.createElement("select", {
    className: "",
    onChange: function onChange(e) {
      return _onChange(e.target.value);
    }
  }, datas.map(function (data, index) {
    return /*#__PURE__*/React.createElement("option", {
      className: "",
      key: index,
      value: valueName ? data[valueName] : ''
    }, data[optionName]);
  })));
};
var _default = ListDeroulant;
exports.default = _default;