(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{105:function(e,t,r){"use strict";var n=r(32),i=r(106);n({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},106:function(e,t,r){"use strict";var n,i,a=r(108),c=r(112),l=r(36),o=RegExp.prototype.exec,u=l("native-string-replace",String.prototype.replace),s=o,p=(n=/a/,i=/b*/g,o.call(n,"a"),o.call(i,"a"),0!==n.lastIndex||0!==i.lastIndex),f=c.UNSUPPORTED_Y||c.BROKEN_CARET,d=void 0!==/()??/.exec("")[1];(p||d||f)&&(s=function(e){var t,r,n,i,c=this,l=f&&c.sticky,s=a.call(c),v=c.source,g=0,x=e;return l&&(-1===(s=s.replace("y","")).indexOf("g")&&(s+="g"),x=String(e).slice(c.lastIndex),c.lastIndex>0&&(!c.multiline||c.multiline&&"\n"!==e[c.lastIndex-1])&&(v="(?: "+v+")",x=" "+x,g++),r=new RegExp("^(?:"+v+")",s)),d&&(r=new RegExp("^"+v+"$(?!\\s)",s)),p&&(t=c.lastIndex),n=o.call(l?r:c,x),l?n?(n.input=n.input.slice(g),n[0]=n[0].slice(g),n.index=c.lastIndex,c.lastIndex+=n[0].length):c.lastIndex=0:p&&n&&(c.lastIndex=c.global?n.index+n[0].length:t),d&&n&&n.length>1&&u.call(n[0],r,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(n[i]=void 0)})),n}),e.exports=s},108:function(e,t,r){"use strict";var n=r(2);e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},109:function(e,t,r){"use strict";r(105);var n=r(9),i=r(4),a=r(1),c=r(6),l=a("species"),o=!i((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u="$0"==="a".replace(/./,"$0"),s=a("replace"),p=!!/./[s]&&""===/./[s]("a","$0"),f=!i((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));e.exports=function(e,t,r,s){var d=a(e),v=!i((function(){var t={};return t[d]=function(){return 7},7!=""[e](t)})),g=v&&!i((function(){var t=!1,r=/a/;return"split"===e&&((r={}).constructor={},r.constructor[l]=function(){return r},r.flags="",r[d]=/./[d]),r.exec=function(){return t=!0,null},r[d](""),!t}));if(!v||!g||"replace"===e&&(!o||!u||p)||"split"===e&&!f){var x=/./[d],h=r(d,""[e],(function(e,t,r,n,i){return t.exec===RegExp.prototype.exec?v&&!i?{done:!0,value:x.call(t,r,n)}:{done:!0,value:e.call(r,t,n)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),E=h[0],R=h[1];n(String.prototype,e,E),n(RegExp.prototype,d,2==t?function(e,t){return R.call(e,this,t)}:function(e){return R.call(e,this)})}s&&c(RegExp.prototype[d],"sham",!0)}},110:function(e,t,r){var n=r(17),i=r(106);e.exports=function(e,t){var r=e.exec;if("function"==typeof r){var a=r.call(e,t);if("object"!=typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==n(e))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(e,t)}},111:function(e,t,r){"use strict";var n=r(109),i=r(2),a=r(33),c=r(20),l=r(18),o=r(123),u=r(124),s=r(110),p=Math.max,f=Math.min;n("replace",2,(function(e,t,r,n){var d=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,v=n.REPLACE_KEEPS_$0,g=d?"$":"$0";return[function(r,n){var i=l(this),a=null==r?void 0:r[e];return void 0!==a?a.call(r,i,n):t.call(String(i),r,n)},function(e,n){if(!d&&v||"string"==typeof n&&-1===n.indexOf(g)){var l=r(t,e,this,n);if(l.done)return l.value}var x=i(e),h=String(this),E="function"==typeof n;E||(n=String(n));var R=x.global;if(R){var y=x.unicode;x.lastIndex=0}for(var S=[];;){var _=s(x,h);if(null===_)break;if(S.push(_),!R)break;""===String(_[0])&&(x.lastIndex=o(h,a(x.lastIndex),y))}for(var I,T="",$=0,b=0;b<S.length;b++){_=S[b];for(var A=String(_[0]),P=p(f(c(_.index),h.length),0),m=[],w=1;w<_.length;w++)m.push(void 0===(I=_[w])?I:String(I));var U=_.groups;if(E){var C=[A].concat(m,P,h);void 0!==U&&C.push(U);var N=String(n.apply(void 0,C))}else N=u(A,h,P,m,U,n);P>=$&&(T+=h.slice($,P)+N,$=P+A.length)}return T+h.slice($)}]}))},112:function(e,t,r){"use strict";var n=r(4);function i(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=n((function(){var e=i("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=n((function(){var e=i("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},123:function(e,t,r){"use strict";var n=r(63).charAt;e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},124:function(e,t,r){var n=r(53),i=Math.floor,a="".replace,c=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,l=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,r,o,u,s){var p=r+e.length,f=o.length,d=l;return void 0!==u&&(u=n(u),d=c),a.call(s,d,(function(n,a){var c;switch(a.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,r);case"'":return t.slice(p);case"<":c=u[a.slice(1,-1)];break;default:var l=+a;if(0===l)return n;if(l>f){var s=i(l/10);return 0===s?n:s<=f?void 0===o[s-1]?a.charAt(1):o[s-1]+a.charAt(1):n}c=o[l-1]}return void 0===c?"":c}))}},98:function(e,t,r){"use strict";r.r(t);r(105),r(111);var n=document.querySelectorAll(".hero-slider__slider--slide-heading"),i=/\*\*(\S+)\*\*/g;t.default=function(){document.querySelectorAll(".hero-slider__slider--slide-heading")&&function(e){for(var t=0,r=e.length;t<r;t++)(n=e[t]).innerHTML=n.innerHTML.replace(i,'<span class="typography__power-text">$1</span>');var n}(n)}}}]);