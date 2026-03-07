const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/ui-core.DAPX49Dq.js","_astro/preload-helper.B-vhqtyP.js"])))=>i.map(i=>d[i]);
import{_ as A}from"./preload-helper.B-vhqtyP.js";import{o as M,a as Y,i as q}from"./if.co_lfwUe.js";import{k as I,l as O,p as T,W as z,w as o,m as E,n as H,o as R,t as U,A as b,B as w,D as V,v as k,E as x,q as B,u as c}from"./custom-element.BEyTzsjC.js";import{a as F}from"./css.C1Pi9SAq.js";import{s as N}from"./class.rK8cb5jm.js";import{p as S}from"./props.CO4OUi6Y.js";import{g as W,t as j}from"./index.ZLa5_avY.js";import{p as G}from"./index.eb8d20df.Cbg7B9o9.js";var J=E('<div id="pagefind"></div>'),K=E('<div><!> <div class="i-ri-close-line absolute bottom-4 right-4 cursor-pointer text-8" role="button" tabindex="0" aria-label="close search" aria-controls="pagefind"></div></div>');const Q={hash:"svelte-16d1y06",code:`.pagefind-ui__results-area,\r
  .pagefind-ui__result-link,\r
  .pagefind-ui__result-excerpt,\r
  .pagefind-ui__message {color:var(--grey-9) !important;}.pagefind.svelte-16d1y06 {scrollbar-width:thin;scrollbar-color:var(--grey-5) transparent;border:1px solid var(--grey-2);}.pagefind-hidden.svelte-16d1y06 {opacity:0 !important;pointer-events:none;transform:translateY(-100%);}.pagefind-visible.svelte-16d1y06 {opacity:1 !important;pointer-events:auto;transform:translateY(0);}.slide-down.svelte-16d1y06 {transition:opacity 0.5s ease,\r
      transform 0.5s ease;}.dev-tip.svelte-16d1y06 {color:var(--grey-9);line-height:1.75;}\r
\r
  @keyframes svelte-16d1y06-slide-down-enter {\r
    from {\r
      transform: translateY(-100%);\r
      opacity: 0;\r
    }\r
    to {\r
      transform: translateY(0);\r
      opacity: 0.9;\r
    }\r
  }`};function X(f,d){T(d,!0),F(f,Q);let t=S(d,"selector",7,void 0),s=S(d,"showSearch",15,!1);W(j.locale||"zh-CN");let r=k(!1),m=k(!1),n=null,i=null;function p(){o(r,!c(r))}function u(){o(m,document.documentElement.getAttribute("data-theme")==="dark")}function P(){return new Promise(e=>{if(document.querySelector('link[data-pagefind-ui="true"]')){e();return}const _=()=>{const a=document.createElement("link");a.rel="stylesheet",a.href=G,a.dataset.pagefindUi="true",a.onload=()=>e(),a.onerror=()=>e(),document.head.appendChild(a)};if(document.readyState==="complete"){_();return}window.addEventListener("load",_,{once:!0})})}async function C(){try{const[{PagefindUI:e}]=await Promise.all([A(()=>import("./ui-core.DAPX49Dq.js"),__vite__mapDeps([0,1])),P()]);new e({element:"#pagefind",showSubResults:!0})}catch(e){console.warn("Pagefind 初始化失败：",e)}}M(()=>{if(C(),u(),n=new MutationObserver(u),n.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),t()){let e=null;typeof t()=="string"?e=document.querySelector(t()):t()instanceof HTMLElement&&(e=t()),e?(e.addEventListener("click",p),i=()=>{e?.removeEventListener("click",p)}):console.warn("Invalid selector provided for PagefindSearch component.")}}),Y(()=>{n&&(n.disconnect(),n=null),i&&(i(),i=null)}),z(()=>{!t()&&s()!==void 0&&o(r,s())});var L={get selector(){return t()},set selector(e=void 0){t(e),x()},get showSearch(){return s()},set showSearch(e=!1){s(e),x()}},l=K();let v;var g=R(l);{var D=e=>{var y=J();w(e,y)};q(g,e=>{e(D,-1)})}var h=H(g,2);return B(l),U(()=>v=N(l,1,`pagefind pagefind-hidden fixed top-12 z-999 m-12 max-h-80% max-w-100vw min-h-70% w-[calc(100vw_-_7rem)]\r
  overflow-x-hidden overflow-y-scroll rounded-lg p-2\r
  bg-gradient-to-b from-black/50 to-black/60\r
  backdrop-blur-2xl slide-down svelte-16d1y06`,null,v,{dark:c(m),"pagefind-visible":c(r)})),b("click",h,()=>o(r,!1)),b("keydown",h,e=>["Enter"," "].includes(e.key)&&o(r,!1)),w(f,l),V(L)}I(["click","keydown"]);O(X,{selector:{},showSearch:{}},[],[],{mode:"open"});export{X as default};
