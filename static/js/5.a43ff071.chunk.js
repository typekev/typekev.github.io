(this["webpackJsonptypekev-site"]=this["webpackJsonptypekev-site"]||[]).push([[5],{269:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n(0),o=r.createContext();function i(){return r.useContext(o)}t.a=o},279:function(e,t,n){"use strict";function r(e){return null!=e&&!(Array.isArray(e)&&0===e.length)}function o(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e&&(r(e.value)&&""!==e.value||t&&r(e.defaultValue)&&""!==e.defaultValue)}function i(e){return e.startAdornment}n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}))},287:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(101);var o=n(116);function i(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(o.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},290:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(291),i=(r=o)&&r.__esModule?r:{default:r};t.default=i.default},291:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.default=function(e){var t=function(t){var n="undefined"!==typeof window&&(window.SpeechRecognition||window.webkitSpeechRecognition||window.mozSpeechRecognition||window.msSpeechRecognition||window.oSpeechRecognition),i=n?new n:null,u=null!==i,c=void 0;!u||e&&!1===e.autoStart?c=!1:(i.start(),c=!0);var s=!1,d="",p="";return function(n){function a(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,t));return n.disconnect=function(e){if(i)switch(e){case"ABORT":s=!0,i.abort();break;case"RESET":s=!1,i.abort();break;case"STOP":default:s=!0,i.stop()}},n.resetTranscript=function(){d="",p="",n.disconnect("RESET"),n.setState({interimTranscript:d,finalTranscript:p})},n.startListening=function(){if(i&&!c){i.continuous||n.resetTranscript();try{i.start()}catch(e){}c=!0,n.setState({listening:c})}},n.abortListening=function(){c=!1,n.setState({listening:c}),n.disconnect("ABORT")},n.stopListening=function(){c=!1,n.setState({listening:c}),n.disconnect("STOP")},u&&(i.continuous=!1!==e.continuous,i.interimResults=!0,i.onresult=n.updateTranscript.bind(n),i.onend=n.onRecognitionDisconnect.bind(n)),n.state={interimTranscript:d,finalTranscript:p,listening:c},n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(a,n),o(a,[{key:"onRecognitionDisconnect",value:function(){c=!1,s?this.setState({listening:c}):i&&(i.continuous?this.startListening():this.setState({listening:c})),s=!1}},{key:"updateTranscript",value:function(e){d="";for(var t=e.resultIndex;t<e.results.length;++t)e.results[t].isFinal?p=this.concatTranscripts(p,e.results[t][0].transcript):d=this.concatTranscripts(d,e.results[t][0].transcript);this.setState({finalTranscript:p,interimTranscript:d})}},{key:"concatTranscripts",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.map((function(e){return e.trim()})).join(" ").trim()}},{key:"render",value:function(){var e=this.concatTranscripts(p,d);return l.default.createElement(t,r({resetTranscript:this.resetTranscript,startListening:this.startListening,abortListening:this.abortListening,stopListening:this.stopListening,transcript:e,recognition:i,browserSupportsSpeechRecognition:u},this.state,this.props))}}]),a}(a.Component)};return"function"===typeof e?t(e):t};var i,a=n(0),l=(i=a)&&i.__esModule?i:{default:i}},373:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function i(e,t,n){return(i=o()?Reflect.construct:function(e,t,n){var o=[null];o.push.apply(o,t);var i=new(Function.bind.apply(e,o));return n&&r(i,n.prototype),i}).apply(null,arguments)}n.d(t,"a",(function(){return i}))},381:function(e,t,n){"use strict";var r=n(1),o=n(2),i=n(0),a=(n(3),n(5)),l=n(279),u=n(6),c=n(9),s=n(126),d=n(269),p=i.forwardRef((function(e,t){var n=e.children,u=e.classes,p=e.className,f=e.color,b=void 0===f?"primary":f,m=e.component,h=void 0===m?"div":m,g=e.disabled,v=void 0!==g&&g,y=e.error,w=void 0!==y&&y,O=e.fullWidth,j=void 0!==O&&O,S=e.focused,x=e.hiddenLabel,E=void 0!==x&&x,C=e.margin,T=void 0===C?"none":C,R=e.required,k=void 0!==R&&R,L=e.size,M=e.variant,A=void 0===M?"standard":M,B=Object(o.a)(e,["children","classes","className","color","component","disabled","error","fullWidth","focused","hiddenLabel","margin","required","size","variant"]),D=i.useState((function(){var e=!1;return n&&i.Children.forEach(n,(function(t){if(Object(s.a)(t,["Input","Select"])){var n=Object(s.a)(t,["Select"])?t.props.input:t;n&&Object(l.a)(n.props)&&(e=!0)}})),e})),F=D[0],P=D[1],N=i.useState((function(){var e=!1;return n&&i.Children.forEach(n,(function(t){Object(s.a)(t,["Input","Select"])&&Object(l.b)(t.props,!0)&&(e=!0)})),e})),_=N[0],W=N[1],I=i.useState(!1),$=I[0],z=I[1],H=void 0!==S?S:$;v&&H&&z(!1);var q=i.useCallback((function(){W(!0)}),[]),K={adornedStart:F,setAdornedStart:P,color:b,disabled:v,error:w,filled:_,focused:H,fullWidth:j,hiddenLabel:E,margin:("small"===L?"dense":void 0)||T,onBlur:function(){z(!1)},onEmpty:i.useCallback((function(){W(!1)}),[]),onFilled:q,onFocus:function(){z(!0)},registerEffect:void 0,required:k,variant:A};return i.createElement(d.a.Provider,{value:K},i.createElement(h,Object(r.a)({className:Object(a.a)(u.root,p,"none"!==T&&u["margin".concat(Object(c.a)(T))],j&&u.fullWidth),ref:t},B),n))}));t.a=Object(u.a)({root:{display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top"},marginNormal:{marginTop:16,marginBottom:8},marginDense:{marginTop:8,marginBottom:4},fullWidth:{width:"100%"}},{name:"MuiFormControl"})(p)},382:function(e,t,n){"use strict";var r=n(1),o=n(2),i=n(0),a=(n(3),n(5)),l=n(61),u=n(6),c=n(269),s=i.forwardRef((function(e,t){var n=e.children,u=e.classes,s=e.className,d=e.component,p=void 0===d?"div":d,f=e.disablePointerEvents,b=void 0!==f&&f,m=e.disableTypography,h=void 0!==m&&m,g=e.position,v=e.variant,y=Object(o.a)(e,["children","classes","className","component","disablePointerEvents","disableTypography","position","variant"]),w=Object(c.b)()||{},O=v;return v&&w.variant,w&&!O&&(O=w.variant),i.createElement(c.a.Provider,{value:null},i.createElement(p,Object(r.a)({className:Object(a.a)(u.root,s,b&&u.disablePointerEvents,w.hiddenLabel&&u.hiddenLabel,"filled"===O&&u.filled,{start:u.positionStart,end:u.positionEnd}[g],"dense"===w.margin&&u.marginDense),ref:t},y),"string"!==typeof n||h?n:i.createElement(l.a,{color:"textSecondary"},n)))}));t.a=Object(u.a)({root:{display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap"},filled:{"&$positionStart:not($hiddenLabel)":{marginTop:16}},positionStart:{marginRight:8},positionEnd:{marginLeft:8},disablePointerEvents:{pointerEvents:"none"},hiddenLabel:{},marginDense:{}},{name:"MuiInputAdornment"})(s)},387:function(e,t,n){"use strict";var r=n(1),o=n(2),i=n(0),a=(n(3),n(5));var l=n(269),u=n(6),c=n(9),s=n(10),d=n(128);function p(e,t){return parseInt(e[t],10)||0}var f="undefined"!==typeof window?i.useLayoutEffect:i.useEffect,b={visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},m=i.forwardRef((function(e,t){var n=e.onChange,a=e.rows,l=e.rowsMax,u=e.rowsMin,c=void 0===u?1:u,m=e.style,h=e.value,g=Object(o.a)(e,["onChange","rows","rowsMax","rowsMin","style","value"]),v=a||c,y=i.useRef(null!=h).current,w=i.useRef(null),O=Object(s.a)(t,w),j=i.useRef(null),S=i.useRef(0),x=i.useState({}),E=x[0],C=x[1],T=i.useCallback((function(){var t=w.current,n=window.getComputedStyle(t),r=j.current;r.style.width=n.width,r.value=t.value||e.placeholder||"x","\n"===r.value.slice(-1)&&(r.value+=" ");var o=n["box-sizing"],i=p(n,"padding-bottom")+p(n,"padding-top"),a=p(n,"border-bottom-width")+p(n,"border-top-width"),u=r.scrollHeight-i;r.value="x";var c=r.scrollHeight-i,s=u;v&&(s=Math.max(Number(v)*c,s)),l&&(s=Math.min(Number(l)*c,s));var d=(s=Math.max(s,c))+("border-box"===o?i+a:0),f=Math.abs(s-u)<=1;C((function(e){return S.current<20&&(d>0&&Math.abs((e.outerHeightStyle||0)-d)>1||e.overflow!==f)?(S.current+=1,{overflow:f,outerHeightStyle:d}):e}))}),[l,v,e.placeholder]);i.useEffect((function(){var e=Object(d.a)((function(){S.current=0,T()}));return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}),[T]),f((function(){T()})),i.useEffect((function(){S.current=0}),[h]);return i.createElement(i.Fragment,null,i.createElement("textarea",Object(r.a)({value:h,onChange:function(e){S.current=0,y||T(),n&&n(e)},ref:O,rows:v,style:Object(r.a)({height:E.outerHeightStyle,overflow:E.overflow?"hidden":null},m)},g)),i.createElement("textarea",{"aria-hidden":!0,className:e.className,readOnly:!0,ref:j,tabIndex:-1,style:Object(r.a)(Object(r.a)({},b),m)}))})),h=n(279),g="undefined"===typeof window?i.useEffect:i.useLayoutEffect,v=i.forwardRef((function(e,t){var n=e["aria-describedby"],u=e.autoComplete,d=e.autoFocus,p=e.classes,f=e.className,b=(e.color,e.defaultValue),v=e.disabled,y=e.endAdornment,w=(e.error,e.fullWidth),O=void 0!==w&&w,j=e.id,S=e.inputComponent,x=void 0===S?"input":S,E=e.inputProps,C=void 0===E?{}:E,T=e.inputRef,R=(e.margin,e.multiline),k=void 0!==R&&R,L=e.name,M=e.onBlur,A=e.onChange,B=e.onClick,D=e.onFocus,F=e.onKeyDown,P=e.onKeyUp,N=e.placeholder,_=e.readOnly,W=e.renderSuffix,I=e.rows,$=e.rowsMax,z=e.rowsMin,H=e.startAdornment,q=e.type,K=void 0===q?"text":q,U=e.value,V=Object(o.a)(e,["aria-describedby","autoComplete","autoFocus","classes","className","color","defaultValue","disabled","endAdornment","error","fullWidth","id","inputComponent","inputProps","inputRef","margin","multiline","name","onBlur","onChange","onClick","onFocus","onKeyDown","onKeyUp","placeholder","readOnly","renderSuffix","rows","rowsMax","rowsMin","startAdornment","type","value"]),X=null!=C.value?C.value:U,J=i.useRef(null!=X).current,Z=i.useRef(),G=i.useCallback((function(e){0}),[]),Q=Object(s.a)(C.ref,G),Y=Object(s.a)(T,Q),ee=Object(s.a)(Z,Y),te=i.useState(!1),ne=te[0],re=te[1],oe=Object(l.b)();var ie=function(e){var t=e.props,n=e.states,r=e.muiFormControl;return n.reduce((function(e,n){return e[n]=t[n],r&&"undefined"===typeof t[n]&&(e[n]=r[n]),e}),{})}({props:e,muiFormControl:oe,states:["color","disabled","error","hiddenLabel","margin","required","filled"]});ie.focused=oe?oe.focused:ne,i.useEffect((function(){!oe&&v&&ne&&(re(!1),M&&M())}),[oe,v,ne,M]);var ae=oe&&oe.onFilled,le=oe&&oe.onEmpty,ue=i.useCallback((function(e){Object(h.b)(e)?ae&&ae():le&&le()}),[ae,le]);g((function(){J&&ue({value:X})}),[X,ue,J]);i.useEffect((function(){ue(Z.current)}),[]);var ce=x,se=Object(r.a)(Object(r.a)({},C),{},{ref:ee});"string"!==typeof ce?se=Object(r.a)(Object(r.a)({inputRef:ee,type:K},se),{},{ref:null}):k?!I||$||z?(se=Object(r.a)({rows:I,rowsMax:$},se),ce=m):ce="textarea":se=Object(r.a)({type:K},se);return i.useEffect((function(){oe&&oe.setAdornedStart(Boolean(H))}),[oe,H]),i.createElement("div",Object(r.a)({className:Object(a.a)(p.root,p["color".concat(Object(c.a)(ie.color||"primary"))],f,ie.disabled&&p.disabled,ie.error&&p.error,O&&p.fullWidth,ie.focused&&p.focused,oe&&p.formControl,k&&p.multiline,H&&p.adornedStart,y&&p.adornedEnd,"dense"===ie.margin&&p.marginDense),onClick:function(e){Z.current&&e.currentTarget===e.target&&Z.current.focus(),B&&B(e)},ref:t},V),H,i.createElement(l.a.Provider,{value:null},i.createElement(ce,Object(r.a)({"aria-invalid":ie.error,"aria-describedby":n,autoComplete:u,autoFocus:d,defaultValue:b,disabled:ie.disabled,id:j,onAnimationStart:function(e){ue("mui-auto-fill-cancel"===e.animationName?Z.current:{value:"x"})},name:L,placeholder:N,readOnly:_,required:ie.required,rows:I,value:X,onKeyDown:F,onKeyUp:P},se,{className:Object(a.a)(p.input,C.className,ie.disabled&&p.disabled,k&&p.inputMultiline,ie.hiddenLabel&&p.inputHiddenLabel,H&&p.inputAdornedStart,y&&p.inputAdornedEnd,"search"===K&&p.inputTypeSearch,"dense"===ie.margin&&p.inputMarginDense),onBlur:function(e){M&&M(e),C.onBlur&&C.onBlur(e),oe&&oe.onBlur?oe.onBlur(e):re(!1)},onChange:function(e){if(!J){var t=e.target||Z.current;if(null==t)throw new TypeError("Material-UI: Expected valid input target. Did you use a custom `inputComponent` and forget to forward refs? See https://material-ui.com/r/input-component-ref-interface for more info.");ue({value:t.value})}for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];C.onChange&&C.onChange.apply(C,[e].concat(r)),A&&A.apply(void 0,[e].concat(r))},onFocus:function(e){ie.disabled?e.stopPropagation():(D&&D(e),C.onFocus&&C.onFocus(e),oe&&oe.onFocus?oe.onFocus(e):re(!0))}}))),y,W?W(Object(r.a)(Object(r.a)({},ie),{},{startAdornment:H})):null)})),y=Object(u.a)((function(e){var t="light"===e.palette.type,n={color:"currentColor",opacity:t?.42:.5,transition:e.transitions.create("opacity",{duration:e.transitions.duration.shorter})},o={opacity:"0 !important"},i={opacity:t?.42:.5};return{"@global":{"@keyframes mui-auto-fill":{},"@keyframes mui-auto-fill-cancel":{}},root:Object(r.a)(Object(r.a)({},e.typography.body1),{},{color:e.palette.text.primary,lineHeight:"1.1876em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center","&$disabled":{color:e.palette.text.disabled,cursor:"default"}}),formControl:{},focused:{},disabled:{},adornedStart:{},adornedEnd:{},error:{},marginDense:{},multiline:{padding:"".concat(6,"px 0 ").concat(7,"px"),"&$marginDense":{paddingTop:3}},colorSecondary:{},fullWidth:{width:"100%"},input:{font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"".concat(6,"px 0 ").concat(7,"px"),border:0,boxSizing:"content-box",background:"none",height:"1.1876em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%",animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&::-webkit-input-placeholder":n,"&::-moz-placeholder":n,"&:-ms-input-placeholder":n,"&::-ms-input-placeholder":n,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{"-webkit-appearance":"none"},"label[data-shrink=false] + $formControl &":{"&::-webkit-input-placeholder":o,"&::-moz-placeholder":o,"&:-ms-input-placeholder":o,"&::-ms-input-placeholder":o,"&:focus::-webkit-input-placeholder":i,"&:focus::-moz-placeholder":i,"&:focus:-ms-input-placeholder":i,"&:focus::-ms-input-placeholder":i},"&$disabled":{opacity:1},"&:-webkit-autofill":{animationDuration:"5000s",animationName:"mui-auto-fill"}},inputMarginDense:{paddingTop:3},inputMultiline:{height:"auto",resize:"none",padding:0},inputTypeSearch:{"-moz-appearance":"textfield","-webkit-appearance":"textfield"},inputAdornedStart:{},inputAdornedEnd:{},inputHiddenLabel:{}}}),{name:"MuiInputBase"})(v),w=i.forwardRef((function(e,t){var n=e.disableUnderline,l=e.classes,u=e.fullWidth,c=void 0!==u&&u,s=e.inputComponent,d=void 0===s?"input":s,p=e.multiline,f=void 0!==p&&p,b=e.type,m=void 0===b?"text":b,h=Object(o.a)(e,["disableUnderline","classes","fullWidth","inputComponent","multiline","type"]);return i.createElement(y,Object(r.a)({classes:Object(r.a)(Object(r.a)({},l),{},{root:Object(a.a)(l.root,!n&&l.underline),underline:null}),fullWidth:c,inputComponent:d,multiline:f,ref:t,type:m},h))}));w.muiName="Input";t.a=Object(u.a)((function(e){var t="light"===e.palette.type,n=t?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)",r=t?"rgba(0, 0, 0, 0.09)":"rgba(255, 255, 255, 0.09)";return{root:{position:"relative",backgroundColor:r,borderTopLeftRadius:e.shape.borderRadius,borderTopRightRadius:e.shape.borderRadius,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut}),"&:hover":{backgroundColor:t?"rgba(0, 0, 0, 0.13)":"rgba(255, 255, 255, 0.13)","@media (hover: none)":{backgroundColor:r}},"&$focused":{backgroundColor:t?"rgba(0, 0, 0, 0.09)":"rgba(255, 255, 255, 0.09)"},"&$disabled":{backgroundColor:t?"rgba(0, 0, 0, 0.12)":"rgba(255, 255, 255, 0.12)"}},colorSecondary:{"&$underline:after":{borderBottomColor:e.palette.secondary.main}},underline:{"&:after":{borderBottom:"2px solid ".concat(e.palette.primary.main),left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut}),pointerEvents:"none"},"&$focused:after":{transform:"scaleX(1)"},"&$error:after":{borderBottomColor:e.palette.error.main,transform:"scaleX(1)"},"&:before":{borderBottom:"1px solid ".concat(n),left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:e.transitions.create("border-bottom-color",{duration:e.transitions.duration.shorter}),pointerEvents:"none"},"&:hover:before":{borderBottom:"1px solid ".concat(e.palette.text.primary)},"&$disabled:before":{borderBottomStyle:"dotted"}},focused:{},disabled:{},adornedStart:{paddingLeft:12},adornedEnd:{paddingRight:12},error:{},marginDense:{},multiline:{padding:"27px 12px 10px","&$marginDense":{paddingTop:23,paddingBottom:6}},input:{padding:"27px 12px 10px","&:-webkit-autofill":{WebkitBoxShadow:"light"===e.palette.type?null:"0 0 0 100px #266798 inset",WebkitTextFillColor:"light"===e.palette.type?null:"#fff",caretColor:"light"===e.palette.type?null:"#fff",borderTopLeftRadius:"inherit",borderTopRightRadius:"inherit"}},inputMarginDense:{paddingTop:23,paddingBottom:6},inputHiddenLabel:{paddingTop:18,paddingBottom:19,"&$inputMarginDense":{paddingTop:10,paddingBottom:11}},inputMultiline:{padding:0},inputAdornedStart:{paddingLeft:0},inputAdornedEnd:{paddingRight:0}}}),{name:"MuiFilledInput"})(w)}}]);
//# sourceMappingURL=5.a43ff071.chunk.js.map