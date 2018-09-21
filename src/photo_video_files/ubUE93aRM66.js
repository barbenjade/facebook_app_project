if (self.CavalryLogger) { CavalryLogger.start_js(["K+SQ1"]); }

__d("ProfileFunFactsEntryPoint",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({CTA:"cta",SELF_CTA:"self_cta",ASK_FRIENDS_TO_ANSWER_CTA:"ask_friends_to_answer_cta",COLLECTION:"collection",NEWSFEED_COMPOSER:"newsfeed_composer",TIMELINE_COMPOSER:"timeline_composer",SELF_PROTILE:"self_protile",SELF_PROTILE_NULL:"self_protile_null",HSCROLL_ADD_MORE:"hscroll_add_more",SINGLE_PLAYER:"single_player",MULTIPLAYER:"multiplayer",PERMALINK:"permalink",CREATION_STATION:"creation_station",UNKNOWN:"unknown"})}),null);
__d("FunFactSinglePlayer",["Arbiter","CurrentUser","FacebookAppIDs","ProfileEngagementTypedLogger","ProfileFunFactsEntryPoint","tidyEvent"],(function(a,b,c,d,e,f){"use strict";a={initLogging:function(a,c){b("tidyEvent")(b("Arbiter").subscribe("FunFactStack/transition"+a,function(a,d){a=c?1:2;var e;d.index===0?e="question_card":d.index===a?e="entry_point_card":e="answer_card";new(b("ProfileEngagementTypedLogger"))().setProductBucket("fun_facts").setProfileIDDummy(b("CurrentUser").getID()).setSurface("unknown").setEngagementType("swipe").setItemType("single_player").setItemSubtype(e).setEventMetadata({card_index:d.index.toString(),direction:d.direction,is_question_only:c?"1":"0"}).setAppID(b("FacebookAppIDs").WWW).log();d.direction==="right"&&d.index===a-1&&new(b("ProfileEngagementTypedLogger"))().setProductBucket("fun_facts").setProfileIDDummy(b("CurrentUser").getID()).setSurface("unknown").setEngagementType("impression").setItemType("entry_point").setEventMetadata({entry_point:b("ProfileFunFactsEntryPoint").SINGLE_PLAYER}).setAppID(b("FacebookAppIDs").WWW).log()}))}};e.exports=a}),null);
__d("FunFactStack",["cx","Arbiter","CSS","DOMEventListener","SubscriptionsHandler","destroyOnUnload","findTag","getElementRect","onRectIsWithinViewport"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h="_28hy",i="_1q7-",j="_6972";function a(a,c,d,e){__p&&__p();this.$9=function(){if(this.$6<=0)return;else this.$6===1&&b("CSS").addClass(this.$4,j);b("CSS").removeClass(this.$5,j);b("CSS").removeClass(this.$3[this.$6],h);b("CSS").addClass(this.$3[this.$6-1],h);b("Arbiter").inform("FunFactStack/transition"+this.$2,{direction:"left",index:this.$6});this.$6--}.bind(this),this.$10=function(){__p&&__p();if(this.$6>=this.$3.length-1)return;else this.$6===this.$3.length-2&&b("CSS").addClass(this.$5,j);b("CSS").removeClass(this.$4,j);b("CSS").removeClass(this.$3[this.$6],h);b("CSS").addClass(this.$3[this.$6+1],h);b("Arbiter").inform("FunFactStack/transition"+this.$2,{direction:"right",index:this.$6});this.$6++;this.$7=!1;this.$13()}.bind(this),this.$1=b("findTag")(a,"div"),this.$2=a,this.$3=c,this.$4=d,this.$5=e,this.$6=0,this.$7=!0,this.$8=new(b("SubscriptionsHandler"))(),this.$8.addSubscriptions(b("DOMEventListener").add(this.$4,"click",this.$9),b("DOMEventListener").add(this.$5,"click",this.$10),b("onRectIsWithinViewport")(function(){return b("getElementRect")(this.$1)}.bind(this),function(a){this.$11(a)}.bind(this))),b("destroyOnUnload")(function(){this.$8.release()}.bind(this))}a.prototype.$11=function(a){a&&this.$7?this.$12():this.$13()};a.prototype.$12=function(){b("CSS").addClass(this.$1,i)};a.prototype.$13=function(){b("CSS").removeClass(this.$1,i)};e.exports=a}),null);
__d("PostEdit",["csx","Arbiter","CSS","DOM","$","tidyEvent"],(function(a,b,c,d,e,f,g){__p&&__p();var h={insertEntStoryEditor:function(a,c,d){a=b("$")(a);if(h.hasExistingEditor(a))return;var e=null,f=b("DOM").scry(a,".userContentEditorWrapper");f.length>0?e=f[0]:e=b("DOM").find(a,".userContent");b("DOM").insertBefore(e,c);d.init()},hasExistingEditor:function(a){a=b("DOM").scry(a,"._3gr");return a.length>0},onEditShowComponent:function(a,c){b("tidyEvent")([b("Arbiter").subscribe("InlinePostEditor/showEditor"+a,function(){b("CSS").show(c)}),b("Arbiter").subscribe("InlinePostEditor/removeEditor"+a,function(){b("CSS").hide(c)})])}};e.exports=h}),null);