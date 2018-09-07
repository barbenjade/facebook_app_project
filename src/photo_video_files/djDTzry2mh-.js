if (self.CavalryLogger) { CavalryLogger.start_js(["6koA8"]); }

__d("BrowseEmptyResult",["csx","DOMQuery","UIPagelet","$"],(function(a,b,c,d,e,f,g){__p&&__p();a={init:function(a,c,d){__p&&__p();var e=[],f=!1;if(a===null)return;for(var g=0;g<a.length;g++){var h=b("$")(a[g]);if(a[g]==="initial_browse_result"){var i=b("DOMQuery").scry(h,"._58b7");i.length>0&&(f=!0)}if(h!==null&&h.textContent){i=b("DOMQuery").scry(h,"._jyu");h=i!=null;h||e.push(a[g])}}e.length===0&&!f&&(a&&a.length===0,b("UIPagelet").loadFromEndpoint("BrowsePageletNoContentError",c,d,{usePipe:!1}))}};e.exports=a}),null);
__d("BrowseMouseSpeedTracker",["Event","removeFromArray"],(function(a,b,c,d,e,f){__p&&__p();var g=50,h=null,i=null,j=[],k={x:0,y:0},l=0,m=[{x:0,y:0},{x:0,y:0}];function n(){m[l].x=k.x,m[l].y=k.y,l=(l+1)%2}function o(){var a=m[0].x-m[1].x,b=m[0].y-m[1].y;return Math.sqrt(a*a+b*b)*(1e3/g)}function p(){if(h)return;i=b("Event").listen(document.body,"mousemove",function(event){k.x=event.pageX||event.screenX,k.y=event.pageY||event.screenY});h=window.setInterval(function(){n(),r(o())},g)}function q(){h&&(window.clearInterval(h),i.remove(),h=null)}function r(a){j.forEach(function(b){a<b.velocity&&(b.callback(a),s(b))})}function s(a){b("removeFromArray")(j,a),j.length||q()}a={addTrigger:function(a,b){a={velocity:a,callback:b};p();j.push(a);return{remove:s.bind(null,a)}}};e.exports=a}),null);
__d("BrowseRunOnLeave",["Run"],(function(a,b,c,d,e,f){a={register:function(a){b("Run").onLeave(a),this.handlers=(this.handlers||[]).concat(a)},cleanup:function(){this.handlers.forEach(function(a){return a.call(null,{})}),this.handlers=[]}};e.exports=a}),null);
__d("BrowseMouse",["cx","BrowseMouseSpeedTracker","BrowseRunOnLeave","CSS","DataStore","DOM","Event","Parent","Toggler","removeFromArray"],(function(a,b,c,d,e,f,g){__p&&__p();var h=500,i="_3u0",j="_3u1",k=null,l=[];function m(a){return b("Parent").byClass(a,j)}function n(a){return"browse-"+(a?"over":"out")}function a(a){return b("CSS").addClass(a,j)}function c(a,c,d,e){var f=m(c);e||l.push({element:c,callback:d});if(f){e=n(a);c=b("DataStore").get(f,e,[]);b("DataStore").set(f,e,c.concat(d));return f}}function o(a,c){if(a){b("CSS").conditionClass(a,i,c);a=b("DataStore").get(a,n(c));a&&a.forEach(function(a){a()})}}function p(a){var c=a.element;["browse-over","browse-out"].forEach(function(d){var e=b("DataStore").get(c,d);e&&(b("removeFromArray")(e,a.callback),e.length||b("DataStore").remove(c,d))})}function d(){__p&&__p();var a=null;if(k)return;k=b("Event").listen(document.body,"mouseover",function(c){__p&&__p();var d=m(c.getTarget());if(!d||d==a)return;var e=null,f=null,g=!1;a=d;var i=b("BrowseMouseSpeedTracker").addTrigger(h,function(){o(d,!0),g=!0}),j=function(){i.remove(),l.remove(),e&&e.remove(),f&&f.unsubscribe()},k=function(){j(),g&&o(d,!1),a=null},l=b("Event").listen(d,"mouseleave",function(){var a=b("Toggler").getActive();a&&b("DOM").contains(d,a)?(f=b("Toggler").subscribe("hide",k),e=b("Event").listen(d,"mouseover",j)):k()})});b("BrowseRunOnLeave").register(function(){while(l.length)p(l.pop())})}f={init:d,makeTarget:a,onMouseOver:c.bind(null,!0),onMouseOut:c.bind(null,!1),removeListeners:p};e.exports=f}),null);
__d("BrowseScrollingPager",["Arbiter","CSS","DOM","OnVisible","Run","SearchFunnelLogger","SubscriptionsHandler","UIPagelet","killswitch"],(function(a,b,c,d,e,f){__p&&__p();var g=800,h=[],i,j=0;function k(a,c,d,e,f,h,j){"use strict";this.loadingNode=a,this.globalData=c,this.visibleBuffer=d?d:g,this.sessionID=f,this.query=e,this.typeaheadSID=h,this.unitID=j,this.subscriptionsHandler=new(b("SubscriptionsHandler"))(),i&&this.pageletComplete(i),i=null,b("killswitch")("SEARCH_WWW_CLEAN_BROWSE_SCROLLING_PAGER_REQUESTS")||b("Run").onCleanupOrLeave(a,function(){return this.destroy()}.bind(this))}k.prototype.pageletComplete=function(a){"use strict";this.pageData=a,b("Arbiter").inform("BrowseScrollingPageletLoaded"),setTimeout(this.$1.bind(this),1e3)};k.prototype.destroy=function(){"use strict";this.pageletLoadHandler&&this.pageletLoadHandler.cancel(),this.loadingNode=null,this.subscriptionsHandler.release()};k.prototype.$1=function(){"use strict";if(!this.loadingNode)return;else this.pageData?(b("CSS").show(this.loadingNode),this.subscriptionsHandler.addSubscriptions(new(b("OnVisible"))(this.loadingNode,this.$2.bind(this),!1,this.visibleBuffer))):b("CSS").hide(this.loadingNode)};k.prototype.$3=function(){"use strict";return"fbBrowseScrollingPagerContainer"+j++};k.prototype.$2=function(){"use strict";if(this.$4)return;b("CSS").show(this.loadingNode.firstChild);this.contentContainer=b("DOM").create("div",{id:this.$3()});b("DOM").insertBefore(this.loadingNode,this.contentContainer);this.pageletLoadHandler=b("UIPagelet").loadFromEndpoint("BrowseScrollingSetPagelet",this.contentContainer.id,babelHelpers["extends"]({},this.globalData,this.pageData),{constHeight:!0,sid:this.globalData.typeahead_sid||0,displayCallback:this.$5.bind(this)})};k.prototype.$5=function(a){"use strict";try{a()}catch(a){this.$4=!0}finally{this.loadingNode&&b("CSS").hide(this.loadingNode.firstChild)}};k.init=function(a,b,c,d,e,f,g){a=new k(a,b,c,d,e,f,g);h.push(a)};k.pageletComplete=function(a){var c=h[h.length-1];a||b("SearchFunnelLogger").logEndOfSERPResults(c.query,c.sessionID,c.typeaheadSID,c.unitID);c?c.pageletComplete.call(c,a):i=a};k.destroyAllPagers=function(){h.forEach(function(a){a.destroy()}),h=[]};b("Arbiter").subscribe("BrowseScrollingPager/destroyIfNotLast",function(){if(h.length>1){var a=h.pop();a.destroy()}});e.exports=k}),null);
__d("BrowseWindowTransitions",["Arbiter","BrowseClientEventLogger","Event","NavigationMessage","Run","SearchFunnelLogger","SubscriptionsHandler"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={init:function(a,c,d,e,f,g,h){this.subscriptions=new(b("SubscriptionsHandler"))(),this.currentSessionID=a,this.currentVertical=c,this.logData("window_load"),b("SearchFunnelLogger").logSERPLoaded(a,e,d,f,g,h),b("Run").onLeave(function(){this.logData("window_transition_to_fb_page"),this.cleanup()}.bind(this)),this.unLoadAttached||(this.unLoadAttached=!0,b("Run").onUnload(function(){this.logData("window_unloaded")}.bind(this))),this.subscriptions.addSubscriptions(b("Event").listen(window,"focus",function(){this.logData("window_focus")}.bind(this)),b("Event").listen(window,"blur",function(){this.logData("window_blur")}.bind(this)),b("Arbiter").subscribe("pre_page_transition",function(event,a){this.logData("window_pre_page_transition")}.bind(this)),b("Arbiter").subscribe(b("NavigationMessage").NAVIGATION_BEGIN,function(event,a){this.logData("window_transition_to_LHC"),this.cleanup()}.bind(this)),b("Arbiter").subscribe("BlueBar/homeClick",function(){this.logData("window_transition_to_home_click"),this.cleanup()}.bind(this)))},logData:function(event){b("BrowseClientEventLogger").logData(event,this.currentSessionID,this.currentVertical)},cleanup:function(){this.subscriptions.release()}};e.exports=a}),null);
__d("DesktopVisibilityTracking",["Arbiter","ErrorUtils","LitestandMessages","Run","VisibilityTracking","VisibilityTrackingConfig"],(function(a,b,c,d,e,f){var g={init:function(){g.instance===undefined&&(g.instance=new(b("VisibilityTracking"))(b("VisibilityTrackingConfig")),g.instance.listeners.addSubscriptions(b("Arbiter").subscribe([b("LitestandMessages").STORIES_INSERTED],b("ErrorUtils").guard(function(){g.instance.refreshAndFireEvent()},"VisibilityTracking")))),b("Run").onLoad(function(){g.instance.refreshAndFireEvent()})}};e.exports=g}),null);
__d("SearchFilterTracking",["SearchFunnelLogger"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=null,h=null;a={setFilterMetadata:function(a){__p&&__p();if(h==null){h=a.destination_filter_type;g=a.destination_serp_sid;return}if(a.destination_filter_type==h)return;b("SearchFunnelLogger").logTabClicked(a.typeahead_sid,a.query,a.destination_serp_sid,g,a.destination_filter_type,h);h=a.destination_filter_type;g=a.destination_serp_sid}};e.exports=a}),null);
__d("SearchSnippetsHighlighter",["csx","NodeHighlighter","concatMap","mayHaveConnectedCharacters"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=babelHelpers["extends"]({},b("NodeHighlighter"),{getHighlightCandidates:function(){return["._glo","._glm","._l1a"]},highlight:function(a,c){__p&&__p();if(c.some(b("mayHaveConnectedCharacters")))return;var d=b("concatMap")(function(c){return b("concatMap")(this.getTextNodes.bind(this),this.searchNodes(a,c))}.bind(this),this.getHighlightCandidates());for(var d=d,e=Array.isArray(d),f=0,d=e?d:d[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var g;if(e){if(f>=d.length)break;g=d[f++]}else{f=d.next();if(f.done)break;g=f.value}g=g;if(g.parentNode==null)return}b("NodeHighlighter").highlight.call(h,a,c)}});e.exports=h}),null);