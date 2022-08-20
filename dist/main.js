(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>c});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([n.id,"button {\n    padding: 10px 20px; \n    font-weight: bold;\n    border: none;\n    border-radius: 5px;\n    color: white;\n    transition: background-color .2s;\n}\n\nbutton:hover {\n    cursor: pointer;\n}\n\nbutton.primary {\n    background-color: cornflowerblue;\n}\n\nbutton.primary:hover {\n    background-color: blueviolet;\n}\n\nbutton.secondary {\n    background-color: darkgray;\n}\n\nbutton.secondary:hover {\n    background-color: gray;\n}\n\nbutton.danger {\n    background-color: red;\n}\n\nbutton.danger:hover {\n    background-color: darkred;\n}\n\n.wrapper {\n    width: min(80vw, 800px);\n    height: 80vh;\n    margin: 50px auto;\n    box-shadow: 0px 0px 5px blue;\n    position: relative;\n\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n}\n\n.wrapper > h1 {\n    grid-column: 1 / -1;\n\n    text-align: center;\n    background-color: lightblue;\n    color: yellow;\n    margin: 0;\n    padding: 20px 0;\n    border-bottom: 1px solid black;\n}\n\n.wrapper > .buttons {\n    grid-column: 1 / -1;\n\n    text-align: right;\n    padding: 10px;\n    box-shadow: 0px 2px green;\n}\n\n#projects {\n    background-color: whitesmoke;\n    overflow: auto;\n    padding-left: 10px;\n}\n\n#projects h2 {\n    color: black;\n}\n\n#projects ul {\n    list-style: none;\n    padding-left: 30px;\n    padding-right: 40px;\n}\n\n#projects li {\n    margin: 0;\n    padding: 5px 0;\n    font-size: 1.2rem;\n    cursor: pointer;\n    border-bottom: 1px dashed black;\n}\n\n#projects li:hover {\n    background-color: aquamarine;\n}\n\n#projects li.active {\n    color: blue;\n    font-weight: bold;\n}\n\nmain {\n    overflow: auto;\n}\n\nmain h2 {\n    margin-bottom: 0;\n    padding-bottom: 10px;\n    text-align: center;\n    color: brown;\n    border-bottom: 1px solid brown;\n}\n\nmain .projectName {\n    color: blue;\n}\n\n#todo-list {\n    border-bottom: 1px solid gray;\n    padding: 0 20px;\n}\n\n.todo {\n    border-bottom: 1px dotted brown;\n\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.todo .title {\n    font-weight: bold;\n}\n\n.todo .duedate {\n    color: green;\n}\n\n.blur {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n\n    background-color: rgba(0, 0, 0, 0.8);\n\n    display: none;\n    justify-content: center;\n    align-items: center;\n}\n\nform {\n    background-color: white;\n    padding: 20px;\n    border-radius: 10px;\n    width: 50%;\n}\n\nform h2 {\n    color: blue;\n    margin-top: 0;\n    border-bottom: 1px solid blue;\n}\n\n.form-group {\n    display: flex;\n    flex-direction: column;\n\n    margin-bottom: 10px;\n}\n\nform label {\n    font-weight: bold;\n    font-size: 1.1rem;\n    margin-bottom: 5px;\n}\n\nform input {\n    border: 1px solid blue;\n    height: 20px;\n    padding: 0 5px;\n    border-radius: 5px;\n}\n\nform .buttons {\n    text-align: right;\n    margin-top: 20px;\n}",""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(i[l]=!0)}for(var d=0;d<n.length;d++){var s=[].concat(n[d]);o&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),e.push(s))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],c=0;c<n.length;c++){var l=n[c],d=o.base?l[0]+o.base:l[0],s=a[d]||0,u="".concat(d," ").concat(s);a[d]=s+1;var p=t(u),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=r(f,o);o.byIndex=c,e.splice(c,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var l=o(n,r),d=0;d<a.length;d++){var s=t(a[d]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}a=l}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),a=t(569),i=t.n(a),c=t(565),l=t.n(c),d=t(216),s=t.n(d),u=t(589),p=t.n(u),f=t(426),m={};m.styleTagTransform=p(),m.setAttributes=l(),m.insert=i().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=s(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const b=["Invade Mars","Shark Taming","Mega Mind"],g=document.querySelector("#projects ul");function v(n){const e=document.createElement("li");e.textContent=n,"All"===n&&e.classList.add("active"),e.addEventListener("click",h),g.appendChild(e)}function h(n){const e=n.target,t=document.querySelectorAll("#projects ul li");for(const n of t)if(n.classList.contains("active")){if(n.isEqualNode(e))return;n.classList.remove("active");break}e.classList.add("active")}document.querySelector('button[data-function="showProjectForm"]').addEventListener("click",(function(){x.parentNode.style.display="flex"})),document.querySelector('button[data-function="addProject"]').addEventListener("click",(function(){const n=document.querySelector("input#projectName").value;var e;"all"!==n.toLowerCase()?(e=n,b.push(e),v(n),y()):alert('You must not use "All" for project name!')})),document.querySelector('button[data-function="cancelProjectForm"]').addEventListener("click",y);const x=document.querySelector("#projectForm");function y(){x.parentNode.style.display="none"}v("All"),b.forEach((n=>v(n)))})()})();