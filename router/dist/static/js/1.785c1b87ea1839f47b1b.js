webpackJsonp([1],{"+tPU":function(t,e,n){n("xGkn");for(var r=n("7KvD"),i=n("hJx8"),o=n("/bQp"),a=n("dSzd")("toStringTag"),s="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),c=0;c<s.length;c++){var u=s[c],l=r[u],f=l&&l.prototype;f&&!f[a]&&i(f,a,u),o[u]=o.Array}},"//Fk":function(t,e,n){t.exports={default:n("U5ju"),__esModule:!0}},"/bQp":function(t,e){t.exports={}},"2KxR":function(t,e){t.exports=function(t,e,n,r){if(!(t instanceof e)||void 0!==r&&r in t)throw TypeError(n+": incorrect invocation!");return t}},"3Eo+":function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},"3fs2":function(t,e,n){var r=n("RY/4"),i=n("dSzd")("iterator"),o=n("/bQp");t.exports=n("FeBl").getIteratorMethod=function(t){if(void 0!=t)return t[i]||t["@@iterator"]||o[r(t)]}},"4mcu":function(t,e){t.exports=function(){}},"52gC":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},"82Mu":function(t,e,n){var r=n("7KvD"),i=n("L42u").set,o=r.MutationObserver||r.WebKitMutationObserver,a=r.process,s=r.Promise,c="process"==n("R9M2")(a);t.exports=function(){var t,e,n,u=function(){var r,i;for(c&&(r=a.domain)&&r.exit();t;){i=t.fn,t=t.next;try{i()}catch(r){throw t?n():e=void 0,r}}e=void 0,r&&r.enter()};if(c)n=function(){a.nextTick(u)};else if(!o||r.navigator&&r.navigator.standalone)if(s&&s.resolve){var l=s.resolve(void 0);n=function(){l.then(u)}}else n=function(){i.call(r,u)};else{var f=!0,p=document.createTextNode("");new o(u).observe(p,{characterData:!0}),n=function(){p.data=f=!f}}return function(r){var i={fn:r,next:void 0};e&&(e.next=i),t||(t=i,n()),e=i}}},"880/":function(t,e,n){t.exports=n("hJx8")},"94VQ":function(t,e,n){"use strict";var r=n("Yobk"),i=n("X8DO"),o=n("e6n0"),a={};n("hJx8")(a,n("dSzd")("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(a,{next:i(1,n)}),o(t,e+" Iterator")}},CXw9:function(t,e,n){"use strict";var r,i,o,a,s=n("O4g8"),c=n("7KvD"),u=n("+ZMJ"),l=n("RY/4"),f=n("kM2E"),p=n("EqjI"),h=n("lOnJ"),v=n("2KxR"),d=n("NWt+"),_=n("t8x9"),g=n("L42u").set,y=n("82Mu")(),m=n("qARP"),x=n("dNDb"),S=n("iUbK"),w=n("fJUb"),b=c.TypeError,M=c.process,D=M&&M.versions,L=D&&D.v8||"",P=c.Promise,k="process"==l(M),E=function(){},O=i=m.f,j=!!function(){try{var t=P.resolve(1),e=(t.constructor={})[n("dSzd")("species")]=function(t){t(E,E)};return(k||"function"==typeof PromiseRejectionEvent)&&t.then(E)instanceof e&&0!==L.indexOf("6.6")&&-1===S.indexOf("Chrome/66")}catch(t){}}(),R=function(t){var e;return!(!p(t)||"function"!=typeof(e=t.then))&&e},C=function(t,e){if(!t._n){t._n=!0;var n=t._c;y(function(){for(var r=t._v,i=1==t._s,o=0,a=function(e){var n,o,a,s=i?e.ok:e.fail,c=e.resolve,u=e.reject,l=e.domain;try{s?(i||(2==t._h&&T(t),t._h=1),!0===s?n=r:(l&&l.enter(),n=s(r),l&&(l.exit(),a=!0)),n===e.promise?u(b("Promise-chain cycle")):(o=R(n))?o.call(n,c,u):c(n)):u(r)}catch(t){l&&!a&&l.exit(),u(t)}};n.length>o;)a(n[o++]);t._c=[],t._n=!1,e&&!t._h&&q(t)})}},q=function(t){g.call(c,function(){var e,n,r,i=t._v,o=N(t);if(o&&(e=x(function(){k?M.emit("unhandledRejection",i,t):(n=c.onunhandledrejection)?n({promise:t,reason:i}):(r=c.console)&&r.error&&r.error("Unhandled promise rejection",i)}),t._h=k||N(t)?2:1),t._a=void 0,o&&e.e)throw e.v})},N=function(t){return 1!==t._h&&0===(t._a||t._c).length},T=function(t){g.call(c,function(){var e;k?M.emit("rejectionHandled",t):(e=c.onrejectionhandled)&&e({promise:t,reason:t._v})})},I=function(t){var e=this;e._d||(e._d=!0,(e=e._w||e)._v=t,e._s=2,e._a||(e._a=e._c.slice()),C(e,!0))},F=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw b("Promise can't be resolved itself");(e=R(t))?y(function(){var r={_w:n,_d:!1};try{e.call(t,u(F,r,1),u(I,r,1))}catch(t){I.call(r,t)}}):(n._v=t,n._s=1,C(n,!1))}catch(t){I.call({_w:n,_d:!1},t)}}};j||(P=function(t){v(this,P,"Promise","_h"),h(t),r.call(this);try{t(u(F,this,1),u(I,this,1))}catch(t){I.call(this,t)}},(r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=n("xH/j")(P.prototype,{then:function(t,e){var n=O(_(this,P));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=k?M.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&C(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new r;this.promise=t,this.resolve=u(F,t,1),this.reject=u(I,t,1)},m.f=O=function(t){return t===P||t===a?new o(t):i(t)}),f(f.G+f.W+f.F*!j,{Promise:P}),n("e6n0")(P,"Promise"),n("bRrM")("Promise"),a=n("FeBl").Promise,f(f.S+f.F*!j,"Promise",{reject:function(t){var e=O(this);return(0,e.reject)(t),e.promise}}),f(f.S+f.F*(s||!j),"Promise",{resolve:function(t){return w(s&&this===a?P:this,t)}}),f(f.S+f.F*!(j&&n("dY0y")(function(t){P.all(t).catch(E)})),"Promise",{all:function(t){var e=this,n=O(e),r=n.resolve,i=n.reject,o=x(function(){var n=[],o=0,a=1;d(t,!1,function(t){var s=o++,c=!1;n.push(void 0),a++,e.resolve(t).then(function(t){c||(c=!0,n[s]=t,--a||r(n))},i)}),--a||r(n)});return o.e&&i(o.v),n.promise},race:function(t){var e=this,n=O(e),r=n.reject,i=x(function(){d(t,!1,function(t){e.resolve(t).then(n.resolve,r)})});return i.e&&r(i.v),n.promise}})},EGZi:function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},EqBC:function(t,e,n){"use strict";var r=n("kM2E"),i=n("FeBl"),o=n("7KvD"),a=n("t8x9"),s=n("fJUb");r(r.P+r.R,"Promise",{finally:function(t){var e=a(this,i.Promise||o.Promise),n="function"==typeof t;return this.then(n?function(n){return s(e,t()).then(function(){return n})}:t,n?function(n){return s(e,t()).then(function(){throw n})}:t)}})},Ibhu:function(t,e,n){var r=n("D2L2"),i=n("TcQ7"),o=n("vFc/")(!1),a=n("ax3d")("IE_PROTO");t.exports=function(t,e){var n,s=i(t),c=0,u=[];for(n in s)n!=a&&r(s,n)&&u.push(n);for(;e.length>c;)r(s,n=e[c++])&&(~o(u,n)||u.push(n));return u}},K4R9:function(t,e,n){n("NA/8"),t.exports=n("FeBl").Number.isNaN},L42u:function(t,e,n){var r,i,o,a=n("+ZMJ"),s=n("knuC"),c=n("RPLV"),u=n("ON07"),l=n("7KvD"),f=l.process,p=l.setImmediate,h=l.clearImmediate,v=l.MessageChannel,d=l.Dispatch,_=0,g={},y=function(){var t=+this;if(g.hasOwnProperty(t)){var e=g[t];delete g[t],e()}},m=function(t){y.call(t.data)};p&&h||(p=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return g[++_]=function(){s("function"==typeof t?t:Function(t),e)},r(_),_},h=function(t){delete g[t]},"process"==n("R9M2")(f)?r=function(t){f.nextTick(a(y,t,1))}:d&&d.now?r=function(t){d.now(a(y,t,1))}:v?(o=(i=new v).port2,i.port1.onmessage=m,r=a(o.postMessage,o,1)):l.addEventListener&&"function"==typeof postMessage&&!l.importScripts?(r=function(t){l.postMessage(t+"","*")},l.addEventListener("message",m,!1)):r="onreadystatechange"in u("script")?function(t){c.appendChild(u("script")).onreadystatechange=function(){c.removeChild(this),y.call(t)}}:function(t){setTimeout(a(y,t,1),0)}),t.exports={set:p,clear:h}},M6a0:function(t,e){},MICi:function(t,e,n){t.exports={default:n("K4R9"),__esModule:!0}},MU5D:function(t,e,n){var r=n("R9M2");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},Mhyx:function(t,e,n){var r=n("/bQp"),i=n("dSzd")("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||o[i]===t)}},"NA/8":function(t,e,n){var r=n("kM2E");r(r.S,"Number",{isNaN:function(t){return t!=t}})},"NWt+":function(t,e,n){var r=n("+ZMJ"),i=n("msXi"),o=n("Mhyx"),a=n("77Pl"),s=n("QRG4"),c=n("3fs2"),u={},l={};(e=t.exports=function(t,e,n,f,p){var h,v,d,_,g=p?function(){return t}:c(t),y=r(n,f,e?2:1),m=0;if("function"!=typeof g)throw TypeError(t+" is not iterable!");if(o(g)){for(h=s(t.length);h>m;m++)if((_=e?y(a(v=t[m])[0],v[1]):y(t[m]))===u||_===l)return _}else for(d=g.call(t);!(v=d.next()).done;)if((_=i(d,y,v.value,e))===u||_===l)return _}).BREAK=u,e.RETURN=l},O4g8:function(t,e){t.exports=!0},PzxK:function(t,e,n){var r=n("D2L2"),i=n("sB3e"),o=n("ax3d")("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),r(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},QRG4:function(t,e,n){var r=n("UuGF"),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},R9M2:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},RPLV:function(t,e,n){var r=n("7KvD").document;t.exports=r&&r.documentElement},"RY/4":function(t,e,n){var r=n("R9M2"),i=n("dSzd")("toStringTag"),o="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?n:o?r(e):"Object"==(a=r(e))&&"function"==typeof e.callee?"Arguments":a}},SldL:function(t,e){!function(e){"use strict";var n,r=Object.prototype,i=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag",u="object"==typeof t,l=e.regeneratorRuntime;if(l)u&&(t.exports=l);else{(l=e.regeneratorRuntime=u?t.exports:{}).wrap=x;var f="suspendedStart",p="suspendedYield",h="executing",v="completed",d={},_={};_[a]=function(){return this};var g=Object.getPrototypeOf,y=g&&g(g(j([])));y&&y!==r&&i.call(y,a)&&(_=y);var m=M.prototype=w.prototype=Object.create(_);b.prototype=m.constructor=M,M.constructor=b,M[c]=b.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,M):(t.__proto__=M,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(m),t},l.awrap=function(t){return{__await:t}},D(L.prototype),L.prototype[s]=function(){return this},l.AsyncIterator=L,l.async=function(t,e,n,r){var i=new L(x(t,e,n,r));return l.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},D(m),m[c]="Generator",m[a]=function(){return this},m.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},l.values=j,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,i){return s.type="throw",s.arg=t,e.next=r,i&&(e.method="next",e.arg=n),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=i.call(a,"catchLoc"),u=i.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;E(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),d}}}function x(t,e,n,r){var i=e&&e.prototype instanceof w?e:w,o=Object.create(i.prototype),a=new O(r||[]);return o._invoke=function(t,e,n){var r=f;return function(i,o){if(r===h)throw new Error("Generator is already running");if(r===v){if("throw"===i)throw o;return R()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=P(a,n);if(s){if(s===d)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var c=S(t,e,n);if("normal"===c.type){if(r=n.done?v:p,c.arg===d)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=v,n.method="throw",n.arg=c.arg)}}}(t,n,a),o}function S(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function w(){}function b(){}function M(){}function D(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function L(t){var e;this._invoke=function(n,r){function o(){return new Promise(function(e,o){!function e(n,r,o,a){var s=S(t[n],t,r);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"==typeof u&&i.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,o,a)},function(t){e("throw",t,o,a)}):Promise.resolve(u).then(function(t){c.value=t,o(c)},a)}a(s.arg)}(n,r,e,o)})}return e=e?e.then(o,o):o()}}function P(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,P(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var i=S(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,d;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,d):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function j(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return o.next=o}}return{next:R}}function R(){return{value:n,done:!0}}}(function(){return this}()||Function("return this")())},TcQ7:function(t,e,n){var r=n("MU5D"),i=n("52gC");t.exports=function(t){return r(i(t))}},U5ju:function(t,e,n){n("M6a0"),n("zQR9"),n("+tPU"),n("CXw9"),n("EqBC"),n("jKW+"),t.exports=n("FeBl").Promise},UuGF:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},Xxa5:function(t,e,n){t.exports=n("jyFz")},Yobk:function(t,e,n){var r=n("77Pl"),i=n("qio6"),o=n("xnc9"),a=n("ax3d")("IE_PROTO"),s=function(){},c=function(){var t,e=n("ON07")("iframe"),r=o.length;for(e.style.display="none",n("RPLV").appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;r--;)delete c.prototype[o[r]];return c()};t.exports=Object.create||function(t,e){var n;return null!==t?(s.prototype=r(t),n=new s,s.prototype=null,n[a]=t):n=c(),void 0===e?n:i(n,e)}},ax3d:function(t,e,n){var r=n("e8AB")("keys"),i=n("3Eo+");t.exports=function(t){return r[t]||(r[t]=i(t))}},bRrM:function(t,e,n){"use strict";var r=n("7KvD"),i=n("FeBl"),o=n("evD5"),a=n("+E39"),s=n("dSzd")("species");t.exports=function(t){var e="function"==typeof i[t]?i[t]:r[t];a&&e&&!e[s]&&o.f(e,s,{configurable:!0,get:function(){return this}})}},dNDb:function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},dSzd:function(t,e,n){var r=n("e8AB")("wks"),i=n("3Eo+"),o=n("7KvD").Symbol,a="function"==typeof o;(t.exports=function(t){return r[t]||(r[t]=a&&o[t]||(a?o:i)("Symbol."+t))}).store=r},dY0y:function(t,e,n){var r=n("dSzd")("iterator"),i=!1;try{var o=[7][r]();o.return=function(){i=!0},Array.from(o,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!i)return!1;var n=!1;try{var o=[7],a=o[r]();a.next=function(){return{done:n=!0}},o[r]=function(){return a},t(o)}catch(t){}return n}},e6n0:function(t,e,n){var r=n("evD5").f,i=n("D2L2"),o=n("dSzd")("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,o)&&r(t,o,{configurable:!0,value:e})}},e8AB:function(t,e,n){var r=n("FeBl"),i=n("7KvD"),o=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n("O4g8")?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},eQqK:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("Xxa5"),i=n.n(r),o=n("MICi"),a=n.n(o),s=n("exGp"),c=n.n(s);var u=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e4,n=arguments[2],r={signal:[],time:[]},i="number"==typeof n?n:-t,o=0;i+o/e<=t;){var a=0;i+o/e>=0&&(a=Math.cos(2*Math.PI*3.75*(i+o/e))*Math.exp(-(i+o/e))),r.signal.push(a),r.time.push(i+o/e),o++}return r},l=n("504h");function f(t,e,n){l.chart(t,{title:{text:void 0},xAxis:{categories:e,min:0},series:[{data:n,lineWidth:.5,name:void 0}]})}function p(t,e){for(var n={amplitude:[],frequency:[],Re:[],Im:[]},r=t.length,i=1/Math.sqrt(r),o=[],a=[],s=0;s<r;s++){for(var c=0,u=0,l=0;l<r;l++)c+=t[l]*Math.cos(2*Math.PI/r*l*s),u+=t[l]*Math.sin(2*Math.PI/r*l*s);o[s]=i*c,a[s]=-i*u}n.Re=o,n.Im=a;for(var f=0;f<n.Im.length;f++)n.amplitude.push(Math.sqrt(n.Re[f]*n.Re[f]+n.Im[f]*n.Im[f])),n.frequency.push(f*e/n.Im.length);return n}var h={data:function(){return{fs:100,time:10}},methods:{hideElems:function(){this.$refs.appDigital__initialSignal.style.display="none",this.$refs.appDigital__initialSignal__formula.style.display="none",this.$refs.appDigital__initialSignal_kroneker.style.display="none",this.$refs.appDigital__initialSignal_answer.style.display="none",this.$refs.appDigital__initialSignal__fr.style.display="none",this.$refs.appDigital__initialSignal__fr_digit.style.display="none"},initSignal:function(){var t=this;return c()(i.a.mark(function e(){var n,r,o,s,c,l,h,v,d,_,g,y,m,x,S,w,b,M,D,L,P,k,E;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(f("appDigital__initialSignal",(n=u(t.time,t.fs,0)).time,n.signal),r=1/t.fs,o=2*Math.PI*.25*15,l=[(2*r-r*r)/(c=4+4*r+(s=1+o*o)*r*r),2*r*r/c,(r*r-2*r)/c],h=[1,(2*s*r*r-8)/c,(4-4*r+s*r*r)/c],v="H(z) = (",d=0;d<l.length;d++)d&&(v+=" + "),v+=t.formatNumber(l[d])+"z<sup>-"+d+"</sup>";for(v+=") / (",_=0;_<h.length;_++)_&&(v+=" + "),v+=t.formatNumber(h[_])+"z<sup>-"+_+"</sup>";for(v+=")",document.getElementById("appDigital__initialSignal__formula").innerHTML=v,g={data:[],time:[]},y=0;y<t.fs*t.time;y++)g.data.push(0),g.time.push(y/t.fs);for(g.data[0]=1,f("appDigital__initialSignal_kroneker",g.time,g.data),m={data:[],time:[]},x=void 0,S=0;S<g.time.length;S++){for(x=0,w=0;w<l.length;w++)S-w>=0&&(x+=l[w]*g.data[S-w]);for(b=1;b<h.length;b++)S-b>=0&&(x-=h[b]*m.data[S-b]);a()(x)&&console.log("isNaN",S),m.data.push(x),m.time.push(g.time[S])}for(f("appDigital__initialSignal_answer",m.time,m.data),f("appDigital__initialSignal_freq_afr",(M=p(n.signal,t.fs)).frequency.slice(0,Math.floor(M.frequency.length/2)),M.amplitude.slice(0,Math.floor(M.amplitude.length/2))),D=[],L=0;L<M.frequency.length;L++)D[L]=Math.atan(M.Im[L]/M.Re[L]);for(f("appDigital__initialSignal_freq_pfr",M.frequency.slice(0,Math.floor(M.frequency.length/2)),D.slice(0,Math.floor(M.frequency.length/2))),f("appDigital__initialSignal_freq_afr_digit",(P=p(m.data,t.fs)).frequency.slice(0,Math.floor(P.frequency.length/2)),P.amplitude.slice(0,Math.floor(P.amplitude.length/2))),k=[],E=0;E<P.frequency.length;E++)k[E]=Math.atan(P.Im[E]/P.Re[E]);f("appDigital__initialSignal_freq_pfr_digit",P.frequency.slice(0,Math.floor(P.frequency.length/2)),k.slice(0,Math.floor(P.frequency.length/2))),t.$refs.appDigital__initialSignal.style.display="block",t.$refs.appDigital__initialSignal__formula.style.display="block",t.$refs.appDigital__initialSignal_kroneker.style.display="block",t.$refs.appDigital__initialSignal_answer.style.display="block",t.$refs.appDigital__initialSignal__fr.style.display="block",t.$refs.appDigital__initialSignal__fr_digit.style.display="block";case 38:case"end":return e.stop()}},e,t)}))()},formatNumber:function(t){for(var e=t,n=0;Math.abs(e)<100;)if(e*=10,++n>9)return 0;return Math.floor(e)/Math.pow(10,n)},calculate:function(){console.log("wait"),this.initSignal(),console.log("OK!")}},mounted:function(){var t=this;this.hideElems(),setTimeout(function(){t.calculate()},0)}},v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"appDigitalInit"},[n("div",{staticClass:"appDigitalInit_content"},[n("h2",{staticClass:"text-center"},[t._v("Самостоятельная работа №5")]),t._v(" "),n("div",{},[n("div",{staticClass:"d-flex"},[n("label",{staticClass:"col-2",attrs:{for:"staticEmail"}},[t._v("Время, [с]")]),t._v(" "),n("div",{},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.time,expression:"time"}],attrs:{type:"text"},domProps:{value:t.time},on:{input:function(e){e.target.composing||(t.time=e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"d-flex"},[n("label",{staticClass:"col-2"},[t._v("Частота дискретизации")]),t._v(" "),n("div",{},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.fs,expression:"fs"}],attrs:{type:"text"},domProps:{value:t.fs},on:{input:function(e){e.target.composing||(t.fs=e.target.value)}}})])]),t._v(" "),n("button",{staticClass:"btn btn-secondary btn-sm",on:{click:t.calculate}},[t._v("\n        Начать расчет\n      ")])]),t._v(" "),n("div",{staticClass:"row g-2 text-center"},[n("div",{ref:"appDigital__initialSignal",staticClass:"col-12"},[n("h5",[t._v("Исходная импульсная характеристика")]),t._v(" "),n("div",{attrs:{id:"appDigital__initialSignal"}})]),t._v(" "),n("div",{ref:"appDigital__initialSignal__formula",staticClass:"col-12"},[n("h5",[t._v("Формула H(z) для данной импульсной характеристики.")]),t._v(" "),n("div",{attrs:{id:"appDigital__initialSignal__formula"}})]),t._v(" "),n("div",{ref:"appDigital__initialSignal_kroneker",staticClass:"col-lg-6"},[n("h5",[t._v("Вход системы - дельта-функция Кронекера")]),t._v(" "),n("div",{attrs:{id:"appDigital__initialSignal_kroneker"}})]),t._v(" "),n("div",{ref:"appDigital__initialSignal_answer",staticClass:"col-lg-6"},[n("h5",[t._v("Выход системы - дискретная импульсная характеристика")]),t._v(" "),n("div",{attrs:{id:"appDigital__initialSignal_answer"}})]),t._v(" "),n("div",{ref:"appDigital__initialSignal__fr",staticClass:"col-12"},[n("h5",[t._v("Частотный отклик аналоговой системы")]),t._v(" "),n("div",{attrs:{id:"appDigital__initialSignal__fr"}}),t._v(" "),n("div",{staticClass:"row"},[n("div",{ref:"appDigital__initialSignal_freq_afr",staticClass:"col-lg-6"},[n("h5",[t._v("АЧХ")]),t._v(" "),n("div",{attrs:{id:"appDigital__initialSignal_freq_afr"}})]),t._v(" "),n("div",{ref:"appDigital__initialSignal_freq_pfr",staticClass:"col-lg-6"},[n("h5",[t._v("ФЧХ")]),t._v(" "),n("div",{attrs:{id:"appDigital__initialSignal_freq_pfr"}})])])]),t._v(" "),n("div",{ref:"appDigital__initialSignal__fr_digit",staticClass:"col-12"},[n("h5",[t._v("Частотный отклик дискретной системы")]),t._v(" "),n("div",{attrs:{id:"appDigital__initialSignal__f"}}),t._v(" "),n("div",{staticClass:"row"},[n("div",{ref:"appDigital__initialSignal_freq_afr_digit",staticClass:"col-lg-6"},[n("h5",[t._v("АЧХ")]),t._v(" "),n("div",{attrs:{id:"appDigital__initialSignal_freq_afr_digit"}})]),t._v(" "),n("div",{ref:"appDigital__initialSignal_freq_pfr_digit",staticClass:"col-lg-6"},[n("h5",[t._v("ФЧХ")]),t._v(" "),n("div",{attrs:{id:"appDigital__initialSignal_freq_pfr_digit"}})])])])])])])},staticRenderFns:[]};var d=n("VU/8")(h,v,!1,function(t){n("uumX")},null,null);e.default=d.exports},exGp:function(t,e,n){"use strict";e.__esModule=!0;var r,i=n("//Fk"),o=(r=i)&&r.__esModule?r:{default:r};e.default=function(t){return function(){var e=t.apply(this,arguments);return new o.default(function(t,n){return function r(i,a){try{var s=e[i](a),c=s.value}catch(t){return void n(t)}if(!s.done)return o.default.resolve(c).then(function(t){r("next",t)},function(t){r("throw",t)});t(c)}("next")})}}},fJUb:function(t,e,n){var r=n("77Pl"),i=n("EqjI"),o=n("qARP");t.exports=function(t,e){if(r(t),i(e)&&e.constructor===t)return e;var n=o.f(t);return(0,n.resolve)(e),n.promise}},fkB2:function(t,e,n){var r=n("UuGF"),i=Math.max,o=Math.min;t.exports=function(t,e){return(t=r(t))<0?i(t+e,0):o(t,e)}},h65t:function(t,e,n){var r=n("UuGF"),i=n("52gC");t.exports=function(t){return function(e,n){var o,a,s=String(i(e)),c=r(n),u=s.length;return c<0||c>=u?t?"":void 0:(o=s.charCodeAt(c))<55296||o>56319||c+1===u||(a=s.charCodeAt(c+1))<56320||a>57343?t?s.charAt(c):o:t?s.slice(c,c+2):a-56320+(o-55296<<10)+65536}}},iUbK:function(t,e,n){var r=n("7KvD").navigator;t.exports=r&&r.userAgent||""},"jKW+":function(t,e,n){"use strict";var r=n("kM2E"),i=n("qARP"),o=n("dNDb");r(r.S,"Promise",{try:function(t){var e=i.f(this),n=o(t);return(n.e?e.reject:e.resolve)(n.v),e.promise}})},jyFz:function(t,e,n){var r=function(){return this}()||Function("return this")(),i=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,o=i&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n("SldL"),i)r.regeneratorRuntime=o;else try{delete r.regeneratorRuntime}catch(t){r.regeneratorRuntime=void 0}},knuC:function(t,e){t.exports=function(t,e,n){var r=void 0===n;switch(e.length){case 0:return r?t():t.call(n);case 1:return r?t(e[0]):t.call(n,e[0]);case 2:return r?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return r?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return r?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},lktj:function(t,e,n){var r=n("Ibhu"),i=n("xnc9");t.exports=Object.keys||function(t){return r(t,i)}},msXi:function(t,e,n){var r=n("77Pl");t.exports=function(t,e,n,i){try{return i?e(r(n)[0],n[1]):e(n)}catch(e){var o=t.return;throw void 0!==o&&r(o.call(t)),e}}},qARP:function(t,e,n){"use strict";var r=n("lOnJ");t.exports.f=function(t){return new function(t){var e,n;this.promise=new t(function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r}),this.resolve=r(e),this.reject=r(n)}(t)}},qio6:function(t,e,n){var r=n("evD5"),i=n("77Pl"),o=n("lktj");t.exports=n("+E39")?Object.defineProperties:function(t,e){i(t);for(var n,a=o(e),s=a.length,c=0;s>c;)r.f(t,n=a[c++],e[n]);return t}},sB3e:function(t,e,n){var r=n("52gC");t.exports=function(t){return Object(r(t))}},t8x9:function(t,e,n){var r=n("77Pl"),i=n("lOnJ"),o=n("dSzd")("species");t.exports=function(t,e){var n,a=r(t).constructor;return void 0===a||void 0==(n=r(a)[o])?e:i(n)}},uumX:function(t,e){},"vFc/":function(t,e,n){var r=n("TcQ7"),i=n("QRG4"),o=n("fkB2");t.exports=function(t){return function(e,n,a){var s,c=r(e),u=i(c.length),l=o(a,u);if(t&&n!=n){for(;u>l;)if((s=c[l++])!=s)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}}},"vIB/":function(t,e,n){"use strict";var r=n("O4g8"),i=n("kM2E"),o=n("880/"),a=n("hJx8"),s=n("/bQp"),c=n("94VQ"),u=n("e6n0"),l=n("PzxK"),f=n("dSzd")("iterator"),p=!([].keys&&"next"in[].keys()),h=function(){return this};t.exports=function(t,e,n,v,d,_,g){c(n,e,v);var y,m,x,S=function(t){if(!p&&t in D)return D[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},w=e+" Iterator",b="values"==d,M=!1,D=t.prototype,L=D[f]||D["@@iterator"]||d&&D[d],P=L||S(d),k=d?b?S("entries"):P:void 0,E="Array"==e&&D.entries||L;if(E&&(x=l(E.call(new t)))!==Object.prototype&&x.next&&(u(x,w,!0),r||"function"==typeof x[f]||a(x,f,h)),b&&L&&"values"!==L.name&&(M=!0,P=function(){return L.call(this)}),r&&!g||!p&&!M&&D[f]||a(D,f,P),s[e]=P,s[w]=h,d)if(y={values:b?P:S("values"),keys:_?P:S("keys"),entries:k},g)for(m in y)m in D||o(D,m,y[m]);else i(i.P+i.F*(p||M),e,y);return y}},xGkn:function(t,e,n){"use strict";var r=n("4mcu"),i=n("EGZi"),o=n("/bQp"),a=n("TcQ7");t.exports=n("vIB/")(Array,"Array",function(t,e){this._t=a(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,i(1)):i(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),o.Arguments=o.Array,r("keys"),r("values"),r("entries")},"xH/j":function(t,e,n){var r=n("hJx8");t.exports=function(t,e,n){for(var i in e)n&&t[i]?t[i]=e[i]:r(t,i,e[i]);return t}},xnc9:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},zQR9:function(t,e,n){"use strict";var r=n("h65t")(!0);n("vIB/")(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})}});
//# sourceMappingURL=1.785c1b87ea1839f47b1b.js.map