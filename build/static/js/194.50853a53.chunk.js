(self.webpackChunkisr_technology=self.webpackChunkisr_technology||[]).push([[194],{180:function(e,t,i){"use strict";i(2791);t.Z=i.p+"static/media/sShape.b8d698da0288bb9dfaac0e33c02eb2de.svg"},6227:function(e,t,i){"use strict";i.d(t,{Z:function(){return a}});i(2791);var n=i(184);function a(e){var t=e.children,i=e.classe,a=e.maxWidth,r=e.display,s=e.columns,o=e.rows;return(0,n.jsx)("div",{className:"container ".concat(i),style:{maxWidth:a,display:r,gridTemplateColumns:s,gridTemplateRows:o},children:t})}},9371:function(e,t,i){"use strict";i.d(t,{Z:function(){return a}});i(2791);var n=i(184);function a(e){return(0,n.jsx)("div",{className:"icon ".concat(e.class),children:(0,n.jsx)("img",{src:e.icon,alt:"icon"})})}},1585:function(e,t,i){"use strict";i.d(t,{Z:function(){return o}});var n=i(885),a=i(2791),r=i(2773),s=i(184);function o(e){var t=e.fileName,o=(0,a.useState)(e.fileName),c=(0,n.Z)(o,2),l=c[0],d=c[1],u=(0,a.useState)(""),h=(0,n.Z)(u,2),f=h[0],m=h[1];return(0,a.useEffect)((function(){d(t),i(7265)("./".concat(l)).then((function(e){fetch(e.default).then((function(e){return e.text()})).then((function(e){return m(e)})).catch((function(e){return console.log(e)}))})).catch((function(e){return console.log(e)}))}),[l,t]),(0,s.jsx)("div",{className:"markdown",children:(0,s.jsx)(r.Z,{children:f})})}},2460:function(e,t,i){"use strict";i.d(t,{Z:function(){return a}});i(2791);var n=i(184);function a(e){return(0,n.jsx)("p",{className:"paragraph",children:e.paragraph})}},9052:function(e,t,i){"use strict";i.d(t,{Z:function(){return r}});i(2791);var n=i(2998),a=i(184);function r(e){var t=e.animation,i=e.classe,r=e.h1;return(0,a.jsx)(n.E.h1,{animate:t,className:i,children:r})}},194:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return N}});var n=i(2791),a=i(3148),r=i(9371),s=i(4717),o=i(2998),c=i(1390),l=i(184);function d(e){var t=e.x,i=e.y,a=e.id,d=e.icon,u=e.text,h=(0,n.useContext)(c.I),f=h.isMD,m=h.isPortrait,p=h.isLandscape,x=t,v=i,g=360+t,j=-360+i,y=(0,s._)(),C=(0,s._)(),w=f&&p?"70vh":f&&m?"70vw":"100vw",b=f&&p?"120vh":f&&m?"120vw":"150vw";return(0,n.useEffect)((function(){y.start({rotate:"".concat(g,"deg"),width:[null,b,w],transition:{ease:"easeInOut",duration:20,repeat:1/0}}),C.start({rotate:"".concat(j,"deg"),transition:{duration:20,repeat:1/0}})}),[y,C,g,v,j,w,b]),(0,l.jsx)(o.E.div,{className:"value",layout:!0,initial:{x:"-50%",y:"-50%",rotate:"".concat(x,"deg"),width:[w,w,w]},animate:y,children:(0,l.jsxs)(o.E.div,{layout:!0,className:"value-group",initial:{rotate:"".concat(v,"deg")},id:a,animate:C,children:[(0,l.jsx)(r.Z,{icon:"https://dev.imnot.agency"+"".concat(d),class:"value-icon"}),(0,l.jsx)("p",{className:"small",children:u})]})})}function u(){var e=(0,n.useContext)(c.I),t=e.isMD,i=e.isXXL,r=e.valuesData,u=e.themeColorObj[0],h=(0,s._)();return(0,n.useEffect)((function(){h.start({opacity:1})}),[h]),(0,l.jsxs)("section",{className:"values full-vh",id:"values",children:[r.map((function(e){return(0,l.jsx)(d,{icon:"light"===u?e.icon.light:e.icon.dark,text:e.title,x:e.coordonates.x,y:e.coordonates.y,animation:e.animation,id:e.title,second:e.rotate.second,third:e.rotate.third},e.id)})),(0,l.jsx)(o.E.div,{className:"logo-value",animate:{scale:[null,1.2,1],transition:{duration:10,repeat:1/0}}}),(0,l.jsxs)(o.E.h1,{className:"ready "+(i?"display1":t?"display2":"display3"),style:"light"===u?{color:a.Z.primaryColor}:{color:a.Z.secondaryColor},children:["ready for ",(0,l.jsx)("br",{})," the",[" f","u","t","u","r","e"].map((function(e,t){return(0,l.jsx)(o.E.span,{animate:h,initial:{opacity:0},transition:{delay:.15*t},className:"future",children:e},t)}))]})]})}function h(e){var t=e.id,i=e.icon,r=e.title,s=(0,n.useContext)(c.I).themeColorObj[0];return(0,l.jsxs)("div",{className:"card",style:"light"===s?{backgroundColor:a.Z.cardBgLight}:{backgroundColor:a.Z.cardBgDark},children:[(0,l.jsx)("div",{className:"card-image-socket",children:(0,l.jsx)("img",{src:i,alt:"icon"})}),(0,l.jsx)("div",{className:"paragraph-socket",children:(0,l.jsx)("p",{children:r})})]},t)}var f=i(1585),m=i(9052),p=i(2460),x=i(3504),v=i(180),g=i(6227);function j(){var e=(0,n.useContext)(c.I),t=e.isLG,i=e.portfolioData,a=e.portfolioPageTitleObj,s=e.portfolioPageIconObj,o=e.portfolioPageParagraphObj,d=e.changePortofolioPageId,u=a[1],j=s[1],y=o[1];return(0,l.jsxs)("section",{className:"portfolio",id:"services",children:[(0,l.jsx)(r.Z,{icon:v.Z,class:"s-shape-up"}),(0,l.jsxs)(g.Z,{columns:"repeat(4, 1fr)",rows:t?"repeat(4, 1fr)":"repeat(2, auto)",maxWidth:"1200px",display:"grid",classe:"lp-container",children:[(0,l.jsxs)("div",{className:"section-intro",children:[(0,l.jsx)(m.Z,{h1:"our services"}),(0,l.jsx)(f.Z,{fileName:"services.md"}),(0,l.jsx)("div",{className:"info",style:t?{display:"none"}:{display:"flex"},children:(0,l.jsx)(p.Z,{paragraph:"If you don\u2019t see a particular service listed on our site, contact us to see how we can help."})})]}),(0,l.jsx)("div",{className:"info",style:t?{display:"flex"}:{display:"none"},children:(0,l.jsx)(p.Z,{paragraph:"If you don\u2019t see a particular service listed on our site, contact us to see how we can help."})}),(0,l.jsx)("div",{className:"cards",children:i.map((function(e,t){return(0,l.jsx)(x.rU,{to:{pathname:"".concat(e.link)},state:{from:"mystate"},onClick:function(){u(e.title),j(e.icon),y(e.paragraph),d(e.id)},className:"card-link",children:(0,l.jsx)(h,{id:e.id,icon:"https://dev.imnot.agency"+e.icon,title:e.title})},t)}))})]})]})}function y(e){var t=(0,n.useContext)(c.I).isLG;return(0,l.jsxs)(o.E.svg,{whileTap:{scale:1.2},whileHover:{scale:1.2},initial:{scale:1},width:t?"32px":"40px",height:t?"32px":"40px",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("rect",{width:"31.9949",height:"31.9982",rx:"15.9975",fill:"".concat(e.fillCircle)}),(0,l.jsx)("path",{d:"M17.2284 17.2287C15.6454 18.8107 13.8114 20.3247 13.0864 19.5997C12.0494 18.5627 11.4094 17.6587 9.12142 19.4977C6.83442 21.3357 8.59142 22.5617 9.59642 23.5657C10.7564 24.7257 15.0804 23.6277 19.3544 19.3547C23.6274 15.0807 24.7224 10.7567 23.5614 9.59667C22.5564 8.59067 21.3364 6.83467 19.4984 9.12167C17.6594 11.4087 18.5624 12.0487 19.6014 13.0867C20.3234 13.8117 18.8104 15.6457 17.2284 17.2287Z",fill:"".concat(e.fillPhone)})]})}function C(e){var t=e.fillCircle,i=e.fillArrow,a=(0,n.useContext)(c.I).isLG;return(0,l.jsx)("div",{onClick:function(){document.getElementById("app").scrollTo({top:0,left:0,behavior:"smooth"})},className:"go-up",children:(0,l.jsxs)("svg",{width:a?"32px":"40px",height:a?"32px":"40px",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("rect",{width:"32",height:"32",rx:"16",fill:"".concat(t)}),(0,l.jsx)("g",{clipPath:"url(#clip0_309_3922)",children:(0,l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M23.6692 19.8988C23.1949 20.423 22.3854 20.4634 21.8612 19.9892L16 14.6862L10.1388 19.9892C9.61457 20.4634 8.80513 20.423 8.33084 19.8988C7.85656 19.3746 7.89703 18.5651 8.42124 18.0908L15.1412 12.0108C15.6288 11.5697 16.3712 11.5697 16.8588 12.0108L23.5788 18.0908C24.103 18.5651 24.1434 19.3746 23.6692 19.8988Z",fill:"".concat(i)})}),(0,l.jsx)("defs",{children:(0,l.jsx)("clipPath",{id:"clip0_309_3922",children:(0,l.jsx)("rect",{width:"16",height:"16",fill:"white",transform:"translate(8 8)"})})})]})})}function w(){var e=(0,n.useContext)(c.I),t=e.themeColorObj,i=e.isLG,r=t[0];return(0,l.jsxs)("div",{className:"call navlinks",children:[(0,l.jsx)(C,{fillCircle:"rgba(29, 202, 211,0.2)",fillArrow:"light"===r?a.Z.backgroundLight:a.Z.primaryColor}),(0,l.jsxs)("a",{href:"tel:+13053289110","aria-label":"Call Us",children:[(0,l.jsx)("p",{className:"navlinks",style:i&&"light"===r?{color:a.Z.primaryColor,display:"flex"}:i&&"dark"===r?{color:a.Z.backgroundLight}:{display:"none"},children:"305-328-9110"}),(0,l.jsx)(y,{fillCircle:a.Z.secondaryColorDark,fillPhone:"light"===r?a.Z.backgroundLight:a.Z.primaryColor})]})]})}var b=n.lazy((function(){return Promise.all([i.e(530),i.e(647)]).then(i.bind(i,5e3))})),Z=n.lazy((function(){return Promise.all([i.e(149),i.e(701),i.e(154)]).then(i.bind(i,6999))}));function N(){var e=(0,n.useContext)(c.I),t=e.themeColorObj,i=e.browserHistoryObj,a=t[0],r=i[0];return(0,n.useEffect)((function(){r[r.length-2]&&r[r.length-2].includes("/services")&&document.getElementById("services").scrollIntoView({behavior:"smooth",block:"start"})}),[r]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(u,{themeColor:a}),(0,l.jsx)(j,{themeColor:a}),(0,l.jsx)(b,{}),(0,l.jsx)(Z,{}),(0,l.jsx)(w,{})]})}},7265:function(e,t,i){var n={"./audio-visual.md":[1576,374],"./cloud-services.md":[2108,108],"./contact.md":[2389,389],"./cybersecurity.md":[5894,894],"./managed-it.md":[3510,510],"./networking.md":[2146,146],"./services.md":[7008,8],"./smart-home-automation.md":[599,599],"./surveillance-systems.md":[5846,846],"./voip.md":[9252,252],"./web.md":[2156,156]};function a(e){if(!i.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],a=t[0];return i.e(t[1]).then((function(){return i.t(a,17)}))}a.keys=function(){return Object.keys(n)},a.id=7265,e.exports=a}}]);
//# sourceMappingURL=194.50853a53.chunk.js.map