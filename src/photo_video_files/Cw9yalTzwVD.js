if (self.CavalryLogger) { CavalryLogger.start_js(["1bS8c"]); }

__d("ReactComposerLiveBroadcastModerationSettingsSelector.react",["ix","cx","fbt","Image.react","React","Tooltip.react","VideoBroadcastCommentModerationSettings","XUISelector.react","asset"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j;j=babelHelpers.inherits(a,b("React").Component);j&&j.prototype;a.prototype.render=function(){return b("React").createElement("div",null,i._("Comment modes:"),b("React").createElement(b("XUISelector.react"),{className:"_3o3-",multiple:!0,onChange:this.props.onCommentModesChange,defaultLabel:i._("None"),defaultValue:this.props.commentModes},b("React").createElement(b("XUISelector.react").Option,{value:b("VideoBroadcastCommentModerationSettings").FOLLOWER},i._("Followers")),b("React").createElement(b("XUISelector.react").Option,{value:b("VideoBroadcastCommentModerationSettings").SLOW},i._("Slow")),b("React").createElement(b("XUISelector.react").Option,{value:b("VideoBroadcastCommentModerationSettings").DISCUSSION},i._("Discussion")),b("React").createElement(b("XUISelector.react").Option,{value:b("VideoBroadcastCommentModerationSettings").RESTRICTED},i._("Restricted"))),b("React").createElement(b("Tooltip.react"),{position:"above",alignH:"left",tooltip:b("React").createElement("div",{className:"_5iga"},b("React").createElement("div",null,i._("Followers: Only your followers will be able to leave comments.")),b("React").createElement("div",null,i._("Discussion: Only comments over 100 characters will be shown.")),b("React").createElement("div",null,i._("Slow: Commenters will only be able to comment every 10 seconds.")),b("React").createElement("div",null,i._("Restricted: Commenters must have accounts that are at least 2 weeks old.")))},b("React").createElement(b("Image.react"),{className:"_5igb",src:g("481013")})))};function a(){j.apply(this,arguments)}e.exports=a}),null);