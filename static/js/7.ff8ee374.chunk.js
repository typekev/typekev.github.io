(this["webpackJsonptypekev-site"]=this["webpackJsonptypekev-site"]||[]).push([[7],{248:function(e,t,n){"use strict";var a=n(7),r=n(8),i=n(397);function o(){var e=Object(a.a)(["\n      align-self: center;\n      margin-top: calc(-25vmin - 2rem);\n    "]);return o=function(){return e},e}function c(){var e=Object(a.a)(["\n  margin-top: 3rem;\n  margin-bottom: 6rem;\n  pointer-events: none;\n\n  ","\n"]);return c=function(){return e},e}var l=Object(r.b)(i.a)(c(),(function(e){return"center"===e.align&&Object(r.a)(o())}));t.a=l},249:function(e,t,n){"use strict";var a=n(7),r=n(0),i=n.n(r),o=n(8),c=n(231),l=n(238);function s(){var e=Object(a.a)(["\n    background-color: "," !important;\n    border-color: "," !important;\n    color: "," !important;\n  "]);return s=function(){return e},e}function m(){var e=Object(a.a)(["\n  ","\n\n  text-align: left;\n  display: flow-root !important;\n  text-transform: initial !important;\n"]);return m=function(){return e},e}var u=Object(o.b)(l.a)(m(),(function(e){var t=e.theme.palette,n=t.background,a=t.primary;return Object(o.a)(s(),a.dark,a.dark,n.default)}));t.a=Object(c.a)((function(e){var t=Object.assign({},e);return i.a.createElement(u,Object.assign({},t,{disabled:!0,variant:"outlined",size:"large"}))}))},264:function(e,t,n){"use strict";var a=n(7);function r(){var e=Object(a.a)(["\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n\n  & li {\n    margin-bottom: 1.25rem;\n    & span {\n      text-align: left !important;\n    }\n  }\n"]);return r=function(){return e},e}var i=n(8).b.ul(r());t.a=i},308:function(e,t,n){"use strict";var a=n(1),r=n(42),i=n(2),o=n(0),c=(n(3),n(101)),l=n(22),s=n(15),m=n(23),u=n(10),d={entering:{transform:"none"},entered:{transform:"none"}},f={enter:l.b.enteringScreen,exit:l.b.leavingScreen},b=o.forwardRef((function(e,t){var n=e.children,l=e.disableStrictModeCompat,b=void 0!==l&&l,p=e.in,v=e.onEnter,g=e.onEntered,h=e.onEntering,E=e.onExit,y=e.onExited,j=e.onExiting,O=e.style,w=e.timeout,k=void 0===w?f:w,x=e.TransitionComponent,R=void 0===x?c.a:x,C=Object(i.a)(e,["children","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),T=Object(s.a)(),P=T.unstable_strictMode&&!b,S=o.useRef(null),D=Object(u.a)(n.ref,t),N=Object(u.a)(P?S:void 0,D),M=function(e){return function(t,n){if(e){var a=P?[S.current,t]:[t,n],i=Object(r.a)(a,2),o=i[0],c=i[1];void 0===c?e(o):e(o,c)}}},z=M(h),X=M((function(e,t){Object(m.b)(e);var n=Object(m.a)({style:O,timeout:k},{mode:"enter"});e.style.webkitTransition=T.transitions.create("transform",n),e.style.transition=T.transitions.create("transform",n),v&&v(e,t)})),B=M(g),I=M(j),A=M((function(e){var t=Object(m.a)({style:O,timeout:k},{mode:"exit"});e.style.webkitTransition=T.transitions.create("transform",t),e.style.transition=T.transitions.create("transform",t),E&&E(e)})),J=M(y);return o.createElement(R,Object(a.a)({appear:!0,in:p,nodeRef:P?S:void 0,onEnter:X,onEntered:B,onEntering:z,onExit:A,onExited:J,onExiting:I,timeout:k},C),(function(e,t){return o.cloneElement(n,Object(a.a)({style:Object(a.a)(Object(a.a)(Object(a.a)({transform:"scale(0)",visibility:"exited"!==e||p?void 0:"hidden"},d[e]),O),n.props.style),ref:N},t))}))}));t.a=b},403:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return B}));var a=n(0),r=n.n(a),i=n(229),o=n(232),c=n(308),l=n(61),s=n(400),m=n(243),u=n(238),d=n(246),f=n(253),b=n.n(f),p=n(248),v=n(30),g=n(249),h=n(264),E=n(7),y=n(8),j=n(397);function O(){var e=Object(E.a)(["\n  height: calc(100% - 4.5rem);\n\n  & > div {\n    border-radius: 0.25rem;\n    position: relative;\n  }\n\n  & iframe {\n    border: none;\n    border-radius: 0.25rem;\n  }\n"]);return O=function(){return e},e}var w=Object(y.b)(j.a)(O()),k=n(1),x=n(2),R=n(5),C=(n(3),n(6)),T=a.forwardRef((function(e,t){var n=e.animation,r=void 0===n?"pulse":n,i=e.classes,o=e.className,c=e.component,l=void 0===c?"span":c,s=e.height,m=e.variant,u=void 0===m?"text":m,d=e.width,f=Object(x.a)(e,["animation","classes","className","component","height","variant","width"]);return a.createElement(l,Object(k.a)({ref:t,className:Object(R.a)(i.root,i[u],o,!1!==r&&i[r])},f,{style:Object(k.a)({width:d,height:s},f.style)}))})),P=Object(C.a)((function(e){return{root:{display:"block",backgroundColor:e.palette.action.hover,height:"1.2em"},text:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 60%",transform:"scale(1, 0.60)",borderRadius:e.shape.borderRadius,"&:empty:before":{content:'"\\00a0"'}},rect:{},circle:{borderRadius:"50%"},pulse:{animation:"$pulse 1.5s ease-in-out 0.5s infinite"},"@keyframes pulse":{"0%":{opacity:1},"50%":{opacity:.4},"100%":{opacity:1}},wave:{position:"relative",overflow:"hidden","&::after":{animation:"$wave 1.6s linear 0.5s infinite",background:"linear-gradient(90deg, transparent, ".concat(e.palette.action.hover,", transparent)"),content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}},"@keyframes wave":{"0%":{transform:"translateX(-100%)"},"60%":{transform:"translateX(100%)"},"100%":{transform:"translateX(100%)"}}}}),{name:"MuiSkeleton"})(T),S=n(192),D=a.forwardRef((function(e,t){var n=e.classes,r=e.className,i=e.component,o=void 0===i?"div":i,c=Object(x.a)(e,["classes","className","component"]);return a.createElement(o,Object(k.a)({className:Object(R.a)(n.root,r),ref:t},c))})),N=Object(C.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(D);function M(){var e=Object(E.a)(["\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  z-index: -1;\n"]);return M=function(){return e},e}var z=Object(y.b)(S.a)(M()),X=function(){return r.a.createElement(z,null,r.a.createElement(N,null,r.a.createElement(P,{animation:"wave",height:10,width:"60%",style:{marginBottom:6,marginTop:32}}),r.a.createElement(P,{animation:"wave",height:10,width:"50%"})),r.a.createElement(P,{animation:"wave",variant:"rect",height:"70%",style:{marginLeft:32,marginRight:32}}),r.a.createElement(P,{animation:"wave",variant:"rect",height:30,width:"80%",style:{marginTop:16,marginLeft:32,marginRight:32}}),r.a.createElement(P,{animation:"wave",variant:"circle",width:56,height:56,style:{position:"absolute",right:24,bottom:24}}))};function B(e){var t=e.history,n=e.match.params.projectId,a=function(e){return t.push("/discover/projects/".concat(e))},E=function(){return a("")},y=n&&n.split("-").join(" ").replace(/\b\w/g,(function(e){return e.toUpperCase()})),j=r.a.createElement(g.a,null,y?r.a.createElement(b.a,{key:y,sentenceDelayPerCharRange:[0,0],keyPressDelayRange:[60,80]},y):r.a.createElement(b.a,{sentenceDelayPerCharRange:[0,0]},"I am a maker"),r.a.createElement(f.Cursor,null));return r.a.createElement(v.a,{in:!0,component:i.a},r.a.createElement(p.a,{fixed:!0},r.a.createElement(l.a,{variant:"h5"},r.a.createElement(m.a,{smDown:!0},r.a.createElement(s.a,{variant:"outlined"},!!y&&r.a.createElement(v.a,{in:!!y,component:c.a},r.a.createElement(u.a,{disableElevation:!0,color:"secondary",size:"large",variant:"contained",onClick:E},"Go back")),j)),r.a.createElement(m.a,{mdUp:!0},r.a.createElement(s.a,{variant:"outlined"},j))),r.a.createElement("br",null),r.a.createElement(v.a,{in:!!n,component:o.a,timeout:1e3},n?r.a.createElement(r.a.Fragment,null,r.a.createElement(w,{fixed:!0},r.a.createElement(d.a,{height:"100%",boxShadow:10},r.a.createElement(X,null),r.a.createElement("iframe",{width:"100%",height:"100%",title:y,src:"https://typekev.github.io/".concat(n,"/")})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(u.a,{color:"secondary",variant:"contained",onClick:E},"View all projects"))):r.a.createElement("span",null)),r.a.createElement("br",null),r.a.createElement(v.a,{in:!n,component:o.a,timeout:n?0:200},r.a.createElement(h.a,null,r.a.createElement("li",null,r.a.createElement(v.a,{in:!0,component:o.a,delay:0,timeout:1250},r.a.createElement(s.a,{variant:"outlined",color:"inherit"},r.a.createElement(m.a,{xsDown:!0},r.a.createElement(u.a,{disabled:!0,variant:"contained"},"TypeScript")),r.a.createElement(u.a,{onClick:function(){return a("react-pathing")}},r.a.createElement(b.a,{keyPressDelayRange:[30,50]},"React Pathing\u2014A Pathfinding Algorithm Visualizer (WIP)")))))))))}}}]);
//# sourceMappingURL=7.ff8ee374.chunk.js.map