"use strict";(self.webpackChunkisr_technology=self.webpackChunkisr_technology||[]).push([[325],{325:function(e,a,s){s.r(a),s.d(a,{default:function(){return F}});var r=s(2791),n=s(6227),t=s(1390),o=s(9052),i=s(1585),l=s(5861),c=s(4942),d=s(1413),m=s(885),h=s(7757),u=s.n(h),g=s(4569),p=s.n(g),x=s(3148),j=s(4100),v=s(184);function f(e){var a=e.label,s=e.name,r=e.type,n=e.value,t=e.placeholder,o=e.onChange,i=e.error;return(0,v.jsxs)("div",{className:"input",children:[(0,v.jsx)("label",{children:(0,v.jsx)("p",{className:"caption",children:a})}),(0,v.jsx)("input",{type:r,placeholder:t,onChange:o,value:n,name:s}),(0,v.jsx)("p",{className:"small error",children:i})]})}function b(e){var a=e.label,s=e.name,r=(e.type,e.value),n=e.placeholder,t=e.onChange,o=e.error;return(0,v.jsxs)("div",{className:"textarea",children:[(0,v.jsx)("label",{children:(0,v.jsx)("p",{className:"caption",children:a})}),(0,v.jsx)("textarea",{placeholder:n,onChange:t,name:s,value:r}),(0,v.jsx)("p",{className:"small error",children:o})]})}function y(e){var a=e.type,s=e.text,r=e.status,n=e.bgColor,t=e.color,o=e.width;return(0,v.jsx)("button",{className:"form-send-button",type:a,style:{backgroundColor:n,color:t,width:o},children:(0,v.jsx)("p",{className:"btn",children:s||r})})}var w=s(8007);function N(){var e={name:"",email:"",message:""},a=(0,r.useState)(e),s=(0,m.Z)(a,2),n=s[0],o=s[1],i=(0,r.useState)({}),h=(0,m.Z)(i,2),g=h[0],N=h[1],k=(0,r.useState)(!1),Z=(0,m.Z)(k,2),C=Z[0],_=Z[1],I=(0,r.useState)(!1),A=(0,m.Z)(I,2),S=A[0],z=A[1],Y=(0,r.useState)("SEND INQUIRY"),M=(0,m.Z)(Y,2),L=M[0],R=M[1],T=(0,r.useContext)(t.I).themeColorObj[0],D=(0,r.useRef)(),B=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,O=function(e){var a=e.target,s=a.name,r=a.value;o((0,d.Z)((0,d.Z)({},n),{},(0,c.Z)({},s,r)))},E=function(){var e=(0,l.Z)(u().mark((function e(){var a,s,r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.current.executeAsync();case 3:return a=e.sent,s=n.name,r=n.email,t=n.message,e.next=7,p().post("/contact",{name:s,email:r,message:t,token:a}).then((function(e){return console.log(e)}));case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return(0,r.useEffect)((function(){0===Object.keys(g).length&&C?z(!0):0!==Object.keys(g).length&&C&&R("TRY AGAIN!")}),[g,C]),(0,r.useEffect)((function(){S&&(R("THANK YOU!"),E(),setTimeout((function(){R("SEND INQUIRY"),_(!1),z(!1),o(e)}),3e3))}),[S]),(0,v.jsxs)("form",{onSubmit:function(e){e.preventDefault(),_(!0),N(function(e){var a={};return e.name||(a.name="Your name is required!"),e.email?B.test(e.email)||(a.email="Your email is not valid!"):a.email="Your email is required!",e.message||(a.message="A message is required!"),a}(n))},children:[(0,v.jsx)(j.Z,{h2:"Send your inquiry"}),(0,v.jsx)(f,{label:"name",type:"text",placeholder:"Your name",onChange:O,name:"name",value:n.name,error:g.name}),(0,v.jsx)(f,{label:"email",type:"email",placeholder:"Your email address",onChange:O,name:"email",value:n.email,error:g.email}),(0,v.jsx)(b,{label:"message",placeholder:"Please type your message",onChange:O,name:"message",value:n.message,error:g.message}),(0,v.jsx)("div",{children:(0,v.jsxs)("p",{className:"small",children:["This site is protected by reCAPTCHA and the Google",(0,v.jsxs)("a",{href:"https://policies.google.com/privacy",style:{color:"".concat(x.Z.secondaryColorDark)},children:[" ","Privacy Policy"]})," ","and",(0,v.jsxs)("a",{href:"https://policies.google.com/terms",style:{color:"".concat(x.Z.secondaryColorDark)},children:[" ","Terms of Service"]})," ","apply."]})}),(0,v.jsx)(y,{type:"submit",status:L,bgColor:x.Z.secondaryColor,colors:x.Z.primaryColor,width:"100%"}),(0,v.jsx)(w.Z,{ref:D,sitekey:"6LeMJE4eAAAAAMTccweQVhjvYKhRjfAO9wrVFsQI",theme:"light"===T?"light":"dark",size:"invisible"})]})}function k(e){return(0,v.jsx)("h3",{children:e.h3})}var Z=s(9371);function C(e){return(0,v.jsx)("address",{className:"social-media-icon",children:(0,v.jsx)("img",{src:e.icon,alt:"social-media-icon",className:e.class})})}var _=s(8908),I=s(2666);function A(){return(0,v.jsxs)("div",{className:"copyright",children:[(0,v.jsx)(_.Z,{logo:I.Z}),(0,v.jsxs)("p",{className:"small",children:["2021 copyright ISR TEchnology. ",(0,v.jsx)("br",{})," all rights reserved."]})]})}var S=s.p+"static/media/googleMapsIconDark.727df924abc5848b7d7b092e725b2f13.svg";var z=s.p+"static/media/wazeIconDark.94c415aaba3d1909e2538e9cb9aa3189.svg";var Y=s.p+"static/media/googleMapsIconLight.a2e13ddea93c770fadc789eed67b2072.svg";var M=s.p+"static/media/wazeIconLight.3559451ea4cb09f6c5be398f03a4efb2.svg";var L=s.p+"static/media/linkedinIcon.427e0a8bacb5f7d5ac8a62b233a115ce.svg";var R=s.p+"static/media/facebookIcon.0d724a3844c289cb3e968938f68f3515.svg";var T=s.p+"static/media/instagramIcon.d7ee05ebe3871f8d97ba0fed6aba6086.svg";var D=s.p+"static/media/youtubeIcon.d97eb5d786ed081287ac728371dd7672.svg";var B=s.p+"static/media/imnotLogoLight.7ac0ca76fe9662b0d0be086dee0c1772.svg";var O=s.p+"static/media/imnotLogoDark.f865781a7f493fcea8fa832565021314.svg",E=s(180);function F(){var e=(0,r.useContext)(t.I),a=e.themeColorObj,s=e.isMD,l=a[0];return(0,v.jsxs)("section",{className:"contact",id:"contact",children:[(0,v.jsxs)(n.Z,{display:"grid",maxWidth:"1200px",columns:s?"repeat(4, 1fr)":"repeat(1, 1fr)",rows:"repeat(3, auto)",classe:"lp-container",children:[(0,v.jsxs)("div",{className:"section-intro",children:[(0,v.jsx)(o.Z,{h1:"contact, navigation & social media"}),(0,v.jsx)(i.Z,{fileName:"contact.md"})]}),(0,v.jsx)(N,{}),(0,v.jsxs)("div",{className:"contact-info",children:[(0,v.jsxs)("div",{className:"location-navigation",children:[(0,v.jsx)(j.Z,{h2:"Location & Navigation"}),(0,v.jsxs)("div",{className:"address-navigation",children:[(0,v.jsxs)("div",{className:"address",children:[(0,v.jsx)(k,{h3:"Address"}),(0,v.jsxs)("p",{children:["701 Brickell Avenue",(0,v.jsx)("br",{}),"Suite 1550",(0,v.jsx)("br",{}),"Miami, FL 33131"]}),(0,v.jsxs)("p",{children:["+1 305 328 9110",(0,v.jsx)("br",{}),"contact@isr-technology.com"]})]}),(0,v.jsxs)("div",{className:"navigation",children:[(0,v.jsx)(k,{h3:"Navigation"}),(0,v.jsxs)("div",{className:"navigation-icons",children:["light"===l?(0,v.jsx)("a",{href:"https://www.google.com/maps/place/701+Brickell+Ave,+Miami,+FL+33131,+USA/@25.7668374,-80.1909157,17z/data=!3m1!4b1!4m5!3m4!1s0x88d9b682ea3a24d1:0x33476300065862a2!8m2!3d25.7668326!4d-80.188727",target:"_blank",rel:"noopener noreferrer","aria-label":"Google Maps",children:(0,v.jsx)(Z.Z,{icon:Y})}):(0,v.jsx)("a",{href:"https://www.google.com/maps/place/701+Brickell+Ave,+Miami,+FL+33131,+USA/@25.7668374,-80.1909157,17z/data=!3m1!4b1!4m5!3m4!1s0x88d9b682ea3a24d1:0x33476300065862a2!8m2!3d25.7668326!4d-80.188727",target:"_blank",rel:"noopener noreferrer","aria-label":"Google Maps",children:(0,v.jsx)(Z.Z,{icon:S})}),"light"===l?(0,v.jsx)("a",{href:"https://ul.waze.com/ul?place=ChIJ0SQ66oK22YgRomJYBgBjRzM&ll=25.76683260%2C-80.18872700&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location",target:"_blank",rel:"noopener noreferrer","aria-label":"Navigate with Waze",children:(0,v.jsx)(Z.Z,{icon:M})}):(0,v.jsx)("a",{href:"https://ul.waze.com/ul?place=ChIJ0SQ66oK22YgRomJYBgBjRzM&ll=25.76683260%2C-80.18872700&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location",target:"_blank",rel:"noopener noreferrer","aria-label":"Navigate with Waze",children:(0,v.jsx)(Z.Z,{icon:z})})]})]})]})]}),(0,v.jsxs)("div",{className:"social-media",children:[(0,v.jsx)(j.Z,{h2:"Follow Us"}),(0,v.jsxs)("div",{className:"social-media-icons",children:[(0,v.jsx)("a",{href:"https://www.linkedin.com/company/isr-technology",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",children:(0,v.jsx)(C,{icon:L})}),(0,v.jsx)("a",{href:"https://www.facebook.com/Isr-Technology-104523352137948",target:"_blank",rel:"noopener noreferrer","aria-label":"Facebook",children:(0,v.jsx)(C,{icon:R})}),(0,v.jsx)("a",{href:"https://www.instagram.com/isr_technology/",target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram",children:(0,v.jsx)(C,{icon:T})}),(0,v.jsx)("a",{href:"http://www.instagram.com/isr_technology/",target:"_blank",rel:"noopener noreferrer","aria-label":"Youtube",children:(0,v.jsx)(C,{icon:D})})]})]}),(0,v.jsxs)("div",{className:"footer",children:[(0,v.jsxs)("div",{className:"design-and-development",children:[(0,v.jsx)("p",{className:"caption",children:"design & development"}),(0,v.jsx)("a",{href:"http://imnot.agency",target:"_blank",rel:"noopener noreferrer","aria-label":"IMNOT Agency",children:"light"===l?(0,v.jsx)(_.Z,{logo:B,class:"imnot"}):(0,v.jsx)(_.Z,{logo:O,class:"imnot"})})]}),(0,v.jsx)(A,{})]})]})]}),(0,v.jsx)(Z.Z,{icon:E.Z,class:"s-shape-down"})]})}},4100:function(e,a,s){s.d(a,{Z:function(){return n}});s(2791);var r=s(184);function n(e){var a=e.h2,s=e.classe;return(0,r.jsx)("h2",{className:s,children:a})}}}]);
//# sourceMappingURL=325.db67d71d.chunk.js.map