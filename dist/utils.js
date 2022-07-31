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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/utils.ts"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NhbnZhcy1nYW1lLy4vc3JjL3V0aWxzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiB2ZWxvY2l0eShYbm93LCBZbm93LCBYbGF0ZXIsIFlsYXRlcikge1xuICAgIHZhciBYZGlzdCA9IFhsYXRlciAtIFhub3c7XG4gICAgdmFyIFlkaXN0ID0gWWxhdGVyIC0gWW5vdztcbiAgICB2YXIgYW5nbGUgPSBNYXRoLmF0YW4yKFlkaXN0LCBYZGlzdCk7XG4gICAgcmV0dXJuIHsgZHg6IE1hdGguY29zKGFuZ2xlKSwgZHk6IE1hdGguc2luKGFuZ2xlKSB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUNvbG9yKCkge1xuICAgIHZhciBjb2xvciA9IFwiI1wiO1xuICAgIHZhciBjaGFyQXJyYXkgPSBbXG4gICAgICAgIDAsXG4gICAgICAgIDEsXG4gICAgICAgIDIsXG4gICAgICAgIDMsXG4gICAgICAgIDQsXG4gICAgICAgIDUsXG4gICAgICAgIDYsXG4gICAgICAgIDcsXG4gICAgICAgIDgsXG4gICAgICAgIDksXG4gICAgICAgIFwiYVwiLFxuICAgICAgICBcImJcIixcbiAgICAgICAgXCJjXCIsXG4gICAgICAgIFwiZFwiLFxuICAgICAgICBcImVcIixcbiAgICAgICAgXCJmXCIsXG4gICAgXTtcbiAgICBbMCwgMSwgMiwgMywgNCwgNV0uZm9yRWFjaChmdW5jdGlvbiAodikge1xuICAgICAgICB2YXIgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNik7XG4gICAgICAgIGNvbG9yID0gY29sb3IgKyBjaGFyQXJyYXlbaW5kZXhdO1xuICAgIH0pO1xuICAgIHJldHVybiBjb2xvcjtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==