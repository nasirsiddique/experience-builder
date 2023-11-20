"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[21879],{56980:(e,t,n)=>{n.d(t,{e:()=>d,u:()=>m});var s=n(47817),i=n(89684),r=n(41083),o=n(69695),a=n(58574),l=n(39384),c=n(1186),h=n(71369);const u={minX:0,minY:0,maxX:0,maxY:0};class d{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new l.h(9,(0,a.t)("csp-restrictions")?e=>({minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const e=new Array(this._idByBounds.size);let t=0;this._idByBounds.forEach(((n,s)=>{e[t++]=s})),this._indexInvalid=!1,this._index.clear(),this._index.load(e)}else this._boundsToLoad.length&&(this._index.load(this._boundsToLoad.filter((e=>this._idByBounds.has(e)))),this._boundsToLoad.length=0)}}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(e){const t=this._boundsById.get(e);this._boundsById.delete(e),t&&(this._idByBounds.delete(t),this._indexInvalid||this._index.remove(t))}forEachInBounds(e,t){this._loadIndex(),function(e,t,n){u.minX=t[0],u.minY=t[1],u.maxX=t[2],u.maxY=t[3],e.search(u,n)}(this._index,e,(e=>t(this._idByBounds.get(e))))}get(e){return this._boundsById.get(e)}has(e){return this._boundsById.has(e)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(e,t){if(!this._indexInvalid){const t=this._boundsById.get(e);t&&(this._index.remove(t),this._idByBounds.delete(t))}this._boundsById.set(e,t),t&&(this._idByBounds.set(t,e),this._indexInvalid||(this._boundsToLoad.push(t),this._boundsToLoad.length>5e4&&this._loadIndex()))}}const f={getObjectId:e=>e.objectId,getAttributes:e=>e.attributes,getAttribute:(e,t)=>e.attributes[t],cloneWithGeometry:(e,t)=>new c.t(t,e.attributes,null,e.objectId),getGeometry:e=>e.geometry,getCentroid:(e,t)=>(e.centroid||(e.centroid=(0,h.t)(new c.a,e.geometry,t.hasZ,t.hasM)),e.centroid)};class m{constructor(e){this.geometryInfo=e,this._boundsStore=new d,this._featuresById=new Map,this._markedIds=new Set,this.events=new s.aB,this.featureAdapter=f}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){if(!this.numFeatures)return null;const e=(0,i.i)(i.J);return this._featuresById.forEach((t=>{const n=this._boundsStore.get(t.objectId);n&&(e[0]=Math.min(n[0],e[0]),e[1]=Math.min(n[1],e[1]),e[2]=Math.max(n[2],e[2]),e[3]=Math.max(n[3],e[3]))})),e}get storeStatistics(){let e=0;return this._featuresById.forEach((t=>{t.geometry&&t.geometry.coords&&(e+=t.geometry.coords.length)})),{featureCount:this._featuresById.size,vertexCount:e/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}add(e){this._add(e),this._emitChanged()}addMany(e){for(const t of e)this._add(t);this._emitChanged()}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(e){const t=this._featuresById.get(e);return t?(this._remove(t),this._emitChanged(),t):null}removeManyById(e){this._boundsStore.invalidateIndex();for(const t of e){const e=this._featuresById.get(t);e&&this._remove(e)}this._emitChanged()}forEachBounds(e,t,n){for(const s of e){const e=this._boundsStore.get(s.objectId);e&&t((0,o.O)(n,e))}}getFeature(e){return this._featuresById.get(e)}has(e){return this._featuresById.has(e)}forEach(e){this._featuresById.forEach((t=>e(t)))}forEachInBounds(e,t){this._boundsStore.forEachInBounds(e,(e=>{t(this._featuresById.get(e))}))}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let e=!1;this._featuresById.forEach(((t,n)=>{this._markedIds.has(n)||(e=!0,this._remove(t))})),this._markedIds.clear(),e&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(e){if(!e)return;const t=e.objectId;if(null==t)return void s.S.getLogger("esri.layers.graphics.data.FeatureStore").error(new s.s("featurestore:invalid-feature","feature id is missing",{feature:e}));const n=this._featuresById.get(t);let o;if(this._markedIds.add(t),n?(e.displayId=n.displayId,o=this._boundsStore.get(t),this._boundsStore.delete(t)):(0,s.H)(this.onFeatureAdd)&&this.onFeatureAdd(e),!e.geometry||!e.geometry.coords||!e.geometry.coords.length)return this._boundsStore.set(t,null),void this._featuresById.set(t,e);o=(0,r.f)(o||(0,i.i)(),e.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),this._boundsStore.set(t,o),this._featuresById.set(t,e)}_remove(e){return(0,s.H)(this.onFeatureRemove)&&this.onFeatureRemove(e),this._markedIds.delete(e.objectId),this._boundsStore.delete(e.objectId),this._featuresById.delete(e.objectId),e}}},39384:(e,t,n)=>{n.d(t,{h:()=>r});var s=n(47817),i=n(13464);class r{constructor(e=9,t){this.compareMinX=c,this.compareMinY=h,this.toBBox=function(e){return e},this._maxEntries=Math.max(4,e||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),t&&("function"==typeof t?this.toBBox=t:this._initFormat(t)),this.clear()}destroy(){this.clear(),_.prune(),x.prune(),B.prune(),S.prune()}all(e){this._all(this.data,e)}search(e,t){let n=this.data;const s=this.toBBox;if(g(e,n))for(_.clear();n;){for(let i=0,r=n.children.length;i<r;i++){const r=n.children[i],o=n.leaf?s(r):r;g(e,o)&&(n.leaf?t(r):p(e,o)?this._all(r,t):_.push(r))}n=_.pop()}}collides(e){let t=this.data;const n=this.toBBox;if(!g(e,t))return!1;for(_.clear();t;){for(let s=0,i=t.children.length;s<i;s++){const i=t.children[s],r=t.leaf?n(i):i;if(g(e,r)){if(t.leaf||p(e,r))return!0;_.push(i)}}t=_.pop()}return!1}load(e){if(!e.length)return this;if(e.length<this._minEntries){for(let t=0,n=e.length;t<n;t++)this.insert(e[t]);return this}let t=this._build(e.slice(0,e.length),0,e.length-1,0);if(this.data.children.length)if(this.data.height===t.height)this._splitRoot(this.data,t);else{if(this.data.height<t.height){const e=this.data;this.data=t,t=e}this._insert(t,this.data.height-t.height-1,!0)}else this.data=t;return this}insert(e){return e&&this._insert(e,this.data.height-1),this}clear(){return this.data=new M([]),this}remove(e){if(!e)return this;let t,n=this.data,i=null,r=0,o=!1;const a=this.toBBox(e);for(B.clear(),S.clear();n||B.length>0;){var l;if(n||(n=(0,s.aF)(B.pop()),i=B.data[B.length-1],r=null!=(l=S.pop())?l:0,o=!0),n.leaf&&(t=(0,s.cB)(n.children,e,n.children.length,n.indexHint),-1!==t))return n.children.splice(t,1),B.push(n),this._condense(B),this;o||n.leaf||!p(n,a)?i?(r++,n=i.children[r],o=!1):n=null:(B.push(n),S.push(r),r=0,i=n,n=n.children[0])}return this}toJSON(){return this.data}fromJSON(e){return this.data=e,this}_all(e,t){let n=e;for(x.clear();n;){var s;if(!0===n.leaf)for(const e of n.children)t(e);else x.pushArray(n.children);n=null!=(s=x.pop())?s:null}}_build(e,t,n,s){const i=n-t+1;let r=this._maxEntries;if(i<=r){const s=new M(e.slice(t,n+1));return o(s,this.toBBox),s}s||(s=Math.ceil(Math.log(i)/Math.log(r)),r=Math.ceil(i/r**(s-1)));const a=new w([]);a.height=s;const l=Math.ceil(i/r),c=l*Math.ceil(Math.sqrt(r));y(e,t,n,c,this.compareMinX);for(let i=t;i<=n;i+=c){const t=Math.min(i+c-1,n);y(e,i,t,l,this.compareMinY);for(let n=i;n<=t;n+=l){const i=Math.min(n+l-1,t);a.children.push(this._build(e,n,i,s-1))}}return o(a,this.toBBox),a}_chooseSubtree(e,t,n,s){for(;s.push(t),!0!==t.leaf&&s.length-1!==n;){let n,s=1/0,i=1/0;for(let r=0,o=t.children.length;r<o;r++){const o=t.children[r],a=u(o),l=f(e,o)-a;l<i?(i=l,s=a<s?a:s,n=o):l===i&&a<s&&(s=a,n=o)}t=n||t.children[0]}return t}_insert(e,t,n){const s=this.toBBox,i=n?e:s(e);B.clear();const r=this._chooseSubtree(i,this.data,t,B);for(r.children.push(e),l(r,i);t>=0&&B.data[t].children.length>this._maxEntries;)this._split(B,t),t--;this._adjustParentBBoxes(i,B,t)}_split(e,t){const n=e.data[t],s=n.children.length,i=this._minEntries;this._chooseSplitAxis(n,i,s);const r=this._chooseSplitIndex(n,i,s);if(!r)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const a=n.children.splice(r,n.children.length-r),l=n.leaf?new M(a):new w(a);l.height=n.height,o(n,this.toBBox),o(l,this.toBBox),t?e.data[t-1].children.push(l):this._splitRoot(n,l)}_splitRoot(e,t){this.data=new w([e,t]),this.data.height=e.height+1,o(this.data,this.toBBox)}_chooseSplitIndex(e,t,n){let s,i,r;s=i=1/0;for(let o=t;o<=n-t;o++){const t=a(e,0,o,this.toBBox),l=a(e,o,n,this.toBBox),c=m(t,l),h=u(t)+u(l);c<s?(s=c,r=o,i=h<i?h:i):c===s&&h<i&&(i=h,r=o)}return r}_chooseSplitAxis(e,t,n){const s=e.leaf?this.compareMinX:c,i=e.leaf?this.compareMinY:h;this._allDistMargin(e,t,n,s)<this._allDistMargin(e,t,n,i)&&e.children.sort(s)}_allDistMargin(e,t,n,s){e.children.sort(s);const i=this.toBBox,r=a(e,0,t,i),o=a(e,n-t,n,i);let c=d(r)+d(o);for(let s=t;s<n-t;s++){const t=e.children[s];l(r,e.leaf?i(t):t),c+=d(r)}for(let s=n-t-1;s>=t;s--){const t=e.children[s];l(o,e.leaf?i(t):t),c+=d(o)}return c}_adjustParentBBoxes(e,t,n){for(let s=n;s>=0;s--)l(t.data[s],e)}_condense(e){for(let t=e.length-1;t>=0;t--){const n=e.data[t];if(0===n.children.length)if(t>0){const i=e.data[t-1],r=i.children;r.splice((0,s.cB)(r,n,r.length,i.indexHint),1)}else this.clear();else o(n,this.toBBox)}}_initFormat(e){const t=["return a"," - b",";"];this.compareMinX=new Function("a","b",t.join(e[0])),this.compareMinY=new Function("a","b",t.join(e[1])),this.toBBox=new Function("a","return {minX: a"+e[0]+", minY: a"+e[1]+", maxX: a"+e[2]+", maxY: a"+e[3]+"};")}}function o(e,t){a(e,0,e.children.length,t,e)}function a(e,t,n,s,i){i||(i=new M([])),i.minX=1/0,i.minY=1/0,i.maxX=-1/0,i.maxY=-1/0;for(let r,o=t;o<n;o++)r=e.children[o],l(i,e.leaf?s(r):r);return i}function l(e,t){e.minX=Math.min(e.minX,t.minX),e.minY=Math.min(e.minY,t.minY),e.maxX=Math.max(e.maxX,t.maxX),e.maxY=Math.max(e.maxY,t.maxY)}function c(e,t){return e.minX-t.minX}function h(e,t){return e.minY-t.minY}function u(e){return(e.maxX-e.minX)*(e.maxY-e.minY)}function d(e){return e.maxX-e.minX+(e.maxY-e.minY)}function f(e,t){return(Math.max(t.maxX,e.maxX)-Math.min(t.minX,e.minX))*(Math.max(t.maxY,e.maxY)-Math.min(t.minY,e.minY))}function m(e,t){const n=Math.max(e.minX,t.minX),s=Math.max(e.minY,t.minY),i=Math.min(e.maxX,t.maxX),r=Math.min(e.maxY,t.maxY);return Math.max(0,i-n)*Math.max(0,r-s)}function p(e,t){return e.minX<=t.minX&&e.minY<=t.minY&&t.maxX<=e.maxX&&t.maxY<=e.maxY}function g(e,t){return t.minX<=e.maxX&&t.minY<=e.maxY&&t.maxX>=e.minX&&t.maxY>=e.minY}function y(e,t,n,r,o){const a=[t,n];for(;a.length;){const t=(0,s.aF)(a.pop()),n=(0,s.aF)(a.pop());if(t-n<=r)continue;const l=n+Math.ceil((t-n)/r/2)*r;(0,i.r)(e,l,n,t,o),a.push(n,l,l,t)}}const _=new s.b5,x=new s.b5,B=new s.b5,S=new s.b5({deallocator:void 0});class I{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class b extends I{constructor(){super(...arguments),this.height=1,this.indexHint=new s.cC}}class M extends b{constructor(e){super(),this.children=e,this.leaf=!0}}class w extends b{constructor(e){super(),this.children=e,this.leaf=!1}}},60235:(e,t,n)=>{n.d(t,{i:()=>o,s:()=>a,u:()=>l});var s=n(58574),i=n(47817),r=n(76791);function o(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?r.l:"esriGeometryPolyline"===e?r.o:r.S}}}function a(e,t){if((0,s.t)("csp-restrictions"))return()=>({[t]:null,...e});try{let n=`this.${t} = null;`;for(const t in e)n+=`this${t.indexOf(".")?`["${t}"]`:`.${t}`} = ${JSON.stringify(e[t])};`;const s=new Function(n);return()=>new s}catch(n){return()=>({[t]:null,...e})}}function l(e={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,i.R)(e)}}]}},76791:(e,t,n)=>{n.d(t,{S:()=>o,l:()=>i,o:()=>r,r:()=>l,s:()=>c,t:()=>a,y:()=>h});const s=[252,146,31,255],i={type:"esriSMS",style:"esriSMSCircle",size:6,color:s,outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[153,153,153,255]}},r={type:"esriSLS",style:"esriSLSSolid",width:.75,color:s},o={type:"esriSFS",style:"esriSFSSolid",color:[252,146,31,196],outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[255,255,255,191]}},a={type:"esriTS",color:[255,255,255,255],font:{family:"arial-unicode-ms",size:10,weight:"bold"},horizontalAlignment:"center",kerning:!0,haloColor:[0,0,0,255],haloSize:1,rotated:!1,text:"",xoffset:0,yoffset:0,angle:0},l={type:"esriSMS",style:"esriSMSCircle",color:[0,0,0,255],outline:null,size:10.5},c={type:"esriSLS",style:"esriSLSSolid",color:[0,0,0,255],width:1.5},h={type:"esriSFS",style:"esriSFSSolid",color:[0,0,0,255],outline:null}},89300:(e,t,n)=>{n.d(t,{L:()=>g});var s=n(47817);const i={102100:{maxX:20037508.342788905,minX:-20037508.342788905,plus180Line:new s.v({paths:[[[20037508.342788905,-20037508.342788905],[20037508.342788905,20037508.342788905]]],spatialReference:s.O.WebMercator}),minus180Line:new s.v({paths:[[[-20037508.342788905,-20037508.342788905],[-20037508.342788905,20037508.342788905]]],spatialReference:s.O.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new s.v({paths:[[[180,-180],[180,180]]],spatialReference:s.O.WGS84}),minus180Line:new s.v({paths:[[[-180,-180],[-180,180]]],spatialReference:s.O.WGS84})}};function r(e,t){return Math.ceil((e-t)/(2*t))}function o(e,t){const n=a(e);for(const e of n)for(const n of e)n[0]+=t;return e}function a(e){return(0,s.V)(e)?e.rings:e.paths}async function l(e,t,n){const i="string"==typeof e?(0,s.j)(e):e,r=t[0].spatialReference,o=(0,s.ar)(t[0]),a={...n,query:{...i.query,f:"json",sr:r.wkid?r.wkid:JSON.stringify(r),geometries:JSON.stringify(c(t))}};return function(e,t,n){const i=(0,s.as)(t);return e.map((e=>{const t=i.fromJSON(e);return t.spatialReference=n,t}))}((await(0,s.U)(i.path+"/simplify",a)).data,o,r)}function c(e){return{geometryType:(0,s.ar)(e[0]),geometries:e.map((e=>e.toJSON()))}}const h=s.S.getLogger("esri.geometry.support.normalizeUtils");function u(e){return"polygon"===e[0].type}function d(e){return"polyline"===e[0].type}function f(e,t,n){if(t){const t=function(e,t){if(!(e instanceof s.v||e instanceof s.x)){const e="straightLineDensify: the input geometry is neither polyline nor polygon";throw h.error(e),new s.s(e)}const n=a(e),i=[];for(const e of n){const n=[];i.push(n),n.push([e[0][0],e[0][1]]);for(let s=0;s<e.length-1;s++){const i=e[s][0],r=e[s][1],o=e[s+1][0],a=e[s+1][1],l=Math.sqrt((o-i)*(o-i)+(a-r)*(a-r)),c=(a-r)/l,h=(o-i)/l,u=l/t;if(u>1){for(let e=1;e<=u-1;e++){const s=e*t,o=h*s+i,a=c*s+r;n.push([o,a])}const e=(l+Math.floor(u-1)*t)/2,s=h*e+i,o=c*e+r;n.push([s,o])}n.push([o,a])}}return function(e){return"polygon"===e.type}(e)?new s.x({rings:i,spatialReference:e.spatialReference}):new s.v({paths:i,spatialReference:e.spatialReference})}(e,1e6);e=(0,s.au)(t,!0)}return n&&(e=o(e,n)),e}function m(e,t,n){if(Array.isArray(e)){const s=e[0];if(s>t){const n=r(s,t);e[0]=s+n*(-2*t)}else if(s<n){const t=r(s,n);e[0]=s+t*(-2*n)}}else{const s=e.x;if(s>t){const n=r(s,t);e=e.clone().offset(n*(-2*t),0)}else if(s<n){const t=r(s,n);e=e.clone().offset(t*(-2*n),0)}}return e}function p(e,t){let n=-1;for(let s=0;s<t.cutIndexes.length;s++){const i=t.cutIndexes[s],o=t.geometries[s],l=a(o);for(let e=0;e<l.length;e++){const t=l[e];t.some((n=>{if(n[0]<180)return!0;{let n=0;for(let e=0;e<t.length;e++){const s=t[e][0];n=s>n?s:n}n=Number(n.toFixed(9));const s=-360*r(n,180);for(let n=0;n<t.length;n++){const t=o.getPoint(e,n);o.setPoint(e,n,t.clone().offset(s,0))}return!0}}))}if(i===n){if(u(e))for(const t of a(o))e[i]=e[i].addRing(t);else if(d(e))for(const t of a(o))e[i]=e[i].addPath(t)}else n=i,e[i]=o}return e}async function g(e,t,n){if(!Array.isArray(e))return g([e],t);const a=t?t.url:s.aw.geometryServiceUrl;let c,h,u,d,y,_,x,B,S=0;const I=[],b=[];for(const t of e)if((0,s.t)(t))b.push(t);else if(c||(c=t.spatialReference,h=(0,s.av)(c),u=c.isWebMercator,_=u?102100:4326,d=i[_].maxX,y=i[_].minX,x=i[_].plus180Line,B=i[_].minus180Line),h)if("mesh"===t.type)b.push(t);else if("point"===t.type)b.push(m(t.clone(),d,y));else if("multipoint"===t.type){const e=t.clone();e.points=e.points.map((e=>m(e,d,y))),b.push(e)}else if("extent"===t.type){const e=t.clone()._normalize(!1,!1,h);b.push(e.rings?new s.x(e):e)}else if(t.extent){const e=t.extent,n=r(e.xmin,y)*(2*d);let s=0===n?t.clone():o(t.clone(),n);e.offset(n,0),e.intersects(x)&&e.xmax!==d?(S=e.xmax>S?e.xmax:S,s=f(s,u),I.push(s),b.push("cut")):e.intersects(B)&&e.xmin!==y?(S=e.xmax*(2*d)>S?e.xmax*(2*d):S,s=f(s,u,360),I.push(s),b.push("cut")):b.push(s)}else b.push(t.clone());else b.push(t);let M=r(S,d),w=-90;const U=M,X=new s.v;for(;M>0;){const e=360*M-180;X.addPath([[e,w],[e,-1*w]]),w*=-1,M--}if(I.length>0&&U>0){const t=p(I,await async function(e,t,n,i){const r="string"==typeof e?(0,s.j)(e):e,o=t[0].spatialReference,a={...i,query:{...r.query,f:"json",sr:JSON.stringify(o),target:JSON.stringify({geometryType:(0,s.ar)(t[0]),geometries:t}),cutter:JSON.stringify(n)}},l=await(0,s.U)(r.path+"/cut",a),{cutIndexes:c,geometries:h=[]}=l.data;return{cutIndexes:c,geometries:h.map((e=>{const t=(0,s.J)(e);return t.spatialReference=o,t}))}}(a,I,X,n)),i=[],r=[];for(let n=0;n<b.length;n++){const o=b[n];if("cut"!==o)r.push(o);else{const o=t.shift(),a=e[n];(0,s.H)(a)&&"polygon"===a.type&&a.rings&&a.rings.length>1&&o.rings.length>=a.rings.length?(i.push(o),r.push("simplify")):r.push(u?(0,s.at)(o):o)}}if(!i.length)return r;const o=await l(a,i,n),c=[];for(let e=0;e<r.length;e++){const t=r[e];"simplify"!==t?c.push(t):c.push(u?(0,s.at)(o.shift()):o.shift())}return c}const v=[];for(let e=0;e<b.length;e++){const t=b[e];if("cut"!==t)v.push(t);else{const e=I.shift();v.push(!0===u?(0,s.at)(e):e)}}return Promise.resolve(v)}},3683:(e,t,n)=>{n.d(t,{c:()=>l,d:()=>h,h:()=>f,u:()=>o,y:()=>m});var s=n(47817);class i{constructor(){this.code=null,this.description=null}}class r{constructor(e){this.error=new i,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e}}function o(e){return new r(e)}class a{constructor(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e}}function l(e){return new a(e)}const c=new Set;function h(e,t,n,i,r=!1,a){c.clear();for(const t in i){const l=e.get(t);if(!l)continue;const h=i[t],d=u(l,h);if(d!==h&&a&&a.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:l,originalValue:h,sanitizedValue:d}}),c.add(l.name),l&&(r||l.editable)){const e=(0,s.cN)(l,d);if(e)return o((0,s.cO)(e,l,d));n[l.name]=d}}for(const e of t)if(!c.has(e.name))return o(`missing required field "${e.name}"`);return null}function u(e,t){let n=t;return"string"==typeof t&&(0,s.cK)(e)?n=parseFloat(t):null!=t&&(0,s.cL)(e)&&"string"!=typeof t&&(n=String(t)),(0,s.cM)(n)}let d;function f(e,t){if(!e||!(0,s.bd)(t))return e;if("rings"in e||"paths"in e){if(!d)throw new TypeError("geometry engine not loaded");return d.simplify(t,e)}return e}async function m(e,t){!(0,s.bd)(e)||"esriGeometryPolygon"!==t&&"esriGeometryPolyline"!==t||await async function(){return d||(d=await Promise.all([n.e(7972),n.e(30403)]).then(n.bind(n,30403)),d)}()}},69764:(e,t,n)=>{n.d(t,{E:()=>a,G:()=>v,I:()=>b,K:()=>w,L:()=>Y,Q:()=>E,R:()=>M,T:()=>U,V:()=>R,Y:()=>X,a:()=>r,b:()=>l,c:()=>o,l:()=>h,u:()=>c}),n(58574);var s=n(47817);function i(e){return new s.O({wkt:`GEOCCS["Spherical geocentric",\n    DATUM["Not specified",\n      SPHEROID["Sphere",${e.radius},0]],\n    PRIMEM["Greenwich",0.0,\n      AUTHORITY["EPSG","8901"]],\n    UNIT["m",1.0],\n    AXIS["Geocentric X",OTHER],\n    AXIS["Geocentric Y",EAST],\n    AXIS["Geocentric Z",NORTH]\n  ]`})}const r=i(s.aW),o=i(s.aU),a=i(s.aV),l=new s.O({wkt:`GEOCCS["WGS 84",\n  DATUM["WGS_1984",\n    SPHEROID["WGS 84",${s.aW.radius},298.257223563,\n      AUTHORITY["EPSG","7030"]],\n    AUTHORITY["EPSG","6326"]],\n  PRIMEM["Greenwich",0,\n    AUTHORITY["EPSG","8901"]],\n  UNIT["m",1.0,\n    AUTHORITY["EPSG","9001"]],\n  AXIS["Geocentric X",OTHER],\n  AXIS["Geocentric Y",OTHER],\n  AXIS["Geocentric Z",NORTH],\n  AUTHORITY["EPSG","4978"]\n]`});function c(e){return(0,s.aZ)(e)?s.aU:(0,s.a_)(e)?s.aV:s.aW}const h=39.37,u=s.aW.radius*Math.PI/200,d=/UNIT\[([^\]]+)\]\]$/i,f=s.a$,m=/UNIT\[([^\]]+)\]/i,p=new Set([4261,4305,4807,4810,4811,4812,4816,4819,4821,4901,4902,37225,104139,104140]),g=(0,s.aL)()({meter:"meters",foot:"feet",foot_us:"us-feet",foot_clarke:"clarke-feet",yard_clarke:"clarke-yards",link_clarke:"clarke-links",yard_sears:"sears-yards",foot_sears:"sears-feet",chain_sears:"sears-chains",chain_benoit_1895_b:"benoit-1895-b-chains",yard_indian:"indian-yards",yard_indian_1937:"indian-1937-yards",foot_gold_coast:"gold-coast-feet",chain_sears_1922_truncated:"sears-1922-truncated-chains","50_kilometers":"50-kilometers","150_kilometers":"150-kilometers"}),y=e=>e*e,_=e=>e*e*e,x={length:{baseUnit:"meters",units:{millimeters:{inBaseUnits:.001},centimeters:{inBaseUnits:.01},decimeters:{inBaseUnits:.1},meters:{inBaseUnits:1},kilometers:{inBaseUnits:1e3},inches:{inBaseUnits:.0254},feet:{inBaseUnits:.3048},yards:{inBaseUnits:.9144},miles:{inBaseUnits:1609.344},"nautical-miles":{inBaseUnits:1852},"us-feet":{inBaseUnits:1200/3937}}},area:{baseUnit:"square-meters",units:{"square-millimeters":{inBaseUnits:y(.001)},"square-centimeters":{inBaseUnits:y(.01)},"square-decimeters":{inBaseUnits:y(.1)},"square-meters":{inBaseUnits:1},"square-kilometers":{inBaseUnits:y(1e3)},"square-inches":{inBaseUnits:y(.0254)},"square-feet":{inBaseUnits:y(.3048)},"square-yards":{inBaseUnits:y(.9144)},"square-miles":{inBaseUnits:y(1609.344)},"square-us-feet":{inBaseUnits:y(1200/3937)},acres:{inBaseUnits:.0015625*y(1609.344)},ares:{inBaseUnits:100},hectares:{inBaseUnits:1e4}}},volume:{baseUnit:"liters",units:{liters:{inBaseUnits:1},"cubic-millimeters":{inBaseUnits:1e3*_(.001)},"cubic-centimeters":{inBaseUnits:1e3*_(.01)},"cubic-decimeters":{inBaseUnits:1e3*_(.1)},"cubic-meters":{inBaseUnits:1e3},"cubic-kilometers":{inBaseUnits:1e3*_(1e3)},"cubic-inches":{inBaseUnits:1e3*_(.0254)},"cubic-feet":{inBaseUnits:1e3*_(.3048)},"cubic-yards":{inBaseUnits:1e3*_(.9144)},"cubic-miles":{inBaseUnits:1e3*_(1609.344)}}},angle:{baseUnit:"radians",units:{radians:{inBaseUnits:1},degrees:{inBaseUnits:Math.PI/180}}}},B=function(){const e={};for(const t in x)for(const n in x[t].units)e[n]=t;return e}();function S(e){const t=B[e];if(t)return t;throw new Error("unknown measure")}function I(e,t=null){return t=t||S(e),x[t].baseUnit===e}function b(e,t,n){if(t===n)return e;const s=S(t);if(s!==S(n))throw new Error("incompatible units");const i=I(t,s)?e:function(e,t,n){return e*x[n].units[t].inBaseUnits}(e,t,s);return I(n,s)?i:function(e,t,n){return e/x[n].units[t].inBaseUnits}(i,n,s)}function M(e,t,n){return b(e,t,"meters")/(n*Math.PI/180)}function w(e){return g.fromJSON(e.toLowerCase())||null}function U(e){if(e&&"object"==typeof e&&!(0,s.b0)(e))return 1;const t=v(e);return t>1e5?1:t}function X(e){return v(e)>=(e instanceof s.O?(t=e,t&&((0,s.aX)(t)||t===o)?s.aU:t&&((0,s.aY)(t)||t===a)?s.aV:s.aW).metersPerDegree:1e5)?"meters":Y(e);var t}function v(e,t=s.aW.metersPerDegree){return function(e,t=!1){let n,i,r=null;if(null!=e&&("object"==typeof e?(n=e.wkid,i=e.wkt):"number"==typeof e?n=e:"string"==typeof e&&(i=e)),n){if((0,s.aZ)(n))return s.aU.metersPerDegree;if((0,s.a_)(n))return s.aV.metersPerDegree;r=f.values[f[n]],!r&&t&&p.has(n)&&(r=u)}else if(i)if(-1!==i.search(/^PROJCS/i)){const e=d.exec(i);e&&e[1]&&(r=parseFloat(e[1].split(",")[1]))}else if(-1!==i.search(/^GEOCCS/i)){const e=m.exec(i);e&&e[1]&&(r=parseFloat(e[1].split(",")[1]))}return r}(e,!0)||t}function Y(e){let t,n,s=null;if(null!=e&&("object"==typeof e?(t=e.wkid,n=e.wkt):"number"==typeof e?t=e:"string"==typeof e&&(n=e)),t)s=f.units[f[t]];else if(n&&-1!==n.search(/^PROJCS/i)){let e=d.exec(n);e&&e[1]&&(e=/[\\"\\']{1}([^\\"\\']+)/.exec(e[1]),s=e&&e[1])}return s?w(s):null}const q={esriAcres:"acres",esriAres:"ares",esriHectares:"hectares",esriSquareCentimeters:"square-centimeters",esriSquareDecimeters:"square-decimeters",esriSquareFeet:"square-feet",esriSquareInches:"square-inches",esriSquareKilometers:"square-kilometers",esriSquareMeters:"square-meters",esriSquareMiles:"square-miles",esriSquareMillimeters:"square-millimeters",esriSquareUsFeet:"square-us-feet",esriSquareYards:"square-yards"},O={esriCentimeters:"centimeters",esriDecimeters:"decimeters",esriFeet:"feet",esriInches:"inches",esriKilometers:"kilometers",esriMeters:"meters",esriMiles:"miles",esriMillimeters:"millimeters",esriNauticalMiles:"nautical-miles",esriYards:"yards"},E=(0,s.aL)()(q),R=(0,s.aL)()(O);(0,s.aL)()({...q,...O})}}]);