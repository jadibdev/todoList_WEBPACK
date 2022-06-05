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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"#page-title {\\n  margin-left: 50px;\\n  margin-top: 20px;\\n}\\n\\n.list-container {\\n  display: flex;\\n  flex-direction: column;\\n  position: fixed;\\n  top: 50%;\\n  left: 50%;\\n\\n  /* bring your own prefixes */\\n  transform: translate(-50%, -50%);\\n  width: 300px;\\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\\n  padding: 20px;\\n}\\n\\n.list-title {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n}\\n\\n.ul-container ul {\\n  list-style-type: none;\\n  text-align: left;\\n  padding-left: 0;\\n  border-left: none;\\n}\\n\\n.ul-container li {\\n  margin-bottom: 15px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n  border-bottom: 1px solid lightgray;\\n  padding-bottom: 15px;\\n}\\n\\n.input-container input {\\n  width: 100%;\\n  height: 30px;\\n  border-left: none;\\n  border-right: none;\\n  border-top: 1px solid lightgray;\\n  border-bottom: 1px solid lightgray;\\n}\\n\\n.liDiv {\\n  display: flex;\\n  align-items: center;\\n  gap: 5px;\\n}\\n\\n.list-footer {\\n  text-align: center;\\n  background: #f6f6f6;\\n  color: gray;\\n  height: 50px;\\n}\\n\\n.disappear {\\n  display: none;\\n}\\n\\n.lineThrough {\\n  text-decoration: line-through;\\n}\\n\\n#clearButton {\\n  height: 50px;\\n  width: 300px;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_listContainer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/listContainer.js */ \"./src/modules/listContainer.js\");\n/* harmony import */ var _modules_handleUserInput_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/handleUserInput.js */ \"./src/modules/handleUserInput.js\");\n/* harmony import */ var _modules_checkLocal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/checkLocal.js */ \"./src/modules/checkLocal.js\");\n/* eslint-disable no-loop-func */\n\n\n\n\n\nconst app = () => {\n  const main = document.getElementById('main');\n  main.append((0,_modules_listContainer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n};\n\napp();\n(0,_modules_handleUserInput_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_checkLocal_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/index.js?");

/***/ }),

/***/ "./src/modules/checkLocal.js":
/*!***********************************!*\
  !*** ./src/modules/checkLocal.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _tasksData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasksData.js */ \"./src/modules/tasksData.js\");\n/* eslint-disable no-loop-func */\n\n\nconst checkLocal = () => {\n  const localStorageTasks = JSON.parse(localStorage.getItem('tasks'));\n  if (localStorageTasks) {\n    for (let i = 0; i < localStorageTasks.length; i += 1) {\n      const li = document.createElement('li');\n      li.id = Math.random() * 10;\n      document.getElementById('magic').append(li);\n\n      const div = document.createElement('div');\n      div.classList.add('liDiv');\n      li.append(div);\n\n      const input = document.createElement('input');\n      input.type = 'checkbox';\n      div.append(input);\n\n      const p = document.createElement('p');\n      p.textContent = localStorageTasks[i].description;\n      div.append(p);\n\n      const ellipsis = document.createElement('i');\n      ellipsis.id = Math.random() * 10;\n      const ellipsisClasses = ['fa-solid', 'fa-ellipsis-vertical'];\n      ellipsis.classList.add(...ellipsisClasses);\n      li.append(ellipsis);\n\n      const trash = document.createElement('i');\n      trash.id = Math.random() * 10;\n      const trashClasses = ['fa-solid', 'fa-trash-can', 'disappear'];\n      trash.classList.add(...trashClasses);\n      li.append(trash);\n\n      ellipsis.addEventListener('click', () => {\n        li.contentEditable = true;\n        li.style.backgroundColor = 'yellow';\n        ellipsis.classList.add('disappear');\n        trash.classList.remove('disappear');\n      });\n\n      li.addEventListener('keypress', (event) => {\n        if (event.key === 'Enter') {\n          li.contentEditable = false;\n          li.style.backgroundColor = 'white';\n          trash.classList.add('disappear');\n          ellipsis.classList.remove('disappear');\n        }\n      });\n\n      trash.addEventListener('click', () => {\n        // localStorage.setItem('tasks', JSON.stringify(tasks));\n        li.remove();\n        _tasksData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].splice(_tasksData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][i].index, 1);\n        for (let i = 0; i < _tasksData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length; i += 1) {\n          _tasksData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][i].index = i;\n        }\n        localStorage.setItem('tasks', JSON.stringify(_tasksData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n      });\n\n      input.addEventListener('click', () => {\n        p.classList.toggle('lineThrough');\n        li.classList.toggle('completed');\n        if (_tasksData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][_tasksData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][i].index].completed === false) {\n          _tasksData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][_tasksData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][i].index].completed = true;\n        } else {\n          _tasksData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][_tasksData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][i].index].completed = false;\n        }\n        localStorage.setItem('tasks', JSON.stringify(_tasksData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n      });\n    }\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkLocal);\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/checkLocal.js?");

