webpackJsonp([17],{NFfR:function(i,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});a("7+uW");var l=a("504h");function s(i,t,a){l.chart(i,{title:{text:void 0},xAxis:{categories:t,min:0},series:[{data:a,lineWidth:.5,name:void 0}]})}var e=a("504h"),n=a.n(e),o=(a("mS+B"),a("U5Gd")),_=a.n(o);a("U5Gd"),_()(n.a);var p=function(i,t,a){for(var l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[0,1],s={Re:[],Im:[],amplitude:[],time:[]},e=l[0],n=0;e+n/a<=l[1];){var o=e+n/a;i<=o&&t>=o?(s.Re.push(1),s.Im.push(0),s.time.push(o)):(s.Re.push(0),s.Im.push(0),s.time.push(o)),n++}for(var _=0;_<s.time.length;_++)s.amplitude[_]=Math.sqrt(s.Re[_]*s.Re[_]+s.Im[_]*s.Im[_]);return s};var r=function(i,t){var a={Re:[],Im:[],amplitude:[],time:[]},l=0;for(console.log(i.time.length);l<2*i.time.length;){a.time.push(l);for(var s=0,e=l;e<t.time.length;e++)s+=i.amplitude[e-l]*t.amplitude[e];a.Re.push(s),a.Im.push(0),l++}for(var n=0;n<a.time.length;n++)a.amplitude[n]=Math.sqrt(a.Re[n]*a.Re[n]+a.Im[n]*a.Im[n]);return a},v={data:function(){return{fs:100,time:10,koefsForHs:[[-1,-1],[556,1652476,2,1]],koefsForHz:[[-.0404,.04,-.0408,.04,-4e-4],[4.302,-8.08,4.524,-.08,.222]]}},methods:{hideElems:function(){this.$refs.appDigital__initialSignal.style.display="none",this.$refs.appDigital__initialSignal_positive.style.display="none",this.$refs.appDigital__initialSignal__3D.style.display="none",this.$refs.appDigital__initialSignal__Hs.style.display="none",this.$refs.appDigital__initialSignal__Hz.style.display="none",this.$refs.appDigital__conv.style.display="none"},initSignal:function(){var i=p(-.5,0,this.fs,[-2,2]);this.$refs.appDigital__initialSignal.style.display="block",s("appDigital__initialSignal",i.time,i.amplitude);var t=p(0,.5,this.fs,[-2,2]);this.$refs.appDigital__initialSignal.style.display="block",s("appDigital__initialSignal2",t.time,t.amplitude);var a=r(i,t);this.$refs.appDigital__conv.style.display="block",s("appDigital__conv",a.time,a.amplitude),console.log(a)},showHs:function(){for(var i=[],t=[],a=-10;a<=10;){i.push(a);for(var l=0,e=0;e<this.koefsForHs[0].length;e++)l+=this.koefsForHs[0][e]*Math.pow(a,e);for(var n=0,o=0;o<this.koefsForHs[1].length;o++)n+=this.koefsForHs[1][o]*Math.pow(a,o);t.push(l/n),a+=.01}this.$refs.appDigital__initialSignal__Hs.style.display="block",s("appDigital__initialSignal__Hs",i,t)},showHz:function(){for(var i=[],t=[],a=-100;a<=100;){i.push(a);for(var l=0,e=0;e<this.koefsForHz[0].length;e++)l+=this.koefsForHz[0][e]*Math.pow(a,e);for(var n=0,o=0;o<this.koefsForHz[1].length;o++)n+=this.koefsForHz[1][o]*Math.pow(a,o);t.push(l/n),a+=.01}this.$refs.appDigital__initialSignal__Hz.style.display="block",s("appDigital__initialSignal__Hz",i,t)},calculate:function(){console.log("wait"),this.initSignal(),console.log("OK!")}},mounted:function(){this.hideElems(),this.calculate()}},g={render:function(){var i=this,t=i.$createElement,a=i._self._c||t;return a("div",{staticClass:"appDigitalInit"},[a("div",{staticClass:"appDigitalInit_content"},[a("h2",{staticClass:"text-center"},[i._v("Страница для тестирования алгоритмов")]),i._v(" "),a("div",{},[a("div",{staticClass:"d-flex"},[a("label",{staticClass:"col-2",attrs:{for:"staticEmail"}},[i._v("Время, [с]")]),i._v(" "),a("div",{},[a("input",{directives:[{name:"model",rawName:"v-model",value:i.time,expression:"time"}],attrs:{type:"text"},domProps:{value:i.time},on:{input:function(t){t.target.composing||(i.time=t.target.value)}}})])]),i._v(" "),a("div",{staticClass:"d-flex"},[a("label",{staticClass:"col-2"},[i._v("Частота дискретизации")]),i._v(" "),a("div",{},[a("input",{directives:[{name:"model",rawName:"v-model",value:i.fs,expression:"fs"}],attrs:{type:"text"},domProps:{value:i.fs},on:{input:function(t){t.target.composing||(i.fs=t.target.value)}}})])]),i._v(" "),a("button",{staticClass:"btn btn-secondary btn-sm",on:{click:i.calculate}},[i._v("\n        Начать расчет\n      ")])]),i._v(" "),a("div",{staticClass:"row g-2 text-center"},[a("div",{ref:"appDigital__initialSignal",staticClass:"col-lg-6"},[a("h5",[i._v("Исходный сигнал 1")]),i._v(" "),a("div",{attrs:{id:"appDigital__initialSignal"}})]),i._v(" "),a("div",{ref:"appDigital__initialSignal2",staticClass:"col-lg-6"},[a("h5",[i._v("Исходный сигнал 2")]),i._v(" "),a("div",{attrs:{id:"appDigital__initialSignal2"}})]),i._v(" "),a("div",{ref:"appDigital__conv",staticClass:"col-lg-6"},[a("h5",[i._v("Свертка")]),i._v(" "),a("div",{attrs:{id:"appDigital__conv"}})]),i._v(" "),a("div",{ref:"appDigital__initialSignal_positive",staticClass:"col-lg-6"},[a("h5",[i._v("Исходный сигнал при t>=0")]),i._v(" "),a("div",{attrs:{id:"appDigital__initialSignal_positive"}})]),i._v(" "),a("div",{ref:"appDigital__initialSignal__Hs",staticClass:"col-lg-6"},[a("h5",[i._v("H(s)")]),i._v(" "),a("div",{attrs:{id:"appDigital__initialSignal__Hs"}})]),i._v(" "),a("div",{ref:"appDigital__initialSignal__Hz",staticClass:"col-lg-6"},[a("h5",[i._v("Z(s)")]),i._v(" "),a("div",{attrs:{id:"appDigital__initialSignal__Hz"}})]),i._v(" "),a("div",{ref:"appDigital__initialSignal__3D",staticClass:"col-12"},[a("h5",[i._v("3D")]),i._v(" "),a("div",{attrs:{id:"appDigital__initialSignal__3D"}})])])])])},staticRenderFns:[]};var c=a("VU/8")(v,g,!1,function(i){a("inDf")},null,null);t.default=c.exports},inDf:function(i,t){}});
//# sourceMappingURL=17.fbdcd2e1a1df1c09c8c3.js.map