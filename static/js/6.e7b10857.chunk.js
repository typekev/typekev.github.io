(this["webpackJsonptypekev-site"]=this["webpackJsonptypekev-site"]||[]).push([[6],{247:function(t,e,n){"use strict";var a=n(7),r=n(8),c=n(396);function i(){var t=Object(a.a)(["\n      align-self: center;\n      margin-top: calc(-25vmin - 2rem);\n    "]);return i=function(){return t},t}function o(){var t=Object(a.a)(["\n  margin-top: 3rem;\n  margin-bottom: 6rem;\n  pointer-events: none;\n\n  ","\n"]);return o=function(){return t},t}var u=Object(r.b)(c.a)(o(),(function(t){return"center"===t.align&&Object(r.a)(i())}));e.a=u},248:function(t,e,n){"use strict";var a=n(7),r=n(0),c=n.n(r),i=n(8),o=n(230),u=n(237);function l(){var t=Object(a.a)(["\n    background-color: "," !important;\n    border-color: "," !important;\n    color: "," !important;\n  "]);return l=function(){return t},t}function s(){var t=Object(a.a)(["\n  ","\n\n  text-align: left;\n  display: flow-root !important;\n  text-transform: initial !important;\n"]);return s=function(){return t},t}var m=Object(i.b)(u.a)(s(),(function(t){var e=t.theme.palette,n=e.background,a=e.primary;return Object(i.a)(l(),a.dark,a.dark,n.default)}));e.a=Object(o.a)((function(t){var e=Object.assign({},t);return c.a.createElement(m,Object.assign({},e,{disabled:!0,variant:"outlined",size:"large"}))}))},263:function(t,e,n){"use strict";var a=n(7);function r(){var t=Object(a.a)(["\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n\n  & li {\n    margin-bottom: 1.25rem;\n    & span {\n      text-align: left !important;\n    }\n  }\n"]);return r=function(){return t},t}var c=n(8).b.ul(r());e.a=c},269:function(t,e,n){"use strict";n.d(e,"b",(function(){return o}));var a=function(t){return t>=200&&t<300},r=function(t){var e=new Error(t.statusText);throw e.response=t,e},c=function(t){return a(t.status)?t:r(t)},i=function(t){return t.json()},o=function(t){return console.error("request failed",t)};e.a=function(){return fetch.apply(void 0,arguments).then(c).then(i)}},403:function(t,e,n){"use strict";n.r(e),n.d(e,"compare",(function(){return q})),n.d(e,"sortPosts",(function(){return F})),n.d(e,"getDelay",(function(){return M})),n.d(e,"renderPosts",(function(){return U})),n.d(e,"default",(function(){return V}));var a=n(55),r=n(0),c=n.n(r),i=n(308),o=n.n(i),u=n(227),l=n(231),s=n(307),m=n(59),f=n(237),p=n(399),b=n(242),d=n(252),v=n.n(d),E=n(257),h=n.n(E),g=n(259),y=n(269),j=function(){return Object(y.a)("https://typekev.github.io/typekev-blog/posts/json/",{method:"GET"}).catch(y.b)},k=function(t){return Object(y.a)("https://typekev.github.io/typekev-blog/posts/json/".concat(t),{method:"GET"}).catch(y.b)},O={},x=function(){var t=Object(g.a)(h.a.mark((function t(e){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,j();case 3:if(t.t1=t.sent,t.t1){t.next=6;break}t.t1=O;case 6:return t.t2=t.t1,t.abrupt("return",(0,t.t0)(t.t2));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();function w(t){var e=Object(r.useState)(O),n=Object(a.a)(e,2),c=n[0],i=n[1],o=Object(r.useState)(t||O),u=Object(a.a)(o,2),l=u[0],s=u[1];return Object(r.useEffect)((function(){x(i)}),[]),[c,l,function(t){return function(){var e=Object(g.a)(h.a.mark((function e(n){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=t,e.t2=n,!e.t2){e.next=6;break}return e.next=5,k(n);case 5:e.t2=e.sent;case 6:if(e.t1=e.t2,e.t1){e.next=9;break}e.t1=O;case 9:return e.t3=e.t1,e.abrupt("return",(0,e.t0)(e.t3));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}(s)]}var P=n(247),D=n(30),C=n(248),R=n(103),G=n(263),T=n(7),z=n(8),I=n(396);function J(){var t=Object(T.a)(["\n  margin-left: 0 !important;\n\n  & > span > * {\n    margin-bottom: 1rem;\n  }\n\n  h1 {\n    display: none;\n  }\n\n  img {\n    margin: -0.5em;\n    max-width: 100%;\n  }\n"]);return J=function(){return t},t}var S=Object(z.b)(I.a)(J()),q=function(t,e){return t.timestamp>e.timestamp?-1:1},F=function(t){return t.sort(q)},M=function(t){return 250*t},U=function(t,e){return function(){return t.map((function(t,n){var a=t.title,r=t.published,i=t.location,o=M(n);return c.a.createElement("li",{key:a},c.a.createElement(D.a,{in:!0,component:l.a,delay:o,timeout:1250},c.a.createElement(p.a,{variant:"outlined",color:"inherit"},c.a.createElement(b.a,{xsDown:!0},c.a.createElement(f.a,{disabled:!0,variant:"contained"},r)),c.a.createElement(f.a,{onClick:function(){return e(i)}},c.a.createElement(v.a,{keyPressDelayRange:[30,50]},function(t){var e=t.delay,n=t.title;return function(t){return(0,t.type)(e,n)}}({delay:o,title:a}))))))}))}};function V(t){var e=t.history,n=t.match.params.postId,i=w(t.initialPost),E=Object(a.a)(i,3),h=E[0],g=E[1],y=g.title,j=g.content,k=E[2],O=function(t){return e.push("/blog/".concat(t))},x=function(){return O("")};Object(r.useEffect)((function(){k(n)}),[n]);var T=c.a.createElement(C.a,null,n&&y?c.a.createElement(v.a,{key:n,sentenceDelayPerCharRange:[0,0],keyPressDelayRange:[60,80]},y):c.a.createElement(v.a,{sentenceDelayPerCharRange:[0,0]},"I am a thinker"),c.a.createElement(d.Cursor,null));return c.a.createElement(D.a,{in:!0,component:u.a},c.a.createElement(P.a,{fixed:!0},c.a.createElement(m.a,{variant:"h5"},c.a.createElement(b.a,{smDown:!0},c.a.createElement(p.a,{variant:"outlined"},!!y&&c.a.createElement(D.a,{in:!!y,component:s.a},c.a.createElement(f.a,{disableElevation:!0,color:"secondary",size:"large",variant:"contained",onClick:x},"Go back")),T)),c.a.createElement(b.a,{mdUp:!0},c.a.createElement(p.a,{variant:"outlined"},T))),c.a.createElement("br",null),c.a.createElement(D.a,{in:!!j,component:l.a,timeout:1e3,delay:100},c.a.createElement(S,{fixed:!0,maxWidth:"md"},c.a.createElement(m.a,{component:"span"},c.a.createElement(o.a,{source:j,renderers:{paragraph:m.a,link:R.a}})),!!j&&c.a.createElement(c.a.Fragment,null,c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement(f.a,{color:"secondary",variant:"contained",onClick:x},"View all posts")))),c.a.createElement("br",null),c.a.createElement(D.a,{in:!j,component:l.a,timeout:j?0:200},c.a.createElement(G.a,{visible:!j},Object(r.useMemo)(U(F(Object.values(h)),O),[h])))))}V.defaultProps={initialPost:void 0}}}]);
//# sourceMappingURL=6.e7b10857.chunk.js.map