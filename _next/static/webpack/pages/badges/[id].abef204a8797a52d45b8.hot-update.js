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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


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
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var s = document.createElement("script");
    s.setAttribute("src", "https://platform.twitter.com/widgets.js");
    s.setAttribute("async", "true");
    document.head.appendChild(s);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Wrapper, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
            lineNumber: 50,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/badges",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: "Close"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Image, {
          src: img,
          alt: "Badge"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, _this);
};

_s(Badge, "MP3HEhXpJ+ns6tHFKnlvdI6C1lY=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = Badge;
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "id__Wrapper",
  componentId: "sc-1hgrc1u-0"
})(["display:flex;justify-content:center;align-items:center;height:85vh;"]);
_c2 = Wrapper;
var Image = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].img.withConfig({
  displayName: "id__Image",
  componentId: "sc-1hgrc1u-1"
})(["width:25rem;height:25rem;object-fit:contain;@media (max-width:", "){width:32rem;height:32rem;}@media (max-width:", "){width:26rem;height:26rem;}@media (max-width:", "){width:17rem;height:17rem;}"], function (props) {
  return props.theme.screen.md;
}, function (props) {
  return props.theme.screen.sm;
}, function (props) {
  return props.theme.screen.xs;
});
_c3 = Image;
/* harmony default export */ __webpack_exports__["default"] = (Badge);

var _c, _c2, _c3;

