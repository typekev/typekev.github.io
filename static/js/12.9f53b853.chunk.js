(this["webpackJsonptypekev-site"]=this["webpackJsonptypekev-site"]||[]).push([[12],{247:function(e,t,n){"use strict";var a=n(7),r=n(8),c=n(395);function o(){var e=Object(a.a)(["\n      align-self: center;\n      margin-top: calc(-25vmin - 2rem);\n    "]);return o=function(){return e},e}function i(){var e=Object(a.a)(["\n  margin-top: 3rem;\n  margin-bottom: 6rem;\n  pointer-events: none;\n\n  ","\n"]);return i=function(){return e},e}var u=Object(r.b)(c.a)(i(),(function(e){return"center"===e.align&&Object(r.a)(o())}));t.a=u},267:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var a=function(e){return e>=200&&e<300},r=function(e){var t=new Error(e.statusText);throw t.response=e,t},c=function(e){return a(e.status)?e:r(e)},o=function(e){return e.json()},i=function(e){return console.error("request failed",e)};t.a=function(){return fetch.apply(void 0,arguments).then(c).then(o)}},399:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return ve}));var a=n(0),r=n.n(a),c=n(227),o=n(247),i=n(30),u=n(55),s=n(389),l=n(287),m=n(238),f=n(18),d=["Who is Kevin?","What does Kevin do?","Where does Kevin work?"],b=function(){return d[Math.floor(Math.random()*d.length)]},v=[500,"Welcome, visitor.","I'm Kevin's autonomous assistant.","Ask me something like '".concat(b(),"'")],p=[500,"Welcome back, visitor."],O=function(e,t,n,a){return e&&e.addEventListener("message",function(e,t,n){return function(a){var r=a.data,c=JSON.parse(r).activities.filter((function(e){var t=e.from.id;return e.text&&"typekev-bot"===t}));if(c.length){var o=c.filter((function(e){return e.suggestedActions})).reduce((function(e,t){var n=t.suggestedActions;return[].concat(Object(l.a)(e),Object(l.a)(n.actions.map((function(e){return e.title}))))}),[]),i=[].concat(Object(l.a)(e.current),Object(l.a)(c.map((function(e){return e.text}))));t(i),n(o)}}}(t,n,a))},h=function(){var e=Object(m.a)([f.d]),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(),o=Object(u.a)(c,2),i=o[0],l=o[1],d=Object(a.useState)(n[f.d]?p:v),b=Object(u.a)(d,2),h=b[0],E=b[1],g=Object(a.useState)([]),j=Object(u.a)(g,2),y=j[0],k=j[1],S=Object(a.useRef)(h);return S.current=h,Object(a.useEffect)((function(){return r(f.d,"true",{path:"/"})})),Object(a.useEffect)((function(){var e=O(i,S,E,k);return function(e,t){return function(){return e&&e.removeEventListener("message",t)}}(i,e)}),[i]),[i,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return l(Object(s.a)(WebSocket,t))},S.current,function(){return E([""])},y]},E=n(268),g=n.n(E),j=n(269),y=n(113),k=n(76),S=n(267),T=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_BOT_ORIGIN,C=function(e){return Object(S.a)("".concat(T,"directline/conversations"),{method:"POST",body:JSON.stringify({token:e})}).catch(S.b)},x=function e(t,n){var a=t.conversationId,r=t.token,c=t.text,o=t.type,i=void 0===o?"message":o;return Object(S.a)("https://directline.botframework.com/v3/directline/conversations/".concat(a,"/activities"),{method:"POST",headers:{Authorization:"Bearer ".concat(r),"Content-Type":"application/json"},body:JSON.stringify({type:i,from:{id:"typekev-site-user"},text:c})}).catch(function(e,t,n){return function(){return C().then((function(n){var a=n.conversationId,r=n.token,c=Object(k.a)(n,["conversationId","token"]);return t({conversationId:a,token:r,text:e}),Object(y.a)({conversationId:a,token:r},c)})).then(n)}}(c,e,n))},I={},w=function(){var e=Object(j.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t,e.next=3,C();case 3:if(e.t1=e.sent,e.t1){e.next=6;break}e.t1=I;case 6:return e.t2=e.t1,e.abrupt("return",(0,e.t0)(e.t2));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var W=n(252),_=n.n(W),A=n(231),P=n(59),K=n(7),L=n(8);function R(){var e=Object(K.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  display: block;\n  height: 0;\n  overflow: visible;\n  margin-top: -1.625rem;\n  padding-bottom: 1.625rem;\n"]);return R=function(){return e},e}var D=L.b.span(R()),B=n(39),M=n.n(B),q=n(26);function N(){var e=Object(K.a)(["\n  animation: "," 1500ms infinite ease-in-out;\n\n  &:nth-child(1) {\n    animation-delay: 200ms;\n  }\n  &:nth-child(2) {\n    animation-delay: 300ms;\n  }\n  &:nth-child(3) {\n    animation-delay: 400ms;\n  }\n"]);return N=function(){return e},e}function z(){var e=Object(K.a)(["\n    0% {\n        transform:translateY(0rem)\n    }\n    28% {\n        transform:translateY(-0.375rem)\n    }\n    44% {\n        transform:translateY(0rem)\n    }\n"]);return z=function(){return e},e}var J=Object(L.c)(z()),U=Object(L.b)((function(e){var t=Object.assign({},e);return r.a.createElement(M.a,Object.assign({path:q.q,size:1,color:"currentColor"},t))}))(N(),J);function Y(e){var t=Object.assign({},e);return r.a.createElement(D,t,r.a.createElement(U,null),r.a.createElement(U,null),r.a.createElement(U,null))}var F=[50,75],G=[1e3,1200];function H(e){var t=e.messages,n=e.disabled;Object(a.useRef)(t).current=t;var c=t[0]===v[0],o=t.filter(Boolean).length>0;return r.a.createElement(P.a,{variant:"h6",align:"center"},r.a.createElement(i.a,{component:A.a,in:o,timeout:o?500:0,delay:0},r.a.createElement("div",null,Object(a.useMemo)((function(){return o&&r.a.createElement(_.a,{sentenceDelayPerCharRange:n&&!c?[0,0]:(e=Math.min.apply(Math,Object(l.a)(t.map((function(e){return e.length})).filter(Boolean))),e*F[0]>G[0]?F:G.map((function(t){return t/e}))),keyPressDelayRange:[65,80]},function(e){return function(t){return t.type.apply(void 0,Object(l.a)(e))}}(t));var e}),[t]),r.a.createElement(W.Cursor,null))),r.a.createElement(i.a,{component:A.a,in:!o,timeout:500,delay:0},r.a.createElement(Y,null)))}var V=n(37),Q=n(306),X=n.n(Q),Z=n(118),$=n.n(Z),ee=n(396),te=n(401),ne=n(397),ae=n(229),re=n(260),ce=n(237),oe=n(243),ie=n(395),ue={"Learn more about Kevin":"/discover/","Learn about Kevin's job":"/work/"},se="",le=function(e,t,n){return function(a){a.preventDefault(),e(n),t(se)}},me=function(e){return function(t){var n=t.currentTarget;return e(n.value)}},fe=function(e){return function(){return e(b())}};var de=X()({autoStart:!1,continuous:!1})((function(e){var t=e.prompts,n=e.sendMessage,c=e.disabled,o=e.interimTranscript,s=e.transcript,l=e.startListening,m=e.stopListening,f=e.listening,d=e.browserSupportsSpeechRecognition,b=Object(a.useState)(se),v=Object(u.a)(b,2),p=v[0],O=v[1];return Object(a.useEffect)((function(){d&&f&&me(O)({currentTarget:{value:o||s}})}),[o,s]),Object(a.useEffect)((function(){var e=document.getElementById("chatbot-input");!function(e,t,n,a){(e||!t)&&n&&!a&&n.focus()}(p,c,e,"chatbot-input"===document.activeElement.id)}),[p,c]),Object(a.useEffect)((function(){!function(e,t){e&&t({preventDefault:$.a})}(p,le(n,O,p))}),[f]),r.a.createElement(ie.a,{maxWidth:"sm"},r.a.createElement("form",{onSubmit:le(n,O,p)},r.a.createElement(ee.a,{required:!0,fullWidth:!0,autoFocus:!0,hiddenLabel:!0},r.a.createElement(te.a,{onChange:me(O),value:p,disabled:c,id:"chatbot-input",margin:"dense",placeholder:c?"The bot is typing":"Tell me something",inputProps:{"aria-label":"chatbot input"},startAdornment:r.a.createElement(ne.a,{position:"start"},r.a.createElement(oe.a,{title:p?"You've already started typing a question":"Generate a random question"},r.a.createElement("span",null,r.a.createElement(ae.a,{edge:"start","aria-label":"generate a random question",disabled:c||!!p,onClick:fe(O)},r.a.createElement(M.a,{path:q.n,size:1,color:"currentColor"}))))),endAdornment:r.a.createElement(ne.a,{position:"end"},d&&!p?r.a.createElement(oe.a,{title:"Tap to talk"},r.a.createElement("span",null,r.a.createElement(ae.a,{edge:"end","aria-label":"tap to talk",disabled:c,onClick:f?m:l},r.a.createElement(M.a,{path:f?q.l:q.k,size:1,color:"currentColor"})))):r.a.createElement(oe.a,{title:"Send message"},r.a.createElement("span",null,r.a.createElement(ae.a,{edge:"end","aria-label":"send message",disabled:c||!p,onClick:le(n,O,p)},r.a.createElement(M.a,{path:q.p,size:1,color:"currentColor"})))))}))),r.a.createElement("br",null),r.a.createElement(i.a,{component:A.a,in:t.length>0&&!c,timeout:1e3,delay:c?0:500},r.a.createElement(re.a,{variant:"contained",color:"primary"},t.map((function(e){return r.a.createElement(ce.a,{key:e,component:V.b,to:ue[e]},e)})))))}));function be(){var e=h(),t=Object(u.a)(e,5),n=t[0],c=t[1],o=t[2],i=t[3],s=t[4],l=function(e){var t=Object(a.useState)(I),n=Object(u.a)(t,2),r=n[0],c=r.conversationId,o=r.token,i=r.streamUrl,s=n[1];return[{conversationId:c,token:o,streamUrl:i},function(){return w(s)},function(t){return"string"===typeof t&&x({conversationId:c,token:o,text:t},s,e())}]}(i),m=Object(u.a)(l,3),f=m[0].streamUrl,d=m[1],b=m[2],v=function(e,t){return!e||0===t}(f,o.filter(Boolean).length);return Object(a.useEffect)((function(){d()}),[]),Object(a.useEffect)((function(){!function(e,t,n){e&&!t&&n(e)}(f,n,c)}),[f]),r.a.createElement(r.a.Fragment,null,r.a.createElement(H,{messages:o,disabled:v}),r.a.createElement(de,{prompts:s,sendMessage:b,disabled:v}))}function ve(){return r.a.createElement(i.a,{in:!0,component:c.a},r.a.createElement(o.a,{align:"center",maxWidth:"md"},r.a.createElement(be,null)))}}}]);
//# sourceMappingURL=12.9f53b853.chunk.js.map