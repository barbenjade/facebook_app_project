if (self.CavalryLogger) { CavalryLogger.start_js(["5yDZL"]); }

__d("EventNewsFeedPermalinkHandler",["Event","XEventsPermalinkController"],(function(a,b,c,d,e,f){a={onClick:function(a,c,d){b("Event").listen(a,"click",function(){var a=b("XEventsPermalinkController").getURIBuilder().setInt("event_id",c).setString("acontext",d).getURI();window.goURI(a)})}};e.exports=a}),null);
__d("HScrollXout",["csx","Animation","Arbiter","DOM","Event","Parent"],(function(a,b,c,d,e,f,g){a={init:function(a,c){b("Event").listen(a,"click",function(event){c||(c=b("Parent").bySelector(a,"._2_zx")),new(b("Animation"))(c).from("opacity",1).to("opacity",0).duration(500).checkpoint(1,function(){b("DOM").remove(c);var a=event.getTarget().getAttribute("data-item-id");a&&b("Arbiter").inform("x-out-hscroll-item",{item:c})}).go()})}};e.exports=a}),null);
__d("GroupsMemberFeedLogger",["Event","GroupMemberIdentityTypedLogger"],(function(a,b,c,d,e,f){"use strict";a={logOnJavaScriptEvent:function(a,c,d,e,f,g){b("Event").listen(a,c,function(){new(b("GroupMemberIdentityTypedLogger"))().setGroupID(d).setEvent(e).setTargetMemberID(f).setRef(g).log()})}};e.exports=a}),null);
__d("XGroupsMYSKXOutController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/groups/mysk/xout/",{})}),null);
__d("GroupsMYSKUtils",["Arbiter","AsyncRequest","CSS","Event","XGroupsMYSKXOutController"],(function(a,b,c,d,e,f){var g="mysk/newMemberProfileDialog";a={hideUnitOnClick:function(a,c){b("Event").listen(a,"click",function(){b("CSS").hide(c)})},openNewMemberProfileDialogListener:function(a){b("Event").listen(a,"click",function(){b("Arbiter").inform(g)})},initXOut:function(a,c,d){b("Event").listen(a,"click",function(){new(b("AsyncRequest"))(b("XGroupsMYSKXOutController").getURIBuilder().getURI()).setData({group_id:c,member_id:d}).send()})}};e.exports=a}),null);
__d("HScrollItemType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({CONNECTIONS_PYML_ITEM:"connections_pyml_item",GOODWILL_VIDEO:"goodwill_video",GOODWILL_MEMORIES_AND_CELEBRATIONS:"goodwill_memories_and_celebrations",GROUPS_MYSK:"groups_mysk",GROUPS_GENY:"groups_geny"})}),null);
__d("LocalNewsGYSJPivotLoggerEvent",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({COMPOSER_CANCEL:"local_news_gysj_composer_cancel",COMPOSER_OPEN:"local_news_gysj_composer_open",COMPOSER_POST:"local_news_gysj_composer_post",DISCOVER_TAP:"local_news_gysj_discover_tap",GROUP_JOIN:"local_news_gysj_group_join",GROUP_JOIN_CANCEL:"local_news_gysj_group_join_cancel",GROUP_TAP:"local_news_gysj_group_tap",GROUP_VIEW:"local_news_gysj_group_view",GROUP_XOUT:"local_news_gysj_group_xout",START_QP_RENDER:"start_qp_render",START_FETCH_GROUPS:"start_fetch_groups",END_FETCH_GROUPS:"end_fetch_groups",FETCH_USER_LOCATION:"fetch_user_location"})}),null);
__d("XConnectionsPageRecImpressionController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/feed/connections_pyml/log_impression/",{})}),null);
__d("XGroupsGENYImpressionLoggingController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/groups/geny/log/",{group_id:{type:"Int",required:!0},event_id:{type:"Int",required:!0},position:{type:"Int",required:!0},action_source:{type:"String",required:!0}})}),null);
__d("XGroupsMYSKImpressionLoggingController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/groups/mysk/log/",{group_id:{type:"Int",required:!0},member_id:{type:"Int",required:!0},hscroll_position:{type:"Int",required:!0},hscroll_length:{type:"Int",required:!0},mysk_type:{type:"String",required:!0}})}),null);
__d("FbFeedAttachmentHScroll",["csx","cx","Arbiter","AsyncRequest","Banzai","BanzaiLogger","BaseUnitCarousel","CSS","DOM","HScrollItemType","LocalNewsGYSJPivotLoggerEvent","XConnectionsPageRecImpressionController","XGroupsGENYImpressionLoggingController","XGroupsMYSKImpressionLoggingController"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i,j=b("BanzaiLogger").create({retry:!0});c=babelHelpers.inherits(a,b("BaseUnitCarousel"));i=c&&c.prototype;function a(a){"use strict";i.constructor.call(this,a),b("Arbiter").subscribe("x-out-hscroll-item",this.onXout.bind(this)),this.logLastUnit=a.log_last_unit?a.log_last_unit:!1}a.prototype.updateLargePager=function(){"use strict";b("CSS").removeClass(this.carousel,"_vxr"),this.$FbFeedAttachmentHScroll1(!0),this.$FbFeedAttachmentHScroll1(!1),b("CSS").conditionClass(this.carousel,"_vxs",this.canSlideLeft()&&this.canSlideRight())};a.prototype.hidePagerButton=function(){"use strict";b("CSS").addClass(this.carousel,"_vxr")};a.prototype.$FbFeedAttachmentHScroll1=function(a){"use strict";var c=a?"_vxt":"_vxu",d=a?"_vxv":"_vxw";(a?this.canSlideRight():this.canSlideLeft())?(b("CSS").removeClass(this.carousel,d),b("CSS").removeClass(this.carousel,c)):(b("CSS").addClass(this.carousel,d),setTimeout(function(){b("CSS").addClass(this.carousel,c)}.bind(this),500))};a.prototype.toggleXouts=function(a,c,d){"use strict";__p&&__p();var e=Math.min(a,c);a=Math.max(a,c);c=this.grid.children;e=Math.max(e,0);a=Math.min(a,c.length-1);var f;for(var e=e;e<=a;++e){f=c[e];f=b("DOM").scry(f,"._1r7n")[0];f&&(d?b("CSS").hide(f):b("CSS").show(f))}};a.prototype.logImpressions=function(){"use strict";var a=this.grid.children,b=a.length,c=this.visibleIndex+Math.min(this.visibleCount,b)-1;!this.circularCarousel&&c===b-1&&!this.logLastUnit&&--c;for(var b=this.visibleIndex;b<=c;++b)this.$FbFeedAttachmentHScroll2(a[b],b)};a.prototype.$FbFeedAttachmentHScroll2=function(a,c){"use strict";__p&&__p();a=a.getAttribute("data-logging");a=a?JSON.parse(a):null;if(!a||!a.item_type)return;if(a.item_type===b("HScrollItemType").CONNECTIONS_PYML_ITEM){var d=a.page_id;if(!d||isNaN(d)||this.loggedItems[d])return;j.log("ConnectionsPYMLLoggerConfig",{event:"impression",page_id:d});var e={};e.page_id=d;var f=b("XConnectionsPageRecImpressionController").getURIBuilder();new(b("AsyncRequest"))().setMethod("POST").setURI(f.getURI()).setData(e).send();this.loggedItems[d]=!0}else if(a.item_type===b("HScrollItemType").LOCAL_NEWS_GYSJ_ITEM)j.log("LocalNewsGYSJPivotLoggerConfig",{name:b("LocalNewsGYSJPivotLoggerEvent").GROUP_VIEW,hscroll_position:c,group_id:a.group_id});else if(a.item_type===b("HScrollItemType").GROUPS_MYSK){f=a.gid;e=a.mid;d=a.mysk_type;if(!f||!e||!d||this.loggedItems[e])return;f=b("XGroupsMYSKImpressionLoggingController").getURIBuilder().setInt("group_id",f).setInt("member_id",e).setInt("hscroll_position",c).setInt("hscroll_length",this.grid.children.length).setString("mysk_type",d).getURI();new(b("AsyncRequest"))().setMethod("POST").setURI(f).send();this.loggedItems[e]=!0}else if(a.item_type===b("HScrollItemType").GROUPS_GENY){d=a.group_id;f=a.event_id;e=a.action_source;if(!f||this.loggedItems[f]||!e)return;d=b("XGroupsGENYImpressionLoggingController").getURIBuilder().setInt("group_id",d).setInt("event_id",f).setInt("position",c+1).setString("action_source",e).getURI();new(b("AsyncRequest"))().setMethod("POST").setURI(d).send();this.loggedItems[f]=!0}else a.item_type===b("HScrollItemType").GOODWILL_MEMORIES_AND_CELEBRATIONS&&(a.logging_table==="goodwill_memories_and_celebrations"&&b("Banzai").post("goodwill_memories_and_celebrations",a.logging_data))};e.exports=a}),null);