$RefreshReg$(_c, "Badge");
$RefreshReg$(_c2, "Wrapper");
$RefreshReg$(_c3, "Image");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmFkZ2VzLy50c3giXSwibmFtZXMiOlsiQmFkZ2UiLCJ1c2VTdGF0ZSIsImlkIiwic2V0SWQiLCJpbWciLCJzZXRJbWFnZSIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInF1ZXJ5IiwicGFyc2VJbnQiLCJ0aGVuIiwiZGF0YSIsImJhZGdlcyIsImJhZGdlIiwicyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIldyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJJbWFnZSIsInByb3BzIiwidGhlbWUiLCJzY3JlZW4iLCJtZCIsInNtIiwieHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBY0EsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUFBLGtCQUNFQyxzREFBUSxDQUFTLElBQVQsQ0FEVjtBQUFBLE1BQ1hDLEVBRFc7QUFBQSxNQUNQQyxLQURPOztBQUFBLG1CQUVNRixzREFBUSxDQUFTLElBQVQsQ0FGZDtBQUFBLE1BRVhHLEdBRlc7QUFBQSxNQUVOQyxRQUZNOztBQUdsQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlGLE1BQU0sQ0FBQ0csS0FBUCxDQUFhUCxFQUFqQixFQUFxQjtBQUNuQkMsV0FBSyxDQUFDTyxRQUFRLENBQUNKLE1BQU0sQ0FBQ0csS0FBUCxDQUFhUCxFQUFkLENBQVQsQ0FBTDtBQUNEO0FBQ0YsR0FKUSxFQUlOLENBQUNJLE1BQU0sQ0FBQ0csS0FBUCxDQUFhUCxFQUFkLENBSk0sQ0FBVDtBQU1BTSx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJTixFQUFKLEVBQVE7QUFDTiw2SUFBaUNTLElBQWpDLENBQXNDLFVBQUNDLElBQUQsRUFBc0I7QUFDMURQLGdCQUFRLENBQUNPLElBQUksV0FBSixDQUFhQyxNQUFiLENBQW9CWCxFQUFFLEdBQUcsQ0FBekIsRUFBNEJZLEtBQTdCLENBQVI7QUFDRCxPQUZEO0FBR0Q7QUFDRixHQU5RLEVBTU4sQ0FBQ1osRUFBRCxDQU5NLENBQVQ7QUFRQU0seURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTU8sQ0FBQyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBVjtBQUNBRixLQUFDLENBQUNHLFlBQUYsQ0FBZSxLQUFmLEVBQXNCLHlDQUF0QjtBQUNBSCxLQUFDLENBQUNHLFlBQUYsQ0FBZSxPQUFmLEVBQXdCLE1BQXhCO0FBQ0FGLFlBQVEsQ0FBQ0csSUFBVCxDQUFjQyxXQUFkLENBQTBCTCxDQUExQjtBQUNELEdBTFEsRUFLTixFQUxNLENBQVQ7QUFPQSxzQkFDRSxxRUFBQyxPQUFEO0FBQUEsMkJBQ0U7QUFBQSw2QkFDRTtBQUFBLGdDQUNFO0FBQUEsaUNBQ0U7QUFDRSxnQkFBSSxFQUFDLCtDQURQO0FBRUUscUJBQVMsRUFBQyxzQkFGWjtBQUdFLHlCQUFVLE9BSFo7QUFJRSx5QkFBVSx3Q0FKWjtBQUtFLHdFQUFtRGIsRUFBbkQsQ0FMRjtBQU1FLHdCQUFTLGNBTlg7QUFPRSw2QkFBYyxNQVBoQjtBQVFFLHdCQUFTLE1BUlg7QUFTRSwrQkFBZ0IsT0FUbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBZ0JFLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxFQUFDLFNBQVg7QUFBQSxpQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBaEJGLGVBbUJFLHFFQUFDLEtBQUQ7QUFBTyxhQUFHLEVBQUVFLEdBQVo7QUFBaUIsYUFBRyxFQUFDO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEyQkQsQ0FyREQ7O0dBQU1KLEs7VUFHV08scUQ7OztLQUhYUCxLO0FBdUROLElBQU1xQixPQUFPLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsMkVBQWI7TUFBTUYsTztBQU9OLElBQU1HLEtBQUssR0FBR0YseURBQU0sQ0FBQ2xCLEdBQVY7QUFBQTtBQUFBO0FBQUEsMk1BS1ksVUFBQ3FCLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsRUFBOUI7QUFBQSxDQUxaLEVBVVksVUFBQ0gsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLENBQW1CRSxFQUE5QjtBQUFBLENBVlosRUFlWSxVQUFDSixLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJHLEVBQTlCO0FBQUEsQ0FmWixDQUFYO01BQU1OLEs7QUFxQlN4QixvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9iYWRnZXMvW2lkXS5hYmVmMjA0YTg3OTdhNTJkNDViOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG50eXBlIEJhZGdlVHlwZSA9IHtcbiAgaWQ/OiBzdHJpbmc7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIGJhZGdlPzogc3RyaW5nO1xufTtcblxudHlwZSBCYWRnZXNEYXRhID0ge1xuICBkZWZhdWx0OiB7XG4gICAgYmFkZ2VzOiBCYWRnZVR5cGVbXTtcbiAgfTtcbn07XG5cbmNvbnN0IEJhZGdlID0gKCkgPT4ge1xuICBjb25zdCBbaWQsIHNldElkXSA9IHVzZVN0YXRlPG51bWJlcj4obnVsbCk7XG4gIGNvbnN0IFtpbWcsIHNldEltYWdlXSA9IHVzZVN0YXRlPHN0cmluZz4obnVsbCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHJvdXRlci5xdWVyeS5pZCkge1xuICAgICAgc2V0SWQocGFyc2VJbnQocm91dGVyLnF1ZXJ5LmlkIGFzIHN0cmluZykpO1xuICAgIH1cbiAgfSwgW3JvdXRlci5xdWVyeS5pZF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlkKSB7XG4gICAgICBpbXBvcnQoXCIuLi8uLi9kYXRhL2JhZGdlcy5qc29uXCIpLnRoZW4oKGRhdGE6IEJhZGdlc0RhdGEpID0+IHtcbiAgICAgICAgc2V0SW1hZ2UoZGF0YS5kZWZhdWx0LmJhZGdlc1tpZCAtIDFdLmJhZGdlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW2lkXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICBzLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcImh0dHBzOi8vcGxhdGZvcm0udHdpdHRlci5jb20vd2lkZ2V0cy5qc1wiKTtcbiAgICBzLnNldEF0dHJpYnV0ZShcImFzeW5jXCIsIFwidHJ1ZVwiKTtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHMpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlcj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL3NoYXJlP3JlZl9zcmM9dHdzcmMlNUV0ZndcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0d2l0dGVyLXNoYXJlLWJ1dHRvblwiXG4gICAgICAgICAgICAgIGRhdGEtc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgZGF0YS10ZXh0PVwiSnVzdCBlYXJuZWQgbXkgRFNDIFZJVCBCaG9wYWwgQmFkZ2UhISBcIlxuICAgICAgICAgICAgICBkYXRhLXVybD17YGh0dHBzOi8vZHNjdml0YmhvcGFsLmdpdGh1Yi5pby9iYWRnZXMvJHtpZH1gfVxuICAgICAgICAgICAgICBkYXRhLXZpYT1cImRzY3ZpdGJob3BhbFwiXG4gICAgICAgICAgICAgIGRhdGEtaGFzaHRhZ3M9XCIjZHNjXCJcbiAgICAgICAgICAgICAgZGF0YS1kbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgZGF0YS1zaG93LWNvdW50PVwiZmFsc2VcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBUd2VldFxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYmFkZ2VzXCI+XG4gICAgICAgICAgICA8ZGl2PkNsb3NlPC9kaXY+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxJbWFnZSBzcmM9e2ltZ30gYWx0PVwiQmFkZ2VcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvV3JhcHBlcj5cbiAgKTtcbn07XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA4NXZoO1xuYDtcblxuY29uc3QgSW1hZ2UgPSBzdHlsZWQuaW1nYFxuICB3aWR0aDogMjVyZW07XG4gIGhlaWdodDogMjVyZW07XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5zY3JlZW4ubWR9KSB7XG4gICAgd2lkdGg6IDMycmVtO1xuICAgIGhlaWdodDogMzJyZW07XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLnNjcmVlbi5zbX0pIHtcbiAgICB3aWR0aDogMjZyZW07XG4gICAgaGVpZ2h0OiAyNnJlbTtcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuc2NyZWVuLnhzfSkge1xuICAgIHdpZHRoOiAxN3JlbTtcbiAgICBoZWlnaHQ6IDE3cmVtO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBCYWRnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=