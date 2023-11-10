!function(f){"use strict";var g,x,y,w,v,r,E,S,i,T,$,z,b,C,R,o,l,e,c={},m=((f.respond=c).update=function(){},[]),a=function(){var t=!1;try{t=new f.XMLHttpRequest}catch(e){t=new f.ActiveXObject("Microsoft.XMLHTTP")}return function(){return t}}(),n=function(e,t){var n=a();n&&(n.open("GET",e,!0),n.onreadystatechange=function(){4!==n.readyState||200!==n.status&&304!==n.status||t(n.responseText)},4!==n.readyState)&&n.send(null)},p=function(e){return e.replace(c.regex.minmaxwh,"").match(c.regex.other)};function t(){R(!0)}c.ajax=n,c.queue=m,c.unsupportedmq=p,c.regex={media:/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,keyframes:/@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,comments:/\/\*[^*]*\*+([^/][^*]*\*+)*\//gi,urls:/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,findStyles:/@media *([^\{]+)\{([\S\s]+?)$/,only:/(only\s+)?([a-zA-Z]+)\s?/,minw:/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,maxw:/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,minmaxwh:/\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,other:/\([^\)]*\)/g},c.mediaQueriesSupported=f.matchMedia&&null!==f.matchMedia("only all")&&f.matchMedia("only all").matches,c.mediaQueriesSupported||(g=f.document,x=g.documentElement,y=[],w=[],v=[],r={},E=30,S=g.getElementsByTagName("head")[0]||x,i=g.getElementsByTagName("base")[0],T=S.getElementsByTagName("link"),C=function(){var e,t=g.createElement("div"),n=g.body,a=x.style.fontSize,s=n&&n.style.fontSize,r=!1;return t.style.cssText="position:absolute;font-size:1em;width:1em",n||((n=r=g.createElement("body")).style.background="none"),x.style.fontSize="100%",n.style.fontSize="100%",n.appendChild(t),r&&x.insertBefore(n,x.firstChild),e=t.offsetWidth,r?x.removeChild(n):n.removeChild(t),x.style.fontSize=a,s&&(n.style.fontSize=s),b=parseFloat(e),b},R=function(e){var t,n,a,s,r,i,o="clientWidth",l=x[o],m="CSS1Compat"===g.compatMode&&l||g.body[o]||l,h={},d=T[T.length-1],o=(new Date).getTime();if(e&&$&&o-$<E)f.clearTimeout(z),z=f.setTimeout(R,E);else{for(var u in $=o,y)y.hasOwnProperty(u)&&(t=null===(a=(u=y[u]).minw),n=null===(s=u.maxw),a=a&&parseFloat(a)*(-1<a.indexOf("em")?b||C():1),s=s&&parseFloat(s)*(-1<s.indexOf("em")?b||C():1),u.hasquery&&(t&&n||!(t||a<=m)||!(n||m<=s))||(h[u.media]||(h[u.media]=[]),h[u.media].push(w[u.rules])));for(var c in v)v.hasOwnProperty(c)&&v[c]&&v[c].parentNode===S&&S.removeChild(v[c]);for(var p in v.length=0,h)h.hasOwnProperty(p)&&(r=g.createElement("style"),i=h[p].join("\n"),r.type="text/css",r.media=p,S.insertBefore(r,d.nextSibling),r.styleSheet?r.styleSheet.cssText=i:r.appendChild(g.createTextNode(i)),v.push(r))}},o=function(e,t,n){function a(e){return e.replace(c.regex.urls,"$1"+t+"$2$3")}var s=e.replace(c.regex.comments,"").replace(c.regex.keyframes,"").match(c.regex.media),r=s&&s.length||0,i=!r&&n;(t=t.substring(0,t.lastIndexOf("/"))).length&&(t+="/"),i&&(r=1);for(var o,l,m=0;m<r;m++){i?(o=n,w.push(a(e))):(o=s[m].match(c.regex.findStyles)&&RegExp.$1,w.push(RegExp.$2&&a(RegExp.$2)));for(var h,d=(h=o.split(",")).length,u=0;u<d;u++)l=h[u],p(l)||y.push({media:l.split("(")[0].match(c.regex.only)&&RegExp.$2||"all",rules:w.length-1,hasquery:-1<l.indexOf("("),minw:l.match(c.regex.minw)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:l.match(c.regex.maxw)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}R()},l=function(){var t;m.length&&(t=m.shift(),n(t.href,function(e){o(e,t.href,t.media),r[t.href]=!0,f.setTimeout(function(){l()},0)}))},(e=function(){for(var e=0;e<T.length;e++){var t=T[e],n=t.href,a=t.media,s=t.rel&&"stylesheet"===t.rel.toLowerCase();n&&s&&!r[n]&&(t.styleSheet&&t.styleSheet.rawCssText?(o(t.styleSheet.rawCssText,n,a),r[n]=!0):(/^([a-zA-Z:]*\/\/)/.test(n)||i)&&n.replace(RegExp.$1,"").split("/")[0]!==f.location.host||("//"===n.substring(0,2)&&(n=f.location.protocol+n),m.push({href:n,media:a})))}l()})(),c.update=e,c.getEmValue=C,f.addEventListener?f.addEventListener("resize",t,!1):f.attachEvent&&f.attachEvent("onresize",t))}(this);