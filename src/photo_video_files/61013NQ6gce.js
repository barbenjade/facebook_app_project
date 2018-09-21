if (self.CavalryLogger) { CavalryLogger.start_js(["TzRMS"]); }

__d("VideoContentTagSelectorToken.react",["cx","fbt","AnyTokenSearchSource","ComposerVideoTabsIdentifiers","CompositeSearchSource","DOMQuery","InterestTaxonomyTypeaheadAppType","React","ReactLayeredComponentMixin_DEPRECATED","SearchableEntry","VideoUploadUILoggerEvents","WebAsyncSearchSource","XInterestTaxonomyTypeaheadDataSourceController","XUIAmbientNUX.react","XUIText.react","XUITokenizer.react"],(function(a,b,c,d,e,f,g,h){__p&&__p();a=b("React").PropTypes;var i=8,j=255;c=b("React").createClass({displayName:"VideoContentTagSelectorToken",mixins:[b("ReactLayeredComponentMixin_DEPRECATED")],_compositeSearchSource:b("CompositeSearchSource"),propTypes:{accessToken:a.string,isBroadcast:a.bool,logger:a.object,onChange:a.func,showTagSelectorNux:a.bool,value:a.array},getInitialState:function(){return{allowFreeForm:!0,currentEntries:[],disabled:!1,entries:[],queryString:"",showTagSelectorNux:this.props.showTagSelectorNux}},UNSAFE_componentWillMount:function(){var a=b("XInterestTaxonomyTypeaheadDataSourceController").getURIBuilder().setEnum("app",b("InterestTaxonomyTypeaheadAppType").VIDEO_CREATION).getURI();this._compositeSearchSource=new(b("CompositeSearchSource"))([new(b("WebAsyncSearchSource"))({queryRequests:[{uri:a}]})].concat(this.props.isBroadcast?[]:[new(b("AnyTokenSearchSource"))(function(a){var c=h._("Add a new tag \"{free form tag}\"",[h._param("free form tag",a)]);return new(b("SearchableEntry"))({uniqueID:a,title:c,auxiliaryData:{isFreeForm:!0}})})]))},componentDidMount:function(){this.props.value&&this.props.value.length>0&&this._onEntriesChange(this.props.value)},_isExceedingMaxTagCount:function(){return this.state.entries.length>=i},_onEntriesChange:function(a){this.props.onChange&&this.props.onChange(a),this.setState({entries:a})},_hasEntry:function(a){var b=a.getUniqueID(),c=a.getAuxiliaryData().isFreeForm,d=a.getTitle();a=this.state.entries;a=a.some(function(a){if(a.getUniqueID()===b)return!0;else if(c&&b===a.getTitle()||a.getAuxiliaryData().isFreeForm&&a.getUniqueID()===d)return!0;return!1});return a},_onAddEntryAttempt:function(a){__p&&__p();this._logEvent(b("VideoUploadUILoggerEvents").CONTENT_TAGS_SELECTED);if(this._hasEntry(a))return;var c=this.state.entries;if(this._isExceedingMaxTagCount(c))return;var d=a;a.getAuxiliaryData().isFreeForm&&(d=new(b("SearchableEntry"))({uniqueID:a.getUniqueID(),title:a.getUniqueID(),auxiliaryData:{isFreeForm:!0}}));c.push(d);this._onEntriesChange(c)},_onRemoveEntryAttempt:function(a){this._logEvent(b("VideoUploadUILoggerEvents").CONTENT_TAGS_REMOVED);var c=this.state.entries;this._hasEntry(a)&&c.splice(c.indexOf(a),1);this._onEntriesChange(c)},_hasFreeFormEntry:function(a,b){b=b.some(function(b){return a===b.getTitle()});return b},_onInputChange:function(event){var a=event.target.value,b=this._hasFreeFormEntry(a,this.state.entries.concat(this.state.currentEntries));this.setState({allowFreeForm:!b,queryString:a})},_onEntriesFound:function(a){var b=this._hasFreeFormEntry(this.state.queryString,a.concat(this.state.currentEntries));this.setState({allowFreeForm:this.state.allowFreeForm&&!b,currentEntries:a})},_logEvent:function(a,c){this.props.logger&&this.props.logger.logEvent(a,b("ComposerVideoTabsIdentifiers").BASIC,c)},renderLayers:function(){var a=null;this.state.showTagSelectorNux&&(a=b("React").createElement(b("XUIAmbientNUX.react"),{context:b("DOMQuery").find(document.body,".videoContentTagSelectorToken"),onCloseButtonClick:this._onNuxClose,position:"below",shown:!0,width:"custom",customwidth:j},b("React").createElement("div",null,b("React").createElement(b("XUIText.react"),{size:"meta1",weight:"bold"},h._("Add Video Tags"))),b("React").createElement("div",null,b("React").createElement(b("XUIText.react"),{size:"meta1"},h._("Tag topics and themes in this video to help reach audiences that may enjoy your content.")))));return{tagNux:a}},renderNotice:function(){return!this._isExceedingMaxTagCount()?null:b("React").createElement("div",{className:"_5f81"},b("React").createElement(b("XUIText.react"),{size:"meta1",display:"block"},h._("You've added the maximum number of tags.")))},render:function(){var a=this._compositeSearchSource,c={};this.state.allowFreeForm||(c[this.state.queryString]=new(b("SearchableEntry"))({uniqueID:this.state.queryString,title:this.state.queryString}));return b("React").createElement("div",null,b("React").createElement(b("XUITokenizer.react"),{className:"videoContentTagSelectorToken",entries:this.state.entries,excludedEntries:c,limit:i,placeholder:h._("Add tags (ex: comedy, animals, make-up etc.)"),searchSource:a,onEntriesFound:this._onEntriesFound,onQueryStringChange:this._onInputChange,onRemoveEntryAttempt:this._onRemoveEntryAttempt,onAddEntryAttempt:this._onAddEntryAttempt,onInputFocus:this._onNuxClose}),this.renderNotice())}});e.exports=c}),null);