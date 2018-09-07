if (self.CavalryLogger) { CavalryLogger.start_js(["P4pXX"]); }

__d("MontageThreadView.react",["cssVar","cx","fbt","MercuryIDs","MessengerEnvironment","MessengerLogo.react","MessengerMarkReadMutation","MessengerParticipants.bs","MontageThumbnail.react","MontageViewerSingleThread.react","React","RelayCompat","Timestamp.react","convertMIGColorToFIGColor","MontageThreadView_threadMessages.graphql"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j;c=b("RelayCompat").createFragmentContainer;b("RelayCompat").graphql;var k=28,l=21;d=b("React").PropTypes;f=babelHelpers.inherits(a,b("React").PureComponent);j=f&&f.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=j.constructor).call.apply(a,[this].concat(e)),this.state={showMontage:!1},this.$1=function(){this.setState({showMontage:!0})}.bind(this),this.$2=function(){var a;this.setState({showMontage:!1});a=(a=this.props.threadMessages)==null?void 0:(a=a.montage_thread)==null?void 0:a.id;a&&b("MessengerMarkReadMutation").commit(this.props.relay.environment,{thread_id:a,update_type:"MARK_READ"})}.bind(this),c}a.prototype.componentDidMount=function(){this.props.threadMessages&&(this.props.onResize&&this.props.onResize());var a=this.getMontageThreadID();a&&(this.props.setThreadID&&this.props.setThreadID(a))};a.prototype.componentDidUpdate=function(a){a.threadMessages!==this.props.threadMessages&&(this.props.onResize&&this.props.onResize())};a.prototype.render=function(){var a=this.getFirstMontageMessage();return!a?null:b("React").createElement("div",{className:"_1sk5"},b("React").createElement("div",{className:"_1sk6"},this.renderContents(a)))};a.prototype.renderContents=function(a){var c=this.getCustomColor(),d=this.getUnread();return b("React").createElement("a",{className:"_5no5",href:"#",onClick:this.$1,role:"button"},b("React").createElement(b("MontageThumbnail.react"),{customColor:c,message:a,unread:d,imageHeight:k,imageWidth:l,shouldRecomputeDimensions:!1}),b("React").createElement("div",{className:"_1sui"},this.renderHeader(d,c),b("React").createElement("span",{className:"_1suk"},b("React").createElement(b("Timestamp.react"),{minimize:!0,time:this.getTimestamp()}))),this.renderLogo(),this.renderModal())};a.prototype.renderModal=function(){var a;a=(a=this.props.threadMessages)==null?void 0:a.montage_thread;return a&&this.state.showMontage?b("React").createElement(b("MontageViewerSingleThread.react"),{onHide:this.$2,open:this.state.showMontage,montageThread:a,unreadCount:a==null?void 0:a.unread_count}):null};a.prototype.renderLogo=function(){return b("MessengerEnvironment").messengerui?null:b("React").createElement(b("MessengerLogo.react"),{color:"rgba(0, 0, 0, 0.3)",size:"17px"})};a.prototype.renderHeader=function(a,c){return a?b("React").createElement("h1",{className:"_1suj",style:{color:c}},i._("Watch {person_with_montage}'s story",[i._param("person_with_montage",this.getAuthorName())])):null};a.prototype.getAuthorName=function(){var a=b("MercuryIDs").getUserIDFromThreadID(this.props.threadID);if(!a)return null;a=b("MessengerParticipants.bs").getNow(b("MercuryIDs").getParticipantIDFromUserID(a));return a&&(a.short_name||a.name)};a.prototype.getFirstMontageMessage=function(){var a;return(a=this.props)!=null?(a=a.threadMessages)!=null?(a=a.montage_thread)!=null?(a=a.montageMessages)!=null?(a=a.edges)!=null?(a=a[0])!=null?a.node:a:a:a:a:a:a};a.prototype.getTimestamp=function(){var a=this.getFirstMontageMessage();return a&&a.timestamp};a.prototype.getCustomColor=function(){var a;a=(a=this.props)!=null?(a=a.threadMessages)!=null?(a=a.customization_info)!=null?a.outgoing_bubble_color:a:a:a;var c;!a?c="#0084ff":c="#"+a.substring(2);return b("convertMIGColorToFIGColor")(c)};a.prototype.getUnread=function(){var a;return!!((a=this.props)!=null?(a=a.threadMessages)!=null?(a=a.montage_thread)!=null?a.unread_count:a:a:a)};a.prototype.getMontageThreadID=function(){var a;return(a=this.props)!=null?(a=a.threadMessages)!=null?(a=a.montage_thread)!=null?(a=a.thread_key)!=null?a.thread_fbid:a:a:a:a};a.propTypes={onResize:d.func,threadMessages:d.object.isRequired,threadID:d.string.isRequired};e.exports=c(a,{threadMessages:{modern:function(){return b("MontageThreadView_threadMessages.graphql")},classic:function(a){var c=b("MontageViewerSingleThread.react").getFragment("montageThread"),d=b("MontageThumbnail.react").getFragment("message",{imageHeight:{kind:"CallVariable",callVariableName:"imageHeight"},imageWidth:{kind:"CallVariable",callVariableName:"imageWidth"}});return{kind:"FragmentDefinition",argumentDefinitions:[{defaultValue:28,kind:"LocalArgument",name:"imageHeight"},{defaultValue:21,kind:"LocalArgument",name:"imageWidth"}],node:function(){return{children:[{children:[{fieldName:"outgoing_bubble_color",kind:"Field",metadata:{},type:"Color"},{fieldName:"id",kind:"Field",metadata:{isGenerated:!0,isRequisite:!0},type:"ID"}],fieldName:"customization_info",kind:"Field",metadata:{canHaveSubselections:!0,inferredRootCallName:"node",inferredPrimaryKey:"id"},type:"MessageThreadCustomization"},{children:[].concat.apply([],[{fieldName:"id",kind:"Field",metadata:{isRequisite:!0},type:"ID"},{children:[{fieldName:"thread_fbid",kind:"Field",metadata:{},type:"String"}],fieldName:"thread_key",kind:"Field",metadata:{canHaveSubselections:!0},type:"MessageThreadKey"},{alias:"montageMessages",calls:[{kind:"Call",metadata:{type:"Int"},name:"last",value:{kind:"CallValue",callValue:1}}],children:[{children:[{children:[].concat.apply([],[{fieldName:"timestamp",kind:"Field",metadata:{},type:"Time"},{fieldName:"__typename",kind:"Field",metadata:{isGenerated:!0,isRequisite:!0},type:"String"},a.__frag(d),{children:[{fieldName:"id",kind:"Field",metadata:{isGenerated:!0,isRequisite:!0},type:"ID"},{fieldName:"__typename",kind:"Field",metadata:{isGenerated:!0,isRequisite:!0},type:"String"}],id:a.__id(),kind:"Fragment",metadata:{isAbstract:!0},name:"IdFragment",type:"Node"}]),fieldName:"node",kind:"Field",metadata:{canHaveSubselections:!0,inferredRootCallName:"node",inferredPrimaryKey:"id",isAbstract:!0,isRequisite:!0},type:"Message"},{fieldName:"cursor",kind:"Field",metadata:{isGenerated:!0,isRequisite:!0},type:"ID"}],fieldName:"edges",kind:"Field",metadata:{canHaveSubselections:!0,isPlural:!0},type:"MessagesOfThreadEdge"},{children:[{fieldName:"has_next_page",kind:"Field",metadata:{isGenerated:!0,isRequisite:!0},type:"Boolean"},{fieldName:"has_previous_page",kind:"Field",metadata:{isGenerated:!0,isRequisite:!0},type:"Boolean"}],fieldName:"page_info",kind:"Field",metadata:{canHaveSubselections:!0,isGenerated:!0,isRequisite:!0},type:"PageInfo"}],fieldName:"messages",kind:"Field",metadata:{canHaveSubselections:!0,isConnection:!0},type:"MessagesOfThreadConnection"},{fieldName:"unread_count",kind:"Field",metadata:{},type:"Int"},a.__frag(c)]),fieldName:"montage_thread",kind:"Field",metadata:{canHaveSubselections:!0,inferredRootCallName:"node",inferredPrimaryKey:"id"},type:"MessageThread"},{fieldName:"id",kind:"Field",metadata:{isGenerated:!0,isRequisite:!0},type:"ID"}],id:a.__id(),kind:"Fragment",metadata:{},name:"MontageThreadView_threadMessages",type:"MessageThread"}}()}}}})}),null);