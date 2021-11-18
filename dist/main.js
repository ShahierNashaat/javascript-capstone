/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  font-family: \\\"Roboto Condensed\\\", sans-serif;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\nbody.static {\\r\\n  overflow: hidden;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  padding: 10px;\\r\\n  gap: 100px;\\r\\n}\\r\\n\\r\\nheader img {\\r\\n  width: 150px;\\r\\n  height: auto;\\r\\n}\\r\\n\\r\\nheader ul {\\r\\n  list-style-type: none;\\r\\n  padding-left: 0;\\r\\n  display: flex;\\r\\n  gap: 100px;\\r\\n  align-self: center;\\r\\n}\\r\\n\\r\\nheader li {\\r\\n  font-size: 30px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\nheader li:hover {\\r\\n  text-decoration: underline;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  border-top: 1px solid rgb(129, 129, 129);\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\nfooter p {\\r\\n  font-size: 20px;\\r\\n  margin: 30px 40px;\\r\\n}\\r\\n\\r\\n.active {\\r\\n  text-decoration: underline;\\r\\n}\\r\\n\\r\\n.main {\\r\\n  min-height: 50vh;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  gap: 100px;\\r\\n  flex-wrap: wrap;\\r\\n  margin: 100px 0;\\r\\n  width: 80%;\\r\\n  margin-left: auto;\\r\\n  margin-right: auto;\\r\\n}\\r\\n\\r\\n.main .movie {\\r\\n  width: 20%;\\r\\n  height: 500px;\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\n.main img {\\r\\n  width: 100%;\\r\\n  height: auto;\\r\\n}\\r\\n\\r\\n.main .name-add-like {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.name-add-like h2 {\\r\\n  width: 80%;\\r\\n}\\r\\n\\r\\n.main .name-add-like i {\\r\\n  color: rgb(204, 6, 6);\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.main .name-add-like i:hover {\\r\\n  color: rgb(133, 4, 4);\\r\\n}\\r\\n\\r\\n.main p {\\r\\n  text-align: right;\\r\\n  font-size: 20px;\\r\\n}\\r\\n\\r\\n.main button {\\r\\n  width: 100%;\\r\\n  border: 0;\\r\\n  height: 40px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.main button:hover {\\r\\n  background-color: rgb(189, 189, 189);\\r\\n}\\r\\n\\r\\n.main .comment-btn-div {\\r\\n  position: absolute;\\r\\n  bottom: 0;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n/*** comment section start ***/\\r\\n\\r\\n.commentpop {\\r\\n  display: none;\\r\\n  color: black;\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  overflow-y: hidden;\\r\\n  overflow-x: hidden;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  background-color: rgb(0, 0, 0);\\r\\n  background-color: rgba(0, 0, 0, 0.3);\\r\\n}\\r\\n\\r\\n.comment-js {\\r\\n  background-color: beige;\\r\\n  width: 70%;\\r\\n  height: 90%;\\r\\n  overflow-y: auto;\\r\\n  border-radius: 10px;\\r\\n}\\r\\n\\r\\n.commentpop.show {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.name-closeicon {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  margin: 30px;\\r\\n  align-items: center;\\r\\n\\r\\n  /* margin-bottom: 30px; */\\r\\n}\\r\\n\\r\\n.name-closeicon h2 {\\r\\n  font-size: 40px;\\r\\n}\\r\\n\\r\\n.name-closeicon .fa-times {\\r\\n  font-size: 20px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.comment-img {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.comment-img img {\\r\\n  width: auto;\\r\\n  height: 100%;\\r\\n  border-radius: 10px;\\r\\n}\\r\\n\\r\\n.summary {\\r\\n  width: 90%;\\r\\n  margin-right: auto;\\r\\n  margin-left: auto;\\r\\n  display: flex;\\r\\n  justify-self: center;\\r\\n}\\r\\n\\r\\n.comment-js ul {\\r\\n  list-style-type: none;\\r\\n  margin-bottom: 40px;\\r\\n  margin-left: 30px;\\r\\n}\\r\\n\\r\\n.comment-js ul li a {\\r\\n  text-decoration: none;\\r\\n  color: #0052f5;\\r\\n  transition: 0.5s;\\r\\n}\\r\\n\\r\\n.comment-js ul li a:hover {\\r\\n  text-decoration: underline;\\r\\n  color: #00308f;\\r\\n}\\r\\n\\r\\n.add-comments {\\r\\n  margin-bottom: 40px;\\r\\n  margin-left: 70px;\\r\\n}\\r\\n\\r\\n.add-comments h3 {\\r\\n  font-size: 22px;\\r\\n}\\r\\n\\r\\n.date {\\r\\n  font-style: italic;\\r\\n}\\r\\n\\r\\n.comment-name,\\r\\n.comment-detail {\\r\\n  font-weight: 400;\\r\\n  margin-left: 5px;\\r\\n}\\r\\n\\r\\n#comment-form {\\r\\n  width: 50%;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 20px;\\r\\n  margin-left: 60px;\\r\\n  margin-bottom: 30px;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-capstone/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-capstone/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/api-controller.js":
/*!*******************************!*\
  !*** ./src/api-controller.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getMovies),\n/* harmony export */   \"getlikes\": () => (/* binding */ getlikes),\n/* harmony export */   \"getComments\": () => (/* binding */ getComments),\n/* harmony export */   \"postLike\": () => (/* binding */ postLike),\n/* harmony export */   \"postComment\": () => (/* binding */ postComment)\n/* harmony export */ });\nconst getMovies = async () => {\r\n  const response = await fetch('https://api.tvmaze.com/shows');\r\n  const data = await response.json();\r\n  return data;\r\n};\r\n\r\nconst getlikes = async () => {\r\n  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/izzKZgflb43lj8vOIg9b/likes');\r\n  const data = await response.json();\r\n  return data;\r\n};\r\n\r\nconst getComments = async (id) => {\r\n  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/izzKZgflb43lj8vOIg9b/comments?item_id=${id}`);\r\n  let data = [];\r\n  if (response.ok) {\r\n    data = await response.json();\r\n  }\r\n  return data;\r\n};\r\n\r\nconst postLike = async (id) => {\r\n  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/izzKZgflb43lj8vOIg9b/likes', {\r\n    method: 'POST',\r\n    body: JSON.stringify({\r\n      item_id: id,\r\n    }),\r\n    headers: {\r\n      'Content-type': 'application/json; charset=UTF-8',\r\n    },\r\n  });\r\n  const data = await response.text();\r\n  return data;\r\n};\r\n\r\nconst postComment = async (id, name, comment) => {\r\n  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/izzKZgflb43lj8vOIg9b/comments', {\r\n    method: 'POST',\r\n    body: JSON.stringify({\r\n      item_id: id,\r\n      username: name,\r\n      comment,\r\n    }),\r\n    headers: {\r\n      'Content-type': 'application/json; charset=UTF-8',\r\n    },\r\n  });\r\n  const data = await response.text();\r\n  return data;\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://javascript-capstone/./src/api-controller.js?");

