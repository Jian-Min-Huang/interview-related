// Copyright (c) ADRTA.COM 2011-2015 - ALL RIGHTS RESERVED
if(!window.__adrta__aait){__adrta__aait=""}if(!window.__adrta__aasi){__adrta__aasi=""}if(!window.__adrta__aast){__adrta__aast=""}if(!window.__adrta__aavi){__adrta__aavi=""}if(!window.__adrta__aavt){__adrta__aavt=""}if(!window.__adrta__aadb){__adrta__aadb=""}if(!window.__adrta__aasm){__adrta__aasm=0}this["Pixalate"+27789989698417832]=(function(){var aU="1495426927389";var I=false;var g=true;var aV=false;var av=27789989698417832;var ad="z1 539YYBK625x6ylKhOH5hYRRo7JLxFukd etKXOY4=";var a3="220.133.186.11, 10.2.3.171";var ab="15.1";var t=/(http)?(s)?(:)?\/\/(cdn|js|q|testbed).(adrta|rta247|pixalate).(com|net)\/(script\/|s\/[a-zA-Z]*\/)?(p|pnf).js(\?|#).*/;var y=/(?:\?([^#]*))/;var T=/https?:\/\/\w.*[\w]/;var H=/(\w+):\/{2}([^\/:]+)(?:\:(\d+))?(\/(?:[^?]+\/)?)?([^\?#]+)?(?:\?([^#]*))?(\#.*)?$/;var aD=",88x31,120x20,120x240,120x60,120x600,120x90,125x125,160x600,168x28,168x42,168X42,180x150,192x53,200x200,216x36,216x54,234x60,240x400,250x250,250x970,300x100,300x1050,300x150,300x250,300x50,300x600,300x75,320x50,320x100,320x480,336x280,400x300,468x60,480x320,550x480,640x480,700x500,720x300,728x90,768x1024,850x30,950x90,970x250,970x90,970x66,1024x768,";var v=[15000,15000,30000,30000,60000,60000];var E=[15000,15000,30000,30000,60000,60000];var bi=0;var aS=100;var aM=0.5;var aw=242500;var A=511;var a1=2047;var a7=9000000000000000;var aE=false;var f=[];var aA=false;var p=false;var au=false;var aW=!!navigator.userAgent.match(/safari/i)&&!navigator.userAgent.match(/chrome/i)&&typeof document.body.style.webkitFilter!=="undefined"&&!window.chrome;var a0=new Date().getTimezoneOffset();var P=(navigator.userAgent.indexOf("Opera Mini")!=-1);var bh=(navigator.userAgent.indexOf("MSIE")!=-1);var aH=window.location.protocol;if(aH.indexOf("http")!=0){aH="http:"}f.push(av);var at=0;var J=null;try{J=document.currentScript}catch(ap){}if(!J){at=1;var az=document.getElementsByTagName("script");var L=[];for(var al=0;al<az.length;++al){L[al]=az[al]}J=L[L.length-1];for(var ag=L.length-1;ag>=0;--ag){var af=L[ag];if(af&&af.src&&t.test(af.src)&&new RegExp("&cb=([^#]*)?").exec(af.src)[1]==ad){J=af;at=0;break}}}var be=J.src.substring(J.src.indexOf("#")+1).replace(/%%/g,"%25%25").split(";");var Z=be.shift();if(Z.indexOf("=")!=-1||Z.length==0||J.src.indexOf("#")==-1){Z="px"}var r=[];for(var ak=0;ak<be.length;++ak){if(be[ak].indexOf("blocked")!=-1){aE=true}if(T.test(be[ak])){be[ak]=be[ak].replace(H,"$1://$2$4$5")}if(be[ak].indexOf("kv2=")!=-1){r.push(be.splice(ak,1))}}var a4="__aaci="+Z;if(be.length>0){a4+="&"+be.join("&")}var a6=a4.indexOf("&__aa__=");if(a6!=-1){a4=a4.substring(0,a6)}__adrta__aadb=aV||__adrta__aadb||(("&"+a4+"&").indexOf("&debug=true&")!=-1);var z=true;var o=0;var aR="";var ao="";var aQ=window;try{var X=window;for(var al=0;al<16;++al){z=true;try{aR=X.location.href.replace(y,"").substring(0,A);if(aR=="undefined"){aR=X.location.href.substring(0,A)}ao=X.document.referrer.replace(y,"").substring(0,A);if(ao=="undefined"){ao=X.document.referrer.substring(0,A)}aQ=X}catch(ap){if(window.location.ancestorOrigins&&window.location.ancestorOrigins.length>0){ao=window.location.ancestorOrigins[window.location.ancestorOrigins.length-1]}z=false}if(X==window.top){break}X=X.parent;++o}}catch(ap){z=false;if(window.location.ancestorOrigins&&window.location.ancestorOrigins.length>0){ao=window.location.ancestorOrigins[window.location.ancestorOrigins.length-1]}}if(window.location.ancestorOrigins&&window.location.ancestorOrigins.length>0){var N=window.location.ancestorOrigins[window.location.ancestorOrigins.length-1]}var l=false;var aq=(document.hasFocus&&document.hasFocus())||(aQ.document.hasFocus&&aQ.document.hasFocus());if(z){var aT=null;if(bh){aT=aQ.document.onfocusin;aQ.document.onfocusin=function(){aq=true;if(aT){try{aT()}catch(i){}}}}else{aT=aQ.onfocus;aQ.onfocus=function(){aq=true;if(aT){aT()}}}var aa=null;var aN=null;if(bh){aa=aQ.document.onfocusout;aQ.document.onfocusout=function(){if(aN!=aQ.document.activeElement){aN=aQ.document.activeElement}else{aq=false;if(aa){try{aa()}catch(i){}}}}}else{aa=aQ.onblur;aQ.onblur=function(){aq=false;if(aa){aa()}}}}var aI=0;var ba=0;var G=function(){if(ba!=0){var i=new Date().getTime();aI+=i-ba;ba=i}var e=aI;aI=0;return e};var h=function(){var i=function(){ba=new Date().getTime()};var e=function(){if(ba!=0){aI+=new Date().getTime()-ba;ba=0}};if(a9.addEventListener){a9.addEventListener("mouseover",i,false);a9.addEventListener("mouseout",e,false)}else{if(a9.attachEvent){a9.attachEvent("mouseover",i);a9.attachEvent("mouseout",e)}}};var a9=null;var bo=false;var x=0;var aK=0;var bj=0;var aP=new Date().getTime();var an=null;var bd=function(e,i){return(aD.indexOf(","+e+"x"+i+",")!=-1)};var aL=function(e){if(e.getAttribute("height")){return parseInt(e.getAttribute("height"))}if((e.style)&&(e.style.height)&&(e.style.height.indexOf("%")==-1)){return parseInt(e.style.height)}return e.offsetHeight};var am=function(e){if(e.getAttribute("width")){return parseInt(e.getAttribute("width"))}if((e.style)&&(e.style.width)&&(e.style.height.indexOf("%")==-1)){return parseInt(e.style.width)}return e.offsetWidth};var aO=function(j){if(!j){return j}if(j.nodeType!=1){return aO(j.nextSibling)}if(j.tagName=="SCRIPT"){return aO(j.nextSibling)}var e=am(j);var n=aL(j);if(bd(e,n)){x=e;aK=n;return j}if(j.tagName=="IMG"){return aO(j.nextSibling)}if(!j.firstChild){return aO(j.nextSibling)}var i=aO(j.firstChild);if(i){return i}return aO(j.nextSibling)};function bf(i,e){return((e.width*e.height)/(i.width*i.height)>=0.5)}function bl(i,e){delete i.visibleTimeout;aC(e.takeRecords());if("isVisible" in i){delete i.isVisible;d=true;e.unobserve(i)}}var aC=function(e){e.forEach(function(i){p=true;var j=i.target;j.isVisible=bf(i.boundingClientRect,i.intersectionRect);if("isVisible" in j){j.visibleTimeout=setTimeout(bl,1000,j,an)}else{if("visibleTimeout" in j){clearTimeout(j.visibleTimeout);delete j.visibleTimeout}}})};var aY=function(){a9=aO(J.parentNode.firstChild);if(!a9&&(window!=top)){a9=aO(document.body)}if(a9){bo=true;bj=new Date().getTime()-aP;if(bj<1){bj=1}if(x!=0&&aK!=0){if((x*aK)>=aw){aM=0.3}}try{an=new IntersectionObserver(aC,{threshold:[aM]});if(an){aA=true;an.observe(a9)}}catch(i){}h()}};aY();if(bo&&z){aA=true;p=true}var a=false;var s=0;var q=0;var S=0;var ae=0;var d=false;var aZ=new Date().getTime();var bn=false;var bc=0;var O=0;var ac=[0,0,0,0,0,0,0];var ay=function(){var i=new Date().getTime();var e=i-aZ;aZ=i;return e};var bm=function(e){var j=0;var i=0;if(e.offsetParent){do{if(e.style.position=="fixed"){j=e.getBoundingClientRect().left;i=e.getBoundingClientRect().top;break}j+=e.offsetLeft;j-=e.scrollLeft;i+=e.offsetTop;i-=e.scrollTop}while((e=e.offsetParent)&&(e.tagName!="BODY"))}return[j,i]};var F=function(j){try{var bp=j.parent.document.getElementsByTagName("IFRAME");for(var n=0;n<bp.length;n++){if(bp[n].contentWindow==j){return bp[n]}}}catch(w){}return null};var W=function(){var i=0;var e=0;if(typeof(aQ.innerWidth)=="number"){i=aQ.innerWidth;e=aQ.innerHeight}else{if(aQ.document.documentElement&&(aQ.document.documentElement.clientWidth||aQ.document.documentElement.clientHeight)){i=aQ.document.documentElement.clientWidth;e=aQ.document.documentElement.clientHeight}}return[i,e]};var Y=function(){var i=0;var e=0;if(typeof(aQ.pageYOffset)=="number"){e=aQ.pageYOffset;i=aQ.pageXOffset}else{if(aQ.document.body&&(aQ.document.body.scrollLeft||aQ.document.body.scrollTop)){e=aQ.document.body.scrollTop;i=aQ.document.body.scrollLeft}else{if(aQ.document.documentElement&&(aQ.document.documentElement.scrollLeft||aQ.document.documentElement.scrollTop)){e=aQ.document.documentElement.scrollTop;i=aQ.document.documentElement.scrollLeft}}}return[i,e]};var U=false;var B=function(){bn=true;++O;if(aq){l=true;if(z){var bI=0;var bG=0;var bC=window;for(var bL=0;bL<16;++bL){try{var bx=F(bC);if(bx){var bt=bm(bx);bI+=bt[0];bG+=bt[1]}}catch(bN){}if(bC==window.top){break}bC=bC.parent}var bp=Y();var bE=bp[1];var bP=bp[0];var bF=W();var n=bE+bF[1];var bM=bP+bF[0];var bq=Math.max(aQ.document.documentElement.clientHeight,aQ.document.body.scrollHeight,aQ.document.documentElement.scrollHeight,aQ.document.body.offsetHeight,aQ.document.documentElement.offsetHeight);var bs=Math.max(aQ.document.documentElement.clientWidth,aQ.document.body.scrollWidth,aQ.document.documentElement.scrollWidth,aQ.document.body.offsetWidth,aQ.document.documentElement.offsetWidth);ac[0]+=bq;ac[1]+=bs;var bz=bq*0.2;var j=0;for(var bL=2;bL<7;++bL){var bA=j+bz;var by=bA-j;if(by<0){j=bA;continue}if(j<bE){j=bE}if(bA>n){bA=n}var bR=bA-j;j=bA;if(bR<=0){continue}ac[bL]+=Math.floor((bR/by)*1000)/1000}++bc;var bt=bm(a9);var bQ=bt[1]+bG;var bK=bt[0]+bI;var bu=bQ+a9.offsetHeight;var bD=bK+a9.offsetWidth;var bB=(bQ<bE)?bE:bQ;var br=(bK<bP)?bP:bK;var bJ=(bu>n)?n:bu;var bH=(bD>bM)?bM:bD;var bw=(bu-bQ)*(bD-bK);if(bw<0){bw=0}var bO=(bJ-bB)*(bH-br);if(bO<0){bO=0}s=bK;q=bQ;var bv=0;if(P){bv=1}else{if(bw>0){bv=Math.floor((bO/bw)*1000)/1000}if(!U){if((bQ+((bu-bQ)/2)<=bF[1])&&(bK+((bD-bK)/2)<=bF[0])){a=true}U=true}}if(bv>=aM){S+=bv;++ae}if(S>=10){d=true}}}};var k=function(bv,w,bu){var j="";var bq="";var i="";j+="cb="+Math.floor(Math.random()*90000000);if(bv){for(var bt in bv){j+="&"+bt+"="+encodeURIComponent(bv[bt])}}if(w){for(var br in w){if(br!="__aaam"){bq+="&"+br+"="+encodeURIComponent(w[br])}}if(w.__aaam){i+="&__aaam="+encodeURIComponent(w.__aaam)}}var bp=document.createElement("script");bp.setAttribute("type","text/javascript");var e=(aH+"//adrta.com/i?");e+=j;e+="&"+a4;if(r.length>0){e+="&"+r.join("")}e+=bq;e+=i;e=e.substring(0,a1);bp.setAttribute("src",e);if(bp.readyState){bp.onreadystatechange=function(){if(bp.readyState=="loaded"||bp.readyState=="complete"){bp.onreadystatechange=null;bp.parentNode.removeChild(bp);if(bu){bu()}}}}else{bp.onload=function(){bp.onload=null;bp.parentNode.removeChild(bp);if(bu){bu()}}}document.getElementsByTagName("head")[0].appendChild(bp);if(I&&typeof mraid!=="undefined"){var bs=document.createElement("script");bs.setAttribute("type","text/javascript");var n=(aH+"//testbed.pixalate.net/i?");n+=j;n+="&"+a4;if(r.length>0){n+="&"+r.join("")}n+=bq;n+=i;n=n.substring(0,a1);bs.setAttribute("src",n);if(bs.readyState){bs.onreadystatechange=function(){if(bs.readyState=="loaded"||bs.readyState=="complete"){bs.onreadystatechange=null;bs.parentNode.removeChild(bs);if(bu){bu()}}}}else{bs.onload=function(){bs.onload=null;bs.parentNode.removeChild(bs);if(bu){bu()}}}document.getElementsByTagName("head")[0].appendChild(bs)}};var aX=function(bt,n,bs){var j="";var bp="";var i="";j+="cb="+Math.floor(Math.random()*90000000);if(bt){for(var br in bt){j+="&"+br+"="+encodeURIComponent(bt[br])}}if(n){for(var bq in n){if(bq!="__aaam"){bp+="&"+bq+"="+encodeURIComponent(n[bq])}}if(n.__aaam){i+="&__aaam="+encodeURIComponent(n.__aaam)}}var w=document.createElement("script");w.setAttribute("type","text/javascript");var e=(aH+"//testbed.pixalate.net/i?");e+=j;e+="&"+a4;if(r.length>0){e+="&"+r.join("")}e+=bp;e+=i;e=e.substring(0,a1);w.setAttribute("src",e);if(w.readyState){w.onreadystatechange=function(){if(w.readyState=="loaded"||w.readyState=="complete"){w.onreadystatechange=null;w.parentNode.removeChild(w);if(bs){bs()}}}}else{w.onload=function(){w.onload=null;w.parentNode.removeChild(w);if(bs){bs()}}}document.getElementsByTagName("head")[0].appendChild(w)};var ah=function(br){var bq="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";var j="";var bz,bw,bu,by,bv,bt,bs;var w=0;br=br.replace(/\r\n/g,"\n");var bx="";for(var e=0;e<br.length;e++){var bp=br.charCodeAt(e);if(bp<128){bx+=String.fromCharCode(bp)}else{if((bp>127)&&(bp<2048)){bx+=String.fromCharCode((bp>>6)|192);bx+=String.fromCharCode((bp&63)|128)}else{bx+=String.fromCharCode((bp>>12)|224);bx+=String.fromCharCode(((bp>>6)&63)|128);bx+=String.fromCharCode((bp&63)|128)}}}br=bx;while(w<br.length){bz=br.charCodeAt(w++);bw=br.charCodeAt(w++);bu=br.charCodeAt(w++);by=bz>>2;bv=((bz&3)<<4)|(bw>>4);bt=((bw&15)<<2)|(bu>>6);bs=bu&63;if(isNaN(bw)){bt=bs=64}else{if(isNaN(bu)){bs=64}}j=j+bq.charAt(by)+bq.charAt(bv)+bq.charAt(bt)+bq.charAt(bs)}return j};var u=0;var M=0;var bg=false;var V=function(w){u++;var i={};var e={};i.__aasv=ab;i.__aaii=av;i.__aait=aU;if(__adrta__aasi.length>0){i.__aasi=__adrta__aasi;i.__aast=__adrta__aast}if(__adrta__aavi.length>0){i.__aavi=__adrta__aavi;i.__aavt=__adrta__aavt}i.__aavz=a0;i.__aaib=(((o>0)&&z)?1:0);i.__aaai=((o>0)?1:0);i.__aaaa=(a?1:0);i.__aafl=(z)?aQ.innerHeight||aQ.document.documentElement.clientHeight:0;i.__aaaf=(bo?1:0);i.__aaag=bj;i.__aaax=Math.floor(s);i.__aaay=Math.floor(q);if((x!=0)||(aK!=0)){i.__aasz=x+"x"+aK}i.__aapf=(l?1:0);if(at!=0){i.__aaec=at}if(!bn){i.__aaae=0;i.__aaat=0;i.__aaav=0;i.__aaas=0;i.__aaah=0;i.__aaph=0;i.__aapw=0;i.__aapc=0;i.__aap1=0;i.__aap2=0;i.__aap3=0;i.__aap4=0;i.__aap5=0}else{i.__aaup=u;l=false;if(ae==0){i.__aaat=0;i.__aaae=0}else{i.__aaat=ae*aS;i.__aaae=Math.round((S/ae)*1000)/1000;if(i.__aaat<=0||i.__aaae<=0){i.__aaat=0;i.__aaae=0}}i.__aaav=(d?1:0);S=0;ae=0;i.__aaas=ay();i.__aaah=G();if(i.__aaas<0){i.__aaas=0}if(i.__aaah<0){i.__aaah=0}if(i.__aaat>i.__aaas){i.__aaat=i.__aaas}if(i.__aaah>i.__aaas){i.__aaah=i.__aaas}if(O>0){i.__aapc=O*aS;O=0}if(bc>0){i.__aaph=Math.ceil(ac[0]/bc);i.__aapw=Math.ceil(ac[1]/bc);i.__aap1=Math.round((ac[2]/bc)*1000)/1000;i.__aap2=Math.round((ac[3]/bc)*1000)/1000;i.__aap3=Math.round((ac[4]/bc)*1000)/1000;i.__aap4=Math.round((ac[5]/bc)*1000)/1000;i.__aap5=Math.round((ac[6]/bc)*1000)/1000;for(var j=0;j<7;++j){ac[j]=0}bc=0}else{i.__aaph=0;i.__aapw=0;i.__aapc=0;i.__aap1=0;i.__aap2=0;i.__aap3=0;i.__aap4=0;i.__aap5=0}}if(aE){i.__aaab=1}if(screen&&screen.width&&screen.height){i.__aass=screen.width+"x"+screen.height}if(aA){i.__aaim=1}if(p){i.__aawm=1}if(au){i.__aanf=1}if(ad){i.__aacb=ad}if(a3!=""&&a3!="<%=ip%>"){i.__aaxf=a3}e.__aapu=aR;e.__aapr=ao;if(N&&N.indexOf("applewebdata://")==-1){e.__aatu=N}if(__adrta__aadb){i.__aadb=1;if(!bg){e.__aaam=ah(J.parentNode.innerHTML);bg=true}}if(typeof mraid!=="undefined"){i.__aams=JSON.stringify(ai);i.__aamv=mraid.getVersion()+"_"+ai.viewed;i.__aadb="m=1"}k(i,e,w)};var a5=function(w){M++;var i={};var e={};i.__aasv=ab;i.__aaii=av;i.__aait=aU;if(__adrta__aasi.length>0){i.__aasi=__adrta__aasi;i.__aast=__adrta__aast}if(__adrta__aavi.length>0){i.__aavi=__adrta__aavi;i.__aavt=__adrta__aavt}i.__aavz=a0;i.__aaib=(((o>0)&&z)?1:0);i.__aaai=((o>0)?1:0);i.__aaaa=(a?1:0);i.__aafl=(z)?aQ.innerHeight||aQ.document.documentElement.clientHeight:0;i.__aaaf=(bo?1:0);i.__aaag=bj;i.__aaax=Math.floor(s);i.__aaay=Math.floor(q);if((x!=0)||(aK!=0)){i.__aasz=x+"x"+aK}i.__aapf=(l?1:0);if(at!=0){i.__aaec=at}if(!bn){i.__aaae=0;i.__aaat=0;i.__aaav=0;i.__aaas=0;i.__aaah=0;i.__aaph=0;i.__aapw=0;i.__aapc=0;i.__aap1=0;i.__aap2=0;i.__aap3=0;i.__aap4=0;i.__aap5=0}else{i.__aaup=M;l=false;if(ae==0){i.__aaat=0;i.__aaae=0}else{i.__aaat=ae*aS;i.__aaae=Math.round((S/ae)*1000)/1000;if(i.__aaat<=0||i.__aaae<=0){i.__aaat=0;i.__aaae=0}}i.__aaav=(d?1:0);S=0;ae=0;i.__aaas=ay();i.__aaah=G();if(i.__aaas<0){i.__aaas=0}if(i.__aaah<0){i.__aaah=0}if(i.__aaat>i.__aaas){i.__aaat=i.__aaas}if(i.__aaah>i.__aaas){i.__aaah=i.__aaas}if(O>0){i.__aapc=O*aS;O=0}if(bc>0){i.__aaph=Math.ceil(ac[0]/bc);i.__aapw=Math.ceil(ac[1]/bc);i.__aap1=Math.round((ac[2]/bc)*1000)/1000;i.__aap2=Math.round((ac[3]/bc)*1000)/1000;i.__aap3=Math.round((ac[4]/bc)*1000)/1000;i.__aap4=Math.round((ac[5]/bc)*1000)/1000;i.__aap5=Math.round((ac[6]/bc)*1000)/1000;for(var j=0;j<7;++j){ac[j]=0}bc=0}else{i.__aaph=0;i.__aapw=0;i.__aapc=0;i.__aap1=0;i.__aap2=0;i.__aap3=0;i.__aap4=0;i.__aap5=0}}if(aE){i.__aaab=1}if(screen&&screen.width&&screen.height){i.__aass=screen.width+"x"+screen.height}if(aA){i.__aaim=1}if(p){i.__aawm=1}if(au){i.__aanf=1}if(ad){i.__aacb=ad}if(a3!=""&&a3!="<%=ip%>"){i.__aaxf=a3}e.__aapu=aR;e.__aapr=ao;if(N&&N.indexOf("applewebdata://")==-1){e.__aatu=N}if(__adrta__aadb){i.__aadb=1;if(!bg){e.__aaam=ah(J.parentNode.innerHTML);bg=true}}if(typeof mraid!=="undefined"){i.__aams=JSON.stringify(ai);i.__aamv=mraid.getVersion()+"_"+ai.viewed;i.__aadb="m=1"}if(g){aX(i,e,w)}};var K=v[bi++];var c=new Date().getTime()+K;var ar=false;function ax(){}ax.tag=function(i){var e=/\$\{PXL8_CLICK}/g;return i.replace(e,ax.getClickURL())};ax.getClickURL=function(){var e=be.join("&");if(r.length>0){e+="&"+r.join("")}return"http://adrta.com/c?clid="+Z+"&"+e+"&__aaii="+av+"&redirect="};var aB=0;var aF=0;var aG=0;var b=0;var m=false;var bb;var a2=0;var R=[];var a8=function(j){var n;if(!bb){bb=new Date().getTime();n=0}var w=(new Date().getTime()-bb)/1000;bb=new Date().getTime();n=Math.ceil((1/w));if(a2>=60){var e=R.reduce(function(bq,bp){return bq+bp});var i=Math.ceil(e/R.length);if(i>30&&m){m=false;p=true;d=true;return}else{m=true;aA=true}a2=0}else{if(n!==Infinity){R.push(n)}a2++}window.requestAnimationFrame(a8)};var aJ=false;var aj=function(){if(!aJ){window.requestAnimationFrame(a8);aJ=true}};var ai={};ai.state=null;ai.version=null;ai.position=null;ai.maxSize={width:0,height:0};ai.screenSize={width:0,height:0};ai.OrientProps={};ai.viewed=0;if(typeof mraid!=="undefined"){ai.state=mraid.getState();if(mraid.isReady()){ai.state=mraid.getState();ai.version=mraid.getVersion();ai.position=mraid.getCurrentPosition();ai.maxSize=mraid.getMaxSize();ai.screenSize=mraid.getScreenSize();ai.viewed=(mraid.isViewable()=="YES"||mraid.isViewable())?1:0;ai.OrientProps=mraid.getOrientationProperties();a5()}if(mraid.getState()==="loading"){mraid.addEventListener("ready",function(i){ai.state=mraid.getState();ai.version=mraid.getVersion();ai.position=mraid.getCurrentPosition();ai.maxSize=mraid.getMaxSize();ai.screenSize=mraid.getScreenSize();ai.viewed=(mraid.isViewable()=="YES"||mraid.isViewable())?1:0;ai.OrientProps=mraid.getOrientationProperties();a5()});mraid.addEventListener("viewableChange",function(i){ai.viewed=(mraid.isViewable()=="YES"||mraid.isViewable())?1:0;a5()})}mraid.addEventListener("exposureChange",function(i){ae=i})}var C=function(){aB+=1;aF=performance.now();if(aF-aG>=1000){b=Math.round(aB*1000/(aF-aG));aG=aF;aB=0}if(aW&&!z&&b<8&&bo){m=true;aA=true}if(aW&&m&&b>=10){p=true;d=true}try{var i=new Date().getTime();if(!bo){aY()}if(bo&&(__adrta__aasi.length>0)&&(__adrta__aast>0)&&(__adrta__aavi.length>0)&&(__adrta__aavt>0)){B();if(z){p=true;aA=true}if(!ar&&d){V();ar=true;c=i+K}else{if((l||(S>0))&&(c<=i)){V();if((o>0)&&!((o>0)&&z)){K=v[bi++]}else{K=v[bi++]}c=i+K}}}}catch(j){}if(K){window.setTimeout(C,aS)}};var bk,Q;if(typeof document.hidden!=="undefined"){bk="hidden";Q="visibilitychange"}else{if(typeof document.mozHidden!=="undefined"){bk="mozHidden";Q="mozvisibilitychange"}else{if(typeof document.msHidden!=="undefined"){bk="msHidden";Q="msvisibilitychange"}else{if(typeof document.webkitHidden!=="undefined"){bk="webkitHidden";Q="webkitvisibilitychange"}}}}var D=function(i){aq=!document[bk];document.removeEventListener("webkitvisibilitychange",D);if(window.__adrta__aasm==1){window.setTimeout(V,1000);window.setTimeout(C,100+aS)}else{window.__adrta__aasm=1;V();window.setTimeout(C,aS)}};if((typeof document.webkitVisibilityState=="undefined")||(typeof document.webkitVisibilityState!="undefined"&&document.webkitVisibilityState!="prerender")){if(window.__adrta__aasm==1){window.setTimeout(V,1000);window.setTimeout(C,100+aS)}else{window.__adrta__aasm=1;V();window.setTimeout(C,aS)}}else{if(typeof document.webkitVisibilityState!="undefined"&&document.webkitVisibilityState=="prerender"){document.addEventListener("webkitvisibilitychange",D,false)}}return ax})();