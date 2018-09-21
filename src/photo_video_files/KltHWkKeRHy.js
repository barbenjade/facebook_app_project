if (self.CavalryLogger) { CavalryLogger.start_js(["ItGrL"]); }

__d("ReactComposerBreakingNewsButtonContainer.react",["cx","React","ReactComposerBreakingNewsButton.react","ReactComposerBreakingNewsUtils","ReactComposerContextTypes","ReactComposerPropsAndStoreBasedStateMixin","ReactComposerScrapedAttachmentActions","ReactComposerScrapedAttachmentStore","ReactComposerTaggerActions","ReactComposerTaggerDisabledButton.react","ReactComposerTaggerStore","ReactComposerTaggerType"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();c=b("React").PropTypes;function a(a){var c=b("ReactComposerTaggerStore").isDisabled(a,b("ReactComposerTaggerType").BREAKING_NEWS);a=b("ReactComposerBreakingNewsUtils").getTooltip(a);return{isDisabled:c,tooltip:a}}var h=function(a){var c="_r2r";return b("React").createElement("div",{className:"uiContextualLayerParent",style:{display:"inline-block"}},b("React").createElement(b("ReactComposerTaggerDisabledButton.react"),babelHelpers["extends"]({className:c,taggerID:b("ReactComposerTaggerType").BREAKING_NEWS,title:b("ReactComposerBreakingNewsUtils").getDefaultTooltip()},a)))};d=b("React").createClass({displayName:"ReactComposerBreakingNewsButtonContainer",contextTypes:b("ReactComposerContextTypes"),mixins:[b("ReactComposerPropsAndStoreBasedStateMixin")(b("ReactComposerScrapedAttachmentStore"),b("ReactComposerTaggerStore"))],propTypes:{breakingTaggerConfig:c.object},statics:{calculateState:a},componentDidMount:function(){var a;a=(a=this.props)!=null?(a=a.breakingTaggerConfig)!=null?a.initialStatus:a:a;b("ReactComposerTaggerActions").setTaggerConfig(this.context.composerID,b("ReactComposerTaggerType").BREAKING_NEWS,{initialStatus:a});a&&b("ReactComposerScrapedAttachmentActions").setBreakingConfig(this.context.composerID,a)},render:function(){return this.state.isDisabled?b("React").createElement(h,{tooltip:this.state.tooltip}):b("React").createElement(b("ReactComposerBreakingNewsButton.react"),null)}});e.exports=d}),null);