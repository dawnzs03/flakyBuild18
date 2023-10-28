import*as t from"../../../core/platform/platform.js";import*as e from"../types/types.js";import*as i from"../../../core/common/common.js";function n(e,i,n){const r=n.get(i);if(!r||""===i)return null;const s=t.ArrayUtilities.nearestIndexFromEnd(r,(t=>t.ts<=e.ts));return null===s?null:r[s]}var r=Object.freeze({__proto__:null,extractOriginFromTrace:function(t){const e=i.ParsedURL.ParsedURL.fromString(t);return e?e.host.startsWith("www.")?e.host.slice(4):e.host:null},addEventToProcessThread:function(t,e){const{tid:i,pid:n}=t;let r=e.get(n);r||(r=new Map);let s=r.get(i);s||(s=[]),s.push(t),r.set(t.tid,s),e.set(t.pid,r)},sortTraceEventsInPlace:function(t){t.sort(((t,e)=>{const i=t.ts,n=e.ts;if(i<n)return-1;if(i>n)return 1;const r=i+(t.dur??0),s=n+(e.dur??0);return r>s?-1:r<s?1:0}))},getNavigationForTraceEvent:n,extractId:function(t){return t.id||t.id2?.global||t.id2?.local}});const s=t=>e.Timing.MicroSeconds(1e3*t),o=t=>e.Timing.MilliSeconds(1e3*t);function a(t){if(t<1e3)return 0;const e=t/1e3;if(e<1e3)return 1;return e/1e3<60?2:3}const l={style:"unit",unit:"millisecond",unitDisplay:"narrow"},c=t=>JSON.stringify(t),u=t=>new Intl.NumberFormat(navigator.language,t?JSON.parse(t):{}),m=new Map;t.MapUtilities.getWithDefault(m,c({style:"decimal"}),u),t.MapUtilities.getWithDefault(m,c(l),u),t.MapUtilities.getWithDefault(m,c({...l,unit:"second"}),u),t.MapUtilities.getWithDefault(m,c({...l,unit:"minute"}),u);var d=Object.freeze({__proto__:null,millisecondsToMicroseconds:s,secondsToMilliseconds:o,secondsToMicroseconds:t=>s(o(t)),microSecondsToMilliseconds:t=>e.Timing.MilliSeconds(t/1e3),detectBestTimeUnit:a,formatMicrosecondsTime:function(e,i={}){i.format||(i.format=a(e));const n=e/1e3,r=n/1e3,s={...l,...i};switch(i.format){case 0:return`${t.MapUtilities.getWithDefault(m,c({style:"decimal"}),u).format(e)}μs`;case 1:return t.MapUtilities.getWithDefault(m,c(s),u).format(n);case 2:return t.MapUtilities.getWithDefault(m,c({...s,unit:"second"}),u).format(r);default:{const e=t.MapUtilities.getWithDefault(m,c({...s,unit:"minute"}),u),i=t.MapUtilities.getWithDefault(m,c({...s,unit:"second"}),u),n=r/60,[o,a,l]=e.formatToParts(n);let d=0;return a&&l&&(d=Math.round(60*Number(`0.${l.value}`))),`${e.format(Number(o.value))} ${i.format(d)}`}}},timeStampForEventAdjustedByClosestNavigation:function(t,i,r,s){let o=t.ts-i.min;if(t.args?.data?.navigationId){const e=r.get(t.args.data.navigationId);e&&(o=t.ts-e.ts)}else if(t.args?.data?.frame){const e=n(t,t.args.data.frame,s);e&&(o=t.ts-e.ts)}return e.Timing.MicroSeconds(o)}});export{d as Timing,r as Trace};