/***/ }),

/***/ "./src/modules/getTasks.js":
/*!*********************************!*\
  !*** ./src/modules/getTasks.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getTasks = () => {\n  const ulContainer = document.createElement('div');\n  ulContainer.classList.add('ul-container');\n  const tasksUl = document.createElement('ul');\n  tasksUl.id = 'magic';\n  ulContainer.append(tasksUl);\n\n  return ulContainer;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTasks);\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/getTasks.js?");

/***/ }),

/***/ "./src/modules/handleUserInput.js":
/*!****************************************!*\
  !*** ./src/modules/handleUserInput.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _tasksData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasksData.js */ \"./src/modules/tasksData.js\");\n/* eslint-disable no-unused-vars */\n/* eslint-disable max-len */\n\n\nconst handleUserInput = () => {\n  const inputEl = document.getElementById('task');\n  inputEl.addEventListener('keypress', (event) => {\n    if (event.key === 'Enter') {\n      const taskObject = {\n        description: event.target.value,\n        completed: false,\n        index: _tasksData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length,\n      };\n      // localStorage.setItem('tasks', JSON.stringify(tasks));\n      _tasksData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].push(taskObject);\n      localStorage.setItem('tasks', JSON.stringify(_tasksData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n\n      const li = document.createElement('li');\n      li.id = `li${taskObject.index}`;\n\n      const div = document.createElement('div');\n      div.classList.add('liDiv');\n\n      const input = document.createElement('input');\n      input.type = 'checkbox';\n\n      const p = document.createElement('p');\n      p.textContent = taskObject.description;\n\n      const ellipsis = document.createElement('i');\n      ellipsis.id = `ellipsis${taskObject.index}`;\n      const ellipsisClasses = ['fa-solid', 'fa-ellipsis-vertical'];\n      ellipsis.classList.add(...ellipsisClasses);\n\n      const trash = document.createElement('i');\n      trash.id = `trash${taskObject.index}`;\n      const trashClasses = ['fa-solid', 'fa-trash-can', 'disappear'];\n      trash.classList.add(...trashClasses);\n\n      div.append(input);\n      div.append(p);\n      li.append(div);\n\n      li.append(ellipsis);\n      li.append(trash);\n\n      document.querySelector('ul').append(li);\n      event.target.value = '';\n\n      ellipsis.addEventListener('click', () => {\n        li.contentEditable = true;\n        li.style.backgroundColor = 'yellow';\n        ellipsis.classList.add('disappear');\n        trash.classList.remove('disappear');\n      });\n\n      li.addEventListener('keypress', (event) => {\n        if (event.key === 'Enter') {\n          li.contentEditable = false;\n          li.style.backgroundColor = 'white';\n          trash.classList.add('disappear');\n          ellipsis.classList.remove('disappear');\n        }\n      });\n\n      trash.addEventListener('click', () => {\n        localStorage.setItem('tasks', JSON.stringify(_tasksData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n        li.remove();\n        _tasksData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].splice(taskObject.index, 1);\n        for (let i = 0; i < _tasksData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length; i += 1) {\n          _tasksData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][i].index = i;\n        }\n        localStorage.setItem('tasks', JSON.stringify(_tasksData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n      });\n\n      input.addEventListener('click', () => {\n        p.classList.toggle('lineThrough');\n        li.classList.toggle('completed');\n        if (_tasksData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][taskObject.index].completed === false) {\n          _tasksData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][taskObject.index].completed = true;\n        } else {\n          _tasksData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][taskObject.index].completed = false;\n        }\n        localStorage.setItem('tasks', JSON.stringify(_tasksData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n      });\n\n      event.preventDefault();\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleUserInput);\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/handleUserInput.js?");

