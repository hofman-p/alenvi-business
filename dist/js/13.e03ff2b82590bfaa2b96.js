exports.ids=[13],exports.modules={153:function(t,i,a){var e=a(154);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=a(83);t.exports.__inject__=function(t){o("d356669c",e,!0,t)}},154:function(t,i,a){i=t.exports=a(82)(void 0),i.push([t.i,"@media (max-width:1024px) and (min-width:320px){.gt-mld[data-v-09907f22]{display:none!important}}@media (min-width:1025px){.lt-lgx[data-v-09907f22]{display:none!important}}.alenvi-button[data-v-09907f22]{border:none;display:inline-block;outline:0;padding:19px 16px;vertical-align:middle;overflow:hidden;text-decoration:none;background-color:inherit;text-align:center;cursor:pointer;white-space:nowrap}.alenvi-dropdown-list[data-v-09907f22]{margin-top:.5px}.alenvi-nav[data-v-09907f22]{font-weight:700;color:#737373;min-height:60px}.alenvi-nav a[data-v-09907f22]{color:#737373;text-decoration:none}.alenvi-nav a[data-v-09907f22]:hover{color:#e2007a}.w3-dropdown-hover[data-v-09907f22]{height:60px}header .router-link-exact-active[data-v-09907f22]{font-weight:900;color:#e2007a}.alenvi-logo[data-v-09907f22]{width:80%}.btn-call[data-v-09907f22]{color:#fff;padding:0 10px}button a b[data-v-09907f22]{font-weight:700}.btn-call[data-v-09907f22]:hover{color:#fff}#btn-call-header[data-v-09907f22]{margin-left:auto}footer ul[data-v-09907f22]{list-style:none}footer ul li a[data-v-09907f22]{color:#fff;line-height:30px}.footer-links[data-v-09907f22]{color:#fff}.footer-logos[data-v-09907f22]{background-color:#fff;border-radius:15px}.footer-logos[data-v-09907f22]:hover{text-decoration:underline;color:#fff}.footer-img[data-v-09907f22]{width:100px;height:auto}i[data-v-09907f22]:hover{color:#2196f3}",""])},155:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=a(37);i.default={components:{QLayout:e.n,QToolbar:e.v,QToolbarTitle:e.w,QBtn:e.a,QIcon:e.j,QSideLink:e.s,QItem:e.k,QItemMain:e.l,QItemSide:e.m,QTabs:e.u,QCollapsible:e.h,QTab:e.t,QRouteTab:e.r,QListHeader:e.p,QList:e.o},data:function(){return{active:!1,dropdownItemClass:"dropdown-item",activeLinkClass:"active-link",rowClass:"row",justifyCenterClass:"justify-center",dropdownPos:{position:"absolute",left:""}}},mounted:function(){this.$refs.layout.hideRight()},methods:{isActive:function(){this.active=!this.active},getElementLeftPos:function(){return this.dropdownPos.left=this.$refs.dropdown.getBoundingClientRect().left+"px"}}}},156:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("q-layout",{ref:"layout",attrs:{view:"hHh lpr fff"}},[a("div",{slot:"header"},[a("div",{staticClass:"w3-bar w3-white alenvi-nav row items-center justify-start"},[a("router-link",{staticClass:"w3-bar-item",attrs:{to:"/"}},[a("img",{staticClass:"alenvi-logo",attrs:{src:"statics/alenvi_logo_complet_183x50.png",alt:"Logo Alenvi"}})]),t._v(" "),a("div",{staticClass:"row items-center gt-mld"},[a("div",{staticClass:"w3-dropdown-hover bg-white"},[a("button",{staticClass:"alenvi-button text-tertiary",attrs:{id:"dropdownHome"}},[a("router-link",{attrs:{to:"/"}},[t._v("Accueil "),a("q-icon",{attrs:{name:"arrow drop down"}})],1)],1),t._v(" "),a("div",{staticClass:"alenvi-dropdown-list w3-dropdown-content w3-bar-block w3-card-4"},[a("router-link",{staticClass:"w3-bar-item",attrs:{to:"aide-a-domicile"}},[t._v("Aide à domicile")]),t._v(" "),a("router-link",{staticClass:"w3-bar-item",attrs:{to:"compagnie"}},[t._v("Stimulation et compagnie")]),t._v(" "),a("router-link",{staticClass:"w3-bar-item",attrs:{to:"sortie-hopital"}},[t._v("Sortie d'hôpital")])],1)]),t._v(" "),a("router-link",{staticClass:"w3-bar-item",attrs:{to:"vision"}},[t._v("Vision")]),t._v(" "),a("router-link",{staticClass:"w3-bar-item",attrs:{to:"equipe"}},[t._v("Equipe")]),t._v(" "),a("router-link",{staticClass:"w3-bar-item",attrs:{to:"recrutement"}},[t._v("Recrutement")]),t._v(" "),a("div",{staticClass:"w3-dropdown-hover bg-white"},[a("button",{staticClass:"alenvi-button text-tertiary",attrs:{id:"dropdownMag"}},[a("a",{attrs:{href:"https://blog.alenvi.io/"}},[t._v("Blog "),a("q-icon",{attrs:{name:"arrow drop down"}})],1)]),t._v(" "),a("div",{staticClass:"alenvi-dropdown-list w3-dropdown-content w3-bar-block w3-card-4"},[a("a",{staticClass:"w3-bar-item",attrs:{href:"https://blog.alenvi.io/tag/aidants-familiaux"}},[t._v("Aidants familiaux")]),t._v(" "),a("a",{staticClass:"w3-bar-item",attrs:{href:"https://blog.alenvi.io/tag/auxiliaires"}},[t._v("Auxiliaires")]),t._v(" "),a("a",{staticClass:"w3-bar-item",attrs:{href:"https://blog.alenvi.io/tag/alenvi"}},[t._v("Le projet Alenvi")])])])],1),t._v(" "),a("q-btn",{staticClass:"gt-mld",attrs:{id:"btn-call-header",color:"primary",big:""}},[a("a",{staticClass:"btn-call text-white",attrs:{href:"tel:+33179755475"}},[t._v("Appeler le "),a("b",[t._v("01 79 75 54 75")])])]),t._v(" "),a("q-btn",{staticClass:"lt-lgx hide-on-drawer-visible absolute-right",attrs:{color:"tertiary",flat:"",big:""},on:{click:function(i){t.$refs.layout.toggleRight()}}},[a("q-icon",{attrs:{name:"menu"}})],1)],1)]),t._v(" "),a("div",{slot:"right"},[a("q-item-side",{attrs:{right:""}},[a("q-btn",{staticClass:"justify-end",attrs:{color:"tertiary",flat:"",big:""},on:{click:function(i){t.$refs.layout.hideCurrentSide()}}},[a("q-icon",{attrs:{name:"close"}})],1)],1),t._v(" "),a("q-list-header",[t._v("Alenvi")]),t._v(" "),a("q-side-link",{attrs:{item:"",to:"/home"}},[a("q-item-main",{attrs:{label:"Accueil"}})],1),t._v(" "),a("q-side-link",{attrs:{item:"",to:"/home"}},[a("q-item-main",{attrs:{label:"Vision"}})],1),t._v(" "),a("q-side-link",{attrs:{item:"",to:"/home"}},[a("q-item-main",{attrs:{label:"Equipe"}})],1),t._v(" "),a("q-side-link",{attrs:{item:"",to:"/home"}},[a("q-item-main",{attrs:{label:"Recrutement"}})],1),t._v(" "),a("q-collapsible",{attrs:{label:"Magazine"}},[a("q-item-main",{attrs:{label:"Rubrique 1"}}),t._v(" "),a("q-side-link",{attrs:{item:"",to:"/home"}},[a("q-item-main",{attrs:{label:"Rubrique 2"}})],1),t._v(" "),a("q-side-link",{attrs:{item:"",to:"/home"}},[a("q-item-main",{attrs:{label:"Rubrique 3"}})],1)],1)],1),t._v(" "),a("router-view"),t._v(" "),a("q-toolbar",{slot:"footer"},[a("div",{staticClass:"col-4 self-baseline"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6"},[a("ul",[a("li",[a("router-link",{staticClass:"footer-links text-white",attrs:{to:"/"}},[t._v("Accueil")])],1),t._v(" "),a("li",[a("router-link",{staticClass:"footer-links",attrs:{to:"vision"}},[t._v("Vision")])],1),t._v(" "),a("li",[a("router-link",{staticClass:"footer-links",attrs:{to:"equipe"}},[t._v("Equipe")])],1),t._v(" "),a("li",[a("router-link",{staticClass:"footer-links",attrs:{to:"recruitement"}},[t._v("Recrutement")])],1),t._v(" "),a("li",[a("router-link",{staticClass:"footer-links",attrs:{to:"/"}},[t._v("Blog")])],1)])]),t._v(" "),a("div",{staticClass:"col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6"},[a("ul",[a("li",[a("router-link",{staticClass:"footer-links",attrs:{to:"aide-a-domicile"}},[t._v("Aide à domicile")])],1),t._v(" "),a("li",[a("router-link",{staticClass:"footer-links",attrs:{to:"compagnie"}},[t._v("Stimulation et compagnie")])],1),t._v(" "),a("li",[a("router-link",{staticClass:"footer-links",attrs:{to:"sortie-hopital"}},[t._v("Sortie d'hôpital")])],1)])])])]),t._v(" "),a("div",{staticClass:"col-4"},[a("div",{staticClass:"row justify-center"},[a("a",{attrs:{href:"https://www.facebook.com/alenviservices/"}},[a("q-icon",{staticClass:"on-left",attrs:{name:"fa-facebook-official",color:"white",size:"2.5rem"}})],1),t._v(" "),a("a",{attrs:{href:"https://www.youtube.com/channel/UCY31qIuLKsPY6zFUh_pR-pw"}},[a("q-icon",{attrs:{name:"fa-youtube",color:"white",size:"2.5rem"}})],1)])]),t._v(" "),a("div",{staticClass:"col-4"},[a("div",{staticClass:"row justify-end items-center footer-logos"},[a("div",{staticClass:"col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 text-center"},[a("img",{staticClass:"footer-img",attrs:{src:"statics/logo_charte_qualite.gif",alt:"logo charte qualité"}})]),t._v(" "),a("div",{staticClass:"col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6"},[a("img",{staticClass:"footer-img",attrs:{src:"statics/logo-service-personne.png",alt:"logo service personne"}})])])])])],1)},staticRenderFns:[]}},96:function(t,i,a){function e(t){var i;i=a(153),i.__inject__&&i.__inject__(t)}var o=a(36)(a(155),a(156),e,"data-v-09907f22","56d3fe1a");t.exports=o.exports}};