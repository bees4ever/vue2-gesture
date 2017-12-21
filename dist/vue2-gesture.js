!function(e){function t(a){if(n[a])return n[a].exports;var o=n[a]={exports:{},id:a,loaded:!1};return e[a].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t){!function(){if(!e||!e.config||"vue2-Gesture@bees4ever.de"!==e.config.id){var e={};e.gloabal={id:"vue2-Gesture@bees4ever.de",domUuid:1,InternalKeyName:"vue2GestureInternalKey"},e.domCaches={},e.util={getType:function(e){var t;return("object"==(t=typeof e)?null==e&&"null"||Object.prototype.toString.call(e).slice(8,-1):t).toLowerCase()},deepClone:function(e){var t=this,n=t.getType(e);n="array"===n?[]:"object"===n?{}:e;for(var a in e)"array"===t.getType(e[a])||"object"===t.getType(e[a])?(n[a]="array"===t.getType(e[a])?[]:{},n[a]=arguments.callee.call(t,e[a])):n[a]=e[a];return n},isFunction:function(e){return!(!e||"[object Function]"!==Object.prototype.toString.call(e))}},e.config={maxSingleTapTimeInterval:300,maxSingleTapPageDistanceSquared:25,minLongtapTimeInterval:700,maxDoubleTapTimeInterval:300,maxDoubleTapPageDistanceSquared:64,gestureEventsToClick:["tap","longtap","touchstart"]},e.Statics={initEvents:function(t){var n=this,a=e.Statics.isInDomCaches(t);if(!a){var o=e.Statics.getDomCache(t);o.listenTouchEvents.touchstart=function(e){n.isPC()||n.isPrimaryTouch(e)||n.touchstartHandler(t,e)},o.listenTouchEvents.touchmove=function(e){n.isPC()||n.isPrimaryTouch(e)||n.touchmoveHandler(t,e)},o.listenTouchEvents.touchend=function(e){"touchend"==e.type&&(n.isPC()||n.isPrimaryTouch(e)||n.touchendHandler(t,e))},o.listenTouchEvents.click=function(e){n.clickHandler(t,e)},t.addEventListener("touchstart",o.listenTouchEvents.touchstart,!1),t.addEventListener("touchmove",o.listenTouchEvents.touchmove,!1),t.addEventListener("touchend",o.listenTouchEvents.touchend,!1),t.addEventListener("click",o.listenTouchEvents.click,!1)}},invokeHandler:function(t,n,a,o){var i=this;e.judgements[o](a)&&i.executeFn(t,n)},clickHandler:function(t,n){var a=this,o=e.Statics.getDomCache(t),i=(o.touch,o.gestureEvents.click);i&&a.executeFn(n,i),a.isPC()&&e.config.gestureEventsToClick.forEach(function(e){var t=o.gestureEvents[e];t&&a.executeFn(n,t)})},touchstartHandler:function(t,n){var a=this,o=e.Statics.getDomCache(t),i=o.touch,c=o.gestureEvents.touchstart;c&&a.executeFn(n,c),i.touchstartTime=n.timeStamp,i.touchstartCoord.pageX=n.touches[0].pageX,i.touchstartCoord.pageY=n.touches[0].pageY},touchmoveHandler:function(t,n){var a=this,o=e.Statics.getDomCache(t),i=(o.touch,o.gestureEvents.touchmove);i&&a.executeFn(n,i)},touchendHandler:function(t,n){var a=this,o=e.Statics.getDomCache(t),i=o.touch;i.touchendTime=n.timeStamp,i.touchendCoord.pageX=n.changedTouches[0].pageX,i.touchendCoord.pageY=n.changedTouches[0].pageY;for(var c in o.gestureEvents)a.invokeHandler(n,o.gestureEvents[c],i,c);i.lastTouchstartTime=i.touchstartTime,i.lastTouchendTime=i.touchendTime,i.lastTouchstartCoord=e.util.deepClone(i.touchstartCoord),i.lastTouchendCoord=e.util.deepClone(i.touchendCoord)},getDomCache:function(t){return e.domCaches[t[e.gloabal.InternalKeyName]]||(e.domCaches[t[e.gloabal.InternalKeyName]=e.gloabal.domUuid++]=this.initDomCache())},isInDomCaches:function(t){return!!e.domCaches[t[e.gloabal.InternalKeyName]]},unbindDirective:function(t){var n=e.Statics.getDomCache(t);e.Statics.removeDirectiveEventListeners(t,n),e.domCaches[t.el[e.gloabal.InternalKeyName]]=null,delete e.domCaches[t.el[e.gloabal.InternalKeyName]]},initDomCache:function(){return{touch:{touchstartTime:0,touchendTime:0,touchstartCoord:{},touchendCoord:{},lastTouchendTime:0,lastTouchstartTime:0,lastTouchstartCoord:{},lastTouchendCoord:{},get timeInterval(){return this.touchendTime-this.touchstartTime},get pageXDistance(){return this.touchendCoord.pageX-this.touchstartCoord.pageX},get pageYDistance(){return this.touchendCoord.pageY-this.touchstartCoord.pageY},get lastTimeInterval(){return this.lastTouchendTime-this.lastTouchstartTime},get lastPageXDistance(){return this.touchendCoord.pageX-this.touchstartCoord.pageX},get lastPageYDistance(){return this.touchendCoord.pageY-this.touchstartCoord.pageY},get deltaTime(){return this.touchendTime-this.lastTouchstartTime}},gestureEvents:{},listenTouchEvents:{}}},getEventNameByArg:function(t){var n=0===t.indexOf(":")?t.substr(1):t;return n=n.toLowerCase(),"function"==typeof e.judgements[n]&&n},isPrimaryTouch:function(e){return e.touches.length>1||e.scale&&1!==e.scale},isPC:function(){for(var e=navigator.userAgent,t=["Android","iPhone","Windows Phone","iPad","iPod"],n=!0,a=0;a<t.length;a++)if(e.indexOf(t[a])>0){n=!1;break}return n},removeDirectiveEventListeners:function(e,t){e.removeEventListener("touchstart",t.listenTouchEvents.touchstart),e.removeEventListener("touchmove",t.listenTouchEvents.touchmove),e.removeEventListener("touchend",t.listenTouchEvents.touchend),e.removeEventListener("click",t.listenTouchEvents.click)},executeFn:function(e,t){t.fn(e),"undefined"!=typeof t.modifiers&&(t.modifiers.stop&&e.stopPropagation(),t.modifiers.prevent&&e.preventDefault())}},e.judgements={tap:function(t){return t.timeInterval<e.config.maxSingleTapTimeInterval&&t.pageXDistance*t.pageXDistance+t.pageYDistance*t.pageYDistance<e.config.maxSingleTapPageDistanceSquared},longtap:function(t){return t.timeInterval>e.config.minLongtapTimeInterval&&t.pageXDistance*t.pageXDistance+t.pageYDistance*t.pageYDistance<e.config.maxSingleTapPageDistanceSquared},doubletap:function(t){return t.deltaTime<e.config.maxDoubleTapTimeInterval&&t.lastPageXDistance*t.lastPageXDistance+t.lastPageYDistance*t.lastPageYDistance<e.config.maxDoubleTapPageDistanceSquared&&t.timeInterval<e.config.maxSingleTapTimeInterval&&t.pageXDistance*t.pageXDistance+t.pageYDistance*t.pageYDistance<e.config.maxSingleTapPageDistanceSquared&&t.lastTimeInterval<e.config.maxSingleTapTimeInterval&&t.lastPageXDistance*t.lastPageXDistance+t.lastPageYDistance*t.lastPageYDistance<e.config.maxSingleTapPageDistanceSquared},swipe:function(t){return t.pageXDistance*t.pageXDistance+t.pageYDistance*t.pageYDistance>e.config.maxSingleTapPageDistanceSquared},swipeleft:function(e){return!!this.swipe(e)&&(e.pageXDistance<0&&Math.abs(e.pageXDistance)>Math.abs(e.pageYDistance))},swiperight:function(e){return!!this.swipe(e)&&(e.pageXDistance>0&&Math.abs(e.pageXDistance)>Math.abs(e.pageYDistance))},swipeup:function(e){return!!this.swipe(e)&&(e.pageYDistance<0&&Math.abs(e.pageYDistance)>Math.abs(e.pageXDistance))},swipedown:function(e){return!!this.swipe(e)&&(e.pageYDistance>0&&Math.abs(e.pageYDistance)>Math.abs(e.pageXDistance))},touchstart:function(){return!1},touchmove:function(){return!1},touchend:function(){return!0},click:function(){return!1}},Vue.component("vue2-gesture",{template:"<span><slot></slot></span>",props:{type:{type:String,default:function(){return"touch"}},call:{type:Function}},mounted:function(){if(e.Statics.initEvents(this.$el),"function"!=typeof this.call)return console.log(this.call),console.error('The expression of directive "v-gesture" must be a function!');var t=e.Statics.getEventNameByArg(this.type),n=e.Statics.getDomCache(this.$el);t&&(n.gestureEvents[t]={},n.gestureEvents[t].fn=this.call)},data:function(){return{}}})}}()}]);