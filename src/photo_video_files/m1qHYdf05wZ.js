if (self.CavalryLogger) { CavalryLogger.start_js(["bZh65"]); }

__d("FBStoriesLiveVideoUIStore",["FBStoriesDispatcher","FBStoriesLiveVideoActionTypes","FBStoriesLiveVideoAPI","FBStoriesStore","FluxLoadObjectStore","LoadObject","immutable"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;g=babelHelpers.inherits(a,b("FluxLoadObjectStore"));g&&g.prototype;a.prototype.reduce=function(a,c){switch(c.type){case b("FBStoriesLiveVideoActionTypes").SET_UI_COMPONENTS:b("FBStoriesDispatcher").waitFor([b("FBStoriesStore").getDispatchToken()]);return b("FBStoriesStore").getCurrentThreadMediaIDForSelectedBucket()===c.videoID?this.__handleOne(a,c.videoID,c.uiComponents):a;case b("FBStoriesLiveVideoActionTypes").REMOVE_UI_COMPONENTS:return this.__setEmpty(a,this.getState().keys());case b("FBStoriesLiveVideoActionTypes").LOAD_UI_COMPONENTS_FAILED:return this.__handleOne(a,c.videoID,new Error("Failed to load UI components"));default:return a}};a.prototype.__load=function(a){b("FBStoriesLiveVideoAPI").loadUIComponents(a)};function a(){g.apply(this,arguments)}a.__moduleID=e.id;e.exports=new a(b("FBStoriesDispatcher"))}),null);