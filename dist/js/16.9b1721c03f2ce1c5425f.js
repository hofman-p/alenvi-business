exports.ids=[16],exports.modules={140:function(r,e,t){var o=t(141);"string"==typeof o&&(o=[[r.i,o,""]]),o.locals&&(r.exports=o.locals);var n=t(83);r.exports.__inject__=function(r){n("5287a702",o,!0,r)}},141:function(r,e,t){e=r.exports=t(82)(void 0),e.push([r.i,".error-page .error-code[data-v-e12f7a52]{height:50vh;width:100%;padding-top:15vh;font-size:30vmax;color:hsla(0,0%,100%,.2);overflow:hidden}.error-page .error-card[data-v-e12f7a52]{border-radius:2px;margin-top:-50px;width:80vw;max-width:600px;padding:25px}.error-page .error-card>i[data-v-e12f7a52]{font-size:5rem}",""])},142:function(r,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t(37);e.default={components:{QBtn:o.a,QIcon:o.j},data:function(){return{canGoBack:window.history.length>1}},methods:{goBack:function(){window.history.go(-1)}}}},143:function(r,e){r.exports={render:function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("div",{staticClass:"error-page window-height window-width bg-light column items-center no-wrap"},[t("div",{staticClass:"error-code bg-primary flex items-center justify-center"},[r._v("\n    404\n  ")]),r._v(" "),t("div",[t("div",{staticClass:"error-card shadow-4 bg-white column items-center justify-center no-wrap"},[t("q-icon",{attrs:{name:"error_outline",color:"grey-5"}}),r._v(" "),t("p",{staticClass:"caption text-center"},[r._v("Oups. Il n'y a rien ici...")]),r._v(" "),t("p",{staticClass:"text-center group"},[r.canGoBack?t("q-btn",{attrs:{color:"primary",push:"",icon:"keyboard_arrow_left"},on:{click:r.goBack}},[r._v("\n          Précédent\n        ")]):r._e(),r._v(" "),t("q-btn",{attrs:{color:"primary",push:"","icon-right":"home"},on:{click:function(e){r.$router.replace("/")}}},[r._v("\n          Accueil\n        ")])],1)],1)])])},staticRenderFns:[]}},93:function(r,e,t){function o(r){var e;e=t(140),e.__inject__&&e.__inject__(r)}var n=t(36)(t(142),t(143),o,"data-v-e12f7a52","64f8e642");r.exports=n.exports}};