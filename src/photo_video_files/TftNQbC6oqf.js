if (self.CavalryLogger) { CavalryLogger.start_js(["Wh\/xc"]); }

__d("FBStoriesNFXConfirmationDialog.react",["React","XUIDialog.react","XUIDialogBody.react","XUIDialogCancelButton.react","XUIDialogFooter.react","XUIDialogOkayButton.react","XUIDialogTitle.react"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=500;g=babelHelpers.inherits(a,b("React").Component);g&&g.prototype;a.prototype.render=function(){var a;return b("React").createElement(b("XUIDialog.react"),{width:h,isStrictlyControlled:!0,onHide:this.props.hideAction,shown:this.props.shown},b("React").createElement(b("XUIDialogTitle.react"),null,(a=this.props.nfxPayload)!=null?(a=a.confirmation_header)!=null?a.text:a:a),b("React").createElement(b("XUIDialogBody.react"),null,(a=this.props.nfxPayload)!=null?(a=a.confirmation_message)!=null?a.text:a:a),b("React").createElement(b("XUIDialogFooter.react"),null,b("React").createElement("div",null,b("React").createElement(b("XUIDialogCancelButton.react"),{onClick:this.props.hideAction}),b("React").createElement(b("XUIDialogOkayButton.react"),{action:"confirm",use:"confirm",onClick:this.props.confirmAction}))))};function a(){g.apply(this,arguments)}e.exports=a}),null);