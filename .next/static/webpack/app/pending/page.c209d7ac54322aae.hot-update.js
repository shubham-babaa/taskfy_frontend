"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/pending/page",{

/***/ "(app-pages-browser)/./app/pending/page.tsx":
/*!******************************!*\
  !*** ./app/pending/page.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _context_taskContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/taskContext */ \"(app-pages-browser)/./context/taskContext.js\");\n/* harmony import */ var _hooks_useUserRedirect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks/useUserRedirect */ \"(app-pages-browser)/./hooks/useUserRedirect.tsx\");\n/* harmony import */ var _utils_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/utilities */ \"(app-pages-browser)/./utils/utilities.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Components_Filters_Filters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/Filters/Filters */ \"(app-pages-browser)/./app/Components/Filters/Filters.tsx\");\n/* harmony import */ var _Components_TaskItem_TaskItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/TaskItem/TaskItem */ \"(app-pages-browser)/./app/Components/TaskItem/TaskItem.tsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* harmony import */ var _utils_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/animations */ \"(app-pages-browser)/./utils/animations.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    (0,_hooks_useUserRedirect__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"/login\");\n    const { tasks, openModalForAdd, priority, setPriority } = (0,_context_taskContext__WEBPACK_IMPORTED_MODULE_1__.useTasks)();\n    const pendingTasks = tasks.filter((task)=>!task.completed);\n    const filtered = (0,_utils_utilities__WEBPACK_IMPORTED_MODULE_3__.filteredTasks)(pendingTasks, priority);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        setPriority(\"all\");\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"m-6 h-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-2xl font-bold\",\n                        children: \"Pending Tasks\"\n                    }, void 0, false, {\n                        fileName: \"/home/baba/taskfyer/client/app/pending/page.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Filters_Filters__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/baba/taskfyer/client/app/pending/page.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/baba/taskfyer/client/app/pending/page.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col sm:flex-row gap-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Filters_Filters__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                            fileName: \"/home/baba/taskfyer/client/app/pending/page.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MiniSidebar, {}, void 0, false, {\n                            fileName: \"/home/baba/taskfyer/client/app/pending/page.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/baba/taskfyer/client/app/pending/page.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/baba/taskfyer/client/app/pending/page.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {\n                className: \"pb-[2rem] mt-6 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-[1.5rem]\",\n                variants: _utils_animations__WEBPACK_IMPORTED_MODULE_7__.container,\n                initial: \"hidden\",\n                animate: \"visible\",\n                children: [\n                    filtered.map((task, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_TaskItem_TaskItem__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            task: task\n                        }, i, false, {\n                            fileName: \"/home/baba/taskfyer/client/app/pending/page.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, this)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.button, {\n                        className: \"h-[16rem] w-full py-2 rounded-md text-lg font-medium text-gray-500 border-dashed border-2 border-gray-400 hover:bg-gray-300 hover:border-none transition duration-200 ease-in-out\",\n                        onClick: openModalForAdd,\n                        variants: _utils_animations__WEBPACK_IMPORTED_MODULE_7__.item,\n                        children: \"Add New Task\"\n                    }, void 0, false, {\n                        fileName: \"/home/baba/taskfyer/client/app/pending/page.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/baba/taskfyer/client/app/pending/page.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/baba/taskfyer/client/app/pending/page.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"lOBddkTWKmtRH9B/O+DJxssulFs=\", false, function() {\n    return [\n        _hooks_useUserRedirect__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        _context_taskContext__WEBPACK_IMPORTED_MODULE_1__.useTasks\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wZW5kaW5nL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDaUQ7QUFDQztBQUVBO0FBQ2hCO0FBQ2tCO0FBQ0c7QUFDaEI7QUFDYztBQUV0QyxTQUFTUzs7SUFDdEJSLGtFQUFXQSxDQUFDO0lBRVosTUFBTSxFQUFFUyxLQUFLLEVBQUVDLGVBQWUsRUFBRUMsUUFBUSxFQUFFQyxXQUFXLEVBQUUsR0FBR2IsOERBQVFBO0lBRWxFLE1BQU1jLGVBQWVKLE1BQU1LLE1BQU0sQ0FBQyxDQUFDQyxPQUFlLENBQUNBLEtBQUtDLFNBQVM7SUFFakUsTUFBTUMsV0FBV2hCLCtEQUFhQSxDQUFDWSxjQUFjRjtJQUU3Q1QsZ0RBQVNBLENBQUM7UUFDUlUsWUFBWTtJQUNkLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDTTtRQUFLQyxXQUFVOzswQkFDZCw4REFBQ0M7Z0JBQUlELFdBQVU7O2tDQUNiLDhEQUFDRTt3QkFBR0YsV0FBVTtrQ0FBcUI7Ozs7OztrQ0FDbkMsOERBQUNoQixtRUFBT0E7Ozs7Ozs7Ozs7OzBCQUVWLDhEQUFDaUI7Z0JBQUlELFdBQVU7MEJBQ2IsNEVBQUNDO29CQUFJRCxXQUFVOztzQ0FDYiw4REFBQ2hCLG1FQUFPQTs7Ozs7c0NBQ1IsOERBQUNtQjs7Ozs7Ozs7Ozs7Ozs7OzswQkFJTCw4REFBQ2pCLGlEQUFNQSxDQUFDZSxHQUFHO2dCQUNURCxXQUFVO2dCQUNWSSxVQUFVakIsd0RBQVNBO2dCQUNuQmtCLFNBQVE7Z0JBQ1JDLFNBQVE7O29CQUVQUixTQUFTUyxHQUFHLENBQUMsQ0FBQ1gsTUFBWVksa0JBQ3pCLDhEQUFDdkIscUVBQVFBOzRCQUFTVyxNQUFNQTsyQkFBVFk7Ozs7O2tDQUVqQiw4REFBQ3RCLGlEQUFNQSxDQUFDdUIsTUFBTTt3QkFDWlQsV0FBVTt3QkFFVlUsU0FBU25CO3dCQUNUYSxVQUFVaEIsbURBQUlBO2tDQUNmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNVDtHQTlDd0JDOztRQUN0QlIsOERBQVdBO1FBRStDRCwwREFBUUE7OztLQUg1Q1MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BlbmRpbmcvcGFnZS50c3g/ZDgwZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZVRhc2tzIH0gZnJvbSBcIkAvY29udGV4dC90YXNrQ29udGV4dFwiO1xuaW1wb3J0IHVzZVJlZGlyZWN0IGZyb20gXCJAL2hvb2tzL3VzZVVzZXJSZWRpcmVjdFwiO1xuaW1wb3J0IHsgVGFzayB9IGZyb20gXCJAL3V0aWxzL3R5cGVzXCI7XG5pbXBvcnQgeyBmaWx0ZXJlZFRhc2tzIH0gZnJvbSBcIkAvdXRpbHMvdXRpbGl0aWVzXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGaWx0ZXJzIGZyb20gXCIuLi9Db21wb25lbnRzL0ZpbHRlcnMvRmlsdGVyc1wiO1xuaW1wb3J0IFRhc2tJdGVtIGZyb20gXCIuLi9Db21wb25lbnRzL1Rhc2tJdGVtL1Rhc2tJdGVtXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgY29udGFpbmVyLCBpdGVtIH0gZnJvbSBcIkAvdXRpbHMvYW5pbWF0aW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICB1c2VSZWRpcmVjdChcIi9sb2dpblwiKTtcblxuICBjb25zdCB7IHRhc2tzLCBvcGVuTW9kYWxGb3JBZGQsIHByaW9yaXR5LCBzZXRQcmlvcml0eSB9ID0gdXNlVGFza3MoKTtcblxuICBjb25zdCBwZW5kaW5nVGFza3MgPSB0YXNrcy5maWx0ZXIoKHRhc2s6IFRhc2spID0+ICF0YXNrLmNvbXBsZXRlZCk7XG5cbiAgY29uc3QgZmlsdGVyZWQgPSBmaWx0ZXJlZFRhc2tzKHBlbmRpbmdUYXNrcywgcHJpb3JpdHkpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0UHJpb3JpdHkoXCJhbGxcIik7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cIm0tNiBoLWZ1bGxcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZFwiPlBlbmRpbmcgVGFza3M8L2gxPlxuICAgICAgICA8RmlsdGVycyAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNtOmZsZXgtcm93IGdhcC0yXCI+XG4gICAgICAgICAgPEZpbHRlcnMgLz5cbiAgICAgICAgICA8TWluaVNpZGViYXIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgY2xhc3NOYW1lPVwicGItWzJyZW1dIG10LTYgZ3JpZCBncmlkLWNvbHMtW3JlcGVhdChhdXRvLWZpbGwsbWlubWF4KDMwMHB4LDFmcikpXSBnYXAtWzEuNXJlbV1cIlxuICAgICAgICB2YXJpYW50cz17Y29udGFpbmVyfVxuICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcbiAgICAgICAgYW5pbWF0ZT1cInZpc2libGVcIlxuICAgICAgPlxuICAgICAgICB7ZmlsdGVyZWQubWFwKCh0YXNrOiBUYXNrLCBpOiBudW1iZXIpID0+IChcbiAgICAgICAgICA8VGFza0l0ZW0ga2V5PXtpfSB0YXNrPXt0YXNrfSAvPlxuICAgICAgICApKX1cbiAgICAgICAgPG1vdGlvbi5idXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJoLVsxNnJlbV0gdy1mdWxsIHB5LTIgcm91bmRlZC1tZCB0ZXh0LWxnIGZvbnQtbWVkaXVtIHRleHQtZ3JheS01MDAgYm9yZGVyLWRhc2hlZCBib3JkZXItMiBib3JkZXItZ3JheS00MDBcbiAgICAgICAgICBob3ZlcjpiZy1ncmF5LTMwMCBob3Zlcjpib3JkZXItbm9uZSB0cmFuc2l0aW9uIGR1cmF0aW9uLTIwMCBlYXNlLWluLW91dFwiXG4gICAgICAgICAgb25DbGljaz17b3Blbk1vZGFsRm9yQWRkfVxuICAgICAgICAgIHZhcmlhbnRzPXtpdGVtfVxuICAgICAgICA+XG4gICAgICAgICAgQWRkIE5ldyBUYXNrXG4gICAgICAgIDwvbW90aW9uLmJ1dHRvbj5cbiAgICAgIDwvbW90aW9uLmRpdj5cbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlVGFza3MiLCJ1c2VSZWRpcmVjdCIsImZpbHRlcmVkVGFza3MiLCJ1c2VFZmZlY3QiLCJGaWx0ZXJzIiwiVGFza0l0ZW0iLCJtb3Rpb24iLCJjb250YWluZXIiLCJpdGVtIiwiSG9tZSIsInRhc2tzIiwib3Blbk1vZGFsRm9yQWRkIiwicHJpb3JpdHkiLCJzZXRQcmlvcml0eSIsInBlbmRpbmdUYXNrcyIsImZpbHRlciIsInRhc2siLCJjb21wbGV0ZWQiLCJmaWx0ZXJlZCIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJoMSIsIk1pbmlTaWRlYmFyIiwidmFyaWFudHMiLCJpbml0aWFsIiwiYW5pbWF0ZSIsIm1hcCIsImkiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/pending/page.tsx\n"));

/***/ })

});