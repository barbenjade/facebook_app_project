if (self.CavalryLogger) { CavalryLogger.start_js(["GXBIZ"]); }

__d("UFIMuteMemberDialog.react",["ix","cx","fbt","DatePickerRestraints","GroupsMemberMuteDurationDefaults","Image.react","Layout.react","MuteTimePickerGK","React","XUICalendar.react","XUIDateTimePicker.react","XUIDateTimePickerUtils","XUIDialogButton.react","XUIDialogCancelButton.react","XUIDialogTitle.react","XUIDialogBody.react","XUIDialogFooter.react","XUIText.react","XUIRadioList.react","fbglyph"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j,k=b("Layout.react").Column,l=b("Layout.react").FillColumn,m=b("XUIRadioList.react").Item,n="group_mute_member_dialog_title";c=babelHelpers.inherits(a,b("React").Component);j=c&&c.prototype;function a(a){j.constructor.call(this,a);this.onTimeChange=function(a){this.setState({muteDuration:a,customSelected:a===b("GroupsMemberMuteDurationDefaults").CUSTOM})}.bind(this);this.onMuteConfirm=function(){this.props.onConfirm(this.state.muteDuration,this.state.customedExpirationTime.getTime()/1e3)}.bind(this);a=new Date();a.setHours(a.getHours()+1,0,0,0);var c=b("GroupsMemberMuteDurationDefaults").ONE_DAY;this.state={currentTime:Date.now(),customedExpirationTime:a,customSelected:!1,muteDuration:c}}a.prototype.$1=function(){return[b("DatePickerRestraints").enforceDateIsNoEarlierThan(b("XUICalendar.react").normalizeDate(b("XUIDateTimePickerUtils").getOffsetUIDate(new Date(this.state.currentTime))))]};a.prototype.$2=function(){return this.state.customedExpirationTime.getTime()<=this.state.currentTime?i._("Please select a mute expiration time in the future"):null};a.prototype.$3=function(){return[b("GroupsMemberMuteDurationDefaults").HALF_DAY,b("GroupsMemberMuteDurationDefaults").ONE_DAY,b("GroupsMemberMuteDurationDefaults").THREE_DAYS,b("GroupsMemberMuteDurationDefaults").SEVEN_DAYS]};a.prototype.getMuteDurationLabel=function(a){switch(a){case b("GroupsMemberMuteDurationDefaults").ONE_HOUR:return b("React").createElement(m,{value:b("GroupsMemberMuteDurationDefaults").ONE_HOUR,key:b("GroupsMemberMuteDurationDefaults").ONE_HOUR},i._({"*":"{item} Hour"},[i._param("item",1,[0])]));case b("GroupsMemberMuteDurationDefaults").SIX_HOURS:return b("React").createElement(m,{value:b("GroupsMemberMuteDurationDefaults").SIX_HOURS,key:b("GroupsMemberMuteDurationDefaults").SIX_HOURS},i._({"*":"{item} Hours"},[i._param("item",6,[0])]));case b("GroupsMemberMuteDurationDefaults").HALF_DAY:return b("React").createElement(m,{value:b("GroupsMemberMuteDurationDefaults").HALF_DAY,key:b("GroupsMemberMuteDurationDefaults").HALF_DAY},i._({"*":"{item} Hours"},[i._param("item",12,[0])]));case b("GroupsMemberMuteDurationDefaults").ONE_DAY:return b("React").createElement(m,{value:b("GroupsMemberMuteDurationDefaults").ONE_DAY,key:b("GroupsMemberMuteDurationDefaults").ONE_DAY},i._({"*":"{item} Hours"},[i._param("item",24,[0])]));case b("GroupsMemberMuteDurationDefaults").THREE_DAYS:return b("React").createElement(m,{value:b("GroupsMemberMuteDurationDefaults").THREE_DAYS,key:b("GroupsMemberMuteDurationDefaults").THREE_DAYS},i._({"*":"{item} Days"},[i._param("item",3,[0])]));case b("GroupsMemberMuteDurationDefaults").SEVEN_DAYS:return b("React").createElement(m,{value:b("GroupsMemberMuteDurationDefaults").SEVEN_DAYS,key:b("GroupsMemberMuteDurationDefaults").SEVEN_DAYS},i._({"*":"{item} Days"},[i._param("item",7,[0])]))}return null};a.prototype.$4=function(){var a=b("MuteTimePickerGK").enableTimePicker,c=null,d=this.$3();d=d.map(function(a){return this.getMuteDurationLabel(a)}.bind(this));a&&(c=b("React").createElement(m,{value:b("GroupsMemberMuteDurationDefaults").CUSTOM},i._("Custom:")));return b("React").createElement(b("XUIRadioList.react"),{selectedValue:this.state.muteDuration,onValueChange:this.onTimeChange},c,d)};a.prototype.render=function(){var a=b("React").createElement("div",null,b("React").createElement(b("XUIDialogCancelButton.react"),null),b("React").createElement(b("XUIDialogButton.react"),{action:"cancel","data-testid":"ufi_hide_dialog_delete_button",label:i._("Mute"),use:"confirm",onClick:this.onMuteConfirm}));return b("React").createElement("div",null,b("React").createElement(b("XUIDialogTitle.react"),{id:n},b("React").createElement(b("XUIText.react"),null,i._("Mute {name}?",[i._param("name",this.props.name)]))),b("React").createElement(b("XUIDialogBody.react"),null,b("React").createElement("div",{className:"_11e1"},b("React").createElement(b("XUIText.react"),null,i._("{name} won't be able to post or comment in the group. Select how long you'd like to temporarily mute {member}.",[i._param("name",b("React").createElement("span",null," ",this.props.name," ")),i._param("member",b("React").createElement("span",null," ",this.props.name))]))),this.$4(),b("React").createElement(b("Layout.react"),{className:"_3-8i"},b("React").createElement(l,null),b("React").createElement(k,null,b("React").createElement(b("XUIDateTimePicker.react"),{date:this.state.customedExpirationTime,onChange:function(a){return this.setState({customedExpirationTime:a})}.bind(this),dateRestraints:this.$1(),xuiError:this.$2(),dateIcon:b("React").createElement(b("Image.react"),{src:g("112905")}),className:this.state.customSelected?"":"hidden_elem"})),b("React").createElement(l,null))),b("React").createElement(b("XUIDialogFooter.react"),null,a))};e.exports.UFIMuteMemberDialog=a;e.exports.MuteDialogID=n}),null);