if (self.CavalryLogger) { CavalryLogger.start_js(["Z9K\/9"]); }

__d("MontageSpotlightViewer.react",["KeyEventController","MessengerMobileWindow.react","MessengerMontageClientTypedLogger","MontageCard.react","MontageCardPhoto.react","MontageCardSticker.react","MontageCardText.react","MontageCardVideo.react","React","RelayCompat","SubscriptionsHandler","MontageSpotlightViewer_messages.graphql","MontageSpotlightViewer_message.graphql"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;c=b("RelayCompat").createFragmentContainer;b("RelayCompat").graphql;d=b("React").PropTypes;var h=150,i=300,j={auto_play:"auto_play",click:"click",arrow:"arrow",esc:"esc",click_exit_button:"click_exit_button"},k={next:"_next",prev:"_prev"},l=function(event,a){return a=="onkeyup"?b("KeyEventController").filterEventTargets(event,a)&&b("KeyEventController").filterEventModifiers(event,a):!1};f=babelHelpers.inherits(a,b("React").Component);g=f&&f.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=g.constructor).call.apply(a,[this].concat(e)),this.state=this.initialState(),this.$1=new(b("SubscriptionsHandler"))(),this.$2="unknown",this.$3=null,this.$6=function(){this.setState({paused:Date.now()})}.bind(this),this.$7=function(event){var a=event.nativeEvent.offsetX,b=Date.now()-this.state.paused;b<i?a<h?this.$4(j.click):this.$5(j.click):this.setState({paused:0})}.bind(this),this.$9=function(){this.setState({cardIndex:0,paused:0,open:!1})}.bind(this),this.$8=function(){this.$3=Date.now()}.bind(this),this.$12=this.$5.bind(this,j.auto_play),c}a.prototype.initialState=function(){var a;a=(a=(a=this.props.messages)==null?void 0:a.count)!=null?a:1;return{cardIndex:this.props.initialUnreadCount?a-this.props.initialUnreadCount:0,open:!0,paused:0}};a.prototype.componentDidMount=function(){this.$1.addSubscriptions(b("KeyEventController").registerKey("LEFT",function(){this.$4(j.arrow);return!1}.bind(this)),b("KeyEventController").registerKey("RIGHT",function(){this.$5(j.arrow);return!1}.bind(this)),b("KeyEventController").registerKey("SPACE",function(){this.state.paused||this.$6();return!1}.bind(this)),b("KeyEventController").registerKey("SPACE",function(a){this.$7(a);return!1}.bind(this),l)),this.$8()};a.prototype.render=function(){return b("React").createElement(b("MessengerMobileWindow.react"),{onClose:this.$9,onHide:this.props.onHide,onMouseDown:this.$6,onMouseUp:this.$7,open:this.state.open},this.$10())};a.prototype.componentWillUnmount=function(){this.$1&&this.$1.release(),this.$1=null};a.prototype.$10=function(){__p&&__p();var a=this.props.messages||{edges:[{node:this.props.message}]};return a.edges.map(function(a,c){__p&&__p();var d,e;a=a.node;if(!a||c<this.state.cardIndex-3||c>this.state.cardIndex+3)return null;d=a==null?void 0:(d=a.blob_attachments)==null?void 0:d[0];var f=a==null?void 0:a.sticker;e=(e=(e=this.props.messages)==null?void 0:e.count)!=null?e:1;c=c===this.state.cardIndex;var g=!(c&&!this.state.paused),h=null,i=d&&d.__typename;i==="MessageImage"?(c&&this.$11("photo"),h=b("React").createElement(b("MontageCardPhoto.react"),{active:c,onEnded:this.$12,paused:g,photoAttachment:d})):i==="MessageVideo"?(c&&this.$11("video"),h=b("React").createElement(b("MontageCardVideo.react"),{active:c,onEnded:this.$12,paused:g,videoAttachment:d})):f?(c&&this.$11("sticker"),h=b("React").createElement(b("MontageCardSticker.react"),{active:c,onEnded:this.$12,paused:g,sticker:f})):(c&&this.$11("text"),h=b("React").createElement(b("MontageCardText.react"),{active:c,onEnded:this.$12,paused:g,userMessage:a}));return h?b("React").createElement(b("MontageCard.react"),{active:c,activeIndex:this.state.cardIndex,count:e,key:a==null?void 0:a.message_id,relay:this.props.relay,message:a},h):null}.bind(this)).filter(Boolean)};a.prototype.$11=function(a){this.$2=a};a.prototype.$4=function(a){this.logMessageExit(a+k.prev);a=this.state.cardIndex-1;if(a<0){this.$9();return}this.setState({cardIndex:a,paused:0},this.$8)};a.prototype.$5=function(a){this.logMessageExit(a+k.next);a=(a=(a=this.props.messages)==null?void 0:a.count)!=null?a:1;var b=this.state.cardIndex+1;if(b>=a){this.$9();return}this.props.loadMore(1);this.setState({cardIndex:b,paused:0},this.$8)};a.prototype.logMessageExit=function(a){__p&&__p();var c,d,e=Date.now();c=(c=(c=this.props.messages)==null?void 0:c.count)!=null?c:1;var f=this.props.initialUnreadCount||c;c=this.state.cardIndex-(c-f)+1;var g=this.props.initialUnreadCount?"unseen":"seen";if(this.props.messages){var h=this.props.messages.edges[this.state.cardIndex];h=h&&h.node}else h=this.props.message;if(!h||!this.$3)return;e=e-this.$3;new(b("MessengerMontageClientTypedLogger"))().setEvent("message_exit").setMid((d=h)==null?void 0:d.message_id).setOwnerID((d=h)==null?void 0:(d=d.message_sender)==null?void 0:d.id).setMessageSource((d=h)==null?void 0:(h=d.message_source_data)==null?void 0:h.message_source).setExitAction(a).setContentType(this.$2).setTotalQueue(f).setQueueType(g).setCurrentPosition(c).setEntryPoint(this.props.entryPoint).setMessageStartTime(this.$3).setMessageDuration(e).log()};a.propTypes={entryPoint:d.oneOf(["thread_head","reply_context"]),initialUnreadCount:d.number,onHide:d.func.isRequired,loadMore:d.func.isRequired,message:d.object,messages:d.object,relay:d.object.isRequired};e.exports=c(a,{messages:{modern:function(){return b("MontageSpotlightViewer_messages.graphql")},classic:function(a){var c=b("MontageCard.react").getFragment("message"),d=b("MontageCardText.react").getFragment("userMessage"),e=b("MontageCardPhoto.react").getFragment("photoAttachment"),f=b("MontageCardVideo.react").getFragment("videoAttachment"),g=b("MontageCardSticker.react").getFragment("sticker");return{kind:"FragmentDefinition",argumentDefinitions:[],node:function(){return{children:[{fieldName:"count",kind:"Field",metadata:{},type:"Int"},{children:[{children:[{fieldName:"__typename",kind:"Field",metadata:{isGenerated:!0,isRequisite:!0},type:"String"},{children:[].concat.apply([],[{fieldName:"message_id",kind:"Field",metadata:{},type:"ID"},{children:[{fieldName:"id",kind:"Field",metadata:{isRequisite:!0},type:"ID"}],fieldName:"message_sender",kind:"Field",metadata:{canHaveSubselections:!0,inferredRootCallName:"node",inferredPrimaryKey:"id"},type:"MessagingParticipant"},{children:[{fieldName:"message_source",kind:"Field",metadata:{},type:"String"}],fieldName:"message_source_data",kind:"Field",metadata:{canHaveSubselections:!0},type:"MessageSourceData"},{children:[].concat.apply([],[{fieldName:"__typename",kind:"Field",metadata:{isRequisite:!0},type:"String"},a.__frag(e),a.__frag(f),{children:[{fieldName:"id",kind:"Field",metadata:{isGenerated:!0,isRequisite:!0},type:"ID"},{fieldName:"__typename",kind:"Field",metadata:{isGenerated:!0,isRequisite:!0},type:"String"}],id:a.__id(),kind:"Fragment",metadata:{isAbstract:!0},name:"IdFragment",type:"Node"}]),fieldName:"blob_attachments",kind:"Field",metadata:{canHaveSubselections:!0,inferredRootCallName:"node",inferredPrimaryKey:"id",isAbstract:!0,isPlural:!0},type:"MessageBlobAttachment"},{children:[].concat.apply([],[{fieldName:"id",kind:"Field",metadata:{isGenerated:!0,isRequisite:!0},type:"ID"},a.__frag(g)]),fieldName:"sticker",kind:"Field",metadata:{canHaveSubselections:!0,inferredRootCallName:"node",inferredPrimaryKey:"id"},type:"Sticker"},{fieldName:"id",kind:"Field",metadata:{isGenerated:!0,isRequisite:!0},type:"ID"},a.__frag(c),a.__frag(d)]),id:a.__id(),kind:"Fragment",metadata:{},name:"UserMessage",type:"UserMessage"},{children:[{fieldName:"id",kind:"Field",metadata:{isGenerated:!0,isRequisite:!0},type:"ID"},{fieldName:"__typename",kind:"Field",metadata:{isGenerated:!0,isRequisite:!0},type:"String"}],id:a.__id(),kind:"Fragment",metadata:{isAbstract:!0},name:"IdFragment",type:"Node"}],fieldName:"node",kind:"Field",metadata:{canHaveSubselections:!0,inferredRootCallName:"node",inferredPrimaryKey:"id",isAbstract:!0,isRequisite:!0},type:"Message"},{fieldName:"cursor",kind:"Field",metadata:{isGenerated:!0,isRequisite:!0},type:"ID"}],fieldName:"edges",kind:"Field",metadata:{canHaveSubselections:!0,isPlural:!0},type:"MessagesOfThreadEdge"},{children:[{fieldName:"has_next_page",kind:"Field",metadata:{isGenerated:!0,isRequisite:!0},type:"Boolean"},{fieldName:"has_previous_page",kind:"Field",metadata:{isGenerated:!0,isRequisite:!0},type:"Boolean"}],fieldName:"page_info",kind:"Field",metadata:{canHaveSubselections:!0,isGenerated:!0,isRequisite:!0},type:"PageInfo"}],id:a.__id(),kind:"Fragment",metadata:{},name:"MontageSpotlightViewer_messages",type:"MessagesOfThreadConnection"}}()}}},message:{modern:function(){return b("MontageSpotlightViewer_message.graphql")},classic:function(a){var c=b("MontageCard.react").getFragment("message"),d=b("MontageCardText.react").getFragment("userMessage"),e=b("MontageCardPhoto.react").getFragment("photoAttachment"),f=b("MontageCardVideo.react").getFragment("videoAttachment"),g=b("MontageCardSticker.react").getFragment("sticker");return{kind:"FragmentDefinition",argumentDefinitions:[],node:function(){return{children:[].concat.apply([],[{fieldName:"message_id",kind:"Field",metadata:{},type:"ID"},{children:[{fieldName:"id",kind:"Field",metadata:{isRequisite:!0},type:"ID"}],fieldName:"message_sender",kind:"Field",metadata:{canHaveSubselections:!0,inferredRootCallName:"node",inferredPrimaryKey:"id"},type:"MessagingParticipant"},{children:[{fieldName:"message_source",kind:"Field",metadata:{},type:"String"}],fieldName:"message_source_data",kind:"Field",metadata:{canHaveSubselections:!0},type:"MessageSourceData"},{children:[].concat.apply([],[{fieldName:"__typename",kind:"Field",metadata:{isRequisite:!0},type:"String"},a.__frag(e),a.__frag(f),{children:[{fieldName:"id",kind:"Field",metadata:{isGenerated:!0,isRequisite:!0},type:"ID"},{fieldName:"__typename",kind:"Field",metadata:{isGenerated:!0,isRequisite:!0},type:"String"}],id:a.__id(),kind:"Fragment",metadata:{isAbstract:!0},name:"IdFragment",type:"Node"}]),fieldName:"blob_attachments",kind:"Field",metadata:{canHaveSubselections:!0,inferredRootCallName:"node",inferredPrimaryKey:"id",isAbstract:!0,isPlural:!0},type:"MessageBlobAttachment"},{children:[].concat.apply([],[{fieldName:"id",kind:"Field",metadata:{isGenerated:!0,isRequisite:!0},type:"ID"},a.__frag(g)]),fieldName:"sticker",kind:"Field",metadata:{canHaveSubselections:!0,inferredRootCallName:"node",inferredPrimaryKey:"id"},type:"Sticker"},{fieldName:"id",kind:"Field",metadata:{isGenerated:!0,isRequisite:!0},type:"ID"},a.__frag(c),a.__frag(d)]),id:a.__id(),kind:"Fragment",metadata:{},name:"MontageSpotlightViewer_message",type:"UserMessage"}}()}}}})}),null);