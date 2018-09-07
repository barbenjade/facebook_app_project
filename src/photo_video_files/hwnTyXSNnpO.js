if (self.CavalryLogger) { CavalryLogger.start_js(["JB1T6"]); }

__d("LiveVideoBroadcastCopyrightViolationModalOverlay.react",["cx","fbt","CenteredContainer.react","CopyrightsViolationDialogState","LiveVideoBroadcastConstants","LiveVideoBroadcastCopyrightEvent","LiveVideoBroadcastModalOverlay.react","React","VideoCopyrightInStreamNoticeText","VideoCopyrightInStreamNoticeTextType","XUIButton.react","XUIText.react"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;c=babelHelpers.inherits(a,b("React").Component);i=c&&c.prototype;function a(a){i.constructor.call(this,a),this.$4=function(){var event=this.props.copyrightsViolationDialogState===b("CopyrightsViolationDialogState").LIVE_TAKEDOWN_MSG_SENT?b("LiveVideoBroadcastCopyrightEvent").ACK_TAKE_DOWN_LIVE_VIDEO:b("LiveVideoBroadcastCopyrightEvent").DELETE_LIVE_VIDEO;clearInterval(this.$1);this.props.onEndLiveBroadcast();this.props.handleCopyrightEvent(event,this.props.broadcastID)}.bind(this),this.$5=function(){var event=this.props.copyrightsViolationDialogState===b("CopyrightsViolationDialogState").MATCH_BLOCKED_MSG_SENT?b("LiveVideoBroadcastCopyrightEvent").RESUME_BLOCKED_LIVE_VIDEO:b("LiveVideoBroadcastCopyrightEvent").RESUME_LIVE_VIDEO;clearInterval(this.$1);this.props.handleCopyrightEvent(event,this.props.broadcastID)}.bind(this),this.$2=function(){this.props.onEndLiveBroadcast(),this.props.handleCopyrightEvent(b("LiveVideoBroadcastCopyrightEvent").AUTO_TAKE_DOWN_LIVE_VIDEO,this.props.broadcastID)}.bind(this),this.$1=setInterval(this.$2,b("LiveVideoBroadcastConstants").AUTO_TAKENDOWN_TIME_FOR_COPYRIGHT_VIOLATION)}a.prototype.componentWillUnmount=function(){clearInterval(this.$1)};a.prototype.render=function(){var a=this.$3(),c=b("React").createElement(b("XUIButton.react"),{className:"_p-i",label:h._("Finish"),onClick:this.$4}),d=a===b("CopyrightsViolationDialogState").LIVE_TAKEDOWN_MSG_SENT?null:b("React").createElement(b("XUIButton.react"),{label:h._("Resume"),use:"confirm",onClick:this.$5});return b("React").createElement(b("LiveVideoBroadcastModalOverlay.react"),null,b("React").createElement(b("CenteredContainer.react"),{className:"_p-d",vertical:!0},b("React").createElement("div",{className:"_p-e"},b("React").createElement(b("XUIText.react"),{size:"xlarge_DEPRECATED"},b("VideoCopyrightInStreamNoticeText")[a][b("VideoCopyrightInStreamNoticeTextType").TITLE])),this.$6(),b("React").createElement("div",{className:"_p-h"},c,d)))};a.prototype.$3=function(){var a=this.props.copyrightsViolationDialogState;return a==null||a!==b("CopyrightsViolationDialogState").MATCH_CREATED_MSG_SENT&&a!==b("CopyrightsViolationDialogState").MATCH_BLOCKED_MSG_SENT&&a!==b("CopyrightsViolationDialogState").LIVE_TAKEDOWN_MSG_SENT?b("CopyrightsViolationDialogState").MATCH_CREATED_MSG_SENT:a};a.prototype.$6=function(){var a=this.$3();a=b("VideoCopyrightInStreamNoticeText")[a][b("VideoCopyrightInStreamNoticeTextType").MESSAGE];return a.map(function(a){return b("React").createElement("div",{className:"_p-f"},b("React").createElement(b("XUIText.react"),{size:"header3"},a))})};e.exports=a}),null);