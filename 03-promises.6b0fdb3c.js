!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("6JpON");function a(e,t){var n=Math.random()>.3;return new Promise((function(o,r){setTimeout((function(){n?o({position:e,delay:t}):r({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();var n=Number(t.target.elements.delay.value),o=Number(t.target.elements.step.value),r=Number(t.target.elements.amount.value);if(void 0!==r){for(var l=[],u=1;u<=r;u++){var f=a(u,n+(u-1)*o);l.push(f)}t.target.reset(),Promise.allSettled(l).then((function(){var n=setInterval((function(){e(i).Notify||(clearInterval(n),t.target.querySelectorAll("input").forEach((function(e){return e.disabled=!1})))}),100)})),l.forEach((function(t){t.then((function(t){var n=t.position,o=t.delay;e(i).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(t){var n=t.position,o=t.delay;e(i).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))}))}))}else e(i).Notify.warning("Please fill in all fields")}))}();
//# sourceMappingURL=03-promises.6b0fdb3c.js.map
