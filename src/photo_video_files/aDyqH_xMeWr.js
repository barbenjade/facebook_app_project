if (self.CavalryLogger) { CavalryLogger.start_js(["6Rk8I"]); }

__d("FBStoriesReportToAdminConfirmationDialog.react",["cx","fbt","React","XUIDialog.react","XUIDialogBody.react","XUIDialogButton.react","XUIDialogCancelButton.react","XUIDialogFooter.react","XUIDialogTitle.react"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j=500;i=babelHelpers.inherits(a,b("React").Component);i&&i.prototype;a.prototype.render=function(){return b("React").createElement(b("XUIDialog.react"),{width:j,shown:this.props.shown,isStrictlyControlled:!0,onHide:this.props.hideAction},b("React").createElement(b("XUIDialogTitle.react"),null,h._("Report to Group Admins")),b("React").createElement(b("XUIDialogBody.react"),null,this.$1(this.props.mediaType)),b("React").createElement(b("XUIDialogFooter.react"),null,b("React").createElement("div",null,b("React").createElement(b("XUIDialogCancelButton.react"),{onClick:this.props.hideAction}),b("React").createElement(b("XUIDialogButton.react"),{action:"confirm",className:"_4jy1",label:h._("Report to Admin"),onClick:this.props.confirmAction}))))};a.prototype.$1=function(a){a=a||"";switch(a.toUpperCase()){case"PHOTO":return h._("Are you sure you want to report this photo to the group admins?");case"VIDEO":return h._("Are you sure you want to report this video to the group admins?");default:return h._("Are you sure you want to report this to the group admins?")}};function a(){i.apply(this,arguments)}e.exports=a}),null);