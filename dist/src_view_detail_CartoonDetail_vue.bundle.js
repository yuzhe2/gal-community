/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmySelf"] = self["webpackChunkmySelf"] || []).push([["src_view_detail_CartoonDetail_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/view/detail/CartoonDetail.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/view/detail/CartoonDetail.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var network_cartoon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! network/cartoon */ \"./src/network/cartoon.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  name: \"CartoonDetail\",\n  data: function data() {\n    return {\n      title: \"\",\n      imgList: []\n    };\n  },\n  created: function created() {\n    var _this = this;\n\n    (0,network_cartoon__WEBPACK_IMPORTED_MODULE_0__.getSingleCartoonData)(this.$route.params.id).then(function (res) {\n      _this.title = res.data.galData.title;\n      _this.imgList = res.data.galData.imgList;\n    });\n  }\n});\n\n//# sourceURL=webpack://mySelf/./src/view/detail/CartoonDetail.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-1%5B0%5D.rules%5B0%5D.use!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./src/network/cartoon.js":
/*!********************************!*\
  !*** ./src/network/cartoon.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCartoonData\": () => (/* binding */ getCartoonData),\n/* harmony export */   \"getSingleCartoonData\": () => (/* binding */ getSingleCartoonData)\n/* harmony export */ });\n/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request */ \"./src/network/request.js\");\n\n\nfunction getCartoonData(page) {\n  return (0,_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    url: \"/cartoon\",\n    params: {\n      page: page\n    }\n  });\n}\n\nfunction getSingleCartoonData(id) {\n  return (0,_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    url: \"/singleCartoon\",\n    params: {\n      id: id\n    }\n  });\n}\n\n\n\n//# sourceURL=webpack://mySelf/./src/network/cartoon.js?");

/***/ }),

/***/ "./src/network/request.js":
/*!********************************!*\
  !*** ./src/network/request.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ request)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction request(config) {\n  var instance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n    baseURL: \"http://localhost:3000\",\n    timeout: 5000\n  });\n  axios__WEBPACK_IMPORTED_MODULE_0___default().interceptors.request.use(function (config) {\n    return config;\n  }, function (err) {});\n  axios__WEBPACK_IMPORTED_MODULE_0___default().interceptors.response.use(function (config) {\n    return config;\n  }, function (err) {});\n  return instance(config);\n}\n\n//# sourceURL=webpack://mySelf/./src/network/request.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/view/detail/CartoonDetail.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/view/detail/CartoonDetail.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n.detail--cartoon {\\r\\n  width: 1000px;\\r\\n  margin: 100px auto;\\n}\\n.detail--cartoon__header {\\r\\n  width: 920px;\\r\\n  text-align: center;\\r\\n  padding: 10px 0px;\\r\\n  margin-left: 35px;\\r\\n  background-color: rgba(255, 255, 255, .7);\\r\\n  color: #333;\\n}\\n.detail--cartoon__main__imgs {\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  justify-content: center;\\n}\\n.detail--cartoon__main__img {\\r\\n  width: 300px;\\r\\n  margin-right: 10px;\\r\\n  margin-bottom: 5px;\\r\\n  cursor: pointer;\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://mySelf/./src/view/detail/CartoonDetail.vue?./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./src/view/detail/CartoonDetail.vue":
/*!*******************************************!*\
  !*** ./src/view/detail/CartoonDetail.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _CartoonDetail_vue_vue_type_template_id_1f12a3bc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CartoonDetail.vue?vue&type=template&id=1f12a3bc& */ \"./src/view/detail/CartoonDetail.vue?vue&type=template&id=1f12a3bc&\");\n/* harmony import */ var _CartoonDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CartoonDetail.vue?vue&type=script&lang=js& */ \"./src/view/detail/CartoonDetail.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _CartoonDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CartoonDetail.vue?vue&type=style&index=0&lang=css& */ \"./src/view/detail/CartoonDetail.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n;\n\n\n/* normalize component */\n\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _CartoonDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _CartoonDetail_vue_vue_type_template_id_1f12a3bc___WEBPACK_IMPORTED_MODULE_0__.render,\n  _CartoonDetail_vue_vue_type_template_id_1f12a3bc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/view/detail/CartoonDetail.vue\"\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);\n\n//# sourceURL=webpack://mySelf/./src/view/detail/CartoonDetail.vue?");

/***/ }),

/***/ "./src/view/detail/CartoonDetail.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./src/view/detail/CartoonDetail.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_CartoonDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CartoonDetail.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/view/detail/CartoonDetail.vue?vue&type=script&lang=js&\");\n /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_CartoonDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://mySelf/./src/view/detail/CartoonDetail.vue?");

/***/ }),

/***/ "./src/view/detail/CartoonDetail.vue?vue&type=template&id=1f12a3bc&":
/*!**************************************************************************!*\
  !*** ./src/view/detail/CartoonDetail.vue?vue&type=template&id=1f12a3bc& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CartoonDetail_vue_vue_type_template_id_1f12a3bc___WEBPACK_IMPORTED_MODULE_0__.render),\n/* harmony export */   \"staticRenderFns\": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CartoonDetail_vue_vue_type_template_id_1f12a3bc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CartoonDetail_vue_vue_type_template_id_1f12a3bc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CartoonDetail.vue?vue&type=template&id=1f12a3bc& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/view/detail/CartoonDetail.vue?vue&type=template&id=1f12a3bc&\");\n\n\n//# sourceURL=webpack://mySelf/./src/view/detail/CartoonDetail.vue?");

/***/ }),

/***/ "./src/view/detail/CartoonDetail.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************!*\
  !*** ./src/view/detail/CartoonDetail.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CartoonDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CartoonDetail.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/view/detail/CartoonDetail.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CartoonDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CartoonDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CartoonDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CartoonDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceURL=webpack://mySelf/./src/view/detail/CartoonDetail.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/view/detail/CartoonDetail.vue?vue&type=template&id=1f12a3bc&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/view/detail/CartoonDetail.vue?vue&type=template&id=1f12a3bc& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render),\n/* harmony export */   \"staticRenderFns\": () => (/* binding */ staticRenderFns)\n/* harmony export */ });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"detail--cartoon\" }, [\n    _c(\"div\", { staticClass: \"detail--cartoon__header\" }, [\n      _c(\"p\", { staticClass: \"detail--cartoon__header__title\" }, [\n        _vm._v(\"\\n      \" + _vm._s(_vm.title) + \"\\n    \"),\n      ]),\n    ]),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"detail--cartoon__main\" }, [\n      _c(\n        \"ul\",\n        { staticClass: \"detail--cartoon__main__imgs\" },\n        _vm._l(_vm.imgList, function (item, index) {\n          return _c(\n            \"li\",\n            { key: index, staticClass: \"detail--cartoon__main__img\" },\n            [\n              _c(\"img\", {\n                staticClass: \"detail--cartoon__main__img--context\",\n                attrs: { src: item },\n              }),\n            ]\n          )\n        }),\n        0\n      ),\n    ]),\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://mySelf/./src/view/detail/CartoonDetail.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/view/detail/CartoonDetail.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/view/detail/CartoonDetail.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CartoonDetail.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/view/detail/CartoonDetail.vue?vue&type=style&index=0&lang=css&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.id, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = (__webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\")[\"default\"])\nvar update = add(\"0789cd13\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack://mySelf/./src/view/detail/CartoonDetail.vue?./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ })

}]);