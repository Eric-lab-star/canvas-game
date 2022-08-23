"use strict";
(self["webpackChunkcanvas_game"] = self["webpackChunkcanvas_game"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  margin: 0;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;AACX","sourcesContent":["body {\n  margin: 0;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/gsap/CSSPlugin.js":
/*!****************************************!*\
  !*** ./node_modules/gsap/CSSPlugin.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CSSPlugin": () => (/* binding */ CSSPlugin),
/* harmony export */   "_createElement": () => (/* binding */ _createElement),
/* harmony export */   "_getBBox": () => (/* binding */ _getBBox),
/* harmony export */   "checkPrefix": () => (/* binding */ _checkPropPrefix),
/* harmony export */   "default": () => (/* binding */ CSSPlugin)
/* harmony export */ });
/* harmony import */ var _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gsap-core.js */ "./node_modules/gsap/gsap-core.js");
/*!
 * CSSPlugin 3.11.0
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */


var _win,
    _doc,
    _docElement,
    _pluginInitted,
    _tempDiv,
    _tempDivStyler,
    _recentSetterPlugin,
    _reverting,
    _windowExists = function _windowExists() {
  return typeof window !== "undefined";
},
    _transformProps = {},
    _RAD2DEG = 180 / Math.PI,
    _DEG2RAD = Math.PI / 180,
    _atan2 = Math.atan2,
    _bigNum = 1e8,
    _capsExp = /([A-Z])/g,
    _horizontalExp = /(left|right|width|margin|padding|x)/i,
    _complexExp = /[\s,\(]\S/,
    _propertyAliases = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
},
    _renderCSSProp = function _renderCSSProp(ratio, data) {
  return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
},
    _renderPropWithEnd = function _renderPropWithEnd(ratio, data) {
  return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
},
    _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning(ratio, data) {
  return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u : data.b, data);
},
    //if units change, we need a way to render the original unit/value when the tween goes all the way back to the beginning (ratio:0)
_renderRoundedCSSProp = function _renderRoundedCSSProp(ratio, data) {
  var value = data.s + data.c * ratio;
  data.set(data.t, data.p, ~~(value + (value < 0 ? -.5 : .5)) + data.u, data);
},
    _renderNonTweeningValue = function _renderNonTweeningValue(ratio, data) {
  return data.set(data.t, data.p, ratio ? data.e : data.b, data);
},
    _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd(ratio, data) {
  return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
},
    _setterCSSStyle = function _setterCSSStyle(target, property, value) {
  return target.style[property] = value;
},
    _setterCSSProp = function _setterCSSProp(target, property, value) {
  return target.style.setProperty(property, value);
},
    _setterTransform = function _setterTransform(target, property, value) {
  return target._gsap[property] = value;
},
    _setterScale = function _setterScale(target, property, value) {
  return target._gsap.scaleX = target._gsap.scaleY = value;
},
    _setterScaleWithRender = function _setterScaleWithRender(target, property, value, data, ratio) {
  var cache = target._gsap;
  cache.scaleX = cache.scaleY = value;
  cache.renderTransform(ratio, cache);
},
    _setterTransformWithRender = function _setterTransformWithRender(target, property, value, data, ratio) {
  var cache = target._gsap;
  cache[property] = value;
  cache.renderTransform(ratio, cache);
},
    _transformProp = "transform",
    _transformOriginProp = _transformProp + "Origin",
    _saveStyle = function _saveStyle(property) {
  var _this = this;

  var target = this.target,
      style = target.style;

  if (property in _transformProps) {
    this.tfm = this.tfm || {};

    if (property !== "transform") {
      property = _propertyAliases[property] || property;
      ~property.indexOf(",") ? property.split(",").forEach(function (a) {
        return _this.tfm[a] = _get(target, a);
      }) : this.tfm[property] = target._gsap.x ? target._gsap[property] : _get(target, property); // note: scale would map to "scaleX,scaleY", thus we loop and apply them both.
    }

    target._gsap.svg && (this.svg = target.getAttribute(property) || "");

    if (this.props.indexOf(_transformProp) >= 0) {
      return;
    }

    property = _transformProp;
  }

  style && this.props.push(property, style[property]);
},
    _removeIndependentTransforms = function _removeIndependentTransforms(style) {
  if (style.translate) {
    style.removeProperty("translate");
    style.removeProperty("scale");
    style.removeProperty("rotate");
  }
},
    _revertStyle = function _revertStyle() {
  var props = this.props,
      target = this.target,
      style = target.style,
      cache = target._gsap,
      i,
      p;

  for (i = 0; i < props.length; i += 2) {
    props[i + 1] ? style[props[i]] = props[i + 1] : style.removeProperty(props[i].replace(_capsExp, "-$1").toLowerCase());
  }

  if (this.tfm) {
    cache.svg && target.setAttribute("transform", this.svg || "");

    for (p in this.tfm) {
      cache[p] = this.tfm[p];
    }

    i = _reverting();

    if (i && !i.isStart && !style[_transformProp]) {
      _removeIndependentTransforms(style);

      cache.uncache = 1; // if it's a startAt that's being reverted in the _initTween() of the core, we don't need to uncache transforms. This is purely a performance optimization.
    }
  }
},
    _getStyleSaver = function _getStyleSaver(target, properties) {
  var saver = {
    target: target,
    props: [],
    revert: _revertStyle,
    save: _saveStyle
  };
  properties && properties.split(",").forEach(function (p) {
    return saver.save(p);
  });
  return saver;
},
    _supports3D,
    _createElement = function _createElement(type, ns) {
  var e = _doc.createElementNS ? _doc.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc.createElement(type); //some servers swap in https for http in the namespace which can break things, making "style" inaccessible.

  return e.style ? e : _doc.createElement(type); //some environments won't allow access to the element's style when created with a namespace in which case we default to the standard createElement() to work around the issue. Also note that when GSAP is embedded directly inside an SVG file, createElement() won't allow access to the style object in Firefox (see https://greensock.com/forums/topic/20215-problem-using-tweenmax-in-standalone-self-containing-svg-file-err-cannot-set-property-csstext-of-undefined/).
},
    _getComputedProperty = function _getComputedProperty(target, property, skipPrefixFallback) {
  var cs = getComputedStyle(target);
  return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty(target, _checkPropPrefix(property) || property, 1) || ""; //css variables may not need caps swapped out for dashes and lowercase.
},
    _prefixes = "O,Moz,ms,Ms,Webkit".split(","),
    _checkPropPrefix = function _checkPropPrefix(property, element, preferPrefix) {
  var e = element || _tempDiv,
      s = e.style,
      i = 5;

  if (property in s && !preferPrefix) {
    return property;
  }

  property = property.charAt(0).toUpperCase() + property.substr(1);

  while (i-- && !(_prefixes[i] + property in s)) {}

  return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
},
    _initCore = function _initCore() {
  if (_windowExists() && window.document) {
    _win = window;
    _doc = _win.document;
    _docElement = _doc.documentElement;
    _tempDiv = _createElement("div") || {
      style: {}
    };
    _tempDivStyler = _createElement("div");
    _transformProp = _checkPropPrefix(_transformProp);
    _transformOriginProp = _transformProp + "Origin";
    _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"; //make sure to override certain properties that may contaminate measurements, in case the user has overreaching style sheets.

    _supports3D = !!_checkPropPrefix("perspective");
    _reverting = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.core.reverting;
    _pluginInitted = 1;
  }
},
    _getBBoxHack = function _getBBoxHack(swapIfPossible) {
  //works around issues in some browsers (like Firefox) that don't correctly report getBBox() on SVG elements inside a <defs> element and/or <mask>. We try creating an SVG, adding it to the documentElement and toss the element in there so that it's definitely part of the rendering tree, then grab the bbox and if it works, we actually swap out the original getBBox() method for our own that does these extra steps whenever getBBox is needed. This helps ensure that performance is optimal (only do all these extra steps when absolutely necessary...most elements don't need it).
  var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
      oldParent = this.parentNode,
      oldSibling = this.nextSibling,
      oldCSS = this.style.cssText,
      bbox;

  _docElement.appendChild(svg);

  svg.appendChild(this);
  this.style.display = "block";

  if (swapIfPossible) {
    try {
      bbox = this.getBBox();
      this._gsapBBox = this.getBBox; //store the original

      this.getBBox = _getBBoxHack;
    } catch (e) {}
  } else if (this._gsapBBox) {
    bbox = this._gsapBBox();
  }

  if (oldParent) {
    if (oldSibling) {
      oldParent.insertBefore(this, oldSibling);
    } else {
      oldParent.appendChild(this);
    }
  }

  _docElement.removeChild(svg);

  this.style.cssText = oldCSS;
  return bbox;
},
    _getAttributeFallbacks = function _getAttributeFallbacks(target, attributesArray) {
  var i = attributesArray.length;

  while (i--) {
    if (target.hasAttribute(attributesArray[i])) {
      return target.getAttribute(attributesArray[i]);
    }
  }
},
    _getBBox = function _getBBox(target) {
  var bounds;

  try {
    bounds = target.getBBox(); //Firefox throws errors if you try calling getBBox() on an SVG element that's not rendered (like in a <symbol> or <defs>). https://bugzilla.mozilla.org/show_bug.cgi?id=612118
  } catch (error) {
    bounds = _getBBoxHack.call(target, true);
  }

  bounds && (bounds.width || bounds.height) || target.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target, true)); //some browsers (like Firefox) misreport the bounds if the element has zero width and height (it just assumes it's at x:0, y:0), thus we need to manually grab the position in that case.

  return bounds && !bounds.width && !bounds.x && !bounds.y ? {
    x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
    y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : bounds;
},
    _isSVG = function _isSVG(e) {
  return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
},
    //reports if the element is an SVG on which getBBox() actually works
_removeProperty = function _removeProperty(target, property) {
  if (property) {
    var style = target.style;

    if (property in _transformProps && property !== _transformOriginProp) {
      property = _transformProp;
    }

    if (style.removeProperty) {
      if (property.substr(0, 2) === "ms" || property.substr(0, 6) === "webkit") {
        //Microsoft and some Webkit browsers don't conform to the standard of capitalizing the first prefix character, so we adjust so that when we prefix the caps with a dash, it's correct (otherwise it'd be "ms-transform" instead of "-ms-transform" for IE9, for example)
        property = "-" + property;
      }

      style.removeProperty(property.replace(_capsExp, "-$1").toLowerCase());
    } else {
      //note: old versions of IE use "removeAttribute()" instead of "removeProperty()"
      style.removeAttribute(property);
    }
  }
},
    _addNonTweeningPT = function _addNonTweeningPT(plugin, target, property, beginning, end, onlySetAtEnd) {
  var pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
  plugin._pt = pt;
  pt.b = beginning;
  pt.e = end;

  plugin._props.push(property);

  return pt;
},
    _nonConvertibleUnits = {
  deg: 1,
  rad: 1,
  turn: 1
},
    _nonStandardLayouts = {
  grid: 1,
  flex: 1
},
    //takes a single value like 20px and converts it to the unit specified, like "%", returning only the numeric amount.
_convertToUnit = function _convertToUnit(target, property, value, unit) {
  var curValue = parseFloat(value) || 0,
      curUnit = (value + "").trim().substr((curValue + "").length) || "px",
      // some browsers leave extra whitespace at the beginning of CSS variables, hence the need to trim()
  style = _tempDiv.style,
      horizontal = _horizontalExp.test(property),
      isRootSVG = target.tagName.toLowerCase() === "svg",
      measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"),
      amount = 100,
      toPixels = unit === "px",
      toPercent = unit === "%",
      px,
      parent,
      cache,
      isSVG;

  if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
    return curValue;
  }

  curUnit !== "px" && !toPixels && (curValue = _convertToUnit(target, property, value, "px"));
  isSVG = target.getCTM && _isSVG(target);

  if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
    px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
    return (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(toPercent ? curValue / px * amount : curValue / 100 * px);
  }

  style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
  parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;

  if (isSVG) {
    parent = (target.ownerSVGElement || {}).parentNode;
  }

  if (!parent || parent === _doc || !parent.appendChild) {
    parent = _doc.body;
  }

  cache = parent._gsap;

  if (cache && toPercent && cache.width && horizontal && cache.time === _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._ticker.time && !cache.uncache) {
    return (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(curValue / cache.width * amount);
  } else {
    (toPercent || curUnit === "%") && !_nonStandardLayouts[_getComputedProperty(parent, "display")] && (style.position = _getComputedProperty(target, "position"));
    parent === target && (style.position = "static"); // like for borderRadius, if it's a % we must have it relative to the target itself but that may not have position: relative or position: absolute in which case it'd go up the chain until it finds its offsetParent (bad). position: static protects against that.

    parent.appendChild(_tempDiv);
    px = _tempDiv[measureProperty];
    parent.removeChild(_tempDiv);
    style.position = "absolute";

    if (horizontal && toPercent) {
      cache = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._getCache)(parent);
      cache.time = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._ticker.time;
      cache.width = parent[measureProperty];
    }
  }

  return (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
},
    _get = function _get(target, property, unit, uncache) {
  var value;
  _pluginInitted || _initCore();

  if (property in _propertyAliases && property !== "transform") {
    property = _propertyAliases[property];

    if (~property.indexOf(",")) {
      property = property.split(",")[0];
    }
  }

  if (_transformProps[property] && property !== "transform") {
    value = _parseTransform(target, uncache);
    value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
  } else {
    value = target.style[property];

    if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
      value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._getProperty)(target, property) || (property === "opacity" ? 1 : 0); // note: some browsers, like Firefox, don't report borderRadius correctly! Instead, it only reports every corner like  borderTopLeftRadius
    }
  }

  return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
},
    _tweenComplexCSSString = function _tweenComplexCSSString(target, prop, start, end) {
  // note: we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
  if (!start || start === "none") {
    // some browsers like Safari actually PREFER the prefixed property and mis-report the unprefixed value like clipPath (BUG). In other words, even though clipPath exists in the style ("clipPath" in target.style) and it's set in the CSS properly (along with -webkit-clip-path), Safari reports clipPath as "none" whereas WebkitClipPath reports accurately like "ellipse(100% 0% at 50% 0%)", so in this case we must SWITCH to using the prefixed property instead. See https://greensock.com/forums/topic/18310-clippath-doesnt-work-on-ios/
    var p = _checkPropPrefix(prop, target, 1),
        s = p && _getComputedProperty(target, p, 1);

    if (s && s !== start) {
      prop = p;
      start = s;
    } else if (prop === "borderColor") {
      start = _getComputedProperty(target, "borderTopColor"); // Firefox bug: always reports "borderColor" as "", so we must fall back to borderTopColor. See https://greensock.com/forums/topic/24583-how-to-return-colors-that-i-had-after-reverse/
    }
  }

  var pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(this._pt, target.style, prop, 0, 1, _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._renderComplexString),
      index = 0,
      matchIndex = 0,
      a,
      result,
      startValues,
      startNum,
      color,
      startValue,
      endValue,
      endNum,
      chunk,
      endUnit,
      startUnit,
      endValues;
  pt.b = start;
  pt.e = end;
  start += ""; // ensure values are strings

  end += "";

  if (end === "auto") {
    target.style[prop] = end;
    end = _getComputedProperty(target, prop) || end;
    target.style[prop] = start;
  }

  a = [start, end];

  (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._colorStringFilter)(a); // pass an array with the starting and ending values and let the filter do whatever it needs to the values. If colors are found, it returns true and then we must match where the color shows up order-wise because for things like boxShadow, sometimes the browser provides the computed values with the color FIRST, but the user provides it with the color LAST, so flip them if necessary. Same for drop-shadow().


  start = a[0];
  end = a[1];
  startValues = start.match(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numWithUnitExp) || [];
  endValues = end.match(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numWithUnitExp) || [];

  if (endValues.length) {
    while (result = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numWithUnitExp.exec(end)) {
      endValue = result[0];
      chunk = end.substring(index, result.index);

      if (color) {
        color = (color + 1) % 5;
      } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
        color = 1;
      }

      if (endValue !== (startValue = startValues[matchIndex++] || "")) {
        startNum = parseFloat(startValue) || 0;
        startUnit = startValue.substr((startNum + "").length);
        endValue.charAt(1) === "=" && (endValue = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._parseRelative)(startNum, endValue) + startUnit);
        endNum = parseFloat(endValue);
        endUnit = endValue.substr((endNum + "").length);
        index = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numWithUnitExp.lastIndex - endUnit.length;

        if (!endUnit) {
          //if something like "perspective:300" is passed in and we must add a unit to the end
          endUnit = endUnit || _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[prop] || startUnit;

          if (index === end.length) {
            end += endUnit;
            pt.e += endUnit;
          }
        }

        if (startUnit !== endUnit) {
          startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
        } // these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.


        pt._pt = {
          _next: pt._pt,
          p: chunk || matchIndex === 1 ? chunk : ",",
          //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
          s: startNum,
          c: endNum - startNum,
          m: color && color < 4 || prop === "zIndex" ? Math.round : 0
        };
      }
    }

    pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)
  } else {
    pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
  }

  _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._relExp.test(end) && (pt.e = 0); //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).

  this._pt = pt; //start the linked list with this new PropTween. Remember, we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within another plugin too, thus "this" would refer to the plugin.

  return pt;
},
    _keywordToPercent = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
},
    _convertKeywordsToPercentages = function _convertKeywordsToPercentages(value) {
  var split = value.split(" "),
      x = split[0],
      y = split[1] || "50%";

  if (x === "top" || x === "bottom" || y === "left" || y === "right") {
    //the user provided them in the wrong order, so flip them
    value = x;
    x = y;
    y = value;
  }

  split[0] = _keywordToPercent[x] || x;
  split[1] = _keywordToPercent[y] || y;
  return split.join(" ");
},
    _renderClearProps = function _renderClearProps(ratio, data) {
  if (data.tween && data.tween._time === data.tween._dur) {
    var target = data.t,
        style = target.style,
        props = data.u,
        cache = target._gsap,
        prop,
        clearTransforms,
        i;

    if (props === "all" || props === true) {
      style.cssText = "";
      clearTransforms = 1;
    } else {
      props = props.split(",");
      i = props.length;

      while (--i > -1) {
        prop = props[i];

        if (_transformProps[prop]) {
          clearTransforms = 1;
          prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
        }

        _removeProperty(target, prop);
      }
    }

    if (clearTransforms) {
      _removeProperty(target, _transformProp);

      if (cache) {
        cache.svg && target.removeAttribute("transform");

        _parseTransform(target, 1); // force all the cached values back to "normal"/identity, otherwise if there's another tween that's already set to render transforms on this element, it could display the wrong values.


        cache.uncache = 1;

        _removeIndependentTransforms(style);
      }
    }
  }
},
    // note: specialProps should return 1 if (and only if) they have a non-zero priority. It indicates we need to sort the linked list.
_specialProps = {
  clearProps: function clearProps(plugin, target, property, endValue, tween) {
    if (tween.data !== "isFromStart") {
      var pt = plugin._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
      pt.u = endValue;
      pt.pr = -10;
      pt.tween = tween;

      plugin._props.push(property);

      return 1;
    }
  }
  /* className feature (about 0.4kb gzipped).
  , className(plugin, target, property, endValue, tween) {
  	let _renderClassName = (ratio, data) => {
  			data.css.render(ratio, data.css);
  			if (!ratio || ratio === 1) {
  				let inline = data.rmv,
  					target = data.t,
  					p;
  				target.setAttribute("class", ratio ? data.e : data.b);
  				for (p in inline) {
  					_removeProperty(target, p);
  				}
  			}
  		},
  		_getAllStyles = (target) => {
  			let styles = {},
  				computed = getComputedStyle(target),
  				p;
  			for (p in computed) {
  				if (isNaN(p) && p !== "cssText" && p !== "length") {
  					styles[p] = computed[p];
  				}
  			}
  			_setDefaults(styles, _parseTransform(target, 1));
  			return styles;
  		},
  		startClassList = target.getAttribute("class"),
  		style = target.style,
  		cssText = style.cssText,
  		cache = target._gsap,
  		classPT = cache.classPT,
  		inlineToRemoveAtEnd = {},
  		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
  		changingVars = {},
  		startVars = _getAllStyles(target),
  		transformRelated = /(transform|perspective)/i,
  		endVars, p;
  	if (classPT) {
  		classPT.r(1, classPT.d);
  		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
  	}
  	target.setAttribute("class", data.e);
  	endVars = _getAllStyles(target, true);
  	target.setAttribute("class", startClassList);
  	for (p in endVars) {
  		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
  			changingVars[p] = endVars[p];
  			if (!style[p] && style[p] !== "0") {
  				inlineToRemoveAtEnd[p] = 1;
  			}
  		}
  	}
  	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
  	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://greensock.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
  		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
  	}
  	_parseTransform(target, true); //to clear the caching of transforms
  	data.css = new gsap.plugins.css();
  	data.css.init(target, changingVars, tween);
  	plugin._props.push(...data.css._props);
  	return 1;
  }
  */

},

/*
 * --------------------------------------------------------------------------------------
 * TRANSFORMS
 * --------------------------------------------------------------------------------------
 */
_identity2DMatrix = [1, 0, 0, 1, 0, 0],
    _rotationalProperties = {},
    _isNullTransform = function _isNullTransform(value) {
  return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
},
    _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray(target) {
  var matrixString = _getComputedProperty(target, _transformProp);

  return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numExp).map(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round);
},
    _getMatrix = function _getMatrix(target, force2D) {
  var cache = target._gsap || (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._getCache)(target),
      style = target.style,
      matrix = _getComputedTransformMatrixAsArray(target),
      parent,
      nextSibling,
      temp,
      addedToDOM;

  if (cache.svg && target.getAttribute("transform")) {
    temp = target.transform.baseVal.consolidate().matrix; //ensures that even complex values like "translate(50,60) rotate(135,0,0)" are parsed because it mashes it into a matrix.

    matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
    return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
  } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
    //note: if offsetParent is null, that means the element isn't in the normal document flow, like if it has display:none or one of its ancestors has display:none). Firefox returns null for getComputedStyle() if the element is in an iframe that has display:none. https://bugzilla.mozilla.org/show_bug.cgi?id=548397
    //browsers don't report transforms accurately unless the element is in the DOM and has a display value that's not "none". Firefox and Microsoft browsers have a partial bug where they'll report transforms even if display:none BUT not any percentage-based values like translate(-50%, 8px) will be reported as if it's translate(0, 8px).
    temp = style.display;
    style.display = "block";
    parent = target.parentNode;

    if (!parent || !target.offsetParent) {
      // note: in 3.3.0 we switched target.offsetParent to _doc.body.contains(target) to avoid [sometimes unnecessary] MutationObserver calls but that wasn't adequate because there are edge cases where nested position: fixed elements need to get reparented to accurately sense transforms. See https://github.com/greensock/GSAP/issues/388 and https://github.com/greensock/GSAP/issues/375
      addedToDOM = 1; //flag

      nextSibling = target.nextElementSibling;

      _docElement.appendChild(target); //we must add it to the DOM in order to get values properly

    }

    matrix = _getComputedTransformMatrixAsArray(target);
    temp ? style.display = temp : _removeProperty(target, "display");

    if (addedToDOM) {
      nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
    }
  }

  return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
},
    _applySVGOrigin = function _applySVGOrigin(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
  var cache = target._gsap,
      matrix = matrixArray || _getMatrix(target, true),
      xOriginOld = cache.xOrigin || 0,
      yOriginOld = cache.yOrigin || 0,
      xOffsetOld = cache.xOffset || 0,
      yOffsetOld = cache.yOffset || 0,
      a = matrix[0],
      b = matrix[1],
      c = matrix[2],
      d = matrix[3],
      tx = matrix[4],
      ty = matrix[5],
      originSplit = origin.split(" "),
      xOrigin = parseFloat(originSplit[0]) || 0,
      yOrigin = parseFloat(originSplit[1]) || 0,
      bounds,
      determinant,
      x,
      y;

  if (!originIsAbsolute) {
    bounds = _getBBox(target);
    xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
    yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
  } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
    //if it's zero (like if scaleX and scaleY are zero), skip it to avoid errors with dividing by zero.
    x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
    y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
    xOrigin = x;
    yOrigin = y;
  }

  if (smooth || smooth !== false && cache.smooth) {
    tx = xOrigin - xOriginOld;
    ty = yOrigin - yOriginOld;
    cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
    cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
  } else {
    cache.xOffset = cache.yOffset = 0;
  }

  cache.xOrigin = xOrigin;
  cache.yOrigin = yOrigin;
  cache.smooth = !!smooth;
  cache.origin = origin;
  cache.originIsAbsolute = !!originIsAbsolute;
  target.style[_transformOriginProp] = "0px 0px"; //otherwise, if someone sets  an origin via CSS, it will likely interfere with the SVG transform attribute ones (because remember, we're baking the origin into the matrix() value).

  if (pluginToAddPropTweensTo) {
    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);

    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);

    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);

    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
  }

  target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
},
    _parseTransform = function _parseTransform(target, uncache) {
  var cache = target._gsap || new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.GSCache(target);

  if ("x" in cache && !uncache && !cache.uncache) {
    return cache;
  }

  var style = target.style,
      invertedScaleX = cache.scaleX < 0,
      px = "px",
      deg = "deg",
      cs = getComputedStyle(target),
      origin = _getComputedProperty(target, _transformOriginProp) || "0",
      x,
      y,
      z,
      scaleX,
      scaleY,
      rotation,
      rotationX,
      rotationY,
      skewX,
      skewY,
      perspective,
      xOrigin,
      yOrigin,
      matrix,
      angle,
      cos,
      sin,
      a,
      b,
      c,
      d,
      a12,
      a22,
      t1,
      t2,
      t3,
      a13,
      a23,
      a33,
      a42,
      a43,
      a32;
  x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
  scaleX = scaleY = 1;
  cache.svg = !!(target.getCTM && _isSVG(target));

  if (cs.translate) {
    // accommodate independent transforms by combining them into normal ones.
    if (cs.translate !== "none" || cs.scale !== "none" || cs.rotate !== "none") {
      style[_transformProp] = (cs.translate !== "none" ? "translate3d(" + (cs.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (cs.rotate !== "none" ? "rotate(" + cs.rotate + ") " : "") + (cs.scale !== "none" ? "scale(" + cs.scale.split(" ").join(",") + ") " : "") + cs[_transformProp];
    }

    style.scale = style.rotate = style.translate = "none";
  }

  matrix = _getMatrix(target, cache.svg);

  if (cache.svg) {
    t1 = (!cache.uncache || origin === "0px 0px") && !uncache && target.getAttribute("data-svg-origin"); // if origin is 0,0 and cache.uncache is true, let the recorded data-svg-origin stay. Otherwise, whenever we set cache.uncache to true, we'd need to set element.style.transformOrigin = (cache.xOrigin - bbox.x) + "px " + (cache.yOrigin - bbox.y) + "px". Remember, to work around browser inconsistencies we always force SVG elements' transformOrigin to 0,0 and offset the translation accordingly.

    _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
  }

  xOrigin = cache.xOrigin || 0;
  yOrigin = cache.yOrigin || 0;

  if (matrix !== _identity2DMatrix) {
    a = matrix[0]; //a11

    b = matrix[1]; //a21

    c = matrix[2]; //a31

    d = matrix[3]; //a41

    x = a12 = matrix[4];
    y = a22 = matrix[5]; //2D matrix

    if (matrix.length === 6) {
      scaleX = Math.sqrt(a * a + b * b);
      scaleY = Math.sqrt(d * d + c * c);
      rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0; //note: if scaleX is 0, we cannot accurately measure rotation. Same for skewX with a scaleY of 0. Therefore, we default to the previously recorded value (or zero if that doesn't exist).

      skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
      skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));

      if (cache.svg) {
        x -= xOrigin - (xOrigin * a + yOrigin * c);
        y -= yOrigin - (xOrigin * b + yOrigin * d);
      } //3D matrix

    } else {
      a32 = matrix[6];
      a42 = matrix[7];
      a13 = matrix[8];
      a23 = matrix[9];
      a33 = matrix[10];
      a43 = matrix[11];
      x = matrix[12];
      y = matrix[13];
      z = matrix[14];
      angle = _atan2(a32, a33);
      rotationX = angle * _RAD2DEG; //rotationX

      if (angle) {
        cos = Math.cos(-angle);
        sin = Math.sin(-angle);
        t1 = a12 * cos + a13 * sin;
        t2 = a22 * cos + a23 * sin;
        t3 = a32 * cos + a33 * sin;
        a13 = a12 * -sin + a13 * cos;
        a23 = a22 * -sin + a23 * cos;
        a33 = a32 * -sin + a33 * cos;
        a43 = a42 * -sin + a43 * cos;
        a12 = t1;
        a22 = t2;
        a32 = t3;
      } //rotationY


      angle = _atan2(-c, a33);
      rotationY = angle * _RAD2DEG;

      if (angle) {
        cos = Math.cos(-angle);
        sin = Math.sin(-angle);
        t1 = a * cos - a13 * sin;
        t2 = b * cos - a23 * sin;
        t3 = c * cos - a33 * sin;
        a43 = d * sin + a43 * cos;
        a = t1;
        b = t2;
        c = t3;
      } //rotationZ


      angle = _atan2(b, a);
      rotation = angle * _RAD2DEG;

      if (angle) {
        cos = Math.cos(angle);
        sin = Math.sin(angle);
        t1 = a * cos + b * sin;
        t2 = a12 * cos + a22 * sin;
        b = b * cos - a * sin;
        a22 = a22 * cos - a12 * sin;
        a = t1;
        a12 = t2;
      }

      if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
        //when rotationY is set, it will often be parsed as 180 degrees different than it should be, and rotationX and rotation both being 180 (it looks the same), so we adjust for that here.
        rotationX = rotation = 0;
        rotationY = 180 - rotationY;
      }

      scaleX = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(Math.sqrt(a * a + b * b + c * c));
      scaleY = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(Math.sqrt(a22 * a22 + a32 * a32));
      angle = _atan2(a12, a22);
      skewX = Math.abs(angle) > 0.0002 ? angle * _RAD2DEG : 0;
      perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
    }

    if (cache.svg) {
      //sense if there are CSS transforms applied on an SVG element in which case we must overwrite them when rendering. The transform attribute is more reliable cross-browser, but we can't just remove the CSS ones because they may be applied in a CSS rule somewhere (not just inline).
      t1 = target.getAttribute("transform");
      cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
      t1 && target.setAttribute("transform", t1);
    }
  }

  if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
    if (invertedScaleX) {
      scaleX *= -1;
      skewX += rotation <= 0 ? 180 : -180;
      rotation += rotation <= 0 ? 180 : -180;
    } else {
      scaleY *= -1;
      skewX += skewX <= 0 ? 180 : -180;
    }
  }

  uncache = uncache || cache.uncache;
  cache.x = x - ((cache.xPercent = x && (!uncache && cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
  cache.y = y - ((cache.yPercent = y && (!uncache && cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
  cache.z = z + px;
  cache.scaleX = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(scaleX);
  cache.scaleY = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(scaleY);
  cache.rotation = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(rotation) + deg;
  cache.rotationX = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(rotationX) + deg;
  cache.rotationY = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(rotationY) + deg;
  cache.skewX = skewX + deg;
  cache.skewY = skewY + deg;
  cache.transformPerspective = perspective + px;

  if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || 0) {
    style[_transformOriginProp] = _firstTwoOnly(origin);
  }

  cache.xOffset = cache.yOffset = 0;
  cache.force3D = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.force3D;
  cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
  cache.uncache = 0;
  return cache;
},
    _firstTwoOnly = function _firstTwoOnly(value) {
  return (value = value.split(" "))[0] + " " + value[1];
},
    //for handling transformOrigin values, stripping out the 3rd dimension
_addPxTranslate = function _addPxTranslate(target, start, value) {
  var unit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(start);
  return (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
},
    _renderNon3DTransforms = function _renderNon3DTransforms(ratio, cache) {
  cache.z = "0px";
  cache.rotationY = cache.rotationX = "0deg";
  cache.force3D = 0;

  _renderCSSTransforms(ratio, cache);
},
    _zeroDeg = "0deg",
    _zeroPx = "0px",
    _endParenthesis = ") ",
    _renderCSSTransforms = function _renderCSSTransforms(ratio, cache) {
  var _ref = cache || this,
      xPercent = _ref.xPercent,
      yPercent = _ref.yPercent,
      x = _ref.x,
      y = _ref.y,
      z = _ref.z,
      rotation = _ref.rotation,
      rotationY = _ref.rotationY,
      rotationX = _ref.rotationX,
      skewX = _ref.skewX,
      skewY = _ref.skewY,
      scaleX = _ref.scaleX,
      scaleY = _ref.scaleY,
      transformPerspective = _ref.transformPerspective,
      force3D = _ref.force3D,
      target = _ref.target,
      zOrigin = _ref.zOrigin,
      transforms = "",
      use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true; // Safari has a bug that causes it not to render 3D transform-origin values properly, so we force the z origin to 0, record it in the cache, and then do the math here to offset the translate values accordingly (basically do the 3D transform-origin part manually)


  if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
    var angle = parseFloat(rotationY) * _DEG2RAD,
        a13 = Math.sin(angle),
        a33 = Math.cos(angle),
        cos;

    angle = parseFloat(rotationX) * _DEG2RAD;
    cos = Math.cos(angle);
    x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
    y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
    z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
  }

  if (transformPerspective !== _zeroPx) {
    transforms += "perspective(" + transformPerspective + _endParenthesis;
  }

  if (xPercent || yPercent) {
    transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
  }

  if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
    transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
  }

  if (rotation !== _zeroDeg) {
    transforms += "rotate(" + rotation + _endParenthesis;
  }

  if (rotationY !== _zeroDeg) {
    transforms += "rotateY(" + rotationY + _endParenthesis;
  }

  if (rotationX !== _zeroDeg) {
    transforms += "rotateX(" + rotationX + _endParenthesis;
  }

  if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
    transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
  }

  if (scaleX !== 1 || scaleY !== 1) {
    transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
  }

  target.style[_transformProp] = transforms || "translate(0, 0)";
},
    _renderSVGTransforms = function _renderSVGTransforms(ratio, cache) {
  var _ref2 = cache || this,
      xPercent = _ref2.xPercent,
      yPercent = _ref2.yPercent,
      x = _ref2.x,
      y = _ref2.y,
      rotation = _ref2.rotation,
      skewX = _ref2.skewX,
      skewY = _ref2.skewY,
      scaleX = _ref2.scaleX,
      scaleY = _ref2.scaleY,
      target = _ref2.target,
      xOrigin = _ref2.xOrigin,
      yOrigin = _ref2.yOrigin,
      xOffset = _ref2.xOffset,
      yOffset = _ref2.yOffset,
      forceCSS = _ref2.forceCSS,
      tx = parseFloat(x),
      ty = parseFloat(y),
      a11,
      a21,
      a12,
      a22,
      temp;

  rotation = parseFloat(rotation);
  skewX = parseFloat(skewX);
  skewY = parseFloat(skewY);

  if (skewY) {
    //for performance reasons, we combine all skewing into the skewX and rotation values. Remember, a skewY of 10 degrees looks the same as a rotation of 10 degrees plus a skewX of 10 degrees.
    skewY = parseFloat(skewY);
    skewX += skewY;
    rotation += skewY;
  }

  if (rotation || skewX) {
    rotation *= _DEG2RAD;
    skewX *= _DEG2RAD;
    a11 = Math.cos(rotation) * scaleX;
    a21 = Math.sin(rotation) * scaleX;
    a12 = Math.sin(rotation - skewX) * -scaleY;
    a22 = Math.cos(rotation - skewX) * scaleY;

    if (skewX) {
      skewY *= _DEG2RAD;
      temp = Math.tan(skewX - skewY);
      temp = Math.sqrt(1 + temp * temp);
      a12 *= temp;
      a22 *= temp;

      if (skewY) {
        temp = Math.tan(skewY);
        temp = Math.sqrt(1 + temp * temp);
        a11 *= temp;
        a21 *= temp;
      }
    }

    a11 = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(a11);
    a21 = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(a21);
    a12 = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(a12);
    a22 = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(a22);
  } else {
    a11 = scaleX;
    a22 = scaleY;
    a21 = a12 = 0;
  }

  if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
    tx = _convertToUnit(target, "x", x, "px");
    ty = _convertToUnit(target, "y", y, "px");
  }

  if (xOrigin || yOrigin || xOffset || yOffset) {
    tx = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
    ty = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
  }

  if (xPercent || yPercent) {
    //The SVG spec doesn't support percentage-based translation in the "transform" attribute, so we merge it into the translation to simulate it.
    temp = target.getBBox();
    tx = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(tx + xPercent / 100 * temp.width);
    ty = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(ty + yPercent / 100 * temp.height);
  }

  temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
  target.setAttribute("transform", temp);
  forceCSS && (target.style[_transformProp] = temp); //some browsers prioritize CSS transforms over the transform attribute. When we sense that the user has CSS transforms applied, we must overwrite them this way (otherwise some browser simply won't render the  transform attribute changes!)
},
    _addRotationalPropTween = function _addRotationalPropTween(plugin, target, property, startNum, endValue) {
  var cap = 360,
      isString = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._isString)(endValue),
      endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1),
      change = endNum - startNum,
      finalValue = startNum + change + "deg",
      direction,
      pt;

  if (isString) {
    direction = endValue.split("_")[1];

    if (direction === "short") {
      change %= cap;

      if (change !== change % (cap / 2)) {
        change += change < 0 ? cap : -cap;
      }
    }

    if (direction === "cw" && change < 0) {
      change = (change + cap * _bigNum) % cap - ~~(change / cap) * cap;
    } else if (direction === "ccw" && change > 0) {
      change = (change - cap * _bigNum) % cap - ~~(change / cap) * cap;
    }
  }

  plugin._pt = pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
  pt.e = finalValue;
  pt.u = "deg";

  plugin._props.push(property);

  return pt;
},
    _assign = function _assign(target, source) {
  // Internet Explorer doesn't have Object.assign(), so we recreate it here.
  for (var p in source) {
    target[p] = source[p];
  }

  return target;
},
    _addRawTransformPTs = function _addRawTransformPTs(plugin, transforms, target) {
  //for handling cases where someone passes in a whole transform string, like transform: "scale(2, 3) rotate(20deg) translateY(30em)"
  var startCache = _assign({}, target._gsap),
      exclude = "perspective,force3D,transformOrigin,svgOrigin",
      style = target.style,
      endCache,
      p,
      startValue,
      endValue,
      startNum,
      endNum,
      startUnit,
      endUnit;

  if (startCache.svg) {
    startValue = target.getAttribute("transform");
    target.setAttribute("transform", "");
    style[_transformProp] = transforms;
    endCache = _parseTransform(target, 1);

    _removeProperty(target, _transformProp);

    target.setAttribute("transform", startValue);
  } else {
    startValue = getComputedStyle(target)[_transformProp];
    style[_transformProp] = transforms;
    endCache = _parseTransform(target, 1);
    style[_transformProp] = startValue;
  }

  for (p in _transformProps) {
    startValue = startCache[p];
    endValue = endCache[p];

    if (startValue !== endValue && exclude.indexOf(p) < 0) {
      //tweening to no perspective gives very unintuitive results - just keep the same perspective in that case.
      startUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(startValue);
      endUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(endValue);
      startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
      endNum = parseFloat(endValue);
      plugin._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
      plugin._pt.u = endUnit || 0;

      plugin._props.push(p);
    }
  }

  _assign(endCache, startCache);
}; // handle splitting apart padding, margin, borderWidth, and borderRadius into their 4 components. Firefox, for example, won't report borderRadius correctly - it will only do borderTopLeftRadius and the other corners. We also want to handle paddingTop, marginLeft, borderRightWidth, etc.


(0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)("padding,margin,Width,Radius", function (name, index) {
  var t = "Top",
      r = "Right",
      b = "Bottom",
      l = "Left",
      props = (index < 3 ? [t, r, b, l] : [t + l, t + r, b + r, b + l]).map(function (side) {
    return index < 2 ? name + side : "border" + side + name;
  });

  _specialProps[index > 1 ? "border" + name : name] = function (plugin, target, property, endValue, tween) {
    var a, vars;

    if (arguments.length < 4) {
      // getter, passed target, property, and unit (from _get())
      a = props.map(function (prop) {
        return _get(plugin, prop, property);
      });
      vars = a.join(" ");
      return vars.split(a[0]).length === 5 ? a[0] : vars;
    }

    a = (endValue + "").split(" ");
    vars = {};
    props.forEach(function (prop, i) {
      return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
    });
    plugin.init(target, vars, tween);
  };
});

var CSSPlugin = {
  name: "css",
  register: _initCore,
  targetTest: function targetTest(target) {
    return target.style && target.nodeType;
  },
  init: function init(target, vars, tween, index, targets) {
    var props = this._props,
        style = target.style,
        startAt = tween.vars.startAt,
        startValue,
        endValue,
        endNum,
        startNum,
        type,
        specialProp,
        p,
        startUnit,
        endUnit,
        relative,
        isTransformRelated,
        transformPropTween,
        cache,
        smooth,
        hasPriority,
        inlineProps;
    _pluginInitted || _initCore(); // we may call init() multiple times on the same plugin instance, like when adding special properties, so make sure we don't overwrite the revert data or inlineProps

    this.styles = this.styles || _getStyleSaver(target);
    inlineProps = this.styles.props;
    this.tween = tween;

    for (p in vars) {
      if (p === "autoRound") {
        continue;
      }

      endValue = vars[p];

      if (_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._plugins[p] && (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._checkPlugin)(p, vars, tween, index, target, targets)) {
        // plugins
        continue;
      }

      type = typeof endValue;
      specialProp = _specialProps[p];

      if (type === "function") {
        endValue = endValue.call(tween, index, target, targets);
        type = typeof endValue;
      }

      if (type === "string" && ~endValue.indexOf("random(")) {
        endValue = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._replaceRandom)(endValue);
      }

      if (specialProp) {
        specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
      } else if (p.substr(0, 2) === "--") {
        //CSS variable
        startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
        endValue += "";
        _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._colorExp.lastIndex = 0;

        if (!_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._colorExp.test(startValue)) {
          // colors don't have units
          startUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(startValue);
          endUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(endValue);
        }

        endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
        this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
        props.push(p);
        inlineProps.push(p, style[p]);
      } else if (type !== "undefined") {
        if (startAt && p in startAt) {
          // in case someone hard-codes a complex value as the start, like top: "calc(2vh / 2)". Without this, it'd use the computed value (always in px)
          startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
          (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._isString)(startValue) && ~startValue.indexOf("random(") && (startValue = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._replaceRandom)(startValue));
          (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(startValue + "") || (startValue += _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[p] || (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(_get(target, p)) || ""); // for cases when someone passes in a unitless value like {x: 100}; if we try setting translate(100, 0px) it won't work.

          (startValue + "").charAt(1) === "=" && (startValue = _get(target, p)); // can't work with relative values
        } else {
          startValue = _get(target, p);
        }

        startNum = parseFloat(startValue);
        relative = type === "string" && endValue.charAt(1) === "=" && endValue.substr(0, 2);
        relative && (endValue = endValue.substr(2));
        endNum = parseFloat(endValue);

        if (p in _propertyAliases) {
          if (p === "autoAlpha") {
            //special case where we control the visibility along with opacity. We still allow the opacity value to pass through and get tweened.
            if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
              //if visibility is initially set to "hidden", we should interpret that as intent to make opacity 0 (a convenience)
              startNum = 0;
            }

            inlineProps.push("visibility", style.visibility);

            _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
          }

          if (p !== "scale" && p !== "transform") {
            p = _propertyAliases[p];
            ~p.indexOf(",") && (p = p.split(",")[0]);
          }
        }

        isTransformRelated = p in _transformProps; //--- TRANSFORM-RELATED ---

        if (isTransformRelated) {
          this.styles.save(p);

          if (!transformPropTween) {
            cache = target._gsap;
            cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform); // if, for example, gsap.set(... {transform:"translateX(50vw)"}), the _get() call doesn't parse the transform, thus cache.renderTransform won't be set yet so force the parsing of the transform here.

            smooth = vars.smoothOrigin !== false && cache.smooth;
            transformPropTween = this._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1); //the first time through, create the rendering PropTween so that it runs LAST (in the linked list, we keep adding to the beginning)

            transformPropTween.dep = 1; //flag it as dependent so that if things get killed/overwritten and this is the only PropTween left, we can safely kill the whole tween.
          }

          if (p === "scale") {
            this._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(this._pt, cache, "scaleY", cache.scaleY, (relative ? (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._parseRelative)(cache.scaleY, relative + endNum) : endNum) - cache.scaleY || 0, _renderCSSProp);
            this._pt.u = 0;
            props.push("scaleY", p);
            p += "X";
          } else if (p === "transformOrigin") {
            inlineProps.push(_transformOriginProp, style[_transformOriginProp]);
            endValue = _convertKeywordsToPercentages(endValue); //in case something like "left top" or "bottom right" is passed in. Convert to percentages.

            if (cache.svg) {
              _applySVGOrigin(target, endValue, 0, smooth, 0, this);
            } else {
              endUnit = parseFloat(endValue.split(" ")[2]) || 0; //handle the zOrigin separately!

              endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);

              _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
            }

            continue;
          } else if (p === "svgOrigin") {
            _applySVGOrigin(target, endValue, 1, smooth, 0, this);

            continue;
          } else if (p in _rotationalProperties) {
            _addRotationalPropTween(this, cache, p, startNum, relative ? (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._parseRelative)(startNum, relative + endValue) : endValue);

            continue;
          } else if (p === "smoothOrigin") {
            _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);

            continue;
          } else if (p === "force3D") {
            cache[p] = endValue;
            continue;
          } else if (p === "transform") {
            _addRawTransformPTs(this, endValue, target);

            continue;
          }
        } else if (!(p in style)) {
          p = _checkPropPrefix(p) || p;
        }

        if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
          startUnit = (startValue + "").substr((startNum + "").length);
          endNum || (endNum = 0); // protect against NaN

          endUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(endValue) || (p in _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units ? _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[p] : startUnit);
          startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
          this._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, (relative ? (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._parseRelative)(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
          this._pt.u = endUnit || 0;

          if (startUnit !== endUnit && endUnit !== "%") {
            //when the tween goes all the way back to the beginning, we need to revert it to the OLD/ORIGINAL value (with those units). We record that as a "b" (beginning) property and point to a render method that handles that. (performance optimization)
            this._pt.b = startValue;
            this._pt.r = _renderCSSPropWithBeginning;
          }
        } else if (!(p in style)) {
          if (p in target) {
            //maybe it's not a style - it could be a property added directly to an element in which case we'll try to animate that.
            this.add(target, p, startValue || target[p], relative ? relative + endValue : endValue, index, targets);
          } else {
            (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._missingPlugin)(p, endValue);

            continue;
          }
        } else {
          _tweenComplexCSSString.call(this, target, p, startValue, relative ? relative + endValue : endValue);
        }

        isTransformRelated || inlineProps.push(p, style[p]);
        props.push(p);
      }
    }

    hasPriority && (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._sortPropTweensByPriority)(this);
  },
  render: function render(ratio, data) {
    if (data.tween._time || !_reverting()) {
      var pt = data._pt;

      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }
    } else {
      data.styles.revert();
    }
  },
  get: _get,
  aliases: _propertyAliases,
  getSetter: function getSetter(target, property, plugin) {
    //returns a setter function that accepts target, property, value and applies it accordingly. Remember, properties like "x" aren't as simple as target.style.property = value because they've got to be applied to a proxy object and then merged into a transform string in a renderer.
    var p = _propertyAliases[property];
    p && p.indexOf(",") < 0 && (property = p);
    return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !(0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._isUndefined)(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._getSetter)(target, property);
  },
  core: {
    _removeProperty: _removeProperty,
    _getMatrix: _getMatrix
  }
};
_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.utils.checkPrefix = _checkPropPrefix;
_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.core.getStyleSaver = _getStyleSaver;

(function (positionAndScale, rotation, others, aliases) {
  var all = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)(positionAndScale + "," + rotation + "," + others, function (name) {
    _transformProps[name] = 1;
  });

  (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)(rotation, function (name) {
    _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[name] = "deg";
    _rotationalProperties[name] = 1;
  });

  _propertyAliases[all[13]] = positionAndScale + "," + rotation;

  (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)(aliases, function (name) {
    var split = name.split(":");
    _propertyAliases[split[1]] = all[split[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");

(0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (name) {
  _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[name] = "px";
});

_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(CSSPlugin);


/***/ }),

/***/ "./node_modules/gsap/gsap-core.js":
/*!****************************************!*\
  !*** ./node_modules/gsap/gsap-core.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Animation": () => (/* binding */ Animation),
/* harmony export */   "Back": () => (/* binding */ Back),
/* harmony export */   "Bounce": () => (/* binding */ Bounce),
/* harmony export */   "Circ": () => (/* binding */ Circ),
/* harmony export */   "Cubic": () => (/* binding */ Cubic),
/* harmony export */   "Elastic": () => (/* binding */ Elastic),
/* harmony export */   "Expo": () => (/* binding */ Expo),
/* harmony export */   "GSCache": () => (/* binding */ GSCache),
/* harmony export */   "Linear": () => (/* binding */ Linear),
/* harmony export */   "Power0": () => (/* binding */ Power0),
/* harmony export */   "Power1": () => (/* binding */ Power1),
/* harmony export */   "Power2": () => (/* binding */ Power2),
/* harmony export */   "Power3": () => (/* binding */ Power3),
/* harmony export */   "Power4": () => (/* binding */ Power4),
/* harmony export */   "PropTween": () => (/* binding */ PropTween),
/* harmony export */   "Quad": () => (/* binding */ Quad),
/* harmony export */   "Quart": () => (/* binding */ Quart),
/* harmony export */   "Quint": () => (/* binding */ Quint),
/* harmony export */   "Sine": () => (/* binding */ Sine),
/* harmony export */   "SteppedEase": () => (/* binding */ SteppedEase),
/* harmony export */   "Strong": () => (/* binding */ Strong),
/* harmony export */   "Timeline": () => (/* binding */ Timeline),
/* harmony export */   "TimelineLite": () => (/* binding */ Timeline),
/* harmony export */   "TimelineMax": () => (/* binding */ Timeline),
/* harmony export */   "Tween": () => (/* binding */ Tween),
/* harmony export */   "TweenLite": () => (/* binding */ Tween),
/* harmony export */   "TweenMax": () => (/* binding */ Tween),
/* harmony export */   "_checkPlugin": () => (/* binding */ _checkPlugin),
/* harmony export */   "_colorExp": () => (/* binding */ _colorExp),
/* harmony export */   "_colorStringFilter": () => (/* binding */ _colorStringFilter),
/* harmony export */   "_config": () => (/* binding */ _config),
/* harmony export */   "_forEachName": () => (/* binding */ _forEachName),
/* harmony export */   "_getCache": () => (/* binding */ _getCache),
/* harmony export */   "_getProperty": () => (/* binding */ _getProperty),
/* harmony export */   "_getSetter": () => (/* binding */ _getSetter),
/* harmony export */   "_isString": () => (/* binding */ _isString),
/* harmony export */   "_isUndefined": () => (/* binding */ _isUndefined),
/* harmony export */   "_missingPlugin": () => (/* binding */ _missingPlugin),
/* harmony export */   "_numExp": () => (/* binding */ _numExp),
/* harmony export */   "_numWithUnitExp": () => (/* binding */ _numWithUnitExp),
/* harmony export */   "_parseRelative": () => (/* binding */ _parseRelative),
/* harmony export */   "_plugins": () => (/* binding */ _plugins),
/* harmony export */   "_relExp": () => (/* binding */ _relExp),
/* harmony export */   "_removeLinkedListItem": () => (/* binding */ _removeLinkedListItem),
/* harmony export */   "_renderComplexString": () => (/* binding */ _renderComplexString),
/* harmony export */   "_replaceRandom": () => (/* binding */ _replaceRandom),
/* harmony export */   "_round": () => (/* binding */ _round),
/* harmony export */   "_roundModifier": () => (/* binding */ _roundModifier),
/* harmony export */   "_setDefaults": () => (/* binding */ _setDefaults),
/* harmony export */   "_sortPropTweensByPriority": () => (/* binding */ _sortPropTweensByPriority),
/* harmony export */   "_ticker": () => (/* binding */ _ticker),
/* harmony export */   "clamp": () => (/* binding */ clamp),
/* harmony export */   "default": () => (/* binding */ gsap),
/* harmony export */   "distribute": () => (/* binding */ distribute),
/* harmony export */   "getUnit": () => (/* binding */ getUnit),
/* harmony export */   "gsap": () => (/* binding */ gsap),
/* harmony export */   "interpolate": () => (/* binding */ interpolate),
/* harmony export */   "mapRange": () => (/* binding */ mapRange),
/* harmony export */   "normalize": () => (/* binding */ normalize),
/* harmony export */   "pipe": () => (/* binding */ pipe),
/* harmony export */   "random": () => (/* binding */ random),
/* harmony export */   "selector": () => (/* binding */ selector),
/* harmony export */   "shuffle": () => (/* binding */ shuffle),
/* harmony export */   "snap": () => (/* binding */ snap),
/* harmony export */   "splitColor": () => (/* binding */ splitColor),
/* harmony export */   "toArray": () => (/* binding */ toArray),
/* harmony export */   "unitize": () => (/* binding */ unitize),
/* harmony export */   "wrap": () => (/* binding */ wrap),
/* harmony export */   "wrapYoyo": () => (/* binding */ wrapYoyo)
/* harmony export */ });
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/*!
 * GSAP 3.11.0
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */
var _config = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
},
    _defaults = {
  duration: .5,
  overwrite: false,
  delay: 0
},
    _suppressOverwrites,
    _reverting,
    _context,
    _bigNum = 1e8,
    _tinyNum = 1 / _bigNum,
    _2PI = Math.PI * 2,
    _HALF_PI = _2PI / 4,
    _gsID = 0,
    _sqrt = Math.sqrt,
    _cos = Math.cos,
    _sin = Math.sin,
    _isString = function _isString(value) {
  return typeof value === "string";
},
    _isFunction = function _isFunction(value) {
  return typeof value === "function";
},
    _isNumber = function _isNumber(value) {
  return typeof value === "number";
},
    _isUndefined = function _isUndefined(value) {
  return typeof value === "undefined";
},
    _isObject = function _isObject(value) {
  return typeof value === "object";
},
    _isNotFalse = function _isNotFalse(value) {
  return value !== false;
},
    _windowExists = function _windowExists() {
  return typeof window !== "undefined";
},
    _isFuncOrString = function _isFuncOrString(value) {
  return _isFunction(value) || _isString(value);
},
    _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function () {},
    // note: IE10 has ArrayBuffer, but NOT ArrayBuffer.isView().
_isArray = Array.isArray,
    _strictNumExp = /(?:-?\.?\d|\.)+/gi,
    //only numbers (including negatives and decimals) but NOT relative values.
_numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    //finds any numbers, including ones that start with += or -=, negative numbers, and ones in scientific notation like 1e-8.
_numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    //duplicate so that while we're looping through matches from exec(), it doesn't contaminate the lastIndex of _numExp which we use to search for colors too.
_relExp = /[+-]=-?[.\d]+/,
    _delimitedValueExp = /[^,'"\[\]\s]+/gi,
    // previously /[#\-+.]*\b[a-z\d\-=+%.]+/gi but didn't catch special characters.
_unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    _globalTimeline,
    _win,
    _coreInitted,
    _doc,
    _globals = {},
    _installScope = {},
    _coreReady,
    _install = function _install(scope) {
  return (_installScope = _merge(scope, _globals)) && gsap;
},
    _missingPlugin = function _missingPlugin(property, value) {
  return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
},
    _warn = function _warn(message, suppress) {
  return !suppress && console.warn(message);
},
    _addGlobal = function _addGlobal(name, obj) {
  return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
},
    _emptyFunc = function _emptyFunc() {
  return 0;
},
    _startAtRevertConfig = {
  suppressEvents: true,
  isStart: true
},
    _revertConfig = {
  suppressEvents: true
},
    _reservedProps = {},
    _lazyTweens = [],
    _lazyLookup = {},
    _lastRenderedFrame,
    _plugins = {},
    _effects = {},
    _nextGCFrame = 30,
    _harnessPlugins = [],
    _callbackNames = "",
    _harness = function _harness(targets) {
  var target = targets[0],
      harnessPlugin,
      i;
  _isObject(target) || _isFunction(target) || (targets = [targets]);

  if (!(harnessPlugin = (target._gsap || {}).harness)) {
    // find the first target with a harness. We assume targets passed into an animation will be of similar type, meaning the same kind of harness can be used for them all (performance optimization)
    i = _harnessPlugins.length;

    while (i-- && !_harnessPlugins[i].targetTest(target)) {}

    harnessPlugin = _harnessPlugins[i];
  }

  i = targets.length;

  while (i--) {
    targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
  }

  return targets;
},
    _getCache = function _getCache(target) {
  return target._gsap || _harness(toArray(target))[0]._gsap;
},
    _getProperty = function _getProperty(target, property, v) {
  return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
},
    _forEachName = function _forEachName(names, func) {
  return (names = names.split(",")).forEach(func) || names;
},
    //split a comma-delimited list of names into an array, then run a forEach() function and return the split array (this is just a way to consolidate/shorten some code).
_round = function _round(value) {
  return Math.round(value * 100000) / 100000 || 0;
},
    _roundPrecise = function _roundPrecise(value) {
  return Math.round(value * 10000000) / 10000000 || 0;
},
    // increased precision mostly for timing values.
_parseRelative = function _parseRelative(start, value) {
  var operator = value.charAt(0),
      end = parseFloat(value.substr(2));
  start = parseFloat(start);
  return operator === "+" ? start + end : operator === "-" ? start - end : operator === "*" ? start * end : start / end;
},
    _arrayContainsAny = function _arrayContainsAny(toSearch, toFind) {
  //searches one array to find matches for any of the items in the toFind array. As soon as one is found, it returns true. It does NOT return all the matches; it's simply a boolean search.
  var l = toFind.length,
      i = 0;

  for (; toSearch.indexOf(toFind[i]) < 0 && ++i < l;) {}

  return i < l;
},
    _lazyRender = function _lazyRender() {
  var l = _lazyTweens.length,
      a = _lazyTweens.slice(0),
      i,
      tween;

  _lazyLookup = {};
  _lazyTweens.length = 0;

  for (i = 0; i < l; i++) {
    tween = a[i];
    tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
  }
},
    _lazySafeRender = function _lazySafeRender(animation, time, suppressEvents, force) {
  _lazyTweens.length && _lazyRender();
  animation.render(time, suppressEvents, force || _reverting);
  _lazyTweens.length && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when someone calls seek() or time() or progress(), they expect an immediate render.
},
    _numericIfPossible = function _numericIfPossible(value) {
  var n = parseFloat(value);
  return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
},
    _passThrough = function _passThrough(p) {
  return p;
},
    _setDefaults = function _setDefaults(obj, defaults) {
  for (var p in defaults) {
    p in obj || (obj[p] = defaults[p]);
  }

  return obj;
},
    _setKeyframeDefaults = function _setKeyframeDefaults(excludeDuration) {
  return function (obj, defaults) {
    for (var p in defaults) {
      p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults[p]);
    }
  };
},
    _merge = function _merge(base, toMerge) {
  for (var p in toMerge) {
    base[p] = toMerge[p];
  }

  return base;
},
    _mergeDeep = function _mergeDeep(base, toMerge) {
  for (var p in toMerge) {
    p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
  }

  return base;
},
    _copyExcluding = function _copyExcluding(obj, excluding) {
  var copy = {},
      p;

  for (p in obj) {
    p in excluding || (copy[p] = obj[p]);
  }

  return copy;
},
    _inheritDefaults = function _inheritDefaults(vars) {
  var parent = vars.parent || _globalTimeline,
      func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults;

  if (_isNotFalse(vars.inherit)) {
    while (parent) {
      func(vars, parent.vars.defaults);
      parent = parent.parent || parent._dp;
    }
  }

  return vars;
},
    _arraysMatch = function _arraysMatch(a1, a2) {
  var i = a1.length,
      match = i === a2.length;

  while (match && i-- && a1[i] === a2[i]) {}

  return i < 0;
},
    _addLinkedListItem = function _addLinkedListItem(parent, child, firstProp, lastProp, sortBy) {
  if (firstProp === void 0) {
    firstProp = "_first";
  }

  if (lastProp === void 0) {
    lastProp = "_last";
  }

  var prev = parent[lastProp],
      t;

  if (sortBy) {
    t = child[sortBy];

    while (prev && prev[sortBy] > t) {
      prev = prev._prev;
    }
  }

  if (prev) {
    child._next = prev._next;
    prev._next = child;
  } else {
    child._next = parent[firstProp];
    parent[firstProp] = child;
  }

  if (child._next) {
    child._next._prev = child;
  } else {
    parent[lastProp] = child;
  }

  child._prev = prev;
  child.parent = child._dp = parent;
  return child;
},
    _removeLinkedListItem = function _removeLinkedListItem(parent, child, firstProp, lastProp) {
  if (firstProp === void 0) {
    firstProp = "_first";
  }

  if (lastProp === void 0) {
    lastProp = "_last";
  }

  var prev = child._prev,
      next = child._next;

  if (prev) {
    prev._next = next;
  } else if (parent[firstProp] === child) {
    parent[firstProp] = next;
  }

  if (next) {
    next._prev = prev;
  } else if (parent[lastProp] === child) {
    parent[lastProp] = prev;
  }

  child._next = child._prev = child.parent = null; // don't delete the _dp just so we can revert if necessary. But parent should be null to indicate the item isn't in a linked list.
},
    _removeFromParent = function _removeFromParent(child, onlyIfParentHasAutoRemove) {
  child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove(child);
  child._act = 0;
},
    _uncache = function _uncache(animation, child) {
  if (animation && (!child || child._end > animation._dur || child._start < 0)) {
    // performance optimization: if a child animation is passed in we should only uncache if that child EXTENDS the animation (its end time is beyond the end)
    var a = animation;

    while (a) {
      a._dirty = 1;
      a = a.parent;
    }
  }

  return animation;
},
    _recacheAncestors = function _recacheAncestors(animation) {
  var parent = animation.parent;

  while (parent && parent.parent) {
    //sometimes we must force a re-sort of all children and update the duration/totalDuration of all ancestor timelines immediately in case, for example, in the middle of a render loop, one tween alters another tween's timeScale which shoves its startTime before 0, forcing the parent timeline to shift around and shiftChildren() which could affect that next tween's render (startTime). Doesn't matter for the root timeline though.
    parent._dirty = 1;
    parent.totalDuration();
    parent = parent.parent;
  }

  return animation;
},
    _rewindStartAt = function _rewindStartAt(tween, totalTime, suppressEvents, force) {
  return tween._startAt && (_reverting ? tween._startAt.revert(_revertConfig) : tween.vars.immediateRender && !tween.vars.autoRevert || tween._startAt.render(totalTime, true, force));
},
    _hasNoPausedAncestors = function _hasNoPausedAncestors(animation) {
  return !animation || animation._ts && _hasNoPausedAncestors(animation.parent);
},
    _elapsedCycleDuration = function _elapsedCycleDuration(animation) {
  return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
},
    // feed in the totalTime and cycleDuration and it'll return the cycle (iteration minus 1) and if the playhead is exactly at the very END, it will NOT bump up to the next cycle.
_animationCycle = function _animationCycle(tTime, cycleDuration) {
  var whole = Math.floor(tTime /= cycleDuration);
  return tTime && whole === tTime ? whole - 1 : whole;
},
    _parentToChildTotalTime = function _parentToChildTotalTime(parentTime, child) {
  return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
},
    _setEnd = function _setEnd(animation) {
  return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
},
    _alignPlayhead = function _alignPlayhead(animation, totalTime) {
  // adjusts the animation's _start and _end according to the provided totalTime (only if the parent's smoothChildTiming is true and the animation isn't paused). It doesn't do any rendering or forcing things back into parent timelines, etc. - that's what totalTime() is for.
  var parent = animation._dp;

  if (parent && parent.smoothChildTiming && animation._ts) {
    animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));

    _setEnd(animation);

    parent._dirty || _uncache(parent, animation); //for performance improvement. If the parent's cache is already dirty, it already took care of marking the ancestors as dirty too, so skip the function call here.
  }

  return animation;
},

/*
_totalTimeToTime = (clampedTotalTime, duration, repeat, repeatDelay, yoyo) => {
	let cycleDuration = duration + repeatDelay,
		time = _round(clampedTotalTime % cycleDuration);
	if (time > duration) {
		time = duration;
	}
	return (yoyo && (~~(clampedTotalTime / cycleDuration) & 1)) ? duration - time : time;
},
*/
_postAddChecks = function _postAddChecks(timeline, child) {
  var t;

  if (child._time || child._initted && !child._dur) {
    //in case, for example, the _start is moved on a tween that has already rendered. Imagine it's at its end state, then the startTime is moved WAY later (after the end of this timeline), it should render at its beginning.
    t = _parentToChildTotalTime(timeline.rawTime(), child);

    if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) {
      child.render(t, true);
    }
  } //if the timeline has already ended but the inserted tween/timeline extends the duration, we should enable this timeline again so that it renders properly. We should also align the playhead with the parent timeline's when appropriate.


  if (_uncache(timeline, child)._dp && timeline._initted && timeline._time >= timeline._dur && timeline._ts) {
    //in case any of the ancestors had completed but should now be enabled...
    if (timeline._dur < timeline.duration()) {
      t = timeline;

      while (t._dp) {
        t.rawTime() >= 0 && t.totalTime(t._tTime); //moves the timeline (shifts its startTime) if necessary, and also enables it. If it's currently zero, though, it may not be scheduled to render until later so there's no need to force it to align with the current playhead position. Only move to catch up with the playhead.

        t = t._dp;
      }
    }

    timeline._zTime = -_tinyNum; // helps ensure that the next render() will be forced (crossingStart = true in render()), even if the duration hasn't changed (we're adding a child which would need to get rendered). Definitely an edge case. Note: we MUST do this AFTER the loop above where the totalTime() might trigger a render() because this _addToTimeline() method gets called from the Animation constructor, BEFORE tweens even record their targets, etc. so we wouldn't want things to get triggered in the wrong order.
  }
},
    _addToTimeline = function _addToTimeline(timeline, child, position, skipChecks) {
  child.parent && _removeFromParent(child);
  child._start = _roundPrecise((_isNumber(position) ? position : position || timeline !== _globalTimeline ? _parsePosition(timeline, position, child) : timeline._time) + child._delay);
  child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));

  _addLinkedListItem(timeline, child, "_first", "_last", timeline._sort ? "_start" : 0);

  _isFromOrFromStart(child) || (timeline._recent = child);
  skipChecks || _postAddChecks(timeline, child);
  timeline._ts < 0 && _alignPlayhead(timeline, timeline._tTime); // if the timeline is reversed and the new child makes it longer, we may need to adjust the parent's _start (push it back)

  return timeline;
},
    _scrollTrigger = function _scrollTrigger(animation, trigger) {
  return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
},
    _attemptInitTween = function _attemptInitTween(tween, totalTime, force, suppressEvents) {
  _initTween(tween, totalTime);

  if (!tween._initted) {
    return 1;
  }

  if (!force && tween._pt && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
    _lazyTweens.push(tween);

    tween._lazy = [totalTime, suppressEvents];
    return 1;
  }
},
    _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart(_ref) {
  var parent = _ref.parent;
  return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart(parent));
},
    // check parent's _lock because when a timeline repeats/yoyos and does its artificial wrapping, we shouldn't force the ratio back to 0
_isFromOrFromStart = function _isFromOrFromStart(_ref2) {
  var data = _ref2.data;
  return data === "isFromStart" || data === "isStart";
},
    _renderZeroDurationTween = function _renderZeroDurationTween(tween, totalTime, suppressEvents, force) {
  var prevRatio = tween.ratio,
      ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1,
      // if the tween or its parent is reversed and the totalTime is 0, we should go to a ratio of 0. Edge case: if a from() or fromTo() stagger tween is placed later in a timeline, the "startAt" zero-duration tween could initially render at a time when the parent timeline's playhead is technically BEFORE where this tween is, so make sure that any "from" and "fromTo" startAt tweens are rendered the first time at a ratio of 1.
  repeatDelay = tween._rDelay,
      tTime = 0,
      pt,
      iteration,
      prevIteration;

  if (repeatDelay && tween._repeat) {
    // in case there's a zero-duration tween that has a repeat with a repeatDelay
    tTime = _clamp(0, tween._tDur, totalTime);
    iteration = _animationCycle(tTime, repeatDelay);
    tween._yoyo && iteration & 1 && (ratio = 1 - ratio);

    if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
      // if iteration changed
      prevRatio = 1 - ratio;
      tween.vars.repeatRefresh && tween._initted && tween.invalidate();
    }
  }

  if (ratio !== prevRatio || _reverting || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
    if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents)) {
      // if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately.
      return;
    }

    prevIteration = tween._zTime;
    tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0); // when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.

    suppressEvents || (suppressEvents = totalTime && !prevIteration); // if it was rendered previously at exactly 0 (_zTime) and now the playhead is moving away, DON'T fire callbacks otherwise they'll seem like duplicates.

    tween.ratio = ratio;
    tween._from && (ratio = 1 - ratio);
    tween._time = 0;
    tween._tTime = tTime;
    pt = tween._pt;

    while (pt) {
      pt.r(ratio, pt.d);
      pt = pt._next;
    }

    totalTime < 0 && _rewindStartAt(tween, totalTime, suppressEvents, true);
    tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
    tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");

    if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
      ratio && _removeFromParent(tween, 1);

      if (!suppressEvents) {
        _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);

        tween._prom && tween._prom();
      }
    }
  } else if (!tween._zTime) {
    tween._zTime = totalTime;
  }
},
    _findNextPauseTween = function _findNextPauseTween(animation, prevTime, time) {
  var child;

  if (time > prevTime) {
    child = animation._first;

    while (child && child._start <= time) {
      if (child.data === "isPause" && child._start > prevTime) {
        return child;
      }

      child = child._next;
    }
  } else {
    child = animation._last;

    while (child && child._start >= time) {
      if (child.data === "isPause" && child._start < prevTime) {
        return child;
      }

      child = child._prev;
    }
  }
},
    _setDuration = function _setDuration(animation, duration, skipUncache, leavePlayhead) {
  var repeat = animation._repeat,
      dur = _roundPrecise(duration) || 0,
      totalProgress = animation._tTime / animation._tDur;
  totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
  animation._dur = dur;
  animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
  totalProgress > 0 && !leavePlayhead ? _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress) : animation.parent && _setEnd(animation);
  skipUncache || _uncache(animation.parent, animation);
  return animation;
},
    _onUpdateTotalDuration = function _onUpdateTotalDuration(animation) {
  return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
},
    _zeroPosition = {
  _start: 0,
  endTime: _emptyFunc,
  totalDuration: _emptyFunc
},
    _parsePosition = function _parsePosition(animation, position, percentAnimation) {
  var labels = animation.labels,
      recent = animation._recent || _zeroPosition,
      clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur,
      //in case there's a child that infinitely repeats, users almost never intend for the insertion point of a new child to be based on a SUPER long value like that so we clip it and assume the most recently-added child's endTime should be used instead.
  i,
      offset,
      isPercent;

  if (_isString(position) && (isNaN(position) || position in labels)) {
    //if the string is a number like "1", check to see if there's a label with that name, otherwise interpret it as a number (absolute value).
    offset = position.charAt(0);
    isPercent = position.substr(-1) === "%";
    i = position.indexOf("=");

    if (offset === "<" || offset === ">") {
      i >= 0 && (position = position.replace(/=/, ""));
      return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
    }

    if (i < 0) {
      position in labels || (labels[position] = clippedDuration);
      return labels[position];
    }

    offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1));

    if (isPercent && percentAnimation) {
      offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
    }

    return i > 1 ? _parsePosition(animation, position.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
  }

  return position == null ? clippedDuration : +position;
},
    _createTweenType = function _createTweenType(type, params, timeline) {
  var isLegacy = _isNumber(params[1]),
      varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1),
      vars = params[varsIndex],
      irVars,
      parent;

  isLegacy && (vars.duration = params[1]);
  vars.parent = timeline;

  if (type) {
    irVars = vars;
    parent = timeline;

    while (parent && !("immediateRender" in irVars)) {
      // inheritance hasn't happened yet, but someone may have set a default in an ancestor timeline. We could do vars.immediateRender = _isNotFalse(_inheritDefaults(vars).immediateRender) but that'd exact a slight performance penalty because _inheritDefaults() also runs in the Tween constructor. We're paying a small kb price here to gain speed.
      irVars = parent.vars.defaults || {};
      parent = _isNotFalse(parent.vars.inherit) && parent.parent;
    }

    vars.immediateRender = _isNotFalse(irVars.immediateRender);
    type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1]; // "from" vars
  }

  return new Tween(params[0], vars, params[varsIndex + 1]);
},
    _conditionalReturn = function _conditionalReturn(value, func) {
  return value || value === 0 ? func(value) : func;
},
    _clamp = function _clamp(min, max, value) {
  return value < min ? min : value > max ? max : value;
},
    getUnit = function getUnit(value, v) {
  return !_isString(value) || !(v = _unitExp.exec(value)) ? "" : v[1];
},
    // note: protect against padded numbers as strings, like "100.100". That shouldn't return "00" as the unit. If it's numeric, return no unit.
clamp = function clamp(min, max, value) {
  return _conditionalReturn(value, function (v) {
    return _clamp(min, max, v);
  });
},
    _slice = [].slice,
    _isArrayLike = function _isArrayLike(value, nonEmpty) {
  return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
},
    _flatten = function _flatten(ar, leaveStrings, accumulator) {
  if (accumulator === void 0) {
    accumulator = [];
  }

  return ar.forEach(function (value) {
    var _accumulator;

    return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
  }) || accumulator;
},
    //takes any value and returns an array. If it's a string (and leaveStrings isn't true), it'll use document.querySelectorAll() and convert that to an array. It'll also accept iterables like jQuery objects.
toArray = function toArray(value, scope, leaveStrings) {
  return _context && !scope && _context.selector ? _context.selector(value) : _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call((scope || _doc).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
},
    selector = function selector(value) {
  value = toArray(value)[0] || _warn("Invalid scope") || {};
  return function (v) {
    var el = value.current || value.nativeElement || value;
    return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc.createElement("div") : value);
  };
},
    shuffle = function shuffle(a) {
  return a.sort(function () {
    return .5 - Math.random();
  });
},
    // alternative that's a bit faster and more reliably diverse but bigger:   for (let j, v, i = a.length; i; j = Math.floor(Math.random() * i), v = a[--i], a[i] = a[j], a[j] = v); return a;
//for distributing values across an array. Can accept a number, a function or (most commonly) a function which can contain the following properties: {base, amount, from, ease, grid, axis, length, each}. Returns a function that expects the following parameters: index, target, array. Recognizes the following
distribute = function distribute(v) {
  if (_isFunction(v)) {
    return v;
  }

  var vars = _isObject(v) ? v : {
    each: v
  },
      //n:1 is just to indicate v was a number; we leverage that later to set v according to the length we get. If a number is passed in, we treat it like the old stagger value where 0.1, for example, would mean that things would be distributed with 0.1 between each element in the array rather than a total "amount" that's chunked out among them all.
  ease = _parseEase(vars.ease),
      from = vars.from || 0,
      base = parseFloat(vars.base) || 0,
      cache = {},
      isDecimal = from > 0 && from < 1,
      ratios = isNaN(from) || isDecimal,
      axis = vars.axis,
      ratioX = from,
      ratioY = from;

  if (_isString(from)) {
    ratioX = ratioY = {
      center: .5,
      edges: .5,
      end: 1
    }[from] || 0;
  } else if (!isDecimal && ratios) {
    ratioX = from[0];
    ratioY = from[1];
  }

  return function (i, target, a) {
    var l = (a || vars).length,
        distances = cache[l],
        originX,
        originY,
        x,
        y,
        d,
        j,
        max,
        min,
        wrapAt;

    if (!distances) {
      wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1];

      if (!wrapAt) {
        max = -_bigNum;

        while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l) {}

        wrapAt--;
      }

      distances = cache[l] = [];
      originX = ratios ? Math.min(wrapAt, l) * ratioX - .5 : from % wrapAt;
      originY = wrapAt === _bigNum ? 0 : ratios ? l * ratioY / wrapAt - .5 : from / wrapAt | 0;
      max = 0;
      min = _bigNum;

      for (j = 0; j < l; j++) {
        x = j % wrapAt - originX;
        y = originY - (j / wrapAt | 0);
        distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
        d > max && (max = d);
        d < min && (min = d);
      }

      from === "random" && shuffle(distances);
      distances.max = max - min;
      distances.min = min;
      distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
      distances.b = l < 0 ? base - l : base;
      distances.u = getUnit(vars.amount || vars.each) || 0; //unit

      ease = ease && l < 0 ? _invertEase(ease) : ease;
    }

    l = (distances[i] - distances.min) / distances.max || 0;
    return _roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u; //round in order to work around floating point errors
  };
},
    _roundModifier = function _roundModifier(v) {
  //pass in 0.1 get a function that'll round to the nearest tenth, or 5 to round to the closest 5, or 0.001 to the closest 1000th, etc.
  var p = Math.pow(10, ((v + "").split(".")[1] || "").length); //to avoid floating point math errors (like 24 * 0.1 == 2.4000000000000004), we chop off at a specific number of decimal places (much faster than toFixed())

  return function (raw) {
    var n = _roundPrecise(Math.round(parseFloat(raw) / v) * v * p);

    return (n - n % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw)); // n - n % 1 replaces Math.floor() in order to handle negative values properly. For example, Math.floor(-150.00000000000003) is 151!
  };
},
    snap = function snap(snapTo, value) {
  var isArray = _isArray(snapTo),
      radius,
      is2D;

  if (!isArray && _isObject(snapTo)) {
    radius = isArray = snapTo.radius || _bigNum;

    if (snapTo.values) {
      snapTo = toArray(snapTo.values);

      if (is2D = !_isNumber(snapTo[0])) {
        radius *= radius; //performance optimization so we don't have to Math.sqrt() in the loop.
      }
    } else {
      snapTo = _roundModifier(snapTo.increment);
    }
  }

  return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function (raw) {
    is2D = snapTo(raw);
    return Math.abs(is2D - raw) <= radius ? is2D : raw;
  } : function (raw) {
    var x = parseFloat(is2D ? raw.x : raw),
        y = parseFloat(is2D ? raw.y : 0),
        min = _bigNum,
        closest = 0,
        i = snapTo.length,
        dx,
        dy;

    while (i--) {
      if (is2D) {
        dx = snapTo[i].x - x;
        dy = snapTo[i].y - y;
        dx = dx * dx + dy * dy;
      } else {
        dx = Math.abs(snapTo[i] - x);
      }

      if (dx < min) {
        min = dx;
        closest = i;
      }
    }

    closest = !radius || min <= radius ? snapTo[closest] : raw;
    return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
  });
},
    random = function random(min, max, roundingIncrement, returnFunction) {
  return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function () {
    return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * .99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
  });
},
    pipe = function pipe() {
  for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
    functions[_key] = arguments[_key];
  }

  return function (value) {
    return functions.reduce(function (v, f) {
      return f(v);
    }, value);
  };
},
    unitize = function unitize(func, unit) {
  return function (value) {
    return func(parseFloat(value)) + (unit || getUnit(value));
  };
},
    normalize = function normalize(min, max, value) {
  return mapRange(min, max, 0, 1, value);
},
    _wrapArray = function _wrapArray(a, wrapper, value) {
  return _conditionalReturn(value, function (index) {
    return a[~~wrapper(index)];
  });
},
    wrap = function wrap(min, max, value) {
  // NOTE: wrap() CANNOT be an arrow function! A very odd compiling bug causes problems (unrelated to GSAP).
  var range = max - min;
  return _isArray(min) ? _wrapArray(min, wrap(0, min.length), max) : _conditionalReturn(value, function (value) {
    return (range + (value - min) % range) % range + min;
  });
},
    wrapYoyo = function wrapYoyo(min, max, value) {
  var range = max - min,
      total = range * 2;
  return _isArray(min) ? _wrapArray(min, wrapYoyo(0, min.length - 1), max) : _conditionalReturn(value, function (value) {
    value = (total + (value - min) % total) % total || 0;
    return min + (value > range ? total - value : value);
  });
},
    _replaceRandom = function _replaceRandom(value) {
  //replaces all occurrences of random(...) in a string with the calculated random value. can be a range like random(-100, 100, 5) or an array like random([0, 100, 500])
  var prev = 0,
      s = "",
      i,
      nums,
      end,
      isArray;

  while (~(i = value.indexOf("random(", prev))) {
    end = value.indexOf(")", i);
    isArray = value.charAt(i + 7) === "[";
    nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
    s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
    prev = end + 1;
  }

  return s + value.substr(prev, value.length - prev);
},
    mapRange = function mapRange(inMin, inMax, outMin, outMax, value) {
  var inRange = inMax - inMin,
      outRange = outMax - outMin;
  return _conditionalReturn(value, function (value) {
    return outMin + ((value - inMin) / inRange * outRange || 0);
  });
},
    interpolate = function interpolate(start, end, progress, mutate) {
  var func = isNaN(start + end) ? 0 : function (p) {
    return (1 - p) * start + p * end;
  };

  if (!func) {
    var isString = _isString(start),
        master = {},
        p,
        i,
        interpolators,
        l,
        il;

    progress === true && (mutate = 1) && (progress = null);

    if (isString) {
      start = {
        p: start
      };
      end = {
        p: end
      };
    } else if (_isArray(start) && !_isArray(end)) {
      interpolators = [];
      l = start.length;
      il = l - 2;

      for (i = 1; i < l; i++) {
        interpolators.push(interpolate(start[i - 1], start[i])); //build the interpolators up front as a performance optimization so that when the function is called many times, it can just reuse them.
      }

      l--;

      func = function func(p) {
        p *= l;
        var i = Math.min(il, ~~p);
        return interpolators[i](p - i);
      };

      progress = end;
    } else if (!mutate) {
      start = _merge(_isArray(start) ? [] : {}, start);
    }

    if (!interpolators) {
      for (p in end) {
        _addPropTween.call(master, start, p, "get", end[p]);
      }

      func = function func(p) {
        return _renderPropTweens(p, master) || (isString ? start.p : start);
      };
    }
  }

  return _conditionalReturn(progress, func);
},
    _getLabelInDirection = function _getLabelInDirection(timeline, fromTime, backward) {
  //used for nextLabel() and previousLabel()
  var labels = timeline.labels,
      min = _bigNum,
      p,
      distance,
      label;

  for (p in labels) {
    distance = labels[p] - fromTime;

    if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
      label = p;
      min = distance;
    }
  }

  return label;
},
    _callback = function _callback(animation, type, executeLazyFirst) {
  var v = animation.vars,
      callback = v[type],
      prevContext = _context,
      context = animation._ctx,
      params,
      scope,
      result;

  if (!callback) {
    return;
  }

  params = v[type + "Params"];
  scope = v.callbackScope || animation;
  executeLazyFirst && _lazyTweens.length && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.

  context && (_context = context);
  result = params ? callback.apply(scope, params) : callback.call(scope);
  _context = prevContext;
  return result;
},
    _interrupt = function _interrupt(animation) {
  _removeFromParent(animation);

  animation.scrollTrigger && animation.scrollTrigger.kill(false);
  animation.progress() < 1 && _callback(animation, "onInterrupt");
  return animation;
},
    _quickTween,
    _createPlugin = function _createPlugin(config) {
  config = !config.name && config["default"] || config; //UMD packaging wraps things oddly, so for example MotionPathHelper becomes {MotionPathHelper:MotionPathHelper, default:MotionPathHelper}.

  var name = config.name,
      isFunc = _isFunction(config),
      Plugin = name && !isFunc && config.init ? function () {
    this._props = [];
  } : config,
      //in case someone passes in an object that's not a plugin, like CustomEase
  instanceDefaults = {
    init: _emptyFunc,
    render: _renderPropTweens,
    add: _addPropTween,
    kill: _killPropTweensOf,
    modifier: _addPluginModifier,
    rawVars: 0
  },
      statics = {
    targetTest: 0,
    get: 0,
    getSetter: _getSetter,
    aliases: {},
    register: 0
  };

  _wake();

  if (config !== Plugin) {
    if (_plugins[name]) {
      return;
    }

    _setDefaults(Plugin, _setDefaults(_copyExcluding(config, instanceDefaults), statics)); //static methods


    _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config, statics))); //instance methods


    _plugins[Plugin.prop = name] = Plugin;

    if (config.targetTest) {
      _harnessPlugins.push(Plugin);

      _reservedProps[name] = 1;
    }

    name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin"; //for the global name. "motionPath" should become MotionPathPlugin
  }

  _addGlobal(name, Plugin);

  config.register && config.register(gsap, Plugin, PropTween);
},

/*
 * --------------------------------------------------------------------------------------
 * COLORS
 * --------------------------------------------------------------------------------------
 */
_255 = 255,
    _colorLookup = {
  aqua: [0, _255, _255],
  lime: [0, _255, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, _255],
  navy: [0, 0, 128],
  white: [_255, _255, _255],
  olive: [128, 128, 0],
  yellow: [_255, _255, 0],
  orange: [_255, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [_255, 0, 0],
  pink: [_255, 192, 203],
  cyan: [0, _255, _255],
  transparent: [_255, _255, _255, 0]
},
    // possible future idea to replace the hard-coded color name values - put this in the ticker.wake() where we set the _doc:
// let ctx = _doc.createElement("canvas").getContext("2d");
// _forEachName("aqua,lime,silver,black,maroon,teal,blue,navy,white,olive,yellow,orange,gray,purple,green,red,pink,cyan", color => {ctx.fillStyle = color; _colorLookup[color] = splitColor(ctx.fillStyle)});
_hue = function _hue(h, m1, m2) {
  h += h < 0 ? 1 : h > 1 ? -1 : 0;
  return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < .5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + .5 | 0;
},
    splitColor = function splitColor(v, toHSL, forceAlpha) {
  var a = !v ? _colorLookup.black : _isNumber(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0,
      r,
      g,
      b,
      h,
      s,
      l,
      max,
      min,
      d,
      wasHSL;

  if (!a) {
    if (v.substr(-1) === ",") {
      //sometimes a trailing comma is included and we should chop it off (typically from a comma-delimited list of values like a textShadow:"2px 2px 2px blue, 5px 5px 5px rgb(255,0,0)" - in this example "blue," has a trailing comma. We could strip it out inside parseComplex() but we'd need to do it to the beginning and ending values plus it wouldn't provide protection from other potential scenarios like if the user passes in a similar value.
      v = v.substr(0, v.length - 1);
    }

    if (_colorLookup[v]) {
      a = _colorLookup[v];
    } else if (v.charAt(0) === "#") {
      if (v.length < 6) {
        //for shorthand like #9F0 or #9F0F (could have alpha)
        r = v.charAt(1);
        g = v.charAt(2);
        b = v.charAt(3);
        v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
      }

      if (v.length === 9) {
        // hex with alpha, like #fd5e53ff
        a = parseInt(v.substr(1, 6), 16);
        return [a >> 16, a >> 8 & _255, a & _255, parseInt(v.substr(7), 16) / 255];
      }

      v = parseInt(v.substr(1), 16);
      a = [v >> 16, v >> 8 & _255, v & _255];
    } else if (v.substr(0, 3) === "hsl") {
      a = wasHSL = v.match(_strictNumExp);

      if (!toHSL) {
        h = +a[0] % 360 / 360;
        s = +a[1] / 100;
        l = +a[2] / 100;
        g = l <= .5 ? l * (s + 1) : l + s - l * s;
        r = l * 2 - g;
        a.length > 3 && (a[3] *= 1); //cast as number

        a[0] = _hue(h + 1 / 3, r, g);
        a[1] = _hue(h, r, g);
        a[2] = _hue(h - 1 / 3, r, g);
      } else if (~v.indexOf("=")) {
        //if relative values are found, just return the raw strings with the relative prefixes in place.
        a = v.match(_numExp);
        forceAlpha && a.length < 4 && (a[3] = 1);
        return a;
      }
    } else {
      a = v.match(_strictNumExp) || _colorLookup.transparent;
    }

    a = a.map(Number);
  }

  if (toHSL && !wasHSL) {
    r = a[0] / _255;
    g = a[1] / _255;
    b = a[2] / _255;
    max = Math.max(r, g, b);
    min = Math.min(r, g, b);
    l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
      h *= 60;
    }

    a[0] = ~~(h + .5);
    a[1] = ~~(s * 100 + .5);
    a[2] = ~~(l * 100 + .5);
  }

  forceAlpha && a.length < 4 && (a[3] = 1);
  return a;
},
    _colorOrderData = function _colorOrderData(v) {
  // strips out the colors from the string, finds all the numeric slots (with units) and returns an array of those. The Array also has a "c" property which is an Array of the index values where the colors belong. This is to help work around issues where there's a mis-matched order of color/numeric data like drop-shadow(#f00 0px 1px 2px) and drop-shadow(0x 1px 2px #f00). This is basically a helper function used in _formatColors()
  var values = [],
      c = [],
      i = -1;
  v.split(_colorExp).forEach(function (v) {
    var a = v.match(_numWithUnitExp) || [];
    values.push.apply(values, a);
    c.push(i += a.length + 1);
  });
  values.c = c;
  return values;
},
    _formatColors = function _formatColors(s, toHSL, orderMatchData) {
  var result = "",
      colors = (s + result).match(_colorExp),
      type = toHSL ? "hsla(" : "rgba(",
      i = 0,
      c,
      shell,
      d,
      l;

  if (!colors) {
    return s;
  }

  colors = colors.map(function (color) {
    return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
  });

  if (orderMatchData) {
    d = _colorOrderData(s);
    c = orderMatchData.c;

    if (c.join(result) !== d.c.join(result)) {
      shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
      l = shell.length - 1;

      for (; i < l; i++) {
        result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
      }
    }
  }

  if (!shell) {
    shell = s.split(_colorExp);
    l = shell.length - 1;

    for (; i < l; i++) {
      result += shell[i] + colors[i];
    }
  }

  return result + shell[l];
},
    _colorExp = function () {
  var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      //we'll dynamically build this Regular Expression to conserve file size. After building it, it will be able to find rgb(), rgba(), # (hexadecimal), and named color values like red, blue, purple, etc.,
  p;

  for (p in _colorLookup) {
    s += "|" + p + "\\b";
  }

  return new RegExp(s + ")", "gi");
}(),
    _hslExp = /hsl[a]?\(/,
    _colorStringFilter = function _colorStringFilter(a) {
  var combined = a.join(" "),
      toHSL;
  _colorExp.lastIndex = 0;

  if (_colorExp.test(combined)) {
    toHSL = _hslExp.test(combined);
    a[1] = _formatColors(a[1], toHSL);
    a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1])); // make sure the order of numbers/colors match with the END value.

    return true;
  }
},

/*
 * --------------------------------------------------------------------------------------
 * TICKER
 * --------------------------------------------------------------------------------------
 */
_tickerActive,
    _ticker = function () {
  var _getTime = Date.now,
      _lagThreshold = 500,
      _adjustedLag = 33,
      _startTime = _getTime(),
      _lastUpdate = _startTime,
      _gap = 1000 / 240,
      _nextTime = _gap,
      _listeners = [],
      _id,
      _req,
      _raf,
      _self,
      _delta,
      _i,
      _tick = function _tick(v) {
    var elapsed = _getTime() - _lastUpdate,
        manual = v === true,
        overlap,
        dispatch,
        time,
        frame;

    elapsed > _lagThreshold && (_startTime += elapsed - _adjustedLag);
    _lastUpdate += elapsed;
    time = _lastUpdate - _startTime;
    overlap = time - _nextTime;

    if (overlap > 0 || manual) {
      frame = ++_self.frame;
      _delta = time - _self.time * 1000;
      _self.time = time = time / 1000;
      _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
      dispatch = 1;
    }

    manual || (_id = _req(_tick)); //make sure the request is made before we dispatch the "tick" event so that timing is maintained. Otherwise, if processing the "tick" requires a bunch of time (like 15ms) and we're using a setTimeout() that's based on 16.7ms, it'd technically take 31.7ms between frames otherwise.

    if (dispatch) {
      for (_i = 0; _i < _listeners.length; _i++) {
        // use _i and check _listeners.length instead of a variable because a listener could get removed during the loop, and if that happens to an element less than the current index, it'd throw things off in the loop.
        _listeners[_i](time, _delta, frame, v);
      }
    }
  };

  _self = {
    time: 0,
    frame: 0,
    tick: function tick() {
      _tick(true);
    },
    deltaRatio: function deltaRatio(fps) {
      return _delta / (1000 / (fps || 60));
    },
    wake: function wake() {
      if (_coreReady) {
        if (!_coreInitted && _windowExists()) {
          _win = _coreInitted = window;
          _doc = _win.document || {};
          _globals.gsap = gsap;
          (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);

          _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});

          _raf = _win.requestAnimationFrame;
        }

        _id && _self.sleep();

        _req = _raf || function (f) {
          return setTimeout(f, _nextTime - _self.time * 1000 + 1 | 0);
        };

        _tickerActive = 1;

        _tick(2);
      }
    },
    sleep: function sleep() {
      (_raf ? _win.cancelAnimationFrame : clearTimeout)(_id);
      _tickerActive = 0;
      _req = _emptyFunc;
    },
    lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
      _lagThreshold = threshold || 1 / _tinyNum; //zero should be interpreted as basically unlimited

      _adjustedLag = Math.min(adjustedLag, _lagThreshold, 0);
    },
    fps: function fps(_fps) {
      _gap = 1000 / (_fps || 240);
      _nextTime = _self.time * 1000 + _gap;
    },
    add: function add(callback, once, prioritize) {
      var func = once ? function (t, d, f, v) {
        callback(t, d, f, v);

        _self.remove(func);
      } : callback;

      _self.remove(callback);

      _listeners[prioritize ? "unshift" : "push"](func);

      _wake();

      return func;
    },
    remove: function remove(callback, i) {
      ~(i = _listeners.indexOf(callback)) && _listeners.splice(i, 1) && _i >= i && _i--;
    },
    _listeners: _listeners
  };
  return _self;
}(),
    _wake = function _wake() {
  return !_tickerActive && _ticker.wake();
},
    //also ensures the core classes are initialized.

/*
* -------------------------------------------------
* EASING
* -------------------------------------------------
*/
_easeMap = {},
    _customEaseExp = /^[\d.\-M][\d.\-,\s]/,
    _quotesExp = /["']/g,
    _parseObjectInString = function _parseObjectInString(value) {
  //takes a string like "{wiggles:10, type:anticipate})" and turns it into a real object. Notice it ends in ")" and includes the {} wrappers. This is because we only use this function for parsing ease configs and prioritized optimization rather than reusability.
  var obj = {},
      split = value.substr(1, value.length - 3).split(":"),
      key = split[0],
      i = 1,
      l = split.length,
      index,
      val,
      parsedVal;

  for (; i < l; i++) {
    val = split[i];
    index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
    parsedVal = val.substr(0, index);
    obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
    key = val.substr(index + 1).trim();
  }

  return obj;
},
    _valueInParentheses = function _valueInParentheses(value) {
  var open = value.indexOf("(") + 1,
      close = value.indexOf(")"),
      nested = value.indexOf("(", open);
  return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
},
    _configEaseFromString = function _configEaseFromString(name) {
  //name can be a string like "elastic.out(1,0.5)", and pass in _easeMap as obj and it'll parse it out and call the actual function like _easeMap.Elastic.easeOut.config(1,0.5). It will also parse custom ease strings as long as CustomEase is loaded and registered (internally as _easeMap._CE).
  var split = (name + "").split("("),
      ease = _easeMap[split[0]];
  return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
},
    _invertEase = function _invertEase(ease) {
  return function (p) {
    return 1 - ease(1 - p);
  };
},
    // allow yoyoEase to be set in children and have those affected when the parent/ancestor timeline yoyos.
_propagateYoyoEase = function _propagateYoyoEase(timeline, isYoyo) {
  var child = timeline._first,
      ease;

  while (child) {
    if (child instanceof Timeline) {
      _propagateYoyoEase(child, isYoyo);
    } else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
      if (child.timeline) {
        _propagateYoyoEase(child.timeline, isYoyo);
      } else {
        ease = child._ease;
        child._ease = child._yEase;
        child._yEase = ease;
        child._yoyo = isYoyo;
      }
    }

    child = child._next;
  }
},
    _parseEase = function _parseEase(ease, defaultEase) {
  return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
},
    _insertEase = function _insertEase(names, easeIn, easeOut, easeInOut) {
  if (easeOut === void 0) {
    easeOut = function easeOut(p) {
      return 1 - easeIn(1 - p);
    };
  }

  if (easeInOut === void 0) {
    easeInOut = function easeInOut(p) {
      return p < .5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
    };
  }

  var ease = {
    easeIn: easeIn,
    easeOut: easeOut,
    easeInOut: easeInOut
  },
      lowercaseName;

  _forEachName(names, function (name) {
    _easeMap[name] = _globals[name] = ease;
    _easeMap[lowercaseName = name.toLowerCase()] = easeOut;

    for (var p in ease) {
      _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
    }
  });

  return ease;
},
    _easeInOutFromOut = function _easeInOutFromOut(easeOut) {
  return function (p) {
    return p < .5 ? (1 - easeOut(1 - p * 2)) / 2 : .5 + easeOut((p - .5) * 2) / 2;
  };
},
    _configElastic = function _configElastic(type, amplitude, period) {
  var p1 = amplitude >= 1 ? amplitude : 1,
      //note: if amplitude is < 1, we simply adjust the period for a more natural feel. Otherwise the math doesn't work right and the curve starts at 1.
  p2 = (period || (type ? .3 : .45)) / (amplitude < 1 ? amplitude : 1),
      p3 = p2 / _2PI * (Math.asin(1 / p1) || 0),
      easeOut = function easeOut(p) {
    return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
  },
      ease = type === "out" ? easeOut : type === "in" ? function (p) {
    return 1 - easeOut(1 - p);
  } : _easeInOutFromOut(easeOut);

  p2 = _2PI / p2; //precalculate to optimize

  ease.config = function (amplitude, period) {
    return _configElastic(type, amplitude, period);
  };

  return ease;
},
    _configBack = function _configBack(type, overshoot) {
  if (overshoot === void 0) {
    overshoot = 1.70158;
  }

  var easeOut = function easeOut(p) {
    return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
  },
      ease = type === "out" ? easeOut : type === "in" ? function (p) {
    return 1 - easeOut(1 - p);
  } : _easeInOutFromOut(easeOut);

  ease.config = function (overshoot) {
    return _configBack(type, overshoot);
  };

  return ease;
}; // a cheaper (kb and cpu) but more mild way to get a parameterized weighted ease by feeding in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEase = ratio => {
// 	let y = 0.5 + ratio / 2;
// 	return p => (2 * (1 - p) * p * y + p * p);
// },
// a stronger (but more expensive kb/cpu) parameterized weighted ease that lets you feed in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEaseStrong = ratio => {
// 	ratio = .5 + ratio / 2;
// 	let o = 1 / 3 * (ratio < .5 ? ratio : 1 - ratio),
// 		b = ratio - o,
// 		c = ratio + o;
// 	return p => p === 1 ? p : 3 * b * (1 - p) * (1 - p) * p + 3 * c * (1 - p) * p * p + p * p * p;
// };


_forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function (name, i) {
  var power = i < 5 ? i + 1 : i;

  _insertEase(name + ",Power" + (power - 1), i ? function (p) {
    return Math.pow(p, power);
  } : function (p) {
    return p;
  }, function (p) {
    return 1 - Math.pow(1 - p, power);
  }, function (p) {
    return p < .5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
  });
});

_easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;

_insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());

(function (n, c) {
  var n1 = 1 / c,
      n2 = 2 * n1,
      n3 = 2.5 * n1,
      easeOut = function easeOut(p) {
    return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + .75 : p < n3 ? n * (p -= 2.25 / c) * p + .9375 : n * Math.pow(p - 2.625 / c, 2) + .984375;
  };

  _insertEase("Bounce", function (p) {
    return 1 - easeOut(1 - p);
  }, easeOut);
})(7.5625, 2.75);

_insertEase("Expo", function (p) {
  return p ? Math.pow(2, 10 * (p - 1)) : 0;
});

_insertEase("Circ", function (p) {
  return -(_sqrt(1 - p * p) - 1);
});

_insertEase("Sine", function (p) {
  return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
});

_insertEase("Back", _configBack("in"), _configBack("out"), _configBack());

_easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
  config: function config(steps, immediateStart) {
    if (steps === void 0) {
      steps = 1;
    }

    var p1 = 1 / steps,
        p2 = steps + (immediateStart ? 0 : 1),
        p3 = immediateStart ? 1 : 0,
        max = 1 - _tinyNum;
    return function (p) {
      return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
    };
  }
};
_defaults.ease = _easeMap["quad.out"];

_forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (name) {
  return _callbackNames += name + "," + name + "Params,";
});
/*
 * --------------------------------------------------------------------------------------
 * CACHE
 * --------------------------------------------------------------------------------------
 */


var GSCache = function GSCache(target, harness) {
  this.id = _gsID++;
  target._gsap = this;
  this.target = target;
  this.harness = harness;
  this.get = harness ? harness.get : _getProperty;
  this.set = harness ? harness.getSetter : _getSetter;
};
/*
 * --------------------------------------------------------------------------------------
 * ANIMATION
 * --------------------------------------------------------------------------------------
 */

var Animation = /*#__PURE__*/function () {
  function Animation(vars) {
    this.vars = vars;
    this._delay = +vars.delay || 0;

    if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
      // TODO: repeat: Infinity on a timeline's children must flag that timeline internally and affect its totalDuration, otherwise it'll stop in the negative direction when reaching the start.
      this._rDelay = vars.repeatDelay || 0;
      this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
    }

    this._ts = 1;

    _setDuration(this, +vars.duration, 1, 1);

    this.data = vars.data;

    if (_context) {
      this._ctx = _context;

      _context.data.push(this);
    }

    _tickerActive || _ticker.wake();
  }

  var _proto = Animation.prototype;

  _proto.delay = function delay(value) {
    if (value || value === 0) {
      this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
      this._delay = value;
      return this;
    }

    return this._delay;
  };

  _proto.duration = function duration(value) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
  };

  _proto.totalDuration = function totalDuration(value) {
    if (!arguments.length) {
      return this._tDur;
    }

    this._dirty = 0;
    return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
  };

  _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
    _wake();

    if (!arguments.length) {
      return this._tTime;
    }

    var parent = this._dp;

    if (parent && parent.smoothChildTiming && this._ts) {
      _alignPlayhead(this, _totalTime);

      !parent._dp || parent.parent || _postAddChecks(parent, this); // edge case: if this is a child of a timeline that already completed, for example, we must re-activate the parent.
      //in case any of the ancestor timelines had completed but should now be enabled, we should reset their totalTime() which will also ensure that they're lined up properly and enabled. Skip for animations that are on the root (wasteful). Example: a TimelineLite.exportRoot() is performed when there's a paused tween on the root, the export will not complete until that tween is unpaused, but imagine a child gets restarted later, after all [unpaused] tweens have completed. The start of that child would get pushed out, but one of the ancestors may have completed.

      while (parent && parent.parent) {
        if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
          parent.totalTime(parent._tTime, true);
        }

        parent = parent.parent;
      }

      if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
        //if the animation doesn't have a parent, put it back into its last parent (recorded as _dp for exactly cases like this). Limit to parents with autoRemoveChildren (like globalTimeline) so that if the user manually removes an animation from a timeline and then alters its playhead, it doesn't get added back in.
        _addToTimeline(this._dp, this, this._start - this._delay);
      }
    }

    if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
      // check for _ptLookup on a Tween instance to ensure it has actually finished being instantiated, otherwise if this.reverse() gets called in the Animation constructor, it could trigger a render() here even though the _targets weren't populated, thus when _init() is called there won't be any PropTweens (it'll act like the tween is non-functional)
      this._ts || (this._pTime = _totalTime); // otherwise, if an animation is paused, then the playhead is moved back to zero, then resumed, it'd revert back to the original time at the pause
      //if (!this._lock) { // avoid endless recursion (not sure we need this yet or if it's worth the performance hit)
      //   this._lock = 1;

      _lazySafeRender(this, _totalTime, suppressEvents); //   this._lock = 0;
      //}

    }

    return this;
  };

  _proto.time = function time(value, suppressEvents) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time; // note: if the modulus results in 0, the playhead could be exactly at the end or the beginning, and we always defer to the END with a non-zero value, otherwise if you set the time() to the very end (duration()), it would render at the START!
  };

  _proto.totalProgress = function totalProgress(value, suppressEvents) {
    return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
  };

  _proto.progress = function progress(value, suppressEvents) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
  };

  _proto.iteration = function iteration(value, suppressEvents) {
    var cycleDuration = this.duration() + this._rDelay;

    return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
  } // potential future addition:
  // isPlayingBackwards() {
  // 	let animation = this,
  // 		orientation = 1; // 1 = forward, -1 = backward
  // 	while (animation) {
  // 		orientation *= animation.reversed() || (animation.repeat() && !(animation.iteration() & 1)) ? -1 : 1;
  // 		animation = animation.parent;
  // 	}
  // 	return orientation < 0;
  // }
  ;

  _proto.timeScale = function timeScale(value) {
    if (!arguments.length) {
      return this._rts === -_tinyNum ? 0 : this._rts; // recorded timeScale. Special case: if someone calls reverse() on an animation with timeScale of 0, we assign it -_tinyNum to remember it's reversed.
    }

    if (this._rts === value) {
      return this;
    }

    var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime; // make sure to do the parentToChildTotalTime() BEFORE setting the new _ts because the old one must be used in that calculation.
    // future addition? Up side: fast and minimal file size. Down side: only works on this animation; if a timeline is reversed, for example, its childrens' onReverse wouldn't get called.
    //(+value < 0 && this._rts >= 0) && _callback(this, "onReverse", true);
    // prioritize rendering where the parent's playhead lines up instead of this._tTime because there could be a tween that's animating another tween's timeScale in the same rendering loop (same parent), thus if the timeScale tween renders first, it would alter _start BEFORE _tTime was set on that tick (in the rendering loop), effectively freezing it until the timeScale tween finishes.

    this._rts = +value || 0;
    this._ts = this._ps || value === -_tinyNum ? 0 : this._rts; // _ts is the functional timeScale which would be 0 if the animation is paused.

    this.totalTime(_clamp(-this._delay, this._tDur, tTime), true);

    _setEnd(this); // if parent.smoothChildTiming was false, the end time didn't get updated in the _alignPlayhead() method, so do it here.


    return _recacheAncestors(this);
  };

  _proto.paused = function paused(value) {
    if (!arguments.length) {
      return this._ps;
    }

    if (this._ps !== value) {
      this._ps = value;

      if (value) {
        this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()); // if the pause occurs during the delay phase, make sure that's factored in when resuming.

        this._ts = this._act = 0; // _ts is the functional timeScale, so a paused tween would effectively have a timeScale of 0. We record the "real" timeScale as _rts (recorded time scale)
      } else {
        _wake();

        this._ts = this._rts; //only defer to _pTime (pauseTime) if tTime is zero. Remember, someone could pause() an animation, then scrub the playhead and resume(). If the parent doesn't have smoothChildTiming, we render at the rawTime() because the startTime won't get updated.

        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum)); // edge case: animation.progress(1).pause().play() wouldn't render again because the playhead is already at the end, but the call to totalTime() below will add it back to its parent...and not remove it again (since removing only happens upon rendering at a new time). Offsetting the _tTime slightly is done simply to cause the final render in totalTime() that'll pop it off its timeline (if autoRemoveChildren is true, of course). Check to make sure _zTime isn't -_tinyNum to avoid an edge case where the playhead is pushed to the end but INSIDE a tween/callback, the timeline itself is paused thus halting rendering and leaving a few unrendered. When resuming, it wouldn't render those otherwise.
      }
    }

    return this;
  };

  _proto.startTime = function startTime(value) {
    if (arguments.length) {
      this._start = value;
      var parent = this.parent || this._dp;
      parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
      return this;
    }

    return this._start;
  };

  _proto.endTime = function endTime(includeRepeats) {
    return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  };

  _proto.rawTime = function rawTime(wrapRepeats) {
    var parent = this.parent || this._dp; // _dp = detached parent

    return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
  };

  _proto.revert = function revert(config) {
    if (config === void 0) {
      config = _revertConfig;
    }

    var prevIsReverting = _reverting;
    _reverting = config;
    this.timeline && this.timeline.revert(config);
    this.totalTime(-0.01, config.suppressEvents);
    this.data !== "nested" && _removeFromParent(this);
    _reverting = prevIsReverting;
    return this;
  };

  _proto.globalTime = function globalTime(rawTime) {
    var animation = this,
        time = arguments.length ? rawTime : animation.rawTime();

    while (animation) {
      time = animation._start + time / (animation._ts || 1);
      animation = animation._dp;
    }

    return !this.parent && this.vars.immediateRender ? -1 : time; // the _startAt tweens for .fromTo() and .from() that have immediateRender should always be FIRST in the timeline (important for Recording.revert())
  };

  _proto.repeat = function repeat(value) {
    if (arguments.length) {
      this._repeat = value === Infinity ? -2 : value;
      return _onUpdateTotalDuration(this);
    }

    return this._repeat === -2 ? Infinity : this._repeat;
  };

  _proto.repeatDelay = function repeatDelay(value) {
    if (arguments.length) {
      var time = this._time;
      this._rDelay = value;

      _onUpdateTotalDuration(this);

      return time ? this.time(time) : this;
    }

    return this._rDelay;
  };

  _proto.yoyo = function yoyo(value) {
    if (arguments.length) {
      this._yoyo = value;
      return this;
    }

    return this._yoyo;
  };

  _proto.seek = function seek(position, suppressEvents) {
    return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
  };

  _proto.restart = function restart(includeDelay, suppressEvents) {
    return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
  };

  _proto.play = function play(from, suppressEvents) {
    from != null && this.seek(from, suppressEvents);
    return this.reversed(false).paused(false);
  };

  _proto.reverse = function reverse(from, suppressEvents) {
    from != null && this.seek(from || this.totalDuration(), suppressEvents);
    return this.reversed(true).paused(false);
  };

  _proto.pause = function pause(atTime, suppressEvents) {
    atTime != null && this.seek(atTime, suppressEvents);
    return this.paused(true);
  };

  _proto.resume = function resume() {
    return this.paused(false);
  };

  _proto.reversed = function reversed(value) {
    if (arguments.length) {
      !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0)); // in case timeScale is zero, reversing would have no effect so we use _tinyNum.

      return this;
    }

    return this._rts < 0;
  };

  _proto.invalidate = function invalidate() {
    this._initted = this._act = 0;
    this._zTime = -_tinyNum;
    return this;
  };

  _proto.isActive = function isActive() {
    var parent = this.parent || this._dp,
        start = this._start,
        rawTime;
    return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
  };

  _proto.eventCallback = function eventCallback(type, callback, params) {
    var vars = this.vars;

    if (arguments.length > 1) {
      if (!callback) {
        delete vars[type];
      } else {
        vars[type] = callback;
        params && (vars[type + "Params"] = params);
        type === "onUpdate" && (this._onUpdate = callback);
      }

      return this;
    }

    return vars[type];
  };

  _proto.then = function then(onFulfilled) {
    var self = this;
    return new Promise(function (resolve) {
      var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough,
          _resolve = function _resolve() {
        var _then = self.then;
        self.then = null; // temporarily null the then() method to avoid an infinite loop (see https://github.com/greensock/GSAP/issues/322)

        _isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
        resolve(f);
        self.then = _then;
      };

      if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) {
        _resolve();
      } else {
        self._prom = _resolve;
      }
    });
  };

  _proto.kill = function kill() {
    _interrupt(this);
  };

  return Animation;
}();

_setDefaults(Animation.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: false,
  parent: null,
  _initted: false,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -_tinyNum,
  _prom: 0,
  _ps: false,
  _rts: 1
});
/*
 * -------------------------------------------------
 * TIMELINE
 * -------------------------------------------------
 */


var Timeline = /*#__PURE__*/function (_Animation) {
  _inheritsLoose(Timeline, _Animation);

  function Timeline(vars, position) {
    var _this;

    if (vars === void 0) {
      vars = {};
    }

    _this = _Animation.call(this, vars) || this;
    _this.labels = {};
    _this.smoothChildTiming = !!vars.smoothChildTiming;
    _this.autoRemoveChildren = !!vars.autoRemoveChildren;
    _this._sort = _isNotFalse(vars.sortChildren);
    _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
    vars.reversed && _this.reverse();
    vars.paused && _this.paused(true);
    vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
    return _this;
  }

  var _proto2 = Timeline.prototype;

  _proto2.to = function to(targets, vars, position) {
    _createTweenType(0, arguments, this);

    return this;
  };

  _proto2.from = function from(targets, vars, position) {
    _createTweenType(1, arguments, this);

    return this;
  };

  _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
    _createTweenType(2, arguments, this);

    return this;
  };

  _proto2.set = function set(targets, vars, position) {
    vars.duration = 0;
    vars.parent = this;
    _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
    vars.immediateRender = !!vars.immediateRender;
    new Tween(targets, vars, _parsePosition(this, position), 1);
    return this;
  };

  _proto2.call = function call(callback, params, position) {
    return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
  } //ONLY for backward compatibility! Maybe delete?
  ;

  _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
    vars.duration = duration;
    vars.stagger = vars.stagger || stagger;
    vars.onComplete = onCompleteAll;
    vars.onCompleteParams = onCompleteAllParams;
    vars.parent = this;
    new Tween(targets, vars, _parsePosition(this, position));
    return this;
  };

  _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
    vars.runBackwards = 1;
    _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
    return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
  };

  _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
    toVars.startAt = fromVars;
    _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
    return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
  };

  _proto2.render = function render(totalTime, suppressEvents, force) {
    var prevTime = this._time,
        tDur = this._dirty ? this.totalDuration() : this._tDur,
        dur = this._dur,
        tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime),
        // if a paused timeline is resumed (or its _start is updated for another reason...which rounds it), that could result in the playhead shifting a **tiny** amount and a zero-duration child at that spot may get rendered at a different ratio, like its totalTime in render() may be 1e-17 instead of 0, for example.
    crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur),
        time,
        child,
        next,
        iteration,
        cycleDuration,
        prevPaused,
        pauseTween,
        timeScale,
        prevStart,
        prevIteration,
        yoyo,
        isYoyo;
    this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);

    if (tTime !== this._tTime || force || crossingStart) {
      if (prevTime !== this._time && dur) {
        //if totalDuration() finds a child with a negative startTime and smoothChildTiming is true, things get shifted around internally so we need to adjust the time accordingly. For example, if a tween starts at -30 we must shift EVERYTHING forward 30 seconds and move this timeline's startTime backward by 30 seconds so that things align with the playhead (no jump).
        tTime += this._time - prevTime;
        totalTime += this._time - prevTime;
      }

      time = tTime;
      prevStart = this._start;
      timeScale = this._ts;
      prevPaused = !timeScale;

      if (crossingStart) {
        dur || (prevTime = this._zTime); //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.

        (totalTime || !suppressEvents) && (this._zTime = totalTime);
      }

      if (this._repeat) {
        //adjust the time for repeats and yoyos
        yoyo = this._yoyo;
        cycleDuration = dur + this._rDelay;

        if (this._repeat < -1 && totalTime < 0) {
          return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
        }

        time = _roundPrecise(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)

        if (tTime === tDur) {
          // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
          iteration = this._repeat;
          time = dur;
        } else {
          iteration = ~~(tTime / cycleDuration);

          if (iteration && iteration === tTime / cycleDuration) {
            time = dur;
            iteration--;
          }

          time > dur && (time = dur);
        }

        prevIteration = _animationCycle(this._tTime, cycleDuration);
        !prevTime && this._tTime && prevIteration !== iteration && (prevIteration = iteration); // edge case - if someone does addPause() at the very beginning of a repeating timeline, that pause is technically at the same spot as the end which causes this._time to get set to 0 when the totalTime would normally place the playhead at the end. See https://greensock.com/forums/topic/23823-closing-nav-animation-not-working-on-ie-and-iphone-6-maybe-other-older-browser/?tab=comments#comment-113005

        if (yoyo && iteration & 1) {
          time = dur - time;
          isYoyo = 1;
        }
        /*
        make sure children at the end/beginning of the timeline are rendered properly. If, for example,
        a 3-second long timeline rendered at 2.9 seconds previously, and now renders at 3.2 seconds (which
        would get translated to 2.8 seconds if the timeline yoyos or 0.2 seconds if it just repeats), there
        could be a callback or a short tween that's at 2.95 or 3 seconds in which wouldn't render. So
        we need to push the timeline to the end (and/or beginning depending on its yoyo value). Also we must
        ensure that zero-duration tweens at the very beginning or end of the Timeline work.
        */


        if (iteration !== prevIteration && !this._lock) {
          var rewinding = yoyo && prevIteration & 1,
              doesWrap = rewinding === (yoyo && iteration & 1);
          iteration < prevIteration && (rewinding = !rewinding);
          prevTime = rewinding ? 0 : dur;
          this._lock = 1;
          this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
          this._tTime = tTime; // if a user gets the iteration() inside the onRepeat, for example, it should be accurate.

          !suppressEvents && this.parent && _callback(this, "onRepeat");
          this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);

          if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) {
            // if prevTime is 0 and we render at the very end, _time will be the end, thus won't match. So in this edge case, prevTime won't match _time but that's okay. If it gets killed in the onRepeat, eject as well.
            return this;
          }

          dur = this._dur; // in case the duration changed in the onRepeat

          tDur = this._tDur;

          if (doesWrap) {
            this._lock = 2;
            prevTime = rewinding ? dur : -0.0001;
            this.render(prevTime, true);
            this.vars.repeatRefresh && !isYoyo && this.invalidate();
          }

          this._lock = 0;

          if (!this._ts && !prevPaused) {
            return this;
          } //in order for yoyoEase to work properly when there's a stagger, we must swap out the ease in each sub-tween.


          _propagateYoyoEase(this, isYoyo);
        }
      }

      if (this._hasPause && !this._forcing && this._lock < 2) {
        pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));

        if (pauseTween) {
          tTime -= time - (time = pauseTween._start);
        }
      }

      this._tTime = tTime;
      this._time = time;
      this._act = !timeScale; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.

      if (!this._initted) {
        this._onUpdate = this.vars.onUpdate;
        this._initted = 1;
        this._zTime = totalTime;
        prevTime = 0; // upon init, the playhead should always go forward; someone could invalidate() a completed timeline and then if they restart(), that would make child tweens render in reverse order which could lock in the wrong starting values if they build on each other, like tl.to(obj, {x: 100}).to(obj, {x: 0}).
      }

      if (!prevTime && time && !suppressEvents) {
        _callback(this, "onStart");

        if (this._tTime !== tTime) {
          // in case the onStart triggered a render at a different spot, eject. Like if someone did animation.pause(0.5) or something inside the onStart.
          return this;
        }
      }

      if (time >= prevTime && totalTime >= 0) {
        child = this._first;

        while (child) {
          next = child._next;

          if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
            if (child.parent !== this) {
              // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
              return this.render(totalTime, suppressEvents, force);
            }

            child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);

            if (time !== this._time || !this._ts && !prevPaused) {
              //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
              pauseTween = 0;
              next && (tTime += this._zTime = -_tinyNum); // it didn't finish rendering, so flag zTime as negative so that so that the next time render() is called it'll be forced (to render any remaining children)

              break;
            }
          }

          child = next;
        }
      } else {
        force = force || _reverting; // if reverting, we should always force renders. If, for example, a .fromTo() tween with a stagger (which creates an internal timeline) gets reverted BEFORE some of its child tweens render for the first time, it may not properly trigger them to revert.

        child = this._last;
        var adjustedTime = totalTime < 0 ? totalTime : time; //when the playhead goes backward beyond the start of this timeline, we must pass that information down to the child animations so that zero-duration tweens know whether to render their starting or ending values.

        while (child) {
          next = child._prev;

          if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
            if (child.parent !== this) {
              // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
              return this.render(totalTime, suppressEvents, force);
            }

            child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force);

            if (time !== this._time || !this._ts && !prevPaused) {
              //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
              pauseTween = 0;
              next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum); // it didn't finish rendering, so adjust zTime so that so that the next time render() is called it'll be forced (to render any remaining children)

              break;
            }
          }

          child = next;
        }
      }

      if (pauseTween && !suppressEvents) {
        this.pause();
        pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;

        if (this._ts) {
          //the callback resumed playback! So since we may have held back the playhead due to where the pause is positioned, go ahead and jump to where it's SUPPOSED to be (if no pause happened).
          this._start = prevStart; //if the pause was at an earlier time and the user resumed in the callback, it could reposition the timeline (changing its startTime), throwing things off slightly, so we make sure the _start doesn't shift.

          _setEnd(this);

          return this.render(totalTime, suppressEvents, force);
        }
      }

      this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
      if (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) if (!this._lock) {
        // remember, a child's callback may alter this timeline's playhead or timeScale which is why we need to add some of these checks.
        (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.

        if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
          _callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);

          this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
        }
      }
    }

    return this;
  };

  _proto2.add = function add(child, position) {
    var _this2 = this;

    _isNumber(position) || (position = _parsePosition(this, position, child));

    if (!(child instanceof Animation)) {
      if (_isArray(child)) {
        child.forEach(function (obj) {
          return _this2.add(obj, position);
        });
        return this;
      }

      if (_isString(child)) {
        return this.addLabel(child, position);
      }

      if (_isFunction(child)) {
        child = Tween.delayedCall(0, child);
      } else {
        return this;
      }
    }

    return this !== child ? _addToTimeline(this, child, position) : this; //don't allow a timeline to be added to itself as a child!
  };

  _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
    if (nested === void 0) {
      nested = true;
    }

    if (tweens === void 0) {
      tweens = true;
    }

    if (timelines === void 0) {
      timelines = true;
    }

    if (ignoreBeforeTime === void 0) {
      ignoreBeforeTime = -_bigNum;
    }

    var a = [],
        child = this._first;

    while (child) {
      if (child._start >= ignoreBeforeTime) {
        if (child instanceof Tween) {
          tweens && a.push(child);
        } else {
          timelines && a.push(child);
          nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
        }
      }

      child = child._next;
    }

    return a;
  };

  _proto2.getById = function getById(id) {
    var animations = this.getChildren(1, 1, 1),
        i = animations.length;

    while (i--) {
      if (animations[i].vars.id === id) {
        return animations[i];
      }
    }
  };

  _proto2.remove = function remove(child) {
    if (_isString(child)) {
      return this.removeLabel(child);
    }

    if (_isFunction(child)) {
      return this.killTweensOf(child);
    }

    _removeLinkedListItem(this, child);

    if (child === this._recent) {
      this._recent = this._last;
    }

    return _uncache(this);
  };

  _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
    if (!arguments.length) {
      return this._tTime;
    }

    this._forcing = 1;

    if (!this._dp && this._ts) {
      //special case for the global timeline (or any other that has no parent or detached parent).
      this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
    }

    _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);

    this._forcing = 0;
    return this;
  };

  _proto2.addLabel = function addLabel(label, position) {
    this.labels[label] = _parsePosition(this, position);
    return this;
  };

  _proto2.removeLabel = function removeLabel(label) {
    delete this.labels[label];
    return this;
  };

  _proto2.addPause = function addPause(position, callback, params) {
    var t = Tween.delayedCall(0, callback || _emptyFunc, params);
    t.data = "isPause";
    this._hasPause = 1;
    return _addToTimeline(this, t, _parsePosition(this, position));
  };

  _proto2.removePause = function removePause(position) {
    var child = this._first;
    position = _parsePosition(this, position);

    while (child) {
      if (child._start === position && child.data === "isPause") {
        _removeFromParent(child);
      }

      child = child._next;
    }
  };

  _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
    var tweens = this.getTweensOf(targets, onlyActive),
        i = tweens.length;

    while (i--) {
      _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
    }

    return this;
  };

  _proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
    var a = [],
        parsedTargets = toArray(targets),
        child = this._first,
        isGlobalTime = _isNumber(onlyActive),
        // a number is interpreted as a global time. If the animation spans
    children;

    while (child) {
      if (child instanceof Tween) {
        if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
          // note: if this is for overwriting, it should only be for tweens that aren't paused and are initted.
          a.push(child);
        }
      } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
        a.push.apply(a, children);
      }

      child = child._next;
    }

    return a;
  } // potential future feature - targets() on timelines
  // targets() {
  // 	let result = [];
  // 	this.getChildren(true, true, false).forEach(t => result.push(...t.targets()));
  // 	return result.filter((v, i) => result.indexOf(v) === i);
  // }
  ;

  _proto2.tweenTo = function tweenTo(position, vars) {
    vars = vars || {};

    var tl = this,
        endTime = _parsePosition(tl, position),
        _vars = vars,
        startAt = _vars.startAt,
        _onStart = _vars.onStart,
        onStartParams = _vars.onStartParams,
        immediateRender = _vars.immediateRender,
        initted,
        tween = Tween.to(tl, _setDefaults({
      ease: vars.ease || "none",
      lazy: false,
      immediateRender: false,
      time: endTime,
      overwrite: "auto",
      duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
      onStart: function onStart() {
        tl.pause();

        if (!initted) {
          var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
          tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
          initted = 1;
        }

        _onStart && _onStart.apply(tween, onStartParams || []); //in case the user had an onStart in the vars - we don't want to overwrite it.
      }
    }, vars));

    return immediateRender ? tween.render(0) : tween;
  };

  _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
    return this.tweenTo(toPosition, _setDefaults({
      startAt: {
        time: _parsePosition(this, fromPosition)
      }
    }, vars));
  };

  _proto2.recent = function recent() {
    return this._recent;
  };

  _proto2.nextLabel = function nextLabel(afterTime) {
    if (afterTime === void 0) {
      afterTime = this._time;
    }

    return _getLabelInDirection(this, _parsePosition(this, afterTime));
  };

  _proto2.previousLabel = function previousLabel(beforeTime) {
    if (beforeTime === void 0) {
      beforeTime = this._time;
    }

    return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
  };

  _proto2.currentLabel = function currentLabel(value) {
    return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
  };

  _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
    if (ignoreBeforeTime === void 0) {
      ignoreBeforeTime = 0;
    }

    var child = this._first,
        labels = this.labels,
        p;

    while (child) {
      if (child._start >= ignoreBeforeTime) {
        child._start += amount;
        child._end += amount;
      }

      child = child._next;
    }

    if (adjustLabels) {
      for (p in labels) {
        if (labels[p] >= ignoreBeforeTime) {
          labels[p] += amount;
        }
      }
    }

    return _uncache(this);
  };

  _proto2.invalidate = function invalidate() {
    var child = this._first;
    this._lock = 0;

    while (child) {
      child.invalidate();
      child = child._next;
    }

    return _Animation.prototype.invalidate.call(this);
  };

  _proto2.clear = function clear(includeLabels) {
    if (includeLabels === void 0) {
      includeLabels = true;
    }

    var child = this._first,
        next;

    while (child) {
      next = child._next;
      this.remove(child);
      child = next;
    }

    this._dp && (this._time = this._tTime = this._pTime = 0);
    includeLabels && (this.labels = {});
    return _uncache(this);
  };

  _proto2.totalDuration = function totalDuration(value) {
    var max = 0,
        self = this,
        child = self._last,
        prevStart = _bigNum,
        prev,
        start,
        parent;

    if (arguments.length) {
      return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
    }

    if (self._dirty) {
      parent = self.parent;

      while (child) {
        prev = child._prev; //record it here in case the tween changes position in the sequence...

        child._dirty && child.totalDuration(); //could change the tween._startTime, so make sure the animation's cache is clean before analyzing it.

        start = child._start;

        if (start > prevStart && self._sort && child._ts && !self._lock) {
          //in case one of the tweens shifted out of order, it needs to be re-inserted into the correct position in the sequence
          self._lock = 1; //prevent endless recursive calls - there are methods that get triggered that check duration/totalDuration when we add().

          _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
        } else {
          prevStart = start;
        }

        if (start < 0 && child._ts) {
          //children aren't allowed to have negative startTimes unless smoothChildTiming is true, so adjust here if one is found.
          max -= start;

          if (!parent && !self._dp || parent && parent.smoothChildTiming) {
            self._start += start / self._ts;
            self._time -= start;
            self._tTime -= start;
          }

          self.shiftChildren(-start, false, -1e999);
          prevStart = 0;
        }

        child._end > max && child._ts && (max = child._end);
        child = prev;
      }

      _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);

      self._dirty = 0;
    }

    return self._tDur;
  };

  Timeline.updateRoot = function updateRoot(time) {
    if (_globalTimeline._ts) {
      _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));

      _lastRenderedFrame = _ticker.frame;
    }

    if (_ticker.frame >= _nextGCFrame) {
      _nextGCFrame += _config.autoSleep || 120;
      var child = _globalTimeline._first;
      if (!child || !child._ts) if (_config.autoSleep && _ticker._listeners.length < 2) {
        while (child && !child._ts) {
          child = child._next;
        }

        child || _ticker.sleep();
      }
    }
  };

  return Timeline;
}(Animation);

_setDefaults(Timeline.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});

var _addComplexStringPropTween = function _addComplexStringPropTween(target, prop, start, end, setter, stringFilter, funcParam) {
  //note: we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
  var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter),
      index = 0,
      matchIndex = 0,
      result,
      startNums,
      color,
      endNum,
      chunk,
      startNum,
      hasRandom,
      a;
  pt.b = start;
  pt.e = end;
  start += ""; //ensure values are strings

  end += "";

  if (hasRandom = ~end.indexOf("random(")) {
    end = _replaceRandom(end);
  }

  if (stringFilter) {
    a = [start, end];
    stringFilter(a, target, prop); //pass an array with the starting and ending values and let the filter do whatever it needs to the values.

    start = a[0];
    end = a[1];
  }

  startNums = start.match(_complexStringNumExp) || [];

  while (result = _complexStringNumExp.exec(end)) {
    endNum = result[0];
    chunk = end.substring(index, result.index);

    if (color) {
      color = (color + 1) % 5;
    } else if (chunk.substr(-5) === "rgba(") {
      color = 1;
    }

    if (endNum !== startNums[matchIndex++]) {
      startNum = parseFloat(startNums[matchIndex - 1]) || 0; //these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.

      pt._pt = {
        _next: pt._pt,
        p: chunk || matchIndex === 1 ? chunk : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: startNum,
        c: endNum.charAt(1) === "=" ? _parseRelative(startNum, endNum) - startNum : parseFloat(endNum) - startNum,
        m: color && color < 4 ? Math.round : 0
      };
      index = _complexStringNumExp.lastIndex;
    }
  }

  pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)

  pt.fp = funcParam;

  if (_relExp.test(end) || hasRandom) {
    pt.e = 0; //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).
  }

  this._pt = pt; //start the linked list with this new PropTween. Remember, we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.

  return pt;
},
    _addPropTween = function _addPropTween(target, prop, start, end, index, targets, modifier, stringFilter, funcParam, optional) {
  _isFunction(end) && (end = end(index || 0, target, targets));
  var currentValue = target[prop],
      parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](),
      setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc,
      pt;

  if (_isString(end)) {
    if (~end.indexOf("random(")) {
      end = _replaceRandom(end);
    }

    if (end.charAt(1) === "=") {
      pt = _parseRelative(parsedStart, end) + (getUnit(parsedStart) || 0);

      if (pt || pt === 0) {
        // to avoid isNaN, like if someone passes in a value like "!= whatever"
        end = pt;
      }
    }
  }

  if (!optional || parsedStart !== end || _forceAllPropTweens) {
    if (!isNaN(parsedStart * end) && end !== "") {
      // fun fact: any number multiplied by "" is evaluated as the number 0!
      pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
      funcParam && (pt.fp = funcParam);
      modifier && pt.modifier(modifier, this, target);
      return this._pt = pt;
    }

    !currentValue && !(prop in target) && _missingPlugin(prop, end);
    return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
  }
},
    //creates a copy of the vars object and processes any function-based values (putting the resulting values directly into the copy) as well as strings with "random()" in them. It does NOT process relative values.
_processVars = function _processVars(vars, index, target, targets, tween) {
  _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));

  if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
    return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
  }

  var copy = {},
      p;

  for (p in vars) {
    copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
  }

  return copy;
},
    _checkPlugin = function _checkPlugin(property, vars, tween, index, target, targets) {
  var plugin, pt, ptLookup, i;

  if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
    tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);

    if (tween !== _quickTween) {
      ptLookup = tween._ptLookup[tween._targets.indexOf(target)]; //note: we can't use tween._ptLookup[index] because for staggered tweens, the index from the fullTargets array won't match what it is in each individual tween that spawns from the stagger.

      i = plugin._props.length;

      while (i--) {
        ptLookup[plugin._props[i]] = pt;
      }
    }
  }

  return plugin;
},
    _overwritingTween,
    //store a reference temporarily so we can avoid overwriting itself.
_forceAllPropTweens,
    _initTween = function _initTween(tween, time) {
  var vars = tween.vars,
      ease = vars.ease,
      startAt = vars.startAt,
      immediateRender = vars.immediateRender,
      lazy = vars.lazy,
      onUpdate = vars.onUpdate,
      onUpdateParams = vars.onUpdateParams,
      callbackScope = vars.callbackScope,
      runBackwards = vars.runBackwards,
      yoyoEase = vars.yoyoEase,
      keyframes = vars.keyframes,
      autoRevert = vars.autoRevert,
      dur = tween._dur,
      prevStartAt = tween._startAt,
      targets = tween._targets,
      parent = tween.parent,
      fullTargets = parent && parent.data === "nested" ? parent.parent._targets : targets,
      autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites,
      tl = tween.timeline,
      cleanVars,
      i,
      p,
      pt,
      target,
      hasPriority,
      gsData,
      harness,
      plugin,
      ptLookup,
      index,
      harnessVars,
      overwritten;
  tl && (!keyframes || !ease) && (ease = "none");
  tween._ease = _parseEase(ease, _defaults.ease);
  tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;

  if (yoyoEase && tween._yoyo && !tween._repeat) {
    //there must have been a parent timeline with yoyo:true that is currently in its yoyo phase, so flip the eases.
    yoyoEase = tween._yEase;
    tween._yEase = tween._ease;
    tween._ease = yoyoEase;
  }

  tween._from = !tl && !!vars.runBackwards; //nested timelines should never run backwards - the backwards-ness is in the child tweens.

  if (!tl || keyframes && !vars.stagger) {
    //if there's an internal timeline, skip all the parsing because we passed that task down the chain.
    harness = targets[0] ? _getCache(targets[0]).harness : 0;
    harnessVars = harness && vars[harness.prop]; //someone may need to specify CSS-specific values AND non-CSS values, like if the element has an "x" property plus it's a standard DOM element. We allow people to distinguish by wrapping plugin-specific stuff in a css:{} object for example.

    cleanVars = _copyExcluding(vars, _reservedProps);

    if (prevStartAt) {
      prevStartAt.revert(runBackwards && dur ? _revertConfig : _startAtRevertConfig); // if it's a "startAt" (not "from()" or runBackwards: true), we only need to do a shallow revert (keep transforms cached in CSSPlugin)
      // don't just _removeFromParent(prevStartAt.render(-1, true)) because that'll leave inline styles. We're creating a new _startAt for "startAt" tweens that re-capture things to ensure that if the pre-tween values changed since the tween was created, they're recorded.

      prevStartAt._lazy = 0;
    }

    if (startAt) {
      _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
        data: "isStart",
        overwrite: false,
        parent: parent,
        immediateRender: true,
        lazy: _isNotFalse(lazy),
        startAt: null,
        delay: 0,
        onUpdate: onUpdate,
        onUpdateParams: onUpdateParams,
        callbackScope: callbackScope,
        stagger: 0
      }, startAt))); //copy the properties/values into a new object to avoid collisions, like var to = {x:0}, from = {x:500}; timeline.fromTo(e, from, to).fromTo(e, to, from);


      time < 0 && (_reverting || !immediateRender && !autoRevert) && tween._startAt.revert(_revertConfig); // rare edge case, like if a render is forced in the negative direction of a non-initted tween.

      if (immediateRender) {
        if (dur && time <= 0) {
          time && (tween._zTime = time);
          return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a Timeline, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
        }
      }
    } else if (runBackwards && dur) {
      //from() tweens must be handled uniquely: their beginning values must be rendered but we don't want overwriting to occur yet (when time is still 0). Wait until the tween actually begins before doing all the routines like overwriting. At that time, we should render at the END of the tween to ensure that things initialize correctly (remember, from() tweens go backwards)
      if (!prevStartAt) {
        time && (immediateRender = false); //in rare cases (like if a from() tween runs and then is invalidate()-ed), immediateRender could be true but the initial forced-render gets skipped, so there's no need to force the render in this context when the _time is greater than 0

        p = _setDefaults({
          overwrite: false,
          data: "isFromStart",
          //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
          lazy: immediateRender && _isNotFalse(lazy),
          immediateRender: immediateRender,
          //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
          stagger: 0,
          parent: parent //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y:gsap.utils.wrap([-100,100])})

        }, cleanVars);
        harnessVars && (p[harness.prop] = harnessVars); // in case someone does something like .from(..., {css:{}})

        _removeFromParent(tween._startAt = Tween.set(targets, p));

        time < 0 && (_reverting ? tween._startAt.revert(_revertConfig) : tween._startAt.render(-1, true));
        tween._zTime = time;

        if (!immediateRender) {
          _initTween(tween._startAt, _tinyNum); //ensures that the initial values are recorded

        } else if (!time) {
          return;
        }
      }
    }

    tween._pt = tween._ptCache = 0;
    lazy = dur && _isNotFalse(lazy) || lazy && !dur;

    for (i = 0; i < targets.length; i++) {
      target = targets[i];
      gsData = target._gsap || _harness(targets)[i]._gsap;
      tween._ptLookup[i] = ptLookup = {};
      _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender(); //if other tweens of the same target have recently initted but haven't rendered yet, we've got to force the render so that the starting values are correct (imagine populating a timeline with a bunch of sequential tweens and then jumping to the end)

      index = fullTargets === targets ? i : fullTargets.indexOf(target);

      if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
        tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);

        plugin._props.forEach(function (name) {
          ptLookup[name] = pt;
        });

        plugin.priority && (hasPriority = 1);
      }

      if (!harness || harnessVars) {
        for (p in cleanVars) {
          if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) {
            plugin.priority && (hasPriority = 1);
          } else {
            ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
          }
        }
      }

      tween._op && tween._op[i] && tween.kill(target, tween._op[i]);

      if (autoOverwrite && tween._pt) {
        _overwritingTween = tween;

        _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time)); // make sure the overwriting doesn't overwrite THIS tween!!!


        overwritten = !tween.parent;
        _overwritingTween = 0;
      }

      tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
    }

    hasPriority && _sortPropTweensByPriority(tween);
    tween._onInit && tween._onInit(tween); //plugins like RoundProps must wait until ALL of the PropTweens are instantiated. In the plugin's init() function, it sets the _onInit on the tween instance. May not be pretty/intuitive, but it's fast and keeps file size down.
  }

  tween._onUpdate = onUpdate;
  tween._initted = (!tween._op || tween._pt) && !overwritten; // if overwrittenProps resulted in the entire tween being killed, do NOT flag it as initted or else it may render for one tick.

  keyframes && time <= 0 && tl.render(_bigNum, true, true); // if there's a 0% keyframe, it'll render in the "before" state for any staggered/delayed animations thus when the following tween initializes, it'll use the "before" state instead of the "after" state as the initial values.
},
    _updatePropTweens = function _updatePropTweens(tween, property, value, start, startIsRelative, ratio, time) {
  var ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property],
      pt,
      rootPT,
      lookup,
      i;

  if (!ptCache) {
    ptCache = tween._ptCache[property] = [];
    lookup = tween._ptLookup;
    i = tween._targets.length;

    while (i--) {
      pt = lookup[i][property];

      if (pt && pt.d && pt.d._pt) {
        // it's a plugin, so find the nested PropTween
        pt = pt.d._pt;

        while (pt && pt.p !== property && pt.fp !== property) {
          // "fp" is functionParam for things like setting CSS variables which require .setProperty("--var-name", value)
          pt = pt._next;
        }
      }

      if (!pt) {
        // there is no PropTween associated with that property, so we must FORCE one to be created and ditch out of this
        // if the tween has other properties that already rendered at new positions, we'd normally have to rewind to put them back like tween.render(0, true) before forcing an _initTween(), but that can create another edge case like tweening a timeline's progress would trigger onUpdates to fire which could move other things around. It's better to just inform users that .resetTo() should ONLY be used for tweens that already have that property. For example, you can't gsap.to(...{ y: 0 }) and then tween.restTo("x", 200) for example.
        _forceAllPropTweens = 1; // otherwise, when we _addPropTween() and it finds no change between the start and end values, it skips creating a PropTween (for efficiency...why tween when there's no difference?) but in this case we NEED that PropTween created so we can edit it.

        tween.vars[property] = "+=0";

        _initTween(tween, time);

        _forceAllPropTweens = 0;
        return 1;
      }

      ptCache.push(pt);
    }
  }

  i = ptCache.length;

  while (i--) {
    rootPT = ptCache[i];
    pt = rootPT._pt || rootPT; // complex values may have nested PropTweens. We only accommodate the FIRST value.

    pt.s = (start || start === 0) && !startIsRelative ? start : pt.s + (start || 0) + ratio * pt.c;
    pt.c = value - pt.s;
    rootPT.e && (rootPT.e = _round(value) + getUnit(rootPT.e)); // mainly for CSSPlugin (end value)

    rootPT.b && (rootPT.b = pt.s + getUnit(rootPT.b)); // (beginning value)
  }
},
    _addAliasesToVars = function _addAliasesToVars(targets, vars) {
  var harness = targets[0] ? _getCache(targets[0]).harness : 0,
      propertyAliases = harness && harness.aliases,
      copy,
      p,
      i,
      aliases;

  if (!propertyAliases) {
    return vars;
  }

  copy = _merge({}, vars);

  for (p in propertyAliases) {
    if (p in copy) {
      aliases = propertyAliases[p].split(",");
      i = aliases.length;

      while (i--) {
        copy[aliases[i]] = copy[p];
      }
    }
  }

  return copy;
},
    // parses multiple formats, like {"0%": {x: 100}, {"50%": {x: -20}} and { x: {"0%": 100, "50%": -20} }, and an "ease" can be set on any object. We populate an "allProps" object with an Array for each property, like {x: [{}, {}], y:[{}, {}]} with data for each property tween. The objects have a "t" (time), "v", (value), and "e" (ease) property. This allows us to piece together a timeline later.
_parseKeyframe = function _parseKeyframe(prop, obj, allProps, easeEach) {
  var ease = obj.ease || easeEach || "power1.inOut",
      p,
      a;

  if (_isArray(obj)) {
    a = allProps[prop] || (allProps[prop] = []); // t = time (out of 100), v = value, e = ease

    obj.forEach(function (value, i) {
      return a.push({
        t: i / (obj.length - 1) * 100,
        v: value,
        e: ease
      });
    });
  } else {
    for (p in obj) {
      a = allProps[p] || (allProps[p] = []);
      p === "ease" || a.push({
        t: parseFloat(prop),
        v: obj[p],
        e: ease
      });
    }
  }
},
    _parseFuncOrString = function _parseFuncOrString(value, tween, i, target, targets) {
  return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
},
    _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    _staggerPropsToSkip = {};

_forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function (name) {
  return _staggerPropsToSkip[name] = 1;
});
/*
 * --------------------------------------------------------------------------------------
 * TWEEN
 * --------------------------------------------------------------------------------------
 */


var Tween = /*#__PURE__*/function (_Animation2) {
  _inheritsLoose(Tween, _Animation2);

  function Tween(targets, vars, position, skipInherit) {
    var _this3;

    if (typeof vars === "number") {
      position.duration = vars;
      vars = position;
      position = null;
    }

    _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
    var _this3$vars = _this3.vars,
        duration = _this3$vars.duration,
        delay = _this3$vars.delay,
        immediateRender = _this3$vars.immediateRender,
        stagger = _this3$vars.stagger,
        overwrite = _this3$vars.overwrite,
        keyframes = _this3$vars.keyframes,
        defaults = _this3$vars.defaults,
        scrollTrigger = _this3$vars.scrollTrigger,
        yoyoEase = _this3$vars.yoyoEase,
        parent = vars.parent || _globalTimeline,
        parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [targets] : toArray(targets),
        tl,
        i,
        copy,
        l,
        p,
        curTarget,
        staggerFunc,
        staggerVarsToMerge;
    _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://greensock.com", !_config.nullTargetWarn) || [];
    _this3._ptLookup = []; //PropTween lookup. An array containing an object for each target, having keys for each tweening property

    _this3._overwrite = overwrite;

    if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
      vars = _this3.vars;
      tl = _this3.timeline = new Timeline({
        data: "nested",
        defaults: defaults || {}
      });
      tl.kill();
      tl.parent = tl._dp = _assertThisInitialized(_this3);
      tl._start = 0;

      if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
        l = parsedTargets.length;
        staggerFunc = stagger && distribute(stagger);

        if (_isObject(stagger)) {
          //users can pass in callbacks like onStart/onComplete in the stagger object. These should fire with each individual tween.
          for (p in stagger) {
            if (~_staggerTweenProps.indexOf(p)) {
              staggerVarsToMerge || (staggerVarsToMerge = {});
              staggerVarsToMerge[p] = stagger[p];
            }
          }
        }

        for (i = 0; i < l; i++) {
          copy = _copyExcluding(vars, _staggerPropsToSkip);
          copy.stagger = 0;
          yoyoEase && (copy.yoyoEase = yoyoEase);
          staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
          curTarget = parsedTargets[i]; //don't just copy duration or delay because if they're a string or function, we'd end up in an infinite loop because _isFuncOrString() would evaluate as true in the child tweens, entering this loop, etc. So we parse the value straight from vars and default to 0.

          copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
          copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;

          if (!stagger && l === 1 && copy.delay) {
            // if someone does delay:"random(1, 5)", repeat:-1, for example, the delay shouldn't be inside the repeat.
            _this3._delay = delay = copy.delay;
            _this3._start += delay;
            copy.delay = 0;
          }

          tl.to(curTarget, copy, staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0);
          tl._ease = _easeMap.none;
        }

        tl.duration() ? duration = delay = 0 : _this3.timeline = 0; // if the timeline's duration is 0, we don't need a timeline internally!
      } else if (keyframes) {
        _inheritDefaults(_setDefaults(tl.vars.defaults, {
          ease: "none"
        }));

        tl._ease = _parseEase(keyframes.ease || vars.ease || "none");
        var time = 0,
            a,
            kf,
            v;

        if (_isArray(keyframes)) {
          keyframes.forEach(function (frame) {
            return tl.to(parsedTargets, frame, ">");
          });
          tl.duration(); // to ensure tl._dur is cached because we tap into it for performance purposes in the render() method.
        } else {
          copy = {};

          for (p in keyframes) {
            p === "ease" || p === "easeEach" || _parseKeyframe(p, keyframes[p], copy, keyframes.easeEach);
          }

          for (p in copy) {
            a = copy[p].sort(function (a, b) {
              return a.t - b.t;
            });
            time = 0;

            for (i = 0; i < a.length; i++) {
              kf = a[i];
              v = {
                ease: kf.e,
                duration: (kf.t - (i ? a[i - 1].t : 0)) / 100 * duration
              };
              v[p] = kf.v;
              tl.to(parsedTargets, v, time);
              time += v.duration;
            }
          }

          tl.duration() < duration && tl.to({}, {
            duration: duration - tl.duration()
          }); // in case keyframes didn't go to 100%
        }
      }

      duration || _this3.duration(duration = tl.duration());
    } else {
      _this3.timeline = 0; //speed optimization, faster lookups (no going up the prototype chain)
    }

    if (overwrite === true && !_suppressOverwrites) {
      _overwritingTween = _assertThisInitialized(_this3);

      _globalTimeline.killTweensOf(parsedTargets);

      _overwritingTween = 0;
    }

    _addToTimeline(parent, _assertThisInitialized(_this3), position);

    vars.reversed && _this3.reverse();
    vars.paused && _this3.paused(true);

    if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
      _this3._tTime = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)

      _this3.render(Math.max(0, -delay)); //in case delay is negative

    }

    scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
    return _this3;
  }

  var _proto3 = Tween.prototype;

  _proto3.render = function render(totalTime, suppressEvents, force) {
    var prevTime = this._time,
        tDur = this._tDur,
        dur = this._dur,
        isNegative = totalTime < 0,
        tTime = totalTime > tDur - _tinyNum && !isNegative ? tDur : totalTime < _tinyNum ? 0 : totalTime,
        time,
        pt,
        iteration,
        cycleDuration,
        prevIteration,
        isYoyo,
        ratio,
        timeline,
        yoyoEase;

    if (!dur) {
      _renderZeroDurationTween(this, totalTime, suppressEvents, force);
    } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== isNegative) {
      //this senses if we're crossing over the start time, in which case we must record _zTime and force the render, but we do it in this lengthy conditional way for performance reasons (usually we can skip the calculations): this._initted && (this._zTime < 0) !== (totalTime < 0)
      time = tTime;
      timeline = this.timeline;

      if (this._repeat) {
        //adjust the time for repeats and yoyos
        cycleDuration = dur + this._rDelay;

        if (this._repeat < -1 && isNegative) {
          return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
        }

        time = _roundPrecise(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)

        if (tTime === tDur) {
          // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
          iteration = this._repeat;
          time = dur;
        } else {
          iteration = ~~(tTime / cycleDuration);

          if (iteration && iteration === tTime / cycleDuration) {
            time = dur;
            iteration--;
          }

          time > dur && (time = dur);
        }

        isYoyo = this._yoyo && iteration & 1;

        if (isYoyo) {
          yoyoEase = this._yEase;
          time = dur - time;
        }

        prevIteration = _animationCycle(this._tTime, cycleDuration);

        if (time === prevTime && !force && this._initted) {
          //could be during the repeatDelay part. No need to render and fire callbacks.
          this._tTime = tTime;
          return this;
        }

        if (iteration !== prevIteration) {
          timeline && this._yEase && _propagateYoyoEase(timeline, isYoyo); //repeatRefresh functionality

          if (this.vars.repeatRefresh && !isYoyo && !this._lock) {
            this._lock = force = 1; //force, otherwise if lazy is true, the _attemptInitTween() will return and we'll jump out and get caught bouncing on each tick.

            this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
          }
        }
      }

      if (!this._initted) {
        if (_attemptInitTween(this, isNegative ? totalTime : time, force, suppressEvents)) {
          this._tTime = 0; // in constructor if immediateRender is true, we set _tTime to -_tinyNum to have the playhead cross the starting point but we can't leave _tTime as a negative number.

          return this;
        }

        if (prevTime !== this._time) {
          // rare edge case - during initialization, an onUpdate in the _startAt (.fromTo()) might force this tween to render at a different spot in which case we should ditch this render() call so that it doesn't revert the values.
          return this;
        }

        if (dur !== this._dur) {
          // while initting, a plugin like InertiaPlugin might alter the duration, so rerun from the start to ensure everything renders as it should.
          return this.render(totalTime, suppressEvents, force);
        }
      }

      this._tTime = tTime;
      this._time = time;

      if (!this._act && this._ts) {
        this._act = 1; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.

        this._lazy = 0;
      }

      this.ratio = ratio = (yoyoEase || this._ease)(time / dur);

      if (this._from) {
        this.ratio = ratio = 1 - ratio;
      }

      if (time && !prevTime && !suppressEvents) {
        _callback(this, "onStart");

        if (this._tTime !== tTime) {
          // in case the onStart triggered a render at a different spot, eject. Like if someone did animation.pause(0.5) or something inside the onStart.
          return this;
        }
      }

      pt = this._pt;

      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }

      timeline && timeline.render(totalTime < 0 ? totalTime : !time && isYoyo ? -_tinyNum : timeline._dur * timeline._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);

      if (this._onUpdate && !suppressEvents) {
        isNegative && _rewindStartAt(this, totalTime, suppressEvents, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.

        _callback(this, "onUpdate");
      }

      this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");

      if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
        isNegative && !this._onUpdate && _rewindStartAt(this, totalTime, true, true);
        (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if we're rendering at exactly a time of 0, as there could be autoRevert values that should get set on the next tick (if the playhead goes backward beyond the startTime, negative totalTime). Don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.

        if (!suppressEvents && !(isNegative && !prevTime) && (tTime || prevTime)) {
          // if prevTime and tTime are zero, we shouldn't fire the onReverseComplete. This could happen if you gsap.to(... {paused:true}).play();
          _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);

          this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
        }
      }
    }

    return this;
  };

  _proto3.targets = function targets() {
    return this._targets;
  };

  _proto3.invalidate = function invalidate() {
    this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0;
    this._ptLookup = [];
    this.timeline && this.timeline.invalidate();
    return _Animation2.prototype.invalidate.call(this);
  };

  _proto3.resetTo = function resetTo(property, value, start, startIsRelative) {
    _tickerActive || _ticker.wake();
    this._ts || this.play();
    var time = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        ratio;
    this._initted || _initTween(this, time);
    ratio = this._ease(time / this._dur); // don't just get tween.ratio because it may not have rendered yet.
    // possible future addition to allow an object with multiple values to update, like tween.resetTo({x: 100, y: 200}); At this point, it doesn't seem worth the added kb given the fact that most users will likely opt for the convenient gsap.quickTo() way of interacting with this method.
    // if (_isObject(property)) { // performance optimization
    // 	for (p in property) {
    // 		if (_updatePropTweens(this, p, property[p], value ? value[p] : null, start, ratio, time)) {
    // 			return this.resetTo(property, value, start, startIsRelative); // if a PropTween wasn't found for the property, it'll get forced with a re-initialization so we need to jump out and start over again.
    // 		}
    // 	}
    // } else {

    if (_updatePropTweens(this, property, value, start, startIsRelative, ratio, time)) {
      return this.resetTo(property, value, start, startIsRelative); // if a PropTween wasn't found for the property, it'll get forced with a re-initialization so we need to jump out and start over again.
    } //}


    _alignPlayhead(this, 0);

    this.parent || _addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
    return this.render(0);
  };

  _proto3.kill = function kill(targets, vars) {
    if (vars === void 0) {
      vars = "all";
    }

    if (!targets && (!vars || vars === "all")) {
      this._lazy = this._pt = 0;
      return this.parent ? _interrupt(this) : this;
    }

    if (this.timeline) {
      var tDur = this.timeline.totalDuration();
      this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this); // if nothing is left tweening, interrupt.

      this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1); // if a nested tween is killed that changes the duration, it should affect this tween's duration. We must use the ratio, though, because sometimes the internal timeline is stretched like for keyframes where they don't all add up to whatever the parent tween's duration was set to.

      return this;
    }

    var parsedTargets = this._targets,
        killingTargets = targets ? toArray(targets) : parsedTargets,
        propTweenLookup = this._ptLookup,
        firstPT = this._pt,
        overwrittenProps,
        curLookup,
        curOverwriteProps,
        props,
        p,
        pt,
        i;

    if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
      vars === "all" && (this._pt = 0);
      return _interrupt(this);
    }

    overwrittenProps = this._op = this._op || [];

    if (vars !== "all") {
      //so people can pass in a comma-delimited list of property names
      if (_isString(vars)) {
        p = {};

        _forEachName(vars, function (name) {
          return p[name] = 1;
        });

        vars = p;
      }

      vars = _addAliasesToVars(parsedTargets, vars);
    }

    i = parsedTargets.length;

    while (i--) {
      if (~killingTargets.indexOf(parsedTargets[i])) {
        curLookup = propTweenLookup[i];

        if (vars === "all") {
          overwrittenProps[i] = vars;
          props = curLookup;
          curOverwriteProps = {};
        } else {
          curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
          props = vars;
        }

        for (p in props) {
          pt = curLookup && curLookup[p];

          if (pt) {
            if (!("kill" in pt.d) || pt.d.kill(p) === true) {
              _removeLinkedListItem(this, pt, "_pt");
            }

            delete curLookup[p];
          }

          if (curOverwriteProps !== "all") {
            curOverwriteProps[p] = 1;
          }
        }
      }
    }

    this._initted && !this._pt && firstPT && _interrupt(this); //if all tweening properties are killed, kill the tween. Without this line, if there's a tween with multiple targets and then you killTweensOf() each target individually, the tween would technically still remain active and fire its onComplete even though there aren't any more properties tweening.

    return this;
  };

  Tween.to = function to(targets, vars) {
    return new Tween(targets, vars, arguments[2]);
  };

  Tween.from = function from(targets, vars) {
    return _createTweenType(1, arguments);
  };

  Tween.delayedCall = function delayedCall(delay, callback, params, scope) {
    return new Tween(callback, 0, {
      immediateRender: false,
      lazy: false,
      overwrite: false,
      delay: delay,
      onComplete: callback,
      onReverseComplete: callback,
      onCompleteParams: params,
      onReverseCompleteParams: params,
      callbackScope: scope
    });
  };

  Tween.fromTo = function fromTo(targets, fromVars, toVars) {
    return _createTweenType(2, arguments);
  };

  Tween.set = function set(targets, vars) {
    vars.duration = 0;
    vars.repeatDelay || (vars.repeat = 0);
    return new Tween(targets, vars);
  };

  Tween.killTweensOf = function killTweensOf(targets, props, onlyActive) {
    return _globalTimeline.killTweensOf(targets, props, onlyActive);
  };

  return Tween;
}(Animation);

_setDefaults(Tween.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
}); //add the pertinent timeline methods to Tween instances so that users can chain conveniently and create a timeline automatically. (removed due to concerns that it'd ultimately add to more confusion especially for beginners)
// _forEachName("to,from,fromTo,set,call,add,addLabel,addPause", name => {
// 	Tween.prototype[name] = function() {
// 		let tl = new Timeline();
// 		return _addToTimeline(tl, this)[name].apply(tl, toArray(arguments));
// 	}
// });
//for backward compatibility. Leverage the timeline calls.


_forEachName("staggerTo,staggerFrom,staggerFromTo", function (name) {
  Tween[name] = function () {
    var tl = new Timeline(),
        params = _slice.call(arguments, 0);

    params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
    return tl[name].apply(tl, params);
  };
});
/*
 * --------------------------------------------------------------------------------------
 * PROPTWEEN
 * --------------------------------------------------------------------------------------
 */


var _setterPlain = function _setterPlain(target, property, value) {
  return target[property] = value;
},
    _setterFunc = function _setterFunc(target, property, value) {
  return target[property](value);
},
    _setterFuncWithParam = function _setterFuncWithParam(target, property, value, data) {
  return target[property](data.fp, value);
},
    _setterAttribute = function _setterAttribute(target, property, value) {
  return target.setAttribute(property, value);
},
    _getSetter = function _getSetter(target, property) {
  return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
},
    _renderPlain = function _renderPlain(ratio, data) {
  return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1000000) / 1000000, data);
},
    _renderBoolean = function _renderBoolean(ratio, data) {
  return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
},
    _renderComplexString = function _renderComplexString(ratio, data) {
  var pt = data._pt,
      s = "";

  if (!ratio && data.b) {
    //b = beginning string
    s = data.b;
  } else if (ratio === 1 && data.e) {
    //e = ending string
    s = data.e;
  } else {
    while (pt) {
      s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 10000) / 10000) + s; //we use the "p" property for the text inbetween (like a suffix). And in the context of a complex string, the modifier (m) is typically just Math.round(), like for RGB colors.

      pt = pt._next;
    }

    s += data.c; //we use the "c" of the PropTween to store the final chunk of non-numeric text.
  }

  data.set(data.t, data.p, s, data);
},
    _renderPropTweens = function _renderPropTweens(ratio, data) {
  var pt = data._pt;

  while (pt) {
    pt.r(ratio, pt.d);
    pt = pt._next;
  }
},
    _addPluginModifier = function _addPluginModifier(modifier, tween, target, property) {
  var pt = this._pt,
      next;

  while (pt) {
    next = pt._next;
    pt.p === property && pt.modifier(modifier, tween, target);
    pt = next;
  }
},
    _killPropTweensOf = function _killPropTweensOf(property) {
  var pt = this._pt,
      hasNonDependentRemaining,
      next;

  while (pt) {
    next = pt._next;

    if (pt.p === property && !pt.op || pt.op === property) {
      _removeLinkedListItem(this, pt, "_pt");
    } else if (!pt.dep) {
      hasNonDependentRemaining = 1;
    }

    pt = next;
  }

  return !hasNonDependentRemaining;
},
    _setterWithModifier = function _setterWithModifier(target, property, value, data) {
  data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
},
    _sortPropTweensByPriority = function _sortPropTweensByPriority(parent) {
  var pt = parent._pt,
      next,
      pt2,
      first,
      last; //sorts the PropTween linked list in order of priority because some plugins need to do their work after ALL of the PropTweens were created (like RoundPropsPlugin and ModifiersPlugin)

  while (pt) {
    next = pt._next;
    pt2 = first;

    while (pt2 && pt2.pr > pt.pr) {
      pt2 = pt2._next;
    }

    if (pt._prev = pt2 ? pt2._prev : last) {
      pt._prev._next = pt;
    } else {
      first = pt;
    }

    if (pt._next = pt2) {
      pt2._prev = pt;
    } else {
      last = pt;
    }

    pt = next;
  }

  parent._pt = first;
}; //PropTween key: t = target, p = prop, r = renderer, d = data, s = start, c = change, op = overwriteProperty (ONLY populated when it's different than p), pr = priority, _next/_prev for the linked list siblings, set = setter, m = modifier, mSet = modifierSetter (the original setter, before a modifier was added)


var PropTween = /*#__PURE__*/function () {
  function PropTween(next, target, prop, start, change, renderer, data, setter, priority) {
    this.t = target;
    this.s = start;
    this.c = change;
    this.p = prop;
    this.r = renderer || _renderPlain;
    this.d = data || this;
    this.set = setter || _setterPlain;
    this.pr = priority || 0;
    this._next = next;

    if (next) {
      next._prev = this;
    }
  }

  var _proto4 = PropTween.prototype;

  _proto4.modifier = function modifier(func, tween, target) {
    this.mSet = this.mSet || this.set; //in case it was already set (a PropTween can only have one modifier)

    this.set = _setterWithModifier;
    this.m = func;
    this.mt = target; //modifier target

    this.tween = tween;
  };

  return PropTween;
}(); //Initialization tasks

_forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (name) {
  return _reservedProps[name] = 1;
});

_globals.TweenMax = _globals.TweenLite = Tween;
_globals.TimelineLite = _globals.TimelineMax = Timeline;
_globalTimeline = new Timeline({
  sortChildren: false,
  defaults: _defaults,
  autoRemoveChildren: true,
  id: "root",
  smoothChildTiming: true
});
_config.stringFilter = _colorStringFilter;

var _media = [],
    _listeners = {},
    _emptyArray = [],
    _lastMediaTime = 0,
    _dispatch = function _dispatch(type) {
  return (_listeners[type] || _emptyArray).map(function (f) {
    return f();
  });
},
    _onMediaChange = function _onMediaChange() {
  var time = Date.now(),
      matches = [];

  if (time - _lastMediaTime > 2) {
    _dispatch("matchMediaInit");

    _media.forEach(function (c) {
      var queries = c.queries,
          conditions = c.conditions,
          match,
          p,
          anyMatch,
          toggled;

      for (p in queries) {
        match = _win.matchMedia(queries[p]).matches; // Firefox doesn't update the "matches" property of the MediaQueryList object correctly - it only does so as it calls its change handler - so we must re-create a media query here to ensure it's accurate.

        match && (anyMatch = 1);

        if (match !== conditions[p]) {
          conditions[p] = match;
          toggled = 1;
        }
      }

      if (toggled) {
        c.revert();
        anyMatch && matches.push(c);
      }
    });

    _dispatch("matchMediaRevert");

    matches.forEach(function (c) {
      return c.onMatch(c);
    });
    _lastMediaTime = time;

    _dispatch("matchMedia");
  }
};

var Context = /*#__PURE__*/function () {
  function Context(func, scope) {
    this.selector = scope && selector(scope);
    this.data = [];
    this._r = []; // returned/cleanup functions

    this.isReverted = false;
    func && this.add(func);
  }

  var _proto5 = Context.prototype;

  _proto5.add = function add(name, func, scope) {
    if (_isFunction(name)) {
      scope = func;
      func = name;
      name = _isFunction;
    }

    var self = this,
        f = function f() {
      var prev = _context,
          prevSelector = self.selector,
          result;
      prev && prev.data.push(self);
      scope && (self.selector = selector(scope));
      _context = self;
      result = func.apply(self, arguments);
      _isFunction(result) && self._r.push(result);
      _context = prev;
      self.selector = prevSelector;
      self.isReverted = false;
      return result;
    };

    self.last = f;
    return name === _isFunction ? f(self) : name ? self[name] = f : f;
  };

  _proto5.ignore = function ignore(func) {
    var prev = _context;
    _context = null;
    func(this);
    _context = prev;
  };

  _proto5.getTweens = function getTweens() {
    var a = [];
    this.data.forEach(function (e) {
      return e instanceof Context ? a.push.apply(a, e.getTweens()) : e instanceof Tween && e._targets[0] !== e.vars.onComplete && a.push(e);
    }); // don't include delayedCalls

    return a;
  };

  _proto5.clear = function clear() {
    this._r.length = this.data.length = 0;
  };

  _proto5.kill = function kill(revert, matchMedia) {
    var _this4 = this;

    if (revert) {
      // save as an object so that we can cache the globalTime for each tween to optimize performance during the sort
      this.getTweens().map(function (t) {
        return {
          g: t.globalTime(0),
          t: t
        };
      }).sort(function (a, b) {
        return b.g - a.g || -1;
      }).forEach(function (o) {
        return o.t.revert(revert);
      }); // note: all of the _startAt tweens should be reverted in reverse order that thy were created, and they'll all have the same globalTime (-1) so the " || -1" in the sort keeps the order properly.

      this.data.forEach(function (e) {
        return !(e instanceof Animation) && e.revert && e.revert(revert);
      });

      this._r.forEach(function (f) {
        return f(revert, _this4);
      });

      this.isReverted = true;
    } else {
      this.data.forEach(function (e) {
        return e.kill && e.kill();
      });
    }

    this.clear();

    if (matchMedia) {
      var i = _media.indexOf(this);

      !!~i && _media.splice(i, 1);
    }
  };

  _proto5.revert = function revert(config) {
    this.kill(config || {});
  };

  return Context;
}();

var MatchMedia = /*#__PURE__*/function () {
  function MatchMedia(scope) {
    this.contexts = [];
    this.scope = scope;
  }

  var _proto6 = MatchMedia.prototype;

  _proto6.add = function add(conditions, func, scope) {
    _isObject(conditions) || (conditions = {
      matches: conditions
    });
    var context = new Context(0, scope || this.scope),
        cond = context.conditions = {},
        mq,
        p,
        active;
    this.contexts.push(context);
    func = context.add("onMatch", func);
    context.queries = conditions;

    for (p in conditions) {
      if (p === "all") {
        active = 1;
      } else {
        mq = _win.matchMedia(conditions[p]);

        if (mq) {
          _media.indexOf(context) < 0 && _media.push(context);
          (cond[p] = mq.matches) && (active = 1);
          mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
        }
      }
    }

    active && func(context);
    return this;
  } // refresh() {
  // 	let time = _lastMediaTime,
  // 		media = _media;
  // 	_lastMediaTime = -1;
  // 	_media = this.contexts;
  // 	_onMediaChange();
  // 	_lastMediaTime = time;
  // 	_media = media;
  // }
  ;

  _proto6.revert = function revert(config) {
    this.kill(config || {});
  };

  _proto6.kill = function kill(revert) {
    this.contexts.forEach(function (c) {
      return c.kill(revert, true);
    });
  };

  return MatchMedia;
}();
/*
 * --------------------------------------------------------------------------------------
 * GSAP
 * --------------------------------------------------------------------------------------
 */


var _gsap = {
  registerPlugin: function registerPlugin() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    args.forEach(function (config) {
      return _createPlugin(config);
    });
  },
  timeline: function timeline(vars) {
    return new Timeline(vars);
  },
  getTweensOf: function getTweensOf(targets, onlyActive) {
    return _globalTimeline.getTweensOf(targets, onlyActive);
  },
  getProperty: function getProperty(target, property, unit, uncache) {
    _isString(target) && (target = toArray(target)[0]); //in case selector text or an array is passed in

    var getter = _getCache(target || {}).get,
        format = unit ? _passThrough : _numericIfPossible;

    unit === "native" && (unit = "");
    return !target ? target : !property ? function (property, unit, uncache) {
      return format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
    } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
  },
  quickSetter: function quickSetter(target, property, unit) {
    target = toArray(target);

    if (target.length > 1) {
      var setters = target.map(function (t) {
        return gsap.quickSetter(t, property, unit);
      }),
          l = setters.length;
      return function (value) {
        var i = l;

        while (i--) {
          setters[i](value);
        }
      };
    }

    target = target[0] || {};

    var Plugin = _plugins[property],
        cache = _getCache(target),
        p = cache.harness && (cache.harness.aliases || {})[property] || property,
        // in case it's an alias, like "rotate" for "rotation".
    setter = Plugin ? function (value) {
      var p = new Plugin();
      _quickTween._pt = 0;
      p.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
      p.render(1, p);
      _quickTween._pt && _renderPropTweens(1, _quickTween);
    } : cache.set(target, p);

    return Plugin ? setter : function (value) {
      return setter(target, p, unit ? value + unit : value, cache, 1);
    };
  },
  quickTo: function quickTo(target, property, vars) {
    var _merge2;

    var tween = gsap.to(target, _merge((_merge2 = {}, _merge2[property] = "+=0.1", _merge2.paused = true, _merge2), vars || {})),
        func = function func(value, start, startIsRelative) {
      return tween.resetTo(property, value, start, startIsRelative);
    };

    func.tween = tween;
    return func;
  },
  isTweening: function isTweening(targets) {
    return _globalTimeline.getTweensOf(targets, true).length > 0;
  },
  defaults: function defaults(value) {
    value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
    return _mergeDeep(_defaults, value || {});
  },
  config: function config(value) {
    return _mergeDeep(_config, value || {});
  },
  registerEffect: function registerEffect(_ref3) {
    var name = _ref3.name,
        effect = _ref3.effect,
        plugins = _ref3.plugins,
        defaults = _ref3.defaults,
        extendTimeline = _ref3.extendTimeline;
    (plugins || "").split(",").forEach(function (pluginName) {
      return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
    });

    _effects[name] = function (targets, vars, tl) {
      return effect(toArray(targets), _setDefaults(vars || {}, defaults), tl);
    };

    if (extendTimeline) {
      Timeline.prototype[name] = function (targets, vars, position) {
        return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
      };
    }
  },
  registerEase: function registerEase(name, ease) {
    _easeMap[name] = _parseEase(ease);
  },
  parseEase: function parseEase(ease, defaultEase) {
    return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
  },
  getById: function getById(id) {
    return _globalTimeline.getById(id);
  },
  exportRoot: function exportRoot(vars, includeDelayedCalls) {
    if (vars === void 0) {
      vars = {};
    }

    var tl = new Timeline(vars),
        child,
        next;
    tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);

    _globalTimeline.remove(tl);

    tl._dp = 0; //otherwise it'll get re-activated when adding children and be re-introduced into _globalTimeline's linked list (then added to itself).

    tl._time = tl._tTime = _globalTimeline._time;
    child = _globalTimeline._first;

    while (child) {
      next = child._next;

      if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
        _addToTimeline(tl, child, child._start - child._delay);
      }

      child = next;
    }

    _addToTimeline(_globalTimeline, tl, 0);

    return tl;
  },
  context: function context(func, scope) {
    return func ? new Context(func, scope) : _context;
  },
  matchMedia: function matchMedia(scope) {
    return new MatchMedia(scope);
  },
  matchMediaRefresh: function matchMediaRefresh() {
    return _media.forEach(function (c) {
      var cond = c.conditions,
          found,
          p;

      for (p in cond) {
        if (cond[p]) {
          cond[p] = false;
          found = 1;
        }
      }

      found && c.revert();
    }) || _onMediaChange();
  },
  addEventListener: function addEventListener(type, callback) {
    var a = _listeners[type] || (_listeners[type] = []);
    ~a.indexOf(callback) || a.push(callback);
  },
  removeEventListener: function removeEventListener(type, callback) {
    var a = _listeners[type],
        i = a && a.indexOf(callback);
    i >= 0 && a.splice(i, 1);
  },
  utils: {
    wrap: wrap,
    wrapYoyo: wrapYoyo,
    distribute: distribute,
    random: random,
    snap: snap,
    normalize: normalize,
    getUnit: getUnit,
    clamp: clamp,
    splitColor: splitColor,
    toArray: toArray,
    selector: selector,
    mapRange: mapRange,
    pipe: pipe,
    unitize: unitize,
    interpolate: interpolate,
    shuffle: shuffle
  },
  install: _install,
  effects: _effects,
  ticker: _ticker,
  updateRoot: Timeline.updateRoot,
  plugins: _plugins,
  globalTimeline: _globalTimeline,
  core: {
    PropTween: PropTween,
    globals: _addGlobal,
    Tween: Tween,
    Timeline: Timeline,
    Animation: Animation,
    getCache: _getCache,
    _removeLinkedListItem: _removeLinkedListItem,
    reverting: function reverting() {
      return _reverting;
    },
    context: function context(toAdd) {
      if (toAdd && _context) {
        _context.data.push(toAdd);

        toAdd._ctx = _context;
      }

      return _context;
    },
    suppressOverwrites: function suppressOverwrites(value) {
      return _suppressOverwrites = value;
    }
  }
};

_forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function (name) {
  return _gsap[name] = Tween[name];
});

_ticker.add(Timeline.updateRoot);

_quickTween = _gsap.to({}, {
  duration: 0
}); // ---- EXTRA PLUGINS --------------------------------------------------------

var _getPluginPropTween = function _getPluginPropTween(plugin, prop) {
  var pt = plugin._pt;

  while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
    pt = pt._next;
  }

  return pt;
},
    _addModifiers = function _addModifiers(tween, modifiers) {
  var targets = tween._targets,
      p,
      i,
      pt;

  for (p in modifiers) {
    i = targets.length;

    while (i--) {
      pt = tween._ptLookup[i][p];

      if (pt && (pt = pt.d)) {
        if (pt._pt) {
          // is a plugin
          pt = _getPluginPropTween(pt, p);
        }

        pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
      }
    }
  }
},
    _buildModifierPlugin = function _buildModifierPlugin(name, modifier) {
  return {
    name: name,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function init(target, vars, tween) {
      tween._onInit = function (tween) {
        var temp, p;

        if (_isString(vars)) {
          temp = {};

          _forEachName(vars, function (name) {
            return temp[name] = 1;
          }); //if the user passes in a comma-delimited list of property names to roundProps, like "x,y", we round to whole numbers.


          vars = temp;
        }

        if (modifier) {
          temp = {};

          for (p in vars) {
            temp[p] = modifier(vars[p]);
          }

          vars = temp;
        }

        _addModifiers(tween, vars);
      };
    }
  };
}; //register core plugins


var gsap = _gsap.registerPlugin({
  name: "attr",
  init: function init(target, vars, tween, index, targets) {
    var p, pt, v;
    this.tween = tween;

    for (p in vars) {
      v = target.getAttribute(p) || "";
      pt = this.add(target, "setAttribute", (v || 0) + "", vars[p], index, targets, 0, 0, p);
      pt.op = p;
      pt.b = v; // record the beginning value so we can revert()

      this._props.push(p);
    }
  },
  render: function render(ratio, data) {
    var pt = data._pt;

    while (pt) {
      _reverting ? pt.set(pt.t, pt.p, pt.b, pt) : pt.r(ratio, pt.d); // if reverting, go back to the original (pt.b)

      pt = pt._next;
    }
  }
}, {
  name: "endArray",
  init: function init(target, value) {
    var i = value.length;

    while (i--) {
      this.add(target, i, target[i] || 0, value[i], 0, 0, 0, 0, 0, 1);
    }
  }
}, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap; //to prevent the core plugins from being dropped via aggressive tree shaking, we must include them in the variable declaration in this way.

Tween.version = Timeline.version = gsap.version = "3.11.0";
_coreReady = 1;
_windowExists() && _wake();
var Power0 = _easeMap.Power0,
    Power1 = _easeMap.Power1,
    Power2 = _easeMap.Power2,
    Power3 = _easeMap.Power3,
    Power4 = _easeMap.Power4,
    Linear = _easeMap.Linear,
    Quad = _easeMap.Quad,
    Cubic = _easeMap.Cubic,
    Quart = _easeMap.Quart,
    Quint = _easeMap.Quint,
    Strong = _easeMap.Strong,
    Elastic = _easeMap.Elastic,
    Back = _easeMap.Back,
    SteppedEase = _easeMap.SteppedEase,
    Bounce = _easeMap.Bounce,
    Sine = _easeMap.Sine,
    Expo = _easeMap.Expo,
    Circ = _easeMap.Circ;

 //export some internal methods/orojects for use in CSSPlugin so that we can externalize that file and allow custom builds that exclude it.



/***/ }),

/***/ "./node_modules/gsap/index.js":
/*!************************************!*\
  !*** ./node_modules/gsap/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Back": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Back),
/* harmony export */   "Bounce": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Bounce),
/* harmony export */   "CSSPlugin": () => (/* reexport safe */ _CSSPlugin_js__WEBPACK_IMPORTED_MODULE_1__.CSSPlugin),
/* harmony export */   "Circ": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Circ),
/* harmony export */   "Cubic": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Cubic),
/* harmony export */   "Elastic": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Elastic),
/* harmony export */   "Expo": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Expo),
/* harmony export */   "Linear": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Linear),
/* harmony export */   "Power0": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power0),
/* harmony export */   "Power1": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power1),
/* harmony export */   "Power2": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power2),
/* harmony export */   "Power3": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power3),
/* harmony export */   "Power4": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power4),
/* harmony export */   "Quad": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Quad),
/* harmony export */   "Quart": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Quart),
/* harmony export */   "Quint": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Quint),
/* harmony export */   "Sine": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Sine),
/* harmony export */   "SteppedEase": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.SteppedEase),
/* harmony export */   "Strong": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Strong),
/* harmony export */   "TimelineLite": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.TimelineLite),
/* harmony export */   "TimelineMax": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.TimelineMax),
/* harmony export */   "TweenLite": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.TweenLite),
/* harmony export */   "TweenMax": () => (/* binding */ TweenMaxWithCSS),
/* harmony export */   "default": () => (/* binding */ gsapWithCSS),
/* harmony export */   "gsap": () => (/* binding */ gsapWithCSS)
/* harmony export */ });
/* harmony import */ var _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gsap-core.js */ "./node_modules/gsap/gsap-core.js");
/* harmony import */ var _CSSPlugin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CSSPlugin.js */ "./node_modules/gsap/CSSPlugin.js");


var gsapWithCSS = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(_CSSPlugin_js__WEBPACK_IMPORTED_MODULE_1__.CSSPlugin) || _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap,
    // to protect from tree shaking
TweenMaxWithCSS = gsapWithCSS.core.Tween;


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/Arc.ts":
/*!*******************************!*\
  !*** ./src/components/Arc.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Arc": () => (/* binding */ Arc)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.ts");

var Arc = /** @class */ (function () {
    //types
    function Arc(x, y, radius, color, velocity) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity;
    }
    Arc.prototype.draw = function () {
        if (___WEBPACK_IMPORTED_MODULE_0__.ctx) {
            ___WEBPACK_IMPORTED_MODULE_0__.ctx.beginPath();
            ___WEBPACK_IMPORTED_MODULE_0__.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            ___WEBPACK_IMPORTED_MODULE_0__.ctx.fillStyle = this.color;
            ___WEBPACK_IMPORTED_MODULE_0__.ctx.fill();
        }
    };
    Arc.prototype.update = function () {
        if (this.velocity) {
            this.draw();
            this.x = this.x + this.velocity.dx;
            this.y = this.y + this.velocity.dy;
        }
    };
    return Arc;
}());



/***/ }),

/***/ "./src/components/Enemy.ts":
/*!*********************************!*\
  !*** ./src/components/Enemy.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getEnemy)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/utils.ts");
/* harmony import */ var _utils_setRandomLocatioin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/setRandomLocatioin */ "./src/utils/setRandomLocatioin.ts");
/* harmony import */ var _Arc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Arc */ "./src/components/Arc.ts");




function getEnemy() {
    var radius = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.range)(30, 50);
    var color = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.randomColor)();
    var _a = (0,_utils_setRandomLocatioin__WEBPACK_IMPORTED_MODULE_2__["default"])(radius), x = _a.x, y = _a.y;
    var enemy = new _Arc__WEBPACK_IMPORTED_MODULE_3__.Arc(x, y, radius, color, (0,_utils__WEBPACK_IMPORTED_MODULE_1__.velocity)(x, y, ___WEBPACK_IMPORTED_MODULE_0__.Xcenter, ___WEBPACK_IMPORTED_MODULE_0__.Ycenter));
    return enemy;
}


/***/ }),

/***/ "./src/components/Particle.ts":
/*!************************************!*\
  !*** ./src/components/Particle.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getParticle)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.ts");
/* harmony import */ var _Arc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Arc */ "./src/components/Arc.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


function getParticle(_a) {
    var x = _a.x, y = _a.y, color = _a.color;
    var Particle = /** @class */ (function (_super) {
        __extends(Particle, _super);
        function Particle(_a) {
            var x = _a.x, y = _a.y, radius = _a.radius, color = _a.color, velocity = _a.velocity;
            var _this = _super.call(this, x, y, radius, color, velocity) || this;
            _this.alpha = 1;
            return _this;
        }
        Particle.prototype.draw = function () {
            if (___WEBPACK_IMPORTED_MODULE_0__.ctx) {
                ___WEBPACK_IMPORTED_MODULE_0__.ctx.save();
                ___WEBPACK_IMPORTED_MODULE_0__.ctx.globalAlpha = this.alpha;
                ___WEBPACK_IMPORTED_MODULE_0__.ctx.beginPath();
                ___WEBPACK_IMPORTED_MODULE_0__.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                ___WEBPACK_IMPORTED_MODULE_0__.ctx.fillStyle = this.color;
                ___WEBPACK_IMPORTED_MODULE_0__.ctx.fill();
                ___WEBPACK_IMPORTED_MODULE_0__.ctx.restore();
            }
        };
        Particle.prototype.update = function () {
            if (this.velocity) {
                this.draw();
                this.x = this.x + this.velocity.dx;
                this.y = this.y + this.velocity.dy;
                this.alpha -= 0.01;
            }
        };
        return Particle;
    }(_Arc__WEBPACK_IMPORTED_MODULE_1__.Arc));
    var newParticle = new Particle({
        x: x,
        y: y,
        color: color,
        radius: 3,
        velocity: { dx: Math.random() - 0.5, dy: Math.random() - 0.5 },
    });
    return newParticle;
}


/***/ }),

/***/ "./src/components/Player.ts":
/*!**********************************!*\
  !*** ./src/components/Player.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getPlayer)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.ts");
/* harmony import */ var _Arc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Arc */ "./src/components/Arc.ts");


function getPlayer() {
    var player = new _Arc__WEBPACK_IMPORTED_MODULE_1__.Arc(___WEBPACK_IMPORTED_MODULE_0__.Xcenter, ___WEBPACK_IMPORTED_MODULE_0__.Ycenter, 30, "blue");
    return player;
}


/***/ }),

/***/ "./src/components/Projectile.ts":
/*!**************************************!*\
  !*** ./src/components/Projectile.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getProjectile)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.ts");
/* harmony import */ var _Arc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Arc */ "./src/components/Arc.ts");


function getProjectile(dx, dy) {
    var projectile = new _Arc__WEBPACK_IMPORTED_MODULE_1__.Arc(___WEBPACK_IMPORTED_MODULE_0__.Xcenter, ___WEBPACK_IMPORTED_MODULE_0__.Ycenter, 5, "blue", {
        dx: dx * 4,
        dy: dy * 4,
    });
    return projectile;
}


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Xcenter": () => (/* binding */ Xcenter),
/* harmony export */   "Ycenter": () => (/* binding */ Ycenter),
/* harmony export */   "animationId": () => (/* binding */ animationId),
/* harmony export */   "ctx": () => (/* binding */ ctx),
/* harmony export */   "enemies": () => (/* binding */ enemies),
/* harmony export */   "particles": () => (/* binding */ particles),
/* harmony export */   "player": () => (/* binding */ player),
/* harmony export */   "projectiles": () => (/* binding */ projectiles)
/* harmony export */ });
/* harmony import */ var _components_Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Player */ "./src/components/Player.ts");
/* harmony import */ var _components_Projectile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Projectile */ "./src/components/Projectile.ts");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");
/* harmony import */ var _utils_handleEnemies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/handleEnemies */ "./src/utils/handleEnemies.ts");
/* harmony import */ var _utils_handleParticles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/handleParticles */ "./src/utils/handleParticles.ts");
/* harmony import */ var _utils_handleProjectile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/handleProjectile */ "./src/utils/handleProjectile.ts");
/* harmony import */ var _utils_createEnemy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/createEnemy */ "./src/utils/createEnemy.ts");








var body = document.querySelector("body");
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;
body === null || body === void 0 ? void 0 : body.appendChild(canvas);
var Xcenter = canvas.width / 2;
var Ycenter = canvas.height / 2;
var projectiles = [];
var enemies = [];
var particles = [];
var player = (0,_components_Player__WEBPACK_IMPORTED_MODULE_0__["default"])();
var animationId;
function animate() {
    if (!ctx) {
        return console.log("canvase 2d context is not provided from index.ts");
    }
    animationId = requestAnimationFrame(animate);
    //fade-out
    ctx.fillStyle = "rgba(0,0,0,0.1)";
    ctx.fillRect(0, 0, innerWidth, innerHeight);
    player.draw();
    (0,_utils_handleParticles__WEBPACK_IMPORTED_MODULE_5__["default"])();
    (0,_utils_handleProjectile__WEBPACK_IMPORTED_MODULE_6__["default"])();
    (0,_utils_handleEnemies__WEBPACK_IMPORTED_MODULE_4__["default"])();
}
//event handlers
var handleClick = function (event) {
    var clientX = event.clientX, clientY = event.clientY;
    var _a = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.velocity)(Xcenter, Ycenter, clientX, clientY), dx = _a.dx, dy = _a.dy;
    var projectile = (0,_components_Projectile__WEBPACK_IMPORTED_MODULE_1__["default"])(dx, dy);
    projectiles.push(projectile);
};
addEventListener("click", handleClick);
if (ctx) {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, innerWidth, innerHeight);
    player.draw();
    (0,_utils_createEnemy__WEBPACK_IMPORTED_MODULE_7__["default"])();
    animate();
}


/***/ }),

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


/***/ }),

/***/ "./src/utils/createEnemy.ts":
/*!**********************************!*\
  !*** ./src/utils/createEnemy.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.ts");
/* harmony import */ var _components_Enemy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Enemy */ "./src/components/Enemy.ts");


var createEnemy = function () {
    setInterval(function () {
        var enemy = (0,_components_Enemy__WEBPACK_IMPORTED_MODULE_1__["default"])();
        ___WEBPACK_IMPORTED_MODULE_0__.enemies.push(enemy);
    }, 1000);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createEnemy);


/***/ }),

/***/ "./src/utils/createParticles.ts":
/*!**************************************!*\
  !*** ./src/utils/createParticles.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createParticle)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.ts");
/* harmony import */ var _components_Particle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Particle */ "./src/components/Particle.ts");


function createParticle(_a) {
    var enemy = _a.enemy, projectile = _a.projectile;
    for (var i = 0; i < 8; i++) {
        var particle = (0,_components_Particle__WEBPACK_IMPORTED_MODULE_1__["default"])({
            color: enemy.color,
            x: projectile.x,
            y: projectile.y,
        });
        ___WEBPACK_IMPORTED_MODULE_0__.particles.push(particle);
    }
}


/***/ }),

/***/ "./src/utils/handleEnemies.ts":
/*!************************************!*\
  !*** ./src/utils/handleEnemies.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handleEnemies)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/utils.ts");
/* harmony import */ var _createParticles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createParticles */ "./src/utils/createParticles.ts");
/* harmony import */ var _removeEnemyandProjectile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./removeEnemyandProjectile */ "./src/utils/removeEnemyandProjectile.ts");
/* harmony import */ var _reduceEnemySizeandRemoveProjectile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reduceEnemySizeandRemoveProjectile */ "./src/utils/reduceEnemySizeandRemoveProjectile.ts");





function handleEnemies() {
    var minRadius = 10;
    ___WEBPACK_IMPORTED_MODULE_0__.enemies.forEach(function (enemy, enemyIndex) {
        enemy.update();
        if ((0,_utils__WEBPACK_IMPORTED_MODULE_1__.isTouched)(enemy, ___WEBPACK_IMPORTED_MODULE_0__.player)) {
            cancelAnimationFrame(___WEBPACK_IMPORTED_MODULE_0__.animationId);
        }
        ___WEBPACK_IMPORTED_MODULE_0__.projectiles.forEach(function (projectile, projectileIndex) {
            if ((0,_utils__WEBPACK_IMPORTED_MODULE_1__.isTouched)(enemy, projectile)) {
                (0,_createParticles__WEBPACK_IMPORTED_MODULE_2__["default"])({ enemy: enemy, projectile: projectile });
                if (enemy.radius - 10 > minRadius) {
                    (0,_reduceEnemySizeandRemoveProjectile__WEBPACK_IMPORTED_MODULE_4__["default"])({ enemy: enemy, projectileIndex: projectileIndex });
                    return;
                }
                else {
                    (0,_removeEnemyandProjectile__WEBPACK_IMPORTED_MODULE_3__["default"])({ enemyIndex: enemyIndex, projectileIndex: projectileIndex });
                    return;
                }
            }
        });
    });
}


/***/ }),

/***/ "./src/utils/handleParticles.ts":
/*!**************************************!*\
  !*** ./src/utils/handleParticles.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handleParticles)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.ts");

function handleParticles() {
    ___WEBPACK_IMPORTED_MODULE_0__.particles.forEach(function (particle) { return particle.update(); });
}


/***/ }),

/***/ "./src/utils/handleProjectile.ts":
/*!***************************************!*\
  !*** ./src/utils/handleProjectile.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handleProjectiles)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/utils.ts");


function handleProjectiles() {
    ___WEBPACK_IMPORTED_MODULE_0__.projectiles.forEach(function (projectile, projectileIndex) {
        projectile.update();
        if ((0,_utils__WEBPACK_IMPORTED_MODULE_1__.isProjectileOut)(projectile)) {
            setTimeout(function () {
                ___WEBPACK_IMPORTED_MODULE_0__.projectiles.splice(projectileIndex, 1);
            }, 0);
        }
    });
}


/***/ }),

/***/ "./src/utils/reduceEnemySizeandRemoveProjectile.ts":
/*!*********************************************************!*\
  !*** ./src/utils/reduceEnemySizeandRemoveProjectile.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ reduceEnemySizeAndRemoveProjectile)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.ts");


function reduceEnemySizeAndRemoveProjectile(_a) {
    var enemy = _a.enemy, projectileIndex = _a.projectileIndex;
    gsap__WEBPACK_IMPORTED_MODULE_1__["default"].to(enemy, {
        radius: enemy.radius - 10,
    });
    enemy.radius -= 10;
    setTimeout(function () {
        ___WEBPACK_IMPORTED_MODULE_0__.projectiles.splice(projectileIndex, 1);
    }, 0);
}


/***/ }),

/***/ "./src/utils/removeEnemyandProjectile.ts":
/*!***********************************************!*\
  !*** ./src/utils/removeEnemyandProjectile.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ removeProjectileAndEnemy)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.ts");

function removeProjectileAndEnemy(_a) {
    var enemyIndex = _a.enemyIndex, projectileIndex = _a.projectileIndex;
    setTimeout(function () {
        ___WEBPACK_IMPORTED_MODULE_0__.enemies.splice(enemyIndex, 1);
        ___WEBPACK_IMPORTED_MODULE_0__.projectiles.splice(projectileIndex, 1);
    }, 0);
}


/***/ }),

/***/ "./src/utils/setRandomLocatioin.ts":
/*!*****************************************!*\
  !*** ./src/utils/setRandomLocatioin.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setRandomLocation)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.ts");

function setRandomLocation(radius) {
    var x, y;
    if (Math.random() < 0.5) {
        x = Math.random() < 0.5 ? -radius : innerWidth + radius;
        y = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.range)(0, innerHeight);
    }
    else {
        x = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.range)(0, innerWidth);
        y = Math.random() < 0.5 ? -radius : innerHeight + radius;
    }
    return { x: x, y: y };
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.ts"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsZ0RBQWdELGNBQWMsR0FBRyxTQUFTLGdGQUFnRixVQUFVLCtCQUErQixjQUFjLEdBQUcscUJBQXFCO0FBQ3pPO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBRXdCOztBQUV4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLDJGQUEyRjtBQUNsRzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYyxrQkFBa0I7QUFDaEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsMEpBQTBKOztBQUUxSixpREFBaUQ7QUFDakQsQ0FBQztBQUNEO0FBQ0E7QUFDQSx3T0FBd087QUFDeE8sQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsY0FBYyxrQkFBa0IsWUFBWTs7QUFFekY7QUFDQSxpQkFBaUIsOERBQW1CO0FBQ3BDO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7O0FBRXJDO0FBQ0EsTUFBTTtBQUNOLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBLCtCQUErQjtBQUMvQixJQUFJO0FBQ0o7QUFDQTs7QUFFQSw4SEFBOEg7O0FBRTlIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxlQUFlLG9EQUFTO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcscURBQU07QUFDakI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsd0VBQXdFLHVEQUFZO0FBQ3BGLFdBQVcscURBQU07QUFDakIsSUFBSTtBQUNKO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWMsd0RBQVM7QUFDdkIsbUJBQW1CLHVEQUFZO0FBQy9CO0FBQ0E7QUFDQTs7QUFFQSxTQUFTLHFEQUFNO0FBQ2YsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBLHNJQUFzSSwyREFBWSx3REFBd0Q7QUFDMU07QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLDhEQUE4RDtBQUM5RDtBQUNBOztBQUVBLGVBQWUsb0RBQVMscUNBQXFDLCtEQUFvQjtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7O0FBRWY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxFQUFFLGlFQUFrQixLQUFLOzs7QUFHekI7QUFDQTtBQUNBLDRCQUE0QiwwREFBZTtBQUMzQyx3QkFBd0IsMERBQWU7O0FBRXZDO0FBQ0Esb0JBQW9CLCtEQUFvQjtBQUN4QztBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsNkRBQWM7QUFDaEU7QUFDQTtBQUNBLGdCQUFnQixvRUFBeUI7O0FBRXpDO0FBQ0E7QUFDQSwrQkFBK0Isd0RBQWE7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7OztBQUdWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVFQUF1RTtBQUN2RSxJQUFJO0FBQ0o7QUFDQTs7QUFFQSxFQUFFLHVEQUFZLHFCQUFxQjs7QUFFbkMsaUJBQWlCOztBQUVqQjtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG9DQUFvQzs7O0FBR3BDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLG9EQUFTO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QixZQUFZLHlRQUF5UTtBQUNyUixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEMsNkJBQTZCO0FBQzdCO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7O0FBRUEsMkZBQTJGLGtEQUFPLE1BQU0saURBQU07QUFDOUcsQ0FBQztBQUNEO0FBQ0EsOEJBQThCLHdEQUFTO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBEQUEwRDs7QUFFMUQ7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0I7O0FBRXRCOztBQUVBLHVDQUF1Qzs7QUFFdkM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDs7QUFFbEQ7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esa0NBQWtDLGtEQUFPOztBQUV6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx5R0FBeUc7O0FBRXpHO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQjs7QUFFbkIsbUJBQW1COztBQUVuQixtQkFBbUI7O0FBRW5CLG1CQUFtQjs7QUFFbkI7QUFDQSx5QkFBeUI7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDs7QUFFdkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFROztBQUVSLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQzs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFROzs7QUFHUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7O0FBR1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWUscURBQU07QUFDckIsZUFBZSxxREFBTTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHFEQUFNO0FBQ3ZCLGlCQUFpQixxREFBTTtBQUN2QixtQkFBbUIscURBQU07QUFDekIsb0JBQW9CLHFEQUFNO0FBQzFCLG9CQUFvQixxREFBTTtBQUMxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLDBEQUFlO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxhQUFhLHNEQUFPO0FBQ3BCLFNBQVMscURBQU07QUFDZixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RUFBOEU7OztBQUc5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVLHFEQUFNO0FBQ2hCLFVBQVUscURBQU07QUFDaEIsVUFBVSxxREFBTTtBQUNoQixVQUFVLHFEQUFNO0FBQ2hCLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVMscURBQU07QUFDZixTQUFTLHFEQUFNO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUyxxREFBTTtBQUNmLFNBQVMscURBQU07QUFDZjs7QUFFQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JELENBQUM7QUFDRDtBQUNBO0FBQ0EsaUJBQWlCLHdEQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBLHdCQUF3QixvREFBUztBQUNqQztBQUNBOztBQUVBOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0Isc0RBQU87QUFDekIsZ0JBQWdCLHNEQUFPO0FBQ3ZCO0FBQ0E7QUFDQSx1QkFBdUIsb0RBQVM7QUFDaEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7O0FBR0gsMkRBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDOztBQUVNO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQzs7QUFFbkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFVBQVUsbURBQVEsT0FBTywyREFBWTtBQUNyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQiw2REFBYztBQUNqQzs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLFFBQVEsOERBQW1COztBQUUzQixhQUFhLHlEQUFjO0FBQzNCO0FBQ0Esc0JBQXNCLHNEQUFPO0FBQzdCLG9CQUFvQixzREFBTztBQUMzQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxVQUFVLHdEQUFTLGdFQUFnRSw2REFBYztBQUNqRyxVQUFVLHNEQUFPLG9DQUFvQyx3REFBYSxPQUFPLHNEQUFPLDBCQUEwQiwyREFBMkQsU0FBUzs7QUFFOUssaUZBQWlGO0FBQ2pGLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtREFBbUQ7O0FBRW5EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJHQUEyRyxrQ0FBa0MsNkJBQTZCOztBQUUxSztBQUNBLGdEQUFnRCxvREFBUyw4RUFBOEU7O0FBRXZJLHdDQUF3QztBQUN4Qzs7QUFFQTtBQUNBLDJCQUEyQixvREFBUyxzREFBc0QsNkRBQWM7QUFDeEc7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0EsZ0VBQWdFOztBQUVoRTtBQUNBO0FBQ0EsY0FBYztBQUNkLGlFQUFpRTs7QUFFakU7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBLFlBQVk7QUFDWix5RUFBeUUsNkRBQWM7O0FBRXZGO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0M7O0FBRWxDLG9CQUFvQixzREFBTyxvQkFBb0Isd0RBQWEsR0FBRyx3REFBYTtBQUM1RTtBQUNBLHlCQUF5QixvREFBUyx3RUFBd0UsNkRBQWM7QUFDeEg7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osWUFBWSw2REFBYzs7QUFFMUI7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQix3RUFBeUI7QUFDNUMsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhQQUE4UCxxR0FBcUcsMkRBQVksdUZBQXVGLHlEQUFVO0FBQ2hkLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQXNCO0FBQ3RCLGtFQUF1Qjs7QUFFdkI7QUFDQSxZQUFZLDJEQUFZO0FBQ3hCO0FBQ0EsR0FBRzs7QUFFSCxFQUFFLDJEQUFZO0FBQ2QsSUFBSSx3REFBYTtBQUNqQjtBQUNBLEdBQUc7O0FBRUg7O0FBRUEsRUFBRSwyREFBWTtBQUNkO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRCwyREFBWTtBQUNaLEVBQUUsd0RBQWE7QUFDZixDQUFDOztBQUVELDhEQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxL0NuQix3Q0FBd0MsdUJBQXVCLHlGQUF5Rjs7QUFFeEosZ0RBQWdELDBEQUEwRCwyQ0FBMkM7O0FBRXJKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsNkZBQTZGO0FBQzdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNELHVCQUF1QjtBQUN2QjtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBLGlCQUFpQjtBQUNqQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQ0FBMkM7QUFDM0M7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSwrSkFBK0o7QUFDL0o7QUFDQTs7QUFFQSxTQUFTLDJDQUEyQzs7QUFFcEQ7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLDJJQUEySTtBQUMzSTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBLGVBQWU7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQSxtREFBbUQ7QUFDbkQsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1EQUFtRDs7QUFFbkQ7QUFDQTtBQUNBOztBQUVBLGlDQUFpQztBQUNqQztBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsaUVBQWlFOztBQUVqRTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlFQUFpRTs7QUFFakUsc0VBQXNFOztBQUV0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkVBQTZFO0FBQzdFOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNELDRHQUE0RyxHQUFHLHVFQUF1RTtBQUN0TCxzSkFBc0osbURBQW1EO0FBQ3pNO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsT0FBTztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RDs7QUFFNUQ7QUFDQTs7QUFFQTtBQUNBLDBGQUEwRjtBQUMxRjtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsK0RBQStEOztBQUUvRDtBQUNBOztBQUVBLGtFQUFrRTtBQUNsRTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0EsMkVBQTJFLGFBQWE7QUFDeEY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBLGtCQUFrQixPQUFPO0FBQ3pCLGlFQUFpRTtBQUNqRTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOLDhDQUE4QztBQUM5Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkRBQTJEOztBQUUzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0Esd0RBQXdELDZFQUE2RSw0REFBNEQ7O0FBRWpNO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyRkFBMkY7OztBQUczRix5RkFBeUY7OztBQUd6Rjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsZ0dBQWdHO0FBQ2hHOztBQUVBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxvSUFBb0ksdUJBQXVCLGdEQUFnRDtBQUMzTTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBLG9FQUFvRSxJQUFJLEVBQUUsSUFBSTtBQUM5RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RDs7QUFFOUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUNBQW1DOztBQUVuQztBQUNBLG1CQUFtQix3QkFBd0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUZBQXFGOztBQUVyRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsaURBQWlEOztBQUVqRDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUTs7QUFFUjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDRCQUE0Qiw4RUFBOEU7QUFDcEksY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVMsT0FBTztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJGQUEyRjtBQUMzRixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBSTs7QUFFSixrQkFBa0I7O0FBRWxCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxvRUFBb0U7QUFDcEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUMsMkJBQTJCO0FBQzNCOztBQUVBLHlEQUF5RDtBQUN6RDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esd01BQXdNO0FBQ3hNOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDBHQUEwRztBQUMxRyxzR0FBc0c7QUFDdEc7QUFDQTs7QUFFQTtBQUNBLGdFQUFnRTs7QUFFaEU7O0FBRUEsbUJBQW1COzs7QUFHbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNkVBQTZFOztBQUU3RSxrQ0FBa0M7QUFDbEMsUUFBUTtBQUNSOztBQUVBLDhCQUE4Qjs7QUFFOUIsK01BQStNO0FBQy9NO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBDQUEwQzs7QUFFMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrRUFBa0U7QUFDbEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRGQUE0Rjs7QUFFNUY7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlDQUF5Qzs7QUFFekM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscURBQXFEOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsZ0dBQWdHOztBQUVoRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCOztBQUUvQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjs7QUFFM0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxZQUFZOzs7QUFHWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOEJBQThCOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixxREFBcUQsNk5BQTZOLE9BQU8sV0FBVyxLQUFLO0FBQy9UOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQ7O0FBRTFEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLHFDQUFxQzs7QUFFckM7QUFDQSw2REFBNkQ7O0FBRTdEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvRkFBb0Y7O0FBRXBGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUM7O0FBRW5DOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5SEFBeUg7O0FBRXpIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBLDBFQUEwRTtBQUMxRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdFQUFnRTtBQUNoRTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCOztBQUU1QiwrQ0FBK0M7O0FBRS9DOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEI7O0FBRTFCO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVE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O0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtEQUErRDs7QUFFL0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEdBQUc7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSw2R0FBNkc7O0FBRTdHO0FBQ0E7O0FBRUEsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZOztBQUVaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7O0FBR0k7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHVDQUF1Qzs7QUFFdkM7QUFDQTtBQUNBLHNCQUFzQjs7QUFFdEI7QUFDQTs7QUFFQTtBQUNBLENBQUMsSUFBSTs7QUFFTDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEOztBQUVyRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjs7QUFFbEI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssR0FBRzs7QUFFUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTyxHQUFHOztBQUVWO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSwyRUFBMkUsZUFBZTtBQUMxRjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHdEQUF3RDs7QUFFeEQsdUNBQXVDO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUEsb0RBQW9ELDBFQUEwRTtBQUM5SDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUMsR0FBRztBQUNIO0FBQ0EsMENBQTBDO0FBQzFDLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDZEQUE2RDtBQUM3RDs7QUFFQTtBQUNBO0FBQ0EsZ0dBQWdHO0FBQ2hHO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsZ0JBQWdCOztBQUVoQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztB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QzNCLGdCQUFnQixpREFBUztBQUN6QixnQkFBZ0IsNERBQWMsR0FBRyxzQ0FBc0M7QUFDdkU7QUFDQSxvQkFBb0IsK0VBQWtDLEdBQUcsZ0RBQWdEO0FBQ3pHO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixxRUFBd0IsR0FBRywwREFBMEQ7QUFDekc7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7OztBQzFCK0I7QUFDaEI7QUFDZixJQUFJLGdEQUFpQix1QkFBdUIsMkJBQTJCO0FBQ3ZFOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0hpQztBQUNVO0FBQzVCO0FBQ2YsSUFBSSxrREFBbUI7QUFDdkI7QUFDQSxZQUFZLHVEQUFlO0FBQzNCO0FBQ0EsZ0JBQWdCLGlEQUFrQjtBQUNsQyxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWHdCO0FBQ1M7QUFDbEI7QUFDZjtBQUNBLElBQUksK0NBQU87QUFDWDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsUUFBUSxpREFBa0I7QUFDMUIsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7O0FDWDBDO0FBQzNCO0FBQ2Y7QUFDQTtBQUNBLFFBQVEsNkNBQWM7QUFDdEIsUUFBUSxpREFBa0I7QUFDMUIsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7O0FDUGlDO0FBQ2xCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsWUFBWSw2Q0FBSztBQUNqQjtBQUNBO0FBQ0EsWUFBWSw2Q0FBSztBQUNqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FudmFzLWdhbWUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2NhbnZhcy1nYW1lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9jYW52YXMtZ2FtZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2NhbnZhcy1nYW1lLy4vbm9kZV9tb2R1bGVzL2dzYXAvQ1NTUGx1Z2luLmpzIiwid2VicGFjazovL2NhbnZhcy1nYW1lLy4vbm9kZV9tb2R1bGVzL2dzYXAvZ3NhcC1jb3JlLmpzIiwid2VicGFjazovL2NhbnZhcy1nYW1lLy4vbm9kZV9tb2R1bGVzL2dzYXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2FudmFzLWdhbWUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vY2FudmFzLWdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vY2FudmFzLWdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2NhbnZhcy1nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2NhbnZhcy1nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2NhbnZhcy1nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vY2FudmFzLWdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9jYW52YXMtZ2FtZS8uL3NyYy9jb21wb25lbnRzL0FyYy50cyIsIndlYnBhY2s6Ly9jYW52YXMtZ2FtZS8uL3NyYy9jb21wb25lbnRzL0VuZW15LnRzIiwid2VicGFjazovL2NhbnZhcy1nYW1lLy4vc3JjL2NvbXBvbmVudHMvUGFydGljbGUudHMiLCJ3ZWJwYWNrOi8vY2FudmFzLWdhbWUvLi9zcmMvY29tcG9uZW50cy9QbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vY2FudmFzLWdhbWUvLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0aWxlLnRzIiwid2VicGFjazovL2NhbnZhcy1nYW1lLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2NhbnZhcy1nYW1lLy4vc3JjL3V0aWxzLnRzIiwid2VicGFjazovL2NhbnZhcy1nYW1lLy4vc3JjL3V0aWxzL2NyZWF0ZUVuZW15LnRzIiwid2VicGFjazovL2NhbnZhcy1nYW1lLy4vc3JjL3V0aWxzL2NyZWF0ZVBhcnRpY2xlcy50cyIsIndlYnBhY2s6Ly9jYW52YXMtZ2FtZS8uL3NyYy91dGlscy9oYW5kbGVFbmVtaWVzLnRzIiwid2VicGFjazovL2NhbnZhcy1nYW1lLy4vc3JjL3V0aWxzL2hhbmRsZVBhcnRpY2xlcy50cyIsIndlYnBhY2s6Ly9jYW52YXMtZ2FtZS8uL3NyYy91dGlscy9oYW5kbGVQcm9qZWN0aWxlLnRzIiwid2VicGFjazovL2NhbnZhcy1nYW1lLy4vc3JjL3V0aWxzL3JlZHVjZUVuZW15U2l6ZWFuZFJlbW92ZVByb2plY3RpbGUudHMiLCJ3ZWJwYWNrOi8vY2FudmFzLWdhbWUvLi9zcmMvdXRpbHMvcmVtb3ZlRW5lbXlhbmRQcm9qZWN0aWxlLnRzIiwid2VicGFjazovL2NhbnZhcy1nYW1lLy4vc3JjL3V0aWxzL3NldFJhbmRvbUxvY2F0aW9pbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztBQUNYXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLyohXG4gKiBDU1NQbHVnaW4gMy4xMS4wXG4gKiBodHRwczovL2dyZWVuc29jay5jb21cbiAqXG4gKiBDb3B5cmlnaHQgMjAwOC0yMDIyLCBHcmVlblNvY2suIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBTdWJqZWN0IHRvIHRoZSB0ZXJtcyBhdCBodHRwczovL2dyZWVuc29jay5jb20vc3RhbmRhcmQtbGljZW5zZSBvciBmb3JcbiAqIENsdWIgR3JlZW5Tb2NrIG1lbWJlcnMsIHRoZSBhZ3JlZW1lbnQgaXNzdWVkIHdpdGggdGhhdCBtZW1iZXJzaGlwLlxuICogQGF1dGhvcjogSmFjayBEb3lsZSwgamFja0BncmVlbnNvY2suY29tXG4qL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuaW1wb3J0IHsgZ3NhcCwgX2dldFByb3BlcnR5LCBfbnVtRXhwLCBfbnVtV2l0aFVuaXRFeHAsIGdldFVuaXQsIF9pc1N0cmluZywgX2lzVW5kZWZpbmVkLCBfcmVuZGVyQ29tcGxleFN0cmluZywgX3JlbEV4cCwgX2ZvckVhY2hOYW1lLCBfc29ydFByb3BUd2VlbnNCeVByaW9yaXR5LCBfY29sb3JTdHJpbmdGaWx0ZXIsIF9jaGVja1BsdWdpbiwgX3JlcGxhY2VSYW5kb20sIF9wbHVnaW5zLCBHU0NhY2hlLCBQcm9wVHdlZW4sIF9jb25maWcsIF90aWNrZXIsIF9yb3VuZCwgX21pc3NpbmdQbHVnaW4sIF9nZXRTZXR0ZXIsIF9nZXRDYWNoZSwgX2NvbG9yRXhwLCBfcGFyc2VSZWxhdGl2ZSwgX3NldERlZmF1bHRzLCBfcmVtb3ZlTGlua2VkTGlzdEl0ZW0gLy9mb3IgdGhlIGNvbW1lbnRlZC1vdXQgY2xhc3NOYW1lIGZlYXR1cmUuXG59IGZyb20gXCIuL2dzYXAtY29yZS5qc1wiO1xuXG52YXIgX3dpbixcbiAgICBfZG9jLFxuICAgIF9kb2NFbGVtZW50LFxuICAgIF9wbHVnaW5Jbml0dGVkLFxuICAgIF90ZW1wRGl2LFxuICAgIF90ZW1wRGl2U3R5bGVyLFxuICAgIF9yZWNlbnRTZXR0ZXJQbHVnaW4sXG4gICAgX3JldmVydGluZyxcbiAgICBfd2luZG93RXhpc3RzID0gZnVuY3Rpb24gX3dpbmRvd0V4aXN0cygpIHtcbiAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCI7XG59LFxuICAgIF90cmFuc2Zvcm1Qcm9wcyA9IHt9LFxuICAgIF9SQUQyREVHID0gMTgwIC8gTWF0aC5QSSxcbiAgICBfREVHMlJBRCA9IE1hdGguUEkgLyAxODAsXG4gICAgX2F0YW4yID0gTWF0aC5hdGFuMixcbiAgICBfYmlnTnVtID0gMWU4LFxuICAgIF9jYXBzRXhwID0gLyhbQS1aXSkvZyxcbiAgICBfaG9yaXpvbnRhbEV4cCA9IC8obGVmdHxyaWdodHx3aWR0aHxtYXJnaW58cGFkZGluZ3x4KS9pLFxuICAgIF9jb21wbGV4RXhwID0gL1tcXHMsXFwoXVxcUy8sXG4gICAgX3Byb3BlcnR5QWxpYXNlcyA9IHtcbiAgYXV0b0FscGhhOiBcIm9wYWNpdHksdmlzaWJpbGl0eVwiLFxuICBzY2FsZTogXCJzY2FsZVgsc2NhbGVZXCIsXG4gIGFscGhhOiBcIm9wYWNpdHlcIlxufSxcbiAgICBfcmVuZGVyQ1NTUHJvcCA9IGZ1bmN0aW9uIF9yZW5kZXJDU1NQcm9wKHJhdGlvLCBkYXRhKSB7XG4gIHJldHVybiBkYXRhLnNldChkYXRhLnQsIGRhdGEucCwgTWF0aC5yb3VuZCgoZGF0YS5zICsgZGF0YS5jICogcmF0aW8pICogMTAwMDApIC8gMTAwMDAgKyBkYXRhLnUsIGRhdGEpO1xufSxcbiAgICBfcmVuZGVyUHJvcFdpdGhFbmQgPSBmdW5jdGlvbiBfcmVuZGVyUHJvcFdpdGhFbmQocmF0aW8sIGRhdGEpIHtcbiAgcmV0dXJuIGRhdGEuc2V0KGRhdGEudCwgZGF0YS5wLCByYXRpbyA9PT0gMSA/IGRhdGEuZSA6IE1hdGgucm91bmQoKGRhdGEucyArIGRhdGEuYyAqIHJhdGlvKSAqIDEwMDAwKSAvIDEwMDAwICsgZGF0YS51LCBkYXRhKTtcbn0sXG4gICAgX3JlbmRlckNTU1Byb3BXaXRoQmVnaW5uaW5nID0gZnVuY3Rpb24gX3JlbmRlckNTU1Byb3BXaXRoQmVnaW5uaW5nKHJhdGlvLCBkYXRhKSB7XG4gIHJldHVybiBkYXRhLnNldChkYXRhLnQsIGRhdGEucCwgcmF0aW8gPyBNYXRoLnJvdW5kKChkYXRhLnMgKyBkYXRhLmMgKiByYXRpbykgKiAxMDAwMCkgLyAxMDAwMCArIGRhdGEudSA6IGRhdGEuYiwgZGF0YSk7XG59LFxuICAgIC8vaWYgdW5pdHMgY2hhbmdlLCB3ZSBuZWVkIGEgd2F5IHRvIHJlbmRlciB0aGUgb3JpZ2luYWwgdW5pdC92YWx1ZSB3aGVuIHRoZSB0d2VlbiBnb2VzIGFsbCB0aGUgd2F5IGJhY2sgdG8gdGhlIGJlZ2lubmluZyAocmF0aW86MClcbl9yZW5kZXJSb3VuZGVkQ1NTUHJvcCA9IGZ1bmN0aW9uIF9yZW5kZXJSb3VuZGVkQ1NTUHJvcChyYXRpbywgZGF0YSkge1xuICB2YXIgdmFsdWUgPSBkYXRhLnMgKyBkYXRhLmMgKiByYXRpbztcbiAgZGF0YS5zZXQoZGF0YS50LCBkYXRhLnAsIH5+KHZhbHVlICsgKHZhbHVlIDwgMCA/IC0uNSA6IC41KSkgKyBkYXRhLnUsIGRhdGEpO1xufSxcbiAgICBfcmVuZGVyTm9uVHdlZW5pbmdWYWx1ZSA9IGZ1bmN0aW9uIF9yZW5kZXJOb25Ud2VlbmluZ1ZhbHVlKHJhdGlvLCBkYXRhKSB7XG4gIHJldHVybiBkYXRhLnNldChkYXRhLnQsIGRhdGEucCwgcmF0aW8gPyBkYXRhLmUgOiBkYXRhLmIsIGRhdGEpO1xufSxcbiAgICBfcmVuZGVyTm9uVHdlZW5pbmdWYWx1ZU9ubHlBdEVuZCA9IGZ1bmN0aW9uIF9yZW5kZXJOb25Ud2VlbmluZ1ZhbHVlT25seUF0RW5kKHJhdGlvLCBkYXRhKSB7XG4gIHJldHVybiBkYXRhLnNldChkYXRhLnQsIGRhdGEucCwgcmF0aW8gIT09IDEgPyBkYXRhLmIgOiBkYXRhLmUsIGRhdGEpO1xufSxcbiAgICBfc2V0dGVyQ1NTU3R5bGUgPSBmdW5jdGlvbiBfc2V0dGVyQ1NTU3R5bGUodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgcmV0dXJuIHRhcmdldC5zdHlsZVtwcm9wZXJ0eV0gPSB2YWx1ZTtcbn0sXG4gICAgX3NldHRlckNTU1Byb3AgPSBmdW5jdGlvbiBfc2V0dGVyQ1NTUHJvcCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSkge1xuICByZXR1cm4gdGFyZ2V0LnN0eWxlLnNldFByb3BlcnR5KHByb3BlcnR5LCB2YWx1ZSk7XG59LFxuICAgIF9zZXR0ZXJUcmFuc2Zvcm0gPSBmdW5jdGlvbiBfc2V0dGVyVHJhbnNmb3JtKHRhcmdldCwgcHJvcGVydHksIHZhbHVlKSB7XG4gIHJldHVybiB0YXJnZXQuX2dzYXBbcHJvcGVydHldID0gdmFsdWU7XG59LFxuICAgIF9zZXR0ZXJTY2FsZSA9IGZ1bmN0aW9uIF9zZXR0ZXJTY2FsZSh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSkge1xuICByZXR1cm4gdGFyZ2V0Ll9nc2FwLnNjYWxlWCA9IHRhcmdldC5fZ3NhcC5zY2FsZVkgPSB2YWx1ZTtcbn0sXG4gICAgX3NldHRlclNjYWxlV2l0aFJlbmRlciA9IGZ1bmN0aW9uIF9zZXR0ZXJTY2FsZVdpdGhSZW5kZXIodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIGRhdGEsIHJhdGlvKSB7XG4gIHZhciBjYWNoZSA9IHRhcmdldC5fZ3NhcDtcbiAgY2FjaGUuc2NhbGVYID0gY2FjaGUuc2NhbGVZID0gdmFsdWU7XG4gIGNhY2hlLnJlbmRlclRyYW5zZm9ybShyYXRpbywgY2FjaGUpO1xufSxcbiAgICBfc2V0dGVyVHJhbnNmb3JtV2l0aFJlbmRlciA9IGZ1bmN0aW9uIF9zZXR0ZXJUcmFuc2Zvcm1XaXRoUmVuZGVyKHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCBkYXRhLCByYXRpbykge1xuICB2YXIgY2FjaGUgPSB0YXJnZXQuX2dzYXA7XG4gIGNhY2hlW3Byb3BlcnR5XSA9IHZhbHVlO1xuICBjYWNoZS5yZW5kZXJUcmFuc2Zvcm0ocmF0aW8sIGNhY2hlKTtcbn0sXG4gICAgX3RyYW5zZm9ybVByb3AgPSBcInRyYW5zZm9ybVwiLFxuICAgIF90cmFuc2Zvcm1PcmlnaW5Qcm9wID0gX3RyYW5zZm9ybVByb3AgKyBcIk9yaWdpblwiLFxuICAgIF9zYXZlU3R5bGUgPSBmdW5jdGlvbiBfc2F2ZVN0eWxlKHByb3BlcnR5KSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgdmFyIHRhcmdldCA9IHRoaXMudGFyZ2V0LFxuICAgICAgc3R5bGUgPSB0YXJnZXQuc3R5bGU7XG5cbiAgaWYgKHByb3BlcnR5IGluIF90cmFuc2Zvcm1Qcm9wcykge1xuICAgIHRoaXMudGZtID0gdGhpcy50Zm0gfHwge307XG5cbiAgICBpZiAocHJvcGVydHkgIT09IFwidHJhbnNmb3JtXCIpIHtcbiAgICAgIHByb3BlcnR5ID0gX3Byb3BlcnR5QWxpYXNlc1twcm9wZXJ0eV0gfHwgcHJvcGVydHk7XG4gICAgICB+cHJvcGVydHkuaW5kZXhPZihcIixcIikgPyBwcm9wZXJ0eS5zcGxpdChcIixcIikuZm9yRWFjaChmdW5jdGlvbiAoYSkge1xuICAgICAgICByZXR1cm4gX3RoaXMudGZtW2FdID0gX2dldCh0YXJnZXQsIGEpO1xuICAgICAgfSkgOiB0aGlzLnRmbVtwcm9wZXJ0eV0gPSB0YXJnZXQuX2dzYXAueCA/IHRhcmdldC5fZ3NhcFtwcm9wZXJ0eV0gOiBfZ2V0KHRhcmdldCwgcHJvcGVydHkpOyAvLyBub3RlOiBzY2FsZSB3b3VsZCBtYXAgdG8gXCJzY2FsZVgsc2NhbGVZXCIsIHRodXMgd2UgbG9vcCBhbmQgYXBwbHkgdGhlbSBib3RoLlxuICAgIH1cblxuICAgIHRhcmdldC5fZ3NhcC5zdmcgJiYgKHRoaXMuc3ZnID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShwcm9wZXJ0eSkgfHwgXCJcIik7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5pbmRleE9mKF90cmFuc2Zvcm1Qcm9wKSA+PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcHJvcGVydHkgPSBfdHJhbnNmb3JtUHJvcDtcbiAgfVxuXG4gIHN0eWxlICYmIHRoaXMucHJvcHMucHVzaChwcm9wZXJ0eSwgc3R5bGVbcHJvcGVydHldKTtcbn0sXG4gICAgX3JlbW92ZUluZGVwZW5kZW50VHJhbnNmb3JtcyA9IGZ1bmN0aW9uIF9yZW1vdmVJbmRlcGVuZGVudFRyYW5zZm9ybXMoc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnRyYW5zbGF0ZSkge1xuICAgIHN0eWxlLnJlbW92ZVByb3BlcnR5KFwidHJhbnNsYXRlXCIpO1xuICAgIHN0eWxlLnJlbW92ZVByb3BlcnR5KFwic2NhbGVcIik7XG4gICAgc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJyb3RhdGVcIik7XG4gIH1cbn0sXG4gICAgX3JldmVydFN0eWxlID0gZnVuY3Rpb24gX3JldmVydFN0eWxlKCkge1xuICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgdGFyZ2V0ID0gdGhpcy50YXJnZXQsXG4gICAgICBzdHlsZSA9IHRhcmdldC5zdHlsZSxcbiAgICAgIGNhY2hlID0gdGFyZ2V0Ll9nc2FwLFxuICAgICAgaSxcbiAgICAgIHA7XG5cbiAgZm9yIChpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgcHJvcHNbaSArIDFdID8gc3R5bGVbcHJvcHNbaV1dID0gcHJvcHNbaSArIDFdIDogc3R5bGUucmVtb3ZlUHJvcGVydHkocHJvcHNbaV0ucmVwbGFjZShfY2Fwc0V4cCwgXCItJDFcIikudG9Mb3dlckNhc2UoKSk7XG4gIH1cblxuICBpZiAodGhpcy50Zm0pIHtcbiAgICBjYWNoZS5zdmcgJiYgdGFyZ2V0LnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCB0aGlzLnN2ZyB8fCBcIlwiKTtcblxuICAgIGZvciAocCBpbiB0aGlzLnRmbSkge1xuICAgICAgY2FjaGVbcF0gPSB0aGlzLnRmbVtwXTtcbiAgICB9XG5cbiAgICBpID0gX3JldmVydGluZygpO1xuXG4gICAgaWYgKGkgJiYgIWkuaXNTdGFydCAmJiAhc3R5bGVbX3RyYW5zZm9ybVByb3BdKSB7XG4gICAgICBfcmVtb3ZlSW5kZXBlbmRlbnRUcmFuc2Zvcm1zKHN0eWxlKTtcblxuICAgICAgY2FjaGUudW5jYWNoZSA9IDE7IC8vIGlmIGl0J3MgYSBzdGFydEF0IHRoYXQncyBiZWluZyByZXZlcnRlZCBpbiB0aGUgX2luaXRUd2VlbigpIG9mIHRoZSBjb3JlLCB3ZSBkb24ndCBuZWVkIHRvIHVuY2FjaGUgdHJhbnNmb3Jtcy4gVGhpcyBpcyBwdXJlbHkgYSBwZXJmb3JtYW5jZSBvcHRpbWl6YXRpb24uXG4gICAgfVxuICB9XG59LFxuICAgIF9nZXRTdHlsZVNhdmVyID0gZnVuY3Rpb24gX2dldFN0eWxlU2F2ZXIodGFyZ2V0LCBwcm9wZXJ0aWVzKSB7XG4gIHZhciBzYXZlciA9IHtcbiAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICBwcm9wczogW10sXG4gICAgcmV2ZXJ0OiBfcmV2ZXJ0U3R5bGUsXG4gICAgc2F2ZTogX3NhdmVTdHlsZVxuICB9O1xuICBwcm9wZXJ0aWVzICYmIHByb3BlcnRpZXMuc3BsaXQoXCIsXCIpLmZvckVhY2goZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gc2F2ZXIuc2F2ZShwKTtcbiAgfSk7XG4gIHJldHVybiBzYXZlcjtcbn0sXG4gICAgX3N1cHBvcnRzM0QsXG4gICAgX2NyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbiBfY3JlYXRlRWxlbWVudCh0eXBlLCBucykge1xuICB2YXIgZSA9IF9kb2MuY3JlYXRlRWxlbWVudE5TID8gX2RvYy5jcmVhdGVFbGVtZW50TlMoKG5zIHx8IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiKS5yZXBsYWNlKC9eaHR0cHMvLCBcImh0dHBcIiksIHR5cGUpIDogX2RvYy5jcmVhdGVFbGVtZW50KHR5cGUpOyAvL3NvbWUgc2VydmVycyBzd2FwIGluIGh0dHBzIGZvciBodHRwIGluIHRoZSBuYW1lc3BhY2Ugd2hpY2ggY2FuIGJyZWFrIHRoaW5ncywgbWFraW5nIFwic3R5bGVcIiBpbmFjY2Vzc2libGUuXG5cbiAgcmV0dXJuIGUuc3R5bGUgPyBlIDogX2RvYy5jcmVhdGVFbGVtZW50KHR5cGUpOyAvL3NvbWUgZW52aXJvbm1lbnRzIHdvbid0IGFsbG93IGFjY2VzcyB0byB0aGUgZWxlbWVudCdzIHN0eWxlIHdoZW4gY3JlYXRlZCB3aXRoIGEgbmFtZXNwYWNlIGluIHdoaWNoIGNhc2Ugd2UgZGVmYXVsdCB0byB0aGUgc3RhbmRhcmQgY3JlYXRlRWxlbWVudCgpIHRvIHdvcmsgYXJvdW5kIHRoZSBpc3N1ZS4gQWxzbyBub3RlIHRoYXQgd2hlbiBHU0FQIGlzIGVtYmVkZGVkIGRpcmVjdGx5IGluc2lkZSBhbiBTVkcgZmlsZSwgY3JlYXRlRWxlbWVudCgpIHdvbid0IGFsbG93IGFjY2VzcyB0byB0aGUgc3R5bGUgb2JqZWN0IGluIEZpcmVmb3ggKHNlZSBodHRwczovL2dyZWVuc29jay5jb20vZm9ydW1zL3RvcGljLzIwMjE1LXByb2JsZW0tdXNpbmctdHdlZW5tYXgtaW4tc3RhbmRhbG9uZS1zZWxmLWNvbnRhaW5pbmctc3ZnLWZpbGUtZXJyLWNhbm5vdC1zZXQtcHJvcGVydHktY3NzdGV4dC1vZi11bmRlZmluZWQvKS5cbn0sXG4gICAgX2dldENvbXB1dGVkUHJvcGVydHkgPSBmdW5jdGlvbiBfZ2V0Q29tcHV0ZWRQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5LCBza2lwUHJlZml4RmFsbGJhY2spIHtcbiAgdmFyIGNzID0gZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXQpO1xuICByZXR1cm4gY3NbcHJvcGVydHldIHx8IGNzLmdldFByb3BlcnR5VmFsdWUocHJvcGVydHkucmVwbGFjZShfY2Fwc0V4cCwgXCItJDFcIikudG9Mb3dlckNhc2UoKSkgfHwgY3MuZ2V0UHJvcGVydHlWYWx1ZShwcm9wZXJ0eSkgfHwgIXNraXBQcmVmaXhGYWxsYmFjayAmJiBfZ2V0Q29tcHV0ZWRQcm9wZXJ0eSh0YXJnZXQsIF9jaGVja1Byb3BQcmVmaXgocHJvcGVydHkpIHx8IHByb3BlcnR5LCAxKSB8fCBcIlwiOyAvL2NzcyB2YXJpYWJsZXMgbWF5IG5vdCBuZWVkIGNhcHMgc3dhcHBlZCBvdXQgZm9yIGRhc2hlcyBhbmQgbG93ZXJjYXNlLlxufSxcbiAgICBfcHJlZml4ZXMgPSBcIk8sTW96LG1zLE1zLFdlYmtpdFwiLnNwbGl0KFwiLFwiKSxcbiAgICBfY2hlY2tQcm9wUHJlZml4ID0gZnVuY3Rpb24gX2NoZWNrUHJvcFByZWZpeChwcm9wZXJ0eSwgZWxlbWVudCwgcHJlZmVyUHJlZml4KSB7XG4gIHZhciBlID0gZWxlbWVudCB8fCBfdGVtcERpdixcbiAgICAgIHMgPSBlLnN0eWxlLFxuICAgICAgaSA9IDU7XG5cbiAgaWYgKHByb3BlcnR5IGluIHMgJiYgIXByZWZlclByZWZpeCkge1xuICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgfVxuXG4gIHByb3BlcnR5ID0gcHJvcGVydHkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwcm9wZXJ0eS5zdWJzdHIoMSk7XG5cbiAgd2hpbGUgKGktLSAmJiAhKF9wcmVmaXhlc1tpXSArIHByb3BlcnR5IGluIHMpKSB7fVxuXG4gIHJldHVybiBpIDwgMCA/IG51bGwgOiAoaSA9PT0gMyA/IFwibXNcIiA6IGkgPj0gMCA/IF9wcmVmaXhlc1tpXSA6IFwiXCIpICsgcHJvcGVydHk7XG59LFxuICAgIF9pbml0Q29yZSA9IGZ1bmN0aW9uIF9pbml0Q29yZSgpIHtcbiAgaWYgKF93aW5kb3dFeGlzdHMoKSAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICBfd2luID0gd2luZG93O1xuICAgIF9kb2MgPSBfd2luLmRvY3VtZW50O1xuICAgIF9kb2NFbGVtZW50ID0gX2RvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgX3RlbXBEaXYgPSBfY3JlYXRlRWxlbWVudChcImRpdlwiKSB8fCB7XG4gICAgICBzdHlsZToge31cbiAgICB9O1xuICAgIF90ZW1wRGl2U3R5bGVyID0gX2NyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgX3RyYW5zZm9ybVByb3AgPSBfY2hlY2tQcm9wUHJlZml4KF90cmFuc2Zvcm1Qcm9wKTtcbiAgICBfdHJhbnNmb3JtT3JpZ2luUHJvcCA9IF90cmFuc2Zvcm1Qcm9wICsgXCJPcmlnaW5cIjtcbiAgICBfdGVtcERpdi5zdHlsZS5jc3NUZXh0ID0gXCJib3JkZXItd2lkdGg6MDtsaW5lLWhlaWdodDowO3Bvc2l0aW9uOmFic29sdXRlO3BhZGRpbmc6MFwiOyAvL21ha2Ugc3VyZSB0byBvdmVycmlkZSBjZXJ0YWluIHByb3BlcnRpZXMgdGhhdCBtYXkgY29udGFtaW5hdGUgbWVhc3VyZW1lbnRzLCBpbiBjYXNlIHRoZSB1c2VyIGhhcyBvdmVycmVhY2hpbmcgc3R5bGUgc2hlZXRzLlxuXG4gICAgX3N1cHBvcnRzM0QgPSAhIV9jaGVja1Byb3BQcmVmaXgoXCJwZXJzcGVjdGl2ZVwiKTtcbiAgICBfcmV2ZXJ0aW5nID0gZ3NhcC5jb3JlLnJldmVydGluZztcbiAgICBfcGx1Z2luSW5pdHRlZCA9IDE7XG4gIH1cbn0sXG4gICAgX2dldEJCb3hIYWNrID0gZnVuY3Rpb24gX2dldEJCb3hIYWNrKHN3YXBJZlBvc3NpYmxlKSB7XG4gIC8vd29ya3MgYXJvdW5kIGlzc3VlcyBpbiBzb21lIGJyb3dzZXJzIChsaWtlIEZpcmVmb3gpIHRoYXQgZG9uJ3QgY29ycmVjdGx5IHJlcG9ydCBnZXRCQm94KCkgb24gU1ZHIGVsZW1lbnRzIGluc2lkZSBhIDxkZWZzPiBlbGVtZW50IGFuZC9vciA8bWFzaz4uIFdlIHRyeSBjcmVhdGluZyBhbiBTVkcsIGFkZGluZyBpdCB0byB0aGUgZG9jdW1lbnRFbGVtZW50IGFuZCB0b3NzIHRoZSBlbGVtZW50IGluIHRoZXJlIHNvIHRoYXQgaXQncyBkZWZpbml0ZWx5IHBhcnQgb2YgdGhlIHJlbmRlcmluZyB0cmVlLCB0aGVuIGdyYWIgdGhlIGJib3ggYW5kIGlmIGl0IHdvcmtzLCB3ZSBhY3R1YWxseSBzd2FwIG91dCB0aGUgb3JpZ2luYWwgZ2V0QkJveCgpIG1ldGhvZCBmb3Igb3VyIG93biB0aGF0IGRvZXMgdGhlc2UgZXh0cmEgc3RlcHMgd2hlbmV2ZXIgZ2V0QkJveCBpcyBuZWVkZWQuIFRoaXMgaGVscHMgZW5zdXJlIHRoYXQgcGVyZm9ybWFuY2UgaXMgb3B0aW1hbCAob25seSBkbyBhbGwgdGhlc2UgZXh0cmEgc3RlcHMgd2hlbiBhYnNvbHV0ZWx5IG5lY2Vzc2FyeS4uLm1vc3QgZWxlbWVudHMgZG9uJ3QgbmVlZCBpdCkuXG4gIHZhciBzdmcgPSBfY3JlYXRlRWxlbWVudChcInN2Z1wiLCB0aGlzLm93bmVyU1ZHRWxlbWVudCAmJiB0aGlzLm93bmVyU1ZHRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJ4bWxuc1wiKSB8fCBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIpLFxuICAgICAgb2xkUGFyZW50ID0gdGhpcy5wYXJlbnROb2RlLFxuICAgICAgb2xkU2libGluZyA9IHRoaXMubmV4dFNpYmxpbmcsXG4gICAgICBvbGRDU1MgPSB0aGlzLnN0eWxlLmNzc1RleHQsXG4gICAgICBiYm94O1xuXG4gIF9kb2NFbGVtZW50LmFwcGVuZENoaWxkKHN2Zyk7XG5cbiAgc3ZnLmFwcGVuZENoaWxkKHRoaXMpO1xuICB0aGlzLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbiAgaWYgKHN3YXBJZlBvc3NpYmxlKSB7XG4gICAgdHJ5IHtcbiAgICAgIGJib3ggPSB0aGlzLmdldEJCb3goKTtcbiAgICAgIHRoaXMuX2dzYXBCQm94ID0gdGhpcy5nZXRCQm94OyAvL3N0b3JlIHRoZSBvcmlnaW5hbFxuXG4gICAgICB0aGlzLmdldEJCb3ggPSBfZ2V0QkJveEhhY2s7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfSBlbHNlIGlmICh0aGlzLl9nc2FwQkJveCkge1xuICAgIGJib3ggPSB0aGlzLl9nc2FwQkJveCgpO1xuICB9XG5cbiAgaWYgKG9sZFBhcmVudCkge1xuICAgIGlmIChvbGRTaWJsaW5nKSB7XG4gICAgICBvbGRQYXJlbnQuaW5zZXJ0QmVmb3JlKHRoaXMsIG9sZFNpYmxpbmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvbGRQYXJlbnQuYXBwZW5kQ2hpbGQodGhpcyk7XG4gICAgfVxuICB9XG5cbiAgX2RvY0VsZW1lbnQucmVtb3ZlQ2hpbGQoc3ZnKTtcblxuICB0aGlzLnN0eWxlLmNzc1RleHQgPSBvbGRDU1M7XG4gIHJldHVybiBiYm94O1xufSxcbiAgICBfZ2V0QXR0cmlidXRlRmFsbGJhY2tzID0gZnVuY3Rpb24gX2dldEF0dHJpYnV0ZUZhbGxiYWNrcyh0YXJnZXQsIGF0dHJpYnV0ZXNBcnJheSkge1xuICB2YXIgaSA9IGF0dHJpYnV0ZXNBcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKGktLSkge1xuICAgIGlmICh0YXJnZXQuaGFzQXR0cmlidXRlKGF0dHJpYnV0ZXNBcnJheVtpXSkpIHtcbiAgICAgIHJldHVybiB0YXJnZXQuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZXNBcnJheVtpXSk7XG4gICAgfVxuICB9XG59LFxuICAgIF9nZXRCQm94ID0gZnVuY3Rpb24gX2dldEJCb3godGFyZ2V0KSB7XG4gIHZhciBib3VuZHM7XG5cbiAgdHJ5IHtcbiAgICBib3VuZHMgPSB0YXJnZXQuZ2V0QkJveCgpOyAvL0ZpcmVmb3ggdGhyb3dzIGVycm9ycyBpZiB5b3UgdHJ5IGNhbGxpbmcgZ2V0QkJveCgpIG9uIGFuIFNWRyBlbGVtZW50IHRoYXQncyBub3QgcmVuZGVyZWQgKGxpa2UgaW4gYSA8c3ltYm9sPiBvciA8ZGVmcz4pLiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD02MTIxMThcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBib3VuZHMgPSBfZ2V0QkJveEhhY2suY2FsbCh0YXJnZXQsIHRydWUpO1xuICB9XG5cbiAgYm91bmRzICYmIChib3VuZHMud2lkdGggfHwgYm91bmRzLmhlaWdodCkgfHwgdGFyZ2V0LmdldEJCb3ggPT09IF9nZXRCQm94SGFjayB8fCAoYm91bmRzID0gX2dldEJCb3hIYWNrLmNhbGwodGFyZ2V0LCB0cnVlKSk7IC8vc29tZSBicm93c2VycyAobGlrZSBGaXJlZm94KSBtaXNyZXBvcnQgdGhlIGJvdW5kcyBpZiB0aGUgZWxlbWVudCBoYXMgemVybyB3aWR0aCBhbmQgaGVpZ2h0IChpdCBqdXN0IGFzc3VtZXMgaXQncyBhdCB4OjAsIHk6MCksIHRodXMgd2UgbmVlZCB0byBtYW51YWxseSBncmFiIHRoZSBwb3NpdGlvbiBpbiB0aGF0IGNhc2UuXG5cbiAgcmV0dXJuIGJvdW5kcyAmJiAhYm91bmRzLndpZHRoICYmICFib3VuZHMueCAmJiAhYm91bmRzLnkgPyB7XG4gICAgeDogK19nZXRBdHRyaWJ1dGVGYWxsYmFja3ModGFyZ2V0LCBbXCJ4XCIsIFwiY3hcIiwgXCJ4MVwiXSkgfHwgMCxcbiAgICB5OiArX2dldEF0dHJpYnV0ZUZhbGxiYWNrcyh0YXJnZXQsIFtcInlcIiwgXCJjeVwiLCBcInkxXCJdKSB8fCAwLFxuICAgIHdpZHRoOiAwLFxuICAgIGhlaWdodDogMFxuICB9IDogYm91bmRzO1xufSxcbiAgICBfaXNTVkcgPSBmdW5jdGlvbiBfaXNTVkcoZSkge1xuICByZXR1cm4gISEoZS5nZXRDVE0gJiYgKCFlLnBhcmVudE5vZGUgfHwgZS5vd25lclNWR0VsZW1lbnQpICYmIF9nZXRCQm94KGUpKTtcbn0sXG4gICAgLy9yZXBvcnRzIGlmIHRoZSBlbGVtZW50IGlzIGFuIFNWRyBvbiB3aGljaCBnZXRCQm94KCkgYWN0dWFsbHkgd29ya3Ncbl9yZW1vdmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIF9yZW1vdmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5KSB7XG4gIGlmIChwcm9wZXJ0eSkge1xuICAgIHZhciBzdHlsZSA9IHRhcmdldC5zdHlsZTtcblxuICAgIGlmIChwcm9wZXJ0eSBpbiBfdHJhbnNmb3JtUHJvcHMgJiYgcHJvcGVydHkgIT09IF90cmFuc2Zvcm1PcmlnaW5Qcm9wKSB7XG4gICAgICBwcm9wZXJ0eSA9IF90cmFuc2Zvcm1Qcm9wO1xuICAgIH1cblxuICAgIGlmIChzdHlsZS5yZW1vdmVQcm9wZXJ0eSkge1xuICAgICAgaWYgKHByb3BlcnR5LnN1YnN0cigwLCAyKSA9PT0gXCJtc1wiIHx8IHByb3BlcnR5LnN1YnN0cigwLCA2KSA9PT0gXCJ3ZWJraXRcIikge1xuICAgICAgICAvL01pY3Jvc29mdCBhbmQgc29tZSBXZWJraXQgYnJvd3NlcnMgZG9uJ3QgY29uZm9ybSB0byB0aGUgc3RhbmRhcmQgb2YgY2FwaXRhbGl6aW5nIHRoZSBmaXJzdCBwcmVmaXggY2hhcmFjdGVyLCBzbyB3ZSBhZGp1c3Qgc28gdGhhdCB3aGVuIHdlIHByZWZpeCB0aGUgY2FwcyB3aXRoIGEgZGFzaCwgaXQncyBjb3JyZWN0IChvdGhlcndpc2UgaXQnZCBiZSBcIm1zLXRyYW5zZm9ybVwiIGluc3RlYWQgb2YgXCItbXMtdHJhbnNmb3JtXCIgZm9yIElFOSwgZm9yIGV4YW1wbGUpXG4gICAgICAgIHByb3BlcnR5ID0gXCItXCIgKyBwcm9wZXJ0eTtcbiAgICAgIH1cblxuICAgICAgc3R5bGUucmVtb3ZlUHJvcGVydHkocHJvcGVydHkucmVwbGFjZShfY2Fwc0V4cCwgXCItJDFcIikudG9Mb3dlckNhc2UoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vbm90ZTogb2xkIHZlcnNpb25zIG9mIElFIHVzZSBcInJlbW92ZUF0dHJpYnV0ZSgpXCIgaW5zdGVhZCBvZiBcInJlbW92ZVByb3BlcnR5KClcIlxuICAgICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKHByb3BlcnR5KTtcbiAgICB9XG4gIH1cbn0sXG4gICAgX2FkZE5vblR3ZWVuaW5nUFQgPSBmdW5jdGlvbiBfYWRkTm9uVHdlZW5pbmdQVChwbHVnaW4sIHRhcmdldCwgcHJvcGVydHksIGJlZ2lubmluZywgZW5kLCBvbmx5U2V0QXRFbmQpIHtcbiAgdmFyIHB0ID0gbmV3IFByb3BUd2VlbihwbHVnaW4uX3B0LCB0YXJnZXQsIHByb3BlcnR5LCAwLCAxLCBvbmx5U2V0QXRFbmQgPyBfcmVuZGVyTm9uVHdlZW5pbmdWYWx1ZU9ubHlBdEVuZCA6IF9yZW5kZXJOb25Ud2VlbmluZ1ZhbHVlKTtcbiAgcGx1Z2luLl9wdCA9IHB0O1xuICBwdC5iID0gYmVnaW5uaW5nO1xuICBwdC5lID0gZW5kO1xuXG4gIHBsdWdpbi5fcHJvcHMucHVzaChwcm9wZXJ0eSk7XG5cbiAgcmV0dXJuIHB0O1xufSxcbiAgICBfbm9uQ29udmVydGlibGVVbml0cyA9IHtcbiAgZGVnOiAxLFxuICByYWQ6IDEsXG4gIHR1cm46IDFcbn0sXG4gICAgX25vblN0YW5kYXJkTGF5b3V0cyA9IHtcbiAgZ3JpZDogMSxcbiAgZmxleDogMVxufSxcbiAgICAvL3Rha2VzIGEgc2luZ2xlIHZhbHVlIGxpa2UgMjBweCBhbmQgY29udmVydHMgaXQgdG8gdGhlIHVuaXQgc3BlY2lmaWVkLCBsaWtlIFwiJVwiLCByZXR1cm5pbmcgb25seSB0aGUgbnVtZXJpYyBhbW91bnQuXG5fY29udmVydFRvVW5pdCA9IGZ1bmN0aW9uIF9jb252ZXJ0VG9Vbml0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCB1bml0KSB7XG4gIHZhciBjdXJWYWx1ZSA9IHBhcnNlRmxvYXQodmFsdWUpIHx8IDAsXG4gICAgICBjdXJVbml0ID0gKHZhbHVlICsgXCJcIikudHJpbSgpLnN1YnN0cigoY3VyVmFsdWUgKyBcIlwiKS5sZW5ndGgpIHx8IFwicHhcIixcbiAgICAgIC8vIHNvbWUgYnJvd3NlcnMgbGVhdmUgZXh0cmEgd2hpdGVzcGFjZSBhdCB0aGUgYmVnaW5uaW5nIG9mIENTUyB2YXJpYWJsZXMsIGhlbmNlIHRoZSBuZWVkIHRvIHRyaW0oKVxuICBzdHlsZSA9IF90ZW1wRGl2LnN0eWxlLFxuICAgICAgaG9yaXpvbnRhbCA9IF9ob3Jpem9udGFsRXhwLnRlc3QocHJvcGVydHkpLFxuICAgICAgaXNSb290U1ZHID0gdGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJzdmdcIixcbiAgICAgIG1lYXN1cmVQcm9wZXJ0eSA9IChpc1Jvb3RTVkcgPyBcImNsaWVudFwiIDogXCJvZmZzZXRcIikgKyAoaG9yaXpvbnRhbCA/IFwiV2lkdGhcIiA6IFwiSGVpZ2h0XCIpLFxuICAgICAgYW1vdW50ID0gMTAwLFxuICAgICAgdG9QaXhlbHMgPSB1bml0ID09PSBcInB4XCIsXG4gICAgICB0b1BlcmNlbnQgPSB1bml0ID09PSBcIiVcIixcbiAgICAgIHB4LFxuICAgICAgcGFyZW50LFxuICAgICAgY2FjaGUsXG4gICAgICBpc1NWRztcblxuICBpZiAodW5pdCA9PT0gY3VyVW5pdCB8fCAhY3VyVmFsdWUgfHwgX25vbkNvbnZlcnRpYmxlVW5pdHNbdW5pdF0gfHwgX25vbkNvbnZlcnRpYmxlVW5pdHNbY3VyVW5pdF0pIHtcbiAgICByZXR1cm4gY3VyVmFsdWU7XG4gIH1cblxuICBjdXJVbml0ICE9PSBcInB4XCIgJiYgIXRvUGl4ZWxzICYmIChjdXJWYWx1ZSA9IF9jb252ZXJ0VG9Vbml0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCBcInB4XCIpKTtcbiAgaXNTVkcgPSB0YXJnZXQuZ2V0Q1RNICYmIF9pc1NWRyh0YXJnZXQpO1xuXG4gIGlmICgodG9QZXJjZW50IHx8IGN1clVuaXQgPT09IFwiJVwiKSAmJiAoX3RyYW5zZm9ybVByb3BzW3Byb3BlcnR5XSB8fCB+cHJvcGVydHkuaW5kZXhPZihcImFkaXVzXCIpKSkge1xuICAgIHB4ID0gaXNTVkcgPyB0YXJnZXQuZ2V0QkJveCgpW2hvcml6b250YWwgPyBcIndpZHRoXCIgOiBcImhlaWdodFwiXSA6IHRhcmdldFttZWFzdXJlUHJvcGVydHldO1xuICAgIHJldHVybiBfcm91bmQodG9QZXJjZW50ID8gY3VyVmFsdWUgLyBweCAqIGFtb3VudCA6IGN1clZhbHVlIC8gMTAwICogcHgpO1xuICB9XG5cbiAgc3R5bGVbaG9yaXpvbnRhbCA/IFwid2lkdGhcIiA6IFwiaGVpZ2h0XCJdID0gYW1vdW50ICsgKHRvUGl4ZWxzID8gY3VyVW5pdCA6IHVuaXQpO1xuICBwYXJlbnQgPSB+cHJvcGVydHkuaW5kZXhPZihcImFkaXVzXCIpIHx8IHVuaXQgPT09IFwiZW1cIiAmJiB0YXJnZXQuYXBwZW5kQ2hpbGQgJiYgIWlzUm9vdFNWRyA/IHRhcmdldCA6IHRhcmdldC5wYXJlbnROb2RlO1xuXG4gIGlmIChpc1NWRykge1xuICAgIHBhcmVudCA9ICh0YXJnZXQub3duZXJTVkdFbGVtZW50IHx8IHt9KS5wYXJlbnROb2RlO1xuICB9XG5cbiAgaWYgKCFwYXJlbnQgfHwgcGFyZW50ID09PSBfZG9jIHx8ICFwYXJlbnQuYXBwZW5kQ2hpbGQpIHtcbiAgICBwYXJlbnQgPSBfZG9jLmJvZHk7XG4gIH1cblxuICBjYWNoZSA9IHBhcmVudC5fZ3NhcDtcblxuICBpZiAoY2FjaGUgJiYgdG9QZXJjZW50ICYmIGNhY2hlLndpZHRoICYmIGhvcml6b250YWwgJiYgY2FjaGUudGltZSA9PT0gX3RpY2tlci50aW1lICYmICFjYWNoZS51bmNhY2hlKSB7XG4gICAgcmV0dXJuIF9yb3VuZChjdXJWYWx1ZSAvIGNhY2hlLndpZHRoICogYW1vdW50KTtcbiAgfSBlbHNlIHtcbiAgICAodG9QZXJjZW50IHx8IGN1clVuaXQgPT09IFwiJVwiKSAmJiAhX25vblN0YW5kYXJkTGF5b3V0c1tfZ2V0Q29tcHV0ZWRQcm9wZXJ0eShwYXJlbnQsIFwiZGlzcGxheVwiKV0gJiYgKHN0eWxlLnBvc2l0aW9uID0gX2dldENvbXB1dGVkUHJvcGVydHkodGFyZ2V0LCBcInBvc2l0aW9uXCIpKTtcbiAgICBwYXJlbnQgPT09IHRhcmdldCAmJiAoc3R5bGUucG9zaXRpb24gPSBcInN0YXRpY1wiKTsgLy8gbGlrZSBmb3IgYm9yZGVyUmFkaXVzLCBpZiBpdCdzIGEgJSB3ZSBtdXN0IGhhdmUgaXQgcmVsYXRpdmUgdG8gdGhlIHRhcmdldCBpdHNlbGYgYnV0IHRoYXQgbWF5IG5vdCBoYXZlIHBvc2l0aW9uOiByZWxhdGl2ZSBvciBwb3NpdGlvbjogYWJzb2x1dGUgaW4gd2hpY2ggY2FzZSBpdCdkIGdvIHVwIHRoZSBjaGFpbiB1bnRpbCBpdCBmaW5kcyBpdHMgb2Zmc2V0UGFyZW50IChiYWQpLiBwb3NpdGlvbjogc3RhdGljIHByb3RlY3RzIGFnYWluc3QgdGhhdC5cblxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChfdGVtcERpdik7XG4gICAgcHggPSBfdGVtcERpdlttZWFzdXJlUHJvcGVydHldO1xuICAgIHBhcmVudC5yZW1vdmVDaGlsZChfdGVtcERpdik7XG4gICAgc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG5cbiAgICBpZiAoaG9yaXpvbnRhbCAmJiB0b1BlcmNlbnQpIHtcbiAgICAgIGNhY2hlID0gX2dldENhY2hlKHBhcmVudCk7XG4gICAgICBjYWNoZS50aW1lID0gX3RpY2tlci50aW1lO1xuICAgICAgY2FjaGUud2lkdGggPSBwYXJlbnRbbWVhc3VyZVByb3BlcnR5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX3JvdW5kKHRvUGl4ZWxzID8gcHggKiBjdXJWYWx1ZSAvIGFtb3VudCA6IHB4ICYmIGN1clZhbHVlID8gYW1vdW50IC8gcHggKiBjdXJWYWx1ZSA6IDApO1xufSxcbiAgICBfZ2V0ID0gZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCB1bml0LCB1bmNhY2hlKSB7XG4gIHZhciB2YWx1ZTtcbiAgX3BsdWdpbkluaXR0ZWQgfHwgX2luaXRDb3JlKCk7XG5cbiAgaWYgKHByb3BlcnR5IGluIF9wcm9wZXJ0eUFsaWFzZXMgJiYgcHJvcGVydHkgIT09IFwidHJhbnNmb3JtXCIpIHtcbiAgICBwcm9wZXJ0eSA9IF9wcm9wZXJ0eUFsaWFzZXNbcHJvcGVydHldO1xuXG4gICAgaWYgKH5wcm9wZXJ0eS5pbmRleE9mKFwiLFwiKSkge1xuICAgICAgcHJvcGVydHkgPSBwcm9wZXJ0eS5zcGxpdChcIixcIilbMF07XG4gICAgfVxuICB9XG5cbiAgaWYgKF90cmFuc2Zvcm1Qcm9wc1twcm9wZXJ0eV0gJiYgcHJvcGVydHkgIT09IFwidHJhbnNmb3JtXCIpIHtcbiAgICB2YWx1ZSA9IF9wYXJzZVRyYW5zZm9ybSh0YXJnZXQsIHVuY2FjaGUpO1xuICAgIHZhbHVlID0gcHJvcGVydHkgIT09IFwidHJhbnNmb3JtT3JpZ2luXCIgPyB2YWx1ZVtwcm9wZXJ0eV0gOiB2YWx1ZS5zdmcgPyB2YWx1ZS5vcmlnaW4gOiBfZmlyc3RUd29Pbmx5KF9nZXRDb21wdXRlZFByb3BlcnR5KHRhcmdldCwgX3RyYW5zZm9ybU9yaWdpblByb3ApKSArIFwiIFwiICsgdmFsdWUuek9yaWdpbiArIFwicHhcIjtcbiAgfSBlbHNlIHtcbiAgICB2YWx1ZSA9IHRhcmdldC5zdHlsZVtwcm9wZXJ0eV07XG5cbiAgICBpZiAoIXZhbHVlIHx8IHZhbHVlID09PSBcImF1dG9cIiB8fCB1bmNhY2hlIHx8IH4odmFsdWUgKyBcIlwiKS5pbmRleE9mKFwiY2FsYyhcIikpIHtcbiAgICAgIHZhbHVlID0gX3NwZWNpYWxQcm9wc1twcm9wZXJ0eV0gJiYgX3NwZWNpYWxQcm9wc1twcm9wZXJ0eV0odGFyZ2V0LCBwcm9wZXJ0eSwgdW5pdCkgfHwgX2dldENvbXB1dGVkUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eSkgfHwgX2dldFByb3BlcnR5KHRhcmdldCwgcHJvcGVydHkpIHx8IChwcm9wZXJ0eSA9PT0gXCJvcGFjaXR5XCIgPyAxIDogMCk7IC8vIG5vdGU6IHNvbWUgYnJvd3NlcnMsIGxpa2UgRmlyZWZveCwgZG9uJ3QgcmVwb3J0IGJvcmRlclJhZGl1cyBjb3JyZWN0bHkhIEluc3RlYWQsIGl0IG9ubHkgcmVwb3J0cyBldmVyeSBjb3JuZXIgbGlrZSAgYm9yZGVyVG9wTGVmdFJhZGl1c1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bml0ICYmICF+KHZhbHVlICsgXCJcIikudHJpbSgpLmluZGV4T2YoXCIgXCIpID8gX2NvbnZlcnRUb1VuaXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHVuaXQpICsgdW5pdCA6IHZhbHVlO1xufSxcbiAgICBfdHdlZW5Db21wbGV4Q1NTU3RyaW5nID0gZnVuY3Rpb24gX3R3ZWVuQ29tcGxleENTU1N0cmluZyh0YXJnZXQsIHByb3AsIHN0YXJ0LCBlbmQpIHtcbiAgLy8gbm90ZTogd2UgY2FsbCBfdHdlZW5Db21wbGV4Q1NTU3RyaW5nLmNhbGwocGx1Z2luSW5zdGFuY2UuLi4pIHRvIGVuc3VyZSB0aGF0IGl0J3Mgc2NvcGVkIHByb3Blcmx5LiBXZSBtYXkgY2FsbCBpdCBmcm9tIHdpdGhpbiBhIHBsdWdpbiB0b28sIHRodXMgXCJ0aGlzXCIgd291bGQgcmVmZXIgdG8gdGhlIHBsdWdpbi5cbiAgaWYgKCFzdGFydCB8fCBzdGFydCA9PT0gXCJub25lXCIpIHtcbiAgICAvLyBzb21lIGJyb3dzZXJzIGxpa2UgU2FmYXJpIGFjdHVhbGx5IFBSRUZFUiB0aGUgcHJlZml4ZWQgcHJvcGVydHkgYW5kIG1pcy1yZXBvcnQgdGhlIHVucHJlZml4ZWQgdmFsdWUgbGlrZSBjbGlwUGF0aCAoQlVHKS4gSW4gb3RoZXIgd29yZHMsIGV2ZW4gdGhvdWdoIGNsaXBQYXRoIGV4aXN0cyBpbiB0aGUgc3R5bGUgKFwiY2xpcFBhdGhcIiBpbiB0YXJnZXQuc3R5bGUpIGFuZCBpdCdzIHNldCBpbiB0aGUgQ1NTIHByb3Blcmx5IChhbG9uZyB3aXRoIC13ZWJraXQtY2xpcC1wYXRoKSwgU2FmYXJpIHJlcG9ydHMgY2xpcFBhdGggYXMgXCJub25lXCIgd2hlcmVhcyBXZWJraXRDbGlwUGF0aCByZXBvcnRzIGFjY3VyYXRlbHkgbGlrZSBcImVsbGlwc2UoMTAwJSAwJSBhdCA1MCUgMCUpXCIsIHNvIGluIHRoaXMgY2FzZSB3ZSBtdXN0IFNXSVRDSCB0byB1c2luZyB0aGUgcHJlZml4ZWQgcHJvcGVydHkgaW5zdGVhZC4gU2VlIGh0dHBzOi8vZ3JlZW5zb2NrLmNvbS9mb3J1bXMvdG9waWMvMTgzMTAtY2xpcHBhdGgtZG9lc250LXdvcmstb24taW9zL1xuICAgIHZhciBwID0gX2NoZWNrUHJvcFByZWZpeChwcm9wLCB0YXJnZXQsIDEpLFxuICAgICAgICBzID0gcCAmJiBfZ2V0Q29tcHV0ZWRQcm9wZXJ0eSh0YXJnZXQsIHAsIDEpO1xuXG4gICAgaWYgKHMgJiYgcyAhPT0gc3RhcnQpIHtcbiAgICAgIHByb3AgPSBwO1xuICAgICAgc3RhcnQgPSBzO1xuICAgIH0gZWxzZSBpZiAocHJvcCA9PT0gXCJib3JkZXJDb2xvclwiKSB7XG4gICAgICBzdGFydCA9IF9nZXRDb21wdXRlZFByb3BlcnR5KHRhcmdldCwgXCJib3JkZXJUb3BDb2xvclwiKTsgLy8gRmlyZWZveCBidWc6IGFsd2F5cyByZXBvcnRzIFwiYm9yZGVyQ29sb3JcIiBhcyBcIlwiLCBzbyB3ZSBtdXN0IGZhbGwgYmFjayB0byBib3JkZXJUb3BDb2xvci4gU2VlIGh0dHBzOi8vZ3JlZW5zb2NrLmNvbS9mb3J1bXMvdG9waWMvMjQ1ODMtaG93LXRvLXJldHVybi1jb2xvcnMtdGhhdC1pLWhhZC1hZnRlci1yZXZlcnNlL1xuICAgIH1cbiAgfVxuXG4gIHZhciBwdCA9IG5ldyBQcm9wVHdlZW4odGhpcy5fcHQsIHRhcmdldC5zdHlsZSwgcHJvcCwgMCwgMSwgX3JlbmRlckNvbXBsZXhTdHJpbmcpLFxuICAgICAgaW5kZXggPSAwLFxuICAgICAgbWF0Y2hJbmRleCA9IDAsXG4gICAgICBhLFxuICAgICAgcmVzdWx0LFxuICAgICAgc3RhcnRWYWx1ZXMsXG4gICAgICBzdGFydE51bSxcbiAgICAgIGNvbG9yLFxuICAgICAgc3RhcnRWYWx1ZSxcbiAgICAgIGVuZFZhbHVlLFxuICAgICAgZW5kTnVtLFxuICAgICAgY2h1bmssXG4gICAgICBlbmRVbml0LFxuICAgICAgc3RhcnRVbml0LFxuICAgICAgZW5kVmFsdWVzO1xuICBwdC5iID0gc3RhcnQ7XG4gIHB0LmUgPSBlbmQ7XG4gIHN0YXJ0ICs9IFwiXCI7IC8vIGVuc3VyZSB2YWx1ZXMgYXJlIHN0cmluZ3NcblxuICBlbmQgKz0gXCJcIjtcblxuICBpZiAoZW5kID09PSBcImF1dG9cIikge1xuICAgIHRhcmdldC5zdHlsZVtwcm9wXSA9IGVuZDtcbiAgICBlbmQgPSBfZ2V0Q29tcHV0ZWRQcm9wZXJ0eSh0YXJnZXQsIHByb3ApIHx8IGVuZDtcbiAgICB0YXJnZXQuc3R5bGVbcHJvcF0gPSBzdGFydDtcbiAgfVxuXG4gIGEgPSBbc3RhcnQsIGVuZF07XG5cbiAgX2NvbG9yU3RyaW5nRmlsdGVyKGEpOyAvLyBwYXNzIGFuIGFycmF5IHdpdGggdGhlIHN0YXJ0aW5nIGFuZCBlbmRpbmcgdmFsdWVzIGFuZCBsZXQgdGhlIGZpbHRlciBkbyB3aGF0ZXZlciBpdCBuZWVkcyB0byB0aGUgdmFsdWVzLiBJZiBjb2xvcnMgYXJlIGZvdW5kLCBpdCByZXR1cm5zIHRydWUgYW5kIHRoZW4gd2UgbXVzdCBtYXRjaCB3aGVyZSB0aGUgY29sb3Igc2hvd3MgdXAgb3JkZXItd2lzZSBiZWNhdXNlIGZvciB0aGluZ3MgbGlrZSBib3hTaGFkb3csIHNvbWV0aW1lcyB0aGUgYnJvd3NlciBwcm92aWRlcyB0aGUgY29tcHV0ZWQgdmFsdWVzIHdpdGggdGhlIGNvbG9yIEZJUlNULCBidXQgdGhlIHVzZXIgcHJvdmlkZXMgaXQgd2l0aCB0aGUgY29sb3IgTEFTVCwgc28gZmxpcCB0aGVtIGlmIG5lY2Vzc2FyeS4gU2FtZSBmb3IgZHJvcC1zaGFkb3coKS5cblxuXG4gIHN0YXJ0ID0gYVswXTtcbiAgZW5kID0gYVsxXTtcbiAgc3RhcnRWYWx1ZXMgPSBzdGFydC5tYXRjaChfbnVtV2l0aFVuaXRFeHApIHx8IFtdO1xuICBlbmRWYWx1ZXMgPSBlbmQubWF0Y2goX251bVdpdGhVbml0RXhwKSB8fCBbXTtcblxuICBpZiAoZW5kVmFsdWVzLmxlbmd0aCkge1xuICAgIHdoaWxlIChyZXN1bHQgPSBfbnVtV2l0aFVuaXRFeHAuZXhlYyhlbmQpKSB7XG4gICAgICBlbmRWYWx1ZSA9IHJlc3VsdFswXTtcbiAgICAgIGNodW5rID0gZW5kLnN1YnN0cmluZyhpbmRleCwgcmVzdWx0LmluZGV4KTtcblxuICAgICAgaWYgKGNvbG9yKSB7XG4gICAgICAgIGNvbG9yID0gKGNvbG9yICsgMSkgJSA1O1xuICAgICAgfSBlbHNlIGlmIChjaHVuay5zdWJzdHIoLTUpID09PSBcInJnYmEoXCIgfHwgY2h1bmsuc3Vic3RyKC01KSA9PT0gXCJoc2xhKFwiKSB7XG4gICAgICAgIGNvbG9yID0gMTtcbiAgICAgIH1cblxuICAgICAgaWYgKGVuZFZhbHVlICE9PSAoc3RhcnRWYWx1ZSA9IHN0YXJ0VmFsdWVzW21hdGNoSW5kZXgrK10gfHwgXCJcIikpIHtcbiAgICAgICAgc3RhcnROdW0gPSBwYXJzZUZsb2F0KHN0YXJ0VmFsdWUpIHx8IDA7XG4gICAgICAgIHN0YXJ0VW5pdCA9IHN0YXJ0VmFsdWUuc3Vic3RyKChzdGFydE51bSArIFwiXCIpLmxlbmd0aCk7XG4gICAgICAgIGVuZFZhbHVlLmNoYXJBdCgxKSA9PT0gXCI9XCIgJiYgKGVuZFZhbHVlID0gX3BhcnNlUmVsYXRpdmUoc3RhcnROdW0sIGVuZFZhbHVlKSArIHN0YXJ0VW5pdCk7XG4gICAgICAgIGVuZE51bSA9IHBhcnNlRmxvYXQoZW5kVmFsdWUpO1xuICAgICAgICBlbmRVbml0ID0gZW5kVmFsdWUuc3Vic3RyKChlbmROdW0gKyBcIlwiKS5sZW5ndGgpO1xuICAgICAgICBpbmRleCA9IF9udW1XaXRoVW5pdEV4cC5sYXN0SW5kZXggLSBlbmRVbml0Lmxlbmd0aDtcblxuICAgICAgICBpZiAoIWVuZFVuaXQpIHtcbiAgICAgICAgICAvL2lmIHNvbWV0aGluZyBsaWtlIFwicGVyc3BlY3RpdmU6MzAwXCIgaXMgcGFzc2VkIGluIGFuZCB3ZSBtdXN0IGFkZCBhIHVuaXQgdG8gdGhlIGVuZFxuICAgICAgICAgIGVuZFVuaXQgPSBlbmRVbml0IHx8IF9jb25maWcudW5pdHNbcHJvcF0gfHwgc3RhcnRVbml0O1xuXG4gICAgICAgICAgaWYgKGluZGV4ID09PSBlbmQubGVuZ3RoKSB7XG4gICAgICAgICAgICBlbmQgKz0gZW5kVW5pdDtcbiAgICAgICAgICAgIHB0LmUgKz0gZW5kVW5pdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3RhcnRVbml0ICE9PSBlbmRVbml0KSB7XG4gICAgICAgICAgc3RhcnROdW0gPSBfY29udmVydFRvVW5pdCh0YXJnZXQsIHByb3AsIHN0YXJ0VmFsdWUsIGVuZFVuaXQpIHx8IDA7XG4gICAgICAgIH0gLy8gdGhlc2UgbmVzdGVkIFByb3BUd2VlbnMgYXJlIGhhbmRsZWQgaW4gYSBzcGVjaWFsIHdheSAtIHdlJ2xsIG5ldmVyIGFjdHVhbGx5IGNhbGwgYSByZW5kZXIgb3Igc2V0dGVyIG1ldGhvZCBvbiB0aGVtLiBXZSdsbCBqdXN0IGxvb3AgdGhyb3VnaCB0aGVtIGluIHRoZSBwYXJlbnQgY29tcGxleCBzdHJpbmcgUHJvcFR3ZWVuJ3MgcmVuZGVyIG1ldGhvZC5cblxuXG4gICAgICAgIHB0Ll9wdCA9IHtcbiAgICAgICAgICBfbmV4dDogcHQuX3B0LFxuICAgICAgICAgIHA6IGNodW5rIHx8IG1hdGNoSW5kZXggPT09IDEgPyBjaHVuayA6IFwiLFwiLFxuICAgICAgICAgIC8vbm90ZTogU1ZHIHNwZWMgYWxsb3dzIG9taXNzaW9uIG9mIGNvbW1hL3NwYWNlIHdoZW4gYSBuZWdhdGl2ZSBzaWduIGlzIHdlZGdlZCBiZXR3ZWVuIHR3byBudW1iZXJzLCBsaWtlIDIuNS01LjMgaW5zdGVhZCBvZiAyLjUsLTUuMyBidXQgd2hlbiB0d2VlbmluZywgdGhlIG5lZ2F0aXZlIHZhbHVlIG1heSBzd2l0Y2ggdG8gcG9zaXRpdmUsIHNvIHdlIGluc2VydCB0aGUgY29tbWEganVzdCBpbiBjYXNlLlxuICAgICAgICAgIHM6IHN0YXJ0TnVtLFxuICAgICAgICAgIGM6IGVuZE51bSAtIHN0YXJ0TnVtLFxuICAgICAgICAgIG06IGNvbG9yICYmIGNvbG9yIDwgNCB8fCBwcm9wID09PSBcInpJbmRleFwiID8gTWF0aC5yb3VuZCA6IDBcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwdC5jID0gaW5kZXggPCBlbmQubGVuZ3RoID8gZW5kLnN1YnN0cmluZyhpbmRleCwgZW5kLmxlbmd0aCkgOiBcIlwiOyAvL3dlIHVzZSB0aGUgXCJjXCIgb2YgdGhlIFByb3BUd2VlbiB0byBzdG9yZSB0aGUgZmluYWwgcGFydCBvZiB0aGUgc3RyaW5nIChhZnRlciB0aGUgbGFzdCBudW1iZXIpXG4gIH0gZWxzZSB7XG4gICAgcHQuciA9IHByb3AgPT09IFwiZGlzcGxheVwiICYmIGVuZCA9PT0gXCJub25lXCIgPyBfcmVuZGVyTm9uVHdlZW5pbmdWYWx1ZU9ubHlBdEVuZCA6IF9yZW5kZXJOb25Ud2VlbmluZ1ZhbHVlO1xuICB9XG5cbiAgX3JlbEV4cC50ZXN0KGVuZCkgJiYgKHB0LmUgPSAwKTsgLy9pZiB0aGUgZW5kIHN0cmluZyBjb250YWlucyByZWxhdGl2ZSB2YWx1ZXMgb3IgZHluYW1pYyByYW5kb20oLi4uKSB2YWx1ZXMsIGRlbGV0ZSB0aGUgZW5kIGl0IHNvIHRoYXQgb24gdGhlIGZpbmFsIHJlbmRlciB3ZSBkb24ndCBhY3R1YWxseSBzZXQgaXQgdG8gdGhlIHN0cmluZyB3aXRoICs9IG9yIC09IGNoYXJhY3RlcnMgKGZvcmNlcyBpdCB0byB1c2UgdGhlIGNhbGN1bGF0ZWQgdmFsdWUpLlxuXG4gIHRoaXMuX3B0ID0gcHQ7IC8vc3RhcnQgdGhlIGxpbmtlZCBsaXN0IHdpdGggdGhpcyBuZXcgUHJvcFR3ZWVuLiBSZW1lbWJlciwgd2UgY2FsbCBfdHdlZW5Db21wbGV4Q1NTU3RyaW5nLmNhbGwocGx1Z2luSW5zdGFuY2UuLi4pIHRvIGVuc3VyZSB0aGF0IGl0J3Mgc2NvcGVkIHByb3Blcmx5LiBXZSBtYXkgY2FsbCBpdCBmcm9tIHdpdGhpbiBhbm90aGVyIHBsdWdpbiB0b28sIHRodXMgXCJ0aGlzXCIgd291bGQgcmVmZXIgdG8gdGhlIHBsdWdpbi5cblxuICByZXR1cm4gcHQ7XG59LFxuICAgIF9rZXl3b3JkVG9QZXJjZW50ID0ge1xuICB0b3A6IFwiMCVcIixcbiAgYm90dG9tOiBcIjEwMCVcIixcbiAgbGVmdDogXCIwJVwiLFxuICByaWdodDogXCIxMDAlXCIsXG4gIGNlbnRlcjogXCI1MCVcIlxufSxcbiAgICBfY29udmVydEtleXdvcmRzVG9QZXJjZW50YWdlcyA9IGZ1bmN0aW9uIF9jb252ZXJ0S2V5d29yZHNUb1BlcmNlbnRhZ2VzKHZhbHVlKSB7XG4gIHZhciBzcGxpdCA9IHZhbHVlLnNwbGl0KFwiIFwiKSxcbiAgICAgIHggPSBzcGxpdFswXSxcbiAgICAgIHkgPSBzcGxpdFsxXSB8fCBcIjUwJVwiO1xuXG4gIGlmICh4ID09PSBcInRvcFwiIHx8IHggPT09IFwiYm90dG9tXCIgfHwgeSA9PT0gXCJsZWZ0XCIgfHwgeSA9PT0gXCJyaWdodFwiKSB7XG4gICAgLy90aGUgdXNlciBwcm92aWRlZCB0aGVtIGluIHRoZSB3cm9uZyBvcmRlciwgc28gZmxpcCB0aGVtXG4gICAgdmFsdWUgPSB4O1xuICAgIHggPSB5O1xuICAgIHkgPSB2YWx1ZTtcbiAgfVxuXG4gIHNwbGl0WzBdID0gX2tleXdvcmRUb1BlcmNlbnRbeF0gfHwgeDtcbiAgc3BsaXRbMV0gPSBfa2V5d29yZFRvUGVyY2VudFt5XSB8fCB5O1xuICByZXR1cm4gc3BsaXQuam9pbihcIiBcIik7XG59LFxuICAgIF9yZW5kZXJDbGVhclByb3BzID0gZnVuY3Rpb24gX3JlbmRlckNsZWFyUHJvcHMocmF0aW8sIGRhdGEpIHtcbiAgaWYgKGRhdGEudHdlZW4gJiYgZGF0YS50d2Vlbi5fdGltZSA9PT0gZGF0YS50d2Vlbi5fZHVyKSB7XG4gICAgdmFyIHRhcmdldCA9IGRhdGEudCxcbiAgICAgICAgc3R5bGUgPSB0YXJnZXQuc3R5bGUsXG4gICAgICAgIHByb3BzID0gZGF0YS51LFxuICAgICAgICBjYWNoZSA9IHRhcmdldC5fZ3NhcCxcbiAgICAgICAgcHJvcCxcbiAgICAgICAgY2xlYXJUcmFuc2Zvcm1zLFxuICAgICAgICBpO1xuXG4gICAgaWYgKHByb3BzID09PSBcImFsbFwiIHx8IHByb3BzID09PSB0cnVlKSB7XG4gICAgICBzdHlsZS5jc3NUZXh0ID0gXCJcIjtcbiAgICAgIGNsZWFyVHJhbnNmb3JtcyA9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb3BzID0gcHJvcHMuc3BsaXQoXCIsXCIpO1xuICAgICAgaSA9IHByb3BzLmxlbmd0aDtcblxuICAgICAgd2hpbGUgKC0taSA+IC0xKSB7XG4gICAgICAgIHByb3AgPSBwcm9wc1tpXTtcblxuICAgICAgICBpZiAoX3RyYW5zZm9ybVByb3BzW3Byb3BdKSB7XG4gICAgICAgICAgY2xlYXJUcmFuc2Zvcm1zID0gMTtcbiAgICAgICAgICBwcm9wID0gcHJvcCA9PT0gXCJ0cmFuc2Zvcm1PcmlnaW5cIiA/IF90cmFuc2Zvcm1PcmlnaW5Qcm9wIDogX3RyYW5zZm9ybVByb3A7XG4gICAgICAgIH1cblxuICAgICAgICBfcmVtb3ZlUHJvcGVydHkodGFyZ2V0LCBwcm9wKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY2xlYXJUcmFuc2Zvcm1zKSB7XG4gICAgICBfcmVtb3ZlUHJvcGVydHkodGFyZ2V0LCBfdHJhbnNmb3JtUHJvcCk7XG5cbiAgICAgIGlmIChjYWNoZSkge1xuICAgICAgICBjYWNoZS5zdmcgJiYgdGFyZ2V0LnJlbW92ZUF0dHJpYnV0ZShcInRyYW5zZm9ybVwiKTtcblxuICAgICAgICBfcGFyc2VUcmFuc2Zvcm0odGFyZ2V0LCAxKTsgLy8gZm9yY2UgYWxsIHRoZSBjYWNoZWQgdmFsdWVzIGJhY2sgdG8gXCJub3JtYWxcIi9pZGVudGl0eSwgb3RoZXJ3aXNlIGlmIHRoZXJlJ3MgYW5vdGhlciB0d2VlbiB0aGF0J3MgYWxyZWFkeSBzZXQgdG8gcmVuZGVyIHRyYW5zZm9ybXMgb24gdGhpcyBlbGVtZW50LCBpdCBjb3VsZCBkaXNwbGF5IHRoZSB3cm9uZyB2YWx1ZXMuXG5cblxuICAgICAgICBjYWNoZS51bmNhY2hlID0gMTtcblxuICAgICAgICBfcmVtb3ZlSW5kZXBlbmRlbnRUcmFuc2Zvcm1zKHN0eWxlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0sXG4gICAgLy8gbm90ZTogc3BlY2lhbFByb3BzIHNob3VsZCByZXR1cm4gMSBpZiAoYW5kIG9ubHkgaWYpIHRoZXkgaGF2ZSBhIG5vbi16ZXJvIHByaW9yaXR5LiBJdCBpbmRpY2F0ZXMgd2UgbmVlZCB0byBzb3J0IHRoZSBsaW5rZWQgbGlzdC5cbl9zcGVjaWFsUHJvcHMgPSB7XG4gIGNsZWFyUHJvcHM6IGZ1bmN0aW9uIGNsZWFyUHJvcHMocGx1Z2luLCB0YXJnZXQsIHByb3BlcnR5LCBlbmRWYWx1ZSwgdHdlZW4pIHtcbiAgICBpZiAodHdlZW4uZGF0YSAhPT0gXCJpc0Zyb21TdGFydFwiKSB7XG4gICAgICB2YXIgcHQgPSBwbHVnaW4uX3B0ID0gbmV3IFByb3BUd2VlbihwbHVnaW4uX3B0LCB0YXJnZXQsIHByb3BlcnR5LCAwLCAwLCBfcmVuZGVyQ2xlYXJQcm9wcyk7XG4gICAgICBwdC51ID0gZW5kVmFsdWU7XG4gICAgICBwdC5wciA9IC0xMDtcbiAgICAgIHB0LnR3ZWVuID0gdHdlZW47XG5cbiAgICAgIHBsdWdpbi5fcHJvcHMucHVzaChwcm9wZXJ0eSk7XG5cbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgfVxuICAvKiBjbGFzc05hbWUgZmVhdHVyZSAoYWJvdXQgMC40a2IgZ3ppcHBlZCkuXG4gICwgY2xhc3NOYW1lKHBsdWdpbiwgdGFyZ2V0LCBwcm9wZXJ0eSwgZW5kVmFsdWUsIHR3ZWVuKSB7XG4gIFx0bGV0IF9yZW5kZXJDbGFzc05hbWUgPSAocmF0aW8sIGRhdGEpID0+IHtcbiAgXHRcdFx0ZGF0YS5jc3MucmVuZGVyKHJhdGlvLCBkYXRhLmNzcyk7XG4gIFx0XHRcdGlmICghcmF0aW8gfHwgcmF0aW8gPT09IDEpIHtcbiAgXHRcdFx0XHRsZXQgaW5saW5lID0gZGF0YS5ybXYsXG4gIFx0XHRcdFx0XHR0YXJnZXQgPSBkYXRhLnQsXG4gIFx0XHRcdFx0XHRwO1xuICBcdFx0XHRcdHRhcmdldC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCByYXRpbyA/IGRhdGEuZSA6IGRhdGEuYik7XG4gIFx0XHRcdFx0Zm9yIChwIGluIGlubGluZSkge1xuICBcdFx0XHRcdFx0X3JlbW92ZVByb3BlcnR5KHRhcmdldCwgcCk7XG4gIFx0XHRcdFx0fVxuICBcdFx0XHR9XG4gIFx0XHR9LFxuICBcdFx0X2dldEFsbFN0eWxlcyA9ICh0YXJnZXQpID0+IHtcbiAgXHRcdFx0bGV0IHN0eWxlcyA9IHt9LFxuICBcdFx0XHRcdGNvbXB1dGVkID0gZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXQpLFxuICBcdFx0XHRcdHA7XG4gIFx0XHRcdGZvciAocCBpbiBjb21wdXRlZCkge1xuICBcdFx0XHRcdGlmIChpc05hTihwKSAmJiBwICE9PSBcImNzc1RleHRcIiAmJiBwICE9PSBcImxlbmd0aFwiKSB7XG4gIFx0XHRcdFx0XHRzdHlsZXNbcF0gPSBjb21wdXRlZFtwXTtcbiAgXHRcdFx0XHR9XG4gIFx0XHRcdH1cbiAgXHRcdFx0X3NldERlZmF1bHRzKHN0eWxlcywgX3BhcnNlVHJhbnNmb3JtKHRhcmdldCwgMSkpO1xuICBcdFx0XHRyZXR1cm4gc3R5bGVzO1xuICBcdFx0fSxcbiAgXHRcdHN0YXJ0Q2xhc3NMaXN0ID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLFxuICBcdFx0c3R5bGUgPSB0YXJnZXQuc3R5bGUsXG4gIFx0XHRjc3NUZXh0ID0gc3R5bGUuY3NzVGV4dCxcbiAgXHRcdGNhY2hlID0gdGFyZ2V0Ll9nc2FwLFxuICBcdFx0Y2xhc3NQVCA9IGNhY2hlLmNsYXNzUFQsXG4gIFx0XHRpbmxpbmVUb1JlbW92ZUF0RW5kID0ge30sXG4gIFx0XHRkYXRhID0ge3Q6dGFyZ2V0LCBwbHVnaW46cGx1Z2luLCBybXY6aW5saW5lVG9SZW1vdmVBdEVuZCwgYjpzdGFydENsYXNzTGlzdCwgZTooZW5kVmFsdWUuY2hhckF0KDEpICE9PSBcIj1cIikgPyBlbmRWYWx1ZSA6IHN0YXJ0Q2xhc3NMaXN0LnJlcGxhY2UobmV3IFJlZ0V4cChcIig/OlxcXFxzfF4pXCIgKyBlbmRWYWx1ZS5zdWJzdHIoMikgKyBcIig/IVtcXFxcdy1dKVwiKSwgXCJcIikgKyAoKGVuZFZhbHVlLmNoYXJBdCgwKSA9PT0gXCIrXCIpID8gXCIgXCIgKyBlbmRWYWx1ZS5zdWJzdHIoMikgOiBcIlwiKX0sXG4gIFx0XHRjaGFuZ2luZ1ZhcnMgPSB7fSxcbiAgXHRcdHN0YXJ0VmFycyA9IF9nZXRBbGxTdHlsZXModGFyZ2V0KSxcbiAgXHRcdHRyYW5zZm9ybVJlbGF0ZWQgPSAvKHRyYW5zZm9ybXxwZXJzcGVjdGl2ZSkvaSxcbiAgXHRcdGVuZFZhcnMsIHA7XG4gIFx0aWYgKGNsYXNzUFQpIHtcbiAgXHRcdGNsYXNzUFQucigxLCBjbGFzc1BULmQpO1xuICBcdFx0X3JlbW92ZUxpbmtlZExpc3RJdGVtKGNsYXNzUFQuZC5wbHVnaW4sIGNsYXNzUFQsIFwiX3B0XCIpO1xuICBcdH1cbiAgXHR0YXJnZXQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgZGF0YS5lKTtcbiAgXHRlbmRWYXJzID0gX2dldEFsbFN0eWxlcyh0YXJnZXQsIHRydWUpO1xuICBcdHRhcmdldC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBzdGFydENsYXNzTGlzdCk7XG4gIFx0Zm9yIChwIGluIGVuZFZhcnMpIHtcbiAgXHRcdGlmIChlbmRWYXJzW3BdICE9PSBzdGFydFZhcnNbcF0gJiYgIXRyYW5zZm9ybVJlbGF0ZWQudGVzdChwKSkge1xuICBcdFx0XHRjaGFuZ2luZ1ZhcnNbcF0gPSBlbmRWYXJzW3BdO1xuICBcdFx0XHRpZiAoIXN0eWxlW3BdICYmIHN0eWxlW3BdICE9PSBcIjBcIikge1xuICBcdFx0XHRcdGlubGluZVRvUmVtb3ZlQXRFbmRbcF0gPSAxO1xuICBcdFx0XHR9XG4gIFx0XHR9XG4gIFx0fVxuICBcdGNhY2hlLmNsYXNzUFQgPSBwbHVnaW4uX3B0ID0gbmV3IFByb3BUd2VlbihwbHVnaW4uX3B0LCB0YXJnZXQsIFwiY2xhc3NOYW1lXCIsIDAsIDAsIF9yZW5kZXJDbGFzc05hbWUsIGRhdGEsIDAsIC0xMSk7XG4gIFx0aWYgKHN0eWxlLmNzc1RleHQgIT09IGNzc1RleHQpIHsgLy9vbmx5IGFwcGx5IGlmIHRoaW5ncyBjaGFuZ2UuIE90aGVyd2lzZSwgaW4gY2FzZXMgbGlrZSBhIGJhY2tncm91bmQtaW1hZ2UgdGhhdCdzIHB1bGxlZCBkeW5hbWljYWxseSwgaXQgY291bGQgY2F1c2UgYSByZWZyZXNoLiBTZWUgaHR0cHM6Ly9ncmVlbnNvY2suY29tL2ZvcnVtcy90b3BpYy8yMDM2OC1wb3NzaWJsZS1nc2FwLWJ1Zy1zd2l0Y2hpbmctY2xhc3NuYW1lcy1pbi1jaHJvbWUvLlxuICBcdFx0c3R5bGUuY3NzVGV4dCA9IGNzc1RleHQ7IC8vd2UgcmVjb3JkZWQgY3NzVGV4dCBiZWZvcmUgd2Ugc3dhcHBlZCBjbGFzc2VzIGFuZCByYW4gX2dldEFsbFN0eWxlcygpIGJlY2F1c2UgaW4gY2FzZXMgd2hlbiBhIGNsYXNzTmFtZSB0d2VlbiBpcyBvdmVyd3JpdHRlbiwgd2UgcmVtb3ZlIGFsbCB0aGUgcmVsYXRlZCB0d2VlbmluZyBwcm9wZXJ0aWVzIGZyb20gdGhhdCBjbGFzcyBjaGFuZ2UgKG90aGVyd2lzZSBjbGFzcy1zcGVjaWZpYyBzdHVmZiBjYW4ndCBvdmVycmlkZSBwcm9wZXJ0aWVzIHdlJ3ZlIGRpcmVjdGx5IHNldCBvbiB0aGUgdGFyZ2V0J3Mgc3R5bGUgb2JqZWN0IGR1ZSB0byBzcGVjaWZpY2l0eSkuXG4gIFx0fVxuICBcdF9wYXJzZVRyYW5zZm9ybSh0YXJnZXQsIHRydWUpOyAvL3RvIGNsZWFyIHRoZSBjYWNoaW5nIG9mIHRyYW5zZm9ybXNcbiAgXHRkYXRhLmNzcyA9IG5ldyBnc2FwLnBsdWdpbnMuY3NzKCk7XG4gIFx0ZGF0YS5jc3MuaW5pdCh0YXJnZXQsIGNoYW5naW5nVmFycywgdHdlZW4pO1xuICBcdHBsdWdpbi5fcHJvcHMucHVzaCguLi5kYXRhLmNzcy5fcHJvcHMpO1xuICBcdHJldHVybiAxO1xuICB9XG4gICovXG5cbn0sXG5cbi8qXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogVFJBTlNGT1JNU1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuX2lkZW50aXR5MkRNYXRyaXggPSBbMSwgMCwgMCwgMSwgMCwgMF0sXG4gICAgX3JvdGF0aW9uYWxQcm9wZXJ0aWVzID0ge30sXG4gICAgX2lzTnVsbFRyYW5zZm9ybSA9IGZ1bmN0aW9uIF9pc051bGxUcmFuc2Zvcm0odmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBcIm1hdHJpeCgxLCAwLCAwLCAxLCAwLCAwKVwiIHx8IHZhbHVlID09PSBcIm5vbmVcIiB8fCAhdmFsdWU7XG59LFxuICAgIF9nZXRDb21wdXRlZFRyYW5zZm9ybU1hdHJpeEFzQXJyYXkgPSBmdW5jdGlvbiBfZ2V0Q29tcHV0ZWRUcmFuc2Zvcm1NYXRyaXhBc0FycmF5KHRhcmdldCkge1xuICB2YXIgbWF0cml4U3RyaW5nID0gX2dldENvbXB1dGVkUHJvcGVydHkodGFyZ2V0LCBfdHJhbnNmb3JtUHJvcCk7XG5cbiAgcmV0dXJuIF9pc051bGxUcmFuc2Zvcm0obWF0cml4U3RyaW5nKSA/IF9pZGVudGl0eTJETWF0cml4IDogbWF0cml4U3RyaW5nLnN1YnN0cig3KS5tYXRjaChfbnVtRXhwKS5tYXAoX3JvdW5kKTtcbn0sXG4gICAgX2dldE1hdHJpeCA9IGZ1bmN0aW9uIF9nZXRNYXRyaXgodGFyZ2V0LCBmb3JjZTJEKSB7XG4gIHZhciBjYWNoZSA9IHRhcmdldC5fZ3NhcCB8fCBfZ2V0Q2FjaGUodGFyZ2V0KSxcbiAgICAgIHN0eWxlID0gdGFyZ2V0LnN0eWxlLFxuICAgICAgbWF0cml4ID0gX2dldENvbXB1dGVkVHJhbnNmb3JtTWF0cml4QXNBcnJheSh0YXJnZXQpLFxuICAgICAgcGFyZW50LFxuICAgICAgbmV4dFNpYmxpbmcsXG4gICAgICB0ZW1wLFxuICAgICAgYWRkZWRUb0RPTTtcblxuICBpZiAoY2FjaGUuc3ZnICYmIHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIikpIHtcbiAgICB0ZW1wID0gdGFyZ2V0LnRyYW5zZm9ybS5iYXNlVmFsLmNvbnNvbGlkYXRlKCkubWF0cml4OyAvL2Vuc3VyZXMgdGhhdCBldmVuIGNvbXBsZXggdmFsdWVzIGxpa2UgXCJ0cmFuc2xhdGUoNTAsNjApIHJvdGF0ZSgxMzUsMCwwKVwiIGFyZSBwYXJzZWQgYmVjYXVzZSBpdCBtYXNoZXMgaXQgaW50byBhIG1hdHJpeC5cblxuICAgIG1hdHJpeCA9IFt0ZW1wLmEsIHRlbXAuYiwgdGVtcC5jLCB0ZW1wLmQsIHRlbXAuZSwgdGVtcC5mXTtcbiAgICByZXR1cm4gbWF0cml4LmpvaW4oXCIsXCIpID09PSBcIjEsMCwwLDEsMCwwXCIgPyBfaWRlbnRpdHkyRE1hdHJpeCA6IG1hdHJpeDtcbiAgfSBlbHNlIGlmIChtYXRyaXggPT09IF9pZGVudGl0eTJETWF0cml4ICYmICF0YXJnZXQub2Zmc2V0UGFyZW50ICYmIHRhcmdldCAhPT0gX2RvY0VsZW1lbnQgJiYgIWNhY2hlLnN2Zykge1xuICAgIC8vbm90ZTogaWYgb2Zmc2V0UGFyZW50IGlzIG51bGwsIHRoYXQgbWVhbnMgdGhlIGVsZW1lbnQgaXNuJ3QgaW4gdGhlIG5vcm1hbCBkb2N1bWVudCBmbG93LCBsaWtlIGlmIGl0IGhhcyBkaXNwbGF5Om5vbmUgb3Igb25lIG9mIGl0cyBhbmNlc3RvcnMgaGFzIGRpc3BsYXk6bm9uZSkuIEZpcmVmb3ggcmV0dXJucyBudWxsIGZvciBnZXRDb21wdXRlZFN0eWxlKCkgaWYgdGhlIGVsZW1lbnQgaXMgaW4gYW4gaWZyYW1lIHRoYXQgaGFzIGRpc3BsYXk6bm9uZS4gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NTQ4Mzk3XG4gICAgLy9icm93c2VycyBkb24ndCByZXBvcnQgdHJhbnNmb3JtcyBhY2N1cmF0ZWx5IHVubGVzcyB0aGUgZWxlbWVudCBpcyBpbiB0aGUgRE9NIGFuZCBoYXMgYSBkaXNwbGF5IHZhbHVlIHRoYXQncyBub3QgXCJub25lXCIuIEZpcmVmb3ggYW5kIE1pY3Jvc29mdCBicm93c2VycyBoYXZlIGEgcGFydGlhbCBidWcgd2hlcmUgdGhleSdsbCByZXBvcnQgdHJhbnNmb3JtcyBldmVuIGlmIGRpc3BsYXk6bm9uZSBCVVQgbm90IGFueSBwZXJjZW50YWdlLWJhc2VkIHZhbHVlcyBsaWtlIHRyYW5zbGF0ZSgtNTAlLCA4cHgpIHdpbGwgYmUgcmVwb3J0ZWQgYXMgaWYgaXQncyB0cmFuc2xhdGUoMCwgOHB4KS5cbiAgICB0ZW1wID0gc3R5bGUuZGlzcGxheTtcbiAgICBzdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIHBhcmVudCA9IHRhcmdldC5wYXJlbnROb2RlO1xuXG4gICAgaWYgKCFwYXJlbnQgfHwgIXRhcmdldC5vZmZzZXRQYXJlbnQpIHtcbiAgICAgIC8vIG5vdGU6IGluIDMuMy4wIHdlIHN3aXRjaGVkIHRhcmdldC5vZmZzZXRQYXJlbnQgdG8gX2RvYy5ib2R5LmNvbnRhaW5zKHRhcmdldCkgdG8gYXZvaWQgW3NvbWV0aW1lcyB1bm5lY2Vzc2FyeV0gTXV0YXRpb25PYnNlcnZlciBjYWxscyBidXQgdGhhdCB3YXNuJ3QgYWRlcXVhdGUgYmVjYXVzZSB0aGVyZSBhcmUgZWRnZSBjYXNlcyB3aGVyZSBuZXN0ZWQgcG9zaXRpb246IGZpeGVkIGVsZW1lbnRzIG5lZWQgdG8gZ2V0IHJlcGFyZW50ZWQgdG8gYWNjdXJhdGVseSBzZW5zZSB0cmFuc2Zvcm1zLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2dyZWVuc29jay9HU0FQL2lzc3Vlcy8zODggYW5kIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmVlbnNvY2svR1NBUC9pc3N1ZXMvMzc1XG4gICAgICBhZGRlZFRvRE9NID0gMTsgLy9mbGFnXG5cbiAgICAgIG5leHRTaWJsaW5nID0gdGFyZ2V0Lm5leHRFbGVtZW50U2libGluZztcblxuICAgICAgX2RvY0VsZW1lbnQuYXBwZW5kQ2hpbGQodGFyZ2V0KTsgLy93ZSBtdXN0IGFkZCBpdCB0byB0aGUgRE9NIGluIG9yZGVyIHRvIGdldCB2YWx1ZXMgcHJvcGVybHlcblxuICAgIH1cblxuICAgIG1hdHJpeCA9IF9nZXRDb21wdXRlZFRyYW5zZm9ybU1hdHJpeEFzQXJyYXkodGFyZ2V0KTtcbiAgICB0ZW1wID8gc3R5bGUuZGlzcGxheSA9IHRlbXAgOiBfcmVtb3ZlUHJvcGVydHkodGFyZ2V0LCBcImRpc3BsYXlcIik7XG5cbiAgICBpZiAoYWRkZWRUb0RPTSkge1xuICAgICAgbmV4dFNpYmxpbmcgPyBwYXJlbnQuaW5zZXJ0QmVmb3JlKHRhcmdldCwgbmV4dFNpYmxpbmcpIDogcGFyZW50ID8gcGFyZW50LmFwcGVuZENoaWxkKHRhcmdldCkgOiBfZG9jRWxlbWVudC5yZW1vdmVDaGlsZCh0YXJnZXQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JjZTJEICYmIG1hdHJpeC5sZW5ndGggPiA2ID8gW21hdHJpeFswXSwgbWF0cml4WzFdLCBtYXRyaXhbNF0sIG1hdHJpeFs1XSwgbWF0cml4WzEyXSwgbWF0cml4WzEzXV0gOiBtYXRyaXg7XG59LFxuICAgIF9hcHBseVNWR09yaWdpbiA9IGZ1bmN0aW9uIF9hcHBseVNWR09yaWdpbih0YXJnZXQsIG9yaWdpbiwgb3JpZ2luSXNBYnNvbHV0ZSwgc21vb3RoLCBtYXRyaXhBcnJheSwgcGx1Z2luVG9BZGRQcm9wVHdlZW5zVG8pIHtcbiAgdmFyIGNhY2hlID0gdGFyZ2V0Ll9nc2FwLFxuICAgICAgbWF0cml4ID0gbWF0cml4QXJyYXkgfHwgX2dldE1hdHJpeCh0YXJnZXQsIHRydWUpLFxuICAgICAgeE9yaWdpbk9sZCA9IGNhY2hlLnhPcmlnaW4gfHwgMCxcbiAgICAgIHlPcmlnaW5PbGQgPSBjYWNoZS55T3JpZ2luIHx8IDAsXG4gICAgICB4T2Zmc2V0T2xkID0gY2FjaGUueE9mZnNldCB8fCAwLFxuICAgICAgeU9mZnNldE9sZCA9IGNhY2hlLnlPZmZzZXQgfHwgMCxcbiAgICAgIGEgPSBtYXRyaXhbMF0sXG4gICAgICBiID0gbWF0cml4WzFdLFxuICAgICAgYyA9IG1hdHJpeFsyXSxcbiAgICAgIGQgPSBtYXRyaXhbM10sXG4gICAgICB0eCA9IG1hdHJpeFs0XSxcbiAgICAgIHR5ID0gbWF0cml4WzVdLFxuICAgICAgb3JpZ2luU3BsaXQgPSBvcmlnaW4uc3BsaXQoXCIgXCIpLFxuICAgICAgeE9yaWdpbiA9IHBhcnNlRmxvYXQob3JpZ2luU3BsaXRbMF0pIHx8IDAsXG4gICAgICB5T3JpZ2luID0gcGFyc2VGbG9hdChvcmlnaW5TcGxpdFsxXSkgfHwgMCxcbiAgICAgIGJvdW5kcyxcbiAgICAgIGRldGVybWluYW50LFxuICAgICAgeCxcbiAgICAgIHk7XG5cbiAgaWYgKCFvcmlnaW5Jc0Fic29sdXRlKSB7XG4gICAgYm91bmRzID0gX2dldEJCb3godGFyZ2V0KTtcbiAgICB4T3JpZ2luID0gYm91bmRzLnggKyAofm9yaWdpblNwbGl0WzBdLmluZGV4T2YoXCIlXCIpID8geE9yaWdpbiAvIDEwMCAqIGJvdW5kcy53aWR0aCA6IHhPcmlnaW4pO1xuICAgIHlPcmlnaW4gPSBib3VuZHMueSArICh+KG9yaWdpblNwbGl0WzFdIHx8IG9yaWdpblNwbGl0WzBdKS5pbmRleE9mKFwiJVwiKSA/IHlPcmlnaW4gLyAxMDAgKiBib3VuZHMuaGVpZ2h0IDogeU9yaWdpbik7XG4gIH0gZWxzZSBpZiAobWF0cml4ICE9PSBfaWRlbnRpdHkyRE1hdHJpeCAmJiAoZGV0ZXJtaW5hbnQgPSBhICogZCAtIGIgKiBjKSkge1xuICAgIC8vaWYgaXQncyB6ZXJvIChsaWtlIGlmIHNjYWxlWCBhbmQgc2NhbGVZIGFyZSB6ZXJvKSwgc2tpcCBpdCB0byBhdm9pZCBlcnJvcnMgd2l0aCBkaXZpZGluZyBieSB6ZXJvLlxuICAgIHggPSB4T3JpZ2luICogKGQgLyBkZXRlcm1pbmFudCkgKyB5T3JpZ2luICogKC1jIC8gZGV0ZXJtaW5hbnQpICsgKGMgKiB0eSAtIGQgKiB0eCkgLyBkZXRlcm1pbmFudDtcbiAgICB5ID0geE9yaWdpbiAqICgtYiAvIGRldGVybWluYW50KSArIHlPcmlnaW4gKiAoYSAvIGRldGVybWluYW50KSAtIChhICogdHkgLSBiICogdHgpIC8gZGV0ZXJtaW5hbnQ7XG4gICAgeE9yaWdpbiA9IHg7XG4gICAgeU9yaWdpbiA9IHk7XG4gIH1cblxuICBpZiAoc21vb3RoIHx8IHNtb290aCAhPT0gZmFsc2UgJiYgY2FjaGUuc21vb3RoKSB7XG4gICAgdHggPSB4T3JpZ2luIC0geE9yaWdpbk9sZDtcbiAgICB0eSA9IHlPcmlnaW4gLSB5T3JpZ2luT2xkO1xuICAgIGNhY2hlLnhPZmZzZXQgPSB4T2Zmc2V0T2xkICsgKHR4ICogYSArIHR5ICogYykgLSB0eDtcbiAgICBjYWNoZS55T2Zmc2V0ID0geU9mZnNldE9sZCArICh0eCAqIGIgKyB0eSAqIGQpIC0gdHk7XG4gIH0gZWxzZSB7XG4gICAgY2FjaGUueE9mZnNldCA9IGNhY2hlLnlPZmZzZXQgPSAwO1xuICB9XG5cbiAgY2FjaGUueE9yaWdpbiA9IHhPcmlnaW47XG4gIGNhY2hlLnlPcmlnaW4gPSB5T3JpZ2luO1xuICBjYWNoZS5zbW9vdGggPSAhIXNtb290aDtcbiAgY2FjaGUub3JpZ2luID0gb3JpZ2luO1xuICBjYWNoZS5vcmlnaW5Jc0Fic29sdXRlID0gISFvcmlnaW5Jc0Fic29sdXRlO1xuICB0YXJnZXQuc3R5bGVbX3RyYW5zZm9ybU9yaWdpblByb3BdID0gXCIwcHggMHB4XCI7IC8vb3RoZXJ3aXNlLCBpZiBzb21lb25lIHNldHMgIGFuIG9yaWdpbiB2aWEgQ1NTLCBpdCB3aWxsIGxpa2VseSBpbnRlcmZlcmUgd2l0aCB0aGUgU1ZHIHRyYW5zZm9ybSBhdHRyaWJ1dGUgb25lcyAoYmVjYXVzZSByZW1lbWJlciwgd2UncmUgYmFraW5nIHRoZSBvcmlnaW4gaW50byB0aGUgbWF0cml4KCkgdmFsdWUpLlxuXG4gIGlmIChwbHVnaW5Ub0FkZFByb3BUd2VlbnNUbykge1xuICAgIF9hZGROb25Ud2VlbmluZ1BUKHBsdWdpblRvQWRkUHJvcFR3ZWVuc1RvLCBjYWNoZSwgXCJ4T3JpZ2luXCIsIHhPcmlnaW5PbGQsIHhPcmlnaW4pO1xuXG4gICAgX2FkZE5vblR3ZWVuaW5nUFQocGx1Z2luVG9BZGRQcm9wVHdlZW5zVG8sIGNhY2hlLCBcInlPcmlnaW5cIiwgeU9yaWdpbk9sZCwgeU9yaWdpbik7XG5cbiAgICBfYWRkTm9uVHdlZW5pbmdQVChwbHVnaW5Ub0FkZFByb3BUd2VlbnNUbywgY2FjaGUsIFwieE9mZnNldFwiLCB4T2Zmc2V0T2xkLCBjYWNoZS54T2Zmc2V0KTtcblxuICAgIF9hZGROb25Ud2VlbmluZ1BUKHBsdWdpblRvQWRkUHJvcFR3ZWVuc1RvLCBjYWNoZSwgXCJ5T2Zmc2V0XCIsIHlPZmZzZXRPbGQsIGNhY2hlLnlPZmZzZXQpO1xuICB9XG5cbiAgdGFyZ2V0LnNldEF0dHJpYnV0ZShcImRhdGEtc3ZnLW9yaWdpblwiLCB4T3JpZ2luICsgXCIgXCIgKyB5T3JpZ2luKTtcbn0sXG4gICAgX3BhcnNlVHJhbnNmb3JtID0gZnVuY3Rpb24gX3BhcnNlVHJhbnNmb3JtKHRhcmdldCwgdW5jYWNoZSkge1xuICB2YXIgY2FjaGUgPSB0YXJnZXQuX2dzYXAgfHwgbmV3IEdTQ2FjaGUodGFyZ2V0KTtcblxuICBpZiAoXCJ4XCIgaW4gY2FjaGUgJiYgIXVuY2FjaGUgJiYgIWNhY2hlLnVuY2FjaGUpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH1cblxuICB2YXIgc3R5bGUgPSB0YXJnZXQuc3R5bGUsXG4gICAgICBpbnZlcnRlZFNjYWxlWCA9IGNhY2hlLnNjYWxlWCA8IDAsXG4gICAgICBweCA9IFwicHhcIixcbiAgICAgIGRlZyA9IFwiZGVnXCIsXG4gICAgICBjcyA9IGdldENvbXB1dGVkU3R5bGUodGFyZ2V0KSxcbiAgICAgIG9yaWdpbiA9IF9nZXRDb21wdXRlZFByb3BlcnR5KHRhcmdldCwgX3RyYW5zZm9ybU9yaWdpblByb3ApIHx8IFwiMFwiLFxuICAgICAgeCxcbiAgICAgIHksXG4gICAgICB6LFxuICAgICAgc2NhbGVYLFxuICAgICAgc2NhbGVZLFxuICAgICAgcm90YXRpb24sXG4gICAgICByb3RhdGlvblgsXG4gICAgICByb3RhdGlvblksXG4gICAgICBza2V3WCxcbiAgICAgIHNrZXdZLFxuICAgICAgcGVyc3BlY3RpdmUsXG4gICAgICB4T3JpZ2luLFxuICAgICAgeU9yaWdpbixcbiAgICAgIG1hdHJpeCxcbiAgICAgIGFuZ2xlLFxuICAgICAgY29zLFxuICAgICAgc2luLFxuICAgICAgYSxcbiAgICAgIGIsXG4gICAgICBjLFxuICAgICAgZCxcbiAgICAgIGExMixcbiAgICAgIGEyMixcbiAgICAgIHQxLFxuICAgICAgdDIsXG4gICAgICB0MyxcbiAgICAgIGExMyxcbiAgICAgIGEyMyxcbiAgICAgIGEzMyxcbiAgICAgIGE0MixcbiAgICAgIGE0MyxcbiAgICAgIGEzMjtcbiAgeCA9IHkgPSB6ID0gcm90YXRpb24gPSByb3RhdGlvblggPSByb3RhdGlvblkgPSBza2V3WCA9IHNrZXdZID0gcGVyc3BlY3RpdmUgPSAwO1xuICBzY2FsZVggPSBzY2FsZVkgPSAxO1xuICBjYWNoZS5zdmcgPSAhISh0YXJnZXQuZ2V0Q1RNICYmIF9pc1NWRyh0YXJnZXQpKTtcblxuICBpZiAoY3MudHJhbnNsYXRlKSB7XG4gICAgLy8gYWNjb21tb2RhdGUgaW5kZXBlbmRlbnQgdHJhbnNmb3JtcyBieSBjb21iaW5pbmcgdGhlbSBpbnRvIG5vcm1hbCBvbmVzLlxuICAgIGlmIChjcy50cmFuc2xhdGUgIT09IFwibm9uZVwiIHx8IGNzLnNjYWxlICE9PSBcIm5vbmVcIiB8fCBjcy5yb3RhdGUgIT09IFwibm9uZVwiKSB7XG4gICAgICBzdHlsZVtfdHJhbnNmb3JtUHJvcF0gPSAoY3MudHJhbnNsYXRlICE9PSBcIm5vbmVcIiA/IFwidHJhbnNsYXRlM2QoXCIgKyAoY3MudHJhbnNsYXRlICsgXCIgMCAwXCIpLnNwbGl0KFwiIFwiKS5zbGljZSgwLCAzKS5qb2luKFwiLCBcIikgKyBcIikgXCIgOiBcIlwiKSArIChjcy5yb3RhdGUgIT09IFwibm9uZVwiID8gXCJyb3RhdGUoXCIgKyBjcy5yb3RhdGUgKyBcIikgXCIgOiBcIlwiKSArIChjcy5zY2FsZSAhPT0gXCJub25lXCIgPyBcInNjYWxlKFwiICsgY3Muc2NhbGUuc3BsaXQoXCIgXCIpLmpvaW4oXCIsXCIpICsgXCIpIFwiIDogXCJcIikgKyBjc1tfdHJhbnNmb3JtUHJvcF07XG4gICAgfVxuXG4gICAgc3R5bGUuc2NhbGUgPSBzdHlsZS5yb3RhdGUgPSBzdHlsZS50cmFuc2xhdGUgPSBcIm5vbmVcIjtcbiAgfVxuXG4gIG1hdHJpeCA9IF9nZXRNYXRyaXgodGFyZ2V0LCBjYWNoZS5zdmcpO1xuXG4gIGlmIChjYWNoZS5zdmcpIHtcbiAgICB0MSA9ICghY2FjaGUudW5jYWNoZSB8fCBvcmlnaW4gPT09IFwiMHB4IDBweFwiKSAmJiAhdW5jYWNoZSAmJiB0YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1zdmctb3JpZ2luXCIpOyAvLyBpZiBvcmlnaW4gaXMgMCwwIGFuZCBjYWNoZS51bmNhY2hlIGlzIHRydWUsIGxldCB0aGUgcmVjb3JkZWQgZGF0YS1zdmctb3JpZ2luIHN0YXkuIE90aGVyd2lzZSwgd2hlbmV2ZXIgd2Ugc2V0IGNhY2hlLnVuY2FjaGUgdG8gdHJ1ZSwgd2UnZCBuZWVkIHRvIHNldCBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybU9yaWdpbiA9IChjYWNoZS54T3JpZ2luIC0gYmJveC54KSArIFwicHggXCIgKyAoY2FjaGUueU9yaWdpbiAtIGJib3gueSkgKyBcInB4XCIuIFJlbWVtYmVyLCB0byB3b3JrIGFyb3VuZCBicm93c2VyIGluY29uc2lzdGVuY2llcyB3ZSBhbHdheXMgZm9yY2UgU1ZHIGVsZW1lbnRzJyB0cmFuc2Zvcm1PcmlnaW4gdG8gMCwwIGFuZCBvZmZzZXQgdGhlIHRyYW5zbGF0aW9uIGFjY29yZGluZ2x5LlxuXG4gICAgX2FwcGx5U1ZHT3JpZ2luKHRhcmdldCwgdDEgfHwgb3JpZ2luLCAhIXQxIHx8IGNhY2hlLm9yaWdpbklzQWJzb2x1dGUsIGNhY2hlLnNtb290aCAhPT0gZmFsc2UsIG1hdHJpeCk7XG4gIH1cblxuICB4T3JpZ2luID0gY2FjaGUueE9yaWdpbiB8fCAwO1xuICB5T3JpZ2luID0gY2FjaGUueU9yaWdpbiB8fCAwO1xuXG4gIGlmIChtYXRyaXggIT09IF9pZGVudGl0eTJETWF0cml4KSB7XG4gICAgYSA9IG1hdHJpeFswXTsgLy9hMTFcblxuICAgIGIgPSBtYXRyaXhbMV07IC8vYTIxXG5cbiAgICBjID0gbWF0cml4WzJdOyAvL2EzMVxuXG4gICAgZCA9IG1hdHJpeFszXTsgLy9hNDFcblxuICAgIHggPSBhMTIgPSBtYXRyaXhbNF07XG4gICAgeSA9IGEyMiA9IG1hdHJpeFs1XTsgLy8yRCBtYXRyaXhcblxuICAgIGlmIChtYXRyaXgubGVuZ3RoID09PSA2KSB7XG4gICAgICBzY2FsZVggPSBNYXRoLnNxcnQoYSAqIGEgKyBiICogYik7XG4gICAgICBzY2FsZVkgPSBNYXRoLnNxcnQoZCAqIGQgKyBjICogYyk7XG4gICAgICByb3RhdGlvbiA9IGEgfHwgYiA/IF9hdGFuMihiLCBhKSAqIF9SQUQyREVHIDogMDsgLy9ub3RlOiBpZiBzY2FsZVggaXMgMCwgd2UgY2Fubm90IGFjY3VyYXRlbHkgbWVhc3VyZSByb3RhdGlvbi4gU2FtZSBmb3Igc2tld1ggd2l0aCBhIHNjYWxlWSBvZiAwLiBUaGVyZWZvcmUsIHdlIGRlZmF1bHQgdG8gdGhlIHByZXZpb3VzbHkgcmVjb3JkZWQgdmFsdWUgKG9yIHplcm8gaWYgdGhhdCBkb2Vzbid0IGV4aXN0KS5cblxuICAgICAgc2tld1ggPSBjIHx8IGQgPyBfYXRhbjIoYywgZCkgKiBfUkFEMkRFRyArIHJvdGF0aW9uIDogMDtcbiAgICAgIHNrZXdYICYmIChzY2FsZVkgKj0gTWF0aC5hYnMoTWF0aC5jb3Moc2tld1ggKiBfREVHMlJBRCkpKTtcblxuICAgICAgaWYgKGNhY2hlLnN2Zykge1xuICAgICAgICB4IC09IHhPcmlnaW4gLSAoeE9yaWdpbiAqIGEgKyB5T3JpZ2luICogYyk7XG4gICAgICAgIHkgLT0geU9yaWdpbiAtICh4T3JpZ2luICogYiArIHlPcmlnaW4gKiBkKTtcbiAgICAgIH0gLy8zRCBtYXRyaXhcblxuICAgIH0gZWxzZSB7XG4gICAgICBhMzIgPSBtYXRyaXhbNl07XG4gICAgICBhNDIgPSBtYXRyaXhbN107XG4gICAgICBhMTMgPSBtYXRyaXhbOF07XG4gICAgICBhMjMgPSBtYXRyaXhbOV07XG4gICAgICBhMzMgPSBtYXRyaXhbMTBdO1xuICAgICAgYTQzID0gbWF0cml4WzExXTtcbiAgICAgIHggPSBtYXRyaXhbMTJdO1xuICAgICAgeSA9IG1hdHJpeFsxM107XG4gICAgICB6ID0gbWF0cml4WzE0XTtcbiAgICAgIGFuZ2xlID0gX2F0YW4yKGEzMiwgYTMzKTtcbiAgICAgIHJvdGF0aW9uWCA9IGFuZ2xlICogX1JBRDJERUc7IC8vcm90YXRpb25YXG5cbiAgICAgIGlmIChhbmdsZSkge1xuICAgICAgICBjb3MgPSBNYXRoLmNvcygtYW5nbGUpO1xuICAgICAgICBzaW4gPSBNYXRoLnNpbigtYW5nbGUpO1xuICAgICAgICB0MSA9IGExMiAqIGNvcyArIGExMyAqIHNpbjtcbiAgICAgICAgdDIgPSBhMjIgKiBjb3MgKyBhMjMgKiBzaW47XG4gICAgICAgIHQzID0gYTMyICogY29zICsgYTMzICogc2luO1xuICAgICAgICBhMTMgPSBhMTIgKiAtc2luICsgYTEzICogY29zO1xuICAgICAgICBhMjMgPSBhMjIgKiAtc2luICsgYTIzICogY29zO1xuICAgICAgICBhMzMgPSBhMzIgKiAtc2luICsgYTMzICogY29zO1xuICAgICAgICBhNDMgPSBhNDIgKiAtc2luICsgYTQzICogY29zO1xuICAgICAgICBhMTIgPSB0MTtcbiAgICAgICAgYTIyID0gdDI7XG4gICAgICAgIGEzMiA9IHQzO1xuICAgICAgfSAvL3JvdGF0aW9uWVxuXG5cbiAgICAgIGFuZ2xlID0gX2F0YW4yKC1jLCBhMzMpO1xuICAgICAgcm90YXRpb25ZID0gYW5nbGUgKiBfUkFEMkRFRztcblxuICAgICAgaWYgKGFuZ2xlKSB7XG4gICAgICAgIGNvcyA9IE1hdGguY29zKC1hbmdsZSk7XG4gICAgICAgIHNpbiA9IE1hdGguc2luKC1hbmdsZSk7XG4gICAgICAgIHQxID0gYSAqIGNvcyAtIGExMyAqIHNpbjtcbiAgICAgICAgdDIgPSBiICogY29zIC0gYTIzICogc2luO1xuICAgICAgICB0MyA9IGMgKiBjb3MgLSBhMzMgKiBzaW47XG4gICAgICAgIGE0MyA9IGQgKiBzaW4gKyBhNDMgKiBjb3M7XG4gICAgICAgIGEgPSB0MTtcbiAgICAgICAgYiA9IHQyO1xuICAgICAgICBjID0gdDM7XG4gICAgICB9IC8vcm90YXRpb25aXG5cblxuICAgICAgYW5nbGUgPSBfYXRhbjIoYiwgYSk7XG4gICAgICByb3RhdGlvbiA9IGFuZ2xlICogX1JBRDJERUc7XG5cbiAgICAgIGlmIChhbmdsZSkge1xuICAgICAgICBjb3MgPSBNYXRoLmNvcyhhbmdsZSk7XG4gICAgICAgIHNpbiA9IE1hdGguc2luKGFuZ2xlKTtcbiAgICAgICAgdDEgPSBhICogY29zICsgYiAqIHNpbjtcbiAgICAgICAgdDIgPSBhMTIgKiBjb3MgKyBhMjIgKiBzaW47XG4gICAgICAgIGIgPSBiICogY29zIC0gYSAqIHNpbjtcbiAgICAgICAgYTIyID0gYTIyICogY29zIC0gYTEyICogc2luO1xuICAgICAgICBhID0gdDE7XG4gICAgICAgIGExMiA9IHQyO1xuICAgICAgfVxuXG4gICAgICBpZiAocm90YXRpb25YICYmIE1hdGguYWJzKHJvdGF0aW9uWCkgKyBNYXRoLmFicyhyb3RhdGlvbikgPiAzNTkuOSkge1xuICAgICAgICAvL3doZW4gcm90YXRpb25ZIGlzIHNldCwgaXQgd2lsbCBvZnRlbiBiZSBwYXJzZWQgYXMgMTgwIGRlZ3JlZXMgZGlmZmVyZW50IHRoYW4gaXQgc2hvdWxkIGJlLCBhbmQgcm90YXRpb25YIGFuZCByb3RhdGlvbiBib3RoIGJlaW5nIDE4MCAoaXQgbG9va3MgdGhlIHNhbWUpLCBzbyB3ZSBhZGp1c3QgZm9yIHRoYXQgaGVyZS5cbiAgICAgICAgcm90YXRpb25YID0gcm90YXRpb24gPSAwO1xuICAgICAgICByb3RhdGlvblkgPSAxODAgLSByb3RhdGlvblk7XG4gICAgICB9XG5cbiAgICAgIHNjYWxlWCA9IF9yb3VuZChNYXRoLnNxcnQoYSAqIGEgKyBiICogYiArIGMgKiBjKSk7XG4gICAgICBzY2FsZVkgPSBfcm91bmQoTWF0aC5zcXJ0KGEyMiAqIGEyMiArIGEzMiAqIGEzMikpO1xuICAgICAgYW5nbGUgPSBfYXRhbjIoYTEyLCBhMjIpO1xuICAgICAgc2tld1ggPSBNYXRoLmFicyhhbmdsZSkgPiAwLjAwMDIgPyBhbmdsZSAqIF9SQUQyREVHIDogMDtcbiAgICAgIHBlcnNwZWN0aXZlID0gYTQzID8gMSAvIChhNDMgPCAwID8gLWE0MyA6IGE0MykgOiAwO1xuICAgIH1cblxuICAgIGlmIChjYWNoZS5zdmcpIHtcbiAgICAgIC8vc2Vuc2UgaWYgdGhlcmUgYXJlIENTUyB0cmFuc2Zvcm1zIGFwcGxpZWQgb24gYW4gU1ZHIGVsZW1lbnQgaW4gd2hpY2ggY2FzZSB3ZSBtdXN0IG92ZXJ3cml0ZSB0aGVtIHdoZW4gcmVuZGVyaW5nLiBUaGUgdHJhbnNmb3JtIGF0dHJpYnV0ZSBpcyBtb3JlIHJlbGlhYmxlIGNyb3NzLWJyb3dzZXIsIGJ1dCB3ZSBjYW4ndCBqdXN0IHJlbW92ZSB0aGUgQ1NTIG9uZXMgYmVjYXVzZSB0aGV5IG1heSBiZSBhcHBsaWVkIGluIGEgQ1NTIHJ1bGUgc29tZXdoZXJlIChub3QganVzdCBpbmxpbmUpLlxuICAgICAgdDEgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIpO1xuICAgICAgY2FjaGUuZm9yY2VDU1MgPSB0YXJnZXQuc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIFwiXCIpIHx8ICFfaXNOdWxsVHJhbnNmb3JtKF9nZXRDb21wdXRlZFByb3BlcnR5KHRhcmdldCwgX3RyYW5zZm9ybVByb3ApKTtcbiAgICAgIHQxICYmIHRhcmdldC5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgdDEpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChNYXRoLmFicyhza2V3WCkgPiA5MCAmJiBNYXRoLmFicyhza2V3WCkgPCAyNzApIHtcbiAgICBpZiAoaW52ZXJ0ZWRTY2FsZVgpIHtcbiAgICAgIHNjYWxlWCAqPSAtMTtcbiAgICAgIHNrZXdYICs9IHJvdGF0aW9uIDw9IDAgPyAxODAgOiAtMTgwO1xuICAgICAgcm90YXRpb24gKz0gcm90YXRpb24gPD0gMCA/IDE4MCA6IC0xODA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNjYWxlWSAqPSAtMTtcbiAgICAgIHNrZXdYICs9IHNrZXdYIDw9IDAgPyAxODAgOiAtMTgwO1xuICAgIH1cbiAgfVxuXG4gIHVuY2FjaGUgPSB1bmNhY2hlIHx8IGNhY2hlLnVuY2FjaGU7XG4gIGNhY2hlLnggPSB4IC0gKChjYWNoZS54UGVyY2VudCA9IHggJiYgKCF1bmNhY2hlICYmIGNhY2hlLnhQZXJjZW50IHx8IChNYXRoLnJvdW5kKHRhcmdldC5vZmZzZXRXaWR0aCAvIDIpID09PSBNYXRoLnJvdW5kKC14KSA/IC01MCA6IDApKSkgPyB0YXJnZXQub2Zmc2V0V2lkdGggKiBjYWNoZS54UGVyY2VudCAvIDEwMCA6IDApICsgcHg7XG4gIGNhY2hlLnkgPSB5IC0gKChjYWNoZS55UGVyY2VudCA9IHkgJiYgKCF1bmNhY2hlICYmIGNhY2hlLnlQZXJjZW50IHx8IChNYXRoLnJvdW5kKHRhcmdldC5vZmZzZXRIZWlnaHQgLyAyKSA9PT0gTWF0aC5yb3VuZCgteSkgPyAtNTAgOiAwKSkpID8gdGFyZ2V0Lm9mZnNldEhlaWdodCAqIGNhY2hlLnlQZXJjZW50IC8gMTAwIDogMCkgKyBweDtcbiAgY2FjaGUueiA9IHogKyBweDtcbiAgY2FjaGUuc2NhbGVYID0gX3JvdW5kKHNjYWxlWCk7XG4gIGNhY2hlLnNjYWxlWSA9IF9yb3VuZChzY2FsZVkpO1xuICBjYWNoZS5yb3RhdGlvbiA9IF9yb3VuZChyb3RhdGlvbikgKyBkZWc7XG4gIGNhY2hlLnJvdGF0aW9uWCA9IF9yb3VuZChyb3RhdGlvblgpICsgZGVnO1xuICBjYWNoZS5yb3RhdGlvblkgPSBfcm91bmQocm90YXRpb25ZKSArIGRlZztcbiAgY2FjaGUuc2tld1ggPSBza2V3WCArIGRlZztcbiAgY2FjaGUuc2tld1kgPSBza2V3WSArIGRlZztcbiAgY2FjaGUudHJhbnNmb3JtUGVyc3BlY3RpdmUgPSBwZXJzcGVjdGl2ZSArIHB4O1xuXG4gIGlmIChjYWNoZS56T3JpZ2luID0gcGFyc2VGbG9hdChvcmlnaW4uc3BsaXQoXCIgXCIpWzJdKSB8fCAwKSB7XG4gICAgc3R5bGVbX3RyYW5zZm9ybU9yaWdpblByb3BdID0gX2ZpcnN0VHdvT25seShvcmlnaW4pO1xuICB9XG5cbiAgY2FjaGUueE9mZnNldCA9IGNhY2hlLnlPZmZzZXQgPSAwO1xuICBjYWNoZS5mb3JjZTNEID0gX2NvbmZpZy5mb3JjZTNEO1xuICBjYWNoZS5yZW5kZXJUcmFuc2Zvcm0gPSBjYWNoZS5zdmcgPyBfcmVuZGVyU1ZHVHJhbnNmb3JtcyA6IF9zdXBwb3J0czNEID8gX3JlbmRlckNTU1RyYW5zZm9ybXMgOiBfcmVuZGVyTm9uM0RUcmFuc2Zvcm1zO1xuICBjYWNoZS51bmNhY2hlID0gMDtcbiAgcmV0dXJuIGNhY2hlO1xufSxcbiAgICBfZmlyc3RUd29Pbmx5ID0gZnVuY3Rpb24gX2ZpcnN0VHdvT25seSh2YWx1ZSkge1xuICByZXR1cm4gKHZhbHVlID0gdmFsdWUuc3BsaXQoXCIgXCIpKVswXSArIFwiIFwiICsgdmFsdWVbMV07XG59LFxuICAgIC8vZm9yIGhhbmRsaW5nIHRyYW5zZm9ybU9yaWdpbiB2YWx1ZXMsIHN0cmlwcGluZyBvdXQgdGhlIDNyZCBkaW1lbnNpb25cbl9hZGRQeFRyYW5zbGF0ZSA9IGZ1bmN0aW9uIF9hZGRQeFRyYW5zbGF0ZSh0YXJnZXQsIHN0YXJ0LCB2YWx1ZSkge1xuICB2YXIgdW5pdCA9IGdldFVuaXQoc3RhcnQpO1xuICByZXR1cm4gX3JvdW5kKHBhcnNlRmxvYXQoc3RhcnQpICsgcGFyc2VGbG9hdChfY29udmVydFRvVW5pdCh0YXJnZXQsIFwieFwiLCB2YWx1ZSArIFwicHhcIiwgdW5pdCkpKSArIHVuaXQ7XG59LFxuICAgIF9yZW5kZXJOb24zRFRyYW5zZm9ybXMgPSBmdW5jdGlvbiBfcmVuZGVyTm9uM0RUcmFuc2Zvcm1zKHJhdGlvLCBjYWNoZSkge1xuICBjYWNoZS56ID0gXCIwcHhcIjtcbiAgY2FjaGUucm90YXRpb25ZID0gY2FjaGUucm90YXRpb25YID0gXCIwZGVnXCI7XG4gIGNhY2hlLmZvcmNlM0QgPSAwO1xuXG4gIF9yZW5kZXJDU1NUcmFuc2Zvcm1zKHJhdGlvLCBjYWNoZSk7XG59LFxuICAgIF96ZXJvRGVnID0gXCIwZGVnXCIsXG4gICAgX3plcm9QeCA9IFwiMHB4XCIsXG4gICAgX2VuZFBhcmVudGhlc2lzID0gXCIpIFwiLFxuICAgIF9yZW5kZXJDU1NUcmFuc2Zvcm1zID0gZnVuY3Rpb24gX3JlbmRlckNTU1RyYW5zZm9ybXMocmF0aW8sIGNhY2hlKSB7XG4gIHZhciBfcmVmID0gY2FjaGUgfHwgdGhpcyxcbiAgICAgIHhQZXJjZW50ID0gX3JlZi54UGVyY2VudCxcbiAgICAgIHlQZXJjZW50ID0gX3JlZi55UGVyY2VudCxcbiAgICAgIHggPSBfcmVmLngsXG4gICAgICB5ID0gX3JlZi55LFxuICAgICAgeiA9IF9yZWYueixcbiAgICAgIHJvdGF0aW9uID0gX3JlZi5yb3RhdGlvbixcbiAgICAgIHJvdGF0aW9uWSA9IF9yZWYucm90YXRpb25ZLFxuICAgICAgcm90YXRpb25YID0gX3JlZi5yb3RhdGlvblgsXG4gICAgICBza2V3WCA9IF9yZWYuc2tld1gsXG4gICAgICBza2V3WSA9IF9yZWYuc2tld1ksXG4gICAgICBzY2FsZVggPSBfcmVmLnNjYWxlWCxcbiAgICAgIHNjYWxlWSA9IF9yZWYuc2NhbGVZLFxuICAgICAgdHJhbnNmb3JtUGVyc3BlY3RpdmUgPSBfcmVmLnRyYW5zZm9ybVBlcnNwZWN0aXZlLFxuICAgICAgZm9yY2UzRCA9IF9yZWYuZm9yY2UzRCxcbiAgICAgIHRhcmdldCA9IF9yZWYudGFyZ2V0LFxuICAgICAgek9yaWdpbiA9IF9yZWYuek9yaWdpbixcbiAgICAgIHRyYW5zZm9ybXMgPSBcIlwiLFxuICAgICAgdXNlM0QgPSBmb3JjZTNEID09PSBcImF1dG9cIiAmJiByYXRpbyAmJiByYXRpbyAhPT0gMSB8fCBmb3JjZTNEID09PSB0cnVlOyAvLyBTYWZhcmkgaGFzIGEgYnVnIHRoYXQgY2F1c2VzIGl0IG5vdCB0byByZW5kZXIgM0QgdHJhbnNmb3JtLW9yaWdpbiB2YWx1ZXMgcHJvcGVybHksIHNvIHdlIGZvcmNlIHRoZSB6IG9yaWdpbiB0byAwLCByZWNvcmQgaXQgaW4gdGhlIGNhY2hlLCBhbmQgdGhlbiBkbyB0aGUgbWF0aCBoZXJlIHRvIG9mZnNldCB0aGUgdHJhbnNsYXRlIHZhbHVlcyBhY2NvcmRpbmdseSAoYmFzaWNhbGx5IGRvIHRoZSAzRCB0cmFuc2Zvcm0tb3JpZ2luIHBhcnQgbWFudWFsbHkpXG5cblxuICBpZiAoek9yaWdpbiAmJiAocm90YXRpb25YICE9PSBfemVyb0RlZyB8fCByb3RhdGlvblkgIT09IF96ZXJvRGVnKSkge1xuICAgIHZhciBhbmdsZSA9IHBhcnNlRmxvYXQocm90YXRpb25ZKSAqIF9ERUcyUkFELFxuICAgICAgICBhMTMgPSBNYXRoLnNpbihhbmdsZSksXG4gICAgICAgIGEzMyA9IE1hdGguY29zKGFuZ2xlKSxcbiAgICAgICAgY29zO1xuXG4gICAgYW5nbGUgPSBwYXJzZUZsb2F0KHJvdGF0aW9uWCkgKiBfREVHMlJBRDtcbiAgICBjb3MgPSBNYXRoLmNvcyhhbmdsZSk7XG4gICAgeCA9IF9hZGRQeFRyYW5zbGF0ZSh0YXJnZXQsIHgsIGExMyAqIGNvcyAqIC16T3JpZ2luKTtcbiAgICB5ID0gX2FkZFB4VHJhbnNsYXRlKHRhcmdldCwgeSwgLU1hdGguc2luKGFuZ2xlKSAqIC16T3JpZ2luKTtcbiAgICB6ID0gX2FkZFB4VHJhbnNsYXRlKHRhcmdldCwgeiwgYTMzICogY29zICogLXpPcmlnaW4gKyB6T3JpZ2luKTtcbiAgfVxuXG4gIGlmICh0cmFuc2Zvcm1QZXJzcGVjdGl2ZSAhPT0gX3plcm9QeCkge1xuICAgIHRyYW5zZm9ybXMgKz0gXCJwZXJzcGVjdGl2ZShcIiArIHRyYW5zZm9ybVBlcnNwZWN0aXZlICsgX2VuZFBhcmVudGhlc2lzO1xuICB9XG5cbiAgaWYgKHhQZXJjZW50IHx8IHlQZXJjZW50KSB7XG4gICAgdHJhbnNmb3JtcyArPSBcInRyYW5zbGF0ZShcIiArIHhQZXJjZW50ICsgXCIlLCBcIiArIHlQZXJjZW50ICsgXCIlKSBcIjtcbiAgfVxuXG4gIGlmICh1c2UzRCB8fCB4ICE9PSBfemVyb1B4IHx8IHkgIT09IF96ZXJvUHggfHwgeiAhPT0gX3plcm9QeCkge1xuICAgIHRyYW5zZm9ybXMgKz0geiAhPT0gX3plcm9QeCB8fCB1c2UzRCA/IFwidHJhbnNsYXRlM2QoXCIgKyB4ICsgXCIsIFwiICsgeSArIFwiLCBcIiArIHogKyBcIikgXCIgOiBcInRyYW5zbGF0ZShcIiArIHggKyBcIiwgXCIgKyB5ICsgX2VuZFBhcmVudGhlc2lzO1xuICB9XG5cbiAgaWYgKHJvdGF0aW9uICE9PSBfemVyb0RlZykge1xuICAgIHRyYW5zZm9ybXMgKz0gXCJyb3RhdGUoXCIgKyByb3RhdGlvbiArIF9lbmRQYXJlbnRoZXNpcztcbiAgfVxuXG4gIGlmIChyb3RhdGlvblkgIT09IF96ZXJvRGVnKSB7XG4gICAgdHJhbnNmb3JtcyArPSBcInJvdGF0ZVkoXCIgKyByb3RhdGlvblkgKyBfZW5kUGFyZW50aGVzaXM7XG4gIH1cblxuICBpZiAocm90YXRpb25YICE9PSBfemVyb0RlZykge1xuICAgIHRyYW5zZm9ybXMgKz0gXCJyb3RhdGVYKFwiICsgcm90YXRpb25YICsgX2VuZFBhcmVudGhlc2lzO1xuICB9XG5cbiAgaWYgKHNrZXdYICE9PSBfemVyb0RlZyB8fCBza2V3WSAhPT0gX3plcm9EZWcpIHtcbiAgICB0cmFuc2Zvcm1zICs9IFwic2tldyhcIiArIHNrZXdYICsgXCIsIFwiICsgc2tld1kgKyBfZW5kUGFyZW50aGVzaXM7XG4gIH1cblxuICBpZiAoc2NhbGVYICE9PSAxIHx8IHNjYWxlWSAhPT0gMSkge1xuICAgIHRyYW5zZm9ybXMgKz0gXCJzY2FsZShcIiArIHNjYWxlWCArIFwiLCBcIiArIHNjYWxlWSArIF9lbmRQYXJlbnRoZXNpcztcbiAgfVxuXG4gIHRhcmdldC5zdHlsZVtfdHJhbnNmb3JtUHJvcF0gPSB0cmFuc2Zvcm1zIHx8IFwidHJhbnNsYXRlKDAsIDApXCI7XG59LFxuICAgIF9yZW5kZXJTVkdUcmFuc2Zvcm1zID0gZnVuY3Rpb24gX3JlbmRlclNWR1RyYW5zZm9ybXMocmF0aW8sIGNhY2hlKSB7XG4gIHZhciBfcmVmMiA9IGNhY2hlIHx8IHRoaXMsXG4gICAgICB4UGVyY2VudCA9IF9yZWYyLnhQZXJjZW50LFxuICAgICAgeVBlcmNlbnQgPSBfcmVmMi55UGVyY2VudCxcbiAgICAgIHggPSBfcmVmMi54LFxuICAgICAgeSA9IF9yZWYyLnksXG4gICAgICByb3RhdGlvbiA9IF9yZWYyLnJvdGF0aW9uLFxuICAgICAgc2tld1ggPSBfcmVmMi5za2V3WCxcbiAgICAgIHNrZXdZID0gX3JlZjIuc2tld1ksXG4gICAgICBzY2FsZVggPSBfcmVmMi5zY2FsZVgsXG4gICAgICBzY2FsZVkgPSBfcmVmMi5zY2FsZVksXG4gICAgICB0YXJnZXQgPSBfcmVmMi50YXJnZXQsXG4gICAgICB4T3JpZ2luID0gX3JlZjIueE9yaWdpbixcbiAgICAgIHlPcmlnaW4gPSBfcmVmMi55T3JpZ2luLFxuICAgICAgeE9mZnNldCA9IF9yZWYyLnhPZmZzZXQsXG4gICAgICB5T2Zmc2V0ID0gX3JlZjIueU9mZnNldCxcbiAgICAgIGZvcmNlQ1NTID0gX3JlZjIuZm9yY2VDU1MsXG4gICAgICB0eCA9IHBhcnNlRmxvYXQoeCksXG4gICAgICB0eSA9IHBhcnNlRmxvYXQoeSksXG4gICAgICBhMTEsXG4gICAgICBhMjEsXG4gICAgICBhMTIsXG4gICAgICBhMjIsXG4gICAgICB0ZW1wO1xuXG4gIHJvdGF0aW9uID0gcGFyc2VGbG9hdChyb3RhdGlvbik7XG4gIHNrZXdYID0gcGFyc2VGbG9hdChza2V3WCk7XG4gIHNrZXdZID0gcGFyc2VGbG9hdChza2V3WSk7XG5cbiAgaWYgKHNrZXdZKSB7XG4gICAgLy9mb3IgcGVyZm9ybWFuY2UgcmVhc29ucywgd2UgY29tYmluZSBhbGwgc2tld2luZyBpbnRvIHRoZSBza2V3WCBhbmQgcm90YXRpb24gdmFsdWVzLiBSZW1lbWJlciwgYSBza2V3WSBvZiAxMCBkZWdyZWVzIGxvb2tzIHRoZSBzYW1lIGFzIGEgcm90YXRpb24gb2YgMTAgZGVncmVlcyBwbHVzIGEgc2tld1ggb2YgMTAgZGVncmVlcy5cbiAgICBza2V3WSA9IHBhcnNlRmxvYXQoc2tld1kpO1xuICAgIHNrZXdYICs9IHNrZXdZO1xuICAgIHJvdGF0aW9uICs9IHNrZXdZO1xuICB9XG5cbiAgaWYgKHJvdGF0aW9uIHx8IHNrZXdYKSB7XG4gICAgcm90YXRpb24gKj0gX0RFRzJSQUQ7XG4gICAgc2tld1ggKj0gX0RFRzJSQUQ7XG4gICAgYTExID0gTWF0aC5jb3Mocm90YXRpb24pICogc2NhbGVYO1xuICAgIGEyMSA9IE1hdGguc2luKHJvdGF0aW9uKSAqIHNjYWxlWDtcbiAgICBhMTIgPSBNYXRoLnNpbihyb3RhdGlvbiAtIHNrZXdYKSAqIC1zY2FsZVk7XG4gICAgYTIyID0gTWF0aC5jb3Mocm90YXRpb24gLSBza2V3WCkgKiBzY2FsZVk7XG5cbiAgICBpZiAoc2tld1gpIHtcbiAgICAgIHNrZXdZICo9IF9ERUcyUkFEO1xuICAgICAgdGVtcCA9IE1hdGgudGFuKHNrZXdYIC0gc2tld1kpO1xuICAgICAgdGVtcCA9IE1hdGguc3FydCgxICsgdGVtcCAqIHRlbXApO1xuICAgICAgYTEyICo9IHRlbXA7XG4gICAgICBhMjIgKj0gdGVtcDtcblxuICAgICAgaWYgKHNrZXdZKSB7XG4gICAgICAgIHRlbXAgPSBNYXRoLnRhbihza2V3WSk7XG4gICAgICAgIHRlbXAgPSBNYXRoLnNxcnQoMSArIHRlbXAgKiB0ZW1wKTtcbiAgICAgICAgYTExICo9IHRlbXA7XG4gICAgICAgIGEyMSAqPSB0ZW1wO1xuICAgICAgfVxuICAgIH1cblxuICAgIGExMSA9IF9yb3VuZChhMTEpO1xuICAgIGEyMSA9IF9yb3VuZChhMjEpO1xuICAgIGExMiA9IF9yb3VuZChhMTIpO1xuICAgIGEyMiA9IF9yb3VuZChhMjIpO1xuICB9IGVsc2Uge1xuICAgIGExMSA9IHNjYWxlWDtcbiAgICBhMjIgPSBzY2FsZVk7XG4gICAgYTIxID0gYTEyID0gMDtcbiAgfVxuXG4gIGlmICh0eCAmJiAhfih4ICsgXCJcIikuaW5kZXhPZihcInB4XCIpIHx8IHR5ICYmICF+KHkgKyBcIlwiKS5pbmRleE9mKFwicHhcIikpIHtcbiAgICB0eCA9IF9jb252ZXJ0VG9Vbml0KHRhcmdldCwgXCJ4XCIsIHgsIFwicHhcIik7XG4gICAgdHkgPSBfY29udmVydFRvVW5pdCh0YXJnZXQsIFwieVwiLCB5LCBcInB4XCIpO1xuICB9XG5cbiAgaWYgKHhPcmlnaW4gfHwgeU9yaWdpbiB8fCB4T2Zmc2V0IHx8IHlPZmZzZXQpIHtcbiAgICB0eCA9IF9yb3VuZCh0eCArIHhPcmlnaW4gLSAoeE9yaWdpbiAqIGExMSArIHlPcmlnaW4gKiBhMTIpICsgeE9mZnNldCk7XG4gICAgdHkgPSBfcm91bmQodHkgKyB5T3JpZ2luIC0gKHhPcmlnaW4gKiBhMjEgKyB5T3JpZ2luICogYTIyKSArIHlPZmZzZXQpO1xuICB9XG5cbiAgaWYgKHhQZXJjZW50IHx8IHlQZXJjZW50KSB7XG4gICAgLy9UaGUgU1ZHIHNwZWMgZG9lc24ndCBzdXBwb3J0IHBlcmNlbnRhZ2UtYmFzZWQgdHJhbnNsYXRpb24gaW4gdGhlIFwidHJhbnNmb3JtXCIgYXR0cmlidXRlLCBzbyB3ZSBtZXJnZSBpdCBpbnRvIHRoZSB0cmFuc2xhdGlvbiB0byBzaW11bGF0ZSBpdC5cbiAgICB0ZW1wID0gdGFyZ2V0LmdldEJCb3goKTtcbiAgICB0eCA9IF9yb3VuZCh0eCArIHhQZXJjZW50IC8gMTAwICogdGVtcC53aWR0aCk7XG4gICAgdHkgPSBfcm91bmQodHkgKyB5UGVyY2VudCAvIDEwMCAqIHRlbXAuaGVpZ2h0KTtcbiAgfVxuXG4gIHRlbXAgPSBcIm1hdHJpeChcIiArIGExMSArIFwiLFwiICsgYTIxICsgXCIsXCIgKyBhMTIgKyBcIixcIiArIGEyMiArIFwiLFwiICsgdHggKyBcIixcIiArIHR5ICsgXCIpXCI7XG4gIHRhcmdldC5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgdGVtcCk7XG4gIGZvcmNlQ1NTICYmICh0YXJnZXQuc3R5bGVbX3RyYW5zZm9ybVByb3BdID0gdGVtcCk7IC8vc29tZSBicm93c2VycyBwcmlvcml0aXplIENTUyB0cmFuc2Zvcm1zIG92ZXIgdGhlIHRyYW5zZm9ybSBhdHRyaWJ1dGUuIFdoZW4gd2Ugc2Vuc2UgdGhhdCB0aGUgdXNlciBoYXMgQ1NTIHRyYW5zZm9ybXMgYXBwbGllZCwgd2UgbXVzdCBvdmVyd3JpdGUgdGhlbSB0aGlzIHdheSAob3RoZXJ3aXNlIHNvbWUgYnJvd3NlciBzaW1wbHkgd29uJ3QgcmVuZGVyIHRoZSAgdHJhbnNmb3JtIGF0dHJpYnV0ZSBjaGFuZ2VzISlcbn0sXG4gICAgX2FkZFJvdGF0aW9uYWxQcm9wVHdlZW4gPSBmdW5jdGlvbiBfYWRkUm90YXRpb25hbFByb3BUd2VlbihwbHVnaW4sIHRhcmdldCwgcHJvcGVydHksIHN0YXJ0TnVtLCBlbmRWYWx1ZSkge1xuICB2YXIgY2FwID0gMzYwLFxuICAgICAgaXNTdHJpbmcgPSBfaXNTdHJpbmcoZW5kVmFsdWUpLFxuICAgICAgZW5kTnVtID0gcGFyc2VGbG9hdChlbmRWYWx1ZSkgKiAoaXNTdHJpbmcgJiYgfmVuZFZhbHVlLmluZGV4T2YoXCJyYWRcIikgPyBfUkFEMkRFRyA6IDEpLFxuICAgICAgY2hhbmdlID0gZW5kTnVtIC0gc3RhcnROdW0sXG4gICAgICBmaW5hbFZhbHVlID0gc3RhcnROdW0gKyBjaGFuZ2UgKyBcImRlZ1wiLFxuICAgICAgZGlyZWN0aW9uLFxuICAgICAgcHQ7XG5cbiAgaWYgKGlzU3RyaW5nKSB7XG4gICAgZGlyZWN0aW9uID0gZW5kVmFsdWUuc3BsaXQoXCJfXCIpWzFdO1xuXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJzaG9ydFwiKSB7XG4gICAgICBjaGFuZ2UgJT0gY2FwO1xuXG4gICAgICBpZiAoY2hhbmdlICE9PSBjaGFuZ2UgJSAoY2FwIC8gMikpIHtcbiAgICAgICAgY2hhbmdlICs9IGNoYW5nZSA8IDAgPyBjYXAgOiAtY2FwO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkaXJlY3Rpb24gPT09IFwiY3dcIiAmJiBjaGFuZ2UgPCAwKSB7XG4gICAgICBjaGFuZ2UgPSAoY2hhbmdlICsgY2FwICogX2JpZ051bSkgJSBjYXAgLSB+fihjaGFuZ2UgLyBjYXApICogY2FwO1xuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcImNjd1wiICYmIGNoYW5nZSA+IDApIHtcbiAgICAgIGNoYW5nZSA9IChjaGFuZ2UgLSBjYXAgKiBfYmlnTnVtKSAlIGNhcCAtIH5+KGNoYW5nZSAvIGNhcCkgKiBjYXA7XG4gICAgfVxuICB9XG5cbiAgcGx1Z2luLl9wdCA9IHB0ID0gbmV3IFByb3BUd2VlbihwbHVnaW4uX3B0LCB0YXJnZXQsIHByb3BlcnR5LCBzdGFydE51bSwgY2hhbmdlLCBfcmVuZGVyUHJvcFdpdGhFbmQpO1xuICBwdC5lID0gZmluYWxWYWx1ZTtcbiAgcHQudSA9IFwiZGVnXCI7XG5cbiAgcGx1Z2luLl9wcm9wcy5wdXNoKHByb3BlcnR5KTtcblxuICByZXR1cm4gcHQ7XG59LFxuICAgIF9hc3NpZ24gPSBmdW5jdGlvbiBfYXNzaWduKHRhcmdldCwgc291cmNlKSB7XG4gIC8vIEludGVybmV0IEV4cGxvcmVyIGRvZXNuJ3QgaGF2ZSBPYmplY3QuYXNzaWduKCksIHNvIHdlIHJlY3JlYXRlIGl0IGhlcmUuXG4gIGZvciAodmFyIHAgaW4gc291cmNlKSB7XG4gICAgdGFyZ2V0W3BdID0gc291cmNlW3BdO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0sXG4gICAgX2FkZFJhd1RyYW5zZm9ybVBUcyA9IGZ1bmN0aW9uIF9hZGRSYXdUcmFuc2Zvcm1QVHMocGx1Z2luLCB0cmFuc2Zvcm1zLCB0YXJnZXQpIHtcbiAgLy9mb3IgaGFuZGxpbmcgY2FzZXMgd2hlcmUgc29tZW9uZSBwYXNzZXMgaW4gYSB3aG9sZSB0cmFuc2Zvcm0gc3RyaW5nLCBsaWtlIHRyYW5zZm9ybTogXCJzY2FsZSgyLCAzKSByb3RhdGUoMjBkZWcpIHRyYW5zbGF0ZVkoMzBlbSlcIlxuICB2YXIgc3RhcnRDYWNoZSA9IF9hc3NpZ24oe30sIHRhcmdldC5fZ3NhcCksXG4gICAgICBleGNsdWRlID0gXCJwZXJzcGVjdGl2ZSxmb3JjZTNELHRyYW5zZm9ybU9yaWdpbixzdmdPcmlnaW5cIixcbiAgICAgIHN0eWxlID0gdGFyZ2V0LnN0eWxlLFxuICAgICAgZW5kQ2FjaGUsXG4gICAgICBwLFxuICAgICAgc3RhcnRWYWx1ZSxcbiAgICAgIGVuZFZhbHVlLFxuICAgICAgc3RhcnROdW0sXG4gICAgICBlbmROdW0sXG4gICAgICBzdGFydFVuaXQsXG4gICAgICBlbmRVbml0O1xuXG4gIGlmIChzdGFydENhY2hlLnN2Zykge1xuICAgIHN0YXJ0VmFsdWUgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIpO1xuICAgIHRhcmdldC5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgXCJcIik7XG4gICAgc3R5bGVbX3RyYW5zZm9ybVByb3BdID0gdHJhbnNmb3JtcztcbiAgICBlbmRDYWNoZSA9IF9wYXJzZVRyYW5zZm9ybSh0YXJnZXQsIDEpO1xuXG4gICAgX3JlbW92ZVByb3BlcnR5KHRhcmdldCwgX3RyYW5zZm9ybVByb3ApO1xuXG4gICAgdGFyZ2V0LnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCBzdGFydFZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdGFydFZhbHVlID0gZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXQpW190cmFuc2Zvcm1Qcm9wXTtcbiAgICBzdHlsZVtfdHJhbnNmb3JtUHJvcF0gPSB0cmFuc2Zvcm1zO1xuICAgIGVuZENhY2hlID0gX3BhcnNlVHJhbnNmb3JtKHRhcmdldCwgMSk7XG4gICAgc3R5bGVbX3RyYW5zZm9ybVByb3BdID0gc3RhcnRWYWx1ZTtcbiAgfVxuXG4gIGZvciAocCBpbiBfdHJhbnNmb3JtUHJvcHMpIHtcbiAgICBzdGFydFZhbHVlID0gc3RhcnRDYWNoZVtwXTtcbiAgICBlbmRWYWx1ZSA9IGVuZENhY2hlW3BdO1xuXG4gICAgaWYgKHN0YXJ0VmFsdWUgIT09IGVuZFZhbHVlICYmIGV4Y2x1ZGUuaW5kZXhPZihwKSA8IDApIHtcbiAgICAgIC8vdHdlZW5pbmcgdG8gbm8gcGVyc3BlY3RpdmUgZ2l2ZXMgdmVyeSB1bmludHVpdGl2ZSByZXN1bHRzIC0ganVzdCBrZWVwIHRoZSBzYW1lIHBlcnNwZWN0aXZlIGluIHRoYXQgY2FzZS5cbiAgICAgIHN0YXJ0VW5pdCA9IGdldFVuaXQoc3RhcnRWYWx1ZSk7XG4gICAgICBlbmRVbml0ID0gZ2V0VW5pdChlbmRWYWx1ZSk7XG4gICAgICBzdGFydE51bSA9IHN0YXJ0VW5pdCAhPT0gZW5kVW5pdCA/IF9jb252ZXJ0VG9Vbml0KHRhcmdldCwgcCwgc3RhcnRWYWx1ZSwgZW5kVW5pdCkgOiBwYXJzZUZsb2F0KHN0YXJ0VmFsdWUpO1xuICAgICAgZW5kTnVtID0gcGFyc2VGbG9hdChlbmRWYWx1ZSk7XG4gICAgICBwbHVnaW4uX3B0ID0gbmV3IFByb3BUd2VlbihwbHVnaW4uX3B0LCBlbmRDYWNoZSwgcCwgc3RhcnROdW0sIGVuZE51bSAtIHN0YXJ0TnVtLCBfcmVuZGVyQ1NTUHJvcCk7XG4gICAgICBwbHVnaW4uX3B0LnUgPSBlbmRVbml0IHx8IDA7XG5cbiAgICAgIHBsdWdpbi5fcHJvcHMucHVzaChwKTtcbiAgICB9XG4gIH1cblxuICBfYXNzaWduKGVuZENhY2hlLCBzdGFydENhY2hlKTtcbn07IC8vIGhhbmRsZSBzcGxpdHRpbmcgYXBhcnQgcGFkZGluZywgbWFyZ2luLCBib3JkZXJXaWR0aCwgYW5kIGJvcmRlclJhZGl1cyBpbnRvIHRoZWlyIDQgY29tcG9uZW50cy4gRmlyZWZveCwgZm9yIGV4YW1wbGUsIHdvbid0IHJlcG9ydCBib3JkZXJSYWRpdXMgY29ycmVjdGx5IC0gaXQgd2lsbCBvbmx5IGRvIGJvcmRlclRvcExlZnRSYWRpdXMgYW5kIHRoZSBvdGhlciBjb3JuZXJzLiBXZSBhbHNvIHdhbnQgdG8gaGFuZGxlIHBhZGRpbmdUb3AsIG1hcmdpbkxlZnQsIGJvcmRlclJpZ2h0V2lkdGgsIGV0Yy5cblxuXG5fZm9yRWFjaE5hbWUoXCJwYWRkaW5nLG1hcmdpbixXaWR0aCxSYWRpdXNcIiwgZnVuY3Rpb24gKG5hbWUsIGluZGV4KSB7XG4gIHZhciB0ID0gXCJUb3BcIixcbiAgICAgIHIgPSBcIlJpZ2h0XCIsXG4gICAgICBiID0gXCJCb3R0b21cIixcbiAgICAgIGwgPSBcIkxlZnRcIixcbiAgICAgIHByb3BzID0gKGluZGV4IDwgMyA/IFt0LCByLCBiLCBsXSA6IFt0ICsgbCwgdCArIHIsIGIgKyByLCBiICsgbF0pLm1hcChmdW5jdGlvbiAoc2lkZSkge1xuICAgIHJldHVybiBpbmRleCA8IDIgPyBuYW1lICsgc2lkZSA6IFwiYm9yZGVyXCIgKyBzaWRlICsgbmFtZTtcbiAgfSk7XG5cbiAgX3NwZWNpYWxQcm9wc1tpbmRleCA+IDEgPyBcImJvcmRlclwiICsgbmFtZSA6IG5hbWVdID0gZnVuY3Rpb24gKHBsdWdpbiwgdGFyZ2V0LCBwcm9wZXJ0eSwgZW5kVmFsdWUsIHR3ZWVuKSB7XG4gICAgdmFyIGEsIHZhcnM7XG5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDQpIHtcbiAgICAgIC8vIGdldHRlciwgcGFzc2VkIHRhcmdldCwgcHJvcGVydHksIGFuZCB1bml0IChmcm9tIF9nZXQoKSlcbiAgICAgIGEgPSBwcm9wcy5tYXAoZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgcmV0dXJuIF9nZXQocGx1Z2luLCBwcm9wLCBwcm9wZXJ0eSk7XG4gICAgICB9KTtcbiAgICAgIHZhcnMgPSBhLmpvaW4oXCIgXCIpO1xuICAgICAgcmV0dXJuIHZhcnMuc3BsaXQoYVswXSkubGVuZ3RoID09PSA1ID8gYVswXSA6IHZhcnM7XG4gICAgfVxuXG4gICAgYSA9IChlbmRWYWx1ZSArIFwiXCIpLnNwbGl0KFwiIFwiKTtcbiAgICB2YXJzID0ge307XG4gICAgcHJvcHMuZm9yRWFjaChmdW5jdGlvbiAocHJvcCwgaSkge1xuICAgICAgcmV0dXJuIHZhcnNbcHJvcF0gPSBhW2ldID0gYVtpXSB8fCBhWyhpIC0gMSkgLyAyIHwgMF07XG4gICAgfSk7XG4gICAgcGx1Z2luLmluaXQodGFyZ2V0LCB2YXJzLCB0d2Vlbik7XG4gIH07XG59KTtcblxuZXhwb3J0IHZhciBDU1NQbHVnaW4gPSB7XG4gIG5hbWU6IFwiY3NzXCIsXG4gIHJlZ2lzdGVyOiBfaW5pdENvcmUsXG4gIHRhcmdldFRlc3Q6IGZ1bmN0aW9uIHRhcmdldFRlc3QodGFyZ2V0KSB7XG4gICAgcmV0dXJuIHRhcmdldC5zdHlsZSAmJiB0YXJnZXQubm9kZVR5cGU7XG4gIH0sXG4gIGluaXQ6IGZ1bmN0aW9uIGluaXQodGFyZ2V0LCB2YXJzLCB0d2VlbiwgaW5kZXgsIHRhcmdldHMpIHtcbiAgICB2YXIgcHJvcHMgPSB0aGlzLl9wcm9wcyxcbiAgICAgICAgc3R5bGUgPSB0YXJnZXQuc3R5bGUsXG4gICAgICAgIHN0YXJ0QXQgPSB0d2Vlbi52YXJzLnN0YXJ0QXQsXG4gICAgICAgIHN0YXJ0VmFsdWUsXG4gICAgICAgIGVuZFZhbHVlLFxuICAgICAgICBlbmROdW0sXG4gICAgICAgIHN0YXJ0TnVtLFxuICAgICAgICB0eXBlLFxuICAgICAgICBzcGVjaWFsUHJvcCxcbiAgICAgICAgcCxcbiAgICAgICAgc3RhcnRVbml0LFxuICAgICAgICBlbmRVbml0LFxuICAgICAgICByZWxhdGl2ZSxcbiAgICAgICAgaXNUcmFuc2Zvcm1SZWxhdGVkLFxuICAgICAgICB0cmFuc2Zvcm1Qcm9wVHdlZW4sXG4gICAgICAgIGNhY2hlLFxuICAgICAgICBzbW9vdGgsXG4gICAgICAgIGhhc1ByaW9yaXR5LFxuICAgICAgICBpbmxpbmVQcm9wcztcbiAgICBfcGx1Z2luSW5pdHRlZCB8fCBfaW5pdENvcmUoKTsgLy8gd2UgbWF5IGNhbGwgaW5pdCgpIG11bHRpcGxlIHRpbWVzIG9uIHRoZSBzYW1lIHBsdWdpbiBpbnN0YW5jZSwgbGlrZSB3aGVuIGFkZGluZyBzcGVjaWFsIHByb3BlcnRpZXMsIHNvIG1ha2Ugc3VyZSB3ZSBkb24ndCBvdmVyd3JpdGUgdGhlIHJldmVydCBkYXRhIG9yIGlubGluZVByb3BzXG5cbiAgICB0aGlzLnN0eWxlcyA9IHRoaXMuc3R5bGVzIHx8IF9nZXRTdHlsZVNhdmVyKHRhcmdldCk7XG4gICAgaW5saW5lUHJvcHMgPSB0aGlzLnN0eWxlcy5wcm9wcztcbiAgICB0aGlzLnR3ZWVuID0gdHdlZW47XG5cbiAgICBmb3IgKHAgaW4gdmFycykge1xuICAgICAgaWYgKHAgPT09IFwiYXV0b1JvdW5kXCIpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGVuZFZhbHVlID0gdmFyc1twXTtcblxuICAgICAgaWYgKF9wbHVnaW5zW3BdICYmIF9jaGVja1BsdWdpbihwLCB2YXJzLCB0d2VlbiwgaW5kZXgsIHRhcmdldCwgdGFyZ2V0cykpIHtcbiAgICAgICAgLy8gcGx1Z2luc1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgdHlwZSA9IHR5cGVvZiBlbmRWYWx1ZTtcbiAgICAgIHNwZWNpYWxQcm9wID0gX3NwZWNpYWxQcm9wc1twXTtcblxuICAgICAgaWYgKHR5cGUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBlbmRWYWx1ZSA9IGVuZFZhbHVlLmNhbGwodHdlZW4sIGluZGV4LCB0YXJnZXQsIHRhcmdldHMpO1xuICAgICAgICB0eXBlID0gdHlwZW9mIGVuZFZhbHVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZSA9PT0gXCJzdHJpbmdcIiAmJiB+ZW5kVmFsdWUuaW5kZXhPZihcInJhbmRvbShcIikpIHtcbiAgICAgICAgZW5kVmFsdWUgPSBfcmVwbGFjZVJhbmRvbShlbmRWYWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzcGVjaWFsUHJvcCkge1xuICAgICAgICBzcGVjaWFsUHJvcCh0aGlzLCB0YXJnZXQsIHAsIGVuZFZhbHVlLCB0d2VlbikgJiYgKGhhc1ByaW9yaXR5ID0gMSk7XG4gICAgICB9IGVsc2UgaWYgKHAuc3Vic3RyKDAsIDIpID09PSBcIi0tXCIpIHtcbiAgICAgICAgLy9DU1MgdmFyaWFibGVcbiAgICAgICAgc3RhcnRWYWx1ZSA9IChnZXRDb21wdXRlZFN0eWxlKHRhcmdldCkuZ2V0UHJvcGVydHlWYWx1ZShwKSArIFwiXCIpLnRyaW0oKTtcbiAgICAgICAgZW5kVmFsdWUgKz0gXCJcIjtcbiAgICAgICAgX2NvbG9yRXhwLmxhc3RJbmRleCA9IDA7XG5cbiAgICAgICAgaWYgKCFfY29sb3JFeHAudGVzdChzdGFydFZhbHVlKSkge1xuICAgICAgICAgIC8vIGNvbG9ycyBkb24ndCBoYXZlIHVuaXRzXG4gICAgICAgICAgc3RhcnRVbml0ID0gZ2V0VW5pdChzdGFydFZhbHVlKTtcbiAgICAgICAgICBlbmRVbml0ID0gZ2V0VW5pdChlbmRWYWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBlbmRVbml0ID8gc3RhcnRVbml0ICE9PSBlbmRVbml0ICYmIChzdGFydFZhbHVlID0gX2NvbnZlcnRUb1VuaXQodGFyZ2V0LCBwLCBzdGFydFZhbHVlLCBlbmRVbml0KSArIGVuZFVuaXQpIDogc3RhcnRVbml0ICYmIChlbmRWYWx1ZSArPSBzdGFydFVuaXQpO1xuICAgICAgICB0aGlzLmFkZChzdHlsZSwgXCJzZXRQcm9wZXJ0eVwiLCBzdGFydFZhbHVlLCBlbmRWYWx1ZSwgaW5kZXgsIHRhcmdldHMsIDAsIDAsIHApO1xuICAgICAgICBwcm9wcy5wdXNoKHApO1xuICAgICAgICBpbmxpbmVQcm9wcy5wdXNoKHAsIHN0eWxlW3BdKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAoc3RhcnRBdCAmJiBwIGluIHN0YXJ0QXQpIHtcbiAgICAgICAgICAvLyBpbiBjYXNlIHNvbWVvbmUgaGFyZC1jb2RlcyBhIGNvbXBsZXggdmFsdWUgYXMgdGhlIHN0YXJ0LCBsaWtlIHRvcDogXCJjYWxjKDJ2aCAvIDIpXCIuIFdpdGhvdXQgdGhpcywgaXQnZCB1c2UgdGhlIGNvbXB1dGVkIHZhbHVlIChhbHdheXMgaW4gcHgpXG4gICAgICAgICAgc3RhcnRWYWx1ZSA9IHR5cGVvZiBzdGFydEF0W3BdID09PSBcImZ1bmN0aW9uXCIgPyBzdGFydEF0W3BdLmNhbGwodHdlZW4sIGluZGV4LCB0YXJnZXQsIHRhcmdldHMpIDogc3RhcnRBdFtwXTtcbiAgICAgICAgICBfaXNTdHJpbmcoc3RhcnRWYWx1ZSkgJiYgfnN0YXJ0VmFsdWUuaW5kZXhPZihcInJhbmRvbShcIikgJiYgKHN0YXJ0VmFsdWUgPSBfcmVwbGFjZVJhbmRvbShzdGFydFZhbHVlKSk7XG4gICAgICAgICAgZ2V0VW5pdChzdGFydFZhbHVlICsgXCJcIikgfHwgKHN0YXJ0VmFsdWUgKz0gX2NvbmZpZy51bml0c1twXSB8fCBnZXRVbml0KF9nZXQodGFyZ2V0LCBwKSkgfHwgXCJcIik7IC8vIGZvciBjYXNlcyB3aGVuIHNvbWVvbmUgcGFzc2VzIGluIGEgdW5pdGxlc3MgdmFsdWUgbGlrZSB7eDogMTAwfTsgaWYgd2UgdHJ5IHNldHRpbmcgdHJhbnNsYXRlKDEwMCwgMHB4KSBpdCB3b24ndCB3b3JrLlxuXG4gICAgICAgICAgKHN0YXJ0VmFsdWUgKyBcIlwiKS5jaGFyQXQoMSkgPT09IFwiPVwiICYmIChzdGFydFZhbHVlID0gX2dldCh0YXJnZXQsIHApKTsgLy8gY2FuJ3Qgd29yayB3aXRoIHJlbGF0aXZlIHZhbHVlc1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0YXJ0VmFsdWUgPSBfZ2V0KHRhcmdldCwgcCk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGFydE51bSA9IHBhcnNlRmxvYXQoc3RhcnRWYWx1ZSk7XG4gICAgICAgIHJlbGF0aXZlID0gdHlwZSA9PT0gXCJzdHJpbmdcIiAmJiBlbmRWYWx1ZS5jaGFyQXQoMSkgPT09IFwiPVwiICYmIGVuZFZhbHVlLnN1YnN0cigwLCAyKTtcbiAgICAgICAgcmVsYXRpdmUgJiYgKGVuZFZhbHVlID0gZW5kVmFsdWUuc3Vic3RyKDIpKTtcbiAgICAgICAgZW5kTnVtID0gcGFyc2VGbG9hdChlbmRWYWx1ZSk7XG5cbiAgICAgICAgaWYgKHAgaW4gX3Byb3BlcnR5QWxpYXNlcykge1xuICAgICAgICAgIGlmIChwID09PSBcImF1dG9BbHBoYVwiKSB7XG4gICAgICAgICAgICAvL3NwZWNpYWwgY2FzZSB3aGVyZSB3ZSBjb250cm9sIHRoZSB2aXNpYmlsaXR5IGFsb25nIHdpdGggb3BhY2l0eS4gV2Ugc3RpbGwgYWxsb3cgdGhlIG9wYWNpdHkgdmFsdWUgdG8gcGFzcyB0aHJvdWdoIGFuZCBnZXQgdHdlZW5lZC5cbiAgICAgICAgICAgIGlmIChzdGFydE51bSA9PT0gMSAmJiBfZ2V0KHRhcmdldCwgXCJ2aXNpYmlsaXR5XCIpID09PSBcImhpZGRlblwiICYmIGVuZE51bSkge1xuICAgICAgICAgICAgICAvL2lmIHZpc2liaWxpdHkgaXMgaW5pdGlhbGx5IHNldCB0byBcImhpZGRlblwiLCB3ZSBzaG91bGQgaW50ZXJwcmV0IHRoYXQgYXMgaW50ZW50IHRvIG1ha2Ugb3BhY2l0eSAwIChhIGNvbnZlbmllbmNlKVxuICAgICAgICAgICAgICBzdGFydE51bSA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlubGluZVByb3BzLnB1c2goXCJ2aXNpYmlsaXR5XCIsIHN0eWxlLnZpc2liaWxpdHkpO1xuXG4gICAgICAgICAgICBfYWRkTm9uVHdlZW5pbmdQVCh0aGlzLCBzdHlsZSwgXCJ2aXNpYmlsaXR5XCIsIHN0YXJ0TnVtID8gXCJpbmhlcml0XCIgOiBcImhpZGRlblwiLCBlbmROdW0gPyBcImluaGVyaXRcIiA6IFwiaGlkZGVuXCIsICFlbmROdW0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChwICE9PSBcInNjYWxlXCIgJiYgcCAhPT0gXCJ0cmFuc2Zvcm1cIikge1xuICAgICAgICAgICAgcCA9IF9wcm9wZXJ0eUFsaWFzZXNbcF07XG4gICAgICAgICAgICB+cC5pbmRleE9mKFwiLFwiKSAmJiAocCA9IHAuc3BsaXQoXCIsXCIpWzBdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpc1RyYW5zZm9ybVJlbGF0ZWQgPSBwIGluIF90cmFuc2Zvcm1Qcm9wczsgLy8tLS0gVFJBTlNGT1JNLVJFTEFURUQgLS0tXG5cbiAgICAgICAgaWYgKGlzVHJhbnNmb3JtUmVsYXRlZCkge1xuICAgICAgICAgIHRoaXMuc3R5bGVzLnNhdmUocCk7XG5cbiAgICAgICAgICBpZiAoIXRyYW5zZm9ybVByb3BUd2Vlbikge1xuICAgICAgICAgICAgY2FjaGUgPSB0YXJnZXQuX2dzYXA7XG4gICAgICAgICAgICBjYWNoZS5yZW5kZXJUcmFuc2Zvcm0gJiYgIXZhcnMucGFyc2VUcmFuc2Zvcm0gfHwgX3BhcnNlVHJhbnNmb3JtKHRhcmdldCwgdmFycy5wYXJzZVRyYW5zZm9ybSk7IC8vIGlmLCBmb3IgZXhhbXBsZSwgZ3NhcC5zZXQoLi4uIHt0cmFuc2Zvcm06XCJ0cmFuc2xhdGVYKDUwdncpXCJ9KSwgdGhlIF9nZXQoKSBjYWxsIGRvZXNuJ3QgcGFyc2UgdGhlIHRyYW5zZm9ybSwgdGh1cyBjYWNoZS5yZW5kZXJUcmFuc2Zvcm0gd29uJ3QgYmUgc2V0IHlldCBzbyBmb3JjZSB0aGUgcGFyc2luZyBvZiB0aGUgdHJhbnNmb3JtIGhlcmUuXG5cbiAgICAgICAgICAgIHNtb290aCA9IHZhcnMuc21vb3RoT3JpZ2luICE9PSBmYWxzZSAmJiBjYWNoZS5zbW9vdGg7XG4gICAgICAgICAgICB0cmFuc2Zvcm1Qcm9wVHdlZW4gPSB0aGlzLl9wdCA9IG5ldyBQcm9wVHdlZW4odGhpcy5fcHQsIHN0eWxlLCBfdHJhbnNmb3JtUHJvcCwgMCwgMSwgY2FjaGUucmVuZGVyVHJhbnNmb3JtLCBjYWNoZSwgMCwgLTEpOyAvL3RoZSBmaXJzdCB0aW1lIHRocm91Z2gsIGNyZWF0ZSB0aGUgcmVuZGVyaW5nIFByb3BUd2VlbiBzbyB0aGF0IGl0IHJ1bnMgTEFTVCAoaW4gdGhlIGxpbmtlZCBsaXN0LCB3ZSBrZWVwIGFkZGluZyB0byB0aGUgYmVnaW5uaW5nKVxuXG4gICAgICAgICAgICB0cmFuc2Zvcm1Qcm9wVHdlZW4uZGVwID0gMTsgLy9mbGFnIGl0IGFzIGRlcGVuZGVudCBzbyB0aGF0IGlmIHRoaW5ncyBnZXQga2lsbGVkL292ZXJ3cml0dGVuIGFuZCB0aGlzIGlzIHRoZSBvbmx5IFByb3BUd2VlbiBsZWZ0LCB3ZSBjYW4gc2FmZWx5IGtpbGwgdGhlIHdob2xlIHR3ZWVuLlxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChwID09PSBcInNjYWxlXCIpIHtcbiAgICAgICAgICAgIHRoaXMuX3B0ID0gbmV3IFByb3BUd2Vlbih0aGlzLl9wdCwgY2FjaGUsIFwic2NhbGVZXCIsIGNhY2hlLnNjYWxlWSwgKHJlbGF0aXZlID8gX3BhcnNlUmVsYXRpdmUoY2FjaGUuc2NhbGVZLCByZWxhdGl2ZSArIGVuZE51bSkgOiBlbmROdW0pIC0gY2FjaGUuc2NhbGVZIHx8IDAsIF9yZW5kZXJDU1NQcm9wKTtcbiAgICAgICAgICAgIHRoaXMuX3B0LnUgPSAwO1xuICAgICAgICAgICAgcHJvcHMucHVzaChcInNjYWxlWVwiLCBwKTtcbiAgICAgICAgICAgIHAgKz0gXCJYXCI7XG4gICAgICAgICAgfSBlbHNlIGlmIChwID09PSBcInRyYW5zZm9ybU9yaWdpblwiKSB7XG4gICAgICAgICAgICBpbmxpbmVQcm9wcy5wdXNoKF90cmFuc2Zvcm1PcmlnaW5Qcm9wLCBzdHlsZVtfdHJhbnNmb3JtT3JpZ2luUHJvcF0pO1xuICAgICAgICAgICAgZW5kVmFsdWUgPSBfY29udmVydEtleXdvcmRzVG9QZXJjZW50YWdlcyhlbmRWYWx1ZSk7IC8vaW4gY2FzZSBzb21ldGhpbmcgbGlrZSBcImxlZnQgdG9wXCIgb3IgXCJib3R0b20gcmlnaHRcIiBpcyBwYXNzZWQgaW4uIENvbnZlcnQgdG8gcGVyY2VudGFnZXMuXG5cbiAgICAgICAgICAgIGlmIChjYWNoZS5zdmcpIHtcbiAgICAgICAgICAgICAgX2FwcGx5U1ZHT3JpZ2luKHRhcmdldCwgZW5kVmFsdWUsIDAsIHNtb290aCwgMCwgdGhpcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBlbmRVbml0ID0gcGFyc2VGbG9hdChlbmRWYWx1ZS5zcGxpdChcIiBcIilbMl0pIHx8IDA7IC8vaGFuZGxlIHRoZSB6T3JpZ2luIHNlcGFyYXRlbHkhXG5cbiAgICAgICAgICAgICAgZW5kVW5pdCAhPT0gY2FjaGUuek9yaWdpbiAmJiBfYWRkTm9uVHdlZW5pbmdQVCh0aGlzLCBjYWNoZSwgXCJ6T3JpZ2luXCIsIGNhY2hlLnpPcmlnaW4sIGVuZFVuaXQpO1xuXG4gICAgICAgICAgICAgIF9hZGROb25Ud2VlbmluZ1BUKHRoaXMsIHN0eWxlLCBwLCBfZmlyc3RUd29Pbmx5KHN0YXJ0VmFsdWUpLCBfZmlyc3RUd29Pbmx5KGVuZFZhbHVlKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH0gZWxzZSBpZiAocCA9PT0gXCJzdmdPcmlnaW5cIikge1xuICAgICAgICAgICAgX2FwcGx5U1ZHT3JpZ2luKHRhcmdldCwgZW5kVmFsdWUsIDEsIHNtb290aCwgMCwgdGhpcyk7XG5cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH0gZWxzZSBpZiAocCBpbiBfcm90YXRpb25hbFByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIF9hZGRSb3RhdGlvbmFsUHJvcFR3ZWVuKHRoaXMsIGNhY2hlLCBwLCBzdGFydE51bSwgcmVsYXRpdmUgPyBfcGFyc2VSZWxhdGl2ZShzdGFydE51bSwgcmVsYXRpdmUgKyBlbmRWYWx1ZSkgOiBlbmRWYWx1ZSk7XG5cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH0gZWxzZSBpZiAocCA9PT0gXCJzbW9vdGhPcmlnaW5cIikge1xuICAgICAgICAgICAgX2FkZE5vblR3ZWVuaW5nUFQodGhpcywgY2FjaGUsIFwic21vb3RoXCIsIGNhY2hlLnNtb290aCwgZW5kVmFsdWUpO1xuXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHAgPT09IFwiZm9yY2UzRFwiKSB7XG4gICAgICAgICAgICBjYWNoZVtwXSA9IGVuZFZhbHVlO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfSBlbHNlIGlmIChwID09PSBcInRyYW5zZm9ybVwiKSB7XG4gICAgICAgICAgICBfYWRkUmF3VHJhbnNmb3JtUFRzKHRoaXMsIGVuZFZhbHVlLCB0YXJnZXQpO1xuXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoIShwIGluIHN0eWxlKSkge1xuICAgICAgICAgIHAgPSBfY2hlY2tQcm9wUHJlZml4KHApIHx8IHA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNUcmFuc2Zvcm1SZWxhdGVkIHx8IChlbmROdW0gfHwgZW5kTnVtID09PSAwKSAmJiAoc3RhcnROdW0gfHwgc3RhcnROdW0gPT09IDApICYmICFfY29tcGxleEV4cC50ZXN0KGVuZFZhbHVlKSAmJiBwIGluIHN0eWxlKSB7XG4gICAgICAgICAgc3RhcnRVbml0ID0gKHN0YXJ0VmFsdWUgKyBcIlwiKS5zdWJzdHIoKHN0YXJ0TnVtICsgXCJcIikubGVuZ3RoKTtcbiAgICAgICAgICBlbmROdW0gfHwgKGVuZE51bSA9IDApOyAvLyBwcm90ZWN0IGFnYWluc3QgTmFOXG5cbiAgICAgICAgICBlbmRVbml0ID0gZ2V0VW5pdChlbmRWYWx1ZSkgfHwgKHAgaW4gX2NvbmZpZy51bml0cyA/IF9jb25maWcudW5pdHNbcF0gOiBzdGFydFVuaXQpO1xuICAgICAgICAgIHN0YXJ0VW5pdCAhPT0gZW5kVW5pdCAmJiAoc3RhcnROdW0gPSBfY29udmVydFRvVW5pdCh0YXJnZXQsIHAsIHN0YXJ0VmFsdWUsIGVuZFVuaXQpKTtcbiAgICAgICAgICB0aGlzLl9wdCA9IG5ldyBQcm9wVHdlZW4odGhpcy5fcHQsIGlzVHJhbnNmb3JtUmVsYXRlZCA/IGNhY2hlIDogc3R5bGUsIHAsIHN0YXJ0TnVtLCAocmVsYXRpdmUgPyBfcGFyc2VSZWxhdGl2ZShzdGFydE51bSwgcmVsYXRpdmUgKyBlbmROdW0pIDogZW5kTnVtKSAtIHN0YXJ0TnVtLCAhaXNUcmFuc2Zvcm1SZWxhdGVkICYmIChlbmRVbml0ID09PSBcInB4XCIgfHwgcCA9PT0gXCJ6SW5kZXhcIikgJiYgdmFycy5hdXRvUm91bmQgIT09IGZhbHNlID8gX3JlbmRlclJvdW5kZWRDU1NQcm9wIDogX3JlbmRlckNTU1Byb3ApO1xuICAgICAgICAgIHRoaXMuX3B0LnUgPSBlbmRVbml0IHx8IDA7XG5cbiAgICAgICAgICBpZiAoc3RhcnRVbml0ICE9PSBlbmRVbml0ICYmIGVuZFVuaXQgIT09IFwiJVwiKSB7XG4gICAgICAgICAgICAvL3doZW4gdGhlIHR3ZWVuIGdvZXMgYWxsIHRoZSB3YXkgYmFjayB0byB0aGUgYmVnaW5uaW5nLCB3ZSBuZWVkIHRvIHJldmVydCBpdCB0byB0aGUgT0xEL09SSUdJTkFMIHZhbHVlICh3aXRoIHRob3NlIHVuaXRzKS4gV2UgcmVjb3JkIHRoYXQgYXMgYSBcImJcIiAoYmVnaW5uaW5nKSBwcm9wZXJ0eSBhbmQgcG9pbnQgdG8gYSByZW5kZXIgbWV0aG9kIHRoYXQgaGFuZGxlcyB0aGF0LiAocGVyZm9ybWFuY2Ugb3B0aW1pemF0aW9uKVxuICAgICAgICAgICAgdGhpcy5fcHQuYiA9IHN0YXJ0VmFsdWU7XG4gICAgICAgICAgICB0aGlzLl9wdC5yID0gX3JlbmRlckNTU1Byb3BXaXRoQmVnaW5uaW5nO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICghKHAgaW4gc3R5bGUpKSB7XG4gICAgICAgICAgaWYgKHAgaW4gdGFyZ2V0KSB7XG4gICAgICAgICAgICAvL21heWJlIGl0J3Mgbm90IGEgc3R5bGUgLSBpdCBjb3VsZCBiZSBhIHByb3BlcnR5IGFkZGVkIGRpcmVjdGx5IHRvIGFuIGVsZW1lbnQgaW4gd2hpY2ggY2FzZSB3ZSdsbCB0cnkgdG8gYW5pbWF0ZSB0aGF0LlxuICAgICAgICAgICAgdGhpcy5hZGQodGFyZ2V0LCBwLCBzdGFydFZhbHVlIHx8IHRhcmdldFtwXSwgcmVsYXRpdmUgPyByZWxhdGl2ZSArIGVuZFZhbHVlIDogZW5kVmFsdWUsIGluZGV4LCB0YXJnZXRzKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX21pc3NpbmdQbHVnaW4ocCwgZW5kVmFsdWUpO1xuXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3R3ZWVuQ29tcGxleENTU1N0cmluZy5jYWxsKHRoaXMsIHRhcmdldCwgcCwgc3RhcnRWYWx1ZSwgcmVsYXRpdmUgPyByZWxhdGl2ZSArIGVuZFZhbHVlIDogZW5kVmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaXNUcmFuc2Zvcm1SZWxhdGVkIHx8IGlubGluZVByb3BzLnB1c2gocCwgc3R5bGVbcF0pO1xuICAgICAgICBwcm9wcy5wdXNoKHApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGhhc1ByaW9yaXR5ICYmIF9zb3J0UHJvcFR3ZWVuc0J5UHJpb3JpdHkodGhpcyk7XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKHJhdGlvLCBkYXRhKSB7XG4gICAgaWYgKGRhdGEudHdlZW4uX3RpbWUgfHwgIV9yZXZlcnRpbmcoKSkge1xuICAgICAgdmFyIHB0ID0gZGF0YS5fcHQ7XG5cbiAgICAgIHdoaWxlIChwdCkge1xuICAgICAgICBwdC5yKHJhdGlvLCBwdC5kKTtcbiAgICAgICAgcHQgPSBwdC5fbmV4dDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZGF0YS5zdHlsZXMucmV2ZXJ0KCk7XG4gICAgfVxuICB9LFxuICBnZXQ6IF9nZXQsXG4gIGFsaWFzZXM6IF9wcm9wZXJ0eUFsaWFzZXMsXG4gIGdldFNldHRlcjogZnVuY3Rpb24gZ2V0U2V0dGVyKHRhcmdldCwgcHJvcGVydHksIHBsdWdpbikge1xuICAgIC8vcmV0dXJucyBhIHNldHRlciBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgdGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUgYW5kIGFwcGxpZXMgaXQgYWNjb3JkaW5nbHkuIFJlbWVtYmVyLCBwcm9wZXJ0aWVzIGxpa2UgXCJ4XCIgYXJlbid0IGFzIHNpbXBsZSBhcyB0YXJnZXQuc3R5bGUucHJvcGVydHkgPSB2YWx1ZSBiZWNhdXNlIHRoZXkndmUgZ290IHRvIGJlIGFwcGxpZWQgdG8gYSBwcm94eSBvYmplY3QgYW5kIHRoZW4gbWVyZ2VkIGludG8gYSB0cmFuc2Zvcm0gc3RyaW5nIGluIGEgcmVuZGVyZXIuXG4gICAgdmFyIHAgPSBfcHJvcGVydHlBbGlhc2VzW3Byb3BlcnR5XTtcbiAgICBwICYmIHAuaW5kZXhPZihcIixcIikgPCAwICYmIChwcm9wZXJ0eSA9IHApO1xuICAgIHJldHVybiBwcm9wZXJ0eSBpbiBfdHJhbnNmb3JtUHJvcHMgJiYgcHJvcGVydHkgIT09IF90cmFuc2Zvcm1PcmlnaW5Qcm9wICYmICh0YXJnZXQuX2dzYXAueCB8fCBfZ2V0KHRhcmdldCwgXCJ4XCIpKSA/IHBsdWdpbiAmJiBfcmVjZW50U2V0dGVyUGx1Z2luID09PSBwbHVnaW4gPyBwcm9wZXJ0eSA9PT0gXCJzY2FsZVwiID8gX3NldHRlclNjYWxlIDogX3NldHRlclRyYW5zZm9ybSA6IChfcmVjZW50U2V0dGVyUGx1Z2luID0gcGx1Z2luIHx8IHt9KSAmJiAocHJvcGVydHkgPT09IFwic2NhbGVcIiA/IF9zZXR0ZXJTY2FsZVdpdGhSZW5kZXIgOiBfc2V0dGVyVHJhbnNmb3JtV2l0aFJlbmRlcikgOiB0YXJnZXQuc3R5bGUgJiYgIV9pc1VuZGVmaW5lZCh0YXJnZXQuc3R5bGVbcHJvcGVydHldKSA/IF9zZXR0ZXJDU1NTdHlsZSA6IH5wcm9wZXJ0eS5pbmRleE9mKFwiLVwiKSA/IF9zZXR0ZXJDU1NQcm9wIDogX2dldFNldHRlcih0YXJnZXQsIHByb3BlcnR5KTtcbiAgfSxcbiAgY29yZToge1xuICAgIF9yZW1vdmVQcm9wZXJ0eTogX3JlbW92ZVByb3BlcnR5LFxuICAgIF9nZXRNYXRyaXg6IF9nZXRNYXRyaXhcbiAgfVxufTtcbmdzYXAudXRpbHMuY2hlY2tQcmVmaXggPSBfY2hlY2tQcm9wUHJlZml4O1xuZ3NhcC5jb3JlLmdldFN0eWxlU2F2ZXIgPSBfZ2V0U3R5bGVTYXZlcjtcblxuKGZ1bmN0aW9uIChwb3NpdGlvbkFuZFNjYWxlLCByb3RhdGlvbiwgb3RoZXJzLCBhbGlhc2VzKSB7XG4gIHZhciBhbGwgPSBfZm9yRWFjaE5hbWUocG9zaXRpb25BbmRTY2FsZSArIFwiLFwiICsgcm90YXRpb24gKyBcIixcIiArIG90aGVycywgZnVuY3Rpb24gKG5hbWUpIHtcbiAgICBfdHJhbnNmb3JtUHJvcHNbbmFtZV0gPSAxO1xuICB9KTtcblxuICBfZm9yRWFjaE5hbWUocm90YXRpb24sIGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgX2NvbmZpZy51bml0c1tuYW1lXSA9IFwiZGVnXCI7XG4gICAgX3JvdGF0aW9uYWxQcm9wZXJ0aWVzW25hbWVdID0gMTtcbiAgfSk7XG5cbiAgX3Byb3BlcnR5QWxpYXNlc1thbGxbMTNdXSA9IHBvc2l0aW9uQW5kU2NhbGUgKyBcIixcIiArIHJvdGF0aW9uO1xuXG4gIF9mb3JFYWNoTmFtZShhbGlhc2VzLCBmdW5jdGlvbiAobmFtZSkge1xuICAgIHZhciBzcGxpdCA9IG5hbWUuc3BsaXQoXCI6XCIpO1xuICAgIF9wcm9wZXJ0eUFsaWFzZXNbc3BsaXRbMV1dID0gYWxsW3NwbGl0WzBdXTtcbiAgfSk7XG59KShcIngseSx6LHNjYWxlLHNjYWxlWCxzY2FsZVkseFBlcmNlbnQseVBlcmNlbnRcIiwgXCJyb3RhdGlvbixyb3RhdGlvblgscm90YXRpb25ZLHNrZXdYLHNrZXdZXCIsIFwidHJhbnNmb3JtLHRyYW5zZm9ybU9yaWdpbixzdmdPcmlnaW4sZm9yY2UzRCxzbW9vdGhPcmlnaW4sdHJhbnNmb3JtUGVyc3BlY3RpdmVcIiwgXCIwOnRyYW5zbGF0ZVgsMTp0cmFuc2xhdGVZLDI6dHJhbnNsYXRlWiw4OnJvdGF0ZSw4OnJvdGF0aW9uWiw4OnJvdGF0ZVosOTpyb3RhdGVYLDEwOnJvdGF0ZVlcIik7XG5cbl9mb3JFYWNoTmFtZShcIngseSx6LHRvcCxyaWdodCxib3R0b20sbGVmdCx3aWR0aCxoZWlnaHQsZm9udFNpemUscGFkZGluZyxtYXJnaW4scGVyc3BlY3RpdmVcIiwgZnVuY3Rpb24gKG5hbWUpIHtcbiAgX2NvbmZpZy51bml0c1tuYW1lXSA9IFwicHhcIjtcbn0pO1xuXG5nc2FwLnJlZ2lzdGVyUGx1Z2luKENTU1BsdWdpbik7XG5leHBvcnQgeyBDU1NQbHVnaW4gYXMgZGVmYXVsdCwgX2dldEJCb3gsIF9jcmVhdGVFbGVtZW50LCBfY2hlY2tQcm9wUHJlZml4IGFzIGNoZWNrUHJlZml4IH07IiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpOyBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzczsgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vKiFcbiAqIEdTQVAgMy4xMS4wXG4gKiBodHRwczovL2dyZWVuc29jay5jb21cbiAqXG4gKiBAbGljZW5zZSBDb3B5cmlnaHQgMjAwOC0yMDIyLCBHcmVlblNvY2suIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBTdWJqZWN0IHRvIHRoZSB0ZXJtcyBhdCBodHRwczovL2dyZWVuc29jay5jb20vc3RhbmRhcmQtbGljZW5zZSBvciBmb3JcbiAqIENsdWIgR3JlZW5Tb2NrIG1lbWJlcnMsIHRoZSBhZ3JlZW1lbnQgaXNzdWVkIHdpdGggdGhhdCBtZW1iZXJzaGlwLlxuICogQGF1dGhvcjogSmFjayBEb3lsZSwgamFja0BncmVlbnNvY2suY29tXG4qL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xudmFyIF9jb25maWcgPSB7XG4gIGF1dG9TbGVlcDogMTIwLFxuICBmb3JjZTNEOiBcImF1dG9cIixcbiAgbnVsbFRhcmdldFdhcm46IDEsXG4gIHVuaXRzOiB7XG4gICAgbGluZUhlaWdodDogXCJcIlxuICB9XG59LFxuICAgIF9kZWZhdWx0cyA9IHtcbiAgZHVyYXRpb246IC41LFxuICBvdmVyd3JpdGU6IGZhbHNlLFxuICBkZWxheTogMFxufSxcbiAgICBfc3VwcHJlc3NPdmVyd3JpdGVzLFxuICAgIF9yZXZlcnRpbmcsXG4gICAgX2NvbnRleHQsXG4gICAgX2JpZ051bSA9IDFlOCxcbiAgICBfdGlueU51bSA9IDEgLyBfYmlnTnVtLFxuICAgIF8yUEkgPSBNYXRoLlBJICogMixcbiAgICBfSEFMRl9QSSA9IF8yUEkgLyA0LFxuICAgIF9nc0lEID0gMCxcbiAgICBfc3FydCA9IE1hdGguc3FydCxcbiAgICBfY29zID0gTWF0aC5jb3MsXG4gICAgX3NpbiA9IE1hdGguc2luLFxuICAgIF9pc1N0cmluZyA9IGZ1bmN0aW9uIF9pc1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiO1xufSxcbiAgICBfaXNGdW5jdGlvbiA9IGZ1bmN0aW9uIF9pc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIjtcbn0sXG4gICAgX2lzTnVtYmVyID0gZnVuY3Rpb24gX2lzTnVtYmVyKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCI7XG59LFxuICAgIF9pc1VuZGVmaW5lZCA9IGZ1bmN0aW9uIF9pc1VuZGVmaW5lZCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcInVuZGVmaW5lZFwiO1xufSxcbiAgICBfaXNPYmplY3QgPSBmdW5jdGlvbiBfaXNPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIjtcbn0sXG4gICAgX2lzTm90RmFsc2UgPSBmdW5jdGlvbiBfaXNOb3RGYWxzZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IGZhbHNlO1xufSxcbiAgICBfd2luZG93RXhpc3RzID0gZnVuY3Rpb24gX3dpbmRvd0V4aXN0cygpIHtcbiAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCI7XG59LFxuICAgIF9pc0Z1bmNPclN0cmluZyA9IGZ1bmN0aW9uIF9pc0Z1bmNPclN0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gX2lzRnVuY3Rpb24odmFsdWUpIHx8IF9pc1N0cmluZyh2YWx1ZSk7XG59LFxuICAgIF9pc1R5cGVkQXJyYXkgPSB0eXBlb2YgQXJyYXlCdWZmZXIgPT09IFwiZnVuY3Rpb25cIiAmJiBBcnJheUJ1ZmZlci5pc1ZpZXcgfHwgZnVuY3Rpb24gKCkge30sXG4gICAgLy8gbm90ZTogSUUxMCBoYXMgQXJyYXlCdWZmZXIsIGJ1dCBOT1QgQXJyYXlCdWZmZXIuaXNWaWV3KCkuXG5faXNBcnJheSA9IEFycmF5LmlzQXJyYXksXG4gICAgX3N0cmljdE51bUV4cCA9IC8oPzotP1xcLj9cXGR8XFwuKSsvZ2ksXG4gICAgLy9vbmx5IG51bWJlcnMgKGluY2x1ZGluZyBuZWdhdGl2ZXMgYW5kIGRlY2ltYWxzKSBidXQgTk9UIHJlbGF0aXZlIHZhbHVlcy5cbl9udW1FeHAgPSAvWy0rPS5dKlxcZCtbLmVcXC0rXSpcXGQqW2VcXC0rXSpcXGQqL2csXG4gICAgLy9maW5kcyBhbnkgbnVtYmVycywgaW5jbHVkaW5nIG9uZXMgdGhhdCBzdGFydCB3aXRoICs9IG9yIC09LCBuZWdhdGl2ZSBudW1iZXJzLCBhbmQgb25lcyBpbiBzY2llbnRpZmljIG5vdGF0aW9uIGxpa2UgMWUtOC5cbl9udW1XaXRoVW5pdEV4cCA9IC9bLSs9Ll0qXFxkK1suZS1dKlxcZCpbYS16JV0qL2csXG4gICAgX2NvbXBsZXhTdHJpbmdOdW1FeHAgPSAvWy0rPS5dKlxcZCtcXC4/XFxkKig/OmUtfGVcXCspP1xcZCovZ2ksXG4gICAgLy9kdXBsaWNhdGUgc28gdGhhdCB3aGlsZSB3ZSdyZSBsb29waW5nIHRocm91Z2ggbWF0Y2hlcyBmcm9tIGV4ZWMoKSwgaXQgZG9lc24ndCBjb250YW1pbmF0ZSB0aGUgbGFzdEluZGV4IG9mIF9udW1FeHAgd2hpY2ggd2UgdXNlIHRvIHNlYXJjaCBmb3IgY29sb3JzIHRvby5cbl9yZWxFeHAgPSAvWystXT0tP1suXFxkXSsvLFxuICAgIF9kZWxpbWl0ZWRWYWx1ZUV4cCA9IC9bXiwnXCJcXFtcXF1cXHNdKy9naSxcbiAgICAvLyBwcmV2aW91c2x5IC9bI1xcLSsuXSpcXGJbYS16XFxkXFwtPSslLl0rL2dpIGJ1dCBkaWRuJ3QgY2F0Y2ggc3BlY2lhbCBjaGFyYWN0ZXJzLlxuX3VuaXRFeHAgPSAvXlsrXFwtPWVcXHNcXGRdKlxcZCtbLlxcZF0qKFthLXpdKnwlKVxccyokL2ksXG4gICAgX2dsb2JhbFRpbWVsaW5lLFxuICAgIF93aW4sXG4gICAgX2NvcmVJbml0dGVkLFxuICAgIF9kb2MsXG4gICAgX2dsb2JhbHMgPSB7fSxcbiAgICBfaW5zdGFsbFNjb3BlID0ge30sXG4gICAgX2NvcmVSZWFkeSxcbiAgICBfaW5zdGFsbCA9IGZ1bmN0aW9uIF9pbnN0YWxsKHNjb3BlKSB7XG4gIHJldHVybiAoX2luc3RhbGxTY29wZSA9IF9tZXJnZShzY29wZSwgX2dsb2JhbHMpKSAmJiBnc2FwO1xufSxcbiAgICBfbWlzc2luZ1BsdWdpbiA9IGZ1bmN0aW9uIF9taXNzaW5nUGx1Z2luKHByb3BlcnR5LCB2YWx1ZSkge1xuICByZXR1cm4gY29uc29sZS53YXJuKFwiSW52YWxpZCBwcm9wZXJ0eVwiLCBwcm9wZXJ0eSwgXCJzZXQgdG9cIiwgdmFsdWUsIFwiTWlzc2luZyBwbHVnaW4/IGdzYXAucmVnaXN0ZXJQbHVnaW4oKVwiKTtcbn0sXG4gICAgX3dhcm4gPSBmdW5jdGlvbiBfd2FybihtZXNzYWdlLCBzdXBwcmVzcykge1xuICByZXR1cm4gIXN1cHByZXNzICYmIGNvbnNvbGUud2FybihtZXNzYWdlKTtcbn0sXG4gICAgX2FkZEdsb2JhbCA9IGZ1bmN0aW9uIF9hZGRHbG9iYWwobmFtZSwgb2JqKSB7XG4gIHJldHVybiBuYW1lICYmIChfZ2xvYmFsc1tuYW1lXSA9IG9iaikgJiYgX2luc3RhbGxTY29wZSAmJiAoX2luc3RhbGxTY29wZVtuYW1lXSA9IG9iaikgfHwgX2dsb2JhbHM7XG59LFxuICAgIF9lbXB0eUZ1bmMgPSBmdW5jdGlvbiBfZW1wdHlGdW5jKCkge1xuICByZXR1cm4gMDtcbn0sXG4gICAgX3N0YXJ0QXRSZXZlcnRDb25maWcgPSB7XG4gIHN1cHByZXNzRXZlbnRzOiB0cnVlLFxuICBpc1N0YXJ0OiB0cnVlXG59LFxuICAgIF9yZXZlcnRDb25maWcgPSB7XG4gIHN1cHByZXNzRXZlbnRzOiB0cnVlXG59LFxuICAgIF9yZXNlcnZlZFByb3BzID0ge30sXG4gICAgX2xhenlUd2VlbnMgPSBbXSxcbiAgICBfbGF6eUxvb2t1cCA9IHt9LFxuICAgIF9sYXN0UmVuZGVyZWRGcmFtZSxcbiAgICBfcGx1Z2lucyA9IHt9LFxuICAgIF9lZmZlY3RzID0ge30sXG4gICAgX25leHRHQ0ZyYW1lID0gMzAsXG4gICAgX2hhcm5lc3NQbHVnaW5zID0gW10sXG4gICAgX2NhbGxiYWNrTmFtZXMgPSBcIlwiLFxuICAgIF9oYXJuZXNzID0gZnVuY3Rpb24gX2hhcm5lc3ModGFyZ2V0cykge1xuICB2YXIgdGFyZ2V0ID0gdGFyZ2V0c1swXSxcbiAgICAgIGhhcm5lc3NQbHVnaW4sXG4gICAgICBpO1xuICBfaXNPYmplY3QodGFyZ2V0KSB8fCBfaXNGdW5jdGlvbih0YXJnZXQpIHx8ICh0YXJnZXRzID0gW3RhcmdldHNdKTtcblxuICBpZiAoIShoYXJuZXNzUGx1Z2luID0gKHRhcmdldC5fZ3NhcCB8fCB7fSkuaGFybmVzcykpIHtcbiAgICAvLyBmaW5kIHRoZSBmaXJzdCB0YXJnZXQgd2l0aCBhIGhhcm5lc3MuIFdlIGFzc3VtZSB0YXJnZXRzIHBhc3NlZCBpbnRvIGFuIGFuaW1hdGlvbiB3aWxsIGJlIG9mIHNpbWlsYXIgdHlwZSwgbWVhbmluZyB0aGUgc2FtZSBraW5kIG9mIGhhcm5lc3MgY2FuIGJlIHVzZWQgZm9yIHRoZW0gYWxsIChwZXJmb3JtYW5jZSBvcHRpbWl6YXRpb24pXG4gICAgaSA9IF9oYXJuZXNzUGx1Z2lucy5sZW5ndGg7XG5cbiAgICB3aGlsZSAoaS0tICYmICFfaGFybmVzc1BsdWdpbnNbaV0udGFyZ2V0VGVzdCh0YXJnZXQpKSB7fVxuXG4gICAgaGFybmVzc1BsdWdpbiA9IF9oYXJuZXNzUGx1Z2luc1tpXTtcbiAgfVxuXG4gIGkgPSB0YXJnZXRzLmxlbmd0aDtcblxuICB3aGlsZSAoaS0tKSB7XG4gICAgdGFyZ2V0c1tpXSAmJiAodGFyZ2V0c1tpXS5fZ3NhcCB8fCAodGFyZ2V0c1tpXS5fZ3NhcCA9IG5ldyBHU0NhY2hlKHRhcmdldHNbaV0sIGhhcm5lc3NQbHVnaW4pKSkgfHwgdGFyZ2V0cy5zcGxpY2UoaSwgMSk7XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0cztcbn0sXG4gICAgX2dldENhY2hlID0gZnVuY3Rpb24gX2dldENhY2hlKHRhcmdldCkge1xuICByZXR1cm4gdGFyZ2V0Ll9nc2FwIHx8IF9oYXJuZXNzKHRvQXJyYXkodGFyZ2V0KSlbMF0uX2dzYXA7XG59LFxuICAgIF9nZXRQcm9wZXJ0eSA9IGZ1bmN0aW9uIF9nZXRQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5LCB2KSB7XG4gIHJldHVybiAodiA9IHRhcmdldFtwcm9wZXJ0eV0pICYmIF9pc0Z1bmN0aW9uKHYpID8gdGFyZ2V0W3Byb3BlcnR5XSgpIDogX2lzVW5kZWZpbmVkKHYpICYmIHRhcmdldC5nZXRBdHRyaWJ1dGUgJiYgdGFyZ2V0LmdldEF0dHJpYnV0ZShwcm9wZXJ0eSkgfHwgdjtcbn0sXG4gICAgX2ZvckVhY2hOYW1lID0gZnVuY3Rpb24gX2ZvckVhY2hOYW1lKG5hbWVzLCBmdW5jKSB7XG4gIHJldHVybiAobmFtZXMgPSBuYW1lcy5zcGxpdChcIixcIikpLmZvckVhY2goZnVuYykgfHwgbmFtZXM7XG59LFxuICAgIC8vc3BsaXQgYSBjb21tYS1kZWxpbWl0ZWQgbGlzdCBvZiBuYW1lcyBpbnRvIGFuIGFycmF5LCB0aGVuIHJ1biBhIGZvckVhY2goKSBmdW5jdGlvbiBhbmQgcmV0dXJuIHRoZSBzcGxpdCBhcnJheSAodGhpcyBpcyBqdXN0IGEgd2F5IHRvIGNvbnNvbGlkYXRlL3Nob3J0ZW4gc29tZSBjb2RlKS5cbl9yb3VuZCA9IGZ1bmN0aW9uIF9yb3VuZCh2YWx1ZSkge1xuICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSAqIDEwMDAwMCkgLyAxMDAwMDAgfHwgMDtcbn0sXG4gICAgX3JvdW5kUHJlY2lzZSA9IGZ1bmN0aW9uIF9yb3VuZFByZWNpc2UodmFsdWUpIHtcbiAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUgKiAxMDAwMDAwMCkgLyAxMDAwMDAwMCB8fCAwO1xufSxcbiAgICAvLyBpbmNyZWFzZWQgcHJlY2lzaW9uIG1vc3RseSBmb3IgdGltaW5nIHZhbHVlcy5cbl9wYXJzZVJlbGF0aXZlID0gZnVuY3Rpb24gX3BhcnNlUmVsYXRpdmUoc3RhcnQsIHZhbHVlKSB7XG4gIHZhciBvcGVyYXRvciA9IHZhbHVlLmNoYXJBdCgwKSxcbiAgICAgIGVuZCA9IHBhcnNlRmxvYXQodmFsdWUuc3Vic3RyKDIpKTtcbiAgc3RhcnQgPSBwYXJzZUZsb2F0KHN0YXJ0KTtcbiAgcmV0dXJuIG9wZXJhdG9yID09PSBcIitcIiA/IHN0YXJ0ICsgZW5kIDogb3BlcmF0b3IgPT09IFwiLVwiID8gc3RhcnQgLSBlbmQgOiBvcGVyYXRvciA9PT0gXCIqXCIgPyBzdGFydCAqIGVuZCA6IHN0YXJ0IC8gZW5kO1xufSxcbiAgICBfYXJyYXlDb250YWluc0FueSA9IGZ1bmN0aW9uIF9hcnJheUNvbnRhaW5zQW55KHRvU2VhcmNoLCB0b0ZpbmQpIHtcbiAgLy9zZWFyY2hlcyBvbmUgYXJyYXkgdG8gZmluZCBtYXRjaGVzIGZvciBhbnkgb2YgdGhlIGl0ZW1zIGluIHRoZSB0b0ZpbmQgYXJyYXkuIEFzIHNvb24gYXMgb25lIGlzIGZvdW5kLCBpdCByZXR1cm5zIHRydWUuIEl0IGRvZXMgTk9UIHJldHVybiBhbGwgdGhlIG1hdGNoZXM7IGl0J3Mgc2ltcGx5IGEgYm9vbGVhbiBzZWFyY2guXG4gIHZhciBsID0gdG9GaW5kLmxlbmd0aCxcbiAgICAgIGkgPSAwO1xuXG4gIGZvciAoOyB0b1NlYXJjaC5pbmRleE9mKHRvRmluZFtpXSkgPCAwICYmICsraSA8IGw7KSB7fVxuXG4gIHJldHVybiBpIDwgbDtcbn0sXG4gICAgX2xhenlSZW5kZXIgPSBmdW5jdGlvbiBfbGF6eVJlbmRlcigpIHtcbiAgdmFyIGwgPSBfbGF6eVR3ZWVucy5sZW5ndGgsXG4gICAgICBhID0gX2xhenlUd2VlbnMuc2xpY2UoMCksXG4gICAgICBpLFxuICAgICAgdHdlZW47XG5cbiAgX2xhenlMb29rdXAgPSB7fTtcbiAgX2xhenlUd2VlbnMubGVuZ3RoID0gMDtcblxuICBmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgdHdlZW4gPSBhW2ldO1xuICAgIHR3ZWVuICYmIHR3ZWVuLl9sYXp5ICYmICh0d2Vlbi5yZW5kZXIodHdlZW4uX2xhenlbMF0sIHR3ZWVuLl9sYXp5WzFdLCB0cnVlKS5fbGF6eSA9IDApO1xuICB9XG59LFxuICAgIF9sYXp5U2FmZVJlbmRlciA9IGZ1bmN0aW9uIF9sYXp5U2FmZVJlbmRlcihhbmltYXRpb24sIHRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSkge1xuICBfbGF6eVR3ZWVucy5sZW5ndGggJiYgX2xhenlSZW5kZXIoKTtcbiAgYW5pbWF0aW9uLnJlbmRlcih0aW1lLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UgfHwgX3JldmVydGluZyk7XG4gIF9sYXp5VHdlZW5zLmxlbmd0aCAmJiBfbGF6eVJlbmRlcigpOyAvL2luIGNhc2UgcmVuZGVyaW5nIGNhdXNlZCBhbnkgdHdlZW5zIHRvIGxhenktaW5pdCwgd2Ugc2hvdWxkIHJlbmRlciB0aGVtIGJlY2F1c2UgdHlwaWNhbGx5IHdoZW4gc29tZW9uZSBjYWxscyBzZWVrKCkgb3IgdGltZSgpIG9yIHByb2dyZXNzKCksIHRoZXkgZXhwZWN0IGFuIGltbWVkaWF0ZSByZW5kZXIuXG59LFxuICAgIF9udW1lcmljSWZQb3NzaWJsZSA9IGZ1bmN0aW9uIF9udW1lcmljSWZQb3NzaWJsZSh2YWx1ZSkge1xuICB2YXIgbiA9IHBhcnNlRmxvYXQodmFsdWUpO1xuICByZXR1cm4gKG4gfHwgbiA9PT0gMCkgJiYgKHZhbHVlICsgXCJcIikubWF0Y2goX2RlbGltaXRlZFZhbHVlRXhwKS5sZW5ndGggPCAyID8gbiA6IF9pc1N0cmluZyh2YWx1ZSkgPyB2YWx1ZS50cmltKCkgOiB2YWx1ZTtcbn0sXG4gICAgX3Bhc3NUaHJvdWdoID0gZnVuY3Rpb24gX3Bhc3NUaHJvdWdoKHApIHtcbiAgcmV0dXJuIHA7XG59LFxuICAgIF9zZXREZWZhdWx0cyA9IGZ1bmN0aW9uIF9zZXREZWZhdWx0cyhvYmosIGRlZmF1bHRzKSB7XG4gIGZvciAodmFyIHAgaW4gZGVmYXVsdHMpIHtcbiAgICBwIGluIG9iaiB8fCAob2JqW3BdID0gZGVmYXVsdHNbcF0pO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0sXG4gICAgX3NldEtleWZyYW1lRGVmYXVsdHMgPSBmdW5jdGlvbiBfc2V0S2V5ZnJhbWVEZWZhdWx0cyhleGNsdWRlRHVyYXRpb24pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChvYmosIGRlZmF1bHRzKSB7XG4gICAgZm9yICh2YXIgcCBpbiBkZWZhdWx0cykge1xuICAgICAgcCBpbiBvYmogfHwgcCA9PT0gXCJkdXJhdGlvblwiICYmIGV4Y2x1ZGVEdXJhdGlvbiB8fCBwID09PSBcImVhc2VcIiB8fCAob2JqW3BdID0gZGVmYXVsdHNbcF0pO1xuICAgIH1cbiAgfTtcbn0sXG4gICAgX21lcmdlID0gZnVuY3Rpb24gX21lcmdlKGJhc2UsIHRvTWVyZ2UpIHtcbiAgZm9yICh2YXIgcCBpbiB0b01lcmdlKSB7XG4gICAgYmFzZVtwXSA9IHRvTWVyZ2VbcF07XG4gIH1cblxuICByZXR1cm4gYmFzZTtcbn0sXG4gICAgX21lcmdlRGVlcCA9IGZ1bmN0aW9uIF9tZXJnZURlZXAoYmFzZSwgdG9NZXJnZSkge1xuICBmb3IgKHZhciBwIGluIHRvTWVyZ2UpIHtcbiAgICBwICE9PSBcIl9fcHJvdG9fX1wiICYmIHAgIT09IFwiY29uc3RydWN0b3JcIiAmJiBwICE9PSBcInByb3RvdHlwZVwiICYmIChiYXNlW3BdID0gX2lzT2JqZWN0KHRvTWVyZ2VbcF0pID8gX21lcmdlRGVlcChiYXNlW3BdIHx8IChiYXNlW3BdID0ge30pLCB0b01lcmdlW3BdKSA6IHRvTWVyZ2VbcF0pO1xuICB9XG5cbiAgcmV0dXJuIGJhc2U7XG59LFxuICAgIF9jb3B5RXhjbHVkaW5nID0gZnVuY3Rpb24gX2NvcHlFeGNsdWRpbmcob2JqLCBleGNsdWRpbmcpIHtcbiAgdmFyIGNvcHkgPSB7fSxcbiAgICAgIHA7XG5cbiAgZm9yIChwIGluIG9iaikge1xuICAgIHAgaW4gZXhjbHVkaW5nIHx8IChjb3B5W3BdID0gb2JqW3BdKTtcbiAgfVxuXG4gIHJldHVybiBjb3B5O1xufSxcbiAgICBfaW5oZXJpdERlZmF1bHRzID0gZnVuY3Rpb24gX2luaGVyaXREZWZhdWx0cyh2YXJzKSB7XG4gIHZhciBwYXJlbnQgPSB2YXJzLnBhcmVudCB8fCBfZ2xvYmFsVGltZWxpbmUsXG4gICAgICBmdW5jID0gdmFycy5rZXlmcmFtZXMgPyBfc2V0S2V5ZnJhbWVEZWZhdWx0cyhfaXNBcnJheSh2YXJzLmtleWZyYW1lcykpIDogX3NldERlZmF1bHRzO1xuXG4gIGlmIChfaXNOb3RGYWxzZSh2YXJzLmluaGVyaXQpKSB7XG4gICAgd2hpbGUgKHBhcmVudCkge1xuICAgICAgZnVuYyh2YXJzLCBwYXJlbnQudmFycy5kZWZhdWx0cyk7XG4gICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50IHx8IHBhcmVudC5fZHA7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZhcnM7XG59LFxuICAgIF9hcnJheXNNYXRjaCA9IGZ1bmN0aW9uIF9hcnJheXNNYXRjaChhMSwgYTIpIHtcbiAgdmFyIGkgPSBhMS5sZW5ndGgsXG4gICAgICBtYXRjaCA9IGkgPT09IGEyLmxlbmd0aDtcblxuICB3aGlsZSAobWF0Y2ggJiYgaS0tICYmIGExW2ldID09PSBhMltpXSkge31cblxuICByZXR1cm4gaSA8IDA7XG59LFxuICAgIF9hZGRMaW5rZWRMaXN0SXRlbSA9IGZ1bmN0aW9uIF9hZGRMaW5rZWRMaXN0SXRlbShwYXJlbnQsIGNoaWxkLCBmaXJzdFByb3AsIGxhc3RQcm9wLCBzb3J0QnkpIHtcbiAgaWYgKGZpcnN0UHJvcCA9PT0gdm9pZCAwKSB7XG4gICAgZmlyc3RQcm9wID0gXCJfZmlyc3RcIjtcbiAgfVxuXG4gIGlmIChsYXN0UHJvcCA9PT0gdm9pZCAwKSB7XG4gICAgbGFzdFByb3AgPSBcIl9sYXN0XCI7XG4gIH1cblxuICB2YXIgcHJldiA9IHBhcmVudFtsYXN0UHJvcF0sXG4gICAgICB0O1xuXG4gIGlmIChzb3J0QnkpIHtcbiAgICB0ID0gY2hpbGRbc29ydEJ5XTtcblxuICAgIHdoaWxlIChwcmV2ICYmIHByZXZbc29ydEJ5XSA+IHQpIHtcbiAgICAgIHByZXYgPSBwcmV2Ll9wcmV2O1xuICAgIH1cbiAgfVxuXG4gIGlmIChwcmV2KSB7XG4gICAgY2hpbGQuX25leHQgPSBwcmV2Ll9uZXh0O1xuICAgIHByZXYuX25leHQgPSBjaGlsZDtcbiAgfSBlbHNlIHtcbiAgICBjaGlsZC5fbmV4dCA9IHBhcmVudFtmaXJzdFByb3BdO1xuICAgIHBhcmVudFtmaXJzdFByb3BdID0gY2hpbGQ7XG4gIH1cblxuICBpZiAoY2hpbGQuX25leHQpIHtcbiAgICBjaGlsZC5fbmV4dC5fcHJldiA9IGNoaWxkO1xuICB9IGVsc2Uge1xuICAgIHBhcmVudFtsYXN0UHJvcF0gPSBjaGlsZDtcbiAgfVxuXG4gIGNoaWxkLl9wcmV2ID0gcHJldjtcbiAgY2hpbGQucGFyZW50ID0gY2hpbGQuX2RwID0gcGFyZW50O1xuICByZXR1cm4gY2hpbGQ7XG59LFxuICAgIF9yZW1vdmVMaW5rZWRMaXN0SXRlbSA9IGZ1bmN0aW9uIF9yZW1vdmVMaW5rZWRMaXN0SXRlbShwYXJlbnQsIGNoaWxkLCBmaXJzdFByb3AsIGxhc3RQcm9wKSB7XG4gIGlmIChmaXJzdFByb3AgPT09IHZvaWQgMCkge1xuICAgIGZpcnN0UHJvcCA9IFwiX2ZpcnN0XCI7XG4gIH1cblxuICBpZiAobGFzdFByb3AgPT09IHZvaWQgMCkge1xuICAgIGxhc3RQcm9wID0gXCJfbGFzdFwiO1xuICB9XG5cbiAgdmFyIHByZXYgPSBjaGlsZC5fcHJldixcbiAgICAgIG5leHQgPSBjaGlsZC5fbmV4dDtcblxuICBpZiAocHJldikge1xuICAgIHByZXYuX25leHQgPSBuZXh0O1xuICB9IGVsc2UgaWYgKHBhcmVudFtmaXJzdFByb3BdID09PSBjaGlsZCkge1xuICAgIHBhcmVudFtmaXJzdFByb3BdID0gbmV4dDtcbiAgfVxuXG4gIGlmIChuZXh0KSB7XG4gICAgbmV4dC5fcHJldiA9IHByZXY7XG4gIH0gZWxzZSBpZiAocGFyZW50W2xhc3RQcm9wXSA9PT0gY2hpbGQpIHtcbiAgICBwYXJlbnRbbGFzdFByb3BdID0gcHJldjtcbiAgfVxuXG4gIGNoaWxkLl9uZXh0ID0gY2hpbGQuX3ByZXYgPSBjaGlsZC5wYXJlbnQgPSBudWxsOyAvLyBkb24ndCBkZWxldGUgdGhlIF9kcCBqdXN0IHNvIHdlIGNhbiByZXZlcnQgaWYgbmVjZXNzYXJ5LiBCdXQgcGFyZW50IHNob3VsZCBiZSBudWxsIHRvIGluZGljYXRlIHRoZSBpdGVtIGlzbid0IGluIGEgbGlua2VkIGxpc3QuXG59LFxuICAgIF9yZW1vdmVGcm9tUGFyZW50ID0gZnVuY3Rpb24gX3JlbW92ZUZyb21QYXJlbnQoY2hpbGQsIG9ubHlJZlBhcmVudEhhc0F1dG9SZW1vdmUpIHtcbiAgY2hpbGQucGFyZW50ICYmICghb25seUlmUGFyZW50SGFzQXV0b1JlbW92ZSB8fCBjaGlsZC5wYXJlbnQuYXV0b1JlbW92ZUNoaWxkcmVuKSAmJiBjaGlsZC5wYXJlbnQucmVtb3ZlKGNoaWxkKTtcbiAgY2hpbGQuX2FjdCA9IDA7XG59LFxuICAgIF91bmNhY2hlID0gZnVuY3Rpb24gX3VuY2FjaGUoYW5pbWF0aW9uLCBjaGlsZCkge1xuICBpZiAoYW5pbWF0aW9uICYmICghY2hpbGQgfHwgY2hpbGQuX2VuZCA+IGFuaW1hdGlvbi5fZHVyIHx8IGNoaWxkLl9zdGFydCA8IDApKSB7XG4gICAgLy8gcGVyZm9ybWFuY2Ugb3B0aW1pemF0aW9uOiBpZiBhIGNoaWxkIGFuaW1hdGlvbiBpcyBwYXNzZWQgaW4gd2Ugc2hvdWxkIG9ubHkgdW5jYWNoZSBpZiB0aGF0IGNoaWxkIEVYVEVORFMgdGhlIGFuaW1hdGlvbiAoaXRzIGVuZCB0aW1lIGlzIGJleW9uZCB0aGUgZW5kKVxuICAgIHZhciBhID0gYW5pbWF0aW9uO1xuXG4gICAgd2hpbGUgKGEpIHtcbiAgICAgIGEuX2RpcnR5ID0gMTtcbiAgICAgIGEgPSBhLnBhcmVudDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYW5pbWF0aW9uO1xufSxcbiAgICBfcmVjYWNoZUFuY2VzdG9ycyA9IGZ1bmN0aW9uIF9yZWNhY2hlQW5jZXN0b3JzKGFuaW1hdGlvbikge1xuICB2YXIgcGFyZW50ID0gYW5pbWF0aW9uLnBhcmVudDtcblxuICB3aGlsZSAocGFyZW50ICYmIHBhcmVudC5wYXJlbnQpIHtcbiAgICAvL3NvbWV0aW1lcyB3ZSBtdXN0IGZvcmNlIGEgcmUtc29ydCBvZiBhbGwgY2hpbGRyZW4gYW5kIHVwZGF0ZSB0aGUgZHVyYXRpb24vdG90YWxEdXJhdGlvbiBvZiBhbGwgYW5jZXN0b3IgdGltZWxpbmVzIGltbWVkaWF0ZWx5IGluIGNhc2UsIGZvciBleGFtcGxlLCBpbiB0aGUgbWlkZGxlIG9mIGEgcmVuZGVyIGxvb3AsIG9uZSB0d2VlbiBhbHRlcnMgYW5vdGhlciB0d2VlbidzIHRpbWVTY2FsZSB3aGljaCBzaG92ZXMgaXRzIHN0YXJ0VGltZSBiZWZvcmUgMCwgZm9yY2luZyB0aGUgcGFyZW50IHRpbWVsaW5lIHRvIHNoaWZ0IGFyb3VuZCBhbmQgc2hpZnRDaGlsZHJlbigpIHdoaWNoIGNvdWxkIGFmZmVjdCB0aGF0IG5leHQgdHdlZW4ncyByZW5kZXIgKHN0YXJ0VGltZSkuIERvZXNuJ3QgbWF0dGVyIGZvciB0aGUgcm9vdCB0aW1lbGluZSB0aG91Z2guXG4gICAgcGFyZW50Ll9kaXJ0eSA9IDE7XG4gICAgcGFyZW50LnRvdGFsRHVyYXRpb24oKTtcbiAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50O1xuICB9XG5cbiAgcmV0dXJuIGFuaW1hdGlvbjtcbn0sXG4gICAgX3Jld2luZFN0YXJ0QXQgPSBmdW5jdGlvbiBfcmV3aW5kU3RhcnRBdCh0d2VlbiwgdG90YWxUaW1lLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpIHtcbiAgcmV0dXJuIHR3ZWVuLl9zdGFydEF0ICYmIChfcmV2ZXJ0aW5nID8gdHdlZW4uX3N0YXJ0QXQucmV2ZXJ0KF9yZXZlcnRDb25maWcpIDogdHdlZW4udmFycy5pbW1lZGlhdGVSZW5kZXIgJiYgIXR3ZWVuLnZhcnMuYXV0b1JldmVydCB8fCB0d2Vlbi5fc3RhcnRBdC5yZW5kZXIodG90YWxUaW1lLCB0cnVlLCBmb3JjZSkpO1xufSxcbiAgICBfaGFzTm9QYXVzZWRBbmNlc3RvcnMgPSBmdW5jdGlvbiBfaGFzTm9QYXVzZWRBbmNlc3RvcnMoYW5pbWF0aW9uKSB7XG4gIHJldHVybiAhYW5pbWF0aW9uIHx8IGFuaW1hdGlvbi5fdHMgJiYgX2hhc05vUGF1c2VkQW5jZXN0b3JzKGFuaW1hdGlvbi5wYXJlbnQpO1xufSxcbiAgICBfZWxhcHNlZEN5Y2xlRHVyYXRpb24gPSBmdW5jdGlvbiBfZWxhcHNlZEN5Y2xlRHVyYXRpb24oYW5pbWF0aW9uKSB7XG4gIHJldHVybiBhbmltYXRpb24uX3JlcGVhdCA/IF9hbmltYXRpb25DeWNsZShhbmltYXRpb24uX3RUaW1lLCBhbmltYXRpb24gPSBhbmltYXRpb24uZHVyYXRpb24oKSArIGFuaW1hdGlvbi5fckRlbGF5KSAqIGFuaW1hdGlvbiA6IDA7XG59LFxuICAgIC8vIGZlZWQgaW4gdGhlIHRvdGFsVGltZSBhbmQgY3ljbGVEdXJhdGlvbiBhbmQgaXQnbGwgcmV0dXJuIHRoZSBjeWNsZSAoaXRlcmF0aW9uIG1pbnVzIDEpIGFuZCBpZiB0aGUgcGxheWhlYWQgaXMgZXhhY3RseSBhdCB0aGUgdmVyeSBFTkQsIGl0IHdpbGwgTk9UIGJ1bXAgdXAgdG8gdGhlIG5leHQgY3ljbGUuXG5fYW5pbWF0aW9uQ3ljbGUgPSBmdW5jdGlvbiBfYW5pbWF0aW9uQ3ljbGUodFRpbWUsIGN5Y2xlRHVyYXRpb24pIHtcbiAgdmFyIHdob2xlID0gTWF0aC5mbG9vcih0VGltZSAvPSBjeWNsZUR1cmF0aW9uKTtcbiAgcmV0dXJuIHRUaW1lICYmIHdob2xlID09PSB0VGltZSA/IHdob2xlIC0gMSA6IHdob2xlO1xufSxcbiAgICBfcGFyZW50VG9DaGlsZFRvdGFsVGltZSA9IGZ1bmN0aW9uIF9wYXJlbnRUb0NoaWxkVG90YWxUaW1lKHBhcmVudFRpbWUsIGNoaWxkKSB7XG4gIHJldHVybiAocGFyZW50VGltZSAtIGNoaWxkLl9zdGFydCkgKiBjaGlsZC5fdHMgKyAoY2hpbGQuX3RzID49IDAgPyAwIDogY2hpbGQuX2RpcnR5ID8gY2hpbGQudG90YWxEdXJhdGlvbigpIDogY2hpbGQuX3REdXIpO1xufSxcbiAgICBfc2V0RW5kID0gZnVuY3Rpb24gX3NldEVuZChhbmltYXRpb24pIHtcbiAgcmV0dXJuIGFuaW1hdGlvbi5fZW5kID0gX3JvdW5kUHJlY2lzZShhbmltYXRpb24uX3N0YXJ0ICsgKGFuaW1hdGlvbi5fdER1ciAvIE1hdGguYWJzKGFuaW1hdGlvbi5fdHMgfHwgYW5pbWF0aW9uLl9ydHMgfHwgX3RpbnlOdW0pIHx8IDApKTtcbn0sXG4gICAgX2FsaWduUGxheWhlYWQgPSBmdW5jdGlvbiBfYWxpZ25QbGF5aGVhZChhbmltYXRpb24sIHRvdGFsVGltZSkge1xuICAvLyBhZGp1c3RzIHRoZSBhbmltYXRpb24ncyBfc3RhcnQgYW5kIF9lbmQgYWNjb3JkaW5nIHRvIHRoZSBwcm92aWRlZCB0b3RhbFRpbWUgKG9ubHkgaWYgdGhlIHBhcmVudCdzIHNtb290aENoaWxkVGltaW5nIGlzIHRydWUgYW5kIHRoZSBhbmltYXRpb24gaXNuJ3QgcGF1c2VkKS4gSXQgZG9lc24ndCBkbyBhbnkgcmVuZGVyaW5nIG9yIGZvcmNpbmcgdGhpbmdzIGJhY2sgaW50byBwYXJlbnQgdGltZWxpbmVzLCBldGMuIC0gdGhhdCdzIHdoYXQgdG90YWxUaW1lKCkgaXMgZm9yLlxuICB2YXIgcGFyZW50ID0gYW5pbWF0aW9uLl9kcDtcblxuICBpZiAocGFyZW50ICYmIHBhcmVudC5zbW9vdGhDaGlsZFRpbWluZyAmJiBhbmltYXRpb24uX3RzKSB7XG4gICAgYW5pbWF0aW9uLl9zdGFydCA9IF9yb3VuZFByZWNpc2UocGFyZW50Ll90aW1lIC0gKGFuaW1hdGlvbi5fdHMgPiAwID8gdG90YWxUaW1lIC8gYW5pbWF0aW9uLl90cyA6ICgoYW5pbWF0aW9uLl9kaXJ0eSA/IGFuaW1hdGlvbi50b3RhbER1cmF0aW9uKCkgOiBhbmltYXRpb24uX3REdXIpIC0gdG90YWxUaW1lKSAvIC1hbmltYXRpb24uX3RzKSk7XG5cbiAgICBfc2V0RW5kKGFuaW1hdGlvbik7XG5cbiAgICBwYXJlbnQuX2RpcnR5IHx8IF91bmNhY2hlKHBhcmVudCwgYW5pbWF0aW9uKTsgLy9mb3IgcGVyZm9ybWFuY2UgaW1wcm92ZW1lbnQuIElmIHRoZSBwYXJlbnQncyBjYWNoZSBpcyBhbHJlYWR5IGRpcnR5LCBpdCBhbHJlYWR5IHRvb2sgY2FyZSBvZiBtYXJraW5nIHRoZSBhbmNlc3RvcnMgYXMgZGlydHkgdG9vLCBzbyBza2lwIHRoZSBmdW5jdGlvbiBjYWxsIGhlcmUuXG4gIH1cblxuICByZXR1cm4gYW5pbWF0aW9uO1xufSxcblxuLypcbl90b3RhbFRpbWVUb1RpbWUgPSAoY2xhbXBlZFRvdGFsVGltZSwgZHVyYXRpb24sIHJlcGVhdCwgcmVwZWF0RGVsYXksIHlveW8pID0+IHtcblx0bGV0IGN5Y2xlRHVyYXRpb24gPSBkdXJhdGlvbiArIHJlcGVhdERlbGF5LFxuXHRcdHRpbWUgPSBfcm91bmQoY2xhbXBlZFRvdGFsVGltZSAlIGN5Y2xlRHVyYXRpb24pO1xuXHRpZiAodGltZSA+IGR1cmF0aW9uKSB7XG5cdFx0dGltZSA9IGR1cmF0aW9uO1xuXHR9XG5cdHJldHVybiAoeW95byAmJiAofn4oY2xhbXBlZFRvdGFsVGltZSAvIGN5Y2xlRHVyYXRpb24pICYgMSkpID8gZHVyYXRpb24gLSB0aW1lIDogdGltZTtcbn0sXG4qL1xuX3Bvc3RBZGRDaGVja3MgPSBmdW5jdGlvbiBfcG9zdEFkZENoZWNrcyh0aW1lbGluZSwgY2hpbGQpIHtcbiAgdmFyIHQ7XG5cbiAgaWYgKGNoaWxkLl90aW1lIHx8IGNoaWxkLl9pbml0dGVkICYmICFjaGlsZC5fZHVyKSB7XG4gICAgLy9pbiBjYXNlLCBmb3IgZXhhbXBsZSwgdGhlIF9zdGFydCBpcyBtb3ZlZCBvbiBhIHR3ZWVuIHRoYXQgaGFzIGFscmVhZHkgcmVuZGVyZWQuIEltYWdpbmUgaXQncyBhdCBpdHMgZW5kIHN0YXRlLCB0aGVuIHRoZSBzdGFydFRpbWUgaXMgbW92ZWQgV0FZIGxhdGVyIChhZnRlciB0aGUgZW5kIG9mIHRoaXMgdGltZWxpbmUpLCBpdCBzaG91bGQgcmVuZGVyIGF0IGl0cyBiZWdpbm5pbmcuXG4gICAgdCA9IF9wYXJlbnRUb0NoaWxkVG90YWxUaW1lKHRpbWVsaW5lLnJhd1RpbWUoKSwgY2hpbGQpO1xuXG4gICAgaWYgKCFjaGlsZC5fZHVyIHx8IF9jbGFtcCgwLCBjaGlsZC50b3RhbER1cmF0aW9uKCksIHQpIC0gY2hpbGQuX3RUaW1lID4gX3RpbnlOdW0pIHtcbiAgICAgIGNoaWxkLnJlbmRlcih0LCB0cnVlKTtcbiAgICB9XG4gIH0gLy9pZiB0aGUgdGltZWxpbmUgaGFzIGFscmVhZHkgZW5kZWQgYnV0IHRoZSBpbnNlcnRlZCB0d2Vlbi90aW1lbGluZSBleHRlbmRzIHRoZSBkdXJhdGlvbiwgd2Ugc2hvdWxkIGVuYWJsZSB0aGlzIHRpbWVsaW5lIGFnYWluIHNvIHRoYXQgaXQgcmVuZGVycyBwcm9wZXJseS4gV2Ugc2hvdWxkIGFsc28gYWxpZ24gdGhlIHBsYXloZWFkIHdpdGggdGhlIHBhcmVudCB0aW1lbGluZSdzIHdoZW4gYXBwcm9wcmlhdGUuXG5cblxuICBpZiAoX3VuY2FjaGUodGltZWxpbmUsIGNoaWxkKS5fZHAgJiYgdGltZWxpbmUuX2luaXR0ZWQgJiYgdGltZWxpbmUuX3RpbWUgPj0gdGltZWxpbmUuX2R1ciAmJiB0aW1lbGluZS5fdHMpIHtcbiAgICAvL2luIGNhc2UgYW55IG9mIHRoZSBhbmNlc3RvcnMgaGFkIGNvbXBsZXRlZCBidXQgc2hvdWxkIG5vdyBiZSBlbmFibGVkLi4uXG4gICAgaWYgKHRpbWVsaW5lLl9kdXIgPCB0aW1lbGluZS5kdXJhdGlvbigpKSB7XG4gICAgICB0ID0gdGltZWxpbmU7XG5cbiAgICAgIHdoaWxlICh0Ll9kcCkge1xuICAgICAgICB0LnJhd1RpbWUoKSA+PSAwICYmIHQudG90YWxUaW1lKHQuX3RUaW1lKTsgLy9tb3ZlcyB0aGUgdGltZWxpbmUgKHNoaWZ0cyBpdHMgc3RhcnRUaW1lKSBpZiBuZWNlc3NhcnksIGFuZCBhbHNvIGVuYWJsZXMgaXQuIElmIGl0J3MgY3VycmVudGx5IHplcm8sIHRob3VnaCwgaXQgbWF5IG5vdCBiZSBzY2hlZHVsZWQgdG8gcmVuZGVyIHVudGlsIGxhdGVyIHNvIHRoZXJlJ3Mgbm8gbmVlZCB0byBmb3JjZSBpdCB0byBhbGlnbiB3aXRoIHRoZSBjdXJyZW50IHBsYXloZWFkIHBvc2l0aW9uLiBPbmx5IG1vdmUgdG8gY2F0Y2ggdXAgd2l0aCB0aGUgcGxheWhlYWQuXG5cbiAgICAgICAgdCA9IHQuX2RwO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRpbWVsaW5lLl96VGltZSA9IC1fdGlueU51bTsgLy8gaGVscHMgZW5zdXJlIHRoYXQgdGhlIG5leHQgcmVuZGVyKCkgd2lsbCBiZSBmb3JjZWQgKGNyb3NzaW5nU3RhcnQgPSB0cnVlIGluIHJlbmRlcigpKSwgZXZlbiBpZiB0aGUgZHVyYXRpb24gaGFzbid0IGNoYW5nZWQgKHdlJ3JlIGFkZGluZyBhIGNoaWxkIHdoaWNoIHdvdWxkIG5lZWQgdG8gZ2V0IHJlbmRlcmVkKS4gRGVmaW5pdGVseSBhbiBlZGdlIGNhc2UuIE5vdGU6IHdlIE1VU1QgZG8gdGhpcyBBRlRFUiB0aGUgbG9vcCBhYm92ZSB3aGVyZSB0aGUgdG90YWxUaW1lKCkgbWlnaHQgdHJpZ2dlciBhIHJlbmRlcigpIGJlY2F1c2UgdGhpcyBfYWRkVG9UaW1lbGluZSgpIG1ldGhvZCBnZXRzIGNhbGxlZCBmcm9tIHRoZSBBbmltYXRpb24gY29uc3RydWN0b3IsIEJFRk9SRSB0d2VlbnMgZXZlbiByZWNvcmQgdGhlaXIgdGFyZ2V0cywgZXRjLiBzbyB3ZSB3b3VsZG4ndCB3YW50IHRoaW5ncyB0byBnZXQgdHJpZ2dlcmVkIGluIHRoZSB3cm9uZyBvcmRlci5cbiAgfVxufSxcbiAgICBfYWRkVG9UaW1lbGluZSA9IGZ1bmN0aW9uIF9hZGRUb1RpbWVsaW5lKHRpbWVsaW5lLCBjaGlsZCwgcG9zaXRpb24sIHNraXBDaGVja3MpIHtcbiAgY2hpbGQucGFyZW50ICYmIF9yZW1vdmVGcm9tUGFyZW50KGNoaWxkKTtcbiAgY2hpbGQuX3N0YXJ0ID0gX3JvdW5kUHJlY2lzZSgoX2lzTnVtYmVyKHBvc2l0aW9uKSA/IHBvc2l0aW9uIDogcG9zaXRpb24gfHwgdGltZWxpbmUgIT09IF9nbG9iYWxUaW1lbGluZSA/IF9wYXJzZVBvc2l0aW9uKHRpbWVsaW5lLCBwb3NpdGlvbiwgY2hpbGQpIDogdGltZWxpbmUuX3RpbWUpICsgY2hpbGQuX2RlbGF5KTtcbiAgY2hpbGQuX2VuZCA9IF9yb3VuZFByZWNpc2UoY2hpbGQuX3N0YXJ0ICsgKGNoaWxkLnRvdGFsRHVyYXRpb24oKSAvIE1hdGguYWJzKGNoaWxkLnRpbWVTY2FsZSgpKSB8fCAwKSk7XG5cbiAgX2FkZExpbmtlZExpc3RJdGVtKHRpbWVsaW5lLCBjaGlsZCwgXCJfZmlyc3RcIiwgXCJfbGFzdFwiLCB0aW1lbGluZS5fc29ydCA/IFwiX3N0YXJ0XCIgOiAwKTtcblxuICBfaXNGcm9tT3JGcm9tU3RhcnQoY2hpbGQpIHx8ICh0aW1lbGluZS5fcmVjZW50ID0gY2hpbGQpO1xuICBza2lwQ2hlY2tzIHx8IF9wb3N0QWRkQ2hlY2tzKHRpbWVsaW5lLCBjaGlsZCk7XG4gIHRpbWVsaW5lLl90cyA8IDAgJiYgX2FsaWduUGxheWhlYWQodGltZWxpbmUsIHRpbWVsaW5lLl90VGltZSk7IC8vIGlmIHRoZSB0aW1lbGluZSBpcyByZXZlcnNlZCBhbmQgdGhlIG5ldyBjaGlsZCBtYWtlcyBpdCBsb25nZXIsIHdlIG1heSBuZWVkIHRvIGFkanVzdCB0aGUgcGFyZW50J3MgX3N0YXJ0IChwdXNoIGl0IGJhY2spXG5cbiAgcmV0dXJuIHRpbWVsaW5lO1xufSxcbiAgICBfc2Nyb2xsVHJpZ2dlciA9IGZ1bmN0aW9uIF9zY3JvbGxUcmlnZ2VyKGFuaW1hdGlvbiwgdHJpZ2dlcikge1xuICByZXR1cm4gKF9nbG9iYWxzLlNjcm9sbFRyaWdnZXIgfHwgX21pc3NpbmdQbHVnaW4oXCJzY3JvbGxUcmlnZ2VyXCIsIHRyaWdnZXIpKSAmJiBfZ2xvYmFscy5TY3JvbGxUcmlnZ2VyLmNyZWF0ZSh0cmlnZ2VyLCBhbmltYXRpb24pO1xufSxcbiAgICBfYXR0ZW1wdEluaXRUd2VlbiA9IGZ1bmN0aW9uIF9hdHRlbXB0SW5pdFR3ZWVuKHR3ZWVuLCB0b3RhbFRpbWUsIGZvcmNlLCBzdXBwcmVzc0V2ZW50cykge1xuICBfaW5pdFR3ZWVuKHR3ZWVuLCB0b3RhbFRpbWUpO1xuXG4gIGlmICghdHdlZW4uX2luaXR0ZWQpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIGlmICghZm9yY2UgJiYgdHdlZW4uX3B0ICYmICh0d2Vlbi5fZHVyICYmIHR3ZWVuLnZhcnMubGF6eSAhPT0gZmFsc2UgfHwgIXR3ZWVuLl9kdXIgJiYgdHdlZW4udmFycy5sYXp5KSAmJiBfbGFzdFJlbmRlcmVkRnJhbWUgIT09IF90aWNrZXIuZnJhbWUpIHtcbiAgICBfbGF6eVR3ZWVucy5wdXNoKHR3ZWVuKTtcblxuICAgIHR3ZWVuLl9sYXp5ID0gW3RvdGFsVGltZSwgc3VwcHJlc3NFdmVudHNdO1xuICAgIHJldHVybiAxO1xuICB9XG59LFxuICAgIF9wYXJlbnRQbGF5aGVhZElzQmVmb3JlU3RhcnQgPSBmdW5jdGlvbiBfcGFyZW50UGxheWhlYWRJc0JlZm9yZVN0YXJ0KF9yZWYpIHtcbiAgdmFyIHBhcmVudCA9IF9yZWYucGFyZW50O1xuICByZXR1cm4gcGFyZW50ICYmIHBhcmVudC5fdHMgJiYgcGFyZW50Ll9pbml0dGVkICYmICFwYXJlbnQuX2xvY2sgJiYgKHBhcmVudC5yYXdUaW1lKCkgPCAwIHx8IF9wYXJlbnRQbGF5aGVhZElzQmVmb3JlU3RhcnQocGFyZW50KSk7XG59LFxuICAgIC8vIGNoZWNrIHBhcmVudCdzIF9sb2NrIGJlY2F1c2Ugd2hlbiBhIHRpbWVsaW5lIHJlcGVhdHMveW95b3MgYW5kIGRvZXMgaXRzIGFydGlmaWNpYWwgd3JhcHBpbmcsIHdlIHNob3VsZG4ndCBmb3JjZSB0aGUgcmF0aW8gYmFjayB0byAwXG5faXNGcm9tT3JGcm9tU3RhcnQgPSBmdW5jdGlvbiBfaXNGcm9tT3JGcm9tU3RhcnQoX3JlZjIpIHtcbiAgdmFyIGRhdGEgPSBfcmVmMi5kYXRhO1xuICByZXR1cm4gZGF0YSA9PT0gXCJpc0Zyb21TdGFydFwiIHx8IGRhdGEgPT09IFwiaXNTdGFydFwiO1xufSxcbiAgICBfcmVuZGVyWmVyb0R1cmF0aW9uVHdlZW4gPSBmdW5jdGlvbiBfcmVuZGVyWmVyb0R1cmF0aW9uVHdlZW4odHdlZW4sIHRvdGFsVGltZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKSB7XG4gIHZhciBwcmV2UmF0aW8gPSB0d2Vlbi5yYXRpbyxcbiAgICAgIHJhdGlvID0gdG90YWxUaW1lIDwgMCB8fCAhdG90YWxUaW1lICYmICghdHdlZW4uX3N0YXJ0ICYmIF9wYXJlbnRQbGF5aGVhZElzQmVmb3JlU3RhcnQodHdlZW4pICYmICEoIXR3ZWVuLl9pbml0dGVkICYmIF9pc0Zyb21PckZyb21TdGFydCh0d2VlbikpIHx8ICh0d2Vlbi5fdHMgPCAwIHx8IHR3ZWVuLl9kcC5fdHMgPCAwKSAmJiAhX2lzRnJvbU9yRnJvbVN0YXJ0KHR3ZWVuKSkgPyAwIDogMSxcbiAgICAgIC8vIGlmIHRoZSB0d2VlbiBvciBpdHMgcGFyZW50IGlzIHJldmVyc2VkIGFuZCB0aGUgdG90YWxUaW1lIGlzIDAsIHdlIHNob3VsZCBnbyB0byBhIHJhdGlvIG9mIDAuIEVkZ2UgY2FzZTogaWYgYSBmcm9tKCkgb3IgZnJvbVRvKCkgc3RhZ2dlciB0d2VlbiBpcyBwbGFjZWQgbGF0ZXIgaW4gYSB0aW1lbGluZSwgdGhlIFwic3RhcnRBdFwiIHplcm8tZHVyYXRpb24gdHdlZW4gY291bGQgaW5pdGlhbGx5IHJlbmRlciBhdCBhIHRpbWUgd2hlbiB0aGUgcGFyZW50IHRpbWVsaW5lJ3MgcGxheWhlYWQgaXMgdGVjaG5pY2FsbHkgQkVGT1JFIHdoZXJlIHRoaXMgdHdlZW4gaXMsIHNvIG1ha2Ugc3VyZSB0aGF0IGFueSBcImZyb21cIiBhbmQgXCJmcm9tVG9cIiBzdGFydEF0IHR3ZWVucyBhcmUgcmVuZGVyZWQgdGhlIGZpcnN0IHRpbWUgYXQgYSByYXRpbyBvZiAxLlxuICByZXBlYXREZWxheSA9IHR3ZWVuLl9yRGVsYXksXG4gICAgICB0VGltZSA9IDAsXG4gICAgICBwdCxcbiAgICAgIGl0ZXJhdGlvbixcbiAgICAgIHByZXZJdGVyYXRpb247XG5cbiAgaWYgKHJlcGVhdERlbGF5ICYmIHR3ZWVuLl9yZXBlYXQpIHtcbiAgICAvLyBpbiBjYXNlIHRoZXJlJ3MgYSB6ZXJvLWR1cmF0aW9uIHR3ZWVuIHRoYXQgaGFzIGEgcmVwZWF0IHdpdGggYSByZXBlYXREZWxheVxuICAgIHRUaW1lID0gX2NsYW1wKDAsIHR3ZWVuLl90RHVyLCB0b3RhbFRpbWUpO1xuICAgIGl0ZXJhdGlvbiA9IF9hbmltYXRpb25DeWNsZSh0VGltZSwgcmVwZWF0RGVsYXkpO1xuICAgIHR3ZWVuLl95b3lvICYmIGl0ZXJhdGlvbiAmIDEgJiYgKHJhdGlvID0gMSAtIHJhdGlvKTtcblxuICAgIGlmIChpdGVyYXRpb24gIT09IF9hbmltYXRpb25DeWNsZSh0d2Vlbi5fdFRpbWUsIHJlcGVhdERlbGF5KSkge1xuICAgICAgLy8gaWYgaXRlcmF0aW9uIGNoYW5nZWRcbiAgICAgIHByZXZSYXRpbyA9IDEgLSByYXRpbztcbiAgICAgIHR3ZWVuLnZhcnMucmVwZWF0UmVmcmVzaCAmJiB0d2Vlbi5faW5pdHRlZCAmJiB0d2Vlbi5pbnZhbGlkYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHJhdGlvICE9PSBwcmV2UmF0aW8gfHwgX3JldmVydGluZyB8fCBmb3JjZSB8fCB0d2Vlbi5felRpbWUgPT09IF90aW55TnVtIHx8ICF0b3RhbFRpbWUgJiYgdHdlZW4uX3pUaW1lKSB7XG4gICAgaWYgKCF0d2Vlbi5faW5pdHRlZCAmJiBfYXR0ZW1wdEluaXRUd2Vlbih0d2VlbiwgdG90YWxUaW1lLCBmb3JjZSwgc3VwcHJlc3NFdmVudHMpKSB7XG4gICAgICAvLyBpZiB3ZSByZW5kZXIgdGhlIHZlcnkgYmVnaW5uaW5nICh0aW1lID09IDApIG9mIGEgZnJvbVRvKCksIHdlIG11c3QgZm9yY2UgdGhlIHJlbmRlciAobm9ybWFsIHR3ZWVucyB3b3VsZG4ndCBuZWVkIHRvIHJlbmRlciBhdCBhIHRpbWUgb2YgMCB3aGVuIHRoZSBwcmV2VGltZSB3YXMgYWxzbyAwKS4gVGhpcyBpcyBhbHNvIG1hbmRhdG9yeSB0byBtYWtlIHN1cmUgb3ZlcndyaXRpbmcga2lja3MgaW4gaW1tZWRpYXRlbHkuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcHJldkl0ZXJhdGlvbiA9IHR3ZWVuLl96VGltZTtcbiAgICB0d2Vlbi5felRpbWUgPSB0b3RhbFRpbWUgfHwgKHN1cHByZXNzRXZlbnRzID8gX3RpbnlOdW0gOiAwKTsgLy8gd2hlbiB0aGUgcGxheWhlYWQgYXJyaXZlcyBhdCBFWEFDVExZIHRpbWUgMCAocmlnaHQgb24gdG9wKSBvZiBhIHplcm8tZHVyYXRpb24gdHdlZW4sIHdlIG5lZWQgdG8gZGlzY2VybiBpZiBldmVudHMgYXJlIHN1cHByZXNzZWQgc28gdGhhdCB3aGVuIHRoZSBwbGF5aGVhZCBtb3ZlcyBhZ2FpbiAobmV4dCB0aW1lKSwgaXQnbGwgdHJpZ2dlciB0aGUgY2FsbGJhY2suIElmIGV2ZW50cyBhcmUgTk9UIHN1cHByZXNzZWQsIG9idmlvdXNseSB0aGUgY2FsbGJhY2sgd291bGQgYmUgdHJpZ2dlcmVkIGluIHRoaXMgcmVuZGVyLiBCYXNpY2FsbHksIHRoZSBjYWxsYmFjayBzaG91bGQgZmlyZSBlaXRoZXIgd2hlbiB0aGUgcGxheWhlYWQgQVJSSVZFUyBvciBMRUFWRVMgdGhpcyBleGFjdCBzcG90LCBub3QgYm90aC4gSW1hZ2luZSBkb2luZyBhIHRpbWVsaW5lLnNlZWsoMCkgYW5kIHRoZXJlJ3MgYSBjYWxsYmFjayB0aGF0IHNpdHMgYXQgMC4gU2luY2UgZXZlbnRzIGFyZSBzdXBwcmVzc2VkIG9uIHRoYXQgc2VlaygpIGJ5IGRlZmF1bHQsIG5vdGhpbmcgd2lsbCBmaXJlLCBidXQgd2hlbiB0aGUgcGxheWhlYWQgbW92ZXMgb2ZmIG9mIHRoYXQgcG9zaXRpb24sIHRoZSBjYWxsYmFjayBzaG91bGQgZmlyZS4gVGhpcyBiZWhhdmlvciBpcyB3aGF0IHBlb3BsZSBpbnR1aXRpdmVseSBleHBlY3QuXG5cbiAgICBzdXBwcmVzc0V2ZW50cyB8fCAoc3VwcHJlc3NFdmVudHMgPSB0b3RhbFRpbWUgJiYgIXByZXZJdGVyYXRpb24pOyAvLyBpZiBpdCB3YXMgcmVuZGVyZWQgcHJldmlvdXNseSBhdCBleGFjdGx5IDAgKF96VGltZSkgYW5kIG5vdyB0aGUgcGxheWhlYWQgaXMgbW92aW5nIGF3YXksIERPTidUIGZpcmUgY2FsbGJhY2tzIG90aGVyd2lzZSB0aGV5J2xsIHNlZW0gbGlrZSBkdXBsaWNhdGVzLlxuXG4gICAgdHdlZW4ucmF0aW8gPSByYXRpbztcbiAgICB0d2Vlbi5fZnJvbSAmJiAocmF0aW8gPSAxIC0gcmF0aW8pO1xuICAgIHR3ZWVuLl90aW1lID0gMDtcbiAgICB0d2Vlbi5fdFRpbWUgPSB0VGltZTtcbiAgICBwdCA9IHR3ZWVuLl9wdDtcblxuICAgIHdoaWxlIChwdCkge1xuICAgICAgcHQucihyYXRpbywgcHQuZCk7XG4gICAgICBwdCA9IHB0Ll9uZXh0O1xuICAgIH1cblxuICAgIHRvdGFsVGltZSA8IDAgJiYgX3Jld2luZFN0YXJ0QXQodHdlZW4sIHRvdGFsVGltZSwgc3VwcHJlc3NFdmVudHMsIHRydWUpO1xuICAgIHR3ZWVuLl9vblVwZGF0ZSAmJiAhc3VwcHJlc3NFdmVudHMgJiYgX2NhbGxiYWNrKHR3ZWVuLCBcIm9uVXBkYXRlXCIpO1xuICAgIHRUaW1lICYmIHR3ZWVuLl9yZXBlYXQgJiYgIXN1cHByZXNzRXZlbnRzICYmIHR3ZWVuLnBhcmVudCAmJiBfY2FsbGJhY2sodHdlZW4sIFwib25SZXBlYXRcIik7XG5cbiAgICBpZiAoKHRvdGFsVGltZSA+PSB0d2Vlbi5fdER1ciB8fCB0b3RhbFRpbWUgPCAwKSAmJiB0d2Vlbi5yYXRpbyA9PT0gcmF0aW8pIHtcbiAgICAgIHJhdGlvICYmIF9yZW1vdmVGcm9tUGFyZW50KHR3ZWVuLCAxKTtcblxuICAgICAgaWYgKCFzdXBwcmVzc0V2ZW50cykge1xuICAgICAgICBfY2FsbGJhY2sodHdlZW4sIHJhdGlvID8gXCJvbkNvbXBsZXRlXCIgOiBcIm9uUmV2ZXJzZUNvbXBsZXRlXCIsIHRydWUpO1xuXG4gICAgICAgIHR3ZWVuLl9wcm9tICYmIHR3ZWVuLl9wcm9tKCk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKCF0d2Vlbi5felRpbWUpIHtcbiAgICB0d2Vlbi5felRpbWUgPSB0b3RhbFRpbWU7XG4gIH1cbn0sXG4gICAgX2ZpbmROZXh0UGF1c2VUd2VlbiA9IGZ1bmN0aW9uIF9maW5kTmV4dFBhdXNlVHdlZW4oYW5pbWF0aW9uLCBwcmV2VGltZSwgdGltZSkge1xuICB2YXIgY2hpbGQ7XG5cbiAgaWYgKHRpbWUgPiBwcmV2VGltZSkge1xuICAgIGNoaWxkID0gYW5pbWF0aW9uLl9maXJzdDtcblxuICAgIHdoaWxlIChjaGlsZCAmJiBjaGlsZC5fc3RhcnQgPD0gdGltZSkge1xuICAgICAgaWYgKGNoaWxkLmRhdGEgPT09IFwiaXNQYXVzZVwiICYmIGNoaWxkLl9zdGFydCA+IHByZXZUaW1lKSB7XG4gICAgICAgIHJldHVybiBjaGlsZDtcbiAgICAgIH1cblxuICAgICAgY2hpbGQgPSBjaGlsZC5fbmV4dDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY2hpbGQgPSBhbmltYXRpb24uX2xhc3Q7XG5cbiAgICB3aGlsZSAoY2hpbGQgJiYgY2hpbGQuX3N0YXJ0ID49IHRpbWUpIHtcbiAgICAgIGlmIChjaGlsZC5kYXRhID09PSBcImlzUGF1c2VcIiAmJiBjaGlsZC5fc3RhcnQgPCBwcmV2VGltZSkge1xuICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgICB9XG5cbiAgICAgIGNoaWxkID0gY2hpbGQuX3ByZXY7XG4gICAgfVxuICB9XG59LFxuICAgIF9zZXREdXJhdGlvbiA9IGZ1bmN0aW9uIF9zZXREdXJhdGlvbihhbmltYXRpb24sIGR1cmF0aW9uLCBza2lwVW5jYWNoZSwgbGVhdmVQbGF5aGVhZCkge1xuICB2YXIgcmVwZWF0ID0gYW5pbWF0aW9uLl9yZXBlYXQsXG4gICAgICBkdXIgPSBfcm91bmRQcmVjaXNlKGR1cmF0aW9uKSB8fCAwLFxuICAgICAgdG90YWxQcm9ncmVzcyA9IGFuaW1hdGlvbi5fdFRpbWUgLyBhbmltYXRpb24uX3REdXI7XG4gIHRvdGFsUHJvZ3Jlc3MgJiYgIWxlYXZlUGxheWhlYWQgJiYgKGFuaW1hdGlvbi5fdGltZSAqPSBkdXIgLyBhbmltYXRpb24uX2R1cik7XG4gIGFuaW1hdGlvbi5fZHVyID0gZHVyO1xuICBhbmltYXRpb24uX3REdXIgPSAhcmVwZWF0ID8gZHVyIDogcmVwZWF0IDwgMCA/IDFlMTAgOiBfcm91bmRQcmVjaXNlKGR1ciAqIChyZXBlYXQgKyAxKSArIGFuaW1hdGlvbi5fckRlbGF5ICogcmVwZWF0KTtcbiAgdG90YWxQcm9ncmVzcyA+IDAgJiYgIWxlYXZlUGxheWhlYWQgPyBfYWxpZ25QbGF5aGVhZChhbmltYXRpb24sIGFuaW1hdGlvbi5fdFRpbWUgPSBhbmltYXRpb24uX3REdXIgKiB0b3RhbFByb2dyZXNzKSA6IGFuaW1hdGlvbi5wYXJlbnQgJiYgX3NldEVuZChhbmltYXRpb24pO1xuICBza2lwVW5jYWNoZSB8fCBfdW5jYWNoZShhbmltYXRpb24ucGFyZW50LCBhbmltYXRpb24pO1xuICByZXR1cm4gYW5pbWF0aW9uO1xufSxcbiAgICBfb25VcGRhdGVUb3RhbER1cmF0aW9uID0gZnVuY3Rpb24gX29uVXBkYXRlVG90YWxEdXJhdGlvbihhbmltYXRpb24pIHtcbiAgcmV0dXJuIGFuaW1hdGlvbiBpbnN0YW5jZW9mIFRpbWVsaW5lID8gX3VuY2FjaGUoYW5pbWF0aW9uKSA6IF9zZXREdXJhdGlvbihhbmltYXRpb24sIGFuaW1hdGlvbi5fZHVyKTtcbn0sXG4gICAgX3plcm9Qb3NpdGlvbiA9IHtcbiAgX3N0YXJ0OiAwLFxuICBlbmRUaW1lOiBfZW1wdHlGdW5jLFxuICB0b3RhbER1cmF0aW9uOiBfZW1wdHlGdW5jXG59LFxuICAgIF9wYXJzZVBvc2l0aW9uID0gZnVuY3Rpb24gX3BhcnNlUG9zaXRpb24oYW5pbWF0aW9uLCBwb3NpdGlvbiwgcGVyY2VudEFuaW1hdGlvbikge1xuICB2YXIgbGFiZWxzID0gYW5pbWF0aW9uLmxhYmVscyxcbiAgICAgIHJlY2VudCA9IGFuaW1hdGlvbi5fcmVjZW50IHx8IF96ZXJvUG9zaXRpb24sXG4gICAgICBjbGlwcGVkRHVyYXRpb24gPSBhbmltYXRpb24uZHVyYXRpb24oKSA+PSBfYmlnTnVtID8gcmVjZW50LmVuZFRpbWUoZmFsc2UpIDogYW5pbWF0aW9uLl9kdXIsXG4gICAgICAvL2luIGNhc2UgdGhlcmUncyBhIGNoaWxkIHRoYXQgaW5maW5pdGVseSByZXBlYXRzLCB1c2VycyBhbG1vc3QgbmV2ZXIgaW50ZW5kIGZvciB0aGUgaW5zZXJ0aW9uIHBvaW50IG9mIGEgbmV3IGNoaWxkIHRvIGJlIGJhc2VkIG9uIGEgU1VQRVIgbG9uZyB2YWx1ZSBsaWtlIHRoYXQgc28gd2UgY2xpcCBpdCBhbmQgYXNzdW1lIHRoZSBtb3N0IHJlY2VudGx5LWFkZGVkIGNoaWxkJ3MgZW5kVGltZSBzaG91bGQgYmUgdXNlZCBpbnN0ZWFkLlxuICBpLFxuICAgICAgb2Zmc2V0LFxuICAgICAgaXNQZXJjZW50O1xuXG4gIGlmIChfaXNTdHJpbmcocG9zaXRpb24pICYmIChpc05hTihwb3NpdGlvbikgfHwgcG9zaXRpb24gaW4gbGFiZWxzKSkge1xuICAgIC8vaWYgdGhlIHN0cmluZyBpcyBhIG51bWJlciBsaWtlIFwiMVwiLCBjaGVjayB0byBzZWUgaWYgdGhlcmUncyBhIGxhYmVsIHdpdGggdGhhdCBuYW1lLCBvdGhlcndpc2UgaW50ZXJwcmV0IGl0IGFzIGEgbnVtYmVyIChhYnNvbHV0ZSB2YWx1ZSkuXG4gICAgb2Zmc2V0ID0gcG9zaXRpb24uY2hhckF0KDApO1xuICAgIGlzUGVyY2VudCA9IHBvc2l0aW9uLnN1YnN0cigtMSkgPT09IFwiJVwiO1xuICAgIGkgPSBwb3NpdGlvbi5pbmRleE9mKFwiPVwiKTtcblxuICAgIGlmIChvZmZzZXQgPT09IFwiPFwiIHx8IG9mZnNldCA9PT0gXCI+XCIpIHtcbiAgICAgIGkgPj0gMCAmJiAocG9zaXRpb24gPSBwb3NpdGlvbi5yZXBsYWNlKC89LywgXCJcIikpO1xuICAgICAgcmV0dXJuIChvZmZzZXQgPT09IFwiPFwiID8gcmVjZW50Ll9zdGFydCA6IHJlY2VudC5lbmRUaW1lKHJlY2VudC5fcmVwZWF0ID49IDApKSArIChwYXJzZUZsb2F0KHBvc2l0aW9uLnN1YnN0cigxKSkgfHwgMCkgKiAoaXNQZXJjZW50ID8gKGkgPCAwID8gcmVjZW50IDogcGVyY2VudEFuaW1hdGlvbikudG90YWxEdXJhdGlvbigpIC8gMTAwIDogMSk7XG4gICAgfVxuXG4gICAgaWYgKGkgPCAwKSB7XG4gICAgICBwb3NpdGlvbiBpbiBsYWJlbHMgfHwgKGxhYmVsc1twb3NpdGlvbl0gPSBjbGlwcGVkRHVyYXRpb24pO1xuICAgICAgcmV0dXJuIGxhYmVsc1twb3NpdGlvbl07XG4gICAgfVxuXG4gICAgb2Zmc2V0ID0gcGFyc2VGbG9hdChwb3NpdGlvbi5jaGFyQXQoaSAtIDEpICsgcG9zaXRpb24uc3Vic3RyKGkgKyAxKSk7XG5cbiAgICBpZiAoaXNQZXJjZW50ICYmIHBlcmNlbnRBbmltYXRpb24pIHtcbiAgICAgIG9mZnNldCA9IG9mZnNldCAvIDEwMCAqIChfaXNBcnJheShwZXJjZW50QW5pbWF0aW9uKSA/IHBlcmNlbnRBbmltYXRpb25bMF0gOiBwZXJjZW50QW5pbWF0aW9uKS50b3RhbER1cmF0aW9uKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGkgPiAxID8gX3BhcnNlUG9zaXRpb24oYW5pbWF0aW9uLCBwb3NpdGlvbi5zdWJzdHIoMCwgaSAtIDEpLCBwZXJjZW50QW5pbWF0aW9uKSArIG9mZnNldCA6IGNsaXBwZWREdXJhdGlvbiArIG9mZnNldDtcbiAgfVxuXG4gIHJldHVybiBwb3NpdGlvbiA9PSBudWxsID8gY2xpcHBlZER1cmF0aW9uIDogK3Bvc2l0aW9uO1xufSxcbiAgICBfY3JlYXRlVHdlZW5UeXBlID0gZnVuY3Rpb24gX2NyZWF0ZVR3ZWVuVHlwZSh0eXBlLCBwYXJhbXMsIHRpbWVsaW5lKSB7XG4gIHZhciBpc0xlZ2FjeSA9IF9pc051bWJlcihwYXJhbXNbMV0pLFxuICAgICAgdmFyc0luZGV4ID0gKGlzTGVnYWN5ID8gMiA6IDEpICsgKHR5cGUgPCAyID8gMCA6IDEpLFxuICAgICAgdmFycyA9IHBhcmFtc1t2YXJzSW5kZXhdLFxuICAgICAgaXJWYXJzLFxuICAgICAgcGFyZW50O1xuXG4gIGlzTGVnYWN5ICYmICh2YXJzLmR1cmF0aW9uID0gcGFyYW1zWzFdKTtcbiAgdmFycy5wYXJlbnQgPSB0aW1lbGluZTtcblxuICBpZiAodHlwZSkge1xuICAgIGlyVmFycyA9IHZhcnM7XG4gICAgcGFyZW50ID0gdGltZWxpbmU7XG5cbiAgICB3aGlsZSAocGFyZW50ICYmICEoXCJpbW1lZGlhdGVSZW5kZXJcIiBpbiBpclZhcnMpKSB7XG4gICAgICAvLyBpbmhlcml0YW5jZSBoYXNuJ3QgaGFwcGVuZWQgeWV0LCBidXQgc29tZW9uZSBtYXkgaGF2ZSBzZXQgYSBkZWZhdWx0IGluIGFuIGFuY2VzdG9yIHRpbWVsaW5lLiBXZSBjb3VsZCBkbyB2YXJzLmltbWVkaWF0ZVJlbmRlciA9IF9pc05vdEZhbHNlKF9pbmhlcml0RGVmYXVsdHModmFycykuaW1tZWRpYXRlUmVuZGVyKSBidXQgdGhhdCdkIGV4YWN0IGEgc2xpZ2h0IHBlcmZvcm1hbmNlIHBlbmFsdHkgYmVjYXVzZSBfaW5oZXJpdERlZmF1bHRzKCkgYWxzbyBydW5zIGluIHRoZSBUd2VlbiBjb25zdHJ1Y3Rvci4gV2UncmUgcGF5aW5nIGEgc21hbGwga2IgcHJpY2UgaGVyZSB0byBnYWluIHNwZWVkLlxuICAgICAgaXJWYXJzID0gcGFyZW50LnZhcnMuZGVmYXVsdHMgfHwge307XG4gICAgICBwYXJlbnQgPSBfaXNOb3RGYWxzZShwYXJlbnQudmFycy5pbmhlcml0KSAmJiBwYXJlbnQucGFyZW50O1xuICAgIH1cblxuICAgIHZhcnMuaW1tZWRpYXRlUmVuZGVyID0gX2lzTm90RmFsc2UoaXJWYXJzLmltbWVkaWF0ZVJlbmRlcik7XG4gICAgdHlwZSA8IDIgPyB2YXJzLnJ1bkJhY2t3YXJkcyA9IDEgOiB2YXJzLnN0YXJ0QXQgPSBwYXJhbXNbdmFyc0luZGV4IC0gMV07IC8vIFwiZnJvbVwiIHZhcnNcbiAgfVxuXG4gIHJldHVybiBuZXcgVHdlZW4ocGFyYW1zWzBdLCB2YXJzLCBwYXJhbXNbdmFyc0luZGV4ICsgMV0pO1xufSxcbiAgICBfY29uZGl0aW9uYWxSZXR1cm4gPSBmdW5jdGlvbiBfY29uZGl0aW9uYWxSZXR1cm4odmFsdWUsIGZ1bmMpIHtcbiAgcmV0dXJuIHZhbHVlIHx8IHZhbHVlID09PSAwID8gZnVuYyh2YWx1ZSkgOiBmdW5jO1xufSxcbiAgICBfY2xhbXAgPSBmdW5jdGlvbiBfY2xhbXAobWluLCBtYXgsIHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA8IG1pbiA/IG1pbiA6IHZhbHVlID4gbWF4ID8gbWF4IDogdmFsdWU7XG59LFxuICAgIGdldFVuaXQgPSBmdW5jdGlvbiBnZXRVbml0KHZhbHVlLCB2KSB7XG4gIHJldHVybiAhX2lzU3RyaW5nKHZhbHVlKSB8fCAhKHYgPSBfdW5pdEV4cC5leGVjKHZhbHVlKSkgPyBcIlwiIDogdlsxXTtcbn0sXG4gICAgLy8gbm90ZTogcHJvdGVjdCBhZ2FpbnN0IHBhZGRlZCBudW1iZXJzIGFzIHN0cmluZ3MsIGxpa2UgXCIxMDAuMTAwXCIuIFRoYXQgc2hvdWxkbid0IHJldHVybiBcIjAwXCIgYXMgdGhlIHVuaXQuIElmIGl0J3MgbnVtZXJpYywgcmV0dXJuIG5vIHVuaXQuXG5jbGFtcCA9IGZ1bmN0aW9uIGNsYW1wKG1pbiwgbWF4LCB2YWx1ZSkge1xuICByZXR1cm4gX2NvbmRpdGlvbmFsUmV0dXJuKHZhbHVlLCBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiBfY2xhbXAobWluLCBtYXgsIHYpO1xuICB9KTtcbn0sXG4gICAgX3NsaWNlID0gW10uc2xpY2UsXG4gICAgX2lzQXJyYXlMaWtlID0gZnVuY3Rpb24gX2lzQXJyYXlMaWtlKHZhbHVlLCBub25FbXB0eSkge1xuICByZXR1cm4gdmFsdWUgJiYgX2lzT2JqZWN0KHZhbHVlKSAmJiBcImxlbmd0aFwiIGluIHZhbHVlICYmICghbm9uRW1wdHkgJiYgIXZhbHVlLmxlbmd0aCB8fCB2YWx1ZS5sZW5ndGggLSAxIGluIHZhbHVlICYmIF9pc09iamVjdCh2YWx1ZVswXSkpICYmICF2YWx1ZS5ub2RlVHlwZSAmJiB2YWx1ZSAhPT0gX3dpbjtcbn0sXG4gICAgX2ZsYXR0ZW4gPSBmdW5jdGlvbiBfZmxhdHRlbihhciwgbGVhdmVTdHJpbmdzLCBhY2N1bXVsYXRvcikge1xuICBpZiAoYWNjdW11bGF0b3IgPT09IHZvaWQgMCkge1xuICAgIGFjY3VtdWxhdG9yID0gW107XG4gIH1cblxuICByZXR1cm4gYXIuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICB2YXIgX2FjY3VtdWxhdG9yO1xuXG4gICAgcmV0dXJuIF9pc1N0cmluZyh2YWx1ZSkgJiYgIWxlYXZlU3RyaW5ncyB8fCBfaXNBcnJheUxpa2UodmFsdWUsIDEpID8gKF9hY2N1bXVsYXRvciA9IGFjY3VtdWxhdG9yKS5wdXNoLmFwcGx5KF9hY2N1bXVsYXRvciwgdG9BcnJheSh2YWx1ZSkpIDogYWNjdW11bGF0b3IucHVzaCh2YWx1ZSk7XG4gIH0pIHx8IGFjY3VtdWxhdG9yO1xufSxcbiAgICAvL3Rha2VzIGFueSB2YWx1ZSBhbmQgcmV0dXJucyBhbiBhcnJheS4gSWYgaXQncyBhIHN0cmluZyAoYW5kIGxlYXZlU3RyaW5ncyBpc24ndCB0cnVlKSwgaXQnbGwgdXNlIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoKSBhbmQgY29udmVydCB0aGF0IHRvIGFuIGFycmF5LiBJdCdsbCBhbHNvIGFjY2VwdCBpdGVyYWJsZXMgbGlrZSBqUXVlcnkgb2JqZWN0cy5cbnRvQXJyYXkgPSBmdW5jdGlvbiB0b0FycmF5KHZhbHVlLCBzY29wZSwgbGVhdmVTdHJpbmdzKSB7XG4gIHJldHVybiBfY29udGV4dCAmJiAhc2NvcGUgJiYgX2NvbnRleHQuc2VsZWN0b3IgPyBfY29udGV4dC5zZWxlY3Rvcih2YWx1ZSkgOiBfaXNTdHJpbmcodmFsdWUpICYmICFsZWF2ZVN0cmluZ3MgJiYgKF9jb3JlSW5pdHRlZCB8fCAhX3dha2UoKSkgPyBfc2xpY2UuY2FsbCgoc2NvcGUgfHwgX2RvYykucXVlcnlTZWxlY3RvckFsbCh2YWx1ZSksIDApIDogX2lzQXJyYXkodmFsdWUpID8gX2ZsYXR0ZW4odmFsdWUsIGxlYXZlU3RyaW5ncykgOiBfaXNBcnJheUxpa2UodmFsdWUpID8gX3NsaWNlLmNhbGwodmFsdWUsIDApIDogdmFsdWUgPyBbdmFsdWVdIDogW107XG59LFxuICAgIHNlbGVjdG9yID0gZnVuY3Rpb24gc2VsZWN0b3IodmFsdWUpIHtcbiAgdmFsdWUgPSB0b0FycmF5KHZhbHVlKVswXSB8fCBfd2FybihcIkludmFsaWQgc2NvcGVcIikgfHwge307XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHZhciBlbCA9IHZhbHVlLmN1cnJlbnQgfHwgdmFsdWUubmF0aXZlRWxlbWVudCB8fCB2YWx1ZTtcbiAgICByZXR1cm4gdG9BcnJheSh2LCBlbC5xdWVyeVNlbGVjdG9yQWxsID8gZWwgOiBlbCA9PT0gdmFsdWUgPyBfd2FybihcIkludmFsaWQgc2NvcGVcIikgfHwgX2RvYy5jcmVhdGVFbGVtZW50KFwiZGl2XCIpIDogdmFsdWUpO1xuICB9O1xufSxcbiAgICBzaHVmZmxlID0gZnVuY3Rpb24gc2h1ZmZsZShhKSB7XG4gIHJldHVybiBhLnNvcnQoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAuNSAtIE1hdGgucmFuZG9tKCk7XG4gIH0pO1xufSxcbiAgICAvLyBhbHRlcm5hdGl2ZSB0aGF0J3MgYSBiaXQgZmFzdGVyIGFuZCBtb3JlIHJlbGlhYmx5IGRpdmVyc2UgYnV0IGJpZ2dlcjogICBmb3IgKGxldCBqLCB2LCBpID0gYS5sZW5ndGg7IGk7IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBpKSwgdiA9IGFbLS1pXSwgYVtpXSA9IGFbal0sIGFbal0gPSB2KTsgcmV0dXJuIGE7XG4vL2ZvciBkaXN0cmlidXRpbmcgdmFsdWVzIGFjcm9zcyBhbiBhcnJheS4gQ2FuIGFjY2VwdCBhIG51bWJlciwgYSBmdW5jdGlvbiBvciAobW9zdCBjb21tb25seSkgYSBmdW5jdGlvbiB3aGljaCBjYW4gY29udGFpbiB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6IHtiYXNlLCBhbW91bnQsIGZyb20sIGVhc2UsIGdyaWQsIGF4aXMsIGxlbmd0aCwgZWFjaH0uIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGV4cGVjdHMgdGhlIGZvbGxvd2luZyBwYXJhbWV0ZXJzOiBpbmRleCwgdGFyZ2V0LCBhcnJheS4gUmVjb2duaXplcyB0aGUgZm9sbG93aW5nXG5kaXN0cmlidXRlID0gZnVuY3Rpb24gZGlzdHJpYnV0ZSh2KSB7XG4gIGlmIChfaXNGdW5jdGlvbih2KSkge1xuICAgIHJldHVybiB2O1xuICB9XG5cbiAgdmFyIHZhcnMgPSBfaXNPYmplY3QodikgPyB2IDoge1xuICAgIGVhY2g6IHZcbiAgfSxcbiAgICAgIC8vbjoxIGlzIGp1c3QgdG8gaW5kaWNhdGUgdiB3YXMgYSBudW1iZXI7IHdlIGxldmVyYWdlIHRoYXQgbGF0ZXIgdG8gc2V0IHYgYWNjb3JkaW5nIHRvIHRoZSBsZW5ndGggd2UgZ2V0LiBJZiBhIG51bWJlciBpcyBwYXNzZWQgaW4sIHdlIHRyZWF0IGl0IGxpa2UgdGhlIG9sZCBzdGFnZ2VyIHZhbHVlIHdoZXJlIDAuMSwgZm9yIGV4YW1wbGUsIHdvdWxkIG1lYW4gdGhhdCB0aGluZ3Mgd291bGQgYmUgZGlzdHJpYnV0ZWQgd2l0aCAwLjEgYmV0d2VlbiBlYWNoIGVsZW1lbnQgaW4gdGhlIGFycmF5IHJhdGhlciB0aGFuIGEgdG90YWwgXCJhbW91bnRcIiB0aGF0J3MgY2h1bmtlZCBvdXQgYW1vbmcgdGhlbSBhbGwuXG4gIGVhc2UgPSBfcGFyc2VFYXNlKHZhcnMuZWFzZSksXG4gICAgICBmcm9tID0gdmFycy5mcm9tIHx8IDAsXG4gICAgICBiYXNlID0gcGFyc2VGbG9hdCh2YXJzLmJhc2UpIHx8IDAsXG4gICAgICBjYWNoZSA9IHt9LFxuICAgICAgaXNEZWNpbWFsID0gZnJvbSA+IDAgJiYgZnJvbSA8IDEsXG4gICAgICByYXRpb3MgPSBpc05hTihmcm9tKSB8fCBpc0RlY2ltYWwsXG4gICAgICBheGlzID0gdmFycy5heGlzLFxuICAgICAgcmF0aW9YID0gZnJvbSxcbiAgICAgIHJhdGlvWSA9IGZyb207XG5cbiAgaWYgKF9pc1N0cmluZyhmcm9tKSkge1xuICAgIHJhdGlvWCA9IHJhdGlvWSA9IHtcbiAgICAgIGNlbnRlcjogLjUsXG4gICAgICBlZGdlczogLjUsXG4gICAgICBlbmQ6IDFcbiAgICB9W2Zyb21dIHx8IDA7XG4gIH0gZWxzZSBpZiAoIWlzRGVjaW1hbCAmJiByYXRpb3MpIHtcbiAgICByYXRpb1ggPSBmcm9tWzBdO1xuICAgIHJhdGlvWSA9IGZyb21bMV07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGksIHRhcmdldCwgYSkge1xuICAgIHZhciBsID0gKGEgfHwgdmFycykubGVuZ3RoLFxuICAgICAgICBkaXN0YW5jZXMgPSBjYWNoZVtsXSxcbiAgICAgICAgb3JpZ2luWCxcbiAgICAgICAgb3JpZ2luWSxcbiAgICAgICAgeCxcbiAgICAgICAgeSxcbiAgICAgICAgZCxcbiAgICAgICAgaixcbiAgICAgICAgbWF4LFxuICAgICAgICBtaW4sXG4gICAgICAgIHdyYXBBdDtcblxuICAgIGlmICghZGlzdGFuY2VzKSB7XG4gICAgICB3cmFwQXQgPSB2YXJzLmdyaWQgPT09IFwiYXV0b1wiID8gMCA6ICh2YXJzLmdyaWQgfHwgWzEsIF9iaWdOdW1dKVsxXTtcblxuICAgICAgaWYgKCF3cmFwQXQpIHtcbiAgICAgICAgbWF4ID0gLV9iaWdOdW07XG5cbiAgICAgICAgd2hpbGUgKG1heCA8IChtYXggPSBhW3dyYXBBdCsrXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0KSAmJiB3cmFwQXQgPCBsKSB7fVxuXG4gICAgICAgIHdyYXBBdC0tO1xuICAgICAgfVxuXG4gICAgICBkaXN0YW5jZXMgPSBjYWNoZVtsXSA9IFtdO1xuICAgICAgb3JpZ2luWCA9IHJhdGlvcyA/IE1hdGgubWluKHdyYXBBdCwgbCkgKiByYXRpb1ggLSAuNSA6IGZyb20gJSB3cmFwQXQ7XG4gICAgICBvcmlnaW5ZID0gd3JhcEF0ID09PSBfYmlnTnVtID8gMCA6IHJhdGlvcyA/IGwgKiByYXRpb1kgLyB3cmFwQXQgLSAuNSA6IGZyb20gLyB3cmFwQXQgfCAwO1xuICAgICAgbWF4ID0gMDtcbiAgICAgIG1pbiA9IF9iaWdOdW07XG5cbiAgICAgIGZvciAoaiA9IDA7IGogPCBsOyBqKyspIHtcbiAgICAgICAgeCA9IGogJSB3cmFwQXQgLSBvcmlnaW5YO1xuICAgICAgICB5ID0gb3JpZ2luWSAtIChqIC8gd3JhcEF0IHwgMCk7XG4gICAgICAgIGRpc3RhbmNlc1tqXSA9IGQgPSAhYXhpcyA/IF9zcXJ0KHggKiB4ICsgeSAqIHkpIDogTWF0aC5hYnMoYXhpcyA9PT0gXCJ5XCIgPyB5IDogeCk7XG4gICAgICAgIGQgPiBtYXggJiYgKG1heCA9IGQpO1xuICAgICAgICBkIDwgbWluICYmIChtaW4gPSBkKTtcbiAgICAgIH1cblxuICAgICAgZnJvbSA9PT0gXCJyYW5kb21cIiAmJiBzaHVmZmxlKGRpc3RhbmNlcyk7XG4gICAgICBkaXN0YW5jZXMubWF4ID0gbWF4IC0gbWluO1xuICAgICAgZGlzdGFuY2VzLm1pbiA9IG1pbjtcbiAgICAgIGRpc3RhbmNlcy52ID0gbCA9IChwYXJzZUZsb2F0KHZhcnMuYW1vdW50KSB8fCBwYXJzZUZsb2F0KHZhcnMuZWFjaCkgKiAod3JhcEF0ID4gbCA/IGwgLSAxIDogIWF4aXMgPyBNYXRoLm1heCh3cmFwQXQsIGwgLyB3cmFwQXQpIDogYXhpcyA9PT0gXCJ5XCIgPyBsIC8gd3JhcEF0IDogd3JhcEF0KSB8fCAwKSAqIChmcm9tID09PSBcImVkZ2VzXCIgPyAtMSA6IDEpO1xuICAgICAgZGlzdGFuY2VzLmIgPSBsIDwgMCA/IGJhc2UgLSBsIDogYmFzZTtcbiAgICAgIGRpc3RhbmNlcy51ID0gZ2V0VW5pdCh2YXJzLmFtb3VudCB8fCB2YXJzLmVhY2gpIHx8IDA7IC8vdW5pdFxuXG4gICAgICBlYXNlID0gZWFzZSAmJiBsIDwgMCA/IF9pbnZlcnRFYXNlKGVhc2UpIDogZWFzZTtcbiAgICB9XG5cbiAgICBsID0gKGRpc3RhbmNlc1tpXSAtIGRpc3RhbmNlcy5taW4pIC8gZGlzdGFuY2VzLm1heCB8fCAwO1xuICAgIHJldHVybiBfcm91bmRQcmVjaXNlKGRpc3RhbmNlcy5iICsgKGVhc2UgPyBlYXNlKGwpIDogbCkgKiBkaXN0YW5jZXMudikgKyBkaXN0YW5jZXMudTsgLy9yb3VuZCBpbiBvcmRlciB0byB3b3JrIGFyb3VuZCBmbG9hdGluZyBwb2ludCBlcnJvcnNcbiAgfTtcbn0sXG4gICAgX3JvdW5kTW9kaWZpZXIgPSBmdW5jdGlvbiBfcm91bmRNb2RpZmllcih2KSB7XG4gIC8vcGFzcyBpbiAwLjEgZ2V0IGEgZnVuY3Rpb24gdGhhdCdsbCByb3VuZCB0byB0aGUgbmVhcmVzdCB0ZW50aCwgb3IgNSB0byByb3VuZCB0byB0aGUgY2xvc2VzdCA1LCBvciAwLjAwMSB0byB0aGUgY2xvc2VzdCAxMDAwdGgsIGV0Yy5cbiAgdmFyIHAgPSBNYXRoLnBvdygxMCwgKCh2ICsgXCJcIikuc3BsaXQoXCIuXCIpWzFdIHx8IFwiXCIpLmxlbmd0aCk7IC8vdG8gYXZvaWQgZmxvYXRpbmcgcG9pbnQgbWF0aCBlcnJvcnMgKGxpa2UgMjQgKiAwLjEgPT0gMi40MDAwMDAwMDAwMDAwMDA0KSwgd2UgY2hvcCBvZmYgYXQgYSBzcGVjaWZpYyBudW1iZXIgb2YgZGVjaW1hbCBwbGFjZXMgKG11Y2ggZmFzdGVyIHRoYW4gdG9GaXhlZCgpKVxuXG4gIHJldHVybiBmdW5jdGlvbiAocmF3KSB7XG4gICAgdmFyIG4gPSBfcm91bmRQcmVjaXNlKE1hdGgucm91bmQocGFyc2VGbG9hdChyYXcpIC8gdikgKiB2ICogcCk7XG5cbiAgICByZXR1cm4gKG4gLSBuICUgMSkgLyBwICsgKF9pc051bWJlcihyYXcpID8gMCA6IGdldFVuaXQocmF3KSk7IC8vIG4gLSBuICUgMSByZXBsYWNlcyBNYXRoLmZsb29yKCkgaW4gb3JkZXIgdG8gaGFuZGxlIG5lZ2F0aXZlIHZhbHVlcyBwcm9wZXJseS4gRm9yIGV4YW1wbGUsIE1hdGguZmxvb3IoLTE1MC4wMDAwMDAwMDAwMDAwMykgaXMgMTUxIVxuICB9O1xufSxcbiAgICBzbmFwID0gZnVuY3Rpb24gc25hcChzbmFwVG8sIHZhbHVlKSB7XG4gIHZhciBpc0FycmF5ID0gX2lzQXJyYXkoc25hcFRvKSxcbiAgICAgIHJhZGl1cyxcbiAgICAgIGlzMkQ7XG5cbiAgaWYgKCFpc0FycmF5ICYmIF9pc09iamVjdChzbmFwVG8pKSB7XG4gICAgcmFkaXVzID0gaXNBcnJheSA9IHNuYXBUby5yYWRpdXMgfHwgX2JpZ051bTtcblxuICAgIGlmIChzbmFwVG8udmFsdWVzKSB7XG4gICAgICBzbmFwVG8gPSB0b0FycmF5KHNuYXBUby52YWx1ZXMpO1xuXG4gICAgICBpZiAoaXMyRCA9ICFfaXNOdW1iZXIoc25hcFRvWzBdKSkge1xuICAgICAgICByYWRpdXMgKj0gcmFkaXVzOyAvL3BlcmZvcm1hbmNlIG9wdGltaXphdGlvbiBzbyB3ZSBkb24ndCBoYXZlIHRvIE1hdGguc3FydCgpIGluIHRoZSBsb29wLlxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzbmFwVG8gPSBfcm91bmRNb2RpZmllcihzbmFwVG8uaW5jcmVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2NvbmRpdGlvbmFsUmV0dXJuKHZhbHVlLCAhaXNBcnJheSA/IF9yb3VuZE1vZGlmaWVyKHNuYXBUbykgOiBfaXNGdW5jdGlvbihzbmFwVG8pID8gZnVuY3Rpb24gKHJhdykge1xuICAgIGlzMkQgPSBzbmFwVG8ocmF3KTtcbiAgICByZXR1cm4gTWF0aC5hYnMoaXMyRCAtIHJhdykgPD0gcmFkaXVzID8gaXMyRCA6IHJhdztcbiAgfSA6IGZ1bmN0aW9uIChyYXcpIHtcbiAgICB2YXIgeCA9IHBhcnNlRmxvYXQoaXMyRCA/IHJhdy54IDogcmF3KSxcbiAgICAgICAgeSA9IHBhcnNlRmxvYXQoaXMyRCA/IHJhdy55IDogMCksXG4gICAgICAgIG1pbiA9IF9iaWdOdW0sXG4gICAgICAgIGNsb3Nlc3QgPSAwLFxuICAgICAgICBpID0gc25hcFRvLmxlbmd0aCxcbiAgICAgICAgZHgsXG4gICAgICAgIGR5O1xuXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgaWYgKGlzMkQpIHtcbiAgICAgICAgZHggPSBzbmFwVG9baV0ueCAtIHg7XG4gICAgICAgIGR5ID0gc25hcFRvW2ldLnkgLSB5O1xuICAgICAgICBkeCA9IGR4ICogZHggKyBkeSAqIGR5O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZHggPSBNYXRoLmFicyhzbmFwVG9baV0gLSB4KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGR4IDwgbWluKSB7XG4gICAgICAgIG1pbiA9IGR4O1xuICAgICAgICBjbG9zZXN0ID0gaTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjbG9zZXN0ID0gIXJhZGl1cyB8fCBtaW4gPD0gcmFkaXVzID8gc25hcFRvW2Nsb3Nlc3RdIDogcmF3O1xuICAgIHJldHVybiBpczJEIHx8IGNsb3Nlc3QgPT09IHJhdyB8fCBfaXNOdW1iZXIocmF3KSA/IGNsb3Nlc3QgOiBjbG9zZXN0ICsgZ2V0VW5pdChyYXcpO1xuICB9KTtcbn0sXG4gICAgcmFuZG9tID0gZnVuY3Rpb24gcmFuZG9tKG1pbiwgbWF4LCByb3VuZGluZ0luY3JlbWVudCwgcmV0dXJuRnVuY3Rpb24pIHtcbiAgcmV0dXJuIF9jb25kaXRpb25hbFJldHVybihfaXNBcnJheShtaW4pID8gIW1heCA6IHJvdW5kaW5nSW5jcmVtZW50ID09PSB0cnVlID8gISEocm91bmRpbmdJbmNyZW1lbnQgPSAwKSA6ICFyZXR1cm5GdW5jdGlvbiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfaXNBcnJheShtaW4pID8gbWluW35+KE1hdGgucmFuZG9tKCkgKiBtaW4ubGVuZ3RoKV0gOiAocm91bmRpbmdJbmNyZW1lbnQgPSByb3VuZGluZ0luY3JlbWVudCB8fCAxZS01KSAmJiAocmV0dXJuRnVuY3Rpb24gPSByb3VuZGluZ0luY3JlbWVudCA8IDEgPyBNYXRoLnBvdygxMCwgKHJvdW5kaW5nSW5jcmVtZW50ICsgXCJcIikubGVuZ3RoIC0gMikgOiAxKSAmJiBNYXRoLmZsb29yKE1hdGgucm91bmQoKG1pbiAtIHJvdW5kaW5nSW5jcmVtZW50IC8gMiArIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgcm91bmRpbmdJbmNyZW1lbnQgKiAuOTkpKSAvIHJvdW5kaW5nSW5jcmVtZW50KSAqIHJvdW5kaW5nSW5jcmVtZW50ICogcmV0dXJuRnVuY3Rpb24pIC8gcmV0dXJuRnVuY3Rpb247XG4gIH0pO1xufSxcbiAgICBwaXBlID0gZnVuY3Rpb24gcGlwZSgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGZ1bmN0aW9ucyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBmdW5jdGlvbnNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9ucy5yZWR1Y2UoZnVuY3Rpb24gKHYsIGYpIHtcbiAgICAgIHJldHVybiBmKHYpO1xuICAgIH0sIHZhbHVlKTtcbiAgfTtcbn0sXG4gICAgdW5pdGl6ZSA9IGZ1bmN0aW9uIHVuaXRpemUoZnVuYywgdW5pdCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIGZ1bmMocGFyc2VGbG9hdCh2YWx1ZSkpICsgKHVuaXQgfHwgZ2V0VW5pdCh2YWx1ZSkpO1xuICB9O1xufSxcbiAgICBub3JtYWxpemUgPSBmdW5jdGlvbiBub3JtYWxpemUobWluLCBtYXgsIHZhbHVlKSB7XG4gIHJldHVybiBtYXBSYW5nZShtaW4sIG1heCwgMCwgMSwgdmFsdWUpO1xufSxcbiAgICBfd3JhcEFycmF5ID0gZnVuY3Rpb24gX3dyYXBBcnJheShhLCB3cmFwcGVyLCB2YWx1ZSkge1xuICByZXR1cm4gX2NvbmRpdGlvbmFsUmV0dXJuKHZhbHVlLCBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICByZXR1cm4gYVt+fndyYXBwZXIoaW5kZXgpXTtcbiAgfSk7XG59LFxuICAgIHdyYXAgPSBmdW5jdGlvbiB3cmFwKG1pbiwgbWF4LCB2YWx1ZSkge1xuICAvLyBOT1RFOiB3cmFwKCkgQ0FOTk9UIGJlIGFuIGFycm93IGZ1bmN0aW9uISBBIHZlcnkgb2RkIGNvbXBpbGluZyBidWcgY2F1c2VzIHByb2JsZW1zICh1bnJlbGF0ZWQgdG8gR1NBUCkuXG4gIHZhciByYW5nZSA9IG1heCAtIG1pbjtcbiAgcmV0dXJuIF9pc0FycmF5KG1pbikgPyBfd3JhcEFycmF5KG1pbiwgd3JhcCgwLCBtaW4ubGVuZ3RoKSwgbWF4KSA6IF9jb25kaXRpb25hbFJldHVybih2YWx1ZSwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIChyYW5nZSArICh2YWx1ZSAtIG1pbikgJSByYW5nZSkgJSByYW5nZSArIG1pbjtcbiAgfSk7XG59LFxuICAgIHdyYXBZb3lvID0gZnVuY3Rpb24gd3JhcFlveW8obWluLCBtYXgsIHZhbHVlKSB7XG4gIHZhciByYW5nZSA9IG1heCAtIG1pbixcbiAgICAgIHRvdGFsID0gcmFuZ2UgKiAyO1xuICByZXR1cm4gX2lzQXJyYXkobWluKSA/IF93cmFwQXJyYXkobWluLCB3cmFwWW95bygwLCBtaW4ubGVuZ3RoIC0gMSksIG1heCkgOiBfY29uZGl0aW9uYWxSZXR1cm4odmFsdWUsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHZhbHVlID0gKHRvdGFsICsgKHZhbHVlIC0gbWluKSAlIHRvdGFsKSAlIHRvdGFsIHx8IDA7XG4gICAgcmV0dXJuIG1pbiArICh2YWx1ZSA+IHJhbmdlID8gdG90YWwgLSB2YWx1ZSA6IHZhbHVlKTtcbiAgfSk7XG59LFxuICAgIF9yZXBsYWNlUmFuZG9tID0gZnVuY3Rpb24gX3JlcGxhY2VSYW5kb20odmFsdWUpIHtcbiAgLy9yZXBsYWNlcyBhbGwgb2NjdXJyZW5jZXMgb2YgcmFuZG9tKC4uLikgaW4gYSBzdHJpbmcgd2l0aCB0aGUgY2FsY3VsYXRlZCByYW5kb20gdmFsdWUuIGNhbiBiZSBhIHJhbmdlIGxpa2UgcmFuZG9tKC0xMDAsIDEwMCwgNSkgb3IgYW4gYXJyYXkgbGlrZSByYW5kb20oWzAsIDEwMCwgNTAwXSlcbiAgdmFyIHByZXYgPSAwLFxuICAgICAgcyA9IFwiXCIsXG4gICAgICBpLFxuICAgICAgbnVtcyxcbiAgICAgIGVuZCxcbiAgICAgIGlzQXJyYXk7XG5cbiAgd2hpbGUgKH4oaSA9IHZhbHVlLmluZGV4T2YoXCJyYW5kb20oXCIsIHByZXYpKSkge1xuICAgIGVuZCA9IHZhbHVlLmluZGV4T2YoXCIpXCIsIGkpO1xuICAgIGlzQXJyYXkgPSB2YWx1ZS5jaGFyQXQoaSArIDcpID09PSBcIltcIjtcbiAgICBudW1zID0gdmFsdWUuc3Vic3RyKGkgKyA3LCBlbmQgLSBpIC0gNykubWF0Y2goaXNBcnJheSA/IF9kZWxpbWl0ZWRWYWx1ZUV4cCA6IF9zdHJpY3ROdW1FeHApO1xuICAgIHMgKz0gdmFsdWUuc3Vic3RyKHByZXYsIGkgLSBwcmV2KSArIHJhbmRvbShpc0FycmF5ID8gbnVtcyA6ICtudW1zWzBdLCBpc0FycmF5ID8gMCA6ICtudW1zWzFdLCArbnVtc1syXSB8fCAxZS01KTtcbiAgICBwcmV2ID0gZW5kICsgMTtcbiAgfVxuXG4gIHJldHVybiBzICsgdmFsdWUuc3Vic3RyKHByZXYsIHZhbHVlLmxlbmd0aCAtIHByZXYpO1xufSxcbiAgICBtYXBSYW5nZSA9IGZ1bmN0aW9uIG1hcFJhbmdlKGluTWluLCBpbk1heCwgb3V0TWluLCBvdXRNYXgsIHZhbHVlKSB7XG4gIHZhciBpblJhbmdlID0gaW5NYXggLSBpbk1pbixcbiAgICAgIG91dFJhbmdlID0gb3V0TWF4IC0gb3V0TWluO1xuICByZXR1cm4gX2NvbmRpdGlvbmFsUmV0dXJuKHZhbHVlLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gb3V0TWluICsgKCh2YWx1ZSAtIGluTWluKSAvIGluUmFuZ2UgKiBvdXRSYW5nZSB8fCAwKTtcbiAgfSk7XG59LFxuICAgIGludGVycG9sYXRlID0gZnVuY3Rpb24gaW50ZXJwb2xhdGUoc3RhcnQsIGVuZCwgcHJvZ3Jlc3MsIG11dGF0ZSkge1xuICB2YXIgZnVuYyA9IGlzTmFOKHN0YXJ0ICsgZW5kKSA/IDAgOiBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiAoMSAtIHApICogc3RhcnQgKyBwICogZW5kO1xuICB9O1xuXG4gIGlmICghZnVuYykge1xuICAgIHZhciBpc1N0cmluZyA9IF9pc1N0cmluZyhzdGFydCksXG4gICAgICAgIG1hc3RlciA9IHt9LFxuICAgICAgICBwLFxuICAgICAgICBpLFxuICAgICAgICBpbnRlcnBvbGF0b3JzLFxuICAgICAgICBsLFxuICAgICAgICBpbDtcblxuICAgIHByb2dyZXNzID09PSB0cnVlICYmIChtdXRhdGUgPSAxKSAmJiAocHJvZ3Jlc3MgPSBudWxsKTtcblxuICAgIGlmIChpc1N0cmluZykge1xuICAgICAgc3RhcnQgPSB7XG4gICAgICAgIHA6IHN0YXJ0XG4gICAgICB9O1xuICAgICAgZW5kID0ge1xuICAgICAgICBwOiBlbmRcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmIChfaXNBcnJheShzdGFydCkgJiYgIV9pc0FycmF5KGVuZCkpIHtcbiAgICAgIGludGVycG9sYXRvcnMgPSBbXTtcbiAgICAgIGwgPSBzdGFydC5sZW5ndGg7XG4gICAgICBpbCA9IGwgLSAyO1xuXG4gICAgICBmb3IgKGkgPSAxOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGludGVycG9sYXRvcnMucHVzaChpbnRlcnBvbGF0ZShzdGFydFtpIC0gMV0sIHN0YXJ0W2ldKSk7IC8vYnVpbGQgdGhlIGludGVycG9sYXRvcnMgdXAgZnJvbnQgYXMgYSBwZXJmb3JtYW5jZSBvcHRpbWl6YXRpb24gc28gdGhhdCB3aGVuIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQgbWFueSB0aW1lcywgaXQgY2FuIGp1c3QgcmV1c2UgdGhlbS5cbiAgICAgIH1cblxuICAgICAgbC0tO1xuXG4gICAgICBmdW5jID0gZnVuY3Rpb24gZnVuYyhwKSB7XG4gICAgICAgIHAgKj0gbDtcbiAgICAgICAgdmFyIGkgPSBNYXRoLm1pbihpbCwgfn5wKTtcbiAgICAgICAgcmV0dXJuIGludGVycG9sYXRvcnNbaV0ocCAtIGkpO1xuICAgICAgfTtcblxuICAgICAgcHJvZ3Jlc3MgPSBlbmQ7XG4gICAgfSBlbHNlIGlmICghbXV0YXRlKSB7XG4gICAgICBzdGFydCA9IF9tZXJnZShfaXNBcnJheShzdGFydCkgPyBbXSA6IHt9LCBzdGFydCk7XG4gICAgfVxuXG4gICAgaWYgKCFpbnRlcnBvbGF0b3JzKSB7XG4gICAgICBmb3IgKHAgaW4gZW5kKSB7XG4gICAgICAgIF9hZGRQcm9wVHdlZW4uY2FsbChtYXN0ZXIsIHN0YXJ0LCBwLCBcImdldFwiLCBlbmRbcF0pO1xuICAgICAgfVxuXG4gICAgICBmdW5jID0gZnVuY3Rpb24gZnVuYyhwKSB7XG4gICAgICAgIHJldHVybiBfcmVuZGVyUHJvcFR3ZWVucyhwLCBtYXN0ZXIpIHx8IChpc1N0cmluZyA/IHN0YXJ0LnAgOiBzdGFydCk7XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfY29uZGl0aW9uYWxSZXR1cm4ocHJvZ3Jlc3MsIGZ1bmMpO1xufSxcbiAgICBfZ2V0TGFiZWxJbkRpcmVjdGlvbiA9IGZ1bmN0aW9uIF9nZXRMYWJlbEluRGlyZWN0aW9uKHRpbWVsaW5lLCBmcm9tVGltZSwgYmFja3dhcmQpIHtcbiAgLy91c2VkIGZvciBuZXh0TGFiZWwoKSBhbmQgcHJldmlvdXNMYWJlbCgpXG4gIHZhciBsYWJlbHMgPSB0aW1lbGluZS5sYWJlbHMsXG4gICAgICBtaW4gPSBfYmlnTnVtLFxuICAgICAgcCxcbiAgICAgIGRpc3RhbmNlLFxuICAgICAgbGFiZWw7XG5cbiAgZm9yIChwIGluIGxhYmVscykge1xuICAgIGRpc3RhbmNlID0gbGFiZWxzW3BdIC0gZnJvbVRpbWU7XG5cbiAgICBpZiAoZGlzdGFuY2UgPCAwID09PSAhIWJhY2t3YXJkICYmIGRpc3RhbmNlICYmIG1pbiA+IChkaXN0YW5jZSA9IE1hdGguYWJzKGRpc3RhbmNlKSkpIHtcbiAgICAgIGxhYmVsID0gcDtcbiAgICAgIG1pbiA9IGRpc3RhbmNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBsYWJlbDtcbn0sXG4gICAgX2NhbGxiYWNrID0gZnVuY3Rpb24gX2NhbGxiYWNrKGFuaW1hdGlvbiwgdHlwZSwgZXhlY3V0ZUxhenlGaXJzdCkge1xuICB2YXIgdiA9IGFuaW1hdGlvbi52YXJzLFxuICAgICAgY2FsbGJhY2sgPSB2W3R5cGVdLFxuICAgICAgcHJldkNvbnRleHQgPSBfY29udGV4dCxcbiAgICAgIGNvbnRleHQgPSBhbmltYXRpb24uX2N0eCxcbiAgICAgIHBhcmFtcyxcbiAgICAgIHNjb3BlLFxuICAgICAgcmVzdWx0O1xuXG4gIGlmICghY2FsbGJhY2spIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBwYXJhbXMgPSB2W3R5cGUgKyBcIlBhcmFtc1wiXTtcbiAgc2NvcGUgPSB2LmNhbGxiYWNrU2NvcGUgfHwgYW5pbWF0aW9uO1xuICBleGVjdXRlTGF6eUZpcnN0ICYmIF9sYXp5VHdlZW5zLmxlbmd0aCAmJiBfbGF6eVJlbmRlcigpOyAvL2luIGNhc2UgcmVuZGVyaW5nIGNhdXNlZCBhbnkgdHdlZW5zIHRvIGxhenktaW5pdCwgd2Ugc2hvdWxkIHJlbmRlciB0aGVtIGJlY2F1c2UgdHlwaWNhbGx5IHdoZW4gYSB0aW1lbGluZSBmaW5pc2hlcywgdXNlcnMgZXhwZWN0IHRoaW5ncyB0byBoYXZlIHJlbmRlcmVkIGZ1bGx5LiBJbWFnaW5lIGFuIG9uVXBkYXRlIG9uIGEgdGltZWxpbmUgdGhhdCByZXBvcnRzL2NoZWNrcyB0d2VlbmVkIHZhbHVlcy5cblxuICBjb250ZXh0ICYmIChfY29udGV4dCA9IGNvbnRleHQpO1xuICByZXN1bHQgPSBwYXJhbXMgPyBjYWxsYmFjay5hcHBseShzY29wZSwgcGFyYW1zKSA6IGNhbGxiYWNrLmNhbGwoc2NvcGUpO1xuICBfY29udGV4dCA9IHByZXZDb250ZXh0O1xuICByZXR1cm4gcmVzdWx0O1xufSxcbiAgICBfaW50ZXJydXB0ID0gZnVuY3Rpb24gX2ludGVycnVwdChhbmltYXRpb24pIHtcbiAgX3JlbW92ZUZyb21QYXJlbnQoYW5pbWF0aW9uKTtcblxuICBhbmltYXRpb24uc2Nyb2xsVHJpZ2dlciAmJiBhbmltYXRpb24uc2Nyb2xsVHJpZ2dlci5raWxsKGZhbHNlKTtcbiAgYW5pbWF0aW9uLnByb2dyZXNzKCkgPCAxICYmIF9jYWxsYmFjayhhbmltYXRpb24sIFwib25JbnRlcnJ1cHRcIik7XG4gIHJldHVybiBhbmltYXRpb247XG59LFxuICAgIF9xdWlja1R3ZWVuLFxuICAgIF9jcmVhdGVQbHVnaW4gPSBmdW5jdGlvbiBfY3JlYXRlUGx1Z2luKGNvbmZpZykge1xuICBjb25maWcgPSAhY29uZmlnLm5hbWUgJiYgY29uZmlnW1wiZGVmYXVsdFwiXSB8fCBjb25maWc7IC8vVU1EIHBhY2thZ2luZyB3cmFwcyB0aGluZ3Mgb2RkbHksIHNvIGZvciBleGFtcGxlIE1vdGlvblBhdGhIZWxwZXIgYmVjb21lcyB7TW90aW9uUGF0aEhlbHBlcjpNb3Rpb25QYXRoSGVscGVyLCBkZWZhdWx0Ok1vdGlvblBhdGhIZWxwZXJ9LlxuXG4gIHZhciBuYW1lID0gY29uZmlnLm5hbWUsXG4gICAgICBpc0Z1bmMgPSBfaXNGdW5jdGlvbihjb25maWcpLFxuICAgICAgUGx1Z2luID0gbmFtZSAmJiAhaXNGdW5jICYmIGNvbmZpZy5pbml0ID8gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX3Byb3BzID0gW107XG4gIH0gOiBjb25maWcsXG4gICAgICAvL2luIGNhc2Ugc29tZW9uZSBwYXNzZXMgaW4gYW4gb2JqZWN0IHRoYXQncyBub3QgYSBwbHVnaW4sIGxpa2UgQ3VzdG9tRWFzZVxuICBpbnN0YW5jZURlZmF1bHRzID0ge1xuICAgIGluaXQ6IF9lbXB0eUZ1bmMsXG4gICAgcmVuZGVyOiBfcmVuZGVyUHJvcFR3ZWVucyxcbiAgICBhZGQ6IF9hZGRQcm9wVHdlZW4sXG4gICAga2lsbDogX2tpbGxQcm9wVHdlZW5zT2YsXG4gICAgbW9kaWZpZXI6IF9hZGRQbHVnaW5Nb2RpZmllcixcbiAgICByYXdWYXJzOiAwXG4gIH0sXG4gICAgICBzdGF0aWNzID0ge1xuICAgIHRhcmdldFRlc3Q6IDAsXG4gICAgZ2V0OiAwLFxuICAgIGdldFNldHRlcjogX2dldFNldHRlcixcbiAgICBhbGlhc2VzOiB7fSxcbiAgICByZWdpc3RlcjogMFxuICB9O1xuXG4gIF93YWtlKCk7XG5cbiAgaWYgKGNvbmZpZyAhPT0gUGx1Z2luKSB7XG4gICAgaWYgKF9wbHVnaW5zW25hbWVdKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgX3NldERlZmF1bHRzKFBsdWdpbiwgX3NldERlZmF1bHRzKF9jb3B5RXhjbHVkaW5nKGNvbmZpZywgaW5zdGFuY2VEZWZhdWx0cyksIHN0YXRpY3MpKTsgLy9zdGF0aWMgbWV0aG9kc1xuXG5cbiAgICBfbWVyZ2UoUGx1Z2luLnByb3RvdHlwZSwgX21lcmdlKGluc3RhbmNlRGVmYXVsdHMsIF9jb3B5RXhjbHVkaW5nKGNvbmZpZywgc3RhdGljcykpKTsgLy9pbnN0YW5jZSBtZXRob2RzXG5cblxuICAgIF9wbHVnaW5zW1BsdWdpbi5wcm9wID0gbmFtZV0gPSBQbHVnaW47XG5cbiAgICBpZiAoY29uZmlnLnRhcmdldFRlc3QpIHtcbiAgICAgIF9oYXJuZXNzUGx1Z2lucy5wdXNoKFBsdWdpbik7XG5cbiAgICAgIF9yZXNlcnZlZFByb3BzW25hbWVdID0gMTtcbiAgICB9XG5cbiAgICBuYW1lID0gKG5hbWUgPT09IFwiY3NzXCIgPyBcIkNTU1wiIDogbmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG5hbWUuc3Vic3RyKDEpKSArIFwiUGx1Z2luXCI7IC8vZm9yIHRoZSBnbG9iYWwgbmFtZS4gXCJtb3Rpb25QYXRoXCIgc2hvdWxkIGJlY29tZSBNb3Rpb25QYXRoUGx1Z2luXG4gIH1cblxuICBfYWRkR2xvYmFsKG5hbWUsIFBsdWdpbik7XG5cbiAgY29uZmlnLnJlZ2lzdGVyICYmIGNvbmZpZy5yZWdpc3Rlcihnc2FwLCBQbHVnaW4sIFByb3BUd2Vlbik7XG59LFxuXG4vKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENPTE9SU1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXzI1NSA9IDI1NSxcbiAgICBfY29sb3JMb29rdXAgPSB7XG4gIGFxdWE6IFswLCBfMjU1LCBfMjU1XSxcbiAgbGltZTogWzAsIF8yNTUsIDBdLFxuICBzaWx2ZXI6IFsxOTIsIDE5MiwgMTkyXSxcbiAgYmxhY2s6IFswLCAwLCAwXSxcbiAgbWFyb29uOiBbMTI4LCAwLCAwXSxcbiAgdGVhbDogWzAsIDEyOCwgMTI4XSxcbiAgYmx1ZTogWzAsIDAsIF8yNTVdLFxuICBuYXZ5OiBbMCwgMCwgMTI4XSxcbiAgd2hpdGU6IFtfMjU1LCBfMjU1LCBfMjU1XSxcbiAgb2xpdmU6IFsxMjgsIDEyOCwgMF0sXG4gIHllbGxvdzogW18yNTUsIF8yNTUsIDBdLFxuICBvcmFuZ2U6IFtfMjU1LCAxNjUsIDBdLFxuICBncmF5OiBbMTI4LCAxMjgsIDEyOF0sXG4gIHB1cnBsZTogWzEyOCwgMCwgMTI4XSxcbiAgZ3JlZW46IFswLCAxMjgsIDBdLFxuICByZWQ6IFtfMjU1LCAwLCAwXSxcbiAgcGluazogW18yNTUsIDE5MiwgMjAzXSxcbiAgY3lhbjogWzAsIF8yNTUsIF8yNTVdLFxuICB0cmFuc3BhcmVudDogW18yNTUsIF8yNTUsIF8yNTUsIDBdXG59LFxuICAgIC8vIHBvc3NpYmxlIGZ1dHVyZSBpZGVhIHRvIHJlcGxhY2UgdGhlIGhhcmQtY29kZWQgY29sb3IgbmFtZSB2YWx1ZXMgLSBwdXQgdGhpcyBpbiB0aGUgdGlja2VyLndha2UoKSB3aGVyZSB3ZSBzZXQgdGhlIF9kb2M6XG4vLyBsZXQgY3R4ID0gX2RvYy5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpLmdldENvbnRleHQoXCIyZFwiKTtcbi8vIF9mb3JFYWNoTmFtZShcImFxdWEsbGltZSxzaWx2ZXIsYmxhY2ssbWFyb29uLHRlYWwsYmx1ZSxuYXZ5LHdoaXRlLG9saXZlLHllbGxvdyxvcmFuZ2UsZ3JheSxwdXJwbGUsZ3JlZW4scmVkLHBpbmssY3lhblwiLCBjb2xvciA9PiB7Y3R4LmZpbGxTdHlsZSA9IGNvbG9yOyBfY29sb3JMb29rdXBbY29sb3JdID0gc3BsaXRDb2xvcihjdHguZmlsbFN0eWxlKX0pO1xuX2h1ZSA9IGZ1bmN0aW9uIF9odWUoaCwgbTEsIG0yKSB7XG4gIGggKz0gaCA8IDAgPyAxIDogaCA+IDEgPyAtMSA6IDA7XG4gIHJldHVybiAoaCAqIDYgPCAxID8gbTEgKyAobTIgLSBtMSkgKiBoICogNiA6IGggPCAuNSA/IG0yIDogaCAqIDMgPCAyID8gbTEgKyAobTIgLSBtMSkgKiAoMiAvIDMgLSBoKSAqIDYgOiBtMSkgKiBfMjU1ICsgLjUgfCAwO1xufSxcbiAgICBzcGxpdENvbG9yID0gZnVuY3Rpb24gc3BsaXRDb2xvcih2LCB0b0hTTCwgZm9yY2VBbHBoYSkge1xuICB2YXIgYSA9ICF2ID8gX2NvbG9yTG9va3VwLmJsYWNrIDogX2lzTnVtYmVyKHYpID8gW3YgPj4gMTYsIHYgPj4gOCAmIF8yNTUsIHYgJiBfMjU1XSA6IDAsXG4gICAgICByLFxuICAgICAgZyxcbiAgICAgIGIsXG4gICAgICBoLFxuICAgICAgcyxcbiAgICAgIGwsXG4gICAgICBtYXgsXG4gICAgICBtaW4sXG4gICAgICBkLFxuICAgICAgd2FzSFNMO1xuXG4gIGlmICghYSkge1xuICAgIGlmICh2LnN1YnN0cigtMSkgPT09IFwiLFwiKSB7XG4gICAgICAvL3NvbWV0aW1lcyBhIHRyYWlsaW5nIGNvbW1hIGlzIGluY2x1ZGVkIGFuZCB3ZSBzaG91bGQgY2hvcCBpdCBvZmYgKHR5cGljYWxseSBmcm9tIGEgY29tbWEtZGVsaW1pdGVkIGxpc3Qgb2YgdmFsdWVzIGxpa2UgYSB0ZXh0U2hhZG93OlwiMnB4IDJweCAycHggYmx1ZSwgNXB4IDVweCA1cHggcmdiKDI1NSwwLDApXCIgLSBpbiB0aGlzIGV4YW1wbGUgXCJibHVlLFwiIGhhcyBhIHRyYWlsaW5nIGNvbW1hLiBXZSBjb3VsZCBzdHJpcCBpdCBvdXQgaW5zaWRlIHBhcnNlQ29tcGxleCgpIGJ1dCB3ZSdkIG5lZWQgdG8gZG8gaXQgdG8gdGhlIGJlZ2lubmluZyBhbmQgZW5kaW5nIHZhbHVlcyBwbHVzIGl0IHdvdWxkbid0IHByb3ZpZGUgcHJvdGVjdGlvbiBmcm9tIG90aGVyIHBvdGVudGlhbCBzY2VuYXJpb3MgbGlrZSBpZiB0aGUgdXNlciBwYXNzZXMgaW4gYSBzaW1pbGFyIHZhbHVlLlxuICAgICAgdiA9IHYuc3Vic3RyKDAsIHYubGVuZ3RoIC0gMSk7XG4gICAgfVxuXG4gICAgaWYgKF9jb2xvckxvb2t1cFt2XSkge1xuICAgICAgYSA9IF9jb2xvckxvb2t1cFt2XTtcbiAgICB9IGVsc2UgaWYgKHYuY2hhckF0KDApID09PSBcIiNcIikge1xuICAgICAgaWYgKHYubGVuZ3RoIDwgNikge1xuICAgICAgICAvL2ZvciBzaG9ydGhhbmQgbGlrZSAjOUYwIG9yICM5RjBGIChjb3VsZCBoYXZlIGFscGhhKVxuICAgICAgICByID0gdi5jaGFyQXQoMSk7XG4gICAgICAgIGcgPSB2LmNoYXJBdCgyKTtcbiAgICAgICAgYiA9IHYuY2hhckF0KDMpO1xuICAgICAgICB2ID0gXCIjXCIgKyByICsgciArIGcgKyBnICsgYiArIGIgKyAodi5sZW5ndGggPT09IDUgPyB2LmNoYXJBdCg0KSArIHYuY2hhckF0KDQpIDogXCJcIik7XG4gICAgICB9XG5cbiAgICAgIGlmICh2Lmxlbmd0aCA9PT0gOSkge1xuICAgICAgICAvLyBoZXggd2l0aCBhbHBoYSwgbGlrZSAjZmQ1ZTUzZmZcbiAgICAgICAgYSA9IHBhcnNlSW50KHYuc3Vic3RyKDEsIDYpLCAxNik7XG4gICAgICAgIHJldHVybiBbYSA+PiAxNiwgYSA+PiA4ICYgXzI1NSwgYSAmIF8yNTUsIHBhcnNlSW50KHYuc3Vic3RyKDcpLCAxNikgLyAyNTVdO1xuICAgICAgfVxuXG4gICAgICB2ID0gcGFyc2VJbnQodi5zdWJzdHIoMSksIDE2KTtcbiAgICAgIGEgPSBbdiA+PiAxNiwgdiA+PiA4ICYgXzI1NSwgdiAmIF8yNTVdO1xuICAgIH0gZWxzZSBpZiAodi5zdWJzdHIoMCwgMykgPT09IFwiaHNsXCIpIHtcbiAgICAgIGEgPSB3YXNIU0wgPSB2Lm1hdGNoKF9zdHJpY3ROdW1FeHApO1xuXG4gICAgICBpZiAoIXRvSFNMKSB7XG4gICAgICAgIGggPSArYVswXSAlIDM2MCAvIDM2MDtcbiAgICAgICAgcyA9ICthWzFdIC8gMTAwO1xuICAgICAgICBsID0gK2FbMl0gLyAxMDA7XG4gICAgICAgIGcgPSBsIDw9IC41ID8gbCAqIChzICsgMSkgOiBsICsgcyAtIGwgKiBzO1xuICAgICAgICByID0gbCAqIDIgLSBnO1xuICAgICAgICBhLmxlbmd0aCA+IDMgJiYgKGFbM10gKj0gMSk7IC8vY2FzdCBhcyBudW1iZXJcblxuICAgICAgICBhWzBdID0gX2h1ZShoICsgMSAvIDMsIHIsIGcpO1xuICAgICAgICBhWzFdID0gX2h1ZShoLCByLCBnKTtcbiAgICAgICAgYVsyXSA9IF9odWUoaCAtIDEgLyAzLCByLCBnKTtcbiAgICAgIH0gZWxzZSBpZiAofnYuaW5kZXhPZihcIj1cIikpIHtcbiAgICAgICAgLy9pZiByZWxhdGl2ZSB2YWx1ZXMgYXJlIGZvdW5kLCBqdXN0IHJldHVybiB0aGUgcmF3IHN0cmluZ3Mgd2l0aCB0aGUgcmVsYXRpdmUgcHJlZml4ZXMgaW4gcGxhY2UuXG4gICAgICAgIGEgPSB2Lm1hdGNoKF9udW1FeHApO1xuICAgICAgICBmb3JjZUFscGhhICYmIGEubGVuZ3RoIDwgNCAmJiAoYVszXSA9IDEpO1xuICAgICAgICByZXR1cm4gYTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYSA9IHYubWF0Y2goX3N0cmljdE51bUV4cCkgfHwgX2NvbG9yTG9va3VwLnRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgIGEgPSBhLm1hcChOdW1iZXIpO1xuICB9XG5cbiAgaWYgKHRvSFNMICYmICF3YXNIU0wpIHtcbiAgICByID0gYVswXSAvIF8yNTU7XG4gICAgZyA9IGFbMV0gLyBfMjU1O1xuICAgIGIgPSBhWzJdIC8gXzI1NTtcbiAgICBtYXggPSBNYXRoLm1heChyLCBnLCBiKTtcbiAgICBtaW4gPSBNYXRoLm1pbihyLCBnLCBiKTtcbiAgICBsID0gKG1heCArIG1pbikgLyAyO1xuXG4gICAgaWYgKG1heCA9PT0gbWluKSB7XG4gICAgICBoID0gcyA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGQgPSBtYXggLSBtaW47XG4gICAgICBzID0gbCA+IDAuNSA/IGQgLyAoMiAtIG1heCAtIG1pbikgOiBkIC8gKG1heCArIG1pbik7XG4gICAgICBoID0gbWF4ID09PSByID8gKGcgLSBiKSAvIGQgKyAoZyA8IGIgPyA2IDogMCkgOiBtYXggPT09IGcgPyAoYiAtIHIpIC8gZCArIDIgOiAociAtIGcpIC8gZCArIDQ7XG4gICAgICBoICo9IDYwO1xuICAgIH1cblxuICAgIGFbMF0gPSB+fihoICsgLjUpO1xuICAgIGFbMV0gPSB+fihzICogMTAwICsgLjUpO1xuICAgIGFbMl0gPSB+fihsICogMTAwICsgLjUpO1xuICB9XG5cbiAgZm9yY2VBbHBoYSAmJiBhLmxlbmd0aCA8IDQgJiYgKGFbM10gPSAxKTtcbiAgcmV0dXJuIGE7XG59LFxuICAgIF9jb2xvck9yZGVyRGF0YSA9IGZ1bmN0aW9uIF9jb2xvck9yZGVyRGF0YSh2KSB7XG4gIC8vIHN0cmlwcyBvdXQgdGhlIGNvbG9ycyBmcm9tIHRoZSBzdHJpbmcsIGZpbmRzIGFsbCB0aGUgbnVtZXJpYyBzbG90cyAod2l0aCB1bml0cykgYW5kIHJldHVybnMgYW4gYXJyYXkgb2YgdGhvc2UuIFRoZSBBcnJheSBhbHNvIGhhcyBhIFwiY1wiIHByb3BlcnR5IHdoaWNoIGlzIGFuIEFycmF5IG9mIHRoZSBpbmRleCB2YWx1ZXMgd2hlcmUgdGhlIGNvbG9ycyBiZWxvbmcuIFRoaXMgaXMgdG8gaGVscCB3b3JrIGFyb3VuZCBpc3N1ZXMgd2hlcmUgdGhlcmUncyBhIG1pcy1tYXRjaGVkIG9yZGVyIG9mIGNvbG9yL251bWVyaWMgZGF0YSBsaWtlIGRyb3Atc2hhZG93KCNmMDAgMHB4IDFweCAycHgpIGFuZCBkcm9wLXNoYWRvdygweCAxcHggMnB4ICNmMDApLiBUaGlzIGlzIGJhc2ljYWxseSBhIGhlbHBlciBmdW5jdGlvbiB1c2VkIGluIF9mb3JtYXRDb2xvcnMoKVxuICB2YXIgdmFsdWVzID0gW10sXG4gICAgICBjID0gW10sXG4gICAgICBpID0gLTE7XG4gIHYuc3BsaXQoX2NvbG9yRXhwKS5mb3JFYWNoKGZ1bmN0aW9uICh2KSB7XG4gICAgdmFyIGEgPSB2Lm1hdGNoKF9udW1XaXRoVW5pdEV4cCkgfHwgW107XG4gICAgdmFsdWVzLnB1c2guYXBwbHkodmFsdWVzLCBhKTtcbiAgICBjLnB1c2goaSArPSBhLmxlbmd0aCArIDEpO1xuICB9KTtcbiAgdmFsdWVzLmMgPSBjO1xuICByZXR1cm4gdmFsdWVzO1xufSxcbiAgICBfZm9ybWF0Q29sb3JzID0gZnVuY3Rpb24gX2Zvcm1hdENvbG9ycyhzLCB0b0hTTCwgb3JkZXJNYXRjaERhdGEpIHtcbiAgdmFyIHJlc3VsdCA9IFwiXCIsXG4gICAgICBjb2xvcnMgPSAocyArIHJlc3VsdCkubWF0Y2goX2NvbG9yRXhwKSxcbiAgICAgIHR5cGUgPSB0b0hTTCA/IFwiaHNsYShcIiA6IFwicmdiYShcIixcbiAgICAgIGkgPSAwLFxuICAgICAgYyxcbiAgICAgIHNoZWxsLFxuICAgICAgZCxcbiAgICAgIGw7XG5cbiAgaWYgKCFjb2xvcnMpIHtcbiAgICByZXR1cm4gcztcbiAgfVxuXG4gIGNvbG9ycyA9IGNvbG9ycy5tYXAoZnVuY3Rpb24gKGNvbG9yKSB7XG4gICAgcmV0dXJuIChjb2xvciA9IHNwbGl0Q29sb3IoY29sb3IsIHRvSFNMLCAxKSkgJiYgdHlwZSArICh0b0hTTCA/IGNvbG9yWzBdICsgXCIsXCIgKyBjb2xvclsxXSArIFwiJSxcIiArIGNvbG9yWzJdICsgXCIlLFwiICsgY29sb3JbM10gOiBjb2xvci5qb2luKFwiLFwiKSkgKyBcIilcIjtcbiAgfSk7XG5cbiAgaWYgKG9yZGVyTWF0Y2hEYXRhKSB7XG4gICAgZCA9IF9jb2xvck9yZGVyRGF0YShzKTtcbiAgICBjID0gb3JkZXJNYXRjaERhdGEuYztcblxuICAgIGlmIChjLmpvaW4ocmVzdWx0KSAhPT0gZC5jLmpvaW4ocmVzdWx0KSkge1xuICAgICAgc2hlbGwgPSBzLnJlcGxhY2UoX2NvbG9yRXhwLCBcIjFcIikuc3BsaXQoX251bVdpdGhVbml0RXhwKTtcbiAgICAgIGwgPSBzaGVsbC5sZW5ndGggLSAxO1xuXG4gICAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xuICAgICAgICByZXN1bHQgKz0gc2hlbGxbaV0gKyAofmMuaW5kZXhPZihpKSA/IGNvbG9ycy5zaGlmdCgpIHx8IHR5cGUgKyBcIjAsMCwwLDApXCIgOiAoZC5sZW5ndGggPyBkIDogY29sb3JzLmxlbmd0aCA/IGNvbG9ycyA6IG9yZGVyTWF0Y2hEYXRhKS5zaGlmdCgpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoIXNoZWxsKSB7XG4gICAgc2hlbGwgPSBzLnNwbGl0KF9jb2xvckV4cCk7XG4gICAgbCA9IHNoZWxsLmxlbmd0aCAtIDE7XG5cbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xuICAgICAgcmVzdWx0ICs9IHNoZWxsW2ldICsgY29sb3JzW2ldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQgKyBzaGVsbFtsXTtcbn0sXG4gICAgX2NvbG9yRXhwID0gZnVuY3Rpb24gKCkge1xuICB2YXIgcyA9IFwiKD86XFxcXGIoPzooPzpyZ2J8cmdiYXxoc2x8aHNsYSlcXFxcKC4rP1xcXFwpKXxcXFxcQiMoPzpbMC05YS1mXXszLDR9KXsxLDJ9XFxcXGJcIixcbiAgICAgIC8vd2UnbGwgZHluYW1pY2FsbHkgYnVpbGQgdGhpcyBSZWd1bGFyIEV4cHJlc3Npb24gdG8gY29uc2VydmUgZmlsZSBzaXplLiBBZnRlciBidWlsZGluZyBpdCwgaXQgd2lsbCBiZSBhYmxlIHRvIGZpbmQgcmdiKCksIHJnYmEoKSwgIyAoaGV4YWRlY2ltYWwpLCBhbmQgbmFtZWQgY29sb3IgdmFsdWVzIGxpa2UgcmVkLCBibHVlLCBwdXJwbGUsIGV0Yy4sXG4gIHA7XG5cbiAgZm9yIChwIGluIF9jb2xvckxvb2t1cCkge1xuICAgIHMgKz0gXCJ8XCIgKyBwICsgXCJcXFxcYlwiO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBSZWdFeHAocyArIFwiKVwiLCBcImdpXCIpO1xufSgpLFxuICAgIF9oc2xFeHAgPSAvaHNsW2FdP1xcKC8sXG4gICAgX2NvbG9yU3RyaW5nRmlsdGVyID0gZnVuY3Rpb24gX2NvbG9yU3RyaW5nRmlsdGVyKGEpIHtcbiAgdmFyIGNvbWJpbmVkID0gYS5qb2luKFwiIFwiKSxcbiAgICAgIHRvSFNMO1xuICBfY29sb3JFeHAubGFzdEluZGV4ID0gMDtcblxuICBpZiAoX2NvbG9yRXhwLnRlc3QoY29tYmluZWQpKSB7XG4gICAgdG9IU0wgPSBfaHNsRXhwLnRlc3QoY29tYmluZWQpO1xuICAgIGFbMV0gPSBfZm9ybWF0Q29sb3JzKGFbMV0sIHRvSFNMKTtcbiAgICBhWzBdID0gX2Zvcm1hdENvbG9ycyhhWzBdLCB0b0hTTCwgX2NvbG9yT3JkZXJEYXRhKGFbMV0pKTsgLy8gbWFrZSBzdXJlIHRoZSBvcmRlciBvZiBudW1iZXJzL2NvbG9ycyBtYXRjaCB3aXRoIHRoZSBFTkQgdmFsdWUuXG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufSxcblxuLypcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBUSUNLRVJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbl90aWNrZXJBY3RpdmUsXG4gICAgX3RpY2tlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF9nZXRUaW1lID0gRGF0ZS5ub3csXG4gICAgICBfbGFnVGhyZXNob2xkID0gNTAwLFxuICAgICAgX2FkanVzdGVkTGFnID0gMzMsXG4gICAgICBfc3RhcnRUaW1lID0gX2dldFRpbWUoKSxcbiAgICAgIF9sYXN0VXBkYXRlID0gX3N0YXJ0VGltZSxcbiAgICAgIF9nYXAgPSAxMDAwIC8gMjQwLFxuICAgICAgX25leHRUaW1lID0gX2dhcCxcbiAgICAgIF9saXN0ZW5lcnMgPSBbXSxcbiAgICAgIF9pZCxcbiAgICAgIF9yZXEsXG4gICAgICBfcmFmLFxuICAgICAgX3NlbGYsXG4gICAgICBfZGVsdGEsXG4gICAgICBfaSxcbiAgICAgIF90aWNrID0gZnVuY3Rpb24gX3RpY2sodikge1xuICAgIHZhciBlbGFwc2VkID0gX2dldFRpbWUoKSAtIF9sYXN0VXBkYXRlLFxuICAgICAgICBtYW51YWwgPSB2ID09PSB0cnVlLFxuICAgICAgICBvdmVybGFwLFxuICAgICAgICBkaXNwYXRjaCxcbiAgICAgICAgdGltZSxcbiAgICAgICAgZnJhbWU7XG5cbiAgICBlbGFwc2VkID4gX2xhZ1RocmVzaG9sZCAmJiAoX3N0YXJ0VGltZSArPSBlbGFwc2VkIC0gX2FkanVzdGVkTGFnKTtcbiAgICBfbGFzdFVwZGF0ZSArPSBlbGFwc2VkO1xuICAgIHRpbWUgPSBfbGFzdFVwZGF0ZSAtIF9zdGFydFRpbWU7XG4gICAgb3ZlcmxhcCA9IHRpbWUgLSBfbmV4dFRpbWU7XG5cbiAgICBpZiAob3ZlcmxhcCA+IDAgfHwgbWFudWFsKSB7XG4gICAgICBmcmFtZSA9ICsrX3NlbGYuZnJhbWU7XG4gICAgICBfZGVsdGEgPSB0aW1lIC0gX3NlbGYudGltZSAqIDEwMDA7XG4gICAgICBfc2VsZi50aW1lID0gdGltZSA9IHRpbWUgLyAxMDAwO1xuICAgICAgX25leHRUaW1lICs9IG92ZXJsYXAgKyAob3ZlcmxhcCA+PSBfZ2FwID8gNCA6IF9nYXAgLSBvdmVybGFwKTtcbiAgICAgIGRpc3BhdGNoID0gMTtcbiAgICB9XG5cbiAgICBtYW51YWwgfHwgKF9pZCA9IF9yZXEoX3RpY2spKTsgLy9tYWtlIHN1cmUgdGhlIHJlcXVlc3QgaXMgbWFkZSBiZWZvcmUgd2UgZGlzcGF0Y2ggdGhlIFwidGlja1wiIGV2ZW50IHNvIHRoYXQgdGltaW5nIGlzIG1haW50YWluZWQuIE90aGVyd2lzZSwgaWYgcHJvY2Vzc2luZyB0aGUgXCJ0aWNrXCIgcmVxdWlyZXMgYSBidW5jaCBvZiB0aW1lIChsaWtlIDE1bXMpIGFuZCB3ZSdyZSB1c2luZyBhIHNldFRpbWVvdXQoKSB0aGF0J3MgYmFzZWQgb24gMTYuN21zLCBpdCdkIHRlY2huaWNhbGx5IHRha2UgMzEuN21zIGJldHdlZW4gZnJhbWVzIG90aGVyd2lzZS5cblxuICAgIGlmIChkaXNwYXRjaCkge1xuICAgICAgZm9yIChfaSA9IDA7IF9pIDwgX2xpc3RlbmVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgLy8gdXNlIF9pIGFuZCBjaGVjayBfbGlzdGVuZXJzLmxlbmd0aCBpbnN0ZWFkIG9mIGEgdmFyaWFibGUgYmVjYXVzZSBhIGxpc3RlbmVyIGNvdWxkIGdldCByZW1vdmVkIGR1cmluZyB0aGUgbG9vcCwgYW5kIGlmIHRoYXQgaGFwcGVucyB0byBhbiBlbGVtZW50IGxlc3MgdGhhbiB0aGUgY3VycmVudCBpbmRleCwgaXQnZCB0aHJvdyB0aGluZ3Mgb2ZmIGluIHRoZSBsb29wLlxuICAgICAgICBfbGlzdGVuZXJzW19pXSh0aW1lLCBfZGVsdGEsIGZyYW1lLCB2KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgX3NlbGYgPSB7XG4gICAgdGltZTogMCxcbiAgICBmcmFtZTogMCxcbiAgICB0aWNrOiBmdW5jdGlvbiB0aWNrKCkge1xuICAgICAgX3RpY2sodHJ1ZSk7XG4gICAgfSxcbiAgICBkZWx0YVJhdGlvOiBmdW5jdGlvbiBkZWx0YVJhdGlvKGZwcykge1xuICAgICAgcmV0dXJuIF9kZWx0YSAvICgxMDAwIC8gKGZwcyB8fCA2MCkpO1xuICAgIH0sXG4gICAgd2FrZTogZnVuY3Rpb24gd2FrZSgpIHtcbiAgICAgIGlmIChfY29yZVJlYWR5KSB7XG4gICAgICAgIGlmICghX2NvcmVJbml0dGVkICYmIF93aW5kb3dFeGlzdHMoKSkge1xuICAgICAgICAgIF93aW4gPSBfY29yZUluaXR0ZWQgPSB3aW5kb3c7XG4gICAgICAgICAgX2RvYyA9IF93aW4uZG9jdW1lbnQgfHwge307XG4gICAgICAgICAgX2dsb2JhbHMuZ3NhcCA9IGdzYXA7XG4gICAgICAgICAgKF93aW4uZ3NhcFZlcnNpb25zIHx8IChfd2luLmdzYXBWZXJzaW9ucyA9IFtdKSkucHVzaChnc2FwLnZlcnNpb24pO1xuXG4gICAgICAgICAgX2luc3RhbGwoX2luc3RhbGxTY29wZSB8fCBfd2luLkdyZWVuU29ja0dsb2JhbHMgfHwgIV93aW4uZ3NhcCAmJiBfd2luIHx8IHt9KTtcblxuICAgICAgICAgIF9yYWYgPSBfd2luLnJlcXVlc3RBbmltYXRpb25GcmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9pZCAmJiBfc2VsZi5zbGVlcCgpO1xuXG4gICAgICAgIF9yZXEgPSBfcmFmIHx8IGZ1bmN0aW9uIChmKSB7XG4gICAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZiwgX25leHRUaW1lIC0gX3NlbGYudGltZSAqIDEwMDAgKyAxIHwgMCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgX3RpY2tlckFjdGl2ZSA9IDE7XG5cbiAgICAgICAgX3RpY2soMik7XG4gICAgICB9XG4gICAgfSxcbiAgICBzbGVlcDogZnVuY3Rpb24gc2xlZXAoKSB7XG4gICAgICAoX3JhZiA/IF93aW4uY2FuY2VsQW5pbWF0aW9uRnJhbWUgOiBjbGVhclRpbWVvdXQpKF9pZCk7XG4gICAgICBfdGlja2VyQWN0aXZlID0gMDtcbiAgICAgIF9yZXEgPSBfZW1wdHlGdW5jO1xuICAgIH0sXG4gICAgbGFnU21vb3RoaW5nOiBmdW5jdGlvbiBsYWdTbW9vdGhpbmcodGhyZXNob2xkLCBhZGp1c3RlZExhZykge1xuICAgICAgX2xhZ1RocmVzaG9sZCA9IHRocmVzaG9sZCB8fCAxIC8gX3RpbnlOdW07IC8vemVybyBzaG91bGQgYmUgaW50ZXJwcmV0ZWQgYXMgYmFzaWNhbGx5IHVubGltaXRlZFxuXG4gICAgICBfYWRqdXN0ZWRMYWcgPSBNYXRoLm1pbihhZGp1c3RlZExhZywgX2xhZ1RocmVzaG9sZCwgMCk7XG4gICAgfSxcbiAgICBmcHM6IGZ1bmN0aW9uIGZwcyhfZnBzKSB7XG4gICAgICBfZ2FwID0gMTAwMCAvIChfZnBzIHx8IDI0MCk7XG4gICAgICBfbmV4dFRpbWUgPSBfc2VsZi50aW1lICogMTAwMCArIF9nYXA7XG4gICAgfSxcbiAgICBhZGQ6IGZ1bmN0aW9uIGFkZChjYWxsYmFjaywgb25jZSwgcHJpb3JpdGl6ZSkge1xuICAgICAgdmFyIGZ1bmMgPSBvbmNlID8gZnVuY3Rpb24gKHQsIGQsIGYsIHYpIHtcbiAgICAgICAgY2FsbGJhY2sodCwgZCwgZiwgdik7XG5cbiAgICAgICAgX3NlbGYucmVtb3ZlKGZ1bmMpO1xuICAgICAgfSA6IGNhbGxiYWNrO1xuXG4gICAgICBfc2VsZi5yZW1vdmUoY2FsbGJhY2spO1xuXG4gICAgICBfbGlzdGVuZXJzW3ByaW9yaXRpemUgPyBcInVuc2hpZnRcIiA6IFwicHVzaFwiXShmdW5jKTtcblxuICAgICAgX3dha2UoKTtcblxuICAgICAgcmV0dXJuIGZ1bmM7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShjYWxsYmFjaywgaSkge1xuICAgICAgfihpID0gX2xpc3RlbmVycy5pbmRleE9mKGNhbGxiYWNrKSkgJiYgX2xpc3RlbmVycy5zcGxpY2UoaSwgMSkgJiYgX2kgPj0gaSAmJiBfaS0tO1xuICAgIH0sXG4gICAgX2xpc3RlbmVyczogX2xpc3RlbmVyc1xuICB9O1xuICByZXR1cm4gX3NlbGY7XG59KCksXG4gICAgX3dha2UgPSBmdW5jdGlvbiBfd2FrZSgpIHtcbiAgcmV0dXJuICFfdGlja2VyQWN0aXZlICYmIF90aWNrZXIud2FrZSgpO1xufSxcbiAgICAvL2Fsc28gZW5zdXJlcyB0aGUgY29yZSBjbGFzc2VzIGFyZSBpbml0aWFsaXplZC5cblxuLypcbiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKiBFQVNJTkdcbiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cbl9lYXNlTWFwID0ge30sXG4gICAgX2N1c3RvbUVhc2VFeHAgPSAvXltcXGQuXFwtTV1bXFxkLlxcLSxcXHNdLyxcbiAgICBfcXVvdGVzRXhwID0gL1tcIiddL2csXG4gICAgX3BhcnNlT2JqZWN0SW5TdHJpbmcgPSBmdW5jdGlvbiBfcGFyc2VPYmplY3RJblN0cmluZyh2YWx1ZSkge1xuICAvL3Rha2VzIGEgc3RyaW5nIGxpa2UgXCJ7d2lnZ2xlczoxMCwgdHlwZTphbnRpY2lwYXRlfSlcIiBhbmQgdHVybnMgaXQgaW50byBhIHJlYWwgb2JqZWN0LiBOb3RpY2UgaXQgZW5kcyBpbiBcIilcIiBhbmQgaW5jbHVkZXMgdGhlIHt9IHdyYXBwZXJzLiBUaGlzIGlzIGJlY2F1c2Ugd2Ugb25seSB1c2UgdGhpcyBmdW5jdGlvbiBmb3IgcGFyc2luZyBlYXNlIGNvbmZpZ3MgYW5kIHByaW9yaXRpemVkIG9wdGltaXphdGlvbiByYXRoZXIgdGhhbiByZXVzYWJpbGl0eS5cbiAgdmFyIG9iaiA9IHt9LFxuICAgICAgc3BsaXQgPSB2YWx1ZS5zdWJzdHIoMSwgdmFsdWUubGVuZ3RoIC0gMykuc3BsaXQoXCI6XCIpLFxuICAgICAga2V5ID0gc3BsaXRbMF0sXG4gICAgICBpID0gMSxcbiAgICAgIGwgPSBzcGxpdC5sZW5ndGgsXG4gICAgICBpbmRleCxcbiAgICAgIHZhbCxcbiAgICAgIHBhcnNlZFZhbDtcblxuICBmb3IgKDsgaSA8IGw7IGkrKykge1xuICAgIHZhbCA9IHNwbGl0W2ldO1xuICAgIGluZGV4ID0gaSAhPT0gbCAtIDEgPyB2YWwubGFzdEluZGV4T2YoXCIsXCIpIDogdmFsLmxlbmd0aDtcbiAgICBwYXJzZWRWYWwgPSB2YWwuc3Vic3RyKDAsIGluZGV4KTtcbiAgICBvYmpba2V5XSA9IGlzTmFOKHBhcnNlZFZhbCkgPyBwYXJzZWRWYWwucmVwbGFjZShfcXVvdGVzRXhwLCBcIlwiKS50cmltKCkgOiArcGFyc2VkVmFsO1xuICAgIGtleSA9IHZhbC5zdWJzdHIoaW5kZXggKyAxKS50cmltKCk7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSxcbiAgICBfdmFsdWVJblBhcmVudGhlc2VzID0gZnVuY3Rpb24gX3ZhbHVlSW5QYXJlbnRoZXNlcyh2YWx1ZSkge1xuICB2YXIgb3BlbiA9IHZhbHVlLmluZGV4T2YoXCIoXCIpICsgMSxcbiAgICAgIGNsb3NlID0gdmFsdWUuaW5kZXhPZihcIilcIiksXG4gICAgICBuZXN0ZWQgPSB2YWx1ZS5pbmRleE9mKFwiKFwiLCBvcGVuKTtcbiAgcmV0dXJuIHZhbHVlLnN1YnN0cmluZyhvcGVuLCB+bmVzdGVkICYmIG5lc3RlZCA8IGNsb3NlID8gdmFsdWUuaW5kZXhPZihcIilcIiwgY2xvc2UgKyAxKSA6IGNsb3NlKTtcbn0sXG4gICAgX2NvbmZpZ0Vhc2VGcm9tU3RyaW5nID0gZnVuY3Rpb24gX2NvbmZpZ0Vhc2VGcm9tU3RyaW5nKG5hbWUpIHtcbiAgLy9uYW1lIGNhbiBiZSBhIHN0cmluZyBsaWtlIFwiZWxhc3RpYy5vdXQoMSwwLjUpXCIsIGFuZCBwYXNzIGluIF9lYXNlTWFwIGFzIG9iaiBhbmQgaXQnbGwgcGFyc2UgaXQgb3V0IGFuZCBjYWxsIHRoZSBhY3R1YWwgZnVuY3Rpb24gbGlrZSBfZWFzZU1hcC5FbGFzdGljLmVhc2VPdXQuY29uZmlnKDEsMC41KS4gSXQgd2lsbCBhbHNvIHBhcnNlIGN1c3RvbSBlYXNlIHN0cmluZ3MgYXMgbG9uZyBhcyBDdXN0b21FYXNlIGlzIGxvYWRlZCBhbmQgcmVnaXN0ZXJlZCAoaW50ZXJuYWxseSBhcyBfZWFzZU1hcC5fQ0UpLlxuICB2YXIgc3BsaXQgPSAobmFtZSArIFwiXCIpLnNwbGl0KFwiKFwiKSxcbiAgICAgIGVhc2UgPSBfZWFzZU1hcFtzcGxpdFswXV07XG4gIHJldHVybiBlYXNlICYmIHNwbGl0Lmxlbmd0aCA+IDEgJiYgZWFzZS5jb25maWcgPyBlYXNlLmNvbmZpZy5hcHBseShudWxsLCB+bmFtZS5pbmRleE9mKFwie1wiKSA/IFtfcGFyc2VPYmplY3RJblN0cmluZyhzcGxpdFsxXSldIDogX3ZhbHVlSW5QYXJlbnRoZXNlcyhuYW1lKS5zcGxpdChcIixcIikubWFwKF9udW1lcmljSWZQb3NzaWJsZSkpIDogX2Vhc2VNYXAuX0NFICYmIF9jdXN0b21FYXNlRXhwLnRlc3QobmFtZSkgPyBfZWFzZU1hcC5fQ0UoXCJcIiwgbmFtZSkgOiBlYXNlO1xufSxcbiAgICBfaW52ZXJ0RWFzZSA9IGZ1bmN0aW9uIF9pbnZlcnRFYXNlKGVhc2UpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIDEgLSBlYXNlKDEgLSBwKTtcbiAgfTtcbn0sXG4gICAgLy8gYWxsb3cgeW95b0Vhc2UgdG8gYmUgc2V0IGluIGNoaWxkcmVuIGFuZCBoYXZlIHRob3NlIGFmZmVjdGVkIHdoZW4gdGhlIHBhcmVudC9hbmNlc3RvciB0aW1lbGluZSB5b3lvcy5cbl9wcm9wYWdhdGVZb3lvRWFzZSA9IGZ1bmN0aW9uIF9wcm9wYWdhdGVZb3lvRWFzZSh0aW1lbGluZSwgaXNZb3lvKSB7XG4gIHZhciBjaGlsZCA9IHRpbWVsaW5lLl9maXJzdCxcbiAgICAgIGVhc2U7XG5cbiAgd2hpbGUgKGNoaWxkKSB7XG4gICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgVGltZWxpbmUpIHtcbiAgICAgIF9wcm9wYWdhdGVZb3lvRWFzZShjaGlsZCwgaXNZb3lvKTtcbiAgICB9IGVsc2UgaWYgKGNoaWxkLnZhcnMueW95b0Vhc2UgJiYgKCFjaGlsZC5feW95byB8fCAhY2hpbGQuX3JlcGVhdCkgJiYgY2hpbGQuX3lveW8gIT09IGlzWW95bykge1xuICAgICAgaWYgKGNoaWxkLnRpbWVsaW5lKSB7XG4gICAgICAgIF9wcm9wYWdhdGVZb3lvRWFzZShjaGlsZC50aW1lbGluZSwgaXNZb3lvKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVhc2UgPSBjaGlsZC5fZWFzZTtcbiAgICAgICAgY2hpbGQuX2Vhc2UgPSBjaGlsZC5feUVhc2U7XG4gICAgICAgIGNoaWxkLl95RWFzZSA9IGVhc2U7XG4gICAgICAgIGNoaWxkLl95b3lvID0gaXNZb3lvO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNoaWxkID0gY2hpbGQuX25leHQ7XG4gIH1cbn0sXG4gICAgX3BhcnNlRWFzZSA9IGZ1bmN0aW9uIF9wYXJzZUVhc2UoZWFzZSwgZGVmYXVsdEVhc2UpIHtcbiAgcmV0dXJuICFlYXNlID8gZGVmYXVsdEVhc2UgOiAoX2lzRnVuY3Rpb24oZWFzZSkgPyBlYXNlIDogX2Vhc2VNYXBbZWFzZV0gfHwgX2NvbmZpZ0Vhc2VGcm9tU3RyaW5nKGVhc2UpKSB8fCBkZWZhdWx0RWFzZTtcbn0sXG4gICAgX2luc2VydEVhc2UgPSBmdW5jdGlvbiBfaW5zZXJ0RWFzZShuYW1lcywgZWFzZUluLCBlYXNlT3V0LCBlYXNlSW5PdXQpIHtcbiAgaWYgKGVhc2VPdXQgPT09IHZvaWQgMCkge1xuICAgIGVhc2VPdXQgPSBmdW5jdGlvbiBlYXNlT3V0KHApIHtcbiAgICAgIHJldHVybiAxIC0gZWFzZUluKDEgLSBwKTtcbiAgICB9O1xuICB9XG5cbiAgaWYgKGVhc2VJbk91dCA9PT0gdm9pZCAwKSB7XG4gICAgZWFzZUluT3V0ID0gZnVuY3Rpb24gZWFzZUluT3V0KHApIHtcbiAgICAgIHJldHVybiBwIDwgLjUgPyBlYXNlSW4ocCAqIDIpIC8gMiA6IDEgLSBlYXNlSW4oKDEgLSBwKSAqIDIpIC8gMjtcbiAgICB9O1xuICB9XG5cbiAgdmFyIGVhc2UgPSB7XG4gICAgZWFzZUluOiBlYXNlSW4sXG4gICAgZWFzZU91dDogZWFzZU91dCxcbiAgICBlYXNlSW5PdXQ6IGVhc2VJbk91dFxuICB9LFxuICAgICAgbG93ZXJjYXNlTmFtZTtcblxuICBfZm9yRWFjaE5hbWUobmFtZXMsIGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgX2Vhc2VNYXBbbmFtZV0gPSBfZ2xvYmFsc1tuYW1lXSA9IGVhc2U7XG4gICAgX2Vhc2VNYXBbbG93ZXJjYXNlTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKV0gPSBlYXNlT3V0O1xuXG4gICAgZm9yICh2YXIgcCBpbiBlYXNlKSB7XG4gICAgICBfZWFzZU1hcFtsb3dlcmNhc2VOYW1lICsgKHAgPT09IFwiZWFzZUluXCIgPyBcIi5pblwiIDogcCA9PT0gXCJlYXNlT3V0XCIgPyBcIi5vdXRcIiA6IFwiLmluT3V0XCIpXSA9IF9lYXNlTWFwW25hbWUgKyBcIi5cIiArIHBdID0gZWFzZVtwXTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBlYXNlO1xufSxcbiAgICBfZWFzZUluT3V0RnJvbU91dCA9IGZ1bmN0aW9uIF9lYXNlSW5PdXRGcm9tT3V0KGVhc2VPdXQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIHAgPCAuNSA/ICgxIC0gZWFzZU91dCgxIC0gcCAqIDIpKSAvIDIgOiAuNSArIGVhc2VPdXQoKHAgLSAuNSkgKiAyKSAvIDI7XG4gIH07XG59LFxuICAgIF9jb25maWdFbGFzdGljID0gZnVuY3Rpb24gX2NvbmZpZ0VsYXN0aWModHlwZSwgYW1wbGl0dWRlLCBwZXJpb2QpIHtcbiAgdmFyIHAxID0gYW1wbGl0dWRlID49IDEgPyBhbXBsaXR1ZGUgOiAxLFxuICAgICAgLy9ub3RlOiBpZiBhbXBsaXR1ZGUgaXMgPCAxLCB3ZSBzaW1wbHkgYWRqdXN0IHRoZSBwZXJpb2QgZm9yIGEgbW9yZSBuYXR1cmFsIGZlZWwuIE90aGVyd2lzZSB0aGUgbWF0aCBkb2Vzbid0IHdvcmsgcmlnaHQgYW5kIHRoZSBjdXJ2ZSBzdGFydHMgYXQgMS5cbiAgcDIgPSAocGVyaW9kIHx8ICh0eXBlID8gLjMgOiAuNDUpKSAvIChhbXBsaXR1ZGUgPCAxID8gYW1wbGl0dWRlIDogMSksXG4gICAgICBwMyA9IHAyIC8gXzJQSSAqIChNYXRoLmFzaW4oMSAvIHAxKSB8fCAwKSxcbiAgICAgIGVhc2VPdXQgPSBmdW5jdGlvbiBlYXNlT3V0KHApIHtcbiAgICByZXR1cm4gcCA9PT0gMSA/IDEgOiBwMSAqIE1hdGgucG93KDIsIC0xMCAqIHApICogX3NpbigocCAtIHAzKSAqIHAyKSArIDE7XG4gIH0sXG4gICAgICBlYXNlID0gdHlwZSA9PT0gXCJvdXRcIiA/IGVhc2VPdXQgOiB0eXBlID09PSBcImluXCIgPyBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiAxIC0gZWFzZU91dCgxIC0gcCk7XG4gIH0gOiBfZWFzZUluT3V0RnJvbU91dChlYXNlT3V0KTtcblxuICBwMiA9IF8yUEkgLyBwMjsgLy9wcmVjYWxjdWxhdGUgdG8gb3B0aW1pemVcblxuICBlYXNlLmNvbmZpZyA9IGZ1bmN0aW9uIChhbXBsaXR1ZGUsIHBlcmlvZCkge1xuICAgIHJldHVybiBfY29uZmlnRWxhc3RpYyh0eXBlLCBhbXBsaXR1ZGUsIHBlcmlvZCk7XG4gIH07XG5cbiAgcmV0dXJuIGVhc2U7XG59LFxuICAgIF9jb25maWdCYWNrID0gZnVuY3Rpb24gX2NvbmZpZ0JhY2sodHlwZSwgb3ZlcnNob290KSB7XG4gIGlmIChvdmVyc2hvb3QgPT09IHZvaWQgMCkge1xuICAgIG92ZXJzaG9vdCA9IDEuNzAxNTg7XG4gIH1cblxuICB2YXIgZWFzZU91dCA9IGZ1bmN0aW9uIGVhc2VPdXQocCkge1xuICAgIHJldHVybiBwID8gLS1wICogcCAqICgob3ZlcnNob290ICsgMSkgKiBwICsgb3ZlcnNob290KSArIDEgOiAwO1xuICB9LFxuICAgICAgZWFzZSA9IHR5cGUgPT09IFwib3V0XCIgPyBlYXNlT3V0IDogdHlwZSA9PT0gXCJpblwiID8gZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gMSAtIGVhc2VPdXQoMSAtIHApO1xuICB9IDogX2Vhc2VJbk91dEZyb21PdXQoZWFzZU91dCk7XG5cbiAgZWFzZS5jb25maWcgPSBmdW5jdGlvbiAob3ZlcnNob290KSB7XG4gICAgcmV0dXJuIF9jb25maWdCYWNrKHR5cGUsIG92ZXJzaG9vdCk7XG4gIH07XG5cbiAgcmV0dXJuIGVhc2U7XG59OyAvLyBhIGNoZWFwZXIgKGtiIGFuZCBjcHUpIGJ1dCBtb3JlIG1pbGQgd2F5IHRvIGdldCBhIHBhcmFtZXRlcml6ZWQgd2VpZ2h0ZWQgZWFzZSBieSBmZWVkaW5nIGluIGEgdmFsdWUgYmV0d2VlbiAtMSAoZWFzZUluKSBhbmQgMSAoZWFzZU91dCkgd2hlcmUgMCBpcyBsaW5lYXIuXG4vLyBfd2VpZ2h0ZWRFYXNlID0gcmF0aW8gPT4ge1xuLy8gXHRsZXQgeSA9IDAuNSArIHJhdGlvIC8gMjtcbi8vIFx0cmV0dXJuIHAgPT4gKDIgKiAoMSAtIHApICogcCAqIHkgKyBwICogcCk7XG4vLyB9LFxuLy8gYSBzdHJvbmdlciAoYnV0IG1vcmUgZXhwZW5zaXZlIGtiL2NwdSkgcGFyYW1ldGVyaXplZCB3ZWlnaHRlZCBlYXNlIHRoYXQgbGV0cyB5b3UgZmVlZCBpbiBhIHZhbHVlIGJldHdlZW4gLTEgKGVhc2VJbikgYW5kIDEgKGVhc2VPdXQpIHdoZXJlIDAgaXMgbGluZWFyLlxuLy8gX3dlaWdodGVkRWFzZVN0cm9uZyA9IHJhdGlvID0+IHtcbi8vIFx0cmF0aW8gPSAuNSArIHJhdGlvIC8gMjtcbi8vIFx0bGV0IG8gPSAxIC8gMyAqIChyYXRpbyA8IC41ID8gcmF0aW8gOiAxIC0gcmF0aW8pLFxuLy8gXHRcdGIgPSByYXRpbyAtIG8sXG4vLyBcdFx0YyA9IHJhdGlvICsgbztcbi8vIFx0cmV0dXJuIHAgPT4gcCA9PT0gMSA/IHAgOiAzICogYiAqICgxIC0gcCkgKiAoMSAtIHApICogcCArIDMgKiBjICogKDEgLSBwKSAqIHAgKiBwICsgcCAqIHAgKiBwO1xuLy8gfTtcblxuXG5fZm9yRWFjaE5hbWUoXCJMaW5lYXIsUXVhZCxDdWJpYyxRdWFydCxRdWludCxTdHJvbmdcIiwgZnVuY3Rpb24gKG5hbWUsIGkpIHtcbiAgdmFyIHBvd2VyID0gaSA8IDUgPyBpICsgMSA6IGk7XG5cbiAgX2luc2VydEVhc2UobmFtZSArIFwiLFBvd2VyXCIgKyAocG93ZXIgLSAxKSwgaSA/IGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIE1hdGgucG93KHAsIHBvd2VyKTtcbiAgfSA6IGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIHA7XG4gIH0sIGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIDEgLSBNYXRoLnBvdygxIC0gcCwgcG93ZXIpO1xuICB9LCBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiBwIDwgLjUgPyBNYXRoLnBvdyhwICogMiwgcG93ZXIpIC8gMiA6IDEgLSBNYXRoLnBvdygoMSAtIHApICogMiwgcG93ZXIpIC8gMjtcbiAgfSk7XG59KTtcblxuX2Vhc2VNYXAuTGluZWFyLmVhc2VOb25lID0gX2Vhc2VNYXAubm9uZSA9IF9lYXNlTWFwLkxpbmVhci5lYXNlSW47XG5cbl9pbnNlcnRFYXNlKFwiRWxhc3RpY1wiLCBfY29uZmlnRWxhc3RpYyhcImluXCIpLCBfY29uZmlnRWxhc3RpYyhcIm91dFwiKSwgX2NvbmZpZ0VsYXN0aWMoKSk7XG5cbihmdW5jdGlvbiAobiwgYykge1xuICB2YXIgbjEgPSAxIC8gYyxcbiAgICAgIG4yID0gMiAqIG4xLFxuICAgICAgbjMgPSAyLjUgKiBuMSxcbiAgICAgIGVhc2VPdXQgPSBmdW5jdGlvbiBlYXNlT3V0KHApIHtcbiAgICByZXR1cm4gcCA8IG4xID8gbiAqIHAgKiBwIDogcCA8IG4yID8gbiAqIE1hdGgucG93KHAgLSAxLjUgLyBjLCAyKSArIC43NSA6IHAgPCBuMyA/IG4gKiAocCAtPSAyLjI1IC8gYykgKiBwICsgLjkzNzUgOiBuICogTWF0aC5wb3cocCAtIDIuNjI1IC8gYywgMikgKyAuOTg0Mzc1O1xuICB9O1xuXG4gIF9pbnNlcnRFYXNlKFwiQm91bmNlXCIsIGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIDEgLSBlYXNlT3V0KDEgLSBwKTtcbiAgfSwgZWFzZU91dCk7XG59KSg3LjU2MjUsIDIuNzUpO1xuXG5faW5zZXJ0RWFzZShcIkV4cG9cIiwgZnVuY3Rpb24gKHApIHtcbiAgcmV0dXJuIHAgPyBNYXRoLnBvdygyLCAxMCAqIChwIC0gMSkpIDogMDtcbn0pO1xuXG5faW5zZXJ0RWFzZShcIkNpcmNcIiwgZnVuY3Rpb24gKHApIHtcbiAgcmV0dXJuIC0oX3NxcnQoMSAtIHAgKiBwKSAtIDEpO1xufSk7XG5cbl9pbnNlcnRFYXNlKFwiU2luZVwiLCBmdW5jdGlvbiAocCkge1xuICByZXR1cm4gcCA9PT0gMSA/IDEgOiAtX2NvcyhwICogX0hBTEZfUEkpICsgMTtcbn0pO1xuXG5faW5zZXJ0RWFzZShcIkJhY2tcIiwgX2NvbmZpZ0JhY2soXCJpblwiKSwgX2NvbmZpZ0JhY2soXCJvdXRcIiksIF9jb25maWdCYWNrKCkpO1xuXG5fZWFzZU1hcC5TdGVwcGVkRWFzZSA9IF9lYXNlTWFwLnN0ZXBzID0gX2dsb2JhbHMuU3RlcHBlZEVhc2UgPSB7XG4gIGNvbmZpZzogZnVuY3Rpb24gY29uZmlnKHN0ZXBzLCBpbW1lZGlhdGVTdGFydCkge1xuICAgIGlmIChzdGVwcyA9PT0gdm9pZCAwKSB7XG4gICAgICBzdGVwcyA9IDE7XG4gICAgfVxuXG4gICAgdmFyIHAxID0gMSAvIHN0ZXBzLFxuICAgICAgICBwMiA9IHN0ZXBzICsgKGltbWVkaWF0ZVN0YXJ0ID8gMCA6IDEpLFxuICAgICAgICBwMyA9IGltbWVkaWF0ZVN0YXJ0ID8gMSA6IDAsXG4gICAgICAgIG1heCA9IDEgLSBfdGlueU51bTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHApIHtcbiAgICAgIHJldHVybiAoKHAyICogX2NsYW1wKDAsIG1heCwgcCkgfCAwKSArIHAzKSAqIHAxO1xuICAgIH07XG4gIH1cbn07XG5fZGVmYXVsdHMuZWFzZSA9IF9lYXNlTWFwW1wicXVhZC5vdXRcIl07XG5cbl9mb3JFYWNoTmFtZShcIm9uQ29tcGxldGUsb25VcGRhdGUsb25TdGFydCxvblJlcGVhdCxvblJldmVyc2VDb21wbGV0ZSxvbkludGVycnVwdFwiLCBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gX2NhbGxiYWNrTmFtZXMgKz0gbmFtZSArIFwiLFwiICsgbmFtZSArIFwiUGFyYW1zLFwiO1xufSk7XG4vKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENBQ0hFXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cblxuZXhwb3J0IHZhciBHU0NhY2hlID0gZnVuY3Rpb24gR1NDYWNoZSh0YXJnZXQsIGhhcm5lc3MpIHtcbiAgdGhpcy5pZCA9IF9nc0lEKys7XG4gIHRhcmdldC5fZ3NhcCA9IHRoaXM7XG4gIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICB0aGlzLmhhcm5lc3MgPSBoYXJuZXNzO1xuICB0aGlzLmdldCA9IGhhcm5lc3MgPyBoYXJuZXNzLmdldCA6IF9nZXRQcm9wZXJ0eTtcbiAgdGhpcy5zZXQgPSBoYXJuZXNzID8gaGFybmVzcy5nZXRTZXR0ZXIgOiBfZ2V0U2V0dGVyO1xufTtcbi8qXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQU5JTUFUSU9OXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmV4cG9ydCB2YXIgQW5pbWF0aW9uID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQW5pbWF0aW9uKHZhcnMpIHtcbiAgICB0aGlzLnZhcnMgPSB2YXJzO1xuICAgIHRoaXMuX2RlbGF5ID0gK3ZhcnMuZGVsYXkgfHwgMDtcblxuICAgIGlmICh0aGlzLl9yZXBlYXQgPSB2YXJzLnJlcGVhdCA9PT0gSW5maW5pdHkgPyAtMiA6IHZhcnMucmVwZWF0IHx8IDApIHtcbiAgICAgIC8vIFRPRE86IHJlcGVhdDogSW5maW5pdHkgb24gYSB0aW1lbGluZSdzIGNoaWxkcmVuIG11c3QgZmxhZyB0aGF0IHRpbWVsaW5lIGludGVybmFsbHkgYW5kIGFmZmVjdCBpdHMgdG90YWxEdXJhdGlvbiwgb3RoZXJ3aXNlIGl0J2xsIHN0b3AgaW4gdGhlIG5lZ2F0aXZlIGRpcmVjdGlvbiB3aGVuIHJlYWNoaW5nIHRoZSBzdGFydC5cbiAgICAgIHRoaXMuX3JEZWxheSA9IHZhcnMucmVwZWF0RGVsYXkgfHwgMDtcbiAgICAgIHRoaXMuX3lveW8gPSAhIXZhcnMueW95byB8fCAhIXZhcnMueW95b0Vhc2U7XG4gICAgfVxuXG4gICAgdGhpcy5fdHMgPSAxO1xuXG4gICAgX3NldER1cmF0aW9uKHRoaXMsICt2YXJzLmR1cmF0aW9uLCAxLCAxKTtcblxuICAgIHRoaXMuZGF0YSA9IHZhcnMuZGF0YTtcblxuICAgIGlmIChfY29udGV4dCkge1xuICAgICAgdGhpcy5fY3R4ID0gX2NvbnRleHQ7XG5cbiAgICAgIF9jb250ZXh0LmRhdGEucHVzaCh0aGlzKTtcbiAgICB9XG5cbiAgICBfdGlja2VyQWN0aXZlIHx8IF90aWNrZXIud2FrZSgpO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IEFuaW1hdGlvbi5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmRlbGF5ID0gZnVuY3Rpb24gZGVsYXkodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgfHwgdmFsdWUgPT09IDApIHtcbiAgICAgIHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LnNtb290aENoaWxkVGltaW5nICYmIHRoaXMuc3RhcnRUaW1lKHRoaXMuX3N0YXJ0ICsgdmFsdWUgLSB0aGlzLl9kZWxheSk7XG4gICAgICB0aGlzLl9kZWxheSA9IHZhbHVlO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2RlbGF5O1xuICB9O1xuXG4gIF9wcm90by5kdXJhdGlvbiA9IGZ1bmN0aW9uIGR1cmF0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyB0aGlzLnRvdGFsRHVyYXRpb24odGhpcy5fcmVwZWF0ID4gMCA/IHZhbHVlICsgKHZhbHVlICsgdGhpcy5fckRlbGF5KSAqIHRoaXMuX3JlcGVhdCA6IHZhbHVlKSA6IHRoaXMudG90YWxEdXJhdGlvbigpICYmIHRoaXMuX2R1cjtcbiAgfTtcblxuICBfcHJvdG8udG90YWxEdXJhdGlvbiA9IGZ1bmN0aW9uIHRvdGFsRHVyYXRpb24odmFsdWUpIHtcbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0aGlzLl90RHVyO1xuICAgIH1cblxuICAgIHRoaXMuX2RpcnR5ID0gMDtcbiAgICByZXR1cm4gX3NldER1cmF0aW9uKHRoaXMsIHRoaXMuX3JlcGVhdCA8IDAgPyB2YWx1ZSA6ICh2YWx1ZSAtIHRoaXMuX3JlcGVhdCAqIHRoaXMuX3JEZWxheSkgLyAodGhpcy5fcmVwZWF0ICsgMSkpO1xuICB9O1xuXG4gIF9wcm90by50b3RhbFRpbWUgPSBmdW5jdGlvbiB0b3RhbFRpbWUoX3RvdGFsVGltZSwgc3VwcHJlc3NFdmVudHMpIHtcbiAgICBfd2FrZSgpO1xuXG4gICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdFRpbWU7XG4gICAgfVxuXG4gICAgdmFyIHBhcmVudCA9IHRoaXMuX2RwO1xuXG4gICAgaWYgKHBhcmVudCAmJiBwYXJlbnQuc21vb3RoQ2hpbGRUaW1pbmcgJiYgdGhpcy5fdHMpIHtcbiAgICAgIF9hbGlnblBsYXloZWFkKHRoaXMsIF90b3RhbFRpbWUpO1xuXG4gICAgICAhcGFyZW50Ll9kcCB8fCBwYXJlbnQucGFyZW50IHx8IF9wb3N0QWRkQ2hlY2tzKHBhcmVudCwgdGhpcyk7IC8vIGVkZ2UgY2FzZTogaWYgdGhpcyBpcyBhIGNoaWxkIG9mIGEgdGltZWxpbmUgdGhhdCBhbHJlYWR5IGNvbXBsZXRlZCwgZm9yIGV4YW1wbGUsIHdlIG11c3QgcmUtYWN0aXZhdGUgdGhlIHBhcmVudC5cbiAgICAgIC8vaW4gY2FzZSBhbnkgb2YgdGhlIGFuY2VzdG9yIHRpbWVsaW5lcyBoYWQgY29tcGxldGVkIGJ1dCBzaG91bGQgbm93IGJlIGVuYWJsZWQsIHdlIHNob3VsZCByZXNldCB0aGVpciB0b3RhbFRpbWUoKSB3aGljaCB3aWxsIGFsc28gZW5zdXJlIHRoYXQgdGhleSdyZSBsaW5lZCB1cCBwcm9wZXJseSBhbmQgZW5hYmxlZC4gU2tpcCBmb3IgYW5pbWF0aW9ucyB0aGF0IGFyZSBvbiB0aGUgcm9vdCAod2FzdGVmdWwpLiBFeGFtcGxlOiBhIFRpbWVsaW5lTGl0ZS5leHBvcnRSb290KCkgaXMgcGVyZm9ybWVkIHdoZW4gdGhlcmUncyBhIHBhdXNlZCB0d2VlbiBvbiB0aGUgcm9vdCwgdGhlIGV4cG9ydCB3aWxsIG5vdCBjb21wbGV0ZSB1bnRpbCB0aGF0IHR3ZWVuIGlzIHVucGF1c2VkLCBidXQgaW1hZ2luZSBhIGNoaWxkIGdldHMgcmVzdGFydGVkIGxhdGVyLCBhZnRlciBhbGwgW3VucGF1c2VkXSB0d2VlbnMgaGF2ZSBjb21wbGV0ZWQuIFRoZSBzdGFydCBvZiB0aGF0IGNoaWxkIHdvdWxkIGdldCBwdXNoZWQgb3V0LCBidXQgb25lIG9mIHRoZSBhbmNlc3RvcnMgbWF5IGhhdmUgY29tcGxldGVkLlxuXG4gICAgICB3aGlsZSAocGFyZW50ICYmIHBhcmVudC5wYXJlbnQpIHtcbiAgICAgICAgaWYgKHBhcmVudC5wYXJlbnQuX3RpbWUgIT09IHBhcmVudC5fc3RhcnQgKyAocGFyZW50Ll90cyA+PSAwID8gcGFyZW50Ll90VGltZSAvIHBhcmVudC5fdHMgOiAocGFyZW50LnRvdGFsRHVyYXRpb24oKSAtIHBhcmVudC5fdFRpbWUpIC8gLXBhcmVudC5fdHMpKSB7XG4gICAgICAgICAgcGFyZW50LnRvdGFsVGltZShwYXJlbnQuX3RUaW1lLCB0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnQ7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5wYXJlbnQgJiYgdGhpcy5fZHAuYXV0b1JlbW92ZUNoaWxkcmVuICYmICh0aGlzLl90cyA+IDAgJiYgX3RvdGFsVGltZSA8IHRoaXMuX3REdXIgfHwgdGhpcy5fdHMgPCAwICYmIF90b3RhbFRpbWUgPiAwIHx8ICF0aGlzLl90RHVyICYmICFfdG90YWxUaW1lKSkge1xuICAgICAgICAvL2lmIHRoZSBhbmltYXRpb24gZG9lc24ndCBoYXZlIGEgcGFyZW50LCBwdXQgaXQgYmFjayBpbnRvIGl0cyBsYXN0IHBhcmVudCAocmVjb3JkZWQgYXMgX2RwIGZvciBleGFjdGx5IGNhc2VzIGxpa2UgdGhpcykuIExpbWl0IHRvIHBhcmVudHMgd2l0aCBhdXRvUmVtb3ZlQ2hpbGRyZW4gKGxpa2UgZ2xvYmFsVGltZWxpbmUpIHNvIHRoYXQgaWYgdGhlIHVzZXIgbWFudWFsbHkgcmVtb3ZlcyBhbiBhbmltYXRpb24gZnJvbSBhIHRpbWVsaW5lIGFuZCB0aGVuIGFsdGVycyBpdHMgcGxheWhlYWQsIGl0IGRvZXNuJ3QgZ2V0IGFkZGVkIGJhY2sgaW4uXG4gICAgICAgIF9hZGRUb1RpbWVsaW5lKHRoaXMuX2RwLCB0aGlzLCB0aGlzLl9zdGFydCAtIHRoaXMuX2RlbGF5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fdFRpbWUgIT09IF90b3RhbFRpbWUgfHwgIXRoaXMuX2R1ciAmJiAhc3VwcHJlc3NFdmVudHMgfHwgdGhpcy5faW5pdHRlZCAmJiBNYXRoLmFicyh0aGlzLl96VGltZSkgPT09IF90aW55TnVtIHx8ICFfdG90YWxUaW1lICYmICF0aGlzLl9pbml0dGVkICYmICh0aGlzLmFkZCB8fCB0aGlzLl9wdExvb2t1cCkpIHtcbiAgICAgIC8vIGNoZWNrIGZvciBfcHRMb29rdXAgb24gYSBUd2VlbiBpbnN0YW5jZSB0byBlbnN1cmUgaXQgaGFzIGFjdHVhbGx5IGZpbmlzaGVkIGJlaW5nIGluc3RhbnRpYXRlZCwgb3RoZXJ3aXNlIGlmIHRoaXMucmV2ZXJzZSgpIGdldHMgY2FsbGVkIGluIHRoZSBBbmltYXRpb24gY29uc3RydWN0b3IsIGl0IGNvdWxkIHRyaWdnZXIgYSByZW5kZXIoKSBoZXJlIGV2ZW4gdGhvdWdoIHRoZSBfdGFyZ2V0cyB3ZXJlbid0IHBvcHVsYXRlZCwgdGh1cyB3aGVuIF9pbml0KCkgaXMgY2FsbGVkIHRoZXJlIHdvbid0IGJlIGFueSBQcm9wVHdlZW5zIChpdCdsbCBhY3QgbGlrZSB0aGUgdHdlZW4gaXMgbm9uLWZ1bmN0aW9uYWwpXG4gICAgICB0aGlzLl90cyB8fCAodGhpcy5fcFRpbWUgPSBfdG90YWxUaW1lKTsgLy8gb3RoZXJ3aXNlLCBpZiBhbiBhbmltYXRpb24gaXMgcGF1c2VkLCB0aGVuIHRoZSBwbGF5aGVhZCBpcyBtb3ZlZCBiYWNrIHRvIHplcm8sIHRoZW4gcmVzdW1lZCwgaXQnZCByZXZlcnQgYmFjayB0byB0aGUgb3JpZ2luYWwgdGltZSBhdCB0aGUgcGF1c2VcbiAgICAgIC8vaWYgKCF0aGlzLl9sb2NrKSB7IC8vIGF2b2lkIGVuZGxlc3MgcmVjdXJzaW9uIChub3Qgc3VyZSB3ZSBuZWVkIHRoaXMgeWV0IG9yIGlmIGl0J3Mgd29ydGggdGhlIHBlcmZvcm1hbmNlIGhpdClcbiAgICAgIC8vICAgdGhpcy5fbG9jayA9IDE7XG5cbiAgICAgIF9sYXp5U2FmZVJlbmRlcih0aGlzLCBfdG90YWxUaW1lLCBzdXBwcmVzc0V2ZW50cyk7IC8vICAgdGhpcy5fbG9jayA9IDA7XG4gICAgICAvL31cblxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90by50aW1lID0gZnVuY3Rpb24gdGltZSh2YWx1ZSwgc3VwcHJlc3NFdmVudHMpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IHRoaXMudG90YWxUaW1lKE1hdGgubWluKHRoaXMudG90YWxEdXJhdGlvbigpLCB2YWx1ZSArIF9lbGFwc2VkQ3ljbGVEdXJhdGlvbih0aGlzKSkgJSAodGhpcy5fZHVyICsgdGhpcy5fckRlbGF5KSB8fCAodmFsdWUgPyB0aGlzLl9kdXIgOiAwKSwgc3VwcHJlc3NFdmVudHMpIDogdGhpcy5fdGltZTsgLy8gbm90ZTogaWYgdGhlIG1vZHVsdXMgcmVzdWx0cyBpbiAwLCB0aGUgcGxheWhlYWQgY291bGQgYmUgZXhhY3RseSBhdCB0aGUgZW5kIG9yIHRoZSBiZWdpbm5pbmcsIGFuZCB3ZSBhbHdheXMgZGVmZXIgdG8gdGhlIEVORCB3aXRoIGEgbm9uLXplcm8gdmFsdWUsIG90aGVyd2lzZSBpZiB5b3Ugc2V0IHRoZSB0aW1lKCkgdG8gdGhlIHZlcnkgZW5kIChkdXJhdGlvbigpKSwgaXQgd291bGQgcmVuZGVyIGF0IHRoZSBTVEFSVCFcbiAgfTtcblxuICBfcHJvdG8udG90YWxQcm9ncmVzcyA9IGZ1bmN0aW9uIHRvdGFsUHJvZ3Jlc3ModmFsdWUsIHN1cHByZXNzRXZlbnRzKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyB0aGlzLnRvdGFsVGltZSh0aGlzLnRvdGFsRHVyYXRpb24oKSAqIHZhbHVlLCBzdXBwcmVzc0V2ZW50cykgOiB0aGlzLnRvdGFsRHVyYXRpb24oKSA/IE1hdGgubWluKDEsIHRoaXMuX3RUaW1lIC8gdGhpcy5fdER1cikgOiB0aGlzLnJhdGlvO1xuICB9O1xuXG4gIF9wcm90by5wcm9ncmVzcyA9IGZ1bmN0aW9uIHByb2dyZXNzKHZhbHVlLCBzdXBwcmVzc0V2ZW50cykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gdGhpcy50b3RhbFRpbWUodGhpcy5kdXJhdGlvbigpICogKHRoaXMuX3lveW8gJiYgISh0aGlzLml0ZXJhdGlvbigpICYgMSkgPyAxIC0gdmFsdWUgOiB2YWx1ZSkgKyBfZWxhcHNlZEN5Y2xlRHVyYXRpb24odGhpcyksIHN1cHByZXNzRXZlbnRzKSA6IHRoaXMuZHVyYXRpb24oKSA/IE1hdGgubWluKDEsIHRoaXMuX3RpbWUgLyB0aGlzLl9kdXIpIDogdGhpcy5yYXRpbztcbiAgfTtcblxuICBfcHJvdG8uaXRlcmF0aW9uID0gZnVuY3Rpb24gaXRlcmF0aW9uKHZhbHVlLCBzdXBwcmVzc0V2ZW50cykge1xuICAgIHZhciBjeWNsZUR1cmF0aW9uID0gdGhpcy5kdXJhdGlvbigpICsgdGhpcy5fckRlbGF5O1xuXG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyB0aGlzLnRvdGFsVGltZSh0aGlzLl90aW1lICsgKHZhbHVlIC0gMSkgKiBjeWNsZUR1cmF0aW9uLCBzdXBwcmVzc0V2ZW50cykgOiB0aGlzLl9yZXBlYXQgPyBfYW5pbWF0aW9uQ3ljbGUodGhpcy5fdFRpbWUsIGN5Y2xlRHVyYXRpb24pICsgMSA6IDE7XG4gIH0gLy8gcG90ZW50aWFsIGZ1dHVyZSBhZGRpdGlvbjpcbiAgLy8gaXNQbGF5aW5nQmFja3dhcmRzKCkge1xuICAvLyBcdGxldCBhbmltYXRpb24gPSB0aGlzLFxuICAvLyBcdFx0b3JpZW50YXRpb24gPSAxOyAvLyAxID0gZm9yd2FyZCwgLTEgPSBiYWNrd2FyZFxuICAvLyBcdHdoaWxlIChhbmltYXRpb24pIHtcbiAgLy8gXHRcdG9yaWVudGF0aW9uICo9IGFuaW1hdGlvbi5yZXZlcnNlZCgpIHx8IChhbmltYXRpb24ucmVwZWF0KCkgJiYgIShhbmltYXRpb24uaXRlcmF0aW9uKCkgJiAxKSkgPyAtMSA6IDE7XG4gIC8vIFx0XHRhbmltYXRpb24gPSBhbmltYXRpb24ucGFyZW50O1xuICAvLyBcdH1cbiAgLy8gXHRyZXR1cm4gb3JpZW50YXRpb24gPCAwO1xuICAvLyB9XG4gIDtcblxuICBfcHJvdG8udGltZVNjYWxlID0gZnVuY3Rpb24gdGltZVNjYWxlKHZhbHVlKSB7XG4gICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcnRzID09PSAtX3RpbnlOdW0gPyAwIDogdGhpcy5fcnRzOyAvLyByZWNvcmRlZCB0aW1lU2NhbGUuIFNwZWNpYWwgY2FzZTogaWYgc29tZW9uZSBjYWxscyByZXZlcnNlKCkgb24gYW4gYW5pbWF0aW9uIHdpdGggdGltZVNjYWxlIG9mIDAsIHdlIGFzc2lnbiBpdCAtX3RpbnlOdW0gdG8gcmVtZW1iZXIgaXQncyByZXZlcnNlZC5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fcnRzID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdmFyIHRUaW1lID0gdGhpcy5wYXJlbnQgJiYgdGhpcy5fdHMgPyBfcGFyZW50VG9DaGlsZFRvdGFsVGltZSh0aGlzLnBhcmVudC5fdGltZSwgdGhpcykgOiB0aGlzLl90VGltZTsgLy8gbWFrZSBzdXJlIHRvIGRvIHRoZSBwYXJlbnRUb0NoaWxkVG90YWxUaW1lKCkgQkVGT1JFIHNldHRpbmcgdGhlIG5ldyBfdHMgYmVjYXVzZSB0aGUgb2xkIG9uZSBtdXN0IGJlIHVzZWQgaW4gdGhhdCBjYWxjdWxhdGlvbi5cbiAgICAvLyBmdXR1cmUgYWRkaXRpb24/IFVwIHNpZGU6IGZhc3QgYW5kIG1pbmltYWwgZmlsZSBzaXplLiBEb3duIHNpZGU6IG9ubHkgd29ya3Mgb24gdGhpcyBhbmltYXRpb247IGlmIGEgdGltZWxpbmUgaXMgcmV2ZXJzZWQsIGZvciBleGFtcGxlLCBpdHMgY2hpbGRyZW5zJyBvblJldmVyc2Ugd291bGRuJ3QgZ2V0IGNhbGxlZC5cbiAgICAvLygrdmFsdWUgPCAwICYmIHRoaXMuX3J0cyA+PSAwKSAmJiBfY2FsbGJhY2sodGhpcywgXCJvblJldmVyc2VcIiwgdHJ1ZSk7XG4gICAgLy8gcHJpb3JpdGl6ZSByZW5kZXJpbmcgd2hlcmUgdGhlIHBhcmVudCdzIHBsYXloZWFkIGxpbmVzIHVwIGluc3RlYWQgb2YgdGhpcy5fdFRpbWUgYmVjYXVzZSB0aGVyZSBjb3VsZCBiZSBhIHR3ZWVuIHRoYXQncyBhbmltYXRpbmcgYW5vdGhlciB0d2VlbidzIHRpbWVTY2FsZSBpbiB0aGUgc2FtZSByZW5kZXJpbmcgbG9vcCAoc2FtZSBwYXJlbnQpLCB0aHVzIGlmIHRoZSB0aW1lU2NhbGUgdHdlZW4gcmVuZGVycyBmaXJzdCwgaXQgd291bGQgYWx0ZXIgX3N0YXJ0IEJFRk9SRSBfdFRpbWUgd2FzIHNldCBvbiB0aGF0IHRpY2sgKGluIHRoZSByZW5kZXJpbmcgbG9vcCksIGVmZmVjdGl2ZWx5IGZyZWV6aW5nIGl0IHVudGlsIHRoZSB0aW1lU2NhbGUgdHdlZW4gZmluaXNoZXMuXG5cbiAgICB0aGlzLl9ydHMgPSArdmFsdWUgfHwgMDtcbiAgICB0aGlzLl90cyA9IHRoaXMuX3BzIHx8IHZhbHVlID09PSAtX3RpbnlOdW0gPyAwIDogdGhpcy5fcnRzOyAvLyBfdHMgaXMgdGhlIGZ1bmN0aW9uYWwgdGltZVNjYWxlIHdoaWNoIHdvdWxkIGJlIDAgaWYgdGhlIGFuaW1hdGlvbiBpcyBwYXVzZWQuXG5cbiAgICB0aGlzLnRvdGFsVGltZShfY2xhbXAoLXRoaXMuX2RlbGF5LCB0aGlzLl90RHVyLCB0VGltZSksIHRydWUpO1xuXG4gICAgX3NldEVuZCh0aGlzKTsgLy8gaWYgcGFyZW50LnNtb290aENoaWxkVGltaW5nIHdhcyBmYWxzZSwgdGhlIGVuZCB0aW1lIGRpZG4ndCBnZXQgdXBkYXRlZCBpbiB0aGUgX2FsaWduUGxheWhlYWQoKSBtZXRob2QsIHNvIGRvIGl0IGhlcmUuXG5cblxuICAgIHJldHVybiBfcmVjYWNoZUFuY2VzdG9ycyh0aGlzKTtcbiAgfTtcblxuICBfcHJvdG8ucGF1c2VkID0gZnVuY3Rpb24gcGF1c2VkKHZhbHVlKSB7XG4gICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcHM7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3BzICE9PSB2YWx1ZSkge1xuICAgICAgdGhpcy5fcHMgPSB2YWx1ZTtcblxuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3BUaW1lID0gdGhpcy5fdFRpbWUgfHwgTWF0aC5tYXgoLXRoaXMuX2RlbGF5LCB0aGlzLnJhd1RpbWUoKSk7IC8vIGlmIHRoZSBwYXVzZSBvY2N1cnMgZHVyaW5nIHRoZSBkZWxheSBwaGFzZSwgbWFrZSBzdXJlIHRoYXQncyBmYWN0b3JlZCBpbiB3aGVuIHJlc3VtaW5nLlxuXG4gICAgICAgIHRoaXMuX3RzID0gdGhpcy5fYWN0ID0gMDsgLy8gX3RzIGlzIHRoZSBmdW5jdGlvbmFsIHRpbWVTY2FsZSwgc28gYSBwYXVzZWQgdHdlZW4gd291bGQgZWZmZWN0aXZlbHkgaGF2ZSBhIHRpbWVTY2FsZSBvZiAwLiBXZSByZWNvcmQgdGhlIFwicmVhbFwiIHRpbWVTY2FsZSBhcyBfcnRzIChyZWNvcmRlZCB0aW1lIHNjYWxlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3dha2UoKTtcblxuICAgICAgICB0aGlzLl90cyA9IHRoaXMuX3J0czsgLy9vbmx5IGRlZmVyIHRvIF9wVGltZSAocGF1c2VUaW1lKSBpZiB0VGltZSBpcyB6ZXJvLiBSZW1lbWJlciwgc29tZW9uZSBjb3VsZCBwYXVzZSgpIGFuIGFuaW1hdGlvbiwgdGhlbiBzY3J1YiB0aGUgcGxheWhlYWQgYW5kIHJlc3VtZSgpLiBJZiB0aGUgcGFyZW50IGRvZXNuJ3QgaGF2ZSBzbW9vdGhDaGlsZFRpbWluZywgd2UgcmVuZGVyIGF0IHRoZSByYXdUaW1lKCkgYmVjYXVzZSB0aGUgc3RhcnRUaW1lIHdvbid0IGdldCB1cGRhdGVkLlxuXG4gICAgICAgIHRoaXMudG90YWxUaW1lKHRoaXMucGFyZW50ICYmICF0aGlzLnBhcmVudC5zbW9vdGhDaGlsZFRpbWluZyA/IHRoaXMucmF3VGltZSgpIDogdGhpcy5fdFRpbWUgfHwgdGhpcy5fcFRpbWUsIHRoaXMucHJvZ3Jlc3MoKSA9PT0gMSAmJiBNYXRoLmFicyh0aGlzLl96VGltZSkgIT09IF90aW55TnVtICYmICh0aGlzLl90VGltZSAtPSBfdGlueU51bSkpOyAvLyBlZGdlIGNhc2U6IGFuaW1hdGlvbi5wcm9ncmVzcygxKS5wYXVzZSgpLnBsYXkoKSB3b3VsZG4ndCByZW5kZXIgYWdhaW4gYmVjYXVzZSB0aGUgcGxheWhlYWQgaXMgYWxyZWFkeSBhdCB0aGUgZW5kLCBidXQgdGhlIGNhbGwgdG8gdG90YWxUaW1lKCkgYmVsb3cgd2lsbCBhZGQgaXQgYmFjayB0byBpdHMgcGFyZW50Li4uYW5kIG5vdCByZW1vdmUgaXQgYWdhaW4gKHNpbmNlIHJlbW92aW5nIG9ubHkgaGFwcGVucyB1cG9uIHJlbmRlcmluZyBhdCBhIG5ldyB0aW1lKS4gT2Zmc2V0dGluZyB0aGUgX3RUaW1lIHNsaWdodGx5IGlzIGRvbmUgc2ltcGx5IHRvIGNhdXNlIHRoZSBmaW5hbCByZW5kZXIgaW4gdG90YWxUaW1lKCkgdGhhdCdsbCBwb3AgaXQgb2ZmIGl0cyB0aW1lbGluZSAoaWYgYXV0b1JlbW92ZUNoaWxkcmVuIGlzIHRydWUsIG9mIGNvdXJzZSkuIENoZWNrIHRvIG1ha2Ugc3VyZSBfelRpbWUgaXNuJ3QgLV90aW55TnVtIHRvIGF2b2lkIGFuIGVkZ2UgY2FzZSB3aGVyZSB0aGUgcGxheWhlYWQgaXMgcHVzaGVkIHRvIHRoZSBlbmQgYnV0IElOU0lERSBhIHR3ZWVuL2NhbGxiYWNrLCB0aGUgdGltZWxpbmUgaXRzZWxmIGlzIHBhdXNlZCB0aHVzIGhhbHRpbmcgcmVuZGVyaW5nIGFuZCBsZWF2aW5nIGEgZmV3IHVucmVuZGVyZWQuIFdoZW4gcmVzdW1pbmcsIGl0IHdvdWxkbid0IHJlbmRlciB0aG9zZSBvdGhlcndpc2UuXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLnN0YXJ0VGltZSA9IGZ1bmN0aW9uIHN0YXJ0VGltZSh2YWx1ZSkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLl9zdGFydCA9IHZhbHVlO1xuICAgICAgdmFyIHBhcmVudCA9IHRoaXMucGFyZW50IHx8IHRoaXMuX2RwO1xuICAgICAgcGFyZW50ICYmIChwYXJlbnQuX3NvcnQgfHwgIXRoaXMucGFyZW50KSAmJiBfYWRkVG9UaW1lbGluZShwYXJlbnQsIHRoaXMsIHZhbHVlIC0gdGhpcy5fZGVsYXkpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3N0YXJ0O1xuICB9O1xuXG4gIF9wcm90by5lbmRUaW1lID0gZnVuY3Rpb24gZW5kVGltZShpbmNsdWRlUmVwZWF0cykge1xuICAgIHJldHVybiB0aGlzLl9zdGFydCArIChfaXNOb3RGYWxzZShpbmNsdWRlUmVwZWF0cykgPyB0aGlzLnRvdGFsRHVyYXRpb24oKSA6IHRoaXMuZHVyYXRpb24oKSkgLyBNYXRoLmFicyh0aGlzLl90cyB8fCAxKTtcbiAgfTtcblxuICBfcHJvdG8ucmF3VGltZSA9IGZ1bmN0aW9uIHJhd1RpbWUod3JhcFJlcGVhdHMpIHtcbiAgICB2YXIgcGFyZW50ID0gdGhpcy5wYXJlbnQgfHwgdGhpcy5fZHA7IC8vIF9kcCA9IGRldGFjaGVkIHBhcmVudFxuXG4gICAgcmV0dXJuICFwYXJlbnQgPyB0aGlzLl90VGltZSA6IHdyYXBSZXBlYXRzICYmICghdGhpcy5fdHMgfHwgdGhpcy5fcmVwZWF0ICYmIHRoaXMuX3RpbWUgJiYgdGhpcy50b3RhbFByb2dyZXNzKCkgPCAxKSA/IHRoaXMuX3RUaW1lICUgKHRoaXMuX2R1ciArIHRoaXMuX3JEZWxheSkgOiAhdGhpcy5fdHMgPyB0aGlzLl90VGltZSA6IF9wYXJlbnRUb0NoaWxkVG90YWxUaW1lKHBhcmVudC5yYXdUaW1lKHdyYXBSZXBlYXRzKSwgdGhpcyk7XG4gIH07XG5cbiAgX3Byb3RvLnJldmVydCA9IGZ1bmN0aW9uIHJldmVydChjb25maWcpIHtcbiAgICBpZiAoY29uZmlnID09PSB2b2lkIDApIHtcbiAgICAgIGNvbmZpZyA9IF9yZXZlcnRDb25maWc7XG4gICAgfVxuXG4gICAgdmFyIHByZXZJc1JldmVydGluZyA9IF9yZXZlcnRpbmc7XG4gICAgX3JldmVydGluZyA9IGNvbmZpZztcbiAgICB0aGlzLnRpbWVsaW5lICYmIHRoaXMudGltZWxpbmUucmV2ZXJ0KGNvbmZpZyk7XG4gICAgdGhpcy50b3RhbFRpbWUoLTAuMDEsIGNvbmZpZy5zdXBwcmVzc0V2ZW50cyk7XG4gICAgdGhpcy5kYXRhICE9PSBcIm5lc3RlZFwiICYmIF9yZW1vdmVGcm9tUGFyZW50KHRoaXMpO1xuICAgIF9yZXZlcnRpbmcgPSBwcmV2SXNSZXZlcnRpbmc7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLmdsb2JhbFRpbWUgPSBmdW5jdGlvbiBnbG9iYWxUaW1lKHJhd1RpbWUpIHtcbiAgICB2YXIgYW5pbWF0aW9uID0gdGhpcyxcbiAgICAgICAgdGltZSA9IGFyZ3VtZW50cy5sZW5ndGggPyByYXdUaW1lIDogYW5pbWF0aW9uLnJhd1RpbWUoKTtcblxuICAgIHdoaWxlIChhbmltYXRpb24pIHtcbiAgICAgIHRpbWUgPSBhbmltYXRpb24uX3N0YXJ0ICsgdGltZSAvIChhbmltYXRpb24uX3RzIHx8IDEpO1xuICAgICAgYW5pbWF0aW9uID0gYW5pbWF0aW9uLl9kcDtcbiAgICB9XG5cbiAgICByZXR1cm4gIXRoaXMucGFyZW50ICYmIHRoaXMudmFycy5pbW1lZGlhdGVSZW5kZXIgPyAtMSA6IHRpbWU7IC8vIHRoZSBfc3RhcnRBdCB0d2VlbnMgZm9yIC5mcm9tVG8oKSBhbmQgLmZyb20oKSB0aGF0IGhhdmUgaW1tZWRpYXRlUmVuZGVyIHNob3VsZCBhbHdheXMgYmUgRklSU1QgaW4gdGhlIHRpbWVsaW5lIChpbXBvcnRhbnQgZm9yIFJlY29yZGluZy5yZXZlcnQoKSlcbiAgfTtcblxuICBfcHJvdG8ucmVwZWF0ID0gZnVuY3Rpb24gcmVwZWF0KHZhbHVlKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX3JlcGVhdCA9IHZhbHVlID09PSBJbmZpbml0eSA/IC0yIDogdmFsdWU7XG4gICAgICByZXR1cm4gX29uVXBkYXRlVG90YWxEdXJhdGlvbih0aGlzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fcmVwZWF0ID09PSAtMiA/IEluZmluaXR5IDogdGhpcy5fcmVwZWF0O1xuICB9O1xuXG4gIF9wcm90by5yZXBlYXREZWxheSA9IGZ1bmN0aW9uIHJlcGVhdERlbGF5KHZhbHVlKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIHZhciB0aW1lID0gdGhpcy5fdGltZTtcbiAgICAgIHRoaXMuX3JEZWxheSA9IHZhbHVlO1xuXG4gICAgICBfb25VcGRhdGVUb3RhbER1cmF0aW9uKHRoaXMpO1xuXG4gICAgICByZXR1cm4gdGltZSA/IHRoaXMudGltZSh0aW1lKSA6IHRoaXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3JEZWxheTtcbiAgfTtcblxuICBfcHJvdG8ueW95byA9IGZ1bmN0aW9uIHlveW8odmFsdWUpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgdGhpcy5feW95byA9IHZhbHVlO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3lveW87XG4gIH07XG5cbiAgX3Byb3RvLnNlZWsgPSBmdW5jdGlvbiBzZWVrKHBvc2l0aW9uLCBzdXBwcmVzc0V2ZW50cykge1xuICAgIHJldHVybiB0aGlzLnRvdGFsVGltZShfcGFyc2VQb3NpdGlvbih0aGlzLCBwb3NpdGlvbiksIF9pc05vdEZhbHNlKHN1cHByZXNzRXZlbnRzKSk7XG4gIH07XG5cbiAgX3Byb3RvLnJlc3RhcnQgPSBmdW5jdGlvbiByZXN0YXJ0KGluY2x1ZGVEZWxheSwgc3VwcHJlc3NFdmVudHMpIHtcbiAgICByZXR1cm4gdGhpcy5wbGF5KCkudG90YWxUaW1lKGluY2x1ZGVEZWxheSA/IC10aGlzLl9kZWxheSA6IDAsIF9pc05vdEZhbHNlKHN1cHByZXNzRXZlbnRzKSk7XG4gIH07XG5cbiAgX3Byb3RvLnBsYXkgPSBmdW5jdGlvbiBwbGF5KGZyb20sIHN1cHByZXNzRXZlbnRzKSB7XG4gICAgZnJvbSAhPSBudWxsICYmIHRoaXMuc2Vlayhmcm9tLCBzdXBwcmVzc0V2ZW50cyk7XG4gICAgcmV0dXJuIHRoaXMucmV2ZXJzZWQoZmFsc2UpLnBhdXNlZChmYWxzZSk7XG4gIH07XG5cbiAgX3Byb3RvLnJldmVyc2UgPSBmdW5jdGlvbiByZXZlcnNlKGZyb20sIHN1cHByZXNzRXZlbnRzKSB7XG4gICAgZnJvbSAhPSBudWxsICYmIHRoaXMuc2Vlayhmcm9tIHx8IHRoaXMudG90YWxEdXJhdGlvbigpLCBzdXBwcmVzc0V2ZW50cyk7XG4gICAgcmV0dXJuIHRoaXMucmV2ZXJzZWQodHJ1ZSkucGF1c2VkKGZhbHNlKTtcbiAgfTtcblxuICBfcHJvdG8ucGF1c2UgPSBmdW5jdGlvbiBwYXVzZShhdFRpbWUsIHN1cHByZXNzRXZlbnRzKSB7XG4gICAgYXRUaW1lICE9IG51bGwgJiYgdGhpcy5zZWVrKGF0VGltZSwgc3VwcHJlc3NFdmVudHMpO1xuICAgIHJldHVybiB0aGlzLnBhdXNlZCh0cnVlKTtcbiAgfTtcblxuICBfcHJvdG8ucmVzdW1lID0gZnVuY3Rpb24gcmVzdW1lKCkge1xuICAgIHJldHVybiB0aGlzLnBhdXNlZChmYWxzZSk7XG4gIH07XG5cbiAgX3Byb3RvLnJldmVyc2VkID0gZnVuY3Rpb24gcmV2ZXJzZWQodmFsdWUpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgISF2YWx1ZSAhPT0gdGhpcy5yZXZlcnNlZCgpICYmIHRoaXMudGltZVNjYWxlKC10aGlzLl9ydHMgfHwgKHZhbHVlID8gLV90aW55TnVtIDogMCkpOyAvLyBpbiBjYXNlIHRpbWVTY2FsZSBpcyB6ZXJvLCByZXZlcnNpbmcgd291bGQgaGF2ZSBubyBlZmZlY3Qgc28gd2UgdXNlIF90aW55TnVtLlxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fcnRzIDwgMDtcbiAgfTtcblxuICBfcHJvdG8uaW52YWxpZGF0ZSA9IGZ1bmN0aW9uIGludmFsaWRhdGUoKSB7XG4gICAgdGhpcy5faW5pdHRlZCA9IHRoaXMuX2FjdCA9IDA7XG4gICAgdGhpcy5felRpbWUgPSAtX3RpbnlOdW07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLmlzQWN0aXZlID0gZnVuY3Rpb24gaXNBY3RpdmUoKSB7XG4gICAgdmFyIHBhcmVudCA9IHRoaXMucGFyZW50IHx8IHRoaXMuX2RwLFxuICAgICAgICBzdGFydCA9IHRoaXMuX3N0YXJ0LFxuICAgICAgICByYXdUaW1lO1xuICAgIHJldHVybiAhISghcGFyZW50IHx8IHRoaXMuX3RzICYmIHRoaXMuX2luaXR0ZWQgJiYgcGFyZW50LmlzQWN0aXZlKCkgJiYgKHJhd1RpbWUgPSBwYXJlbnQucmF3VGltZSh0cnVlKSkgPj0gc3RhcnQgJiYgcmF3VGltZSA8IHRoaXMuZW5kVGltZSh0cnVlKSAtIF90aW55TnVtKTtcbiAgfTtcblxuICBfcHJvdG8uZXZlbnRDYWxsYmFjayA9IGZ1bmN0aW9uIGV2ZW50Q2FsbGJhY2sodHlwZSwgY2FsbGJhY2ssIHBhcmFtcykge1xuICAgIHZhciB2YXJzID0gdGhpcy52YXJzO1xuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgICAgIGRlbGV0ZSB2YXJzW3R5cGVdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyc1t0eXBlXSA9IGNhbGxiYWNrO1xuICAgICAgICBwYXJhbXMgJiYgKHZhcnNbdHlwZSArIFwiUGFyYW1zXCJdID0gcGFyYW1zKTtcbiAgICAgICAgdHlwZSA9PT0gXCJvblVwZGF0ZVwiICYmICh0aGlzLl9vblVwZGF0ZSA9IGNhbGxiYWNrKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcnNbdHlwZV07XG4gIH07XG5cbiAgX3Byb3RvLnRoZW4gPSBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgdmFyIGYgPSBfaXNGdW5jdGlvbihvbkZ1bGZpbGxlZCkgPyBvbkZ1bGZpbGxlZCA6IF9wYXNzVGhyb3VnaCxcbiAgICAgICAgICBfcmVzb2x2ZSA9IGZ1bmN0aW9uIF9yZXNvbHZlKCkge1xuICAgICAgICB2YXIgX3RoZW4gPSBzZWxmLnRoZW47XG4gICAgICAgIHNlbGYudGhlbiA9IG51bGw7IC8vIHRlbXBvcmFyaWx5IG51bGwgdGhlIHRoZW4oKSBtZXRob2QgdG8gYXZvaWQgYW4gaW5maW5pdGUgbG9vcCAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmVlbnNvY2svR1NBUC9pc3N1ZXMvMzIyKVxuXG4gICAgICAgIF9pc0Z1bmN0aW9uKGYpICYmIChmID0gZihzZWxmKSkgJiYgKGYudGhlbiB8fCBmID09PSBzZWxmKSAmJiAoc2VsZi50aGVuID0gX3RoZW4pO1xuICAgICAgICByZXNvbHZlKGYpO1xuICAgICAgICBzZWxmLnRoZW4gPSBfdGhlbjtcbiAgICAgIH07XG5cbiAgICAgIGlmIChzZWxmLl9pbml0dGVkICYmIHNlbGYudG90YWxQcm9ncmVzcygpID09PSAxICYmIHNlbGYuX3RzID49IDAgfHwgIXNlbGYuX3RUaW1lICYmIHNlbGYuX3RzIDwgMCkge1xuICAgICAgICBfcmVzb2x2ZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5fcHJvbSA9IF9yZXNvbHZlO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5raWxsID0gZnVuY3Rpb24ga2lsbCgpIHtcbiAgICBfaW50ZXJydXB0KHRoaXMpO1xuICB9O1xuXG4gIHJldHVybiBBbmltYXRpb247XG59KCk7XG5cbl9zZXREZWZhdWx0cyhBbmltYXRpb24ucHJvdG90eXBlLCB7XG4gIF90aW1lOiAwLFxuICBfc3RhcnQ6IDAsXG4gIF9lbmQ6IDAsXG4gIF90VGltZTogMCxcbiAgX3REdXI6IDAsXG4gIF9kaXJ0eTogMCxcbiAgX3JlcGVhdDogMCxcbiAgX3lveW86IGZhbHNlLFxuICBwYXJlbnQ6IG51bGwsXG4gIF9pbml0dGVkOiBmYWxzZSxcbiAgX3JEZWxheTogMCxcbiAgX3RzOiAxLFxuICBfZHA6IDAsXG4gIHJhdGlvOiAwLFxuICBfelRpbWU6IC1fdGlueU51bSxcbiAgX3Byb206IDAsXG4gIF9wczogZmFsc2UsXG4gIF9ydHM6IDFcbn0pO1xuLypcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFRJTUVMSU5FXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuXG5leHBvcnQgdmFyIFRpbWVsaW5lID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQW5pbWF0aW9uKSB7XG4gIF9pbmhlcml0c0xvb3NlKFRpbWVsaW5lLCBfQW5pbWF0aW9uKTtcblxuICBmdW5jdGlvbiBUaW1lbGluZSh2YXJzLCBwb3NpdGlvbikge1xuICAgIHZhciBfdGhpcztcblxuICAgIGlmICh2YXJzID09PSB2b2lkIDApIHtcbiAgICAgIHZhcnMgPSB7fTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9BbmltYXRpb24uY2FsbCh0aGlzLCB2YXJzKSB8fCB0aGlzO1xuICAgIF90aGlzLmxhYmVscyA9IHt9O1xuICAgIF90aGlzLnNtb290aENoaWxkVGltaW5nID0gISF2YXJzLnNtb290aENoaWxkVGltaW5nO1xuICAgIF90aGlzLmF1dG9SZW1vdmVDaGlsZHJlbiA9ICEhdmFycy5hdXRvUmVtb3ZlQ2hpbGRyZW47XG4gICAgX3RoaXMuX3NvcnQgPSBfaXNOb3RGYWxzZSh2YXJzLnNvcnRDaGlsZHJlbik7XG4gICAgX2dsb2JhbFRpbWVsaW5lICYmIF9hZGRUb1RpbWVsaW5lKHZhcnMucGFyZW50IHx8IF9nbG9iYWxUaW1lbGluZSwgX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIHBvc2l0aW9uKTtcbiAgICB2YXJzLnJldmVyc2VkICYmIF90aGlzLnJldmVyc2UoKTtcbiAgICB2YXJzLnBhdXNlZCAmJiBfdGhpcy5wYXVzZWQodHJ1ZSk7XG4gICAgdmFycy5zY3JvbGxUcmlnZ2VyICYmIF9zY3JvbGxUcmlnZ2VyKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCB2YXJzLnNjcm9sbFRyaWdnZXIpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8yID0gVGltZWxpbmUucHJvdG90eXBlO1xuXG4gIF9wcm90bzIudG8gPSBmdW5jdGlvbiB0byh0YXJnZXRzLCB2YXJzLCBwb3NpdGlvbikge1xuICAgIF9jcmVhdGVUd2VlblR5cGUoMCwgYXJndW1lbnRzLCB0aGlzKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90bzIuZnJvbSA9IGZ1bmN0aW9uIGZyb20odGFyZ2V0cywgdmFycywgcG9zaXRpb24pIHtcbiAgICBfY3JlYXRlVHdlZW5UeXBlKDEsIGFyZ3VtZW50cywgdGhpcyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8yLmZyb21UbyA9IGZ1bmN0aW9uIGZyb21Ubyh0YXJnZXRzLCBmcm9tVmFycywgdG9WYXJzLCBwb3NpdGlvbikge1xuICAgIF9jcmVhdGVUd2VlblR5cGUoMiwgYXJndW1lbnRzLCB0aGlzKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90bzIuc2V0ID0gZnVuY3Rpb24gc2V0KHRhcmdldHMsIHZhcnMsIHBvc2l0aW9uKSB7XG4gICAgdmFycy5kdXJhdGlvbiA9IDA7XG4gICAgdmFycy5wYXJlbnQgPSB0aGlzO1xuICAgIF9pbmhlcml0RGVmYXVsdHModmFycykucmVwZWF0RGVsYXkgfHwgKHZhcnMucmVwZWF0ID0gMCk7XG4gICAgdmFycy5pbW1lZGlhdGVSZW5kZXIgPSAhIXZhcnMuaW1tZWRpYXRlUmVuZGVyO1xuICAgIG5ldyBUd2Vlbih0YXJnZXRzLCB2YXJzLCBfcGFyc2VQb3NpdGlvbih0aGlzLCBwb3NpdGlvbiksIDEpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90bzIuY2FsbCA9IGZ1bmN0aW9uIGNhbGwoY2FsbGJhY2ssIHBhcmFtcywgcG9zaXRpb24pIHtcbiAgICByZXR1cm4gX2FkZFRvVGltZWxpbmUodGhpcywgVHdlZW4uZGVsYXllZENhbGwoMCwgY2FsbGJhY2ssIHBhcmFtcyksIHBvc2l0aW9uKTtcbiAgfSAvL09OTFkgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkhIE1heWJlIGRlbGV0ZT9cbiAgO1xuXG4gIF9wcm90bzIuc3RhZ2dlclRvID0gZnVuY3Rpb24gc3RhZ2dlclRvKHRhcmdldHMsIGR1cmF0aW9uLCB2YXJzLCBzdGFnZ2VyLCBwb3NpdGlvbiwgb25Db21wbGV0ZUFsbCwgb25Db21wbGV0ZUFsbFBhcmFtcykge1xuICAgIHZhcnMuZHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgICB2YXJzLnN0YWdnZXIgPSB2YXJzLnN0YWdnZXIgfHwgc3RhZ2dlcjtcbiAgICB2YXJzLm9uQ29tcGxldGUgPSBvbkNvbXBsZXRlQWxsO1xuICAgIHZhcnMub25Db21wbGV0ZVBhcmFtcyA9IG9uQ29tcGxldGVBbGxQYXJhbXM7XG4gICAgdmFycy5wYXJlbnQgPSB0aGlzO1xuICAgIG5ldyBUd2Vlbih0YXJnZXRzLCB2YXJzLCBfcGFyc2VQb3NpdGlvbih0aGlzLCBwb3NpdGlvbikpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90bzIuc3RhZ2dlckZyb20gPSBmdW5jdGlvbiBzdGFnZ2VyRnJvbSh0YXJnZXRzLCBkdXJhdGlvbiwgdmFycywgc3RhZ2dlciwgcG9zaXRpb24sIG9uQ29tcGxldGVBbGwsIG9uQ29tcGxldGVBbGxQYXJhbXMpIHtcbiAgICB2YXJzLnJ1bkJhY2t3YXJkcyA9IDE7XG4gICAgX2luaGVyaXREZWZhdWx0cyh2YXJzKS5pbW1lZGlhdGVSZW5kZXIgPSBfaXNOb3RGYWxzZSh2YXJzLmltbWVkaWF0ZVJlbmRlcik7XG4gICAgcmV0dXJuIHRoaXMuc3RhZ2dlclRvKHRhcmdldHMsIGR1cmF0aW9uLCB2YXJzLCBzdGFnZ2VyLCBwb3NpdGlvbiwgb25Db21wbGV0ZUFsbCwgb25Db21wbGV0ZUFsbFBhcmFtcyk7XG4gIH07XG5cbiAgX3Byb3RvMi5zdGFnZ2VyRnJvbVRvID0gZnVuY3Rpb24gc3RhZ2dlckZyb21Ubyh0YXJnZXRzLCBkdXJhdGlvbiwgZnJvbVZhcnMsIHRvVmFycywgc3RhZ2dlciwgcG9zaXRpb24sIG9uQ29tcGxldGVBbGwsIG9uQ29tcGxldGVBbGxQYXJhbXMpIHtcbiAgICB0b1ZhcnMuc3RhcnRBdCA9IGZyb21WYXJzO1xuICAgIF9pbmhlcml0RGVmYXVsdHModG9WYXJzKS5pbW1lZGlhdGVSZW5kZXIgPSBfaXNOb3RGYWxzZSh0b1ZhcnMuaW1tZWRpYXRlUmVuZGVyKTtcbiAgICByZXR1cm4gdGhpcy5zdGFnZ2VyVG8odGFyZ2V0cywgZHVyYXRpb24sIHRvVmFycywgc3RhZ2dlciwgcG9zaXRpb24sIG9uQ29tcGxldGVBbGwsIG9uQ29tcGxldGVBbGxQYXJhbXMpO1xuICB9O1xuXG4gIF9wcm90bzIucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKHRvdGFsVGltZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKSB7XG4gICAgdmFyIHByZXZUaW1lID0gdGhpcy5fdGltZSxcbiAgICAgICAgdER1ciA9IHRoaXMuX2RpcnR5ID8gdGhpcy50b3RhbER1cmF0aW9uKCkgOiB0aGlzLl90RHVyLFxuICAgICAgICBkdXIgPSB0aGlzLl9kdXIsXG4gICAgICAgIHRUaW1lID0gdG90YWxUaW1lIDw9IDAgPyAwIDogX3JvdW5kUHJlY2lzZSh0b3RhbFRpbWUpLFxuICAgICAgICAvLyBpZiBhIHBhdXNlZCB0aW1lbGluZSBpcyByZXN1bWVkIChvciBpdHMgX3N0YXJ0IGlzIHVwZGF0ZWQgZm9yIGFub3RoZXIgcmVhc29uLi4ud2hpY2ggcm91bmRzIGl0KSwgdGhhdCBjb3VsZCByZXN1bHQgaW4gdGhlIHBsYXloZWFkIHNoaWZ0aW5nIGEgKip0aW55KiogYW1vdW50IGFuZCBhIHplcm8tZHVyYXRpb24gY2hpbGQgYXQgdGhhdCBzcG90IG1heSBnZXQgcmVuZGVyZWQgYXQgYSBkaWZmZXJlbnQgcmF0aW8sIGxpa2UgaXRzIHRvdGFsVGltZSBpbiByZW5kZXIoKSBtYXkgYmUgMWUtMTcgaW5zdGVhZCBvZiAwLCBmb3IgZXhhbXBsZS5cbiAgICBjcm9zc2luZ1N0YXJ0ID0gdGhpcy5felRpbWUgPCAwICE9PSB0b3RhbFRpbWUgPCAwICYmICh0aGlzLl9pbml0dGVkIHx8ICFkdXIpLFxuICAgICAgICB0aW1lLFxuICAgICAgICBjaGlsZCxcbiAgICAgICAgbmV4dCxcbiAgICAgICAgaXRlcmF0aW9uLFxuICAgICAgICBjeWNsZUR1cmF0aW9uLFxuICAgICAgICBwcmV2UGF1c2VkLFxuICAgICAgICBwYXVzZVR3ZWVuLFxuICAgICAgICB0aW1lU2NhbGUsXG4gICAgICAgIHByZXZTdGFydCxcbiAgICAgICAgcHJldkl0ZXJhdGlvbixcbiAgICAgICAgeW95byxcbiAgICAgICAgaXNZb3lvO1xuICAgIHRoaXMgIT09IF9nbG9iYWxUaW1lbGluZSAmJiB0VGltZSA+IHREdXIgJiYgdG90YWxUaW1lID49IDAgJiYgKHRUaW1lID0gdER1cik7XG5cbiAgICBpZiAodFRpbWUgIT09IHRoaXMuX3RUaW1lIHx8IGZvcmNlIHx8IGNyb3NzaW5nU3RhcnQpIHtcbiAgICAgIGlmIChwcmV2VGltZSAhPT0gdGhpcy5fdGltZSAmJiBkdXIpIHtcbiAgICAgICAgLy9pZiB0b3RhbER1cmF0aW9uKCkgZmluZHMgYSBjaGlsZCB3aXRoIGEgbmVnYXRpdmUgc3RhcnRUaW1lIGFuZCBzbW9vdGhDaGlsZFRpbWluZyBpcyB0cnVlLCB0aGluZ3MgZ2V0IHNoaWZ0ZWQgYXJvdW5kIGludGVybmFsbHkgc28gd2UgbmVlZCB0byBhZGp1c3QgdGhlIHRpbWUgYWNjb3JkaW5nbHkuIEZvciBleGFtcGxlLCBpZiBhIHR3ZWVuIHN0YXJ0cyBhdCAtMzAgd2UgbXVzdCBzaGlmdCBFVkVSWVRISU5HIGZvcndhcmQgMzAgc2Vjb25kcyBhbmQgbW92ZSB0aGlzIHRpbWVsaW5lJ3Mgc3RhcnRUaW1lIGJhY2t3YXJkIGJ5IDMwIHNlY29uZHMgc28gdGhhdCB0aGluZ3MgYWxpZ24gd2l0aCB0aGUgcGxheWhlYWQgKG5vIGp1bXApLlxuICAgICAgICB0VGltZSArPSB0aGlzLl90aW1lIC0gcHJldlRpbWU7XG4gICAgICAgIHRvdGFsVGltZSArPSB0aGlzLl90aW1lIC0gcHJldlRpbWU7XG4gICAgICB9XG5cbiAgICAgIHRpbWUgPSB0VGltZTtcbiAgICAgIHByZXZTdGFydCA9IHRoaXMuX3N0YXJ0O1xuICAgICAgdGltZVNjYWxlID0gdGhpcy5fdHM7XG4gICAgICBwcmV2UGF1c2VkID0gIXRpbWVTY2FsZTtcblxuICAgICAgaWYgKGNyb3NzaW5nU3RhcnQpIHtcbiAgICAgICAgZHVyIHx8IChwcmV2VGltZSA9IHRoaXMuX3pUaW1lKTsgLy93aGVuIHRoZSBwbGF5aGVhZCBhcnJpdmVzIGF0IEVYQUNUTFkgdGltZSAwIChyaWdodCBvbiB0b3ApIG9mIGEgemVyby1kdXJhdGlvbiB0aW1lbGluZSwgd2UgbmVlZCB0byBkaXNjZXJuIGlmIGV2ZW50cyBhcmUgc3VwcHJlc3NlZCBzbyB0aGF0IHdoZW4gdGhlIHBsYXloZWFkIG1vdmVzIGFnYWluIChuZXh0IHRpbWUpLCBpdCdsbCB0cmlnZ2VyIHRoZSBjYWxsYmFjay4gSWYgZXZlbnRzIGFyZSBOT1Qgc3VwcHJlc3NlZCwgb2J2aW91c2x5IHRoZSBjYWxsYmFjayB3b3VsZCBiZSB0cmlnZ2VyZWQgaW4gdGhpcyByZW5kZXIuIEJhc2ljYWxseSwgdGhlIGNhbGxiYWNrIHNob3VsZCBmaXJlIGVpdGhlciB3aGVuIHRoZSBwbGF5aGVhZCBBUlJJVkVTIG9yIExFQVZFUyB0aGlzIGV4YWN0IHNwb3QsIG5vdCBib3RoLiBJbWFnaW5lIGRvaW5nIGEgdGltZWxpbmUuc2VlaygwKSBhbmQgdGhlcmUncyBhIGNhbGxiYWNrIHRoYXQgc2l0cyBhdCAwLiBTaW5jZSBldmVudHMgYXJlIHN1cHByZXNzZWQgb24gdGhhdCBzZWVrKCkgYnkgZGVmYXVsdCwgbm90aGluZyB3aWxsIGZpcmUsIGJ1dCB3aGVuIHRoZSBwbGF5aGVhZCBtb3ZlcyBvZmYgb2YgdGhhdCBwb3NpdGlvbiwgdGhlIGNhbGxiYWNrIHNob3VsZCBmaXJlLiBUaGlzIGJlaGF2aW9yIGlzIHdoYXQgcGVvcGxlIGludHVpdGl2ZWx5IGV4cGVjdC5cblxuICAgICAgICAodG90YWxUaW1lIHx8ICFzdXBwcmVzc0V2ZW50cykgJiYgKHRoaXMuX3pUaW1lID0gdG90YWxUaW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX3JlcGVhdCkge1xuICAgICAgICAvL2FkanVzdCB0aGUgdGltZSBmb3IgcmVwZWF0cyBhbmQgeW95b3NcbiAgICAgICAgeW95byA9IHRoaXMuX3lveW87XG4gICAgICAgIGN5Y2xlRHVyYXRpb24gPSBkdXIgKyB0aGlzLl9yRGVsYXk7XG5cbiAgICAgICAgaWYgKHRoaXMuX3JlcGVhdCA8IC0xICYmIHRvdGFsVGltZSA8IDApIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy50b3RhbFRpbWUoY3ljbGVEdXJhdGlvbiAqIDEwMCArIHRvdGFsVGltZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRpbWUgPSBfcm91bmRQcmVjaXNlKHRUaW1lICUgY3ljbGVEdXJhdGlvbik7IC8vcm91bmQgdG8gYXZvaWQgZmxvYXRpbmcgcG9pbnQgZXJyb3JzLiAoNCAlIDAuOCBzaG91bGQgYmUgMCBidXQgc29tZSBicm93c2VycyByZXBvcnQgaXQgYXMgMC43OTk5OTk5OSEpXG5cbiAgICAgICAgaWYgKHRUaW1lID09PSB0RHVyKSB7XG4gICAgICAgICAgLy8gdGhlIHREdXIgPT09IHRUaW1lIGlzIGZvciBlZGdlIGNhc2VzIHdoZXJlIHRoZXJlJ3MgYSBsZW5ndGh5IGRlY2ltYWwgb24gdGhlIGR1cmF0aW9uIGFuZCBpdCBtYXkgcmVhY2ggdGhlIHZlcnkgZW5kIGJ1dCB0aGUgdGltZSBpcyByZW5kZXJlZCBhcyBub3QtcXVpdGUtdGhlcmUgKHJlbWVtYmVyLCB0RHVyIGlzIHJvdW5kZWQgdG8gNCBkZWNpbWFscyB3aGVyZWFzIGR1ciBpc24ndClcbiAgICAgICAgICBpdGVyYXRpb24gPSB0aGlzLl9yZXBlYXQ7XG4gICAgICAgICAgdGltZSA9IGR1cjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVyYXRpb24gPSB+fih0VGltZSAvIGN5Y2xlRHVyYXRpb24pO1xuXG4gICAgICAgICAgaWYgKGl0ZXJhdGlvbiAmJiBpdGVyYXRpb24gPT09IHRUaW1lIC8gY3ljbGVEdXJhdGlvbikge1xuICAgICAgICAgICAgdGltZSA9IGR1cjtcbiAgICAgICAgICAgIGl0ZXJhdGlvbi0tO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRpbWUgPiBkdXIgJiYgKHRpbWUgPSBkdXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJldkl0ZXJhdGlvbiA9IF9hbmltYXRpb25DeWNsZSh0aGlzLl90VGltZSwgY3ljbGVEdXJhdGlvbik7XG4gICAgICAgICFwcmV2VGltZSAmJiB0aGlzLl90VGltZSAmJiBwcmV2SXRlcmF0aW9uICE9PSBpdGVyYXRpb24gJiYgKHByZXZJdGVyYXRpb24gPSBpdGVyYXRpb24pOyAvLyBlZGdlIGNhc2UgLSBpZiBzb21lb25lIGRvZXMgYWRkUGF1c2UoKSBhdCB0aGUgdmVyeSBiZWdpbm5pbmcgb2YgYSByZXBlYXRpbmcgdGltZWxpbmUsIHRoYXQgcGF1c2UgaXMgdGVjaG5pY2FsbHkgYXQgdGhlIHNhbWUgc3BvdCBhcyB0aGUgZW5kIHdoaWNoIGNhdXNlcyB0aGlzLl90aW1lIHRvIGdldCBzZXQgdG8gMCB3aGVuIHRoZSB0b3RhbFRpbWUgd291bGQgbm9ybWFsbHkgcGxhY2UgdGhlIHBsYXloZWFkIGF0IHRoZSBlbmQuIFNlZSBodHRwczovL2dyZWVuc29jay5jb20vZm9ydW1zL3RvcGljLzIzODIzLWNsb3NpbmctbmF2LWFuaW1hdGlvbi1ub3Qtd29ya2luZy1vbi1pZS1hbmQtaXBob25lLTYtbWF5YmUtb3RoZXItb2xkZXItYnJvd3Nlci8/dGFiPWNvbW1lbnRzI2NvbW1lbnQtMTEzMDA1XG5cbiAgICAgICAgaWYgKHlveW8gJiYgaXRlcmF0aW9uICYgMSkge1xuICAgICAgICAgIHRpbWUgPSBkdXIgLSB0aW1lO1xuICAgICAgICAgIGlzWW95byA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgLypcbiAgICAgICAgbWFrZSBzdXJlIGNoaWxkcmVuIGF0IHRoZSBlbmQvYmVnaW5uaW5nIG9mIHRoZSB0aW1lbGluZSBhcmUgcmVuZGVyZWQgcHJvcGVybHkuIElmLCBmb3IgZXhhbXBsZSxcbiAgICAgICAgYSAzLXNlY29uZCBsb25nIHRpbWVsaW5lIHJlbmRlcmVkIGF0IDIuOSBzZWNvbmRzIHByZXZpb3VzbHksIGFuZCBub3cgcmVuZGVycyBhdCAzLjIgc2Vjb25kcyAod2hpY2hcbiAgICAgICAgd291bGQgZ2V0IHRyYW5zbGF0ZWQgdG8gMi44IHNlY29uZHMgaWYgdGhlIHRpbWVsaW5lIHlveW9zIG9yIDAuMiBzZWNvbmRzIGlmIGl0IGp1c3QgcmVwZWF0cyksIHRoZXJlXG4gICAgICAgIGNvdWxkIGJlIGEgY2FsbGJhY2sgb3IgYSBzaG9ydCB0d2VlbiB0aGF0J3MgYXQgMi45NSBvciAzIHNlY29uZHMgaW4gd2hpY2ggd291bGRuJ3QgcmVuZGVyLiBTb1xuICAgICAgICB3ZSBuZWVkIHRvIHB1c2ggdGhlIHRpbWVsaW5lIHRvIHRoZSBlbmQgKGFuZC9vciBiZWdpbm5pbmcgZGVwZW5kaW5nIG9uIGl0cyB5b3lvIHZhbHVlKS4gQWxzbyB3ZSBtdXN0XG4gICAgICAgIGVuc3VyZSB0aGF0IHplcm8tZHVyYXRpb24gdHdlZW5zIGF0IHRoZSB2ZXJ5IGJlZ2lubmluZyBvciBlbmQgb2YgdGhlIFRpbWVsaW5lIHdvcmsuXG4gICAgICAgICovXG5cblxuICAgICAgICBpZiAoaXRlcmF0aW9uICE9PSBwcmV2SXRlcmF0aW9uICYmICF0aGlzLl9sb2NrKSB7XG4gICAgICAgICAgdmFyIHJld2luZGluZyA9IHlveW8gJiYgcHJldkl0ZXJhdGlvbiAmIDEsXG4gICAgICAgICAgICAgIGRvZXNXcmFwID0gcmV3aW5kaW5nID09PSAoeW95byAmJiBpdGVyYXRpb24gJiAxKTtcbiAgICAgICAgICBpdGVyYXRpb24gPCBwcmV2SXRlcmF0aW9uICYmIChyZXdpbmRpbmcgPSAhcmV3aW5kaW5nKTtcbiAgICAgICAgICBwcmV2VGltZSA9IHJld2luZGluZyA/IDAgOiBkdXI7XG4gICAgICAgICAgdGhpcy5fbG9jayA9IDE7XG4gICAgICAgICAgdGhpcy5yZW5kZXIocHJldlRpbWUgfHwgKGlzWW95byA/IDAgOiBfcm91bmRQcmVjaXNlKGl0ZXJhdGlvbiAqIGN5Y2xlRHVyYXRpb24pKSwgc3VwcHJlc3NFdmVudHMsICFkdXIpLl9sb2NrID0gMDtcbiAgICAgICAgICB0aGlzLl90VGltZSA9IHRUaW1lOyAvLyBpZiBhIHVzZXIgZ2V0cyB0aGUgaXRlcmF0aW9uKCkgaW5zaWRlIHRoZSBvblJlcGVhdCwgZm9yIGV4YW1wbGUsIGl0IHNob3VsZCBiZSBhY2N1cmF0ZS5cblxuICAgICAgICAgICFzdXBwcmVzc0V2ZW50cyAmJiB0aGlzLnBhcmVudCAmJiBfY2FsbGJhY2sodGhpcywgXCJvblJlcGVhdFwiKTtcbiAgICAgICAgICB0aGlzLnZhcnMucmVwZWF0UmVmcmVzaCAmJiAhaXNZb3lvICYmICh0aGlzLmludmFsaWRhdGUoKS5fbG9jayA9IDEpO1xuXG4gICAgICAgICAgaWYgKHByZXZUaW1lICYmIHByZXZUaW1lICE9PSB0aGlzLl90aW1lIHx8IHByZXZQYXVzZWQgIT09ICF0aGlzLl90cyB8fCB0aGlzLnZhcnMub25SZXBlYXQgJiYgIXRoaXMucGFyZW50ICYmICF0aGlzLl9hY3QpIHtcbiAgICAgICAgICAgIC8vIGlmIHByZXZUaW1lIGlzIDAgYW5kIHdlIHJlbmRlciBhdCB0aGUgdmVyeSBlbmQsIF90aW1lIHdpbGwgYmUgdGhlIGVuZCwgdGh1cyB3b24ndCBtYXRjaC4gU28gaW4gdGhpcyBlZGdlIGNhc2UsIHByZXZUaW1lIHdvbid0IG1hdGNoIF90aW1lIGJ1dCB0aGF0J3Mgb2theS4gSWYgaXQgZ2V0cyBraWxsZWQgaW4gdGhlIG9uUmVwZWF0LCBlamVjdCBhcyB3ZWxsLlxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZHVyID0gdGhpcy5fZHVyOyAvLyBpbiBjYXNlIHRoZSBkdXJhdGlvbiBjaGFuZ2VkIGluIHRoZSBvblJlcGVhdFxuXG4gICAgICAgICAgdER1ciA9IHRoaXMuX3REdXI7XG5cbiAgICAgICAgICBpZiAoZG9lc1dyYXApIHtcbiAgICAgICAgICAgIHRoaXMuX2xvY2sgPSAyO1xuICAgICAgICAgICAgcHJldlRpbWUgPSByZXdpbmRpbmcgPyBkdXIgOiAtMC4wMDAxO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIocHJldlRpbWUsIHRydWUpO1xuICAgICAgICAgICAgdGhpcy52YXJzLnJlcGVhdFJlZnJlc2ggJiYgIWlzWW95byAmJiB0aGlzLmludmFsaWRhdGUoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLl9sb2NrID0gMDtcblxuICAgICAgICAgIGlmICghdGhpcy5fdHMgJiYgIXByZXZQYXVzZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgIH0gLy9pbiBvcmRlciBmb3IgeW95b0Vhc2UgdG8gd29yayBwcm9wZXJseSB3aGVuIHRoZXJlJ3MgYSBzdGFnZ2VyLCB3ZSBtdXN0IHN3YXAgb3V0IHRoZSBlYXNlIGluIGVhY2ggc3ViLXR3ZWVuLlxuXG5cbiAgICAgICAgICBfcHJvcGFnYXRlWW95b0Vhc2UodGhpcywgaXNZb3lvKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5faGFzUGF1c2UgJiYgIXRoaXMuX2ZvcmNpbmcgJiYgdGhpcy5fbG9jayA8IDIpIHtcbiAgICAgICAgcGF1c2VUd2VlbiA9IF9maW5kTmV4dFBhdXNlVHdlZW4odGhpcywgX3JvdW5kUHJlY2lzZShwcmV2VGltZSksIF9yb3VuZFByZWNpc2UodGltZSkpO1xuXG4gICAgICAgIGlmIChwYXVzZVR3ZWVuKSB7XG4gICAgICAgICAgdFRpbWUgLT0gdGltZSAtICh0aW1lID0gcGF1c2VUd2Vlbi5fc3RhcnQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3RUaW1lID0gdFRpbWU7XG4gICAgICB0aGlzLl90aW1lID0gdGltZTtcbiAgICAgIHRoaXMuX2FjdCA9ICF0aW1lU2NhbGU7IC8vYXMgbG9uZyBhcyBpdCdzIG5vdCBwYXVzZWQsIGZvcmNlIGl0IHRvIGJlIGFjdGl2ZSBzbyB0aGF0IGlmIHRoZSB1c2VyIHJlbmRlcnMgaW5kZXBlbmRlbnQgb2YgdGhlIHBhcmVudCB0aW1lbGluZSwgaXQnbGwgYmUgZm9yY2VkIHRvIHJlLXJlbmRlciBvbiB0aGUgbmV4dCB0aWNrLlxuXG4gICAgICBpZiAoIXRoaXMuX2luaXR0ZWQpIHtcbiAgICAgICAgdGhpcy5fb25VcGRhdGUgPSB0aGlzLnZhcnMub25VcGRhdGU7XG4gICAgICAgIHRoaXMuX2luaXR0ZWQgPSAxO1xuICAgICAgICB0aGlzLl96VGltZSA9IHRvdGFsVGltZTtcbiAgICAgICAgcHJldlRpbWUgPSAwOyAvLyB1cG9uIGluaXQsIHRoZSBwbGF5aGVhZCBzaG91bGQgYWx3YXlzIGdvIGZvcndhcmQ7IHNvbWVvbmUgY291bGQgaW52YWxpZGF0ZSgpIGEgY29tcGxldGVkIHRpbWVsaW5lIGFuZCB0aGVuIGlmIHRoZXkgcmVzdGFydCgpLCB0aGF0IHdvdWxkIG1ha2UgY2hpbGQgdHdlZW5zIHJlbmRlciBpbiByZXZlcnNlIG9yZGVyIHdoaWNoIGNvdWxkIGxvY2sgaW4gdGhlIHdyb25nIHN0YXJ0aW5nIHZhbHVlcyBpZiB0aGV5IGJ1aWxkIG9uIGVhY2ggb3RoZXIsIGxpa2UgdGwudG8ob2JqLCB7eDogMTAwfSkudG8ob2JqLCB7eDogMH0pLlxuICAgICAgfVxuXG4gICAgICBpZiAoIXByZXZUaW1lICYmIHRpbWUgJiYgIXN1cHByZXNzRXZlbnRzKSB7XG4gICAgICAgIF9jYWxsYmFjayh0aGlzLCBcIm9uU3RhcnRcIik7XG5cbiAgICAgICAgaWYgKHRoaXMuX3RUaW1lICE9PSB0VGltZSkge1xuICAgICAgICAgIC8vIGluIGNhc2UgdGhlIG9uU3RhcnQgdHJpZ2dlcmVkIGEgcmVuZGVyIGF0IGEgZGlmZmVyZW50IHNwb3QsIGVqZWN0LiBMaWtlIGlmIHNvbWVvbmUgZGlkIGFuaW1hdGlvbi5wYXVzZSgwLjUpIG9yIHNvbWV0aGluZyBpbnNpZGUgdGhlIG9uU3RhcnQuXG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRpbWUgPj0gcHJldlRpbWUgJiYgdG90YWxUaW1lID49IDApIHtcbiAgICAgICAgY2hpbGQgPSB0aGlzLl9maXJzdDtcblxuICAgICAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgICAgICBuZXh0ID0gY2hpbGQuX25leHQ7XG5cbiAgICAgICAgICBpZiAoKGNoaWxkLl9hY3QgfHwgdGltZSA+PSBjaGlsZC5fc3RhcnQpICYmIGNoaWxkLl90cyAmJiBwYXVzZVR3ZWVuICE9PSBjaGlsZCkge1xuICAgICAgICAgICAgaWYgKGNoaWxkLnBhcmVudCAhPT0gdGhpcykge1xuICAgICAgICAgICAgICAvLyBhbiBleHRyZW1lIGVkZ2UgY2FzZSAtIHRoZSBjaGlsZCdzIHJlbmRlciBjb3VsZCBkbyBzb21ldGhpbmcgbGlrZSBraWxsKCkgdGhlIFwibmV4dFwiIG9uZSBpbiB0aGUgbGlua2VkIGxpc3QsIG9yIHJlcGFyZW50IGl0LiBJbiB0aGF0IGNhc2Ugd2UgbXVzdCByZS1pbml0aWF0ZSB0aGUgd2hvbGUgcmVuZGVyIHRvIGJlIHNhZmUuXG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlcih0b3RhbFRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNoaWxkLnJlbmRlcihjaGlsZC5fdHMgPiAwID8gKHRpbWUgLSBjaGlsZC5fc3RhcnQpICogY2hpbGQuX3RzIDogKGNoaWxkLl9kaXJ0eSA/IGNoaWxkLnRvdGFsRHVyYXRpb24oKSA6IGNoaWxkLl90RHVyKSArICh0aW1lIC0gY2hpbGQuX3N0YXJ0KSAqIGNoaWxkLl90cywgc3VwcHJlc3NFdmVudHMsIGZvcmNlKTtcblxuICAgICAgICAgICAgaWYgKHRpbWUgIT09IHRoaXMuX3RpbWUgfHwgIXRoaXMuX3RzICYmICFwcmV2UGF1c2VkKSB7XG4gICAgICAgICAgICAgIC8vaW4gY2FzZSBhIHR3ZWVuIHBhdXNlcyBvciBzZWVrcyB0aGUgdGltZWxpbmUgd2hlbiByZW5kZXJpbmcsIGxpa2UgaW5zaWRlIG9mIGFuIG9uVXBkYXRlL29uQ29tcGxldGVcbiAgICAgICAgICAgICAgcGF1c2VUd2VlbiA9IDA7XG4gICAgICAgICAgICAgIG5leHQgJiYgKHRUaW1lICs9IHRoaXMuX3pUaW1lID0gLV90aW55TnVtKTsgLy8gaXQgZGlkbid0IGZpbmlzaCByZW5kZXJpbmcsIHNvIGZsYWcgelRpbWUgYXMgbmVnYXRpdmUgc28gdGhhdCBzbyB0aGF0IHRoZSBuZXh0IHRpbWUgcmVuZGVyKCkgaXMgY2FsbGVkIGl0J2xsIGJlIGZvcmNlZCAodG8gcmVuZGVyIGFueSByZW1haW5pbmcgY2hpbGRyZW4pXG5cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2hpbGQgPSBuZXh0O1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3JjZSA9IGZvcmNlIHx8IF9yZXZlcnRpbmc7IC8vIGlmIHJldmVydGluZywgd2Ugc2hvdWxkIGFsd2F5cyBmb3JjZSByZW5kZXJzLiBJZiwgZm9yIGV4YW1wbGUsIGEgLmZyb21UbygpIHR3ZWVuIHdpdGggYSBzdGFnZ2VyICh3aGljaCBjcmVhdGVzIGFuIGludGVybmFsIHRpbWVsaW5lKSBnZXRzIHJldmVydGVkIEJFRk9SRSBzb21lIG9mIGl0cyBjaGlsZCB0d2VlbnMgcmVuZGVyIGZvciB0aGUgZmlyc3QgdGltZSwgaXQgbWF5IG5vdCBwcm9wZXJseSB0cmlnZ2VyIHRoZW0gdG8gcmV2ZXJ0LlxuXG4gICAgICAgIGNoaWxkID0gdGhpcy5fbGFzdDtcbiAgICAgICAgdmFyIGFkanVzdGVkVGltZSA9IHRvdGFsVGltZSA8IDAgPyB0b3RhbFRpbWUgOiB0aW1lOyAvL3doZW4gdGhlIHBsYXloZWFkIGdvZXMgYmFja3dhcmQgYmV5b25kIHRoZSBzdGFydCBvZiB0aGlzIHRpbWVsaW5lLCB3ZSBtdXN0IHBhc3MgdGhhdCBpbmZvcm1hdGlvbiBkb3duIHRvIHRoZSBjaGlsZCBhbmltYXRpb25zIHNvIHRoYXQgemVyby1kdXJhdGlvbiB0d2VlbnMga25vdyB3aGV0aGVyIHRvIHJlbmRlciB0aGVpciBzdGFydGluZyBvciBlbmRpbmcgdmFsdWVzLlxuXG4gICAgICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgICAgIG5leHQgPSBjaGlsZC5fcHJldjtcblxuICAgICAgICAgIGlmICgoY2hpbGQuX2FjdCB8fCBhZGp1c3RlZFRpbWUgPD0gY2hpbGQuX2VuZCkgJiYgY2hpbGQuX3RzICYmIHBhdXNlVHdlZW4gIT09IGNoaWxkKSB7XG4gICAgICAgICAgICBpZiAoY2hpbGQucGFyZW50ICE9PSB0aGlzKSB7XG4gICAgICAgICAgICAgIC8vIGFuIGV4dHJlbWUgZWRnZSBjYXNlIC0gdGhlIGNoaWxkJ3MgcmVuZGVyIGNvdWxkIGRvIHNvbWV0aGluZyBsaWtlIGtpbGwoKSB0aGUgXCJuZXh0XCIgb25lIGluIHRoZSBsaW5rZWQgbGlzdCwgb3IgcmVwYXJlbnQgaXQuIEluIHRoYXQgY2FzZSB3ZSBtdXN0IHJlLWluaXRpYXRlIHRoZSB3aG9sZSByZW5kZXIgdG8gYmUgc2FmZS5cbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKHRvdGFsVGltZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2hpbGQucmVuZGVyKGNoaWxkLl90cyA+IDAgPyAoYWRqdXN0ZWRUaW1lIC0gY2hpbGQuX3N0YXJ0KSAqIGNoaWxkLl90cyA6IChjaGlsZC5fZGlydHkgPyBjaGlsZC50b3RhbER1cmF0aW9uKCkgOiBjaGlsZC5fdER1cikgKyAoYWRqdXN0ZWRUaW1lIC0gY2hpbGQuX3N0YXJ0KSAqIGNoaWxkLl90cywgc3VwcHJlc3NFdmVudHMsIGZvcmNlKTtcblxuICAgICAgICAgICAgaWYgKHRpbWUgIT09IHRoaXMuX3RpbWUgfHwgIXRoaXMuX3RzICYmICFwcmV2UGF1c2VkKSB7XG4gICAgICAgICAgICAgIC8vaW4gY2FzZSBhIHR3ZWVuIHBhdXNlcyBvciBzZWVrcyB0aGUgdGltZWxpbmUgd2hlbiByZW5kZXJpbmcsIGxpa2UgaW5zaWRlIG9mIGFuIG9uVXBkYXRlL29uQ29tcGxldGVcbiAgICAgICAgICAgICAgcGF1c2VUd2VlbiA9IDA7XG4gICAgICAgICAgICAgIG5leHQgJiYgKHRUaW1lICs9IHRoaXMuX3pUaW1lID0gYWRqdXN0ZWRUaW1lID8gLV90aW55TnVtIDogX3RpbnlOdW0pOyAvLyBpdCBkaWRuJ3QgZmluaXNoIHJlbmRlcmluZywgc28gYWRqdXN0IHpUaW1lIHNvIHRoYXQgc28gdGhhdCB0aGUgbmV4dCB0aW1lIHJlbmRlcigpIGlzIGNhbGxlZCBpdCdsbCBiZSBmb3JjZWQgKHRvIHJlbmRlciBhbnkgcmVtYWluaW5nIGNoaWxkcmVuKVxuXG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNoaWxkID0gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocGF1c2VUd2VlbiAmJiAhc3VwcHJlc3NFdmVudHMpIHtcbiAgICAgICAgdGhpcy5wYXVzZSgpO1xuICAgICAgICBwYXVzZVR3ZWVuLnJlbmRlcih0aW1lID49IHByZXZUaW1lID8gMCA6IC1fdGlueU51bSkuX3pUaW1lID0gdGltZSA+PSBwcmV2VGltZSA/IDEgOiAtMTtcblxuICAgICAgICBpZiAodGhpcy5fdHMpIHtcbiAgICAgICAgICAvL3RoZSBjYWxsYmFjayByZXN1bWVkIHBsYXliYWNrISBTbyBzaW5jZSB3ZSBtYXkgaGF2ZSBoZWxkIGJhY2sgdGhlIHBsYXloZWFkIGR1ZSB0byB3aGVyZSB0aGUgcGF1c2UgaXMgcG9zaXRpb25lZCwgZ28gYWhlYWQgYW5kIGp1bXAgdG8gd2hlcmUgaXQncyBTVVBQT1NFRCB0byBiZSAoaWYgbm8gcGF1c2UgaGFwcGVuZWQpLlxuICAgICAgICAgIHRoaXMuX3N0YXJ0ID0gcHJldlN0YXJ0OyAvL2lmIHRoZSBwYXVzZSB3YXMgYXQgYW4gZWFybGllciB0aW1lIGFuZCB0aGUgdXNlciByZXN1bWVkIGluIHRoZSBjYWxsYmFjaywgaXQgY291bGQgcmVwb3NpdGlvbiB0aGUgdGltZWxpbmUgKGNoYW5naW5nIGl0cyBzdGFydFRpbWUpLCB0aHJvd2luZyB0aGluZ3Mgb2ZmIHNsaWdodGx5LCBzbyB3ZSBtYWtlIHN1cmUgdGhlIF9zdGFydCBkb2Vzbid0IHNoaWZ0LlxuXG4gICAgICAgICAgX3NldEVuZCh0aGlzKTtcblxuICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlcih0b3RhbFRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5fb25VcGRhdGUgJiYgIXN1cHByZXNzRXZlbnRzICYmIF9jYWxsYmFjayh0aGlzLCBcIm9uVXBkYXRlXCIsIHRydWUpO1xuICAgICAgaWYgKHRUaW1lID09PSB0RHVyICYmIHRoaXMuX3RUaW1lID49IHRoaXMudG90YWxEdXJhdGlvbigpIHx8ICF0VGltZSAmJiBwcmV2VGltZSkgaWYgKHByZXZTdGFydCA9PT0gdGhpcy5fc3RhcnQgfHwgTWF0aC5hYnModGltZVNjYWxlKSAhPT0gTWF0aC5hYnModGhpcy5fdHMpKSBpZiAoIXRoaXMuX2xvY2spIHtcbiAgICAgICAgLy8gcmVtZW1iZXIsIGEgY2hpbGQncyBjYWxsYmFjayBtYXkgYWx0ZXIgdGhpcyB0aW1lbGluZSdzIHBsYXloZWFkIG9yIHRpbWVTY2FsZSB3aGljaCBpcyB3aHkgd2UgbmVlZCB0byBhZGQgc29tZSBvZiB0aGVzZSBjaGVja3MuXG4gICAgICAgICh0b3RhbFRpbWUgfHwgIWR1cikgJiYgKHRUaW1lID09PSB0RHVyICYmIHRoaXMuX3RzID4gMCB8fCAhdFRpbWUgJiYgdGhpcy5fdHMgPCAwKSAmJiBfcmVtb3ZlRnJvbVBhcmVudCh0aGlzLCAxKTsgLy8gZG9uJ3QgcmVtb3ZlIGlmIHRoZSB0aW1lbGluZSBpcyByZXZlcnNlZCBhbmQgdGhlIHBsYXloZWFkIGlzbid0IGF0IDAsIG90aGVyd2lzZSB0bC5wcm9ncmVzcygxKS5yZXZlcnNlKCkgd29uJ3Qgd29yay4gT25seSByZW1vdmUgaWYgdGhlIHBsYXloZWFkIGlzIGF0IHRoZSBlbmQgYW5kIHRpbWVTY2FsZSBpcyBwb3NpdGl2ZSwgb3IgaWYgdGhlIHBsYXloZWFkIGlzIGF0IDAgYW5kIHRoZSB0aW1lU2NhbGUgaXMgbmVnYXRpdmUuXG5cbiAgICAgICAgaWYgKCFzdXBwcmVzc0V2ZW50cyAmJiAhKHRvdGFsVGltZSA8IDAgJiYgIXByZXZUaW1lKSAmJiAodFRpbWUgfHwgcHJldlRpbWUgfHwgIXREdXIpKSB7XG4gICAgICAgICAgX2NhbGxiYWNrKHRoaXMsIHRUaW1lID09PSB0RHVyICYmIHRvdGFsVGltZSA+PSAwID8gXCJvbkNvbXBsZXRlXCIgOiBcIm9uUmV2ZXJzZUNvbXBsZXRlXCIsIHRydWUpO1xuXG4gICAgICAgICAgdGhpcy5fcHJvbSAmJiAhKHRUaW1lIDwgdER1ciAmJiB0aGlzLnRpbWVTY2FsZSgpID4gMCkgJiYgdGhpcy5fcHJvbSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvMi5hZGQgPSBmdW5jdGlvbiBhZGQoY2hpbGQsIHBvc2l0aW9uKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICBfaXNOdW1iZXIocG9zaXRpb24pIHx8IChwb3NpdGlvbiA9IF9wYXJzZVBvc2l0aW9uKHRoaXMsIHBvc2l0aW9uLCBjaGlsZCkpO1xuXG4gICAgaWYgKCEoY2hpbGQgaW5zdGFuY2VvZiBBbmltYXRpb24pKSB7XG4gICAgICBpZiAoX2lzQXJyYXkoY2hpbGQpKSB7XG4gICAgICAgIGNoaWxkLmZvckVhY2goZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgIHJldHVybiBfdGhpczIuYWRkKG9iaiwgcG9zaXRpb24pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIGlmIChfaXNTdHJpbmcoY2hpbGQpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZExhYmVsKGNoaWxkLCBwb3NpdGlvbik7XG4gICAgICB9XG5cbiAgICAgIGlmIChfaXNGdW5jdGlvbihjaGlsZCkpIHtcbiAgICAgICAgY2hpbGQgPSBUd2Vlbi5kZWxheWVkQ2FsbCgwLCBjaGlsZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcyAhPT0gY2hpbGQgPyBfYWRkVG9UaW1lbGluZSh0aGlzLCBjaGlsZCwgcG9zaXRpb24pIDogdGhpczsgLy9kb24ndCBhbGxvdyBhIHRpbWVsaW5lIHRvIGJlIGFkZGVkIHRvIGl0c2VsZiBhcyBhIGNoaWxkIVxuICB9O1xuXG4gIF9wcm90bzIuZ2V0Q2hpbGRyZW4gPSBmdW5jdGlvbiBnZXRDaGlsZHJlbihuZXN0ZWQsIHR3ZWVucywgdGltZWxpbmVzLCBpZ25vcmVCZWZvcmVUaW1lKSB7XG4gICAgaWYgKG5lc3RlZCA9PT0gdm9pZCAwKSB7XG4gICAgICBuZXN0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0d2VlbnMgPT09IHZvaWQgMCkge1xuICAgICAgdHdlZW5zID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGltZWxpbmVzID09PSB2b2lkIDApIHtcbiAgICAgIHRpbWVsaW5lcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGlnbm9yZUJlZm9yZVRpbWUgPT09IHZvaWQgMCkge1xuICAgICAgaWdub3JlQmVmb3JlVGltZSA9IC1fYmlnTnVtO1xuICAgIH1cblxuICAgIHZhciBhID0gW10sXG4gICAgICAgIGNoaWxkID0gdGhpcy5fZmlyc3Q7XG5cbiAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgIGlmIChjaGlsZC5fc3RhcnQgPj0gaWdub3JlQmVmb3JlVGltZSkge1xuICAgICAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBUd2Vlbikge1xuICAgICAgICAgIHR3ZWVucyAmJiBhLnB1c2goY2hpbGQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRpbWVsaW5lcyAmJiBhLnB1c2goY2hpbGQpO1xuICAgICAgICAgIG5lc3RlZCAmJiBhLnB1c2guYXBwbHkoYSwgY2hpbGQuZ2V0Q2hpbGRyZW4odHJ1ZSwgdHdlZW5zLCB0aW1lbGluZXMpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjaGlsZCA9IGNoaWxkLl9uZXh0O1xuICAgIH1cblxuICAgIHJldHVybiBhO1xuICB9O1xuXG4gIF9wcm90bzIuZ2V0QnlJZCA9IGZ1bmN0aW9uIGdldEJ5SWQoaWQpIHtcbiAgICB2YXIgYW5pbWF0aW9ucyA9IHRoaXMuZ2V0Q2hpbGRyZW4oMSwgMSwgMSksXG4gICAgICAgIGkgPSBhbmltYXRpb25zLmxlbmd0aDtcblxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIGlmIChhbmltYXRpb25zW2ldLnZhcnMuaWQgPT09IGlkKSB7XG4gICAgICAgIHJldHVybiBhbmltYXRpb25zW2ldO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBfcHJvdG8yLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZShjaGlsZCkge1xuICAgIGlmIChfaXNTdHJpbmcoY2hpbGQpKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW1vdmVMYWJlbChjaGlsZCk7XG4gICAgfVxuXG4gICAgaWYgKF9pc0Z1bmN0aW9uKGNoaWxkKSkge1xuICAgICAgcmV0dXJuIHRoaXMua2lsbFR3ZWVuc09mKGNoaWxkKTtcbiAgICB9XG5cbiAgICBfcmVtb3ZlTGlua2VkTGlzdEl0ZW0odGhpcywgY2hpbGQpO1xuXG4gICAgaWYgKGNoaWxkID09PSB0aGlzLl9yZWNlbnQpIHtcbiAgICAgIHRoaXMuX3JlY2VudCA9IHRoaXMuX2xhc3Q7XG4gICAgfVxuXG4gICAgcmV0dXJuIF91bmNhY2hlKHRoaXMpO1xuICB9O1xuXG4gIF9wcm90bzIudG90YWxUaW1lID0gZnVuY3Rpb24gdG90YWxUaW1lKF90b3RhbFRpbWUyLCBzdXBwcmVzc0V2ZW50cykge1xuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3RUaW1lO1xuICAgIH1cblxuICAgIHRoaXMuX2ZvcmNpbmcgPSAxO1xuXG4gICAgaWYgKCF0aGlzLl9kcCAmJiB0aGlzLl90cykge1xuICAgICAgLy9zcGVjaWFsIGNhc2UgZm9yIHRoZSBnbG9iYWwgdGltZWxpbmUgKG9yIGFueSBvdGhlciB0aGF0IGhhcyBubyBwYXJlbnQgb3IgZGV0YWNoZWQgcGFyZW50KS5cbiAgICAgIHRoaXMuX3N0YXJ0ID0gX3JvdW5kUHJlY2lzZShfdGlja2VyLnRpbWUgLSAodGhpcy5fdHMgPiAwID8gX3RvdGFsVGltZTIgLyB0aGlzLl90cyA6ICh0aGlzLnRvdGFsRHVyYXRpb24oKSAtIF90b3RhbFRpbWUyKSAvIC10aGlzLl90cykpO1xuICAgIH1cblxuICAgIF9BbmltYXRpb24ucHJvdG90eXBlLnRvdGFsVGltZS5jYWxsKHRoaXMsIF90b3RhbFRpbWUyLCBzdXBwcmVzc0V2ZW50cyk7XG5cbiAgICB0aGlzLl9mb3JjaW5nID0gMDtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8yLmFkZExhYmVsID0gZnVuY3Rpb24gYWRkTGFiZWwobGFiZWwsIHBvc2l0aW9uKSB7XG4gICAgdGhpcy5sYWJlbHNbbGFiZWxdID0gX3BhcnNlUG9zaXRpb24odGhpcywgcG9zaXRpb24pO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90bzIucmVtb3ZlTGFiZWwgPSBmdW5jdGlvbiByZW1vdmVMYWJlbChsYWJlbCkge1xuICAgIGRlbGV0ZSB0aGlzLmxhYmVsc1tsYWJlbF07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvMi5hZGRQYXVzZSA9IGZ1bmN0aW9uIGFkZFBhdXNlKHBvc2l0aW9uLCBjYWxsYmFjaywgcGFyYW1zKSB7XG4gICAgdmFyIHQgPSBUd2Vlbi5kZWxheWVkQ2FsbCgwLCBjYWxsYmFjayB8fCBfZW1wdHlGdW5jLCBwYXJhbXMpO1xuICAgIHQuZGF0YSA9IFwiaXNQYXVzZVwiO1xuICAgIHRoaXMuX2hhc1BhdXNlID0gMTtcbiAgICByZXR1cm4gX2FkZFRvVGltZWxpbmUodGhpcywgdCwgX3BhcnNlUG9zaXRpb24odGhpcywgcG9zaXRpb24pKTtcbiAgfTtcblxuICBfcHJvdG8yLnJlbW92ZVBhdXNlID0gZnVuY3Rpb24gcmVtb3ZlUGF1c2UocG9zaXRpb24pIHtcbiAgICB2YXIgY2hpbGQgPSB0aGlzLl9maXJzdDtcbiAgICBwb3NpdGlvbiA9IF9wYXJzZVBvc2l0aW9uKHRoaXMsIHBvc2l0aW9uKTtcblxuICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgaWYgKGNoaWxkLl9zdGFydCA9PT0gcG9zaXRpb24gJiYgY2hpbGQuZGF0YSA9PT0gXCJpc1BhdXNlXCIpIHtcbiAgICAgICAgX3JlbW92ZUZyb21QYXJlbnQoY2hpbGQpO1xuICAgICAgfVxuXG4gICAgICBjaGlsZCA9IGNoaWxkLl9uZXh0O1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8yLmtpbGxUd2VlbnNPZiA9IGZ1bmN0aW9uIGtpbGxUd2VlbnNPZih0YXJnZXRzLCBwcm9wcywgb25seUFjdGl2ZSkge1xuICAgIHZhciB0d2VlbnMgPSB0aGlzLmdldFR3ZWVuc09mKHRhcmdldHMsIG9ubHlBY3RpdmUpLFxuICAgICAgICBpID0gdHdlZW5zLmxlbmd0aDtcblxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIF9vdmVyd3JpdGluZ1R3ZWVuICE9PSB0d2VlbnNbaV0gJiYgdHdlZW5zW2ldLmtpbGwodGFyZ2V0cywgcHJvcHMpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90bzIuZ2V0VHdlZW5zT2YgPSBmdW5jdGlvbiBnZXRUd2VlbnNPZih0YXJnZXRzLCBvbmx5QWN0aXZlKSB7XG4gICAgdmFyIGEgPSBbXSxcbiAgICAgICAgcGFyc2VkVGFyZ2V0cyA9IHRvQXJyYXkodGFyZ2V0cyksXG4gICAgICAgIGNoaWxkID0gdGhpcy5fZmlyc3QsXG4gICAgICAgIGlzR2xvYmFsVGltZSA9IF9pc051bWJlcihvbmx5QWN0aXZlKSxcbiAgICAgICAgLy8gYSBudW1iZXIgaXMgaW50ZXJwcmV0ZWQgYXMgYSBnbG9iYWwgdGltZS4gSWYgdGhlIGFuaW1hdGlvbiBzcGFuc1xuICAgIGNoaWxkcmVuO1xuXG4gICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBUd2Vlbikge1xuICAgICAgICBpZiAoX2FycmF5Q29udGFpbnNBbnkoY2hpbGQuX3RhcmdldHMsIHBhcnNlZFRhcmdldHMpICYmIChpc0dsb2JhbFRpbWUgPyAoIV9vdmVyd3JpdGluZ1R3ZWVuIHx8IGNoaWxkLl9pbml0dGVkICYmIGNoaWxkLl90cykgJiYgY2hpbGQuZ2xvYmFsVGltZSgwKSA8PSBvbmx5QWN0aXZlICYmIGNoaWxkLmdsb2JhbFRpbWUoY2hpbGQudG90YWxEdXJhdGlvbigpKSA+IG9ubHlBY3RpdmUgOiAhb25seUFjdGl2ZSB8fCBjaGlsZC5pc0FjdGl2ZSgpKSkge1xuICAgICAgICAgIC8vIG5vdGU6IGlmIHRoaXMgaXMgZm9yIG92ZXJ3cml0aW5nLCBpdCBzaG91bGQgb25seSBiZSBmb3IgdHdlZW5zIHRoYXQgYXJlbid0IHBhdXNlZCBhbmQgYXJlIGluaXR0ZWQuXG4gICAgICAgICAgYS5wdXNoKGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICgoY2hpbGRyZW4gPSBjaGlsZC5nZXRUd2VlbnNPZihwYXJzZWRUYXJnZXRzLCBvbmx5QWN0aXZlKSkubGVuZ3RoKSB7XG4gICAgICAgIGEucHVzaC5hcHBseShhLCBjaGlsZHJlbik7XG4gICAgICB9XG5cbiAgICAgIGNoaWxkID0gY2hpbGQuX25leHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGE7XG4gIH0gLy8gcG90ZW50aWFsIGZ1dHVyZSBmZWF0dXJlIC0gdGFyZ2V0cygpIG9uIHRpbWVsaW5lc1xuICAvLyB0YXJnZXRzKCkge1xuICAvLyBcdGxldCByZXN1bHQgPSBbXTtcbiAgLy8gXHR0aGlzLmdldENoaWxkcmVuKHRydWUsIHRydWUsIGZhbHNlKS5mb3JFYWNoKHQgPT4gcmVzdWx0LnB1c2goLi4udC50YXJnZXRzKCkpKTtcbiAgLy8gXHRyZXR1cm4gcmVzdWx0LmZpbHRlcigodiwgaSkgPT4gcmVzdWx0LmluZGV4T2YodikgPT09IGkpO1xuICAvLyB9XG4gIDtcblxuICBfcHJvdG8yLnR3ZWVuVG8gPSBmdW5jdGlvbiB0d2VlblRvKHBvc2l0aW9uLCB2YXJzKSB7XG4gICAgdmFycyA9IHZhcnMgfHwge307XG5cbiAgICB2YXIgdGwgPSB0aGlzLFxuICAgICAgICBlbmRUaW1lID0gX3BhcnNlUG9zaXRpb24odGwsIHBvc2l0aW9uKSxcbiAgICAgICAgX3ZhcnMgPSB2YXJzLFxuICAgICAgICBzdGFydEF0ID0gX3ZhcnMuc3RhcnRBdCxcbiAgICAgICAgX29uU3RhcnQgPSBfdmFycy5vblN0YXJ0LFxuICAgICAgICBvblN0YXJ0UGFyYW1zID0gX3ZhcnMub25TdGFydFBhcmFtcyxcbiAgICAgICAgaW1tZWRpYXRlUmVuZGVyID0gX3ZhcnMuaW1tZWRpYXRlUmVuZGVyLFxuICAgICAgICBpbml0dGVkLFxuICAgICAgICB0d2VlbiA9IFR3ZWVuLnRvKHRsLCBfc2V0RGVmYXVsdHMoe1xuICAgICAgZWFzZTogdmFycy5lYXNlIHx8IFwibm9uZVwiLFxuICAgICAgbGF6eTogZmFsc2UsXG4gICAgICBpbW1lZGlhdGVSZW5kZXI6IGZhbHNlLFxuICAgICAgdGltZTogZW5kVGltZSxcbiAgICAgIG92ZXJ3cml0ZTogXCJhdXRvXCIsXG4gICAgICBkdXJhdGlvbjogdmFycy5kdXJhdGlvbiB8fCBNYXRoLmFicygoZW5kVGltZSAtIChzdGFydEF0ICYmIFwidGltZVwiIGluIHN0YXJ0QXQgPyBzdGFydEF0LnRpbWUgOiB0bC5fdGltZSkpIC8gdGwudGltZVNjYWxlKCkpIHx8IF90aW55TnVtLFxuICAgICAgb25TdGFydDogZnVuY3Rpb24gb25TdGFydCgpIHtcbiAgICAgICAgdGwucGF1c2UoKTtcblxuICAgICAgICBpZiAoIWluaXR0ZWQpIHtcbiAgICAgICAgICB2YXIgZHVyYXRpb24gPSB2YXJzLmR1cmF0aW9uIHx8IE1hdGguYWJzKChlbmRUaW1lIC0gKHN0YXJ0QXQgJiYgXCJ0aW1lXCIgaW4gc3RhcnRBdCA/IHN0YXJ0QXQudGltZSA6IHRsLl90aW1lKSkgLyB0bC50aW1lU2NhbGUoKSk7XG4gICAgICAgICAgdHdlZW4uX2R1ciAhPT0gZHVyYXRpb24gJiYgX3NldER1cmF0aW9uKHR3ZWVuLCBkdXJhdGlvbiwgMCwgMSkucmVuZGVyKHR3ZWVuLl90aW1lLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICBpbml0dGVkID0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9vblN0YXJ0ICYmIF9vblN0YXJ0LmFwcGx5KHR3ZWVuLCBvblN0YXJ0UGFyYW1zIHx8IFtdKTsgLy9pbiBjYXNlIHRoZSB1c2VyIGhhZCBhbiBvblN0YXJ0IGluIHRoZSB2YXJzIC0gd2UgZG9uJ3Qgd2FudCB0byBvdmVyd3JpdGUgaXQuXG4gICAgICB9XG4gICAgfSwgdmFycykpO1xuXG4gICAgcmV0dXJuIGltbWVkaWF0ZVJlbmRlciA/IHR3ZWVuLnJlbmRlcigwKSA6IHR3ZWVuO1xuICB9O1xuXG4gIF9wcm90bzIudHdlZW5Gcm9tVG8gPSBmdW5jdGlvbiB0d2VlbkZyb21Ubyhmcm9tUG9zaXRpb24sIHRvUG9zaXRpb24sIHZhcnMpIHtcbiAgICByZXR1cm4gdGhpcy50d2VlblRvKHRvUG9zaXRpb24sIF9zZXREZWZhdWx0cyh7XG4gICAgICBzdGFydEF0OiB7XG4gICAgICAgIHRpbWU6IF9wYXJzZVBvc2l0aW9uKHRoaXMsIGZyb21Qb3NpdGlvbilcbiAgICAgIH1cbiAgICB9LCB2YXJzKSk7XG4gIH07XG5cbiAgX3Byb3RvMi5yZWNlbnQgPSBmdW5jdGlvbiByZWNlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlY2VudDtcbiAgfTtcblxuICBfcHJvdG8yLm5leHRMYWJlbCA9IGZ1bmN0aW9uIG5leHRMYWJlbChhZnRlclRpbWUpIHtcbiAgICBpZiAoYWZ0ZXJUaW1lID09PSB2b2lkIDApIHtcbiAgICAgIGFmdGVyVGltZSA9IHRoaXMuX3RpbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9nZXRMYWJlbEluRGlyZWN0aW9uKHRoaXMsIF9wYXJzZVBvc2l0aW9uKHRoaXMsIGFmdGVyVGltZSkpO1xuICB9O1xuXG4gIF9wcm90bzIucHJldmlvdXNMYWJlbCA9IGZ1bmN0aW9uIHByZXZpb3VzTGFiZWwoYmVmb3JlVGltZSkge1xuICAgIGlmIChiZWZvcmVUaW1lID09PSB2b2lkIDApIHtcbiAgICAgIGJlZm9yZVRpbWUgPSB0aGlzLl90aW1lO1xuICAgIH1cblxuICAgIHJldHVybiBfZ2V0TGFiZWxJbkRpcmVjdGlvbih0aGlzLCBfcGFyc2VQb3NpdGlvbih0aGlzLCBiZWZvcmVUaW1lKSwgMSk7XG4gIH07XG5cbiAgX3Byb3RvMi5jdXJyZW50TGFiZWwgPSBmdW5jdGlvbiBjdXJyZW50TGFiZWwodmFsdWUpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IHRoaXMuc2Vlayh2YWx1ZSwgdHJ1ZSkgOiB0aGlzLnByZXZpb3VzTGFiZWwodGhpcy5fdGltZSArIF90aW55TnVtKTtcbiAgfTtcblxuICBfcHJvdG8yLnNoaWZ0Q2hpbGRyZW4gPSBmdW5jdGlvbiBzaGlmdENoaWxkcmVuKGFtb3VudCwgYWRqdXN0TGFiZWxzLCBpZ25vcmVCZWZvcmVUaW1lKSB7XG4gICAgaWYgKGlnbm9yZUJlZm9yZVRpbWUgPT09IHZvaWQgMCkge1xuICAgICAgaWdub3JlQmVmb3JlVGltZSA9IDA7XG4gICAgfVxuXG4gICAgdmFyIGNoaWxkID0gdGhpcy5fZmlyc3QsXG4gICAgICAgIGxhYmVscyA9IHRoaXMubGFiZWxzLFxuICAgICAgICBwO1xuXG4gICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICBpZiAoY2hpbGQuX3N0YXJ0ID49IGlnbm9yZUJlZm9yZVRpbWUpIHtcbiAgICAgICAgY2hpbGQuX3N0YXJ0ICs9IGFtb3VudDtcbiAgICAgICAgY2hpbGQuX2VuZCArPSBhbW91bnQ7XG4gICAgICB9XG5cbiAgICAgIGNoaWxkID0gY2hpbGQuX25leHQ7XG4gICAgfVxuXG4gICAgaWYgKGFkanVzdExhYmVscykge1xuICAgICAgZm9yIChwIGluIGxhYmVscykge1xuICAgICAgICBpZiAobGFiZWxzW3BdID49IGlnbm9yZUJlZm9yZVRpbWUpIHtcbiAgICAgICAgICBsYWJlbHNbcF0gKz0gYW1vdW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIF91bmNhY2hlKHRoaXMpO1xuICB9O1xuXG4gIF9wcm90bzIuaW52YWxpZGF0ZSA9IGZ1bmN0aW9uIGludmFsaWRhdGUoKSB7XG4gICAgdmFyIGNoaWxkID0gdGhpcy5fZmlyc3Q7XG4gICAgdGhpcy5fbG9jayA9IDA7XG5cbiAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgIGNoaWxkLmludmFsaWRhdGUoKTtcbiAgICAgIGNoaWxkID0gY2hpbGQuX25leHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9BbmltYXRpb24ucHJvdG90eXBlLmludmFsaWRhdGUuY2FsbCh0aGlzKTtcbiAgfTtcblxuICBfcHJvdG8yLmNsZWFyID0gZnVuY3Rpb24gY2xlYXIoaW5jbHVkZUxhYmVscykge1xuICAgIGlmIChpbmNsdWRlTGFiZWxzID09PSB2b2lkIDApIHtcbiAgICAgIGluY2x1ZGVMYWJlbHMgPSB0cnVlO1xuICAgIH1cblxuICAgIHZhciBjaGlsZCA9IHRoaXMuX2ZpcnN0LFxuICAgICAgICBuZXh0O1xuXG4gICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICBuZXh0ID0gY2hpbGQuX25leHQ7XG4gICAgICB0aGlzLnJlbW92ZShjaGlsZCk7XG4gICAgICBjaGlsZCA9IG5leHQ7XG4gICAgfVxuXG4gICAgdGhpcy5fZHAgJiYgKHRoaXMuX3RpbWUgPSB0aGlzLl90VGltZSA9IHRoaXMuX3BUaW1lID0gMCk7XG4gICAgaW5jbHVkZUxhYmVscyAmJiAodGhpcy5sYWJlbHMgPSB7fSk7XG4gICAgcmV0dXJuIF91bmNhY2hlKHRoaXMpO1xuICB9O1xuXG4gIF9wcm90bzIudG90YWxEdXJhdGlvbiA9IGZ1bmN0aW9uIHRvdGFsRHVyYXRpb24odmFsdWUpIHtcbiAgICB2YXIgbWF4ID0gMCxcbiAgICAgICAgc2VsZiA9IHRoaXMsXG4gICAgICAgIGNoaWxkID0gc2VsZi5fbGFzdCxcbiAgICAgICAgcHJldlN0YXJ0ID0gX2JpZ051bSxcbiAgICAgICAgcHJldixcbiAgICAgICAgc3RhcnQsXG4gICAgICAgIHBhcmVudDtcblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gc2VsZi50aW1lU2NhbGUoKHNlbGYuX3JlcGVhdCA8IDAgPyBzZWxmLmR1cmF0aW9uKCkgOiBzZWxmLnRvdGFsRHVyYXRpb24oKSkgLyAoc2VsZi5yZXZlcnNlZCgpID8gLXZhbHVlIDogdmFsdWUpKTtcbiAgICB9XG5cbiAgICBpZiAoc2VsZi5fZGlydHkpIHtcbiAgICAgIHBhcmVudCA9IHNlbGYucGFyZW50O1xuXG4gICAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgICAgcHJldiA9IGNoaWxkLl9wcmV2OyAvL3JlY29yZCBpdCBoZXJlIGluIGNhc2UgdGhlIHR3ZWVuIGNoYW5nZXMgcG9zaXRpb24gaW4gdGhlIHNlcXVlbmNlLi4uXG5cbiAgICAgICAgY2hpbGQuX2RpcnR5ICYmIGNoaWxkLnRvdGFsRHVyYXRpb24oKTsgLy9jb3VsZCBjaGFuZ2UgdGhlIHR3ZWVuLl9zdGFydFRpbWUsIHNvIG1ha2Ugc3VyZSB0aGUgYW5pbWF0aW9uJ3MgY2FjaGUgaXMgY2xlYW4gYmVmb3JlIGFuYWx5emluZyBpdC5cblxuICAgICAgICBzdGFydCA9IGNoaWxkLl9zdGFydDtcblxuICAgICAgICBpZiAoc3RhcnQgPiBwcmV2U3RhcnQgJiYgc2VsZi5fc29ydCAmJiBjaGlsZC5fdHMgJiYgIXNlbGYuX2xvY2spIHtcbiAgICAgICAgICAvL2luIGNhc2Ugb25lIG9mIHRoZSB0d2VlbnMgc2hpZnRlZCBvdXQgb2Ygb3JkZXIsIGl0IG5lZWRzIHRvIGJlIHJlLWluc2VydGVkIGludG8gdGhlIGNvcnJlY3QgcG9zaXRpb24gaW4gdGhlIHNlcXVlbmNlXG4gICAgICAgICAgc2VsZi5fbG9jayA9IDE7IC8vcHJldmVudCBlbmRsZXNzIHJlY3Vyc2l2ZSBjYWxscyAtIHRoZXJlIGFyZSBtZXRob2RzIHRoYXQgZ2V0IHRyaWdnZXJlZCB0aGF0IGNoZWNrIGR1cmF0aW9uL3RvdGFsRHVyYXRpb24gd2hlbiB3ZSBhZGQoKS5cblxuICAgICAgICAgIF9hZGRUb1RpbWVsaW5lKHNlbGYsIGNoaWxkLCBzdGFydCAtIGNoaWxkLl9kZWxheSwgMSkuX2xvY2sgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByZXZTdGFydCA9IHN0YXJ0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0YXJ0IDwgMCAmJiBjaGlsZC5fdHMpIHtcbiAgICAgICAgICAvL2NoaWxkcmVuIGFyZW4ndCBhbGxvd2VkIHRvIGhhdmUgbmVnYXRpdmUgc3RhcnRUaW1lcyB1bmxlc3Mgc21vb3RoQ2hpbGRUaW1pbmcgaXMgdHJ1ZSwgc28gYWRqdXN0IGhlcmUgaWYgb25lIGlzIGZvdW5kLlxuICAgICAgICAgIG1heCAtPSBzdGFydDtcblxuICAgICAgICAgIGlmICghcGFyZW50ICYmICFzZWxmLl9kcCB8fCBwYXJlbnQgJiYgcGFyZW50LnNtb290aENoaWxkVGltaW5nKSB7XG4gICAgICAgICAgICBzZWxmLl9zdGFydCArPSBzdGFydCAvIHNlbGYuX3RzO1xuICAgICAgICAgICAgc2VsZi5fdGltZSAtPSBzdGFydDtcbiAgICAgICAgICAgIHNlbGYuX3RUaW1lIC09IHN0YXJ0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHNlbGYuc2hpZnRDaGlsZHJlbigtc3RhcnQsIGZhbHNlLCAtMWU5OTkpO1xuICAgICAgICAgIHByZXZTdGFydCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBjaGlsZC5fZW5kID4gbWF4ICYmIGNoaWxkLl90cyAmJiAobWF4ID0gY2hpbGQuX2VuZCk7XG4gICAgICAgIGNoaWxkID0gcHJldjtcbiAgICAgIH1cblxuICAgICAgX3NldER1cmF0aW9uKHNlbGYsIHNlbGYgPT09IF9nbG9iYWxUaW1lbGluZSAmJiBzZWxmLl90aW1lID4gbWF4ID8gc2VsZi5fdGltZSA6IG1heCwgMSwgMSk7XG5cbiAgICAgIHNlbGYuX2RpcnR5ID0gMDtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZi5fdER1cjtcbiAgfTtcblxuICBUaW1lbGluZS51cGRhdGVSb290ID0gZnVuY3Rpb24gdXBkYXRlUm9vdCh0aW1lKSB7XG4gICAgaWYgKF9nbG9iYWxUaW1lbGluZS5fdHMpIHtcbiAgICAgIF9sYXp5U2FmZVJlbmRlcihfZ2xvYmFsVGltZWxpbmUsIF9wYXJlbnRUb0NoaWxkVG90YWxUaW1lKHRpbWUsIF9nbG9iYWxUaW1lbGluZSkpO1xuXG4gICAgICBfbGFzdFJlbmRlcmVkRnJhbWUgPSBfdGlja2VyLmZyYW1lO1xuICAgIH1cblxuICAgIGlmIChfdGlja2VyLmZyYW1lID49IF9uZXh0R0NGcmFtZSkge1xuICAgICAgX25leHRHQ0ZyYW1lICs9IF9jb25maWcuYXV0b1NsZWVwIHx8IDEyMDtcbiAgICAgIHZhciBjaGlsZCA9IF9nbG9iYWxUaW1lbGluZS5fZmlyc3Q7XG4gICAgICBpZiAoIWNoaWxkIHx8ICFjaGlsZC5fdHMpIGlmIChfY29uZmlnLmF1dG9TbGVlcCAmJiBfdGlja2VyLl9saXN0ZW5lcnMubGVuZ3RoIDwgMikge1xuICAgICAgICB3aGlsZSAoY2hpbGQgJiYgIWNoaWxkLl90cykge1xuICAgICAgICAgIGNoaWxkID0gY2hpbGQuX25leHQ7XG4gICAgICAgIH1cblxuICAgICAgICBjaGlsZCB8fCBfdGlja2VyLnNsZWVwKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBUaW1lbGluZTtcbn0oQW5pbWF0aW9uKTtcblxuX3NldERlZmF1bHRzKFRpbWVsaW5lLnByb3RvdHlwZSwge1xuICBfbG9jazogMCxcbiAgX2hhc1BhdXNlOiAwLFxuICBfZm9yY2luZzogMFxufSk7XG5cbnZhciBfYWRkQ29tcGxleFN0cmluZ1Byb3BUd2VlbiA9IGZ1bmN0aW9uIF9hZGRDb21wbGV4U3RyaW5nUHJvcFR3ZWVuKHRhcmdldCwgcHJvcCwgc3RhcnQsIGVuZCwgc2V0dGVyLCBzdHJpbmdGaWx0ZXIsIGZ1bmNQYXJhbSkge1xuICAvL25vdGU6IHdlIGNhbGwgX2FkZENvbXBsZXhTdHJpbmdQcm9wVHdlZW4uY2FsbCh0d2Vlbkluc3RhbmNlLi4uKSB0byBlbnN1cmUgdGhhdCBpdCdzIHNjb3BlZCBwcm9wZXJseS4gV2UgbWF5IGNhbGwgaXQgZnJvbSB3aXRoaW4gYSBwbHVnaW4gdG9vLCB0aHVzIFwidGhpc1wiIHdvdWxkIHJlZmVyIHRvIHRoZSBwbHVnaW4uXG4gIHZhciBwdCA9IG5ldyBQcm9wVHdlZW4odGhpcy5fcHQsIHRhcmdldCwgcHJvcCwgMCwgMSwgX3JlbmRlckNvbXBsZXhTdHJpbmcsIG51bGwsIHNldHRlciksXG4gICAgICBpbmRleCA9IDAsXG4gICAgICBtYXRjaEluZGV4ID0gMCxcbiAgICAgIHJlc3VsdCxcbiAgICAgIHN0YXJ0TnVtcyxcbiAgICAgIGNvbG9yLFxuICAgICAgZW5kTnVtLFxuICAgICAgY2h1bmssXG4gICAgICBzdGFydE51bSxcbiAgICAgIGhhc1JhbmRvbSxcbiAgICAgIGE7XG4gIHB0LmIgPSBzdGFydDtcbiAgcHQuZSA9IGVuZDtcbiAgc3RhcnQgKz0gXCJcIjsgLy9lbnN1cmUgdmFsdWVzIGFyZSBzdHJpbmdzXG5cbiAgZW5kICs9IFwiXCI7XG5cbiAgaWYgKGhhc1JhbmRvbSA9IH5lbmQuaW5kZXhPZihcInJhbmRvbShcIikpIHtcbiAgICBlbmQgPSBfcmVwbGFjZVJhbmRvbShlbmQpO1xuICB9XG5cbiAgaWYgKHN0cmluZ0ZpbHRlcikge1xuICAgIGEgPSBbc3RhcnQsIGVuZF07XG4gICAgc3RyaW5nRmlsdGVyKGEsIHRhcmdldCwgcHJvcCk7IC8vcGFzcyBhbiBhcnJheSB3aXRoIHRoZSBzdGFydGluZyBhbmQgZW5kaW5nIHZhbHVlcyBhbmQgbGV0IHRoZSBmaWx0ZXIgZG8gd2hhdGV2ZXIgaXQgbmVlZHMgdG8gdGhlIHZhbHVlcy5cblxuICAgIHN0YXJ0ID0gYVswXTtcbiAgICBlbmQgPSBhWzFdO1xuICB9XG5cbiAgc3RhcnROdW1zID0gc3RhcnQubWF0Y2goX2NvbXBsZXhTdHJpbmdOdW1FeHApIHx8IFtdO1xuXG4gIHdoaWxlIChyZXN1bHQgPSBfY29tcGxleFN0cmluZ051bUV4cC5leGVjKGVuZCkpIHtcbiAgICBlbmROdW0gPSByZXN1bHRbMF07XG4gICAgY2h1bmsgPSBlbmQuc3Vic3RyaW5nKGluZGV4LCByZXN1bHQuaW5kZXgpO1xuXG4gICAgaWYgKGNvbG9yKSB7XG4gICAgICBjb2xvciA9IChjb2xvciArIDEpICUgNTtcbiAgICB9IGVsc2UgaWYgKGNodW5rLnN1YnN0cigtNSkgPT09IFwicmdiYShcIikge1xuICAgICAgY29sb3IgPSAxO1xuICAgIH1cblxuICAgIGlmIChlbmROdW0gIT09IHN0YXJ0TnVtc1ttYXRjaEluZGV4KytdKSB7XG4gICAgICBzdGFydE51bSA9IHBhcnNlRmxvYXQoc3RhcnROdW1zW21hdGNoSW5kZXggLSAxXSkgfHwgMDsgLy90aGVzZSBuZXN0ZWQgUHJvcFR3ZWVucyBhcmUgaGFuZGxlZCBpbiBhIHNwZWNpYWwgd2F5IC0gd2UnbGwgbmV2ZXIgYWN0dWFsbHkgY2FsbCBhIHJlbmRlciBvciBzZXR0ZXIgbWV0aG9kIG9uIHRoZW0uIFdlJ2xsIGp1c3QgbG9vcCB0aHJvdWdoIHRoZW0gaW4gdGhlIHBhcmVudCBjb21wbGV4IHN0cmluZyBQcm9wVHdlZW4ncyByZW5kZXIgbWV0aG9kLlxuXG4gICAgICBwdC5fcHQgPSB7XG4gICAgICAgIF9uZXh0OiBwdC5fcHQsXG4gICAgICAgIHA6IGNodW5rIHx8IG1hdGNoSW5kZXggPT09IDEgPyBjaHVuayA6IFwiLFwiLFxuICAgICAgICAvL25vdGU6IFNWRyBzcGVjIGFsbG93cyBvbWlzc2lvbiBvZiBjb21tYS9zcGFjZSB3aGVuIGEgbmVnYXRpdmUgc2lnbiBpcyB3ZWRnZWQgYmV0d2VlbiB0d28gbnVtYmVycywgbGlrZSAyLjUtNS4zIGluc3RlYWQgb2YgMi41LC01LjMgYnV0IHdoZW4gdHdlZW5pbmcsIHRoZSBuZWdhdGl2ZSB2YWx1ZSBtYXkgc3dpdGNoIHRvIHBvc2l0aXZlLCBzbyB3ZSBpbnNlcnQgdGhlIGNvbW1hIGp1c3QgaW4gY2FzZS5cbiAgICAgICAgczogc3RhcnROdW0sXG4gICAgICAgIGM6IGVuZE51bS5jaGFyQXQoMSkgPT09IFwiPVwiID8gX3BhcnNlUmVsYXRpdmUoc3RhcnROdW0sIGVuZE51bSkgLSBzdGFydE51bSA6IHBhcnNlRmxvYXQoZW5kTnVtKSAtIHN0YXJ0TnVtLFxuICAgICAgICBtOiBjb2xvciAmJiBjb2xvciA8IDQgPyBNYXRoLnJvdW5kIDogMFxuICAgICAgfTtcbiAgICAgIGluZGV4ID0gX2NvbXBsZXhTdHJpbmdOdW1FeHAubGFzdEluZGV4O1xuICAgIH1cbiAgfVxuXG4gIHB0LmMgPSBpbmRleCA8IGVuZC5sZW5ndGggPyBlbmQuc3Vic3RyaW5nKGluZGV4LCBlbmQubGVuZ3RoKSA6IFwiXCI7IC8vd2UgdXNlIHRoZSBcImNcIiBvZiB0aGUgUHJvcFR3ZWVuIHRvIHN0b3JlIHRoZSBmaW5hbCBwYXJ0IG9mIHRoZSBzdHJpbmcgKGFmdGVyIHRoZSBsYXN0IG51bWJlcilcblxuICBwdC5mcCA9IGZ1bmNQYXJhbTtcblxuICBpZiAoX3JlbEV4cC50ZXN0KGVuZCkgfHwgaGFzUmFuZG9tKSB7XG4gICAgcHQuZSA9IDA7IC8vaWYgdGhlIGVuZCBzdHJpbmcgY29udGFpbnMgcmVsYXRpdmUgdmFsdWVzIG9yIGR5bmFtaWMgcmFuZG9tKC4uLikgdmFsdWVzLCBkZWxldGUgdGhlIGVuZCBpdCBzbyB0aGF0IG9uIHRoZSBmaW5hbCByZW5kZXIgd2UgZG9uJ3QgYWN0dWFsbHkgc2V0IGl0IHRvIHRoZSBzdHJpbmcgd2l0aCArPSBvciAtPSBjaGFyYWN0ZXJzIChmb3JjZXMgaXQgdG8gdXNlIHRoZSBjYWxjdWxhdGVkIHZhbHVlKS5cbiAgfVxuXG4gIHRoaXMuX3B0ID0gcHQ7IC8vc3RhcnQgdGhlIGxpbmtlZCBsaXN0IHdpdGggdGhpcyBuZXcgUHJvcFR3ZWVuLiBSZW1lbWJlciwgd2UgY2FsbCBfYWRkQ29tcGxleFN0cmluZ1Byb3BUd2Vlbi5jYWxsKHR3ZWVuSW5zdGFuY2UuLi4pIHRvIGVuc3VyZSB0aGF0IGl0J3Mgc2NvcGVkIHByb3Blcmx5LiBXZSBtYXkgY2FsbCBpdCBmcm9tIHdpdGhpbiBhIHBsdWdpbiB0b28sIHRodXMgXCJ0aGlzXCIgd291bGQgcmVmZXIgdG8gdGhlIHBsdWdpbi5cblxuICByZXR1cm4gcHQ7XG59LFxuICAgIF9hZGRQcm9wVHdlZW4gPSBmdW5jdGlvbiBfYWRkUHJvcFR3ZWVuKHRhcmdldCwgcHJvcCwgc3RhcnQsIGVuZCwgaW5kZXgsIHRhcmdldHMsIG1vZGlmaWVyLCBzdHJpbmdGaWx0ZXIsIGZ1bmNQYXJhbSwgb3B0aW9uYWwpIHtcbiAgX2lzRnVuY3Rpb24oZW5kKSAmJiAoZW5kID0gZW5kKGluZGV4IHx8IDAsIHRhcmdldCwgdGFyZ2V0cykpO1xuICB2YXIgY3VycmVudFZhbHVlID0gdGFyZ2V0W3Byb3BdLFxuICAgICAgcGFyc2VkU3RhcnQgPSBzdGFydCAhPT0gXCJnZXRcIiA/IHN0YXJ0IDogIV9pc0Z1bmN0aW9uKGN1cnJlbnRWYWx1ZSkgPyBjdXJyZW50VmFsdWUgOiBmdW5jUGFyYW0gPyB0YXJnZXRbcHJvcC5pbmRleE9mKFwic2V0XCIpIHx8ICFfaXNGdW5jdGlvbih0YXJnZXRbXCJnZXRcIiArIHByb3Auc3Vic3RyKDMpXSkgPyBwcm9wIDogXCJnZXRcIiArIHByb3Auc3Vic3RyKDMpXShmdW5jUGFyYW0pIDogdGFyZ2V0W3Byb3BdKCksXG4gICAgICBzZXR0ZXIgPSAhX2lzRnVuY3Rpb24oY3VycmVudFZhbHVlKSA/IF9zZXR0ZXJQbGFpbiA6IGZ1bmNQYXJhbSA/IF9zZXR0ZXJGdW5jV2l0aFBhcmFtIDogX3NldHRlckZ1bmMsXG4gICAgICBwdDtcblxuICBpZiAoX2lzU3RyaW5nKGVuZCkpIHtcbiAgICBpZiAofmVuZC5pbmRleE9mKFwicmFuZG9tKFwiKSkge1xuICAgICAgZW5kID0gX3JlcGxhY2VSYW5kb20oZW5kKTtcbiAgICB9XG5cbiAgICBpZiAoZW5kLmNoYXJBdCgxKSA9PT0gXCI9XCIpIHtcbiAgICAgIHB0ID0gX3BhcnNlUmVsYXRpdmUocGFyc2VkU3RhcnQsIGVuZCkgKyAoZ2V0VW5pdChwYXJzZWRTdGFydCkgfHwgMCk7XG5cbiAgICAgIGlmIChwdCB8fCBwdCA9PT0gMCkge1xuICAgICAgICAvLyB0byBhdm9pZCBpc05hTiwgbGlrZSBpZiBzb21lb25lIHBhc3NlcyBpbiBhIHZhbHVlIGxpa2UgXCIhPSB3aGF0ZXZlclwiXG4gICAgICAgIGVuZCA9IHB0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmICghb3B0aW9uYWwgfHwgcGFyc2VkU3RhcnQgIT09IGVuZCB8fCBfZm9yY2VBbGxQcm9wVHdlZW5zKSB7XG4gICAgaWYgKCFpc05hTihwYXJzZWRTdGFydCAqIGVuZCkgJiYgZW5kICE9PSBcIlwiKSB7XG4gICAgICAvLyBmdW4gZmFjdDogYW55IG51bWJlciBtdWx0aXBsaWVkIGJ5IFwiXCIgaXMgZXZhbHVhdGVkIGFzIHRoZSBudW1iZXIgMCFcbiAgICAgIHB0ID0gbmV3IFByb3BUd2Vlbih0aGlzLl9wdCwgdGFyZ2V0LCBwcm9wLCArcGFyc2VkU3RhcnQgfHwgMCwgZW5kIC0gKHBhcnNlZFN0YXJ0IHx8IDApLCB0eXBlb2YgY3VycmVudFZhbHVlID09PSBcImJvb2xlYW5cIiA/IF9yZW5kZXJCb29sZWFuIDogX3JlbmRlclBsYWluLCAwLCBzZXR0ZXIpO1xuICAgICAgZnVuY1BhcmFtICYmIChwdC5mcCA9IGZ1bmNQYXJhbSk7XG4gICAgICBtb2RpZmllciAmJiBwdC5tb2RpZmllcihtb2RpZmllciwgdGhpcywgdGFyZ2V0KTtcbiAgICAgIHJldHVybiB0aGlzLl9wdCA9IHB0O1xuICAgIH1cblxuICAgICFjdXJyZW50VmFsdWUgJiYgIShwcm9wIGluIHRhcmdldCkgJiYgX21pc3NpbmdQbHVnaW4ocHJvcCwgZW5kKTtcbiAgICByZXR1cm4gX2FkZENvbXBsZXhTdHJpbmdQcm9wVHdlZW4uY2FsbCh0aGlzLCB0YXJnZXQsIHByb3AsIHBhcnNlZFN0YXJ0LCBlbmQsIHNldHRlciwgc3RyaW5nRmlsdGVyIHx8IF9jb25maWcuc3RyaW5nRmlsdGVyLCBmdW5jUGFyYW0pO1xuICB9XG59LFxuICAgIC8vY3JlYXRlcyBhIGNvcHkgb2YgdGhlIHZhcnMgb2JqZWN0IGFuZCBwcm9jZXNzZXMgYW55IGZ1bmN0aW9uLWJhc2VkIHZhbHVlcyAocHV0dGluZyB0aGUgcmVzdWx0aW5nIHZhbHVlcyBkaXJlY3RseSBpbnRvIHRoZSBjb3B5KSBhcyB3ZWxsIGFzIHN0cmluZ3Mgd2l0aCBcInJhbmRvbSgpXCIgaW4gdGhlbS4gSXQgZG9lcyBOT1QgcHJvY2VzcyByZWxhdGl2ZSB2YWx1ZXMuXG5fcHJvY2Vzc1ZhcnMgPSBmdW5jdGlvbiBfcHJvY2Vzc1ZhcnModmFycywgaW5kZXgsIHRhcmdldCwgdGFyZ2V0cywgdHdlZW4pIHtcbiAgX2lzRnVuY3Rpb24odmFycykgJiYgKHZhcnMgPSBfcGFyc2VGdW5jT3JTdHJpbmcodmFycywgdHdlZW4sIGluZGV4LCB0YXJnZXQsIHRhcmdldHMpKTtcblxuICBpZiAoIV9pc09iamVjdCh2YXJzKSB8fCB2YXJzLnN0eWxlICYmIHZhcnMubm9kZVR5cGUgfHwgX2lzQXJyYXkodmFycykgfHwgX2lzVHlwZWRBcnJheSh2YXJzKSkge1xuICAgIHJldHVybiBfaXNTdHJpbmcodmFycykgPyBfcGFyc2VGdW5jT3JTdHJpbmcodmFycywgdHdlZW4sIGluZGV4LCB0YXJnZXQsIHRhcmdldHMpIDogdmFycztcbiAgfVxuXG4gIHZhciBjb3B5ID0ge30sXG4gICAgICBwO1xuXG4gIGZvciAocCBpbiB2YXJzKSB7XG4gICAgY29weVtwXSA9IF9wYXJzZUZ1bmNPclN0cmluZyh2YXJzW3BdLCB0d2VlbiwgaW5kZXgsIHRhcmdldCwgdGFyZ2V0cyk7XG4gIH1cblxuICByZXR1cm4gY29weTtcbn0sXG4gICAgX2NoZWNrUGx1Z2luID0gZnVuY3Rpb24gX2NoZWNrUGx1Z2luKHByb3BlcnR5LCB2YXJzLCB0d2VlbiwgaW5kZXgsIHRhcmdldCwgdGFyZ2V0cykge1xuICB2YXIgcGx1Z2luLCBwdCwgcHRMb29rdXAsIGk7XG5cbiAgaWYgKF9wbHVnaW5zW3Byb3BlcnR5XSAmJiAocGx1Z2luID0gbmV3IF9wbHVnaW5zW3Byb3BlcnR5XSgpKS5pbml0KHRhcmdldCwgcGx1Z2luLnJhd1ZhcnMgPyB2YXJzW3Byb3BlcnR5XSA6IF9wcm9jZXNzVmFycyh2YXJzW3Byb3BlcnR5XSwgaW5kZXgsIHRhcmdldCwgdGFyZ2V0cywgdHdlZW4pLCB0d2VlbiwgaW5kZXgsIHRhcmdldHMpICE9PSBmYWxzZSkge1xuICAgIHR3ZWVuLl9wdCA9IHB0ID0gbmV3IFByb3BUd2Vlbih0d2Vlbi5fcHQsIHRhcmdldCwgcHJvcGVydHksIDAsIDEsIHBsdWdpbi5yZW5kZXIsIHBsdWdpbiwgMCwgcGx1Z2luLnByaW9yaXR5KTtcblxuICAgIGlmICh0d2VlbiAhPT0gX3F1aWNrVHdlZW4pIHtcbiAgICAgIHB0TG9va3VwID0gdHdlZW4uX3B0TG9va3VwW3R3ZWVuLl90YXJnZXRzLmluZGV4T2YodGFyZ2V0KV07IC8vbm90ZTogd2UgY2FuJ3QgdXNlIHR3ZWVuLl9wdExvb2t1cFtpbmRleF0gYmVjYXVzZSBmb3Igc3RhZ2dlcmVkIHR3ZWVucywgdGhlIGluZGV4IGZyb20gdGhlIGZ1bGxUYXJnZXRzIGFycmF5IHdvbid0IG1hdGNoIHdoYXQgaXQgaXMgaW4gZWFjaCBpbmRpdmlkdWFsIHR3ZWVuIHRoYXQgc3Bhd25zIGZyb20gdGhlIHN0YWdnZXIuXG5cbiAgICAgIGkgPSBwbHVnaW4uX3Byb3BzLmxlbmd0aDtcblxuICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICBwdExvb2t1cFtwbHVnaW4uX3Byb3BzW2ldXSA9IHB0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwbHVnaW47XG59LFxuICAgIF9vdmVyd3JpdGluZ1R3ZWVuLFxuICAgIC8vc3RvcmUgYSByZWZlcmVuY2UgdGVtcG9yYXJpbHkgc28gd2UgY2FuIGF2b2lkIG92ZXJ3cml0aW5nIGl0c2VsZi5cbl9mb3JjZUFsbFByb3BUd2VlbnMsXG4gICAgX2luaXRUd2VlbiA9IGZ1bmN0aW9uIF9pbml0VHdlZW4odHdlZW4sIHRpbWUpIHtcbiAgdmFyIHZhcnMgPSB0d2Vlbi52YXJzLFxuICAgICAgZWFzZSA9IHZhcnMuZWFzZSxcbiAgICAgIHN0YXJ0QXQgPSB2YXJzLnN0YXJ0QXQsXG4gICAgICBpbW1lZGlhdGVSZW5kZXIgPSB2YXJzLmltbWVkaWF0ZVJlbmRlcixcbiAgICAgIGxhenkgPSB2YXJzLmxhenksXG4gICAgICBvblVwZGF0ZSA9IHZhcnMub25VcGRhdGUsXG4gICAgICBvblVwZGF0ZVBhcmFtcyA9IHZhcnMub25VcGRhdGVQYXJhbXMsXG4gICAgICBjYWxsYmFja1Njb3BlID0gdmFycy5jYWxsYmFja1Njb3BlLFxuICAgICAgcnVuQmFja3dhcmRzID0gdmFycy5ydW5CYWNrd2FyZHMsXG4gICAgICB5b3lvRWFzZSA9IHZhcnMueW95b0Vhc2UsXG4gICAgICBrZXlmcmFtZXMgPSB2YXJzLmtleWZyYW1lcyxcbiAgICAgIGF1dG9SZXZlcnQgPSB2YXJzLmF1dG9SZXZlcnQsXG4gICAgICBkdXIgPSB0d2Vlbi5fZHVyLFxuICAgICAgcHJldlN0YXJ0QXQgPSB0d2Vlbi5fc3RhcnRBdCxcbiAgICAgIHRhcmdldHMgPSB0d2Vlbi5fdGFyZ2V0cyxcbiAgICAgIHBhcmVudCA9IHR3ZWVuLnBhcmVudCxcbiAgICAgIGZ1bGxUYXJnZXRzID0gcGFyZW50ICYmIHBhcmVudC5kYXRhID09PSBcIm5lc3RlZFwiID8gcGFyZW50LnBhcmVudC5fdGFyZ2V0cyA6IHRhcmdldHMsXG4gICAgICBhdXRvT3ZlcndyaXRlID0gdHdlZW4uX292ZXJ3cml0ZSA9PT0gXCJhdXRvXCIgJiYgIV9zdXBwcmVzc092ZXJ3cml0ZXMsXG4gICAgICB0bCA9IHR3ZWVuLnRpbWVsaW5lLFxuICAgICAgY2xlYW5WYXJzLFxuICAgICAgaSxcbiAgICAgIHAsXG4gICAgICBwdCxcbiAgICAgIHRhcmdldCxcbiAgICAgIGhhc1ByaW9yaXR5LFxuICAgICAgZ3NEYXRhLFxuICAgICAgaGFybmVzcyxcbiAgICAgIHBsdWdpbixcbiAgICAgIHB0TG9va3VwLFxuICAgICAgaW5kZXgsXG4gICAgICBoYXJuZXNzVmFycyxcbiAgICAgIG92ZXJ3cml0dGVuO1xuICB0bCAmJiAoIWtleWZyYW1lcyB8fCAhZWFzZSkgJiYgKGVhc2UgPSBcIm5vbmVcIik7XG4gIHR3ZWVuLl9lYXNlID0gX3BhcnNlRWFzZShlYXNlLCBfZGVmYXVsdHMuZWFzZSk7XG4gIHR3ZWVuLl95RWFzZSA9IHlveW9FYXNlID8gX2ludmVydEVhc2UoX3BhcnNlRWFzZSh5b3lvRWFzZSA9PT0gdHJ1ZSA/IGVhc2UgOiB5b3lvRWFzZSwgX2RlZmF1bHRzLmVhc2UpKSA6IDA7XG5cbiAgaWYgKHlveW9FYXNlICYmIHR3ZWVuLl95b3lvICYmICF0d2Vlbi5fcmVwZWF0KSB7XG4gICAgLy90aGVyZSBtdXN0IGhhdmUgYmVlbiBhIHBhcmVudCB0aW1lbGluZSB3aXRoIHlveW86dHJ1ZSB0aGF0IGlzIGN1cnJlbnRseSBpbiBpdHMgeW95byBwaGFzZSwgc28gZmxpcCB0aGUgZWFzZXMuXG4gICAgeW95b0Vhc2UgPSB0d2Vlbi5feUVhc2U7XG4gICAgdHdlZW4uX3lFYXNlID0gdHdlZW4uX2Vhc2U7XG4gICAgdHdlZW4uX2Vhc2UgPSB5b3lvRWFzZTtcbiAgfVxuXG4gIHR3ZWVuLl9mcm9tID0gIXRsICYmICEhdmFycy5ydW5CYWNrd2FyZHM7IC8vbmVzdGVkIHRpbWVsaW5lcyBzaG91bGQgbmV2ZXIgcnVuIGJhY2t3YXJkcyAtIHRoZSBiYWNrd2FyZHMtbmVzcyBpcyBpbiB0aGUgY2hpbGQgdHdlZW5zLlxuXG4gIGlmICghdGwgfHwga2V5ZnJhbWVzICYmICF2YXJzLnN0YWdnZXIpIHtcbiAgICAvL2lmIHRoZXJlJ3MgYW4gaW50ZXJuYWwgdGltZWxpbmUsIHNraXAgYWxsIHRoZSBwYXJzaW5nIGJlY2F1c2Ugd2UgcGFzc2VkIHRoYXQgdGFzayBkb3duIHRoZSBjaGFpbi5cbiAgICBoYXJuZXNzID0gdGFyZ2V0c1swXSA/IF9nZXRDYWNoZSh0YXJnZXRzWzBdKS5oYXJuZXNzIDogMDtcbiAgICBoYXJuZXNzVmFycyA9IGhhcm5lc3MgJiYgdmFyc1toYXJuZXNzLnByb3BdOyAvL3NvbWVvbmUgbWF5IG5lZWQgdG8gc3BlY2lmeSBDU1Mtc3BlY2lmaWMgdmFsdWVzIEFORCBub24tQ1NTIHZhbHVlcywgbGlrZSBpZiB0aGUgZWxlbWVudCBoYXMgYW4gXCJ4XCIgcHJvcGVydHkgcGx1cyBpdCdzIGEgc3RhbmRhcmQgRE9NIGVsZW1lbnQuIFdlIGFsbG93IHBlb3BsZSB0byBkaXN0aW5ndWlzaCBieSB3cmFwcGluZyBwbHVnaW4tc3BlY2lmaWMgc3R1ZmYgaW4gYSBjc3M6e30gb2JqZWN0IGZvciBleGFtcGxlLlxuXG4gICAgY2xlYW5WYXJzID0gX2NvcHlFeGNsdWRpbmcodmFycywgX3Jlc2VydmVkUHJvcHMpO1xuXG4gICAgaWYgKHByZXZTdGFydEF0KSB7XG4gICAgICBwcmV2U3RhcnRBdC5yZXZlcnQocnVuQmFja3dhcmRzICYmIGR1ciA/IF9yZXZlcnRDb25maWcgOiBfc3RhcnRBdFJldmVydENvbmZpZyk7IC8vIGlmIGl0J3MgYSBcInN0YXJ0QXRcIiAobm90IFwiZnJvbSgpXCIgb3IgcnVuQmFja3dhcmRzOiB0cnVlKSwgd2Ugb25seSBuZWVkIHRvIGRvIGEgc2hhbGxvdyByZXZlcnQgKGtlZXAgdHJhbnNmb3JtcyBjYWNoZWQgaW4gQ1NTUGx1Z2luKVxuICAgICAgLy8gZG9uJ3QganVzdCBfcmVtb3ZlRnJvbVBhcmVudChwcmV2U3RhcnRBdC5yZW5kZXIoLTEsIHRydWUpKSBiZWNhdXNlIHRoYXQnbGwgbGVhdmUgaW5saW5lIHN0eWxlcy4gV2UncmUgY3JlYXRpbmcgYSBuZXcgX3N0YXJ0QXQgZm9yIFwic3RhcnRBdFwiIHR3ZWVucyB0aGF0IHJlLWNhcHR1cmUgdGhpbmdzIHRvIGVuc3VyZSB0aGF0IGlmIHRoZSBwcmUtdHdlZW4gdmFsdWVzIGNoYW5nZWQgc2luY2UgdGhlIHR3ZWVuIHdhcyBjcmVhdGVkLCB0aGV5J3JlIHJlY29yZGVkLlxuXG4gICAgICBwcmV2U3RhcnRBdC5fbGF6eSA9IDA7XG4gICAgfVxuXG4gICAgaWYgKHN0YXJ0QXQpIHtcbiAgICAgIF9yZW1vdmVGcm9tUGFyZW50KHR3ZWVuLl9zdGFydEF0ID0gVHdlZW4uc2V0KHRhcmdldHMsIF9zZXREZWZhdWx0cyh7XG4gICAgICAgIGRhdGE6IFwiaXNTdGFydFwiLFxuICAgICAgICBvdmVyd3JpdGU6IGZhbHNlLFxuICAgICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgICAgaW1tZWRpYXRlUmVuZGVyOiB0cnVlLFxuICAgICAgICBsYXp5OiBfaXNOb3RGYWxzZShsYXp5KSxcbiAgICAgICAgc3RhcnRBdDogbnVsbCxcbiAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgIG9uVXBkYXRlOiBvblVwZGF0ZSxcbiAgICAgICAgb25VcGRhdGVQYXJhbXM6IG9uVXBkYXRlUGFyYW1zLFxuICAgICAgICBjYWxsYmFja1Njb3BlOiBjYWxsYmFja1Njb3BlLFxuICAgICAgICBzdGFnZ2VyOiAwXG4gICAgICB9LCBzdGFydEF0KSkpOyAvL2NvcHkgdGhlIHByb3BlcnRpZXMvdmFsdWVzIGludG8gYSBuZXcgb2JqZWN0IHRvIGF2b2lkIGNvbGxpc2lvbnMsIGxpa2UgdmFyIHRvID0ge3g6MH0sIGZyb20gPSB7eDo1MDB9OyB0aW1lbGluZS5mcm9tVG8oZSwgZnJvbSwgdG8pLmZyb21UbyhlLCB0bywgZnJvbSk7XG5cblxuICAgICAgdGltZSA8IDAgJiYgKF9yZXZlcnRpbmcgfHwgIWltbWVkaWF0ZVJlbmRlciAmJiAhYXV0b1JldmVydCkgJiYgdHdlZW4uX3N0YXJ0QXQucmV2ZXJ0KF9yZXZlcnRDb25maWcpOyAvLyByYXJlIGVkZ2UgY2FzZSwgbGlrZSBpZiBhIHJlbmRlciBpcyBmb3JjZWQgaW4gdGhlIG5lZ2F0aXZlIGRpcmVjdGlvbiBvZiBhIG5vbi1pbml0dGVkIHR3ZWVuLlxuXG4gICAgICBpZiAoaW1tZWRpYXRlUmVuZGVyKSB7XG4gICAgICAgIGlmIChkdXIgJiYgdGltZSA8PSAwKSB7XG4gICAgICAgICAgdGltZSAmJiAodHdlZW4uX3pUaW1lID0gdGltZSk7XG4gICAgICAgICAgcmV0dXJuOyAvL3dlIHNraXAgaW5pdGlhbGl6YXRpb24gaGVyZSBzbyB0aGF0IG92ZXJ3cml0aW5nIGRvZXNuJ3Qgb2NjdXIgdW50aWwgdGhlIHR3ZWVuIGFjdHVhbGx5IGJlZ2lucy4gT3RoZXJ3aXNlLCBpZiB5b3UgY3JlYXRlIHNldmVyYWwgaW1tZWRpYXRlUmVuZGVyOnRydWUgdHdlZW5zIG9mIHRoZSBzYW1lIHRhcmdldC9wcm9wZXJ0aWVzIHRvIGRyb3AgaW50byBhIFRpbWVsaW5lLCB0aGUgbGFzdCBvbmUgY3JlYXRlZCB3b3VsZCBvdmVyd3JpdGUgdGhlIGZpcnN0IG9uZXMgYmVjYXVzZSB0aGV5IGRpZG4ndCBnZXQgcGxhY2VkIGludG8gdGhlIHRpbWVsaW5lIHlldCBiZWZvcmUgdGhlIGZpcnN0IHJlbmRlciBvY2N1cnMgYW5kIGtpY2tzIGluIG92ZXJ3cml0aW5nLlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChydW5CYWNrd2FyZHMgJiYgZHVyKSB7XG4gICAgICAvL2Zyb20oKSB0d2VlbnMgbXVzdCBiZSBoYW5kbGVkIHVuaXF1ZWx5OiB0aGVpciBiZWdpbm5pbmcgdmFsdWVzIG11c3QgYmUgcmVuZGVyZWQgYnV0IHdlIGRvbid0IHdhbnQgb3ZlcndyaXRpbmcgdG8gb2NjdXIgeWV0ICh3aGVuIHRpbWUgaXMgc3RpbGwgMCkuIFdhaXQgdW50aWwgdGhlIHR3ZWVuIGFjdHVhbGx5IGJlZ2lucyBiZWZvcmUgZG9pbmcgYWxsIHRoZSByb3V0aW5lcyBsaWtlIG92ZXJ3cml0aW5nLiBBdCB0aGF0IHRpbWUsIHdlIHNob3VsZCByZW5kZXIgYXQgdGhlIEVORCBvZiB0aGUgdHdlZW4gdG8gZW5zdXJlIHRoYXQgdGhpbmdzIGluaXRpYWxpemUgY29ycmVjdGx5IChyZW1lbWJlciwgZnJvbSgpIHR3ZWVucyBnbyBiYWNrd2FyZHMpXG4gICAgICBpZiAoIXByZXZTdGFydEF0KSB7XG4gICAgICAgIHRpbWUgJiYgKGltbWVkaWF0ZVJlbmRlciA9IGZhbHNlKTsgLy9pbiByYXJlIGNhc2VzIChsaWtlIGlmIGEgZnJvbSgpIHR3ZWVuIHJ1bnMgYW5kIHRoZW4gaXMgaW52YWxpZGF0ZSgpLWVkKSwgaW1tZWRpYXRlUmVuZGVyIGNvdWxkIGJlIHRydWUgYnV0IHRoZSBpbml0aWFsIGZvcmNlZC1yZW5kZXIgZ2V0cyBza2lwcGVkLCBzbyB0aGVyZSdzIG5vIG5lZWQgdG8gZm9yY2UgdGhlIHJlbmRlciBpbiB0aGlzIGNvbnRleHQgd2hlbiB0aGUgX3RpbWUgaXMgZ3JlYXRlciB0aGFuIDBcblxuICAgICAgICBwID0gX3NldERlZmF1bHRzKHtcbiAgICAgICAgICBvdmVyd3JpdGU6IGZhbHNlLFxuICAgICAgICAgIGRhdGE6IFwiaXNGcm9tU3RhcnRcIixcbiAgICAgICAgICAvL3dlIHRhZyB0aGUgdHdlZW4gd2l0aCBhcyBcImlzRnJvbVN0YXJ0XCIgc28gdGhhdCBpZiBbaW5zaWRlIGEgcGx1Z2luXSB3ZSBuZWVkIHRvIG9ubHkgZG8gc29tZXRoaW5nIGF0IHRoZSB2ZXJ5IEVORCBvZiBhIHR3ZWVuLCB3ZSBoYXZlIGEgd2F5IG9mIGlkZW50aWZ5aW5nIHRoaXMgdHdlZW4gYXMgbWVyZWx5IHRoZSBvbmUgdGhhdCdzIHNldHRpbmcgdGhlIGJlZ2lubmluZyB2YWx1ZXMgZm9yIGEgXCJmcm9tKClcIiB0d2Vlbi4gRm9yIGV4YW1wbGUsIGNsZWFyUHJvcHMgaW4gQ1NTUGx1Z2luIHNob3VsZCBvbmx5IGdldCBhcHBsaWVkIGF0IHRoZSB2ZXJ5IEVORCBvZiBhIHR3ZWVuIGFuZCB3aXRob3V0IHRoaXMgdGFnLCBmcm9tKC4uLntoZWlnaHQ6MTAwLCBjbGVhclByb3BzOlwiaGVpZ2h0XCIsIGRlbGF5OjF9KSB3b3VsZCB3aXBlIHRoZSBoZWlnaHQgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgdHdlZW4gYW5kIGFmdGVyIDEgc2Vjb25kLCBpdCdkIGtpY2sgYmFjayBpbi5cbiAgICAgICAgICBsYXp5OiBpbW1lZGlhdGVSZW5kZXIgJiYgX2lzTm90RmFsc2UobGF6eSksXG4gICAgICAgICAgaW1tZWRpYXRlUmVuZGVyOiBpbW1lZGlhdGVSZW5kZXIsXG4gICAgICAgICAgLy96ZXJvLWR1cmF0aW9uIHR3ZWVucyByZW5kZXIgaW1tZWRpYXRlbHkgYnkgZGVmYXVsdCwgYnV0IGlmIHdlJ3JlIG5vdCBzcGVjaWZpY2FsbHkgaW5zdHJ1Y3RlZCB0byByZW5kZXIgdGhpcyB0d2VlbiBpbW1lZGlhdGVseSwgd2Ugc2hvdWxkIHNraXAgdGhpcyBhbmQgbWVyZWx5IF9pbml0KCkgdG8gcmVjb3JkIHRoZSBzdGFydGluZyB2YWx1ZXMgKHJlbmRlcmluZyB0aGVtIGltbWVkaWF0ZWx5IHdvdWxkIHB1c2ggdGhlbSB0byBjb21wbGV0aW9uIHdoaWNoIGlzIHdhc3RlZnVsIGluIHRoYXQgY2FzZSAtIHdlJ2QgaGF2ZSB0byByZW5kZXIoLTEpIGltbWVkaWF0ZWx5IGFmdGVyKVxuICAgICAgICAgIHN0YWdnZXI6IDAsXG4gICAgICAgICAgcGFyZW50OiBwYXJlbnQgLy9lbnN1cmVzIHRoYXQgbmVzdGVkIHR3ZWVucyB0aGF0IGhhZCBhIHN0YWdnZXIgYXJlIGhhbmRsZWQgcHJvcGVybHksIGxpa2UgZ3NhcC5mcm9tKFwiLmNsYXNzXCIsIHt5OmdzYXAudXRpbHMud3JhcChbLTEwMCwxMDBdKX0pXG5cbiAgICAgICAgfSwgY2xlYW5WYXJzKTtcbiAgICAgICAgaGFybmVzc1ZhcnMgJiYgKHBbaGFybmVzcy5wcm9wXSA9IGhhcm5lc3NWYXJzKTsgLy8gaW4gY2FzZSBzb21lb25lIGRvZXMgc29tZXRoaW5nIGxpa2UgLmZyb20oLi4uLCB7Y3NzOnt9fSlcblxuICAgICAgICBfcmVtb3ZlRnJvbVBhcmVudCh0d2Vlbi5fc3RhcnRBdCA9IFR3ZWVuLnNldCh0YXJnZXRzLCBwKSk7XG5cbiAgICAgICAgdGltZSA8IDAgJiYgKF9yZXZlcnRpbmcgPyB0d2Vlbi5fc3RhcnRBdC5yZXZlcnQoX3JldmVydENvbmZpZykgOiB0d2Vlbi5fc3RhcnRBdC5yZW5kZXIoLTEsIHRydWUpKTtcbiAgICAgICAgdHdlZW4uX3pUaW1lID0gdGltZTtcblxuICAgICAgICBpZiAoIWltbWVkaWF0ZVJlbmRlcikge1xuICAgICAgICAgIF9pbml0VHdlZW4odHdlZW4uX3N0YXJ0QXQsIF90aW55TnVtKTsgLy9lbnN1cmVzIHRoYXQgdGhlIGluaXRpYWwgdmFsdWVzIGFyZSByZWNvcmRlZFxuXG4gICAgICAgIH0gZWxzZSBpZiAoIXRpbWUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0d2Vlbi5fcHQgPSB0d2Vlbi5fcHRDYWNoZSA9IDA7XG4gICAgbGF6eSA9IGR1ciAmJiBfaXNOb3RGYWxzZShsYXp5KSB8fCBsYXp5ICYmICFkdXI7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgdGFyZ2V0cy5sZW5ndGg7IGkrKykge1xuICAgICAgdGFyZ2V0ID0gdGFyZ2V0c1tpXTtcbiAgICAgIGdzRGF0YSA9IHRhcmdldC5fZ3NhcCB8fCBfaGFybmVzcyh0YXJnZXRzKVtpXS5fZ3NhcDtcbiAgICAgIHR3ZWVuLl9wdExvb2t1cFtpXSA9IHB0TG9va3VwID0ge307XG4gICAgICBfbGF6eUxvb2t1cFtnc0RhdGEuaWRdICYmIF9sYXp5VHdlZW5zLmxlbmd0aCAmJiBfbGF6eVJlbmRlcigpOyAvL2lmIG90aGVyIHR3ZWVucyBvZiB0aGUgc2FtZSB0YXJnZXQgaGF2ZSByZWNlbnRseSBpbml0dGVkIGJ1dCBoYXZlbid0IHJlbmRlcmVkIHlldCwgd2UndmUgZ290IHRvIGZvcmNlIHRoZSByZW5kZXIgc28gdGhhdCB0aGUgc3RhcnRpbmcgdmFsdWVzIGFyZSBjb3JyZWN0IChpbWFnaW5lIHBvcHVsYXRpbmcgYSB0aW1lbGluZSB3aXRoIGEgYnVuY2ggb2Ygc2VxdWVudGlhbCB0d2VlbnMgYW5kIHRoZW4ganVtcGluZyB0byB0aGUgZW5kKVxuXG4gICAgICBpbmRleCA9IGZ1bGxUYXJnZXRzID09PSB0YXJnZXRzID8gaSA6IGZ1bGxUYXJnZXRzLmluZGV4T2YodGFyZ2V0KTtcblxuICAgICAgaWYgKGhhcm5lc3MgJiYgKHBsdWdpbiA9IG5ldyBoYXJuZXNzKCkpLmluaXQodGFyZ2V0LCBoYXJuZXNzVmFycyB8fCBjbGVhblZhcnMsIHR3ZWVuLCBpbmRleCwgZnVsbFRhcmdldHMpICE9PSBmYWxzZSkge1xuICAgICAgICB0d2Vlbi5fcHQgPSBwdCA9IG5ldyBQcm9wVHdlZW4odHdlZW4uX3B0LCB0YXJnZXQsIHBsdWdpbi5uYW1lLCAwLCAxLCBwbHVnaW4ucmVuZGVyLCBwbHVnaW4sIDAsIHBsdWdpbi5wcmlvcml0eSk7XG5cbiAgICAgICAgcGx1Z2luLl9wcm9wcy5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgcHRMb29rdXBbbmFtZV0gPSBwdDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcGx1Z2luLnByaW9yaXR5ICYmIChoYXNQcmlvcml0eSA9IDEpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWhhcm5lc3MgfHwgaGFybmVzc1ZhcnMpIHtcbiAgICAgICAgZm9yIChwIGluIGNsZWFuVmFycykge1xuICAgICAgICAgIGlmIChfcGx1Z2luc1twXSAmJiAocGx1Z2luID0gX2NoZWNrUGx1Z2luKHAsIGNsZWFuVmFycywgdHdlZW4sIGluZGV4LCB0YXJnZXQsIGZ1bGxUYXJnZXRzKSkpIHtcbiAgICAgICAgICAgIHBsdWdpbi5wcmlvcml0eSAmJiAoaGFzUHJpb3JpdHkgPSAxKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHRMb29rdXBbcF0gPSBwdCA9IF9hZGRQcm9wVHdlZW4uY2FsbCh0d2VlbiwgdGFyZ2V0LCBwLCBcImdldFwiLCBjbGVhblZhcnNbcF0sIGluZGV4LCBmdWxsVGFyZ2V0cywgMCwgdmFycy5zdHJpbmdGaWx0ZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0d2Vlbi5fb3AgJiYgdHdlZW4uX29wW2ldICYmIHR3ZWVuLmtpbGwodGFyZ2V0LCB0d2Vlbi5fb3BbaV0pO1xuXG4gICAgICBpZiAoYXV0b092ZXJ3cml0ZSAmJiB0d2Vlbi5fcHQpIHtcbiAgICAgICAgX292ZXJ3cml0aW5nVHdlZW4gPSB0d2VlbjtcblxuICAgICAgICBfZ2xvYmFsVGltZWxpbmUua2lsbFR3ZWVuc09mKHRhcmdldCwgcHRMb29rdXAsIHR3ZWVuLmdsb2JhbFRpbWUodGltZSkpOyAvLyBtYWtlIHN1cmUgdGhlIG92ZXJ3cml0aW5nIGRvZXNuJ3Qgb3ZlcndyaXRlIFRISVMgdHdlZW4hISFcblxuXG4gICAgICAgIG92ZXJ3cml0dGVuID0gIXR3ZWVuLnBhcmVudDtcbiAgICAgICAgX292ZXJ3cml0aW5nVHdlZW4gPSAwO1xuICAgICAgfVxuXG4gICAgICB0d2Vlbi5fcHQgJiYgbGF6eSAmJiAoX2xhenlMb29rdXBbZ3NEYXRhLmlkXSA9IDEpO1xuICAgIH1cblxuICAgIGhhc1ByaW9yaXR5ICYmIF9zb3J0UHJvcFR3ZWVuc0J5UHJpb3JpdHkodHdlZW4pO1xuICAgIHR3ZWVuLl9vbkluaXQgJiYgdHdlZW4uX29uSW5pdCh0d2Vlbik7IC8vcGx1Z2lucyBsaWtlIFJvdW5kUHJvcHMgbXVzdCB3YWl0IHVudGlsIEFMTCBvZiB0aGUgUHJvcFR3ZWVucyBhcmUgaW5zdGFudGlhdGVkLiBJbiB0aGUgcGx1Z2luJ3MgaW5pdCgpIGZ1bmN0aW9uLCBpdCBzZXRzIHRoZSBfb25Jbml0IG9uIHRoZSB0d2VlbiBpbnN0YW5jZS4gTWF5IG5vdCBiZSBwcmV0dHkvaW50dWl0aXZlLCBidXQgaXQncyBmYXN0IGFuZCBrZWVwcyBmaWxlIHNpemUgZG93bi5cbiAgfVxuXG4gIHR3ZWVuLl9vblVwZGF0ZSA9IG9uVXBkYXRlO1xuICB0d2Vlbi5faW5pdHRlZCA9ICghdHdlZW4uX29wIHx8IHR3ZWVuLl9wdCkgJiYgIW92ZXJ3cml0dGVuOyAvLyBpZiBvdmVyd3JpdHRlblByb3BzIHJlc3VsdGVkIGluIHRoZSBlbnRpcmUgdHdlZW4gYmVpbmcga2lsbGVkLCBkbyBOT1QgZmxhZyBpdCBhcyBpbml0dGVkIG9yIGVsc2UgaXQgbWF5IHJlbmRlciBmb3Igb25lIHRpY2suXG5cbiAga2V5ZnJhbWVzICYmIHRpbWUgPD0gMCAmJiB0bC5yZW5kZXIoX2JpZ051bSwgdHJ1ZSwgdHJ1ZSk7IC8vIGlmIHRoZXJlJ3MgYSAwJSBrZXlmcmFtZSwgaXQnbGwgcmVuZGVyIGluIHRoZSBcImJlZm9yZVwiIHN0YXRlIGZvciBhbnkgc3RhZ2dlcmVkL2RlbGF5ZWQgYW5pbWF0aW9ucyB0aHVzIHdoZW4gdGhlIGZvbGxvd2luZyB0d2VlbiBpbml0aWFsaXplcywgaXQnbGwgdXNlIHRoZSBcImJlZm9yZVwiIHN0YXRlIGluc3RlYWQgb2YgdGhlIFwiYWZ0ZXJcIiBzdGF0ZSBhcyB0aGUgaW5pdGlhbCB2YWx1ZXMuXG59LFxuICAgIF91cGRhdGVQcm9wVHdlZW5zID0gZnVuY3Rpb24gX3VwZGF0ZVByb3BUd2VlbnModHdlZW4sIHByb3BlcnR5LCB2YWx1ZSwgc3RhcnQsIHN0YXJ0SXNSZWxhdGl2ZSwgcmF0aW8sIHRpbWUpIHtcbiAgdmFyIHB0Q2FjaGUgPSAodHdlZW4uX3B0ICYmIHR3ZWVuLl9wdENhY2hlIHx8ICh0d2Vlbi5fcHRDYWNoZSA9IHt9KSlbcHJvcGVydHldLFxuICAgICAgcHQsXG4gICAgICByb290UFQsXG4gICAgICBsb29rdXAsXG4gICAgICBpO1xuXG4gIGlmICghcHRDYWNoZSkge1xuICAgIHB0Q2FjaGUgPSB0d2Vlbi5fcHRDYWNoZVtwcm9wZXJ0eV0gPSBbXTtcbiAgICBsb29rdXAgPSB0d2Vlbi5fcHRMb29rdXA7XG4gICAgaSA9IHR3ZWVuLl90YXJnZXRzLmxlbmd0aDtcblxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHB0ID0gbG9va3VwW2ldW3Byb3BlcnR5XTtcblxuICAgICAgaWYgKHB0ICYmIHB0LmQgJiYgcHQuZC5fcHQpIHtcbiAgICAgICAgLy8gaXQncyBhIHBsdWdpbiwgc28gZmluZCB0aGUgbmVzdGVkIFByb3BUd2VlblxuICAgICAgICBwdCA9IHB0LmQuX3B0O1xuXG4gICAgICAgIHdoaWxlIChwdCAmJiBwdC5wICE9PSBwcm9wZXJ0eSAmJiBwdC5mcCAhPT0gcHJvcGVydHkpIHtcbiAgICAgICAgICAvLyBcImZwXCIgaXMgZnVuY3Rpb25QYXJhbSBmb3IgdGhpbmdzIGxpa2Ugc2V0dGluZyBDU1MgdmFyaWFibGVzIHdoaWNoIHJlcXVpcmUgLnNldFByb3BlcnR5KFwiLS12YXItbmFtZVwiLCB2YWx1ZSlcbiAgICAgICAgICBwdCA9IHB0Ll9uZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghcHQpIHtcbiAgICAgICAgLy8gdGhlcmUgaXMgbm8gUHJvcFR3ZWVuIGFzc29jaWF0ZWQgd2l0aCB0aGF0IHByb3BlcnR5LCBzbyB3ZSBtdXN0IEZPUkNFIG9uZSB0byBiZSBjcmVhdGVkIGFuZCBkaXRjaCBvdXQgb2YgdGhpc1xuICAgICAgICAvLyBpZiB0aGUgdHdlZW4gaGFzIG90aGVyIHByb3BlcnRpZXMgdGhhdCBhbHJlYWR5IHJlbmRlcmVkIGF0IG5ldyBwb3NpdGlvbnMsIHdlJ2Qgbm9ybWFsbHkgaGF2ZSB0byByZXdpbmQgdG8gcHV0IHRoZW0gYmFjayBsaWtlIHR3ZWVuLnJlbmRlcigwLCB0cnVlKSBiZWZvcmUgZm9yY2luZyBhbiBfaW5pdFR3ZWVuKCksIGJ1dCB0aGF0IGNhbiBjcmVhdGUgYW5vdGhlciBlZGdlIGNhc2UgbGlrZSB0d2VlbmluZyBhIHRpbWVsaW5lJ3MgcHJvZ3Jlc3Mgd291bGQgdHJpZ2dlciBvblVwZGF0ZXMgdG8gZmlyZSB3aGljaCBjb3VsZCBtb3ZlIG90aGVyIHRoaW5ncyBhcm91bmQuIEl0J3MgYmV0dGVyIHRvIGp1c3QgaW5mb3JtIHVzZXJzIHRoYXQgLnJlc2V0VG8oKSBzaG91bGQgT05MWSBiZSB1c2VkIGZvciB0d2VlbnMgdGhhdCBhbHJlYWR5IGhhdmUgdGhhdCBwcm9wZXJ0eS4gRm9yIGV4YW1wbGUsIHlvdSBjYW4ndCBnc2FwLnRvKC4uLnsgeTogMCB9KSBhbmQgdGhlbiB0d2Vlbi5yZXN0VG8oXCJ4XCIsIDIwMCkgZm9yIGV4YW1wbGUuXG4gICAgICAgIF9mb3JjZUFsbFByb3BUd2VlbnMgPSAxOyAvLyBvdGhlcndpc2UsIHdoZW4gd2UgX2FkZFByb3BUd2VlbigpIGFuZCBpdCBmaW5kcyBubyBjaGFuZ2UgYmV0d2VlbiB0aGUgc3RhcnQgYW5kIGVuZCB2YWx1ZXMsIGl0IHNraXBzIGNyZWF0aW5nIGEgUHJvcFR3ZWVuIChmb3IgZWZmaWNpZW5jeS4uLndoeSB0d2VlbiB3aGVuIHRoZXJlJ3Mgbm8gZGlmZmVyZW5jZT8pIGJ1dCBpbiB0aGlzIGNhc2Ugd2UgTkVFRCB0aGF0IFByb3BUd2VlbiBjcmVhdGVkIHNvIHdlIGNhbiBlZGl0IGl0LlxuXG4gICAgICAgIHR3ZWVuLnZhcnNbcHJvcGVydHldID0gXCIrPTBcIjtcblxuICAgICAgICBfaW5pdFR3ZWVuKHR3ZWVuLCB0aW1lKTtcblxuICAgICAgICBfZm9yY2VBbGxQcm9wVHdlZW5zID0gMDtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG5cbiAgICAgIHB0Q2FjaGUucHVzaChwdCk7XG4gICAgfVxuICB9XG5cbiAgaSA9IHB0Q2FjaGUubGVuZ3RoO1xuXG4gIHdoaWxlIChpLS0pIHtcbiAgICByb290UFQgPSBwdENhY2hlW2ldO1xuICAgIHB0ID0gcm9vdFBULl9wdCB8fCByb290UFQ7IC8vIGNvbXBsZXggdmFsdWVzIG1heSBoYXZlIG5lc3RlZCBQcm9wVHdlZW5zLiBXZSBvbmx5IGFjY29tbW9kYXRlIHRoZSBGSVJTVCB2YWx1ZS5cblxuICAgIHB0LnMgPSAoc3RhcnQgfHwgc3RhcnQgPT09IDApICYmICFzdGFydElzUmVsYXRpdmUgPyBzdGFydCA6IHB0LnMgKyAoc3RhcnQgfHwgMCkgKyByYXRpbyAqIHB0LmM7XG4gICAgcHQuYyA9IHZhbHVlIC0gcHQucztcbiAgICByb290UFQuZSAmJiAocm9vdFBULmUgPSBfcm91bmQodmFsdWUpICsgZ2V0VW5pdChyb290UFQuZSkpOyAvLyBtYWlubHkgZm9yIENTU1BsdWdpbiAoZW5kIHZhbHVlKVxuXG4gICAgcm9vdFBULmIgJiYgKHJvb3RQVC5iID0gcHQucyArIGdldFVuaXQocm9vdFBULmIpKTsgLy8gKGJlZ2lubmluZyB2YWx1ZSlcbiAgfVxufSxcbiAgICBfYWRkQWxpYXNlc1RvVmFycyA9IGZ1bmN0aW9uIF9hZGRBbGlhc2VzVG9WYXJzKHRhcmdldHMsIHZhcnMpIHtcbiAgdmFyIGhhcm5lc3MgPSB0YXJnZXRzWzBdID8gX2dldENhY2hlKHRhcmdldHNbMF0pLmhhcm5lc3MgOiAwLFxuICAgICAgcHJvcGVydHlBbGlhc2VzID0gaGFybmVzcyAmJiBoYXJuZXNzLmFsaWFzZXMsXG4gICAgICBjb3B5LFxuICAgICAgcCxcbiAgICAgIGksXG4gICAgICBhbGlhc2VzO1xuXG4gIGlmICghcHJvcGVydHlBbGlhc2VzKSB7XG4gICAgcmV0dXJuIHZhcnM7XG4gIH1cblxuICBjb3B5ID0gX21lcmdlKHt9LCB2YXJzKTtcblxuICBmb3IgKHAgaW4gcHJvcGVydHlBbGlhc2VzKSB7XG4gICAgaWYgKHAgaW4gY29weSkge1xuICAgICAgYWxpYXNlcyA9IHByb3BlcnR5QWxpYXNlc1twXS5zcGxpdChcIixcIik7XG4gICAgICBpID0gYWxpYXNlcy5sZW5ndGg7XG5cbiAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgY29weVthbGlhc2VzW2ldXSA9IGNvcHlbcF07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvcHk7XG59LFxuICAgIC8vIHBhcnNlcyBtdWx0aXBsZSBmb3JtYXRzLCBsaWtlIHtcIjAlXCI6IHt4OiAxMDB9LCB7XCI1MCVcIjoge3g6IC0yMH19IGFuZCB7IHg6IHtcIjAlXCI6IDEwMCwgXCI1MCVcIjogLTIwfSB9LCBhbmQgYW4gXCJlYXNlXCIgY2FuIGJlIHNldCBvbiBhbnkgb2JqZWN0LiBXZSBwb3B1bGF0ZSBhbiBcImFsbFByb3BzXCIgb2JqZWN0IHdpdGggYW4gQXJyYXkgZm9yIGVhY2ggcHJvcGVydHksIGxpa2Uge3g6IFt7fSwge31dLCB5Olt7fSwge31dfSB3aXRoIGRhdGEgZm9yIGVhY2ggcHJvcGVydHkgdHdlZW4uIFRoZSBvYmplY3RzIGhhdmUgYSBcInRcIiAodGltZSksIFwidlwiLCAodmFsdWUpLCBhbmQgXCJlXCIgKGVhc2UpIHByb3BlcnR5LiBUaGlzIGFsbG93cyB1cyB0byBwaWVjZSB0b2dldGhlciBhIHRpbWVsaW5lIGxhdGVyLlxuX3BhcnNlS2V5ZnJhbWUgPSBmdW5jdGlvbiBfcGFyc2VLZXlmcmFtZShwcm9wLCBvYmosIGFsbFByb3BzLCBlYXNlRWFjaCkge1xuICB2YXIgZWFzZSA9IG9iai5lYXNlIHx8IGVhc2VFYWNoIHx8IFwicG93ZXIxLmluT3V0XCIsXG4gICAgICBwLFxuICAgICAgYTtcblxuICBpZiAoX2lzQXJyYXkob2JqKSkge1xuICAgIGEgPSBhbGxQcm9wc1twcm9wXSB8fCAoYWxsUHJvcHNbcHJvcF0gPSBbXSk7IC8vIHQgPSB0aW1lIChvdXQgb2YgMTAwKSwgdiA9IHZhbHVlLCBlID0gZWFzZVxuXG4gICAgb2JqLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBpKSB7XG4gICAgICByZXR1cm4gYS5wdXNoKHtcbiAgICAgICAgdDogaSAvIChvYmoubGVuZ3RoIC0gMSkgKiAxMDAsXG4gICAgICAgIHY6IHZhbHVlLFxuICAgICAgICBlOiBlYXNlXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBmb3IgKHAgaW4gb2JqKSB7XG4gICAgICBhID0gYWxsUHJvcHNbcF0gfHwgKGFsbFByb3BzW3BdID0gW10pO1xuICAgICAgcCA9PT0gXCJlYXNlXCIgfHwgYS5wdXNoKHtcbiAgICAgICAgdDogcGFyc2VGbG9hdChwcm9wKSxcbiAgICAgICAgdjogb2JqW3BdLFxuICAgICAgICBlOiBlYXNlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn0sXG4gICAgX3BhcnNlRnVuY09yU3RyaW5nID0gZnVuY3Rpb24gX3BhcnNlRnVuY09yU3RyaW5nKHZhbHVlLCB0d2VlbiwgaSwgdGFyZ2V0LCB0YXJnZXRzKSB7XG4gIHJldHVybiBfaXNGdW5jdGlvbih2YWx1ZSkgPyB2YWx1ZS5jYWxsKHR3ZWVuLCBpLCB0YXJnZXQsIHRhcmdldHMpIDogX2lzU3RyaW5nKHZhbHVlKSAmJiB+dmFsdWUuaW5kZXhPZihcInJhbmRvbShcIikgPyBfcmVwbGFjZVJhbmRvbSh2YWx1ZSkgOiB2YWx1ZTtcbn0sXG4gICAgX3N0YWdnZXJUd2VlblByb3BzID0gX2NhbGxiYWNrTmFtZXMgKyBcInJlcGVhdCxyZXBlYXREZWxheSx5b3lvLHJlcGVhdFJlZnJlc2gseW95b0Vhc2UsYXV0b1JldmVydFwiLFxuICAgIF9zdGFnZ2VyUHJvcHNUb1NraXAgPSB7fTtcblxuX2ZvckVhY2hOYW1lKF9zdGFnZ2VyVHdlZW5Qcm9wcyArIFwiLGlkLHN0YWdnZXIsZGVsYXksZHVyYXRpb24scGF1c2VkLHNjcm9sbFRyaWdnZXJcIiwgZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIF9zdGFnZ2VyUHJvcHNUb1NraXBbbmFtZV0gPSAxO1xufSk7XG4vKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFRXRUVOXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cblxuZXhwb3J0IHZhciBUd2VlbiA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0FuaW1hdGlvbjIpIHtcbiAgX2luaGVyaXRzTG9vc2UoVHdlZW4sIF9BbmltYXRpb24yKTtcblxuICBmdW5jdGlvbiBUd2Vlbih0YXJnZXRzLCB2YXJzLCBwb3NpdGlvbiwgc2tpcEluaGVyaXQpIHtcbiAgICB2YXIgX3RoaXMzO1xuXG4gICAgaWYgKHR5cGVvZiB2YXJzID09PSBcIm51bWJlclwiKSB7XG4gICAgICBwb3NpdGlvbi5kdXJhdGlvbiA9IHZhcnM7XG4gICAgICB2YXJzID0gcG9zaXRpb247XG4gICAgICBwb3NpdGlvbiA9IG51bGw7XG4gICAgfVxuXG4gICAgX3RoaXMzID0gX0FuaW1hdGlvbjIuY2FsbCh0aGlzLCBza2lwSW5oZXJpdCA/IHZhcnMgOiBfaW5oZXJpdERlZmF1bHRzKHZhcnMpKSB8fCB0aGlzO1xuICAgIHZhciBfdGhpczMkdmFycyA9IF90aGlzMy52YXJzLFxuICAgICAgICBkdXJhdGlvbiA9IF90aGlzMyR2YXJzLmR1cmF0aW9uLFxuICAgICAgICBkZWxheSA9IF90aGlzMyR2YXJzLmRlbGF5LFxuICAgICAgICBpbW1lZGlhdGVSZW5kZXIgPSBfdGhpczMkdmFycy5pbW1lZGlhdGVSZW5kZXIsXG4gICAgICAgIHN0YWdnZXIgPSBfdGhpczMkdmFycy5zdGFnZ2VyLFxuICAgICAgICBvdmVyd3JpdGUgPSBfdGhpczMkdmFycy5vdmVyd3JpdGUsXG4gICAgICAgIGtleWZyYW1lcyA9IF90aGlzMyR2YXJzLmtleWZyYW1lcyxcbiAgICAgICAgZGVmYXVsdHMgPSBfdGhpczMkdmFycy5kZWZhdWx0cyxcbiAgICAgICAgc2Nyb2xsVHJpZ2dlciA9IF90aGlzMyR2YXJzLnNjcm9sbFRyaWdnZXIsXG4gICAgICAgIHlveW9FYXNlID0gX3RoaXMzJHZhcnMueW95b0Vhc2UsXG4gICAgICAgIHBhcmVudCA9IHZhcnMucGFyZW50IHx8IF9nbG9iYWxUaW1lbGluZSxcbiAgICAgICAgcGFyc2VkVGFyZ2V0cyA9IChfaXNBcnJheSh0YXJnZXRzKSB8fCBfaXNUeXBlZEFycmF5KHRhcmdldHMpID8gX2lzTnVtYmVyKHRhcmdldHNbMF0pIDogXCJsZW5ndGhcIiBpbiB2YXJzKSA/IFt0YXJnZXRzXSA6IHRvQXJyYXkodGFyZ2V0cyksXG4gICAgICAgIHRsLFxuICAgICAgICBpLFxuICAgICAgICBjb3B5LFxuICAgICAgICBsLFxuICAgICAgICBwLFxuICAgICAgICBjdXJUYXJnZXQsXG4gICAgICAgIHN0YWdnZXJGdW5jLFxuICAgICAgICBzdGFnZ2VyVmFyc1RvTWVyZ2U7XG4gICAgX3RoaXMzLl90YXJnZXRzID0gcGFyc2VkVGFyZ2V0cy5sZW5ndGggPyBfaGFybmVzcyhwYXJzZWRUYXJnZXRzKSA6IF93YXJuKFwiR1NBUCB0YXJnZXQgXCIgKyB0YXJnZXRzICsgXCIgbm90IGZvdW5kLiBodHRwczovL2dyZWVuc29jay5jb21cIiwgIV9jb25maWcubnVsbFRhcmdldFdhcm4pIHx8IFtdO1xuICAgIF90aGlzMy5fcHRMb29rdXAgPSBbXTsgLy9Qcm9wVHdlZW4gbG9va3VwLiBBbiBhcnJheSBjb250YWluaW5nIGFuIG9iamVjdCBmb3IgZWFjaCB0YXJnZXQsIGhhdmluZyBrZXlzIGZvciBlYWNoIHR3ZWVuaW5nIHByb3BlcnR5XG5cbiAgICBfdGhpczMuX292ZXJ3cml0ZSA9IG92ZXJ3cml0ZTtcblxuICAgIGlmIChrZXlmcmFtZXMgfHwgc3RhZ2dlciB8fCBfaXNGdW5jT3JTdHJpbmcoZHVyYXRpb24pIHx8IF9pc0Z1bmNPclN0cmluZyhkZWxheSkpIHtcbiAgICAgIHZhcnMgPSBfdGhpczMudmFycztcbiAgICAgIHRsID0gX3RoaXMzLnRpbWVsaW5lID0gbmV3IFRpbWVsaW5lKHtcbiAgICAgICAgZGF0YTogXCJuZXN0ZWRcIixcbiAgICAgICAgZGVmYXVsdHM6IGRlZmF1bHRzIHx8IHt9XG4gICAgICB9KTtcbiAgICAgIHRsLmtpbGwoKTtcbiAgICAgIHRsLnBhcmVudCA9IHRsLl9kcCA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMzKTtcbiAgICAgIHRsLl9zdGFydCA9IDA7XG5cbiAgICAgIGlmIChzdGFnZ2VyIHx8IF9pc0Z1bmNPclN0cmluZyhkdXJhdGlvbikgfHwgX2lzRnVuY09yU3RyaW5nKGRlbGF5KSkge1xuICAgICAgICBsID0gcGFyc2VkVGFyZ2V0cy5sZW5ndGg7XG4gICAgICAgIHN0YWdnZXJGdW5jID0gc3RhZ2dlciAmJiBkaXN0cmlidXRlKHN0YWdnZXIpO1xuXG4gICAgICAgIGlmIChfaXNPYmplY3Qoc3RhZ2dlcikpIHtcbiAgICAgICAgICAvL3VzZXJzIGNhbiBwYXNzIGluIGNhbGxiYWNrcyBsaWtlIG9uU3RhcnQvb25Db21wbGV0ZSBpbiB0aGUgc3RhZ2dlciBvYmplY3QuIFRoZXNlIHNob3VsZCBmaXJlIHdpdGggZWFjaCBpbmRpdmlkdWFsIHR3ZWVuLlxuICAgICAgICAgIGZvciAocCBpbiBzdGFnZ2VyKSB7XG4gICAgICAgICAgICBpZiAofl9zdGFnZ2VyVHdlZW5Qcm9wcy5pbmRleE9mKHApKSB7XG4gICAgICAgICAgICAgIHN0YWdnZXJWYXJzVG9NZXJnZSB8fCAoc3RhZ2dlclZhcnNUb01lcmdlID0ge30pO1xuICAgICAgICAgICAgICBzdGFnZ2VyVmFyc1RvTWVyZ2VbcF0gPSBzdGFnZ2VyW3BdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBjb3B5ID0gX2NvcHlFeGNsdWRpbmcodmFycywgX3N0YWdnZXJQcm9wc1RvU2tpcCk7XG4gICAgICAgICAgY29weS5zdGFnZ2VyID0gMDtcbiAgICAgICAgICB5b3lvRWFzZSAmJiAoY29weS55b3lvRWFzZSA9IHlveW9FYXNlKTtcbiAgICAgICAgICBzdGFnZ2VyVmFyc1RvTWVyZ2UgJiYgX21lcmdlKGNvcHksIHN0YWdnZXJWYXJzVG9NZXJnZSk7XG4gICAgICAgICAgY3VyVGFyZ2V0ID0gcGFyc2VkVGFyZ2V0c1tpXTsgLy9kb24ndCBqdXN0IGNvcHkgZHVyYXRpb24gb3IgZGVsYXkgYmVjYXVzZSBpZiB0aGV5J3JlIGEgc3RyaW5nIG9yIGZ1bmN0aW9uLCB3ZSdkIGVuZCB1cCBpbiBhbiBpbmZpbml0ZSBsb29wIGJlY2F1c2UgX2lzRnVuY09yU3RyaW5nKCkgd291bGQgZXZhbHVhdGUgYXMgdHJ1ZSBpbiB0aGUgY2hpbGQgdHdlZW5zLCBlbnRlcmluZyB0aGlzIGxvb3AsIGV0Yy4gU28gd2UgcGFyc2UgdGhlIHZhbHVlIHN0cmFpZ2h0IGZyb20gdmFycyBhbmQgZGVmYXVsdCB0byAwLlxuXG4gICAgICAgICAgY29weS5kdXJhdGlvbiA9ICtfcGFyc2VGdW5jT3JTdHJpbmcoZHVyYXRpb24sIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMzKSwgaSwgY3VyVGFyZ2V0LCBwYXJzZWRUYXJnZXRzKTtcbiAgICAgICAgICBjb3B5LmRlbGF5ID0gKCtfcGFyc2VGdW5jT3JTdHJpbmcoZGVsYXksIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMzKSwgaSwgY3VyVGFyZ2V0LCBwYXJzZWRUYXJnZXRzKSB8fCAwKSAtIF90aGlzMy5fZGVsYXk7XG5cbiAgICAgICAgICBpZiAoIXN0YWdnZXIgJiYgbCA9PT0gMSAmJiBjb3B5LmRlbGF5KSB7XG4gICAgICAgICAgICAvLyBpZiBzb21lb25lIGRvZXMgZGVsYXk6XCJyYW5kb20oMSwgNSlcIiwgcmVwZWF0Oi0xLCBmb3IgZXhhbXBsZSwgdGhlIGRlbGF5IHNob3VsZG4ndCBiZSBpbnNpZGUgdGhlIHJlcGVhdC5cbiAgICAgICAgICAgIF90aGlzMy5fZGVsYXkgPSBkZWxheSA9IGNvcHkuZGVsYXk7XG4gICAgICAgICAgICBfdGhpczMuX3N0YXJ0ICs9IGRlbGF5O1xuICAgICAgICAgICAgY29weS5kZWxheSA9IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGwudG8oY3VyVGFyZ2V0LCBjb3B5LCBzdGFnZ2VyRnVuYyA/IHN0YWdnZXJGdW5jKGksIGN1clRhcmdldCwgcGFyc2VkVGFyZ2V0cykgOiAwKTtcbiAgICAgICAgICB0bC5fZWFzZSA9IF9lYXNlTWFwLm5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICB0bC5kdXJhdGlvbigpID8gZHVyYXRpb24gPSBkZWxheSA9IDAgOiBfdGhpczMudGltZWxpbmUgPSAwOyAvLyBpZiB0aGUgdGltZWxpbmUncyBkdXJhdGlvbiBpcyAwLCB3ZSBkb24ndCBuZWVkIGEgdGltZWxpbmUgaW50ZXJuYWxseSFcbiAgICAgIH0gZWxzZSBpZiAoa2V5ZnJhbWVzKSB7XG4gICAgICAgIF9pbmhlcml0RGVmYXVsdHMoX3NldERlZmF1bHRzKHRsLnZhcnMuZGVmYXVsdHMsIHtcbiAgICAgICAgICBlYXNlOiBcIm5vbmVcIlxuICAgICAgICB9KSk7XG5cbiAgICAgICAgdGwuX2Vhc2UgPSBfcGFyc2VFYXNlKGtleWZyYW1lcy5lYXNlIHx8IHZhcnMuZWFzZSB8fCBcIm5vbmVcIik7XG4gICAgICAgIHZhciB0aW1lID0gMCxcbiAgICAgICAgICAgIGEsXG4gICAgICAgICAgICBrZixcbiAgICAgICAgICAgIHY7XG5cbiAgICAgICAgaWYgKF9pc0FycmF5KGtleWZyYW1lcykpIHtcbiAgICAgICAgICBrZXlmcmFtZXMuZm9yRWFjaChmdW5jdGlvbiAoZnJhbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0bC50byhwYXJzZWRUYXJnZXRzLCBmcmFtZSwgXCI+XCIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRsLmR1cmF0aW9uKCk7IC8vIHRvIGVuc3VyZSB0bC5fZHVyIGlzIGNhY2hlZCBiZWNhdXNlIHdlIHRhcCBpbnRvIGl0IGZvciBwZXJmb3JtYW5jZSBwdXJwb3NlcyBpbiB0aGUgcmVuZGVyKCkgbWV0aG9kLlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvcHkgPSB7fTtcblxuICAgICAgICAgIGZvciAocCBpbiBrZXlmcmFtZXMpIHtcbiAgICAgICAgICAgIHAgPT09IFwiZWFzZVwiIHx8IHAgPT09IFwiZWFzZUVhY2hcIiB8fCBfcGFyc2VLZXlmcmFtZShwLCBrZXlmcmFtZXNbcF0sIGNvcHksIGtleWZyYW1lcy5lYXNlRWFjaCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZm9yIChwIGluIGNvcHkpIHtcbiAgICAgICAgICAgIGEgPSBjb3B5W3BdLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGEudCAtIGIudDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGltZSA9IDA7XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIGtmID0gYVtpXTtcbiAgICAgICAgICAgICAgdiA9IHtcbiAgICAgICAgICAgICAgICBlYXNlOiBrZi5lLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAoa2YudCAtIChpID8gYVtpIC0gMV0udCA6IDApKSAvIDEwMCAqIGR1cmF0aW9uXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIHZbcF0gPSBrZi52O1xuICAgICAgICAgICAgICB0bC50byhwYXJzZWRUYXJnZXRzLCB2LCB0aW1lKTtcbiAgICAgICAgICAgICAgdGltZSArPSB2LmR1cmF0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRsLmR1cmF0aW9uKCkgPCBkdXJhdGlvbiAmJiB0bC50byh7fSwge1xuICAgICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uIC0gdGwuZHVyYXRpb24oKVxuICAgICAgICAgIH0pOyAvLyBpbiBjYXNlIGtleWZyYW1lcyBkaWRuJ3QgZ28gdG8gMTAwJVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGR1cmF0aW9uIHx8IF90aGlzMy5kdXJhdGlvbihkdXJhdGlvbiA9IHRsLmR1cmF0aW9uKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBfdGhpczMudGltZWxpbmUgPSAwOyAvL3NwZWVkIG9wdGltaXphdGlvbiwgZmFzdGVyIGxvb2t1cHMgKG5vIGdvaW5nIHVwIHRoZSBwcm90b3R5cGUgY2hhaW4pXG4gICAgfVxuXG4gICAgaWYgKG92ZXJ3cml0ZSA9PT0gdHJ1ZSAmJiAhX3N1cHByZXNzT3ZlcndyaXRlcykge1xuICAgICAgX292ZXJ3cml0aW5nVHdlZW4gPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzMyk7XG5cbiAgICAgIF9nbG9iYWxUaW1lbGluZS5raWxsVHdlZW5zT2YocGFyc2VkVGFyZ2V0cyk7XG5cbiAgICAgIF9vdmVyd3JpdGluZ1R3ZWVuID0gMDtcbiAgICB9XG5cbiAgICBfYWRkVG9UaW1lbGluZShwYXJlbnQsIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMzKSwgcG9zaXRpb24pO1xuXG4gICAgdmFycy5yZXZlcnNlZCAmJiBfdGhpczMucmV2ZXJzZSgpO1xuICAgIHZhcnMucGF1c2VkICYmIF90aGlzMy5wYXVzZWQodHJ1ZSk7XG5cbiAgICBpZiAoaW1tZWRpYXRlUmVuZGVyIHx8ICFkdXJhdGlvbiAmJiAha2V5ZnJhbWVzICYmIF90aGlzMy5fc3RhcnQgPT09IF9yb3VuZFByZWNpc2UocGFyZW50Ll90aW1lKSAmJiBfaXNOb3RGYWxzZShpbW1lZGlhdGVSZW5kZXIpICYmIF9oYXNOb1BhdXNlZEFuY2VzdG9ycyhfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzMykpICYmIHBhcmVudC5kYXRhICE9PSBcIm5lc3RlZFwiKSB7XG4gICAgICBfdGhpczMuX3RUaW1lID0gLV90aW55TnVtOyAvL2ZvcmNlcyBhIHJlbmRlciB3aXRob3V0IGhhdmluZyB0byBzZXQgdGhlIHJlbmRlcigpIFwiZm9yY2VcIiBwYXJhbWV0ZXIgdG8gdHJ1ZSBiZWNhdXNlIHdlIHdhbnQgdG8gYWxsb3cgbGF6eWluZyBieSBkZWZhdWx0ICh1c2luZyB0aGUgXCJmb3JjZVwiIHBhcmFtZXRlciBhbHdheXMgZm9yY2VzIGFuIGltbWVkaWF0ZSBmdWxsIHJlbmRlcilcblxuICAgICAgX3RoaXMzLnJlbmRlcihNYXRoLm1heCgwLCAtZGVsYXkpKTsgLy9pbiBjYXNlIGRlbGF5IGlzIG5lZ2F0aXZlXG5cbiAgICB9XG5cbiAgICBzY3JvbGxUcmlnZ2VyICYmIF9zY3JvbGxUcmlnZ2VyKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMzKSwgc2Nyb2xsVHJpZ2dlcik7XG4gICAgcmV0dXJuIF90aGlzMztcbiAgfVxuXG4gIHZhciBfcHJvdG8zID0gVHdlZW4ucHJvdG90eXBlO1xuXG4gIF9wcm90bzMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKHRvdGFsVGltZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKSB7XG4gICAgdmFyIHByZXZUaW1lID0gdGhpcy5fdGltZSxcbiAgICAgICAgdER1ciA9IHRoaXMuX3REdXIsXG4gICAgICAgIGR1ciA9IHRoaXMuX2R1cixcbiAgICAgICAgaXNOZWdhdGl2ZSA9IHRvdGFsVGltZSA8IDAsXG4gICAgICAgIHRUaW1lID0gdG90YWxUaW1lID4gdER1ciAtIF90aW55TnVtICYmICFpc05lZ2F0aXZlID8gdER1ciA6IHRvdGFsVGltZSA8IF90aW55TnVtID8gMCA6IHRvdGFsVGltZSxcbiAgICAgICAgdGltZSxcbiAgICAgICAgcHQsXG4gICAgICAgIGl0ZXJhdGlvbixcbiAgICAgICAgY3ljbGVEdXJhdGlvbixcbiAgICAgICAgcHJldkl0ZXJhdGlvbixcbiAgICAgICAgaXNZb3lvLFxuICAgICAgICByYXRpbyxcbiAgICAgICAgdGltZWxpbmUsXG4gICAgICAgIHlveW9FYXNlO1xuXG4gICAgaWYgKCFkdXIpIHtcbiAgICAgIF9yZW5kZXJaZXJvRHVyYXRpb25Ud2Vlbih0aGlzLCB0b3RhbFRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSk7XG4gICAgfSBlbHNlIGlmICh0VGltZSAhPT0gdGhpcy5fdFRpbWUgfHwgIXRvdGFsVGltZSB8fCBmb3JjZSB8fCAhdGhpcy5faW5pdHRlZCAmJiB0aGlzLl90VGltZSB8fCB0aGlzLl9zdGFydEF0ICYmIHRoaXMuX3pUaW1lIDwgMCAhPT0gaXNOZWdhdGl2ZSkge1xuICAgICAgLy90aGlzIHNlbnNlcyBpZiB3ZSdyZSBjcm9zc2luZyBvdmVyIHRoZSBzdGFydCB0aW1lLCBpbiB3aGljaCBjYXNlIHdlIG11c3QgcmVjb3JkIF96VGltZSBhbmQgZm9yY2UgdGhlIHJlbmRlciwgYnV0IHdlIGRvIGl0IGluIHRoaXMgbGVuZ3RoeSBjb25kaXRpb25hbCB3YXkgZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMgKHVzdWFsbHkgd2UgY2FuIHNraXAgdGhlIGNhbGN1bGF0aW9ucyk6IHRoaXMuX2luaXR0ZWQgJiYgKHRoaXMuX3pUaW1lIDwgMCkgIT09ICh0b3RhbFRpbWUgPCAwKVxuICAgICAgdGltZSA9IHRUaW1lO1xuICAgICAgdGltZWxpbmUgPSB0aGlzLnRpbWVsaW5lO1xuXG4gICAgICBpZiAodGhpcy5fcmVwZWF0KSB7XG4gICAgICAgIC8vYWRqdXN0IHRoZSB0aW1lIGZvciByZXBlYXRzIGFuZCB5b3lvc1xuICAgICAgICBjeWNsZUR1cmF0aW9uID0gZHVyICsgdGhpcy5fckRlbGF5O1xuXG4gICAgICAgIGlmICh0aGlzLl9yZXBlYXQgPCAtMSAmJiBpc05lZ2F0aXZlKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMudG90YWxUaW1lKGN5Y2xlRHVyYXRpb24gKiAxMDAgKyB0b3RhbFRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aW1lID0gX3JvdW5kUHJlY2lzZSh0VGltZSAlIGN5Y2xlRHVyYXRpb24pOyAvL3JvdW5kIHRvIGF2b2lkIGZsb2F0aW5nIHBvaW50IGVycm9ycy4gKDQgJSAwLjggc2hvdWxkIGJlIDAgYnV0IHNvbWUgYnJvd3NlcnMgcmVwb3J0IGl0IGFzIDAuNzk5OTk5OTkhKVxuXG4gICAgICAgIGlmICh0VGltZSA9PT0gdER1cikge1xuICAgICAgICAgIC8vIHRoZSB0RHVyID09PSB0VGltZSBpcyBmb3IgZWRnZSBjYXNlcyB3aGVyZSB0aGVyZSdzIGEgbGVuZ3RoeSBkZWNpbWFsIG9uIHRoZSBkdXJhdGlvbiBhbmQgaXQgbWF5IHJlYWNoIHRoZSB2ZXJ5IGVuZCBidXQgdGhlIHRpbWUgaXMgcmVuZGVyZWQgYXMgbm90LXF1aXRlLXRoZXJlIChyZW1lbWJlciwgdER1ciBpcyByb3VuZGVkIHRvIDQgZGVjaW1hbHMgd2hlcmVhcyBkdXIgaXNuJ3QpXG4gICAgICAgICAgaXRlcmF0aW9uID0gdGhpcy5fcmVwZWF0O1xuICAgICAgICAgIHRpbWUgPSBkdXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlcmF0aW9uID0gfn4odFRpbWUgLyBjeWNsZUR1cmF0aW9uKTtcblxuICAgICAgICAgIGlmIChpdGVyYXRpb24gJiYgaXRlcmF0aW9uID09PSB0VGltZSAvIGN5Y2xlRHVyYXRpb24pIHtcbiAgICAgICAgICAgIHRpbWUgPSBkdXI7XG4gICAgICAgICAgICBpdGVyYXRpb24tLTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aW1lID4gZHVyICYmICh0aW1lID0gZHVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlzWW95byA9IHRoaXMuX3lveW8gJiYgaXRlcmF0aW9uICYgMTtcblxuICAgICAgICBpZiAoaXNZb3lvKSB7XG4gICAgICAgICAgeW95b0Vhc2UgPSB0aGlzLl95RWFzZTtcbiAgICAgICAgICB0aW1lID0gZHVyIC0gdGltZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByZXZJdGVyYXRpb24gPSBfYW5pbWF0aW9uQ3ljbGUodGhpcy5fdFRpbWUsIGN5Y2xlRHVyYXRpb24pO1xuXG4gICAgICAgIGlmICh0aW1lID09PSBwcmV2VGltZSAmJiAhZm9yY2UgJiYgdGhpcy5faW5pdHRlZCkge1xuICAgICAgICAgIC8vY291bGQgYmUgZHVyaW5nIHRoZSByZXBlYXREZWxheSBwYXJ0LiBObyBuZWVkIHRvIHJlbmRlciBhbmQgZmlyZSBjYWxsYmFja3MuXG4gICAgICAgICAgdGhpcy5fdFRpbWUgPSB0VGltZTtcbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpdGVyYXRpb24gIT09IHByZXZJdGVyYXRpb24pIHtcbiAgICAgICAgICB0aW1lbGluZSAmJiB0aGlzLl95RWFzZSAmJiBfcHJvcGFnYXRlWW95b0Vhc2UodGltZWxpbmUsIGlzWW95byk7IC8vcmVwZWF0UmVmcmVzaCBmdW5jdGlvbmFsaXR5XG5cbiAgICAgICAgICBpZiAodGhpcy52YXJzLnJlcGVhdFJlZnJlc2ggJiYgIWlzWW95byAmJiAhdGhpcy5fbG9jaykge1xuICAgICAgICAgICAgdGhpcy5fbG9jayA9IGZvcmNlID0gMTsgLy9mb3JjZSwgb3RoZXJ3aXNlIGlmIGxhenkgaXMgdHJ1ZSwgdGhlIF9hdHRlbXB0SW5pdFR3ZWVuKCkgd2lsbCByZXR1cm4gYW5kIHdlJ2xsIGp1bXAgb3V0IGFuZCBnZXQgY2F1Z2h0IGJvdW5jaW5nIG9uIGVhY2ggdGljay5cblxuICAgICAgICAgICAgdGhpcy5yZW5kZXIoX3JvdW5kUHJlY2lzZShjeWNsZUR1cmF0aW9uICogaXRlcmF0aW9uKSwgdHJ1ZSkuaW52YWxpZGF0ZSgpLl9sb2NrID0gMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLl9pbml0dGVkKSB7XG4gICAgICAgIGlmIChfYXR0ZW1wdEluaXRUd2Vlbih0aGlzLCBpc05lZ2F0aXZlID8gdG90YWxUaW1lIDogdGltZSwgZm9yY2UsIHN1cHByZXNzRXZlbnRzKSkge1xuICAgICAgICAgIHRoaXMuX3RUaW1lID0gMDsgLy8gaW4gY29uc3RydWN0b3IgaWYgaW1tZWRpYXRlUmVuZGVyIGlzIHRydWUsIHdlIHNldCBfdFRpbWUgdG8gLV90aW55TnVtIHRvIGhhdmUgdGhlIHBsYXloZWFkIGNyb3NzIHRoZSBzdGFydGluZyBwb2ludCBidXQgd2UgY2FuJ3QgbGVhdmUgX3RUaW1lIGFzIGEgbmVnYXRpdmUgbnVtYmVyLlxuXG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJldlRpbWUgIT09IHRoaXMuX3RpbWUpIHtcbiAgICAgICAgICAvLyByYXJlIGVkZ2UgY2FzZSAtIGR1cmluZyBpbml0aWFsaXphdGlvbiwgYW4gb25VcGRhdGUgaW4gdGhlIF9zdGFydEF0ICguZnJvbVRvKCkpIG1pZ2h0IGZvcmNlIHRoaXMgdHdlZW4gdG8gcmVuZGVyIGF0IGEgZGlmZmVyZW50IHNwb3QgaW4gd2hpY2ggY2FzZSB3ZSBzaG91bGQgZGl0Y2ggdGhpcyByZW5kZXIoKSBjYWxsIHNvIHRoYXQgaXQgZG9lc24ndCByZXZlcnQgdGhlIHZhbHVlcy5cbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkdXIgIT09IHRoaXMuX2R1cikge1xuICAgICAgICAgIC8vIHdoaWxlIGluaXR0aW5nLCBhIHBsdWdpbiBsaWtlIEluZXJ0aWFQbHVnaW4gbWlnaHQgYWx0ZXIgdGhlIGR1cmF0aW9uLCBzbyByZXJ1biBmcm9tIHRoZSBzdGFydCB0byBlbnN1cmUgZXZlcnl0aGluZyByZW5kZXJzIGFzIGl0IHNob3VsZC5cbiAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIodG90YWxUaW1lLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3RUaW1lID0gdFRpbWU7XG4gICAgICB0aGlzLl90aW1lID0gdGltZTtcblxuICAgICAgaWYgKCF0aGlzLl9hY3QgJiYgdGhpcy5fdHMpIHtcbiAgICAgICAgdGhpcy5fYWN0ID0gMTsgLy9hcyBsb25nIGFzIGl0J3Mgbm90IHBhdXNlZCwgZm9yY2UgaXQgdG8gYmUgYWN0aXZlIHNvIHRoYXQgaWYgdGhlIHVzZXIgcmVuZGVycyBpbmRlcGVuZGVudCBvZiB0aGUgcGFyZW50IHRpbWVsaW5lLCBpdCdsbCBiZSBmb3JjZWQgdG8gcmUtcmVuZGVyIG9uIHRoZSBuZXh0IHRpY2suXG5cbiAgICAgICAgdGhpcy5fbGF6eSA9IDA7XG4gICAgICB9XG5cbiAgICAgIHRoaXMucmF0aW8gPSByYXRpbyA9ICh5b3lvRWFzZSB8fCB0aGlzLl9lYXNlKSh0aW1lIC8gZHVyKTtcblxuICAgICAgaWYgKHRoaXMuX2Zyb20pIHtcbiAgICAgICAgdGhpcy5yYXRpbyA9IHJhdGlvID0gMSAtIHJhdGlvO1xuICAgICAgfVxuXG4gICAgICBpZiAodGltZSAmJiAhcHJldlRpbWUgJiYgIXN1cHByZXNzRXZlbnRzKSB7XG4gICAgICAgIF9jYWxsYmFjayh0aGlzLCBcIm9uU3RhcnRcIik7XG5cbiAgICAgICAgaWYgKHRoaXMuX3RUaW1lICE9PSB0VGltZSkge1xuICAgICAgICAgIC8vIGluIGNhc2UgdGhlIG9uU3RhcnQgdHJpZ2dlcmVkIGEgcmVuZGVyIGF0IGEgZGlmZmVyZW50IHNwb3QsIGVqZWN0LiBMaWtlIGlmIHNvbWVvbmUgZGlkIGFuaW1hdGlvbi5wYXVzZSgwLjUpIG9yIHNvbWV0aGluZyBpbnNpZGUgdGhlIG9uU3RhcnQuXG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcHQgPSB0aGlzLl9wdDtcblxuICAgICAgd2hpbGUgKHB0KSB7XG4gICAgICAgIHB0LnIocmF0aW8sIHB0LmQpO1xuICAgICAgICBwdCA9IHB0Ll9uZXh0O1xuICAgICAgfVxuXG4gICAgICB0aW1lbGluZSAmJiB0aW1lbGluZS5yZW5kZXIodG90YWxUaW1lIDwgMCA/IHRvdGFsVGltZSA6ICF0aW1lICYmIGlzWW95byA/IC1fdGlueU51bSA6IHRpbWVsaW5lLl9kdXIgKiB0aW1lbGluZS5fZWFzZSh0aW1lIC8gdGhpcy5fZHVyKSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKSB8fCB0aGlzLl9zdGFydEF0ICYmICh0aGlzLl96VGltZSA9IHRvdGFsVGltZSk7XG5cbiAgICAgIGlmICh0aGlzLl9vblVwZGF0ZSAmJiAhc3VwcHJlc3NFdmVudHMpIHtcbiAgICAgICAgaXNOZWdhdGl2ZSAmJiBfcmV3aW5kU3RhcnRBdCh0aGlzLCB0b3RhbFRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSk7IC8vbm90ZTogZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMsIHdlIHR1Y2sgdGhpcyBjb25kaXRpb25hbCBsb2dpYyBpbnNpZGUgbGVzcyB0cmF2ZWxlZCBhcmVhcyAobW9zdCB0d2VlbnMgZG9uJ3QgaGF2ZSBhbiBvblVwZGF0ZSkuIFdlJ2QganVzdCBoYXZlIGl0IGF0IHRoZSBlbmQgYmVmb3JlIHRoZSBvbkNvbXBsZXRlLCBidXQgdGhlIHZhbHVlcyBzaG91bGQgYmUgdXBkYXRlZCBiZWZvcmUgYW55IG9uVXBkYXRlIGlzIGNhbGxlZCwgc28gd2UgQUxTTyBwdXQgaXQgaGVyZSBhbmQgdGhlbiBpZiBpdCdzIG5vdCBjYWxsZWQsIHdlIGRvIHNvIGxhdGVyIG5lYXIgdGhlIG9uQ29tcGxldGUuXG5cbiAgICAgICAgX2NhbGxiYWNrKHRoaXMsIFwib25VcGRhdGVcIik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3JlcGVhdCAmJiBpdGVyYXRpb24gIT09IHByZXZJdGVyYXRpb24gJiYgdGhpcy52YXJzLm9uUmVwZWF0ICYmICFzdXBwcmVzc0V2ZW50cyAmJiB0aGlzLnBhcmVudCAmJiBfY2FsbGJhY2sodGhpcywgXCJvblJlcGVhdFwiKTtcblxuICAgICAgaWYgKCh0VGltZSA9PT0gdGhpcy5fdER1ciB8fCAhdFRpbWUpICYmIHRoaXMuX3RUaW1lID09PSB0VGltZSkge1xuICAgICAgICBpc05lZ2F0aXZlICYmICF0aGlzLl9vblVwZGF0ZSAmJiBfcmV3aW5kU3RhcnRBdCh0aGlzLCB0b3RhbFRpbWUsIHRydWUsIHRydWUpO1xuICAgICAgICAodG90YWxUaW1lIHx8ICFkdXIpICYmICh0VGltZSA9PT0gdGhpcy5fdER1ciAmJiB0aGlzLl90cyA+IDAgfHwgIXRUaW1lICYmIHRoaXMuX3RzIDwgMCkgJiYgX3JlbW92ZUZyb21QYXJlbnQodGhpcywgMSk7IC8vIGRvbid0IHJlbW92ZSBpZiB3ZSdyZSByZW5kZXJpbmcgYXQgZXhhY3RseSBhIHRpbWUgb2YgMCwgYXMgdGhlcmUgY291bGQgYmUgYXV0b1JldmVydCB2YWx1ZXMgdGhhdCBzaG91bGQgZ2V0IHNldCBvbiB0aGUgbmV4dCB0aWNrIChpZiB0aGUgcGxheWhlYWQgZ29lcyBiYWNrd2FyZCBiZXlvbmQgdGhlIHN0YXJ0VGltZSwgbmVnYXRpdmUgdG90YWxUaW1lKS4gRG9uJ3QgcmVtb3ZlIGlmIHRoZSB0aW1lbGluZSBpcyByZXZlcnNlZCBhbmQgdGhlIHBsYXloZWFkIGlzbid0IGF0IDAsIG90aGVyd2lzZSB0bC5wcm9ncmVzcygxKS5yZXZlcnNlKCkgd29uJ3Qgd29yay4gT25seSByZW1vdmUgaWYgdGhlIHBsYXloZWFkIGlzIGF0IHRoZSBlbmQgYW5kIHRpbWVTY2FsZSBpcyBwb3NpdGl2ZSwgb3IgaWYgdGhlIHBsYXloZWFkIGlzIGF0IDAgYW5kIHRoZSB0aW1lU2NhbGUgaXMgbmVnYXRpdmUuXG5cbiAgICAgICAgaWYgKCFzdXBwcmVzc0V2ZW50cyAmJiAhKGlzTmVnYXRpdmUgJiYgIXByZXZUaW1lKSAmJiAodFRpbWUgfHwgcHJldlRpbWUpKSB7XG4gICAgICAgICAgLy8gaWYgcHJldlRpbWUgYW5kIHRUaW1lIGFyZSB6ZXJvLCB3ZSBzaG91bGRuJ3QgZmlyZSB0aGUgb25SZXZlcnNlQ29tcGxldGUuIFRoaXMgY291bGQgaGFwcGVuIGlmIHlvdSBnc2FwLnRvKC4uLiB7cGF1c2VkOnRydWV9KS5wbGF5KCk7XG4gICAgICAgICAgX2NhbGxiYWNrKHRoaXMsIHRUaW1lID09PSB0RHVyID8gXCJvbkNvbXBsZXRlXCIgOiBcIm9uUmV2ZXJzZUNvbXBsZXRlXCIsIHRydWUpO1xuXG4gICAgICAgICAgdGhpcy5fcHJvbSAmJiAhKHRUaW1lIDwgdER1ciAmJiB0aGlzLnRpbWVTY2FsZSgpID4gMCkgJiYgdGhpcy5fcHJvbSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvMy50YXJnZXRzID0gZnVuY3Rpb24gdGFyZ2V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFyZ2V0cztcbiAgfTtcblxuICBfcHJvdG8zLmludmFsaWRhdGUgPSBmdW5jdGlvbiBpbnZhbGlkYXRlKCkge1xuICAgIHRoaXMuX3B0ID0gdGhpcy5fb3AgPSB0aGlzLl9zdGFydEF0ID0gdGhpcy5fb25VcGRhdGUgPSB0aGlzLl9sYXp5ID0gdGhpcy5yYXRpbyA9IDA7XG4gICAgdGhpcy5fcHRMb29rdXAgPSBbXTtcbiAgICB0aGlzLnRpbWVsaW5lICYmIHRoaXMudGltZWxpbmUuaW52YWxpZGF0ZSgpO1xuICAgIHJldHVybiBfQW5pbWF0aW9uMi5wcm90b3R5cGUuaW52YWxpZGF0ZS5jYWxsKHRoaXMpO1xuICB9O1xuXG4gIF9wcm90bzMucmVzZXRUbyA9IGZ1bmN0aW9uIHJlc2V0VG8ocHJvcGVydHksIHZhbHVlLCBzdGFydCwgc3RhcnRJc1JlbGF0aXZlKSB7XG4gICAgX3RpY2tlckFjdGl2ZSB8fCBfdGlja2VyLndha2UoKTtcbiAgICB0aGlzLl90cyB8fCB0aGlzLnBsYXkoKTtcbiAgICB2YXIgdGltZSA9IE1hdGgubWluKHRoaXMuX2R1ciwgKHRoaXMuX2RwLl90aW1lIC0gdGhpcy5fc3RhcnQpICogdGhpcy5fdHMpLFxuICAgICAgICByYXRpbztcbiAgICB0aGlzLl9pbml0dGVkIHx8IF9pbml0VHdlZW4odGhpcywgdGltZSk7XG4gICAgcmF0aW8gPSB0aGlzLl9lYXNlKHRpbWUgLyB0aGlzLl9kdXIpOyAvLyBkb24ndCBqdXN0IGdldCB0d2Vlbi5yYXRpbyBiZWNhdXNlIGl0IG1heSBub3QgaGF2ZSByZW5kZXJlZCB5ZXQuXG4gICAgLy8gcG9zc2libGUgZnV0dXJlIGFkZGl0aW9uIHRvIGFsbG93IGFuIG9iamVjdCB3aXRoIG11bHRpcGxlIHZhbHVlcyB0byB1cGRhdGUsIGxpa2UgdHdlZW4ucmVzZXRUbyh7eDogMTAwLCB5OiAyMDB9KTsgQXQgdGhpcyBwb2ludCwgaXQgZG9lc24ndCBzZWVtIHdvcnRoIHRoZSBhZGRlZCBrYiBnaXZlbiB0aGUgZmFjdCB0aGF0IG1vc3QgdXNlcnMgd2lsbCBsaWtlbHkgb3B0IGZvciB0aGUgY29udmVuaWVudCBnc2FwLnF1aWNrVG8oKSB3YXkgb2YgaW50ZXJhY3Rpbmcgd2l0aCB0aGlzIG1ldGhvZC5cbiAgICAvLyBpZiAoX2lzT2JqZWN0KHByb3BlcnR5KSkgeyAvLyBwZXJmb3JtYW5jZSBvcHRpbWl6YXRpb25cbiAgICAvLyBcdGZvciAocCBpbiBwcm9wZXJ0eSkge1xuICAgIC8vIFx0XHRpZiAoX3VwZGF0ZVByb3BUd2VlbnModGhpcywgcCwgcHJvcGVydHlbcF0sIHZhbHVlID8gdmFsdWVbcF0gOiBudWxsLCBzdGFydCwgcmF0aW8sIHRpbWUpKSB7XG4gICAgLy8gXHRcdFx0cmV0dXJuIHRoaXMucmVzZXRUbyhwcm9wZXJ0eSwgdmFsdWUsIHN0YXJ0LCBzdGFydElzUmVsYXRpdmUpOyAvLyBpZiBhIFByb3BUd2VlbiB3YXNuJ3QgZm91bmQgZm9yIHRoZSBwcm9wZXJ0eSwgaXQnbGwgZ2V0IGZvcmNlZCB3aXRoIGEgcmUtaW5pdGlhbGl6YXRpb24gc28gd2UgbmVlZCB0byBqdW1wIG91dCBhbmQgc3RhcnQgb3ZlciBhZ2Fpbi5cbiAgICAvLyBcdFx0fVxuICAgIC8vIFx0fVxuICAgIC8vIH0gZWxzZSB7XG5cbiAgICBpZiAoX3VwZGF0ZVByb3BUd2VlbnModGhpcywgcHJvcGVydHksIHZhbHVlLCBzdGFydCwgc3RhcnRJc1JlbGF0aXZlLCByYXRpbywgdGltZSkpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlc2V0VG8ocHJvcGVydHksIHZhbHVlLCBzdGFydCwgc3RhcnRJc1JlbGF0aXZlKTsgLy8gaWYgYSBQcm9wVHdlZW4gd2Fzbid0IGZvdW5kIGZvciB0aGUgcHJvcGVydHksIGl0J2xsIGdldCBmb3JjZWQgd2l0aCBhIHJlLWluaXRpYWxpemF0aW9uIHNvIHdlIG5lZWQgdG8ganVtcCBvdXQgYW5kIHN0YXJ0IG92ZXIgYWdhaW4uXG4gICAgfSAvL31cblxuXG4gICAgX2FsaWduUGxheWhlYWQodGhpcywgMCk7XG5cbiAgICB0aGlzLnBhcmVudCB8fCBfYWRkTGlua2VkTGlzdEl0ZW0odGhpcy5fZHAsIHRoaXMsIFwiX2ZpcnN0XCIsIFwiX2xhc3RcIiwgdGhpcy5fZHAuX3NvcnQgPyBcIl9zdGFydFwiIDogMCk7XG4gICAgcmV0dXJuIHRoaXMucmVuZGVyKDApO1xuICB9O1xuXG4gIF9wcm90bzMua2lsbCA9IGZ1bmN0aW9uIGtpbGwodGFyZ2V0cywgdmFycykge1xuICAgIGlmICh2YXJzID09PSB2b2lkIDApIHtcbiAgICAgIHZhcnMgPSBcImFsbFwiO1xuICAgIH1cblxuICAgIGlmICghdGFyZ2V0cyAmJiAoIXZhcnMgfHwgdmFycyA9PT0gXCJhbGxcIikpIHtcbiAgICAgIHRoaXMuX2xhenkgPSB0aGlzLl9wdCA9IDA7XG4gICAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyBfaW50ZXJydXB0KHRoaXMpIDogdGhpcztcbiAgICB9XG5cbiAgICBpZiAodGhpcy50aW1lbGluZSkge1xuICAgICAgdmFyIHREdXIgPSB0aGlzLnRpbWVsaW5lLnRvdGFsRHVyYXRpb24oKTtcbiAgICAgIHRoaXMudGltZWxpbmUua2lsbFR3ZWVuc09mKHRhcmdldHMsIHZhcnMsIF9vdmVyd3JpdGluZ1R3ZWVuICYmIF9vdmVyd3JpdGluZ1R3ZWVuLnZhcnMub3ZlcndyaXRlICE9PSB0cnVlKS5fZmlyc3QgfHwgX2ludGVycnVwdCh0aGlzKTsgLy8gaWYgbm90aGluZyBpcyBsZWZ0IHR3ZWVuaW5nLCBpbnRlcnJ1cHQuXG5cbiAgICAgIHRoaXMucGFyZW50ICYmIHREdXIgIT09IHRoaXMudGltZWxpbmUudG90YWxEdXJhdGlvbigpICYmIF9zZXREdXJhdGlvbih0aGlzLCB0aGlzLl9kdXIgKiB0aGlzLnRpbWVsaW5lLl90RHVyIC8gdER1ciwgMCwgMSk7IC8vIGlmIGEgbmVzdGVkIHR3ZWVuIGlzIGtpbGxlZCB0aGF0IGNoYW5nZXMgdGhlIGR1cmF0aW9uLCBpdCBzaG91bGQgYWZmZWN0IHRoaXMgdHdlZW4ncyBkdXJhdGlvbi4gV2UgbXVzdCB1c2UgdGhlIHJhdGlvLCB0aG91Z2gsIGJlY2F1c2Ugc29tZXRpbWVzIHRoZSBpbnRlcm5hbCB0aW1lbGluZSBpcyBzdHJldGNoZWQgbGlrZSBmb3Iga2V5ZnJhbWVzIHdoZXJlIHRoZXkgZG9uJ3QgYWxsIGFkZCB1cCB0byB3aGF0ZXZlciB0aGUgcGFyZW50IHR3ZWVuJ3MgZHVyYXRpb24gd2FzIHNldCB0by5cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdmFyIHBhcnNlZFRhcmdldHMgPSB0aGlzLl90YXJnZXRzLFxuICAgICAgICBraWxsaW5nVGFyZ2V0cyA9IHRhcmdldHMgPyB0b0FycmF5KHRhcmdldHMpIDogcGFyc2VkVGFyZ2V0cyxcbiAgICAgICAgcHJvcFR3ZWVuTG9va3VwID0gdGhpcy5fcHRMb29rdXAsXG4gICAgICAgIGZpcnN0UFQgPSB0aGlzLl9wdCxcbiAgICAgICAgb3ZlcndyaXR0ZW5Qcm9wcyxcbiAgICAgICAgY3VyTG9va3VwLFxuICAgICAgICBjdXJPdmVyd3JpdGVQcm9wcyxcbiAgICAgICAgcHJvcHMsXG4gICAgICAgIHAsXG4gICAgICAgIHB0LFxuICAgICAgICBpO1xuXG4gICAgaWYgKCghdmFycyB8fCB2YXJzID09PSBcImFsbFwiKSAmJiBfYXJyYXlzTWF0Y2gocGFyc2VkVGFyZ2V0cywga2lsbGluZ1RhcmdldHMpKSB7XG4gICAgICB2YXJzID09PSBcImFsbFwiICYmICh0aGlzLl9wdCA9IDApO1xuICAgICAgcmV0dXJuIF9pbnRlcnJ1cHQodGhpcyk7XG4gICAgfVxuXG4gICAgb3ZlcndyaXR0ZW5Qcm9wcyA9IHRoaXMuX29wID0gdGhpcy5fb3AgfHwgW107XG5cbiAgICBpZiAodmFycyAhPT0gXCJhbGxcIikge1xuICAgICAgLy9zbyBwZW9wbGUgY2FuIHBhc3MgaW4gYSBjb21tYS1kZWxpbWl0ZWQgbGlzdCBvZiBwcm9wZXJ0eSBuYW1lc1xuICAgICAgaWYgKF9pc1N0cmluZyh2YXJzKSkge1xuICAgICAgICBwID0ge307XG5cbiAgICAgICAgX2ZvckVhY2hOYW1lKHZhcnMsIGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgcmV0dXJuIHBbbmFtZV0gPSAxO1xuICAgICAgICB9KTtcblxuICAgICAgICB2YXJzID0gcDtcbiAgICAgIH1cblxuICAgICAgdmFycyA9IF9hZGRBbGlhc2VzVG9WYXJzKHBhcnNlZFRhcmdldHMsIHZhcnMpO1xuICAgIH1cblxuICAgIGkgPSBwYXJzZWRUYXJnZXRzLmxlbmd0aDtcblxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIGlmICh+a2lsbGluZ1RhcmdldHMuaW5kZXhPZihwYXJzZWRUYXJnZXRzW2ldKSkge1xuICAgICAgICBjdXJMb29rdXAgPSBwcm9wVHdlZW5Mb29rdXBbaV07XG5cbiAgICAgICAgaWYgKHZhcnMgPT09IFwiYWxsXCIpIHtcbiAgICAgICAgICBvdmVyd3JpdHRlblByb3BzW2ldID0gdmFycztcbiAgICAgICAgICBwcm9wcyA9IGN1ckxvb2t1cDtcbiAgICAgICAgICBjdXJPdmVyd3JpdGVQcm9wcyA9IHt9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGN1ck92ZXJ3cml0ZVByb3BzID0gb3ZlcndyaXR0ZW5Qcm9wc1tpXSA9IG92ZXJ3cml0dGVuUHJvcHNbaV0gfHwge307XG4gICAgICAgICAgcHJvcHMgPSB2YXJzO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChwIGluIHByb3BzKSB7XG4gICAgICAgICAgcHQgPSBjdXJMb29rdXAgJiYgY3VyTG9va3VwW3BdO1xuXG4gICAgICAgICAgaWYgKHB0KSB7XG4gICAgICAgICAgICBpZiAoIShcImtpbGxcIiBpbiBwdC5kKSB8fCBwdC5kLmtpbGwocCkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgX3JlbW92ZUxpbmtlZExpc3RJdGVtKHRoaXMsIHB0LCBcIl9wdFwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVsZXRlIGN1ckxvb2t1cFtwXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoY3VyT3ZlcndyaXRlUHJvcHMgIT09IFwiYWxsXCIpIHtcbiAgICAgICAgICAgIGN1ck92ZXJ3cml0ZVByb3BzW3BdID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9pbml0dGVkICYmICF0aGlzLl9wdCAmJiBmaXJzdFBUICYmIF9pbnRlcnJ1cHQodGhpcyk7IC8vaWYgYWxsIHR3ZWVuaW5nIHByb3BlcnRpZXMgYXJlIGtpbGxlZCwga2lsbCB0aGUgdHdlZW4uIFdpdGhvdXQgdGhpcyBsaW5lLCBpZiB0aGVyZSdzIGEgdHdlZW4gd2l0aCBtdWx0aXBsZSB0YXJnZXRzIGFuZCB0aGVuIHlvdSBraWxsVHdlZW5zT2YoKSBlYWNoIHRhcmdldCBpbmRpdmlkdWFsbHksIHRoZSB0d2VlbiB3b3VsZCB0ZWNobmljYWxseSBzdGlsbCByZW1haW4gYWN0aXZlIGFuZCBmaXJlIGl0cyBvbkNvbXBsZXRlIGV2ZW4gdGhvdWdoIHRoZXJlIGFyZW4ndCBhbnkgbW9yZSBwcm9wZXJ0aWVzIHR3ZWVuaW5nLlxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgVHdlZW4udG8gPSBmdW5jdGlvbiB0byh0YXJnZXRzLCB2YXJzKSB7XG4gICAgcmV0dXJuIG5ldyBUd2Vlbih0YXJnZXRzLCB2YXJzLCBhcmd1bWVudHNbMl0pO1xuICB9O1xuXG4gIFR3ZWVuLmZyb20gPSBmdW5jdGlvbiBmcm9tKHRhcmdldHMsIHZhcnMpIHtcbiAgICByZXR1cm4gX2NyZWF0ZVR3ZWVuVHlwZSgxLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIFR3ZWVuLmRlbGF5ZWRDYWxsID0gZnVuY3Rpb24gZGVsYXllZENhbGwoZGVsYXksIGNhbGxiYWNrLCBwYXJhbXMsIHNjb3BlKSB7XG4gICAgcmV0dXJuIG5ldyBUd2VlbihjYWxsYmFjaywgMCwge1xuICAgICAgaW1tZWRpYXRlUmVuZGVyOiBmYWxzZSxcbiAgICAgIGxhenk6IGZhbHNlLFxuICAgICAgb3ZlcndyaXRlOiBmYWxzZSxcbiAgICAgIGRlbGF5OiBkZWxheSxcbiAgICAgIG9uQ29tcGxldGU6IGNhbGxiYWNrLFxuICAgICAgb25SZXZlcnNlQ29tcGxldGU6IGNhbGxiYWNrLFxuICAgICAgb25Db21wbGV0ZVBhcmFtczogcGFyYW1zLFxuICAgICAgb25SZXZlcnNlQ29tcGxldGVQYXJhbXM6IHBhcmFtcyxcbiAgICAgIGNhbGxiYWNrU2NvcGU6IHNjb3BlXG4gICAgfSk7XG4gIH07XG5cbiAgVHdlZW4uZnJvbVRvID0gZnVuY3Rpb24gZnJvbVRvKHRhcmdldHMsIGZyb21WYXJzLCB0b1ZhcnMpIHtcbiAgICByZXR1cm4gX2NyZWF0ZVR3ZWVuVHlwZSgyLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIFR3ZWVuLnNldCA9IGZ1bmN0aW9uIHNldCh0YXJnZXRzLCB2YXJzKSB7XG4gICAgdmFycy5kdXJhdGlvbiA9IDA7XG4gICAgdmFycy5yZXBlYXREZWxheSB8fCAodmFycy5yZXBlYXQgPSAwKTtcbiAgICByZXR1cm4gbmV3IFR3ZWVuKHRhcmdldHMsIHZhcnMpO1xuICB9O1xuXG4gIFR3ZWVuLmtpbGxUd2VlbnNPZiA9IGZ1bmN0aW9uIGtpbGxUd2VlbnNPZih0YXJnZXRzLCBwcm9wcywgb25seUFjdGl2ZSkge1xuICAgIHJldHVybiBfZ2xvYmFsVGltZWxpbmUua2lsbFR3ZWVuc09mKHRhcmdldHMsIHByb3BzLCBvbmx5QWN0aXZlKTtcbiAgfTtcblxuICByZXR1cm4gVHdlZW47XG59KEFuaW1hdGlvbik7XG5cbl9zZXREZWZhdWx0cyhUd2Vlbi5wcm90b3R5cGUsIHtcbiAgX3RhcmdldHM6IFtdLFxuICBfbGF6eTogMCxcbiAgX3N0YXJ0QXQ6IDAsXG4gIF9vcDogMCxcbiAgX29uSW5pdDogMFxufSk7IC8vYWRkIHRoZSBwZXJ0aW5lbnQgdGltZWxpbmUgbWV0aG9kcyB0byBUd2VlbiBpbnN0YW5jZXMgc28gdGhhdCB1c2VycyBjYW4gY2hhaW4gY29udmVuaWVudGx5IGFuZCBjcmVhdGUgYSB0aW1lbGluZSBhdXRvbWF0aWNhbGx5LiAocmVtb3ZlZCBkdWUgdG8gY29uY2VybnMgdGhhdCBpdCdkIHVsdGltYXRlbHkgYWRkIHRvIG1vcmUgY29uZnVzaW9uIGVzcGVjaWFsbHkgZm9yIGJlZ2lubmVycylcbi8vIF9mb3JFYWNoTmFtZShcInRvLGZyb20sZnJvbVRvLHNldCxjYWxsLGFkZCxhZGRMYWJlbCxhZGRQYXVzZVwiLCBuYW1lID0+IHtcbi8vIFx0VHdlZW4ucHJvdG90eXBlW25hbWVdID0gZnVuY3Rpb24oKSB7XG4vLyBcdFx0bGV0IHRsID0gbmV3IFRpbWVsaW5lKCk7XG4vLyBcdFx0cmV0dXJuIF9hZGRUb1RpbWVsaW5lKHRsLCB0aGlzKVtuYW1lXS5hcHBseSh0bCwgdG9BcnJheShhcmd1bWVudHMpKTtcbi8vIFx0fVxuLy8gfSk7XG4vL2ZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5LiBMZXZlcmFnZSB0aGUgdGltZWxpbmUgY2FsbHMuXG5cblxuX2ZvckVhY2hOYW1lKFwic3RhZ2dlclRvLHN0YWdnZXJGcm9tLHN0YWdnZXJGcm9tVG9cIiwgZnVuY3Rpb24gKG5hbWUpIHtcbiAgVHdlZW5bbmFtZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHRsID0gbmV3IFRpbWVsaW5lKCksXG4gICAgICAgIHBhcmFtcyA9IF9zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG5cbiAgICBwYXJhbXMuc3BsaWNlKG5hbWUgPT09IFwic3RhZ2dlckZyb21Ub1wiID8gNSA6IDQsIDAsIDApO1xuICAgIHJldHVybiB0bFtuYW1lXS5hcHBseSh0bCwgcGFyYW1zKTtcbiAgfTtcbn0pO1xuLypcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQUk9QVFdFRU5cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuXG52YXIgX3NldHRlclBsYWluID0gZnVuY3Rpb24gX3NldHRlclBsYWluKHRhcmdldCwgcHJvcGVydHksIHZhbHVlKSB7XG4gIHJldHVybiB0YXJnZXRbcHJvcGVydHldID0gdmFsdWU7XG59LFxuICAgIF9zZXR0ZXJGdW5jID0gZnVuY3Rpb24gX3NldHRlckZ1bmModGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgcmV0dXJuIHRhcmdldFtwcm9wZXJ0eV0odmFsdWUpO1xufSxcbiAgICBfc2V0dGVyRnVuY1dpdGhQYXJhbSA9IGZ1bmN0aW9uIF9zZXR0ZXJGdW5jV2l0aFBhcmFtKHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCBkYXRhKSB7XG4gIHJldHVybiB0YXJnZXRbcHJvcGVydHldKGRhdGEuZnAsIHZhbHVlKTtcbn0sXG4gICAgX3NldHRlckF0dHJpYnV0ZSA9IGZ1bmN0aW9uIF9zZXR0ZXJBdHRyaWJ1dGUodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgcmV0dXJuIHRhcmdldC5zZXRBdHRyaWJ1dGUocHJvcGVydHksIHZhbHVlKTtcbn0sXG4gICAgX2dldFNldHRlciA9IGZ1bmN0aW9uIF9nZXRTZXR0ZXIodGFyZ2V0LCBwcm9wZXJ0eSkge1xuICByZXR1cm4gX2lzRnVuY3Rpb24odGFyZ2V0W3Byb3BlcnR5XSkgPyBfc2V0dGVyRnVuYyA6IF9pc1VuZGVmaW5lZCh0YXJnZXRbcHJvcGVydHldKSAmJiB0YXJnZXQuc2V0QXR0cmlidXRlID8gX3NldHRlckF0dHJpYnV0ZSA6IF9zZXR0ZXJQbGFpbjtcbn0sXG4gICAgX3JlbmRlclBsYWluID0gZnVuY3Rpb24gX3JlbmRlclBsYWluKHJhdGlvLCBkYXRhKSB7XG4gIHJldHVybiBkYXRhLnNldChkYXRhLnQsIGRhdGEucCwgTWF0aC5yb3VuZCgoZGF0YS5zICsgZGF0YS5jICogcmF0aW8pICogMTAwMDAwMCkgLyAxMDAwMDAwLCBkYXRhKTtcbn0sXG4gICAgX3JlbmRlckJvb2xlYW4gPSBmdW5jdGlvbiBfcmVuZGVyQm9vbGVhbihyYXRpbywgZGF0YSkge1xuICByZXR1cm4gZGF0YS5zZXQoZGF0YS50LCBkYXRhLnAsICEhKGRhdGEucyArIGRhdGEuYyAqIHJhdGlvKSwgZGF0YSk7XG59LFxuICAgIF9yZW5kZXJDb21wbGV4U3RyaW5nID0gZnVuY3Rpb24gX3JlbmRlckNvbXBsZXhTdHJpbmcocmF0aW8sIGRhdGEpIHtcbiAgdmFyIHB0ID0gZGF0YS5fcHQsXG4gICAgICBzID0gXCJcIjtcblxuICBpZiAoIXJhdGlvICYmIGRhdGEuYikge1xuICAgIC8vYiA9IGJlZ2lubmluZyBzdHJpbmdcbiAgICBzID0gZGF0YS5iO1xuICB9IGVsc2UgaWYgKHJhdGlvID09PSAxICYmIGRhdGEuZSkge1xuICAgIC8vZSA9IGVuZGluZyBzdHJpbmdcbiAgICBzID0gZGF0YS5lO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChwdCkge1xuICAgICAgcyA9IHB0LnAgKyAocHQubSA/IHB0Lm0ocHQucyArIHB0LmMgKiByYXRpbykgOiBNYXRoLnJvdW5kKChwdC5zICsgcHQuYyAqIHJhdGlvKSAqIDEwMDAwKSAvIDEwMDAwKSArIHM7IC8vd2UgdXNlIHRoZSBcInBcIiBwcm9wZXJ0eSBmb3IgdGhlIHRleHQgaW5iZXR3ZWVuIChsaWtlIGEgc3VmZml4KS4gQW5kIGluIHRoZSBjb250ZXh0IG9mIGEgY29tcGxleCBzdHJpbmcsIHRoZSBtb2RpZmllciAobSkgaXMgdHlwaWNhbGx5IGp1c3QgTWF0aC5yb3VuZCgpLCBsaWtlIGZvciBSR0IgY29sb3JzLlxuXG4gICAgICBwdCA9IHB0Ll9uZXh0O1xuICAgIH1cblxuICAgIHMgKz0gZGF0YS5jOyAvL3dlIHVzZSB0aGUgXCJjXCIgb2YgdGhlIFByb3BUd2VlbiB0byBzdG9yZSB0aGUgZmluYWwgY2h1bmsgb2Ygbm9uLW51bWVyaWMgdGV4dC5cbiAgfVxuXG4gIGRhdGEuc2V0KGRhdGEudCwgZGF0YS5wLCBzLCBkYXRhKTtcbn0sXG4gICAgX3JlbmRlclByb3BUd2VlbnMgPSBmdW5jdGlvbiBfcmVuZGVyUHJvcFR3ZWVucyhyYXRpbywgZGF0YSkge1xuICB2YXIgcHQgPSBkYXRhLl9wdDtcblxuICB3aGlsZSAocHQpIHtcbiAgICBwdC5yKHJhdGlvLCBwdC5kKTtcbiAgICBwdCA9IHB0Ll9uZXh0O1xuICB9XG59LFxuICAgIF9hZGRQbHVnaW5Nb2RpZmllciA9IGZ1bmN0aW9uIF9hZGRQbHVnaW5Nb2RpZmllcihtb2RpZmllciwgdHdlZW4sIHRhcmdldCwgcHJvcGVydHkpIHtcbiAgdmFyIHB0ID0gdGhpcy5fcHQsXG4gICAgICBuZXh0O1xuXG4gIHdoaWxlIChwdCkge1xuICAgIG5leHQgPSBwdC5fbmV4dDtcbiAgICBwdC5wID09PSBwcm9wZXJ0eSAmJiBwdC5tb2RpZmllcihtb2RpZmllciwgdHdlZW4sIHRhcmdldCk7XG4gICAgcHQgPSBuZXh0O1xuICB9XG59LFxuICAgIF9raWxsUHJvcFR3ZWVuc09mID0gZnVuY3Rpb24gX2tpbGxQcm9wVHdlZW5zT2YocHJvcGVydHkpIHtcbiAgdmFyIHB0ID0gdGhpcy5fcHQsXG4gICAgICBoYXNOb25EZXBlbmRlbnRSZW1haW5pbmcsXG4gICAgICBuZXh0O1xuXG4gIHdoaWxlIChwdCkge1xuICAgIG5leHQgPSBwdC5fbmV4dDtcblxuICAgIGlmIChwdC5wID09PSBwcm9wZXJ0eSAmJiAhcHQub3AgfHwgcHQub3AgPT09IHByb3BlcnR5KSB7XG4gICAgICBfcmVtb3ZlTGlua2VkTGlzdEl0ZW0odGhpcywgcHQsIFwiX3B0XCIpO1xuICAgIH0gZWxzZSBpZiAoIXB0LmRlcCkge1xuICAgICAgaGFzTm9uRGVwZW5kZW50UmVtYWluaW5nID0gMTtcbiAgICB9XG5cbiAgICBwdCA9IG5leHQ7XG4gIH1cblxuICByZXR1cm4gIWhhc05vbkRlcGVuZGVudFJlbWFpbmluZztcbn0sXG4gICAgX3NldHRlcldpdGhNb2RpZmllciA9IGZ1bmN0aW9uIF9zZXR0ZXJXaXRoTW9kaWZpZXIodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIGRhdGEpIHtcbiAgZGF0YS5tU2V0KHRhcmdldCwgcHJvcGVydHksIGRhdGEubS5jYWxsKGRhdGEudHdlZW4sIHZhbHVlLCBkYXRhLm10KSwgZGF0YSk7XG59LFxuICAgIF9zb3J0UHJvcFR3ZWVuc0J5UHJpb3JpdHkgPSBmdW5jdGlvbiBfc29ydFByb3BUd2VlbnNCeVByaW9yaXR5KHBhcmVudCkge1xuICB2YXIgcHQgPSBwYXJlbnQuX3B0LFxuICAgICAgbmV4dCxcbiAgICAgIHB0MixcbiAgICAgIGZpcnN0LFxuICAgICAgbGFzdDsgLy9zb3J0cyB0aGUgUHJvcFR3ZWVuIGxpbmtlZCBsaXN0IGluIG9yZGVyIG9mIHByaW9yaXR5IGJlY2F1c2Ugc29tZSBwbHVnaW5zIG5lZWQgdG8gZG8gdGhlaXIgd29yayBhZnRlciBBTEwgb2YgdGhlIFByb3BUd2VlbnMgd2VyZSBjcmVhdGVkIChsaWtlIFJvdW5kUHJvcHNQbHVnaW4gYW5kIE1vZGlmaWVyc1BsdWdpbilcblxuICB3aGlsZSAocHQpIHtcbiAgICBuZXh0ID0gcHQuX25leHQ7XG4gICAgcHQyID0gZmlyc3Q7XG5cbiAgICB3aGlsZSAocHQyICYmIHB0Mi5wciA+IHB0LnByKSB7XG4gICAgICBwdDIgPSBwdDIuX25leHQ7XG4gICAgfVxuXG4gICAgaWYgKHB0Ll9wcmV2ID0gcHQyID8gcHQyLl9wcmV2IDogbGFzdCkge1xuICAgICAgcHQuX3ByZXYuX25leHQgPSBwdDtcbiAgICB9IGVsc2Uge1xuICAgICAgZmlyc3QgPSBwdDtcbiAgICB9XG5cbiAgICBpZiAocHQuX25leHQgPSBwdDIpIHtcbiAgICAgIHB0Mi5fcHJldiA9IHB0O1xuICAgIH0gZWxzZSB7XG4gICAgICBsYXN0ID0gcHQ7XG4gICAgfVxuXG4gICAgcHQgPSBuZXh0O1xuICB9XG5cbiAgcGFyZW50Ll9wdCA9IGZpcnN0O1xufTsgLy9Qcm9wVHdlZW4ga2V5OiB0ID0gdGFyZ2V0LCBwID0gcHJvcCwgciA9IHJlbmRlcmVyLCBkID0gZGF0YSwgcyA9IHN0YXJ0LCBjID0gY2hhbmdlLCBvcCA9IG92ZXJ3cml0ZVByb3BlcnR5IChPTkxZIHBvcHVsYXRlZCB3aGVuIGl0J3MgZGlmZmVyZW50IHRoYW4gcCksIHByID0gcHJpb3JpdHksIF9uZXh0L19wcmV2IGZvciB0aGUgbGlua2VkIGxpc3Qgc2libGluZ3MsIHNldCA9IHNldHRlciwgbSA9IG1vZGlmaWVyLCBtU2V0ID0gbW9kaWZpZXJTZXR0ZXIgKHRoZSBvcmlnaW5hbCBzZXR0ZXIsIGJlZm9yZSBhIG1vZGlmaWVyIHdhcyBhZGRlZClcblxuXG5leHBvcnQgdmFyIFByb3BUd2VlbiA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFByb3BUd2VlbihuZXh0LCB0YXJnZXQsIHByb3AsIHN0YXJ0LCBjaGFuZ2UsIHJlbmRlcmVyLCBkYXRhLCBzZXR0ZXIsIHByaW9yaXR5KSB7XG4gICAgdGhpcy50ID0gdGFyZ2V0O1xuICAgIHRoaXMucyA9IHN0YXJ0O1xuICAgIHRoaXMuYyA9IGNoYW5nZTtcbiAgICB0aGlzLnAgPSBwcm9wO1xuICAgIHRoaXMuciA9IHJlbmRlcmVyIHx8IF9yZW5kZXJQbGFpbjtcbiAgICB0aGlzLmQgPSBkYXRhIHx8IHRoaXM7XG4gICAgdGhpcy5zZXQgPSBzZXR0ZXIgfHwgX3NldHRlclBsYWluO1xuICAgIHRoaXMucHIgPSBwcmlvcml0eSB8fCAwO1xuICAgIHRoaXMuX25leHQgPSBuZXh0O1xuXG4gICAgaWYgKG5leHQpIHtcbiAgICAgIG5leHQuX3ByZXYgPSB0aGlzO1xuICAgIH1cbiAgfVxuXG4gIHZhciBfcHJvdG80ID0gUHJvcFR3ZWVuLnByb3RvdHlwZTtcblxuICBfcHJvdG80Lm1vZGlmaWVyID0gZnVuY3Rpb24gbW9kaWZpZXIoZnVuYywgdHdlZW4sIHRhcmdldCkge1xuICAgIHRoaXMubVNldCA9IHRoaXMubVNldCB8fCB0aGlzLnNldDsgLy9pbiBjYXNlIGl0IHdhcyBhbHJlYWR5IHNldCAoYSBQcm9wVHdlZW4gY2FuIG9ubHkgaGF2ZSBvbmUgbW9kaWZpZXIpXG5cbiAgICB0aGlzLnNldCA9IF9zZXR0ZXJXaXRoTW9kaWZpZXI7XG4gICAgdGhpcy5tID0gZnVuYztcbiAgICB0aGlzLm10ID0gdGFyZ2V0OyAvL21vZGlmaWVyIHRhcmdldFxuXG4gICAgdGhpcy50d2VlbiA9IHR3ZWVuO1xuICB9O1xuXG4gIHJldHVybiBQcm9wVHdlZW47XG59KCk7IC8vSW5pdGlhbGl6YXRpb24gdGFza3NcblxuX2ZvckVhY2hOYW1lKF9jYWxsYmFja05hbWVzICsgXCJwYXJlbnQsZHVyYXRpb24sZWFzZSxkZWxheSxvdmVyd3JpdGUscnVuQmFja3dhcmRzLHN0YXJ0QXQseW95byxpbW1lZGlhdGVSZW5kZXIscmVwZWF0LHJlcGVhdERlbGF5LGRhdGEscGF1c2VkLHJldmVyc2VkLGxhenksY2FsbGJhY2tTY29wZSxzdHJpbmdGaWx0ZXIsaWQseW95b0Vhc2Usc3RhZ2dlcixpbmhlcml0LHJlcGVhdFJlZnJlc2gsa2V5ZnJhbWVzLGF1dG9SZXZlcnQsc2Nyb2xsVHJpZ2dlclwiLCBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gX3Jlc2VydmVkUHJvcHNbbmFtZV0gPSAxO1xufSk7XG5cbl9nbG9iYWxzLlR3ZWVuTWF4ID0gX2dsb2JhbHMuVHdlZW5MaXRlID0gVHdlZW47XG5fZ2xvYmFscy5UaW1lbGluZUxpdGUgPSBfZ2xvYmFscy5UaW1lbGluZU1heCA9IFRpbWVsaW5lO1xuX2dsb2JhbFRpbWVsaW5lID0gbmV3IFRpbWVsaW5lKHtcbiAgc29ydENoaWxkcmVuOiBmYWxzZSxcbiAgZGVmYXVsdHM6IF9kZWZhdWx0cyxcbiAgYXV0b1JlbW92ZUNoaWxkcmVuOiB0cnVlLFxuICBpZDogXCJyb290XCIsXG4gIHNtb290aENoaWxkVGltaW5nOiB0cnVlXG59KTtcbl9jb25maWcuc3RyaW5nRmlsdGVyID0gX2NvbG9yU3RyaW5nRmlsdGVyO1xuXG52YXIgX21lZGlhID0gW10sXG4gICAgX2xpc3RlbmVycyA9IHt9LFxuICAgIF9lbXB0eUFycmF5ID0gW10sXG4gICAgX2xhc3RNZWRpYVRpbWUgPSAwLFxuICAgIF9kaXNwYXRjaCA9IGZ1bmN0aW9uIF9kaXNwYXRjaCh0eXBlKSB7XG4gIHJldHVybiAoX2xpc3RlbmVyc1t0eXBlXSB8fCBfZW1wdHlBcnJheSkubWFwKGZ1bmN0aW9uIChmKSB7XG4gICAgcmV0dXJuIGYoKTtcbiAgfSk7XG59LFxuICAgIF9vbk1lZGlhQ2hhbmdlID0gZnVuY3Rpb24gX29uTWVkaWFDaGFuZ2UoKSB7XG4gIHZhciB0aW1lID0gRGF0ZS5ub3coKSxcbiAgICAgIG1hdGNoZXMgPSBbXTtcblxuICBpZiAodGltZSAtIF9sYXN0TWVkaWFUaW1lID4gMikge1xuICAgIF9kaXNwYXRjaChcIm1hdGNoTWVkaWFJbml0XCIpO1xuXG4gICAgX21lZGlhLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcbiAgICAgIHZhciBxdWVyaWVzID0gYy5xdWVyaWVzLFxuICAgICAgICAgIGNvbmRpdGlvbnMgPSBjLmNvbmRpdGlvbnMsXG4gICAgICAgICAgbWF0Y2gsXG4gICAgICAgICAgcCxcbiAgICAgICAgICBhbnlNYXRjaCxcbiAgICAgICAgICB0b2dnbGVkO1xuXG4gICAgICBmb3IgKHAgaW4gcXVlcmllcykge1xuICAgICAgICBtYXRjaCA9IF93aW4ubWF0Y2hNZWRpYShxdWVyaWVzW3BdKS5tYXRjaGVzOyAvLyBGaXJlZm94IGRvZXNuJ3QgdXBkYXRlIHRoZSBcIm1hdGNoZXNcIiBwcm9wZXJ0eSBvZiB0aGUgTWVkaWFRdWVyeUxpc3Qgb2JqZWN0IGNvcnJlY3RseSAtIGl0IG9ubHkgZG9lcyBzbyBhcyBpdCBjYWxscyBpdHMgY2hhbmdlIGhhbmRsZXIgLSBzbyB3ZSBtdXN0IHJlLWNyZWF0ZSBhIG1lZGlhIHF1ZXJ5IGhlcmUgdG8gZW5zdXJlIGl0J3MgYWNjdXJhdGUuXG5cbiAgICAgICAgbWF0Y2ggJiYgKGFueU1hdGNoID0gMSk7XG5cbiAgICAgICAgaWYgKG1hdGNoICE9PSBjb25kaXRpb25zW3BdKSB7XG4gICAgICAgICAgY29uZGl0aW9uc1twXSA9IG1hdGNoO1xuICAgICAgICAgIHRvZ2dsZWQgPSAxO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0b2dnbGVkKSB7XG4gICAgICAgIGMucmV2ZXJ0KCk7XG4gICAgICAgIGFueU1hdGNoICYmIG1hdGNoZXMucHVzaChjKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIF9kaXNwYXRjaChcIm1hdGNoTWVkaWFSZXZlcnRcIik7XG5cbiAgICBtYXRjaGVzLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcbiAgICAgIHJldHVybiBjLm9uTWF0Y2goYyk7XG4gICAgfSk7XG4gICAgX2xhc3RNZWRpYVRpbWUgPSB0aW1lO1xuXG4gICAgX2Rpc3BhdGNoKFwibWF0Y2hNZWRpYVwiKTtcbiAgfVxufTtcblxudmFyIENvbnRleHQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBDb250ZXh0KGZ1bmMsIHNjb3BlKSB7XG4gICAgdGhpcy5zZWxlY3RvciA9IHNjb3BlICYmIHNlbGVjdG9yKHNjb3BlKTtcbiAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICB0aGlzLl9yID0gW107IC8vIHJldHVybmVkL2NsZWFudXAgZnVuY3Rpb25zXG5cbiAgICB0aGlzLmlzUmV2ZXJ0ZWQgPSBmYWxzZTtcbiAgICBmdW5jICYmIHRoaXMuYWRkKGZ1bmMpO1xuICB9XG5cbiAgdmFyIF9wcm90bzUgPSBDb250ZXh0LnByb3RvdHlwZTtcblxuICBfcHJvdG81LmFkZCA9IGZ1bmN0aW9uIGFkZChuYW1lLCBmdW5jLCBzY29wZSkge1xuICAgIGlmIChfaXNGdW5jdGlvbihuYW1lKSkge1xuICAgICAgc2NvcGUgPSBmdW5jO1xuICAgICAgZnVuYyA9IG5hbWU7XG4gICAgICBuYW1lID0gX2lzRnVuY3Rpb247XG4gICAgfVxuXG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBmID0gZnVuY3Rpb24gZigpIHtcbiAgICAgIHZhciBwcmV2ID0gX2NvbnRleHQsXG4gICAgICAgICAgcHJldlNlbGVjdG9yID0gc2VsZi5zZWxlY3RvcixcbiAgICAgICAgICByZXN1bHQ7XG4gICAgICBwcmV2ICYmIHByZXYuZGF0YS5wdXNoKHNlbGYpO1xuICAgICAgc2NvcGUgJiYgKHNlbGYuc2VsZWN0b3IgPSBzZWxlY3RvcihzY29wZSkpO1xuICAgICAgX2NvbnRleHQgPSBzZWxmO1xuICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseShzZWxmLCBhcmd1bWVudHMpO1xuICAgICAgX2lzRnVuY3Rpb24ocmVzdWx0KSAmJiBzZWxmLl9yLnB1c2gocmVzdWx0KTtcbiAgICAgIF9jb250ZXh0ID0gcHJldjtcbiAgICAgIHNlbGYuc2VsZWN0b3IgPSBwcmV2U2VsZWN0b3I7XG4gICAgICBzZWxmLmlzUmV2ZXJ0ZWQgPSBmYWxzZTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIHNlbGYubGFzdCA9IGY7XG4gICAgcmV0dXJuIG5hbWUgPT09IF9pc0Z1bmN0aW9uID8gZihzZWxmKSA6IG5hbWUgPyBzZWxmW25hbWVdID0gZiA6IGY7XG4gIH07XG5cbiAgX3Byb3RvNS5pZ25vcmUgPSBmdW5jdGlvbiBpZ25vcmUoZnVuYykge1xuICAgIHZhciBwcmV2ID0gX2NvbnRleHQ7XG4gICAgX2NvbnRleHQgPSBudWxsO1xuICAgIGZ1bmModGhpcyk7XG4gICAgX2NvbnRleHQgPSBwcmV2O1xuICB9O1xuXG4gIF9wcm90bzUuZ2V0VHdlZW5zID0gZnVuY3Rpb24gZ2V0VHdlZW5zKCkge1xuICAgIHZhciBhID0gW107XG4gICAgdGhpcy5kYXRhLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBlIGluc3RhbmNlb2YgQ29udGV4dCA/IGEucHVzaC5hcHBseShhLCBlLmdldFR3ZWVucygpKSA6IGUgaW5zdGFuY2VvZiBUd2VlbiAmJiBlLl90YXJnZXRzWzBdICE9PSBlLnZhcnMub25Db21wbGV0ZSAmJiBhLnB1c2goZSk7XG4gICAgfSk7IC8vIGRvbid0IGluY2x1ZGUgZGVsYXllZENhbGxzXG5cbiAgICByZXR1cm4gYTtcbiAgfTtcblxuICBfcHJvdG81LmNsZWFyID0gZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgdGhpcy5fci5sZW5ndGggPSB0aGlzLmRhdGEubGVuZ3RoID0gMDtcbiAgfTtcblxuICBfcHJvdG81LmtpbGwgPSBmdW5jdGlvbiBraWxsKHJldmVydCwgbWF0Y2hNZWRpYSkge1xuICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgaWYgKHJldmVydCkge1xuICAgICAgLy8gc2F2ZSBhcyBhbiBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gY2FjaGUgdGhlIGdsb2JhbFRpbWUgZm9yIGVhY2ggdHdlZW4gdG8gb3B0aW1pemUgcGVyZm9ybWFuY2UgZHVyaW5nIHRoZSBzb3J0XG4gICAgICB0aGlzLmdldFR3ZWVucygpLm1hcChmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGc6IHQuZ2xvYmFsVGltZSgwKSxcbiAgICAgICAgICB0OiB0XG4gICAgICAgIH07XG4gICAgICB9KS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiBiLmcgLSBhLmcgfHwgLTE7XG4gICAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChvKSB7XG4gICAgICAgIHJldHVybiBvLnQucmV2ZXJ0KHJldmVydCk7XG4gICAgICB9KTsgLy8gbm90ZTogYWxsIG9mIHRoZSBfc3RhcnRBdCB0d2VlbnMgc2hvdWxkIGJlIHJldmVydGVkIGluIHJldmVyc2Ugb3JkZXIgdGhhdCB0aHkgd2VyZSBjcmVhdGVkLCBhbmQgdGhleSdsbCBhbGwgaGF2ZSB0aGUgc2FtZSBnbG9iYWxUaW1lICgtMSkgc28gdGhlIFwiIHx8IC0xXCIgaW4gdGhlIHNvcnQga2VlcHMgdGhlIG9yZGVyIHByb3Blcmx5LlxuXG4gICAgICB0aGlzLmRhdGEuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gIShlIGluc3RhbmNlb2YgQW5pbWF0aW9uKSAmJiBlLnJldmVydCAmJiBlLnJldmVydChyZXZlcnQpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuX3IuZm9yRWFjaChmdW5jdGlvbiAoZikge1xuICAgICAgICByZXR1cm4gZihyZXZlcnQsIF90aGlzNCk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5pc1JldmVydGVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kYXRhLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGUua2lsbCAmJiBlLmtpbGwoKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuY2xlYXIoKTtcblxuICAgIGlmIChtYXRjaE1lZGlhKSB7XG4gICAgICB2YXIgaSA9IF9tZWRpYS5pbmRleE9mKHRoaXMpO1xuXG4gICAgICAhIX5pICYmIF9tZWRpYS5zcGxpY2UoaSwgMSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90bzUucmV2ZXJ0ID0gZnVuY3Rpb24gcmV2ZXJ0KGNvbmZpZykge1xuICAgIHRoaXMua2lsbChjb25maWcgfHwge30pO1xuICB9O1xuXG4gIHJldHVybiBDb250ZXh0O1xufSgpO1xuXG52YXIgTWF0Y2hNZWRpYSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE1hdGNoTWVkaWEoc2NvcGUpIHtcbiAgICB0aGlzLmNvbnRleHRzID0gW107XG4gICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICB9XG5cbiAgdmFyIF9wcm90bzYgPSBNYXRjaE1lZGlhLnByb3RvdHlwZTtcblxuICBfcHJvdG82LmFkZCA9IGZ1bmN0aW9uIGFkZChjb25kaXRpb25zLCBmdW5jLCBzY29wZSkge1xuICAgIF9pc09iamVjdChjb25kaXRpb25zKSB8fCAoY29uZGl0aW9ucyA9IHtcbiAgICAgIG1hdGNoZXM6IGNvbmRpdGlvbnNcbiAgICB9KTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KDAsIHNjb3BlIHx8IHRoaXMuc2NvcGUpLFxuICAgICAgICBjb25kID0gY29udGV4dC5jb25kaXRpb25zID0ge30sXG4gICAgICAgIG1xLFxuICAgICAgICBwLFxuICAgICAgICBhY3RpdmU7XG4gICAgdGhpcy5jb250ZXh0cy5wdXNoKGNvbnRleHQpO1xuICAgIGZ1bmMgPSBjb250ZXh0LmFkZChcIm9uTWF0Y2hcIiwgZnVuYyk7XG4gICAgY29udGV4dC5xdWVyaWVzID0gY29uZGl0aW9ucztcblxuICAgIGZvciAocCBpbiBjb25kaXRpb25zKSB7XG4gICAgICBpZiAocCA9PT0gXCJhbGxcIikge1xuICAgICAgICBhY3RpdmUgPSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbXEgPSBfd2luLm1hdGNoTWVkaWEoY29uZGl0aW9uc1twXSk7XG5cbiAgICAgICAgaWYgKG1xKSB7XG4gICAgICAgICAgX21lZGlhLmluZGV4T2YoY29udGV4dCkgPCAwICYmIF9tZWRpYS5wdXNoKGNvbnRleHQpO1xuICAgICAgICAgIChjb25kW3BdID0gbXEubWF0Y2hlcykgJiYgKGFjdGl2ZSA9IDEpO1xuICAgICAgICAgIG1xLmFkZExpc3RlbmVyID8gbXEuYWRkTGlzdGVuZXIoX29uTWVkaWFDaGFuZ2UpIDogbXEuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBfb25NZWRpYUNoYW5nZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBhY3RpdmUgJiYgZnVuYyhjb250ZXh0KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfSAvLyByZWZyZXNoKCkge1xuICAvLyBcdGxldCB0aW1lID0gX2xhc3RNZWRpYVRpbWUsXG4gIC8vIFx0XHRtZWRpYSA9IF9tZWRpYTtcbiAgLy8gXHRfbGFzdE1lZGlhVGltZSA9IC0xO1xuICAvLyBcdF9tZWRpYSA9IHRoaXMuY29udGV4dHM7XG4gIC8vIFx0X29uTWVkaWFDaGFuZ2UoKTtcbiAgLy8gXHRfbGFzdE1lZGlhVGltZSA9IHRpbWU7XG4gIC8vIFx0X21lZGlhID0gbWVkaWE7XG4gIC8vIH1cbiAgO1xuXG4gIF9wcm90bzYucmV2ZXJ0ID0gZnVuY3Rpb24gcmV2ZXJ0KGNvbmZpZykge1xuICAgIHRoaXMua2lsbChjb25maWcgfHwge30pO1xuICB9O1xuXG4gIF9wcm90bzYua2lsbCA9IGZ1bmN0aW9uIGtpbGwocmV2ZXJ0KSB7XG4gICAgdGhpcy5jb250ZXh0cy5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XG4gICAgICByZXR1cm4gYy5raWxsKHJldmVydCwgdHJ1ZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIE1hdGNoTWVkaWE7XG59KCk7XG4vKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEdTQVBcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuXG52YXIgX2dzYXAgPSB7XG4gIHJlZ2lzdGVyUGx1Z2luOiBmdW5jdGlvbiByZWdpc3RlclBsdWdpbigpIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICBhcmdzLmZvckVhY2goZnVuY3Rpb24gKGNvbmZpZykge1xuICAgICAgcmV0dXJuIF9jcmVhdGVQbHVnaW4oY29uZmlnKTtcbiAgICB9KTtcbiAgfSxcbiAgdGltZWxpbmU6IGZ1bmN0aW9uIHRpbWVsaW5lKHZhcnMpIHtcbiAgICByZXR1cm4gbmV3IFRpbWVsaW5lKHZhcnMpO1xuICB9LFxuICBnZXRUd2VlbnNPZjogZnVuY3Rpb24gZ2V0VHdlZW5zT2YodGFyZ2V0cywgb25seUFjdGl2ZSkge1xuICAgIHJldHVybiBfZ2xvYmFsVGltZWxpbmUuZ2V0VHdlZW5zT2YodGFyZ2V0cywgb25seUFjdGl2ZSk7XG4gIH0sXG4gIGdldFByb3BlcnR5OiBmdW5jdGlvbiBnZXRQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5LCB1bml0LCB1bmNhY2hlKSB7XG4gICAgX2lzU3RyaW5nKHRhcmdldCkgJiYgKHRhcmdldCA9IHRvQXJyYXkodGFyZ2V0KVswXSk7IC8vaW4gY2FzZSBzZWxlY3RvciB0ZXh0IG9yIGFuIGFycmF5IGlzIHBhc3NlZCBpblxuXG4gICAgdmFyIGdldHRlciA9IF9nZXRDYWNoZSh0YXJnZXQgfHwge30pLmdldCxcbiAgICAgICAgZm9ybWF0ID0gdW5pdCA/IF9wYXNzVGhyb3VnaCA6IF9udW1lcmljSWZQb3NzaWJsZTtcblxuICAgIHVuaXQgPT09IFwibmF0aXZlXCIgJiYgKHVuaXQgPSBcIlwiKTtcbiAgICByZXR1cm4gIXRhcmdldCA/IHRhcmdldCA6ICFwcm9wZXJ0eSA/IGZ1bmN0aW9uIChwcm9wZXJ0eSwgdW5pdCwgdW5jYWNoZSkge1xuICAgICAgcmV0dXJuIGZvcm1hdCgoX3BsdWdpbnNbcHJvcGVydHldICYmIF9wbHVnaW5zW3Byb3BlcnR5XS5nZXQgfHwgZ2V0dGVyKSh0YXJnZXQsIHByb3BlcnR5LCB1bml0LCB1bmNhY2hlKSk7XG4gICAgfSA6IGZvcm1hdCgoX3BsdWdpbnNbcHJvcGVydHldICYmIF9wbHVnaW5zW3Byb3BlcnR5XS5nZXQgfHwgZ2V0dGVyKSh0YXJnZXQsIHByb3BlcnR5LCB1bml0LCB1bmNhY2hlKSk7XG4gIH0sXG4gIHF1aWNrU2V0dGVyOiBmdW5jdGlvbiBxdWlja1NldHRlcih0YXJnZXQsIHByb3BlcnR5LCB1bml0KSB7XG4gICAgdGFyZ2V0ID0gdG9BcnJheSh0YXJnZXQpO1xuXG4gICAgaWYgKHRhcmdldC5sZW5ndGggPiAxKSB7XG4gICAgICB2YXIgc2V0dGVycyA9IHRhcmdldC5tYXAoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIGdzYXAucXVpY2tTZXR0ZXIodCwgcHJvcGVydHksIHVuaXQpO1xuICAgICAgfSksXG4gICAgICAgICAgbCA9IHNldHRlcnMubGVuZ3RoO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgaSA9IGw7XG5cbiAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgIHNldHRlcnNbaV0odmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIHRhcmdldCA9IHRhcmdldFswXSB8fCB7fTtcblxuICAgIHZhciBQbHVnaW4gPSBfcGx1Z2luc1twcm9wZXJ0eV0sXG4gICAgICAgIGNhY2hlID0gX2dldENhY2hlKHRhcmdldCksXG4gICAgICAgIHAgPSBjYWNoZS5oYXJuZXNzICYmIChjYWNoZS5oYXJuZXNzLmFsaWFzZXMgfHwge30pW3Byb3BlcnR5XSB8fCBwcm9wZXJ0eSxcbiAgICAgICAgLy8gaW4gY2FzZSBpdCdzIGFuIGFsaWFzLCBsaWtlIFwicm90YXRlXCIgZm9yIFwicm90YXRpb25cIi5cbiAgICBzZXR0ZXIgPSBQbHVnaW4gPyBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHZhciBwID0gbmV3IFBsdWdpbigpO1xuICAgICAgX3F1aWNrVHdlZW4uX3B0ID0gMDtcbiAgICAgIHAuaW5pdCh0YXJnZXQsIHVuaXQgPyB2YWx1ZSArIHVuaXQgOiB2YWx1ZSwgX3F1aWNrVHdlZW4sIDAsIFt0YXJnZXRdKTtcbiAgICAgIHAucmVuZGVyKDEsIHApO1xuICAgICAgX3F1aWNrVHdlZW4uX3B0ICYmIF9yZW5kZXJQcm9wVHdlZW5zKDEsIF9xdWlja1R3ZWVuKTtcbiAgICB9IDogY2FjaGUuc2V0KHRhcmdldCwgcCk7XG5cbiAgICByZXR1cm4gUGx1Z2luID8gc2V0dGVyIDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICByZXR1cm4gc2V0dGVyKHRhcmdldCwgcCwgdW5pdCA/IHZhbHVlICsgdW5pdCA6IHZhbHVlLCBjYWNoZSwgMSk7XG4gICAgfTtcbiAgfSxcbiAgcXVpY2tUbzogZnVuY3Rpb24gcXVpY2tUbyh0YXJnZXQsIHByb3BlcnR5LCB2YXJzKSB7XG4gICAgdmFyIF9tZXJnZTI7XG5cbiAgICB2YXIgdHdlZW4gPSBnc2FwLnRvKHRhcmdldCwgX21lcmdlKChfbWVyZ2UyID0ge30sIF9tZXJnZTJbcHJvcGVydHldID0gXCIrPTAuMVwiLCBfbWVyZ2UyLnBhdXNlZCA9IHRydWUsIF9tZXJnZTIpLCB2YXJzIHx8IHt9KSksXG4gICAgICAgIGZ1bmMgPSBmdW5jdGlvbiBmdW5jKHZhbHVlLCBzdGFydCwgc3RhcnRJc1JlbGF0aXZlKSB7XG4gICAgICByZXR1cm4gdHdlZW4ucmVzZXRUbyhwcm9wZXJ0eSwgdmFsdWUsIHN0YXJ0LCBzdGFydElzUmVsYXRpdmUpO1xuICAgIH07XG5cbiAgICBmdW5jLnR3ZWVuID0gdHdlZW47XG4gICAgcmV0dXJuIGZ1bmM7XG4gIH0sXG4gIGlzVHdlZW5pbmc6IGZ1bmN0aW9uIGlzVHdlZW5pbmcodGFyZ2V0cykge1xuICAgIHJldHVybiBfZ2xvYmFsVGltZWxpbmUuZ2V0VHdlZW5zT2YodGFyZ2V0cywgdHJ1ZSkubGVuZ3RoID4gMDtcbiAgfSxcbiAgZGVmYXVsdHM6IGZ1bmN0aW9uIGRlZmF1bHRzKHZhbHVlKSB7XG4gICAgdmFsdWUgJiYgdmFsdWUuZWFzZSAmJiAodmFsdWUuZWFzZSA9IF9wYXJzZUVhc2UodmFsdWUuZWFzZSwgX2RlZmF1bHRzLmVhc2UpKTtcbiAgICByZXR1cm4gX21lcmdlRGVlcChfZGVmYXVsdHMsIHZhbHVlIHx8IHt9KTtcbiAgfSxcbiAgY29uZmlnOiBmdW5jdGlvbiBjb25maWcodmFsdWUpIHtcbiAgICByZXR1cm4gX21lcmdlRGVlcChfY29uZmlnLCB2YWx1ZSB8fCB7fSk7XG4gIH0sXG4gIHJlZ2lzdGVyRWZmZWN0OiBmdW5jdGlvbiByZWdpc3RlckVmZmVjdChfcmVmMykge1xuICAgIHZhciBuYW1lID0gX3JlZjMubmFtZSxcbiAgICAgICAgZWZmZWN0ID0gX3JlZjMuZWZmZWN0LFxuICAgICAgICBwbHVnaW5zID0gX3JlZjMucGx1Z2lucyxcbiAgICAgICAgZGVmYXVsdHMgPSBfcmVmMy5kZWZhdWx0cyxcbiAgICAgICAgZXh0ZW5kVGltZWxpbmUgPSBfcmVmMy5leHRlbmRUaW1lbGluZTtcbiAgICAocGx1Z2lucyB8fCBcIlwiKS5zcGxpdChcIixcIikuZm9yRWFjaChmdW5jdGlvbiAocGx1Z2luTmFtZSkge1xuICAgICAgcmV0dXJuIHBsdWdpbk5hbWUgJiYgIV9wbHVnaW5zW3BsdWdpbk5hbWVdICYmICFfZ2xvYmFsc1twbHVnaW5OYW1lXSAmJiBfd2FybihuYW1lICsgXCIgZWZmZWN0IHJlcXVpcmVzIFwiICsgcGx1Z2luTmFtZSArIFwiIHBsdWdpbi5cIik7XG4gICAgfSk7XG5cbiAgICBfZWZmZWN0c1tuYW1lXSA9IGZ1bmN0aW9uICh0YXJnZXRzLCB2YXJzLCB0bCkge1xuICAgICAgcmV0dXJuIGVmZmVjdCh0b0FycmF5KHRhcmdldHMpLCBfc2V0RGVmYXVsdHModmFycyB8fCB7fSwgZGVmYXVsdHMpLCB0bCk7XG4gICAgfTtcblxuICAgIGlmIChleHRlbmRUaW1lbGluZSkge1xuICAgICAgVGltZWxpbmUucHJvdG90eXBlW25hbWVdID0gZnVuY3Rpb24gKHRhcmdldHMsIHZhcnMsIHBvc2l0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZChfZWZmZWN0c1tuYW1lXSh0YXJnZXRzLCBfaXNPYmplY3QodmFycykgPyB2YXJzIDogKHBvc2l0aW9uID0gdmFycykgJiYge30sIHRoaXMpLCBwb3NpdGlvbik7XG4gICAgICB9O1xuICAgIH1cbiAgfSxcbiAgcmVnaXN0ZXJFYXNlOiBmdW5jdGlvbiByZWdpc3RlckVhc2UobmFtZSwgZWFzZSkge1xuICAgIF9lYXNlTWFwW25hbWVdID0gX3BhcnNlRWFzZShlYXNlKTtcbiAgfSxcbiAgcGFyc2VFYXNlOiBmdW5jdGlvbiBwYXJzZUVhc2UoZWFzZSwgZGVmYXVsdEVhc2UpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IF9wYXJzZUVhc2UoZWFzZSwgZGVmYXVsdEVhc2UpIDogX2Vhc2VNYXA7XG4gIH0sXG4gIGdldEJ5SWQ6IGZ1bmN0aW9uIGdldEJ5SWQoaWQpIHtcbiAgICByZXR1cm4gX2dsb2JhbFRpbWVsaW5lLmdldEJ5SWQoaWQpO1xuICB9LFxuICBleHBvcnRSb290OiBmdW5jdGlvbiBleHBvcnRSb290KHZhcnMsIGluY2x1ZGVEZWxheWVkQ2FsbHMpIHtcbiAgICBpZiAodmFycyA9PT0gdm9pZCAwKSB7XG4gICAgICB2YXJzID0ge307XG4gICAgfVxuXG4gICAgdmFyIHRsID0gbmV3IFRpbWVsaW5lKHZhcnMpLFxuICAgICAgICBjaGlsZCxcbiAgICAgICAgbmV4dDtcbiAgICB0bC5zbW9vdGhDaGlsZFRpbWluZyA9IF9pc05vdEZhbHNlKHZhcnMuc21vb3RoQ2hpbGRUaW1pbmcpO1xuXG4gICAgX2dsb2JhbFRpbWVsaW5lLnJlbW92ZSh0bCk7XG5cbiAgICB0bC5fZHAgPSAwOyAvL290aGVyd2lzZSBpdCdsbCBnZXQgcmUtYWN0aXZhdGVkIHdoZW4gYWRkaW5nIGNoaWxkcmVuIGFuZCBiZSByZS1pbnRyb2R1Y2VkIGludG8gX2dsb2JhbFRpbWVsaW5lJ3MgbGlua2VkIGxpc3QgKHRoZW4gYWRkZWQgdG8gaXRzZWxmKS5cblxuICAgIHRsLl90aW1lID0gdGwuX3RUaW1lID0gX2dsb2JhbFRpbWVsaW5lLl90aW1lO1xuICAgIGNoaWxkID0gX2dsb2JhbFRpbWVsaW5lLl9maXJzdDtcblxuICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgbmV4dCA9IGNoaWxkLl9uZXh0O1xuXG4gICAgICBpZiAoaW5jbHVkZURlbGF5ZWRDYWxscyB8fCAhKCFjaGlsZC5fZHVyICYmIGNoaWxkIGluc3RhbmNlb2YgVHdlZW4gJiYgY2hpbGQudmFycy5vbkNvbXBsZXRlID09PSBjaGlsZC5fdGFyZ2V0c1swXSkpIHtcbiAgICAgICAgX2FkZFRvVGltZWxpbmUodGwsIGNoaWxkLCBjaGlsZC5fc3RhcnQgLSBjaGlsZC5fZGVsYXkpO1xuICAgICAgfVxuXG4gICAgICBjaGlsZCA9IG5leHQ7XG4gICAgfVxuXG4gICAgX2FkZFRvVGltZWxpbmUoX2dsb2JhbFRpbWVsaW5lLCB0bCwgMCk7XG5cbiAgICByZXR1cm4gdGw7XG4gIH0sXG4gIGNvbnRleHQ6IGZ1bmN0aW9uIGNvbnRleHQoZnVuYywgc2NvcGUpIHtcbiAgICByZXR1cm4gZnVuYyA/IG5ldyBDb250ZXh0KGZ1bmMsIHNjb3BlKSA6IF9jb250ZXh0O1xuICB9LFxuICBtYXRjaE1lZGlhOiBmdW5jdGlvbiBtYXRjaE1lZGlhKHNjb3BlKSB7XG4gICAgcmV0dXJuIG5ldyBNYXRjaE1lZGlhKHNjb3BlKTtcbiAgfSxcbiAgbWF0Y2hNZWRpYVJlZnJlc2g6IGZ1bmN0aW9uIG1hdGNoTWVkaWFSZWZyZXNoKCkge1xuICAgIHJldHVybiBfbWVkaWEuZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgICAgdmFyIGNvbmQgPSBjLmNvbmRpdGlvbnMsXG4gICAgICAgICAgZm91bmQsXG4gICAgICAgICAgcDtcblxuICAgICAgZm9yIChwIGluIGNvbmQpIHtcbiAgICAgICAgaWYgKGNvbmRbcF0pIHtcbiAgICAgICAgICBjb25kW3BdID0gZmFsc2U7XG4gICAgICAgICAgZm91bmQgPSAxO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvdW5kICYmIGMucmV2ZXJ0KCk7XG4gICAgfSkgfHwgX29uTWVkaWFDaGFuZ2UoKTtcbiAgfSxcbiAgYWRkRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjaykge1xuICAgIHZhciBhID0gX2xpc3RlbmVyc1t0eXBlXSB8fCAoX2xpc3RlbmVyc1t0eXBlXSA9IFtdKTtcbiAgICB+YS5pbmRleE9mKGNhbGxiYWNrKSB8fCBhLnB1c2goY2FsbGJhY2spO1xuICB9LFxuICByZW1vdmVFdmVudExpc3RlbmVyOiBmdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGEgPSBfbGlzdGVuZXJzW3R5cGVdLFxuICAgICAgICBpID0gYSAmJiBhLmluZGV4T2YoY2FsbGJhY2spO1xuICAgIGkgPj0gMCAmJiBhLnNwbGljZShpLCAxKTtcbiAgfSxcbiAgdXRpbHM6IHtcbiAgICB3cmFwOiB3cmFwLFxuICAgIHdyYXBZb3lvOiB3cmFwWW95byxcbiAgICBkaXN0cmlidXRlOiBkaXN0cmlidXRlLFxuICAgIHJhbmRvbTogcmFuZG9tLFxuICAgIHNuYXA6IHNuYXAsXG4gICAgbm9ybWFsaXplOiBub3JtYWxpemUsXG4gICAgZ2V0VW5pdDogZ2V0VW5pdCxcbiAgICBjbGFtcDogY2xhbXAsXG4gICAgc3BsaXRDb2xvcjogc3BsaXRDb2xvcixcbiAgICB0b0FycmF5OiB0b0FycmF5LFxuICAgIHNlbGVjdG9yOiBzZWxlY3RvcixcbiAgICBtYXBSYW5nZTogbWFwUmFuZ2UsXG4gICAgcGlwZTogcGlwZSxcbiAgICB1bml0aXplOiB1bml0aXplLFxuICAgIGludGVycG9sYXRlOiBpbnRlcnBvbGF0ZSxcbiAgICBzaHVmZmxlOiBzaHVmZmxlXG4gIH0sXG4gIGluc3RhbGw6IF9pbnN0YWxsLFxuICBlZmZlY3RzOiBfZWZmZWN0cyxcbiAgdGlja2VyOiBfdGlja2VyLFxuICB1cGRhdGVSb290OiBUaW1lbGluZS51cGRhdGVSb290LFxuICBwbHVnaW5zOiBfcGx1Z2lucyxcbiAgZ2xvYmFsVGltZWxpbmU6IF9nbG9iYWxUaW1lbGluZSxcbiAgY29yZToge1xuICAgIFByb3BUd2VlbjogUHJvcFR3ZWVuLFxuICAgIGdsb2JhbHM6IF9hZGRHbG9iYWwsXG4gICAgVHdlZW46IFR3ZWVuLFxuICAgIFRpbWVsaW5lOiBUaW1lbGluZSxcbiAgICBBbmltYXRpb246IEFuaW1hdGlvbixcbiAgICBnZXRDYWNoZTogX2dldENhY2hlLFxuICAgIF9yZW1vdmVMaW5rZWRMaXN0SXRlbTogX3JlbW92ZUxpbmtlZExpc3RJdGVtLFxuICAgIHJldmVydGluZzogZnVuY3Rpb24gcmV2ZXJ0aW5nKCkge1xuICAgICAgcmV0dXJuIF9yZXZlcnRpbmc7XG4gICAgfSxcbiAgICBjb250ZXh0OiBmdW5jdGlvbiBjb250ZXh0KHRvQWRkKSB7XG4gICAgICBpZiAodG9BZGQgJiYgX2NvbnRleHQpIHtcbiAgICAgICAgX2NvbnRleHQuZGF0YS5wdXNoKHRvQWRkKTtcblxuICAgICAgICB0b0FkZC5fY3R4ID0gX2NvbnRleHQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfY29udGV4dDtcbiAgICB9LFxuICAgIHN1cHByZXNzT3ZlcndyaXRlczogZnVuY3Rpb24gc3VwcHJlc3NPdmVyd3JpdGVzKHZhbHVlKSB7XG4gICAgICByZXR1cm4gX3N1cHByZXNzT3ZlcndyaXRlcyA9IHZhbHVlO1xuICAgIH1cbiAgfVxufTtcblxuX2ZvckVhY2hOYW1lKFwidG8sZnJvbSxmcm9tVG8sZGVsYXllZENhbGwsc2V0LGtpbGxUd2VlbnNPZlwiLCBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gX2dzYXBbbmFtZV0gPSBUd2VlbltuYW1lXTtcbn0pO1xuXG5fdGlja2VyLmFkZChUaW1lbGluZS51cGRhdGVSb290KTtcblxuX3F1aWNrVHdlZW4gPSBfZ3NhcC50byh7fSwge1xuICBkdXJhdGlvbjogMFxufSk7IC8vIC0tLS0gRVhUUkEgUExVR0lOUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG52YXIgX2dldFBsdWdpblByb3BUd2VlbiA9IGZ1bmN0aW9uIF9nZXRQbHVnaW5Qcm9wVHdlZW4ocGx1Z2luLCBwcm9wKSB7XG4gIHZhciBwdCA9IHBsdWdpbi5fcHQ7XG5cbiAgd2hpbGUgKHB0ICYmIHB0LnAgIT09IHByb3AgJiYgcHQub3AgIT09IHByb3AgJiYgcHQuZnAgIT09IHByb3ApIHtcbiAgICBwdCA9IHB0Ll9uZXh0O1xuICB9XG5cbiAgcmV0dXJuIHB0O1xufSxcbiAgICBfYWRkTW9kaWZpZXJzID0gZnVuY3Rpb24gX2FkZE1vZGlmaWVycyh0d2VlbiwgbW9kaWZpZXJzKSB7XG4gIHZhciB0YXJnZXRzID0gdHdlZW4uX3RhcmdldHMsXG4gICAgICBwLFxuICAgICAgaSxcbiAgICAgIHB0O1xuXG4gIGZvciAocCBpbiBtb2RpZmllcnMpIHtcbiAgICBpID0gdGFyZ2V0cy5sZW5ndGg7XG5cbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBwdCA9IHR3ZWVuLl9wdExvb2t1cFtpXVtwXTtcblxuICAgICAgaWYgKHB0ICYmIChwdCA9IHB0LmQpKSB7XG4gICAgICAgIGlmIChwdC5fcHQpIHtcbiAgICAgICAgICAvLyBpcyBhIHBsdWdpblxuICAgICAgICAgIHB0ID0gX2dldFBsdWdpblByb3BUd2VlbihwdCwgcCk7XG4gICAgICAgIH1cblxuICAgICAgICBwdCAmJiBwdC5tb2RpZmllciAmJiBwdC5tb2RpZmllcihtb2RpZmllcnNbcF0sIHR3ZWVuLCB0YXJnZXRzW2ldLCBwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0sXG4gICAgX2J1aWxkTW9kaWZpZXJQbHVnaW4gPSBmdW5jdGlvbiBfYnVpbGRNb2RpZmllclBsdWdpbihuYW1lLCBtb2RpZmllcikge1xuICByZXR1cm4ge1xuICAgIG5hbWU6IG5hbWUsXG4gICAgcmF3VmFyczogMSxcbiAgICAvL2Rvbid0IHByZS1wcm9jZXNzIGZ1bmN0aW9uLWJhc2VkIHZhbHVlcyBvciBcInJhbmRvbSgpXCIgc3RyaW5ncy5cbiAgICBpbml0OiBmdW5jdGlvbiBpbml0KHRhcmdldCwgdmFycywgdHdlZW4pIHtcbiAgICAgIHR3ZWVuLl9vbkluaXQgPSBmdW5jdGlvbiAodHdlZW4pIHtcbiAgICAgICAgdmFyIHRlbXAsIHA7XG5cbiAgICAgICAgaWYgKF9pc1N0cmluZyh2YXJzKSkge1xuICAgICAgICAgIHRlbXAgPSB7fTtcblxuICAgICAgICAgIF9mb3JFYWNoTmFtZSh2YXJzLCBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRlbXBbbmFtZV0gPSAxO1xuICAgICAgICAgIH0pOyAvL2lmIHRoZSB1c2VyIHBhc3NlcyBpbiBhIGNvbW1hLWRlbGltaXRlZCBsaXN0IG9mIHByb3BlcnR5IG5hbWVzIHRvIHJvdW5kUHJvcHMsIGxpa2UgXCJ4LHlcIiwgd2Ugcm91bmQgdG8gd2hvbGUgbnVtYmVycy5cblxuXG4gICAgICAgICAgdmFycyA9IHRlbXA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobW9kaWZpZXIpIHtcbiAgICAgICAgICB0ZW1wID0ge307XG5cbiAgICAgICAgICBmb3IgKHAgaW4gdmFycykge1xuICAgICAgICAgICAgdGVtcFtwXSA9IG1vZGlmaWVyKHZhcnNbcF0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhcnMgPSB0ZW1wO1xuICAgICAgICB9XG5cbiAgICAgICAgX2FkZE1vZGlmaWVycyh0d2VlbiwgdmFycyk7XG4gICAgICB9O1xuICAgIH1cbiAgfTtcbn07IC8vcmVnaXN0ZXIgY29yZSBwbHVnaW5zXG5cblxuZXhwb3J0IHZhciBnc2FwID0gX2dzYXAucmVnaXN0ZXJQbHVnaW4oe1xuICBuYW1lOiBcImF0dHJcIixcbiAgaW5pdDogZnVuY3Rpb24gaW5pdCh0YXJnZXQsIHZhcnMsIHR3ZWVuLCBpbmRleCwgdGFyZ2V0cykge1xuICAgIHZhciBwLCBwdCwgdjtcbiAgICB0aGlzLnR3ZWVuID0gdHdlZW47XG5cbiAgICBmb3IgKHAgaW4gdmFycykge1xuICAgICAgdiA9IHRhcmdldC5nZXRBdHRyaWJ1dGUocCkgfHwgXCJcIjtcbiAgICAgIHB0ID0gdGhpcy5hZGQodGFyZ2V0LCBcInNldEF0dHJpYnV0ZVwiLCAodiB8fCAwKSArIFwiXCIsIHZhcnNbcF0sIGluZGV4LCB0YXJnZXRzLCAwLCAwLCBwKTtcbiAgICAgIHB0Lm9wID0gcDtcbiAgICAgIHB0LmIgPSB2OyAvLyByZWNvcmQgdGhlIGJlZ2lubmluZyB2YWx1ZSBzbyB3ZSBjYW4gcmV2ZXJ0KClcblxuICAgICAgdGhpcy5fcHJvcHMucHVzaChwKTtcbiAgICB9XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKHJhdGlvLCBkYXRhKSB7XG4gICAgdmFyIHB0ID0gZGF0YS5fcHQ7XG5cbiAgICB3aGlsZSAocHQpIHtcbiAgICAgIF9yZXZlcnRpbmcgPyBwdC5zZXQocHQudCwgcHQucCwgcHQuYiwgcHQpIDogcHQucihyYXRpbywgcHQuZCk7IC8vIGlmIHJldmVydGluZywgZ28gYmFjayB0byB0aGUgb3JpZ2luYWwgKHB0LmIpXG5cbiAgICAgIHB0ID0gcHQuX25leHQ7XG4gICAgfVxuICB9XG59LCB7XG4gIG5hbWU6IFwiZW5kQXJyYXlcIixcbiAgaW5pdDogZnVuY3Rpb24gaW5pdCh0YXJnZXQsIHZhbHVlKSB7XG4gICAgdmFyIGkgPSB2YWx1ZS5sZW5ndGg7XG5cbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICB0aGlzLmFkZCh0YXJnZXQsIGksIHRhcmdldFtpXSB8fCAwLCB2YWx1ZVtpXSwgMCwgMCwgMCwgMCwgMCwgMSk7XG4gICAgfVxuICB9XG59LCBfYnVpbGRNb2RpZmllclBsdWdpbihcInJvdW5kUHJvcHNcIiwgX3JvdW5kTW9kaWZpZXIpLCBfYnVpbGRNb2RpZmllclBsdWdpbihcIm1vZGlmaWVyc1wiKSwgX2J1aWxkTW9kaWZpZXJQbHVnaW4oXCJzbmFwXCIsIHNuYXApKSB8fCBfZ3NhcDsgLy90byBwcmV2ZW50IHRoZSBjb3JlIHBsdWdpbnMgZnJvbSBiZWluZyBkcm9wcGVkIHZpYSBhZ2dyZXNzaXZlIHRyZWUgc2hha2luZywgd2UgbXVzdCBpbmNsdWRlIHRoZW0gaW4gdGhlIHZhcmlhYmxlIGRlY2xhcmF0aW9uIGluIHRoaXMgd2F5LlxuXG5Ud2Vlbi52ZXJzaW9uID0gVGltZWxpbmUudmVyc2lvbiA9IGdzYXAudmVyc2lvbiA9IFwiMy4xMS4wXCI7XG5fY29yZVJlYWR5ID0gMTtcbl93aW5kb3dFeGlzdHMoKSAmJiBfd2FrZSgpO1xudmFyIFBvd2VyMCA9IF9lYXNlTWFwLlBvd2VyMCxcbiAgICBQb3dlcjEgPSBfZWFzZU1hcC5Qb3dlcjEsXG4gICAgUG93ZXIyID0gX2Vhc2VNYXAuUG93ZXIyLFxuICAgIFBvd2VyMyA9IF9lYXNlTWFwLlBvd2VyMyxcbiAgICBQb3dlcjQgPSBfZWFzZU1hcC5Qb3dlcjQsXG4gICAgTGluZWFyID0gX2Vhc2VNYXAuTGluZWFyLFxuICAgIFF1YWQgPSBfZWFzZU1hcC5RdWFkLFxuICAgIEN1YmljID0gX2Vhc2VNYXAuQ3ViaWMsXG4gICAgUXVhcnQgPSBfZWFzZU1hcC5RdWFydCxcbiAgICBRdWludCA9IF9lYXNlTWFwLlF1aW50LFxuICAgIFN0cm9uZyA9IF9lYXNlTWFwLlN0cm9uZyxcbiAgICBFbGFzdGljID0gX2Vhc2VNYXAuRWxhc3RpYyxcbiAgICBCYWNrID0gX2Vhc2VNYXAuQmFjayxcbiAgICBTdGVwcGVkRWFzZSA9IF9lYXNlTWFwLlN0ZXBwZWRFYXNlLFxuICAgIEJvdW5jZSA9IF9lYXNlTWFwLkJvdW5jZSxcbiAgICBTaW5lID0gX2Vhc2VNYXAuU2luZSxcbiAgICBFeHBvID0gX2Vhc2VNYXAuRXhwbyxcbiAgICBDaXJjID0gX2Vhc2VNYXAuQ2lyYztcbmV4cG9ydCB7IFBvd2VyMCwgUG93ZXIxLCBQb3dlcjIsIFBvd2VyMywgUG93ZXI0LCBMaW5lYXIsIFF1YWQsIEN1YmljLCBRdWFydCwgUXVpbnQsIFN0cm9uZywgRWxhc3RpYywgQmFjaywgU3RlcHBlZEVhc2UsIEJvdW5jZSwgU2luZSwgRXhwbywgQ2lyYyB9O1xuZXhwb3J0IHsgVHdlZW4gYXMgVHdlZW5NYXgsIFR3ZWVuIGFzIFR3ZWVuTGl0ZSwgVGltZWxpbmUgYXMgVGltZWxpbmVNYXgsIFRpbWVsaW5lIGFzIFRpbWVsaW5lTGl0ZSwgZ3NhcCBhcyBkZWZhdWx0LCB3cmFwLCB3cmFwWW95bywgZGlzdHJpYnV0ZSwgcmFuZG9tLCBzbmFwLCBub3JtYWxpemUsIGdldFVuaXQsIGNsYW1wLCBzcGxpdENvbG9yLCB0b0FycmF5LCBzZWxlY3RvciwgbWFwUmFuZ2UsIHBpcGUsIHVuaXRpemUsIGludGVycG9sYXRlLCBzaHVmZmxlIH07IC8vZXhwb3J0IHNvbWUgaW50ZXJuYWwgbWV0aG9kcy9vcm9qZWN0cyBmb3IgdXNlIGluIENTU1BsdWdpbiBzbyB0aGF0IHdlIGNhbiBleHRlcm5hbGl6ZSB0aGF0IGZpbGUgYW5kIGFsbG93IGN1c3RvbSBidWlsZHMgdGhhdCBleGNsdWRlIGl0LlxuXG5leHBvcnQgeyBfZ2V0UHJvcGVydHksIF9udW1FeHAsIF9udW1XaXRoVW5pdEV4cCwgX2lzU3RyaW5nLCBfaXNVbmRlZmluZWQsIF9yZW5kZXJDb21wbGV4U3RyaW5nLCBfcmVsRXhwLCBfc2V0RGVmYXVsdHMsIF9yZW1vdmVMaW5rZWRMaXN0SXRlbSwgX2ZvckVhY2hOYW1lLCBfc29ydFByb3BUd2VlbnNCeVByaW9yaXR5LCBfY29sb3JTdHJpbmdGaWx0ZXIsIF9yZXBsYWNlUmFuZG9tLCBfY2hlY2tQbHVnaW4sIF9wbHVnaW5zLCBfdGlja2VyLCBfY29uZmlnLCBfcm91bmRNb2RpZmllciwgX3JvdW5kLCBfbWlzc2luZ1BsdWdpbiwgX2dldFNldHRlciwgX2dldENhY2hlLCBfY29sb3JFeHAsIF9wYXJzZVJlbGF0aXZlIH07IiwiaW1wb3J0IHsgZ3NhcCwgUG93ZXIwLCBQb3dlcjEsIFBvd2VyMiwgUG93ZXIzLCBQb3dlcjQsIExpbmVhciwgUXVhZCwgQ3ViaWMsIFF1YXJ0LCBRdWludCwgU3Ryb25nLCBFbGFzdGljLCBCYWNrLCBTdGVwcGVkRWFzZSwgQm91bmNlLCBTaW5lLCBFeHBvLCBDaXJjLCBUd2VlbkxpdGUsIFRpbWVsaW5lTGl0ZSwgVGltZWxpbmVNYXggfSBmcm9tIFwiLi9nc2FwLWNvcmUuanNcIjtcbmltcG9ydCB7IENTU1BsdWdpbiB9IGZyb20gXCIuL0NTU1BsdWdpbi5qc1wiO1xudmFyIGdzYXBXaXRoQ1NTID0gZ3NhcC5yZWdpc3RlclBsdWdpbihDU1NQbHVnaW4pIHx8IGdzYXAsXG4gICAgLy8gdG8gcHJvdGVjdCBmcm9tIHRyZWUgc2hha2luZ1xuVHdlZW5NYXhXaXRoQ1NTID0gZ3NhcFdpdGhDU1MuY29yZS5Ud2VlbjtcbmV4cG9ydCB7IGdzYXBXaXRoQ1NTIGFzIGdzYXAsIGdzYXBXaXRoQ1NTIGFzIGRlZmF1bHQsIENTU1BsdWdpbiwgVHdlZW5NYXhXaXRoQ1NTIGFzIFR3ZWVuTWF4LCBUd2VlbkxpdGUsIFRpbWVsaW5lTWF4LCBUaW1lbGluZUxpdGUsIFBvd2VyMCwgUG93ZXIxLCBQb3dlcjIsIFBvd2VyMywgUG93ZXI0LCBMaW5lYXIsIFF1YWQsIEN1YmljLCBRdWFydCwgUXVpbnQsIFN0cm9uZywgRWxhc3RpYywgQmFjaywgU3RlcHBlZEVhc2UsIEJvdW5jZSwgU2luZSwgRXhwbywgQ2lyYyB9OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBjdHggfSBmcm9tIFwiLi5cIjtcbnZhciBBcmMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgLy90eXBlc1xuICAgIGZ1bmN0aW9uIEFyYyh4LCB5LCByYWRpdXMsIGNvbG9yLCB2ZWxvY2l0eSkge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgICAgICB0aGlzLnZlbG9jaXR5ID0gdmVsb2NpdHk7XG4gICAgfVxuICAgIEFyYy5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGN0eCkge1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEFyYy5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy52ZWxvY2l0eSkge1xuICAgICAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgICAgICAgICB0aGlzLnggPSB0aGlzLnggKyB0aGlzLnZlbG9jaXR5LmR4O1xuICAgICAgICAgICAgdGhpcy55ID0gdGhpcy55ICsgdGhpcy52ZWxvY2l0eS5keTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIEFyYztcbn0oKSk7XG5leHBvcnQgeyBBcmMgfTtcbiIsImltcG9ydCB7IFhjZW50ZXIsIFljZW50ZXIgfSBmcm9tIFwiLi5cIjtcbmltcG9ydCB7IHJhbmRvbUNvbG9yLCByYW5nZSwgdmVsb2NpdHkgfSBmcm9tIFwiLi4vdXRpbHNcIjtcbmltcG9ydCBzZXRSYW5kb21Mb2NhdGlvbiBmcm9tIFwiLi4vdXRpbHMvc2V0UmFuZG9tTG9jYXRpb2luXCI7XG5pbXBvcnQgeyBBcmMgfSBmcm9tIFwiLi9BcmNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEVuZW15KCkge1xuICAgIHZhciByYWRpdXMgPSByYW5nZSgzMCwgNTApO1xuICAgIHZhciBjb2xvciA9IHJhbmRvbUNvbG9yKCk7XG4gICAgdmFyIF9hID0gc2V0UmFuZG9tTG9jYXRpb24ocmFkaXVzKSwgeCA9IF9hLngsIHkgPSBfYS55O1xuICAgIHZhciBlbmVteSA9IG5ldyBBcmMoeCwgeSwgcmFkaXVzLCBjb2xvciwgdmVsb2NpdHkoeCwgeSwgWGNlbnRlciwgWWNlbnRlcikpO1xuICAgIHJldHVybiBlbmVteTtcbn1cbiIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5pbXBvcnQgeyBjdHggfSBmcm9tIFwiLi5cIjtcbmltcG9ydCB7IEFyYyB9IGZyb20gXCIuL0FyY1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0UGFydGljbGUoX2EpIHtcbiAgICB2YXIgeCA9IF9hLngsIHkgPSBfYS55LCBjb2xvciA9IF9hLmNvbG9yO1xuICAgIHZhciBQYXJ0aWNsZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICAgICAgX19leHRlbmRzKFBhcnRpY2xlLCBfc3VwZXIpO1xuICAgICAgICBmdW5jdGlvbiBQYXJ0aWNsZShfYSkge1xuICAgICAgICAgICAgdmFyIHggPSBfYS54LCB5ID0gX2EueSwgcmFkaXVzID0gX2EucmFkaXVzLCBjb2xvciA9IF9hLmNvbG9yLCB2ZWxvY2l0eSA9IF9hLnZlbG9jaXR5O1xuICAgICAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgeCwgeSwgcmFkaXVzLCBjb2xvciwgdmVsb2NpdHkpIHx8IHRoaXM7XG4gICAgICAgICAgICBfdGhpcy5hbHBoYSA9IDE7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICAgIH1cbiAgICAgICAgUGFydGljbGUucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoY3R4KSB7XG4gICAgICAgICAgICAgICAgY3R4LnNhdmUoKTtcbiAgICAgICAgICAgICAgICBjdHguZ2xvYmFsQWxwaGEgPSB0aGlzLmFscGhhO1xuICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBjdHguYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFBhcnRpY2xlLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy52ZWxvY2l0eSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhdygpO1xuICAgICAgICAgICAgICAgIHRoaXMueCA9IHRoaXMueCArIHRoaXMudmVsb2NpdHkuZHg7XG4gICAgICAgICAgICAgICAgdGhpcy55ID0gdGhpcy55ICsgdGhpcy52ZWxvY2l0eS5keTtcbiAgICAgICAgICAgICAgICB0aGlzLmFscGhhIC09IDAuMDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBQYXJ0aWNsZTtcbiAgICB9KEFyYykpO1xuICAgIHZhciBuZXdQYXJ0aWNsZSA9IG5ldyBQYXJ0aWNsZSh7XG4gICAgICAgIHg6IHgsXG4gICAgICAgIHk6IHksXG4gICAgICAgIGNvbG9yOiBjb2xvcixcbiAgICAgICAgcmFkaXVzOiAzLFxuICAgICAgICB2ZWxvY2l0eTogeyBkeDogTWF0aC5yYW5kb20oKSAtIDAuNSwgZHk6IE1hdGgucmFuZG9tKCkgLSAwLjUgfSxcbiAgICB9KTtcbiAgICByZXR1cm4gbmV3UGFydGljbGU7XG59XG4iLCJpbXBvcnQgeyBYY2VudGVyLCBZY2VudGVyIH0gZnJvbSBcIi4uXCI7XG5pbXBvcnQgeyBBcmMgfSBmcm9tIFwiLi9BcmNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFBsYXllcigpIHtcbiAgICB2YXIgcGxheWVyID0gbmV3IEFyYyhYY2VudGVyLCBZY2VudGVyLCAzMCwgXCJibHVlXCIpO1xuICAgIHJldHVybiBwbGF5ZXI7XG59XG4iLCJpbXBvcnQgeyBYY2VudGVyLCBZY2VudGVyIH0gZnJvbSBcIi4uXCI7XG5pbXBvcnQgeyBBcmMgfSBmcm9tIFwiLi9BcmNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFByb2plY3RpbGUoZHgsIGR5KSB7XG4gICAgdmFyIHByb2plY3RpbGUgPSBuZXcgQXJjKFhjZW50ZXIsIFljZW50ZXIsIDUsIFwiYmx1ZVwiLCB7XG4gICAgICAgIGR4OiBkeCAqIDQsXG4gICAgICAgIGR5OiBkeSAqIDQsXG4gICAgfSk7XG4gICAgcmV0dXJuIHByb2plY3RpbGU7XG59XG4iLCJpbXBvcnQgZ2V0UGxheWVyIGZyb20gXCIuL2NvbXBvbmVudHMvUGxheWVyXCI7XG5pbXBvcnQgZ2V0UHJvamVjdGlsZSBmcm9tIFwiLi9jb21wb25lbnRzL1Byb2plY3RpbGVcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyB2ZWxvY2l0eSB9IGZyb20gXCIuL3V0aWxzXCI7XG5pbXBvcnQgaGFuZGxlRW5lbWllcyBmcm9tIFwiLi91dGlscy9oYW5kbGVFbmVtaWVzXCI7XG5pbXBvcnQgaGFuZGxlUGFydGljbGVzIGZyb20gXCIuL3V0aWxzL2hhbmRsZVBhcnRpY2xlc1wiO1xuaW1wb3J0IGhhbmRsZVByb2plY3RpbGVzIGZyb20gXCIuL3V0aWxzL2hhbmRsZVByb2plY3RpbGVcIjtcbmltcG9ydCBjcmVhdGVFbmVteSBmcm9tIFwiLi91dGlscy9jcmVhdGVFbmVteVwiO1xudmFyIGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbnZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuZXhwb3J0IHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuY2FudmFzLndpZHRoID0gaW5uZXJXaWR0aDtcbmNhbnZhcy5oZWlnaHQgPSBpbm5lckhlaWdodDtcbmJvZHkgPT09IG51bGwgfHwgYm9keSA9PT0gdm9pZCAwID8gdm9pZCAwIDogYm9keS5hcHBlbmRDaGlsZChjYW52YXMpO1xuZXhwb3J0IHZhciBYY2VudGVyID0gY2FudmFzLndpZHRoIC8gMjtcbmV4cG9ydCB2YXIgWWNlbnRlciA9IGNhbnZhcy5oZWlnaHQgLyAyO1xuZXhwb3J0IHZhciBwcm9qZWN0aWxlcyA9IFtdO1xuZXhwb3J0IHZhciBlbmVtaWVzID0gW107XG5leHBvcnQgdmFyIHBhcnRpY2xlcyA9IFtdO1xuZXhwb3J0IHZhciBwbGF5ZXIgPSBnZXRQbGF5ZXIoKTtcbmV4cG9ydCB2YXIgYW5pbWF0aW9uSWQ7XG5mdW5jdGlvbiBhbmltYXRlKCkge1xuICAgIGlmICghY3R4KSB7XG4gICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhcImNhbnZhc2UgMmQgY29udGV4dCBpcyBub3QgcHJvdmlkZWQgZnJvbSBpbmRleC50c1wiKTtcbiAgICB9XG4gICAgYW5pbWF0aW9uSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgLy9mYWRlLW91dFxuICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMC4xKVwiO1xuICAgIGN0eC5maWxsUmVjdCgwLCAwLCBpbm5lcldpZHRoLCBpbm5lckhlaWdodCk7XG4gICAgcGxheWVyLmRyYXcoKTtcbiAgICBoYW5kbGVQYXJ0aWNsZXMoKTtcbiAgICBoYW5kbGVQcm9qZWN0aWxlcygpO1xuICAgIGhhbmRsZUVuZW1pZXMoKTtcbn1cbi8vZXZlbnQgaGFuZGxlcnNcbnZhciBoYW5kbGVDbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHZhciBjbGllbnRYID0gZXZlbnQuY2xpZW50WCwgY2xpZW50WSA9IGV2ZW50LmNsaWVudFk7XG4gICAgdmFyIF9hID0gdmVsb2NpdHkoWGNlbnRlciwgWWNlbnRlciwgY2xpZW50WCwgY2xpZW50WSksIGR4ID0gX2EuZHgsIGR5ID0gX2EuZHk7XG4gICAgdmFyIHByb2plY3RpbGUgPSBnZXRQcm9qZWN0aWxlKGR4LCBkeSk7XG4gICAgcHJvamVjdGlsZXMucHVzaChwcm9qZWN0aWxlKTtcbn07XG5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ2xpY2spO1xuaWYgKGN0eCkge1xuICAgIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgY3R4LmZpbGxSZWN0KDAsIDAsIGlubmVyV2lkdGgsIGlubmVySGVpZ2h0KTtcbiAgICBwbGF5ZXIuZHJhdygpO1xuICAgIGNyZWF0ZUVuZW15KCk7XG4gICAgYW5pbWF0ZSgpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHZlbG9jaXR5KFhub3csIFlub3csIFhsYXRlciwgWWxhdGVyKSB7XG4gICAgdmFyIFhkaXN0ID0gWGxhdGVyIC0gWG5vdztcbiAgICB2YXIgWWRpc3QgPSBZbGF0ZXIgLSBZbm93O1xuICAgIHZhciBhbmdsZSA9IE1hdGguYXRhbjIoWWRpc3QsIFhkaXN0KTtcbiAgICByZXR1cm4geyBkeDogTWF0aC5jb3MoYW5nbGUpLCBkeTogTWF0aC5zaW4oYW5nbGUpIH07XG59XG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tQ29sb3IoKSB7XG4gICAgdmFyIGNvbG9yID0gXCIjXCI7XG4gICAgdmFyIGNoYXJBcnJheSA9IFtcbiAgICAgICAgMCxcbiAgICAgICAgMSxcbiAgICAgICAgMixcbiAgICAgICAgMyxcbiAgICAgICAgNCxcbiAgICAgICAgNSxcbiAgICAgICAgNixcbiAgICAgICAgNyxcbiAgICAgICAgOCxcbiAgICAgICAgOSxcbiAgICAgICAgXCJhXCIsXG4gICAgICAgIFwiYlwiLFxuICAgICAgICBcImNcIixcbiAgICAgICAgXCJkXCIsXG4gICAgICAgIFwiZVwiLFxuICAgICAgICBcImZcIixcbiAgICBdO1xuICAgIFswLCAxLCAyLCAzLCA0LCA1XS5mb3JFYWNoKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHZhciBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2KTtcbiAgICAgICAgY29sb3IgPSBjb2xvciArIGNoYXJBcnJheVtpbmRleF07XG4gICAgfSk7XG4gICAgcmV0dXJuIGNvbG9yO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJhbmdlKG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcbn1cbmV4cG9ydCB2YXIgaXNQcm9qZWN0aWxlT3V0ID0gZnVuY3Rpb24gKGFyYykge1xuICAgIHJldHVybiAoYXJjLnggPD0gLWFyYy5yYWRpdXMgfHxcbiAgICAgICAgYXJjLnggPj0gaW5uZXJXaWR0aCArIGFyYy5yYWRpdXMgfHxcbiAgICAgICAgYXJjLnkgPD0gLWFyYy5yYWRpdXMgfHxcbiAgICAgICAgYXJjLnkgPj0gaW5uZXJIZWlnaHQgKyBhcmMucmFkaXVzKTtcbn07XG5leHBvcnQgdmFyIGRpc3RhbmNlID0gZnVuY3Rpb24gKEEsIEIpIHtcbiAgICByZXR1cm4gTWF0aC5oeXBvdChBLnggLSBCLngsIEEueSAtIEIueSk7XG59O1xuZXhwb3J0IHZhciBpc1RvdWNoZWQgPSBmdW5jdGlvbiAoQSwgQikge1xuICAgIHZhciBBbkJEaXN0YW5jZSA9IGRpc3RhbmNlKEEsIEIpO1xuICAgIHJldHVybiBCb29sZWFuKEFuQkRpc3RhbmNlIDw9IEEucmFkaXVzICsgQi5yYWRpdXMpO1xufTtcbiIsImltcG9ydCB7IGVuZW1pZXMgfSBmcm9tIFwiLi5cIjtcbmltcG9ydCBnZXRFbmVteSBmcm9tIFwiLi4vY29tcG9uZW50cy9FbmVteVwiO1xudmFyIGNyZWF0ZUVuZW15ID0gZnVuY3Rpb24gKCkge1xuICAgIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGVuZW15ID0gZ2V0RW5lbXkoKTtcbiAgICAgICAgZW5lbWllcy5wdXNoKGVuZW15KTtcbiAgICB9LCAxMDAwKTtcbn07XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFbmVteTtcbiIsImltcG9ydCB7IHBhcnRpY2xlcyB9IGZyb20gXCIuLlwiO1xuaW1wb3J0IGdldFBhcnRpY2xlIGZyb20gXCIuLi9jb21wb25lbnRzL1BhcnRpY2xlXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVQYXJ0aWNsZShfYSkge1xuICAgIHZhciBlbmVteSA9IF9hLmVuZW15LCBwcm9qZWN0aWxlID0gX2EucHJvamVjdGlsZTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgICAgICB2YXIgcGFydGljbGUgPSBnZXRQYXJ0aWNsZSh7XG4gICAgICAgICAgICBjb2xvcjogZW5lbXkuY29sb3IsXG4gICAgICAgICAgICB4OiBwcm9qZWN0aWxlLngsXG4gICAgICAgICAgICB5OiBwcm9qZWN0aWxlLnksXG4gICAgICAgIH0pO1xuICAgICAgICBwYXJ0aWNsZXMucHVzaChwYXJ0aWNsZSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgYW5pbWF0aW9uSWQsIGVuZW1pZXMsIHBsYXllciwgcHJvamVjdGlsZXMgfSBmcm9tIFwiLi5cIjtcbmltcG9ydCB7IGlzVG91Y2hlZCB9IGZyb20gXCIuLi91dGlsc1wiO1xuaW1wb3J0IGNyZWF0ZVBhcnRpY2xlIGZyb20gXCIuL2NyZWF0ZVBhcnRpY2xlc1wiO1xuaW1wb3J0IHJlbW92ZVByb2plY3RpbGVBbmRFbmVteSBmcm9tIFwiLi9yZW1vdmVFbmVteWFuZFByb2plY3RpbGVcIjtcbmltcG9ydCByZWR1Y2VFbmVteVNpemVBbmRSZW1vdmVQcm9qZWN0aWxlIGZyb20gXCIuL3JlZHVjZUVuZW15U2l6ZWFuZFJlbW92ZVByb2plY3RpbGVcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZUVuZW1pZXMoKSB7XG4gICAgdmFyIG1pblJhZGl1cyA9IDEwO1xuICAgIGVuZW1pZXMuZm9yRWFjaChmdW5jdGlvbiAoZW5lbXksIGVuZW15SW5kZXgpIHtcbiAgICAgICAgZW5lbXkudXBkYXRlKCk7XG4gICAgICAgIGlmIChpc1RvdWNoZWQoZW5lbXksIHBsYXllcikpIHtcbiAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbklkKTtcbiAgICAgICAgfVxuICAgICAgICBwcm9qZWN0aWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChwcm9qZWN0aWxlLCBwcm9qZWN0aWxlSW5kZXgpIHtcbiAgICAgICAgICAgIGlmIChpc1RvdWNoZWQoZW5lbXksIHByb2plY3RpbGUpKSB7XG4gICAgICAgICAgICAgICAgY3JlYXRlUGFydGljbGUoeyBlbmVteTogZW5lbXksIHByb2plY3RpbGU6IHByb2plY3RpbGUgfSk7XG4gICAgICAgICAgICAgICAgaWYgKGVuZW15LnJhZGl1cyAtIDEwID4gbWluUmFkaXVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZHVjZUVuZW15U2l6ZUFuZFJlbW92ZVByb2plY3RpbGUoeyBlbmVteTogZW5lbXksIHByb2plY3RpbGVJbmRleDogcHJvamVjdGlsZUluZGV4IH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVQcm9qZWN0aWxlQW5kRW5lbXkoeyBlbmVteUluZGV4OiBlbmVteUluZGV4LCBwcm9qZWN0aWxlSW5kZXg6IHByb2plY3RpbGVJbmRleCB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgeyBwYXJ0aWNsZXMgfSBmcm9tIFwiLi5cIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVBhcnRpY2xlcygpIHtcbiAgICBwYXJ0aWNsZXMuZm9yRWFjaChmdW5jdGlvbiAocGFydGljbGUpIHsgcmV0dXJuIHBhcnRpY2xlLnVwZGF0ZSgpOyB9KTtcbn1cbiIsImltcG9ydCB7IHByb2plY3RpbGVzIH0gZnJvbSBcIi4uXCI7XG5pbXBvcnQgeyBpc1Byb2plY3RpbGVPdXQgfSBmcm9tIFwiLi4vdXRpbHNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVByb2plY3RpbGVzKCkge1xuICAgIHByb2plY3RpbGVzLmZvckVhY2goZnVuY3Rpb24gKHByb2plY3RpbGUsIHByb2plY3RpbGVJbmRleCkge1xuICAgICAgICBwcm9qZWN0aWxlLnVwZGF0ZSgpO1xuICAgICAgICBpZiAoaXNQcm9qZWN0aWxlT3V0KHByb2plY3RpbGUpKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0aWxlcy5zcGxpY2UocHJvamVjdGlsZUluZGV4LCAxKTtcbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgZ3NhcCBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0IHsgcHJvamVjdGlsZXMgfSBmcm9tIFwiLi5cIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZUVuZW15U2l6ZUFuZFJlbW92ZVByb2plY3RpbGUoX2EpIHtcbiAgICB2YXIgZW5lbXkgPSBfYS5lbmVteSwgcHJvamVjdGlsZUluZGV4ID0gX2EucHJvamVjdGlsZUluZGV4O1xuICAgIGdzYXAudG8oZW5lbXksIHtcbiAgICAgICAgcmFkaXVzOiBlbmVteS5yYWRpdXMgLSAxMCxcbiAgICB9KTtcbiAgICBlbmVteS5yYWRpdXMgLT0gMTA7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHByb2plY3RpbGVzLnNwbGljZShwcm9qZWN0aWxlSW5kZXgsIDEpO1xuICAgIH0sIDApO1xufVxuIiwiaW1wb3J0IHsgZW5lbWllcywgcHJvamVjdGlsZXMgfSBmcm9tIFwiLi5cIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbW92ZVByb2plY3RpbGVBbmRFbmVteShfYSkge1xuICAgIHZhciBlbmVteUluZGV4ID0gX2EuZW5lbXlJbmRleCwgcHJvamVjdGlsZUluZGV4ID0gX2EucHJvamVjdGlsZUluZGV4O1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBlbmVtaWVzLnNwbGljZShlbmVteUluZGV4LCAxKTtcbiAgICAgICAgcHJvamVjdGlsZXMuc3BsaWNlKHByb2plY3RpbGVJbmRleCwgMSk7XG4gICAgfSwgMCk7XG59XG4iLCJpbXBvcnQgeyByYW5nZSB9IGZyb20gXCIuLi91dGlsc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0UmFuZG9tTG9jYXRpb24ocmFkaXVzKSB7XG4gICAgdmFyIHgsIHk7XG4gICAgaWYgKE1hdGgucmFuZG9tKCkgPCAwLjUpIHtcbiAgICAgICAgeCA9IE1hdGgucmFuZG9tKCkgPCAwLjUgPyAtcmFkaXVzIDogaW5uZXJXaWR0aCArIHJhZGl1cztcbiAgICAgICAgeSA9IHJhbmdlKDAsIGlubmVySGVpZ2h0KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHggPSByYW5nZSgwLCBpbm5lcldpZHRoKTtcbiAgICAgICAgeSA9IE1hdGgucmFuZG9tKCkgPCAwLjUgPyAtcmFkaXVzIDogaW5uZXJIZWlnaHQgKyByYWRpdXM7XG4gICAgfVxuICAgIHJldHVybiB7IHg6IHgsIHk6IHkgfTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==