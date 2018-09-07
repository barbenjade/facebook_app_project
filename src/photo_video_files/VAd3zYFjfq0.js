if (self.CavalryLogger) { CavalryLogger.start_js(["\/t5Ld"]); }

__d("FBStoriesLiveVideoAPI",["AsyncRequest","XLiveVideoStoriesUIController"],(function(a,b,c,d,e,f){"use strict";a={loadUIComponents:function(a){a=b("XLiveVideoStoriesUIController").getURIBuilder().setFBID("video_id",a).getURI();new(b("AsyncRequest"))().setURI(a).send()}};e.exports=a}),null);