webpackJsonp([0],{OLl6:function(e,t,i){e.exports=i.p+"static/img/snowflakes-blue.51e3d83.png"},cLzS:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("7+uW"),a=i("OLl6"),o=i.n(a),s={name:"appSnow",data:function(){return{currentBgUrl:void 0,findPhoto:"Зима",Snowflake:{number:50,maxSpeedX:100,maxSpeedY:200,maxRotateSpeed:20,isActive:!0,time:100,items:[]}}},methods:{changeBg:function(){var e=this;fetch("https://pixabay.com/api/?key=23909248-46987dab904e15ddebe9addff&q="+this.findPhoto+"&image_type=photo").then(function(e){return e.json()}).then(function(t){var i=Math.floor(t.hits.length*Math.random());e.currentBgUrl=t.hits[i].largeImageURL}).catch(function(e){console.log(e)})},initSnowflake:function(){return{positionX:Math.floor(Math.random()*window.innerWidth),positionY:-100,speedX:Math.floor((Math.random()-.5)*this.Snowflake.maxSpeedX),speedY:Math.floor((Math.random()+.5)*this.Snowflake.maxSpeedY)/2,rotateAngle:0,rotateSpeed:Math.floor((Math.random()-.5)*this.Snowflake.maxRotateSpeed),opacity:1,transition:"none",image:o.a}},rotateSnowflakes:function(){var e=this;if(this.Snowflake.isActive){for(var t=this.Snowflake.time,i=0;i<this.Snowflake.number;i++){var a=this.Snowflake.items[i].rotateAngle+this.Snowflake.items[i].rotateSpeed*t/100;n.a.set(this.Snowflake.items[i],"rotateAngle",a)}setTimeout(function(){e.rotateSnowflakes()},t)}},fallSnowflakes:function(){var e=this;if(this.Snowflake.isActive){for(var t=this.Snowflake.time,i=0;i<this.Snowflake.number;i++){var a=this.Snowflake.items[i].positionY+this.Snowflake.items[i].speedY*t/1e3;n.a.set(this.Snowflake.items[i],"positionY",a),a-100>window.innerHeight?(n.a.set(this.Snowflake.items,i,{}),n.a.set(this.Snowflake.items,i,this.initSnowflake())):n.a.set(this.Snowflake.items[i],"transition","all 1s linear")}setTimeout(function(){e.fallSnowflakes()},t)}},moveXSnowflakes:function(){var e=this;if(this.Snowflake.isActive){for(var t=this.Snowflake.time,i=0;i<this.Snowflake.number;i++){var a=this.Snowflake.items[i].positionX+this.Snowflake.items[i].speedX*t/1e3;this.Snowflake.items[i].speedX+=(Math.random()-.5)*this.Snowflake.maxSpeedX,this.Snowflake.items[i].speedX>.8*this.Snowflake.maxSpeedX&&(this.Snowflake.items[i].speedX-=.3*this.Snowflake.maxSpeedX),this.Snowflake.items[i].speedX<-.8*this.Snowflake.maxSpeedX&&(this.Snowflake.items[i].speedX+=.3*this.Snowflake.maxSpeedX),n.a.set(this.Snowflake.items[i],"positionX",a)}setTimeout(function(){e.moveXSnowflakes()},t)}},fadeSnowflakes:function(e){var t=this;if(this.Snowflake.isActive){var i=Math.floor(Math.random()*this.Snowflake.number);n.a.set(this.Snowflake.items[i],"opacity",0),setTimeout(function(){n.a.set(t.Snowflake.items,i,t.initSnowflake())},1e3),setTimeout(function(){t.fadeSnowflakes(e)},e)}}},created:function(){this.changeBg(),this.$route.query.snowflakes&&(this.Snowflake.number=this.$route.query.snowflakes)},mounted:function(){for(var e=0;e<this.Snowflake.number;e++)this.Snowflake.items.push(this.initSnowflake());this.rotateSnowflakes(),this.fallSnowflakes(),this.moveXSnowflakes(),this.fadeSnowflakes(100)}},f={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"app-snow",style:{backgroundImage:"url("+this.currentBgUrl+")"}},[t("router-link",{staticClass:"goToMain",attrs:{to:{name:"Main"}}},[this._v("Перейти на главную")]),this._v(" "),this._l(this.Snowflake.items,function(e,i){return t("div",{key:i,staticClass:"snowflake",style:{top:e.positionY+"px",left:e.positionX+"px",transform:"rotate("+e.rotateAngle+"deg)",transition:e.transition,opacity:e.opacity,backgroundImage:"url("+e.image+")"}})})],2)},staticRenderFns:[]};var l=i("VU/8")(s,f,!1,function(e){i("wabw")},null,null);t.default=l.exports},wabw:function(e,t){}});
//# sourceMappingURL=0.ab555a9522e10e1abeb3.js.map