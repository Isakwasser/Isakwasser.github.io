webpackJsonp([17],{Jmt5:function(n,t){},LuVo:function(n,t){},NHnr:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});e("Jmt5");var a=e("7+uW"),p={name:"App",data:function(){return{transitionName:void 0}},watch:{$route:function(n,t){var e=n.path.split("/").length,a=t.path.split("/").length;this.transitionName=e<a?"slide-right":"slide-left"}}},o={render:function(){var n=this.$createElement,t=this._self._c||n;return t("div",{attrs:{id:"app"}},[t("transition",{attrs:{name:this.transitionName}},[t("router-view")],1)],1)},staticRenderFns:[]};var i=e("VU/8")(p,o,!1,function(n){e("LuVo")},null,null).exports,u=e("/ocq");a.a.use(u.a);var r=new u.a({routes:[{path:"/",name:"Init",component:function(){return e.e(6).then(e.bind(null,"g9w1"))}},{path:"/main",name:"Main",component:function(){return e.e(13).then(e.bind(null,"s6+2"))}},{path:"/app/snow",name:"appSnow",component:function(){return e.e(3).then(e.bind(null,"cLzS"))}},{path:"/app/test",name:"appTest",component:function(){return e.e(5).then(e.bind(null,"GjTH"))}},{path:"/app/buffer",name:"appBuffer",component:function(){return e.e(12).then(e.bind(null,"gu9l"))}},{path:"/app/funny-image",name:"appFunnyImage",component:function(){return e.e(10).then(e.bind(null,"5S/l"))}},{path:"/games",name:"appGames",component:function(){return e.e(9).then(e.bind(null,"/2Id"))},children:[{path:"",name:"appGames_init",component:function(){return e.e(1).then(e.bind(null,"mkL0"))}},{path:"shooting",name:"appGames_shooting",component:function(){return e.e(14).then(e.bind(null,"0xYy"))}},{path:"tic-tac-toe",name:"appGames_ticTacToe",component:function(){return e.e(0).then(e.bind(null,"cp3T"))}},{path:"2048",name:"appGames_2048",component:function(){return e.e(7).then(e.bind(null,"oXx3"))}}]},{path:"/app/place",name:"appPlace",component:function(){return e.e(4).then(e.bind(null,"rWjC"))}},{path:"/app/news",name:"appNews",component:function(){return e.e(2).then(e.bind(null,"hSOh"))}},{path:"*",name:"app404",component:function(){return e.e(11).then(e.bind(null,"YoSS"))}}]});e.e(15).then(e.bind(null,"7t+N")).then(function(n){window.$=window.jQuery=n}),a.a.config.productionTip=!1,new a.a({el:"#app",router:r,components:{App:i},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.176488fd28309a629e14.js.map