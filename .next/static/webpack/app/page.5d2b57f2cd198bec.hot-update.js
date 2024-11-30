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

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _context_taskContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/taskContext */ \"(app-pages-browser)/./context/taskContext.js\");\n/* harmony import */ var _hooks_useUserRedirect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks/useUserRedirect */ \"(app-pages-browser)/./hooks/useUserRedirect.tsx\");\n/* harmony import */ var _Components_Filters_Filters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/Filters/Filters */ \"(app-pages-browser)/./app/Components/Filters/Filters.tsx\");\n/* harmony import */ var _Components_TaskItem_TaskItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/TaskItem/TaskItem */ \"(app-pages-browser)/./app/Components/TaskItem/TaskItem.tsx\");\n/* harmony import */ var _utils_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/utilities */ \"(app-pages-browser)/./utils/utilities.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* harmony import */ var _utils_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/animations */ \"(app-pages-browser)/./utils/animations.tsx\");\n/* harmony import */ var _Components_MiniSidebar_MiniSidebar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Components/MiniSidebar/MiniSidebar */ \"(app-pages-browser)/./app/Components/MiniSidebar/MiniSidebar.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    (0,_hooks_useUserRedirect__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"/login\");\n    const { tasks, openModalForAdd, priority, setPriority } = (0,_context_taskContext__WEBPACK_IMPORTED_MODULE_1__.useTasks)();\n    const filtered = (0,_utils_utilities__WEBPACK_IMPORTED_MODULE_5__.filteredTasks)(tasks, priority);\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{\n        setPriority(\"all\");\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"m-6 h-full overflow-x-hidden px-2 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold\",\n                children: \"All Tasks\"\n            }, void 0, false, {\n                fileName: \"/home/baba/taskfyer/client/app/page.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex gap-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Filters_Filters__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                            fileName: \"/home/baba/taskfyer/client/app/page.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_MiniSidebar_MiniSidebar__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                            fileName: \"/home/baba/taskfyer/client/app/page.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/baba/taskfyer/client/app/page.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/baba/taskfyer/client/app/page.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {\n                className: \"pb-[2rem] mt-6 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-[1.5rem]\",\n                variants: _utils_animations__WEBPACK_IMPORTED_MODULE_7__.container,\n                initial: \"hidden\",\n                animate: \"visible\",\n                children: [\n                    filtered.map((task, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_TaskItem_TaskItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            task: task\n                        }, i, false, {\n                            fileName: \"/home/baba/taskfyer/client/app/page.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, this)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.button, {\n                        className: \"h-[16rem] w-full py-2 rounded-md text-lg font-medium text-gray-500 border-dashed border-2 border-gray-400 hover:bg-gray-300 hover:border-none transition duration-200 ease-in-out\",\n                        onClick: openModalForAdd,\n                        variants: _utils_animations__WEBPACK_IMPORTED_MODULE_7__.item,\n                        children: \"Add New Task\"\n                    }, void 0, false, {\n                        fileName: \"/home/baba/taskfyer/client/app/page.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/baba/taskfyer/client/app/page.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/baba/taskfyer/client/app/page.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"lOBddkTWKmtRH9B/O+DJxssulFs=\", false, function() {\n    return [\n        _hooks_useUserRedirect__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        _context_taskContext__WEBPACK_IMPORTED_MODULE_1__.useTasks\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNpRDtBQUNDO0FBQ0M7QUFDRztBQUVKO0FBQ2hCO0FBQ0s7QUFDYztBQUNVO0FBRWhELFNBQVNVOztJQUN0QlQsa0VBQVdBLENBQUM7SUFFWixNQUFNLEVBQUVVLEtBQUssRUFBRUMsZUFBZSxFQUFFQyxRQUFRLEVBQUVDLFdBQVcsRUFBRSxHQUFHZCw4REFBUUE7SUFFbEUsTUFBTWUsV0FBV1gsK0RBQWFBLENBQUNPLE9BQU9FO0lBRXRDUixnREFBU0EsQ0FBQztRQUNSUyxZQUFZO0lBQ2QsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNFO1FBQUtDLFdBQVU7OzBCQUNkLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBcUI7Ozs7OzswQkFDbkMsOERBQUNFO2dCQUFJRixXQUFVOzBCQUNiLDRFQUFDRTtvQkFBSUYsV0FBVTs7c0NBQ2IsOERBQUNmLG1FQUFPQTs7Ozs7c0NBQ1IsOERBQUNPLDJFQUFXQTs7Ozs7Ozs7Ozs7Ozs7OzswQkFJaEIsOERBQUNILGlEQUFNQSxDQUFDYSxHQUFHO2dCQUNURixXQUFVO2dCQUNWRyxVQUFVYix3REFBU0E7Z0JBQ25CYyxTQUFRO2dCQUNSQyxTQUFROztvQkFFUFAsU0FBU1EsR0FBRyxDQUFDLENBQUNDLE1BQVlDLGtCQUN6Qiw4REFBQ3RCLHFFQUFRQTs0QkFBU3FCLE1BQU1BOzJCQUFUQzs7Ozs7a0NBRWpCLDhEQUFDbkIsaURBQU1BLENBQUNvQixNQUFNO3dCQUNaVCxXQUFVO3dCQUVWVSxTQUFTZjt3QkFDVFEsVUFBVVosbURBQUlBO2tDQUNmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNVDtHQXpDd0JFOztRQUN0QlQsOERBQVdBO1FBRStDRCwwREFBUUE7OztLQUg1Q1UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UudHN4Pzc2MDMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VUYXNrcyB9IGZyb20gXCJAL2NvbnRleHQvdGFza0NvbnRleHRcIjtcbmltcG9ydCB1c2VSZWRpcmVjdCBmcm9tIFwiQC9ob29rcy91c2VVc2VyUmVkaXJlY3RcIjtcbmltcG9ydCBGaWx0ZXJzIGZyb20gXCIuL0NvbXBvbmVudHMvRmlsdGVycy9GaWx0ZXJzXCI7XG5pbXBvcnQgVGFza0l0ZW0gZnJvbSBcIi4vQ29tcG9uZW50cy9UYXNrSXRlbS9UYXNrSXRlbVwiO1xuaW1wb3J0IHsgVGFzayB9IGZyb20gXCJAL3V0aWxzL3R5cGVzXCI7XG5pbXBvcnQgeyBmaWx0ZXJlZFRhc2tzIH0gZnJvbSBcIkAvdXRpbHMvdXRpbGl0aWVzXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyBjb250YWluZXIsIGl0ZW0gfSBmcm9tIFwiQC91dGlscy9hbmltYXRpb25zXCI7XG5pbXBvcnQgTWluaVNpZGViYXIgZnJvbSBcIi4vQ29tcG9uZW50cy9NaW5pU2lkZWJhci9NaW5pU2lkZWJhclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICB1c2VSZWRpcmVjdChcIi9sb2dpblwiKTtcblxuICBjb25zdCB7IHRhc2tzLCBvcGVuTW9kYWxGb3JBZGQsIHByaW9yaXR5LCBzZXRQcmlvcml0eSB9ID0gdXNlVGFza3MoKTtcblxuICBjb25zdCBmaWx0ZXJlZCA9IGZpbHRlcmVkVGFza3ModGFza3MsIHByaW9yaXR5KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFByaW9yaXR5KFwiYWxsXCIpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJtLTYgaC1mdWxsIG92ZXJmbG93LXgtaGlkZGVuIHB4LTIgXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkXCI+QWxsIFRhc2tzPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTJcIj5cbiAgICAgICAgICA8RmlsdGVycyAvPlxuICAgICAgICAgIDxNaW5pU2lkZWJhciAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8bW90aW9uLmRpdlxuICAgICAgICBjbGFzc05hbWU9XCJwYi1bMnJlbV0gbXQtNiBncmlkIGdyaWQtY29scy1bcmVwZWF0KGF1dG8tZmlsbCxtaW5tYXgoMzAwcHgsMWZyKSldIGdhcC1bMS41cmVtXVwiXG4gICAgICAgIHZhcmlhbnRzPXtjb250YWluZXJ9XG4gICAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxuICAgICAgICBhbmltYXRlPVwidmlzaWJsZVwiXG4gICAgICA+XG4gICAgICAgIHtmaWx0ZXJlZC5tYXAoKHRhc2s6IFRhc2ssIGk6IG51bWJlcikgPT4gKFxuICAgICAgICAgIDxUYXNrSXRlbSBrZXk9e2l9IHRhc2s9e3Rhc2t9IC8+XG4gICAgICAgICkpfVxuICAgICAgICA8bW90aW9uLmJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cImgtWzE2cmVtXSB3LWZ1bGwgcHktMiByb3VuZGVkLW1kIHRleHQtbGcgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMCBib3JkZXItZGFzaGVkIGJvcmRlci0yIGJvcmRlci1ncmF5LTQwMFxuICAgICAgICAgIGhvdmVyOmJnLWdyYXktMzAwIGhvdmVyOmJvcmRlci1ub25lIHRyYW5zaXRpb24gZHVyYXRpb24tMjAwIGVhc2UtaW4tb3V0XCJcbiAgICAgICAgICBvbkNsaWNrPXtvcGVuTW9kYWxGb3JBZGR9XG4gICAgICAgICAgdmFyaWFudHM9e2l0ZW19XG4gICAgICAgID5cbiAgICAgICAgICBBZGQgTmV3IFRhc2tcbiAgICAgICAgPC9tb3Rpb24uYnV0dG9uPlxuICAgICAgPC9tb3Rpb24uZGl2PlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VUYXNrcyIsInVzZVJlZGlyZWN0IiwiRmlsdGVycyIsIlRhc2tJdGVtIiwiZmlsdGVyZWRUYXNrcyIsInVzZUVmZmVjdCIsIm1vdGlvbiIsImNvbnRhaW5lciIsIml0ZW0iLCJNaW5pU2lkZWJhciIsIkhvbWUiLCJ0YXNrcyIsIm9wZW5Nb2RhbEZvckFkZCIsInByaW9yaXR5Iiwic2V0UHJpb3JpdHkiLCJmaWx0ZXJlZCIsIm1haW4iLCJjbGFzc05hbWUiLCJoMSIsImRpdiIsInZhcmlhbnRzIiwiaW5pdGlhbCIsImFuaW1hdGUiLCJtYXAiLCJ0YXNrIiwiaSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});