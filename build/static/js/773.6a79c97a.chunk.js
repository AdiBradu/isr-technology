"use strict";(self.webpackChunkisr_technology=self.webpackChunkisr_technology||[]).push([[773],{2773:function(n,e,t){var r=t(885),o=t(2791);function i(){return(i=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}var c=/[\'\"]/,u=["children","options"],a=["allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","cellPadding","cellSpacing","charSet","className","classId","colSpan","contentEditable","contextMenu","crossOrigin","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hrefLang","inputMode","keyParams","keyType","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","radioGroup","readOnly","rowSpan","spellCheck","srcDoc","srcLang","srcSet","tabIndex","useMap"].reduce((function(n,e){return n[e.toLowerCase()]=e,n}),{for:"htmlFor"}),l={amp:"&",apos:"'",gt:">",lt:"<",nbsp:"\xa0",quot:"\u201c"},f=["style","script"],s=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,p=/mailto:/i,g=/\n{2,}$/,d=/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,y=/^ *> ?/gm,h=/^ {2,}\n/,m=/^(?:( *[-*_]) *){3,}(?:\n *)+\n/,v=/^\s*(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n *)+\n?/,k=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,_=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,x=/^(?:\n *)*\n/,H=/\r\n?/g,b=/^\[\^([^\]]+)](:.*)\n/,I=/^\[\^([^\]]+)]/,A=/\f/g,S=/^\s*?\[(x|\s)\]/,w=/^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,M=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,E=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,O=/&([a-z]+);/g,C=/^<!--[\s\S]*?(?:-->)/,L=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,G=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,$=/^\{.*\}$/,z=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,T=/^<([^ >]+@[^ >]+)>/,X=/^<([^ >]+:\/[^ >]+)>/,W=/ *\n+$/,R=/(?:^|\n)( *)$/,B=/-([a-z])?/gi,N=/^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,U=/^\[([^\]]*)\]:\s*(\S+)\s*("([^"]*)")?/,j=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,D=/^\[([^\]]*)\] ?\[([^\]]*)\]/,P=/(\[|\])/g,Z=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,F=/\t/g,q=/^ *\| */,V=/(^ *\||\| *$)/g,Q=/ *$/,J=/^ *:-+: *$/,K=/^ *:-+ *$/,Y=/^ *-+: *$/,nn=/^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,en=/^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,tn=/^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,rn=/^\\([^0-9A-Za-z\s])/,on=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,cn=/^\n+/,un=/^([ \t]*)/,an=/\\([^0-9A-Z\s])/gi,ln=new RegExp("^( *)((?:[*+-]|\\d+\\.)) +"),fn=new RegExp("^( *)((?:[*+-]|\\d+\\.)) +[^\\n]*(?:\\n(?!\\1(?:[*+-]|\\d+\\.) )[^\\n]*)*(\\n|$)","gm"),sn=new RegExp("^( *)((?:[*+-]|\\d+\\.)) [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1(?:[*+-]|\\d+\\.) (?!(?:[*+-]|\\d+\\.) ))\\n*|\\s*\\n*$)"),pn="(?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*",gn=new RegExp("^\\[("+pn+")\\]\\(\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"),dn=new RegExp("^!\\[("+pn+")\\]\\(\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"),yn=[d,k,v,w,M,C,fn,sn,N],hn=[].concat(yn,[/^[^\n]+(?:  \n|\n{2,})/,E,G]);function mn(n){return n.replace(/[\xc0\xc1\xc2\xc3\xc4\xc5\xe0\xe1\xe2\xe3\xe4\xe5\xe6\xc6]/g,"a").replace(/[\xe7\xc7]/g,"c").replace(/[\xf0\xd0]/g,"d").replace(/[\xc8\xc9\xca\xcb\xe9\xe8\xea\xeb]/g,"e").replace(/[\xcf\xef\xce\xee\xcd\xed\xcc\xec]/g,"i").replace(/[\xd1\xf1]/g,"n").replace(/[\xf8\xd8\u0153\u0152\xd5\xf5\xd4\xf4\xd3\xf3\xd2\xf2]/g,"o").replace(/[\xdc\xfc\xdb\xfb\xda\xfa\xd9\xf9]/g,"u").replace(/[\u0178\xff\xdd\xfd]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function vn(n){return Y.test(n)?"right":J.test(n)?"center":K.test(n)?"left":null}function kn(n,e,t){var r=t.t;t.t=!0;var o=e(n.trim(),t);t.t=r;var i=[[]];return o.forEach((function(n,e){"tableSeparator"===n.type?0!==e&&e!==o.length-1&&i.push([]):("text"!==n.type||null!=o[e+1]&&"tableSeparator"!==o[e+1].type||(n.content=n.content.replace(Q,"")),i[i.length-1].push(n))})),i}function _n(n,e,t){t.o=!0;var r=kn(n[1],e,t),o=n[2].replace(V,"").split("|").map(vn),i=function(n,e,t){return n.trim().split("\n").map((function(n){return kn(n,e,t)}))}(n[3],e,t);return t.o=!1,{align:o,cells:i,header:r,type:"table"}}function xn(n,e){return null==n.align[e]?{}:{textAlign:n.align[e]}}function Hn(n){return function(e,t){return t.o?n.exec(e):null}}function bn(n){return function(e,t){return t.o||t.u?n.exec(e):null}}function In(n){return function(e,t){return t.o||t.u?null:n.exec(e)}}function An(n){return function(e){return n.exec(e)}}function Sn(n,e,t){if(e.o||e.u)return null;if(t&&!t.endsWith("\n"))return null;var r="";n.split("\n").every((function(n){return!yn.some((function(e){return e.test(n)}))&&(r+=n+"\n",n.trim())}));var o=r.trimEnd();return""==o?null:[r,o]}function wn(n){try{if(decodeURIComponent(n).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data):/i))return null}catch(n){return null}return n}function Mn(n){return n.replace(an,"$1")}function En(n,e,t){var r=t.o||!1,o=t.u||!1;t.o=!0,t.u=!0;var i=n(e,t);return t.o=r,t.u=o,i}function On(n,e,t){var r=t.o||!1,o=t.u||!1;t.o=!1,t.u=!0;var i=n(e,t);return t.o=r,t.u=o,i}function Cn(n,e,t){return t.o=!1,n(e+"\n\n",t)}var Ln,Gn,$n=function(n,e,t){return{content:En(e,n[1],t)}};function zn(){return{}}function Tn(){return null}function Xn(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return e.filter(Boolean).join(" ")}function Wn(n,e,t){for(var r=n,o=e.split(".");o.length&&void 0!==(r=r[o[0]]);)o.shift();return r||t}function Rn(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.overrides=e.overrides||{},e.slugify=e.slugify||mn,e.namedCodesToUnicode=e.namedCodesToUnicode?i({},l,e.namedCodesToUnicode):l;var t=e.createElement||o.createElement;function u(n,r){for(var o=Wn(e.overrides,"".concat(n,".props"),{}),c=arguments.length,u=new Array(c>2?c-2:0),a=2;a<c;a++)u[a-2]=arguments[a];return t.apply(void 0,[function(n,e){var t=Wn(e,n);return t?"function"==typeof t||"object"==typeof t&&"render"in t?t:Wn(e,"".concat(n,".component"),n):n}(n,e.overrides),i({},r,o,{className:Xn(null==r?void 0:r.className,o.className)||void 0})].concat(u))}function V(n){var t=!1;e.forceInline?t=!0:e.forceBlock||(t=!1===Z.test(n));for(var r=vn(yn(t?n:"".concat(n.trimEnd().replace(cn,""),"\n\n"),{o:t}));"string"==typeof r[r.length-1]&&!r[r.length-1].trim();)r.pop();if(null===e.wrapper)return r;var i,c=e.wrapper||(t?"span":"div");if(r.length>1||e.forceWrapper)i=r;else{if(1===r.length)return"string"==typeof(i=r[0])?u("span",{key:"outer"},i):i;i=null}return o.createElement(c,{key:"outer"},i)}function Q(n){var e=n.match(s);return e?e.reduce((function(n,e,t){var r,i=e.indexOf("=");if(-1!==i){var u=(r=e.slice(0,i),-1!==r.indexOf("-")&&null===r.match(L)&&(r=r.replace(B,(function(n,e){return e.toUpperCase()}))),r).trim(),l=function(n){return n?(c.test(n.charAt(0))&&(n=n.substr(1)),c.test(n.charAt(n.length-1))&&(n=n.substr(0,n.length-1)),n):""}(e.slice(i+1).trim()),f=a[u]||u,s=n[f]=function(n,e){return"style"===n?e.split(/;\s?/).reduce((function(n,e){var t=e.slice(0,e.indexOf(":"));return n[t.replace(/(-[a-z])/g,(function(n){return n[1].toUpperCase()}))]=e.slice(t.length+1).trim(),n}),{}):"href"===n?wn(e):(e.match($)&&(e=e.slice(1,e.length-1)),"true"===e||"false"!==e&&e)}(u,l);"string"==typeof s&&(E.test(s)||G.test(s))&&(n[f]=o.cloneElement(V(s.trim()),{key:t}))}else"style"!==e&&(n[a[e]||e]=!0);return n}),{}):void 0}var J=[],K={},Y={blockQuote:{i:In(d),l:Ln.HIGH,_:function(n,e,t){return{content:e(n[0].replace(y,""),t)}},p:function(n,e,t){return u("blockquote",{key:t.g},e(n.content,t))}},breakLine:{i:An(h),l:Ln.HIGH,_:zn,p:function(n,e,t){return u("br",{key:t.g})}},breakThematic:{i:In(m),l:Ln.HIGH,_:zn,p:function(n,e,t){return u("hr",{key:t.g})}},codeBlock:{i:In(k),l:Ln.MAX,_:function(n){return{content:n[0].replace(/^ {4}/gm,"").replace(/\n+$/,""),lang:void 0}},p:function(n,e,t){return u("pre",{key:t.g},u("code",{className:n.lang?"lang-".concat(n.lang):""},n.content))}},codeFenced:{i:In(v),l:Ln.MAX,_:function(n){return{content:n[3],lang:n[2]||void 0,type:"codeBlock"}}},codeInline:{i:bn(_),l:Ln.LOW,_:function(n){return{content:n[2]}},p:function(n,e,t){return u("code",{key:t.g},n.content)}},footnote:{i:In(b),l:Ln.MAX,_:function(n){return J.push({footnote:n[2],identifier:n[1]}),{}},p:Tn},footnoteReference:{i:Hn(I),l:Ln.HIGH,_:function(n){return{content:n[1],target:"#".concat(e.slugify(n[1]))}},p:function(n,e,t){return u("a",{key:t.g,href:wn(n.target)},u("sup",{key:t.g},n.content))}},gfmTask:{i:Hn(S),l:Ln.HIGH,_:function(n){return{completed:"x"===n[1].toLowerCase()}},p:function(n,e,t){return u("input",{checked:n.completed,key:t.g,readOnly:!0,type:"checkbox"})}},heading:{i:In(w),l:Ln.HIGH,_:function(n,t,r){return{content:En(t,n[2],r),id:e.slugify(n[2]),level:n[1].length}},p:function(n,e,t){return n.tag="h".concat(n.level),u(n.tag,{id:n.id,key:t.g},e(n.content,t))}},headingSetext:{i:In(M),l:Ln.MAX,_:function(n,e,t){return{content:En(e,n[1],t),level:"="===n[2]?1:2,type:"heading"}}},htmlComment:{i:An(C),l:Ln.HIGH,_:function(){return{}},p:Tn},image:{i:bn(dn),l:Ln.HIGH,_:function(n){return{alt:n[1],target:Mn(n[2]),title:n[3]}},p:function(n,e,t){return u("img",{key:t.g,alt:n.alt||void 0,title:n.title||void 0,src:wn(n.target)})}},link:{i:Hn(gn),l:Ln.LOW,_:function(n,e,t){return{content:On(e,n[1],t),target:Mn(n[2]),title:n[3]}},p:function(n,e,t){return u("a",{key:t.g,href:wn(n.target),title:n.title},e(n.content,t))}},linkAngleBraceStyleDetector:{i:Hn(X),l:Ln.MAX,_:function(n){return{content:[{content:n[1],type:"text"}],target:n[1],type:"link"}}},linkBareUrlDetector:{i:function(n,e){return e.m?null:Hn(z)(n,e)},l:Ln.MAX,_:function(n){return{content:[{content:n[1],type:"text"}],target:n[1],title:void 0,type:"link"}}},linkMailtoDetector:{i:Hn(T),l:Ln.MAX,_:function(n){var e=n[1],t=n[1];return p.test(t)||(t="mailto:"+t),{content:[{content:e.replace("mailto:",""),type:"text"}],target:t,type:"link"}}},list:{i:function(n,e,t){var r=R.exec(t);return!r||!e.h&&e.o?null:sn.exec(n=r[1]+n)},l:Ln.HIGH,_:function(n,e,t){var r=n[2],o=r.length>1,i=o?+r:void 0,c=n[0].replace(g,"\n").match(fn),u=!1;return{items:c.map((function(n,r){var o=ln.exec(n)[0].length,i=new RegExp("^ {1,"+o+"}","gm"),a=n.replace(i,"").replace(ln,""),l=r===c.length-1,f=-1!==a.indexOf("\n\n")||l&&u;u=f;var s,p=t.o,g=t.h;t.h=!0,f?(t.o=!1,s=a.replace(W,"\n\n")):(t.o=!0,s=a.replace(W,""));var d=e(s,t);return t.o=p,t.h=g,d})),ordered:o,start:i}},p:function(n,e,t){return u(n.ordered?"ol":"ul",{key:t.g,start:n.start},n.items.map((function(n,r){return u("li",{key:r},e(n,t))})))}},newlineCoalescer:{i:In(x),l:Ln.LOW,_:zn,p:function(){return"\n"}},paragraph:{i:Sn,l:Ln.LOW,_:$n,p:function(n,e,t){return u("p",{key:t.g},e(n.content,t))}},ref:{i:Hn(U),l:Ln.MAX,_:function(n){return K[n[1]]={target:n[2],title:n[4]},{}},p:Tn},refImage:{i:bn(j),l:Ln.MAX,_:function(n){return{alt:n[1]||void 0,ref:n[2]}},p:function(n,e,t){return u("img",{key:t.g,alt:n.alt,src:wn(K[n.ref].target),title:K[n.ref].title})}},refLink:{i:Hn(D),l:Ln.MAX,_:function(n,e,t){return{content:e(n[1],t),fallbackContent:e(n[0].replace(P,"\\$1"),t),ref:n[2]}},p:function(n,e,t){return K[n.ref]?u("a",{key:t.g,href:wn(K[n.ref].target),title:K[n.ref].title},e(n.content,t)):u("span",{key:t.g},e(n.fallbackContent,t))}},table:{i:In(N),l:Ln.HIGH,_:_n,p:function(n,e,t){return u("table",{key:t.g},u("thead",null,u("tr",null,n.header.map((function(r,o){return u("th",{key:o,style:xn(n,o)},e(r,t))})))),u("tbody",null,n.cells.map((function(r,o){return u("tr",{key:o},r.map((function(r,o){return u("td",{key:o,style:xn(n,o)},e(r,t))})))}))))}},tableSeparator:{i:function(n,e){return e.t?q.exec(n):null},l:Ln.HIGH,_:function(){return{type:"tableSeparator"}},p:function(){return" | "}},text:{i:An(on),l:Ln.MIN,_:function(n){return{content:n[0].replace(O,(function(n,t){return e.namedCodesToUnicode[t]?e.namedCodesToUnicode[t]:n}))}},p:function(n){return n.content}},textBolded:{i:bn(nn),l:Ln.MED,_:function(n,e,t){return{content:e(n[2],t)}},p:function(n,e,t){return u("strong",{key:t.g},e(n.content,t))}},textEmphasized:{i:bn(en),l:Ln.LOW,_:function(n,e,t){return{content:e(n[2],t)}},p:function(n,e,t){return u("em",{key:t.g},e(n.content,t))}},textEscaped:{i:bn(rn),l:Ln.HIGH,_:function(n){return{content:n[1],type:"text"}}},textStrikethroughed:{i:bn(tn),l:Ln.LOW,_:$n,p:function(n,e,t){return u("del",{key:t.g},e(n.content,t))}}};!0!==e.disableParsingRawHTML&&(Y.htmlBlock={i:An(E),l:Ln.HIGH,_:function(n,e,t){var o,i=n[3].match(un),c=(0,r.Z)(i,2)[1],u=new RegExp("^".concat(c),"gm"),a=n[3].replace(u,""),l=(o=a,hn.some((function(n){return n.test(o)}))?Cn:En),s=n[1].toLowerCase(),p=-1!==f.indexOf(s);t.m=t.m||"a"===s;var g=p?n[3]:l(e,a,t);return t.m=!1,{attrs:Q(n[2]),content:g,noInnerParse:p,tag:p?s:n[1]}},p:function(n,e,t){return u(n.tag,i({key:t.g},n.attrs),n.noInnerParse?n.content:e(n.content,t))}},Y.htmlSelfClosing={i:An(G),l:Ln.HIGH,_:function(n){return{attrs:Q(n[2]||""),tag:n[1]}},p:function(n,e,t){return u(n.tag,i({},n.attrs,{key:t.g}))}});var an,pn,yn=function(n){var e=Object.keys(n);function t(r,o){for(var i=[],c="";r;)for(var u=0;u<e.length;){var a=e[u],l=n[a],f=l.i(r,o,c);if(f){var s=f[0];r=r.substring(s.length);var p=l._(f,t,o);null==p.type&&(p.type=a),i.push(p),c=s;break}u++}return i}return e.sort((function(e,t){var r=n[e].l,o=n[t].l;return r!==o?r-o:e<t?-1:1})),function(n,e){return t(function(n){return n.replace(H,"\n").replace(A,"").replace(F,"    ")}(n),e)}}(Y),vn=(an=Y,pn=function(n,e,t){return an[n.type].p(n,e,t)},function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(Array.isArray(e)){for(var r=t.g,o=[],i=!1,c=0;c<e.length;c++){t.g=c;var u=n(e[c],t),a="string"==typeof u;a&&i?o[o.length-1]+=u:null!==u&&o.push(u),i=a}return t.g=r,o}return pn(e,n,t)}),kn=V(n);return J.length?u("div",null,kn,u("footer",{key:"footer"},J.map((function(n){return u("div",{id:e.slugify(n.identifier),key:n.identifier},n.identifier,vn(yn(n.footnote,{o:!0})))})))):kn}(Gn=Ln||(Ln={}))[Gn.MAX=0]="MAX",Gn[Gn.HIGH=1]="HIGH",Gn[Gn.MED=2]="MED",Gn[Gn.LOW=3]="LOW",Gn[Gn.MIN=4]="MIN",e.Z=function(n){var e=n.children,t=n.options,r=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)e.indexOf(t=i[r])>=0||(o[t]=n[t]);return o}(n,u);return o.cloneElement(Rn(e,t),r)}}}]);
//# sourceMappingURL=773.6a79c97a.chunk.js.map