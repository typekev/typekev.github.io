(this["webpackJsonptypekev-site"]=this["webpackJsonptypekev-site"]||[]).push([[8],{259:function(e,t,a){"use strict";var r=a(7),n=a(8),o=a(265);function i(){var e=Object(r.a)(["\n      align-self: center;\n      margin-top: calc(-25vmin - 2rem);\n    "]);return i=function(){return e},e}function l(){var e=Object(r.a)(["\n  margin-top: 3rem;\n  margin-bottom: 6rem;\n  pointer-events: none;\n\n  ","\n"]);return l=function(){return e},e}var c=Object(n.b)(o.a)(l(),(function(e){return"center"===e.align&&Object(n.a)(i())}));t.a=c},260:function(e,t,a){"use strict";var r=a(7),n=a(0),o=a.n(n),i=a(8),l=a(242),c=a(249);function d(){var e=Object(r.a)(["\n    background-color: "," !important;\n    border-color: "," !important;\n    color: "," !important;\n  "]);return d=function(){return e},e}function u(){var e=Object(r.a)(["\n  ","\n\n  text-align: left;\n  display: flow-root !important;\n  text-transform: initial !important;\n"]);return u=function(){return e},e}var s=Object(i.b)(c.a)(u(),(function(e){var t=e.theme.palette,a=t.background,r=t.primary;return Object(i.a)(d(),r.dark,r.dark,a.default)}));t.a=Object(l.a)((function(e){var t=Object.assign({},e);return o.a.createElement(s,Object.assign({},t,{disabled:!0,variant:"outlined",size:"large"}))}))},265:function(e,t,a){"use strict";var r=a(1),n=a(2),o=a(14),i=a(0),l=(a(3),a(5)),c=a(6),d=a(9),u=i.forwardRef((function(e,t){var a=e.classes,o=e.className,c=e.component,u=void 0===c?"div":c,s=e.disableGutters,m=void 0!==s&&s,p=e.fixed,b=void 0!==p&&p,h=e.maxWidth,g=void 0===h?"lg":h,f=Object(n.a)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return i.createElement(u,Object(r.a)({className:Object(l.a)(a.root,o,b&&a.fixed,m&&a.disableGutters,!1!==g&&a["maxWidth".concat(Object(d.a)(String(g)))]),ref:t},f))}));t.a=Object(c.a)((function(e){return{root:Object(o.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(t,a){var r=e.breakpoints.values[a];return 0!==r&&(t[e.breakpoints.up(a)]={maxWidth:r}),t}),{}),maxWidthXs:Object(o.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:Object(o.a)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:Object(o.a)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:Object(o.a)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:Object(o.a)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(u)},266:function(e,t,a){"use strict";var r=a(1),n=a(2),o=a(0),i=(a(48),a(3),a(5)),l=a(9),c=a(12),d=a(6);a(249).a.styles;var u=o.forwardRef((function(e,t){var a=e.children,c=e.classes,d=e.className,u=e.color,s=void 0===u?"default":u,m=e.component,p=void 0===m?"div":m,b=e.disabled,h=void 0!==b&&b,g=e.disableElevation,f=void 0!==g&&g,v=e.disableFocusRipple,E=void 0!==v&&v,k=e.disableRipple,x=void 0!==k&&k,O=e.fullWidth,j=void 0!==O&&O,y=e.orientation,R=void 0===y?"horizontal":y,z=e.size,C=void 0===z?"medium":z,W=e.variant,w=void 0===W?"outlined":W,T=Object(n.a)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","disableRipple","fullWidth","orientation","size","variant"]),L=Object(i.a)(c.grouped,c["grouped".concat(Object(l.a)(R))],c["grouped".concat(Object(l.a)(w))],c["grouped".concat(Object(l.a)(w)).concat(Object(l.a)(R))],c["grouped".concat(Object(l.a)(w)).concat("default"!==s?Object(l.a)(s):"")],h&&c.disabled);return o.createElement(p,Object(r.a)({role:"group",className:Object(i.a)(c.root,d,j&&c.fullWidth,f&&c.disableElevation,"contained"===w&&c.contained,"vertical"===R&&c.vertical),ref:t},T),o.Children.map(a,(function(e){return o.isValidElement(e)?o.cloneElement(e,{className:Object(i.a)(L,e.props.className),color:e.props.color||s,disabled:e.props.disabled||h,disableElevation:e.props.disableElevation||f,disableFocusRipple:E,disableRipple:x,fullWidth:j,size:e.props.size||C,variant:e.props.variant||w}):null})))}));t.a=Object(d.a)((function(e){return{root:{display:"inline-flex",borderRadius:e.shape.borderRadius},contained:{boxShadow:e.shadows[2]},disableElevation:{boxShadow:"none"},disabled:{},fullWidth:{width:"100%"},vertical:{flexDirection:"column"},grouped:{minWidth:40},groupedHorizontal:{"&:not(:first-child)":{borderTopLeftRadius:0,borderBottomLeftRadius:0},"&:not(:last-child)":{borderTopRightRadius:0,borderBottomRightRadius:0}},groupedVertical:{"&:not(:first-child)":{borderTopRightRadius:0,borderTopLeftRadius:0},"&:not(:last-child)":{borderBottomRightRadius:0,borderBottomLeftRadius:0}},groupedText:{},groupedTextHorizontal:{"&:not(:last-child)":{borderRight:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")}},groupedTextVertical:{"&:not(:last-child)":{borderBottom:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")}},groupedTextPrimary:{"&:not(:last-child)":{borderColor:Object(c.b)(e.palette.primary.main,.5)}},groupedTextSecondary:{"&:not(:last-child)":{borderColor:Object(c.b)(e.palette.secondary.main,.5)}},groupedOutlined:{},groupedOutlinedHorizontal:{"&:not(:first-child)":{marginLeft:-1},"&:not(:last-child)":{borderRightColor:"transparent"}},groupedOutlinedVertical:{"&:not(:first-child)":{marginTop:-1},"&:not(:last-child)":{borderBottomColor:"transparent"}},groupedOutlinedPrimary:{"&:hover":{borderColor:e.palette.primary.main}},groupedOutlinedSecondary:{"&:hover":{borderColor:e.palette.secondary.main}},groupedContained:{boxShadow:"none"},groupedContainedHorizontal:{"&:not(:last-child)":{borderRight:"1px solid ".concat(e.palette.grey[400]),"&$disabled":{borderRight:"1px solid ".concat(e.palette.action.disabled)}}},groupedContainedVertical:{"&:not(:last-child)":{borderBottom:"1px solid ".concat(e.palette.grey[400]),"&$disabled":{borderBottom:"1px solid ".concat(e.palette.action.disabled)}}},groupedContainedPrimary:{"&:not(:last-child)":{borderColor:e.palette.primary.dark}},groupedContainedSecondary:{"&:not(:last-child)":{borderColor:e.palette.secondary.dark}}}}),{name:"MuiButtonGroup"})(u)},389:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return O}));var r=a(0),n=a.n(r),o=a(240),i=a(61),l=a(107),c=a.n(l),d=a(26),u=a(39),s=a.n(u),m=a(266),p=a(259),b=a(30),h=a(260),g=a(108),f=a(7),v=a(8),E=a(249);function k(){var e=Object(f.a)(["\n  height: 4rem;\n  background-color: "," !important;\n  border-color: "," !important;\n  color: white !important;\n\n  &:hover {\n    background-color: transparent !important;\n    color: "," !important;\n  }\n"]);return k=function(){return e},e}var x=Object(v.b)(E.a)(k(),(function(e){return"".concat(e.color)}),(function(e){return"".concat(e.color)}),(function(e){return"".concat(e.color)}));function O(){return n.a.createElement(b.a,{in:!0,component:o.a},n.a.createElement(p.a,{fixed:!0},n.a.createElement(i.a,{variant:"h5"},n.a.createElement(h.a,null,n.a.createElement(c.a,null,"I am a talker"),n.a.createElement(l.Cursor,null))),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement(i.a,{variant:"body1"},"To save us both time, I've put together a brief outline of the different mediums you may avail in order to get in touch with me."),n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement("h3",null,"You should contact me by email if"),n.a.createElement("ul",null,n.a.createElement("li",null,"You or your organization are interested in a training on React, Machine Learning, Artificial Intelligence, or Blockchain."),n.a.createElement("br",null),n.a.createElement("li",null,"You'd like me to consult on a project with you through Devoteam."),n.a.createElement("br",null),n.a.createElement("li",null,"You have business oriented inquiries."," ",n.a.createElement("strong",null,"This medium would ",n.a.createElement("em",null,"not")," be recommended for recruiters."))),n.a.createElement("p",null,"If this fits your enquiry, you can reach me at"," ",n.a.createElement(g.a,{href:"mailto:kevin.gonzalez@devoteam.lu"},n.a.createElement("strong",null,"kevin.gonzalez@devoteam.lu")),"."))),n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement("h3",null,"You should contact me by social media if"),n.a.createElement("ul",null,n.a.createElement("li",null,"You want to know more about me."," ",n.a.createElement("strong",null,"This would be the ideal medium for recruiters; I'd suggest"," ",n.a.createElement(g.a,{href:"https://linkedin.com/in/typekev",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("strong",null,"LinkedIn")),".")),n.a.createElement("br",null),n.a.createElement("li",null,"You'd like to offer or receive career advice."),n.a.createElement("br",null),n.a.createElement("li",null,"You have non-business related inquiries.")),n.a.createElement(m.a,{size:"large",variant:"outlined"},n.a.createElement(x,{href:"https://instagram.com/typekev",target:"_blank",color:"#e4405f"},n.a.createElement(s.a,{path:d.f,size:1,color:"currentColor"})),n.a.createElement(x,{href:"https://linkedin.com/in/typekev",target:"_blank",color:"#007bb5"},n.a.createElement(s.a,{path:d.h,size:1,color:"currentColor"})),n.a.createElement(x,{href:"https://twitter.com/typekev",target:"_blank",color:"#1da1f2"},n.a.createElement(s.a,{path:d.r,size:1,color:"currentColor"})),n.a.createElement(x,{href:"https://facebook.com/typekev",target:"_blank",color:"#3b5998"},n.a.createElement(s.a,{path:d.c,size:1,color:"currentColor"})))))))}}}]);
//# sourceMappingURL=8.3da57e9e.chunk.js.map