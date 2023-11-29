/*! For license information please see 9151db80a6a17bd2e0b19a0a94455ed4.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[53918],{53918:(e,t,i)=>{i.r(t),i.d(t,{calcite_value_list:()=>g});var a=i(30396),s=i(48750),n=i(32544),l=i(29340),r=i(36578),c=i(77041),o=i(39351),d=i(11737);var h;function m(e,t,i){const{items:a,messages:s}=i,n=a.length,l=(0,d.q)(i,e)+1;return function(e,t,i,a){return e.replace("${position}",i.toString()).replace("${itemLabel}",t).replace("${total}",a.toString())}("idle"===t?s.dragHandleIdle:"active"===t?s.dragHandleActive:"change"===t?s.dragHandleChange:s.dragHandleCommit,e.label,l,n)}function u(e){return{handle:e.composedPath().find((e=>void 0!==e.dataset?.jsHandle)),item:e.composedPath().find((e=>"calcite-value-list-item"===e.tagName?.toLowerCase()))}}!function(e){e.grip="grip"}(h||(h={}));const g=class{constructor(e){(0,a.r)(this,e),this.calciteListChange=(0,a.c)(this,"calciteListChange",6),this.calciteListOrderChange=(0,a.c)(this,"calciteListOrderChange",6),this.calciteListFilter=(0,a.c)(this,"calciteListFilter",6),this.lastSelectedItem=null,this.mutationObserver=(0,c.c)("mutation",d.m.bind(this)),this.setFilterEl=e=>{this.filterEl=e},this.setFilteredItems=e=>{this.filteredItems=e},this.deselectRemovedItems=d.d.bind(this),this.deselectSiblingItems=d.a.bind(this),this.selectSiblings=d.s.bind(this),this.handleFilter=d.h.bind(this),this.handleFilterEvent=d.b.bind(this),this.getItemData=d.g.bind(this),this.keyDownHandler=e=>{if(e.defaultPrevented)return;const{handle:t,item:i}=u(e);if(t&&!i.handleActivated&&" "===e.key&&this.updateScreenReaderText(m(i,"commit",this)),!t||!i.handleActivated)return void d.k.call(this,e);const{items:a}=this;if(" "===e.key&&this.updateScreenReaderText(m(i,"active",this)),"ArrowUp"!==e.key&&"ArrowDown"!==e.key||a.length<=1)return;e.preventDefault();const{el:s}=this,n=(0,d.t)(this,i,"ArrowUp"===e.key?"up":"down");if(n===a.length-1)s.appendChild(i);else{const e=s.children[n],t=e===i.nextElementSibling?e.nextElementSibling:e;s.insertBefore(i,t)}this.items=this.getItems(),this.calciteListOrderChange.emit(this.items.map((({value:e})=>e))),requestAnimationFrame((()=>t?.focus())),i.handleActivated=!0,this.updateHandleAriaLabel(t,m(i,"change",this))},this.storeAssistiveEl=e=>{this.assistiveTextEl=e},this.handleFocusIn=e=>{const{handle:t,item:i}=u(e);!i?.handleActivated&&i&&t&&this.updateHandleAriaLabel(t,m(i,"idle",this))},this.disabled=!1,this.dragEnabled=!1,this.filteredItems=[],this.filteredData=[],this.filterEnabled=!1,this.filterPlaceholder=void 0,this.filterText=void 0,this.group=void 0,this.loading=!1,this.multiple=!1,this.selectionFollowsFocus=!1,this.messageOverrides=void 0,this.messages=void 0,this.dataForFilter=[],this.defaultMessages=void 0,this.effectiveLocale="",this.selectedValues=new Map}onMessagesChange(){}effectiveLocaleChange(){(0,o.u)(this,this.effectiveLocale)}connectedCallback(){(0,r.c)(this),(0,o.c)(this),d.i.call(this),d.c.call(this)}async componentWillLoad(){(0,l.a)(this),await(0,o.s)(this)}componentDidLoad(){(0,l.s)(this),this.setUpDragAndDrop(),d.f.call(this)}componentDidRender(){(0,n.u)(this)}disconnectedCallback(){(0,r.d)(this),(0,o.d)(this),d.e.call(this),this.cleanUpDragAndDrop()}calciteListFocusOutHandler(e){d.n.call(this,e)}calciteListItemRemoveHandler(e){d.r.call(this,e)}calciteListItemChangeHandler(e){d.j.call(this,e)}calciteInternalListItemPropsChangeHandler(e){e.stopPropagation(),this.setUpFilter()}calciteInternalListItemValueChangeHandler(e){d.l.call(this,e),e.stopPropagation()}getItems(){return Array.from(this.el.querySelectorAll("calcite-value-list-item"))}setUpItems(){d.o.call(this,"calcite-value-list-item")}setUpFilter(){this.filterEnabled&&(this.dataForFilter=this.getItemData())}setUpDragAndDrop(){this.cleanUpDragAndDrop(),this.dragEnabled&&(this.sortable=s.S.create(this.el,{dataIdAttr:"id",handle:".handle",draggable:"calcite-value-list-item",group:this.group,onSort:()=>{this.items=Array.from(this.el.querySelectorAll("calcite-value-list-item"));const e=this.items.map((e=>e.value));this.calciteListOrderChange.emit(e)}}))}cleanUpDragAndDrop(){this.sortable?.destroy(),this.sortable=null}handleBlur(){this.dragEnabled&&this.updateScreenReaderText("")}async getSelectedItems(){return this.selectedValues}async setFocus(e){return await(0,l.c)(this),d.p.call(this,e)}getIconType(){let e=null;return this.dragEnabled&&(e=h.grip),e}updateScreenReaderText(e){this.assistiveTextEl.textContent=e}updateHandleAriaLabel(e,t){e.ariaLabel=t}render(){return(0,a.h)(d.L,{onBlur:this.handleBlur,onFocusin:this.handleFocusIn,onKeyDown:this.keyDownHandler,props:this})}static get assetsDirs(){return["assets"]}get el(){return(0,a.g)(this)}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};g.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{position:relative;box-sizing:border-box;display:flex;flex-shrink:0;flex-grow:0;flex-direction:column;align-items:stretch;background-color:transparent;font-size:var(--calcite-font-size--1);color:var(--calcite-ui-text-2)}:host *{box-sizing:border-box}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}calcite-value-list-item:last-of-type{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([filter-enabled]) header{margin-block-end:0.25rem;display:flex;align-items:center;justify-content:flex-end;background-color:var(--calcite-ui-foreground-1);--tw-shadow:0 1px 0 var(--calcite-ui-border-3);--tw-shadow-colored:0 1px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([filter-enabled]) header.sticky-pos{position:sticky;inset-block-start:0px;z-index:300}calcite-filter{margin-block-end:1px}.assistive-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}"},39351:(e,t,i)=>{i.d(t,{c:()=>h,d:()=>m,s:()=>c,u:()=>d});var a=i(30396),s=i(36578);const n={};function l(){throw new Error("could not fetch component message bundle")}function r(e){e.messages={...e.defaultMessages,...e.messageOverrides}}async function c(e){e.defaultMessages=await o(e,e.effectiveLocale),r(e)}async function o(e,t){const{el:i}=e,r=i.tagName.toLowerCase().replace("calcite-","");return async function(e,t){const i=`${t}_${e}`;return n[i]||(n[i]=fetch((0,a.a)(`./assets/${t}/t9n/messages_${e}.json`)).then((e=>(e.ok||l(),e.json()))).catch((()=>l()))),n[i]}((0,s.g)(t,"t9n"),r)}async function d(e,t){e.defaultMessages=await o(e,t),r(e)}function h(e){e.onMessagesChange=u}function m(e){e.onMessagesChange=void 0}function u(){r(this)}}}]);