webpackJsonp([6],{YHFE:function(t,i){},rWjC:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var o={name:"appPlace",data:function(){return{navigator:void 0,ipwhois:void 0,ipwhois__more:!1}},methods:{getNavigatorPosition:function(){var t=this;navigator.geolocation.getCurrentPosition(function(i){t.navigator=i})},getIpPosition:function(){var t=this;fetch("http://ipwhois.app/json/").then(function(t){return t.json()}).then(function(i){console.log(i),t.ipwhois=i})}},created:function(){this.getNavigatorPosition(),this.getIpPosition()}},e={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"app-place"},[s("router-link",{staticClass:"goToMain",attrs:{to:{name:"Main"}}},[t._v("Перейти на главную")]),t._v(" "),s("div",{staticClass:"bg"}),t._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"\n        content__ans\n        position-absolute\n        top-50\n        start-50\n        translate-middle\n        bg-light\n        p-3\n        border\n        rounded\n        border-2\n      "},[t.navigator?s("div",[s("h6",[t._v("Ваше местоположение, полученное методом window.navigator:")]),t._v(" "),s("table",{staticClass:"ans__table"},[t._m(0),t._v(" "),s("tr",[s("td",[t._v("Точность")]),t._v(" "),s("td",[t._v(t._s(t.navigator.coords.accuracy))])]),t._v(" "),s("tr",[s("td",[t._v("Широта")]),t._v(" "),s("td",[t._v(t._s(t.navigator.coords.latitude))])]),t._v(" "),s("tr",[s("td",[t._v("Долгота")]),t._v(" "),s("td",[t._v(t._s(t.navigator.coords.longitude))])]),t._v(" "),s("tr",[s("td",{staticClass:"text-center",attrs:{colspan:"2"}},[s("a",{staticClass:"border btn btn-sm",attrs:{href:"https://yandex.ru/maps/?pt="+t.navigator.coords.longitude+","+t.navigator.coords.latitude+"&z=15",target:"_blank"}},[t._v("Перейти к точке на карте")])])])])]):t._e(),t._v(" "),t.ipwhois?s("div",{class:{"mt-4":t.navigator}},[s("h6",[t._v("Ваше местоположение, полученное по IP:")]),t._v(" "),s("table",{staticClass:"ans__table position-relative"},[t._m(1),t._v(" "),s("tr",[s("td",[t._v("Ваш IP")]),t._v(" "),s("td",[t._v(t._s(t.ipwhois.type)+": "+t._s(t.ipwhois.ip))])]),t._v(" "),s("tr",[s("td",[t._v("Широта")]),t._v(" "),s("td",[t._v(t._s(t.ipwhois.latitude))])]),t._v(" "),s("tr",[s("td",[t._v("Долгота")]),t._v(" "),s("td",[t._v(t._s(t.ipwhois.longitude))])]),t._v(" "),s("tr",[s("td",{staticClass:"text-center",attrs:{colspan:"2"}},[s("a",{staticClass:"border btn btn-sm",attrs:{href:"https://yandex.ru/maps/?pt="+t.ipwhois.longitude+","+t.ipwhois.latitude+"&z=15",target:"_blank"}},[t._v("Перейти к точке на карте")])])]),t._v(" "),s("tr",{directives:[{name:"show",rawName:"v-show",value:t.ipwhois__more,expression:"ipwhois__more"}]},[s("td",[t._v("Континент")]),t._v(" "),s("td",[t._v(t._s(t.ipwhois.continent_code)+": "+t._s(t.ipwhois.continent))])]),t._v(" "),s("tr",{directives:[{name:"show",rawName:"v-show",value:t.ipwhois__more,expression:"ipwhois__more"}]},[s("td",[t._v("Страна")]),t._v(" "),s("td",[s("span",[t._v(" "+t._s(t.ipwhois.country_code)+": "+t._s(t.ipwhois.country)+" ")]),t._v(" "),s("span",{staticClass:"country-flag border"},[s("img",{staticStyle:{width:"40px"},attrs:{src:t.ipwhois.country_flag}})])])]),t._v(" "),s("tr",{directives:[{name:"show",rawName:"v-show",value:t.ipwhois__more,expression:"ipwhois__more"}]},[s("td",[t._v("Регион")]),t._v(" "),s("td",[t._v(t._s(t.ipwhois.region))])]),t._v(" "),s("tr",{directives:[{name:"show",rawName:"v-show",value:t.ipwhois__more,expression:"ipwhois__more"}]},[s("td",[t._v("Город")]),t._v(" "),s("td",[t._v(t._s(t.ipwhois.city))])])]),t._v(" "),s("button",{staticClass:"ans__showMore text-center d-block btn col-12 border mt-2",on:{click:function(i){t.ipwhois__more=!t.ipwhois__more}}},[t.ipwhois__more?t._e():s("span",[t._v("Показать больше")]),t._v(" "),t.ipwhois__more?s("span",[t._v("Скрыть")]):t._e()])]):t._e()])])],1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("thead",{},[i("th"),this._v(" "),i("th")])},function(){var t=this.$createElement,i=this._self._c||t;return i("thead",{},[i("th"),this._v(" "),i("th")])}]};var a=s("VU/8")(o,e,!1,function(t){s("YHFE")},null,null);i.default=a.exports}});
//# sourceMappingURL=6.a63863e9ac6dcd01371e.js.map