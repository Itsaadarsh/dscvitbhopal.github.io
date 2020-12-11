webpackHotUpdate_N_E("pages/badges/[id]",{

/***/ "./pages/badges/[id].tsx":
/*!*******************************!*\
  !*** ./pages/badges/[id].tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _jsxFileName = "/home/smitbarmase/projects/dsc-web-next/pages/badges/[id].tsx",
    _this = undefined,
    _s = $RefreshSig$();







var Badge = function Badge() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      id = _useState[0],
      setId = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      img = _useState2[0],
      setImage = _useState2[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (router.query.id) {
      setId(parseInt(router.query.id));
    }
  }, [router.query.id]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (id) {
      __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! ../../data/badges.json */ "./data/badges.json", 3)).then(function (data) {
        setImage(data["default"].badges[id - 1].badge);
      });
    }
  }, [id]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Wrapper, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
        async: true,
        src: "https://platform.twitter.com/widgets.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: "https://twitter.com/share?ref_src=twsrc%5Etfw",
        className: "twitter-share-button",
        "data-size": "large",
        "data-text": "Just earned my DSC VIT Bhopal Badge!! ",
        "data-url": "https://dscvitbhopal.github.io/badges/".concat(id),
        "data-via": "dscvitbhopal",
        "data-hashtags": "#dsc",
        "data-dnt": "true",
        "data-show-count": "false",
        children: "Tweet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/badges",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: "Close"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 5
  }, _this);
};

_s(Badge, "w9/UV7Y/XPF/ytR4X9EVcPDBM2I=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = Badge;
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "id__Wrapper",
  componentId: "sc-1hgrc1u-0"
})(["display:flex;justify-content:center;align-items:center;height:85vh;"]);
_c2 = Wrapper;
var Image = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].img.withConfig({
  displayName: "id__Image",
  componentId: "sc-1hgrc1u-1"
})(["width:38rem;height:38rem;object-fit:contain;@media (max-width:", "){width:32rem;height:32rem;}@media (max-width:", "){width:26rem;height:26rem;}@media (max-width:", "){width:17rem;height:17rem;}"], function (props) {
  return props.theme.screen.md;
}, function (props) {
  return props.theme.screen.sm;
}, function (props) {
  return props.theme.screen.xs;
});
/* harmony default export */ __webpack_exports__["default"] = (Badge);

var _c, _c2;

