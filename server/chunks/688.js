"use strict";
exports.id = 688;
exports.ids = [688];
exports.modules = {

/***/ 5552:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ baseUrl),
/* harmony export */   "a": () => (/* binding */ fetchApi)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const baseUrl = 'https://bayut.p.rapidapi.com';
const fetchApi = async url => {
  const {
    data
  } = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, {
    headers: {
      'X-RapidAPI-Key': 'cecbbb7727msh3112eb5b0fc6695p185d82jsn3e39c116e9e5',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    }
  });
  return data;
};

/***/ }),

/***/ 8829:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/house.852de0b3.jpg","height":600,"width":800,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAAAgEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAAkB//xAAcEAACAQUBAAAAAAAAAAAAAAACAwQAAQUhMXH/2gAIAQEAAT8AlSX44XA6S1tw1wfa/8QAGBEBAAMBAAAAAAAAAAAAAAAAAQACMpH/2gAIAQIBAT8Aoqaez//EABcRAQADAAAAAAAAAAAAAAAAAAEAETH/2gAIAQMBAT8AQvCf/9k="});

/***/ })

};
;