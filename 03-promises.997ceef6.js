function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequired7c6=i);var r=i("1GAPJ");function l(e,t){return new Promise(((n,o)=>{setTimeout((()=>{Math.random()>.3?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}const u=document.querySelector(".form");u.addEventListener("submit",(function(t){t.preventDefault();const n=u.elements.delay,o=u.elements.step,i=u.elements.amount,s=Number(n.value),d=Number(o.value),a=Number(i.value);let f=s;for(let t=1;t<=a;t+=1)l(t,f).then((({position:t,delay:n})=>{e(r).Notify.success(`Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(r).Notify.failure(`Rejected promise ${t} in ${n}ms`)})),f+=d}));
//# sourceMappingURL=03-promises.997ceef6.js.map
