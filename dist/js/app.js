!function(e){var t={};function r(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(o,i,function(t){return e[t]}.bind(null,i));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);r(1),r(2)},function(e,t){({paused:!1,stopped:!1,options:{speed:9e3,acceleration:5,reverse:!1,selector:".c-carousel",slidesSelector:".c-carousel__slides",leftArrowSelector:".c-carousel__arrow--left",rightArrowSelector:".c-carousel__arrow--right"},init:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};for(var t in e){if(!e.hasOwnProperty(t))break;this.options[t]=e[t]}var r=document.querySelector(e.selector||this.options.selector),o=this._slides=r.querySelector(this.options.slidesSelector);this._leftArrow=r.querySelector(this.options.leftArrowSelector),this._rightArrow=r.querySelector(this.options.rightArrowSelector),this.options.speed=this.options.speed*o.children.length,this.width=o.offsetWidth,o.innerHTML=o.innerHTML+o.innerHTML+o.innerHTML,this._registerEvents(),this._animate()},_registerEvents:function(){var e=this,t=this.options.speed,r=this.options.reverse;this._rightArrow.addEventListener("mouseover",function(){e.options.speed=t/e.options.acceleration,e.options.reverse=!1}),this._rightArrow.addEventListener("mouseleave",function(){e.options.speed=t,e.options.reverse=r}),this._leftArrow.addEventListener("mouseover",function(){e.options.speed=t/e.options.acceleration,e.options.reverse=!0}),this._leftArrow.addEventListener("mouseleave",function(){e.options.speed=t,e.options.reverse=r}),this._slides.addEventListener("mouseover",this.pause.bind(this)),this._slides.addEventListener("mouseleave",this.start.bind(this)),window.addEventListener("resize",function(){e.width=e._slides.offsetWidth})},pause:function(){this.paused=!0},start:function(){this.paused=!1},stop:function(){this.stopped=!0},_animate:function(){var e=this,t=this._slides,r=t.lastElementChild.getBoundingClientRect().right/3,o=0,i=0,n=0;!function s(){e.paused||(o=60*e.options.speed/1e3,i=r/o,n+=e.options.reverse?i:-i,t.style.transform="translateX(".concat(n,"px)"),e.options.reverse?n>=e.width-r&&(n=e.width-2*r):Math.abs(n)>=2*r&&(n=-r)),!e.stopped&&requestAnimationFrame(s)}()}}).init({selector:".c-carousel"})},function(e,t,r){}]);