"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"49a9e4c9b913\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzI1MTQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI0OWE5ZTRjOWI5MTNcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/Components/Header/Header.tsx":
/*!******************************************!*\
  !*** ./app/Components/Header/Header.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _context_taskContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/taskContext */ \"(app-pages-browser)/./context/taskContext.js\");\n/* harmony import */ var _context_userContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/userContext */ \"(app-pages-browser)/./context/userContext.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Header() {\n    _s();\n    const { user, logoutUser } = (0,_context_userContext__WEBPACK_IMPORTED_MODULE_2__.useUserContext)();\n    const { openModalForAdd, activeTasks } = (0,_context_taskContext__WEBPACK_IMPORTED_MODULE_1__.useTasks)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { name } = user;\n    const userId = user._id;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"px-6 my-4 w-full flex items-center justify-between bg-[#f9f9f9]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-lg font-medium\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                role: \"img\",\n                                \"aria-label\": \"wave\",\n                                children: \"\\uD83D\\uDC4B\"\n                            }, void 0, false, {\n                                fileName: \"/home/baba/taskfyer/client/app/Components/Header/Header.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 11\n                            }, this),\n                            userId ? \"Welcome, \".concat(name, \"!\") : \"Welcome to shubham\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/baba/taskfyer/client/app/Components/Header/Header.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-sm\",\n                        children: userId ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                \"You have\",\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"font-bold text-[#3aafae]\",\n                                    children: activeTasks.length\n                                }, void 0, false, {\n                                    fileName: \"/home/baba/taskfyer/client/app/Components/Header/Header.tsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 15\n                                }, this),\n                                \"\\xa0active tasks\"\n                            ]\n                        }, void 0, true) : \"Please login or register to view your tasks\"\n                    }, void 0, false, {\n                        fileName: \"/home/baba/taskfyer/client/app/Components/Header/Header.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/baba/taskfyer/client/app/Components/Header/Header.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" flex  items-center gap-[1.5rem] sm:gap-[10.4rem]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"px-4 py-2 sm:py-3 bg-[#3aafae] text-white rounded-[50px] hover:bg-[#00A1F1] hover:text-white transition-all duration-200 ease-in-out whitespace-nowrap\",\n                        onClick: ()=>{\n                            if (userId) {\n                                openModalForAdd();\n                            } else {\n                                router.push(\"/login\");\n                            }\n                        },\n                        children: userId ? \"Add a new Task\" : \"Login / Register\"\n                    }, void 0, false, {\n                        fileName: \"/home/baba/taskfyer/client/app/Components/Header/Header.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"   py-2 sm:py-4 px-4 bg-[#EB4E31] text-white rounded-[50px] hover:bg-[#3aafae] transition duration-200 ease-in-out whitespace-nowrap\",\n                        onClick: logoutUser,\n                        children: \"Sign Out\"\n                    }, void 0, false, {\n                        fileName: \"/home/baba/taskfyer/client/app/Components/Header/Header.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/baba/taskfyer/client/app/Components/Header/Header.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/baba/taskfyer/client/app/Components/Header/Header.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"MWVn/xV0joVnsROLwT/34yXZpKE=\", false, function() {\n    return [\n        _context_userContext__WEBPACK_IMPORTED_MODULE_2__.useUserContext,\n        _context_taskContext__WEBPACK_IMPORTED_MODULE_1__.useTasks,\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9Db21wb25lbnRzL0hlYWRlci9IZWFkZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNpRDtBQUNNO0FBR1g7QUFDbEI7QUFFMUIsU0FBU0k7O0lBQ1AsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRSxHQUFHTCxvRUFBY0E7SUFFM0MsTUFBTSxFQUFFTSxlQUFlLEVBQUVDLFdBQVcsRUFBRSxHQUFHUiw4REFBUUE7SUFFakQsTUFBTVMsU0FBU1AsMERBQVNBO0lBRXhCLE1BQU0sRUFBRVEsSUFBSSxFQUFFLEdBQUdMO0lBRWpCLE1BQU1NLFNBQVNOLEtBQUtPLEdBQUc7SUFFdkIscUJBQ0UsOERBQUNDO1FBQU9DLFdBQVU7OzBCQUNoQiw4REFBQ0M7O2tDQUNDLDhEQUFDQzt3QkFBR0YsV0FBVTs7MENBQ1osOERBQUNHO2dDQUFLQyxNQUFLO2dDQUFNQyxjQUFXOzBDQUFPOzs7Ozs7NEJBR2xDUixTQUFTLFlBQWlCLE9BQUxELE1BQUssT0FBSzs7Ozs7OztrQ0FFbEMsOERBQUNVO3dCQUFFTixXQUFVO2tDQUNWSCx1QkFDQzs7Z0NBQUU7Z0NBQ1M7OENBQ1QsOERBQUNNO29DQUFLSCxXQUFVOzhDQUNiTixZQUFZYSxNQUFNOzs7Ozs7Z0NBQ2Q7OzJDQUlUOzs7Ozs7Ozs7Ozs7MEJBSU4sOERBQUNOO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQ1E7d0JBQ0NSLFdBQVU7d0JBRVZTLFNBQVM7NEJBQ1AsSUFBSVosUUFBUTtnQ0FDVko7NEJBQ0YsT0FBTztnQ0FDTEUsT0FBT2UsSUFBSSxDQUFDOzRCQUNkO3dCQUNGO2tDQUVDYixTQUFTLG1CQUFtQjs7Ozs7O2tDQUUvQiw4REFBQ1c7d0JBQ0NSLFdBQVU7d0JBQ1ZTLFNBQVNqQjtrQ0FDVjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVQ7R0F6RFNGOztRQUNzQkgsZ0VBQWNBO1FBRUZELDBEQUFRQTtRQUVsQ0Usc0RBQVNBOzs7S0FMakJFO0FBMkRULCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9Db21wb25lbnRzL0hlYWRlci9IZWFkZXIudHN4PzUxNTIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VUYXNrcyB9IGZyb20gXCJAL2NvbnRleHQvdGFza0NvbnRleHRcIjtcbmltcG9ydCB7IHVzZVVzZXJDb250ZXh0IH0gZnJvbSBcIkAvY29udGV4dC91c2VyQ29udGV4dFwiO1xuaW1wb3J0IHsgZ2l0aHViLCBtb29uLCBwcm9maWxlIH0gZnJvbSBcIkAvdXRpbHMvSWNvbnNcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gSGVhZGVyKCkge1xuICBjb25zdCB7IHVzZXIsIGxvZ291dFVzZXIgfSA9IHVzZVVzZXJDb250ZXh0KCk7XG5cbiAgY29uc3QgeyBvcGVuTW9kYWxGb3JBZGQsIGFjdGl2ZVRhc2tzIH0gPSB1c2VUYXNrcygpO1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IHsgbmFtZSB9ID0gdXNlcjtcblxuICBjb25zdCB1c2VySWQgPSB1c2VyLl9pZDtcblxuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwicHgtNiBteS00IHctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gYmctWyNmOWY5ZjldXCI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LW1lZGl1bVwiPlxuICAgICAgICAgIDxzcGFuIHJvbGU9XCJpbWdcIiBhcmlhLWxhYmVsPVwid2F2ZVwiPlxuICAgICAgICAgICAg8J+Ri1xuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICB7dXNlcklkID8gYFdlbGNvbWUsICR7bmFtZX0hYCA6IFwiV2VsY29tZSB0byBzaHViaGFtXCJ9XG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc21cIj5cbiAgICAgICAgICB7dXNlcklkID8gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgWW91IGhhdmV7XCIgXCJ9XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LVsjM2FhZmFlXVwiPlxuICAgICAgICAgICAgICAgIHthY3RpdmVUYXNrcy5sZW5ndGh9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgJm5ic3A7YWN0aXZlIHRhc2tzXG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgXCJQbGVhc2UgbG9naW4gb3IgcmVnaXN0ZXIgdG8gdmlldyB5b3VyIHRhc2tzXCJcbiAgICAgICAgICApfVxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsZXggIGl0ZW1zLWNlbnRlciBnYXAtWzEuNXJlbV0gc206Z2FwLVsxMC40cmVtXVwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS0yIHNtOnB5LTMgYmctWyMzYWFmYWVdIHRleHQtd2hpdGUgcm91bmRlZC1bNTBweF1cbiAgICAgICAgICBob3ZlcjpiZy1bIzAwQTFGMV0gaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgZWFzZS1pbi1vdXQgd2hpdGVzcGFjZS1ub3dyYXBcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGlmICh1c2VySWQpIHtcbiAgICAgICAgICAgICAgb3Blbk1vZGFsRm9yQWRkKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge3VzZXJJZCA/IFwiQWRkIGEgbmV3IFRhc2tcIiA6IFwiTG9naW4gLyBSZWdpc3RlclwifVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cIiAgIHB5LTIgc206cHktNCBweC00IGJnLVsjRUI0RTMxXSB0ZXh0LXdoaXRlIHJvdW5kZWQtWzUwcHhdIGhvdmVyOmJnLVsjM2FhZmFlXSB0cmFuc2l0aW9uIGR1cmF0aW9uLTIwMCBlYXNlLWluLW91dCB3aGl0ZXNwYWNlLW5vd3JhcFwiXG4gICAgICAgICAgb25DbGljaz17bG9nb3V0VXNlcn1cbiAgICAgICAgPlxuICAgICAgICAgIFNpZ24gT3V0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJuYW1lcyI6WyJ1c2VUYXNrcyIsInVzZVVzZXJDb250ZXh0IiwidXNlUm91dGVyIiwiUmVhY3QiLCJIZWFkZXIiLCJ1c2VyIiwibG9nb3V0VXNlciIsIm9wZW5Nb2RhbEZvckFkZCIsImFjdGl2ZVRhc2tzIiwicm91dGVyIiwibmFtZSIsInVzZXJJZCIsIl9pZCIsImhlYWRlciIsImNsYXNzTmFtZSIsImRpdiIsImgxIiwic3BhbiIsInJvbGUiLCJhcmlhLWxhYmVsIiwicCIsImxlbmd0aCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Components/Header/Header.tsx\n"));

/***/ })

});