(self.webpackChunkisr_technology=self.webpackChunkisr_technology||[]).push([[325],{180:function(e,a,n){"use strict";n(2791);a.Z=n.p+"static/media/sShape.b8d698da0288bb9dfaac0e33c02eb2de.svg"},325:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return F}});var r=n(2791),s=n(1390),t=n(9052),c=n(1585),o=(n(3380),n(5861)),i=n(4942),l=n(1413),d=n(885),m=n(7757),u=n.n(m),h=n(4569),f=n.n(h),g=n(3148),p=n(4100),v=n(184);function x(e){var a=e.label,n=e.name,r=e.type,s=e.value,t=e.placeholder,c=e.onChange,o=e.error;return(0,v.jsxs)("div",{className:"input",children:[(0,v.jsx)("label",{children:(0,v.jsx)("p",{className:"caption",children:a})}),(0,v.jsx)("input",{type:r,placeholder:t,onChange:c,value:s,name:n}),(0,v.jsx)("p",{className:"small error",children:o})]})}function j(e){var a=e.label,n=e.name,r=(e.type,e.value),s=e.placeholder,t=e.onChange,c=e.error;return(0,v.jsxs)("div",{className:"textarea",children:[(0,v.jsx)("label",{children:(0,v.jsx)("p",{className:"caption",children:a})}),(0,v.jsx)("textarea",{placeholder:s,onChange:t,name:n,value:r}),(0,v.jsx)("p",{className:"small error",children:c})]})}function b(e){var a=e.type,n=e.text,r=e.status,s=e.bgColor,t=e.color,c=e.width;return(0,v.jsx)("button",{className:"form-send-button",type:a,style:{backgroundColor:s,color:t,width:c},children:(0,v.jsx)("p",{className:"btn",children:n||r})})}var y=n(8007);function Z(){var e={name:"",email:"",message:""},a=(0,r.useState)(e),n=(0,d.Z)(a,2),t=n[0],c=n[1],m=(0,r.useState)({}),h=(0,d.Z)(m,2),Z=h[0],w=h[1],N=(0,r.useState)(!1),k=(0,d.Z)(N,2),C=k[0],_=k[1],A=(0,r.useState)("SEND INQUIRY"),I=(0,d.Z)(A,2),S=I[0],Y=I[1],z=(0,r.useState)(!1),L=(0,d.Z)(z,2),R=L[0],T=L[1],D=(0,r.useContext)(s.I).themeColorObj[0],M=(0,r.useRef)(),O=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,E=function(e){var a=e.target,n=a.name,r=a.value;c((0,l.Z)((0,l.Z)({},t),{},(0,i.Z)({},n,r)))},F=function(){var e=(0,o.Z)(u().mark((function e(a){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),w(U(t)),_(!0);case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();(0,r.useEffect)((function(){var a=function(){var e=(0,o.Z)(u().mark((function e(){var a,n,r,s,c;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!R){e.next=17;break}return e.next=3,M.current.executeAsync();case 3:return a=e.sent,n=t.name,r=t.email,s=t.message,e.prev=5,e.next=8,f().post("/contact",{name:n,email:r,message:s,token:a});case 8:c=e.sent,console.log("Request back",c),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(5),console.error(e.t0.code),console.error(e.t0.message),console.error(e.t0.stack);case 17:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(){return e.apply(this,arguments)}}();0!==Object.keys(Z).length&&C?(Y("TRY AGAIN!"),T(!1),console.log("Form not sent"),setTimeout((function(){_(!1)}),3e3)):0===Object.keys(Z).length&&C&&(Y("THANK YOU!"),T(!0),a(),console.log("Form sent"),setTimeout((function(){Y("SEND INQUIRY"),_(!1),c(e),T(!1)}),3e3))}),[C,R,Z,t]);var U=function(e){var a={};return e.name||(a.name="Your name is required!"),e.email?O.test(e.email)||(a.email="Your email is not valid!"):a.email="Your email is required!",e.message||(a.message="A message is required!"),a};return(0,v.jsxs)("form",{onSubmit:F,children:[(0,v.jsx)(p.Z,{h2:"Send your inquiry"}),(0,v.jsx)(x,{label:"name",type:"text",placeholder:"Your name",onChange:E,name:"name",value:t.name,error:Z.name}),(0,v.jsx)(x,{label:"email",type:"email",placeholder:"Your email address",onChange:E,name:"email",value:t.email,error:Z.email}),(0,v.jsx)(j,{label:"message",placeholder:"Please type your message",onChange:E,name:"message",value:t.message,error:Z.message}),(0,v.jsx)("div",{children:(0,v.jsxs)("p",{className:"small",children:["This site is protected by reCAPTCHA and the Google",(0,v.jsxs)("a",{href:"https://policies.google.com/privacy",style:{color:"".concat(g.Z.secondaryColorDark)},children:[" ","Privacy Policy"]})," ","and",(0,v.jsxs)("a",{href:"https://policies.google.com/terms",style:{color:"".concat(g.Z.secondaryColorDark)},children:[" ","Terms of Service"]})," ","apply."]})}),(0,v.jsx)(b,{type:"submit",status:S,bgColor:g.Z.secondaryColor,colosr:g.Z.primaryColor,width:"100%"}),(0,v.jsx)(y.Z,{ref:M,sitekey:"6LeMJE4eAAAAAMTccweQVhjvYKhRjfAO9wrVFsQI",theme:"light"===D?"light":"dark",size:"invisible"})]})}function w(e){return(0,v.jsx)("h3",{children:e.h3})}var N=n(9371);function k(e){return(0,v.jsx)("address",{children:(0,v.jsx)("img",{src:e.icon,alt:"social-media-icon",className:e.class})})}var C=n(8908),_=n(2666);function A(){return(0,v.jsxs)("div",{className:"copyright",children:[(0,v.jsx)(C.Z,{logo:_.Z}),(0,v.jsxs)("p",{className:"small",children:["2021 copyright ISR TEchnology. ",(0,v.jsx)("br",{})," all rights reserved."]})]})}var I=n.p+"static/media/googleMapsIconDark.727df924abc5848b7d7b092e725b2f13.svg";var S=n.p+"static/media/wazeIconDark.94c415aaba3d1909e2538e9cb9aa3189.svg";var Y=n.p+"static/media/googleMapsIconLight.a2e13ddea93c770fadc789eed67b2072.svg";var z=n.p+"static/media/wazeIconLight.3559451ea4cb09f6c5be398f03a4efb2.svg";var L=n.p+"static/media/linkedinIcon.427e0a8bacb5f7d5ac8a62b233a115ce.svg";var R=n.p+"static/media/facebookIcon.0d724a3844c289cb3e968938f68f3515.svg";var T=n.p+"static/media/instagramIcon.d7ee05ebe3871f8d97ba0fed6aba6086.svg";var D=n.p+"static/media/youtubeIcon.d97eb5d786ed081287ac728371dd7672.svg";var M=n.p+"static/media/imnotLogoLight.7ac0ca76fe9662b0d0be086dee0c1772.svg";var O=n.p+"static/media/imnotLogoDark.f865781a7f493fcea8fa832565021314.svg",E=n(180);function F(){var e=(0,r.useContext)(s.I).themeColorObj[0];return(0,v.jsxs)("section",{className:"contact",id:"contact",children:[(0,v.jsxs)("div",{className:"container",children:[(0,v.jsxs)("div",{className:"section-intro",children:[(0,v.jsx)(t.Z,{h1:"contact, navigation & social media"}),(0,v.jsx)(c.Z,{fileName:"contact.md"})]}),(0,v.jsx)(Z,{}),(0,v.jsxs)("div",{className:"contact-info",children:[(0,v.jsxs)("div",{className:"location-navigation",children:[(0,v.jsx)(p.Z,{h2:"Location & Navigation"}),(0,v.jsxs)("div",{className:"address-navigation",children:[(0,v.jsxs)("div",{className:"address",children:[(0,v.jsx)(w,{h3:"Address"}),(0,v.jsxs)("p",{children:["701 Brickell Avenue",(0,v.jsx)("br",{}),"Suite 1550",(0,v.jsx)("br",{}),"Miami, FL 33131"]}),(0,v.jsxs)("p",{children:["+1 305 328 9110",(0,v.jsx)("br",{}),"contact@isr-technology.com"]})]}),(0,v.jsxs)("div",{className:"navigation",children:[(0,v.jsx)(w,{h3:"Navigation"}),(0,v.jsxs)("div",{className:"navigation-icons",children:["light"===e?(0,v.jsx)("a",{href:"https://www.google.com/maps/place/701+Brickell+Ave,+Miami,+FL+33131,+USA/@25.7668374,-80.1909157,17z/data=!3m1!4b1!4m5!3m4!1s0x88d9b682ea3a24d1:0x33476300065862a2!8m2!3d25.7668326!4d-80.188727",target:"_blank",rel:"noopener noreferrer",children:(0,v.jsx)(N.Z,{icon:Y})}):(0,v.jsx)("a",{href:"https://www.google.com/maps/place/701+Brickell+Ave,+Miami,+FL+33131,+USA/@25.7668374,-80.1909157,17z/data=!3m1!4b1!4m5!3m4!1s0x88d9b682ea3a24d1:0x33476300065862a2!8m2!3d25.7668326!4d-80.188727",target:"_blank",rel:"noopener noreferrer",children:(0,v.jsx)(N.Z,{icon:I})}),"light"===e?(0,v.jsx)("a",{href:"https://ul.waze.com/ul?place=ChIJ0SQ66oK22YgRomJYBgBjRzM&ll=25.76683260%2C-80.18872700&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location",target:"_blank",rel:"noopener noreferrer",children:(0,v.jsx)(N.Z,{icon:z})}):(0,v.jsx)("a",{href:"https://ul.waze.com/ul?place=ChIJ0SQ66oK22YgRomJYBgBjRzM&ll=25.76683260%2C-80.18872700&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location",target:"_blank",rel:"noopener noreferrer",children:(0,v.jsx)(N.Z,{icon:S})})]})]})]})]}),(0,v.jsxs)("div",{className:"social-media",children:[(0,v.jsx)(p.Z,{h2:"Follow Us"}),(0,v.jsxs)("div",{className:"social-media-icons",children:[(0,v.jsx)("a",{href:"https://www.linkedin.com/company/isr-technology",target:"_blank",rel:"noopener noreferrer",children:(0,v.jsx)(k,{icon:L})}),(0,v.jsx)("a",{href:"https://www.facebook.com/Isr-Technology-104523352137948",target:"_blank",rel:"noopener noreferrer",children:(0,v.jsx)(k,{icon:R})}),(0,v.jsx)("a",{href:"https://www.instagram.com/isr_technology/",target:"_blank",rel:"noopener noreferrer",children:(0,v.jsx)(k,{icon:T})}),(0,v.jsx)("a",{href:"http://www.instagram.com/isr_technology/",target:"_blank",rel:"noopener noreferrer",children:(0,v.jsx)(k,{icon:D})})]})]}),(0,v.jsxs)("div",{className:"footer",children:[(0,v.jsxs)("div",{className:"design-and-development",children:[(0,v.jsx)("p",{className:"caption",children:"design & development"}),(0,v.jsx)("a",{href:"http://imnot.agency",target:"_blank",rel:"noopener noreferrer",children:"light"===e?(0,v.jsx)(C.Z,{logo:M,class:"imnot"}):(0,v.jsx)(C.Z,{logo:O,class:"imnot"})})]}),(0,v.jsx)(A,{})]})]})]}),(0,v.jsx)(N.Z,{icon:E.Z,class:"s-shape-down"})]})}},9371:function(e,a,n){"use strict";n.d(a,{Z:function(){return s}});n(2791);var r=n(184);function s(e){return(0,r.jsx)("div",{className:"icon ".concat(e.class),children:(0,r.jsx)("img",{src:e.icon,alt:"icon"})})}},1585:function(e,a,n){"use strict";n.d(a,{Z:function(){return o}});var r=n(885),s=n(2791),t=n(2773),c=n(184);function o(e){var a=e.fileName,o=(0,s.useState)(e.fileName),i=(0,r.Z)(o,2),l=i[0],d=i[1],m=(0,s.useState)(""),u=(0,r.Z)(m,2),h=u[0],f=u[1];return(0,s.useEffect)((function(){d(a),n(7265)("./".concat(l)).then((function(e){fetch(e.default).then((function(e){return e.text()})).then((function(e){return f(e)})).catch((function(e){return console.log(e)}))})).catch((function(e){return console.log(e)}))}),[l,a]),(0,c.jsx)("div",{className:"markdown",children:(0,c.jsx)(t.Z,{children:h})})}},2460:function(e,a,n){"use strict";n.d(a,{Z:function(){return s}});n(2791);var r=n(184);function s(e){return(0,r.jsx)("p",{className:"paragraph",children:e.paragraph})}},9052:function(e,a,n){"use strict";n.d(a,{Z:function(){return s}});n(2791);var r=n(184);function s(e){return(0,r.jsx)("h1",{children:e.h1})}},4100:function(e,a,n){"use strict";n.d(a,{Z:function(){return s}});n(2791);var r=n(184);function s(e){return(0,r.jsx)("h2",{children:e.h2})}},3380:function(e,a,n){"use strict";n.d(a,{Z:function(){return c}});n(2791);var r=n(9052),s=n(2460),t=n(184);function c(e){var a=e.h1,n=e.paragraph;return(0,t.jsxs)("div",{className:"section-intro",children:[(0,t.jsx)(r.Z,{h1:a}),(0,t.jsx)(s.Z,{paragraph:n})]})}},7265:function(e,a,n){var r={"./audio-visual.md":[1576,374],"./cloud-services.md":[2108,108],"./contact.md":[2389,389],"./cybersecurity.md":[5894,894],"./managed-it.md":[3510,510],"./networking.md":[2146,146],"./services.md":[7008,8],"./smart-home-automation.md":[599,599],"./surveillance-systems.md":[5846,846],"./voip.md":[9252,252]};function s(e){if(!n.o(r,e))return Promise.resolve().then((function(){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}));var a=r[e],s=a[0];return n.e(a[1]).then((function(){return n.t(s,17)}))}s.keys=function(){return Object.keys(r)},s.id=7265,e.exports=s}}]);
//# sourceMappingURL=325.95a68914.chunk.js.map