if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let c={};const t=e=>i(e,o),l={module:{uri:o},exports:c,require:t};s[o]=Promise.all(n.map((e=>l[e]||t(e)))).then((e=>(r(...e),c)))}}define(["./workbox-7369c0e1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-3c74d2ab.js",revision:null},{url:"assets/index-c231358b.css",revision:null},{url:"assets/workbox-window.prod.es5-295a6886.js",revision:null},{url:"index.html",revision:"1d9748d14324503eb5a19c3d7a9f55bc"},{url:"icon-192x192.png",revision:"d0c666c0bdf78bc1bfedb34b01503760"},{url:"icon-512x512.png",revision:"58a324adc8e12ef22b9e4fcc40a5c79f"},{url:"icon-512x512-mask.png",revision:"199c42af945e7219ecb4f3f43587f101"},{url:"manifest.webmanifest",revision:"9c7fa975c8054ef323c8b41f8b8619e6"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
