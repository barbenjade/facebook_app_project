if (self.CavalryLogger) { CavalryLogger.start_js(["Y2Rve"]); }

__d("LiveVideoBroadcastComposerCrosspostSelectionPane.react",["cx","fbt","LiveVideoBroadcastActions","LiveVideoBroadcastComposerCrosspostToggle.react","LiveVideoBroadcastCrosspostErrorMessageWrapper.react","LiveVideoCrosspostingConfig","React","SearchableEntry","StaticSearchSource","XUIButton.react","XUIGrayText.react","XUITypeahead.react"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j=b("LiveVideoCrosspostingConfig").maxCrossposts;function k(a){return new(b("StaticSearchSource"))(a.configs.map(function(a){return new(b("SearchableEntry"))({keywordString:a.name,title:a.name,uniqueID:a.id})}))}c=babelHelpers.inherits(a,b("React").Component);i=c&&c.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=i.constructor).call.apply(a,[this].concat(e)),this.state={queryString:"",searchSource:k(this.props)},this.$5=function(a,b){this.props.onToggleAll(b)}.bind(this),this.$6=function(a){return b("React").createElement(b("LiveVideoBroadcastComposerCrosspostToggle.react"),{config:a,key:a.id,onToggle:this.props.onToggle})}.bind(this),this.$2=function(event){this.setState({queryString:event.target.value})}.bind(this),this.$4=function(a){var c=a.getUniqueID(),d=this.props.configs.some(function(a){return a.id===c&&a.allow});b("LiveVideoBroadcastActions").setCrosspostToPage(a.getUniqueID(),!d);this.setState({queryString:""})}.bind(this),this.$3=function(event){this.setState({queryString:""})}.bind(this),c}a.prototype.render=function(){var a=this.$1();return[b("React").createElement("div",{className:"_1umu",key:"header"},b("React").createElement(b("XUIGrayText.react"),{shade:"medium",size:"header3"},h._("Select Pages"))),b("React").createElement("div",{className:"_1umv",key:"typeahead"},b("React").createElement(b("XUITypeahead.react"),{autoHighlight:!0,className:"_1una",clearable:!1,highlightOnSelect:!0,placeholder:h._("Search for Pages you can crosspost to"),queryString:this.state.queryString,searchSource:this.state.searchSource,tallInput:!0,viewStyle:"textonly",onChange:this.$2,onClear:this.$3,onSelectAttempt:this.$4})),b("React").createElement("div",{className:"_1unb",key:"rest"},b("React").createElement(b("LiveVideoBroadcastComposerCrosspostToggle.react"),{config:{allow:this.props.configs.every(function(a){return a.allow}),id:"__selectall__",name:h._("Select All").toString(),type:"page",can_create_post:!0},key:"selectall",onToggle:this.$5}),this.props.configs.map(this.$6)),b("React").createElement(b("LiveVideoBroadcastCrosspostErrorMessageWrapper.react"),{key:"action",selectedCount:a},b("React").createElement("div",{className:"_1unc"},b("React").createElement("div",{className:"_2ip6 _1und"},b("React").createElement(b("XUIGrayText.react"),{shade:"light"},h._("{count} selected",[h._param("count",a)]))),b("React").createElement("div",{className:"_eg3"},b("React").createElement(b("XUIButton.react"),{className:"_227w",disabled:a>j,label:h._("Done"),use:"confirm",onClick:this.props.onClosePane}))))]};a.prototype.$1=function(){return this.props.configs.reduce(function(a,b){return b.allow?a+1:a},0)};e.exports=a}),null);