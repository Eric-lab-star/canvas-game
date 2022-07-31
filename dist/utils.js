"use strict";
(self["webpackChunkcanvas_game"] = self["webpackChunkcanvas_game"] || []).push([["utils"],{

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "randomColor": () => (/* binding */ randomColor),
/* harmony export */   "range": () => (/* binding */ range),
/* harmony export */   "velocity": () => (/* binding */ velocity)
/* harmony export */ });
function velocity(Xnow, Ynow, Xlater, Ylater) {
    var Xdist = Xlater - Xnow;
    var Ydist = Ylater - Ynow;
    var angle = Math.atan2(Ydist, Xdist);
    return { dx: Math.cos(angle), dy: Math.sin(angle) };
}
function randomColor() {
    var color = "#";
    var charArray = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
    ];
    [0, 1, 2, 3, 4, 5].forEach(function (v) {
        var index = Math.floor(Math.random() * 16);
        color = color + charArray[index];
    });
    return color;
}
function range(min, max) {
    return Math.random() * (max - min) + min;
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/utils.ts"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDTztBQUNQO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYW52YXMtZ2FtZS8uL3NyYy91dGlscy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gdmVsb2NpdHkoWG5vdywgWW5vdywgWGxhdGVyLCBZbGF0ZXIpIHtcbiAgICB2YXIgWGRpc3QgPSBYbGF0ZXIgLSBYbm93O1xuICAgIHZhciBZZGlzdCA9IFlsYXRlciAtIFlub3c7XG4gICAgdmFyIGFuZ2xlID0gTWF0aC5hdGFuMihZZGlzdCwgWGRpc3QpO1xuICAgIHJldHVybiB7IGR4OiBNYXRoLmNvcyhhbmdsZSksIGR5OiBNYXRoLnNpbihhbmdsZSkgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiByYW5kb21Db2xvcigpIHtcbiAgICB2YXIgY29sb3IgPSBcIiNcIjtcbiAgICB2YXIgY2hhckFycmF5ID0gW1xuICAgICAgICAwLFxuICAgICAgICAxLFxuICAgICAgICAyLFxuICAgICAgICAzLFxuICAgICAgICA0LFxuICAgICAgICA1LFxuICAgICAgICA2LFxuICAgICAgICA3LFxuICAgICAgICA4LFxuICAgICAgICA5LFxuICAgICAgICBcImFcIixcbiAgICAgICAgXCJiXCIsXG4gICAgICAgIFwiY1wiLFxuICAgICAgICBcImRcIixcbiAgICAgICAgXCJlXCIsXG4gICAgICAgIFwiZlwiLFxuICAgIF07XG4gICAgWzAsIDEsIDIsIDMsIDQsIDVdLmZvckVhY2goZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTYpO1xuICAgICAgICBjb2xvciA9IGNvbG9yICsgY2hhckFycmF5W2luZGV4XTtcbiAgICB9KTtcbiAgICByZXR1cm4gY29sb3I7XG59XG5leHBvcnQgZnVuY3Rpb24gcmFuZ2UobWluLCBtYXgpIHtcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9