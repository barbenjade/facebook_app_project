if (self.CavalryLogger) { CavalryLogger.start_js(["oNJxw"]); }

__d("GroupsRemoveUserWithOtherOptionsDialog.react",["fbt","FDSButton.react","FDSCancelButton.react","FDSModal.react","FDSModalFooter.react","FDSModalHeader.react","FDSSection.react","FDSText.react","GroupAdminActivityRemoveUserWithOtherOptionsMutation","GroupsSpamSniperDialog.react","LayerFadeOnHide","React","RelayFBEnvironment"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=babelHelpers.inherits(a,b("React").Component);h=c&&c.prototype;function a(){__p&&__p();var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=h.constructor).call.apply(a,[this].concat(d)),this.state={isApplyToOtherGroupsSelected:!1,isBlockMemberSelected:!1,isDeclinePendingInviteSelected:!1,isDeleteCommentSelected:!1,isDeletePollSelected:!1,isDeletePostSelected:!1,isDeleteStorySelected:!1,isErrorDialogShown:!1},this.updateDeclinePendingInviteStatus=function(){this.setState(function(a){return{isDeclinePendingInviteSelected:!a.isDeclinePendingInviteSelected}})}.bind(this),this.updateDeleteCommentStatus=function(){this.setState(function(a){return{isDeleteCommentSelected:!a.isDeleteCommentSelected}})}.bind(this),this.updateDeletePollStatus=function(){this.setState(function(a){return{isDeletePollSelected:!a.isDeletePollSelected}})}.bind(this),this.updateDeletePostStatus=function(){this.setState(function(a){return{isDeletePostSelected:!a.isDeletePostSelected}})}.bind(this),this.updateDeleteStoryStatus=function(){this.setState(function(a){return{isDeleteStorySelected:!a.isDeleteStorySelected}})}.bind(this),this.updateBlockMemberStatus=function(){this.setState(function(a){return{isBlockMemberSelected:!a.isBlockMemberSelected}})}.bind(this),this.updateApplyToOtherGroupsStatus=function(){this.setState(function(a){return{isApplyToOtherGroupsSelected:!a.isApplyToOtherGroupsSelected}})}.bind(this),this.onConfirm=function(){this.removeUserAndContent(),this.props.onConfirm()}.bind(this),this.onHide=function(){this.props.onHide()}.bind(this),this.onHideErrorDialog=function(){this.setState({isErrorDialogShown:!1})}.bind(this),b}a.prototype.removeUserAndContent=function(){b("GroupAdminActivityRemoveUserWithOtherOptionsMutation").commit(b("RelayFBEnvironment"),{groupID:this.props.groupID,contentID:this.props.contentID,contentOwnerID:this.props.contentOwnerID,actorID:this.props.actorID,clientMutationID:this.props.clientMutationID,shouldApplyToOtherGroups:this.state.isApplyToOtherGroupsSelected,shouldBlockUser:this.state.isBlockMemberSelected,shouldDeleteRecentComments:this.state.isDeleteCommentSelected,shouldDeleteRecentPendingInvites:this.state.isDeclinePendingInviteSelected,shouldDeleteRecentPolls:this.state.isDeletePollSelected,shouldDeleteRecentPosts:this.state.isDeletePostSelected,shouldDeleteRecentStoryThreads:this.state.isDeleteStorySelected},function(){},function(){this.setState({isErrorDialogShown:!0})}.bind(this))};a.prototype.render=function(){return b("React").createElement(b("React").Fragment,null,b("React").createElement(b("FDSModal.react"),{behaviors:{LayerFadeOnHide:b("LayerFadeOnHide")},label:"Remove Member",header:b("React").createElement(b("FDSModalHeader.react"),{title:g._("Remove Member")}),footer:b("React").createElement(b("FDSModalFooter.react"),{primaryButton:b("React").createElement(b("FDSButton.react"),{label:"Confirm",use:"primary",onClick:this.onConfirm}),secondaryButton:b("React").createElement(b("FDSCancelButton.react"),null)}),isShown:this.props.shouldShowDialog,onHide:this.onHide},b("React").createElement(b("FDSSection.react"),null,b("React").createElement(b("FDSText.react"),{size:"header4"},this.props.subtitle),b("React").createElement(b("GroupsSpamSniperDialog.react"),{contentID:this.props.contentID,contentOwnerID:this.props.contentOwnerID,contentOwnerName:this.props.contentOwnerName,groupID:this.props.groupID,updateApplyToOtherGroupsStatus:this.updateApplyToOtherGroupsStatus,updateBlockMemberStatus:this.updateBlockMemberStatus,updateDeclinePendingInviteStatus:this.updateDeclinePendingInviteStatus,updateDeleteCommentStatus:this.updateDeleteCommentStatus,updateDeletePollStatus:this.updateDeletePollStatus,updateDeletePostStatus:this.updateDeletePostStatus,updateDeleteStoryStatus:this.updateDeleteStoryStatus,shouldShowApplyToOtherGroups:this.props.shouldShowApplyToOtherGroups,shouldShowBlockMember:this.props.shouldShowBlockMember,shouldShowDeclinePendingInvite:this.props.shouldShowDeclinePendingInvite,shouldShowDeleteComment:this.props.shouldShowDeleteComment,shouldShowDeletePoll:this.props.shouldShowDeletePoll,shouldShowDeletePost:this.props.shouldShowDeletePost,shouldShowDeleteStory:this.props.shouldShowDeleteStory}))),b("React").createElement(b("FDSModal.react"),{label:"Error Dialog",header:b("React").createElement(b("FDSModalHeader.react"),{title:g._("Delete Failed")}),footer:b("React").createElement(b("FDSModalFooter.react"),{primaryButton:b("React").createElement(b("FDSButton.react"),{label:"OK",use:"primary",onClick:this.onHideErrorDialog})}),isShown:this.state.isErrorDialogShown,onHide:this.onHideErrorDialog},b("React").createElement(b("FDSSection.react"),null,b("React").createElement(b("FDSText.react"),{size:"header4"},g._("Something went wrong, please try again.")))))};e.exports=a}),null);