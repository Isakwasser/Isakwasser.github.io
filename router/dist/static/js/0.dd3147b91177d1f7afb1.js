webpackJsonp([0],{OLl6:function(e,t,i){e.exports=i.p+"static/img/snowflakes-blue.51e3d83.png"},RWje:function(e,t){},cLzS:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("7+uW"),a=i("OLl6"),o=i.n(a),s={name:"appSnow",data:function(){return{currentBgUrl:void 0,findPhoto:"Зима",Snowflake:{number:50,maxSpeedX:100,maxSpeedY:200,maxRotateSpeed:20,isActive:!0,time:100,items:[]}}},methods:{changeBg:function(){var e=this;fetch("https://pixabay.com/api/?key=23909248-46987dab904e15ddebe9addff&q="+this.findPhoto+"&image_type=photo&per_page=200").then(function(e){return e.json()}).then(function(t){var i=Math.floor(t.hits.length*Math.random());e.currentBgUrl=t.hits[i].largeImageURL}).catch(function(e){console.log(e)})},initSnowflake:function(){return{positionX:Math.floor(Math.random()*window.innerWidth),positionY:-100,speedX:Math.floor((Math.random()-.5)*this.Snowflake.maxSpeedX),speedY:Math.floor((Math.random()+.5)*this.Snowflake.maxSpeedY)/2,rotateAngle:0,rotateSpeed:Math.floor((Math.random()-.5)*this.Snowflake.maxRotateSpeed),opacity:1,transition:"none",image:o.a,scaleX:1}},rotateSnowflakes:function(){if(this.Snowflake.isActive)for(var e=this.Snowflake.time,t=0;t<this.Snowflake.number;t++){var i=this.Snowflake.items[t].rotateAngle+this.Snowflake.items[t].rotateSpeed*e/100;n.a.set(this.Snowflake.items[t],"rotateAngle",i)}},fallSnowflakes:function(){if(this.Snowflake.isActive)for(var e=this.Snowflake.time,t=0;t<this.Snowflake.number;t++){var i=this.Snowflake.items[t].positionY+this.Snowflake.items[t].speedY*e/1e3;n.a.set(this.Snowflake.items[t],"positionY",i),i-100>window.innerHeight?n.a.set(this.Snowflake.items,t,this.initSnowflake()):n.a.set(this.Snowflake.items[t],"transition","all 1s linear")}},moveXSnowflakes:function(){if(this.Snowflake.isActive)for(var e=this.Snowflake.time,t=0;t<this.Snowflake.number;t++){var i=this.Snowflake.items[t].positionX+this.Snowflake.items[t].speedX*e/1e3;this.Snowflake.items[t].speedX+=(Math.random()-.5)*this.Snowflake.maxSpeedX,this.Snowflake.items[t].speedX>.8*this.Snowflake.maxSpeedX&&(this.Snowflake.items[t].speedX-=.3*this.Snowflake.maxSpeedX),this.Snowflake.items[t].speedX<-.8*this.Snowflake.maxSpeedX&&(this.Snowflake.items[t].speedX+=.3*this.Snowflake.maxSpeedX),n.a.set(this.Snowflake.items[t],"positionX",i)}},fadeSnowflakes:function(){if(this.Snowflake.isActive){var e=Math.floor(Math.random()*this.Snowflake.number);n.a.set(this.Snowflake.items[e],"opacity",0)}},parkourSnowflakes:function(){if(this.Snowflake.isActive){var e=Math.floor(Math.random()*this.Snowflake.number);n.a.set(this.Snowflake.items[e],"scaleX",-1)}},animateOnTimer:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Math.floor(200/this.Snowflake.number)+1;this.rotateSnowflakes(),this.fallSnowflakes(),this.moveXSnowflakes(),i%n==0&&this.fadeSnowflakes(),this.parkourSnowflakes(),setTimeout(function(){t.animateOnTimer(e,++i,n)},e)}},created:function(){this.changeBg(),this.$route.query.snowflakes&&(this.Snowflake.number=this.$route.query.snowflakes)},mounted:function(){for(var e=0;e<this.Snowflake.number;e++)this.Snowflake.items.push(this.initSnowflake());this.animateOnTimer(this.Snowflake.time)}},l={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"app-snow",style:{backgroundImage:"url("+this.currentBgUrl+")"}},[t("router-link",{staticClass:"goToMain",attrs:{to:{name:"Main"}}},[this._v("Перейти на главную")]),this._v(" "),this._l(this.Snowflake.items,function(e,i){return t("div",{key:i,staticClass:"snowflake",style:{top:e.positionY+"px",left:e.positionX+"px",transform:"rotate("+e.rotateAngle+"deg) scaleX("+e.scaleX+")",transition:e.transition,opacity:e.opacity,backgroundImage:"url("+e.image+")"}})})],2)},staticRenderFns:[]};var f=i("VU/8")(s,l,!1,function(e){i("RWje")},null,null);t.default=f.exports}});
//# sourceMappingURL=0.dd3147b91177d1f7afb1.js.map