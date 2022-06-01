webpackJsonp([3],{"1kS7":function(t,n){n.f=Object.getOwnPropertySymbols},ACpV:function(t,n){},GF4L:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=e("mvHQ"),r=e.n(s),a=e("woOf"),o=e.n(a),i=e("7+uW"),l={name:"sudoku",data:function(){return{initTable:[["4","1","5","","6","9","","7",""],["","","3","","","1","","2",""],["","","","4","","3","5","",""],["6","7","2","1","","","","","4"],["8","3","","","","","","5","7"],["5","","","","","8","","1","3"],["2","8","","","","7","1","","6"],["","9","6","","","","","4","5"],["1","5","","6","","","8","",""]],currentTable:[],showHints:!1,clearedTable:!1}},methods:{changeTableCell:function(t,n,e){var s="123456789".includes(e.data)?e.data:"";this.currentTable[t].splice(n,1,s)},getRow:function(t){return o()([],this.currentTable[t])},getColumn:function(t){for(var n=[],e=0;e<this.currentTable.length;e++)n.push(this.currentTable[e][t]);return n},getSquare:function(t,n){for(var e=[],s=3*Math.floor(t/3);s<3*(Math.floor(t/3)+1);s++)for(var r=3*Math.floor(n/3);r<3*(Math.floor(n/3)+1);r++)""!=this.currentTable[s][r]&&e.push(this.currentTable[s][r]);return e},solve:function(){this.solve_lastUsed()||alert("Алгоритм неполный, остались пустые ячейки. Попробуйте заполнить одну ячейку и решите еще раз")},solve_lastUsed:function(){for(var t=!0,n=!0;n;){n=!1,t=!0;for(var e=this.canUseTable,s=0;s<9;s++)for(var r=0;r<9;r++)1==e[s][r].length&&(this.currentTable[s].splice(r,1,String(e[s][r][0])),n=!0),e[s][r].length&&(t=!1)}return t},tableToString:function(t){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".",e="",s=0;s<t.length;s++)for(var r=0;r<t[s].length;r++)t[s][r]?e+=t[s][r]:e+=n;return e},resetTable:function(){for(var t=0;t<9;t++)for(var n=0;n<9;n++)this.currentTable[t].splice(n,1,"");this.clearedTable=!0},showInit:function(){i.a.set(this,"currentTable",JSON.parse(r()(this.initTable))),this.clearedTable=!1}},computed:{canUseTable:function(){for(var t=[],n=0;n<9;n++){t.push([]);for(var e=0;e<9;e++)if(t[n].push([]),!this.currentTable[n][e])for(var s=1;s<=9;s++)this.getRow(n).includes(String(s))||this.getColumn(e).includes(String(s))||this.getSquare(n,e).includes(String(s))||t[n][e].push(s)}return t},hints:function(){for(var t=this.canUseTable,n=0;n<9;n++);return t}},mounted:function(){this.showInit()}},c={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"app-Sudoku"},[e("div",{staticClass:"container my-5"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6 mx-auto"},[e("h2",{staticClass:"text-center"},[t._v("Судоку")]),t._v(" "),e("table",t._l(t.currentTable,function(n,s){return e("tr",{key:s},t._l(n,function(n,r){return e("td",{key:r,staticClass:"position-relative"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showHints,expression:"showHints"}],staticClass:"position-absolute top-0 end-0 text-info pe-none"},[t._v(t._s(t.canUseTable[s][r].join(" ")))]),t._v(" "),e("input",{attrs:{type:"text",disabled:""!=t.initTable[s][r]&&!t.clearedTable},domProps:{value:n},on:{input:function(n){return t.changeTableCell(s,r,n)}}})])}),0)}),0),t._v(" "),e("button",{staticClass:"btn btn-sm btn-secondary mt-2",on:{click:t.solve}},[t._v("Решить")]),t._v(" "),e("button",{staticClass:"btn btn-sm btn-secondary mt-2",on:{click:function(n){t.showHints=!t.showHints}}},[t._v(t._s(t.showHints?"Скрыть":"Показать")+" подсказки")]),t._v(" "),e("button",{staticClass:"btn btn-sm btn-secondary mt-2",on:{click:t.showInit}},[t._v("Вернуться к изначальной")]),t._v(" "),e("button",{staticClass:"btn btn-sm btn-secondary mt-2",on:{click:t.resetTable}},[t._v("Очистить таблицу")])])])])])},staticRenderFns:[]};var u=e("VU/8")(l,c,!1,function(t){e("ACpV")},null,null);n.default=u.exports},NpIQ:function(t,n){n.f={}.propertyIsEnumerable},R4wc:function(t,n,e){var s=e("kM2E");s(s.S+s.F,"Object",{assign:e("To3L")})},To3L:function(t,n,e){"use strict";var s=e("+E39"),r=e("lktj"),a=e("1kS7"),o=e("NpIQ"),i=e("sB3e"),l=e("MU5D"),c=Object.assign;t.exports=!c||e("S82l")(function(){var t={},n={},e=Symbol(),s="abcdefghijklmnopqrst";return t[e]=7,s.split("").forEach(function(t){n[t]=t}),7!=c({},t)[e]||Object.keys(c({},n)).join("")!=s})?function(t,n){for(var e=i(t),c=arguments.length,u=1,f=a.f,b=o.f;c>u;)for(var h,v=l(arguments[u++]),d=f?r(v).concat(f(v)):r(v),p=d.length,T=0;p>T;)h=d[T++],s&&!b.call(v,h)||(e[h]=v[h]);return e}:c},V3tA:function(t,n,e){e("R4wc"),t.exports=e("FeBl").Object.assign},mvHQ:function(t,n,e){t.exports={default:e("qkKv"),__esModule:!0}},qkKv:function(t,n,e){var s=e("FeBl"),r=s.JSON||(s.JSON={stringify:JSON.stringify});t.exports=function(t){return r.stringify.apply(r,arguments)}},woOf:function(t,n,e){t.exports={default:e("V3tA"),__esModule:!0}}});
//# sourceMappingURL=3.243d05e683039e325e9b.js.map