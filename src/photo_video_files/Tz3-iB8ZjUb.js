if (self.CavalryLogger) { CavalryLogger.start_js(["pIrOL"]); }

__d("VideoPlayerHTML5Subtitles",["csx","cx","CSS","DOM","DOMQuery","SubtitlesStyle","VideoCaptionBackgroundOpacityType","VideoCaptionTextSizeType"],(function(a,b,c,d,e,f,g,h){__p&&__p();function a(a,b){"use strict";this.$3="",this.$6=a,this.$7=b}a.prototype.loadSubtitles=function(){"use strict";var a=b("DOMQuery").scry(this.$6.parentNode,"._30vn");a.length?(this.$1=a[0],this.$2=b("DOMQuery").find(this.$1,"._30vo")):(this.$1=b("DOM").create("div",{className:"_30vn hidden_elem"}),this.$2=b("DOM").create("span",{className:"_30vo hidden_elem"}),b("DOM").setContent(this.$1,this.$2),b("DOM").insertAfter(this.$6,this.$1));this.setDimensions();this.$7.setSubtitleUpdatedHandler(function(){return this.setSubtitle.apply(this,arguments)}.bind(this));this.$7.setSubtitlesStyleLeftAlignmentUpdatedHandler(function(a){return this.setSubtitlesStyleLeftAlignment(a)}.bind(this))};a.prototype.setSubtitlesStyleLeftAlignment=function(a){"use strict";this.$5?(this.$5.setLeftAligned(a),this.$5.updateStyle()):this.$5=new(b("SubtitlesStyle"))(b("SubtitlesStyle").DEFAULT_BACKGROUND_COLOR,b("VideoCaptionBackgroundOpacityType").DEFAULT,this.$2,this.$1,b("SubtitlesStyle").DEFAULT_TEXT_COLOR,b("VideoCaptionTextSizeType").DEFAULT,a)};a.prototype.setSubtitlesStyle=function(a,c,d,e){"use strict";this.$5?(this.$5.setBackgroundColor(a),this.$5.setBackgroundOpacity(c),this.$5.setTextColor(d),this.$5.setTextSize(e),this.$5.updateStyle()):this.$5=new(b("SubtitlesStyle"))(a,c,this.$2,this.$1,d,e,!1)};a.prototype.$8=function(a){"use strict";this.$1&&b("DOM").setAttributes(this.$1,{style:"bottom:"+a+"px;"})};a.prototype.$9=function(){"use strict";this.$4&&(this.$4.release(),this.$4.removeAllListeners(),delete this.$4)};a.prototype.registerDrawer=function(a){"use strict";this.$9(),this.$4=a,this.$4.addListener("reposition",this.$8.bind(this))};a.prototype.setDimensions=function(){"use strict";var a=this.$6.getBoundingClientRect().width;this.$1&&(a<350?(b("CSS").removeClass(this.$1,"_30vp"),b("CSS").addClass(this.$1,"_30vq")):a<800?(b("CSS").removeClass(this.$1,"_30vp"),b("CSS").removeClass(this.$1,"_30vq")):(b("CSS").removeClass(this.$1,"_30vq"),b("CSS").addClass(this.$1,"_30vp")))};a.prototype.setSubtitle=function(a){"use strict";a=a.join("\n");if(a===this.$3)return;b("DOM").setContent(this.$2,a);a?(b("CSS").removeClass(this.$2,"hidden_elem"),this.$4&&this.$4.setHeight(this.$1.offsetHeight)):(b("CSS").addClass(this.$2,"hidden_elem"),this.$4&&this.$4.setHeight(0));this.$3=a};a.prototype.setOnSubtitlesReady=function(a){"use strict";this.$7.setSubtitleReadyHandler(a)};a.prototype.setSubtitlesStyleLeftAlignmentUpdatedHandler=function(a){"use strict";this.$7.setSubtitlesStyleLeftAlignmentUpdatedHandler(a)};a.prototype.removeSubtitles=function(){"use strict";b("DOM").setContent(this.$6,null),b("DOM").remove(this.$1),this.$9(),this.$7.remove()};a.prototype.showSubtitles=function(){"use strict";this.$1&&b("CSS").removeClass(this.$1,"hidden_elem"),this.$4&&(this.$4.reposition(),this.$4.reserve())};a.prototype.hideSubtitles=function(){"use strict";this.$1&&b("CSS").addClass(this.$1,"hidden_elem"),this.$4&&this.$4.release()};e.exports=a}),null);