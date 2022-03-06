webpackJsonp([10],{lXz4:function(t,i){},oXx3:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e("7+uW"),o={name:"app2048",data:function(){return{score:0,size:5,currentPosition:[],best2048score:0}},methods:{initGame:function(){this.currentPosition=[],this.score=0;for(var t=0;t<this.size*this.size;t++)this.currentPosition.push({value:void 0})},goDown:function(){for(var t=!0,i=0;i<this.size;i++){for(var e=[],o=0;o<this.size;o++)e.push(this.currentPosition[i+this.size*o].value);if(e.reverse(),(e=e.filter(function(t){return void 0!=t})).length>1){for(var r=0;r<e.length-1;r++)e[r]==e[r+1]&&(e[r]=2*e[r],this.score+=e[r],e[r+1]=void 0,t=!0);var n=e;e=e.filter(function(t){return void 0!=t}),n.length==this.size&&n.length==e.length||(t=!0)}for(var a=0;a<this.size;a++)s.a.set(this.currentPosition[this.size*this.size-this.size+i-this.size*a],"value",e[a]?e[a]:void 0)}t&&this.addNewValue()},goUp:function(){for(var t=!0,i=0;i<this.size;i++){for(var e=[],o=0;o<this.size;o++)e.push(this.currentPosition[i+this.size*o].value);if((e=e.filter(function(t){return void 0!=t})).length>1){for(var r=0;r<e.length-1;r++)e[r]==e[r+1]&&(e[r]=2*e[r],this.score+=e[r],e[r+1]=void 0);var n=e;e=e.filter(function(t){return void 0!=t}),n.length==this.size&&n.length==e.length||(t=!0)}for(var a=0;a<this.size;a++)s.a.set(this.currentPosition[i+this.size*a],"value",e[a]?e[a]:void 0)}t&&this.addNewValue()},goLeft:function(){for(var t=!0,i=0;i<this.size;i++){for(var e=[],o=0;o<this.size;o++)e.push(this.currentPosition[this.size*i+o].value);if((e=e.filter(function(t){return void 0!=t})).length>1){for(var r=0;r<e.length-1;r++)e[r]==e[r+1]&&(e[r]=2*e[r],this.score+=e[r],e[r+1]=void 0);var n=e;e=e.filter(function(t){return void 0!=t}),n.length==this.size&&n.length==e.length||(t=!0)}for(var a=0;a<this.size;a++)s.a.set(this.currentPosition[a+this.size*i],"value",e[a]?e[a]:void 0)}t&&this.addNewValue()},goRight:function(){for(var t=!0,i=0;i<this.size;i++){for(var e=[],o=0;o<this.size;o++)e.push(this.currentPosition[o+this.size*i].value);if(e.reverse(),(e=e.filter(function(t){return void 0!=t})).length>1){for(var r=0;r<e.length-1;r++)e[r]==e[r+1]&&(e[r]=2*e[r],this.score+=e[r],e[r+1]=void 0);var n=e;e=e.filter(function(t){return void 0!=t}),n.length==this.size&&n.length==e.length||(t=!0)}e=e.filter(function(t){return void 0!=t});for(var a=0;a<this.size;a++)s.a.set(this.currentPosition[this.size*(i+1)-1-a],"value",e[a]?e[a]:void 0)}t&&this.addNewValue()},addNewValue:function(){for(var t=[],i=0;i<this.currentPosition.length;i++)void 0==this.currentPosition[i].value&&t.push(i);t.length&&s.a.set(this.currentPosition[t[Math.floor(Math.random()*t.length)]],"value",2)}},computed:{bgColor:function(){for(var t=[],i=0;i<this.currentPosition.length;i++)if(this.currentPosition[i].value){var e=void 0,s=void 0;this.currentPosition[i].value>=64?(e=255,s=0):(e=Math.floor(255*this.currentPosition[i].value/64),s=Math.floor(255-255*this.currentPosition[i].value/64)),t.push("rgb("+e+","+s+",0)")}else t.push("transparent");return this.score>this.best2048score&&(this.best2048score=this.score,localStorage.setItem("best2048score",this.best2048score)),t}},created:function(){this.initGame();for(var t=0;t<3;t++)this.currentPosition[Math.floor(this.currentPosition.length*Math.random())].value=2;var i=localStorage.getItem("best2048score");i&&(this.best2048score=i)},mounted:function(){window.addEventListener("keydown",r.bind(this))},beforeUnmount:function(){window.removeEventListener("keydown",r.bind(this))}};function r(t){switch(t.code){case"ArrowLeft":this.goLeft();break;case"ArrowRight":this.goRight();break;case"ArrowUp":this.goUp();break;case"ArrowDown":this.goDown()}}var n={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"app-2048"},[e("div",{staticClass:"block text-center my-5"},[e("h2",{staticClass:"header"},[t._v("2048: "+t._s(t.score))]),t._v(" "),e("h3",[t._v("Best score: "+t._s(t.best2048score))])]),t._v(" "),e("div",{staticClass:"game__square mx-auto"},t._l(t.currentPosition,function(i,s){return e("div",{key:s,staticClass:"game__cell ratio ratio-1x1",style:{backgroundColor:t.bgColor[s]}},[e("span",{staticClass:"game__value"},[t._v(t._s(i.value))])])}),0),t._v(" "),e("div",{staticClass:"mx-auto d-table mt-3"},[e("button",{on:{click:t.goDown}},[t._v("goDown")]),t._v(" "),e("button",{on:{click:t.goUp}},[t._v("goUp")]),t._v(" "),e("button",{on:{click:t.goLeft}},[t._v("goLeft")]),t._v(" "),e("button",{on:{click:t.goRight}},[t._v("goRight")]),t._v(" "),e("button",{on:{click:t.initGame}},[t._v("New Game")])])])},staticRenderFns:[]};var a=e("VU/8")(o,n,!1,function(t){e("lXz4")},null,null);i.default=a.exports}});
//# sourceMappingURL=10.8a81876f14bc6f187c3a.js.map