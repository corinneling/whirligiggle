parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"mUCT":[function(require,module,exports) {
"use strict";function e(){var e=document.querySelectorAll(".whirli-slide.whirli-lazy-img"),r=new IntersectionObserver(function(e,i){e.forEach(function(e){if(e.isIntersecting){var i=e.target;i.classList.remove("whirli-lazy-img"),r.unobserve(i)}})});e.forEach(function(e){r.observe(e)})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.lazyLoadImages=e;
},{}],"rW4W":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.addMarkupToPage=t,exports.carouselMarkup=void 0;var n=function(n){var t=n.slides.length;return"\n    ".concat(n.slides.map(function(n,a){var i=a+1;return'\n        <div class="whirli-slide whirli-slide--'.concat(i,' whirli-lazy-img" aria-label="slide ').concat(i," of ").concat(t,'" aria-hidden="').concat(1!==i,'">\n          ').concat(n.content,"\n        </div>\n      ")}).join(""),"\n      \n      ").concat(n.showButtons?'<button class="whirli-button whirli-button--prev" aria-label="no previous slide available" aria-disabled="true"></button>\n      <button class="whirli-button whirli-button--next" aria-label="next slide"></button>':"","\n\n      ").concat(n.showDots?'<nav class="whirli-dot-nav">\n          '.concat(n.slides.map(function(n,t){var a=t+1,i=1===a?"slide ".concat(a," selected"):"go to slide ".concat(a);return'\n              <button class="whirli-dot '.concat(1===a?"whirli-dot--selected":"",'" data-slide="whirli-slide--').concat(a,'" aria-label="').concat(i,'"></button>\n            ')}).join(""),"\n        </nav>"):"","\n  ")};function t(t,a){document.querySelector("#".concat(t)).innerHTML="".concat(n(a))}exports.carouselMarkup=n;
},{}],"ioUY":[function(require,module,exports) {
"use strict";function t(t){return n(t)||i(t)||r(t)||e()}function e(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(t,e){if(t){if("string"==typeof t)return a(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(t,e):void 0}}function i(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function n(t){if(Array.isArray(t))return a(t)}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,i=new Array(e);r<e;r++)i[r]=t[r];return i}Object.defineProperty(exports,"__esModule",{value:!0}),exports.handleButtonNavigation=b,exports.handleDotNavigation=f,exports.setSlideLinkTabindex=A;var o=function(t,e){var r=document.querySelector(".whirli-button--prev"),i=document.querySelector(".whirli-button--next");t===e.length-1?(i.setAttribute("aria-disabled",!0),i.setAttribute("aria-label","no next slide available")):0===t?(r.setAttribute("aria-disabled",!0),r.setAttribute("aria-label","no previous slide available")):(i.removeAttribute("aria-disabled"),r.removeAttribute("aria-disabled"),i.setAttribute("aria-label","next slide"),r.setAttribute("aria-label","previous slide"))},l=function(t,e,r){e[r].setAttribute("aria-label","go to slide ".concat(r)),e[r].classList.remove("whirli-dot--selected"),e[t].setAttribute("aria-label","slide ".concat(t," selected")),e[t].classList.add("whirli-dot--selected")},u=function(t){var e;return t.forEach(function(t,r){"false"===t.getAttribute("aria-hidden")&&(e=r)}),e},c=function(e,r,i){var n=document.querySelectorAll(".whirli-button"),a=document.querySelectorAll(".whirli-dot");if(void 0!==e){r[i].setAttribute("aria-hidden",!0),r[i].removeAttribute("tabindex");var u=r[i].querySelector("a");u&&u.setAttribute("tabindex","-1");var c=t(r).indexOf(e);a.length>0&&l(c,a,i),n.length>0&&o(c,r);var s=e.querySelector("a");s&&s.setAttribute("tabindex","0"),e.setAttribute("aria-hidden",!1),e.setAttribute("tabindex",0),e.focus()}},s=function(t){var e=document.querySelectorAll(".whirli-slide"),r=u(e),i=t.target.getAttribute("data-slide"),n=document.querySelector(".".concat(i));c(n,e,r)},d=function(t){var e=document.querySelectorAll(".whirli-slide"),r=u(e),i=t.target.classList.contains("whirli-button--next")?e[r+1]:t.target.classList.contains("whirli-button--prev")?e[r-1]:null;c(i,e,r)};function b(){document.querySelectorAll(".whirli-button").forEach(function(t){t.addEventListener("click",d)})}function f(){document.querySelectorAll(".whirli-dot").forEach(function(t){t.addEventListener("click",s)})}function A(){var t=document.querySelectorAll(".whirli-slide");t.forEach(function(t){var e=t.querySelector("a");e&&e.setAttribute("tabindex","-1")});var e=t[0].querySelector("a");e&&e.setAttribute("tabindex","0")}
},{}],"XN8R":[function(require,module,exports) {

},{}],"Focm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.init=r;var e=require("./src/lazy-load"),s=require("./src/markup"),a=require("./src/navigation");function r(r,t){(0,s.addMarkupToPage)(r,t),t.showButtons&&(0,a.handleButtonNavigation)(),t.showDots&&(0,a.handleDotNavigation)(),(0,a.setSlideLinkTabindex)(),(0,e.lazyLoadImages)()}require("./src/scss/styles.scss");
},{"./src/lazy-load":"mUCT","./src/markup":"rW4W","./src/navigation":"ioUY","./src/scss/styles.scss":"XN8R"}]},{},["Focm"], null)
//# sourceMappingURL=/index.js.map