/***/ }),

/***/ "./src/modules/listContainer.js":
/*!**************************************!*\
  !*** ./src/modules/listContainer.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getTasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getTasks.js */ \"./src/modules/getTasks.js\");\n/* harmony import */ var _todoListTitle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoListTitle.js */ \"./src/modules/todoListTitle.js\");\n/* harmony import */ var _listInput_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listInput.js */ \"./src/modules/listInput.js\");\n/* harmony import */ var _listFooter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listFooter.js */ \"./src/modules/listFooter.js\");\n\n\n\n\n\nconst listContainer = () => {\n  const listContainer = document.createElement('div');\n  listContainer.classList.add('list-container');\n\n  listContainer.append((0,_todoListTitle_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n  listContainer.append((0,_listInput_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n  listContainer.append((0,_getTasks_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n  listContainer.append((0,_listFooter_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n  return listContainer;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listContainer);\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/listContainer.js?");

/***/ }),

/***/ "./src/modules/listFooter.js":
/*!***********************************!*\
  !*** ./src/modules/listFooter.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _tasksData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasksData.js */ \"./src/modules/tasksData.js\");\n\n\nconst listFooter = () => {\n  const listFooter = document.createElement('div');\n  const clearButton = document.createElement('button');\n  clearButton.id = 'clearButton';\n  clearButton.textContent = 'Clear All Completed';\n  listFooter.classList.add('list-footer');\n  listFooter.append(clearButton);\n\n  clearButton.addEventListener('click', () => {\n    // let completedItemsTotal = 0;\n    const completed = document.querySelectorAll('.completed');\n    completed.forEach((item) => {\n      item.remove();\n      // completedItemsTotal += 1;\n    });\n\n    for (let i = 0; i < _tasksData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length; i += 1) {\n      if (_tasksData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][i].completed === true) {\n        _tasksData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].splice(_tasksData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][i].index, 1);\n        localStorage.setItem('tasks', JSON.stringify(_tasksData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n      }\n    }\n  });\n\n  return listFooter;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listFooter);\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/listFooter.js?");

/***/ }),

/***/ "./src/modules/listInput.js":
/*!**********************************!*\
  !*** ./src/modules/listInput.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst listInput = () => {\n  const listInput = document.createElement('div');\n  listInput.innerHTML += `\n                         <input required id=\"task\" type=\"text\" placeholder=\"Add to your list...\">\n                        `;\n  listInput.classList.add('input-container');\n  return listInput;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listInput);\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/listInput.js?");

/***/ }),

/***/ "./src/modules/tasksData.js":
/*!**********************************!*\
  !*** ./src/modules/tasksData.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tasks = (JSON.parse(localStorage.getItem('tasks')) || []);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tasks);\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/tasksData.js?");

/***/ }),

/***/ "./src/modules/todoListTitle.js":
/*!**************************************!*\
  !*** ./src/modules/todoListTitle.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst todoListTitle = () => {\n  const todoListTitle = document.createElement('div');\n  todoListTitle.innerHTML += `\n                              <p>Today's to dos</p>\n                              <i class=\"fa-solid fa-arrows-rotate\"></i>\n                              `;\n  todoListTitle.classList.add('list-title');\n  return todoListTitle;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoListTitle);\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/todoListTitle.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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