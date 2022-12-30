import{M as K,N as W,B as Z,O as u}from"./index-66d0eec5.js";const $={selectLabel:"text-slate-700 dark:text-slate-500",selectButton:"ring-1 ring-slate-900/10 rounded-lg shadow-sm p-2 text-slate-700  bg-white dark:bg-slate-600 dark:ring-0 dark:highlight-white/5 dark:text-slate-200",selectIcon:"text-slate-400",dropdownList:"text-slate-700 bg-white ring-1 ring-black ring-opacity-5 dark:bg-slate-700 dark:ring-0 dark:highlight-white/5 dark:text-slate-300",dropdownHover:"hover:bg-slate-50 hover:dark:bg-slate-800/50",textActive:"text-sky-500",iconActiveStroke:"stroke-sky-500",iconActiveFill:"fill-sky-500",iconActiveShade:"fill-sky-400/20",iconStroke:"stroke-slate-400",iconFill:"fill-slate-400"},_=e=>({dark:t=>`
<svg viewBox="0 0 24 24" fill="none" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
	<path
		class="${t?e.iconActiveShade:e.iconStroke}"
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
	/>
	<path
		class="${t?e.iconActiveFill:e.iconFill}"
		d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
	/>
	<path
		class="${t?e.iconActiveFill:e.iconFill}"
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
	/>
</svg>`,light:t=>`
<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
	<path class="${t?e.iconActiveStroke+" "+e.iconActiveShade:e.iconStroke}" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
	<path
		class=${t?e.iconActiveStroke:e.iconStroke}
		d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
	/>
</svg>`,system:t=>`
<svg viewBox="0 0 24 24" fill="none">
	<path
		class="${t?e.iconActiveStroke+" "+e.iconActiveShade:e.iconStroke}"
		d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z"
		stroke-width="2"
		stroke-linejoin="round"
	/>
	<path
		class="${t?e.iconActiveStroke:e.iconStroke}"
		d="M14 15c0 3 2 5 2 5H8s2-2 2-5"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</svg>`}),z=_($),I={};function Xe(){return W(I)}function G(e){K(I,e)}const Q=["light","dark","system"],X={light:"Light",dark:"Dark",system:"System"};function Ye(e){const{key:t,colors:i,icons:r,labels:n}={key:"theme",colors:$,icons:z,labels:X,...e};let s="system";{const c=localStorage.theme;(c==="light"||c==="dark")&&(s=c)}const{subscribe:o,set:d}=Z(s);function l(c){Q.includes(c)&&c!==s&&(s=c,d(s))}const v={subscribe:o,setTheme:l,colors:i,icons:r,labels:n};return G(v),v}var g=e=>t=>i=>i?t.setAttribute(e,i):t.removeAttribute(e),C=e=>t=>i=>i===void 0?t.removeAttribute(e):t.setAttribute(e,i.toString()),Y=g("aria-label"),ee=e=>t=>u(e,i=>i.label).subscribe(Y(t)),F=()=>{};function p(e,t){let i=t.map(r=>r(e));return()=>i.forEach(r=>r())}var te=" ",ie="Enter",re="Escape",ne="ArrowUp",ae="ArrowDown",se="Home",oe="End",de="PageUp",le="PageDown",ce="Tab",y=e=>t=>{switch(t){case te:case ie:return e(),!0}return!1},ue=0;function ve(){return++ue}function h(e,t){return e.id||(e.id=`${t}:${ve()}`),e}var P=(e,t,i,r=!1)=>(e.addEventListener(t,i,r),()=>e.removeEventListener(t,i,r)),me=e=>t=>{t.stopPropagation(),t.stopImmediatePropagation(),e(t)},E=e=>t=>P(t,"click",me(e));function M(...e){let t=i=>{for(let r of e)if(r(i.key)){i.preventDefault(),i.stopPropagation(),i.stopImmediatePropagation();return}};return i=>(i.addEventListener("keydown",t),()=>i.removeEventListener("keydown",t))}var k=()=>{},b=e=>t=>(t.setAttribute("role",e),k),f=(e=-1)=>t=>(t.tabIndex=e,F),pe=e=>t=>(t.setAttribute("type",e),k),he=e=>"headlessui-"+e,be=g("aria-activedescendant"),fe=e=>t=>u(e,i=>{var r;return((r=i.items[i.active])==null?void 0:r.id)??""}).subscribe(be(t)),ge=g("aria-controls"),ke=e=>t=>u(e,i=>i.controls).subscribe(ge(t)),xe=C("aria-disabled"),we=e=>t=>u(e,i=>{var r;return(r=i.items.find(n=>n.id===t.id))==null?void 0:r.disabled}).subscribe(xe(t)),T=e=>async t=>{t&&requestAnimationFrame(()=>e.focus({preventScroll:!0}))},Ae={expanded:!1,opened:!1},Se=C("aria-expanded"),ye=e=>t=>u(e,i=>i.expanded).subscribe(Se(t)),Ee=e=>t=>u(e,i=>i.expanded).subscribe(T(t)),Me=e=>t=>u(e,i=>i.opened&&!i.expanded).subscribe(T(t)),Le={selected:null},j=e=>t=>i=>{switch(i){case e:return t(),!0}return!1},Ze=j(re),$e=(e,t)=>i=>{switch(i){case se:case de:return e(),!0;case oe:case le:return t(),!0}return!1},L=(e,t)=>i=>{switch(i){case ne:return e(),!0;case ae:return t(),!0}return!1},Ie=j(ce),Ce=()=>({items:[],active:-1});function Fe(e){return t=>()=>e(t)}var Pe=(e,t)=>({items:e.items.filter(i=>i.id!==t.id)}),D=e=>e.active===-1||e.items.length===0?void 0:e.active>=e.items.length?e.items[e.active]:e.items[e.active].value,Te=(e,t,i)=>r=>{let n=r.target.closest(e);t(n),i()};function je(e,t){if(e.active===-1||e.items[e.active].disabled)return{};let i=D(e);if(t){let r=new CustomEvent("select",{detail:{selected:i}});t.dispatchEvent(r)}return{expanded:!1,selected:i}}function De(e,t){return{value:(t==null?void 0:t.value)??e.textContent.trim(),disabled:(t==null?void 0:t.disabled)??!1}}var He=e=>e.items.findIndex(t=>!t.disabled),Be=e=>{let t=e.active===-1?e.items.length:e.active;for(;--t>-1;)if(!e.items[t].disabled)return t;return e.active},Oe=e=>{let t=e.active;for(;++t<e.items.length;)if(!e.items[t].disabled)return t;return e.active},Ue=e=>qe(e.items,t=>!t.disabled);function qe(e,t){let i=e.length;for(;i--;)if(t(e[i],i,e))return i;return-1}var Je=(e,t,i)=>r=>{let n=t(),s=De(e,r),o=n.items.find(d=>d.id===e.id);if(o){if(o.value===s.value&&o.disabled===s.disabled)return;Object.assign(o,s)}else n.items.push({id:e.id,...s});i({items:n.items})},Ne=(e,t)=>i=>{let r=e();t(i?r.items.findIndex(n=>n.id===i.id&&!n.disabled):-1)},Re=(e,t)=>i=>{let r=e(),n=r.active===-1?r.items:r.items.slice(r.active+1).concat(r.items.slice(0,r.active+1)),s=new RegExp(`^${i}`,"i"),o=n.findIndex(d=>d.value.match(s)&&!d.disabled);if(o>-1){let d=(o+r.active+1)%r.items.length;t(d)}};function Ve(e,t){return i=>{function r(n){n.pointerType!==""&&(!t||t())&&i&&!i.contains(n.target)&&i.clientWidth&&(n.preventDefault(),n.stopPropagation(),e(n))}return P(document.documentElement,"click",r,!0)}}function Ke(e){return t=>{let i=r=>e();return t.addEventListener("pointerout",i),()=>t.removeEventListener("pointerout",i)}}function We(e,t){return i=>{let r=n=>{if(n.target!==i){let s=n.target.closest(e);t(s)}};return i.addEventListener("pointermove",r),()=>i.removeEventListener("pointermove",r)}}var _e=()=>e=>(e.setAttribute("aria-haspopup","true"),F);Promise.resolve();var ze=e=>/^\S$/.test(e),Ge=e=>{let t,i="";return r=>ze(r)?(t&&clearTimeout(t),i+=r,e(i),t=window.setTimeout(()=>{t=0,i=""},350),!0):!1};function et(e){let t=he("menu"),i={...Ce(),...Ae,...Le,...e},r=Z(i),n=a=>r.set(i={...i,...a}),s=()=>n({expanded:!0,opened:!0}),o=()=>n({expanded:!1,active:-1}),d=()=>i.expanded?o():s(),l=(a,m=!1)=>i.active!==a&&n({expanded:i.expanded||m,active:a}),v=()=>l(He(i),!0),c=()=>l(Be(i),!0),H=()=>l(Oe(i),!0),x=()=>l(Ue(i),!0),w=()=>n(je(i,i.button)),B=()=>l(-1),O=Re(()=>i,l),A=Ne(()=>i,l),U=a=>n(Pe(i,a));function q(a){return h(a,t),n({button:a}),{destroy:p(a,[pe("button"),b("button"),_e(),f(0),ee(r),ye(r),ke(r),E(d),M(y(d),L(x,v)),Me(r)])}}function J(a){return h(a,t),n({controls:a?a.id:void 0}),{destroy:p(a,[b("menu"),f(0),Ve(o),E(Te('[role="menuitem"]',A,w)),We('[role="menuitem"]',A),Ke(B),M(y(w),Ze(o),$e(v,x),L(c,H),Ie(k),Ge(O)),Ee(r),fe(r)])}}function N(a,m){h(a,t);let S=Je(a,()=>i,n);S(m);let V=p(a,[f(-1),b("menuitem"),we(r),Fe(U)]);return{update:S,destroy:V}}let{subscribe:R}=u(r,a=>{let{expanded:m}=a;return{expanded:m,active:D(a)}});return{subscribe:R,button:q,items:J,item:N,open:s,close:o}}export{et as J,Ye as c,Xe as g,Q as t};