if (self.CavalryLogger) { CavalryLogger.start_js(["oe2Gi"]); }

__d("LiveVideoBroadcastCameraGoLiveButton.react",["ix","cx","fbt","Image.react","LiveVideoBroadcastActions","LiveVideoBroadcastAfterBootloadUtils","LiveVideoBroadcastConstants","LiveVideoBroadcastUtils","React","XUIAmbientNUX.react","XUIButton.react","XUISpinner.react","fbglyph"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j,k=b("LiveVideoBroadcastConstants").BROADCAST_STATE;c=babelHelpers.inherits(a,b("React").Component);j=c&&c.prototype;function a(a){__p&&__p();j.constructor.call(this,a),this.$4=function(){__p&&__p();if(this.props.broadcastState!==k.PREVIEW||this.props.countdownTime){this.props.onActionButtonClick();return}b("LiveVideoBroadcastActions").setUpdateRequestPending(!0);var a=b("LiveVideoBroadcastUtils").getComposerFormData(this.props.contextConfig.composerID,this.props.config.targetData.targetID,this.props.config.contextInfo),c=b("LiveVideoBroadcastAfterBootloadUtils").getUpdateMetadata(this.props.metadataConfig),d={};this.props.canEnableLiveCoverVideo&&(d=babelHelpers["extends"]({},d,{is_page_live_cover_video_enabled:this.props.isLiveCoverVideoEnabled,is_page_live_cover_video_explicitly_set:!0}));b("LiveVideoBroadcastAfterBootloadUtils").sendUpdateRequest(this.props.actorID,this.props.broadcastID,d,a,c,function(a){b("LiveVideoBroadcastActions").setUpdateRequestPending(!1),this.props.onActionButtonClick()}.bind(this),function(a){b("LiveVideoBroadcastActions").setUpdateRequestPending(!1),alert("Error starting broadcast, please try again")})}.bind(this),this.$1=i._("Go Live"),this.$2=i._("Cancel"),this.$3=i._("Connecting")}a.prototype.$5=function(){return this.props.countdownTime?null:b("React").createElement(b("XUIAmbientNUX.react"),{alignment:"right",contextRef:function(){return this.refs.button}.bind(this),position:"above",shown:this.props.showNUX,width:"auto",onCloseButtonClick:this.props.onNUXCloseButtonClick},i._("Click to begin the live broadcast"))};a.prototype.render=function(){if(this.props.broadcastID){var a=this.props.countdownTime?this.$2:this.$1,c=this.props.countdownTime?undefined:b("React").createElement(b("Image.react"),{src:g("115197")});c=b("React").createElement("span",null,b("React").createElement(b("XUIButton.react"),{className:"_eg3 _227w",disabled:this.props.isUpdateRequestPending,image:c,label:a,ref:"button",use:"confirm",onClick:this.$4}),this.$5())}else c=b("React").createElement(b("XUIButton.react"),{className:"_eg3 _227w",disabled:!0,image:b("React").createElement(b("XUISpinner.react"),null),label:this.$3,ref:"button"});return c};e.exports=a}),null);