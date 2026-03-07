import{o as ae,a as ie,i as T}from"./if.co_lfwUe.js";import{h as se,a as le,k as ce,l as de,p as be,W as ge,m as F,n as h,o as b,t as A,A as S,B as z,D as me,w as o,u as e,v as s,q as g,x as fe}from"./custom-element.BEyTzsjC.js";import{a as pe}from"./css.C1Pi9SAq.js";import{s as B}from"./attributes.iLCXMuLN.js";import{s as R}from"./class.rK8cb5jm.js";import{s as y}from"./style.CZFVShHG.js";import{b as X}from"./this.CyavOZV-.js";function ue(k,f,l,c,w){se&&le();var d=f.$$slots?.[l],n=!1;d===!0&&(d=f.children,n=!0),d===void 0||d(k,n?()=>c:c)}const ve={family:"Maple Mono CN"},H={src:"/https://github.com/AndreiGameDev/portfolio/_astro/arrow-down-s-line.C4R9Le1k.svg"},P={src:"/https://github.com/AndreiGameDev/portfolio/_astro/arrow-up-s-line.iUkzHvps.svg"},U={src:"/https://github.com/AndreiGameDev/portfolio/_astro/check-fill.Di9c9L1U.svg"},I={src:"/https://github.com/AndreiGameDev/portfolio/_astro/file-copy-fill.DeSCJhyB.svg"},K={src:"/https://github.com/AndreiGameDev/portfolio/_astro/fullscreen-line.BkUoy_24.svg"},W={src:"/https://github.com/AndreiGameDev/portfolio/_astro/fullscreen-exit-line.DBtvXyzK.svg"};var he=F('<span class="lang-text svelte-ipr7k2"> </span>'),ke=F('<button class="collapse-btn svelte-ipr7k2"></button>'),we=F('<div><div class="header svelte-ipr7k2"><div class="controls svelte-ipr7k2"><div class="dot red svelte-ipr7k2"></div> <div class="dot yellow svelte-ipr7k2"></div> <div class="dot green svelte-ipr7k2"></div> <!></div> <div class="actions svelte-ipr7k2"><button class="action-btn svelte-ipr7k2" aria-label="Copy code"></button> <button class="action-btn svelte-ipr7k2"></button></div></div> <div><div class="content-wrapper svelte-ipr7k2"><!></div> <!></div></div>');const ye={hash:"svelte-ipr7k2",code:`\r
  /* 基础布局 */.codeblock.svelte-ipr7k2 {margin:1.5rem 0;border-radius:0.5rem;overflow:hidden;box-shadow:0.5rem 0.5rem 1rem var(--grey-3);font-family:"Maple Mono", "Courier New", monospace;}.dark.codeblock.svelte-ipr7k2 {box-shadow:none;}\r
\r
  /* Header 样式 */.header.svelte-ipr7k2 {display:flex;justify-content:space-between;align-items:center;padding:0.5rem 1rem;background-color:var(--grey-2);min-height:1.5rem;border-top-right-radius:0.5rem;border-top-left-radius:0.5rem;}.controls.svelte-ipr7k2 {display:flex;align-items:center;gap:0.6rem;margin-left:0.8125rem;}.dot.svelte-ipr7k2 {width:0.9375rem;height:0.9375rem;border-radius:50%;}.red.svelte-ipr7k2 {background:rgb(252, 98, 93);}.yellow.svelte-ipr7k2 {background:rgb(253, 188, 64);}.green.svelte-ipr7k2 {background:rgb(53, 205, 75);}.lang-text.svelte-ipr7k2 {margin-left:0.75rem;font-size:1rem;color:var(--grey-4);text-transform:uppercase;}.actions.svelte-ipr7k2 {display:flex;flex-direction:row;gap:0.75rem;padding-right:1.5rem;color:var(--grey-5);}.action-btn.svelte-ipr7k2 {border:none;cursor:pointer;background-color:var(--grey-5);width:1.1rem;height:1.1rem;mask-size:contain;mask-repeat:no-repeat;mask-position:center;-webkit-mask-size:contain;-webkit-mask-repeat:no-repeat;-webkit-mask-position:center;transition:background-color 0.2s;}.action-btn.svelte-ipr7k2:hover {background-color:var(--grey-4);}\r
\r
  /* 内容容器 - 支持折叠 */.content-container.svelte-ipr7k2 {position:relative;transition:max-height 0.3s ease-in-out;}.content-container.collapsed.svelte-ipr7k2 {max-height:400px;overflow:hidden;}.content-container.collapsed.svelte-ipr7k2::after {content:"";position:absolute;bottom:0;left:0;right:0;height:100px;background:linear-gradient(to bottom, transparent, var(--grey-3));pointer-events:none;}.collapse-btn.svelte-ipr7k2 {position:absolute;bottom:1rem;left:50%;transform:translateX(-50%);background-color:var(--grey-5);border:1px solid var(--grey-4);border-radius:50%;width:2rem;height:2rem;mask-size:1.75rem;mask-repeat:no-repeat;mask-position:center;-webkit-mask-size:1.25rem;-webkit-mask-repeat:no-repeat;-webkit-mask-position:center;cursor:pointer;transition:all 0.2s ease;box-shadow:0 2px 8px rgba(0, 0, 0, 0.15);z-index:10;\r
    animation: svelte-ipr7k2-float 2s ease-in-out infinite;scale:1.5;}.collapse-btn.svelte-ipr7k2:hover {background-color:var(--grey-6);transform:translateX(-50%) scale(1.1);box-shadow:0 4px 12px rgba(0, 0, 0, 0.2);}\r
\r
  /* 飘动动画 */\r
  @keyframes svelte-ipr7k2-float {\r
    0%,\r
    100% {\r
      transform: translateX(-50%) translateY(0);\r
    }\r
    50% {\r
      transform: translateX(-50%) translateY(-6px);\r
    }\r
  }.collapse-btn.svelte-ipr7k2:hover {animation-play-state:paused;}\r
\r
  /* 核心：处理插槽内的样式 */code-block pre * {font-family:"Maple Mono", "Courier New", Courier, monospace;font-size:0.925rem;line-height:1.25rem;line-break:anywhere;white-space:break-spaces;}code-block pre {padding:0.925rem;margin:0;border-bottom-right-radius:0.5rem;border-bottom-left-radius:0.5rem;background-color:var(--grey-3) !important;overflow-x:auto;}html[data-theme="dark"] code-block span {color:var(--shiki-dark) !important;}\r
\r
  /* 行号样式 */code-block .line {color:inherit;text-indent:-2.5rem;padding-left:2.5rem;display:block;min-height:1.25rem;contain-intrinsic-height:24px;transition:background-color 0.15s ease,\r
      opacity 0.15s ease,\r
      box-shadow 0.15s ease;}code-block .line:hover {background-color:var(--line-hover-bg);}code-block code {counter-reset:step;counter-increment:step 0;display:flex;flex-direction:column;}code-block code .line::before {content:counter(step);counter-increment:step;width:1rem;margin-right:1.5rem;display:inline-block;text-align:right;color:var(--grey-5);}\r
\r
  /* 行高亮（highlight + meta highlight 复用同一个 class） */code-block .line.highlighted {background-color:var(--cb-line-highlight-bg);box-shadow:inset 0.25rem 0 0 var(--cb-line-highlight-border);}\r
\r
  /* Diff（增删行） */code-block .line.diff.add {background-color:var(--cb-diff-add-bg);box-shadow:inset 0.25rem 0 0 var(--cb-diff-add-border);}code-block .line.diff.remove {background-color:var(--cb-diff-remove-bg);box-shadow:inset 0.25rem 0 0 var(--cb-diff-remove-border);}\r
\r
  /* 不占用额外 DOM 的情况下，用行号前缀标识 + / -（避免覆盖 .line::before 计数逻辑） */code-block code .line.diff.add::before {content:counter(step) " +";color:var(--cb-diff-add-border);}code-block code .line.diff.remove::before {content:counter(step) " -";color:var(--cb-diff-remove-border);}\r
\r
  /* Focus（聚焦显示）：当存在 focused 行时，其他行整体淡化 */code-block pre.has-focused .line {opacity:var(--cb-focus-dim-opacity);}code-block pre.has-focused .line.focused {opacity:1;background-color:var(--cb-focus-bg);box-shadow:inset 0.25rem 0 0 var(--cb-focus-border);}\r
\r
  /* Error / Warning（基于 transformerNotationErrorLevel） */code-block .line.highlighted.error {background-color:var(--cb-error-bg);box-shadow:inset 0.25rem 0 0 var(--cb-error-border);}code-block .line.highlighted.warning {background-color:var(--cb-warning-bg);box-shadow:inset 0.25rem 0 0 var(--cb-warning-border);}code-block .highlighted-word {background-color:var(--cb-highlighted-word-bg);border-radius:0.2rem;padding:0.05rem 0.15rem;}code-block .dark {box-shadow:none;}\r
\r
  /* 主题相关的悬停颜色 - 与 Shiki 主题颜色协调 */html:not([data-theme="dark"]) code-block {--line-hover-bg: rgba(0, 0, 0, 0.06);--cb-line-highlight-bg: rgba(255, 235, 59, 0.14);--cb-line-highlight-border: rgba(255, 193, 7, 0.9);--cb-diff-add-bg: rgba(76, 175, 80, 0.14);--cb-diff-add-border: rgba(76, 175, 80, 0.75);--cb-diff-remove-bg: rgba(244, 67, 54, 0.14);--cb-diff-remove-border: rgba(244, 67, 54, 0.75);--cb-focus-dim-opacity: 0.55;--cb-focus-bg: rgba(33, 150, 243, 0.08);--cb-focus-border: rgba(33, 150, 243, 0.65);--cb-error-bg: rgba(244, 67, 54, 0.14);--cb-warning-bg: rgba(255, 152, 0, 0.14);--cb-error-border: rgba(244, 67, 54, 0.85);--cb-warning-border: rgba(255, 152, 0, 0.85);--cb-highlighted-word-bg: rgba(255, 235, 59, 0.25);}html[data-theme="dark"] code-block {--line-hover-bg: rgba(255, 255, 255, 0.1);--cb-line-highlight-bg: rgba(255, 255, 255, 0.06);--cb-line-highlight-border: rgba(255, 193, 7, 0.35);--cb-diff-add-bg: rgba(76, 175, 80, 0.16);--cb-diff-add-border: rgba(76, 175, 80, 0.55);--cb-diff-remove-bg: rgba(244, 67, 54, 0.16);--cb-diff-remove-border: rgba(244, 67, 54, 0.55);--cb-focus-dim-opacity: 0.5;--cb-focus-bg: rgba(33, 150, 243, 0.12);--cb-focus-border: rgba(33, 150, 243, 0.55);--cb-error-bg: rgba(244, 67, 54, 0.18);--cb-warning-bg: rgba(255, 152, 0, 0.18);--cb-error-border: rgba(244, 67, 54, 0.7);--cb-warning-border: rgba(255, 152, 0, 0.7);--cb-highlighted-word-bg: rgba(255, 235, 59, 0.18);}\r
\r
  /* 全屏样式 */.fullscreen.svelte-ipr7k2 {position:fixed;top:0;left:0;right:0;bottom:0;width:100vw;height:100vh;margin:0;z-index:9999;border-radius:0;\r
    animation: svelte-ipr7k2-fullscreenIn 0.3s ease-out;display:flex;flex-direction:column;background-color:rgba(0, 0, 0, 0.85);backdrop-filter:blur(8px);padding:2rem;box-sizing:border-box;}.fullscreen.svelte-ipr7k2 .header:where(.svelte-ipr7k2) {border-radius:0.5rem 0.5rem 0 0;}.fullscreen.svelte-ipr7k2 .content-container:where(.svelte-ipr7k2) {flex:1;overflow:auto;max-height:none !important;border-radius:0 0 0.5rem 0.5rem;}.fullscreen.svelte-ipr7k2 .content-container.collapsed:where(.svelte-ipr7k2) {max-height:none !important;}.fullscreen.svelte-ipr7k2 .content-container:where(.svelte-ipr7k2)::after {display:none;}.fullscreen.svelte-ipr7k2 pre {border-radius:0 0 0.5rem 0.5rem !important;}\r
\r
  @keyframes svelte-ipr7k2-fullscreenIn {\r
    from {\r
      opacity: 0;\r
      transform: scale(0.95);\r
    }\r
    to {\r
      opacity: 1;\r
      transform: scale(1);\r
    }\r
  }.exiting.svelte-ipr7k2 {\r
    animation: svelte-ipr7k2-fullscreenOut 0.3s ease-in forwards;}\r
\r
  @keyframes svelte-ipr7k2-fullscreenOut {\r
    from {\r
      opacity: 1;\r
      transform: scale(1);\r
    }\r
    to {\r
      opacity: 0;\r
      transform: scale(0.95);\r
    }\r
  }`};function xe(k,f){be(f,!0),pe(k,ye);let l=s(null),c=s(!1),w=s(""),d=s(!1),n=s(!1),M=s(!1),i=s(!1),x=s(!1),$=s(null);const Y=15;async function j(){const a=(e(l)?.querySelector("slot")?.assignedElements({flatten:!0})??[]).find(m=>m.tagName==="PRE");if(!a)return;const v=a.textContent??"";try{await navigator.clipboard.writeText(v),o(c,!0),setTimeout(()=>{o(c,!1)},3e3)}catch(m){console.error("Failed to copy:",m)}}function J(){const a=(e(l)?.querySelector("slot")?.assignedElements({flatten:!0})??[]).find(m=>m.tagName==="PRE");return a?a.getAttribute("data-language")??"":""}function Q(){const a=(e(l)?.querySelector("slot")?.assignedElements({flatten:!0})??[]).find(ne=>ne.tagName==="PRE");if(!a)return;const v=a.querySelector("code");if(!v)return;v.querySelectorAll(".line").length>Y&&(o(M,!0),o(n,!0))}function V(){o(n,!e(n))}function N(){e(i)?(o(x,!0),setTimeout(()=>{o(i,!1),o(x,!1),typeof document<"u"&&(document.body.style.overflow="")},300)):(o(i,!0),typeof document<"u"&&(document.body.style.overflow="hidden"))}function q(r){r.key==="Escape"&&e(i)&&N()}ae(async()=>{o(w,J(),!0),setTimeout(()=>{Q()},100),typeof window<"u"&&window.addEventListener("keydown",q)}),ie(()=>{typeof window<"u"&&window.removeEventListener("keydown",q),typeof document<"u"&&(document.body.style.overflow="")});const G=()=>{const r=document.documentElement.dataset.theme;o(d,r==="dark")};ge(()=>{G();const r=new MutationObserver(G);return r.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),()=>r.disconnect()});var p=we(),_=b(p),E=b(_),Z=h(b(E),6);{var ee=r=>{var t=he(),a=b(t,!0);g(t),A(()=>fe(a,e(w))),z(r,t)};T(Z,r=>{e(w)&&r(ee)})}g(E);var O=h(E,2),C=b(O),D=h(C,2);g(O),g(_);var L=h(_,2),u=b(L),re=b(u);ue(re,f,"default",{}),g(u),X(u,r=>o(l,r),()=>e(l));var oe=h(u,2);{var te=r=>{var t=ke();A(()=>{y(t,`mask-image: url(${(e(n)?H.src:P.src)??""}); -webkit-mask-image: url(${(e(n)?H.src:P.src)??""});`),B(t,"aria-label",e(n)?"Expand code":"Collapse code")}),S("click",t,V),z(r,t)};T(oe,r=>{e(M)&&!e(i)&&r(te)})}g(L),g(p),X(p,r=>o($,r),()=>e($)),A(()=>{R(p,1,`codeblock ${e(d)?"dark":""} ${e(i)?"fullscreen":""} ${e(x)?"exiting":""}`,"svelte-ipr7k2"),y(C,`mask-image: url(${(e(c)?U.src:I.src)??""}); -webkit-mask-image: url(${(e(c)?U.src:I.src)??""});`),y(D,`mask-image: url(${(e(i)?W.src:K.src)??""}); -webkit-mask-image: url(${(e(i)?W.src:K.src)??""});`),B(D,"aria-label",e(i)?"Exit fullscreen":"Enter fullscreen"),R(L,1,`content-container ${e(n)?"collapsed":""}`,"svelte-ipr7k2"),y(u,`font-family: ${ve.family};`)}),S("click",C,j),S("click",D,N),z(k,p),me()}ce(["click"]);customElements.define("code-block",de(xe,{},["default"],[],{mode:"open"}));export{xe as default};
