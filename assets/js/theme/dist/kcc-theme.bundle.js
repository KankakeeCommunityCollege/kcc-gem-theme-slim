!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);var n=function(){var e=(new Date).getFullYear();document.getElementById("currentYear").innerHTML=e};var o=function(){document.getElementById("searchIcon")&&document.addEventListener("click",function(e){var t=document.getElementById("searchImg"),r=document.getElementById("searchCollapse"),n=document.getElementById("mainNav"),o=document.getElementById("globalNav"),l=-1!=t.style.backgroundImage.indexOf("assets/img/search.svg"),a=r.getAttribute("aria-hidden");e.target.closest("#searchIcon")&&(e.preventDefault(),t.style.backgroundImage=l?'url("./assets/img/x.svg")':'url("./assets/img/search.svg")',r.classList.toggle("nav-global__search-collapse--visible"),"true"===a?r.setAttribute("aria-hidden","false"):r.setAttribute("aria-hidden","true"),n.classList.toggle("local-nav--search-toggle"),o.classList.toggle("nav-global--search-toggle"))},!1)};var l=function(){var e=document.querySelectorAll("img[data-src]"),t=!0,r=!1,n=void 0;try{for(var o,l=function(){var e=o.value;e.setAttribute("src",e.getAttribute("data-src")),e.onload=function(){e.removeAttribute("data-src")}},a=e[Symbol.iterator]();!(t=(o=a.next()).done);t=!0)l()}catch(e){r=!0,n=e}finally{try{t||null==a.return||a.return()}finally{if(r)throw n}}};var a=function e(t){if(3==t.nodeType&&(t.data=t.data.replace(/--/g,"—")),1==t.nodeType&&"SCRIPT"!=t.nodeName)for(var r=0;r<t.childNodes.length;r++)e(t.childNodes[r])};var s=function(){document.querySelector(".hero-slider__slider")&&$(".hero-slider__slider").slick({dots:!0,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,prevArrow:'<img alt="Previous slide" class="a-left control-c prev slick-prev" src="assets/img/dbl-prev.svg">',nextArrow:'<img alt="Next slide" class="a-right control-c next slick-next" src="assets/img/dbl-next.svg">'})};var c=function e(t){if(3==t.nodeType){var r=/\*\*(\S+)\*\*/g;-1!=t.data.search(r)&&(t.parentElement.innerHTML=t.parentElement.innerHTML.replace(r,'<span class="typography__power-text">$1</span>'))}if(1==t.nodeType&&"SCRIPT"!=t.nodeName)for(var n=0;n<t.childNodes.length;n++)e(t.childNodes[n])};document.addEventListener("DOMContentLoaded",function(){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;do{if(t.matches(e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null}),document.querySelector(".hero-slider__slider")&&c(document.querySelector(".hero-slider__slider")),s(),a(document.body),n(),o(),l()})}]);