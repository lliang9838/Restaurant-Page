!function(e){var n={};function t(a){if(n[a])return n[a].exports;var o=n[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(a,o,function(n){return e[n]}.bind(null,o));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);const a={content:document.querySelector("#content")},o=()=>{console.log("loading header");a.content.insertAdjacentHTML("beforeend",'<div class="header">\n      <h1 style="margin-left: 30px">Pazzo Pizzeria</h1>\n      <img id="pazzo" src=\'./img/pazzo.jpeg\' alt="pazzo pizzeria">\n      <div style="margin-right: 30px" class="nav">\n        <a class="nav-link home">\n          <span class="text-shadow">Home</span>\n        </a>\n        <a class="nav-link menu">\n          Menu\n        </a>\n        <a class="nav-link contact">\n          Contact\n        </a>\n      </div>\n    </div>\n    ')};console.log("index.js"),a.content.addEventListener("click",e=>{console.log("yoo"),e.target.matches(".home, .home *")&&(a.content.innerHTML="",o(),(()=>{console.log("loading home");a.content.insertAdjacentHTML("beforeend",'<div class="body">\n        <div id="intro">\n          <img id="pepperoni" src=\'./img/pepperoni.jpg\' alt="pepperoni pizza">\n            <h1 style="margin: auto; text-align: center">Homemade Organic Pepperoni Pizza</h1>\n        </div>\n        <div id="about">\n            <h1 style="font-size: 24px;">Who are we?</h1>\n            <p style="font-family: Comfortaa; padding: 0 20px; display: inline-block; margin: 0px;">\n              <span style="background-color: rgb(246, 250, 173)">Pazzo Pizzeria</span> is a family owned chain restaurant who offers authentic \n              Italian food. The dough is prepared every morning meaning you will always be getting the cream of the crop every time you step \n              into the restaurant. Handmade pizza, pasta and sandwiches guarantees you with a \n              <span style="background-color: rgb(246, 250, 173)">smile</span> after every <span style="background-color: rgb(246, 250, 173)">\n              meal</span>.<p>\n            <h1 style="font-size: 24px; margin-top: 50px">What is it?</h1>\n            <p style="font-family: Comfortaa; padding: 0 20px; display: inline-block; margin: 0px;">\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\n              aliqua. Duis at consectetur lorem donec massa sapien faucibus et. Vel risus commodo viverra maecenas accumsan lacus.\n            <p>\n            <h1 style="font-size: 24px; margin-top: 50px">Where can I get it?</h1>\n            <p style="font-family: Comfortaa; padding: 0 20px; display: inline-block; margin: 0px; margin-bottom: 40px;">\n              This is a programming exercise made by <a target="_blank" rel="noopener noreferrer" href="https://leslieliang.dev/" \n              style="background-color: rgb(185, 233, 247); text-decoration: none; color: var(--primary);">Leslie Liang</a> and in no\n              way is he representing Pazzo Pizzeria. <span style="background-color: rgb(250, 215, 195)">DOM Manipulation,\n              Vanilla JavaScript, HTML, CSS and Flexboxes</span> were used in this project. Web design was inspired by \n              <a target="_blank" rel="noopener noreferrer" href="https://hridaykedia.github.io/Restaurant/#"\n                style="background-color: rgb(185, 233, 247); text-decoration: none; color: var(--primary);">@hridaykedia</a>\n            <p>\n        </div>\n    </div>')})(),document.querySelector(".home").classList.add("active-link")),e.target.matches(".menu, .menu *")&&(a.content.innerHTML="",o(),(()=>{console.log("loading home");a.content.insertAdjacentHTML("beforeend",'<div class="body"><p>menu</p></div>')})(),document.querySelector(".menu").classList.add("active-link")),e.target.matches(".contact, .contact *")&&(a.content.innerHTML="",o(),(()=>{console.log("loading contact");a.content.insertAdjacentHTML("beforeend",'<div class="body"><p>contact</p></div>')})(),document.querySelector(".contact").classList.add("active-link"))})}]);