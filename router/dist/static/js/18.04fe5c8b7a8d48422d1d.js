webpackJsonp([18],{"5S/l":function(a,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var t=e.e(27).then(e.bind(null,"RMeR")),i={name:"appFunnyImage",data:function(){return{isImagesShowed:!1,backImage:"linear-gradient(45deg, #f8a261, #6e9fc9)"}},methods:{showFileAsJpg:function(){var a=this,s=arguments.length>0&&void 0!==arguments[0]&&arguments[0];arguments[1];s=this.$refs.fileIn.files[0];var e=new FileReader;e.readAsDataURL(s),e.onload=function(){a.isImagesShowed=!0,a.showOutImages("url("+e.result+")")}},useDefaultImage:function(){var a=this;t.then(function(s){a.isImagesShowed=!0,a.showOutImages("url("+s+")")})},showOutImages:function(a){this.$refs.showImage.style.backgroundImage=a+", "+this.backImage,this.$refs.showOverlayImage.style.backgroundImage=a+", "+this.backImage,this.$refs.showCanvasImage.style.backgroundImage=a+", url(https://html5book.ru/wp-content/uploads/2015/12/background63.jpg)",this.$refs.showRetroImage.style.backgroundImage=a+", radial-gradient(rgba(255,255,255,.3) 20px, transparent 20px)",this.$refs.showMeshedImage.style.backgroundImage=a+", radial-gradient(black 1px, transparent 1px)",this.$refs.showDiffImage.style.backgroundImage=a+", linear-gradient(45deg, #fff, #fff)"}}},o={render:function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("div",{staticClass:"app-funnyImage"},[e("router-link",{staticClass:"goToMain",attrs:{to:{name:"Main"}}},[a._v("Перейти на главную")]),a._v(" "),e("div",{staticClass:"container p-5"},[e("div",{staticClass:"input-group mb-3"},[e("button",{staticClass:"input-group-text",on:{click:a.useDefaultImage}},[a._v("\n        Использовать встроенное изображение\n      ")]),a._v(" "),e("input",{ref:"fileIn",staticClass:"form-control",attrs:{type:"file",id:"fileUploadInput"},on:{change:a.showFileAsJpg}})]),a._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:a.isImagesShowed,expression:"isImagesShowed"}],staticClass:"row images"},[e("div",{staticClass:"col-6"},[e("div",{ref:"showImage",staticClass:"ratio ratio-1x1"})]),a._v(" "),e("div",{staticClass:"col-6"},[e("div",{ref:"showOverlayImage",staticClass:"ratio ratio-1x1 bg-overlay"})]),a._v(" "),e("div",{staticClass:"col-6"},[e("div",{ref:"showCanvasImage",staticClass:"ratio ratio-1x1 bg-overlay"})]),a._v(" "),e("div",{staticClass:"col-6"},[e("div",{ref:"showRetroImage",staticClass:"ratio ratio-1x1 bg-retro"})]),a._v(" "),e("div",{staticClass:"col-6"},[e("div",{ref:"showMeshedImage",staticClass:"ratio ratio-1x1 bg-meshed"})]),a._v(" "),e("div",{staticClass:"col-6"},[e("div",{ref:"showDiffImage",staticClass:"ratio ratio-1x1 bg-diff"})])])])],1)},staticRenderFns:[]};var r=e("VU/8")(i,o,!1,function(a){e("zpa1")},null,null);s.default=r.exports},zpa1:function(a,s){}});
//# sourceMappingURL=18.04fe5c8b7a8d48422d1d.js.map