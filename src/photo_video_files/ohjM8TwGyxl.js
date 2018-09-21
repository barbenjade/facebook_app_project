if (self.CavalryLogger) { CavalryLogger.start_js(["gb\/bI"]); }

__d("MontageCard.react",["cx","fbt","AsyncRequest","CameraPostAppAttribution.react","CssBackgroundImage.react","CurrentUser","FBStoriesPollSticker.react","FBStoriesPollStickerConstants","Link.react","MercuryConfig","MercuryIDs","MessengerMenu.react","MessengerPollStickerVotedMutation","MessengerPopoverMenu.react","MontageProgressBar.react","MontageReplyContainer.react","NFXStoryLocation","React","RelayCompat","Timestamp.react","XRapidReportingMessageDialogController","gkx","MontageCard_message.graphql"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;c=b("RelayCompat").createFragmentContainer;b("RelayCompat").graphql;var j=b("MessengerMenu.react").Item;d=b("React").PropTypes;var k={height:10,width:45,top:-2.7,left:-5.5},l=function(a){return a.stopPropagation()};f=babelHelpers.inherits(a,b("React").Component);i=f&&f.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=i.constructor).call.apply(a,[this].concat(e)),this.state={progressPercent:0,startedTime:Date.now()},this.$2=function(a,c){if(!this.props.message||!this.props.message.message_sender)return;var d=this.props.message;b("MessengerPollStickerVotedMutation")(this.props.relay.environment,d,{input:{story_card_poll_id:a,option:c}})}.bind(this),this.$9=function(){var a;a=(a=this.props)!=null?(a=a.message)!=null?a.message_id:a:a;if(a){a=b("XRapidReportingMessageDialogController").getURIBuilder().setString("message_id",a).setString("story_location",b("NFXStoryLocation").MESSENGER_MONTAGE_VIEWER).getURI();a=new(b("AsyncRequest"))().setURI(a);a.send()}}.bind(this),this.$4=function(a){a!==this.state.progressPercent&&this.setState({progressPercent:a})}.bind(this),this.$5=function(a){this.setState({startedTime:a})}.bind(this),c}a.prototype.$1=function(){var a=window.innerHeight,b=a*.48327+10;a=a*.888888;return{height:a,width:b}};a.prototype.$3=function(){if(!this.props.message||!this.props.message.montage_overlays||!b("gkx")("AT7w9nQF-mSH1UuVfI8mf3YeiPMuOT11MHr263OK99igTmMfv9QJHJLY3C0QurFPj08TQNa7YNiSUUUp2iPKVlyH"))return null;var a=this.props.message.montage_overlays,c=this.$1();return a.map(function(a){if(!a.poll||!a.poll.poll_options)return null;var d=a.poll.poll_options.map(function(a){return a.vote_count==null||a.text==null?{voteCount:0,text:""}:{voteCount:a.vote_count,text:a.text}});return a.poll==null||a.poll.id==null||a.poll.can_viewer_vote==null||a.poll.viewer_vote_index==null||a.voting_control_bounds==null||a.style==null||d==null?null:b("React").createElement(m,{key:"poll_"+a.poll.id,containerHeight:c.height,containerWidth:c.width,width:b("FBStoriesPollStickerConstants").DIMENSIONS.WIDTH,height:b("FBStoriesPollStickerConstants").DIMENSIONS.HEIGHT,bounds:a.voting_control_bounds},b("React").createElement(b("FBStoriesPollSticker.react"),{canViewerVote:a.poll.can_viewer_vote,viewerVoteIndex:a.poll.viewer_vote_index,isConsumer:!0,pollId:a.poll.id,pollOptions:d,pollStyle:a.style,onOptionVoted:this.$2}))}.bind(this))};a.prototype.render=function(){var a=this.props,c=a.active,d=a.activeIndex,e=a.count;a=a.message;if(!a)return null;a=(a=a.message_sender)==null?void 0:a.messaging_actor;var f=b("React").Children.map(this.props.children,function(a){return b("React").cloneElement(a,{onProgress:this.$4,onStarted:this.$5})}.bind(this));return b("React").createElement("div",{className:"_5uag _q38",style:{zIndex:c?1:undefined}},b("React").createElement("div",{className:"_3avs"},f),b("React").createElement("div",{className:"_5uag _1pwf"},this.$3(),b("React").createElement(b("MontageProgressBar.react"),{activeIndex:d,count:e,progressPercent:this.state.progressPercent}),b("React").createElement("div",{className:"_1pwg"},b("React").createElement(b("CssBackgroundImage.react"),{className:"_3cx4",imageURI:a==null?void 0:(c=a.profile_picture)==null?void 0:c.uri}),b("React").createElement("div",{className:"_1pwn"},b("React").createElement("span",null,a==null?void 0:a.name),this.$6()),this.$7(),b("React").createElement(b("MessengerPopoverMenu.react"),{className:"_47gp",menu:this.$8()},b("React").createElement(b("Link.react"),{"aria-haspopup":"true","aria-label":h._("Message Options"),className:"_47gq",onMouseUp:l,onMouseDown:l,role:"button"})))))};a.prototype.$8=function(){var a=b("React").createElement(b("MessengerMenu.react"),null,b("React").createElement(j,{label:h._("Report"),onclick:this.$9}));return a};a.prototype.$7=function(){var a,c;a=((a=this.props.message)==null?void 0:a.message_id)||"";var d=b("CurrentUser").getID();c=(c=this.props.message)!=null?(c=c.message_sender)!=null?c.id:c:c;c=c?c:null;if(b("MercuryConfig").WWWMessengerMontageLWR&&c&&c!==d)return b("React").createElement(b("MontageReplyContainer.react"),{montageMessageID:a,threadFBID:c,threadID:b("MercuryIDs").getThreadIDFromUserID(c),startedTime:this.state.startedTime});else return null};a.prototype.$6=function(){var a,c=this.props.message;if(!c)return null;var d=b("React").createElement(b("Timestamp.react"),{className:"_13-0",minimize:!0,time:c.timestamp});a=(a=c)!=null?(a=a.message_sender)!=null?a.id:a:a;c=c==null?void 0:c.montage_attribution;return a&&c?b("React").createElement("div",{className:"_13-0"},d,"\xa0\u2022\xa0",b("React").createElement(b("CameraPostAppAttribution.react"),{currentThreadID:a,postStoryAttribution:c,stopPropagationOnClick:!0})):d};a.propTypes={active:d.bool.isRequired,activeIndex:d.number.isRequired,count:d.number.isRequired,message:d.object,children:d.object};var m=function(a){__p&&__p();var c=a.bounds,d=c.height,e=c.width,f=c.x,g=c.y;c=c.rotation;d=a.containerHeight*d+k.height;e=a.containerWidth*e+k.width;d=d/a.height;e=e/a.width;g=g*100+k.top;f=f*100+k.left;g={width:a.width+"px",height:a.height+"px",top:g+"%",left:f+"%",transform:"scaleY("+d+") scaleX("+e+")"};f={transform:"rotate("+c+"deg)"};return b("React").createElement("div",{className:"_4xuv",style:g},b("React").createElement("div",{className:"_4xux",onMouseDown:function(event){event.stopPropagation()},style:f},a.children))};e.exports=c(a,{message:{modern:function(){return b("MontageCard_message.graphql")},classic:function(a){return{kind:"FragmentDefinition",argumentDefinitions:[],node:function(){return{children:[{fieldName:"message_id",kind:"Field",metadata:{},type:"ID"},{children:[{fieldName:"message_source",kind:"Field",metadata:{},type:"String"}],fieldName:"message_source_data",kind:"Field",metadata:{canHaveSubselections:!0},type:"MessageSourceData"},{children:[{fieldName:"__typename",kind:"Field",metadata:{isGenerated:!0,isRequisite:!0},type:"String"},{children:[{fieldName:"style",kind:"Field",metadata:{},type:"StoryOverlayPollStyle"},{children:[{fieldName:"text",kind:"Field",metadata:{},type:"String"}],fieldName:"question_text",kind:"Field",metadata:{canHaveSubselections:!0},type:"TextWithEntities"},{children:[{fieldName:"id",kind:"Field",metadata:{isRequisite:!0},type:"ID"},{fieldName:"can_viewer_vote",kind:"Field",metadata:{},type:"Boolean"},{fieldName:"viewer_vote_index",kind:"Field",metadata:{},type:"Int"},{children:[{fieldName:"text",kind:"Field",metadata:{},type:"String"},{fieldName:"vote_count",kind:"Field",metadata:{},type:"Int"}],fieldName:"poll_options",kind:"Field",metadata:{canHaveSubselections:!0,isPlural:!0},type:"StoryCardPollOption"}],fieldName:"poll",kind:"Field",metadata:{canHaveSubselections:!0,inferredRootCallName:"node",inferredPrimaryKey:"id"},type:"StoryCardPoll"},{children:[{fieldName:"x",kind:"Field",metadata:{},type:"Float"},{fieldName:"y",kind:"Field",metadata:{},type:"Float"},{fieldName:"width",kind:"Field",metadata:{},type:"Float"},{fieldName:"rotation",kind:"Field",metadata:{},type:"Float"},{fieldName:"height",kind:"Field",metadata:{},type:"Float"}],fieldName:"voting_control_bounds",kind:"Field",metadata:{canHaveSubselections:!0},type:"StoryOverlayRectangle"}],id:a.__id(),kind:"Fragment",metadata:{},name:"StoryOverlayPollSticker",type:"StoryOverlayPollSticker"}],fieldName:"montage_overlays",kind:"Field",metadata:{canHaveSubselections:!0,isAbstract:!0,isPlural:!0},type:"StoryOverlay"},{children:[{fieldName:"id",kind:"Field",metadata:{isRequisite:!0},type:"ID"},{children:[{fieldName:"name",kind:"Field",metadata:{},type:"String"},{calls:[{kind:"Call",metadata:{type:"Int"},name:"height",value:{kind:"CallValue",callValue:50}},{kind:"Call",metadata:{type:"Int"},name:"width",value:{kind:"CallValue",callValue:50}}],children:[{fieldName:"uri",kind:"Field",metadata:{},type:"Url"}],fieldName:"profile_picture",kind:"Field",metadata:{canHaveSubselections:!0},type:"Image"},{fieldName:"id",kind:"Field",metadata:{isGenerated:!0,isRequisite:!0},type:"ID"},{fieldName:"__typename",kind:"Field",metadata:{isGenerated:!0,isRequisite:!0},type:"String"}],fieldName:"messaging_actor",kind:"Field",metadata:{canHaveSubselections:!0,inferredRootCallName:"node",inferredPrimaryKey:"id",isAbstract:!0},type:"MessagingActor"}],fieldName:"message_sender",kind:"Field",metadata:{canHaveSubselections:!0,inferredRootCallName:"node",inferredPrimaryKey:"id"},type:"MessagingParticipant"},{children:[{fieldName:"text",kind:"Field",metadata:{},type:"String"},{children:[{fieldName:"offset",kind:"Field",metadata:{},type:"Int"},{fieldName:"length",kind:"Field",metadata:{},type:"Int"},{children:[{fieldName:"__typename",kind:"Field",metadata:{isRequisite:!0},type:"String"},{fieldName:"url",kind:"Field",metadata:{},type:"Url"},{children:[{fieldName:"id",kind:"Field",metadata:{isGenerated:!0,isRequisite:!0},type:"ID"},{fieldName:"__typename",kind:"Field",metadata:{isGenerated:!0,isRequisite:!0},type:"String"}],id:a.__id(),kind:"Fragment",metadata:{isAbstract:!0},name:"IdFragment",type:"Node"}],fieldName:"entity",kind:"Field",metadata:{canHaveSubselections:!0,isAbstract:!0},type:"Entity"}],fieldName:"ranges",kind:"Field",metadata:{canHaveSubselections:!0,isPlural:!0},type:"EntityAtRange"}],fieldName:"montage_attribution",kind:"Field",metadata:{canHaveSubselections:!0},type:"TextWithEntities"},{fieldName:"timestamp",kind:"Field",metadata:{},type:"Time"},{fieldName:"id",kind:"Field",metadata:{isGenerated:!0,isRequisite:!0},type:"ID"}],id:a.__id(),kind:"Fragment",metadata:{},name:"MontageCard_message",type:"UserMessage"}}()}}}})}),null);