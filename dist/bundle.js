!function(e){var t={};function r(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(i,n,function(t){return e[t]}.bind(null,n));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=27)}([function(e,t,r){(function(e){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var r=function(e){"use strict";var r=Object.prototype,i=r.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function s(e,t,r,i){var n=t&&t.prototype instanceof f?t:f,o=Object.create(n.prototype),a=new L(i||[]);return o._invoke=function(e,t,r){var i="suspendedStart";return function(n,o){if("executing"===i)throw new Error("Generator is already running");if("completed"===i){if("throw"===n)throw o;return j()}for(r.method=n,r.arg=o;;){var a=r.delegate;if(a){var c=w(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===i)throw i="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);i="executing";var s=l(e,t,r);if("normal"===s.type){if(i=r.done?"completed":"suspendedYield",s.arg===d)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(i="completed",r.method="throw",r.arg=s.arg)}}}(e,r,a),o}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var d={};function f(){}function u(){}function m(){}var p={};p[o]=function(){return this};var h=Object.getPrototypeOf,b=h&&h(h(S([])));b&&b!==r&&i.call(b,o)&&(p=b);var g=m.prototype=f.prototype=Object.create(p);function v(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function y(e,r){var n;this._invoke=function(o,a){function c(){return new r((function(n,c){!function n(o,a,c,s){var d=l(e[o],e,a);if("throw"!==d.type){var f=d.arg,u=f.value;return u&&"object"===t(u)&&i.call(u,"__await")?r.resolve(u.__await).then((function(e){n("next",e,c,s)}),(function(e){n("throw",e,c,s)})):r.resolve(u).then((function(e){f.value=e,c(f)}),(function(e){return n("throw",e,c,s)}))}s(d.arg)}(o,a,n,c)}))}return n=n?n.then(c,c):c()}}function w(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return d;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var i=l(r,e.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,d;var n=i.arg;return n?n.done?(t[e.resultName]=n.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):n:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function S(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(i.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:j}}function j(){return{value:void 0,done:!0}}return u.prototype=g.constructor=m,m.constructor=u,m[c]=u.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===u||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,c in e||(e[c]="GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},v(y.prototype),y.prototype[a]=function(){return this},e.AsyncIterator=y,e.async=function(t,r,i,n,o){void 0===o&&(o=Promise);var a=new y(s(t,r,i,n),o);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},v(g),g[c]="Generator",g[o]=function(){return this},g.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var i=t.pop();if(i in e)return r.value=i,r.done=!1,r}return r.done=!0,r}},e.values=S,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!e)for(var t in this)"t"===t.charAt(0)&&i.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,i){return a.type="throw",a.arg=e,t.next=r,i&&(t.method="next",t.arg=void 0),!!i}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=i.call(o,"catchLoc"),s=i.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),k(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var i=r.completion;if("throw"===i.type){var n=i.arg;k(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:S(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},e}("object"===t(e)?e.exports:{});try{regeneratorRuntime=r}catch(e){Function("r","regeneratorRuntime = r")(r)}}).call(this,r(1)(e))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,r){var i=r(3),n=r(4);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var o={insert:"head",singleton:!1};i(n,o);e.exports=n.locals||{}},function(e,t,r){"use strict";var i,n=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},o=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}(),a=[];function c(e){for(var t=-1,r=0;r<a.length;r++)if(a[r].identifier===e){t=r;break}return t}function s(e,t){for(var r={},i=[],n=0;n<e.length;n++){var o=e[n],s=t.base?o[0]+t.base:o[0],l=r[s]||0,d="".concat(s," ").concat(l);r[s]=l+1;var f=c(d),u={css:o[1],media:o[2],sourceMap:o[3]};-1!==f?(a[f].references++,a[f].updater(u)):a.push({identifier:d,updater:b(u,t),references:1}),i.push(d)}return i}function l(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var n=r.nc;n&&(i.nonce=n)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var d,f=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function u(e,t,r,i){var n=r?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=f(t,n);else{var o=document.createTextNode(n),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function m(e,t,r){var i=r.css,n=r.media,o=r.sourceMap;if(n?e.setAttribute("media",n):e.removeAttribute("media"),o&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var p=null,h=0;function b(e,t){var r,i,n;if(t.singleton){var o=h++;r=p||(p=l(t)),i=u.bind(null,r,o,!1),n=u.bind(null,r,o,!0)}else r=l(t),i=m.bind(null,r,t),n=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else n()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=n());var r=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<r.length;i++){var n=c(r[i]);a[n].references--}for(var o=s(e,t),l=0;l<r.length;l++){var d=c(r[l]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}r=o}}}},function(e,t,r){var i=r(5),n=r(6),o=r(7),a=r(8),c=r(9),s=r(10),l=r(11),d=r(12),f=r(13),u=r(14),m=r(15),p=r(16),h=r(17),b=r(18),g=r(19),v=r(20),y=r(21),w=r(22),x=r(23),k=r(24),L=r(25),S=r(26);t=i(!1);var j=n(o),E=n(a),O=n(c),_=n(s),q=n(l),z=n(d),C=n(f),T=n(u),M=n(m),N=n(p),P=n(h),A=n(b),I=n(g),R=n(v),H=n(y),F=n(w),G=n(x),U=n(k),B=n(L),K=n(S);t.push([e.i,'*{margin:0;padding:0;box-sizing:border-box}html{font-family:"Kelson Sans",sans-serif;font-size:87.5%;color:#fff;scrollbar-width:thin}body{min-height:100vh;background-image:url('+j+');background-size:cover;background-repeat:no-repeat;background-position:center;scrollbar-color:#fff rgba(255,255,255,0);scrollbar-width:thin;overflow-x:hidden}body::-webkit-scrollbar{opacity:0;width:.8rem;cursor:pointer}body::-webkit-scrollbar-thumb{background-color:#b3b3b3;border-radius:5px}body::-webkit-scrollbar-thumb:hover{background-color:#969696}body::-webkit-scrollbar-thumb:active{background-color:#818181}body img{user-select:none}body li{list-style-type:none}body .container{width:85%;overflow:visible;margin:0 auto}.material-icons{font-size:inherit;user-select:none}.color-primary{color:#2e7ded !important}.link{cursor:pointer !important}.shadow{box-shadow:.2rem .2rem .2rem 0 rgba(0,0,0,.5) !important}.button{padding:.9rem 1rem;display:inline-flex;align-items:center;justify-content:center;border:#fff;border-radius:1rem;user-select:none}.percent::after{content:"%";font-size:80%;margin-left:1.3%}.hidden{display:none !important}nav{display:flex;align-items:center;justify-content:space-between;height:8rem}nav .logo-nav{height:1rem}nav .button-nav{position:relative;color:#000;width:2.8rem;height:2.8rem;background:#fff}nav .icon-nav{font-size:1.6rem}nav .button-badge{position:absolute;text-align:center;top:-0.6rem;right:-0.6rem;padding:.3rem .6rem;border-radius:1rem;background:#2e7ded;font-size:.8rem;color:#fff}.item-details{position:relative;display:grid;grid-template-columns:24rem 32rem auto;height:50rem;align-items:center}.item-details .item-left{opacity:0}.item-details .item-left .item-name{font-size:4.3rem;text-transform:uppercase;display:-webkit-box;-webkit-line-clamp:6;-webkit-box-orient:vertical;overflow-y:hidden;word-spacing:100vw;line-height:1.1em}.item-details .item-left .item-rating{color:#fff;font-size:3rem;font-weight:100;margin-top:.7rem;margin-bottom:3rem}.item-details .item-left .item-rating .percent{color:#2e7ded;font-weight:bold}.item-details .item-left .item-button{padding-left:3rem;padding-right:3rem;font-weight:100;text-transform:uppercase;background:#2e7ded}.item-details .item-middle{opacity:0;display:flex;justify-content:center}.item-details .item-middle .item-image{max-width:28rem;margin-right:.5rem;box-shadow:.5rem .5rem .5rem 0 rgba(0,0,0,.5);border-radius:20px}.item-details .item-middle .item-description .trailer{width:32rem;background:#000;box-shadow:.5rem .5rem .5rem 0 rgba(0,0,0,.5);height:18rem;margin-bottom:2rem;border-radius:15px}.item-details .item-middle .item-description div h2{margin-bottom:.5rem;margin-top:1rem}.item-details .item-middle .item-description div h2:first-child{margin-top:0}.item-details .item-middle .item-description div h2:last-child{margin-bottom:0}.item-details .item-middle .item-description div>p{width:32rem;display:-webkit-box;-webkit-line-clamp:6;-webkit-box-orient:vertical;overflow-y:hidden;line-height:1.5em;font-family:"Cooper Hewitt",sans-serif}.item-details .item-middle .item-description div h3{margin-bottom:.4rem}.item-details .item-middle .item-description div .list-crew{display:grid;grid-template-columns:1fr 1fr 1fr;gap:1rem}.item-details .item-middle .item-description div .list-crew p{line-height:1.3em}.item-details .item-section{opacity:0;margin-top:-2rem;justify-self:center}.item-details .item-section .section-button{display:flex;margin-bottom:1rem;width:2.8rem;height:2.8rem;background-color:rgba(255,255,255,.15)}.item-details .item-section .section-button:last-child{margin:0}.item-details .item-section .section-button .icon-section{color:#000;font-size:1.8rem}.item-details .item-section .selected{background-color:#fff;background-position:center;box-shadow:.2rem .2rem .2rem 0 rgba(0,0,0,.5);transition:box-shadow 400ms,background 400ms}.item-details .item-section .selected:hover{background:#dadada}.item-details .item-section .selected:active{box-shadow:0 0 0 0 rgba(0,0,0,0)}.list-items{display:grid;width:100%;grid-auto-columns:20rem;grid-auto-flow:column;align-items:center;column-gap:3rem;overflow-y:visible;overflow-x:auto;padding:2rem 0;margin:4rem 0;scrollbar-color:#fff rgba(255,255,255,0);scrollbar-width:thin}.list-items::-webkit-scrollbar{opacity:0;height:.5rem;cursor:pointer}.list-items::-webkit-scrollbar-thumb{background-color:#fff;border-radius:5px}.list-items::-webkit-scrollbar-thumb:hover{background-color:#b8b8b8}.list-items::-webkit-scrollbar-thumb:active{background-color:#8f8f8f}.list-items .item{position:relative;cursor:pointer;width:100%;height:6rem;background-color:#fff;color:#000;border-radius:1rem;display:grid;grid-template-columns:1fr 2fr;overflow:visible;border:3px solid #fff;transition:opacity 400ms,border 400ms}.list-items .item:hover{opacity:.9}.list-items .item .item-pic{position:relative;display:flex;align-items:center;justify-content:center;background-color:#eaeaea;border-radius:1rem 0 0 1rem}.list-items .item .item-pic .item-img{position:absolute;width:80%;border-radius:8px;box-shadow:.2rem .2rem .2rem 0 rgba(0,0,0,.5)}.list-items .item .item-desc{padding:0 1rem;align-self:center;text-transform:uppercase}.list-items .item .item-desc p{margin-bottom:.22rem}.list-items .item .item-desc p:last-child{margin:0}.list-items .item .item-desc .name{font-weight:bold;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.list-items .item .item-desc .rating{color:silver}.list-items .item .item-desc .rating .percent{color:#000}.list-items .item .item-desc .button-item{display:flex;font-size:1.8rem;transition:color 300ms;position:absolute;bottom:.4rem;right:.5rem}.list-items .item .item-desc .button-item:hover{color:red}.list-items .selected{border:3px solid #2e7ded}.fave{width:22rem;display:grid;align-items:center;grid-template-rows:2rem 8rem auto;padding:3rem 2.3rem;height:100%;position:fixed;z-index:1;top:0;right:-22rem;background:#fff;color:#000;transition:right 400ms ease-in-out}.fave .fave-buttons{padding:0;height:2rem;display:flex;justify-content:space-between}.fave .fave-buttons .button-item{display:flex;font-size:1.8rem;transition:color 300ms}.fave .fave-buttons .button-item:hover{color:red}.fave .fave-buttons span{transition:color 300ms}.fave .fave-buttons span:hover{color:red}.fave .fave-buttons .delete::before{content:"Delete All";font-size:1rem;overflow:hidden;width:0;align-self:center;margin-right:.2rem;font-weight:100;white-space:nowrap;transition:width 500ms ease-in-out}.fave .fave-buttons .delete:hover::before{width:3.64rem}.fave .fave-heading{font-size:2.7rem;text-transform:uppercase;font-weight:bold}.fave .fave-table{display:grid;align-self:baseline;align-items:center;grid-template-columns:3fr 5fr 1.5rem;column-gap:.8rem;row-gap:1.3rem;width:100%;max-height:100%;overflow-y:scroll;-ms-overflow-style:none}.fave .fave-table::-webkit-scrollbar{display:none}.fave .fave-table img{width:100%;border-radius:8px;cursor:pointer}.fave .fave-table p{cursor:pointer}.fave .fave-table .material-icons{font-size:1.5rem;color:red;transition:color 300ms}.fave .fave-table .material-icons:hover{color:#000}.dom-preload{position:fixed;left:0;top:0;width:100%;height:100%;z-index:10;background:url('+E+') center no-repeat #fff;background-size:10rem 10rem}.under-const{position:fixed;display:flex;align-items:center;justify-content:center;background-color:#fff;color:#000;left:0;top:0;width:100%;height:100%;z-index:10}.under-const>div{text-align:center}.under-const img{width:12rem;margin-bottom:1.5rem}.under-const h1{font-size:1.5rem;margin-bottom:.6rem}.under-const .link{color:#2e7ded;transition:text-decoration 400ms}.under-const .link:hover{text-decoration:underline}@media(min-width: 1250px){.container{width:1140px !important}.item-details{grid-template-columns:27rem 34rem auto}.item-details .item-left .item-name{font-size:4.5rem}.item-details .item-middle .item-description{width:34rem}.item-details .item-middle .item-description .trailer{width:34rem;height:19.125rem}.item-details .item-middle .item-description div>p{width:34rem}}@media(max-width: 980px){.item-details{grid-template-columns:20rem 28rem auto}.item-details .item-middle .item-description{width:28rem}.item-details .item-middle .item-description .trailer{width:28rem;height:15.75rem}.item-details .item-middle .item-description div>p{width:28rem}}@keyframes start-init{from{opacity:0;margin-left:-3rem}to{opacity:1;margin-left:0}}@keyframes start{0%{opacity:1;margin-left:0rem}50%{opacity:0;margin-left:-3rem}to{opacity:1;margin-left:0}}@keyframes swipe-right-1{from{opacity:1;right:0}to{opacity:0;right:-100vw}}@keyframes swipe-right-2{from{opacity:0;left:-100vw}to{opacity:1;left:0}}.start-init-anim{animation:start-init 600ms ease-out forwards}.start-anim{animation:start 1200ms ease-in-out forwards}.swipe-right-1{animation:swipe-right-1 700ms ease-in forwards}.swipe-right-2{animation:swipe-right-2 700ms ease-out forwards}.ripple-white{background-position:center !important;transition:background 400ms !important}.ripple-white:hover{background:#ebebeb radial-gradient(circle, transparent 1%, #ebebeb 1%) center/15000% !important}.ripple-white:active{background-color:#c9c9c9 !important;background-size:100% !important;transition:background 0s !important}.ripple-blue{background-position:center !important;transition:background .8s !important}.ripple-blue:hover{background:#47a7f5 radial-gradient(circle, transparent 1%, #47a7f5 1%) center/15000% !important}.ripple-blue:active{background-color:#6eb9f7 !important;background-size:100% !important;transition:background 0s !important}@font-face{font-family:"Kelson Sans";src:url('+O+");src:url("+_+') format("woff2"),url('+q+') format("woff"),url('+z+') format("truetype");font-weight:normal}@font-face{font-family:"Kelson Sans";src:url('+C+");src:url("+T+') format("woff2"),url('+M+') format("woff"),url('+N+') format("truetype");font-weight:bold}@font-face{font-family:"Kelson Sans";src:url('+P+");src:url("+A+') format("woff2"),url('+I+') format("woff"),url('+R+') format("truetype");font-weight:100}@font-face{font-family:"Cooper Hewitt";src:url('+H+') format("truetype");font-weight:normal}@font-face{font-family:"Cooper Hewitt";src:url('+F+') format("truetype");font-style:italic;font-weight:normal}@font-face{font-family:"Cooper Hewitt";src:url('+G+') format("truetype");font-weight:bold}@font-face{font-family:"Cooper Hewitt";src:url('+U+') format("truetype");font-style:italic;font-weight:bold}@font-face{font-family:"Cooper Hewitt";src:url('+B+') format("truetype");font-weight:100}@font-face{font-family:"Cooper Hewitt";src:url('+K+') format("truetype");font-style:italic;font-weight:100}',""]),e.exports=t},function(e,t,r){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=function(e,t){var r=e[1]||"",i=e[3];if(!i)return r;if(t&&"function"==typeof btoa){var n=(a=i,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),o=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[r].concat(o).concat([n]).join("\n")}var a,c,s;return[r].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,i){"string"==typeof e&&(e=[[null,e,""]]);var n={};if(i)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(n[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);i&&n[s[0]]||(r&&(s[2]?s[2]="".concat(r," and ").concat(s[2]):s[2]=r),t.push(s))}},t}},function(e,t,r){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,t,r){"use strict";r.r(t),t.default=r.p+"5bacb74d2aae5ed7359d9d5aed78de67.png"},function(e,t,r){"use strict";r.r(t),t.default=r.p+"5fa1fce2713a8ea92bf680e93fdc3cb8.gif"},function(e,t,r){"use strict";r.r(t),t.default=r.p+"de9dba0d6f0ddc3054f546807861ffb1.eot"},function(e,t,r){"use strict";r.r(t),t.default=r.p+"bbce246bc5a3a999148edc0d7b649e55.woff2"},function(e,t,r){"use strict";r.r(t),t.default=r.p+"86034a26433ccc022d66c4669cde8e3a.woff"},function(e,t,r){"use strict";r.r(t),t.default=r.p+"d1a976f0ca1cdfea335ec18b72ba1fb0.ttf"},function(e,t,r){"use strict";r.r(t),t.default=r.p+"dbdf1595eef0c1e458c07a3cd3ee1b54.eot"},function(e,t,r){"use strict";r.r(t),t.default=r.p+"8a067276faf5dd89668a9deeff4d68d6.woff2"},function(e,t,r){"use strict";r.r(t),t.default=r.p+"999264a5875b7471a736b30baeb489e6.woff"},function(e,t,r){"use strict";r.r(t),t.default=r.p+"ec50284f1d49d1346420b37b49441369.ttf"},function(e,t,r){"use strict";r.r(t),t.default=r.p+"8da7040e36180f4dc2f3f45eeebe80bc.eot"},function(e,t,r){"use strict";r.r(t),t.default=r.p+"17d315f00289ddbbe20be8f38c858c38.woff2"},function(e,t,r){"use strict";r.r(t),t.default=r.p+"b5e38643418ff7296e0a7dec7040630a.woff"},function(e,t,r){"use strict";r.r(t),t.default=r.p+"8f36a45a77ef15a81b38d7afd58d27cd.ttf"},function(e,t,r){"use strict";r.r(t),t.default=r.p+"25e8353b6aa4afdd21ae301dbc1fcbe9.ttf"},function(e,t,r){"use strict";r.r(t),t.default=r.p+"b6e876c8aade49cb0f31846880a6f6d7.ttf"},function(e,t,r){"use strict";r.r(t),t.default=r.p+"31c77713f70db32bc671336a1688149e.ttf"},function(e,t,r){"use strict";r.r(t),t.default=r.p+"44b1112b8cfe2a159decb64e06136674.ttf"},function(e,t,r){"use strict";r.r(t),t.default=r.p+"5c6d615b73407161ab299507adb25cec.ttf"},function(e,t,r){"use strict";r.r(t),t.default=r.p+"0585227c7c102fadabae94f426d77a34.ttf"},function(e,t,r){"use strict";r.r(t);r(0),r(2);var i=document.querySelector("div.container"),n=document.querySelector("#button-nav"),o=document.querySelector("#button-close-nav"),a=document.querySelector("#item-details"),c=(document.querySelector("#item-left"),document.querySelector("#item-middle")),s=(document.querySelector("#item-section"),document.querySelectorAll("#item-section .button.link")),l=document.querySelectorAll("#list-items .item"),d=document.querySelector("div.dom-preload"),f=document.querySelector("div.under-const"),u=document.querySelector("#secret"),m=document.querySelector("#fave");function p(e,t,r,i,n,o,a){try{var c=e[o](a),s=c.value}catch(e){return void r(e)}c.done?t(s):Promise.resolve(s).then(i,n)}var h=function(){var e,t=(e=regeneratorRuntime.mark((function e(t,r,i){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r!=t&&(c.classList.add("start-anim"),setTimeout((function(){c.classList.remove("start-anim"),i(t)}),600));case 1:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(i,n){var o=e.apply(t,r);function a(e){p(o,i,n,a,c,"next",e)}function c(e){p(o,i,n,a,c,"throw",e)}a(void 0)}))});return function(e,r,i){return t.apply(this,arguments)}}();function b(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return g(e,t)}(e))){var t=0,r=function(){};return{s:r,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,n,o=!0,a=!1;return{s:function(){i=e[Symbol.iterator]()},n:function(){var e=i.next();return o=e.done,e},e:function(e){a=!0,n=e},f:function(){try{o||null==i.return||i.return()}finally{if(a)throw n}}}}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}var v=function(){setTimeout((function(){i.classList.remove("hidden"),d.classList.add("hidden");var e=function(e){e.matches?(f.classList.remove("hidden"),i.classList.add("hidden")):(f.classList.add("hidden"),i.classList.remove("hidden"))},t=window.matchMedia("(max-width: 780px)");e(t),t.addListener(e)}),1e3);var e,t=function(e,t){t.contains("item")?document.querySelector("#list-items .selected").classList.remove("selected"):document.querySelector("#item-section span.selected").classList.remove("selected"),document.getElementById(e).classList.add("selected")},r=function(e){document.querySelector("#item-middle>*:not(.hidden)").classList.add("hidden"),document.querySelector("#item-".concat(e))?document.querySelector("#item-".concat(e)).classList.remove("hidden"):document.querySelector("#item-image").classList.remove("hidden")},c=function(e){var t=document.querySelector("#item-section .section-button:first-child"),r=document.querySelector("#item-section .section-button:not(:first-child)");t.classList.add("selected"),r.classList.remove("selected"),e(t.id)},p=b(s);try{var g=function(){var i=e.value;i.addEventListener("click",(function(){console.log("sectionButton");var e=document.querySelector("#item-section span.selected").id;t(i.id,i.classList),h(i.id,e,r)}))};for(p.s();!(e=p.n()).done;)g()}catch(e){p.e(e)}finally{p.f()}var v,y=b(l);try{var w=function(){var e=v.value;e.addEventListener("click",(function(){console.log("buttonlistItem");var i=document.querySelector("#list-items .selected").id;t(e.id,e.classList),function(e,t,r,i){t!=e&&(a.classList.add("swipe-right-1"),setTimeout((function(){a.classList.remove("swipe-right-1"),a.classList.add("swipe-right-2"),r(i),setTimeout((function(){a.classList.remove("swipe-right-2")}),700)}),700))}(e.id,i,c,r)}))};for(y.s();!(v=y.n()).done;)w()}catch(e){y.e(e)}finally{y.f()}n.addEventListener("click",(function(){console.log("buttonNav"),m.style.right="0"})),o.addEventListener("click",(function(){console.log("buttonCloseNav"),m.style.right="-22rem"}));u.addEventListener("click",(function(){f.classList.add("hidden"),i.classList.remove("hidden")}))};document.addEventListener("DOMContentLoaded",v)}]);