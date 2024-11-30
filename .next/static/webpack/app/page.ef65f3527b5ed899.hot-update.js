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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _public_icons_IconCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/public/icons/IconCheck */ \"(app-pages-browser)/./public/icons/IconCheck.tsx\");\n/* harmony import */ var _public_icons_IconDeleteAll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/public/icons/IconDeleteAll */ \"(app-pages-browser)/./public/icons/IconDeleteAll.tsx\");\n/* harmony import */ var _public_icons_IconFileCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/public/icons/IconFileCheck */ \"(app-pages-browser)/./public/icons/IconFileCheck.tsx\");\n/* harmony import */ var _public_icons_IconGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/public/icons/IconGrid */ \"(app-pages-browser)/./public/icons/IconGrid.tsx\");\n/* harmony import */ var _public_icons_IconStopwatch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/public/icons/IconStopwatch */ \"(app-pages-browser)/./public/icons/IconStopwatch.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction MiniSidebar() {\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_7__.usePathname)();\n    const getStrokeColor = (link)=>{\n        return pathname === link ? \"#3aafae\" : \"#71717a\";\n    };\n    const navItems = [\n        {\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public_icons_IconGrid__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                strokeColor: getStrokeColor(\"/\")\n            }, void 0, false, {\n                fileName: \"/home/baba/taskfyer/client/app/Components/MiniSidebar/MiniSidebar.tsx\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, this),\n            title: \"All\",\n            link: \"/\"\n        },\n        {\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public_icons_IconFileCheck__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                strokeColor: getStrokeColor(\"/completed\")\n            }, void 0, false, {\n                fileName: \"/home/baba/taskfyer/client/app/Components/MiniSidebar/MiniSidebar.tsx\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this),\n            title: \"Completed\",\n            link: \"/completed\"\n        },\n        {\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public_icons_IconCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                strokeColor: getStrokeColor(\"/pending\")\n            }, void 0, false, {\n                fileName: \"/home/baba/taskfyer/client/app/Components/MiniSidebar/MiniSidebar.tsx\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, this),\n            title: \"Pending\",\n            link: \"/pending\"\n        },\n        {\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public_icons_IconStopwatch__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                strokeColor: getStrokeColor(\"/overdue\")\n            }, void 0, false, {\n                fileName: \"/home/baba/taskfyer/client/app/Components/MiniSidebar/MiniSidebar.tsx\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, this),\n            title: \"Overdue\",\n            link: \"/overdue\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"basis-[5rem] flex  bg-[#f9f9f9]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mt-8 flex-1 flex flex-col items-center justify-between\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"flex flex-col gap-10\",\n                    children: navItems.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"relative group\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    href: item.link,\n                                    children: item.icon\n                                }, void 0, false, {\n                                    fileName: \"/home/baba/taskfyer/client/app/Components/MiniSidebar/MiniSidebar.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"u-triangle absolute top-[50%] translate-y-[-50%] left-8 text-xs pointer-events-none text-white bg-[#3aafae] px-2 py-1 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300\",\n                                    children: item.title\n                                }, void 0, false, {\n                                    fileName: \"/home/baba/taskfyer/client/app/Components/MiniSidebar/MiniSidebar.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, index, true, {\n                            fileName: \"/home/baba/taskfyer/client/app/Components/MiniSidebar/MiniSidebar.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/home/baba/taskfyer/client/app/Components/MiniSidebar/MiniSidebar.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-[1.5rem]\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"w-12 h-12 flex justify-center items-center border-2 border-[#EB4E31]  p-2 rounded-full\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public_icons_IconDeleteAll__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            strokeColor: \"#EB4E31\"\n                        }, void 0, false, {\n                            fileName: \"/home/baba/taskfyer/client/app/Components/MiniSidebar/MiniSidebar.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/baba/taskfyer/client/app/Components/MiniSidebar/MiniSidebar.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/baba/taskfyer/client/app/Components/MiniSidebar/MiniSidebar.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/baba/taskfyer/client/app/Components/MiniSidebar/MiniSidebar.tsx\",\n            lineNumber: 44,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/baba/taskfyer/client/app/Components/MiniSidebar/MiniSidebar.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n}\n_s(MiniSidebar, \"xbyQPtUVMO7MNj7WjJlpdWqRcTo=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_7__.usePathname\n    ];\n});\n_c = MiniSidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MiniSidebar);\nvar _c;\n$RefreshReg$(_c, \"MiniSidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9Db21wb25lbnRzL01pbmlTaWRlYmFyL01pbmlTaWRlYmFyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ2lEO0FBQ1E7QUFDQTtBQUNWO0FBQ1U7QUFHNUI7QUFDaUI7QUFDcEI7QUFFMUIsU0FBU1E7O0lBQ1AsTUFBTUMsV0FBV0gsNERBQVdBO0lBRTVCLE1BQU1JLGlCQUFpQixDQUFDQztRQUN0QixPQUFPRixhQUFhRSxPQUFPLFlBQVk7SUFDekM7SUFFQSxNQUFNQyxXQUFXO1FBQ2Y7WUFDRUMsb0JBQU0sOERBQUNWLDhEQUFRQTtnQkFBQ1csYUFBYUosZUFBZTs7Ozs7O1lBQzVDSyxPQUFPO1lBQ1BKLE1BQU07UUFDUjtRQUNBO1lBQ0VFLG9CQUFNLDhEQUFDWCxtRUFBYUE7Z0JBQUNZLGFBQWFKLGVBQWU7Ozs7OztZQUNqREssT0FBTztZQUNQSixNQUFNO1FBQ1I7UUFDQTtZQUNFRSxvQkFBTSw4REFBQ2IsK0RBQVNBO2dCQUFDYyxhQUFhSixlQUFlOzs7Ozs7WUFDN0NLLE9BQU87WUFDUEosTUFBTTtRQUNSO1FBQ0E7WUFDRUUsb0JBQU0sOERBQUNULG1FQUFhQTtnQkFBQ1UsYUFBYUosZUFBZTs7Ozs7O1lBQ2pESyxPQUFPO1lBQ1BKLE1BQU07UUFDUjtLQUNEO0lBQ0QscUJBQ0UsOERBQUNLO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBR0QsV0FBVTs4QkFDWEwsU0FBU08sR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNuQiw4REFBQ0M7NEJBQWVMLFdBQVU7OzhDQUN4Qiw4REFBQ1osaURBQUlBO29DQUFDa0IsTUFBTUgsS0FBS1QsSUFBSTs4Q0FBR1MsS0FBS1AsSUFBSTs7Ozs7OzhDQUdqQyw4REFBQ1c7b0NBQUtQLFdBQVU7OENBQ2JHLEtBQUtMLEtBQUs7Ozs7Ozs7MkJBTE5NOzs7Ozs7Ozs7OzhCQVdiLDhEQUFDTDtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ1E7d0JBQU9SLFdBQVU7a0NBQ2hCLDRFQUFDaEIsbUVBQWFBOzRCQUFDYSxhQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNdkM7R0FyRFNOOztRQUNVRix3REFBV0E7OztLQURyQkU7QUF1RFQsK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL0NvbXBvbmVudHMvTWluaVNpZGViYXIvTWluaVNpZGViYXIudHN4P2JkNTciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgSWNvbkNoZWNrIGZyb20gXCJAL3B1YmxpYy9pY29ucy9JY29uQ2hlY2tcIjtcbmltcG9ydCBJY29uRGVsZXRlQWxsIGZyb20gXCJAL3B1YmxpYy9pY29ucy9JY29uRGVsZXRlQWxsXCI7XG5pbXBvcnQgSWNvbkZpbGVDaGVjayBmcm9tIFwiQC9wdWJsaWMvaWNvbnMvSWNvbkZpbGVDaGVja1wiO1xuaW1wb3J0IEljb25HcmlkIGZyb20gXCJAL3B1YmxpYy9pY29ucy9JY29uR3JpZFwiO1xuaW1wb3J0IEljb25TdG9wd2F0Y2ggZnJvbSBcIkAvcHVibGljL2ljb25zL0ljb25TdG9wd2F0Y2hcIjtcbmltcG9ydCB7IGxpbmsgfSBmcm9tIFwiZnNcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUGF0aG5hbWUgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIE1pbmlTaWRlYmFyKCkge1xuICBjb25zdCBwYXRobmFtZSA9IHVzZVBhdGhuYW1lKCk7XG5cbiAgY29uc3QgZ2V0U3Ryb2tlQ29sb3IgPSAobGluazogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIHBhdGhuYW1lID09PSBsaW5rID8gXCIjM2FhZmFlXCIgOiBcIiM3MTcxN2FcIjtcbiAgfTtcblxuICBjb25zdCBuYXZJdGVtcyA9IFtcbiAgICB7XG4gICAgICBpY29uOiA8SWNvbkdyaWQgc3Ryb2tlQ29sb3I9e2dldFN0cm9rZUNvbG9yKFwiL1wiKX0gLz4sXG4gICAgICB0aXRsZTogXCJBbGxcIixcbiAgICAgIGxpbms6IFwiL1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgaWNvbjogPEljb25GaWxlQ2hlY2sgc3Ryb2tlQ29sb3I9e2dldFN0cm9rZUNvbG9yKFwiL2NvbXBsZXRlZFwiKX0gLz4sXG4gICAgICB0aXRsZTogXCJDb21wbGV0ZWRcIixcbiAgICAgIGxpbms6IFwiL2NvbXBsZXRlZFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgaWNvbjogPEljb25DaGVjayBzdHJva2VDb2xvcj17Z2V0U3Ryb2tlQ29sb3IoXCIvcGVuZGluZ1wiKX0gLz4sXG4gICAgICB0aXRsZTogXCJQZW5kaW5nXCIsXG4gICAgICBsaW5rOiBcIi9wZW5kaW5nXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBpY29uOiA8SWNvblN0b3B3YXRjaCBzdHJva2VDb2xvcj17Z2V0U3Ryb2tlQ29sb3IoXCIvb3ZlcmR1ZVwiKX0gLz4sXG4gICAgICB0aXRsZTogXCJPdmVyZHVlXCIsXG4gICAgICBsaW5rOiBcIi9vdmVyZHVlXCIsXG4gICAgfSxcbiAgXTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJhc2lzLVs1cmVtXSBmbGV4ICBiZy1bI2Y5ZjlmOV1cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOCBmbGV4LTEgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC0xMFwiPlxuICAgICAgICAgIHtuYXZJdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwicmVsYXRpdmUgZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17aXRlbS5saW5rfT57aXRlbS5pY29ufTwvTGluaz5cblxuICAgICAgICAgICAgICB7LyogSG92ZXIgVG9vbHRpcCAqL31cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidS10cmlhbmdsZSBhYnNvbHV0ZSB0b3AtWzUwJV0gdHJhbnNsYXRlLXktWy01MCVdIGxlZnQtOCB0ZXh0LXhzIHBvaW50ZXItZXZlbnRzLW5vbmUgdGV4dC13aGl0ZSBiZy1bIzNhYWZhZV0gcHgtMiBweS0xIHJvdW5kZWQtbWQgc2hhZG93LWxnIG9wYWNpdHktMCBncm91cC1ob3ZlcjpvcGFjaXR5LTEwMCB0cmFuc2l0aW9uLW9wYWNpdHkgZHVyYXRpb24tMzAwXCI+XG4gICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi1bMS41cmVtXVwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidy0xMiBoLTEyIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGJvcmRlci0yIGJvcmRlci1bI0VCNEUzMV0gIHAtMiByb3VuZGVkLWZ1bGxcIj5cbiAgICAgICAgICAgIDxJY29uRGVsZXRlQWxsIHN0cm9rZUNvbG9yPVwiI0VCNEUzMVwiIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1pbmlTaWRlYmFyO1xuIl0sIm5hbWVzIjpbIkljb25DaGVjayIsIkljb25EZWxldGVBbGwiLCJJY29uRmlsZUNoZWNrIiwiSWNvbkdyaWQiLCJJY29uU3RvcHdhdGNoIiwiTGluayIsInVzZVBhdGhuYW1lIiwiUmVhY3QiLCJNaW5pU2lkZWJhciIsInBhdGhuYW1lIiwiZ2V0U3Ryb2tlQ29sb3IiLCJsaW5rIiwibmF2SXRlbXMiLCJpY29uIiwic3Ryb2tlQ29sb3IiLCJ0aXRsZSIsImRpdiIsImNsYXNzTmFtZSIsInVsIiwibWFwIiwiaXRlbSIsImluZGV4IiwibGkiLCJocmVmIiwic3BhbiIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Components/MiniSidebar/MiniSidebar.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./public/icons/IconDeleteAll.tsx":
/*!****************************************!*\
  !*** ./public/icons/IconDeleteAll.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction IconDeleteAll(param) {\n    let { strokeColor = \"black\" } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n        xmlns: \"http://www.w3.org/2000/svg\",\n        width: \"18\",\n        height: \"22\",\n        viewBox: \"0 0 18 22\",\n        fill: \"none\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n            d: \"M7.79971 20.5998H3.5997C2.27421 20.5998 1.1997 19.5253 1.19971 18.1998L1.1998 3.79989C1.19981 2.47441 2.27432 1.3999 3.5998 1.3999H14.4001C15.7256 1.3999 16.8001 2.47442 16.8001 3.7999V11.5999M16.8001 20.5999L14.4001 18.1999M14.4001 18.1999L12.0001 15.7999M14.4001 18.1999L12.0001 20.5999M14.4001 18.1999L16.8001 15.7999M5.40008 6.1999H12.6001M5.40008 9.7999H12.6001M5.40008 13.3999H9.00008\",\n            stroke: strokeColor,\n            \"stroke-width\": \"2\",\n            \"stroke-linecap\": \"round\",\n            \"stroke-linejoin\": \"round\"\n        }, void 0, false, {\n            fileName: \"/home/baba/taskfyer/client/public/icons/IconDeleteAll.tsx\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/baba/taskfyer/client/public/icons/IconDeleteAll.tsx\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n_c = IconDeleteAll;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IconDeleteAll);\nvar _c;\n$RefreshReg$(_c, \"IconDeleteAll\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3B1YmxpYy9pY29ucy9JY29uRGVsZXRlQWxsLnRzeCIsIm1hcHBpbmdzIjoiOzs7OztBQUEwQjtBQUUxQixTQUFTQyxjQUFjLEtBQW1EO1FBQW5ELEVBQUVDLGNBQWMsT0FBTyxFQUE0QixHQUFuRDtJQUNyQixxQkFDRSw4REFBQ0M7UUFDQ0MsT0FBTTtRQUNOQyxPQUFNO1FBQ05DLFFBQU87UUFDUEMsU0FBUTtRQUNSQyxNQUFLO2tCQUVMLDRFQUFDQztZQUNDQyxHQUFFO1lBQ0ZDLFFBQVFUO1lBQ1JVLGdCQUFhO1lBQ2JDLGtCQUFlO1lBQ2ZDLG1CQUFnQjs7Ozs7Ozs7Ozs7QUFJeEI7S0FsQlNiO0FBb0JULCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3B1YmxpYy9pY29ucy9JY29uRGVsZXRlQWxsLnRzeD9jNWRkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gSWNvbkRlbGV0ZUFsbCh7IHN0cm9rZUNvbG9yID0gXCJibGFja1wiIH06IHsgc3Ryb2tlQ29sb3I/OiBzdHJpbmcgfSkge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgd2lkdGg9XCIxOFwiXG4gICAgICBoZWlnaHQ9XCIyMlwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDE4IDIyXCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTcuNzk5NzEgMjAuNTk5OEgzLjU5OTdDMi4yNzQyMSAyMC41OTk4IDEuMTk5NyAxOS41MjUzIDEuMTk5NzEgMTguMTk5OEwxLjE5OTggMy43OTk4OUMxLjE5OTgxIDIuNDc0NDEgMi4yNzQzMiAxLjM5OTkgMy41OTk4IDEuMzk5OUgxNC40MDAxQzE1LjcyNTYgMS4zOTk5IDE2LjgwMDEgMi40NzQ0MiAxNi44MDAxIDMuNzk5OVYxMS41OTk5TTE2LjgwMDEgMjAuNTk5OUwxNC40MDAxIDE4LjE5OTlNMTQuNDAwMSAxOC4xOTk5TDEyLjAwMDEgMTUuNzk5OU0xNC40MDAxIDE4LjE5OTlMMTIuMDAwMSAyMC41OTk5TTE0LjQwMDEgMTguMTk5OUwxNi44MDAxIDE1Ljc5OTlNNS40MDAwOCA2LjE5OTlIMTIuNjAwMU01LjQwMDA4IDkuNzk5OUgxMi42MDAxTTUuNDAwMDggMTMuMzk5OUg5LjAwMDA4XCJcbiAgICAgICAgc3Ryb2tlPXtzdHJva2VDb2xvcn1cbiAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMlwiXG4gICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxuICAgICAgICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJY29uRGVsZXRlQWxsO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSWNvbkRlbGV0ZUFsbCIsInN0cm9rZUNvbG9yIiwic3ZnIiwieG1sbnMiLCJ3aWR0aCIsImhlaWdodCIsInZpZXdCb3giLCJmaWxsIiwicGF0aCIsImQiLCJzdHJva2UiLCJzdHJva2Utd2lkdGgiLCJzdHJva2UtbGluZWNhcCIsInN0cm9rZS1saW5lam9pbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./public/icons/IconDeleteAll.tsx\n"));

/***/ })

});