/***/ }),

/***/ "./src/comment.js":
/*!************************!*\
  !*** ./src/comment.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ commentPopup)\n/* harmony export */ });\n/* harmony import */ var _api_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-controller.js */ \"./src/api-controller.js\");\n/* harmony import */ var _counter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./counter.js */ \"./src/counter.js\");\n\r\n\r\n\r\nconst commentSection = document.querySelector('.commentpop');\r\nconst bodyfix = document.querySelector('body');\r\n\r\nconst getCommentsHtml = (commentResult) => {\r\n  let commentsHtml = `<h3>comments(${(0,_counter_js__WEBPACK_IMPORTED_MODULE_1__.countComment)(commentResult)})</h3>`;\r\n  for (let i = 0; i < commentResult.length; i += 1) {\r\n    commentsHtml += `<p>\r\n      <span class='date'>${commentResult[i].creation_date}<span>\r\n      <span class='comment-name'>${commentResult[i].username}: </span>\r\n      <span class='comment-detail'>${commentResult[i].comment} </span>\r\n      <p>`;\r\n  }\r\n  return commentsHtml;\r\n};\r\n\r\nconst submitfunction = async (movies, index) => {\r\n  const form = document.getElementById('comment-form');\r\n  await (0,_api_controller_js__WEBPACK_IMPORTED_MODULE_0__.postComment)(movies[index].id, form.name.value, form.moviecomment.value);\r\n  const commentResult = await (0,_api_controller_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(movies[index].id);\r\n  document.getElementsByClassName('add-comments')[0].innerHTML = getCommentsHtml(commentResult);\r\n  form.name.value = '';\r\n  form.moviecomment.value = '';\r\n};\r\n\r\nconst commentPopup = (commentButton, movies) => {\r\n  commentButton.forEach((button, index) => {\r\n    button.addEventListener('click', async () => {\r\n      commentSection.classList.add('show');\r\n      bodyfix.classList.add('static');\r\n\r\n      const commentResult = await (0,_api_controller_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(movies[index].id);\r\n\r\n      commentSection.innerHTML = `<div class='comment-js'>\r\n        <div class='name-closeicon'>\r\n        <h2>${movies[index].name}</h2>\r\n        <i class=\"fa fa-times\"></i>\r\n        </div>\r\n        <div class='comment-img'><img src='${movies[index].image.original}'></div>\r\n        <div class='summary'>${movies[index].summary}</div>\r\n        <ul>\r\n        <li>Genre: ${movies[index].genres.join(',')}</li>\r\n        <li>tvmaze: <a href=\"${movies[index].url}\" target=\"_blank\">details about show</a></li>\r\n        <li>rating: ${movies[index].rating.average}</li>\r\n        </ul>\r\n        <div class='add-comments'>\r\n        ${getCommentsHtml(commentResult)}\r\n        </div>\r\n        <form id=\"comment-form\">\r\n        <h2>Add your comment</h2>\r\n        <div>\r\n            <input type=\"text\" id=\"name\" placeholder=\"name\" required />\r\n        </div>\r\n        <div>\r\n        <textarea id=\"moviecomment\" name=\"moviecomment\" rows=\"4\" cols=\"50\" required></textarea>\r\n        </div>\r\n        <div class=\"button-flex\">\r\n            <button type=\"button\" id=\"add\">Add comment</button>\r\n        </div>\r\n    </form>\r\n        </div>`;\r\n\r\n      const addComment = document.getElementById('add');\r\n      addComment.addEventListener('click', () => { submitfunction(movies, index); });\r\n\r\n      const closeComment = document.querySelector('.fa-times');\r\n      const closebtn = () => {\r\n        commentSection.classList.remove('show');\r\n        bodyfix.classList.remove('static');\r\n      };\r\n      closeComment.addEventListener('click', closebtn);\r\n    });\r\n  });\r\n};\r\n\r\n\n\n//# sourceURL=webpack://javascript-capstone/./src/comment.js?");

