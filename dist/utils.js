"use strict";
(self["webpackChunkcanvas_game"] = self["webpackChunkcanvas_game"] || []).push([["utils"],{

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isProjectileOut": () => (/* binding */ isProjectileOut),
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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/utils.ts"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FudmFzLWdhbWUvLi9zcmMvdXRpbHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHZlbG9jaXR5KFhub3csIFlub3csIFhsYXRlciwgWWxhdGVyKSB7XG4gICAgdmFyIFhkaXN0ID0gWGxhdGVyIC0gWG5vdztcbiAgICB2YXIgWWRpc3QgPSBZbGF0ZXIgLSBZbm93O1xuICAgIHZhciBhbmdsZSA9IE1hdGguYXRhbjIoWWRpc3QsIFhkaXN0KTtcbiAgICByZXR1cm4geyBkeDogTWF0aC5jb3MoYW5nbGUpLCBkeTogTWF0aC5zaW4oYW5nbGUpIH07XG59XG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tQ29sb3IoKSB7XG4gICAgdmFyIGNvbG9yID0gXCIjXCI7XG4gICAgdmFyIGNoYXJBcnJheSA9IFtcbiAgICAgICAgMCxcbiAgICAgICAgMSxcbiAgICAgICAgMixcbiAgICAgICAgMyxcbiAgICAgICAgNCxcbiAgICAgICAgNSxcbiAgICAgICAgNixcbiAgICAgICAgNyxcbiAgICAgICAgOCxcbiAgICAgICAgOSxcbiAgICAgICAgXCJhXCIsXG4gICAgICAgIFwiYlwiLFxuICAgICAgICBcImNcIixcbiAgICAgICAgXCJkXCIsXG4gICAgICAgIFwiZVwiLFxuICAgICAgICBcImZcIixcbiAgICBdO1xuICAgIFswLCAxLCAyLCAzLCA0LCA1XS5mb3JFYWNoKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHZhciBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2KTtcbiAgICAgICAgY29sb3IgPSBjb2xvciArIGNoYXJBcnJheVtpbmRleF07XG4gICAgfSk7XG4gICAgcmV0dXJuIGNvbG9yO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJhbmdlKG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcbn1cbmV4cG9ydCB2YXIgaXNQcm9qZWN0aWxlT3V0ID0gZnVuY3Rpb24gKGFyYykge1xuICAgIHJldHVybiAoYXJjLnggPD0gLWFyYy5yYWRpdXMgfHxcbiAgICAgICAgYXJjLnggPj0gaW5uZXJXaWR0aCArIGFyYy5yYWRpdXMgfHxcbiAgICAgICAgYXJjLnkgPD0gLWFyYy5yYWRpdXMgfHxcbiAgICAgICAgYXJjLnkgPj0gaW5uZXJIZWlnaHQgKyBhcmMucmFkaXVzKTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=