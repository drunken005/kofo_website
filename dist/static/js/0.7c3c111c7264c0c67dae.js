webpackJsonp([0],{"4pbi":function(t,e,i){(function(i){var n;
/*!
 * VERSION: 1.13.1
 * DATE: 2014-07-22
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
/*!
 * VERSION: 1.13.1
 * DATE: 2014-07-22
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
!function(i,s){"use strict";var r=i.GreenSockGlobals=i.GreenSockGlobals||i;if(!r.TweenLite){var a,o,h,l,_,u=function(t){var e,i=t.split("."),n=r;for(e=0;i.length>e;e++)n[i[e]]=n=n[i[e]]||{};return n},c=u("com.greensock"),p=1e-10,f=function(t){var e,i=[],n=t.length;for(e=0;e!==n;i.push(t[e++]));return i},m=function(){},d=function(){var t=Object.prototype.toString,e=t.call([]);return function(i){return null!=i&&(i instanceof Array||"object"==typeof i&&!!i.push&&t.call(i)===e)}}(),v={},g=function(i,s,a,o){this.sc=v[i]?v[i].sc:[],v[i]=this,this.gsClass=null,this.func=a;var h=[];this.check=function(l){for(var _,c,p,f,m=s.length,d=m;--m>-1;)(_=v[s[m]]||new g(s[m],[])).gsClass?(h[m]=_.gsClass,d--):l&&_.sc.push(this);if(0===d&&a)for(p=(c=("com.greensock."+i).split(".")).pop(),f=u(c.join("."))[p]=this.gsClass=a.apply(a,h),o&&(r[p]=f,void 0!==(n=function(){return f}.apply(e,[]))&&(t.exports=n)),m=0;this.sc.length>m;m++)this.sc[m].check()},this.check(!0)},w=i._gsDefine=function(t,e,i,n){return new g(t,e,i,n)},y=c._class=function(t,e,i){return e=e||function(){},w(t,[],function(){return e},i),e};w.globals=r;var T=[0,0,1,1],P=[],b=y("easing.Ease",function(t,e,i,n){this._func=t,this._type=i||0,this._power=n||0,this._params=e?T.concat(e):T},!0),k=b.map={},S=b.register=function(t,e,i,n){for(var s,r,a,o,h=e.split(","),l=h.length,_=(i||"easeIn,easeOut,easeInOut").split(",");--l>-1;)for(r=h[l],s=n?y("easing."+r,null,!0):c.easing[r]||{},a=_.length;--a>-1;)o=_[a],k[r+"."+o]=k[o+r]=s[o]=t.getRatio?t:t[o]||new t};for((h=b.prototype)._calcEnd=!1,h.getRatio=function(t){if(this._func)return this._params[0]=t,this._func.apply(null,this._params);var e=this._type,i=this._power,n=1===e?1-t:2===e?t:.5>t?2*t:2*(1-t);return 1===i?n*=n:2===i?n*=n*n:3===i?n*=n*n*n:4===i&&(n*=n*n*n*n),1===e?1-n:2===e?n:.5>t?n/2:1-n/2},o=(a=["Linear","Quad","Cubic","Quart","Quint,Strong"]).length;--o>-1;)h=a[o]+",Power"+o,S(new b(null,null,1,o),h,"easeOut",!0),S(new b(null,null,2,o),h,"easeIn"+(0===o?",easeNone":"")),S(new b(null,null,3,o),h,"easeInOut");k.linear=c.easing.Linear.easeIn,k.swing=c.easing.Quad.easeInOut;var x=y("events.EventDispatcher",function(t){this._listeners={},this._eventTarget=t||this});(h=x.prototype).addEventListener=function(t,e,i,n,s){s=s||0;var r,a,o=this._listeners[t],h=0;for(null==o&&(this._listeners[t]=o=[]),a=o.length;--a>-1;)(r=o[a]).c===e&&r.s===i?o.splice(a,1):0===h&&s>r.pr&&(h=a+1);o.splice(h,0,{c:e,s:i,up:n,pr:s}),this!==l||_||l.wake()},h.removeEventListener=function(t,e){var i,n=this._listeners[t];if(n)for(i=n.length;--i>-1;)if(n[i].c===e)return void n.splice(i,1)},h.dispatchEvent=function(t){var e,i,n,s=this._listeners[t];if(s)for(e=s.length,i=this._eventTarget;--e>-1;)(n=s[e]).up?n.c.call(n.s||i,{type:t,target:i}):n.c.call(n.s||i)};var A=i.requestAnimationFrame,R=i.cancelAnimationFrame,E=Date.now||function(){return(new Date).getTime()},C=E();for(o=(a=["ms","moz","webkit","o"]).length;--o>-1&&!A;)A=i[a[o]+"RequestAnimationFrame"],R=i[a[o]+"CancelAnimationFrame"]||i[a[o]+"CancelRequestAnimationFrame"];y("Ticker",function(t,e){var i,n,s,r,a,o=this,h=E(),u=!1!==e&&A,c=500,f=33,d=function(t){var e,l,_=E()-C;_>c&&(h+=_-f),C+=_,o.time=(C-h)/1e3,e=o.time-a,(!i||e>0||!0===t)&&(o.frame++,a+=e+(e>=r?.004:r-e),l=!0),!0!==t&&(s=n(d)),l&&o.dispatchEvent("tick")};x.call(o),o.time=o.frame=0,o.tick=function(){d(!0)},o.lagSmoothing=function(t,e){c=t||1/p,f=Math.min(e,c,0)},o.sleep=function(){null!=s&&(u&&R?R(s):clearTimeout(s),n=m,s=null,o===l&&(_=!1))},o.wake=function(){null!==s?o.sleep():o.frame>10&&(C=E()-c+5),n=0===i?m:u&&A?A:function(t){return setTimeout(t,0|1e3*(a-o.time)+1)},o===l&&(_=!0),d(2)},o.fps=function(t){return arguments.length?(r=1/((i=t)||60),a=this.time+r,void o.wake()):i},o.useRAF=function(t){return arguments.length?(o.sleep(),u=t,void o.fps(i)):u},o.fps(t),setTimeout(function(){u&&(!s||5>o.frame)&&o.useRAF(!1)},1500)}),(h=c.Ticker.prototype=new c.events.EventDispatcher).constructor=c.Ticker;var I=y("core.Animation",function(t,e){if(this.vars=e=e||{},this._duration=this._totalDuration=t||0,this._delay=Number(e.delay)||0,this._timeScale=1,this._active=!0===e.immediateRender,this.data=e.data,this._reversed=!0===e.reversed,X){_||l.wake();var i=this.vars.useFrames?G:X;i.add(this,i._time),this.vars.paused&&this.paused(!0)}});l=I.ticker=new c.Ticker,(h=I.prototype)._dirty=h._gc=h._initted=h._paused=!1,h._totalTime=h._time=0,h._rawPrevTime=-1,h._next=h._last=h._onUpdate=h._timeline=h.timeline=null,h._paused=!1;var M=function(){_&&E()-C>2e3&&l.wake(),setTimeout(M,2e3)};M(),h.play=function(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},h.pause=function(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},h.resume=function(t,e){return null!=t&&this.seek(t,e),this.paused(!1)},h.seek=function(t,e){return this.totalTime(Number(t),!1!==e)},h.restart=function(t,e){return this.reversed(!1).paused(!1).totalTime(t?-this._delay:0,!1!==e,!0)},h.reverse=function(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},h.render=function(){},h.invalidate=function(){return this},h.isActive=function(){var t,e=this._timeline,i=this._startTime;return!e||!this._gc&&!this._paused&&e.isActive()&&(t=e.rawTime())>=i&&i+this.totalDuration()/this._timeScale>t},h._enabled=function(t,e){return _||l.wake(),this._gc=!t,this._active=this.isActive(),!0!==e&&(t&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!t&&this.timeline&&this._timeline._remove(this,!0)),!1},h._kill=function(){return this._enabled(!1,!1)},h.kill=function(t,e){return this._kill(t,e),this},h._uncache=function(t){for(var e=t?this:this.timeline;e;)e._dirty=!0,e=e.timeline;return this},h._swapSelfInParams=function(t){for(var e=t.length,i=t.concat();--e>-1;)"{self}"===t[e]&&(i[e]=this);return i},h.eventCallback=function(t,e,i,n){if("on"===(t||"").substr(0,2)){var s=this.vars;if(1===arguments.length)return s[t];null==e?delete s[t]:(s[t]=e,s[t+"Params"]=d(i)&&-1!==i.join("").indexOf("{self}")?this._swapSelfInParams(i):i,s[t+"Scope"]=n),"onUpdate"===t&&(this._onUpdate=e)}return this},h.delay=function(t){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+t-this._delay),this._delay=t,this):this._delay},h.duration=function(t){return arguments.length?(this._duration=this._totalDuration=t,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==t&&this.totalTime(this._totalTime*(t/this._duration),!0),this):(this._dirty=!1,this._duration)},h.totalDuration=function(t){return this._dirty=!1,arguments.length?this.duration(t):this._totalDuration},h.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(t>this._duration?this._duration:t,e)):this._time},h.totalTime=function(t,e,i){if(_||l.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>t&&!i&&(t+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var n=this._totalDuration,s=this._timeline;if(t>n&&!i&&(t=n),this._startTime=(this._paused?this._pauseTime:s._time)-(this._reversed?n-t:t)/this._timeScale,s._dirty||this._uncache(!1),s._timeline)for(;s._timeline;)s._timeline._time!==(s._startTime+s._totalTime)/s._timeScale&&s.totalTime(s._totalTime,!0),s=s._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==t||0===this._duration)&&(this.render(t,e,!1),L.length&&Y())}return this},h.progress=h.totalProgress=function(t,e){return arguments.length?this.totalTime(this.duration()*t,e):this._time/this.duration()},h.startTime=function(t){return arguments.length?(t!==this._startTime&&(this._startTime=t,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,t-this._delay)),this):this._startTime},h.timeScale=function(t){if(!arguments.length)return this._timeScale;if(t=t||p,this._timeline&&this._timeline.smoothChildTiming){var e=this._pauseTime,i=e||0===e?e:this._timeline.totalTime();this._startTime=i-(i-this._startTime)*this._timeScale/t}return this._timeScale=t,this._uncache(!1)},h.reversed=function(t){return arguments.length?(t!=this._reversed&&(this._reversed=t,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},h.paused=function(t){if(!arguments.length)return this._paused;if(t!=this._paused&&this._timeline){_||t||l.wake();var e=this._timeline,i=e.rawTime(),n=i-this._pauseTime;!t&&e.smoothChildTiming&&(this._startTime+=n,this._uncache(!1)),this._pauseTime=t?i:null,this._paused=t,this._active=this.isActive(),!t&&0!==n&&this._initted&&this.duration()&&this.render(e.smoothChildTiming?this._totalTime:(i-this._startTime)/this._timeScale,!0,!0)}return this._gc&&!t&&this._enabled(!0,!1),this};var O=y("core.SimpleTimeline",function(t){I.call(this,0,t),this.autoRemoveChildren=this.smoothChildTiming=!0});(h=O.prototype=new I).constructor=O,h.kill()._gc=!1,h._first=h._last=null,h._sortChildren=!1,h.add=h.insert=function(t,e){var i,n;if(t._startTime=Number(e||0)+t._delay,t._paused&&this!==t._timeline&&(t._pauseTime=t._startTime+(this.rawTime()-t._startTime)/t._timeScale),t.timeline&&t.timeline._remove(t,!0),t.timeline=t._timeline=this,t._gc&&t._enabled(!0,!0),i=this._last,this._sortChildren)for(n=t._startTime;i&&i._startTime>n;)i=i._prev;return i?(t._next=i._next,i._next=t):(t._next=this._first,this._first=t),t._next?t._next._prev=t:this._last=t,t._prev=i,this._timeline&&this._uncache(!0),this},h._remove=function(t,e){return t.timeline===this&&(e||t._enabled(!1,!0),t._prev?t._prev._next=t._next:this._first===t&&(this._first=t._next),t._next?t._next._prev=t._prev:this._last===t&&(this._last=t._prev),t._next=t._prev=t.timeline=null,this._timeline&&this._uncache(!0)),this},h.render=function(t,e,i){var n,s=this._first;for(this._totalTime=this._time=this._rawPrevTime=t;s;)n=s._next,(s._active||t>=s._startTime&&!s._paused)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=n},h.rawTime=function(){return _||l.wake(),this._totalTime};var D=y("TweenLite",function(t,e,n){if(I.call(this,e,n),this.render=D.prototype.render,null==t)throw"Cannot tween a null target.";this.target=t="string"!=typeof t?t:D.selector(t)||t;var s,r,a,o=t.jquery||t.length&&t!==i&&t[0]&&(t[0]===i||t[0].nodeType&&t[0].style&&!t.nodeType),h=this.vars.overwrite;if(this._overwrite=h=null==h?Q[D.defaultOverwrite]:"number"==typeof h?h>>0:Q[h],(o||t instanceof Array||t.push&&d(t))&&"number"!=typeof t[0])for(this._targets=a=f(t),this._propLookup=[],this._siblings=[],s=0;a.length>s;s++)(r=a[s])?"string"!=typeof r?r.length&&r!==i&&r[0]&&(r[0]===i||r[0].nodeType&&r[0].style&&!r.nodeType)?(a.splice(s--,1),this._targets=a=a.concat(f(r))):(this._siblings[s]=H(r,this,!1),1===h&&this._siblings[s].length>1&&W(r,this,null,1,this._siblings[s])):"string"==typeof(r=a[s--]=D.selector(r))&&a.splice(s+1,1):a.splice(s--,1);else this._propLookup={},this._siblings=H(t,this,!1),1===h&&this._siblings.length>1&&W(t,this,null,1,this._siblings);(this.vars.immediateRender||0===e&&0===this._delay&&!1!==this.vars.immediateRender)&&(this._time=-p,this.render(-this._delay))},!0),z=function(t){return t.length&&t!==i&&t[0]&&(t[0]===i||t[0].nodeType&&t[0].style&&!t.nodeType)};(h=D.prototype=new I).constructor=D,h.kill()._gc=!1,h.ratio=0,h._firstPT=h._targets=h._overwrittenProps=h._startAt=null,h._notifyPluginsOfEnabled=h._lazy=!1,D.version="1.13.1",D.defaultEase=h._ease=new b(null,null,1,1),D.defaultOverwrite="auto",D.ticker=l,D.autoSleep=!0,D.lagSmoothing=function(t,e){l.lagSmoothing(t,e)},D.selector=i.$||i.jQuery||function(t){var e=i.$||i.jQuery;return e?(D.selector=e,e(t)):"undefined"==typeof document?t:document.querySelectorAll?document.querySelectorAll(t):document.getElementById("#"===t.charAt(0)?t.substr(1):t)};var L=[],B={},N=D._internals={isArray:d,isSelector:z,lazyTweens:L},U=D._plugins={},F=N.tweenLookup={},j=0,q=N.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1},Q={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,true:1,false:0},G=I._rootFramesTimeline=new O,X=I._rootTimeline=new O,Y=N.lazyRender=function(){var t=L.length;for(B={};--t>-1;)(a=L[t])&&!1!==a._lazy&&(a.render(a._lazy,!1,!0),a._lazy=!1);L.length=0};X._startTime=l.time,G._startTime=l.frame,X._active=G._active=!0,setTimeout(Y,1),I._updateRoot=D.render=function(){var t,e,i;if(L.length&&Y(),X.render((l.time-X._startTime)*X._timeScale,!1,!1),G.render((l.frame-G._startTime)*G._timeScale,!1,!1),L.length&&Y(),!(l.frame%120)){for(i in F){for(t=(e=F[i].tweens).length;--t>-1;)e[t]._gc&&e.splice(t,1);0===e.length&&delete F[i]}if((!(i=X._first)||i._paused)&&D.autoSleep&&!G._first&&1===l._listeners.tick.length){for(;i&&i._paused;)i=i._next;i||l.sleep()}}},l.addEventListener("tick",I._updateRoot);var H=function(t,e,i){var n,s,r=t._gsTweenID;if(F[r||(t._gsTweenID=r="t"+j++)]||(F[r]={target:t,tweens:[]}),e&&((n=F[r].tweens)[s=n.length]=e,i))for(;--s>-1;)n[s]===e&&n.splice(s,1);return F[r].tweens},W=function(t,e,i,n,s){var r,a,o,h;if(1===n||n>=4){for(h=s.length,r=0;h>r;r++)if((o=s[r])!==e)o._gc||o._enabled(!1,!1)&&(a=!0);else if(5===n)break;return a}var l,_=e._startTime+p,u=[],c=0,f=0===e._duration;for(r=s.length;--r>-1;)(o=s[r])===e||o._gc||o._paused||(o._timeline!==e._timeline?(l=l||$(e,0,f),0===$(o,l,f)&&(u[c++]=o)):_>=o._startTime&&o._startTime+o.totalDuration()/o._timeScale>_&&((f||!o._initted)&&2e-10>=_-o._startTime||(u[c++]=o)));for(r=c;--r>-1;)o=u[r],2===n&&o._kill(i,t)&&(a=!0),(2!==n||!o._firstPT&&o._initted)&&o._enabled(!1,!1)&&(a=!0);return a},$=function(t,e,i){for(var n=t._timeline,s=n._timeScale,r=t._startTime;n._timeline;){if(r+=n._startTime,s*=n._timeScale,n._paused)return-100;n=n._timeline}return(r/=s)>e?r-e:i&&r===e||!t._initted&&2*p>r-e?p:(r+=t.totalDuration()/t._timeScale/s)>e+p?0:r-e-p};h._init=function(){var t,e,i,n,s,r=this.vars,a=this._overwrittenProps,o=this._duration,h=!!r.immediateRender,l=r.ease;if(r.startAt){for(n in this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),s={},r.startAt)s[n]=r.startAt[n];if(s.overwrite=!1,s.immediateRender=!0,s.lazy=h&&!1!==r.lazy,s.startAt=s.delay=null,this._startAt=D.to(this.target,0,s),h)if(this._time>0)this._startAt=null;else if(0!==o)return}else if(r.runBackwards&&0!==o)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{for(n in i={},r)q[n]&&"autoCSS"!==n||(i[n]=r[n]);if(i.overwrite=0,i.data="isFromStart",i.lazy=h&&!1!==r.lazy,i.immediateRender=h,this._startAt=D.to(this.target,0,i),h){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1)}if(this._ease=l=l?l instanceof b?l:"function"==typeof l?new b(l,r.easeParams):k[l]||D.defaultEase:D.defaultEase,r.easeParams instanceof Array&&l.config&&(this._ease=l.config.apply(l,r.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(t=this._targets.length;--t>-1;)this._initProps(this._targets[t],this._propLookup[t]={},this._siblings[t],a?a[t]:null)&&(e=!0);else e=this._initProps(this.target,this._propLookup,this._siblings,a);if(e&&D._onPluginEvent("_onInitAllProps",this),a&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),r.runBackwards)for(i=this._firstPT;i;)i.s+=i.c,i.c=-i.c,i=i._next;this._onUpdate=r.onUpdate,this._initted=!0},h._initProps=function(t,e,n,s){var r,a,o,h,l,_;if(null==t)return!1;for(r in B[t._gsTweenID]&&Y(),this.vars.css||t.style&&t!==i&&t.nodeType&&U.css&&!1!==this.vars.autoCSS&&function(t,e){var i,n={};for(i in t)q[i]||i in e&&"transform"!==i&&"x"!==i&&"y"!==i&&"width"!==i&&"height"!==i&&"className"!==i&&"border"!==i||!(!U[i]||U[i]&&U[i]._autoCSS)||(n[i]=t[i],delete t[i]);t.css=n}(this.vars,t),this.vars){if(_=this.vars[r],q[r])_&&(_ instanceof Array||_.push&&d(_))&&-1!==_.join("").indexOf("{self}")&&(this.vars[r]=_=this._swapSelfInParams(_,this));else if(U[r]&&(h=new U[r])._onInitTween(t,this.vars[r],this)){for(this._firstPT=l={_next:this._firstPT,t:h,p:"setRatio",s:0,c:1,f:!0,n:r,pg:!0,pr:h._priority},a=h._overwriteProps.length;--a>-1;)e[h._overwriteProps[a]]=this._firstPT;(h._priority||h._onInitAllProps)&&(o=!0),(h._onDisable||h._onEnable)&&(this._notifyPluginsOfEnabled=!0)}else this._firstPT=e[r]=l={_next:this._firstPT,t:t,p:r,f:"function"==typeof t[r],n:r,pg:!1,pr:0},l.s=l.f?t[r.indexOf("set")||"function"!=typeof t["get"+r.substr(3)]?r:"get"+r.substr(3)]():parseFloat(t[r]),l.c="string"==typeof _&&"="===_.charAt(1)?parseInt(_.charAt(0)+"1",10)*Number(_.substr(2)):Number(_)-l.s||0;l&&l._next&&(l._next._prev=l)}return s&&this._kill(s,t)?this._initProps(t,e,n,s):this._overwrite>1&&this._firstPT&&n.length>1&&W(t,this,e,this._overwrite,n)?(this._kill(e,t),this._initProps(t,e,n,s)):(this._firstPT&&(!1!==this.vars.lazy&&this._duration||this.vars.lazy&&!this._duration)&&(B[t._gsTweenID]=!0),o)},h.render=function(t,e,i){var n,s,r,a,o=this._time,h=this._duration,l=this._rawPrevTime;if(t>=h)this._totalTime=this._time=h,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(n=!0,s="onComplete"),0===h&&(this._initted||!this.vars.lazy||i)&&(this._startTime===this._timeline._duration&&(t=0),(0===t||0>l||l===p)&&l!==t&&(i=!0,l>p&&(s="onReverseComplete")),this._rawPrevTime=a=!e||t||l===t?t:p);else if(1e-7>t)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==o||0===h&&l>0&&l!==p)&&(s="onReverseComplete",n=this._reversed),0>t?(this._active=!1,0===h&&(this._initted||!this.vars.lazy||i)&&(l>=0&&(i=!0),this._rawPrevTime=a=!e||t||l===t?t:p)):this._initted||(i=!0);else if(this._totalTime=this._time=t,this._easeType){var _=t/h,u=this._easeType,c=this._easePower;(1===u||3===u&&_>=.5)&&(_=1-_),3===u&&(_*=2),1===c?_*=_:2===c?_*=_*_:3===c?_*=_*_*_:4===c&&(_*=_*_*_*_),this.ratio=1===u?1-_:2===u?_:.5>t/h?_/2:1-_/2}else this.ratio=this._ease.getRatio(t/h);if(this._time!==o||i){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!i&&this._firstPT&&(!1!==this.vars.lazy&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=o,this._rawPrevTime=l,L.push(this),void(this._lazy=t);this._time&&!n?this.ratio=this._ease.getRatio(this._time/h):n&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(!1!==this._lazy&&(this._lazy=!1),this._active||!this._paused&&this._time!==o&&t>=0&&(this._active=!0),0===o&&(this._startAt&&(t>=0?this._startAt.render(t,e,i):s||(s="_dummyGS")),this.vars.onStart&&(0!==this._time||0===h)&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||P))),r=this._firstPT;r;)r.f?r.t[r.p](r.c*this.ratio+r.s):r.t[r.p]=r.c*this.ratio+r.s,r=r._next;this._onUpdate&&(0>t&&this._startAt&&this._startTime&&this._startAt.render(t,e,i),e||(this._time!==o||n)&&this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||P)),s&&(!this._gc||i)&&(0>t&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(t,e,i),n&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[s]&&this.vars[s].apply(this.vars[s+"Scope"]||this,this.vars[s+"Params"]||P),0===h&&this._rawPrevTime===p&&a!==p&&(this._rawPrevTime=0))}},h._kill=function(t,e){if("all"===t&&(t=null),null==t&&(null==e||e===this.target))return this._lazy=!1,this._enabled(!1,!1);var i,n,s,r,a,o,h,l;if(e="string"!=typeof e?e||this._targets||this.target:D.selector(e)||e,(d(e)||z(e))&&"number"!=typeof e[0])for(i=e.length;--i>-1;)this._kill(t,e[i])&&(o=!0);else{if(this._targets){for(i=this._targets.length;--i>-1;)if(e===this._targets[i]){a=this._propLookup[i]||{},this._overwrittenProps=this._overwrittenProps||[],n=this._overwrittenProps[i]=t?this._overwrittenProps[i]||{}:"all";break}}else{if(e!==this.target)return!1;a=this._propLookup,n=this._overwrittenProps=t?this._overwrittenProps||{}:"all"}if(a){for(s in h=t||a,l=t!==n&&"all"!==n&&t!==a&&("object"!=typeof t||!t._tempKill),h)(r=a[s])&&(r.pg&&r.t._kill(h)&&(o=!0),r.pg&&0!==r.t._overwriteProps.length||(r._prev?r._prev._next=r._next:r===this._firstPT&&(this._firstPT=r._next),r._next&&(r._next._prev=r._prev),r._next=r._prev=null),delete a[s]),l&&(n[s]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return o},h.invalidate=function(){return this._notifyPluginsOfEnabled&&D._onPluginEvent("_onDisable",this),this._firstPT=null,this._overwrittenProps=null,this._onUpdate=null,this._startAt=null,this._initted=this._active=this._notifyPluginsOfEnabled=this._lazy=!1,this._propLookup=this._targets?{}:[],this},h._enabled=function(t,e){if(_||l.wake(),t&&this._gc){var i,n=this._targets;if(n)for(i=n.length;--i>-1;)this._siblings[i]=H(n[i],this,!0);else this._siblings=H(this.target,this,!0)}return I.prototype._enabled.call(this,t,e),!(!this._notifyPluginsOfEnabled||!this._firstPT)&&D._onPluginEvent(t?"_onEnable":"_onDisable",this)},D.to=function(t,e,i){return new D(t,e,i)},D.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new D(t,e,i)},D.fromTo=function(t,e,i,n){return n.startAt=i,n.immediateRender=0!=n.immediateRender&&0!=i.immediateRender,new D(t,e,n)},D.delayedCall=function(t,e,i,n,s){return new D(e,0,{delay:t,onComplete:e,onCompleteParams:i,onCompleteScope:n,onReverseComplete:e,onReverseCompleteParams:i,onReverseCompleteScope:n,immediateRender:!1,useFrames:s,overwrite:0})},D.set=function(t,e){return new D(t,0,e)},D.getTweensOf=function(t,e){if(null==t)return[];var i,n,s,r;if(t="string"!=typeof t?t:D.selector(t)||t,(d(t)||z(t))&&"number"!=typeof t[0]){for(i=t.length,n=[];--i>-1;)n=n.concat(D.getTweensOf(t[i],e));for(i=n.length;--i>-1;)for(r=n[i],s=i;--s>-1;)r===n[s]&&n.splice(i,1)}else for(i=(n=H(t).concat()).length;--i>-1;)(n[i]._gc||e&&!n[i].isActive())&&n.splice(i,1);return n},D.killTweensOf=D.killDelayedCallsTo=function(t,e,i){"object"==typeof e&&(i=e,e=!1);for(var n=D.getTweensOf(t,e),s=n.length;--s>-1;)n[s]._kill(i,t)};var J=y("plugins.TweenPlugin",function(t,e){this._overwriteProps=(t||"").split(","),this._propName=this._overwriteProps[0],this._priority=e||0,this._super=J.prototype},!0);if(h=J.prototype,J.version="1.10.1",J.API=2,h._firstPT=null,h._addTween=function(t,e,i,n,s,r){var a,o;return null!=n&&(a="number"==typeof n||"="!==n.charAt(1)?Number(n)-i:parseInt(n.charAt(0)+"1",10)*Number(n.substr(2)))?(this._firstPT=o={_next:this._firstPT,t:t,p:e,s:i,c:a,f:"function"==typeof t[e],n:s||e,r:r},o._next&&(o._next._prev=o),o):void 0},h.setRatio=function(t){for(var e,i=this._firstPT;i;)e=i.c*t+i.s,i.r?e=Math.round(e):1e-6>e&&e>-1e-6&&(e=0),i.f?i.t[i.p](e):i.t[i.p]=e,i=i._next},h._kill=function(t){var e,i=this._overwriteProps,n=this._firstPT;if(null!=t[this._propName])this._overwriteProps=[];else for(e=i.length;--e>-1;)null!=t[i[e]]&&i.splice(e,1);for(;n;)null!=t[n.n]&&(n._next&&(n._next._prev=n._prev),n._prev?(n._prev._next=n._next,n._prev=null):this._firstPT===n&&(this._firstPT=n._next)),n=n._next;return!1},h._roundProps=function(t,e){for(var i=this._firstPT;i;)(t[this._propName]||null!=i.n&&t[i.n.split(this._propName+"_").join("")])&&(i.r=e),i=i._next},D._onPluginEvent=function(t,e){var i,n,s,r,a,o=e._firstPT;if("_onInitAllProps"===t){for(;o;){for(a=o._next,n=s;n&&n.pr>o.pr;)n=n._next;(o._prev=n?n._prev:r)?o._prev._next=o:s=o,(o._next=n)?n._prev=o:r=o,o=a}o=e._firstPT=s}for(;o;)o.pg&&"function"==typeof o.t[t]&&o.t[t]()&&(i=!0),o=o._next;return i},J.activate=function(t){for(var e=t.length;--e>-1;)t[e].API===J.API&&(U[(new t[e])._propName]=t[e]);return!0},w.plugin=function(t){if(!(t&&t.propName&&t.init&&t.API))throw"illegal plugin definition.";var e,i=t.propName,n=t.priority||0,s=t.overwriteProps,r={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_roundProps",initAll:"_onInitAllProps"},a=y("plugins."+i.charAt(0).toUpperCase()+i.substr(1)+"Plugin",function(){J.call(this,i,n),this._overwriteProps=s||[]},!0===t.global),o=a.prototype=new J(i);for(e in o.constructor=a,a.API=t.API,r)"function"==typeof t[e]&&(o[r[e]]=t[e]);return a.version=t.version,J.activate([a]),a},a=i._gsQueue){for(o=0;a.length>o;o++)a[o]();for(h in v)v[h].func||i.console.log("GSAP encountered missing dependency: com.greensock."+h)}_=!1}}(void 0!==t&&t.exports&&void 0!==i?i:this||window);
/*!
 * VERSION: beta 1.9.4
 * DATE: 2014-07-17
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var s=void 0!==t&&t.exports&&void 0!==i?i:this||window;(s._gsQueue||(s._gsQueue=[])).push(function(){"use strict";s._gsDefine("easing.Back",["easing.Ease"],function(t){var e,i,n,r=s.GreenSockGlobals||s,a=r.com.greensock,o=2*Math.PI,h=Math.PI/2,l=a._class,_=function(e,i){var n=l("easing."+e,function(){},!0),s=n.prototype=new t;return s.constructor=n,s.getRatio=i,n},u=t.register||function(){},c=function(t,e,i,n){var s=l("easing."+t,{easeOut:new e,easeIn:new i,easeInOut:new n},!0);return u(s,t),s},p=function(t,e,i){this.t=t,this.v=e,i&&(this.next=i,i.prev=this,this.c=i.v-e,this.gap=i.t-t)},f=function(e,i){var n=l("easing."+e,function(t){this._p1=t||0===t?t:1.70158,this._p2=1.525*this._p1},!0),s=n.prototype=new t;return s.constructor=n,s.getRatio=i,s.config=function(t){return new n(t)},n},m=c("Back",f("BackOut",function(t){return(t-=1)*t*((this._p1+1)*t+this._p1)+1}),f("BackIn",function(t){return t*t*((this._p1+1)*t-this._p1)}),f("BackInOut",function(t){return 1>(t*=2)?.5*t*t*((this._p2+1)*t-this._p2):.5*((t-=2)*t*((this._p2+1)*t+this._p2)+2)})),d=l("easing.SlowMo",function(t,e,i){e=e||0===e?e:.7,null==t?t=.7:t>1&&(t=1),this._p=1!==t?e:0,this._p1=(1-t)/2,this._p2=t,this._p3=this._p1+this._p2,this._calcEnd=!0===i},!0),v=d.prototype=new t;return v.constructor=d,v.getRatio=function(t){var e=t+(.5-t)*this._p;return this._p1>t?this._calcEnd?1-(t=1-t/this._p1)*t:e-(t=1-t/this._p1)*t*t*t*e:t>this._p3?this._calcEnd?1-(t=(t-this._p3)/this._p1)*t:e+(t-e)*(t=(t-this._p3)/this._p1)*t*t*t:this._calcEnd?1:e},d.ease=new d(.7,.7),v.config=d.config=function(t,e,i){return new d(t,e,i)},(v=(e=l("easing.SteppedEase",function(t){t=t||1,this._p1=1/t,this._p2=t+1},!0)).prototype=new t).constructor=e,v.getRatio=function(t){return 0>t?t=0:t>=1&&(t=.999999999),(this._p2*t>>0)*this._p1},v.config=e.config=function(t){return new e(t)},(v=(i=l("easing.RoughEase",function(e){for(var i,n,s,r,a,o,h=(e=e||{}).taper||"none",l=[],_=0,u=0|(e.points||20),c=u,f=!1!==e.randomize,m=!0===e.clamp,d=e.template instanceof t?e.template:null,v="number"==typeof e.strength?.4*e.strength:.4;--c>-1;)i=f?Math.random():1/u*c,n=d?d.getRatio(i):i,"none"===h?s=v:"out"===h?s=(r=1-i)*r*v:"in"===h?s=i*i*v:.5>i?s=.5*(r=2*i)*r*v:s=.5*(r=2*(1-i))*r*v,f?n+=Math.random()*s-.5*s:c%2?n+=.5*s:n-=.5*s,m&&(n>1?n=1:0>n&&(n=0)),l[_++]={x:i,y:n};for(l.sort(function(t,e){return t.x-e.x}),o=new p(1,1,null),c=u;--c>-1;)a=l[c],o=new p(a.x,a.y,o);this._prev=new p(0,0,0!==o.t?o:o.next)},!0)).prototype=new t).constructor=i,v.getRatio=function(t){var e=this._prev;if(t>e.t){for(;e.next&&t>=e.t;)e=e.next;e=e.prev}else for(;e.prev&&e.t>=t;)e=e.prev;return this._prev=e,e.v+(t-e.t)/e.gap*e.c},v.config=function(t){return new i(t)},i.ease=new i,c("Bounce",_("BounceOut",function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}),_("BounceIn",function(t){return 1/2.75>(t=1-t)?1-7.5625*t*t:2/2.75>t?1-(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?1-(7.5625*(t-=2.25/2.75)*t+.9375):1-(7.5625*(t-=2.625/2.75)*t+.984375)}),_("BounceInOut",function(t){var e=.5>t;return t=1/2.75>(t=e?1-2*t:2*t-1)?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,e?.5*(1-t):.5*t+.5})),c("Circ",_("CircOut",function(t){return Math.sqrt(1-(t-=1)*t)}),_("CircIn",function(t){return-(Math.sqrt(1-t*t)-1)}),_("CircInOut",function(t){return 1>(t*=2)?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)})),c("Elastic",(n=function(e,i,n){var s=l("easing."+e,function(t,e){this._p1=t||1,this._p2=e||n,this._p3=this._p2/o*(Math.asin(1/this._p1)||0)},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,r.config=function(t,e){return new s(t,e)},s})("ElasticOut",function(t){return this._p1*Math.pow(2,-10*t)*Math.sin((t-this._p3)*o/this._p2)+1},.3),n("ElasticIn",function(t){return-this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*o/this._p2)},.3),n("ElasticInOut",function(t){return 1>(t*=2)?-.5*this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*o/this._p2):.5*this._p1*Math.pow(2,-10*(t-=1))*Math.sin((t-this._p3)*o/this._p2)+1},.45)),c("Expo",_("ExpoOut",function(t){return 1-Math.pow(2,-10*t)}),_("ExpoIn",function(t){return Math.pow(2,10*(t-1))-.001}),_("ExpoInOut",function(t){return 1>(t*=2)?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*(t-1)))})),c("Sine",_("SineOut",function(t){return Math.sin(t*h)}),_("SineIn",function(t){return 1-Math.cos(t*h)}),_("SineInOut",function(t){return-.5*(Math.cos(Math.PI*t)-1)})),l("easing.EaseLookup",{find:function(e){return t.map[e]}},!0),u(r.SlowMo,"SlowMo","ease,"),u(i,"RoughEase","ease,"),u(e,"SteppedEase","ease,"),m},!0)}),s._gsDefine&&s._gsQueue.pop()(),function(){var t,e,i,n,s,r,a,o=!0;function h(t){var e=posy=0;t.pageX||t.pageY?(e=t.pageX,posy=t.pageY):(t.clientX||t.clientY)&&(e=t.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,posy=t.clientY+document.body.scrollTop+document.documentElement.scrollTop),a.x=e,a.y=posy}function l(){o=!(document.body.scrollTop>e)}function _(){t=window.innerWidth,e=window.innerHeight,i.style.height=e+"px",n.width=t,n.height=e}function u(){if(o)for(var i in s.clearRect(0,0,t,e),r)Math.abs(m(a,r[i]))<4e3?(r[i].active=.3,r[i].circle.active=.6):Math.abs(m(a,r[i]))<2e4?(r[i].active=.1,r[i].circle.active=.3):Math.abs(m(a,r[i]))<4e4?(r[i].active=.02,r[i].circle.active=.1):(r[i].active=0,r[i].circle.active=0),p(r[i]),r[i].circle.draw();requestAnimationFrame(u)}function c(t){TweenLite.to(t,1+1*Math.random(),{x:t.originX-50+100*Math.random(),y:t.originY-50+100*Math.random(),ease:Circ.easeInOut,onComplete:function(){c(t)}})}function p(t){if(t.active)for(var e in t.closest)s.beginPath(),s.moveTo(t.x,t.y),s.lineTo(t.closest[e].x,t.closest[e].y),s.strokeStyle="rgba(255,255,255,"+t.active+")",s.stroke()}function f(t,e,i){var n=this;n.pos=t||null,n.radius=e||null,n.color=i||null,this.draw=function(){n.active&&(s.beginPath(),s.arc(n.pos.x,n.pos.y,n.radius,0,2*Math.PI,!1),s.fillStyle="rgba(255,255,255,"+n.active+")",s.fill())}}function m(t,e){return Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)}!function(){t=window.innerWidth,e=window.innerHeight,a={x:t/2,y:e/2},(i=document.getElementById("nav-header")).style.height=e+"px",(n=document.getElementById("header-canvas")).width=t,n.height=e,s=n.getContext("2d"),r=[];for(var o=0;o<t;o+=t/20)for(var h=0;h<e;h+=e/20){var l=o+Math.random()*t/20,_=h+Math.random()*e/20,u={x:l,originX:l,y:_,originY:_};r.push(u)}for(var c=0;c<r.length;c++){for(var p=[],d=r[c],v=0;v<r.length;v++){var g=r[v];if(d!=g){for(var w=!1,y=0;y<5;y++)w||void 0==p[y]&&(p[y]=g,w=!0);for(var y=0;y<5;y++)w||m(d,g)<m(d,p[y])&&(p[y]=g,w=!0)}}d.closest=p}for(var c in r){var T=new f(r[c],2+2*Math.random(),"rgba(255,255,255,0.8)");r[c].circle=T}}(),function(){for(var t in u(),r)c(r[t])}(),function(){"ontouchstart"in window||window.addEventListener("mousemove",h);window.addEventListener("scroll",l),window.addEventListener("resize",_)}()}()}).call(e,i("DuR2"))}});
//# sourceMappingURL=0.7c3c111c7264c0c67dae.js.map