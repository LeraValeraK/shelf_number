var CosmosGL=(()=>{var TS=Object.create;var _r=Object.defineProperty;var _S=Object.getOwnPropertyDescriptor;var PS=Object.getOwnPropertyNames;var CS=Object.getPrototypeOf,AS=Object.prototype.hasOwnProperty;var wS=(e,t,i)=>t in e?_r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var E=(e,t,i)=>()=>{if(i)throw i[0];try{return e&&(t=e(e=0)),t}catch(r){throw i=[r],r}};var bt=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(i){throw t=0,i}},Pr=(e,t)=>{for(var i in t)_r(e,i,{get:t[i],enumerable:!0})},zu=(e,t,i,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of PS(t))!AS.call(e,o)&&o!==i&&_r(e,o,{get:()=>t[o],enumerable:!(r=_S(t,o))||r.enumerable});return e};var Uu=(e,t,i)=>(i=e!=null?TS(CS(e)):{},zu(t||!e||!e.__esModule?_r(i,"default",{value:e,enumerable:!0}):i,e)),RS=e=>zu(_r({},"__esModule",{value:!0}),e);var p=(e,t,i)=>wS(e,typeof t!="symbol"?t+"":t,i);function Vr(){let e;if(typeof window<"u"&&window.performance)e=window.performance.now();else if(typeof process<"u"&&process.hrtime){let t=process.hrtime();e=t[0]*1e3+t[1]/1e6}else e=Date.now();return e}var gl=E(()=>{});var xi,xl=E(()=>{gl();xi=class{constructor(t,i){this.sampleSize=1,this.time=0,this.count=0,this.samples=0,this.lastTiming=0,this.lastSampleTime=0,this.lastSampleCount=0,this._count=0,this._time=0,this._samples=0,this._startTime=0,this._timerPending=!1,this.name=t,this.type=i,this.reset()}reset(){return this.time=0,this.count=0,this.samples=0,this.lastTiming=0,this.lastSampleTime=0,this.lastSampleCount=0,this._count=0,this._time=0,this._samples=0,this._startTime=0,this._timerPending=!1,this}setSampleSize(t){return this.sampleSize=t,this}incrementCount(){return this.addCount(1),this}decrementCount(){return this.subtractCount(1),this}addCount(t){return this._count+=t,this._samples++,this._checkSampling(),this}subtractCount(t){return this._count-=t,this._samples++,this._checkSampling(),this}addTime(t){return this._time+=t,this.lastTiming=t,this._samples++,this._checkSampling(),this}timeStart(){return this._startTime=Vr(),this._timerPending=!0,this}timeEnd(){return this._timerPending?(this.addTime(Vr()-this._startTime),this._timerPending=!1,this._checkSampling(),this):this}getSampleAverageCount(){return this.sampleSize>0?this.lastSampleCount/this.sampleSize:0}getSampleAverageTime(){return this.sampleSize>0?this.lastSampleTime/this.sampleSize:0}getSampleHz(){return this.lastSampleTime>0?this.sampleSize/(this.lastSampleTime/1e3):0}getAverageCount(){return this.samples>0?this.count/this.samples:0}getAverageTime(){return this.samples>0?this.time/this.samples:0}getHz(){return this.time>0?this.samples/(this.time/1e3):0}_checkSampling(){this._samples===this.sampleSize&&(this.lastSampleTime=this._time,this.lastSampleCount=this._count,this.count+=this._count,this.time+=this._time,this.samples+=this._samples,this._time=0,this._count=0,this._samples=0)}}});var Xi,kh=E(()=>{xl();Xi=class{constructor(t){this.stats={},this.id=t.id,this.stats={},this._initializeStats(t.stats),Object.seal(this)}get(t,i="count"){return this._getOrCreate({name:t,type:i})}get size(){return Object.keys(this.stats).length}reset(){for(let t of Object.values(this.stats))t.reset();return this}forEach(t){for(let i of Object.values(this.stats))t(i)}getTable(){let t={};return this.forEach(i=>{t[i.name]={time:i.time||0,count:i.count||0,average:i.getAverageTime()||0,hz:i.getHz()||0}}),t}_initializeStats(t=[]){t.forEach(i=>this._getOrCreate(i))}_getOrCreate(t){let{name:i,type:r}=t,o=this.stats[i];return o||(t instanceof xi?o=t:o=new xi(i,r),this.stats[i]=o),o}}});var Nh=E(()=>{kh();xl();gl()});function Oy(e,t){let i=e.stats,r=!1;for(let l of t)i[l]||(e.get(l),r=!0);let o=Object.keys(i).length,n=Bh.get(e);if(!r&&n?.orderedStatNames===t&&n.statCount===o)return;let s={},a=Oh.get(t);a||(a=new Set(t),Oh.set(t,a));for(let l of t)i[l]&&(s[l]=i[l]);for(let[l,c]of Object.entries(i))a.has(l)||(s[l]=c);for(let l of Object.keys(i))delete i[l];Object.assign(i,s),Bh.set(e,{orderedStatNames:t,statCount:o})}var Ny,By,Bh,Oh,Sl,Rn,vl=E(()=>{Nh();Ny="GPU Time and Memory",By=["Adapter","GPU","GPU Type","GPU Backend","Frame Rate","CPU Time","GPU Time","GPU Memory","Buffer Memory","Texture Memory","Referenced Buffer Memory","Referenced Texture Memory","Swap Chain Texture"],Bh=new WeakMap,Oh=new WeakMap,Sl=class{constructor(){p(this,"stats",new Map)}getStats(t){return this.get(t)}get(t){this.stats.has(t)||this.stats.set(t,new Xi({id:t}));let i=this.stats.get(t);return t===Ny&&Oy(i,By),i}},Rn=new Sl});var En,zy,In,Uy,zh,yl=E(()=>{En=globalThis,zy=globalThis.document||{},In=globalThis.process||{},Uy=globalThis.console,zh=globalThis.navigator||{}});function Dn(e){if(typeof window<"u"&&window.process?.type==="renderer"||typeof process<"u"&&process.versions?.electron)return!0;let t=typeof navigator<"u"&&navigator.userAgent,i=e||t;return!!(i&&i.indexOf("Electron")>=0)}var bl=E(()=>{});function ze(){return!(typeof process=="object"&&String(process)==="[object process]"&&!process?.browser)||Dn()}var Tl=E(()=>{bl()});function _l(e){return!e&&!ze()?"Node":Dn(e)?"Electron":(e||zh.userAgent||"").indexOf("Edge")>-1?"Edge":globalThis.chrome?"Chrome":globalThis.safari?"Safari":globalThis.mozInnerScreenX?"Firefox":"Unknown"}var Uh=E(()=>{Tl();bl();yl()});var Pl,Yt=E(()=>{yl();Tl();Uh();Pl="4.1.1"});function ji(e,t){if(!e)throw new Error(t||"Assertion failed")}var Cl=E(()=>{});function Al(e){if(!e)return 0;let t;switch(typeof e){case"number":t=e;break;case"object":t=e.logLevel||e.priority||0;break;default:return 0}return ji(Number.isFinite(t)&&t>=0),t}function Lh(e){let{logLevel:t,message:i}=e;e.logLevel=Al(t);let r=e.args?Array.from(e.args):[];for(;r.length&&r.shift()!==i;);switch(typeof t){case"string":case"function":i!==void 0&&r.unshift(i),e.message=t;break;case"object":Object.assign(e,t);break;default:}typeof e.message=="function"&&(e.message=e.message());let o=typeof e.message;return ji(o==="string"||o==="object"),Object.assign(e,{args:r},e.opts)}var Wh=E(()=>{Cl()});var Si,Mn,Vh=E(()=>{Wh();Si=()=>{},Mn=class{constructor({level:t=0}={}){this.userData={},this._onceCache=new Set,this._level=t}set level(t){this.setLevel(t)}get level(){return this.getLevel()}setLevel(t){return this._level=t,this}getLevel(){return this._level}warn(t,...i){return this._log("warn",0,t,i,{once:!0})}error(t,...i){return this._log("error",0,t,i)}log(t,i,...r){return this._log("log",t,i,r)}info(t,i,...r){return this._log("info",t,i,r)}once(t,i,...r){return this._log("once",t,i,r,{once:!0})}_log(t,i,r,o,n={}){let s=Lh({logLevel:i,message:r,args:this._buildArgs(i,r,o),opts:n});return this._createLogFunction(t,s,n)}_buildArgs(t,i,r){return[t,i,...r]}_createLogFunction(t,i,r){if(!this._shouldLog(i.logLevel))return Si;let o=this._getOnceTag(r.tag??i.tag??i.message);if((r.once||i.once)&&o!==void 0){if(this._onceCache.has(o))return Si;this._onceCache.add(o)}return this._emit(t,i)}_shouldLog(t){return this.getLevel()>=Al(t)}_getOnceTag(t){if(t!==void 0)try{return typeof t=="string"?t:String(t)}catch{return}}}});function Wy(e){try{let t=window[e],i="__storage_test__";return t.setItem(i,i),t.removeItem(i),t}catch{return null}}var Fn,Hh=E(()=>{Fn=class{constructor(t,i,r="sessionStorage"){this.storage=Wy(r),this.id=t,this.config=i,this._loadConfiguration()}getConfiguration(){return this.config}setConfiguration(t){if(Object.assign(this.config,t),this.storage){let i=JSON.stringify(this.config);this.storage.setItem(this.id,i)}}_loadConfiguration(){let t={};if(this.storage){let i=this.storage.getItem(this.id);t=i?JSON.parse(i):{}}return Object.assign(this.config,t),this}}});function $h(e){let t;return e<10?t=`${e.toFixed(2)}ms`:e<100?t=`${e.toFixed(1)}ms`:e<1e3?t=`${e.toFixed(0)}ms`:t=`${(e/1e3).toFixed(2)}s`,t}function Xh(e,t=8){let i=Math.max(t-e.length,0);return`${" ".repeat(i)}${e}`}var jh=E(()=>{});function Yh(e){return typeof e!="string"?e:(e=e.toUpperCase(),kn[e]||kn.WHITE)}function Gh(e,t,i){return!ze&&typeof e=="string"&&(t&&(e=`\x1B[${Yh(t)}m${e}\x1B[39m`),i&&(e=`\x1B[${Yh(i)+Vy}m${e}\x1B[49m`)),e}var kn,Vy,qh=E(()=>{Yt();(function(e){e[e.BLACK=30]="BLACK",e[e.RED=31]="RED",e[e.GREEN=32]="GREEN",e[e.YELLOW=33]="YELLOW",e[e.BLUE=34]="BLUE",e[e.MAGENTA=35]="MAGENTA",e[e.CYAN=36]="CYAN",e[e.WHITE=37]="WHITE",e[e.BRIGHT_BLACK=90]="BRIGHT_BLACK",e[e.BRIGHT_RED=91]="BRIGHT_RED",e[e.BRIGHT_GREEN=92]="BRIGHT_GREEN",e[e.BRIGHT_YELLOW=93]="BRIGHT_YELLOW",e[e.BRIGHT_BLUE=94]="BRIGHT_BLUE",e[e.BRIGHT_MAGENTA=95]="BRIGHT_MAGENTA",e[e.BRIGHT_CYAN=96]="BRIGHT_CYAN",e[e.BRIGHT_WHITE=97]="BRIGHT_WHITE"})(kn||(kn={}));Vy=10});function Kh(e,t=["constructor"]){let i=Object.getPrototypeOf(e),r=Object.getOwnPropertyNames(i),o=e;for(let n of r){let s=o[n];typeof s=="function"&&(t.find(a=>n===a)||(o[n]=s.bind(e)))}}var Zh=E(()=>{});function Yi(){let e;if(ze()&&En.performance)e=En?.performance?.now?.();else if("hrtime"in In){let t=In?.hrtime?.();e=t[0]*1e3+t[1]/1e6}else e=Date.now();return e}var Qh=E(()=>{Yt()});function Hy(e,t,i){if(typeof t=="string"){let r=i.time?Xh($h(i.total)):"";t=i.time?`${e}: ${r}  ${t}`:`${e}: ${t}`,t=Gh(t,i.color,i.background)}return t}function $y(e){for(let t in e)for(let i in e[t])return i||"untitled";return"empty"}var Gi,wl,zt,Rl=E(()=>{Yt();Vh();Hh();jh();qh();Zh();Cl();Qh();Gi={debug:ze()&&console.debug||console.log,log:console.log,info:console.info,warn:console.warn,error:console.error},wl={enabled:!0,level:0},zt=class extends Mn{constructor({id:t}={id:""}){super({level:0}),this.VERSION=Pl,this._startTs=Yi(),this._deltaTs=Yi(),this.userData={},this.LOG_THROTTLE_TIMEOUT=0,this.id=t,this.userData={},this._storage=new Fn(`__probe-${this.id}__`,{[this.id]:wl}),this.timeStamp(`${this.id} started`),Kh(this),Object.seal(this)}isEnabled(){return this._getConfiguration().enabled}getLevel(){return this._getConfiguration().level}getTotal(){return Number((Yi()-this._startTs).toPrecision(10))}getDelta(){return Number((Yi()-this._deltaTs).toPrecision(10))}set priority(t){this.level=t}get priority(){return this.level}getPriority(){return this.level}enable(t=!0){return this._updateConfiguration({enabled:t}),this}setLevel(t){return this._updateConfiguration({level:t}),this}get(t){return this._getConfiguration()[t]}set(t,i){this._updateConfiguration({[t]:i})}settings(){console.table?console.table(this._storage.config):console.log(this._storage.config)}assert(t,i){if(!t)throw new Error(i||"Assertion failed")}warn(t,...i){return this._log("warn",0,t,i,{method:Gi.warn,once:!0})}error(t,...i){return this._log("error",0,t,i,{method:Gi.error})}deprecated(t,i){return this.warn(`\`${t}\` is deprecated and will be removed in a later version. Use \`${i}\` instead`)}removed(t,i){return this.error(`\`${t}\` has been removed. Use \`${i}\` instead`)}probe(t,i,...r){return this._log("log",t,i,r,{method:Gi.log,time:!0,once:!0})}log(t,i,...r){return this._log("log",t,i,r,{method:Gi.debug})}info(t,i,...r){return this._log("info",t,i,r,{method:console.info})}once(t,i,...r){return this._log("once",t,i,r,{method:Gi.debug||Gi.info,once:!0})}table(t,i,r){return i?this._log("table",t,i,r&&[r]||[],{method:console.table||Si,tag:$y(i)}):Si}time(t,i){return this._log("time",t,i,[],{method:console.time?console.time:console.info})}timeEnd(t,i){return this._log("time",t,i,[],{method:console.timeEnd?console.timeEnd:console.info})}timeStamp(t,i){return this._log("time",t,i,[],{method:console.timeStamp||Si})}group(t,i,r={collapsed:!1}){let o=(r.collapsed?console.groupCollapsed:console.group)||console.info;return this._log("group",t,i,[],{method:o})}groupCollapsed(t,i,r={}){return this.group(t,i,Object.assign({},r,{collapsed:!0}))}groupEnd(t){return this._log("groupEnd",t,"",[],{method:console.groupEnd||Si})}withGroup(t,i,r){this.group(t,i)();try{r()}finally{this.groupEnd(t)()}}trace(){console.trace&&console.trace()}_shouldLog(t){return this.isEnabled()&&super._shouldLog(t)}_emit(t,i){let r=i.method;ji(r),i.total=this.getTotal(),i.delta=this.getDelta(),this._deltaTs=Yi();let o=Hy(this.id,i.message,i);return r.bind(console,o,...i.args)}_getConfiguration(){return this._storage.config[this.id]||this._updateConfiguration(wl),this._storage.config[this.id]}_updateConfiguration(t){let i=this._storage.config[this.id]||{...wl};this._storage.setConfiguration({[this.id]:{...i,...t}})}};zt.VERSION=Pl});var Jh=E(()=>{globalThis.probe={}});var AM,ep=E(()=>{Rl();Rl();Jh();AM=new zt({id:"@probe.gl/log"})});var w,Je=E(()=>{ep();w=new zt({id:"luma.gl"})});function _t(e="id"){El[e]=El[e]||1;let t=El[e]++;return`${e}-${t}`}var El,qi=E(()=>{El={}});function Ky(e,t){let i={...t};for(let r in e)e[r]!==void 0&&(i[r]=e[r]);return i}function sp(e,t){let i=e.stats,r=!1;for(let l of t)i[l]||(e.get(l),r=!0);let o=Object.keys(i).length,n=op.get(e);if(!r&&n?.orderedStatNames===t&&n.statCount===o)return;let s={},a=np.get(t);a||(a=new Set(t),np.set(t,a));for(let l of t)i[l]&&(s[l]=i[l]);for(let[l,c]of Object.entries(i))a.has(l)||(s[l]=c);for(let l of Object.keys(i))delete i[l];Object.assign(i,s),op.set(e,{orderedStatNames:t,statCount:o})}function ap(e){return e.type==="webgl"?qy:Gy}function Hr(e){let t=e.userData[Xy];return t?.enabled?t:null}function Gt(){return globalThis.performance?.now?.()??Date.now()}function Zy(e,t){let i=Hr(e);if(!(!i||!i.activeDefaultFramebufferAcquireDepth))switch(i.transientCanvasResourceCreates=(i.transientCanvasResourceCreates||0)+1,t){case"Texture":i.transientCanvasTextureCreates=(i.transientCanvasTextureCreates||0)+1;break;case"TextureView":i.transientCanvasTextureViewCreates=(i.transientCanvasTextureViewCreates||0)+1;break;case"Sampler":i.transientCanvasSamplerCreates=(i.transientCanvasSamplerCreates||0)+1;break;case"Framebuffer":i.transientCanvasFramebufferCreates=(i.transientCanvasFramebufferCreates||0)+1;break;default:break}}function Qy(e){let t=Object.getPrototypeOf(e);for(;t;){let i=Object.getPrototypeOf(t);if(!i||i===Y.prototype)return Jy(t)||e[Symbol.toStringTag]||e.constructor.name;t=i}return e[Symbol.toStringTag]||e.constructor.name}function Jy(e){let t=Object.getOwnPropertyDescriptor(e,Symbol.toStringTag);return typeof t?.get=="function"?t.get.call(e):typeof t?.value=="string"?t.value:null}var Xy,tp,ip,rp,jy,Yy,Gy,qy,op,np,Y,we=E(()=>{qi();Xy="cpu-hotspot-profiler",tp="GPU Resource Counts",ip="Resource Counts",rp="GPU Time and Memory",jy=["Resources","Buffers","Textures","Samplers","TextureViews","Framebuffers","QuerySets","Shaders","RenderPipelines","ComputePipelines","PipelineLayouts","VertexArrays","RenderPasss","ComputePasss","CommandEncoders","CommandBuffers"],Yy=["Resources","Buffers","Textures","Samplers","TextureViews","Framebuffers","QuerySets","Shaders","RenderPipelines","SharedRenderPipelines","ComputePipelines","PipelineLayouts","VertexArrays","RenderPasss","ComputePasss","CommandEncoders","CommandBuffers"],Gy=jy.flatMap(e=>[`${e} Created`,`${e} Active`]),qy=Yy.flatMap(e=>[`${e} Created`,`${e} Active`]),op=new WeakMap,np=new WeakMap,Y=class{constructor(t,i,r){p(this,"id");p(this,"props");p(this,"userData",{});p(this,"_device");p(this,"destroyed",!1);p(this,"allocatedBytes",0);p(this,"allocatedBytesName",null);p(this,"_attachedResources",new Set);if(!t)throw new Error("no device");this._device=t,this.props=Ky(i,r);let o=this.props.id!=="undefined"?this.props.id:_t(this[Symbol.toStringTag]);this.props.id=o,this.id=o,this.userData=this.props.userData||{},this.addStats()}toString(){return`${this[Symbol.toStringTag]||this.constructor.name}:"${this.id}"`}destroy(){this.destroyed||this.destroyResource()}delete(){return this.destroy(),this}getProps(){return this.props}attachResource(t){this._attachedResources.add(t)}detachResource(t){this._attachedResources.delete(t)}destroyAttachedResource(t){this._attachedResources.delete(t)&&t.destroy()}destroyAttachedResources(){for(let t of this._attachedResources)t.destroy();this._attachedResources=new Set}destroyResource(){this.destroyed||(this.destroyAttachedResources(),this.removeStats(),this.destroyed=!0)}removeStats(){let t=Hr(this._device),i=t?Gt():0,r=[this._device.statsManager.getStats(tp),this._device.statsManager.getStats(ip)],o=ap(this._device);for(let s of r)sp(s,o);let n=this.getStatsName();for(let s of r)s.get("Resources Active").decrementCount(),s.get(`${n}s Active`).decrementCount();t&&(t.statsBookkeepingCalls=(t.statsBookkeepingCalls||0)+1,t.statsBookkeepingTimeMs=(t.statsBookkeepingTimeMs||0)+(Gt()-i))}trackAllocatedMemory(t,i=this.getStatsName()){let r=Hr(this._device),o=r?Gt():0,n=this._device.statsManager.getStats(rp);this.allocatedBytes>0&&this.allocatedBytesName&&(n.get("GPU Memory").subtractCount(this.allocatedBytes),n.get(`${this.allocatedBytesName} Memory`).subtractCount(this.allocatedBytes)),n.get("GPU Memory").addCount(t),n.get(`${i} Memory`).addCount(t),r&&(r.statsBookkeepingCalls=(r.statsBookkeepingCalls||0)+1,r.statsBookkeepingTimeMs=(r.statsBookkeepingTimeMs||0)+(Gt()-o)),this.allocatedBytes=t,this.allocatedBytesName=i}trackReferencedMemory(t,i=this.getStatsName()){this.trackAllocatedMemory(t,`Referenced ${i}`)}trackDeallocatedMemory(t=this.getStatsName()){if(this.allocatedBytes===0){this.allocatedBytesName=null;return}let i=Hr(this._device),r=i?Gt():0,o=this._device.statsManager.getStats(rp);o.get("GPU Memory").subtractCount(this.allocatedBytes),o.get(`${this.allocatedBytesName||t} Memory`).subtractCount(this.allocatedBytes),i&&(i.statsBookkeepingCalls=(i.statsBookkeepingCalls||0)+1,i.statsBookkeepingTimeMs=(i.statsBookkeepingTimeMs||0)+(Gt()-r)),this.allocatedBytes=0,this.allocatedBytesName=null}trackDeallocatedReferencedMemory(t=this.getStatsName()){this.trackDeallocatedMemory(`Referenced ${t}`)}addStats(){let t=this.getStatsName(),i=Hr(this._device),r=i?Gt():0,o=[this._device.statsManager.getStats(tp),this._device.statsManager.getStats(ip)],n=ap(this._device);for(let s of o)sp(s,n);for(let s of o)s.get("Resources Created").incrementCount(),s.get("Resources Active").incrementCount(),s.get(`${t}s Created`).incrementCount(),s.get(`${t}s Active`).incrementCount();i&&(i.statsBookkeepingCalls=(i.statsBookkeepingCalls||0)+1,i.statsBookkeepingTimeMs=(i.statsBookkeepingTimeMs||0)+(Gt()-r)),Zy(this._device,t)}getStatsName(){return Qy(this)}};p(Y,"defaultProps",{id:"undefined",handle:void 0,userData:void 0})});var Re,U,Nn=E(()=>{we();Re=class Re extends Y{constructor(i,r){let o={...r};(r.usage||0)&Re.INDEX&&!r.indexType&&(r.data instanceof Uint32Array?o.indexType="uint32":r.data instanceof Uint16Array?o.indexType="uint16":r.data instanceof Uint8Array&&(o.indexType="uint8")),delete o.data;super(i,o,Re.defaultProps);p(this,"usage");p(this,"indexType");p(this,"updateTimestamp");p(this,"debugData",new ArrayBuffer(0));this.usage=o.usage||0,this.indexType=o.indexType,this.updateTimestamp=i.incrementTimestamp()}get[Symbol.toStringTag](){return"Buffer"}clone(i){return this.device.createBuffer({...this.props,...i})}_setDebugData(i,r,o){let n=null,s;ArrayBuffer.isView(i)?(n=i,s=i.buffer):s=i;let a=Math.min(i?i.byteLength:o,Re.DEBUG_DATA_MAX_LENGTH);if(s===null)this.debugData=new ArrayBuffer(a);else{let l=Math.min(n?.byteOffset||0,s.byteLength),c=Math.max(0,s.byteLength-l),d=Math.min(a,c);this.debugData=new Uint8Array(s,l,d).slice().buffer}}};p(Re,"INDEX",16),p(Re,"VERTEX",32),p(Re,"UNIFORM",64),p(Re,"STORAGE",128),p(Re,"INDIRECT",256),p(Re,"QUERY_RESOLVE",512),p(Re,"MAP_READ",1),p(Re,"MAP_WRITE",2),p(Re,"COPY_SRC",4),p(Re,"COPY_DST",8),p(Re,"DEBUG_DATA_MAX_LENGTH",32),p(Re,"defaultProps",{...Y.defaultProps,usage:0,byteLength:0,byteOffset:0,data:null,indexType:"uint16",onMapped:void 0});U=Re});var Dl,et,Il,Bn=E(()=>{Dl=class{getDataTypeInfo(t){let[i,r,o]=Il[t],n=t.includes("norm"),s=!n&&!t.startsWith("float"),a=t.startsWith("s");return{signedType:i,primitiveType:r,byteLength:o,normalized:n,integer:s,signed:a}}getNormalizedDataType(t){let i=t;switch(i){case"uint8":return"unorm8";case"sint8":return"snorm8";case"uint16":return"unorm16";case"sint16":return"snorm16";default:return i}}alignTo(t,i){switch(i){case 1:return t;case 2:return t+t%2;default:return t+(4-t%4)%4}}getDataType(t){let i=ArrayBuffer.isView(t)?t.constructor:t;if(i===Uint8ClampedArray)return"uint8";let r=Object.values(Il).find(o=>i===o[4]);if(!r)throw new Error(i.name);return r[0]}getTypedArrayConstructor(t){let[,,,,i]=Il[t];return i}},et=new Dl,Il={uint8:["uint8","u32",1,!1,Uint8Array],sint8:["sint8","i32",1,!1,Int8Array],unorm8:["uint8","f32",1,!0,Uint8Array],snorm8:["sint8","f32",1,!0,Int8Array],uint16:["uint16","u32",2,!1,Uint16Array],sint16:["sint16","i32",2,!1,Int16Array],unorm16:["uint16","u32",2,!0,Uint16Array],snorm16:["sint16","i32",2,!0,Int16Array],float16:["float16","f16",2,!1,Uint16Array],float32:["float32","f32",4,!1,Float32Array],uint32:["uint32","u32",4,!1,Uint32Array],sint32:["sint32","i32",4,!1,Int32Array]}});var Ml,Ut,On=E(()=>{Bn();Ml=class{getVertexFormatInfo(t){let i;t.endsWith("-webgl")&&(t.replace("-webgl",""),i=!0);let[r,o]=t.split("x"),n=r,s=o?parseInt(o):1,a=et.getDataTypeInfo(n),l={type:n,components:s,byteLength:a.byteLength*s,integer:a.integer,signed:a.signed,normalized:a.normalized};return i&&(l.webglOnly=!0),l}makeVertexFormat(t,i,r){let o=r?et.getNormalizedDataType(t):t;switch(o){case"unorm8":return i===1?"unorm8":i===3?"unorm8x3-webgl":`${o}x${i}`;case"snorm8":return i===1?"snorm8":i===3?"snorm8x3-webgl":`${o}x${i}`;case"uint8":case"sint8":if(i===1||i===3)throw new Error(`size: ${i}`);return`${o}x${i}`;case"uint16":return i===1?"uint16":i===3?"uint16x3-webgl":`${o}x${i}`;case"sint16":return i===1?"sint16":i===3?"sint16x3-webgl":`${o}x${i}`;case"unorm16":return i===1?"unorm16":i===3?"unorm16x3-webgl":`${o}x${i}`;case"snorm16":return i===1?"snorm16":i===3?"snorm16x3-webgl":`${o}x${i}`;case"float16":if(i===1||i===3)throw new Error(`size: ${i}`);return`${o}x${i}`;default:return i===1?o:`${o}x${i}`}}getVertexFormatFromAttribute(t,i,r){if(!i||i>4)throw new Error(`size ${i}`);let o=i,n=et.getDataType(t);return this.makeVertexFormat(n,o,r)}getCompatibleVertexFormat(t){let i;switch(t.primitiveType){case"f32":i="float32";break;case"i32":i="sint32";break;case"u32":i="uint32";break;case"f16":return t.components<=2?"float16x2":"float16x4"}return t.components===1?i:`${i}x${t.components}`}},Ut=new Ml});function zl(e){let t=dp[e];if(!t)throw new Error(`Unsupported texture format ${e}`);return t}function cp(){return dp}var Fe,se,Pt,eb,zn,Fl,Un,kl,tb,Nl,qt,Bl,Ol,Ln,lp,ib,rb,dp,Ul=E(()=>{Fe="texture-compression-bc",se="texture-compression-astc",Pt="texture-compression-etc2",eb="texture-compression-etc1-webgl",zn="texture-compression-pvrtc-webgl",Fl="texture-compression-atc-webgl",Un="float32-renderable-webgl",kl="float16-renderable-webgl",tb="rgb9e5ufloat-renderable-webgl",Nl="snorm8-renderable-webgl",qt="norm16-webgl",Bl="norm16-renderable-webgl",Ol="snorm16-renderable-webgl",Ln="float32-filterable",lp="float16-filterable-webgl";ib={r8unorm:{},rg8unorm:{},"rgb8unorm-webgl":{},rgba8unorm:{},"rgba8unorm-srgb":{},r8snorm:{render:Nl},rg8snorm:{render:Nl},"rgb8snorm-webgl":{},rgba8snorm:{render:Nl},r8uint:{},rg8uint:{},rgba8uint:{},r8sint:{},rg8sint:{},rgba8sint:{},bgra8unorm:{},"bgra8unorm-srgb":{},r16unorm:{f:qt,render:Bl},rg16unorm:{f:qt,render:Bl},"rgb16unorm-webgl":{f:qt,render:!1},rgba16unorm:{f:qt,render:Bl},r16snorm:{f:qt,render:Ol},rg16snorm:{f:qt,render:Ol},"rgb16snorm-webgl":{f:qt,render:!1},rgba16snorm:{f:qt,render:Ol},r16uint:{},rg16uint:{},rgba16uint:{},r16sint:{},rg16sint:{},rgba16sint:{},r16float:{render:kl,filter:"float16-filterable-webgl"},rg16float:{render:kl,filter:lp},rgba16float:{render:kl,filter:lp},r32uint:{},rg32uint:{},rgba32uint:{},r32sint:{},rg32sint:{},rgba32sint:{},r32float:{render:Un,filter:Ln},rg32float:{render:!1,filter:Ln},"rgb32float-webgl":{render:Un,filter:Ln},rgba32float:{render:Un,filter:Ln},"rgba4unorm-webgl":{channels:"rgba",bitsPerChannel:[4,4,4,4],packed:!0},"rgb565unorm-webgl":{channels:"rgb",bitsPerChannel:[5,6,5,0],packed:!0},"rgb5a1unorm-webgl":{channels:"rgba",bitsPerChannel:[5,5,5,1],packed:!0},rgb9e5ufloat:{channels:"rgb",packed:!0,render:tb},rg11b10ufloat:{channels:"rgb",bitsPerChannel:[11,11,10,0],packed:!0,p:1,render:Un},rgb10a2unorm:{channels:"rgba",bitsPerChannel:[10,10,10,2],packed:!0,p:1},rgb10a2uint:{channels:"rgba",bitsPerChannel:[10,10,10,2],packed:!0,p:1},stencil8:{attachment:"stencil",bitsPerChannel:[8,0,0,0],dataType:"uint8"},depth16unorm:{attachment:"depth",bitsPerChannel:[16,0,0,0],dataType:"uint16"},depth24plus:{attachment:"depth",bitsPerChannel:[24,0,0,0],dataType:"uint32"},depth32float:{attachment:"depth",bitsPerChannel:[32,0,0,0],dataType:"float32"},"depth24plus-stencil8":{attachment:"depth-stencil",bitsPerChannel:[24,8,0,0],packed:!0},"depth32float-stencil8":{attachment:"depth-stencil",bitsPerChannel:[32,8,0,0],packed:!0}},rb={"bc1-rgb-unorm-webgl":{f:Fe},"bc1-rgb-unorm-srgb-webgl":{f:Fe},"bc1-rgba-unorm":{f:Fe},"bc1-rgba-unorm-srgb":{f:Fe},"bc2-rgba-unorm":{f:Fe},"bc2-rgba-unorm-srgb":{f:Fe},"bc3-rgba-unorm":{f:Fe},"bc3-rgba-unorm-srgb":{f:Fe},"bc4-r-unorm":{f:Fe},"bc4-r-snorm":{f:Fe},"bc5-rg-unorm":{f:Fe},"bc5-rg-snorm":{f:Fe},"bc6h-rgb-ufloat":{f:Fe},"bc6h-rgb-float":{f:Fe},"bc7-rgba-unorm":{f:Fe},"bc7-rgba-unorm-srgb":{f:Fe},"etc2-rgb8unorm":{f:Pt},"etc2-rgb8unorm-srgb":{f:Pt},"etc2-rgb8a1unorm":{f:Pt},"etc2-rgb8a1unorm-srgb":{f:Pt},"etc2-rgba8unorm":{f:Pt},"etc2-rgba8unorm-srgb":{f:Pt},"eac-r11unorm":{f:Pt},"eac-r11snorm":{f:Pt},"eac-rg11unorm":{f:Pt},"eac-rg11snorm":{f:Pt},"astc-4x4-unorm":{f:se},"astc-4x4-unorm-srgb":{f:se},"astc-5x4-unorm":{f:se},"astc-5x4-unorm-srgb":{f:se},"astc-5x5-unorm":{f:se},"astc-5x5-unorm-srgb":{f:se},"astc-6x5-unorm":{f:se},"astc-6x5-unorm-srgb":{f:se},"astc-6x6-unorm":{f:se},"astc-6x6-unorm-srgb":{f:se},"astc-8x5-unorm":{f:se},"astc-8x5-unorm-srgb":{f:se},"astc-8x6-unorm":{f:se},"astc-8x6-unorm-srgb":{f:se},"astc-8x8-unorm":{f:se},"astc-8x8-unorm-srgb":{f:se},"astc-10x5-unorm":{f:se},"astc-10x5-unorm-srgb":{f:se},"astc-10x6-unorm":{f:se},"astc-10x6-unorm-srgb":{f:se},"astc-10x8-unorm":{f:se},"astc-10x8-unorm-srgb":{f:se},"astc-10x10-unorm":{f:se},"astc-10x10-unorm-srgb":{f:se},"astc-12x10-unorm":{f:se},"astc-12x10-unorm-srgb":{f:se},"astc-12x12-unorm":{f:se},"astc-12x12-unorm-srgb":{f:se},"pvrtc-rgb4unorm-webgl":{f:zn},"pvrtc-rgba4unorm-webgl":{f:zn},"pvrtc-rgb2unorm-webgl":{f:zn},"pvrtc-rgba2unorm-webgl":{f:zn},"etc1-rbg-unorm-webgl":{f:eb},"atc-rgb-unorm-webgl":{f:Fl},"atc-rgba-unorm-webgl":{f:Fl},"atc-rgbai-unorm-webgl":{f:Fl}},dp={...ib,...rb}});function lb({format:e,width:t,height:i,depth:r,byteAlignment:o}){let n=Ee.getInfo(e),{bytesPerPixel:s,bytesPerBlock:a=s,blockWidth:l=1,blockHeight:c=1,compressed:d=!1}=n,u=d?Math.ceil(t/l):t,f=d?Math.ceil(i/c):i,h=u*a,m=Math.ceil(h/o)*o,x=f,S=m*x*r;return{bytesPerPixel:s,bytesPerRow:m,rowsPerImage:x,depthOrArrayLayers:r,bytesPerImage:m*x,byteLength:S}}function cb(e){let t=zl(e),i={format:e,create:t.f??!0,render:t.render??!0,filter:t.filter??!0,blend:t.blend??!0,store:t.store??!0},r=up(e),o=e.startsWith("depth")||e.startsWith("stencil"),n=r?.signed,s=r?.integer,a=r?.webgl,l=!!r?.compressed;return i.render&&(i.render=!o&&!l),i.filter&&(i.filter=!o&&!n&&!s&&!a),i}function up(e){let t=db(e);if(Ee.isCompressed(e)){t.channels="rgb",t.components=3,t.bytesPerPixel=1,t.srgb=!1,t.compressed=!0,t.bytesPerBlock=fb(e);let r=ub(e);r&&(t.blockWidth=r.blockWidth,t.blockHeight=r.blockHeight)}let i=t.packed?null:ob.exec(e);if(i){let[,r,o,n,s,a]=i,l=`${n}${o}`,c=et.getDataTypeInfo(l),d=c.byteLength*8,u=r?.length??1,f=[d,u>=2?d:0,u>=3?d:0,u>=4?d:0];t={format:e,attachment:t.attachment,dataType:c.signedType,components:u,channels:r,integer:c.integer,signed:c.signed,normalized:c.normalized,bitsPerChannel:f,bytesPerPixel:c.byteLength*u,packed:t.packed,srgb:t.srgb},a==="-webgl"&&(t.webgl=!0),s==="-srgb"&&(t.srgb=!0)}return e.endsWith("-webgl")&&(t.webgl=!0),e.endsWith("-srgb")&&(t.srgb=!0),t}function db(e){let t=zl(e),i=t.bytesPerPixel||1,r=t.bitsPerChannel||[8,8,8,8];return delete t.bitsPerChannel,delete t.bytesPerPixel,delete t.f,delete t.render,delete t.filter,delete t.blend,delete t.store,{...t,format:e,attachment:t.attachment||"color",channels:t.channels||"r",components:t.components||t.channels?.length||1,bytesPerPixel:i,bitsPerChannel:r,dataType:t.dataType||"uint8",srgb:t.srgb??!1,packed:t.packed??!1,webgl:t.webgl??!1,integer:t.integer??!1,signed:t.signed??!1,normalized:t.normalized??!1,compressed:t.compressed??!1}}function ub(e){let i=/.*-(\d+)x(\d+)-.*/.exec(e);if(i){let[,r,o]=i;return{blockWidth:Number(r),blockHeight:Number(o)}}return e.startsWith("bc")||e.startsWith("etc1")||e.startsWith("etc2")||e.startsWith("eac")||e.startsWith("atc")?{blockWidth:4,blockHeight:4}:e.startsWith("pvrtc-rgb4")||e.startsWith("pvrtc-rgba4")?{blockWidth:4,blockHeight:4}:e.startsWith("pvrtc-rgb2")||e.startsWith("pvrtc-rgba2")?{blockWidth:8,blockHeight:4}:null}function fb(e){return e.startsWith("bc1")||e.startsWith("bc4")||e.startsWith("etc1")||e.startsWith("etc2-rgb8")||e.startsWith("etc2-rgb8a1")||e.startsWith("eac-r11")||e==="atc-rgb-unorm-webgl"?8:e.startsWith("bc2")||e.startsWith("bc3")||e.startsWith("bc5")||e.startsWith("bc6h")||e.startsWith("bc7")||e.startsWith("etc2-rgba8")||e.startsWith("eac-rg11")||e.startsWith("astc")||e==="atc-rgba-unorm-webgl"||e==="atc-rgbai-unorm-webgl"?16:e.startsWith("pvrtc")?8:16}var ob,nb,sb,ab,Ll,Ee,Wn=E(()=>{Bn();Ul();ob=/^(r|rg|rgb|rgba|bgra)([0-9]*)([a-z]*)(-srgb)?(-webgl)?$/,nb=["rgb","rgba","bgra"],sb=["depth","stencil"],ab=["bc1","bc2","bc3","bc4","bc5","bc6","bc7","etc1","etc2","eac","atc","astc","pvrtc"],Ll=class{isColor(t){return nb.some(i=>t.startsWith(i))}isDepthStencil(t){return sb.some(i=>t.startsWith(i))}isCompressed(t){return ab.some(i=>t.startsWith(i))}getInfo(t){return up(t)}getCapabilities(t){return cb(t)}computeMemoryLayout(t){return lb(t)}},Ee=new Ll});function Ki(e){return typeof ImageData<"u"&&e instanceof ImageData||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement||typeof VideoFrame<"u"&&e instanceof VideoFrame||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas}function $r(e){if(typeof ImageData<"u"&&e instanceof ImageData||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas)return{width:e.width,height:e.height};if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement)return{width:e.naturalWidth,height:e.naturalHeight};if(typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement)return{width:e.videoWidth,height:e.videoHeight};if(typeof VideoFrame<"u"&&e instanceof VideoFrame)return{width:e.displayWidth,height:e.displayHeight};throw new Error("Unknown image type")}var Wl=E(()=>{});function hb(e,t){let i=Vl(e),r=t.map(Vl).filter(o=>o!==void 0);return[i,...r].filter(o=>o!==void 0)}function Vl(e){if(e!==void 0){if(e===null||typeof e=="string"||typeof e=="number"||typeof e=="boolean")return e;if(e instanceof Error)return e.message;if(Array.isArray(e))return e.map(Vl);if(typeof e=="object"){if(pb(e)){let t=String(e);if(t!=="[object Object]")return t}return mb(e)?gb(e):e.constructor?.name||"Object"}return String(e)}}function pb(e){return"toString"in e&&typeof e.toString=="function"&&e.toString!==Object.prototype.toString}function mb(e){return"message"in e&&"type"in e}function gb(e){let t=typeof e.type=="string"?e.type:"message",i=typeof e.message=="string"?e.message:"",r=typeof e.lineNum=="number"?e.lineNum:null,o=typeof e.linePos=="number"?e.linePos:null,n=r!==null&&o!==null?` @ ${r}:${o}`:r!==null?` @ ${r}`:"";return`${t}${n}: ${i}`.trim()}function xb(e,t){return e!=null?!!e:t!==void 0?t!=="production":!1}function Sb(){return xb(w.get("debug"),vb())}function vb(){let e=globalThis.process;if(e?.env)return e.env.NODE_ENV}var Xr,jr,Vn,nt,Hl=E(()=>{vl();Je();qi();Nn();On();Wn();Wl();Ul();Xr=class{};jr=class{constructor(t=[],i){p(this,"features");p(this,"disabledFeatures");this.features=new Set(t),this.disabledFeatures=i||{}}*[Symbol.iterator](){yield*this.features}has(t){return!this.disabledFeatures?.[t]&&this.features.has(t)}},Vn=class Vn{constructor(t){p(this,"id");p(this,"props");p(this,"userData",{});p(this,"statsManager",Rn);p(this,"_factories",{});p(this,"timestamp",0);p(this,"_reused",!1);p(this,"_moduleData",{});p(this,"_textureCaps",{});p(this,"_debugGPUTimeQuery",null);this.props={...Vn.defaultProps,...t},this.id=this.props.id||_t(this[Symbol.toStringTag].toLowerCase())}get[Symbol.toStringTag](){return"Device"}toString(){return`Device(${this.id})`}getVertexFormatInfo(t){return Ut.getVertexFormatInfo(t)}isVertexFormatSupported(t){return!0}getTextureFormatInfo(t){return Ee.getInfo(t)}getTextureFormatCapabilities(t){let i=this._textureCaps[t];if(!i){let r=this._getDeviceTextureFormatCapabilities(t);i=this._getDeviceSpecificTextureFormatCapabilities(r),this._textureCaps[t]=i}return i}getMipLevelCount(t,i,r=1){let o=Math.max(t,i,r);return 1+Math.floor(Math.log2(o))}isExternalImage(t){return Ki(t)}getExternalImageSize(t){return $r(t)}isTextureFormatSupported(t){return this.getTextureFormatCapabilities(t).create}isTextureFormatFilterable(t){return this.getTextureFormatCapabilities(t).filter}isTextureFormatRenderable(t){return this.getTextureFormatCapabilities(t).render}isTextureFormatCompressed(t){return Ee.isCompressed(t)}getSupportedCompressedTextureFormats(){let t=[];for(let i of Object.keys(cp()))this.isTextureFormatCompressed(i)&&this.isTextureFormatSupported(i)&&t.push(i);return t}pushDebugGroup(t){this.commandEncoder.pushDebugGroup(t)}popDebugGroup(){this.commandEncoder?.popDebugGroup()}insertDebugMarker(t){this.commandEncoder?.insertDebugMarker(t)}loseDevice(){return!1}incrementTimestamp(){return this.timestamp++}reportError(t,i,...r){if(!this.props.onError(t,i)){let n=hb(i,r);return w.error(this.type==="webgl"?"%cWebGL":"%cWebGPU","color: white; background: red; padding: 2px 6px; border-radius: 3px;",t.message,...n)}return()=>{}}debug(){if(this.props.debug)debugger;else w.once(0,`'Type luma.log.set({debug: true}) in console to enable debug breakpoints',
or create a device with the 'debug: true' prop.`)()}getDefaultCanvasContext(){if(!this.canvasContext)throw new Error("Device has no default CanvasContext. See props.createCanvasContext");return this.canvasContext}createFence(){throw new Error("createFence() not implemented")}beginRenderPass(t){return this.commandEncoder.beginRenderPass(t)}beginComputePass(t){return this.commandEncoder.beginComputePass(t)}generateMipmapsWebGPU(t){throw new Error("not implemented")}_createSharedRenderPipelineWebGL(t){throw new Error("_createSharedRenderPipelineWebGL() not implemented")}_createBindGroupLayoutWebGPU(t,i){throw new Error("_createBindGroupLayoutWebGPU() not implemented")}_createBindGroupWebGPU(t,i,r,o,n){throw new Error("_createBindGroupWebGPU() not implemented")}_supportsDebugGPUTime(){return this.features.has("timestamp-query")&&!!(this.props.debug||this.props.debugGPUTime)}_enableDebugGPUTime(t=256){if(!this._supportsDebugGPUTime())return null;if(this._debugGPUTimeQuery)return this._debugGPUTimeQuery;try{this._debugGPUTimeQuery=this.createQuerySet({type:"timestamp",count:t}),this.commandEncoder=this.createCommandEncoder({id:this.commandEncoder.props.id,timeProfilingQuerySet:this._debugGPUTimeQuery})}catch{this._debugGPUTimeQuery=null}return this._debugGPUTimeQuery}_disableDebugGPUTime(){this._debugGPUTimeQuery&&(this.commandEncoder.getTimeProfilingQuerySet()===this._debugGPUTimeQuery&&(this.commandEncoder=this.createCommandEncoder({id:this.commandEncoder.props.id})),this._debugGPUTimeQuery.destroy(),this._debugGPUTimeQuery=null)}_isDebugGPUTimeEnabled(){return this._debugGPUTimeQuery!==null}getCanvasContext(){return this.getDefaultCanvasContext()}readPixelsToArrayWebGL(t,i){throw new Error("not implemented")}readPixelsToBufferWebGL(t,i){throw new Error("not implemented")}setParametersWebGL(t){throw new Error("not implemented")}getParametersWebGL(t){throw new Error("not implemented")}withParametersWebGL(t,i){throw new Error("not implemented")}clearWebGL(t){throw new Error("not implemented")}resetWebGL(){throw new Error("not implemented")}getModuleData(t){var i;return(i=this._moduleData)[t]||(i[t]={}),this._moduleData[t]}static _getCanvasContextProps(t){return t.createCanvasContext===!0?{}:t.createCanvasContext}_getDeviceTextureFormatCapabilities(t){let i=Ee.getCapabilities(t),r=n=>(typeof n=="string"?this.features.has(n):n)??!0,o=r(i.create);return{format:t,create:o,render:o&&r(i.render),filter:o&&r(i.filter),blend:o&&r(i.blend),store:o&&r(i.store)}}_normalizeBufferProps(t){(t instanceof ArrayBuffer||ArrayBuffer.isView(t))&&(t={data:t});let i={...t};if((t.usage||0)&U.INDEX&&(t.indexType||(t.data instanceof Uint32Array?i.indexType="uint32":t.data instanceof Uint16Array?i.indexType="uint16":t.data instanceof Uint8Array&&(i.data=new Uint16Array(t.data),i.indexType="uint16")),!i.indexType))throw new Error("indices buffer content must be of type uint16 or uint32");return i}};p(Vn,"defaultProps",{id:null,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!1,createCanvasContext:void 0,webgl:{},onError:(t,i)=>{},onResize:(t,i)=>{let[r,o]=t.getDevicePixelSize();w.log(1,`${t} resized => ${r}x${o}px`)()},onPositionChange:(t,i)=>{let[r,o]=t.getPosition();w.log(1,`${t} repositioned => ${r},${o}`)()},onVisibilityChange:t=>w.log(1,`${t} Visibility changed ${t.isVisible}`)(),onDevicePixelRatioChange:(t,i)=>w.log(1,`${t} DPR changed ${i.oldRatio} => ${t.devicePixelRatio}`)(),debug:Sb(),debugGPUTime:!1,debugShaders:w.get("debug-shaders")||void 0,debugFramebuffers:!!w.get("debug-framebuffers"),debugFactories:!!w.get("debug-factories"),debugWebGL:!!w.get("debug-webgl"),debugSpectorJS:void 0,debugSpectorJSUrl:void 0,_reuseDevices:!1,_requestMaxLimits:!0,_cacheShaders:!0,_destroyShaders:!1,_cachePipelines:!0,_sharePipelines:!0,_destroyPipelines:!1,_initializeFeatures:!0,_disabledFeatures:{"compilation-status-async-webgl":!0},_handle:void 0});nt=Vn});var yb,fp,Yr,$l,Xl,hp=E(()=>{Hl();vl();Je();yb="set luma.log.level=1 (or higher) to trace rendering",fp="No matching device found. Ensure `@luma.gl/webgl` and/or `@luma.gl/webgpu` modules are imported.",Yr=class Yr{constructor(){p(this,"stats",Rn);p(this,"log",w);p(this,"VERSION","9.3.6");p(this,"spector");p(this,"preregisteredAdapters",new Map);if(globalThis.luma){if(globalThis.luma.VERSION!==this.VERSION)throw w.error(`Found luma.gl ${globalThis.luma.VERSION} while initialzing ${this.VERSION}`)(),w.error("'yarn why @luma.gl/core' can help identify the source of the conflict")(),new Error("luma.gl - multiple versions detected: see console log");w.error("This version of luma.gl has already been initialized")()}w.log(1,`${this.VERSION} - ${yb}`)(),globalThis.luma=this}async createDevice(t={}){let i={...Yr.defaultProps,...t},r=this.selectAdapter(i.type,i.adapters);if(!r)throw new Error(fp);return i.waitForPageLoad&&await r.pageLoaded,await r.create(i)}async attachDevice(t,i){let r=this._getTypeFromHandle(t,i.adapters),o=r&&this.selectAdapter(r,i.adapters);if(!o)throw new Error(fp);return await o?.attach?.(t,i)}registerAdapters(t){for(let i of t)this.preregisteredAdapters.set(i.type,i)}getSupportedAdapters(t=[]){let i=this._getAdapterMap(t);return Array.from(i).map(([,r])=>r).filter(r=>r.isSupported?.()).map(r=>r.type)}getBestAvailableAdapterType(t=[]){let i=["webgpu","webgl","null"],r=this._getAdapterMap(t);for(let o of i)if(r.get(o)?.isSupported?.())return o;return null}selectAdapter(t,i=[]){let r=t;t==="best-available"&&(r=this.getBestAvailableAdapterType(i));let o=this._getAdapterMap(i);return r&&o.get(r)||null}enforceWebGL2(t=!0,i=[]){let o=this._getAdapterMap(i).get("webgl");o||w.warn("enforceWebGL2: webgl adapter not found")(),o?.enforceWebGL2?.(t)}setDefaultDeviceProps(t){Object.assign(Yr.defaultProps,t)}_getAdapterMap(t=[]){let i=new Map(this.preregisteredAdapters);for(let r of t)i.set(r.type,r);return i}_getTypeFromHandle(t,i=[]){return t instanceof WebGL2RenderingContext?"webgl":typeof GPUDevice<"u"&&t instanceof GPUDevice||t?.queue?"webgpu":t===null?"null":(t instanceof WebGLRenderingContext?w.warn("WebGL1 is not supported",t)():w.warn("Unknown handle type",t)(),null)}};p(Yr,"defaultProps",{...nt.defaultProps,type:"best-available",adapters:void 0,waitForPageLoad:!0});$l=Yr,Xl=new $l});function _b(){return Hn||(Tb()||typeof window>"u"?Hn=Promise.resolve():Hn=new Promise(e=>window.addEventListener("load",()=>e()))),Hn}var Gr,bb,Tb,Hn,pp=E(()=>{Yt();Gr=class{get pageLoaded(){return _b()}},bb=ze()&&typeof document<"u",Tb=()=>bb&&document.readyState==="complete",Hn=null});var $n,mp=E(()=>{$n=class{constructor(t){p(this,"props");p(this,"_resizeObserver");p(this,"_intersectionObserver");p(this,"_observeDevicePixelRatioTimeout",null);p(this,"_observeDevicePixelRatioMediaQuery",null);p(this,"_handleDevicePixelRatioChange",()=>this._refreshDevicePixelRatio());p(this,"_trackPositionInterval",null);p(this,"_started",!1);this.props=t}get started(){return this._started}start(){if(this._started||!this.props.canvas)return;this._started=!0,this._intersectionObserver||(this._intersectionObserver=new IntersectionObserver(i=>this.props.onIntersection(i))),this._resizeObserver||(this._resizeObserver=new ResizeObserver(i=>this.props.onResize(i))),this._intersectionObserver.observe(this.props.canvas);let t=this.props.resizeObserverBox;try{this._resizeObserver.observe(this.props.canvas,{box:t})}catch{this._resizeObserver.observe(this.props.canvas,{box:"content-box"})}this._observeDevicePixelRatioTimeout=setTimeout(()=>this._refreshDevicePixelRatio(),0),this.props.trackPosition&&this._trackPosition()}stop(){this._started&&(this._started=!1,this._observeDevicePixelRatioTimeout&&(clearTimeout(this._observeDevicePixelRatioTimeout),this._observeDevicePixelRatioTimeout=null),this._observeDevicePixelRatioMediaQuery&&(this._observeDevicePixelRatioMediaQuery.removeEventListener("change",this._handleDevicePixelRatioChange),this._observeDevicePixelRatioMediaQuery=null),this._trackPositionInterval&&(clearInterval(this._trackPositionInterval),this._trackPositionInterval=null),this._resizeObserver?.disconnect(),this._intersectionObserver?.disconnect())}_refreshDevicePixelRatio(){this._started&&(this.props.onDevicePixelRatioChange(),this._observeDevicePixelRatioMediaQuery?.removeEventListener("change",this._handleDevicePixelRatioChange),this._observeDevicePixelRatioMediaQuery=matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),this._observeDevicePixelRatioMediaQuery.addEventListener("change",this._handleDevicePixelRatioChange,{once:!0}))}_trackPosition(t=100){this._trackPositionInterval||(this._trackPositionInterval=setInterval(()=>{this._started?this.props.onPositionChange():this._trackPositionInterval&&(clearInterval(this._trackPositionInterval),this._trackPositionInterval=null)},t))}}});function gp(){let e,t;return{promise:new Promise((r,o)=>{e=r,t=o}),resolve:e,reject:t}}var xp=E(()=>{});function jl(e,t){if(!e){let i=new Error(t??"luma.gl assertion failed.");throw Error.captureStackTrace?.(i,jl),i}}function Kt(e,t){return jl(e,t),e}var Yl=E(()=>{});function Pb(e){if(typeof e=="string"){let t=document.getElementById(e);if(!t)throw new Error(`${e} is not an HTML element`);return t}return e||document.body}function Cb(e){let t=document.getElementById(e);if(!Zt.isHTMLCanvas(t))throw new Error("Object is not a canvas element");return t}function Ab(e){let{width:t,height:i}=e,r=document.createElement("canvas");r.id=_t("lumagl-auto-created-canvas"),r.width=t||1,r.height=i||1,r.style.width=Number.isFinite(t)?`${t}px`:"100%",r.style.height=Number.isFinite(i)?`${i}px`:"100%",e?.visible||(r.style.visibility="hidden");let o=Pb(e?.container||null);return o.insertBefore(r,o.firstChild),r}function wb(e,t,i,r,o){let n=e,s=Sp(n[0],t,i),a=vp(n[1],t,r,o),l=Sp(n[0]+1,t,i),c=l===i-1?l:l-1;l=vp(n[1]+1,t,r,o);let d;return o?(l=l===0?l:l+1,d=a,a=l):d=l===r-1?l:l-1,{x:s,y:a,width:Math.max(c-s+1,1),height:Math.max(d-a+1,1)}}function Sp(e,t,i){return Math.min(Math.round(e*t),i-1)}function vp(e,t,i,r){return r?Math.max(0,i-1-Math.round(e*t)):Math.min(Math.round(e*t),i-1)}var Zi,Zt,Gl=E(()=>{Yt();mp();qi();xp();Yl();Zi=class Zi{constructor(t){p(this,"id");p(this,"props");p(this,"canvas");p(this,"htmlCanvas");p(this,"offscreenCanvas");p(this,"type");p(this,"initialized");p(this,"isInitialized",!1);p(this,"isVisible",!0);p(this,"cssWidth");p(this,"cssHeight");p(this,"devicePixelRatio");p(this,"devicePixelWidth");p(this,"devicePixelHeight");p(this,"drawingBufferWidth");p(this,"drawingBufferHeight");p(this,"_initializedResolvers",gp());p(this,"_canvasObserver");p(this,"_position",[0,0]);p(this,"destroyed",!1);p(this,"_needsDrawingBufferResize",!0);this.props={...Zi.defaultProps,...t},t=this.props,this.initialized=this._initializedResolvers.promise,ze()?t.canvas?typeof t.canvas=="string"?this.canvas=Cb(t.canvas):this.canvas=t.canvas:this.canvas=Ab(t):this.canvas={width:t.width||1,height:t.height||1},Zi.isHTMLCanvas(this.canvas)?(this.id=t.id||this.canvas.id,this.type="html-canvas",this.htmlCanvas=this.canvas):Zi.isOffscreenCanvas(this.canvas)?(this.id=t.id||"offscreen-canvas",this.type="offscreen-canvas",this.offscreenCanvas=this.canvas):(this.id=t.id||"node-canvas-context",this.type="node"),this.cssWidth=this.htmlCanvas?.clientWidth||this.canvas.width,this.cssHeight=this.htmlCanvas?.clientHeight||this.canvas.height,this.devicePixelWidth=this.canvas.width,this.devicePixelHeight=this.canvas.height,this.drawingBufferWidth=this.canvas.width,this.drawingBufferHeight=this.canvas.height,this.devicePixelRatio=globalThis.devicePixelRatio||1,this._position=[0,0],this._canvasObserver=new $n({canvas:this.htmlCanvas,trackPosition:this.props.trackPosition,resizeObserverBox:this.props.pixelSizeSource==="css-dpr"?"content-box":"device-pixel-content-box",onResize:i=>this._handleResize(i),onIntersection:i=>this._handleIntersection(i),onDevicePixelRatioChange:()=>this._observeDevicePixelRatio(),onPositionChange:()=>this.updatePosition()})}static isHTMLCanvas(t){return typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement}static isOffscreenCanvas(t){return typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas}toString(){return`${this[Symbol.toStringTag]}(${this.id})`}destroy(){this.destroyed||(this.destroyed=!0,this._stopObservers(),this.device=null)}setProps(t){return"useDevicePixels"in t&&(this.props.useDevicePixels=t.useDevicePixels||!1,this._updateDrawingBufferSize()),this}getCurrentFramebuffer(t){return this._resizeDrawingBufferIfNeeded(),this._getCurrentFramebuffer(t)}getCSSSize(){return[this.cssWidth,this.cssHeight]}getPosition(){return this._position}getDevicePixelSize(){return[this.devicePixelWidth,this.devicePixelHeight]}getDrawingBufferSize(){return[this.drawingBufferWidth,this.drawingBufferHeight]}getMaxDrawingBufferSize(){let t=this.device.limits.maxTextureDimension2D;return[t,t]}setDrawingBufferSize(t,i){t=Math.floor(t),i=Math.floor(i),!(this.drawingBufferWidth===t&&this.drawingBufferHeight===i)&&(this.drawingBufferWidth=t,this.drawingBufferHeight=i,this._needsDrawingBufferResize=!0)}getDevicePixelRatio(){return typeof window<"u"&&window.devicePixelRatio||1}cssToDevicePixels(t,i=!0){let r=this.cssToDeviceRatio(),[o,n]=this.getDrawingBufferSize();return wb(t,r,o,n,i)}getPixelSize(){return this.getDevicePixelSize()}getAspect(){let[t,i]=this.getDrawingBufferSize();return t>0&&i>0?t/i:1}cssToDeviceRatio(){try{let[t]=this.getDrawingBufferSize(),[i]=this.getCSSSize();return i?t/i:1}catch{return 1}}resize(t){this.setDrawingBufferSize(t.width,t.height)}_setAutoCreatedCanvasId(t){this.htmlCanvas?.id==="lumagl-auto-created-canvas"&&(this.htmlCanvas.id=t)}_startObservers(){this.destroyed||this._canvasObserver.start()}_stopObservers(){this._canvasObserver.stop()}_handleIntersection(t){if(this.destroyed)return;let i=t.find(o=>o.target===this.canvas);if(!i)return;let r=i.isIntersecting;this.isVisible!==r&&(this.isVisible=r,this.device.props.onVisibilityChange(this))}_handleResize(t){if(this.destroyed)return;let i=t.find(n=>n.target===this.canvas);if(!i)return;let r=Kt(i.contentBoxSize?.[0]);this.cssWidth=r.inlineSize,this.cssHeight=r.blockSize;let o=this.getDevicePixelSize();this._setDevicePixelSize(this._getDevicePixelSizeFromResizeEntry(i)),this._updateDrawingBufferSize(),this.device.props.onResize(this,{oldPixelSize:o})}_updateDrawingBufferSize(){if(this.props.autoResize)if(typeof this.props.useDevicePixels=="number"){let t=this.props.useDevicePixels;this.setDrawingBufferSize(this.cssWidth*t,this.cssHeight*t)}else this.props.useDevicePixels?this.setDrawingBufferSize(this.devicePixelWidth,this.devicePixelHeight):this.setDrawingBufferSize(this.cssWidth,this.cssHeight);this._initializedResolvers.resolve(),this.isInitialized=!0,this.updatePosition()}_getDevicePixelSizeFromResizeEntry(t){let i=Kt(t.contentBoxSize?.[0]);return this.props.pixelSizeSource==="css-dpr"?this._getDevicePixelSizeFromCSSSize(i.inlineSize,i.blockSize):{devicePixelWidth:t.devicePixelContentBoxSize?.[0]?.inlineSize||i.inlineSize*devicePixelRatio,devicePixelHeight:t.devicePixelContentBoxSize?.[0]?.blockSize||i.blockSize*devicePixelRatio}}_getDevicePixelSizeFromCSSSize(t,i){let r=this.getDevicePixelRatio();return{devicePixelWidth:Math.floor(t*r),devicePixelHeight:Math.floor(i*r)}}_setDevicePixelSize({devicePixelWidth:t,devicePixelHeight:i}){let[r,o]=this.getMaxDrawingBufferSize();this.devicePixelWidth=Math.max(1,Math.min(t,r)),this.devicePixelHeight=Math.max(1,Math.min(i,o))}_resizeDrawingBufferIfNeeded(){this._needsDrawingBufferResize&&(this._needsDrawingBufferResize=!1,(this.drawingBufferWidth!==this.canvas.width||this.drawingBufferHeight!==this.canvas.height)&&(this.canvas.width=this.drawingBufferWidth,this.canvas.height=this.drawingBufferHeight,this._configureDevice()))}_observeDevicePixelRatio(){if(this.destroyed||!this._canvasObserver.started)return;let t=this.devicePixelRatio;if(this.devicePixelRatio=window.devicePixelRatio,this.props.pixelSizeSource==="css-dpr"){let i=this.getDevicePixelSize();this._setDevicePixelSize(this._getDevicePixelSizeFromCSSSize(this.cssWidth,this.cssHeight)),this._updateDrawingBufferSize(),this.device.props.onResize(this,{oldPixelSize:i})}this.updatePosition(),this.device.props.onDevicePixelRatioChange?.(this,{oldRatio:t})}updatePosition(){if(this.destroyed)return;let t=this.htmlCanvas?.getBoundingClientRect();if(t){let i=[t.left,t.top];if(this._position??(this._position=i),i[0]!==this._position[0]||i[1]!==this._position[1]){let o=this._position;this._position=i,this.device.props.onPositionChange?.(this,{oldPosition:o})}}}};p(Zi,"defaultProps",{id:void 0,canvas:null,width:800,height:600,useDevicePixels:!0,pixelSizeSource:"exact",autoResize:!0,container:null,visible:!0,alphaMode:"opaque",colorSpace:"srgb",trackPosition:!1});Zt=Zi});var Qi,yp=E(()=>{Gl();Qi=class extends Zt{};p(Qi,"defaultProps",Zt.defaultProps)});var qr,bp=E(()=>{Gl();qr=class extends Zt{}});var Kr,st,ql=E(()=>{we();Kr=class Kr extends Y{get[Symbol.toStringTag](){return"Sampler"}constructor(t,i){i=Kr.normalizeProps(t,i),super(t,i,Kr.defaultProps)}static normalizeProps(t,i){return i}};p(Kr,"defaultProps",{...Y.defaultProps,type:"color-sampler",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge",magFilter:"nearest",minFilter:"nearest",mipmapFilter:"none",lodMinClamp:0,lodMaxClamp:32,compare:"less-equal",maxAnisotropy:1});st=Kr});var Rb,le,z,Kl=E(()=>{we();ql();Je();Wn();Rb={"1d":"1d","2d":"2d","2d-array":"2d",cube:"2d","cube-array":"2d","3d":"3d"},le=class le extends Y{constructor(i,r,o){r=le.normalizeProps(i,r);super(i,r,le.defaultProps);p(this,"dimension");p(this,"baseDimension");p(this,"format");p(this,"width");p(this,"height");p(this,"depth");p(this,"mipLevels");p(this,"samples");p(this,"byteAlignment");p(this,"ready",Promise.resolve(this));p(this,"isReady",!0);p(this,"updateTimestamp");if(this.dimension=this.props.dimension,this.baseDimension=Rb[this.dimension],this.format=this.props.format,this.width=this.props.width,this.height=this.props.height,this.depth=this.props.depth,this.mipLevels=this.props.mipLevels,this.samples=this.props.samples||1,this.dimension==="cube"&&(this.depth=6),this.props.width===void 0||this.props.height===void 0)if(i.isExternalImage(r.data)){let n=i.getExternalImageSize(r.data);this.width=n?.width||1,this.height=n?.height||1}else this.width=1,this.height=1,(this.props.width===void 0||this.props.height===void 0)&&w.warn(`${this} created with undefined width or height. This is deprecated. Use DynamicTexture instead.`)();this.byteAlignment=o?.byteAlignment||1,this.updateTimestamp=i.incrementTimestamp()}get[Symbol.toStringTag](){return"Texture"}toString(){return`Texture(${this.id},${this.format},${this.width}x${this.height})`}clone(i){return this.device.createTexture({...this.props,...i})}setSampler(i){this.sampler=i instanceof st?i:this.device.createSampler(i)}copyImageData(i){let{data:r,depth:o,...n}=i;this.writeData(r,{...n,depthOrArrayLayers:n.depthOrArrayLayers??o})}computeMemoryLayout(i={}){let r=this._normalizeTextureReadOptions(i),{width:o=this.width,height:n=this.height,depthOrArrayLayers:s=this.depth}=r,{format:a,byteAlignment:l}=this;return Ee.computeMemoryLayout({format:a,width:o,height:n,depth:s,byteAlignment:l})}readBuffer(i,r){throw new Error("readBuffer not implemented")}readDataAsync(i){throw new Error("readBuffer not implemented")}writeBuffer(i,r){throw new Error("readBuffer not implemented")}writeData(i,r){throw new Error("readBuffer not implemented")}readDataSyncWebGL(i){throw new Error("readDataSyncWebGL not available")}generateMipmapsWebGL(){throw new Error("generateMipmapsWebGL not available")}static normalizeProps(i,r){let o={...r},{width:n,height:s}=o;return typeof n=="number"&&(o.width=Math.max(1,Math.ceil(n))),typeof s=="number"&&(o.height=Math.max(1,Math.ceil(s))),o}_initializeData(i){this.device.isExternalImage(i)?this.copyExternalImage({image:i,width:this.width,height:this.height,depth:this.depth,mipLevel:0,x:0,y:0,z:0,aspect:"all",colorSpace:"srgb",premultipliedAlpha:!1,flipY:!1}):i&&this.copyImageData({data:i,mipLevel:0,x:0,y:0,z:0,aspect:"all"})}_normalizeCopyImageDataOptions(i){let{data:r,depth:o,...n}=i,s=this._normalizeTextureWriteOptions({...n,depthOrArrayLayers:n.depthOrArrayLayers??o});return{data:r,depth:s.depthOrArrayLayers,...s}}_normalizeCopyExternalImageOptions(i){let r=le._omitUndefined(i),o=r.mipLevel??0,n=this._getMipLevelSize(o),s=this.device.getExternalImageSize(i.image),a={...le.defaultCopyExternalImageOptions,...n,...s,...r};return a.width=Math.min(a.width,n.width-a.x),a.height=Math.min(a.height,n.height-a.y),a.depth=Math.min(a.depth,n.depthOrArrayLayers-a.z),a}_normalizeTextureReadOptions(i){let r=le._omitUndefined(i),o=r.mipLevel??0,n=this._getMipLevelSize(o),s={...le.defaultTextureReadOptions,...n,...r};return s.width=Math.min(s.width,n.width-s.x),s.height=Math.min(s.height,n.height-s.y),s.depthOrArrayLayers=Math.min(s.depthOrArrayLayers,n.depthOrArrayLayers-s.z),s}_getSupportedColorReadOptions(i){let r=this._normalizeTextureReadOptions(i),o=Ee.getInfo(this.format);switch(this._validateColorReadAspect(r),this._validateColorReadFormat(o),this.dimension){case"2d":case"cube":case"cube-array":case"2d-array":case"3d":return r;default:throw new Error(`${this} color readback does not support ${this.dimension} textures`)}}_validateColorReadAspect(i){if(i.aspect!=="all")throw new Error(`${this} color readback only supports aspect 'all'`)}_validateColorReadFormat(i){if(i.compressed)throw new Error(`${this} color readback does not support compressed formats (${this.format})`);switch(i.attachment){case"color":return;case"depth":throw new Error(`${this} color readback does not support depth formats (${this.format})`);case"stencil":throw new Error(`${this} color readback does not support stencil formats (${this.format})`);case"depth-stencil":throw new Error(`${this} color readback does not support depth-stencil formats (${this.format})`);default:throw new Error(`${this} color readback does not support format ${this.format}`)}}_normalizeTextureWriteOptions(i){let r=le._omitUndefined(i),o=r.mipLevel??0,n=this._getMipLevelSize(o),s={...le.defaultTextureWriteOptions,...n,...r};s.width=Math.min(s.width,n.width-s.x),s.height=Math.min(s.height,n.height-s.y),s.depthOrArrayLayers=Math.min(s.depthOrArrayLayers,n.depthOrArrayLayers-s.z);let a=Ee.computeMemoryLayout({format:this.format,width:s.width,height:s.height,depth:s.depthOrArrayLayers,byteAlignment:this.byteAlignment}),l=a.bytesPerPixel*s.width;if(s.bytesPerRow=r.bytesPerRow??a.bytesPerRow,s.rowsPerImage=r.rowsPerImage??s.height,s.bytesPerRow<l)throw new Error(`bytesPerRow (${s.bytesPerRow}) must be at least ${l} for ${this.format}`);if(s.rowsPerImage<s.height)throw new Error(`rowsPerImage (${s.rowsPerImage}) must be at least ${s.height} for ${this.format}`);let c=this.device.getTextureFormatInfo(this.format).bytesPerPixel;if(c&&s.bytesPerRow%c!==0)throw new Error(`bytesPerRow (${s.bytesPerRow}) must be a multiple of bytesPerPixel (${c}) for ${this.format}`);return s}_getMipLevelSize(i){let r=Math.max(1,this.width>>i),o=this.baseDimension==="1d"?1:Math.max(1,this.height>>i),n=this.dimension==="3d"?Math.max(1,this.depth>>i):this.depth;return{width:r,height:o,depthOrArrayLayers:n}}getAllocatedByteLength(){let i=0;for(let r=0;r<this.mipLevels;r++){let{width:o,height:n,depthOrArrayLayers:s}=this._getMipLevelSize(r);i+=Ee.computeMemoryLayout({format:this.format,width:o,height:n,depth:s,byteAlignment:1}).byteLength}return i*this.samples}static _omitUndefined(i){return Object.fromEntries(Object.entries(i).filter(([,r])=>r!==void 0))}};p(le,"SAMPLE",4),p(le,"STORAGE",8),p(le,"RENDER",16),p(le,"COPY_SRC",1),p(le,"COPY_DST",2),p(le,"TEXTURE",4),p(le,"RENDER_ATTACHMENT",16),p(le,"defaultProps",{...Y.defaultProps,data:null,dimension:"2d",format:"rgba8unorm",usage:le.SAMPLE|le.RENDER|le.COPY_DST,width:void 0,height:void 0,depth:1,mipLevels:1,samples:void 0,sampler:{},view:void 0}),p(le,"defaultCopyDataOptions",{data:void 0,byteOffset:0,bytesPerRow:void 0,rowsPerImage:void 0,width:void 0,height:void 0,depthOrArrayLayers:void 0,depth:1,mipLevel:0,x:0,y:0,z:0,aspect:"all"}),p(le,"defaultCopyExternalImageOptions",{image:void 0,sourceX:0,sourceY:0,width:void 0,height:void 0,depth:1,mipLevel:0,x:0,y:0,z:0,aspect:"all",colorSpace:"srgb",premultipliedAlpha:!1,flipY:!1}),p(le,"defaultTextureReadOptions",{x:0,y:0,z:0,width:void 0,height:void 0,depthOrArrayLayers:1,mipLevel:0,aspect:"all"}),p(le,"defaultTextureWriteOptions",{byteOffset:0,bytesPerRow:void 0,rowsPerImage:void 0,x:0,y:0,z:0,width:void 0,height:void 0,depthOrArrayLayers:1,mipLevel:0,aspect:"all"});z=le});var Xn,vi,Tp=E(()=>{we();Xn=class Xn extends Y{get[Symbol.toStringTag](){return"TextureView"}constructor(t,i){super(t,i,Xn.defaultProps)}};p(Xn,"defaultProps",{...Y.defaultProps,format:void 0,dimension:void 0,aspect:"all",baseMipLevel:0,mipLevelCount:void 0,baseArrayLayer:0,arrayLayerCount:void 0});vi=Xn});function _p(e,t,i){let r="",o=t.split(/\r?\n/),n=e.slice().sort((s,a)=>s.lineNum-a.lineNum);switch(i?.showSourceCode||"no"){case"all":let s=0;for(let a=1;a<=o.length;a++){let l=o[a-1],c=n[s];for(l&&c&&(r+=Pp(l,a,i));n.length>s&&c.lineNum===a;){let d=n[s++];d&&(r+=Zl(d,o,d.lineNum,{...i,inlineSource:!1}))}}for(;n.length>s;){let a=n[s++];a&&(r+=Zl(a,[],0,{...i,inlineSource:!1}))}return r;case"issues":case"no":for(let a of e)r+=Zl(a,o,a.lineNum,{inlineSource:i?.showSourceCode!=="no"});return r}}function Zl(e,t,i,r){if(r?.inlineSource){let n=Eb(t,i),s=e.linePos>0?`${" ".repeat(e.linePos+5)}^^^
`:"";return`
${n}${s}${e.type.toUpperCase()}: ${e.message}

`}let o=e.type==="error"?"red":"orange";return r?.html?`<div class='luma-compiler-log-${e.type}' style="color:${o};"><b> ${e.type.toUpperCase()}: ${e.message}</b></div>`:`${e.type.toUpperCase()}: ${e.message}`}function Eb(e,t,i){let r="";for(let o=t-2;o<=t;o++){let n=e[o-1];n!==void 0&&(r+=Pp(n,t,i))}return r}function Pp(e,t,i){let r=i?.html?Db(e):e;return`${Ib(String(t),4)}: ${r}${i?.html?"<br/>":`
`}`}function Ib(e,t){let i="";for(let r=e.length;r<t;++r)i+=" ";return i+e}function Db(e){return e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}var Cp=E(()=>{});function Mb(e){return Fb(e.source)||e.id||_t(`unnamed ${e.stage}-shader`)}function Fb(e,t="unnamed"){return/#define[\s*]SHADER_NAME[\s*]([A-Za-z0-9_-]+)[\s*]/.exec(e)?.[1]??t}var jn,yi,Ql=E(()=>{we();qi();Cp();jn=class jn extends Y{constructor(i,r){r={...r,debugShaders:r.debugShaders||i.props.debugShaders||"errors"};super(i,{id:Mb(r),...r},jn.defaultProps);p(this,"stage");p(this,"source");p(this,"compilationStatus","pending");this.stage=this.props.stage,this.source=this.props.source}get[Symbol.toStringTag](){return"Shader"}getCompilationInfoSync(){return null}getTranslatedSource(){return null}async debugShader(){let i=this.props.debugShaders;switch(i){case"never":return;case"errors":if(this.compilationStatus==="success")return;break;case"warnings":case"always":break}let r=await this.getCompilationInfo();i==="warnings"&&r?.length===0||this._displayShaderLog(r,this.id)}_displayShaderLog(i,r){if(typeof document>"u"||!document?.createElement)return;let o=r,n=`${this.stage} shader "${o}"`,s=_p(i,this.source,{showSourceCode:"all",html:!0}),a=this.getTranslatedSource(),l=document.createElement("div");l.innerHTML=`<h1>Compilation error in ${n}</h1>
<div style="display:flex;position:fixed;top:10px;right:20px;gap:2px;">
<button id="copy">Copy source</button><br/>
<button id="close">Close</button>
</div>
<code><pre>${s}</pre></code>`,a&&(l.innerHTML+=`<br /><h1>Translated Source</h1><br /><br /><code><pre>${a}</pre></code>`),l.style.top="0",l.style.left="0",l.style.background="white",l.style.position="fixed",l.style.zIndex="9999",l.style.maxWidth="100vw",l.style.maxHeight="100vh",l.style.overflowY="auto",document.body.appendChild(l),l.querySelector(".luma-compiler-log-error")?.scrollIntoView(),l.querySelector("button#close").onclick=()=>{l.remove()},l.querySelector("button#copy").onclick=()=>{navigator.clipboard.writeText(this.source)}}};p(jn,"defaultProps",{...Y.defaultProps,language:"auto",stage:void 0,source:"",sourceMap:null,entryPoint:"main",debugShaders:void 0});yi=jn});var Yn,bi,Ap=E(()=>{we();Kl();Je();Yn=class Yn extends Y{constructor(i,r={}){super(i,r,Yn.defaultProps);p(this,"width");p(this,"height");this.width=this.props.width,this.height=this.props.height}get[Symbol.toStringTag](){return"Framebuffer"}clone(i){let r=this.colorAttachments.map(n=>n.texture.clone(i)),o=this.depthStencilAttachment&&this.depthStencilAttachment.texture.clone(i);return this.device.createFramebuffer({...this.props,...i,colorAttachments:r,depthStencilAttachment:o})}resize(i){let r=!i;if(i){let[o,n]=Array.isArray(i)?i:[i.width,i.height];r=r||n!==this.height||o!==this.width,this.width=o,this.height=n}r&&(w.log(2,`Resizing framebuffer ${this.id} to ${this.width}x${this.height}`)(),this.resizeAttachments(this.width,this.height))}autoCreateAttachmentTextures(){if(this.props.colorAttachments.length===0&&!this.props.depthStencilAttachment)throw new Error("Framebuffer has noattachments");this.colorAttachments=this.props.colorAttachments.map((r,o)=>{if(typeof r=="string"){let n=this.createColorTexture(r,o);return this.attachResource(n),n.view}return r instanceof z?r.view:r});let i=this.props.depthStencilAttachment;if(i)if(typeof i=="string"){let r=this.createDepthStencilTexture(i);this.attachResource(r),this.depthStencilAttachment=r.view}else i instanceof z?this.depthStencilAttachment=i.view:this.depthStencilAttachment=i}createColorTexture(i,r){return this.device.createTexture({id:`${this.id}-color-attachment-${r}`,usage:z.RENDER_ATTACHMENT,format:i,width:this.width,height:this.height,sampler:{magFilter:"linear",minFilter:"linear"}})}createDepthStencilTexture(i){return this.device.createTexture({id:`${this.id}-depth-stencil-attachment`,usage:z.RENDER_ATTACHMENT,format:i,width:this.width,height:this.height})}resizeAttachments(i,r){if(this.colorAttachments.forEach((o,n)=>{let s=o.texture.clone({width:i,height:r});this.destroyAttachedResource(o),this.colorAttachments[n]=s.view,this.attachResource(s.view)}),this.depthStencilAttachment){let o=this.depthStencilAttachment.texture.clone({width:i,height:r});this.destroyAttachedResource(this.depthStencilAttachment),this.depthStencilAttachment=o.view,this.attachResource(o)}this.updateAttachments()}};p(Yn,"defaultProps",{...Y.defaultProps,width:1,height:1,colorAttachments:[],depthStencilAttachment:null});bi=Yn});var Gn,tt,Jl=E(()=>{we();Gn=class Gn extends Y{constructor(i,r){super(i,r,Gn.defaultProps);p(this,"shaderLayout");p(this,"bufferLayout");p(this,"linkStatus","pending");p(this,"hash","");p(this,"sharedRenderPipeline",null);this.shaderLayout=this.props.shaderLayout,this.bufferLayout=this.props.bufferLayout||[],this.sharedRenderPipeline=this.props._sharedRenderPipeline||null}get[Symbol.toStringTag](){return"RenderPipeline"}get isPending(){return this.linkStatus==="pending"||this.vs.compilationStatus==="pending"||this.fs?.compilationStatus==="pending"}get isErrored(){return this.linkStatus==="error"||this.vs.compilationStatus==="error"||this.fs?.compilationStatus==="error"}};p(Gn,"defaultProps",{...Y.defaultProps,vs:null,vertexEntryPoint:"vertexMain",vsConstants:{},fs:null,fragmentEntryPoint:"fragmentMain",fsConstants:{},shaderLayout:null,bufferLayout:[],topology:"triangle-list",colorAttachmentFormats:void 0,depthStencilAttachmentFormat:void 0,parameters:{},varyings:void 0,bufferMode:void 0,disableWarnings:!1,_sharedRenderPipeline:void 0,bindings:void 0,bindGroups:void 0});tt=Gn});var Zr,wp=E(()=>{we();Zr=class extends Y{get[Symbol.toStringTag](){return"SharedRenderPipeline"}constructor(t,i){super(t,i,{...Y.defaultProps,handle:void 0,vs:void 0,fs:void 0,varyings:void 0,bufferMode:void 0})}}});var qn,Qr,Rp=E(()=>{we();qn=class qn extends Y{constructor(i,r){super(i,r,qn.defaultProps);p(this,"hash","");p(this,"shaderLayout");this.shaderLayout=r.shaderLayout}get[Symbol.toStringTag](){return"ComputePipeline"}};p(qn,"defaultProps",{...Y.defaultProps,shader:void 0,entryPoint:void 0,constants:{},shaderLayout:void 0});Qr=qn});var Kn,Jr,Ep=E(()=>{Rp();Jl();Je();qi();Kn=class Kn{constructor(t){p(this,"device");p(this,"_hashCounter",0);p(this,"_hashes",{});p(this,"_renderPipelineCache",{});p(this,"_computePipelineCache",{});p(this,"_sharedRenderPipelineCache",{});this.device=t}static getDefaultPipelineFactory(t){let i=t.getModuleData("@luma.gl/core");return i.defaultPipelineFactory||(i.defaultPipelineFactory=new Kn(t)),i.defaultPipelineFactory}get[Symbol.toStringTag](){return"PipelineFactory"}toString(){return`PipelineFactory(${this.device.id})`}createRenderPipeline(t){if(!this.device.props._cachePipelines)return this.device.createRenderPipeline(t);let i={...tt.defaultProps,...t},r=this._renderPipelineCache,o=this._hashRenderPipeline(i),n=r[o]?.resource;if(n)r[o].useCount++,this.device.props.debugFactories&&w.log(3,`${this}: ${r[o].resource} reused, count=${r[o].useCount}, (id=${t.id})`)();else{let s=this.device.type==="webgl"&&this.device.props._sharePipelines?this.createSharedRenderPipeline(i):void 0;n=this.device.createRenderPipeline({...i,id:i.id?`${i.id}-cached`:_t("unnamed-cached"),_sharedRenderPipeline:s}),n.hash=o,r[o]={resource:n,useCount:1},this.device.props.debugFactories&&w.log(3,`${this}: ${n} created, count=${r[o].useCount}`)()}return n}createComputePipeline(t){if(!this.device.props._cachePipelines)return this.device.createComputePipeline(t);let i={...Qr.defaultProps,...t},r=this._computePipelineCache,o=this._hashComputePipeline(i),n=r[o]?.resource;return n?(r[o].useCount++,this.device.props.debugFactories&&w.log(3,`${this}: ${r[o].resource} reused, count=${r[o].useCount}, (id=${t.id})`)()):(n=this.device.createComputePipeline({...i,id:i.id?`${i.id}-cached`:void 0}),n.hash=o,r[o]={resource:n,useCount:1},this.device.props.debugFactories&&w.log(3,`${this}: ${n} created, count=${r[o].useCount}`)()),n}release(t){if(!this.device.props._cachePipelines){t.destroy();return}let i=this._getCache(t),r=t.hash;i[r].useCount--,i[r].useCount===0?(this._destroyPipeline(t),this.device.props.debugFactories&&w.log(3,`${this}: ${t} released and destroyed`)()):i[r].useCount<0?(w.error(`${this}: ${t} released, useCount < 0, resetting`)(),i[r].useCount=0):this.device.props.debugFactories&&w.log(3,`${this}: ${t} released, count=${i[r].useCount}`)()}createSharedRenderPipeline(t){let i=this._hashSharedRenderPipeline(t),r=this._sharedRenderPipelineCache[i];return r||(r={resource:this.device._createSharedRenderPipelineWebGL(t),useCount:0},this._sharedRenderPipelineCache[i]=r),r.useCount++,r.resource}releaseSharedRenderPipeline(t){if(!t.sharedRenderPipeline)return;let i=this._hashSharedRenderPipeline(t.sharedRenderPipeline.props),r=this._sharedRenderPipelineCache[i];r&&(r.useCount--,r.useCount===0&&(r.resource.destroy(),delete this._sharedRenderPipelineCache[i]))}_destroyPipeline(t){let i=this._getCache(t);return this.device.props._destroyPipelines?(delete i[t.hash],t.destroy(),t instanceof tt&&this.releaseSharedRenderPipeline(t),!0):!1}_getCache(t){let i;if(t instanceof Qr&&(i=this._computePipelineCache),t instanceof tt&&(i=this._renderPipelineCache),!i)throw new Error(`${this}`);if(!i[t.hash])throw new Error(`${this}: ${t} matched incorrect entry`);return i}_hashComputePipeline(t){let{type:i}=this.device,r=this._getHash(t.shader.source),o=this._getHash(JSON.stringify(t.shaderLayout));return`${i}/C/${r}SL${o}`}_hashRenderPipeline(t){let i=t.vs?this._getHash(t.vs.source):0,r=t.fs?this._getHash(t.fs.source):0,o=this._getWebGLVaryingHash(t),n=this._getHash(JSON.stringify(t.shaderLayout)),s=this._getHash(JSON.stringify(t.bufferLayout)),{type:a}=this.device;if(a==="webgl"){let l=this._getHash(JSON.stringify(t.parameters));return`${a}/R/${i}/${r}V${o}T${t.topology}P${l}SL${n}BL${s}`}else{let c=this._getHash(JSON.stringify({vertexEntryPoint:t.vertexEntryPoint,fragmentEntryPoint:t.fragmentEntryPoint})),d=this._getHash(JSON.stringify(t.parameters)),u=this._getWebGPUAttachmentHash(t);return`${a}/R/${i}/${r}V${o}T${t.topology}EP${c}P${d}SL${n}BL${s}A${u}`}}_hashSharedRenderPipeline(t){let i=t.vs?this._getHash(t.vs.source):0,r=t.fs?this._getHash(t.fs.source):0,o=this._getWebGLVaryingHash(t);return`webgl/S/${i}/${r}V${o}`}_getHash(t){return this._hashes[t]===void 0&&(this._hashes[t]=this._hashCounter++),this._hashes[t]}_getWebGLVaryingHash(t){let{varyings:i=[],bufferMode:r=null}=t;return this._getHash(JSON.stringify({varyings:i,bufferMode:r}))}_getWebGPUAttachmentHash(t){let i=t.colorAttachmentFormats??[this.device.preferredColorFormat],r=t.parameters?.depthWriteEnabled?t.depthStencilAttachmentFormat||this.device.preferredDepthFormat:null;return this._getHash(JSON.stringify({colorAttachmentFormats:i,depthStencilAttachmentFormat:r}))}};p(Kn,"defaultProps",{...tt.defaultProps});Jr=Kn});var Zn,eo,Ip=E(()=>{Ql();Je();Zn=class Zn{constructor(t){p(this,"device");p(this,"_cache",{});this.device=t}static getDefaultShaderFactory(t){let i=t.getModuleData("@luma.gl/core");return i.defaultShaderFactory||(i.defaultShaderFactory=new Zn(t)),i.defaultShaderFactory}get[Symbol.toStringTag](){return"ShaderFactory"}toString(){return`${this[Symbol.toStringTag]}(${this.device.id})`}createShader(t){if(!this.device.props._cacheShaders)return this.device.createShader(t);let i=this._hashShader(t),r=this._cache[i];if(r)r.useCount++,this.device.props.debugFactories&&w.log(3,`${this}: Reusing shader ${r.resource.id} count=${r.useCount}`)();else{let o=this.device.createShader({...t,id:t.id?`${t.id}-cached`:void 0});this._cache[i]=r={resource:o,useCount:1},this.device.props.debugFactories&&w.log(3,`${this}: Created new shader ${o.id}`)()}return r.resource}release(t){if(!this.device.props._cacheShaders){t.destroy();return}let i=this._hashShader(t),r=this._cache[i];if(r)if(r.useCount--,r.useCount===0)this.device.props._destroyShaders&&(delete this._cache[i],r.resource.destroy(),this.device.props.debugFactories&&w.log(3,`${this}: Releasing shader ${t.id}, destroyed`)());else{if(r.useCount<0)throw new Error(`ShaderFactory: Shader ${t.id} released too many times`);this.device.props.debugFactories&&w.log(3,`${this}: Releasing shader ${t.id} count=${r.useCount}`)()}}_hashShader(t){return`${t.stage}:${t.source}`}};p(Zn,"defaultProps",{...yi.defaultProps});eo=Zn});function Dp(e,t,i){let r=e.bindings.find(o=>o.name===t||`${o.name.toLocaleLowerCase()}uniforms`===t.toLocaleLowerCase());return!r&&!i?.ignoreWarnings&&w.warn(`Binding ${t} not set: Not found in shader layout.`)(),r||null}function to(e,t){if(!t)return{};if(kb(t))return Object.fromEntries(Object.entries(t).map(([o,n])=>[Number(o),{...n}]));let i={};for(let[r,o]of Object.entries(t)){let s=Dp(e,r)?.group??0;i[s]||(i[s]={}),i[s][r]=o}return i}function Qn(e){let t={};for(let i of Object.values(e))Object.assign(t,i);return t}function kb(e){let t=Object.keys(e);return t.length>0&&t.every(i=>/^\d+$/.test(i))}var Mp=E(()=>{Je()});var at,io,Fp=E(()=>{we();at=class at extends Y{get[Symbol.toStringTag](){return"RenderPass"}constructor(t,i){i=at.normalizeProps(t,i),super(t,i,at.defaultProps)}static normalizeProps(t,i){return i}};p(at,"defaultClearColor",[0,0,0,1]),p(at,"defaultClearDepth",1),p(at,"defaultClearStencil",0),p(at,"defaultProps",{...Y.defaultProps,framebuffer:null,parameters:void 0,clearColor:at.defaultClearColor,clearColors:void 0,clearDepth:at.defaultClearDepth,clearStencil:at.defaultClearStencil,depthReadOnly:!1,stencilReadOnly:!1,discard:!1,occlusionQuerySet:void 0,timestampQuerySet:void 0,beginTimestampIndex:void 0,endTimestampIndex:void 0});io=at});var Jn,ro,kp=E(()=>{we();Jn=class Jn extends Y{constructor(i,r){super(i,r,Jn.defaultProps);p(this,"_timeProfilingQuerySet",null);p(this,"_timeProfilingSlotCount",0);p(this,"_gpuTimeMs");this._timeProfilingQuerySet=r.timeProfilingQuerySet??null,this._timeProfilingSlotCount=0,this._gpuTimeMs=void 0}get[Symbol.toStringTag](){return"CommandEncoder"}async resolveTimeProfilingQuerySet(){if(this._gpuTimeMs=void 0,!this._timeProfilingQuerySet)return;let i=Math.floor(this._timeProfilingSlotCount/2);if(i<=0)return;let r=i*2,o=await this._timeProfilingQuerySet.readResults({firstQuery:0,queryCount:r}),n=0n;for(let s=0;s<r;s+=2)n+=o[s+1]-o[s];this._gpuTimeMs=Number(n)/1e6}getTimeProfilingSlotCount(){return this._timeProfilingSlotCount}getTimeProfilingQuerySet(){return this._timeProfilingQuerySet}_applyTimeProfilingToPassProps(i){let r=i||{};if(!this._supportsTimestampQueries()||!this._timeProfilingQuerySet||r.timestampQuerySet!==void 0||r.beginTimestampIndex!==void 0||r.endTimestampIndex!==void 0)return r;let o=this._timeProfilingSlotCount;return o+1>=this._timeProfilingQuerySet.props.count?r:(this._timeProfilingSlotCount+=2,{...r,timestampQuerySet:this._timeProfilingQuerySet,beginTimestampIndex:o,endTimestampIndex:o+1})}_supportsTimestampQueries(){return this.device.features.has("timestamp-query")}};p(Jn,"defaultProps",{...Y.defaultProps,measureExecutionTime:void 0,timeProfilingQuerySet:void 0});ro=Jn});var es,oo,Np=E(()=>{we();es=class es extends Y{get[Symbol.toStringTag](){return"CommandBuffer"}constructor(t,i){super(t,i,es.defaultProps)}};p(es,"defaultProps",{...Y.defaultProps});oo=es});function Ji(e){let t=ts(e),i=zb[t];if(!i)throw new Error(`Unsupported variable shader type: ${e}`);return i}function Bp(e){let t=Op(e),i=Ob[t];if(!i)throw new Error(`Unsupported attribute shader type: ${e}`);let[r,o]=i,n=r==="i32"||r==="u32",s=r!=="u32",a=Bb[r]*o;return{primitiveType:r,components:o,byteLength:a,integer:n,signed:s}}function Nb(e,t){return t===1?e:`vec${t}<${e}>`}function Op(e){return Ub[e]||e}function ts(e){return Lb[e]||e}var ec,tc,Bb,Ob,zb,Ub,Lb,is=E(()=>{ec=class{getVariableShaderTypeInfo(t){return Ji(t)}getAttributeShaderTypeInfo(t){return Bp(t)}makeShaderAttributeType(t,i){return Nb(t,i)}resolveAttributeShaderTypeAlias(t){return Op(t)}resolveVariableShaderTypeAlias(t){return ts(t)}};tc=new ec,Bb={f32:4,f16:2,i32:4,u32:4},Ob={f32:["f32",1],"vec2<f32>":["f32",2],"vec3<f32>":["f32",3],"vec4<f32>":["f32",4],f16:["f16",1],"vec2<f16>":["f16",2],"vec3<f16>":["f16",3],"vec4<f16>":["f16",4],i32:["i32",1],"vec2<i32>":["i32",2],"vec3<i32>":["i32",3],"vec4<i32>":["i32",4],u32:["u32",1],"vec2<u32>":["u32",2],"vec3<u32>":["u32",3],"vec4<u32>":["u32",4]},zb={f32:{type:"f32",components:1},f16:{type:"f16",components:1},i32:{type:"i32",components:1},u32:{type:"u32",components:1},"vec2<f32>":{type:"f32",components:2},"vec3<f32>":{type:"f32",components:3},"vec4<f32>":{type:"f32",components:4},"vec2<f16>":{type:"f16",components:2},"vec3<f16>":{type:"f16",components:3},"vec4<f16>":{type:"f16",components:4},"vec2<i32>":{type:"i32",components:2},"vec3<i32>":{type:"i32",components:3},"vec4<i32>":{type:"i32",components:4},"vec2<u32>":{type:"u32",components:2},"vec3<u32>":{type:"u32",components:3},"vec4<u32>":{type:"u32",components:4},"mat2x2<f32>":{type:"f32",components:4},"mat2x3<f32>":{type:"f32",components:6},"mat2x4<f32>":{type:"f32",components:8},"mat3x2<f32>":{type:"f32",components:6},"mat3x3<f32>":{type:"f32",components:9},"mat3x4<f32>":{type:"f32",components:12},"mat4x2<f32>":{type:"f32",components:8},"mat4x3<f32>":{type:"f32",components:12},"mat4x4<f32>":{type:"f32",components:16},"mat2x2<f16>":{type:"f16",components:4},"mat2x3<f16>":{type:"f16",components:6},"mat2x4<f16>":{type:"f16",components:8},"mat3x2<f16>":{type:"f16",components:6},"mat3x3<f16>":{type:"f16",components:9},"mat3x4<f16>":{type:"f16",components:12},"mat4x2<f16>":{type:"f16",components:8},"mat4x3<f16>":{type:"f16",components:12},"mat4x4<f16>":{type:"f16",components:16},"mat2x2<i32>":{type:"i32",components:4},"mat2x3<i32>":{type:"i32",components:6},"mat2x4<i32>":{type:"i32",components:8},"mat3x2<i32>":{type:"i32",components:6},"mat3x3<i32>":{type:"i32",components:9},"mat3x4<i32>":{type:"i32",components:12},"mat4x2<i32>":{type:"i32",components:8},"mat4x3<i32>":{type:"i32",components:12},"mat4x4<i32>":{type:"i32",components:16},"mat2x2<u32>":{type:"u32",components:4},"mat2x3<u32>":{type:"u32",components:6},"mat2x4<u32>":{type:"u32",components:8},"mat3x2<u32>":{type:"u32",components:6},"mat3x3<u32>":{type:"u32",components:9},"mat3x4<u32>":{type:"u32",components:12},"mat4x2<u32>":{type:"u32",components:8},"mat4x3<u32>":{type:"u32",components:12},"mat4x4<u32>":{type:"u32",components:16}},Ub={vec2i:"vec2<i32>",vec3i:"vec3<i32>",vec4i:"vec4<i32>",vec2u:"vec2<u32>",vec3u:"vec3<u32>",vec4u:"vec4<u32>",vec2f:"vec2<f32>",vec3f:"vec3<f32>",vec4f:"vec4<f32>",vec2h:"vec2<f16>",vec3h:"vec3<f16>",vec4h:"vec4<f16>"},Lb={vec2i:"vec2<i32>",vec3i:"vec3<i32>",vec4i:"vec4<i32>",vec2u:"vec2<u32>",vec3u:"vec3<u32>",vec4u:"vec4<u32>",vec2f:"vec2<f32>",vec3f:"vec3<f32>",vec4f:"vec4<f32>",vec2h:"vec2<f16>",vec3h:"vec3<f16>",vec4h:"vec4<f16>",mat2x2f:"mat2x2<f32>",mat2x3f:"mat2x3<f32>",mat2x4f:"mat2x4<f32>",mat3x2f:"mat3x2<f32>",mat3x3f:"mat3x3<f32>",mat3x4f:"mat3x4<f32>",mat4x2f:"mat4x2<f32>",mat4x3f:"mat4x3<f32>",mat4x4f:"mat4x4<f32>",mat2x2i:"mat2x2<i32>",mat2x3i:"mat2x3<i32>",mat2x4i:"mat2x4<i32>",mat3x2i:"mat3x2<i32>",mat3x3i:"mat3x3<i32>",mat3x4i:"mat3x4<i32>",mat4x2i:"mat4x2<i32>",mat4x3i:"mat4x3<i32>",mat4x4i:"mat4x4<i32>",mat2x2u:"mat2x2<u32>",mat2x3u:"mat2x3<u32>",mat2x4u:"mat2x4<u32>",mat3x2u:"mat3x2<u32>",mat3x3u:"mat3x3<u32>",mat3x4u:"mat3x4<u32>",mat4x2u:"mat4x2<u32>",mat4x3u:"mat4x3<u32>",mat4x4u:"mat4x4<u32>",mat2x2h:"mat2x2<f16>",mat2x3h:"mat2x3<f16>",mat2x4h:"mat2x4<f16>",mat3x2h:"mat3x2<f16>",mat3x3h:"mat3x3<f16>",mat3x4h:"mat3x4<f16>",mat4x2h:"mat4x2<f16>",mat4x3h:"mat4x3<f16>",mat4x4h:"mat4x4<f16>"}});function rs(e,t){let i={};for(let r of e.attributes){let o=Wb(e,t,r.name);o&&(i[r.name]=o)}return i}function zp(e,t,i=16){let r=rs(e,t),o=new Array(i).fill(null);for(let n of Object.values(r))o[n.location]=n;return o}function Wb(e,t,i){let r=Vb(e,i),o=Hb(t,i);if(!r)return null;let n=tc.getAttributeShaderTypeInfo(r.type),s=Ut.getCompatibleVertexFormat(n),a=o?.vertexFormat||s,l=Ut.getVertexFormatInfo(a);return{attributeName:o?.attributeName||r.name,bufferName:o?.bufferName||r.name,location:r.location,shaderType:r.type,primitiveType:n.primitiveType,shaderComponents:n.components,vertexFormat:a,bufferDataType:l.type,bufferComponents:l.components,normalized:l.normalized,integer:n.integer,stepMode:o?.stepMode||r.stepMode||"vertex",byteOffset:o?.byteOffset||0,byteStride:o?.byteStride||0}}function Vb(e,t){let i=e.attributes.find(r=>r.name===t);return i||w.warn(`shader layout attribute "${t}" not present in shader`),i||null}function Hb(e,t){$b(e);let i=Xb(e,t);return i||(i=jb(e,t),i)?i:(w.warn(`layout for attribute "${t}" not present in buffer layout`),null)}function $b(e){for(let t of e)(t.attributes&&t.format||!t.attributes&&!t.format)&&w.warn(`BufferLayout ${name} must have either 'attributes' or 'format' field`)}function Xb(e,t){for(let i of e)if(i.format&&i.name===t)return{attributeName:i.name,bufferName:t,stepMode:i.stepMode,vertexFormat:i.format,byteOffset:0,byteStride:i.byteStride||0};return null}function jb(e,t){for(let i of e){let r=i.byteStride;if(typeof i.byteStride!="number")for(let n of i.attributes||[]){let s=Ut.getVertexFormatInfo(n.format);r+=s.byteLength}let o=i.attributes?.find(n=>n.attribute===t);if(o)return{attributeName:o.attribute,bufferName:i.name,stepMode:i.stepMode,vertexFormat:o.format,byteOffset:o.byteOffset,byteStride:r}}return null}var ic=E(()=>{Je();is();On()});var os,no,Up=E(()=>{ic();we();os=class os extends Y{constructor(i,r){super(i,r,os.defaultProps);p(this,"maxVertexAttributes");p(this,"attributeInfos");p(this,"indexBuffer",null);p(this,"attributes");this.maxVertexAttributes=i.limits.maxVertexAttributes,this.attributes=new Array(this.maxVertexAttributes).fill(null),this.attributeInfos=zp(r.shaderLayout,r.bufferLayout,this.maxVertexAttributes)}get[Symbol.toStringTag](){return"VertexArray"}setConstantWebGL(i,r){this.device.reportError(new Error("constant attributes not supported"),this)()}};p(os,"defaultProps",{...Y.defaultProps,shaderLayout:void 0,bufferLayout:[]});no=os});var ns,so,Lp=E(()=>{we();ns=class ns extends Y{get[Symbol.toStringTag](){return"TransformFeedback"}constructor(t,i){super(t,i,ns.defaultProps)}};p(ns,"defaultProps",{...Y.defaultProps,layout:void 0,buffers:{}});so=ns});var ss,ao,Wp=E(()=>{we();ss=class ss extends Y{get[Symbol.toStringTag](){return"QuerySet"}constructor(t,i){super(t,i,ss.defaultProps)}};p(ss,"defaultProps",{...Y.defaultProps,type:void 0,count:void 0});ao=ss});var as,lo,Vp=E(()=>{we();as=class as extends Y{get[Symbol.toStringTag](){return"Fence"}constructor(t,i={}){super(t,i,as.defaultProps)}};p(as,"defaultProps",{...Y.defaultProps});lo=as});function Ct(e,t){switch(t){case 1:return e;case 2:return e+e%2;default:return e+(4-e%4)%4}}function rc(e){let[,,,,t]=Yb[e];return t}var Yb,oc=E(()=>{Yb={uint8:["uint8","u32",1,!1,Uint8Array],sint8:["sint8","i32",1,!1,Int8Array],unorm8:["uint8","f32",1,!0,Uint8Array],snorm8:["sint8","f32",1,!0,Int8Array],uint16:["uint16","u32",2,!1,Uint16Array],sint16:["sint16","i32",2,!1,Int16Array],unorm16:["uint16","u32",2,!0,Uint16Array],snorm16:["sint16","i32",2,!0,Int16Array],float16:["float16","f16",2,!1,Uint16Array],float32:["float32","f32",4,!1,Float32Array],uint32:["uint32","u32",4,!1,Uint32Array],sint32:["sint32","i32",4,!1,Int32Array]}});function $p(e,t={}){let i={...e},r=t.layout??"std140",o={},n=0;for(let[s,a]of Object.entries(i))n=nc(o,s,a,n,r);return n=Ct(n,Qt(i,r)),{layout:r,byteLength:n*4,uniformTypes:i,fields:o}}function co(e,t){let i=ts(e),r=Ji(i),o=/^mat(\d)x(\d)<.+>$/.exec(i);if(o){let s=Number(o[1]),a=Number(o[2]),l=Hp(a,i,r.type,t),c=qb(l.size,l.alignment,t);return{alignment:l.alignment,size:s*c,components:s*a,columns:s,rows:a,columnStride:c,shaderType:i,type:r.type}}let n=/^vec(\d)<.+>$/.exec(i);return n?Hp(Number(n[1]),i,r.type,t):{alignment:1,size:1,components:1,columns:1,rows:1,columnStride:1,shaderType:i,type:r.type}}function sc(e){return!!e&&typeof e=="object"&&!Array.isArray(e)}function nc(e,t,i,r,o){if(typeof i=="string"){let n=co(i,o),s=Ct(r,n.alignment);return e[t]={offset:s,...n},s+n.size}if(Array.isArray(i)){if(Array.isArray(i[0]))throw new Error(`Nested arrays are not supported for ${t}`);let n=i[0],s=i[1],a=jp(n,o),l=Ct(r,Qt(i,o));for(let c=0;c<s;c++)nc(e,`${t}[${c}]`,n,l+c*a,o);return l+a*s}if(sc(i)){let n=Qt(i,o),s=Ct(r,n);for(let[a,l]of Object.entries(i))s=nc(e,`${t}.${a}`,l,s,o);return Ct(s,n)}throw new Error(`Unsupported CompositeShaderType for ${t}`)}function Xp(e,t){if(typeof e=="string")return co(e,t).size;if(Array.isArray(e)){let r=e[0],o=e[1];if(Array.isArray(r))throw new Error("Nested arrays are not supported");return jp(r,t)*o}let i=0;for(let r of Object.values(e)){let o=r;i=Ct(i,Qt(o,t)),i+=Xp(o,t)}return Ct(i,Qt(e,t))}function Qt(e,t){if(typeof e=="string")return co(e,t).alignment;if(Array.isArray(e)){let r=e[0],o=Qt(r,t);return Yp(t)?Math.max(o,4):o}let i=1;for(let r of Object.values(e)){let o=Qt(r,t);i=Math.max(i,o)}return Kb(t)?Math.max(i,4):i}function Hp(e,t,i,r){return{alignment:e===2?2:4,size:e===3?3:e,components:e,columns:1,rows:e,columnStride:e===3?3:e,shaderType:t,type:i}}function jp(e,t){let i=Xp(e,t),r=Qt(e,t);return Gb(i,r,t)}function Gb(e,t,i){return Ct(e,Yp(i)?4:t)}function qb(e,t,i){return i==="std140"?4:Ct(e,t)}function Yp(e){return e==="std140"||e==="wgsl-uniform"}function Kb(e){return e==="std140"||e==="wgsl-uniform"}var ac=E(()=>{oc();is()});function lc(e){return(!ls||ls.byteLength<e)&&(ls=new ArrayBuffer(e)),ls}function cc(e,t){let i=lc(e.BYTES_PER_ELEMENT*t);return new e(i,0,t)}var ls,dc=E(()=>{});function Zb(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function er(e){return Array.isArray(e)?e.length===0||typeof e[0]=="number":Zb(e)}var uc=E(()=>{});function Qb(e){return!!e&&typeof e=="object"&&!Array.isArray(e)&&!ArrayBuffer.isView(e)}function Jb(e,t,i){return Array.prototype.slice.call(e,t,i)}var cs,Gp=E(()=>{dc();uc();Je();ac();cs=class{constructor(t){p(this,"layout");this.layout=t}has(t){return!!this.layout.fields[t]}get(t){let i=this.layout.fields[t];return i?{offset:i.offset,size:i.size}:void 0}getFlatUniformValues(t){let i={};for(let[r,o]of Object.entries(t)){let n=this.layout.uniformTypes[r];n?this._flattenCompositeValue(i,r,n,o):this.layout.fields[r]&&(i[r]=o)}return i}getData(t){let i=lc(this.layout.byteLength);new Uint8Array(i,0,this.layout.byteLength).fill(0);let r={i32:new Int32Array(i),u32:new Uint32Array(i),f32:new Float32Array(i),f16:new Uint16Array(i)},o=this.getFlatUniformValues(t);for(let[n,s]of Object.entries(o))this._writeLeafValue(r,n,s);return new Uint8Array(i,0,this.layout.byteLength)}_flattenCompositeValue(t,i,r,o){if(o!==void 0){if(typeof r=="string"||this.layout.fields[i]){t[i]=o;return}if(Array.isArray(r)){let n=r[0],s=r[1];if(Array.isArray(n))throw new Error(`Nested arrays are not supported for ${i}`);if(typeof n=="string"&&er(o)){this._flattenPackedArray(t,i,n,s,o);return}if(!Array.isArray(o)){w.warn(`Unsupported uniform array value for ${i}:`,o)();return}for(let a=0;a<Math.min(o.length,s);a++){let l=o[a];l!==void 0&&this._flattenCompositeValue(t,`${i}[${a}]`,n,l)}return}if(sc(r)&&Qb(o)){for(let[n,s]of Object.entries(o)){if(s===void 0)continue;let a=`${i}.${n}`;this._flattenCompositeValue(t,a,r[n],s)}return}w.warn(`Unsupported uniform value for ${i}:`,o)()}}_flattenPackedArray(t,i,r,o,n){let s=n,l=co(r,this.layout.layout).components;for(let c=0;c<o;c++){let d=c*l;if(d>=s.length)break;l===1?t[`${i}[${c}]`]=Number(s[d]):t[`${i}[${c}]`]=Jb(n,d,d+l)}}_writeLeafValue(t,i,r){let o=this.layout.fields[i];if(!o){w.warn(`Uniform ${i} not found in layout`)();return}let{type:n,components:s,columns:a,rows:l,offset:c,columnStride:d}=o,u=t[n];if(s===1){u[c]=Number(r);return}let f=r;if(a===1){for(let m=0;m<s;m++)u[c+m]=Number(f[m]??0);return}let h=0;for(let m=0;m<a;m++){let x=c+m*d;for(let S=0;S<l;S++)u[x+S]=Number(f[h++]??0)}}}});function qp(e,t,i=16){if(e===t)return!0;let r=e,o=t;if(!er(r)||!er(o)||r.length!==o.length)return!1;let n=Math.min(i,eT);if(r.length>n)return!1;for(let s=0;s<r.length;++s)if(o[s]!==r[s])return!1;return!0}function Kp(e){return er(e)?e.slice():e}var eT,Zp=E(()=>{uc();eT=128});var ds,Qp=E(()=>{Zp();ds=class{constructor(t){p(this,"name");p(this,"uniforms",{});p(this,"modifiedUniforms",{});p(this,"modified",!0);p(this,"bindingLayout",{});p(this,"needsRedraw","initialized");if(this.name=t?.name||"unnamed",t?.name&&t?.shaderLayout){let i=t?.shaderLayout.bindings?.find(o=>o.type==="uniform"&&o.name===t?.name);if(!i)throw new Error(t?.name);let r=i;for(let o of r.uniforms||[])this.bindingLayout[o.name]=o}}setUniforms(t){for(let[i,r]of Object.entries(t))this._setUniform(i,r),this.needsRedraw||this.setNeedsRedraw(`${this.name}.${i}=${r}`)}setNeedsRedraw(t){this.needsRedraw=this.needsRedraw||t}getAllUniforms(){return this.modifiedUniforms={},this.needsRedraw=!1,this.uniforms||{}}_setUniform(t,i){qp(this.uniforms[t],i)||(this.uniforms[t]=Kp(i),this.modifiedUniforms[t]=!0,this.modified=!0)}}});function iT(e){return e.type==="webgpu"?"wgsl-uniform":"std140"}var tT,ee,Jp=E(()=>{Nn();Je();ac();Qp();Gp();tT=1024,ee=class{constructor(t,i){p(this,"device");p(this,"uniformBlocks",new Map);p(this,"shaderBlockLayouts",new Map);p(this,"shaderBlockWriters",new Map);p(this,"uniformBuffers",new Map);this.device=t;for(let[r,o]of Object.entries(i)){let n=r,s=$p(o.uniformTypes??{},{layout:o.layout??iT(t)}),a=new cs(s);this.shaderBlockLayouts.set(n,s),this.shaderBlockWriters.set(n,a);let l=new ds({name:r});l.setUniforms(a.getFlatUniformValues(o.defaultUniforms||{})),this.uniformBlocks.set(n,l)}}destroy(){for(let t of this.uniformBuffers.values())t.destroy()}setUniforms(t){for(let[i,r]of Object.entries(t)){let o=i,s=this.shaderBlockWriters.get(o)?.getFlatUniformValues(r||{});this.uniformBlocks.get(o)?.setUniforms(s||{})}this.updateUniformBuffers()}getUniformBufferByteLength(t){let i=this.shaderBlockLayouts.get(t)?.byteLength||0;return Math.max(i,tT)}getUniformBufferData(t){let i=this.uniformBlocks.get(t)?.getAllUniforms()||{};return this.shaderBlockWriters.get(t)?.getData(i)||new Uint8Array(0)}createUniformBuffer(t,i){i&&this.setUniforms(i);let r=this.getUniformBufferByteLength(t),o=this.device.createBuffer({usage:U.UNIFORM|U.COPY_DST,byteLength:r}),n=this.getUniformBufferData(t);return o.write(n),o}getManagedUniformBuffer(t){if(!this.uniformBuffers.get(t)){let i=this.getUniformBufferByteLength(t),r=this.device.createBuffer({usage:U.UNIFORM|U.COPY_DST,byteLength:i});this.uniformBuffers.set(t,r)}return this.uniformBuffers.get(t)}updateUniformBuffers(){let t=!1;for(let i of this.uniformBlocks.keys()){let r=this.updateUniformBuffer(i);t||(t=r)}return t&&w.log(3,`UniformStore.updateUniformBuffers(): ${t}`)(),t}updateUniformBuffer(t){let i=this.uniformBlocks.get(t),r=this.uniformBuffers.get(t),o=!1;if(r&&i?.needsRedraw){o||(o=i.needsRedraw);let n=this.getUniformBufferData(t);r=this.uniformBuffers.get(t),r?.write(n);let s=this.uniformBlocks.get(t)?.getAllUniforms();w.log(4,`Writing to uniform buffer ${String(t)}`,n,s)()}return o}}});var te=E(()=>{hp();pp();Hl();yp();bp();Nn();Kl();Tp();Ql();ql();Ap();Jl();wp();Ep();Ip();Fp();kp();Np();Up();Lp();Wp();Vp();Jp();Bn();oc();is();On();Wn();Wl();Je();Mp();Yl();dc();ic()});var Jt,em=E(()=>{(function(e){e[e.DEPTH_BUFFER_BIT=256]="DEPTH_BUFFER_BIT",e[e.STENCIL_BUFFER_BIT=1024]="STENCIL_BUFFER_BIT",e[e.COLOR_BUFFER_BIT=16384]="COLOR_BUFFER_BIT",e[e.POINTS=0]="POINTS",e[e.LINES=1]="LINES",e[e.LINE_LOOP=2]="LINE_LOOP",e[e.LINE_STRIP=3]="LINE_STRIP",e[e.TRIANGLES=4]="TRIANGLES",e[e.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",e[e.TRIANGLE_FAN=6]="TRIANGLE_FAN",e[e.ZERO=0]="ZERO",e[e.ONE=1]="ONE",e[e.SRC_COLOR=768]="SRC_COLOR",e[e.ONE_MINUS_SRC_COLOR=769]="ONE_MINUS_SRC_COLOR",e[e.SRC_ALPHA=770]="SRC_ALPHA",e[e.ONE_MINUS_SRC_ALPHA=771]="ONE_MINUS_SRC_ALPHA",e[e.DST_ALPHA=772]="DST_ALPHA",e[e.ONE_MINUS_DST_ALPHA=773]="ONE_MINUS_DST_ALPHA",e[e.DST_COLOR=774]="DST_COLOR",e[e.ONE_MINUS_DST_COLOR=775]="ONE_MINUS_DST_COLOR",e[e.SRC_ALPHA_SATURATE=776]="SRC_ALPHA_SATURATE",e[e.CONSTANT_COLOR=32769]="CONSTANT_COLOR",e[e.ONE_MINUS_CONSTANT_COLOR=32770]="ONE_MINUS_CONSTANT_COLOR",e[e.CONSTANT_ALPHA=32771]="CONSTANT_ALPHA",e[e.ONE_MINUS_CONSTANT_ALPHA=32772]="ONE_MINUS_CONSTANT_ALPHA",e[e.FUNC_ADD=32774]="FUNC_ADD",e[e.FUNC_SUBTRACT=32778]="FUNC_SUBTRACT",e[e.FUNC_REVERSE_SUBTRACT=32779]="FUNC_REVERSE_SUBTRACT",e[e.BLEND_EQUATION=32777]="BLEND_EQUATION",e[e.BLEND_EQUATION_RGB=32777]="BLEND_EQUATION_RGB",e[e.BLEND_EQUATION_ALPHA=34877]="BLEND_EQUATION_ALPHA",e[e.BLEND_DST_RGB=32968]="BLEND_DST_RGB",e[e.BLEND_SRC_RGB=32969]="BLEND_SRC_RGB",e[e.BLEND_DST_ALPHA=32970]="BLEND_DST_ALPHA",e[e.BLEND_SRC_ALPHA=32971]="BLEND_SRC_ALPHA",e[e.BLEND_COLOR=32773]="BLEND_COLOR",e[e.ARRAY_BUFFER_BINDING=34964]="ARRAY_BUFFER_BINDING",e[e.ELEMENT_ARRAY_BUFFER_BINDING=34965]="ELEMENT_ARRAY_BUFFER_BINDING",e[e.LINE_WIDTH=2849]="LINE_WIDTH",e[e.ALIASED_POINT_SIZE_RANGE=33901]="ALIASED_POINT_SIZE_RANGE",e[e.ALIASED_LINE_WIDTH_RANGE=33902]="ALIASED_LINE_WIDTH_RANGE",e[e.CULL_FACE_MODE=2885]="CULL_FACE_MODE",e[e.FRONT_FACE=2886]="FRONT_FACE",e[e.DEPTH_RANGE=2928]="DEPTH_RANGE",e[e.DEPTH_WRITEMASK=2930]="DEPTH_WRITEMASK",e[e.DEPTH_CLEAR_VALUE=2931]="DEPTH_CLEAR_VALUE",e[e.DEPTH_FUNC=2932]="DEPTH_FUNC",e[e.STENCIL_CLEAR_VALUE=2961]="STENCIL_CLEAR_VALUE",e[e.STENCIL_FUNC=2962]="STENCIL_FUNC",e[e.STENCIL_FAIL=2964]="STENCIL_FAIL",e[e.STENCIL_PASS_DEPTH_FAIL=2965]="STENCIL_PASS_DEPTH_FAIL",e[e.STENCIL_PASS_DEPTH_PASS=2966]="STENCIL_PASS_DEPTH_PASS",e[e.STENCIL_REF=2967]="STENCIL_REF",e[e.STENCIL_VALUE_MASK=2963]="STENCIL_VALUE_MASK",e[e.STENCIL_WRITEMASK=2968]="STENCIL_WRITEMASK",e[e.STENCIL_BACK_FUNC=34816]="STENCIL_BACK_FUNC",e[e.STENCIL_BACK_FAIL=34817]="STENCIL_BACK_FAIL",e[e.STENCIL_BACK_PASS_DEPTH_FAIL=34818]="STENCIL_BACK_PASS_DEPTH_FAIL",e[e.STENCIL_BACK_PASS_DEPTH_PASS=34819]="STENCIL_BACK_PASS_DEPTH_PASS",e[e.STENCIL_BACK_REF=36003]="STENCIL_BACK_REF",e[e.STENCIL_BACK_VALUE_MASK=36004]="STENCIL_BACK_VALUE_MASK",e[e.STENCIL_BACK_WRITEMASK=36005]="STENCIL_BACK_WRITEMASK",e[e.VIEWPORT=2978]="VIEWPORT",e[e.SCISSOR_BOX=3088]="SCISSOR_BOX",e[e.COLOR_CLEAR_VALUE=3106]="COLOR_CLEAR_VALUE",e[e.COLOR_WRITEMASK=3107]="COLOR_WRITEMASK",e[e.UNPACK_ALIGNMENT=3317]="UNPACK_ALIGNMENT",e[e.PACK_ALIGNMENT=3333]="PACK_ALIGNMENT",e[e.MAX_TEXTURE_SIZE=3379]="MAX_TEXTURE_SIZE",e[e.MAX_VIEWPORT_DIMS=3386]="MAX_VIEWPORT_DIMS",e[e.SUBPIXEL_BITS=3408]="SUBPIXEL_BITS",e[e.RED_BITS=3410]="RED_BITS",e[e.GREEN_BITS=3411]="GREEN_BITS",e[e.BLUE_BITS=3412]="BLUE_BITS",e[e.ALPHA_BITS=3413]="ALPHA_BITS",e[e.DEPTH_BITS=3414]="DEPTH_BITS",e[e.STENCIL_BITS=3415]="STENCIL_BITS",e[e.POLYGON_OFFSET_UNITS=10752]="POLYGON_OFFSET_UNITS",e[e.POLYGON_OFFSET_FACTOR=32824]="POLYGON_OFFSET_FACTOR",e[e.TEXTURE_BINDING_2D=32873]="TEXTURE_BINDING_2D",e[e.SAMPLE_BUFFERS=32936]="SAMPLE_BUFFERS",e[e.SAMPLES=32937]="SAMPLES",e[e.SAMPLE_COVERAGE_VALUE=32938]="SAMPLE_COVERAGE_VALUE",e[e.SAMPLE_COVERAGE_INVERT=32939]="SAMPLE_COVERAGE_INVERT",e[e.COMPRESSED_TEXTURE_FORMATS=34467]="COMPRESSED_TEXTURE_FORMATS",e[e.VENDOR=7936]="VENDOR",e[e.RENDERER=7937]="RENDERER",e[e.VERSION=7938]="VERSION",e[e.IMPLEMENTATION_COLOR_READ_TYPE=35738]="IMPLEMENTATION_COLOR_READ_TYPE",e[e.IMPLEMENTATION_COLOR_READ_FORMAT=35739]="IMPLEMENTATION_COLOR_READ_FORMAT",e[e.BROWSER_DEFAULT_WEBGL=37444]="BROWSER_DEFAULT_WEBGL",e[e.STATIC_DRAW=35044]="STATIC_DRAW",e[e.STREAM_DRAW=35040]="STREAM_DRAW",e[e.DYNAMIC_DRAW=35048]="DYNAMIC_DRAW",e[e.ARRAY_BUFFER=34962]="ARRAY_BUFFER",e[e.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",e[e.BUFFER_SIZE=34660]="BUFFER_SIZE",e[e.BUFFER_USAGE=34661]="BUFFER_USAGE",e[e.CURRENT_VERTEX_ATTRIB=34342]="CURRENT_VERTEX_ATTRIB",e[e.VERTEX_ATTRIB_ARRAY_ENABLED=34338]="VERTEX_ATTRIB_ARRAY_ENABLED",e[e.VERTEX_ATTRIB_ARRAY_SIZE=34339]="VERTEX_ATTRIB_ARRAY_SIZE",e[e.VERTEX_ATTRIB_ARRAY_STRIDE=34340]="VERTEX_ATTRIB_ARRAY_STRIDE",e[e.VERTEX_ATTRIB_ARRAY_TYPE=34341]="VERTEX_ATTRIB_ARRAY_TYPE",e[e.VERTEX_ATTRIB_ARRAY_NORMALIZED=34922]="VERTEX_ATTRIB_ARRAY_NORMALIZED",e[e.VERTEX_ATTRIB_ARRAY_POINTER=34373]="VERTEX_ATTRIB_ARRAY_POINTER",e[e.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING=34975]="VERTEX_ATTRIB_ARRAY_BUFFER_BINDING",e[e.CULL_FACE=2884]="CULL_FACE",e[e.FRONT=1028]="FRONT",e[e.BACK=1029]="BACK",e[e.FRONT_AND_BACK=1032]="FRONT_AND_BACK",e[e.BLEND=3042]="BLEND",e[e.DEPTH_TEST=2929]="DEPTH_TEST",e[e.DITHER=3024]="DITHER",e[e.POLYGON_OFFSET_FILL=32823]="POLYGON_OFFSET_FILL",e[e.SAMPLE_ALPHA_TO_COVERAGE=32926]="SAMPLE_ALPHA_TO_COVERAGE",e[e.SAMPLE_COVERAGE=32928]="SAMPLE_COVERAGE",e[e.SCISSOR_TEST=3089]="SCISSOR_TEST",e[e.STENCIL_TEST=2960]="STENCIL_TEST",e[e.NO_ERROR=0]="NO_ERROR",e[e.INVALID_ENUM=1280]="INVALID_ENUM",e[e.INVALID_VALUE=1281]="INVALID_VALUE",e[e.INVALID_OPERATION=1282]="INVALID_OPERATION",e[e.OUT_OF_MEMORY=1285]="OUT_OF_MEMORY",e[e.CONTEXT_LOST_WEBGL=37442]="CONTEXT_LOST_WEBGL",e[e.CW=2304]="CW",e[e.CCW=2305]="CCW",e[e.DONT_CARE=4352]="DONT_CARE",e[e.FASTEST=4353]="FASTEST",e[e.NICEST=4354]="NICEST",e[e.GENERATE_MIPMAP_HINT=33170]="GENERATE_MIPMAP_HINT",e[e.BYTE=5120]="BYTE",e[e.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",e[e.SHORT=5122]="SHORT",e[e.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",e[e.INT=5124]="INT",e[e.UNSIGNED_INT=5125]="UNSIGNED_INT",e[e.FLOAT=5126]="FLOAT",e[e.DOUBLE=5130]="DOUBLE",e[e.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",e[e.ALPHA=6406]="ALPHA",e[e.RGB=6407]="RGB",e[e.RGBA=6408]="RGBA",e[e.LUMINANCE=6409]="LUMINANCE",e[e.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",e[e.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",e[e.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",e[e.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",e[e.FRAGMENT_SHADER=35632]="FRAGMENT_SHADER",e[e.VERTEX_SHADER=35633]="VERTEX_SHADER",e[e.COMPILE_STATUS=35713]="COMPILE_STATUS",e[e.DELETE_STATUS=35712]="DELETE_STATUS",e[e.LINK_STATUS=35714]="LINK_STATUS",e[e.VALIDATE_STATUS=35715]="VALIDATE_STATUS",e[e.ATTACHED_SHADERS=35717]="ATTACHED_SHADERS",e[e.ACTIVE_ATTRIBUTES=35721]="ACTIVE_ATTRIBUTES",e[e.ACTIVE_UNIFORMS=35718]="ACTIVE_UNIFORMS",e[e.MAX_VERTEX_ATTRIBS=34921]="MAX_VERTEX_ATTRIBS",e[e.MAX_VERTEX_UNIFORM_VECTORS=36347]="MAX_VERTEX_UNIFORM_VECTORS",e[e.MAX_VARYING_VECTORS=36348]="MAX_VARYING_VECTORS",e[e.MAX_COMBINED_TEXTURE_IMAGE_UNITS=35661]="MAX_COMBINED_TEXTURE_IMAGE_UNITS",e[e.MAX_VERTEX_TEXTURE_IMAGE_UNITS=35660]="MAX_VERTEX_TEXTURE_IMAGE_UNITS",e[e.MAX_TEXTURE_IMAGE_UNITS=34930]="MAX_TEXTURE_IMAGE_UNITS",e[e.MAX_FRAGMENT_UNIFORM_VECTORS=36349]="MAX_FRAGMENT_UNIFORM_VECTORS",e[e.SHADER_TYPE=35663]="SHADER_TYPE",e[e.SHADING_LANGUAGE_VERSION=35724]="SHADING_LANGUAGE_VERSION",e[e.CURRENT_PROGRAM=35725]="CURRENT_PROGRAM",e[e.NEVER=512]="NEVER",e[e.LESS=513]="LESS",e[e.EQUAL=514]="EQUAL",e[e.LEQUAL=515]="LEQUAL",e[e.GREATER=516]="GREATER",e[e.NOTEQUAL=517]="NOTEQUAL",e[e.GEQUAL=518]="GEQUAL",e[e.ALWAYS=519]="ALWAYS",e[e.KEEP=7680]="KEEP",e[e.REPLACE=7681]="REPLACE",e[e.INCR=7682]="INCR",e[e.DECR=7683]="DECR",e[e.INVERT=5386]="INVERT",e[e.INCR_WRAP=34055]="INCR_WRAP",e[e.DECR_WRAP=34056]="DECR_WRAP",e[e.NEAREST=9728]="NEAREST",e[e.LINEAR=9729]="LINEAR",e[e.NEAREST_MIPMAP_NEAREST=9984]="NEAREST_MIPMAP_NEAREST",e[e.LINEAR_MIPMAP_NEAREST=9985]="LINEAR_MIPMAP_NEAREST",e[e.NEAREST_MIPMAP_LINEAR=9986]="NEAREST_MIPMAP_LINEAR",e[e.LINEAR_MIPMAP_LINEAR=9987]="LINEAR_MIPMAP_LINEAR",e[e.TEXTURE_MAG_FILTER=10240]="TEXTURE_MAG_FILTER",e[e.TEXTURE_MIN_FILTER=10241]="TEXTURE_MIN_FILTER",e[e.TEXTURE_WRAP_S=10242]="TEXTURE_WRAP_S",e[e.TEXTURE_WRAP_T=10243]="TEXTURE_WRAP_T",e[e.TEXTURE_2D=3553]="TEXTURE_2D",e[e.TEXTURE=5890]="TEXTURE",e[e.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",e[e.TEXTURE_BINDING_CUBE_MAP=34068]="TEXTURE_BINDING_CUBE_MAP",e[e.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",e[e.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",e[e.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",e[e.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",e[e.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",e[e.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z",e[e.MAX_CUBE_MAP_TEXTURE_SIZE=34076]="MAX_CUBE_MAP_TEXTURE_SIZE",e[e.TEXTURE0=33984]="TEXTURE0",e[e.ACTIVE_TEXTURE=34016]="ACTIVE_TEXTURE",e[e.REPEAT=10497]="REPEAT",e[e.CLAMP_TO_EDGE=33071]="CLAMP_TO_EDGE",e[e.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT",e[e.TEXTURE_WIDTH=4096]="TEXTURE_WIDTH",e[e.TEXTURE_HEIGHT=4097]="TEXTURE_HEIGHT",e[e.FLOAT_VEC2=35664]="FLOAT_VEC2",e[e.FLOAT_VEC3=35665]="FLOAT_VEC3",e[e.FLOAT_VEC4=35666]="FLOAT_VEC4",e[e.INT_VEC2=35667]="INT_VEC2",e[e.INT_VEC3=35668]="INT_VEC3",e[e.INT_VEC4=35669]="INT_VEC4",e[e.BOOL=35670]="BOOL",e[e.BOOL_VEC2=35671]="BOOL_VEC2",e[e.BOOL_VEC3=35672]="BOOL_VEC3",e[e.BOOL_VEC4=35673]="BOOL_VEC4",e[e.FLOAT_MAT2=35674]="FLOAT_MAT2",e[e.FLOAT_MAT3=35675]="FLOAT_MAT3",e[e.FLOAT_MAT4=35676]="FLOAT_MAT4",e[e.SAMPLER_2D=35678]="SAMPLER_2D",e[e.SAMPLER_CUBE=35680]="SAMPLER_CUBE",e[e.LOW_FLOAT=36336]="LOW_FLOAT",e[e.MEDIUM_FLOAT=36337]="MEDIUM_FLOAT",e[e.HIGH_FLOAT=36338]="HIGH_FLOAT",e[e.LOW_INT=36339]="LOW_INT",e[e.MEDIUM_INT=36340]="MEDIUM_INT",e[e.HIGH_INT=36341]="HIGH_INT",e[e.FRAMEBUFFER=36160]="FRAMEBUFFER",e[e.RENDERBUFFER=36161]="RENDERBUFFER",e[e.RGBA4=32854]="RGBA4",e[e.RGB5_A1=32855]="RGB5_A1",e[e.RGB565=36194]="RGB565",e[e.DEPTH_COMPONENT16=33189]="DEPTH_COMPONENT16",e[e.STENCIL_INDEX=6401]="STENCIL_INDEX",e[e.STENCIL_INDEX8=36168]="STENCIL_INDEX8",e[e.DEPTH_STENCIL=34041]="DEPTH_STENCIL",e[e.RENDERBUFFER_WIDTH=36162]="RENDERBUFFER_WIDTH",e[e.RENDERBUFFER_HEIGHT=36163]="RENDERBUFFER_HEIGHT",e[e.RENDERBUFFER_INTERNAL_FORMAT=36164]="RENDERBUFFER_INTERNAL_FORMAT",e[e.RENDERBUFFER_RED_SIZE=36176]="RENDERBUFFER_RED_SIZE",e[e.RENDERBUFFER_GREEN_SIZE=36177]="RENDERBUFFER_GREEN_SIZE",e[e.RENDERBUFFER_BLUE_SIZE=36178]="RENDERBUFFER_BLUE_SIZE",e[e.RENDERBUFFER_ALPHA_SIZE=36179]="RENDERBUFFER_ALPHA_SIZE",e[e.RENDERBUFFER_DEPTH_SIZE=36180]="RENDERBUFFER_DEPTH_SIZE",e[e.RENDERBUFFER_STENCIL_SIZE=36181]="RENDERBUFFER_STENCIL_SIZE",e[e.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE=36048]="FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE",e[e.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME=36049]="FRAMEBUFFER_ATTACHMENT_OBJECT_NAME",e[e.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL=36050]="FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL",e[e.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE=36051]="FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE",e[e.COLOR_ATTACHMENT0=36064]="COLOR_ATTACHMENT0",e[e.DEPTH_ATTACHMENT=36096]="DEPTH_ATTACHMENT",e[e.STENCIL_ATTACHMENT=36128]="STENCIL_ATTACHMENT",e[e.DEPTH_STENCIL_ATTACHMENT=33306]="DEPTH_STENCIL_ATTACHMENT",e[e.NONE=0]="NONE",e[e.FRAMEBUFFER_COMPLETE=36053]="FRAMEBUFFER_COMPLETE",e[e.FRAMEBUFFER_INCOMPLETE_ATTACHMENT=36054]="FRAMEBUFFER_INCOMPLETE_ATTACHMENT",e[e.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT=36055]="FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT",e[e.FRAMEBUFFER_INCOMPLETE_DIMENSIONS=36057]="FRAMEBUFFER_INCOMPLETE_DIMENSIONS",e[e.FRAMEBUFFER_UNSUPPORTED=36061]="FRAMEBUFFER_UNSUPPORTED",e[e.FRAMEBUFFER_BINDING=36006]="FRAMEBUFFER_BINDING",e[e.RENDERBUFFER_BINDING=36007]="RENDERBUFFER_BINDING",e[e.READ_FRAMEBUFFER=36008]="READ_FRAMEBUFFER",e[e.DRAW_FRAMEBUFFER=36009]="DRAW_FRAMEBUFFER",e[e.MAX_RENDERBUFFER_SIZE=34024]="MAX_RENDERBUFFER_SIZE",e[e.INVALID_FRAMEBUFFER_OPERATION=1286]="INVALID_FRAMEBUFFER_OPERATION",e[e.UNPACK_FLIP_Y_WEBGL=37440]="UNPACK_FLIP_Y_WEBGL",e[e.UNPACK_PREMULTIPLY_ALPHA_WEBGL=37441]="UNPACK_PREMULTIPLY_ALPHA_WEBGL",e[e.UNPACK_COLORSPACE_CONVERSION_WEBGL=37443]="UNPACK_COLORSPACE_CONVERSION_WEBGL",e[e.READ_BUFFER=3074]="READ_BUFFER",e[e.UNPACK_ROW_LENGTH=3314]="UNPACK_ROW_LENGTH",e[e.UNPACK_SKIP_ROWS=3315]="UNPACK_SKIP_ROWS",e[e.UNPACK_SKIP_PIXELS=3316]="UNPACK_SKIP_PIXELS",e[e.PACK_ROW_LENGTH=3330]="PACK_ROW_LENGTH",e[e.PACK_SKIP_ROWS=3331]="PACK_SKIP_ROWS",e[e.PACK_SKIP_PIXELS=3332]="PACK_SKIP_PIXELS",e[e.TEXTURE_BINDING_3D=32874]="TEXTURE_BINDING_3D",e[e.UNPACK_SKIP_IMAGES=32877]="UNPACK_SKIP_IMAGES",e[e.UNPACK_IMAGE_HEIGHT=32878]="UNPACK_IMAGE_HEIGHT",e[e.MAX_3D_TEXTURE_SIZE=32883]="MAX_3D_TEXTURE_SIZE",e[e.MAX_ELEMENTS_VERTICES=33e3]="MAX_ELEMENTS_VERTICES",e[e.MAX_ELEMENTS_INDICES=33001]="MAX_ELEMENTS_INDICES",e[e.MAX_TEXTURE_LOD_BIAS=34045]="MAX_TEXTURE_LOD_BIAS",e[e.MAX_FRAGMENT_UNIFORM_COMPONENTS=35657]="MAX_FRAGMENT_UNIFORM_COMPONENTS",e[e.MAX_VERTEX_UNIFORM_COMPONENTS=35658]="MAX_VERTEX_UNIFORM_COMPONENTS",e[e.MAX_ARRAY_TEXTURE_LAYERS=35071]="MAX_ARRAY_TEXTURE_LAYERS",e[e.MIN_PROGRAM_TEXEL_OFFSET=35076]="MIN_PROGRAM_TEXEL_OFFSET",e[e.MAX_PROGRAM_TEXEL_OFFSET=35077]="MAX_PROGRAM_TEXEL_OFFSET",e[e.MAX_VARYING_COMPONENTS=35659]="MAX_VARYING_COMPONENTS",e[e.FRAGMENT_SHADER_DERIVATIVE_HINT=35723]="FRAGMENT_SHADER_DERIVATIVE_HINT",e[e.RASTERIZER_DISCARD=35977]="RASTERIZER_DISCARD",e[e.VERTEX_ARRAY_BINDING=34229]="VERTEX_ARRAY_BINDING",e[e.MAX_VERTEX_OUTPUT_COMPONENTS=37154]="MAX_VERTEX_OUTPUT_COMPONENTS",e[e.MAX_FRAGMENT_INPUT_COMPONENTS=37157]="MAX_FRAGMENT_INPUT_COMPONENTS",e[e.MAX_SERVER_WAIT_TIMEOUT=37137]="MAX_SERVER_WAIT_TIMEOUT",e[e.MAX_ELEMENT_INDEX=36203]="MAX_ELEMENT_INDEX",e[e.RED=6403]="RED",e[e.RGB8=32849]="RGB8",e[e.RGBA8=32856]="RGBA8",e[e.RGB10_A2=32857]="RGB10_A2",e[e.TEXTURE_3D=32879]="TEXTURE_3D",e[e.TEXTURE_WRAP_R=32882]="TEXTURE_WRAP_R",e[e.TEXTURE_MIN_LOD=33082]="TEXTURE_MIN_LOD",e[e.TEXTURE_MAX_LOD=33083]="TEXTURE_MAX_LOD",e[e.TEXTURE_BASE_LEVEL=33084]="TEXTURE_BASE_LEVEL",e[e.TEXTURE_MAX_LEVEL=33085]="TEXTURE_MAX_LEVEL",e[e.TEXTURE_COMPARE_MODE=34892]="TEXTURE_COMPARE_MODE",e[e.TEXTURE_COMPARE_FUNC=34893]="TEXTURE_COMPARE_FUNC",e[e.SRGB=35904]="SRGB",e[e.SRGB8=35905]="SRGB8",e[e.SRGB8_ALPHA8=35907]="SRGB8_ALPHA8",e[e.COMPARE_REF_TO_TEXTURE=34894]="COMPARE_REF_TO_TEXTURE",e[e.RGBA32F=34836]="RGBA32F",e[e.RGB32F=34837]="RGB32F",e[e.RGBA16F=34842]="RGBA16F",e[e.RGB16F=34843]="RGB16F",e[e.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY",e[e.TEXTURE_BINDING_2D_ARRAY=35869]="TEXTURE_BINDING_2D_ARRAY",e[e.R11F_G11F_B10F=35898]="R11F_G11F_B10F",e[e.RGB9_E5=35901]="RGB9_E5",e[e.RGBA32UI=36208]="RGBA32UI",e[e.RGB32UI=36209]="RGB32UI",e[e.RGBA16UI=36214]="RGBA16UI",e[e.RGB16UI=36215]="RGB16UI",e[e.RGBA8UI=36220]="RGBA8UI",e[e.RGB8UI=36221]="RGB8UI",e[e.RGBA32I=36226]="RGBA32I",e[e.RGB32I=36227]="RGB32I",e[e.RGBA16I=36232]="RGBA16I",e[e.RGB16I=36233]="RGB16I",e[e.RGBA8I=36238]="RGBA8I",e[e.RGB8I=36239]="RGB8I",e[e.RED_INTEGER=36244]="RED_INTEGER",e[e.RGB_INTEGER=36248]="RGB_INTEGER",e[e.RGBA_INTEGER=36249]="RGBA_INTEGER",e[e.R8=33321]="R8",e[e.RG8=33323]="RG8",e[e.R16F=33325]="R16F",e[e.R32F=33326]="R32F",e[e.RG16F=33327]="RG16F",e[e.RG32F=33328]="RG32F",e[e.R8I=33329]="R8I",e[e.R8UI=33330]="R8UI",e[e.R16I=33331]="R16I",e[e.R16UI=33332]="R16UI",e[e.R32I=33333]="R32I",e[e.R32UI=33334]="R32UI",e[e.RG8I=33335]="RG8I",e[e.RG8UI=33336]="RG8UI",e[e.RG16I=33337]="RG16I",e[e.RG16UI=33338]="RG16UI",e[e.RG32I=33339]="RG32I",e[e.RG32UI=33340]="RG32UI",e[e.R8_SNORM=36756]="R8_SNORM",e[e.RG8_SNORM=36757]="RG8_SNORM",e[e.RGB8_SNORM=36758]="RGB8_SNORM",e[e.RGBA8_SNORM=36759]="RGBA8_SNORM",e[e.RGB10_A2UI=36975]="RGB10_A2UI",e[e.TEXTURE_IMMUTABLE_FORMAT=37167]="TEXTURE_IMMUTABLE_FORMAT",e[e.TEXTURE_IMMUTABLE_LEVELS=33503]="TEXTURE_IMMUTABLE_LEVELS",e[e.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",e[e.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",e[e.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",e[e.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV",e[e.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",e[e.HALF_FLOAT=5131]="HALF_FLOAT",e[e.RG=33319]="RG",e[e.RG_INTEGER=33320]="RG_INTEGER",e[e.INT_2_10_10_10_REV=36255]="INT_2_10_10_10_REV",e[e.CURRENT_QUERY=34917]="CURRENT_QUERY",e[e.QUERY_RESULT=34918]="QUERY_RESULT",e[e.QUERY_RESULT_AVAILABLE=34919]="QUERY_RESULT_AVAILABLE",e[e.ANY_SAMPLES_PASSED=35887]="ANY_SAMPLES_PASSED",e[e.ANY_SAMPLES_PASSED_CONSERVATIVE=36202]="ANY_SAMPLES_PASSED_CONSERVATIVE",e[e.MAX_DRAW_BUFFERS=34852]="MAX_DRAW_BUFFERS",e[e.DRAW_BUFFER0=34853]="DRAW_BUFFER0",e[e.DRAW_BUFFER1=34854]="DRAW_BUFFER1",e[e.DRAW_BUFFER2=34855]="DRAW_BUFFER2",e[e.DRAW_BUFFER3=34856]="DRAW_BUFFER3",e[e.DRAW_BUFFER4=34857]="DRAW_BUFFER4",e[e.DRAW_BUFFER5=34858]="DRAW_BUFFER5",e[e.DRAW_BUFFER6=34859]="DRAW_BUFFER6",e[e.DRAW_BUFFER7=34860]="DRAW_BUFFER7",e[e.DRAW_BUFFER8=34861]="DRAW_BUFFER8",e[e.DRAW_BUFFER9=34862]="DRAW_BUFFER9",e[e.DRAW_BUFFER10=34863]="DRAW_BUFFER10",e[e.DRAW_BUFFER11=34864]="DRAW_BUFFER11",e[e.DRAW_BUFFER12=34865]="DRAW_BUFFER12",e[e.DRAW_BUFFER13=34866]="DRAW_BUFFER13",e[e.DRAW_BUFFER14=34867]="DRAW_BUFFER14",e[e.DRAW_BUFFER15=34868]="DRAW_BUFFER15",e[e.MAX_COLOR_ATTACHMENTS=36063]="MAX_COLOR_ATTACHMENTS",e[e.COLOR_ATTACHMENT1=36065]="COLOR_ATTACHMENT1",e[e.COLOR_ATTACHMENT2=36066]="COLOR_ATTACHMENT2",e[e.COLOR_ATTACHMENT3=36067]="COLOR_ATTACHMENT3",e[e.COLOR_ATTACHMENT4=36068]="COLOR_ATTACHMENT4",e[e.COLOR_ATTACHMENT5=36069]="COLOR_ATTACHMENT5",e[e.COLOR_ATTACHMENT6=36070]="COLOR_ATTACHMENT6",e[e.COLOR_ATTACHMENT7=36071]="COLOR_ATTACHMENT7",e[e.COLOR_ATTACHMENT8=36072]="COLOR_ATTACHMENT8",e[e.COLOR_ATTACHMENT9=36073]="COLOR_ATTACHMENT9",e[e.COLOR_ATTACHMENT10=36074]="COLOR_ATTACHMENT10",e[e.COLOR_ATTACHMENT11=36075]="COLOR_ATTACHMENT11",e[e.COLOR_ATTACHMENT12=36076]="COLOR_ATTACHMENT12",e[e.COLOR_ATTACHMENT13=36077]="COLOR_ATTACHMENT13",e[e.COLOR_ATTACHMENT14=36078]="COLOR_ATTACHMENT14",e[e.COLOR_ATTACHMENT15=36079]="COLOR_ATTACHMENT15",e[e.SAMPLER_3D=35679]="SAMPLER_3D",e[e.SAMPLER_2D_SHADOW=35682]="SAMPLER_2D_SHADOW",e[e.SAMPLER_2D_ARRAY=36289]="SAMPLER_2D_ARRAY",e[e.SAMPLER_2D_ARRAY_SHADOW=36292]="SAMPLER_2D_ARRAY_SHADOW",e[e.SAMPLER_CUBE_SHADOW=36293]="SAMPLER_CUBE_SHADOW",e[e.INT_SAMPLER_2D=36298]="INT_SAMPLER_2D",e[e.INT_SAMPLER_3D=36299]="INT_SAMPLER_3D",e[e.INT_SAMPLER_CUBE=36300]="INT_SAMPLER_CUBE",e[e.INT_SAMPLER_2D_ARRAY=36303]="INT_SAMPLER_2D_ARRAY",e[e.UNSIGNED_INT_SAMPLER_2D=36306]="UNSIGNED_INT_SAMPLER_2D",e[e.UNSIGNED_INT_SAMPLER_3D=36307]="UNSIGNED_INT_SAMPLER_3D",e[e.UNSIGNED_INT_SAMPLER_CUBE=36308]="UNSIGNED_INT_SAMPLER_CUBE",e[e.UNSIGNED_INT_SAMPLER_2D_ARRAY=36311]="UNSIGNED_INT_SAMPLER_2D_ARRAY",e[e.MAX_SAMPLES=36183]="MAX_SAMPLES",e[e.SAMPLER_BINDING=35097]="SAMPLER_BINDING",e[e.PIXEL_PACK_BUFFER=35051]="PIXEL_PACK_BUFFER",e[e.PIXEL_UNPACK_BUFFER=35052]="PIXEL_UNPACK_BUFFER",e[e.PIXEL_PACK_BUFFER_BINDING=35053]="PIXEL_PACK_BUFFER_BINDING",e[e.PIXEL_UNPACK_BUFFER_BINDING=35055]="PIXEL_UNPACK_BUFFER_BINDING",e[e.COPY_READ_BUFFER=36662]="COPY_READ_BUFFER",e[e.COPY_WRITE_BUFFER=36663]="COPY_WRITE_BUFFER",e[e.COPY_READ_BUFFER_BINDING=36662]="COPY_READ_BUFFER_BINDING",e[e.COPY_WRITE_BUFFER_BINDING=36663]="COPY_WRITE_BUFFER_BINDING",e[e.FLOAT_MAT2x3=35685]="FLOAT_MAT2x3",e[e.FLOAT_MAT2x4=35686]="FLOAT_MAT2x4",e[e.FLOAT_MAT3x2=35687]="FLOAT_MAT3x2",e[e.FLOAT_MAT3x4=35688]="FLOAT_MAT3x4",e[e.FLOAT_MAT4x2=35689]="FLOAT_MAT4x2",e[e.FLOAT_MAT4x3=35690]="FLOAT_MAT4x3",e[e.UNSIGNED_INT_VEC2=36294]="UNSIGNED_INT_VEC2",e[e.UNSIGNED_INT_VEC3=36295]="UNSIGNED_INT_VEC3",e[e.UNSIGNED_INT_VEC4=36296]="UNSIGNED_INT_VEC4",e[e.UNSIGNED_NORMALIZED=35863]="UNSIGNED_NORMALIZED",e[e.SIGNED_NORMALIZED=36764]="SIGNED_NORMALIZED",e[e.VERTEX_ATTRIB_ARRAY_INTEGER=35069]="VERTEX_ATTRIB_ARRAY_INTEGER",e[e.VERTEX_ATTRIB_ARRAY_DIVISOR=35070]="VERTEX_ATTRIB_ARRAY_DIVISOR",e[e.TRANSFORM_FEEDBACK_BUFFER_MODE=35967]="TRANSFORM_FEEDBACK_BUFFER_MODE",e[e.MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS=35968]="MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS",e[e.TRANSFORM_FEEDBACK_VARYINGS=35971]="TRANSFORM_FEEDBACK_VARYINGS",e[e.TRANSFORM_FEEDBACK_BUFFER_START=35972]="TRANSFORM_FEEDBACK_BUFFER_START",e[e.TRANSFORM_FEEDBACK_BUFFER_SIZE=35973]="TRANSFORM_FEEDBACK_BUFFER_SIZE",e[e.TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN=35976]="TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN",e[e.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS=35978]="MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS",e[e.MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS=35979]="MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS",e[e.INTERLEAVED_ATTRIBS=35980]="INTERLEAVED_ATTRIBS",e[e.SEPARATE_ATTRIBS=35981]="SEPARATE_ATTRIBS",e[e.TRANSFORM_FEEDBACK_BUFFER=35982]="TRANSFORM_FEEDBACK_BUFFER",e[e.TRANSFORM_FEEDBACK_BUFFER_BINDING=35983]="TRANSFORM_FEEDBACK_BUFFER_BINDING",e[e.TRANSFORM_FEEDBACK=36386]="TRANSFORM_FEEDBACK",e[e.TRANSFORM_FEEDBACK_PAUSED=36387]="TRANSFORM_FEEDBACK_PAUSED",e[e.TRANSFORM_FEEDBACK_ACTIVE=36388]="TRANSFORM_FEEDBACK_ACTIVE",e[e.TRANSFORM_FEEDBACK_BINDING=36389]="TRANSFORM_FEEDBACK_BINDING",e[e.FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING=33296]="FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING",e[e.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE=33297]="FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE",e[e.FRAMEBUFFER_ATTACHMENT_RED_SIZE=33298]="FRAMEBUFFER_ATTACHMENT_RED_SIZE",e[e.FRAMEBUFFER_ATTACHMENT_GREEN_SIZE=33299]="FRAMEBUFFER_ATTACHMENT_GREEN_SIZE",e[e.FRAMEBUFFER_ATTACHMENT_BLUE_SIZE=33300]="FRAMEBUFFER_ATTACHMENT_BLUE_SIZE",e[e.FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE=33301]="FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE",e[e.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE=33302]="FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE",e[e.FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE=33303]="FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE",e[e.FRAMEBUFFER_DEFAULT=33304]="FRAMEBUFFER_DEFAULT",e[e.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",e[e.DRAW_FRAMEBUFFER_BINDING=36006]="DRAW_FRAMEBUFFER_BINDING",e[e.READ_FRAMEBUFFER_BINDING=36010]="READ_FRAMEBUFFER_BINDING",e[e.RENDERBUFFER_SAMPLES=36011]="RENDERBUFFER_SAMPLES",e[e.FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER=36052]="FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER",e[e.FRAMEBUFFER_INCOMPLETE_MULTISAMPLE=36182]="FRAMEBUFFER_INCOMPLETE_MULTISAMPLE",e[e.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER",e[e.UNIFORM_BUFFER_BINDING=35368]="UNIFORM_BUFFER_BINDING",e[e.UNIFORM_BUFFER_START=35369]="UNIFORM_BUFFER_START",e[e.UNIFORM_BUFFER_SIZE=35370]="UNIFORM_BUFFER_SIZE",e[e.MAX_VERTEX_UNIFORM_BLOCKS=35371]="MAX_VERTEX_UNIFORM_BLOCKS",e[e.MAX_FRAGMENT_UNIFORM_BLOCKS=35373]="MAX_FRAGMENT_UNIFORM_BLOCKS",e[e.MAX_COMBINED_UNIFORM_BLOCKS=35374]="MAX_COMBINED_UNIFORM_BLOCKS",e[e.MAX_UNIFORM_BUFFER_BINDINGS=35375]="MAX_UNIFORM_BUFFER_BINDINGS",e[e.MAX_UNIFORM_BLOCK_SIZE=35376]="MAX_UNIFORM_BLOCK_SIZE",e[e.MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS=35377]="MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS",e[e.MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS=35379]="MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS",e[e.UNIFORM_BUFFER_OFFSET_ALIGNMENT=35380]="UNIFORM_BUFFER_OFFSET_ALIGNMENT",e[e.ACTIVE_UNIFORM_BLOCKS=35382]="ACTIVE_UNIFORM_BLOCKS",e[e.UNIFORM_TYPE=35383]="UNIFORM_TYPE",e[e.UNIFORM_SIZE=35384]="UNIFORM_SIZE",e[e.UNIFORM_BLOCK_INDEX=35386]="UNIFORM_BLOCK_INDEX",e[e.UNIFORM_OFFSET=35387]="UNIFORM_OFFSET",e[e.UNIFORM_ARRAY_STRIDE=35388]="UNIFORM_ARRAY_STRIDE",e[e.UNIFORM_MATRIX_STRIDE=35389]="UNIFORM_MATRIX_STRIDE",e[e.UNIFORM_IS_ROW_MAJOR=35390]="UNIFORM_IS_ROW_MAJOR",e[e.UNIFORM_BLOCK_BINDING=35391]="UNIFORM_BLOCK_BINDING",e[e.UNIFORM_BLOCK_DATA_SIZE=35392]="UNIFORM_BLOCK_DATA_SIZE",e[e.UNIFORM_BLOCK_ACTIVE_UNIFORMS=35394]="UNIFORM_BLOCK_ACTIVE_UNIFORMS",e[e.UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES=35395]="UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES",e[e.UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER=35396]="UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER",e[e.UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER=35398]="UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER",e[e.OBJECT_TYPE=37138]="OBJECT_TYPE",e[e.SYNC_CONDITION=37139]="SYNC_CONDITION",e[e.SYNC_STATUS=37140]="SYNC_STATUS",e[e.SYNC_FLAGS=37141]="SYNC_FLAGS",e[e.SYNC_FENCE=37142]="SYNC_FENCE",e[e.SYNC_GPU_COMMANDS_COMPLETE=37143]="SYNC_GPU_COMMANDS_COMPLETE",e[e.UNSIGNALED=37144]="UNSIGNALED",e[e.SIGNALED=37145]="SIGNALED",e[e.ALREADY_SIGNALED=37146]="ALREADY_SIGNALED",e[e.TIMEOUT_EXPIRED=37147]="TIMEOUT_EXPIRED",e[e.CONDITION_SATISFIED=37148]="CONDITION_SATISFIED",e[e.WAIT_FAILED=37149]="WAIT_FAILED",e[e.SYNC_FLUSH_COMMANDS_BIT=1]="SYNC_FLUSH_COMMANDS_BIT",e[e.COLOR=6144]="COLOR",e[e.DEPTH=6145]="DEPTH",e[e.STENCIL=6146]="STENCIL",e[e.MIN=32775]="MIN",e[e.MAX=32776]="MAX",e[e.DEPTH_COMPONENT24=33190]="DEPTH_COMPONENT24",e[e.STREAM_READ=35041]="STREAM_READ",e[e.STREAM_COPY=35042]="STREAM_COPY",e[e.STATIC_READ=35045]="STATIC_READ",e[e.STATIC_COPY=35046]="STATIC_COPY",e[e.DYNAMIC_READ=35049]="DYNAMIC_READ",e[e.DYNAMIC_COPY=35050]="DYNAMIC_COPY",e[e.DEPTH_COMPONENT32F=36012]="DEPTH_COMPONENT32F",e[e.DEPTH32F_STENCIL8=36013]="DEPTH32F_STENCIL8",e[e.INVALID_INDEX=4294967295]="INVALID_INDEX",e[e.TIMEOUT_IGNORED=-1]="TIMEOUT_IGNORED",e[e.MAX_CLIENT_WAIT_TIMEOUT_WEBGL=37447]="MAX_CLIENT_WAIT_TIMEOUT_WEBGL",e[e.UNMASKED_VENDOR_WEBGL=37445]="UNMASKED_VENDOR_WEBGL",e[e.UNMASKED_RENDERER_WEBGL=37446]="UNMASKED_RENDERER_WEBGL",e[e.MAX_TEXTURE_MAX_ANISOTROPY_EXT=34047]="MAX_TEXTURE_MAX_ANISOTROPY_EXT",e[e.TEXTURE_MAX_ANISOTROPY_EXT=34046]="TEXTURE_MAX_ANISOTROPY_EXT",e[e.R16_EXT=33322]="R16_EXT",e[e.RG16_EXT=33324]="RG16_EXT",e[e.RGB16_EXT=32852]="RGB16_EXT",e[e.RGBA16_EXT=32859]="RGBA16_EXT",e[e.R16_SNORM_EXT=36760]="R16_SNORM_EXT",e[e.RG16_SNORM_EXT=36761]="RG16_SNORM_EXT",e[e.RGB16_SNORM_EXT=36762]="RGB16_SNORM_EXT",e[e.RGBA16_SNORM_EXT=36763]="RGBA16_SNORM_EXT",e[e.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",e[e.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",e[e.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",e[e.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",e[e.COMPRESSED_SRGB_S3TC_DXT1_EXT=35916]="COMPRESSED_SRGB_S3TC_DXT1_EXT",e[e.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT=35917]="COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT",e[e.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT=35918]="COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT",e[e.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT=35919]="COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT",e[e.COMPRESSED_RED_RGTC1_EXT=36283]="COMPRESSED_RED_RGTC1_EXT",e[e.COMPRESSED_SIGNED_RED_RGTC1_EXT=36284]="COMPRESSED_SIGNED_RED_RGTC1_EXT",e[e.COMPRESSED_RED_GREEN_RGTC2_EXT=36285]="COMPRESSED_RED_GREEN_RGTC2_EXT",e[e.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT=36286]="COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT",e[e.COMPRESSED_RGBA_BPTC_UNORM_EXT=36492]="COMPRESSED_RGBA_BPTC_UNORM_EXT",e[e.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT=36493]="COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT",e[e.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT=36494]="COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT",e[e.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT=36495]="COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT",e[e.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",e[e.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",e[e.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",e[e.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",e[e.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",e[e.COMPRESSED_RGBA8_ETC2_EAC=37493]="COMPRESSED_RGBA8_ETC2_EAC",e[e.COMPRESSED_SRGB8_ETC2=37494]="COMPRESSED_SRGB8_ETC2",e[e.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37495]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC",e[e.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37496]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",e[e.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37497]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",e[e.COMPRESSED_RGB_PVRTC_4BPPV1_IMG=35840]="COMPRESSED_RGB_PVRTC_4BPPV1_IMG",e[e.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG=35842]="COMPRESSED_RGBA_PVRTC_4BPPV1_IMG",e[e.COMPRESSED_RGB_PVRTC_2BPPV1_IMG=35841]="COMPRESSED_RGB_PVRTC_2BPPV1_IMG",e[e.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG=35843]="COMPRESSED_RGBA_PVRTC_2BPPV1_IMG",e[e.COMPRESSED_RGB_ETC1_WEBGL=36196]="COMPRESSED_RGB_ETC1_WEBGL",e[e.COMPRESSED_RGB_ATC_WEBGL=35986]="COMPRESSED_RGB_ATC_WEBGL",e[e.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL=35986]="COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL",e[e.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL=34798]="COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL",e[e.COMPRESSED_RGBA_ASTC_4x4_KHR=37808]="COMPRESSED_RGBA_ASTC_4x4_KHR",e[e.COMPRESSED_RGBA_ASTC_5x4_KHR=37809]="COMPRESSED_RGBA_ASTC_5x4_KHR",e[e.COMPRESSED_RGBA_ASTC_5x5_KHR=37810]="COMPRESSED_RGBA_ASTC_5x5_KHR",e[e.COMPRESSED_RGBA_ASTC_6x5_KHR=37811]="COMPRESSED_RGBA_ASTC_6x5_KHR",e[e.COMPRESSED_RGBA_ASTC_6x6_KHR=37812]="COMPRESSED_RGBA_ASTC_6x6_KHR",e[e.COMPRESSED_RGBA_ASTC_8x5_KHR=37813]="COMPRESSED_RGBA_ASTC_8x5_KHR",e[e.COMPRESSED_RGBA_ASTC_8x6_KHR=37814]="COMPRESSED_RGBA_ASTC_8x6_KHR",e[e.COMPRESSED_RGBA_ASTC_8x8_KHR=37815]="COMPRESSED_RGBA_ASTC_8x8_KHR",e[e.COMPRESSED_RGBA_ASTC_10x5_KHR=37816]="COMPRESSED_RGBA_ASTC_10x5_KHR",e[e.COMPRESSED_RGBA_ASTC_10x6_KHR=37817]="COMPRESSED_RGBA_ASTC_10x6_KHR",e[e.COMPRESSED_RGBA_ASTC_10x8_KHR=37818]="COMPRESSED_RGBA_ASTC_10x8_KHR",e[e.COMPRESSED_RGBA_ASTC_10x10_KHR=37819]="COMPRESSED_RGBA_ASTC_10x10_KHR",e[e.COMPRESSED_RGBA_ASTC_12x10_KHR=37820]="COMPRESSED_RGBA_ASTC_12x10_KHR",e[e.COMPRESSED_RGBA_ASTC_12x12_KHR=37821]="COMPRESSED_RGBA_ASTC_12x12_KHR",e[e.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR=37840]="COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR",e[e.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR=37841]="COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR",e[e.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR=37842]="COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR",e[e.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR=37843]="COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR",e[e.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR=37844]="COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR",e[e.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR=37845]="COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR",e[e.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR=37846]="COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR",e[e.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR=37847]="COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR",e[e.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR=37848]="COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR",e[e.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR=37849]="COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR",e[e.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR=37850]="COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR",e[e.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR=37851]="COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR",e[e.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR=37852]="COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR",e[e.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR=37853]="COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR",e[e.QUERY_COUNTER_BITS_EXT=34916]="QUERY_COUNTER_BITS_EXT",e[e.CURRENT_QUERY_EXT=34917]="CURRENT_QUERY_EXT",e[e.QUERY_RESULT_EXT=34918]="QUERY_RESULT_EXT",e[e.QUERY_RESULT_AVAILABLE_EXT=34919]="QUERY_RESULT_AVAILABLE_EXT",e[e.TIME_ELAPSED_EXT=35007]="TIME_ELAPSED_EXT",e[e.TIMESTAMP_EXT=36392]="TIMESTAMP_EXT",e[e.GPU_DISJOINT_EXT=36795]="GPU_DISJOINT_EXT",e[e.COMPLETION_STATUS_KHR=37297]="COMPLETION_STATUS_KHR",e[e.DEPTH_CLAMP_EXT=34383]="DEPTH_CLAMP_EXT",e[e.FIRST_VERTEX_CONVENTION_WEBGL=36429]="FIRST_VERTEX_CONVENTION_WEBGL",e[e.LAST_VERTEX_CONVENTION_WEBGL=36430]="LAST_VERTEX_CONVENTION_WEBGL",e[e.PROVOKING_VERTEX_WEBL=36431]="PROVOKING_VERTEX_WEBL",e[e.POLYGON_MODE_WEBGL=2880]="POLYGON_MODE_WEBGL",e[e.POLYGON_OFFSET_LINE_WEBGL=10754]="POLYGON_OFFSET_LINE_WEBGL",e[e.LINE_WEBGL=6913]="LINE_WEBGL",e[e.FILL_WEBGL=6914]="FILL_WEBGL",e[e.MAX_CLIP_DISTANCES_WEBGL=3378]="MAX_CLIP_DISTANCES_WEBGL",e[e.MAX_CULL_DISTANCES_WEBGL=33529]="MAX_CULL_DISTANCES_WEBGL",e[e.MAX_COMBINED_CLIP_AND_CULL_DISTANCES_WEBGL=33530]="MAX_COMBINED_CLIP_AND_CULL_DISTANCES_WEBGL",e[e.CLIP_DISTANCE0_WEBGL=12288]="CLIP_DISTANCE0_WEBGL",e[e.CLIP_DISTANCE1_WEBGL=12289]="CLIP_DISTANCE1_WEBGL",e[e.CLIP_DISTANCE2_WEBGL=12290]="CLIP_DISTANCE2_WEBGL",e[e.CLIP_DISTANCE3_WEBGL=12291]="CLIP_DISTANCE3_WEBGL",e[e.CLIP_DISTANCE4_WEBGL=12292]="CLIP_DISTANCE4_WEBGL",e[e.CLIP_DISTANCE5_WEBGL=12293]="CLIP_DISTANCE5_WEBGL",e[e.CLIP_DISTANCE6_WEBGL=12294]="CLIP_DISTANCE6_WEBGL",e[e.CLIP_DISTANCE7_WEBGL=12295]="CLIP_DISTANCE7_WEBGL",e[e.POLYGON_OFFSET_CLAMP_EXT=36379]="POLYGON_OFFSET_CLAMP_EXT",e[e.LOWER_LEFT_EXT=36001]="LOWER_LEFT_EXT",e[e.UPPER_LEFT_EXT=36002]="UPPER_LEFT_EXT",e[e.NEGATIVE_ONE_TO_ONE_EXT=37726]="NEGATIVE_ONE_TO_ONE_EXT",e[e.ZERO_TO_ONE_EXT=37727]="ZERO_TO_ONE_EXT",e[e.CLIP_ORIGIN_EXT=37724]="CLIP_ORIGIN_EXT",e[e.CLIP_DEPTH_MODE_EXT=37725]="CLIP_DEPTH_MODE_EXT",e[e.SRC1_COLOR_WEBGL=35065]="SRC1_COLOR_WEBGL",e[e.SRC1_ALPHA_WEBGL=34185]="SRC1_ALPHA_WEBGL",e[e.ONE_MINUS_SRC1_COLOR_WEBGL=35066]="ONE_MINUS_SRC1_COLOR_WEBGL",e[e.ONE_MINUS_SRC1_ALPHA_WEBGL=35067]="ONE_MINUS_SRC1_ALPHA_WEBGL",e[e.MAX_DUAL_SOURCE_DRAW_BUFFERS_WEBGL=35068]="MAX_DUAL_SOURCE_DRAW_BUFFERS_WEBGL",e[e.MIRROR_CLAMP_TO_EDGE_EXT=34627]="MIRROR_CLAMP_TO_EDGE_EXT"})(Jt||(Jt={}))});var tm=E(()=>{em()});function im(e=!0){let t=HTMLCanvasElement.prototype;if(!e&&t.originalGetContext){t.getContext=t.originalGetContext,t.originalGetContext=void 0;return}t.originalGetContext=t.getContext,t.getContext=function(i,r){if(i==="webgl"||i==="experimental-webgl"){let o=this.originalGetContext("webgl2",r);return o instanceof HTMLElement&&aT(o),o}return this.originalGetContext(i,r)}}function aT(e){e.getExtension("EXT_color_buffer_float");let t={...rT,WEBGL_disjoint_timer_query:e.getExtension("EXT_disjoint_timer_query_webgl2"),WEBGL_draw_buffers:oT(e),OES_vertex_array_object:nT(e),ANGLE_instanced_arrays:sT(e)},i=e.getExtension;e.getExtension=function(o){let n=i.call(e,o);return n||(o in t?t[o]:null)};let r=e.getSupportedExtensions;e.getSupportedExtensions=function(){return(r.apply(e)||[])?.concat(Object.keys(t))}}var rT,oT,nT,sT,rm=E(()=>{rT={WEBGL_depth_texture:{UNSIGNED_INT_24_8_WEBGL:34042},OES_element_index_uint:{},OES_texture_float:{},OES_texture_half_float:{HALF_FLOAT_OES:5131},EXT_color_buffer_float:{},OES_standard_derivatives:{FRAGMENT_SHADER_DERIVATIVE_HINT_OES:35723},EXT_frag_depth:{},EXT_blend_minmax:{MIN_EXT:32775,MAX_EXT:32776},EXT_shader_texture_lod:{}},oT=e=>({drawBuffersWEBGL(t){return e.drawBuffers(t)},COLOR_ATTACHMENT0_WEBGL:36064,COLOR_ATTACHMENT1_WEBGL:36065,COLOR_ATTACHMENT2_WEBGL:36066,COLOR_ATTACHMENT3_WEBGL:36067}),nT=e=>({VERTEX_ARRAY_BINDING_OES:34229,createVertexArrayOES(){return e.createVertexArray()},deleteVertexArrayOES(t){return e.deleteVertexArray(t)},isVertexArrayOES(t){return e.isVertexArray(t)},bindVertexArrayOES(t){return e.bindVertexArray(t)}}),sT=e=>({VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE:35070,drawArraysInstancedANGLE(...t){return e.drawArraysInstanced(...t)},drawElementsInstancedANGLE(...t){return e.drawElementsInstanced(...t)},vertexAttribDivisorANGLE(...t){return e.vertexAttribDivisor(...t)}})});async function us(e,t){let i=document.getElementsByTagName("head")[0];if(!i)throw new Error("loadScript");let r=document.createElement("script");return r.setAttribute("type","text/javascript"),r.setAttribute("src",e),t&&(r.id=t),new Promise((o,n)=>{r.onload=o,r.onerror=s=>n(new Error(`Unable to load script '${e}': ${s}`)),i.appendChild(r)})}var fc=E(()=>{});function Ti(e){let t=e.luma||{_polyfilled:!1,extensions:{},softwareRenderer:!1};return t._polyfilled??(t._polyfilled=!1),t.extensions||(t.extensions={}),e.luma=t,t}var fs=E(()=>{});async function nm(e){if(!globalThis.SPECTOR)try{await us(e.debugSpectorJSUrl||hs.debugSpectorJSUrl)}catch(t){w.warn(String(t))}}function sm(e){if(e={...hs,...e},!e.debugSpectorJS)return null;if(!je&&globalThis.SPECTOR&&!globalThis.luma?.spector){w.probe(lT,"SPECTOR found and initialized. Start with `luma.spector.displayUI()`")();let{Spector:t}=globalThis.SPECTOR;je=new t,globalThis.luma&&(globalThis.luma.spector=je)}if(!je)return null;if(om||(om=!0,je.spyCanvases(),je?.onCaptureStarted.add(t=>w.info("Spector capture started:",t)()),je?.onCapture.add(t=>{w.info("Spector capture complete:",t)(),je?.getResultUI(),je?.resultView.display(),je?.resultView.addCapture(t)})),e.gl){let t=e.gl,i=Ti(t),r=i.device;je?.startCapture(e.gl,500),i.device=r,new Promise(o=>setTimeout(o,2e3)).then(o=>{w.info("Spector capture stopped after 2 seconds")(),je?.stopCapture()})}return je}var lT,je,om,hs,hc=E(()=>{te();fc();fs();lT=1,je=null,om=!1,hs={debugSpectorJS:w.get("debug-spectorjs"),debugSpectorJSUrl:"https://cdn.jsdelivr.net/npm/spectorjs@0.9.30/dist/spector.bundle.js",gl:void 0}});function lm(e){return e.luma=e.luma||{},e.luma}async function cm(){ze()&&!globalThis.WebGLDebugUtils&&(globalThis.global=globalThis.global||globalThis,globalThis.global.module={},await us(cT))}function dm(e,t={}){return t.debugWebGL||t.traceWebGL?uT(e,t):dT(e)}function dT(e){let t=lm(e);return t.realContext?t.realContext:e}function uT(e,t){if(!globalThis.WebGLDebugUtils)return w.warn("webgl-debug not loaded")(),e;let i=lm(e);if(i.debugContext)return i.debugContext;globalThis.WebGLDebugUtils.init({...Jt,...e});let r=globalThis.WebGLDebugUtils.makeDebugContext(e,fT.bind(null,t),hT.bind(null,t));for(let s in Jt)!(s in r)&&typeof Jt[s]=="number"&&(r[s]=Jt[s]);class o{}Object.setPrototypeOf(r,Object.getPrototypeOf(e)),Object.setPrototypeOf(o,r);let n=Object.create(o);return i.realContext=e,i.debugContext=n,n.luma=i,n.debug=!0,n}function am(e,t){t=Array.from(t).map(r=>r===void 0?"undefined":r);let i=globalThis.WebGLDebugUtils.glFunctionArgsToString(e,t);return i=`${i.slice(0,100)}${i.length>100?"...":""}`,`gl.${e}(${i})`}function fT(e,t,i,r){r=Array.from(r).map(a=>a===void 0?"undefined":a);let o=globalThis.WebGLDebugUtils.glEnumToString(t),n=globalThis.WebGLDebugUtils.glFunctionArgsToString(i,r),s=`${o} in gl.${i}(${n})`;w.error("%cWebGL","color: white; background: red; padding: 2px 6px; border-radius: 3px;",s)();debugger;throw new Error(s)}function hT(e,t,i){let r="";e.traceWebGL&&w.level>=1&&(r=am(t,i),w.info(1,"%cWebGL","color: white; background: blue; padding: 2px 6px; border-radius: 3px;",r)());for(let o of i)if(o===void 0){r=r||am(t,i);debugger}}var cT,pc=E(()=>{te();tm();Yt();fc();cT="https://unpkg.com/webgl-debug@2.0.1/index.js"});function mc(e){return Array.isArray(e)||ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Se(e,t,i){return t[e]!==void 0?t[e]:i[e]}var fo,ve,um,Ye,fm,uo,hm,pm,gc,At,xc,mm,Sc=E(()=>{fo={3042:!1,32773:new Float32Array([0,0,0,0]),32777:32774,34877:32774,32969:1,32968:0,32971:1,32970:0,3106:new Float32Array([0,0,0,0]),3107:[!0,!0,!0,!0],2884:!1,2885:1029,2929:!1,2931:1,2932:513,2928:new Float32Array([0,1]),2930:!0,3024:!0,35725:null,36006:null,36007:null,34229:null,34964:null,2886:2305,33170:4352,2849:1,32823:!1,32824:0,10752:0,32926:!1,32928:!1,32938:1,32939:!1,3089:!1,3088:new Int32Array([0,0,1024,1024]),2960:!1,2961:0,2968:4294967295,36005:4294967295,2962:519,2967:0,2963:4294967295,34816:519,36003:0,36004:4294967295,2964:7680,2965:7680,2966:7680,34817:7680,34818:7680,34819:7680,2978:[0,0,1024,1024],36389:null,36662:null,36663:null,35053:null,35055:null,35723:4352,36010:null,35977:!1,3333:4,3317:4,37440:!1,37441:!1,37443:37444,3330:0,3332:0,3331:0,3314:0,32878:0,3316:0,3315:0,32877:0},ve=(e,t,i)=>t?e.enable(i):e.disable(i),um=(e,t,i)=>e.hint(i,t),Ye=(e,t,i)=>e.pixelStorei(i,t),fm=(e,t,i)=>{let r=i===36006?36009:36008;return e.bindFramebuffer(r,t)},uo=(e,t,i)=>{let o={34964:34962,36662:36662,36663:36663,35053:35051,35055:35052}[i];e.bindBuffer(o,t)};hm={3042:ve,32773:(e,t)=>e.blendColor(...t),32777:"blendEquation",34877:"blendEquation",32969:"blendFunc",32968:"blendFunc",32971:"blendFunc",32970:"blendFunc",3106:(e,t)=>e.clearColor(...t),3107:(e,t)=>e.colorMask(...t),2884:ve,2885:(e,t)=>e.cullFace(t),2929:ve,2931:(e,t)=>e.clearDepth(t),2932:(e,t)=>e.depthFunc(t),2928:(e,t)=>e.depthRange(...t),2930:(e,t)=>e.depthMask(t),3024:ve,35723:um,35725:(e,t)=>e.useProgram(t),36007:(e,t)=>e.bindRenderbuffer(36161,t),36389:(e,t)=>e.bindTransformFeedback?.(36386,t),34229:(e,t)=>e.bindVertexArray(t),36006:fm,36010:fm,34964:uo,36662:uo,36663:uo,35053:uo,35055:uo,2886:(e,t)=>e.frontFace(t),33170:um,2849:(e,t)=>e.lineWidth(t),32823:ve,32824:"polygonOffset",10752:"polygonOffset",35977:ve,32926:ve,32928:ve,32938:"sampleCoverage",32939:"sampleCoverage",3089:ve,3088:(e,t)=>e.scissor(...t),2960:ve,2961:(e,t)=>e.clearStencil(t),2968:(e,t)=>e.stencilMaskSeparate(1028,t),36005:(e,t)=>e.stencilMaskSeparate(1029,t),2962:"stencilFuncFront",2967:"stencilFuncFront",2963:"stencilFuncFront",34816:"stencilFuncBack",36003:"stencilFuncBack",36004:"stencilFuncBack",2964:"stencilOpFront",2965:"stencilOpFront",2966:"stencilOpFront",34817:"stencilOpBack",34818:"stencilOpBack",34819:"stencilOpBack",2978:(e,t)=>e.viewport(...t),34383:ve,10754:ve,12288:ve,12289:ve,12290:ve,12291:ve,12292:ve,12293:ve,12294:ve,12295:ve,3333:Ye,3317:Ye,37440:Ye,37441:Ye,37443:Ye,3330:Ye,3332:Ye,3331:Ye,3314:Ye,32878:Ye,3316:Ye,3315:Ye,32877:Ye,framebuffer:(e,t)=>{let i=t&&"handle"in t?t.handle:t;return e.bindFramebuffer(36160,i)},blend:(e,t)=>t?e.enable(3042):e.disable(3042),blendColor:(e,t)=>e.blendColor(...t),blendEquation:(e,t)=>{let i=typeof t=="number"?[t,t]:t;e.blendEquationSeparate(...i)},blendFunc:(e,t)=>{let i=t?.length===2?[...t,...t]:t;e.blendFuncSeparate(...i)},clearColor:(e,t)=>e.clearColor(...t),clearDepth:(e,t)=>e.clearDepth(t),clearStencil:(e,t)=>e.clearStencil(t),colorMask:(e,t)=>e.colorMask(...t),cull:(e,t)=>t?e.enable(2884):e.disable(2884),cullFace:(e,t)=>e.cullFace(t),depthTest:(e,t)=>t?e.enable(2929):e.disable(2929),depthFunc:(e,t)=>e.depthFunc(t),depthMask:(e,t)=>e.depthMask(t),depthRange:(e,t)=>e.depthRange(...t),dither:(e,t)=>t?e.enable(3024):e.disable(3024),derivativeHint:(e,t)=>{e.hint(35723,t)},frontFace:(e,t)=>e.frontFace(t),mipmapHint:(e,t)=>e.hint(33170,t),lineWidth:(e,t)=>e.lineWidth(t),polygonOffsetFill:(e,t)=>t?e.enable(32823):e.disable(32823),polygonOffset:(e,t)=>e.polygonOffset(...t),sampleCoverage:(e,t)=>e.sampleCoverage(t[0],t[1]||!1),scissorTest:(e,t)=>t?e.enable(3089):e.disable(3089),scissor:(e,t)=>e.scissor(...t),stencilTest:(e,t)=>t?e.enable(2960):e.disable(2960),stencilMask:(e,t)=>{t=mc(t)?t:[t,t];let[i,r]=t;e.stencilMaskSeparate(1028,i),e.stencilMaskSeparate(1029,r)},stencilFunc:(e,t)=>{t=mc(t)&&t.length===3?[...t,...t]:t;let[i,r,o,n,s,a]=t;e.stencilFuncSeparate(1028,i,r,o),e.stencilFuncSeparate(1029,n,s,a)},stencilOp:(e,t)=>{t=mc(t)&&t.length===3?[...t,...t]:t;let[i,r,o,n,s,a]=t;e.stencilOpSeparate(1028,i,r,o),e.stencilOpSeparate(1029,n,s,a)},viewport:(e,t)=>e.viewport(...t)};pm={blendEquation:(e,t,i)=>e.blendEquationSeparate(Se(32777,t,i),Se(34877,t,i)),blendFunc:(e,t,i)=>e.blendFuncSeparate(Se(32969,t,i),Se(32968,t,i),Se(32971,t,i),Se(32970,t,i)),polygonOffset:(e,t,i)=>e.polygonOffset(Se(32824,t,i),Se(10752,t,i)),sampleCoverage:(e,t,i)=>e.sampleCoverage(Se(32938,t,i),Se(32939,t,i)),stencilFuncFront:(e,t,i)=>e.stencilFuncSeparate(1028,Se(2962,t,i),Se(2967,t,i),Se(2963,t,i)),stencilFuncBack:(e,t,i)=>e.stencilFuncSeparate(1029,Se(34816,t,i),Se(36003,t,i),Se(36004,t,i)),stencilOpFront:(e,t,i)=>e.stencilOpSeparate(1028,Se(2964,t,i),Se(2965,t,i),Se(2966,t,i)),stencilOpBack:(e,t,i)=>e.stencilOpSeparate(1029,Se(34817,t,i),Se(34818,t,i),Se(34819,t,i))},gc={enable:(e,t)=>e({[t]:!0}),disable:(e,t)=>e({[t]:!1}),pixelStorei:(e,t,i)=>e({[t]:i}),hint:(e,t,i)=>e({[t]:i}),useProgram:(e,t)=>e({35725:t}),bindRenderbuffer:(e,t,i)=>e({36007:i}),bindTransformFeedback:(e,t,i)=>e({36389:i}),bindVertexArray:(e,t)=>e({34229:t}),bindFramebuffer:(e,t,i)=>{switch(t){case 36160:return e({36006:i,36010:i});case 36009:return e({36006:i});case 36008:return e({36010:i});default:return null}},bindBuffer:(e,t,i)=>{let r={34962:[34964],36662:[36662],36663:[36663],35051:[35053],35052:[35055]}[t];return r?e({[r]:i}):{valueChanged:!0}},blendColor:(e,t,i,r,o)=>e({32773:new Float32Array([t,i,r,o])}),blendEquation:(e,t)=>e({32777:t,34877:t}),blendEquationSeparate:(e,t,i)=>e({32777:t,34877:i}),blendFunc:(e,t,i)=>e({32969:t,32968:i,32971:t,32970:i}),blendFuncSeparate:(e,t,i,r,o)=>e({32969:t,32968:i,32971:r,32970:o}),clearColor:(e,t,i,r,o)=>e({3106:new Float32Array([t,i,r,o])}),clearDepth:(e,t)=>e({2931:t}),clearStencil:(e,t)=>e({2961:t}),colorMask:(e,t,i,r,o)=>e({3107:[t,i,r,o]}),cullFace:(e,t)=>e({2885:t}),depthFunc:(e,t)=>e({2932:t}),depthRange:(e,t,i)=>e({2928:new Float32Array([t,i])}),depthMask:(e,t)=>e({2930:t}),frontFace:(e,t)=>e({2886:t}),lineWidth:(e,t)=>e({2849:t}),polygonOffset:(e,t,i)=>e({32824:t,10752:i}),sampleCoverage:(e,t,i)=>e({32938:t,32939:i}),scissor:(e,t,i,r,o)=>e({3088:new Int32Array([t,i,r,o])}),stencilMask:(e,t)=>e({2968:t,36005:t}),stencilMaskSeparate:(e,t,i)=>e({[t===1028?2968:36005]:i}),stencilFunc:(e,t,i,r)=>e({2962:t,2967:i,2963:r,34816:t,36003:i,36004:r}),stencilFuncSeparate:(e,t,i,r,o)=>e({[t===1028?2962:34816]:i,[t===1028?2967:36003]:r,[t===1028?2963:36004]:o}),stencilOp:(e,t,i,r)=>e({2964:t,2965:i,2966:r,34817:t,34818:i,34819:r}),stencilOpSeparate:(e,t,i,r,o)=>e({[t===1028?2964:34817]:i,[t===1028?2965:34818]:r,[t===1028?2966:34819]:o}),viewport:(e,t,i,r,o)=>e({2978:[t,i,r,o]})},At=(e,t)=>e.isEnabled(t),xc={3042:At,2884:At,2929:At,3024:At,32823:At,32926:At,32928:At,3089:At,2960:At,35977:At},mm=new Set([34016,36388,36387,35983,35368,34965,35739,35738,3074,34853,34854,34855,34856,34857,34858,34859,34860,34861,34862,34863,34864,34865,34866,34867,34868,35097,32873,35869,32874,34068])});function lt(e,t){if(pT(t))return;let i={};for(let o in t){let n=Number(o),s=hm[o];s&&(typeof s=="string"?i[s]=!0:s(e,t[o],n))}let r=e.lumaState?.cache;if(r)for(let o in i){let n=pm[o];n(e,t,r)}}function ps(e,t=fo){if(typeof t=="number"){let o=t,n=xc[o];return n?n(e,o):e.getParameter(o)}let i=Array.isArray(t)?t:Object.keys(t),r={};for(let o of i){let n=xc[o];r[o]=n?n(e,Number(o)):e.getParameter(Number(o))}return r}function gm(e){lt(e,fo)}function pT(e){for(let t in e)return!1;return!0}var tr=E(()=>{Sc()});function Sm(e,t){if(e===t)return!0;if(xm(e)&&xm(t)&&e.length===t.length){for(let i=0;i<e.length;++i)if(e[i]!==t[i])return!1;return!0}return!1}function xm(e){return Array.isArray(e)||ArrayBuffer.isView(e)}var vm=E(()=>{});function ym(e,t){let i=e[t].bind(e);e[t]=function(o){if(o===void 0||mm.has(o))return i(o);let n=ct.get(e);return o in n.cache||(n.cache[o]=i(o)),n.enable?n.cache[o]:i(o)},Object.defineProperty(e[t],"name",{value:`${t}-from-cache`,configurable:!1})}function mT(e,t,i){if(!e[t])return;let r=e[t].bind(e);e[t]=function(...n){let s=ct.get(e),{valueChanged:a,oldValue:l}=i(s._updateCache,...n);return a&&r(...n),l},Object.defineProperty(e[t],"name",{value:`${t}-to-cache`,configurable:!1})}function gT(e){let t=e.useProgram.bind(e);e.useProgram=function(r){let o=ct.get(e);o.program!==r&&(t(r),o.program=r)}}var ct,vc=E(()=>{tr();vm();Sc();ct=class{constructor(t,i){p(this,"gl");p(this,"program",null);p(this,"stateStack",[]);p(this,"enable",!0);p(this,"cache",null);p(this,"log");p(this,"initialized",!1);this.gl=t,this.log=i?.log||(()=>{}),this._updateCache=this._updateCache.bind(this),Object.seal(this)}static get(t){return t.lumaState}push(t={}){this.stateStack.push({})}pop(){let t=this.stateStack[this.stateStack.length-1];lt(this.gl,t),this.stateStack.pop()}trackState(t,i){if(this.cache=i?.copyState?ps(t):Object.assign({},fo),this.initialized)throw new Error("WebGLStateTracker");this.initialized=!0,this.gl.lumaState=this,gT(t);for(let r in gc){let o=gc[r];mT(t,r,o)}ym(t,"getParameter"),ym(t,"isEnabled")}_updateCache(t){let i=!1,r,o=this.stateStack.length>0?this.stateStack[this.stateStack.length-1]:null;for(let n in t){let s=t[n],a=this.cache[n];Sm(s,a)||(i=!0,r=a,o&&!(n in o)&&(o[n]=a),this.cache[n]=s)}return{valueChanged:i,oldValue:r}}}});function bm(e,t,i){let r="",o=l=>{let c=l.statusMessage;c&&(r||(r=c))};e.addEventListener("webglcontextcreationerror",o,!1);let n=i.failIfMajorPerformanceCaveat!==!0,s={preserveDrawingBuffer:!0,...i,failIfMajorPerformanceCaveat:!0},a=null;try{a||(a=e.getContext("webgl2",s)),!a&&s.failIfMajorPerformanceCaveat&&(r||(r="Only software GPU is available. Set `failIfMajorPerformanceCaveat: false` to allow."));let l=!1;if(!a&&n&&(s.failIfMajorPerformanceCaveat=!1,a=e.getContext("webgl2",s),l=!0),a||(a=e.getContext("webgl",{}),a&&(a=null,r||(r="Your browser only supports WebGL1"))),!a)throw r||(r="Your browser does not support WebGL"),new Error(`Failed to create WebGL context: ${r}`);let c=Ti(a);c.softwareRenderer=l;let{onContextLost:d,onContextRestored:u}=t;return e.addEventListener("webglcontextlost",f=>d(f),!1),e.addEventListener("webglcontextrestored",f=>u(f),!1),a}finally{e.removeEventListener("webglcontextcreationerror",o,!1)}}var Tm=E(()=>{fs()});function dt(e,t,i){return i[t]===void 0&&(i[t]=e.getExtension(t)||null),i[t]}var ho=E(()=>{});function _m(e,t){let i=e.getParameter(7936),r=e.getParameter(7937);dt(e,"WEBGL_debug_renderer_info",t);let o=t.WEBGL_debug_renderer_info,n=e.getParameter(o?o.UNMASKED_VENDOR_WEBGL:7936),s=e.getParameter(o?o.UNMASKED_RENDERER_WEBGL:7937),a=n||i,l=s||r,c=e.getParameter(7938),d=Pm(a,l),u=xT(a,l),f=ST(a,l);return{type:"webgl",gpu:d,gpuType:f,gpuBackend:u,vendor:a,renderer:l,version:c,shadingLanguage:"glsl",shadingLanguageVersion:300}}function Pm(e,t){return/NVIDIA/i.exec(e)||/NVIDIA/i.exec(t)?"nvidia":/INTEL/i.exec(e)||/INTEL/i.exec(t)?"intel":/Apple/i.exec(e)||/Apple/i.exec(t)?"apple":/AMD/i.exec(e)||/AMD/i.exec(t)||/ATI/i.exec(e)||/ATI/i.exec(t)?"amd":/SwiftShader/i.exec(e)||/SwiftShader/i.exec(t)?"software":"unknown"}function xT(e,t){return/Metal/i.exec(e)||/Metal/i.exec(t)?"metal":/ANGLE/i.exec(e)||/ANGLE/i.exec(t)?"opengl":"unknown"}function ST(e,t){if(/SwiftShader/i.exec(e)||/SwiftShader/i.exec(t))return"cpu";switch(Pm(e,t)){case"apple":return vT(e,t)?"integrated":"unknown";case"intel":return"integrated";case"software":return"cpu";case"unknown":return"unknown";default:return"discrete"}}function vT(e,t){return/Apple (M\d|A\d|GPU)/i.test(`${e} ${t}`)}var Cm=E(()=>{ho()});function ms(e){switch(e){case"uint8":return 5121;case"sint8":return 5120;case"unorm8":return 5121;case"snorm8":return 5120;case"uint16":return 5123;case"sint16":return 5122;case"unorm16":return 5123;case"snorm16":return 5122;case"uint32":return 5125;case"sint32":return 5124;case"float16":return 5131;case"float32":return 5126}throw new Error(String(e))}var yc=E(()=>{});function Rm(e){return e in xs}function Cc(e,t,i){return Em(e,t,i,new Set)}function Em(e,t,i,r){let o=xs[t];if(!o||r.has(t))return!1;r.add(t);let n=(o.features||[]).every(s=>Em(e,s,i,r));return r.delete(t),n?(o.extensions||[]).every(s=>!!dt(e,s,i)):!1}function Im(e,t,i){let r=t.create,o=Ss[t.format];o?.gl===void 0&&(r=!1),o?.x&&(r=r&&!!dt(e,o.x,i)),t.format==="stencil8"&&(r=!1);let n=o?.r===!1?!1:o?.r===void 0||Cc(e,o.r,i),s=r&&t.render&&n&&wT(e,t.format,i);return{format:t.format,create:r&&t.create,render:s,filter:r&&t.filter,blend:r&&t.blend,store:r&&t.store}}function wT(e,t,i){let r=Ss[t],o=r?.gl;if(o===void 0||r?.x&&!dt(e,r.x,i))return!1;let n=e.getParameter(32873),s=e.getParameter(36006),a=e.createTexture(),l=e.createFramebuffer();if(!a||!l)return!1;let c=0,d=Number(e.getError());for(;d!==c;)d=e.getError();let u=!1;try{if(e.bindTexture(3553,a),e.texStorage2D(3553,1,o,1,1),Number(e.getError())!==c)return!1;e.bindFramebuffer(36160,l),e.framebufferTexture2D(36160,36064,3553,a,0),u=Number(e.checkFramebufferStatus(36160))===36053&&Number(e.getError())===c}finally{e.bindFramebuffer(36160,s),e.deleteFramebuffer(l),e.bindTexture(3553,n),e.deleteTexture(a)}return u}function vs(e){let t=Ss[e],i=ET(e),r=Ee.getInfo(e);return r.compressed&&(t.dataFormat=i),{internalFormat:i,format:t?.dataFormat||RT(r.channels,r.integer,r.normalized,i),type:r.dataType?ms(r.dataType):t?.types?.[0]||5121,compressed:r.compressed||!1}}function Dm(e){switch(Ee.getInfo(e).attachment){case"depth":return 36096;case"stencil":return 36128;case"depth-stencil":return 33306;default:throw new Error(`Not a depth stencil format: ${e}`)}}function RT(e,t,i,r){if(r===6408||r===6407)return r;switch(e){case"r":return t&&!i?36244:6403;case"rg":return t&&!i?33320:33319;case"rgb":return t&&!i?36248:6407;case"rgba":return t&&!i?36249:6408;case"bgra":throw new Error("bgra pixels not supported by WebGL");default:return 6408}}function ET(e){let i=Ss[e]?.gl;if(i===void 0)throw new Error(`Unsupported texture format ${e}`);return i}var po,mo,ir,rr,yT,bT,TT,_T,PT,CT,Am,wm,bc,Tc,_c,Pc,gs,AT,xs,Ss,or=E(()=>{te();ho();yc();po="WEBGL_compressed_texture_s3tc",mo="WEBGL_compressed_texture_s3tc_srgb",ir="EXT_texture_compression_rgtc",rr="EXT_texture_compression_bptc",yT="WEBGL_compressed_texture_etc",bT="WEBGL_compressed_texture_astc",TT="WEBGL_compressed_texture_etc1",_T="WEBGL_compressed_texture_pvrtc",PT="WEBGL_compressed_texture_atc",CT="EXT_texture_norm16",Am="EXT_render_snorm",wm="EXT_color_buffer_float",bc="snorm8-renderable-webgl",Tc="norm16-renderable-webgl",_c="snorm16-renderable-webgl",Pc="float16-renderable-webgl",gs="float32-renderable-webgl",AT="rgb9e5ufloat-renderable-webgl",xs={"float32-renderable-webgl":{extensions:[wm]},"float16-renderable-webgl":{extensions:["EXT_color_buffer_half_float"]},"rgb9e5ufloat-renderable-webgl":{extensions:["WEBGL_render_shared_exponent"]},"snorm8-renderable-webgl":{extensions:[Am]},"norm16-webgl":{extensions:[CT]},"norm16-renderable-webgl":{features:["norm16-webgl"]},"snorm16-renderable-webgl":{features:["norm16-webgl"],extensions:[Am]},"float32-filterable":{extensions:["OES_texture_float_linear"]},"float16-filterable-webgl":{extensions:["OES_texture_half_float_linear"]},"texture-filterable-anisotropic-webgl":{extensions:["EXT_texture_filter_anisotropic"]},"texture-blend-float-webgl":{extensions:["EXT_float_blend"]},"texture-compression-bc":{extensions:[po,mo,ir,rr]},"texture-compression-bc5-webgl":{extensions:[ir]},"texture-compression-bc7-webgl":{extensions:[rr]},"texture-compression-etc2":{extensions:[yT]},"texture-compression-astc":{extensions:[bT]},"texture-compression-etc1-webgl":{extensions:[TT]},"texture-compression-pvrtc-webgl":{extensions:[_T]},"texture-compression-atc-webgl":{extensions:[PT]}};Ss={r8unorm:{gl:33321,rb:!0},r8snorm:{gl:36756,r:bc},r8uint:{gl:33330,rb:!0},r8sint:{gl:33329,rb:!0},rg8unorm:{gl:33323,rb:!0},rg8snorm:{gl:36757,r:bc},rg8uint:{gl:33336,rb:!0},rg8sint:{gl:33335,rb:!0},r16uint:{gl:33332,rb:!0},r16sint:{gl:33331,rb:!0},r16float:{gl:33325,rb:!0,r:Pc},r16unorm:{gl:33322,rb:!0,r:Tc},r16snorm:{gl:36760,r:_c},"rgba4unorm-webgl":{gl:32854,rb:!0},"rgb565unorm-webgl":{gl:36194,rb:!0},"rgb5a1unorm-webgl":{gl:32855,rb:!0},"rgb8unorm-webgl":{gl:32849},"rgb8snorm-webgl":{gl:36758},rgba8unorm:{gl:32856},"rgba8unorm-srgb":{gl:35907},rgba8snorm:{gl:36759,r:bc},rgba8uint:{gl:36220},rgba8sint:{gl:36238},bgra8unorm:{},"bgra8unorm-srgb":{},rg16uint:{gl:33338},rg16sint:{gl:33337},rg16float:{gl:33327,rb:!0,r:Pc},rg16unorm:{gl:33324,r:Tc},rg16snorm:{gl:36761,r:_c},r32uint:{gl:33334,rb:!0},r32sint:{gl:33333,rb:!0},r32float:{gl:33326,r:gs},rgb9e5ufloat:{gl:35901,r:AT},rg11b10ufloat:{gl:35898,rb:!0},rgb10a2unorm:{gl:32857,rb:!0},rgb10a2uint:{gl:36975,rb:!0},"rgb16unorm-webgl":{gl:32852,r:!1},"rgb16snorm-webgl":{gl:36762,r:!1},rg32uint:{gl:33340,rb:!0},rg32sint:{gl:33339,rb:!0},rg32float:{gl:33328,rb:!0,r:gs},rgba16uint:{gl:36214,rb:!0},rgba16sint:{gl:36232,rb:!0},rgba16float:{gl:34842,r:Pc},rgba16unorm:{gl:32859,rb:!0,r:Tc},rgba16snorm:{gl:36763,r:_c},"rgb32float-webgl":{gl:34837,x:wm,r:gs,dataFormat:6407,types:[5126]},rgba32uint:{gl:36208,rb:!0},rgba32sint:{gl:36226,rb:!0},rgba32float:{gl:34836,rb:!0,r:gs},stencil8:{gl:36168,rb:!0},depth16unorm:{gl:33189,dataFormat:6402,types:[5123],rb:!0},depth24plus:{gl:33190,dataFormat:6402,types:[5125]},depth32float:{gl:36012,dataFormat:6402,types:[5126],rb:!0},"depth24plus-stencil8":{gl:35056,rb:!0,depthTexture:!0,dataFormat:34041,types:[34042]},"depth32float-stencil8":{gl:36013,dataFormat:34041,types:[36269],rb:!0},"bc1-rgb-unorm-webgl":{gl:33776,x:po},"bc1-rgb-unorm-srgb-webgl":{gl:35916,x:mo},"bc1-rgba-unorm":{gl:33777,x:po},"bc1-rgba-unorm-srgb":{gl:35916,x:mo},"bc2-rgba-unorm":{gl:33778,x:po},"bc2-rgba-unorm-srgb":{gl:35918,x:mo},"bc3-rgba-unorm":{gl:33779,x:po},"bc3-rgba-unorm-srgb":{gl:35919,x:mo},"bc4-r-unorm":{gl:36283,x:ir},"bc4-r-snorm":{gl:36284,x:ir},"bc5-rg-unorm":{gl:36285,x:ir},"bc5-rg-snorm":{gl:36286,x:ir},"bc6h-rgb-ufloat":{gl:36495,x:rr},"bc6h-rgb-float":{gl:36494,x:rr},"bc7-rgba-unorm":{gl:36492,x:rr},"bc7-rgba-unorm-srgb":{gl:36493,x:rr},"etc2-rgb8unorm":{gl:37492},"etc2-rgb8unorm-srgb":{gl:37494},"etc2-rgb8a1unorm":{gl:37496},"etc2-rgb8a1unorm-srgb":{gl:37497},"etc2-rgba8unorm":{gl:37493},"etc2-rgba8unorm-srgb":{gl:37495},"eac-r11unorm":{gl:37488},"eac-r11snorm":{gl:37489},"eac-rg11unorm":{gl:37490},"eac-rg11snorm":{gl:37491},"astc-4x4-unorm":{gl:37808},"astc-4x4-unorm-srgb":{gl:37840},"astc-5x4-unorm":{gl:37809},"astc-5x4-unorm-srgb":{gl:37841},"astc-5x5-unorm":{gl:37810},"astc-5x5-unorm-srgb":{gl:37842},"astc-6x5-unorm":{gl:37811},"astc-6x5-unorm-srgb":{gl:37843},"astc-6x6-unorm":{gl:37812},"astc-6x6-unorm-srgb":{gl:37844},"astc-8x5-unorm":{gl:37813},"astc-8x5-unorm-srgb":{gl:37845},"astc-8x6-unorm":{gl:37814},"astc-8x6-unorm-srgb":{gl:37846},"astc-8x8-unorm":{gl:37815},"astc-8x8-unorm-srgb":{gl:37847},"astc-10x5-unorm":{gl:37816},"astc-10x5-unorm-srgb":{gl:37848},"astc-10x6-unorm":{gl:37817},"astc-10x6-unorm-srgb":{gl:37849},"astc-10x8-unorm":{gl:37818},"astc-10x8-unorm-srgb":{gl:37850},"astc-10x10-unorm":{gl:37819},"astc-10x10-unorm-srgb":{gl:37851},"astc-12x10-unorm":{gl:37820},"astc-12x10-unorm-srgb":{gl:37852},"astc-12x12-unorm":{gl:37821},"astc-12x12-unorm-srgb":{gl:37853},"pvrtc-rgb4unorm-webgl":{gl:35840},"pvrtc-rgba4unorm-webgl":{gl:35842},"pvrtc-rgb2unorm-webgl":{gl:35841},"pvrtc-rgba2unorm-webgl":{gl:35843},"etc1-rbg-unorm-webgl":{gl:36196},"atc-rgb-unorm-webgl":{gl:35986},"atc-rgba-unorm-webgl":{gl:35986},"atc-rgbai-unorm-webgl":{gl:34798}}});var Mm,ys,Fm=E(()=>{te();ho();or();Mm={"depth-clip-control":"EXT_depth_clamp","timestamp-query":"EXT_disjoint_timer_query_webgl2","compilation-status-async-webgl":"KHR_parallel_shader_compile","polygon-mode-webgl":"WEBGL_polygon_mode","provoking-vertex-webgl":"WEBGL_provoking_vertex","shader-clip-cull-distance-webgl":"WEBGL_clip_cull_distance","shader-noperspective-interpolation-webgl":"NV_shader_noperspective_interpolation","shader-conservative-depth-webgl":"EXT_conservative_depth"},ys=class extends jr{constructor(i,r,o){super([],o);p(this,"gl");p(this,"extensions");p(this,"testedFeatures",new Set);this.gl=i,this.extensions=r,dt(i,"EXT_color_buffer_float",r)}*[Symbol.iterator](){let i=this.getFeatures();for(let r of i)this.has(r)&&(yield r);return[]}has(i){return this.disabledFeatures?.[i]?!1:(this.testedFeatures.has(i)||(this.testedFeatures.add(i),Rm(i)&&Cc(this.gl,i,this.extensions)&&this.features.add(i),this.getWebGLFeature(i)&&this.features.add(i)),this.features.has(i))}initializeFeatures(){let i=this.getFeatures().filter(r=>r!=="polygon-mode-webgl");for(let r of i)this.has(r)}getFeatures(){return[...Object.keys(Mm),...Object.keys(xs)]}getWebGLFeature(i){let r=Mm[i];return typeof r=="string"?!!dt(this.gl,r,this.extensions):!!r}}});var bs,km=E(()=>{te();bs=class extends Xr{constructor(i){super();p(this,"gl");p(this,"limits",{});this.gl=i}get maxTextureDimension1D(){return 0}get maxTextureDimension2D(){return this.getParameter(3379)}get maxTextureDimension3D(){return this.getParameter(32883)}get maxTextureArrayLayers(){return this.getParameter(35071)}get maxBindGroups(){return 0}get maxDynamicUniformBuffersPerPipelineLayout(){return 0}get maxDynamicStorageBuffersPerPipelineLayout(){return 0}get maxSampledTexturesPerShaderStage(){return this.getParameter(35660)}get maxSamplersPerShaderStage(){return this.getParameter(35661)}get maxStorageBuffersPerShaderStage(){return 0}get maxStorageTexturesPerShaderStage(){return 0}get maxUniformBuffersPerShaderStage(){return this.getParameter(35375)}get maxUniformBufferBindingSize(){return this.getParameter(35376)}get maxStorageBufferBindingSize(){return 0}get minUniformBufferOffsetAlignment(){return this.getParameter(35380)}get minStorageBufferOffsetAlignment(){return 0}get maxVertexBuffers(){return 16}get maxVertexAttributes(){return this.getParameter(34921)}get maxVertexBufferArrayStride(){return 2048}get maxInterStageShaderVariables(){return this.getParameter(35659)}get maxComputeWorkgroupStorageSize(){return 0}get maxComputeInvocationsPerWorkgroup(){return 0}get maxComputeWorkgroupSizeX(){return 0}get maxComputeWorkgroupSizeY(){return 0}get maxComputeWorkgroupSizeZ(){return 0}get maxComputeWorkgroupsPerDimension(){return 0}getParameter(i){return this.limits[i]===void 0&&(this.limits[i]=this.gl.getParameter(i)),this.limits[i]||0}}});function IT(e){return e<34069?e+34069:e}function DT(e){switch(e){case 36053:return"success";case 36054:return"Mismatched attachments";case 36055:return"No attachments";case 36057:return"Height/width mismatch";case 36061:return"Unsupported or split attachments";case 36182:return"Samples mismatch";default:return`${e}`}}var wt,Ts=E(()=>{te();or();wt=class extends bi{constructor(i,r){super(i,r);p(this,"device");p(this,"gl");p(this,"handle");p(this,"colorAttachments",[]);p(this,"depthStencilAttachment",null);let o=r.handle===null;this.device=i,this.gl=i.gl,this.handle=this.props.handle||o?this.props.handle:this.gl.createFramebuffer(),o||(i._setWebGLDebugMetadata(this.handle,this,{spector:this.props}),r.handle||(this.autoCreateAttachmentTextures(),this.updateAttachments()))}destroy(){super.destroy(),!this.destroyed&&this.handle!==null&&!this.props.handle&&this.gl.deleteFramebuffer(this.handle)}updateAttachments(){let i=this.gl.bindFramebuffer(36160,this.handle);for(let r=0;r<this.colorAttachments.length;++r){let o=this.colorAttachments[r];if(o){let n=36064+r;this._attachTextureView(n,o)}}if(this.depthStencilAttachment){let r=Dm(this.depthStencilAttachment.props.format);this._attachTextureView(r,this.depthStencilAttachment)}if(this.device.props.debug){let r=this.gl.checkFramebufferStatus(36160);if(r!==36053)throw new Error(`Framebuffer ${DT(r)}`)}this.gl.bindFramebuffer(36160,i)}_attachTextureView(i,r){let{gl:o}=this.device,{texture:n}=r,s=r.props.baseMipLevel,a=r.props.baseArrayLayer;switch(o.bindTexture(n.glTarget,n.handle),n.glTarget){case 35866:case 32879:o.framebufferTextureLayer(36160,i,n.handle,s,a);break;case 34067:let l=IT(a);o.framebufferTexture2D(36160,i,l,n.handle,s);break;case 3553:o.framebufferTexture2D(36160,i,3553,n.handle,s);break;default:throw new Error("Illegal texture type")}o.bindTexture(n.glTarget,null)}resizeAttachments(i,r){if(this.handle===null){this.width=i,this.height=r;return}super.resizeAttachments(i,r)}}});var _s,Nm=E(()=>{te();Ts();_s=class extends Qi{constructor(i,r){super(r);p(this,"device");p(this,"handle",null);p(this,"_framebuffer",null);this.device=i,this._setAutoCreatedCanvasId(`${this.device.id}-canvas`),this._configureDevice()}get[Symbol.toStringTag](){return"WebGLCanvasContext"}_configureDevice(){(this.drawingBufferWidth!==this._framebuffer?.width||this.drawingBufferHeight!==this._framebuffer?.height)&&this._framebuffer?.resize([this.drawingBufferWidth,this.drawingBufferHeight])}_getCurrentFramebuffer(){return this._framebuffer||(this._framebuffer=new wt(this.device,{id:"canvas-context-framebuffer",handle:null,width:this.drawingBufferWidth,height:this.drawingBufferHeight})),this._framebuffer}}});var Ps,Bm=E(()=>{te();Ps=class extends qr{constructor(i,r={}){super(r);p(this,"device");p(this,"handle",null);p(this,"context2d");this.device=i;let o=`${this[Symbol.toStringTag]}(${this.id})`;if(!this.device.getDefaultCanvasContext().offscreenCanvas)throw new Error(`${o}: WebGL PresentationContext requires the default CanvasContext canvas to be an OffscreenCanvas`);let s=this.canvas.getContext("2d");if(!s)throw new Error(`${o}: Failed to create 2d presentation context`);this.context2d=s,this._setAutoCreatedCanvasId(`${this.device.id}-presentation-canvas`),this._configureDevice(),this._startObservers()}get[Symbol.toStringTag](){return"WebGLPresentationContext"}present(){this._resizeDrawingBufferIfNeeded(),this.device.submit();let i=this.device.getDefaultCanvasContext(),[r,o]=i.getDrawingBufferSize();if(!(this.drawingBufferWidth===0||this.drawingBufferHeight===0||r===0||o===0||i.canvas.width===0||i.canvas.height===0)){if(r!==this.drawingBufferWidth||o!==this.drawingBufferHeight||i.canvas.width!==this.drawingBufferWidth||i.canvas.height!==this.drawingBufferHeight)throw new Error(`${this[Symbol.toStringTag]}(${this.id}): Default canvas context size ${r}x${o} does not match presentation size ${this.drawingBufferWidth}x${this.drawingBufferHeight}`);this.context2d.clearRect(0,0,this.drawingBufferWidth,this.drawingBufferHeight),this.context2d.drawImage(i.canvas,0,0)}}_configureDevice(){}_getCurrentFramebuffer(i){let r=this.device.getDefaultCanvasContext();return r.setDrawingBufferSize(this.drawingBufferWidth,this.drawingBufferHeight),r.getCurrentFramebuffer(i)}}});function Om(e="id"){Ac[e]=Ac[e]||1;let t=Ac[e]++;return`${e}-${t}`}var Ac,zm=E(()=>{Ac={}});function MT(e){return e&U.INDEX?34963:e&U.VERTEX?34962:e&U.UNIFORM?35345:34962}function FT(e){return e&U.INDEX||e&U.VERTEX?35044:e&U.UNIFORM?35048:35044}var ut,Cs=E(()=>{te();ut=class extends U{constructor(i,r={}){super(i,r);p(this,"device");p(this,"gl");p(this,"handle");p(this,"glTarget");p(this,"glUsage");p(this,"glIndexType",5123);p(this,"byteLength",0);p(this,"bytesUsed",0);this.device=i,this.gl=this.device.gl;let o=typeof r=="object"?r.handle:void 0;this.handle=o||this.gl.createBuffer(),i._setWebGLDebugMetadata(this.handle,this,{spector:{...this.props,data:typeof this.props.data}}),this.glTarget=MT(this.props.usage),this.glUsage=FT(this.props.usage),this.glIndexType=this.props.indexType==="uint32"?5125:5123,r.data?this._initWithData(r.data,r.byteOffset,r.byteLength):this._initWithByteLength(r.byteLength||0)}destroy(){!this.destroyed&&this.handle&&(this.removeStats(),this.props.handle?this.trackDeallocatedReferencedMemory("Buffer"):(this.trackDeallocatedMemory(),this.gl.deleteBuffer(this.handle)),this.destroyed=!0,this.handle=null)}_initWithData(i,r=0,o=i.byteLength+r){let n=this.glTarget;this.gl.bindBuffer(n,this.handle),this.gl.bufferData(n,o,this.glUsage),this.gl.bufferSubData(n,r,i),this.gl.bindBuffer(n,null),this.bytesUsed=o,this.byteLength=o,this._setDebugData(i,r,o),this.props.handle?this.trackReferencedMemory(o,"Buffer"):this.trackAllocatedMemory(o)}_initWithByteLength(i){let r=i;i===0&&(r=new Float32Array(0));let o=this.glTarget;return this.gl.bindBuffer(o,this.handle),this.gl.bufferData(o,r,this.glUsage),this.gl.bindBuffer(o,null),this.bytesUsed=i,this.byteLength=i,this._setDebugData(null,0,i),this.props.handle?this.trackReferencedMemory(i,"Buffer"):this.trackAllocatedMemory(i),this}write(i,r=0){let o=ArrayBuffer.isView(i)?i:new Uint8Array(i),n=0,s=void 0,a=36663;this.gl.bindBuffer(a,this.handle),n!==0||s!==void 0?this.gl.bufferSubData(a,r,o,n,s):this.gl.bufferSubData(a,r,o),this.gl.bindBuffer(a,null),this._setDebugData(i,r,i.byteLength)}async mapAndWriteAsync(i,r=0,o=this.byteLength-r){let n=new ArrayBuffer(o);await i(n,"copied"),this.write(n,r)}async readAsync(i=0,r){return this.readSyncWebGL(i,r)}async mapAndReadAsync(i,r=0,o){let n=await this.readAsync(r,o);return await i(n.buffer,"copied")}readSyncWebGL(i=0,r){r=r??this.byteLength-i;let o=new Uint8Array(r),n=0;return this.gl.bindBuffer(36662,this.handle),this.gl.getBufferSubData(36662,i,o,n,r),this.gl.bindBuffer(36662,null),this._setDebugData(o,i,r),o}}});function Um(e){let t=e.split(/\r?\n/),i=[];for(let r of t){if(r.length<=1)continue;let o=r.trim(),n=r.split(":"),s=n[0]?.trim();if(n.length===2){let[h,m]=n;if(!h||!m){i.push({message:o,type:As(s||"info"),lineNum:0,linePos:0});continue}i.push({message:m.trim(),type:As(h),lineNum:0,linePos:0});continue}let[a,l,c,...d]=n;if(!a||!l||!c){i.push({message:n.slice(1).join(":").trim()||o,type:As(s||"info"),lineNum:0,linePos:0});continue}let u=parseInt(c,10);Number.isNaN(u)&&(u=0);let f=parseInt(l,10);Number.isNaN(f)&&(f=0),i.push({message:d.join(":").trim(),type:As(a),lineNum:u,linePos:f})}return i}function As(e){let t=["warning","error","info"],i=e.toLowerCase();return t.includes(i)?i:"info"}var Lm=E(()=>{});var ws,Wm=E(()=>{te();Lm();ws=class extends yi{constructor(i,r){super(i,r);p(this,"device");p(this,"handle");switch(this.device=i,this.props.stage){case"vertex":this.handle=this.props.handle||this.device.gl.createShader(35633);break;case"fragment":this.handle=this.props.handle||this.device.gl.createShader(35632);break;default:throw new Error(this.props.stage)}i._setWebGLDebugMetadata(this.handle,this,{spector:this.props});let o=this._compile(this.source);o&&typeof o.catch=="function"&&o.catch(()=>{this.compilationStatus="error"})}destroy(){this.handle&&(this.removeStats(),this.device.gl.deleteShader(this.handle),this.destroyed=!0,this.handle.destroyed=!0)}get asyncCompilationStatus(){return this._waitForCompilationComplete().then(()=>(this._getCompilationStatus(),this.compilationStatus))}async getCompilationInfo(){return await this._waitForCompilationComplete(),this.getCompilationInfoSync()}getCompilationInfoSync(){let i=this.device.gl.getShaderInfoLog(this.handle);return i?Um(i):[]}getTranslatedSource(){return this.device.getExtension("WEBGL_debug_shaders").WEBGL_debug_shaders?.getTranslatedShaderSource(this.handle)||null}_compile(i){i=i.startsWith("#version ")?i:`#version 300 es
${i}`;let{gl:r}=this.device;if(r.shaderSource(this.handle,i),r.compileShader(this.handle),!this.device.props.debug){this.compilationStatus="pending";return}if(!this.device.features.has("compilation-status-async-webgl")){if(this._getCompilationStatus(),this.debugShader(),this.compilationStatus==="error")throw new Error(`GLSL compilation errors in ${this.props.stage} shader ${this.props.id}`);return}return w.once(1,"Shader compilation is asynchronous")(),this._waitForCompilationComplete().then(()=>{w.info(2,`Shader ${this.id} - async compilation complete: ${this.compilationStatus}`)(),this._getCompilationStatus(),this.debugShader()})}async _waitForCompilationComplete(){let i=async n=>await new Promise(s=>setTimeout(s,n));if(!this.device.features.has("compilation-status-async-webgl")){await i(10);return}let{gl:o}=this.device;for(;;){if(o.getShaderParameter(this.handle,37297))return;await i(10)}}_getCompilationStatus(){this.compilationStatus=this.device.gl.getShaderParameter(this.handle,35713)?"success":"error"}}});function Hm(e,t,i,r){if(OT(t))return r(e);let o=e;o.pushState();try{return kT(e,t),lt(o.gl,i),r(e)}finally{o.popState()}}function kT(e,t){let i=e,{gl:r}=i;if(t.cullMode)switch(t.cullMode){case"none":r.disable(2884);break;case"front":r.enable(2884),r.cullFace(1028);break;case"back":r.enable(2884),r.cullFace(1029);break}if(t.frontFace&&r.frontFace(_i("frontFace",t.frontFace,{ccw:2305,cw:2304})),t.unclippedDepth&&e.features.has("depth-clip-control")&&r.enable(34383),t.depthBias!==void 0&&(r.enable(32823),r.polygonOffset(t.depthBias,t.depthBiasSlopeScale||0)),t.provokingVertex&&e.features.has("provoking-vertex-webgl")){let n=i.getExtension("WEBGL_provoking_vertex").WEBGL_provoking_vertex,s=_i("provokingVertex",t.provokingVertex,{first:36429,last:36430});n?.provokingVertexWEBGL(s)}if((t.polygonMode||t.polygonOffsetLine)&&e.features.has("polygon-mode-webgl")){if(t.polygonMode){let n=i.getExtension("WEBGL_polygon_mode").WEBGL_polygon_mode,s=_i("polygonMode",t.polygonMode,{fill:6914,line:6913});n?.polygonModeWEBGL(1028,s),n?.polygonModeWEBGL(1029,s)}t.polygonOffsetLine&&r.enable(10754)}if(e.features.has("shader-clip-cull-distance-webgl")&&(t.clipDistance0&&r.enable(12288),t.clipDistance1&&r.enable(12289),t.clipDistance2&&r.enable(12290),t.clipDistance3&&r.enable(12291),t.clipDistance4&&r.enable(12292),t.clipDistance5&&r.enable(12293),t.clipDistance6&&r.enable(12294),t.clipDistance7&&r.enable(12295)),t.depthWriteEnabled!==void 0&&r.depthMask(BT("depthWriteEnabled",t.depthWriteEnabled)),t.depthCompare&&(t.depthCompare!=="always"?r.enable(2929):r.disable(2929),r.depthFunc(Es("depthCompare",t.depthCompare))),t.clearDepth!==void 0&&r.clearDepth(t.clearDepth),t.stencilWriteMask){let o=t.stencilWriteMask;r.stencilMaskSeparate(1028,o),r.stencilMaskSeparate(1029,o)}if(t.stencilReadMask&&w.warn("stencilReadMask not supported under WebGL"),t.stencilCompare){let o=t.stencilReadMask||4294967295,n=Es("depthCompare",t.stencilCompare);t.stencilCompare!=="always"?r.enable(2960):r.disable(2960),r.stencilFuncSeparate(1028,n,0,o),r.stencilFuncSeparate(1029,n,0,o)}if(t.stencilPassOperation&&t.stencilFailOperation&&t.stencilDepthFailOperation){let o=wc("stencilPassOperation",t.stencilPassOperation),n=wc("stencilFailOperation",t.stencilFailOperation),s=wc("stencilDepthFailOperation",t.stencilDepthFailOperation);r.stencilOpSeparate(1028,n,s,o),r.stencilOpSeparate(1029,n,s,o)}switch(t.blend){case!0:r.enable(3042);break;case!1:r.disable(3042);break;default:}if(t.blendColorOperation||t.blendAlphaOperation){let o=Vm("blendColorOperation",t.blendColorOperation||"add"),n=Vm("blendAlphaOperation",t.blendAlphaOperation||"add");r.blendEquationSeparate(o,n);let s=Rs("blendColorSrcFactor",t.blendColorSrcFactor||"one"),a=Rs("blendColorDstFactor",t.blendColorDstFactor||"zero"),l=Rs("blendAlphaSrcFactor",t.blendAlphaSrcFactor||"one"),c=Rs("blendAlphaDstFactor",t.blendAlphaDstFactor||"zero");r.blendFuncSeparate(s,a,l,c)}}function Es(e,t){return _i(e,t,{never:512,less:513,equal:514,"less-equal":515,greater:516,"not-equal":517,"greater-equal":518,always:519})}function wc(e,t){return _i(e,t,{keep:7680,zero:0,replace:7681,invert:5386,"increment-clamp":7682,"decrement-clamp":7683,"increment-wrap":34055,"decrement-wrap":34056})}function Vm(e,t){return _i(e,t,{add:32774,subtract:32778,"reverse-subtract":32779,min:32775,max:32776})}function Rs(e,t,i="color"){return _i(e,t,{one:1,zero:0,src:768,"one-minus-src":769,dst:774,"one-minus-dst":775,"src-alpha":770,"one-minus-src-alpha":771,"dst-alpha":772,"one-minus-dst-alpha":773,"src-alpha-saturated":776,constant:i==="color"?32769:32771,"one-minus-constant":i==="color"?32770:32772,src1:768,"one-minus-src1":769,"src1-alpha":770,"one-minus-src1-alpha":771})}function NT(e,t){return`Illegal parameter ${t} for ${e}`}function _i(e,t,i){if(!(t in i))throw new Error(NT(e,t));return i[t]}function BT(e,t){return t}function OT(e){let t=!0;for(let i in e){t=!1;break}return t}var Rc=E(()=>{te();tr()});function Is(e){let t={};return e.addressModeU&&(t[10242]=Ec(e.addressModeU)),e.addressModeV&&(t[10243]=Ec(e.addressModeV)),e.addressModeW&&(t[32882]=Ec(e.addressModeW)),e.magFilter&&(t[10240]=Ic(e.magFilter)),(e.minFilter||e.mipmapFilter)&&(t[10241]=zT(e.minFilter||"linear",e.mipmapFilter)),e.lodMinClamp!==void 0&&(t[33082]=e.lodMinClamp),e.lodMaxClamp!==void 0&&(t[33083]=e.lodMaxClamp),e.type==="comparison-sampler"&&(t[34892]=34894),e.compare&&(t[34893]=Es("compare",e.compare)),e.maxAnisotropy&&(t[34046]=e.maxAnisotropy),t}function Ec(e){switch(e){case"clamp-to-edge":return 33071;case"repeat":return 10497;case"mirror-repeat":return 33648}}function Ic(e){switch(e){case"nearest":return 9728;case"linear":return 9729}}function zT(e,t="none"){if(!t)return Ic(e);switch(t){case"none":return Ic(e);case"nearest":switch(e){case"nearest":return 9984;case"linear":return 9985}break;case"linear":switch(e){case"nearest":return 9986;case"linear":return 9987}}}var Dc=E(()=>{Rc()});var Ds,$m=E(()=>{te();Dc();Ds=class extends st{constructor(i,r){super(i,r);p(this,"device");p(this,"handle");p(this,"parameters");this.device=i,this.parameters=Is(r),this.handle=r.handle||this.device.gl.createSampler(),this._setSamplerParameters(this.parameters)}destroy(){this.handle&&(this.device.gl.deleteSampler(this.handle),this.handle=void 0)}toString(){return`Sampler(${this.id},${JSON.stringify(this.props)})`}_setSamplerParameters(i){for(let[r,o]of Object.entries(i)){let n=Number(r);switch(n){case 33082:case 33083:this.device.gl.samplerParameterf(this.handle,n,o);break;default:this.device.gl.samplerParameteri(this.handle,n,o);break}}}}});function Rt(e,t,i){if(UT(t))return i(e);let{nocatch:r=!0}=t,o=ct.get(e);o.push(),lt(e,t);let n;if(r)n=i(e),o.pop();else try{n=i(e)}finally{o.pop()}return n}function UT(e){for(let t in e)return!1;return!0}var Ms=E(()=>{tr();vc()});var Et,Mc=E(()=>{te();Et=class extends vi{constructor(i,r){super(i,{...z.defaultProps,...r});p(this,"device");p(this,"gl");p(this,"handle");p(this,"texture");this.device=i,this.gl=this.device.gl,this.handle=null,this.texture=r.texture}}});function Fs(e){return LT[e]}var LT,Fc=E(()=>{LT={5124:"sint32",5125:"uint32",5122:"sint16",5123:"uint16",5120:"sint8",5121:"uint8",5126:"float32",5131:"float16",33635:"uint16",32819:"uint16",32820:"uint16",33640:"uint32",35899:"uint32",35902:"uint32",34042:"uint32",36269:"uint32"}});function WT(e,t=0){return t?new e.constructor(e.buffer,e.byteOffset+t,(e.byteLength-t)/e.BYTES_PER_ELEMENT):e}function VT(e,t){if(t%e.BYTES_PER_ELEMENT!==0)throw new Error(`Texture byteOffset ${t} must align to typed array element size ${e.BYTES_PER_ELEMENT}`);return t/e.BYTES_PER_ELEMENT}function HT(e){switch(e){case"1d":break;case"2d":return 3553;case"3d":return 32879;case"cube":return 34067;case"2d-array":return 35866;case"cube-array":break}throw new Error(e)}function ks(e,t,i){return t==="cube"?34069+i:e}var It,Ns=E(()=>{te();or();Dc();Ms();Mc();Fc();It=class extends z{constructor(i,r){super(i,r,{byteAlignment:1});p(this,"device");p(this,"gl");p(this,"handle");p(this,"sampler");p(this,"view");p(this,"glTarget");p(this,"glFormat");p(this,"glType");p(this,"glInternalFormat");p(this,"compressed");p(this,"_textureUnit",0);p(this,"_framebuffer",null);p(this,"_framebufferAttachmentKey",null);this.device=i,this.gl=this.device.gl;let o=vs(this.props.format);this.glTarget=HT(this.props.dimension),this.glInternalFormat=o.internalFormat,this.glFormat=o.format,this.glType=o.type,this.compressed=o.compressed,this.handle=this.props.handle||this.gl.createTexture(),this.device._setWebGLDebugMetadata(this.handle,this,{spector:this.props}),this.gl.bindTexture(this.glTarget,this.handle);let{dimension:n,width:s,height:a,depth:l,mipLevels:c,glTarget:d,glInternalFormat:u}=this;if(!this.compressed)switch(n){case"2d":case"cube":this.gl.texStorage2D(d,c,u,s,a);break;case"2d-array":case"3d":this.gl.texStorage3D(d,c,u,s,a,l);break;default:throw new Error(n)}this.gl.bindTexture(this.glTarget,null),this._initializeData(r.data),this.props.handle?this.trackReferencedMemory(this.getAllocatedByteLength(),"Texture"):this.trackAllocatedMemory(this.getAllocatedByteLength(),"Texture"),this.setSampler(this.props.sampler),this.view=new Et(this.device,{...this.props,texture:this}),Object.seal(this)}destroy(){this.handle&&(this._framebuffer?.destroy(),this._framebuffer=null,this._framebufferAttachmentKey=null,this.removeStats(),this.props.handle?this.trackDeallocatedReferencedMemory("Texture"):(this.gl.deleteTexture(this.handle),this.trackDeallocatedMemory("Texture")),this.destroyed=!0)}createView(i){return new Et(this.device,{...i,texture:this})}setSampler(i={}){super.setSampler(i);let r=Is(this.sampler.props);this._setSamplerParameters(r)}copyExternalImage(i){let r=this._normalizeCopyExternalImageOptions(i);if(r.sourceX||r.sourceY)throw new Error("WebGL does not support sourceX/sourceY)");let{glFormat:o,glType:n}=this,{image:s,depth:a,mipLevel:l,x:c,y:d,z:u,width:f,height:h}=r,m=ks(this.glTarget,this.dimension,u),x=r.flipY?{37440:!0}:{};return this.gl.bindTexture(this.glTarget,this.handle),Rt(this.gl,x,()=>{switch(this.dimension){case"2d":case"cube":this.gl.texSubImage2D(m,l,c,d,f,h,o,n,s);break;case"2d-array":case"3d":this.gl.texSubImage3D(m,l,c,d,u,f,h,a,o,n,s);break;default:}}),this.gl.bindTexture(this.glTarget,null),{width:r.width,height:r.height}}copyImageData(i){super.copyImageData(i)}readBuffer(i={},r){if(!r)throw new Error(`${this} readBuffer requires a destination buffer`);let o=this._getSupportedColorReadOptions(i),n=i.byteOffset??0,s=this.computeMemoryLayout(o);if(r.byteLength<n+s.byteLength)throw new Error(`${this} readBuffer target is too small (${r.byteLength} < ${n+s.byteLength})`);let a=r;this.gl.bindBuffer(35051,a.handle);try{this._readColorTextureLayers(o,s,l=>{this.gl.readPixels(o.x,o.y,o.width,o.height,this.glFormat,this.glType,n+l)})}finally{this.gl.bindBuffer(35051,null)}return r}async readDataAsync(i={}){throw new Error(`${this} readDataAsync is deprecated; use readBuffer() with an explicit destination buffer or DynamicTexture.readAsync()`)}writeBuffer(i,r={}){let o=this._normalizeTextureWriteOptions(r),{width:n,height:s,depthOrArrayLayers:a,mipLevel:l,byteOffset:c,x:d,y:u,z:f}=o,{glFormat:h,glType:m,compressed:x}=this,S=ks(this.glTarget,this.dimension,f);if(x)throw new Error("writeBuffer for compressed textures is not implemented in WebGL");let{bytesPerPixel:y}=this.device.getTextureFormatInfo(this.format),A=y?o.bytesPerRow/y:void 0,_={3317:this.byteAlignment,...A!==void 0?{3314:A}:{},32878:o.rowsPerImage};this.gl.bindTexture(this.glTarget,this.handle),this.gl.bindBuffer(35052,i.handle),Rt(this.gl,_,()=>{switch(this.dimension){case"2d":case"cube":this.gl.texSubImage2D(S,l,d,u,n,s,h,m,c);break;case"2d-array":case"3d":this.gl.texSubImage3D(S,l,d,u,f,n,s,a,h,m,c);break;default:}}),this.gl.bindBuffer(35052,null),this.gl.bindTexture(this.glTarget,null)}writeData(i,r={}){let o=this._normalizeTextureWriteOptions(r),n=ArrayBuffer.isView(i)?i:new Uint8Array(i),{width:s,height:a,depthOrArrayLayers:l,mipLevel:c,x:d,y:u,z:f,byteOffset:h}=o,{glFormat:m,glType:x,compressed:S}=this,y=ks(this.glTarget,this.dimension,f),A;if(!S){let{bytesPerPixel:D}=this.device.getTextureFormatInfo(this.format);D&&(A=o.bytesPerRow/D)}let _=this.compressed?{}:{3317:this.byteAlignment,...A!==void 0?{3314:A}:{},32878:o.rowsPerImage},v=VT(n,h),P=S?WT(n,h):n,T=this._getMipLevelSize(c),R=d===0&&u===0&&f===0&&s===T.width&&a===T.height&&l===T.depthOrArrayLayers;this.gl.bindTexture(this.glTarget,this.handle),this.gl.bindBuffer(35052,null),Rt(this.gl,_,()=>{switch(this.dimension){case"2d":case"cube":S?R?this.gl.compressedTexImage2D(y,c,m,s,a,0,P):this.gl.compressedTexSubImage2D(y,c,d,u,s,a,m,P):this.gl.texSubImage2D(y,c,d,u,s,a,m,x,n,v);break;case"2d-array":case"3d":S?R?this.gl.compressedTexImage3D(y,c,m,s,a,l,0,P):this.gl.compressedTexSubImage3D(y,c,d,u,f,s,a,l,m,P):this.gl.texSubImage3D(y,c,d,u,f,s,a,l,m,x,n,v);break;default:}}),this.gl.bindTexture(this.glTarget,null)}_getRowByteAlignment(i,r){return 1}_getFramebuffer(){return this._framebuffer||(this._framebuffer=this.device.createFramebuffer({id:`framebuffer-for-${this.id}`,width:this.width,height:this.height,colorAttachments:[this]})),this._framebuffer}readDataSyncWebGL(i={}){let r=this._getSupportedColorReadOptions(i),o=this.computeMemoryLayout(r),n=Fs(this.glType),s=rc(n),a=new s(o.byteLength/s.BYTES_PER_ELEMENT);return this._readColorTextureLayers(r,o,l=>{let c=new s(a.buffer,a.byteOffset+l,o.bytesPerImage/s.BYTES_PER_ELEMENT);this.gl.readPixels(r.x,r.y,r.width,r.height,this.glFormat,this.glType,c)}),a.buffer}_readColorTextureLayers(i,r,o){let n=this._getFramebuffer(),s=r.bytesPerRow/r.bytesPerPixel,a={3333:this.byteAlignment,...s!==i.width?{3330:s}:{}},l=this.gl.getParameter(3074),c=this.gl.bindFramebuffer(36160,n.handle);try{this.gl.readBuffer(36064),Rt(this.gl,a,()=>{for(let d=0;d<i.depthOrArrayLayers;d++)this._attachReadSubresource(n,i.mipLevel,i.z+d),o(d*r.bytesPerImage)})}finally{this.gl.bindFramebuffer(36160,c||null),this.gl.readBuffer(l)}}_attachReadSubresource(i,r,o){let n=`${r}:${o}`;if(this._framebufferAttachmentKey!==n){switch(this.dimension){case"2d":this.gl.framebufferTexture2D(36160,36064,3553,this.handle,r);break;case"cube":this.gl.framebufferTexture2D(36160,36064,ks(this.glTarget,this.dimension,o),this.handle,r);break;case"2d-array":case"3d":this.gl.framebufferTextureLayer(36160,36064,this.handle,r,o);break;default:throw new Error(`${this} color readback does not support ${this.dimension} textures`)}if(this.device.props.debug){let s=Number(this.gl.checkFramebufferStatus(36160));if(s!==36053)throw new Error(`${i} incomplete for ${this} readback (${s})`)}this._framebufferAttachmentKey=n}}generateMipmapsWebGL(i){if(!(!(this.device.isTextureFormatRenderable(this.props.format)&&this.device.isTextureFormatFilterable(this.props.format))&&(w.warn(`${this} is not renderable or filterable, may not be able to generate mipmaps`)(),!i?.force)))try{this.gl.bindTexture(this.glTarget,this.handle),this.gl.generateMipmap(this.glTarget)}catch(o){w.warn(`Error generating mipmap for ${this}: ${o.message}`)()}finally{this.gl.bindTexture(this.glTarget,null)}}_setSamplerParameters(i){w.log(2,`${this.id} sampler parameters`,this.device.getGLKeys(i))(),this.gl.bindTexture(this.glTarget,this.handle);for(let[r,o]of Object.entries(i)){let n=Number(r),s=o;switch(n){case 33082:case 33083:this.gl.texParameterf(this.glTarget,n,s);break;case 10240:case 10241:this.gl.texParameteri(this.glTarget,n,s);break;case 10242:case 10243:case 32882:this.gl.texParameteri(this.glTarget,n,s);break;case 34046:this.device.features.has("texture-filterable-anisotropic-webgl")&&this.gl.texParameteri(this.glTarget,n,s);break;case 34892:case 34893:this.gl.texParameteri(this.glTarget,n,s);break}}this.gl.bindTexture(this.glTarget,null)}_getActiveUnit(){return this.gl.getParameter(34016)-33984}_bind(i){let{gl:r}=this;return i!==void 0&&(this._textureUnit=i,r.activeTexture(33984+i)),r.bindTexture(this.glTarget,this.handle),i}_unbind(i){let{gl:r}=this;return i!==void 0&&(this._textureUnit=i,r.activeTexture(33984+i)),r.bindTexture(this.glTarget,null),i}}});function Xm(e,t,i,r){let o=e,n=r;n===!0&&(n=1),n===!1&&(n=0);let s=typeof n=="number"?[n]:n;switch(i){case 35678:case 35680:case 35679:case 35682:case 36289:case 36292:case 36293:case 36298:case 36299:case 36300:case 36303:case 36306:case 36307:case 36308:case 36311:if(typeof r!="number")throw new Error("samplers must be set to integers");return e.uniform1i(t,r);case 5126:return e.uniform1fv(t,s);case 35664:return e.uniform2fv(t,s);case 35665:return e.uniform3fv(t,s);case 35666:return e.uniform4fv(t,s);case 5124:return e.uniform1iv(t,s);case 35667:return e.uniform2iv(t,s);case 35668:return e.uniform3iv(t,s);case 35669:return e.uniform4iv(t,s);case 35670:return e.uniform1iv(t,s);case 35671:return e.uniform2iv(t,s);case 35672:return e.uniform3iv(t,s);case 35673:return e.uniform4iv(t,s);case 5125:return o.uniform1uiv(t,s,1);case 36294:return o.uniform2uiv(t,s,2);case 36295:return o.uniform3uiv(t,s,3);case 36296:return o.uniform4uiv(t,s,4);case 35674:return e.uniformMatrix2fv(t,!1,s);case 35675:return e.uniformMatrix3fv(t,!1,s);case 35676:return e.uniformMatrix4fv(t,!1,s);case 35685:return o.uniformMatrix2x3fv(t,!1,s);case 35686:return o.uniformMatrix2x4fv(t,!1,s);case 35687:return o.uniformMatrix3x2fv(t,!1,s);case 35688:return o.uniformMatrix3x4fv(t,!1,s);case 35689:return o.uniformMatrix4x2fv(t,!1,s);case 35690:return o.uniformMatrix4x3fv(t,!1,s)}throw new Error("Illegal uniform")}var jm=E(()=>{});function Ym(e){switch(e){case"point-list":return 0;case"line-list":return 1;case"line-strip":return 3;case"triangle-list":return 4;case"triangle-strip":return 5;default:throw new Error(e)}}function Gm(e){switch(e){case"point-list":return 0;case"line-list":return 1;case"line-strip":return 1;case"triangle-list":return 4;case"triangle-strip":return 4;default:throw new Error(e)}}var kc=E(()=>{});function $T(e,t){let i={...e,attributes:e.attributes.map(r=>({...r})),bindings:e.bindings.map(r=>({...r}))};for(let r of t?.attributes||[]){let o=i.attributes.find(n=>n.name===r.name);o?(o.type=r.type||o.type,o.stepMode=r.stepMode||o.stepMode):w.warn(`shader layout attribute ${r.name} not present in shader`)}for(let r of t?.bindings||[]){let o=Km(i,r.name);if(!o){w.warn(`shader layout binding ${r.name} not present in shader`);continue}Object.assign(o,r)}return i}function Km(e,t){return e.bindings.find(i=>i.name===t||i.name===`${t}Uniforms`||`${i.name}Uniforms`===t)}function qm(e,t){return e[t]||e[`${t}Uniforms`]||e[t.replace(/Uniforms$/,"")]}var Bs,Zm=E(()=>{te();Rc();jm();Cs();Ts();Ns();Mc();kc();Bs=class extends tt{constructor(i,r){super(i,r);p(this,"device");p(this,"handle");p(this,"vs");p(this,"fs");p(this,"introspectedLayout");p(this,"bindings",{});p(this,"uniforms",{});p(this,"varyings",null);p(this,"_uniformCount",0);p(this,"_uniformSetters",{});this.device=i;let o=this.sharedRenderPipeline||this.device._createSharedRenderPipelineWebGL(r);this.sharedRenderPipeline=o,this.handle=o.handle,this.vs=o.vs,this.fs=o.fs,this.linkStatus=o.linkStatus,this.introspectedLayout=o.introspectedLayout,this.device._setWebGLDebugMetadata(this.handle,this,{spector:{id:this.props.id}}),this.shaderLayout=r.shaderLayout?$T(this.introspectedLayout,r.shaderLayout):this.introspectedLayout}get[Symbol.toStringTag](){return"WEBGLRenderPipeline"}destroy(){this.destroyed||(this.sharedRenderPipeline&&!this.props._sharedRenderPipeline&&this.sharedRenderPipeline.destroy(),this.destroyResource())}setBindings(i,r){let o=Qn(to(this.shaderLayout,i));for(let[n,s]of Object.entries(o)){let a=Km(this.shaderLayout,n);if(a){switch(s||w.warn(`Unsetting binding "${n}" in render pipeline "${this.id}"`)(),a.type){case"uniform":if(!(s instanceof ut)&&!(s.buffer instanceof ut))throw new Error("buffer value");break;case"texture":if(!(s instanceof Et||s instanceof It||s instanceof wt))throw new Error(`${this} Bad texture binding for ${n}`);break;case"sampler":w.warn(`Ignoring sampler ${n}`)();break;default:throw new Error(a.type)}this.bindings[n]=s}else{let l=this.shaderLayout.bindings.map(c=>`"${c.name}"`).join(", ");r?.disableWarnings||w.warn(`No binding "${n}" in render pipeline "${this.id}", expected one of ${l}`,s)()}}}draw(i){this._syncLinkStatus();let r=i.bindGroups?Qn(i.bindGroups):i.bindings||this.bindings,{renderPass:o,parameters:n=this.props.parameters,topology:s=this.props.topology,vertexArray:a,vertexCount:l,instanceCount:c,isInstanced:d=!1,firstVertex:u=0,transformFeedback:f,uniforms:h=this.uniforms}=i,m=Ym(s),x=!!a.indexBuffer,S=a.indexBuffer?.glIndexType;if(this.linkStatus!=="success")return w.info(2,`RenderPipeline:${this.id}.draw() aborted - waiting for shader linking`)(),!1;if(!this._areTexturesRenderable(r))return w.info(2,`RenderPipeline:${this.id}.draw() aborted - textures not yet loaded`)(),!1;this.device.gl.useProgram(this.handle),a.bindBeforeRender(o),f&&f.begin(this.props.topology),this._applyBindings(r,{disableWarnings:this.props.disableWarnings}),this._applyUniforms(h);let y=o;return Hm(this.device,n,y.glParameters,()=>{x&&d?this.device.gl.drawElementsInstanced(m,l||0,S,u,c||0):x?this.device.gl.drawElements(m,l||0,S,u):d?this.device.gl.drawArraysInstanced(m,u,l||0,c||0):this.device.gl.drawArrays(m,u,l||0),f&&f.end()}),a.unbindAfterRender(o),!0}_areTexturesRenderable(i){let r=!0;for(let o of this.shaderLayout.bindings)qm(i,o.name)||(w.warn(`Binding ${o.name} not found in ${this.id}`)(),r=!1);return r}_applyBindings(i,r){if(this._syncLinkStatus(),this.linkStatus!=="success")return;let{gl:o}=this.device;o.useProgram(this.handle);let n=0,s=0;for(let a of this.shaderLayout.bindings){let l=qm(i,a.name);if(!l)throw new Error(`No value for binding ${a.name} in ${this.id}`);switch(a.type){case"uniform":let{name:c}=a,d=o.getUniformBlockIndex(this.handle,c);if(d===4294967295)throw new Error(`Invalid uniform block name ${c}`);if(o.uniformBlockBinding(this.handle,d,s),l instanceof ut)o.bindBufferBase(35345,s,l.handle);else{let f=l;o.bindBufferRange(35345,s,f.buffer.handle,f.offset||0,f.size||f.buffer.byteLength-(f.offset||0))}s+=1;break;case"texture":if(!(l instanceof Et||l instanceof It||l instanceof wt))throw new Error("texture");let u;if(l instanceof Et)u=l.texture;else if(l instanceof It)u=l;else if(l instanceof wt&&l.colorAttachments[0]instanceof Et)w.warn("Passing framebuffer in texture binding may be deprecated. Use fbo.colorAttachments[0] instead")(),u=l.colorAttachments[0].texture;else throw new Error("No texture");o.activeTexture(33984+n),o.bindTexture(u.glTarget,u.handle),n+=1;break;case"sampler":break;case"storage":case"read-only-storage":throw new Error(`binding type '${a.type}' not supported in WebGL`)}}}_applyUniforms(i){for(let r of this.shaderLayout.uniforms||[]){let{name:o,location:n,type:s,textureUnit:a}=r,l=i[o]??a;l!==void 0&&Xm(this.device.gl,n,s,l)}}_syncLinkStatus(){this.linkStatus=this.sharedRenderPipeline.linkStatus}}});function Qm(e){return jT[e]}function Os(e){return XT[e]}function zs(e){return!!eg[e]}function Jm(e){return eg[e]}var XT,eg,jT,Us=E(()=>{XT={5126:"f32",35664:"vec2<f32>",35665:"vec3<f32>",35666:"vec4<f32>",5124:"i32",35667:"vec2<i32>",35668:"vec3<i32>",35669:"vec4<i32>",5125:"u32",36294:"vec2<u32>",36295:"vec3<u32>",36296:"vec4<u32>",35670:"f32",35671:"vec2<f32>",35672:"vec3<f32>",35673:"vec4<f32>",35674:"mat2x2<f32>",35685:"mat2x3<f32>",35686:"mat2x4<f32>",35687:"mat3x2<f32>",35675:"mat3x3<f32>",35688:"mat3x4<f32>",35689:"mat4x2<f32>",35690:"mat4x3<f32>",35676:"mat4x4<f32>"},eg={35678:{viewDimension:"2d",sampleType:"float"},35680:{viewDimension:"cube",sampleType:"float"},35679:{viewDimension:"3d",sampleType:"float"},35682:{viewDimension:"3d",sampleType:"depth"},36289:{viewDimension:"2d-array",sampleType:"float"},36292:{viewDimension:"2d-array",sampleType:"depth"},36293:{viewDimension:"cube",sampleType:"float"},36298:{viewDimension:"2d",sampleType:"sint"},36299:{viewDimension:"3d",sampleType:"sint"},36300:{viewDimension:"cube",sampleType:"sint"},36303:{viewDimension:"2d-array",sampleType:"uint"},36306:{viewDimension:"2d",sampleType:"uint"},36307:{viewDimension:"3d",sampleType:"uint"},36308:{viewDimension:"cube",sampleType:"uint"},36311:{viewDimension:"2d-array",sampleType:"uint"}},jT={uint8:5121,sint8:5120,unorm8:5121,snorm8:5120,uint16:5123,sint16:5122,unorm16:5123,snorm16:5122,uint32:5125,sint32:5124,float16:5131,float32:5126}});function tg(e,t){let i={attributes:[],bindings:[]};i.attributes=YT(e,t);let r=KT(e,t);for(let a of r){let l=a.uniforms.map(c=>({name:c.name,format:c.format,byteOffset:c.byteOffset,byteStride:c.byteStride,arrayLength:c.arrayLength}));i.bindings.push({type:"uniform",name:a.name,group:0,location:a.location,visibility:(a.vertex?1:0)&(a.fragment?2:0),minBindingSize:a.byteLength,uniforms:l})}let o=qT(e,t),n=0;for(let a of o)if(zs(a.type)){let{viewDimension:l,sampleType:c}=Jm(a.type);i.bindings.push({type:"texture",name:a.name,group:0,location:n,viewDimension:l,sampleType:c}),a.textureUnit=n,n+=1}o.length&&(i.uniforms=o);let s=GT(e,t);return s?.length&&(i.varyings=s),i}function YT(e,t){let i=[],r=e.getProgramParameter(t,35721);for(let o=0;o<r;o++){let n=e.getActiveAttrib(t,o);if(!n)throw new Error("activeInfo");let{name:s,type:a}=n,l=e.getAttribLocation(t,s);if(l>=0){let c=Os(a),d=/instance/i.test(s)?"instance":"vertex";i.push({name:s,location:l,stepMode:d,type:c})}}return i.sort((o,n)=>o.location-n.location),i}function GT(e,t){let i=[],r=e.getProgramParameter(t,35971);for(let o=0;o<r;o++){let n=e.getTransformFeedbackVarying(t,o);if(!n)throw new Error("activeInfo");let{name:s,type:a,size:l}=n,c=Os(a),{type:d,components:u}=Ji(c);i.push({location:o,name:s,type:d,size:l*u})}return i.sort((o,n)=>o.location-n.location),i}function qT(e,t){let i=[],r=e.getProgramParameter(t,35718);for(let o=0;o<r;o++){let n=e.getActiveUniform(t,o);if(!n)throw new Error("activeInfo");let{name:s,size:a,type:l}=n,{name:c,isArray:d}=ZT(s),u=e.getUniformLocation(t,c),f={location:u,name:c,size:a,type:l,isArray:d};if(i.push(f),f.size>1)for(let h=0;h<f.size;h++){let m=`${c}[${h}]`;u=e.getUniformLocation(t,m);let x={...f,name:m,location:u};i.push(x)}}return i}function KT(e,t){let i=(n,s)=>e.getActiveUniformBlockParameter(t,n,s),r=[],o=e.getProgramParameter(t,35382);for(let n=0;n<o;n++){let s={name:e.getActiveUniformBlockName(t,n)||"",location:i(n,35391),byteLength:i(n,35392),vertex:i(n,35396),fragment:i(n,35398),uniformCount:i(n,35394),uniforms:[]},a=i(n,35395)||[],l=e.getActiveUniforms(t,a,35383),c=e.getActiveUniforms(t,a,35384),d=e.getActiveUniforms(t,a,35387),u=e.getActiveUniforms(t,a,35388);for(let m=0;m<s.uniformCount;++m){let x=a[m];if(x!==void 0){let S=e.getActiveUniform(t,x);if(!S)throw new Error("activeInfo");let y=Os(l[m]);s.uniforms.push({name:S.name,format:y,type:l[m],arrayLength:c[m],byteOffset:d[m],byteStride:u[m]})}}let f=new Set(s.uniforms.map(m=>m.name.split(".")[0]).filter(m=>!!m)),h=s.name.replace(/Uniforms$/,"");if(f.size===1&&!f.has(s.name)&&!f.has(h)){let[m]=f;w.warn(`Uniform block "${s.name}" uses GLSL instance "${m}". luma.gl binds uniform buffers by block name ("${s.name}") and alias ("${h}"). Prefer matching the instance name to one of those to avoid confusing silent mismatches.`)()}r.push(s)}return r.sort((n,s)=>n.location-s.location),r}function ZT(e){if(e[e.length-1]!=="]")return{name:e,length:1,isArray:!1};let i=/([^[]*)(\[[0-9]+\])?/.exec(e);return{name:Kt(i?.[1],`Failed to parse GLSL uniform name ${e}`),length:i?.[2]?1:0,isArray:!!i?.[2]}}var ig=E(()=>{te();Us()});var rg,Ls,og=E(()=>{te();ig();Us();rg=4,Ls=class extends Zr{constructor(i,r){super(i,r);p(this,"device");p(this,"handle");p(this,"vs");p(this,"fs");p(this,"introspectedLayout",{attributes:[],bindings:[],uniforms:[]});p(this,"linkStatus","pending");this.device=i,this.handle=r.handle||this.device.gl.createProgram(),this.vs=r.vs,this.fs=r.fs,r.varyings&&r.varyings.length>0&&this.device.gl.transformFeedbackVaryings(this.handle,r.varyings,r.bufferMode||35981),this._linkShaders(),w.time(3,`RenderPipeline ${this.id} - shaderLayout introspection`)(),this.introspectedLayout=tg(this.device.gl,this.handle),w.timeEnd(3,`RenderPipeline ${this.id} - shaderLayout introspection`)()}destroy(){this.destroyed||(this.device.gl.useProgram(null),this.device.gl.deleteProgram(this.handle),this.handle.destroyed=!0,this.destroyResource())}async _linkShaders(){let{gl:i}=this.device;if(i.attachShader(this.handle,this.vs.handle),i.attachShader(this.handle,this.fs.handle),w.time(rg,`linkProgram for ${this.id}`)(),i.linkProgram(this.handle),w.timeEnd(rg,`linkProgram for ${this.id}`)(),!this.device.features.has("compilation-status-async-webgl")){let o=this._getLinkStatus();this._reportLinkStatus(o);return}w.once(1,"RenderPipeline linking is asynchronous")(),await this._waitForLinkComplete(),w.info(2,`RenderPipeline ${this.id} - async linking complete: ${this.linkStatus}`)();let r=this._getLinkStatus();this._reportLinkStatus(r)}async _reportLinkStatus(i){switch(i){case"success":return;default:let r=i==="link-error"?"Link error":"Validation error";switch(this.vs.compilationStatus){case"error":throw this.vs.debugShader(),new Error(`${this} ${r} during compilation of ${this.vs}`);case"pending":await this.vs.asyncCompilationStatus,this.vs.debugShader();break;case"success":break}switch(this.fs?.compilationStatus){case"error":throw this.fs.debugShader(),new Error(`${this} ${r} during compilation of ${this.fs}`);case"pending":await this.fs.asyncCompilationStatus,this.fs.debugShader();break;case"success":break}let o=this.device.gl.getProgramInfoLog(this.handle);this.device.reportError(new Error(`${r} during ${i}: ${o}`),this)(),this.device.debug()}}_getLinkStatus(){let{gl:i}=this.device;return i.getProgramParameter(this.handle,35714)?(this._initializeSamplerUniforms(),i.validateProgram(this.handle),i.getProgramParameter(this.handle,35715)?(this.linkStatus="success","success"):(this.linkStatus="error","validation-error")):(this.linkStatus="error","link-error")}_initializeSamplerUniforms(){let{gl:i}=this.device;i.useProgram(this.handle);let r=0,o=i.getProgramParameter(this.handle,35718);for(let n=0;n<o;n++){let s=i.getActiveUniform(this.handle,n);if(s&&zs(s.type)){let a=s.name.endsWith("[0]"),l=a?s.name.slice(0,-3):s.name,c=i.getUniformLocation(this.handle,l);c!==null&&(r=this._assignSamplerUniform(c,s,a,r))}}}_assignSamplerUniform(i,r,o,n){let{gl:s}=this.device;if(o&&r.size>1){let a=Int32Array.from({length:r.size},(l,c)=>n+c);return s.uniform1iv(i,a),n+r.size}return s.uniform1i(i,n),n+1}async _waitForLinkComplete(){let i=async n=>await new Promise(s=>setTimeout(s,n));if(!this.device.features.has("compilation-status-async-webgl")){await i(10);return}let{gl:o}=this.device;for(;;){if(o.getProgramParameter(this.handle,37297))return;await i(10)}}}});function QT(e,t){let i=t.sourceBuffer,r=t.destinationBuffer;e.gl.bindBuffer(36662,i.handle),e.gl.bindBuffer(36663,r.handle),e.gl.copyBufferSubData(36662,36663,t.sourceOffset??0,t.destinationOffset??0,t.size),e.gl.bindBuffer(36662,null),e.gl.bindBuffer(36663,null)}function JT(e,t){throw new Error("copyBufferToTexture is not supported in WebGL")}function e_(e,t){let{sourceTexture:i,mipLevel:r=0,aspect:o="all",width:n=t.sourceTexture.width,height:s=t.sourceTexture.height,depthOrArrayLayers:a,origin:l=[0,0,0],destinationBuffer:c,byteOffset:d=0,bytesPerRow:u,rowsPerImage:f}=t;if(i instanceof z){i.readBuffer({x:l[0]??0,y:l[1]??0,z:l[2]??0,width:n,height:s,depthOrArrayLayers:a,mipLevel:r,aspect:o,byteOffset:d},c);return}if(o!=="all")throw new Error("aspect not supported in WebGL");if(r!==0||a!==void 0||u||f)throw new Error("not implemented");let{framebuffer:h,destroyFramebuffer:m}=ng(i),x;try{let S=c,y=n||h.width,A=s||h.height,_=Kt(h.colorAttachments[0]),v=vs(_.texture.props.format),P=v.format,T=v.type;e.gl.bindBuffer(35051,S.handle),x=e.gl.bindFramebuffer(36160,h.handle),e.gl.readPixels(l[0],l[1],y,A,P,T,d)}finally{e.gl.bindBuffer(35051,null),x!==void 0&&e.gl.bindFramebuffer(36160,x),m&&h.destroy()}}function t_(e,t){let{sourceTexture:i,destinationMipLevel:r=0,origin:o=[0,0],destinationOrigin:n=[0,0,0],destinationTexture:s}=t,{width:a=t.destinationTexture.width,height:l=t.destinationTexture.height}=t,{framebuffer:c,destroyFramebuffer:d}=ng(i),[u=0,f=0]=o,[h,m,x]=n,S=e.gl.bindFramebuffer(36160,c.handle),y,A;if(s instanceof It)y=s,a=Number.isFinite(a)?a:y.width,l=Number.isFinite(l)?l:y.height,y._bind(0),A=y.glTarget;else throw new Error("invalid destination");switch(A){case 3553:case 34067:e.gl.copyTexSubImage2D(A,r,h,m,u,f,a,l);break;case 35866:case 32879:e.gl.copyTexSubImage3D(A,r,h,m,x,u,f,a,l);break;default:}y&&y._unbind(),e.gl.bindFramebuffer(36160,S),d&&c.destroy()}function ng(e){if(e instanceof z){let{width:t,height:i,id:r}=e;return{framebuffer:e.device.createFramebuffer({id:`framebuffer-for-${r}`,width:t,height:i,colorAttachments:[e]}),destroyFramebuffer:!0}}return{framebuffer:e,destroyFramebuffer:!1}}var Ws,sg=E(()=>{te();or();Ns();Ws=class extends oo{constructor(i,r={}){super(i,r);p(this,"device");p(this,"handle",null);p(this,"commands",[]);this.device=i}_executeCommands(i=this.commands){for(let r of i)switch(r.name){case"copy-buffer-to-buffer":QT(this.device,r.options);break;case"copy-buffer-to-texture":JT(this.device,r.options);break;case"copy-texture-to-buffer":e_(this.device,r.options);break;case"copy-texture-to-texture":t_(this.device,r.options);break;default:throw new Error(r.name)}}}});var i_,Vs,ag=E(()=>{te();Ms();tr();i_=[1,2,4,8],Vs=class extends io{constructor(i,r){super(i,r);p(this,"device");p(this,"handle",null);p(this,"glParameters",{});this.device=i;let o=this.props.framebuffer,n=!o||o.handle===null;n&&i.getDefaultCanvasContext()._resizeDrawingBufferIfNeeded();let s;if(!r?.parameters?.viewport)if(!n&&o){let{width:a,height:l}=o;s=[0,0,a,l]}else{let[a,l]=i.getDefaultCanvasContext().getDrawingBufferSize();s=[0,0,a,l]}if(this.device.pushState(),this.setParameters({viewport:s,...this.props.parameters}),!n&&o?.colorAttachments.length){let a=o.colorAttachments.map((l,c)=>36064+c);this.device.gl.drawBuffers(a)}else n&&this.device.gl.drawBuffers([1029]);this.clear(),this.props.timestampQuerySet&&this.props.beginTimestampIndex!==void 0&&this.props.timestampQuerySet.writeTimestamp(this.props.beginTimestampIndex)}end(){this.destroyed||(this.props.timestampQuerySet&&this.props.endTimestampIndex!==void 0&&this.props.timestampQuerySet.writeTimestamp(this.props.endTimestampIndex),this.device.popState(),this.destroy())}pushDebugGroup(i){}popDebugGroup(){}insertDebugMarker(i){}setParameters(i={}){let r={...this.glParameters};r.framebuffer=this.props.framebuffer||null,this.props.depthReadOnly&&(r.depthMask=!this.props.depthReadOnly),r.stencilMask=this.props.stencilReadOnly?0:1,r[35977]=this.props.discard,i.viewport&&(i.viewport.length>=6?(r.viewport=i.viewport.slice(0,4),r.depthRange=[i.viewport[4],i.viewport[5]]):r.viewport=i.viewport),i.scissorRect&&(r.scissorTest=!0,r.scissor=i.scissorRect),i.blendConstant&&(r.blendColor=i.blendConstant),i.stencilReference!==void 0&&(r[2967]=i.stencilReference,r[36003]=i.stencilReference),"colorMask"in i&&(r.colorMask=i_.map(o=>!!(o&i.colorMask))),this.glParameters=r,lt(this.device.gl,r)}beginOcclusionQuery(i){this.props.occlusionQuerySet?.beginOcclusionQuery()}endOcclusionQuery(){this.props.occlusionQuerySet?.endOcclusionQuery()}clear(){let i={...this.glParameters},r=0;this.props.clearColors&&this.props.clearColors.forEach((o,n)=>{o&&this.clearColorBuffer(n,o)}),this.props.clearColor!==!1&&this.props.clearColors===void 0&&(r|=16384,i.clearColor=this.props.clearColor),this.props.clearDepth!==!1&&(r|=256,i.clearDepth=this.props.clearDepth),this.props.clearStencil!==!1&&(r|=1024,i.clearStencil=this.props.clearStencil),r!==0&&Rt(this.device.gl,i,()=>{this.device.gl.clear(r)})}clearColorBuffer(i=0,r=[0,0,0,0]){Rt(this.device.gl,{framebuffer:this.props.framebuffer},()=>{switch(r.constructor){case Int8Array:case Int16Array:case Int32Array:this.device.gl.clearBufferiv(6144,i,r);break;case Uint8Array:case Uint8ClampedArray:case Uint16Array:case Uint32Array:this.device.gl.clearBufferuiv(6144,i,r);break;case Float32Array:this.device.gl.clearBufferfv(6144,i,r);break;default:throw new Error("clearColorBuffer: color must be typed array")}})}}});var go,lg=E(()=>{te();sg();ag();go=class extends ro{constructor(i,r){super(i,r);p(this,"device");p(this,"handle",null);p(this,"commandBuffer");this.device=i,this.commandBuffer=new Ws(i,{id:`${this.props.id}-command-buffer`})}destroy(){this.destroyResource()}finish(i){return i?.id&&this.commandBuffer.id!==i.id&&(this.commandBuffer.id=i.id,this.commandBuffer.props.id=i.id),this.destroy(),this.commandBuffer}beginRenderPass(i={}){return new Vs(this.device,this._applyTimeProfilingToPassProps(i))}beginComputePass(i={}){throw new Error("ComputePass not supported in WebGL")}copyBufferToBuffer(i){this.commandBuffer.commands.push({name:"copy-buffer-to-buffer",options:i})}copyBufferToTexture(i){this.commandBuffer.commands.push({name:"copy-buffer-to-texture",options:i})}copyTextureToBuffer(i){this.commandBuffer.commands.push({name:"copy-texture-to-buffer",options:i})}copyTextureToTexture(i){this.commandBuffer.commands.push({name:"copy-texture-to-texture",options:i})}pushDebugGroup(i){}popDebugGroup(){}insertDebugMarker(i){}resolveQuerySet(i,r,o){throw new Error("resolveQuerySet is not supported in WebGL")}writeTimestamp(i,r){i.writeTimestamp(r)}}});function cg(e){let{target:t,source:i,start:r=0,count:o=1}=e,n=i.length,s=o*n,a=0;for(let l=r;a<n;a++)t[l++]=i[a]??0;for(;a<s;)a<s-a?(t.copyWithin(r+a,r,r+a),a*=2):(t.copyWithin(r+a,r,r+s-a),a=s);return e.target}var dg=E(()=>{});function r_(e){return Array.isArray(e)?new Float32Array(e):e}function o_(e,t){if(!e||!t||e.length!==t.length||e.constructor!==t.constructor)return!1;for(let i=0;i<e.length;++i)if(e[i]!==t[i])return!1;return!0}var Hs,ug=E(()=>{te();Yt();yc();dg();Hs=class e extends no{constructor(i,r){super(i,r);p(this,"device");p(this,"handle");p(this,"buffer",null);p(this,"bufferValue",null);this.device=i,this.handle=this.device.gl.createVertexArray()}get[Symbol.toStringTag](){return"VertexArray"}static isConstantAttributeZeroSupported(i){return _l()==="Chrome"}destroy(){super.destroy(),this.buffer&&this.buffer?.destroy(),this.handle&&(this.device.gl.deleteVertexArray(this.handle),this.handle=void 0)}setIndexBuffer(i){let r=i;if(r&&r.glTarget!==34963)throw new Error("Use .setBuffer()");this.device.gl.bindVertexArray(this.handle),this.device.gl.bindBuffer(34963,r?r.handle:null),this.indexBuffer=r,this.device.gl.bindVertexArray(null)}setBuffer(i,r){let o=r;if(o.glTarget===34963)throw new Error("Use .setIndexBuffer()");let{size:n,type:s,stride:a,offset:l,normalized:c,integer:d,divisor:u}=this._getAccessor(i);this.device.gl.bindVertexArray(this.handle),this.device.gl.bindBuffer(34962,o.handle),d?this.device.gl.vertexAttribIPointer(i,n,s,a,l):this.device.gl.vertexAttribPointer(i,n,s,c,a,l),this.device.gl.bindBuffer(34962,null),this.device.gl.enableVertexAttribArray(i),this.device.gl.vertexAttribDivisor(i,u||0),this.attributes[i]=o,this.device.gl.bindVertexArray(null)}setConstantWebGL(i,r){this._enable(i,!1),this.attributes[i]=r}bindBeforeRender(){this.device.gl.bindVertexArray(this.handle),this._applyConstantAttributes()}unbindAfterRender(){this.device.gl.bindVertexArray(null)}_applyConstantAttributes(){for(let i=0;i<this.maxVertexAttributes;++i){let r=this.attributes[i];ArrayBuffer.isView(r)&&this.device.setConstantAttributeWebGL(i,r)}}_getAccessor(i){let r=this.attributeInfos[i];if(!r)throw new Error(`Unknown attribute location ${i}`);let o=ms(r.bufferDataType);return{size:r.bufferComponents,type:o,stride:r.byteStride,offset:r.byteOffset,normalized:r.normalized,integer:r.integer,divisor:r.stepMode==="instance"?1:0}}_enable(i,r=!0){let n=e.isConstantAttributeZeroSupported(this.device)||i!==0;(r||n)&&(i=Number(i),this.device.gl.bindVertexArray(this.handle),r?this.device.gl.enableVertexAttribArray(i):this.device.gl.disableVertexAttribArray(i),this.device.gl.bindVertexArray(null))}getConstantBuffer(i,r){let o=r_(r),n=o.byteLength*i,s=o.length*i;if(this.buffer&&n!==this.buffer.byteLength)throw new Error(`Buffer size is immutable, byte length ${n} !== ${this.buffer.byteLength}.`);let a=!this.buffer;if(this.buffer=this.buffer||this.device.createBuffer({byteLength:n}),a||(a=!o_(o,this.bufferValue)),a){let l=cc(r.constructor,s);cg({target:l,source:o,start:0,count:s}),this.buffer.write(l),this.bufferValue=r}return this.buffer}}});function fg(e){return typeof e=="number"?Number.isInteger(e):/^\d+$/.test(e)}var $s,hg=E(()=>{te();Nc();kc();$s=class extends so{constructor(i,r){super(i,r);p(this,"device");p(this,"gl");p(this,"handle");p(this,"layout");p(this,"buffers",{});p(this,"unusedBuffers",{});p(this,"bindOnUse",!0);p(this,"_bound",!1);this.device=i,this.gl=i.gl,this.handle=this.props.handle||this.gl.createTransformFeedback(),this.layout=this.props.layout,r.buffers&&this.setBuffers(r.buffers),Object.seal(this)}destroy(){this.gl.deleteTransformFeedback(this.handle),super.destroy()}begin(i="point-list"){this.gl.bindTransformFeedback(36386,this.handle),this.bindOnUse&&this._bindBuffers(),this.gl.beginTransformFeedback(Gm(i))}end(){this.gl.endTransformFeedback(),this.bindOnUse&&this._unbindBuffers(),this.gl.bindTransformFeedback(36386,null)}setBuffers(i){this.buffers={},this.unusedBuffers={},this.bind(()=>{for(let[r,o]of Object.entries(i))this.setBuffer(r,o)})}setBuffer(i,r){let o=this._getVaryingIndex(i),{buffer:n,byteLength:s,byteOffset:a}=this._getBufferRange(r);if(o<0){this.unusedBuffers[i]=n,w.warn(`${this.id} unusedBuffers varying buffer ${i}`)();return}this.buffers[o]={buffer:n,byteLength:s,byteOffset:a},this.bindOnUse||this._bindBuffer(o,n,a,s)}getBuffer(i){if(fg(i))return this.buffers[i]||null;let r=this._getVaryingIndex(i);return this.buffers[r]??null}bind(i=this.handle){if(typeof i!="function")return this.gl.bindTransformFeedback(36386,i),this;let r;return this._bound?r=i():(this.gl.bindTransformFeedback(36386,this.handle),this._bound=!0,r=i(),this._bound=!1,this.gl.bindTransformFeedback(36386,null)),r}unbind(){this.bind(null)}_getBufferRange(i){if(i instanceof ut)return{buffer:i,byteOffset:0,byteLength:i.byteLength};let{buffer:r,byteOffset:o=0,byteLength:n=i.buffer.byteLength}=i;return{buffer:r,byteOffset:o,byteLength:n}}_getVaryingIndex(i){if(fg(i))return Number(i);for(let r of this.layout.varyings||[])if(i===r.name)return r.location;return-1}_bindBuffers(){for(let[i,r]of Object.entries(this.buffers)){let{buffer:o,byteLength:n,byteOffset:s}=this._getBufferRange(r);this._bindBuffer(Number(i),o,s,n)}}_unbindBuffers(){for(let i in this.buffers)this.gl.bindBufferBase(35982,Number(i),null)}_bindBuffer(i,r,o=0,n){let s=r&&r.handle;!s||n===void 0?this.gl.bindBufferBase(35982,i,s):this.gl.bindBufferRange(35982,i,s,o,n)}}});var Xs,pg=E(()=>{te();Xs=class extends ao{constructor(i,r){super(i,r);p(this,"device");p(this,"handle");p(this,"_timestampPairs",[]);p(this,"_pendingReads",new Set);p(this,"_occlusionQuery",null);p(this,"_occlusionActive",!1);if(this.device=i,r.type==="timestamp"){if(r.count<2)throw new Error("Timestamp QuerySet requires at least two query slots");this._timestampPairs=new Array(Math.ceil(r.count/2)).fill(null).map(()=>({activeQuery:null,completedQueries:[]})),this.handle=null}else{if(r.count>1)throw new Error("WebGL occlusion QuerySet can only have one value");let o=this.device.gl.createQuery();if(!o)throw new Error("WebGL query not supported");this.handle=o}Object.seal(this)}get[Symbol.toStringTag](){return"QuerySet"}destroy(){if(!this.destroyed){this.handle&&this.device.gl.deleteQuery(this.handle);for(let i of this._timestampPairs){i.activeQuery&&(this._cancelPendingQuery(i.activeQuery),this.device.gl.deleteQuery(i.activeQuery.handle));for(let r of i.completedQueries)this._cancelPendingQuery(r),this.device.gl.deleteQuery(r.handle)}this._occlusionQuery&&(this._cancelPendingQuery(this._occlusionQuery),this.device.gl.deleteQuery(this._occlusionQuery.handle));for(let i of Array.from(this._pendingReads))this._cancelPendingQuery(i);this.destroyResource()}}isResultAvailable(i){return this.props.type==="timestamp"?i===void 0?this._timestampPairs.some((r,o)=>this._isTimestampPairAvailable(o)):this._isTimestampPairAvailable(this._getTimestampPairIndex(i)):this._occlusionQuery?this._pollQueryAvailability(this._occlusionQuery):!1}async readResults(i){let r=i?.firstQuery||0,o=i?.queryCount||this.props.count-r;if(this._validateRange(r,o),this.props.type==="timestamp"){let n=new Array(o).fill(0n),s=Math.floor(r/2),a=Math.floor((r+o-1)/2);for(let l=s;l<=a;l++){let c=await this._consumeTimestampPairResult(l),d=l*2,u=d+1;d>=r&&d<r+o&&(n[d-r]=0n),u>=r&&u<r+o&&(n[u-r]=c)}return n}if(!this._occlusionQuery)throw new Error("Occlusion query has not been started");return[await this._consumeQueryResult(this._occlusionQuery)]}async readTimestampDuration(i,r){if(this.props.type!=="timestamp")throw new Error("Timestamp durations require a timestamp QuerySet");if(i<0||r>=this.props.count||r<=i)throw new Error("Timestamp duration range is out of bounds");if(i%2!==0||r!==i+1)throw new Error("WebGL timestamp durations require adjacent even/odd query indices");let o=await this._consumeTimestampPairResult(this._getTimestampPairIndex(i));return Number(o)/1e6}beginOcclusionQuery(){if(this.props.type!=="occlusion")throw new Error("Occlusion queries require an occlusion QuerySet");if(!this.handle)throw new Error("WebGL occlusion query is not available");if(this._occlusionActive)throw new Error("Occlusion query is already active");this.device.gl.beginQuery(35887,this.handle),this._occlusionQuery={handle:this.handle,promise:null,result:null,disjoint:!1,cancelled:!1,pollRequestId:null,resolve:null,reject:null},this._occlusionActive=!0}endOcclusionQuery(){if(!this._occlusionActive)throw new Error("Occlusion query is not active");this.device.gl.endQuery(35887),this._occlusionActive=!1}writeTimestamp(i){if(this.props.type!=="timestamp")throw new Error("Timestamp writes require a timestamp QuerySet");let r=this._getTimestampPairIndex(i),o=this._timestampPairs[r];if(i%2===0){if(o.activeQuery)throw new Error("Timestamp query pair is already active");let n=this.device.gl.createQuery();if(!n)throw new Error("WebGL query not supported");let s={handle:n,promise:null,result:null,disjoint:!1,cancelled:!1,pollRequestId:null,resolve:null,reject:null};this.device.gl.beginQuery(35007,n),o.activeQuery=s;return}if(!o.activeQuery)throw new Error("Timestamp query pair was ended before it was started");this.device.gl.endQuery(35007),o.completedQueries.push(o.activeQuery),o.activeQuery=null}_validateRange(i,r){if(i<0||r<0||i+r>this.props.count)throw new Error("Query read range is out of bounds")}_getTimestampPairIndex(i){if(i<0||i>=this.props.count)throw new Error("Query index is out of bounds");return Math.floor(i/2)}_isTimestampPairAvailable(i){let r=this._timestampPairs[i];return!r||r.completedQueries.length===0?!1:this._pollQueryAvailability(r.completedQueries[0])}_pollQueryAvailability(i){if(i.cancelled||this.destroyed)return i.result=0n,!0;if(i.result!==null||i.disjoint)return!0;if(!this.device.gl.getQueryParameter(i.handle,34919))return!1;let o=!!this.device.gl.getParameter(36795);return i.disjoint=o,i.result=o?0n:BigInt(this.device.gl.getQueryParameter(i.handle,34918)),!0}async _consumeTimestampPairResult(i){let r=this._timestampPairs[i];if(!r||r.completedQueries.length===0)throw new Error("Timestamp query pair has no completed result");let o=r.completedQueries.shift();try{return await this._consumeQueryResult(o)}finally{this.device.gl.deleteQuery(o.handle)}}_consumeQueryResult(i){return i.promise||(this._pendingReads.add(i),i.promise=new Promise((r,o)=>{i.resolve=r,i.reject=o;let n=()=>{if(i.pollRequestId=null,i.cancelled||this.destroyed){this._pendingReads.delete(i),i.promise=null,i.resolve=null,i.reject=null,r(0n);return}if(!this._pollQueryAvailability(i)){i.pollRequestId=this._requestAnimationFrame(n);return}this._pendingReads.delete(i),i.promise=null,i.resolve=null,i.reject=null,i.disjoint?o(new Error("GPU timestamp query was invalidated by a disjoint event")):r(i.result||0n)};n()})),i.promise}_cancelPendingQuery(i){if(this._pendingReads.delete(i),i.cancelled=!0,i.pollRequestId!==null&&(this._cancelAnimationFrame(i.pollRequestId),i.pollRequestId=null),i.resolve){let r=i.resolve;i.promise=null,i.resolve=null,i.reject=null,r(0n)}}_requestAnimationFrame(i){return requestAnimationFrame(i)}_cancelAnimationFrame(i){cancelAnimationFrame(i)}}});var js,mg=E(()=>{te();js=class extends lo{constructor(i,r={}){super(i,{});p(this,"device");p(this,"gl");p(this,"handle");p(this,"signaled");p(this,"_signaled",!1);this.device=i,this.gl=i.gl;let o=this.props.handle||this.gl.fenceSync(this.gl.SYNC_GPU_COMMANDS_COMPLETE,0);if(!o)throw new Error("Failed to create WebGL fence");this.handle=o,this.signaled=new Promise(n=>{let s=()=>{let a=this.gl.clientWaitSync(this.handle,0,0);a===this.gl.ALREADY_SIGNALED||a===this.gl.CONDITION_SATISFIED?(this._signaled=!0,n()):setTimeout(s,1)};s()})}isSignaled(){if(this._signaled)return!0;let i=this.gl.getSyncParameter(this.handle,this.gl.SYNC_STATUS);return this._signaled=i===this.gl.SIGNALED,this._signaled}destroy(){this.destroyed||this.gl.deleteSync(this.handle)}}});function Bc(e){switch(e){case 6406:case 33326:case 6403:case 36244:return 1;case 33339:case 33340:case 33328:case 33320:case 33319:return 2;case 6407:case 36248:case 34837:return 3;case 6408:case 36249:case 34836:return 4;default:return 0}}function gg(e){switch(e){case 5121:return 1;case 33635:case 32819:case 32820:return 2;case 5126:return 4;default:return 0}}var xg=E(()=>{});function Sg(e,t){let{sourceX:i=0,sourceY:r=0,sourceAttachment:o=0}=t||{},{target:n=null,sourceWidth:s,sourceHeight:a,sourceDepth:l,sourceFormat:c,sourceType:d}=t||{},{framebuffer:u,deleteFramebuffer:f}=yg(e),{gl:h,handle:m}=u;s||(s=u.width),a||(a=u.height);let x=u.colorAttachments[o]?.texture;if(!x)throw new Error(`Invalid framebuffer attachment ${o}`);l=x?.depth||1,c||(c=x?.glFormat||6408),d||(d=x?.glType||5121),n=s_(n,d,c,s,a,l);let S=et.getDataType(n);d=d||Qm(S);let y=h.bindFramebuffer(36160,m);return h.readBuffer(36064+o),h.readPixels(i,r,s,a,c,d,n),h.readBuffer(36064),h.bindFramebuffer(36160,y||null),f&&u.destroy(),n}function vg(e,t){let{target:i,sourceX:r=0,sourceY:o=0,sourceFormat:n=6408,targetByteOffset:s=0}=t||{},{sourceWidth:a,sourceHeight:l,sourceType:c}=t||{},{framebuffer:d,deleteFramebuffer:u}=yg(e);a=a||d.width,l=l||d.height;let f=d;c=c||5121;let h=i;if(!h){let x=Bc(n),S=gg(c),y=s+a*l*x*S;h=f.device.createBuffer({byteLength:y})}let m=e.device.createCommandEncoder();return m.copyTextureToBuffer({sourceTexture:e,width:a,height:l,origin:[r,o],destinationBuffer:h,byteOffset:s}),m.destroy(),u&&d.destroy(),h}function yg(e){return e instanceof bi?{framebuffer:e,deleteFramebuffer:!1}:{framebuffer:n_(e),deleteFramebuffer:!0}}function n_(e,t){let{device:i,width:r,height:o,id:n}=e;return i.createFramebuffer({...t,id:`framebuffer-for-${n}`,width:r,height:o,colorAttachments:[e]})}function s_(e,t,i,r,o,n){if(e)return e;t||(t=5121);let s=Fs(t),a=et.getTypedArrayConstructor(s),l=Bc(i);return new a(r*o*l)}var bg=E(()=>{te();Us();xg();Fc()});var zc={};Pr(zc,{WebGLDevice:()=>Oc});function a_(e,t,i){switch(i.length){case 1:e.gl.vertexAttrib1fv(t,i);break;case 2:e.gl.vertexAttrib2fv(t,i);break;case 3:e.gl.vertexAttrib3fv(t,i);break;case 4:e.gl.vertexAttrib4fv(t,i);break;default:}}function l_(e,t,i){e.gl.vertexAttribI4iv(t,i)}function c_(e,t,i){e.gl.vertexAttribI4uiv(t,i)}function d_(e,t){if(!e||!t||e.length!==t.length||e.constructor!==t.constructor)return!1;for(let i=0;i<e.length;++i)if(e[i]!==t[i])return!1;return!0}var Oc,Uc=E(()=>{te();vc();Tm();fs();Cm();Fm();km();Nm();Bm();hc();pc();or();zm();Cs();Wm();$m();Ns();Ts();Zm();og();lg();ug();hg();pg();mg();bg();tr();Ms();ho();Oc=class e extends nt{constructor(i){super({...i,id:i.id||Om("webgl-device")});p(this,"type","webgl");p(this,"handle");p(this,"features");p(this,"limits");p(this,"info");p(this,"canvasContext");p(this,"preferredColorFormat","rgba8unorm");p(this,"preferredDepthFormat","depth24plus");p(this,"commandEncoder");p(this,"lost");p(this,"_resolveContextLost");p(this,"gl");p(this,"_constants");p(this,"extensions");p(this,"_polyfilled",!1);p(this,"spectorJS");let r=nt._getCanvasContextProps(i);if(!r)throw new Error("WebGLDevice requires props.createCanvasContext to be set");let o=r.canvas?.gl??null,n=e.getDeviceFromContext(o);if(n)throw new Error(`WebGL context already attached to device ${n.id}`);this.canvasContext=new _s(this,r),this.lost=new Promise(u=>{this._resolveContextLost=u});let s={...i.webgl};r.alphaMode==="premultiplied"&&(s.premultipliedAlpha=!0),i.powerPreference!==void 0&&(s.powerPreference=i.powerPreference),i.failIfMajorPerformanceCaveat!==void 0&&(s.failIfMajorPerformanceCaveat=i.failIfMajorPerformanceCaveat);let l=this.props._handle||bm(this.canvasContext.canvas,{onContextLost:u=>this._resolveContextLost?.({reason:"destroyed",message:"Entered sleep mode, or too many apps or browser tabs are using the GPU."}),onContextRestored:u=>console.log("WebGL context restored")},s);if(!l)throw new Error("WebGL context creation failed");if(n=e.getDeviceFromContext(l),n){if(i._reuseDevices)return w.log(1,`Not creating a new Device, instead returning a reference to Device ${n.id} already attached to WebGL context`,n)(),this.canvasContext.destroy(),n._reused=!0,n;throw new Error(`WebGL context already attached to device ${n.id}`)}this.handle=l,this.gl=l,this.spectorJS=sm({...this.props,gl:this.handle});let c=Ti(this.handle);c.device=this,c.extensions||(c.extensions={}),this.extensions=c.extensions,this.info=_m(this.gl,this.extensions),this.limits=new bs(this.gl),this.features=new ys(this.gl,this.extensions,this.props._disabledFeatures),this.props._initializeFeatures&&this.features.initializeFeatures(),new ct(this.gl,{log:(...u)=>w.log(1,...u)()}).trackState(this.gl,{copyState:!1}),(i.debug||i.debugWebGL)&&(this.gl=dm(this.gl,{debugWebGL:!0,traceWebGL:i.debugWebGL}),w.warn("WebGL debug mode activated. Performance reduced.")()),i.debugWebGL&&(w.level=Math.max(w.level,1)),this.commandEncoder=new go(this,{id:`${this}-command-encoder`}),this.canvasContext._startObservers()}static getDeviceFromContext(i){return i?i.luma?.device??null:null}get[Symbol.toStringTag](){return"WebGLDevice"}toString(){return`${this[Symbol.toStringTag]}(${this.id})`}isVertexFormatSupported(i){return i!=="unorm8x4-bgra"}destroy(){if(this.commandEncoder?.destroy(),!this.props._reuseDevices&&!this._reused){let i=Ti(this.handle);i.device=null}}get isLost(){return this.gl.isContextLost()}createCanvasContext(i){throw new Error("WebGL only supports a single canvas")}createPresentationContext(i){return new Ps(this,i||{})}createBuffer(i){let r=this._normalizeBufferProps(i);return new ut(this,r)}createTexture(i){return new It(this,i)}createExternalTexture(i){throw new Error("createExternalTexture() not implemented")}createSampler(i){return new Ds(this,i)}createShader(i){return new ws(this,i)}createFramebuffer(i){return new wt(this,i)}createVertexArray(i){return new Hs(this,i)}createTransformFeedback(i){return new $s(this,i)}createQuerySet(i){return new Xs(this,i)}createFence(){return new js(this)}createRenderPipeline(i){return new Bs(this,i)}_createSharedRenderPipelineWebGL(i){return new Ls(this,i)}createComputePipeline(i){throw new Error("ComputePipeline not supported in WebGL")}createCommandEncoder(i={}){return new go(this,i)}submit(i){let r=null;i||({submittedCommandEncoder:r,commandBuffer:i}=this._finalizeDefaultCommandEncoderForSubmit());try{i._executeCommands(),r&&r.resolveTimeProfilingQuerySet().then(()=>{this.commandEncoder._gpuTimeMs=r._gpuTimeMs}).catch(()=>{})}finally{i.destroy()}}_finalizeDefaultCommandEncoderForSubmit(){let i=this.commandEncoder,r=i.finish();return this.commandEncoder.destroy(),this.commandEncoder=this.createCommandEncoder({id:i.props.id,timeProfilingQuerySet:i.getTimeProfilingQuerySet()}),{submittedCommandEncoder:i,commandBuffer:r}}readPixelsToArrayWebGL(i,r){return Sg(i,r)}readPixelsToBufferWebGL(i,r){return vg(i,r)}setParametersWebGL(i){lt(this.gl,i)}getParametersWebGL(i){return ps(this.gl,i)}withParametersWebGL(i,r){return Rt(this.gl,i,r)}resetWebGL(){w.warn("WebGLDevice.resetWebGL is deprecated, use only for debugging")(),gm(this.gl)}_getDeviceSpecificTextureFormatCapabilities(i){return Im(this.gl,i,this.extensions)}loseDevice(){let i=!1,o=this.getExtension("WEBGL_lose_context").WEBGL_lose_context;return o&&(i=!0,o.loseContext()),this._resolveContextLost?.({reason:"destroyed",message:"Application triggered context loss"}),i}pushState(){ct.get(this.gl).push()}popState(){ct.get(this.gl).pop()}getGLKey(i,r){let o=Number(i);for(let n in this.gl)if(this.gl[n]===o)return`GL.${n}`;return r?.emptyIfUnknown?"":String(i)}getGLKeys(i){let r={emptyIfUnknown:!0};return Object.entries(i).reduce((o,[n,s])=>(o[`${n}:${this.getGLKey(n,r)}`]=`${s}:${this.getGLKey(s,r)}`,o),{})}setConstantAttributeWebGL(i,r){let o=this.limits.maxVertexAttributes;this._constants=this._constants||new Array(o).fill(null);let n=this._constants[i];switch(n&&d_(n,r)&&w.info(1,`setConstantAttributeWebGL(${i}) could have been skipped, value unchanged`)(),this._constants[i]=r,r.constructor){case Float32Array:a_(this,i,r);break;case Int32Array:l_(this,i,r);break;case Uint32Array:c_(this,i,r);break;default:throw new Error("constant")}}getExtension(i){return dt(this.gl,i,this.extensions),this.extensions}_setWebGLDebugMetadata(i,r,o){i.luma=r;let n={props:o.spector,id:o.spector.id};i.__SPECTOR_Metadata=n}}});function u_(e){return typeof WebGL2RenderingContext<"u"&&e instanceof WebGL2RenderingContext?!0:!!(e&&typeof e.createVertexArray=="function")}var xo,Lc,Wc,Tg=E(()=>{te();rm();hc();pc();xo=1,Lc=class extends Gr{constructor(){super();p(this,"type","webgl");nt.defaultProps={...nt.defaultProps,...hs}}enforceWebGL2(i){im(i)}isSupported(){return typeof WebGL2RenderingContext<"u"}isDeviceHandle(i){return typeof WebGL2RenderingContext<"u"&&i instanceof WebGL2RenderingContext?!0:(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext&&w.warn("WebGL1 is not supported",i)(),!1)}async attach(i,r={}){let{WebGLDevice:o}=await Promise.resolve().then(()=>(Uc(),zc));if(i instanceof o)return i;let n=o.getDeviceFromContext(i);if(n)return n;if(!u_(i))throw new Error("Invalid WebGL2RenderingContext");let s=r.createCanvasContext===!0?{}:r.createCanvasContext;return new o({...r,_handle:i,createCanvasContext:{canvas:i.canvas,autoResize:!1,...s}})}async create(i={}){let{WebGLDevice:r}=await Promise.resolve().then(()=>(Uc(),zc)),o=[];(i.debugWebGL||i.debug)&&o.push(cm()),i.debugSpectorJS&&o.push(nm(i));let n=await Promise.allSettled(o);for(let s of n)s.status==="rejected"&&w.error(`Failed to initialize debug libraries ${s.reason}`)();try{let s=new r(i);w.groupCollapsed(xo,`WebGLDevice ${s.id} created`)();let a=`${s._reused?"Reusing":"Created"} device with WebGL2 ${s.props.debug?"debug ":""}context: ${s.info.vendor}, ${s.info.renderer} for canvas: ${s.canvasContext.id}`;return w.probe(xo,a)(),w.table(xo,s.info)(),s}finally{w.groupEnd(xo)(),w.info(xo,"%cWebGL call tracing: luma.log.set('debug-webgl') ","color: white; background: blue; padding: 2px 6px; border-radius: 3px;")()}}};Wc=new Lc});var Nc=E(()=>{Tg();Cs()});var Sx=bt((xx,gd)=>{(function(e,t,i){function r(a){var l=this,c=s();l.next=function(){var d=2091639*l.s0+l.c*23283064365386963e-26;return l.s0=l.s1,l.s1=l.s2,l.s2=d-(l.c=d|0)},l.c=1,l.s0=c(" "),l.s1=c(" "),l.s2=c(" "),l.s0-=c(a),l.s0<0&&(l.s0+=1),l.s1-=c(a),l.s1<0&&(l.s1+=1),l.s2-=c(a),l.s2<0&&(l.s2+=1),c=null}function o(a,l){return l.c=a.c,l.s0=a.s0,l.s1=a.s1,l.s2=a.s2,l}function n(a,l){var c=new r(a),d=l&&l.state,u=c.next;return u.int32=function(){return c.next()*4294967296|0},u.double=function(){return u()+(u()*2097152|0)*11102230246251565e-32},u.quick=u,d&&(typeof d=="object"&&o(d,c),u.state=function(){return o(c,{})}),u}function s(){var a=4022871197,l=function(c){c=String(c);for(var d=0;d<c.length;d++){a+=c.charCodeAt(d);var u=.02519603282416938*a;a=u>>>0,u-=a,u*=a,a=u>>>0,u-=a,a+=u*4294967296}return(a>>>0)*23283064365386963e-26};return l}t&&t.exports?t.exports=n:i&&i.amd?i(function(){return n}):this.alea=n})(xx,typeof gd=="object"&&gd,typeof define=="function"&&define)});var yx=bt((vx,xd)=>{(function(e,t,i){function r(s){var a=this,l="";a.x=0,a.y=0,a.z=0,a.w=0,a.next=function(){var d=a.x^a.x<<11;return a.x=a.y,a.y=a.z,a.z=a.w,a.w^=a.w>>>19^d^d>>>8},s===(s|0)?a.x=s:l+=s;for(var c=0;c<l.length+64;c++)a.x^=l.charCodeAt(c)|0,a.next()}function o(s,a){return a.x=s.x,a.y=s.y,a.z=s.z,a.w=s.w,a}function n(s,a){var l=new r(s),c=a&&a.state,d=function(){return(l.next()>>>0)/4294967296};return d.double=function(){do var u=l.next()>>>11,f=(l.next()>>>0)/4294967296,h=(u+f)/(1<<21);while(h===0);return h},d.int32=l.next,d.quick=d,c&&(typeof c=="object"&&o(c,l),d.state=function(){return o(l,{})}),d}t&&t.exports?t.exports=n:i&&i.amd?i(function(){return n}):this.xor128=n})(vx,typeof xd=="object"&&xd,typeof define=="function"&&define)});var Tx=bt((bx,Sd)=>{(function(e,t,i){function r(s){var a=this,l="";a.next=function(){var d=a.x^a.x>>>2;return a.x=a.y,a.y=a.z,a.z=a.w,a.w=a.v,(a.d=a.d+362437|0)+(a.v=a.v^a.v<<4^(d^d<<1))|0},a.x=0,a.y=0,a.z=0,a.w=0,a.v=0,s===(s|0)?a.x=s:l+=s;for(var c=0;c<l.length+64;c++)a.x^=l.charCodeAt(c)|0,c==l.length&&(a.d=a.x<<10^a.x>>>4),a.next()}function o(s,a){return a.x=s.x,a.y=s.y,a.z=s.z,a.w=s.w,a.v=s.v,a.d=s.d,a}function n(s,a){var l=new r(s),c=a&&a.state,d=function(){return(l.next()>>>0)/4294967296};return d.double=function(){do var u=l.next()>>>11,f=(l.next()>>>0)/4294967296,h=(u+f)/(1<<21);while(h===0);return h},d.int32=l.next,d.quick=d,c&&(typeof c=="object"&&o(c,l),d.state=function(){return o(l,{})}),d}t&&t.exports?t.exports=n:i&&i.amd?i(function(){return n}):this.xorwow=n})(bx,typeof Sd=="object"&&Sd,typeof define=="function"&&define)});var Px=bt((_x,vd)=>{(function(e,t,i){function r(s){var a=this;a.next=function(){var c=a.x,d=a.i,u,f,h;return u=c[d],u^=u>>>7,f=u^u<<24,u=c[d+1&7],f^=u^u>>>10,u=c[d+3&7],f^=u^u>>>3,u=c[d+4&7],f^=u^u<<7,u=c[d+7&7],u=u^u<<13,f^=u^u<<9,c[d]=f,a.i=d+1&7,f};function l(c,d){var u,f,h=[];if(d===(d|0))f=h[0]=d;else for(d=""+d,u=0;u<d.length;++u)h[u&7]=h[u&7]<<15^d.charCodeAt(u)+h[u+1&7]<<13;for(;h.length<8;)h.push(0);for(u=0;u<8&&h[u]===0;++u);for(u==8?f=h[7]=-1:f=h[u],c.x=h,c.i=0,u=256;u>0;--u)c.next()}l(a,s)}function o(s,a){return a.x=s.x.slice(),a.i=s.i,a}function n(s,a){s==null&&(s=+new Date);var l=new r(s),c=a&&a.state,d=function(){return(l.next()>>>0)/4294967296};return d.double=function(){do var u=l.next()>>>11,f=(l.next()>>>0)/4294967296,h=(u+f)/(1<<21);while(h===0);return h},d.int32=l.next,d.quick=d,c&&(c.x&&o(c,l),d.state=function(){return o(l,{})}),d}t&&t.exports?t.exports=n:i&&i.amd?i(function(){return n}):this.xorshift7=n})(_x,typeof vd=="object"&&vd,typeof define=="function"&&define)});var Ax=bt((Cx,yd)=>{(function(e,t,i){function r(s){var a=this;a.next=function(){var c=a.w,d=a.X,u=a.i,f,h;return a.w=c=c+1640531527|0,h=d[u+34&127],f=d[u=u+1&127],h^=h<<13,f^=f<<17,h^=h>>>15,f^=f>>>12,h=d[u]=h^f,a.i=u,h+(c^c>>>16)|0};function l(c,d){var u,f,h,m,x,S=[],y=128;for(d===(d|0)?(f=d,d=null):(d=d+"\0",f=0,y=Math.max(y,d.length)),h=0,m=-32;m<y;++m)d&&(f^=d.charCodeAt((m+32)%d.length)),m===0&&(x=f),f^=f<<10,f^=f>>>15,f^=f<<4,f^=f>>>13,m>=0&&(x=x+1640531527|0,u=S[m&127]^=f+x,h=u==0?h+1:0);for(h>=128&&(S[(d&&d.length||0)&127]=-1),h=127,m=512;m>0;--m)f=S[h+34&127],u=S[h=h+1&127],f^=f<<13,u^=u<<17,f^=f>>>15,u^=u>>>12,S[h]=f^u;c.w=x,c.X=S,c.i=h}l(a,s)}function o(s,a){return a.i=s.i,a.w=s.w,a.X=s.X.slice(),a}function n(s,a){s==null&&(s=+new Date);var l=new r(s),c=a&&a.state,d=function(){return(l.next()>>>0)/4294967296};return d.double=function(){do var u=l.next()>>>11,f=(l.next()>>>0)/4294967296,h=(u+f)/(1<<21);while(h===0);return h},d.int32=l.next,d.quick=d,c&&(c.X&&o(c,l),d.state=function(){return o(l,{})}),d}t&&t.exports?t.exports=n:i&&i.amd?i(function(){return n}):this.xor4096=n})(Cx,typeof yd=="object"&&yd,typeof define=="function"&&define)});var Rx=bt((wx,bd)=>{(function(e,t,i){function r(s){var a=this,l="";a.next=function(){var d=a.b,u=a.c,f=a.d,h=a.a;return d=d<<25^d>>>7^u,u=u-f|0,f=f<<24^f>>>8^h,h=h-d|0,a.b=d=d<<20^d>>>12^u,a.c=u=u-f|0,a.d=f<<16^u>>>16^h,a.a=h-d|0},a.a=0,a.b=0,a.c=-1640531527,a.d=1367130551,s===Math.floor(s)?(a.a=s/4294967296|0,a.b=s|0):l+=s;for(var c=0;c<l.length+20;c++)a.b^=l.charCodeAt(c)|0,a.next()}function o(s,a){return a.a=s.a,a.b=s.b,a.c=s.c,a.d=s.d,a}function n(s,a){var l=new r(s),c=a&&a.state,d=function(){return(l.next()>>>0)/4294967296};return d.double=function(){do var u=l.next()>>>11,f=(l.next()>>>0)/4294967296,h=(u+f)/(1<<21);while(h===0);return h},d.int32=l.next,d.quick=d,c&&(typeof c=="object"&&o(c,l),d.state=function(){return o(l,{})}),d}t&&t.exports?t.exports=n:i&&i.amd?i(function(){return n}):this.tychei=n})(wx,typeof bd=="object"&&bd,typeof define=="function"&&define)});var Ex=bt(()=>{});var Dx=bt((Ix,na)=>{(function(e,t,i){var r=256,o=6,n=52,s="random",a=i.pow(r,o),l=i.pow(2,n),c=l*2,d=r-1,u;function f(_,v,P){var T=[];v=v==!0?{entropy:!0}:v||{};var R=S(x(v.entropy?[_,A(t)]:_??y(),3),T),D=new h(T),B=function(){for(var F=D.g(o),W=a,k=0;F<l;)F=(F+k)*r,W*=r,k=D.g(1);for(;F>=c;)F/=2,W/=2,k>>>=1;return(F+k)/W};return B.int32=function(){return D.g(4)|0},B.quick=function(){return D.g(4)/4294967296},B.double=B,S(A(D.S),t),(v.pass||P||function(F,W,k,V){return V&&(V.S&&m(V,D),F.state=function(){return m(D,{})}),k?(i[s]=F,W):F})(B,R,"global"in v?v.global:this==i,v.state)}function h(_){var v,P=_.length,T=this,R=0,D=T.i=T.j=0,B=T.S=[];for(P||(_=[P++]);R<r;)B[R]=R++;for(R=0;R<r;R++)B[R]=B[D=d&D+_[R%P]+(v=B[R])],B[D]=v;(T.g=function(F){for(var W,k=0,V=T.i,b=T.j,N=T.S;F--;)W=N[V=d&V+1],k=k*r+N[d&(N[V]=N[b=d&b+W])+(N[b]=W)];return T.i=V,T.j=b,k})(r)}function m(_,v){return v.i=_.i,v.j=_.j,v.S=_.S.slice(),v}function x(_,v){var P=[],T=typeof _,R;if(v&&T=="object")for(R in _)try{P.push(x(_[R],v-1))}catch{}return P.length?P:T=="string"?_:_+"\0"}function S(_,v){for(var P=_+"",T,R=0;R<P.length;)v[d&R]=d&(T^=v[d&R]*19)+P.charCodeAt(R++);return A(v)}function y(){try{var _;return u&&(_=u.randomBytes)?_=_(r):(_=new Uint8Array(r),(e.crypto||e.msCrypto).getRandomValues(_)),A(_)}catch{var v=e.navigator,P=v&&v.plugins;return[+new Date,e,P,e.screen,A(t)]}}function A(_){return String.fromCharCode.apply(0,_)}if(S(i.random(),t),typeof na=="object"&&na.exports){na.exports=f;try{u=Ex()}catch{}}else typeof define=="function"&&define.amd?define(function(){return f}):i["seed"+s]=f})(typeof self<"u"?self:Ix,[],Math)});var Fx=bt((Y4,Mx)=>{var d3=Sx(),u3=yx(),f3=Tx(),h3=Px(),p3=Ax(),m3=Rx(),wi=Dx();wi.alea=d3;wi.xor128=u3;wi.xorwow=f3;wi.xorshift7=h3;wi.xor4096=p3;wi.tychei=m3;Mx.exports=wi});var F0=bt(()=>{"use strict"});var hA={};Pr(hA,{Graph:()=>Ia});var Zo="http://www.w3.org/1999/xhtml",Ya={svg:"http://www.w3.org/2000/svg",xhtml:Zo,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Nt(e){var t=e+="",i=t.indexOf(":");return i>=0&&(t=e.slice(0,i))!=="xmlns"&&(e=e.slice(i+1)),Ya.hasOwnProperty(t)?{space:Ya[t],local:e}:e}function ES(e){return function(){var t=this.ownerDocument,i=this.namespaceURI;return i===Zo&&t.documentElement.namespaceURI===Zo?t.createElement(e):t.createElementNS(i,e)}}function IS(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function Qo(e){var t=Nt(e);return(t.local?IS:ES)(t)}function DS(){}function li(e){return e==null?DS:function(){return this.querySelector(e)}}function Lu(e){typeof e!="function"&&(e=li(e));for(var t=this._groups,i=t.length,r=new Array(i),o=0;o<i;++o)for(var n=t[o],s=n.length,a=r[o]=new Array(s),l,c,d=0;d<s;++d)(l=n[d])&&(c=e.call(l,l.__data__,d,n))&&("__data__"in l&&(c.__data__=l.__data__),a[d]=c);return new xe(r,this._parents)}function Ga(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function MS(){return[]}function Cr(e){return e==null?MS:function(){return this.querySelectorAll(e)}}function FS(e){return function(){return Ga(e.apply(this,arguments))}}function Wu(e){typeof e=="function"?e=FS(e):e=Cr(e);for(var t=this._groups,i=t.length,r=[],o=[],n=0;n<i;++n)for(var s=t[n],a=s.length,l,c=0;c<a;++c)(l=s[c])&&(r.push(e.call(l,l.__data__,c,s)),o.push(l));return new xe(r,o)}function Ar(e){return function(){return this.matches(e)}}function Jo(e){return function(t){return t.matches(e)}}var kS=Array.prototype.find;function NS(e){return function(){return kS.call(this.children,e)}}function BS(){return this.firstElementChild}function Vu(e){return this.select(e==null?BS:NS(typeof e=="function"?e:Jo(e)))}var OS=Array.prototype.filter;function zS(){return Array.from(this.children)}function US(e){return function(){return OS.call(this.children,e)}}function Hu(e){return this.selectAll(e==null?zS:US(typeof e=="function"?e:Jo(e)))}function $u(e){typeof e!="function"&&(e=Ar(e));for(var t=this._groups,i=t.length,r=new Array(i),o=0;o<i;++o)for(var n=t[o],s=n.length,a=r[o]=[],l,c=0;c<s;++c)(l=n[c])&&e.call(l,l.__data__,c,n)&&a.push(l);return new xe(r,this._parents)}function en(e){return new Array(e.length)}function Xu(){return new xe(this._enter||this._groups.map(en),this._parents)}function wr(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}wr.prototype={constructor:wr,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function ju(e){return function(){return e}}function LS(e,t,i,r,o,n){for(var s=0,a,l=t.length,c=n.length;s<c;++s)(a=t[s])?(a.__data__=n[s],r[s]=a):i[s]=new wr(e,n[s]);for(;s<l;++s)(a=t[s])&&(o[s]=a)}function WS(e,t,i,r,o,n,s){var a,l,c=new Map,d=t.length,u=n.length,f=new Array(d),h;for(a=0;a<d;++a)(l=t[a])&&(f[a]=h=s.call(l,l.__data__,a,t)+"",c.has(h)?o[a]=l:c.set(h,l));for(a=0;a<u;++a)h=s.call(e,n[a],a,n)+"",(l=c.get(h))?(r[a]=l,l.__data__=n[a],c.delete(h)):i[a]=new wr(e,n[a]);for(a=0;a<d;++a)(l=t[a])&&c.get(f[a])===l&&(o[a]=l)}function VS(e){return e.__data__}function Yu(e,t){if(!arguments.length)return Array.from(this,VS);var i=t?WS:LS,r=this._parents,o=this._groups;typeof e!="function"&&(e=ju(e));for(var n=o.length,s=new Array(n),a=new Array(n),l=new Array(n),c=0;c<n;++c){var d=r[c],u=o[c],f=u.length,h=HS(e.call(d,d&&d.__data__,c,r)),m=h.length,x=a[c]=new Array(m),S=s[c]=new Array(m),y=l[c]=new Array(f);i(d,u,x,S,y,h,t);for(var A=0,_=0,v,P;A<m;++A)if(v=x[A]){for(A>=_&&(_=A+1);!(P=S[_])&&++_<m;);v._next=P||null}}return s=new xe(s,r),s._enter=a,s._exit=l,s}function HS(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function Gu(){return new xe(this._exit||this._groups.map(en),this._parents)}function qu(e,t,i){var r=this.enter(),o=this,n=this.exit();return typeof e=="function"?(r=e(r),r&&(r=r.selection())):r=r.append(e+""),t!=null&&(o=t(o),o&&(o=o.selection())),i==null?n.remove():i(n),r&&o?r.merge(o).order():o}function Ku(e){for(var t=e.selection?e.selection():e,i=this._groups,r=t._groups,o=i.length,n=r.length,s=Math.min(o,n),a=new Array(o),l=0;l<s;++l)for(var c=i[l],d=r[l],u=c.length,f=a[l]=new Array(u),h,m=0;m<u;++m)(h=c[m]||d[m])&&(f[m]=h);for(;l<o;++l)a[l]=i[l];return new xe(a,this._parents)}function Zu(){for(var e=this._groups,t=-1,i=e.length;++t<i;)for(var r=e[t],o=r.length-1,n=r[o],s;--o>=0;)(s=r[o])&&(n&&s.compareDocumentPosition(n)^4&&n.parentNode.insertBefore(s,n),n=s);return this}function Qu(e){e||(e=$S);function t(u,f){return u&&f?e(u.__data__,f.__data__):!u-!f}for(var i=this._groups,r=i.length,o=new Array(r),n=0;n<r;++n){for(var s=i[n],a=s.length,l=o[n]=new Array(a),c,d=0;d<a;++d)(c=s[d])&&(l[d]=c);l.sort(t)}return new xe(o,this._parents).order()}function $S(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function Ju(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function ef(){return Array.from(this)}function tf(){for(var e=this._groups,t=0,i=e.length;t<i;++t)for(var r=e[t],o=0,n=r.length;o<n;++o){var s=r[o];if(s)return s}return null}function rf(){let e=0;for(let t of this)++e;return e}function of(){return!this.node()}function nf(e){for(var t=this._groups,i=0,r=t.length;i<r;++i)for(var o=t[i],n=0,s=o.length,a;n<s;++n)(a=o[n])&&e.call(a,a.__data__,n,o);return this}function XS(e){return function(){this.removeAttribute(e)}}function jS(e){return function(){this.removeAttributeNS(e.space,e.local)}}function YS(e,t){return function(){this.setAttribute(e,t)}}function GS(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function qS(e,t){return function(){var i=t.apply(this,arguments);i==null?this.removeAttribute(e):this.setAttribute(e,i)}}function KS(e,t){return function(){var i=t.apply(this,arguments);i==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,i)}}function sf(e,t){var i=Nt(e);if(arguments.length<2){var r=this.node();return i.local?r.getAttributeNS(i.space,i.local):r.getAttribute(i)}return this.each((t==null?i.local?jS:XS:typeof t=="function"?i.local?KS:qS:i.local?GS:YS)(i,t))}function tn(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function ZS(e){return function(){this.style.removeProperty(e)}}function QS(e,t,i){return function(){this.style.setProperty(e,t,i)}}function JS(e,t,i){return function(){var r=t.apply(this,arguments);r==null?this.style.removeProperty(e):this.style.setProperty(e,r,i)}}function af(e,t,i){return arguments.length>1?this.each((t==null?ZS:typeof t=="function"?JS:QS)(e,t,i??"")):Xt(this.node(),e)}function Xt(e,t){return e.style.getPropertyValue(t)||tn(e).getComputedStyle(e,null).getPropertyValue(t)}function ev(e){return function(){delete this[e]}}function tv(e,t){return function(){this[e]=t}}function iv(e,t){return function(){var i=t.apply(this,arguments);i==null?delete this[e]:this[e]=i}}function lf(e,t){return arguments.length>1?this.each((t==null?ev:typeof t=="function"?iv:tv)(e,t)):this.node()[e]}function cf(e){return e.trim().split(/^|\s+/)}function qa(e){return e.classList||new df(e)}function df(e){this._node=e,this._names=cf(e.getAttribute("class")||"")}df.prototype={add:function(e){var t=this._names.indexOf(e);t<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function uf(e,t){for(var i=qa(e),r=-1,o=t.length;++r<o;)i.add(t[r])}function ff(e,t){for(var i=qa(e),r=-1,o=t.length;++r<o;)i.remove(t[r])}function rv(e){return function(){uf(this,e)}}function ov(e){return function(){ff(this,e)}}function nv(e,t){return function(){(t.apply(this,arguments)?uf:ff)(this,e)}}function hf(e,t){var i=cf(e+"");if(arguments.length<2){for(var r=qa(this.node()),o=-1,n=i.length;++o<n;)if(!r.contains(i[o]))return!1;return!0}return this.each((typeof t=="function"?nv:t?rv:ov)(i,t))}function sv(){this.textContent=""}function av(e){return function(){this.textContent=e}}function lv(e){return function(){var t=e.apply(this,arguments);this.textContent=t??""}}function pf(e){return arguments.length?this.each(e==null?sv:(typeof e=="function"?lv:av)(e)):this.node().textContent}function cv(){this.innerHTML=""}function dv(e){return function(){this.innerHTML=e}}function uv(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??""}}function mf(e){return arguments.length?this.each(e==null?cv:(typeof e=="function"?uv:dv)(e)):this.node().innerHTML}function fv(){this.nextSibling&&this.parentNode.appendChild(this)}function gf(){return this.each(fv)}function hv(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function xf(){return this.each(hv)}function Sf(e){var t=typeof e=="function"?e:Qo(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function pv(){return null}function vf(e,t){var i=typeof e=="function"?e:Qo(e),r=t==null?pv:typeof t=="function"?t:li(t);return this.select(function(){return this.insertBefore(i.apply(this,arguments),r.apply(this,arguments)||null)})}function mv(){var e=this.parentNode;e&&e.removeChild(this)}function yf(){return this.each(mv)}function gv(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function xv(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function bf(e){return this.select(e?xv:gv)}function Tf(e){return arguments.length?this.property("__data__",e):this.node().__data__}function Sv(e){return function(t){e.call(this,t,this.__data__)}}function vv(e){return e.trim().split(/^|\s+/).map(function(t){var i="",r=t.indexOf(".");return r>=0&&(i=t.slice(r+1),t=t.slice(0,r)),{type:t,name:i}})}function yv(e){return function(){var t=this.__on;if(t){for(var i=0,r=-1,o=t.length,n;i<o;++i)n=t[i],(!e.type||n.type===e.type)&&n.name===e.name?this.removeEventListener(n.type,n.listener,n.options):t[++r]=n;++r?t.length=r:delete this.__on}}}function bv(e,t,i){return function(){var r=this.__on,o,n=Sv(t);if(r){for(var s=0,a=r.length;s<a;++s)if((o=r[s]).type===e.type&&o.name===e.name){this.removeEventListener(o.type,o.listener,o.options),this.addEventListener(o.type,o.listener=n,o.options=i),o.value=t;return}}this.addEventListener(e.type,n,i),o={type:e.type,name:e.name,value:t,listener:n,options:i},r?r.push(o):this.__on=[o]}}function _f(e,t,i){var r=vv(e+""),o,n=r.length,s;if(arguments.length<2){var a=this.node().__on;if(a){for(var l=0,c=a.length,d;l<c;++l)for(o=0,d=a[l];o<n;++o)if((s=r[o]).type===d.type&&s.name===d.name)return d.value}return}for(a=t?bv:yv,o=0;o<n;++o)this.each(a(r[o],t,i));return this}function Pf(e,t,i){var r=tn(e),o=r.CustomEvent;typeof o=="function"?o=new o(t,i):(o=r.document.createEvent("Event"),i?(o.initEvent(t,i.bubbles,i.cancelable),o.detail=i.detail):o.initEvent(t,!1,!1)),e.dispatchEvent(o)}function Tv(e,t){return function(){return Pf(this,e,t)}}function _v(e,t){return function(){return Pf(this,e,t.apply(this,arguments))}}function Cf(e,t){return this.each((typeof t=="function"?_v:Tv)(e,t))}function*Af(){for(var e=this._groups,t=0,i=e.length;t<i;++t)for(var r=e[t],o=0,n=r.length,s;o<n;++o)(s=r[o])&&(yield s)}var Ka=[null];function xe(e,t){this._groups=e,this._parents=t}function wf(){return new xe([[document.documentElement]],Ka)}function Pv(){return this}xe.prototype=wf.prototype={constructor:xe,select:Lu,selectAll:Wu,selectChild:Vu,selectChildren:Hu,filter:$u,data:Yu,enter:Xu,exit:Gu,join:qu,merge:Ku,selection:Pv,order:Zu,sort:Qu,call:Ju,nodes:ef,node:tf,size:rf,empty:of,each:nf,attr:sf,style:af,property:lf,classed:hf,text:pf,html:mf,raise:gf,lower:xf,append:Sf,insert:vf,remove:yf,clone:bf,datum:Tf,on:_f,dispatch:Cf,[Symbol.iterator]:Af};var Bt=wf;function ue(e){return typeof e=="string"?new xe([[document.querySelector(e)]],[document.documentElement]):new xe([[e]],Ka)}function Rf(e){let t;for(;t=e.sourceEvent;)e=t;return e}function Qe(e,t){if(e=Rf(e),t===void 0&&(t=e.currentTarget),t){var i=t.ownerSVGElement||t;if(i.createSVGPoint){var r=i.createSVGPoint();return r.x=e.clientX,r.y=e.clientY,r=r.matrixTransform(t.getScreenCTM().inverse()),[r.x,r.y]}if(t.getBoundingClientRect){var o=t.getBoundingClientRect();return[e.clientX-o.left-t.clientLeft,e.clientY-o.top-t.clientTop]}}return[e.pageX,e.pageY]}var Cv={value:()=>{}};function If(){for(var e=0,t=arguments.length,i={},r;e<t;++e){if(!(r=arguments[e]+"")||r in i||/[\s.]/.test(r))throw new Error("illegal type: "+r);i[r]=[]}return new rn(i)}function rn(e){this._=e}function Av(e,t){return e.trim().split(/^|\s+/).map(function(i){var r="",o=i.indexOf(".");if(o>=0&&(r=i.slice(o+1),i=i.slice(0,o)),i&&!t.hasOwnProperty(i))throw new Error("unknown type: "+i);return{type:i,name:r}})}rn.prototype=If.prototype={constructor:rn,on:function(e,t){var i=this._,r=Av(e+"",i),o,n=-1,s=r.length;if(arguments.length<2){for(;++n<s;)if((o=(e=r[n]).type)&&(o=wv(i[o],e.name)))return o;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++n<s;)if(o=(e=r[n]).type)i[o]=Ef(i[o],e.name,t);else if(t==null)for(o in i)i[o]=Ef(i[o],e.name,null);return this},copy:function(){var e={},t=this._;for(var i in t)e[i]=t[i].slice();return new rn(e)},call:function(e,t){if((o=arguments.length-2)>0)for(var i=new Array(o),r=0,o,n;r<o;++r)i[r]=arguments[r+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(n=this._[e],r=0,o=n.length;r<o;++r)n[r].value.apply(t,i)},apply:function(e,t,i){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var r=this._[e],o=0,n=r.length;o<n;++o)r[o].value.apply(t,i)}};function wv(e,t){for(var i=0,r=e.length,o;i<r;++i)if((o=e[i]).name===t)return o.value}function Ef(e,t,i){for(var r=0,o=e.length;r<o;++r)if(e[r].name===t){e[r]=Cv,e=e.slice(0,r).concat(e.slice(r+1));break}return i!=null&&e.push({name:t,value:i}),e}var ci=If;var Li=0,Er=0,Rr=0,Mf=1e3,on,Ir,nn=0,di=0,sn=0,Dr=typeof performance=="object"&&performance.now?performance:Date,Ff=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function Fr(){return di||(Ff(Rv),di=Dr.now()+sn)}function Rv(){di=0}function Mr(){this._call=this._time=this._next=null}Mr.prototype=an.prototype={constructor:Mr,restart:function(e,t,i){if(typeof e!="function")throw new TypeError("callback is not a function");i=(i==null?Fr():+i)+(t==null?0:+t),!this._next&&Ir!==this&&(Ir?Ir._next=this:on=this,Ir=this),this._call=e,this._time=i,Za()},stop:function(){this._call&&(this._call=null,this._time=1/0,Za())}};function an(e,t,i){var r=new Mr;return r.restart(e,t,i),r}function kf(){Fr(),++Li;for(var e=on,t;e;)(t=di-e._time)>=0&&e._call.call(void 0,t),e=e._next;--Li}function Df(){di=(nn=Dr.now())+sn,Li=Er=0;try{kf()}finally{Li=0,Iv(),di=0}}function Ev(){var e=Dr.now(),t=e-nn;t>Mf&&(sn-=t,nn=e)}function Iv(){for(var e,t=on,i,r=1/0;t;)t._call?(r>t._time&&(r=t._time),e=t,t=t._next):(i=t._next,t._next=null,t=e?e._next=i:on=i);Ir=e,Za(r)}function Za(e){if(!Li){Er&&(Er=clearTimeout(Er));var t=e-di;t>24?(e<1/0&&(Er=setTimeout(Df,e-Dr.now()-sn)),Rr&&(Rr=clearInterval(Rr))):(Rr||(nn=Dr.now(),Rr=setInterval(Ev,Mf)),Li=1,Ff(Df))}}function ln(e,t,i){var r=new Mr;return t=t==null?0:+t,r.restart(o=>{r.stop(),e(o+t)},t,i),r}var Dv=ci("start","end","cancel","interrupt"),Mv=[],Of=0,Nf=1,dn=2,cn=3,Bf=4,un=5,kr=6;function jt(e,t,i,r,o,n){var s=e.__transition;if(!s)e.__transition={};else if(i in s)return;Fv(e,i,{name:t,index:r,group:o,on:Dv,tween:Mv,time:n.time,delay:n.delay,duration:n.duration,ease:n.ease,timer:null,state:Of})}function Nr(e,t){var i=Te(e,t);if(i.state>Of)throw new Error("too late; already scheduled");return i}function Ce(e,t){var i=Te(e,t);if(i.state>cn)throw new Error("too late; already running");return i}function Te(e,t){var i=e.__transition;if(!i||!(i=i[t]))throw new Error("transition not found");return i}function Fv(e,t,i){var r=e.__transition,o;r[t]=i,i.timer=an(n,0,i.time);function n(c){i.state=Nf,i.timer.restart(s,i.delay,i.time),i.delay<=c&&s(c-i.delay)}function s(c){var d,u,f,h;if(i.state!==Nf)return l();for(d in r)if(h=r[d],h.name===i.name){if(h.state===cn)return ln(s);h.state===Bf?(h.state=kr,h.timer.stop(),h.on.call("interrupt",e,e.__data__,h.index,h.group),delete r[d]):+d<t&&(h.state=kr,h.timer.stop(),h.on.call("cancel",e,e.__data__,h.index,h.group),delete r[d])}if(ln(function(){i.state===cn&&(i.state=Bf,i.timer.restart(a,i.delay,i.time),a(c))}),i.state=dn,i.on.call("start",e,e.__data__,i.index,i.group),i.state===dn){for(i.state=cn,o=new Array(f=i.tween.length),d=0,u=-1;d<f;++d)(h=i.tween[d].value.call(e,e.__data__,i.index,i.group))&&(o[++u]=h);o.length=u+1}}function a(c){for(var d=c<i.duration?i.ease.call(null,c/i.duration):(i.timer.restart(l),i.state=un,1),u=-1,f=o.length;++u<f;)o[u].call(e,d);i.state===un&&(i.on.call("end",e,e.__data__,i.index,i.group),l())}function l(){i.state=kr,i.timer.stop(),delete r[t];for(var c in r)return;delete e.__transition}}function ui(e,t){var i=e.__transition,r,o,n=!0,s;if(i){t=t==null?null:t+"";for(s in i){if((r=i[s]).name!==t){n=!1;continue}o=r.state>dn&&r.state<un,r.state=kr,r.timer.stop(),r.on.call(o?"interrupt":"cancel",e,e.__data__,r.index,r.group),delete i[s]}n&&delete e.__transition}}function zf(e){return this.each(function(){ui(this,e)})}function fn(e,t,i){e.prototype=t.prototype=i,i.constructor=e}function Qa(e,t){var i=Object.create(e.prototype);for(var r in t)i[r]=t[r];return i}function zr(){}var Br=.7,mn=1/Br,Wi="\\s*([+-]?\\d+)\\s*",Or="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",Tt="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",kv=/^#([0-9a-f]{3,8})$/,Nv=new RegExp(`^rgb\\(${Wi},${Wi},${Wi}\\)$`),Bv=new RegExp(`^rgb\\(${Tt},${Tt},${Tt}\\)$`),Ov=new RegExp(`^rgba\\(${Wi},${Wi},${Wi},${Or}\\)$`),zv=new RegExp(`^rgba\\(${Tt},${Tt},${Tt},${Or}\\)$`),Uv=new RegExp(`^hsl\\(${Or},${Tt},${Tt}\\)$`),Lv=new RegExp(`^hsla\\(${Or},${Tt},${Tt},${Or}\\)$`),Uf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};fn(zr,Xe,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:Lf,formatHex:Lf,formatHex8:Wv,formatHsl:Vv,formatRgb:Wf,toString:Wf});function Lf(){return this.rgb().formatHex()}function Wv(){return this.rgb().formatHex8()}function Vv(){return Yf(this).formatHsl()}function Wf(){return this.rgb().formatRgb()}function Xe(e){var t,i;return e=(e+"").trim().toLowerCase(),(t=kv.exec(e))?(i=t[1].length,t=parseInt(t[1],16),i===6?Vf(t):i===3?new We(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):i===8?hn(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):i===4?hn(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=Nv.exec(e))?new We(t[1],t[2],t[3],1):(t=Bv.exec(e))?new We(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=Ov.exec(e))?hn(t[1],t[2],t[3],t[4]):(t=zv.exec(e))?hn(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=Uv.exec(e))?Xf(t[1],t[2]/100,t[3]/100,1):(t=Lv.exec(e))?Xf(t[1],t[2]/100,t[3]/100,t[4]):Uf.hasOwnProperty(e)?Vf(Uf[e]):e==="transparent"?new We(NaN,NaN,NaN,0):null}function Vf(e){return new We(e>>16&255,e>>8&255,e&255,1)}function hn(e,t,i,r){return r<=0&&(e=t=i=NaN),new We(e,t,i,r)}function Hv(e){return e instanceof zr||(e=Xe(e)),e?(e=e.rgb(),new We(e.r,e.g,e.b,e.opacity)):new We}function Vi(e,t,i,r){return arguments.length===1?Hv(e):new We(e,t,i,r??1)}function We(e,t,i,r){this.r=+e,this.g=+t,this.b=+i,this.opacity=+r}fn(We,Vi,Qa(zr,{brighter(e){return e=e==null?mn:Math.pow(mn,e),new We(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?Br:Math.pow(Br,e),new We(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new We(hi(this.r),hi(this.g),hi(this.b),gn(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Hf,formatHex:Hf,formatHex8:$v,formatRgb:$f,toString:$f}));function Hf(){return`#${fi(this.r)}${fi(this.g)}${fi(this.b)}`}function $v(){return`#${fi(this.r)}${fi(this.g)}${fi(this.b)}${fi((isNaN(this.opacity)?1:this.opacity)*255)}`}function $f(){let e=gn(this.opacity);return`${e===1?"rgb(":"rgba("}${hi(this.r)}, ${hi(this.g)}, ${hi(this.b)}${e===1?")":`, ${e})`}`}function gn(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function hi(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function fi(e){return e=hi(e),(e<16?"0":"")+e.toString(16)}function Xf(e,t,i,r){return r<=0?e=t=i=NaN:i<=0||i>=1?e=t=NaN:t<=0&&(e=NaN),new ot(e,t,i,r)}function Yf(e){if(e instanceof ot)return new ot(e.h,e.s,e.l,e.opacity);if(e instanceof zr||(e=Xe(e)),!e)return new ot;if(e instanceof ot)return e;e=e.rgb();var t=e.r/255,i=e.g/255,r=e.b/255,o=Math.min(t,i,r),n=Math.max(t,i,r),s=NaN,a=n-o,l=(n+o)/2;return a?(t===n?s=(i-r)/a+(i<r)*6:i===n?s=(r-t)/a+2:s=(t-i)/a+4,a/=l<.5?n+o:2-n-o,s*=60):a=l>0&&l<1?0:s,new ot(s,a,l,e.opacity)}function Gf(e,t,i,r){return arguments.length===1?Yf(e):new ot(e,t,i,r??1)}function ot(e,t,i,r){this.h=+e,this.s=+t,this.l=+i,this.opacity=+r}fn(ot,Gf,Qa(zr,{brighter(e){return e=e==null?mn:Math.pow(mn,e),new ot(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?Br:Math.pow(Br,e),new ot(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,i=this.l,r=i+(i<.5?i:1-i)*t,o=2*i-r;return new We(Ja(e>=240?e-240:e+120,o,r),Ja(e,o,r),Ja(e<120?e+240:e-120,o,r),this.opacity)},clamp(){return new ot(jf(this.h),pn(this.s),pn(this.l),gn(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){let e=gn(this.opacity);return`${e===1?"hsl(":"hsla("}${jf(this.h)}, ${pn(this.s)*100}%, ${pn(this.l)*100}%${e===1?")":`, ${e})`}`}}));function jf(e){return e=(e||0)%360,e<0?e+360:e}function pn(e){return Math.max(0,Math.min(1,e||0))}function Ja(e,t,i){return(e<60?t+(i-t)*e/60:e<180?i:e<240?t+(i-t)*(240-e)/60:t)*255}function el(e,t,i,r,o){var n=e*e,s=n*e;return((1-3*e+3*n-s)*t+(4-6*n+3*s)*i+(1+3*e+3*n-3*s)*r+s*o)/6}function qf(e){var t=e.length-1;return function(i){var r=i<=0?i=0:i>=1?(i=1,t-1):Math.floor(i*t),o=e[r],n=e[r+1],s=r>0?e[r-1]:2*o-n,a=r<t-1?e[r+2]:2*n-o;return el((i-r/t)*t,s,o,n,a)}}function Kf(e){var t=e.length;return function(i){var r=Math.floor(((i%=1)<0?++i:i)*t),o=e[(r+t-1)%t],n=e[r%t],s=e[(r+1)%t],a=e[(r+2)%t];return el((i-r/t)*t,o,n,s,a)}}var Ur=e=>()=>e;function Xv(e,t){return function(i){return e+i*t}}function jv(e,t,i){return e=Math.pow(e,i),t=Math.pow(t,i)-e,i=1/i,function(r){return Math.pow(e+r*t,i)}}function Zf(e){return(e=+e)==1?xn:function(t,i){return i-t?jv(t,i,e):Ur(isNaN(t)?i:t)}}function xn(e,t){var i=t-e;return i?Xv(e,i):Ur(isNaN(e)?t:e)}var pi=(function e(t){var i=Zf(t);function r(o,n){var s=i((o=Vi(o)).r,(n=Vi(n)).r),a=i(o.g,n.g),l=i(o.b,n.b),c=xn(o.opacity,n.opacity);return function(d){return o.r=s(d),o.g=a(d),o.b=l(d),o.opacity=c(d),o+""}}return r.gamma=e,r})(1);function Qf(e){return function(t){var i=t.length,r=new Array(i),o=new Array(i),n=new Array(i),s,a;for(s=0;s<i;++s)a=Vi(t[s]),r[s]=a.r||0,o[s]=a.g||0,n[s]=a.b||0;return r=e(r),o=e(o),n=e(n),a.opacity=1,function(l){return a.r=r(l),a.g=o(l),a.b=n(l),a+""}}}var Yv=Qf(qf),Gv=Qf(Kf);function Jf(e,t){t||(t=[]);var i=e?Math.min(t.length,e.length):0,r=t.slice(),o;return function(n){for(o=0;o<i;++o)r[o]=e[o]*(1-n)+t[o]*n;return r}}function eh(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function th(e,t){var i=t?t.length:0,r=e?Math.min(i,e.length):0,o=new Array(r),n=new Array(i),s;for(s=0;s<r;++s)o[s]=mi(e[s],t[s]);for(;s<i;++s)n[s]=t[s];return function(a){for(s=0;s<r;++s)n[s]=o[s](a);return n}}function ih(e,t){var i=new Date;return e=+e,t=+t,function(r){return i.setTime(e*(1-r)+t*r),i}}function Ae(e,t){return e=+e,t=+t,function(i){return e*(1-i)+t*i}}function rh(e,t){var i={},r={},o;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(o in t)o in e?i[o]=mi(e[o],t[o]):r[o]=t[o];return function(n){for(o in i)r[o]=i[o](n);return r}}var il=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,tl=new RegExp(il.source,"g");function qv(e){return function(){return e}}function Kv(e){return function(t){return e(t)+""}}function Lr(e,t){var i=il.lastIndex=tl.lastIndex=0,r,o,n,s=-1,a=[],l=[];for(e=e+"",t=t+"";(r=il.exec(e))&&(o=tl.exec(t));)(n=o.index)>i&&(n=t.slice(i,n),a[s]?a[s]+=n:a[++s]=n),(r=r[0])===(o=o[0])?a[s]?a[s]+=o:a[++s]=o:(a[++s]=null,l.push({i:s,x:Ae(r,o)})),i=tl.lastIndex;return i<t.length&&(n=t.slice(i),a[s]?a[s]+=n:a[++s]=n),a.length<2?l[0]?Kv(l[0].x):qv(t):(t=l.length,function(c){for(var d=0,u;d<t;++d)a[(u=l[d]).i]=u.x(c);return a.join("")})}function mi(e,t){var i=typeof t,r;return t==null||i==="boolean"?Ur(t):(i==="number"?Ae:i==="string"?(r=Xe(t))?(t=r,pi):Lr:t instanceof Xe?pi:t instanceof Date?ih:eh(t)?Jf:Array.isArray(t)?th:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?rh:Ae)(e,t)}function rl(e,t){return e=+e,t=+t,function(i){return Math.round(e*(1-i)+t*i)}}var oh=180/Math.PI,Sn={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function ol(e,t,i,r,o,n){var s,a,l;return(s=Math.sqrt(e*e+t*t))&&(e/=s,t/=s),(l=e*i+t*r)&&(i-=e*l,r-=t*l),(a=Math.sqrt(i*i+r*r))&&(i/=a,r/=a,l/=a),e*r<t*i&&(e=-e,t=-t,l=-l,s=-s),{translateX:o,translateY:n,rotate:Math.atan2(t,e)*oh,skewX:Math.atan(l)*oh,scaleX:s,scaleY:a}}var vn;function nh(e){let t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?Sn:ol(t.a,t.b,t.c,t.d,t.e,t.f)}function sh(e){return e==null?Sn:(vn||(vn=document.createElementNS("http://www.w3.org/2000/svg","g")),vn.setAttribute("transform",e),(e=vn.transform.baseVal.consolidate())?(e=e.matrix,ol(e.a,e.b,e.c,e.d,e.e,e.f)):Sn)}function ah(e,t,i,r){function o(c){return c.length?c.pop()+" ":""}function n(c,d,u,f,h,m){if(c!==u||d!==f){var x=h.push("translate(",null,t,null,i);m.push({i:x-4,x:Ae(c,u)},{i:x-2,x:Ae(d,f)})}else(u||f)&&h.push("translate("+u+t+f+i)}function s(c,d,u,f){c!==d?(c-d>180?d+=360:d-c>180&&(c+=360),f.push({i:u.push(o(u)+"rotate(",null,r)-2,x:Ae(c,d)})):d&&u.push(o(u)+"rotate("+d+r)}function a(c,d,u,f){c!==d?f.push({i:u.push(o(u)+"skewX(",null,r)-2,x:Ae(c,d)}):d&&u.push(o(u)+"skewX("+d+r)}function l(c,d,u,f,h,m){if(c!==u||d!==f){var x=h.push(o(h)+"scale(",null,",",null,")");m.push({i:x-4,x:Ae(c,u)},{i:x-2,x:Ae(d,f)})}else(u!==1||f!==1)&&h.push(o(h)+"scale("+u+","+f+")")}return function(c,d){var u=[],f=[];return c=e(c),d=e(d),n(c.translateX,c.translateY,d.translateX,d.translateY,u,f),s(c.rotate,d.rotate,u,f),a(c.skewX,d.skewX,u,f),l(c.scaleX,c.scaleY,d.scaleX,d.scaleY,u,f),c=d=null,function(h){for(var m=-1,x=f.length,S;++m<x;)u[(S=f[m]).i]=S.x(h);return u.join("")}}}var nl=ah(nh,"px, ","px)","deg)"),sl=ah(sh,", ",")",")");var Zv=1e-12;function lh(e){return((e=Math.exp(e))+1/e)/2}function Qv(e){return((e=Math.exp(e))-1/e)/2}function Jv(e){return((e=Math.exp(2*e))-1)/(e+1)}var al=(function e(t,i,r){function o(n,s){var a=n[0],l=n[1],c=n[2],d=s[0],u=s[1],f=s[2],h=d-a,m=u-l,x=h*h+m*m,S,y;if(x<Zv)y=Math.log(f/c)/t,S=function(R){return[a+R*h,l+R*m,c*Math.exp(t*R*y)]};else{var A=Math.sqrt(x),_=(f*f-c*c+r*x)/(2*c*i*A),v=(f*f-c*c-r*x)/(2*f*i*A),P=Math.log(Math.sqrt(_*_+1)-_),T=Math.log(Math.sqrt(v*v+1)-v);y=(T-P)/t,S=function(R){var D=R*y,B=lh(P),F=c/(i*A)*(B*Jv(t*D+P)-Qv(P));return[a+F*h,l+F*m,c*B/lh(t*D+P)]}}return S.duration=y*1e3*t/Math.SQRT2,S}return o.rho=function(n){var s=Math.max(.001,+n),a=s*s,l=a*a;return e(s,a,l)},o})(Math.SQRT2,2,4);function ey(e,t){var i,r;return function(){var o=Ce(this,e),n=o.tween;if(n!==i){r=i=n;for(var s=0,a=r.length;s<a;++s)if(r[s].name===t){r=r.slice(),r.splice(s,1);break}}o.tween=r}}function ty(e,t,i){var r,o;if(typeof i!="function")throw new Error;return function(){var n=Ce(this,e),s=n.tween;if(s!==r){o=(r=s).slice();for(var a={name:t,value:i},l=0,c=o.length;l<c;++l)if(o[l].name===t){o[l]=a;break}l===c&&o.push(a)}n.tween=o}}function ch(e,t){var i=this._id;if(e+="",arguments.length<2){for(var r=Te(this.node(),i).tween,o=0,n=r.length,s;o<n;++o)if((s=r[o]).name===e)return s.value;return null}return this.each((t==null?ey:ty)(i,e,t))}function Hi(e,t,i){var r=e._id;return e.each(function(){var o=Ce(this,r);(o.value||(o.value={}))[t]=i.apply(this,arguments)}),function(o){return Te(o,r).value[t]}}function yn(e,t){var i;return(typeof t=="number"?Ae:t instanceof Xe?pi:(i=Xe(t))?(t=i,pi):Lr)(e,t)}function iy(e){return function(){this.removeAttribute(e)}}function ry(e){return function(){this.removeAttributeNS(e.space,e.local)}}function oy(e,t,i){var r,o=i+"",n;return function(){var s=this.getAttribute(e);return s===o?null:s===r?n:n=t(r=s,i)}}function ny(e,t,i){var r,o=i+"",n;return function(){var s=this.getAttributeNS(e.space,e.local);return s===o?null:s===r?n:n=t(r=s,i)}}function sy(e,t,i){var r,o,n;return function(){var s,a=i(this),l;return a==null?void this.removeAttribute(e):(s=this.getAttribute(e),l=a+"",s===l?null:s===r&&l===o?n:(o=l,n=t(r=s,a)))}}function ay(e,t,i){var r,o,n;return function(){var s,a=i(this),l;return a==null?void this.removeAttributeNS(e.space,e.local):(s=this.getAttributeNS(e.space,e.local),l=a+"",s===l?null:s===r&&l===o?n:(o=l,n=t(r=s,a)))}}function dh(e,t){var i=Nt(e),r=i==="transform"?sl:yn;return this.attrTween(e,typeof t=="function"?(i.local?ay:sy)(i,r,Hi(this,"attr."+e,t)):t==null?(i.local?ry:iy)(i):(i.local?ny:oy)(i,r,t))}function ly(e,t){return function(i){this.setAttribute(e,t.call(this,i))}}function cy(e,t){return function(i){this.setAttributeNS(e.space,e.local,t.call(this,i))}}function dy(e,t){var i,r;function o(){var n=t.apply(this,arguments);return n!==r&&(i=(r=n)&&cy(e,n)),i}return o._value=t,o}function uy(e,t){var i,r;function o(){var n=t.apply(this,arguments);return n!==r&&(i=(r=n)&&ly(e,n)),i}return o._value=t,o}function uh(e,t){var i="attr."+e;if(arguments.length<2)return(i=this.tween(i))&&i._value;if(t==null)return this.tween(i,null);if(typeof t!="function")throw new Error;var r=Nt(e);return this.tween(i,(r.local?dy:uy)(r,t))}function fy(e,t){return function(){Nr(this,e).delay=+t.apply(this,arguments)}}function hy(e,t){return t=+t,function(){Nr(this,e).delay=t}}function fh(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?fy:hy)(t,e)):Te(this.node(),t).delay}function py(e,t){return function(){Ce(this,e).duration=+t.apply(this,arguments)}}function my(e,t){return t=+t,function(){Ce(this,e).duration=t}}function hh(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?py:my)(t,e)):Te(this.node(),t).duration}function gy(e,t){if(typeof t!="function")throw new Error;return function(){Ce(this,e).ease=t}}function ph(e){var t=this._id;return arguments.length?this.each(gy(t,e)):Te(this.node(),t).ease}function xy(e,t){return function(){var i=t.apply(this,arguments);if(typeof i!="function")throw new Error;Ce(this,e).ease=i}}function mh(e){if(typeof e!="function")throw new Error;return this.each(xy(this._id,e))}function gh(e){typeof e!="function"&&(e=Ar(e));for(var t=this._groups,i=t.length,r=new Array(i),o=0;o<i;++o)for(var n=t[o],s=n.length,a=r[o]=[],l,c=0;c<s;++c)(l=n[c])&&e.call(l,l.__data__,c,n)&&a.push(l);return new Oe(r,this._parents,this._name,this._id)}function xh(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,i=e._groups,r=t.length,o=i.length,n=Math.min(r,o),s=new Array(r),a=0;a<n;++a)for(var l=t[a],c=i[a],d=l.length,u=s[a]=new Array(d),f,h=0;h<d;++h)(f=l[h]||c[h])&&(u[h]=f);for(;a<r;++a)s[a]=t[a];return new Oe(s,this._parents,this._name,this._id)}function Sy(e){return(e+"").trim().split(/^|\s+/).every(function(t){var i=t.indexOf(".");return i>=0&&(t=t.slice(0,i)),!t||t==="start"})}function vy(e,t,i){var r,o,n=Sy(t)?Nr:Ce;return function(){var s=n(this,e),a=s.on;a!==r&&(o=(r=a).copy()).on(t,i),s.on=o}}function Sh(e,t){var i=this._id;return arguments.length<2?Te(this.node(),i).on.on(e):this.each(vy(i,e,t))}function yy(e){return function(){var t=this.parentNode;for(var i in this.__transition)if(+i!==e)return;t&&t.removeChild(this)}}function vh(){return this.on("end.remove",yy(this._id))}function yh(e){var t=this._name,i=this._id;typeof e!="function"&&(e=li(e));for(var r=this._groups,o=r.length,n=new Array(o),s=0;s<o;++s)for(var a=r[s],l=a.length,c=n[s]=new Array(l),d,u,f=0;f<l;++f)(d=a[f])&&(u=e.call(d,d.__data__,f,a))&&("__data__"in d&&(u.__data__=d.__data__),c[f]=u,jt(c[f],t,i,f,c,Te(d,i)));return new Oe(n,this._parents,t,i)}function bh(e){var t=this._name,i=this._id;typeof e!="function"&&(e=Cr(e));for(var r=this._groups,o=r.length,n=[],s=[],a=0;a<o;++a)for(var l=r[a],c=l.length,d,u=0;u<c;++u)if(d=l[u]){for(var f=e.call(d,d.__data__,u,l),h,m=Te(d,i),x=0,S=f.length;x<S;++x)(h=f[x])&&jt(h,t,i,x,f,m);n.push(f),s.push(d)}return new Oe(n,s,t,i)}var by=Bt.prototype.constructor;function Th(){return new by(this._groups,this._parents)}function Ty(e,t){var i,r,o;return function(){var n=Xt(this,e),s=(this.style.removeProperty(e),Xt(this,e));return n===s?null:n===i&&s===r?o:o=t(i=n,r=s)}}function _h(e){return function(){this.style.removeProperty(e)}}function _y(e,t,i){var r,o=i+"",n;return function(){var s=Xt(this,e);return s===o?null:s===r?n:n=t(r=s,i)}}function Py(e,t,i){var r,o,n;return function(){var s=Xt(this,e),a=i(this),l=a+"";return a==null&&(l=a=(this.style.removeProperty(e),Xt(this,e))),s===l?null:s===r&&l===o?n:(o=l,n=t(r=s,a))}}function Cy(e,t){var i,r,o,n="style."+t,s="end."+n,a;return function(){var l=Ce(this,e),c=l.on,d=l.value[n]==null?a||(a=_h(t)):void 0;(c!==i||o!==d)&&(r=(i=c).copy()).on(s,o=d),l.on=r}}function Ph(e,t,i){var r=(e+="")=="transform"?nl:yn;return t==null?this.styleTween(e,Ty(e,r)).on("end.style."+e,_h(e)):typeof t=="function"?this.styleTween(e,Py(e,r,Hi(this,"style."+e,t))).each(Cy(this._id,e)):this.styleTween(e,_y(e,r,t),i).on("end.style."+e,null)}function Ay(e,t,i){return function(r){this.style.setProperty(e,t.call(this,r),i)}}function wy(e,t,i){var r,o;function n(){var s=t.apply(this,arguments);return s!==o&&(r=(o=s)&&Ay(e,s,i)),r}return n._value=t,n}function Ch(e,t,i){var r="style."+(e+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(t==null)return this.tween(r,null);if(typeof t!="function")throw new Error;return this.tween(r,wy(e,t,i??""))}function Ry(e){return function(){this.textContent=e}}function Ey(e){return function(){var t=e(this);this.textContent=t??""}}function Ah(e){return this.tween("text",typeof e=="function"?Ey(Hi(this,"text",e)):Ry(e==null?"":e+""))}function Iy(e){return function(t){this.textContent=e.call(this,t)}}function Dy(e){var t,i;function r(){var o=e.apply(this,arguments);return o!==i&&(t=(i=o)&&Iy(o)),t}return r._value=e,r}function wh(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;return this.tween(t,Dy(e))}function Rh(){for(var e=this._name,t=this._id,i=bn(),r=this._groups,o=r.length,n=0;n<o;++n)for(var s=r[n],a=s.length,l,c=0;c<a;++c)if(l=s[c]){var d=Te(l,t);jt(l,e,i,c,s,{time:d.time+d.delay+d.duration,delay:0,duration:d.duration,ease:d.ease})}return new Oe(r,this._parents,e,i)}function Eh(){var e,t,i=this,r=i._id,o=i.size();return new Promise(function(n,s){var a={value:s},l={value:function(){--o===0&&n()}};i.each(function(){var c=Ce(this,r),d=c.on;d!==e&&(t=(e=d).copy(),t._.cancel.push(a),t._.interrupt.push(a),t._.end.push(l)),c.on=t}),o===0&&n()})}var My=0;function Oe(e,t,i,r){this._groups=e,this._parents=t,this._name=i,this._id=r}function Ih(e){return Bt().transition(e)}function bn(){return++My}var Ot=Bt.prototype;Oe.prototype=Ih.prototype={constructor:Oe,select:yh,selectAll:bh,selectChild:Ot.selectChild,selectChildren:Ot.selectChildren,filter:gh,merge:xh,selection:Th,transition:Rh,call:Ot.call,nodes:Ot.nodes,node:Ot.node,size:Ot.size,empty:Ot.empty,each:Ot.each,on:Sh,attr:dh,attrTween:uh,style:Ph,styleTween:Ch,text:Ah,textTween:wh,remove:vh,tween:ch,delay:fh,duration:hh,ease:ph,easeVarying:mh,end:Eh,[Symbol.iterator]:Ot[Symbol.iterator]};var Tn=e=>+e;function _n(e){return e*e}function Pn(e){return e*(2-e)}function gi(e){return((e*=2)<=1?e*e:--e*(2-e)+1)/2}function ll(e){return e*e*e}function cl(e){return--e*e*e+1}function $i(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var Dh=Math.PI,Mh=Dh/2;function dl(e){return+e==1?1:1-Math.cos(e*Mh)}function ul(e){return Math.sin(e*Mh)}function Cn(e){return(1-Math.cos(Dh*e))/2}function Wr(e){return(Math.pow(2,-10*e)-.0009765625)*1.0009775171065494}function fl(e){return Wr(1-+e)}function hl(e){return 1-Wr(e)}function An(e){return((e*=2)<=1?Wr(1-e):2-Wr(e-1))/2}function pl(e){return 1-Math.sqrt(1-e*e)}function ml(e){return Math.sqrt(1- --e*e)}function wn(e){return((e*=2)<=1?1-Math.sqrt(1-e*e):Math.sqrt(1-(e-=2)*e)+1)/2}var Fy={time:null,delay:0,duration:250,ease:$i};function ky(e,t){for(var i;!(i=e.__transition)||!(i=i[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return i}function Fh(e){var t,i;e instanceof Oe?(t=e._id,e=e._name):(t=bn(),(i=Fy).time=Fr(),e=e==null?null:e+"");for(var r=this._groups,o=r.length,n=0;n<o;++n)for(var s=r[n],a=s.length,l,c=0;c<a;++c)(l=s[c])&&jt(l,e,t,c,s,i||ky(l,t));return new Oe(r,this._parents,e,t)}Bt.prototype.interrupt=zf;Bt.prototype.transition=Fh;te();Nc();function _g(e,t){(t==null||t>e.length)&&(t=e.length);for(var i=0,r=Array(t);i<t;i++)r[i]=e[i];return r}function f_(e){if(Array.isArray(e))return e}function h_(e,t){var i=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(i!=null){var r,o,n,s,a=[],l=!0,c=!1;try{if(n=(i=i.call(e)).next,t!==0)for(;!(l=(r=n.call(i)).done)&&(a.push(r.value),a.length!==t);l=!0);}catch(d){c=!0,o=d}finally{try{if(!l&&i.return!=null&&(s=i.return(),Object(s)!==s))return}finally{if(c)throw o}}return a}}function p_(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function m_(e,t){return f_(e)||h_(e,t)||g_(e,t)||p_()}function g_(e,t){if(e){if(typeof e=="string")return _g(e,t);var i={}.toString.call(e).slice(8,-1);return i==="Object"&&e.constructor&&(i=e.constructor.name),i==="Map"||i==="Set"?Array.from(e):i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?_g(e,t):void 0}}var zg=Object.entries,Pg=Object.setPrototypeOf,x_=Object.isFrozen,S_=Object.getPrototypeOf,v_=Object.getOwnPropertyDescriptor,Ie=Object.freeze,De=Object.seal,ar=Object.create,Ug=typeof Reflect<"u"&&Reflect,Yc=Ug.apply,Gc=Ug.construct;Ie||(Ie=function(t){return t});De||(De=function(t){return t});Yc||(Yc=function(t,i){for(var r=arguments.length,o=new Array(r>2?r-2:0),n=2;n<r;n++)o[n-2]=arguments[n];return t.apply(i,o)});Gc||(Gc=function(t){for(var i=arguments.length,r=new Array(i>1?i-1:0),o=1;o<i;o++)r[o-1]=arguments[o];return new t(...r)});var nr=ye(Array.prototype.forEach),y_=ye(Array.prototype.lastIndexOf),Cg=ye(Array.prototype.pop),sr=ye(Array.prototype.push),b_=ye(Array.prototype.splice),ti=Array.isArray,yo=ye(String.prototype.toLowerCase),Vc=ye(String.prototype.toString),Ag=ye(String.prototype.match),So=ye(String.prototype.replace),wg=ye(String.prototype.indexOf),T_=ye(String.prototype.trim),__=ye(Number.prototype.toString),P_=ye(Boolean.prototype.toString),Rg=typeof BigInt>"u"?null:ye(BigInt.prototype.toString),Eg=typeof Symbol>"u"?null:ye(Symbol.prototype.toString),Pe=ye(Object.prototype.hasOwnProperty),vo=ye(Object.prototype.toString),_e=ye(RegExp.prototype.test),Pi=C_(TypeError);function ye(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var i=arguments.length,r=new Array(i>1?i-1:0),o=1;o<i;o++)r[o-1]=arguments[o];return Yc(e,t,r)}}function C_(e){return function(){for(var t=arguments.length,i=new Array(t),r=0;r<t;r++)i[r]=arguments[r];return Gc(e,i)}}function ie(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:yo;if(Pg&&Pg(e,null),!ti(t))return e;let r=t.length;for(;r--;){let o=t[r];if(typeof o=="string"){let n=i(o);n!==o&&(x_(t)||(t[r]=n),o=n)}e[o]=!0}return e}function A_(e){for(let t=0;t<e.length;t++)Pe(e,t)||(e[t]=null);return e}function ke(e){let t=ar(null);for(let r of zg(e)){var i=m_(r,2);let o=i[0],n=i[1];Pe(e,o)&&(ti(n)?t[o]=A_(n):n&&typeof n=="object"&&n.constructor===Object?t[o]=ke(n):t[o]=n)}return t}function w_(e){switch(typeof e){case"string":return e;case"number":return __(e);case"boolean":return P_(e);case"bigint":return Rg?Rg(e):"0";case"symbol":return Eg?Eg(e):"Symbol()";case"undefined":return vo(e);case"function":case"object":{if(e===null)return vo(e);let t=e,i=ft(t,"toString");if(typeof i=="function"){let r=i(t);return typeof r=="string"?r:vo(r)}return vo(e)}default:return vo(e)}}function ft(e,t){for(;e!==null;){let r=v_(e,t);if(r){if(r.get)return ye(r.get);if(typeof r.value=="function")return ye(r.value)}e=S_(e)}function i(){return null}return i}function R_(e){try{return _e(e,""),!0}catch{return!1}}var Ig=Ie(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Hc=Ie(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),$c=Ie(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),E_=Ie(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Xc=Ie(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),I_=Ie(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Dg=Ie(["#text"]),Mg=Ie(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","command","commandfor","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns"]),jc=Ie(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dominant-baseline","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-orientation","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Fg=Ie(["accent","accentunder","align","bevelled","close","columnalign","columnlines","columnspacing","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lquote","lspace","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Ys=Ie(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),D_=De(/{{[\w\W]*|^[\w\W]*}}/g),M_=De(/<%[\w\W]*|^[\w\W]*%>/g),F_=De(/\${[\w\W]*/g),k_=De(/^data-[\-\w.\u00B7-\uFFFF]+$/),N_=De(/^aria-[\-\w]+$/),kg=De(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),B_=De(/^(?:\w+script|data):/i),O_=De(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),z_=De(/^html$/i),U_=De(/^[a-z][.\w]*(-[.\w]+)+$/i),Ng=De(/<[/\w!]/g),Bg=De(/<[/\w]/g),L_=De(/<\/no(script|embed|frames)/i),W_=De(/\/>/i),Ge={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,processingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},V_=function(){return typeof window>"u"?null:window},H_=function(t,i){if(typeof t!="object"||typeof t.createPolicy!="function")return null;let r=null,o="data-tt-policy-suffix";i&&i.hasAttribute(o)&&(r=i.getAttribute(o));let n="dompurify"+(r?"#"+r:"");try{return t.createPolicy(n,{createHTML(s){return s},createScriptURL(s){return s}})}catch{return console.warn("TrustedTypes policy "+n+" could not be created."),null}},Og=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},ei=function(t,i,r,o){return Pe(t,i)&&ti(t[i])?ie(o.base?ke(o.base):{},t[i],o.transform):r};function Lg(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:V_(),t=O=>Lg(O);if(t.version="3.4.13",t.removed=[],!e||!e.document||e.document.nodeType!==Ge.document||!e.Element)return t.isSupported=!1,t;let i=e.document,r=i,o=r.currentScript;e.DocumentFragment;let n=e.HTMLTemplateElement,s=e.Node,a=e.Element,l=e.NodeFilter,c=e.NamedNodeMap;c===void 0&&(e.NamedNodeMap||e.MozNamedAttrMap),e.HTMLFormElement;let d=e.DOMParser,u=e.trustedTypes,f=a.prototype,h=ft(f,"cloneNode"),m=ft(f,"remove"),x=ft(f,"nextSibling"),S=ft(f,"childNodes"),y=ft(f,"parentNode"),A=ft(f,"shadowRoot"),_=ft(f,"attributes"),v=s&&s.prototype?ft(s.prototype,"nodeType"):null,P=s&&s.prototype?ft(s.prototype,"nodeName"):null,T=s&&s.prototype?ft(s.prototype,"ownerDocument"):null;if(typeof n=="function"){let O=i.createElement("template");O.content&&O.content.ownerDocument&&(i=O.content.ownerDocument)}let R,D="",B,F=!1,W=0,k=function(){if(W>0)throw Pi('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.')},V=function(g){k(),W++;try{return R.createHTML(g)}finally{W--}},b=function(g){k(),W++;try{return R.createScriptURL(g)}finally{W--}},N=function(){return F||(B=H_(u,o),F=!0),B},I=i,L=I.implementation,$=I.createNodeIterator,G=I.createDocumentFragment,j=I.getElementsByTagName,oe=r.importNode,q=Og();t.isSupported=typeof zg=="function"&&typeof y=="function"&&L&&L.createHTMLDocument!==void 0;let Ze=D_,be=M_,He=F_,it=k_,$e=N_,rt=B_,ki=O_,nS=U_,mu=kg,ce=null,Da=ie({},[...Ig,...Hc,...$c,...Xc,...Dg]),de=null,Ma=ie({},[...Mg,...jc,...Fg,...Ys]),ge=Object.seal(ar(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),vr=null,gu=null,Wt=Object.seal(ar(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}})),xu=!0,Fa=!0,Su=!1,vu=!0,Vt=!1,Ht=!0,si=!1,ka=!1,Lo=null,Wo=null,Na=!1,Ni=!1,Vo=!1,Ho=!1,yu=!0,bu=!1,Tu="user-content-",Ba=!0,$o=!1,Bi={},St=null,Oa=ie({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","selectedcontent","style","svg","template","thead","title","video","xmp"]),_u=null,Pu=ie({},["audio","video","img","source","image","track"]),za=null,Cu=ie({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Xo="http://www.w3.org/1998/Math/MathML",jo="http://www.w3.org/2000/svg",vt="http://www.w3.org/1999/xhtml",Oi=vt,Ua=!1,La=null,sS=ie({},[Xo,jo,vt],Vc),Au=Ie(["mi","mo","mn","ms","mtext"]),Wa=ie({},Au),wu=Ie(["annotation-xml"]),Va=ie({},wu),aS=ie({},["title","style","font","a","script"]),yr=null,lS=["application/xhtml+xml","text/html"],cS="text/html",he=null,zi=null,dS=i.createElement("form"),Ru=function(g){return g instanceof RegExp||g instanceof Function},Ha=function(){let g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(zi&&zi===g)return;(!g||typeof g!="object")&&(g={}),g=ke(g),yr=lS.indexOf(g.PARSER_MEDIA_TYPE)===-1?cS:g.PARSER_MEDIA_TYPE,he=yr==="application/xhtml+xml"?Vc:yo,ce=ei(g,"ALLOWED_TAGS",Da,{transform:he}),de=ei(g,"ALLOWED_ATTR",Ma,{transform:he}),La=ei(g,"ALLOWED_NAMESPACES",sS,{transform:Vc}),za=ei(g,"ADD_URI_SAFE_ATTR",Cu,{transform:he,base:Cu}),_u=ei(g,"ADD_DATA_URI_TAGS",Pu,{transform:he,base:Pu}),St=ei(g,"FORBID_CONTENTS",Oa,{transform:he}),vr=ei(g,"FORBID_TAGS",ke({}),{transform:he}),gu=ei(g,"FORBID_ATTR",ke({}),{transform:he}),Bi=Pe(g,"USE_PROFILES")?g.USE_PROFILES&&typeof g.USE_PROFILES=="object"?ke(g.USE_PROFILES):g.USE_PROFILES:!1,xu=g.ALLOW_ARIA_ATTR!==!1,Fa=g.ALLOW_DATA_ATTR!==!1,Su=g.ALLOW_UNKNOWN_PROTOCOLS||!1,vu=g.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Vt=g.SAFE_FOR_TEMPLATES||!1,Ht=g.SAFE_FOR_XML!==!1,si=g.WHOLE_DOCUMENT||!1,Ni=g.RETURN_DOM||!1,Vo=g.RETURN_DOM_FRAGMENT||!1,Ho=g.RETURN_TRUSTED_TYPE||!1,Na=g.FORCE_BODY||!1,yu=g.SANITIZE_DOM!==!1,bu=g.SANITIZE_NAMED_PROPS||!1,Ba=g.KEEP_CONTENT!==!1,$o=g.IN_PLACE||!1,mu=R_(g.ALLOWED_URI_REGEXP)?g.ALLOWED_URI_REGEXP:kg,Oi=typeof g.NAMESPACE=="string"?g.NAMESPACE:vt,Wa=Pe(g,"MATHML_TEXT_INTEGRATION_POINTS")&&g.MATHML_TEXT_INTEGRATION_POINTS&&typeof g.MATHML_TEXT_INTEGRATION_POINTS=="object"?ke(g.MATHML_TEXT_INTEGRATION_POINTS):ie({},Au),Va=Pe(g,"HTML_INTEGRATION_POINTS")&&g.HTML_INTEGRATION_POINTS&&typeof g.HTML_INTEGRATION_POINTS=="object"?ke(g.HTML_INTEGRATION_POINTS):ie({},wu);let C=Pe(g,"CUSTOM_ELEMENT_HANDLING")&&g.CUSTOM_ELEMENT_HANDLING&&typeof g.CUSTOM_ELEMENT_HANDLING=="object"?ke(g.CUSTOM_ELEMENT_HANDLING):ar(null);if(ge=ar(null),Pe(C,"tagNameCheck")&&Ru(C.tagNameCheck)&&(ge.tagNameCheck=C.tagNameCheck),Pe(C,"attributeNameCheck")&&Ru(C.attributeNameCheck)&&(ge.attributeNameCheck=C.attributeNameCheck),Pe(C,"allowCustomizedBuiltInElements")&&typeof C.allowCustomizedBuiltInElements=="boolean"&&(ge.allowCustomizedBuiltInElements=C.allowCustomizedBuiltInElements),De(ge),Vt&&(Fa=!1),Vo&&(Ni=!0),Bi&&(ce=ie({},Dg),de=ar(null),Bi.html===!0&&(ie(ce,Ig),ie(de,Mg)),Bi.svg===!0&&(ie(ce,Hc),ie(de,jc),ie(de,Ys)),Bi.svgFilters===!0&&(ie(ce,$c),ie(de,jc),ie(de,Ys)),Bi.mathMl===!0&&(ie(ce,Xc),ie(de,Fg),ie(de,Ys))),Wt.tagCheck=null,Wt.attributeCheck=null,Pe(g,"ADD_TAGS")&&(typeof g.ADD_TAGS=="function"?Wt.tagCheck=g.ADD_TAGS:ti(g.ADD_TAGS)&&(ce===Da&&(ce=ke(ce)),ie(ce,g.ADD_TAGS,he))),Pe(g,"ADD_ATTR")&&(typeof g.ADD_ATTR=="function"?Wt.attributeCheck=g.ADD_ATTR:ti(g.ADD_ATTR)&&(de===Ma&&(de=ke(de)),ie(de,g.ADD_ATTR,he))),Pe(g,"ADD_URI_SAFE_ATTR")&&ti(g.ADD_URI_SAFE_ATTR)&&ie(za,g.ADD_URI_SAFE_ATTR,he),Pe(g,"FORBID_CONTENTS")&&ti(g.FORBID_CONTENTS)&&(St===Oa&&(St=ke(St)),ie(St,g.FORBID_CONTENTS,he)),Pe(g,"ADD_FORBID_CONTENTS")&&ti(g.ADD_FORBID_CONTENTS)&&(St===Oa&&(St=ke(St)),ie(St,g.ADD_FORBID_CONTENTS,he)),Ba&&(ce["#text"]=!0),si&&ie(ce,["html","head","body"]),ce.table&&(ie(ce,["tbody"]),delete vr.tbody),g.TRUSTED_TYPES_POLICY){if(typeof g.TRUSTED_TYPES_POLICY.createHTML!="function")throw Pi('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof g.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Pi('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');let M=R;R=g.TRUSTED_TYPES_POLICY;try{D=V("")}catch(H){throw R=M,H}}else g.TRUSTED_TYPES_POLICY===null?(R=void 0,D=""):(R===void 0&&(R=N()),R&&typeof D=="string"&&(D=V("")));Ie&&Ie(g),zi=g},Eu=ie({},[...Hc,...$c,...E_]),Iu=ie({},[...Xc,...I_]),uS=function(g,C,M){return C.namespaceURI===vt?g==="svg":C.namespaceURI===Xo?g==="svg"&&(M==="annotation-xml"||Wa[M]):!!Eu[g]},fS=function(g,C,M){return C.namespaceURI===vt?g==="math":C.namespaceURI===jo?g==="math"&&Va[M]:!!Iu[g]},hS=function(g,C,M){return C.namespaceURI===jo&&!Va[M]||C.namespaceURI===Xo&&!Wa[M]?!1:!Iu[g]&&(aS[g]||!Eu[g])},pS=function(g){let C=y(g);(!C||!C.tagName)&&(C={namespaceURI:Oi,tagName:"template"});let M=yo(g.tagName),H=yo(C.tagName);return La[g.namespaceURI]?g.namespaceURI===jo?uS(M,C,H):g.namespaceURI===Xo?fS(M,C,H):g.namespaceURI===vt?hS(M,C,H):!!(yr==="application/xhtml+xml"&&La[g.namespaceURI]):!1},$t=function(g){sr(t.removed,{element:g});try{y(g).removeChild(g)}catch{if(m(g),!y(g))throw Pi("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place")}},Yo=function(g){br(g);let C=S(g);if(C){let H=[];nr(C,X=>{sr(H,X)}),nr(H,X=>{try{m(X)}catch{}})}let M=_(g);if(M)for(let H=M.length-1;H>=0;--H){let X=M[H],K=X&&X.name;if(typeof K=="string")try{g.removeAttribute(K)}catch{}}},ai=function(g,C){try{sr(t.removed,{attribute:C.getAttributeNode(g),from:C})}catch{sr(t.removed,{attribute:null,from:C})}if(C.removeAttribute(g),g==="is")if(Ni||Vo)try{$t(C)}catch{}else try{C.setAttribute(g,"")}catch{}},mS=function(g){let C=_(g);if(C)for(let M=C.length-1;M>=0;--M){let H=C[M],X=H&&H.name;if(!(typeof X!="string"||de[he(X)]))try{g.removeAttribute(X)}catch{}}},br=function(g){let C=[g];for(;C.length>0;){let M=C.pop();(v?v(M):M.nodeType)===Ge.element&&mS(M);let X=S(M);if(X)for(let K=X.length-1;K>=0;--K)C.push(X[K])}},gS=function(g){if(!Ht)return;let C=[g];for(;C.length>0;){let M=C.pop(),H=v?v(M):M.nodeType;if(H===Ge.processingInstruction||H===Ge.comment&&_e(Bg,M.data)){try{m(M)}catch{}continue}if(H===Ge.element){let K=M,ne=he(P?P(M):M.nodeName);try{K.hasAttribute&&K.hasAttribute("patchsrc")&&K.removeAttribute("patchsrc"),K.hasAttribute&&K.hasAttribute("for")&&ne!=="label"&&ne!=="output"&&K.removeAttribute("for")}catch{}}let X=S(M);if(X)for(let K=X.length-1;K>=0;--K)C.push(X[K])}},Du=function(g){let C=null,M=null;if(Na)g="<remove></remove>"+g;else{let K=Ag(g,/^[\r\n\t ]+/);M=K&&K[0]}yr==="application/xhtml+xml"&&Oi===vt&&(g='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+g+"</body></html>");let H=R?V(g):g;if(Oi===vt)try{C=new d().parseFromString(H,yr)}catch{}if(!C||!C.documentElement){C=L.createDocument(Oi,"template",null);try{C.documentElement.innerHTML=Ua?D:H}catch{}}let X=C.body||C.documentElement;return g&&M&&X.insertBefore(i.createTextNode(M),X.childNodes[0]||null),Oi===vt?j.call(C,si?"html":"body")[0]:si?C.documentElement:X},Mu=function(g){let C=T?T(g):g.ownerDocument;return $.call(C||g,g,l.SHOW_ELEMENT|l.SHOW_COMMENT|l.SHOW_TEXT|l.SHOW_PROCESSING_INSTRUCTION|l.SHOW_CDATA_SECTION,null)},Go=function(g){return g=So(g,Ze," "),g=So(g,be," "),g=So(g,He," "),g},$a=function(g){var C;g.normalize();let M=T?T(g):g.ownerDocument,H=$.call(M||g,g,l.SHOW_TEXT|l.SHOW_COMMENT|l.SHOW_CDATA_SECTION|l.SHOW_PROCESSING_INSTRUCTION,null),X=H.nextNode();for(;X;)X.data=Go(X.data),X=H.nextNode();let K=(C=g.querySelectorAll)===null||C===void 0?void 0:C.call(g,"template");K&&nr(K,ne=>{Ui(ne.content)&&$a(ne.content)})},qo=function(g){let C=P?P(g):null;return typeof C!="string"||he(C)!=="form"?!1:typeof g.nodeName!="string"||typeof g.textContent!="string"||typeof g.removeChild!="function"||g.attributes!==_(g)||typeof g.removeAttribute!="function"||typeof g.setAttribute!="function"||typeof g.namespaceURI!="string"||typeof g.insertBefore!="function"||typeof g.hasChildNodes!="function"||g.nodeType!==v(g)||g.childNodes!==S(g)},Ui=function(g){if(!v||typeof g!="object"||g===null)return!1;try{return v(g)===Ge.documentFragment}catch{return!1}},Tr=function(g){if(!v||typeof g!="object"||g===null)return!1;try{return typeof v(g)=="number"}catch{return!1}};function yt(O,g,C){O.length!==0&&nr(O,M=>{M.call(t,g,C,zi)})}let xS=function(g,C){return!!(Ht&&g.hasChildNodes()&&!Tr(g.firstElementChild)&&_e(Ng,g.textContent)&&_e(Ng,g.innerHTML)||Ht&&g.namespaceURI===vt&&C==="style"&&Tr(g.firstElementChild)||g.nodeType===Ge.processingInstruction||Ht&&g.nodeType===Ge.comment&&_e(Bg,g.data))},SS=function(g,C,M){if(!vr[C]&&Bu(C)&&(ge.tagNameCheck instanceof RegExp&&_e(ge.tagNameCheck,C)||ge.tagNameCheck instanceof Function&&ge.tagNameCheck(C)))return!1;if(Ba&&!St[C]){let H=y(g),X=S(g);if(X&&H){let K=X.length;for(let ne=K-1;ne>=0;--ne){let pe=g===M?h(X[ne],!0):X[ne];H.insertBefore(pe,x(g))}}}return $t(g),!0},Fu=function(g,C,M,H){return g.length===0?C:C===M||C===H?ke(C):C},ku=function(g,C){if(yt(q.beforeSanitizeElements,g,null),g!==C&&y(g)===null)return $o&&br(g),!0;if(qo(g))return $t(g),!0;let M=he(P?P(g):g.nodeName);if(ce=Fu(q.uponSanitizeElement,ce,Da,Lo),yt(q.uponSanitizeElement,g,{tagName:M,allowedTags:ce}),g!==C&&y(g)===null)return $o&&br(g),!0;if(xS(g,M))return $t(g),!0;if(vr[M]||!(Wt.tagCheck instanceof Function&&Wt.tagCheck(M))&&!ce[M]){let X=SS(g,M,C);return X===!1&&yt(q.afterSanitizeElements,g,null),X}if((v?v(g):g.nodeType)===Ge.element&&!pS(g)||(M==="noscript"||M==="noembed"||M==="noframes")&&_e(L_,g.innerHTML))return $t(g),!0;if(Vt&&g.nodeType===Ge.text){let X=Go(g.textContent);g.textContent!==X&&(sr(t.removed,{element:g.cloneNode()}),g.textContent=X)}return yt(q.afterSanitizeElements,g,null),!1},Nu=function(g,C,M){if(gu[C]||Ht&&C==="patchsrc"||Ht&&C==="for"&&g!=="label"&&g!=="output"||yu&&(C==="id"||C==="name")&&(M in i||M in dS))return!1;let H=de[C]||Wt.attributeCheck instanceof Function&&Wt.attributeCheck(C,g);if(!(Fa&&_e(it,C))){if(!(xu&&_e($e,C))){if(H){if(!za[C]){if(!_e(mu,So(M,ki,""))){if(!((C==="src"||C==="xlink:href"||C==="href")&&g!=="script"&&wg(M,"data:")===0&&_u[g])){if(!(Su&&!_e(rt,So(M,ki,"")))){if(M)return!1}}}}}else if(!(Bu(g)&&(ge.tagNameCheck instanceof RegExp&&_e(ge.tagNameCheck,g)||ge.tagNameCheck instanceof Function&&ge.tagNameCheck(g))&&(ge.attributeNameCheck instanceof RegExp&&_e(ge.attributeNameCheck,C)||ge.attributeNameCheck instanceof Function&&ge.attributeNameCheck(C,g))||C==="is"&&ge.allowCustomizedBuiltInElements&&(ge.tagNameCheck instanceof RegExp&&_e(ge.tagNameCheck,M)||ge.tagNameCheck instanceof Function&&ge.tagNameCheck(M))))return!1}}return!0},vS=ie({},["annotation-xml","color-profile","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","missing-glyph"]),Bu=function(g){return!vS[yo(g)]&&_e(nS,g)},yS=function(g,C,M,H){if(R&&typeof u=="object"&&typeof u.getAttributeType=="function"&&!M)switch(u.getAttributeType(g,C)){case"TrustedHTML":return V(H);case"TrustedScriptURL":return b(H)}return H},bS=function(g,C,M,H){try{M?g.setAttributeNS(M,C,H):g.setAttribute(C,H),qo(g)?$t(g):Cg(t.removed)}catch{ai(C,g)}},Ou=function(g){yt(q.beforeSanitizeAttributes,g,null);let C=g.attributes;if(!C||qo(g))return;de=Fu(q.uponSanitizeAttribute,de,Ma,Wo);let M={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:de,forceKeepAttr:void 0},H=C.length,X=he(g.nodeName);for(;H--;){let K=C[H],ne=K.name,pe=K.namespaceURI,Ue=K.value,Le=he(ne),ja=Ue,Be=ne==="value"?ja:T_(ja);if(M.attrName=Le,M.attrValue=Be,M.keepAttr=!0,M.forceKeepAttr=void 0,yt(q.uponSanitizeAttribute,g,M),Be=M.attrValue,bu&&(Le==="id"||Le==="name")&&wg(Be,Tu)!==0&&(ai(ne,g),Be=Tu+Be),Ht&&_e(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,Be)){ai(ne,g);continue}if(Le==="attributename"&&Ag(Be,"href")){ai(ne,g);continue}if(!M.forceKeepAttr){if(!M.keepAttr){ai(ne,g);continue}if(!vu&&_e(W_,Be)){ai(ne,g);continue}if(Vt&&(Be=Go(Be)),!Nu(X,Le,Be)){ai(ne,g);continue}Be=yS(X,Le,pe,Be),Be!==ja&&bS(g,ne,pe,Be)}}yt(q.afterSanitizeAttributes,g,null)},Ko=function(g){let C=null,M=Mu(g);for(yt(q.beforeSanitizeShadowDOM,g,null);C=M.nextNode();)if(yt(q.uponSanitizeShadowNode,C,null),ku(C,g),Ou(C),Ui(C.content)&&Ko(C.content),(v?v(C):C.nodeType)===Ge.element){let X=A(C);Ui(X)&&(Xa(X),Ko(X))}yt(q.afterSanitizeShadowDOM,g,null)},Xa=function(g){let C=[{node:g,shadow:null}];for(;C.length>0;){let M=C.pop();if(M.shadow){Ko(M.shadow);continue}let H=M.node,K=(v?v(H):H.nodeType)===Ge.element,ne=S(H);if(ne)for(let pe=ne.length-1;pe>=0;--pe)C.push({node:ne[pe],shadow:null});if(K){let pe=P?P(H):null;if(typeof pe=="string"&&he(pe)==="template"){let Ue=H.content;Ui(Ue)&&C.push({node:Ue,shadow:null})}}if(K){let pe=A(H);Ui(pe)&&C.push({node:null,shadow:pe},{node:pe,shadow:null})}}};return t.sanitize=function(O){let g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},C=null,M=null,H=null,X=null;if(Ua=!O,Ua&&(O="<!-->"),typeof O!="string"&&!Tr(O)&&(O=w_(O),typeof O!="string"))throw Pi("dirty is not a string, aborting");if(!t.isSupported)return O;ka?(ce=Lo,de=Wo):Ha(g),(q.uponSanitizeElement.length>0||q.uponSanitizeAttribute.length>0)&&(ce=ke(ce)),q.uponSanitizeAttribute.length>0&&(de=ke(de)),t.removed=[];let K=$o&&typeof O!="string"&&Tr(O);if(K){gS(O);let Ue=P?P(O):O.nodeName;if(typeof Ue=="string"){let Le=he(Ue);if(!ce[Le]||vr[Le])throw Yo(O),Pi("root node is forbidden and cannot be sanitized in-place")}if(qo(O))throw Yo(O),Pi("root node is clobbered and cannot be sanitized in-place");try{Xa(O)}catch(Le){throw Yo(O),Le}}else if(Tr(O))C=Du("<!---->"),M=C.ownerDocument.importNode(O,!0),M.nodeType===Ge.element&&M.nodeName==="BODY"||M.nodeName==="HTML"?C=M:C.appendChild(M),Xa(M);else{if(!Ni&&!Vt&&!si&&O.indexOf("<")===-1)return R&&Ho?V(O):O;if(C=Du(O),!C)return Ni?null:Ho?D:""}C&&Na&&$t(C.firstChild);let ne=K?O:C;try{let Ue=Mu(ne);for(;H=Ue.nextNode();)ku(H,ne),Ou(H),Ui(H.content)&&Ko(H.content)}catch(Ue){throw K&&(Yo(O),nr(t.removed,Le=>{Le.element&&br(Le.element)})),Ue}if(K)return nr(t.removed,Ue=>{Ue.element&&br(Ue.element)}),Vt&&$a(O),O;if(Ni){if(Vt&&$a(C),Vo)for(X=G.call(C.ownerDocument);C.firstChild;)X.appendChild(C.firstChild);else X=C;return(de.shadowroot||de.shadowrootmode)&&(X=oe.call(r,X,!0)),X}let pe=si?C.outerHTML:C.innerHTML;return si&&ce["!doctype"]&&C.ownerDocument&&C.ownerDocument.doctype&&C.ownerDocument.doctype.name&&_e(z_,C.ownerDocument.doctype.name)&&(pe="<!DOCTYPE "+C.ownerDocument.doctype.name+`>
`+pe),Vt&&(pe=Go(pe)),R&&Ho?V(pe):pe},t.setConfig=function(){let O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Ha(O),ka=!0,Lo=ce,Wo=de},t.clearConfig=function(){zi=null,ka=!1,Lo=null,Wo=null,R=B,D=""},t.isValidAttribute=function(O,g,C){zi||Ha({});let M=he(O),H=he(g);return Nu(M,H,C)},t.addHook=function(O,g){typeof g=="function"&&Pe(q,O)&&sr(q[O],g)},t.removeHook=function(O,g){if(Pe(q,O)){if(g!==void 0){let C=y_(q[O],g);return C===-1?void 0:b_(q[O],C,1)[0]}return Cg(q[O])}},t.removeHooks=function(O){Pe(q,O)&&(q[O]=[])},t.removeAllHooks=function(){q=Og()},t}var Wg=Lg();function Ci(e,t){return e==null||t==null?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function qc(e,t){return e==null||t==null?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function Gs(e){let t,i,r;e.length!==2?(t=Ci,i=(a,l)=>Ci(e(a),l),r=(a,l)=>e(a)-l):(t=e===Ci||e===qc?e:$_,i=e,r=e);function o(a,l,c=0,d=a.length){if(c<d){if(t(l,l)!==0)return d;do{let u=c+d>>>1;i(a[u],l)<0?c=u+1:d=u}while(c<d)}return c}function n(a,l,c=0,d=a.length){if(c<d){if(t(l,l)!==0)return d;do{let u=c+d>>>1;i(a[u],l)<=0?c=u+1:d=u}while(c<d)}return c}function s(a,l,c=0,d=a.length){let u=o(a,l,c,d-1);return u>c&&r(a[u-1],l)>-r(a[u],l)?u-1:u}return{left:o,center:s,right:n}}function $_(){return 0}function Kc(e){return e===null?NaN:+e}var Vg=Gs(Ci),Hg=Vg.right,X_=Vg.left,j_=Gs(Kc).center,Zc=Hg;var Y_=Math.sqrt(50),G_=Math.sqrt(10),q_=Math.sqrt(2);function qs(e,t,i){let r=(t-e)/Math.max(0,i),o=Math.floor(Math.log10(r)),n=r/Math.pow(10,o),s=n>=Y_?10:n>=G_?5:n>=q_?2:1,a,l,c;return o<0?(c=Math.pow(10,-o)/s,a=Math.round(e*c),l=Math.round(t*c),a/c<e&&++a,l/c>t&&--l,c=-c):(c=Math.pow(10,o)*s,a=Math.round(e/c),l=Math.round(t/c),a*c<e&&++a,l*c>t&&--l),l<a&&.5<=i&&i<2?qs(e,t,i*2):[a,l,c]}function Ks(e,t,i){if(t=+t,e=+e,i=+i,!(i>0))return[];if(e===t)return[e];let r=t<e,[o,n,s]=r?qs(t,e,i):qs(e,t,i);if(!(n>=o))return[];let a=n-o+1,l=new Array(a);if(r)if(s<0)for(let c=0;c<a;++c)l[c]=(n-c)/-s;else for(let c=0;c<a;++c)l[c]=(n-c)*s;else if(s<0)for(let c=0;c<a;++c)l[c]=(o+c)/-s;else for(let c=0;c<a;++c)l[c]=(o+c)*s;return l}function bo(e,t,i){return t=+t,e=+e,i=+i,qs(e,t,i)[2]}function Qc(e,t,i){t=+t,e=+e,i=+i;let r=t<e,o=r?bo(t,e,i):bo(e,t,i);return(r?-1:1)*(o<0?1/-o:o)}function Zs(e,t,i){e=+e,t=+t,i=(o=arguments.length)<2?(t=e,e=0,1):o<3?1:+i;for(var r=-1,o=Math.max(0,Math.ceil((t-e)/i))|0,n=new Array(o);++r<o;)n[r]=e+r*i;return n}function Qs(e,t){switch(arguments.length){case 0:break;case 1:this.range(e);break;default:this.range(t).domain(e);break}return this}function Jc(e){return function(){return e}}function ed(e){return+e}var $g=[0,1];function ht(e){return e}function td(e,t){return(t-=e=+e)?function(i){return(i-e)/t}:Jc(isNaN(t)?NaN:.5)}function K_(e,t){var i;return e>t&&(i=e,e=t,t=i),function(r){return Math.max(e,Math.min(t,r))}}function Z_(e,t,i){var r=e[0],o=e[1],n=t[0],s=t[1];return o<r?(r=td(o,r),n=i(s,n)):(r=td(r,o),n=i(n,s)),function(a){return n(r(a))}}function Q_(e,t,i){var r=Math.min(e.length,t.length)-1,o=new Array(r),n=new Array(r),s=-1;for(e[r]<e[0]&&(e=e.slice().reverse(),t=t.slice().reverse());++s<r;)o[s]=td(e[s],e[s+1]),n[s]=i(t[s],t[s+1]);return function(a){var l=Zc(e,a,1,r)-1;return n[l](o[l](a))}}function Js(e,t){return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown())}function id(){var e=$g,t=$g,i=mi,r,o,n,s=ht,a,l,c;function d(){var f=Math.min(e.length,t.length);return s!==ht&&(s=K_(e[0],e[f-1])),a=f>2?Q_:Z_,l=c=null,u}function u(f){return f==null||isNaN(f=+f)?n:(l||(l=a(e.map(r),t,i)))(r(s(f)))}return u.invert=function(f){return s(o((c||(c=a(t,e.map(r),Ae)))(f)))},u.domain=function(f){return arguments.length?(e=Array.from(f,ed),d()):e.slice()},u.range=function(f){return arguments.length?(t=Array.from(f),d()):t.slice()},u.rangeRound=function(f){return t=Array.from(f),i=rl,d()},u.clamp=function(f){return arguments.length?(s=f?!0:ht,d()):s!==ht},u.interpolate=function(f){return arguments.length?(i=f,d()):i},u.unknown=function(f){return arguments.length?(n=f,u):n},function(f,h){return r=f,o=h,d()}}function rd(){return id()(ht,ht)}function Xg(e){return Math.abs(e=Math.round(e))>=1e21?e.toLocaleString("en").replace(/,/g,""):e.toString(10)}function Ai(e,t){if(!isFinite(e)||e===0)return null;var i=(e=t?e.toExponential(t-1):e.toExponential()).indexOf("e"),r=e.slice(0,i);return[r.length>1?r[0]+r.slice(2):r,+e.slice(i+1)]}function Dt(e){return e=Ai(Math.abs(e)),e?e[1]:NaN}function jg(e,t){return function(i,r){for(var o=i.length,n=[],s=0,a=e[0],l=0;o>0&&a>0&&(l+a+1>r&&(a=Math.max(1,r-l)),n.push(i.substring(o-=a,o+a)),!((l+=a+1)>r));)a=e[s=(s+1)%e.length];return n.reverse().join(t)}}function Yg(e){return function(t){return t.replace(/[0-9]/g,function(i){return e[+i]})}}var J_=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function ii(e){if(!(t=J_.exec(e)))throw new Error("invalid format: "+e);var t;return new ea({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}ii.prototype=ea.prototype;function ea(e){this.fill=e.fill===void 0?" ":e.fill+"",this.align=e.align===void 0?">":e.align+"",this.sign=e.sign===void 0?"-":e.sign+"",this.symbol=e.symbol===void 0?"":e.symbol+"",this.zero=!!e.zero,this.width=e.width===void 0?void 0:+e.width,this.comma=!!e.comma,this.precision=e.precision===void 0?void 0:+e.precision,this.trim=!!e.trim,this.type=e.type===void 0?"":e.type+""}ea.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function Gg(e){e:for(var t=e.length,i=1,r=-1,o;i<t;++i)switch(e[i]){case".":r=o=i;break;case"0":r===0&&(r=i),o=i;break;default:if(!+e[i])break e;r>0&&(r=0);break}return r>0?e.slice(0,r)+e.slice(o+1):e}var To;function qg(e,t){var i=Ai(e,t);if(!i)return To=void 0,e.toPrecision(t);var r=i[0],o=i[1],n=o-(To=Math.max(-8,Math.min(8,Math.floor(o/3)))*3)+1,s=r.length;return n===s?r:n>s?r+new Array(n-s+1).join("0"):n>0?r.slice(0,n)+"."+r.slice(n):"0."+new Array(1-n).join("0")+Ai(e,Math.max(0,t+n-1))[0]}function od(e,t){var i=Ai(e,t);if(!i)return e+"";var r=i[0],o=i[1];return o<0?"0."+new Array(-o).join("0")+r:r.length>o+1?r.slice(0,o+1)+"."+r.slice(o+1):r+new Array(o-r.length+2).join("0")}var nd={"%":(e,t)=>(e*100).toFixed(t),b:e=>Math.round(e).toString(2),c:e=>e+"",d:Xg,e:(e,t)=>e.toExponential(t),f:(e,t)=>e.toFixed(t),g:(e,t)=>e.toPrecision(t),o:e=>Math.round(e).toString(8),p:(e,t)=>od(e*100,t),r:od,s:qg,X:e=>Math.round(e).toString(16).toUpperCase(),x:e=>Math.round(e).toString(16)};function sd(e){return e}var Kg=Array.prototype.map,Zg=["y","z","a","f","p","n","\xB5","m","","k","M","G","T","P","E","Z","Y"];function Qg(e){var t=e.grouping===void 0||e.thousands===void 0?sd:jg(Kg.call(e.grouping,Number),e.thousands+""),i=e.currency===void 0?"":e.currency[0]+"",r=e.currency===void 0?"":e.currency[1]+"",o=e.decimal===void 0?".":e.decimal+"",n=e.numerals===void 0?sd:Yg(Kg.call(e.numerals,String)),s=e.percent===void 0?"%":e.percent+"",a=e.minus===void 0?"\u2212":e.minus+"",l=e.nan===void 0?"NaN":e.nan+"";function c(u,f){u=ii(u);var h=u.fill,m=u.align,x=u.sign,S=u.symbol,y=u.zero,A=u.width,_=u.comma,v=u.precision,P=u.trim,T=u.type;T==="n"?(_=!0,T="g"):nd[T]||(v===void 0&&(v=12),P=!0,T="g"),(y||h==="0"&&m==="=")&&(y=!0,h="0",m="=");var R=(f&&f.prefix!==void 0?f.prefix:"")+(S==="$"?i:S==="#"&&/[boxX]/.test(T)?"0"+T.toLowerCase():""),D=(S==="$"?r:/[%p]/.test(T)?s:"")+(f&&f.suffix!==void 0?f.suffix:""),B=nd[T],F=/[defgprs%]/.test(T);v=v===void 0?6:/[gprs]/.test(T)?Math.max(1,Math.min(21,v)):Math.max(0,Math.min(20,v));function W(k){var V=R,b=D,N,I,L;if(T==="c")b=B(k)+b,k="";else{k=+k;var $=k<0||1/k<0;if(k=isNaN(k)?l:B(Math.abs(k),v),P&&(k=Gg(k)),$&&+k==0&&x!=="+"&&($=!1),V=($?x==="("?x:a:x==="-"||x==="("?"":x)+V,b=(T==="s"&&!isNaN(k)&&To!==void 0?Zg[8+To/3]:"")+b+($&&x==="("?")":""),F){for(N=-1,I=k.length;++N<I;)if(L=k.charCodeAt(N),48>L||L>57){b=(L===46?o+k.slice(N+1):k.slice(N))+b,k=k.slice(0,N);break}}}_&&!y&&(k=t(k,1/0));var G=V.length+k.length+b.length,j=G<A?new Array(A-G+1).join(h):"";switch(_&&y&&(k=t(j+k,j.length?A-b.length:1/0),j=""),m){case"<":k=V+k+b+j;break;case"=":k=V+j+k+b;break;case"^":k=j.slice(0,G=j.length>>1)+V+k+b+j.slice(G);break;default:k=j+V+k+b;break}return n(k)}return W.toString=function(){return u+""},W}function d(u,f){var h=Math.max(-8,Math.min(8,Math.floor(Dt(f)/3)))*3,m=Math.pow(10,-h),x=c((u=ii(u),u.type="f",u),{suffix:Zg[8+h/3]});return function(S){return x(m*S)}}return{format:c,formatPrefix:d}}var ta,ia,ra;ad({thousands:",",grouping:[3],currency:["$",""]});function ad(e){return ta=Qg(e),ia=ta.format,ra=ta.formatPrefix,ta}function ld(e){return Math.max(0,-Dt(Math.abs(e)))}function cd(e,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(Dt(t)/3)))*3-Dt(Math.abs(e)))}function dd(e,t){return e=Math.abs(e),t=Math.abs(t)-e,Math.max(0,Dt(t)-Dt(e))+1}function ud(e,t,i,r){var o=Qc(e,t,i),n;switch(r=ii(r??",f"),r.type){case"s":{var s=Math.max(Math.abs(e),Math.abs(t));return r.precision==null&&!isNaN(n=cd(o,s))&&(r.precision=n),ra(r,s)}case"":case"e":case"g":case"p":case"r":{r.precision==null&&!isNaN(n=dd(o,Math.max(Math.abs(e),Math.abs(t))))&&(r.precision=n-(r.type==="e"));break}case"f":case"%":{r.precision==null&&!isNaN(n=ld(o))&&(r.precision=n-(r.type==="%")*2);break}}return ia(r)}function fd(e){var t=e.domain;return e.ticks=function(i){var r=t();return Ks(r[0],r[r.length-1],i??10)},e.tickFormat=function(i,r){var o=t();return ud(o[0],o[o.length-1],i??10,r)},e.nice=function(i){i==null&&(i=10);var r=t(),o=0,n=r.length-1,s=r[o],a=r[n],l,c,d=10;for(a<s&&(c=s,s=a,a=c,c=o,o=n,n=c);d-- >0;){if(c=bo(s,a,i),c===l)return r[o]=s,r[n]=a,t(r);if(c>0)s=Math.floor(s/c)*c,a=Math.ceil(a/c)*c;else if(c<0)s=Math.ceil(s*c)/c,a=Math.floor(a*c)/c;else break;l=c}return e},e}function lr(){var e=rd();return e.copy=function(){return Js(e,lr())},Qs.apply(e,arguments),fd(e)}function Jg(e){return function(t){return t<0?-Math.pow(-t,e):Math.pow(t,e)}}function e1(e){return e<0?-Math.sqrt(-e):Math.sqrt(e)}function t1(e){return e<0?-e*e:e*e}function i1(e){var t=e(ht,ht),i=1;function r(){return i===1?e(ht,ht):i===.5?e(e1,t1):e(Jg(i),Jg(1/i))}return t.exponent=function(o){return arguments.length?(i=+o,r()):i},fd(t)}function _o(){var e=i1(id());return e.copy=function(){return Js(e,_o()).exponent(e.exponent())},Qs.apply(e,arguments),e}var J=1e-6,Me=typeof Float32Array<"u"?Float32Array:Array,hd=Math.random;function oa(e){return e>=0?Math.round(e):e%.5===0?Math.floor(e):Math.round(e)}var V4=Math.PI/180,H4=180/Math.PI;var Mt={};Pr(Mt,{add:()=>A1,adjoint:()=>f1,clone:()=>n1,copy:()=>s1,create:()=>r1,determinant:()=>h1,equals:()=>I1,exactEquals:()=>E1,frob:()=>C1,fromMat2d:()=>y1,fromMat4:()=>o1,fromQuat:()=>b1,fromRotation:()=>S1,fromScaling:()=>v1,fromTranslation:()=>x1,fromValues:()=>a1,identity:()=>c1,invert:()=>u1,mul:()=>D1,multiply:()=>ex,multiplyScalar:()=>w1,multiplyScalarAndAdd:()=>R1,normalFromMat4:()=>T1,projection:()=>_1,rotate:()=>m1,scale:()=>g1,set:()=>l1,str:()=>P1,sub:()=>M1,subtract:()=>tx,translate:()=>p1,transpose:()=>d1});function r1(){var e=new Me(9);return Me!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[5]=0,e[6]=0,e[7]=0),e[0]=1,e[4]=1,e[8]=1,e}function o1(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[4],e[4]=t[5],e[5]=t[6],e[6]=t[8],e[7]=t[9],e[8]=t[10],e}function n1(e){var t=new Me(9);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function s1(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e}function a1(e,t,i,r,o,n,s,a,l){var c=new Me(9);return c[0]=e,c[1]=t,c[2]=i,c[3]=r,c[4]=o,c[5]=n,c[6]=s,c[7]=a,c[8]=l,c}function l1(e,t,i,r,o,n,s,a,l,c){return e[0]=t,e[1]=i,e[2]=r,e[3]=o,e[4]=n,e[5]=s,e[6]=a,e[7]=l,e[8]=c,e}function c1(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e}function d1(e,t){if(e===t){var i=t[1],r=t[2],o=t[5];e[1]=t[3],e[2]=t[6],e[3]=i,e[5]=t[7],e[6]=r,e[7]=o}else e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8];return e}function u1(e,t){var i=t[0],r=t[1],o=t[2],n=t[3],s=t[4],a=t[5],l=t[6],c=t[7],d=t[8],u=d*s-a*c,f=-d*n+a*l,h=c*n-s*l,m=i*u+r*f+o*h;return m?(m=1/m,e[0]=u*m,e[1]=(-d*r+o*c)*m,e[2]=(a*r-o*s)*m,e[3]=f*m,e[4]=(d*i-o*l)*m,e[5]=(-a*i+o*n)*m,e[6]=h*m,e[7]=(-c*i+r*l)*m,e[8]=(s*i-r*n)*m,e):null}function f1(e,t){var i=t[0],r=t[1],o=t[2],n=t[3],s=t[4],a=t[5],l=t[6],c=t[7],d=t[8];return e[0]=s*d-a*c,e[1]=o*c-r*d,e[2]=r*a-o*s,e[3]=a*l-n*d,e[4]=i*d-o*l,e[5]=o*n-i*a,e[6]=n*c-s*l,e[7]=r*l-i*c,e[8]=i*s-r*n,e}function h1(e){var t=e[0],i=e[1],r=e[2],o=e[3],n=e[4],s=e[5],a=e[6],l=e[7],c=e[8];return t*(c*n-s*l)+i*(-c*o+s*a)+r*(l*o-n*a)}function ex(e,t,i){var r=t[0],o=t[1],n=t[2],s=t[3],a=t[4],l=t[5],c=t[6],d=t[7],u=t[8],f=i[0],h=i[1],m=i[2],x=i[3],S=i[4],y=i[5],A=i[6],_=i[7],v=i[8];return e[0]=f*r+h*s+m*c,e[1]=f*o+h*a+m*d,e[2]=f*n+h*l+m*u,e[3]=x*r+S*s+y*c,e[4]=x*o+S*a+y*d,e[5]=x*n+S*l+y*u,e[6]=A*r+_*s+v*c,e[7]=A*o+_*a+v*d,e[8]=A*n+_*l+v*u,e}function p1(e,t,i){var r=t[0],o=t[1],n=t[2],s=t[3],a=t[4],l=t[5],c=t[6],d=t[7],u=t[8],f=i[0],h=i[1];return e[0]=r,e[1]=o,e[2]=n,e[3]=s,e[4]=a,e[5]=l,e[6]=f*r+h*s+c,e[7]=f*o+h*a+d,e[8]=f*n+h*l+u,e}function m1(e,t,i){var r=t[0],o=t[1],n=t[2],s=t[3],a=t[4],l=t[5],c=t[6],d=t[7],u=t[8],f=Math.sin(i),h=Math.cos(i);return e[0]=h*r+f*s,e[1]=h*o+f*a,e[2]=h*n+f*l,e[3]=h*s-f*r,e[4]=h*a-f*o,e[5]=h*l-f*n,e[6]=c,e[7]=d,e[8]=u,e}function g1(e,t,i){var r=i[0],o=i[1];return e[0]=r*t[0],e[1]=r*t[1],e[2]=r*t[2],e[3]=o*t[3],e[4]=o*t[4],e[5]=o*t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e}function x1(e,t){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=t[0],e[7]=t[1],e[8]=1,e}function S1(e,t){var i=Math.sin(t),r=Math.cos(t);return e[0]=r,e[1]=i,e[2]=0,e[3]=-i,e[4]=r,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e}function v1(e,t){return e[0]=t[0],e[1]=0,e[2]=0,e[3]=0,e[4]=t[1],e[5]=0,e[6]=0,e[7]=0,e[8]=1,e}function y1(e,t){return e[0]=t[0],e[1]=t[1],e[2]=0,e[3]=t[2],e[4]=t[3],e[5]=0,e[6]=t[4],e[7]=t[5],e[8]=1,e}function b1(e,t){var i=t[0],r=t[1],o=t[2],n=t[3],s=i+i,a=r+r,l=o+o,c=i*s,d=r*s,u=r*a,f=o*s,h=o*a,m=o*l,x=n*s,S=n*a,y=n*l;return e[0]=1-u-m,e[3]=d-y,e[6]=f+S,e[1]=d+y,e[4]=1-c-m,e[7]=h-x,e[2]=f-S,e[5]=h+x,e[8]=1-c-u,e}function T1(e,t){var i=t[0],r=t[1],o=t[2],n=t[3],s=t[4],a=t[5],l=t[6],c=t[7],d=t[8],u=t[9],f=t[10],h=t[11],m=t[12],x=t[13],S=t[14],y=t[15],A=i*a-r*s,_=i*l-o*s,v=i*c-n*s,P=r*l-o*a,T=r*c-n*a,R=o*c-n*l,D=d*x-u*m,B=d*S-f*m,F=d*y-h*m,W=u*S-f*x,k=u*y-h*x,V=f*y-h*S,b=A*V-_*k+v*W+P*F-T*B+R*D;return b?(b=1/b,e[0]=(a*V-l*k+c*W)*b,e[1]=(l*F-s*V-c*B)*b,e[2]=(s*k-a*F+c*D)*b,e[3]=(o*k-r*V-n*W)*b,e[4]=(i*V-o*F+n*B)*b,e[5]=(r*F-i*k-n*D)*b,e[6]=(x*R-S*T+y*P)*b,e[7]=(S*v-m*R-y*_)*b,e[8]=(m*T-x*v+y*A)*b,e):null}function _1(e,t,i){return e[0]=2/t,e[1]=0,e[2]=0,e[3]=0,e[4]=-2/i,e[5]=0,e[6]=-1,e[7]=1,e[8]=1,e}function P1(e){return"mat3("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+", "+e[6]+", "+e[7]+", "+e[8]+")"}function C1(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3]+e[4]*e[4]+e[5]*e[5]+e[6]*e[6]+e[7]*e[7]+e[8]*e[8])}function A1(e,t,i){return e[0]=t[0]+i[0],e[1]=t[1]+i[1],e[2]=t[2]+i[2],e[3]=t[3]+i[3],e[4]=t[4]+i[4],e[5]=t[5]+i[5],e[6]=t[6]+i[6],e[7]=t[7]+i[7],e[8]=t[8]+i[8],e}function tx(e,t,i){return e[0]=t[0]-i[0],e[1]=t[1]-i[1],e[2]=t[2]-i[2],e[3]=t[3]-i[3],e[4]=t[4]-i[4],e[5]=t[5]-i[5],e[6]=t[6]-i[6],e[7]=t[7]-i[7],e[8]=t[8]-i[8],e}function w1(e,t,i){return e[0]=t[0]*i,e[1]=t[1]*i,e[2]=t[2]*i,e[3]=t[3]*i,e[4]=t[4]*i,e[5]=t[5]*i,e[6]=t[6]*i,e[7]=t[7]*i,e[8]=t[8]*i,e}function R1(e,t,i,r){return e[0]=t[0]+i[0]*r,e[1]=t[1]+i[1]*r,e[2]=t[2]+i[2]*r,e[3]=t[3]+i[3]*r,e[4]=t[4]+i[4]*r,e[5]=t[5]+i[5]*r,e[6]=t[6]+i[6]*r,e[7]=t[7]+i[7]*r,e[8]=t[8]+i[8]*r,e}function E1(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]&&e[4]===t[4]&&e[5]===t[5]&&e[6]===t[6]&&e[7]===t[7]&&e[8]===t[8]}function I1(e,t){var i=e[0],r=e[1],o=e[2],n=e[3],s=e[4],a=e[5],l=e[6],c=e[7],d=e[8],u=t[0],f=t[1],h=t[2],m=t[3],x=t[4],S=t[5],y=t[6],A=t[7],_=t[8];return Math.abs(i-u)<=J*Math.max(1,Math.abs(i),Math.abs(u))&&Math.abs(r-f)<=J*Math.max(1,Math.abs(r),Math.abs(f))&&Math.abs(o-h)<=J*Math.max(1,Math.abs(o),Math.abs(h))&&Math.abs(n-m)<=J*Math.max(1,Math.abs(n),Math.abs(m))&&Math.abs(s-x)<=J*Math.max(1,Math.abs(s),Math.abs(x))&&Math.abs(a-S)<=J*Math.max(1,Math.abs(a),Math.abs(S))&&Math.abs(l-y)<=J*Math.max(1,Math.abs(l),Math.abs(y))&&Math.abs(c-A)<=J*Math.max(1,Math.abs(c),Math.abs(A))&&Math.abs(d-_)<=J*Math.max(1,Math.abs(d),Math.abs(_))}var D1=ex,M1=tx;var pt={};Pr(pt,{add:()=>xP,adjoint:()=>L1,clone:()=>k1,copy:()=>N1,create:()=>F1,decompose:()=>rP,determinant:()=>W1,equals:()=>bP,exactEquals:()=>yP,frob:()=>gP,fromQuat:()=>sP,fromQuat2:()=>eP,fromRotation:()=>K1,fromRotationTranslation:()=>ox,fromRotationTranslationScale:()=>oP,fromRotationTranslationScaleOrigin:()=>nP,fromScaling:()=>q1,fromTranslation:()=>G1,fromValues:()=>B1,fromXRotation:()=>Z1,fromYRotation:()=>Q1,fromZRotation:()=>J1,frustum:()=>aP,getRotation:()=>iP,getScaling:()=>nx,getTranslation:()=>tP,identity:()=>ix,invert:()=>U1,lookAt:()=>hP,mul:()=>TP,multiply:()=>rx,multiplyScalar:()=>SP,multiplyScalarAndAdd:()=>vP,ortho:()=>uP,orthoNO:()=>ax,orthoZO:()=>fP,perspective:()=>lP,perspectiveFromFieldOfView:()=>dP,perspectiveNO:()=>sx,perspectiveZO:()=>cP,rotate:()=>$1,rotateX:()=>X1,rotateY:()=>j1,rotateZ:()=>Y1,scale:()=>H1,set:()=>O1,str:()=>mP,sub:()=>_P,subtract:()=>lx,targetTo:()=>pP,translate:()=>V1,transpose:()=>z1});function F1(){var e=new Me(16);return Me!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0),e[0]=1,e[5]=1,e[10]=1,e[15]=1,e}function k1(e){var t=new Me(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function N1(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}function B1(e,t,i,r,o,n,s,a,l,c,d,u,f,h,m,x){var S=new Me(16);return S[0]=e,S[1]=t,S[2]=i,S[3]=r,S[4]=o,S[5]=n,S[6]=s,S[7]=a,S[8]=l,S[9]=c,S[10]=d,S[11]=u,S[12]=f,S[13]=h,S[14]=m,S[15]=x,S}function O1(e,t,i,r,o,n,s,a,l,c,d,u,f,h,m,x,S){return e[0]=t,e[1]=i,e[2]=r,e[3]=o,e[4]=n,e[5]=s,e[6]=a,e[7]=l,e[8]=c,e[9]=d,e[10]=u,e[11]=f,e[12]=h,e[13]=m,e[14]=x,e[15]=S,e}function ix(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function z1(e,t){if(e===t){var i=t[1],r=t[2],o=t[3],n=t[6],s=t[7],a=t[11];e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=i,e[6]=t[9],e[7]=t[13],e[8]=r,e[9]=n,e[11]=t[14],e[12]=o,e[13]=s,e[14]=a}else e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=t[1],e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=t[2],e[9]=t[6],e[10]=t[10],e[11]=t[14],e[12]=t[3],e[13]=t[7],e[14]=t[11],e[15]=t[15];return e}function U1(e,t){var i=t[0],r=t[1],o=t[2],n=t[3],s=t[4],a=t[5],l=t[6],c=t[7],d=t[8],u=t[9],f=t[10],h=t[11],m=t[12],x=t[13],S=t[14],y=t[15],A=i*a-r*s,_=i*l-o*s,v=i*c-n*s,P=r*l-o*a,T=r*c-n*a,R=o*c-n*l,D=d*x-u*m,B=d*S-f*m,F=d*y-h*m,W=u*S-f*x,k=u*y-h*x,V=f*y-h*S,b=A*V-_*k+v*W+P*F-T*B+R*D;return b?(b=1/b,e[0]=(a*V-l*k+c*W)*b,e[1]=(o*k-r*V-n*W)*b,e[2]=(x*R-S*T+y*P)*b,e[3]=(f*T-u*R-h*P)*b,e[4]=(l*F-s*V-c*B)*b,e[5]=(i*V-o*F+n*B)*b,e[6]=(S*v-m*R-y*_)*b,e[7]=(d*R-f*v+h*_)*b,e[8]=(s*k-a*F+c*D)*b,e[9]=(r*F-i*k-n*D)*b,e[10]=(m*T-x*v+y*A)*b,e[11]=(u*v-d*T-h*A)*b,e[12]=(a*B-s*W-l*D)*b,e[13]=(i*W-r*B+o*D)*b,e[14]=(x*_-m*P-S*A)*b,e[15]=(d*P-u*_+f*A)*b,e):null}function L1(e,t){var i=t[0],r=t[1],o=t[2],n=t[3],s=t[4],a=t[5],l=t[6],c=t[7],d=t[8],u=t[9],f=t[10],h=t[11],m=t[12],x=t[13],S=t[14],y=t[15],A=i*a-r*s,_=i*l-o*s,v=i*c-n*s,P=r*l-o*a,T=r*c-n*a,R=o*c-n*l,D=d*x-u*m,B=d*S-f*m,F=d*y-h*m,W=u*S-f*x,k=u*y-h*x,V=f*y-h*S;return e[0]=a*V-l*k+c*W,e[1]=o*k-r*V-n*W,e[2]=x*R-S*T+y*P,e[3]=f*T-u*R-h*P,e[4]=l*F-s*V-c*B,e[5]=i*V-o*F+n*B,e[6]=S*v-m*R-y*_,e[7]=d*R-f*v+h*_,e[8]=s*k-a*F+c*D,e[9]=r*F-i*k-n*D,e[10]=m*T-x*v+y*A,e[11]=u*v-d*T-h*A,e[12]=a*B-s*W-l*D,e[13]=i*W-r*B+o*D,e[14]=x*_-m*P-S*A,e[15]=d*P-u*_+f*A,e}function W1(e){var t=e[0],i=e[1],r=e[2],o=e[3],n=e[4],s=e[5],a=e[6],l=e[7],c=e[8],d=e[9],u=e[10],f=e[11],h=e[12],m=e[13],x=e[14],S=e[15],y=t*s-i*n,A=t*a-r*n,_=i*a-r*s,v=c*m-d*h,P=c*x-u*h,T=d*x-u*m,R=t*T-i*P+r*v,D=n*T-s*P+a*v,B=c*_-d*A+u*y,F=h*_-m*A+x*y;return l*R-o*D+S*B-f*F}function rx(e,t,i){var r=t[0],o=t[1],n=t[2],s=t[3],a=t[4],l=t[5],c=t[6],d=t[7],u=t[8],f=t[9],h=t[10],m=t[11],x=t[12],S=t[13],y=t[14],A=t[15],_=i[0],v=i[1],P=i[2],T=i[3];return e[0]=_*r+v*a+P*u+T*x,e[1]=_*o+v*l+P*f+T*S,e[2]=_*n+v*c+P*h+T*y,e[3]=_*s+v*d+P*m+T*A,_=i[4],v=i[5],P=i[6],T=i[7],e[4]=_*r+v*a+P*u+T*x,e[5]=_*o+v*l+P*f+T*S,e[6]=_*n+v*c+P*h+T*y,e[7]=_*s+v*d+P*m+T*A,_=i[8],v=i[9],P=i[10],T=i[11],e[8]=_*r+v*a+P*u+T*x,e[9]=_*o+v*l+P*f+T*S,e[10]=_*n+v*c+P*h+T*y,e[11]=_*s+v*d+P*m+T*A,_=i[12],v=i[13],P=i[14],T=i[15],e[12]=_*r+v*a+P*u+T*x,e[13]=_*o+v*l+P*f+T*S,e[14]=_*n+v*c+P*h+T*y,e[15]=_*s+v*d+P*m+T*A,e}function V1(e,t,i){var r=i[0],o=i[1],n=i[2],s,a,l,c,d,u,f,h,m,x,S,y;return t===e?(e[12]=t[0]*r+t[4]*o+t[8]*n+t[12],e[13]=t[1]*r+t[5]*o+t[9]*n+t[13],e[14]=t[2]*r+t[6]*o+t[10]*n+t[14],e[15]=t[3]*r+t[7]*o+t[11]*n+t[15]):(s=t[0],a=t[1],l=t[2],c=t[3],d=t[4],u=t[5],f=t[6],h=t[7],m=t[8],x=t[9],S=t[10],y=t[11],e[0]=s,e[1]=a,e[2]=l,e[3]=c,e[4]=d,e[5]=u,e[6]=f,e[7]=h,e[8]=m,e[9]=x,e[10]=S,e[11]=y,e[12]=s*r+d*o+m*n+t[12],e[13]=a*r+u*o+x*n+t[13],e[14]=l*r+f*o+S*n+t[14],e[15]=c*r+h*o+y*n+t[15]),e}function H1(e,t,i){var r=i[0],o=i[1],n=i[2];return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e[4]=t[4]*o,e[5]=t[5]*o,e[6]=t[6]*o,e[7]=t[7]*o,e[8]=t[8]*n,e[9]=t[9]*n,e[10]=t[10]*n,e[11]=t[11]*n,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}function $1(e,t,i,r){var o=r[0],n=r[1],s=r[2],a=Math.sqrt(o*o+n*n+s*s),l,c,d,u,f,h,m,x,S,y,A,_,v,P,T,R,D,B,F,W,k,V,b,N;return a<J?null:(a=1/a,o*=a,n*=a,s*=a,l=Math.sin(i),c=Math.cos(i),d=1-c,u=t[0],f=t[1],h=t[2],m=t[3],x=t[4],S=t[5],y=t[6],A=t[7],_=t[8],v=t[9],P=t[10],T=t[11],R=o*o*d+c,D=n*o*d+s*l,B=s*o*d-n*l,F=o*n*d-s*l,W=n*n*d+c,k=s*n*d+o*l,V=o*s*d+n*l,b=n*s*d-o*l,N=s*s*d+c,e[0]=u*R+x*D+_*B,e[1]=f*R+S*D+v*B,e[2]=h*R+y*D+P*B,e[3]=m*R+A*D+T*B,e[4]=u*F+x*W+_*k,e[5]=f*F+S*W+v*k,e[6]=h*F+y*W+P*k,e[7]=m*F+A*W+T*k,e[8]=u*V+x*b+_*N,e[9]=f*V+S*b+v*N,e[10]=h*V+y*b+P*N,e[11]=m*V+A*b+T*N,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e)}function X1(e,t,i){var r=Math.sin(i),o=Math.cos(i),n=t[4],s=t[5],a=t[6],l=t[7],c=t[8],d=t[9],u=t[10],f=t[11];return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[4]=n*o+c*r,e[5]=s*o+d*r,e[6]=a*o+u*r,e[7]=l*o+f*r,e[8]=c*o-n*r,e[9]=d*o-s*r,e[10]=u*o-a*r,e[11]=f*o-l*r,e}function j1(e,t,i){var r=Math.sin(i),o=Math.cos(i),n=t[0],s=t[1],a=t[2],l=t[3],c=t[8],d=t[9],u=t[10],f=t[11];return t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=n*o-c*r,e[1]=s*o-d*r,e[2]=a*o-u*r,e[3]=l*o-f*r,e[8]=n*r+c*o,e[9]=s*r+d*o,e[10]=a*r+u*o,e[11]=l*r+f*o,e}function Y1(e,t,i){var r=Math.sin(i),o=Math.cos(i),n=t[0],s=t[1],a=t[2],l=t[3],c=t[4],d=t[5],u=t[6],f=t[7];return t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=n*o+c*r,e[1]=s*o+d*r,e[2]=a*o+u*r,e[3]=l*o+f*r,e[4]=c*o-n*r,e[5]=d*o-s*r,e[6]=u*o-a*r,e[7]=f*o-l*r,e}function G1(e,t){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=t[0],e[13]=t[1],e[14]=t[2],e[15]=1,e}function q1(e,t){return e[0]=t[0],e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=t[1],e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=t[2],e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function K1(e,t,i){var r=i[0],o=i[1],n=i[2],s=Math.sqrt(r*r+o*o+n*n),a,l,c;return s<J?null:(s=1/s,r*=s,o*=s,n*=s,a=Math.sin(t),l=Math.cos(t),c=1-l,e[0]=r*r*c+l,e[1]=o*r*c+n*a,e[2]=n*r*c-o*a,e[3]=0,e[4]=r*o*c-n*a,e[5]=o*o*c+l,e[6]=n*o*c+r*a,e[7]=0,e[8]=r*n*c+o*a,e[9]=o*n*c-r*a,e[10]=n*n*c+l,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e)}function Z1(e,t){var i=Math.sin(t),r=Math.cos(t);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=r,e[6]=i,e[7]=0,e[8]=0,e[9]=-i,e[10]=r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function Q1(e,t){var i=Math.sin(t),r=Math.cos(t);return e[0]=r,e[1]=0,e[2]=-i,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=i,e[9]=0,e[10]=r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function J1(e,t){var i=Math.sin(t),r=Math.cos(t);return e[0]=r,e[1]=i,e[2]=0,e[3]=0,e[4]=-i,e[5]=r,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function ox(e,t,i){var r=t[0],o=t[1],n=t[2],s=t[3],a=r+r,l=o+o,c=n+n,d=r*a,u=r*l,f=r*c,h=o*l,m=o*c,x=n*c,S=s*a,y=s*l,A=s*c;return e[0]=1-(h+x),e[1]=u+A,e[2]=f-y,e[3]=0,e[4]=u-A,e[5]=1-(d+x),e[6]=m+S,e[7]=0,e[8]=f+y,e[9]=m-S,e[10]=1-(d+h),e[11]=0,e[12]=i[0],e[13]=i[1],e[14]=i[2],e[15]=1,e}function eP(e,t){var i=new Me(3),r=-t[0],o=-t[1],n=-t[2],s=t[3],a=t[4],l=t[5],c=t[6],d=t[7],u=r*r+o*o+n*n+s*s;return u>0?(i[0]=(a*s+d*r+l*n-c*o)*2/u,i[1]=(l*s+d*o+c*r-a*n)*2/u,i[2]=(c*s+d*n+a*o-l*r)*2/u):(i[0]=(a*s+d*r+l*n-c*o)*2,i[1]=(l*s+d*o+c*r-a*n)*2,i[2]=(c*s+d*n+a*o-l*r)*2),ox(e,t,i),e}function tP(e,t){return e[0]=t[12],e[1]=t[13],e[2]=t[14],e}function nx(e,t){var i=t[0],r=t[1],o=t[2],n=t[4],s=t[5],a=t[6],l=t[8],c=t[9],d=t[10];return e[0]=Math.sqrt(i*i+r*r+o*o),e[1]=Math.sqrt(n*n+s*s+a*a),e[2]=Math.sqrt(l*l+c*c+d*d),e}function iP(e,t){var i=new Me(3);nx(i,t);var r=1/i[0],o=1/i[1],n=1/i[2],s=t[0]*r,a=t[1]*o,l=t[2]*n,c=t[4]*r,d=t[5]*o,u=t[6]*n,f=t[8]*r,h=t[9]*o,m=t[10]*n,x=s+d+m,S=0;return x>0?(S=Math.sqrt(x+1)*2,e[3]=.25*S,e[0]=(u-h)/S,e[1]=(f-l)/S,e[2]=(a-c)/S):s>d&&s>m?(S=Math.sqrt(1+s-d-m)*2,e[3]=(u-h)/S,e[0]=.25*S,e[1]=(a+c)/S,e[2]=(f+l)/S):d>m?(S=Math.sqrt(1+d-s-m)*2,e[3]=(f-l)/S,e[0]=(a+c)/S,e[1]=.25*S,e[2]=(u+h)/S):(S=Math.sqrt(1+m-s-d)*2,e[3]=(a-c)/S,e[0]=(f+l)/S,e[1]=(u+h)/S,e[2]=.25*S),e}function rP(e,t,i,r){t[0]=r[12],t[1]=r[13],t[2]=r[14];var o=r[0],n=r[1],s=r[2],a=r[4],l=r[5],c=r[6],d=r[8],u=r[9],f=r[10];i[0]=Math.sqrt(o*o+n*n+s*s),i[1]=Math.sqrt(a*a+l*l+c*c),i[2]=Math.sqrt(d*d+u*u+f*f);var h=1/i[0],m=1/i[1],x=1/i[2],S=o*h,y=n*m,A=s*x,_=a*h,v=l*m,P=c*x,T=d*h,R=u*m,D=f*x,B=S+v+D,F=0;return B>0?(F=Math.sqrt(B+1)*2,e[3]=.25*F,e[0]=(P-R)/F,e[1]=(T-A)/F,e[2]=(y-_)/F):S>v&&S>D?(F=Math.sqrt(1+S-v-D)*2,e[3]=(P-R)/F,e[0]=.25*F,e[1]=(y+_)/F,e[2]=(T+A)/F):v>D?(F=Math.sqrt(1+v-S-D)*2,e[3]=(T-A)/F,e[0]=(y+_)/F,e[1]=.25*F,e[2]=(P+R)/F):(F=Math.sqrt(1+D-S-v)*2,e[3]=(y-_)/F,e[0]=(T+A)/F,e[1]=(P+R)/F,e[2]=.25*F),e}function oP(e,t,i,r){var o=t[0],n=t[1],s=t[2],a=t[3],l=o+o,c=n+n,d=s+s,u=o*l,f=o*c,h=o*d,m=n*c,x=n*d,S=s*d,y=a*l,A=a*c,_=a*d,v=r[0],P=r[1],T=r[2];return e[0]=(1-(m+S))*v,e[1]=(f+_)*v,e[2]=(h-A)*v,e[3]=0,e[4]=(f-_)*P,e[5]=(1-(u+S))*P,e[6]=(x+y)*P,e[7]=0,e[8]=(h+A)*T,e[9]=(x-y)*T,e[10]=(1-(u+m))*T,e[11]=0,e[12]=i[0],e[13]=i[1],e[14]=i[2],e[15]=1,e}function nP(e,t,i,r,o){var n=t[0],s=t[1],a=t[2],l=t[3],c=n+n,d=s+s,u=a+a,f=n*c,h=n*d,m=n*u,x=s*d,S=s*u,y=a*u,A=l*c,_=l*d,v=l*u,P=r[0],T=r[1],R=r[2],D=o[0],B=o[1],F=o[2],W=(1-(x+y))*P,k=(h+v)*P,V=(m-_)*P,b=(h-v)*T,N=(1-(f+y))*T,I=(S+A)*T,L=(m+_)*R,$=(S-A)*R,G=(1-(f+x))*R;return e[0]=W,e[1]=k,e[2]=V,e[3]=0,e[4]=b,e[5]=N,e[6]=I,e[7]=0,e[8]=L,e[9]=$,e[10]=G,e[11]=0,e[12]=i[0]+D-(W*D+b*B+L*F),e[13]=i[1]+B-(k*D+N*B+$*F),e[14]=i[2]+F-(V*D+I*B+G*F),e[15]=1,e}function sP(e,t){var i=t[0],r=t[1],o=t[2],n=t[3],s=i+i,a=r+r,l=o+o,c=i*s,d=r*s,u=r*a,f=o*s,h=o*a,m=o*l,x=n*s,S=n*a,y=n*l;return e[0]=1-u-m,e[1]=d+y,e[2]=f-S,e[3]=0,e[4]=d-y,e[5]=1-c-m,e[6]=h+x,e[7]=0,e[8]=f+S,e[9]=h-x,e[10]=1-c-u,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function aP(e,t,i,r,o,n,s){var a=1/(i-t),l=1/(o-r),c=1/(n-s);return e[0]=n*2*a,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=n*2*l,e[6]=0,e[7]=0,e[8]=(i+t)*a,e[9]=(o+r)*l,e[10]=(s+n)*c,e[11]=-1,e[12]=0,e[13]=0,e[14]=s*n*2*c,e[15]=0,e}function sx(e,t,i,r,o){var n=1/Math.tan(t/2);if(e[0]=n/i,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=n,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=-1,e[12]=0,e[13]=0,e[15]=0,o!=null&&o!==1/0){var s=1/(r-o);e[10]=(o+r)*s,e[14]=2*o*r*s}else e[10]=-1,e[14]=-2*r;return e}var lP=sx;function cP(e,t,i,r,o){var n=1/Math.tan(t/2);if(e[0]=n/i,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=n,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=-1,e[12]=0,e[13]=0,e[15]=0,o!=null&&o!==1/0){var s=1/(r-o);e[10]=o*s,e[14]=o*r*s}else e[10]=-1,e[14]=-r;return e}function dP(e,t,i,r){var o=Math.tan(t.upDegrees*Math.PI/180),n=Math.tan(t.downDegrees*Math.PI/180),s=Math.tan(t.leftDegrees*Math.PI/180),a=Math.tan(t.rightDegrees*Math.PI/180),l=2/(s+a),c=2/(o+n);return e[0]=l,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=c,e[6]=0,e[7]=0,e[8]=-((s-a)*l*.5),e[9]=(o-n)*c*.5,e[10]=r/(i-r),e[11]=-1,e[12]=0,e[13]=0,e[14]=r*i/(i-r),e[15]=0,e}function ax(e,t,i,r,o,n,s){var a=1/(t-i),l=1/(r-o),c=1/(n-s);return e[0]=-2*a,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*l,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=2*c,e[11]=0,e[12]=(t+i)*a,e[13]=(o+r)*l,e[14]=(s+n)*c,e[15]=1,e}var uP=ax;function fP(e,t,i,r,o,n,s){var a=1/(t-i),l=1/(r-o),c=1/(n-s);return e[0]=-2*a,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*l,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=c,e[11]=0,e[12]=(t+i)*a,e[13]=(o+r)*l,e[14]=n*c,e[15]=1,e}function hP(e,t,i,r){var o,n,s,a,l,c,d,u,f,h,m=t[0],x=t[1],S=t[2],y=r[0],A=r[1],_=r[2],v=i[0],P=i[1],T=i[2];return Math.abs(m-v)<J&&Math.abs(x-P)<J&&Math.abs(S-T)<J?ix(e):(d=m-v,u=x-P,f=S-T,h=1/Math.sqrt(d*d+u*u+f*f),d*=h,u*=h,f*=h,o=A*f-_*u,n=_*d-y*f,s=y*u-A*d,h=Math.sqrt(o*o+n*n+s*s),h?(h=1/h,o*=h,n*=h,s*=h):(o=0,n=0,s=0),a=u*s-f*n,l=f*o-d*s,c=d*n-u*o,h=Math.sqrt(a*a+l*l+c*c),h?(h=1/h,a*=h,l*=h,c*=h):(a=0,l=0,c=0),e[0]=o,e[1]=a,e[2]=d,e[3]=0,e[4]=n,e[5]=l,e[6]=u,e[7]=0,e[8]=s,e[9]=c,e[10]=f,e[11]=0,e[12]=-(o*m+n*x+s*S),e[13]=-(a*m+l*x+c*S),e[14]=-(d*m+u*x+f*S),e[15]=1,e)}function pP(e,t,i,r){var o=t[0],n=t[1],s=t[2],a=r[0],l=r[1],c=r[2],d=o-i[0],u=n-i[1],f=s-i[2],h=d*d+u*u+f*f;h>0&&(h=1/Math.sqrt(h),d*=h,u*=h,f*=h);var m=l*f-c*u,x=c*d-a*f,S=a*u-l*d;return h=m*m+x*x+S*S,h>0&&(h=1/Math.sqrt(h),m*=h,x*=h,S*=h),e[0]=m,e[1]=x,e[2]=S,e[3]=0,e[4]=u*S-f*x,e[5]=f*m-d*S,e[6]=d*x-u*m,e[7]=0,e[8]=d,e[9]=u,e[10]=f,e[11]=0,e[12]=o,e[13]=n,e[14]=s,e[15]=1,e}function mP(e){return"mat4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+", "+e[6]+", "+e[7]+", "+e[8]+", "+e[9]+", "+e[10]+", "+e[11]+", "+e[12]+", "+e[13]+", "+e[14]+", "+e[15]+")"}function gP(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3]+e[4]*e[4]+e[5]*e[5]+e[6]*e[6]+e[7]*e[7]+e[8]*e[8]+e[9]*e[9]+e[10]*e[10]+e[11]*e[11]+e[12]*e[12]+e[13]*e[13]+e[14]*e[14]+e[15]*e[15])}function xP(e,t,i){return e[0]=t[0]+i[0],e[1]=t[1]+i[1],e[2]=t[2]+i[2],e[3]=t[3]+i[3],e[4]=t[4]+i[4],e[5]=t[5]+i[5],e[6]=t[6]+i[6],e[7]=t[7]+i[7],e[8]=t[8]+i[8],e[9]=t[9]+i[9],e[10]=t[10]+i[10],e[11]=t[11]+i[11],e[12]=t[12]+i[12],e[13]=t[13]+i[13],e[14]=t[14]+i[14],e[15]=t[15]+i[15],e}function lx(e,t,i){return e[0]=t[0]-i[0],e[1]=t[1]-i[1],e[2]=t[2]-i[2],e[3]=t[3]-i[3],e[4]=t[4]-i[4],e[5]=t[5]-i[5],e[6]=t[6]-i[6],e[7]=t[7]-i[7],e[8]=t[8]-i[8],e[9]=t[9]-i[9],e[10]=t[10]-i[10],e[11]=t[11]-i[11],e[12]=t[12]-i[12],e[13]=t[13]-i[13],e[14]=t[14]-i[14],e[15]=t[15]-i[15],e}function SP(e,t,i){return e[0]=t[0]*i,e[1]=t[1]*i,e[2]=t[2]*i,e[3]=t[3]*i,e[4]=t[4]*i,e[5]=t[5]*i,e[6]=t[6]*i,e[7]=t[7]*i,e[8]=t[8]*i,e[9]=t[9]*i,e[10]=t[10]*i,e[11]=t[11]*i,e[12]=t[12]*i,e[13]=t[13]*i,e[14]=t[14]*i,e[15]=t[15]*i,e}function vP(e,t,i,r){return e[0]=t[0]+i[0]*r,e[1]=t[1]+i[1]*r,e[2]=t[2]+i[2]*r,e[3]=t[3]+i[3]*r,e[4]=t[4]+i[4]*r,e[5]=t[5]+i[5]*r,e[6]=t[6]+i[6]*r,e[7]=t[7]+i[7]*r,e[8]=t[8]+i[8]*r,e[9]=t[9]+i[9]*r,e[10]=t[10]+i[10]*r,e[11]=t[11]+i[11]*r,e[12]=t[12]+i[12]*r,e[13]=t[13]+i[13]*r,e[14]=t[14]+i[14]*r,e[15]=t[15]+i[15]*r,e}function yP(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]&&e[4]===t[4]&&e[5]===t[5]&&e[6]===t[6]&&e[7]===t[7]&&e[8]===t[8]&&e[9]===t[9]&&e[10]===t[10]&&e[11]===t[11]&&e[12]===t[12]&&e[13]===t[13]&&e[14]===t[14]&&e[15]===t[15]}function bP(e,t){var i=e[0],r=e[1],o=e[2],n=e[3],s=e[4],a=e[5],l=e[6],c=e[7],d=e[8],u=e[9],f=e[10],h=e[11],m=e[12],x=e[13],S=e[14],y=e[15],A=t[0],_=t[1],v=t[2],P=t[3],T=t[4],R=t[5],D=t[6],B=t[7],F=t[8],W=t[9],k=t[10],V=t[11],b=t[12],N=t[13],I=t[14],L=t[15];return Math.abs(i-A)<=J*Math.max(1,Math.abs(i),Math.abs(A))&&Math.abs(r-_)<=J*Math.max(1,Math.abs(r),Math.abs(_))&&Math.abs(o-v)<=J*Math.max(1,Math.abs(o),Math.abs(v))&&Math.abs(n-P)<=J*Math.max(1,Math.abs(n),Math.abs(P))&&Math.abs(s-T)<=J*Math.max(1,Math.abs(s),Math.abs(T))&&Math.abs(a-R)<=J*Math.max(1,Math.abs(a),Math.abs(R))&&Math.abs(l-D)<=J*Math.max(1,Math.abs(l),Math.abs(D))&&Math.abs(c-B)<=J*Math.max(1,Math.abs(c),Math.abs(B))&&Math.abs(d-F)<=J*Math.max(1,Math.abs(d),Math.abs(F))&&Math.abs(u-W)<=J*Math.max(1,Math.abs(u),Math.abs(W))&&Math.abs(f-k)<=J*Math.max(1,Math.abs(f),Math.abs(k))&&Math.abs(h-V)<=J*Math.max(1,Math.abs(h),Math.abs(V))&&Math.abs(m-b)<=J*Math.max(1,Math.abs(m),Math.abs(b))&&Math.abs(x-N)<=J*Math.max(1,Math.abs(x),Math.abs(N))&&Math.abs(S-I)<=J*Math.max(1,Math.abs(S),Math.abs(I))&&Math.abs(y-L)<=J*Math.max(1,Math.abs(y),Math.abs(L))}var TP=rx,_P=lx;var Z={};Pr(Z,{add:()=>RP,angle:()=>ZP,bezier:()=>HP,ceil:()=>EP,clone:()=>PP,copy:()=>AP,create:()=>cx,cross:()=>UP,dist:()=>n3,distance:()=>px,div:()=>o3,divide:()=>hx,dot:()=>md,equals:()=>t3,exactEquals:()=>e3,floor:()=>IP,forEach:()=>c3,fromValues:()=>CP,hermite:()=>VP,inverse:()=>OP,len:()=>a3,length:()=>dx,lerp:()=>LP,max:()=>MP,min:()=>DP,mul:()=>r3,multiply:()=>fx,negate:()=>BP,normalize:()=>zP,random:()=>$P,rotateX:()=>GP,rotateY:()=>qP,rotateZ:()=>KP,round:()=>FP,scale:()=>kP,scaleAndAdd:()=>NP,set:()=>wP,slerp:()=>WP,sqrDist:()=>s3,sqrLen:()=>l3,squaredDistance:()=>mx,squaredLength:()=>gx,str:()=>JP,sub:()=>i3,subtract:()=>ux,transformMat3:()=>jP,transformMat4:()=>XP,transformQuat:()=>YP,zero:()=>QP});function cx(){var e=new Me(3);return Me!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0),e}function PP(e){var t=new Me(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function dx(e){var t=e[0],i=e[1],r=e[2];return Math.sqrt(t*t+i*i+r*r)}function CP(e,t,i){var r=new Me(3);return r[0]=e,r[1]=t,r[2]=i,r}function AP(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}function wP(e,t,i,r){return e[0]=t,e[1]=i,e[2]=r,e}function RP(e,t,i){return e[0]=t[0]+i[0],e[1]=t[1]+i[1],e[2]=t[2]+i[2],e}function ux(e,t,i){return e[0]=t[0]-i[0],e[1]=t[1]-i[1],e[2]=t[2]-i[2],e}function fx(e,t,i){return e[0]=t[0]*i[0],e[1]=t[1]*i[1],e[2]=t[2]*i[2],e}function hx(e,t,i){return e[0]=t[0]/i[0],e[1]=t[1]/i[1],e[2]=t[2]/i[2],e}function EP(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e}function IP(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e}function DP(e,t,i){return e[0]=Math.min(t[0],i[0]),e[1]=Math.min(t[1],i[1]),e[2]=Math.min(t[2],i[2]),e}function MP(e,t,i){return e[0]=Math.max(t[0],i[0]),e[1]=Math.max(t[1],i[1]),e[2]=Math.max(t[2],i[2]),e}function FP(e,t){return e[0]=oa(t[0]),e[1]=oa(t[1]),e[2]=oa(t[2]),e}function kP(e,t,i){return e[0]=t[0]*i,e[1]=t[1]*i,e[2]=t[2]*i,e}function NP(e,t,i,r){return e[0]=t[0]+i[0]*r,e[1]=t[1]+i[1]*r,e[2]=t[2]+i[2]*r,e}function px(e,t){var i=t[0]-e[0],r=t[1]-e[1],o=t[2]-e[2];return Math.sqrt(i*i+r*r+o*o)}function mx(e,t){var i=t[0]-e[0],r=t[1]-e[1],o=t[2]-e[2];return i*i+r*r+o*o}function gx(e){var t=e[0],i=e[1],r=e[2];return t*t+i*i+r*r}function BP(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e}function OP(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e}function zP(e,t){var i=t[0],r=t[1],o=t[2],n=i*i+r*r+o*o;return n>0&&(n=1/Math.sqrt(n)),e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e}function md(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function UP(e,t,i){var r=t[0],o=t[1],n=t[2],s=i[0],a=i[1],l=i[2];return e[0]=o*l-n*a,e[1]=n*s-r*l,e[2]=r*a-o*s,e}function LP(e,t,i,r){var o=t[0],n=t[1],s=t[2];return e[0]=o+r*(i[0]-o),e[1]=n+r*(i[1]-n),e[2]=s+r*(i[2]-s),e}function WP(e,t,i,r){var o=Math.acos(Math.min(Math.max(md(t,i),-1),1)),n=Math.sin(o),s=Math.sin((1-r)*o)/n,a=Math.sin(r*o)/n;return e[0]=s*t[0]+a*i[0],e[1]=s*t[1]+a*i[1],e[2]=s*t[2]+a*i[2],e}function VP(e,t,i,r,o,n){var s=n*n,a=s*(2*n-3)+1,l=s*(n-2)+n,c=s*(n-1),d=s*(3-2*n);return e[0]=t[0]*a+i[0]*l+r[0]*c+o[0]*d,e[1]=t[1]*a+i[1]*l+r[1]*c+o[1]*d,e[2]=t[2]*a+i[2]*l+r[2]*c+o[2]*d,e}function HP(e,t,i,r,o,n){var s=1-n,a=s*s,l=n*n,c=a*s,d=3*n*a,u=3*l*s,f=l*n;return e[0]=t[0]*c+i[0]*d+r[0]*u+o[0]*f,e[1]=t[1]*c+i[1]*d+r[1]*u+o[1]*f,e[2]=t[2]*c+i[2]*d+r[2]*u+o[2]*f,e}function $P(e,t){t=t===void 0?1:t;var i=hd()*2*Math.PI,r=hd()*2-1,o=Math.sqrt(1-r*r)*t;return e[0]=Math.cos(i)*o,e[1]=Math.sin(i)*o,e[2]=r*t,e}function XP(e,t,i){var r=t[0],o=t[1],n=t[2],s=i[3]*r+i[7]*o+i[11]*n+i[15];return s=s||1,e[0]=(i[0]*r+i[4]*o+i[8]*n+i[12])/s,e[1]=(i[1]*r+i[5]*o+i[9]*n+i[13])/s,e[2]=(i[2]*r+i[6]*o+i[10]*n+i[14])/s,e}function jP(e,t,i){var r=t[0],o=t[1],n=t[2];return e[0]=r*i[0]+o*i[3]+n*i[6],e[1]=r*i[1]+o*i[4]+n*i[7],e[2]=r*i[2]+o*i[5]+n*i[8],e}function YP(e,t,i){var r=i[0],o=i[1],n=i[2],s=i[3],a=t[0],l=t[1],c=t[2],d=o*c-n*l,u=n*a-r*c,f=r*l-o*a;return d=d+d,u=u+u,f=f+f,e[0]=a+s*d+o*f-n*u,e[1]=l+s*u+n*d-r*f,e[2]=c+s*f+r*u-o*d,e}function GP(e,t,i,r){var o=[],n=[];return o[0]=t[0]-i[0],o[1]=t[1]-i[1],o[2]=t[2]-i[2],n[0]=o[0],n[1]=o[1]*Math.cos(r)-o[2]*Math.sin(r),n[2]=o[1]*Math.sin(r)+o[2]*Math.cos(r),e[0]=n[0]+i[0],e[1]=n[1]+i[1],e[2]=n[2]+i[2],e}function qP(e,t,i,r){var o=[],n=[];return o[0]=t[0]-i[0],o[1]=t[1]-i[1],o[2]=t[2]-i[2],n[0]=o[2]*Math.sin(r)+o[0]*Math.cos(r),n[1]=o[1],n[2]=o[2]*Math.cos(r)-o[0]*Math.sin(r),e[0]=n[0]+i[0],e[1]=n[1]+i[1],e[2]=n[2]+i[2],e}function KP(e,t,i,r){var o=[],n=[];return o[0]=t[0]-i[0],o[1]=t[1]-i[1],o[2]=t[2]-i[2],n[0]=o[0]*Math.cos(r)-o[1]*Math.sin(r),n[1]=o[0]*Math.sin(r)+o[1]*Math.cos(r),n[2]=o[2],e[0]=n[0]+i[0],e[1]=n[1]+i[1],e[2]=n[2]+i[2],e}function ZP(e,t){var i=e[0],r=e[1],o=e[2],n=t[0],s=t[1],a=t[2],l=Math.sqrt((i*i+r*r+o*o)*(n*n+s*s+a*a)),c=l&&md(e,t)/l;return Math.acos(Math.min(Math.max(c,-1),1))}function QP(e){return e[0]=0,e[1]=0,e[2]=0,e}function JP(e){return"vec3("+e[0]+", "+e[1]+", "+e[2]+")"}function e3(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]}function t3(e,t){var i=e[0],r=e[1],o=e[2],n=t[0],s=t[1],a=t[2];return Math.abs(i-n)<=J*Math.max(1,Math.abs(i),Math.abs(n))&&Math.abs(r-s)<=J*Math.max(1,Math.abs(r),Math.abs(s))&&Math.abs(o-a)<=J*Math.max(1,Math.abs(o),Math.abs(a))}var i3=ux,r3=fx,o3=hx,n3=px,s3=mx,a3=dx,l3=gx,c3=(function(){var e=cx();return function(t,i,r,o,n,s){var a,l;for(i||(i=3),r||(r=0),o?l=Math.min(o*i+r,t.length):l=t.length,a=r;a<l;a+=i)e[0]=t[a],e[1]=t[a+1],e[2]=t[a+2],n(e,e,s),t[a]=e[0],t[a+1]=e[1],t[a+2]=e[2];return t}})();var Ox=Uu(Fx(),1);function kx(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,x3(r.key),r)}}function _d(e,t,i){return t&&kx(e.prototype,t),i&&kx(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}function zx(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Td(e,t)}function Td(e,t){return Td=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},Td(e,t)}function g3(e,t){if(typeof e!="object"||e===null)return e;var i=e[Symbol.toPrimitive];if(i!==void 0){var r=i.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function x3(e){var t=g3(e,"string");return typeof t=="symbol"?t:String(t)}var sa=(function(){function e(){}var t=e.prototype;return t._seed=function(r,o){if(r===(r||0))return r;for(var n=""+r,s=0,a=0;a<n.length;++a)s^=n.charCodeAt(a)|0;return s},e})(),Nx=(function(e){zx(t,e);function t(r,o){var n;return n=e.call(this)||this,n._rng=void 0,n.seed(r,o),n}var i=t.prototype;return i.next=function(){return this._rng()},i.seed=function(o,n){this._rng=o},i.clone=function(o,n){return new t(this._rng,n)},_d(t,[{key:"name",get:function(){return"function"}}]),t})(sa),Bx=(function(){var e=[].slice.call(arguments),t=e,i=t[0],r=i===void 0?"default":i;switch(typeof r){case"object":if(r instanceof sa)return r;break;case"function":return new Nx(r);default:return new Nx(Ox.default.apply(void 0,e))}throw new Error('invalid RNG "'+r+'"')}),S3=(function(e,t,i){return t===void 0&&(t=0),i===void 0&&(i=1),function(){return e.next()*(i-t)+t}});function mt(e){return new v3(e)}var v3=function(t){var i=this;this.n=void 0,this.isInt=function(){if(Number.isInteger(i.n))return i;throw new Error("Expected number to be an integer, got "+i.n)},this.isPositive=function(){if(i.n>0)return i;throw new Error("Expected number to be positive, got "+i.n)},this.lessThan=function(r){if(i.n<r)return i;throw new Error("Expected number to be less than "+r+", got "+i.n)},this.greaterThanOrEqual=function(r){if(i.n>=r)return i;throw new Error("Expected number to be greater than or equal to "+r+", got "+i.n)},this.greaterThan=function(r){if(i.n>r)return i;throw new Error("Expected number to be greater than "+r+", got "+i.n)},this.n=t},y3=(function(e,t,i){return t===void 0&&(t=0),i===void 0&&(i=1),i===void 0&&(i=t===void 0?1:t,t=0),mt(t).isInt(),mt(i).isInt(),function(){return Math.floor(e.next()*(i-t+1)+t)}}),b3=(function(e){return function(){return e.next()>=.5}}),T3=(function(e,t,i){return t===void 0&&(t=0),i===void 0&&(i=1),function(){var r,o,n;do r=e.next()*2-1,o=e.next()*2-1,n=r*r+o*o;while(!n||n>1);return t+i*o*Math.sqrt(-2*Math.log(n)/n)}}),_3=(function(e,t,i){t===void 0&&(t=0),i===void 0&&(i=1);var r=e.normal(t,i);return function(){return Math.exp(r())}}),P3=(function(e,t){return t===void 0&&(t=.5),mt(t).greaterThanOrEqual(0).lessThan(1),function(){return Math.floor(e.next()+t)}}),C3=(function(e,t,i){return t===void 0&&(t=1),i===void 0&&(i=.5),mt(t).isInt().isPositive(),mt(i).greaterThanOrEqual(0).lessThan(1),function(){for(var r=0,o=0;r++<t;)e.next()<i&&o++;return o}}),A3=(function(e,t){t===void 0&&(t=.5),mt(t).greaterThan(0).lessThan(1);var i=1/Math.log(1-t);return function(){return Math.floor(1+Math.log(e.next())*i)}}),w3=[0,0,.6931471805599453,1.791759469228055,3.1780538303479458,4.787491742782046,6.579251212010101,8.525161361065415,10.60460290274525,12.801827480081469],R3=function(t){return w3[t]},E3=.9189385332046727,I3=(function(e,t){if(t===void 0&&(t=1),mt(t).isPositive(),t<10){var i=Math.exp(-t);return function(){for(var l=i,c=0,d=e.next();d>l;)d=d-l,l=t*l/++c;return c}}else{var r=Math.sqrt(t),o=.931+2.53*r,n=-.059+.02483*o,s=1.1239+1.1328/(o-3.4),a=.9277-3.6224/(o-2);return function(){for(;;){var l=void 0,c=e.next();if(c<=.86*a)return l=c/a-.43,Math.floor((2*n/(.5-Math.abs(l))+o)*l+t+.445);c>=a?l=e.next()-.5:(l=c/a-.93,l=(l<0?-.5:.5)-l,c=e.next()*a);var d=.5-Math.abs(l);if(!(d<.013&&c>d)){var u=Math.floor((2*n/d+o)*l+t+.445);if(c=c*s/(n/(d*d)+o),u>=10){var f=(u+.5)*Math.log(t/u)-t-E3+u-(.08333333333333333-(.002777777777777778-1/(1260*u*u))/(u*u))/u;if(Math.log(c*r)<=f)return u}else if(u>=0){var h,m=(h=R3(u))!=null?h:0;if(Math.log(c)<=u*Math.log(t)-t-m)return u}}}}}}),D3=(function(e,t){return t===void 0&&(t=1),mt(t).isPositive(),function(){return-Math.log(1-e.next())/t}}),M3=(function(e,t){return t===void 0&&(t=1),mt(t).isInt().greaterThanOrEqual(0),function(){for(var i=0,r=0;r<t;++r)i+=e.next();return i}}),F3=(function(e,t){t===void 0&&(t=1),mt(t).isInt().isPositive();var i=e.irwinHall(t);return function(){return i()/t}}),k3=(function(e,t){t===void 0&&(t=1),mt(t).greaterThanOrEqual(0);var i=1/t;return function(){return 1/Math.pow(1-e.next(),i)}}),N3=(function(e){zx(t,e);function t(){return e.apply(this,arguments)||this}var i=t.prototype;return i.next=function(){return Math.random()},i.seed=function(o,n){},i.clone=function(){return new t},_d(t,[{key:"name",get:function(){return"default"}}]),t})(sa),Pd=(function(){function e(i){var r=this;this._rng=void 0,this._patch=void 0,this._cache={},this.next=function(){return r._rng.next()},this.float=function(o,n){return r.uniform(o,n)()},this.int=function(o,n){return r.uniformInt(o,n)()},this.integer=function(o,n){return r.uniformInt(o,n)()},this.bool=function(){return r.uniformBoolean()()},this.boolean=function(){return r.uniformBoolean()()},this.uniform=function(o,n){return r._memoize("uniform",S3,o,n)},this.uniformInt=function(o,n){return r._memoize("uniformInt",y3,o,n)},this.uniformBoolean=function(){return r._memoize("uniformBoolean",b3)},this.normal=function(o,n){return T3(r,o,n)},this.logNormal=function(o,n){return _3(r,o,n)},this.bernoulli=function(o){return P3(r,o)},this.binomial=function(o,n){return C3(r,o,n)},this.geometric=function(o){return A3(r,o)},this.poisson=function(o){return I3(r,o)},this.exponential=function(o){return D3(r,o)},this.irwinHall=function(o){return M3(r,o)},this.bates=function(o){return F3(r,o)},this.pareto=function(o){return k3(r,o)},i&&i instanceof sa?this.use(i):this.use(new N3),this._cache={}}var t=e.prototype;return t.clone=function(){var r=[].slice.call(arguments);return r.length?new e(Bx.apply(void 0,r)):new e(this.rng.clone())},t.use=function(){this._rng=Bx.apply(void 0,[].slice.call(arguments))},t.patch=function(){if(this._patch)throw new Error("Math.random already patched");this._patch=Math.random,Math.random=this.uniform()},t.unpatch=function(){this._patch&&(Math.random=this._patch,delete this._patch)},t.choice=function(r){if(!Array.isArray(r))throw new Error("Random.choice expected input to be an array, got "+typeof r);var o=r?.length;if(o>0){var n=this.uniformInt(0,o-1)();return r[n]}else return},t._memoize=function(r,o){var n=[].slice.call(arguments,2),s=""+n.join(";"),a=this._cache[r];return(a===void 0||a.key!==s)&&(a={key:s,distribution:o.apply(void 0,[this].concat(n))},this._cache[r]=a),a.distribution},_d(e,[{key:"rng",get:function(){return this._rng}}]),e})(),G4=new Pd;te();function Ri(e,t){if(!e){let i=new Error(t||"shadertools: assertion failed.");throw Error.captureStackTrace?.(i,Ri),i}}var Cd={number:{type:"number",validate(e,t){return Number.isFinite(e)&&typeof t=="object"&&(t.max===void 0||e<=t.max)&&(t.min===void 0||e>=t.min)}},array:{type:"array",validate(e,t){return Array.isArray(e)||ArrayBuffer.isView(e)}}};function Lx(e){let t={};for(let[i,r]of Object.entries(e))t[i]=B3(r);return t}function B3(e){let t=Ux(e);if(t!=="object")return{value:e,...Cd[t],type:t};if(typeof e=="object")return e?e.type!==void 0?{...e,...Cd[e.type],type:e.type}:e.value===void 0?{type:"object",value:e}:(t=Ux(e.value),{...e,...Cd[t],type:t}):{type:"object",value:null};throw new Error("props")}function Ux(e){return Array.isArray(e)||ArrayBuffer.isView(e)?"array":typeof e}var Wx=`#ifdef MODULE_LOGDEPTH
  logdepth_adjustPosition(gl_Position);
#endif
`,Vx=`#ifdef MODULE_MATERIAL
  fragColor = material_filterColor(fragColor);
#endif

#ifdef MODULE_LIGHTING
  fragColor = lighting_filterColor(fragColor);
#endif

#ifdef MODULE_FOG
  fragColor = fog_filterColor(fragColor);
#endif

#ifdef MODULE_PICKING
  fragColor = picking_filterHighlightColor(fragColor);
  fragColor = picking_filterPickingColor(fragColor);
#endif

#ifdef MODULE_LOGDEPTH
  logdepth_setFragDepth();
#endif
`;var O3={vertex:Wx,fragment:Vx},Hx=/void\s+main\s*\([^)]*\)\s*\{\n?/,$x=/}\n?[^{}]*$/,Ad=[],Po="__LUMA_INJECT_DECLARATIONS__";function Xx(e){let t={vertex:{},fragment:{}};for(let i in e){let r=e[i],o=z3(i);typeof r=="string"&&(r={order:0,injection:r}),t[o][i]=r}return t}function z3(e){let t=e.slice(0,2);switch(t){case"vs":return"vertex";case"fs":return"fragment";default:throw new Error(t)}}function Co(e,t,i,r=!1){let o=t==="vertex";for(let n in i){let s=i[n];s.sort((l,c)=>l.order-c.order),Ad.length=s.length;for(let l=0,c=s.length;l<c;++l)Ad[l]=s[l].injection;let a=`${Ad.join(`
`)}
`;switch(n){case"vs:#decl":o&&(e=e.replace(Po,a));break;case"vs:#main-start":o&&(e=e.replace(Hx,l=>l+a));break;case"vs:#main-end":o&&(e=e.replace($x,l=>a+l));break;case"fs:#decl":o||(e=e.replace(Po,a));break;case"fs:#main-start":o||(e=e.replace(Hx,l=>l+a));break;case"fs:#main-end":o||(e=e.replace($x,l=>a+l));break;default:e=e.replace(n,l=>l+a)}}return e=e.replace(Po,""),r&&(e=e.replace(/\}\s*$/,n=>n+O3[t])),e}function cr(e){e.map(t=>U3(t))}function U3(e){if(e.instance)return;cr(e.dependencies||[]);let{propTypes:t={},deprecations:i=[],inject:r={}}=e,o={normalizedInjections:Xx(r),parsedDeprecations:L3(i)};t&&(o.propValidators=Lx(t)),e.instance=o;let n={};t&&(n=Object.entries(t).reduce((s,[a,l])=>{let c=l?.value;return c&&(s[a]=c),s},{})),e.defaultUniforms={...e.defaultUniforms,...n}}function wd(e,t,i){e.deprecations?.forEach(r=>{r.regex?.test(t)&&(r.deprecated?i.deprecated(r.old,r.new)():i.removed(r.old,r.new)())})}function L3(e){return e.forEach(t=>{t.type==="function"?t.regex=new RegExp(`\\b${t.old}\\(`):t.regex=new RegExp(`${t.type} ${t.old};`)}),e}function dr(e){cr(e);let t={},i={};jx({modules:e,level:0,moduleMap:t,moduleDepth:i});let r=Object.keys(i).sort((o,n)=>i[n]-i[o]).map(o=>t[o]);return cr(r),r}function jx(e){let{modules:t,level:i,moduleMap:r,moduleDepth:o}=e;if(i>=5)throw new Error("Possible loop in shader dependency graph");for(let n of t)r[n.name]=n,(o[n.name]===void 0||o[n.name]<i)&&(o[n.name]=i);for(let n of t)n.dependencies&&jx({modules:n.dependencies,level:i+1,moduleMap:r,moduleDepth:o})}var W3=/^(?:uniform\s+)?(?:(?:lowp|mediump|highp)\s+)?[A-Za-z0-9_]+(?:<[^>]+>)?\s+([A-Za-z0-9_]+)(?:\s*\[[^\]]+\])?\s*;/,V3=/((?:layout\s*\([^)]*\)\s*)*)uniform\s+([A-Za-z_][A-Za-z0-9_]*)\s*\{([\s\S]*?)\}\s*([A-Za-z_][A-Za-z0-9_]*)?\s*;/g;function Gx(e){return`${e.name}Uniforms`}function H3(e,t){let i=t==="wgsl"?e.source:t==="vertex"?e.vs:e.fs;if(!i)return null;let r=Gx(e);return X3(i,t==="wgsl"?"wgsl":"glsl",r)}function $3(e,t){let i=Object.keys(e.uniformTypes||{});if(!i.length)return null;let r=H3(e,t);return r?{moduleName:e.name,uniformBlockName:Gx(e),stage:t,expectedUniformNames:i,actualUniformNames:r,matches:G3(i,r)}:null}function qx(e,t,i={}){let r=$3(e,t);if(!r||r.matches)return r;let o=q3(r);return i.log?.error?.(o,r)(),i.throwOnError!==!1&&Ri(!1,o),r}function Kx(e){let t=[],i=K3(e);for(let r of i.matchAll(V3)){let o=r[1]?.trim()||null;t.push({blockName:r[2],body:r[3],instanceName:r[4]||null,layoutQualifier:o,hasLayoutQualifier:!!o,isStd140:!!(o&&/\blayout\s*\([^)]*\bstd140\b[^)]*\)/.exec(o))})}return t}function Zx(e,t,i,r){let o=Kx(e).filter(s=>!s.isStd140),n=new Set;for(let s of o){if(n.has(s.blockName))continue;n.add(s.blockName);let a=r?.label?`${r.label} `:"",l=s.hasLayoutQualifier?`declares ${Z3(s.layoutQualifier)} instead of layout(std140)`:"does not declare layout(std140)",c=`${a}${t} shader uniform block ${s.blockName} ${l}. luma.gl host-side shader block packing assumes explicit layout(std140) for GLSL uniform blocks. Add \`layout(std140)\` to the block declaration.`;i?.warn?.(c,s)()}return o}function X3(e,t,i){let r=t==="wgsl"?j3(e,i):Y3(e,i);if(!r)return null;let o=[];for(let n of r.split(`
`)){let s=n.replace(/\/\/.*$/,"").trim();if(!s||s.startsWith("#"))continue;let a=t==="wgsl"?s.match(/^([A-Za-z0-9_]+)\s*:/):s.match(W3);a&&o.push(a[1])}return o}function j3(e,t){let i=new RegExp(`\\bstruct\\s+${t}\\b`,"m").exec(e);if(!i)return null;let r=e.indexOf("{",i.index);if(r<0)return null;let o=0;for(let n=r;n<e.length;n++){let s=e[n];if(s==="{"){o++;continue}if(s==="}"&&(o--,o===0))return e.slice(r+1,n)}return null}function Y3(e,t){return Kx(e).find(r=>r.blockName===t)?.body||null}function G3(e,t){if(e.length!==t.length)return!1;for(let i=0;i<e.length;i++)if(e[i]!==t[i])return!1;return!0}function q3(e){let{expectedUniformNames:t,actualUniformNames:i}=e,r=t.filter(a=>!i.includes(a)),o=i.filter(a=>!t.includes(a)),n=[`Expected ${t.length} fields, found ${i.length}.`],s=Q3(t,i);return s&&n.push(s),r.length&&n.push(`Missing from shader block (${r.length}): ${Yx(r)}.`),o.length&&n.push(`Unexpected in shader block (${o.length}): ${Yx(o)}.`),t.length<=12&&i.length<=12&&(r.length||o.length)&&(n.push(`Expected: ${t.join(", ")}.`),n.push(`Actual: ${i.join(", ")}.`)),`${e.moduleName}: ${e.stage} shader uniform block ${e.uniformBlockName} does not match module.uniformTypes. ${n.join(" ")}`}function K3(e){return e.replace(/\/\*[\s\S]*?\*\//g,"").replace(/\/\/.*$/gm,"")}function Z3(e){return e.replace(/\s+/g," ").trim()}function Q3(e,t){let i=Math.min(e.length,t.length);for(let r=0;r<i;r++)if(e[r]!==t[r])return`First mismatch at field ${r+1}: expected ${e[r]}, found ${t[r]}.`;return e.length>t.length?`Shader block ends after field ${t.length}; expected next field ${e[t.length]}.`:t.length>e.length?`Shader block has extra field ${t.length}: ${t[e.length]}.`:null}function Yx(e,t=8){if(e.length<=t)return e.join(", ");let i=e.length-t;return`${e.slice(0,t).join(", ")}, ... (${i} more)`}function Qx(e){switch(e?.gpu.toLowerCase()){case"apple":return`#define APPLE_GPU
// Apple optimizes away the calculation necessary for emulated fp64
#define LUMA_FP64_CODE_ELIMINATION_WORKAROUND 1
#define LUMA_FP32_TAN_PRECISION_WORKAROUND 1
// Intel GPU doesn't have full 32 bits precision in same cases, causes overflow
#define LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND 1
`;case"nvidia":return`#define NVIDIA_GPU
// Nvidia optimizes away the calculation necessary for emulated fp64
#define LUMA_FP64_CODE_ELIMINATION_WORKAROUND 1
`;case"intel":return`#define INTEL_GPU
// Intel optimizes away the calculation necessary for emulated fp64
#define LUMA_FP64_CODE_ELIMINATION_WORKAROUND 1
// Intel's built-in 'tan' function doesn't have acceptable precision
#define LUMA_FP32_TAN_PRECISION_WORKAROUND 1
// Intel GPU doesn't have full 32 bits precision in same cases, causes overflow
#define LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND 1
`;case"amd":return`#define AMD_GPU
`;default:return`#define DEFAULT_GPU
// Prevent driver from optimizing away the calculation necessary for emulated fp64
#define LUMA_FP64_CODE_ELIMINATION_WORKAROUND 1
// Headless Chrome's software shader 'tan' function doesn't have acceptable precision
#define LUMA_FP32_TAN_PRECISION_WORKAROUND 1
// If the GPU doesn't have full 32 bits precision, will causes overflow
#define LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND 1
`}}function e0(e,t){if(Number(e.match(/^#version[ \t]+(\d+)/m)?.[1]||100)!==300)throw new Error("luma.gl v9 only supports GLSL 3.00 shader sources");switch(t){case"vertex":return e=Jx(e,J3),e;case"fragment":return e=Jx(e,eC),e;default:throw new Error(t)}}var t0=[[/^(#version[ \t]+(100|300[ \t]+es))?[ \t]*\n/,`#version 300 es
`],[/\btexture(2D|2DProj|Cube)Lod(EXT)?\(/g,"textureLod("],[/\btexture(2D|2DProj|Cube)(EXT)?\(/g,"texture("]],J3=[...t0,[Rd("attribute"),"in $1"],[Rd("varying"),"out $1"]],eC=[...t0,[Rd("varying"),"in $1"]];function Jx(e,t){for(let[i,r]of t)e=e.replace(i,r);return e}function Rd(e){return new RegExp(`\\b${e}[ \\t]+(\\w+[ \\t]+\\w+(\\[\\w+\\])?;)`,"g")}function Ed(e,t){let i="";for(let r in e){let o=e[r];if(i+=`void ${o.signature} {
`,o.header&&(i+=`  ${o.header}`),t[r]){let n=t[r];n.sort((s,a)=>s.order-a.order);for(let s of n)i+=`  ${s.injection}
`}o.footer&&(i+=`  ${o.footer}`),i+=`}
`}return i}function Id(e){let t={vertex:{},fragment:{}};for(let i of e){let r,o;typeof i!="string"?(r=i,o=r.hook):(r={},o=i),o=o.trim();let[n,s]=o.split(":"),a=o.replace(/\(.+/,""),l=Object.assign(r,{signature:s});switch(n){case"vs":t.vertex[a]=l;break;case"fs":t.fragment[a]=l;break;default:throw new Error(n)}}return t}function i0(e,t){return{name:tC(e,t),language:"glsl",version:iC(e)}}function tC(e,t="unnamed"){let r=/#define[^\S\r\n]*SHADER_NAME[^\S\r\n]*([A-Za-z0-9_-]+)\s*/.exec(e);return r?r[1]:t}function iC(e){let t=100,i=e.match(/[^\s]+/g);if(i&&i.length>=2&&i[0]==="#version"){let r=parseInt(i[1],10);Number.isFinite(r)&&(t=r)}if(t!==100&&t!==300)throw new Error(`Invalid GLSL version ${t}`);return t}var qe="(?:var<\\s*(uniform|storage(?:\\s*,\\s*[A-Za-z_][A-Za-z0-9_]*)?)\\s*>|var)\\s+([A-Za-z_][A-Za-z0-9_]*)";var ur=[new RegExp(`@binding\\(\\s*(auto|\\d+)\\s*\\)\\s*@group\\(\\s*(\\d+)\\s*\\)\\s*${qe}`,"g"),new RegExp(`@group\\(\\s*(\\d+)\\s*\\)\\s*@binding\\(\\s*(auto|\\d+)\\s*\\)\\s*${qe}`,"g")],aa=[new RegExp(`@binding\\(\\s*(auto|\\d+)\\s*\\)\\s*@group\\(\\s*(\\d+)\\s*\\)\\s*${qe}`,"g"),new RegExp(`@group\\(\\s*(\\d+)\\s*\\)\\s*@binding\\(\\s*(auto|\\d+)\\s*\\)\\s*${qe}`,"g")],r0=[new RegExp(`@binding\\(\\s*(\\d+)\\s*\\)\\s*@group\\(\\s*(\\d+)\\s*\\)\\s*${qe}`,"g"),new RegExp(`@group\\(\\s*(\\d+)\\s*\\)\\s*@binding\\(\\s*(\\d+)\\s*\\)\\s*${qe}`,"g")],rC=[new RegExp(`@binding\\(\\s*(auto)\\s*\\)\\s*@group\\(\\s*(\\d+)\\s*\\)\\s*${qe}`,"g"),new RegExp(`@group\\(\\s*(\\d+)\\s*\\)\\s*@binding\\(\\s*(auto)\\s*\\)\\s*${qe}`,"g"),new RegExp(`@binding\\(\\s*(auto)\\s*\\)\\s*@group\\(\\s*(\\d+)\\s*\\)(?:[\\s\\n\\r]*@[A-Za-z_][^\\n\\r]*)*[\\s\\n\\r]*${qe}`,"g"),new RegExp(`@group\\(\\s*(\\d+)\\s*\\)\\s*@binding\\(\\s*(auto)\\s*\\)(?:[\\s\\n\\r]*@[A-Za-z_][^\\n\\r]*)*[\\s\\n\\r]*${qe}`,"g")];function la(e){let t=e.split(""),i=0,r=0,o=!1,n=!1,s=!1;for(;i<e.length;){let a=e[i],l=e[i+1];if(n){s?s=!1:a==="\\"?s=!0:a==='"'&&(n=!1),i++;continue}if(o){a===`
`||a==="\r"?o=!1:t[i]=" ",i++;continue}if(r>0){if(a==="/"&&l==="*"){t[i]=" ",t[i+1]=" ",r++,i+=2;continue}if(a==="*"&&l==="/"){t[i]=" ",t[i+1]=" ",r--,i+=2;continue}a!==`
`&&a!=="\r"&&(t[i]=" "),i++;continue}if(a==='"'){n=!0,i++;continue}if(a==="/"&&l==="/"){t[i]=" ",t[i+1]=" ",o=!0,i+=2;continue}if(a==="/"&&l==="*"){t[i]=" ",t[i+1]=" ",r=1,i+=2;continue}i++}return t.join("")}function Ei(e,t){let i=la(e),r=[];for(let o of t){o.lastIndex=0;let n;for(n=o.exec(i);n;){let s=o===t[0],a=n.index,l=n[0].length;r.push({match:e.slice(a,a+l),index:a,length:l,bindingToken:n[s?1:2],groupToken:n[s?2:1],accessDeclaration:n[3]?.trim(),name:n[4]}),n=o.exec(i)}}return r.sort((o,n)=>o.index-n.index)}function Dd(e,t,i){let r=Ei(e,t);if(!r.length)return e;let o="",n=0;for(let s of r)o+=e.slice(n,s.index),o+=i(s),n=s.index+s.length;return o+=e.slice(n),o}function Md(e){return/@binding\(\s*auto\s*\)/.test(la(e))}function o0(e,t){return Ei(e,t===ur||t===aa?rC:t).find(r=>r.bindingToken==="auto")}var n0=[new RegExp(`@binding\\(\\s*(\\d+)\\s*\\)\\s*@group\\(\\s*(\\d+)\\s*\\)\\s*${qe}\\s*:\\s*([^;]+);`,"g"),new RegExp(`@group\\(\\s*(\\d+)\\s*\\)\\s*@binding\\(\\s*(\\d+)\\s*\\)\\s*${qe}\\s*:\\s*([^;]+);`,"g")];function ca(e,t=[]){let i=la(e),r=new Map;for(let n of t)r.set(s0(n.name,n.group,n.location),n.moduleName);let o=[];for(let n of n0){n.lastIndex=0;let s;for(s=n.exec(i);s;){let a=n===n0[0],l=Number(s[a?1:2]),c=Number(s[a?2:1]),d=s[3]?.trim(),u=s[4],f=s[5].trim(),h=r.get(s0(u,c,l));o.push(oC({name:u,group:c,binding:l,owner:h?"module":"application",moduleName:h,accessDeclaration:d,resourceType:f})),s=n.exec(i)}}return o.sort((n,s)=>n.group!==s.group?n.group-s.group:n.binding!==s.binding?n.binding-s.binding:n.name.localeCompare(s.name))}function oC(e){let t={name:e.name,group:e.group,binding:e.binding,owner:e.owner,kind:"unknown",moduleName:e.moduleName,resourceType:e.resourceType};if(e.accessDeclaration){let i=e.accessDeclaration.split(",").map(r=>r.trim());if(i[0]==="uniform")return{...t,kind:"uniform",access:"uniform"};if(i[0]==="storage"){let r=i[1]||"read_write";return{...t,kind:r==="read"?"read-only-storage":"storage",access:r}}}return e.resourceType==="sampler"||e.resourceType==="sampler_comparison"?{...t,kind:"sampler",samplerKind:e.resourceType==="sampler_comparison"?"comparison":"filtering"}:e.resourceType.startsWith("texture_storage_")?{...t,kind:"storage-texture",access:sC(e.resourceType),viewDimension:a0(e.resourceType)}:e.resourceType.startsWith("texture_")?{...t,kind:"texture",viewDimension:a0(e.resourceType),sampleType:nC(e.resourceType),multisampled:e.resourceType.startsWith("texture_multisampled_")}:t}function s0(e,t,i){return`${t}:${i}:${e}`}function a0(e){if(e.includes("cube_array"))return"cube-array";if(e.includes("2d_array"))return"2d-array";if(e.includes("cube"))return"cube";if(e.includes("3d"))return"3d";if(e.includes("2d"))return"2d";if(e.includes("1d"))return"1d"}function nC(e){if(e.startsWith("texture_depth_"))return"depth";if(e.includes("<i32>"))return"sint";if(e.includes("<u32>"))return"uint";if(e.includes("<f32>"))return"float"}function sC(e){return/,\s*([A-Za-z_][A-Za-z0-9_]*)\s*>$/.exec(e)?.[1]}var Fd=`

${Po}
`,Ao=100,aC=`precision highp float;
`;function u0(e){let t=dr(e.modules||[]),{source:i,bindingAssignments:r}=lC(e.platformInfo,{...e,source:e.source,stage:"vertex",modules:t});return{source:i,getUniforms:h0(t),bindingAssignments:r,bindingTable:ca(i,r)}}function f0(e){let{vs:t,fs:i}=e,r=dr(e.modules||[]);return{vs:l0(e.platformInfo,{...e,source:t,stage:"vertex",modules:r}),fs:l0(e.platformInfo,{...e,source:i,stage:"fragment",modules:r}),getUniforms:h0(r)}}function lC(e,t){let{source:i,stage:r,modules:o,hookFunctions:n=[],inject:s={},log:a}=t;Ri(typeof i=="string","shader source must be a string");let l=i,c="",d=Id(n),u={},f={},h={};for(let _ in s){let v=typeof s[_]=="string"?{injection:s[_],order:0}:s[_],P=/^(v|f)s:(#)?([\w-]+)$/.exec(_);if(P){let T=P[2],R=P[3];T?R==="decl"?f[_]=[v]:h[_]=[v]:u[_]=[v]}else h[_]=[v]}let m=o,x=uC(l),S=dC(x.source),y=mC(m,t._bindingRegistry,S),A=[];for(let _ of m){a&&wd(_,l,a);let v=fC(p0(_,"wgsl",a),_,{usedBindingsByGroup:S,bindingRegistry:t._bindingRegistry,reservedBindingKeysByGroup:y});A.push(...v.bindingAssignments);let P=v.source;c+=P;let T=_.injections?.[r]||{};for(let R in T){let D=/^(v|f)s:#([\w-]+)$/.exec(R);if(D){let F=D[2]==="decl"?f:h;F[R]=F[R]||[],F[R].push(T[R])}else u[R]=u[R]||[],u[R].push(T[R])}}return c+=Fd,c=Co(c,r,f),c+=Ed(d[r],u),c+=yC(A),c+=x.source,c=Co(c,r,h),vC(c),{source:c,bindingAssignments:A}}function l0(e,t){let{source:i,stage:r,language:o="glsl",modules:n,defines:s={},hookFunctions:a=[],inject:l={},prologue:c=!0,log:d}=t;Ri(typeof i=="string","shader source must be a string");let u=o==="glsl"?i0(i).version:-1,f=e.shaderLanguageVersion,h=u===100?"#version 100":"#version 300 es",x=i.split(`
`).slice(1).join(`
`),S={};n.forEach(T=>{Object.assign(S,T.defines)}),Object.assign(S,s);let y="";switch(o){case"wgsl":break;case"glsl":y=c?`${h}

// ----- PROLOGUE -------------------------
${`#define SHADER_TYPE_${r.toUpperCase()}`}

${Qx(e)}
${r==="fragment"?aC:""}

// ----- APPLICATION DEFINES -------------------------

${cC(S)}

`:`${h}
`;break}let A=Id(a),_={},v={},P={};for(let T in l){let R=typeof l[T]=="string"?{injection:l[T],order:0}:l[T],D=/^(v|f)s:(#)?([\w-]+)$/.exec(T);if(D){let B=D[2],F=D[3];B?F==="decl"?v[T]=[R]:P[T]=[R]:_[T]=[R]}else P[T]=[R]}for(let T of n){d&&wd(T,x,d);let R=p0(T,r,d);y+=R;let D=T.instance?.normalizedInjections[r]||{};for(let B in D){let F=/^(v|f)s:#([\w-]+)$/.exec(B);if(F){let k=F[2]==="decl"?v:P;k[B]=k[B]||[],k[B].push(D[B])}else _[B]=_[B]||[],_[B].push(D[B])}}return y+="// ----- MAIN SHADER SOURCE -------------------------",y+=Fd,y=Co(y,r,v),y+=Ed(A[r],_),y+=x,y=Co(y,r,P),o==="glsl"&&u!==f&&(y=e0(y,r)),o==="glsl"&&Zx(y,r,d),y.trim()}function h0(e){return function(i){let r={};for(let o of e){let n=o.getUniforms?.(i,r);Object.assign(r,n)}return r}}function cC(e={}){let t="";for(let i in e){let r=e[i];(r||Number.isFinite(r))&&(t+=`#define ${i.toUpperCase()} ${e[i]}
`)}return t}function p0(e,t,i){let r;switch(t){case"vertex":r=e.vs||"";break;case"fragment":r=e.fs||"";break;case"wgsl":r=e.source||"";break;default:Ri(!1)}if(!e.name)throw new Error("Shader module must have a name");qx(e,t,{log:i});let o=e.name.toUpperCase().replace(/[^0-9a-z]/gi,"_"),n=`// ----- MODULE ${e.name} ---------------

`;return t!=="wgsl"&&(n+=`#define MODULE_${o}
`),n+=`${r}
`,n}function dC(e){let t=new Map;for(let i of Ei(e,r0)){let r=Number(i.bindingToken),o=Number(i.groupToken);kd(o,r,i.name),fr(t,o,r,`application binding "${i.name}"`)}return t}function uC(e){let t=Ei(e,aa),i=new Map;for(let n of t){if(n.bindingToken==="auto")continue;let s=Number(n.bindingToken),a=Number(n.groupToken);kd(a,s,n.name),fr(i,a,s,`application binding "${n.name}"`)}let r={sawSupportedBindingDeclaration:t.length>0},o=Dd(e,aa,n=>pC(n,i,r));if(Md(e)&&!r.sawSupportedBindingDeclaration)throw new Error('Unsupported @binding(auto) declaration form in application WGSL. Use adjacent "@group(N)" and "@binding(auto)" decorators followed by a bindable "var" declaration.');return{source:o}}function fC(e,t,i){let r=[],n={sawSupportedBindingDeclaration:Ei(e,ur).length>0,nextHintedBindingLocation:typeof t.firstBindingSlot=="number"?t.firstBindingSlot:null},s=Dd(e,ur,a=>hC(a,{module:t,context:i,bindingAssignments:r,relocationState:n}));if(Md(e)&&!n.sawSupportedBindingDeclaration)throw new Error(`Unsupported @binding(auto) declaration form in module "${t.name}". Use adjacent "@group(N)" and "@binding(auto)" decorators followed by a bindable "var" declaration.`);return{source:s,bindingAssignments:r}}function hC(e,t){let{module:i,context:r,bindingAssignments:o,relocationState:n}=t,{match:s,bindingToken:a,groupToken:l,name:c}=e,d=Number(l);if(a==="auto"){let f=m0(d,i.name,c),h=r.bindingRegistry?.get(f),m=h!==void 0?h:n.nextHintedBindingLocation===null?d0(d,r.usedBindingsByGroup):d0(d,r.usedBindingsByGroup,n.nextHintedBindingLocation);return c0(i.name,d,m,c),h!==void 0&&gC(r.reservedBindingKeysByGroup,d,m,f)?(o.push({moduleName:i.name,name:c,group:d,location:m}),s.replace(/@binding\(\s*auto\s*\)/,`@binding(${m})`)):(fr(r.usedBindingsByGroup,d,m,`module "${i.name}" binding "${c}"`),r.bindingRegistry?.set(f,m),o.push({moduleName:i.name,name:c,group:d,location:m}),n.nextHintedBindingLocation!==null&&h===void 0&&(n.nextHintedBindingLocation=m+1),s.replace(/@binding\(\s*auto\s*\)/,`@binding(${m})`))}let u=Number(a);return c0(i.name,d,u,c),fr(r.usedBindingsByGroup,d,u,`module "${i.name}" binding "${c}"`),o.push({moduleName:i.name,name:c,group:d,location:u}),s}function pC(e,t,i){let{match:r,bindingToken:o,groupToken:n,name:s}=e,a=Number(n);if(o==="auto"){let l=SC(a,t);return kd(a,l,s),fr(t,a,l,`application binding "${s}"`),r.replace(/@binding\(\s*auto\s*\)/,`@binding(${l})`)}return i.sawSupportedBindingDeclaration=!0,r}function mC(e,t,i){let r=new Map;if(!t)return r;for(let o of e)for(let n of xC(o)){let s=m0(n.group,o.name,n.name),a=t.get(s);if(a!==void 0){let l=r.get(n.group)||new Map,c=l.get(a);if(c&&c!==s)throw new Error(`Duplicate WGSL binding reservation for modules "${c}" and "${s}": group ${n.group}, binding ${a}.`);fr(i,n.group,a,`registered module binding "${s}"`),l.set(a,s),r.set(n.group,l)}}return r}function gC(e,t,i,r){let o=e.get(t);if(!o)return!1;let n=o.get(i);if(!n)return!1;if(n!==r)throw new Error(`Registered module binding "${r}" collided with "${n}": group ${t}, binding ${i}.`);return!0}function xC(e){let t=[],i=e.source||"";for(let r of Ei(i,ur))t.push({name:r.name,group:Number(r.groupToken)});return t}function kd(e,t,i){if(e===0&&t>=Ao)throw new Error(`Application binding "${i}" in group 0 uses reserved binding ${t}. Application-owned explicit group-0 bindings must stay below ${Ao}.`)}function c0(e,t,i,r){if(t===0&&i<Ao)throw new Error(`Module "${e}" binding "${r}" in group 0 uses reserved application binding ${i}. Module-owned explicit group-0 bindings must be ${Ao} or higher.`)}function fr(e,t,i,r){let o=e.get(t)||new Set;if(o.has(i))throw new Error(`Duplicate WGSL binding assignment for ${r}: group ${t}, binding ${i}.`);o.add(i),e.set(t,o)}function d0(e,t,i){let r=t.get(e)||new Set,o=i??(e===0?Ao:r.size>0?Math.max(...r)+1:0);for(;r.has(o);)o++;return o}function SC(e,t){let i=t.get(e)||new Set,r=0;for(;i.has(r);)r++;return r}function vC(e){let t=o0(e,ur);if(!t)return;let i=bC(e,t.index);throw i?new Error(`Unresolved @binding(auto) for module "${i}" binding "${t.name}" remained in assembled WGSL source.`):TC(e,t.index)?new Error(`Unresolved @binding(auto) for application binding "${t.name}" remained in assembled WGSL source.`):new Error(`Unresolved @binding(auto) remained in assembled WGSL source near "${_C(t.match)}".`)}function yC(e){if(e.length===0)return"";let t=`// ----- MODULE WGSL BINDING ASSIGNMENTS ---------------
`;for(let i of e)t+=`// ${i.moduleName}.${i.name} -> @group(${i.group}) @binding(${i.location})
`;return t+=`
`,t}function m0(e,t,i){return`${e}:${t}:${i}`}function bC(e,t){let i=/^\/\/ ----- MODULE ([^\n]+) ---------------$/gm,r,o;for(o=i.exec(e);o&&o.index<=t;)r=o[1],o=i.exec(e);return r}function TC(e,t){let i=e.indexOf(Fd);return i>=0?t>i:!0}function _C(e){return e.replace(/\s+/g," ").trim()}var Nd="([a-zA-Z_][a-zA-Z0-9_]*)",PC=new RegExp(`^\\s*\\#\\s*ifdef\\s*${Nd}\\s*$`),CC=new RegExp(`^\\s*\\#\\s*ifndef\\s*${Nd}\\s*(?:\\/\\/.*)?$`),AC=/^\s*\#\s*else\s*(?:\/\/.*)?$/,wC=/^\s*\#\s*endif\s*$/,RC=new RegExp(`^\\s*\\#\\s*ifdef\\s*${Nd}\\s*(?:\\/\\/.*)?$`),EC=/^\s*\#\s*endif\s*(?:\/\/.*)?$/;function g0(e,t){let i=e.split(`
`),r=[],o=[],n=!0;for(let s of i){let a=s.match(RC)||s.match(PC),l=s.match(CC),c=s.match(AC),d=s.match(EC)||s.match(wC);if(a||l){let u=(a||l)?.[1],f=!!t?.defines?.[u],h=a?f:!f,m=n&&h;o.push({parentActive:n,branchTaken:h,active:m}),n=m}else if(c){let u=o[o.length-1];if(!u)throw new Error("Encountered #else without matching #ifdef or #ifndef");u.active=u.parentActive&&!u.branchTaken,u.branchTaken=!0,n=u.active}else d?(o.pop(),n=o.length?o[o.length-1].active:!0):n&&r.push(s)}if(o.length>0)throw new Error("Unterminated conditional block in shader source");return r.join(`
`)}var Ii=class Ii{constructor(){p(this,"_hookFunctions",[]);p(this,"_defaultModules",[]);p(this,"_wgslBindingRegistry",new Map)}static getDefaultShaderAssembler(){return Ii.defaultShaderAssembler=Ii.defaultShaderAssembler||new Ii,Ii.defaultShaderAssembler}addDefaultModule(t){this._defaultModules.find(i=>i.name===(typeof t=="string"?t:t.name))||this._defaultModules.push(t)}removeDefaultModule(t){let i=typeof t=="string"?t:t.name;this._defaultModules=this._defaultModules.filter(r=>r.name!==i)}addShaderHook(t,i){i&&(t=Object.assign(i,{hook:t})),this._hookFunctions.push(t)}assembleWGSLShader(t){let i=this._getModuleList(t.modules),r=this._hookFunctions,{source:o,getUniforms:n,bindingAssignments:s}=u0({...t,source:t.source,_bindingRegistry:this._wgslBindingRegistry,modules:i,hookFunctions:r}),a={...i.reduce((c,d)=>(Object.assign(c,d.defines),c),{}),...t.defines},l=t.platformInfo.shaderLanguage==="wgsl"?g0(o,{defines:a}):o;return{source:l,getUniforms:n,modules:i,bindingAssignments:s,bindingTable:ca(l,s)}}assembleGLSLShaderPair(t){let i=this._getModuleList(t.modules),r=this._hookFunctions;return{...f0({...t,vs:t.vs,fs:t.fs,modules:i,hookFunctions:r}),modules:i}}_getModuleList(t=[]){let i=new Array(this._defaultModules.length+t.length),r={},o=0;for(let n=0,s=this._defaultModules.length;n<s;++n){let a=this._defaultModules[n],l=a.name;i[o++]=a,r[l]=!0}for(let n=0,s=t.length;n<s;++n){let a=t[n],l=a.name;r[l]||(i[o++]=a,r[l]=!0)}return i.length=o,cr(i),i}};p(Ii,"defaultShaderAssembler");var wo=Ii;te();var Bd={};function hr(e="id"){Bd[e]=Bd[e]||1;let t=Bd[e]++;return`${e}-${t}`}var da=class{constructor(t){p(this,"id");p(this,"userData",{});p(this,"topology");p(this,"bufferLayout",[]);p(this,"vertexCount");p(this,"indices");p(this,"attributes");if(this.id=t.id||hr("geometry"),this.topology=t.topology,this.indices=t.indices||null,this.attributes=t.attributes,this.vertexCount=t.vertexCount,this.bufferLayout=t.bufferLayout||[],this.indices&&!(this.indices.usage&U.INDEX))throw new Error("Index buffer must have INDEX usage")}destroy(){this.indices?.destroy();for(let t of Object.values(this.attributes))t.destroy()}getVertexCount(){return this.vertexCount}getAttributes(){return this.attributes}getIndexes(){return this.indices||null}_calculateVertexCount(t){return t.byteLength/12}};function x0(e,t){if(t instanceof da)return t;let i=IC(e,t),{attributes:r,bufferLayout:o}=DC(e,t);return new da({topology:t.topology||"triangle-list",bufferLayout:o,vertexCount:t.vertexCount,indices:i,attributes:r})}function IC(e,t){if(!t.indices)return;let i=t.indices.value;return e.createBuffer({usage:U.INDEX,data:i})}function DC(e,t){let i=[],r={};for(let[n,s]of Object.entries(t.attributes)){let a=n;switch(n){case"POSITION":a="positions";break;case"NORMAL":a="normals";break;case"TEXCOORD_0":a="texCoords";break;case"TEXCOORD_1":a="texCoords1";break;case"COLOR_0":a="colors";break}if(s){r[a]=e.createBuffer({data:s.value,id:`${n}-buffer`});let{value:l,size:c,normalized:d}=s;if(c===void 0)throw new Error(`Attribute ${n} is missing a size`);i.push({name:a,format:Ut.getVertexFormatFromAttribute(l,c,d)})}}let o=t._calculateVertexCount(t.attributes,t.indices);return{attributes:r,bufferLayout:i,vertexCount:o}}function S0(e,t){let i={},r="Values";if(e.attributes.length===0&&!e.varyings?.length)return{"No attributes or varyings":{[r]:"N/A"}};for(let o of e.attributes)if(o){let n=`${o.location} ${o.name}: ${o.type}`;i[`in ${n}`]={[r]:o.stepMode||"vertex"}}for(let o of e.varyings||[]){let n=`${o.location} ${o.name}`;i[`out ${n}`]={[r]:JSON.stringify(o)}}return i}var ua="__debugFramebufferState";function y0(e,t,i){if(e.device.type!=="webgl")return;let r=kC(e.device);if(!r.flushing){if(BC(e)){MC(e,i,r);return}t&&NC(t)&&t.handle!==null&&(r.queuedFramebuffers.includes(t)||r.queuedFramebuffers.push(t))}}function MC(e,t,i){if(i.queuedFramebuffers.length===0)return;let r=e.device,{gl:o}=r,n=o.getParameter(36010),s=o.getParameter(36006),[a,l]=e.device.getDefaultCanvasContext().getDrawingBufferSize(),c=v0(t.top,8),d=v0(t.left,8);i.flushing=!0;try{for(let u of i.queuedFramebuffers){let[f,h,m,x,S]=FC({framebuffer:u,targetWidth:a,targetHeight:l,topPx:c,leftPx:d,minimap:t.minimap});o.bindFramebuffer(36008,u.handle),o.bindFramebuffer(36009,null),o.blitFramebuffer(0,0,u.width,u.height,f,h,m,x,16384,9728),c+=S+8}}finally{o.bindFramebuffer(36008,n),o.bindFramebuffer(36009,s),i.flushing=!1}}function FC(e){let{framebuffer:t,targetWidth:i,targetHeight:r,topPx:o,leftPx:n,minimap:s}=e,a=s?Math.max(Math.floor(i/4),1):i,l=s?Math.max(Math.floor(r/4),1):r,c=Math.min(a/t.width,l/t.height),d=Math.max(Math.floor(t.width*c),1),u=Math.max(Math.floor(t.height*c),1),f=n,h=Math.max(r-o-u,0),m=f+d,x=h+u;return[f,h,m,x,u]}function kC(e){var t;return(t=e.userData)[ua]||(t[ua]={flushing:!1,queuedFramebuffers:[]}),e.userData[ua]}function NC(e){return"colorAttachments"in e}function BC(e){let t=e.props.framebuffer;return!t||t.handle===null}function v0(e,t){if(!e)return t;let i=Number.parseInt(e,10);return Number.isFinite(i)?i:t}function fa(e,t,i){if(e===t)return!0;if(!i||!e||!t)return!1;if(Array.isArray(e)){if(!Array.isArray(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(!fa(e[r],t[r],i-1))return!1;return!0}if(Array.isArray(t))return!1;if(typeof e=="object"&&typeof t=="object"){let r=Object.keys(e),o=Object.keys(t);if(r.length!==o.length)return!1;for(let n of r)if(!t.hasOwnProperty(n)||!fa(e[n],t[n],i-1))return!1;return!0}return!1}te();var pr=class{constructor(t){p(this,"bufferLayouts");this.bufferLayouts=t}getBufferLayout(t){return this.bufferLayouts.find(i=>i.name===t)||null}getAttributeNamesForBuffer(t){return t.attributes?t.attributes?.map(i=>i.attribute):[t.name]}mergeBufferLayouts(t,i){let r=[...t];for(let o of i){let n=r.findIndex(s=>s.name===o.name);n<0?r.push(o):r[n]=o}return r}getBufferIndex(t){let i=this.bufferLayouts.findIndex(r=>r.name===t);return i===-1&&w.warn(`BufferLayout: Missing buffer for "${t}".`)(),i}};function b0(e,t){let i=1/0;for(let r of e){let o=t[r];o!==void 0&&(i=Math.min(i,o))}return i}function T0(e,t){let i=Object.fromEntries(e.attributes.map(o=>[o.name,o.location])),r=t.slice();return r.sort((o,n)=>{let s=o.attributes?o.attributes.map(d=>d.attribute):[o.name],a=n.attributes?n.attributes.map(d=>d.attribute):[n.name],l=b0(s,i),c=b0(a,i);return l-c}),r}function Od(e,t){if(!e||!t.some(r=>r.bindingLayout?.length))return e;let i={...e,bindings:e.bindings.map(r=>({...r}))};"attributes"in(e||{})&&(i.attributes=e?.attributes||[]);for(let r of t)for(let o of r.bindingLayout||[])for(let n of OC(o.name)){let s=i.bindings.find(a=>a.name===n);s?.group===0&&(s.group=o.group)}return i}function _0(e){return!!(e.uniformTypes&&!zC(e.uniformTypes))}function OC(e){let t=new Set([e,`${e}Uniforms`]);return e.endsWith("Uniforms")||t.add(`${e}Sampler`),[...t]}function zC(e){for(let t in e)return!1;return!0}te();function P0(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function C0(e){return Array.isArray(e)?e.length===0||typeof e[0]=="number":!1}function zd(e){return P0(e)||C0(e)}function UC(e){return zd(e)||typeof e=="number"||typeof e=="boolean"}function A0(e,t={}){let i={bindings:{},uniforms:{}};return Object.keys(e).forEach(r=>{let o=e[r];Object.prototype.hasOwnProperty.call(t,r)||UC(o)?i.uniforms[r]=o:i.bindings[r]=o}),i}var ha=class{constructor(t,i){p(this,"options",{disableWarnings:!1});p(this,"modules");p(this,"moduleUniforms");p(this,"moduleBindings");Object.assign(this.options,i);let r=dr(Object.values(t).filter(LC));for(let o of r)t[o.name]=o;w.log(1,"Creating ShaderInputs with modules",Object.keys(t))(),this.modules=t,this.moduleUniforms={},this.moduleBindings={};for(let[o,n]of Object.entries(t))n&&(this._addModule(n),n.name&&o!==n.name&&!this.options.disableWarnings&&w.warn(`Module name: ${o} vs ${n.name}`)())}destroy(){}setProps(t){for(let i of Object.keys(t)){let r=i,o=t[r]||{},n=this.modules[r];if(!n)this.options.disableWarnings||w.warn(`Module ${i} not found`)();else{let s=this.moduleUniforms[r],a=this.moduleBindings[r],l=n.getUniforms?.(o,s)||o,{uniforms:c,bindings:d}=A0(l,n.uniformTypes);this.moduleUniforms[r]=w0(s,c,n.uniformTypes),this.moduleBindings[r]={...a,...d}}}}getModules(){return Object.values(this.modules)}getUniformValues(){return this.moduleUniforms}getBindingValues(){let t={};for(let i of Object.values(this.moduleBindings))Object.assign(t,i);return t}getDebugTable(){let t={};for(let[i,r]of Object.entries(this.moduleUniforms))for(let[o,n]of Object.entries(r))t[`${i}.${o}`]={type:this.modules[i].uniformTypes?.[o],value:String(n)};return t}_addModule(t){let i=t.name;this.moduleUniforms[i]=w0({},t.defaultUniforms||{},t.uniformTypes),this.moduleBindings[i]={}}};function w0(e={},t={},i={}){let r={...e};for(let[o,n]of Object.entries(t))n!==void 0&&(r[o]=Ud(e[o],n,i[o]));return r}function Ud(e,t,i){if(!i||typeof i=="string")return Ro(t);if(Array.isArray(i)){if(Ld(t)||!Array.isArray(t))return Ro(t);let s=Array.isArray(e)&&!Ld(e)?[...e]:[],a=s.slice();for(let l=0;l<t.length;l++){let c=t[l];c!==void 0&&(a[l]=Ud(s[l],c,i[0]))}return a}if(!Wd(t))return Ro(t);let r=i,o=Wd(e)?e:{},n={...o};for(let[s,a]of Object.entries(t))a!==void 0&&(n[s]=Ud(o[s],a,r[s]));return n}function Ro(e){return ArrayBuffer.isView(e)?Array.prototype.slice.call(e):Array.isArray(e)?Ld(e)?e.slice():e.map(i=>i===void 0?void 0:Ro(i)):Wd(e)?Object.fromEntries(Object.entries(e).map(([t,i])=>[t,i===void 0?void 0:Ro(i)])):e}function Ld(e){return ArrayBuffer.isView(e)||Array.isArray(e)&&(e.length===0||typeof e[0]=="number")}function Wd(e){return!!e&&typeof e=="object"&&!Array.isArray(e)&&!ArrayBuffer.isView(e)}function LC(e){return!!e?.dependencies}te();te();var Vd={"+X":0,"-X":1,"+Y":2,"-Y":3,"+Z":4,"-Z":5};function Eo(e){return e?Array.isArray(e)?e[0]??null:e:null}function R0(e){let{dimension:t,data:i}=e;if(!i)return null;switch(t){case"1d":{let r=Eo(i);if(!r)return null;let{width:o}=Io(r);return{width:o,height:1}}case"2d":{let r=Eo(i);return r?Io(r):null}case"3d":case"2d-array":{if(!Array.isArray(i)||i.length===0)return null;let r=Eo(i[0]);return r?Io(r):null}case"cube":{let r=Object.keys(i)[0]??null;if(!r)return null;let o=i[r],n=Eo(o);return n?Io(n):null}case"cube-array":{if(!Array.isArray(i)||i.length===0)return null;let r=i[0],o=Object.keys(r)[0]??null;if(!o)return null;let n=Eo(r[o]);return n?Io(n):null}default:return null}}function Io(e){if(Ki(e))return $r(e);if(typeof e=="object"&&"width"in e&&"height"in e)return{width:e.width,height:e.height};throw new Error("Unsupported mip-level data")}function WC(e){return typeof e=="object"&&e!==null&&"data"in e&&"width"in e&&"height"in e}function VC(e){return ArrayBuffer.isView(e)}function Hd(e){let{textureFormat:t,format:i}=e;if(t&&i&&t!==i)throw new Error(`Conflicting texture formats "${t}" and "${i}" provided for the same mip level`);return t??i}function E0(e){let t=Vd[e];if(t===void 0)throw new Error(`Invalid cube face: ${e}`);return t}function HC(e,t){return 6*e+E0(t)}function $d(e){throw new Error("setTexture1DData not supported in WebGL.")}function $C(e){return Array.isArray(e)?e:[e]}function Di(e,t,i,r){let o=$C(t),n=e,s=[];for(let a=0;a<o.length;a++){let l=o[a];if(Ki(l))s.push({type:"external-image",image:l,z:n,mipLevel:a});else if(WC(l))s.push({type:"texture-data",data:l,textureFormat:Hd(l),z:n,mipLevel:a});else if(VC(l)&&i)s.push({type:"texture-data",data:{data:l,width:Math.max(1,i.width>>a),height:Math.max(1,i.height>>a),...r?{format:r}:{}},textureFormat:r,z:n,mipLevel:a});else throw new Error("Unsupported 2D mip-level payload")}return s}function Xd(e){let t=[];for(let i=0;i<e.length;i++)t.push(...Di(i,e[i]));return t}function jd(e){let t=[];for(let i=0;i<e.length;i++)t.push(...Di(i,e[i]));return t}function Yd(e){let t=[];for(let[i,r]of Object.entries(e)){let o=E0(i);t.push(...Di(o,r))}return t}function Gd(e){let t=[];return e.forEach((i,r)=>{for(let[o,n]of Object.entries(i)){let s=HC(r,o);t.push(...Di(s,n))}}),t}var pa=class pa{constructor(t,i){p(this,"device");p(this,"id");p(this,"props");p(this,"_texture",null);p(this,"_sampler",null);p(this,"_view",null);p(this,"ready");p(this,"isReady",!1);p(this,"destroyed",!1);p(this,"resolveReady",()=>{});p(this,"rejectReady",()=>{});this.device=t;let r=hr("dynamic-texture"),o=i;this.props={...pa.defaultProps,id:r,...i,data:null},this.id=this.props.id,this.ready=new Promise((n,s)=>{this.resolveReady=n,this.rejectReady=s}),this.initAsync(o)}get texture(){if(!this._texture)throw new Error("Texture not initialized yet");return this._texture}get sampler(){if(!this._sampler)throw new Error("Sampler not initialized yet");return this._sampler}get view(){if(!this._view)throw new Error("View not initialized yet");return this._view}get[Symbol.toStringTag](){return"DynamicTexture"}toString(){let t=this._texture?.width??this.props.width??"?",i=this._texture?.height??this.props.height??"?";return`DynamicTexture:"${this.id}":${t}x${i}px:(${this.isReady?"ready":"loading..."})`}async initAsync(t){try{let i=await this._loadAllData(t);this._checkNotDestroyed();let r=i.data?XC({...i,width:t.width,height:t.height,format:t.format}):[],o="format"in t&&t.format!==void 0,n="usage"in t&&t.usage!==void 0,a=(()=>{if(this.props.width&&this.props.height)return{width:this.props.width,height:this.props.height};let x=R0(i);return x||{width:this.props.width||1,height:this.props.height||1}})();if(!a||a.width<=0||a.height<=0)throw new Error(`${this} size could not be determined or was zero`);let l=jC(this.device,r,a,{format:o?t.format:void 0}),c=l.format??this.props.format,d={...this.props,...a,format:c,mipLevels:1,data:void 0};this.device.isTextureFormatCompressed(c)&&!n&&(d.usage=z.SAMPLE|z.COPY_DST);let u=this.props.mipmaps&&!l.hasExplicitMipChain&&!this.device.isTextureFormatCompressed(c);if(this.device.type==="webgpu"&&u){let x=this.props.dimension==="3d"?z.SAMPLE|z.STORAGE|z.COPY_DST|z.COPY_SRC:z.SAMPLE|z.RENDER|z.COPY_DST|z.COPY_SRC;d.usage|=x}let f=this.device.getMipLevelCount(d.width,d.height),h=l.hasExplicitMipChain?l.mipLevels:this.props.mipLevels==="auto"?f:Math.max(1,Math.min(f,this.props.mipLevels??1)),m={...d,mipLevels:h};this._texture=this.device.createTexture(m),this._sampler=this.texture.sampler,this._view=this.texture.view,l.subresources.length&&this._setTextureSubresources(l.subresources),this.props.mipmaps&&!l.hasExplicitMipChain&&!u&&w.warn(`${this} skipping auto-generated mipmaps for compressed texture format`)(),u&&this.generateMipmaps(),this.isReady=!0,this.resolveReady(this.texture),w.info(0,`${this} created`)()}catch(i){let r=i instanceof Error?i:new Error(String(i));this.rejectReady(r)}}destroy(){this._texture&&(this._texture.destroy(),this._texture=null,this._sampler=null,this._view=null),this.destroyed=!0}generateMipmaps(){this.device.type==="webgl"?this.texture.generateMipmapsWebGL():this.device.type==="webgpu"?this.device.generateMipmapsWebGPU(this.texture):w.warn(`${this} mipmaps not supported on ${this.device.type}`)}setSampler(t={}){this._checkReady();let i=t instanceof st?t:this.device.createSampler(t);this.texture.setSampler(i),this._sampler=i}async readBuffer(t={}){this.isReady||await this.ready;let i=t.width??this.texture.width,r=t.height??this.texture.height,o=t.depthOrArrayLayers??this.texture.depth,n=this.texture.computeMemoryLayout({width:i,height:r,depthOrArrayLayers:o}),s=this.device.createBuffer({byteLength:n.byteLength,usage:U.COPY_DST|U.MAP_READ});this.texture.readBuffer({...t,width:i,height:r,depthOrArrayLayers:o},s);let a=this.device.createFence();return await a.signaled,a.destroy(),s}async readAsync(t={}){this.isReady||await this.ready;let i=t.width??this.texture.width,r=t.height??this.texture.height,o=t.depthOrArrayLayers??this.texture.depth,n=this.texture.computeMemoryLayout({width:i,height:r,depthOrArrayLayers:o}),s=await this.readBuffer(t),a=await s.readAsync(0,n.byteLength);return s.destroy(),a.buffer}resize(t){if(this._checkReady(),t.width===this.texture.width&&t.height===this.texture.height)return!1;let i=this.texture;return this._texture=i.clone(t),this._sampler=this.texture.sampler,this._view=this.texture.view,i.destroy(),w.info(`${this} resized`),!0}getCubeFaceIndex(t){let i=Vd[t];if(i===void 0)throw new Error(`Invalid cube face: ${t}`);return i}getCubeArrayFaceIndex(t,i){return 6*t+this.getCubeFaceIndex(i)}setTexture1DData(t){if(this._checkReady(),this.texture.props.dimension!=="1d")throw new Error(`${this} is not 1d`);let i=$d(t);this._setTextureSubresources(i)}setTexture2DData(t,i=0){if(this._checkReady(),this.texture.props.dimension!=="2d")throw new Error(`${this} is not 2d`);let r=Di(i,t);this._setTextureSubresources(r)}setTexture3DData(t){if(this.texture.props.dimension!=="3d")throw new Error(`${this} is not 3d`);let i=Xd(t);this._setTextureSubresources(i)}setTextureArrayData(t){if(this.texture.props.dimension!=="2d-array")throw new Error(`${this} is not 2d-array`);let i=jd(t);this._setTextureSubresources(i)}setTextureCubeData(t){if(this.texture.props.dimension!=="cube")throw new Error(`${this} is not cube`);let i=Yd(t);this._setTextureSubresources(i)}setTextureCubeArrayData(t){if(this.texture.props.dimension!=="cube-array")throw new Error(`${this} is not cube-array`);let i=Gd(t);this._setTextureSubresources(i)}_setTextureSubresources(t){for(let i of t){let{z:r,mipLevel:o}=i;switch(i.type){case"external-image":let{image:n,flipY:s}=i;this.texture.copyExternalImage({image:n,z:r,mipLevel:o,flipY:s});break;case"texture-data":let{data:a,textureFormat:l}=i;if(l&&l!==this.texture.format)throw new Error(`${this} mip level ${o} uses format "${l}" but texture format is "${this.texture.format}"`);this.texture.writeData(a.data,{x:0,y:0,z:r,width:a.width,height:a.height,depthOrArrayLayers:1,mipLevel:o});break;default:throw new Error("Unsupported 2D mip-level payload")}}}async _loadAllData(t){let i=await qd(t.data);return{dimension:t.dimension??"2d",data:i??null}}_checkNotDestroyed(){this.destroyed&&w.warn(`${this} already destroyed`)}_checkReady(){this.isReady||w.warn(`${this} Cannot perform this operation before ready`)}};p(pa,"defaultProps",{...z.defaultProps,dimension:"2d",data:null,mipmaps:!1});var Mi=pa;function XC(e){if(!e.data)return[];let t=e.width&&e.height?{width:e.width,height:e.height}:void 0,i="format"in e?e.format:void 0;switch(e.dimension){case"1d":return $d(e.data);case"2d":return Di(0,e.data,t,i);case"3d":return Xd(e.data);case"2d-array":return jd(e.data);case"cube":return Yd(e.data);case"cube-array":return Gd(e.data);default:throw new Error(`Unhandled dimension ${e.dimension}`)}}function jC(e,t,i,r){if(t.length===0)return{subresources:t,mipLevels:1,format:r.format,hasExplicitMipChain:!1};let o=new Map;for(let d of t){let u=o.get(d.z)??[];u.push(d),o.set(d.z,u)}let n=t.some(d=>d.mipLevel>0),s=r.format,a=Number.POSITIVE_INFINITY,l=[];for(let[d,u]of o){let f=[...u].sort((A,_)=>A.mipLevel-_.mipLevel),h=f[0];if(!h||h.mipLevel!==0)throw new Error(`DynamicTexture: slice ${d} is missing mip level 0`);let m=D0(e,h);if(m.width!==i.width||m.height!==i.height)throw new Error(`DynamicTexture: slice ${d} base level dimensions ${m.width}x${m.height} do not match expected ${i.width}x${i.height}`);let x=I0(h);if(x){if(s&&s!==x)throw new Error(`DynamicTexture: slice ${d} base level format "${x}" does not match texture format "${s}"`);s=x}let S=s&&e.isTextureFormatCompressed(s)?YC(e,m.width,m.height,s):e.getMipLevelCount(m.width,m.height),y=0;for(let A=0;A<f.length;A++){let _=f[A];if(!_||_.mipLevel!==A||A>=S)break;let v=D0(e,_),P=Math.max(1,m.width>>A),T=Math.max(1,m.height>>A);if(v.width!==P||v.height!==T)break;let R=I0(_);if(R&&(s||(s=R),R!==s))break;y++,l.push(_)}a=Math.min(a,y)}let c=Number.isFinite(a)?Math.max(1,a):1;return{subresources:l.filter(d=>d.mipLevel<c),mipLevels:c,format:s,hasExplicitMipChain:n}}function I0(e){if(e.type==="texture-data")return e.textureFormat??Hd(e.data)}function D0(e,t){switch(t.type){case"external-image":return e.getExternalImageSize(t.image);case"texture-data":return{width:t.data.width,height:t.data.height};default:throw new Error("Unsupported texture subresource")}}function YC(e,t,i,r){let{blockWidth:o=1,blockHeight:n=1}=e.getTextureFormatInfo(r),s=1;for(let a=1;;a++){let l=Math.max(1,t>>a),c=Math.max(1,i>>a);if(l<o||c<n)break;s++}return s}async function qd(e){if(e=await e,Array.isArray(e))return await Promise.all(e.map(qd));if(e&&typeof e=="object"&&e.constructor===Object){let t=e,i=await Promise.all(Object.values(t).map(qd)),r=Object.keys(t),o={};for(let n=0;n<r.length;n++)o[r[n]]=i[n];return o}return e}var ri=2,GC=1e4,M0="render pipeline initialization failed",ma=class ma{constructor(t,i){p(this,"device");p(this,"id");p(this,"source");p(this,"vs");p(this,"fs");p(this,"pipelineFactory");p(this,"shaderFactory");p(this,"userData",{});p(this,"parameters");p(this,"topology");p(this,"bufferLayout");p(this,"isInstanced");p(this,"instanceCount",0);p(this,"vertexCount");p(this,"indexBuffer",null);p(this,"bufferAttributes",{});p(this,"constantAttributes",{});p(this,"bindings",{});p(this,"vertexArray");p(this,"transformFeedback",null);p(this,"pipeline");p(this,"shaderInputs");p(this,"material",null);p(this,"_uniformStore");p(this,"_attributeInfos",{});p(this,"_gpuGeometry",null);p(this,"props");p(this,"_pipelineNeedsUpdate","newly created");p(this,"_needsRedraw","initializing");p(this,"_destroyed",!1);p(this,"_lastDrawTimestamp",-1);p(this,"_bindingTable",[]);p(this,"_lastLogTime",0);p(this,"_logOpen",!1);p(this,"_drawCount",0);this.props={...ma.defaultProps,...i},i=this.props,this.id=i.id||hr("model"),this.device=t,Object.assign(this.userData,i.userData),this.material=i.material||null;let r=Object.fromEntries(this.props.modules?.map(l=>[l.name,l])||[]),o=i.shaderInputs||new ha(r,{disableWarnings:this.props.disableWarnings});this.setShaderInputs(o);let n=qC(t),s=(this.props.modules?.length>0?this.props.modules:this.shaderInputs?.getModules())||[];if(this.props.shaderLayout=Od(this.props.shaderLayout,s)||null,this.device.type==="webgpu"&&this.props.source){let{source:l,getUniforms:c,bindingTable:d}=this.props.shaderAssembler.assembleWGSLShader({platformInfo:n,...this.props,modules:s});this.source=l,this._getModuleUniforms=c,this._bindingTable=d;let u=t.getShaderLayout?.(this.source);this.props.shaderLayout=Od(this.props.shaderLayout||u||null,s)||null}else{let{vs:l,fs:c,getUniforms:d}=this.props.shaderAssembler.assembleGLSLShaderPair({platformInfo:n,...this.props,modules:s});this.vs=l,this.fs=c,this._getModuleUniforms=d,this._bindingTable=[]}this.vertexCount=this.props.vertexCount,this.instanceCount=this.props.instanceCount,this.topology=this.props.topology,this.bufferLayout=this.props.bufferLayout,this.parameters=this.props.parameters,i.geometry&&this.setGeometry(i.geometry),this.pipelineFactory=i.pipelineFactory||Jr.getDefaultPipelineFactory(this.device),this.shaderFactory=i.shaderFactory||eo.getDefaultShaderFactory(this.device),this.pipeline=this._updatePipeline(),this.vertexArray=t.createVertexArray({shaderLayout:this.pipeline.shaderLayout,bufferLayout:this.pipeline.bufferLayout}),this._gpuGeometry&&this._setGeometryAttributes(this._gpuGeometry),"isInstanced"in i&&(this.isInstanced=i.isInstanced),i.instanceCount&&this.setInstanceCount(i.instanceCount),i.vertexCount&&this.setVertexCount(i.vertexCount),i.indexBuffer&&this.setIndexBuffer(i.indexBuffer),i.attributes&&this.setAttributes(i.attributes),i.constantAttributes&&this.setConstantAttributes(i.constantAttributes),i.bindings&&this.setBindings(i.bindings),i.transformFeedback&&(this.transformFeedback=i.transformFeedback)}get[Symbol.toStringTag](){return"Model"}toString(){return`Model(${this.id})`}destroy(){this._destroyed||(this.pipelineFactory.release(this.pipeline),this.shaderFactory.release(this.pipeline.vs),this.pipeline.fs&&this.pipeline.fs!==this.pipeline.vs&&this.shaderFactory.release(this.pipeline.fs),this._uniformStore.destroy(),this._gpuGeometry?.destroy(),this._destroyed=!0)}needsRedraw(){this._getBindingsUpdateTimestamp()>this._lastDrawTimestamp&&this.setNeedsRedraw("contents of bound textures or buffers updated");let t=this._needsRedraw;return this._needsRedraw=!1,t}setNeedsRedraw(t){this._needsRedraw||(this._needsRedraw=t)}getBindingDebugTable(){return this._bindingTable}predraw(){this.updateShaderInputs(),this.pipeline=this._updatePipeline()}draw(t){let i=this._areBindingsLoading();if(i)return w.info(ri,`>>> DRAWING ABORTED ${this.id}: ${i} not loaded`)(),!1;try{t.pushDebugGroup(`${this}.predraw(${t})`),this.predraw()}finally{t.popDebugGroup()}let r,o=this.pipeline.isErrored;try{if(t.pushDebugGroup(`${this}.draw(${t})`),this._logDrawCallStart(),this.pipeline=this._updatePipeline(),o=this.pipeline.isErrored,o)w.info(ri,`>>> DRAWING ABORTED ${this.id}: ${M0}`)(),r=!1;else{let n=this._getBindings(),s=this._getBindGroups(),{indexBuffer:a}=this.vertexArray,l=a?a.byteLength/(a.indexType==="uint32"?4:2):void 0;r=this.pipeline.draw({renderPass:t,vertexArray:this.vertexArray,isInstanced:this.isInstanced,vertexCount:this.vertexCount,instanceCount:this.instanceCount,indexCount:l,transformFeedback:this.transformFeedback||void 0,bindings:n,bindGroups:s,_bindGroupCacheKeys:this._getBindGroupCacheKeys(),uniforms:this.props.uniforms,parameters:this.parameters,topology:this.topology})}}finally{t.popDebugGroup(),this._logDrawCallEnd()}return this._logFramebuffer(t),r?(this._lastDrawTimestamp=this.device.timestamp,this._needsRedraw=!1):o?this._needsRedraw=M0:this._needsRedraw="waiting for resource initialization",r}setGeometry(t){this._gpuGeometry?.destroy();let i=t&&x0(this.device,t);if(i){this.setTopology(i.topology||"triangle-list");let r=new pr(this.bufferLayout);this.bufferLayout=r.mergeBufferLayouts(i.bufferLayout,this.bufferLayout),this.vertexArray&&this._setGeometryAttributes(i)}this._gpuGeometry=i}setTopology(t){t!==this.topology&&(this.topology=t,this._setPipelineNeedsUpdate("topology"))}setBufferLayout(t){let i=new pr(this.bufferLayout);this.bufferLayout=this._gpuGeometry?i.mergeBufferLayouts(t,this._gpuGeometry.bufferLayout):t,this._setPipelineNeedsUpdate("bufferLayout"),this.pipeline=this._updatePipeline(),this.vertexArray=this.device.createVertexArray({shaderLayout:this.pipeline.shaderLayout,bufferLayout:this.pipeline.bufferLayout}),this._gpuGeometry&&this._setGeometryAttributes(this._gpuGeometry)}setParameters(t){fa(t,this.parameters,2)||(this.parameters=t,this._setPipelineNeedsUpdate("parameters"))}setInstanceCount(t){this.instanceCount=t,this.isInstanced===void 0&&t>0&&(this.isInstanced=!0),this.setNeedsRedraw("instanceCount")}setVertexCount(t){this.vertexCount=t,this.setNeedsRedraw("vertexCount")}setShaderInputs(t){this.shaderInputs=t,this._uniformStore=new ee(this.device,this.shaderInputs.modules);for(let[i,r]of Object.entries(this.shaderInputs.modules))if(_0(r)&&!this.material?.ownsModule(i)){let o=this._uniformStore.getManagedUniformBuffer(i);this.bindings[`${i}Uniforms`]=o}this.setNeedsRedraw("shaderInputs")}setMaterial(t){this.material=t,this.setNeedsRedraw("material")}updateShaderInputs(){this._uniformStore.setUniforms(this.shaderInputs.getUniformValues()),this.setBindings(this._getNonMaterialBindings(this.shaderInputs.getBindingValues())),this.setNeedsRedraw("shaderInputs")}setBindings(t){Object.assign(this.bindings,t),this.setNeedsRedraw("bindings")}setTransformFeedback(t){this.transformFeedback=t,this.setNeedsRedraw("transformFeedback")}setIndexBuffer(t){this.vertexArray.setIndexBuffer(t),this.setNeedsRedraw("indexBuffer")}setAttributes(t,i){let r=i?.disableWarnings??this.props.disableWarnings;t.indices&&w.warn(`Model:${this.id} setAttributes() - indexBuffer should be set using setIndexBuffer()`)(),this.bufferLayout=T0(this.pipeline.shaderLayout,this.bufferLayout);let o=new pr(this.bufferLayout);for(let[n,s]of Object.entries(t)){let a=o.getBufferLayout(n);if(!a){r||w.warn(`Model(${this.id}): Missing layout for buffer "${n}".`)();continue}let l=o.getAttributeNamesForBuffer(a),c=!1;for(let d of l){let u=this._attributeInfos[d];if(u){let f=this.device.type==="webgpu"?o.getBufferIndex(u.bufferName):u.location;this.vertexArray.setBuffer(f,s),c=!0}}!c&&!r&&w.warn(`Model(${this.id}): Ignoring buffer "${s.id}" for unknown attribute "${n}"`)()}this.setNeedsRedraw("attributes")}setConstantAttributes(t,i){for(let[r,o]of Object.entries(t)){let n=this._attributeInfos[r];n?this.vertexArray.setConstantWebGL(n.location,o):(i?.disableWarnings??this.props.disableWarnings)||w.warn(`Model "${this.id}: Ignoring constant supplied for unknown attribute "${r}"`)()}this.setNeedsRedraw("constants")}_areBindingsLoading(){for(let t of Object.values(this.bindings))if(t instanceof Mi&&!t.isReady)return t.id;for(let t of Object.values(this.material?.bindings||{}))if(t instanceof Mi&&!t.isReady)return t.id;return!1}_getBindings(){let t={};for(let[i,r]of Object.entries(this.bindings))r instanceof Mi?r.isReady&&(t[i]=r.texture):t[i]=r;return t}_getBindGroups(){let t=this.pipeline?.shaderLayout||this.props.shaderLayout||{bindings:[]},i=t.bindings.length?to(t,this._getBindings()):{0:this._getBindings()};if(!this.material)return i;for(let[r,o]of Object.entries(this.material.getBindingsByGroup())){let n=Number(r);i[n]={...i[n]||{},...o}}return i}_getBindGroupCacheKeys(){let t=this.material?.getBindGroupCacheKey(3);return t?{3:t}:{}}_getBindingsUpdateTimestamp(){let t=0;for(let i of Object.values(this.bindings))i instanceof vi?t=Math.max(t,i.texture.updateTimestamp):i instanceof U||i instanceof z?t=Math.max(t,i.updateTimestamp):i instanceof Mi?t=i.texture?Math.max(t,i.texture.updateTimestamp):1/0:i instanceof st||(t=Math.max(t,i.buffer.updateTimestamp));return Math.max(t,this.material?.getBindingsUpdateTimestamp()||0)}_setGeometryAttributes(t){let i={...t.attributes};for(let[r]of Object.entries(i))!this.pipeline.shaderLayout.attributes.find(o=>o.name===r)&&r!=="positions"&&delete i[r];this.vertexCount=t.vertexCount,this.setIndexBuffer(t.indices||null),this.setAttributes(t.attributes,{disableWarnings:!0}),this.setAttributes(i,{disableWarnings:this.props.disableWarnings}),this.setNeedsRedraw("geometry attributes")}_setPipelineNeedsUpdate(t){this._pipelineNeedsUpdate||(this._pipelineNeedsUpdate=t),this.setNeedsRedraw(t)}_updatePipeline(){if(this._pipelineNeedsUpdate){let t=null,i=null;this.pipeline&&(w.log(1,`Model ${this.id}: Recreating pipeline because "${this._pipelineNeedsUpdate}".`)(),t=this.pipeline.vs,i=this.pipeline.fs),this._pipelineNeedsUpdate=!1;let r=this.shaderFactory.createShader({id:`${this.id}-vertex`,stage:"vertex",source:this.source||this.vs,debugShaders:this.props.debugShaders}),o=null;this.source?o=r:this.fs&&(o=this.shaderFactory.createShader({id:`${this.id}-fragment`,stage:"fragment",source:this.source||this.fs,debugShaders:this.props.debugShaders})),this.pipeline=this.pipelineFactory.createRenderPipeline({...this.props,bindings:void 0,bufferLayout:this.bufferLayout,topology:this.topology,parameters:this.parameters,bindGroups:this._getBindGroups(),vs:r,fs:o}),this._attributeInfos=rs(this.pipeline.shaderLayout,this.bufferLayout),t&&this.shaderFactory.release(t),i&&i!==t&&this.shaderFactory.release(i)}return this.pipeline}_logDrawCallStart(){let t=w.level>3?0:GC;w.level<2||Date.now()-this._lastLogTime<t||(this._lastLogTime=Date.now(),this._logOpen=!0,w.group(ri,`>>> DRAWING MODEL ${this.id}`,{collapsed:w.level<=2})())}_logDrawCallEnd(){if(this._logOpen){let t=S0(this.pipeline.shaderLayout,this.id);w.table(ri,t)();let i=this.shaderInputs.getDebugTable();w.table(ri,i)();let r=this._getAttributeDebugTable();w.table(ri,this._attributeInfos)(),w.table(ri,r)(),w.groupEnd(ri)(),this._logOpen=!1}}_logFramebuffer(t){let i=this.device.props.debugFramebuffers;if(this._drawCount++,!i)return;let r=t.props.framebuffer;y0(t,r,{id:r?.id||`${this.id}-framebuffer`,minimap:!0})}_getAttributeDebugTable(){let t={};for(let[i,r]of Object.entries(this._attributeInfos)){let o=this.vertexArray.attributes[r.location];t[r.location]={name:i,type:r.shaderType,values:o?this._getBufferOrConstantValues(o,r.bufferDataType):"null"}}if(this.vertexArray.indexBuffer){let{indexBuffer:i}=this.vertexArray,r=i.indexType==="uint32"?new Uint32Array(i.debugData):new Uint16Array(i.debugData);t.indices={name:"indices",type:i.indexType,values:r.toString()}}return t}_getBufferOrConstantValues(t,i){let r=et.getTypedArrayConstructor(i);return(t instanceof U?new r(t.debugData):t).toString()}_getNonMaterialBindings(t){if(!this.material)return t;let i={};for(let[r,o]of Object.entries(t))this.material.ownsBinding(r)||(i[r]=o);return i}};p(ma,"defaultProps",{...tt.defaultProps,source:void 0,vs:null,fs:null,id:"unnamed",handle:void 0,userData:{},defines:{},modules:[],geometry:null,indexBuffer:null,attributes:{},constantAttributes:{},bindings:{},uniforms:{},varyings:[],isInstanced:void 0,instanceCount:0,vertexCount:0,shaderInputs:void 0,material:void 0,pipelineFactory:void 0,shaderFactory:void 0,transformFeedback:void 0,shaderAssembler:wo.getDefaultShaderAssembler(),debugShaders:void 0,disableWarnings:void 0});var re=ma;function qC(e){return{type:e.type,shaderLanguage:e.info.shadingLanguage,shaderLanguageVersion:e.info.shadingLanguageVersion,gpu:e.info.gpu,features:e.features}}var J0=Uu(F0(),1);var k0={passive:!1},Fi={capture:!0,passive:!1};function ga(e){e.stopImmediatePropagation()}function oi(e){e.preventDefault(),e.stopImmediatePropagation()}function Do(e){var t=e.document.documentElement,i=ue(e).on("dragstart.drag",oi,Fi);"onselectstart"in t?i.on("selectstart.drag",oi,Fi):(t.__noselect=t.style.MozUserSelect,t.style.MozUserSelect="none")}function Mo(e,t){var i=e.document.documentElement,r=ue(e).on("dragstart.drag",null);t&&(r.on("click.drag",oi,Fi),setTimeout(function(){r.on("click.drag",null)},0)),"onselectstart"in i?r.on("selectstart.drag",null):(i.style.MozUserSelect=i.__noselect,delete i.__noselect)}var Fo=e=>()=>e;function ko(e,{sourceEvent:t,subject:i,target:r,identifier:o,active:n,x:s,y:a,dx:l,dy:c,dispatch:d}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},subject:{value:i,enumerable:!0,configurable:!0},target:{value:r,enumerable:!0,configurable:!0},identifier:{value:o,enumerable:!0,configurable:!0},active:{value:n,enumerable:!0,configurable:!0},x:{value:s,enumerable:!0,configurable:!0},y:{value:a,enumerable:!0,configurable:!0},dx:{value:l,enumerable:!0,configurable:!0},dy:{value:c,enumerable:!0,configurable:!0},_:{value:d}})}ko.prototype.on=function(){var e=this._.on.apply(this._,arguments);return e===this._?this:e};function KC(e){return!e.ctrlKey&&!e.button}function ZC(){return this.parentNode}function QC(e,t){return t??{x:e.x,y:e.y}}function JC(){return navigator.maxTouchPoints||"ontouchstart"in this}function Kd(){var e=KC,t=ZC,i=QC,r=JC,o={},n=ci("start","drag","end"),s=0,a,l,c,d,u=0;function f(v){v.on("mousedown.drag",h).filter(r).on("touchstart.drag",S).on("touchmove.drag",y,k0).on("touchend.drag touchcancel.drag",A).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function h(v,P){if(!(d||!e.call(this,v,P))){var T=_(this,t.call(this,v,P),v,P,"mouse");T&&(ue(v.view).on("mousemove.drag",m,Fi).on("mouseup.drag",x,Fi),Do(v.view),ga(v),c=!1,a=v.clientX,l=v.clientY,T("start",v))}}function m(v){if(oi(v),!c){var P=v.clientX-a,T=v.clientY-l;c=P*P+T*T>u}o.mouse("drag",v)}function x(v){ue(v.view).on("mousemove.drag mouseup.drag",null),Mo(v.view,c),oi(v),o.mouse("end",v)}function S(v,P){if(e.call(this,v,P)){var T=v.changedTouches,R=t.call(this,v,P),D=T.length,B,F;for(B=0;B<D;++B)(F=_(this,R,v,P,T[B].identifier,T[B]))&&(ga(v),F("start",v,T[B]))}}function y(v){var P=v.changedTouches,T=P.length,R,D;for(R=0;R<T;++R)(D=o[P[R].identifier])&&(oi(v),D("drag",v,P[R]))}function A(v){var P=v.changedTouches,T=P.length,R,D;for(d&&clearTimeout(d),d=setTimeout(function(){d=null},500),R=0;R<T;++R)(D=o[P[R].identifier])&&(ga(v),D("end",v,P[R]))}function _(v,P,T,R,D,B){var F=n.copy(),W=Qe(B||T,P),k,V,b;if((b=i.call(v,new ko("beforestart",{sourceEvent:T,target:f,identifier:D,active:s,x:W[0],y:W[1],dx:0,dy:0,dispatch:F}),R))!=null)return k=b.x-W[0]||0,V=b.y-W[1]||0,function N(I,L,$){var G=W,j;switch(I){case"start":o[D]=N,j=s++;break;case"end":delete o[D],--s;case"drag":W=Qe($||L,P),j=s;break}F.call(I,v,new ko(I,{sourceEvent:L,subject:b,target:f,identifier:D,active:j,x:W[0]+k,y:W[1]+V,dx:W[0]-G[0],dy:W[1]-G[1],dispatch:F}),R)}}return f.filter=function(v){return arguments.length?(e=typeof v=="function"?v:Fo(!!v),f):e},f.container=function(v){return arguments.length?(t=typeof v=="function"?v:Fo(v),f):t},f.subject=function(v){return arguments.length?(i=typeof v=="function"?v:Fo(v),f):i},f.touchable=function(v){return arguments.length?(r=typeof v=="function"?v:Fo(!!v),f):r},f.on=function(){var v=n.on.apply(n,arguments);return v===n?f:v},f.clickDistance=function(v){return arguments.length?(u=(v=+v)*v,f):Math.sqrt(u)},f}var No=e=>()=>e;function Zd(e,{sourceEvent:t,target:i,transform:r,dispatch:o}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},target:{value:i,enumerable:!0,configurable:!0},transform:{value:r,enumerable:!0,configurable:!0},_:{value:o}})}function gt(e,t,i){this.k=e,this.x=t,this.y=i}gt.prototype={constructor:gt,scale:function(e){return e===1?this:new gt(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new gt(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var xt=new gt(1,0,0);Qd.prototype=gt.prototype;function Qd(e){for(;!e.__zoom;)if(!(e=e.parentNode))return xt;return e.__zoom}function xa(e){e.stopImmediatePropagation()}function mr(e){e.preventDefault(),e.stopImmediatePropagation()}function e2(e){return(!e.ctrlKey||e.type==="wheel")&&!e.button}function t2(){var e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,e.hasAttribute("viewBox")?(e=e.viewBox.baseVal,[[e.x,e.y],[e.x+e.width,e.y+e.height]]):[[0,0],[e.width.baseVal.value,e.height.baseVal.value]]):[[0,0],[e.clientWidth,e.clientHeight]]}function N0(){return this.__zoom||xt}function i2(e){return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*(e.ctrlKey?10:1)}function r2(){return navigator.maxTouchPoints||"ontouchstart"in this}function o2(e,t,i){var r=e.invertX(t[0][0])-i[0][0],o=e.invertX(t[1][0])-i[1][0],n=e.invertY(t[0][1])-i[0][1],s=e.invertY(t[1][1])-i[1][1];return e.translate(o>r?(r+o)/2:Math.min(0,r)||Math.max(0,o),s>n?(n+s)/2:Math.min(0,n)||Math.max(0,s))}function Sa(){var e=e2,t=t2,i=o2,r=i2,o=r2,n=[0,1/0],s=[[-1/0,-1/0],[1/0,1/0]],a=250,l=al,c=ci("start","zoom","end"),d,u,f,h=500,m=150,x=0,S=10;function y(b){b.property("__zoom",N0).on("wheel.zoom",D,{passive:!1}).on("mousedown.zoom",B).on("dblclick.zoom",F).filter(o).on("touchstart.zoom",W).on("touchmove.zoom",k).on("touchend.zoom touchcancel.zoom",V).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}y.transform=function(b,N,I,L){var $=b.selection?b.selection():b;$.property("__zoom",N0),b!==$?P(b,N,I,L):$.interrupt().each(function(){T(this,arguments).event(L).start().zoom(null,typeof N=="function"?N.apply(this,arguments):N).end()})},y.scaleBy=function(b,N,I,L){y.scaleTo(b,function(){var $=this.__zoom.k,G=typeof N=="function"?N.apply(this,arguments):N;return $*G},I,L)},y.scaleTo=function(b,N,I,L){y.transform(b,function(){var $=t.apply(this,arguments),G=this.__zoom,j=I==null?v($):typeof I=="function"?I.apply(this,arguments):I,oe=G.invert(j),q=typeof N=="function"?N.apply(this,arguments):N;return i(_(A(G,q),j,oe),$,s)},I,L)},y.translateBy=function(b,N,I,L){y.transform(b,function(){return i(this.__zoom.translate(typeof N=="function"?N.apply(this,arguments):N,typeof I=="function"?I.apply(this,arguments):I),t.apply(this,arguments),s)},null,L)},y.translateTo=function(b,N,I,L,$){y.transform(b,function(){var G=t.apply(this,arguments),j=this.__zoom,oe=L==null?v(G):typeof L=="function"?L.apply(this,arguments):L;return i(xt.translate(oe[0],oe[1]).scale(j.k).translate(typeof N=="function"?-N.apply(this,arguments):-N,typeof I=="function"?-I.apply(this,arguments):-I),G,s)},L,$)};function A(b,N){return N=Math.max(n[0],Math.min(n[1],N)),N===b.k?b:new gt(N,b.x,b.y)}function _(b,N,I){var L=N[0]-I[0]*b.k,$=N[1]-I[1]*b.k;return L===b.x&&$===b.y?b:new gt(b.k,L,$)}function v(b){return[(+b[0][0]+ +b[1][0])/2,(+b[0][1]+ +b[1][1])/2]}function P(b,N,I,L){b.on("start.zoom",function(){T(this,arguments).event(L).start()}).on("interrupt.zoom end.zoom",function(){T(this,arguments).event(L).end()}).tween("zoom",function(){var $=this,G=arguments,j=T($,G).event(L),oe=t.apply($,G),q=I==null?v(oe):typeof I=="function"?I.apply($,G):I,Ze=Math.max(oe[1][0]-oe[0][0],oe[1][1]-oe[0][1]),be=$.__zoom,He=typeof N=="function"?N.apply($,G):N,it=l(be.invert(q).concat(Ze/be.k),He.invert(q).concat(Ze/He.k));return function($e){if($e===1)$e=He;else{var rt=it($e),ki=Ze/rt[2];$e=new gt(ki,q[0]-rt[0]*ki,q[1]-rt[1]*ki)}j.zoom(null,$e)}})}function T(b,N,I){return!I&&b.__zooming||new R(b,N)}function R(b,N){this.that=b,this.args=N,this.active=0,this.sourceEvent=null,this.extent=t.apply(b,N),this.taps=0}R.prototype={event:function(b){return b&&(this.sourceEvent=b),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(b,N){return this.mouse&&b!=="mouse"&&(this.mouse[1]=N.invert(this.mouse[0])),this.touch0&&b!=="touch"&&(this.touch0[1]=N.invert(this.touch0[0])),this.touch1&&b!=="touch"&&(this.touch1[1]=N.invert(this.touch1[0])),this.that.__zoom=N,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(b){var N=ue(this.that).datum();c.call(b,this.that,new Zd(b,{sourceEvent:this.sourceEvent,target:y,type:b,transform:this.that.__zoom,dispatch:c}),N)}};function D(b,...N){if(!e.apply(this,arguments))return;var I=T(this,N).event(b),L=this.__zoom,$=Math.max(n[0],Math.min(n[1],L.k*Math.pow(2,r.apply(this,arguments)))),G=Qe(b);if(I.wheel)(I.mouse[0][0]!==G[0]||I.mouse[0][1]!==G[1])&&(I.mouse[1]=L.invert(I.mouse[0]=G)),clearTimeout(I.wheel);else{if(L.k===$)return;I.mouse=[G,L.invert(G)],ui(this),I.start()}mr(b),I.wheel=setTimeout(j,m),I.zoom("mouse",i(_(A(L,$),I.mouse[0],I.mouse[1]),I.extent,s));function j(){I.wheel=null,I.end()}}function B(b,...N){if(f||!e.apply(this,arguments))return;var I=b.currentTarget,L=T(this,N,!0).event(b),$=ue(b.view).on("mousemove.zoom",q,!0).on("mouseup.zoom",Ze,!0),G=Qe(b,I),j=b.clientX,oe=b.clientY;Do(b.view),xa(b),L.mouse=[G,this.__zoom.invert(G)],ui(this),L.start();function q(be){if(mr(be),!L.moved){var He=be.clientX-j,it=be.clientY-oe;L.moved=He*He+it*it>x}L.event(be).zoom("mouse",i(_(L.that.__zoom,L.mouse[0]=Qe(be,I),L.mouse[1]),L.extent,s))}function Ze(be){$.on("mousemove.zoom mouseup.zoom",null),Mo(be.view,L.moved),mr(be),L.event(be).end()}}function F(b,...N){if(e.apply(this,arguments)){var I=this.__zoom,L=Qe(b.changedTouches?b.changedTouches[0]:b,this),$=I.invert(L),G=I.k*(b.shiftKey?.5:2),j=i(_(A(I,G),L,$),t.apply(this,N),s);mr(b),a>0?ue(this).transition().duration(a).call(P,j,L,b):ue(this).call(y.transform,j,L,b)}}function W(b,...N){if(e.apply(this,arguments)){var I=b.touches,L=I.length,$=T(this,N,b.changedTouches.length===L).event(b),G,j,oe,q;for(xa(b),j=0;j<L;++j)oe=I[j],q=Qe(oe,this),q=[q,this.__zoom.invert(q),oe.identifier],$.touch0?!$.touch1&&$.touch0[2]!==q[2]&&($.touch1=q,$.taps=0):($.touch0=q,G=!0,$.taps=1+!!d);d&&(d=clearTimeout(d)),G&&($.taps<2&&(u=q[0],d=setTimeout(function(){d=null},h)),ui(this),$.start())}}function k(b,...N){if(this.__zooming){var I=T(this,N).event(b),L=b.changedTouches,$=L.length,G,j,oe,q;for(mr(b),G=0;G<$;++G)j=L[G],oe=Qe(j,this),I.touch0&&I.touch0[2]===j.identifier?I.touch0[0]=oe:I.touch1&&I.touch1[2]===j.identifier&&(I.touch1[0]=oe);if(j=I.that.__zoom,I.touch1){var Ze=I.touch0[0],be=I.touch0[1],He=I.touch1[0],it=I.touch1[1],$e=($e=He[0]-Ze[0])*$e+($e=He[1]-Ze[1])*$e,rt=(rt=it[0]-be[0])*rt+(rt=it[1]-be[1])*rt;j=A(j,Math.sqrt($e/rt)),oe=[(Ze[0]+He[0])/2,(Ze[1]+He[1])/2],q=[(be[0]+it[0])/2,(be[1]+it[1])/2]}else if(I.touch0)oe=I.touch0[0],q=I.touch0[1];else return;I.zoom("touch",i(_(j,oe,q),I.extent,s))}}function V(b,...N){if(this.__zooming){var I=T(this,N).event(b),L=b.changedTouches,$=L.length,G,j;for(xa(b),f&&clearTimeout(f),f=setTimeout(function(){f=null},h),G=0;G<$;++G)j=L[G],I.touch0&&I.touch0[2]===j.identifier?delete I.touch0:I.touch1&&I.touch1[2]===j.identifier&&delete I.touch1;if(I.touch1&&!I.touch0&&(I.touch0=I.touch1,delete I.touch1),I.touch0)I.touch0[1]=this.__zoom.invert(I.touch0[0]);else if(I.end(),I.taps===2&&(j=Qe(j,this),Math.hypot(u[0]-j[0],u[1]-j[1])<S)){var oe=ue(this).on("dblclick.zoom");oe&&oe.apply(this,arguments)}}}return y.wheelDelta=function(b){return arguments.length?(r=typeof b=="function"?b:No(+b),y):r},y.filter=function(b){return arguments.length?(e=typeof b=="function"?b:No(!!b),y):e},y.touchable=function(b){return arguments.length?(o=typeof b=="function"?b:No(!!b),y):o},y.extent=function(b){return arguments.length?(t=typeof b=="function"?b:No([[+b[0][0],+b[0][1]],[+b[1][0],+b[1][1]]]),y):t},y.scaleExtent=function(b){return arguments.length?(n[0]=+b[0],n[1]=+b[1],y):[n[0],n[1]]},y.translateExtent=function(b){return arguments.length?(s[0][0]=+b[0][0],s[1][0]=+b[1][0],s[0][1]=+b[0][1],s[1][1]=+b[1][1],y):[[s[0][0],s[0][1]],[s[1][0],s[1][1]]]},y.constrain=function(b){return arguments.length?(i=b,y):i},y.duration=function(b){return arguments.length?(a=+b,y):a},y.interpolate=function(b){return arguments.length?(l=b,y):l},y.on=function(){var b=c.on.apply(c,arguments);return b===c?y:b},y.clickDistance=function(b){return arguments.length?(x=(b=+b)*b,y):Math.sqrt(x)},y.tapDistance=function(b){return arguments.length?(S=+b,y):S},y}var iu=.001,ba=64,n2=4,va=2,ru=class{constructor(){this.pointsTextureSize=0,this.linksTextureSize=0,this.alpha=1,this.transform=Mt.create(),this.screenSize=[0,0],this.mousePosition=[0,0],this.mousePosition3D=[0,0,0],this.dragPlanePoint3D=void 0,this.screenMousePosition=[0,0],this.searchArea=[[0,0],[0,0]],this.isSimulationRunning=!1,this.simulationProgress=0,this.maxPointSize=ba,this.hoveredPoint=void 0,this.focusedPoint=void 0,this.draggingPointIndex=void 0,this.hoveredLinkIndex=void 0,this.adjustedSpaceSize=Ft.spaceSize,this.spaceDimensions=2,this.viewProjection3D=void 0,this.depthFadeRange=[0,1],this.isSpaceKeyPressed=!1,this.webglMaxTextureSize=16384,this.hoveredPointRingColor=[1,1,1,d2],this.focusedPointRingColor=[1,1,1,u2],this.outlinedPointRingColor=[1,1,1,1],this.highlightedPointSet=void 0,this.outlinedPointSet=void 0,this.hoveredLinkColor=[-1,-1,-1,-1],this.greyoutPointColor=[-1,-1,-1,-1],this.isDarkenGreyout=!1,this.isLinkHoveringEnabled=!1,this.alphaTarget=0,this.scalePointX=lr(),this.scalePointY=lr(),this.random=new Pd,this._backgroundColor=[0,0,0,0],this.alphaDecay=t=>1-Math.pow(iu,1/t)}get backgroundColor(){return this._backgroundColor}get is3D(){return this.spaceDimensions===3}get transformationMatrix4x4(){if(this.is3D&&this.viewProjection3D)return this.viewProjection3D;let t=this.transform;if(t.length!==9)throw new Error(`Transform must be a 9-element array (3x3 matrix), got ${t.length} elements`);return[t[0],t[1],t[2],0,t[3],t[4],t[5],0,t[6],t[7],t[8],0,0,0,0,1]}set backgroundColor(t){this._backgroundColor=t;let i=a2(t[0],t[1],t[2]);document.documentElement.style.setProperty("--cosmosgl-attribution-color",i>.65?"black":"white"),document.documentElement.style.setProperty("--cosmosgl-error-message-color",i>.65?"black":"white"),this.div&&(this.div.style.backgroundColor=`rgba(${t[0]*255}, ${t[1]*255}, ${t[2]*255}, ${t[3]})`),this.isDarkenGreyout=i<.65}addRandomSeed(t){this.random=this.random.clone(t)}getRandomFloat(t,i){return this.random.float(t,i)}adjustSpaceSize(t,i){(t<=0||!isFinite(t))&&(console.error(`Invalid spaceSize value: ${t}. Using default value of ${Ft.spaceSize}`),t=Ft.spaceSize);let r=2;if(t<r&&(console.warn(`spaceSize (${t}) is too small. Using minimum value of ${r}`),t=r),!Number.isFinite(i)||i<=0||i<r){console.warn(`Invalid webglMaxTextureSize: ${i}. Using configSpaceSize without WebGL limit adjustment.`),this.adjustedSpaceSize=t;return}t>=i?(this.adjustedSpaceSize=Math.max(i/2,r),console.warn(`The \`spaceSize\` has been reduced to ${this.adjustedSpaceSize} due to WebGL limits`)):this.adjustedSpaceSize=t}setWebGLMaxTextureSize(t){this.webglMaxTextureSize=t}updateScreenSize(t,i){let{adjustedSpaceSize:r}=this;this.screenSize=[t,i],this.scalePointX.domain([0,r]).range([(t-r)/2,(t+r)/2]),this.scalePointY.domain([r,0]).range([(i-r)/2,(i+r)/2])}scaleX(t){return this.scalePointX(t)}scaleY(t){return this.scalePointY(t)}setHoveredPointRingColor(t){let i=Lt(t);this.hoveredPointRingColor[0]=i[0],this.hoveredPointRingColor[1]=i[1],this.hoveredPointRingColor[2]=i[2]}setFocusedPointRingColor(t){let i=Lt(t);this.focusedPointRingColor[0]=i[0],this.focusedPointRingColor[1]=i[1],this.focusedPointRingColor[2]=i[2]}setOutlinedPointRingColor(t){let i=Lt(t);this.outlinedPointRingColor[0]=i[0],this.outlinedPointRingColor[1]=i[1],this.outlinedPointRingColor[2]=i[2],this.outlinedPointRingColor[3]=i[3]}setHighlightedPointSet(t){this.highlightedPointSet=t?new Set(t):void 0}setOutlinedPointSet(t){this.outlinedPointSet=t?new Set(t):void 0}setGreyoutPointColor(t){if(t===void 0){this.greyoutPointColor=[-1,-1,-1,-1];return}let i=Lt(t);this.greyoutPointColor[0]=i[0],this.greyoutPointColor[1]=i[1],this.greyoutPointColor[2]=i[2],this.greyoutPointColor[3]=i[3]}updateLinkHoveringEnabled(t){this.isLinkHoveringEnabled=!!(t.onLinkClick||t.onLinkContextMenu||t.onLinkMouseOver||t.onLinkMouseOut),this.isLinkHoveringEnabled||(this.hoveredLinkIndex=void 0)}setHoveredLinkColor(t){if(t===void 0){this.hoveredLinkColor=[-1,-1,-1,-1];return}let i=Lt(t);this.hoveredLinkColor[0]=i[0],this.hoveredLinkColor[1]=i[1],this.hoveredLinkColor[2]=i[2],this.hoveredLinkColor[3]=i[3]}setFocusedPoint(t){t!==void 0?this.focusedPoint={index:t}:this.focusedPoint=void 0}addAlpha(t){return(this.alphaTarget-this.alpha)*this.alphaDecay(t)}};var s2=e=>Array.isArray(e);function Lt(e){let t;if(s2(e))t=e;else{let i=Xe(e),r=i?.rgb();t=[(r?.r??0)/255,(r?.g??0)/255,(r?.b??0)/255,i?.opacity??1]}return t}function a2(e,t,i){return .2126*e+.7152*t+.0722*i}function Ke(e,t,i=0,r=0,o,n){return e.readPixelsToArrayWebGL(t,{sourceX:i,sourceY:r,sourceWidth:o,sourceHeight:n})}function B0(e){let t=[];for(let i=0;i<e.length;i+=4)e[i]!==0&&t.push(i/4);return t}function O0(e,t){switch(e.info.type){case"webgl":{let i=e.gl,r=i.getParameter(i.ALIASED_POINT_SIZE_RANGE);return(r?.[1]??ba)/t}case"webgpu":return ba/t;default:return ba/t}}function xr(e,t,i){return Math.min(Math.max(e,t),i)}function ni(e){return e!=null&&!Number.isNaN(e)}function zo(e,t,i=2){let r=t*i;return Number.isNaN(e[r])||Number.isNaN(e[r+1])?!0:i===3&&Number.isNaN(e[r+2])}function l2(e,t){return Wg.sanitize(e,{ALLOWED_TAGS:["a","b","i","em","strong","span","div","p","br"],ALLOWED_ATTR:["href","target","class","id","style"],ALLOW_DATA_ATTR:!1,...t})}var eS=(e=>(e[e.Circle=0]="Circle",e[e.Square=1]="Square",e[e.Triangle=2]="Triangle",e[e.Diamond=3]="Diamond",e[e.Pentagon=4]="Pentagon",e[e.Hexagon=5]="Hexagon",e[e.Star=6]="Star",e[e.Cross=7]="Cross",e[e.None=8]="None",e))(eS||{}),tS=(e=>(e[e.Solid=0]="Solid",e[e.Dashed=1]="Dashed",e[e.Dotted=2]="Dotted",e))(tS||{}),ou=class{constructor(t){this.inputPointDimensions=2,this.inputClusterPositionsDimensions=2,this.pointDimensions=2,this.sourcePointsNumber=0,this.targetPointsNumber=0,this.clusterPositionsDimensions=2,this._config=t}get pointsNumber(){return this.pointPositions&&Math.trunc(this.pointPositions.length/this.pointDimensions)}get defaultRgba(){return this._defaultRgba??(this._defaultRgba=Lt(this._config.pointDefaultColor)),this._defaultRgba}get linksNumber(){return this.links&&Math.trunc(this.links.length/2)}hasPointAbsenceChanged(){let t=this.pointPositions,i=this.inputPointPositions;if(!t||!i||t===i)return!1;let r=this.pointDimensions,o=this.inputPointDimensions,n=Math.min(t.length/r,i.length/o);for(let s=0;s<n;s++)if(zo(t,s,r)!==zo(i,s,o))return!0;return!1}isPointAbsent(t){return this.pointPositions?zo(this.pointPositions,t,this.pointDimensions):!1}updatePoints(){this.pointPositions!==this.inputPointPositions&&(this.sourcePointsNumber=this.pointPositions?Math.trunc(this.pointPositions.length/this.pointDimensions):0,this.pointPositions=this.inputPointPositions,this.pointDimensions=this.inputPointDimensions,this.targetPointsNumber=this.pointPositions?Math.trunc(this.pointPositions.length/this.pointDimensions):0)}updatePointColor(){if(this.pointsNumber===void 0){this.pointColors=void 0;return}this._defaultRgba=void 0,this.inputPointColors===void 0||this.inputPointColors.length/4!==this.pointsNumber?this.pointColors=new Float32Array(this.pointsNumber*4).fill(NaN):this.pointColors=this.inputPointColors}getResolvedPointColorChannel(t,i){var r;let o=(r=this.pointColors)==null?void 0:r[t*4+i];return ni(o)?o:this.isPointAbsent(t)?Ta:this.defaultRgba[i]}updatePointSize(){if(this.pointsNumber===void 0){this.pointSizes=void 0;return}this.inputPointSizes===void 0||this.inputPointSizes.length!==this.pointsNumber?this.pointSizes=new Float32Array(this.pointsNumber).fill(NaN):this.pointSizes=this.inputPointSizes}getResolvedPointSize(t){var i;let r=(i=this.pointSizes)==null?void 0:i[t];return ni(r)?r:this.isPointAbsent(t)?su:this._config.pointDefaultSize}updatePointShape(){if(this.pointsNumber===void 0){this.pointShapes=void 0;return}let{pointDefaultShape:t}=this._config,i=typeof t=="string"?Number(t):t,r=Number.isInteger(i)&&i>=0&&i<=8?i:Ft.pointDefaultShape;if(this.inputPointShapes===void 0||this.inputPointShapes.length!==this.pointsNumber)this.pointShapes=new Float32Array(this.pointsNumber).fill(r);else{this.pointShapes=new Float32Array(this.inputPointShapes);let o=this.pointShapes;for(let n=0;n<o.length;n++){let s=o[n]??-1;(!Number.isInteger(s)||s<0||s>8)&&(o[n]=r)}}}updatePointImageIndices(){if(this.pointsNumber===void 0){this.pointImageIndices=void 0;return}if(this.inputPointImageIndices===void 0||this.inputPointImageIndices.length!==this.pointsNumber)this.pointImageIndices=new Float32Array(this.pointsNumber).fill(-1);else{let t=new Float32Array(this.inputPointImageIndices);for(let i=0;i<t.length;i++){let r=t[i],o=r===void 0?NaN:r;!Number.isFinite(o)||o<0?t[i]=-1:t[i]=Math.trunc(o)}this.pointImageIndices=t}}updatePointImageSizes(){if(this.pointsNumber===void 0){this.pointImageSizes=void 0;return}if(this.inputPointImageSizes===void 0||this.inputPointImageSizes.length!==this.pointsNumber){this.pointImageSizes=new Float32Array(this.pointsNumber);for(let t=0;t<this.pointsNumber;t++)this.pointImageSizes[t]=this.getResolvedPointSize(t)}else{this.pointImageSizes=new Float32Array(this.inputPointImageSizes);for(let t=0;t<this.pointImageSizes.length;t++)ni(this.pointImageSizes[t])||(this.pointImageSizes[t]=this.getResolvedPointSize(t))}}updateLinks(){this.links=this.inputLinks}updateLinkColor(){if(this.linksNumber===void 0){this.linkColors=void 0;return}let t=Lt(this._config.linkDefaultColor);if(this.inputLinkColors===void 0||this.inputLinkColors.length/4!==this.linksNumber){this.linkColors=new Float32Array(this.linksNumber*4);for(let i=0;i<this.linkColors.length/4;i++)this.linkColors[i*4]=t[0],this.linkColors[i*4+1]=t[1],this.linkColors[i*4+2]=t[2],this.linkColors[i*4+3]=t[3]}else{this.linkColors=this.inputLinkColors;for(let i=0;i<this.linkColors.length/4;i++)ni(this.linkColors[i*4])||(this.linkColors[i*4]=t[0]),ni(this.linkColors[i*4+1])||(this.linkColors[i*4+1]=t[1]),ni(this.linkColors[i*4+2])||(this.linkColors[i*4+2]=t[2]),ni(this.linkColors[i*4+3])||(this.linkColors[i*4+3]=t[3])}}updateLinkWidth(){if(this.linksNumber===void 0){this.linkWidths=void 0;return}let t=this._config.linkDefaultWidth;if(this.inputLinkWidths===void 0||this.inputLinkWidths.length!==this.linksNumber)this.linkWidths=new Float32Array(this.linksNumber).fill(t);else{this.linkWidths=this.inputLinkWidths;for(let i=0;i<this.linkWidths.length;i++)ni(this.linkWidths[i])||(this.linkWidths[i]=t)}}updateLinkStyles(){if(this.linksNumber===void 0){this.linkStyles=void 0;return}let{linkDefaultStyle:t}=this._config,i=typeof t=="string"?Number(t):t,r=Number.isInteger(i)&&i>=0&&i<=2?i:Ft.linkDefaultStyle;if(this.inputLinkStyles===void 0||this.inputLinkStyles.length!==this.linksNumber)this.linkStyles=new Float32Array(this.linksNumber).fill(r);else{this.linkStyles=new Float32Array(this.inputLinkStyles);let o=this.linkStyles;for(let n=0;n<o.length;n++){let s=o[n]??-1;(!Number.isInteger(s)||s<0||s>2)&&(o[n]=r)}}}updateArrows(){if(this.linksNumber===void 0){this.linkArrows=void 0;return}let t=this._config.linkDefaultArrows;this.linkArrowsBoolean===void 0||this.linkArrowsBoolean.length!==this.linksNumber?this.linkArrows=new Array(this.linksNumber).fill(+t):this.linkArrows=this.linkArrowsBoolean.map(i=>+i)}updateLinkStrength(){this.linksNumber===void 0&&(this.linkStrength=void 0),this.inputLinkStrength===void 0||this.inputLinkStrength.length!==this.linksNumber?this.linkStrength=void 0:this.linkStrength=this.inputLinkStrength}updateClusters(){if(this.pointsNumber===void 0){this.pointClusters=void 0,this.clusterPositions=void 0;return}this.inputPointClusters===void 0||this.inputPointClusters.length!==this.pointsNumber?this.pointClusters=void 0:this.pointClusters=this.inputPointClusters,this.inputClusterPositions===void 0?this.clusterPositions=void 0:(this.clusterPositions=this.inputClusterPositions,this.clusterPositionsDimensions=this.inputClusterPositionsDimensions),this.inputClusterStrength===void 0||this.inputClusterStrength.length!==this.pointsNumber?this.clusterStrength=void 0:this.clusterStrength=this.inputClusterStrength}update(){this.updatePoints(),this.updatePointColor(),this.updatePointSize(),this.updatePointShape(),this.updatePointImageIndices(),this.updatePointImageSizes(),this.updateLinks(),this.updateLinkColor(),this.updateLinkWidth(),this.updateArrows(),this.updateLinkStyles(),this.updateLinkStrength(),this.updateClusters(),this._createAdjacencyLists(),this._calculateDegrees()}getNeighboringPointIndices(t){var i,r;let o=Array.isArray(t)?t:[t],n=this.pointsNumber??0,s=new Set;for(let a of o)if(!(a<0||a>=n)){for(let[l]of((i=this.sourceIndexToTargetIndices)==null?void 0:i[a])??[])s.add(l);for(let[l]of((r=this.targetIndexToSourceIndices)==null?void 0:r[a])??[])s.add(l)}return[...s]}getConnectedLinkIndices(t){var i;let r=Array.isArray(t)?t:[t],o=this.pointsNumber??0,n=new Set(r),s=new Set;for(let a of n)if(!(a<0||a>=o))for(let[l,c]of((i=this.sourceIndexToTargetIndices)==null?void 0:i[a])??[])n.has(l)&&s.add(c);return[...s]}getConnectedPointIndices(t){let i=Array.isArray(t)?t:[t],r=new Set;if(this.links===void 0)return[];let o=this.linksNumber??0;for(let n of i){if(n<0||n>=o)continue;let s=this.links[n*2],a=this.links[n*2+1];s!==void 0&&r.add(s),a!==void 0&&r.add(a)}return[...r]}_createAdjacencyLists(){var t,i;if(this.linksNumber===void 0||this.links===void 0){this.sourceIndexToTargetIndices=void 0,this.targetIndexToSourceIndices=void 0;return}this.sourceIndexToTargetIndices=new Array(this.pointsNumber).fill(void 0),this.targetIndexToSourceIndices=new Array(this.pointsNumber).fill(void 0);for(let r=0;r<this.linksNumber;r++){let o=this.links[r*2],n=this.links[r*2+1];o!==void 0&&n!==void 0&&(this.sourceIndexToTargetIndices[o]===void 0&&(this.sourceIndexToTargetIndices[o]=[]),(t=this.sourceIndexToTargetIndices[o])==null||t.push([n,r]),this.targetIndexToSourceIndices[n]===void 0&&(this.targetIndexToSourceIndices[n]=[]),(i=this.targetIndexToSourceIndices[n])==null||i.push([o,r]))}}_calculateDegrees(){var t,i,r,o;if(this.pointsNumber===void 0){this.degree=void 0,this.inDegree=void 0,this.outDegree=void 0;return}this.degree=new Array(this.pointsNumber).fill(0),this.inDegree=new Array(this.pointsNumber).fill(0),this.outDegree=new Array(this.pointsNumber).fill(0);for(let n=0;n<this.pointsNumber;n++)this.inDegree[n]=((i=(t=this.targetIndexToSourceIndices)==null?void 0:t[n])==null?void 0:i.length)??0,this.outDegree[n]=((o=(r=this.sourceIndexToTargetIndices)==null?void 0:r[n])==null?void 0:o.length)??0,this.degree[n]=(this.inDegree[n]??0)+(this.outDegree[n]??0)}},me=(e=>(e.Positions="positions",e.PointColors="pointColors",e.PointSizes="pointSizes",e.LinkColors="linkColors",e.LinkWidths="linkWidths",e))(me||{}),iS=(e=>(e.Linear="linear",e.QuadIn="quad-in",e.QuadOut="quad-out",e.QuadInOut="quad-in-out",e.CubicIn="cubic-in",e.CubicOut="cubic-out",e.CubicInOut="cubic-in-out",e.SinIn="sin-in",e.SinOut="sin-out",e.SinInOut="sin-in-out",e.ExpIn="exp-in",e.ExpOut="exp-out",e.ExpInOut="exp-in-out",e.CircleIn="circle-in",e.CircleOut="circle-out",e.CircleInOut="circle-in-out",e))(iS||{}),c2={linear:Tn,"quad-in":_n,"quad-out":Pn,"quad-in-out":gi,"cubic-in":ll,"cubic-out":cl,"cubic-in-out":$i,"sin-in":dl,"sin-out":ul,"sin-in-out":Cn,"exp-in":fl,"exp-out":hl,"exp-in-out":An,"circle-in":pl,"circle-out":ml,"circle-in-out":wn},nu=class{constructor(t){this.progress=1,this.startTime=0,this.pendingProperties=new Set,this.activeProperties=new Set,this.activeDuration=0,this.config=t}get duration(){return this.overrideDuration??this.config.transitionDuration}get isPending(){return this.pendingProperties.size>0}get isActive(){return this.activeProperties.size>0}setDurationOverride(t){this.overrideDuration=t!==void 0&&Number.isFinite(t)?t:void 0}isPendingFor(t){return this.pendingProperties.has(t)}isActiveFor(t){return this.activeProperties.has(t)}queue(t){this.pendingProperties.add(t)}dequeue(t){this.pendingProperties.delete(t)}start(){var t,i,r,o;let n=this.duration;if(this.overrideDuration=void 0,!!this.isPending){if(n<=0){let s=this.isActive;this.pendingProperties.clear(),this.clearActiveCycle(),s&&((i=(t=this.config).onTransitionEnd)==null||i.call(t,!0));return}this.isActive&&this.end(!0),this.activeDuration=n,this.startTime=performance.now(),this.progress=0,this.activeProperties=new Set(this.pendingProperties),this.pendingProperties.clear(),(o=(r=this.config).onTransitionStart)==null||o.call(r)}}step(){var t,i;if(!this.isActive)return;let r=this.activeDuration;if(r<=0){this.end(!0);return}let o=Math.min((performance.now()-this.startTime)/r,1),n=this.applyEasing(o);this.progress=n,(i=(t=this.config).onTransition)==null||i.call(t,n),o>=1&&this.end(!1)}end(t){var i,r;this.isActive&&(this.clearActiveCycle(),(r=(i=this.config).onTransitionEnd)==null||r.call(i,t))}abort(){this.pendingProperties.clear(),this.overrideDuration=void 0,this.clearActiveCycle()}applyEasing(t){return(c2[this.config.transitionEasing]??Tn)(t)}clearActiveCycle(){this.startTime=0,this.progress=1,this.activeProperties.clear()}},Ft={enableSimulation:!0,transitionDuration:800,transitionEasing:iS.CubicInOut,backgroundColor:"#222222",spaceSize:4096,spaceDimensions:2,pointDefaultColor:"#b3b3b3",pointDefaultSize:4,pointDefaultShape:eS.Circle,pointOpacity:1,pointGreyoutOpacity:void 0,pointGreyoutColor:void 0,pointSizeScale:1,pointOcclusionCulling:!0,pointDepthFade:.4,pointSphereShading:!1,scalePointsOnZoom:!1,hoveredPointCursor:"auto",renderHoveredPointRing:!1,hoveredPointRingColor:"white",focusedPointRingColor:"white",focusedPointIndex:void 0,highlightedPointIndices:void 0,outlinedPointIndices:void 0,outlinedPointRingColor:"white",renderLinks:!0,linkDefaultColor:"#666666",linkDefaultWidth:1,linkDefaultStyle:tS.Solid,linkDashLength:8,linkDashGap:4,linkColorInterpolateFromEndpoints:!1,linkOpacity:1,linkGreyoutOpacity:.1,linkWidthScale:1,scaleLinksOnZoom:!1,linkBlending:!0,curvedLinks:!1,curvedLinkSegments:19,curvedLinkWeight:.8,curvedLinkControlPointDistance:.5,linkDefaultArrows:!1,linkArrowsSizeScale:1,linkVisibilityDistanceRange:[50,150],linkVisibilityMinTransparency:.25,hoveredLinkCursor:"auto",hoveredLinkColor:void 0,hoveredLinkWidthIncrease:5,highlightedLinkIndices:void 0,focusedLinkIndex:void 0,focusedLinkWidthIncrease:5,simulationDecay:5e3,simulationGravity:.25,simulationCenter:0,simulationRepulsion:1,simulationRepulsionTheta:1.15,simulationLinkSpring:1,simulationLinkDistance:10,simulationLinkDistRandomVariationRange:[1,1.2],simulationFriction:.85,simulationCluster:.1,simulationCollision:0,simulationCollisionRadius:void 0,simulationCollisionPadding:0,simulationCollisionIterations:1,simulationAlphaOnDrag:.3,onSimulationStart:void 0,onSimulationTick:void 0,onSimulationEnd:void 0,onSimulationPause:void 0,onSimulationUnpause:void 0,onTransitionStart:void 0,onTransition:void 0,onTransitionEnd:void 0,onClick:void 0,onPointClick:void 0,onLinkClick:void 0,onBackgroundClick:void 0,onContextMenu:void 0,onPointContextMenu:void 0,onLinkContextMenu:void 0,onBackgroundContextMenu:void 0,onMouseMove:void 0,onPointMouseOver:void 0,onPointMouseOut:void 0,onLinkMouseOver:void 0,onLinkMouseOut:void 0,onZoomStart:void 0,onZoom:void 0,onZoomEnd:void 0,onDragStart:void 0,onDrag:void 0,onDragEnd:void 0,showFPSMonitor:!1,pixelRatio:typeof window<"u"&&window.devicePixelRatio||2,enableZoom:!0,enableSimulationDuringZoom:!1,initialZoomLevel:void 0,enableDrag:!1,fitViewOnInit:!0,fitViewDelay:250,fitViewPadding:.1,fitViewDuration:250,fitViewByPointsInRect:void 0,fitViewByPointIndices:void 0,pointSamplingDistance:100,linkSamplingDistance:100,randomSeed:void 0,rescalePositions:void 0,attribution:"",cameraFov:45,cameraNear:void 0,cameraFar:void 0,cameraInitialPosition:void 0},d2=.7,u2=.95,su=0,Ta=0;function rS(){let e={};for(let[t,i]of Object.entries(Ft))e[t]=Array.isArray(i)?[...i]:i;return e}function f2(e){Object.assign(e,rS())}function Jd(e,t,i=!1){let r={};for(let[o,n]of Object.entries(t))if(n!==void 0)r[o]=n;else if(i){let s=Ft[o];r[o]=Array.isArray(s)?[...s]:s}Object.assign(e,r)}var kt=class{constructor(t,i,r,o,n){this._debugRandomNumber=Math.floor(Math.random()*1e3),this.device=t,this.config=i,this.store=r,this.data=o,n&&(this.points=n)}},h2=`#version 300 es
precision highp float;

in vec4 rgba;
out vec4 fragColor;

void main() {
  fragColor = rgba;
}`,p2=`#version 300 es
precision highp float;

uniform sampler2D positionsTexture;
uniform sampler2D exitTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform calculateCentermassUniforms {
  float pointsTextureSize;
} calculateCentermass;

#define pointsTextureSize calculateCentermass.pointsTextureSize
#else
uniform float pointsTextureSize;
#endif

in vec2 pointIndices;

out vec4 rgba;

void main() {
  rgba = vec4(0.0);

  // Absent points must not contribute to the centroid \u2014 a NaN position would
  // poison the sum and break the force for every point. (exit.G = current absence)
  vec4 exitStatus = texture(exitTexture, (pointIndices + 0.5) / pointsTextureSize);
  if (exitStatus.g > 0.5) {
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    gl_PointSize = 0.0;
    return;
  }

  vec4 pointPosition = texture(positionsTexture, (pointIndices + 0.5) / pointsTextureSize);
  // Additive blend accumulates: [sum(x), sum(y), count, sum(z)].
  // z lives in the position alpha channel and is 0 in 2D mode.
  rgba = vec4(pointPosition.xy, 1.0, pointPosition.a);

  gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
  gl_PointSize = 1.0;
}
`,m2=`#version 300 es
precision highp float;

uniform sampler2D positionsTexture;
uniform sampler2D centermassTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform forceCenterUniforms {
  float centerForce;
  float alpha;
} forceCenter;

#define centerForce forceCenter.centerForce
#define alpha forceCenter.alpha
#else
uniform float centerForce;
uniform float alpha;
#endif

in vec2 textureCoords;
out vec4 fragColor;

void main() {
  vec4 pointPosition = texture(positionsTexture, textureCoords);
  vec4 velocity = vec4(0.0);
  vec4 centermassValues = texture(centermassTexture, vec2(0.0));

  #ifdef SPACE_3D
  // Centermass accumulates [sum(x), sum(y), count, sum(z)]; z velocity goes to blue.
  vec3 centermassPosition = vec3(centermassValues.xy, centermassValues.a) / centermassValues.b;
  vec3 position = vec3(pointPosition.xy, pointPosition.a);
  vec3 distVector = centermassPosition - position;
  float dist = length(distVector);
  if (dist > 0.0) {
    float addV = alpha * centerForce * dist * 0.01;
    velocity.rgb += addV * (distVector / dist);
  }
  #else
  vec2 centermassPosition = centermassValues.xy / centermassValues.b;
  vec2 distVector = centermassPosition - pointPosition.xy;
  float dist = sqrt(dot(distVector, distVector));
  if (dist > 0.0) {
    float angle = atan(distVector.y, distVector.x);
    float addV = alpha * centerForce * dist * 0.01;
    velocity.rg += addV * vec2(cos(angle), sin(angle));
  }
  #endif

  fragColor = velocity;
}`;function Uo(e){let t=new Float32Array(e*e*2);for(let i=0;i<e;i++)for(let r=0;r<e;r++){let o=i*e*2+r*2;t[o+0]=r,t[o+1]=i}return t}function z0(e,t,i){return!t||t.byteLength!==i.byteLength?(t&&!t.destroyed&&t.destroy(),e.createBuffer({data:i,usage:U.VERTEX|U.COPY_DST})):(t.write(i),t)}function _a(e,t,i,r,o,n){let s=o?o.length/n:0,a=t.length/n;if(s===a&&i&&!i.destroyed&&r&&!r.destroyed){let d=r,u=i;return u.write(t),{source:d,target:u,previous:new Float32Array(t)}}let l=new Float32Array(t.length),c=Math.min(s,a);for(let d=0;d<c*n;d+=1)l[d]=o?.[d]??t[d]??0;for(let d=c*n;d<t.length;d+=1)l[d]=t[d]??0;return i&&!i.destroyed&&i.destroy(),r&&!r.destroyed&&r.destroy(),{source:e.createBuffer({data:l,usage:U.VERTEX|U.COPY_DST}),target:e.createBuffer({data:t,usage:U.VERTEX|U.COPY_DST}),previous:new Float32Array(t)}}function Q(e,t){let i=Ee.getInfo(e);return t*(i.bytesPerPixel??0)}var Ne=`#version 300 es
#ifdef GL_ES
precision highp float;
#endif

in vec2 vertexCoord; // Vertex coordinates in normalized device coordinates
out vec2 textureCoords; // Texture coordinates to pass to the fragment shader

void main() {
    // Convert vertex coordinates from [-1, 1] range to [0, 1] range for texture sampling
    textureCoords = (vertexCoord + 1.0) / 2.0;
    gl_Position = vec4(vertexCoord, 0, 1);
}
`,Pa=class extends kt{constructor(){super(...arguments),this.programsSpaceDimensions=2}create(){var t;let{device:i,store:r}=this,{pointsTextureSize:o}=r;if(o){if(this.centermassTexture||(this.centermassTexture=i.createTexture({width:1,height:1,format:"rgba32float",usage:z.SAMPLE|z.RENDER|z.COPY_DST})),this.centermassTexture.copyImageData({data:new Float32Array(4).fill(0),bytesPerRow:Q("rgba32float",1),mipLevel:0,x:0,y:0}),this.centermassFbo||(this.centermassFbo=i.createFramebuffer({width:1,height:1,colorAttachments:[this.centermassTexture]})),!this.pointIndices||this.previousPointsTextureSize!==r.pointsTextureSize){this.pointIndices&&!this.pointIndices.destroyed&&this.pointIndices.destroy();let n=Uo(r.pointsTextureSize);this.pointIndices=i.createBuffer({data:n,usage:U.VERTEX|U.COPY_DST}),(t=this.calculateCentermassCommand)==null||t.setAttributes({pointIndices:this.pointIndices})}this.previousPointsTextureSize=o}}initPrograms(){let{device:t,store:i,points:r}=this;!r||!i.pointsTextureSize||!this.centermassFbo||this.centermassFbo.destroyed||!this.centermassTexture||this.centermassTexture.destroyed||(this.programsSpaceDimensions!==i.spaceDimensions&&(this.programsSpaceDimensions=i.spaceDimensions,this.runCommand&&(this.runCommand.destroy(),this.runCommand=void 0)),this.forceVertexCoordBuffer||(this.forceVertexCoordBuffer=t.createBuffer({data:new Float32Array([-1,-1,1,-1,-1,1,1,1])})),this.calculateUniformStore||(this.calculateUniformStore=new ee(t,{calculateCentermassUniforms:{uniformTypes:{pointsTextureSize:"f32"}}})),this.forceUniformStore||(this.forceUniformStore=new ee(t,{forceCenterUniforms:{uniformTypes:{centerForce:"f32",alpha:"f32"}}})),this.calculateCentermassCommand||(this.calculateCentermassCommand=new re(t,{fs:h2,vs:p2,topology:"point-list",attributes:{...this.pointIndices&&{pointIndices:this.pointIndices}},bufferLayout:[{name:"pointIndices",format:"float32x2"}],defines:{USE_UNIFORM_BUFFERS:!0},bindings:{calculateCentermassUniforms:this.calculateUniformStore.getManagedUniformBuffer("calculateCentermassUniforms")},parameters:{blend:!0,blendColorOperation:"add",blendColorSrcFactor:"one",blendColorDstFactor:"one",blendAlphaOperation:"add",blendAlphaSrcFactor:"one",blendAlphaDstFactor:"one",depthWriteEnabled:!1,depthCompare:"always"}})),this.calculateCentermassCommand.setVertexCount(this.data.pointsNumber??0),this.runCommand||(this.runCommand=new re(t,{fs:m2,vs:Ne,topology:"triangle-strip",vertexCount:4,attributes:{vertexCoord:this.forceVertexCoordBuffer},bufferLayout:[{name:"vertexCoord",format:"float32x2"}],defines:{USE_UNIFORM_BUFFERS:!0,...i.is3D?{SPACE_3D:!0}:{}},bindings:{forceCenterUniforms:this.forceUniformStore.getManagedUniformBuffer("forceCenterUniforms")},parameters:{depthWriteEnabled:!1,depthCompare:"always"}})))}run(){let{device:t,store:i,points:r}=this;if(!r||!this.calculateCentermassCommand||!this.calculateUniformStore||!this.runCommand||!this.forceUniformStore||!this.centermassFbo||!this.centermassTexture||!r.previousPositionTexture||r.previousPositionTexture.destroyed||!r.exitTexture||r.exitTexture.destroyed||!r.velocityFbo||r.velocityFbo.destroyed||i.pointsTextureSize!==this.previousPointsTextureSize||!this.pointIndices)return;let o=t.beginRenderPass({framebuffer:this.centermassFbo,clearColor:[0,0,0,0]});this.calculateUniformStore.setUniforms({calculateCentermassUniforms:{pointsTextureSize:i.pointsTextureSize??0}}),this.calculateCentermassCommand.setBindings({positionsTexture:r.previousPositionTexture,exitTexture:r.exitTexture}),this.calculateCentermassCommand.draw(o),o.end(),this.forceUniformStore.setUniforms({forceCenterUniforms:{centerForce:this.config.simulationCenter,alpha:i.alpha}}),this.runCommand.setBindings({positionsTexture:r.previousPositionTexture,centermassTexture:this.centermassTexture});let n=t.beginRenderPass({framebuffer:r.velocityFbo,clearColor:[0,0,0,0]});this.runCommand.draw(n),n.end()}destroy(){var t,i,r,o;(t=this.calculateCentermassCommand)==null||t.destroy(),this.calculateCentermassCommand=void 0,(i=this.runCommand)==null||i.destroy(),this.runCommand=void 0,this.centermassFbo&&!this.centermassFbo.destroyed&&this.centermassFbo.destroy(),this.centermassFbo=void 0,this.centermassTexture&&!this.centermassTexture.destroyed&&this.centermassTexture.destroy(),this.centermassTexture=void 0,(r=this.calculateUniformStore)==null||r.destroy(),this.calculateUniformStore=void 0,(o=this.forceUniformStore)==null||o.destroy(),this.forceUniformStore=void 0,this.pointIndices&&!this.pointIndices.destroyed&&this.pointIndices.destroy(),this.pointIndices=void 0,this.forceVertexCoordBuffer&&!this.forceVertexCoordBuffer.destroyed&&this.forceVertexCoordBuffer.destroy(),this.forceVertexCoordBuffer=void 0,this.previousPointsTextureSize=void 0}},g2=`#version 300 es
precision highp float;

uniform sampler2D positionsTexture;
uniform sampler2D sizeTexture;
uniform sampler2D exitTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform buildGridUniforms {
  float pointsTextureSize;
  float gridTextureSize;   // Cells per axis
  float cellSize;
  float tilesPerRow;        // 3D only: z-slices per texture row (tiled layout)
  float gridTextureWidth;   // 3D only: tiled texture dimensions in pixels
  float gridTextureHeight;
  vec3 gridOffset;          // Offset for multi-pass (0-1 range, multiplied by cellSize)
} buildGrid;

#define pointsTextureSize buildGrid.pointsTextureSize
#define gridTextureSize buildGrid.gridTextureSize
#define cellSize buildGrid.cellSize
#define tilesPerRow buildGrid.tilesPerRow
#define gridTextureWidth buildGrid.gridTextureWidth
#define gridTextureHeight buildGrid.gridTextureHeight
#define gridOffset buildGrid.gridOffset
#else
uniform float pointsTextureSize;
uniform float gridTextureSize;
uniform float cellSize;
uniform float tilesPerRow;
uniform float gridTextureWidth;
uniform float gridTextureHeight;
uniform vec3 gridOffset;
#endif

in vec2 pointIndices;

// 2D: xy = position sum, z = size sum, w = count
// 3D: xyz = position sum, w = count (the force pass approximates neighbor radii
// with the reading point's own radius \u2014 no channel is left for a size sum)
out vec4 cellData;

void main() {
  // Absent points must not enter the grid \u2014 a NaN position bins to a NaN cell and
  // poisons the accumulated position/size sum for every point in that cell. (exit.g = absent)
  vec4 exitStatus = texture(exitTexture, (pointIndices + 0.5) / pointsTextureSize);
  if (exitStatus.g > 0.5) {
    cellData = vec4(0.0);
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    gl_PointSize = 0.0;
    return;
  }

  vec4 pointPosition = texture(positionsTexture, (pointIndices + 0.5) / pointsTextureSize);

#ifdef SPACE_3D
  // The position texture stores z in the alpha channel
  vec3 position = vec3(pointPosition.xy, pointPosition.a);
  cellData = vec4(position, 1.0);

  // Apply grid offset for multi-pass collision detection
  vec3 offsetPosition = position + gridOffset * cellSize;

  int gridSize = int(gridTextureSize);
  ivec3 cell = clamp(ivec3(floor(offsetPosition / cellSize)), ivec3(0), ivec3(gridSize - 1));

  // z-slices are tiled into a 2D texture (same layout as the octree levels)
  int rowTiles = int(tilesPerRow);
  ivec2 pixel = ivec2(
    (cell.z % rowTiles) * gridSize + cell.x,
    (cell.z / rowTiles) * gridSize + cell.y
  );
  vec2 gridPosition = 2.0 * (vec2(pixel) + 0.5) / vec2(gridTextureWidth, gridTextureHeight) - 1.0;
#else
  // Output: position sum, size sum, count
  vec4 pointSize = texture(sizeTexture, (pointIndices + 0.5) / pointsTextureSize);
  cellData = vec4(pointPosition.xy, pointSize.r, 1.0);

  // Apply grid offset for multi-pass collision detection
  vec2 offsetPosition = pointPosition.xy + gridOffset.xy * cellSize;

  // Calculate which grid cell this point belongs to
  float cellX = floor(offsetPosition.x / cellSize);
  float cellY = floor(offsetPosition.y / cellSize);

  // Clamp to grid bounds
  cellX = clamp(cellX, 0.0, gridTextureSize - 1.0);
  cellY = clamp(cellY, 0.0, gridTextureSize - 1.0);

  // Convert to clip space coordinates
  vec2 gridPosition = 2.0 * (vec2(cellX, cellY) + 0.5) / gridTextureSize - 1.0;
#endif

  gl_Position = vec4(gridPosition, 0.0, 1.0);
  gl_PointSize = 1.0;
}
`,x2=`#version 300 es
precision highp float;

in vec4 cellData;
out vec4 fragColor;

void main() {
  // Output accumulated cell data (blended additively)
  // xy = sum of positions, z = sum of sizes, w = count
  fragColor = cellData;
}
`,S2=`#version 300 es
precision highp float;

uniform sampler2D positionsTexture;
uniform sampler2D sizeTexture;
uniform sampler2D gridTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform forceCollisionUniforms {
  float pointsTextureSize;
  float gridTextureSize;   // Cells per axis
  float cellSize;
  float alpha;
  float collisionStrength;
  float collisionRadius;
  float collisionPadding;
  float pointsNumber;
  float tilesPerRow;        // 3D only: z-slices per texture row (tiled layout)
  float passesCount;        // Number of offset passes the force is split across
  vec3 gridOffset;          // Must match the offset used when building the grid
} forceCollision;

#define pointsTextureSize forceCollision.pointsTextureSize
#define gridTextureSize forceCollision.gridTextureSize
#define cellSize forceCollision.cellSize
#define alpha forceCollision.alpha
#define collisionStrength forceCollision.collisionStrength
#define collisionRadius forceCollision.collisionRadius
#define collisionPadding forceCollision.collisionPadding
#define pointsNumber forceCollision.pointsNumber
#define tilesPerRow forceCollision.tilesPerRow
#define passesCount forceCollision.passesCount
#define gridOffset forceCollision.gridOffset
#else
uniform float pointsTextureSize;
uniform float gridTextureSize;
uniform float cellSize;
uniform float alpha;
uniform float collisionStrength;
uniform float collisionRadius;
uniform float collisionPadding;
uniform float pointsNumber;
uniform float tilesPerRow;
uniform float passesCount;
uniform vec3 gridOffset;
#endif

in vec2 textureCoords;
out vec4 fragColor;

void main() {
  vec4 pointPosition = texture(positionsTexture, textureCoords);
  vec4 velocity = vec4(0.0);

  // Get current point's index
  float currentIndex = pointPosition.b;

  // Skip if this is an empty texel
  if (currentIndex < 0.0 || currentIndex >= pointsNumber) {
    fragColor = velocity;
    return;
  }

  // Get current point's size for collision radius
  vec4 currentSizeData = texture(sizeTexture, textureCoords);
  float currentSize = currentSizeData.r;
  float currentCollisionRadius = (collisionRadius > 0.0 ? collisionRadius : currentSize * 0.5) + collisionPadding;

  // Track total neighbor count for damping
  float totalNeighbors = 0.0;

#ifdef SPACE_3D
  // The position texture stores z in the alpha channel
  vec3 currentPos = vec3(pointPosition.rg, pointPosition.a);

  // Apply the same offset used when building the grid
  vec3 offsetPos = currentPos + gridOffset * cellSize;

  // Calculate which grid cell this point is in (with offset), clamped to match build-grid.vert
  int gridSize = int(gridTextureSize);
  int rowTiles = int(tilesPerRow);
  ivec3 myCell = clamp(ivec3(floor(offsetPos / cellSize)), ivec3(0), ivec3(gridSize - 1));

  // Check 3x3x3 neighborhood of cells
  for (int dx = -1; dx <= 1; dx++) {
    for (int dy = -1; dy <= 1; dy++) {
      for (int dz = -1; dz <= 1; dz++) {
        ivec3 cell = myCell + ivec3(dx, dy, dz);

        // Skip cells outside grid bounds
        if (any(lessThan(cell, ivec3(0))) || any(greaterThanEqual(cell, ivec3(gridSize)))) continue;

        // Sample the grid cell (z-slices tiled into the 2D texture)
        ivec2 pixel = ivec2(
          (cell.z % rowTiles) * gridSize + cell.x,
          (cell.z / rowTiles) * gridSize + cell.y
        );
        vec4 cellData = texelFetch(gridTexture, pixel, 0);

        float cellCount = cellData.w;
        if (cellCount < 0.5) continue; // Empty cell

        // Scale force by number of points in cell
        // Subtract 1 if this is our own cell to avoid self-collision
        float effectiveCount = cellCount;
        if (dx == 0 && dy == 0 && dz == 0) {
          effectiveCount = max(0.0, cellCount - 1.0);
        }

        totalNeighbors += effectiveCount;

        // Get average position in this cell. The 3D grid payload has no room for
        // a size sum, so neighbor radii are approximated by this point's own
        // radius (exact when \`collisionRadius\` is set or sizes are uniform).
        vec3 avgPos = cellData.xyz / cellCount;
        float otherCollisionRadius = currentCollisionRadius;

        // Calculate combined collision radius
        float combinedRadius = currentCollisionRadius + otherCollisionRadius;

        // Calculate distance vector to average position (using original positions)
        vec3 distVector = currentPos - avgPos;
        float dist = length(distVector);

        // Check for collision
        if (dist < combinedRadius && dist > 0.001) {
          // Calculate overlap ratio (0 = just touching, 1 = fully overlapping)
          float overlapRatio = (combinedRadius - dist) / combinedRadius;

          // Soft collision curve: use square root for gentler force near edges
          float softOverlap = sqrt(overlapRatio) * combinedRadius * 0.5;

          // Direction to push apart (normalized)
          vec3 direction = distVector / dist;

          // Apply repulsion force with soft curve, split across the offset passes
          float force = alpha * collisionStrength * softOverlap * (1.0 / passesCount) * effectiveCount;

          // Clamp maximum force to prevent instability
          force = min(force, combinedRadius * 0.5);

          velocity.rgb += force * direction;
        } else if (dist <= 0.001 && effectiveCount > 0.0) {
          // Points at same position - push in a direction from the index
          // (golden-spiral point on the unit sphere, so coincident points scatter evenly)
          float angle = currentIndex * 0.618033988749895 * 6.283185307179586;
          float zDir = 2.0 * fract(currentIndex * 0.754877666246693) - 1.0;
          float ring = sqrt(max(0.0, 1.0 - zDir * zDir));
          vec3 direction = vec3(ring * cos(angle), ring * sin(angle), zDir);
          float force = min(alpha * collisionStrength * combinedRadius * 0.1, combinedRadius * 0.3);
          velocity.rgb += force * effectiveCount * direction;
        }
      }
    }
  }

  // Apply density-based damping: reduce force when surrounded by many neighbors.
  // 3D cells hold far more points than 2D ones (volume vs area), so the damping
  // is floored \u2014 otherwise a dense pile is suppressed so hard it can never
  // push itself apart (the per-pass correction cap below prevents oscillation).
  if (totalNeighbors > 2.0) {
    float damping = max(2.0 / totalNeighbors, 0.05);
    velocity.rgb *= damping;
  }

  // Cap the per-pass correction so overlaps resolve by relaxation instead of
  // overshooting in one frame.
  float maxCorrection = currentCollisionRadius * 0.25;
  float correction = length(velocity.rgb);
  if (correction > maxCorrection) {
    velocity.rgb *= maxCorrection / correction;
  }

  // z velocity lives in the blue channel (update-position.frag SPACE_3D contract)
#else
  vec2 currentPos = pointPosition.rg;

  // Apply the same offset used when building the grid
  vec2 offsetPos = currentPos + gridOffset.xy * cellSize;

  // Calculate which grid cell this point is in (with offset).
  // Clamp to the grid bounds to match build-grid.vert, so a point that drifts
  // outside the space still reads the edge cell it was binned into.
  float myCellX = clamp(floor(offsetPos.x / cellSize), 0.0, gridTextureSize - 1.0);
  float myCellY = clamp(floor(offsetPos.y / cellSize), 0.0, gridTextureSize - 1.0);

  // Check 3x3 neighborhood of cells
  for (int dx = -1; dx <= 1; dx++) {
    for (int dy = -1; dy <= 1; dy++) {
      float neighborCellX = myCellX + float(dx);
      float neighborCellY = myCellY + float(dy);

      // Skip cells outside grid bounds
      if (neighborCellX < 0.0 || neighborCellX >= gridTextureSize ||
          neighborCellY < 0.0 || neighborCellY >= gridTextureSize) {
        continue;
      }

      // Sample the grid cell
      vec2 gridCoord = (vec2(neighborCellX, neighborCellY) + 0.5) / gridTextureSize;
      vec4 cellData = texture(gridTexture, gridCoord);

      float cellCount = cellData.w;
      if (cellCount < 0.5) continue; // Empty cell

      // Scale force by number of points in cell
      // Subtract 1 if this is our own cell to avoid self-collision
      float effectiveCount = cellCount;
      if (dx == 0 && dy == 0) {
        effectiveCount = max(0.0, cellCount - 1.0);
      }

      totalNeighbors += effectiveCount;

      // Get average position and size in this cell
      vec2 avgPos = cellData.xy / cellCount;
      float avgSize = cellData.z / cellCount;
      float otherCollisionRadius = (collisionRadius > 0.0 ? collisionRadius : avgSize * 0.5) + collisionPadding;

      // Calculate combined collision radius
      float combinedRadius = currentCollisionRadius + otherCollisionRadius;

      // Calculate distance vector to average position (using original positions)
      vec2 distVector = currentPos - avgPos;
      float dist = length(distVector);

      // Check for collision
      if (dist < combinedRadius && dist > 0.001) {
        // Calculate overlap ratio (0 = just touching, 1 = fully overlapping)
        float overlapRatio = (combinedRadius - dist) / combinedRadius;

        // Soft collision curve: use square root for gentler force near edges
        // This prevents the "ping-pong" effect at boundaries
        float softOverlap = sqrt(overlapRatio) * combinedRadius * 0.5;

        // Direction to push apart (normalized)
        vec2 direction = distVector / dist;

        // Apply repulsion force with soft curve, split across the offset passes
        float force = alpha * collisionStrength * softOverlap * (1.0 / passesCount) * effectiveCount;

        // Clamp maximum force to prevent instability
        force = min(force, combinedRadius * 0.5);

        velocity.rg += force * direction;
      } else if (dist <= 0.001 && effectiveCount > 0.0) {
        // Points at same position - push based on index
        float angle = currentIndex * 0.618033988749895;
        float force = min(alpha * collisionStrength * combinedRadius * 0.1, combinedRadius * 0.3);
        velocity.rg += force * effectiveCount * vec2(cos(angle), sin(angle));
      }
    }
  }

  // Apply density-based damping: reduce force when surrounded by many neighbors.
  // This prevents chaotic oscillations in dense clusters. Floored (like the 3D
  // branch) so a dense pile is never suppressed so hard it can't push itself
  // apart \u2014 the per-pass correction cap below prevents oscillation.
  if (totalNeighbors > 2.0) {
    float damping = max(2.0 / totalNeighbors, 0.05);
    velocity.rg *= damping;
  }

  // Cap the per-pass correction so overlaps resolve by relaxation instead of
  // overshooting in one frame. Across the offset passes the total displacement
  // stays within ~one collision radius per tick, so a full overlap resolves in
  // a frame or two while the soft force curve keeps light contacts gentle.
  float maxCorrection = currentCollisionRadius * 0.25;
  float correction = length(velocity.rg);
  if (correction > maxCorrection) {
    velocity.rg *= maxCorrection / correction;
  }
#endif

  fragColor = velocity;
}
`,U0=[[0,0,0],[.5,0,0],[0,.5,0],[.5,.5,0]],L0=[[0,0,0],[.5,0,0],[0,.5,0],[.5,.5,0],[0,0,.5],[.5,0,.5],[0,.5,.5],[.5,.5,.5]],v2=64,y2=.25,Ca=class extends kt{constructor(){super(...arguments),this.gridTargets=[],this.programsSpaceDimensions=2,this.gridTextureSize=0,this.gridTextureWidth=0,this.gridTextureHeight=0,this.tilesPerRow=1,this.cellSize=0}create(){var t;let{device:i,store:r,data:o,config:n}=this;if(!r.pointsTextureSize||o.pointsNumber===void 0)return;let s=n.pointDefaultSize??Ft.pointDefaultSize;if(o.pointSizes)for(let f=0;f<(o.pointsNumber??0);f++)s=Math.max(s,o.getResolvedPointSize(f));let a=n.simulationCollisionRadius??0,l=n.simulationCollisionPadding??0,c=(a>0?a:s*.5)+l;this.cellSize=Math.max(c,8),r.is3D?(this.gridTextureSize=Math.min(v2,Math.max(8,Math.ceil(r.adjustedSpaceSize/this.cellSize))),this.cellSize=r.adjustedSpaceSize/this.gridTextureSize,this.tilesPerRow=Math.ceil(Math.sqrt(this.gridTextureSize)),this.gridTextureWidth=this.gridTextureSize*this.tilesPerRow,this.gridTextureHeight=this.gridTextureSize*Math.ceil(this.gridTextureSize/this.tilesPerRow)):(this.gridTextureSize=Math.min(512,Math.max(32,Math.ceil(r.adjustedSpaceSize/this.cellSize))),this.cellSize=r.adjustedSpaceSize/this.gridTextureSize,this.tilesPerRow=1,this.gridTextureWidth=this.gridTextureSize,this.gridTextureHeight=this.gridTextureSize);let d=r.is3D?L0:U0;this.gridTargets.length===d.length&&this.gridTargets.every(f=>!f.texture.destroyed&&!f.fbo.destroyed&&f.texture.width===this.gridTextureWidth&&f.texture.height===this.gridTextureHeight)||(this.destroyGridTargets(),this.gridTargets=d.map(()=>{let f=i.createTexture({width:this.gridTextureWidth,height:this.gridTextureHeight,format:"rgba32float",usage:z.SAMPLE|z.RENDER|z.COPY_DST}),h=i.createFramebuffer({width:this.gridTextureWidth,height:this.gridTextureHeight,colorAttachments:[f]});return{texture:f,fbo:h}}));let u=new Float32Array(r.pointsTextureSize*r.pointsTextureSize*4);for(let f=0;f<o.pointsNumber;f++)u[f*4]=o.getResolvedPointSize(f);(!this.sizeTexture||this.sizeTexture.destroyed||this.sizeTexture.width!==r.pointsTextureSize||this.sizeTexture.height!==r.pointsTextureSize)&&(this.sizeTexture&&!this.sizeTexture.destroyed&&this.sizeTexture.destroy(),this.sizeTexture=i.createTexture({width:r.pointsTextureSize,height:r.pointsTextureSize,format:"rgba32float",usage:z.SAMPLE|z.COPY_DST})),this.sizeTexture.copyImageData({data:u,bytesPerRow:Q("rgba32float",r.pointsTextureSize),mipLevel:0,x:0,y:0}),(!this.pointIndices||this.previousPointsTextureSize!==r.pointsTextureSize)&&(this.pointIndices&&!this.pointIndices.destroyed&&this.pointIndices.destroy(),this.pointIndices=i.createBuffer({data:Uo(r.pointsTextureSize),usage:U.VERTEX|U.COPY_DST}),(t=this.buildGridCommand)==null||t.setAttributes({pointIndices:this.pointIndices})),this.previousPointsTextureSize=r.pointsTextureSize,this.previousSpaceSize=r.adjustedSpaceSize}initPrograms(){var t,i;let{device:r,store:o,data:n}=this;!n.pointsNumber||!o.pointsTextureSize||(this.programsSpaceDimensions!==o.spaceDimensions&&(this.programsSpaceDimensions=o.spaceDimensions,(t=this.buildGridCommand)==null||t.destroy(),this.buildGridCommand=void 0,(i=this.forceCommand)==null||i.destroy(),this.forceCommand=void 0),this.buildGridUniformStore||(this.buildGridUniformStore=new ee(r,{buildGridUniforms:{uniformTypes:{pointsTextureSize:"f32",gridTextureSize:"f32",cellSize:"f32",tilesPerRow:"f32",gridTextureWidth:"f32",gridTextureHeight:"f32",gridOffset:"vec3<f32>"}}})),this.buildGridCommand||(this.buildGridCommand=new re(r,{fs:x2,vs:g2,topology:"point-list",vertexCount:n.pointsNumber,attributes:{...this.pointIndices&&{pointIndices:this.pointIndices}},bufferLayout:[{name:"pointIndices",format:"float32x2"}],defines:{USE_UNIFORM_BUFFERS:!0,...o.is3D?{SPACE_3D:!0}:{}},bindings:{buildGridUniforms:this.buildGridUniformStore.getManagedUniformBuffer("buildGridUniforms")},parameters:{blend:!0,blendColorOperation:"add",blendColorSrcFactor:"one",blendColorDstFactor:"one",blendAlphaOperation:"add",blendAlphaSrcFactor:"one",blendAlphaDstFactor:"one",depthWriteEnabled:!1,depthCompare:"always"}})),this.forceUniformStore||(this.forceUniformStore=new ee(r,{forceCollisionUniforms:{uniformTypes:{pointsTextureSize:"f32",gridTextureSize:"f32",cellSize:"f32",alpha:"f32",collisionStrength:"f32",collisionRadius:"f32",collisionPadding:"f32",pointsNumber:"f32",tilesPerRow:"f32",passesCount:"f32",gridOffset:"vec3<f32>"}}})),this.forceVertexCoordBuffer||(this.forceVertexCoordBuffer=r.createBuffer({data:new Float32Array([-1,-1,1,-1,-1,1,1,1])})),this.forceCommand||(this.forceCommand=new re(r,{fs:S2,vs:Ne,topology:"triangle-strip",vertexCount:4,attributes:{vertexCoord:this.forceVertexCoordBuffer},bufferLayout:[{name:"vertexCoord",format:"float32x2"}],defines:{USE_UNIFORM_BUFFERS:!0,...o.is3D?{SPACE_3D:!0}:{}},bindings:{forceCollisionUniforms:this.forceUniformStore.getManagedUniformBuffer("forceCollisionUniforms")},parameters:{blend:!0,blendColorOperation:"add",blendColorSrcFactor:"one",blendColorDstFactor:"one",blendAlphaOperation:"add",blendAlphaSrcFactor:"one",blendAlphaDstFactor:"one",depthWriteEnabled:!1,depthCompare:"always"}})))}run(){let{device:t,store:i,data:r,points:o,config:n}=this;if(!o||!this.buildGridCommand||!this.buildGridUniformStore||!this.forceCommand||!this.forceUniformStore||!this.pointIndices||r.pointsNumber===void 0||!o.previousPositionTexture||o.previousPositionTexture.destroyed||!o.exitTexture||o.exitTexture.destroyed||!o.velocityFbo||o.velocityFbo.destroyed||!this.sizeTexture||this.sizeTexture.destroyed)return;let s=i.is3D?L0:U0;if(this.gridTargets.length!==s.length||i.pointsTextureSize!==this.previousPointsTextureSize||i.adjustedSpaceSize!==this.previousSpaceSize||this.programsSpaceDimensions!==i.spaceDimensions)return;let a=n.simulationCollisionRadius??0,l=n.simulationCollisionPadding??0;this.buildGridCommand.setVertexCount(r.pointsNumber),this.buildGridCommand.setBindings({positionsTexture:o.previousPositionTexture,exitTexture:o.exitTexture,...i.is3D?{}:{sizeTexture:this.sizeTexture}});for(let[d,u]of s.entries()){let f=this.gridTargets[d];if(!f||f.fbo.destroyed||f.texture.destroyed)continue;this.buildGridUniformStore.setUniforms({buildGridUniforms:{pointsTextureSize:i.pointsTextureSize??0,gridTextureSize:this.gridTextureSize,cellSize:this.cellSize,tilesPerRow:this.tilesPerRow,gridTextureWidth:this.gridTextureWidth,gridTextureHeight:this.gridTextureHeight,gridOffset:u}});let h=t.beginRenderPass({framebuffer:f.fbo,clearColor:[0,0,0,0]});this.buildGridCommand.draw(h),h.end()}this.forceCommand.setBindings({positionsTexture:o.previousPositionTexture,sizeTexture:this.sizeTexture});let c=t.beginRenderPass({framebuffer:o.velocityFbo,clearColor:[0,0,0,0]});for(let[d,u]of s.entries()){let f=this.gridTargets[d];!f||f.texture.destroyed||(this.forceUniformStore.setUniforms({forceCollisionUniforms:{pointsTextureSize:i.pointsTextureSize??0,gridTextureSize:this.gridTextureSize,cellSize:this.cellSize,alpha:Math.max(i.alpha,y2),collisionStrength:n.simulationCollision??0,collisionRadius:a,collisionPadding:l,pointsNumber:r.pointsNumber,tilesPerRow:this.tilesPerRow,passesCount:s.length,gridOffset:u}}),this.forceCommand.setBindings({gridTexture:f.texture}),this.forceCommand.draw(c))}c.end()}destroy(){var t,i,r,o;(t=this.buildGridCommand)==null||t.destroy(),this.buildGridCommand=void 0,(i=this.forceCommand)==null||i.destroy(),this.forceCommand=void 0,this.destroyGridTargets(),this.sizeTexture&&!this.sizeTexture.destroyed&&this.sizeTexture.destroy(),this.sizeTexture=void 0,(r=this.buildGridUniformStore)==null||r.destroy(),this.buildGridUniformStore=void 0,(o=this.forceUniformStore)==null||o.destroy(),this.forceUniformStore=void 0,this.pointIndices&&!this.pointIndices.destroyed&&this.pointIndices.destroy(),this.pointIndices=void 0,this.forceVertexCoordBuffer&&!this.forceVertexCoordBuffer.destroyed&&this.forceVertexCoordBuffer.destroy(),this.forceVertexCoordBuffer=void 0}destroyGridTargets(){for(let t of this.gridTargets)t.fbo&&!t.fbo.destroyed&&t.fbo.destroy();for(let t of this.gridTargets)t.texture&&!t.texture.destroyed&&t.texture.destroy();this.gridTargets=[]}},b2=`#version 300 es
precision highp float;

uniform sampler2D positionsTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform forceGravityUniforms {
  float gravity;
  float spaceSize;
  float alpha;
} forceGravity;

#define gravity forceGravity.gravity
#define spaceSize forceGravity.spaceSize
#define alpha forceGravity.alpha
#else
uniform float gravity;
uniform float spaceSize;
uniform float alpha;
#endif

in vec2 textureCoords;
out vec4 fragColor;

void main() {
  vec4 pointPosition = texture(positionsTexture, textureCoords);

  vec4 velocity = vec4(0.0);

  #ifdef SPACE_3D
  // 3D: z lives in the position alpha channel; z velocity goes to the blue channel.
  vec3 centerPosition = vec3(spaceSize * 0.5);
  vec3 position = vec3(pointPosition.rg, pointPosition.a);
  vec3 distVector = centerPosition - position;
  float dist = length(distVector);
  if (dist > 0.0) {
    float additionalVelocity = alpha * gravity * dist * 0.1;
    velocity.rgb += additionalVelocity * (distVector / dist);
  }
  #else
  vec2 centerPosition = vec2(spaceSize * 0.5);
  vec2 distVector = centerPosition - pointPosition.rg;
  float dist = sqrt(dot(distVector, distVector));
  if (dist > 0.0) {
    float angle = atan(distVector.y, distVector.x);
    float additionalVelocity = alpha * gravity * dist * 0.1;
    velocity.rg += additionalVelocity * vec2(cos(angle), sin(angle));
  }
  #endif

  fragColor = velocity;
}`,Aa=class extends kt{constructor(){super(...arguments),this.programsSpaceDimensions=2}initPrograms(){let{device:t,points:i,store:r}=this;!i||!r.pointsTextureSize||(this.programsSpaceDimensions!==r.spaceDimensions&&(this.programsSpaceDimensions=r.spaceDimensions,this.runCommand&&(this.runCommand.destroy(),this.runCommand=void 0)),this.vertexCoordBuffer||(this.vertexCoordBuffer=t.createBuffer({data:new Float32Array([-1,-1,1,-1,-1,1,1,1])})),this.uniformStore||(this.uniformStore=new ee(t,{forceGravityUniforms:{uniformTypes:{gravity:"f32",spaceSize:"f32",alpha:"f32"}}})),this.runCommand||(this.runCommand=new re(t,{fs:b2,vs:Ne,topology:"triangle-strip",vertexCount:4,attributes:{vertexCoord:this.vertexCoordBuffer},bufferLayout:[{name:"vertexCoord",format:"float32x2"}],defines:{USE_UNIFORM_BUFFERS:!0,...r.is3D?{SPACE_3D:!0}:{}},bindings:{forceGravityUniforms:this.uniformStore.getManagedUniformBuffer("forceGravityUniforms")},parameters:{depthWriteEnabled:!1,depthCompare:"always"}})))}run(){let{device:t,points:i,store:r}=this;if(!i||!this.runCommand||!this.uniformStore||!i.previousPositionTexture||i.previousPositionTexture.destroyed||!i.velocityFbo||i.velocityFbo.destroyed)return;this.uniformStore.setUniforms({forceGravityUniforms:{gravity:this.config.simulationGravity,spaceSize:r.adjustedSpaceSize,alpha:r.alpha}}),this.runCommand.setBindings({positionsTexture:i.previousPositionTexture});let o=t.beginRenderPass({framebuffer:i.velocityFbo,clearColor:[0,0,0,0]});this.runCommand.draw(o),o.end()}destroy(){var t,i;(t=this.runCommand)==null||t.destroy(),this.runCommand=void 0,(i=this.uniformStore)==null||i.destroy(),this.uniformStore=void 0,this.vertexCoordBuffer&&!this.vertexCoordBuffer.destroyed&&this.vertexCoordBuffer.destroy(),this.vertexCoordBuffer=void 0}};function T2(e){return`#version 300 es
precision highp float;

uniform sampler2D positionsTexture;
uniform sampler2D exitTexture;
uniform sampler2D linkInfoTexture; // Texture storing first link indices and amount
uniform sampler2D linkIndicesTexture;
uniform sampler2D linkPropertiesTexture; // Texture storing link bias and strength
uniform sampler2D linkRandomDistanceTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform forceLinkUniforms {
  float linkSpring;
  float linkDistance;
  vec2 linkDistRandomVariationRange;
  float pointsTextureSize;
  float linksTextureSize;
  float alpha;
} forceLink;

#define linkSpring forceLink.linkSpring
#define linkDistance forceLink.linkDistance
#define linkDistRandomVariationRange forceLink.linkDistRandomVariationRange
#define pointsTextureSize forceLink.pointsTextureSize
#define linksTextureSize forceLink.linksTextureSize
#define alpha forceLink.alpha
#else
uniform float linkSpring;
uniform float linkDistance;
uniform vec2 linkDistRandomVariationRange;
uniform float pointsTextureSize;
uniform float linksTextureSize;
uniform float alpha;
#endif

in vec2 textureCoords;
out vec4 fragColor;

const float MAX_LINKS = ${e}.0;

void main() {
  vec4 pointPosition = texture(positionsTexture, textureCoords);
  vec4 velocity = vec4(0.0);

  vec4 linkInfo = texture(linkInfoTexture, textureCoords);
  float iCount = linkInfo.r;
  float jCount = linkInfo.g;
  float linkAmount = linkInfo.b;
  if (linkAmount > 0.0) {
    for (float i = 0.0; i < MAX_LINKS; i += 1.0) {
      if (i < linkAmount) {
        if (iCount >= linksTextureSize) {
          iCount = 0.0;
          jCount += 1.0;
        }
        vec2 linkTextureIndex = (vec2(iCount, jCount) + 0.5) / linksTextureSize;
        vec4 connectedPointIndex = texture(linkIndicesTexture, linkTextureIndex);
        vec4 biasAndStrength = texture(linkPropertiesTexture, linkTextureIndex);
        vec4 randomMinDistance = texture(linkRandomDistanceTexture, linkTextureIndex);
        float bias = biasAndStrength.r;
        float strength = biasAndStrength.g;
        float randomMinLinkDist = randomMinDistance.r * (linkDistRandomVariationRange.g - linkDistRandomVariationRange.r) + linkDistRandomVariationRange.r;
        randomMinLinkDist *= linkDistance;

        iCount += 1.0;

        // Skip a link to an absent point \u2014 its position would poison the spring
        // force. (exit.G = current absence)
        vec4 connectedExit = texture(exitTexture, (connectedPointIndex.rg + 0.5) / pointsTextureSize);
        if (connectedExit.g > 0.5) {
          continue;
        }

        vec4 connectedPointPosition = texture(positionsTexture, (connectedPointIndex.rg + 0.5) / pointsTextureSize);
        float x = connectedPointPosition.x - (pointPosition.x + velocity.x);
        float y = connectedPointPosition.y - (pointPosition.y + velocity.y);
        #ifdef SPACE_3D
        // z lives in the position alpha channel; z velocity accumulates in the blue channel.
        float z = connectedPointPosition.a - (pointPosition.a + velocity.b);
        float l = sqrt(x * x + y * y + z * z);
        #else
        float l = sqrt(x * x + y * y);
        #endif

        // Apply the link force
        l = max(l, randomMinLinkDist * 0.99);
        l = (l - randomMinLinkDist) / l;
        l *= linkSpring * alpha;
        l *= strength;
        l *= bias;
        x *= l;
        y *= l;
        velocity.x += x;
        velocity.y += y;
        #ifdef SPACE_3D
        z *= l;
        velocity.b += z;
        #endif
      }
    }
  }

  fragColor = vec4(velocity.rg, velocity.b, 0.0);
}
  `}function ae(e,t){return!e||e.length!==2?t:[e[0],e[1]]}function fe(e,t){return!e||e.length!==4?t:[e[0],e[1],e[2],e[3]]}var Bo=e=>Number.isInteger(e)?e.toFixed(1):String(e),au=(e=>(e.OUTGOING="outgoing",e.INCOMING="incoming",e))(au||{}),Sr=class extends kt{constructor(){super(...arguments),this.linkFirstIndicesAndAmount=new Float32Array,this.indices=new Float32Array,this.maxPointDegree=0,this.programsSpaceDimensions=2}create(t){var i;let{device:r,store:{pointsTextureSize:o,linksTextureSize:n},data:s}=this;if(!o||!n)return;this.linkFirstIndicesAndAmount=new Float32Array(o*o*4),this.indices=new Float32Array(n*n*4);let a=new Float32Array(n*n*4),l=new Float32Array(n*n*4),c=t==="incoming"?s.sourceIndexToTargetIndices:s.targetIndexToSourceIndices;this.maxPointDegree=0;let d=0;c?.forEach((h,m)=>{h&&(this.linkFirstIndicesAndAmount[m*4+0]=d%n,this.linkFirstIndicesAndAmount[m*4+1]=Math.floor(d/n),this.linkFirstIndicesAndAmount[m*4+2]=h.length??0,h.forEach(([x,S])=>{var y,A,_;this.indices[d*4+0]=x%o,this.indices[d*4+1]=Math.floor(x/o);let v=((y=s.degree)==null?void 0:y[x])??0,P=((A=s.degree)==null?void 0:A[m])??0,T=v+P,R=T!==0?v/T:.5,D=Math.min(v,P),B=((_=s.linkStrength)==null?void 0:_[S])??1/Math.max(D,1);B=Math.sqrt(B),a[d*4+0]=R,a[d*4+1]=B,l[d*4]=this.store.getRandomFloat(0,1),d+=1}),this.maxPointDegree=Math.max(this.maxPointDegree,h.length??0))});let u=!this.linkFirstIndicesAndAmountTexture||this.linkFirstIndicesAndAmountTexture.width!==o||this.linkFirstIndicesAndAmountTexture.height!==o,f=!this.indicesTexture||this.indicesTexture.width!==n||this.indicesTexture.height!==n;u&&(this.linkFirstIndicesAndAmountTexture&&!this.linkFirstIndicesAndAmountTexture.destroyed&&this.linkFirstIndicesAndAmountTexture.destroy(),this.linkFirstIndicesAndAmountTexture=r.createTexture({width:o,height:o,format:"rgba32float",usage:z.SAMPLE|z.COPY_DST})),this.linkFirstIndicesAndAmountTexture.copyImageData({data:this.linkFirstIndicesAndAmount,bytesPerRow:Q("rgba32float",o),mipLevel:0,x:0,y:0}),f&&(this.indicesTexture&&!this.indicesTexture.destroyed&&this.indicesTexture.destroy(),this.biasAndStrengthTexture&&!this.biasAndStrengthTexture.destroyed&&this.biasAndStrengthTexture.destroy(),this.randomDistanceTexture&&!this.randomDistanceTexture.destroyed&&this.randomDistanceTexture.destroy(),this.indicesTexture=r.createTexture({width:n,height:n,format:"rgba32float",usage:z.SAMPLE|z.COPY_DST}),this.biasAndStrengthTexture=r.createTexture({width:n,height:n,format:"rgba32float",usage:z.SAMPLE|z.COPY_DST}),this.randomDistanceTexture=r.createTexture({width:n,height:n,format:"rgba32float",usage:z.SAMPLE|z.COPY_DST})),this.indicesTexture.copyImageData({data:this.indices,bytesPerRow:Q("rgba32float",n),mipLevel:0,x:0,y:0}),this.biasAndStrengthTexture.copyImageData({data:a,bytesPerRow:Q("rgba32float",n),mipLevel:0,x:0,y:0}),this.randomDistanceTexture.copyImageData({data:l,bytesPerRow:Q("rgba32float",n),mipLevel:0,x:0,y:0}),this.previousMaxPointDegree!==void 0&&this.previousMaxPointDegree!==this.maxPointDegree&&((i=this.runCommand)==null||i.destroy(),this.runCommand=void 0),this.previousMaxPointDegree=this.maxPointDegree,this.previousPointsTextureSize=o,this.previousLinksTextureSize=n}initPrograms(){let{device:t,store:i,points:r}=this;!r||!i.pointsTextureSize||!i.linksTextureSize||!this.linkFirstIndicesAndAmountTexture||!this.indicesTexture||!this.biasAndStrengthTexture||!this.randomDistanceTexture||(this.programsSpaceDimensions!==i.spaceDimensions&&(this.programsSpaceDimensions=i.spaceDimensions,this.runCommand&&(this.runCommand.destroy(),this.runCommand=void 0)),this.vertexCoordBuffer||(this.vertexCoordBuffer=t.createBuffer({data:new Float32Array([-1,-1,1,-1,-1,1,1,1])})),this.uniformStore||(this.uniformStore=new ee(t,{forceLinkUniforms:{uniformTypes:{linkSpring:"f32",linkDistance:"f32",linkDistRandomVariationRange:"vec2<f32>",pointsTextureSize:"f32",linksTextureSize:"f32",alpha:"f32"}}})),this.runCommand||(this.runCommand=new re(t,{fs:T2(this.maxPointDegree),vs:Ne,topology:"triangle-strip",vertexCount:4,attributes:{vertexCoord:this.vertexCoordBuffer},bufferLayout:[{name:"vertexCoord",format:"float32x2"}],defines:{USE_UNIFORM_BUFFERS:!0,...i.is3D?{SPACE_3D:!0}:{}},bindings:{forceLinkUniforms:this.uniformStore.getManagedUniformBuffer("forceLinkUniforms")},parameters:{depthWriteEnabled:!1,depthCompare:"always"}})))}run(){let{device:t,store:i,points:r}=this;if(!r||!this.runCommand||!this.uniformStore||!r.previousPositionTexture||r.previousPositionTexture.destroyed||!r.exitTexture||r.exitTexture.destroyed||!this.linkFirstIndicesAndAmountTexture||!this.indicesTexture||!this.biasAndStrengthTexture||!this.randomDistanceTexture||!r.velocityFbo||r.velocityFbo.destroyed||i.pointsTextureSize!==this.previousPointsTextureSize||i.linksTextureSize!==this.previousLinksTextureSize)return;this.uniformStore.setUniforms({forceLinkUniforms:{linkSpring:this.config.simulationLinkSpring,linkDistance:this.config.simulationLinkDistance,linkDistRandomVariationRange:ae(this.config.simulationLinkDistRandomVariationRange,[0,0]),pointsTextureSize:i.pointsTextureSize,linksTextureSize:i.linksTextureSize,alpha:i.alpha}}),this.runCommand.setBindings({positionsTexture:r.previousPositionTexture,exitTexture:r.exitTexture,linkInfoTexture:this.linkFirstIndicesAndAmountTexture,linkIndicesTexture:this.indicesTexture,linkPropertiesTexture:this.biasAndStrengthTexture,linkRandomDistanceTexture:this.randomDistanceTexture});let o=t.beginRenderPass({framebuffer:r.velocityFbo,clearColor:[0,0,0,0]});this.runCommand.draw(o),o.end()}destroy(){var t,i;(t=this.runCommand)==null||t.destroy(),this.runCommand=void 0,this.linkFirstIndicesAndAmountTexture&&!this.linkFirstIndicesAndAmountTexture.destroyed&&this.linkFirstIndicesAndAmountTexture.destroy(),this.linkFirstIndicesAndAmountTexture=void 0,this.indicesTexture&&!this.indicesTexture.destroyed&&this.indicesTexture.destroy(),this.indicesTexture=void 0,this.biasAndStrengthTexture&&!this.biasAndStrengthTexture.destroyed&&this.biasAndStrengthTexture.destroy(),this.biasAndStrengthTexture=void 0,this.randomDistanceTexture&&!this.randomDistanceTexture.destroyed&&this.randomDistanceTexture.destroy(),this.randomDistanceTexture=void 0,(i=this.uniformStore)==null||i.destroy(),this.uniformStore=void 0,this.vertexCoordBuffer&&!this.vertexCoordBuffer.destroyed&&this.vertexCoordBuffer.destroy(),this.vertexCoordBuffer=void 0}},W0=`#version 300 es
precision highp float;

in vec4 vColor;
out vec4 fragColor;

void main() {
  fragColor = vColor;
}`,_2=`#version 300 es
precision highp float;

// Aggregates each point into its grid cell. A level is a plain 2D grid of
// \`levelGridSize\` cells per axis rendered one texel per cell; additive blending
// accumulates [sum(x), sum(y), count, 0] per cell via calculate-level.frag.

uniform sampler2D positionsTexture;
uniform sampler2D exitTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform calculateLevelsPreciseUniforms {
  float pointsTextureSize;
  float levelGridSize;
  float cellSize;
} calculateLevelsPrecise;

#define pointsTextureSize calculateLevelsPrecise.pointsTextureSize
#define levelGridSize calculateLevelsPrecise.levelGridSize
#define cellSize calculateLevelsPrecise.cellSize
#else
uniform float pointsTextureSize;
uniform float levelGridSize;
uniform float cellSize;
#endif

in vec2 pointIndices;

out vec4 vColor;

void main() {
  vColor = vec4(0.0);

  // Absent points must not enter the grid \u2014 a NaN position bins to a NaN cell and
  // poisons the centermass that drives repulsion for every point. (exit.G = absent)
  vec4 exitStatus = texture(exitTexture, (pointIndices + 0.5) / pointsTextureSize);
  if (exitStatus.g > 0.5) {
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    gl_PointSize = 0.0;
    return;
  }

  vec4 pointPosition = texture(positionsTexture, (pointIndices + 0.5) / pointsTextureSize);
  vColor = vec4(pointPosition.rg, 1.0, 0.0);

  // The clamp must match the force shaders exactly, or boundary points fall out
  // of the level decomposition's exactly-once coverage.
  int gridSize = int(levelGridSize);
  ivec2 cell = clamp(ivec2(floor(pointPosition.rg / cellSize)), ivec2(0), ivec2(gridSize - 1));

  vec2 levelPosition = 2.0 * (vec2(cell) + 0.5) / levelGridSize - 1.0;
  gl_Position = vec4(levelPosition, 0.0, 1.0);
  gl_PointSize = 1.0;
}
`,P2=`#version 300 es
precision highp float;

// 3D analog of calculate-level.vert: aggregates each point into its octree cell.
// A level is a 3D grid of \`levelGridSize\` cells per axis, flattened into a 2D
// texture by tiling the z-slices in a grid of \`tilesPerRow\` tiles per row.
// Additive blending accumulates [sum(x), sum(y), count, sum(z)] per cell \u2014
// the same payload layout as the ForceCenter centermass aggregation.

uniform sampler2D positionsTexture;
uniform sampler2D exitTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform calculateLevels3DUniforms {
  float pointsTextureSize;
  float levelGridSize;
  float cellSize;
  float tilesPerRow;
  float levelTextureWidth;
  float levelTextureHeight;
} calculateLevels3D;

#define pointsTextureSize calculateLevels3D.pointsTextureSize
#define levelGridSize calculateLevels3D.levelGridSize
#define cellSize calculateLevels3D.cellSize
#define tilesPerRow calculateLevels3D.tilesPerRow
#define levelTextureWidth calculateLevels3D.levelTextureWidth
#define levelTextureHeight calculateLevels3D.levelTextureHeight
#else
uniform float pointsTextureSize;
uniform float levelGridSize;
uniform float cellSize;
uniform float tilesPerRow;
uniform float levelTextureWidth;
uniform float levelTextureHeight;
#endif

in vec2 pointIndices;

out vec4 vColor;

void main() {
  vColor = vec4(0.0);

  // Absent points must not enter the octree \u2014 a NaN position bins to a NaN cell and
  // poisons the centermass that drives repulsion for every point. (exit.G = absent)
  vec4 exitStatus = texture(exitTexture, (pointIndices + 0.5) / pointsTextureSize);
  if (exitStatus.g > 0.5) {
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    gl_PointSize = 0.0;
    return;
  }

  vec4 pointPosition = texture(positionsTexture, (pointIndices + 0.5) / pointsTextureSize);
  // z lives in the position alpha channel
  vec3 position = vec3(pointPosition.rg, pointPosition.a);
  vColor = vec4(position.xy, 1.0, position.z);

  // The clamp must match the force shaders exactly, or edge points fall out of
  // the level decomposition's exactly-once coverage.
  int gridSize = int(levelGridSize);
  ivec3 cell = clamp(ivec3(floor(position / cellSize)), ivec3(0), ivec3(gridSize - 1));

  int rowTiles = int(tilesPerRow);
  ivec2 pixel = ivec2(
    (cell.z % rowTiles) * gridSize + cell.x,
    (cell.z / rowTiles) * gridSize + cell.y
  );

  vec2 levelPosition = 2.0 * (vec2(pixel) + 0.5) / vec2(levelTextureWidth, levelTextureHeight) - 1.0;
  gl_Position = vec4(levelPosition, 0.0, 1.0);
  gl_PointSize = 1.0;
}
`,C2=`#version 300 es
precision highp float;

// One grid level of precise many-body repulsion (Barnes-Hut-style approximation).
//
// Levels are 2D grids of increasing resolution (4\xB2, 8\xB2, \u2026) holding
// [sum(x), sum(y), count, 0] per cell. The decomposition tiles space exactly
// once across the level passes: after level L the only un-accumulated region is
// the 3\xD73 Chebyshev-1 neighborhood of the point's cell, which the next level
// refines (its aligned 6\xD76 child block), and which force-nearfield.frag finally
// covers at the finest level. The exclusion shell is fixed at Chebyshev
// distance 1.

uniform sampler2D positionsTexture;
uniform sampler2D levelTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform forceLevelPreciseUniforms {
  float levelGridSize;
  float cellSize;
  float isFirstLevel;
  float alpha;
  float repulsion;
} forceLevelPrecise;

#define levelGridSize forceLevelPrecise.levelGridSize
#define cellSize forceLevelPrecise.cellSize
#define isFirstLevel forceLevelPrecise.isFirstLevel
#define alpha forceLevelPrecise.alpha
#define repulsion forceLevelPrecise.repulsion
#else
uniform float levelGridSize;
uniform float cellSize;
uniform float isFirstLevel;
uniform float alpha;
uniform float repulsion;
#endif

in vec2 textureCoords;
out vec4 fragColor;

// Repulsion from one cell's center of mass \u2014 a d3-style clamped
// inverse-distance falloff.
vec2 cellVelocity(ivec2 cell, vec2 position) {
  vec4 centermass = texelFetch(levelTexture, cell, 0);
  // Count-only guard: zero coordinate sums are legitimate, but dividing by a zero
  // count would produce NaN that additive blending propagates into the velocity FBO.
  if (centermass.b <= 0.0) return vec2(0.0);
  vec2 centermassPosition = centermass.rg / centermass.b;
  vec2 distVector = position - centermassPosition;
  float l = dot(distVector, distVector);
  if (l <= 0.0) return vec2(0.0);
  float distanceMin2 = 1.0;
  if (l < distanceMin2) l = sqrt(distanceMin2 * l);
  float addV = alpha * repulsion * centermass.b / sqrt(l);
  return addV * normalize(distVector);
}

void main() {
  vec4 pointPosition = texture(positionsTexture, textureCoords);
  vec2 position = pointPosition.rg;

  int gridSize = int(levelGridSize);
  // Must match the aggregation shader's cell formula exactly.
  ivec2 pointCell = clamp(ivec2(floor(position / cellSize)), ivec2(0), ivec2(gridSize - 1));

  vec2 velocity = vec2(0.0);

  if (isFirstLevel > 0.5) {
    // Coarsest level: every cell except the 3\xD73 neighborhood, which finer levels refine.
    for (int j = 0; j < gridSize; j += 1) {
      for (int i = 0; i < gridSize; i += 1) {
        ivec2 cell = ivec2(i, j);
        ivec2 cellDist = abs(cell - pointCell);
        if (max(cellDist.x, cellDist.y) <= 1) continue;
        velocity += cellVelocity(cell, position);
      }
    }
  } else {
    // The coarser level left its 3\xD73 neighborhood unhandled; those cells refine to
    // the aligned 6\xD76 child block at this level. Sample it minus this level's own
    // 3\xD73 neighborhood (always strictly inside the block).
    ivec2 base = (pointCell / 2) * 2 - 2;
    for (int j = 0; j < 6; j += 1) {
      for (int i = 0; i < 6; i += 1) {
        ivec2 cell = base + ivec2(i, j);
        // Bounds check must precede texelFetch (out-of-range fetches are undefined).
        if (any(lessThan(cell, ivec2(0))) || any(greaterThanEqual(cell, ivec2(gridSize)))) continue;
        ivec2 cellDist = abs(cell - pointCell);
        if (max(cellDist.x, cellDist.y) <= 1) continue;
        velocity += cellVelocity(cell, position);
      }
    }
  }

  fragColor = vec4(velocity, 0.0, 0.0);
}
`,A2=`#version 300 es
precision highp float;

// One octree level of 3D many-body repulsion (Barnes-Hut-style approximation).
//
// Levels are 3D grids of increasing resolution (4\xB3, 8\xB3, \u2026), each flattened into a
// 2D texture of tiled z-slices holding [sum(x), sum(y), count, sum(z)] per cell.
// The decomposition tiles space exactly once across the level passes:
// after level L the only un-accumulated region is the 3\xB3 Chebyshev-1 neighborhood
// of the point's cell, which the next level refines (its aligned 6\xB3 child block),
// and which force-nearfield-3d.frag finally covers at the finest level.
// The exclusion shell is fixed at Chebyshev distance 1 \u2014 the 2D theta parameter
// does not apply in 3D.

uniform sampler2D positionsTexture;
uniform sampler2D levelTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform forceLevel3DUniforms {
  float levelGridSize;
  float cellSize;
  float tilesPerRow;
  float isFirstLevel;
  float alpha;
  float repulsion;
} forceLevel3D;

#define levelGridSize forceLevel3D.levelGridSize
#define cellSize forceLevel3D.cellSize
#define tilesPerRow forceLevel3D.tilesPerRow
#define isFirstLevel forceLevel3D.isFirstLevel
#define alpha forceLevel3D.alpha
#define repulsion forceLevel3D.repulsion
#else
uniform float levelGridSize;
uniform float cellSize;
uniform float tilesPerRow;
uniform float isFirstLevel;
uniform float alpha;
uniform float repulsion;
#endif

in vec2 textureCoords;
out vec4 fragColor;

// Repulsion from one cell's center of mass \u2014 the 3D transcription of the 2D
// calculateAdditionalVelocity (same d3-style clamped inverse-distance falloff).
vec3 cellVelocity(ivec3 cell, int gridSize, int rowTiles, vec3 position) {
  ivec2 pixel = ivec2(
    (cell.z % rowTiles) * gridSize + cell.x,
    (cell.z / rowTiles) * gridSize + cell.y
  );
  vec4 centermass = texelFetch(levelTexture, pixel, 0);
  // Count-only guard: zero coordinate sums are legitimate, but dividing by a zero
  // count would produce NaN that additive blending propagates into the velocity FBO.
  if (centermass.b <= 0.0) return vec3(0.0);
  vec3 centermassPosition = vec3(centermass.r, centermass.g, centermass.a) / centermass.b;
  vec3 distVector = position - centermassPosition;
  float l = dot(distVector, distVector);
  if (l <= 0.0) return vec3(0.0);
  float distanceMin2 = 1.0;
  if (l < distanceMin2) l = sqrt(distanceMin2 * l);
  float addV = alpha * repulsion * centermass.b / sqrt(l);
  return addV * normalize(distVector);
}

void main() {
  vec4 pointPosition = texture(positionsTexture, textureCoords);
  vec3 position = vec3(pointPosition.rg, pointPosition.a);

  int gridSize = int(levelGridSize);
  int rowTiles = int(tilesPerRow);
  // Must match the aggregation shader's cell formula exactly.
  ivec3 pointCell = clamp(ivec3(floor(position / cellSize)), ivec3(0), ivec3(gridSize - 1));

  vec3 velocity = vec3(0.0);

  if (isFirstLevel > 0.5) {
    // Coarsest level: every cell except the 3\xB3 neighborhood, which finer levels refine.
    for (int k = 0; k < gridSize; k += 1) {
      for (int j = 0; j < gridSize; j += 1) {
        for (int i = 0; i < gridSize; i += 1) {
          ivec3 cell = ivec3(i, j, k);
          ivec3 cellDist = abs(cell - pointCell);
          if (max(max(cellDist.x, cellDist.y), cellDist.z) <= 1) continue;
          velocity += cellVelocity(cell, gridSize, rowTiles, position);
        }
      }
    }
  } else {
    // The coarser level left its 3\xB3 neighborhood unhandled; those cells refine to
    // the aligned 6\xB3 child block at this level. Sample it minus this level's own
    // 3\xB3 neighborhood (always strictly inside the block).
    ivec3 base = (pointCell / 2) * 2 - 2;
    for (int k = 0; k < 6; k += 1) {
      for (int j = 0; j < 6; j += 1) {
        for (int i = 0; i < 6; i += 1) {
          ivec3 cell = base + ivec3(i, j, k);
          // Bounds check must precede texelFetch (out-of-range fetches are undefined).
          if (any(lessThan(cell, ivec3(0))) || any(greaterThanEqual(cell, ivec3(gridSize)))) continue;
          ivec3 cellDist = abs(cell - pointCell);
          if (max(max(cellDist.x, cellDist.y), cellDist.z) <= 1) continue;
          velocity += cellVelocity(cell, gridSize, rowTiles, position);
        }
      }
    }
  }

  // z velocity lives in the blue channel (update-position.frag SPACE_3D contract) \u2014
  // unlike the 2D force shaders, which write a constant 1.0 there.
  fragColor = vec4(velocity, 0.0);
}
`,w2=`#version 300 es
precision highp float;

// Near-field pass of the precise grid repulsion (P3M-style). After the finest
// level pass, the only un-accumulated region is the 3\xD73 neighborhood of the
// point's cell.
//
// Cell centroids exert a purely radial force there, which flattens dense hubs
// into disks and petals \u2014 even as a residual for unsampled mass, the centroid
// bias dominates (tangential repulsion scaled by ~K/n never spreads a dense
// clump before alpha decays). So the near field is a pure Monte-Carlo estimator
// instead: the K depth-peeled points of a cell are a uniform random subset
// (re-drawn every tick by build-nearfield-slots.vert), and weighting each
// sampled pairwise force by count/sampled makes the expected force equal the
// exact all-pairs sum \u2014 unbiased, no centroid term. Cells holding \u2264 K points
// are sampled exhaustively, so their forces are exact. The per-tick sampling
// noise acts as annealed jitter: it shrinks with alpha and is precisely what
// breaks clumps apart. The point itself is excluded from both the sample and
// the count.

uniform sampler2D positionsTexture;
uniform sampler2D levelTexture;
uniform sampler2D randomValues;
// One sampler per near-field slot. We list them out instead of using an array
// because WebGL2's GLSL won't let you index a sampler array in a loop. Keep this
// list the same length as NEAR_FIELD_SLOTS in index.ts.
uniform sampler2D slotTexture0;
uniform sampler2D slotTexture1;
uniform sampler2D slotTexture2;
uniform sampler2D slotTexture3;
uniform sampler2D slotTexture4;
uniform sampler2D slotTexture5;
uniform sampler2D slotTexture6;
uniform sampler2D slotTexture7;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform forceNearFieldUniforms {
  float pointsTextureSize;
  float levelGridSize;
  float cellSize;
  float alpha;
  float repulsion;
} forceNearField;

#define pointsTextureSize forceNearField.pointsTextureSize
#define levelGridSize forceNearField.levelGridSize
#define cellSize forceNearField.cellSize
#define alpha forceNearField.alpha
#define repulsion forceNearField.repulsion
#else
uniform float pointsTextureSize;
uniform float levelGridSize;
uniform float cellSize;
uniform float alpha;
uniform float repulsion;
#endif

in vec2 textureCoords;
out vec4 fragColor;

// Same clamped inverse-distance falloff as the level passes (must stay identical).
vec2 pairwiseVelocity(vec2 position, vec2 otherPosition, vec2 randomDir) {
  vec2 distVector = position - otherPosition;
  float l = dot(distVector, distVector);
  if (l <= 0.0) {
    // Exactly coincident points have no separation direction, so an inverse-distance
    // force is undefined and they would stay stacked forever \u2014 a stack's cell count
    // then repels everything around it, carving a void ring. Kick along this point's
    // random vector instead (each point has a different one, so a pile disperses).
    distVector = randomDir;
    l = dot(distVector, distVector);
    if (l <= 0.0) return vec2(0.0);
  }
  float distanceMin2 = 1.0;
  if (l < distanceMin2) l = sqrt(distanceMin2 * l);
  float addV = alpha * repulsion / sqrt(l);
  return addV * normalize(distVector);
}

// One peeled slot of a cell: the unweighted pairwise force from the sampled
// point, counting it toward the sample size. Empty slots and the point itself
// contribute nothing.
vec2 slotVelocity(vec2 slot, vec2 position, float selfIndex, vec2 randomDir, inout float sampled) {
  float index = slot.x;
  // Skip empty slots (index -1) and the point itself. This exact \`==\` \u2014 and the
  // texel math just below \u2014 count on a point index fitting exactly in a float,
  // which only holds for whole numbers up to ~16.7M (2^24). That's every
  // realistic graph; you'd need a points texture bigger than 4096\xB2 to get there.
  // Past that, indices start rounding, so a point could sample the wrong texel or
  // fail to skip itself \u2014 but you'd hit memory limits long before it matters.
  if (index < 0.0 || index == selfIndex) return vec2(0.0);
  int size = int(pointsTextureSize);
  int i = int(index);
  vec4 other = texelFetch(positionsTexture, ivec2(i % size, i / size), 0);
  sampled += 1.0;
  return pairwiseVelocity(position, other.rg, randomDir);
}

void main() {
  vec4 pointPosition = texture(positionsTexture, textureCoords);
  vec2 position = pointPosition.rg;
  // One fragment per point: the fragment's pixel is the point's texel.
  float selfIndex = floor(gl_FragCoord.y) * pointsTextureSize + floor(gl_FragCoord.x);
  vec4 random = texture(randomValues, textureCoords);

  int gridSize = int(levelGridSize);
  ivec2 pointCell = clamp(ivec2(floor(position / cellSize)), ivec2(0), ivec2(gridSize - 1));

  vec2 velocity = vec2(0.0);

  for (int j = -1; j <= 1; j += 1) {
    for (int i = -1; i <= 1; i += 1) {
      ivec2 cell = pointCell + ivec2(i, j);
      if (any(lessThan(cell, ivec2(0))) || any(greaterThanEqual(cell, ivec2(gridSize)))) continue;

      // [sum(x), sum(y), count, 0] \u2014 only the count is used here.
      vec4 aggregate = texelFetch(levelTexture, cell, 0);
      // The count never includes the point itself in the estimate.
      bool ownCell = (i == 0 && j == 0);
      float others = aggregate.b - (ownCell ? 1.0 : 0.0);
      if (others <= 0.0) continue;

      vec2 pairSum = vec2(0.0);
      float sampled = 0.0;
      // Same story as the sampler list above: no looping over samplers in
      // WebGL2, so we read each slot on its own line. This has to match
      // NEAR_FIELD_SLOTS too (and the samplers above, and the bindings in
      // index.ts).
      pairSum += slotVelocity(texelFetch(slotTexture0, cell, 0).rg, position, selfIndex, random.rg, sampled);
      pairSum += slotVelocity(texelFetch(slotTexture1, cell, 0).rg, position, selfIndex, random.rg, sampled);
      pairSum += slotVelocity(texelFetch(slotTexture2, cell, 0).rg, position, selfIndex, random.rg, sampled);
      pairSum += slotVelocity(texelFetch(slotTexture3, cell, 0).rg, position, selfIndex, random.rg, sampled);
      pairSum += slotVelocity(texelFetch(slotTexture4, cell, 0).rg, position, selfIndex, random.rg, sampled);
      pairSum += slotVelocity(texelFetch(slotTexture5, cell, 0).rg, position, selfIndex, random.rg, sampled);
      pairSum += slotVelocity(texelFetch(slotTexture6, cell, 0).rg, position, selfIndex, random.rg, sampled);
      pairSum += slotVelocity(texelFetch(slotTexture7, cell, 0).rg, position, selfIndex, random.rg, sampled);

      // Horvitz\u2013Thompson weighting: the sample is uniform among the cell's
      // other points (conditioned on whether the point itself was peeled),
      // so scaling by others/sampled gives E[force] = exact all-pairs sum.
      // Exhaustively peeled cells (others == sampled) are exact.
      if (sampled > 0.0) velocity += (others / sampled) * pairSum;
    }
  }

  // Random jitter proportional to the velocity, to keep points from sticking.
  velocity += velocity * random.rg;

  // Bound the per-tick kick to the neighborhood scale. The estimator is unbiased
  // but high-variance: in a cell holding far more points than sampled slots, the
  // count/sampled weight can turn a few close samples into a huge one-tick kick.
  // Unbounded, that flings points across the screen at startup and \u2014 because the
  // weight is largest where density is highest \u2014 ejects points from dense cluster
  // centers, leaving voids. Clamping the magnitude keeps the spreading direction
  // while capping the fling; genuine spreading kicks are far below this bound and
  // pass through untouched. The far-field grid levels still drive bulk expansion.
  float maxStep = 2.0 * cellSize;
  float speed = length(velocity);
  if (speed > maxStep) velocity *= maxStep / speed;

  fragColor = vec4(velocity, 0.0, 0.0);
}
`,R2=`#version 300 es
precision highp float;

// Near-field pass of the 3D octree repulsion (P3M-style). After the finest level
// pass, the only un-accumulated region is the 3\xB3 neighborhood of the point's cell.
//
// Cell centroids exert a purely radial force there, which flattens dense hubs
// into disks and petals \u2014 even as a residual for unsampled mass, the centroid
// bias dominates (tangential repulsion scaled by ~K/n never spreads a dense
// clump before alpha decays). So the near field is a pure Monte-Carlo estimator
// instead: the K depth-peeled points of a cell are a uniform random subset
// (re-drawn every tick by build-nearfield-slots.vert), and weighting each
// sampled pairwise force by count/sampled makes the expected force equal the
// exact all-pairs sum \u2014 unbiased, no centroid term. Cells holding \u2264 K points
// are sampled exhaustively, so their forces are exact. The per-tick sampling
// noise acts as annealed jitter: it shrinks with alpha and is precisely what
// breaks clumps apart. The point itself is excluded from both the sample and
// the count.

uniform sampler2D positionsTexture;
uniform sampler2D levelTexture;
uniform sampler2D randomValues;
uniform sampler2D slotTexture0;
uniform sampler2D slotTexture1;
uniform sampler2D slotTexture2;
uniform sampler2D slotTexture3;
uniform sampler2D slotTexture4;
uniform sampler2D slotTexture5;
uniform sampler2D slotTexture6;
uniform sampler2D slotTexture7;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform forceNearField3DUniforms {
  float pointsTextureSize;
  float levelGridSize;
  float cellSize;
  float tilesPerRow;
  float alpha;
  float repulsion;
} forceNearField3D;

#define pointsTextureSize forceNearField3D.pointsTextureSize
#define levelGridSize forceNearField3D.levelGridSize
#define cellSize forceNearField3D.cellSize
#define tilesPerRow forceNearField3D.tilesPerRow
#define alpha forceNearField3D.alpha
#define repulsion forceNearField3D.repulsion
#else
uniform float pointsTextureSize;
uniform float levelGridSize;
uniform float cellSize;
uniform float tilesPerRow;
uniform float alpha;
uniform float repulsion;
#endif

in vec2 textureCoords;
out vec4 fragColor;

// Same clamped inverse-distance falloff as the level passes (must stay identical).
vec3 pairwiseVelocity(vec3 position, vec3 otherPosition, float mass) {
  vec3 distVector = position - otherPosition;
  float l = dot(distVector, distVector);
  if (l <= 0.0) return vec3(0.0);
  float distanceMin2 = 1.0;
  if (l < distanceMin2) l = sqrt(distanceMin2 * l);
  float addV = alpha * repulsion * mass / sqrt(l);
  return addV * normalize(distVector);
}

// One peeled slot of a cell: the unweighted pairwise force from the sampled
// point, counting it toward the sample size. Empty slots and the point itself
// contribute nothing.
vec3 slotVelocity(vec2 slot, vec3 position, float selfIndex, inout float sampled) {
  float index = slot.x;
  if (index < 0.0 || index == selfIndex) return vec3(0.0);
  int size = int(pointsTextureSize);
  int i = int(index);
  vec4 other = texelFetch(positionsTexture, ivec2(i % size, i / size), 0);
  sampled += 1.0;
  return pairwiseVelocity(position, vec3(other.rg, other.a), 1.0);
}

void main() {
  vec4 pointPosition = texture(positionsTexture, textureCoords);
  vec3 position = vec3(pointPosition.rg, pointPosition.a);
  float selfIndex = pointPosition.b;
  vec4 random = texture(randomValues, textureCoords);

  int gridSize = int(levelGridSize);
  int rowTiles = int(tilesPerRow);
  ivec3 pointCell = clamp(ivec3(floor(position / cellSize)), ivec3(0), ivec3(gridSize - 1));

  vec3 velocity = vec3(0.0);

  for (int k = -1; k <= 1; k += 1) {
    for (int j = -1; j <= 1; j += 1) {
      for (int i = -1; i <= 1; i += 1) {
        ivec3 cell = pointCell + ivec3(i, j, k);
        if (any(lessThan(cell, ivec3(0))) || any(greaterThanEqual(cell, ivec3(gridSize)))) continue;
        ivec2 pixel = ivec2(
          (cell.z % rowTiles) * gridSize + cell.x,
          (cell.z / rowTiles) * gridSize + cell.y
        );

        // [sum(x), sum(y), count, sum(z)] \u2014 only the count is used here.
        vec4 aggregate = texelFetch(levelTexture, pixel, 0);
        // The count never includes the point itself in the estimate.
        bool ownCell = (i == 0 && j == 0 && k == 0);
        float others = aggregate.b - (ownCell ? 1.0 : 0.0);
        if (others <= 0.0) continue;

        vec3 pairSum = vec3(0.0);
        float sampled = 0.0;
        // Sampler arrays cannot be indexed dynamically in GLSL ES 3.0 \u2014 unrolled.
        pairSum += slotVelocity(texelFetch(slotTexture0, pixel, 0).rg, position, selfIndex, sampled);
        pairSum += slotVelocity(texelFetch(slotTexture1, pixel, 0).rg, position, selfIndex, sampled);
        pairSum += slotVelocity(texelFetch(slotTexture2, pixel, 0).rg, position, selfIndex, sampled);
        pairSum += slotVelocity(texelFetch(slotTexture3, pixel, 0).rg, position, selfIndex, sampled);
        pairSum += slotVelocity(texelFetch(slotTexture4, pixel, 0).rg, position, selfIndex, sampled);
        pairSum += slotVelocity(texelFetch(slotTexture5, pixel, 0).rg, position, selfIndex, sampled);
        pairSum += slotVelocity(texelFetch(slotTexture6, pixel, 0).rg, position, selfIndex, sampled);
        pairSum += slotVelocity(texelFetch(slotTexture7, pixel, 0).rg, position, selfIndex, sampled);

        // Horvitz\u2013Thompson weighting: the sample is uniform among the cell's
        // other points (conditioned on whether the point itself was peeled),
        // so scaling by others/sampled gives E[force] = exact all-pairs sum.
        // Exhaustively peeled cells (others == sampled) are exact.
        if (sampled > 0.0) velocity += (others / sampled) * pairSum;
      }
    }
  }

  // Random jitter proportional to the velocity, like the 2D centermass fallback.
  velocity += velocity * random.rgb;

  // z velocity lives in the blue channel (update-position.frag SPACE_3D contract).
  fragColor = vec4(velocity, 0.0);
}
`,E2=`#version 300 es
precision highp float;

// One depth-peeling pass of the near-field point-slot build (2D).
//
// The precise grid's near field needs actual point-to-point forces (cell
// centroids alone exert a purely radial force that flattens dense hubs into
// disks and spikes). Each peeling pass selects, per finest-level cell, the
// not-yet-peeled point with the smallest per-tick random hash: the depth test
// keeps the smallest \`hashValue\` among eligible points, and eligibility excludes
// points already captured by the previous slot (hash <= previous slot's hash).
// Running K passes yields a uniform random K-subset per cell, re-randomized
// every tick via \`randomSeed\`; force-nearfield.frag turns it into an unbiased
// estimate of the cell's exact all-pairs repulsion (Monte-Carlo P3M).
//
// The 3D counterpart is build-nearfield-slots-3d.vert, which bins into a tiled
// octree layout instead of this flat grid.

uniform sampler2D positionsTexture;
uniform sampler2D previousSlot;
uniform sampler2D exitTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform buildNearFieldSlotsUniforms {
  float pointsTextureSize;
  float levelGridSize;
  float cellSize;
  float hasPreviousSlot;
  float randomSeed;
} buildNearFieldSlots;

#define pointsTextureSize buildNearFieldSlots.pointsTextureSize
#define levelGridSize buildNearFieldSlots.levelGridSize
#define cellSize buildNearFieldSlots.cellSize
#define hasPreviousSlot buildNearFieldSlots.hasPreviousSlot
#define randomSeed buildNearFieldSlots.randomSeed
#else
uniform float pointsTextureSize;
uniform float levelGridSize;
uniform float cellSize;
uniform float hasPreviousSlot;
uniform float randomSeed;
#endif

in vec2 pointIndices;

out vec2 slotData; // [point index, hash]

void main() {
  // Absent points must not be captured as neighbors \u2014 a NaN position bins to an
  // undefined cell and its distance poisons the force of every point sampling
  // that slot. Same guard as calculate-level.vert. (exit.G = absent)
  vec4 exitStatus = texture(exitTexture, (pointIndices + 0.5) / pointsTextureSize);
  if (exitStatus.g > 0.5) {
    slotData = vec2(-1.0, 1.0);
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    gl_PointSize = 1.0;
    return;
  }

  vec4 pointPosition = texture(positionsTexture, (pointIndices + 0.5) / pointsTextureSize);
  float index = pointIndices.y * pointsTextureSize + pointIndices.x;

  // Per-tick random ordering via an integer hash (lowbias32). A fract(sin(...))
  // hash breaks down here: at large point indices GPU sin() loses precision
  // (differently per vendor), producing correlated or colliding hashes \u2014 and a
  // hash collision makes the peeling test below silently drop a point from the
  // sample. Integer ops are exact everywhere, and both inputs are exact (the
  // index is an integer-valued float; floatBitsToUint reinterprets seed bits).
  uint h = uint(index) ^ floatBitsToUint(randomSeed);
  h ^= h >> 16u;
  h *= 0x7feb352du;
  h ^= h >> 15u;
  h *= 0x846ca68bu;
  h ^= h >> 16u;
  // Top 24 bits only, so the value is exactly representable in a float32 and
  // round-trips bit-exactly through the slot texture into the next pass's
  // comparison. Kept strictly inside (0, 1) so the depth range is safe.
  float hashValue = (float(h >> 8u) + 0.5) / 16777216.0;
  hashValue = 0.001 + hashValue * 0.998;

  // Must match the cell formula of the aggregation and force shaders exactly.
  int gridSize = int(levelGridSize);
  ivec2 cell = clamp(ivec2(floor(pointPosition.rg / cellSize)), ivec2(0), ivec2(gridSize - 1));

  if (hasPreviousSlot > 0.5) {
    vec2 previous = texelFetch(previousSlot, cell, 0).rg;
    // Eligible only if the previous slot captured a point with a smaller hash.
    // An empty previous slot (index -1) means the cell is exhausted \u2014 otherwise
    // this pass would re-capture already-peeled points and double-count them.
    if (previous.x < 0.0 || hashValue <= previous.y) {
      slotData = vec2(-1.0, 1.0);
      gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
      gl_PointSize = 1.0;
      return;
    }
  }

  slotData = vec2(index, hashValue);
  vec2 ndc = 2.0 * (vec2(cell) + 0.5) / levelGridSize - 1.0;
  // The depth test (less) keeps the eligible point with the smallest hash.
  gl_Position = vec4(ndc, hashValue * 2.0 - 1.0, 1.0);
  gl_PointSize = 1.0;
}
`,I2=`#version 300 es
precision highp float;

// One depth-peeling pass of the near-field point-slot build.
//
// The octree's near field needs actual point-to-point forces (cell centroids
// alone exert a purely radial force that flattens dense hubs into disks and
// spikes). Each peeling pass selects, per finest-level cell, the not-yet-peeled
// point with the smallest per-tick random hash: the depth test keeps the
// smallest \`hashValue\` among eligible points, and eligibility excludes points
// already captured by the previous slot (hash <= previous slot's hash). Running
// K passes yields a uniform random K-subset per cell, re-randomized every tick
// via \`randomSeed\`; force-nearfield-3d.frag turns it into an unbiased estimate
// of the cell's exact all-pairs repulsion (Monte-Carlo P3M).

uniform sampler2D positionsTexture;
uniform sampler2D previousSlot;
uniform sampler2D exitTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform buildNearFieldSlots3DUniforms {
  float pointsTextureSize;
  float levelGridSize;
  float cellSize;
  float tilesPerRow;
  float levelTextureWidth;
  float levelTextureHeight;
  float hasPreviousSlot;
  float randomSeed;
} buildNearFieldSlots3D;

#define pointsTextureSize buildNearFieldSlots3D.pointsTextureSize
#define levelGridSize buildNearFieldSlots3D.levelGridSize
#define cellSize buildNearFieldSlots3D.cellSize
#define tilesPerRow buildNearFieldSlots3D.tilesPerRow
#define levelTextureWidth buildNearFieldSlots3D.levelTextureWidth
#define levelTextureHeight buildNearFieldSlots3D.levelTextureHeight
#define hasPreviousSlot buildNearFieldSlots3D.hasPreviousSlot
#define randomSeed buildNearFieldSlots3D.randomSeed
#else
uniform float pointsTextureSize;
uniform float levelGridSize;
uniform float cellSize;
uniform float tilesPerRow;
uniform float levelTextureWidth;
uniform float levelTextureHeight;
uniform float hasPreviousSlot;
uniform float randomSeed;
#endif

in vec2 pointIndices;

out vec2 slotData; // [point index, hash]

void main() {
  // Absent points must not be captured as neighbors \u2014 a NaN position bins to an
  // undefined cell and its distance poisons the force of every point sampling
  // that slot. Same guard as calculate-level-3d.vert. (exit.G = absent)
  vec4 exitStatus = texture(exitTexture, (pointIndices + 0.5) / pointsTextureSize);
  if (exitStatus.g > 0.5) {
    slotData = vec2(-1.0, 1.0);
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    gl_PointSize = 1.0;
    return;
  }

  vec4 pointPosition = texture(positionsTexture, (pointIndices + 0.5) / pointsTextureSize);
  vec3 position = vec3(pointPosition.rg, pointPosition.a);
  float index = pointIndices.y * pointsTextureSize + pointIndices.x;

  // Per-tick random ordering via an integer hash (lowbias32). A fract(sin(...))
  // hash breaks down here: at large point indices GPU sin() loses precision
  // (differently per vendor), producing correlated or colliding hashes \u2014 and a
  // hash collision makes the peeling test below silently drop a point from the
  // sample. Integer ops are exact everywhere, and both inputs are exact (the
  // index is an integer-valued float; floatBitsToUint reinterprets seed bits).
  uint h = uint(index) ^ floatBitsToUint(randomSeed);
  h ^= h >> 16u;
  h *= 0x7feb352du;
  h ^= h >> 15u;
  h *= 0x846ca68bu;
  h ^= h >> 16u;
  // Top 24 bits only, so the value is exactly representable in a float32 and
  // round-trips bit-exactly through the slot texture into the next pass's
  // comparison. Kept strictly inside (0, 1) so the depth range is safe.
  float hashValue = (float(h >> 8u) + 0.5) / 16777216.0;
  hashValue = 0.001 + hashValue * 0.998;

  // Must match the cell formula of the aggregation and force shaders exactly.
  int gridSize = int(levelGridSize);
  ivec3 cell = clamp(ivec3(floor(position / cellSize)), ivec3(0), ivec3(gridSize - 1));
  int rowTiles = int(tilesPerRow);
  ivec2 pixel = ivec2(
    (cell.z % rowTiles) * gridSize + cell.x,
    (cell.z / rowTiles) * gridSize + cell.y
  );

  if (hasPreviousSlot > 0.5) {
    vec2 previous = texelFetch(previousSlot, pixel, 0).rg;
    // Eligible only if the previous slot captured a point with a smaller hash.
    // An empty previous slot (index -1) means the cell is exhausted \u2014 otherwise
    // this pass would re-capture already-peeled points and double-count them.
    if (previous.x < 0.0 || hashValue <= previous.y) {
      slotData = vec2(-1.0, 1.0);
      gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
      gl_PointSize = 1.0;
      return;
    }
  }

  slotData = vec2(index, hashValue);
  vec2 ndc = 2.0 * (vec2(pixel) + 0.5) / vec2(levelTextureWidth, levelTextureHeight) - 1.0;
  // The depth test (less) keeps the eligible point with the smallest hash.
  gl_Position = vec4(ndc, hashValue * 2.0 - 1.0, 1.0);
  gl_PointSize = 1.0;
}
`,V0=`#version 300 es
precision highp float;

in vec2 slotData;
out vec4 fragColor;

void main() {
  fragColor = vec4(slotData, 0.0, 0.0);
}
`,D2=`#version 300 es
precision highp float;

// Exact O(n\xB2) 3D repulsion, used for graphs up to BRUTE_FORCE_3D_MAX_POINTS points
// (larger 3D graphs use the octree passes in calculate-level-3d / force-level-3d /
// force-centermass-3d). It matches the 2D force semantics (d3-style clamped
// inverse-distance falloff) with per-point mass 1.

uniform sampler2D positionsTexture;
uniform sampler2D randomValues;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform forceBruteForceUniforms {
  float pointsTextureSize;
  float pointsNumber;
  float alpha;
  float repulsion;
} forceBruteForce;

#define pointsTextureSize forceBruteForce.pointsTextureSize
#define pointsNumber forceBruteForce.pointsNumber
#define alpha forceBruteForce.alpha
#define repulsion forceBruteForce.repulsion
#else
uniform float pointsTextureSize;
uniform float pointsNumber;
uniform float alpha;
uniform float repulsion;
#endif

in vec2 textureCoords;
out vec4 fragColor;

void main() {
  vec4 pointPosition = texture(positionsTexture, textureCoords);
  // z lives in the position alpha channel
  vec3 position = vec3(pointPosition.rg, pointPosition.a);
  vec4 random = texture(randomValues, textureCoords);

  vec3 velocity = vec3(0.0);
  int size = int(pointsTextureSize);
  int count = int(pointsNumber);
  ivec2 selfPixel = ivec2(gl_FragCoord.xy);
  int pointIndex = 0;

  for (int j = 0; j < size; j += 1) {
    if (pointIndex >= count) break;
    for (int i = 0; i < size; i += 1) {
      if (pointIndex >= count) break;
      pointIndex += 1;
      if (i == selfPixel.x && j == selfPixel.y) continue;

      vec4 otherPosition = texelFetch(positionsTexture, ivec2(i, j), 0);
      vec3 distVector = position - vec3(otherPosition.rg, otherPosition.a);
      float l = dot(distVector, distVector);
      if (l == 0.0) {
        // Coincident points: kick in this point's own random direction so pairs
        // can separate (each point has a different random value).
        distVector = random.rgb;
        l = dot(distVector, distVector);
        if (l == 0.0) continue;
      }

      // Mirrors the 2D level force: c / dist with a minimum-distance clamp.
      float distanceMin2 = 1.0;
      if (l < distanceMin2) l = sqrt(distanceMin2 * l);
      float addV = alpha * repulsion / sqrt(l);
      velocity += addV * normalize(distVector);
    }
  }

  // Random jitter proportional to the velocity, like the 2D centermass force.
  velocity += velocity * random.rgb;

  fragColor = vec4(velocity, 0.0);
}
`,H0=4096,M2=512,F2=64,eu=8,ya=8,wa=class extends kt{constructor(){super(...arguments),this.levels=0,this.levelTargets=new Map,this.levels3D=0,this.levelTargets3D=new Map,this.nearFieldSlotTargets=[],this.nearFieldSlotTargets3D=[]}create(){var t,i,r,o;let{device:n,store:s}=this;if(!s.pointsTextureSize)return;s.is3D?(this.destroyLevelTargets(),this.levels=0,this.createLevels3D()):(this.destroyLevelTargets3D(),this.levels3D=0,this.createLevels());let a=s.pointsTextureSize*s.pointsTextureSize,l=new Float32Array(a*4);for(let c=0;c<a;++c)l[c*4]=s.getRandomFloat(-1,1)*1e-5,l[c*4+1]=s.getRandomFloat(-1,1)*1e-5,l[c*4+2]=s.getRandomFloat(-1,1)*1e-5;if((!this.randomValuesTexture||this.randomValuesTexture.destroyed||this.randomValuesTexture.width!==s.pointsTextureSize||this.randomValuesTexture.height!==s.pointsTextureSize)&&(this.randomValuesTexture&&!this.randomValuesTexture.destroyed&&this.randomValuesTexture.destroy(),this.randomValuesTexture=n.createTexture({width:s.pointsTextureSize,height:s.pointsTextureSize,format:"rgba32float",usage:z.SAMPLE|z.COPY_DST})),this.randomValuesTexture.copyImageData({data:l,bytesPerRow:Q("rgba32float",s.pointsTextureSize),mipLevel:0,x:0,y:0}),!this.pointIndices||this.previousPointsTextureSize!==s.pointsTextureSize){this.pointIndices&&!this.pointIndices.destroyed&&this.pointIndices.destroy();let c=Uo(s.pointsTextureSize);this.pointIndices=n.createBuffer({data:c,usage:U.VERTEX|U.COPY_DST}),(t=this.calculateLevelsCommand)==null||t.setAttributes({pointIndices:this.pointIndices}),(i=this.calculateLevels3DCommand)==null||i.setAttributes({pointIndices:this.pointIndices}),(r=this.buildNearFieldSlotsCommand)==null||r.setAttributes({pointIndices:this.pointIndices}),(o=this.buildNearFieldSlots3DCommand)==null||o.setAttributes({pointIndices:this.pointIndices})}this.previousPointsTextureSize=s.pointsTextureSize,this.previousPointsNumber=this.data.pointsNumber}initPrograms(){let{device:t,store:i,data:r,points:o}=this;!r.pointsNumber||!o||!i.pointsTextureSize||(this.forceVertexCoordBuffer||(this.forceVertexCoordBuffer=t.createBuffer({data:new Float32Array([-1,-1,1,-1,-1,1,1,1])})),this.calculateLevelsUniformStore||(this.calculateLevelsUniformStore=new ee(t,{calculateLevelsPreciseUniforms:{uniformTypes:{pointsTextureSize:"f32",levelGridSize:"f32",cellSize:"f32"},defaultUniforms:{pointsTextureSize:i.pointsTextureSize,levelGridSize:0,cellSize:0}}})),this.calculateLevelsCommand||(this.calculateLevelsCommand=new re(t,{fs:W0,vs:_2,topology:"point-list",vertexCount:r.pointsNumber,attributes:{...this.pointIndices&&{pointIndices:this.pointIndices}},bufferLayout:[{name:"pointIndices",format:"float32x2"}],defines:{USE_UNIFORM_BUFFERS:!0},bindings:{calculateLevelsPreciseUniforms:this.calculateLevelsUniformStore.getManagedUniformBuffer("calculateLevelsPreciseUniforms")},parameters:{blend:!0,blendColorOperation:"add",blendColorSrcFactor:"one",blendColorDstFactor:"one",blendAlphaOperation:"add",blendAlphaSrcFactor:"one",blendAlphaDstFactor:"one",depthWriteEnabled:!1,depthCompare:"always"}})),this.forceLevelUniformStore||(this.forceLevelUniformStore=new ee(t,{forceLevelPreciseUniforms:{uniformTypes:{levelGridSize:"f32",cellSize:"f32",isFirstLevel:"f32",alpha:"f32",repulsion:"f32"},defaultUniforms:{levelGridSize:0,cellSize:0,isFirstLevel:0,alpha:i.alpha,repulsion:this.config.simulationRepulsion}}})),this.forceLevelCommand||(this.forceLevelCommand=new re(t,{fs:C2,vs:Ne,topology:"triangle-strip",vertexCount:4,attributes:{vertexCoord:this.forceVertexCoordBuffer},bufferLayout:[{name:"vertexCoord",format:"float32x2"}],defines:{USE_UNIFORM_BUFFERS:!0},bindings:{forceLevelPreciseUniforms:this.forceLevelUniformStore.getManagedUniformBuffer("forceLevelPreciseUniforms")},parameters:{blend:!0,blendColorOperation:"add",blendColorSrcFactor:"one",blendColorDstFactor:"one",blendAlphaOperation:"add",blendAlphaSrcFactor:"one",blendAlphaDstFactor:"one",depthWriteEnabled:!1,depthCompare:"always"}})),this.buildNearFieldSlotsUniformStore||(this.buildNearFieldSlotsUniformStore=new ee(t,{buildNearFieldSlotsUniforms:{uniformTypes:{pointsTextureSize:"f32",levelGridSize:"f32",cellSize:"f32",hasPreviousSlot:"f32",randomSeed:"f32"},defaultUniforms:{pointsTextureSize:i.pointsTextureSize,levelGridSize:0,cellSize:0,hasPreviousSlot:0,randomSeed:0}}})),this.buildNearFieldSlotsCommand||(this.buildNearFieldSlotsCommand=new re(t,{fs:V0,vs:E2,topology:"point-list",vertexCount:r.pointsNumber,attributes:{...this.pointIndices&&{pointIndices:this.pointIndices}},bufferLayout:[{name:"pointIndices",format:"float32x2"}],defines:{USE_UNIFORM_BUFFERS:!0},bindings:{buildNearFieldSlotsUniforms:this.buildNearFieldSlotsUniformStore.getManagedUniformBuffer("buildNearFieldSlotsUniforms")},parameters:{blend:!1,depthWriteEnabled:!0,depthCompare:"less"}})),this.forceNearFieldUniformStore||(this.forceNearFieldUniformStore=new ee(t,{forceNearFieldUniforms:{uniformTypes:{pointsTextureSize:"f32",levelGridSize:"f32",cellSize:"f32",alpha:"f32",repulsion:"f32"},defaultUniforms:{pointsTextureSize:i.pointsTextureSize,levelGridSize:0,cellSize:0,alpha:i.alpha,repulsion:this.config.simulationRepulsion}}})),this.forceNearFieldCommand||(this.forceNearFieldCommand=new re(t,{fs:w2,vs:Ne,topology:"triangle-strip",vertexCount:4,attributes:{vertexCoord:this.forceVertexCoordBuffer},bufferLayout:[{name:"vertexCoord",format:"float32x2"}],defines:{USE_UNIFORM_BUFFERS:!0},bindings:{forceNearFieldUniforms:this.forceNearFieldUniformStore.getManagedUniformBuffer("forceNearFieldUniforms")},parameters:{blend:!0,blendColorOperation:"add",blendColorSrcFactor:"one",blendColorDstFactor:"one",blendAlphaOperation:"add",blendAlphaSrcFactor:"one",blendAlphaDstFactor:"one",depthWriteEnabled:!1,depthCompare:"always"}})),i.is3D&&(this.bruteForce3DUniformStore||(this.bruteForce3DUniformStore=new ee(t,{forceBruteForceUniforms:{uniformTypes:{pointsTextureSize:"f32",pointsNumber:"f32",alpha:"f32",repulsion:"f32"},defaultUniforms:{pointsTextureSize:i.pointsTextureSize,pointsNumber:r.pointsNumber,alpha:i.alpha,repulsion:this.config.simulationRepulsion}}})),this.bruteForce3DCommand||(this.bruteForce3DCommand=new re(t,{fs:D2,vs:Ne,topology:"triangle-strip",vertexCount:4,attributes:{vertexCoord:this.forceVertexCoordBuffer},bufferLayout:[{name:"vertexCoord",format:"float32x2"}],defines:{USE_UNIFORM_BUFFERS:!0},bindings:{forceBruteForceUniforms:this.bruteForce3DUniformStore.getManagedUniformBuffer("forceBruteForceUniforms")},parameters:{depthWriteEnabled:!1,depthCompare:"always"}})),this.calculateLevels3DUniformStore||(this.calculateLevels3DUniformStore=new ee(t,{calculateLevels3DUniforms:{uniformTypes:{pointsTextureSize:"f32",levelGridSize:"f32",cellSize:"f32",tilesPerRow:"f32",levelTextureWidth:"f32",levelTextureHeight:"f32"},defaultUniforms:{pointsTextureSize:i.pointsTextureSize,levelGridSize:0,cellSize:0,tilesPerRow:0,levelTextureWidth:0,levelTextureHeight:0}}})),this.calculateLevels3DCommand||(this.calculateLevels3DCommand=new re(t,{fs:W0,vs:P2,topology:"point-list",vertexCount:r.pointsNumber,attributes:{...this.pointIndices&&{pointIndices:this.pointIndices}},bufferLayout:[{name:"pointIndices",format:"float32x2"}],defines:{USE_UNIFORM_BUFFERS:!0},bindings:{calculateLevels3DUniforms:this.calculateLevels3DUniformStore.getManagedUniformBuffer("calculateLevels3DUniforms")},parameters:{blend:!0,blendColorOperation:"add",blendColorSrcFactor:"one",blendColorDstFactor:"one",blendAlphaOperation:"add",blendAlphaSrcFactor:"one",blendAlphaDstFactor:"one",depthWriteEnabled:!1,depthCompare:"always"}})),this.forceLevel3DUniformStore||(this.forceLevel3DUniformStore=new ee(t,{forceLevel3DUniforms:{uniformTypes:{levelGridSize:"f32",cellSize:"f32",tilesPerRow:"f32",isFirstLevel:"f32",alpha:"f32",repulsion:"f32"},defaultUniforms:{levelGridSize:0,cellSize:0,tilesPerRow:0,isFirstLevel:0,alpha:i.alpha,repulsion:this.config.simulationRepulsion}}})),this.forceLevel3DCommand||(this.forceLevel3DCommand=new re(t,{fs:A2,vs:Ne,topology:"triangle-strip",vertexCount:4,attributes:{vertexCoord:this.forceVertexCoordBuffer},bufferLayout:[{name:"vertexCoord",format:"float32x2"}],defines:{USE_UNIFORM_BUFFERS:!0},bindings:{forceLevel3DUniforms:this.forceLevel3DUniformStore.getManagedUniformBuffer("forceLevel3DUniforms")},parameters:{blend:!0,blendColorOperation:"add",blendColorSrcFactor:"one",blendColorDstFactor:"one",blendAlphaOperation:"add",blendAlphaSrcFactor:"one",blendAlphaDstFactor:"one",depthWriteEnabled:!1,depthCompare:"always"}})),this.buildNearFieldSlots3DUniformStore||(this.buildNearFieldSlots3DUniformStore=new ee(t,{buildNearFieldSlots3DUniforms:{uniformTypes:{pointsTextureSize:"f32",levelGridSize:"f32",cellSize:"f32",tilesPerRow:"f32",levelTextureWidth:"f32",levelTextureHeight:"f32",hasPreviousSlot:"f32",randomSeed:"f32"},defaultUniforms:{pointsTextureSize:i.pointsTextureSize,levelGridSize:0,cellSize:0,tilesPerRow:0,levelTextureWidth:0,levelTextureHeight:0,hasPreviousSlot:0,randomSeed:0}}})),this.buildNearFieldSlots3DCommand||(this.buildNearFieldSlots3DCommand=new re(t,{fs:V0,vs:I2,topology:"point-list",vertexCount:r.pointsNumber,attributes:{...this.pointIndices&&{pointIndices:this.pointIndices}},bufferLayout:[{name:"pointIndices",format:"float32x2"}],defines:{USE_UNIFORM_BUFFERS:!0},bindings:{buildNearFieldSlots3DUniforms:this.buildNearFieldSlots3DUniformStore.getManagedUniformBuffer("buildNearFieldSlots3DUniforms")},parameters:{blend:!1,depthWriteEnabled:!0,depthCompare:"less"}})),this.forceNearField3DUniformStore||(this.forceNearField3DUniformStore=new ee(t,{forceNearField3DUniforms:{uniformTypes:{pointsTextureSize:"f32",levelGridSize:"f32",cellSize:"f32",tilesPerRow:"f32",alpha:"f32",repulsion:"f32"},defaultUniforms:{pointsTextureSize:i.pointsTextureSize,levelGridSize:0,cellSize:0,tilesPerRow:0,alpha:i.alpha,repulsion:this.config.simulationRepulsion}}})),this.forceNearField3DCommand||(this.forceNearField3DCommand=new re(t,{fs:R2,vs:Ne,topology:"triangle-strip",vertexCount:4,attributes:{vertexCoord:this.forceVertexCoordBuffer},bufferLayout:[{name:"vertexCoord",format:"float32x2"}],defines:{USE_UNIFORM_BUFFERS:!0},bindings:{forceNearField3DUniforms:this.forceNearField3DUniformStore.getManagedUniformBuffer("forceNearField3DUniforms")},parameters:{blend:!0,blendColorOperation:"add",blendColorSrcFactor:"one",blendColorDstFactor:"one",blendAlphaOperation:"add",blendAlphaSrcFactor:"one",blendAlphaDstFactor:"one",depthWriteEnabled:!1,depthCompare:"always"}}))))}run(){this.store.pointsTextureSize!==this.previousPointsTextureSize||this.data.pointsNumber!==this.previousPointsNumber||(this.store.is3D?(this.data.pointsNumber??0)>H0&&this.levelTargets3D.size>0&&this.nearFieldSlotTargets3D.length===ya?(this.drawLevels3D(),this.drawNearFieldSlots3D(),this.drawForcesOctree3D()):this.drawForcesBruteForce3D():(this.drawLevels(),this.drawNearFieldSlots(),this.drawForces()))}destroy(){var t,i,r,o,n,s,a,l,c,d,u,f,h,m,x,S,y,A;(t=this.calculateLevelsCommand)==null||t.destroy(),this.calculateLevelsCommand=void 0,(i=this.forceLevelCommand)==null||i.destroy(),this.forceLevelCommand=void 0,(r=this.buildNearFieldSlotsCommand)==null||r.destroy(),this.buildNearFieldSlotsCommand=void 0,(o=this.forceNearFieldCommand)==null||o.destroy(),this.forceNearFieldCommand=void 0,(n=this.bruteForce3DCommand)==null||n.destroy(),this.bruteForce3DCommand=void 0,(s=this.calculateLevels3DCommand)==null||s.destroy(),this.calculateLevels3DCommand=void 0,(a=this.forceLevel3DCommand)==null||a.destroy(),this.forceLevel3DCommand=void 0,(l=this.buildNearFieldSlots3DCommand)==null||l.destroy(),this.buildNearFieldSlots3DCommand=void 0,(c=this.forceNearField3DCommand)==null||c.destroy(),this.forceNearField3DCommand=void 0,this.destroyLevelTargets(),this.randomValuesTexture&&!this.randomValuesTexture.destroyed&&this.randomValuesTexture.destroy(),this.randomValuesTexture=void 0,this.destroyLevelTargets3D(),(d=this.calculateLevelsUniformStore)==null||d.destroy(),this.calculateLevelsUniformStore=void 0,(u=this.forceLevelUniformStore)==null||u.destroy(),this.forceLevelUniformStore=void 0,(f=this.buildNearFieldSlotsUniformStore)==null||f.destroy(),this.buildNearFieldSlotsUniformStore=void 0,(h=this.forceNearFieldUniformStore)==null||h.destroy(),this.forceNearFieldUniformStore=void 0,(m=this.bruteForce3DUniformStore)==null||m.destroy(),this.bruteForce3DUniformStore=void 0,(x=this.calculateLevels3DUniformStore)==null||x.destroy(),this.calculateLevels3DUniformStore=void 0,(S=this.forceLevel3DUniformStore)==null||S.destroy(),this.forceLevel3DUniformStore=void 0,(y=this.buildNearFieldSlots3DUniformStore)==null||y.destroy(),this.buildNearFieldSlots3DUniformStore=void 0,(A=this.forceNearField3DUniformStore)==null||A.destroy(),this.forceNearField3DUniformStore=void 0,this.pointIndices&&!this.pointIndices.destroyed&&this.pointIndices.destroy(),this.pointIndices=void 0,this.forceVertexCoordBuffer&&!this.forceVertexCoordBuffer.destroyed&&this.forceVertexCoordBuffer.destroy(),this.forceVertexCoordBuffer=void 0}drawForcesBruteForce3D(){let{device:t,store:i,data:r,points:o}=this;if(!o||!this.bruteForce3DCommand||!this.bruteForce3DUniformStore||!o.previousPositionTexture||o.previousPositionTexture.destroyed||!this.randomValuesTexture||this.randomValuesTexture.destroyed||!o.velocityFbo||o.velocityFbo.destroyed)return;this.bruteForce3DUniformStore.setUniforms({forceBruteForceUniforms:{pointsTextureSize:i.pointsTextureSize??0,pointsNumber:r.pointsNumber??0,alpha:i.alpha,repulsion:this.config.simulationRepulsion}}),this.bruteForce3DCommand.setBindings({positionsTexture:o.previousPositionTexture,randomValues:this.randomValuesTexture});let n=t.beginRenderPass({framebuffer:o.velocityFbo,clearColor:[0,0,0,0]});this.bruteForce3DCommand.draw(n),n.end()}drawLevels3D(){let{device:t,store:i,data:r,points:o}=this;if(o&&!(!this.calculateLevels3DCommand||!this.calculateLevels3DUniformStore)&&!(!o.previousPositionTexture||o.previousPositionTexture.destroyed)&&!(!o.exitTexture||o.exitTexture.destroyed)&&r.pointsNumber&&this.pointIndices)for(let n=0;n<this.levels3D;n+=1){let s=this.levelTargets3D.get(n);if(!s||s.fbo.destroyed||s.texture.destroyed)continue;this.calculateLevels3DUniformStore.setUniforms({calculateLevels3DUniforms:{pointsTextureSize:i.pointsTextureSize??0,levelGridSize:s.gridSize,cellSize:i.adjustedSpaceSize/s.gridSize,tilesPerRow:s.tilesPerRow,levelTextureWidth:s.width,levelTextureHeight:s.height}}),this.calculateLevels3DCommand.setVertexCount(r.pointsNumber),this.calculateLevels3DCommand.setBindings({positionsTexture:o.previousPositionTexture,exitTexture:o.exitTexture});let a=t.beginRenderPass({framebuffer:s.fbo,clearColor:[0,0,0,0]});this.calculateLevels3DCommand.draw(a),a.end()}}drawForcesOctree3D(){let{device:t,store:i,points:r}=this;if(!r||!this.forceLevel3DCommand||!this.forceLevel3DUniformStore||!this.forceNearField3DCommand||!this.forceNearField3DUniformStore||this.nearFieldSlotTargets3D.length!==ya||!r.previousPositionTexture||r.previousPositionTexture.destroyed||!this.randomValuesTexture||this.randomValuesTexture.destroyed||!r.velocityFbo||r.velocityFbo.destroyed)return;let o=t.beginRenderPass({framebuffer:r.velocityFbo,clearColor:[0,0,0,0]});for(let n=0;n<this.levels3D;n+=1){let s=this.levelTargets3D.get(n);if(!s||s.texture.destroyed)continue;let a=i.adjustedSpaceSize/s.gridSize;this.forceLevel3DUniformStore.setUniforms({forceLevel3DUniforms:{levelGridSize:s.gridSize,cellSize:a,tilesPerRow:s.tilesPerRow,isFirstLevel:n===0?1:0,alpha:i.alpha,repulsion:this.config.simulationRepulsion}}),this.forceLevel3DCommand.setBindings({positionsTexture:r.previousPositionTexture,levelTexture:s.texture}),this.forceLevel3DCommand.draw(o),n===this.levels3D-1&&(this.forceNearField3DUniformStore.setUniforms({forceNearField3DUniforms:{pointsTextureSize:i.pointsTextureSize??0,levelGridSize:s.gridSize,cellSize:a,tilesPerRow:s.tilesPerRow,alpha:i.alpha,repulsion:this.config.simulationRepulsion}}),this.forceNearField3DCommand.setBindings({positionsTexture:r.previousPositionTexture,levelTexture:s.texture,randomValues:this.randomValuesTexture,slotTexture0:this.nearFieldSlotTargets3D[0].texture,slotTexture1:this.nearFieldSlotTargets3D[1].texture,slotTexture2:this.nearFieldSlotTargets3D[2].texture,slotTexture3:this.nearFieldSlotTargets3D[3].texture,slotTexture4:this.nearFieldSlotTargets3D[4].texture,slotTexture5:this.nearFieldSlotTargets3D[5].texture,slotTexture6:this.nearFieldSlotTargets3D[6].texture,slotTexture7:this.nearFieldSlotTargets3D[7].texture}),this.forceNearField3DCommand.draw(o))}o.end()}drawNearFieldSlots3D(){let{device:t,store:i,data:r,points:o}=this;if(!o||!this.buildNearFieldSlots3DCommand||!this.buildNearFieldSlots3DUniformStore||!o.previousPositionTexture||o.previousPositionTexture.destroyed||!o.exitTexture||o.exitTexture.destroyed||!r.pointsNumber||!this.pointIndices)return;let n=this.levelTargets3D.get(this.levels3D-1);if(!n||n.texture.destroyed)return;let s=i.getRandomFloat(0,1);for(let a=0;a<this.nearFieldSlotTargets3D.length;a+=1){let l=this.nearFieldSlotTargets3D[a];if(!l||l.fbo.destroyed)continue;this.buildNearFieldSlots3DUniformStore.setUniforms({buildNearFieldSlots3DUniforms:{pointsTextureSize:i.pointsTextureSize??0,levelGridSize:n.gridSize,cellSize:i.adjustedSpaceSize/n.gridSize,tilesPerRow:n.tilesPerRow,levelTextureWidth:n.width,levelTextureHeight:n.height,hasPreviousSlot:a===0?0:1,randomSeed:s}}),this.buildNearFieldSlots3DCommand.setVertexCount(r.pointsNumber),this.buildNearFieldSlots3DCommand.setBindings({positionsTexture:o.previousPositionTexture,exitTexture:o.exitTexture,previousSlot:a===0?o.previousPositionTexture:this.nearFieldSlotTargets3D[a-1].texture});let c=t.beginRenderPass({framebuffer:l.fbo,clearColor:[-1,1,0,0],clearDepth:1});this.buildNearFieldSlots3DCommand.draw(c),c.end()}}drawNearFieldSlots(){let{device:t,store:i,data:r,points:o}=this;if(!o||!this.buildNearFieldSlotsCommand||!this.buildNearFieldSlotsUniformStore||!o.previousPositionTexture||o.previousPositionTexture.destroyed||!o.exitTexture||o.exitTexture.destroyed||!r.pointsNumber||!this.pointIndices)return;let n=this.levelTargets.get(this.levels-1);if(!n||n.texture.destroyed)return;let s=i.getRandomFloat(0,1);for(let a=0;a<this.nearFieldSlotTargets.length;a+=1){let l=this.nearFieldSlotTargets[a];if(!l||l.fbo.destroyed)continue;this.buildNearFieldSlotsUniformStore.setUniforms({buildNearFieldSlotsUniforms:{pointsTextureSize:i.pointsTextureSize??0,levelGridSize:n.gridSize,cellSize:i.adjustedSpaceSize/n.gridSize,hasPreviousSlot:a===0?0:1,randomSeed:s}}),this.buildNearFieldSlotsCommand.setVertexCount(r.pointsNumber),this.buildNearFieldSlotsCommand.setBindings({positionsTexture:o.previousPositionTexture,exitTexture:o.exitTexture,previousSlot:a===0?o.previousPositionTexture:this.nearFieldSlotTargets[a-1].texture});let c=t.beginRenderPass({framebuffer:l.fbo,clearColor:[-1,1,0,0],clearDepth:1});this.buildNearFieldSlotsCommand.draw(c),c.end()}}createLevels3D(){let{device:t}=this,i=this.data.pointsNumber??0;if(i<=H0){this.destroyLevelTargets3D(),this.levels3D=0;return}let r=2*Math.cbrt(i),o=Math.min(F2,Math.max(8,Math.pow(2,Math.ceil(Math.log2(r)))));this.levels3D=Math.log2(o)-1;for(let s=0;s<this.levels3D;s+=1){let a=Math.pow(2,s+2),l=Math.ceil(Math.sqrt(a)),c=a*l,d=a*Math.ceil(a/l),u=this.levelTargets3D.get(s);if(u&&u.width===c&&u.height===d)continue;u&&(u.fbo.destroyed||u.fbo.destroy(),u.texture.destroyed||u.texture.destroy());let f=t.createTexture({width:c,height:d,format:"rgba32float",usage:z.SAMPLE|z.RENDER}),h=t.createFramebuffer({width:c,height:d,colorAttachments:[f]});this.levelTargets3D.set(s,{texture:f,fbo:h,gridSize:a,tilesPerRow:l,width:c,height:d})}for(let[s,a]of Array.from(this.levelTargets3D.entries()))s>=this.levels3D&&(a.fbo.destroyed||a.fbo.destroy(),a.texture.destroyed||a.texture.destroy(),this.levelTargets3D.delete(s));let n=this.levelTargets3D.get(this.levels3D-1);n&&this.createNearFieldSlotTargets3D(n)}createNearFieldSlotTargets3D(t){let i=this.nearFieldSlotTargets3D[0];i&&!i.texture.destroyed&&i.texture.width===t.width&&i.texture.height===t.height&&this.nearFieldSlotTargets3D.length===ya||(this.destroyNearFieldSlotTargets3D(),this.nearFieldSlotTargets3D=this.createSlotTargets(t.width,t.height,ya))}createLevels(){let{device:t}=this,i=this.data.pointsNumber??0,r=2*Math.sqrt(i),o=Math.min(M2,Math.max(8,Math.pow(2,Math.ceil(Math.log2(r)))));this.levels=Math.log2(o)-1;for(let s=0;s<this.levels;s+=1){if(this.levelTargets.has(s))continue;let a=Math.pow(2,s+2),l=t.createTexture({width:a,height:a,format:"rgba32float",usage:z.SAMPLE|z.RENDER}),c=t.createFramebuffer({width:a,height:a,colorAttachments:[l]});this.levelTargets.set(s,{texture:l,fbo:c,gridSize:a})}for(let[s,a]of Array.from(this.levelTargets.entries()))s>=this.levels&&(a.fbo.destroyed||a.fbo.destroy(),a.texture.destroyed||a.texture.destroy(),this.levelTargets.delete(s));let n=this.levelTargets.get(this.levels-1);n&&this.createNearFieldSlotTargets(n)}createNearFieldSlotTargets(t){let i=this.nearFieldSlotTargets[0];i&&!i.texture.destroyed&&i.texture.width===t.gridSize&&i.texture.height===t.gridSize&&this.nearFieldSlotTargets.length===eu||(this.destroyNearFieldSlotTargets(),this.nearFieldSlotTargets=this.createSlotTargets(t.gridSize,t.gridSize,eu))}createSlotTargets(t,i,r){let{device:o}=this,n=[];for(let s=0;s<r;s+=1){let a=o.createTexture({width:t,height:i,format:"rg32float",usage:z.SAMPLE|z.RENDER}),l=o.createFramebuffer({width:t,height:i,colorAttachments:[a],depthStencilAttachment:"depth24plus"});n.push({texture:a,fbo:l})}return n}destroyNearFieldSlotTargets(){for(let t of this.nearFieldSlotTargets)t.fbo.destroyed||t.fbo.destroy(),t.texture.destroyed||t.texture.destroy();this.nearFieldSlotTargets=[]}destroyNearFieldSlotTargets3D(){for(let t of this.nearFieldSlotTargets3D)t.fbo.destroyed||t.fbo.destroy(),t.texture.destroyed||t.texture.destroy();this.nearFieldSlotTargets3D=[]}destroyLevelTargets(){for(let t of this.levelTargets.values())t.fbo.destroyed||t.fbo.destroy(),t.texture.destroyed||t.texture.destroy();this.levelTargets.clear(),this.destroyNearFieldSlotTargets()}destroyLevelTargets3D(){for(let t of this.levelTargets3D.values())t.fbo.destroyed||t.fbo.destroy(),t.texture.destroyed||t.texture.destroy();this.levelTargets3D.clear(),this.destroyNearFieldSlotTargets3D()}drawLevels(){let{device:t,store:i,data:r,points:o}=this;if(o&&!(!this.calculateLevelsCommand||!this.calculateLevelsUniformStore)&&!(!o.previousPositionTexture||o.previousPositionTexture.destroyed)&&!(!o.exitTexture||o.exitTexture.destroyed)&&r.pointsNumber&&this.pointIndices)for(let n=0;n<this.levels;n+=1){let s=this.levelTargets.get(n);if(!s||s.fbo.destroyed||s.texture.destroyed)continue;this.calculateLevelsUniformStore.setUniforms({calculateLevelsPreciseUniforms:{pointsTextureSize:i.pointsTextureSize??0,levelGridSize:s.gridSize,cellSize:i.adjustedSpaceSize/s.gridSize}}),this.calculateLevelsCommand.setVertexCount(r.pointsNumber),this.calculateLevelsCommand.setBindings({positionsTexture:o.previousPositionTexture,exitTexture:o.exitTexture});let a=t.beginRenderPass({framebuffer:s.fbo,clearColor:[0,0,0,0]});this.calculateLevelsCommand.draw(a),a.end()}}drawForces(){let{device:t,store:i,points:r}=this;if(!r||!this.forceLevelCommand||!this.forceLevelUniformStore||!this.forceNearFieldCommand||!this.forceNearFieldUniformStore||this.nearFieldSlotTargets.length!==eu||!r.previousPositionTexture||r.previousPositionTexture.destroyed||!this.randomValuesTexture||this.randomValuesTexture.destroyed||!r.velocityFbo||r.velocityFbo.destroyed)return;let o=t.beginRenderPass({framebuffer:r.velocityFbo,clearColor:[0,0,0,0]});for(let n=0;n<this.levels;n+=1){let s=this.levelTargets.get(n);if(!s||s.texture.destroyed)continue;let a=i.adjustedSpaceSize/s.gridSize;this.forceLevelUniformStore.setUniforms({forceLevelPreciseUniforms:{levelGridSize:s.gridSize,cellSize:a,isFirstLevel:n===0?1:0,alpha:i.alpha,repulsion:this.config.simulationRepulsion}}),this.forceLevelCommand.setBindings({positionsTexture:r.previousPositionTexture,levelTexture:s.texture}),this.forceLevelCommand.draw(o),n===this.levels-1&&(this.forceNearFieldUniformStore.setUniforms({forceNearFieldUniforms:{pointsTextureSize:i.pointsTextureSize??0,levelGridSize:s.gridSize,cellSize:a,alpha:i.alpha,repulsion:this.config.simulationRepulsion}}),this.forceNearFieldCommand.setBindings({positionsTexture:r.previousPositionTexture,levelTexture:s.texture,randomValues:this.randomValuesTexture,slotTexture0:this.nearFieldSlotTargets[0].texture,slotTexture1:this.nearFieldSlotTargets[1].texture,slotTexture2:this.nearFieldSlotTargets[2].texture,slotTexture3:this.nearFieldSlotTargets[3].texture,slotTexture4:this.nearFieldSlotTargets[4].texture,slotTexture5:this.nearFieldSlotTargets[5].texture,slotTexture6:this.nearFieldSlotTargets[6].texture,slotTexture7:this.nearFieldSlotTargets[7].texture}),this.forceNearFieldCommand.draw(o))}o.end()}},k2=`#version 300 es
#ifdef GL_ES
precision highp float;
#endif

in vec4 rgba;

out vec4 fragColor;

void main() {
  fragColor = rgba;
}`,N2=`#version 300 es
#ifdef GL_ES
precision highp float;
#endif

uniform sampler2D positionsTexture;
uniform sampler2D clusterTexture;
uniform sampler2D exitTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform calculateCentermassUniforms {
  float pointsTextureSize;
  float clustersTextureSize;
} calculateCentermass;

#define pointsTextureSize calculateCentermass.pointsTextureSize
#define clustersTextureSize calculateCentermass.clustersTextureSize
#else
uniform float pointsTextureSize;
uniform float clustersTextureSize;
#endif

in vec2 pointIndices;

out vec4 rgba;

void main() {
  rgba = vec4(0.0);

  // Absent points must not contribute to their cluster's centroid. (exit.G = absent)
  vec4 exitStatus = texture(exitTexture, (pointIndices + 0.5) / pointsTextureSize);
  if (exitStatus.g > 0.5) {
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    gl_PointSize = 0.0;
    return;
  }

  vec4 pointPosition = texture(positionsTexture, (pointIndices + 0.5) / pointsTextureSize);
  // Payload accumulated per cluster pixel: [sum(x), sum(y), count, sum(z)].
  // The position texture stores z in the alpha channel in 3D mode.
#ifdef SPACE_3D
  rgba = vec4(pointPosition.xy, 1.0, pointPosition.a);
#else
  rgba = vec4(pointPosition.xy, 1.0, 0.0);
#endif

  vec4 pointClusterIndices = texture(clusterTexture, (pointIndices + 0.5) / pointsTextureSize);
  // Unclustered points ([-1, -1]) must not contribute mass to any cluster \u2014
  // vec2(0.0) is the NDC center (a real cluster's texel), so cull them off-screen.
  if (pointClusterIndices.x < 0.0 || pointClusterIndices.y < 0.0) {
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    gl_PointSize = 1.0;
    return;
  }
  vec2 xy = 2.0 * (pointClusterIndices.xy + 0.5) / clustersTextureSize - 1.0;

  gl_Position = vec4(xy, 0.0, 1.0);
  gl_PointSize = 1.0;
}
`,B2=`#version 300 es
#ifdef GL_ES
precision highp float;
#endif

uniform sampler2D positionsTexture;
uniform sampler2D centermassTexture;
uniform sampler2D clusterTexture;
uniform sampler2D clusterPositionsTexture;
uniform sampler2D clusterForceCoefficient;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform applyForcesUniforms {
  float alpha;
  float clustersTextureSize;
  float clusterCoefficient;
} applyForces;

#define alpha applyForces.alpha
#define clustersTextureSize applyForces.clustersTextureSize
#define clusterCoefficient applyForces.clusterCoefficient
#else
uniform float alpha;
uniform float clustersTextureSize;
uniform float clusterCoefficient;
#endif

in vec2 textureCoords;

out vec4 fragColor;


void main() {
  vec4 pointPosition = texture(positionsTexture, textureCoords);
  vec4 velocity = vec4(0.0);
  vec4 pointClusterIndices = texture(clusterTexture, textureCoords);
  // no cluster, so no forces
  if (pointClusterIndices.x >= 0.0 && pointClusterIndices.y >= 0.0) {
#ifdef SPACE_3D
    // positioning points to custom cluster position or either to the center of mass;
    // the centermass texture holds [sum(x), sum(y), count, sum(z)] and the position
    // texture stores z in the alpha channel
    vec4 custom = texture(clusterPositionsTexture, pointClusterIndices.xy / clustersTextureSize);
    vec4 centermassValues = texture(centermassTexture, pointClusterIndices.xy / clustersTextureSize);
    vec3 centermass = vec3(centermassValues.rg, centermassValues.a) / centermassValues.b;
    vec3 clusterPositions;
    if (custom.x < 0.0 || custom.y < 0.0) {
      clusterPositions = centermass;
    } else {
      // A custom position set via the 2D setter has no z (stored as -1) \u2014
      // pin x/y and let z follow the cluster's centroid
      clusterPositions = vec3(custom.xy, custom.b >= 0.0 ? custom.b : centermass.z);
    }
    vec4 clusterCustomCoeff = texture(clusterForceCoefficient, textureCoords);
    vec3 distVector = clusterPositions - vec3(pointPosition.xy, pointPosition.a);
    float dist = length(distVector);
    if (dist > 0.0) {
      float addV = alpha * dist * clusterCoefficient * clusterCustomCoeff.r;
      // z velocity lives in the blue channel (update-position.frag SPACE_3D contract)
      velocity.rgb += addV * normalize(distVector);
    }
#else
    // positioning points to custom cluster position or either to the center of mass
    vec2 clusterPositions = texture(clusterPositionsTexture, pointClusterIndices.xy / clustersTextureSize).xy;
    if (clusterPositions.x < 0.0 || clusterPositions.y < 0.0) {
      vec4 centermassValues = texture(centermassTexture, pointClusterIndices.xy / clustersTextureSize);
      clusterPositions = centermassValues.xy / centermassValues.b;
    }
    vec4 clusterCustomCoeff = texture(clusterForceCoefficient, textureCoords);
    vec2 distVector = clusterPositions.xy - pointPosition.xy;
    float dist = length(distVector);
    if (dist > 0.0) {
      float addV = alpha * dist * clusterCoefficient * clusterCustomCoeff.r;
      velocity.rg += addV * normalize(distVector);
    }
#endif
  }

  fragColor = velocity;
}`,lu=class extends kt{constructor(){super(...arguments),this.programsSpaceDimensions=2,this.cachedCentroidPositions=null}create(){var t,i;this.cachedCentroidPositions=null;let{device:r,store:o,data:n}=this,{pointsTextureSize:s}=o;if(n.pointsNumber===void 0||!n.pointClusters&&!n.clusterPositions)return;this.clusterCount=(n.pointClusters??[]).reduce((h,m)=>m===void 0||m<0?h:Math.max(h,m),0)+1,this.clustersTextureSize=Math.ceil(Math.sqrt(this.clusterCount));let a=this.previousPointsTextureSize!==s||this.previousClustersTextureSize!==this.clustersTextureSize||this.previousClusterCount!==this.clusterCount,l=s*s*4,c=this.clustersTextureSize*this.clustersTextureSize*4,d=new Float32Array(l),u=new Float32Array(c).fill(-1),f=new Float32Array(l).fill(1);if(n.clusterPositions){let h=n.clusterPositionsDimensions;for(let m=0;m<this.clusterCount;++m)u[m*4+0]=n.clusterPositions[m*h+0]??-1,u[m*4+1]=n.clusterPositions[m*h+1]??-1,h===3&&(u[m*4+2]=n.clusterPositions[m*h+2]??-1)}for(let h=0;h<n.pointsNumber;++h){let m=(t=n.pointClusters)==null?void 0:t[h];m===void 0?(d[h*4+0]=-1,d[h*4+1]=-1):(d[h*4+0]=m%this.clustersTextureSize,d[h*4+1]=Math.floor(m/this.clustersTextureSize)),n.clusterStrength&&(f[h*4+0]=n.clusterStrength[h]??1)}if(!this.clusterTexture||a?(this.clusterTexture&&!this.clusterTexture.destroyed&&this.clusterTexture.destroy(),this.clusterTexture=r.createTexture({width:s,height:s,format:"rgba32float",usage:z.SAMPLE|z.RENDER|z.COPY_DST}),this.clusterTexture.copyImageData({data:d,bytesPerRow:Q("rgba32float",s),mipLevel:0,x:0,y:0})):this.clusterTexture.copyImageData({data:d,bytesPerRow:Q("rgba32float",s),mipLevel:0,x:0,y:0}),!this.clusterPositionsTexture||a?(this.clusterPositionsTexture&&!this.clusterPositionsTexture.destroyed&&this.clusterPositionsTexture.destroy(),this.clusterPositionsTexture=r.createTexture({width:this.clustersTextureSize,height:this.clustersTextureSize,format:"rgba32float",usage:z.SAMPLE|z.RENDER|z.COPY_DST}),this.clusterPositionsTexture.copyImageData({data:u,bytesPerRow:Q("rgba32float",this.clustersTextureSize),mipLevel:0,x:0,y:0})):this.clusterPositionsTexture.copyImageData({data:u,bytesPerRow:Q("rgba32float",this.clustersTextureSize),mipLevel:0,x:0,y:0}),!this.clusterForceCoefficientTexture||a?(this.clusterForceCoefficientTexture&&!this.clusterForceCoefficientTexture.destroyed&&this.clusterForceCoefficientTexture.destroy(),this.clusterForceCoefficientTexture=r.createTexture({width:s,height:s,format:"rgba32float",usage:z.SAMPLE|z.RENDER|z.COPY_DST}),this.clusterForceCoefficientTexture.copyImageData({data:f,bytesPerRow:Q("rgba32float",s),mipLevel:0,x:0,y:0})):this.clusterForceCoefficientTexture.copyImageData({data:f,bytesPerRow:Q("rgba32float",s),mipLevel:0,x:0,y:0}),!this.centermassTexture||this.previousClustersTextureSize!==this.clustersTextureSize?(this.centermassFbo&&!this.centermassFbo.destroyed&&this.centermassFbo.destroy(),this.centermassTexture&&!this.centermassTexture.destroyed&&this.centermassTexture.destroy(),this.centermassTexture=r.createTexture({width:this.clustersTextureSize,height:this.clustersTextureSize,format:"rgba32float",usage:z.SAMPLE|z.RENDER|z.COPY_DST}),this.centermassTexture.copyImageData({data:new Float32Array(c).fill(0),bytesPerRow:Q("rgba32float",this.clustersTextureSize),mipLevel:0,x:0,y:0}),this.centermassFbo=r.createFramebuffer({width:this.clustersTextureSize,height:this.clustersTextureSize,colorAttachments:[this.centermassTexture]})):this.centermassTexture.copyImageData({data:new Float32Array(c).fill(0),bytesPerRow:Q("rgba32float",this.clustersTextureSize),mipLevel:0,x:0,y:0}),!this.pointIndices||this.previousPointsTextureSize!==s){this.pointIndices&&!this.pointIndices.destroyed&&this.pointIndices.destroy();let h=Uo(o.pointsTextureSize);this.pointIndices=r.createBuffer({data:h,usage:U.VERTEX|U.COPY_DST}),(i=this.calculateCentermassCommand)==null||i.setAttributes({pointIndices:this.pointIndices})}this.previousPointsTextureSize=s,this.previousClustersTextureSize=this.clustersTextureSize,this.previousClusterCount=this.clusterCount}initPrograms(){var t,i;let{device:r,store:o,data:n}=this;n.pointsNumber===void 0||!n.pointClusters&&!n.clusterPositions||(this.programsSpaceDimensions!==o.spaceDimensions&&(this.programsSpaceDimensions=o.spaceDimensions,(t=this.calculateCentermassCommand)==null||t.destroy(),this.calculateCentermassCommand=void 0,(i=this.applyForcesCommand)==null||i.destroy(),this.applyForcesCommand=void 0),this.calculateCentermassUniformStore||(this.calculateCentermassUniformStore=new ee(r,{calculateCentermassUniforms:{uniformTypes:{pointsTextureSize:"f32",clustersTextureSize:"f32"},defaultUniforms:{pointsTextureSize:o.pointsTextureSize,clustersTextureSize:this.clustersTextureSize??0}}})),this.calculateCentermassCommand||(this.calculateCentermassCommand=new re(r,{fs:k2,vs:N2,topology:"point-list",vertexCount:n.pointsNumber??0,attributes:{...this.pointIndices&&{pointIndices:this.pointIndices}},bufferLayout:[{name:"pointIndices",format:"float32x2"}],defines:{USE_UNIFORM_BUFFERS:!0,...o.is3D?{SPACE_3D:!0}:{}},bindings:{calculateCentermassUniforms:this.calculateCentermassUniformStore.getManagedUniformBuffer("calculateCentermassUniforms")},parameters:{blend:!0,blendColorOperation:"add",blendColorSrcFactor:"one",blendColorDstFactor:"one",blendAlphaOperation:"add",blendAlphaSrcFactor:"one",blendAlphaDstFactor:"one",depthWriteEnabled:!1,depthCompare:"always"}})),this.applyForcesUniformStore||(this.applyForcesUniformStore=new ee(r,{applyForcesUniforms:{uniformTypes:{alpha:"f32",clustersTextureSize:"f32",clusterCoefficient:"f32"},defaultUniforms:{alpha:o.alpha,clustersTextureSize:this.clustersTextureSize??0,clusterCoefficient:this.config.simulationCluster}}})),this.applyForcesVertexCoordBuffer||(this.applyForcesVertexCoordBuffer=r.createBuffer({data:new Float32Array([-1,-1,1,-1,-1,1,1,1])})),this.applyForcesCommand||(this.applyForcesCommand=new re(r,{fs:B2,vs:Ne,topology:"triangle-strip",vertexCount:4,attributes:{vertexCoord:this.applyForcesVertexCoordBuffer},bufferLayout:[{name:"vertexCoord",format:"float32x2"}],defines:{USE_UNIFORM_BUFFERS:!0,...o.is3D?{SPACE_3D:!0}:{}},bindings:{applyForcesUniforms:this.applyForcesUniformStore.getManagedUniformBuffer("applyForcesUniforms")}})))}calculateCentermass(){let{device:t,points:i}=this;if(!i||!this.calculateCentermassCommand||!this.calculateCentermassUniformStore||!this.pointIndices||!this.centermassFbo||this.centermassFbo.destroyed||!this.clusterTexture||this.clusterTexture.destroyed||!i.previousPositionTexture||i.previousPositionTexture.destroyed||!i.exitTexture||i.exitTexture.destroyed)return;this.calculateCentermassCommand.setVertexCount(this.data.pointsNumber??0),this.calculateCentermassUniformStore.setUniforms({calculateCentermassUniforms:{pointsTextureSize:this.store.pointsTextureSize,clustersTextureSize:this.clustersTextureSize??0}}),this.calculateCentermassCommand.setBindings({clusterTexture:this.clusterTexture,positionsTexture:i.previousPositionTexture,exitTexture:i.exitTexture});let r=t.beginRenderPass({framebuffer:this.centermassFbo,clearColor:[0,0,0,0]});this.calculateCentermassCommand.draw(r),r.end()}getCentroidPositions(t=2){return this.computeCentroidPositions(t)}run(){var t;if(!this.data.pointClusters&&!this.data.clusterPositions||(this.calculateCentermass(),!this.applyForcesCommand||!this.applyForcesUniformStore)||!this.clusterTexture||this.clusterTexture.destroyed||!this.centermassTexture||this.centermassTexture.destroyed||!this.clusterPositionsTexture||this.clusterPositionsTexture.destroyed||!this.clusterForceCoefficientTexture||this.clusterForceCoefficientTexture.destroyed||!((t=this.points)!=null&&t.previousPositionTexture)||this.points.previousPositionTexture.destroyed||!this.points.velocityFbo||this.points.velocityFbo.destroyed)return;this.applyForcesUniformStore.setUniforms({applyForcesUniforms:{alpha:this.store.alpha,clustersTextureSize:this.clustersTextureSize??0,clusterCoefficient:this.config.simulationCluster}}),this.applyForcesCommand.setBindings({clusterTexture:this.clusterTexture,centermassTexture:this.centermassTexture,clusterPositionsTexture:this.clusterPositionsTexture,clusterForceCoefficient:this.clusterForceCoefficientTexture,positionsTexture:this.points.previousPositionTexture});let i=this.device.beginRenderPass({framebuffer:this.points.velocityFbo,clearColor:[0,0,0,0]});this.applyForcesCommand.draw(i),i.end()}destroy(){var t,i,r,o;this.cachedCentroidPositions=null,(t=this.calculateCentermassCommand)==null||t.destroy(),this.calculateCentermassCommand=void 0,(i=this.applyForcesCommand)==null||i.destroy(),this.applyForcesCommand=void 0,this.centermassFbo&&!this.centermassFbo.destroyed&&this.centermassFbo.destroy(),this.centermassFbo=void 0,this.clusterTexture&&!this.clusterTexture.destroyed&&this.clusterTexture.destroy(),this.clusterTexture=void 0,this.clusterPositionsTexture&&!this.clusterPositionsTexture.destroyed&&this.clusterPositionsTexture.destroy(),this.clusterPositionsTexture=void 0,this.clusterForceCoefficientTexture&&!this.clusterForceCoefficientTexture.destroyed&&this.clusterForceCoefficientTexture.destroy(),this.clusterForceCoefficientTexture=void 0,this.centermassTexture&&!this.centermassTexture.destroyed&&this.centermassTexture.destroy(),this.centermassTexture=void 0,(r=this.calculateCentermassUniformStore)==null||r.destroy(),this.calculateCentermassUniformStore=void 0,(o=this.applyForcesUniformStore)==null||o.destroy(),this.applyForcesUniformStore=void 0,this.pointIndices&&!this.pointIndices.destroyed&&this.pointIndices.destroy(),this.pointIndices=void 0,this.applyForcesVertexCoordBuffer&&!this.applyForcesVertexCoordBuffer.destroyed&&this.applyForcesVertexCoordBuffer.destroy(),this.applyForcesVertexCoordBuffer=void 0}computeCentroidPositions(t){var i,r;let{config:{enableSimulation:o},store:{isSimulationRunning:n}}=this,s=!o||!n;if(s&&(i=this.points)!=null&&i.areClusterCentroidsUpToDate&&((r=this.cachedCentroidPositions)==null?void 0:r.dimensions)===t)return this.cachedCentroidPositions.positions;if(this.calculateCentermass(),!this.centermassFbo||this.centermassFbo.destroyed||this.clusterCount===void 0)return[];let a=Ke(this.device,this.centermassFbo),l=[];l.length=this.clusterCount*t;for(let c=0;c<this.clusterCount;c+=1){let d=a[c*4+0],u=a[c*4+1],f=a[c*4+2],h=a[c*4+3];d!==void 0&&u!==void 0&&f!==void 0&&(l[c*t]=d/f,l[c*t+1]=u/f,t===3&&(l[c*t+2]=(h??0)/f))}return s&&this.points&&(this.cachedCentroidPositions={dimensions:t,positions:l},this.points.areClusterCentroidsUpToDate=!0),l}},O2=`
  #gl-bench {
    position:absolute;
    right:0;
    top:0;
    z-index:1000;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }
  #gl-bench div {
    position: relative;
    display: block;
    margin: 4px;
    padding: 0 7px 0 10px;
    background: #5f69de;
    border-radius: 15px;
    cursor: pointer;
    opacity: 0.9;
  }
  #gl-bench svg {
    height: 60px;
    margin: 0 -1px;
  }
  #gl-bench text {
    font-size: 12px;
    font-family: Helvetica,Arial,sans-serif;
    font-weight: 700;
    dominant-baseline: middle;
    text-anchor: middle;
  }
  #gl-bench .gl-mem {
    font-size: 9px;
  }
  #gl-bench line {
    stroke-width: 5;
    stroke: #112211;
    stroke-linecap: round;
  }
  #gl-bench polyline {
    fill: none;
    stroke: #112211;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 3.5;
  }
  #gl-bench rect {
    fill: #8288e4;
  }
  #gl-bench .opacity {
    stroke: #8288e4;
  }
`,Ra=class{constructor(t){this.destroy();let i=t.getContext("webgl")||t.getContext("experimental-webgl");this.bench=new J0.default(i,{css:O2})}begin(){var t;(t=this.bench)==null||t.begin("frame")}end(t){var i,r;(i=this.bench)==null||i.end("frame"),(r=this.bench)==null||r.nextFrame(t)}destroy(){this.bench=void 0,ue("#gl-bench").remove()}},z2=`
vec2 conicParametricCurve(vec2 A, vec2 B, vec2 ControlPoint, float t, float w) {
  vec2 divident = (1.0 - t) * (1.0 - t) * A + 2.0 * (1.0 - t) * t * w * ControlPoint + t * t * B;
  float divisor = (1.0 - t) * (1.0 - t) + 2.0 * (1.0 - t) * t * w + t * t;
  return divident / divisor;
}

// 3D overload: the same rational quadratic Bezier evaluated component-wise for
// world-space curves (3D links bend within the plane facing the camera).
vec3 conicParametricCurve(vec3 A, vec3 B, vec3 ControlPoint, float t, float w) {
  vec3 divident = (1.0 - t) * (1.0 - t) * A + 2.0 * (1.0 - t) * t * w * ControlPoint + t * t * B;
  float divisor = (1.0 - t) * (1.0 - t) + 2.0 * (1.0 - t) * t * w + t * t;
  return divident / divisor;
}
`,$0={name:"conicParametricCurve",vs:z2},U2=`
float focalNdc(mat4 m) {
  return length(vec3(m[0][1], m[1][1], m[2][1]));
}

float pxPerSpaceUnit(mat4 viewProjection, vec2 screen, float w) {
  return 0.5 * screen.y * focalNdc(viewProjection) / w;
}

vec3 cameraForward(mat4 viewProjection) {
  return vec3(viewProjection[0][3], viewProjection[1][3], viewProjection[2][3]);
}
`,Oo={name:"space3d",vs:U2},L2=`#version 300 es
#ifdef GL_ES
precision highp float;
#endif

in vec4 rgbaColor;
in vec2 pos;
in float arrowLength;
in float useArrow;
in float smoothing;
in float arrowWidthFactor;
in float linkIndex;
flat in float vLinkStyle;
flat in float vLinkDashSpan;
flat in float vLinkDashWidth;
flat in vec4 vEndpointColorA;
flat in vec4 vEndpointColorB;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform drawLineFragmentUniforms {
  float renderMode;
  float linkDashLength;
  float linkDashGap;
  float linkColorInterpolateFromEndpoints;
  float hoveredLinkIndex;
  vec4 hoveredLinkColor;
} drawLineFrag;

#define renderMode drawLineFrag.renderMode
#define linkDashLength drawLineFrag.linkDashLength
#define linkDashGap drawLineFrag.linkDashGap
#define linkColorInterpolateFromEndpoints drawLineFrag.linkColorInterpolateFromEndpoints
#define hoveredLinkIndex drawLineFrag.hoveredLinkIndex
#define hoveredLinkColor drawLineFrag.hoveredLinkColor
#else
// renderMode: 0.0 = normal rendering, 1.0 = index buffer rendering for picking
uniform float renderMode;
uniform float linkDashLength;
uniform float linkDashGap;
uniform float linkColorInterpolateFromEndpoints;
uniform float hoveredLinkIndex;
uniform vec4 hoveredLinkColor;
#endif

out vec4 fragColor;

float map(float value, float min1, float max1, float min2, float max2) {
  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

// LinkStyle enum values (must match \`LinkStyle\` in modules/GraphData). Compared with
// exact equality, like the point shapes: the CPU sanitizer guarantees exact integers
// and vLinkStyle is flat, so an unknown future style matches nothing and renders solid.
const float LINK_STYLE_DASHED = 1.0;
const float LINK_STYLE_DOTTED = 2.0;

// Anti-aliased on/off mask for one dash period. \`phase\` is distance-along-line in px,
// \`on\` is the lit dash length, \`period\` is on + gap, \`aa\` is the smoothing half-width in px.
float strokeMask(float phase, float on, float period, float aa) {
  float m = mod(phase, period);
  return smoothstep(-aa, aa, m) * (1.0 - smoothstep(on - aa, on + aa, m));
}

void main() {
  float opacity = 1.0;
  vec3 color = rgbaColor.rgb;

  // Arrowhead extent along the link (pos.x space) \u2014 used by the arrow rendering
  // and by the dash mask, which leaves the arrowhead solid.
  float end_arrow = 0.5 + arrowLength / 2.0;
  float start_arrow = end_arrow - arrowLength;

  // Gradient links: interpolate RGB from the source point color to the target point color
  // along the link. Opacity (visibility / greyout) still comes from rgbaColor.a.
  if (linkColorInterpolateFromEndpoints > 0.5) {
    color = mix(vEndpointColorA.rgb, vEndpointColorB.rgb, clamp(pos.x, 0.0, 1.0));
  }

  if (useArrow > 0.5) {
    float arrowWidthDelta = arrowWidthFactor / 2.0;
    float linkOpacity = rgbaColor.a * smoothstep(0.5 - arrowWidthDelta, 0.5 - arrowWidthDelta - smoothing / 2.0, abs(pos.y));
    float arrowOpacity = 1.0;
    if (pos.x > start_arrow && pos.x < start_arrow + arrowLength) {
      float xmapped = map(pos.x, start_arrow, end_arrow, 0.0, 1.0);
      arrowOpacity = rgbaColor.a * smoothstep(xmapped - smoothing, xmapped, map(abs(pos.y), 0.5, 0.0, 0.0, 1.0));
      if (linkOpacity != arrowOpacity) {
        linkOpacity = max(linkOpacity, arrowOpacity);
      }
    }
    opacity = linkOpacity;
  } else opacity = rgbaColor.a * smoothstep(0.5, 0.5 - smoothing, abs(pos.y));

  // Dashed / dotted stroke patterns. Applied to the visible pass only (renderMode == 0.0)
  // so that gaps stay fully pickable in the index pass. The arrowhead region is left solid.
  if (renderMode < 0.5 && (vLinkStyle == LINK_STYLE_DASHED || vLinkStyle == LINK_STYLE_DOTTED)) {
    bool inArrowHead = (useArrow > 0.5) && (pos.x > start_arrow) && (pos.x < end_arrow);
    if (!inArrowHead) {
      // Distance along the link in the dash pattern's space (screen px or world units; see the vertex shader).
      // fwidth() gives the screen-space rate of change, so anti-aliasing stays ~1px wide in either space.
      float phase = clamp(pos.x, 0.0, 1.0) * vLinkDashSpan;
      if (vLinkStyle == LINK_STYLE_DASHED) {
        float period = max(linkDashLength + linkDashGap, 0.001);
        float aa = max(fwidth(phase), 1e-4);
        opacity *= strokeMask(phase, linkDashLength, period, aa);
      } else {
        // Dotted: round dots sized to the stroke width, spaced by diameter + gap.
        // On arrowed links the quad is widened to fit the arrowhead and the stroke
        // occupies only (1 - arrowWidthFactor) of it \u2014 size dots to the stroke,
        // not the widened quad.
        float diameter = useArrow > 0.5 ? vLinkDashWidth * (1.0 - arrowWidthFactor) : vLinkDashWidth;
        float period = max(diameter + linkDashGap, 0.001);
        float localX = mod(phase, period) - period * 0.5;
        float localY = pos.y * vLinkDashWidth;
        float r = length(vec2(localX, localY));
        float aa = max(fwidth(r), 1e-4);
        opacity *= 1.0 - smoothstep(diameter * 0.5 - aa, diameter * 0.5 + aa, r);
      }
    }
  }

  // Apply hover color if this is the hovered link and hover color is defined.
  // Done last \u2014 after the gradient and the dash mask \u2014 so hover wins over every
  // color source (per-link color from the vertex stage and the endpoint gradient
  // alike), while the dash pattern and AA stay intact in the hover color.
  if (hoveredLinkIndex == linkIndex && hoveredLinkColor.a > -0.5) {
    color = hoveredLinkColor.rgb;
    opacity *= hoveredLinkColor.a;
  }

  if (renderMode > 0.0) {
    if (opacity <= 0.0) discard;
    fragColor = vec4(linkIndex, 0.0, 0.0, 1.0);
  } else fragColor = vec4(color, opacity);

}
`,W2=`#version 300 es
#ifdef GL_ES
precision highp float;
#endif

in vec2 position, pointA, pointB;
in vec4 sourceColor;
in vec4 targetColor;
in float sourceWidth;
in float targetWidth;
in float arrow;
in float linkIndices;
in float linkStyle;

uniform sampler2D positionsTexture;
uniform sampler2D linkStatus;
uniform sampler2D exitTexture;
uniform sampler2D pointColorsTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform drawLineUniforms {
  mat4 transformationMatrix;
  float pointsTextureSize;
  float widthScale;
  float linkArrowsSizeScale;
  float spaceSize;
  vec2 screenSize;
  vec2 linkVisibilityDistanceRange;
  float linkVisibilityMinTransparency;
  float linkOpacity;
  float greyoutOpacity;
  float curvedWeight;
  float curvedLinkControlPointDistance;
  float curvedLinkSegments;
  float scaleLinksOnZoom;
  float maxPointSize;
  float renderMode;
  float hoveredLinkIndex;
  float hoveredLinkWidthIncrease;
  float isLinkHighlightingActive;
  float linkStatusTextureSize;
  float focusedLinkIndex;
  float focusedLinkWidthIncrease;
  float transitionProgress;
  float animateColors;
  float animateWidths;
  float animatePositions;
  vec4 pointDefaultColor;
  float linkColorInterpolateFromEndpoints;
} drawLine;

#define transformationMatrix drawLine.transformationMatrix
#define pointsTextureSize drawLine.pointsTextureSize
#define widthScale drawLine.widthScale
#define linkArrowsSizeScale drawLine.linkArrowsSizeScale
#define spaceSize drawLine.spaceSize
#define screenSize drawLine.screenSize
#define linkVisibilityDistanceRange drawLine.linkVisibilityDistanceRange
#define linkVisibilityMinTransparency drawLine.linkVisibilityMinTransparency
#define linkOpacity drawLine.linkOpacity
#define greyoutOpacity drawLine.greyoutOpacity
#define curvedWeight drawLine.curvedWeight
#define curvedLinkControlPointDistance drawLine.curvedLinkControlPointDistance
#define curvedLinkSegments drawLine.curvedLinkSegments
#define scaleLinksOnZoom drawLine.scaleLinksOnZoom
#define maxPointSize drawLine.maxPointSize
#define renderMode drawLine.renderMode
#define hoveredLinkIndex drawLine.hoveredLinkIndex
#define hoveredLinkWidthIncrease drawLine.hoveredLinkWidthIncrease
#define isLinkHighlightingActive drawLine.isLinkHighlightingActive
#define linkStatusTextureSize drawLine.linkStatusTextureSize
#define focusedLinkIndex drawLine.focusedLinkIndex
#define focusedLinkWidthIncrease drawLine.focusedLinkWidthIncrease
#define transitionProgress drawLine.transitionProgress
#define animateColors drawLine.animateColors
#define animateWidths drawLine.animateWidths
#define animatePositions drawLine.animatePositions
#define pointDefaultColor drawLine.pointDefaultColor
#define linkColorInterpolateFromEndpoints drawLine.linkColorInterpolateFromEndpoints
#else
uniform mat3 transformationMatrix;
uniform float pointsTextureSize;
uniform float widthScale;
uniform float linkArrowsSizeScale;
uniform float spaceSize;
uniform vec2 screenSize;
uniform vec2 linkVisibilityDistanceRange;
uniform float linkVisibilityMinTransparency;
uniform float linkOpacity;
uniform float greyoutOpacity;
uniform float curvedWeight;
uniform float curvedLinkControlPointDistance;
uniform float curvedLinkSegments;
uniform bool scaleLinksOnZoom;
uniform float maxPointSize;
// renderMode: 0.0 = normal rendering, 1.0 = index buffer rendering for picking
uniform float renderMode;
uniform float hoveredLinkIndex;
uniform float hoveredLinkWidthIncrease;
uniform float isLinkHighlightingActive;
uniform float linkStatusTextureSize;
uniform float focusedLinkIndex;
uniform float focusedLinkWidthIncrease;
uniform float transitionProgress;
uniform float animateColors;
uniform float animateWidths;
uniform float animatePositions;
uniform vec4 pointDefaultColor;
uniform float linkColorInterpolateFromEndpoints;
#endif

out vec4 rgbaColor;
out vec2 pos;
out float arrowLength;
out float useArrow;
out float smoothing;
out float arrowWidthFactor;
out float linkIndex;
// Per-instance constants (no per-vertex variation), so \`flat\` skips interpolation.
flat out float vLinkStyle;
flat out float vLinkDashSpan;
flat out float vLinkDashWidth;
flat out vec4 vEndpointColorA;
flat out vec4 vEndpointColorB;

float map(float value, float min1, float max1, float min2, float max2) {
  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

// Resolves NaN color channels the way the point draw shader does: NaN means "use the
// default" \u2014 the config default, blended toward the exit default as the endpoint fades
// out. Mirrors resolveColor in draw-points.vert.
vec4 resolveColor(vec4 color, float exitRamp) {
  vec4 defaultColor = mix(pointDefaultColor, vec4(EXIT_DEFAULT_COLOR_CHANNEL), exitRamp);
  return mix(color, defaultColor, isnan(color));
}

float calculateLinkWidth(float width) {
  float linkWidth;
  if (scaleLinksOnZoom > 0.0) {
    // Use original width if links should scale with zoom
    linkWidth = width;
  } else {
    // Adjust width based on zoom level to maintain visual size
    linkWidth = width / transformationMatrix[0][0];
    // Apply a non-linear scaling to avoid extreme widths
    linkWidth *= min(5.0, max(1.0, transformationMatrix[0][0] * 0.01));
  }
  // Limit link width based on whether it has an arrow
  if (useArrow > 0.5) {
    return min(linkWidth, (maxPointSize * 2.0) / transformationMatrix[0][0]);
  } else {
    return min(linkWidth, maxPointSize / transformationMatrix[0][0]);
  }
}

float calculateArrowWidth(float arrowWidth) {
  if (scaleLinksOnZoom > 0.0) {
    return arrowWidth;
  } else {
    // Apply the same scaling logic as calculateLinkWidth to maintain proportionality
    arrowWidth = arrowWidth / transformationMatrix[0][0];
    // Apply the same non-linear scaling to avoid extreme widths
    arrowWidth *= min(5.0, max(1.0, transformationMatrix[0][0] * 0.01));
    return arrowWidth;
  }
}

#ifdef SPACE_3D
// 3D variants work in pixels throughout (the quad is extruded in screen space after
// projection), unlike the 2D functions above which return space units. \`pxPerUnit\`
// is the perspective-attenuated zoom factor at the vertex's depth.
float calculateLinkWidth3D(float width, float pxPerUnit) {
  float linkWidth;
  if (scaleLinksOnZoom > 0.0) {
    linkWidth = width * pxPerUnit;
  } else {
    linkWidth = width * min(5.0, max(1.0, pxPerUnit * 0.01));
  }
  // Limit link width based on whether it has an arrow
  if (useArrow > 0.5) {
    return min(linkWidth, maxPointSize * 2.0);
  } else {
    return min(linkWidth, maxPointSize);
  }
}

float calculateArrowWidth3D(float arrowWidth, float pxPerUnit) {
  if (scaleLinksOnZoom > 0.0) {
    return arrowWidth * pxPerUnit;
  } else {
    return arrowWidth * min(5.0, max(1.0, pxPerUnit * 0.01));
  }
}
#endif

void main() {
  pos = position;
  linkIndex = linkIndices;
  vLinkStyle = linkStyle;

  vec2 pointTexturePosA = (pointA + 0.5) / pointsTextureSize;
  vec2 pointTexturePosB = (pointB + 0.5) / pointsTextureSize;

  vec4 pointPositionA = texture(positionsTexture, pointTexturePosA);
  vec4 pointPositionB = texture(positionsTexture, pointTexturePosB);

  // Skip links touching an absent (NaN position) point \u2014 interpolating from a NaN
  // endpoint would produce garbage geometry. Collapse the link off-screen. This only
  // catches snap removals: an animated removal freezes the endpoint at its last real
  // position, so absence must be read from the exit texture below. Checked before the
  // 2D/3D split (alpha carries z in 3D) so both projections are guarded.
  if (isnan(pointPositionA.x) || isnan(pointPositionA.y) || isnan(pointPositionA.a) ||
      isnan(pointPositionB.x) || isnan(pointPositionB.y) || isnan(pointPositionB.a)) {
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    return;
  }

  // Exit status of both endpoints (R = previous absence, G = current absence). A link
  // is only as present as its endpoints.
  vec4 exitStatusA = texture(exitTexture, pointTexturePosA);
  vec4 exitStatusB = texture(exitTexture, pointTexturePosB);

  // Picking must not report a link to a removed point even mid-fade \u2014 same rule as
  // point picking, which excludes on current absence.
  if (renderMode > 0.0 && (exitStatusA.g > 0.5 || exitStatusB.g > 0.5)) {
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    return;
  }

  // Visible pass: fade the link with the same animated exit ramp the point fade uses
  // (blend R\u2192G during a position transition, settled G otherwise), so a removed
  // point's links fade out in sync with it instead of dangling at full opacity.
  float exitA = animatePositions > 0.0 ? mix(exitStatusA.r, exitStatusA.g, transitionProgress) : exitStatusA.g;
  float exitB = animatePositions > 0.0 ? mix(exitStatusB.r, exitStatusB.g, transitionProgress) : exitStatusB.g;
  float exitPresence = (1.0 - exitA) * (1.0 - exitB);
  if (exitPresence <= 0.0) {
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    return;
  }

  // Sample the source/target point colors so the fragment shader can build a gradient
  // along the link. Skipped entirely when the gradient is off \u2014 the fragment shader
  // only reads these varyings inside its own gradient branch, keyed on the same flag.
  // The texture mirrors GraphData.pointColors, so channels may be NaN ("use the
  // default") \u2014 resolve them with the endpoint's exit ramp, like the point draw.
  // Assigned before the 2D/3D split so both paths write the varyings.
  if (linkColorInterpolateFromEndpoints > 0.5) {
    vEndpointColorA = resolveColor(texture(pointColorsTexture, pointTexturePosA), exitA);
    vEndpointColorB = resolveColor(texture(pointColorsTexture, pointTexturePosB), exitB);
  }

  // Dash/dot pattern geometry, filled per-branch below. \`dashSpan\` is the link length in
  // the pattern's space (screen px when scaleLinksOnZoom is off, else world units);
  // \`dashWidthScale\` converts that branch's native linkWidthPx into the same space.
  float dashSpan = 0.0;
  float dashWidthScale = 1.0;

  #ifdef SPACE_3D
  // 3D mode: project both endpoints (z lives in the position texture's alpha channel)
  // and extrude the quad in screen space after projection. Curved links are rational
  // Bezier curves evaluated in world space, bent within the plane facing the camera so
  // they read as curved from any orbit angle; with curvature off (a single segment) or
  // a zero control-point distance the link stays a straight clip-space segment.
  vec3 a3 = vec3(pointPositionA.rg, pointPositionA.a);
  vec3 b3 = vec3(pointPositionB.rg, pointPositionB.a);
  vec4 clipA = transformationMatrix * vec4(a3, 1.0);
  vec4 clipB = transformationMatrix * vec4(b3, 1.0);
  bool isCurved = curvedLinkSegments > 1.0 && curvedLinkControlPointDistance != 0.0;

  vec3 controlPoint3 = (a3 + b3) * 0.5;
  // Clip w is affine in world position and the curve stays inside the convex hull of
  // {a, b, control point} (given a non-negative curve weight), so the minimum over
  // those three bounds w along the whole curve. Straight links only need the endpoints.
  float minW = min(clipA.w, clipB.w);
  if (isCurved) {
    vec3 dirLink = b3 - a3;
    // Bend within the camera-facing plane; fall back to world-up (then world-x) when
    // the link is (nearly) parallel to the view direction.
    vec3 bend = cross(cameraForward(transformationMatrix), dirLink);
    if (dot(bend, bend) < 1e-6) bend = cross(dirLink, vec3(0.0, 1.0, 0.0));
    if (dot(bend, bend) < 1e-6) bend = vec3(1.0, 0.0, 0.0);
    controlPoint3 += normalize(bend) * length(dirLink) * curvedLinkControlPointDistance;
    minW = min(minW, (transformationMatrix * vec4(controlPoint3, 1.0)).w);
  }
  if (minW <= 0.0) {
    // Some part of the link can reach behind the camera \u2014 cull the whole link.
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    rgbaColor = vec4(0.0);
    arrowLength = 0.0;
    useArrow = 0.0;
    smoothing = 0.0;
    arrowWidthFactor = 0.0;
    return;
  }
  vec2 screenA = (clipA.xy / clipA.w) * 0.5 * screenSize;
  vec2 screenB = (clipB.xy / clipB.w) * 0.5 * screenSize;
  vec2 segPx = screenB - screenA;
  // Projected chord length in pixels \u2014 drives the visibility fade and the arrow
  // proportions for curved links too, matching 2D (which also uses the chord).
  float linkDistPx = length(segPx);

  // Centerline point for this vertex and the screen-space tangent to extrude along.
  vec4 clipCurr;
  vec2 tangentPx;
  if (isCurved) {
    float tCurr = position.x;
    float tPrev = max(0.0, tCurr - 1.0 / curvedLinkSegments);
    float tNext = min(1.0, tCurr + 1.0 / curvedLinkSegments);
    clipCurr = transformationMatrix * vec4(conicParametricCurve(a3, b3, controlPoint3, tCurr, curvedWeight), 1.0);
    vec4 clipPrev = transformationMatrix * vec4(conicParametricCurve(a3, b3, controlPoint3, tPrev, curvedWeight), 1.0);
    vec4 clipNext = transformationMatrix * vec4(conicParametricCurve(a3, b3, controlPoint3, tNext, curvedWeight), 1.0);
    // Every curve sample has w > 0 (guarded above), so the divides are safe.
    tangentPx = (clipNext.xy / clipNext.w - clipPrev.xy / clipPrev.w) * 0.5 * screenSize;
  } else {
    // Straight segment: interpolate in clip space (projectively correct for straight lines).
    clipCurr = mix(clipA, clipB, position.x);
    tangentPx = segPx;
  }
  // Pixels per space unit at this vertex's depth \u2014 gives a natural perspective
  // taper along the link when widths scale with zoom.
  float pxPerUnit = pxPerSpaceUnit(transformationMatrix, screenSize, clipCurr.w);

  // Dash pattern space in 3D. Screen mode uses the projected chord length in px;
  // world mode uses the straight-line world length. linkWidthPx (below) is in px,
  // so world mode divides it back into world units to match dashSpan.
  float worldLen3D = length(b3 - a3);
  dashSpan = scaleLinksOnZoom > 0.0 ? worldLen3D : linkDistPx;
  dashWidthScale = scaleLinksOnZoom > 0.0 ? (pxPerUnit > 0.0 ? 1.0 / pxPerUnit : 0.0) : 1.0;
  #else
  vec2 a = pointPositionA.xy;
  vec2 b = pointPositionB.xy;

  // Calculate direction vector and its perpendicular
  vec2 xBasis = b - a;
  vec2 yBasis = normalize(vec2(-xBasis.y, xBasis.x));

  // Calculate link distance and control point for curved link
  float linkDist = length(xBasis);
  float h = curvedLinkControlPointDistance;
  vec2 controlPoint = (a + b) / 2.0 + yBasis * linkDist * h;

  // Convert link distance to screen pixels
  float linkDistPx = linkDist * transformationMatrix[0][0];

  // Dash pattern space in 2D. Screen mode measures in screen px (linkDist * zoom == linkDistPx);
  // world mode measures in world units. linkWidthPx (below) is in world units here, so the same
  // scale converts it into the pattern's space.
  dashWidthScale = scaleLinksOnZoom > 0.0 ? 1.0 : transformationMatrix[0][0];
  dashSpan = linkDist * dashWidthScale;
  #endif

  float lineWidthBase = animateWidths > 0.0
    ? mix(sourceWidth, targetWidth, transitionProgress)
    : targetWidth;
  vec4 lineColor = animateColors > 0.0
    ? mix(sourceColor, targetColor, transitionProgress)
    : targetColor;
  
  // Calculate line width using the width scale
  float linkWidth = lineWidthBase * widthScale;
  float k = 2.0;
  // Arrow width is proportionally larger than the line width
  float arrowWidth = linkWidth * k;
  arrowWidth *= linkArrowsSizeScale;

  // Ensure arrow width difference is non-negative to prevent unwanted changes to link width
  float arrowWidthDifference = max(0.0, arrowWidth - linkWidth);

  // Calculate arrow width in pixels
  // Calculate arrow length proportional to its width
  // 0.866 is approximately sqrt(3)/2 - related to equilateral triangle geometry
  // Cap the length to avoid overly long arrows on short links
  #ifdef SPACE_3D
  float arrowWidthPx = calculateArrowWidth3D(arrowWidth, pxPerUnit);
  arrowLength = min(0.3, (0.866 * arrowWidthPx * 2.0) / max(linkDistPx, 1e-6));
  #else
  float arrowWidthPx = calculateArrowWidth(arrowWidth);
  arrowLength = min(0.3, (0.866 * arrowWidthPx * 2.0) / linkDist);
  #endif

  useArrow = arrow;
  if (useArrow > 0.5) {
    linkWidth += arrowWidthDifference;
  }

  arrowWidthFactor = arrowWidthDifference / linkWidth;

  // Calculate final link width with smoothing.
  // In 3D everything below is in pixels; in 2D it is in space units (px / zoom factor).
  #ifdef SPACE_3D
  float linkWidthPx = calculateLinkWidth3D(linkWidth, pxPerUnit);

  if (renderMode > 0.0) {
    // Add 5 pixels padding for better hover detection
    linkWidthPx += 5.0;
  }
  // Match the visible-pass width increases so the pickable area covers the full rendered link
  if (hoveredLinkIndex == linkIndex) {
    linkWidthPx += hoveredLinkWidthIncrease;
  }
  if (focusedLinkIndex == linkIndex) {
    linkWidthPx += focusedLinkWidthIncrease;
  }
  float smoothingPx = 0.5;
  smoothing = smoothingPx / linkWidthPx;
  linkWidthPx += smoothingPx;
  #else
  float linkWidthPx = calculateLinkWidth(linkWidth);

  if (renderMode > 0.0) {
    // Add 5 pixels padding for better hover detection
    linkWidthPx += 5.0 / transformationMatrix[0][0];
    // Match the visible-pass width increases so the pickable area covers the full rendered link
    if (hoveredLinkIndex == linkIndex) {
      linkWidthPx += hoveredLinkWidthIncrease / transformationMatrix[0][0];
    }
    if (focusedLinkIndex == linkIndex) {
      linkWidthPx += focusedLinkWidthIncrease / transformationMatrix[0][0];
    }
  } else {
    // Add pixel increase if this is the hovered link
    if (hoveredLinkIndex == linkIndex) {
      linkWidthPx += hoveredLinkWidthIncrease / transformationMatrix[0][0];
    }
    // Add pixel increase if this is the focused link
    if (focusedLinkIndex == linkIndex) {
      linkWidthPx += focusedLinkWidthIncrease / transformationMatrix[0][0];
    }
  }
  float smoothingPx = 0.5 / transformationMatrix[0][0];
  smoothing = smoothingPx / linkWidthPx;
  linkWidthPx += smoothingPx;
  #endif

  // Publish the dash pattern span and the link thickness in the pattern's space so the
  // fragment shader can draw dashes/dots (dotted dots are sized to the stroke width).
  // Both are in the same units (screen px or world), keeping dots round in either mode.
  vLinkDashSpan = dashSpan;
  vLinkDashWidth = linkWidthPx * dashWidthScale;

  // Calculate final color with opacity based on link distance
  vec3 rgbColor = lineColor.rgb;
  // Fade long links toward the minimum transparency, saturating at 1 so links
  // shorter than the range minimum never exceed the configured opacity. A
  // degenerate (or inverted) range acts as a hard threshold instead of
  // dividing by zero in map().
  float visibilityFade = linkVisibilityDistanceRange.g > linkVisibilityDistanceRange.r
    ? map(linkDistPx, linkVisibilityDistanceRange.g, linkVisibilityDistanceRange.r, 0.0, 1.0)
    : (linkDistPx <= linkVisibilityDistanceRange.g ? 1.0 : 0.0);
  float opacity = lineColor.a * linkOpacity * clamp(visibilityFade, linkVisibilityMinTransparency, 1.0);
  // Fade with the exit ramp of the endpoints (1 = both fully present).
  opacity *= exitPresence;

  // Apply greyed-out opacity from link status texture
  if (isLinkHighlightingActive > 0.0 && linkStatusTextureSize > 0.0) {
    float texX = mod(linkIndices, linkStatusTextureSize);
    float texY = floor(linkIndices / linkStatusTextureSize);
    vec2 linkStatusCoord = (vec2(texX, texY) + 0.5) / linkStatusTextureSize;
    vec4 linkStatusValue = texture(linkStatus, linkStatusCoord);
    if (linkStatusValue.r > 0.0) {
      opacity *= greyoutOpacity;
    }
  }

  // Pass final color to fragment shader. Hover color is applied in the fragment
  // shader, after the endpoint gradient, so it wins for gradient links too.
  rgbaColor = vec4(rgbColor, opacity);

  #ifdef SPACE_3D
  // Offset the centerline point along the screen-space perpendicular of its tangent.
  // The offset is pre-multiplied by w so it survives the perspective divide.
  vec2 normalPx = dot(tangentPx, tangentPx) > 0.0 ? normalize(vec2(-tangentPx.y, tangentPx.x)) : vec2(0.0, 1.0);
  clipCurr.xy += normalPx * (linkWidthPx * position.y) * (2.0 / screenSize) * clipCurr.w;
  gl_Position = clipCurr;
  #else
  // Calculate position on the curved path
  float t = position.x;
  float w = curvedWeight;

  float tPrev = t - 1.0 / curvedLinkSegments;
  float tNext = t + 1.0 / curvedLinkSegments;

  vec2 pointCurr = conicParametricCurve(a, b, controlPoint, t, w);

  vec2 pointPrev = conicParametricCurve(a, b, controlPoint, max(0.0, tPrev), w);
  vec2 pointNext = conicParametricCurve(a, b, controlPoint, min(tNext, 1.0), w);

  vec2 xBasisCurved = pointNext - pointPrev;
  vec2 yBasisCurved = normalize(vec2(-xBasisCurved.y, xBasisCurved.x));

  pointCurr += yBasisCurved * linkWidthPx * position.y;

  // Transform to clip space coordinates
  vec2 p = 2.0 * pointCurr / spaceSize - 1.0;
  p *= spaceSize / screenSize;

  #ifdef USE_UNIFORM_BUFFERS
  mat3 transformMat3 = mat3(transformationMatrix);
  vec3 final = transformMat3 * vec3(p, 1);
  #else
  vec3 final = transformationMatrix * vec3(p, 1);
  #endif

  gl_Position = vec4(final.rg, 0, 1);
  #endif
}`,V2=`#version 300 es
#ifdef GL_ES
precision highp float;
#endif

in vec4 rgba;

out vec4 fragColor;

void main() {
  fragColor = rgba;
}
`,H2=`#version 300 es
#ifdef GL_ES
precision highp float;
#endif

in vec2 pointA;
in vec2 pointB;
in float linkIndices;

uniform sampler2D positionsTexture;
uniform sampler2D exitTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform fillSampledLinksUniforms {
  float pointsTextureSize;
  mat4 transformationMatrix;
  float spaceSize;
  vec2 screenSize;
  float curvedWeight;
  float curvedLinkControlPointDistance;
  float curvedLinkSegments;
} fillSampledLinks;

#define pointsTextureSize fillSampledLinks.pointsTextureSize
#define transformationMatrix fillSampledLinks.transformationMatrix
#define spaceSize fillSampledLinks.spaceSize
#define screenSize fillSampledLinks.screenSize
#define curvedWeight fillSampledLinks.curvedWeight
#define curvedLinkControlPointDistance fillSampledLinks.curvedLinkControlPointDistance
#define curvedLinkSegments fillSampledLinks.curvedLinkSegments
#else
uniform float pointsTextureSize;
uniform float spaceSize;
uniform vec2 screenSize;
uniform float curvedWeight;
uniform float curvedLinkControlPointDistance;
uniform float curvedLinkSegments;
uniform mat3 transformationMatrix;
#endif

out vec4 rgba;

void main() {
  // Skip a link touching an absent (faded-out) point. exit.G = current absence.
  if (texture(exitTexture, (pointA + 0.5) / pointsTextureSize).g > 0.5 ||
      texture(exitTexture, (pointB + 0.5) / pointsTextureSize).g > 0.5) {
    rgba = vec4(0.0);
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    gl_PointSize = 0.0;
    return;
  }

  vec4 posA = texture(positionsTexture, (pointA + 0.5) / pointsTextureSize);
  vec4 posB = texture(positionsTexture, (pointB + 0.5) / pointsTextureSize);

  #ifdef SPACE_3D
  // 3D mode: project both endpoints (z in the texture's alpha channel), compute the
  // label angle from the projected screen tangent, and place the sample at the
  // projected chord midpoint (even when links render curved \u2014 the curve's midpoint
  // tangent is chord-parallel anyway). Midpoint z is recovered on the CPU.
  vec4 clipA = transformationMatrix * vec4(posA.rg, posA.a, 1.0);
  vec4 clipB = transformationMatrix * vec4(posB.rg, posB.a, 1.0);
  vec3 mid3 = (vec3(posA.rg, posA.a) + vec3(posB.rg, posB.a)) * 0.5;
  vec4 clipMid = transformationMatrix * vec4(mid3, 1.0);
  if (clipA.w <= 0.0 || clipB.w <= 0.0 || clipMid.w <= 0.0) {
    // Either endpoint behind the camera \u2014 keep the vertex off the sampling grid.
    rgba = vec4(-1.0);
    gl_Position = vec4(2.0, 2.0, 0.0, 1.0);
    gl_PointSize = 1.0;
    return;
  }
  vec2 screenA = (clipA.xy / clipA.w + 1.0) * screenSize / 2.0;
  vec2 screenB = (clipB.xy / clipB.w + 1.0) * screenSize / 2.0;
  vec2 tangent = screenB - screenA;
  float angle = -atan(tangent.y, tangent.x);
  vec2 mid = mid3.xy;
  vec2 pointScreenPosition = (clipMid.xy / clipMid.w + 1.0) * screenSize / 2.0;
  #else
  vec2 a = posA.rg;
  vec2 b = posB.rg;

  vec2 tangent = b - a;
  float angle = -atan(tangent.y, tangent.x);

  vec2 mid;
  if (curvedLinkSegments <= 1.0) {
    mid = (a + b) * 0.5;
  } else if (curvedLinkControlPointDistance != 0.0 && curvedWeight != 0.0) {
    vec2 xBasis = b - a;
    vec2 yBasis = normalize(vec2(-xBasis.y, xBasis.x));
    float linkDist = length(xBasis);
    float h = curvedLinkControlPointDistance;
    vec2 controlPoint = (a + b) / 2.0 + yBasis * linkDist * h;
    mid = conicParametricCurve(a, b, controlPoint, 0.5, curvedWeight);
  } else {
    mid = (a + b) * 0.5;
  }

  vec2 p = 2.0 * mid / spaceSize - 1.0;
  p *= spaceSize / screenSize;
  #ifdef USE_UNIFORM_BUFFERS
  mat3 transformMat3 = mat3(transformationMatrix);
  vec3 final = transformMat3 * vec3(p, 1);
  #else
  vec3 final = transformationMatrix * vec3(p, 1);
  #endif

  vec2 pointScreenPosition = (final.xy + 1.0) * screenSize / 2.0;
  #endif

  rgba = vec4(linkIndices, mid.x, mid.y, angle);
  float i = (pointScreenPosition.x + 0.5) / screenSize.x;
  float j = (pointScreenPosition.y + 0.5) / screenSize.y;
  gl_Position = vec4(2.0 * vec2(i, j) - 1.0, 0.0, 1.0);

  gl_PointSize = 1.0;
}
`;function X0(e){let t=e[0];return e[3]>0&&t>=0?t:void 0}var Ea=class{constructor(t,i){this.buffer=null,this.sync=null,this.isInFlight=!1,this.gl=t,this.data=new Float32Array(i)}get inFlight(){return this.isInFlight}issue(t,i,r,o,n){if(this.isInFlight)return!1;let{gl:s}=this;if(o*n*4>this.data.length||(this.buffer||(this.buffer=s.createBuffer()),!this.buffer))return!1;let a=s.getParameter(s.READ_FRAMEBUFFER_BINDING);return s.bindFramebuffer(s.READ_FRAMEBUFFER,t),s.bindBuffer(s.PIXEL_PACK_BUFFER,this.buffer),s.bufferData(s.PIXEL_PACK_BUFFER,this.data.byteLength,s.STREAM_READ),s.readPixels(i,r,o,n,s.RGBA,s.FLOAT,0),s.bindBuffer(s.PIXEL_PACK_BUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,a),this.sync=s.fenceSync(s.SYNC_GPU_COMMANDS_COMPLETE,0),s.flush(),this.isInFlight=this.sync!==null,this.isInFlight}poll(){if(!this.isInFlight||!this.sync||!this.buffer)return null;let{gl:t}=this,i=t.clientWaitSync(this.sync,0,0);return i===t.TIMEOUT_EXPIRED||(t.deleteSync(this.sync),this.sync=null,this.isInFlight=!1,i!==t.ALREADY_SIGNALED&&i!==t.CONDITION_SATISFIED)?null:(t.bindBuffer(t.PIXEL_PACK_BUFFER,this.buffer),t.getBufferSubData(t.PIXEL_PACK_BUFFER,0,this.data),t.bindBuffer(t.PIXEL_PACK_BUFFER,null),this.data)}cancel(){this.sync&&(this.gl.deleteSync(this.sync),this.sync=null),this.isInFlight=!1}destroy(){this.cancel(),this.buffer&&(this.gl.deleteBuffer(this.buffer),this.buffer=null)}},$2=e=>{let t=_o().exponent(2).range([0,1]).domain([-1,1]),i=Zs(0,e).map(o=>-.5+o/e);i.push(.5);let r=new Array(i.length*2);return i.forEach((o,n)=>{r[n*2]=[t(o*2),.5],r[n*2+1]=[t(o*2),-.5]}),r},cu=class extends kt{constructor(){super(...arguments),this.isLinkIndexBufferStale=!0,this.linkStatusTextureSize=0,this.programsSpaceDimensions=2,this.transitionProgress=1,this.shouldAnimateLinkColors=!1,this.shouldAnimateLinkWidths=!1,this.shouldAnimatePositions=!1}get isPickInFlight(){var t;return((t=this.pickingReadback)==null?void 0:t.inFlight)??!1}initPrograms(){let{device:t,config:i,store:r,data:o}=this;this.programsSpaceDimensions!==r.spaceDimensions&&(this.programsSpaceDimensions=r.spaceDimensions,this.drawCurveCommand&&(this.drawCurveCommand.destroy(),this.drawCurveCommand=void 0),this.drawCurvePickingCommand&&(this.drawCurvePickingCommand.destroy(),this.drawCurvePickingCommand=void 0),this.fillSampledLinksFboCommand&&(this.fillSampledLinksFboCommand.destroy(),this.fillSampledLinksFboCommand=void 0)),this.updateLinkIndexFbo(),this.isLinkIndexBufferStale=!0,this.curveLineGeometry||this.updateCurveLineGeometry();let n=this.data.linksNumber??0;this.pointABuffer||(this.pointABuffer=t.createBuffer({data:new Float32Array(n*2),usage:U.VERTEX|U.COPY_DST})),this.pointBBuffer||(this.pointBBuffer=t.createBuffer({data:new Float32Array(n*2),usage:U.VERTEX|U.COPY_DST})),this.arrowBuffer||(this.arrowBuffer=t.createBuffer({data:new Float32Array(n),usage:U.VERTEX|U.COPY_DST})),this.linkStyleBuffer||(this.linkStyleBuffer=t.createBuffer({data:new Float32Array(n),usage:U.VERTEX|U.COPY_DST})),this.linkIndexBuffer||(this.linkIndexBuffer=t.createBuffer({data:new Float32Array(n),usage:U.VERTEX|U.COPY_DST})),this.drawLineUniformStore||(this.drawLineUniformStore=new ee(t,{drawLineUniforms:{uniformTypes:{transformationMatrix:"mat4x4<f32>",pointsTextureSize:"f32",widthScale:"f32",linkArrowsSizeScale:"f32",spaceSize:"f32",screenSize:"vec2<f32>",linkVisibilityDistanceRange:"vec2<f32>",linkVisibilityMinTransparency:"f32",linkOpacity:"f32",greyoutOpacity:"f32",curvedWeight:"f32",curvedLinkControlPointDistance:"f32",curvedLinkSegments:"f32",scaleLinksOnZoom:"f32",maxPointSize:"f32",renderMode:"f32",hoveredLinkIndex:"f32",hoveredLinkWidthIncrease:"f32",isLinkHighlightingActive:"f32",linkStatusTextureSize:"f32",focusedLinkIndex:"f32",focusedLinkWidthIncrease:"f32",transitionProgress:"f32",animateColors:"f32",animateWidths:"f32",animatePositions:"f32",pointDefaultColor:"vec4<f32>",linkColorInterpolateFromEndpoints:"f32"},defaultUniforms:{transformationMatrix:r.transformationMatrix4x4,pointsTextureSize:r.pointsTextureSize,widthScale:i.linkWidthScale,linkArrowsSizeScale:i.linkArrowsSizeScale,spaceSize:r.adjustedSpaceSize,screenSize:ae(r.screenSize,[0,0]),linkVisibilityDistanceRange:ae(i.linkVisibilityDistanceRange,[0,0]),linkVisibilityMinTransparency:i.linkVisibilityMinTransparency,linkOpacity:i.linkOpacity,greyoutOpacity:i.linkGreyoutOpacity,curvedWeight:i.curvedLinkWeight,curvedLinkControlPointDistance:i.curvedLinkControlPointDistance,curvedLinkSegments:i.curvedLinks?i.curvedLinkSegments:1,scaleLinksOnZoom:i.scaleLinksOnZoom?1:0,maxPointSize:r.maxPointSize,renderMode:0,hoveredLinkIndex:r.hoveredLinkIndex??-1,hoveredLinkWidthIncrease:i.hoveredLinkWidthIncrease,isLinkHighlightingActive:0,linkStatusTextureSize:0,focusedLinkIndex:i.focusedLinkIndex??-1,focusedLinkWidthIncrease:i.focusedLinkWidthIncrease,transitionProgress:1,animateColors:0,animateWidths:0,animatePositions:0,pointDefaultColor:fe(this.data.defaultRgba,[0,0,0,1]),linkColorInterpolateFromEndpoints:i.linkColorInterpolateFromEndpoints?1:0}},drawLineFragmentUniforms:{uniformTypes:{renderMode:"f32",linkDashLength:"f32",linkDashGap:"f32",linkColorInterpolateFromEndpoints:"f32",hoveredLinkIndex:"f32",hoveredLinkColor:"vec4<f32>"},defaultUniforms:{renderMode:0,linkDashLength:i.linkDashLength,linkDashGap:i.linkDashGap,linkColorInterpolateFromEndpoints:i.linkColorInterpolateFromEndpoints?1:0,hoveredLinkIndex:r.hoveredLinkIndex??-1,hoveredLinkColor:fe(r.hoveredLinkColor,[-1,-1,-1,-1])}}})),this.drawCurveCommand||(this.drawCurveCommand=this.createDrawCurveCommand(this.getLinkBlendParameters(this.config.linkBlending))),this.isLinkBlendingActive=this.config.linkBlending,this.fillSampledLinksUniformStore||(this.fillSampledLinksUniformStore=new ee(t,{fillSampledLinksUniforms:{uniformTypes:{pointsTextureSize:"f32",transformationMatrix:"mat4x4<f32>",spaceSize:"f32",screenSize:"vec2<f32>",curvedWeight:"f32",curvedLinkControlPointDistance:"f32",curvedLinkSegments:"f32"},defaultUniforms:{pointsTextureSize:r.pointsTextureSize??0,transformationMatrix:r.transformationMatrix4x4,spaceSize:r.adjustedSpaceSize,screenSize:ae(r.screenSize,[0,0]),curvedWeight:i.curvedLinkWeight,curvedLinkControlPointDistance:i.curvedLinkControlPointDistance,curvedLinkSegments:i.curvedLinks?i.curvedLinkSegments:1}}})),this.fillSampledLinksFboCommand||(this.fillSampledLinksFboCommand=new re(t,{fs:V2,vs:H2,modules:[$0],topology:"point-list",vertexCount:o.linksNumber??0,attributes:{...this.pointABuffer&&{pointA:this.pointABuffer},...this.pointBBuffer&&{pointB:this.pointBBuffer},...this.linkIndexBuffer&&{linkIndices:this.linkIndexBuffer}},bufferLayout:[{name:"pointA",format:"float32x2"},{name:"pointB",format:"float32x2"},{name:"linkIndices",format:"float32"}],defines:{USE_UNIFORM_BUFFERS:!0,...r.is3D?{SPACE_3D:!0}:{}},bindings:{fillSampledLinksUniforms:this.fillSampledLinksUniformStore.getManagedUniformBuffer("fillSampledLinksUniforms")},parameters:{depthWriteEnabled:!1,depthCompare:"always",blend:!1}})),this.updateSampledLinksGrid(),this.updateLinkStatus()}draw(t){let{config:i,points:r,store:o}=this;if(!r||!r.currentPositionTexture||r.currentPositionTexture.destroyed||(r.exitTexture||r.updateExit(),!r.exitTexture||r.exitTexture.destroyed)||((!this.pointABuffer||!this.pointBBuffer)&&this.updatePointsBuffer(),this.targetColorBuffer||this.updateColor(),this.targetWidthBuffer||this.updateWidth(),this.arrowBuffer||this.updateArrow(),this.linkStyleBuffer||this.updateStyle(),this.curveLineGeometry||this.updateCurveLineGeometry(),!this.drawCurveCommand||!this.drawLineUniformStore||!this.linkStatusTexture))return;this.updateLinkBlending();let n=i.highlightedLinkIndices!==void 0;this.drawLineUniformStore.setUniforms({drawLineUniforms:{transformationMatrix:o.transformationMatrix4x4,pointsTextureSize:o.pointsTextureSize,widthScale:i.linkWidthScale,linkArrowsSizeScale:i.linkArrowsSizeScale,spaceSize:o.adjustedSpaceSize,screenSize:ae(o.screenSize,[0,0]),linkVisibilityDistanceRange:ae(i.linkVisibilityDistanceRange,[0,0]),linkVisibilityMinTransparency:i.linkVisibilityMinTransparency,linkOpacity:i.linkOpacity,greyoutOpacity:i.linkGreyoutOpacity,curvedWeight:i.curvedLinkWeight,curvedLinkControlPointDistance:i.curvedLinkControlPointDistance,curvedLinkSegments:i.curvedLinks?i.curvedLinkSegments:1,scaleLinksOnZoom:i.scaleLinksOnZoom?1:0,maxPointSize:o.maxPointSize,renderMode:0,hoveredLinkIndex:o.hoveredLinkIndex??-1,hoveredLinkWidthIncrease:i.hoveredLinkWidthIncrease,isLinkHighlightingActive:n?1:0,linkStatusTextureSize:this.linkStatusTextureSize,focusedLinkIndex:i.focusedLinkIndex??-1,focusedLinkWidthIncrease:i.focusedLinkWidthIncrease,transitionProgress:this.transitionProgress,animateColors:this.shouldAnimateLinkColors?1:0,animateWidths:this.shouldAnimateLinkWidths?1:0,animatePositions:this.shouldAnimatePositions?1:0,pointDefaultColor:fe(this.data.defaultRgba,[0,0,0,1]),linkColorInterpolateFromEndpoints:i.linkColorInterpolateFromEndpoints?1:0},drawLineFragmentUniforms:{renderMode:0,linkDashLength:i.linkDashLength,linkDashGap:i.linkDashGap,linkColorInterpolateFromEndpoints:i.linkColorInterpolateFromEndpoints?1:0,hoveredLinkIndex:o.hoveredLinkIndex??-1,hoveredLinkColor:fe(o.hoveredLinkColor,[-1,-1,-1,-1])}}),this.drawCurveCommand.setBindings({positionsTexture:r.currentPositionTexture,exitTexture:r.exitTexture,linkStatus:this.linkStatusTexture,pointColorsTexture:r.pointColorsTexture??r.currentPositionTexture}),this.drawCurveCommand.setInstanceCount(this.data.linksNumber??0),this.drawCurveCommand.draw(t)}updateLinkIndexFbo(){var t,i,r;let{device:o,store:n}=this;if(!this.store.isLinkHoveringEnabled)return;let s=n.screenSize??[0,0],a=s[0],l=s[1];if(!a||!l)return;let c=((t=this.previousScreenSize)==null?void 0:t[0])!==a||((i=this.previousScreenSize)==null?void 0:i[1])!==l;(!this.linkIndexTexture||c)&&((r=this.pickingReadback)==null||r.cancel(),this.linkIndexFbo&&!this.linkIndexFbo.destroyed&&this.linkIndexFbo.destroy(),this.linkIndexTexture&&!this.linkIndexTexture.destroyed&&this.linkIndexTexture.destroy(),this.linkIndexTexture=o.createTexture({width:a,height:l,format:"rgba32float",usage:z.SAMPLE|z.RENDER}),this.linkIndexFbo=o.createFramebuffer({width:a,height:l,colorAttachments:[this.linkIndexTexture]}),this.previousScreenSize=[a,l],this.isLinkIndexBufferStale=!0)}updateSampledLinksGrid(){let{store:{screenSize:t},config:{linkSamplingDistance:i},device:r}=this,o=i??Math.min(...t)/2;o===0&&(o=Ft.linkSamplingDistance);let n=Math.ceil(t[0]/o),s=Math.ceil(t[1]/o);n===0||s===0||(!this.sampledLinksFbo||this.sampledLinksFbo.width!==n||this.sampledLinksFbo.height!==s)&&(this.sampledLinksFbo&&!this.sampledLinksFbo.destroyed&&this.sampledLinksFbo.destroy(),this.sampledLinksFbo=r.createFramebuffer({width:n,height:s,colorAttachments:["rgba32float"]}))}updatePointsBuffer(){var t;let{device:i,data:r,store:o}=this;if(r.linksNumber===void 0||r.links===void 0||!o.pointsTextureSize)return;this.isLinkIndexBufferStale=!0,this.discardPendingPick();let n=new Float32Array(r.linksNumber*2),s=new Float32Array(r.linksNumber*2);for(let c=0;c<r.linksNumber;c++){let d=r.links[c*2],u=r.links[c*2+1],f=d%o.pointsTextureSize,h=Math.floor(d/o.pointsTextureSize),m=u%o.pointsTextureSize,x=Math.floor(u/o.pointsTextureSize);n[c*2]=f,n[c*2+1]=h,s[c*2]=m,s[c*2+1]=x}let a=(((t=this.pointABuffer)==null?void 0:t.byteLength)??0)/(Float32Array.BYTES_PER_ELEMENT*2);!this.pointABuffer||a!==r.linksNumber?(this.pointABuffer&&!this.pointABuffer.destroyed&&this.pointABuffer.destroy(),this.pointABuffer=i.createBuffer({data:n,usage:U.VERTEX|U.COPY_DST})):this.pointABuffer.write(n),!this.pointBBuffer||a!==r.linksNumber?(this.pointBBuffer&&!this.pointBBuffer.destroyed&&this.pointBBuffer.destroy(),this.pointBBuffer=i.createBuffer({data:s,usage:U.VERTEX|U.COPY_DST})):this.pointBBuffer.write(s);let l=new Float32Array(r.linksNumber);for(let c=0;c<r.linksNumber;c++)l[c]=c;!this.linkIndexBuffer||a!==r.linksNumber?(this.linkIndexBuffer&&!this.linkIndexBuffer.destroyed&&this.linkIndexBuffer.destroy(),this.linkIndexBuffer=i.createBuffer({data:l,usage:U.VERTEX|U.COPY_DST})):this.linkIndexBuffer.write(l),this.setDrawCurveCommandAttributes({pointA:this.pointABuffer,pointB:this.pointBBuffer,linkIndices:this.linkIndexBuffer}),this.fillSampledLinksFboCommand&&this.fillSampledLinksFboCommand.setAttributes({pointA:this.pointABuffer,pointB:this.pointBBuffer,linkIndices:this.linkIndexBuffer}),this.updateSampledLinksGrid(),this.config.highlightedLinkIndices!==void 0&&this.updateLinkStatus()}updateColor(){let{data:t}=this,i=t.linksNumber??0;this.isLinkIndexBufferStale=!0;let r=t.linkColors??new Float32Array(i*4).fill(0),{source:o,target:n,previous:s}=_a(this.device,r,this.sourceColorBuffer,this.targetColorBuffer,this.previousColorData,4);this.sourceColorBuffer=o,this.targetColorBuffer=n,this.previousColorData=s,this.setDrawCurveCommandAttributes({...this.sourceColorBuffer&&{sourceColor:this.sourceColorBuffer},...this.targetColorBuffer&&{targetColor:this.targetColorBuffer}})}updateWidth(){let{data:t}=this,i=t.linksNumber??0;this.isLinkIndexBufferStale=!0;let r=t.linkWidths??new Float32Array(i).fill(0),{source:o,target:n,previous:s}=_a(this.device,r,this.sourceWidthBuffer,this.targetWidthBuffer,this.previousWidthData,1);this.sourceWidthBuffer=o,this.targetWidthBuffer=n,this.previousWidthData=s,this.setDrawCurveCommandAttributes({...this.sourceWidthBuffer&&{sourceWidth:this.sourceWidthBuffer},...this.targetWidthBuffer&&{targetWidth:this.targetWidthBuffer}})}updateArrow(){let{device:t,data:i}=this;this.isLinkIndexBufferStale=!0;let r=i.linksNumber??0,o=i.linkArrows?new Float32Array(i.linkArrows):new Float32Array(r);this.arrowBuffer=z0(t,this.arrowBuffer,o),this.setDrawCurveCommandAttributes({arrow:this.arrowBuffer})}updateStyle(){let{device:t,data:i}=this;i.linksNumber===void 0||i.linkStyles===void 0||(this.linkStyleBuffer=z0(t,this.linkStyleBuffer,i.linkStyles),this.setDrawCurveCommandAttributes({linkStyle:this.linkStyleBuffer}))}updateLinkStatus(){let{device:t,config:i,data:r}=this,o=r.linksNumber??0;if(this.isLinkIndexBufferStale=!0,!o){this.linkStatusTexture||this.ensureLinkStatusPlaceholder();return}let{highlightedLinkIndices:n}=i;if(n===void 0){this.linkStatusTexture||this.ensureLinkStatusPlaceholder(),this.linkStatusTextureSize=0;return}let s=Math.ceil(Math.sqrt(o));this.linkStatusTextureSize=s;let a=new Float32Array(s*s*4);for(let c=0;c<o;c++)a[c*4]=1;for(let c of n)c>=0&&c<o&&(a[c*4]=0);let l={data:a,bytesPerRow:Q("rgba32float",s),mipLevel:0,x:0,y:0};!this.linkStatusTexture||this.linkStatusTexture.width!==s||this.linkStatusTexture.height!==s?(this.linkStatusTexture&&!this.linkStatusTexture.destroyed&&this.linkStatusTexture.destroy(),this.linkStatusTexture=t.createTexture({width:s,height:s,format:"rgba32float",usage:z.SAMPLE|z.RENDER|z.COPY_DST}),this.linkStatusTexture.copyImageData(l)):this.linkStatusTexture.copyImageData(l)}updateCurveLineGeometry(){var t,i;let{device:r,config:{curvedLinks:o,curvedLinkSegments:n}}=this;this.isLinkIndexBufferStale=!0,this.curveLineGeometry=$2(o?n:1);let s=new Float32Array(this.curveLineGeometry.length*2);for(let a=0;a<this.curveLineGeometry.length;a++)s[a*2]=this.curveLineGeometry[a][0],s[a*2+1]=this.curveLineGeometry[a][1];!this.curveLineBuffer||this.curveLineBuffer.byteLength!==s.byteLength?(this.curveLineBuffer&&!this.curveLineBuffer.destroyed&&this.curveLineBuffer.destroy(),this.curveLineBuffer=r.createBuffer({data:s,usage:U.VERTEX|U.COPY_DST})):this.curveLineBuffer.write(s),this.setDrawCurveCommandAttributes({position:this.curveLineBuffer}),(t=this.drawCurveCommand)==null||t.setVertexCount(this.curveLineGeometry.length),(i=this.drawCurvePickingCommand)==null||i.setVertexCount(this.curveLineGeometry.length)}updateLinkBlending(){var t;let i=this.config.linkBlending;i!==this.isLinkBlendingActive&&((t=this.drawCurveCommand)==null||t.setParameters(this.getLinkBlendParameters(i)),this.isLinkBlendingActive=i)}getSampledLinkPositionsMap(t=2){if(t===3){let o=new Map,n=this.fillAndReadSampledLinksFbo();if(!n)return o;let s=this.getSampledLinkMidZ(n);for(let a=0;a<n.length/4;a++){let l=n[a*4],c=n[a*4+1],d=n[a*4+2],u=n[a*4+3];if(l!==void 0&&l>=0&&c!==void 0&&d!==void 0&&u!==void 0){let f=Math.round(l);o.set(f,[c,d,s?.get(f)??0,u])}}return o}let i=new Map,r=this.fillAndReadSampledLinksFbo();if(!r)return i;for(let o=0;o<r.length/4;o++){let n=r[o*4],s=r[o*4+1],a=r[o*4+2],l=r[o*4+3];n!==void 0&&n>=0&&s!==void 0&&a!==void 0&&l!==void 0&&i.set(Math.round(n),[s,a,l])}return i}getSampledLinks(t=2){let i=[],r=[],o=[],n=this.fillAndReadSampledLinksFbo();if(!n)return{indices:i,positions:r,angles:o};let s=t===3?this.getSampledLinkMidZ(n):void 0;for(let a=0;a<n.length/4;a++){let l=n[a*4],c=n[a*4+1],d=n[a*4+2],u=n[a*4+3];if(l!==void 0&&l>=0&&c!==void 0&&d!==void 0&&u!==void 0){let f=Math.round(l);i.push(f),r.push(c,d),t===3&&r.push(s?.get(f)??0),o.push(u)}}return{indices:i,positions:r,angles:o}}updateLinkIndexBuffer(){if(!this.isLinkIndexBufferStale)return;this.updateLinkIndexFbo();let{config:t,points:i,store:r}=this;if(!i||!i.currentPositionTexture||i.currentPositionTexture.destroyed||(i.exitTexture||i.updateExit(),!i.exitTexture||i.exitTexture.destroyed)||!this.data.linksNumber||!this.store.isLinkHoveringEnabled||!this.linkIndexFbo||!this.drawLineUniformStore||!this.linkStatusTexture||!this.linkIndexTexture||this.linkIndexTexture.destroyed)return;this.drawCurvePickingCommand||(this.drawCurvePickingCommand=this.createDrawCurveCommand(this.getLinkBlendParameters(!1)));let o=t.highlightedLinkIndices!==void 0;this.drawLineUniformStore.setUniforms({drawLineUniforms:{transformationMatrix:r.transformationMatrix4x4,pointsTextureSize:r.pointsTextureSize,widthScale:t.linkWidthScale,linkArrowsSizeScale:t.linkArrowsSizeScale,spaceSize:r.adjustedSpaceSize,screenSize:ae(r.screenSize,[0,0]),linkVisibilityDistanceRange:ae(t.linkVisibilityDistanceRange,[0,0]),linkVisibilityMinTransparency:t.linkVisibilityMinTransparency,linkOpacity:t.linkOpacity,greyoutOpacity:t.linkGreyoutOpacity,curvedWeight:t.curvedLinkWeight,curvedLinkControlPointDistance:t.curvedLinkControlPointDistance,curvedLinkSegments:t.curvedLinks?t.curvedLinkSegments:1,scaleLinksOnZoom:t.scaleLinksOnZoom?1:0,maxPointSize:r.maxPointSize,renderMode:1,hoveredLinkIndex:r.hoveredLinkIndex??-1,hoveredLinkWidthIncrease:t.hoveredLinkWidthIncrease,isLinkHighlightingActive:o?1:0,linkStatusTextureSize:this.linkStatusTextureSize,focusedLinkIndex:t.focusedLinkIndex??-1,focusedLinkWidthIncrease:t.focusedLinkWidthIncrease,transitionProgress:this.transitionProgress,animateColors:this.shouldAnimateLinkColors?1:0,animateWidths:this.shouldAnimateLinkWidths?1:0,animatePositions:this.shouldAnimatePositions?1:0,pointDefaultColor:fe(this.data.defaultRgba,[0,0,0,1]),linkColorInterpolateFromEndpoints:t.linkColorInterpolateFromEndpoints?1:0},drawLineFragmentUniforms:{renderMode:1,linkDashLength:t.linkDashLength,linkDashGap:t.linkDashGap,linkColorInterpolateFromEndpoints:t.linkColorInterpolateFromEndpoints?1:0,hoveredLinkIndex:r.hoveredLinkIndex??-1,hoveredLinkColor:fe(r.hoveredLinkColor,[-1,-1,-1,-1])}}),this.drawCurvePickingCommand.setBindings({positionsTexture:i.currentPositionTexture,exitTexture:i.exitTexture,linkStatus:this.linkStatusTexture,pointColorsTexture:i.pointColorsTexture??i.currentPositionTexture}),this.drawCurvePickingCommand.setInstanceCount(this.data.linksNumber??0);let n=this.device.beginRenderPass({framebuffer:this.linkIndexFbo,clearColor:[0,0,0,0]});this.drawCurvePickingCommand.draw(n),n.end(),this.isLinkIndexBufferStale=!1}pickLinkSync(){this.updateLinkIndexBuffer();let t=this.getCursorPickingPixel();if(!t||!this.linkIndexFbo||this.linkIndexFbo.destroyed)return;let i=Ke(this.device,this.linkIndexFbo,t.x,t.y,1,1);return X0(i)}requestPickLink(){var t;if((t=this.pickingReadback)!=null&&t.inFlight)return!1;if(this.updateLinkIndexBuffer(),!this.linkIndexFbo||this.linkIndexFbo.destroyed)return!0;let i=this.device.gl,r=this.linkIndexFbo.handle;if(!i||!r)return!0;this.pickingReadback||(this.pickingReadback=new Ea(i,4));let o=this.getCursorPickingPixel();return o?this.pickingReadback.issue(r,o.x,o.y,1,1):!0}discardPendingPick(){var t;(t=this.pickingReadback)==null||t.cancel()}takePickLinkResult(){if(!this.pickingReadback)return;let t=this.pickingReadback.poll();if(t)return X0(t)??null}setTransitionProgress(t,i=!1,r=!1,o=!1){t!==this.transitionProgress&&(i||r)&&(this.isLinkIndexBufferStale=!0),this.transitionProgress=t,this.shouldAnimateLinkColors=i,this.shouldAnimateLinkWidths=r,this.shouldAnimatePositions=o}destroy(){var t,i,r,o,n,s;(t=this.drawCurveCommand)==null||t.destroy(),this.drawCurveCommand=void 0,(i=this.drawCurvePickingCommand)==null||i.destroy(),this.drawCurvePickingCommand=void 0,this.isLinkBlendingActive=void 0,(r=this.fillSampledLinksFboCommand)==null||r.destroy(),this.fillSampledLinksFboCommand=void 0,(o=this.pickingReadback)==null||o.destroy(),this.pickingReadback=void 0,this.linkIndexFbo&&!this.linkIndexFbo.destroyed&&this.linkIndexFbo.destroy(),this.linkIndexFbo=void 0,this.sampledLinksFbo&&!this.sampledLinksFbo.destroyed&&this.sampledLinksFbo.destroy(),this.sampledLinksFbo=void 0,this.linkIndexTexture&&!this.linkIndexTexture.destroyed&&this.linkIndexTexture.destroy(),this.linkIndexTexture=void 0,this.linkStatusTexture&&!this.linkStatusTexture.destroyed&&this.linkStatusTexture.destroy(),this.linkStatusTexture=void 0,(n=this.drawLineUniformStore)==null||n.destroy(),this.drawLineUniformStore=void 0,(s=this.fillSampledLinksUniformStore)==null||s.destroy(),this.fillSampledLinksUniformStore=void 0,this.pointABuffer&&!this.pointABuffer.destroyed&&this.pointABuffer.destroy(),this.pointABuffer=void 0,this.pointBBuffer&&!this.pointBBuffer.destroyed&&this.pointBBuffer.destroy(),this.pointBBuffer=void 0,this.sourceColorBuffer&&!this.sourceColorBuffer.destroyed&&this.sourceColorBuffer.destroy(),this.sourceColorBuffer=void 0,this.targetColorBuffer&&!this.targetColorBuffer.destroyed&&this.targetColorBuffer.destroy(),this.targetColorBuffer=void 0,this.previousColorData=void 0,this.sourceWidthBuffer&&!this.sourceWidthBuffer.destroyed&&this.sourceWidthBuffer.destroy(),this.sourceWidthBuffer=void 0,this.targetWidthBuffer&&!this.targetWidthBuffer.destroyed&&this.targetWidthBuffer.destroy(),this.targetWidthBuffer=void 0,this.previousWidthData=void 0,this.arrowBuffer&&!this.arrowBuffer.destroyed&&this.arrowBuffer.destroy(),this.arrowBuffer=void 0,this.linkStyleBuffer&&!this.linkStyleBuffer.destroyed&&this.linkStyleBuffer.destroy(),this.linkStyleBuffer=void 0,this.curveLineBuffer&&!this.curveLineBuffer.destroyed&&this.curveLineBuffer.destroy(),this.curveLineBuffer=void 0,this.linkIndexBuffer&&!this.linkIndexBuffer.destroyed&&this.linkIndexBuffer.destroy(),this.linkIndexBuffer=void 0}getCursorPickingPixel(){if(!this.linkIndexFbo||this.linkIndexFbo.destroyed)return;let[t,i]=this.store.screenSize;if(!t||!i)return;let r=Math.floor(this.store.screenMousePosition[0]*(this.linkIndexFbo.width/t)),o=Math.floor(this.store.screenMousePosition[1]*(this.linkIndexFbo.height/i));return{x:Math.min(Math.max(r,0),this.linkIndexFbo.width-1),y:Math.min(Math.max(o,0),this.linkIndexFbo.height-1)}}fillAndReadSampledLinksFbo(){if(!this.sampledLinksFbo||this.sampledLinksFbo.destroyed)return;let t=this.points;if(!(!(t!=null&&t.currentPositionTexture)||t.currentPositionTexture.destroyed)&&(t.exitTexture||t.updateExit(),!(!t.exitTexture||t.exitTexture.destroyed))){if(this.fillSampledLinksFboCommand&&this.fillSampledLinksUniformStore){this.fillSampledLinksFboCommand.setVertexCount(this.data.linksNumber??0),this.fillSampledLinksUniformStore.setUniforms({fillSampledLinksUniforms:{pointsTextureSize:this.store.pointsTextureSize??0,transformationMatrix:this.store.transformationMatrix4x4,spaceSize:this.store.adjustedSpaceSize,screenSize:ae(this.store.screenSize,[0,0]),curvedWeight:this.config.curvedLinkWeight,curvedLinkControlPointDistance:this.config.curvedLinkControlPointDistance,curvedLinkSegments:this.config.curvedLinks?this.config.curvedLinkSegments:1}}),this.fillSampledLinksFboCommand.setBindings({positionsTexture:t.currentPositionTexture,exitTexture:t.exitTexture});let i=this.device.beginRenderPass({framebuffer:this.sampledLinksFbo,clearColor:[-1,-1,-1,-1]});this.fillSampledLinksFboCommand.draw(i),i.end()}return Ke(this.device,this.sampledLinksFbo)}}getSampledLinkMidZ(t){var i;if(!this.store.is3D)return;let r=this.data.links,o=(i=this.points)==null?void 0:i.currentPositionFbo;if(!r||!o||o.destroyed)return;let n=Ke(this.device,o),s=new Map;for(let a=0;a<t.length/4;a++){let l=t[a*4];if(l===void 0||l<0)continue;let c=Math.round(l),d=r[c*2],u=r[c*2+1];if(d===void 0||u===void 0)continue;let f=n[d*4+3]??0,h=n[u*4+3]??0;s.set(c,(f+h)/2)}return s}createDrawCurveCommand(t){var i;if(!this.drawLineUniformStore)throw new Error("Draw line uniforms must be initialized before creating link draw commands");return new re(this.device,{vs:W2,fs:L2,modules:[$0,Oo],topology:"triangle-strip",vertexCount:((i=this.curveLineGeometry)==null?void 0:i.length)??0,attributes:this.getDrawCurveCommandAttributes(),bufferLayout:[{name:"position",format:"float32x2"},{name:"pointA",format:"float32x2",stepMode:"instance"},{name:"pointB",format:"float32x2",stepMode:"instance"},{name:"sourceColor",format:"float32x4",stepMode:"instance"},{name:"targetColor",format:"float32x4",stepMode:"instance"},{name:"sourceWidth",format:"float32",stepMode:"instance"},{name:"targetWidth",format:"float32",stepMode:"instance"},{name:"arrow",format:"float32",stepMode:"instance"},{name:"linkIndices",format:"float32",stepMode:"instance"},{name:"linkStyle",format:"float32",stepMode:"instance"}],defines:{USE_UNIFORM_BUFFERS:!0,...this.store.is3D?{SPACE_3D:!0}:{},EXIT_DEFAULT_COLOR_CHANNEL:Bo(Ta)},bindings:{drawLineUniforms:this.drawLineUniformStore.getManagedUniformBuffer("drawLineUniforms"),drawLineFragmentUniforms:this.drawLineUniformStore.getManagedUniformBuffer("drawLineFragmentUniforms")},parameters:t})}getDrawCurveCommandAttributes(){let t={};return this.curveLineBuffer&&(t.position=this.curveLineBuffer),this.pointABuffer&&(t.pointA=this.pointABuffer),this.pointBBuffer&&(t.pointB=this.pointBBuffer),this.sourceColorBuffer&&(t.sourceColor=this.sourceColorBuffer),this.targetColorBuffer&&(t.targetColor=this.targetColorBuffer),this.sourceWidthBuffer&&(t.sourceWidth=this.sourceWidthBuffer),this.targetWidthBuffer&&(t.targetWidth=this.targetWidthBuffer),this.arrowBuffer&&(t.arrow=this.arrowBuffer),this.linkIndexBuffer&&(t.linkIndices=this.linkIndexBuffer),this.linkStyleBuffer&&(t.linkStyle=this.linkStyleBuffer),t}setDrawCurveCommandAttributes(t){var i,r;(i=this.drawCurveCommand)==null||i.setAttributes(t),(r=this.drawCurvePickingCommand)==null||r.setAttributes(t)}getLinkBlendParameters(t){let i=this.store.is3D,r={cullMode:i?"none":"back",depthWriteEnabled:i&&!t,depthCompare:i?"less-equal":"always"};return t?{...r,blend:!0,blendColorOperation:"add",blendColorSrcFactor:"src-alpha",blendColorDstFactor:"one-minus-src-alpha",blendAlphaOperation:"add",blendAlphaSrcFactor:"one",blendAlphaDstFactor:"one-minus-src-alpha"}:{...r,blend:!1}}ensureLinkStatusPlaceholder(){this.linkStatusTexture&&!this.linkStatusTexture.destroyed||(this.linkStatusTexture=this.device.createTexture({width:1,height:1,format:"rgba32float",usage:z.SAMPLE|z.RENDER|z.COPY_DST,data:new Float32Array(4).fill(0)}),this.linkStatusTextureSize=0)}},j0=`#version 300 es
#ifdef GL_ES
precision highp float;
#endif

uniform sampler2D imageAtlasTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform drawFragmentUniforms {
  float greyoutOpacity;
  float pointOpacity;
  float isDarkenGreyout;
  vec4 backgroundColor;
  vec4 outlineColor;
  float outlineWidth;
  float renderMode;
  float sphereShading;
} drawFragment;

#define greyoutOpacity drawFragment.greyoutOpacity
#define pointOpacity drawFragment.pointOpacity
#define isDarkenGreyout drawFragment.isDarkenGreyout
#define backgroundColor drawFragment.backgroundColor
#define outlineColor drawFragment.outlineColor
#define outlineWidth drawFragment.outlineWidth
#define renderMode drawFragment.renderMode
#define sphereShading drawFragment.sphereShading
#else
uniform float greyoutOpacity;
uniform float pointOpacity;
uniform float isDarkenGreyout;
uniform vec4 backgroundColor;
uniform vec4 outlineColor;
uniform float outlineWidth;
uniform float renderMode;
uniform float sphereShading;
#endif


in float pointShape;
in float isGreyedOut;
in float isOutlined;
in vec4 shapeColor;
in vec4 imageAtlasUV;
in float shapeSize;
in float imageSizeVarying;
in float overallSize;
in float depthFadeVarying;

out vec4 fragColor;

// Smoothing controls the smoothness of the point's edge
const float smoothing = 0.9;

// Occlusion culling splits fragments between the opaque core pass (renderMode 1)
// and the blended fringe pass (renderMode 2) at this final-alpha threshold
const float OPAQUE_ALPHA_THRESHOLD = 0.999;

// Shape constants
const float CIRCLE = 0.0;
const float SQUARE = 1.0;
const float TRIANGLE = 2.0;
const float DIAMOND = 3.0;
const float PENTAGON = 4.0;
const float HEXAGON = 5.0;
const float STAR = 6.0;
const float CROSS = 7.0;
const float NONE = 8.0;

// Distance functions for different shapes
float circleDistance(vec2 p) {
    return dot(p, p);
}

// Function to apply greyout logic to image colors
vec4 applyGreyoutToImage(vec4 imageColor, float isGreyedOutValue) {
    vec3 finalColor = imageColor.rgb;
    float finalAlpha = imageColor.a;
    
    if (isGreyedOutValue > 0.0) {
        float blendFactor = 0.65; // Controls how much to modify (0.0 = original, 1.0 = target color)
        
        if (isDarkenGreyout > 0.0) {
            finalColor = mix(finalColor, vec3(0.2), blendFactor);
        } else {
            finalColor = mix(finalColor, max(backgroundColor.rgb, vec3(0.8)), blendFactor);
        }
    }
    
    return vec4(finalColor, finalAlpha);
}

float squareDistance(vec2 p) {
    vec2 d = abs(p) - vec2(0.8);
    return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0);
}

float triangleDistance(vec2 p) {
    const float k = sqrt(3.0);   // \u22481.732; slope of 60\xB0 lines for an equilateral triangle
    p.x = abs(p.x) - 0.9;        // fold the X axis and shift: brings left and right halves together
    p.y = p.y + 0.55;             // move the whole shape up slightly so it is centred vertically

    // reflect points that fall outside the main triangle back inside, to reuse the same maths
    if (p.x + k * p.y > 0.0)
        p = vec2(p.x - k * p.y,  -k * p.x - p.y) / 2.0;

    p.x -= clamp(p.x, -1.0, 0.0); // clip any remainder on the left side

    // Return signed distance: negative = inside; positive = outside
    return -length(p) * sign(p.y);
}

float diamondDistance(vec2 p) {
    // aspect > 1  \u2192  taller diamond
    const float aspect = 1.2;
    return abs(p.x) + abs(p.y) / aspect - 0.8;
}

float pentagonDistance(vec2 p) {
    // Regular pentagon signed-distance (Inigo Quilez)
    const vec3 k = vec3(0.809016994, 0.587785252, 0.726542528);
    p.x = abs(p.x);

    // Reflect across the two tilted edges \u2500 only if point is outside
    p -= 2.0 * min(dot(vec2(-k.x, k.y), p), 0.0) * vec2(-k.x, k.y);
    p -= 2.0 * min(dot(vec2( k.x, k.y), p), 0.0) * vec2( k.x, k.y);

    // Clip against the top horizontal edge (keeps top point sharp)
    p -= vec2(clamp(p.x, -k.z * k.x, k.z * k.x), k.z);

    // Return signed distance (negative \u2192 inside, positive \u2192 outside)
    return length(p) * sign(p.y);
}

float hexagonDistance(vec2 p) {
    const vec3 k = vec3(-0.866025404, 0.5, 0.577350269);
    p = abs(p);
    p -= 2.0 * min(dot(k.xy, p), 0.0) * k.xy;
    p -= vec2(clamp(p.x, -k.z * 0.8, k.z * 0.8), 0.8);
    return length(p) * sign(p.y);
}

float starDistance(vec2 p) {
    // 5-point star signed-distance function (adapted from Inigo Quilez)
    // r  \u2013 outer radius, rf \u2013 inner/outer radius ratio
    const float r  = 0.9;
    const float rf = 0.45;

    // Pre-computed rotation vectors for the star arms (36\xB0 increments)
    const vec2 k1 = vec2(0.809016994, -0.587785252);
    const vec2 k2 = vec2(-k1.x, k1.y);

    // Fold the plane into a single arm sector
    p.x = abs(p.x);
    p -= 2.0 * max(dot(k1, p), 0.0) * k1;
    p -= 2.0 * max(dot(k2, p), 0.0) * k2;
    p.x = abs(p.x);

    // Translate so the top tip of the star lies on the X-axis
    p.y -= r;

    // Vector describing the edge between an outer tip and its adjacent inner point
    vec2 ba = rf * vec2(-k1.y, k1.x) - vec2(0.0, 1.0);
    // Project the point onto that edge and clamp the projection to the segment
    float h = clamp(dot(p, ba) / dot(ba, ba), 0.0, r);

    // Return signed distance (negative => inside, positive => outside)
    return length(p - ba * h) * sign(p.y * ba.x - p.x * ba.y);
}

float crossDistance(vec2 p) {
    // Signed distance function for a cross (union of two rectangles)
    // Adapted from Inigo Quilez (https://iquilezles.org/)
    // Each arm has half-sizes 0.3 (thickness) and 0.8 (length)
    p = abs(p);
    if (p.y > p.x) p = p.yx;       // exploit symmetry

    vec2 q = p - vec2(0.8, 0.3);   // subtract half-sizes (length, thickness)

    // Standard rectangle SDF, then take union of the two arms
    return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0);
}

float getShapeDistance(vec2 p, float shape) {
    if (shape == SQUARE) return squareDistance(p);
    else if (shape == TRIANGLE) return triangleDistance(p);
    else if (shape == DIAMOND) return diamondDistance(p);
    else if (shape == PENTAGON) return pentagonDistance(p);
    else if (shape == HEXAGON) return hexagonDistance(p);
    else if (shape == STAR) return starDistance(p);
    else if (shape == CROSS) return crossDistance(p);
    else return circleDistance(p); // Default to circle
}

void main() {
    // Discard the fragment if the point is fully transparent and has no image
    if (shapeColor.a == 0.0 && imageAtlasUV.x == -1.0) {
        discard;
    }

    // Discard the fragment if the point has no shape and no image
    if (pointShape == NONE && imageAtlasUV.x == -1.0) {
        discard;
    }

    // Calculate coordinates within the point
    vec2 pointCoord = 2.0 * gl_PointCoord - 1.0;

    vec4 finalShapeColor = vec4(0.0);
    vec4 finalImageColor = vec4(0.0);
    // Geometric sprite coverage (shape SDF / image / outline ring alpha, before any
    // color-alpha or opacity multiplies) \u2014 drives the 3D depth-write discard below.
    float coverage = 0.0;
    
    // Handle shape rendering with centering logic
    if (pointShape != NONE) {
        // Calculate shape coordinates with centering
        vec2 shapeCoord = pointCoord;
        if (overallSize > shapeSize && shapeSize > 0.0) {
            // Shape is smaller than overall size, center it
            float scale = shapeSize / overallSize;
            shapeCoord = pointCoord / scale;
        }
        
        float opacity;
        if (pointShape == CIRCLE) {
            // For circles, use the original distance calculation
            float pointCenterDistance = dot(shapeCoord, shapeCoord);
            opacity = 1.0 - smoothstep(smoothing, 1.0, pointCenterDistance);
        } else {
            // For other shapes, use the shape distance function
            float shapeDistance = getShapeDistance(shapeCoord, pointShape);
            opacity = 1.0 - smoothstep(-0.01, 0.01, shapeDistance);
        }
        coverage = opacity;
        opacity *= shapeColor.a;

        finalShapeColor = vec4(shapeColor.rgb, opacity);
    }

    // Handle image rendering with centering logic
    if (imageAtlasUV.x != -1.0) {
        // Calculate image coordinates with centering
        vec2 imageCoord = pointCoord;
        if (overallSize > imageSizeVarying && imageSizeVarying > 0.0) {
            // Image is smaller than overall size, center it
            float scale = imageSizeVarying / overallSize;
            imageCoord = pointCoord / scale;
            
            // Check if we're outside the valid image area
            if (abs(imageCoord.x) > 1.0 || abs(imageCoord.y) > 1.0) {
                // We're outside the image bounds, don't render the image
                finalImageColor = vec4(0.0);
            } else {
                // Sample from texture atlas
                vec2 atlasUV = mix(imageAtlasUV.xy, imageAtlasUV.zw, (imageCoord + 1.0) * 0.5);
                vec4 imageColor = texture(imageAtlasTexture, atlasUV);
                finalImageColor = applyGreyoutToImage(imageColor, isGreyedOut);
            }
        } else {
            // Image is same size or larger than overall size, no scaling needed
            // Sample from texture atlas
            vec2 atlasUV = mix(imageAtlasUV.xy, imageAtlasUV.zw, (imageCoord + 1.0) * 0.5);
            vec4 imageColor = texture(imageAtlasTexture, atlasUV);
            finalImageColor = applyGreyoutToImage(imageColor, isGreyedOut);
        }
    }

    coverage = max(coverage, finalImageColor.a);

    float finalPointAlpha = max(finalShapeColor.a, finalImageColor.a);
    if (isGreyedOut > 0.0 && greyoutOpacity != -1.0) {
        finalPointAlpha *= greyoutOpacity;
    } else {
        finalPointAlpha *= pointOpacity;
    }

    // Blend image color above point color
    fragColor = vec4(
        mix(finalShapeColor.rgb, finalImageColor.rgb, finalImageColor.a),
        finalPointAlpha
    );

    // Render outline ring around the point
    if (isOutlined > 0.0) {
        float r = length(pointCoord);
        const float ringSmoothing = 1.025;
        float rSafe = max(r, 1e-6);
        float wSafe = max(outlineWidth, 1e-6);
        float outerEdge = smoothstep(rSafe, rSafe * ringSmoothing, 1.0);
        float innerEdge = smoothstep(wSafe, wSafe * ringSmoothing, r);
        float ringAlpha = outerEdge * innerEdge;
        coverage = max(coverage, ringAlpha);

        // Grey out the ring color when the point is greyed
        vec3 ringColor = outlineColor.rgb;
        if (isGreyedOut > 0.0) {
            float blendFactor = 0.65;
            if (isDarkenGreyout > 0.0) {
                ringColor = mix(ringColor, vec3(0.2), blendFactor);
            } else {
                ringColor = mix(ringColor, max(backgroundColor.rgb, vec3(0.8)), blendFactor);
            }
        }

        float ringOpacity = ringAlpha * outlineColor.a;
        // Composite ring on top of existing fragment
        fragColor = vec4(
            mix(fragColor.rgb, ringColor, ringOpacity),
            max(fragColor.a, ringOpacity)
        );
    }

    #ifdef SPACE_3D
    // Impostor sphere shading: light circle sprites as spheres (soft headlight
    // from the upper left) so overlapping points read as separate volumes.
    // gl_PointCoord's y is screen-down, so it's negated for the normal's up.
    if (sphereShading > 0.5 && pointShape < 0.5) {
        float r2 = dot(pointCoord, pointCoord);
        vec3 sphereNormal = normalize(vec3(pointCoord.x, -pointCoord.y, sqrt(max(1.0 - r2, 0.0))));
        const vec3 lightDirection = vec3(-0.324443, 0.486664, 0.811107); // normalize(vec3(-0.4, 0.6, 1.0))
        float diffuse = 0.72 + 0.28 * max(dot(sphereNormal, lightDirection), 0.0);
        fragColor.rgb *= diffuse;
    }

    // Depth cueing: recede distant points toward the background (strength and
    // range computed per point in the vertex shader).
    fragColor.rgb = mix(fragColor.rgb, backgroundColor.rgb, depthFadeVarying);

    // Depth writes are enabled in 3D: the transparent corners of the point sprite
    // must not write depth, or they would punch invisible holes into points behind.
    // Test geometric coverage, not final alpha \u2014 pointOpacity/greyoutOpacity and the
    // point color's alpha apply uniformly across the sprite and must not make
    // low-opacity points disappear entirely.
    if (coverage < 0.33) {
        discard;
    }
    #endif

    // Occlusion culling (2D only; renderMode stays 0 in 3D): split every fragment
    // between the opaque core pass (depth-writing, unblended) and the blended
    // fringe pass. The same final-alpha rule runs in both passes so each fragment
    // renders exactly once.
    if (renderMode > 1.5) {
        if (fragColor.a >= OPAQUE_ALPHA_THRESHOLD) discard; // already drawn by core pass
    } else if (renderMode > 0.5) {
        if (fragColor.a < OPAQUE_ALPHA_THRESHOLD) discard;  // left for fringe pass
    }
}
`,Y0=`#version 300 es
#ifdef GL_ES
precision highp float;
#endif

in vec2 pointIndices;
in float sourceSize;
in float targetSize;
in vec4 sourceColor;
in vec4 targetColor;
in float shape;
in float imageIndex;
in float imageSize;

uniform sampler2D positionsTexture;
uniform sampler2D pointStatus;
uniform sampler2D exitTexture;
uniform sampler2D imageAtlasCoords;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform drawVertexUniforms {
  float ratio;
  mat4 transformationMatrix;
  float pointsTextureSize;
  float sizeScale;
  float spaceSize;
  vec2 screenSize;
  vec4 greyoutColor;
  vec4 backgroundColor;
  float scalePointsOnZoom;
  float maxPointSize;
  float isDarkenGreyout;
  float skipHighlighted;
  float skipGreyed;
  float hasImages;
  float imageCount;
  float imageAtlasCoordsTextureSize;
  float transitionProgress;
  float animateColors;
  float animateSizes;
  float pointsNumber;
  float pointDepthFade;
  float depthFadeNear;
  float depthFadeFar;
  float animatePositions;
  vec4 pointDefaultColor;
  float pointDefaultSize;
} drawVertex;

#define ratio drawVertex.ratio
#define transformationMatrix drawVertex.transformationMatrix
#define pointsTextureSize drawVertex.pointsTextureSize
#define sizeScale drawVertex.sizeScale
#define spaceSize drawVertex.spaceSize
#define screenSize drawVertex.screenSize
#define greyoutColor drawVertex.greyoutColor
#define backgroundColor drawVertex.backgroundColor
#define scalePointsOnZoom drawVertex.scalePointsOnZoom
#define maxPointSize drawVertex.maxPointSize
#define isDarkenGreyout drawVertex.isDarkenGreyout
#define skipHighlighted drawVertex.skipHighlighted
#define skipGreyed drawVertex.skipGreyed
#define hasImages drawVertex.hasImages
#define imageCount drawVertex.imageCount
#define imageAtlasCoordsTextureSize drawVertex.imageAtlasCoordsTextureSize
#define transitionProgress drawVertex.transitionProgress
#define animateColors drawVertex.animateColors
#define animateSizes drawVertex.animateSizes
#define pointsNumber drawVertex.pointsNumber
#define pointDepthFade drawVertex.pointDepthFade
#define depthFadeNear drawVertex.depthFadeNear
#define depthFadeFar drawVertex.depthFadeFar
#define animatePositions drawVertex.animatePositions
#define pointDefaultColor drawVertex.pointDefaultColor
#define pointDefaultSize drawVertex.pointDefaultSize
#else
uniform float ratio;
uniform mat3 transformationMatrix;
uniform float pointsTextureSize;
uniform float sizeScale;
uniform float spaceSize;
uniform vec2 screenSize;
uniform vec4 greyoutColor;
uniform vec4 backgroundColor;
uniform float scalePointsOnZoom;
uniform float maxPointSize;
uniform float isDarkenGreyout;
uniform float skipHighlighted;
uniform float skipGreyed;
uniform float hasImages;
uniform float imageCount;
uniform float imageAtlasCoordsTextureSize;
uniform float transitionProgress;
uniform float animateColors;
uniform float animateSizes;
uniform float pointsNumber;
uniform float pointDepthFade;
uniform float depthFadeNear;
uniform float depthFadeFar;
uniform float animatePositions;
uniform vec4 pointDefaultColor;
uniform float pointDefaultSize;
#endif

out float pointShape;
out float isGreyedOut;
out float isOutlined;
out vec4 shapeColor;
out vec4 imageAtlasUV;
out float shapeSize;
out float imageSizeVarying;
out float overallSize;
out float depthFadeVarying;

// \`pxPerUnit\` is the zoom factor: \`transformationMatrix[0][0]\` in 2D,
// perspective-attenuated \`pxPerSpaceUnit(...)\` in 3D. This function is duplicated in
// find-hovered-point.vert and must stay identical there, or hover misses points.
float calculatePointSize(float size, float pxPerUnit) {
  float pSize;

  if (scalePointsOnZoom > 0.0) {
    pSize = size * ratio * pxPerUnit;
  } else {
    pSize = size * ratio * min(5.0, max(1.0, pxPerUnit * 0.01));
  }

  return min(pSize, maxPointSize * ratio);
}

const float outlineRingScale = 1.3;

// Read-time resolution of NaN channels \u2014 input arrays are used verbatim and never
// edited, so "use the default" stays encoded as NaN all the way to the GPU. A NaN
// resolves to the config default blended toward the exit default along the animated
// exit ramp (0 = present, 1 = gone), so the enter/exit fade of default-valued
// channels drives itself \u2014 no size/color transition needed for a removal. Explicit
// (real) values pass through. EXIT_DEFAULT_* are #defines injected from variables.ts,
// shared with the CPU resolvers (GraphData.getResolvedPoint*).
float resolveSize(float size, float exitRamp) {
  if (!isnan(size)) return size;
  return mix(pointDefaultSize, EXIT_DEFAULT_SIZE, exitRamp);
}

vec4 resolveColor(vec4 color, float exitRamp) {
  vec4 defaultColor = mix(pointDefaultColor, vec4(EXIT_DEFAULT_COLOR_CHANNEL), exitRamp);
  return mix(color, defaultColor, isnan(color));
}

void main() {
  // Read point status texture: R = greyout, G = outlined
  vec4 status = texture(pointStatus, (pointIndices + 0.5) / pointsTextureSize);
  isGreyedOut = status.r;
  isOutlined = status.g;
  float isHighlighted = (status.r == 0.0) ? 1.0 : 0.0;

  // Discard point based on rendering mode
  if (skipHighlighted > 0.0 && isHighlighted > 0.0) {
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    gl_PointSize = 0.0;
    return;
  }
  if (skipGreyed > 0.0 && isHighlighted <= 0.0) {
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    gl_PointSize = 0.0;
    return;
  }

  // Exit texture: R = previous absence, G = current absence (1 = absent). During a
  // position transition, blend R\u2192G to animate the enter/exit; otherwise use G (the
  // settled current absence) so an unrelated color/size transition can't replay the
  // ramp. The caller drives the visual fade via setPointSizes/setPointColors; here
  // we only remove the point once it is fully gone.
  vec4 exitStatus = texture(exitTexture, (pointIndices + 0.5) / pointsTextureSize);
  float exit = animatePositions > 0.0
    ? mix(exitStatus.r, exitStatus.g, transitionProgress)
    : exitStatus.g;
  if (exit >= 1.0) {
    // Fully gone \u2014 skip. Also avoids using a NaN position on the snapped path.
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    gl_PointSize = 0.0;
    return;
  }

  // Position
  vec4 pointPosition = texture(positionsTexture, (pointIndices + 0.5) / pointsTextureSize);

  #ifdef SPACE_3D
  // 3D mode: transformationMatrix carries the camera's view-projection matrix.
  // World position (z stored in the texture's alpha channel) maps straight to
  // clip space; the GPU performs the perspective divide.
  vec4 clip = transformationMatrix * vec4(pointPosition.rg, pointPosition.a, 1.0);
  if (clip.w <= 0.0) {
    // Behind the camera \u2014 cull, or the perspective divide would mirror the position.
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    gl_PointSize = 0.0;
    return;
  }
  gl_Position = clip;
  // Depth cueing: 0 at the near edge of the scene sphere, up to \`pointDepthFade\`
  // at the far edge. clip.w is the eye-space distance under a perspective
  // projection; the range is the camera distance \xB1 the fitted scene radius.
  depthFadeVarying = pointDepthFade * smoothstep(depthFadeNear, depthFadeFar, clip.w);
  float pxPerUnit = pxPerSpaceUnit(transformationMatrix, screenSize, clip.w);
  #else
  vec2 point = pointPosition.rg;

  // Transform point position to normalized device coordinates
  // Convert from space coordinates [0, spaceSize] to normalized [-1, 1]
  vec2 normalizedPosition = 2.0 * point / spaceSize - 1.0;

  // Apply aspect ratio correction - this is needed to map the square space to the rectangular screen
  // The transformation matrix handles zoom/pan, but we need this to handle aspect ratio
  normalizedPosition *= spaceSize / screenSize;

  #ifdef USE_UNIFORM_BUFFERS
  mat3 transformMat3 = mat3(transformationMatrix);
  vec3 finalPosition = transformMat3 * vec3(normalizedPosition, 1);
  #else
  vec3 finalPosition = transformationMatrix * vec3(normalizedPosition, 1);
  #endif
  // Depth encodes stacking order (2D only \u2014 the 3D branch above outputs real
  // perspective depth): higher point index = drawn on top = nearer (smaller z).
  // Harmless when depth testing is off (depthCompare 'always'); used by the
  // occlusion-culling core/fringe passes.
  float linearIndex = pointIndices.y * pointsTextureSize + pointIndices.x;
  float depthZ = 1.0 - 2.0 * (linearIndex + 0.5) / max(pointsNumber, 1.0);
  gl_Position = vec4(finalPosition.rg, depthZ, 1.0);
  depthFadeVarying = 0.0;
  float pxPerUnit = transformationMatrix[0][0];
  #endif

  // Resolve NaN channels against the animated exit ramp before mixing \u2014 default
  // sizes/colors of an entering or leaving point fade with the ramp regardless of
  // whether a size/color transition is active.
  float pointSize = animateSizes > 0.0
    ? mix(resolveSize(sourceSize, exit), resolveSize(targetSize, exit), transitionProgress)
    : resolveSize(targetSize, exit);
  vec4 pointColor = animateColors > 0.0
    ? mix(resolveColor(sourceColor, exit), resolveColor(targetColor, exit), transitionProgress)
    : resolveColor(targetColor, exit);

  // Calculate sizes for shape and image
  float shapeSizeValue = calculatePointSize(pointSize * sizeScale, pxPerUnit);
  float imageSizeValue = calculatePointSize(imageSize * sizeScale, pxPerUnit);

  // Use the larger of the two sizes for the overall point size
  float overallSizeValue = max(shapeSizeValue, imageSizeValue);

  // Scale up point sprite to fit outline ring; clamp to hardware gl_PointSize limit so the
  // sprite never gets silently clipped \u2014 the point body is unaffected, only the ring narrows.
  if (isOutlined > 0.0) {
    overallSizeValue *= outlineRingScale;
    overallSizeValue = min(overallSizeValue, maxPointSize * ratio);
  }

  gl_PointSize = overallSizeValue;

  // Pass size information to fragment shader
  shapeSize = shapeSizeValue;
  imageSizeVarying = imageSizeValue;
  overallSize = overallSizeValue;

  shapeColor = pointColor;
  pointShape = shape;

  // Adjust color of greyed-out points
  if (isGreyedOut > 0.0) {
    if (greyoutColor[0] != -1.0) {
      shapeColor = greyoutColor;
    } else {
      // If greyoutColor is not set, make color lighter or darker based on isDarkenGreyout
      float blendFactor = 0.65;

      #ifdef USE_UNIFORM_BUFFERS
      if (isDarkenGreyout > 0.0) {
        shapeColor.rgb = mix(shapeColor.rgb, vec3(0.2), blendFactor);
      } else {
        shapeColor.rgb = mix(shapeColor.rgb, max(backgroundColor.rgb, vec3(0.8)), blendFactor);
      }
      #else
      if (isDarkenGreyout > 0.0) {
        shapeColor.rgb = mix(shapeColor.rgb, vec3(0.2), blendFactor);
      } else {
        shapeColor.rgb = mix(shapeColor.rgb, max(backgroundColor.rgb, vec3(0.8)), blendFactor);
      }
      #endif
    }
  }

  #ifdef USE_UNIFORM_BUFFERS
  if (hasImages <= 0.0 || imageIndex < 0.0 || imageIndex >= imageCount) {
    imageAtlasUV = vec4(-1.0);
  } else {
    float atlasCoordIndex = imageIndex;
    float texX = mod(atlasCoordIndex, imageAtlasCoordsTextureSize);
    float texY = floor(atlasCoordIndex / imageAtlasCoordsTextureSize);
    vec2 atlasCoordTexCoord = (vec2(texX, texY) + 0.5) / imageAtlasCoordsTextureSize;
    vec4 atlasCoords = texture(imageAtlasCoords, atlasCoordTexCoord);
    imageAtlasUV = atlasCoords;
  }
  #else
  if (hasImages <= 0.0 || imageIndex < 0.0 || imageIndex >= imageCount) {
    imageAtlasUV = vec4(-1.0);
  } else {
    float atlasCoordIndex = imageIndex;
    float texX = mod(atlasCoordIndex, imageAtlasCoordsTextureSize);
    float texY = floor(atlasCoordIndex / imageAtlasCoordsTextureSize);
    vec2 atlasCoordTexCoord = (vec2(texX, texY) + 0.5) / imageAtlasCoordsTextureSize;
    vec4 atlasCoords = texture(imageAtlasCoords, atlasCoordTexCoord);
    imageAtlasUV = atlasCoords;
  }
  #endif
}
`,X2=`#version 300 es
#ifdef GL_ES
precision highp float;
#endif

uniform sampler2D positionsTexture;
uniform sampler2D pointSize;
uniform sampler2D exitTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform findPointsInRectUniforms {
  float sizeScale;
  float spaceSize;
  vec2 screenSize;
  float ratio;
  mat4 transformationMatrix;
  vec2 rect0;
  vec2 rect1;
  float scalePointsOnZoom;
  float maxPointSize;
} findPointsInRect;

#define sizeScale findPointsInRect.sizeScale
#define spaceSize findPointsInRect.spaceSize
#define screenSize findPointsInRect.screenSize
#define ratio findPointsInRect.ratio
#define transformationMatrix findPointsInRect.transformationMatrix
#define rect0 findPointsInRect.rect0
#define rect1 findPointsInRect.rect1
#define scalePointsOnZoom findPointsInRect.scalePointsOnZoom
#define maxPointSize findPointsInRect.maxPointSize
#else
uniform float sizeScale;
uniform float spaceSize;
uniform vec2 screenSize;
uniform float ratio;
uniform mat3 transformationMatrix;
uniform vec2 rect0;
uniform vec2 rect1;
uniform float scalePointsOnZoom;
uniform float maxPointSize;
#endif

in vec2 textureCoords;

out vec4 fragColor;

float pointSizeF(float size) {
  float pSize;
  // Extract top-left element from mat4 (or use mat3 conversion)
  #ifdef USE_UNIFORM_BUFFERS
  float scale = transformationMatrix[0][0]; // mat4 first element
  #else
  float scale = transformationMatrix[0][0]; // mat3 first element
  #endif
  if (scalePointsOnZoom > 0.0) { 
    pSize = size * ratio * scale;
  } else {
    pSize = size * ratio * min(5.0, max(1.0, scale * 0.01));
  }
  return min(pSize, maxPointSize * ratio);
}

void main() {
  vec4 pointPosition = texture(positionsTexture, textureCoords);
  // Texels beyond the point count carry index -1 \u2014 they are not points.
  if (pointPosition.b < 0.0) {
    fragColor = vec4(0.0);
    return;
  }
  // Skip absent (faded-out) points \u2014 never select a removed point. exit.G = absent.
  if (texture(exitTexture, textureCoords).g > 0.5) {
    fragColor = vec4(0.0);
    return;
  }
  vec2 p = 2.0 * pointPosition.rg / spaceSize - 1.0;
  p *= spaceSize / screenSize;
  #ifdef USE_UNIFORM_BUFFERS
  // Convert mat4 to mat3 for vec3 multiplication
  mat3 transformMat3 = mat3(transformationMatrix);
  vec3 final = transformMat3 * vec3(p, 1);
  #else
  vec3 final = transformationMatrix * vec3(p, 1);
  #endif

  vec4 pSize = texture(pointSize, textureCoords);
  float size = pSize.r * sizeScale;

  float left = 2.0 * (rect0.x - 0.5 * pointSizeF(size)) / screenSize.x - 1.0;
  float right = 2.0 * (rect1.x + 0.5 * pointSizeF(size)) / screenSize.x - 1.0;
  float top =  2.0 * (rect0.y - 0.5 * pointSizeF(size)) / screenSize.y - 1.0;
  float bottom =  2.0 * (rect1.y + 0.5 * pointSizeF(size)) / screenSize.y - 1.0;

  fragColor = vec4(0.0, 0.0, pointPosition.r, pointPosition.g);
  if (final.x >= left && final.x <= right && final.y >= top && final.y <= bottom) {
    fragColor.r = 1.0;
  }
}

`,j2=`#version 300 es
#ifdef GL_ES
precision highp float;
#endif

uniform sampler2D positionsTexture;
uniform sampler2D polygonPathTexture; // Texture containing polygon path points
uniform sampler2D exitTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform findPointsInPolygonUniforms {
  float spaceSize;
  vec2 screenSize;
  mat4 transformationMatrix;
  float polygonPathLength;
} findPointsInPolygon;

#define spaceSize findPointsInPolygon.spaceSize
#define screenSize findPointsInPolygon.screenSize
#define transformationMatrix findPointsInPolygon.transformationMatrix
#define polygonPathLength int(findPointsInPolygon.polygonPathLength)
#else
uniform int polygonPathLength;
uniform float spaceSize;
uniform vec2 screenSize;
uniform mat3 transformationMatrix;
#endif

in vec2 textureCoords;

out vec4 fragColor;

// Get a point from the polygon path texture at a specific index
vec2 getPolygonPoint(sampler2D pathTexture, int index, int pathLength) {
  if (index >= pathLength) return vec2(0.0);
  
  // Calculate texture coordinates for the index
  int textureSize = int(ceil(sqrt(float(pathLength))));
  int x = index - (index / textureSize) * textureSize;
  int y = index / textureSize;
  
  vec2 texCoord = (vec2(float(x), float(y)) + 0.5) / float(textureSize);
  vec4 pathData = texture(pathTexture, texCoord);
  
  return pathData.xy;
}

// Point-in-polygon algorithm using ray casting
bool pointInPolygon(vec2 point, sampler2D pathTexture, int pathLength) {
  bool inside = false;
  
  for (int i = 0; i < 2048; i++) {
    if (i >= pathLength) break;
    
    int j = int(mod(float(i + 1), float(pathLength)));
    
    vec2 pi = getPolygonPoint(pathTexture, i, pathLength);
    vec2 pj = getPolygonPoint(pathTexture, j, pathLength);
    
    if (((pi.y > point.y) != (pj.y > point.y)) &&
        (point.x < (pj.x - pi.x) * (point.y - pi.y) / (pj.y - pi.y) + pi.x)) {
      inside = !inside;
    }
  }
  
  return inside;
}

void main() {
  vec4 pointPosition = texture(positionsTexture, textureCoords);
  // Texels beyond the point count carry index -1 \u2014 they are not points.
  if (pointPosition.b < 0.0) {
    fragColor = vec4(0.0);
    return;
  }
  // Skip absent (faded-out) points \u2014 never select a removed point. exit.G = absent.
  if (texture(exitTexture, textureCoords).g > 0.5) {
    fragColor = vec4(0.0);
    return;
  }
  vec2 p = 2.0 * pointPosition.rg / spaceSize - 1.0;
  p *= spaceSize / screenSize;
  #ifdef USE_UNIFORM_BUFFERS
  // Convert mat4 to mat3 for vec3 multiplication
  mat3 transformMat3 = mat3(transformationMatrix);
  vec3 final = transformMat3 * vec3(p, 1);
  #else
  vec3 final = transformationMatrix * vec3(p, 1);
  #endif

  // Convert to screen coordinates for polygon check
  vec2 screenPos = (final.xy + 1.0) * screenSize / 2.0;
  
  fragColor = vec4(0.0, 0.0, pointPosition.r, pointPosition.g);
  
  // Check if point center is inside the polygon
  if (pointInPolygon(screenPos, polygonPathTexture, polygonPathLength)) {
    fragColor.r = 1.0;
  }
} `,Y2=`#version 300 es
#ifdef GL_ES
precision highp float;
#endif

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform drawHighlightedUniforms {
  float size;
  mat4 transformationMatrix;
  float pointsTextureSize;
  float sizeScale;
  float spaceSize;
  vec2 screenSize;
  float scalePointsOnZoom;
  float pointIndex;
  float maxPointSize;
  vec4 color;
  float universalPointOpacity;
  float greyoutOpacity;
  float isDarkenGreyout;
  vec4 backgroundColor;
  vec4 greyoutColor;
  float width;
} drawHighlighted;

#define width drawHighlighted.width
#else
uniform float width;
#endif

in vec2 vertexPosition;
in float pointOpacity;
in vec3 rgbColor;

out vec4 fragColor;

const float smoothing = 1.05;

void main () {
  float r = dot(vertexPosition, vertexPosition);
  float opacity = smoothstep(r, r * smoothing, 1.0);
  float stroke = smoothstep(width, width * smoothing, r);
  fragColor = vec4(rgbColor, opacity * stroke * pointOpacity);
}`,G2=`#version 300 es
#ifdef GL_ES
precision highp float;
#endif

in vec2 vertexCoord;

uniform sampler2D positionsTexture;
uniform sampler2D pointStatus;
uniform sampler2D exitTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform drawHighlightedUniforms {
  float size;
  mat4 transformationMatrix;
  float pointsTextureSize;
  float sizeScale;
  float spaceSize;
  vec2 screenSize;
  float scalePointsOnZoom;
  float pointIndex;
  float maxPointSize;
  vec4 color;
  float universalPointOpacity;
  float greyoutOpacity;
  float isDarkenGreyout;
  vec4 backgroundColor;
  vec4 greyoutColor;
  float width;
} drawHighlighted;

#define size drawHighlighted.size
#define transformationMatrix drawHighlighted.transformationMatrix
#define pointsTextureSize drawHighlighted.pointsTextureSize
#define sizeScale drawHighlighted.sizeScale
#define spaceSize drawHighlighted.spaceSize
#define screenSize drawHighlighted.screenSize
#define scalePointsOnZoom drawHighlighted.scalePointsOnZoom
#define pointIndex drawHighlighted.pointIndex
#define maxPointSize drawHighlighted.maxPointSize
#define color drawHighlighted.color
#define universalPointOpacity drawHighlighted.universalPointOpacity
#define greyoutOpacity drawHighlighted.greyoutOpacity
#define isDarkenGreyout drawHighlighted.isDarkenGreyout
#define backgroundColor drawHighlighted.backgroundColor
#define greyoutColor drawHighlighted.greyoutColor
#else
uniform float size;
uniform mat3 transformationMatrix;
uniform float pointsTextureSize;
uniform float sizeScale;
uniform float spaceSize;
uniform vec2 screenSize;
uniform float scalePointsOnZoom;
uniform float pointIndex;
uniform float maxPointSize;
uniform vec4 color;
uniform float universalPointOpacity;
uniform float greyoutOpacity;
uniform float isDarkenGreyout;
uniform vec4 backgroundColor;
uniform vec4 greyoutColor;
uniform float width;
#endif
out vec2 vertexPosition;
out float pointOpacity;
out vec3 rgbColor;

// \`pxPerUnit\` is the zoom factor: \`transformationMatrix[0][0]\` in 2D,
// perspective-attenuated \`pxPerSpaceUnit(...)\` in 3D. Mirrors draw-points.vert
// (without the \`ratio\` factor \u2014 this shader works in CSS pixels).
float calculatePointSize(float pointSize, float pxPerUnit) {
  float pSize;

  if (scalePointsOnZoom > 0.0) {
    pSize = pointSize * pxPerUnit;
  } else {
    pSize = pointSize * min(5.0, max(1.0, pxPerUnit * 0.01));
  }

  return min(pSize, maxPointSize);
}

const float relativeRingRadius = 1.3;

void main () {
  vertexPosition = vertexCoord;

  vec2 textureCoordinates = vec2(mod(pointIndex, pointsTextureSize), floor(pointIndex / pointsTextureSize)) + 0.5;

  // Don't draw a highlight/outline for an absent (faded-out) point. exit.G = absent.
  if (texture(exitTexture, textureCoordinates / pointsTextureSize).g > 0.5) {
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    return;
  }

  vec4 pointPosition = texture(positionsTexture, textureCoordinates / pointsTextureSize);

  rgbColor = color.rgb;
  pointOpacity = color.a * universalPointOpacity;
  vec4 greyoutStatus = texture(pointStatus, textureCoordinates / pointsTextureSize);
  if (greyoutStatus.r > 0.0) {
    if (greyoutColor[0] != -1.0) {
      rgbColor = greyoutColor.rgb;
      pointOpacity = greyoutColor.a;
    } else {
      // If greyoutColor is not set, make color lighter or darker based on isDarkenGreyout
      float blendFactor = 0.65; // Controls how much to modify (0.0 = original, 1.0 = target color)
      
      #ifdef USE_UNIFORM_BUFFERS
      if (isDarkenGreyout > 0.0) {
        // Darken the color
        rgbColor = mix(rgbColor, vec3(0.2), blendFactor);
      } else {
        // Lighten the color
        rgbColor = mix(rgbColor, max(backgroundColor.rgb, vec3(0.8)), blendFactor);
      }
      #else
      if (isDarkenGreyout > 0.0) {
        // Darken the color
        rgbColor = mix(rgbColor, vec3(0.2), blendFactor);
      } else {
        // Lighten the color
        rgbColor = mix(rgbColor, max(backgroundColor.rgb, vec3(0.8)), blendFactor);
      }
      #endif
    }

    if (greyoutOpacity != -1.0) {
      pointOpacity *= greyoutOpacity;
    }
  }

  #ifdef SPACE_3D
  // 3D mode: project the point center with the view-projection matrix and
  // billboard the ring quad in screen space (pre-multiplied by w so the offset
  // survives the perspective divide).
  vec4 clip = transformationMatrix * vec4(pointPosition.rg, pointPosition.a, 1.0);
  if (clip.w <= 0.0) {
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    return;
  }
  float pxPerUnit = pxPerSpaceUnit(transformationMatrix, screenSize, clip.w);
  float radiusPx = calculatePointSize(size * sizeScale, pxPerUnit) * relativeRingRadius * 0.5;
  clip.xy += vertexCoord * radiusPx * (2.0 / screenSize) * clip.w;
  gl_Position = clip;
  #else
  // Calculate point radius
  float pointSize = (calculatePointSize(size * sizeScale, transformationMatrix[0][0]) * relativeRingRadius) / transformationMatrix[0][0];
  float radius = pointSize * 0.5;

  // Calculate point position in screen space
  vec2 a = pointPosition.xy;
  vec2 b = pointPosition.xy + vec2(0.0, radius);
  vec2 xBasis = b - a;
  vec2 yBasis = normalize(vec2(-xBasis.y, xBasis.x));
  vec2 pointPositionInScreenSpace = a + xBasis * vertexCoord.x + yBasis * radius * vertexCoord.y;

  // Transform point position to normalized device coordinates
  vec2 p = 2.0 * pointPositionInScreenSpace / spaceSize - 1.0;
  p *= spaceSize / screenSize;
  #ifdef USE_UNIFORM_BUFFERS
  mat3 transformMat3 = mat3(transformationMatrix);
  vec3 final = transformMat3 * vec3(p, 1);
  #else
  vec3 final = transformationMatrix * vec3(p, 1);
  #endif

  gl_Position = vec4(final.rg, 0, 1);
  #endif
}`,q2=`#version 300 es
#ifdef GL_ES
precision highp float;
#endif

in vec4 rgba;

out vec4 fragColor;

void main() {
  // Circular sprite: hover is radius-based, like the rendered point shape.
  vec2 fromCenter = 2.0 * gl_PointCoord - 1.0;
  if (dot(fromCenter, fromCenter) > 1.0) discard;
  fragColor = rgba;
}
`,K2=`#version 300 es
#ifdef GL_ES
precision highp float;
#endif

// Fills the screen-space picking buffer: every point rasterizes its sprite at
// its projected screen position, carrying [index, x, y, z] to the fragment
// shader. Hover detection then only reads a small window of this buffer under
// the cursor \u2014 it never has to touch the point set again until the scene
// changes (see Points.updatePickingBuffer / Graph.findHoveredItem).
//
// In 3D candidates depth-test against each other so the nearest point wins;
// the two-pass highlight priority mirrors find-hovered semantics: the
// highlighted pass gets the nearer half of the depth range, so it beats the
// greyed pass, matching the two-pass draw order in 2D (greyed first).

in vec2 pointIndices;
in float size;
in float imageSize;

uniform sampler2D positionsTexture;
uniform sampler2D pointStatus;
uniform sampler2D exitTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform fillPickingBufferUniforms {
  float pointsTextureSize;
  float sizeScale;
  float spaceSize;
  vec2 screenSize;
  float ratio;
  float pickingPixelRatio;
  mat4 transformationMatrix;
  float scalePointsOnZoom;
  float maxPointSize;
  float skipHighlighted;
  float skipGreyed;
  float pointDefaultSize;
} fillPickingBuffer;

#define pointsTextureSize fillPickingBuffer.pointsTextureSize
#define sizeScale fillPickingBuffer.sizeScale
#define spaceSize fillPickingBuffer.spaceSize
#define screenSize fillPickingBuffer.screenSize
#define ratio fillPickingBuffer.ratio
#define pickingPixelRatio fillPickingBuffer.pickingPixelRatio
#define transformationMatrix fillPickingBuffer.transformationMatrix
#define scalePointsOnZoom fillPickingBuffer.scalePointsOnZoom
#define maxPointSize fillPickingBuffer.maxPointSize
#define skipHighlighted fillPickingBuffer.skipHighlighted
#define skipGreyed fillPickingBuffer.skipGreyed
#define pointDefaultSize fillPickingBuffer.pointDefaultSize
#else
uniform float pointsTextureSize;
uniform float sizeScale;
uniform float spaceSize;
uniform vec2 screenSize;
uniform float ratio;
uniform float pickingPixelRatio;
uniform mat3 transformationMatrix;
uniform float scalePointsOnZoom;
uniform float maxPointSize;
uniform float skipHighlighted;
uniform float skipGreyed;
uniform float pointDefaultSize;
#endif

out vec4 rgba;

// Keep tiny points pickable: below this sprite footprint (in picking-buffer
// pixels) a point could fall between the buffer's texels.
const float minPickingSize = 2.0;

// Must stay identical to calculatePointSize in draw-points.vert (same \`pxPerUnit\`
// semantics), or the picking radius drifts from the rendered point size.
float calculatePointSize(float size, float pxPerUnit) {
  float pSize;

  if (scalePointsOnZoom > 0.0) {
    pSize = size * ratio * pxPerUnit;
  } else {
    pSize = size * ratio * min(5.0, max(1.0, pxPerUnit * 0.01));
  }

  return min(pSize, maxPointSize * ratio);
}

void main() {
  // Fully clipped: a skipped point must not rasterize anywhere in the buffer.
  rgba = vec4(-1.0);
  gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
  gl_PointSize = 1.0;

  // Skip absent (faded-out) points so picking never lands on a removed one. Their
  // size/position may still look hittable mid-fade (only alpha faded), so the exit
  // status is the reliable signal. exit.G = current absence.
  if (texture(exitTexture, (pointIndices + 0.5) / pointsTextureSize).g > 0.5) return;

  vec4 greyoutStatus = texture(pointStatus, (pointIndices + 0.5) / pointsTextureSize);
  float isHighlighted = (greyoutStatus.r == 0.0) ? 1.0 : 0.0;

  if (skipHighlighted > 0.0 && isHighlighted > 0.0) return;
  if (skipGreyed > 0.0 && isHighlighted <= 0.0) return;

  vec4 pointPosition = texture(positionsTexture, (pointIndices + 0.5) / pointsTextureSize);

  #ifdef SPACE_3D
  // 3D mode: same projection as draw-points.vert (z in the texture's alpha channel).
  vec4 clip = transformationMatrix * vec4(pointPosition.rg, pointPosition.a, 1.0);
  if (clip.w <= 0.0) return; // behind the camera \u2014 never a pick candidate
  float pxPerUnit = pxPerSpaceUnit(transformationMatrix, screenSize, clip.w);
  vec2 ndc = clip.xy / clip.w;
  #else
  vec2 point = pointPosition.rg;

  vec2 normalizedPosition = 2.0 * point / spaceSize - 1.0;
  normalizedPosition *= spaceSize / screenSize;

  #ifdef USE_UNIFORM_BUFFERS
  mat3 transformMat3 = mat3(transformationMatrix);
  vec3 finalPosition = transformMat3 * vec3(normalizedPosition, 1);
  #else
  vec3 finalPosition = transformationMatrix * vec3(normalizedPosition, 1);
  #endif
  float pxPerUnit = transformationMatrix[0][0];
  vec2 ndc = finalPosition.xy;
  #endif

  // Resolve a NaN size at read time. The absent-point guard above already returned,
  // so a NaN here means "use the config default".
  float resolvedSize = isnan(size) ? pointDefaultSize : size;

  float shapeSizeValue = calculatePointSize(resolvedSize * sizeScale, pxPerUnit);
  float imageSizeValue = calculatePointSize(imageSize * sizeScale, pxPerUnit);
  // Device px \u2192 CSS px \u2192 picking-buffer px (the buffer is smaller than the screen)
  float spriteSize = max(shapeSizeValue, imageSizeValue) / ratio * pickingPixelRatio;

  float index = pointIndices.g * pointsTextureSize + pointIndices.r;
  rgba = vec4(index, pointPosition.rg, pointPosition.a);
  gl_PointSize = max(spriteSize, minPickingSize);

  #ifdef SPACE_3D
  // Nearest-wins: candidates depth-test against each other. The highlighted
  // pass (skipGreyed == 1) gets the nearer half of the depth range so it keeps
  // priority over the greyed pass, matching the 2D two-pass order.
  float depth01 = clamp(clip.z / clip.w * 0.5 + 0.5, 0.0, 1.0);
  float priority = (skipHighlighted > 0.0) ? 0.5 : 0.0;
  gl_Position = vec4(ndc, (priority + 0.5 * depth01) * 2.0 - 1.0, 1.0);
  #else
  // 2D: later points overwrite earlier ones (depth test off), matching draw order.
  gl_Position = vec4(ndc, 0.0, 1.0);
  #endif
}
`,Z2=`#version 300 es
#ifdef GL_ES
precision highp float;
#endif

in vec4 rgba;

out vec4 fragColor;

void main() {
  fragColor = rgba;
}`,Q2=`#version 300 es
#ifdef GL_ES
precision highp float;
#endif

in vec2 pointIndices;

uniform sampler2D positionsTexture;
uniform sampler2D exitTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform fillSampledPointsUniforms {
  float pointsTextureSize;
  mat4 transformationMatrix;
  float spaceSize;
  vec2 screenSize;
} fillSampledPoints;

#define pointsTextureSize fillSampledPoints.pointsTextureSize
#define transformationMatrix fillSampledPoints.transformationMatrix
#define spaceSize fillSampledPoints.spaceSize
#define screenSize fillSampledPoints.screenSize
#else
uniform float pointsTextureSize;
uniform float spaceSize;
uniform vec2 screenSize;
uniform mat3 transformationMatrix;
#endif

out vec4 rgba;

void main() {
  // Keep absent (faded-out) points out of the sample. exit.G = current absence.
  if (texture(exitTexture, (pointIndices + 0.5) / pointsTextureSize).g > 0.5) {
    rgba = vec4(0.0);
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    gl_PointSize = 0.0;
    return;
  }

  vec4 pointPosition = texture(positionsTexture, (pointIndices + 0.5) / pointsTextureSize);
  float index = pointIndices.g * pointsTextureSize + pointIndices.r;

  #ifdef SPACE_3D
  // 3D mode: project with the camera's view-projection matrix (z in the texture's
  // alpha channel). The second channel carries z instead of the constant validity
  // flag \u2014 validity is index >= 0 (the pass clears the FBO to -1).
  vec4 clip = transformationMatrix * vec4(pointPosition.rg, pointPosition.a, 1.0);
  if (clip.w <= 0.0) {
    // Behind the camera \u2014 keep the vertex off the sampling grid.
    rgba = vec4(-1.0);
    gl_Position = vec4(2.0, 2.0, 0.0, 1.0);
    gl_PointSize = 1.0;
    return;
  }
  vec2 pointScreenPosition = (clip.xy / clip.w + 1.0) * screenSize / 2.0;
  rgba = vec4(index, pointPosition.a, pointPosition.xy);
  #else
  vec2 p = 2.0 * pointPosition.rg / spaceSize - 1.0;
  p *= spaceSize / screenSize;
  #ifdef USE_UNIFORM_BUFFERS
  // Convert mat4 to mat3 for vec3 multiplication
  mat3 transformMat3 = mat3(transformationMatrix);
  vec3 final = transformMat3 * vec3(p, 1);
  #else
  vec3 final = transformationMatrix * vec3(p, 1);
  #endif

  vec2 pointScreenPosition = (final.xy + 1.0) * screenSize / 2.0;
  rgba = vec4(index, 1.0, pointPosition.xy);
  #endif

  float i = (pointScreenPosition.x + 0.5) / screenSize.x;
  float j = (pointScreenPosition.y + 0.5) / screenSize.y;
  gl_Position = vec4(2.0 * vec2(i, j) - 1.0, 0.0, 1.0);

  gl_PointSize = 1.0;
}`,J2=`#version 300 es
#ifdef GL_ES
precision highp float;
#endif

uniform sampler2D positionsTexture;
uniform sampler2D velocity;
uniform sampler2D pinnedStatusTexture;
uniform sampler2D exitTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform updatePositionUniforms {
  float friction;
  float spaceSize;
} updatePosition;

#define friction updatePosition.friction
#define spaceSize updatePosition.spaceSize
#else
uniform float friction;
uniform float spaceSize;
#endif

in vec2 textureCoords;

out vec4 fragColor;

void main() {
  vec4 pointPosition = texture(positionsTexture, textureCoords);
  vec4 pointVelocity = texture(velocity, textureCoords);

  // Check if point is pinned
  // pinnedStatusTexture has the same size and layout as positionsTexture
  // Each pixel corresponds to a point: red channel > 0.5 means the point is pinned
  vec4 pinnedStatus = texture(pinnedStatusTexture, textureCoords);
  
  // If pinned, don't update position
  if (pinnedStatus.r > 0.5) {
    fragColor = pointPosition;
    return;
  }

  // If absent (current absence = exit.G), leave it untouched \u2014 don't integrate or
  // clamp it (clamping NaN is undefined and could resurrect the point at (0,0)).
  vec4 exitStatus = texture(exitTexture, textureCoords);
  if (exitStatus.g > 0.5) {
    fragColor = pointPosition;
    return;
  }

  // Friction
  pointVelocity.rg *= friction;

  pointPosition.rg += pointVelocity.rg;

  pointPosition.r = clamp(pointPosition.r, 0.0, spaceSize);
  pointPosition.g = clamp(pointPosition.g, 0.0, spaceSize);

  #ifdef SPACE_3D
  // The z coordinate lives in the position alpha channel and its velocity in
  // the velocity blue channel; integrate and clamp it like x and y.
  pointVelocity.b *= friction;
  pointPosition.a += pointVelocity.b;
  pointPosition.a = clamp(pointPosition.a, 0.0, spaceSize);
  #endif

  fragColor = pointPosition;
}`,eA=`#version 300 es
#ifdef GL_ES
precision highp float;
#endif

uniform sampler2D sourceTexture;
uniform sampler2D targetTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform interpolatePositionUniforms {
  float progress;
} interpolatePosition;

#define progress interpolatePosition.progress
#else
uniform float progress;
#endif

in vec2 textureCoords;

out vec4 fragColor;

void main() {
  vec4 source = texture(sourceTexture, textureCoords);
  vec4 target = texture(targetTexture, textureCoords);
  // NaN means absent (ingest normalizes partially-NaN to full-NaN, so checking one
  // channel suffices). Hold the real side so the point stays put while it fades,
  // never interpolating to/from NaN:
  //   \xB7 exiting  (target NaN): freeze at source.
  //   \xB7 entering (source NaN): appear at target (no slide in from NaN).
  // Alpha holds the z coordinate (0 in 2D mode) and must be held with x/y.
  vec3 src = isnan(source.r) ? vec3(target.rg, target.a) : vec3(source.rg, source.a);
  vec3 tgt = isnan(target.r) ? src : vec3(target.rg, target.a);
  vec3 position = mix(src, tgt, progress);
  fragColor = vec4(position.xy, source.b, position.z);
}
`,tA=`#version 300 es
#ifdef GL_ES
precision highp float;
#endif

uniform sampler2D positionsTexture;
uniform sampler2D trackedIndices;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform trackPointsUniforms {
  float pointsTextureSize;
} trackPoints;

#define pointsTextureSize trackPoints.pointsTextureSize
#else
uniform float pointsTextureSize;
#endif

in vec2 textureCoords;

out vec4 fragColor;

void main() {
  vec4 trackedPointIndices = texture(trackedIndices, textureCoords);
  if (trackedPointIndices.r < 0.0) discard;
  vec4 pointPosition = texture(positionsTexture, (trackedPointIndices.rg + 0.5) / pointsTextureSize);

  // Blue carries the z coordinate (stored in the position texture's alpha; 0 in 2D mode).
  fragColor = vec4(pointPosition.rg, pointPosition.a, 1.0);
}

`,iA=`#version 300 es
#ifdef GL_ES
precision highp float;
#endif

uniform sampler2D positionsTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform dragPointUniforms {
  vec4 mousePos; // [x, y, z, unused] \u2014 z is only consumed in 3D mode
  float index;
} dragPoint;

#define mousePos dragPoint.mousePos
#define index dragPoint.index
#else
uniform vec4 mousePos;
uniform float index;
#endif

in vec2 textureCoords;

out vec4 fragColor;

void main() {
  vec4 pointPosition = texture(positionsTexture, textureCoords);

  // Check if a point is being dragged
  if (index >= 0.0 && index == pointPosition.b) {
    pointPosition.rg = mousePos.rg;
    #ifdef SPACE_3D
    // The z coordinate lives in the position alpha channel.
    pointPosition.a = mousePos.b;
    #endif
  }

  fragColor = pointPosition;
}`;function rA(e,t=16384){if(!(e!=null&&e.length))return null;let i=0;for(let c of e){let d=Math.max(c.width,c.height);d>i&&(i=d)}if(i===0)return console.warn("Invalid image dimensions: all images have zero width or height"),null;let r=i,o=Math.ceil(Math.sqrt(e.length)),n=o*i,s=1;n>t&&(s=t/n,i=Math.max(1,Math.floor(i*s)),n=Math.max(1,Math.floor(n*s)),console.warn(`\u{1F5BC}\uFE0F  Atlas scaling required: Original size ${(r*o).toLocaleString()}px exceeds WebGL limit ${t.toLocaleString()}px. Scaling down to ${n.toLocaleString()}px (${Math.round(s*100)}% of original quality)`));let a=new Uint8Array(n*n*4).fill(0),l=new Float32Array(o*o*4).fill(-1);for(let[c,d]of e.entries()){let u=d.width,f=d.height;if(u===0||f===0)continue;let h=Math.min(1,i/Math.max(u,f)),m=Math.floor(u*h),x=Math.floor(f*h),S=Math.floor(c/o),y=c%o*i,A=S*i;l[c*4]=y/n,l[c*4+1]=A/n,l[c*4+2]=(y+m)/n,l[c*4+3]=(A+x)/n;for(let _=0;_<x;_++)for(let v=0;v<m;v++){let P=Math.floor(v*(u/m)),T=(Math.floor(_*(f/x))*u+P)*4,R=((A+_)*n+(y+v))*4;a[R]=d.data[T]??0,a[R+1]=d.data[T+1]??0,a[R+2]=d.data[T+2]??0,a[R+3]=d.data[T+3]??255}}return{atlasData:a,atlasSize:n,atlasCoords:l,atlasCoordsSize:o}}function oA(e,t,i,r=2){let o=t*t,n=new Float32Array(o*4),s=e?i:0;for(let a=s;a<o;++a)n[a*4+2]=-1;if(!e)return n;for(let a=0;a<i;++a){let l=zo(e,a,r);n[a*4+0]=l?NaN:e[a*r+0],n[a*4+1]=l?NaN:e[a*r+1],n[a*4+2]=a,l?n[a*4+3]=NaN:n[a*4+3]=r===3?e[a*3+2]:0}return n}function nA(e,t,i,r,o){let n=o*o,s=new Float32Array(n*4);for(let a=r;a<n;a+=1)s[a*4+2]=-1;for(let a=0;a<i;a+=1)s[a*4+0]=e[a*4+0],s[a*4+1]=e[a*4+1],s[a*4+2]=a,s[a*4+3]=e[a*4+3];for(let a=i;a<r;a+=1)s[a*4+0]=t[a*4+0],s[a*4+1]=t[a*4+1],s[a*4+2]=a,s[a*4+3]=t[a*4+3];return s}var tu=.5,sA=1536,Ve=9,pu={blend:!0,blendColorOperation:"add",blendColorSrcFactor:"src-alpha",blendColorDstFactor:"one-minus-src-alpha",blendAlphaOperation:"add",blendAlphaSrcFactor:"one",blendAlphaDstFactor:"one-minus-src-alpha"},G0={...pu,depthWriteEnabled:!1,depthCompare:"always"},aA={...pu,depthWriteEnabled:!0,depthCompare:"less-equal"},lA={blend:!1,depthWriteEnabled:!0,depthCompare:"less"},cA={...pu,depthWriteEnabled:!1,depthCompare:"less"},du=class extends kt{constructor(){super(...arguments),this.isPickingBufferStale=!0,this.imageCount=0,this.areClusterCentroidsUpToDate=!1,this.isPositionsUpToDate=!1,this.programsSpaceDimensions=2,this.hasAnyAbsentPoint=!1,this.polygonPathLength=0,this.isOcclusionCullingActive=!1,this.transitionProgress=1,this.shouldAnimatePointColors=!1,this.shouldAnimatePointSizes=!1,this.shouldAnimatePointPositions=!1}get isPickInFlight(){var t;return((t=this.pickingReadback)==null?void 0:t.inFlight)??!1}updatePositions(){var t,i;let{device:r,store:o,data:n,config:{rescalePositions:s,enableSimulation:a}}=this,{pointsTextureSize:l}=o;if(!l||!n.pointPositions||n.pointsNumber===void 0)return!1;let c=s;s===void 0&&!a&&(c=!0),this.shouldSkipRescale&&(c=!1),c?this.rescaleInitialNodePositions():this.shouldSkipRescale||(this.scaleX=void 0,this.scaleY=void 0),this.shouldSkipRescale=void 0;let d=n.sourcePointsNumber,u=n.targetPointsNumber,f=d===u,h=((t=this.transition)==null?void 0:t.isPendingFor(me.Positions))===!0&&(((i=this.transition)==null?void 0:i.duration)??this.config.transitionDuration)>0&&!!this.currentPositionTexture,m=oA(n.pointPositions,l,u,n.pointDimensions),x;if(h&&(this.createTransitionResources(),this.sourcePositionTexture&&this.targetPositionTexture)){if(f){let A=this.currentPositionTexture;if(A&&!A.destroyed){let _=this.device.createCommandEncoder();_.copyTextureToTexture({sourceTexture:A,destinationTexture:this.sourcePositionTexture,width:l,height:l}),this.device.submit(_.finish())}}else if(this.currentPositionFbo){let A=Ke(r,this.currentPositionFbo);x=nA(A,m,Math.min(d,u),u,l),this.writePositionTexture(this.sourcePositionTexture,x,l)}else this.writePositionTexture(this.sourcePositionTexture,m,l);this.writePositionTexture(this.targetPositionTexture,m,l)}this.ensurePositionTextures(l),h?x&&(this.writePositionTexture(this.currentPositionTexture,x,l),this.writePositionTexture(this.previousPositionTexture,x,l)):(this.writePositionTexture(this.currentPositionTexture,m,l),this.writePositionTexture(this.previousPositionTexture,m,l)),this.areClusterCentroidsUpToDate=!1,this.isPositionsUpToDate=!1,this.config.enableSimulation&&this.ensureSimulationResources(),!this.searchTexture||this.searchTexture.width!==l||this.searchTexture.height!==l?(this.searchTexture&&!this.searchTexture.destroyed&&this.searchTexture.destroy(),this.searchFbo&&!this.searchFbo.destroyed&&this.searchFbo.destroy(),this.searchTexture=r.createTexture({width:l,height:l,format:"rgba32float"}),this.searchTexture.copyImageData({data:m,bytesPerRow:Q("rgba32float",l),mipLevel:0,x:0,y:0}),this.searchFbo=r.createFramebuffer({width:l,height:l,colorAttachments:[this.searchTexture]})):this.searchTexture.copyImageData({data:m,bytesPerRow:Q("rgba32float",l),mipLevel:0,x:0,y:0}),this.isPickingBufferStale=!0,this.discardPendingPick();let S=Uo(o.pointsTextureSize),y=S.byteLength;return!this.drawPointIndices||this.drawPointIndices.byteLength!==y?(this.drawPointIndices&&!this.drawPointIndices.destroyed&&this.drawPointIndices.destroy(),this.drawPointIndices=r.createBuffer({data:S,usage:U.VERTEX|U.COPY_DST})):this.drawPointIndices.write(S),this.drawCommand&&this.drawCommand.setAttributes({pointIndices:this.drawPointIndices}),this.drawCoreCommand&&this.drawCoreCommand.setAttributes({pointIndices:this.drawPointIndices}),this.updateReversedPointIndexBuffer(),!this.hoveredPointIndices||this.hoveredPointIndices.byteLength!==y?(this.hoveredPointIndices&&!this.hoveredPointIndices.destroyed&&this.hoveredPointIndices.destroy(),this.hoveredPointIndices=r.createBuffer({data:S,usage:U.VERTEX|U.COPY_DST})):this.hoveredPointIndices.write(S),!this.sampledPointIndices||this.sampledPointIndices.byteLength!==y?(this.sampledPointIndices&&!this.sampledPointIndices.destroyed&&this.sampledPointIndices.destroy(),this.sampledPointIndices=r.createBuffer({data:S,usage:U.VERTEX|U.COPY_DST})):this.sampledPointIndices.write(S),this.fillSampledPointsFboCommand&&this.fillSampledPointsFboCommand.setAttributes({pointIndices:this.sampledPointIndices}),this.updatePointStatus(),this.updatePinnedStatus(),this.updateExit(),this.updateSampledPointsGrid(),h||this.trackPoints(),h}initPrograms(){var t,i,r;let{device:o,config:n,store:s,data:a}=this;this.programsSpaceDimensions!==s.spaceDimensions&&(this.programsSpaceDimensions=s.spaceDimensions,this.drawCommand&&(this.drawCommand.destroy(),this.drawCommand=void 0),this.drawCoreCommand&&(this.drawCoreCommand.destroy(),this.drawCoreCommand=void 0),this.isOcclusionCullingActive=!1,this.fillPickingBufferCommand&&(this.fillPickingBufferCommand.destroy(),this.fillPickingBufferCommand=void 0),this.isPickingBufferStale=!0,this.drawHighlightedCommand&&(this.drawHighlightedCommand.destroy(),this.drawHighlightedCommand=void 0),this.fillSampledPointsFboCommand&&(this.fillSampledPointsFboCommand.destroy(),this.fillSampledPointsFboCommand=void 0),this.updatePositionCommand&&(this.updatePositionCommand.destroy(),this.updatePositionCommand=void 0),this.dragPointCommand&&(this.dragPointCommand.destroy(),this.dragPointCommand=void 0)),(!this.imageAtlasCoordsTexture||!this.imageAtlasTexture)&&this.createAtlas(),this.targetColorBuffer||this.updateColor(),this.targetSizeBuffer||this.updateSize(),this.exitTexture||this.updateExit(),this.shapeBuffer||this.updateShape(),this.imageIndicesBuffer||this.updateImageIndices(),this.imageSizesBuffer||this.updateImageSizes(),this.pointStatusTexture||this.updatePointStatus(),n.enableSimulation&&this.ensureUpdatePositionProgram(),this.dragPointVertexCoordBuffer||(this.dragPointVertexCoordBuffer=o.createBuffer({data:new Float32Array([-1,-1,1,-1,-1,1,1,1])})),this.dragPointUniformStore||(this.dragPointUniformStore=new ee(o,{dragPointUniforms:{uniformTypes:{mousePos:"vec4<f32>",index:"f32"},defaultUniforms:{mousePos:[0,0,0,0],index:((t=s.hoveredPoint)==null?void 0:t.index)??-1}}})),this.dragPointCommand||(this.dragPointCommand=new re(o,{fs:iA,vs:Ne,topology:"triangle-strip",vertexCount:4,attributes:{vertexCoord:this.dragPointVertexCoordBuffer},bufferLayout:[{name:"vertexCoord",format:"float32x2"}],defines:{USE_UNIFORM_BUFFERS:!0,...s.is3D?{SPACE_3D:!0}:{}},bindings:{dragPointUniforms:this.dragPointUniformStore.getManagedUniformBuffer("dragPointUniforms")}})),this.drawUniformStore||(this.drawUniformStore=new ee(o,{drawVertexUniforms:{uniformTypes:{ratio:"f32",transformationMatrix:"mat4x4<f32>",pointsTextureSize:"f32",sizeScale:"f32",spaceSize:"f32",screenSize:"vec2<f32>",greyoutColor:"vec4<f32>",backgroundColor:"vec4<f32>",scalePointsOnZoom:"f32",maxPointSize:"f32",isDarkenGreyout:"f32",skipHighlighted:"f32",skipGreyed:"f32",hasImages:"f32",imageCount:"f32",imageAtlasCoordsTextureSize:"f32",transitionProgress:"f32",animateColors:"f32",animateSizes:"f32",pointsNumber:"f32",pointDepthFade:"f32",depthFadeNear:"f32",depthFadeFar:"f32",animatePositions:"f32",pointDefaultColor:"vec4<f32>",pointDefaultSize:"f32"},defaultUniforms:{ratio:n.pixelRatio,transformationMatrix:(()=>{let l=s.transform??[1,0,0,0,1,0,0,0,1];return[l[0],l[1],l[2],0,l[3],l[4],l[5],0,l[6],l[7],l[8],0,0,0,0,1]})(),pointsTextureSize:s.pointsTextureSize??0,sizeScale:n.pointSizeScale,spaceSize:s.adjustedSpaceSize,screenSize:ae(s.screenSize,[0,0]),greyoutColor:fe(s.greyoutPointColor,[0,0,0,1]),backgroundColor:fe(s.backgroundColor,[0,0,0,1]),scalePointsOnZoom:n.scalePointsOnZoom?1:0,maxPointSize:s.maxPointSize,isDarkenGreyout:s.isDarkenGreyout??!1?1:0,skipHighlighted:0,skipGreyed:0,hasImages:this.imageCount>0?1:0,imageCount:this.imageCount,imageAtlasCoordsTextureSize:this.imageAtlasCoordsTextureSize??0,transitionProgress:1,animateColors:0,animateSizes:0,pointsNumber:a.pointsNumber??0,pointDepthFade:0,depthFadeNear:0,depthFadeFar:1,animatePositions:0,pointDefaultColor:fe(a.defaultRgba,[0,0,0,1]),pointDefaultSize:n.pointDefaultSize}},drawFragmentUniforms:{uniformTypes:{greyoutOpacity:"f32",pointOpacity:"f32",isDarkenGreyout:"f32",backgroundColor:"vec4<f32>",outlineColor:"vec4<f32>",outlineWidth:"f32",renderMode:"f32",sphereShading:"f32"},defaultUniforms:{greyoutOpacity:n.pointGreyoutOpacity??-1,pointOpacity:n.pointOpacity,isDarkenGreyout:s.isDarkenGreyout??!1?1:0,backgroundColor:fe(s.backgroundColor,[0,0,0,1]),outlineColor:fe(s.outlinedPointRingColor,[1,1,1,1]),outlineWidth:.9,renderMode:0,sphereShading:0}}})),this.drawCommand||(this.drawCommand=new re(o,{fs:j0,vs:Y0,modules:[Oo],topology:"point-list",vertexCount:a.pointsNumber??0,attributes:{...this.drawPointIndices&&{pointIndices:this.drawPointIndices},...this.sourceSizeBuffer&&{sourceSize:this.sourceSizeBuffer},...this.targetSizeBuffer&&{targetSize:this.targetSizeBuffer},...this.sourceColorBuffer&&{sourceColor:this.sourceColorBuffer},...this.targetColorBuffer&&{targetColor:this.targetColorBuffer},...this.shapeBuffer&&{shape:this.shapeBuffer},...this.imageIndicesBuffer&&{imageIndex:this.imageIndicesBuffer},...this.imageSizesBuffer&&{imageSize:this.imageSizesBuffer}},bufferLayout:[{name:"pointIndices",format:"float32x2"},{name:"sourceSize",format:"float32"},{name:"targetSize",format:"float32"},{name:"sourceColor",format:"float32x4"},{name:"targetColor",format:"float32x4"},{name:"shape",format:"float32"},{name:"imageIndex",format:"float32"},{name:"imageSize",format:"float32"}],defines:{USE_UNIFORM_BUFFERS:!0,...s.is3D?{SPACE_3D:!0}:{},EXIT_DEFAULT_SIZE:Bo(su),EXIT_DEFAULT_COLOR_CHANNEL:Bo(Ta)},bindings:{drawVertexUniforms:this.drawUniformStore.getManagedUniformBuffer("drawVertexUniforms"),drawFragmentUniforms:this.drawUniformStore.getManagedUniformBuffer("drawFragmentUniforms")},parameters:s.is3D?aA:G0})),s.is3D||(this.updateReversedPointIndexBuffer(),this.drawCoreCommand||(this.drawCoreCommand=new re(o,{fs:j0,vs:Y0,modules:[Oo],topology:"point-list",vertexCount:a.pointsNumber??0,indexBuffer:this.reversedPointIndexBuffer??null,attributes:{...this.drawPointIndices&&{pointIndices:this.drawPointIndices},...this.sourceSizeBuffer&&{sourceSize:this.sourceSizeBuffer},...this.targetSizeBuffer&&{targetSize:this.targetSizeBuffer},...this.sourceColorBuffer&&{sourceColor:this.sourceColorBuffer},...this.targetColorBuffer&&{targetColor:this.targetColorBuffer},...this.shapeBuffer&&{shape:this.shapeBuffer},...this.imageIndicesBuffer&&{imageIndex:this.imageIndicesBuffer},...this.imageSizesBuffer&&{imageSize:this.imageSizesBuffer}},bufferLayout:[{name:"pointIndices",format:"float32x2"},{name:"sourceSize",format:"float32"},{name:"targetSize",format:"float32"},{name:"sourceColor",format:"float32x4"},{name:"targetColor",format:"float32x4"},{name:"shape",format:"float32"},{name:"imageIndex",format:"float32"},{name:"imageSize",format:"float32"}],defines:{USE_UNIFORM_BUFFERS:!0,EXIT_DEFAULT_SIZE:Bo(su),EXIT_DEFAULT_COLOR_CHANNEL:Bo(Ta)},bindings:{drawVertexUniforms:this.drawUniformStore.getManagedUniformBuffer("drawVertexUniforms"),drawFragmentUniforms:this.drawUniformStore.getManagedUniformBuffer("drawFragmentUniforms")},parameters:lA}))),this.findPointsInRectVertexCoordBuffer||(this.findPointsInRectVertexCoordBuffer=o.createBuffer({data:new Float32Array([-1,-1,1,-1,-1,1,1,1])})),this.findPointsInRectUniformStore||(this.findPointsInRectUniformStore=new ee(o,{findPointsInRectUniforms:{uniformTypes:{sizeScale:"f32",spaceSize:"f32",screenSize:"vec2<f32>",ratio:"f32",transformationMatrix:"mat4x4<f32>",rect0:"vec2<f32>",rect1:"vec2<f32>",scalePointsOnZoom:"f32",maxPointSize:"f32"},defaultUniforms:{sizeScale:n.pointSizeScale,spaceSize:s.adjustedSpaceSize,screenSize:ae(s.screenSize,[0,0]),ratio:n.pixelRatio,transformationMatrix:s.transformationMatrix4x4,rect0:ae((i=s.searchArea)==null?void 0:i[0],[0,0]),rect1:ae((r=s.searchArea)==null?void 0:r[1],[0,0]),scalePointsOnZoom:n.scalePointsOnZoom?1:0,maxPointSize:s.maxPointSize}}})),this.findPointsInRectCommand||(this.findPointsInRectCommand=new re(o,{fs:X2,vs:Ne,topology:"triangle-strip",vertexCount:4,attributes:{vertexCoord:this.findPointsInRectVertexCoordBuffer},bufferLayout:[{name:"vertexCoord",format:"float32x2"}],defines:{USE_UNIFORM_BUFFERS:!0},bindings:{findPointsInRectUniforms:this.findPointsInRectUniformStore.getManagedUniformBuffer("findPointsInRectUniforms")}})),this.findPointsInPolygonVertexCoordBuffer||(this.findPointsInPolygonVertexCoordBuffer=o.createBuffer({data:new Float32Array([-1,-1,1,-1,-1,1,1,1])})),this.findPointsInPolygonUniformStore||(this.findPointsInPolygonUniformStore=new ee(o,{findPointsInPolygonUniforms:{uniformTypes:{spaceSize:"f32",screenSize:"vec2<f32>",transformationMatrix:"mat4x4<f32>",polygonPathLength:"f32"},defaultUniforms:{spaceSize:s.adjustedSpaceSize,screenSize:ae(s.screenSize,[0,0]),transformationMatrix:s.transformationMatrix4x4,polygonPathLength:this.polygonPathLength}}})),this.findPointsInPolygonCommand||(this.findPointsInPolygonCommand=new re(o,{fs:j2,vs:Ne,topology:"triangle-strip",vertexCount:4,attributes:{vertexCoord:this.findPointsInPolygonVertexCoordBuffer},bufferLayout:[{name:"vertexCoord",format:"float32x2"}],defines:{USE_UNIFORM_BUFFERS:!0},bindings:{findPointsInPolygonUniforms:this.findPointsInPolygonUniformStore.getManagedUniformBuffer("findPointsInPolygonUniforms")}})),this.fillPickingBufferUniformStore||(this.fillPickingBufferUniformStore=new ee(o,{fillPickingBufferUniforms:{uniformTypes:{pointsTextureSize:"f32",sizeScale:"f32",spaceSize:"f32",screenSize:"vec2<f32>",ratio:"f32",pickingPixelRatio:"f32",transformationMatrix:"mat4x4<f32>",scalePointsOnZoom:"f32",maxPointSize:"f32",skipHighlighted:"f32",skipGreyed:"f32",pointDefaultSize:"f32"},defaultUniforms:{pointsTextureSize:s.pointsTextureSize??0,sizeScale:n.pointSizeScale,spaceSize:s.adjustedSpaceSize,screenSize:ae(s.screenSize,[0,0]),ratio:n.pixelRatio,pickingPixelRatio:tu,transformationMatrix:s.transformationMatrix4x4,scalePointsOnZoom:n.scalePointsOnZoom?1:0,maxPointSize:s.maxPointSize,skipHighlighted:0,skipGreyed:0,pointDefaultSize:n.pointDefaultSize}}})),this.fillPickingBufferCommand||(this.fillPickingBufferCommand=new re(o,{fs:q2,vs:K2,modules:[Oo],topology:"point-list",vertexCount:a.pointsNumber??0,attributes:{...this.hoveredPointIndices&&{pointIndices:this.hoveredPointIndices},...this.targetSizeBuffer&&{size:this.targetSizeBuffer},...this.imageSizesBuffer&&{imageSize:this.imageSizesBuffer}},bufferLayout:[{name:"pointIndices",format:"float32x2"},{name:"size",format:"float32"},{name:"imageSize",format:"float32"}],defines:{USE_UNIFORM_BUFFERS:!0,...s.is3D?{SPACE_3D:!0}:{}},bindings:{fillPickingBufferUniforms:this.fillPickingBufferUniformStore.getManagedUniformBuffer("fillPickingBufferUniforms")},parameters:{depthWriteEnabled:s.is3D,depthCompare:s.is3D?"less-equal":"always",blend:!1}})),this.fillSampledPointsUniformStore||(this.fillSampledPointsUniformStore=new ee(o,{fillSampledPointsUniforms:{uniformTypes:{pointsTextureSize:"f32",transformationMatrix:"mat4x4<f32>",spaceSize:"f32",screenSize:"vec2<f32>"},defaultUniforms:{pointsTextureSize:s.pointsTextureSize??0,transformationMatrix:s.transformationMatrix4x4,spaceSize:s.adjustedSpaceSize,screenSize:ae(s.screenSize,[0,0])}}})),this.fillSampledPointsFboCommand||(this.fillSampledPointsFboCommand=new re(o,{fs:Z2,vs:Q2,topology:"point-list",vertexCount:a.pointsNumber??0,attributes:{...this.sampledPointIndices&&{pointIndices:this.sampledPointIndices}},bufferLayout:[{name:"pointIndices",format:"float32x2"}],defines:{USE_UNIFORM_BUFFERS:!0,...s.is3D?{SPACE_3D:!0}:{}},bindings:{fillSampledPointsUniforms:this.fillSampledPointsUniformStore.getManagedUniformBuffer("fillSampledPointsUniforms")},parameters:{depthWriteEnabled:!1,depthCompare:"always"}})),this.drawHighlightedVertexCoordBuffer||(this.drawHighlightedVertexCoordBuffer=o.createBuffer({data:new Float32Array([-1,-1,1,-1,-1,1,1,1])})),this.drawHighlightedUniformStore||(this.drawHighlightedUniformStore=new ee(o,{drawHighlightedUniforms:{uniformTypes:{size:"f32",transformationMatrix:"mat4x4<f32>",pointsTextureSize:"f32",sizeScale:"f32",spaceSize:"f32",screenSize:"vec2<f32>",scalePointsOnZoom:"f32",pointIndex:"f32",maxPointSize:"f32",color:"vec4<f32>",universalPointOpacity:"f32",greyoutOpacity:"f32",isDarkenGreyout:"f32",backgroundColor:"vec4<f32>",greyoutColor:"vec4<f32>",width:"f32"},defaultUniforms:{size:1,transformationMatrix:s.transformationMatrix4x4,pointsTextureSize:s.pointsTextureSize??0,sizeScale:n.pointSizeScale,spaceSize:s.adjustedSpaceSize,screenSize:ae(s.screenSize,[0,0]),scalePointsOnZoom:n.scalePointsOnZoom?1:0,pointIndex:-1,maxPointSize:s.maxPointSize,color:[0,0,0,1],universalPointOpacity:n.pointOpacity,greyoutOpacity:n.pointGreyoutOpacity??-1,isDarkenGreyout:s.isDarkenGreyout??!1?1:0,backgroundColor:fe(s.backgroundColor,[0,0,0,1]),greyoutColor:fe(s.greyoutPointColor,[0,0,0,1]),width:.85}}})),this.drawHighlightedCommand||(this.drawHighlightedCommand=new re(o,{fs:Y2,vs:G2,modules:[Oo],topology:"triangle-strip",vertexCount:4,attributes:{vertexCoord:this.drawHighlightedVertexCoordBuffer},bufferLayout:[{name:"vertexCoord",format:"float32x2"}],defines:{USE_UNIFORM_BUFFERS:!0,...s.is3D?{SPACE_3D:!0}:{}},bindings:{drawHighlightedUniforms:this.drawHighlightedUniformStore.getManagedUniformBuffer("drawHighlightedUniforms")},parameters:{blend:!0,blendColorOperation:"add",blendColorSrcFactor:"src-alpha",blendColorDstFactor:"one-minus-src-alpha",blendAlphaOperation:"add",blendAlphaSrcFactor:"one",blendAlphaDstFactor:"one-minus-src-alpha",depthWriteEnabled:!1,depthCompare:s.is3D?"less-equal":"always"}})),this.trackPointsVertexCoordBuffer||(this.trackPointsVertexCoordBuffer=o.createBuffer({data:new Float32Array([-1,-1,1,-1,-1,1,1,1])})),this.trackPointsUniformStore||(this.trackPointsUniformStore=new ee(o,{trackPointsUniforms:{uniformTypes:{pointsTextureSize:"f32"},defaultUniforms:{pointsTextureSize:s.pointsTextureSize??0}}})),this.trackPointsCommand||(this.trackPointsCommand=new re(o,{fs:tA,vs:Ne,topology:"triangle-strip",vertexCount:4,attributes:{vertexCoord:this.trackPointsVertexCoordBuffer},bufferLayout:[{name:"vertexCoord",format:"float32x2"}],defines:{USE_UNIFORM_BUFFERS:!0},bindings:{trackPointsUniforms:this.trackPointsUniformStore.getManagedUniformBuffer("trackPointsUniforms")}}))}updateColor(){let{device:t,store:{pointsTextureSize:i},data:r}=this;if(!i)return;let o=r.pointColors,{source:n,target:s,previous:a}=_a(this.device,o,this.sourceColorBuffer,this.targetColorBuffer,this.previousColorData,4);this.sourceColorBuffer=n,this.targetColorBuffer=s,this.previousColorData=a;let l={...this.sourceColorBuffer&&{sourceColor:this.sourceColorBuffer},...this.targetColorBuffer&&{targetColor:this.targetColorBuffer}};if(this.drawCommand&&this.drawCommand.setAttributes(l),this.drawCoreCommand&&this.drawCoreCommand.setAttributes(l),this.config.linkColorInterpolateFromEndpoints){let c=new Float32Array(i*i*4);c.set(o.subarray(0,Math.min(o.length,c.length))),(!this.pointColorsTexture||this.pointColorsTexture.width!==i||this.pointColorsTexture.height!==i)&&(this.pointColorsTexture&&!this.pointColorsTexture.destroyed&&this.pointColorsTexture.destroy(),this.pointColorsTexture=t.createTexture({width:i,height:i,format:"rgba32float"})),this.pointColorsTexture.copyImageData({data:c,bytesPerRow:Q("rgba32float",i),mipLevel:0,x:0,y:0})}else this.pointColorsTexture&&(this.pointColorsTexture.destroyed||this.pointColorsTexture.destroy(),this.pointColorsTexture=void 0)}updateExit(){let{device:t,store:{pointsTextureSize:i},data:r}=this;if(!i)return;let o=r.pointsNumber??0,n=this.previousExitData,s=this.hasAnyAbsentPoint,a=new Float32Array(o),l=!1;for(let u=0;u<o;u++){let f=r.pointPositions&&zo(r.pointPositions,u,r.pointDimensions)?1:0;a[u]=f,f&&(l=!0)}if(this.previousExitData=a,this.hasAnyAbsentPoint=l,!l&&!s){if(this.exitTexture&&!this.exitTexture.destroyed&&this.exitTexture.width===1)return;this.exitTexture&&!this.exitTexture.destroyed&&this.exitTexture.destroy(),this.exitTexture=t.createTexture({width:1,height:1,format:"rgba32float"}),this.exitTexture.copyImageData({data:new Float32Array(4),bytesPerRow:Q("rgba32float",1),mipLevel:0,x:0,y:0});return}let c=new Float32Array(i*i*4);for(let u=0;u<o;u++){let f=a[u],h=u<(n?.length??0)?n[u]:f;c[u*4]=h,c[u*4+1]=f}let d=!!this.exitTexture&&this.exitTexture.width===i&&this.exitTexture.height===i;(!this.exitTexture||!d)&&(this.exitTexture&&!this.exitTexture.destroyed&&this.exitTexture.destroy(),this.exitTexture=t.createTexture({width:i,height:i,format:"rgba32float"})),this.exitTexture.copyImageData({data:c,bytesPerRow:Q("rgba32float",i),mipLevel:0,x:0,y:0})}updatePointStatus(){let{device:t,config:i,data:r,store:{pointsTextureSize:o}}=this;if(!o||r.pointsNumber===void 0)return;this.isPickingBufferStale=!0;let{highlightedPointIndices:n,outlinedPointIndices:s}=i,a=n!==void 0,l=s!==void 0,c=new Float32Array(o*o*4);if(a){for(let u=0;u<c.length;u+=4)c[u]=1;for(let u of n)u>=0&&u<r.pointsNumber&&(c[u*4]=0)}if(l)for(let u of s)u>=0&&u<r.pointsNumber&&(c[u*4+1]=1);let d={data:c,bytesPerRow:Q("rgba32float",o),mipLevel:0,x:0,y:0};!this.pointStatusTexture||this.pointStatusTexture.width!==o||this.pointStatusTexture.height!==o?(this.pointStatusTexture&&!this.pointStatusTexture.destroyed&&this.pointStatusTexture.destroy(),this.pointStatusTexture=t.createTexture({width:o,height:o,format:"rgba32float"}),this.pointStatusTexture.copyImageData(d)):this.pointStatusTexture.copyImageData(d)}updatePinnedStatus(){let{device:t,store:{pointsTextureSize:i},data:r}=this;if(!i)return;let o=new Float32Array(i*i*4).fill(0);if(r.inputPinnedPoints&&r.pointsNumber!==void 0)for(let n of r.inputPinnedPoints)n>=0&&n<r.pointsNumber&&(o[n*4]=1);!this.pinnedStatusTexture||this.pinnedStatusTexture.width!==i||this.pinnedStatusTexture.height!==i?(this.pinnedStatusTexture&&!this.pinnedStatusTexture.destroyed&&this.pinnedStatusTexture.destroy(),this.pinnedStatusTexture=t.createTexture({width:i,height:i,format:"rgba32float"}),this.pinnedStatusTexture.copyImageData({data:o,bytesPerRow:Q("rgba32float",i),mipLevel:0,x:0,y:0})):this.pinnedStatusTexture.copyImageData({data:o,bytesPerRow:Q("rgba32float",i),mipLevel:0,x:0,y:0})}updateSize(){var t;let{device:i,store:{pointsTextureSize:r},data:o}=this;if(!r||o.pointsNumber===void 0)return;this.isPickingBufferStale=!0;let n=o.pointSizes,{source:s,target:a,previous:l}=_a(this.device,n,this.sourceSizeBuffer,this.targetSizeBuffer,this.previousSizeData,1);this.sourceSizeBuffer=s,this.targetSizeBuffer=a,this.previousSizeData=l;let c={...this.sourceSizeBuffer&&{sourceSize:this.sourceSizeBuffer},...this.targetSizeBuffer&&{targetSize:this.targetSizeBuffer}};this.drawCommand&&this.drawCommand.setAttributes(c),this.drawCoreCommand&&this.drawCoreCommand.setAttributes(c);let d=new Float32Array(r*r*4);for(let u=0;u<o.pointsNumber;u++){let f=o.getResolvedPointSize(u),h=((t=o.pointImageSizes)==null?void 0:t[u])??f;d[u*4]=Math.max(f,h)}if(!this.sizeTexture||this.sizeTexture.width!==r||this.sizeTexture.height!==r){this.sizeTexture&&!this.sizeTexture.destroyed&&this.sizeTexture.destroy();let u=i.createTexture({width:r,height:r,format:"rgba32float"});this.sizeTexture=u,u.copyImageData({data:d,bytesPerRow:Q("rgba32float",r),mipLevel:0,x:0,y:0})}else this.sizeTexture.copyImageData({data:d,bytesPerRow:Q("rgba32float",r),mipLevel:0,x:0,y:0})}updateShape(){let{device:t,data:i}=this;if(i.pointsNumber===void 0||i.pointShapes===void 0)return;let r=i.pointShapes,o=r.byteLength;!this.shapeBuffer||this.shapeBuffer.byteLength!==o?(this.shapeBuffer&&!this.shapeBuffer.destroyed&&this.shapeBuffer.destroy(),this.shapeBuffer=t.createBuffer({data:r,usage:U.VERTEX|U.COPY_DST})):this.shapeBuffer.write(r),this.drawCommand&&this.drawCommand.setAttributes({shape:this.shapeBuffer}),this.drawCoreCommand&&this.drawCoreCommand.setAttributes({shape:this.shapeBuffer})}updateImageIndices(){let{device:t,data:i}=this;if(i.pointsNumber===void 0||i.pointImageIndices===void 0)return;let r=i.pointImageIndices,o=r.byteLength;!this.imageIndicesBuffer||this.imageIndicesBuffer.byteLength!==o?(this.imageIndicesBuffer&&!this.imageIndicesBuffer.destroyed&&this.imageIndicesBuffer.destroy(),this.imageIndicesBuffer=t.createBuffer({data:r,usage:U.VERTEX|U.COPY_DST})):this.imageIndicesBuffer.write(r),this.drawCommand&&this.drawCommand.setAttributes({imageIndex:this.imageIndicesBuffer}),this.drawCoreCommand&&this.drawCoreCommand.setAttributes({imageIndex:this.imageIndicesBuffer})}updateImageSizes(){let{device:t,data:i}=this;if(i.pointsNumber===void 0||i.pointImageSizes===void 0)return;let r=i.pointImageSizes,o=r.byteLength;!this.imageSizesBuffer||this.imageSizesBuffer.byteLength!==o?(this.imageSizesBuffer&&!this.imageSizesBuffer.destroyed&&this.imageSizesBuffer.destroy(),this.imageSizesBuffer=t.createBuffer({data:r,usage:U.VERTEX|U.COPY_DST})):this.imageSizesBuffer.write(r),this.drawCommand&&this.drawCommand.setAttributes({imageSize:this.imageSizesBuffer}),this.drawCoreCommand&&this.drawCoreCommand.setAttributes({imageSize:this.imageSizesBuffer}),this.fillPickingBufferCommand&&this.fillPickingBufferCommand.setAttributes({imageSize:this.imageSizesBuffer}),this.isPickingBufferStale=!0}createAtlas(){var t;let{device:i,data:r,store:o}=this;if(!((t=r.inputImageData)!=null&&t.length)){this.imageCount=0,this.imageAtlasCoordsTextureSize=0,this.imageAtlasCoordsTexture||(this.imageAtlasCoordsTexture=i.createTexture({data:new Float32Array(4).fill(0),width:1,height:1,format:"rgba32float"})),this.imageAtlasTexture||(this.imageAtlasTexture=i.createTexture({data:new Uint8Array(4).fill(0),width:1,height:1,format:"rgba8unorm"}));return}let n=rA(r.inputImageData,o.webglMaxTextureSize);if(!n){console.warn("Failed to create atlas from image data");return}this.imageCount=r.inputImageData.length;let{atlasData:s,atlasSize:a,atlasCoords:l,atlasCoordsSize:c}=n;this.imageAtlasCoordsTextureSize=c,this.imageAtlasTexture&&!this.imageAtlasTexture.destroyed&&this.imageAtlasTexture.destroy(),this.imageAtlasTexture=i.createTexture({width:a,height:a,format:"rgba8unorm"}),this.imageAtlasTexture.copyImageData({data:s,bytesPerRow:Q("rgba8unorm",a),rowsPerImage:a,mipLevel:0,x:0,y:0}),this.imageAtlasCoordsTexture&&!this.imageAtlasCoordsTexture.destroyed&&this.imageAtlasCoordsTexture.destroy(),this.imageAtlasCoordsTexture=i.createTexture({width:c,height:c,format:"rgba32float"}),this.imageAtlasCoordsTexture.copyImageData({data:l,bytesPerRow:Q("rgba32float",c),rowsPerImage:c,mipLevel:0,x:0,y:0})}updateSampledPointsGrid(){let{store:{screenSize:t},config:{pointSamplingDistance:i},device:r}=this,o=i??Math.min(...t)/2;o===0&&(o=Ft.pointSamplingDistance);let n=Math.ceil(t[0]/o),s=Math.ceil(t[1]/o);n===0||s===0||(!this.sampledPointsFbo||this.sampledPointsFbo.width!==n||this.sampledPointsFbo.height!==s)&&(this.sampledPointsFbo&&!this.sampledPointsFbo.destroyed&&this.sampledPointsFbo.destroy(),this.sampledPointsFbo=r.createFramebuffer({width:n,height:s,colorAttachments:["rgba32float"]}))}trackPoints(){var t;if(!((t=this.trackedIndices)!=null&&t.length)||!this.trackPointsCommand||!this.trackPointsUniformStore||!this.trackedPositionsFbo||this.trackedPositionsFbo.destroyed||!this.currentPositionTexture||this.currentPositionTexture.destroyed||!this.trackedIndicesTexture||this.trackedIndicesTexture.destroyed)return;this.trackPointsUniformStore.setUniforms({trackPointsUniforms:{pointsTextureSize:this.store.pointsTextureSize??0}}),this.trackPointsCommand.setBindings({positionsTexture:this.currentPositionTexture,trackedIndices:this.trackedIndicesTexture});let i=this.device.beginRenderPass({framebuffer:this.trackedPositionsFbo});this.trackPointsCommand.draw(i),i.end()}setTransitionProgress(t,i=!1,r=!1,o=!1){this.transitionProgress=t,this.shouldAnimatePointColors=i,this.shouldAnimatePointSizes=r,this.shouldAnimatePointPositions=o}draw(t){var i,r,o;let{data:n,config:s,store:a}=this;if(this.targetColorBuffer||this.updateColor(),this.targetSizeBuffer||this.updateSize(),this.exitTexture||this.updateExit(),this.shapeBuffer||this.updateShape(),this.imageIndicesBuffer||this.updateImageIndices(),this.imageSizesBuffer||this.updateImageSizes(),!this.drawCommand||!this.drawUniformStore||!this.currentPositionTexture||this.currentPositionTexture.destroyed||!this.pointStatusTexture||this.pointStatusTexture.destroyed||!this.exitTexture||this.exitTexture.destroyed||(!this.imageAtlasTexture||!this.imageAtlasCoordsTexture)&&(this.createAtlas(),!this.imageAtlasTexture||!this.imageAtlasCoordsTexture)||this.imageAtlasTexture.destroyed||this.imageAtlasCoordsTexture.destroyed||!n.pointsNumber||n.pointsNumber===0||!a.screenSize||a.screenSize[0]===0||a.screenSize[1]===0)return;this.drawCommand.setVertexCount(n.pointsNumber);let l={ratio:s.pixelRatio,transformationMatrix:a.transformationMatrix4x4,pointsTextureSize:a.pointsTextureSize??0,sizeScale:s.pointSizeScale,spaceSize:a.adjustedSpaceSize,screenSize:ae(a.screenSize,[0,0]),greyoutColor:fe(a.greyoutPointColor,[-1,-1,-1,-1]),backgroundColor:fe(a.backgroundColor,[0,0,0,1]),scalePointsOnZoom:s.scalePointsOnZoom?1:0,maxPointSize:a.maxPointSize,isDarkenGreyout:a.isDarkenGreyout??!1?1:0,hasImages:this.imageCount>0?1:0,imageCount:this.imageCount,imageAtlasCoordsTextureSize:this.imageAtlasCoordsTextureSize??0,transitionProgress:this.transitionProgress,animateColors:this.shouldAnimatePointColors?1:0,animateSizes:this.shouldAnimatePointSizes?1:0,pointsNumber:n.pointsNumber,pointDepthFade:a.is3D?s.pointDepthFade:0,depthFadeNear:a.depthFadeRange[0],depthFadeFar:a.depthFadeRange[1],animatePositions:this.shouldAnimatePointPositions?1:0,pointDefaultColor:fe(n.defaultRgba,[0,0,0,1]),pointDefaultSize:s.pointDefaultSize},c={greyoutOpacity:s.pointGreyoutOpacity??-1,pointOpacity:s.pointOpacity,isDarkenGreyout:a.isDarkenGreyout??!1?1:0,backgroundColor:fe(a.backgroundColor,[0,0,0,1]),outlineColor:fe(a.outlinedPointRingColor,[1,1,1,1]),outlineWidth:.9,renderMode:0,sphereShading:a.is3D&&s.pointSphereShading?1:0},d={positionsTexture:this.currentPositionTexture,pointStatus:this.pointStatusTexture,exitTexture:this.exitTexture,imageAtlasTexture:this.imageAtlasTexture,imageAtlasCoords:this.imageAtlasCoordsTexture},u=s.highlightedPointIndices!==void 0,f=s.pointOcclusionCulling&&s.pointOpacity>=1&&!u&&!a.is3D&&!!this.drawCoreCommand&&((i=this.reversedPointIndexBuffer)==null?void 0:i.byteLength)===n.pointsNumber*4;if(f!==this.isOcclusionCullingActive&&(this.drawCommand.setParameters(f?cA:G0),this.isOcclusionCullingActive=f),f&&this.drawCoreCommand?(this.drawUniformStore.setUniforms({drawVertexUniforms:{...l,skipHighlighted:0,skipGreyed:0},drawFragmentUniforms:{...c,renderMode:1}}),this.drawCoreCommand.setVertexCount(n.pointsNumber),this.drawCoreCommand.setBindings(d),this.drawCoreCommand.draw(t),this.drawUniformStore.setUniforms({drawFragmentUniforms:{...c,renderMode:2}}),this.drawCommand.setBindings(d),this.drawCommand.draw(t)):u?(this.drawUniformStore.setUniforms({drawVertexUniforms:{...l,skipHighlighted:1,skipGreyed:0},drawFragmentUniforms:c}),this.drawCommand.setBindings(d),this.drawCommand.draw(t),this.drawUniformStore.setUniforms({drawVertexUniforms:{...l,skipHighlighted:0,skipGreyed:1},drawFragmentUniforms:c}),this.drawCommand.setBindings(d),this.drawCommand.draw(t)):(this.drawUniformStore.setUniforms({drawVertexUniforms:{...l,skipHighlighted:0,skipGreyed:0},drawFragmentUniforms:c}),this.drawCommand.setBindings(d),this.drawCommand.draw(t)),s.renderHoveredPointRing&&a.hoveredPoint&&this.drawHighlightedCommand&&this.drawHighlightedUniformStore){if(!this.currentPositionTexture||this.currentPositionTexture.destroyed||!this.pointStatusTexture||this.pointStatusTexture.destroyed||!this.exitTexture||this.exitTexture.destroyed)return;let h=n.getResolvedPointSize(a.hoveredPoint.index),m=((r=n.pointImageSizes)==null?void 0:r[a.hoveredPoint.index])??h;this.drawHighlightedUniformStore.setUniforms({drawHighlightedUniforms:{size:Math.max(h,m),transformationMatrix:a.transformationMatrix4x4,pointsTextureSize:a.pointsTextureSize??0,sizeScale:s.pointSizeScale,spaceSize:a.adjustedSpaceSize,screenSize:ae(a.screenSize,[0,0]),scalePointsOnZoom:s.scalePointsOnZoom?1:0,pointIndex:a.hoveredPoint.index,maxPointSize:a.maxPointSize,color:fe(a.hoveredPointRingColor,[0,0,0,1]),universalPointOpacity:s.pointOpacity,greyoutOpacity:s.pointGreyoutOpacity??-1,isDarkenGreyout:a.isDarkenGreyout??!1?1:0,backgroundColor:fe(a.backgroundColor,[0,0,0,1]),greyoutColor:fe(a.greyoutPointColor,[0,0,0,1]),width:.85}}),this.drawHighlightedCommand.setBindings({positionsTexture:this.currentPositionTexture,pointStatus:this.pointStatusTexture,exitTexture:this.exitTexture}),this.drawHighlightedCommand.draw(t)}if(a.focusedPoint&&this.drawHighlightedCommand&&this.drawHighlightedUniformStore){if(!this.currentPositionTexture||this.currentPositionTexture.destroyed||!this.pointStatusTexture||this.pointStatusTexture.destroyed||!this.exitTexture||this.exitTexture.destroyed)return;let h=n.getResolvedPointSize(a.focusedPoint.index),m=((o=n.pointImageSizes)==null?void 0:o[a.focusedPoint.index])??h;this.drawHighlightedUniformStore.setUniforms({drawHighlightedUniforms:{size:Math.max(h,m),transformationMatrix:a.transformationMatrix4x4,pointsTextureSize:a.pointsTextureSize??0,sizeScale:s.pointSizeScale,spaceSize:a.adjustedSpaceSize,screenSize:ae(a.screenSize,[0,0]),scalePointsOnZoom:s.scalePointsOnZoom?1:0,pointIndex:a.focusedPoint.index,maxPointSize:a.maxPointSize,color:fe(a.focusedPointRingColor,[0,0,0,1]),universalPointOpacity:s.pointOpacity,greyoutOpacity:s.pointGreyoutOpacity??-1,isDarkenGreyout:a.isDarkenGreyout??!1?1:0,backgroundColor:fe(a.backgroundColor,[0,0,0,1]),greyoutColor:fe(a.greyoutPointColor,[0,0,0,1]),width:.85}}),this.drawHighlightedCommand.setBindings({positionsTexture:this.currentPositionTexture,pointStatus:this.pointStatusTexture,exitTexture:this.exitTexture}),this.drawHighlightedCommand.draw(t)}}updatePosition(){if(!this.updatePositionCommand||!this.updatePositionUniformStore||!this.currentPositionFbo||this.currentPositionFbo.destroyed||!this.previousPositionTexture||this.previousPositionTexture.destroyed||!this.velocityTexture||this.velocityTexture.destroyed||!this.pinnedStatusTexture||this.pinnedStatusTexture.destroyed||(this.exitTexture||this.updateExit(),!this.exitTexture||this.exitTexture.destroyed))return;this.updatePositionUniformStore.setUniforms({updatePositionUniforms:{friction:this.config.simulationFriction,spaceSize:this.store.adjustedSpaceSize}}),this.updatePositionCommand.setBindings({positionsTexture:this.previousPositionTexture,velocity:this.velocityTexture,pinnedStatusTexture:this.pinnedStatusTexture,exitTexture:this.exitTexture});let t=this.device.beginRenderPass({framebuffer:this.currentPositionFbo});this.updatePositionCommand.draw(t),t.end(),this.isPositionsUpToDate=!1}drag(){var t;if(!this.dragPointCommand||!this.dragPointUniformStore||!this.currentPositionFbo||this.currentPositionFbo.destroyed||!this.previousPositionTexture||this.previousPositionTexture.destroyed)return;let i=this.store.is3D?[...this.store.mousePosition3D,0]:[this.store.mousePosition[0]??0,this.store.mousePosition[1]??0,0,0];this.dragPointUniformStore.setUniforms({dragPointUniforms:{mousePos:i,index:((t=this.store.hoveredPoint)==null?void 0:t.index)??-1}}),this.dragPointCommand.setBindings({positionsTexture:this.previousPositionTexture});let r=this.device.beginRenderPass({framebuffer:this.currentPositionFbo});this.dragPointCommand.draw(r),r.end(),this.isPositionsUpToDate=!1}findPointsInRect(){var t,i;if(!this.findPointsInRectCommand||!this.findPointsInRectUniformStore||!this.searchFbo||this.searchFbo.destroyed||!this.currentPositionTexture||this.currentPositionTexture.destroyed||!this.sizeTexture||this.sizeTexture.destroyed||(this.exitTexture||this.updateExit(),!this.exitTexture||this.exitTexture.destroyed))return!1;this.findPointsInRectUniformStore.setUniforms({findPointsInRectUniforms:{spaceSize:this.store.adjustedSpaceSize,screenSize:ae(this.store.screenSize,[0,0]),sizeScale:this.config.pointSizeScale,transformationMatrix:this.store.transformationMatrix4x4,ratio:this.config.pixelRatio,rect0:ae((t=this.store.searchArea)==null?void 0:t[0],[0,0]),rect1:ae((i=this.store.searchArea)==null?void 0:i[1],[0,0]),scalePointsOnZoom:this.config.scalePointsOnZoom?1:0,maxPointSize:this.store.maxPointSize}}),this.findPointsInRectCommand.setBindings({positionsTexture:this.currentPositionTexture,pointSize:this.sizeTexture,exitTexture:this.exitTexture});let r=this.device.beginRenderPass({framebuffer:this.searchFbo});return this.findPointsInRectCommand.draw(r),r.end(),!0}findPointsInPolygon(){if(!this.findPointsInPolygonCommand||!this.findPointsInPolygonUniformStore||!this.searchFbo||this.searchFbo.destroyed||!this.currentPositionTexture||this.currentPositionTexture.destroyed||!this.polygonPathTexture||this.polygonPathTexture.destroyed||(this.exitTexture||this.updateExit(),!this.exitTexture||this.exitTexture.destroyed))return!1;this.findPointsInPolygonUniformStore.setUniforms({findPointsInPolygonUniforms:{spaceSize:this.store.adjustedSpaceSize,screenSize:ae(this.store.screenSize,[0,0]),transformationMatrix:this.store.transformationMatrix4x4,polygonPathLength:this.polygonPathLength}}),this.findPointsInPolygonCommand.setBindings({positionsTexture:this.currentPositionTexture,polygonPathTexture:this.polygonPathTexture,exitTexture:this.exitTexture});let t=this.device.beginRenderPass({framebuffer:this.searchFbo});return this.findPointsInPolygonCommand.draw(t),t.end(),!0}updatePolygonPath(t){let{device:i}=this;if(this.polygonPathLength=t.length,t.length===0){this.polygonPathTexture&&!this.polygonPathTexture.destroyed&&this.polygonPathTexture.destroy(),this.polygonPathTexture=void 0;return}let r=Math.ceil(Math.sqrt(t.length)),o=new Float32Array(r*r*4);for(let[n,s]of t.entries()){let[a,l]=s;o[n*4]=a,o[n*4+1]=l,o[n*4+2]=0,o[n*4+3]=0}!this.polygonPathTexture||this.polygonPathTexture.width!==r||this.polygonPathTexture.height!==r?(this.polygonPathTexture&&!this.polygonPathTexture.destroyed&&this.polygonPathTexture.destroy(),this.polygonPathTexture=i.createTexture({width:r,height:r,format:"rgba32float"}),this.polygonPathTexture.copyImageData({data:o,bytesPerRow:Q("rgba32float",r),mipLevel:0,x:0,y:0})):this.polygonPathTexture.copyImageData({data:o,bytesPerRow:Q("rgba32float",r),mipLevel:0,x:0,y:0})}updatePickingBuffer(){if(!this.isPickingBufferStale||!this.ensurePickingBuffer()||!this.pickingFbo||this.pickingFbo.destroyed||!this.fillPickingBufferCommand||!this.fillPickingBufferUniformStore||!this.currentPositionTexture||this.currentPositionTexture.destroyed||(this.pointStatusTexture||this.updatePointStatus(),!this.pointStatusTexture||this.pointStatusTexture.destroyed)||!this.exitTexture||this.exitTexture.destroyed)return;this.fillPickingBufferCommand.setVertexCount(this.data.pointsNumber??0),this.fillPickingBufferCommand.setAttributes({...this.hoveredPointIndices&&{pointIndices:this.hoveredPointIndices},...this.targetSizeBuffer&&{size:this.targetSizeBuffer},...this.imageSizesBuffer&&{imageSize:this.imageSizesBuffer}});let t=ae(this.store.screenSize,[0,0]),i={ratio:this.config.pixelRatio,sizeScale:this.config.pointSizeScale,pointsTextureSize:this.store.pointsTextureSize??0,transformationMatrix:this.store.transformationMatrix4x4,spaceSize:this.store.adjustedSpaceSize,screenSize:t,scalePointsOnZoom:this.config.scalePointsOnZoom?1:0,pickingPixelRatio:t[0]>0?this.pickingFbo.width/t[0]:tu,maxPointSize:this.store.maxPointSize,pointDefaultSize:this.config.pointDefaultSize},r={positionsTexture:this.currentPositionTexture,pointStatus:this.pointStatusTexture,exitTexture:this.exitTexture},o=this.device.beginRenderPass({framebuffer:this.pickingFbo,clearColor:[-1,0,0,0],clearDepth:1});this.config.highlightedPointIndices!==void 0?(this.fillPickingBufferUniformStore.setUniforms({fillPickingBufferUniforms:{...i,skipHighlighted:1,skipGreyed:0}}),this.fillPickingBufferCommand.setBindings(r),this.fillPickingBufferCommand.draw(o),this.fillPickingBufferUniformStore.setUniforms({fillPickingBufferUniforms:{...i,skipHighlighted:0,skipGreyed:1}}),this.fillPickingBufferCommand.setBindings(r),this.fillPickingBufferCommand.draw(o)):(this.fillPickingBufferUniformStore.setUniforms({fillPickingBufferUniforms:{...i,skipHighlighted:0,skipGreyed:0}}),this.fillPickingBufferCommand.setBindings(r),this.fillPickingBufferCommand.draw(o)),o.end(),this.isPickingBufferStale=!1}pickPointSync(){this.updatePickingBuffer();let t=this.getPickingWindow();if(!t||!this.pickingFbo||this.pickingFbo.destroyed)return;let i=Ke(this.device,this.pickingFbo,t.x,t.y,Ve,Ve);return this.resolvePickedPoint(i,t.centerX-t.x,t.centerY-t.y)}requestPickPoint(){var t;if((t=this.pickingReadback)!=null&&t.inFlight)return!1;if(this.updatePickingBuffer(),!this.pickingFbo||this.pickingFbo.destroyed)return!0;let i=this.device.gl,r=this.pickingFbo.handle;if(!i||!r)return!0;this.pickingReadback||(this.pickingReadback=new Ea(i,Ve*Ve*4));let o=this.getPickingWindow();return o?this.pickingReadback.issue(r,o.x,o.y,Ve,Ve)?(this.issuedPickingWindow=o,!0):!1:!0}discardPendingPick(){var t;(t=this.pickingReadback)==null||t.cancel(),this.issuedPickingWindow=void 0}takePickResult(){if(!this.pickingReadback||!this.issuedPickingWindow)return;let t=this.pickingReadback.poll();if(!t)return;let i=this.issuedPickingWindow;return this.issuedPickingWindow=void 0,this.resolvePickedPoint(t,i.centerX-i.x,i.centerY-i.y)??null}trackPointsByIndices(t){let{store:{pointsTextureSize:i},device:r}=this;if(this.trackedIndices=t,this.trackedPositions2D=void 0,this.trackedPositions3D=void 0,this.isPositionsUpToDate=!1,!(t!=null&&t.length)||!i)return;let o=Math.ceil(Math.sqrt(t.length)),n=new Float32Array(o*o*4).fill(-1);for(let[s,a]of t.entries())a!==void 0&&(n[s*4]=a%i,n[s*4+1]=Math.floor(a/i),n[s*4+2]=0,n[s*4+3]=0);!this.trackedIndicesTexture||this.trackedIndicesTexture.width!==o||this.trackedIndicesTexture.height!==o?(this.trackedIndicesTexture&&!this.trackedIndicesTexture.destroyed&&this.trackedIndicesTexture.destroy(),this.trackedIndicesTexture=r.createTexture({width:o,height:o,format:"rgba32float"}),this.trackedIndicesTexture.copyImageData({data:n,bytesPerRow:Q("rgba32float",o),mipLevel:0,x:0,y:0})):this.trackedIndicesTexture.copyImageData({data:n,bytesPerRow:Q("rgba32float",o),mipLevel:0,x:0,y:0}),(!this.trackedPositionsFbo||this.trackedPositionsFbo.width!==o||this.trackedPositionsFbo.height!==o)&&(this.trackedPositionsFbo&&!this.trackedPositionsFbo.destroyed&&this.trackedPositionsFbo.destroy(),this.trackedPositionsFbo=r.createFramebuffer({width:o,height:o,colorAttachments:["rgba32float"]})),this.trackPoints()}getTrackedPositionsMap(t=2){if(!this.trackedIndices)return new Map;let{config:{enableSimulation:i},store:{isSimulationRunning:r}}=this,o=t===3?this.trackedPositions3D:this.trackedPositions2D;if((!i||!r)&&this.isPositionsUpToDate&&o)return o;if(!this.trackedPositionsFbo||this.trackedPositionsFbo.destroyed)return new Map;let n=Ke(this.device,this.trackedPositionsFbo),s=new Map,a=new Map;for(let l=0;l<n.length/4;l+=1){let c=n[l*4],d=n[l*4+1],u=n[l*4+2],f=this.trackedIndices[l];if(c!==void 0&&d!==void 0&&f!==void 0){if(this.data.isPointAbsent(f))continue;s.set(f,[c,d]),a.set(f,[c,d,u??0])}}return(!i||!r)&&(this.trackedPositions2D=s,this.trackedPositions3D=a,this.isPositionsUpToDate=!0),t===3?a:s}getSampledPointPositionsMap(t=2){if(t===3){let o=new Map,n=this.fillAndReadSampledPointsFbo();if(!n)return o;for(let s=0;s<n.length/4;s++){let a=n[s*4],l=this.store.is3D?n[s*4+1]:0,c=n[s*4+2],d=n[s*4+3];a!==void 0&&a>=0&&c!==void 0&&d!==void 0&&o.set(a,[c,d,l??0])}return o}let i=new Map,r=this.fillAndReadSampledPointsFbo();if(!r)return i;for(let o=0;o<r.length/4;o++){let n=r[o*4],s=r[o*4+2],a=r[o*4+3];n!==void 0&&n>=0&&s!==void 0&&a!==void 0&&i.set(n,[s,a])}return i}getSampledPoints(t=2){let i=[],r=[],o=this.fillAndReadSampledPointsFbo();if(!o)return{indices:i,positions:r};for(let n=0;n<o.length/4;n++){let s=o[n*4],a=this.store.is3D?o[n*4+1]:0,l=o[n*4+2],c=o[n*4+3];s!==void 0&&s>=0&&l!==void 0&&c!==void 0&&(i.push(s),r.push(l,c),t===3&&r.push(a??0))}return{indices:i,positions:r}}getTrackedPositionsArray(t=2){let i=[];if(!this.trackedIndices||!this.trackedPositionsFbo||this.trackedPositionsFbo.destroyed)return i;i.length=this.trackedIndices.length*t;let r=Ke(this.device,this.trackedPositionsFbo);for(let o=0;o<r.length/4;o+=1){let n=r[o*4],s=r[o*4+1],a=r[o*4+2],l=this.trackedIndices[o];if(n!==void 0&&s!==void 0&&l!==void 0){if(this.data.isPointAbsent(l)){i[o*t]=NaN,i[o*t+1]=NaN,t===3&&(i[o*t+2]=NaN);continue}i[o*t]=n,i[o*t+1]=s,t===3&&(i[o*t+2]=a??0)}}return i}destroy(){var t,i,r,o,n,s,a,l,c,d,u,f,h,m,x,S,y,A,_,v,P,T;(t=this.drawCommand)==null||t.destroy(),this.drawCommand=void 0,(i=this.drawCoreCommand)==null||i.destroy(),this.drawCoreCommand=void 0,this.isOcclusionCullingActive=!1,(r=this.drawHighlightedCommand)==null||r.destroy(),this.drawHighlightedCommand=void 0,(o=this.interpolatePositionCommand)==null||o.destroy(),this.interpolatePositionCommand=void 0,(n=this.updatePositionCommand)==null||n.destroy(),this.updatePositionCommand=void 0,(s=this.dragPointCommand)==null||s.destroy(),this.dragPointCommand=void 0,(a=this.findPointsInRectCommand)==null||a.destroy(),this.findPointsInRectCommand=void 0,(l=this.findPointsInPolygonCommand)==null||l.destroy(),this.findPointsInPolygonCommand=void 0,(c=this.fillPickingBufferCommand)==null||c.destroy(),this.fillPickingBufferCommand=void 0,(d=this.fillSampledPointsFboCommand)==null||d.destroy(),this.fillSampledPointsFboCommand=void 0,(u=this.trackPointsCommand)==null||u.destroy(),this.trackPointsCommand=void 0,(f=this.pickingReadback)==null||f.destroy(),this.pickingReadback=void 0,this.issuedPickingWindow=void 0,this.currentPositionFbo&&!this.currentPositionFbo.destroyed&&this.currentPositionFbo.destroy(),this.currentPositionFbo=void 0,this.previousPositionFbo&&!this.previousPositionFbo.destroyed&&this.previousPositionFbo.destroy(),this.previousPositionFbo=void 0,this.sourcePositionFbo&&!this.sourcePositionFbo.destroyed&&this.sourcePositionFbo.destroy(),this.sourcePositionFbo=void 0,this.targetPositionFbo&&!this.targetPositionFbo.destroyed&&this.targetPositionFbo.destroy(),this.targetPositionFbo=void 0,this.velocityFbo&&!this.velocityFbo.destroyed&&this.velocityFbo.destroy(),this.velocityFbo=void 0,this.searchFbo&&!this.searchFbo.destroyed&&this.searchFbo.destroy(),this.searchFbo=void 0,this.pickingFbo&&!this.pickingFbo.destroyed&&this.pickingFbo.destroy(),this.pickingFbo=void 0,this.trackedPositionsFbo&&!this.trackedPositionsFbo.destroyed&&this.trackedPositionsFbo.destroy(),this.trackedPositionsFbo=void 0,this.sampledPointsFbo&&!this.sampledPointsFbo.destroyed&&this.sampledPointsFbo.destroy(),this.sampledPointsFbo=void 0,this.currentPositionTexture&&!this.currentPositionTexture.destroyed&&this.currentPositionTexture.destroy(),this.currentPositionTexture=void 0,this.previousPositionTexture&&!this.previousPositionTexture.destroyed&&this.previousPositionTexture.destroy(),this.previousPositionTexture=void 0,this.sourcePositionTexture&&!this.sourcePositionTexture.destroyed&&this.sourcePositionTexture.destroy(),this.sourcePositionTexture=void 0,this.targetPositionTexture&&!this.targetPositionTexture.destroyed&&this.targetPositionTexture.destroy(),this.targetPositionTexture=void 0,this.velocityTexture&&!this.velocityTexture.destroyed&&this.velocityTexture.destroy(),this.velocityTexture=void 0,this.searchTexture&&!this.searchTexture.destroyed&&this.searchTexture.destroy(),this.searchTexture=void 0,this.pickingTexture&&!this.pickingTexture.destroyed&&this.pickingTexture.destroy(),this.pickingTexture=void 0,this.pointStatusTexture&&!this.pointStatusTexture.destroyed&&this.pointStatusTexture.destroy(),this.pointStatusTexture=void 0,this.pointColorsTexture&&!this.pointColorsTexture.destroyed&&this.pointColorsTexture.destroy(),this.pointColorsTexture=void 0,this.sizeTexture&&!this.sizeTexture.destroyed&&this.sizeTexture.destroy(),this.sizeTexture=void 0,this.trackedIndicesTexture&&!this.trackedIndicesTexture.destroyed&&this.trackedIndicesTexture.destroy(),this.trackedIndicesTexture=void 0,this.polygonPathTexture&&!this.polygonPathTexture.destroyed&&this.polygonPathTexture.destroy(),this.polygonPathTexture=void 0,this.imageAtlasTexture&&!this.imageAtlasTexture.destroyed&&this.imageAtlasTexture.destroy(),this.imageAtlasTexture=void 0,this.imageAtlasCoordsTexture&&!this.imageAtlasCoordsTexture.destroyed&&this.imageAtlasCoordsTexture.destroy(),this.imageAtlasCoordsTexture=void 0,this.pinnedStatusTexture&&!this.pinnedStatusTexture.destroyed&&this.pinnedStatusTexture.destroy(),this.pinnedStatusTexture=void 0,this.exitTexture&&!this.exitTexture.destroyed&&this.exitTexture.destroy(),this.exitTexture=void 0,this.previousExitData=void 0,this.hasAnyAbsentPoint=!1,(h=this.interpolatePositionUniformStore)==null||h.destroy(),this.interpolatePositionUniformStore=void 0,(m=this.updatePositionUniformStore)==null||m.destroy(),this.updatePositionUniformStore=void 0,(x=this.dragPointUniformStore)==null||x.destroy(),this.dragPointUniformStore=void 0,(S=this.drawUniformStore)==null||S.destroy(),this.drawUniformStore=void 0,(y=this.findPointsInRectUniformStore)==null||y.destroy(),this.findPointsInRectUniformStore=void 0,(A=this.findPointsInPolygonUniformStore)==null||A.destroy(),this.findPointsInPolygonUniformStore=void 0,(_=this.fillPickingBufferUniformStore)==null||_.destroy(),this.fillPickingBufferUniformStore=void 0,(v=this.fillSampledPointsUniformStore)==null||v.destroy(),this.fillSampledPointsUniformStore=void 0,(P=this.drawHighlightedUniformStore)==null||P.destroy(),this.drawHighlightedUniformStore=void 0,(T=this.trackPointsUniformStore)==null||T.destroy(),this.trackPointsUniformStore=void 0,this.sourceColorBuffer&&!this.sourceColorBuffer.destroyed&&this.sourceColorBuffer.destroy(),this.sourceColorBuffer=void 0,this.targetColorBuffer&&!this.targetColorBuffer.destroyed&&this.targetColorBuffer.destroy(),this.targetColorBuffer=void 0,this.previousColorData=void 0,this.sourceSizeBuffer&&!this.sourceSizeBuffer.destroyed&&this.sourceSizeBuffer.destroy(),this.sourceSizeBuffer=void 0,this.targetSizeBuffer&&!this.targetSizeBuffer.destroyed&&this.targetSizeBuffer.destroy(),this.targetSizeBuffer=void 0,this.previousSizeData=void 0,this.shapeBuffer&&!this.shapeBuffer.destroyed&&this.shapeBuffer.destroy(),this.shapeBuffer=void 0,this.imageIndicesBuffer&&!this.imageIndicesBuffer.destroyed&&this.imageIndicesBuffer.destroy(),this.imageIndicesBuffer=void 0,this.imageSizesBuffer&&!this.imageSizesBuffer.destroyed&&this.imageSizesBuffer.destroy(),this.imageSizesBuffer=void 0,this.drawPointIndices&&!this.drawPointIndices.destroyed&&this.drawPointIndices.destroy(),this.drawPointIndices=void 0,this.reversedPointIndexBuffer&&!this.reversedPointIndexBuffer.destroyed&&this.reversedPointIndexBuffer.destroy(),this.reversedPointIndexBuffer=void 0,this.hoveredPointIndices&&!this.hoveredPointIndices.destroyed&&this.hoveredPointIndices.destroy(),this.hoveredPointIndices=void 0,this.sampledPointIndices&&!this.sampledPointIndices.destroyed&&this.sampledPointIndices.destroy(),this.sampledPointIndices=void 0,this.updatePositionVertexCoordBuffer&&!this.updatePositionVertexCoordBuffer.destroyed&&this.updatePositionVertexCoordBuffer.destroy(),this.updatePositionVertexCoordBuffer=void 0,this.interpolatePositionVertexCoordBuffer&&!this.interpolatePositionVertexCoordBuffer.destroyed&&this.interpolatePositionVertexCoordBuffer.destroy(),this.interpolatePositionVertexCoordBuffer=void 0,this.dragPointVertexCoordBuffer&&!this.dragPointVertexCoordBuffer.destroyed&&this.dragPointVertexCoordBuffer.destroy(),this.dragPointVertexCoordBuffer=void 0,this.findPointsInRectVertexCoordBuffer&&!this.findPointsInRectVertexCoordBuffer.destroyed&&this.findPointsInRectVertexCoordBuffer.destroy(),this.findPointsInRectVertexCoordBuffer=void 0,this.findPointsInPolygonVertexCoordBuffer&&!this.findPointsInPolygonVertexCoordBuffer.destroyed&&this.findPointsInPolygonVertexCoordBuffer.destroy(),this.findPointsInPolygonVertexCoordBuffer=void 0,this.drawHighlightedVertexCoordBuffer&&!this.drawHighlightedVertexCoordBuffer.destroyed&&this.drawHighlightedVertexCoordBuffer.destroy(),this.drawHighlightedVertexCoordBuffer=void 0,this.trackPointsVertexCoordBuffer&&!this.trackPointsVertexCoordBuffer.destroyed&&this.trackPointsVertexCoordBuffer.destroy(),this.trackPointsVertexCoordBuffer=void 0}ensureSimulationResources(){let{store:{pointsTextureSize:t},device:i}=this;if(!t)return;this.ensureUpdatePositionProgram();let r=new Float32Array(t*t*4).fill(0);!this.velocityTexture||this.velocityTexture.width!==t||this.velocityTexture.height!==t?(this.velocityFbo&&!this.velocityFbo.destroyed&&this.velocityFbo.destroy(),this.velocityTexture&&!this.velocityTexture.destroyed&&this.velocityTexture.destroy(),this.velocityTexture=i.createTexture({width:t,height:t,format:"rgba32float"}),this.velocityTexture.copyImageData({data:r,bytesPerRow:Q("rgba32float",t),mipLevel:0,x:0,y:0}),this.velocityFbo=i.createFramebuffer({width:t,height:t,colorAttachments:[this.velocityTexture]})):this.velocityTexture.copyImageData({data:r,bytesPerRow:Q("rgba32float",t),mipLevel:0,x:0,y:0})}createTransitionResources(){let{store:{pointsTextureSize:t},device:i}=this;if(!t)return;let r=new Float32Array(t*t*4).fill(0),o=z.SAMPLE|z.RENDER|z.COPY_SRC|z.COPY_DST;(!this.sourcePositionTexture||this.sourcePositionTexture.width!==t||this.sourcePositionTexture.height!==t)&&(this.sourcePositionFbo&&!this.sourcePositionFbo.destroyed&&this.sourcePositionFbo.destroy(),this.sourcePositionTexture&&!this.sourcePositionTexture.destroyed&&this.sourcePositionTexture.destroy(),this.sourcePositionTexture=i.createTexture({width:t,height:t,format:"rgba32float",usage:o}),this.sourcePositionFbo=i.createFramebuffer({width:t,height:t,colorAttachments:[this.sourcePositionTexture]})),this.sourcePositionTexture.copyImageData({data:r,bytesPerRow:Q("rgba32float",t),mipLevel:0,x:0,y:0}),(!this.targetPositionTexture||this.targetPositionTexture.width!==t||this.targetPositionTexture.height!==t)&&(this.targetPositionFbo&&!this.targetPositionFbo.destroyed&&this.targetPositionFbo.destroy(),this.targetPositionTexture&&!this.targetPositionTexture.destroyed&&this.targetPositionTexture.destroy(),this.targetPositionTexture=i.createTexture({width:t,height:t,format:"rgba32float",usage:o}),this.targetPositionFbo=i.createFramebuffer({width:t,height:t,colorAttachments:[this.targetPositionTexture]})),this.targetPositionTexture.copyImageData({data:r,bytesPerRow:Q("rgba32float",t),mipLevel:0,x:0,y:0}),this.interpolatePositionVertexCoordBuffer||(this.interpolatePositionVertexCoordBuffer=i.createBuffer({data:new Float32Array([-1,-1,1,-1,-1,1,1,1])})),this.interpolatePositionUniformStore||(this.interpolatePositionUniformStore=new ee(i,{interpolatePositionUniforms:{uniformTypes:{progress:"f32"},defaultUniforms:{progress:0}}})),this.interpolatePositionCommand||(this.interpolatePositionCommand=new re(i,{fs:eA,vs:Ne,topology:"triangle-strip",vertexCount:4,attributes:{vertexCoord:this.interpolatePositionVertexCoordBuffer},bufferLayout:[{name:"vertexCoord",format:"float32x2"}],defines:{USE_UNIFORM_BUFFERS:!0},bindings:{interpolatePositionUniforms:this.interpolatePositionUniformStore.getManagedUniformBuffer("interpolatePositionUniforms")}}))}destroyTransitionResources(){var t,i;(t=this.interpolatePositionCommand)==null||t.destroy(),this.interpolatePositionCommand=void 0,(i=this.interpolatePositionUniformStore)==null||i.destroy(),this.interpolatePositionUniformStore=void 0,this.interpolatePositionVertexCoordBuffer&&!this.interpolatePositionVertexCoordBuffer.destroyed&&this.interpolatePositionVertexCoordBuffer.destroy(),this.interpolatePositionVertexCoordBuffer=void 0,this.sourcePositionFbo&&!this.sourcePositionFbo.destroyed&&this.sourcePositionFbo.destroy(),this.sourcePositionFbo=void 0,this.sourcePositionTexture&&!this.sourcePositionTexture.destroyed&&this.sourcePositionTexture.destroy(),this.sourcePositionTexture=void 0,this.targetPositionFbo&&!this.targetPositionFbo.destroyed&&this.targetPositionFbo.destroy(),this.targetPositionFbo=void 0,this.targetPositionTexture&&!this.targetPositionTexture.destroyed&&this.targetPositionTexture.destroy(),this.targetPositionTexture=void 0}interpolatePosition(t){if(!this.interpolatePositionCommand||!this.interpolatePositionUniformStore||!this.sourcePositionTexture||this.sourcePositionTexture.destroyed||!this.targetPositionTexture||this.targetPositionTexture.destroyed||!this.currentPositionFbo||this.currentPositionFbo.destroyed)return;this.interpolatePositionUniformStore.setUniforms({interpolatePositionUniforms:{progress:t}}),this.interpolatePositionCommand.setBindings({sourceTexture:this.sourcePositionTexture,targetTexture:this.targetPositionTexture});let i=this.device.beginRenderPass({framebuffer:this.currentPositionFbo});this.interpolatePositionCommand.draw(i),i.end(),this.isPositionsUpToDate=!1,this.areClusterCentroidsUpToDate=!1}destroySimulationResources(){var t,i;(t=this.updatePositionCommand)==null||t.destroy(),this.updatePositionCommand=void 0,(i=this.updatePositionUniformStore)==null||i.destroy(),this.updatePositionUniformStore=void 0,this.updatePositionVertexCoordBuffer&&!this.updatePositionVertexCoordBuffer.destroyed&&this.updatePositionVertexCoordBuffer.destroy(),this.updatePositionVertexCoordBuffer=void 0,this.velocityFbo&&!this.velocityFbo.destroyed&&this.velocityFbo.destroy(),this.velocityFbo=void 0,this.velocityTexture&&!this.velocityTexture.destroyed&&this.velocityTexture.destroy(),this.velocityTexture=void 0}swapFbo(){if(!this.currentPositionTexture||this.currentPositionTexture.destroyed||!this.previousPositionTexture||this.previousPositionTexture.destroyed||!this.currentPositionFbo||this.currentPositionFbo.destroyed||!this.previousPositionFbo||this.previousPositionFbo.destroyed)return;let t=this.previousPositionTexture,i=this.previousPositionFbo;this.previousPositionTexture=this.currentPositionTexture,this.previousPositionFbo=this.currentPositionFbo,this.currentPositionTexture=t,this.currentPositionFbo=i,this.areClusterCentroidsUpToDate=!1}ensurePositionTextures(t){(!this.currentPositionTexture||this.currentPositionTexture.width!==t||this.currentPositionTexture.height!==t)&&(this.currentPositionTexture&&!this.currentPositionTexture.destroyed&&this.currentPositionTexture.destroy(),this.currentPositionFbo&&!this.currentPositionFbo.destroyed&&this.currentPositionFbo.destroy(),this.currentPositionTexture=this.device.createTexture({width:t,height:t,format:"rgba32float"}),this.currentPositionFbo=this.device.createFramebuffer({width:t,height:t,colorAttachments:[this.currentPositionTexture]})),(!this.previousPositionTexture||this.previousPositionTexture.width!==t||this.previousPositionTexture.height!==t)&&(this.previousPositionTexture&&!this.previousPositionTexture.destroyed&&this.previousPositionTexture.destroy(),this.previousPositionFbo&&!this.previousPositionFbo.destroyed&&this.previousPositionFbo.destroy(),this.previousPositionTexture=this.device.createTexture({width:t,height:t,format:"rgba32float"}),this.previousPositionFbo=this.device.createFramebuffer({width:t,height:t,colorAttachments:[this.previousPositionTexture]}))}writePositionTexture(t,i,r){t.copyImageData({data:i,bytesPerRow:Q("rgba32float",r),mipLevel:0,x:0,y:0})}ensurePickingBuffer(){var t;let{device:i,store:r}=this,[o,n]=r.screenSize;if(!o||!n)return!1;let s=Math.min(tu,sA/Math.max(o,n)),a=Math.max(Ve,Math.ceil(o*s)),l=Math.max(Ve,Math.ceil(n*s));return this.pickingTexture&&!this.pickingTexture.destroyed&&this.pickingTexture.width===a&&this.pickingTexture.height===l||((t=this.pickingReadback)==null||t.cancel(),this.issuedPickingWindow=void 0,this.pickingFbo&&!this.pickingFbo.destroyed&&this.pickingFbo.destroy(),this.pickingTexture&&!this.pickingTexture.destroyed&&this.pickingTexture.destroy(),this.pickingTexture=i.createTexture({width:a,height:l,format:"rgba32float",usage:z.SAMPLE|z.RENDER}),this.pickingFbo=i.createFramebuffer({width:a,height:l,colorAttachments:[this.pickingTexture],depthStencilAttachment:"depth16unorm"}),this.isPickingBufferStale=!0),!0}getPickingWindow(){if(!this.pickingFbo||this.pickingFbo.destroyed)return;let[t,i]=this.store.screenSize;if(!t||!i)return;let r=this.store.screenMousePosition[0]*(this.pickingFbo.width/t),o=this.store.screenMousePosition[1]*(this.pickingFbo.height/i),n=Math.floor(Ve/2),s=Math.min(Math.max(Math.round(r)-n,0),this.pickingFbo.width-Ve),a=Math.min(Math.max(Math.round(o)-n,0),this.pickingFbo.height-Ve);return{x:s,y:a,centerX:r,centerY:o}}resolvePickedPoint(t,i,r){let o=-1,n=[0,0,0],s=1/0;for(let a=0;a<Ve;a+=1)for(let l=0;l<Ve;l+=1){let c=(a*Ve+l)*4,d=t[c];if(d<0)continue;let u=l+.5-i,f=a+.5-r,h=u*u+f*f;h<s&&(s=h,o=d,n=[t[c+1],t[c+2],t[c+3]])}if(!(o<0))return{index:o,position:this.store.is3D?n:[n[0],n[1]]}}ensureUpdatePositionProgram(){let{device:t,config:i,store:r}=this;this.updatePositionVertexCoordBuffer||(this.updatePositionVertexCoordBuffer=t.createBuffer({data:new Float32Array([-1,-1,1,-1,-1,1,1,1])})),this.updatePositionUniformStore||(this.updatePositionUniformStore=new ee(t,{updatePositionUniforms:{uniformTypes:{friction:"f32",spaceSize:"f32"},defaultUniforms:{friction:i.simulationFriction,spaceSize:r.adjustedSpaceSize}}})),this.updatePositionCommand||(this.updatePositionCommand=new re(t,{fs:J2,vs:Ne,topology:"triangle-strip",vertexCount:4,attributes:{vertexCoord:this.updatePositionVertexCoordBuffer},bufferLayout:[{name:"vertexCoord",format:"float32x2"}],defines:{USE_UNIFORM_BUFFERS:!0,...r.is3D?{SPACE_3D:!0}:{}},bindings:{updatePositionUniforms:this.updatePositionUniformStore.getManagedUniformBuffer("updatePositionUniforms")}}))}fillAndReadSampledPointsFbo(){if(!(!this.sampledPointsFbo||this.sampledPointsFbo.destroyed)){if(this.fillSampledPointsFboCommand&&this.fillSampledPointsUniformStore){if(!this.currentPositionTexture||this.currentPositionTexture.destroyed||(this.fillSampledPointsFboCommand.setVertexCount(this.data.pointsNumber??0),this.exitTexture||this.updateExit(),!this.exitTexture||this.exitTexture.destroyed))return;this.fillSampledPointsUniformStore.setUniforms({fillSampledPointsUniforms:{pointsTextureSize:this.store.pointsTextureSize??0,transformationMatrix:this.store.transformationMatrix4x4,spaceSize:this.store.adjustedSpaceSize,screenSize:ae(this.store.screenSize,[0,0])}}),this.fillSampledPointsFboCommand.setBindings({positionsTexture:this.currentPositionTexture,exitTexture:this.exitTexture});let t=this.device.beginRenderPass({framebuffer:this.sampledPointsFbo,clearColor:[-1,0,0,0]});this.fillSampledPointsFboCommand.draw(t),t.end()}return Ke(this.device,this.sampledPointsFbo)}}rescaleInitialNodePositions(){if(this.data.pointDimensions===3){this.rescaleInitialNodePositions3D();return}let{config:{spaceSize:t}}=this;if(!this.data.pointPositions||!t)return;let i=this.data.pointPositions,r=i.length/2,o=1/0,n=-1/0,s=1/0,a=-1/0;for(let y=0;y<i.length;y+=2){let A=i[y],_=i[y+1];o=Math.min(o,A),n=Math.max(n,A),s=Math.min(s,_),a=Math.max(a,_)}let l=n-o,c=a-s,d=Math.max(l,c);if(d>t){this.scaleX=void 0,this.scaleY=void 0;return}let u=t*t*.001,f=r>u?t*Math.max(1.2,Math.sqrt(r)/t):t*.1,h=f/d,m=(t-f)/2,x=(d-l)/2*h+m,S=(d-c)/2*h+m;this.scaleX=y=>(y-o)*h+x,this.scaleY=y=>(y-s)*h+S;for(let y=0;y<r;y++)this.data.pointPositions[y*2]=this.scaleX(i[y*2]),this.data.pointPositions[y*2+1]=this.scaleY(i[y*2+1])}rescaleInitialNodePositions3D(){let{config:{spaceSize:t}}=this,i=this.data.pointPositions;if(!i||!t)return;this.scaleX=void 0,this.scaleY=void 0;let r=i.length/3,o=1/0,n=-1/0,s=1/0,a=-1/0,l=1/0,c=-1/0;for(let x=0;x<i.length;x+=3){let S=i[x],y=i[x+1],A=i[x+2];o=Math.min(o,S),n=Math.max(n,S),s=Math.min(s,y),a=Math.max(a,y),l=Math.min(l,A),c=Math.max(c,A)}let d=Math.max(n-o,a-s,c-l);if(!(d>0)||d>t)return;let u=t*.8/d,f=(t-(n-o)*u)/2,h=(t-(a-s)*u)/2,m=(t-(c-l)*u)/2;for(let x=0;x<r;x++)i[x*3]=(i[x*3]-o)*u+f,i[x*3+1]=(i[x*3+1]-s)*u+h,i[x*3+2]=(i[x*3+2]-l)*u+m}updateReversedPointIndexBuffer(){var t,i;let{device:r,data:o,store:n}=this;if(n.is3D)return;let s=o.pointsNumber??0;if(s===0)return;let a=s*4;if(((t=this.reversedPointIndexBuffer)==null?void 0:t.byteLength)===a)return;let l=new Uint32Array(s);for(let c=0;c<s;c++)l[c]=s-1-c;this.reversedPointIndexBuffer&&!this.reversedPointIndexBuffer.destroyed&&this.reversedPointIndexBuffer.destroy(),this.reversedPointIndexBuffer=r.createBuffer({data:l,usage:U.INDEX|U.COPY_DST}),(i=this.drawCoreCommand)==null||i.setIndexBuffer(this.reversedPointIndexBuffer)}},uu=class{constructor(t,i){this.eventTransform=xt,this.behavior=Sa().scaleExtent([.001,1/0]).on("start",r=>{var o,n;this.isRunning=!0;let s=!!r.sourceEvent;s&&(this.shouldEnableSimulationDuringZoomOverride=void 0),(n=(o=this.config).onZoomStart)==null||n.call(o,r,s)}).on("zoom",r=>{var o,n;this.eventTransform=r.transform;let{eventTransform:{x:s,y:a,k:l},store:{transform:c,screenSize:d}}=this,u=d[0],f=d[1];if(!u||!f)return;Mt.projection(c,u,f),Mt.translate(c,c,[s,a]),Mt.scale(c,c,[l,l]),Mt.translate(c,c,[u/2,f/2]),Mt.scale(c,c,[u/2,f/2]),Mt.scale(c,c,[1,-1]);let h=!!r.sourceEvent;(n=(o=this.config).onZoom)==null||n.call(o,r,h)}).on("end",r=>{var o,n;this.isRunning=!1;let s=!!r.sourceEvent;(n=(o=this.config).onZoomEnd)==null||n.call(o,r,s)}),this.isRunning=!1,this.shouldEnableSimulationDuringZoomOverride=void 0,this.store=t,this.config=i}getTransform(t,i,r=.1){if(t.length===0)return this.eventTransform;let{store:{screenSize:o}}=this,n=o[0],s=o[1];if(!(n>0)||!(s>0))return this.eventTransform;let a=1/0,l=-1/0,c=1/0,d=-1/0;for(let v=0;v<t.length;v+=2){let P=t[v],T=t[v+1];!Number.isFinite(P)||!Number.isFinite(T)||(P<a&&(a=P),P>l&&(l=P),T<c&&(c=T),T>d&&(d=T))}if(!Number.isFinite(a)||!Number.isFinite(c))return this.eventTransform;let u=[this.store.scaleX(a),this.store.scaleX(l)],f=[this.store.scaleY(c),this.store.scaleY(d)];u[0]===u[1]&&(u[0]-=.5,u[1]+=.5),f[0]===f[1]&&(f[0]+=.5,f[1]-=.5);let h=n*(1-r*2)/(u[1]-u[0]),m=s*(1-r*2)/(f[0]-f[1]),x=xr(i??Math.min(h,m),...this.behavior.scaleExtent()),S=(u[1]+u[0])/2,y=(f[1]+f[0])/2,A=n/2-S*x,_=s/2-y*x;return xt.translate(A,_).scale(x)}getDistanceToPoint(t){let{x:i,y:r,k:o}=this.eventTransform,n=this.getTransform(t,o),s=i-n.x,a=r-n.y;return Math.sqrt(s*s+a*a)}getMiddlePointTransform(t){if(!Number.isFinite(t[0])||!Number.isFinite(t[1]))return this.eventTransform;let{store:{screenSize:i},eventTransform:{x:r,y:o,k:n}}=this,s=i[0],a=i[1],l=(s/2-r)/n,c=(a/2-o)/n,d=this.store.scaleX(t[0]),u=this.store.scaleY(t[1]),f=(l+d)/2,h=(c+u)/2,m=1,x=s/2-f*m,S=a/2-h*m;return xt.translate(x,S).scale(m)}convertScreenToSpacePosition(t){let{eventTransform:{x:i,y:r,k:o},store:{screenSize:n}}=this,s=n[0],a=n[1],l=(t[0]-i)/o,c=(t[1]-r)/o,d=[l,a-c];return d[0]-=(s-this.store.adjustedSpaceSize)/2,d[1]-=(a-this.store.adjustedSpaceSize)/2,d}convertSpaceToScreenPosition(t){let i=this.eventTransform.applyX(this.store.scaleX(t[0])),r=this.eventTransform.applyY(this.store.scaleY(t[1]));return[i,r]}convertSpaceToScreenRadius(t){let{config:{scalePointsOnZoom:i},store:{maxPointSize:r},eventTransform:{k:o}}=this,n=t*2;return i?n*=o:n*=Math.min(5,Math.max(1,o*.01)),Math.min(n,r)/2}},fu=class{constructor(t,i,r){this.isActive=!1,this.behavior=Kd().subject(o=>{var n;if(this.transition.isActiveFor(me.Positions)||this.transition.isActiveFor(me.PointSizes))return;let s=((n=o.sourceEvent)==null?void 0:n.shiftKey)===!0;return this.store.hoveredPoint&&!this.store.isSpaceKeyPressed&&!s?{x:o.x,y:o.y}:void 0}).on("start",o=>{var n,s;this.store.hoveredPoint&&(this.store.draggingPointIndex=this.store.hoveredPoint.index,this.store.is3D&&this.store.hoveredPoint.position.length===3&&(this.store.dragPlanePoint3D=[...this.store.hoveredPoint.position],this.store.mousePosition3D=[...this.store.hoveredPoint.position]),this.isActive=!0,(s=(n=this.config).onDragStart)==null||s.call(n,o))}).on("drag",o=>{var n,s;(s=(n=this.config).onDrag)==null||s.call(n,o)}).on("end",o=>{var n,s;this.isActive=!1,this.store.draggingPointIndex=void 0,this.store.dragPlanePoint3D=void 0,(s=(n=this.config).onDragEnd)==null||s.call(n,o)}),this.store=t,this.config=i,this.transition=r}},gr=.01,q0=.05,K0=20;function Z0(e,t){let i=1/0,r=-1/0,o=1/0,n=-1/0,s=1/0,a=-1/0;for(let h=0;h<e.length;h+=t){let m=e[h],x=e[h+1],S=t===3?e[h+2]:0;m<i&&(i=m),m>r&&(r=m),x<o&&(o=x),x>n&&(n=x),S<s&&(s=S),S>a&&(a=S)}if(i>r)return{center:Z.create(),radius:1};let l=Z.fromValues((i+r)/2,(o+n)/2,(s+a)/2),c=r-i,d=n-o,u=a-s,f=Math.max(Math.sqrt(c*c+d*d+u*u)/2,1e-6);return{center:l,radius:f}}var hu=class{constructor(t,i){this.isRunning=!1,this.target=Z.create(),this.distance=1,this.azimuth=0,this.polar=Math.PI/2,this.behavior=Sa().scaleExtent([.001,1/0]).on("start",r=>{var o,n,s;this.isRunning=!0,r.sourceEvent&&((o=this.canvasSelection)==null||o.interrupt("cosmosCameraFit"),this.baseDistance=this.distance*r.transform.k,this.behavior.scaleExtent([this.baseDistance/(this.sceneRadius*K0),this.baseDistance/(this.sceneRadius*q0)])),(s=(n=this.config).onZoomStart)==null||s.call(n,r,!!r.sourceEvent)}).on("zoom",r=>{var o,n,s;let a=r.transform;if(r.sourceEvent){if(a.k!==this.previousTransform.k)this.distance=this.baseDistance/a.k;else{let l=a.x-this.previousTransform.x,c=a.y-this.previousTransform.y,d=((o=r.sourceEvent)==null?void 0:o.shiftKey)===!0;this.store.isSpaceKeyPressed||d?this.pan(l,c):this.rotate(l,c)}this.updateMatrices()}this.previousTransform=a,(s=(n=this.config).onZoom)==null||s.call(n,r,!!r.sourceEvent)}).on("end",r=>{var o,n;this.isRunning=!1,(n=(o=this.config).onZoomEnd)==null||n.call(o,r,!!r.sourceEvent)}),this.view=pt.create(),this.projection=pt.create(),this.viewProjection=pt.create(),this.eye=Z.create(),this.baseDistance=1,this.previousTransform=xt,this.aspect=1,this.sceneRadius=1,this.store=t,this.config=i}get viewProjectionMatrix(){return Array.from(this.viewProjection)}setViewport(t,i){this.aspect=i===0?1:t/i,this.updateMatrices()}setOrbit(t,i,r,o){this.azimuth=t,this.polar=xr(i,gr,Math.PI-gr),this.distance=r,Z.copy(this.target,o),this.updateMatrices()}getState(){return{target:[this.target[0],this.target[1],this.target[2]],distance:this.distance,azimuth:this.azimuth,polar:this.polar}}setState(t,i,r=0){i?.interrupt("cosmosCameraFit");let o=this.getState(),n={...o,...t};if(n.distance=Math.max(n.distance,.001),n.polar=xr(n.polar,gr,Math.PI-gr),r>0&&i){let s=Z.fromValues(o.target[0],o.target[1],o.target[2]),a=Z.fromValues(n.target[0],n.target[1],n.target[2]);i.transition("cosmosCameraFit").ease(gi).duration(r).tween("cosmos-camera-state",()=>l=>{var c;Z.lerp(this.target,s,a,l),this.distance=o.distance+(n.distance-o.distance)*l,this.azimuth=o.azimuth+(n.azimuth-o.azimuth)*l,this.polar=o.polar+(n.polar-o.polar)*l,this.updateMatrices(),(c=this.onUpdate)==null||c.call(this)}).on("end",()=>this.reseedZoomState(i));return}Z.set(this.target,n.target[0],n.target[1],n.target[2]),this.distance=n.distance,this.azimuth=n.azimuth,this.polar=n.polar,this.updateMatrices(),i&&this.reseedZoomState(i)}setEyePosition(t,i,r){let{center:o,radius:n}=Z0(i,r);this.sceneRadius=n;let s=Z.sub(Z.create(),Z.fromValues(t[0],t[1],t[2]),o),a=Math.max(Z.length(s),1e-6);this.setOrbit(Math.atan2(s[0],s[2]),Math.acos(xr(s[1]/a,-1,1)),a,o)}getFitOrbit(t,i,r=.1){let{center:o,radius:n}=Z0(t,i),s=this.config.cameraFov*Math.PI/180,a=2*Math.atan(Math.tan(s/2)*this.aspect),l=xr(1-r*2,.1,1),c=n/Math.sin(Math.min(a,s)/2)/l;return{target:o,distance:c,radius:n}}setSceneRadius(t){this.sceneRadius=t}fitToPositions(t,i,r,o=.1,n=0){if(i.length===0)return;let{target:s,distance:a,radius:l}=this.getFitOrbit(i,r,o);if(this.sceneRadius=l,n===0)t.interrupt("cosmosCameraFit"),Z.copy(this.target,s),this.distance=a,this.updateMatrices(),this.reseedZoomState(t);else{let c=Z.clone(this.target),d=this.distance;t.transition("cosmosCameraFit").ease(gi).duration(n).tween("cosmos-camera-fit",()=>u=>{var f;Z.lerp(this.target,c,s,u),this.distance=d+(a-d)*u,this.updateMatrices(),(f=this.onUpdate)==null||f.call(this)}).on("end",()=>this.reseedZoomState(t))}}project(t){let[i,r]=this.store.screenSize,o=[0,0,0,0],n=this.viewProjection;for(let a=0;a<4;a+=1)o[a]=n[a]*t[0]+n[4+a]*t[1]+n[8+a]*t[2]+n[12+a];let s=o[3];return s<=0?[NaN,NaN]:[(o[0]/s+1)/2*i,(1-o[1]/s)/2*r]}unprojectOnPlane(t,i){let[r,o]=this.store.screenSize;if(!r||!o)return i;let n=pt.invert(pt.create(),this.viewProjection);if(!n)return i;let s=2*t[0]/r-1,a=1-2*t[1]/o,l=Z.transformMat4(Z.create(),[s,a,-1],n),c=Z.transformMat4(Z.create(),[s,a,1],n),d=Z.normalize(Z.create(),Z.sub(Z.create(),c,l)),u=Z.normalize(Z.create(),Z.sub(Z.create(),this.target,this.eye)),f=Z.dot(u,d);if(Math.abs(f)<1e-9)return i;let h=Z.fromValues(i[0],i[1],i[2]),m=Z.dot(u,Z.sub(Z.create(),h,l))/f,x=Z.scaleAndAdd(Z.create(),l,d,m);return[x[0],x[1],x[2]]}updateMatrices(){let{cameraFov:t,cameraNear:i,cameraFar:r}=this.config,o=Math.sin(this.polar);Z.set(this.eye,this.target[0]+this.distance*o*Math.sin(this.azimuth),this.target[1]+this.distance*Math.cos(this.polar),this.target[2]+this.distance*o*Math.cos(this.azimuth)),pt.lookAt(this.view,this.eye,this.target,[0,1,0]);let n=i??Math.max(this.distance-this.sceneRadius*2,this.sceneRadius*.01),s=Math.max(r??this.distance+this.sceneRadius*2,n*1.01);pt.perspective(this.projection,t*Math.PI/180,this.aspect,n,s),pt.multiply(this.viewProjection,this.projection,this.view),this.store.viewProjection3D=this.viewProjectionMatrix,this.store.depthFadeRange[0]=Math.max(this.distance-this.sceneRadius,0),this.store.depthFadeRange[1]=this.distance+this.sceneRadius}reseedZoomState(t){this.baseDistance=this.distance,this.behavior.scaleExtent([this.baseDistance/(this.sceneRadius*K0),this.baseDistance/(this.sceneRadius*q0)]),t.call(this.behavior.transform,xt)}rotate(t,i){let r=this.store.screenSize[1]||1;this.azimuth-=2*Math.PI*t/r,this.polar=xr(this.polar-2*Math.PI*i/r,gr,Math.PI-gr)}pan(t,i){let r=this.store.screenSize[1]||1,o=this.config.cameraFov*Math.PI/180,n=2*this.distance*Math.tan(o/2)/r,s=this.view;Z.scaleAndAdd(this.target,this.target,[s[0],s[4],s[8]],-t*n),Z.scaleAndAdd(this.target,this.target,[s[1],s[5],s[9]],i*n)}},dA=500,Q0=10,uA=0,oS=e=>(!e.ctrlKey||e.type==="wheel")&&!e.button,fA=e=>oS(e)&&(e.touches===void 0||e.touches.length<2),Ia=class{constructor(t,i,r){if(this.config=rS(),this.graph=new ou(this.config),this.isReady=!1,this.documentEventsNamespace=`cosmos-${uA++}`,this.requestAnimationFrameId=0,this._longPressStartX=0,this._longPressStartY=0,this._shouldSuppressNextClick=!1,this.store=new ru,this.zoomInstance=new uu(this.store,this.config),this.transition=new nu(this.config),this.dragInstance=new fu(this.store,this.config,this.transition),this.camera=new hu(this.store,this.config),this._isCameraInitialized=!1,this._findHoveredItemExecutionCount=0,this._isPointerOnCanvas=!1,this._lastMouseX=0,this._lastMouseY=0,this._lastCheckedMouseX=0,this._lastCheckedMouseY=0,this._shouldForceHoverDetection=!1,this._lastPickingMatrix=[],this._isFirstRenderAfterInit=!0,this.isPointPositionsUpdateNeeded=!1,this.isPointColorUpdateNeeded=!1,this.isPointSizeUpdateNeeded=!1,this.isPointShapeUpdateNeeded=!1,this.isPointImageIndicesUpdateNeeded=!1,this.isLinksUpdateNeeded=!1,this.isLinkColorUpdateNeeded=!1,this.isLinkWidthUpdateNeeded=!1,this.isLinkArrowUpdateNeeded=!1,this.isLinkStyleUpdateNeeded=!1,this.isPointClusterUpdateNeeded=!1,this.isForceManyBodyUpdateNeeded=!1,this.isForceLinkUpdateNeeded=!1,this.isForceCenterUpdateNeeded=!1,this.isPointImageSizesUpdateNeeded=!1,this.isForceCollisionReady=!1,this._isDestroyed=!1,i&&Jd(this.config,i),this.store.spaceDimensions=this.config.spaceDimensions,this.hasResizeWakeup=!r&&typeof ResizeObserver<"u",r)this.deviceInitPromise=r,this.shouldDestroyDevice=!1;else{let n=document.createElement("canvas");this.deviceInitPromise=this.createDevice(n),this.shouldDestroyDevice=!0}let o=this.deviceInitPromise.then(async n=>{var s;if(this._isDestroyed)return this.shouldDestroyDevice&&((s=n.canvasContext)==null||s.destroy(),n.destroy()),n;this.device=n;let a=this.validateDevice(n);r&&a.setProps({useDevicePixels:this.config.pixelRatio}),this.store.div=t;let l=a.canvas;if(l.parentNode!==this.store.div&&(l.parentNode&&l.parentNode.removeChild(l),this.store.div.appendChild(l)),this.addAttribution(),l.style.width="100%",l.style.height="100%",this.canvas=l,this.updateCanvasTouchAction(),await Promise.race([a.initialized,new Promise(u=>{setTimeout(u,500)})]),this._isDestroyed)return n;this.camera.onUpdate=()=>{this.requestRender()};let c=this.canvas.clientWidth,d=this.canvas.clientHeight;return this.store.adjustSpaceSize(this.config.spaceSize,this.device.limits.maxTextureDimension2D),this.store.setWebGLMaxTextureSize(this.device.limits.maxTextureDimension2D),this.store.updateScreenSize(c,d),this.store.is3D&&this.camera.setViewport(c,d),this.canvasD3Selection=ue(this.canvas).on("pointerenter.cosmos",u=>{u.isPrimary&&(this._isPointerOnCanvas=!0,this._lastMouseX=u.clientX,this._lastMouseY=u.clientY,this.requestRender())}).on("pointermove.cosmos",u=>{var f,h,m,x;if(u.isPrimary){if(this._isPointerOnCanvas=!0,this._lastMouseX=u.clientX,this._lastMouseY=u.clientY,this.currentEvent=u,this.updateMousePosition(u),this._longPressTimerId!==void 0){let S=Math.abs(u.clientX-this._longPressStartX),y=Math.abs(u.clientY-this._longPressStartY);(S>Q0||y>Q0)&&this.cancelLongPress()}(x=(m=this.config).onMouseMove)==null||x.call(m,(f=this.store.hoveredPoint)==null?void 0:f.index,(h=this.store.hoveredPoint)==null?void 0:h.position,this.currentEvent),this.requestRender()}}).on("pointerleave.cosmos pointercancel.cosmos",u=>{u.isPrimary&&(this.cancelLongPress(),this._isPointerOnCanvas=!1,u.pointerType==="mouse"&&(this.currentEvent=u,this.store.hoveredPoint!==void 0&&this.config.onPointMouseOut&&this.config.onPointMouseOut(u),this.store.hoveredLinkIndex!==void 0&&this.config.onLinkMouseOut&&this.config.onLinkMouseOut(u),this.store.hoveredPoint=void 0,this.store.hoveredLinkIndex=void 0,this.lines&&(this.lines.isLinkIndexBufferStale=!0),this.updateCanvasCursor(),this.requestRender()))}).on("pointerdown.cosmos",u=>{u.isPrimary&&(this.currentEvent=u,this._shouldSuppressNextClick=!1,this._lastMouseX=u.clientX,this._lastMouseY=u.clientY,this.updateMousePosition(u),this.findHoveredItem(!0),this.requestRender(),u.pointerType!=="mouse"&&(this._longPressStartX=u.clientX,this._longPressStartY=u.clientY,this.cancelLongPress(),this._longPressTimerId=window.setTimeout(()=>{this._longPressTimerId=void 0,!this._isDestroyed&&(this.findHoveredItem(!0),this.requestRender(),this._shouldSuppressNextClick=!0,this.fireContextMenu(u))},dA)))}).on("pointerup.cosmos",u=>{u.isPrimary&&this.cancelLongPress()}).on("click.cosmos",this.onClick.bind(this)).on("contextmenu.cosmos",this.onContextMenu.bind(this)),this.camera.canvasSelection=this.canvasD3Selection,ue(document).on(`keydown.${this.documentEventsNamespace}`,u=>{u.code==="Space"&&(this.store.isSpaceKeyPressed=!0)}).on(`keyup.${this.documentEventsNamespace}`,u=>{u.code==="Space"&&(this.store.isSpaceKeyPressed=!1)}),this.zoomInstance.behavior.on("start.detect",u=>{this.currentEvent=u,this.requestRender()}).on("zoom.detect",u=>{u.sourceEvent&&this.updateMousePosition(u.sourceEvent),this.currentEvent=u,this.requestRender()}).on("end.detect",u=>{this.currentEvent=u,this._shouldForceHoverDetection=!0,this.requestRender()}),this.camera.behavior.on("start.detect",u=>{this.currentEvent=u,this.requestRender()}).on("zoom.detect",u=>{this.currentEvent=u,this.requestRender()}).on("end.detect",u=>{this.currentEvent=u,this._shouldForceHoverDetection=!0,this.requestRender()}),this.dragInstance.behavior.on("start.detect",u=>{this.currentEvent=u,this.dragInstance.isActive&&this.reheatSimulationOnDragStart(),this.updateCanvasCursor(),this.requestRender()}).on("drag.detect",u=>{this.dragInstance.isActive&&this.updateMousePosition(u),this.currentEvent=u,this.requestRender()}).on("end.detect",u=>{this.currentEvent=u,this.updateCanvasCursor(),this.requestRender()}),this.updateZoomDragBehaviors(),this.setZoomLevel(this.config.initialZoomLevel??1),this.store.maxPointSize=O0(n,this.config.pixelRatio),this.store.isSimulationRunning=this.config.enableSimulation,this.points=new du(n,this.config,this.store,this.graph),this.points.transition=this.transition,this.lines=new cu(n,this.config,this.store,this.graph,this.points),this.config.enableSimulation&&(this.forceGravity=new Aa(n,this.config,this.store,this.graph,this.points),this.forceCenter=new Pa(n,this.config,this.store,this.graph,this.points),this.forceManyBody=new wa(n,this.config,this.store,this.graph,this.points),this.forceLinkIncoming=new Sr(n,this.config,this.store,this.graph,this.points),this.forceLinkOutgoing=new Sr(n,this.config,this.store,this.graph,this.points),this.forceCollision=new Ca(n,this.config,this.store,this.graph,this.points)),this.clusters=new lu(n,this.config,this.store,this.graph,this.points),this.store.backgroundColor=Lt(this.config.backgroundColor),this.store.setHoveredPointRingColor(this.config.hoveredPointRingColor),this.store.setFocusedPointRingColor(this.config.focusedPointRingColor),this.config.focusedPointIndex!==void 0&&this.store.setFocusedPoint(this.config.focusedPointIndex),this.store.setGreyoutPointColor(this.config.pointGreyoutColor),this.store.setOutlinedPointRingColor(this.config.outlinedPointRingColor),this.store.setHighlightedPointSet(this.config.highlightedPointIndices),this.store.setOutlinedPointSet(this.config.outlinedPointIndices),this.store.setHoveredLinkColor(this.config.hoveredLinkColor),this.store.updateLinkHoveringEnabled(this.config),this.config.showFPSMonitor&&(this.fpsMonitor=new Ra(this.canvas)),this.config.randomSeed!==void 0&&this.store.addRandomSeed(this.config.randomSeed),this.isReady=!0,n}).catch(n=>{throw this.device=void 0,this.isReady=!1,console.error("Device initialization failed:",n),n});this.ready=o.then(()=>{})}get progress(){return this._isDestroyed?0:this.store.simulationProgress}get isSimulationRunning(){return this._isDestroyed?!1:this.store.isSimulationRunning}get maxPointSize(){return this._isDestroyed?0:this.store.maxPointSize}get is3D(){return this.store.is3D}setConfig(t){if(this._isDestroyed||this.ensureDevice(()=>this.setConfig(t)))return;let i={...this.config};f2(this.config),Jd(this.config,t),t.spaceDimensions===void 0&&(this.config.spaceDimensions=i.spaceDimensions),this.preserveInitOnlyFields(i),this.updateStateFromConfig(i)}setConfigPartial(t){if(this._isDestroyed||this.ensureDevice(()=>this.setConfigPartial(t)))return;let i={...this.config};Jd(this.config,t,!0),this.preserveInitOnlyFields(i),this.updateStateFromConfig(i)}setPointPositions(t,i){if(this._isDestroyed||this.ensureDevice(()=>this.setPointPositions(t,i)))return;let{dimensions:r=2,dontRescale:o}=i??{},n=t;n.length%r!==0&&(console.warn(`cosmos.gl: \`setPointPositions\` expects ${r} coordinates per point; truncating the incomplete trailing point`),n=n.subarray(0,n.length-n.length%r)),this.graph.inputPointPositions=n,this.graph.inputPointDimensions=r,this.points.shouldSkipRescale=o,this.markPointPositionsDirty(),this.maybeInitializeCamera()}setPointColors(t){this._isDestroyed||this.ensureDevice(()=>this.setPointColors(t))||(this.graph.inputPointColors=t,this.isPointColorUpdateNeeded=!0,this.transition.queue(me.PointColors))}getPointColors(){if(this._isDestroyed)return new Float32Array;if(this.graph.pointColors===void 0||this.graph.pointsNumber===void 0)return new Float32Array;let t=new Float32Array(this.graph.pointsNumber*4);for(let i=0;i<this.graph.pointsNumber;i++)for(let r=0;r<4;r++)t[i*4+r]=this.graph.getResolvedPointColorChannel(i,r);return t}setPointSizes(t){this._isDestroyed||this.ensureDevice(()=>this.setPointSizes(t))||(this.graph.inputPointSizes=t,this.isPointSizeUpdateNeeded=!0,this.transition.queue(me.PointSizes))}setPointShapes(t){this._isDestroyed||this.ensureDevice(()=>this.setPointShapes(t))||(this.graph.inputPointShapes=t,this.isPointShapeUpdateNeeded=!0)}setImageData(t){var i;this._isDestroyed||this.ensureDevice(()=>this.setImageData(t))||(this.graph.inputImageData=t,(i=this.points)==null||i.createAtlas(),this.requestRender())}setPointImageIndices(t){this._isDestroyed||this.ensureDevice(()=>this.setPointImageIndices(t))||(this.graph.inputPointImageIndices=t,this.isPointImageIndicesUpdateNeeded=!0)}setPointImageSizes(t){this._isDestroyed||this.ensureDevice(()=>this.setPointImageSizes(t))||(this.graph.inputPointImageSizes=t,this.isPointImageSizesUpdateNeeded=!0)}getPointSizes(){if(this._isDestroyed)return new Float32Array;if(this.graph.pointSizes===void 0||this.graph.pointsNumber===void 0)return new Float32Array;let t=new Float32Array(this.graph.pointsNumber);for(let i=0;i<this.graph.pointsNumber;i++)t[i]=this.graph.getResolvedPointSize(i);return t}setLinks(t){if(this._isDestroyed||this.ensureDevice(()=>this.setLinks(t)))return;let i=t;i.length%2!==0&&(console.warn("cosmos.gl: `setLinks` expects 2 point indices per link; truncating the incomplete trailing link"),i=i.subarray(0,i.length-1)),this.graph.inputLinks=i,this.isLinksUpdateNeeded=!0,this.isLinkColorUpdateNeeded=!0,this.isLinkWidthUpdateNeeded=!0,this.isLinkArrowUpdateNeeded=!0,this.isLinkStyleUpdateNeeded=!0,this.isForceLinkUpdateNeeded=!0}setLinkColors(t){this._isDestroyed||this.ensureDevice(()=>this.setLinkColors(t))||(this.graph.inputLinkColors=t,this.isLinkColorUpdateNeeded=!0,this.transition.queue(me.LinkColors))}getLinkColors(){return this._isDestroyed?new Float32Array:this.graph.linkColors??new Float32Array}setLinkWidths(t){this._isDestroyed||this.ensureDevice(()=>this.setLinkWidths(t))||(this.graph.inputLinkWidths=t,this.isLinkWidthUpdateNeeded=!0,this.transition.queue(me.LinkWidths))}getLinkWidths(){return this._isDestroyed?new Float32Array:this.graph.linkWidths??new Float32Array}setLinkArrows(t){this._isDestroyed||this.ensureDevice(()=>this.setLinkArrows(t))||(this.graph.linkArrowsBoolean=t,this.isLinkArrowUpdateNeeded=!0)}setLinkStyles(t){this._isDestroyed||this.ensureDevice(()=>this.setLinkStyles(t))||(this.graph.inputLinkStyles=t,this.isLinkStyleUpdateNeeded=!0)}getLinkStyles(){return this._isDestroyed?new Float32Array:this.graph.linkStyles??new Float32Array}setLinkStrength(t){this._isDestroyed||this.ensureDevice(()=>this.setLinkStrength(t))||(this.graph.inputLinkStrength=t,this.isForceLinkUpdateNeeded=!0)}setPointClusters(t){this._isDestroyed||this.ensureDevice(()=>this.setPointClusters(t))||(this.graph.inputPointClusters=t,this.isPointClusterUpdateNeeded=!0)}setClusterPositions(t,i){this._isDestroyed||this.ensureDevice(()=>this.setClusterPositions(t,i))||(this.graph.inputClusterPositions=t,this.graph.inputClusterPositionsDimensions=i?.dimensions??2,this.isPointClusterUpdateNeeded=!0)}setPointClusterStrength(t){this._isDestroyed||this.ensureDevice(()=>this.setPointClusterStrength(t))||(this.graph.inputClusterStrength=t,this.isPointClusterUpdateNeeded=!0)}setPinnedPoints(t){var i;this._isDestroyed||this.ensureDevice(()=>this.setPinnedPoints(t))||(this.graph.inputPinnedPoints=t&&t.length>0?t:void 0,(i=this.points)==null||i.updatePinnedStatus(),this.requestRender())}render(t,i){var r,o,n;if(this._isDestroyed||this.ensureDevice(()=>this.render(t,i)))return;this.graph.update();let{fitViewOnInit:s,fitViewDelay:a,fitViewPadding:l,fitViewDuration:c,fitViewByPointsInRect:d,fitViewByPointIndices:u,initialZoomLevel:f}=this.config;if(!this.graph.pointsNumber&&!this.graph.linksNumber){this.stopFrames(),ue(this.canvas).style("cursor",null),this.device&&(this.device.beginRenderPass({clearColor:this.store.backgroundColor,clearDepth:1,clearStencil:0}).end(),this.device.submit());return}this._isFirstRenderAfterInit&&s&&f===void 0&&(this._fitViewOnInitTimeoutID=window.setTimeout(()=>{u?this.fitViewByPointIndices(u,c,l):d&&!this.store.is3D?this.setZoomTransformByPointPositions(new Float32Array(this.flatten(d)),c,void 0,l):this.fitView(c,l)},a)),this.transition.setDurationOverride(i),this.update(t),this.transition.isPendingFor(me.Positions)&&this.store.isSimulationRunning&&this.transition.duration>0&&!this._isFirstRenderAfterInit&&(this.store.isSimulationRunning=!1,(o=(r=this.config).onSimulationPause)==null||o.call(r));let h=(n=this.points)==null?void 0:n.currentPositionTexture;this.transition.isPending&&(!h||h.destroyed)&&this.transition.abort(),this.transition.start(),this._shouldForceHoverDetection=!0,this.requestRender(),this._isFirstRenderAfterInit=!1}zoomToPointByIndex(t,i=700,r=3,o=!0,n=!0){if(this._isDestroyed||this.ensureDevice(()=>this.zoomToPointByIndex(t,i,r,o,n))||this.warnIf3D("zoomToPointByIndex")||!this.device||!this.points||!this.canvasD3Selection||this.graph.isPointAbsent(t))return;let{store:{screenSize:s}}=this,a=Ke(this.device,this.points.currentPositionFbo);if(t===void 0)return;let l=a[t*4+0],c=a[t*4+1];if(l===void 0||c===void 0)return;let d=this.zoomInstance.getDistanceToPoint([l,c]),u=o?r:Math.max(this.getZoomLevel(),r);if(d<Math.min(s[0],s[1]))this.setZoomTransformByPointPositions(new Float32Array([l,c]),i,u,void 0,n);else{this.zoomInstance.shouldEnableSimulationDuringZoomOverride=n;let f=this.zoomInstance.getTransform([l,c],u),h=this.zoomInstance.getMiddlePointTransform([l,c]);this.canvasD3Selection.transition().ease(_n).duration(i/2).call(this.zoomInstance.behavior.transform,h).transition().ease(Pn).duration(i/2).call(this.zoomInstance.behavior.transform,f)}}zoom(t,i=0,r=!0){this._isDestroyed||this.setZoomLevel(t,i,r)}setZoomLevel(t,i=0,r=!0){this._isDestroyed||this.ensureDevice(()=>this.setZoomLevel(t,i,r))||this.warnIf3D("setZoomLevel")||this.canvasD3Selection&&(this.zoomInstance.shouldEnableSimulationDuringZoomOverride=r,i===0?this.canvasD3Selection.call(this.zoomInstance.behavior.scaleTo,t):this.canvasD3Selection.transition().duration(i).call(this.zoomInstance.behavior.scaleTo,t))}getZoomLevel(){return this._isDestroyed||this.warnIf3D("getZoomLevel")?0:this.zoomInstance.eventTransform.k}getPointPositions(t){if(this._isDestroyed||!this.device||!this.points)return[];if(this.graph.pointsNumber===void 0)return[];let i=t?.dimensions??2,r=[],o=Ke(this.device,this.points.currentPositionFbo);r.length=this.graph.pointsNumber*i;for(let n=0;n<this.graph.pointsNumber;n+=1){if(this.graph.isPointAbsent(n)){r[n*i]=NaN,r[n*i+1]=NaN,i===3&&(r[n*i+2]=NaN);continue}let s=o[n*4+0],a=o[n*4+1];s!==void 0&&a!==void 0&&(r[n*i]=s,r[n*i+1]=a,i===3&&(r[n*i+2]=o[n*4+3]??0))}return r}getClusterPositions(t){return this._isDestroyed||!this.device||!this.clusters?[]:this.graph.pointClusters===void 0||this.clusters.clusterCount===void 0?[]:this.clusters.getCentroidPositions(t?.dimensions??2)}fitView(t=250,i=.1,r=!0){if(!this._isDestroyed&&!this.ensureDevice(()=>this.fitView(t,i,r))){if(this.store.is3D){this.canvasD3Selection&&(this.camera.fitToPositions(this.canvasD3Selection,this.getFitViewPositions3D(),3,i,t),this.requestRender());return}this.setZoomTransformByPointPositions(this.getFitViewPositions(),t,void 0,i,r)}}fitViewByPointIndices(t,i=250,r=.1,o=!0){if(this._isDestroyed||this.ensureDevice(()=>this.fitViewByPointIndices(t,i,r,o)))return;if(this.store.is3D){let a=this.getFitViewPositions3D(),l=new Float32Array(t.length*3);for(let[c,d]of t.entries())l[c*3]=a[d*3],l[c*3+1]=a[d*3+1],l[c*3+2]=a[d*3+2];this.canvasD3Selection&&(this.camera.fitToPositions(this.canvasD3Selection,l,3,r,i),this.requestRender());return}let n=this.getFitViewPositions(),s=new Float32Array(t.length*2);for(let[a,l]of t.entries())s[a*2]=n[l*2],s[a*2+1]=n[l*2+1];this.setZoomTransformByPointPositions(s,i,void 0,r,o)}fitViewByPointPositions(t,i=250,r=.1,o=!0){if(!this._isDestroyed&&!this.ensureDevice(()=>this.fitViewByPointPositions(t,i,r,o))){if(this.store.is3D){this.canvasD3Selection&&(this.camera.fitToPositions(this.canvasD3Selection,t,3,r,i),this.requestRender());return}this.setZoomTransformByPointPositions(new Float32Array(t),i,void 0,r,o)}}setZoomTransformByPointPositions(t,i=250,r,o=.1,n=!0){var s,a;if(this._isDestroyed||this.ensureDevice(()=>this.setZoomTransformByPointPositions(t,i,r,o,n))||this.warnIf3D("setZoomTransformByPointPositions","use `fitViewByPointPositions` instead"))return;this.zoomInstance.shouldEnableSimulationDuringZoomOverride=n,this.resizeCanvas();let l=this.zoomInstance.getTransform(t,r,o);i<=0?(s=this.canvasD3Selection)==null||s.call(this.zoomInstance.behavior.transform,l):(a=this.canvasD3Selection)==null||a.transition().ease(gi).duration(i).call(this.zoomInstance.behavior.transform,l)}findPointsInRect(t){if(this._isDestroyed)return[];if(this.warnIf3D("findPointsInRect"))return[];if(!this.isReady||!this.device||!this.points)return[];let i=this.store.screenSize[1];if(this.store.searchArea=[[t[0][0],i-t[1][1]],[t[1][0],i-t[0][1]]],!this.points.findPointsInRect())return[];let r=this.graph.pointsNumber??0;return B0(Ke(this.device,this.points.searchFbo)).filter(o=>o<r)}findPointsInPolygon(t){if(this._isDestroyed)return[];if(this.warnIf3D("findPointsInPolygon"))return[];if(!this.isReady||!this.device||!this.points)return[];if(t.length<3)return console.warn("Polygon path requires at least 3 points to form a polygon."),[];let i=this.store.screenSize[1],r=t.map(([n,s])=>[n,i-s]);if(this.points.updatePolygonPath(r),!this.points.findPointsInPolygon())return[];let o=this.graph.pointsNumber??0;return B0(Ke(this.device,this.points.searchFbo)).filter(n=>n<o)}getNeighboringPointIndices(t){return this._isDestroyed?[]:this.graph.getNeighboringPointIndices(t)}getConnectedLinkIndices(t){return this._isDestroyed?[]:this.graph.getConnectedLinkIndices(t)}getConnectedPointIndices(t){return this._isDestroyed?[]:this.graph.getConnectedPointIndices(t)}spaceToScreenPosition(t,i){return this._isDestroyed?[0,0]:(i?.dimensions??2)===3?this.store.is3D?this.camera.project(t):(console.warn("cosmos.gl: `spaceToScreenPosition` with `{ dimensions: 3 }` is only available in 3D mode"),[0,0]):this.store.is3D?(console.warn("cosmos.gl: `spaceToScreenPosition` in 3D mode requires `{ dimensions: 3 }`"),[0,0]):this.zoomInstance.convertSpaceToScreenPosition(t)}getCameraState(){if(!(this._isDestroyed||!this.store.is3D))return this.camera.getState()}setCameraState(t,i=0){if(!this._isDestroyed){if(!this.store.is3D){console.warn("cosmos.gl: `setCameraState` is only available in 3D mode");return}this.camera.setState(t,this.canvasD3Selection,i),this.requestRender()}}screenToSpacePosition(t,i){if(this._isDestroyed)return(i?.dimensions??2)===3?[0,0,0]:[0,0];if((i?.dimensions??2)===3){if(!this.store.is3D)return console.warn("cosmos.gl: `screenToSpacePosition` with `{ dimensions: 3 }` is only available in 3D mode"),[0,0,0];let r=this.camera.target;return this.camera.unprojectOnPlane(t,[r[0],r[1],r[2]])}return this.store.is3D?(console.warn("cosmos.gl: `screenToSpacePosition` in 3D mode requires `{ dimensions: 3 }`"),[0,0]):this.zoomInstance.convertScreenToSpacePosition(t)}spaceToScreenRadius(t){return this._isDestroyed||this.warnIf3D("spaceToScreenRadius")?0:this.zoomInstance.convertSpaceToScreenRadius(t)}getPointRadiusByIndex(t){var i;if(this._isDestroyed||this.graph.pointSizes===void 0&&this.graph.pointImageSizes===void 0||t<0||t>=(this.graph.pointsNumber??0))return;let r=this.graph.getResolvedPointSize(t),o=(i=this.graph.pointImageSizes)==null?void 0:i[t];return Math.max(r,o??0)}trackPointPositionsByIndices(t){this._isDestroyed||this.ensureDevice(()=>this.trackPointPositionsByIndices(t))||this.points&&this.points.trackPointsByIndices(t)}getTrackedPointPositionsMap(t){return this._isDestroyed||!this.points?new Map:(t?.dimensions??2)===3?this.points.getTrackedPositionsMap(3):this.points.getTrackedPositionsMap(2)}getTrackedPointPositionsArray(t){return this._isDestroyed||!this.points?[]:this.points.getTrackedPositionsArray(t?.dimensions??2)}getSampledPointPositionsMap(t){return this._isDestroyed||!this.points?new Map:(t?.dimensions??2)===3?this.points.getSampledPointPositionsMap(3):this.points.getSampledPointPositionsMap(2)}getSampledPoints(t){return this._isDestroyed||!this.points?{indices:[],positions:[]}:this.points.getSampledPoints(t?.dimensions??2)}getSampledLinkPositionsMap(t){return this._isDestroyed||!this.lines?new Map:(t?.dimensions??2)===3?this.lines.getSampledLinkPositionsMap(3):this.lines.getSampledLinkPositionsMap(2)}getSampledLinks(t){return this._isDestroyed||!this.lines?{indices:[],positions:[],angles:[]}:this.lines.getSampledLinks(t?.dimensions??2)}getScaleX(){if(!(this._isDestroyed||!this.points))return this.points.scaleX}getScaleY(){if(!(this._isDestroyed||!this.points))return this.points.scaleY}start(t=1){var i,r;if(this._isDestroyed||this.ensureDevice(()=>this.start(t))||!this.config.enableSimulation||!this.graph.pointsNumber)return;this.transition.isActiveFor(me.Positions)&&this.transition.end(!0);let o=this.store.isSimulationRunning;this.store.isSimulationRunning=!0,this.store.simulationProgress=0,this.store.alpha=t,o||(r=(i=this.config).onSimulationStart)==null||r.call(i),this.requestRender()}stop(){var t,i;if(this._isDestroyed)return;let r=this.store.isSimulationRunning||this.store.alpha>0||this.store.simulationProgress>0;this.store.isSimulationRunning=!1,this.store.simulationProgress=0,this.store.alpha=0,r&&((i=(t=this.config).onSimulationEnd)==null||i.call(t))}pause(){var t,i;this._isDestroyed||this.ensureDevice(()=>this.pause())||this.store.isSimulationRunning&&(this.store.isSimulationRunning=!1,(i=(t=this.config).onSimulationPause)==null||i.call(t))}unpause(){var t,i;this._isDestroyed||this.ensureDevice(()=>this.unpause())||this.config.enableSimulation&&(this.store.isSimulationRunning||(this.transition.isActiveFor(me.Positions)&&this.transition.end(!0),this.store.isSimulationRunning=!0,(i=(t=this.config).onSimulationUnpause)==null||i.call(t),this.requestRender()))}step(){this._isDestroyed||this.ensureDevice(()=>this.step())||this.config.enableSimulation&&this.store.pointsTextureSize&&(this.runSimulationStep(!0),this.requestRender())}destroy(){var t,i,r,o,n,s,a,l,c,d,u,f,h,m;this._isDestroyed||(this._isDestroyed=!0,this.isReady=!1,this.transition.abort(),window.clearTimeout(this._fitViewOnInitTimeoutID),this.cancelLongPress(),this.stopFrames(),this.canvasD3Selection&&this.canvasD3Selection.on(".cosmos",null).on(".drag",null).on(".zoom",null),ue(document).on(`.${this.documentEventsNamespace}`,null),(t=this.zoomInstance)!=null&&t.behavior&&this.zoomInstance.behavior.on("start.detect",null).on("zoom.detect",null).on("end.detect",null),(i=this.dragInstance)!=null&&i.behavior&&this.dragInstance.behavior.on("start.detect",null).on("drag.detect",null).on("end.detect",null),(r=this.fpsMonitor)==null||r.destroy(),(o=this.points)==null||o.destroy(),(n=this.lines)==null||n.destroy(),(s=this.clusters)==null||s.destroy(),(a=this.forceGravity)==null||a.destroy(),(l=this.forceCenter)==null||l.destroy(),(c=this.forceManyBody)==null||c.destroy(),(d=this.forceLinkIncoming)==null||d.destroy(),(u=this.forceLinkOutgoing)==null||u.destroy(),(f=this.forceCollision)==null||f.destroy(),this.device&&this.shouldDestroyDevice&&(this.device.beginRenderPass({clearColor:this.store.backgroundColor,clearDepth:1,clearStencil:0}).end(),this.device.submit(),(h=this.device.canvasContext)==null||h.destroy(),this.device.destroy()),this.shouldDestroyDevice&&this.canvas&&this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas),this.attributionDivElement&&this.attributionDivElement.parentNode&&this.attributionDivElement.parentNode.removeChild(this.attributionDivElement),(m=document.getElementById("gl-bench-style"))==null||m.remove(),this.canvasD3Selection=void 0,this.camera.canvasSelection=void 0,this.attributionDivElement=void 0)}create(){var t,i,r,o,n;this._isDestroyed||this.ensureDevice(()=>this.create())||this.points&&this.lines&&(this.isPointPositionsUpdateNeeded&&(this.points.updatePositions(),this.lines.isLinkIndexBufferStale=!0),this.isPointColorUpdateNeeded&&this.points.updateColor(),this.isPointSizeUpdateNeeded&&this.points.updateSize(),this.isPointShapeUpdateNeeded&&this.points.updateShape(),this.isPointImageIndicesUpdateNeeded&&this.points.updateImageIndices(),this.isPointImageSizesUpdateNeeded&&this.points.updateImageSizes(),this.isLinksUpdateNeeded&&this.lines.updatePointsBuffer(),this.isLinkColorUpdateNeeded&&this.lines.updateColor(),this.isLinkWidthUpdateNeeded&&this.lines.updateWidth(),this.isLinkArrowUpdateNeeded&&this.lines.updateArrow(),this.isLinkStyleUpdateNeeded&&this.lines.updateStyle(),this.isForceManyBodyUpdateNeeded&&((t=this.forceManyBody)==null||t.create()),(this.isForceManyBodyUpdateNeeded||this.isPointSizeUpdateNeeded)&&(this.isForceCollisionReady=!1),this.isForceLinkUpdateNeeded&&((i=this.forceLinkIncoming)==null||i.create(au.INCOMING),(r=this.forceLinkOutgoing)==null||r.create(au.OUTGOING)),this.isForceCenterUpdateNeeded&&((o=this.forceCenter)==null||o.create()),this.isPointClusterUpdateNeeded&&((n=this.clusters)==null||n.create()),this.isPointPositionsUpdateNeeded=!1,this.isPointColorUpdateNeeded=!1,this.isPointSizeUpdateNeeded=!1,this.isPointShapeUpdateNeeded=!1,this.isPointImageIndicesUpdateNeeded=!1,this.isPointImageSizesUpdateNeeded=!1,this.isLinksUpdateNeeded=!1,this.isLinkColorUpdateNeeded=!1,this.isLinkWidthUpdateNeeded=!1,this.isLinkArrowUpdateNeeded=!1,this.isLinkStyleUpdateNeeded=!1,this.isPointClusterUpdateNeeded=!1,this.isForceManyBodyUpdateNeeded=!1,this.isForceLinkUpdateNeeded=!1,this.isForceCenterUpdateNeeded=!1,this.requestRender())}flatten(t){return t.flat()}pair(t){let i=new Array(t.length/2);for(let r=0;r<t.length/2;r++)i[r]=[t[r*2],t[r*2+1]];return i}preserveInitOnlyFields(t){this.config.initialZoomLevel=t.initialZoomLevel,this.config.randomSeed=t.randomSeed,this.config.attribution=t.attribution}getFitViewPositions(){return this.transition.isActive&&this.transition.isActiveFor(me.Positions)&&this.graph.pointPositions&&this.graph.pointPositions?new Float32Array(this.graph.pointPositions):new Float32Array(this.getPointPositions())}getFitViewPositions3D(){return this.transition.isActive&&this.transition.isActiveFor(me.Positions)&&this.graph.pointPositions&&this.graph.pointPositions&&this.graph.pointDimensions===3?this.graph.pointPositions:this.getPointPositions({dimensions:3})}updateStateFromConfig(t){var i,r,o,n,s,a,l,c,d,u,f,h,m,x,S,y,A;this.applyEnableSimulationConfigChange(t),t.pointDefaultColor!==this.config.pointDefaultColor&&(this.graph.updatePointColor(),(i=this.points)==null||i.updateColor()),t.pointDefaultSize!==this.config.pointDefaultSize&&(this.graph.updatePointSize(),(r=this.points)==null||r.updateSize()),t.pointDefaultShape!==this.config.pointDefaultShape&&(this.graph.updatePointShape(),(o=this.points)==null||o.updateShape()),t.linkDefaultColor!==this.config.linkDefaultColor&&(this.graph.updateLinkColor(),(n=this.lines)==null||n.updateColor()),t.linkDefaultWidth!==this.config.linkDefaultWidth&&(this.graph.updateLinkWidth(),(s=this.lines)==null||s.updateWidth()),t.linkDefaultArrows!==this.config.linkDefaultArrows&&(this.graph.updateArrows(),(a=this.lines)==null||a.updateArrow()),t.linkDefaultStyle!==this.config.linkDefaultStyle&&(this.graph.updateLinkStyles(),(l=this.lines)==null||l.updateStyle()),t.linkColorInterpolateFromEndpoints!==this.config.linkColorInterpolateFromEndpoints&&((c=this.points)==null||c.updateColor()),t.linkBlending!==this.config.linkBlending&&((d=this.lines)==null||d.updateLinkBlending()),(t.curvedLinkSegments!==this.config.curvedLinkSegments||t.curvedLinks!==this.config.curvedLinks)&&((u=this.lines)==null||u.updateCurveLineGeometry()),t.backgroundColor!==this.config.backgroundColor&&(this.store.backgroundColor=Lt(this.config.backgroundColor)),t.hoveredPointRingColor!==this.config.hoveredPointRingColor&&this.store.setHoveredPointRingColor(this.config.hoveredPointRingColor),t.focusedPointRingColor!==this.config.focusedPointRingColor&&this.store.setFocusedPointRingColor(this.config.focusedPointRingColor),t.pointGreyoutColor!==this.config.pointGreyoutColor&&this.store.setGreyoutPointColor(this.config.pointGreyoutColor),t.hoveredLinkColor!==this.config.hoveredLinkColor&&this.store.setHoveredLinkColor(this.config.hoveredLinkColor),t.focusedPointIndex!==this.config.focusedPointIndex&&this.store.setFocusedPoint(this.config.focusedPointIndex),t.outlinedPointRingColor!==this.config.outlinedPointRingColor&&this.store.setOutlinedPointRingColor(this.config.outlinedPointRingColor),t.highlightedPointIndices!==this.config.highlightedPointIndices&&this.store.setHighlightedPointSet(this.config.highlightedPointIndices),t.outlinedPointIndices!==this.config.outlinedPointIndices&&this.store.setOutlinedPointSet(this.config.outlinedPointIndices),(t.highlightedPointIndices!==this.config.highlightedPointIndices||t.outlinedPointIndices!==this.config.outlinedPointIndices)&&((f=this.points)==null||f.updatePointStatus()),t.highlightedLinkIndices!==this.config.highlightedLinkIndices&&((h=this.lines)==null||h.updateLinkStatus()),(t.simulationCollisionRadius!==this.config.simulationCollisionRadius||t.simulationCollisionPadding!==this.config.simulationCollisionPadding||(this.config.simulationCollisionRadius===void 0||this.config.simulationCollisionRadius===0)&&t.pointDefaultSize!==this.config.pointDefaultSize)&&(this.isForceCollisionReady=!1),t.pixelRatio!==this.config.pixelRatio&&(m=this.device)!=null&&m.canvasContext&&(this.device.canvasContext.setProps({useDevicePixels:this.config.pixelRatio}),this.store.maxPointSize=O0(this.device,this.config.pixelRatio)),t.spaceSize!==this.config.spaceSize&&(this.store.adjustSpaceSize(this.config.spaceSize,((x=this.device)==null?void 0:x.limits.maxTextureDimension2D)??4096),this.isForceManyBodyUpdateNeeded=!0,this.resizeCanvas(!0),this.update(this.store.isSimulationRunning?this.store.alpha:0)),t.showFPSMonitor!==this.config.showFPSMonitor&&(this.config.showFPSMonitor?this.fpsMonitor=new Ra(this.canvas):((S=this.fpsMonitor)==null||S.destroy(),this.fpsMonitor=void 0)),(t.enableZoom!==this.config.enableZoom||t.enableDrag!==this.config.enableDrag)&&this.updateZoomDragBehaviors(),t.pointSamplingDistance!==this.config.pointSamplingDistance&&((y=this.points)==null||y.updateSampledPointsGrid()),t.linkSamplingDistance!==this.config.linkSamplingDistance&&((A=this.lines)==null||A.updateSampledLinksGrid()),t.spaceDimensions!==this.config.spaceDimensions&&this.setSpaceDimensions(this.config.spaceDimensions),(t.cameraFov!==this.config.cameraFov||t.cameraNear!==this.config.cameraNear||t.cameraFar!==this.config.cameraFar)&&this.store.is3D&&this.camera.updateMatrices(),(t.onLinkClick!==this.config.onLinkClick||t.onLinkContextMenu!==this.config.onLinkContextMenu||t.onLinkMouseOver!==this.config.onLinkMouseOver||t.onLinkMouseOut!==this.config.onLinkMouseOut)&&this.store.updateLinkHoveringEnabled(this.config),this.markPickingBuffersStale(),this.requestRender()}applyEnableSimulationConfigChange(t){var i,r,o,n,s;if(t.enableSimulation===this.config.enableSimulation)return;if(this.config.enableSimulation){this.transition.end(!0),this.transition.dequeue(me.Positions),this.ensureSimulationModules(),(i=this.points)==null||i.ensureSimulationResources(),this.isForceManyBodyUpdateNeeded=!0,this.isForceLinkUpdateNeeded=!0,this.isForceCenterUpdateNeeded=!0,this.create(),this.initPrograms(),this.store.simulationProgress=0,this.store.alpha=1,this.store.isSimulationRunning=!0,this._shouldForceHoverDetection=!0,(o=(r=this.config).onSimulationStart)==null||o.call(r);return}let a=this.store.isSimulationRunning||this.store.alpha>0||this.store.simulationProgress>0;this.store.isSimulationRunning=!1,this.store.alpha=0,this.store.simulationProgress=0,this._shouldForceHoverDetection=!0,a&&((s=(n=this.config).onSimulationEnd)==null||s.call(n)),this.destroySimulationModules()}markPointPositionsDirty(){var t;this.isPointPositionsUpdateNeeded=!0;let i=(t=this.points)==null?void 0:t.currentPositionTexture;i&&!i.destroyed&&(this.transition.queue(me.Positions),this.graph.hasPointAbsenceChanged()&&(this.transition.queue(me.PointSizes),this.transition.queue(me.PointColors))),this.isLinksUpdateNeeded=!0,this.isPointColorUpdateNeeded=!0,this.isPointSizeUpdateNeeded=!0,this.isPointShapeUpdateNeeded=!0,this.isPointImageIndicesUpdateNeeded=!0,this.isPointImageSizesUpdateNeeded=!0,this.isPointClusterUpdateNeeded=!0,this.isForceManyBodyUpdateNeeded=!0,this.isForceLinkUpdateNeeded=!0,this.isForceCenterUpdateNeeded=!0}setSpaceDimensions(t){var i;if(this.store.spaceDimensions!==t){if(this.store.spaceDimensions=t,this.isForceCollisionReady=!1,(i=this.forceManyBody)==null||i.create(),this.initPrograms(),t===3){let[r,o]=this.store.screenSize;r&&o&&this.camera.setViewport(r,o),this.handOffFramingTo3D()||this.maybeInitializeCamera()}else this.handOffFramingTo2D();this.updateZoomDragBehaviors()}}handOffFramingTo3D(){let[t,i]=this.store.screenSize;if(!t||!i)return!1;let r=this.zoomInstance.eventTransform.k,o=this.zoomInstance.convertScreenToSpacePosition([t/2,i/2]),n=this.getPointPositions({dimensions:3}),s=n.length?this.camera.getFitOrbit(n,3,0):void 0;s&&this.camera.setSceneRadius(s.radius);let a=this.config.cameraFov*Math.PI/180,l=i/(2*r*Math.tan(a/2)),c=Math.max(l,s?.distance??0);return this.camera.setState({target:[o[0],o[1],s?.target[2]??0],distance:c,azimuth:0,polar:Math.PI/2},this.canvasD3Selection),this._isCameraInitialized=!0,!0}handOffFramingTo2D(){var t;let[i,r]=this.store.screenSize;if(!i||!r||!this._isCameraInitialized)return;let{target:o,distance:n}=this.camera.getState(),s=this.config.cameraFov*Math.PI/180,a=r/(2*n*Math.tan(s/2)),l=this.zoomInstance.getTransform([o[0],o[1]],a);(t=this.canvasD3Selection)==null||t.call(this.zoomInstance.behavior.transform,l)}maybeInitializeCamera(){if(this._isCameraInitialized||!this.store.is3D)return;let t=this.graph.inputPointPositions;if(!t||t.length===0)return;let i=this.graph.inputPointDimensions;this._isCameraInitialized=!0;let{cameraInitialPosition:r,fitViewPadding:o}=this.config;r?(this.camera.setEyePosition(r,t,i),this.canvasD3Selection&&this.camera.reseedZoomState(this.canvasD3Selection)):this.canvasD3Selection?this.camera.fitToPositions(this.canvasD3Selection,t,i,o,0):this._isCameraInitialized=!1}warnIf3D(t,i){return this.store.is3D?(console.warn(`cosmos.gl: \`${t}\` is not supported in 3D mode${i?`; ${i}`:""}`),!0):!1}ensureDevice(t){return this.isReady?!1:(this.ready.then(()=>{this._isDestroyed||t()}).catch(i=>{console.error("Device initialization failed",i)}),!0)}validateDevice(t){let i=t.canvasContext;if(i===null||i.type==="offscreen-canvas")throw new Error("Device must have an HTMLCanvasElement canvas context. OffscreenCanvas and compute-only devices are not supported.");return i}async createDevice(t){return await Xl.createDevice({type:"webgl",adapters:[Wc],createCanvasContext:{canvas:t,useDevicePixels:this.config.pixelRatio,autoResize:!0,width:void 0,height:void 0},onResize:()=>{this.requestRender()}})}update(t=this.store.alpha){let{graph:i}=this;this.store.pointsTextureSize=Math.ceil(Math.sqrt(i.pointsNumber??0)),this.store.linksTextureSize=Math.ceil(Math.sqrt((i.linksNumber??0)*2)),this.create(),this.initPrograms(),this.store.alpha=t}reheatSimulationOnDragStart(){let t=this.config.simulationAlphaOnDrag??0;!this.config.enableSimulation||t<=0||this.store.isSimulationRunning&&this.store.alpha>=t||this.start(Math.max(this.store.alpha,t))}runSimulationStep(t=!1){var i,r,o,n,s,a,l,c,d,u,f,h,m,x,S,y,A,_,v,P,T,R,D,B,F,W,k,V;let{config:{simulationGravity:b,simulationCenter:N,simulationCollision:I,enableSimulation:L},store:{isSimulationRunning:$}}=this;if(!L)return;let G=this.zoomInstance.shouldEnableSimulationDuringZoomOverride??this.config.enableSimulationDuringZoom;if(t||$&&!(this.zoomInstance.isRunning&&!G)){if(b&&((i=this.points)==null||i.swapFbo(),(r=this.forceGravity)==null||r.run(),(o=this.points)==null||o.updatePosition()),N&&((n=this.points)==null||n.swapFbo(),(s=this.forceCenter)==null||s.run(),(a=this.points)==null||a.updatePosition()),(l=this.points)==null||l.swapFbo(),(c=this.forceManyBody)==null||c.run(),(d=this.points)==null||d.updatePosition(),this.store.linksTextureSize&&((u=this.points)==null||u.swapFbo(),(f=this.forceLinkIncoming)==null||f.run(),(h=this.points)==null||h.updatePosition(),(m=this.points)==null||m.swapFbo(),(x=this.forceLinkOutgoing)==null||x.run(),(S=this.points)==null||S.updatePosition()),(this.graph.pointClusters||this.graph.clusterPositions)&&((y=this.points)==null||y.swapFbo(),(A=this.clusters)==null||A.run(),(_=this.points)==null||_.updatePosition()),I){this.isForceCollisionReady||((v=this.forceCollision)==null||v.create(),(P=this.forceCollision)==null||P.initPrograms(),this.isForceCollisionReady=!0);let j=Math.max(1,Math.round(this.config.simulationCollisionIterations??1));for(let oe=0;oe<j;oe+=1)(T=this.points)==null||T.swapFbo(),(R=this.forceCollision)==null||R.run(),(D=this.points)==null||D.updatePosition()}this.markPickingBuffersStale(),this.store.alpha+=this.store.addAlpha(this.config.simulationDecay),this.store.simulationProgress=Math.sqrt(Math.min(1,iu/this.store.alpha)),(k=(W=this.config).onSimulationTick)==null||k.call(W,this.store.alpha,(B=this.store.hoveredPoint)==null?void 0:B.index,(F=this.store.hoveredPoint)==null?void 0:F.position)}(V=this.points)==null||V.trackPoints()}initPrograms(){var t,i,r,o,n;this._isDestroyed||!this.points||!this.lines||!this.clusters||(this.points.initPrograms(),this.lines.initPrograms(),(t=this.forceGravity)==null||t.initPrograms(),(i=this.forceManyBody)==null||i.initPrograms(),(r=this.forceCenter)==null||r.initPrograms(),(o=this.forceLinkIncoming)==null||o.initPrograms(),(n=this.forceLinkOutgoing)==null||n.initPrograms(),this.clusters.initPrograms())}ensureSimulationModules(){!this.device||!this.points||(this.forceGravity||(this.forceGravity=new Aa(this.device,this.config,this.store,this.graph,this.points)),this.forceCenter||(this.forceCenter=new Pa(this.device,this.config,this.store,this.graph,this.points)),this.forceManyBody||(this.forceManyBody=new wa(this.device,this.config,this.store,this.graph,this.points)),this.forceLinkIncoming||(this.forceLinkIncoming=new Sr(this.device,this.config,this.store,this.graph,this.points)),this.forceLinkOutgoing||(this.forceLinkOutgoing=new Sr(this.device,this.config,this.store,this.graph,this.points)),this.forceCollision||(this.forceCollision=new Ca(this.device,this.config,this.store,this.graph,this.points)))}destroySimulationModules(){var t,i,r,o,n,s,a;(t=this.forceGravity)==null||t.destroy(),this.forceGravity=void 0,(i=this.forceCenter)==null||i.destroy(),this.forceCenter=void 0,(r=this.forceManyBody)==null||r.destroy(),this.forceManyBody=void 0,(o=this.forceLinkIncoming)==null||o.destroy(),this.forceLinkIncoming=void 0,(n=this.forceLinkOutgoing)==null||n.destroy(),this.forceLinkOutgoing=void 0,(s=this.forceCollision)==null||s.destroy(),this.forceCollision=void 0,this.isForceCollisionReady=!1,(a=this.points)==null||a.destroySimulationResources()}frame(){this._isDestroyed||this.requestAnimationFrameId||!this.store.pointsTextureSize||!this.graph.pointsNumber&&!this.graph.linksNumber||(this.requestAnimationFrameId=window.requestAnimationFrame(t=>{this.requestAnimationFrameId=0;let{store:{alpha:i,isSimulationRunning:r}}=this;i<iu&&r&&this.end(),this.renderFrame(t),!this._isDestroyed&&this.shouldKeepRendering()&&this.frame()}))}requestRender(){this._isDestroyed||this.frame()}shouldKeepRendering(){var t,i;return!this.hasResizeWakeup||this.fpsMonitor||this.store.isSimulationRunning||this.transition.isActive||this.dragInstance.isActive||this.zoomInstance.isRunning||this.camera.isRunning||(t=this.points)!=null&&t.isPickInFlight||(i=this.lines)!=null&&i.isPickInFlight?!0:this.hasPendingHoverWork()}hasPendingHoverWork(){if(!this._isPointerOnCanvas)return!1;if(this._shouldForceHoverDetection)return!0;let t=Math.abs(this._lastMouseX-this._lastCheckedMouseX),i=Math.abs(this._lastMouseY-this._lastCheckedMouseY);return t>va||i>va}renderFrame(t){var i,r,o,n,s,a,l,c,d,u,f,h,m;if(this._isDestroyed||!this.store.pointsTextureSize)return;let x=t??performance.now();(i=this.fpsMonitor)==null||i.begin(),this.resizeCanvas();let S=this.transition.isActiveFor(me.Positions),y=this.transition.isActiveFor(me.PointColors),A=this.transition.isActiveFor(me.PointSizes),_=this.transition.isActiveFor(me.LinkColors),v=this.transition.isActiveFor(me.LinkWidths);if(this.transition.isActive&&(this.transition.step(),S&&((r=this.points)==null||r.interpolatePosition(this.transition.progress),(o=this.points)==null||o.trackPoints(),this.markPickingBuffersStale())),(n=this.points)==null||n.setTransitionProgress(this.transition.progress,y,A,S),(s=this.lines)==null||s.setTransitionProgress(this.transition.progress,_,v,S),this.dragInstance.isActive||(this.resolvePendingPick(),this.findHoveredItem()),this.runSimulationStep(!1),this.device){let P=this.store.backgroundColor??[0,0,0,1],T=this.device.beginRenderPass({clearColor:P,clearDepth:1,clearStencil:0}),{config:{renderLinks:R}}=this,D=R!==!1&&!!this.store.linksTextureSize&&!!this.graph.linksNumber&&this.graph.linksNumber>0;this.store.is3D?((a=this.points)==null||a.draw(T),D&&((l=this.lines)==null||l.draw(T))):(D&&((c=this.lines)==null||c.draw(T)),(d=this.points)==null||d.draw(T)),this.dragInstance.isActive&&((u=this.points)==null||u.swapFbo(),(f=this.points)==null||f.drag(),(h=this.points)==null||h.trackPoints(),this.markPickingBuffersStale()),T.end(),this.device.submit()}(m=this.fpsMonitor)==null||m.end(x),this.currentEvent=void 0}stopFrames(){this.requestAnimationFrameId&&(window.cancelAnimationFrame(this.requestAnimationFrameId),this.requestAnimationFrameId=0)}end(){var t,i;this.store.isSimulationRunning=!1,this.store.simulationProgress=1,(i=(t=this.config).onSimulationEnd)==null||i.call(t),this._shouldForceHoverDetection=!0}onClick(t){var i,r,o,n,s,a,l,c,d,u;if(this._shouldSuppressNextClick){this._shouldSuppressNextClick=!1;return}(n=(o=this.config).onClick)==null||n.call(o,(i=this.store.hoveredPoint)==null?void 0:i.index,(r=this.store.hoveredPoint)==null?void 0:r.position,t),this.store.hoveredPoint?(a=(s=this.config).onPointClick)==null||a.call(s,this.store.hoveredPoint.index,this.store.hoveredPoint.position,t):this.store.hoveredLinkIndex!==void 0?(c=(l=this.config).onLinkClick)==null||c.call(l,this.store.hoveredLinkIndex,t):(u=(d=this.config).onBackgroundClick)==null||u.call(d,t)}updateMousePosition(t){if(!t)return;let i=t.offsetX??t.x,r=t.offsetY??t.y;i===void 0||r===void 0||(this.store.is3D?this.dragInstance.isActive&&this.store.dragPlanePoint3D&&(this.store.mousePosition3D=this.camera.unprojectOnPlane([i,r],this.store.dragPlanePoint3D)):this.store.mousePosition=this.zoomInstance.convertScreenToSpacePosition([i,r]),this.store.screenMousePosition=[i,this.store.screenSize[1]-r])}onContextMenu(t){t.preventDefault(),this.cancelLongPress(),this._shouldSuppressNextClick=!0,this.fireContextMenu(t)}cancelLongPress(){this._longPressTimerId!==void 0&&(window.clearTimeout(this._longPressTimerId),this._longPressTimerId=void 0)}fireContextMenu(t){var i,r,o,n,s,a,l,c,d,u;(n=(o=this.config).onContextMenu)==null||n.call(o,(i=this.store.hoveredPoint)==null?void 0:i.index,(r=this.store.hoveredPoint)==null?void 0:r.position,t),this.store.hoveredPoint?(a=(s=this.config).onPointContextMenu)==null||a.call(s,this.store.hoveredPoint.index,this.store.hoveredPoint.position,t):this.store.hoveredLinkIndex!==void 0?(c=(l=this.config).onLinkContextMenu)==null||c.call(l,this.store.hoveredLinkIndex,t):(u=(d=this.config).onBackgroundContextMenu)==null||u.call(d,t)}resizeCanvas(t=!1){var i,r,o,n,s,a;if(this._isDestroyed)return;let l=this.canvas.clientWidth,c=this.canvas.clientHeight,[d,u]=this.store.screenSize;if(t||d!==l||u!==c){if(this.store.is3D)this.store.updateScreenSize(l,c),this.camera.setViewport(l,c),(i=this.points)==null||i.updateSampledPointsGrid(),(r=this.lines)==null||r.updateSampledLinksGrid();else{let{k:f}=this.zoomInstance.eventTransform,h=this.zoomInstance.convertScreenToSpacePosition([d/2,u/2]);this.store.updateScreenSize(l,c),(o=this.canvasD3Selection)==null||o.call(this.zoomInstance.behavior.transform,this.zoomInstance.getTransform(h,f)),(n=this.points)==null||n.updateSampledPointsGrid(),(s=this.lines)==null||s.updateSampledLinksGrid()}this.store.isLinkHoveringEnabled&&((a=this.lines)==null||a.updateLinkIndexFbo()),this.markPickingBuffersStale()}}updateZoomDragBehaviors(){var t,i,r,o,n,s,a,l;if((this.store.is3D?this.camera.behavior:this.zoomInstance.behavior).filter(this.config.enableZoom?oS:fA),this.store.is3D){this.config.enableDrag?(t=this.canvasD3Selection)==null||t.call(this.dragInstance.behavior):(i=this.canvasD3Selection)==null||i.call(this.dragInstance.behavior).on(".drag",null),this.config.enableZoom?(r=this.canvasD3Selection)==null||r.call(this.camera.behavior):(o=this.canvasD3Selection)==null||o.call(this.camera.behavior).on("wheel.zoom",null).on("dblclick.zoom",null),this.updateCanvasTouchAction();return}this.config.enableDrag?(n=this.canvasD3Selection)==null||n.call(this.dragInstance.behavior):(s=this.canvasD3Selection)==null||s.call(this.dragInstance.behavior).on(".drag",null),this.config.enableZoom?(a=this.canvasD3Selection)==null||a.call(this.zoomInstance.behavior):(l=this.canvasD3Selection)==null||l.call(this.zoomInstance.behavior).on("wheel.zoom",null).on("dblclick.zoom",null),this.updateCanvasTouchAction()}updateCanvasTouchAction(){this.canvas.style.touchAction=this.config.enableDrag||this.config.enableZoom||this.store.is3D?"none":""}findHoveredItem(t=!1){var i,r,o,n;if(this._isDestroyed||!t&&!this._isPointerOnCanvas||this.transition.isActiveFor(me.PointSizes))return;if(!t&&this._findHoveredItemExecutionCount<n2){this._findHoveredItemExecutionCount+=1;return}let s=Math.abs(this._lastMouseX-this._lastCheckedMouseX),a=Math.abs(this._lastMouseY-this._lastCheckedMouseY),l=s>va||a>va;if(!t&&!l&&!this._shouldForceHoverDetection)return;this.updatePickingBufferStaleness();let c=!!this.graph.linksNumber&&this.store.isLinkHoveringEnabled;if(t){(i=this.points)==null||i.discardPendingPick(),(r=this.lines)==null||r.discardPendingPick();let d=((o=this.points)==null?void 0:o.pickPointSync())??null,u;!d&&c&&(u=((n=this.lines)==null?void 0:n.pickLinkSync())??null),this.processHoverResult(d,u)}else{let d=this.points?this.points.requestPickPoint():!0,u=c&&this.lines?this.lines.requestPickLink():!0;if(!d||!u)return}this._findHoveredItemExecutionCount=0,this._lastCheckedMouseX=this._lastMouseX,this._lastCheckedMouseY=this._lastMouseY,this._shouldForceHoverDetection=!1}updatePickingBufferStaleness(){let t=this.store.transformationMatrix4x4,i=this._lastPickingMatrix.length!==t.length;if(!i){for(let[r,o]of t.entries())if(o!==this._lastPickingMatrix[r]){i=!0;break}}i&&(this._lastPickingMatrix=Array.from(t),this.markPickingBuffersStale())}markPickingBuffersStale(){this.points&&(this.points.isPickingBufferStale=!0),this.lines&&(this.lines.isLinkIndexBufferStale=!0)}resolvePendingPick(){var t,i;let r=(t=this.points)==null?void 0:t.takePickResult(),o=(i=this.lines)==null?void 0:i.takePickLinkResult();r===void 0&&o===void 0||this._isPointerOnCanvas&&this.processHoverResult(r,o)}processHoverResult(t,i){var r,o,n,s,a,l,c,d,u,f;if(this._isDestroyed)return;let h=t===void 0?{mouseover:!1,mouseout:!1}:this.applyPickedPoint(t),m={mouseover:!1,mouseout:!1};if(this.graph.linksNumber&&this.store.isLinkHoveringEnabled?this.store.hoveredPoint?m=this.applyPickedLink(null):i!==void 0&&(m=this.applyPickedLink(i)):this.store.hoveredLinkIndex!==void 0&&(m=this.applyPickedLink(null)),h.mouseout&&((o=(r=this.config).onPointMouseOut)==null||o.call(r,this.currentEvent)),m.mouseout&&((s=(n=this.config).onLinkMouseOut)==null||s.call(n,this.currentEvent)),h.mouseover&&this.store.hoveredPoint){let x=this.store.hoveredPoint.index;(d=(c=this.config).onPointMouseOver)==null||d.call(c,this.store.hoveredPoint.index,this.store.hoveredPoint.position,this.currentEvent,((a=this.store.highlightedPointSet)==null?void 0:a.has(x))??!1,((l=this.store.outlinedPointSet)==null?void 0:l.has(x))??!1)}m.mouseover&&this.store.hoveredLinkIndex!==void 0&&((f=(u=this.config).onLinkMouseOver)==null||f.call(u,this.store.hoveredLinkIndex)),this.updateCanvasCursor()}applyPickedPoint(t){let i=!1,r=!1;return t&&t.index>=(this.graph.pointsNumber??0)&&(t=null),t?((this.store.hoveredPoint===void 0||this.store.hoveredPoint.index!==t.index)&&(i=!0),this.store.hoveredPoint=t):(this.store.hoveredPoint&&(r=!0),this.store.hoveredPoint=void 0),{mouseover:i,mouseout:r}}applyPickedLink(t){let i=!1,r=!1;return t!==null&&t>=(this.graph.linksNumber??0)&&(t=null),t!==null?(this.store.hoveredLinkIndex!==t&&(i=!0),this.store.hoveredLinkIndex=t):(this.store.hoveredLinkIndex!==void 0&&(r=!0),this.store.hoveredLinkIndex=void 0),(i||r)&&this.lines&&(this.lines.isLinkIndexBufferStale=!0),{mouseover:i,mouseout:r}}updateCanvasCursor(){let{hoveredPointCursor:t,hoveredLinkCursor:i}=this.config;this.dragInstance.isActive?ue(this.canvas).style("cursor","grabbing"):this.store.hoveredPoint?!this.config.enableDrag||this.store.isSpaceKeyPressed?ue(this.canvas).style("cursor",t):ue(this.canvas).style("cursor","grab"):this.store.isLinkHoveringEnabled&&this.store.hoveredLinkIndex!==void 0?ue(this.canvas).style("cursor",i):ue(this.canvas).style("cursor",null)}addAttribution(){var t;this.config.attribution&&(this.attributionDivElement=document.createElement("div"),this.attributionDivElement.style.cssText=`
      user-select: none;
      position: absolute;
      bottom: 0;
      right: 0;
      color: var(--cosmosgl-attribution-color);
      margin: 0 0.6rem 0.6rem 0;
      font-size: 0.7rem;
      font-family: inherit;
    `,this.attributionDivElement.innerHTML=l2(this.config.attribution,{ALLOWED_TAGS:["a","b","i","em","strong","span","div","p","br","img"],ALLOWED_ATTR:["href","target","class","id","style","src","alt","title"]}),(t=this.store.div)==null||t.appendChild(this.attributionDivElement))}};return RS(hA);})();
