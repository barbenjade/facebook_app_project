if (self.CavalryLogger) { CavalryLogger.start_js(["jFpNV"]); }

__d("LiveVideoBroadcastFinishedVideoOverlay.react",["cx","fbt","ix","Image.react","LiveVideoBroadcastFinishedActions.react","LiveVideoBroadcastVideoOverlay.react","React"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j;j=babelHelpers.inherits(a,b("React").Component);j&&j.prototype;a.prototype.render=function(){var a,c;this.props.showContent&&(this.props.shareMode==="group"?c=b("React").createElement("p",null,h._("The replay of your live video will be available soon in this group.")):c=b("React").createElement("p",null,h._("The replay of your live video will be available soon on your Timeline")),a=b("React").createElement("div",null,b("React").createElement("div",null,b("React").createElement(b("Image.react"),{className:"_-7v",display:"block",src:i("101609")})),b("React").createElement("p",{className:"_yju"},h._("Your live video has ended")),c,b("React").createElement(b("LiveVideoBroadcastFinishedActions.react"),{dialog:this.props.dialog,inputSource:this.props.inputSource,vodReady:this.props.vodReady})));return b("React").createElement(b("LiveVideoBroadcastVideoOverlay.react"),null,b("React").createElement("div",{className:"_-7_"},a))};function a(){j.apply(this,arguments)}e.exports=a}),null);