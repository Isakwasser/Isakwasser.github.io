webpackJsonp([11],{"GB/z":function(t,e){},GjTH:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("dAg3"),i=n.n(s),o=function(t){t.callback(i.a.questions)},r=n("7+uW"),u={name:"appTest",data:function(){return{questions:void 0,currentQuestionIndex:void 0,isQuestionShowed:!1}},methods:{renderQuestion:function(){this.isQuestionShowed=!0},chooseOption:function(t){this.questions[this.currentQuestionIndex].options[t].wasClicked||r.a.set(this.questions[this.currentQuestionIndex].options[t],"wasClicked",!0)},goBackQuestion:function(){this.resetAnimationDuration(),this.currentQuestionIndex&&(this.currentQuestionIndex--,this.$refs.goForward.removeAttribute("disabled")),this.updateButtons()},goForwardQuestion:function(){this.resetAnimationDuration(),this.currentQuestionIndex<this.questions.length-1&&(this.currentQuestionIndex++,this.$refs.goBack.removeAttribute("disabled")),this.updateButtons()},updateButtons:function(){this.questions.length>1&&(this.$refs.goForward.removeAttribute("disabled"),this.$refs.goBack.removeAttribute("disabled"),this.currentQuestionIndex==this.questions.length-1&&this.$refs.goForward.setAttribute("disabled","disabled"),0==this.currentQuestionIndex&&this.$refs.goBack.setAttribute("disabled","disabled"))},resetAnimationDuration:function(){this.questions[this.currentQuestionIndex].options.forEach(function(t){t.wasClicked&&(t.animationDuration="0s")})},fetchData:function(){var t=this;o({callback:function(e){r.a.set(t,"questions",e)}})}},created:function(){this.fetchData(),this.currentQuestionIndex=0},mounted:function(){this.updateButtons()}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-test d-flex justify-content-center align-items-center"},[n("router-link",{staticClass:"goToMain",attrs:{to:{name:"Main"}}},[t._v("\n    Перейти на главную\n  ")]),t._v(" "),t.questions?n("div",{staticClass:"quection__container container text-center"},[n("div",{staticClass:"d-flex justify-content-center"},[n("transition",{attrs:{name:"trans"}},[n("h2",{key:t.currentQuestionIndex,staticClass:"question__title mb-5"},[t._v("\n          "+t._s(t.questions[t.currentQuestionIndex].question)+"\n        ")])])],1),t._v(" "),n("div",{staticClass:"question__options d-flex flex-wrap justify-content-between"},t._l(t.questions[t.currentQuestionIndex].options,function(e,s){return n("div",{key:s,ref:"options",refInFor:!0,staticClass:"question__option",class:{wasClicked:e.wasClicked,"fail-choose":!e.isCorrect,"success-choose":e.isCorrect},style:{animationDuration:e.animationDuration},on:{click:function(e){return t.chooseOption(s)}}},[n("div",{staticClass:"d-flex justify-content-center"},[n("transition",{attrs:{name:"transToBottom"}},[n("span",{key:t.currentQuestionIndex},[t._v(t._s(e.text))])])],1)])}),0),t._v(" "),t.questions.length>1?n("div",{staticClass:"question__buttons d-flex justify-content-between mt-5"},[n("div",{staticClass:"questions__goBack"},[n("button",{ref:"goBack",on:{click:t.goBackQuestion}},[t._v("Назад")])]),t._v(" "),n("div",{staticClass:"questions__goForward"},[n("button",{ref:"goForward",on:{click:t.goForwardQuestion}},[t._v("Вперед")])])]):t._e()]):t._e()],1)},staticRenderFns:[]};var c=n("VU/8")(u,a,!1,function(t){n("GB/z")},null,null);e.default=c.exports},dAg3:function(t,e){t.exports={questions:[{question:"Вопрос 1",options:[{text:"Вариант ответа 1.1"},{text:"Вариант ответа 1.2"},{text:"Вариант ответа 1.3"},{text:"Вариант ответа 1.4",isCorrect:!0}]},{question:"Вопрос 2",options:[{text:"Вариант ответа 2.1"},{text:"Вариант ответа 2.2"},{text:"Вариант ответа 2.3"},{text:"Вариант ответа 2.4",isCorrect:!0}]},{question:"Вопрос 3",options:[{text:"Вариант ответа 3.1"},{text:"Вариант ответа 3.2"},{text:"Вариант ответа 3.3"},{text:"Вариант ответа 3.4",isCorrect:!0}]}]}}});
//# sourceMappingURL=11.afcff0320f215aea58bc.js.map