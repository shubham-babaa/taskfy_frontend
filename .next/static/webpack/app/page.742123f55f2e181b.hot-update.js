"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/Components/MiniSidebar/MiniSidebar.tsx":
/*!****************************************************!*\
  !*** ./app/Components/MiniSidebar/MiniSidebar.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _public_icons_IconCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/public/icons/IconCheck */ \"(app-pages-browser)/./public/icons/IconCheck.tsx\");\n/* harmony import */ var _public_icons_IconFileCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/public/icons/IconFileCheck */ \"(app-pages-browser)/./public/icons/IconFileCheck.tsx\");\n/* harmony import */ var _public_icons_IconGrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/public/icons/IconGrid */ \"(app-pages-browser)/./public/icons/IconGrid.tsx\");\n/* harmony import */ var _public_icons_IconStopwatch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/public/icons/IconStopwatch */ \"(app-pages-browser)/./public/icons/IconStopwatch.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction MiniSidebar() {\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_6__.usePathname)();\n    const getStrokeColor = (link)=>{\n        return pathname === link ? \"#3aafae\" : \"#71717a\";\n    };\n    const navItems = [\n        {\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public_icons_IconGrid__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                strokeColor: getStrokeColor(\"/\")\n            }, void 0, false, {\n                fileName: \"/home/baba/taskfyer/client/app/Components/MiniSidebar/MiniSidebar.tsx\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, this),\n            title: \"All\",\n            link: \"/\"\n        },\n        {\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public_icons_IconFileCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                strokeColor: getStrokeColor(\"/completed\")\n            }, void 0, false, {\n                fileName: \"/home/baba/taskfyer/client/app/Components/MiniSidebar/MiniSidebar.tsx\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this),\n            title: \"Completed\",\n            link: \"/completed\"\n        },\n        {\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public_icons_IconCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                strokeColor: getStrokeColor(\"/pending\")\n            }, void 0, false, {\n                fileName: \"/home/baba/taskfyer/client/app/Components/MiniSidebar/MiniSidebar.tsx\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, this),\n            title: \"Pending\",\n            link: \"/pending\"\n        },\n        {\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public_icons_IconStopwatch__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                strokeColor: getStrokeColor(\"/overdue\")\n            }, void 0, false, {\n                fileName: \"/home/baba/taskfyer/client/app/Components/MiniSidebar/MiniSidebar.tsx\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, this),\n            title: \"Overdue\",\n            link: \"/overdue\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"   bg-[#f9f9f9]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mt-8  items-center justify-between\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"\",\n                children: navItems.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"relative group\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                href: item.link,\n                                children: item.icon\n                            }, void 0, false, {\n                                fileName: \"/home/baba/taskfyer/client/app/Components/MiniSidebar/MiniSidebar.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"u-triangle absolute top-[50%] translate-y-[-50%] left-8 text-xs pointer-events-none text-white bg-[#3aafae] px-2 py-1 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300\",\n                                children: item.title\n                            }, void 0, false, {\n                                fileName: \"/home/baba/taskfyer/client/app/Components/MiniSidebar/MiniSidebar.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, index, true, {\n                        fileName: \"/home/baba/taskfyer/client/app/Components/MiniSidebar/MiniSidebar.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/home/baba/taskfyer/client/app/Components/MiniSidebar/MiniSidebar.tsx\",\n                lineNumber: 45,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/baba/taskfyer/client/app/Components/MiniSidebar/MiniSidebar.tsx\",\n            lineNumber: 44,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/baba/taskfyer/client/app/Components/MiniSidebar/MiniSidebar.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n}\n_s(MiniSidebar, \"xbyQPtUVMO7MNj7WjJlpdWqRcTo=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_6__.usePathname\n    ];\n});\n_c = MiniSidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MiniSidebar);\nvar _c;\n$RefreshReg$(_c, \"MiniSidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9Db21wb25lbnRzL01pbmlTaWRlYmFyL01pbmlTaWRlYmFyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDaUQ7QUFFUTtBQUNWO0FBQ1U7QUFHNUI7QUFDaUI7QUFDcEI7QUFFMUIsU0FBU087O0lBQ1AsTUFBTUMsV0FBV0gsNERBQVdBO0lBRTVCLE1BQU1JLGlCQUFpQixDQUFDQztRQUN0QixPQUFPRixhQUFhRSxPQUFPLFlBQVk7SUFDekM7SUFFQSxNQUFNQyxXQUFXO1FBQ2Y7WUFDRUMsb0JBQU0sOERBQUNWLDhEQUFRQTtnQkFBQ1csYUFBYUosZUFBZTs7Ozs7O1lBQzVDSyxPQUFPO1lBQ1BKLE1BQU07UUFDUjtRQUNBO1lBQ0VFLG9CQUFNLDhEQUFDWCxtRUFBYUE7Z0JBQUNZLGFBQWFKLGVBQWU7Ozs7OztZQUNqREssT0FBTztZQUNQSixNQUFNO1FBQ1I7UUFDQTtZQUNFRSxvQkFBTSw4REFBQ1osK0RBQVNBO2dCQUFDYSxhQUFhSixlQUFlOzs7Ozs7WUFDN0NLLE9BQU87WUFDUEosTUFBTTtRQUNSO1FBQ0E7WUFDRUUsb0JBQU0sOERBQUNULG1FQUFhQTtnQkFBQ1UsYUFBYUosZUFBZTs7Ozs7O1lBQ2pESyxPQUFPO1lBQ1BKLE1BQU07UUFDUjtLQUNEO0lBQ0QscUJBQ0UsOERBQUNLO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7c0JBQ2IsNEVBQUNDO2dCQUFHRCxXQUFVOzBCQUNYTCxTQUFTTyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ25CLDhEQUFDQzt3QkFBZUwsV0FBVTs7MENBQ3hCLDhEQUFDWixpREFBSUE7Z0NBQUNrQixNQUFNSCxLQUFLVCxJQUFJOzBDQUFHUyxLQUFLUCxJQUFJOzs7Ozs7MENBR2pDLDhEQUFDVztnQ0FBS1AsV0FBVTswQ0FDYkcsS0FBS0wsS0FBSzs7Ozs7Ozt1QkFMTk07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYXJCO0dBL0NTYjs7UUFDVUYsd0RBQVdBOzs7S0FEckJFO0FBaURULCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9Db21wb25lbnRzL01pbmlTaWRlYmFyL01pbmlTaWRlYmFyLnRzeD9iZDU3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IEljb25DaGVjayBmcm9tIFwiQC9wdWJsaWMvaWNvbnMvSWNvbkNoZWNrXCI7XG5pbXBvcnQgSWNvbkRlbGV0ZUFsbCBmcm9tIFwiQC9wdWJsaWMvaWNvbnMvSWNvbkRlbGV0ZUFsbFwiO1xuaW1wb3J0IEljb25GaWxlQ2hlY2sgZnJvbSBcIkAvcHVibGljL2ljb25zL0ljb25GaWxlQ2hlY2tcIjtcbmltcG9ydCBJY29uR3JpZCBmcm9tIFwiQC9wdWJsaWMvaWNvbnMvSWNvbkdyaWRcIjtcbmltcG9ydCBJY29uU3RvcHdhdGNoIGZyb20gXCJAL3B1YmxpYy9pY29ucy9JY29uU3RvcHdhdGNoXCI7XG5pbXBvcnQgeyBsaW5rIH0gZnJvbSBcImZzXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVBhdGhuYW1lIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBNaW5pU2lkZWJhcigpIHtcbiAgY29uc3QgcGF0aG5hbWUgPSB1c2VQYXRobmFtZSgpO1xuXG4gIGNvbnN0IGdldFN0cm9rZUNvbG9yID0gKGxpbms6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiBwYXRobmFtZSA9PT0gbGluayA/IFwiIzNhYWZhZVwiIDogXCIjNzE3MTdhXCI7XG4gIH07XG5cbiAgY29uc3QgbmF2SXRlbXMgPSBbXG4gICAge1xuICAgICAgaWNvbjogPEljb25HcmlkIHN0cm9rZUNvbG9yPXtnZXRTdHJva2VDb2xvcihcIi9cIil9IC8+LFxuICAgICAgdGl0bGU6IFwiQWxsXCIsXG4gICAgICBsaW5rOiBcIi9cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGljb246IDxJY29uRmlsZUNoZWNrIHN0cm9rZUNvbG9yPXtnZXRTdHJva2VDb2xvcihcIi9jb21wbGV0ZWRcIil9IC8+LFxuICAgICAgdGl0bGU6IFwiQ29tcGxldGVkXCIsXG4gICAgICBsaW5rOiBcIi9jb21wbGV0ZWRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGljb246IDxJY29uQ2hlY2sgc3Ryb2tlQ29sb3I9e2dldFN0cm9rZUNvbG9yKFwiL3BlbmRpbmdcIil9IC8+LFxuICAgICAgdGl0bGU6IFwiUGVuZGluZ1wiLFxuICAgICAgbGluazogXCIvcGVuZGluZ1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgaWNvbjogPEljb25TdG9wd2F0Y2ggc3Ryb2tlQ29sb3I9e2dldFN0cm9rZUNvbG9yKFwiL292ZXJkdWVcIil9IC8+LFxuICAgICAgdGl0bGU6IFwiT3ZlcmR1ZVwiLFxuICAgICAgbGluazogXCIvb3ZlcmR1ZVwiLFxuICAgIH0sXG4gIF07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCIgICBiZy1bI2Y5ZjlmOV1cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOCAgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAge25hdkl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJyZWxhdGl2ZSBncm91cFwiPlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtpdGVtLmxpbmt9PntpdGVtLmljb259PC9MaW5rPlxuXG4gICAgICAgICAgICAgIHsvKiBIb3ZlciBUb29sdGlwICovfVxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ1LXRyaWFuZ2xlIGFic29sdXRlIHRvcC1bNTAlXSB0cmFuc2xhdGUteS1bLTUwJV0gbGVmdC04IHRleHQteHMgcG9pbnRlci1ldmVudHMtbm9uZSB0ZXh0LXdoaXRlIGJnLVsjM2FhZmFlXSBweC0yIHB5LTEgcm91bmRlZC1tZCBzaGFkb3ctbGcgb3BhY2l0eS0wIGdyb3VwLWhvdmVyOm9wYWNpdHktMTAwIHRyYW5zaXRpb24tb3BhY2l0eSBkdXJhdGlvbi0zMDBcIj5cbiAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNaW5pU2lkZWJhcjtcbiJdLCJuYW1lcyI6WyJJY29uQ2hlY2siLCJJY29uRmlsZUNoZWNrIiwiSWNvbkdyaWQiLCJJY29uU3RvcHdhdGNoIiwiTGluayIsInVzZVBhdGhuYW1lIiwiUmVhY3QiLCJNaW5pU2lkZWJhciIsInBhdGhuYW1lIiwiZ2V0U3Ryb2tlQ29sb3IiLCJsaW5rIiwibmF2SXRlbXMiLCJpY29uIiwic3Ryb2tlQ29sb3IiLCJ0aXRsZSIsImRpdiIsImNsYXNzTmFtZSIsInVsIiwibWFwIiwiaXRlbSIsImluZGV4IiwibGkiLCJocmVmIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Components/MiniSidebar/MiniSidebar.tsx\n"));

/***/ })

});