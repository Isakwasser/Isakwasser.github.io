webpackJsonp([5],{"3l1I":function(t,s){},MTJs:function(t,s){},STeW:function(t,s){},hSOh:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"left"},[s("router-link",{staticClass:"exit text-nowrap",attrs:{to:{name:"Main"}}},[s("span",[this._v("Назад на главную")])])],1)},staticRenderFns:[]};var a=e("VU/8")({},n,!1,function(t){e("MTJs")},null,null).exports,i={props:["item"],data:function(){return{}},methods:{showContent:function(){var t=document.querySelector("#news_content");$(t).find(".modal-body").text(this.item.content),bootstrap.Modal.getOrCreateInstance(t).show()}}},l={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"col-12 col-lg-6 col-xl-4 news__item"},[e("div",{staticClass:"border rounded-3 w-100 h-100 item"},[e("h6",{staticClass:"item__title"},[t._v(t._s(t.item.title))]),t._v(" "),e("p",[t._v(t._s(t.item.description))]),t._v(" "),t.item.content?e("button",{staticClass:"btn btn-secondary btn-sm",on:{click:t.showContent}},[t._v("\n      Читать полностью\n    ")]):t._e()])])},staticRenderFns:[]};var o={props:["news","status"],components:{appNewsItem:e("VU/8")(i,l,!1,function(t){e("ncjp")},null,null).exports}},c={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[e("div",{staticClass:"wrapper"},[e("div",{staticClass:"container"},["show"==t.status?e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("span",[t._v("Статус: "+t._s(t.news.status)+".")]),t._v(" "),e("span",[t._v("Всего результатов: "+t._s(t.news.totalResults))]),t._v(" "),e("span",[t._v("Следующая страница: "+t._s(t.news.nextPage))])]),t._v(" "),t._l(t.news.results,function(t,s){return e("appNewsItem",{key:s,attrs:{item:t}})})],2):t._e()])])])},staticRenderFns:[]};var r={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"app-news__modal"},[s("div",{staticClass:"modal fade",attrs:{id:"news_content",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-xl"},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[this._v("Контент новости")]),this._v(" "),s("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})]),this._v(" "),s("div",{staticClass:"modal-body"},[this._v("...")]),this._v(" "),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-bs-dismiss":"modal"}},[this._v("\n            Close\n          ")])])])])])])}]},d={name:"appNews",components:{appNewsLeft:a,appNewsContent:e("VU/8")(o,c,!1,function(t){e("3l1I")},null,null).exports,appNewsModal:e("VU/8")(null,r,!1,null,null,null).exports},data:function(){return{gotData:{},status:"download"}},methods:{getNews:function(){var t=this;fetch("https://newsdata.io/api/1/news?apikey=pub_508083ccacd95ad6401c5b0d54908e5c3b34&language=en").then(function(t){return t.json()}).then(function(s){console.log(s.results[0]),t.gotData=s,t.status="show"})}},created:function(){this.getNews()}},u={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("div",{staticClass:"app-news"},[s("appNewsLeft"),this._v(" "),s("appNewsContent",{attrs:{news:this.gotData,status:this.status}})],1),this._v(" "),s("appNewsModal")],1)},staticRenderFns:[]};var p=e("VU/8")(d,u,!1,function(t){e("STeW")},null,null);s.default=p.exports},ncjp:function(t,s){}});
//# sourceMappingURL=5.c8b58e67eac291438ca6.js.map