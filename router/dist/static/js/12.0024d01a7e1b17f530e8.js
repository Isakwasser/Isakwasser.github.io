webpackJsonp([12],{"4Yaq":function(t,i){},qJYC:function(t,i,s){t.exports=s.p+"static/img/earth.0990061.jpg"},rWjC:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var o=s.e(29).then(s.bind(null,"+PYX")),e={name:"appPlace",data:function(){return{navigator:void 0,ipwhois:void 0,ipwhois__more:!1,bgImage:o}},methods:{getNavigatorPosition:function(){var t=this;navigator.geolocation.getCurrentPosition(function(i){t.navigator=i})},getIpPosition:function(){var t=this;fetch("https://ipwhois.app/json/").then(function(t){return t.json()}).then(function(i){console.log(i),t.ipwhois=i})}},created:function(){this.getNavigatorPosition(),this.getIpPosition()}},a={render:function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",{staticClass:"app-place"},[o("router-link",{staticClass:"goToMain",attrs:{to:{name:"Main"}}},[t._v("Перейти на главную")]),t._v(" "),o("div",{staticClass:"bg",style:{backgroundImage:"url("+s("qJYC")+")"}}),t._v(" "),o("div",{staticClass:"content"},[o("div",{staticClass:"\n        content__ans\n        position-absolute\n        top-50\n        start-50\n        translate-middle\n        bg-light\n        p-3\n        border\n        rounded\n        border-2\n      "},[t.navigator?o("div",[o("h6",[t._v("Ваше местоположение, полученное методом window.navigator:")]),t._v(" "),o("table",{staticClass:"ans__table"},[t._m(0),t._v(" "),o("tr",[o("td",[t._v("Точность")]),t._v(" "),o("td",[t._v(t._s(t.navigator.coords.accuracy))])]),t._v(" "),o("tr",[o("td",[t._v("Широта")]),t._v(" "),o("td",[t._v(t._s(t.navigator.coords.latitude))])]),t._v(" "),o("tr",[o("td",[t._v("Долгота")]),t._v(" "),o("td",[t._v(t._s(t.navigator.coords.longitude))])]),t._v(" "),o("tr",[o("td",{staticClass:"text-center",attrs:{colspan:"2"}},[o("a",{staticClass:"border btn btn-sm",attrs:{href:"https://yandex.ru/maps/?pt="+t.navigator.coords.longitude+","+t.navigator.coords.latitude+"&z=15",target:"_blank"}},[t._v("Перейти к точке на карте")])])])])]):t._e(),t._v(" "),t.ipwhois?o("div",{class:{"mt-4":t.navigator}},[o("h6",[t._v("Ваше местоположение, полученное по IP:")]),t._v(" "),o("table",{staticClass:"ans__table position-relative"},[t._m(1),t._v(" "),o("tr",[o("td",[t._v("Ваш IP")]),t._v(" "),o("td",[t._v(t._s(t.ipwhois.type)+": "+t._s(t.ipwhois.ip))])]),t._v(" "),o("tr",[o("td",[t._v("Широта")]),t._v(" "),o("td",[t._v(t._s(t.ipwhois.latitude))])]),t._v(" "),o("tr",[o("td",[t._v("Долгота")]),t._v(" "),o("td",[t._v(t._s(t.ipwhois.longitude))])]),t._v(" "),o("tr",[o("td",{staticClass:"text-center",attrs:{colspan:"2"}},[o("a",{staticClass:"border btn btn-sm",attrs:{href:"https://yandex.ru/maps/?pt="+t.ipwhois.longitude+","+t.ipwhois.latitude+"&z=15",target:"_blank"}},[t._v("Перейти к точке на карте")])])]),t._v(" "),o("tr",{directives:[{name:"show",rawName:"v-show",value:t.ipwhois__more,expression:"ipwhois__more"}]},[o("td",[t._v("Континент")]),t._v(" "),o("td",[t._v(t._s(t.ipwhois.continent_code)+": "+t._s(t.ipwhois.continent))])]),t._v(" "),o("tr",{directives:[{name:"show",rawName:"v-show",value:t.ipwhois__more,expression:"ipwhois__more"}]},[o("td",[t._v("Страна")]),t._v(" "),o("td",[o("span",[t._v(" "+t._s(t.ipwhois.country_code)+": "+t._s(t.ipwhois.country)+" ")]),t._v(" "),o("span",{staticClass:"country-flag border"},[o("img",{staticStyle:{width:"40px"},attrs:{src:t.ipwhois.country_flag}})])])]),t._v(" "),o("tr",{directives:[{name:"show",rawName:"v-show",value:t.ipwhois__more,expression:"ipwhois__more"}]},[o("td",[t._v("Регион")]),t._v(" "),o("td",[t._v(t._s(t.ipwhois.region))])]),t._v(" "),o("tr",{directives:[{name:"show",rawName:"v-show",value:t.ipwhois__more,expression:"ipwhois__more"}]},[o("td",[t._v("Город")]),t._v(" "),o("td",[t._v(t._s(t.ipwhois.city))])])]),t._v(" "),o("button",{staticClass:"ans__showMore text-center d-block btn col-12 border mt-2",on:{click:function(i){t.ipwhois__more=!t.ipwhois__more}}},[t.ipwhois__more?t._e():o("span",[t._v("Показать больше")]),t._v(" "),t.ipwhois__more?o("span",[t._v("Скрыть")]):t._e()])]):t._e()])])],1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("thead",{},[i("th"),this._v(" "),i("th")])},function(){var t=this.$createElement,i=this._self._c||t;return i("thead",{},[i("th"),this._v(" "),i("th")])}]};var n=s("VU/8")(e,a,!1,function(t){s("4Yaq")},null,null);i.default=n.exports}});
//# sourceMappingURL=12.0024d01a7e1b17f530e8.js.map