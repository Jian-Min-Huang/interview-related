// Copyright 2012 Google Inc. All rights reserved.
// Container Version: 1
(function(w,g){w[g]=w[g]||{};})(window,'google_tag_manager');(function(){






var mb=this;/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var nb=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,ob=function(a){if(null==a)return String(a);var b=nb.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},pb=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},ya=function(a){if(!a||"object"!=ob(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!pb(a,"constructor")&&!pb(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||pb(a,b)},R=function(a,b){var c=b||("array"==ob(a)?[]:{}),d;for(d in a)if(pb(a,d)){var e=a[d];"array"==ob(e)?("array"!=ob(c[d])&&(c[d]=[]),c[d]=R(e,c[d])):ya(e)?(ya(c[d])||(c[d]={}),c[d]=R(e,c[d])):c[d]=e}return c};var Ya=null,qb=Math.random(),rb=null,ma=null,Fa=!1,sb={},tb={},Ga={};var Ha,Ia,ub,vb,wb,xb,yb,zb,Ab,Bb,Cb,Db,Eb,Fb,V,Gb,Hb,Ib,Jb,Kb,Lb,Mb,Nb,Ob,Pb,Qb,Rb,Sb,Tb,Ub,Vb,Wb,Xb,Yb,Zb,$b,ac,bc,cc,dc,ec,fc,gc,hc,ic,jc,kc,lc,mc,nc,oc,pc,qc,rc,sc,tc,uc,vc,wc,xc,yc,zc,Ac,Bc,Cc,Dc,Ec,Fc,Gc,Hc,Ic,Jc,Kc,Lc,Mc,Nc,Oc,Pc,Qc,Rc,Sc,Tc,Uc,Vc,Wc,Xc,Yc,Zc,$c,ad,bd,cd,dd,ed,fd,gd,hd,id,jd,kd,ld,md,nd,od,pd,qd,rd,sd,td,ud,vd,wd,xd,yd,zd,Ad,Bd,Cd,Dd,Ed,Fd,Gd,Hd,Id,Jd,Kd,Ld,Md,Nd,Od,Pd,Qd,Rd,Sd,Td,Ud,Vd,Wd,Xd,Yd,Zd,$d,ae,be,ce,de,ee,fe,ge,he,ie,je,ke,le,me,ne,oe,pe,qe,re,se,te,ue,ve,we,xe,
ye,ze,Ae,Be,Ce,De,Ee,Fe,Ge,He,Ie,Je,Ke,Le,Me,Ne,Oe,Pe,Qe,Re,Se,Te,Ue,Ve,We,Xe,Ye,Ze,$e,af,bf,cf,df,ef,ff,gf,hf,jf,kf,lf,mf,nf,of,pf;
(function(){var a=function(a){return{toString:function(){return a}}};ub=a("");vb=a("");wb="";xb=a("");yb=a("");zb=a("");Ab=a("");Bb=a("");Cb=a("");Db=a("");Eb=a("");Fb=a("");V=a("");Gb=a("");Hb=a("");Ib=a("");
Jb=a("");Kb=a("");Lb=a("");Mb=a("");Nb=a("");Ob=a("");Pb=a("");Qb=a("");Rb=a("");Sb=a("");Tb=a("");Ub=a("");Vb=a("");Wb=a("");
Xb=a("");Yb=a("");Zb=a("");$b=a("");ac=a("");bc=a("");cc=a("0");dc=a("");ec=a("");fc=a("");gc=a("");hc=a("");ic=a("");jc=a("");kc=a("");lc=a("");mc=a("");
nc=a("");oc=a("");pc=a("");qc=a("");rc=a("");sc=a("");tc=a("");uc=a("");vc=a("");wc=a("");xc=a("");yc=a("");zc=a("");Ac=a("");Bc=a("");Cc=a("");Dc=a("");
Ec=a("");Fc=a("");Gc=a("");Hc=a("");Ic=a("");Jc=a("");Kc=a("");Lc=a("");Mc=a("");Nc=a("");Oc=a("");Pc=a("");Qc=a("");Rc=a("");Sc=a("");Tc=a("");
Uc=a("");Vc=a("");Wc=a("");Xc=a("");Yc=a("");Zc=a("");$c=a("");ad=a("");bd=a("");cd=a("");dd=a("");Ha=a("1");ed=a("");fd=a("3");gd=a("4");hd=a("");id=a("");
jd=a("");kd=a("");ld=a("");md=a("");nd=a("");od=a("");Ia=a("2");pd=a("");qd=a("");rd=a("");sd=a("");td=a("");ud=a("");vd=a("");wd=a("");xd=a("");yd=a("");zd=a("");Ad=a("");Bd=a("");
Cd=a("");Dd=a("");Ed=a("");Fd=a("");Gd=a("");Hd=a("");Id=a("");Jd=a("");Kd=a("");Ld=a("");Md=a("");Nd=a("");Od=a("");Pd=a("");Qd=a("");Rd=a("");Sd=a("");Td=a("");Ud=a("");Vd=a("");
Wd=a("");Xd=a("");Yd=a("");Zd=a("");$d=a("");ae=a("");be=a("");ce=a("");de=a("");ee=a("");fe=a("");ge=a("");he=a("");ie=a("");je=a("");ke=a("");le=a("");me=a("");ne=a("");
oe=a("");pe=a("");qe=a("");re=a("");se=a("");te=a("");ue=a("");ve=a("");we=a("");xe=a("");ye=a("");ze=a("");Ae=a("");Be=a("");Ce=a("");De=
a("");Ee=a("");Fe=a("");Ge=a("");He=a("");Ie=a("");Je=a("");Ke=a("");Le=a("");Me=a("");Ne=a("");Oe=a("");Pe=a("");Qe=a("");Re=a("");Se=a("");Te=a("");
Ue=a("");Ve=a("");We=a("");Xe=a("");Ye=a("");Ze="";$e=a("");af=a("");bf=a("");cf=a("");df=a("");ef=a("");ff=a("");gf=a("");hf=a("");jf=a("");kf=a("");lf=
a("");mf=a("");nf=a("");of=a("");pf=a("")})();var va=function(a,b){R(a,b)},hb=function(){},Q=function(a){return"function"==typeof a},Va=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},qf=function(a){return"number"==ob(a)&&!isNaN(a)},rf=function(a){return/^[0-9]+$/.test(a)},sf=function(a){return"string"==ob(a)},tf=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},la=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},
S=function(a){return Math.round(Number(a))||0},Ca=function(a){return"false"==String(a).toLowerCase()?!1:!!a},uf=function(a){var b=[];if(Va(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},H=function(){return new Date},sa=function(a,b){if(!qf(a)||!qf(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},vf=function(){this.prefix="gtm.";this.values={}};vf.prototype.set=function(a,b){this.values[this.prefix+a]=b};
vf.prototype.get=function(a){return this.values[this.prefix+a]};vf.prototype.contains=function(a){return void 0!==this.get(a)};
var wf=function(a,b,c){try{if(!a[Ed])return a[Ha](a,b||hb,c||hb);c&&c()}catch(d){}return!1},xf=function(a,b){function c(b,c){a.contains(b)||a.set(b,[]);a.get(b).push(c)}for(var d=la(b).split("&"),e=0;e<d.length;e++)if(d[e]){var f=d[e].indexOf("=");0>f?c(d[e],"1"):c(d[e].substring(0,f),d[e].substring(f+1))}},yf=function(a){var b=a?a.length:0;return 0<b?a[b-1]:""},zf=function(a){return function(){return a("GTM-MZ3SPM")}},Af=function(a){for(var b=0;b<a.length;b++)a[b]()},xa=function(){return"gtm"+Bf()},
Bf=function(){var a=Ya.sequence||0;Ya.sequence=a+1;return a},za=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Cf=function(a){return null!==a&&void 0!==a&&void 0!==a.length},Df=function(a,b){0==b?a.gb=!0:a.aa=!0;var c=a.h;a.j&&(a.j.Ma[c]=b);sb[c]&&(sb[c].state=b)},Ef=function(a,b){a.sort(function(a,d){return b(a,d)?-1:b(d,a)?1:0})};var z=window,O=document,Gf=navigator,T=function(a,b){var c=z[a];z[a]=void 0===c?b:c;return z[a]},N=function(a,b,c,d){return(d||"http:"!=z.location.protocol?a:b)+c},Hf=function(a){var b=O.getElementsByTagName("script")[0]||O.body||O.head;b.parentNode.insertBefore(a,b)},bb=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},t=function(a,b,c){var d=O.createElement("script");d.type="text/javascript";d.async=
!0;d.src=a;bb(d,b);c&&(d.onerror=c);Hf(d);return d},fa=function(a,b){var c=O.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";Hf(c);bb(c,b);void 0!==a&&(c.src=a);return c},E=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a},U=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},w=function(a){z.setTimeout(a,0)},db=!1,
eb=[],If=function(a){if(!db){var b=O.createEventObject,c="complete"==O.readyState,d="interactive"==O.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){db=!0;for(var e=0;e<eb.length;e++)w(eb[e])}eb.push=function(){for(var a=0;a<arguments.length;a++)w(arguments[a]);return 0}}},Jf=0,Kf=function(){if(!db&&140>Jf){Jf++;try{O.documentElement.doScroll("left"),If()}catch(a){z.setTimeout(Kf,50)}}},ha=function(a){var b=O.getElementById(a);if(b&&ja(b,"id")!=a)for(var c=1;c<document.all[a].length;c++)if(ja(document.all[a][c],
"id")==a)return document.all[a][c];return b},ja=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Ta=function(a){return a.target||a.srcElement||{}},ka=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},kb=function(a){var b=O.createElement("div");b.innerHTML="A<div>"+a+"</div>";for(var b=b.lastChild,c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},
Ua=function(a,b){for(var c={},d=0;d<b.length;d++)c[b[d]]=!0;for(var e=a,d=0;e&&!c[String(e.tagName).toLowerCase()]&&100>d;d++)e=e.parentElement;e&&!c[String(e.tagName).toLowerCase()]&&(e=null);return e},Lf=!1,Mf=[],Nf=function(){if(!Lf){Lf=!0;for(var a=0;a<Mf.length;a++)w(Mf[a])}},Of=function(a){a=a||z;var b=a.location.href,c=b.indexOf("#");return 0>c?"":b.substring(c+1)},ib=function(a){window.console&&window.console.log&&window.console.log(a)};var qa=function(a,b,c,d,e){var f,g=(a.protocol.replace(":","")||z.location.protocol.replace(":","")).toLowerCase();b&&(b=String(b).toLowerCase());switch(b){case "protocol":f=g;break;case "host":f=(a.hostname||z.location.hostname).split(":")[0].toLowerCase();if(c){var h=/^www\d*\./.exec(f);h&&h[0]&&(f=f.substr(h[0].length))}break;case "port":f=String(1*(a.hostname?a.port:z.location.port)||("http"==g?80:"https"==g?443:""));break;case "path":f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var k=
f.split("/");0<=tf(d||[],k[k.length-1])&&(k[k.length-1]="");f=k.join("/");break;case "query":f=a.search.replace("?","");if(e)a:{for(var m=f.split("&"),l=0;l<m.length;l++){var n=m[l].split("=");if(decodeURIComponent(n[0]).replace(/\+/g," ")==e){f=decodeURIComponent(n.slice(1).join("=")).replace(/\+/g," ");break a}}f=void 0}break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},pa=function(a){var b="";if(a&&a.href)var c=a.href.indexOf("#"),b=0>c?a.href:a.href.substr(0,c);
return b},oa=function(a){var b=O.createElement("a");a&&(b.href=a);return b};var Da=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var ca=function(a,b,c){E(a,b,c)},ea=function(a){var b=["veinteractive.com","ve-interactive.cn"];if(!a)return!1;var c=qa(oa(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1},P=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null},$a=function(a,b){for(var c=
[],d=0;a&&d<a.length;d++)a[d]&&a[d].hasOwnProperty(b)&&c.push(a[d][b]);return c};var Pf=new vf,Qf={},Sf={set:function(a,b){R(Rf(a,b),Qf)},get:function(a){return X(a,2)},reset:function(){Pf=new vf;Qf={}}},X=function(a,b){if(2==b){var c=a.split(".");for(var f=Qf,e=0;e<c.length;e++){if(void 0===f[c[e]])return;f=f[c[e]]}return f}return Pf.get(a)},Tf=function(a,b){Pf.set(a,b);R(Rf(a,b),Qf)},Rf=function(a,b){for(var c={},d=c,e=a.split("."),
f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c};var Uf=!1,Vf=!1;var Wf=Math.random(),Xf="0.100000">Wf;
var Yf=function(a,b){if(Xf){var c="//www.googletagmanager.com/a?id=GTM-MZ3SPM&cv=1",d=function(a,b){b&&(c+=a+encodeURIComponent(b))};d("&v=","t");d("&n=",a);d("&s=",b&&b.state);d("&h=",b&&b.hideLatency);d("&g=",b&&b.gaLatency);d("&p=",b&&b.loadBy);d("&o=",b&&b.timeout);d("&l=",H().getTime()-S(rb));c+="&sr=0.100000";d("&ps=",Wf);d("&cb=",sa());E(c)}},Zf=hb,$f=function(){var a=!1;};var bg=function(a){var b=Ya.zones;return b?b.checkState("GTM-MZ3SPM",a):ag},ag={active:!0,isWhitelisted:function(){return!0}};var dg=hb,eg=[],fg=!1,ta=function(a){return z["dataLayer"].push(a)},gg=function(a){var b=!1;return function(){!b&&Q(a)&&w(zf(a));b=!0}},hg=function(a){},ng=function(){for(var a=!1;!fg&&0<eg.length;){fg=!0;var b=eg.shift();if(Q(b))try{b.call(Sf)}catch(da){}else if(Va(b))a:{var c=b;if(sf(c[0])){for(var d=c[0].split("."),e=d.pop(),f=c.slice(1),g=Qf,h=0;h<d.length;h++){if(void 0===g[d[h]])break a;g=g[d[h]]}try{g[e].apply(g,f)}catch(da){}}}else{var n=void 0,q=void 0,u=b;for(q in u)u.hasOwnProperty(q)&&Tf(q,u[q]);var x=!1,r=u.event;if(r){u.hasOwnProperty("gtm.uniqueEventId")||(u["gtm.uniqueEventId"]=Bf(),Tf("gtm.uniqueEventId",u["gtm.uniqueEventId"]));
n=u["gtm.uniqueEventId"];ma=r;var A=bg(n);if(A.active){var B=gg(u.eventCallback),v=u.eventTimeout;v&&z.setTimeout(B,Number(v));x=dg(n,r,A.isWhitelisted,B,u.eventReporter)}}rb||(rb=u["gtm.start"])&&Zf();var C=u,K=n,L=r,D=Qf;if(!x){var F=n,I=r;}ma=null;a=x||a}var M=b,wa=Qf;mg();fg=!1}return!a},og=function(){var a=ng();try{var b=z["dataLayer"].hide;if(b&&void 0!==b["GTM-MZ3SPM"]&&b.end){b["GTM-MZ3SPM"]=!1;var c=!0,d;for(d in b)if(b.hasOwnProperty(d)&&!0===b[d]){c=!1;break}c&&(b.end(),b.end=null)}}catch(e){}return a},pg=function(){var a=T("dataLayer",[]),b=T("google_tag_manager",{}),b=
b["dataLayer"]=b["dataLayer"]||{};eb.push(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Mf.push(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});var c=a.push;a.push=function(){var b=[].slice.call(arguments,0);c.apply(a,b);for(eg.push.apply(eg,b);300<this.length;)this.shift();return ng()};eg.push.apply(eg,a.slice(0));w(og)};var Sa=function(a,b,c){U(a,b,c,void 0)},ba=function(a,b,c){t(a,b,c)},na=function(a,b){return X(a,b||2)},aa=function(a,b){z[a]=b},p=function(a,b,c){var d=z;b&&(void 0===d[a]||c&&!d[a])&&(d[a]=b);return d[a]},y=function(a,b,c,d){return(d||"http:"!=z.location.protocol?a:b)+c};var qg=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),rg={customPixels:["nonGooglePixels"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},sg={customPixels:["customScripts","html"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels",
"customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},tg=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c};
var vg=function(a){var b=X("gtm.whitelist");var c=b&&tg(uf(b),rg),d=X("gtm.blacklist")||X("tagTypeBlacklist")||[];qg.test(z.location&&
z.location.hostname)&&(d=uf(d),d.push("nonGooglePixels","nonGoogleScripts"));var e=d&&tg(uf(d),sg),f={};return function(g){var h=g&&g[Ha];if(!h)return!0;if(void 0!==f[h.a])return f[h.a];var k=a(h.a);if(b){var m;if(m=k)a:{if(0>tf(c,h.a))if(h.b&&0<h.b.length)for(var l=0;l<h.b.length;l++){if(0>tf(c,h.b[l])){m=!1;break a}}else{m=!1;break a}m=!0}k=m}var n=!1;if(d){var q;if(!(q=0<=tf(e,h.a)))a:{for(var u=h.b||[],x=new vf,r=0;r<e.length;r++)x.set(e[r],
!0);for(r=0;r<u.length;r++)if(x.get(u[r])){q=!0;break a}q=!1}n=q}return f[h.a]=!k||n}};var ga=function(a){var b=O;return wg?b.querySelectorAll(a):null},xg=!1;if(O.querySelectorAll)try{var yg=O.querySelectorAll(":root");yg&&1==yg.length&&yg[0]==O.documentElement&&(xg=!0)}catch(a){}var wg=xg;var _eu=function(a){var b=String(X("gtm.elementUrl")||a[Cc]||""),c=oa(b);return b};_eu.a="eu";_eu.b=["google"];var _e=function(){return ma};_e.a="e";_e.b=["google"];var Dg=/(^|\.)doubleclick\.net$/i,Eg=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Wa=function(a){for(var b=String(O.cookie).split(";"),c=[],d=0;d<b.length;d++){var e=b[d].split("="),f=la(e[0]);if(f&&f==a){var g=la(e.slice(1).join("="));g&&(g=decodeURIComponent(g));c.push(g)}}return c},Fg=function(a,b,c,d,e){if(Dg.test(O.location.hostname)||"/"==c&&Eg.test(d))return!1;var f=a+"="+b+"; ";c&&(f+="path="+c+"; ");e&&(f+="expires="+e.toGMTString()+"; ");d&&(f+="domain="+d+";");var g=O.cookie;O.cookie=f;return g!=
O.cookie||0<=tf(Wa(a),b)},Gg=function(a){if("none"==a)return 0;0==a.indexOf(".")&&(a=a.substr(1));return a.split(".").length},Hg=function(a){var b=a;b?(1<b.length&&b.lastIndexOf("/")==b.length-1&&(b=b.substr(0,b.length-1)),0!=b.indexOf("/")&&(b="/"+b),a=b):a="/";return"/"==a?1:a.split("/").length},Ig=function(){var a=qa(z.location,"host",!0).split(".");if(4==a.length&&/^[0-9]*$/.exec(a[3]))return["none"];for(var b=[],c=a.length-2;0<=c;c--)b.push(a.slice(c).join("."));b.push("none");return b};var Jg=function(a,b){this.i=a;this.s=b};Jg.prototype.toString=function(){var a=""+this.i;1<this.s&&(a=a+"-"+this.s);return a};var Kg=function(a,b){this.Ka=a;this.qa=b};Kg.prototype.toString=function(){return""+this.qa+"."+this.Ka};var Ng=function(a,b){var c=new Lg(null,a,b);Mg(c);return c},Lg=function(a,b,c){this.Wa=Math.floor(H().getTime()/864E5);this.pa=b||"auto";this.ha=c||"/";var d=Gg(this.pa),e=Hg(this.ha);this.I=a||new Jg(d,e);this.m=[];this.F=new vf},Pg=function(a,b,c){b&&(""==c.Ka?Og(a,b):(a.F.contains(b)||a.m.push(b),a.F.set(b,c)))},Qg=function(a,b){for(var c=0;c<b.length;c++)Pg(a,b[c][0],b[c][1])},Og=function(a,b){var c=tf(a.m,b);0<=c&&a.m.splice(c,1);a.F.set(b,void 0)},Rg=function(a){for(var b=[],c=0;c<a.m.length;c++){var d=
a.m[c];b.push([d,a.F.get(d)])}return b},Sg=function(a){for(var b=0,c=0;c<a.m.length;c++)b=Math.max(b,a.F.get(a.m[c]).qa);return 864E5*b};Lg.prototype.toString=function(){if(0==this.m.length)return"";for(var a=[],b=0;b<this.m.length;b++){var c=this.m[b];a.push(""+c+"."+this.F.get(c).toString())}return"GAX1."+this.I.toString()+"."+a.join("!")};
var Tg=function(a,b){for(var c=new Date,d=Hg(a.ha),e=[],f=0;f<a.m.length;f++){var g=a.m[f];a.F.get(g).qa<a.Wa&&e.push(g)}for(f=0;f<e.length;f++)Og(a,e[f]);if(a.m.length>(b||10))return!1;c.setTime(Sg(a));if("auto"!=a.pa)return Fg("_gaexp",a.toString(),a.ha,a.pa,c);for(var h=Ig(),k=0;k<h.length;k++)if("none"!=h[k]&&(a.I=new Jg(Gg(h[k]),d),Fg("_gaexp",a.toString(),a.ha,h[k],c)))return!0;return!1},Mg=function(a){for(var b=a.I.i,c=a.I.s,d=Wa("_gaexp"),e=[],f=0;f<d.length;f++){var g=Ug(a,d[f]);g&&e.push(g)}Ef(e,
function(a,d){var e=a.I,f=d.I;return e.i==f.i&&e.s==f.s?!1:e.i==b&&e.s==c?!0:f.i==b&&f.s==c?!1:e.i==b?f.i!=b||e.s<f.s:f.i==b?!1:e.s==c?f.i!=b&&(f.s!=c||e.i<f.i):f.s==c?!1:e.i<f.i||e.i==f.i&&e.s<f.s});a.I=0<e.length?e[0].I:new Jg(b,c);for(f=e.length-1;0<=f;f--)Qg(a,Rg(e[f]))},Ug=function(a,b){var c=b.match(/GAX1\.([^.]+).(.*)/);if(c){var d;a:{var e=(c[1]||"").split("-");if(!(0==e.length||2<e.length)){var f=la(e[0]);if(0!=f.length){var g=2==e.length?la(e[1]):"1";if(rf(f)&&rf(g)){d=new Jg(S(f),S(g));
break a}}}d=void 0}if(d){for(var h=new Lg(d,a.pa,a.ha),k=(c[2]||"").split("!"),m=0;m<k.length;m++){var l=k[m].split(".");if(3==l.length){if(!rf(l[1]))return;Pg(h,l[0],new Kg(l[2],S(l[1])))}}return h}}};var _f=function(a){var b=String(X("gtm.referrer")||O.referrer);if(!b)return b;var c=oa(b);return b};_f.a="f";_f.b=["google"];var Yg=function(a){var b=z.location,c;(c=a[rc]?a[rc]:X("gtm.url"))&&(b=oa(String(c)));var d=b.href,e=d.indexOf("#"),f=0>e?d:d.substr(0,e);a[cc]&&(f=qa(b,a[cc],a[we],a[Bc],a[je]));return f},_u=Yg;_u.a="u";_u.b=["google"];var _eq=function(a){return String(a[Fb])==String(a[V])};_eq.a="eq";_eq.b=["google"];var Xa=new String("undefined"),fb=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===Xa?b:a[d]);return c.join("")}};fb.prototype.toString=function(){return this.resolve("undefined")};fb.prototype.valueOf=fb.prototype.toString;var hh={},gb=function(a,b){var c=Bf();hh[c]=[a,b];return c},ih=function(a){var b=a?0:1;return function(a){var c=hh[a];if(c&&Q(c[b]))c[b]();hh[a]=void 0}};var jh=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},kh=function(a,b){return a<b?-1:a>b?1:0};var lh;a:{var mh=mb.navigator;if(mh){var nh=mh.userAgent;if(nh){lh=nh;break a}}lh=""}var Y=function(a){return-1!=lh.indexOf(a)};var oh=function(){return Y("iPhone")&&!Y("iPod")&&!Y("iPad")};var ph=function(a){ph[" "](a);return a};ph[" "]=function(){};var rh=function(a,b){var c=qh;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};var sh=Y("Opera"),th=Y("Trident")||Y("MSIE"),uh=Y("Edge"),vh;if(vh=Y("Gecko")){var wh=lh.toLowerCase();vh=!(-1!=wh.indexOf("webkit")&&!Y("Edge"))}var xh=vh&&!(Y("Trident")||Y("MSIE"))&&!Y("Edge"),yh=lh.toLowerCase(),zh=-1!=yh.indexOf("webkit")&&!Y("Edge");zh&&Y("Mobile");Y("Macintosh");Y("Windows");Y("Linux")||Y("CrOS");var Ah=mb.navigator||null;Ah&&(Ah.appVersion||"").indexOf("X11");Y("Android");oh();Y("iPad");Y("iPod");oh()||Y("iPad")||Y("iPod");
var Bh=function(){var a=mb.document;return a?a.documentMode:void 0},Ch;a:{var Dh="",Eh=function(){var a=lh;if(xh)return/rv\:([^\);]+)(\)|;)/.exec(a);if(uh)return/Edge\/([\d\.]+)/.exec(a);if(th)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(zh)return/WebKit\/(\S+)/.exec(a);if(sh)return/(?:Version)[ \/]?(\S+)/.exec(a)}();Eh&&(Dh=Eh?Eh[1]:"");if(th){var Fh=Bh();if(null!=Fh&&Fh>parseFloat(Dh)){Ch=String(Fh);break a}}Ch=Dh}
var Gh=Ch,qh={},Hh=function(a){return rh(a,function(){for(var b=0,c=jh(String(Gh)).split("."),d=jh(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"";do{var k=/(\d*)(\D*)(.*)/.exec(g)||["","","",""],m=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==k[0].length&&0==m[0].length)break;b=kh(0==k[1].length?0:parseInt(k[1],10),0==m[1].length?0:parseInt(m[1],10))||kh(0==k[2].length,0==m[2].length)||kh(k[2],m[2]);g=k[3];h=m[3]}while(0==b)}return 0<=b})},Ih;
var Jh=mb.document;Ih=Jh&&th?Bh()||("CSS1Compat"==Jh.compatMode?parseInt(Gh,10):5):void 0;var Kh;if(!(Kh=!xh&&!th)){var Lh;if(Lh=th)Lh=9<=Number(Ih);Kh=Lh}Kh||xh&&Hh("1.9.1");th&&Hh("9");var jb=function(a,b){var c="";th&&!Mh(a)&&(c='<script>document.domain="'+document.domain+'";\x3c/script>'+c);var d="<!DOCTYPE html><html><head><script>var inDapIF=true;\x3c/script>"+c+"</head><body>"+b+"</body></html>";if(Nh)a.srcdoc=d;else if(Oh){var e=a.contentWindow.document;e.open("text/html","replace");e.write(d);e.close()}else Ph(a,d)},Nh=zh&&"srcdoc"in document.createElement("iframe"),Oh=xh||zh||th&&Hh(11),Ph=function(a,b){th&&Hh(7)&&!Hh(10)&&6>Qh()&&Rh(b)&&(b=Sh(b));var c=function(){a.contentWindow.goog_content=
b;a.contentWindow.location.replace("javascript:window.goog_content")};th&&!Mh(a)?Th(a,c):c()},Qh=function(){var a=navigator.userAgent.match(/Trident\/([0-9]+.[0-9]+)/);return a?parseFloat(a[1]):0},Mh=function(a){try{var b;var c=a.contentWindow;try{var d;if(d=!!c&&null!=c.location.href)b:{try{ph(c.foo);d=!0;break b}catch(e){}d=!1}b=d}catch(e){b=!1}return b}catch(e){return!1}},Uh=0,Th=function(a,b){var c="goog_rendering_callback"+Uh++;mb[c]=b;a.src="javascript:'<script>(function() {document.domain = \""+
document.domain+'";var continuation = window.parent.'+c+";window.parent."+c+" = null;continuation();})()\x3c/script>'"},Rh=function(a){for(var b=0;b<a.length;++b)if(127<a.charCodeAt(b))return!0;return!1},Sh=function(a){for(var b=unescape(encodeURIComponent(a)),c=Math.floor(b.length/2),d=[],e=0;e<c;++e)d[e]=String.fromCharCode(256*b.charCodeAt(2*e+1)+b.charCodeAt(2*e));1==b.length%2&&(d[c]=b.charAt(b.length-1));return d.join("")};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var cb;
var ii=function(a,b,c,d,e){var f=a+"{"+(b+": "+c+(d?" !important":""))+"}";e&&(f=e+"{"+f+"}");var g=document;if(g.createStyleSheet){var h=fi(g),k=h.rules.length;h.insertRule(f,k);return function(){h.deleteRule?h.deleteRule(k):h.removeRule(k);h.insertRule("x {}",k)}}var m=gi(f,g);hi(m,g);var l=m.parentNode;return function(){l.removeChild(m)}},ji=null,fi=function(a){if(ji)return ji;for(var b=a.styleSheets.length-1;0<=b;b--){var c=a.styleSheets[b],d=c.ownerNode;if(d&&d.parentNode&&"HEAD"==d.parentNode.tagName)return ji=
c}0==a.styleSheets.length&&a.createStyleSheet();return ji=a.styleSheets[0]},gi=function(a,b){var c=(b||document).createElement("style");void 0!==c.cssText?c.cssText=a:c.innerHTML=a;return c},hi=function(a,b){var c=b||document,d=c.getElementsByTagName("head")[0];d||(d=c.createElement("head"),c.body.parentNode.insertBefore(d,c.body));d.appendChild(a)};var qi={},ri=void 0,si=function(a){var b=qi[a];b||(b={id:a,A:[],da:0,Oa:null,Da:void 0,Ha:!1},qi[a]=b);ri=b},ui=function(a,b,c,d){var e=ri;if(!wg||!e)return!1;var f={id:e.id+":"+e.A.length,ob:b,Z:[],jb:c,J:a,za:0,xa:d||null,Va:0,ca:!1};e.A.push(f);null===a?(f.ca=!0,b(null)):ti(e);return!0},vi=function(a){var b=ii(a,"visibility","hidden",!0);return function(){Q(b)&&b.apply();b=null}},wi=function(a,b,c,d){var e=b;if(!db){var f=vi(a.C);eb.push(f);e=function(a,c){var d=b(a,c);f();return d}}return ui(a,
e,c,d)},ti=function(a){if(!a.Ha){for(var b=a.da;b<a.A.length;b++){var c=a.A[b],d=b==a.da;if(!c.ca&&!xi(d,c))break;c.ca&&d&&a.da++}a.A.length>a.da?(a.Oa||(a.Oa=z.setTimeout(function(){a.Oa=null;ti(a)},80)),db||a.Da||(a.Da=function(){w(function(){ti(a)})},U(O,"DOMContentLoaded",a.Da))):yi(a)}},yi=function(a){for(var b=0;b<a.A.length;b++){var c=a.A[b];if(c.J)for(var d=ga(c.J.C)||[],e=0;e<d.length;e++){var f=d[e];f.gtmProgressiveApplied&&f.gtmProgressiveApplied[c.id]||(zi(f,c.id),c.Z.push(Ai(f,c.id)))}}},
xi=function(a,b){var c=[];if(b.J){var d=Bi(b.J,b.id),e=null;b.xa&&(e=Bi(b.xa,b.id+"-t"));for(var f=0;f<d.length;f++){var g=d[f],h;if(null!=e&&(h=e.length>f?e[f]:null,!h&&!db&&(null===b.xa.v||b.Va+c.length<b.xa.v)))break;c.push({element:g,bc:h})}}if(!db&&b.jb&&(!a||null==b.J.v||b.J.v!=b.za+c.length))return!1;for(var k=0;k<c.length;k++){var m=c[k].element,l=c[k].bc,n;b.za++;zi(m,b.id);l&&(b.Va++,n=b.id+"-t",zi(l,n));var q=b.ob(m,l);Q(q)&&b.Z.push(q);b.Z.push(Ai(m,b.id));l&&n&&b.Z.push(Ai(l,n))}if(b.J.v&&
b.J.v==b.za||db)b.ca=!0;return!0},zi=function(a,b){a.gtmProgressiveApplied||(a.gtmProgressiveApplied={});a.gtmProgressiveApplied[b]=!0},Ai=function(a,b){return function(){a.gtmProgressiveApplied&&delete a.gtmProgressiveApplied[b]}},Bi=function(a,b){for(var c=ga(a.C)||[],d=[],e=0;e<c.length;e++){var f=c[e];if(!f.gtmProgressiveApplied||!f.gtmProgressiveApplied[b]){if(a.H&&!Ci(f))break;d.push(f)}}return d},Ci=function(a){if(db)return!0;for(;a;){if(a.nextSibling)return!0;a=a.parentNode}return!1};var Ka,Di,Ei,Qa=/(Firefox\D28\D)/g.test(Gf.userAgent),Gi=function(a,b){return function(c){var d;c=c||z.event;var e=Ta(c),f=!1;if(3!==c.which||"LINK_CLICK"!=a){"LINK_CLICK"==a&&(e=Ua(e,["a","area"]),f=!e||!e.href||Fi(e.href)||2===c.which||null==c.which&&4==c.button||c.ctrlKey||c.shiftKey||c.altKey||!0===c.metaKey);var g="FORM_SUBMIT"==a?Ka:Ei;if(c.defaultPrevented||!1===c.returnValue||c.ea&&c.ea()){if(e){d={simulateDefault:!1};var h=La(g,["wnc","nwnc"]);h&&Ma(a,e,d,g.wt,h)}}else{if(e){d={};var k,m=
La(g,["wnc","nwnc","nwc","wc"]);(k=Ma(a,e,d,g.wt,m))||(Na(d.eventReport,g)?b=!0:f=!0);f=f||k||"LINK_CLICK"==a&&Qa;d.simulateDefault=!k&&b&&!f;d.simulateDefault&&(f=Ra(e,d)||f,!f&&c.preventDefault&&c.preventDefault());c.returnValue=k||!b||f;return c.returnValue}return!0}}}},Ma=function(a,b,c,d,e){var f=d||2E3,g={"gtm.element":b,"gtm.elementClasses":b.className,"gtm.elementId":b["for"]||ja(b,"id")||"","gtm.elementTarget":b.formTarget||b.target||""};switch(a){case "LINK_CLICK":g["gtm.triggers"]=e||"";
g.event="gtm.linkClick";g["gtm.elementUrl"]=b.href;g.eventTimeout=f;g.eventCallback=Hi(b,c);g.eventReporter=function(a){c.eventReport=a};break;case "FORM_SUBMIT":g["gtm.triggers"]=e||"";g.event="gtm.formSubmit";g["gtm.elementUrl"]=Ii(b);g.eventTimeout=f;g.eventCallback=Ji(b,c);g.eventReporter=function(a){c.eventReport=a};break;case "CLICK":g.event="gtm.click";g["gtm.elementUrl"]=(b.attributes&&b.attributes.formaction?b.formAction:"")||b.action||b.href||b.src||b.code||b.codebase||"";break;default:return!0}return ta(g)},
Ii=function(a){var b=a.action;b&&b.tagName&&(b=a.cloneNode(!1).action);return b},Pa=function(a){var b=a.target;if(!b)switch(String(a.tagName).toLowerCase()){case "a":case "area":case "form":b="_self"}return b},Ra=function(a,b){var c=!1,d=/(iPad|iPhone|iPod)/g.test(Gf.userAgent),e=Pa(a).toLowerCase();switch(e){case "":case "_self":case "_parent":case "_top":var f;f=(e||"_self").substring(1);b.targetWindow=z.frames&&z.frames[f]||z[f];break;case "_blank":d?(b.simulateDefault=!1,c=!0):(b.targetWindowName=
"gtm_autoEvent_"+H().getTime(),b.targetWindow=z.open("",b.targetWindowName));break;default:d&&!z.frames[e]?(b.simulateDefault=!1,c=!0):(z.frames[e]||(b.targetWindowName=e),b.targetWindow=z.frames[e]||z.open("",e))}return c},Hi=function(a,b,c){return function(){b.simulateDefault&&(b.targetWindow?b.targetWindow.location.href=a.href:(c=c||H().getTime(),500>H().getTime()-c&&z.setTimeout(Hi(a,b,c),25)))}},Ji=function(a,b,c){return function(){if(b.simulateDefault)if(b.targetWindow){var d;b.targetWindowName&&
(d=a.target,a.target=b.targetWindowName);O.gtmSubmitFormNow=!0;Oa(a).call(a);b.targetWindowName&&(a.target=d)}else c=c||H().getTime(),500>H().getTime()-c&&z.setTimeout(Ji(a,b,c),25)}},La=function(a,b){for(var c=[],d=0;d<b.length;d++){var e=a[b[d]],f;for(f in e)e.hasOwnProperty(f)&&e[f]&&c.push(f)}return c.join(",")},Ki=function(a,b,c,d,e){var f=e;if(!f||"0"==f){if(a.l)return;a.l=!0;f="0"}var g=a.wt;b&&(!g||g>d)&&(a.wt=d);a[b?c?"wc":"wnc":c?"nwc":"nwnc"][f]=!0},Na=function(a,b){if(b.wnc["0"]||b.wc["0"])return!0;
for(var c=0;c<Li.length;c++)if(a.passingRules[c]){var d=Mi[c],e=d&&d[0]&&d[0][0]||d[1]&&d[1][0];if(e&&"0"!=e&&(b.wc[e]||b.wnc[e]))for(var f=Li[c][1],g=0;g<f.length;g++)if(a.resolvedTags[f[g]])return!0}return!1},ra=function(a,b,c,d,e){var f,g,h=!1;switch(a){case "CLICK":if(O.gtmHasClickListenerTag)return;O.gtmHasClickListenerTag=!0;f="click";g=function(a){var b=Ta(a);b&&Ma("CLICK",b,{},d)};h=!0;break;case "LINK_CLICK":b&&!Di&&(Di=pa(O.location));Ki(Ei,b||!1,c||!1,d,e);if(O.gtmHasLinkClickListenerTag)return;
O.gtmHasLinkClickListenerTag=!0;f="click";g=Gi(a,b||!1);break;case "FORM_SUBMIT":Ki(Ka,b||!1,c||!1,d,e);if(O.gtmHasFormSubmitListenerTag)return;O.gtmHasFormSubmitListenerTag=!0;f="submit";g=Gi(a,b||!1);break;default:return}U(O,f,g,h)},Fi=function(a){if(!Di)return!0;var b=a.indexOf("#");if(0>b)return!1;if(0==b)return!0;var c=oa(a);return Di==pa(c)},Oa=function(a){try{if(a.constructor&&a.constructor.prototype)return a.constructor.prototype.submit}catch(b){}if(a.gtmReplacedFormSubmit)return a.gtmReplacedFormSubmit;
O.gtmFormElementSubmitter||(O.gtmFormElementSubmitter=O.createElement("form"));return O.gtmFormElementSubmitter.submit.call?O.gtmFormElementSubmitter.submit:a.submit},Ni=function(){var a=function(a){var b=T("google_tag_manager",{}),d=b[a];d||(d=b[a]={},d.nwnc={},d.nwc={},d.wnc={},d.wc={},d.wt=null,d.l=!1);return d};Ei=a("linkClickMap");Ka=a("formSubmitMap")};var Ea=function(a,b){var c=b||mb,d=c.onerror,e=!1;zh&&!Hh("535.3")&&(e=!e);c.onerror=function(b,c,h,k,m){d&&d(b,c,h,k,m);a({message:b,fileName:c,ab:h,tc:k,error:m});return e}};var hj=function(a){if(!a)return!1;if(a[Eb]&&Va(a[V])){for(var b=a[V],c=0;c<b.length;c++)if(a[V]=b[c],wf(a))return!0;return!1}return wf(a)};var Dj=10,Ej=[],Fj=[],Gj=[],Hj=new vf,Ij=[],Z=[],Li=[],Mi=[],Jj=function(){this.P=[]};Jj.prototype.set=function(a,b){this.P.push([a,b]);return this};Jj.prototype.resolve=function(a,b){for(var c={},d=0;d<this.P.length;d++){var e=Kj(this.P[d][0],a,b),f=Kj(this.P[d][1],a,b);c[e]=f}return c};var Lj=function(a){this.index=a};Lj.prototype.resolve=function(a,b){var c=Gj[this.index];if(c&&!b(c)){var d=c[Ia];if(a){if(a.get(d))return;a.set(d,!0)}c=Kj(c,a,b);a&&a.set(d,!1);return wf(c)}};
var _M=function(a){return new Lj(a)},Mj=function(a){this.resolve=function(b,c){for(var d=[],e=!1,f=0;f<a.length;f++){var g=Kj(Ej[a[f]],b,c);g===Xa&&(e=!0);d.push(g)}return e?new fb(d):d.join("")}},_T=function(a){return new Mj(arguments)},Nj=function(a){function b(b){for(var c=1;c<a.length;c++)if(a[c]==b)return!0;return!1}this.resolve=
function(c,d){var e=Kj(a[0],c,d);if(a[0]instanceof Lj&&b(8)&&b(16)){if(e===Xa)return e;var f=xa();Hj.set(f,e);return'google_tag_manager["GTM-MZ3SPM"].macro(\''+f+"')"}for(var e=String(e),g=1;g<a.length;g++)e=ij[a[g]](e);return e}},_E=function(a,b){return new Nj(arguments)},Oj=function(a,b){this.B=a;this.wa=b},_R=function(a,b){return new Oj(a,b)};
var Kj=function(a,b,c){var d=a;if(a instanceof Lj||a instanceof Jj||a instanceof Mj||a instanceof Nj)return a.resolve(b,c);if(!(a instanceof Oj))if(Va(a))for(var d=[],e=0;e<a.length;e++)d[e]=Kj(a[e],b,c);else if(a&&"object"==typeof a){var d={},f;for(f in a)a.hasOwnProperty(f)&&(d[f]=Kj(a[f],b,c))}return d},Rj=function(){for(var a=[_u,'Page URL','Page Hostname','host','Page Path','path',_f,'Referrer',_e,'Event'],b=[],c=0;c<a.length;c++)b[c]=
Qj(c,a);return b},Qj=function(a,b){var c=b[a],d=c;if(c instanceof Lj||c instanceof Nj||c instanceof Mj||c instanceof Oj)d=c;else if(Va(c))for(var d=[],e=0;e<c.length;e++)d[e]=Qj(c[e],b);else if("object"==typeof c){var d=new Jj,f;for(f in c)c.hasOwnProperty(f)&&d.set(b[f],Qj(c[f],b))}return d},Tj=function(a,b){for(var c=b?b.split(","):[],d=0;d<c.length;d++){var e=c[d]=c[d].split(":");0==a&&(e[1]=
Ej[e[1]]);if(1==a)for(var f=Sj(e[0]),e=c[d]={},g=0;g<f.length;g++){var h=Fj[f[g]];e[h[0]]=h[1]}if(2==a)for(g=0;4>g;g++)e[g]=Sj(e[g]);3==a&&(c[d]=Ej[e[0]]);if(4==a)for(g=0;2>g;g++)if(e[g]){e[g]=e[g].split(".");for(var k=0;k<e[g].length;k++)e[g][k]=Ej[e[g][k]]}else e[g]=[];5==a&&(c[d]=e[0])}return c},Sj=function(a){var b=[];if(!a)return b;for(var c=0,d=0;d<a.length&&c<Dj;c+=6,d++){var e=a&&a.charCodeAt(d)||65;if(65!=e){var f;f=65<e&&90>=e?e-65:97<=e&&122>=e?e-97+26:95==e?63:48<=e?e-48+52:62;1&f&&b.push(c);
2&f&&b.push(c+1);4&f&&b.push(c+2);8&f&&b.push(c+3);16&f&&b.push(c+4);32&f&&b.push(c+5)}}return b},Uj=function(a,b,c){a.push.apply(a,Tj(b,c))};var Vj;
var jg=function(){},bk=function(a,b){if(null===a||void 0===a)return a;if(b.propertyRenamingRequired){var c={},d;for(d in a)if(a.hasOwnProperty(d)){var e=Zj[d];e&&0==e.indexOf("vtp_")&&(c[e]=a[d])}c.__metadata=b;return c}return a},
fk=function(a){var b,c,d;},mg=function(){},gk=function(a){},hk=function(a,b){},ik=function(a,b){},kg=function(a){};var jk,kk;
var wk=function(a){return function(){}},xk=function(a){return function(){}};var yk=function(a){var b=this;this.h=a;this.aa=this.gb=!1;this.va=[];this.ra=[];this.X=function(){if(b.j&&b.j.event){var c=b.j.event,d=b.h;}b.aa||Af(b.va);Df(b,1);if(tb[a])for(var e=0;e<tb[a].length;e++)tb[a].shift().X()};this.W=function(){if(b.j&&b.j.event){var c=b.j.event,d=b.h;}b.aa||Af(b.ra);
Df(b,2);if(tb[a])for(var e=0;e<tb[a].length;e++)tb[a].shift().W()};this.D=hb},zk=function(a,b){a.va.push(b)},Ak=function(a,b){a.ra.push(b)},Bk=function(a){this.L=[];this.La=[];this.Xa={};this.bb=[];this.V=0;this.Ja={};this.Na={};this.Ma={};this.event=a};Bk.prototype.addListener=function(a){this.bb.push(a)};
var Ck=function(a){0<a.V||Af(a.bb)},Dk=function(a,b,c,d,e,f){if(!c.aa){a.L[b]=c;void 0==d&&(d=[]);void 0==e&&(e=[]);void 0==f&&(f=[]);d=Va(d)?d.slice():["or",d];e=Va(e)?e.slice():[e];f=Va(f)?f.slice():[f];a.Xa[b]=d;a.Ja[b]=0<e.length;a.Na[b]=0<f.length;a.V++;var g=function(){0<a.V&&!a.Ja[b]&&!a.Na[b]&&a.V--;Ck(a)};zk(c,g);Ak(c,g)}},Ik=function(a){for(var b=[],c={},d=0;d<a.L.length;c={R:c.R},d++)if(c.R=a.L[d],c.R){var e=a.Xa[d],f=a.Ja[d],g=a.Na[d];if(0!=e.length||f||g){if(0<e.length)for(var h=Ek(e,
c.R.D),k=0;k<e.length;k++)e[k]instanceof Oj&&e[k].B!=d&&Fk(a,e[k].B,h);(f||g)&&Gk(a,d,function(a){return function(){0<a.R.j.V&&a.R.j.V--;Ck(a.R.j)}}(c))}else b.push(d)}for(d=0;d<b.length;d++)a.L[b[d]].D();for(d=0;d<a.La.length;d++){var m=a.La[d];Hk(m);0<m.length&&m[0].D()}},Fk=function(a,b,c){a.L[b]&&(zk(a.L[b],function(){c(b,!0)}),Ak(a.L[b],function(){c(b,!1)}))},Ek=function(a,b){var c=hb,d=!1;return function(e,f){var g;a:{for(var h=0;h<a.length;h++)if(a[h]instanceof Oj&&a[h].B===e||a[h]===e){g=
h;break a}g=-1}d||0>g||("or"==a[0]?f?(d=!0,b()):(a.splice(g,1),1==a.length&&(d=!0,c())):f?(a.splice(g,1),1==a.length&&(d=!0,b())):(d=!0,c()))}},Gk=function(a,b,c){var d,e,f,g=[],h=!1,k=function(b){var c,d,e=Z[b];if(a.event.f(e)){}else d=Jk(e,b,a.event.f,a);if(c=d){var f=Kk(b,!0);0<f.length&&k(f[0].B);g.push(c);var l=Kk(b,!1);0<l.length&&
k(l[0].B)}else h=!0};k(b);if(!h){for(var m=0;m<g.length;m++){e=g[m];var l=Kk(e.h,!0);if(0<l.length){var n=g[m-1];f=Lk(e);zk(n,f);0==l[0].wa?Ak(n,f):Ak(n,c)}var q=Kk(e.h,!1);0<q.length&&(d=g[m+1],f=Lk(d),zk(e,f),0==q[0].wa?Ak(e,f):Ak(e,c))}zk(g[g.length-1],c);Ak(g[g.length-1],c);a.La.push(g)}},Kk=function(a,b){var c=b?te:Ke,d=Z[a],e=void 0===d[c]?[]:d[c];return Va(e)?e:[e]},Lk=function(a){return function(){a.D()}},Hk=function(a){for(var b=[],c=0;c<a.length;c++){var d=a[c],e=d.h,f=sb[e],g=f.firingOption;
0!=g&&(1==g&&void 0!==d.j.Ma[e]||2==g&&void 0!==f.state)&&b.push(d)}var h=Mk(b),k;for(k in h)if(h.hasOwnProperty(k)){for(var m=void 0,l=void 0,n=h[k],q=n[0],u=n[n.length-1],x,r=0;r<a.length;r++){var A=a[r];!m&&A.h==q&&0<r&&(m=a[r-1]);A.h==u&&r<a.length-1&&(l=a[r+1]);if(-1<tf(n,A.h))if(x=a.splice(r,1)[0],A.h==u)break;else r--}if(x){var B=Number(k),v=m,C=l;if(v){var K=v.va[0],L=v.ra[0],D=v;D.va=[];D.ra=[];zk(v,K);Ak(v,L)}if(v&&C){var J=Lk(C);zk(v,J);var F=Kk(v.h,!1);0<F.length&&F[0].B!=B&&0==F[0].wa&&
Ak(v,J);var I=Kk(C.h,!0);0<I.length&&I[0].B!=B&&0==I[0].wa&&Ak(v,J)}}}},Mk=function(a){for(var b={},c=0;c<a.length;c++){var d=a[c],e=[],f=function(a){var b=Kk(a,!0);0<b.length&&f(b[0].B);e.push(a);var c=Kk(a,!1);0<c.length&&f(c[0].B)};f(d.h);b[d.h]=e}Nk(a,b);return b},Nk=function(a,b){for(var c=0;c<a.length;c++){var d=a[c].h,e;for(e in b)if(b.hasOwnProperty(e)&&e!=d&&-1<tf(b[e],d)){delete b[d];break}}};var Pk=function(a,b,c){return function(){a[fd]=b.X;a[gd]=b.W;var d=b.h,e=b.j&&b.j.Ma[d],f=sb[d]&&sb[d].state,g=e?void 0!==e:b.gb||b.aa,h=sb[d]&&sb[d].firingOption,k=h&&2==h,m=h&&1==h;if(!g&&void 0===f||!g&&!k||!k&&!m){Df(b,0);var l=b.j?b.j.event:void 0;a=Ok(a,c);if(l){var n=a;hk(l,d)}wf(a,b.X,b.W)}else k&&0==f||m&&0==e?tb[d].push(b):k&&1==f||m&&1==e?b.X():b.W()}},Ok=function(a,b){a=Kj(a,new vf,b);return a},Jk=function(a,b,c,d){var e=d&&d.L,f;if(f=e)a:{if(e&&Va(e)&&0!=e.length)for(var g=0;g<e.length;g++)if(e[g]&&e[g].h===b){f=e[g];break a}f=void 0}var h=f||new yk(b);h.j=d;zk(h,wk(a));Ak(h,xk(a));h.D=Pk(a,h,c);return h};var Uk=function(){var a=[];return function(b,c){if(void 0===a[b]){var d=Ij[b]&&Kj(Ij[b],new vf,c),e=d;d&&(e=hj(d));a[b]=[e,d]}return a[b]}},ek=function(a,b){for(var c=b[0],d=0;d<c.length;d++)if(!a.U(c[d],a.f)[0])return!1;for(var e=b[2],d=0;d<e.length;d++)if(a.U(e[d],a.f)[0])return!1;return!0},Vk=function(a){for(var b=new Bk(a),c=0;c<Dj;c++)if(a.ma[c]&&!a.ua[c])if(a.f(Z[c])){}else{var d=a.Y[c],e=Jk(d,c,a.f,b);Dk(b,c,e,d[Dc],d[te],d[Ke]);if(d[ub])break}b.addListener(a.na);Ik(b);Ck(b)},Wk=!1,dg=function(a,b,c,d,e){switch(b){case "gtm.js":if(Wk)return!1;Wk=!0;break;case "gtm.sync":if(X("gtm.snippet")!=qb)return!1}for(var f={id:a,name:b,na:d||hb,ma:Sj(),ua:Sj(),U:Uk(),f:vg(c)},g=[],h=0;h<Li.length;h++)if(ek(f,Li[h])){g[h]=!0;for(var k=
f,m=Li[h],l=m[1],n=0;n<l.length;n++)k.ma[l[n]]=!0;for(var q=m[3],n=0;n<q.length;n++)k.ua[q[n]]=!0}else g[h]=!1;hk(f);var x=[];for(var r=0;r<Dj;r++)if(f.ma[r]&&!f.ua[r])if(f.f(Z[r])){}else{x[r]=Z[r];}f.Y=x;Vk(f);e&&Q(e)&&e({passingRules:g,resolvedTags:f.Y});
if("gtm.js"==b||"gtm.sync"==b)a:{}for(var L in f.Y)if(f.Y.hasOwnProperty(L)){var D=f.Y[L],J;if(!(J=void 0==D[Ia])){var F=D[Ia];J=!("function"!=typeof String.prototype.startsWith?0===F.indexOf("_implicit"):F.startsWith("_implicit"))}if(J)return!0}return!1};var Yk=function(){};var Zk=function(){};var Xk={macro:function(a){if(Hj.contains(a))return Hj.get(a)}};Xk.dataLayer=Sf;Xk.onHtmlSuccess=ih(!0);Xk.onHtmlFailure=ih(!1);Xk.callback=function(a){Ga.hasOwnProperty(a)&&Q(Ga[a])&&Ga[a]();delete Ga[a]};
Xk.vb=function(){var a=z.google_tag_manager;a||(a=z.google_tag_manager={});Ya=a;if(a["GTM-MZ3SPM"]){var b=Ya.zones;b&&b.registerNatural("GTM-MZ3SPM")}else{a["GTM-MZ3SPM"]=Xk;Ni();Ej.push.apply(Ej,Rj());Uj(Fj,0,"1:0,2:1,2:2,0:3,2:4,0:5,1:6,2:7,1:8,2:9");Uj(Gj,1,"D,N,x,AD,AM");Uj(Ij,1,"");Uj(Z,1,"");Uj(Li,2,"");Uj(Mi,4,"");for(var c=0;c<Z.length;c++){var d=Z[c],
e=1;d[Rd]?e=2:d[bf]&&(e=0);sb[c]={firingOption:e,state:void 0};tb[c]=[]}$f();pg();var q=z;if("interactive"==O.readyState&&!O.createEventObject||"complete"==O.readyState)If();else{U(O,"DOMContentLoaded",If);U(O,"readystatechange",If);if(O.createEventObject&&O.documentElement.doScroll){var u=!0;try{u=!q.frameElement}catch(x){}u&&
Kf()}U(q,"load",If)}"complete"===O.readyState?Nf():U(z,"load",Nf);Zk();Yk()}};Xk.vb();var _vs="res_ts:1462371835455000,srv_cl:155935210,ds:live,cv:1";
})()
