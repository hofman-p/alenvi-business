webpackJsonp([17],{383:function(t,e,i){function a(t){i(486)}var s=i(133)(i(488),i(489),a,"data-v-61730366",null);t.exports=s.exports},486:function(t,e,i){var a=i(487);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(379)("0227918b",a,!0)},487:function(t,e,i){e=t.exports=i(378)(void 0),e.push([t.i,"@media (max-width:1024px){.img-carousel[data-v-61730366]{margin:10px 0}}.bg-carousel-gradient[data-v-61730366]{background:#faf9f8}.bg-carousel-transparent[data-v-61730366]{background:transparent}.q-card-title[data-v-61730366]{color:#737373}.carousel-card[data-v-61730366]{min-height:100px}.description[data-v-61730366]{color:#e2007a;font-weight:100}@media (max-width:768px){.description[data-v-61730366]{padding:0 0 10px 15px}}",""])},488:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(134);e.default={components:{QCarousel:a.h,QCard:a.c,QCardTitle:a.g,QCardMain:a.e},data:function(){return{slides:[[{title:"Le Parisien",img:"https://res.cloudinary.com/alenvi/image/upload/q_auto/v1507019444/images/business/leparisien.png",imgAlt:"leparisien logo",description:"« A la rencontre des auxiliaires d’envie »",link:"http://www.leparisien.fr/economie/business/a-la-rencontre-des-auxilliaires-d-envie-20-09-2016-6135411.php"},{title:"CNEWS",img:"https://res.cloudinary.com/alenvi/image/upload/q_auto/v1507019444/images/business/cnews.png",imgAlt:"CNEWS logo",description:"« Interview en plateau de Dorothée, auxiliaire d’envie chez Alenvi »",link:"https://www.youtube.com/watch?v=M30Ia_oV6AI"}]],isNotMozilla:{"content-between":!0}}},computed:{isMozillaContentBetweenFalse:function(){return this.$q.platform.is.mozilla?{"content-between":!1}:this.isNotMozilla}}}},489:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bg-carousel-gradient"},[i("q-carousel",{staticClass:"text-tertiary",attrs:{infinite:"",autoplay:""}},t._l(t.slides,function(e){return i("div",{staticClass:"bg-carousel-transparent",slot:"slide"},[i("div",{staticClass:"row"},t._l(e,function(e){return i("div",{staticClass:"col-xs-12 col-xl-6"},[i("a",{attrs:{href:e.link}},[i("q-card",{staticClass:"shadow-1",attrs:{color:"white",flat:""}},[i("div",{staticClass:"carousel-card row items-center",class:t.isMozillaContentBetweenFalse},[i("div",{staticClass:"col-xs-12 col-md-4 img-carousel"},[i("div",{staticClass:"row justify-center"},[i("img",{attrs:{src:e.img,alt:e.imgAlt}})])]),t._v(" "),i("div",{staticClass:"col-xs-12 col-md-8 description"},[i("div",{staticClass:"row justify-center"},[i("div",{staticClass:"text-italic text-center"},[t._v("\n                      "+t._s(e.description)+"\n                    ")])])])])])],1)])}))])}))],1)},staticRenderFns:[]}}});