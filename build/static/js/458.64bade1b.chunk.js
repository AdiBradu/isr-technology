(self.webpackChunkisr_technology=self.webpackChunkisr_technology||[]).push([[458],{2772:(e,t,n)=>{"use strict";n.d(t,{A:()=>i});n(5043);var r=n(579);function i(e){let{children:t,classe:n,maxWidth:i,display:s,columns:c,rows:a}=e;return(0,r.jsx)("div",{className:"container ".concat(n),style:{maxWidth:i,display:s,gridTemplateColumns:c,gridTemplateRows:a},children:t})}},1586:(e,t,n)=>{"use strict";n.d(t,{A:()=>i});n(5043);var r=n(579);function i(e){return(0,r.jsx)("div",{className:"icon ".concat(e.class),children:(0,r.jsx)("img",{src:e.icon,alt:"icon"})})}},6815:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});var r=n(5043);var i=n(296),s=n(8198),c=n(579);function a(){const e=(0,i.s)();return(0,r.useEffect)((()=>{e.set({opacity:0}),e.start({opacity:1})}),[e]),(0,c.jsx)("div",{className:"scroll-down-indicator",id:"scroll-indicator",children:(0,c.jsxs)("svg",{viewBox:"0 0 50 77",xmlns:"http://www.w3.org/2000/svg",children:[(0,c.jsxs)("g",{clipPath:"url(#clip0_259_3919)",children:[(0,c.jsx)(s.P.path,{animate:e,transition:{delay:0,repeat:1/0,duration:2},fillRule:"evenodd",clipRule:"evenodd",d:"M1.03389 51.3164C2.51603 49.6782 5.04553 49.5517 6.68368 51.0339L25 67.6058L43.3164 51.0339C44.9545 49.5517 47.484 49.6782 48.9662 51.3164C50.4483 52.9545 50.3218 55.484 48.6837 56.9662L27.6837 75.9662C26.1601 77.3447 23.84 77.3447 22.3164 75.9662L1.31638 56.9662C-0.321778 55.484 -0.448253 52.9545 1.03389 51.3164Z",fill:"#1DCAD3"}),(0,c.jsx)(s.P.path,{animate:e,transition:{delay:.3,repeat:1/0,duration:2},fillRule:"evenodd",clipRule:"evenodd",d:"M1.03392 26.3164C2.51606 24.6782 5.04556 24.5517 6.68371 26.0339L25.0001 42.6058L43.3164 26.0339C44.9546 24.5517 47.4841 24.6782 48.9662 26.3164C50.4483 27.9545 50.3219 30.484 48.6837 31.9662L27.6837 50.9662C26.1601 52.3447 23.84 52.3447 22.3164 50.9662L1.31641 31.9662C-0.321747 30.484 -0.448222 27.9545 1.03392 26.3164Z",fill:"#1DCAD3"}),(0,c.jsx)(s.P.path,{animate:e,transition:{delay:.6,repeat:1/0,duration:2},fillRule:"evenodd",clipRule:"evenodd",d:"M1.03395 1.31638C2.51609 -0.321778 5.04559 -0.448253 6.68375 1.03389L25.0001 17.6058L43.3164 1.03389C44.9546 -0.448253 47.4841 -0.321778 48.9662 1.31638C50.4484 2.95453 50.3219 5.48403 48.6837 6.96617L27.6837 25.9662C26.1602 27.3447 23.84 27.3447 22.3164 25.9662L1.31644 6.96617C-0.321717 5.48403 -0.448192 2.95453 1.03395 1.31638Z",fill:"#1DCAD3"})]}),(0,c.jsx)("defs",{children:(0,c.jsx)("clipPath",{id:"clip0_259_3919",children:(0,c.jsx)("rect",{width:"50.0001",height:"77"})})})]})})}},4149:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});n(5043);var r=n(8198),i=n(579);function s(e){let{animation:t,classe:n,h1:s}=e;return(0,i.jsx)(r.P.h1,{animate:t,className:n,children:s})}},8291:(e,t,n)=>{"use strict";n.d(t,{A:()=>i});n(5043);var r=n(579);function i(e){let{children:t}=e;return(0,r.jsx)("div",{className:"wrapper",children:t})}},959:(e,t,n)=>{"use strict";n.d(t,{A:()=>i});var r=n(5043);function i(){const[e,t]=(0,r.useState)(1);return(0,r.useEffect)((()=>{const e=document.getElementById("app");return e.addEventListener("scroll",(()=>(e=>{const n=e.scrollTop;t(1-.002*n)})(e))),()=>{t(1)}}),[]),e}},4870:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>C});var r=n(5043);var i=n(4611),s=n(579);function c(e){let{children:t}=e;const{layoutRef:n}=(0,r.useContext)(i.B);return(0,s.jsx)("main",{className:"layout",ref:n,children:t})}var a=n(3216),o=n(1591);var l=n(6815),u=n(4149),d=n(296),f=n(4193),m=n(8198);function v(e){let{image:t,title:n,currentPos:c}=e;const{isMD:a,isXXL:o}=(0,r.useContext)(i.B),v=(0,d.s)();return(0,r.useEffect)((()=>{v.set({opacity:0}),v.start({opacity:1,transition:{delay:.5,duration:.5,ease:"easeIn"}})}),[v]),(0,s.jsx)(f.N,{children:(0,s.jsxs)("div",{className:"cover-image full-vh",style:{opacity:c},children:[(0,s.jsx)(m.P.div,{className:"overlay",id:"ci-overlay"}),(0,s.jsx)(m.P.img,{src:t,alt:n,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{opacity:{duration:1}}}),(0,s.jsx)(u.A,{animation:v,classe:o?"display1 title":a?"display2 title":"title",h1:n}),(0,s.jsx)(l.A,{})]})})}var h=n(8291),p=n(2772),x=n(574),y=(n(3269),n(959)),j=n(3648);function C(){const e=(0,a.zy)().pathname,{portfolioData:t}=(0,r.useContext)(i.B),[l,d]=(0,r.useState)(""),f=(0,y.A)();return(0,r.useEffect)((()=>{t.forEach((t=>{"/".concat(t.link)===e&&n(8417)("./".concat(t.markdown)).then((e=>{fetch(e.default).then((e=>e.text())).then((e=>d(e))).catch((e=>console.log(e)))})).catch((e=>console.log(e)))}))}),[e,t]),(0,s.jsxs)(c,{children:[t.map((t=>"/".concat(t.link)===e&&(0,s.jsxs)(r.Fragment,{children:[(0,s.jsxs)(o.m,{children:[(0,s.jsx)("title",{children:t.title}),(0,s.jsx)("meta",{name:"description",content:"ISR Technology - USA, MIAMI, FL. ".concat(t.meta)})]}),(0,s.jsx)(v,{image:t.image,title:t.title,currentPos:f}),(0,s.jsx)(h.A,{children:(0,s.jsxs)(p.A,{display:"flex",maxWidth:"768px",classe:"services-container",children:[(0,s.jsx)(u.A,{h1:t.title}),(0,s.jsx)("div",{className:"underline"}),(0,s.jsx)("div",{children:(0,s.jsx)(x.Ay,{children:l})})]})})]},t.id))),(0,s.jsx)(j.A,{})]})}},8417:(e,t,n)=>{var r={"./audio-visual.md":[237,237],"./cloud-services.md":[224,224],"./contact.md":[926,926],"./cybersecurity.md":[9873,873],"./managed-it.md":[9193,193],"./networking.md":[3158,158],"./services.md":[3620,620],"./smart-home-automation.md":[9903,903],"./surveillance-systems.md":[2850,850],"./voip.md":[4262,262],"./web.md":[3896,896]};function i(e){if(!n.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],i=t[0];return n.e(t[1]).then((()=>n.t(i,17)))}i.keys=()=>Object.keys(r),i.id=8417,e.exports=i},4193:(e,t,n)=>{"use strict";n.d(t,{N:()=>h});var r=n(6326),i=n(5043),s=n(602),c=n(7188);var a=n(9674),o=n(4930),l=0;function u(){var e=l;return l++,e}var d=function(e){var t=e.children,n=e.initial,s=e.isPresent,c=e.onExitComplete,l=e.custom,d=e.presenceAffectsLayout,m=(0,o.M)(f),v=(0,o.M)(u),h=(0,i.useMemo)((function(){return{id:v,initial:n,isPresent:s,custom:l,onExitComplete:function(e){var t,n;m.set(e,!0);try{for(var i=(0,r.Ju)(m.values()),s=i.next();!s.done;s=i.next()){if(!s.value)return}}catch(a){t={error:a}}finally{try{s&&!s.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}null===c||void 0===c||c()},register:function(e){return m.set(e,!1),function(){return m.delete(e)}}}}),d?void 0:[s]);return(0,i.useMemo)((function(){m.forEach((function(e,t){return m.set(t,!1)}))}),[s]),i.useEffect((function(){!s&&!m.size&&(null===c||void 0===c||c())}),[s]),i.createElement(a.t.Provider,{value:h},t)};function f(){return new Map}var m=n(2190);function v(e){return e.key||""}var h=function(e){var t=e.children,n=e.custom,a=e.initial,o=void 0===a||a,l=e.onExitComplete,u=e.exitBeforeEnter,f=e.presenceAffectsLayout,h=void 0===f||f,p=(0,r.zs)(function(){var e=(0,i.useRef)(!1),t=(0,r.zs)((0,i.useState)(0),2),n=t[0],a=t[1];(0,c.l)((function(){return e.current=!0}));var o=(0,i.useCallback)((function(){!e.current&&a(n+1)}),[n]);return[(0,i.useCallback)((function(){return s.Ay.postRender(o)}),[o]),n]}(),1),x=p[0],y=(0,i.useContext)(m.L).forceRender;y&&(x=y);var j=(0,i.useRef)(!0),C=(0,i.useRef)(!0);(0,i.useEffect)((function(){return function(){C.current=!1}}),[]);var E=function(e){var t=[];return i.Children.forEach(e,(function(e){(0,i.isValidElement)(e)&&t.push(e)})),t}(t),g=(0,i.useRef)(E),A=(0,i.useRef)(new Map).current,L=(0,i.useRef)(new Set).current;if(function(e,t){e.forEach((function(e){var n=v(e);t.set(n,e)}))}(E,A),j.current)return j.current=!1,i.createElement(i.Fragment,null,E.map((function(e){return i.createElement(d,{key:v(e),isPresent:!0,initial:!!o&&void 0,presenceAffectsLayout:h},e)})));for(var w=(0,r.fX)([],(0,r.zs)(E),!1),k=g.current.map(v),P=E.map(v),R=k.length,M=0;M<R;M++){var N=k[M];-1===P.indexOf(N)?L.add(N):L.delete(N)}return u&&L.size&&(w=[]),L.forEach((function(e){if(-1===P.indexOf(e)){var t=A.get(e);if(t){var r=k.indexOf(e);w.splice(r,0,i.createElement(d,{key:v(t),isPresent:!1,onExitComplete:function(){A.delete(e),L.delete(e);var t=g.current.findIndex((function(t){return t.key===e}));if(g.current.splice(t,1),!L.size){if(g.current=E,!1===C.current)return;x(),l&&l()}},custom:n,presenceAffectsLayout:h},t))}}})),w=w.map((function(e){var t=e.key;return L.has(t)?e:i.createElement(d,{key:v(e),isPresent:!0,presenceAffectsLayout:h},e)})),g.current=w,i.createElement(i.Fragment,null,L.size?w:w.map((function(e){return(0,i.cloneElement)(e)})))}}}]);
//# sourceMappingURL=458.64bade1b.chunk.js.map