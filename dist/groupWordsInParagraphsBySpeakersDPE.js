module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var u=t[n]={i:n,l:!1,exports:{}};return e[n].call(u.exports,u,u.exports,r),u.l=!0,u.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)r.d(n,u,function(t){return e[t]}.bind(null,u));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=49)}({49:function(e,t,r){"use strict";r.r(t),t.default=function(e,t){return function(e,t){var r=[],n="UKN",u=0,o=0,f={words:[],text:"",speaker:""};return e.forEach(function(e){(n=function(e,t){return t.find(function(t){if(e.start>=t.start&&e.end<=t.end)return t})}(e,t))&&((u=t.indexOf(n))===o?(f.words.push(e),f.text+=e.text+" ",f.speaker=n.speaker):(o=u,f.text.trim(),r.push(f),(f={words:[],text:"",speaker:""}).words.push(e),f.text+=e.text+" ",f.speaker=n.speaker))}),r.push(f),r}(e,t)}}});
//# sourceMappingURL=groupWordsInParagraphsBySpeakersDPE.js.map