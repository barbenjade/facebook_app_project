if (self.CavalryLogger) { CavalryLogger.start_js(["t38m8"]); }

__d("FBStoriesNuxHelper",["AsyncRequest","XBasicFBNuxGenShouldShowController","XBasicFBNuxViewController"],(function(a,b,c,d,e,f){"use strict";a={checkIfNuxShouldBeShown:function(a,c){a=b("XBasicFBNuxGenShouldShowController").getURIBuilder().setInt("nux_id",a).getURI();new(b("AsyncRequest"))().setURI(a).setMethod("GET").setReadOnly(!0).setHandler(function(a){a=a.getPayload();a.should_show_nux&&c()}).send()},markNuxAsShown:function(a){a=b("XBasicFBNuxViewController").getURIBuilder().setInt("nux_id",a).getURI();new(b("AsyncRequest"))().setURI(a).send()}};e.exports=a}),null);