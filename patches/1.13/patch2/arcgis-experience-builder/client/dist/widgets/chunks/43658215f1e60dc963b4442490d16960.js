/*! For license information please see 43658215f1e60dc963b4442490d16960.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[2938],{2938:(e,t,i)=>{i.r(t),i.d(t,{arcgis_drag_list_item_handle:()=>r});var s=i(28384);const r=class{constructor(e){(0,s.r)(this,e),this.arcgisHandlerDrag=(0,s.c)(this,"arcgisHandlerDrag",7),this.arcgisHandlerNavigation=(0,s.c)(this,"arcgisHandlerNavigation",7),this.handleKeys=e=>{const{isActive:t,closestItem:i}=this,{code:s}=e;if("Space"!==s){if(t&&("ArrowUp"===s||"ArrowDown"===s))switch(s){case"ArrowUp":this.arcgisHandlerNavigation.emit({direction:"up",handlerEle:this.ele,closestItem:i,event:e});break;case"ArrowDown":this.arcgisHandlerNavigation.emit({direction:"down",handlerEle:this.ele,closestItem:i,event:e})}}else this.isActive=!t},this.handleBlur=()=>{this.isActive=!1},this.isActive=!1}async activateHandler(){var e;null===(e=this.buttonRef)||void 0===e||e.focus(),this.isActive=!0}componentWillLoad(){const{ele:e,arcgisHandlerDrag:t}=this,i="arcgis-drag-list-item",s=e.closest(i);s?(this.closestItem=s,["dragend","dragstart"].forEach((r=>{e.addEventListener(r,(e=>{"dragstart"===r?(e.dataTransfer.effectAllowed="move",s.classList.add("arcgis-drag-list-item--dragging")):s.classList.remove("arcgis-drag-list-item--dragging");const a=Array.from(s.parentElement.querySelectorAll(i)).indexOf(s);t.emit({eventType:r,event:e,eventTarget:{index:a,ele:s}})}))}))):console.warn(`Handler is not inside a arcgis-drag-list-item! ${e}`)}render(){const{handleKeys:e,handleBlur:t,isActive:i}=this;return(0,s.h)("button",{class:{"arcgis-drag-list-item-handle":!0,"arcgis-drag-list-item-handle--active":i},draggable:!0,onBlur:t,onKeyDown:e,ref:e=>this.buttonRef=e},(0,s.h)("slot",null))}get ele(){return(0,s.d)(this)}};r.style=".arcgis-drag-list-item-handle{display:flex;justify-content:center;align-items:center;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;text-align:center;text-decoration:none;border-radius:0;box-sizing:border-box;padding:0;grid-gap:0.5rem;gap:0.5rem;position:relative;height:100%;background-color:transparent;outline-color:transparent;font-family:inherit;outline-offset:0}"}}]);