webpackJsonp([5],{"H+ot":function(n,t){},Jmt5:function(n,t){},NHnr:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e("7+uW"),a={name:"App",data:function(){return{transitionName:void 0}},watch:{$route:function(n,t){var e=n.path.split("/").length,i=t.path.split("/").length;this.transitionName=e<i?"slide-right":"slide-left"}}},o={render:function(){var n=this.$createElement,t=this._self._c||n;return t("div",{attrs:{id:"app"}},[t("transition",{attrs:{name:this.transitionName}},[t("router-view")],1)],1)},staticRenderFns:[]};var r=e("VU/8")(a,o,!1,function(n){e("H+ot")},null,null).exports,p=e("/ocq");i.a.use(p.a);var u=new p.a({routes:[{path:"/",name:"Main",component:function(){return e.e(2).then(e.bind(null,"s6+2"))}},{path:"/app/snow",name:"appSnow",component:function(){return e.e(0).then(e.bind(null,"cLzS"))}},{path:"*",name:"app404",component:function(){return e.e(1).then(e.bind(null,"YoSS"))}}]});e("Jmt5");window.$=window.jQuery=e.e(3).then(e.bind(null,"7t+N")),i.a.config.productionTip=!1,new i.a({el:"#app",router:u,components:{App:r},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.9ddef859b28dcba4e645.js.map