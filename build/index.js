parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"mUCT":[function(require,module,exports) {
"use strict";function e(){var e=document.querySelectorAll(".whirli-slide.whirli-lazy-img");if("undefined"!=typeof IntersectionObserver){var r=new IntersectionObserver(function(e,i){e.forEach(function(e){if(e.isIntersecting){var i=e.target;i.classList.remove("whirli-lazy-img"),r.unobserve(i)}})});e.forEach(function(e){r.observe(e)})}else e.forEach(function(e){e.classList.remove("whirli-lazy-img")})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.lazyLoadImages=e;
},{}],"rW4W":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.addMarkupToPage=t,exports.carouselMarkup=void 0;var n=function(n){var t=n.slides.length;return"\n    ".concat(n.slides.map(function(n,a){var i=a+1;return'\n        <div class="whirli-slide whirli-slide--'.concat(i,' whirli-lazy-img" aria-label="slide ').concat(i," of ").concat(t,'" aria-hidden="').concat(1!==i,'">\n          ').concat(n.content,"\n        </div>\n      ")}).join(""),"\n      \n      ").concat(n.showButtons?'<button class="whirli-button whirli-button--prev" aria-label="no previous slide available" aria-disabled="true"></button>\n      <button class="whirli-button whirli-button--next" aria-label="next slide"></button>':"","\n\n      ").concat(n.showDots?'<nav class="whirli-dot-nav">\n          '.concat(n.slides.map(function(n,t){var a=t+1,i=1===a?"slide ".concat(a," selected"):"go to slide ".concat(a);return'\n              <button class="whirli-dot '.concat(1===a?"whirli-dot--selected":"",'" data-slide="whirli-slide--').concat(a,'" aria-label="').concat(i,'"></button>\n            ')}).join(""),"\n        </nav>"):"","\n  ")};function t(t,a){document.querySelector("#".concat(t)).innerHTML="".concat(n(a))}exports.carouselMarkup=n;
},{}],"ioUY":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.handleButtonNavigation=l,exports.handleDotNavigation=o,exports.setSlideLinkTabindex=u;var t=function(t,e){var i=document.querySelector(".whirli-button--prev"),r=document.querySelector(".whirli-button--next");t===e.length-1?(r.setAttribute("aria-disabled",!0),r.setAttribute("aria-label","no next slide available")):0===t?(i.setAttribute("aria-disabled",!0),i.setAttribute("aria-label","no previous slide available")):(r.removeAttribute("aria-disabled"),i.removeAttribute("aria-disabled"),r.setAttribute("aria-label","next slide"),i.setAttribute("aria-label","previous slide"))},e=function(t,e,i){e[i].setAttribute("aria-label","navigate to slide ".concat(i+1)),e[i].classList.remove("whirli-dot--selected"),e[t].setAttribute("aria-label","slide ".concat(t+1," selected")),e[t].classList.add("whirli-dot--selected")},i=function(t){var e;return t.forEach(function(t,i){"false"===t.getAttribute("aria-hidden")&&(e=i)}),e},r=function(i,r,a){var n=document.querySelectorAll(".whirli-button"),l=document.querySelectorAll(".whirli-dot");if(void 0!==i){r[a].setAttribute("aria-hidden",!0),r[a].removeAttribute("tabindex");var o=r[a].querySelector("a");o&&o.setAttribute("tabindex","-1");var u=r.indexOf(i);l.length>0&&e(u,l,a),n.length>0&&t(u,r);var c=i.querySelector("a");c&&c.setAttribute("tabindex","0"),i.setAttribute("aria-hidden",!1),i.setAttribute("tabindex",0),i.focus()}},a=function(t,e){var a=i(e),n=t.target.getAttribute("data-slide"),l=document.querySelector(".".concat(n));r(l,e,a)},n=function(t,e){var a=i(e),n=t.target.classList.contains("whirli-button--next")?e[a+1]:t.target.classList.contains("whirli-button--prev")?e[a-1]:null;r(n,e,a)};function l(t){document.querySelectorAll(".whirli-button").forEach(function(e){e.addEventListener("click",function(e){n(e,t)})})}function o(t){document.querySelectorAll(".whirli-dot").forEach(function(e){e.addEventListener("click",function(e){a(e,t)})})}function u(t){t.forEach(function(t){var e=t.querySelector("a");e&&e.setAttribute("tabindex","-1")});var e=t[0].querySelector("a");e&&e.setAttribute("tabindex","0")}
},{}],"O1rr":[function(require,module,exports) {
"use strict";var e;Object.defineProperty(exports,"__esModule",{value:!0}),exports.handleTouch=n;var t=function(t){e=t.touches[0].clientX},o=function(t){document.querySelector('.whirli-slide[aria-hidden="true"]').offsetWidth;if(e){var o=t.touches[0].clientX;e-o>0?console.log(t.touches[0],"right"):console.log(t.touches[0],"left"),e=null}};function n(e){var n=document.getElementById(e);console.log(n),n.addEventListener("touchstart",t),n.addEventListener("touchmove",o)}
},{}],"XN8R":[function(require,module,exports) {

},{}],"Focm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.init=i;var e=require("./src/lazy-load"),o=require("./src/markup"),t=require("./src/navigation"),r=require("./src/touch");function i(i,s){(0,o.addMarkupToPage)(i,s);var d=document.querySelectorAll(".whirli-slide");s.showButtons&&(0,t.handleButtonNavigation)(d),s.showDots&&(0,t.handleDotNavigation)(d),(0,t.setSlideLinkTabindex)(d),(0,e.lazyLoadImages)(),(0,r.handleTouch)(i)}require("./src/scss/styles.scss"),"undefined"!=typeof NodeList&&NodeList.prototype&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach),"undefined"!=typeof NodeList&&NodeList.prototype&&!NodeList.prototype.indexOf&&(NodeList.prototype.indexOf=Array.prototype.indexOf);
},{"./src/lazy-load":"mUCT","./src/markup":"rW4W","./src/navigation":"ioUY","./src/touch":"O1rr","./src/scss/styles.scss":"XN8R"}]},{},["Focm"], null)