if (self.CavalryLogger) { CavalryLogger.start_js(["NZR3K"]); }

__d("MessagingShowNUX.react",["AsyncRequest","ChatConfig","React","XSetNUXSeenController","XUIAmbientNUX.react"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;c=b("React").PropTypes;d=babelHelpers.inherits(a,b("React").PureComponent);g=d&&d.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=g.constructor).call.apply(a,[this].concat(e)),this.state={showNUX:!b("ChatConfig").get(this.props.settingName)},this.$1=function(){if(!this.state.showNUX)return;b("ChatConfig").set(this.props.settingName,!0);new(b("AsyncRequest"))(b("XSetNUXSeenController").getURIBuilder().getURI()).setData({setting_name:this.props.settingName}).send();this.setState({showNUX:!1});this.props.onHidden()}.bind(this),c}a.prototype.render=function(){return b("React").createElement(b("XUIAmbientNUX.react"),{contextRef:this.props.contextRef,onCloseButtonClick:this.$1,position:"left",width:"auto",shown:this.state.showNUX&&this.props.shown},this.props.children)};a.propTypes={children:c.any,contextRef:c.func.isRequired,onHidden:c.func.isRequired,settingName:c.string.isRequired,shown:c.bool.isRequired};e.exports=a}),null);