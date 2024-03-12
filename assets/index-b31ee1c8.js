function ex(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const o=Object.getOwnPropertyDescriptor(i,r);o&&Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function od(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var yg={exports:{}},ic={},Sg={exports:{}},je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ua=Symbol.for("react.element"),tx=Symbol.for("react.portal"),nx=Symbol.for("react.fragment"),ix=Symbol.for("react.strict_mode"),rx=Symbol.for("react.profiler"),ox=Symbol.for("react.provider"),sx=Symbol.for("react.context"),ax=Symbol.for("react.forward_ref"),lx=Symbol.for("react.suspense"),cx=Symbol.for("react.memo"),ux=Symbol.for("react.lazy"),Sh=Symbol.iterator;function fx(t){return t===null||typeof t!="object"?null:(t=Sh&&t[Sh]||t["@@iterator"],typeof t=="function"?t:null)}var Eg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mg=Object.assign,Tg={};function Jo(t,e,n){this.props=t,this.context=e,this.refs=Tg,this.updater=n||Eg}Jo.prototype.isReactComponent={};Jo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Jo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function wg(){}wg.prototype=Jo.prototype;function sd(t,e,n){this.props=t,this.context=e,this.refs=Tg,this.updater=n||Eg}var ad=sd.prototype=new wg;ad.constructor=sd;Mg(ad,Jo.prototype);ad.isPureReactComponent=!0;var Eh=Array.isArray,Ag=Object.prototype.hasOwnProperty,ld={current:null},Cg={key:!0,ref:!0,__self:!0,__source:!0};function bg(t,e,n){var i,r={},o=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)Ag.call(e,i)&&!Cg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ua,type:t,key:o,ref:s,props:r,_owner:ld.current}}function dx(t,e){return{$$typeof:ua,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function cd(t){return typeof t=="object"&&t!==null&&t.$$typeof===ua}function hx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Mh=/\/+/g;function Ic(t,e){return typeof t=="object"&&t!==null&&t.key!=null?hx(""+t.key):e.toString(36)}function cl(t,e,n,i,r){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case ua:case tx:s=!0}}if(s)return s=t,r=r(s),t=i===""?"."+Ic(s,0):i,Eh(r)?(n="",t!=null&&(n=t.replace(Mh,"$&/")+"/"),cl(r,e,n,"",function(c){return c})):r!=null&&(cd(r)&&(r=dx(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(Mh,"$&/")+"/")+t)),e.push(r)),1;if(s=0,i=i===""?".":i+":",Eh(t))for(var a=0;a<t.length;a++){o=t[a];var l=i+Ic(o,a);s+=cl(o,e,n,l,r)}else if(l=fx(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=i+Ic(o,a++),s+=cl(o,e,n,l,r);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Sa(t,e,n){if(t==null)return t;var i=[],r=0;return cl(t,i,"","",function(o){return e.call(n,o,r++)}),i}function px(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Zt={current:null},ul={transition:null},mx={ReactCurrentDispatcher:Zt,ReactCurrentBatchConfig:ul,ReactCurrentOwner:ld};je.Children={map:Sa,forEach:function(t,e,n){Sa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Sa(t,function(){e++}),e},toArray:function(t){return Sa(t,function(e){return e})||[]},only:function(t){if(!cd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};je.Component=Jo;je.Fragment=nx;je.Profiler=rx;je.PureComponent=sd;je.StrictMode=ix;je.Suspense=lx;je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mx;je.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Mg({},t.props),r=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=ld.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Ag.call(e,l)&&!Cg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ua,type:t.type,key:r,ref:o,props:i,_owner:s}};je.createContext=function(t){return t={$$typeof:sx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ox,_context:t},t.Consumer=t};je.createElement=bg;je.createFactory=function(t){var e=bg.bind(null,t);return e.type=t,e};je.createRef=function(){return{current:null}};je.forwardRef=function(t){return{$$typeof:ax,render:t}};je.isValidElement=cd;je.lazy=function(t){return{$$typeof:ux,_payload:{_status:-1,_result:t},_init:px}};je.memo=function(t,e){return{$$typeof:cx,type:t,compare:e===void 0?null:e}};je.startTransition=function(t){var e=ul.transition;ul.transition={};try{t()}finally{ul.transition=e}};je.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};je.useCallback=function(t,e){return Zt.current.useCallback(t,e)};je.useContext=function(t){return Zt.current.useContext(t)};je.useDebugValue=function(){};je.useDeferredValue=function(t){return Zt.current.useDeferredValue(t)};je.useEffect=function(t,e){return Zt.current.useEffect(t,e)};je.useId=function(){return Zt.current.useId()};je.useImperativeHandle=function(t,e,n){return Zt.current.useImperativeHandle(t,e,n)};je.useInsertionEffect=function(t,e){return Zt.current.useInsertionEffect(t,e)};je.useLayoutEffect=function(t,e){return Zt.current.useLayoutEffect(t,e)};je.useMemo=function(t,e){return Zt.current.useMemo(t,e)};je.useReducer=function(t,e,n){return Zt.current.useReducer(t,e,n)};je.useRef=function(t){return Zt.current.useRef(t)};je.useState=function(t){return Zt.current.useState(t)};je.useSyncExternalStore=function(t,e,n){return Zt.current.useSyncExternalStore(t,e,n)};je.useTransition=function(){return Zt.current.useTransition()};je.version="18.2.0";Sg.exports=je;var ae=Sg.exports;const tr=od(ae),gx=ex({__proto__:null,default:tr},[ae]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vx=ae,_x=Symbol.for("react.element"),xx=Symbol.for("react.fragment"),yx=Object.prototype.hasOwnProperty,Sx=vx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ex={key:!0,ref:!0,__self:!0,__source:!0};function Rg(t,e,n){var i,r={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)yx.call(e,i)&&!Ex.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:_x,type:t,key:o,ref:s,props:r,_owner:Sx.current}}ic.Fragment=xx;ic.jsx=Rg;ic.jsxs=Rg;yg.exports=ic;var k=yg.exports,ju={},Pg={exports:{}},vn={},Lg={exports:{}},Dg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,W){var N=L.length;L.push(W);e:for(;0<N;){var U=N-1>>>1,z=L[U];if(0<r(z,W))L[U]=W,L[N]=z,N=U;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var W=L[0],N=L.pop();if(N!==W){L[0]=N;e:for(var U=0,z=L.length,ce=z>>>1;U<ce;){var re=2*(U+1)-1,fe=L[re],xe=re+1,Se=L[xe];if(0>r(fe,N))xe<z&&0>r(Se,fe)?(L[U]=Se,L[xe]=N,U=xe):(L[U]=fe,L[re]=N,U=re);else if(xe<z&&0>r(Se,N))L[U]=Se,L[xe]=N,U=xe;else break e}}return W}function r(L,W){var N=L.sortIndex-W.sortIndex;return N!==0?N:L.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],c=[],u=1,d=null,h=3,m=!1,_=!1,x=!1,p=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(L){for(var W=n(c);W!==null;){if(W.callback===null)i(c);else if(W.startTime<=L)i(c),W.sortIndex=W.expirationTime,e(l,W);else break;W=n(c)}}function y(L){if(x=!1,v(L),!_)if(n(l)!==null)_=!0,J(M);else{var W=n(c);W!==null&&Y(y,W.startTime-L)}}function M(L,W){_=!1,x&&(x=!1,f(D),D=-1),m=!0;var N=h;try{for(v(W),d=n(l);d!==null&&(!(d.expirationTime>W)||L&&!Z());){var U=d.callback;if(typeof U=="function"){d.callback=null,h=d.priorityLevel;var z=U(d.expirationTime<=W);W=t.unstable_now(),typeof z=="function"?d.callback=z:d===n(l)&&i(l),v(W)}else i(l);d=n(l)}if(d!==null)var ce=!0;else{var re=n(c);re!==null&&Y(y,re.startTime-W),ce=!1}return ce}finally{d=null,h=N,m=!1}}var C=!1,E=null,D=-1,T=5,A=-1;function Z(){return!(t.unstable_now()-A<T)}function ee(){if(E!==null){var L=t.unstable_now();A=L;var W=!0;try{W=E(!0,L)}finally{W?H():(C=!1,E=null)}}else C=!1}var H;if(typeof g=="function")H=function(){g(ee)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,X=$.port2;$.port1.onmessage=ee,H=function(){X.postMessage(null)}}else H=function(){p(ee,0)};function J(L){E=L,C||(C=!0,H())}function Y(L,W){D=p(function(){L(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,J(M))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(h){case 1:case 2:case 3:var W=3;break;default:W=h}var N=h;h=W;try{return L()}finally{h=N}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,W){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var N=h;h=L;try{return W()}finally{h=N}},t.unstable_scheduleCallback=function(L,W,N){var U=t.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?U+N:U):N=U,L){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=N+z,L={id:u++,callback:W,priorityLevel:L,startTime:N,expirationTime:z,sortIndex:-1},N>U?(L.sortIndex=N,e(c,L),n(l)===null&&L===n(c)&&(x?(f(D),D=-1):x=!0,Y(y,N-U))):(L.sortIndex=z,e(l,L),_||m||(_=!0,J(M))),L},t.unstable_shouldYield=Z,t.unstable_wrapCallback=function(L){var W=h;return function(){var N=h;h=W;try{return L.apply(this,arguments)}finally{h=N}}}})(Dg);Lg.exports=Dg;var Mx=Lg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ug=ae,gn=Mx;function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ig=new Set,Bs={};function Hr(t,e){Fo(t,e),Fo(t+"Capture",e)}function Fo(t,e){for(Bs[t]=e,t=0;t<e.length;t++)Ig.add(e[t])}var yi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xu=Object.prototype.hasOwnProperty,Tx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Th={},wh={};function wx(t){return Xu.call(wh,t)?!0:Xu.call(Th,t)?!1:Tx.test(t)?wh[t]=!0:(Th[t]=!0,!1)}function Ax(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Cx(t,e,n,i){if(e===null||typeof e>"u"||Ax(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Qt(t,e,n,i,r,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var Ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ot[t]=new Qt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ot[e]=new Qt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ot[t]=new Qt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ot[t]=new Qt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ot[t]=new Qt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ot[t]=new Qt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ot[t]=new Qt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ot[t]=new Qt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ot[t]=new Qt(t,5,!1,t.toLowerCase(),null,!1,!1)});var ud=/[\-:]([a-z])/g;function fd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ud,fd);Ot[e]=new Qt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ud,fd);Ot[e]=new Qt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ud,fd);Ot[e]=new Qt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ot[t]=new Qt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ot.xlinkHref=new Qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ot[t]=new Qt(t,1,!1,t.toLowerCase(),null,!0,!0)});function dd(t,e,n,i){var r=Ot.hasOwnProperty(e)?Ot[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Cx(e,n,r,i)&&(n=null),i||r===null?wx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ti=Ug.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ea=Symbol.for("react.element"),mo=Symbol.for("react.portal"),go=Symbol.for("react.fragment"),hd=Symbol.for("react.strict_mode"),$u=Symbol.for("react.profiler"),Ng=Symbol.for("react.provider"),Og=Symbol.for("react.context"),pd=Symbol.for("react.forward_ref"),Yu=Symbol.for("react.suspense"),qu=Symbol.for("react.suspense_list"),md=Symbol.for("react.memo"),Di=Symbol.for("react.lazy"),Fg=Symbol.for("react.offscreen"),Ah=Symbol.iterator;function ls(t){return t===null||typeof t!="object"?null:(t=Ah&&t[Ah]||t["@@iterator"],typeof t=="function"?t:null)}var ut=Object.assign,Nc;function ys(t){if(Nc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Nc=e&&e[1]||""}return`
`+Nc+t}var Oc=!1;function Fc(t,e){if(!t||Oc)return"";Oc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),o=i.stack.split(`
`),s=r.length-1,a=o.length-1;1<=s&&0<=a&&r[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(r[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||r[s]!==o[a]){var l=`
`+r[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{Oc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ys(t):""}function bx(t){switch(t.tag){case 5:return ys(t.type);case 16:return ys("Lazy");case 13:return ys("Suspense");case 19:return ys("SuspenseList");case 0:case 2:case 15:return t=Fc(t.type,!1),t;case 11:return t=Fc(t.type.render,!1),t;case 1:return t=Fc(t.type,!0),t;default:return""}}function Ku(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case go:return"Fragment";case mo:return"Portal";case $u:return"Profiler";case hd:return"StrictMode";case Yu:return"Suspense";case qu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Og:return(t.displayName||"Context")+".Consumer";case Ng:return(t._context.displayName||"Context")+".Provider";case pd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case md:return e=t.displayName||null,e!==null?e:Ku(t.type)||"Memo";case Di:e=t._payload,t=t._init;try{return Ku(t(e))}catch{}}return null}function Rx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ku(e);case 8:return e===hd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function nr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function kg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Px(t){var e=kg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ma(t){t._valueTracker||(t._valueTracker=Px(t))}function zg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=kg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Al(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Zu(t,e){var n=e.checked;return ut({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ch(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=nr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Bg(t,e){e=e.checked,e!=null&&dd(t,"checked",e,!1)}function Qu(t,e){Bg(t,e);var n=nr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ju(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ju(t,e.type,nr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function bh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ju(t,e,n){(e!=="number"||Al(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ss=Array.isArray;function Ro(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+nr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function ef(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return ut({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Rh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(Ss(n)){if(1<n.length)throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:nr(n)}}function Hg(t,e){var n=nr(e.value),i=nr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Ph(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Gg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function tf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Gg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ta,Vg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ta=Ta||document.createElement("div"),Ta.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ta.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Hs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Cs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Lx=["Webkit","ms","Moz","O"];Object.keys(Cs).forEach(function(t){Lx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Cs[e]=Cs[t]})});function Wg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Cs.hasOwnProperty(t)&&Cs[t]?(""+e).trim():e+"px"}function jg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Wg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Dx=ut({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nf(t,e){if(e){if(Dx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function rf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var of=null;function gd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var sf=null,Po=null,Lo=null;function Lh(t){if(t=ha(t)){if(typeof sf!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=lc(e),sf(t.stateNode,t.type,e))}}function Xg(t){Po?Lo?Lo.push(t):Lo=[t]:Po=t}function $g(){if(Po){var t=Po,e=Lo;if(Lo=Po=null,Lh(t),e)for(t=0;t<e.length;t++)Lh(e[t])}}function Yg(t,e){return t(e)}function qg(){}var kc=!1;function Kg(t,e,n){if(kc)return t(e,n);kc=!0;try{return Yg(t,e,n)}finally{kc=!1,(Po!==null||Lo!==null)&&(qg(),$g())}}function Gs(t,e){var n=t.stateNode;if(n===null)return null;var i=lc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var af=!1;if(yi)try{var cs={};Object.defineProperty(cs,"passive",{get:function(){af=!0}}),window.addEventListener("test",cs,cs),window.removeEventListener("test",cs,cs)}catch{af=!1}function Ux(t,e,n,i,r,o,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var bs=!1,Cl=null,bl=!1,lf=null,Ix={onError:function(t){bs=!0,Cl=t}};function Nx(t,e,n,i,r,o,s,a,l){bs=!1,Cl=null,Ux.apply(Ix,arguments)}function Ox(t,e,n,i,r,o,s,a,l){if(Nx.apply(this,arguments),bs){if(bs){var c=Cl;bs=!1,Cl=null}else throw Error(ne(198));bl||(bl=!0,lf=c)}}function Gr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Zg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Dh(t){if(Gr(t)!==t)throw Error(ne(188))}function Fx(t){var e=t.alternate;if(!e){if(e=Gr(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return Dh(r),t;if(o===i)return Dh(r),e;o=o.sibling}throw Error(ne(188))}if(n.return!==i.return)n=r,i=o;else{for(var s=!1,a=r.child;a;){if(a===n){s=!0,n=r,i=o;break}if(a===i){s=!0,i=r,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,i=r;break}if(a===i){s=!0,i=o,n=r;break}a=a.sibling}if(!s)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function Qg(t){return t=Fx(t),t!==null?Jg(t):null}function Jg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Jg(t);if(e!==null)return e;t=t.sibling}return null}var e0=gn.unstable_scheduleCallback,Uh=gn.unstable_cancelCallback,kx=gn.unstable_shouldYield,zx=gn.unstable_requestPaint,pt=gn.unstable_now,Bx=gn.unstable_getCurrentPriorityLevel,vd=gn.unstable_ImmediatePriority,t0=gn.unstable_UserBlockingPriority,Rl=gn.unstable_NormalPriority,Hx=gn.unstable_LowPriority,n0=gn.unstable_IdlePriority,rc=null,Jn=null;function Gx(t){if(Jn&&typeof Jn.onCommitFiberRoot=="function")try{Jn.onCommitFiberRoot(rc,t,void 0,(t.current.flags&128)===128)}catch{}}var Vn=Math.clz32?Math.clz32:jx,Vx=Math.log,Wx=Math.LN2;function jx(t){return t>>>=0,t===0?32:31-(Vx(t)/Wx|0)|0}var wa=64,Aa=4194304;function Es(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Pl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~r;a!==0?i=Es(a):(o&=s,o!==0&&(i=Es(o)))}else s=n&~r,s!==0?i=Es(s):o!==0&&(i=Es(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Vn(e),r=1<<n,i|=t[n],e&=~r;return i}function Xx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $x(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-Vn(o),a=1<<s,l=r[s];l===-1?(!(a&n)||a&i)&&(r[s]=Xx(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function cf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function i0(){var t=wa;return wa<<=1,!(wa&4194240)&&(wa=64),t}function zc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function fa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Vn(e),t[e]=n}function Yx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Vn(n),o=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~o}}function _d(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Vn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ze=0;function r0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var o0,xd,s0,a0,l0,uf=!1,Ca=[],Vi=null,Wi=null,ji=null,Vs=new Map,Ws=new Map,Oi=[],qx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ih(t,e){switch(t){case"focusin":case"focusout":Vi=null;break;case"dragenter":case"dragleave":Wi=null;break;case"mouseover":case"mouseout":ji=null;break;case"pointerover":case"pointerout":Vs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ws.delete(e.pointerId)}}function us(t,e,n,i,r,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=ha(e),e!==null&&xd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Kx(t,e,n,i,r){switch(e){case"focusin":return Vi=us(Vi,t,e,n,i,r),!0;case"dragenter":return Wi=us(Wi,t,e,n,i,r),!0;case"mouseover":return ji=us(ji,t,e,n,i,r),!0;case"pointerover":var o=r.pointerId;return Vs.set(o,us(Vs.get(o)||null,t,e,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,Ws.set(o,us(Ws.get(o)||null,t,e,n,i,r)),!0}return!1}function c0(t){var e=yr(t.target);if(e!==null){var n=Gr(e);if(n!==null){if(e=n.tag,e===13){if(e=Zg(n),e!==null){t.blockedOn=e,l0(t.priority,function(){s0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function fl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ff(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);of=i,n.target.dispatchEvent(i),of=null}else return e=ha(n),e!==null&&xd(e),t.blockedOn=n,!1;e.shift()}return!0}function Nh(t,e,n){fl(t)&&n.delete(e)}function Zx(){uf=!1,Vi!==null&&fl(Vi)&&(Vi=null),Wi!==null&&fl(Wi)&&(Wi=null),ji!==null&&fl(ji)&&(ji=null),Vs.forEach(Nh),Ws.forEach(Nh)}function fs(t,e){t.blockedOn===e&&(t.blockedOn=null,uf||(uf=!0,gn.unstable_scheduleCallback(gn.unstable_NormalPriority,Zx)))}function js(t){function e(r){return fs(r,t)}if(0<Ca.length){fs(Ca[0],t);for(var n=1;n<Ca.length;n++){var i=Ca[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Vi!==null&&fs(Vi,t),Wi!==null&&fs(Wi,t),ji!==null&&fs(ji,t),Vs.forEach(e),Ws.forEach(e),n=0;n<Oi.length;n++)i=Oi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Oi.length&&(n=Oi[0],n.blockedOn===null);)c0(n),n.blockedOn===null&&Oi.shift()}var Do=Ti.ReactCurrentBatchConfig,Ll=!0;function Qx(t,e,n,i){var r=Ze,o=Do.transition;Do.transition=null;try{Ze=1,yd(t,e,n,i)}finally{Ze=r,Do.transition=o}}function Jx(t,e,n,i){var r=Ze,o=Do.transition;Do.transition=null;try{Ze=4,yd(t,e,n,i)}finally{Ze=r,Do.transition=o}}function yd(t,e,n,i){if(Ll){var r=ff(t,e,n,i);if(r===null)qc(t,e,i,Dl,n),Ih(t,i);else if(Kx(r,t,e,n,i))i.stopPropagation();else if(Ih(t,i),e&4&&-1<qx.indexOf(t)){for(;r!==null;){var o=ha(r);if(o!==null&&o0(o),o=ff(t,e,n,i),o===null&&qc(t,e,i,Dl,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else qc(t,e,i,null,n)}}var Dl=null;function ff(t,e,n,i){if(Dl=null,t=gd(i),t=yr(t),t!==null)if(e=Gr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Zg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Dl=t,null}function u0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Bx()){case vd:return 1;case t0:return 4;case Rl:case Hx:return 16;case n0:return 536870912;default:return 16}default:return 16}}var ki=null,Sd=null,dl=null;function f0(){if(dl)return dl;var t,e=Sd,n=e.length,i,r="value"in ki?ki.value:ki.textContent,o=r.length;for(t=0;t<n&&e[t]===r[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===r[o-i];i++);return dl=r.slice(t,1<i?1-i:void 0)}function hl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ba(){return!0}function Oh(){return!1}function _n(t){function e(n,i,r,o,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ba:Oh,this.isPropagationStopped=Oh,this}return ut(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ba)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ba)},persist:function(){},isPersistent:ba}),e}var es={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ed=_n(es),da=ut({},es,{view:0,detail:0}),ey=_n(da),Bc,Hc,ds,oc=ut({},da,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Md,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ds&&(ds&&t.type==="mousemove"?(Bc=t.screenX-ds.screenX,Hc=t.screenY-ds.screenY):Hc=Bc=0,ds=t),Bc)},movementY:function(t){return"movementY"in t?t.movementY:Hc}}),Fh=_n(oc),ty=ut({},oc,{dataTransfer:0}),ny=_n(ty),iy=ut({},da,{relatedTarget:0}),Gc=_n(iy),ry=ut({},es,{animationName:0,elapsedTime:0,pseudoElement:0}),oy=_n(ry),sy=ut({},es,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ay=_n(sy),ly=ut({},es,{data:0}),kh=_n(ly),cy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=fy[t])?!!e[t]:!1}function Md(){return dy}var hy=ut({},da,{key:function(t){if(t.key){var e=cy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=hl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?uy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Md,charCode:function(t){return t.type==="keypress"?hl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?hl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),py=_n(hy),my=ut({},oc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zh=_n(my),gy=ut({},da,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Md}),vy=_n(gy),_y=ut({},es,{propertyName:0,elapsedTime:0,pseudoElement:0}),xy=_n(_y),yy=ut({},oc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Sy=_n(yy),Ey=[9,13,27,32],Td=yi&&"CompositionEvent"in window,Rs=null;yi&&"documentMode"in document&&(Rs=document.documentMode);var My=yi&&"TextEvent"in window&&!Rs,d0=yi&&(!Td||Rs&&8<Rs&&11>=Rs),Bh=String.fromCharCode(32),Hh=!1;function h0(t,e){switch(t){case"keyup":return Ey.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function p0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var vo=!1;function Ty(t,e){switch(t){case"compositionend":return p0(e);case"keypress":return e.which!==32?null:(Hh=!0,Bh);case"textInput":return t=e.data,t===Bh&&Hh?null:t;default:return null}}function wy(t,e){if(vo)return t==="compositionend"||!Td&&h0(t,e)?(t=f0(),dl=Sd=ki=null,vo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return d0&&e.locale!=="ko"?null:e.data;default:return null}}var Ay={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Ay[t.type]:e==="textarea"}function m0(t,e,n,i){Xg(i),e=Ul(e,"onChange"),0<e.length&&(n=new Ed("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ps=null,Xs=null;function Cy(t){A0(t,0)}function sc(t){var e=yo(t);if(zg(e))return t}function by(t,e){if(t==="change")return e}var g0=!1;if(yi){var Vc;if(yi){var Wc="oninput"in document;if(!Wc){var Vh=document.createElement("div");Vh.setAttribute("oninput","return;"),Wc=typeof Vh.oninput=="function"}Vc=Wc}else Vc=!1;g0=Vc&&(!document.documentMode||9<document.documentMode)}function Wh(){Ps&&(Ps.detachEvent("onpropertychange",v0),Xs=Ps=null)}function v0(t){if(t.propertyName==="value"&&sc(Xs)){var e=[];m0(e,Xs,t,gd(t)),Kg(Cy,e)}}function Ry(t,e,n){t==="focusin"?(Wh(),Ps=e,Xs=n,Ps.attachEvent("onpropertychange",v0)):t==="focusout"&&Wh()}function Py(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return sc(Xs)}function Ly(t,e){if(t==="click")return sc(e)}function Dy(t,e){if(t==="input"||t==="change")return sc(e)}function Uy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Xn=typeof Object.is=="function"?Object.is:Uy;function $s(t,e){if(Xn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Xu.call(e,r)||!Xn(t[r],e[r]))return!1}return!0}function jh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Xh(t,e){var n=jh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=jh(n)}}function _0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?_0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function x0(){for(var t=window,e=Al();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Al(t.document)}return e}function wd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Iy(t){var e=x0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&_0(n.ownerDocument.documentElement,n)){if(i!==null&&wd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!t.extend&&o>i&&(r=i,i=o,o=r),r=Xh(n,o);var s=Xh(n,i);r&&s&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ny=yi&&"documentMode"in document&&11>=document.documentMode,_o=null,df=null,Ls=null,hf=!1;function $h(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hf||_o==null||_o!==Al(i)||(i=_o,"selectionStart"in i&&wd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ls&&$s(Ls,i)||(Ls=i,i=Ul(df,"onSelect"),0<i.length&&(e=new Ed("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=_o)))}function Ra(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var xo={animationend:Ra("Animation","AnimationEnd"),animationiteration:Ra("Animation","AnimationIteration"),animationstart:Ra("Animation","AnimationStart"),transitionend:Ra("Transition","TransitionEnd")},jc={},y0={};yi&&(y0=document.createElement("div").style,"AnimationEvent"in window||(delete xo.animationend.animation,delete xo.animationiteration.animation,delete xo.animationstart.animation),"TransitionEvent"in window||delete xo.transitionend.transition);function ac(t){if(jc[t])return jc[t];if(!xo[t])return t;var e=xo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in y0)return jc[t]=e[n];return t}var S0=ac("animationend"),E0=ac("animationiteration"),M0=ac("animationstart"),T0=ac("transitionend"),w0=new Map,Yh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function or(t,e){w0.set(t,e),Hr(e,[t])}for(var Xc=0;Xc<Yh.length;Xc++){var $c=Yh[Xc],Oy=$c.toLowerCase(),Fy=$c[0].toUpperCase()+$c.slice(1);or(Oy,"on"+Fy)}or(S0,"onAnimationEnd");or(E0,"onAnimationIteration");or(M0,"onAnimationStart");or("dblclick","onDoubleClick");or("focusin","onFocus");or("focusout","onBlur");or(T0,"onTransitionEnd");Fo("onMouseEnter",["mouseout","mouseover"]);Fo("onMouseLeave",["mouseout","mouseover"]);Fo("onPointerEnter",["pointerout","pointerover"]);Fo("onPointerLeave",["pointerout","pointerover"]);Hr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Hr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Hr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Hr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Hr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Hr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ms="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ky=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ms));function qh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Ox(i,e,void 0,t),t.currentTarget=null}function A0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var s=i.length-1;0<=s;s--){var a=i[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==o&&r.isPropagationStopped())break e;qh(r,a,c),o=l}else for(s=0;s<i.length;s++){if(a=i[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==o&&r.isPropagationStopped())break e;qh(r,a,c),o=l}}}if(bl)throw t=lf,bl=!1,lf=null,t}function it(t,e){var n=e[_f];n===void 0&&(n=e[_f]=new Set);var i=t+"__bubble";n.has(i)||(C0(e,t,2,!1),n.add(i))}function Yc(t,e,n){var i=0;e&&(i|=4),C0(n,t,i,e)}var Pa="_reactListening"+Math.random().toString(36).slice(2);function Ys(t){if(!t[Pa]){t[Pa]=!0,Ig.forEach(function(n){n!=="selectionchange"&&(ky.has(n)||Yc(n,!1,t),Yc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Pa]||(e[Pa]=!0,Yc("selectionchange",!1,e))}}function C0(t,e,n,i){switch(u0(e)){case 1:var r=Qx;break;case 4:r=Jx;break;default:r=yd}n=r.bind(null,e,n,t),r=void 0,!af||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function qc(t,e,n,i,r){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;a!==null;){if(s=yr(a),s===null)return;if(l=s.tag,l===5||l===6){i=o=s;continue e}a=a.parentNode}}i=i.return}Kg(function(){var c=o,u=gd(n),d=[];e:{var h=w0.get(t);if(h!==void 0){var m=Ed,_=t;switch(t){case"keypress":if(hl(n)===0)break e;case"keydown":case"keyup":m=py;break;case"focusin":_="focus",m=Gc;break;case"focusout":_="blur",m=Gc;break;case"beforeblur":case"afterblur":m=Gc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Fh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=ny;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=vy;break;case S0:case E0:case M0:m=oy;break;case T0:m=xy;break;case"scroll":m=ey;break;case"wheel":m=Sy;break;case"copy":case"cut":case"paste":m=ay;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=zh}var x=(e&4)!==0,p=!x&&t==="scroll",f=x?h!==null?h+"Capture":null:h;x=[];for(var g=c,v;g!==null;){v=g;var y=v.stateNode;if(v.tag===5&&y!==null&&(v=y,f!==null&&(y=Gs(g,f),y!=null&&x.push(qs(g,y,v)))),p)break;g=g.return}0<x.length&&(h=new m(h,_,null,n,u),d.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==of&&(_=n.relatedTarget||n.fromElement)&&(yr(_)||_[Si]))break e;if((m||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=c,_=_?yr(_):null,_!==null&&(p=Gr(_),_!==p||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=c),m!==_)){if(x=Fh,y="onMouseLeave",f="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(x=zh,y="onPointerLeave",f="onPointerEnter",g="pointer"),p=m==null?h:yo(m),v=_==null?h:yo(_),h=new x(y,g+"leave",m,n,u),h.target=p,h.relatedTarget=v,y=null,yr(u)===c&&(x=new x(f,g+"enter",_,n,u),x.target=v,x.relatedTarget=p,y=x),p=y,m&&_)t:{for(x=m,f=_,g=0,v=x;v;v=Xr(v))g++;for(v=0,y=f;y;y=Xr(y))v++;for(;0<g-v;)x=Xr(x),g--;for(;0<v-g;)f=Xr(f),v--;for(;g--;){if(x===f||f!==null&&x===f.alternate)break t;x=Xr(x),f=Xr(f)}x=null}else x=null;m!==null&&Kh(d,h,m,x,!1),_!==null&&p!==null&&Kh(d,p,_,x,!0)}}e:{if(h=c?yo(c):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var M=by;else if(Gh(h))if(g0)M=Dy;else{M=Py;var C=Ry}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(M=Ly);if(M&&(M=M(t,c))){m0(d,M,n,u);break e}C&&C(t,h,c),t==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&Ju(h,"number",h.value)}switch(C=c?yo(c):window,t){case"focusin":(Gh(C)||C.contentEditable==="true")&&(_o=C,df=c,Ls=null);break;case"focusout":Ls=df=_o=null;break;case"mousedown":hf=!0;break;case"contextmenu":case"mouseup":case"dragend":hf=!1,$h(d,n,u);break;case"selectionchange":if(Ny)break;case"keydown":case"keyup":$h(d,n,u)}var E;if(Td)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else vo?h0(t,n)&&(D="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(d0&&n.locale!=="ko"&&(vo||D!=="onCompositionStart"?D==="onCompositionEnd"&&vo&&(E=f0()):(ki=u,Sd="value"in ki?ki.value:ki.textContent,vo=!0)),C=Ul(c,D),0<C.length&&(D=new kh(D,t,null,n,u),d.push({event:D,listeners:C}),E?D.data=E:(E=p0(n),E!==null&&(D.data=E)))),(E=My?Ty(t,n):wy(t,n))&&(c=Ul(c,"onBeforeInput"),0<c.length&&(u=new kh("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=E))}A0(d,e)})}function qs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ul(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=Gs(t,n),o!=null&&i.unshift(qs(t,o,r)),o=Gs(t,e),o!=null&&i.push(qs(t,o,r))),t=t.return}return i}function Xr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Kh(t,e,n,i,r){for(var o=e._reactName,s=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Gs(n,o),l!=null&&s.unshift(qs(n,l,a))):r||(l=Gs(n,o),l!=null&&s.push(qs(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var zy=/\r\n?/g,By=/\u0000|\uFFFD/g;function Zh(t){return(typeof t=="string"?t:""+t).replace(zy,`
`).replace(By,"")}function La(t,e,n){if(e=Zh(e),Zh(t)!==e&&n)throw Error(ne(425))}function Il(){}var pf=null,mf=null;function gf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var vf=typeof setTimeout=="function"?setTimeout:void 0,Hy=typeof clearTimeout=="function"?clearTimeout:void 0,Qh=typeof Promise=="function"?Promise:void 0,Gy=typeof queueMicrotask=="function"?queueMicrotask:typeof Qh<"u"?function(t){return Qh.resolve(null).then(t).catch(Vy)}:vf;function Vy(t){setTimeout(function(){throw t})}function Kc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),js(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);js(e)}function Xi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Jh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ts=Math.random().toString(36).slice(2),Qn="__reactFiber$"+ts,Ks="__reactProps$"+ts,Si="__reactContainer$"+ts,_f="__reactEvents$"+ts,Wy="__reactListeners$"+ts,jy="__reactHandles$"+ts;function yr(t){var e=t[Qn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Si]||n[Qn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Jh(t);t!==null;){if(n=t[Qn])return n;t=Jh(t)}return e}t=n,n=t.parentNode}return null}function ha(t){return t=t[Qn]||t[Si],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function yo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function lc(t){return t[Ks]||null}var xf=[],So=-1;function sr(t){return{current:t}}function st(t){0>So||(t.current=xf[So],xf[So]=null,So--)}function Je(t,e){So++,xf[So]=t.current,t.current=e}var ir={},Vt=sr(ir),nn=sr(!1),Ur=ir;function ko(t,e){var n=t.type.contextTypes;if(!n)return ir;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function rn(t){return t=t.childContextTypes,t!=null}function Nl(){st(nn),st(Vt)}function ep(t,e,n){if(Vt.current!==ir)throw Error(ne(168));Je(Vt,e),Je(nn,n)}function b0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,Rx(t)||"Unknown",r));return ut({},n,i)}function Ol(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ir,Ur=Vt.current,Je(Vt,t),Je(nn,nn.current),!0}function tp(t,e,n){var i=t.stateNode;if(!i)throw Error(ne(169));n?(t=b0(t,e,Ur),i.__reactInternalMemoizedMergedChildContext=t,st(nn),st(Vt),Je(Vt,t)):st(nn),Je(nn,n)}var hi=null,cc=!1,Zc=!1;function R0(t){hi===null?hi=[t]:hi.push(t)}function Xy(t){cc=!0,R0(t)}function ar(){if(!Zc&&hi!==null){Zc=!0;var t=0,e=Ze;try{var n=hi;for(Ze=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}hi=null,cc=!1}catch(r){throw hi!==null&&(hi=hi.slice(t+1)),e0(vd,ar),r}finally{Ze=e,Zc=!1}}return null}var Eo=[],Mo=0,Fl=null,kl=0,Sn=[],En=0,Ir=null,mi=1,gi="";function mr(t,e){Eo[Mo++]=kl,Eo[Mo++]=Fl,Fl=t,kl=e}function P0(t,e,n){Sn[En++]=mi,Sn[En++]=gi,Sn[En++]=Ir,Ir=t;var i=mi;t=gi;var r=32-Vn(i)-1;i&=~(1<<r),n+=1;var o=32-Vn(e)+r;if(30<o){var s=r-r%5;o=(i&(1<<s)-1).toString(32),i>>=s,r-=s,mi=1<<32-Vn(e)+r|n<<r|i,gi=o+t}else mi=1<<o|n<<r|i,gi=t}function Ad(t){t.return!==null&&(mr(t,1),P0(t,1,0))}function Cd(t){for(;t===Fl;)Fl=Eo[--Mo],Eo[Mo]=null,kl=Eo[--Mo],Eo[Mo]=null;for(;t===Ir;)Ir=Sn[--En],Sn[En]=null,gi=Sn[--En],Sn[En]=null,mi=Sn[--En],Sn[En]=null}var pn=null,hn=null,at=!1,Fn=null;function L0(t,e){var n=wn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function np(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,pn=t,hn=Xi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,pn=t,hn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ir!==null?{id:mi,overflow:gi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=wn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,pn=t,hn=null,!0):!1;default:return!1}}function yf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Sf(t){if(at){var e=hn;if(e){var n=e;if(!np(t,e)){if(yf(t))throw Error(ne(418));e=Xi(n.nextSibling);var i=pn;e&&np(t,e)?L0(i,n):(t.flags=t.flags&-4097|2,at=!1,pn=t)}}else{if(yf(t))throw Error(ne(418));t.flags=t.flags&-4097|2,at=!1,pn=t}}}function ip(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;pn=t}function Da(t){if(t!==pn)return!1;if(!at)return ip(t),at=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!gf(t.type,t.memoizedProps)),e&&(e=hn)){if(yf(t))throw D0(),Error(ne(418));for(;e;)L0(t,e),e=Xi(e.nextSibling)}if(ip(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){hn=Xi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}hn=null}}else hn=pn?Xi(t.stateNode.nextSibling):null;return!0}function D0(){for(var t=hn;t;)t=Xi(t.nextSibling)}function zo(){hn=pn=null,at=!1}function bd(t){Fn===null?Fn=[t]:Fn.push(t)}var $y=Ti.ReactCurrentBatchConfig;function Nn(t,e){if(t&&t.defaultProps){e=ut({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var zl=sr(null),Bl=null,To=null,Rd=null;function Pd(){Rd=To=Bl=null}function Ld(t){var e=zl.current;st(zl),t._currentValue=e}function Ef(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Uo(t,e){Bl=t,Rd=To=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(en=!0),t.firstContext=null)}function Cn(t){var e=t._currentValue;if(Rd!==t)if(t={context:t,memoizedValue:e,next:null},To===null){if(Bl===null)throw Error(ne(308));To=t,Bl.dependencies={lanes:0,firstContext:t}}else To=To.next=t;return e}var Sr=null;function Dd(t){Sr===null?Sr=[t]:Sr.push(t)}function U0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Dd(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ei(t,i)}function Ei(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ui=!1;function Ud(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function I0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function xi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function $i(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ye&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ei(t,n)}return r=i.interleaved,r===null?(e.next=e,Dd(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ei(t,n)}function pl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,_d(t,n)}}function rp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?r=o=e:o=o.next=e}else r=o=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Hl(t,e,n,i){var r=t.updateQueue;Ui=!1;var o=r.firstBaseUpdate,s=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?o=c:s.next=c,s=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==s&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(o!==null){var d=r.baseState;s=0,u=c=l=null,a=o;do{var h=a.lane,m=a.eventTime;if((i&h)===h){u!==null&&(u=u.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,x=a;switch(h=e,m=n,x.tag){case 1:if(_=x.payload,typeof _=="function"){d=_.call(m,d,h);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=x.payload,h=typeof _=="function"?_.call(m,d,h):_,h==null)break e;d=ut({},d,h);break e;case 2:Ui=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=m,l=d):u=u.next=m,s|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(1);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);Or|=s,t.lanes=s,t.memoizedState=d}}function op(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var N0=new Ug.Component().refs;function Mf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ut({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var uc={isMounted:function(t){return(t=t._reactInternals)?Gr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Kt(),r=qi(t),o=xi(i,r);o.payload=e,n!=null&&(o.callback=n),e=$i(t,o,r),e!==null&&(Wn(e,t,r,i),pl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Kt(),r=qi(t),o=xi(i,r);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=$i(t,o,r),e!==null&&(Wn(e,t,r,i),pl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Kt(),i=qi(t),r=xi(n,i);r.tag=2,e!=null&&(r.callback=e),e=$i(t,r,i),e!==null&&(Wn(e,t,i,n),pl(e,t,i))}};function sp(t,e,n,i,r,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,s):e.prototype&&e.prototype.isPureReactComponent?!$s(n,i)||!$s(r,o):!0}function O0(t,e,n){var i=!1,r=ir,o=e.contextType;return typeof o=="object"&&o!==null?o=Cn(o):(r=rn(e)?Ur:Vt.current,i=e.contextTypes,o=(i=i!=null)?ko(t,r):ir),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=uc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),e}function ap(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&uc.enqueueReplaceState(e,e.state,null)}function Tf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=N0,Ud(t);var o=e.contextType;typeof o=="object"&&o!==null?r.context=Cn(o):(o=rn(e)?Ur:Vt.current,r.context=ko(t,o)),r.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Mf(t,e,o,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&uc.enqueueReplaceState(r,r.state,null),Hl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function hs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var i=n.stateNode}if(!i)throw Error(ne(147,t));var r=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=r.refs;a===N0&&(a=r.refs={}),s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function Ua(t,e){throw t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function lp(t){var e=t._init;return e(t._payload)}function F0(t){function e(f,g){if(t){var v=f.deletions;v===null?(f.deletions=[g],f.flags|=16):v.push(g)}}function n(f,g){if(!t)return null;for(;g!==null;)e(f,g),g=g.sibling;return null}function i(f,g){for(f=new Map;g!==null;)g.key!==null?f.set(g.key,g):f.set(g.index,g),g=g.sibling;return f}function r(f,g){return f=Ki(f,g),f.index=0,f.sibling=null,f}function o(f,g,v){return f.index=v,t?(v=f.alternate,v!==null?(v=v.index,v<g?(f.flags|=2,g):v):(f.flags|=2,g)):(f.flags|=1048576,g)}function s(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,g,v,y){return g===null||g.tag!==6?(g=ru(v,f.mode,y),g.return=f,g):(g=r(g,v),g.return=f,g)}function l(f,g,v,y){var M=v.type;return M===go?u(f,g,v.props.children,y,v.key):g!==null&&(g.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Di&&lp(M)===g.type)?(y=r(g,v.props),y.ref=hs(f,g,v),y.return=f,y):(y=yl(v.type,v.key,v.props,null,f.mode,y),y.ref=hs(f,g,v),y.return=f,y)}function c(f,g,v,y){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=ou(v,f.mode,y),g.return=f,g):(g=r(g,v.children||[]),g.return=f,g)}function u(f,g,v,y,M){return g===null||g.tag!==7?(g=wr(v,f.mode,y,M),g.return=f,g):(g=r(g,v),g.return=f,g)}function d(f,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=ru(""+g,f.mode,v),g.return=f,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ea:return v=yl(g.type,g.key,g.props,null,f.mode,v),v.ref=hs(f,null,g),v.return=f,v;case mo:return g=ou(g,f.mode,v),g.return=f,g;case Di:var y=g._init;return d(f,y(g._payload),v)}if(Ss(g)||ls(g))return g=wr(g,f.mode,v,null),g.return=f,g;Ua(f,g)}return null}function h(f,g,v,y){var M=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return M!==null?null:a(f,g,""+v,y);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ea:return v.key===M?l(f,g,v,y):null;case mo:return v.key===M?c(f,g,v,y):null;case Di:return M=v._init,h(f,g,M(v._payload),y)}if(Ss(v)||ls(v))return M!==null?null:u(f,g,v,y,null);Ua(f,v)}return null}function m(f,g,v,y,M){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(v)||null,a(g,f,""+y,M);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ea:return f=f.get(y.key===null?v:y.key)||null,l(g,f,y,M);case mo:return f=f.get(y.key===null?v:y.key)||null,c(g,f,y,M);case Di:var C=y._init;return m(f,g,v,C(y._payload),M)}if(Ss(y)||ls(y))return f=f.get(v)||null,u(g,f,y,M,null);Ua(g,y)}return null}function _(f,g,v,y){for(var M=null,C=null,E=g,D=g=0,T=null;E!==null&&D<v.length;D++){E.index>D?(T=E,E=null):T=E.sibling;var A=h(f,E,v[D],y);if(A===null){E===null&&(E=T);break}t&&E&&A.alternate===null&&e(f,E),g=o(A,g,D),C===null?M=A:C.sibling=A,C=A,E=T}if(D===v.length)return n(f,E),at&&mr(f,D),M;if(E===null){for(;D<v.length;D++)E=d(f,v[D],y),E!==null&&(g=o(E,g,D),C===null?M=E:C.sibling=E,C=E);return at&&mr(f,D),M}for(E=i(f,E);D<v.length;D++)T=m(E,f,D,v[D],y),T!==null&&(t&&T.alternate!==null&&E.delete(T.key===null?D:T.key),g=o(T,g,D),C===null?M=T:C.sibling=T,C=T);return t&&E.forEach(function(Z){return e(f,Z)}),at&&mr(f,D),M}function x(f,g,v,y){var M=ls(v);if(typeof M!="function")throw Error(ne(150));if(v=M.call(v),v==null)throw Error(ne(151));for(var C=M=null,E=g,D=g=0,T=null,A=v.next();E!==null&&!A.done;D++,A=v.next()){E.index>D?(T=E,E=null):T=E.sibling;var Z=h(f,E,A.value,y);if(Z===null){E===null&&(E=T);break}t&&E&&Z.alternate===null&&e(f,E),g=o(Z,g,D),C===null?M=Z:C.sibling=Z,C=Z,E=T}if(A.done)return n(f,E),at&&mr(f,D),M;if(E===null){for(;!A.done;D++,A=v.next())A=d(f,A.value,y),A!==null&&(g=o(A,g,D),C===null?M=A:C.sibling=A,C=A);return at&&mr(f,D),M}for(E=i(f,E);!A.done;D++,A=v.next())A=m(E,f,D,A.value,y),A!==null&&(t&&A.alternate!==null&&E.delete(A.key===null?D:A.key),g=o(A,g,D),C===null?M=A:C.sibling=A,C=A);return t&&E.forEach(function(ee){return e(f,ee)}),at&&mr(f,D),M}function p(f,g,v,y){if(typeof v=="object"&&v!==null&&v.type===go&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ea:e:{for(var M=v.key,C=g;C!==null;){if(C.key===M){if(M=v.type,M===go){if(C.tag===7){n(f,C.sibling),g=r(C,v.props.children),g.return=f,f=g;break e}}else if(C.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Di&&lp(M)===C.type){n(f,C.sibling),g=r(C,v.props),g.ref=hs(f,C,v),g.return=f,f=g;break e}n(f,C);break}else e(f,C);C=C.sibling}v.type===go?(g=wr(v.props.children,f.mode,y,v.key),g.return=f,f=g):(y=yl(v.type,v.key,v.props,null,f.mode,y),y.ref=hs(f,g,v),y.return=f,f=y)}return s(f);case mo:e:{for(C=v.key;g!==null;){if(g.key===C)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){n(f,g.sibling),g=r(g,v.children||[]),g.return=f,f=g;break e}else{n(f,g);break}else e(f,g);g=g.sibling}g=ou(v,f.mode,y),g.return=f,f=g}return s(f);case Di:return C=v._init,p(f,g,C(v._payload),y)}if(Ss(v))return _(f,g,v,y);if(ls(v))return x(f,g,v,y);Ua(f,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(n(f,g.sibling),g=r(g,v),g.return=f,f=g):(n(f,g),g=ru(v,f.mode,y),g.return=f,f=g),s(f)):n(f,g)}return p}var Bo=F0(!0),k0=F0(!1),pa={},ei=sr(pa),Zs=sr(pa),Qs=sr(pa);function Er(t){if(t===pa)throw Error(ne(174));return t}function Id(t,e){switch(Je(Qs,e),Je(Zs,t),Je(ei,pa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:tf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=tf(e,t)}st(ei),Je(ei,e)}function Ho(){st(ei),st(Zs),st(Qs)}function z0(t){Er(Qs.current);var e=Er(ei.current),n=tf(e,t.type);e!==n&&(Je(Zs,t),Je(ei,n))}function Nd(t){Zs.current===t&&(st(ei),st(Zs))}var lt=sr(0);function Gl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Qc=[];function Od(){for(var t=0;t<Qc.length;t++)Qc[t]._workInProgressVersionPrimary=null;Qc.length=0}var ml=Ti.ReactCurrentDispatcher,Jc=Ti.ReactCurrentBatchConfig,Nr=0,ct=null,Mt=null,Rt=null,Vl=!1,Ds=!1,Js=0,Yy=0;function Ft(){throw Error(ne(321))}function Fd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Xn(t[n],e[n]))return!1;return!0}function kd(t,e,n,i,r,o){if(Nr=o,ct=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ml.current=t===null||t.memoizedState===null?Qy:Jy,t=n(i,r),Ds){o=0;do{if(Ds=!1,Js=0,25<=o)throw Error(ne(301));o+=1,Rt=Mt=null,e.updateQueue=null,ml.current=eS,t=n(i,r)}while(Ds)}if(ml.current=Wl,e=Mt!==null&&Mt.next!==null,Nr=0,Rt=Mt=ct=null,Vl=!1,e)throw Error(ne(300));return t}function zd(){var t=Js!==0;return Js=0,t}function qn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rt===null?ct.memoizedState=Rt=t:Rt=Rt.next=t,Rt}function bn(){if(Mt===null){var t=ct.alternate;t=t!==null?t.memoizedState:null}else t=Mt.next;var e=Rt===null?ct.memoizedState:Rt.next;if(e!==null)Rt=e,Mt=t;else{if(t===null)throw Error(ne(310));Mt=t,t={memoizedState:Mt.memoizedState,baseState:Mt.baseState,baseQueue:Mt.baseQueue,queue:Mt.queue,next:null},Rt===null?ct.memoizedState=Rt=t:Rt=Rt.next=t}return Rt}function ea(t,e){return typeof e=="function"?e(t):e}function eu(t){var e=bn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=Mt,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var s=r.next;r.next=o.next,o.next=s}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=s=null,l=null,c=o;do{var u=c.lane;if((Nr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,s=i):l=l.next=d,ct.lanes|=u,Or|=u}c=c.next}while(c!==null&&c!==o);l===null?s=i:l.next=a,Xn(i,e.memoizedState)||(en=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do o=r.lane,ct.lanes|=o,Or|=o,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function tu(t){var e=bn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,o=e.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do o=t(o,s.action),s=s.next;while(s!==r);Xn(o,e.memoizedState)||(en=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function B0(){}function H0(t,e){var n=ct,i=bn(),r=e(),o=!Xn(i.memoizedState,r);if(o&&(i.memoizedState=r,en=!0),i=i.queue,Bd(W0.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||Rt!==null&&Rt.memoizedState.tag&1){if(n.flags|=2048,ta(9,V0.bind(null,n,i,r,e),void 0,null),Lt===null)throw Error(ne(349));Nr&30||G0(n,e,r)}return r}function G0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ct.updateQueue,e===null?(e={lastEffect:null,stores:null},ct.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function V0(t,e,n,i){e.value=n,e.getSnapshot=i,j0(e)&&X0(t)}function W0(t,e,n){return n(function(){j0(e)&&X0(t)})}function j0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Xn(t,n)}catch{return!0}}function X0(t){var e=Ei(t,1);e!==null&&Wn(e,t,1,-1)}function cp(t){var e=qn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:t},e.queue=t,t=t.dispatch=Zy.bind(null,ct,t),[e.memoizedState,t]}function ta(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ct.updateQueue,e===null?(e={lastEffect:null,stores:null},ct.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function $0(){return bn().memoizedState}function gl(t,e,n,i){var r=qn();ct.flags|=t,r.memoizedState=ta(1|e,n,void 0,i===void 0?null:i)}function fc(t,e,n,i){var r=bn();i=i===void 0?null:i;var o=void 0;if(Mt!==null){var s=Mt.memoizedState;if(o=s.destroy,i!==null&&Fd(i,s.deps)){r.memoizedState=ta(e,n,o,i);return}}ct.flags|=t,r.memoizedState=ta(1|e,n,o,i)}function up(t,e){return gl(8390656,8,t,e)}function Bd(t,e){return fc(2048,8,t,e)}function Y0(t,e){return fc(4,2,t,e)}function q0(t,e){return fc(4,4,t,e)}function K0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Z0(t,e,n){return n=n!=null?n.concat([t]):null,fc(4,4,K0.bind(null,e,t),n)}function Hd(){}function Q0(t,e){var n=bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Fd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function J0(t,e){var n=bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Fd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function ev(t,e,n){return Nr&21?(Xn(n,e)||(n=i0(),ct.lanes|=n,Or|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,en=!0),t.memoizedState=n)}function qy(t,e){var n=Ze;Ze=n!==0&&4>n?n:4,t(!0);var i=Jc.transition;Jc.transition={};try{t(!1),e()}finally{Ze=n,Jc.transition=i}}function tv(){return bn().memoizedState}function Ky(t,e,n){var i=qi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},nv(t))iv(e,n);else if(n=U0(t,e,n,i),n!==null){var r=Kt();Wn(n,t,i,r),rv(n,e,i)}}function Zy(t,e,n){var i=qi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(nv(t))iv(e,r);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(r.hasEagerState=!0,r.eagerState=a,Xn(a,s)){var l=e.interleaved;l===null?(r.next=r,Dd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=U0(t,e,r,i),n!==null&&(r=Kt(),Wn(n,t,i,r),rv(n,e,i))}}function nv(t){var e=t.alternate;return t===ct||e!==null&&e===ct}function iv(t,e){Ds=Vl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function rv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,_d(t,n)}}var Wl={readContext:Cn,useCallback:Ft,useContext:Ft,useEffect:Ft,useImperativeHandle:Ft,useInsertionEffect:Ft,useLayoutEffect:Ft,useMemo:Ft,useReducer:Ft,useRef:Ft,useState:Ft,useDebugValue:Ft,useDeferredValue:Ft,useTransition:Ft,useMutableSource:Ft,useSyncExternalStore:Ft,useId:Ft,unstable_isNewReconciler:!1},Qy={readContext:Cn,useCallback:function(t,e){return qn().memoizedState=[t,e===void 0?null:e],t},useContext:Cn,useEffect:up,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,gl(4194308,4,K0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return gl(4194308,4,t,e)},useInsertionEffect:function(t,e){return gl(4,2,t,e)},useMemo:function(t,e){var n=qn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=qn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Ky.bind(null,ct,t),[i.memoizedState,t]},useRef:function(t){var e=qn();return t={current:t},e.memoizedState=t},useState:cp,useDebugValue:Hd,useDeferredValue:function(t){return qn().memoizedState=t},useTransition:function(){var t=cp(!1),e=t[0];return t=qy.bind(null,t[1]),qn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ct,r=qn();if(at){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),Lt===null)throw Error(ne(349));Nr&30||G0(i,e,n)}r.memoizedState=n;var o={value:n,getSnapshot:e};return r.queue=o,up(W0.bind(null,i,o,t),[t]),i.flags|=2048,ta(9,V0.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=qn(),e=Lt.identifierPrefix;if(at){var n=gi,i=mi;n=(i&~(1<<32-Vn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Js++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Yy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Jy={readContext:Cn,useCallback:Q0,useContext:Cn,useEffect:Bd,useImperativeHandle:Z0,useInsertionEffect:Y0,useLayoutEffect:q0,useMemo:J0,useReducer:eu,useRef:$0,useState:function(){return eu(ea)},useDebugValue:Hd,useDeferredValue:function(t){var e=bn();return ev(e,Mt.memoizedState,t)},useTransition:function(){var t=eu(ea)[0],e=bn().memoizedState;return[t,e]},useMutableSource:B0,useSyncExternalStore:H0,useId:tv,unstable_isNewReconciler:!1},eS={readContext:Cn,useCallback:Q0,useContext:Cn,useEffect:Bd,useImperativeHandle:Z0,useInsertionEffect:Y0,useLayoutEffect:q0,useMemo:J0,useReducer:tu,useRef:$0,useState:function(){return tu(ea)},useDebugValue:Hd,useDeferredValue:function(t){var e=bn();return Mt===null?e.memoizedState=t:ev(e,Mt.memoizedState,t)},useTransition:function(){var t=tu(ea)[0],e=bn().memoizedState;return[t,e]},useMutableSource:B0,useSyncExternalStore:H0,useId:tv,unstable_isNewReconciler:!1};function Go(t,e){try{var n="",i=e;do n+=bx(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:r,digest:null}}function nu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function wf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var tS=typeof WeakMap=="function"?WeakMap:Map;function ov(t,e,n){n=xi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Xl||(Xl=!0,Nf=i),wf(t,e)},n}function sv(t,e,n){n=xi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){wf(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){wf(t,e),typeof i!="function"&&(Yi===null?Yi=new Set([this]):Yi.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function fp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new tS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=mS.bind(null,t,e,n),e.then(t,t))}function dp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function hp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=xi(-1,1),e.tag=2,$i(n,e,1))),n.lanes|=1),t)}var nS=Ti.ReactCurrentOwner,en=!1;function Yt(t,e,n,i){e.child=t===null?k0(e,null,n,i):Bo(e,t.child,n,i)}function pp(t,e,n,i,r){n=n.render;var o=e.ref;return Uo(e,r),i=kd(t,e,n,i,o,r),n=zd(),t!==null&&!en?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Mi(t,e,r)):(at&&n&&Ad(e),e.flags|=1,Yt(t,e,i,r),e.child)}function mp(t,e,n,i,r){if(t===null){var o=n.type;return typeof o=="function"&&!qd(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,av(t,e,o,i,r)):(t=yl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&r)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:$s,n(s,i)&&t.ref===e.ref)return Mi(t,e,r)}return e.flags|=1,t=Ki(o,i),t.ref=e.ref,t.return=e,e.child=t}function av(t,e,n,i,r){if(t!==null){var o=t.memoizedProps;if($s(o,i)&&t.ref===e.ref)if(en=!1,e.pendingProps=i=o,(t.lanes&r)!==0)t.flags&131072&&(en=!0);else return e.lanes=t.lanes,Mi(t,e,r)}return Af(t,e,n,i,r)}function lv(t,e,n){var i=e.pendingProps,r=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Je(Ao,fn),fn|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Je(Ao,fn),fn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,Je(Ao,fn),fn|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,Je(Ao,fn),fn|=i;return Yt(t,e,r,n),e.child}function cv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Af(t,e,n,i,r){var o=rn(n)?Ur:Vt.current;return o=ko(e,o),Uo(e,r),n=kd(t,e,n,i,o,r),i=zd(),t!==null&&!en?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Mi(t,e,r)):(at&&i&&Ad(e),e.flags|=1,Yt(t,e,n,r),e.child)}function gp(t,e,n,i,r){if(rn(n)){var o=!0;Ol(e)}else o=!1;if(Uo(e,r),e.stateNode===null)vl(t,e),O0(e,n,i),Tf(e,n,i,r),i=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=Cn(c):(c=rn(n)?Ur:Vt.current,c=ko(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==i||l!==c)&&ap(e,s,i,c),Ui=!1;var h=e.memoizedState;s.state=h,Hl(e,i,s,r),l=e.memoizedState,a!==i||h!==l||nn.current||Ui?(typeof u=="function"&&(Mf(e,n,u,i),l=e.memoizedState),(a=Ui||sp(e,n,a,i,h,l,c))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),s.props=i,s.state=l,s.context=c,i=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,I0(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Nn(e.type,a),s.props=c,d=e.pendingProps,h=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Cn(l):(l=rn(n)?Ur:Vt.current,l=ko(e,l));var m=n.getDerivedStateFromProps;(u=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||h!==l)&&ap(e,s,i,l),Ui=!1,h=e.memoizedState,s.state=h,Hl(e,i,s,r);var _=e.memoizedState;a!==d||h!==_||nn.current||Ui?(typeof m=="function"&&(Mf(e,n,m,i),_=e.memoizedState),(c=Ui||sp(e,n,c,i,h,_,l)||!1)?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,_,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,_,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),s.props=i,s.state=_,s.context=l,i=c):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Cf(t,e,n,i,o,r)}function Cf(t,e,n,i,r,o){cv(t,e);var s=(e.flags&128)!==0;if(!i&&!s)return r&&tp(e,n,!1),Mi(t,e,o);i=e.stateNode,nS.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=Bo(e,t.child,null,o),e.child=Bo(e,null,a,o)):Yt(t,e,a,o),e.memoizedState=i.state,r&&tp(e,n,!0),e.child}function uv(t){var e=t.stateNode;e.pendingContext?ep(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ep(t,e.context,!1),Id(t,e.containerInfo)}function vp(t,e,n,i,r){return zo(),bd(r),e.flags|=256,Yt(t,e,n,i),e.child}var bf={dehydrated:null,treeContext:null,retryLane:0};function Rf(t){return{baseLanes:t,cachePool:null,transitions:null}}function fv(t,e,n){var i=e.pendingProps,r=lt.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Je(lt,r&1),t===null)return Sf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=i.children,t=i.fallback,o?(i=e.mode,o=e.child,s={mode:"hidden",children:s},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=pc(s,i,0,null),t=wr(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Rf(n),e.memoizedState=bf,t):Gd(e,s));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return iS(t,e,s,i,a,r,n);if(o){o=i.fallback,s=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ki(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=Ki(a,o):(o=wr(o,s,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,s=t.child.memoizedState,s=s===null?Rf(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=bf,i}return o=t.child,t=o.sibling,i=Ki(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Gd(t,e){return e=pc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ia(t,e,n,i){return i!==null&&bd(i),Bo(e,t.child,null,n),t=Gd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function iS(t,e,n,i,r,o,s){if(n)return e.flags&256?(e.flags&=-257,i=nu(Error(ne(422))),Ia(t,e,s,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=pc({mode:"visible",children:i.children},r,0,null),o=wr(o,r,s,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&Bo(e,t.child,null,s),e.child.memoizedState=Rf(s),e.memoizedState=bf,o);if(!(e.mode&1))return Ia(t,e,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error(ne(419)),i=nu(o,i,void 0),Ia(t,e,s,i)}if(a=(s&t.childLanes)!==0,en||a){if(i=Lt,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,Ei(t,r),Wn(i,t,r,-1))}return Yd(),i=nu(Error(ne(421))),Ia(t,e,s,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=gS.bind(null,t),r._reactRetry=e,null):(t=o.treeContext,hn=Xi(r.nextSibling),pn=e,at=!0,Fn=null,t!==null&&(Sn[En++]=mi,Sn[En++]=gi,Sn[En++]=Ir,mi=t.id,gi=t.overflow,Ir=e),e=Gd(e,i.children),e.flags|=4096,e)}function _p(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Ef(t.return,e,n)}function iu(t,e,n,i,r){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function dv(t,e,n){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(Yt(t,e,i.children,n),i=lt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&_p(t,n,e);else if(t.tag===19)_p(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Je(lt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Gl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),iu(e,!1,r,n,o);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Gl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}iu(e,!0,n,null,o);break;case"together":iu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function vl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Mi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Or|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=Ki(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ki(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function rS(t,e,n){switch(e.tag){case 3:uv(e),zo();break;case 5:z0(e);break;case 1:rn(e.type)&&Ol(e);break;case 4:Id(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Je(zl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Je(lt,lt.current&1),e.flags|=128,null):n&e.child.childLanes?fv(t,e,n):(Je(lt,lt.current&1),t=Mi(t,e,n),t!==null?t.sibling:null);Je(lt,lt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return dv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Je(lt,lt.current),i)break;return null;case 22:case 23:return e.lanes=0,lv(t,e,n)}return Mi(t,e,n)}var hv,Pf,pv,mv;hv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Pf=function(){};pv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Er(ei.current);var o=null;switch(n){case"input":r=Zu(t,r),i=Zu(t,i),o=[];break;case"select":r=ut({},r,{value:void 0}),i=ut({},i,{value:void 0}),o=[];break;case"textarea":r=ef(t,r),i=ef(t,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Il)}nf(n,i);var s;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Bs.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Bs.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&it("scroll",t),o||a===l||(o=[])):(o=o||[]).push(c,l))}n&&(o=o||[]).push("style",n);var c=o;(e.updateQueue=c)&&(e.flags|=4)}};mv=function(t,e,n,i){n!==i&&(e.flags|=4)};function ps(t,e){if(!at)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function kt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function oS(t,e,n){var i=e.pendingProps;switch(Cd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return kt(e),null;case 1:return rn(e.type)&&Nl(),kt(e),null;case 3:return i=e.stateNode,Ho(),st(nn),st(Vt),Od(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Da(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Fn!==null&&(kf(Fn),Fn=null))),Pf(t,e),kt(e),null;case 5:Nd(e);var r=Er(Qs.current);if(n=e.type,t!==null&&e.stateNode!=null)pv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return kt(e),null}if(t=Er(ei.current),Da(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[Qn]=e,i[Ks]=o,t=(e.mode&1)!==0,n){case"dialog":it("cancel",i),it("close",i);break;case"iframe":case"object":case"embed":it("load",i);break;case"video":case"audio":for(r=0;r<Ms.length;r++)it(Ms[r],i);break;case"source":it("error",i);break;case"img":case"image":case"link":it("error",i),it("load",i);break;case"details":it("toggle",i);break;case"input":Ch(i,o),it("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},it("invalid",i);break;case"textarea":Rh(i,o),it("invalid",i)}nf(n,o),r=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&La(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&La(i.textContent,a,t),r=["children",""+a]):Bs.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&it("scroll",i)}switch(n){case"input":Ma(i),bh(i,o,!0);break;case"textarea":Ma(i),Ph(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=Il)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Gg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(n,{is:i.is}):(t=s.createElement(n),n==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,n),t[Qn]=e,t[Ks]=i,hv(t,e,!1,!1),e.stateNode=t;e:{switch(s=rf(n,i),n){case"dialog":it("cancel",t),it("close",t),r=i;break;case"iframe":case"object":case"embed":it("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ms.length;r++)it(Ms[r],t);r=i;break;case"source":it("error",t),r=i;break;case"img":case"image":case"link":it("error",t),it("load",t),r=i;break;case"details":it("toggle",t),r=i;break;case"input":Ch(t,i),r=Zu(t,i),it("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ut({},i,{value:void 0}),it("invalid",t);break;case"textarea":Rh(t,i),r=ef(t,i),it("invalid",t);break;default:r=i}nf(n,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?jg(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Vg(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Hs(t,l):typeof l=="number"&&Hs(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Bs.hasOwnProperty(o)?l!=null&&o==="onScroll"&&it("scroll",t):l!=null&&dd(t,o,l,s))}switch(n){case"input":Ma(t),bh(t,i,!1);break;case"textarea":Ma(t),Ph(t);break;case"option":i.value!=null&&t.setAttribute("value",""+nr(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?Ro(t,!!i.multiple,o,!1):i.defaultValue!=null&&Ro(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Il)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return kt(e),null;case 6:if(t&&e.stateNode!=null)mv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(n=Er(Qs.current),Er(ei.current),Da(e)){if(i=e.stateNode,n=e.memoizedProps,i[Qn]=e,(o=i.nodeValue!==n)&&(t=pn,t!==null))switch(t.tag){case 3:La(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&La(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Qn]=e,e.stateNode=i}return kt(e),null;case 13:if(st(lt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(at&&hn!==null&&e.mode&1&&!(e.flags&128))D0(),zo(),e.flags|=98560,o=!1;else if(o=Da(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(ne(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(ne(317));o[Qn]=e}else zo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;kt(e),o=!1}else Fn!==null&&(kf(Fn),Fn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||lt.current&1?Tt===0&&(Tt=3):Yd())),e.updateQueue!==null&&(e.flags|=4),kt(e),null);case 4:return Ho(),Pf(t,e),t===null&&Ys(e.stateNode.containerInfo),kt(e),null;case 10:return Ld(e.type._context),kt(e),null;case 17:return rn(e.type)&&Nl(),kt(e),null;case 19:if(st(lt),o=e.memoizedState,o===null)return kt(e),null;if(i=(e.flags&128)!==0,s=o.rendering,s===null)if(i)ps(o,!1);else{if(Tt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Gl(t),s!==null){for(e.flags|=128,ps(o,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Je(lt,lt.current&1|2),e.child}t=t.sibling}o.tail!==null&&pt()>Vo&&(e.flags|=128,i=!0,ps(o,!1),e.lanes=4194304)}else{if(!i)if(t=Gl(s),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ps(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!at)return kt(e),null}else 2*pt()-o.renderingStartTime>Vo&&n!==1073741824&&(e.flags|=128,i=!0,ps(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=pt(),e.sibling=null,n=lt.current,Je(lt,i?n&1|2:n&1),e):(kt(e),null);case 22:case 23:return $d(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?fn&1073741824&&(kt(e),e.subtreeFlags&6&&(e.flags|=8192)):kt(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function sS(t,e){switch(Cd(e),e.tag){case 1:return rn(e.type)&&Nl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ho(),st(nn),st(Vt),Od(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Nd(e),null;case 13:if(st(lt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));zo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return st(lt),null;case 4:return Ho(),null;case 10:return Ld(e.type._context),null;case 22:case 23:return $d(),null;case 24:return null;default:return null}}var Na=!1,Ht=!1,aS=typeof WeakSet=="function"?WeakSet:Set,_e=null;function wo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){dt(t,e,i)}else n.current=null}function Lf(t,e,n){try{n()}catch(i){dt(t,e,i)}}var xp=!1;function lS(t,e){if(pf=Ll,t=x0(),wd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,c=0,u=0,d=t,h=null;t:for(;;){for(var m;d!==n||r!==0&&d.nodeType!==3||(a=s+r),d!==o||i!==0&&d.nodeType!==3||(l=s+i),d.nodeType===3&&(s+=d.nodeValue.length),(m=d.firstChild)!==null;)h=d,d=m;for(;;){if(d===t)break t;if(h===n&&++c===r&&(a=s),h===o&&++u===i&&(l=s),(m=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(mf={focusedElem:t,selectionRange:n},Ll=!1,_e=e;_e!==null;)if(e=_e,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,_e=t;else for(;_e!==null;){e=_e;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var x=_.memoizedProps,p=_.memoizedState,f=e.stateNode,g=f.getSnapshotBeforeUpdate(e.elementType===e.type?x:Nn(e.type,x),p);f.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(y){dt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,_e=t;break}_e=e.return}return _=xp,xp=!1,_}function Us(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var o=r.destroy;r.destroy=void 0,o!==void 0&&Lf(e,n,o)}r=r.next}while(r!==i)}}function dc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Df(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function gv(t){var e=t.alternate;e!==null&&(t.alternate=null,gv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Qn],delete e[Ks],delete e[_f],delete e[Wy],delete e[jy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function vv(t){return t.tag===5||t.tag===3||t.tag===4}function yp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||vv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Uf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Il));else if(i!==4&&(t=t.child,t!==null))for(Uf(t,e,n),t=t.sibling;t!==null;)Uf(t,e,n),t=t.sibling}function If(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(If(t,e,n),t=t.sibling;t!==null;)If(t,e,n),t=t.sibling}var Dt=null,On=!1;function Ai(t,e,n){for(n=n.child;n!==null;)_v(t,e,n),n=n.sibling}function _v(t,e,n){if(Jn&&typeof Jn.onCommitFiberUnmount=="function")try{Jn.onCommitFiberUnmount(rc,n)}catch{}switch(n.tag){case 5:Ht||wo(n,e);case 6:var i=Dt,r=On;Dt=null,Ai(t,e,n),Dt=i,On=r,Dt!==null&&(On?(t=Dt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Dt.removeChild(n.stateNode));break;case 18:Dt!==null&&(On?(t=Dt,n=n.stateNode,t.nodeType===8?Kc(t.parentNode,n):t.nodeType===1&&Kc(t,n),js(t)):Kc(Dt,n.stateNode));break;case 4:i=Dt,r=On,Dt=n.stateNode.containerInfo,On=!0,Ai(t,e,n),Dt=i,On=r;break;case 0:case 11:case 14:case 15:if(!Ht&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Lf(n,e,s),r=r.next}while(r!==i)}Ai(t,e,n);break;case 1:if(!Ht&&(wo(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){dt(n,e,a)}Ai(t,e,n);break;case 21:Ai(t,e,n);break;case 22:n.mode&1?(Ht=(i=Ht)||n.memoizedState!==null,Ai(t,e,n),Ht=i):Ai(t,e,n);break;default:Ai(t,e,n)}}function Sp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new aS),e.forEach(function(i){var r=vS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Pn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:Dt=a.stateNode,On=!1;break e;case 3:Dt=a.stateNode.containerInfo,On=!0;break e;case 4:Dt=a.stateNode.containerInfo,On=!0;break e}a=a.return}if(Dt===null)throw Error(ne(160));_v(o,s,r),Dt=null,On=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){dt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)xv(e,t),e=e.sibling}function xv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Pn(e,t),Yn(t),i&4){try{Us(3,t,t.return),dc(3,t)}catch(x){dt(t,t.return,x)}try{Us(5,t,t.return)}catch(x){dt(t,t.return,x)}}break;case 1:Pn(e,t),Yn(t),i&512&&n!==null&&wo(n,n.return);break;case 5:if(Pn(e,t),Yn(t),i&512&&n!==null&&wo(n,n.return),t.flags&32){var r=t.stateNode;try{Hs(r,"")}catch(x){dt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Bg(r,o),rf(a,s);var c=rf(a,o);for(s=0;s<l.length;s+=2){var u=l[s],d=l[s+1];u==="style"?jg(r,d):u==="dangerouslySetInnerHTML"?Vg(r,d):u==="children"?Hs(r,d):dd(r,u,d,c)}switch(a){case"input":Qu(r,o);break;case"textarea":Hg(r,o);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?Ro(r,!!o.multiple,m,!1):h!==!!o.multiple&&(o.defaultValue!=null?Ro(r,!!o.multiple,o.defaultValue,!0):Ro(r,!!o.multiple,o.multiple?[]:"",!1))}r[Ks]=o}catch(x){dt(t,t.return,x)}}break;case 6:if(Pn(e,t),Yn(t),i&4){if(t.stateNode===null)throw Error(ne(162));r=t.stateNode,o=t.memoizedProps;try{r.nodeValue=o}catch(x){dt(t,t.return,x)}}break;case 3:if(Pn(e,t),Yn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{js(e.containerInfo)}catch(x){dt(t,t.return,x)}break;case 4:Pn(e,t),Yn(t);break;case 13:Pn(e,t),Yn(t),r=t.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(jd=pt())),i&4&&Sp(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Ht=(c=Ht)||u,Pn(e,t),Ht=c):Pn(e,t),Yn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(_e=t,u=t.child;u!==null;){for(d=_e=u;_e!==null;){switch(h=_e,m=h.child,h.tag){case 0:case 11:case 14:case 15:Us(4,h,h.return);break;case 1:wo(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(x){dt(i,n,x)}}break;case 5:wo(h,h.return);break;case 22:if(h.memoizedState!==null){Mp(d);continue}}m!==null?(m.return=h,_e=m):Mp(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Wg("display",s))}catch(x){dt(t,t.return,x)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(x){dt(t,t.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Pn(e,t),Yn(t),i&4&&Sp(t);break;case 21:break;default:Pn(e,t),Yn(t)}}function Yn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(vv(n)){var i=n;break e}n=n.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Hs(r,""),i.flags&=-33);var o=yp(t);If(t,o,r);break;case 3:case 4:var s=i.stateNode.containerInfo,a=yp(t);Uf(t,a,s);break;default:throw Error(ne(161))}}catch(l){dt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function cS(t,e,n){_e=t,yv(t)}function yv(t,e,n){for(var i=(t.mode&1)!==0;_e!==null;){var r=_e,o=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||Na;if(!s){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Ht;a=Na;var c=Ht;if(Na=s,(Ht=l)&&!c)for(_e=r;_e!==null;)s=_e,l=s.child,s.tag===22&&s.memoizedState!==null?Tp(r):l!==null?(l.return=s,_e=l):Tp(r);for(;o!==null;)_e=o,yv(o),o=o.sibling;_e=r,Na=a,Ht=c}Ep(t)}else r.subtreeFlags&8772&&o!==null?(o.return=r,_e=o):Ep(t)}}function Ep(t){for(;_e!==null;){var e=_e;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ht||dc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Ht)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Nn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&op(e,o,i);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}op(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&js(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}Ht||e.flags&512&&Df(e)}catch(h){dt(e,e.return,h)}}if(e===t){_e=null;break}if(n=e.sibling,n!==null){n.return=e.return,_e=n;break}_e=e.return}}function Mp(t){for(;_e!==null;){var e=_e;if(e===t){_e=null;break}var n=e.sibling;if(n!==null){n.return=e.return,_e=n;break}_e=e.return}}function Tp(t){for(;_e!==null;){var e=_e;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{dc(4,e)}catch(l){dt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){dt(e,r,l)}}var o=e.return;try{Df(e)}catch(l){dt(e,o,l)}break;case 5:var s=e.return;try{Df(e)}catch(l){dt(e,s,l)}}}catch(l){dt(e,e.return,l)}if(e===t){_e=null;break}var a=e.sibling;if(a!==null){a.return=e.return,_e=a;break}_e=e.return}}var uS=Math.ceil,jl=Ti.ReactCurrentDispatcher,Vd=Ti.ReactCurrentOwner,An=Ti.ReactCurrentBatchConfig,Ye=0,Lt=null,xt=null,It=0,fn=0,Ao=sr(0),Tt=0,na=null,Or=0,hc=0,Wd=0,Is=null,Jt=null,jd=0,Vo=1/0,fi=null,Xl=!1,Nf=null,Yi=null,Oa=!1,zi=null,$l=0,Ns=0,Of=null,_l=-1,xl=0;function Kt(){return Ye&6?pt():_l!==-1?_l:_l=pt()}function qi(t){return t.mode&1?Ye&2&&It!==0?It&-It:$y.transition!==null?(xl===0&&(xl=i0()),xl):(t=Ze,t!==0||(t=window.event,t=t===void 0?16:u0(t.type)),t):1}function Wn(t,e,n,i){if(50<Ns)throw Ns=0,Of=null,Error(ne(185));fa(t,n,i),(!(Ye&2)||t!==Lt)&&(t===Lt&&(!(Ye&2)&&(hc|=n),Tt===4&&Fi(t,It)),on(t,i),n===1&&Ye===0&&!(e.mode&1)&&(Vo=pt()+500,cc&&ar()))}function on(t,e){var n=t.callbackNode;$x(t,e);var i=Pl(t,t===Lt?It:0);if(i===0)n!==null&&Uh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Uh(n),e===1)t.tag===0?Xy(wp.bind(null,t)):R0(wp.bind(null,t)),Gy(function(){!(Ye&6)&&ar()}),n=null;else{switch(r0(i)){case 1:n=vd;break;case 4:n=t0;break;case 16:n=Rl;break;case 536870912:n=n0;break;default:n=Rl}n=bv(n,Sv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Sv(t,e){if(_l=-1,xl=0,Ye&6)throw Error(ne(327));var n=t.callbackNode;if(Io()&&t.callbackNode!==n)return null;var i=Pl(t,t===Lt?It:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Yl(t,i);else{e=i;var r=Ye;Ye|=2;var o=Mv();(Lt!==t||It!==e)&&(fi=null,Vo=pt()+500,Tr(t,e));do try{hS();break}catch(a){Ev(t,a)}while(1);Pd(),jl.current=o,Ye=r,xt!==null?e=0:(Lt=null,It=0,e=Tt)}if(e!==0){if(e===2&&(r=cf(t),r!==0&&(i=r,e=Ff(t,r))),e===1)throw n=na,Tr(t,0),Fi(t,i),on(t,pt()),n;if(e===6)Fi(t,i);else{if(r=t.current.alternate,!(i&30)&&!fS(r)&&(e=Yl(t,i),e===2&&(o=cf(t),o!==0&&(i=o,e=Ff(t,o))),e===1))throw n=na,Tr(t,0),Fi(t,i),on(t,pt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:gr(t,Jt,fi);break;case 3:if(Fi(t,i),(i&130023424)===i&&(e=jd+500-pt(),10<e)){if(Pl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Kt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=vf(gr.bind(null,t,Jt,fi),e);break}gr(t,Jt,fi);break;case 4:if(Fi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var s=31-Vn(i);o=1<<s,s=e[s],s>r&&(r=s),i&=~o}if(i=r,i=pt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*uS(i/1960))-i,10<i){t.timeoutHandle=vf(gr.bind(null,t,Jt,fi),i);break}gr(t,Jt,fi);break;case 5:gr(t,Jt,fi);break;default:throw Error(ne(329))}}}return on(t,pt()),t.callbackNode===n?Sv.bind(null,t):null}function Ff(t,e){var n=Is;return t.current.memoizedState.isDehydrated&&(Tr(t,e).flags|=256),t=Yl(t,e),t!==2&&(e=Jt,Jt=n,e!==null&&kf(e)),t}function kf(t){Jt===null?Jt=t:Jt.push.apply(Jt,t)}function fS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!Xn(o(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Fi(t,e){for(e&=~Wd,e&=~hc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Vn(e),i=1<<n;t[n]=-1,e&=~i}}function wp(t){if(Ye&6)throw Error(ne(327));Io();var e=Pl(t,0);if(!(e&1))return on(t,pt()),null;var n=Yl(t,e);if(t.tag!==0&&n===2){var i=cf(t);i!==0&&(e=i,n=Ff(t,i))}if(n===1)throw n=na,Tr(t,0),Fi(t,e),on(t,pt()),n;if(n===6)throw Error(ne(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,gr(t,Jt,fi),on(t,pt()),null}function Xd(t,e){var n=Ye;Ye|=1;try{return t(e)}finally{Ye=n,Ye===0&&(Vo=pt()+500,cc&&ar())}}function Fr(t){zi!==null&&zi.tag===0&&!(Ye&6)&&Io();var e=Ye;Ye|=1;var n=An.transition,i=Ze;try{if(An.transition=null,Ze=1,t)return t()}finally{Ze=i,An.transition=n,Ye=e,!(Ye&6)&&ar()}}function $d(){fn=Ao.current,st(Ao)}function Tr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Hy(n)),xt!==null)for(n=xt.return;n!==null;){var i=n;switch(Cd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Nl();break;case 3:Ho(),st(nn),st(Vt),Od();break;case 5:Nd(i);break;case 4:Ho();break;case 13:st(lt);break;case 19:st(lt);break;case 10:Ld(i.type._context);break;case 22:case 23:$d()}n=n.return}if(Lt=t,xt=t=Ki(t.current,null),It=fn=e,Tt=0,na=null,Wd=hc=Or=0,Jt=Is=null,Sr!==null){for(e=0;e<Sr.length;e++)if(n=Sr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var s=o.next;o.next=r,i.next=s}n.pending=i}Sr=null}return t}function Ev(t,e){do{var n=xt;try{if(Pd(),ml.current=Wl,Vl){for(var i=ct.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Vl=!1}if(Nr=0,Rt=Mt=ct=null,Ds=!1,Js=0,Vd.current=null,n===null||n.return===null){Tt=1,na=e,xt=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=It,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var m=dp(s);if(m!==null){m.flags&=-257,hp(m,s,a,o,e),m.mode&1&&fp(o,c,e),e=m,l=c;var _=e.updateQueue;if(_===null){var x=new Set;x.add(l),e.updateQueue=x}else _.add(l);break e}else{if(!(e&1)){fp(o,c,e),Yd();break e}l=Error(ne(426))}}else if(at&&a.mode&1){var p=dp(s);if(p!==null){!(p.flags&65536)&&(p.flags|=256),hp(p,s,a,o,e),bd(Go(l,a));break e}}o=l=Go(l,a),Tt!==4&&(Tt=2),Is===null?Is=[o]:Is.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var f=ov(o,l,e);rp(o,f);break e;case 1:a=l;var g=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Yi===null||!Yi.has(v)))){o.flags|=65536,e&=-e,o.lanes|=e;var y=sv(o,a,e);rp(o,y);break e}}o=o.return}while(o!==null)}wv(n)}catch(M){e=M,xt===n&&n!==null&&(xt=n=n.return);continue}break}while(1)}function Mv(){var t=jl.current;return jl.current=Wl,t===null?Wl:t}function Yd(){(Tt===0||Tt===3||Tt===2)&&(Tt=4),Lt===null||!(Or&268435455)&&!(hc&268435455)||Fi(Lt,It)}function Yl(t,e){var n=Ye;Ye|=2;var i=Mv();(Lt!==t||It!==e)&&(fi=null,Tr(t,e));do try{dS();break}catch(r){Ev(t,r)}while(1);if(Pd(),Ye=n,jl.current=i,xt!==null)throw Error(ne(261));return Lt=null,It=0,Tt}function dS(){for(;xt!==null;)Tv(xt)}function hS(){for(;xt!==null&&!kx();)Tv(xt)}function Tv(t){var e=Cv(t.alternate,t,fn);t.memoizedProps=t.pendingProps,e===null?wv(t):xt=e,Vd.current=null}function wv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=sS(n,e),n!==null){n.flags&=32767,xt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Tt=6,xt=null;return}}else if(n=oS(n,e,fn),n!==null){xt=n;return}if(e=e.sibling,e!==null){xt=e;return}xt=e=t}while(e!==null);Tt===0&&(Tt=5)}function gr(t,e,n){var i=Ze,r=An.transition;try{An.transition=null,Ze=1,pS(t,e,n,i)}finally{An.transition=r,Ze=i}return null}function pS(t,e,n,i){do Io();while(zi!==null);if(Ye&6)throw Error(ne(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(Yx(t,o),t===Lt&&(xt=Lt=null,It=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Oa||(Oa=!0,bv(Rl,function(){return Io(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=An.transition,An.transition=null;var s=Ze;Ze=1;var a=Ye;Ye|=4,Vd.current=null,lS(t,n),xv(n,t),Iy(mf),Ll=!!pf,mf=pf=null,t.current=n,cS(n),zx(),Ye=a,Ze=s,An.transition=o}else t.current=n;if(Oa&&(Oa=!1,zi=t,$l=r),o=t.pendingLanes,o===0&&(Yi=null),Gx(n.stateNode),on(t,pt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Xl)throw Xl=!1,t=Nf,Nf=null,t;return $l&1&&t.tag!==0&&Io(),o=t.pendingLanes,o&1?t===Of?Ns++:(Ns=0,Of=t):Ns=0,ar(),null}function Io(){if(zi!==null){var t=r0($l),e=An.transition,n=Ze;try{if(An.transition=null,Ze=16>t?16:t,zi===null)var i=!1;else{if(t=zi,zi=null,$l=0,Ye&6)throw Error(ne(331));var r=Ye;for(Ye|=4,_e=t.current;_e!==null;){var o=_e,s=o.child;if(_e.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(_e=c;_e!==null;){var u=_e;switch(u.tag){case 0:case 11:case 15:Us(8,u,o)}var d=u.child;if(d!==null)d.return=u,_e=d;else for(;_e!==null;){u=_e;var h=u.sibling,m=u.return;if(gv(u),u===c){_e=null;break}if(h!==null){h.return=m,_e=h;break}_e=m}}}var _=o.alternate;if(_!==null){var x=_.child;if(x!==null){_.child=null;do{var p=x.sibling;x.sibling=null,x=p}while(x!==null)}}_e=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,_e=s;else e:for(;_e!==null;){if(o=_e,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Us(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,_e=f;break e}_e=o.return}}var g=t.current;for(_e=g;_e!==null;){s=_e;var v=s.child;if(s.subtreeFlags&2064&&v!==null)v.return=s,_e=v;else e:for(s=g;_e!==null;){if(a=_e,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:dc(9,a)}}catch(M){dt(a,a.return,M)}if(a===s){_e=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,_e=y;break e}_e=a.return}}if(Ye=r,ar(),Jn&&typeof Jn.onPostCommitFiberRoot=="function")try{Jn.onPostCommitFiberRoot(rc,t)}catch{}i=!0}return i}finally{Ze=n,An.transition=e}}return!1}function Ap(t,e,n){e=Go(n,e),e=ov(t,e,1),t=$i(t,e,1),e=Kt(),t!==null&&(fa(t,1,e),on(t,e))}function dt(t,e,n){if(t.tag===3)Ap(t,t,n);else for(;e!==null;){if(e.tag===3){Ap(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Yi===null||!Yi.has(i))){t=Go(n,t),t=sv(e,t,1),e=$i(e,t,1),t=Kt(),e!==null&&(fa(e,1,t),on(e,t));break}}e=e.return}}function mS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Kt(),t.pingedLanes|=t.suspendedLanes&n,Lt===t&&(It&n)===n&&(Tt===4||Tt===3&&(It&130023424)===It&&500>pt()-jd?Tr(t,0):Wd|=n),on(t,e)}function Av(t,e){e===0&&(t.mode&1?(e=Aa,Aa<<=1,!(Aa&130023424)&&(Aa=4194304)):e=1);var n=Kt();t=Ei(t,e),t!==null&&(fa(t,e,n),on(t,n))}function gS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Av(t,n)}function vS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),Av(t,n)}var Cv;Cv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||nn.current)en=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return en=!1,rS(t,e,n);en=!!(t.flags&131072)}else en=!1,at&&e.flags&1048576&&P0(e,kl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;vl(t,e),t=e.pendingProps;var r=ko(e,Vt.current);Uo(e,n),r=kd(null,e,i,t,r,n);var o=zd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,rn(i)?(o=!0,Ol(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Ud(e),r.updater=uc,e.stateNode=r,r._reactInternals=e,Tf(e,i,t,n),e=Cf(null,e,i,!0,o,n)):(e.tag=0,at&&o&&Ad(e),Yt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(vl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=xS(i),t=Nn(i,t),r){case 0:e=Af(null,e,i,t,n);break e;case 1:e=gp(null,e,i,t,n);break e;case 11:e=pp(null,e,i,t,n);break e;case 14:e=mp(null,e,i,Nn(i.type,t),n);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),Af(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),gp(t,e,i,r,n);case 3:e:{if(uv(e),t===null)throw Error(ne(387));i=e.pendingProps,o=e.memoizedState,r=o.element,I0(t,e),Hl(e,i,null,n);var s=e.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=Go(Error(ne(423)),e),e=vp(t,e,i,n,r);break e}else if(i!==r){r=Go(Error(ne(424)),e),e=vp(t,e,i,n,r);break e}else for(hn=Xi(e.stateNode.containerInfo.firstChild),pn=e,at=!0,Fn=null,n=k0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(zo(),i===r){e=Mi(t,e,n);break e}Yt(t,e,i,n)}e=e.child}return e;case 5:return z0(e),t===null&&Sf(e),i=e.type,r=e.pendingProps,o=t!==null?t.memoizedProps:null,s=r.children,gf(i,r)?s=null:o!==null&&gf(i,o)&&(e.flags|=32),cv(t,e),Yt(t,e,s,n),e.child;case 6:return t===null&&Sf(e),null;case 13:return fv(t,e,n);case 4:return Id(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Bo(e,null,i,n):Yt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),pp(t,e,i,r,n);case 7:return Yt(t,e,e.pendingProps,n),e.child;case 8:return Yt(t,e,e.pendingProps.children,n),e.child;case 12:return Yt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,s=r.value,Je(zl,i._currentValue),i._currentValue=s,o!==null)if(Xn(o.value,s)){if(o.children===r.children&&!nn.current){e=Mi(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=xi(-1,n&-n),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ef(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(ne(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Ef(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Yt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Uo(e,n),r=Cn(r),i=i(r),e.flags|=1,Yt(t,e,i,n),e.child;case 14:return i=e.type,r=Nn(i,e.pendingProps),r=Nn(i.type,r),mp(t,e,i,r,n);case 15:return av(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),vl(t,e),e.tag=1,rn(i)?(t=!0,Ol(e)):t=!1,Uo(e,n),O0(e,i,r),Tf(e,i,r,n),Cf(null,e,i,!0,t,n);case 19:return dv(t,e,n);case 22:return lv(t,e,n)}throw Error(ne(156,e.tag))};function bv(t,e){return e0(t,e)}function _S(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wn(t,e,n,i){return new _S(t,e,n,i)}function qd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function xS(t){if(typeof t=="function")return qd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===pd)return 11;if(t===md)return 14}return 2}function Ki(t,e){var n=t.alternate;return n===null?(n=wn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function yl(t,e,n,i,r,o){var s=2;if(i=t,typeof t=="function")qd(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case go:return wr(n.children,r,o,e);case hd:s=8,r|=8;break;case $u:return t=wn(12,n,e,r|2),t.elementType=$u,t.lanes=o,t;case Yu:return t=wn(13,n,e,r),t.elementType=Yu,t.lanes=o,t;case qu:return t=wn(19,n,e,r),t.elementType=qu,t.lanes=o,t;case Fg:return pc(n,r,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ng:s=10;break e;case Og:s=9;break e;case pd:s=11;break e;case md:s=14;break e;case Di:s=16,i=null;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=wn(s,n,e,r),e.elementType=t,e.type=i,e.lanes=o,e}function wr(t,e,n,i){return t=wn(7,t,i,e),t.lanes=n,t}function pc(t,e,n,i){return t=wn(22,t,i,e),t.elementType=Fg,t.lanes=n,t.stateNode={isHidden:!1},t}function ru(t,e,n){return t=wn(6,t,null,e),t.lanes=n,t}function ou(t,e,n){return e=wn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function yS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zc(0),this.expirationTimes=zc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Kd(t,e,n,i,r,o,s,a,l){return t=new yS(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=wn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ud(o),t}function SS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:mo,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Rv(t){if(!t)return ir;t=t._reactInternals;e:{if(Gr(t)!==t||t.tag!==1)throw Error(ne(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(rn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(t.tag===1){var n=t.type;if(rn(n))return b0(t,n,e)}return e}function Pv(t,e,n,i,r,o,s,a,l){return t=Kd(n,i,!0,t,r,o,s,a,l),t.context=Rv(null),n=t.current,i=Kt(),r=qi(n),o=xi(i,r),o.callback=e??null,$i(n,o,r),t.current.lanes=r,fa(t,r,i),on(t,i),t}function mc(t,e,n,i){var r=e.current,o=Kt(),s=qi(r);return n=Rv(n),e.context===null?e.context=n:e.pendingContext=n,e=xi(o,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=$i(r,e,s),t!==null&&(Wn(t,r,s,o),pl(t,r,s)),s}function ql(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Cp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Zd(t,e){Cp(t,e),(t=t.alternate)&&Cp(t,e)}function ES(){return null}var Lv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Qd(t){this._internalRoot=t}gc.prototype.render=Qd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));mc(t,e,null,null)};gc.prototype.unmount=Qd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Fr(function(){mc(null,t,null,null)}),e[Si]=null}};function gc(t){this._internalRoot=t}gc.prototype.unstable_scheduleHydration=function(t){if(t){var e=a0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Oi.length&&e!==0&&e<Oi[n].priority;n++);Oi.splice(n,0,t),n===0&&c0(t)}};function Jd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function vc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function bp(){}function MS(t,e,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var c=ql(s);o.call(c)}}var s=Pv(e,i,t,0,null,!1,!1,"",bp);return t._reactRootContainer=s,t[Si]=s.current,Ys(t.nodeType===8?t.parentNode:t),Fr(),s}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=ql(l);a.call(c)}}var l=Kd(t,0,!1,null,null,!1,!1,"",bp);return t._reactRootContainer=l,t[Si]=l.current,Ys(t.nodeType===8?t.parentNode:t),Fr(function(){mc(e,l,n,i)}),l}function _c(t,e,n,i,r){var o=n._reactRootContainer;if(o){var s=o;if(typeof r=="function"){var a=r;r=function(){var l=ql(s);a.call(l)}}mc(e,s,t,r)}else s=MS(n,e,t,r,i);return ql(s)}o0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Es(e.pendingLanes);n!==0&&(_d(e,n|1),on(e,pt()),!(Ye&6)&&(Vo=pt()+500,ar()))}break;case 13:Fr(function(){var i=Ei(t,1);if(i!==null){var r=Kt();Wn(i,t,1,r)}}),Zd(t,1)}};xd=function(t){if(t.tag===13){var e=Ei(t,134217728);if(e!==null){var n=Kt();Wn(e,t,134217728,n)}Zd(t,134217728)}};s0=function(t){if(t.tag===13){var e=qi(t),n=Ei(t,e);if(n!==null){var i=Kt();Wn(n,t,e,i)}Zd(t,e)}};a0=function(){return Ze};l0=function(t,e){var n=Ze;try{return Ze=t,e()}finally{Ze=n}};sf=function(t,e,n){switch(e){case"input":if(Qu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=lc(i);if(!r)throw Error(ne(90));zg(i),Qu(i,r)}}}break;case"textarea":Hg(t,n);break;case"select":e=n.value,e!=null&&Ro(t,!!n.multiple,e,!1)}};Yg=Xd;qg=Fr;var TS={usingClientEntryPoint:!1,Events:[ha,yo,lc,Xg,$g,Xd]},ms={findFiberByHostInstance:yr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},wS={bundleType:ms.bundleType,version:ms.version,rendererPackageName:ms.rendererPackageName,rendererConfig:ms.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ti.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Qg(t),t===null?null:t.stateNode},findFiberByHostInstance:ms.findFiberByHostInstance||ES,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fa.isDisabled&&Fa.supportsFiber)try{rc=Fa.inject(wS),Jn=Fa}catch{}}vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=TS;vn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Jd(e))throw Error(ne(200));return SS(t,e,null,n)};vn.createRoot=function(t,e){if(!Jd(t))throw Error(ne(299));var n=!1,i="",r=Lv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Kd(t,1,!1,null,null,n,!1,i,r),t[Si]=e.current,Ys(t.nodeType===8?t.parentNode:t),new Qd(e)};vn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=Qg(e),t=t===null?null:t.stateNode,t};vn.flushSync=function(t){return Fr(t)};vn.hydrate=function(t,e,n){if(!vc(e))throw Error(ne(200));return _c(null,t,e,!0,n)};vn.hydrateRoot=function(t,e,n){if(!Jd(t))throw Error(ne(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",s=Lv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=Pv(e,null,t,1,n??null,r,!1,o,s),t[Si]=e.current,Ys(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new gc(e)};vn.render=function(t,e,n){if(!vc(e))throw Error(ne(200));return _c(null,t,e,!1,n)};vn.unmountComponentAtNode=function(t){if(!vc(t))throw Error(ne(40));return t._reactRootContainer?(Fr(function(){_c(null,null,t,!1,function(){t._reactRootContainer=null,t[Si]=null})}),!0):!1};vn.unstable_batchedUpdates=Xd;vn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!vc(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return _c(t,e,n,!1,i)};vn.version="18.2.0-next-9e3b772b8-20220608";function Dv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dv)}catch(t){console.error(t)}}Dv(),Pg.exports=vn;var AS=Pg.exports,Rp=AS;ju.createRoot=Rp.createRoot,ju.hydrateRoot=Rp.hydrateRoot;/**
 * @remix-run/router v1.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ia(){return ia=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ia.apply(this,arguments)}var Bi;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Bi||(Bi={}));const Pp="popstate";function CS(t){t===void 0&&(t={});function e(r,o){let{pathname:s="/",search:a="",hash:l=""}=Vr(r.location.hash.substr(1));return zf("",{pathname:s,search:a,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){let s=r.document.querySelector("base"),a="";if(s&&s.getAttribute("href")){let l=r.location.href,c=l.indexOf("#");a=c===-1?l:l.slice(0,c)}return a+"#"+(typeof o=="string"?o:Kl(o))}function i(r,o){xc(r.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return RS(e,n,i,t)}function yt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function xc(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function bS(){return Math.random().toString(36).substr(2,8)}function Lp(t,e){return{usr:t.state,key:t.key,idx:e}}function zf(t,e,n,i){return n===void 0&&(n=null),ia({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Vr(e):e,{state:n,key:e&&e.key||i||bS()})}function Kl(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Vr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function RS(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:o=!1}=i,s=r.history,a=Bi.Pop,l=null,c=u();c==null&&(c=0,s.replaceState(ia({},s.state,{idx:c}),""));function u(){return(s.state||{idx:null}).idx}function d(){a=Bi.Pop;let p=u(),f=p==null?null:p-c;c=p,l&&l({action:a,location:x.location,delta:f})}function h(p,f){a=Bi.Push;let g=zf(x.location,p,f);n&&n(g,p),c=u()+1;let v=Lp(g,c),y=x.createHref(g);try{s.pushState(v,"",y)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;r.location.assign(y)}o&&l&&l({action:a,location:x.location,delta:1})}function m(p,f){a=Bi.Replace;let g=zf(x.location,p,f);n&&n(g,p),c=u();let v=Lp(g,c),y=x.createHref(g);s.replaceState(v,"",y),o&&l&&l({action:a,location:x.location,delta:0})}function _(p){let f=r.location.origin!=="null"?r.location.origin:r.location.href,g=typeof p=="string"?p:Kl(p);return yt(f,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,f)}let x={get action(){return a},get location(){return t(r,s)},listen(p){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(Pp,d),l=p,()=>{r.removeEventListener(Pp,d),l=null}},createHref(p){return e(r,p)},createURL:_,encodeLocation(p){let f=_(p);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:h,replace:m,go(p){return s.go(p)}};return x}var Dp;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Dp||(Dp={}));function PS(t,e,n){n===void 0&&(n="/");let i=typeof e=="string"?Vr(e):e,r=eh(i.pathname||"/",n);if(r==null)return null;let o=Uv(t);LS(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=BS(o[a],VS(r));return s}function Uv(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(yt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=Zi([i,l.relativePath]),u=n.concat(l);o.children&&o.children.length>0&&(yt(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Uv(o.children,e,u,c)),!(o.path==null&&!o.index)&&e.push({path:c,score:kS(c,o.index),routesMeta:u})};return t.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))r(o,s);else for(let l of Iv(o.path))r(o,s,l)}),e}function Iv(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),o=n.replace(/\?$/,"");if(i.length===0)return r?[o,""]:[o];let s=Iv(i.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),r&&a.push(...s),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function LS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:zS(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const DS=/^:\w+$/,US=3,IS=2,NS=1,OS=10,FS=-2,Up=t=>t==="*";function kS(t,e){let n=t.split("/"),i=n.length;return n.some(Up)&&(i+=FS),e&&(i+=IS),n.filter(r=>!Up(r)).reduce((r,o)=>r+(DS.test(o)?US:o===""?NS:OS),i)}function zS(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function BS(t,e){let{routesMeta:n}=t,i={},r="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,c=r==="/"?e:e.slice(r.length)||"/",u=HS({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},c);if(!u)return null;Object.assign(i,u.params);let d=a.route;o.push({params:i,pathname:Zi([r,u.pathname]),pathnameBase:$S(Zi([r,u.pathnameBase])),route:d}),u.pathnameBase!=="/"&&(r=Zi([r,u.pathnameBase]))}return o}function HS(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=GS(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let o=r[0],s=o.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((c,u,d)=>{if(u==="*"){let h=a[d]||"";s=o.slice(0,o.length-h.length).replace(/(.)\/+$/,"$1")}return c[u]=WS(a[d]||"",u),c},{}),pathname:o,pathnameBase:s,pattern:t}}function GS(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),xc(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(s,a)=>(i.push(a),"/([^\\/]+)"));return t.endsWith("*")?(i.push("*"),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function VS(t){try{return decodeURI(t)}catch(e){return xc(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function WS(t,e){try{return decodeURIComponent(t)}catch(n){return xc(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function eh(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function jS(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?Vr(t):t;return{pathname:n?n.startsWith("/")?n:XS(n,e):e,search:YS(i),hash:qS(r)}}function XS(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function su(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Nv(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Ov(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=Vr(t):(r=ia({},t),yt(!r.pathname||!r.pathname.includes("?"),su("?","pathname","search",r)),yt(!r.pathname||!r.pathname.includes("#"),su("#","pathname","hash",r)),yt(!r.search||!r.search.includes("#"),su("#","search","hash",r)));let o=t===""||r.pathname==="",s=o?"/":r.pathname,a;if(i||s==null)a=n;else{let d=e.length-1;if(s.startsWith("..")){let h=s.split("/");for(;h[0]==="..";)h.shift(),d-=1;r.pathname=h.join("/")}a=d>=0?e[d]:"/"}let l=jS(r,a),c=s&&s!=="/"&&s.endsWith("/"),u=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const Zi=t=>t.join("/").replace(/\/\/+/g,"/"),$S=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),YS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,qS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function KS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Fv=["post","put","patch","delete"];new Set(Fv);const ZS=["get",...Fv];new Set(ZS);/**
 * React Router v6.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zl(){return Zl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Zl.apply(this,arguments)}const th=ae.createContext(null),QS=ae.createContext(null),ns=ae.createContext(null),yc=ae.createContext(null),lr=ae.createContext({outlet:null,matches:[],isDataRoute:!1}),kv=ae.createContext(null);function JS(t,e){let{relative:n}=e===void 0?{}:e;ma()||yt(!1);let{basename:i,navigator:r}=ae.useContext(ns),{hash:o,pathname:s,search:a}=Bv(t,{relative:n}),l=s;return i!=="/"&&(l=s==="/"?i:Zi([i,s])),r.createHref({pathname:l,search:a,hash:o})}function ma(){return ae.useContext(yc)!=null}function ga(){return ma()||yt(!1),ae.useContext(yc).location}function zv(t){ae.useContext(ns).static||ae.useLayoutEffect(t)}function eE(){let{isDataRoute:t}=ae.useContext(lr);return t?mE():tE()}function tE(){ma()||yt(!1);let t=ae.useContext(th),{basename:e,navigator:n}=ae.useContext(ns),{matches:i}=ae.useContext(lr),{pathname:r}=ga(),o=JSON.stringify(Nv(i).map(l=>l.pathnameBase)),s=ae.useRef(!1);return zv(()=>{s.current=!0}),ae.useCallback(function(l,c){if(c===void 0&&(c={}),!s.current)return;if(typeof l=="number"){n.go(l);return}let u=Ov(l,JSON.parse(o),r,c.relative==="path");t==null&&e!=="/"&&(u.pathname=u.pathname==="/"?e:Zi([e,u.pathname])),(c.replace?n.replace:n.push)(u,c.state,c)},[e,n,o,r,t])}const nE=ae.createContext(null);function iE(t){let e=ae.useContext(lr).outlet;return e&&ae.createElement(nE.Provider,{value:t},e)}function Bv(t,e){let{relative:n}=e===void 0?{}:e,{matches:i}=ae.useContext(lr),{pathname:r}=ga(),o=JSON.stringify(Nv(i).map(s=>s.pathnameBase));return ae.useMemo(()=>Ov(t,JSON.parse(o),r,n==="path"),[t,o,r,n])}function rE(t,e){return oE(t,e)}function oE(t,e,n){ma()||yt(!1);let{navigator:i}=ae.useContext(ns),{matches:r}=ae.useContext(lr),o=r[r.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let l=ga(),c;if(e){var u;let x=typeof e=="string"?Vr(e):e;a==="/"||(u=x.pathname)!=null&&u.startsWith(a)||yt(!1),c=x}else c=l;let d=c.pathname||"/",h=a==="/"?d:d.slice(a.length)||"/",m=PS(t,{pathname:h}),_=uE(m&&m.map(x=>Object.assign({},x,{params:Object.assign({},s,x.params),pathname:Zi([a,i.encodeLocation?i.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?a:Zi([a,i.encodeLocation?i.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),r,n);return e&&_?ae.createElement(yc.Provider,{value:{location:Zl({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Bi.Pop}},_):_}function sE(){let t=pE(),e=KS(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return ae.createElement(ae.Fragment,null,ae.createElement("h2",null,"Unexpected Application Error!"),ae.createElement("h3",{style:{fontStyle:"italic"}},e),n?ae.createElement("pre",{style:r},n):null,o)}const aE=ae.createElement(sE,null);class lE extends ae.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?ae.createElement(lr.Provider,{value:this.props.routeContext},ae.createElement(kv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function cE(t){let{routeContext:e,match:n,children:i}=t,r=ae.useContext(th);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),ae.createElement(lr.Provider,{value:e},i)}function uE(t,e,n){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var r;if((r=n)!=null&&r.errors)t=n.matches;else return null}let o=t,s=(i=n)==null?void 0:i.errors;if(s!=null){let a=o.findIndex(l=>l.route.id&&(s==null?void 0:s[l.route.id]));a>=0||yt(!1),o=o.slice(0,Math.min(o.length,a+1))}return o.reduceRight((a,l,c)=>{let u=l.route.id?s==null?void 0:s[l.route.id]:null,d=null;n&&(d=l.route.errorElement||aE);let h=e.concat(o.slice(0,c+1)),m=()=>{let _;return u?_=d:l.route.Component?_=ae.createElement(l.route.Component,null):l.route.element?_=l.route.element:_=a,ae.createElement(cE,{match:l,routeContext:{outlet:a,matches:h,isDataRoute:n!=null},children:_})};return n&&(l.route.ErrorBoundary||l.route.errorElement||c===0)?ae.createElement(lE,{location:n.location,revalidation:n.revalidation,component:d,error:u,children:m(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):m()},null)}var Bf;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(Bf||(Bf={}));var ra;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(ra||(ra={}));function fE(t){let e=ae.useContext(th);return e||yt(!1),e}function dE(t){let e=ae.useContext(QS);return e||yt(!1),e}function hE(t){let e=ae.useContext(lr);return e||yt(!1),e}function Hv(t){let e=hE(),n=e.matches[e.matches.length-1];return n.route.id||yt(!1),n.route.id}function pE(){var t;let e=ae.useContext(kv),n=dE(ra.UseRouteError),i=Hv(ra.UseRouteError);return e||((t=n.errors)==null?void 0:t[i])}function mE(){let{router:t}=fE(Bf.UseNavigateStable),e=Hv(ra.UseNavigateStable),n=ae.useRef(!1);return zv(()=>{n.current=!0}),ae.useCallback(function(r,o){o===void 0&&(o={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,Zl({fromRouteId:e},o)))},[t,e])}function gE(t){return iE(t.context)}function vr(t){yt(!1)}function vE(t){let{basename:e="/",children:n=null,location:i,navigationType:r=Bi.Pop,navigator:o,static:s=!1}=t;ma()&&yt(!1);let a=e.replace(/^\/*/,"/"),l=ae.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof i=="string"&&(i=Vr(i));let{pathname:c="/",search:u="",hash:d="",state:h=null,key:m="default"}=i,_=ae.useMemo(()=>{let x=eh(c,a);return x==null?null:{location:{pathname:x,search:u,hash:d,state:h,key:m},navigationType:r}},[a,c,u,d,h,m,r]);return _==null?null:ae.createElement(ns.Provider,{value:l},ae.createElement(yc.Provider,{children:n,value:_}))}function _E(t){let{children:e,location:n}=t;return rE(Hf(e),n)}var Ip;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Ip||(Ip={}));new Promise(()=>{});function Hf(t,e){e===void 0&&(e=[]);let n=[];return ae.Children.forEach(t,(i,r)=>{if(!ae.isValidElement(i))return;let o=[...e,r];if(i.type===ae.Fragment){n.push.apply(n,Hf(i.props.children,o));return}i.type!==vr&&yt(!1),!i.props.index||!i.props.children||yt(!1);let s={id:i.props.id||o.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(s.children=Hf(i.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gf(){return Gf=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Gf.apply(this,arguments)}function xE(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,o;for(o=0;o<i.length;o++)r=i[o],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function yE(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function SE(t,e){return t.button===0&&(!e||e==="_self")&&!yE(t)}const EE=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],ME="startTransition",Np=gx[ME];function TE(t){let{basename:e,children:n,future:i,window:r}=t,o=ae.useRef();o.current==null&&(o.current=CS({window:r,v5Compat:!0}));let s=o.current,[a,l]=ae.useState({action:s.action,location:s.location}),{v7_startTransition:c}=i||{},u=ae.useCallback(d=>{c&&Np?Np(()=>l(d)):l(d)},[l,c]);return ae.useLayoutEffect(()=>s.listen(u),[s,u]),ae.createElement(vE,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:s})}const wE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",AE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,kn=ae.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:o,replace:s,state:a,target:l,to:c,preventScrollReset:u}=e,d=xE(e,EE),{basename:h}=ae.useContext(ns),m,_=!1;if(typeof c=="string"&&AE.test(c)&&(m=c,wE))try{let g=new URL(window.location.href),v=c.startsWith("//")?new URL(g.protocol+c):new URL(c),y=eh(v.pathname,h);v.origin===g.origin&&y!=null?c=y+v.search+v.hash:_=!0}catch{}let x=JS(c,{relative:r}),p=CE(c,{replace:s,state:a,target:l,preventScrollReset:u,relative:r});function f(g){i&&i(g),g.defaultPrevented||p(g)}return ae.createElement("a",Gf({},d,{href:m||x,onClick:_||o?i:f,ref:n,target:l}))});var Op;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(Op||(Op={}));var Fp;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Fp||(Fp={}));function CE(t,e){let{target:n,replace:i,state:r,preventScrollReset:o,relative:s}=e===void 0?{}:e,a=eE(),l=ga(),c=Bv(t,{relative:s});return ae.useCallback(u=>{if(SE(u,n)){u.preventDefault();let d=i!==void 0?i:Kl(l)===Kl(c);a(t,{replace:d,state:r,preventScrollReset:o,relative:s})}},[l,a,c,i,r,n,t,o,s])}var tn=function(){return tn=Object.assign||function(e){for(var n,i=1,r=arguments.length;i<r;i++){n=arguments[i];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},tn.apply(this,arguments)};function Ql(t,e,n){if(n||arguments.length===2)for(var i=0,r=e.length,o;i<r;i++)(o||!(i in e))&&(o||(o=Array.prototype.slice.call(e,0,i)),o[i]=e[i]);return t.concat(o||Array.prototype.slice.call(e))}function bE(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var RE=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,PE=bE(function(t){return RE.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),LE=function(e,n,i,r){var o=i?i.call(r,e,n):void 0;if(o!==void 0)return!!o;if(e===n)return!0;if(typeof e!="object"||!e||typeof n!="object"||!n)return!1;var s=Object.keys(e),a=Object.keys(n);if(s.length!==a.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(n),c=0;c<s.length;c++){var u=s[c];if(!l(u))return!1;var d=e[u],h=n[u];if(o=i?i.call(r,d,h,u):void 0,o===!1||o===void 0&&d!==h)return!1}return!0};const DE=od(LE);var rt="-ms-",Os="-moz-",qe="-webkit-",Gv="comm",Sc="rule",nh="decl",UE="@import",Vv="@keyframes",IE="@layer",NE=Math.abs,ih=String.fromCharCode,Vf=Object.assign;function OE(t,e){return Pt(t,0)^45?(((e<<2^Pt(t,0))<<2^Pt(t,1))<<2^Pt(t,2))<<2^Pt(t,3):0}function Wv(t){return t.trim()}function di(t,e){return(t=e.exec(t))?t[0]:t}function Fe(t,e,n){return t.replace(e,n)}function Sl(t,e){return t.indexOf(e)}function Pt(t,e){return t.charCodeAt(e)|0}function Wo(t,e,n){return t.slice(e,n)}function Kn(t){return t.length}function jv(t){return t.length}function Ts(t,e){return e.push(t),t}function FE(t,e){return t.map(e).join("")}function kp(t,e){return t.filter(function(n){return!di(n,e)})}var Ec=1,jo=1,Xv=0,Rn=0,_t=0,is="";function Mc(t,e,n,i,r,o,s,a){return{value:t,root:e,parent:n,type:i,props:r,children:o,line:Ec,column:jo,length:s,return:"",siblings:a}}function Li(t,e){return Vf(Mc("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function $r(t){for(;t.root;)t=Li(t.root,{children:[t]});Ts(t,t.siblings)}function kE(){return _t}function zE(){return _t=Rn>0?Pt(is,--Rn):0,jo--,_t===10&&(jo=1,Ec--),_t}function jn(){return _t=Rn<Xv?Pt(is,Rn++):0,jo++,_t===10&&(jo=1,Ec++),_t}function Ar(){return Pt(is,Rn)}function El(){return Rn}function Tc(t,e){return Wo(is,t,e)}function Wf(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function BE(t){return Ec=jo=1,Xv=Kn(is=t),Rn=0,[]}function HE(t){return is="",t}function au(t){return Wv(Tc(Rn-1,jf(t===91?t+2:t===40?t+1:t)))}function GE(t){for(;(_t=Ar())&&_t<33;)jn();return Wf(t)>2||Wf(_t)>3?"":" "}function VE(t,e){for(;--e&&jn()&&!(_t<48||_t>102||_t>57&&_t<65||_t>70&&_t<97););return Tc(t,El()+(e<6&&Ar()==32&&jn()==32))}function jf(t){for(;jn();)switch(_t){case t:return Rn;case 34:case 39:t!==34&&t!==39&&jf(_t);break;case 40:t===41&&jf(t);break;case 92:jn();break}return Rn}function WE(t,e){for(;jn()&&t+_t!==47+10;)if(t+_t===42+42&&Ar()===47)break;return"/*"+Tc(e,Rn-1)+"*"+ih(t===47?t:jn())}function jE(t){for(;!Wf(Ar());)jn();return Tc(t,Rn)}function XE(t){return HE(Ml("",null,null,null,[""],t=BE(t),0,[0],t))}function Ml(t,e,n,i,r,o,s,a,l){for(var c=0,u=0,d=s,h=0,m=0,_=0,x=1,p=1,f=1,g=0,v="",y=r,M=o,C=i,E=v;p;)switch(_=g,g=jn()){case 40:if(_!=108&&Pt(E,d-1)==58){Sl(E+=Fe(au(g),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:E+=au(g);break;case 9:case 10:case 13:case 32:E+=GE(_);break;case 92:E+=VE(El()-1,7);continue;case 47:switch(Ar()){case 42:case 47:Ts($E(WE(jn(),El()),e,n,l),l);break;default:E+="/"}break;case 123*x:a[c++]=Kn(E)*f;case 125*x:case 59:case 0:switch(g){case 0:case 125:p=0;case 59+u:f==-1&&(E=Fe(E,/\f/g,"")),m>0&&Kn(E)-d&&Ts(m>32?Bp(E+";",i,n,d-1,l):Bp(Fe(E," ","")+";",i,n,d-2,l),l);break;case 59:E+=";";default:if(Ts(C=zp(E,e,n,c,u,r,a,v,y=[],M=[],d,o),o),g===123)if(u===0)Ml(E,e,C,C,y,o,d,a,M);else switch(h===99&&Pt(E,3)===110?100:h){case 100:case 108:case 109:case 115:Ml(t,C,C,i&&Ts(zp(t,C,C,0,0,r,a,v,r,y=[],d,M),M),r,M,d,a,i?y:M);break;default:Ml(E,C,C,C,[""],M,0,a,M)}}c=u=m=0,x=f=1,v=E="",d=s;break;case 58:d=1+Kn(E),m=_;default:if(x<1){if(g==123)--x;else if(g==125&&x++==0&&zE()==125)continue}switch(E+=ih(g),g*x){case 38:f=u>0?1:(E+="\f",-1);break;case 44:a[c++]=(Kn(E)-1)*f,f=1;break;case 64:Ar()===45&&(E+=au(jn())),h=Ar(),u=d=Kn(v=E+=jE(El())),g++;break;case 45:_===45&&Kn(E)==2&&(x=0)}}return o}function zp(t,e,n,i,r,o,s,a,l,c,u,d){for(var h=r-1,m=r===0?o:[""],_=jv(m),x=0,p=0,f=0;x<i;++x)for(var g=0,v=Wo(t,h+1,h=NE(p=s[x])),y=t;g<_;++g)(y=Wv(p>0?m[g]+" "+v:Fe(v,/&\f/g,m[g])))&&(l[f++]=y);return Mc(t,e,n,r===0?Sc:a,l,c,u,d)}function $E(t,e,n,i){return Mc(t,e,n,Gv,ih(kE()),Wo(t,2,-2),0,i)}function Bp(t,e,n,i,r){return Mc(t,e,n,nh,Wo(t,0,i),Wo(t,i+1,-1),i,r)}function $v(t,e,n){switch(OE(t,e)){case 5103:return qe+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return qe+t+t;case 4789:return Os+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return qe+t+Os+t+rt+t+t;case 5936:switch(Pt(t,e+11)){case 114:return qe+t+rt+Fe(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return qe+t+rt+Fe(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return qe+t+rt+Fe(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return qe+t+rt+t+t;case 6165:return qe+t+rt+"flex-"+t+t;case 5187:return qe+t+Fe(t,/(\w+).+(:[^]+)/,qe+"box-$1$2"+rt+"flex-$1$2")+t;case 5443:return qe+t+rt+"flex-item-"+Fe(t,/flex-|-self/g,"")+(di(t,/flex-|baseline/)?"":rt+"grid-row-"+Fe(t,/flex-|-self/g,""))+t;case 4675:return qe+t+rt+"flex-line-pack"+Fe(t,/align-content|flex-|-self/g,"")+t;case 5548:return qe+t+rt+Fe(t,"shrink","negative")+t;case 5292:return qe+t+rt+Fe(t,"basis","preferred-size")+t;case 6060:return qe+"box-"+Fe(t,"-grow","")+qe+t+rt+Fe(t,"grow","positive")+t;case 4554:return qe+Fe(t,/([^-])(transform)/g,"$1"+qe+"$2")+t;case 6187:return Fe(Fe(Fe(t,/(zoom-|grab)/,qe+"$1"),/(image-set)/,qe+"$1"),t,"")+t;case 5495:case 3959:return Fe(t,/(image-set\([^]*)/,qe+"$1$`$1");case 4968:return Fe(Fe(t,/(.+:)(flex-)?(.*)/,qe+"box-pack:$3"+rt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+qe+t+t;case 4200:if(!di(t,/flex-|baseline/))return rt+"grid-column-align"+Wo(t,e)+t;break;case 2592:case 3360:return rt+Fe(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(i,r){return e=r,di(i.props,/grid-\w+-end/)})?~Sl(t+(n=n[e].value),"span")?t:rt+Fe(t,"-start","")+t+rt+"grid-row-span:"+(~Sl(n,"span")?di(n,/\d+/):+di(n,/\d+/)-+di(t,/\d+/))+";":rt+Fe(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(i){return di(i.props,/grid-\w+-start/)})?t:rt+Fe(Fe(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return Fe(t,/(.+)-inline(.+)/,qe+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Kn(t)-1-e>6)switch(Pt(t,e+1)){case 109:if(Pt(t,e+4)!==45)break;case 102:return Fe(t,/(.+:)(.+)-([^]+)/,"$1"+qe+"$2-$3$1"+Os+(Pt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Sl(t,"stretch")?$v(Fe(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return Fe(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,r,o,s,a,l,c){return rt+r+":"+o+c+(s?rt+r+"-span:"+(a?l:+l-+o)+c:"")+t});case 4949:if(Pt(t,e+6)===121)return Fe(t,":",":"+qe)+t;break;case 6444:switch(Pt(t,Pt(t,14)===45?18:11)){case 120:return Fe(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+qe+(Pt(t,14)===45?"inline-":"")+"box$3$1"+qe+"$2$3$1"+rt+"$2box$3")+t;case 100:return Fe(t,":",":"+rt)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Fe(t,"scroll-","scroll-snap-")+t}return t}function Jl(t,e){for(var n="",i=0;i<t.length;i++)n+=e(t[i],i,t,e)||"";return n}function YE(t,e,n,i){switch(t.type){case IE:if(t.children.length)break;case UE:case nh:return t.return=t.return||t.value;case Gv:return"";case Vv:return t.return=t.value+"{"+Jl(t.children,i)+"}";case Sc:if(!Kn(t.value=t.props.join(",")))return""}return Kn(n=Jl(t.children,i))?t.return=t.value+"{"+n+"}":""}function qE(t){var e=jv(t);return function(n,i,r,o){for(var s="",a=0;a<e;a++)s+=t[a](n,i,r,o)||"";return s}}function KE(t){return function(e){e.root||(e=e.return)&&t(e)}}function ZE(t,e,n,i){if(t.length>-1&&!t.return)switch(t.type){case nh:t.return=$v(t.value,t.length,n);return;case Vv:return Jl([Li(t,{value:Fe(t.value,"@","@"+qe)})],i);case Sc:if(t.length)return FE(n=t.props,function(r){switch(di(r,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":$r(Li(t,{props:[Fe(r,/:(read-\w+)/,":"+Os+"$1")]})),$r(Li(t,{props:[r]})),Vf(t,{props:kp(n,i)});break;case"::placeholder":$r(Li(t,{props:[Fe(r,/:(plac\w+)/,":"+qe+"input-$1")]})),$r(Li(t,{props:[Fe(r,/:(plac\w+)/,":"+Os+"$1")]})),$r(Li(t,{props:[Fe(r,/:(plac\w+)/,rt+"input-$1")]})),$r(Li(t,{props:[r]})),Vf(t,{props:kp(n,i)});break}return""})}}var QE={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Xo=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",rh=typeof window<"u"&&"HTMLElement"in window,JE=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),wc=Object.freeze([]),$o=Object.freeze({});function eM(t,e,n){return n===void 0&&(n=$o),t.theme!==n.theme&&t.theme||e||n.theme}var Yv=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),tM=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,nM=/(^-|-$)/g;function Hp(t){return t.replace(tM,"-").replace(nM,"")}var iM=/(a)(d)/gi,Gp=function(t){return String.fromCharCode(t+(t>25?39:97))};function Xf(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=Gp(e%52)+n;return(Gp(e%52)+n).replace(iM,"$1-$2")}var lu,Co=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},qv=function(t){return Co(5381,t)};function rM(t){return Xf(qv(t)>>>0)}function oM(t){return t.displayName||t.name||"Component"}function cu(t){return typeof t=="string"&&!0}var Kv=typeof Symbol=="function"&&Symbol.for,Zv=Kv?Symbol.for("react.memo"):60115,sM=Kv?Symbol.for("react.forward_ref"):60112,aM={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},lM={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Qv={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},cM=((lu={})[sM]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},lu[Zv]=Qv,lu);function Vp(t){return("type"in(e=t)&&e.type.$$typeof)===Zv?Qv:"$$typeof"in t?cM[t.$$typeof]:aM;var e}var uM=Object.defineProperty,fM=Object.getOwnPropertyNames,Wp=Object.getOwnPropertySymbols,dM=Object.getOwnPropertyDescriptor,hM=Object.getPrototypeOf,jp=Object.prototype;function Jv(t,e,n){if(typeof e!="string"){if(jp){var i=hM(e);i&&i!==jp&&Jv(t,i,n)}var r=fM(e);Wp&&(r=r.concat(Wp(e)));for(var o=Vp(t),s=Vp(e),a=0;a<r.length;++a){var l=r[a];if(!(l in lM||n&&n[l]||s&&l in s||o&&l in o)){var c=dM(e,l);try{uM(t,l,c)}catch{}}}}return t}function Yo(t){return typeof t=="function"}function oh(t){return typeof t=="object"&&"styledComponentId"in t}function Mr(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Xp(t,e){if(t.length===0)return"";for(var n=t[0],i=1;i<t.length;i++)n+=e?e+t[i]:t[i];return n}function oa(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function $f(t,e,n){if(n===void 0&&(n=!1),!n&&!oa(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var i=0;i<e.length;i++)t[i]=$f(t[i],e[i]);else if(oa(e))for(var i in e)t[i]=$f(t[i],e[i]);return t}function sh(t,e){Object.defineProperty(t,"toString",{value:e})}function va(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var pM=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,i=0;i<e;i++)n+=this.groupSizes[i];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var i=this.groupSizes,r=i.length,o=r;e>=o;)if((o<<=1)<0)throw va(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var s=r;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(e+1),l=(s=0,n.length);s<l;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],i=this.indexOfGroup(e),r=i+n;this.groupSizes[e]=0;for(var o=i;o<r;o++)this.tag.deleteRule(i)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var i=this.groupSizes[e],r=this.indexOfGroup(e),o=r+i,s=r;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(`/*!sc*/
`);return n},t}(),Tl=new Map,ec=new Map,uu=1,ka=function(t){if(Tl.has(t))return Tl.get(t);for(;ec.has(uu);)uu++;var e=uu++;return Tl.set(t,e),ec.set(e,t),e},mM=function(t,e){Tl.set(t,e),ec.set(e,t)},gM="style[".concat(Xo,"][").concat("data-styled-version",'="').concat("6.0.2",'"]'),vM=new RegExp("^".concat(Xo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),_M=function(t,e,n){for(var i,r=n.split(","),o=0,s=r.length;o<s;o++)(i=r[o])&&t.registerName(e,i)},xM=function(t,e){for(var n,i=((n=e.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),r=[],o=0,s=i.length;o<s;o++){var a=i[o].trim();if(a){var l=a.match(vM);if(l){var c=0|parseInt(l[1],10),u=l[2];c!==0&&(mM(u,c),_M(t,u,l[3]),t.getTag().insertRules(c,r)),r.length=0}else r.push(a)}}};function yM(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var e_=function(t){var e=document.head,n=t||e,i=document.createElement("style"),r=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Xo,"]")));return l[l.length-1]}(n),o=r!==void 0?r.nextSibling:null;i.setAttribute(Xo,"active"),i.setAttribute("data-styled-version","6.0.2");var s=yM();return s&&i.setAttribute("nonce",s),n.insertBefore(i,o),i},SM=function(){function t(e){this.element=e_(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var i=document.styleSheets,r=0,o=i.length;r<o;r++){var s=i[r];if(s.ownerNode===n)return s}throw va(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),EM=function(){function t(e){this.element=e_(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var i=document.createTextNode(n);return this.element.insertBefore(i,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),MM=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),$p=rh,TM={isServer:!rh,useCSSOMInjection:!JE},t_=function(){function t(e,n,i){e===void 0&&(e=$o),n===void 0&&(n={});var r=this;this.options=tn(tn({},TM),e),this.gs=n,this.names=new Map(i),this.server=!!e.isServer,!this.server&&rh&&$p&&($p=!1,function(o){for(var s=document.querySelectorAll(gM),a=0,l=s.length;a<l;a++){var c=s[a];c&&c.getAttribute(Xo)!=="active"&&(xM(o,c),c.parentNode&&c.parentNode.removeChild(c))}}(this)),sh(this,function(){return function(o){for(var s=o.getTag(),a=s.length,l="",c=function(d){var h=function(f){return ec.get(f)}(d);if(h===void 0)return"continue";var m=o.names.get(h),_=s.getGroup(d);if(m===void 0||_.length===0)return"continue";var x="".concat(Xo,".g").concat(d,'[id="').concat(h,'"]'),p="";m!==void 0&&m.forEach(function(f){f.length>0&&(p+="".concat(f,","))}),l+="".concat(_).concat(x,'{content:"').concat(p,'"}').concat(`/*!sc*/
`)},u=0;u<a;u++)c(u);return l}(r)})}return t.registerId=function(e){return ka(e)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(tn(tn({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var i=n.useCSSOMInjection,r=n.target;return n.isServer?new MM(r):i?new SM(r):new EM(r)}(this.options),new pM(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(ka(e),this.names.has(e))this.names.get(e).add(n);else{var i=new Set;i.add(n),this.names.set(e,i)}},t.prototype.insertRules=function(e,n,i){this.registerName(e,n),this.getTag().insertRules(ka(e),i)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(ka(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),wM=/&/g,AM=/^\s*\/\/.*$/gm;function n_(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(i){return"".concat(e," ").concat(i)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=n_(n.children,e)),n})}function i_(t){var e,n,i,r=t===void 0?$o:t,o=r.options,s=o===void 0?$o:o,a=r.plugins,l=a===void 0?wc:a,c=function(h,m,_){return _===n||_.startsWith(n)&&_.endsWith(n)&&_.replaceAll(n,"").length>0?".".concat(e):h},u=l.slice();u.push(function(h){h.type===Sc&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(wM,n).replace(i,c))}),s.prefix&&u.push(ZE),u.push(YE);var d=function(h,m,_,x){m===void 0&&(m=""),_===void 0&&(_=""),x===void 0&&(x="&"),e=x,n=m,i=new RegExp("\\".concat(n,"\\b"),"g");var p=h.replace(AM,""),f=XE(_||m?"".concat(_," ").concat(m," { ").concat(p," }"):p);s.namespace&&(f=n_(f,s.namespace));var g=[];return Jl(f,qE(u.concat(KE(function(v){return g.push(v)})))),g};return d.hash=l.length?l.reduce(function(h,m){return m.name||va(15),Co(h,m.name)},5381).toString():"",d}var CM=new t_,Yf=i_(),ah=tr.createContext({shouldForwardProp:void 0,styleSheet:CM,stylis:Yf});ah.Consumer;var bM=tr.createContext(void 0);function qf(){return ae.useContext(ah)}function RM(t){var e=ae.useState(t.stylisPlugins),n=e[0],i=e[1],r=qf().styleSheet,o=ae.useMemo(function(){var a=r;return t.sheet?a=t.sheet:t.target&&(a=a.reconstructWithOptions({target:t.target},!1)),t.disableCSSOMInjection&&(a=a.reconstructWithOptions({useCSSOMInjection:!1})),a},[t.disableCSSOMInjection,t.sheet,t.target,r]),s=ae.useMemo(function(){return i_({options:{namespace:t.namespace,prefix:t.enableVendorPrefixes},plugins:n})},[t.enableVendorPrefixes,t.namespace,n]);return ae.useEffect(function(){DE(n,t.stylisPlugins)||i(t.stylisPlugins)},[t.stylisPlugins]),tr.createElement(ah.Provider,{value:{shouldForwardProp:t.shouldForwardProp,styleSheet:o,stylis:s}},tr.createElement(bM.Provider,{value:s},t.children))}var PM=function(){function t(e,n){var i=this;this.inject=function(r,o){o===void 0&&(o=Yf);var s=i.name+o.hash;r.hasNameForId(i.id,s)||r.insertRules(i.id,s,o(i.rules,s,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,sh(this,function(){throw va(12,String(i.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Yf),this.name+e.hash},t}(),LM=function(t){return t>="A"&&t<="Z"};function Yp(t){for(var e="",n=0;n<t.length;n++){var i=t[n];if(n===1&&i==="-"&&t[0]==="-")return t;LM(i)?e+="-"+i.toLowerCase():e+=i}return e.startsWith("ms-")?"-"+e:e}var r_=function(t){return t==null||t===!1||t===""},o_=function(t){var e,n,i=[];for(var r in t){var o=t[r];t.hasOwnProperty(r)&&!r_(o)&&(Array.isArray(o)&&o.isCss||Yo(o)?i.push("".concat(Yp(r),":"),o,";"):oa(o)?i.push.apply(i,Ql(Ql(["".concat(r," {")],o_(o),!1),["}"],!1)):i.push("".concat(Yp(r),": ").concat((e=r,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in QE||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return i};function Cr(t,e,n,i){if(r_(t))return[];if(oh(t))return[".".concat(t.styledComponentId)];if(Yo(t)){if(!Yo(o=t)||o.prototype&&o.prototype.isReactComponent||!e)return[t];var r=t(e);return Cr(r,e,n,i)}var o;return t instanceof PM?n?(t.inject(n,i),[t.getName(i)]):[t]:oa(t)?o_(t):Array.isArray(t)?Array.prototype.concat.apply(wc,t.map(function(s){return Cr(s,e,n,i)})):[t.toString()]}function DM(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Yo(n)&&!oh(n))return!1}return!0}var UM=qv("6.0.2"),IM=function(){function t(e,n,i){this.rules=e,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&DM(e),this.componentId=n,this.baseHash=Co(UM,n),this.baseStyle=i,t_.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,i){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))r=Mr(r,this.staticRulesId);else{var o=Xp(Cr(this.rules,e,n,i)),s=Xf(Co(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=i(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}r=Mr(r,s),this.staticRulesId=s}else{for(var l=Co(this.baseHash,i.hash),c="",u=0;u<this.rules.length;u++){var d=this.rules[u];if(typeof d=="string")c+=d;else if(d){var h=Xp(Cr(d,e,n,i));l=Co(l,h),c+=h}}if(c){var m=Xf(l>>>0);n.hasNameForId(this.componentId,m)||n.insertRules(this.componentId,m,i(c,".".concat(m),void 0,this.componentId)),r=Mr(r,m)}}return r},t}(),s_=tr.createContext(void 0);s_.Consumer;var fu={};function NM(t,e,n){var i=oh(t),r=t,o=!cu(t),s=e.attrs,a=s===void 0?wc:s,l=e.componentId,c=l===void 0?function(v,y){var M=typeof v!="string"?"sc":Hp(v);fu[M]=(fu[M]||0)+1;var C="".concat(M,"-").concat(rM("6.0.2"+M+fu[M]));return y?"".concat(y,"-").concat(C):C}(e.displayName,e.parentComponentId):l,u=e.displayName;u===void 0&&function(v){return cu(v)?"styled.".concat(v):"Styled(".concat(oM(v),")")}(t);var d=e.displayName&&e.componentId?"".concat(Hp(e.displayName),"-").concat(e.componentId):e.componentId||c,h=i&&r.attrs?r.attrs.concat(a).filter(Boolean):a,m=e.shouldForwardProp;if(i&&r.shouldForwardProp){var _=r.shouldForwardProp;if(e.shouldForwardProp){var x=e.shouldForwardProp;m=function(v,y){return _(v,y)&&x(v,y)}}else m=_}var p=new IM(n,d,i?r.componentStyle:void 0);function f(v,y){return function(M,C,E){var D=M.attrs,T=M.componentStyle,A=M.defaultProps,Z=M.foldedComponentIds,ee=M.styledComponentId,H=M.target,$=tr.useContext(s_),X=qf(),J=M.shouldForwardProp||X.shouldForwardProp,Y=function(ce,re,fe){for(var xe,Se=tn(tn({},re),{className:void 0,theme:fe}),Me=0;Me<ce.length;Me+=1){var Ge=Yo(xe=ce[Me])?xe(Se):xe;for(var Qe in Ge)Se[Qe]=Qe==="className"?Mr(Se[Qe],Ge[Qe]):Qe==="style"?tn(tn({},Se[Qe]),Ge[Qe]):Ge[Qe]}return re.className&&(Se.className=Mr(Se.className,re.className)),Se}(D,C,eM(C,$,A)||$o),L=Y.as||H,W={};for(var N in Y)Y[N]===void 0||N[0]==="$"||N==="as"||N==="theme"||(N==="forwardedAs"?W.as=Y.forwardedAs:J&&!J(N,L)||(W[N]=Y[N]));var U=function(ce,re){var fe=qf(),xe=ce.generateAndInjectStyles(re,fe.styleSheet,fe.stylis);return xe}(T,Y),z=Mr(Z,ee);return U&&(z+=" "+U),Y.className&&(z+=" "+Y.className),W[cu(L)&&!Yv.has(L)?"class":"className"]=z,W.ref=E,ae.createElement(L,W)}(g,v,y)}var g=tr.forwardRef(f);return g.attrs=h,g.componentStyle=p,g.shouldForwardProp=m,g.foldedComponentIds=i?Mr(r.foldedComponentIds,r.styledComponentId):"",g.styledComponentId=d,g.target=i?r.target:t,Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=i?function(y){for(var M=[],C=1;C<arguments.length;C++)M[C-1]=arguments[C];for(var E=0,D=M;E<D.length;E++)$f(y,D[E],!0);return y}({},r.defaultProps,v):v}}),sh(g,function(){return".".concat(g.styledComponentId)}),o&&Jv(g,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),g}function qp(t,e){for(var n=[t[0]],i=0,r=e.length;i<r;i+=1)n.push(e[i],t[i+1]);return n}var Kp=function(t){return Object.assign(t,{isCss:!0})};function OM(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(Yo(t)||oa(t)){var i=t;return Kp(Cr(qp(wc,Ql([i],e,!0))))}var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?Cr(r):Kp(Cr(qp(r,e)))}function Kf(t,e,n){if(n===void 0&&(n=$o),!e)throw va(1,e);var i=function(r){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return t(e,n,OM.apply(void 0,Ql([r],o,!1)))};return i.attrs=function(r){return Kf(t,e,tn(tn({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},i.withConfig=function(r){return Kf(t,e,tn(tn({},n),r))},i}var a_=function(t){return Kf(NM,t)},ve=a_;Yv.forEach(function(t){ve[t]=a_(t)});var l_={exports:{}},FM="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",kM=FM,zM=kM;function c_(){}function u_(){}u_.resetWarningCache=c_;var BM=function(){function t(i,r,o,s,a,l){if(l!==zM){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:u_,resetWarningCache:c_};return n.PropTypes=n,n};l_.exports=BM();var HM=l_.exports;const dn=od(HM),GM=ve.span`
    font-family: 'Courier New', Courier, monospace;
    display: block;
    min-height:${t=>t.height};
    font-size: 1.3rem;
    padding-top: 1rem;
    text-align: left;
`,VM=ve.div`
    display: inline-block;
    animation:  blinkAnimation 1s infinite;
    @keyframes  blinkAnimation {
        0% {
            opacity: 0;
        }

        50% {
            opacity: 1;
        }

        100% {
            opacity: 0;
        }
    }`,f_=t=>{const e=t.text,n=ae.useRef(null);return ae.useEffect(()=>{const i=n.current;let r=0,o=30;s();function s(){let a=30,l=20;e.charAt(r)===" "?o=Math.floor(Math.random()*(a-l)+l):o=40,r<e.length&&(i.innerHTML+=e.charAt(r),r++,setTimeout(s,o))}},[e]),k.jsx(k.Fragment,{children:k.jsxs(GM,{height:t.height,children:[k.jsx("span",{ref:n}),k.jsx(VM,{children:"│"})]})})};f_.propTypes={text:dn.string.isRequired,height:dn.string.isRequired};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lh="155",Yr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},qr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},WM=0,Zp=1,jM=2,d_=1,XM=2,ui=3,rr=0,sn=1,pi=2,Qi=0,No=1,Qp=2,Jp=3,em=4,$M=5,ho=100,YM=101,qM=102,tm=103,nm=104,KM=200,ZM=201,QM=202,JM=203,h_=204,p_=205,e1=206,t1=207,n1=208,i1=209,r1=210,o1=0,s1=1,a1=2,Zf=3,l1=4,c1=5,u1=6,f1=7,m_=0,d1=1,h1=2,Ji=0,p1=1,m1=2,g1=3,v1=4,_1=5,g_=300,qo=301,Ko=302,Qf=303,Jf=304,Ac=306,ed=1e3,Bn=1001,td=1002,qt=1003,im=1004,du=1005,Mn=1006,x1=1007,sa=1008,er=1009,y1=1010,S1=1011,ch=1012,v_=1013,Hi=1014,Gi=1015,aa=1016,__=1017,x_=1018,br=1020,E1=1021,Hn=1023,M1=1024,T1=1025,Rr=1026,Zo=1027,w1=1028,y_=1029,A1=1030,S_=1031,E_=1033,hu=33776,pu=33777,mu=33778,gu=33779,rm=35840,om=35841,sm=35842,am=35843,C1=36196,lm=37492,cm=37496,um=37808,fm=37809,dm=37810,hm=37811,pm=37812,mm=37813,gm=37814,vm=37815,_m=37816,xm=37817,ym=37818,Sm=37819,Em=37820,Mm=37821,vu=36492,b1=36283,Tm=36284,wm=36285,Am=36286,M_=3e3,Pr=3001,R1=3200,P1=3201,L1=0,D1=1,Lr="",Ue="srgb",ni="srgb-linear",T_="display-p3",_u=7680,U1=519,I1=512,N1=513,O1=514,F1=515,k1=516,z1=517,B1=518,H1=519,Cm=35044,bm="300 es",nd=1035,vi=2e3,tc=2001;class Wr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Rm=1234567;const Fs=Math.PI/180,la=180/Math.PI;function rs(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[t&255]+zt[t>>8&255]+zt[t>>16&255]+zt[t>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[n&63|128]+zt[n>>8&255]+"-"+zt[n>>16&255]+zt[n>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toLowerCase()}function Gt(t,e,n){return Math.max(e,Math.min(n,t))}function uh(t,e){return(t%e+e)%e}function G1(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function V1(t,e,n){return t!==e?(n-t)/(e-t):0}function ks(t,e,n){return(1-n)*t+n*e}function W1(t,e,n,i){return ks(t,e,1-Math.exp(-n*i))}function j1(t,e=1){return e-Math.abs(uh(t,e*2)-e)}function X1(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function $1(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function Y1(t,e){return t+Math.floor(Math.random()*(e-t+1))}function q1(t,e){return t+Math.random()*(e-t)}function K1(t){return t*(.5-Math.random())}function Z1(t){t!==void 0&&(Rm=t);let e=Rm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Q1(t){return t*Fs}function J1(t){return t*la}function id(t){return(t&t-1)===0&&t!==0}function eT(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function nc(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function tT(t,e,n,i,r){const o=Math.cos,s=Math.sin,a=o(n/2),l=s(n/2),c=o((e+i)/2),u=s((e+i)/2),d=o((e-i)/2),h=s((e-i)/2),m=o((i-e)/2),_=s((i-e)/2);switch(r){case"XYX":t.set(a*u,l*d,l*h,a*c);break;case"YZY":t.set(l*h,a*u,l*d,a*c);break;case"ZXZ":t.set(l*d,l*h,a*u,a*c);break;case"XZX":t.set(a*u,l*_,l*m,a*c);break;case"YXY":t.set(l*m,a*u,l*_,a*c);break;case"ZYZ":t.set(l*_,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function po(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Xt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const nT={DEG2RAD:Fs,RAD2DEG:la,generateUUID:rs,clamp:Gt,euclideanModulo:uh,mapLinear:G1,inverseLerp:V1,lerp:ks,damp:W1,pingpong:j1,smoothstep:X1,smootherstep:$1,randInt:Y1,randFloat:q1,randFloatSpread:K1,seededRandom:Z1,degToRad:Q1,radToDeg:J1,isPowerOfTwo:id,ceilPowerOfTwo:eT,floorPowerOfTwo:nc,setQuaternionFromProperEuler:tT,normalize:Xt,denormalize:po};class He{constructor(e=0,n=0){He.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,n,i,r,o,s,a,l,c){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,c)}set(e,n,i,r,o,s,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=o,u[5]=l,u[6]=i,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],m=i[5],_=i[8],x=r[0],p=r[3],f=r[6],g=r[1],v=r[4],y=r[7],M=r[2],C=r[5],E=r[8];return o[0]=s*x+a*g+l*M,o[3]=s*p+a*v+l*C,o[6]=s*f+a*y+l*E,o[1]=c*x+u*g+d*M,o[4]=c*p+u*v+d*C,o[7]=c*f+u*y+d*E,o[2]=h*x+m*g+_*M,o[5]=h*p+m*v+_*C,o[8]=h*f+m*y+_*E,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*s*u-n*a*c-i*o*u+i*a*l+r*o*c-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*s-a*c,h=a*l-u*o,m=c*o-s*l,_=n*d+i*h+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=d*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*s)*x,e[3]=h*x,e[4]=(u*n-r*l)*x,e[5]=(r*o-a*n)*x,e[6]=m*x,e[7]=(i*l-c*n)*x,e[8]=(s*n-i*o)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,s,a){const l=Math.cos(o),c=Math.sin(o);return this.set(i*l,i*c,-i*(l*s+c*a)+s+e,-r*c,r*l,-r*(-c*s+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(xu.makeScale(e,n)),this}rotate(e){return this.premultiply(xu.makeRotation(-e)),this}translate(e,n){return this.premultiply(xu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xu=new Be;function w_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ca(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}const Pm={};function zs(t){t in Pm||(Pm[t]=!0,console.warn(t))}function Oo(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function yu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const iT=new Be().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),rT=new Be().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function oT(t){return t.convertSRGBToLinear().applyMatrix3(rT)}function sT(t){return t.applyMatrix3(iT).convertLinearToSRGB()}const aT={[ni]:t=>t,[Ue]:t=>t.convertSRGBToLinear(),[T_]:oT},lT={[ni]:t=>t,[Ue]:t=>t.convertLinearToSRGB(),[T_]:sT},Ln={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return ni},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=aT[e],r=lT[n];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let Kr;class A_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Kr===void 0&&(Kr=ca("canvas")),Kr.width=e.width,Kr.height=e.height;const i=Kr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Kr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ca("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=Oo(o[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Oo(n[i]/255)*255):n[i]=Oo(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let cT=0;class C_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cT++}),this.uuid=rs(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(Su(r[s].image)):o.push(Su(r[s]))}else o=Su(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function Su(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?A_.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let uT=0;class an extends Wr{constructor(e=an.DEFAULT_IMAGE,n=an.DEFAULT_MAPPING,i=Bn,r=Bn,o=Mn,s=sa,a=Hn,l=er,c=an.DEFAULT_ANISOTROPY,u=Lr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uT++}),this.uuid=rs(),this.name="",this.source=new C_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(zs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Pr?Ue:Lr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==g_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ed:e.x=e.x-Math.floor(e.x);break;case Bn:e.x=e.x<0?0:1;break;case td:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ed:e.y=e.y-Math.floor(e.y);break;case Bn:e.y=e.y<0?0:1;break;case td:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return zs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ue?Pr:M_}set encoding(e){zs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Pr?Ue:Lr}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=g_;an.DEFAULT_ANISOTROPY=1;class Ut{constructor(e=0,n=0,i=0,r=1){Ut.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],m=l[5],_=l[9],x=l[2],p=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-x)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+x)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,y=(m+1)/2,M=(f+1)/2,C=(u+h)/4,E=(d+x)/4,D=(_+p)/4;return v>y&&v>M?v<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(v),r=C/i,o=E/i):y>M?y<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(y),i=C/r,o=D/r):M<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(M),i=E/o,r=D/o),this.set(i,r,o,n),this}let g=Math.sqrt((p-_)*(p-_)+(d-x)*(d-x)+(h-u)*(h-u));return Math.abs(g)<.001&&(g=1),this.x=(p-_)/g,this.y=(d-x)/g,this.z=(h-u)/g,this.w=Math.acos((c+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fT extends Wr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ut(0,0,e,n),this.scissorTest=!1,this.viewport=new Ut(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(zs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Pr?Ue:Lr),this.texture=new an(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Mn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new C_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kr extends fT{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class b_ extends an{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dT extends an{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,s,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const h=o[s+0],m=o[s+1],_=o[s+2],x=o[s+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=m,e[n+2]=_,e[n+3]=x;return}if(d!==x||l!==h||c!==m||u!==_){let p=1-a;const f=l*h+c*m+u*_+d*x,g=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const M=Math.sqrt(v),C=Math.atan2(M,f*g);p=Math.sin(p*C)/M,a=Math.sin(a*C)/M}const y=a*g;if(l=l*p+h*y,c=c*p+m*y,u=u*p+_*y,d=d*p+x*y,p===1-a){const M=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=M,c*=M,u*=M,d*=M}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,o,s){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=o[s],h=o[s+1],m=o[s+2],_=o[s+3];return e[n]=a*_+u*d+l*m-c*h,e[n+1]=l*_+u*h+c*d-a*m,e[n+2]=c*_+u*m+a*h-l*d,e[n+3]=u*_-a*d-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(o/2),h=l(i/2),m=l(r/2),_=l(o/2);switch(s){case"XYZ":this._x=h*u*d+c*m*_,this._y=c*m*d-h*u*_,this._z=c*u*_+h*m*d,this._w=c*u*d-h*m*_;break;case"YXZ":this._x=h*u*d+c*m*_,this._y=c*m*d-h*u*_,this._z=c*u*_-h*m*d,this._w=c*u*d+h*m*_;break;case"ZXY":this._x=h*u*d-c*m*_,this._y=c*m*d+h*u*_,this._z=c*u*_+h*m*d,this._w=c*u*d-h*m*_;break;case"ZYX":this._x=h*u*d-c*m*_,this._y=c*m*d+h*u*_,this._z=c*u*_-h*m*d,this._w=c*u*d+h*m*_;break;case"YZX":this._x=h*u*d+c*m*_,this._y=c*m*d+h*u*_,this._z=c*u*_-h*m*d,this._w=c*u*d-h*m*_;break;case"XZY":this._x=h*u*d-c*m*_,this._y=c*m*d-h*u*_,this._z=c*u*_+h*m*d,this._w=c*u*d+h*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],s=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],h=i+a+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(o-c)*m,this._z=(s-r)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(u-l)/m,this._x=.25*m,this._y=(r+s)/m,this._z=(o+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(o-c)/m,this._x=(r+s)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(s-r)/m,this._x=(o+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Gt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,s=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+s*a+r*c-o*l,this._y=r*u+s*l+o*a-i*c,this._z=o*u+s*c+i*l-r*a,this._w=s*u-i*a-r*l-o*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*s+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*o+n*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=s*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=o*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(o),i*Math.cos(o),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,n=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Lm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Lm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,c=l*n+s*r-a*i,u=l*i+a*n-o*r,d=l*r+o*i-s*n,h=-o*n-s*i-a*r;return this.x=c*l+h*-o+u*-a-d*-s,this.y=u*l+h*-s+d*-o-c*-a,this.z=d*l+h*-a+c*-s-u*-o,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,s=n.x,a=n.y,l=n.z;return this.x=r*l-o*a,this.y=o*s-i*l,this.z=i*a-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Eu.copy(this).projectOnVector(e),this.sub(Eu)}reflect(e){return this.sub(Eu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Eu=new B,Lm=new zr;class _a{constructor(e=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(oi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(oi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=oi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Zr.copy(e.boundingBox),Zr.applyMatrix4(e.matrixWorld),this.union(Zr);else{const r=e.geometry;if(r!==void 0)if(n&&r.attributes!==void 0&&r.attributes.position!==void 0){const o=r.attributes.position;for(let s=0,a=o.count;s<a;s++)oi.fromBufferAttribute(o,s).applyMatrix4(e.matrixWorld),this.expandByPoint(oi)}else r.boundingBox===null&&r.computeBoundingBox(),Zr.copy(r.boundingBox),Zr.applyMatrix4(e.matrixWorld),this.union(Zr)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gs),za.subVectors(this.max,gs),Qr.subVectors(e.a,gs),Jr.subVectors(e.b,gs),eo.subVectors(e.c,gs),Ci.subVectors(Jr,Qr),bi.subVectors(eo,Jr),fr.subVectors(Qr,eo);let n=[0,-Ci.z,Ci.y,0,-bi.z,bi.y,0,-fr.z,fr.y,Ci.z,0,-Ci.x,bi.z,0,-bi.x,fr.z,0,-fr.x,-Ci.y,Ci.x,0,-bi.y,bi.x,0,-fr.y,fr.x,0];return!Mu(n,Qr,Jr,eo,za)||(n=[1,0,0,0,1,0,0,0,1],!Mu(n,Qr,Jr,eo,za))?!1:(Ba.crossVectors(Ci,bi),n=[Ba.x,Ba.y,Ba.z],Mu(n,Qr,Jr,eo,za))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ri=[new B,new B,new B,new B,new B,new B,new B,new B],oi=new B,Zr=new _a,Qr=new B,Jr=new B,eo=new B,Ci=new B,bi=new B,fr=new B,gs=new B,za=new B,Ba=new B,dr=new B;function Mu(t,e,n,i,r){for(let o=0,s=t.length-3;o<=s;o+=3){dr.fromArray(t,o);const a=r.x*Math.abs(dr.x)+r.y*Math.abs(dr.y)+r.z*Math.abs(dr.z),l=e.dot(dr),c=n.dot(dr),u=i.dot(dr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const hT=new _a,vs=new B,Tu=new B;class fh{constructor(e=new B,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):hT.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vs.subVectors(e,this.center);const n=vs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(vs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Tu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vs.copy(e.center).add(Tu)),this.expandByPoint(vs.copy(e.center).sub(Tu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const si=new B,wu=new B,Ha=new B,Ri=new B,Au=new B,Ga=new B,Cu=new B;class R_{constructor(e=new B,n=new B(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,si)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=si.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(si.copy(this.origin).addScaledVector(this.direction,n),si.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){wu.copy(e).add(n).multiplyScalar(.5),Ha.copy(n).sub(e).normalize(),Ri.copy(this.origin).sub(wu);const o=e.distanceTo(n)*.5,s=-this.direction.dot(Ha),a=Ri.dot(this.direction),l=-Ri.dot(Ha),c=Ri.lengthSq(),u=Math.abs(1-s*s);let d,h,m,_;if(u>0)if(d=s*l-a,h=s*a-l,_=o*u,d>=0)if(h>=-_)if(h<=_){const x=1/u;d*=x,h*=x,m=d*(d+s*h+2*a)+h*(s*d+h+2*l)+c}else h=o,d=Math.max(0,-(s*h+a)),m=-d*d+h*(h+2*l)+c;else h=-o,d=Math.max(0,-(s*h+a)),m=-d*d+h*(h+2*l)+c;else h<=-_?(d=Math.max(0,-(-s*o+a)),h=d>0?-o:Math.min(Math.max(-o,-l),o),m=-d*d+h*(h+2*l)+c):h<=_?(d=0,h=Math.min(Math.max(-o,-l),o),m=h*(h+2*l)+c):(d=Math.max(0,-(s*o+a)),h=d>0?o:Math.min(Math.max(-o,-l),o),m=-d*d+h*(h+2*l)+c);else h=s>0?-o:o,d=Math.max(0,-(s*h+a)),m=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(wu).addScaledVector(Ha,h),m}intersectSphere(e,n){si.subVectors(e.center,this.origin);const i=si.dot(this.direction),r=si.dot(si)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,l=i+s;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,s,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(o=(e.min.y-h.y)*u,s=(e.max.y-h.y)*u):(o=(e.max.y-h.y)*u,s=(e.min.y-h.y)*u),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,si)!==null}intersectTriangle(e,n,i,r,o){Au.subVectors(n,e),Ga.subVectors(i,e),Cu.crossVectors(Au,Ga);let s=this.direction.dot(Cu),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Ri.subVectors(this.origin,e);const l=a*this.direction.dot(Ga.crossVectors(Ri,Ga));if(l<0)return null;const c=a*this.direction.dot(Au.cross(Ri));if(c<0||l+c>s)return null;const u=-a*Ri.dot(Cu);return u<0?null:this.at(u/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Nt{constructor(e,n,i,r,o,s,a,l,c,u,d,h,m,_,x,p){Nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,c,u,d,h,m,_,x,p)}set(e,n,i,r,o,s,a,l,c,u,d,h,m,_,x,p){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=o,f[5]=s,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=m,f[7]=_,f[11]=x,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/to.setFromMatrixColumn(e,0).length(),o=1/to.setFromMatrixColumn(e,1).length(),s=1/to.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){const h=s*u,m=s*d,_=a*u,x=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=m+_*c,n[5]=h-x*c,n[9]=-a*l,n[2]=x-h*c,n[6]=_+m*c,n[10]=s*l}else if(e.order==="YXZ"){const h=l*u,m=l*d,_=c*u,x=c*d;n[0]=h+x*a,n[4]=_*a-m,n[8]=s*c,n[1]=s*d,n[5]=s*u,n[9]=-a,n[2]=m*a-_,n[6]=x+h*a,n[10]=s*l}else if(e.order==="ZXY"){const h=l*u,m=l*d,_=c*u,x=c*d;n[0]=h-x*a,n[4]=-s*d,n[8]=_+m*a,n[1]=m+_*a,n[5]=s*u,n[9]=x-h*a,n[2]=-s*c,n[6]=a,n[10]=s*l}else if(e.order==="ZYX"){const h=s*u,m=s*d,_=a*u,x=a*d;n[0]=l*u,n[4]=_*c-m,n[8]=h*c+x,n[1]=l*d,n[5]=x*c+h,n[9]=m*c-_,n[2]=-c,n[6]=a*l,n[10]=s*l}else if(e.order==="YZX"){const h=s*l,m=s*c,_=a*l,x=a*c;n[0]=l*u,n[4]=x-h*d,n[8]=_*d+m,n[1]=d,n[5]=s*u,n[9]=-a*u,n[2]=-c*u,n[6]=m*d+_,n[10]=h-x*d}else if(e.order==="XZY"){const h=s*l,m=s*c,_=a*l,x=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=h*d+x,n[5]=s*u,n[9]=m*d-_,n[2]=_*d-m,n[6]=a*u,n[10]=x*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pT,e,mT)}lookAt(e,n,i){const r=this.elements;return cn.subVectors(e,n),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),Pi.crossVectors(i,cn),Pi.lengthSq()===0&&(Math.abs(i.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),Pi.crossVectors(i,cn)),Pi.normalize(),Va.crossVectors(cn,Pi),r[0]=Pi.x,r[4]=Va.x,r[8]=cn.x,r[1]=Pi.y,r[5]=Va.y,r[9]=cn.y,r[2]=Pi.z,r[6]=Va.z,r[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],m=i[13],_=i[2],x=i[6],p=i[10],f=i[14],g=i[3],v=i[7],y=i[11],M=i[15],C=r[0],E=r[4],D=r[8],T=r[12],A=r[1],Z=r[5],ee=r[9],H=r[13],$=r[2],X=r[6],J=r[10],Y=r[14],L=r[3],W=r[7],N=r[11],U=r[15];return o[0]=s*C+a*A+l*$+c*L,o[4]=s*E+a*Z+l*X+c*W,o[8]=s*D+a*ee+l*J+c*N,o[12]=s*T+a*H+l*Y+c*U,o[1]=u*C+d*A+h*$+m*L,o[5]=u*E+d*Z+h*X+m*W,o[9]=u*D+d*ee+h*J+m*N,o[13]=u*T+d*H+h*Y+m*U,o[2]=_*C+x*A+p*$+f*L,o[6]=_*E+x*Z+p*X+f*W,o[10]=_*D+x*ee+p*J+f*N,o[14]=_*T+x*H+p*Y+f*U,o[3]=g*C+v*A+y*$+M*L,o[7]=g*E+v*Z+y*X+M*W,o[11]=g*D+v*ee+y*J+M*N,o[15]=g*T+v*H+y*Y+M*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],m=e[14],_=e[3],x=e[7],p=e[11],f=e[15];return _*(+o*l*d-r*c*d-o*a*h+i*c*h+r*a*m-i*l*m)+x*(+n*l*m-n*c*h+o*s*h-r*s*m+r*c*u-o*l*u)+p*(+n*c*d-n*a*m-o*s*d+i*s*m+o*a*u-i*c*u)+f*(-r*a*u-n*l*d+n*a*h+r*s*d-i*s*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],m=e[11],_=e[12],x=e[13],p=e[14],f=e[15],g=d*p*c-x*h*c+x*l*m-a*p*m-d*l*f+a*h*f,v=_*h*c-u*p*c-_*l*m+s*p*m+u*l*f-s*h*f,y=u*x*c-_*d*c+_*a*m-s*x*m-u*a*f+s*d*f,M=_*d*l-u*x*l-_*a*h+s*x*h+u*a*p-s*d*p,C=n*g+i*v+r*y+o*M;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/C;return e[0]=g*E,e[1]=(x*h*o-d*p*o-x*r*m+i*p*m+d*r*f-i*h*f)*E,e[2]=(a*p*o-x*l*o+x*r*c-i*p*c-a*r*f+i*l*f)*E,e[3]=(d*l*o-a*h*o-d*r*c+i*h*c+a*r*m-i*l*m)*E,e[4]=v*E,e[5]=(u*p*o-_*h*o+_*r*m-n*p*m-u*r*f+n*h*f)*E,e[6]=(_*l*o-s*p*o-_*r*c+n*p*c+s*r*f-n*l*f)*E,e[7]=(s*h*o-u*l*o+u*r*c-n*h*c-s*r*m+n*l*m)*E,e[8]=y*E,e[9]=(_*d*o-u*x*o-_*i*m+n*x*m+u*i*f-n*d*f)*E,e[10]=(s*x*o-_*a*o+_*i*c-n*x*c-s*i*f+n*a*f)*E,e[11]=(u*a*o-s*d*o-u*i*c+n*d*c+s*i*m-n*a*m)*E,e[12]=M*E,e[13]=(u*x*r-_*d*r+_*i*h-n*x*h-u*i*p+n*d*p)*E,e[14]=(_*a*r-s*x*r-_*i*l+n*x*l+s*i*p-n*a*p)*E,e[15]=(s*d*r-u*a*r+u*i*l-n*d*l-s*i*h+n*a*h)*E,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,s=e.x,a=e.y,l=e.z,c=o*s,u=o*a;return this.set(c*s+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*s,0,c*l-r*a,u*l+r*s,o*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,s=n._y,a=n._z,l=n._w,c=o+o,u=s+s,d=a+a,h=o*c,m=o*u,_=o*d,x=s*u,p=s*d,f=a*d,g=l*c,v=l*u,y=l*d,M=i.x,C=i.y,E=i.z;return r[0]=(1-(x+f))*M,r[1]=(m+y)*M,r[2]=(_-v)*M,r[3]=0,r[4]=(m-y)*C,r[5]=(1-(h+f))*C,r[6]=(p+g)*C,r[7]=0,r[8]=(_+v)*E,r[9]=(p-g)*E,r[10]=(1-(h+x))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=to.set(r[0],r[1],r[2]).length();const s=to.set(r[4],r[5],r[6]).length(),a=to.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],Dn.copy(this);const c=1/o,u=1/s,d=1/a;return Dn.elements[0]*=c,Dn.elements[1]*=c,Dn.elements[2]*=c,Dn.elements[4]*=u,Dn.elements[5]*=u,Dn.elements[6]*=u,Dn.elements[8]*=d,Dn.elements[9]*=d,Dn.elements[10]*=d,n.setFromRotationMatrix(Dn),i.x=o,i.y=s,i.z=a,this}makePerspective(e,n,i,r,o,s,a=vi){const l=this.elements,c=2*o/(n-e),u=2*o/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let m,_;if(a===vi)m=-(s+o)/(s-o),_=-2*s*o/(s-o);else if(a===tc)m=-s/(s-o),_=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,o,s,a=vi){const l=this.elements,c=1/(n-e),u=1/(i-r),d=1/(s-o),h=(n+e)*c,m=(i+r)*u;let _,x;if(a===vi)_=(s+o)*d,x=-2*d;else if(a===tc)_=o*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const to=new B,Dn=new Nt,pT=new B(0,0,0),mT=new B(1,1,1),Pi=new B,Va=new B,cn=new B,Dm=new Nt,Um=new zr;class Cc{constructor(e=0,n=0,i=0,r=Cc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Gt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Dm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Um.setFromEuler(this),this.setFromQuaternion(Um,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cc.DEFAULT_ORDER="XYZ";class P_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gT=0;const Im=new B,no=new zr,ai=new Nt,Wa=new B,_s=new B,vT=new B,_T=new zr,Nm=new B(1,0,0),Om=new B(0,1,0),Fm=new B(0,0,1),xT={type:"added"},km={type:"removed"};class mn extends Wr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gT++}),this.uuid=rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mn.DEFAULT_UP.clone();const e=new B,n=new Cc,i=new zr,r=new B(1,1,1);function o(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Nt},normalMatrix:{value:new Be}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new P_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return no.setFromAxisAngle(e,n),this.quaternion.multiply(no),this}rotateOnWorldAxis(e,n){return no.setFromAxisAngle(e,n),this.quaternion.premultiply(no),this}rotateX(e){return this.rotateOnAxis(Nm,e)}rotateY(e){return this.rotateOnAxis(Om,e)}rotateZ(e){return this.rotateOnAxis(Fm,e)}translateOnAxis(e,n){return Im.copy(e).applyQuaternion(this.quaternion),this.position.add(Im.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Nm,e)}translateY(e){return this.translateOnAxis(Om,e)}translateZ(e){return this.translateOnAxis(Fm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Wa.copy(e):Wa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),_s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(_s,Wa,this.up):ai.lookAt(Wa,_s,this.up),this.quaternion.setFromRotationMatrix(ai),r&&(ai.extractRotation(r.matrixWorld),no.setFromRotationMatrix(ai),this.quaternion.premultiply(no.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(xT)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(km)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(km)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(ai),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,o=this.children.length;r<o;r++){const s=this.children[r].getObjectsByProperty(e,n);s.length>0&&(i=i.concat(s))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,e,vT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,_T,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const o=n[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++){const a=r[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];o(e.shapes,d)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(n){const a=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),d=s(e.shapes),h=s(e.skeletons),m=s(e.animations),_=s(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function s(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}mn.DEFAULT_UP=new B(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Un=new B,li=new B,bu=new B,ci=new B,io=new B,ro=new B,zm=new B,Ru=new B,Pu=new B,Lu=new B;let ja=!1;class zn{constructor(e=new B,n=new B,i=new B){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Un.subVectors(e,n),r.cross(Un);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){Un.subVectors(r,n),li.subVectors(i,n),bu.subVectors(e,n);const s=Un.dot(Un),a=Un.dot(li),l=Un.dot(bu),c=li.dot(li),u=li.dot(bu),d=s*c-a*a;if(d===0)return o.set(-2,-1,-1);const h=1/d,m=(c*l-a*u)*h,_=(s*u-a*l)*h;return o.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ci),ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getUV(e,n,i,r,o,s,a,l){return ja===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ja=!0),this.getInterpolation(e,n,i,r,o,s,a,l)}static getInterpolation(e,n,i,r,o,s,a,l){return this.getBarycoord(e,n,i,r,ci),l.setScalar(0),l.addScaledVector(o,ci.x),l.addScaledVector(s,ci.y),l.addScaledVector(a,ci.z),l}static isFrontFacing(e,n,i,r){return Un.subVectors(i,n),li.subVectors(e,n),Un.cross(li).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),li.subVectors(this.a,this.b),Un.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return zn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,o){return ja===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ja=!0),zn.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}getInterpolation(e,n,i,r,o){return zn.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let s,a;io.subVectors(r,i),ro.subVectors(o,i),Ru.subVectors(e,i);const l=io.dot(Ru),c=ro.dot(Ru);if(l<=0&&c<=0)return n.copy(i);Pu.subVectors(e,r);const u=io.dot(Pu),d=ro.dot(Pu);if(u>=0&&d<=u)return n.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return s=l/(l-u),n.copy(i).addScaledVector(io,s);Lu.subVectors(e,o);const m=io.dot(Lu),_=ro.dot(Lu);if(_>=0&&m<=_)return n.copy(o);const x=m*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(ro,a);const p=u*_-m*d;if(p<=0&&d-u>=0&&m-_>=0)return zm.subVectors(o,r),a=(d-u)/(d-u+(m-_)),n.copy(r).addScaledVector(zm,a);const f=1/(p+x+h);return s=x*f,a=h*f,n.copy(i).addScaledVector(io,s).addScaledVector(ro,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let yT=0;class bc extends Wr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yT++}),this.uuid=rs(),this.name="",this.type="Material",this.blending=No,this.side=rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=h_,this.blendDst=p_,this.blendEquation=ho,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Zf,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=U1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_u,this.stencilZFail=_u,this.stencilZPass=_u,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==No&&(i.blending=this.blending),this.side!==rr&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(n){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const L_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},In={h:0,s:0,l:0},Xa={h:0,s:0,l:0};function Du(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class ot{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ue){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ln.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ln.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ln.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ln.workingColorSpace){if(e=uh(e,1),n=Gt(n,0,1),i=Gt(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,s=2*i-o;this.r=Du(s,o,e+1/3),this.g=Du(s,o,e),this.b=Du(s,o,e-1/3)}return Ln.toWorkingColorSpace(this,r),this}setStyle(e,n=Ue){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ue){const i=L_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oo(e.r),this.g=Oo(e.g),this.b=Oo(e.b),this}copyLinearToSRGB(e){return this.r=yu(e.r),this.g=yu(e.g),this.b=yu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ue){return Ln.fromWorkingColorSpace(Bt.copy(this),e),Math.round(Gt(Bt.r*255,0,255))*65536+Math.round(Gt(Bt.g*255,0,255))*256+Math.round(Gt(Bt.b*255,0,255))}getHexString(e=Ue){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ln.workingColorSpace){Ln.fromWorkingColorSpace(Bt.copy(this),n);const i=Bt.r,r=Bt.g,o=Bt.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let l,c;const u=(a+s)/2;if(a===s)l=0,c=0;else{const d=s-a;switch(c=u<=.5?d/(s+a):d/(2-s-a),s){case i:l=(r-o)/d+(r<o?6:0);break;case r:l=(o-i)/d+2;break;case o:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Ln.workingColorSpace){return Ln.fromWorkingColorSpace(Bt.copy(this),n),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=Ue){Ln.fromWorkingColorSpace(Bt.copy(this),e);const n=Bt.r,i=Bt.g,r=Bt.b;return e!==Ue?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(In),In.h+=e,In.s+=n,In.l+=i,this.setHSL(In.h,In.s,In.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(In),e.getHSL(Xa);const i=ks(In.h,Xa.h,n),r=ks(In.s,Xa.s,n),o=ks(In.l,Xa.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new ot;ot.NAMES=L_;class Ii extends bc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=m_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new B,$a=new He;class ti{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Cm,this.updateRange={offset:0,count:-1},this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)$a.fromBufferAttribute(this,n),$a.applyMatrix3(e),this.setXY(n,$a.x,$a.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)vt.fromBufferAttribute(this,n),vt.applyMatrix3(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)vt.fromBufferAttribute(this,n),vt.applyMatrix4(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)vt.fromBufferAttribute(this,n),vt.applyNormalMatrix(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)vt.fromBufferAttribute(this,n),vt.transformDirection(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=po(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Xt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=po(n,this.array)),n}setX(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=po(n,this.array)),n}setY(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=po(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=po(n,this.array)),n}setW(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Xt(n,this.array),i=Xt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Xt(n,this.array),i=Xt(i,this.array),r=Xt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=Xt(n,this.array),i=Xt(i,this.array),r=Xt(r,this.array),o=Xt(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cm&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class D_ extends ti{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class U_ extends ti{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Dr extends ti{constructor(e,n,i){super(new Float32Array(e),n,i)}}let ST=0;const yn=new Nt,Uu=new mn,oo=new B,un=new _a,xs=new _a,bt=new B;class jr extends Wr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ST++}),this.uuid=rs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(w_(e)?U_:D_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new Be().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,n,i){return yn.makeTranslation(e,n,i),this.applyMatrix4(yn),this}scale(e,n,i){return yn.makeScale(e,n,i),this.applyMatrix4(yn),this}lookAt(e){return Uu.lookAt(e),Uu.updateMatrix(),this.applyMatrix4(Uu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(oo).negate(),this.translate(oo.x,oo.y,oo.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Dr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _a);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];un.setFromBufferAttribute(o),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fh);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(un.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];xs.setFromBufferAttribute(a),this.morphTargetsRelative?(bt.addVectors(un.min,xs.min),un.expandByPoint(bt),bt.addVectors(un.max,xs.max),un.expandByPoint(bt)):(un.expandByPoint(xs.min),un.expandByPoint(xs.max))}un.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)bt.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(bt));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)bt.fromBufferAttribute(a,c),l&&(oo.fromBufferAttribute(e,c),bt.add(oo)),r=Math.max(r,i.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,o=n.normal.array,s=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ti(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let A=0;A<a;A++)c[A]=new B,u[A]=new B;const d=new B,h=new B,m=new B,_=new He,x=new He,p=new He,f=new B,g=new B;function v(A,Z,ee){d.fromArray(r,A*3),h.fromArray(r,Z*3),m.fromArray(r,ee*3),_.fromArray(s,A*2),x.fromArray(s,Z*2),p.fromArray(s,ee*2),h.sub(d),m.sub(d),x.sub(_),p.sub(_);const H=1/(x.x*p.y-p.x*x.y);isFinite(H)&&(f.copy(h).multiplyScalar(p.y).addScaledVector(m,-x.y).multiplyScalar(H),g.copy(m).multiplyScalar(x.x).addScaledVector(h,-p.x).multiplyScalar(H),c[A].add(f),c[Z].add(f),c[ee].add(f),u[A].add(g),u[Z].add(g),u[ee].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let A=0,Z=y.length;A<Z;++A){const ee=y[A],H=ee.start,$=ee.count;for(let X=H,J=H+$;X<J;X+=3)v(i[X+0],i[X+1],i[X+2])}const M=new B,C=new B,E=new B,D=new B;function T(A){E.fromArray(o,A*3),D.copy(E);const Z=c[A];M.copy(Z),M.sub(E.multiplyScalar(E.dot(Z))).normalize(),C.crossVectors(D,Z);const H=C.dot(u[A])<0?-1:1;l[A*4]=M.x,l[A*4+1]=M.y,l[A*4+2]=M.z,l[A*4+3]=H}for(let A=0,Z=y.length;A<Z;++A){const ee=y[A],H=ee.start,$=ee.count;for(let X=H,J=H+$;X<J;X+=3)T(i[X+0]),T(i[X+1]),T(i[X+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ti(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new B,o=new B,s=new B,a=new B,l=new B,c=new B,u=new B,d=new B;if(e)for(let h=0,m=e.count;h<m;h+=3){const _=e.getX(h+0),x=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,_),o.fromBufferAttribute(n,x),s.fromBufferAttribute(n,p),u.subVectors(s,o),d.subVectors(r,o),u.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),o.fromBufferAttribute(n,h+1),s.fromBufferAttribute(n,h+2),u.subVectors(s,o),d.subVectors(r,o),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)bt.fromBufferAttribute(e,n),bt.normalize(),e.setXYZ(n,bt.x,bt.y,bt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let m=0,_=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*u;for(let f=0;f<u;f++)h[_++]=c[m++]}return new ti(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new jr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],m=e(h,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const c=s[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const o=e.morphAttributes;for(const c in o){const u=[],d=o[c];for(let h=0,m=d.length;h<m;h++)u.push(d[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bm=new Nt,hr=new R_,Ya=new fh,Hm=new B,so=new B,ao=new B,lo=new B,Iu=new B,qa=new B,Ka=new He,Za=new He,Qa=new He,Gm=new B,Vm=new B,Wm=new B,Ja=new B,el=new B;class _i extends mn{constructor(e=new jr,n=new Ii){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){qa.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const u=a[l],d=o[l];u!==0&&(Iu.fromBufferAttribute(d,e),s?qa.addScaledVector(Iu,u):qa.addScaledVector(Iu.sub(n),u))}n.add(qa)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ya.copy(i.boundingSphere),Ya.applyMatrix4(o),hr.copy(e.ray).recast(e.near),!(Ya.containsPoint(hr.origin)===!1&&(hr.intersectSphere(Ya,Hm)===null||hr.origin.distanceToSquared(Hm)>(e.far-e.near)**2))&&(Bm.copy(o).invert(),hr.copy(e.ray).applyMatrix4(Bm),!(i.boundingBox!==null&&hr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,hr)))}_computeIntersections(e,n,i){let r;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,u=o.attributes.uv1,d=o.attributes.normal,h=o.groups,m=o.drawRange;if(a!==null)if(Array.isArray(s))for(let _=0,x=h.length;_<x;_++){const p=h[_],f=s[p.materialIndex],g=Math.max(p.start,m.start),v=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let y=g,M=v;y<M;y+=3){const C=a.getX(y),E=a.getX(y+1),D=a.getX(y+2);r=tl(this,f,e,i,c,u,d,C,E,D),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let p=_,f=x;p<f;p+=3){const g=a.getX(p),v=a.getX(p+1),y=a.getX(p+2);r=tl(this,s,e,i,c,u,d,g,v,y),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let _=0,x=h.length;_<x;_++){const p=h[_],f=s[p.materialIndex],g=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let y=g,M=v;y<M;y+=3){const C=y,E=y+1,D=y+2;r=tl(this,f,e,i,c,u,d,C,E,D),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=_,f=x;p<f;p+=3){const g=p,v=p+1,y=p+2;r=tl(this,s,e,i,c,u,d,g,v,y),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function ET(t,e,n,i,r,o,s,a){let l;if(e.side===sn?l=i.intersectTriangle(s,o,r,!0,a):l=i.intersectTriangle(r,o,s,e.side===rr,a),l===null)return null;el.copy(a),el.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(el);return c<n.near||c>n.far?null:{distance:c,point:el.clone(),object:t}}function tl(t,e,n,i,r,o,s,a,l,c){t.getVertexPosition(a,so),t.getVertexPosition(l,ao),t.getVertexPosition(c,lo);const u=ET(t,e,n,i,so,ao,lo,Ja);if(u){r&&(Ka.fromBufferAttribute(r,a),Za.fromBufferAttribute(r,l),Qa.fromBufferAttribute(r,c),u.uv=zn.getInterpolation(Ja,so,ao,lo,Ka,Za,Qa,new He)),o&&(Ka.fromBufferAttribute(o,a),Za.fromBufferAttribute(o,l),Qa.fromBufferAttribute(o,c),u.uv1=zn.getInterpolation(Ja,so,ao,lo,Ka,Za,Qa,new He),u.uv2=u.uv1),s&&(Gm.fromBufferAttribute(s,a),Vm.fromBufferAttribute(s,l),Wm.fromBufferAttribute(s,c),u.normal=zn.getInterpolation(Ja,so,ao,lo,Gm,Vm,Wm,new B),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new B,materialIndex:0};zn.getNormal(so,ao,lo,d.normal),u.face=d}return u}class os extends jr{constructor(e=1,n=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],c=[],u=[],d=[];let h=0,m=0;_("z","y","x",-1,-1,i,n,e,s,o,0),_("z","y","x",1,-1,i,n,-e,s,o,1),_("x","z","y",1,1,e,i,n,r,s,2),_("x","z","y",1,-1,e,i,-n,r,s,3),_("x","y","z",1,-1,e,n,i,r,o,4),_("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new Dr(c,3)),this.setAttribute("normal",new Dr(u,3)),this.setAttribute("uv",new Dr(d,2));function _(x,p,f,g,v,y,M,C,E,D,T){const A=y/E,Z=M/D,ee=y/2,H=M/2,$=C/2,X=E+1,J=D+1;let Y=0,L=0;const W=new B;for(let N=0;N<J;N++){const U=N*Z-H;for(let z=0;z<X;z++){const ce=z*A-ee;W[x]=ce*g,W[p]=U*v,W[f]=$,c.push(W.x,W.y,W.z),W[x]=0,W[p]=0,W[f]=C>0?1:-1,u.push(W.x,W.y,W.z),d.push(z/E),d.push(1-N/D),Y+=1}}for(let N=0;N<D;N++)for(let U=0;U<E;U++){const z=h+U+X*N,ce=h+U+X*(N+1),re=h+(U+1)+X*(N+1),fe=h+(U+1)+X*N;l.push(z,ce,fe),l.push(ce,re,fe),L+=6}a.addGroup(m,L,T),m+=L,h+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new os(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function $t(t){const e={};for(let n=0;n<t.length;n++){const i=Qo(t[n]);for(const r in i)e[r]=i[r]}return e}function MT(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function I_(t){return t.getRenderTarget()===null?t.outputColorSpace:ni}const TT={clone:Qo,merge:$t};var wT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,AT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Br extends bc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wT,this.fragmentShader=AT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qo(e.uniforms),this.uniformsGroups=MT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class N_ extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt,this.coordinateSystem=vi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Tn extends N_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=la*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return la*2*Math.atan(Math.tan(Fs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Fs*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*r/l,n-=s.offsetY*i/c,r*=s.width/l,i*=s.height/c}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const co=-90,uo=1;class CT extends mn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new Tn(co,uo,e,n);r.layers=this.layers,this.add(r);const o=new Tn(co,uo,e,n);o.layers=this.layers,this.add(o);const s=new Tn(co,uo,e,n);s.layers=this.layers,this.add(s);const a=new Tn(co,uo,e,n);a.layers=this.layers,this.add(a);const l=new Tn(co,uo,e,n);l.layers=this.layers,this.add(l);const c=new Tn(co,uo,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,o,s,a,l]=n;for(const c of n)this.remove(c);if(e===vi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===tc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,s,a,l,c]=this.children,u=e.getRenderTarget(),d=e.xr.enabled;e.xr.enabled=!1;const h=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,o),e.setRenderTarget(i,2),e.render(n,s),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=h,e.setRenderTarget(i,5),e.render(n,c),e.setRenderTarget(u),e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class O_ extends an{constructor(e,n,i,r,o,s,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:qo,super(e,n,i,r,o,s,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bT extends kr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(zs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Pr?Ue:Lr),this.texture=new O_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Mn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new os(5,5,5),o=new Br({name:"CubemapFromEquirect",uniforms:Qo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:Qi});o.uniforms.tEquirect.value=n;const s=new _i(r,o),a=n.minFilter;return n.minFilter===sa&&(n.minFilter=Mn),new CT(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(o)}}const Nu=new B,RT=new B,PT=new Be;class Ni{constructor(e=new B(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Nu.subVectors(i,n).cross(RT.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Nu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||PT.getNormalMatrix(e),r=this.coplanarPoint(Nu).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pr=new fh,nl=new B;class F_{constructor(e=new Ni,n=new Ni,i=new Ni,r=new Ni,o=new Ni,s=new Ni){this.planes=[e,n,i,r,o,s]}set(e,n,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=vi){const i=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],h=r[7],m=r[8],_=r[9],x=r[10],p=r[11],f=r[12],g=r[13],v=r[14],y=r[15];if(i[0].setComponents(l-o,h-c,p-m,y-f).normalize(),i[1].setComponents(l+o,h+c,p+m,y+f).normalize(),i[2].setComponents(l+s,h+u,p+_,y+g).normalize(),i[3].setComponents(l-s,h-u,p-_,y-g).normalize(),i[4].setComponents(l-a,h-d,p-x,y-v).normalize(),n===vi)i[5].setComponents(l+a,h+d,p+x,y+v).normalize();else if(n===tc)i[5].setComponents(a,d,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),pr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pr)}intersectsSprite(e){return pr.center.set(0,0,0),pr.radius=.7071067811865476,pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(pr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(nl.x=r.normal.x>0?e.max.x:e.min.x,nl.y=r.normal.y>0?e.max.y:e.min.y,nl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(nl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function k_(){let t=null,e=!1,n=null,i=null;function r(o,s){n(o,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function LT(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,u){const d=c.array,h=c.usage,m=t.createBuffer();t.bindBuffer(u,m),t.bufferData(u,d,h),c.onUploadCallback();let _;if(d instanceof Float32Array)_=t.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)_=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=t.SHORT;else if(d instanceof Uint32Array)_=t.UNSIGNED_INT;else if(d instanceof Int32Array)_=t.INT;else if(d instanceof Int8Array)_=t.BYTE;else if(d instanceof Uint8Array)_=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function o(c,u,d){const h=u.array,m=u.updateRange;t.bindBuffer(d,c),m.count===-1?t.bufferSubData(d,0,h):(n?t.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):t.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(t.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d===void 0?i.set(c,r(c,u)):d.version<c.version&&(o(d.buffer,c,u),d.version=c.version)}return{get:s,remove:a,update:l}}class dh extends jr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,s=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,h=n/l,m=[],_=[],x=[],p=[];for(let f=0;f<u;f++){const g=f*h-s;for(let v=0;v<c;v++){const y=v*d-o;_.push(y,-g,0),x.push(0,0,1),p.push(v/a),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let g=0;g<a;g++){const v=g+c*f,y=g+c*(f+1),M=g+1+c*(f+1),C=g+1+c*f;m.push(v,y,C),m.push(y,M,C)}this.setIndex(m),this.setAttribute("position",new Dr(_,3)),this.setAttribute("normal",new Dr(x,3)),this.setAttribute("uv",new Dr(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dh(e.width,e.height,e.widthSegments,e.heightSegments)}}var DT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,UT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,IT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,NT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,OT=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,FT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,zT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,BT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,HT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,GT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,VT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,WT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,jT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,XT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$T=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,YT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,KT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ZT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,QT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,JT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ew=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,tw=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,nw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,iw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ow=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sw="gl_FragColor = linearToOutputTexel( gl_FragColor );",aw=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,cw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,uw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,fw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_w=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,xw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ew=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Mw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Tw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ww=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Aw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Rw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Pw=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Lw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Dw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Uw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Iw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ow=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Fw=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,kw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Bw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vw=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ww=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,jw=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Xw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,$w=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,Yw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Jw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,eA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,oA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,aA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,dA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,pA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,vA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_A=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,xA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,SA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,EA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,MA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,TA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,wA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,AA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,CA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,bA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const RA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,PA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NA=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,OA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,FA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,kA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,zA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,BA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,GA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,VA=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,WA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$A=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,YA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,KA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ZA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,QA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,eC=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tC=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nC=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iC=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,rC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,oC=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sC=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,aC=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:DT,alphahash_pars_fragment:UT,alphamap_fragment:IT,alphamap_pars_fragment:NT,alphatest_fragment:OT,alphatest_pars_fragment:FT,aomap_fragment:kT,aomap_pars_fragment:zT,begin_vertex:BT,beginnormal_vertex:HT,bsdfs:GT,iridescence_fragment:VT,bumpmap_pars_fragment:WT,clipping_planes_fragment:jT,clipping_planes_pars_fragment:XT,clipping_planes_pars_vertex:$T,clipping_planes_vertex:YT,color_fragment:qT,color_pars_fragment:KT,color_pars_vertex:ZT,color_vertex:QT,common:JT,cube_uv_reflection_fragment:ew,defaultnormal_vertex:tw,displacementmap_pars_vertex:nw,displacementmap_vertex:iw,emissivemap_fragment:rw,emissivemap_pars_fragment:ow,colorspace_fragment:sw,colorspace_pars_fragment:aw,envmap_fragment:lw,envmap_common_pars_fragment:cw,envmap_pars_fragment:uw,envmap_pars_vertex:fw,envmap_physical_pars_fragment:Mw,envmap_vertex:dw,fog_vertex:hw,fog_pars_vertex:pw,fog_fragment:mw,fog_pars_fragment:gw,gradientmap_pars_fragment:vw,lightmap_fragment:_w,lightmap_pars_fragment:xw,lights_lambert_fragment:yw,lights_lambert_pars_fragment:Sw,lights_pars_begin:Ew,lights_toon_fragment:Tw,lights_toon_pars_fragment:ww,lights_phong_fragment:Aw,lights_phong_pars_fragment:Cw,lights_physical_fragment:bw,lights_physical_pars_fragment:Rw,lights_fragment_begin:Pw,lights_fragment_maps:Lw,lights_fragment_end:Dw,logdepthbuf_fragment:Uw,logdepthbuf_pars_fragment:Iw,logdepthbuf_pars_vertex:Nw,logdepthbuf_vertex:Ow,map_fragment:Fw,map_pars_fragment:kw,map_particle_fragment:zw,map_particle_pars_fragment:Bw,metalnessmap_fragment:Hw,metalnessmap_pars_fragment:Gw,morphcolor_vertex:Vw,morphnormal_vertex:Ww,morphtarget_pars_vertex:jw,morphtarget_vertex:Xw,normal_fragment_begin:$w,normal_fragment_maps:Yw,normal_pars_fragment:qw,normal_pars_vertex:Kw,normal_vertex:Zw,normalmap_pars_fragment:Qw,clearcoat_normal_fragment_begin:Jw,clearcoat_normal_fragment_maps:eA,clearcoat_pars_fragment:tA,iridescence_pars_fragment:nA,opaque_fragment:iA,packing:rA,premultiplied_alpha_fragment:oA,project_vertex:sA,dithering_fragment:aA,dithering_pars_fragment:lA,roughnessmap_fragment:cA,roughnessmap_pars_fragment:uA,shadowmap_pars_fragment:fA,shadowmap_pars_vertex:dA,shadowmap_vertex:hA,shadowmask_pars_fragment:pA,skinbase_vertex:mA,skinning_pars_vertex:gA,skinning_vertex:vA,skinnormal_vertex:_A,specularmap_fragment:xA,specularmap_pars_fragment:yA,tonemapping_fragment:SA,tonemapping_pars_fragment:EA,transmission_fragment:MA,transmission_pars_fragment:TA,uv_pars_fragment:wA,uv_pars_vertex:AA,uv_vertex:CA,worldpos_vertex:bA,background_vert:RA,background_frag:PA,backgroundCube_vert:LA,backgroundCube_frag:DA,cube_vert:UA,cube_frag:IA,depth_vert:NA,depth_frag:OA,distanceRGBA_vert:FA,distanceRGBA_frag:kA,equirect_vert:zA,equirect_frag:BA,linedashed_vert:HA,linedashed_frag:GA,meshbasic_vert:VA,meshbasic_frag:WA,meshlambert_vert:jA,meshlambert_frag:XA,meshmatcap_vert:$A,meshmatcap_frag:YA,meshnormal_vert:qA,meshnormal_frag:KA,meshphong_vert:ZA,meshphong_frag:QA,meshphysical_vert:JA,meshphysical_frag:eC,meshtoon_vert:tC,meshtoon_frag:nC,points_vert:iC,points_frag:rC,shadow_vert:oC,shadow_frag:sC,sprite_vert:aC,sprite_frag:lC},de={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Zn={basic:{uniforms:$t([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:$t([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new ot(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:$t([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:$t([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:$t([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new ot(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:$t([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:$t([de.points,de.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:$t([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:$t([de.common,de.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:$t([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:$t([de.sprite,de.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:$t([de.common,de.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:$t([de.lights,de.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Zn.physical={uniforms:$t([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const il={r:0,b:0,g:0};function cC(t,e,n,i,r,o,s){const a=new ot(0);let l=o===!0?0:1,c,u,d=null,h=0,m=null;function _(p,f){let g=!1,v=f.isScene===!0?f.background:null;switch(v&&v.isTexture&&(v=(f.backgroundBlurriness>0?n:e).get(v)),v===null?x(a,l):v&&v.isColor&&(x(v,1),g=!0),t.xr.getEnvironmentBlendMode()){case"opaque":g=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,s),g=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,s),g=!0;break}(t.autoClear||g)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Ac)?(u===void 0&&(u=new _i(new os(1,1,1),new Br({name:"BackgroundCubeMaterial",uniforms:Qo(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,E,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=v.colorSpace!==Ue,(d!==v||h!==v.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,d=v,h=v.version,m=t.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new _i(new dh(2,2),new Br({name:"BackgroundMaterial",uniforms:Qo(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:rr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=v.colorSpace!==Ue,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||h!==v.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,d=v,h=v.version,m=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function x(p,f){p.getRGB(il,I_(t)),i.buffers.color.setClear(il.r,il.g,il.b,f,s)}return{getClearColor:function(){return a},setClearColor:function(p,f=1){a.set(p),l=f,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,x(a,l)},render:_}}function uC(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),s=i.isWebGL2||o!==null,a={},l=p(null);let c=l,u=!1;function d($,X,J,Y,L){let W=!1;if(s){const N=x(Y,J,X);c!==N&&(c=N,m(c.object)),W=f($,Y,J,L),W&&g($,Y,J,L)}else{const N=X.wireframe===!0;(c.geometry!==Y.id||c.program!==J.id||c.wireframe!==N)&&(c.geometry=Y.id,c.program=J.id,c.wireframe=N,W=!0)}L!==null&&n.update(L,t.ELEMENT_ARRAY_BUFFER),(W||u)&&(u=!1,D($,X,J,Y),L!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(L).buffer))}function h(){return i.isWebGL2?t.createVertexArray():o.createVertexArrayOES()}function m($){return i.isWebGL2?t.bindVertexArray($):o.bindVertexArrayOES($)}function _($){return i.isWebGL2?t.deleteVertexArray($):o.deleteVertexArrayOES($)}function x($,X,J){const Y=J.wireframe===!0;let L=a[$.id];L===void 0&&(L={},a[$.id]=L);let W=L[X.id];W===void 0&&(W={},L[X.id]=W);let N=W[Y];return N===void 0&&(N=p(h()),W[Y]=N),N}function p($){const X=[],J=[],Y=[];for(let L=0;L<r;L++)X[L]=0,J[L]=0,Y[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:J,attributeDivisors:Y,object:$,attributes:{},index:null}}function f($,X,J,Y){const L=c.attributes,W=X.attributes;let N=0;const U=J.getAttributes();for(const z in U)if(U[z].location>=0){const re=L[z];let fe=W[z];if(fe===void 0&&(z==="instanceMatrix"&&$.instanceMatrix&&(fe=$.instanceMatrix),z==="instanceColor"&&$.instanceColor&&(fe=$.instanceColor)),re===void 0||re.attribute!==fe||fe&&re.data!==fe.data)return!0;N++}return c.attributesNum!==N||c.index!==Y}function g($,X,J,Y){const L={},W=X.attributes;let N=0;const U=J.getAttributes();for(const z in U)if(U[z].location>=0){let re=W[z];re===void 0&&(z==="instanceMatrix"&&$.instanceMatrix&&(re=$.instanceMatrix),z==="instanceColor"&&$.instanceColor&&(re=$.instanceColor));const fe={};fe.attribute=re,re&&re.data&&(fe.data=re.data),L[z]=fe,N++}c.attributes=L,c.attributesNum=N,c.index=Y}function v(){const $=c.newAttributes;for(let X=0,J=$.length;X<J;X++)$[X]=0}function y($){M($,0)}function M($,X){const J=c.newAttributes,Y=c.enabledAttributes,L=c.attributeDivisors;J[$]=1,Y[$]===0&&(t.enableVertexAttribArray($),Y[$]=1),L[$]!==X&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"]($,X),L[$]=X)}function C(){const $=c.newAttributes,X=c.enabledAttributes;for(let J=0,Y=X.length;J<Y;J++)X[J]!==$[J]&&(t.disableVertexAttribArray(J),X[J]=0)}function E($,X,J,Y,L,W,N){N===!0?t.vertexAttribIPointer($,X,J,L,W):t.vertexAttribPointer($,X,J,Y,L,W)}function D($,X,J,Y){if(i.isWebGL2===!1&&($.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const L=Y.attributes,W=J.getAttributes(),N=X.defaultAttributeValues;for(const U in W){const z=W[U];if(z.location>=0){let ce=L[U];if(ce===void 0&&(U==="instanceMatrix"&&$.instanceMatrix&&(ce=$.instanceMatrix),U==="instanceColor"&&$.instanceColor&&(ce=$.instanceColor)),ce!==void 0){const re=ce.normalized,fe=ce.itemSize,xe=n.get(ce);if(xe===void 0)continue;const Se=xe.buffer,Me=xe.type,Ge=xe.bytesPerElement,Qe=i.isWebGL2===!0&&(Me===t.INT||Me===t.UNSIGNED_INT||ce.gpuType===v_);if(ce.isInterleavedBufferAttribute){const Ie=ce.data,F=Ie.stride,St=ce.offset;if(Ie.isInstancedInterleavedBuffer){for(let Te=0;Te<z.locationSize;Te++)M(z.location+Te,Ie.meshPerAttribute);$.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Ie.meshPerAttribute*Ie.count)}else for(let Te=0;Te<z.locationSize;Te++)y(z.location+Te);t.bindBuffer(t.ARRAY_BUFFER,Se);for(let Te=0;Te<z.locationSize;Te++)E(z.location+Te,fe/z.locationSize,Me,re,F*Ge,(St+fe/z.locationSize*Te)*Ge,Qe)}else{if(ce.isInstancedBufferAttribute){for(let Ie=0;Ie<z.locationSize;Ie++)M(z.location+Ie,ce.meshPerAttribute);$.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Ie=0;Ie<z.locationSize;Ie++)y(z.location+Ie);t.bindBuffer(t.ARRAY_BUFFER,Se);for(let Ie=0;Ie<z.locationSize;Ie++)E(z.location+Ie,fe/z.locationSize,Me,re,fe*Ge,fe/z.locationSize*Ie*Ge,Qe)}}else if(N!==void 0){const re=N[U];if(re!==void 0)switch(re.length){case 2:t.vertexAttrib2fv(z.location,re);break;case 3:t.vertexAttrib3fv(z.location,re);break;case 4:t.vertexAttrib4fv(z.location,re);break;default:t.vertexAttrib1fv(z.location,re)}}}}C()}function T(){ee();for(const $ in a){const X=a[$];for(const J in X){const Y=X[J];for(const L in Y)_(Y[L].object),delete Y[L];delete X[J]}delete a[$]}}function A($){if(a[$.id]===void 0)return;const X=a[$.id];for(const J in X){const Y=X[J];for(const L in Y)_(Y[L].object),delete Y[L];delete X[J]}delete a[$.id]}function Z($){for(const X in a){const J=a[X];if(J[$.id]===void 0)continue;const Y=J[$.id];for(const L in Y)_(Y[L].object),delete Y[L];delete J[$.id]}}function ee(){H(),u=!0,c!==l&&(c=l,m(c.object))}function H(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:ee,resetDefaultState:H,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfProgram:Z,initAttributes:v,enableAttribute:y,disableUnusedAttributes:C}}function fC(t,e,n,i){const r=i.isWebGL2;let o;function s(c){o=c}function a(c,u){t.drawArrays(o,c,u),n.update(u,o,1)}function l(c,u,d){if(d===0)return;let h,m;if(r)h=t,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](o,c,u,d),n.update(u,o,d)}this.setMode=s,this.render=a,this.renderInstances=l}function dC(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){if(E==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=o(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=s||e.has("WEBGL_draw_buffers"),u=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),x=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),f=t.getParameter(t.MAX_VARYING_VECTORS),g=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,y=s||e.has("OES_texture_float"),M=v&&y,C=s?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:o,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:g,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:M,maxSamples:C}}function hC(t){const e=this;let n=null,i=0,r=!1,o=!1;const s=new Ni,a=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const m=d.length!==0||h||i!==0||r;return r=h,i=d.length,m},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,h){n=u(d,h,0)},this.setState=function(d,h,m){const _=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,f=t.get(d);if(!r||_===null||_.length===0||o&&!p)o?u(null):c();else{const g=o?0:i,v=g*4;let y=f.clippingState||null;l.value=y,y=u(_,h,v,m);for(let M=0;M!==v;++M)y[M]=n[M];f.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,m,_){const x=d!==null?d.length:0;let p=null;if(x!==0){if(p=l.value,_!==!0||p===null){const f=m+x*4,g=h.matrixWorldInverse;a.getNormalMatrix(g),(p===null||p.length<f)&&(p=new Float32Array(f));for(let v=0,y=m;v!==x;++v,y+=4)s.copy(d[v]).applyMatrix4(g,a),s.normal.toArray(p,y),p[y+3]=s.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function pC(t){let e=new WeakMap;function n(s,a){return a===Qf?s.mapping=qo:a===Jf&&(s.mapping=Ko),s}function i(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const a=s.mapping;if(a===Qf||a===Jf)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new bT(l.height/2);return c.fromEquirectangularTexture(t,s),e.set(s,c),s.addEventListener("dispose",r),n(c.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class mC extends N_{constructor(e=-1,n=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const bo=4,jm=[.125,.215,.35,.446,.526,.582],xr=20,Ou=new mC,Xm=new ot;let Fu=null;const _r=(1+Math.sqrt(5))/2,fo=1/_r,$m=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,_r,fo),new B(0,_r,-fo),new B(fo,0,_r),new B(-fo,0,_r),new B(_r,fo,0),new B(-_r,fo,0)];class Ym{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Fu=this._renderer.getRenderTarget(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Km(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fu),e.scissorTest=!1,rl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===qo||e.mapping===Ko?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fu=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:aa,format:Hn,colorSpace:ni,depthBuffer:!1},r=qm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qm(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gC(o)),this._blurMaterial=vC(o,e,n)}return r}_compileMaterial(e){const n=new _i(this._lodPlanes[0],e);this._renderer.compile(n,Ou)}_sceneToCubeUV(e,n,i,r){const a=new Tn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Xm),u.toneMapping=Ji,u.autoClear=!1;const m=new Ii({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),_=new _i(new os,m);let x=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(Xm),x=!0);for(let f=0;f<6;f++){const g=f%3;g===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):g===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const v=this._cubeSize;rl(r,g*v,f>2?v:0,v,v),u.setRenderTarget(r),x&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===qo||e.mapping===Ko;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Km());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new _i(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;rl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,Ou)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=$m[(r-1)%$m.length];this._blur(e,r-1,r,o,s)}n.autoClear=i}_blur(e,n,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,s,a){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new _i(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(o)?Math.PI/(2*m):2*Math.PI/(2*xr-1),x=o/_,p=isFinite(o)?1+Math.floor(u*x):xr;p>xr&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${xr}`);const f=[];let g=0;for(let E=0;E<xr;++E){const D=E/x,T=Math.exp(-D*D/2);f.push(T),E===0?g+=T:E<p&&(g+=2*T)}for(let E=0;E<f.length;E++)f[E]=f[E]/g;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=f,h.latitudinal.value=s==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=_,h.mipInt.value=v-i;const y=this._sizeLods[r],M=3*y*(r>v-bo?r-v+bo:0),C=4*(this._cubeSize-y);rl(n,M,C,3*y,2*y),l.setRenderTarget(n),l.render(d,Ou)}}function gC(t){const e=[],n=[],i=[];let r=t;const o=t-bo+1+jm.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);n.push(a);let l=1/a;s>t-bo?l=jm[s-t+bo-1]:s===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,_=6,x=3,p=2,f=1,g=new Float32Array(x*_*m),v=new Float32Array(p*_*m),y=new Float32Array(f*_*m);for(let C=0;C<m;C++){const E=C%3*2/3-1,D=C>2?0:-1,T=[E,D,0,E+2/3,D,0,E+2/3,D+1,0,E,D,0,E+2/3,D+1,0,E,D+1,0];g.set(T,x*_*C),v.set(h,p*_*C);const A=[C,C,C,C,C,C];y.set(A,f*_*C)}const M=new jr;M.setAttribute("position",new ti(g,x)),M.setAttribute("uv",new ti(v,p)),M.setAttribute("faceIndex",new ti(y,f)),e.push(M),r>bo&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function qm(t,e,n){const i=new kr(t,e,n);return i.texture.mapping=Ac,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function rl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function vC(t,e,n){const i=new Float32Array(xr),r=new B(0,1,0);return new Br({name:"SphericalGaussianBlur",defines:{n:xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:hh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function Km(){return new Br({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function Zm(){return new Br({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function hh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function _C(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Qf||l===Jf,u=l===qo||l===Ko;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return n===null&&(n=new Ym(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||u&&d&&r(d)){n===null&&(n=new Ym(t));const h=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",o),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function xC(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function yC(t,e,n,i){const r={},o=new WeakMap;function s(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const x=h.morphAttributes[_];for(let p=0,f=x.length;p<f;p++)e.remove(x[p])}h.removeEventListener("dispose",s),delete r[h.id];const m=o.get(h);m&&(e.remove(m),o.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",s),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const m=d.morphAttributes;for(const _ in m){const x=m[_];for(let p=0,f=x.length;p<f;p++)e.update(x[p],t.ARRAY_BUFFER)}}function c(d){const h=[],m=d.index,_=d.attributes.position;let x=0;if(m!==null){const g=m.array;x=m.version;for(let v=0,y=g.length;v<y;v+=3){const M=g[v+0],C=g[v+1],E=g[v+2];h.push(M,C,C,E,E,M)}}else if(_!==void 0){const g=_.array;x=_.version;for(let v=0,y=g.length/3-1;v<y;v+=3){const M=v+0,C=v+1,E=v+2;h.push(M,C,C,E,E,M)}}else return;const p=new(w_(h)?U_:D_)(h,1);p.version=x;const f=o.get(d);f&&e.remove(f),o.set(d,p)}function u(d){const h=o.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&c(d)}else c(d);return o.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function SC(t,e,n,i){const r=i.isWebGL2;let o;function s(h){o=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,m){t.drawElements(o,m,a,h*l),n.update(m,o,1)}function d(h,m,_){if(_===0)return;let x,p;if(r)x=t,p="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[p](o,m,a,h*l,_),n.update(m,o,_)}this.setMode=s,this.setIndex=c,this.render=u,this.renderInstances=d}function EC(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=a*(o/3);break;case t.LINES:n.lines+=a*(o/2);break;case t.LINE_STRIP:n.lines+=a*(o-1);break;case t.LINE_LOOP:n.lines+=a*o;break;case t.POINTS:n.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function MC(t,e){return t[0]-e[0]}function TC(t,e){return Math.abs(e[1])-Math.abs(t[1])}function wC(t,e,n){const i={},r=new Float32Array(8),o=new WeakMap,s=new Ut,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,d){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,x=_!==void 0?_.length:0;let p=o.get(u);if(p===void 0||p.count!==x){let X=function(){H.dispose(),o.delete(u),u.removeEventListener("dispose",X)};var m=X;p!==void 0&&p.texture.dispose();const v=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],E=u.morphAttributes.normal||[],D=u.morphAttributes.color||[];let T=0;v===!0&&(T=1),y===!0&&(T=2),M===!0&&(T=3);let A=u.attributes.position.count*T,Z=1;A>e.maxTextureSize&&(Z=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const ee=new Float32Array(A*Z*4*x),H=new b_(ee,A,Z,x);H.type=Gi,H.needsUpdate=!0;const $=T*4;for(let J=0;J<x;J++){const Y=C[J],L=E[J],W=D[J],N=A*Z*4*J;for(let U=0;U<Y.count;U++){const z=U*$;v===!0&&(s.fromBufferAttribute(Y,U),ee[N+z+0]=s.x,ee[N+z+1]=s.y,ee[N+z+2]=s.z,ee[N+z+3]=0),y===!0&&(s.fromBufferAttribute(L,U),ee[N+z+4]=s.x,ee[N+z+5]=s.y,ee[N+z+6]=s.z,ee[N+z+7]=0),M===!0&&(s.fromBufferAttribute(W,U),ee[N+z+8]=s.x,ee[N+z+9]=s.y,ee[N+z+10]=s.z,ee[N+z+11]=W.itemSize===4?s.w:1)}}p={count:x,texture:H,size:new He(A,Z)},o.set(u,p),u.addEventListener("dispose",X)}let f=0;for(let v=0;v<h.length;v++)f+=h[v];const g=u.morphTargetsRelative?1:1-f;d.getUniforms().setValue(t,"morphTargetBaseInfluence",g),d.getUniforms().setValue(t,"morphTargetInfluences",h),d.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const _=h===void 0?0:h.length;let x=i[u.id];if(x===void 0||x.length!==_){x=[];for(let y=0;y<_;y++)x[y]=[y,0];i[u.id]=x}for(let y=0;y<_;y++){const M=x[y];M[0]=y,M[1]=h[y]}x.sort(TC);for(let y=0;y<8;y++)y<_&&x[y][1]?(a[y][0]=x[y][0],a[y][1]=x[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(MC);const p=u.morphAttributes.position,f=u.morphAttributes.normal;let g=0;for(let y=0;y<8;y++){const M=a[y],C=M[0],E=M[1];C!==Number.MAX_SAFE_INTEGER&&E?(p&&u.getAttribute("morphTarget"+y)!==p[C]&&u.setAttribute("morphTarget"+y,p[C]),f&&u.getAttribute("morphNormal"+y)!==f[C]&&u.setAttribute("morphNormal"+y,f[C]),r[y]=E,g+=E):(p&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),f&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),r[y]=0)}const v=u.morphTargetsRelative?1:1-g;d.getUniforms().setValue(t,"morphTargetBaseInfluence",v),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function AC(t,e,n,i){let r=new WeakMap;function o(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function s(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:o,dispose:s}}const z_=new an,B_=new b_,H_=new dT,G_=new O_,Qm=[],Jm=[],eg=new Float32Array(16),tg=new Float32Array(9),ng=new Float32Array(4);function ss(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=Qm[r];if(o===void 0&&(o=new Float32Array(r),Qm[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function wt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function At(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Rc(t,e){let n=Jm[e];n===void 0&&(n=new Int32Array(e),Jm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function CC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function bC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2fv(this.addr,e),At(n,e)}}function RC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(wt(n,e))return;t.uniform3fv(this.addr,e),At(n,e)}}function PC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4fv(this.addr,e),At(n,e)}}function LC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),At(n,e)}else{if(wt(n,i))return;ng.set(i),t.uniformMatrix2fv(this.addr,!1,ng),At(n,i)}}function DC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),At(n,e)}else{if(wt(n,i))return;tg.set(i),t.uniformMatrix3fv(this.addr,!1,tg),At(n,i)}}function UC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),At(n,e)}else{if(wt(n,i))return;eg.set(i),t.uniformMatrix4fv(this.addr,!1,eg),At(n,i)}}function IC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function NC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2iv(this.addr,e),At(n,e)}}function OC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wt(n,e))return;t.uniform3iv(this.addr,e),At(n,e)}}function FC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4iv(this.addr,e),At(n,e)}}function kC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function zC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2uiv(this.addr,e),At(n,e)}}function BC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wt(n,e))return;t.uniform3uiv(this.addr,e),At(n,e)}}function HC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4uiv(this.addr,e),At(n,e)}}function GC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||z_,r)}function VC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||H_,r)}function WC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||G_,r)}function jC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||B_,r)}function XC(t){switch(t){case 5126:return CC;case 35664:return bC;case 35665:return RC;case 35666:return PC;case 35674:return LC;case 35675:return DC;case 35676:return UC;case 5124:case 35670:return IC;case 35667:case 35671:return NC;case 35668:case 35672:return OC;case 35669:case 35673:return FC;case 5125:return kC;case 36294:return zC;case 36295:return BC;case 36296:return HC;case 35678:case 36198:case 36298:case 36306:case 35682:return GC;case 35679:case 36299:case 36307:return VC;case 35680:case 36300:case 36308:case 36293:return WC;case 36289:case 36303:case 36311:case 36292:return jC}}function $C(t,e){t.uniform1fv(this.addr,e)}function YC(t,e){const n=ss(e,this.size,2);t.uniform2fv(this.addr,n)}function qC(t,e){const n=ss(e,this.size,3);t.uniform3fv(this.addr,n)}function KC(t,e){const n=ss(e,this.size,4);t.uniform4fv(this.addr,n)}function ZC(t,e){const n=ss(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function QC(t,e){const n=ss(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function JC(t,e){const n=ss(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function eb(t,e){t.uniform1iv(this.addr,e)}function tb(t,e){t.uniform2iv(this.addr,e)}function nb(t,e){t.uniform3iv(this.addr,e)}function ib(t,e){t.uniform4iv(this.addr,e)}function rb(t,e){t.uniform1uiv(this.addr,e)}function ob(t,e){t.uniform2uiv(this.addr,e)}function sb(t,e){t.uniform3uiv(this.addr,e)}function ab(t,e){t.uniform4uiv(this.addr,e)}function lb(t,e,n){const i=this.cache,r=e.length,o=Rc(n,r);wt(i,o)||(t.uniform1iv(this.addr,o),At(i,o));for(let s=0;s!==r;++s)n.setTexture2D(e[s]||z_,o[s])}function cb(t,e,n){const i=this.cache,r=e.length,o=Rc(n,r);wt(i,o)||(t.uniform1iv(this.addr,o),At(i,o));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||H_,o[s])}function ub(t,e,n){const i=this.cache,r=e.length,o=Rc(n,r);wt(i,o)||(t.uniform1iv(this.addr,o),At(i,o));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||G_,o[s])}function fb(t,e,n){const i=this.cache,r=e.length,o=Rc(n,r);wt(i,o)||(t.uniform1iv(this.addr,o),At(i,o));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||B_,o[s])}function db(t){switch(t){case 5126:return $C;case 35664:return YC;case 35665:return qC;case 35666:return KC;case 35674:return ZC;case 35675:return QC;case 35676:return JC;case 5124:case 35670:return eb;case 35667:case 35671:return tb;case 35668:case 35672:return nb;case 35669:case 35673:return ib;case 5125:return rb;case 36294:return ob;case 36295:return sb;case 36296:return ab;case 35678:case 36198:case 36298:case 36306:case 35682:return lb;case 35679:case 36299:case 36307:return cb;case 35680:case 36300:case 36308:case 36293:return ub;case 36289:case 36303:case 36311:case 36292:return fb}}class hb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=XC(n.type)}}class pb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=db(n.type)}}class mb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,n[a.id],i)}}}const ku=/(\w+)(\])?(\[|\.)?/g;function ig(t,e){t.seq.push(e),t.map[e.id]=e}function gb(t,e,n){const i=t.name,r=i.length;for(ku.lastIndex=0;;){const o=ku.exec(i),s=ku.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===r){ig(n,c===void 0?new hb(a,t,e):new pb(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new mb(a),ig(n,d)),n=d}}}class wl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),s=e.getUniformLocation(n,o.name);gb(o,s,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,s=n.length;o!==s;++o){const a=n[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function rg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let vb=0;function _b(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return i.join(`
`)}function xb(t){switch(t){case ni:return["Linear","( value )"];case Ue:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),["Linear","( value )"]}}function og(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+_b(t.getShaderSource(e),s)}else return r}function yb(t,e){const n=xb(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function Sb(t,e){let n;switch(e){case p1:n="Linear";break;case m1:n="Reinhard";break;case g1:n="OptimizedCineon";break;case v1:n="ACESFilmic";break;case _1:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Eb(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ws).join(`
`)}function Mb(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Tb(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),s=o.name;let a=1;o.type===t.FLOAT_MAT2&&(a=2),o.type===t.FLOAT_MAT3&&(a=3),o.type===t.FLOAT_MAT4&&(a=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function ws(t){return t!==""}function sg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ag(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wb=/^[ \t]*#include +<([\w\d./]+)>/gm;function rd(t){return t.replace(wb,Cb)}const Ab=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Cb(t,e){let n=Oe[e];if(n===void 0){const i=Ab.get(e);if(i!==void 0)n=Oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return rd(n)}const bb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lg(t){return t.replace(bb,Rb)}function Rb(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function cg(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Pb(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===d_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===XM?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ui&&(e="SHADOWMAP_TYPE_VSM"),e}function Lb(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case qo:case Ko:e="ENVMAP_TYPE_CUBE";break;case Ac:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Db(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ko:e="ENVMAP_MODE_REFRACTION";break}return e}function Ub(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case m_:e="ENVMAP_BLENDING_MULTIPLY";break;case d1:e="ENVMAP_BLENDING_MIX";break;case h1:e="ENVMAP_BLENDING_ADD";break}return e}function Ib(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Nb(t,e,n,i){const r=t.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const l=Pb(n),c=Lb(n),u=Db(n),d=Ub(n),h=Ib(n),m=n.isWebGL2?"":Eb(n),_=Mb(o),x=r.createProgram();let p,f,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(ws).join(`
`),p.length>0&&(p+=`
`),f=[m,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(ws).join(`
`),f.length>0&&(f+=`
`)):(p=[cg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ws).join(`
`),f=[m,cg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ji?"#define TONE_MAPPING":"",n.toneMapping!==Ji?Oe.tonemapping_pars_fragment:"",n.toneMapping!==Ji?Sb("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,yb("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ws).join(`
`)),s=rd(s),s=sg(s,n),s=ag(s,n),a=rd(a),a=sg(a,n),a=ag(a,n),s=lg(s),a=lg(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",n.glslVersion===bm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===bm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=g+p+s,y=g+f+a,M=rg(r,r.VERTEX_SHADER,v),C=rg(r,r.FRAGMENT_SHADER,y);if(r.attachShader(x,M),r.attachShader(x,C),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x),t.debug.checkShaderErrors){const T=r.getProgramInfoLog(x).trim(),A=r.getShaderInfoLog(M).trim(),Z=r.getShaderInfoLog(C).trim();let ee=!0,H=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(ee=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,M,C);else{const $=og(r,M,"vertex"),X=og(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Program Info Log: `+T+`
`+$+`
`+X)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(A===""||Z==="")&&(H=!1);H&&(this.diagnostics={runnable:ee,programLog:T,vertexShader:{log:A,prefix:p},fragmentShader:{log:Z,prefix:f}})}r.deleteShader(M),r.deleteShader(C);let E;this.getUniforms=function(){return E===void 0&&(E=new wl(r,x)),E};let D;return this.getAttributes=function(){return D===void 0&&(D=Tb(r,x)),D},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=vb++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=M,this.fragmentShader=C,this}let Ob=0;class Fb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new kb(e),n.set(e,i)),i}}class kb{constructor(e){this.id=Ob++,this.code=e,this.usedTimes=0}}function zb(t,e,n,i,r,o,s){const a=new P_,l=new Fb,c=[],u=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(T){return T===0?"uv":`uv${T}`}function p(T,A,Z,ee,H){const $=ee.fog,X=H.geometry,J=T.isMeshStandardMaterial?ee.environment:null,Y=(T.isMeshStandardMaterial?n:e).get(T.envMap||J),L=Y&&Y.mapping===Ac?Y.image.height:null,W=_[T.type];T.precision!==null&&(m=r.getMaxPrecision(T.precision),m!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));const N=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,U=N!==void 0?N.length:0;let z=0;X.morphAttributes.position!==void 0&&(z=1),X.morphAttributes.normal!==void 0&&(z=2),X.morphAttributes.color!==void 0&&(z=3);let ce,re,fe,xe;if(W){const nt=Zn[W];ce=nt.vertexShader,re=nt.fragmentShader}else ce=T.vertexShader,re=T.fragmentShader,l.update(T),fe=l.getVertexShaderID(T),xe=l.getFragmentShaderID(T);const Se=t.getRenderTarget(),Me=H.isInstancedMesh===!0,Ge=!!T.map,Qe=!!T.matcap,Ie=!!Y,F=!!T.aoMap,St=!!T.lightMap,Te=!!T.bumpMap,Le=!!T.normalMap,Ce=!!T.displacementMap,et=!!T.emissiveMap,ke=!!T.metalnessMap,De=!!T.roughnessMap,$e=T.anisotropy>0,Et=T.clearcoat>0,Ct=T.iridescence>0,b=T.sheen>0,S=T.transmission>0,V=$e&&!!T.anisotropyMap,oe=Et&&!!T.clearcoatMap,te=Et&&!!T.clearcoatNormalMap,se=Et&&!!T.clearcoatRoughnessMap,Ee=Ct&&!!T.iridescenceMap,le=Ct&&!!T.iridescenceThicknessMap,j=b&&!!T.sheenColorMap,R=b&&!!T.sheenRoughnessMap,Q=!!T.specularMap,ge=!!T.specularColorMap,ue=!!T.specularIntensityMap,me=S&&!!T.transmissionMap,Pe=S&&!!T.thicknessMap,Xe=!!T.gradientMap,P=!!T.alphaMap,he=T.alphaTest>0,G=!!T.alphaHash,ie=!!T.extensions,pe=!!X.attributes.uv1,ze=!!X.attributes.uv2,Ke=!!X.attributes.uv3;let tt=Ji;return T.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(tt=t.toneMapping),{isWebGL2:u,shaderID:W,shaderType:T.type,shaderName:T.name,vertexShader:ce,fragmentShader:re,defines:T.defines,customVertexShaderID:fe,customFragmentShaderID:xe,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,instancing:Me,instancingColor:Me&&H.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:Se===null?t.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:ni,map:Ge,matcap:Qe,envMap:Ie,envMapMode:Ie&&Y.mapping,envMapCubeUVHeight:L,aoMap:F,lightMap:St,bumpMap:Te,normalMap:Le,displacementMap:h&&Ce,emissiveMap:et,normalMapObjectSpace:Le&&T.normalMapType===D1,normalMapTangentSpace:Le&&T.normalMapType===L1,metalnessMap:ke,roughnessMap:De,anisotropy:$e,anisotropyMap:V,clearcoat:Et,clearcoatMap:oe,clearcoatNormalMap:te,clearcoatRoughnessMap:se,iridescence:Ct,iridescenceMap:Ee,iridescenceThicknessMap:le,sheen:b,sheenColorMap:j,sheenRoughnessMap:R,specularMap:Q,specularColorMap:ge,specularIntensityMap:ue,transmission:S,transmissionMap:me,thicknessMap:Pe,gradientMap:Xe,opaque:T.transparent===!1&&T.blending===No,alphaMap:P,alphaTest:he,alphaHash:G,combine:T.combine,mapUv:Ge&&x(T.map.channel),aoMapUv:F&&x(T.aoMap.channel),lightMapUv:St&&x(T.lightMap.channel),bumpMapUv:Te&&x(T.bumpMap.channel),normalMapUv:Le&&x(T.normalMap.channel),displacementMapUv:Ce&&x(T.displacementMap.channel),emissiveMapUv:et&&x(T.emissiveMap.channel),metalnessMapUv:ke&&x(T.metalnessMap.channel),roughnessMapUv:De&&x(T.roughnessMap.channel),anisotropyMapUv:V&&x(T.anisotropyMap.channel),clearcoatMapUv:oe&&x(T.clearcoatMap.channel),clearcoatNormalMapUv:te&&x(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&x(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&x(T.iridescenceMap.channel),iridescenceThicknessMapUv:le&&x(T.iridescenceThicknessMap.channel),sheenColorMapUv:j&&x(T.sheenColorMap.channel),sheenRoughnessMapUv:R&&x(T.sheenRoughnessMap.channel),specularMapUv:Q&&x(T.specularMap.channel),specularColorMapUv:ge&&x(T.specularColorMap.channel),specularIntensityMapUv:ue&&x(T.specularIntensityMap.channel),transmissionMapUv:me&&x(T.transmissionMap.channel),thicknessMapUv:Pe&&x(T.thicknessMap.channel),alphaMapUv:P&&x(T.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Le||$e),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,vertexUv1s:pe,vertexUv2s:ze,vertexUv3s:Ke,pointsUvs:H.isPoints===!0&&!!X.attributes.uv&&(Ge||P),fog:!!$,useFog:T.fog===!0,fogExp2:$&&$.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:H.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:z,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&Z.length>0,shadowMapType:t.shadowMap.type,toneMapping:tt,useLegacyLights:t._useLegacyLights,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===pi,flipSided:T.side===sn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:ie&&T.extensions.derivatives===!0,extensionFragDepth:ie&&T.extensions.fragDepth===!0,extensionDrawBuffers:ie&&T.extensions.drawBuffers===!0,extensionShaderTextureLOD:ie&&T.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:T.customProgramCacheKey()}}function f(T){const A=[];if(T.shaderID?A.push(T.shaderID):(A.push(T.customVertexShaderID),A.push(T.customFragmentShaderID)),T.defines!==void 0)for(const Z in T.defines)A.push(Z),A.push(T.defines[Z]);return T.isRawShaderMaterial===!1&&(g(A,T),v(A,T),A.push(t.outputColorSpace)),A.push(T.customProgramCacheKey),A.join()}function g(T,A){T.push(A.precision),T.push(A.outputColorSpace),T.push(A.envMapMode),T.push(A.envMapCubeUVHeight),T.push(A.mapUv),T.push(A.alphaMapUv),T.push(A.lightMapUv),T.push(A.aoMapUv),T.push(A.bumpMapUv),T.push(A.normalMapUv),T.push(A.displacementMapUv),T.push(A.emissiveMapUv),T.push(A.metalnessMapUv),T.push(A.roughnessMapUv),T.push(A.anisotropyMapUv),T.push(A.clearcoatMapUv),T.push(A.clearcoatNormalMapUv),T.push(A.clearcoatRoughnessMapUv),T.push(A.iridescenceMapUv),T.push(A.iridescenceThicknessMapUv),T.push(A.sheenColorMapUv),T.push(A.sheenRoughnessMapUv),T.push(A.specularMapUv),T.push(A.specularColorMapUv),T.push(A.specularIntensityMapUv),T.push(A.transmissionMapUv),T.push(A.thicknessMapUv),T.push(A.combine),T.push(A.fogExp2),T.push(A.sizeAttenuation),T.push(A.morphTargetsCount),T.push(A.morphAttributeCount),T.push(A.numDirLights),T.push(A.numPointLights),T.push(A.numSpotLights),T.push(A.numSpotLightMaps),T.push(A.numHemiLights),T.push(A.numRectAreaLights),T.push(A.numDirLightShadows),T.push(A.numPointLightShadows),T.push(A.numSpotLightShadows),T.push(A.numSpotLightShadowsWithMaps),T.push(A.shadowMapType),T.push(A.toneMapping),T.push(A.numClippingPlanes),T.push(A.numClipIntersection),T.push(A.depthPacking)}function v(T,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),T.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),T.push(a.mask)}function y(T){const A=_[T.type];let Z;if(A){const ee=Zn[A];Z=TT.clone(ee.uniforms)}else Z=T.uniforms;return Z}function M(T,A){let Z;for(let ee=0,H=c.length;ee<H;ee++){const $=c[ee];if($.cacheKey===A){Z=$,++Z.usedTimes;break}}return Z===void 0&&(Z=new Nb(t,A,T,o),c.push(Z)),Z}function C(T){if(--T.usedTimes===0){const A=c.indexOf(T);c[A]=c[c.length-1],c.pop(),T.destroy()}}function E(T){l.remove(T)}function D(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:y,acquireProgram:M,releaseProgram:C,releaseShaderCache:E,programs:c,dispose:D}}function Bb(){let t=new WeakMap;function e(o){let s=t.get(o);return s===void 0&&(s={},t.set(o,s)),s}function n(o){t.delete(o)}function i(o,s,a){t.get(o)[s]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function Hb(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function ug(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function fg(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function s(d,h,m,_,x,p){let f=t[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:m,groupOrder:_,renderOrder:d.renderOrder,z:x,group:p},t[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=m,f.groupOrder=_,f.renderOrder=d.renderOrder,f.z=x,f.group=p),e++,f}function a(d,h,m,_,x,p){const f=s(d,h,m,_,x,p);m.transmission>0?i.push(f):m.transparent===!0?r.push(f):n.push(f)}function l(d,h,m,_,x,p){const f=s(d,h,m,_,x,p);m.transmission>0?i.unshift(f):m.transparent===!0?r.unshift(f):n.unshift(f)}function c(d,h){n.length>1&&n.sort(d||Hb),i.length>1&&i.sort(h||ug),r.length>1&&r.sort(h||ug)}function u(){for(let d=e,h=t.length;d<h;d++){const m=t[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:a,unshift:l,finish:u,sort:c}}function Gb(){let t=new WeakMap;function e(i,r){const o=t.get(i);let s;return o===void 0?(s=new fg,t.set(i,[s])):r>=o.length?(s=new fg,o.push(s)):s=o[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function Vb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new B,color:new ot};break;case"SpotLight":n={position:new B,direction:new B,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new ot,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":n={color:new ot,position:new B,halfWidth:new B,halfHeight:new B};break}return t[e.id]=n,n}}}function Wb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let jb=0;function Xb(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function $b(t,e){const n=new Vb,i=Wb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new B);const o=new B,s=new Nt,a=new Nt;function l(u,d){let h=0,m=0,_=0;for(let Z=0;Z<9;Z++)r.probe[Z].set(0,0,0);let x=0,p=0,f=0,g=0,v=0,y=0,M=0,C=0,E=0,D=0;u.sort(Xb);const T=d===!0?Math.PI:1;for(let Z=0,ee=u.length;Z<ee;Z++){const H=u[Z],$=H.color,X=H.intensity,J=H.distance,Y=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)h+=$.r*X*T,m+=$.g*X*T,_+=$.b*X*T;else if(H.isLightProbe)for(let L=0;L<9;L++)r.probe[L].addScaledVector(H.sh.coefficients[L],X);else if(H.isDirectionalLight){const L=n.get(H);if(L.color.copy(H.color).multiplyScalar(H.intensity*T),H.castShadow){const W=H.shadow,N=i.get(H);N.shadowBias=W.bias,N.shadowNormalBias=W.normalBias,N.shadowRadius=W.radius,N.shadowMapSize=W.mapSize,r.directionalShadow[x]=N,r.directionalShadowMap[x]=Y,r.directionalShadowMatrix[x]=H.shadow.matrix,y++}r.directional[x]=L,x++}else if(H.isSpotLight){const L=n.get(H);L.position.setFromMatrixPosition(H.matrixWorld),L.color.copy($).multiplyScalar(X*T),L.distance=J,L.coneCos=Math.cos(H.angle),L.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),L.decay=H.decay,r.spot[f]=L;const W=H.shadow;if(H.map&&(r.spotLightMap[E]=H.map,E++,W.updateMatrices(H),H.castShadow&&D++),r.spotLightMatrix[f]=W.matrix,H.castShadow){const N=i.get(H);N.shadowBias=W.bias,N.shadowNormalBias=W.normalBias,N.shadowRadius=W.radius,N.shadowMapSize=W.mapSize,r.spotShadow[f]=N,r.spotShadowMap[f]=Y,C++}f++}else if(H.isRectAreaLight){const L=n.get(H);L.color.copy($).multiplyScalar(X),L.halfWidth.set(H.width*.5,0,0),L.halfHeight.set(0,H.height*.5,0),r.rectArea[g]=L,g++}else if(H.isPointLight){const L=n.get(H);if(L.color.copy(H.color).multiplyScalar(H.intensity*T),L.distance=H.distance,L.decay=H.decay,H.castShadow){const W=H.shadow,N=i.get(H);N.shadowBias=W.bias,N.shadowNormalBias=W.normalBias,N.shadowRadius=W.radius,N.shadowMapSize=W.mapSize,N.shadowCameraNear=W.camera.near,N.shadowCameraFar=W.camera.far,r.pointShadow[p]=N,r.pointShadowMap[p]=Y,r.pointShadowMatrix[p]=H.shadow.matrix,M++}r.point[p]=L,p++}else if(H.isHemisphereLight){const L=n.get(H);L.skyColor.copy(H.color).multiplyScalar(X*T),L.groundColor.copy(H.groundColor).multiplyScalar(X*T),r.hemi[v]=L,v++}}g>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=de.LTC_FLOAT_1,r.rectAreaLTC2=de.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=de.LTC_HALF_1,r.rectAreaLTC2=de.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=_;const A=r.hash;(A.directionalLength!==x||A.pointLength!==p||A.spotLength!==f||A.rectAreaLength!==g||A.hemiLength!==v||A.numDirectionalShadows!==y||A.numPointShadows!==M||A.numSpotShadows!==C||A.numSpotMaps!==E)&&(r.directional.length=x,r.spot.length=f,r.rectArea.length=g,r.point.length=p,r.hemi.length=v,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=M,r.spotLightMatrix.length=C+E-D,r.spotLightMap.length=E,r.numSpotLightShadowsWithMaps=D,A.directionalLength=x,A.pointLength=p,A.spotLength=f,A.rectAreaLength=g,A.hemiLength=v,A.numDirectionalShadows=y,A.numPointShadows=M,A.numSpotShadows=C,A.numSpotMaps=E,r.version=jb++)}function c(u,d){let h=0,m=0,_=0,x=0,p=0;const f=d.matrixWorldInverse;for(let g=0,v=u.length;g<v;g++){const y=u[g];if(y.isDirectionalLight){const M=r.directional[h];M.direction.setFromMatrixPosition(y.matrixWorld),o.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(o),M.direction.transformDirection(f),h++}else if(y.isSpotLight){const M=r.spot[_];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(f),M.direction.setFromMatrixPosition(y.matrixWorld),o.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(o),M.direction.transformDirection(f),_++}else if(y.isRectAreaLight){const M=r.rectArea[x];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(f),a.identity(),s.copy(y.matrixWorld),s.premultiply(f),a.extractRotation(s),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){const M=r.point[m];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(f),m++}else if(y.isHemisphereLight){const M=r.hemi[p];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(f),p++}}}return{setup:l,setupView:c,state:r}}function dg(t,e){const n=new $b(t,e),i=[],r=[];function o(){i.length=0,r.length=0}function s(d){i.push(d)}function a(d){r.push(d)}function l(d){n.setup(i,d)}function c(d){n.setupView(i,d)}return{init:o,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:s,pushShadow:a}}function Yb(t,e){let n=new WeakMap;function i(o,s=0){const a=n.get(o);let l;return a===void 0?(l=new dg(t,e),n.set(o,[l])):s>=a.length?(l=new dg(t,e),a.push(l)):l=a[s],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class qb extends bc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=R1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Kb extends bc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Zb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Jb(t,e,n){let i=new F_;const r=new He,o=new He,s=new Ut,a=new qb({depthPacking:P1}),l=new Kb,c={},u=n.maxTextureSize,d={[rr]:sn,[sn]:rr,[pi]:pi},h=new Br({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:Zb,fragmentShader:Qb}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new jr;_.setAttribute("position",new ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new _i(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=d_;let f=this.type;this.render=function(M,C,E){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;const D=t.getRenderTarget(),T=t.getActiveCubeFace(),A=t.getActiveMipmapLevel(),Z=t.state;Z.setBlending(Qi),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const ee=f!==ui&&this.type===ui,H=f===ui&&this.type!==ui;for(let $=0,X=M.length;$<X;$++){const J=M[$],Y=J.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);const L=Y.getFrameExtents();if(r.multiply(L),o.copy(Y.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(o.x=Math.floor(u/L.x),r.x=o.x*L.x,Y.mapSize.x=o.x),r.y>u&&(o.y=Math.floor(u/L.y),r.y=o.y*L.y,Y.mapSize.y=o.y)),Y.map===null||ee===!0||H===!0){const N=this.type!==ui?{minFilter:qt,magFilter:qt}:{};Y.map!==null&&Y.map.dispose(),Y.map=new kr(r.x,r.y,N),Y.map.texture.name=J.name+".shadowMap",Y.camera.updateProjectionMatrix()}t.setRenderTarget(Y.map),t.clear();const W=Y.getViewportCount();for(let N=0;N<W;N++){const U=Y.getViewport(N);s.set(o.x*U.x,o.y*U.y,o.x*U.z,o.y*U.w),Z.viewport(s),Y.updateMatrices(J,N),i=Y.getFrustum(),y(C,E,Y.camera,J,this.type)}Y.isPointLightShadow!==!0&&this.type===ui&&g(Y,E),Y.needsUpdate=!1}f=this.type,p.needsUpdate=!1,t.setRenderTarget(D,T,A)};function g(M,C){const E=e.update(x);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,m.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new kr(r.x,r.y)),h.uniforms.shadow_pass.value=M.map.texture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,t.setRenderTarget(M.mapPass),t.clear(),t.renderBufferDirect(C,null,E,h,x,null),m.uniforms.shadow_pass.value=M.mapPass.texture,m.uniforms.resolution.value=M.mapSize,m.uniforms.radius.value=M.radius,t.setRenderTarget(M.map),t.clear(),t.renderBufferDirect(C,null,E,m,x,null)}function v(M,C,E,D){let T=null;const A=E.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(A!==void 0)T=A;else if(T=E.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const Z=T.uuid,ee=C.uuid;let H=c[Z];H===void 0&&(H={},c[Z]=H);let $=H[ee];$===void 0&&($=T.clone(),H[ee]=$),T=$}if(T.visible=C.visible,T.wireframe=C.wireframe,D===ui?T.side=C.shadowSide!==null?C.shadowSide:C.side:T.side=C.shadowSide!==null?C.shadowSide:d[C.side],T.alphaMap=C.alphaMap,T.alphaTest=C.alphaTest,T.map=C.map,T.clipShadows=C.clipShadows,T.clippingPlanes=C.clippingPlanes,T.clipIntersection=C.clipIntersection,T.displacementMap=C.displacementMap,T.displacementScale=C.displacementScale,T.displacementBias=C.displacementBias,T.wireframeLinewidth=C.wireframeLinewidth,T.linewidth=C.linewidth,E.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const Z=t.properties.get(T);Z.light=E}return T}function y(M,C,E,D,T){if(M.visible===!1)return;if(M.layers.test(C.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&T===ui)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,M.matrixWorld);const ee=e.update(M),H=M.material;if(Array.isArray(H)){const $=ee.groups;for(let X=0,J=$.length;X<J;X++){const Y=$[X],L=H[Y.materialIndex];if(L&&L.visible){const W=v(M,L,D,T);t.renderBufferDirect(E,null,ee,W,M,Y)}}}else if(H.visible){const $=v(M,H,D,T);t.renderBufferDirect(E,null,ee,$,M,null)}}const Z=M.children;for(let ee=0,H=Z.length;ee<H;ee++)y(Z[ee],C,E,D,T)}}function eR(t,e,n){const i=n.isWebGL2;function r(){let P=!1;const he=new Ut;let G=null;const ie=new Ut(0,0,0,0);return{setMask:function(pe){G!==pe&&!P&&(t.colorMask(pe,pe,pe,pe),G=pe)},setLocked:function(pe){P=pe},setClear:function(pe,ze,Ke,tt,wi){wi===!0&&(pe*=tt,ze*=tt,Ke*=tt),he.set(pe,ze,Ke,tt),ie.equals(he)===!1&&(t.clearColor(pe,ze,Ke,tt),ie.copy(he))},reset:function(){P=!1,G=null,ie.set(-1,0,0,0)}}}function o(){let P=!1,he=null,G=null,ie=null;return{setTest:function(pe){pe?Se(t.DEPTH_TEST):Me(t.DEPTH_TEST)},setMask:function(pe){he!==pe&&!P&&(t.depthMask(pe),he=pe)},setFunc:function(pe){if(G!==pe){switch(pe){case o1:t.depthFunc(t.NEVER);break;case s1:t.depthFunc(t.ALWAYS);break;case a1:t.depthFunc(t.LESS);break;case Zf:t.depthFunc(t.LEQUAL);break;case l1:t.depthFunc(t.EQUAL);break;case c1:t.depthFunc(t.GEQUAL);break;case u1:t.depthFunc(t.GREATER);break;case f1:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}G=pe}},setLocked:function(pe){P=pe},setClear:function(pe){ie!==pe&&(t.clearDepth(pe),ie=pe)},reset:function(){P=!1,he=null,G=null,ie=null}}}function s(){let P=!1,he=null,G=null,ie=null,pe=null,ze=null,Ke=null,tt=null,wi=null;return{setTest:function(nt){P||(nt?Se(t.STENCIL_TEST):Me(t.STENCIL_TEST))},setMask:function(nt){he!==nt&&!P&&(t.stencilMask(nt),he=nt)},setFunc:function(nt,$n,Wt){(G!==nt||ie!==$n||pe!==Wt)&&(t.stencilFunc(nt,$n,Wt),G=nt,ie=$n,pe=Wt)},setOp:function(nt,$n,Wt){(ze!==nt||Ke!==$n||tt!==Wt)&&(t.stencilOp(nt,$n,Wt),ze=nt,Ke=$n,tt=Wt)},setLocked:function(nt){P=nt},setClear:function(nt){wi!==nt&&(t.clearStencil(nt),wi=nt)},reset:function(){P=!1,he=null,G=null,ie=null,pe=null,ze=null,Ke=null,tt=null,wi=null}}}const a=new r,l=new o,c=new s,u=new WeakMap,d=new WeakMap;let h={},m={},_=new WeakMap,x=[],p=null,f=!1,g=null,v=null,y=null,M=null,C=null,E=null,D=null,T=!1,A=null,Z=null,ee=null,H=null,$=null;const X=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,Y=0;const L=t.getParameter(t.VERSION);L.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(L)[1]),J=Y>=1):L.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),J=Y>=2);let W=null,N={};const U=t.getParameter(t.SCISSOR_BOX),z=t.getParameter(t.VIEWPORT),ce=new Ut().fromArray(U),re=new Ut().fromArray(z);function fe(P,he,G,ie){const pe=new Uint8Array(4),ze=t.createTexture();t.bindTexture(P,ze),t.texParameteri(P,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(P,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ke=0;Ke<G;Ke++)i&&(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)?t.texImage3D(he,0,t.RGBA,1,1,ie,0,t.RGBA,t.UNSIGNED_BYTE,pe):t.texImage2D(he+Ke,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,pe);return ze}const xe={};xe[t.TEXTURE_2D]=fe(t.TEXTURE_2D,t.TEXTURE_2D,1),xe[t.TEXTURE_CUBE_MAP]=fe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(xe[t.TEXTURE_2D_ARRAY]=fe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),xe[t.TEXTURE_3D]=fe(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Se(t.DEPTH_TEST),l.setFunc(Zf),Ce(!1),et(Zp),Se(t.CULL_FACE),Te(Qi);function Se(P){h[P]!==!0&&(t.enable(P),h[P]=!0)}function Me(P){h[P]!==!1&&(t.disable(P),h[P]=!1)}function Ge(P,he){return m[P]!==he?(t.bindFramebuffer(P,he),m[P]=he,i&&(P===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=he),P===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=he)),!0):!1}function Qe(P,he){let G=x,ie=!1;if(P)if(G=_.get(he),G===void 0&&(G=[],_.set(he,G)),P.isWebGLMultipleRenderTargets){const pe=P.texture;if(G.length!==pe.length||G[0]!==t.COLOR_ATTACHMENT0){for(let ze=0,Ke=pe.length;ze<Ke;ze++)G[ze]=t.COLOR_ATTACHMENT0+ze;G.length=pe.length,ie=!0}}else G[0]!==t.COLOR_ATTACHMENT0&&(G[0]=t.COLOR_ATTACHMENT0,ie=!0);else G[0]!==t.BACK&&(G[0]=t.BACK,ie=!0);ie&&(n.isWebGL2?t.drawBuffers(G):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(G))}function Ie(P){return p!==P?(t.useProgram(P),p=P,!0):!1}const F={[ho]:t.FUNC_ADD,[YM]:t.FUNC_SUBTRACT,[qM]:t.FUNC_REVERSE_SUBTRACT};if(i)F[tm]=t.MIN,F[nm]=t.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(F[tm]=P.MIN_EXT,F[nm]=P.MAX_EXT)}const St={[KM]:t.ZERO,[ZM]:t.ONE,[QM]:t.SRC_COLOR,[h_]:t.SRC_ALPHA,[r1]:t.SRC_ALPHA_SATURATE,[n1]:t.DST_COLOR,[e1]:t.DST_ALPHA,[JM]:t.ONE_MINUS_SRC_COLOR,[p_]:t.ONE_MINUS_SRC_ALPHA,[i1]:t.ONE_MINUS_DST_COLOR,[t1]:t.ONE_MINUS_DST_ALPHA};function Te(P,he,G,ie,pe,ze,Ke,tt){if(P===Qi){f===!0&&(Me(t.BLEND),f=!1);return}if(f===!1&&(Se(t.BLEND),f=!0),P!==$M){if(P!==g||tt!==T){if((v!==ho||C!==ho)&&(t.blendEquation(t.FUNC_ADD),v=ho,C=ho),tt)switch(P){case No:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Qp:t.blendFunc(t.ONE,t.ONE);break;case Jp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case em:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case No:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Qp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Jp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case em:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}y=null,M=null,E=null,D=null,g=P,T=tt}return}pe=pe||he,ze=ze||G,Ke=Ke||ie,(he!==v||pe!==C)&&(t.blendEquationSeparate(F[he],F[pe]),v=he,C=pe),(G!==y||ie!==M||ze!==E||Ke!==D)&&(t.blendFuncSeparate(St[G],St[ie],St[ze],St[Ke]),y=G,M=ie,E=ze,D=Ke),g=P,T=!1}function Le(P,he){P.side===pi?Me(t.CULL_FACE):Se(t.CULL_FACE);let G=P.side===sn;he&&(G=!G),Ce(G),P.blending===No&&P.transparent===!1?Te(Qi):Te(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const ie=P.stencilWrite;c.setTest(ie),ie&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),De(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Se(t.SAMPLE_ALPHA_TO_COVERAGE):Me(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(P){A!==P&&(P?t.frontFace(t.CW):t.frontFace(t.CCW),A=P)}function et(P){P!==WM?(Se(t.CULL_FACE),P!==Z&&(P===Zp?t.cullFace(t.BACK):P===jM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Me(t.CULL_FACE),Z=P}function ke(P){P!==ee&&(J&&t.lineWidth(P),ee=P)}function De(P,he,G){P?(Se(t.POLYGON_OFFSET_FILL),(H!==he||$!==G)&&(t.polygonOffset(he,G),H=he,$=G)):Me(t.POLYGON_OFFSET_FILL)}function $e(P){P?Se(t.SCISSOR_TEST):Me(t.SCISSOR_TEST)}function Et(P){P===void 0&&(P=t.TEXTURE0+X-1),W!==P&&(t.activeTexture(P),W=P)}function Ct(P,he,G){G===void 0&&(W===null?G=t.TEXTURE0+X-1:G=W);let ie=N[G];ie===void 0&&(ie={type:void 0,texture:void 0},N[G]=ie),(ie.type!==P||ie.texture!==he)&&(W!==G&&(t.activeTexture(G),W=G),t.bindTexture(P,he||xe[P]),ie.type=P,ie.texture=he)}function b(){const P=N[W];P!==void 0&&P.type!==void 0&&(t.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function S(){try{t.compressedTexImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function V(){try{t.compressedTexImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function oe(){try{t.texSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function te(){try{t.texSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function se(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ee(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function le(){try{t.texStorage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function j(){try{t.texStorage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function R(){try{t.texImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{t.texImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ge(P){ce.equals(P)===!1&&(t.scissor(P.x,P.y,P.z,P.w),ce.copy(P))}function ue(P){re.equals(P)===!1&&(t.viewport(P.x,P.y,P.z,P.w),re.copy(P))}function me(P,he){let G=d.get(he);G===void 0&&(G=new WeakMap,d.set(he,G));let ie=G.get(P);ie===void 0&&(ie=t.getUniformBlockIndex(he,P.name),G.set(P,ie))}function Pe(P,he){const ie=d.get(he).get(P);u.get(he)!==ie&&(t.uniformBlockBinding(he,ie,P.__bindingPointIndex),u.set(he,ie))}function Xe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},W=null,N={},m={},_=new WeakMap,x=[],p=null,f=!1,g=null,v=null,y=null,M=null,C=null,E=null,D=null,T=!1,A=null,Z=null,ee=null,H=null,$=null,ce.set(0,0,t.canvas.width,t.canvas.height),re.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Se,disable:Me,bindFramebuffer:Ge,drawBuffers:Qe,useProgram:Ie,setBlending:Te,setMaterial:Le,setFlipSided:Ce,setCullFace:et,setLineWidth:ke,setPolygonOffset:De,setScissorTest:$e,activeTexture:Et,bindTexture:Ct,unbindTexture:b,compressedTexImage2D:S,compressedTexImage3D:V,texImage2D:R,texImage3D:Q,updateUBOMapping:me,uniformBlockBinding:Pe,texStorage2D:le,texStorage3D:j,texSubImage2D:oe,texSubImage3D:te,compressedTexSubImage2D:se,compressedTexSubImage3D:Ee,scissor:ge,viewport:ue,reset:Xe}}function tR(t,e,n,i,r,o,s){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,d=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let x;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,S){return f?new OffscreenCanvas(b,S):ca("canvas")}function v(b,S,V,oe){let te=1;if((b.width>oe||b.height>oe)&&(te=oe/Math.max(b.width,b.height)),te<1||S===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const se=S?nc:Math.floor,Ee=se(te*b.width),le=se(te*b.height);x===void 0&&(x=g(Ee,le));const j=V?g(Ee,le):x;return j.width=Ee,j.height=le,j.getContext("2d").drawImage(b,0,0,Ee,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+Ee+"x"+le+")."),j}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function y(b){return id(b.width)&&id(b.height)}function M(b){return a?!1:b.wrapS!==Bn||b.wrapT!==Bn||b.minFilter!==qt&&b.minFilter!==Mn}function C(b,S){return b.generateMipmaps&&S&&b.minFilter!==qt&&b.minFilter!==Mn}function E(b){t.generateMipmap(b)}function D(b,S,V,oe,te=!1){if(a===!1)return S;if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let se=S;return S===t.RED&&(V===t.FLOAT&&(se=t.R32F),V===t.HALF_FLOAT&&(se=t.R16F),V===t.UNSIGNED_BYTE&&(se=t.R8)),S===t.RED_INTEGER&&(V===t.UNSIGNED_BYTE&&(se=t.R8UI),V===t.UNSIGNED_SHORT&&(se=t.R16UI),V===t.UNSIGNED_INT&&(se=t.R32UI),V===t.BYTE&&(se=t.R8I),V===t.SHORT&&(se=t.R16I),V===t.INT&&(se=t.R32I)),S===t.RG&&(V===t.FLOAT&&(se=t.RG32F),V===t.HALF_FLOAT&&(se=t.RG16F),V===t.UNSIGNED_BYTE&&(se=t.RG8)),S===t.RGBA&&(V===t.FLOAT&&(se=t.RGBA32F),V===t.HALF_FLOAT&&(se=t.RGBA16F),V===t.UNSIGNED_BYTE&&(se=oe===Ue&&te===!1?t.SRGB8_ALPHA8:t.RGBA8),V===t.UNSIGNED_SHORT_4_4_4_4&&(se=t.RGBA4),V===t.UNSIGNED_SHORT_5_5_5_1&&(se=t.RGB5_A1)),(se===t.R16F||se===t.R32F||se===t.RG16F||se===t.RG32F||se===t.RGBA16F||se===t.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function T(b,S,V){return C(b,V)===!0||b.isFramebufferTexture&&b.minFilter!==qt&&b.minFilter!==Mn?Math.log2(Math.max(S.width,S.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?S.mipmaps.length:1}function A(b){return b===qt||b===im||b===du?t.NEAREST:t.LINEAR}function Z(b){const S=b.target;S.removeEventListener("dispose",Z),H(S),S.isVideoTexture&&_.delete(S)}function ee(b){const S=b.target;S.removeEventListener("dispose",ee),X(S)}function H(b){const S=i.get(b);if(S.__webglInit===void 0)return;const V=b.source,oe=p.get(V);if(oe){const te=oe[S.__cacheKey];te.usedTimes--,te.usedTimes===0&&$(b),Object.keys(oe).length===0&&p.delete(V)}i.remove(b)}function $(b){const S=i.get(b);t.deleteTexture(S.__webglTexture);const V=b.source,oe=p.get(V);delete oe[S.__cacheKey],s.memory.textures--}function X(b){const S=b.texture,V=i.get(b),oe=i.get(S);if(oe.__webglTexture!==void 0&&(t.deleteTexture(oe.__webglTexture),s.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(V.__webglFramebuffer[te]))for(let se=0;se<V.__webglFramebuffer[te].length;se++)t.deleteFramebuffer(V.__webglFramebuffer[te][se]);else t.deleteFramebuffer(V.__webglFramebuffer[te]);V.__webglDepthbuffer&&t.deleteRenderbuffer(V.__webglDepthbuffer[te])}else{if(Array.isArray(V.__webglFramebuffer))for(let te=0;te<V.__webglFramebuffer.length;te++)t.deleteFramebuffer(V.__webglFramebuffer[te]);else t.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&t.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&t.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let te=0;te<V.__webglColorRenderbuffer.length;te++)V.__webglColorRenderbuffer[te]&&t.deleteRenderbuffer(V.__webglColorRenderbuffer[te]);V.__webglDepthRenderbuffer&&t.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let te=0,se=S.length;te<se;te++){const Ee=i.get(S[te]);Ee.__webglTexture&&(t.deleteTexture(Ee.__webglTexture),s.memory.textures--),i.remove(S[te])}i.remove(S),i.remove(b)}let J=0;function Y(){J=0}function L(){const b=J;return b>=l&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+l),J+=1,b}function W(b){const S=[];return S.push(b.wrapS),S.push(b.wrapT),S.push(b.wrapR||0),S.push(b.magFilter),S.push(b.minFilter),S.push(b.anisotropy),S.push(b.internalFormat),S.push(b.format),S.push(b.type),S.push(b.generateMipmaps),S.push(b.premultiplyAlpha),S.push(b.flipY),S.push(b.unpackAlignment),S.push(b.colorSpace),S.join()}function N(b,S){const V=i.get(b);if(b.isVideoTexture&&Et(b),b.isRenderTargetTexture===!1&&b.version>0&&V.__version!==b.version){const oe=b.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ge(V,b,S);return}}n.bindTexture(t.TEXTURE_2D,V.__webglTexture,t.TEXTURE0+S)}function U(b,S){const V=i.get(b);if(b.version>0&&V.__version!==b.version){Ge(V,b,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,V.__webglTexture,t.TEXTURE0+S)}function z(b,S){const V=i.get(b);if(b.version>0&&V.__version!==b.version){Ge(V,b,S);return}n.bindTexture(t.TEXTURE_3D,V.__webglTexture,t.TEXTURE0+S)}function ce(b,S){const V=i.get(b);if(b.version>0&&V.__version!==b.version){Qe(V,b,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture,t.TEXTURE0+S)}const re={[ed]:t.REPEAT,[Bn]:t.CLAMP_TO_EDGE,[td]:t.MIRRORED_REPEAT},fe={[qt]:t.NEAREST,[im]:t.NEAREST_MIPMAP_NEAREST,[du]:t.NEAREST_MIPMAP_LINEAR,[Mn]:t.LINEAR,[x1]:t.LINEAR_MIPMAP_NEAREST,[sa]:t.LINEAR_MIPMAP_LINEAR},xe={[I1]:t.NEVER,[H1]:t.ALWAYS,[N1]:t.LESS,[F1]:t.LEQUAL,[O1]:t.EQUAL,[B1]:t.GEQUAL,[k1]:t.GREATER,[z1]:t.NOTEQUAL};function Se(b,S,V){if(V?(t.texParameteri(b,t.TEXTURE_WRAP_S,re[S.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,re[S.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,re[S.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,fe[S.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,fe[S.minFilter])):(t.texParameteri(b,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(b,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(S.wrapS!==Bn||S.wrapT!==Bn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(b,t.TEXTURE_MAG_FILTER,A(S.magFilter)),t.texParameteri(b,t.TEXTURE_MIN_FILTER,A(S.minFilter)),S.minFilter!==qt&&S.minFilter!==Mn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,xe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const oe=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===qt||S.minFilter!==du&&S.minFilter!==sa||S.type===Gi&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===aa&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(t.texParameterf(b,oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function Me(b,S){let V=!1;b.__webglInit===void 0&&(b.__webglInit=!0,S.addEventListener("dispose",Z));const oe=S.source;let te=p.get(oe);te===void 0&&(te={},p.set(oe,te));const se=W(S);if(se!==b.__cacheKey){te[se]===void 0&&(te[se]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,V=!0),te[se].usedTimes++;const Ee=te[b.__cacheKey];Ee!==void 0&&(te[b.__cacheKey].usedTimes--,Ee.usedTimes===0&&$(S)),b.__cacheKey=se,b.__webglTexture=te[se].texture}return V}function Ge(b,S,V){let oe=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(oe=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(oe=t.TEXTURE_3D);const te=Me(b,S),se=S.source;n.bindTexture(oe,b.__webglTexture,t.TEXTURE0+V);const Ee=i.get(se);if(se.version!==Ee.__version||te===!0){n.activeTexture(t.TEXTURE0+V),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const le=M(S)&&y(S.image)===!1;let j=v(S.image,le,!1,u);j=Ct(S,j);const R=y(j)||a,Q=o.convert(S.format,S.colorSpace);let ge=o.convert(S.type),ue=D(S.internalFormat,Q,ge,S.colorSpace);Se(oe,S,R);let me;const Pe=S.mipmaps,Xe=a&&S.isVideoTexture!==!0,P=Ee.__version===void 0||te===!0,he=T(S,j,R);if(S.isDepthTexture)ue=t.DEPTH_COMPONENT,a?S.type===Gi?ue=t.DEPTH_COMPONENT32F:S.type===Hi?ue=t.DEPTH_COMPONENT24:S.type===br?ue=t.DEPTH24_STENCIL8:ue=t.DEPTH_COMPONENT16:S.type===Gi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Rr&&ue===t.DEPTH_COMPONENT&&S.type!==ch&&S.type!==Hi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Hi,ge=o.convert(S.type)),S.format===Zo&&ue===t.DEPTH_COMPONENT&&(ue=t.DEPTH_STENCIL,S.type!==br&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=br,ge=o.convert(S.type))),P&&(Xe?n.texStorage2D(t.TEXTURE_2D,1,ue,j.width,j.height):n.texImage2D(t.TEXTURE_2D,0,ue,j.width,j.height,0,Q,ge,null));else if(S.isDataTexture)if(Pe.length>0&&R){Xe&&P&&n.texStorage2D(t.TEXTURE_2D,he,ue,Pe[0].width,Pe[0].height);for(let G=0,ie=Pe.length;G<ie;G++)me=Pe[G],Xe?n.texSubImage2D(t.TEXTURE_2D,G,0,0,me.width,me.height,Q,ge,me.data):n.texImage2D(t.TEXTURE_2D,G,ue,me.width,me.height,0,Q,ge,me.data);S.generateMipmaps=!1}else Xe?(P&&n.texStorage2D(t.TEXTURE_2D,he,ue,j.width,j.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,j.width,j.height,Q,ge,j.data)):n.texImage2D(t.TEXTURE_2D,0,ue,j.width,j.height,0,Q,ge,j.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Xe&&P&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,ue,Pe[0].width,Pe[0].height,j.depth);for(let G=0,ie=Pe.length;G<ie;G++)me=Pe[G],S.format!==Hn?Q!==null?Xe?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,G,0,0,0,me.width,me.height,j.depth,Q,me.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,G,ue,me.width,me.height,j.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?n.texSubImage3D(t.TEXTURE_2D_ARRAY,G,0,0,0,me.width,me.height,j.depth,Q,ge,me.data):n.texImage3D(t.TEXTURE_2D_ARRAY,G,ue,me.width,me.height,j.depth,0,Q,ge,me.data)}else{Xe&&P&&n.texStorage2D(t.TEXTURE_2D,he,ue,Pe[0].width,Pe[0].height);for(let G=0,ie=Pe.length;G<ie;G++)me=Pe[G],S.format!==Hn?Q!==null?Xe?n.compressedTexSubImage2D(t.TEXTURE_2D,G,0,0,me.width,me.height,Q,me.data):n.compressedTexImage2D(t.TEXTURE_2D,G,ue,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?n.texSubImage2D(t.TEXTURE_2D,G,0,0,me.width,me.height,Q,ge,me.data):n.texImage2D(t.TEXTURE_2D,G,ue,me.width,me.height,0,Q,ge,me.data)}else if(S.isDataArrayTexture)Xe?(P&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,ue,j.width,j.height,j.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,Q,ge,j.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,ue,j.width,j.height,j.depth,0,Q,ge,j.data);else if(S.isData3DTexture)Xe?(P&&n.texStorage3D(t.TEXTURE_3D,he,ue,j.width,j.height,j.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,Q,ge,j.data)):n.texImage3D(t.TEXTURE_3D,0,ue,j.width,j.height,j.depth,0,Q,ge,j.data);else if(S.isFramebufferTexture){if(P)if(Xe)n.texStorage2D(t.TEXTURE_2D,he,ue,j.width,j.height);else{let G=j.width,ie=j.height;for(let pe=0;pe<he;pe++)n.texImage2D(t.TEXTURE_2D,pe,ue,G,ie,0,Q,ge,null),G>>=1,ie>>=1}}else if(Pe.length>0&&R){Xe&&P&&n.texStorage2D(t.TEXTURE_2D,he,ue,Pe[0].width,Pe[0].height);for(let G=0,ie=Pe.length;G<ie;G++)me=Pe[G],Xe?n.texSubImage2D(t.TEXTURE_2D,G,0,0,Q,ge,me):n.texImage2D(t.TEXTURE_2D,G,ue,Q,ge,me);S.generateMipmaps=!1}else Xe?(P&&n.texStorage2D(t.TEXTURE_2D,he,ue,j.width,j.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Q,ge,j)):n.texImage2D(t.TEXTURE_2D,0,ue,Q,ge,j);C(S,R)&&E(oe),Ee.__version=se.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function Qe(b,S,V){if(S.image.length!==6)return;const oe=Me(b,S),te=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+V);const se=i.get(te);if(te.version!==se.__version||oe===!0){n.activeTexture(t.TEXTURE0+V),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const Ee=S.isCompressedTexture||S.image[0].isCompressedTexture,le=S.image[0]&&S.image[0].isDataTexture,j=[];for(let G=0;G<6;G++)!Ee&&!le?j[G]=v(S.image[G],!1,!0,c):j[G]=le?S.image[G].image:S.image[G],j[G]=Ct(S,j[G]);const R=j[0],Q=y(R)||a,ge=o.convert(S.format,S.colorSpace),ue=o.convert(S.type),me=D(S.internalFormat,ge,ue,S.colorSpace),Pe=a&&S.isVideoTexture!==!0,Xe=se.__version===void 0||oe===!0;let P=T(S,R,Q);Se(t.TEXTURE_CUBE_MAP,S,Q);let he;if(Ee){Pe&&Xe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,P,me,R.width,R.height);for(let G=0;G<6;G++){he=j[G].mipmaps;for(let ie=0;ie<he.length;ie++){const pe=he[ie];S.format!==Hn?ge!==null?Pe?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,ie,0,0,pe.width,pe.height,ge,pe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,ie,me,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,ie,0,0,pe.width,pe.height,ge,ue,pe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,ie,me,pe.width,pe.height,0,ge,ue,pe.data)}}}else{he=S.mipmaps,Pe&&Xe&&(he.length>0&&P++,n.texStorage2D(t.TEXTURE_CUBE_MAP,P,me,j[0].width,j[0].height));for(let G=0;G<6;G++)if(le){Pe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,j[G].width,j[G].height,ge,ue,j[G].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,me,j[G].width,j[G].height,0,ge,ue,j[G].data);for(let ie=0;ie<he.length;ie++){const ze=he[ie].image[G].image;Pe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,ie+1,0,0,ze.width,ze.height,ge,ue,ze.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,ie+1,me,ze.width,ze.height,0,ge,ue,ze.data)}}else{Pe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,ge,ue,j[G]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,me,ge,ue,j[G]);for(let ie=0;ie<he.length;ie++){const pe=he[ie];Pe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,ie+1,0,0,ge,ue,pe.image[G]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,ie+1,me,ge,ue,pe.image[G])}}}C(S,Q)&&E(t.TEXTURE_CUBE_MAP),se.__version=te.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function Ie(b,S,V,oe,te,se){const Ee=o.convert(V.format,V.colorSpace),le=o.convert(V.type),j=D(V.internalFormat,Ee,le,V.colorSpace);if(!i.get(S).__hasExternalTextures){const Q=Math.max(1,S.width>>se),ge=Math.max(1,S.height>>se);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,se,j,Q,ge,S.depth,0,Ee,le,null):n.texImage2D(te,se,j,Q,ge,0,Ee,le,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),$e(S)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,oe,te,i.get(V).__webglTexture,0,De(S)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,oe,te,i.get(V).__webglTexture,se),n.bindFramebuffer(t.FRAMEBUFFER,null)}function F(b,S,V){if(t.bindRenderbuffer(t.RENDERBUFFER,b),S.depthBuffer&&!S.stencilBuffer){let oe=t.DEPTH_COMPONENT16;if(V||$e(S)){const te=S.depthTexture;te&&te.isDepthTexture&&(te.type===Gi?oe=t.DEPTH_COMPONENT32F:te.type===Hi&&(oe=t.DEPTH_COMPONENT24));const se=De(S);$e(S)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,se,oe,S.width,S.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,se,oe,S.width,S.height)}else t.renderbufferStorage(t.RENDERBUFFER,oe,S.width,S.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,b)}else if(S.depthBuffer&&S.stencilBuffer){const oe=De(S);V&&$e(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,oe,t.DEPTH24_STENCIL8,S.width,S.height):$e(S)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,oe,t.DEPTH24_STENCIL8,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,b)}else{const oe=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let te=0;te<oe.length;te++){const se=oe[te],Ee=o.convert(se.format,se.colorSpace),le=o.convert(se.type),j=D(se.internalFormat,Ee,le,se.colorSpace),R=De(S);V&&$e(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,R,j,S.width,S.height):$e(S)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,R,j,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,j,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function St(b,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),N(S.depthTexture,0);const oe=i.get(S.depthTexture).__webglTexture,te=De(S);if(S.depthTexture.format===Rr)$e(S)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,oe,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,oe,0);else if(S.depthTexture.format===Zo)$e(S)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,oe,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function Te(b){const S=i.get(b),V=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!S.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");St(S.__webglFramebuffer,b)}else if(V){S.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[oe]),S.__webglDepthbuffer[oe]=t.createRenderbuffer(),F(S.__webglDepthbuffer[oe],b,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=t.createRenderbuffer(),F(S.__webglDepthbuffer,b,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Le(b,S,V){const oe=i.get(b);S!==void 0&&Ie(oe.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),V!==void 0&&Te(b)}function Ce(b){const S=b.texture,V=i.get(b),oe=i.get(S);b.addEventListener("dispose",ee),b.isWebGLMultipleRenderTargets!==!0&&(oe.__webglTexture===void 0&&(oe.__webglTexture=t.createTexture()),oe.__version=S.version,s.memory.textures++);const te=b.isWebGLCubeRenderTarget===!0,se=b.isWebGLMultipleRenderTargets===!0,Ee=y(b)||a;if(te){V.__webglFramebuffer=[];for(let le=0;le<6;le++)if(a&&S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer[le]=[];for(let j=0;j<S.mipmaps.length;j++)V.__webglFramebuffer[le][j]=t.createFramebuffer()}else V.__webglFramebuffer[le]=t.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer=[];for(let le=0;le<S.mipmaps.length;le++)V.__webglFramebuffer[le]=t.createFramebuffer()}else V.__webglFramebuffer=t.createFramebuffer();if(se)if(r.drawBuffers){const le=b.texture;for(let j=0,R=le.length;j<R;j++){const Q=i.get(le[j]);Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&$e(b)===!1){const le=se?S:[S];V.__webglMultisampledFramebuffer=t.createFramebuffer(),V.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let j=0;j<le.length;j++){const R=le[j];V.__webglColorRenderbuffer[j]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,V.__webglColorRenderbuffer[j]);const Q=o.convert(R.format,R.colorSpace),ge=o.convert(R.type),ue=D(R.internalFormat,Q,ge,R.colorSpace,b.isXRRenderTarget===!0),me=De(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,me,ue,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+j,t.RENDERBUFFER,V.__webglColorRenderbuffer[j])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(V.__webglDepthRenderbuffer=t.createRenderbuffer(),F(V.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(te){n.bindTexture(t.TEXTURE_CUBE_MAP,oe.__webglTexture),Se(t.TEXTURE_CUBE_MAP,S,Ee);for(let le=0;le<6;le++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let j=0;j<S.mipmaps.length;j++)Ie(V.__webglFramebuffer[le][j],b,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,j);else Ie(V.__webglFramebuffer[le],b,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);C(S,Ee)&&E(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(se){const le=b.texture;for(let j=0,R=le.length;j<R;j++){const Q=le[j],ge=i.get(Q);n.bindTexture(t.TEXTURE_2D,ge.__webglTexture),Se(t.TEXTURE_2D,Q,Ee),Ie(V.__webglFramebuffer,b,Q,t.COLOR_ATTACHMENT0+j,t.TEXTURE_2D,0),C(Q,Ee)&&E(t.TEXTURE_2D)}n.unbindTexture()}else{let le=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?le=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(le,oe.__webglTexture),Se(le,S,Ee),a&&S.mipmaps&&S.mipmaps.length>0)for(let j=0;j<S.mipmaps.length;j++)Ie(V.__webglFramebuffer[j],b,S,t.COLOR_ATTACHMENT0,le,j);else Ie(V.__webglFramebuffer,b,S,t.COLOR_ATTACHMENT0,le,0);C(S,Ee)&&E(le),n.unbindTexture()}b.depthBuffer&&Te(b)}function et(b){const S=y(b)||a,V=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let oe=0,te=V.length;oe<te;oe++){const se=V[oe];if(C(se,S)){const Ee=b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,le=i.get(se).__webglTexture;n.bindTexture(Ee,le),E(Ee),n.unbindTexture()}}}function ke(b){if(a&&b.samples>0&&$e(b)===!1){const S=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],V=b.width,oe=b.height;let te=t.COLOR_BUFFER_BIT;const se=[],Ee=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=i.get(b),j=b.isWebGLMultipleRenderTargets===!0;if(j)for(let R=0;R<S.length;R++)n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+R,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+R,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let R=0;R<S.length;R++){se.push(t.COLOR_ATTACHMENT0+R),b.depthBuffer&&se.push(Ee);const Q=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(Q===!1&&(b.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),j&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,le.__webglColorRenderbuffer[R]),Q===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Ee]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Ee])),j){const ge=i.get(S[R]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ge,0)}t.blitFramebuffer(0,0,V,oe,0,0,V,oe,te,t.NEAREST),m&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,se)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),j)for(let R=0;R<S.length;R++){n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+R,t.RENDERBUFFER,le.__webglColorRenderbuffer[R]);const Q=i.get(S[R]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+R,t.TEXTURE_2D,Q,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function De(b){return Math.min(d,b.samples)}function $e(b){const S=i.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Et(b){const S=s.render.frame;_.get(b)!==S&&(_.set(b,S),b.update())}function Ct(b,S){const V=b.colorSpace,oe=b.format,te=b.type;return b.isCompressedTexture===!0||b.format===nd||V!==ni&&V!==Lr&&(V===Ue?a===!1?e.has("EXT_sRGB")===!0&&oe===Hn?(b.format=nd,b.minFilter=Mn,b.generateMipmaps=!1):S=A_.sRGBToLinear(S):(oe!==Hn||te!==er)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),S}this.allocateTextureUnit=L,this.resetTextureUnits=Y,this.setTexture2D=N,this.setTexture2DArray=U,this.setTexture3D=z,this.setTextureCube=ce,this.rebindTextures=Le,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=$e}function nR(t,e,n){const i=n.isWebGL2;function r(o,s=Lr){let a;if(o===er)return t.UNSIGNED_BYTE;if(o===__)return t.UNSIGNED_SHORT_4_4_4_4;if(o===x_)return t.UNSIGNED_SHORT_5_5_5_1;if(o===y1)return t.BYTE;if(o===S1)return t.SHORT;if(o===ch)return t.UNSIGNED_SHORT;if(o===v_)return t.INT;if(o===Hi)return t.UNSIGNED_INT;if(o===Gi)return t.FLOAT;if(o===aa)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(o===E1)return t.ALPHA;if(o===Hn)return t.RGBA;if(o===M1)return t.LUMINANCE;if(o===T1)return t.LUMINANCE_ALPHA;if(o===Rr)return t.DEPTH_COMPONENT;if(o===Zo)return t.DEPTH_STENCIL;if(o===nd)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(o===w1)return t.RED;if(o===y_)return t.RED_INTEGER;if(o===A1)return t.RG;if(o===S_)return t.RG_INTEGER;if(o===E_)return t.RGBA_INTEGER;if(o===hu||o===pu||o===mu||o===gu)if(s===Ue)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(o===hu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===pu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===mu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===gu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(o===hu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===pu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===mu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===gu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===rm||o===om||o===sm||o===am)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(o===rm)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===om)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===sm)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===am)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===C1)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===lm||o===cm)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(o===lm)return s===Ue?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(o===cm)return s===Ue?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===um||o===fm||o===dm||o===hm||o===pm||o===mm||o===gm||o===vm||o===_m||o===xm||o===ym||o===Sm||o===Em||o===Mm)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(o===um)return s===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===fm)return s===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===dm)return s===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===hm)return s===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===pm)return s===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===mm)return s===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===gm)return s===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===vm)return s===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===_m)return s===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===xm)return s===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===ym)return s===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===Sm)return s===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===Em)return s===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===Mm)return s===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===vu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(o===vu)return s===Ue?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(o===b1||o===Tm||o===wm||o===Am)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(o===vu)return a.COMPRESSED_RED_RGTC1_EXT;if(o===Tm)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===wm)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===Am)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===br?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[o]!==void 0?t[o]:null}return{convert:r}}class iR extends Tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ol extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rR={type:"move"};class zu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ol,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ol,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ol,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const x of e.hand.values()){const p=n.getJointPose(x,i),f=this._getHandJoint(c,x);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),m=.02,_=.005;c.inputState.pinching&&h>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(rR)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ol;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class oR extends an{constructor(e,n,i,r,o,s,a,l,c,u){if(u=u!==void 0?u:Rr,u!==Rr&&u!==Zo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Rr&&(i=Hi),i===void 0&&u===Zo&&(i=br),super(null,r,o,s,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:qt,this.minFilter=l!==void 0?l:qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class sR extends Wr{constructor(e,n){super();const i=this;let r=null,o=1,s=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,m=null,_=null;const x=n.getContextAttributes();let p=null,f=null;const g=[],v=[],y=new Tn;y.layers.enable(1),y.viewport=new Ut;const M=new Tn;M.layers.enable(2),M.viewport=new Ut;const C=[y,M],E=new iR;E.layers.enable(1),E.layers.enable(2);let D=null,T=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let z=g[U];return z===void 0&&(z=new zu,g[U]=z),z.getTargetRaySpace()},this.getControllerGrip=function(U){let z=g[U];return z===void 0&&(z=new zu,g[U]=z),z.getGripSpace()},this.getHand=function(U){let z=g[U];return z===void 0&&(z=new zu,g[U]=z),z.getHandSpace()};function A(U){const z=v.indexOf(U.inputSource);if(z===-1)return;const ce=g[z];ce!==void 0&&(ce.update(U.inputSource,U.frame,c||s),ce.dispatchEvent({type:U.type,data:U.inputSource}))}function Z(){r.removeEventListener("select",A),r.removeEventListener("selectstart",A),r.removeEventListener("selectend",A),r.removeEventListener("squeeze",A),r.removeEventListener("squeezestart",A),r.removeEventListener("squeezeend",A),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",ee);for(let U=0;U<g.length;U++){const z=v[U];z!==null&&(v[U]=null,g[U].disconnect(z))}D=null,T=null,e.setRenderTarget(p),m=null,h=null,d=null,r=null,f=null,N.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){o=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){a=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(U){c=U},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(U){if(r=U,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",A),r.addEventListener("selectstart",A),r.addEventListener("selectend",A),r.addEventListener("squeeze",A),r.addEventListener("squeezestart",A),r.addEventListener("squeezeend",A),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",ee),x.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const z={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(r,n,z),r.updateRenderState({baseLayer:m}),f=new kr(m.framebufferWidth,m.framebufferHeight,{format:Hn,type:er,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let z=null,ce=null,re=null;x.depth&&(re=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,z=x.stencil?Zo:Rr,ce=x.stencil?br:Hi);const fe={colorFormat:n.RGBA8,depthFormat:re,scaleFactor:o};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(fe),r.updateRenderState({layers:[h]}),f=new kr(h.textureWidth,h.textureHeight,{format:Hn,type:er,depthTexture:new oR(h.textureWidth,h.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,z),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const xe=e.properties.get(f);xe.__ignoreDepthValues=h.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(a),N.setContext(r),N.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function ee(U){for(let z=0;z<U.removed.length;z++){const ce=U.removed[z],re=v.indexOf(ce);re>=0&&(v[re]=null,g[re].disconnect(ce))}for(let z=0;z<U.added.length;z++){const ce=U.added[z];let re=v.indexOf(ce);if(re===-1){for(let xe=0;xe<g.length;xe++)if(xe>=v.length){v.push(ce),re=xe;break}else if(v[xe]===null){v[xe]=ce,re=xe;break}if(re===-1)break}const fe=g[re];fe&&fe.connect(ce)}}const H=new B,$=new B;function X(U,z,ce){H.setFromMatrixPosition(z.matrixWorld),$.setFromMatrixPosition(ce.matrixWorld);const re=H.distanceTo($),fe=z.projectionMatrix.elements,xe=ce.projectionMatrix.elements,Se=fe[14]/(fe[10]-1),Me=fe[14]/(fe[10]+1),Ge=(fe[9]+1)/fe[5],Qe=(fe[9]-1)/fe[5],Ie=(fe[8]-1)/fe[0],F=(xe[8]+1)/xe[0],St=Se*Ie,Te=Se*F,Le=re/(-Ie+F),Ce=Le*-Ie;z.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(Ce),U.translateZ(Le),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();const et=Se+Le,ke=Me+Le,De=St-Ce,$e=Te+(re-Ce),Et=Ge*Me/ke*et,Ct=Qe*Me/ke*et;U.projectionMatrix.makePerspective(De,$e,Et,Ct,et,ke),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}function J(U,z){z===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(z.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(r===null)return;E.near=M.near=y.near=U.near,E.far=M.far=y.far=U.far,(D!==E.near||T!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),D=E.near,T=E.far);const z=U.parent,ce=E.cameras;J(E,z);for(let re=0;re<ce.length;re++)J(ce[re],z);ce.length===2?X(E,y,M):E.projectionMatrix.copy(y.projectionMatrix),Y(U,E,z)};function Y(U,z,ce){ce===null?U.matrix.copy(z.matrixWorld):(U.matrix.copy(ce.matrixWorld),U.matrix.invert(),U.matrix.multiply(z.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0);const re=U.children;for(let fe=0,xe=re.length;fe<xe;fe++)re[fe].updateMatrixWorld(!0);U.projectionMatrix.copy(z.projectionMatrix),U.projectionMatrixInverse.copy(z.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=la*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(U){l=U,h!==null&&(h.fixedFoveation=U),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=U)};let L=null;function W(U,z){if(u=z.getViewerPose(c||s),_=z,u!==null){const ce=u.views;m!==null&&(e.setRenderTargetFramebuffer(f,m.framebuffer),e.setRenderTarget(f));let re=!1;ce.length!==E.cameras.length&&(E.cameras.length=0,re=!0);for(let fe=0;fe<ce.length;fe++){const xe=ce[fe];let Se=null;if(m!==null)Se=m.getViewport(xe);else{const Ge=d.getViewSubImage(h,xe);Se=Ge.viewport,fe===0&&(e.setRenderTargetTextures(f,Ge.colorTexture,h.ignoreDepthValues?void 0:Ge.depthStencilTexture),e.setRenderTarget(f))}let Me=C[fe];Me===void 0&&(Me=new Tn,Me.layers.enable(fe),Me.viewport=new Ut,C[fe]=Me),Me.matrix.fromArray(xe.transform.matrix),Me.matrix.decompose(Me.position,Me.quaternion,Me.scale),Me.projectionMatrix.fromArray(xe.projectionMatrix),Me.projectionMatrixInverse.copy(Me.projectionMatrix).invert(),Me.viewport.set(Se.x,Se.y,Se.width,Se.height),fe===0&&(E.matrix.copy(Me.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),re===!0&&E.cameras.push(Me)}}for(let ce=0;ce<g.length;ce++){const re=v[ce],fe=g[ce];re!==null&&fe!==void 0&&fe.update(re,z,c||s)}L&&L(U,z),z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:z}),_=null}const N=new k_;N.setAnimationLoop(W),this.setAnimationLoop=function(U){L=U},this.dispose=function(){}}}function aR(t,e){function n(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,I_(t)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,g,v,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?o(p,f):f.isMeshToonMaterial?(o(p,f),d(p,f)):f.isMeshPhongMaterial?(o(p,f),u(p,f)):f.isMeshStandardMaterial?(o(p,f),h(p,f),f.isMeshPhysicalMaterial&&m(p,f,y)):f.isMeshMatcapMaterial?(o(p,f),_(p,f)):f.isMeshDepthMaterial?o(p,f):f.isMeshDistanceMaterial?(o(p,f),x(p,f)):f.isMeshNormalMaterial?o(p,f):f.isLineBasicMaterial?(s(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?l(p,f,g,v):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function o(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,n(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,n(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===sn&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,n(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===sn&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,n(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,n(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const g=e.get(f).envMap;if(g&&(p.envMap.value=g,p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const v=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*v,n(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,p.aoMapTransform))}function s(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,n(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,g,v){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*g,p.scale.value=v*.5,f.map&&(p.map.value=f.map,n(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,n(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,p.roughnessMapTransform)),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,g){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===sn&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,f){f.matcap&&(p.matcap.value=f.matcap)}function x(p,f){const g=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(g.matrixWorld),p.nearDistance.value=g.shadow.camera.near,p.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function lR(t,e,n,i){let r={},o={},s=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(g,v){const y=v.program;i.uniformBlockBinding(g,y)}function c(g,v){let y=r[g.id];y===void 0&&(_(g),y=u(g),r[g.id]=y,g.addEventListener("dispose",p));const M=v.program;i.updateUBOMapping(g,M);const C=e.render.frame;o[g.id]!==C&&(h(g),o[g.id]=C)}function u(g){const v=d();g.__bindingPointIndex=v;const y=t.createBuffer(),M=g.__size,C=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,M,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,y),y}function d(){for(let g=0;g<a;g++)if(s.indexOf(g)===-1)return s.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const v=r[g.id],y=g.uniforms,M=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let C=0,E=y.length;C<E;C++){const D=y[C];if(m(D,C,M)===!0){const T=D.__offset,A=Array.isArray(D.value)?D.value:[D.value];let Z=0;for(let ee=0;ee<A.length;ee++){const H=A[ee],$=x(H);typeof H=="number"?(D.__data[0]=H,t.bufferSubData(t.UNIFORM_BUFFER,T+Z,D.__data)):H.isMatrix3?(D.__data[0]=H.elements[0],D.__data[1]=H.elements[1],D.__data[2]=H.elements[2],D.__data[3]=H.elements[0],D.__data[4]=H.elements[3],D.__data[5]=H.elements[4],D.__data[6]=H.elements[5],D.__data[7]=H.elements[0],D.__data[8]=H.elements[6],D.__data[9]=H.elements[7],D.__data[10]=H.elements[8],D.__data[11]=H.elements[0]):(H.toArray(D.__data,Z),Z+=$.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,T,D.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(g,v,y){const M=g.value;if(y[v]===void 0){if(typeof M=="number")y[v]=M;else{const C=Array.isArray(M)?M:[M],E=[];for(let D=0;D<C.length;D++)E.push(C[D].clone());y[v]=E}return!0}else if(typeof M=="number"){if(y[v]!==M)return y[v]=M,!0}else{const C=Array.isArray(y[v])?y[v]:[y[v]],E=Array.isArray(M)?M:[M];for(let D=0;D<C.length;D++){const T=C[D];if(T.equals(E[D])===!1)return T.copy(E[D]),!0}}return!1}function _(g){const v=g.uniforms;let y=0;const M=16;let C=0;for(let E=0,D=v.length;E<D;E++){const T=v[E],A={boundary:0,storage:0},Z=Array.isArray(T.value)?T.value:[T.value];for(let ee=0,H=Z.length;ee<H;ee++){const $=Z[ee],X=x($);A.boundary+=X.boundary,A.storage+=X.storage}if(T.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=y,E>0){C=y%M;const ee=M-C;C!==0&&ee-A.boundary<0&&(y+=M-C,T.__offset=y)}y+=A.storage}return C=y%M,C>0&&(y+=M-C),g.__size=y,g.__cache={},this}function x(g){const v={boundary:0,storage:0};return typeof g=="number"?(v.boundary=4,v.storage=4):g.isVector2?(v.boundary=8,v.storage=8):g.isVector3||g.isColor?(v.boundary=16,v.storage=12):g.isVector4?(v.boundary=16,v.storage=16):g.isMatrix3?(v.boundary=48,v.storage=48):g.isMatrix4?(v.boundary=64,v.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),v}function p(g){const v=g.target;v.removeEventListener("dispose",p);const y=s.indexOf(v.__bindingPointIndex);s.splice(y,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete o[v.id]}function f(){for(const g in r)t.deleteBuffer(r[g]);s=[],r={},o={}}return{bind:l,update:c,dispose:f}}function cR(){const t=ca("canvas");return t.style.display="block",t}class V_{constructor(e={}){const{canvas:n=cR(),context:i=null,depth:r=!0,stencil:o=!0,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=s;const m=new Uint32Array(4),_=new Int32Array(4);let x=null,p=null;const f=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Ue,this._useLegacyLights=!1,this.toneMapping=Ji,this.toneMappingExposure=1;const v=this;let y=!1,M=0,C=0,E=null,D=-1,T=null;const A=new Ut,Z=new Ut;let ee=null;const H=new ot(0);let $=0,X=n.width,J=n.height,Y=1,L=null,W=null;const N=new Ut(0,0,X,J),U=new Ut(0,0,X,J);let z=!1;const ce=new F_;let re=!1,fe=!1,xe=null;const Se=new Nt,Me=new He,Ge=new B,Qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ie(){return E===null?Y:1}let F=i;function St(w,O){for(let K=0;K<w.length;K++){const I=w[K],q=n.getContext(I,O);if(q!==null)return q}return null}try{const w={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${lh}`),n.addEventListener("webglcontextlost",he,!1),n.addEventListener("webglcontextrestored",G,!1),n.addEventListener("webglcontextcreationerror",ie,!1),F===null){const O=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&O.shift(),F=St(O,w),F===null)throw St(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Te,Le,Ce,et,ke,De,$e,Et,Ct,b,S,V,oe,te,se,Ee,le,j,R,Q,ge,ue,me,Pe;function Xe(){Te=new xC(F),Le=new dC(F,Te,e),Te.init(Le),ue=new nR(F,Te,Le),Ce=new eR(F,Te,Le),et=new EC(F),ke=new Bb,De=new tR(F,Te,Ce,ke,Le,ue,et),$e=new pC(v),Et=new _C(v),Ct=new LT(F,Le),me=new uC(F,Te,Ct,Le),b=new yC(F,Ct,et,me),S=new AC(F,b,Ct,et),R=new wC(F,Le,De),Ee=new hC(ke),V=new zb(v,$e,Et,Te,Le,me,Ee),oe=new aR(v,ke),te=new Gb,se=new Yb(Te,Le),j=new cC(v,$e,Et,Ce,S,h,l),le=new Jb(v,S,Le),Pe=new lR(F,et,Le,Ce),Q=new fC(F,Te,et,Le),ge=new SC(F,Te,et,Le),et.programs=V.programs,v.capabilities=Le,v.extensions=Te,v.properties=ke,v.renderLists=te,v.shadowMap=le,v.state=Ce,v.info=et}Xe();const P=new sR(v,F);this.xr=P,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const w=Te.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Te.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(w){w!==void 0&&(Y=w,this.setSize(X,J,!1))},this.getSize=function(w){return w.set(X,J)},this.setSize=function(w,O,K=!0){if(P.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=w,J=O,n.width=Math.floor(w*Y),n.height=Math.floor(O*Y),K===!0&&(n.style.width=w+"px",n.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(X*Y,J*Y).floor()},this.setDrawingBufferSize=function(w,O,K){X=w,J=O,Y=K,n.width=Math.floor(w*K),n.height=Math.floor(O*K),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(A)},this.getViewport=function(w){return w.copy(N)},this.setViewport=function(w,O,K,I){w.isVector4?N.set(w.x,w.y,w.z,w.w):N.set(w,O,K,I),Ce.viewport(A.copy(N).multiplyScalar(Y).floor())},this.getScissor=function(w){return w.copy(U)},this.setScissor=function(w,O,K,I){w.isVector4?U.set(w.x,w.y,w.z,w.w):U.set(w,O,K,I),Ce.scissor(Z.copy(U).multiplyScalar(Y).floor())},this.getScissorTest=function(){return z},this.setScissorTest=function(w){Ce.setScissorTest(z=w)},this.setOpaqueSort=function(w){L=w},this.setTransparentSort=function(w){W=w},this.getClearColor=function(w){return w.copy(j.getClearColor())},this.setClearColor=function(){j.setClearColor.apply(j,arguments)},this.getClearAlpha=function(){return j.getClearAlpha()},this.setClearAlpha=function(){j.setClearAlpha.apply(j,arguments)},this.clear=function(w=!0,O=!0,K=!0){let I=0;if(w){let q=!1;if(E!==null){const ye=E.texture.format;q=ye===E_||ye===S_||ye===y_}if(q){const ye=E.texture.type,we=ye===er||ye===Hi||ye===ch||ye===br||ye===__||ye===x_,be=j.getClearColor(),Re=j.getClearAlpha(),Ve=be.r,Ae=be.g,Ne=be.b;we?(m[0]=Ve,m[1]=Ae,m[2]=Ne,m[3]=Re,F.clearBufferuiv(F.COLOR,0,m)):(_[0]=Ve,_[1]=Ae,_[2]=Ne,_[3]=Re,F.clearBufferiv(F.COLOR,0,_))}else I|=F.COLOR_BUFFER_BIT}O&&(I|=F.DEPTH_BUFFER_BIT),K&&(I|=F.STENCIL_BUFFER_BIT),F.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",he,!1),n.removeEventListener("webglcontextrestored",G,!1),n.removeEventListener("webglcontextcreationerror",ie,!1),te.dispose(),se.dispose(),ke.dispose(),$e.dispose(),Et.dispose(),S.dispose(),me.dispose(),Pe.dispose(),V.dispose(),P.dispose(),P.removeEventListener("sessionstart",nt),P.removeEventListener("sessionend",$n),xe&&(xe.dispose(),xe=null),Wt.stop()};function he(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function G(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const w=et.autoReset,O=le.enabled,K=le.autoUpdate,I=le.needsUpdate,q=le.type;Xe(),et.autoReset=w,le.enabled=O,le.autoUpdate=K,le.needsUpdate=I,le.type=q}function ie(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function pe(w){const O=w.target;O.removeEventListener("dispose",pe),ze(O)}function ze(w){Ke(w),ke.remove(w)}function Ke(w){const O=ke.get(w).programs;O!==void 0&&(O.forEach(function(K){V.releaseProgram(K)}),w.isShaderMaterial&&V.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,K,I,q,ye){O===null&&(O=Qe);const we=q.isMesh&&q.matrixWorld.determinant()<0,be=K_(w,O,K,I,q);Ce.setMaterial(I,we);let Re=K.index,Ve=1;if(I.wireframe===!0){if(Re=b.getWireframeAttribute(K),Re===void 0)return;Ve=2}const Ae=K.drawRange,Ne=K.attributes.position;let ft=Ae.start*Ve,ht=(Ae.start+Ae.count)*Ve;ye!==null&&(ft=Math.max(ft,ye.start*Ve),ht=Math.min(ht,(ye.start+ye.count)*Ve)),Re!==null?(ft=Math.max(ft,0),ht=Math.min(ht,Re.count)):Ne!=null&&(ft=Math.max(ft,0),ht=Math.min(ht,Ne.count));const xn=ht-ft;if(xn<0||xn===1/0)return;me.setup(q,I,be,K,Re);let ii,mt=Q;if(Re!==null&&(ii=Ct.get(Re),mt=ge,mt.setIndex(ii)),q.isMesh)I.wireframe===!0?(Ce.setLineWidth(I.wireframeLinewidth*Ie()),mt.setMode(F.LINES)):mt.setMode(F.TRIANGLES);else if(q.isLine){let We=I.linewidth;We===void 0&&(We=1),Ce.setLineWidth(We*Ie()),q.isLineSegments?mt.setMode(F.LINES):q.isLineLoop?mt.setMode(F.LINE_LOOP):mt.setMode(F.LINE_STRIP)}else q.isPoints?mt.setMode(F.POINTS):q.isSprite&&mt.setMode(F.TRIANGLES);if(q.isInstancedMesh)mt.renderInstances(ft,xn,q.count);else if(K.isInstancedBufferGeometry){const We=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Pc=Math.min(K.instanceCount,We);mt.renderInstances(ft,xn,Pc)}else mt.render(ft,xn)},this.compile=function(w,O){function K(I,q,ye){I.transparent===!0&&I.side===pi&&I.forceSinglePass===!1?(I.side=sn,I.needsUpdate=!0,ya(I,q,ye),I.side=rr,I.needsUpdate=!0,ya(I,q,ye),I.side=pi):ya(I,q,ye)}p=se.get(w),p.init(),g.push(p),w.traverseVisible(function(I){I.isLight&&I.layers.test(O.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),p.setupLights(v._useLegacyLights),w.traverse(function(I){const q=I.material;if(q)if(Array.isArray(q))for(let ye=0;ye<q.length;ye++){const we=q[ye];K(we,w,I)}else K(q,w,I)}),g.pop(),p=null};let tt=null;function wi(w){tt&&tt(w)}function nt(){Wt.stop()}function $n(){Wt.start()}const Wt=new k_;Wt.setAnimationLoop(wi),typeof self<"u"&&Wt.setContext(self),this.setAnimationLoop=function(w){tt=w,P.setAnimationLoop(w),w===null?Wt.stop():Wt.start()},P.addEventListener("sessionstart",nt),P.addEventListener("sessionend",$n),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),P.enabled===!0&&P.isPresenting===!0&&(P.cameraAutoUpdate===!0&&P.updateCamera(O),O=P.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,O,E),p=se.get(w,g.length),p.init(),g.push(p),Se.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),ce.setFromProjectionMatrix(Se),fe=this.localClippingEnabled,re=Ee.init(this.clippingPlanes,fe),x=te.get(w,f.length),x.init(),f.push(x),mh(w,O,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(L,W),this.info.render.frame++,re===!0&&Ee.beginShadows();const K=p.state.shadowsArray;if(le.render(K,w,O),re===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),j.render(x,w),p.setupLights(v._useLegacyLights),O.isArrayCamera){const I=O.cameras;for(let q=0,ye=I.length;q<ye;q++){const we=I[q];gh(x,w,we,we.viewport)}}else gh(x,w,O);E!==null&&(De.updateMultisampleRenderTarget(E),De.updateRenderTargetMipmap(E)),w.isScene===!0&&w.onAfterRender(v,w,O),me.resetDefaultState(),D=-1,T=null,g.pop(),g.length>0?p=g[g.length-1]:p=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function mh(w,O,K,I){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)K=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ce.intersectsSprite(w)){I&&Ge.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Se);const we=S.update(w),be=w.material;be.visible&&x.push(w,we,be,K,Ge.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ce.intersectsObject(w))){const we=S.update(w),be=w.material;if(I&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ge.copy(w.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Ge.copy(we.boundingSphere.center)),Ge.applyMatrix4(w.matrixWorld).applyMatrix4(Se)),Array.isArray(be)){const Re=we.groups;for(let Ve=0,Ae=Re.length;Ve<Ae;Ve++){const Ne=Re[Ve],ft=be[Ne.materialIndex];ft&&ft.visible&&x.push(w,we,ft,K,Ge.z,Ne)}}else be.visible&&x.push(w,we,be,K,Ge.z,null)}}const ye=w.children;for(let we=0,be=ye.length;we<be;we++)mh(ye[we],O,K,I)}function gh(w,O,K,I){const q=w.opaque,ye=w.transmissive,we=w.transparent;p.setupLightsView(K),re===!0&&Ee.setGlobalState(v.clippingPlanes,K),ye.length>0&&q_(q,ye,O,K),I&&Ce.viewport(A.copy(I)),q.length>0&&xa(q,O,K),ye.length>0&&xa(ye,O,K),we.length>0&&xa(we,O,K),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function q_(w,O,K,I){const q=Le.isWebGL2;xe===null&&(xe=new kr(1,1,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")?aa:er,minFilter:sa,samples:q?4:0})),v.getDrawingBufferSize(Me),q?xe.setSize(Me.x,Me.y):xe.setSize(nc(Me.x),nc(Me.y));const ye=v.getRenderTarget();v.setRenderTarget(xe),v.getClearColor(H),$=v.getClearAlpha(),$<1&&v.setClearColor(16777215,.5),v.clear();const we=v.toneMapping;v.toneMapping=Ji,xa(w,K,I),De.updateMultisampleRenderTarget(xe),De.updateRenderTargetMipmap(xe);let be=!1;for(let Re=0,Ve=O.length;Re<Ve;Re++){const Ae=O[Re],Ne=Ae.object,ft=Ae.geometry,ht=Ae.material,xn=Ae.group;if(ht.side===pi&&Ne.layers.test(I.layers)){const ii=ht.side;ht.side=sn,ht.needsUpdate=!0,vh(Ne,K,I,ft,ht,xn),ht.side=ii,ht.needsUpdate=!0,be=!0}}be===!0&&(De.updateMultisampleRenderTarget(xe),De.updateRenderTargetMipmap(xe)),v.setRenderTarget(ye),v.setClearColor(H,$),v.toneMapping=we}function xa(w,O,K){const I=O.isScene===!0?O.overrideMaterial:null;for(let q=0,ye=w.length;q<ye;q++){const we=w[q],be=we.object,Re=we.geometry,Ve=I===null?we.material:I,Ae=we.group;be.layers.test(K.layers)&&vh(be,O,K,Re,Ve,Ae)}}function vh(w,O,K,I,q,ye){w.onBeforeRender(v,O,K,I,q,ye),w.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),q.onBeforeRender(v,O,K,I,w,ye),q.transparent===!0&&q.side===pi&&q.forceSinglePass===!1?(q.side=sn,q.needsUpdate=!0,v.renderBufferDirect(K,O,I,q,w,ye),q.side=rr,q.needsUpdate=!0,v.renderBufferDirect(K,O,I,q,w,ye),q.side=pi):v.renderBufferDirect(K,O,I,q,w,ye),w.onAfterRender(v,O,K,I,q,ye)}function ya(w,O,K){O.isScene!==!0&&(O=Qe);const I=ke.get(w),q=p.state.lights,ye=p.state.shadowsArray,we=q.state.version,be=V.getParameters(w,q.state,ye,O,K),Re=V.getProgramCacheKey(be);let Ve=I.programs;I.environment=w.isMeshStandardMaterial?O.environment:null,I.fog=O.fog,I.envMap=(w.isMeshStandardMaterial?Et:$e).get(w.envMap||I.environment),Ve===void 0&&(w.addEventListener("dispose",pe),Ve=new Map,I.programs=Ve);let Ae=Ve.get(Re);if(Ae!==void 0){if(I.currentProgram===Ae&&I.lightsStateVersion===we)return _h(w,be),Ae}else be.uniforms=V.getUniforms(w),w.onBuild(K,be,v),w.onBeforeCompile(be,v),Ae=V.acquireProgram(be,Re),Ve.set(Re,Ae),I.uniforms=be.uniforms;const Ne=I.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ne.clippingPlanes=Ee.uniform),_h(w,be),I.needsLights=Q_(w),I.lightsStateVersion=we,I.needsLights&&(Ne.ambientLightColor.value=q.state.ambient,Ne.lightProbe.value=q.state.probe,Ne.directionalLights.value=q.state.directional,Ne.directionalLightShadows.value=q.state.directionalShadow,Ne.spotLights.value=q.state.spot,Ne.spotLightShadows.value=q.state.spotShadow,Ne.rectAreaLights.value=q.state.rectArea,Ne.ltc_1.value=q.state.rectAreaLTC1,Ne.ltc_2.value=q.state.rectAreaLTC2,Ne.pointLights.value=q.state.point,Ne.pointLightShadows.value=q.state.pointShadow,Ne.hemisphereLights.value=q.state.hemi,Ne.directionalShadowMap.value=q.state.directionalShadowMap,Ne.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ne.spotShadowMap.value=q.state.spotShadowMap,Ne.spotLightMatrix.value=q.state.spotLightMatrix,Ne.spotLightMap.value=q.state.spotLightMap,Ne.pointShadowMap.value=q.state.pointShadowMap,Ne.pointShadowMatrix.value=q.state.pointShadowMatrix);const ft=Ae.getUniforms(),ht=wl.seqWithValue(ft.seq,Ne);return I.currentProgram=Ae,I.uniformsList=ht,Ae}function _h(w,O){const K=ke.get(w);K.outputColorSpace=O.outputColorSpace,K.instancing=O.instancing,K.instancingColor=O.instancingColor,K.skinning=O.skinning,K.morphTargets=O.morphTargets,K.morphNormals=O.morphNormals,K.morphColors=O.morphColors,K.morphTargetsCount=O.morphTargetsCount,K.numClippingPlanes=O.numClippingPlanes,K.numIntersection=O.numClipIntersection,K.vertexAlphas=O.vertexAlphas,K.vertexTangents=O.vertexTangents,K.toneMapping=O.toneMapping}function K_(w,O,K,I,q){O.isScene!==!0&&(O=Qe),De.resetTextureUnits();const ye=O.fog,we=I.isMeshStandardMaterial?O.environment:null,be=E===null?v.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:ni,Re=(I.isMeshStandardMaterial?Et:$e).get(I.envMap||we),Ve=I.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ae=!!K.attributes.tangent&&(!!I.normalMap||I.anisotropy>0),Ne=!!K.morphAttributes.position,ft=!!K.morphAttributes.normal,ht=!!K.morphAttributes.color;let xn=Ji;I.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(xn=v.toneMapping);const ii=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,mt=ii!==void 0?ii.length:0,We=ke.get(I),Pc=p.state.lights;if(re===!0&&(fe===!0||w!==T)){const ln=w===T&&I.id===D;Ee.setState(I,w,ln)}let gt=!1;I.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Pc.state.version||We.outputColorSpace!==be||q.isInstancedMesh&&We.instancing===!1||!q.isInstancedMesh&&We.instancing===!0||q.isSkinnedMesh&&We.skinning===!1||!q.isSkinnedMesh&&We.skinning===!0||q.isInstancedMesh&&We.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&We.instancingColor===!1&&q.instanceColor!==null||We.envMap!==Re||I.fog===!0&&We.fog!==ye||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==Ee.numPlanes||We.numIntersection!==Ee.numIntersection)||We.vertexAlphas!==Ve||We.vertexTangents!==Ae||We.morphTargets!==Ne||We.morphNormals!==ft||We.morphColors!==ht||We.toneMapping!==xn||Le.isWebGL2===!0&&We.morphTargetsCount!==mt)&&(gt=!0):(gt=!0,We.__version=I.version);let cr=We.currentProgram;gt===!0&&(cr=ya(I,O,q));let xh=!1,as=!1,Lc=!1;const jt=cr.getUniforms(),ur=We.uniforms;if(Ce.useProgram(cr.program)&&(xh=!0,as=!0,Lc=!0),I.id!==D&&(D=I.id,as=!0),xh||T!==w){if(jt.setValue(F,"projectionMatrix",w.projectionMatrix),Le.logarithmicDepthBuffer&&jt.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),T!==w&&(T=w,as=!0,Lc=!0),I.isShaderMaterial||I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshStandardMaterial||I.envMap){const ln=jt.map.cameraPosition;ln!==void 0&&ln.setValue(F,Ge.setFromMatrixPosition(w.matrixWorld))}(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&jt.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial||I.isShadowMaterial||q.isSkinnedMesh)&&jt.setValue(F,"viewMatrix",w.matrixWorldInverse)}if(q.isSkinnedMesh){jt.setOptional(F,q,"bindMatrix"),jt.setOptional(F,q,"bindMatrixInverse");const ln=q.skeleton;ln&&(Le.floatVertexTextures?(ln.boneTexture===null&&ln.computeBoneTexture(),jt.setValue(F,"boneTexture",ln.boneTexture,De),jt.setValue(F,"boneTextureSize",ln.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Dc=K.morphAttributes;if((Dc.position!==void 0||Dc.normal!==void 0||Dc.color!==void 0&&Le.isWebGL2===!0)&&R.update(q,K,cr),(as||We.receiveShadow!==q.receiveShadow)&&(We.receiveShadow=q.receiveShadow,jt.setValue(F,"receiveShadow",q.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&(ur.envMap.value=Re,ur.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),as&&(jt.setValue(F,"toneMappingExposure",v.toneMappingExposure),We.needsLights&&Z_(ur,Lc),ye&&I.fog===!0&&oe.refreshFogUniforms(ur,ye),oe.refreshMaterialUniforms(ur,I,Y,J,xe),wl.upload(F,We.uniformsList,ur,De)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(wl.upload(F,We.uniformsList,ur,De),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&jt.setValue(F,"center",q.center),jt.setValue(F,"modelViewMatrix",q.modelViewMatrix),jt.setValue(F,"normalMatrix",q.normalMatrix),jt.setValue(F,"modelMatrix",q.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){const ln=I.uniformsGroups;for(let Uc=0,J_=ln.length;Uc<J_;Uc++)if(Le.isWebGL2){const yh=ln[Uc];Pe.update(yh,cr),Pe.bind(yh,cr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return cr}function Z_(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function Q_(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(w,O,K){ke.get(w.texture).__webglTexture=O,ke.get(w.depthTexture).__webglTexture=K;const I=ke.get(w);I.__hasExternalTextures=!0,I.__hasExternalTextures&&(I.__autoAllocateDepthBuffer=K===void 0,I.__autoAllocateDepthBuffer||Te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),I.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,O){const K=ke.get(w);K.__webglFramebuffer=O,K.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,K=0){E=w,M=O,C=K;let I=!0,q=null,ye=!1,we=!1;if(w){const Re=ke.get(w);Re.__useDefaultFramebuffer!==void 0?(Ce.bindFramebuffer(F.FRAMEBUFFER,null),I=!1):Re.__webglFramebuffer===void 0?De.setupRenderTarget(w):Re.__hasExternalTextures&&De.rebindTextures(w,ke.get(w.texture).__webglTexture,ke.get(w.depthTexture).__webglTexture);const Ve=w.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(we=!0);const Ae=ke.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ae[O])?q=Ae[O][K]:q=Ae[O],ye=!0):Le.isWebGL2&&w.samples>0&&De.useMultisampledRTT(w)===!1?q=ke.get(w).__webglMultisampledFramebuffer:Array.isArray(Ae)?q=Ae[K]:q=Ae,A.copy(w.viewport),Z.copy(w.scissor),ee=w.scissorTest}else A.copy(N).multiplyScalar(Y).floor(),Z.copy(U).multiplyScalar(Y).floor(),ee=z;if(Ce.bindFramebuffer(F.FRAMEBUFFER,q)&&Le.drawBuffers&&I&&Ce.drawBuffers(w,q),Ce.viewport(A),Ce.scissor(Z),Ce.setScissorTest(ee),ye){const Re=ke.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+O,Re.__webglTexture,K)}else if(we){const Re=ke.get(w.texture),Ve=O||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Re.__webglTexture,K||0,Ve)}D=-1},this.readRenderTargetPixels=function(w,O,K,I,q,ye,we){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=ke.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&we!==void 0&&(be=be[we]),be){Ce.bindFramebuffer(F.FRAMEBUFFER,be);try{const Re=w.texture,Ve=Re.format,Ae=Re.type;if(Ve!==Hn&&ue.convert(Ve)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ne=Ae===aa&&(Te.has("EXT_color_buffer_half_float")||Le.isWebGL2&&Te.has("EXT_color_buffer_float"));if(Ae!==er&&ue.convert(Ae)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ae===Gi&&(Le.isWebGL2||Te.has("OES_texture_float")||Te.has("WEBGL_color_buffer_float")))&&!Ne){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-I&&K>=0&&K<=w.height-q&&F.readPixels(O,K,I,q,ue.convert(Ve),ue.convert(Ae),ye)}finally{const Re=E!==null?ke.get(E).__webglFramebuffer:null;Ce.bindFramebuffer(F.FRAMEBUFFER,Re)}}},this.copyFramebufferToTexture=function(w,O,K=0){const I=Math.pow(2,-K),q=Math.floor(O.image.width*I),ye=Math.floor(O.image.height*I);De.setTexture2D(O,0),F.copyTexSubImage2D(F.TEXTURE_2D,K,0,0,w.x,w.y,q,ye),Ce.unbindTexture()},this.copyTextureToTexture=function(w,O,K,I=0){const q=O.image.width,ye=O.image.height,we=ue.convert(K.format),be=ue.convert(K.type);De.setTexture2D(K,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,K.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,K.unpackAlignment),O.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,I,w.x,w.y,q,ye,we,be,O.image.data):O.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,I,w.x,w.y,O.mipmaps[0].width,O.mipmaps[0].height,we,O.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,I,w.x,w.y,we,be,O.image),I===0&&K.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),Ce.unbindTexture()},this.copyTextureToTexture3D=function(w,O,K,I,q=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ye=w.max.x-w.min.x+1,we=w.max.y-w.min.y+1,be=w.max.z-w.min.z+1,Re=ue.convert(I.format),Ve=ue.convert(I.type);let Ae;if(I.isData3DTexture)De.setTexture3D(I,0),Ae=F.TEXTURE_3D;else if(I.isDataArrayTexture)De.setTexture2DArray(I,0),Ae=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,I.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,I.unpackAlignment);const Ne=F.getParameter(F.UNPACK_ROW_LENGTH),ft=F.getParameter(F.UNPACK_IMAGE_HEIGHT),ht=F.getParameter(F.UNPACK_SKIP_PIXELS),xn=F.getParameter(F.UNPACK_SKIP_ROWS),ii=F.getParameter(F.UNPACK_SKIP_IMAGES),mt=K.isCompressedTexture?K.mipmaps[0]:K.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,mt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,mt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,w.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,w.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,w.min.z),K.isDataTexture||K.isData3DTexture?F.texSubImage3D(Ae,q,O.x,O.y,O.z,ye,we,be,Re,Ve,mt.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(Ae,q,O.x,O.y,O.z,ye,we,be,Re,mt.data)):F.texSubImage3D(Ae,q,O.x,O.y,O.z,ye,we,be,Re,Ve,mt),F.pixelStorei(F.UNPACK_ROW_LENGTH,Ne),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ft),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ht),F.pixelStorei(F.UNPACK_SKIP_ROWS,xn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,ii),q===0&&I.generateMipmaps&&F.generateMipmap(Ae),Ce.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?De.setTextureCube(w,0):w.isData3DTexture?De.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?De.setTexture2DArray(w,0):De.setTexture2D(w,0),Ce.unbindTexture()},this.resetState=function(){M=0,C=0,E=null,Ce.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ue?Pr:M_}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Pr?Ue:ni}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class uR extends V_{}uR.prototype.isWebGL1Renderer=!0;class fR extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}const hg={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class dR{constructor(e,n,i){const r=this;let o=!1,s=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,o===!1&&r.onStart!==void 0&&r.onStart(u,s,a),o=!0},this.itemEnd=function(u){s++,r.onProgress!==void 0&&r.onProgress(u,s,a),s===a&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const m=c[d],_=c[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return _}return null}}}const hR=new dR;class ph{constructor(e){this.manager=e!==void 0?e:hR,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,o){i.load(e,r,n,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ph.DEFAULT_MATERIAL_NAME="__DEFAULT";class pR extends ph{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,s=hg.get(e);if(s!==void 0)return o.manager.itemStart(e),setTimeout(function(){n&&n(s),o.manager.itemEnd(e)},0),s;const a=ca("img");function l(){u(),hg.add(e,this),n&&n(this),o.manager.itemEnd(e)}function c(d){u(),r&&r(d),o.manager.itemError(e),o.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(e),a.src=e,a}}class sl extends ph{constructor(e){super(e)}load(e,n,i,r){const o=new an,s=new pR(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(a){o.image=a,o.needsUpdate=!0,n!==void 0&&n(o)},i,r),o}}class pg{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Gt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lh);const mg={type:"change"},Bu={type:"start"},gg={type:"end"},al=new R_,vg=new Ni,mR=Math.cos(70*nT.DEG2RAD);class gR extends Wr{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Yr.ROTATE,MIDDLE:Yr.DOLLY,RIGHT:Yr.PAN},this.touches={ONE:qr.ROTATE,TWO:qr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",S),this._domElementKeyEvents=R},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",S),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(mg),i.update(),o=r.NONE},this.update=function(){const R=new B,Q=new zr().setFromUnitVectors(e.up,new B(0,1,0)),ge=Q.clone().invert(),ue=new B,me=new zr,Pe=new B,Xe=2*Math.PI;return function(){const he=i.object.position;R.copy(he).sub(i.target),R.applyQuaternion(Q),a.setFromVector3(R),i.autoRotate&&o===r.NONE&&Z(T()),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let G=i.minAzimuthAngle,ie=i.maxAzimuthAngle;isFinite(G)&&isFinite(ie)&&(G<-Math.PI?G+=Xe:G>Math.PI&&(G-=Xe),ie<-Math.PI?ie+=Xe:ie>Math.PI&&(ie-=Xe),G<=ie?a.theta=Math.max(G,Math.min(ie,a.theta)):a.theta=a.theta>(G+ie)/2?Math.max(G,a.theta):Math.min(ie,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.zoomToCursor&&C||i.object.isOrthographicCamera?a.radius=W(a.radius):a.radius=W(a.radius*c),R.setFromSpherical(a),R.applyQuaternion(ge),he.copy(i.target).add(R),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let pe=!1;if(i.zoomToCursor&&C){let ze=null;if(i.object.isPerspectiveCamera){const Ke=R.length();ze=W(Ke*c);const tt=Ke-ze;i.object.position.addScaledVector(y,tt),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Ke=new B(M.x,M.y,0);Ke.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),pe=!0;const tt=new B(M.x,M.y,0);tt.unproject(i.object),i.object.position.sub(tt).add(Ke),i.object.updateMatrixWorld(),ze=R.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;ze!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(ze).add(i.object.position):(al.origin.copy(i.object.position),al.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(al.direction))<mR?e.lookAt(i.target):(vg.setFromNormalAndCoplanarPoint(i.object.up,i.target),al.intersectPlane(vg,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),pe=!0);return c=1,C=!1,pe||ue.distanceToSquared(i.object.position)>s||8*(1-me.dot(i.object.quaternion))>s||Pe.distanceToSquared(i.target)>0?(i.dispatchEvent(mg),ue.copy(i.object.position),me.copy(i.object.quaternion),Pe.copy(i.target),pe=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",te),i.domElement.removeEventListener("pointerdown",ke),i.domElement.removeEventListener("pointercancel",$e),i.domElement.removeEventListener("wheel",b),i.domElement.removeEventListener("pointermove",De),i.domElement.removeEventListener("pointerup",$e),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",S),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=r.NONE;const s=1e-6,a=new pg,l=new pg;let c=1;const u=new B,d=new He,h=new He,m=new He,_=new He,x=new He,p=new He,f=new He,g=new He,v=new He,y=new B,M=new He;let C=!1;const E=[],D={};function T(){return 2*Math.PI/60/60*i.autoRotateSpeed}function A(){return Math.pow(.95,i.zoomSpeed)}function Z(R){l.theta-=R}function ee(R){l.phi-=R}const H=function(){const R=new B;return function(ge,ue){R.setFromMatrixColumn(ue,0),R.multiplyScalar(-ge),u.add(R)}}(),$=function(){const R=new B;return function(ge,ue){i.screenSpacePanning===!0?R.setFromMatrixColumn(ue,1):(R.setFromMatrixColumn(ue,0),R.crossVectors(i.object.up,R)),R.multiplyScalar(ge),u.add(R)}}(),X=function(){const R=new B;return function(ge,ue){const me=i.domElement;if(i.object.isPerspectiveCamera){const Pe=i.object.position;R.copy(Pe).sub(i.target);let Xe=R.length();Xe*=Math.tan(i.object.fov/2*Math.PI/180),H(2*ge*Xe/me.clientHeight,i.object.matrix),$(2*ue*Xe/me.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(H(ge*(i.object.right-i.object.left)/i.object.zoom/me.clientWidth,i.object.matrix),$(ue*(i.object.top-i.object.bottom)/i.object.zoom/me.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function J(R){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Y(R){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function L(R){if(!i.zoomToCursor)return;C=!0;const Q=i.domElement.getBoundingClientRect(),ge=R.clientX-Q.left,ue=R.clientY-Q.top,me=Q.width,Pe=Q.height;M.x=ge/me*2-1,M.y=-(ue/Pe)*2+1,y.set(M.x,M.y,1).unproject(e).sub(e.position).normalize()}function W(R){return Math.max(i.minDistance,Math.min(i.maxDistance,R))}function N(R){d.set(R.clientX,R.clientY)}function U(R){L(R),f.set(R.clientX,R.clientY)}function z(R){_.set(R.clientX,R.clientY)}function ce(R){h.set(R.clientX,R.clientY),m.subVectors(h,d).multiplyScalar(i.rotateSpeed);const Q=i.domElement;Z(2*Math.PI*m.x/Q.clientHeight),ee(2*Math.PI*m.y/Q.clientHeight),d.copy(h),i.update()}function re(R){g.set(R.clientX,R.clientY),v.subVectors(g,f),v.y>0?J(A()):v.y<0&&Y(A()),f.copy(g),i.update()}function fe(R){x.set(R.clientX,R.clientY),p.subVectors(x,_).multiplyScalar(i.panSpeed),X(p.x,p.y),_.copy(x),i.update()}function xe(R){L(R),R.deltaY<0?Y(A()):R.deltaY>0&&J(A()),i.update()}function Se(R){let Q=!1;switch(R.code){case i.keys.UP:R.ctrlKey||R.metaKey||R.shiftKey?ee(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):X(0,i.keyPanSpeed),Q=!0;break;case i.keys.BOTTOM:R.ctrlKey||R.metaKey||R.shiftKey?ee(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):X(0,-i.keyPanSpeed),Q=!0;break;case i.keys.LEFT:R.ctrlKey||R.metaKey||R.shiftKey?Z(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):X(i.keyPanSpeed,0),Q=!0;break;case i.keys.RIGHT:R.ctrlKey||R.metaKey||R.shiftKey?Z(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):X(-i.keyPanSpeed,0),Q=!0;break}Q&&(R.preventDefault(),i.update())}function Me(){if(E.length===1)d.set(E[0].pageX,E[0].pageY);else{const R=.5*(E[0].pageX+E[1].pageX),Q=.5*(E[0].pageY+E[1].pageY);d.set(R,Q)}}function Ge(){if(E.length===1)_.set(E[0].pageX,E[0].pageY);else{const R=.5*(E[0].pageX+E[1].pageX),Q=.5*(E[0].pageY+E[1].pageY);_.set(R,Q)}}function Qe(){const R=E[0].pageX-E[1].pageX,Q=E[0].pageY-E[1].pageY,ge=Math.sqrt(R*R+Q*Q);f.set(0,ge)}function Ie(){i.enableZoom&&Qe(),i.enablePan&&Ge()}function F(){i.enableZoom&&Qe(),i.enableRotate&&Me()}function St(R){if(E.length==1)h.set(R.pageX,R.pageY);else{const ge=j(R),ue=.5*(R.pageX+ge.x),me=.5*(R.pageY+ge.y);h.set(ue,me)}m.subVectors(h,d).multiplyScalar(i.rotateSpeed);const Q=i.domElement;Z(2*Math.PI*m.x/Q.clientHeight),ee(2*Math.PI*m.y/Q.clientHeight),d.copy(h)}function Te(R){if(E.length===1)x.set(R.pageX,R.pageY);else{const Q=j(R),ge=.5*(R.pageX+Q.x),ue=.5*(R.pageY+Q.y);x.set(ge,ue)}p.subVectors(x,_).multiplyScalar(i.panSpeed),X(p.x,p.y),_.copy(x)}function Le(R){const Q=j(R),ge=R.pageX-Q.x,ue=R.pageY-Q.y,me=Math.sqrt(ge*ge+ue*ue);g.set(0,me),v.set(0,Math.pow(g.y/f.y,i.zoomSpeed)),J(v.y),f.copy(g)}function Ce(R){i.enableZoom&&Le(R),i.enablePan&&Te(R)}function et(R){i.enableZoom&&Le(R),i.enableRotate&&St(R)}function ke(R){i.enabled!==!1&&(E.length===0&&(i.domElement.setPointerCapture(R.pointerId),i.domElement.addEventListener("pointermove",De),i.domElement.addEventListener("pointerup",$e)),se(R),R.pointerType==="touch"?V(R):Et(R))}function De(R){i.enabled!==!1&&(R.pointerType==="touch"?oe(R):Ct(R))}function $e(R){Ee(R),E.length===0&&(i.domElement.releasePointerCapture(R.pointerId),i.domElement.removeEventListener("pointermove",De),i.domElement.removeEventListener("pointerup",$e)),i.dispatchEvent(gg),o=r.NONE}function Et(R){let Q;switch(R.button){case 0:Q=i.mouseButtons.LEFT;break;case 1:Q=i.mouseButtons.MIDDLE;break;case 2:Q=i.mouseButtons.RIGHT;break;default:Q=-1}switch(Q){case Yr.DOLLY:if(i.enableZoom===!1)return;U(R),o=r.DOLLY;break;case Yr.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(i.enablePan===!1)return;z(R),o=r.PAN}else{if(i.enableRotate===!1)return;N(R),o=r.ROTATE}break;case Yr.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(i.enableRotate===!1)return;N(R),o=r.ROTATE}else{if(i.enablePan===!1)return;z(R),o=r.PAN}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(Bu)}function Ct(R){switch(o){case r.ROTATE:if(i.enableRotate===!1)return;ce(R);break;case r.DOLLY:if(i.enableZoom===!1)return;re(R);break;case r.PAN:if(i.enablePan===!1)return;fe(R);break}}function b(R){i.enabled===!1||i.enableZoom===!1||o!==r.NONE||(R.preventDefault(),i.dispatchEvent(Bu),xe(R),i.dispatchEvent(gg))}function S(R){i.enabled===!1||i.enablePan===!1||Se(R)}function V(R){switch(le(R),E.length){case 1:switch(i.touches.ONE){case qr.ROTATE:if(i.enableRotate===!1)return;Me(),o=r.TOUCH_ROTATE;break;case qr.PAN:if(i.enablePan===!1)return;Ge(),o=r.TOUCH_PAN;break;default:o=r.NONE}break;case 2:switch(i.touches.TWO){case qr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ie(),o=r.TOUCH_DOLLY_PAN;break;case qr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;F(),o=r.TOUCH_DOLLY_ROTATE;break;default:o=r.NONE}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(Bu)}function oe(R){switch(le(R),o){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;St(R),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Te(R),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ce(R),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;et(R),i.update();break;default:o=r.NONE}}function te(R){i.enabled!==!1&&R.preventDefault()}function se(R){E.push(R)}function Ee(R){delete D[R.pointerId];for(let Q=0;Q<E.length;Q++)if(E[Q].pointerId==R.pointerId){E.splice(Q,1);return}}function le(R){let Q=D[R.pointerId];Q===void 0&&(Q=new He,D[R.pointerId]=Q),Q.set(R.pageX,R.pageY)}function j(R){const Q=R.pointerId===E[0].pointerId?E[1]:E[0];return D[Q.pointerId]}i.domElement.addEventListener("contextmenu",te),i.domElement.addEventListener("pointerdown",ke),i.domElement.addEventListener("pointercancel",$e),i.domElement.addEventListener("wheel",b,{passive:!1}),this.update()}}const vR="https://maumor13.github.io/mauriciomores/assets/photo1-d178fec7.jpg",_R="https://maumor13.github.io/mauriciomores/assets/photo2-7cb99f3d.jpg",xR="https://maumor13.github.io/mauriciomores/assets/photoIA1-21b1cc3c.jpg",yR="https://maumor13.github.io/mauriciomores/assets/photo3-18a048e4.jpg",SR=ve.div`
    width: 100%;
    height: 35rem;
    position: relative;
    background-color: tra;
    filter: drop-shadow(
        15px 15px 20px rgb(113, 0, 241,0.4)
    );
    @media (max-width:300px){
        height: 30rem;
    } 
`,ER=()=>{const t=ae.useRef(null);return ae.useEffect(()=>{const e=t.current,{clientWidth:n,clientHeight:i}=e,r=new fR,o=new Tn(25,n/i,.01,1e3);r.add(o),o.position.z=0,o.position.x=0;const s=new V_({alpha:!0});s.setSize(n,i),e.appendChild(s.domElement);const a=new gR(o,s.domElement);a.enableDamping=!0,a.enablePan=!1,a.enableZoom=!1,a.minPolarAngle=1.5,a.maxPolarAngle=1.5;const l=new os(1,1,1),c=[new sl().load(vR),new sl().load(xR),new sl().load(_R),new sl().load(yR)];c.forEach(_=>_.colorSpace=Ue);const u=[new Ii({map:c[0]}),new Ii({map:c[1]}),new Ii({color:994404}),new Ii({color:994404}),new Ii({map:c[2]}),new Ii({map:c[3]})],d=new _i(l,u);r.add(d),o.position.z=3,o.lookAt(d.position);const h=function(){a.update(),s.render(r,o),requestAnimationFrame(h)},m=function(){const{clientWidth:_,clientHeight:x}=e;o.aspect=_/x,o.updateProjectionMatrix(),s.setSize(_,x);const p=_<600?.75:.95;d.scale.set(p,p,p)};return window.addEventListener("resize",m),m(),h(),()=>{e.removeChild(s.domElement)}},[]),k.jsx(SR,{ref:t})},MR="https://maumor13.github.io/mauriciomores/assets/arrow-prev-svgrepo-com-cc93ef04.svg",TR="https://maumor13.github.io/mauriciomores/assets/arrow-next-svgrepo-com-d568b7ac.svg",wR=ve.main`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-right: 2rem;
    padding-left: 2rem;
    align-items: center;
`,AR=ve.h1`
    font-family: 'Blouse','Aesthetic','Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 2.5rem;
    text-align: left;
`,CR=ve.span`
    color: #7100F1;
    text-shadow: 2px 4px 4px #bb0b0b8a;
`,bR=ve.article`
    position: relative;
    width: 50%;
    @media (max-width:950px){
        width: 100%;
    } 
`,RR=ve.article`
    margin-bottom: 1rem;
    position: relative;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width:950px){
        width: 100%;
    } 
`,PR=ve.div`
    z-index: 100;
    font-family: 'Blouse','Aesthetic','Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1rem;
    text-align: center;
    position: absolute;
    color: white;
    top: 80%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15rem;
    height: 6rem;
    animation: delayToBlink 3s infinite;

    @keyframes delayToBlink {
        0%{
            opacity: 0;
        }
        50%{
            opacity: 1;
        }
        100%{
            opacity: 0;
        }
    }
`,_g=ve.img`
    width: 3rem;
    height: 3rem;
`,LR=()=>{const[t,e]=ae.useState("19rem"),n=()=>{const i=window.innerWidth;i<930&&e("10rem"),i<600&&i>400&&e("14rem"),i<400&&e("18rem")};return ae.useEffect(()=>(n(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}),[]),k.jsxs(wR,{children:[k.jsxs(bR,{children:[k.jsxs(AR,{children:["HI,",k.jsx("br",{})," I´m ",k.jsx(CR,{children:"Mauricio"}),", ",k.jsx("br",{}),"Full Stack Developer . . ."]}),k.jsx(f_,{text:`In this space, I present a tour of my achievements,
                outstanding skills and projects. Each item has been carefully
                selected to reflect my dedication, experience and unique vision in the field
                web development and programming in all its splendor.
                I invite you to explore my portfolio and discover how together we can
                bring great ideas to life! Do not hesitate to contact me for future collaborations or any
                query you may have.`,height:t})]}),k.jsxs(RR,{children:[k.jsxs(PR,{children:[k.jsx(_g,{src:MR})," CLICK AND TURN ",k.jsx(_g,{src:TR})]}),k.jsx(ER,{})]})]})},DR=ve.main`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-right: 2rem;
    padding-left: 2rem;
    align-items: center;
`,UR=ve.h1`
    font-family: 'Blouse','Aesthetic','Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 2rem;
    text-align: center;
`,IR=ve.article`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 1.5rem;
    width: 100%;
`,NR=ve.p`
    font-family: 'Courier New', Courier, monospace;
    display: block; 
    font-size: 1.3rem;
    padding-top: 1rem;
    text-align: center;
`,OR=ve.section`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    vertical-align: center;
`,FR=()=>k.jsxs(DR,{children:[k.jsxs(IR,{children:[k.jsx(UR,{children:"What you can know about me. . ."}),k.jsx(NR,{children:"A professional dedicated to innovating and learning new technologies to develop and be able to solve all types of problems. I stand out for my great focus and teamwork, as well as being able to overcome challenges independently."})]}),k.jsx(OR,{})]}),kR=ve.article`
    background-image: url(${t=>t.img});
    filter: drop-shadow(-5px -5px 8px #ffffff86);
    background-position: start;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 2rem;
    width: 36rem;
    height: 20rem;
    margin: 1rem;
    position: relative;
    overflow: hidden;
    &:hover {
        div{
            left: 0;
        }
    }
`,zR=ve.div`
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 2rem;
    left: -100%;
    backdrop-filter: blur(10px);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: #000000a3;
    transition: all 1s;
`,BR=ve.img`
    height: 10rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    filter: drop-shadow(-5px 0 8px #383636a1);
    animation: jumpsLogo 1s infinite;

    @keyframes jumpsLogo {
        0%{
            top:50%
        }
        50%{
            top:45%;
        }
        100%{
            top:50%
        }
    }
`,xg=ve.a`
    cursor: pointer;
    margin-bottom: 1rem;
    text-decoration: none;
    padding: .3rem;
    border-radius: .5rem;
    border: 2px solid white;
    background-color: transparent;
    color: white;
    text-align: center;
    font-family: 'Blouse','Aesthetic','Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1rem;
    position: relative;
    transition: all 1.5s;
    overflow: hidden;
    &:hover{
        border: 2px solid black;
        color: black;

        &::before{
            animation: desplaceBefore 1.5s forwards;
            @keyframes desplaceBefore {
                0%{
                    right: 110%;
                }
                100%{
                    right: 10%;
                }
            }
        }
        &::after{
            animation: desplaceAfter 1.5s forwards;
            @keyframes desplaceAfter {
                0%{
                    left: 110%;
                }
                100%{
                    left: 10%;
                }
            }
        }
    }
    &::before{
        background-color: #8f30fd;
        content: "";
        width: 12rem;
        height: 6rem;
        top: -100%;
        right: 110%;
        transform: rotateZ(25deg);
        position: absolute;
        z-index: -1;
    }
    &::after{
        background-color: #8f30fd;
        content: "";
        width: 12rem;
        height: 6rem;
        top: -100%;
        left: 110%;
        transform: rotateZ(-25deg);
        position: absolute;
        z-index: -1;
    }
`,HR=ve.h2`
    font-family: 'Blouse','Aesthetic','Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-align: center;
    margin-top: 1rem;
`,GR=ve.p`
    font-family: 'Courier New', Courier, monospace;
    font-size: 1rem;
    height: 10rem;
    padding: 0rem 1rem 0rem 1rem;
    text-align: center;
    overflow: auto;
`,As=t=>k.jsxs(kR,{img:t.img,children:[k.jsx(BR,{src:t.logo}),k.jsxs(zR,{children:[k.jsxs(HR,{children:[" ",t.title," "]}),k.jsxs(GR,{children:[" ",t.text," "]}),t.download!=null?k.jsx(xg,{target:"_blank",href:t.href,download:t.download,children:"Download Project"}):k.jsx(xg,{target:"_blank",href:t.href,children:"Github Repository"})]})]});As.propTypes={text:dn.string.isRequired,img:dn.string.isRequired,logo:dn.string.isRequired,title:dn.string.isRequired,href:dn.string.isRequired,download:dn.string.isRequired};const VR="https://maumor13.github.io/mauriciomores/assets/pexel-00557173.jpg",WR="https://maumor13.github.io/mauriciomores/assets/Logo-e4c3c648.svg",jR="https://maumor13.github.io/mauriciomores/assets/banner0-a2510932.jpg",XR="https://maumor13.github.io/mauriciomores/assets/iconoFondoNegroPNG-96901508.png",$R="https://maumor13.github.io/mauriciomores/assets/fondo2-ffcecd1d.png",YR="https://maumor13.github.io/mauriciomores/assets/patitasFelices-ab587a91.svg",qR="https://maumor13.github.io/mauriciomores/assets/robots-ac467cd7.webp",KR="https://maumor13.github.io/mauriciomores/assets/friendly-robot-waving-full-body-0c9301ec.svg",ZR="https://maumor13.github.io/mauriciomores/assets/Programacion_y_Robotica-f7ba0a98.pdf",QR=ve.main`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-right: 2rem;
    padding-left: 2rem;
    align-items: center;
`,JR=ve.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 1.5rem;
    width: 100%;
`,eP=ve.h1`
    font-family: 'Blouse','Aesthetic','Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 2rem;
    text-align: center;
`,tP=ve.p`
    font-family: 'Courier New', Courier, monospace;
    display: block; 
    font-size: 1.3rem;
    padding-top: 1rem;
    text-align: center;
    min-height: 5rem;
`,nP=ve.section`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    vertical-align: center;
`,iP=()=>k.jsxs(QR,{children:[k.jsxs(JR,{children:[k.jsx(eP,{children:"My Projects . . ."}),k.jsx(tP,{children:"Explore a showcase of my diverse range of projects, each representing a unique journey in the world of technology and creativity."})]}),k.jsxs(nP,{children:[k.jsx(As,{img:VR,logo:WR,title:"Diamond Bank",href:"https://github.com/MauMor13/Homebanking",text:`I had the opportunity to develop a full-fledged web banking application, \r
                        incorporating technologies such as HTML, CSS, JavaScript, Vue.js, and \r
                        Bootstrap for the frontend, and Java with Spring for the backend. The \r
                        application features a client account system, online loan request and \r
                        approval functionality, among other features, in addition to an attractive \r
                        and responsive design.`}),k.jsx(As,{img:jR,logo:XR,title:"Adstore Detailing",href:"https://github.com/MauMor13/Proyecto-Adstore-Detailing",text:` This project was the result of the collaboration of a team of five people, \r
                        in which I had the honor of leading. It was developed for a company specializing \r
                        in vehicle washing and polishing, which also offers a wide range of cleaning and \r
                        maintenance products. We used various technologies to bring to life a highly aesthetic \r
                        and fully responsive website. The website includes features such as appointment \r
                        scheduling and inventory control for both services and products. This project \r
                        not only allowed us to showcase our technical skills but also our ability to \r
                        work as a team and lead a project from its conception to its implementation. \r
                        I am proud to have led this effort and delivered a comprehensive solution for \r
                        our client, enhancing their online presence and streamlining their business management.`}),k.jsx(As,{img:$R,logo:YR,title:"Happy Paws",href:"https://github.com/MauMor13/patitas_felices",text:`I had the privilege of being part of a beautiful project carried out for a veterinary clinic. \r
                        We developed a visually appealing and distinctive website that followed a specific layout. \r
                        To efficiently manage our team´s tasks, we utilized the Trello platform, which established \r
                        an agile and collaborative work dynamic.\r
                        Our focus was on creating an exceptional frontend. The vision was to transform the website into \r
                        an e-commerce platform for the sale of toy products and pharmaceutical items. Initially, we concentrated \r
                        on developing an attractive frontend with a user-friendly interface.\r
                        In the next phase of the project, we plan to implement a robust backend with the necessary business logic. \r
                        This will enable us to manage product stock effectively and facilitate the payment process for sales \r
                        through online payment methods.`}),k.jsx(As,{img:qR,logo:KR,title:"Programming and Robotics",href:ZR,download:"Programacion_y_Robotica",text:`I am currently leading an educational project at a technical school that focuses on teaching the \r
                        fundamental concepts of robotics and programming using Arduino technology as the foundation. Through \r
                        a combination of practical tasks and theoretical lessons, we strive to transform these concepts into \r
                        the realization of small automated robots capable of collision-free movement, thanks to the use of \r
                        ultrasonic sensors.\r
                        Our project also involves the demonstration and application of various other sensors and components, \r
                        temperature sensors, and infrared transmitters-receivers. These components not only enhance our \r
                        understanding of the technology but also pave the way for their integration into a wide range \r
                        of projects.\r
                        This educational initiative not only equips students with vital skills in robotics and programming but \r
                        also fosters a hands-on, exploratory learning experience that ignites creativity and innovation. I am \r
                        proud to be part of this endeavor, guiding students towards a future enriched with technological knowledge \r
                        and possibilities.`})]})]}),rP="https://maumor13.github.io/mauriciomores/assets/swiper-logo-4ffdba56.svg",oP="https://maumor13.github.io/mauriciomores/assets/css-79f0f6aa.svg",sP="https://maumor13.github.io/mauriciomores/assets/git-7dd779a2.svg",aP="https://maumor13.github.io/mauriciomores/assets/github-0a6ef9b3.svg",lP="https://maumor13.github.io/mauriciomores/assets/html-ca524b2b.svg",cP="https://maumor13.github.io/mauriciomores/assets/java-0fdd237b.svg",uP="https://maumor13.github.io/mauriciomores/assets/jira-b4d0eb78.svg",fP="https://maumor13.github.io/mauriciomores/assets/js-493bd4d7.svg",dP="https://maumor13.github.io/mauriciomores/assets/postgre-d1d02a7a.svg",hP="https://maumor13.github.io/mauriciomores/assets/amazon-web-services-3-60280495.svg",pP="https://maumor13.github.io/mauriciomores/assets/postman-6e5289d3.svg",mP="https://maumor13.github.io/mauriciomores/assets/react-7d262979.svg",gP="https://maumor13.github.io/mauriciomores/assets/spring-cc9e27db.svg",vP="https://maumor13.github.io/mauriciomores/assets/sql-3586273a.svg",_P="https://maumor13.github.io/mauriciomores/assets/styled-ed9317b9.svg",xP="https://maumor13.github.io/mauriciomores/assets/trello-01636ff9.svg",yP="https://maumor13.github.io/mauriciomores/assets/vue-87cf1d3c.svg",SP="https://maumor13.github.io/mauriciomores/assets/bootstrap-73656ea5.svg",EP=ve.div`
	width: 100%;
    max-width: 800px;// cambio de altura maxima
    height: 22rem;
    margin-bottom: 2rem;
	perspective: 1000px;
	position: relative;
    display: flex;
    justify-content: center;
`,MP=ve.div`
    width: 10%;
	position: absolute;
    top: 26%;
    left: 45%;
    transform: translate(-50%,-50%);
    animation: rotateIcon 30s infinite linear;
	transform-style: preserve-3d;

    @keyframes rotateIcon {
	0% {
		transform: rotateY(0deg);
	} 
    100% {
		transform: rotateY(360deg);
	}
}
`,TP=ve.div`
    width: 8rem;
	height: 8rem;
    display: flex;
    justify-content: center;
	border: 1px solid #3b444b;
	position: absolute;
    border-radius: 100px;
    background: linear-gradient(155deg, #4b1652,#4f175675 );
    box-shadow:  10px 10px 40px  #5e1c6779 ,
            -10px -10px 70px #651e6e;
`,wP=ve.img`
    width: 5rem;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`,AP=()=>{const t=[rP,oP,sP,aP,lP,cP,uP,fP,dP,hP,pP,mP,gP,vP,_P,xP,yP,SP];return k.jsx(EP,{children:k.jsx(MP,{children:t.map((e,n)=>{const i=360/t.length*n;return k.jsx(TP,{style:{transform:"rotateY("+i+"deg)  translateZ(25rem)"},children:k.jsx(wP,{src:e},n)},n)})})})},CP=ve.main`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-right: 2rem;
    padding-left: 2rem;
    align-items: center; 
    overflow: hidden;
`,bP=ve.p`
    font-family: 'Courier New', Courier, monospace;
    display: block; 
    font-size: 1.3rem;
    padding-top: 1rem;
    text-align: center;
`,RP=ve.article`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 1rem;
    width: 100%;
`,PP=ve.h1`
    font-family: 'Blouse','Aesthetic','Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 2rem;
    text-align: center;
`,LP=()=>k.jsxs(CP,{children:[k.jsxs(RP,{children:[k.jsx(PP,{children:"THE TECHNOLOGIES I HAVE USED . . ."}),k.jsx(bP,{children:"I’m a programmer with experience in a variety of languages and technologies. I started with C and C++ for microcontroller programming, and then delved into Arduino for hardware development. In web development, I’ve worked with Java, Spring Boot, Hibernate, JavaScript, React, Vue.js, HTML, CSS, Bootstrap, Swiper, and Styled Components. I’m familiar with version control using Git and GitHub. As for databases, I’ve used SQL and PostgreSQL. In addition, I have collaborative work experience using agile methodologies and tools like Trello and Jira."})]}),k.jsx(AP,{})]}),DP="https://maumor13.github.io/mauriciomores/assets/linkedin-4fc7239b.svg",UP="https://maumor13.github.io/mauriciomores/assets/github-9402a759.svg",IP="https://maumor13.github.io/mauriciomores/assets/gmail-1ffea183.svg",NP=ve.section`
    width: 100%;
    height: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
    padding: 0 1rem 0 1rem;
`,Hu=ve.img`
    background-position: center;
    min-width: 4rem;
    height: 4rem;
    background-size: contain;
    background-repeat: no-repeat;
    position: relative;
    animation: filterShadow 2s infinite linear ;

    @keyframes filterShadow {
        0%{
            filter: drop-shadow(0 0 5px #d500f1);
        }
        50%{
            filter: drop-shadow(0 0 5px #7100F1);
        }
        100%{
            filter: drop-shadow(0 0 5px #d500f1);
        }
    }
`,Gu=ve.a` 
    width: 100%;
    height: 5rem;
    display: flex;
    text-decoration: none;
    align-items: center;
    justify-content: baseline;
    text-align: start;
`,Vu=ve.p`
    font-size: 1.5rem;
    margin-left: 1rem;
    width: 7rem;
    flex-grow: 1;
    word-wrap: break-word;
`,W_=()=>k.jsxs(NP,{children:[k.jsxs(Gu,{target:"_blank",href:"https://www.linkedin.com/in/mauricio-mores-b3898817b/",children:[k.jsx(Hu,{src:DP}),k.jsx(Vu,{children:"Mauricio Mores"})]}),k.jsxs(Gu,{target:"_blank",href:"https://github.com/MauMor13",children:[k.jsx(Hu,{src:UP}),k.jsx(Vu,{children:"MauMor13"})]}),k.jsxs(Gu,{target:"_blank",href:"mailto:mauri.f.mores@gmail.com",children:[k.jsx(Hu,{src:IP}),k.jsx(Vu,{children:"mauri.f.mores@gmail.com"})]})]}),OP="https://maumor13.github.io/mauriciomores/assets/Mauricio_Mores_Full_Stack_Java_CV-eb6cc90c.pdf",FP=ve.a`
    text-decoration: none;
    font-family: 'Aesthetic','Courier New', Courier, monospace;
    width: 15rem;
    height: 3rem;
    position: relative;
    display: flex;
    padding-left: 1rem;
    justify-content: start;
    align-items: center;
    font-size: 22px;
    border: 3px solid #28f2b3;
    color: #28f2b3;
    background: none;
    white-space: nowrap;
    overflow: hidden;
    line-height: 64px;
    box-shadow: 0 0 5px #222;
    border-radius: 70px;
    animation: ${t=>t.isActive?"over 3s linear":"none"};
    outline: none;

    &:before {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 0;
        background: #28f2b3;
        animation: ${t=>t.isActive?"load 3s linear":"none"};
    }

    &:after {
        content: "";
        position: absolute;
        top: 10%;
        right: 10%;
        width: 15px;
        height: 15px;
        border-bottom: 3px solid;
        border-right: 3px solid;
        transform: rotate(45deg);
        box-shadow: 3px 3px #333, 6px 6px #28f2b3;
        animation:  ${t=>t.isActive?"dwd 3s linear":"none"};
    }
    

    @keyframes over {
    0% , 20% {
        text-indent: -9999px;
    }
    25%,
    100% {
        border-color: #28f2b3;
    }
    30%,
    100% {
        width: 3rem;
        border-color: #444;
    }
    }
    @keyframes load {
    0%,
    40% {
        height: 0;
    }
    90%,
    100% {
        height: 100%;
    }
    }
    @keyframes dwd {
    0%,
    20% {
        top: 10%;
    }
    30%,
    100% {
        right: 29%;
    }
    50%,
    60%,
    70%,
    80% {
        top: 5%;
    }
    35%,
    45%,
    55%,
    65%,
    75%,
    85% {
        top: 15%;
    }
    54% {
        color: #28f2b3;
        box-shadow: 3px 3px #333, 6px 6px #28f2b3;
    }
    55%,
    85% {
        color: #333;
        box-shadow: 3px 3px #28f2b3, 6px 6px #333;
        border-width: 3px;
        height: 15px;
    }
    90%,100% {
        box-shadow: 1px 1px #333;
        border-width: 5px;
        height: 20px;
        color: #fff;
    }}
`,j_=()=>{const[t,e]=ae.useState(!1),n=()=>{e(!0),setTimeout(()=>{e(!1)},3e3)};return k.jsx(FP,{onClick:n,isActive:t,href:OP,download:"Mauricio_Mores_Full_Stack_Java_CV",children:"Download CV"})},kP=ve.main`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-right: 2rem;
    padding-left: 2rem;
    align-items: center;  
`,zP=ve.p`
    font-family: 'Courier New', Courier, monospace;
    display: block; 
    font-size: 1.3rem;
    padding-top: 1rem;
    text-align: center;
`,BP=ve.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    width: 100%;
`,HP=ve.h1`
    font-family: 'Blouse','Aesthetic','Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 2rem;
    text-align: center;
`,GP=ve.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin-bottom: 1rem;
`,VP=ve.form`
    backdrop-filter: blur(10px);
    border: 1px solid black;
    border-radius: 1rem;
    min-height: 30rem;
    padding: 1rem;
    contain: content;
    display: flex;
    color: #340;
    flex-direction: column;
    justify-content: space-around;
    width: 45%;
    @media (max-width:850px){
        width: 100%;
        margin-bottom: 1rem;
    } 
`,Wu=ve.input`
    padding: 0.5rem;
    margin: 1rem;
    background-color: transparent;
    border: 1px solid #333;
    width: 90%;
    border-radius: 4px;
    font-size: 1rem;
    border-radius: 1rem;
`,WP=ve.textarea`
    padding: 0.5rem;
    width: 90%;
    resize: vertical;
    max-height: 10rem;
    background-color: transparent;
    margin: 1rem;
    border: 1px solid #333;
    border-radius: 4px;
    font-size: 1rem;
    border-radius: 1rem;
`,jP=ve.button`
    background-color: #333;
    color: white;
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-size: 1rem;
    border-radius: 1rem;
    border:1px solid #28f2b3;
    width: 10rem;
    transition: all 2s;
    position: relative;
    &:hover{
        color: black;
        background-color: #28f2b3;
        border:1px solid black;
    }
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            45deg,#28f2b3, #333, #28f2b3, #333, #28f2b3, #333
        );
        background-size: 800%;
        border-radius: 10px;
        filter: blur(8px);
        animation: glowing 50s linear infinite;
    }

    @keyframes glowing {
        0% {
            background-position: 0 0;
        }
        50% {
            background-position: 400% 0;
        }
        100% {
            background-position: 0 0;
        }
    }
`,ll=ve.label`
    font-family: 'Blouse','Aesthetic','Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    width: 100%;
`,XP=ve.h2`
    font-family: 'Blouse','Aesthetic','Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`,$P=ve.div`
    backdrop-filter: blur(10px);
    border: 1px solid black;
    border-radius: 1rem;
    min-height: 30rem;
    padding: 1rem;
    contain: content;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 45%;
    @media (max-width:850px){
        width: 100%;
    } 
`,YP=()=>{const[t,e]=ae.useState({name:"",email:"",_subject:"",menssage:""}),[n,i]=ae.useState(""),r=s=>{const{name:a,value:l}=s.target;e({...t,[a]:l})},o=async()=>{try{(await fetch("https://formsubmit.co/e7cff579b0fcb4d8b52d651ce2538169",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).ok?i("Formulario enviado con éxito."):i("Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.")}catch(s){console.error("Error al enviar el formulario:",s),i("Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.")}};return k.jsxs(kP,{children:[k.jsxs(BP,{children:[k.jsx(HP,{children:"You can contact me . . ."}),k.jsx(zP,{children:"Thank you for visiting my portfolio! If you have any feedback on it or simply want to get in touch, your message is most welcome! Rest assured, you´ll receive a prompt response from me. Your opinions and comments are highly valuable, as they help me grow and improve my work. I look forward to hearing from you soon!"})]}),k.jsxs(GP,{children:[k.jsxs(VP,{children:[k.jsx("input",{type:"hidden",name:"_captcha",value:"false"}),k.jsxs(ll,{children:[" Your Full Name :",k.jsx(Wu,{type:"text",name:"name",placeholder:"Full Name",required:!0,onChange:r})]}),k.jsxs(ll,{children:["Your Email Contact :",k.jsx(Wu,{type:"email",name:"email",placeholder:"Your Email",autoComplete:"off",required:!0,onChange:r})]}),k.jsxs(ll,{children:["Email subject:",k.jsx(Wu,{type:"text",name:"_subject",placeholder:"Subject",autoComplete:"off",required:!0,onChange:r})]}),k.jsxs(ll,{children:["Your Menssage :",k.jsx(WP,{name:"menssage",placeholder:"Your Message",rows:"4",required:!0,onChange:r})]}),k.jsx(jP,{onClick:o,children:"Send Message"})]}),k.jsxs($P,{children:[k.jsx(XP,{children:"Networks :"}),k.jsx(W_,{}),k.jsx(j_,{})]})]})]})},qP=()=>k.jsx("main",{}),KP=ve.button`
    font-family: 'Aesthetic','Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    padding: .5rem;
    background-color: transparent;
    cursor: pointer;
    border: none;
    border-radius: .5rem ;
    font-size: 1rem;
    position: relative;
    overflow: hidden;
    color: ${t=>t.active?"#8f30fd":"#ffff"};
    transition: 1.5s all ;
    
    &:after,&:before {
        content: '';
        position: absolute;
        height: 4px;
        width: 3rem;
        left: -3rem;
        transform: translateX(-50%);
        background-color: #7100F1;
        transition: 1.5s all ;
    }

    &:after{
        top: 0;
        transform: rotate(45deg);
    }
    &:before{
        bottom: 0;
        transform: rotate(-45deg);
    }
    &:hover {
        color: #8f30fd;
        border: none;

    &:after,&:before {
        left: 6.5rem;
    }
    }
    `,Gn=t=>{const e=ga();return k.jsx(KP,{active:e.pathname==t.route,children:t.text})};Gn.propTypes={text:dn.string.isRequired,route:dn.string.isRequired};const ZP=ve.nav`
    background-color: rgba(0, 0, 0, 0.572);
    backdrop-filter: blur(10px);
    border-radius:1rem 0 0 1rem ;
    width: 15rem;
    height: 40vh;
    opacity: 0;
    padding: 1rem;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    contain: content;
    right: 0;
    top: 0;
    animation-name: moveAnimation;
    animation-duration: .7s;
    animation-fill-mode: forwards;

    @keyframes moveAnimation { 
    from {
        right: -200px;
        opacity: 0;
    }

    to {
        right: 0;
        opacity: 1;
    }
}`,QP=ve.div`
    position: absolute;
    width: 3rem;
    height: 3rem;
    margin: 1rem;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        animation-name: rotateAnimation;
        animation-duration: 1s;
        animation-fill-mode: forwards;
        
        span {
            background-color: #7100F1; 
        }
    }

    @keyframes rotateAnimation { 
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(90deg);
        }
    }

    span {
        position: absolute;
        background-color: white;
        width: 80%;
        height: 5px;
        border-radius: 1rem;
        transform: rotate(45deg);
        display: block;
        transition: all 1s;
    }

    span:nth-child(2) {
        transform: rotate(-45deg);
    }
`,X_=t=>{const e=()=>{t.closeNavBar()};return k.jsxs(ZP,{children:[k.jsxs(QP,{onClick:e,children:[k.jsx("span",{}),k.jsx("span",{})]}),k.jsx(kn,{to:"/",onClick:e,children:k.jsx(Gn,{text:"Home"})}),k.jsx(kn,{to:"/About",onClick:e,children:k.jsx(Gn,{text:"About me"})}),k.jsx(kn,{to:"/Technologies",onClick:e,children:k.jsx(Gn,{text:"Technologies"})}),k.jsx(kn,{to:"/Projects",onClick:e,children:k.jsx(Gn,{text:"Projects"})}),k.jsx(kn,{to:"/Contact",onClick:e,children:k.jsx(Gn,{text:"Contact"})})]})};X_.propTypes={closeNavBar:dn.func.isRequired};const $_="https://maumor13.github.io/mauriciomores/assets/svg_20230707_232204_0000-7c118957.svg",JP=ve.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`,e2=ve.nav` 
    padding: 0 2rem 0 2rem;
    width: 35rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`,t2=ve.div`
    background-image: url(${$_});
    background-position: center;
    background-size: cover;
    width: 10rem;
    height: 8rem;
    padding-top: 1rem;
    background-color: transparent;
`,n2=ve.div`
    margin: 2rem;
    width: 3rem;
    height: 2rem;
    position: relative;
    
    span:first-child { 
        background-color: #7100F1;
        width: 100%;
        position: absolute;
        top: 3px;
        height: 4px;
        border-radius: 1rem;
        display: block;
        transition: all 1.5s;
    }
    span:nth-child(2){
        background-color: #7100F1;
        width: 80%;
        height: 4px;
        position: absolute;
        top: 13px;
        right: 0;
        border-radius: 1rem;
        display: block;
        transition: all 1s;
    }
    span:nth-child(3){
        background-color: #7100F1;
        position: absolute;
        top: 24px;
        right: 0;
        width: 60%;
        height: 4px;
        border-radius: 1rem;
        display: block;
        transition: all .5s;
    }
    &:hover{
    span:first-child, 
    span:nth-child(2),
    span:nth-child(3){
        background-color: white;
    }
    }
`,i2=()=>{const[t,e]=ae.useState(window.innerWidth),[n,i]=ae.useState(!1);ae.useEffect(()=>{const o=()=>{e(window.innerWidth)};return window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)}},[]);const r=()=>{i(!n)};return k.jsxs(JP,{children:[k.jsx(kn,{to:"/",children:k.jsx(t2,{})}),t<700?k.jsxs(n2,{onClick:r,children:[k.jsx("span",{}),k.jsx("span",{}),k.jsx("span",{})]}):k.jsxs(e2,{children:[k.jsx(kn,{to:"/",children:k.jsx(Gn,{route:"/",text:"Home"})}),k.jsx(kn,{to:"/About",children:k.jsx(Gn,{route:"/About",text:"About me"})}),k.jsx(kn,{to:"/Technologies",children:k.jsx(Gn,{route:"/Technologies",text:"Technologies"})}),k.jsx(kn,{to:"/Projects",children:k.jsx(Gn,{route:"/Projects",text:"Projects"})}),k.jsx(kn,{to:"/Contact",children:k.jsx(Gn,{route:"/Contact",text:"Contact"})})]}),n&&t<700&&k.jsx(X_,{closeNavBar:r}),k.jsx(gE,{})]})},r2=ve.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999; 
    backdrop-filter: blur(10px); 
    transition: opacity 0.7s ease-in-out; 
    opacity: ${t=>t.modalFooterVisible?"0":"1"};
`,o2=ve.div`
    margin: 1rem; 
    background: rgba(0, 0, 0, 0.5); 
    contain: content;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border: 2px solid black;
    border-radius: 1.5rem;
    position: relative;
    height: 30rem;
    width: 30rem;
    animation: appearsBelow .5s;
    animation-timing-function: linear;

    @keyframes appearsBelow {
    0%{
        transform: scale(.2);
        opacity: 0;
    }
    50%{
        transform: scale(.7);
        opacity: 0.5;
    }

    100% {
        transform: scale(1);
        opacity: 1;
    }
    }
`,s2=ve.div`
    position: absolute;
    width: 2rem;
    height: 2rem;
    margin: 1rem;
    cursor: pointer;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        animation-name: rotateAnimation;
        animation-duration: 1.5s;
        animation-fill-mode: forwards;
        
        span {
            background-color: #7100F1; 
        }
    }

    @keyframes rotateAnimation { 
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(180deg);
        }
    }

    span {
        position: absolute;
        background-color: white;
        width: 100%;
        height: 5px;
        border-radius: 1rem;
        transform: rotate(45deg);
        display: block;
    }

    span:nth-child(2) {
        transform: rotate(-45deg);
    }
`,a2=ve.h1`
    font-family: 'Blouse','Aesthetic','Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`,Y_=t=>k.jsx(r2,{children:k.jsxs(o2,{children:[k.jsxs(s2,{onClick:t.closeModal,children:[k.jsx("span",{}),k.jsx("span",{})]}),k.jsx(a2,{children:"Contact Me"}),k.jsx(W_,{}),k.jsx(j_,{})]})});Y_.propTypes={closeModal:dn.func.isRequired,modalFooterVisible:dn.bool.isRequired};const l2=ve.footer`
    cursor: default;
    padding-bottom: .5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 2rem 0 2rem;
`,c2=ve.button`
    text-decoration: none;
    background-color: #000000a7;
    padding: .5rem;
    color: white;
    cursor: pointer;
    border: none;
    border-radius: 12px;
    font-family: 'Courier New', Courier, monospace;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            45deg, #d500f1, #6000f1, #7100F1, #6000f1, #d500f1, #7100F1
        );
        background-size: 800%;
        border-radius: 10px;
        filter: blur(8px);
        animation: glowing 20s linear infinite;
    }

    @keyframes glowing {
        0% {
            background-position: 0 0;
        }
        50% {
            background-position: 400% 0;
        }
        100% {
            background-position: 0 0;
        }
    }
`,u2=ve.span`
    font-size: 1.3rem;
    color: white;
    font-family: 'Black_Ashpalt','Courier New', Courier, monospace;
`,f2=()=>{const[t,e]=ae.useState(!1),n=()=>{e(!t)};return k.jsxs(l2,{children:[t&&k.jsx(Y_,{closeModal:n,modalFooterVisible:t}),k.jsxs(c2,{onClick:n,children:[" Full Stack Java Developer ","= ( ) =>","{",k.jsx(u2,{children:"  Mauricio Mores "}),"}"]})]})},d2=ve.div` 
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`,h2=ve.div`
    background-image: url(${$_});
    background-position: center;
    background-size: cover;
    background-color: transparent;
    width: 40vw;
    height: 40vw;
    animation: heartBeat 1.5s infinite;
    
    @keyframes heartBeat {
        0% {
            filter: opacity(30%);
            transform: scale(1);
            box-shadow: inset;
        }
        50% {
            filter: opacity(100%);
            transform: scale(1.2);
        }
        100% {
            filter: opacity(30%);
            transform: scale(1);
        }
    }
`,p2=()=>k.jsx(d2,{children:k.jsx(h2,{})}),m2=()=>{const[t,e]=ae.useState(!0);return ae.useEffect(()=>{setTimeout(()=>{e(!1)},2e3)},[]),t?k.jsx(p2,{}):k.jsx(RM,{shouldForwardProp:PE,children:k.jsx(TE,{children:k.jsxs("div",{className:"container_body",children:[k.jsx(i2,{}),k.jsxs(_E,{children:[k.jsx(vr,{path:"/",element:k.jsx(LR,{})}),k.jsx(vr,{path:"About",element:k.jsx(FR,{})}),k.jsx(vr,{path:"Projects",element:k.jsx(iP,{})}),k.jsx(vr,{path:"Technologies",element:k.jsx(LP,{})}),k.jsx(vr,{path:"Contact",element:k.jsx(YP,{})}),k.jsx(vr,{path:"*",element:k.jsx(qP,{})})]}),k.jsx(f2,{})]})})})};function g2(){return k.jsx(m2,{})}ju.createRoot(document.getElementById("root")).render(k.jsx(g2,{}));
