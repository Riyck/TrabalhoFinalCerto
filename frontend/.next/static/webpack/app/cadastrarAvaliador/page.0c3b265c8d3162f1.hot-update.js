"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/cadastrarAvaliador/page",{

/***/ "(app-pages-browser)/./src/app/cadastrarAvaliador/page.tsx":
/*!*********************************************!*\
  !*** ./src/app/cadastrarAvaliador/page.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n// Função para lidar com o envio do formulário\nconst handleSubmit = async (event)=>{\n    event.preventDefault();\n    const formData = new FormData(event.currentTarget);\n    const nome = formData.get(\"nome\");\n    const login = formData.get(\"login\");\n    const senha = formData.get(\"senha\");\n    try {\n        await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"http://localhost:3001/api/avaliadores\", {\n            nome,\n            login,\n            senha\n        });\n        alert(\"Avaliador cadastrado com sucesso!\");\n    // Redirecionamento ou lógica adicional após o sucesso\n    } catch (error) {\n        console.error(\"Erro ao cadastrar avaliador:\", error);\n        alert(\"Erro ao cadastrar avaliador\");\n    }\n};\n// Componente que renderiza o formulário\nconst CadastrarAvaliador = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen flex flex-col items-center justify-center my-8\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: \"flex flex-col gap-3 p-12 items-center w-[50%] bg-slate-700 rounded-md border-white border-2 border-spacing-2\",\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col gap-3 items-center justify-center w-[97%]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"nome\",\n                            children: \"Nome:\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\schmi\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Faculdade\\\\Desenvolvimentos de SI\\\\TRABALHO FINAL\\\\TrabalhoFinalCerto\\\\frontend\\\\src\\\\app\\\\cadastrarAvaliador\\\\page.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            id: \"nome\",\n                            name: \"nome\",\n                            required: true,\n                            className: \"border border-gray-300 w-[50%] rounded-md px-3 py-2 mb-3 text-black\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\schmi\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Faculdade\\\\Desenvolvimentos de SI\\\\TRABALHO FINAL\\\\TrabalhoFinalCerto\\\\frontend\\\\src\\\\app\\\\cadastrarAvaliador\\\\page.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\schmi\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Faculdade\\\\Desenvolvimentos de SI\\\\TRABALHO FINAL\\\\TrabalhoFinalCerto\\\\frontend\\\\src\\\\app\\\\cadastrarAvaliador\\\\page.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col gap-3 items-center justify-center w-[97%]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"login\",\n                            children: \"Login:\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\schmi\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Faculdade\\\\Desenvolvimentos de SI\\\\TRABALHO FINAL\\\\TrabalhoFinalCerto\\\\frontend\\\\src\\\\app\\\\cadastrarAvaliador\\\\page.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            id: \"login\",\n                            name: \"login\",\n                            required: true,\n                            className: \"border border-gray-300 w-[50%] rounded-md px-3 py-2 mb-3 text-black\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\schmi\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Faculdade\\\\Desenvolvimentos de SI\\\\TRABALHO FINAL\\\\TrabalhoFinalCerto\\\\frontend\\\\src\\\\app\\\\cadastrarAvaliador\\\\page.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\schmi\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Faculdade\\\\Desenvolvimentos de SI\\\\TRABALHO FINAL\\\\TrabalhoFinalCerto\\\\frontend\\\\src\\\\app\\\\cadastrarAvaliador\\\\page.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col gap-3 items-center justify-center w-[97%]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"senha\",\n                            children: \"Senha:\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\schmi\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Faculdade\\\\Desenvolvimentos de SI\\\\TRABALHO FINAL\\\\TrabalhoFinalCerto\\\\frontend\\\\src\\\\app\\\\cadastrarAvaliador\\\\page.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"password\",\n                            id: \"senha\",\n                            name: \"senha\",\n                            required: true,\n                            className: \"border border-gray-300 w-[50%] rounded-md px-3 py-2 mb-3 text-black\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\schmi\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Faculdade\\\\Desenvolvimentos de SI\\\\TRABALHO FINAL\\\\TrabalhoFinalCerto\\\\frontend\\\\src\\\\app\\\\cadastrarAvaliador\\\\page.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\schmi\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Faculdade\\\\Desenvolvimentos de SI\\\\TRABALHO FINAL\\\\TrabalhoFinalCerto\\\\frontend\\\\src\\\\app\\\\cadastrarAvaliador\\\\page.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded\",\n                    children: \"Cadastrar Avaliador\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\schmi\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Faculdade\\\\Desenvolvimentos de SI\\\\TRABALHO FINAL\\\\TrabalhoFinalCerto\\\\frontend\\\\src\\\\app\\\\cadastrarAvaliador\\\\page.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\schmi\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Faculdade\\\\Desenvolvimentos de SI\\\\TRABALHO FINAL\\\\TrabalhoFinalCerto\\\\frontend\\\\src\\\\app\\\\cadastrarAvaliador\\\\page.tsx\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\schmi\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Faculdade\\\\Desenvolvimentos de SI\\\\TRABALHO FINAL\\\\TrabalhoFinalCerto\\\\frontend\\\\src\\\\app\\\\cadastrarAvaliador\\\\page.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n_c = CadastrarAvaliador;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CadastrarAvaliador);\nvar _c;\n$RefreshReg$(_c, \"CadastrarAvaliador\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY2FkYXN0cmFyQXZhbGlhZG9yL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUV5QztBQUNmO0FBUTFCLDhDQUE4QztBQUM5QyxNQUFNRSxlQUFlLE9BQU9DO0lBQzFCQSxNQUFNQyxjQUFjO0lBQ3BCLE1BQU1DLFdBQVcsSUFBSUMsU0FBU0gsTUFBTUksYUFBYTtJQUVqRCxNQUFNQyxPQUFPSCxTQUFTSSxHQUFHLENBQUM7SUFDMUIsTUFBTUMsUUFBUUwsU0FBU0ksR0FBRyxDQUFDO0lBQzNCLE1BQU1FLFFBQVFOLFNBQVNJLEdBQUcsQ0FBQztJQUUzQixJQUFJO1FBQ0YsTUFBTVIsNkNBQUtBLENBQUNXLElBQUksQ0FBQyx5Q0FBeUM7WUFBRUo7WUFBTUU7WUFBT0M7UUFBTTtRQUMvRUUsTUFBTTtJQUNOLHNEQUFzRDtJQUN4RCxFQUFFLE9BQU9DLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLGdDQUFnQ0E7UUFDOUNELE1BQU07SUFDUjtBQUNGO0FBRUEsd0NBQXdDO0FBQ3hDLE1BQU1HLHFCQUErQjtJQUNuQyxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0M7WUFDQ0QsV0FBVTtZQUNWRSxVQUFVbEI7OzhCQUVWLDhEQUFDZTtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNHOzRCQUFNQyxTQUFRO3NDQUFPOzs7Ozs7c0NBQ3RCLDhEQUFDQzs0QkFDQ0MsTUFBSzs0QkFDTEMsSUFBRzs0QkFDSEMsTUFBSzs0QkFDTEMsUUFBUTs0QkFDUlQsV0FBVTs7Ozs7Ozs7Ozs7OzhCQUlkLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNHOzRCQUFNQyxTQUFRO3NDQUFROzs7Ozs7c0NBQ3ZCLDhEQUFDQzs0QkFDQ0MsTUFBSzs0QkFDTEMsSUFBRzs0QkFDSEMsTUFBSzs0QkFDTEMsUUFBUTs0QkFDUlQsV0FBVTs7Ozs7Ozs7Ozs7OzhCQUlkLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNHOzRCQUFNQyxTQUFRO3NDQUFROzs7Ozs7c0NBQ3ZCLDhEQUFDQzs0QkFDQ0MsTUFBSzs0QkFDTEMsSUFBRzs0QkFDSEMsTUFBSzs0QkFDTEMsUUFBUTs0QkFDUlQsV0FBVTs7Ozs7Ozs7Ozs7OzhCQUlkLDhEQUFDVTtvQkFDQ0osTUFBSztvQkFDTE4sV0FBVTs4QkFDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNVDtLQWpETUY7QUFtRE4sK0RBQWVBLGtCQUFrQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NhZGFzdHJhckF2YWxpYWRvci9wYWdlLnRzeD81NjBiIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCBSZWFjdCwgeyBGb3JtRXZlbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5pbnRlcmZhY2UgRm9ybURhdGEge1xyXG4gIG5vbWU6IHN0cmluZztcclxuICBsb2dpbjogc3RyaW5nO1xyXG4gIHNlbmhhOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8vIEZ1bsOnw6NvIHBhcmEgbGlkYXIgY29tIG8gZW52aW8gZG8gZm9ybXVsw6FyaW9cclxuY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50OiBGb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcblxyXG4gIGNvbnN0IG5vbWUgPSBmb3JtRGF0YS5nZXQoJ25vbWUnKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgbG9naW4gPSBmb3JtRGF0YS5nZXQoJ2xvZ2luJykgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHNlbmhhID0gZm9ybURhdGEuZ2V0KCdzZW5oYScpIGFzIHN0cmluZztcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvYXZhbGlhZG9yZXMnLCB7IG5vbWUsIGxvZ2luLCBzZW5oYSB9KTtcclxuICAgIGFsZXJ0KCdBdmFsaWFkb3IgY2FkYXN0cmFkbyBjb20gc3VjZXNzbyEnKTtcclxuICAgIC8vIFJlZGlyZWNpb25hbWVudG8gb3UgbMOzZ2ljYSBhZGljaW9uYWwgYXDDs3MgbyBzdWNlc3NvXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gY2FkYXN0cmFyIGF2YWxpYWRvcjonLCBlcnJvcik7XHJcbiAgICBhbGVydCgnRXJybyBhbyBjYWRhc3RyYXIgYXZhbGlhZG9yJyk7XHJcbiAgfVxyXG59O1xyXG5cclxuLy8gQ29tcG9uZW50ZSBxdWUgcmVuZGVyaXphIG8gZm9ybXVsw6FyaW9cclxuY29uc3QgQ2FkYXN0cmFyQXZhbGlhZG9yOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXktOFwiPlxyXG4gICAgICA8Zm9ybVxyXG4gICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTMgcC0xMiBpdGVtcy1jZW50ZXIgdy1bNTAlXSBiZy1zbGF0ZS03MDAgcm91bmRlZC1tZCBib3JkZXItd2hpdGUgYm9yZGVyLTIgYm9yZGVyLXNwYWNpbmctMlwiXHJcbiAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMyBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1bOTclXVwiPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJub21lXCI+Tm9tZTo8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgaWQ9XCJub21lXCJcclxuICAgICAgICAgICAgbmFtZT1cIm5vbWVcIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWdyYXktMzAwIHctWzUwJV0gcm91bmRlZC1tZCBweC0zIHB5LTIgbWItMyB0ZXh0LWJsYWNrXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMyBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1bOTclXVwiPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsb2dpblwiPkxvZ2luOjwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBpZD1cImxvZ2luXCJcclxuICAgICAgICAgICAgbmFtZT1cImxvZ2luXCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB3LVs1MCVdIHJvdW5kZWQtbWQgcHgtMyBweS0yIG1iLTMgdGV4dC1ibGFja1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTMgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctWzk3JV1cIj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2VuaGFcIj5TZW5oYTo8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIGlkPVwic2VuaGFcIlxyXG4gICAgICAgICAgICBuYW1lPVwic2VuaGFcIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWdyYXktMzAwIHctWzUwJV0gcm91bmRlZC1tZCBweC0zIHB5LTIgbWItMyB0ZXh0LWJsYWNrXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWRcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIENhZGFzdHJhciBBdmFsaWFkb3JcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhZGFzdHJhckF2YWxpYWRvcjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiYXhpb3MiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImN1cnJlbnRUYXJnZXQiLCJub21lIiwiZ2V0IiwibG9naW4iLCJzZW5oYSIsInBvc3QiLCJhbGVydCIsImVycm9yIiwiY29uc29sZSIsIkNhZGFzdHJhckF2YWxpYWRvciIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImlkIiwibmFtZSIsInJlcXVpcmVkIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/cadastrarAvaliador/page.tsx\n"));

/***/ })

});