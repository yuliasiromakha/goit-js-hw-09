function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var l=r("7Y9D8");function i(e,t){const n=Math.random()>.3;return new Promise(((o,r)=>{setTimeout((()=>{n?o({position:e,delay:t}):r({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();const n=Number(t.target.elements.delay.value),o=Number(t.target.elements.step.value),r=Number(t.target.elements.amount.value);if(!n||!o||void 0===r)return void e(l).Notify.warning("Please fill in all fields");const a=t.target.querySelectorAll("input"),s=t.target.querySelector("button");a.forEach((e=>e.disabled=!0)),s.disabled=!0;const d=[];for(let e=1;e<=r;e++){const t=i(e,n+(e-1)*o);d.push(t)}t.target.reset(),Promise.allSettled(d).then((()=>{const t=setInterval((()=>{e(l).Notify||(clearInterval(t),a.forEach((e=>e.disabled=!1)),s.disabled=!1)}),100)})),d.forEach((t=>{t.then((({position:t,delay:n})=>{e(l).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(l).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)}))}))}));
//# sourceMappingURL=03-promises.afa2e671.js.map