$RefreshReg$(_c, "Badge");
$RefreshReg$(_c2, "Wrapper");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmFkZ2VzLy50c3giXSwibmFtZXMiOlsiQmFkZ2UiLCJ1c2VTdGF0ZSIsImlkIiwic2V0SWQiLCJpbWciLCJzZXRJbWFnZSIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInF1ZXJ5IiwicGFyc2VJbnQiLCJ0aGVuIiwiZGF0YSIsImJhZGdlcyIsImJhZGdlIiwiV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIkltYWdlIiwicHJvcHMiLCJ0aGVtZSIsInNjcmVlbiIsIm1kIiwic20iLCJ4cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBY0EsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUFBLGtCQUNFQyxzREFBUSxDQUFTLElBQVQsQ0FEVjtBQUFBLE1BQ1hDLEVBRFc7QUFBQSxNQUNQQyxLQURPOztBQUFBLG1CQUVNRixzREFBUSxDQUFTLElBQVQsQ0FGZDtBQUFBLE1BRVhHLEdBRlc7QUFBQSxNQUVOQyxRQUZNOztBQUdsQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlGLE1BQU0sQ0FBQ0csS0FBUCxDQUFhUCxFQUFqQixFQUFxQjtBQUNuQkMsV0FBSyxDQUFDTyxRQUFRLENBQUNKLE1BQU0sQ0FBQ0csS0FBUCxDQUFhUCxFQUFkLENBQVQsQ0FBTDtBQUNEO0FBQ0YsR0FKUSxFQUlOLENBQUNJLE1BQU0sQ0FBQ0csS0FBUCxDQUFhUCxFQUFkLENBSk0sQ0FBVDtBQU1BTSx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJTixFQUFKLEVBQVE7QUFDTiw2SUFBaUNTLElBQWpDLENBQXNDLFVBQUNDLElBQUQsRUFBc0I7QUFDMURQLGdCQUFRLENBQUNPLElBQUksV0FBSixDQUFhQyxNQUFiLENBQW9CWCxFQUFFLEdBQUcsQ0FBekIsRUFBNEJZLEtBQTdCLENBQVI7QUFDRCxPQUZEO0FBR0Q7QUFDRixHQU5RLEVBTU4sQ0FBQ1osRUFBRCxDQU5NLENBQVQ7QUFRQSxzQkFDRSxxRUFBQyxPQUFEO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDRTtBQUFRLGFBQUssTUFBYjtBQUFjLFdBQUcsRUFBQztBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBSUU7QUFBQSw2QkFDRTtBQUNFLFlBQUksRUFBQywrQ0FEUDtBQUVFLGlCQUFTLEVBQUMsc0JBRlo7QUFHRSxxQkFBVSxPQUhaO0FBSUUscUJBQVUsd0NBSlo7QUFLRSxvRUFBbURBLEVBQW5ELENBTEY7QUFNRSxvQkFBUyxjQU5YO0FBT0UseUJBQWMsTUFQaEI7QUFRRSxvQkFBUyxNQVJYO0FBU0UsMkJBQWdCLE9BVGxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGLGVBbUJFLHFFQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFDLFNBQVg7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFuQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF5QkQsQ0E1Q0Q7O0dBQU1GLEs7VUFHV08scUQ7OztLQUhYUCxLO0FBOENOLElBQU1lLE9BQU8sR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwyRUFBYjtNQUFNRixPO0FBT04sSUFBTUcsS0FBSyxHQUFHRix5REFBTSxDQUFDWixHQUFWO0FBQUE7QUFBQTtBQUFBLDJNQUtZLFVBQUNlLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsRUFBOUI7QUFBQSxDQUxaLEVBVVksVUFBQ0gsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLENBQW1CRSxFQUE5QjtBQUFBLENBVlosRUFlWSxVQUFDSixLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJHLEVBQTlCO0FBQUEsQ0FmWixDQUFYO0FBcUJleEIsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmFkZ2VzL1tpZF0uZTdmOGFiYzU0Y2IyMjE5NWM1ZGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxudHlwZSBCYWRnZVR5cGUgPSB7XG4gIGlkPzogc3RyaW5nO1xuICBuYW1lPzogc3RyaW5nO1xuICBiYWRnZT86IHN0cmluZztcbn07XG5cbnR5cGUgQmFkZ2VzRGF0YSA9IHtcbiAgZGVmYXVsdDoge1xuICAgIGJhZGdlczogQmFkZ2VUeXBlW107XG4gIH07XG59O1xuXG5jb25zdCBCYWRnZSA9ICgpID0+IHtcbiAgY29uc3QgW2lkLCBzZXRJZF0gPSB1c2VTdGF0ZTxudW1iZXI+KG51bGwpO1xuICBjb25zdCBbaW1nLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KG51bGwpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChyb3V0ZXIucXVlcnkuaWQpIHtcbiAgICAgIHNldElkKHBhcnNlSW50KHJvdXRlci5xdWVyeS5pZCBhcyBzdHJpbmcpKTtcbiAgICB9XG4gIH0sIFtyb3V0ZXIucXVlcnkuaWRdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpZCkge1xuICAgICAgaW1wb3J0KFwiLi4vLi4vZGF0YS9iYWRnZXMuanNvblwiKS50aGVuKChkYXRhOiBCYWRnZXNEYXRhKSA9PiB7XG4gICAgICAgIHNldEltYWdlKGRhdGEuZGVmYXVsdC5iYWRnZXNbaWQgLSAxXS5iYWRnZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtpZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPFdyYXBwZXI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHNjcmlwdCBhc3luYyBzcmM9XCJodHRwczovL3BsYXRmb3JtLnR3aXR0ZXIuY29tL3dpZGdldHMuanNcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9zaGFyZT9yZWZfc3JjPXR3c3JjJTVFdGZ3XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0d2l0dGVyLXNoYXJlLWJ1dHRvblwiXG4gICAgICAgICAgZGF0YS1zaXplPVwibGFyZ2VcIlxuICAgICAgICAgIGRhdGEtdGV4dD1cIkp1c3QgZWFybmVkIG15IERTQyBWSVQgQmhvcGFsIEJhZGdlISEgXCJcbiAgICAgICAgICBkYXRhLXVybD17YGh0dHBzOi8vZHNjdml0YmhvcGFsLmdpdGh1Yi5pby9iYWRnZXMvJHtpZH1gfVxuICAgICAgICAgIGRhdGEtdmlhPVwiZHNjdml0YmhvcGFsXCJcbiAgICAgICAgICBkYXRhLWhhc2h0YWdzPVwiI2RzY1wiXG4gICAgICAgICAgZGF0YS1kbnQ9XCJ0cnVlXCJcbiAgICAgICAgICBkYXRhLXNob3ctY291bnQ9XCJmYWxzZVwiXG4gICAgICAgID5cbiAgICAgICAgICBUd2VldFxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxMaW5rIGhyZWY9XCIvYmFkZ2VzXCI+XG4gICAgICAgIDxkaXY+Q2xvc2U8L2Rpdj5cbiAgICAgIDwvTGluaz5cbiAgICA8L1dyYXBwZXI+XG4gICk7XG59O1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogODV2aDtcbmA7XG5cbmNvbnN0IEltYWdlID0gc3R5bGVkLmltZ2BcbiAgd2lkdGg6IDM4cmVtO1xuICBoZWlnaHQ6IDM4cmVtO1xuICBvYmplY3QtZml0OiBjb250YWluO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuc2NyZWVuLm1kfSkge1xuICAgIHdpZHRoOiAzMnJlbTtcbiAgICBoZWlnaHQ6IDMycmVtO1xuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5zY3JlZW4uc219KSB7XG4gICAgd2lkdGg6IDI2cmVtO1xuICAgIGhlaWdodDogMjZyZW07XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLnNjcmVlbi54c30pIHtcbiAgICB3aWR0aDogMTdyZW07XG4gICAgaGVpZ2h0OiAxN3JlbTtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgQmFkZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9