(self["webpackChunk_jupyterlab_application_top"]=self["webpackChunk_jupyterlab_application_top"]||[]).push([[6470,4155],{26470:(e,r,t)=>{"use strict";var n=t(34155);function i(e){if(typeof e!=="string"){throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}}function a(e,r){var t="";var n=0;var i=-1;var a=0;var f;for(var l=0;l<=e.length;++l){if(l<e.length)f=e.charCodeAt(l);else if(f===47)break;else f=47;if(f===47){if(i===l-1||a===1){}else if(i!==l-1&&a===2){if(t.length<2||n!==2||t.charCodeAt(t.length-1)!==46||t.charCodeAt(t.length-2)!==46){if(t.length>2){var o=t.lastIndexOf("/");if(o!==t.length-1){if(o===-1){t="";n=0}else{t=t.slice(0,o);n=t.length-1-t.lastIndexOf("/")}i=l;a=0;continue}}else if(t.length===2||t.length===1){t="";n=0;i=l;a=0;continue}}if(r){if(t.length>0)t+="/..";else t="..";n=2}}else{if(t.length>0)t+="/"+e.slice(i+1,l);else t=e.slice(i+1,l);n=l-i-1}i=l;a=0}else if(f===46&&a!==-1){++a}else{a=-1}}return t}function f(e,r){var t=r.dir||r.root;var n=r.base||(r.name||"")+(r.ext||"");if(!t){return n}if(t===r.root){return t+n}return t+e+n}var l={resolve:function e(){var r="";var t=false;var f;for(var l=arguments.length-1;l>=-1&&!t;l--){var o;if(l>=0)o=arguments[l];else{if(f===undefined)f=n.cwd();o=f}i(o);if(o.length===0){continue}r=o+"/"+r;t=o.charCodeAt(0)===47}r=a(r,!t);if(t){if(r.length>0)return"/"+r;else return"/"}else if(r.length>0){return r}else{return"."}},normalize:function e(r){i(r);if(r.length===0)return".";var t=r.charCodeAt(0)===47;var n=r.charCodeAt(r.length-1)===47;r=a(r,!t);if(r.length===0&&!t)r=".";if(r.length>0&&n)r+="/";if(t)return"/"+r;return r},isAbsolute:function e(r){i(r);return r.length>0&&r.charCodeAt(0)===47},join:function e(){if(arguments.length===0)return".";var r;for(var t=0;t<arguments.length;++t){var n=arguments[t];i(n);if(n.length>0){if(r===undefined)r=n;else r+="/"+n}}if(r===undefined)return".";return l.normalize(r)},relative:function e(r,t){i(r);i(t);if(r===t)return"";r=l.resolve(r);t=l.resolve(t);if(r===t)return"";var n=1;for(;n<r.length;++n){if(r.charCodeAt(n)!==47)break}var a=r.length;var f=a-n;var o=1;for(;o<t.length;++o){if(t.charCodeAt(o)!==47)break}var u=t.length;var s=u-o;var c=f<s?f:s;var h=-1;var v=0;for(;v<=c;++v){if(v===c){if(s>c){if(t.charCodeAt(o+v)===47){return t.slice(o+v+1)}else if(v===0){return t.slice(o+v)}}else if(f>c){if(r.charCodeAt(n+v)===47){h=v}else if(v===0){h=0}}break}var g=r.charCodeAt(n+v);var d=t.charCodeAt(o+v);if(g!==d)break;else if(g===47)h=v}var p="";for(v=n+h+1;v<=a;++v){if(v===a||r.charCodeAt(v)===47){if(p.length===0)p+="..";else p+="/.."}}if(p.length>0)return p+t.slice(o+h);else{o+=h;if(t.charCodeAt(o)===47)++o;return t.slice(o)}},_makeLong:function e(r){return r},dirname:function e(r){i(r);if(r.length===0)return".";var t=r.charCodeAt(0);var n=t===47;var a=-1;var f=true;for(var l=r.length-1;l>=1;--l){t=r.charCodeAt(l);if(t===47){if(!f){a=l;break}}else{f=false}}if(a===-1)return n?"/":".";if(n&&a===1)return"//";return r.slice(0,a)},basename:function e(r,t){if(t!==undefined&&typeof t!=="string")throw new TypeError('"ext" argument must be a string');i(r);var n=0;var a=-1;var f=true;var l;if(t!==undefined&&t.length>0&&t.length<=r.length){if(t.length===r.length&&t===r)return"";var o=t.length-1;var u=-1;for(l=r.length-1;l>=0;--l){var s=r.charCodeAt(l);if(s===47){if(!f){n=l+1;break}}else{if(u===-1){f=false;u=l+1}if(o>=0){if(s===t.charCodeAt(o)){if(--o===-1){a=l}}else{o=-1;a=u}}}}if(n===a)a=u;else if(a===-1)a=r.length;return r.slice(n,a)}else{for(l=r.length-1;l>=0;--l){if(r.charCodeAt(l)===47){if(!f){n=l+1;break}}else if(a===-1){f=false;a=l+1}}if(a===-1)return"";return r.slice(n,a)}},extname:function e(r){i(r);var t=-1;var n=0;var a=-1;var f=true;var l=0;for(var o=r.length-1;o>=0;--o){var u=r.charCodeAt(o);if(u===47){if(!f){n=o+1;break}continue}if(a===-1){f=false;a=o+1}if(u===46){if(t===-1)t=o;else if(l!==1)l=1}else if(t!==-1){l=-1}}if(t===-1||a===-1||l===0||l===1&&t===a-1&&t===n+1){return""}return r.slice(t,a)},format:function e(r){if(r===null||typeof r!=="object"){throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof r)}return f("/",r)},parse:function e(r){i(r);var t={root:"",dir:"",base:"",ext:"",name:""};if(r.length===0)return t;var n=r.charCodeAt(0);var a=n===47;var f;if(a){t.root="/";f=1}else{f=0}var l=-1;var o=0;var u=-1;var s=true;var c=r.length-1;var h=0;for(;c>=f;--c){n=r.charCodeAt(c);if(n===47){if(!s){o=c+1;break}continue}if(u===-1){s=false;u=c+1}if(n===46){if(l===-1)l=c;else if(h!==1)h=1}else if(l!==-1){h=-1}}if(l===-1||u===-1||h===0||h===1&&l===u-1&&l===o+1){if(u!==-1){if(o===0&&a)t.base=t.name=r.slice(1,u);else t.base=t.name=r.slice(o,u)}}else{if(o===0&&a){t.name=r.slice(1,l);t.base=r.slice(1,u)}else{t.name=r.slice(o,l);t.base=r.slice(o,u)}t.ext=r.slice(l,u)}if(o>0)t.dir=r.slice(0,o-1);else if(a)t.dir="/";return t},sep:"/",delimiter:":",win32:null,posix:null};l.posix=l;e.exports=l},34155:e=>{var r=e.exports={};var t;var n;function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}(function(){try{if(typeof setTimeout==="function"){t=setTimeout}else{t=i}}catch(e){t=i}try{if(typeof clearTimeout==="function"){n=clearTimeout}else{n=a}}catch(e){n=a}})();function f(e){if(t===setTimeout){return setTimeout(e,0)}if((t===i||!t)&&setTimeout){t=setTimeout;return setTimeout(e,0)}try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}function l(e){if(n===clearTimeout){return clearTimeout(e)}if((n===a||!n)&&clearTimeout){n=clearTimeout;return clearTimeout(e)}try{return n(e)}catch(r){try{return n.call(null,e)}catch(r){return n.call(this,e)}}}var o=[];var u=false;var s;var c=-1;function h(){if(!u||!s){return}u=false;if(s.length){o=s.concat(o)}else{c=-1}if(o.length){v()}}function v(){if(u){return}var e=f(h);u=true;var r=o.length;while(r){s=o;o=[];while(++c<r){if(s){s[c].run()}}c=-1;r=o.length}s=null;u=false;l(e)}r.nextTick=function(e){var r=new Array(arguments.length-1);if(arguments.length>1){for(var t=1;t<arguments.length;t++){r[t-1]=arguments[t]}}o.push(new g(e,r));if(o.length===1&&!u){f(v)}};function g(e,r){this.fun=e;this.array=r}g.prototype.run=function(){this.fun.apply(null,this.array)};r.title="browser";r.browser=true;r.env={};r.argv=[];r.version="";r.versions={};function d(){}r.on=d;r.addListener=d;r.once=d;r.off=d;r.removeListener=d;r.removeAllListeners=d;r.emit=d;r.prependListener=d;r.prependOnceListener=d;r.listeners=function(e){return[]};r.binding=function(e){throw new Error("process.binding is not supported")};r.cwd=function(){return"/"};r.chdir=function(e){throw new Error("process.chdir is not supported")};r.umask=function(){return 0}}}]);
//# sourceMappingURL=6470.7226a4244b52e8eec422.js.map?v=7226a4244b52e8eec422