function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import React, { useMemo, memo } from 'react';
import "./Button.module.less";
var Button = /*#__PURE__*/memo(function (props) {
  var type = props.type,
    width = props.width,
    height = props.height,
    disabled = props.disabled,
    circle = props.circle,
    dashed = props.dashed,
    loading = props.loading,
    handleClick = props.handleClick,
    children = props.children;
  var buttonStyle = useMemo(function () {
    if (!type && type !== 'danger' && type !== 'warning' && type !== 'warning' && type !== 'text') {
      return 'primary';
    }
    return type;
  }, [type]);
  var buttonSize = useMemo(function () {
    var size = {
      width: '100px',
      height: '40px'
    };
    if (width) {
      size.width = width + 'px';
    }
    if (height) {
      size.height = height + 'px';
    }
    if (circle) {
      size = _objectSpread(_objectSpread({}, size), {}, {
        borderRadius: '50%'
      });
    }
    if (dashed && type === 'text') {
      size = _objectSpread(_objectSpread({}, size), {}, {
        border: '1px dashed #ccc'
      });
    }
    if (disabled) {
      size = _objectSpread(_objectSpread({}, size), {}, {
        cursor: 'not-allowed'
      });
    }
    return size;
  }, [width, height, circle, dashed]);
  return /*#__PURE__*/React.createElement("div", {
    className: "button"
  }, /*#__PURE__*/React.createElement("button", {
    className: buttonStyle,
    style: buttonSize,
    disabled: disabled ? true : false,
    onClick: handleClick
  }, loading && /*#__PURE__*/React.createElement("div", {
    className: "loading1"
  }), children));
});
export default Button;