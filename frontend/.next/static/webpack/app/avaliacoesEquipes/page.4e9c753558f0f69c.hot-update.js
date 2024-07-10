"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/avaliacoesEquipes/page",{

/***/ "(app-pages-browser)/./src/app/avaliacoesEquipes/page.tsx":
/*!********************************************!*\
  !*** ./src/app/avaliacoesEquipes/page.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n// @ts-ignore\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst AvaliacoesEquipe = ()=>{\n    _s();\n    const [avaliacoes, setAvaliacoes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchAvaliacoes = async ()=>{\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://localhost:3001/api/avaliacoes\");\n                setAvaliacoes(response.data);\n            } catch (error) {\n                console.error(\"Erro ao buscar avalia\\xe7\\xf5es:\", error);\n                alert(\"Erro ao buscar avalia\\xe7\\xf5es\");\n            }\n        };\n        fetchAvaliacoes();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-4xl mx-auto my-8 p-6 bg-black shadow-md rounded-md\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-2xl font-bold mb-4\",\n                children: \"Avalia\\xe7\\xf5es de Equipes\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\schmi\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Faculdade\\\\Desenvolvimentos de SI\\\\TRABALHO FINAL\\\\TrabalhoFinalCerto\\\\frontend\\\\src\\\\app\\\\avaliacoesEquipes\\\\page.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: avaliacoes.map((avaliacao)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"Avaliador:\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\schmi\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Faculdade\\\\Desenvolvimentos de SI\\\\TRABALHO FINAL\\\\TrabalhoFinalCerto\\\\frontend\\\\src\\\\app\\\\avaliacoesEquipes\\\\page.tsx\",\n                                        lineNumber: 30,\n                                        columnNumber: 16\n                                    }, undefined),\n                                    \" \",\n                                    avaliacao.nome_avaliador\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\schmi\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Faculdade\\\\Desenvolvimentos de SI\\\\TRABALHO FINAL\\\\TrabalhoFinalCerto\\\\frontend\\\\src\\\\app\\\\avaliacoesEquipes\\\\page.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"Equipe:\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\schmi\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Faculdade\\\\Desenvolvimentos de SI\\\\TRABALHO FINAL\\\\TrabalhoFinalCerto\\\\frontend\\\\src\\\\app\\\\avaliacoesEquipes\\\\page.tsx\",\n                                        lineNumber: 31,\n                                        columnNumber: 16\n                                    }, undefined),\n                                    \" \",\n                                    avaliacao.nome_equipe\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\schmi\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Faculdade\\\\Desenvolvimentos de SI\\\\TRABALHO FINAL\\\\TrabalhoFinalCerto\\\\frontend\\\\src\\\\app\\\\avaliacoesEquipes\\\\page.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"Notas:\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\schmi\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Faculdade\\\\Desenvolvimentos de SI\\\\TRABALHO FINAL\\\\TrabalhoFinalCerto\\\\frontend\\\\src\\\\app\\\\avaliacoesEquipes\\\\page.tsx\",\n                                        lineNumber: 32,\n                                        columnNumber: 16\n                                    }, undefined),\n                                    \" \",\n                                    avaliacao.nota1,\n                                    \", \",\n                                    avaliacao.nota2,\n                                    \", \",\n                                    avaliacao.nota3,\n                                    \", \",\n                                    avaliacao.nota4,\n                                    \", \",\n                                    avaliacao.nota5\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\schmi\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Faculdade\\\\Desenvolvimentos de SI\\\\TRABALHO FINAL\\\\TrabalhoFinalCerto\\\\frontend\\\\src\\\\app\\\\avaliacoesEquipes\\\\page.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, avaliacao.id, true, {\n                        fileName: \"C:\\\\Users\\\\schmi\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Faculdade\\\\Desenvolvimentos de SI\\\\TRABALHO FINAL\\\\TrabalhoFinalCerto\\\\frontend\\\\src\\\\app\\\\avaliacoesEquipes\\\\page.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\schmi\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Faculdade\\\\Desenvolvimentos de SI\\\\TRABALHO FINAL\\\\TrabalhoFinalCerto\\\\frontend\\\\src\\\\app\\\\avaliacoesEquipes\\\\page.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\schmi\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Faculdade\\\\Desenvolvimentos de SI\\\\TRABALHO FINAL\\\\TrabalhoFinalCerto\\\\frontend\\\\src\\\\app\\\\avaliacoesEquipes\\\\page.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AvaliacoesEquipe, \"YYMnUsanM8WTWQzfgRnheJWEbqU=\");\n_c = AvaliacoesEquipe;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AvaliacoesEquipe);\nvar _c;\n$RefreshReg$(_c, \"AvaliacoesEquipe\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYXZhbGlhY29lc0VxdWlwZXMvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxhQUFhOzs7QUFHc0M7QUFDekI7QUFFMUIsTUFBTUksbUJBQTZCOztJQUNqQyxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR0osK0NBQVFBLENBQUMsRUFBRTtJQUUvQ0QsZ0RBQVNBLENBQUM7UUFDUixNQUFNTSxrQkFBa0I7WUFDdEIsSUFBSTtnQkFDRixNQUFNQyxXQUFXLE1BQU1MLDZDQUFLQSxDQUFDTSxHQUFHLENBQUM7Z0JBQ2pDSCxjQUFjRSxTQUFTRSxJQUFJO1lBQzdCLEVBQUUsT0FBT0MsT0FBTztnQkFDZEMsUUFBUUQsS0FBSyxDQUFDLG9DQUE4QkE7Z0JBQzVDRSxNQUFNO1lBQ1I7UUFDRjtRQUVBTjtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDTztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQTBCOzs7Ozs7MEJBQ3hDLDhEQUFDRTswQkFDRVosV0FBV2EsR0FBRyxDQUFDLENBQUNDLDBCQUNmLDhEQUFDQzt3QkFBc0JMLFdBQVU7OzBDQUMvQiw4REFBQ007O2tEQUFFLDhEQUFDQztrREFBTzs7Ozs7O29DQUFtQjtvQ0FBRUgsVUFBVUksY0FBYzs7Ozs7OzswQ0FDeEQsOERBQUNGOztrREFBRSw4REFBQ0M7a0RBQU87Ozs7OztvQ0FBZ0I7b0NBQUVILFVBQVVLLFdBQVc7Ozs7Ozs7MENBQ2xELDhEQUFDSDs7a0RBQUUsOERBQUNDO2tEQUFPOzs7Ozs7b0NBQWU7b0NBQUVILFVBQVVNLEtBQUs7b0NBQUM7b0NBQUdOLFVBQVVPLEtBQUs7b0NBQUM7b0NBQUdQLFVBQVVRLEtBQUs7b0NBQUM7b0NBQUdSLFVBQVVTLEtBQUs7b0NBQUM7b0NBQUdULFVBQVVVLEtBQUs7Ozs7Ozs7O3VCQUhoSFYsVUFBVVcsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztBQVMvQjtHQS9CTTFCO0tBQUFBO0FBaUNOLCtEQUFlQSxnQkFBZ0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9hdmFsaWFjb2VzRXF1aXBlcy9wYWdlLnRzeD9lNDM3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEB0cy1pZ25vcmVcclxuJ3VzZSBjbGllbnQnO1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCBBdmFsaWFjb2VzRXF1aXBlOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCBbYXZhbGlhY29lcywgc2V0QXZhbGlhY29lc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaEF2YWxpYWNvZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvYXZhbGlhY29lcycpO1xyXG4gICAgICAgIHNldEF2YWxpYWNvZXMocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJybyBhbyBidXNjYXIgYXZhbGlhw6fDtWVzOicsIGVycm9yKTtcclxuICAgICAgICBhbGVydCgnRXJybyBhbyBidXNjYXIgYXZhbGlhw6fDtWVzJyk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2hBdmFsaWFjb2VzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy00eGwgbXgtYXV0byBteS04IHAtNiBiZy1ibGFjayBzaGFkb3ctbWQgcm91bmRlZC1tZFwiPlxyXG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIG1iLTRcIj5BdmFsaWHDp8O1ZXMgZGUgRXF1aXBlczwvaDI+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7YXZhbGlhY29lcy5tYXAoKGF2YWxpYWNhbzogYW55KSA9PiAoXHJcbiAgICAgICAgICA8bGkga2V5PXthdmFsaWFjYW8uaWR9IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgPHA+PHN0cm9uZz5BdmFsaWFkb3I6PC9zdHJvbmc+IHthdmFsaWFjYW8ubm9tZV9hdmFsaWFkb3J9PC9wPlxyXG4gICAgICAgICAgICA8cD48c3Ryb25nPkVxdWlwZTo8L3N0cm9uZz4ge2F2YWxpYWNhby5ub21lX2VxdWlwZX08L3A+XHJcbiAgICAgICAgICAgIDxwPjxzdHJvbmc+Tm90YXM6PC9zdHJvbmc+IHthdmFsaWFjYW8ubm90YTF9LCB7YXZhbGlhY2FvLm5vdGEyfSwge2F2YWxpYWNhby5ub3RhM30sIHthdmFsaWFjYW8ubm90YTR9LCB7YXZhbGlhY2FvLm5vdGE1fTwvcD5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXZhbGlhY29lc0VxdWlwZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJheGlvcyIsIkF2YWxpYWNvZXNFcXVpcGUiLCJhdmFsaWFjb2VzIiwic2V0QXZhbGlhY29lcyIsImZldGNoQXZhbGlhY29lcyIsInJlc3BvbnNlIiwiZ2V0IiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImFsZXJ0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJ1bCIsIm1hcCIsImF2YWxpYWNhbyIsImxpIiwicCIsInN0cm9uZyIsIm5vbWVfYXZhbGlhZG9yIiwibm9tZV9lcXVpcGUiLCJub3RhMSIsIm5vdGEyIiwibm90YTMiLCJub3RhNCIsIm5vdGE1IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/avaliacoesEquipes/page.tsx\n"));

/***/ })

});