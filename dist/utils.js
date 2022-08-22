"use strict";
(self["webpackChunkcanvas_game"] = self["webpackChunkcanvas_game"] || []).push([["utils"],{

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "distance": () => (/* binding */ distance),
/* harmony export */   "isProjectileOut": () => (/* binding */ isProjectileOut),
/* harmony export */   "isTouched": () => (/* binding */ isTouched),
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
var isProjectileOut = function (arc) {
    return (arc.x <= -arc.radius ||
        arc.x >= innerWidth + arc.radius ||
        arc.y <= -arc.radius ||
        arc.y >= innerHeight + arc.radius);
};
var distance = function (A, B) {
    return Math.hypot(A.x - B.x, A.y - B.y);
};
var isTouched = function (A, B) {
    var AnBDistance = distance(A, B);
    return Boolean(AnBDistance <= A.radius + B.radius);
};


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/utils.ts"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NhbnZhcy1nYW1lLy4vc3JjL3V0aWxzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiB2ZWxvY2l0eShYbm93LCBZbm93LCBYbGF0ZXIsIFlsYXRlcikge1xuICAgIHZhciBYZGlzdCA9IFhsYXRlciAtIFhub3c7XG4gICAgdmFyIFlkaXN0ID0gWWxhdGVyIC0gWW5vdztcbiAgICB2YXIgYW5nbGUgPSBNYXRoLmF0YW4yKFlkaXN0LCBYZGlzdCk7XG4gICAgcmV0dXJuIHsgZHg6IE1hdGguY29zKGFuZ2xlKSwgZHk6IE1hdGguc2luKGFuZ2xlKSB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUNvbG9yKCkge1xuICAgIHZhciBjb2xvciA9IFwiI1wiO1xuICAgIHZhciBjaGFyQXJyYXkgPSBbXG4gICAgICAgIDAsXG4gICAgICAgIDEsXG4gICAgICAgIDIsXG4gICAgICAgIDMsXG4gICAgICAgIDQsXG4gICAgICAgIDUsXG4gICAgICAgIDYsXG4gICAgICAgIDcsXG4gICAgICAgIDgsXG4gICAgICAgIDksXG4gICAgICAgIFwiYVwiLFxuICAgICAgICBcImJcIixcbiAgICAgICAgXCJjXCIsXG4gICAgICAgIFwiZFwiLFxuICAgICAgICBcImVcIixcbiAgICAgICAgXCJmXCIsXG4gICAgXTtcbiAgICBbMCwgMSwgMiwgMywgNCwgNV0uZm9yRWFjaChmdW5jdGlvbiAodikge1xuICAgICAgICB2YXIgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNik7XG4gICAgICAgIGNvbG9yID0gY29sb3IgKyBjaGFyQXJyYXlbaW5kZXhdO1xuICAgIH0pO1xuICAgIHJldHVybiBjb2xvcjtcbn1cbmV4cG9ydCBmdW5jdGlvbiByYW5nZShtaW4sIG1heCkge1xuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XG59XG5leHBvcnQgdmFyIGlzUHJvamVjdGlsZU91dCA9IGZ1bmN0aW9uIChhcmMpIHtcbiAgICByZXR1cm4gKGFyYy54IDw9IC1hcmMucmFkaXVzIHx8XG4gICAgICAgIGFyYy54ID49IGlubmVyV2lkdGggKyBhcmMucmFkaXVzIHx8XG4gICAgICAgIGFyYy55IDw9IC1hcmMucmFkaXVzIHx8XG4gICAgICAgIGFyYy55ID49IGlubmVySGVpZ2h0ICsgYXJjLnJhZGl1cyk7XG59O1xuZXhwb3J0IHZhciBkaXN0YW5jZSA9IGZ1bmN0aW9uIChBLCBCKSB7XG4gICAgcmV0dXJuIE1hdGguaHlwb3QoQS54IC0gQi54LCBBLnkgLSBCLnkpO1xufTtcbmV4cG9ydCB2YXIgaXNUb3VjaGVkID0gZnVuY3Rpb24gKEEsIEIpIHtcbiAgICB2YXIgQW5CRGlzdGFuY2UgPSBkaXN0YW5jZShBLCBCKTtcbiAgICByZXR1cm4gQm9vbGVhbihBbkJEaXN0YW5jZSA8PSBBLnJhZGl1cyArIEIucmFkaXVzKTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=