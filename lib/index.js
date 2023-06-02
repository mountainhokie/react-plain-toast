"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toast = exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./styles/Toast.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Toaster = function Toaster(props) {
  var position = props.position,
    autoDeleteTime = props.autoDeleteTime;
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    toasts = _useState2[0],
    setToasts = _useState2[1];
  var showToast = function showToast(toastProps) {
    setToasts(function (prevToasts) {
      return [].concat(_toConsumableArray(prevToasts), [toastProps]);
    });
  };
  var removeToast = function removeToast(id) {
    toasts.splice(id, 1);
    setToasts(_toConsumableArray(toasts));
  };
  (0, _react.useEffect)(function () {
    var interval = setTimeout(deleteTimer, autoDeleteTime);
    return function () {
      clearTimeout(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toasts, autoDeleteTime]);
  var deleteTimer = function deleteTimer() {
    if (autoDeleteTime > 0 && toasts.length) {
      removeToast(toasts[0].id);
    }
  };
  (0, _react.useEffect)(function () {
    var handleShowToast = function handleShowToast(event) {
      showToast(event.detail);
    };
    var toaster = document.getElementById("toaster");
    if (toaster) {
      toaster.addEventListener("showToast", handleShowToast);
    }
    return function () {
      if (toaster) {
        toaster.removeEventListener("showToast", handleShowToast);
      }
    };
  }, []);
  return /*#__PURE__*/_react["default"].createElement("div", {
    id: "toaster",
    className: "notification-container ".concat(position)
  }, toasts.map(function (toast, index) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "notification toast ".concat(toast.type, " ").concat(toast.position ? toast.position : "bottom-right"),
      key: index,
      style: {
        backgroundColor: toast.backgroundColor
      }
    }, /*#__PURE__*/_react["default"].createElement("button", {
      onClick: function onClick() {
        return removeToast(index);
      }
    }, "X"), /*#__PURE__*/_react["default"].createElement("div", {
      className: "notification-image"
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "icon"
    })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("p", {
      className: "notification-title"
    }, toast.title), /*#__PURE__*/_react["default"].createElement("p", {
      className: "notification-message"
    }, toast.description)));
  }));
};
var toast = function toast(props) {
  var toaster = document.getElementById("toaster");
  if (toaster) {
    var showToastEvent = new CustomEvent("showToast", {
      detail: props
    });
    toaster.dispatchEvent(showToastEvent);
  }
};
exports.toast = toast;
Toaster.defaultProps = {
  position: "bottom-right",
  autoDeleteTime: 0
};
Toaster.propTypes = {
  position: _propTypes["default"].string,
  autoDelete: _propTypes["default"].bool,
  autoDeleteTime: _propTypes["default"].number
};
var _default = Toaster;
exports["default"] = _default;