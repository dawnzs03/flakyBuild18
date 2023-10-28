!function(){"use strict";const e=()=>{};class t{#e;#t;#n;constructor(t){"silent"===t?(this.#e=e,this.#t=e,this.#n=e):(this.#e=console.log,this.#t=console.time,this.#n=console.timeEnd)}log(...e){this.#e(...e)}timed(e,t){this.#t(e);const n=t();return this.#n(e),n}}class n{#o=new WeakMap;#s=1;getOrInsert=e=>{const t=this.#o.get(e);return void 0!==t?t:(this.#o.set(e,this.#s),this.#s++,this.#s-1)}}class o{#i;constructor(e){this.#i=e}#r=(e,t)=>{const n=[];let o=document;for(const s of e){let e=this.#c(o,s.name);if(e)n.push(s.name),o=e;else if(t&&(e=this.#l(o,s.role),e))n.push(`[role="${s.role}"]`),o=e;else{if(e=this.#a(o,s.name,s.role),!e)return;n.push(`${s.name}[role="${s.role}"]`),o=e}}return n};#c=(e,t)=>{if(!t)return null;const n=this.#h(e,t);return 1!==n.length?null:n[0]};#l=(e,t)=>{if(!t)return null;const n=this.#h(e,void 0,t);return 1!==n.length?null:n[0]};#a=(e,t,n)=>{if(!n||!t)return null;const o=this.#h(e,t,n);return 1!==o.length?null:o[0]};#h=(e,t,n)=>{const o=[];if(!t&&!n)throw new Error("Both role and name are empty");const s=Boolean(t),i=Boolean(n),r=e=>{const c=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT);do{const e=c.currentNode;e.shadowRoot&&r(e.shadowRoot),e instanceof ShadowRoot||s&&this.#i.getAccessibleName(e)!==t||i&&this.#i.getAccessibleRole(e)!==n||o.push(e)}while(c.nextNode())};return r(e instanceof Document?document.documentElement:e),o};compute=e=>{let t,n=e;const o=[];for(;n;){const s=this.#i.getAccessibleRole(n),i=this.#i.getAccessibleName(n);if(s||i){if(o.unshift({name:i,role:s}),t=this.#r(o,n!==e),t)break;n!==e&&o.shift()}else if(n===e)break;n=n.parentNode,n instanceof ShadowRoot&&(n=n.host)}return t}}class s{value;optimized;constructor(e,t){this.value=e,this.optimized=t||!1}toString(){return this.value}}const i=e=>`#${CSS.escape(e)}`,r=(e,t)=>`[${e}='${CSS.escape(t)}']`,c=([e,t],n)=>{n.self??=e=>e;let o,s,i=n.inc(e);do{for(o=n.valueOf(e),s=!0;i!==t;)if(e=n.self(i),i=n.inc(e),!n.gte(o,i)){s=!1;break}}while(!s);return o};class l{#d=[[]];#u;#f=0;constructor(e=[]){this.#u=e}inc(e){return e.parentNode??e.getRootNode()}valueOf(e){const t=((e,t=[])=>{if(!(e instanceof Element))return;for(const n of t){const t=e.getAttribute(n);if(t)return new s(r(n,t),!0)}if((e=>Boolean(e.id)&&1===e.getRootNode().querySelectorAll(i(e.id)).length)(e))return new s(i(e.id),!0);const n=e.tagName.toLowerCase();switch(e.tagName){case"BODY":case"HEAD":case"HTML":return new s(n,!0)}const o=e.parentNode;if(!o)return new s(n,!0);const c=o.children;if(((e,t)=>{for(const n of t)if(n!==e&&n.tagName===e.tagName)return!1;return!0})(e,c))return new s(n,!0);if(e instanceof HTMLInputElement&&((e,t)=>{for(const n of t)if(n!==e&&n instanceof HTMLInputElement&&n.type===e.type)return!1;return!0})(e,c))return new s(((e,t)=>`${e}${r("type",t)}`)(n,e.type),!0);const l=((e,t)=>{const n=new Set(e.classList);for(const o of t)if(o!==e){for(const e of o.classList)n.delete(e);if(0===n.size)break}if(n.size>0)return n.values().next().value})(e,c);return void 0!==l?new s(((e,t)=>`${e}.${CSS.escape(t)}`)(n,l),!0):new s(((e,t)=>`${e}:nth-of-type(${t+1})`)(n,((e,t)=>{let n=0;for(const o of t){if(o===e)return n;o.tagName===e.tagName&&++n}throw new Error("Node not found in children")})(e,c)),!1)})(e,this.#u);if(!t)throw new Error("Node is not an element");return this.#f>1?this.#d.unshift([t]):this.#d[0].unshift(t),this.#f=0,this.#d.map((e=>e.join(" > "))).join(" ")}gte(e,t){return++this.#f,1===t.querySelectorAll(e).length}}class a{#w=[[]];#u;#f=0;constructor(e=[]){this.#u=e}inc(e){return e.getRootNode()}self(e){return e instanceof ShadowRoot?e.host:e}valueOf(e){const t=c([e,e.getRootNode()],new l(this.#u));return this.#f>1?this.#w.unshift([t]):this.#w[0].unshift(t),this.#f=0,this.#w}gte(e,t){return++this.#f,1===((e,t)=>{const n=[],o=e=>{const s=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT);do{const i=s.currentNode;i.shadowRoot&&o(i.shadowRoot),i instanceof ShadowRoot||i!==e&&i.matches(t)&&n.push(i)}while(s.nextNode())};return e instanceof Document&&(e=e.documentElement),o(e),n})(t,e[0][0]).length}}const h=new Set(["checkbox","image","radio"]),d=new Set(["SCRIPT","STYLE"]),u=new WeakMap,f=e=>{for(;e;)u.delete(e),e=e instanceof ShadowRoot?e.host:e.parentNode},w=new WeakSet,m=new MutationObserver((e=>{for(const t of e)f(t.target)})),g=e=>{var t,n;let o=u.get(e);if(o)return o;if(o={full:"",immediate:[]},!(e=>{var t;return!d.has(e.nodeName)&&!(null===(t=document.head)||void 0===t?void 0:t.contains(e))})(e))return o;let s="";if((i=e)instanceof HTMLSelectElement||i instanceof HTMLTextAreaElement||i instanceof HTMLInputElement&&!h.has(i.type))o.full=e.value,o.immediate.push(e.value),e.addEventListener("input",(e=>{f(e.target)}),{once:!0,capture:!0});else{for(let i=e.firstChild;i;i=i.nextSibling)i.nodeType!==Node.TEXT_NODE?(s&&o.immediate.push(s),s="",i.nodeType===Node.ELEMENT_NODE&&(o.full+=g(i).full)):(o.full+=null!==(t=i.nodeValue)&&void 0!==t?t:"",s+=null!==(n=i.nodeValue)&&void 0!==n?n:"");s&&o.immediate.push(s),e instanceof Element&&e.shadowRoot&&(o.full+=g(e.shadowRoot).full),w.has(e)||(m.observe(e,{childList:!0,characterData:!0}),w.add(e))}var i;return u.set(e,o),o},p=(e,t)=>{let n=[];for(const o of e.childNodes)if(o instanceof Element){let e;e=o.shadowRoot?p(o.shadowRoot,t):p(o,t),n=n.concat(e)}return n.length>0?n:e instanceof Element&&g(e).full.includes(t)?[e]:[]},E=(e,t=1/0)=>{const n=[];for(const o of e){if(t<=0)break;n.push(o),--t}return n},S=(e,t)=>`//*[@${e}=${JSON.stringify(t)}]`,N=(e,t,n=[])=>{let o;switch(e.nodeType){case Node.ELEMENT_NODE:if(!(e instanceof Element))return;if(t)for(const t of n)if(o=e.getAttribute(t)??"",o)return new s(S(t,o),!0);if(e.id)return new s(S("id",e.id),!0);o=e.localName;break;case Node.ATTRIBUTE_NODE:o="@"+e.nodeName;break;case Node.TEXT_NODE:case Node.CDATA_SECTION_NODE:o="text()";break;case Node.PROCESSING_INSTRUCTION_NODE:o="processing-instruction()";break;case Node.COMMENT_NODE:o="comment()";break;case Node.DOCUMENT_NODE:default:o=""}const i=T(e);return i>0&&(o+=`[${i}]`),new s(o,e.nodeType===Node.DOCUMENT_NODE)},T=e=>{function t(e,t){return e===t||(e instanceof Element&&t instanceof Element?e.localName===t.localName:e.nodeType===t.nodeType||(e.nodeType===Node.CDATA_SECTION_NODE?Node.TEXT_NODE:e.nodeType)===(t.nodeType===Node.CDATA_SECTION_NODE?Node.TEXT_NODE:t.nodeType))}const n=e.parentNode?e.parentNode.children:null;if(!n)return 0;let o;for(let s=0;s<n.length;++s)if(t(e,n[s])&&n[s]!==e){o=!0;break}if(!o)return 0;let s=1;for(let o=0;o<n.length;++o)if(t(e,n[o])){if(n[o]===e)return s;++s}throw new Error("This is impossible; a child must be the child of the parent")},v=(e,t)=>{if(void 0!==e)return"string"==typeof e?`${t}/${e}`:e.map((e=>`${t}/${e}`))};class y{#m=["data-testid","data-test","data-qa","data-cy","data-test-id","data-qa-id","data-testing"];#i;#g;#p=new n;#E;constructor(e,t,n="",o){this.#i=e,this.#g=t;let s=["aria","css","xpath","pierce","text"];n&&(this.#m.unshift(n),s=["css","xpath","pierce","aria","text"]),this.#E=s.filter((e=>!o||o.includes(e))).map((e=>{switch(e){case"css":return this.getCSSSelector.bind(this);case"xpath":return this.getXPathSelector.bind(this);case"pierce":return this.getPierceSelector.bind(this);case"aria":return this.getARIASelector.bind(this);case"text":return this.getTextSelector.bind(this);default:throw new Error("Unknown selector type: "+e)}}))}getSelectors(e){const t=[];for(const n of this.#E){const o=n(e);o&&t.push(o)}return t}getCSSSelector(e){return this.#g.timed(`getCSSSelector: ${this.#p.getOrInsert(e)} ${e.nodeName}`,(()=>((e,t)=>{const n=[];try{let o;for(;e instanceof Element;)o=e.getRootNode(),n.unshift(c([e,o],new l(t))),e=o instanceof ShadowRoot?o.host:o}catch{return}return n})(e,this.#m)))}getTextSelector(e){return this.#g.timed(`getTextSelector: ${this.#p.getOrInsert(e)} ${e.nodeName}`,(()=>v((e=>{const t=g(e).full.trim();if(!t)return;if(t.length<=12){const n=E(p(document,t),2);if(1!==n.length||n[0]!==e)return;return[t]}if(t.length>64)return;let n=12,o=t.length;for(;n<=o;){const s=n+(o-n>>2),i=E(p(document,t.slice(0,s)),2);1!==i.length||i[0]!==e?n=s+1:o=s-1}if(o===t.length)return;const s=o+1,i=t.slice(s,s+64);return[t.slice(0,s+i.search(/ |$/))]})(e),"text")))}getXPathSelector(e){return this.#g.timed(`getXPathSelector: ${this.#p.getOrInsert(e)} ${e.nodeName}`,(()=>v(((e,t,n)=>{if(e.nodeType===Node.DOCUMENT_NODE)return"/";const o=[],s=[];let i=e;for(;i!==document&&i;){const e=N(i,true,n);if(!e)return;s.unshift(e),i=e.optimized?i.getRootNode():i.parentNode,i instanceof ShadowRoot&&(o.unshift((s[0].optimized?"":"/")+s.join("/")),s.splice(0,s.length),i=i.host)}return s.length&&o.unshift((s[0].optimized?"":"/")+s.join("/")),!o.length||o.length>1?void 0:o})(e,0,this.#m),"xpath")))}getPierceSelector(e){return this.#g.timed(`getPierceSelector: ${this.#p.getOrInsert(e)} ${e.nodeName}`,(()=>v(((e,t)=>{try{const n=new a(t);return c([e,document],n).flat()}catch{return}})(e,this.#m),"pierce")))}getARIASelector(e){return this.#g.timed(`getARIASelector: ${this.#p.getOrInsert(e)} ${e.nodeName}`,(()=>v(((e,t)=>new o(t).compute(e))(e,this.#i),"aria")))}}const k=e=>{e.preventDefault(),e.stopImmediatePropagation()},b=(e,t)=>{const n=t.getBoundingClientRect();return{offsetX:e.clientX-n.x,offsetY:e.clientY-n.y}},R=e=>{for(const t of e.composedPath()){if(!(t instanceof Element))continue;const e=t.getBoundingClientRect();if(0!==e.width&&0!==e.height)return t}throw new Error(`No target is found in event of type ${e.type}`)},O=e=>Object.values(e).filter((e=>Boolean(e))).length.toString();class L{static defaultSetupOptions=Object.freeze({debug:!1,allowUntrustedEvents:!1,selectorTypesToRecord:["aria","css","text","xpath","pierce"]});#S;#N=e=>e.isTrusted;#T=[];#g;constructor(e,n=L.defaultSetupOptions){this.#g=new t(n.debug?"debug":"silent"),this.#g.log("creating a RecordingClient"),this.#S=new y(e,this.#g,n.selectorAttribute,n.selectorTypesToRecord),n.allowUntrustedEvents&&(this.#N=()=>!0),this.#T=n.stopShortcuts??[]}start=()=>{this.#g.log("Setting up recording listeners"),window.addEventListener("keydown",this.#v,!0),window.addEventListener("beforeinput",this.#y,!0),window.addEventListener("input",this.#k,!0),window.addEventListener("keyup",this.#b,!0),window.addEventListener("pointerdown",this.#R,!0),window.addEventListener("click",this.#O,!0),window.addEventListener("auxclick",this.#O,!0),window.addEventListener("beforeunload",this.#L,!0)};stop=()=>{this.#g.log("Tearing down client listeners"),window.removeEventListener("keydown",this.#v,!0),window.removeEventListener("beforeinput",this.#y,!0),window.removeEventListener("input",this.#k,!0),window.removeEventListener("keyup",this.#b,!0),window.removeEventListener("pointerdown",this.#R,!0),window.removeEventListener("click",this.#O,!0),window.removeEventListener("auxclick",this.#O,!0),window.removeEventListener("beforeunload",this.#L,!0)};getSelectors=e=>this.#S.getSelectors(e);getCSSSelector=e=>this.#S.getCSSSelector(e);getTextSelector=e=>this.#S.getTextSelector(e);queryCSSSelectorAllForTesting=e=>(e=>{if("string"==typeof e)e=[e];else if(0===e.length)return[];let t=[[document.documentElement]];do{const n=e.shift(),o=[];for(const e of t)for(const t of e){const e=(t.shadowRoot??t).querySelectorAll(n);e.length>0&&o.push(e)}t=o}while(e.length>0&&t.length>0);return t.flatMap((e=>[...e]))})(e);#C=e=>{for(const t of this.#T??[])if(e.shiftKey===t.shift&&e.ctrlKey===t.ctrl&&e.metaKey===t.meta&&e.keyCode===t.keyCode)return this.stop(),k(e),window.stopShortcut(O(t)),!0;return!1};#$={element:document.documentElement,selectors:[]};#D=e=>{const t=e.composedPath()[0];!function(e){if(!e)throw new Error("Assertion failed!")}(t instanceof Element),this.#$.element!==t&&(this.#$={element:t,selectors:this.getSelectors(t)})};#v=e=>{this.#N(e)&&(this.#C(e)||(this.#D(e),this.#_({type:"keyDown",key:e.key})))};#y=e=>{this.#N(e)&&this.#D(e)};#k=e=>{if(!this.#N(e))return;if(this.#D(e),(e=>{if(e instanceof HTMLInputElement)switch(e.type){case"checkbox":case"radio":return!0}return!1})(this.#$.element))return;const{element:t,selectors:n}=this.#$;this.#_({type:"change",selectors:n,value:"value"in t?t.value:t.textContent})};#b=e=>{this.#N(e)&&this.#_({type:"keyUp",key:e.key})};#x={element:document.documentElement,selectors:[]};#A=e=>{const t=R(e);this.#x.element!==t&&(this.#x={element:t,selectors:this.#S.getSelectors(t)})};#M=0;#R=e=>{this.#N(e)&&(this.#M=e.timeStamp,this.#A(e))};#O=e=>{if(!this.#N(e))return;this.#A(e);const t=((e,t)=>{let n;if(e instanceof PointerEvent)switch(e.pointerType){case"mouse":break;case"pen":case"touch":n=e.pointerType;break;default:return}const{offsetX:o,offsetY:s}=b(e,t);if(!(o<0||s<0))return{button:["auxiliary","secondary","back","forward"][e.button-1],deviceType:n,offsetX:o,offsetY:s}})(e,this.#x.element);if(!t)return;const n=e.timeStamp-this.#M;this.#_({type:2===e.detail?"doubleClick":"click",selectors:this.#x.selectors,duration:n>350?n:void 0,...t})};#L=e=>{this.#g.log("Unloading..."),this.#N(e)&&this.#_({type:"beforeUnload"})};#_=e=>{const t=JSON.stringify(e);this.#g.log(`Adding step: ${t}`),window.addStep(t)}}class C{#g;#S;constructor(e,n="",o=!0){this.#g=new t(o?"debug":"silent"),this.#g.log("Creating a SelectorPicker"),this.#S=new y(e,this.#g,n)}#I=e=>{k(e);const t=R(e);window.captureSelectors(JSON.stringify({selectors:this.#S.getSelectors(t),...b(e,t)}))};start=()=>{this.#g.log("Setting up selector listeners"),window.addEventListener("click",this.#I,!0),window.addEventListener("mousedown",k,!0),window.addEventListener("mouseup",k,!0)};stop=()=>{this.#g.log("Tearing down selector listeners"),window.removeEventListener("click",this.#I,!0),window.removeEventListener("mousedown",k,!0),window.removeEventListener("mouseup",k,!0)}}window.DevToolsRecorder||(window.DevToolsRecorder=new class{#P;startRecording(e,t){if(this.#P)throw new Error("Recording client already started.");if(this.#B)throw new Error("Selector picker is active.");this.#P=new L(e,t),this.#P.start()}stopRecording(){if(!this.#P)throw new Error("Recording client was not started.");this.#P.stop(),this.#P=void 0}get recordingClientForTesting(){if(!this.#P)throw new Error("Recording client was not started.");return this.#P}#B;startSelectorPicker(e,t,n){if(this.#B)throw new Error("Selector picker already started.");this.#P&&this.#P.stop(),this.#B=new C(e,t,n),this.#B.start()}stopSelectorPicker(){if(!this.#B)throw new Error("Selector picker was not started.");this.#B.stop(),this.#B=void 0,this.#P&&this.#P.start()}})}();
