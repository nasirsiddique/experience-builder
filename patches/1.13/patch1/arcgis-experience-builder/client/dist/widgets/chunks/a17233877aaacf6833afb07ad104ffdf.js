/*! For license information please see a17233877aaacf6833afb07ad104ffdf.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[96565],{96565:(e,i,t)=>{t.r(i),t.d(i,{arcgis_image_item_preview:()=>n});var r=t(28384),a=t(66716),s=t(21147);const n=class{constructor(e){(0,r.r)(this,e),this.jsapiUrl=void 0,this.previewLayerUrl=void 0,this.previewImageItemObjectId=void 0,this.loading=!0}async componentDidLoad(){this.el.shadowRoot.firstElementChild.insertAdjacentHTML("beforebegin",`<link rel="stylesheet" href="${this.jsapiUrl}/themes/light/main.css" />`),this.initMapView()}handleRefreshImageItemPreviewLayer(){this.refreshImageItemPreviewLayer(this.previewImageItemObjectId)}async initMapView(){try{const{previewLayerUrl:e,previewImageItemObjectId:i}=this,[t,r,s]=await(0,a.l)(["esri/Map","esri/views/MapView","esri/layers/ImageryLayer"]);this.previewLayer=new s({url:e,visible:!1});const n=new t({layers:[this.previewLayer]});this.mapView=new r({map:n,container:this.container}),this.mapView.ui.remove(["attribution"]),this.mapView.when((()=>{this.refreshImageItemPreviewLayer(i),this.loading=!1}))}catch(e){}}async refreshImageItemPreviewLayer(e){const[i]=await(0,a.l)(["esri/layers/support/MosaicRule"]),t=new i({method:"lock-raster",lockRasterIds:[e]});this.previewLayer.mosaicRule=t;const r=await(0,s.m)(this.previewLayer,e);this.mapView.goTo({target:r}),this.previewLayer.visible=!0}render(){return(0,r.h)(r.H,null,(0,r.h)("div",{class:"map-container",ref:e=>this.container=e}))}get el(){return(0,r.d)(this)}static get watchers(){return{previewImageItemObjectId:["handleRefreshImageItemPreviewLayer"]}}};n.style=".from-map-wrapper{position:relative;padding:0.5rem}.loader-container{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.map-container{width:100%;height:100%}.esri-zoom{position:absolute;top:1px;left:1px}.is-rtl .esri-zoom{left:0}"}}]);