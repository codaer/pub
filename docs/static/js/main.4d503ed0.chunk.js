(this["webpackJsonpcodaer-www"]=this["webpackJsonpcodaer-www"]||[]).push([[0],[,,,function(e,t,a){e.exports={candidateWrap:"ChooseFrom_candidateWrap__3pVq3",badge:"ChooseFrom_badge__eDIVw",editSelect:"ChooseFrom_editSelect__1p5Un",bulkEditText:"ChooseFrom_bulkEditText__21c0W"}},,,function(e,t,a){e.exports={center:"basic_center__2lHFN",input:"basic_input__1eWKb",inputWrap:"basic_inputWrap__3jGzu",button:"basic_button__1wAHv",wide:"basic_wide__PQJCm"}},,function(e,t,a){e.exports={markWrap:"Mark_markWrap__dqwrz",mark:"Mark_mark__3wQr-",markName:"Mark_markName__n5bOC",symbolImage:"Mark_symbolImage__13aOW"}},function(e,t,a){e.exports={describeWrap:"Describe_describeWrap__2LV-7",collapsed:"Describe_collapsed__3FOQm",expanded:"Describe_expanded__3AFNB",describe:"Describe_describe__yHmEu",btn:"Describe_btn__2B2DE"}},,function(e,t,a){e.exports={selectionBar:"Chooser_selectionBar__15DJ7",selection:"Chooser_selection__2FmHP",finalSelection:"Chooser_finalSelection__39CkV",note:"Chooser_note__3oVU_"}},,,function(e,t,a){e.exports={row:"Row_row__2QCMC",stretch:"Row_stretch__WrxzE",spaceEven:"Row_spaceEven__2VAXu"}},function(e,t,a){e.exports={wrapper:"Breadcrumbs_wrapper__3H02A",crumb:"Breadcrumbs_crumb__39oBx"}},function(e,t,a){e.exports={panel:"Panel_panel__3bO4E",tall:"Panel_tall__3pS8S",wide:"Panel_wide__3azVe"}},function(e,t,a){e.exports={button:"TextInput_button__3hGw7",label:"TextInput_label__2-1Hf",wrapper:"TextInput_wrapper__1rL3D"}},function(e,t,a){e.exports={mainColumn:"App_mainColumn__Uicph"}},function(e,t,a){e.exports={logo:"Logo_logo__1zfh6",header:"Logo_header__GBaky"}},function(e,t,a){e.exports={alert:"Alert_alert__2kJWF",basic:"Alert_basic__rYBDh",info:"Alert_info__3gKzS",positive:"Alert_positive__1qTv2",warn:"Alert_warn__3AZeB",negative:"Alert_negative__tsrZj"}},function(e,t,a){e.exports={codeWrap:"License_codeWrap__3olii",code:"License_code__1s-dX"}},function(e,t,a){e.exports={description:"AffiliatePage_description__1yeAJ",disclosure:"AffiliatePage_disclosure__3qu0P"}},,,function(e,t,a){e.exports={column:"Column_column__38IdK"}},,function(e,t,a){e.exports={navbar:"Navbar_navbar__1LUwf"}},function(e,t,a){e.exports={main:"Link_main__272r8"}},function(e,t,a){e.exports={pageHeader:"PageHeader_pageHeader__hTfv_"}},function(e,t,a){e.exports={header:"Header_header___YEqU"}},function(e,t,a){e.exports=a.p+"static/media/logo.0ad3fb1d.svg"},function(e,t,a){e.exports=a.p+"static/media/DecisionMaker.0e522610.svg"},function(e,t,a){e.exports={wrap:"SvgSymbol_wrap__dHE0y"}},function(e,t,a){e.exports=a.p+"static/media/About.edd90b45.svg"},function(e,t,a){e.exports=a.p+"static/media/Profiles.49ce7cac.svg"},function(e,t,a){e.exports={spacer:"Spacer_spacer__1od7r"}},function(e,t,a){e.exports=a.p+"static/media/Contact.5d5075bd.svg"},function(e,t,a){e.exports={center:"Center_center__hV4TI"}},function(e,t,a){e.exports={wrapper:"ActionBar_wrapper__15Fwp"}},function(e,t,a){e.exports=a.p+"static/media/Github-octicon.6582a7d9.svg"},function(e,t,a){e.exports={footer:"Footer_footer__wRstq"}},function(e,t,a){e.exports=a(50)},,,,,function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(24),l=a.n(o),i=(a(47),a(18)),c=a.n(i),u=a(25),s=a.n(u),d=a(2),m=function(e){var t,a=e;(function(e){return"string"!==typeof e&&!Array.isArray(e)})(e)?a=(null===(t=e.className)||void 0===t?void 0:t.split(" "))||[]:"string"===typeof e&&(a=[e]);return a},p=function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];var r=a.map((function(e){return m(e)})).reduce((function(e,t){return e.push.apply(e,Object(d.a)(t)),e}),[]);return[].concat(Object(d.a)(e.split(" ")),Object(d.a)(r)).filter((function(e,t,a){return e&&t===a.indexOf(e)})).join(" ")},f=function(e){var t=e.children;return r.a.createElement("div",{className:p(s.a.column,e)},t)},h=a(1),v=a(5),b=a(26),E=a.n(b),C=function(e){for(var t=E.a.parse(e.replace(/^\?/,"")),a={},n=0,r=Object.keys(t);n<r.length;n++){var o=r[n],l=t[o];Array.isArray(l)?a[o]=l:a[o]=[l]}return a},g=r.a.createContext({}),y=r.a.createContext({}),_=function(){return Object(n.useContext)(g)},O=function(e){var t=e.children,a=Object(n.useState)({views:[],viewPtr:0}),o=Object(h.a)(a,2),l=o[0],i=o[1],c=function(){return i((function(e){return Object(v.a)({},e)}))},u=Object(n.useMemo)((function(){return{highest:l.views.slice().sort((function(e,t){return t.priority-e.priority})),lowest:l.views.slice().sort((function(e,t){return e.priority-t.priority}))}}),[l]),s=Object(n.useState)({fn:{mountView:function(e){l.views.push(e),c()},unmountView:function(e){var t=l.views.findIndex((function(t){return e.id===t.id}));l.views.splice(t,1),c()}}}),d=Object(h.a)(s,1)[0];return r.a.createElement(y.Provider,{value:d},r.a.createElement(g.Provider,{value:u},t))},w=function e(){return e.base.replace(/[xy]/g,(function(e){var t,a;return"x"===e?(t=0,a=15):(t=8,a=4),(t+Math.floor(Math.random()*a)).toString(16).toUpperCase()}))};w.base="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";var x,j=a(4),k=a(13),S=Symbol("ae-is-view-prop");!function(e){e.wild="wild",e.literal="literal"}(x||(x={}));var A=function e(t){return t.replace(e.pattern,"\\$&")};A.pattern=/[|.^$*+?)(}{\][-\\]/g;var T,N,I=function(e){var t=e.children,a=e.path,o=e.header,l=e.viewId,i=e.priority,c=void 0===i?0:i,u=R(),s=Object(n.useContext)(y).fn,d=Object(n.useMemo)((function(){return function(e){var t,a=[],n=Object(k.a)(e.replace(/\*/g,"\0*\0").split("\0"));try{for(n.s();!(t=n.n()).done;){var r,o=t.value;if("*"===o)x.wild!==(null===(r=a[a.length-1])||void 0===r?void 0:r.type)&&a.push({type:x.wild});else a.push({type:x.literal,value:o})}}catch(d){n.e(d)}finally{n.f()}for(var l=[],i=0,c=a;i<c.length;i++){var u=c[i];x.literal===u.type?l.push(A(u.value)):x.wild===u.type&&l.push(".*?")}l.push("/?");var s=new RegExp("^"+l.join("")+"$","i");return{match:function(e){return e.endsWith("/")||(e+="/"),s.test(e)}}}(null!==a&&void 0!==a?a:"")}),[a]).match(u.pathname);return Object(n.useEffect)((function(){if(d&&l){var e={id:l,header:o,priority:c};if(o&&a){var t,n=null===o||void 0===o||null===(t=o.toString())||void 0===t?void 0:t.toLowerCase();e.breadcrumb={label:n,location:a.replace(/\/\*$/,""),viewId:l}}return s.mountView(e),function(){return s.unmountView(e)}}})),d?r.a.createElement(r.a.Fragment,null,t):null},F=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=function(t){var a={header:t.header,path:t.path,viewId:t.viewId,priority:t.priority},n=Object(j.a)(t,["header","path","viewId","priority"]);return r.a.createElement(I,a,r.a.createElement(e,n))};return a[S]=!0,a.defaultProps=t,a},P=function e(t){var a=t.node,n=a.props,o=n.header,l=n.path,i=Object(v.a)({},a.props),c=function(e){var t;return(null===e||void 0===e?void 0:e[S])||(null===e||void 0===e||null===(t=e.type)||void 0===t?void 0:t[S])}(a)?w():null;if(c){t.idStack.push(c),i.viewId=c;var u=t.idStack.slice(-2),s=Object(h.a)(u,2),d=s[0],m=s[1];d&&m&&(t.componentTree[m]=d),l&&(l.endsWith("/*")?t.pathStack.push(l.substr(0,l.length-2)):t.pathStack.push(l));var p=t.pathStack.join("");t.components[c]={id:c,header:o,priority:t.priority,parent:t.idStack.slice(-1)[0]||null,path:p},i.path=p}return i.priority=t.priority,t.priority=2*t.priority,i.children=r.a.Children.map(a.props.children,(function(n){t.node=n;var r=e(t);return t.node=a,r})),t.priority=t.priority/2,Object.values(t.componentTree).includes(c)&&(i.path+="/*"),c&&(t.idStack.pop(),l&&t.pathStack.pop()),r.a.cloneElement(a,i,i.children)},D=r.a.createContext({}),L=function(e){var t=e.analysisContext,a=Object(n.useState)({analysisContext:t}),o=Object(h.a)(a,1)[0];return r.a.createElement(D.Provider,{value:o},e.children)},V=r.a.createContext({}),R=function(){return Object(n.useContext)(V).location},W=function(){return Object(n.useContext)(V).queryParams},H=function(){var e,t=window.location,a=t.pathname.replace(null===(e=window)||void 0===e?void 0:e.aePublicPath,"");return Object(v.a)({},t,{pathname:a})},B=function(e){var t=Object(n.useState)({location:H(),queryParams:C(H().search),headers:[],breadcrumbs:[],fn:{goTo:function(e){window.history.pushState({},"",e);var t=H();l(Object(v.a)({},o,{location:t,queryParams:C(t.search)}))}}}),a=Object(h.a)(t,2),o=a[0],l=a[1];Object(n.useEffect)((function(){var e,t=function(){var e=H();l(Object(v.a)({},o,{location:e,queryParams:C(e.search)}))};return null===(e=window)||void 0===e||e.addEventListener("popstate",t),function(){var e;return null===(e=window)||void 0===e?void 0:e.removeEventListener("popstate",t)}}));var i=function(e){var t={idStack:[],pathStack:[],node:{props:e},priority:1,componentTree:{},components:{}},a=P(t).props.children;if(0!==t.idStack.length)throw new Error("Mismatched push/pop from idStack");if(0!==t.pathStack.length)throw new Error("Mismatched push/pop from pathStack");return{remapped:a,ctx:t}}(e),c=i.remapped;return r.a.createElement(r.a.Fragment,null,r.a.createElement(V.Provider,{value:o},r.a.createElement(O,null,r.a.createElement(L,{analysisContext:i.ctx},c))))},M=a(27),G=a.n(M),U=a(28),K=a.n(U),q=null!==(T=null===(N=window)||void 0===N?void 0:N.aePublicPath)&&void 0!==T?T:"",J=r.a.createContext({}),z=function(e){var t=e.children,a=e.onClick,o=Object(n.useState)({onClick:a,publicPath:function(e){return q+e}}),l=Object(h.a)(o,1)[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement(J.Provider,{value:l},t))},Y=function(e){var t,a=Object(n.useContext)(J),o=e.children,l=e.onClick,i=void 0===l?null===a||void 0===a?void 0:a.onClick:l,c=e.styleClasses,u=e.external,s=null===a||void 0===a||null===(t=a.publicPath)||void 0===t?void 0:t.call(a,e.to),m=Array.isArray(c)?c:[c],p={};return u&&(p.target="_blank",p.rel="noopener noreferrer"),r.a.createElement("a",Object.assign({onClick:function(e){i&&i({mouseEvent:e,data:{external:u,to:s}})},className:[K.a.main].concat(Object(d.a)(m)).join(" "),href:s},p),o)};Y.defaultProps={external:!1};var $,Q=a(15),Z=a.n(Q),X=function(e){var t=e.Link,a=void 0===t?Y:t,n=_().lowest,o=n.filter((function(e){return e.breadcrumb})).slice(-1),l=Object(h.a)(o,1)[0],i=n.map((function(e){return e.breadcrumb})).filter((function(e){return e})).map((function(e){return l.id&&e.viewId&&l.id===e.viewId?null:r.a.createElement(a,{styleClasses:Z.a.crumb,key:e.location,to:e.location},e.label)}));return r.a.createElement("div",{className:Z.a.wrapper},r.a.createElement(a,{styleClasses:Z.a.crumb,to:"/"},"home"),i)},ee=function(e){var t=e.Link;return"/"!==R().pathname?r.a.createElement("div",{className:G.a.navbar},r.a.createElement(X,{Link:t})):null},te=function(e){var t=Object(n.useContext)(V).fn,a=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(z,{onClick:function(e){var a=e.mouseEvent,n=e.data;n.to&&(n.external||(a.preventDefault(),t.goTo(n.to)))}},a))},ae=a(29),ne=a.n(ae),re=function(e){var t=e.children;return r.a.createElement("p",{className:ne.a.pageHeader},t)},oe=function(e){var t=Object(h.a)(_().highest,1)[0],a=(null!==t&&void 0!==t?t:{}).header;return r.a.createElement(r.a.Fragment,null,a&&r.a.createElement(re,null,a))},le=a(16),ie=a.n(le),ce=a(30),ue=a.n(ce),se=function(e){var t=e.children;return r.a.createElement("p",{className:ue.a.header},t)},de=function(e){var t=e.children,a=e.tall,n=e.wide,o=e.header,l=[];return a&&l.push(ie.a.tall),n&&l.push(ie.a.wide),r.a.createElement("div",{className:p(ie.a.panel,e,l)},o&&r.a.createElement(se,null,o),t)},me=a(31),pe=a.n(me),fe=a(19),he=a.n(fe),ve=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null,r.a.createElement("img",{src:pe.a,className:p(he.a.logo,e),alt:"logo"}),r.a.createElement("h3",{className:he.a.header},"Codaer")))},be=a(8),Ee=a.n(be),Ce=(Ee.a.symbolSvg,function(e){var t=e.name,a=e.symbol,n=void 0===a?t.replace(/\s+([a-z])/g,(function(e,t){return t.toUpperCase()})).replace(/[a-z]/g,"").split(/\s/).join("").toUpperCase():a,o=e.linkTo,l=Object(j.a)(e,["name","symbol","linkTo"]);return r.a.createElement("div",{className:Ee.a.markWrap},r.a.createElement(Y,Object.assign({styleClasses:Ee.a.mark,to:o},l),r.a.createElement("span",{className:Ee.a.symbol},n)),r.a.createElement("span",{className:Ee.a.markName},t))}),ge=a(32),ye=a.n(ge),_e=a(33),Oe=a.n(_e),we=function(e){var t=e.src,a=e.alt;return r.a.createElement("div",{className:Oe.a.wrap},r.a.createElement("img",{src:t,alt:a}))},xe=r.a.createElement(we,{src:ye.a,alt:"decision maker icon"}),je=function(e){return r.a.createElement(Ce,{symbol:xe,name:"Decision Maker",linkTo:"/decision-maker"})},ke=a(34),Se=a.n(ke),Ae=r.a.createElement(we,{src:Se.a,alt:"about icon"}),Te=function(e){return r.a.createElement(Ce,{symbol:Ae,name:"About",linkTo:"/about"})},Ne=a(35),Ie=a.n(Ne),Fe=r.a.createElement(we,{src:Ie.a,alt:"profiles icon"}),Pe=function(e){return r.a.createElement(Ce,{symbol:Fe,name:"Profiles",linkTo:"/profiles"})},De=a(36),Le=a.n(De),Ve=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,t,r.a.createElement("div",{className:Le.a.spacer}))},Re=a(37),We=a.n(Re),He=r.a.createElement(we,{src:We.a,alt:"contact icon"}),Be=function(e){return r.a.createElement(Ce,{symbol:He,name:"Contact",linkTo:"/contact"})},Me=a(14),Ge=a.n(Me),Ue=function(e){var t=e.children,a=[];return e.spaceEven&&a.push(Ge.a.spaceEven),r.a.createElement("div",{className:p(Ge.a.row,a,e)},t)},Ke=function(e){var t=e.children;return r.a.createElement(Ue,{spaceEven:!0},t)},qe=F((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(de,null,r.a.createElement(ve,null),r.a.createElement(Ve,null),r.a.createElement(Ke,null,r.a.createElement(je,null),r.a.createElement(Te,null),r.a.createElement(Be,null),r.a.createElement(Pe,null))))})),Je=F((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(de,{header:"At a glance"},r.a.createElement("p",null,"The core mission of Codaer is to eliminate the need for Codaer. It is only through automation, iterative design, and analysis that the problems of the world can become a thing of the past. It is our hope that there is eventually no need for us, but until that day we will be learning, teaching, and optimizing the systems of the world.")),r.a.createElement(de,{header:"Transparency"},r.a.createElement("p",null,"Honesty is the only way to get a full understanding of any given situation, and a full understanding allows for solutions that are reliable and adaptable. Since honesty is a core tenet of Codaer, we pride ourselves on being clear, concise, but also kind. Honesty doesn't need brutality."),r.a.createElement("p",null,"All things said, the truth can be a hard thing to deal with. At all steps of the process, Codaer will attempt to provide solutions to problems that are discovered by us, or to at least admit that we aren't well suited to solve the given problem. We would much rather help you find someone that is best suited than to provide a sub-optimal solution.")),r.a.createElement(de,{header:"Getting started"},r.a.createElement("p",null,"Sometimes it's not as easy as saying \" Here's my problem, solve it please.\" If you aren't quite sure what problems you're running into or you just want a double check of someone else's solution, we're happy to discuss it all. When in doubt, it is best to ",r.a.createElement(Y,{to:"/contact"},"contact us")," to find out more information.")))}),{header:"About"}),ze=a(6),Ye=a.n(ze),$e=function(e,t){if(void 0===t){var a=[0,e];e=a[0],t=a[1]}var n=t-e;return e+Math.floor(Math.random()*n)},Qe=function(){var e="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=0;switch(e){case"x":t=$e(15);break;case"y":t=$e(8,11);break;default:throw new Error("Invalid character in base: ".concat(e))}return t.toString(16).toUpperCase()})),t=Object(n.useState)(e);return Object(h.a)(t,1)[0]},Ze=function(e){var t=e.action,a=e.children,n=e.wide,o=Object(j.a)(e,["action","children","wide"]),l=Qe(),i=[];return n&&i.push(Ye.a.wide),r.a.createElement(r.a.Fragment,null,r.a.createElement("button",Object.assign({},o,{onClick:function(){return null===t||void 0===t?void 0:t(l)},className:p(Ye.a.button,e,i)}),a))},Xe=function(e){var t=e.defaultValue,a=e.onChange,o=e.label,l=e.setPair,i=e.readOnly,c=e.center,u=null!==l&&void 0!==l?l:Object(n.useState)(t),s=Object(h.a)(u,2),d=s[0],m=s[1],f=Qe(),v=Object(n.useMemo)((function(){var e={};return i&&(e.disabled="disabled"),e}),[i]),b=[];return c&&b.push(Ye.a.center),r.a.createElement("div",{className:Ye.a.inputWrap},o&&r.a.createElement("label",{htmlFor:f},o),r.a.createElement("input",Object.assign({},v,{className:p(Ye.a.input,b),id:f,value:d,onChange:function(e){var t=e.target.value;m(t),null===a||void 0===a||a(t)}})))},et=function(e){var t=Object(n.useState)(e);return[t[0],t[1],t]},tt=function(e,t){var a=t.split("").map((function(t,a){return String.fromCharCode(t.charCodeAt(0)+e.charCodeAt(a%e.length))})).join("");return a=btoa(a)},at=function(e,t){return(t=atob(t)).split("").map((function(t,a){return String.fromCharCode(t.charCodeAt(0)-e.charCodeAt(a%e.length))})).join("")},nt=function(e){var t=e.guardKey,a=e.guardValue,n=null!==t&&void 0!==t?t:w(),o=e.guardKey?"Key":"Generated Key",l=et(a?at(n,a):""),i=Object(h.a)(l,3),c=i[0],u=i[2],s=et(null!==a&&void 0!==a?a:tt(n,c)),d=Object(h.a)(s,3),m=d[1],p=d[2];return r.a.createElement("div",{style:{border:"1px solid #CCC",padding:"1em"}},"SimpleGuard builder",r.a.createElement(Xe,{label:o,defaultValue:n,readOnly:!0}),!t&&r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Copy+paste the guardKey into the code and save it to continue.")),t&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Xe,{label:"Value",setPair:u,onChange:function(e){var a=tt(t,e);m(a)}}),r.a.createElement(Xe,{label:"Guard Value",setPair:p,readOnly:!0})))},rt=function(e){var t=e.description,a=e.guardKey,o=e.guardValue,l=R(),i=W(),c=Object(n.useState)(null),u=Object(h.a)(c,2),s=u[0],d=u[1];if("localhost"===l.hostname){var m,p=null!==(m=null===i||void 0===i?void 0:i.simpleGuard)&&void 0!==m?m:[];if("create"===Object(h.a)(p,1)[0])return r.a.createElement(nt,{guardKey:a,guardValue:o})}return s?r.a.createElement(Xe,{defaultValue:s,readOnly:!0,center:!0}):r.a.createElement(Ze,{action:function(){d(at(null!==a&&void 0!==a?a:"",null!==o&&void 0!==o?o:""))},wide:!0},"Reveal ",t)},ot=F((function(e){return r.a.createElement(de,null,r.a.createElement("p",null,"In order to cut down on email farming and abuse, we've implemented a simple guard. In order to reveal our contact email, simply click the button below and it'll be revealed."),r.a.createElement(rt,{guardKey:"005C0724-0602-4906-A395-D4D3275D1C60",guardValue:"mJWhr593laORkZuiYJCjpg==",description:"email"}))}),{header:"Contact"}),lt="ae-v1--",it=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.load,a=void 0===t?function(){return window.location.hash}:t,n=a().replace(/^#/,"");return n.startsWith(lt)?(n=n.replace(lt,""),n=decodeURIComponent(n),n=JSON.parse(n)):n=null,n},ct=function(e,t){var a,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.save,o=void 0===r?function(e){return window.history.replaceState(void 0,"","#"+e)}:r,l=n.load,i=void 0===l?function(){return window.location.hash}:l,c=it({load:i})||{},u=e.split("."),s=c,d=Object(k.a)(u.slice(0,-1));try{for(d.s();!(a=d.n()).done;){var m=a.value;s=s[m]=s[m]||{}}}catch(p){d.e(p)}finally{d.f()}s[u[u.length-1]]=t,c=JSON.stringify(c),c=encodeURIComponent(c),o(c=lt+c)},ut=function(e,t,a){var r,o,l=et(null!==(r=null===(o=it())||void 0===o?void 0:o[e])&&void 0!==r?r:t),i=Object(h.a)(l,1)[0];return Object(n.useEffect)((function(){ct(e,i,a)}),[e,i,a]),l},st=a(20),dt=a.n(st);!function(e){e.basic="basic",e.info="info",e.positive="positive",e.warn="warn",e.negative="negative"}($||($={}));var mt,pt=function(e){var t=e.children,a=e.alertType,n=void 0===a?"basic":a;return r.a.createElement("div",{className:p(dt.a.alert,dt.a[n])},t)},ft=function(e){var t,a=W();if(null===(t=a.choices)||void 0===t?void 0:t.length){var n,o,l={choices:a.choices[0].split("\n"),hideHelp:!0};(null===(n=a.animateChoosing)||void 0===n?void 0:n.length)&&(l.animate=JSON.parse(a.animateChoosing[0])),(null===(o=a.autoDecide)||void 0===o?void 0:o.length)&&(l.autoChoose=JSON.parse(a.autoDecide[0]));var i=function(e){for(var t=[""],a={save:function(e){return t[0]=e},load:function(){return t[0]}},n=0,r=Object.keys(e);n<r.length;n++){var o=r[n];ct(o,e[o],a)}return t[0]}(l);return r.a.createElement(pt,{alertType:$.warn},"It looks like you're using an old version of decision maker. Please"," ",r.a.createElement(Y,{to:"/decision-maker/choose-from#".concat(i)},"visit the new version")," ","and update your bookmarks.")}return null},ht=F((function(e){var t=e.children;return r.a.createElement(de,{tall:!0,wide:!0},r.a.createElement(ft,null),t)}),{header:"Decision Maker",path:"/decision-maker"}),vt=a(38),bt=a.n(vt),Et=function(e){var t=e.children;return r.a.createElement("span",{className:p(bt.a.center,e)},t)},Ct="/decision-maker/choose-from",gt='%2C"animate"%3Atrue%2C"chooseOnLoad"%3Atrue%2C"hideHelp"%3Atrue',yt={emoji:{name:"Emoji",symbol:"\ud83d\ude43",linkTo:Ct+'#ae-v1--{"candidates"%3A["\ud83d\ude00"%2C"\ud83d\ude01"%2C"\ud83d\ude02"%2C"\ud83d\ude03"%2C"\ud83d\ude04"%2C"\ud83d\ude05"%2C"\ud83d\ude06"%2C"\ud83d\ude07"%2C"\ud83d\ude08"%2C"\ud83d\ude09"%2C"\ud83d\ude0a"%2C"\ud83d\ude0b"%2C"\ud83d\ude0c"%2C"\ud83d\ude0d"%2C"\ud83d\ude0e"%2C"\ud83d\ude0f"%2C"\ud83d\ude10"%2C"\ud83d\ude11"%2C"\ud83d\ude12"%2C"\ud83d\ude13"%2C"\ud83d\ude14"%2C"\ud83d\ude15"%2C"\ud83d\ude16"%2C"\ud83d\ude17"%2C"\ud83d\ude18"%2C"\ud83d\ude19"%2C"\ud83d\ude1a"%2C"\ud83d\ude1b"%2C"\ud83d\ude1c"%2C"\ud83d\ude1d"%2C"\ud83d\ude1e"%2C"\ud83d\ude1f"%2C"\ud83d\ude20"%2C"\ud83d\ude21"%2C"\ud83d\ude22"%2C"\ud83d\ude23"%2C"\ud83d\ude24"%2C"\ud83d\ude25"%2C"\ud83d\ude26"%2C"\ud83d\ude27"%2C"\ud83d\ude28"%2C"\ud83d\ude29"%2C"\ud83d\ude2a"%2C"\ud83d\ude2b"%2C"\ud83d\ude2c"%2C"\ud83d\ude2d"%2C"\ud83d\ude2e"%2C"\ud83d\ude2f"%2C"\ud83d\ude30"%2C"\ud83d\ude31"%2C"\ud83d\ude32"%2C"\ud83d\ude33"%2C"\ud83d\ude34"%2C"\ud83d\ude35"%2C"\ud83d\ude36"%2C"\ud83d\ude37"]'.concat(gt,"}")},yesNo:{name:"Yes/No",linkTo:Ct+'#ae-v1--{"candidates"%3A["yes"%2C"no"]'.concat(gt,"}")},youMe:{name:"You/Me",linkTo:Ct+'#ae-v1--{"candidates"%3A["you"%2C"me"]'.concat(gt,"}")},day:{name:"Day of the Week",symbol:"Day",linkTo:Ct+'#ae-v1--{"candidates"%3A["Sunday"%2C"Monday"%2C"Tuesday"%2C"Wednesday"%2C"Thursday"%2C"Friday"%2C"Saturday"]'.concat(gt,"}")},abcd:{name:"ABCD",symbol:"A-D",linkTo:Ct+'#ae-v1--{"candidates"%3A["a"%2C"b"%2C"c"%2C"d"]'.concat(gt,"}")},aToZ:{name:"Letter",symbol:"A-Z",linkTo:Ct+'#ae-v1--{"candidates"%3A["a"%2C"b"%2C"c"%2C"d"%2C"e"%2C"f"%2C"g"%2C"h"%2C"i"%2C"j"%2C"k"%2C"l"%2C"m"%2C"n"%2C"o"%2C"p"%2C"q"%2C"r"%2C"s"%2C"t"%2C"u"%2C"v"%2C"w"%2C"x"%2C"y"%2C"z"]'.concat(gt,"}")}},_t=Object.values(yt).map((function(e){return r.a.createElement(Ce,Object.assign({key:e.name},e))})),Ot=F((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"There are so many types of decisions to make, we've broken them up into categories. We also have some quick decision available for you, in case you don't want to make your own."),r.a.createElement(Et,null,r.a.createElement("p",null,"Decisions")),r.a.createElement(Ke,null,r.a.createElement(Ce,{name:"Choose From",linkTo:"/decision-maker/choose-from"}),r.a.createElement(Ce,{name:"Numbers",symbol:"#",linkTo:"/decision-maker/numbers"})),r.a.createElement(Et,null,r.a.createElement("p",null,"Quick Decisions")),r.a.createElement(Ke,null,_t))}),{header:"Decision Type"}),wt=a(3),xt=a.n(wt),jt=a(17),kt=a.n(jt),St=function(e){var t=e.label,a=e.buttonLabel,o=e.onButtonClick,l=e.defaultValue,i=void 0===l?"":l,c=Object(j.a)(e,["label","buttonLabel","onButtonClick","defaultValue"]),u=Qe(),s=Object(n.useState)(i),d=Object(h.a)(s,2),m=d[0],p=d[1],f=t?r.a.createElement("label",{className:kt.a.label,htmlFor:u},t):null,v=a&&o?r.a.createElement("input",{className:kt.a.button,type:"button",onClick:function(){return o({value:m,setValue:p})},value:a}):null;return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:kt.a.wrapper},f,r.a.createElement("input",Object.assign({type:"text",id:u,onChange:function(e){return p(e.target.value)},value:m},c)),v))},At=a(39),Tt=a.n(At),Nt=function(e){var t=e.disabled,a=e.onAll,n=e.actions,o=Object.keys(n).map((function(e){var o=n[e],l=o.label,i=o.action,c=o.fn,u={};return t&&(u.disabled="disabled"),c?c(Object(v.a)({key:{v:e},action:function(){null===a||void 0===a||a()}},u)):r.a.createElement(Ze,Object.assign({},u,{action:function(){null===a||void 0===a||a(),i()},key:e}),l)}));return r.a.createElement("div",{className:Tt.a.wrapper},o)},It=a(9),Ft=a.n(It),Pt={collapsed:">",expanded:"<"},Dt={collapsed:"?",expanded:"x"},Lt=function(e){var t=e.children,a=e.collapsed,o=e.onToggle,l=e.preventCollapse,i=e.icons,c=void 0===i?Pt:i,u=e.collapsedPair,s=null!==u&&void 0!==u?u:Object(n.useState)(a),d=Object(h.a)(s,2),m=d[0],v=d[1],b=[];return m?b.push(Ft.a.collapsed):b.push(Ft.a.expanded),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:p(Ft.a.describeWrap,b)},!l&&r.a.createElement(Ze,{className:Ft.a.btn,action:function(){var e=!m;null===o||void 0===o||o(e),v(e)}},m?c.collapsed:c.expanded),!m&&r.a.createElement("div",{className:Ft.a.describe},r.a.createElement(f,null,t))))},Vt=function(e){var t=e.preventCollapse,a=ut("hideHelp",!t),n=Object(h.a)(a,3)[2];return r.a.createElement(Lt,Object.assign({collapsedPair:n},e))},Rt=a(12);!function(e){e.fast="fast"}(mt||(mt={}));var Wt,Ht,Bt=function(e,t,a){return e&&t===a.indexOf(e)},Mt=Object(Rt.a)({},mt.fast,Object(d.a)((Wt=50,new Array(24).fill(Wt)))),Gt=a(11),Ut=a.n(Gt);!function(e){e.chooseValue="chooseValue",e.waiting="waiting",e.done="done"}(Ht||(Ht={}));var Kt=function(e){var t,a,o=e.animate,l=e.selectedPair,i=e.chooserStatePair,c=e.valueGen,u=Object(h.a)(l,2),s=u[0],m=u[1],f=Object(h.a)(i,2),v=f[0],b=f[1],E=Object(n.useState)(new Date),C=Object(h.a)(E,2),g=C[0],y=C[1],_=Object(n.useState)(mt.fast),O=Object(h.a)(_,1)[0],w=Object(n.useState)([]),x=Object(h.a)(w,2),j=x[0],k=x[1];return Object(n.useLayoutEffect)((function(){Ht.done===v&&y(new Date)}),[v,s]),Object(n.useLayoutEffect)((function(){if(Ht.chooseValue===v&&0===j.length){var e=[];o?(e.push.apply(e,Object(d.a)(Mt[O])),k(e)):b(Ht.done);!function t(){var a=e.shift(),n=c();m(n),a?(setTimeout(t,a),b(Ht.waiting)):b(Ht.done)}()}}),[v,k,O,j,o,b,m,c]),null===s?null:r.a.createElement("div",null,r.a.createElement("div",{className:Ut.a.selectionBar},r.a.createElement("span",{className:Ut.a.selectedTime},Ht.done===v&&(null===g||void 0===g?void 0:g.toLocaleString().replace(/(:\d\d)[^:]*?$/,"$1."+("00"+g.getTime()%1e3).substr(-3)))),r.a.createElement("span",null,Ht.done===v&&"Done",Ht.done!==v&&"Choosing")),r.a.createElement("div",{className:p(Ut.a.selection,(t=!o||Ht.done===v,a=Ut.a.finalSelection,"function"===typeof t&&(t=t()),t?a:[]))},s))},qt=function(e){var t=e.action,a=e.persistKey,n=e.initValue,o=e.persistStatePair,l=e.label,i=e.labelOn,c=void 0===i?"on":i,u=e.labelOff,s=void 0===u?"off":u,d=Object(j.a)(e,["action","persistKey","initValue","persistStatePair","label","labelOn","labelOff"]),m=null!==o&&void 0!==o?o:ut(a,n),p=Object(h.a)(m,2),f=p[0],v=p[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ze,Object.assign({action:function(e){null===t||void 0===t||t(e),v((function(e){return!e}))}},d),l," ",f?c:s))},Jt=function(e){return r.a.createElement(qt,Object.assign({},e,{persistKey:"animate",initValue:!0,label:"Animation is"}))},zt=F((function(e){var t=ut("candidates",[]),a=Object(h.a)(t,2),o=a[0],l=a[1],i=ut("chooseOnLoad",!0),c=Object(h.a)(i,2),u=c[0],s=c[1],m=Object(n.useState)((function(){var e,t;return!(null===(e=it())||void 0===e||null===(t=e.candidates)||void 0===t?void 0:t.length)})),f=Object(h.a)(m,2),v=f[0],b=f[1],E=Object(n.useState)(!1),C=Object(h.a)(E,2),g=C[0],y=C[1],_=et(null),O=Object(h.a)(_,3),w=O[0],x=O[1],j=O[2],k=et(Ht.done),S=Object(h.a)(k,3),A=S[0],T=S[1],N=S[2],I=ut("animate",!0),F=Object(h.a)(I,3),P=F[0],D=F[2];Object(n.useEffect)((function(){ct("candidates",o)}),[o]),Object(n.useEffect)((function(){ct("chooseOnLoad",u)}),[u]),Object(n.useLayoutEffect)((function(){var e;(null===(e=it())||void 0===e?void 0:e.chooseOnLoad)&&T(Ht.chooseValue)}),[]);var L=Object(n.useMemo)((function(){return o.map((function(e){var t=[];return v?w===e&&t.push(xt.a.editSelect):P?(w||t.push(xt.a.moveToReset),w===e?t.push(xt.a.moveToChosen):t.push(xt.a.moveToLoser)):w===e?t.push(xt.a.selected):t.push(xt.a.unselected),r.a.createElement(Ze,{action:function(){return v&&x(e)},className:p(xt.a.badge,t),key:e},e)}))}),[o,w,x,P,v]),V=Object(n.useMemo)((function(){var e={};return v?(w&&(e.delete={label:"Delete",action:function(){var e;w&&(e=w,l((function(t){return Object(d.a)(t.filter((function(t){return e!==t})))})))}},e.unselect={label:"Unselect",action:function(){return x(null)}}),e.clearAll={label:"Clear all",action:function(){l([])}},e.bulkEdit={label:"Toggle bulk edit",action:function(){y((function(e){return!e}))}},e.done={label:"Done editing",action:function(){b(!1)}}):(w&&Ht.done===A?e.chooseAgain={label:"Choose again",action:function(){return T(Ht.chooseValue)}}:e.choose={label:"Choose",action:function(){return T(Ht.chooseValue)}},e.animate={fn:function(e){return r.a.createElement(Jt,Object.assign({persistStatePair:D},e))}},e.chooseOnLoad={label:"Auto choose is "+(u?"on":"off"),action:function(){return s((function(e){return!e}))}},e.edit={label:"Edit values",action:function(){return b(!0)}},null!==w&&(e.showValues={label:"Show values",action:function(){return x(null)}})),e}),[w,x,A,T,v,u,l,s,D]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(Vt,{icons:Dt,onToggle:function(e){return ct("hideHelp",e)}},'This is meant to choose from multiple unique values (equally likely to be chosen). To begin, start adding values, and when done, click "Done editing". After that, just ask the application to choose a value for you.'),r.a.createElement("div",null,v&&!g&&r.a.createElement(St,{label:"Value",buttonLabel:"Add Value",onButtonClick:function(e){var t=e.value,a=e.setValue;!function(e){l((function(t){return[].concat(Object(d.a)(t),[e]).filter(Bt)}))}(t),a("")}}),r.a.createElement(Nt,{disabled:Ht.done!==A,onAll:function(){return w&&x(null)},actions:V})),v&&g&&r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:xt.a.note},"Note: bulk editing requires one value per line"),r.a.createElement("textarea",{className:xt.a.bulkEditText,defaultValue:o.join("\n"),onBlur:function(e){var t=e.target.value;l(t.split("\n").filter(Bt))}})),(v&&!g||!v&&!w)&&r.a.createElement("div",{className:xt.a.candidateWrap},L),!v&&r.a.createElement(Kt,{animate:P,chooserStatePair:N,selectedPair:j,valueGen:function(){return o[$e(o.length)]}}))}),{header:"Choose From"}),Yt=F((function(){var e=ut("start",0),t=Object(h.a)(e,2),a=t[0],n=t[1],o=ut("end",10),l=Object(h.a)(o,2),i=l[0],c=l[1],u=et(Ht.done),s=Object(h.a)(u,3),d=s[1],m=s[2],p=et(null),f=Object(h.a)(p,3)[2],v=ut("animate",!0),b=Object(h.a)(v,3),E=b[0],C=b[2];return r.a.createElement(r.a.Fragment,null,r.a.createElement(Vt,{icons:Dt},"This allows for many different kinds of number based choices. For example, we might want to choose from a range of numbers. When choosing two numbers, note that the second number is not included in the range of values. e.g. If you want 1-10, use 1 and 11."),r.a.createElement(St,{onBlur:function(e){var t=e.target.value;return n(parseInt(t))},label:"Start",type:"number",defaultValue:null===a||void 0===a?void 0:a.toString()}),r.a.createElement(St,{onBlur:function(e){var t=e.target.value;return c(parseInt(t))},label:"End",type:"number",defaultValue:null===i||void 0===i?void 0:i.toString()}),r.a.createElement(Jt,{persistStatePair:C}),r.a.createElement(Ve,null),r.a.createElement(Ze,{action:function(){return d(Ht.chooseValue)},wide:!0},"Choose"),r.a.createElement(Ve,null),r.a.createElement(Kt,{animate:E,chooserStatePair:m,selectedPair:f,valueGen:function(){return $e(a,i)}}))}),{header:"Number Range"}),$t=a(40),Qt=a.n($t),Zt=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ce,Object.assign({external:!0},e)))},Xt=r.a.createElement(we,{src:Qt.a,alt:"github octicon"}),ea=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Zt,{name:"GitHub",symbol:Xt,linkTo:"https://www.github.com/codaer"}))},ta=F((function(e){return r.a.createElement(de,null,r.a.createElement("p",null,"This page links to all of the relevant profiles that we maintain for Codaer. If there's a service not listed here that you think we should be a part of, please ",r.a.createElement(Y,{to:"/contact"},"let us know"),"!"),r.a.createElement(Ke,null,r.a.createElement(ea,null)))}),{header:"Profiles"}),aa=a(41),na=a.n(aa),ra=function(e){return r.a.createElement("div",{className:na.a.footer},"\xa9 2020 Codaer unless otherwise noted. All rights reserved. Code is ",r.a.createElement(Y,{to:"/license"},"ISC licensed"),".")},oa=a(21),la=a.n(oa),ia=F((function(e){return r.a.createElement(de,null,r.a.createElement("p",null,"By default, all code is licensed according to this license. If there is no explicit statement declaring a different license, this license applies."),r.a.createElement("div",{className:la.a.codeWrap},r.a.createElement("pre",{className:la.a.code},["ISC License","","Copyright (c) 2020, Codaer","",["Permission to use, copy, modify, and/or distribute this software for any","purpose with or without fee is hereby granted, provided that the above","copyright notice and this permission notice appear in all copies."].join(" "),"",['THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES',"WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF","MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR","ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES","WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN","ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF","OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE."].join(" ")].join("\n"))),r.a.createElement("p",null,"If there are any additional questions, feel free to contact our licensing department:",r.a.createElement(rt,{description:"email",guardKey:"0B9BD5C4-068E-4004-8E68-ABA8E940E97A",guardValue:"nKucp7KorKKUcJmnqY6Zol6XnKU="})))})),ca=a(22),ua=a.n(ca),sa=function(e){var t=e.name,a=e.descriptions,n=e.simpleGuardContact;return r.a.createElement(de,null,r.a.createElement(se,null,t),a.map((function(e,t){return r.a.createElement("div",{key:t,className:ua.a.description},e)})),n&&r.a.createElement(rt,n),r.a.createElement("p",{className:ua.a.disclosure},"This affiliate page is hosted by Codaer and the statements here have been approved by the affiliate listed."))},da=F((function(e){return r.a.createElement(sa,{name:"Abeelxy",descriptions:[r.a.createElement(r.a.Fragment,null,"Unfortunately, Abeelxy is currently not accepting new clients; luckily, Codaer is always ready to accept new clients. To get started, ",r.a.createElement(Y,{to:"/contact"},"contact Codaer"),".")],simpleGuardContact:{description:"Abeelxy's email",guardKey:"C2C2A8D8-C053-49DB-9902-5D39703BCCE0",guardValue:"pJipm62hpaySg5GXmJKgsb1wkKim"}})}));var ma=function(){return r.a.createElement("div",{className:c.a.app},r.a.createElement(B,null,r.a.createElement(te,null,r.a.createElement(f,{className:c.a.mainColumn},r.a.createElement(oe,null),r.a.createElement(ee,null),r.a.createElement(qe,{path:"/"}),r.a.createElement(ht,{path:"/decision-maker"},r.a.createElement(Ot,{path:"/"}),r.a.createElement(zt,{path:"/choose-from"}),r.a.createElement(Yt,{path:"/numbers"})),r.a.createElement(Je,{path:"/about"}),r.a.createElement(ot,{path:"/contact"}),r.a.createElement(ta,{path:"/profiles"}),r.a.createElement(ia,{path:"/license"}),r.a.createElement(da,{path:"/abeelxy"})),r.a.createElement(ra,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ma,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[42,1,2]]]);
//# sourceMappingURL=main.4d503ed0.chunk.js.map