/***/ }),

/***/ "./src/counter.js":
/*!************************!*\
  !*** ./src/counter.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ countMovies),\n/* harmony export */   \"countComment\": () => (/* binding */ countComment)\n/* harmony export */ });\nconst countMovies = (movies, genresType) => {\r\n  const selectedMovies = movies.filter((item) => item.genres.indexOf(genresType) !== -1);\r\n  return selectedMovies.length;\r\n};\r\n\r\nconst countComment = (commentResult) => commentResult.length;\r\n\r\n\n\n//# sourceURL=webpack://javascript-capstone/./src/counter.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _api_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api-controller.js */ \"./src/api-controller.js\");\n/* harmony import */ var _comment_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comment.js */ \"./src/comment.js\");\n/* harmony import */ var _counter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./counter.js */ \"./src/counter.js\");\n\r\n\r\n\r\n\r\n\r\nconst getLikesForMovie = (likes, id) => {\r\n  for (let i = 0; i < likes.length; i += 1) {\r\n    if (likes[i].item_id === id.toString()) {\r\n      return likes[i].likes;\r\n    }\r\n  }\r\n  return 0;\r\n};\r\n\r\nconst handleLikeButtonClick = () => {\r\n  document.querySelectorAll('.main .name-add-like i').forEach((item) => {\r\n    item.addEventListener('click', async () => {\r\n      await (0,_api_controller_js__WEBPACK_IMPORTED_MODULE_1__.postLike)(item.getAttribute('data-movieId'));\r\n      const likes = await (0,_api_controller_js__WEBPACK_IMPORTED_MODULE_1__.getlikes)();\r\n      item.parentElement.parentElement.querySelector('p').textContent = `${getLikesForMovie(likes, item.getAttribute('data-movieId'))} likes`;\r\n    });\r\n  });\r\n};\r\n\r\nconst rederMovies = async (genresType) => {\r\n  const allmovies = await (0,_api_controller_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  const movies = allmovies.filter((item) => item.genres.indexOf(genresType) !== -1);\r\n\r\n  const likes = await (0,_api_controller_js__WEBPACK_IMPORTED_MODULE_1__.getlikes)();\r\n\r\n  const mainSection = document.querySelector('.main');\r\n  mainSection.innerHTML = '';\r\n  for (let i = 0; i < movies.length; i += 1) {\r\n    mainSection.innerHTML += `\r\n        <div class=\"movie\">\r\n        <img src=\"${movies[i].image.medium}\">\r\n        <div class=\"name-add-like\">\r\n            <h2>${movies[i].name}</h2>\r\n            <i class=\"fas fa-heart fa-2x\" data-movieId=\"${movies[i].id}\"></i>\r\n        </div>\r\n        <div>\r\n            <p>${getLikesForMovie(likes, movies[i].id)} likes</p>\r\n        </div>\r\n        <div class=\"comment-btn-div\">\r\n            <button>Comments</button>\r\n        </div>\r\n        </div>`;\r\n  }\r\n\r\n  document.querySelector('.active').textContent += `(${(0,_counter_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(allmovies, genresType)})`;\r\n\r\n  handleLikeButtonClick();\r\n\r\n  const commentButton = document.querySelectorAll('.comment-btn-div button');\r\n  (0,_comment_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(commentButton, movies);\r\n};\r\n\r\nrederMovies('Action');\r\n\r\nconst links = document.querySelectorAll('header li');\r\n\r\nconst resetLinks = () => {\r\n  for (let i = 0; i < links.length; i += 1) {\r\n    links[i].textContent = links[i].getAttribute('data-geners');\r\n    links[i].classList.remove('active');\r\n  }\r\n};\r\n\r\nfor (let i = 0; i < links.length; i += 1) {\r\n  links[i].addEventListener('click', () => {\r\n    rederMovies(links[i].textContent);\r\n    resetLinks();\r\n    links[i].classList.add('active');\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://javascript-capstone/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;