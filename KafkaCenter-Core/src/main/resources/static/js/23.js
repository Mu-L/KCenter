(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{1028:function(e,t,n){},1030:function(e,t,n){"use strict";n.r(t);var a=n(66),r=n(16),o=n(1),i=n.n(o),l=n(156),s=n(21),c=n(1028),u=n.n(c);function d(e,t){return y(e)||p(e,t)||m(e,t)||f()}function f(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(e,t){if(e){if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(e,t):void 0}}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function p(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a=[],r=!0,o=!1,i,l;try{for(n=n.call(e);!(r=(i=n.next()).done)&&(a.push(i.value),!t||a.length!==t);r=!0);}catch(e){o=!0,l=e}finally{try{r||null==n.return||n.return()}finally{if(o)throw l}}return a}}function y(e){if(Array.isArray(e))return e}var w=function e(){var t,n=d(Object(l.a)(),2),a=n[0],c=n[1],u=function e(t){if(void 0!==t&&void 0!==t.data&&"webpackOk"!==t.data.type){var n=t.data,a={sessionId:n.sessionId,email:n.email,name:n.name};s.a.post("/login/verify",JSON.stringify(a),{headers:{"Content-Type":"application/json"}}).then((function(e){if(200===e.data.code&&null!=e.data&&null!=e.data.data&&void 0!==e.data&&void 0!==e.data.data){var t=e.data.data;sessionStorage.setItem("user",JSON.stringify(t));var n=t.role;n&&(c({role:"ADMIN"===n?"admin":"member"}),window.location.href="/#/home/page")}else r.a.error(e.data.message)})).catch((function(e){console.log(e)}))}};return Object(o.useEffect)((function(){return window.addEventListener("message",u,!1),function e(){window.removeEventListener("message",u)}})),i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"loader"},i.a.createElement("span",null,"Loading...")))};t.default=w}}]);