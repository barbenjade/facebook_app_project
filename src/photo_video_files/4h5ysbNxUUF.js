if (self.CavalryLogger) { CavalryLogger.start_js(["YhJqc"]); }

__d("LiveVideoBroadcastComposerCrosspostNUX.react",["fbt","BasicFBNux","LayerAutoFocus","React","XUIAmbientNUX.react"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i=5507;c=babelHelpers.inherits(a,b("React").Component);h=c&&c.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=h.constructor).call.apply(a,[this].concat(e)),this.state={shown:this.props.shouldShowNUX&&this.props.crosspostConfigs.length>0},this.$1=function(){this.setState({shown:!1},function(){return b("BasicFBNux").onDismiss(i)})}.bind(this),this.$2=function(){this.setState({shown:!1})}.bind(this),c}a.prototype.componentDidMount=function(){this.$3()&&b("BasicFBNux").onView(i)};a.prototype.$3=function(){var a=this.props.crosspostConfigs;return this.state.shown&&a.length>0};a.prototype.$4=function(){var a=this.props.crosspostConfigs;if(a.length===1)return g._("Go to Settings to post this video to {page}.",[g._param("page",a[0].name)]);else return g._({"*":"Go to Settings to post this video to {page} and {number} other pages.","_1":"Go to Settings to post this video to {page} and 1 other page."},[g._param("page",a[0].name),g._plural(a.length-1,"number")])};a.prototype.render=function(){return!this.$3()?null:b("React").createElement(b("XUIAmbientNUX.react"),{alignment:"center",behaviors:{LayerAutoFocus:b("LayerAutoFocus")},contextRef:this.props.contextRef,hideOnBlur:!0,position:"below",shown:!0,onBeforeHide:this.$2,onCloseButtonClick:this.$1},b("React").createElement("b",null,g._("New! Crosspost This Video")),b("React").createElement("br",null),this.$4())};e.exports=a}),null);