(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4407],{17761:function(e,n){"use strict";n.Z=function(e){var n={};return function(t){return void 0===n[t]&&(n[t]=e(t)),n[t]}}},63588:function(e,n){var t;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var o=typeof t;if("string"===o||"number"===o)e.push(t);else if(Array.isArray(t)){if(t.length){var l=i.apply(null,t);l&&e.push(l)}}else if("object"===o){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var a in t)r.call(t,a)&&t[a]&&e.push(a)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(t=function(){return i}.apply(n,[]))||(e.exports=t)}()},49032:function(e,n){!function(e){"use strict";function n(){}function t(e,n,t,r,i){for(var o=0,l=n.length,a=0,s=0;o<l;o++){var u=n[o];if(u.removed){if(u.value=e.join(r.slice(s,s+u.count)),s+=u.count,o&&n[o-1].added){var d=n[o-1];n[o-1]=n[o],n[o]=d}}else{if(!u.added&&i){var f=t.slice(a,a+u.count);f=f.map((function(e,n){var t=r[s+n];return t.length>e.length?t:e})),u.value=e.join(f)}else u.value=e.join(t.slice(a,a+u.count));a+=u.count,u.added||(s+=u.count)}}var c=n[l-1];return l>1&&"string"===typeof c.value&&(c.added||c.removed)&&e.equals("",c.value)&&(n[l-2].value+=c.value,n.pop()),n}function r(e){return{newPos:e.newPos,components:e.components.slice(0)}}n.prototype={diff:function(e,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=i.callback;"function"===typeof i&&(o=i,i={}),this.options=i;var l=this;function a(e){return o?(setTimeout((function(){o(void 0,e)}),0),!0):e}e=this.castInput(e),n=this.castInput(n),e=this.removeEmpty(this.tokenize(e));var s=(n=this.removeEmpty(this.tokenize(n))).length,u=e.length,d=1,f=s+u,c=[{newPos:-1,components:[]}],p=this.extractCommon(c[0],n,e,0);if(c[0].newPos+1>=s&&p+1>=u)return a([{value:this.join(n),count:n.length}]);function h(){for(var i=-1*d;i<=d;i+=2){var o=void 0,f=c[i-1],p=c[i+1],h=(p?p.newPos:0)-i;f&&(c[i-1]=void 0);var g=f&&f.newPos+1<s,v=p&&0<=h&&h<u;if(g||v){if(!g||v&&f.newPos<p.newPos?(o=r(p),l.pushComponent(o.components,void 0,!0)):((o=f).newPos++,l.pushComponent(o.components,!0,void 0)),h=l.extractCommon(o,n,e,i),o.newPos+1>=s&&h+1>=u)return a(t(l,o.components,n,e,l.useLongestToken));c[i]=o}else c[i]=void 0}d++}if(o)!function e(){setTimeout((function(){if(d>f)return o();h()||e()}),0)}();else for(;d<=f;){var g=h();if(g)return g}},pushComponent:function(e,n,t){var r=e[e.length-1];r&&r.added===n&&r.removed===t?e[e.length-1]={count:r.count+1,added:n,removed:t}:e.push({count:1,added:n,removed:t})},extractCommon:function(e,n,t,r){for(var i=n.length,o=t.length,l=e.newPos,a=l-r,s=0;l+1<i&&a+1<o&&this.equals(n[l+1],t[a+1]);)l++,a++,s++;return s&&e.components.push({count:s}),e.newPos=l,a},equals:function(e,n){return this.options.comparator?this.options.comparator(e,n):e===n||this.options.ignoreCase&&e.toLowerCase()===n.toLowerCase()},removeEmpty:function(e){for(var n=[],t=0;t<e.length;t++)e[t]&&n.push(e[t]);return n},castInput:function(e){return e},tokenize:function(e){return e.split("")},join:function(e){return e.join("")}};var i=new n;function o(e,n,t){return i.diff(e,n,t)}function l(e,n){if("function"===typeof e)n.callback=e;else if(e)for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t]);return n}var a=/^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/,s=/\S/,u=new n;function d(e,n,t){return t=l(t,{ignoreWhitespace:!0}),u.diff(e,n,t)}function f(e,n,t){return u.diff(e,n,t)}u.equals=function(e,n){return this.options.ignoreCase&&(e=e.toLowerCase(),n=n.toLowerCase()),e===n||this.options.ignoreWhitespace&&!s.test(e)&&!s.test(n)},u.tokenize=function(e){for(var n=e.split(/(\s+|[()[\]{}'"]|\b)/),t=0;t<n.length-1;t++)!n[t+1]&&n[t+2]&&a.test(n[t])&&a.test(n[t+2])&&(n[t]+=n[t+2],n.splice(t+1,2),t--);return n};var c=new n;function p(e,n,t){return c.diff(e,n,t)}function h(e,n,t){var r=l(t,{ignoreWhitespace:!0});return c.diff(e,n,r)}c.tokenize=function(e){var n=[],t=e.split(/(\n|\r\n)/);t[t.length-1]||t.pop();for(var r=0;r<t.length;r++){var i=t[r];r%2&&!this.options.newlineIsToken?n[n.length-1]+=i:(this.options.ignoreWhitespace&&(i=i.trim()),n.push(i))}return n};var g=new n;function v(e,n,t){return g.diff(e,n,t)}g.tokenize=function(e){return e.split(/(\S.+?[.!?])(?=\s+|$)/)};var m=new n;function y(e,n,t){return m.diff(e,n,t)}function b(e){return b="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function w(e){return k(e)||L(e)||x()}function k(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}function L(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function x(){throw new TypeError("Invalid attempt to spread non-iterable instance")}m.tokenize=function(e){return e.split(/([{}:;,]|\s+)/)};var E=Object.prototype.toString,C=new n;function N(e,n,t){return C.diff(e,n,t)}function S(e,n,t,r,i){var o,l;for(n=n||[],t=t||[],r&&(e=r(i,e)),o=0;o<n.length;o+=1)if(n[o]===e)return t[o];if("[object Array]"===E.call(e)){for(n.push(e),l=new Array(e.length),t.push(l),o=0;o<e.length;o+=1)l[o]=S(e[o],n,t,r,i);return n.pop(),t.pop(),l}if(e&&e.toJSON&&(e=e.toJSON()),"object"===b(e)&&null!==e){n.push(e),l={},t.push(l);var a,s=[];for(a in e)e.hasOwnProperty(a)&&s.push(a);for(s.sort(),o=0;o<s.length;o+=1)l[a=s[o]]=S(e[a],n,t,r,a);n.pop(),t.pop()}else l=e;return l}C.useLongestToken=!0,C.tokenize=c.tokenize,C.castInput=function(e){var n=this.options,t=n.undefinedReplacement,r=n.stringifyReplacer,i=void 0===r?function(e,n){return"undefined"===typeof n?t:n}:r;return"string"===typeof e?e:JSON.stringify(S(e,null,null,i),i,"  ")},C.equals=function(e,t){return n.prototype.equals.call(C,e.replace(/,([\r\n])/g,"$1"),t.replace(/,([\r\n])/g,"$1"))};var D=new n;function A(e,n,t){return D.diff(e,n,t)}function T(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.split(/\r\n|[\n\v\f\r\x85]/),r=e.match(/\r\n|[\n\v\f\r\x85]/g)||[],i=[],o=0;function l(){var e={};for(i.push(e);o<t.length;){var r=t[o];if(/^(\-\-\-|\+\+\+|@@)\s/.test(r))break;var l=/^(?:Index:|diff(?: -r \w+)+)\s+(.+?)\s*$/.exec(r);l&&(e.index=l[1]),o++}for(a(e),a(e),e.hunks=[];o<t.length;){var u=t[o];if(/^(Index:|diff|\-\-\-|\+\+\+)\s/.test(u))break;if(/^@@/.test(u))e.hunks.push(s());else{if(u&&n.strict)throw new Error("Unknown line "+(o+1)+" "+JSON.stringify(u));o++}}}function a(e){var n=/^(---|\+\+\+)\s+(.*)$/.exec(t[o]);if(n){var r="---"===n[1]?"old":"new",i=n[2].split("\t",2),l=i[0].replace(/\\\\/g,"\\");/^".*"$/.test(l)&&(l=l.substr(1,l.length-2)),e[r+"FileName"]=l,e[r+"Header"]=(i[1]||"").trim(),o++}}function s(){for(var e=o,i=t[o++].split(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/),l={oldStart:+i[1],oldLines:+i[2]||1,newStart:+i[3],newLines:+i[4]||1,lines:[],linedelimiters:[]},a=0,s=0;o<t.length&&!(0===t[o].indexOf("--- ")&&o+2<t.length&&0===t[o+1].indexOf("+++ ")&&0===t[o+2].indexOf("@@"));o++){var u=0==t[o].length&&o!=t.length-1?" ":t[o][0];if("+"!==u&&"-"!==u&&" "!==u&&"\\"!==u)break;l.lines.push(t[o]),l.linedelimiters.push(r[o]||"\n"),"+"===u?a++:"-"===u?s++:" "===u&&(a++,s++)}if(a||1!==l.newLines||(l.newLines=0),s||1!==l.oldLines||(l.oldLines=0),n.strict){if(a!==l.newLines)throw new Error("Added line count did not match for hunk at line "+(e+1));if(s!==l.oldLines)throw new Error("Removed line count did not match for hunk at line "+(e+1))}return l}for(;o<t.length;)l();return i}function F(e,n,t){var r=!0,i=!1,o=!1,l=1;return function a(){if(r&&!o){if(i?l++:r=!1,e+l<=t)return l;o=!0}if(!i)return o||(r=!0),n<=e-l?-l++:(i=!0,a())}}function B(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof n&&(n=T(n)),Array.isArray(n)){if(n.length>1)throw new Error("applyPatch only works with a single input.");n=n[0]}var r,i,o=e.split(/\r\n|[\n\v\f\r\x85]/),l=e.match(/\r\n|[\n\v\f\r\x85]/g)||[],a=n.hunks,s=t.compareLine||function(e,n,t,r){return n===r},u=0,d=t.fuzzFactor||0,f=0,c=0;function p(e,n){for(var t=0;t<e.lines.length;t++){var r=e.lines[t],i=r.length>0?r[0]:" ",l=r.length>0?r.substr(1):r;if(" "===i||"-"===i){if(!s(n+1,o[n],i,l)&&++u>d)return!1;n++}}return!0}for(var h=0;h<a.length;h++){for(var g=a[h],v=o.length-g.oldLines,m=0,y=c+g.oldStart-1,b=F(y,f,v);void 0!==m;m=b())if(p(g,y+m)){g.offset=c+=m;break}if(void 0===m)return!1;f=g.offset+g.oldStart+g.oldLines}for(var w=0,k=0;k<a.length;k++){var L=a[k],x=L.oldStart+L.offset+w-1;w+=L.newLines-L.oldLines,x<0&&(x=0);for(var E=0;E<L.lines.length;E++){var C=L.lines[E],N=C.length>0?C[0]:" ",S=C.length>0?C.substr(1):C,D=L.linedelimiters[E];if(" "===N)x++;else if("-"===N)o.splice(x,1),l.splice(x,1);else if("+"===N)o.splice(x,0,S),l.splice(x,0,D),x++;else if("\\"===N){var A=L.lines[E-1]?L.lines[E-1][0]:null;"+"===A?r=!0:"-"===A&&(i=!0)}}}if(r)for(;!o[o.length-1];)o.pop(),l.pop();else i&&(o.push(""),l.push("\n"));for(var B=0;B<o.length-1;B++)o[B]=o[B]+l[B];return o.join("")}function O(e,n){"string"===typeof e&&(e=T(e));var t=0;function r(){var i=e[t++];if(!i)return n.complete();n.loadFile(i,(function(e,t){if(e)return n.complete(e);var o=B(t,i,n);n.patched(i,o,(function(e){if(e)return n.complete(e);r()}))}))}r()}function R(e,n,t,r,i,o,l){l||(l={}),"undefined"===typeof l.context&&(l.context=4);var a=p(t,r,l);function s(e){return e.map((function(e){return" "+e}))}a.push({value:"",lines:[]});for(var u=[],d=0,f=0,c=[],h=1,g=1,v=function(e){var n=a[e],i=n.lines||n.value.replace(/\n$/,"").split("\n");if(n.lines=i,n.added||n.removed){var o;if(!d){var p=a[e-1];d=h,f=g,p&&(c=l.context>0?s(p.lines.slice(-l.context)):[],d-=c.length,f-=c.length)}(o=c).push.apply(o,w(i.map((function(e){return(n.added?"+":"-")+e})))),n.added?g+=i.length:h+=i.length}else{if(d)if(i.length<=2*l.context&&e<a.length-2){var v;(v=c).push.apply(v,w(s(i)))}else{var m,y=Math.min(i.length,l.context);(m=c).push.apply(m,w(s(i.slice(0,y))));var b={oldStart:d,oldLines:h-d+y,newStart:f,newLines:g-f+y,lines:c};if(e>=a.length-2&&i.length<=l.context){var k=/\n$/.test(t),L=/\n$/.test(r),x=0==i.length&&c.length>b.oldLines;!k&&x&&c.splice(b.oldLines,0,"\\ No newline at end of file"),(k||x)&&L||c.push("\\ No newline at end of file")}u.push(b),d=0,f=0,c=[]}h+=i.length,g+=i.length}},m=0;m<a.length;m++)v(m);return{oldFileName:e,newFileName:n,oldHeader:i,newHeader:o,hunks:u}}function _(e,n,t,r,i,o,l){var a=R(e,n,t,r,i,o,l),s=[];e==n&&s.push("Index: "+e),s.push("==================================================================="),s.push("--- "+a.oldFileName+("undefined"===typeof a.oldHeader?"":"\t"+a.oldHeader)),s.push("+++ "+a.newFileName+("undefined"===typeof a.newHeader?"":"\t"+a.newHeader));for(var u=0;u<a.hunks.length;u++){var d=a.hunks[u];s.push("@@ -"+d.oldStart+","+d.oldLines+" +"+d.newStart+","+d.newLines+" @@"),s.push.apply(s,d.lines)}return s.join("\n")+"\n"}function P(e,n,t,r,i,o){return _(e,e,n,t,r,i,o)}function V(e,n){return e.length===n.length&&j(e,n)}function j(e,n){if(n.length>e.length)return!1;for(var t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0}function G(e){var n=te(e.lines),t=n.oldLines,r=n.newLines;void 0!==t?e.oldLines=t:delete e.oldLines,void 0!==r?e.newLines=r:delete e.newLines}function I(e,n,t){e=H(e,t),n=H(n,t);var r={};(e.index||n.index)&&(r.index=e.index||n.index),(e.newFileName||n.newFileName)&&(M(e)?M(n)?(r.oldFileName=W(r,e.oldFileName,n.oldFileName),r.newFileName=W(r,e.newFileName,n.newFileName),r.oldHeader=W(r,e.oldHeader,n.oldHeader),r.newHeader=W(r,e.newHeader,n.newHeader)):(r.oldFileName=e.oldFileName,r.newFileName=e.newFileName,r.oldHeader=e.oldHeader,r.newHeader=e.newHeader):(r.oldFileName=n.oldFileName||e.oldFileName,r.newFileName=n.newFileName||e.newFileName,r.oldHeader=n.oldHeader||e.oldHeader,r.newHeader=n.newHeader||e.newHeader)),r.hunks=[];for(var i=0,o=0,l=0,a=0;i<e.hunks.length||o<n.hunks.length;){var s=e.hunks[i]||{oldStart:1/0},u=n.hunks[o]||{oldStart:1/0};if(z(s,u))r.hunks.push(q(s,l)),i++,a+=s.newLines-s.oldLines;else if(z(u,s))r.hunks.push(q(u,a)),o++,l+=u.newLines-u.oldLines;else{var d={oldStart:Math.min(s.oldStart,u.oldStart),oldLines:0,newStart:Math.min(s.newStart+l,u.oldStart+a),newLines:0,lines:[]};$(d,s.oldStart,s.lines,u.oldStart,u.lines),o++,i++,r.hunks.push(d)}}return r}function H(e,n){if("string"===typeof e){if(/^@@/m.test(e)||/^Index:/m.test(e))return T(e)[0];if(!n)throw new Error("Must provide a base reference or pass in a patch");return R(void 0,void 0,n,e)}return e}function M(e){return e.newFileName&&e.newFileName!==e.oldFileName}function W(e,n,t){return n===t?n:(e.conflict=!0,{mine:n,theirs:t})}function z(e,n){return e.oldStart<n.oldStart&&e.oldStart+e.oldLines<n.oldStart}function q(e,n){return{oldStart:e.oldStart,oldLines:e.oldLines,newStart:e.newStart+n,newLines:e.newLines,lines:e.lines}}function $(e,n,t,r,i){var o={offset:n,lines:t,index:0},l={offset:r,lines:i,index:0};for(X(e,o,l),X(e,l,o);o.index<o.lines.length&&l.index<l.lines.length;){var a=o.lines[o.index],s=l.lines[l.index];if("-"!==a[0]&&"+"!==a[0]||"-"!==s[0]&&"+"!==s[0])if("+"===a[0]&&" "===s[0]){var u;(u=e.lines).push.apply(u,w(K(o)))}else if("+"===s[0]&&" "===a[0]){var d;(d=e.lines).push.apply(d,w(K(l)))}else"-"===a[0]&&" "===s[0]?Z(e,o,l):"-"===s[0]&&" "===a[0]?Z(e,l,o,!0):a===s?(e.lines.push(a),o.index++,l.index++):J(e,K(o),K(l));else U(e,o,l)}Y(e,o),Y(e,l),G(e)}function U(e,n,t){var r=K(n),i=K(t);if(ee(r)&&ee(i)){var o,l;if(j(r,i)&&ne(t,r,r.length-i.length))return void(o=e.lines).push.apply(o,w(r));if(j(i,r)&&ne(n,i,i.length-r.length))return void(l=e.lines).push.apply(l,w(i))}else if(V(r,i)){var a;return void(a=e.lines).push.apply(a,w(r))}J(e,r,i)}function Z(e,n,t,r){var i,o=K(n),l=Q(t,o);l.merged?(i=e.lines).push.apply(i,w(l.merged)):J(e,r?l:o,r?o:l)}function J(e,n,t){e.conflict=!0,e.lines.push({conflict:!0,mine:n,theirs:t})}function X(e,n,t){for(;n.offset<t.offset&&n.index<n.lines.length;){var r=n.lines[n.index++];e.lines.push(r),n.offset++}}function Y(e,n){for(;n.index<n.lines.length;){var t=n.lines[n.index++];e.lines.push(t)}}function K(e){for(var n=[],t=e.lines[e.index][0];e.index<e.lines.length;){var r=e.lines[e.index];if("-"===t&&"+"===r[0]&&(t="+"),t!==r[0])break;n.push(r),e.index++}return n}function Q(e,n){for(var t=[],r=[],i=0,o=!1,l=!1;i<n.length&&e.index<e.lines.length;){var a=e.lines[e.index],s=n[i];if("+"===s[0])break;if(o=o||" "!==a[0],r.push(s),i++,"+"===a[0])for(l=!0;"+"===a[0];)t.push(a),a=e.lines[++e.index];s.substr(1)===a.substr(1)?(t.push(a),e.index++):l=!0}if("+"===(n[i]||"")[0]&&o&&(l=!0),l)return t;for(;i<n.length;)r.push(n[i++]);return{merged:r,changes:t}}function ee(e){return e.reduce((function(e,n){return e&&"-"===n[0]}),!0)}function ne(e,n,t){for(var r=0;r<t;r++){var i=n[n.length-t+r].substr(1);if(e.lines[e.index+r]!==" "+i)return!1}return e.index+=t,!0}function te(e){var n=0,t=0;return e.forEach((function(e){if("string"!==typeof e){var r=te(e.mine),i=te(e.theirs);void 0!==n&&(r.oldLines===i.oldLines?n+=r.oldLines:n=void 0),void 0!==t&&(r.newLines===i.newLines?t+=r.newLines:t=void 0)}else void 0===t||"+"!==e[0]&&" "!==e[0]||t++,void 0===n||"-"!==e[0]&&" "!==e[0]||n++})),{oldLines:n,newLines:t}}function re(e){for(var n,t,r=[],i=0;i<e.length;i++)t=(n=e[i]).added?1:n.removed?-1:0,r.push([t,n.value]);return r}function ie(e){for(var n=[],t=0;t<e.length;t++){var r=e[t];r.added?n.push("<ins>"):r.removed&&n.push("<del>"),n.push(oe(r.value)),r.added?n.push("</ins>"):r.removed&&n.push("</del>")}return n.join("")}function oe(e){var n=e;return n=(n=(n=(n=n.replace(/&/g,"&amp;")).replace(/</g,"&lt;")).replace(/>/g,"&gt;")).replace(/"/g,"&quot;")}D.tokenize=function(e){return e.slice()},D.join=D.removeEmpty=function(e){return e},e.Diff=n,e.diffChars=o,e.diffWords=d,e.diffWordsWithSpace=f,e.diffLines=p,e.diffTrimmedLines=h,e.diffSentences=v,e.diffCss=y,e.diffJson=N,e.diffArrays=A,e.structuredPatch=R,e.createTwoFilesPatch=_,e.createPatch=P,e.applyPatch=B,e.applyPatches=O,e.parsePatch=T,e.merge=I,e.convertChangesToDMP=re,e.convertChangesToXML=ie,e.canonicalize=S,Object.defineProperty(e,"__esModule",{value:!0})}(n)},2961:function(e,n,t){"use strict";t.r(n),t.d(n,{cache:function(){return G},css:function(){return V},cx:function(){return B},flush:function(){return T},getRegisteredStyles:function(){return R},hydrate:function(){return F},injectGlobal:function(){return _},keyframes:function(){return P},merge:function(){return O},sheet:function(){return j}});var r=function(){function e(e){this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.before=null}var n=e.prototype;return n.insert=function(e){if(this.ctr%(this.isSpeedy?65e3:1)===0){var n,t=function(e){var n=document.createElement("style");return n.setAttribute("data-emotion",e.key),void 0!==e.nonce&&n.setAttribute("nonce",e.nonce),n.appendChild(document.createTextNode("")),n}(this);n=0===this.tags.length?this.before:this.tags[this.tags.length-1].nextSibling,this.container.insertBefore(t,n),this.tags.push(t)}var r=this.tags[this.tags.length-1];if(this.isSpeedy){var i=function(e){if(e.sheet)return e.sheet;for(var n=0;n<document.styleSheets.length;n++)if(document.styleSheets[n].ownerNode===e)return document.styleSheets[n]}(r);try{var o=105===e.charCodeAt(1)&&64===e.charCodeAt(0);i.insertRule(e,o?0:i.cssRules.length)}catch(l){0}}else r.appendChild(document.createTextNode(e));this.ctr++},n.flush=function(){this.tags.forEach((function(e){return e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),i=t(83065),o="/*|*/";function l(e){e&&a.current.insert(e+"}")}var a={current:null},s=function(e,n,t,r,i,s,u,d,f,c){switch(e){case 1:switch(n.charCodeAt(0)){case 64:return a.current.insert(n+";"),"";case 108:if(98===n.charCodeAt(2))return""}break;case 2:if(0===d)return n+o;break;case 3:switch(d){case 102:case 112:return a.current.insert(t[0]+n),"";default:return n+(0===c?o:"")}case-2:n.split("/*|*/}").forEach(l)}},u=function(e){void 0===e&&(e={});var n,t=e.key||"css";void 0!==e.prefix&&(n={prefix:e.prefix});var o=new i.Z(n);var l,u={};l=e.container||document.head;var d,f=document.querySelectorAll("style[data-emotion-"+t+"]");Array.prototype.forEach.call(f,(function(e){e.getAttribute("data-emotion-"+t).split(" ").forEach((function(e){u[e]=!0})),e.parentNode!==l&&l.appendChild(e)})),o.use(e.stylisPlugins)(s),d=function(e,n,t,r){var i=n.name;a.current=t,o(e,n.styles),r&&(c.inserted[i]=!0)};var c={key:t,sheet:new r({key:t,container:l,nonce:e.nonce,speedy:e.speedy}),nonce:e.nonce,inserted:u,registered:{},insert:d};return c};var d=function(e){for(var n,t=0,r=0,i=e.length;i>=4;++r,i-=4)n=1540483477*(65535&(n=255&e.charCodeAt(r)|(255&e.charCodeAt(++r))<<8|(255&e.charCodeAt(++r))<<16|(255&e.charCodeAt(++r))<<24))+(59797*(n>>>16)<<16),t=1540483477*(65535&(n^=n>>>24))+(59797*(n>>>16)<<16)^1540483477*(65535&t)+(59797*(t>>>16)<<16);switch(i){case 3:t^=(255&e.charCodeAt(r+2))<<16;case 2:t^=(255&e.charCodeAt(r+1))<<8;case 1:t=1540483477*(65535&(t^=255&e.charCodeAt(r)))+(59797*(t>>>16)<<16)}return(((t=1540483477*(65535&(t^=t>>>13))+(59797*(t>>>16)<<16))^t>>>15)>>>0).toString(36)},f=t(86130),c=t(17761),p=/[A-Z]|^ms/g,h=/_EMO_([^_]+?)_([^]*?)_EMO_/g,g=function(e){return 45===e.charCodeAt(1)},v=function(e){return null!=e&&"boolean"!==typeof e},m=(0,c.Z)((function(e){return g(e)?e:e.replace(p,"-$&").toLowerCase()})),y=function(e,n){switch(e){case"animation":case"animationName":if("string"===typeof n)return n.replace(h,(function(e,n,t){return w={name:n,styles:t,next:w},n}))}return 1===f.Z[e]||g(e)||"number"!==typeof n||0===n?n:n+"px"};function b(e,n,t,r){if(null==t)return"";if(void 0!==t.__emotion_styles)return t;switch(typeof t){case"boolean":return"";case"object":if(1===t.anim)return w={name:t.name,styles:t.styles,next:w},t.name;if(void 0!==t.styles){var i=t.next;if(void 0!==i)for(;void 0!==i;)w={name:i.name,styles:i.styles,next:w},i=i.next;return t.styles+";"}return function(e,n,t){var r="";if(Array.isArray(t))for(var i=0;i<t.length;i++)r+=b(e,n,t[i],!1);else for(var o in t){var l=t[o];if("object"!==typeof l)null!=n&&void 0!==n[l]?r+=o+"{"+n[l]+"}":v(l)&&(r+=m(o)+":"+y(o,l)+";");else if(!Array.isArray(l)||"string"!==typeof l[0]||null!=n&&void 0!==n[l[0]]){var a=b(e,n,l,!1);switch(o){case"animation":case"animationName":r+=m(o)+":"+a+";";break;default:r+=o+"{"+a+"}"}}else for(var s=0;s<l.length;s++)v(l[s])&&(r+=m(o)+":"+y(o,l[s])+";")}return r}(e,n,t);case"function":if(void 0!==e){var o=w,l=t(e);return w=o,b(e,n,l,r)}}if(null==n)return t;var a=n[t];return void 0===a||r?t:a}var w,k=/label:\s*([^\s;\n{]+)\s*;/g;var L=function(e,n,t){if(1===e.length&&"object"===typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var r=!0,i="";w=void 0;var o=e[0];null==o||void 0===o.raw?(r=!1,i+=b(t,n,o,!1)):i+=o[0];for(var l=1;l<e.length;l++)i+=b(t,n,e[l],46===i.charCodeAt(i.length-1)),r&&(i+=o[l]);k.lastIndex=0;for(var a,s="";null!==(a=k.exec(i));)s+="-"+a[1];return{name:d(i)+s,styles:i,next:w}};function x(e,n,t){var r="";return t.split(" ").forEach((function(t){void 0!==e[t]?n.push(e[t]):r+=t+" "})),r}var E=function(e,n,t){var r=e.key+"-"+n.name;if(!1===t&&void 0===e.registered[r]&&(e.registered[r]=n.styles),void 0===e.inserted[n.name]){var i=n;do{e.insert("."+r,i,e.sheet,!0);i=i.next}while(void 0!==i)}};function C(e,n){if(void 0===e.inserted[n.name])return e.insert("",n,e.sheet,!0)}function N(e,n,t){var r=[],i=x(e,r,t);return r.length<2?t:i+n(r)}var S=function e(n){for(var t="",r=0;r<n.length;r++){var i=n[r];if(null!=i){var o=void 0;switch(typeof i){case"boolean":break;case"object":if(Array.isArray(i))o=e(i);else for(var l in o="",i)i[l]&&l&&(o&&(o+=" "),o+=l);break;default:o=i}o&&(t&&(t+=" "),t+=o)}}return t},D=function(e){var n=u(e);n.sheet.speedy=function(e){this.isSpeedy=e},n.compat=!0;var t=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var i=L(t,n.registered,void 0);return E(n,i,!1),n.key+"-"+i.name};return{css:t,cx:function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];return N(n.registered,t,S(r))},injectGlobal:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var i=L(t,n.registered);C(n,i)},keyframes:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var i=L(t,n.registered),o="animation-"+i.name;return C(n,{name:i.name,styles:"@keyframes "+o+"{"+i.styles+"}"}),o},hydrate:function(e){e.forEach((function(e){n.inserted[e]=!0}))},flush:function(){n.registered={},n.inserted={},n.sheet.flush()},sheet:n.sheet,cache:n,getRegisteredStyles:x.bind(null,n.registered),merge:N.bind(null,n.registered,t)}},A=D(),T=A.flush,F=A.hydrate,B=A.cx,O=A.merge,R=A.getRegisteredStyles,_=A.injectGlobal,P=A.keyframes,V=A.css,j=A.sheet,G=A.cache},75177:function(e,n,t){"use strict";t.r(n);var r=Number.isNaN||function(e){return"number"===typeof e&&e!==e};function i(e,n){if(e.length!==n.length)return!1;for(var t=0;t<e.length;t++)if(i=e[t],o=n[t],!(i===o||r(i)&&r(o)))return!1;var i,o;return!0}n.default=function(e,n){var t;void 0===n&&(n=i);var r,o=[],l=!1;return function(){for(var i=[],a=0;a<arguments.length;a++)i[a]=arguments[a];return l&&t===this&&n(i,o)||(r=e.apply(this,i),l=!0,t=this,o=i),r}}},59739:function(e,n,t){"use strict";var r=t(56669);function i(){}function o(){}o.resetWarningCache=i,e.exports=function(){function e(e,n,t,i,o,l){if(l!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:o,resetWarningCache:i};return t.PropTypes=t,t}},47329:function(e,n,t){e.exports=t(59739)()},56669:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},77212:function(e,n,t){"use strict";var r=this&&this.__read||function(e,n){var t="function"===typeof Symbol&&e[Symbol.iterator];if(!t)return e;var r,i,o=t.call(e),l=[];try{for(;(void 0===n||n-- >0)&&!(r=o.next()).done;)l.push(r.value)}catch(a){i={error:a}}finally{try{r&&!r.done&&(t=o.return)&&t.call(o)}finally{if(i)throw i.error}}return l},i=this&&this.__spread||function(){for(var e=[],n=0;n<arguments.length;n++)e=e.concat(r(arguments[n]));return e};Object.defineProperty(n,"__esModule",{value:!0});var o,l,a=t(49032),s=a;!function(e){e[e.DEFAULT=0]="DEFAULT",e[e.ADDED=1]="ADDED",e[e.REMOVED=2]="REMOVED"}(o=n.DiffType||(n.DiffType={})),function(e){e.CHARS="diffChars",e.WORDS="diffWords",e.WORDS_WITH_SPACE="diffWordsWithSpace",e.LINES="diffLines",e.TRIMMED_LINES="diffTrimmedLines",e.SENTENCES="diffSentences",e.CSS="diffCss"}(l=n.DiffMethod||(n.DiffMethod={}));var u=function(e){var n=e.split("\n");if(n.every((function(e){return!e})))return 2===n.length?[]:(n.pop(),n);var t=n[n.length-1],r=n[0];return t||n.pop(),r||n.shift(),n};n.computeLineInformation=function(e,n,t,r,d){void 0===t&&(t=!1),void 0===r&&(r=l.CHARS),void 0===d&&(d=0);var f=a.diffLines(e.trimRight(),n.trimRight(),{newlineIsToken:!0,ignoreWhitespace:!1,ignoreCase:!1}),c=d,p=d,h=[],g=0,v=[],m=[],y=function(e,n,i,a,d){return u(e).map((function(e,h){var b={},w={};if(!(m.includes(n+"-"+h)||d&&0!==h)){if(i||a)if(v.includes(g)||v.push(g),a){p+=1,b.lineNumber=p,b.type=o.REMOVED,b.value=e||" ";var k=f[n+1];if(k&&k.added)if(u(k.value)[h]){var L=y(k.value,n,!0,!1,!0)[0].right,x=L.value,E=L.lineNumber,C=L.type;if(m.push(n+1+"-"+h),w.lineNumber=E,w.type=C,t)w.value=x;else{var N=function(e,n,t){void 0===t&&(t=l.CHARS);var r=s[t](e,n),i={left:[],right:[]};return r.forEach((function(e){var n=e.added,t=e.removed,r=e.value,l={};return n&&(l.type=o.ADDED,l.value=r,i.right.push(l)),t&&(l.type=o.REMOVED,l.value=r,i.left.push(l)),t||n||(l.type=o.DEFAULT,l.value=r,i.right.push(l),i.left.push(l)),l})),i}(e,x,r);w.value=N.right,b.value=N.left}}}else c+=1,w.lineNumber=c,w.type=o.ADDED,w.value=e;else p+=1,c+=1,b.lineNumber=p,b.type=o.DEFAULT,b.value=e,w.lineNumber=c,w.type=o.DEFAULT,w.value=e;return g+=1,{right:w,left:b}}})).filter(Boolean)};return f.forEach((function(e,n){var t=e.added,r=e.removed,o=e.value;h=i(h,y(o,n,t,r))})),{lineInformation:h,diffLines:v}}},54407:function(e,n,t){"use strict";var r=this&&this.__extends||function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])},e(n,t)};return function(n,t){function r(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}();Object.defineProperty(n,"__esModule",{value:!0});var i=t(82684),o=t(47329),l=t(63588),a=t(77212);n.DiffMethod=a.DiffMethod;var s,u=t(86967),d=t(75177),f=d.default||d;!function(e){e.LEFT="L",e.RIGHT="R"}(s=n.LineNumberPrefix||(n.LineNumberPrefix={}));var c=function(e){function n(n){var t=e.call(this,n)||this;return t.resetCodeBlocks=function(){return t.state.expandedBlocks.length>0&&(t.setState({expandedBlocks:[]}),!0)},t.onBlockExpand=function(e){var n=t.state.expandedBlocks.slice();n.push(e),t.setState({expandedBlocks:n})},t.computeStyles=f(u.default),t.onLineNumberClickProxy=function(e){return t.props.onLineNumberClick?function(n){return t.props.onLineNumberClick(e,n)}:function(){}},t.renderWordDiff=function(e,n){return e.map((function(e,r){var o;return i.createElement("span",{key:r,className:l.default(t.styles.wordDiff,(o={},o[t.styles.wordAdded]=e.type===a.DiffType.ADDED,o[t.styles.wordRemoved]=e.type===a.DiffType.REMOVED,o))},n?n(e.value):e.value)}))},t.renderLine=function(e,n,r,o,s,u){var d,f,c,p,h,g=r+"-"+e,v=u+"-"+s,m=t.props.highlightLines.includes(g)||t.props.highlightLines.includes(v),y=n===a.DiffType.ADDED,b=n===a.DiffType.REMOVED;return h=Array.isArray(o)?t.renderWordDiff(o,t.props.renderContent):t.props.renderContent?t.props.renderContent(o):o,i.createElement(i.Fragment,null,!t.props.hideLineNumbers&&i.createElement("td",{onClick:e&&t.onLineNumberClickProxy(g),className:l.default(t.styles.gutter,(d={},d[t.styles.emptyGutter]=!e,d[t.styles.diffAdded]=y,d[t.styles.diffRemoved]=b,d[t.styles.highlightedGutter]=m,d))},i.createElement("pre",{className:t.styles.lineNumber},e)),!t.props.splitView&&!t.props.hideLineNumbers&&i.createElement("td",{onClick:s&&t.onLineNumberClickProxy(v),className:l.default(t.styles.gutter,(f={},f[t.styles.emptyGutter]=!s,f[t.styles.diffAdded]=y,f[t.styles.diffRemoved]=b,f[t.styles.highlightedGutter]=m,f))},i.createElement("pre",{className:t.styles.lineNumber},s)),i.createElement("td",{className:l.default(t.styles.marker,(c={},c[t.styles.emptyLine]=!h,c[t.styles.diffAdded]=y,c[t.styles.diffRemoved]=b,c[t.styles.highlightedLine]=m,c))},i.createElement("pre",null,y&&"+",b&&"-")),i.createElement("td",{className:l.default(t.styles.content,(p={},p[t.styles.emptyLine]=!h,p[t.styles.diffAdded]=y,p[t.styles.diffRemoved]=b,p[t.styles.highlightedLine]=m,p))},i.createElement("pre",{className:t.styles.contentText},h)))},t.renderSplitView=function(e,n){var r=e.left,o=e.right;return i.createElement("tr",{key:n,className:t.styles.line},t.renderLine(r.lineNumber,r.type,s.LEFT,r.value),t.renderLine(o.lineNumber,o.type,s.RIGHT,o.value))},t.renderInlineView=function(e,n){var r,o=e.left,l=e.right;return o.type===a.DiffType.REMOVED&&l.type===a.DiffType.ADDED?i.createElement(i.Fragment,{key:n},i.createElement("tr",{className:t.styles.line},t.renderLine(o.lineNumber,o.type,s.LEFT,o.value,null)),i.createElement("tr",{className:t.styles.line},t.renderLine(null,l.type,s.RIGHT,l.value,l.lineNumber))):(o.type===a.DiffType.REMOVED&&(r=t.renderLine(o.lineNumber,o.type,s.LEFT,o.value,null)),o.type===a.DiffType.DEFAULT&&(r=t.renderLine(o.lineNumber,o.type,s.LEFT,o.value,l.lineNumber,s.RIGHT)),l.type===a.DiffType.ADDED&&(r=t.renderLine(null,l.type,s.RIGHT,l.value,l.lineNumber)),i.createElement("tr",{key:n,className:t.styles.line},r))},t.onBlockClickProxy=function(e){return function(){return t.onBlockExpand(e)}},t.renderSkippedLineIndicator=function(e,n,r,o){var a,s=t.props,u=s.hideLineNumbers,d=s.splitView,f=t.props.codeFoldMessageRenderer?t.props.codeFoldMessageRenderer(e,r,o):i.createElement("pre",{className:t.styles.codeFoldContent},"Expand ",e," lines ..."),c=i.createElement("td",null,i.createElement("a",{onClick:t.onBlockClickProxy(n),tabIndex:0},f)),p=!d&&!u;return i.createElement("tr",{key:r+"-"+o,className:t.styles.codeFold},!u&&i.createElement("td",{className:t.styles.codeFoldGutter}),i.createElement("td",{className:l.default((a={},a[t.styles.codeFoldGutter]=p,a))}),p?i.createElement(i.Fragment,null,i.createElement("td",null),c):i.createElement(i.Fragment,null,c,i.createElement("td",null)),i.createElement("td",null),i.createElement("td",null))},t.renderDiff=function(){var e=t.props,n=e.oldValue,r=e.newValue,o=e.splitView,l=e.disableWordDiff,s=e.compareMethod,u=e.linesOffset,d=a.computeLineInformation(n,r,l,s,u),f=d.lineInformation,c=d.diffLines,p=t.props.extraLinesSurroundingDiff<0?0:t.props.extraLinesSurroundingDiff,h=[];return f.map((function(e,n){var r=c[0],l=r-n;if(t.props.showDiffOnly&&(l===-p&&(h=[],c.shift()),e.left.type===a.DiffType.DEFAULT&&(l>p||"undefined"===typeof r)&&!t.state.expandedBlocks.includes(r)))return h.push(n+1),n===f.length-1&&h.length>1?t.renderSkippedLineIndicator(h.length,r,e.left.lineNumber,e.right.lineNumber):null;var s=o?t.renderSplitView(e,n):t.renderInlineView(e,n);if(l===p&&h.length>0){var u=h.length;return h=[],i.createElement(i.Fragment,{key:n},t.renderSkippedLineIndicator(u,r,e.left.lineNumber,e.right.lineNumber),s)}return s}))},t.render=function(){var e,n=t.props,r=n.oldValue,o=n.newValue,a=n.useDarkTheme,s=n.leftTitle,u=n.rightTitle,d=n.splitView,f=n.hideLineNumbers;if("string"!==typeof r||"string"!==typeof o)throw Error('"oldValue" and "newValue" should be strings');t.styles=t.computeStyles(t.props.styles,a);var c=t.renderDiff(),p=f?2:3,h=f?2:4,g=(s||u)&&i.createElement("tr",null,i.createElement("td",{colSpan:d?p:h,className:t.styles.titleBlock},i.createElement("pre",{className:t.styles.contentText},s)),d&&i.createElement("td",{colSpan:p,className:t.styles.titleBlock},i.createElement("pre",{className:t.styles.contentText},u)));return i.createElement("table",{className:l.default(t.styles.diffContainer,(e={},e[t.styles.splitView]=d,e))},i.createElement("tbody",null,g,c))},t.state={expandedBlocks:[]},t}return r(n,e),n.defaultProps={oldValue:"",newValue:"",splitView:!0,highlightLines:[],disableWordDiff:!1,compareMethod:a.DiffMethod.CHARS,styles:{},hideLineNumbers:!1,extraLinesSurroundingDiff:3,showDiffOnly:!0,useDarkTheme:!1,linesOffset:0},n.propTypes={oldValue:o.string.isRequired,newValue:o.string.isRequired,splitView:o.bool,disableWordDiff:o.bool,compareMethod:o.oneOf(Object.values(a.DiffMethod)),renderContent:o.func,onLineNumberClick:o.func,extraLinesSurroundingDiff:o.number,styles:o.object,hideLineNumbers:o.bool,showDiffOnly:o.bool,highlightLines:o.arrayOf(o.string),leftTitle:o.oneOfType([o.string,o.element]),rightTitle:o.oneOfType([o.string,o.element]),linesOffset:o.number},n}(i.Component);n.default=c},86967:function(e,n,t){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},r.apply(this,arguments)},i=this&&this.__rest||function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(t[r[i]]=e[r[i]])}return t};Object.defineProperty(n,"__esModule",{value:!0});var o=t(2961);n.default=function(e,n){var t,l,a,s,u,d,f;void 0===n&&(n=!1);var c=e.variables,p=void 0===c?{}:c,h=i(e,["variables"]),g={light:r({diffViewerBackground:"#fff",diffViewerColor:"212529",addedBackground:"#e6ffed",addedColor:"#24292e",removedBackground:"#ffeef0",removedColor:"#24292e",wordAddedBackground:"#acf2bd",wordRemovedBackground:"#fdb8c0",addedGutterBackground:"#cdffd8",removedGutterBackground:"#ffdce0",gutterBackground:"#f7f7f7",gutterBackgroundDark:"#f3f1f1",highlightBackground:"#fffbdd",highlightGutterBackground:"#fff5b1",codeFoldGutterBackground:"#dbedff",codeFoldBackground:"#f1f8ff",emptyLineBackground:"#fafbfc",gutterColor:"#212529",addedGutterColor:"#212529",removedGutterColor:"#212529",codeFoldContentColor:"#212529",diffViewerTitleBackground:"#fafbfc",diffViewerTitleColor:"#212529",diffViewerTitleBorderColor:"#eee"},p.light||{}),dark:r({diffViewerBackground:"#2e303c",diffViewerColor:"#FFF",addedBackground:"#044B53",addedColor:"white",removedBackground:"#632F34",removedColor:"white",wordAddedBackground:"#055d67",wordRemovedBackground:"#7d383f",addedGutterBackground:"#034148",removedGutterBackground:"#632b30",gutterBackground:"#2c2f3a",gutterBackgroundDark:"#262933",highlightBackground:"#2a3967",highlightGutterBackground:"#2d4077",codeFoldGutterBackground:"#21232b",codeFoldBackground:"#262831",emptyLineBackground:"#363946",gutterColor:"#464c67",addedGutterColor:"#8c8c8c",removedGutterColor:"#8c8c8c",codeFoldContentColor:"#555a7b",diffViewerTitleBackground:"#2f323e",diffViewerTitleColor:"#555a7b",diffViewerTitleBorderColor:"#353846"},p.dark||{})},v=n?g.dark:g.light,m=o.css({width:"100%",label:"content"}),y=o.css(((t={})["."+m]={width:"50%"},t.label="split-view",t)),b=o.css({width:"100%",background:v.diffViewerBackground,pre:{margin:0,whiteSpace:"pre-wrap",lineHeight:"25px"},label:"diff-container",borderCollapse:"collapse"}),w=o.css({color:v.codeFoldContentColor,label:"code-fold-content"}),k=o.css({color:v.diffViewerColor,label:"content-text"}),L=o.css(((l={background:v.diffViewerTitleBackground,padding:10,borderBottom:"1px solid "+v.diffViewerTitleBorderColor,label:"title-block",":last-child":{borderLeft:"1px solid "+v.diffViewerTitleBorderColor}})["."+k]={color:v.diffViewerTitleColor},l)),x=o.css({color:v.gutterColor,label:"line-number"}),E=o.css(((a={background:v.removedBackground,color:v.removedColor,pre:{color:v.removedColor}})["."+x]={color:v.removedGutterColor},a.label="diff-removed",a)),C=o.css(((s={background:v.addedBackground,color:v.addedColor,pre:{color:v.addedColor}})["."+x]={color:v.addedGutterColor},s.label="diff-added",s)),N=o.css({padding:2,display:"inline-flex",borderRadius:1,label:"word-diff"}),S=o.css({background:v.wordAddedBackground,label:"word-added"}),D=o.css({background:v.wordRemovedBackground,label:"word-removed"}),A=o.css({backgroundColor:v.codeFoldGutterBackground,label:"code-fold-gutter"}),T=o.css({backgroundColor:v.codeFoldBackground,height:40,fontSize:14,fontWeight:700,label:"code-fold",a:{textDecoration:"underline !important",cursor:"pointer",pre:{display:"inline"}}}),F=o.css({backgroundColor:v.emptyLineBackground,label:"empty-line"}),B=o.css(((u={width:25,paddingLeft:10,paddingRight:10,userSelect:"none",label:"marker"})["&."+C]={pre:{color:v.addedColor}},u["&."+E]={pre:{color:v.removedColor}},u)),O=o.css(((d={background:v.highlightBackground,label:"highlighted-line"})["."+S+", ."+D]={backgroundColor:"initial"},d)),R=o.css({label:"highlighted-gutter"}),_=o.css(((f={userSelect:"none",minWidth:50,padding:"0 10px",label:"gutter",textAlign:"right",background:v.gutterBackground,"&:hover":{cursor:"pointer",background:v.gutterBackgroundDark,pre:{opacity:1}},pre:{opacity:.5}})["&."+C]={background:v.addedGutterBackground},f["&."+E]={background:v.removedGutterBackground},f["&."+R]={background:v.highlightGutterBackground,"&:hover":{background:v.highlightGutterBackground}},f)),P=o.css({"&:hover":{background:v.gutterBackground,cursor:"initial"},label:"empty-gutter"}),V={diffContainer:b,diffRemoved:E,diffAdded:C,splitView:y,marker:B,highlightedGutter:R,highlightedLine:O,gutter:_,line:o.css({verticalAlign:"baseline",label:"line"}),wordDiff:N,wordAdded:S,wordRemoved:D,codeFoldGutter:A,codeFold:T,emptyGutter:P,emptyLine:F,lineNumber:x,contentText:k,content:m,codeFoldContent:w,titleBlock:L},j=Object.keys(h).reduce((function(e,n){var t;return r({},e,((t={})[n]=o.css(h[n]),t))}),{});return Object.keys(V).reduce((function(e,n){var t;return r({},e,((t={})[n]=j[n]?o.cx(V[n],j[n]):V[n],t))}),{})}}}]);