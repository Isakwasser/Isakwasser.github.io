webpackJsonp([3],{GJcV:function(t,e,s){t.exports=s.p+"static/media/sound.a24f99b.wav"},K4R9:function(t,e,s){s("NA/8"),t.exports=s("FeBl").Number.isNaN},MICi:function(t,e,s){t.exports={default:s("K4R9"),__esModule:!0}},"NA/8":function(t,e,s){var a=s("kM2E");a(a.S,"Number",{isNaN:function(t){return t!=t}})},ajBQ:function(t,e){},pXK8:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("MICi"),n=s.n(a);function i(t,e){for(var s={amplitude:[],frequency:[],Re:[],Im:[]},a=t.length,n=1/Math.sqrt(a),i=[],o=[],r=0;r<a;r++){for(var c=0,l=0,u=0;u<a;u++)c+=t[u]*Math.cos(2*Math.PI/a*u*r),l+=t[u]*Math.sin(2*Math.PI/a*u*r);i[r]=n*c,o[r]=-n*l}s.Re=i,s.Im=o;for(var d=0;d<s.Im.length;d++)s.amplitude.push(Math.sqrt(s.Re[d]*s.Re[d]+s.Im[d]*s.Im[d])),s.frequency.push(d*e/s.Im.length);return s}s("504h");var o={data:function(){return{windowWidth:.01,fs:void 0,cutoffF:500,cutoffF_high:1e3,cutoffF_band_low:.02,cutoffF_band_high:.03}},methods:{step1:function(){var t=this,e=new(AudioContext||webkitAudioContext),s=new XMLHttpRequest;s.open("GET",this.$refs.audio.src,!0),s.responseType="arraybuffer",s.onload=function(){e.decodeAudioData(s.response,function(e){var s=e.getChannelData(0);t.showSpectrogramByBytes(s,e.sampleRate)},function(t){console.log("Decode error: "+t)})},s.send()},showSpectrogramByBytes:function(t,e){var s=this,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"spectrogram";console.log(e);var n=document.getElementById(a);n.style.position="relative",n.width=t.length/e/this.windowWidth+1;var o=i(t.slice(0*e*this.windowWidth,1*e*this.windowWidth),e);n.height=1*Math.floor(o.amplitude.length/2);var r=n.getContext("2d");r.clearRect(0,0,n.width,n.height),r.fillStyle="rgb(0, 0, 0)",r.fillRect(0,0,n.width,n.height),r.fillStyle="#FFF",r.fillText(o.frequency[Math.floor(o.amplitude.length/2)]+" Гц",5,10);var c=100,l=0;!function a(o){for(var u=i(t.slice(o*e*s.windowWidth,(o+1)*e*s.windowWidth),e),d=[],f=[],_=0;_<u.amplitude.length/2;_++){var v=Math.log(u.amplitude[_])/10+1;v=u.amplitude[_]/5,v=Math.log(u.amplitude[_]+1)/2,c>v&&(c=v),l<v&&(l=v),v<0&&(v=0),v>1&&(v=1),d.push(v),f.push(u.frequency[_])}for(var h=1*o,p=n.height-1,m=0;m<f.length;m++)r.fillStyle="rgba(255, 255, 255,"+d[m]+")",r.fillRect(h,p,1,1),p-=1;(o+1)*e*s.windowWidth<t.length&&setTimeout(a,0,o+1)}(0)},playFloat32Array:function(t){for(var e=new(window.AudioContext||window.webkitAudioContext),s=(t.getChannelData(0),0);s<t.length;s++);var a=e.createBufferSource();a.buffer=t,a.connect(e.destination),a.start(),this.$refs.stop.onclick=function(){a.stop()}},step2:function(){var t=this,e=new(AudioContext||webkitAudioContext),s=new XMLHttpRequest;s.open("GET",this.$refs.audio2.src,!0),s.responseType="arraybuffer",s.onload=function(){e.decodeAudioData(s.response,function(e){var s=e.getChannelData(0);t.filterButterworth(s),t.showSpectrogramByBytes(s,e.sampleRate,"spectrogram2"),t.playFloat32Array(e)},function(t){console.log("Decode error: "+t)})},s.send()},filterButterworth:function(t){for(var e=t.slice(0),s=void 0,a=2*Math.PI*this.cutoffF,i=Math.tan(Math.PI*a/48e3),o=1+i*Math.sqrt(2)+i*i,r=[i*i/o,2*i*i/o,i*i/o],c=[1,2*(i*i-1)/o,(1-i*Math.sqrt(2)+i*i)/o],l=0;l<t.length;l++){s=0;for(var u=0;u<r.length;u++)l-u>=0&&(s+=r[u]*e[l-u]);for(var d=1;d<c.length;d++)l-d>=0&&(s-=c[d]*t[l-d]);n()(s)&&console.log(l),t[l]=s}return t},step3:function(){var t=this,e=new(AudioContext||webkitAudioContext),s=new XMLHttpRequest;s.open("GET",this.$refs.audio3.src,!0),s.responseType="arraybuffer",s.onload=function(){e.decodeAudioData(s.response,function(e){var s=e.getChannelData(0);t.filterButterworth_high(s),t.showSpectrogramByBytes(s,e.sampleRate,"spectrogram2_high"),t.playFloat32Array(e)},function(t){console.log("Decode error: "+t)})},s.send()},filterButterworth_high:function(t){for(var e=t.slice(0),s=void 0,a=2*Math.PI*this.cutoffF_high,i=Math.tan(Math.PI*a/48e3),o=1+i*Math.sqrt(2)+i*i,r=[1/o,2/o,1/o],c=[1,2*(i*i-1)/o,(1-i*Math.sqrt(2)+i*i)/o],l=0;l<t.length;l++){s=0;for(var u=0;u<r.length;u++)l-u>=0&&(s+=r[u]*e[l-u]);for(var d=1;d<c.length;d++)l-d>=0&&(s-=c[d]*t[l-d]);n()(s)&&console.log(l),t[l]=s}return t},step4:function(){var t=this,e=new(AudioContext||webkitAudioContext),s=new XMLHttpRequest;s.open("GET",this.$refs.audio3.src,!0),s.responseType="arraybuffer",s.onload=function(){e.decodeAudioData(s.response,function(e){var s=e.getChannelData(0);t.filterButterworth_band(s),t.showSpectrogramByBytes(s,e.sampleRate,"spectrogram2_band"),t.playFloat32Array(e)},function(t){console.log("Decode error: "+t)})},s.send()},filterButterworth_band:function(t){for(var e=t.slice(0),s=void 0,a=(this.cutoffF_band_high-this.cutoffF_band_low)*Math.PI,i=this.cutoffF_band_high*this.cutoffF_band_low*4*Math.PI*Math.PI,o=1+a+i,r=[a/o,0,-a/o],c=[1,2*(i-1)/o,(1-a+i)/o],l=0;l<t.length;l++){s=0;for(var u=0;u<r.length;u++)l-u>=0&&(s+=r[u]*e[l-u]);for(var d=1;d<c.length;d++)l-d>=0&&(s-=c[d]*t[l-d]);n()(s)&&console.log(l),t[l]=s}return t}},mounted:function(){}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"appDigitalInit"},[a("div",{staticClass:"appDigital_S07"},[a("h2",{staticClass:"text-center"},[t._v("Самостоятельная работа №7")]),t._v(" "),a("div",{staticClass:"step"},[t._m(0),t._v(" "),a("div",{staticClass:"step__content"},[a("div",{staticClass:"step__descryption"},[t._v("Аудиофайл")]),t._v(" "),a("div",{staticClass:"step__action"},[a("audio",{ref:"audio",attrs:{controls:"",src:s("GJcV")}},[t._v("\n            Тег audio не поддерживается вашим браузером.\n          ")])])])]),t._v(" "),a("div",{staticClass:"step"},[t._m(1),t._v(" "),a("div",{staticClass:"step__content"},[a("div",{staticClass:"step__descryption"},[a("button",{on:{click:t.step1}},[t._v("\n            Получить спектрограмму c временным разрешением "+t._s(t.windowWidth)+"с\n          ")])]),t._v(" "),t._m(2)])]),t._v(" "),a("div",{staticClass:"step"},[t._m(3),t._v(" "),a("div",{staticClass:"step__content"},[a("audio",{ref:"audio2",staticClass:"d-none",attrs:{controls:"",src:s("GJcV")}},[t._v("\n          Тег audio не поддерживается вашим браузером.\n        ")]),t._v(" "),a("div",{staticClass:"step__descryption"},[a("h4",[t._v("Фильтр Баттерворта. ФНЧ")]),t._v(" "),a("div",{staticClass:"d-flex"},[a("label",{staticClass:"col-2"},[t._v("Частота среза:")]),t._v(" "),a("div",{},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.cutoffF,expression:"cutoffF"}],attrs:{type:"text"},domProps:{value:t.cutoffF},on:{input:function(e){e.target.composing||(t.cutoffF=e.target.value)}}})])]),t._v(" "),a("button",{on:{click:t.step2}},[t._v("\n            Фильтр, спектрограмма, воспроизведение\n          ")]),t._v(" "),a("button",{ref:"stop"},[t._v("Остановить воспроизведение")])]),t._v(" "),t._m(4)])]),t._v(" "),a("div",{staticClass:"step"},[t._m(5),t._v(" "),a("div",{staticClass:"step__content"},[a("div",{staticClass:"step__descryption"},[a("audio",{ref:"audio3",staticClass:"d-none",attrs:{controls:"",src:s("GJcV")}},[t._v("\n            Тег audio не поддерживается вашим браузером.\n          ")]),t._v(" "),a("h4",[t._v("Фильтр Баттерворта. ФВЧ")]),t._v(" "),a("div",{staticClass:"d-flex"},[a("label",{staticClass:"col-2"},[t._v("Частота среза:")]),t._v(" "),a("div",{},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.cutoffF_high,expression:"cutoffF_high"}],attrs:{type:"text"},domProps:{value:t.cutoffF_high},on:{input:function(e){e.target.composing||(t.cutoffF_high=e.target.value)}}})])]),t._v(" "),a("button",{on:{click:t.step3}},[t._v("\n            Фильтр, спектрограмма, воспроизведение\n          ")]),t._v(" "),a("button",{ref:"stop"},[t._v("Остановить воспроизведение")])]),t._v(" "),t._m(6)])]),t._v(" "),a("div",{staticClass:"step"},[t._m(7),t._v(" "),a("div",{staticClass:"step__content"},[a("div",{staticClass:"step__descryption"},[a("audio",{ref:"audio4",staticClass:"d-none",attrs:{controls:"",src:s("GJcV")}},[t._v("\n            Тег audio не поддерживается вашим браузером.\n          ")]),t._v(" "),a("h4",[t._v("Фильтр Баттерворта. Полосовой")]),t._v(" "),a("div",{staticClass:"d-flex"},[a("label",{staticClass:"col-2"},[t._v("Частота среза нижняя:")]),t._v(" "),a("div",{},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.cutoffF_band_low,expression:"cutoffF_band_low"}],attrs:{type:"number"},domProps:{value:t.cutoffF_band_low},on:{input:function(e){e.target.composing||(t.cutoffF_band_low=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"d-flex"},[a("label",{staticClass:"col-2"},[t._v("Частота среза верхняя:")]),t._v(" "),a("div",{},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.cutoffF_band_high,expression:"cutoffF_band_high"}],attrs:{type:"number"},domProps:{value:t.cutoffF_band_high},on:{input:function(e){e.target.composing||(t.cutoffF_band_high=e.target.value)}}})])]),t._v(" "),a("button",{on:{click:t.step4}},[t._v("\n            Фильтр, спектрограмма, воспроизведение\n          ")]),t._v(" "),a("button",{ref:"stop"},[t._v("Остановить воспроизведение")])]),t._v(" "),t._m(8)])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"step__num"},[e("div",{staticClass:"num"},[this._v("1")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"step__num"},[e("div",{staticClass:"num"},[this._v("2")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"step__action"},[e("canvas",{attrs:{id:"spectrogram"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"step__num"},[e("div",{staticClass:"num"},[this._v("3")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"step__action"},[e("canvas",{attrs:{id:"spectrogram2"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"step__num"},[e("div",{staticClass:"num"},[this._v("4")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"step__action"},[e("canvas",{attrs:{id:"spectrogram2_high"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"step__num"},[e("div",{staticClass:"num"},[this._v("5")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"step__action"},[e("canvas",{attrs:{id:"spectrogram2_band"}})])}]};var c=s("VU/8")(o,r,!1,function(t){s("ajBQ")},null,null);e.default=c.exports}});
//# sourceMappingURL=3.b75a1d141d4eb78cc82c.js.map