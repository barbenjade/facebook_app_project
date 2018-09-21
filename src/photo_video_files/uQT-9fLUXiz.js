if (self.CavalryLogger) { CavalryLogger.start_js(["lFxf+"]); }

__d("UFIActionLinkController",["cx","Arbiter","BootloadedComponent.react","ClickPointIdentifiersDEPRECATED","CommentPrelude","CSS","DataStore","DOM","DOMQuery","JSResource","Parent","React","ReactDOM","TrackingNodes","UFIAsyncWrapper","UFIBling.react","UFICentralUpdates","UFICommentActionLink.react","UFIConstants","UFIDispatcher","UFIDispatcherContext.react","UFIFeedbackTargets","UFIInstanceAction","UFILikeActionLink.react","UFIPrivateReplyLink.react","UFIReactionStore","UFIShareActionLink.react","UFISharedDispatcher","UFISubscribeLink.react","UFITimelineBlingBox.react","UFIToplevelPagedCommentList","UFIUserActions"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function h(a,c,d){var e=b("DOMQuery").scry(a,c)[0];if(e){var f=document.createElement("span");e.parentNode.replaceChild(f,e);f.appendChild(e);typeof d==="function"&&d(f)}else var g=b("Arbiter").subscribe("PhotoSnowlift.DATA_CHANGE",function(){b("Arbiter").unsubscribe(g),h(a,c,d)},"new")}function a(a,c,d){this.$19=a,this.$5=c,this.$10=d.targetfbid,this.$12=this.$26(),this.$7=new(b("UFIDispatcher"))(),this.$24={UFIReactionStore:new(b("UFIReactionStore"))(this.$7)},this.$12?this.$27():this.$28(),(d.viewercanlike||d.hasviewerliked)&&this.$29(),d.cancomment&&this.$30(),d.viewercansubscribetopost&&this.$31(),this.$32(),this.$33(),this.$34(),this.$35(),b("UFICentralUpdates").subscribe("feedback-updated",function(a,b){a=b.updates;c.ftentidentifier in a&&this.render()}.bind(this)),this.render()}a.prototype.$28=function(){h(this.$19,"^form .uiBlingBox",function(a){this.$2=a,this.$6&&this.$36()}.bind(this))};a.prototype.$27=function(){var a=b("DOMQuery").scry(this.$19,"^form .fbTimelineFeedbackActions .UFIBlingBoxTimeline")[0];if(a){var c=b("DOMQuery").scry(a,".fbTimelineFeedbackLikes")[0];this.$9=!!c;c=b("DOMQuery").scry(a,".fbTimelineFeedbackComments")[0];this.$8=!!c}this.$3=a;this.$6&&this.$37()};a.prototype.$34=function(){h(this.$19,"^form .inline_feedback",function(a){this.$11=a,this.$38&&this.$39()}.bind(this))};a.prototype.$35=function(){h(this.$19,"^form .actor_selector",function(a){this.$1=a,this.$38&&this.$40()}.bind(this))};a.prototype.$29=function(){h(this.$19,"^form .like_link",function(a){this.$13=a,this.$6&&this.$41()}.bind(this))};a.prototype.$30=function(){h(this.$19,"^form .comment_link",function(a){this.$4=a,this.$6&&this.$42()}.bind(this))};a.prototype.$31=function(){h(this.$19,"^form .unsub_link",function(a){this.$25=a,this.$6&&this.$43()}.bind(this))};a.prototype.$33=function(){h(this.$19,"^form .message_reply_action_link",function(a){this.$15=a,this.$15&&this.$15.previousSibling&&this.$15.previousSibling.nodeType===3&&this.$15.previousSibling instanceof Text&&(this.$16=this.$15.previousSibling,this.$17=this.$16.data),this.$6&&this.$44()}.bind(this))};a.prototype.$32=function(){h(this.$19,"^form .share_action_link",function(a){this.$21=a;b("CSS").addClass(this.$21,"share_root");a=b("DOMQuery").scry(this.$21,".share_action_link")[0];a&&(this.$23=a.getAttribute("href"),this.$22=a.getAttribute("rel"),this.$20=b("DataStore").get(a,"share-now-menu-uri"),this.$18=b("DataStore").get(a,"misinformation-confirm-dialog-uri"));this.$6&&this.$45()}.bind(this))};a.prototype.render=function(){this.$6=!0,this.$12?this.$37():this.$36(),this.$41(),this.$42(),this.$43(),this.$45(),this.$44(),this.$39(),this.$40()};a.prototype.$36=function(){this.$2&&b("UFIFeedbackTargets").getFeedbackTarget(this.$5.ftentidentifier,function(a){b("ReactDOM").render(b("React").createElement(b("UFIAsyncWrapper"),null,b("React").createElement(b("UFIDispatcherContext.react"),{dispatcher:this.$7,stores:this.$24},this.getBling(a))),this.$2)}.bind(this))};a.prototype.getBling=function(a){return b("React").createElement(b("UFIBling.react"),{contextArgs:this.$5,feedbackTarget:a,onCommentVisibilityChanged:function(){return b("UFISharedDispatcher").dispatch(b("UFIInstanceAction").toggleComments(this.$5))}.bind(this)})};a.prototype.$37=function(){this.$3&&b("UFIFeedbackTargets").getFeedbackTarget(this.$5.ftentidentifier,function(a){b("ReactDOM").render(b("React").createElement(b("UFIAsyncWrapper"),null,this.getTimelineBling(a)),this.$3)}.bind(this))};a.prototype.getTimelineBling=function(a){var c=b("TrackingNodes").getTrackingInfo(b("TrackingNodes").types.BLINGBOX),d=b("ClickPointIdentifiersDEPRECATED").getUserActionID(b("ClickPointIdentifiersDEPRECATED").types.TIMELINE_SEE_LIKERS),e=function(event){var a=b("Parent").byTag(event.target,"form");b("CommentPrelude").uncollapse(a,"action_link_timeline_bling");a=b("DOMQuery").scry(a,"a.UFIPagerLink");a.length&&a[0].click();event.preventDefault()},f=b("UFIToplevelPagedCommentList").getDisplayedCommentCountForFeedbackTargetID_UNSAFE(this.$5.ftentidentifier);return b("React").createElement(b("UFITimelineBlingBox.react"),{comments:f,commentsreduced:a.commentcountreduced,commentOnClick:e,contextArgs:this.$5,"data-ft":c,"data-gt":d,enableShowComments:this.$8,enableShowLikes:this.$9,feedbackFBID:this.$10,likes:a.likecount,likesreduced:a.likecountreduced,reshares:a.sharecount,resharesreduced:a.sharecountreduced,actorid:a.actorid})};a.prototype.$39=function(){this.$11&&b("ReactDOM").render(b("React").createElement(b("UFIAsyncWrapper"),null,this.getInlineSearchFeedback()),this.$11)};a.prototype.getInlineSearchFeedback=function(){return b("React").createElement("div",null,b("React").createElement(b("BootloadedComponent.react"),babelHelpers["extends"]({bootloadPlaceholder:b("React").createElement("div",null),bootloadLoader:b("JSResource")("InlineFeedback.react").__setRef("UFIActionLinkController")},this.$5.inlineSearchFeedbackConfig)))};a.prototype.$40=function(){this.$46&&b("ReactDOM").render(b("React").createElement(b("UFIAsyncWrapper"),null,this.getActorSelector()),this.$1)};a.prototype.getActorSelector=function(){var a=this.$5.actorSelectorConfig;if(!a)return null;var c=a.module;return b("React").createElement(c,a.props)};a.prototype.$41=function(){this.$13&&b("UFIFeedbackTargets").getFeedbackTarget(this.$5.ftentidentifier,function(a){b("ReactDOM").render(b("React").createElement(b("UFIAsyncWrapper"),null,b("React").createElement(b("UFIDispatcherContext.react"),{dispatcher:this.$7,stores:this.$24},this.getLike(a))),this.$13)}.bind(this))};a.prototype.getLike=function(a){return b("React").createElement(b("UFILikeActionLink.react"),{feedback:a,contextArgs:this.$5})};a.prototype.$42=function(){this.$4&&b("ReactDOM").render(b("React").createElement(b("UFIAsyncWrapper"),null,this.getComment()),this.$4)};a.prototype.getComment=function(){return b("React").createElement(b("UFICommentActionLink.react"),{contextArgs:this.$5})};a.prototype.$44=function(){__p&&__p();this.$15&&b("UFIFeedbackTargets").getFeedbackTarget(this.$5.ftentidentifier,function(a){this.$14=null;a=this.getMessageReply(a);a&&b("ReactDOM").render(b("React").createElement(b("UFIAsyncWrapper"),null,a),this.$15);if(!this.$14||!b("ReactDOM").findDOMNode(this.$14)){this.$16&&(this.$16.data="");b("DOM").setContent(this.$15,null);return}this.$16&&(this.$16.data=this.$17)}.bind(this))};a.prototype.getMessageReply=function(a){return a.messagereplycontext?b("React").createElement(b("UFIPrivateReplyLink.react"),{ref:function(a){return this.$14=a}.bind(this),actorID:a.actorforpost,activityID:this.$5.ftentidentifier,context:a.messagereplycontext,shouldShowNux:this.$5.shouldShowCommentPrivateReplyNux,seeResponseLabel:!1}):null};a.prototype.$43=function(){this.$25&&b("UFIFeedbackTargets").getFeedbackTarget(this.$5.ftentidentifier,function(a){b("ReactDOM").render(b("React").createElement(b("UFIAsyncWrapper"),null,this.getSubscribe(a)),this.$25)}.bind(this))};a.prototype.getSubscribe=function(a){var c=!a.hasviewersubscribed,d=function(event){event.target instanceof Element&&b("UFIUserActions").changeSubscribe(this.$5.ftentidentifier,c,{source:this.$5.source,target:event.target,rootid:this.$5.rootid,commentexpandmode:a.commentexpandmode}),event.preventDefault()}.bind(this);return b("React").createElement(b("UFISubscribeLink.react"),{onClick:d,subscribeAction:c})};a.prototype.$45=function(){this.$21&&this.$23&&b("UFIFeedbackTargets").getFeedbackTarget(this.$5.ftentidentifier,function(a){b("ReactDOM").render(b("React").createElement(b("UFIAsyncWrapper"),null,this.getShare(a)),this.$21)}.bind(this))};a.prototype.getShare=function(a){return b("React").createElement(b("UFIShareActionLink.react"),{feedbackTarget:a,ufiInstanceID:this.$5.instanceid,shareURI:this.$23,shareRel:this.$22,shareNowMenuURI:this.$20,misinformationConfirmDialogURI:this.$18})};a.prototype.$26=function(){if(this.$5.source===b("UFIConstants").UFIFeedbackSourceType.PROFILE){var a=b("DOMQuery").scry(this.$19,"^form .fbTimelineFeedbackActions .UFIBlingBoxTimeline");return a.length>0}return!1};e.exports=a}),null);