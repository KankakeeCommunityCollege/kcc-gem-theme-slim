(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{105:function(e,t,n){"use strict";n.r(t);n(112),n(118),n(129);var r=document.getElementById("navGlobalBottom");t.default=function(){if("/"!==window.location.pathname)for(var e=r.querySelectorAll("li"),t=window.location.pathname.replace(/(^\/|\/$)/g,""),n=0,a=e.length;n<a;n++){var i=e[n].dataset.nav;if(-1!==t.search(i))return e[n].querySelector("a").classList.add("header-global__nav-bottom--underlined")}}},112:function(e,t,n){"use strict";var r=n(32),a=n(113);r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},113:function(e,t,n){"use strict";var r,a,i=n(115),c=n(119),l=n(36),o=RegExp.prototype.exec,u=l("native-string-replace",String.prototype.replace),s=o,f=(r=/a/,a=/b*/g,o.call(r,"a"),o.call(a,"a"),0!==r.lastIndex||0!==a.lastIndex),p=c.UNSUPPORTED_Y||c.BROKEN_CARET,v=void 0!==/()??/.exec("")[1];(f||v||p)&&(s=function(e){var t,n,r,a,c=this,l=p&&c.sticky,s=i.call(c),d=c.source,x=0,g=e;return l&&(-1===(s=s.replace("y","")).indexOf("g")&&(s+="g"),g=String(e).slice(c.lastIndex),c.lastIndex>0&&(!c.multiline||c.multiline&&"\n"!==e[c.lastIndex-1])&&(d="(?: "+d+")",g=" "+g,x++),n=new RegExp("^(?:"+d+")",s)),v&&(n=new RegExp("^"+d+"$(?!\\s)",s)),f&&(t=c.lastIndex),r=o.call(l?n:c,g),l?r?(r.input=r.input.slice(x),r[0]=r[0].slice(x),r.index=c.lastIndex,c.lastIndex+=r[0].length):c.lastIndex=0:f&&r&&(c.lastIndex=c.global?r.index+r[0].length:t),v&&r&&r.length>1&&u.call(r[0],n,(function(){for(a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(r[a]=void 0)})),r}),e.exports=s},115:function(e,t,n){"use strict";var r=n(2);e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},116:function(e,t,n){"use strict";n(112);var r=n(9),a=n(4),i=n(1),c=n(6),l=i("species"),o=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u="$0"==="a".replace(/./,"$0"),s=i("replace"),f=!!/./[s]&&""===/./[s]("a","$0"),p=!a((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,s){var v=i(e),d=!a((function(){var t={};return t[v]=function(){return 7},7!=""[e](t)})),x=d&&!a((function(){var t=!1,n=/a/;return"split"===e&&((n={}).constructor={},n.constructor[l]=function(){return n},n.flags="",n[v]=/./[v]),n.exec=function(){return t=!0,null},n[v](""),!t}));if(!d||!x||"replace"===e&&(!o||!u||f)||"split"===e&&!p){var g=/./[v],h=n(v,""[e],(function(e,t,n,r,a){return t.exec===RegExp.prototype.exec?d&&!a?{done:!0,value:g.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),E=h[0],R=h[1];r(String.prototype,e,E),r(RegExp.prototype,v,2==t?function(e,t){return R.call(e,this,t)}:function(e){return R.call(e,this)})}s&&c(RegExp.prototype[v],"sham",!0)}},117:function(e,t,n){var r=n(17),a=n(113);e.exports=function(e,t){var n=e.exec;if("function"==typeof n){var i=n.call(e,t);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},118:function(e,t,n){"use strict";var r=n(116),a=n(2),i=n(33),c=n(20),l=n(18),o=n(130),u=n(131),s=n(117),f=Math.max,p=Math.min;r("replace",2,(function(e,t,n,r){var v=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,d=r.REPLACE_KEEPS_$0,x=v?"$":"$0";return[function(n,r){var a=l(this),i=null==n?void 0:n[e];return void 0!==i?i.call(n,a,r):t.call(String(a),n,r)},function(e,r){if(!v&&d||"string"==typeof r&&-1===r.indexOf(x)){var l=n(t,e,this,r);if(l.done)return l.value}var g=a(e),h=String(this),E="function"==typeof r;E||(r=String(r));var R=g.global;if(R){var I=g.unicode;g.lastIndex=0}for(var S=[];;){var y=s(g,h);if(null===y)break;if(S.push(y),!R)break;""===String(y[0])&&(g.lastIndex=o(h,i(g.lastIndex),I))}for(var b,_="",m=0,w=0;w<S.length;w++){y=S[w];for(var $=String(y[0]),A=f(p(c(y.index),h.length),0),P=[],T=1;T<y.length;T++)P.push(void 0===(b=y[T])?b:String(b));var U=y.groups;if(E){var C=[$].concat(P,A,h);void 0!==U&&C.push(U);var N=String(r.apply(void 0,C))}else N=u($,h,A,P,U,r);A>=m&&(_+=h.slice(m,A)+N,m=A+$.length)}return _+h.slice(m)}]}))},119:function(e,t,n){"use strict";var r=n(4);function a(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=r((function(){var e=a("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=a("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},129:function(e,t,n){"use strict";var r=n(116),a=n(2),i=n(18),c=n(134),l=n(117);r("search",1,(function(e,t,n){return[function(t){var n=i(this),r=null==t?void 0:t[e];return void 0!==r?r.call(t,n):new RegExp(t)[e](String(n))},function(e){var r=n(t,e,this);if(r.done)return r.value;var i=a(e),o=String(this),u=i.lastIndex;c(u,0)||(i.lastIndex=0);var s=l(i,o);return c(i.lastIndex,u)||(i.lastIndex=u),null===s?-1:s.index}]}))},130:function(e,t,n){"use strict";var r=n(63).charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},131:function(e,t,n){var r=n(53),a=Math.floor,i="".replace,c=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,l=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,o,u,s){var f=n+e.length,p=o.length,v=l;return void 0!==u&&(u=r(u),v=c),i.call(s,v,(function(r,i){var c;switch(i.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,n);case"'":return t.slice(f);case"<":c=u[i.slice(1,-1)];break;default:var l=+i;if(0===l)return r;if(l>p){var s=a(l/10);return 0===s?r:s<=p?void 0===o[s-1]?i.charAt(1):o[s-1]+i.charAt(1):r}c=o[l-1]}return void 0===c?"":c}))}},134:function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}}}]);