if (self.CavalryLogger) { CavalryLogger.start_js(["afhs4"]); }

__d("FbFeedOptionsExpander",["CSS","DOMQuery","EntstreamHomeFeedObjectOptionsMenuUtils","Event","FeedStoryOptionMenuTypedLogger","FunnelLogger","Parent","getOrCreateDOMID"],(function(a,b,c,d,e,f){__p&&__p();function g(a,c,d){if(c.length===0)return;var e=document.createElement("ul");a=document.createElement("li");var f=document.createElement("li"),g=b("getOrCreateDOMID")(e),h=c[0];h.parentNode&&(h.parentNode.insertBefore(a,h),c.forEach(function(a){e.appendChild(a)}),f.appendChild(e),a.parentNode&&(a.parentNode.replaceChild(f,a),d.setAttribute("aria-controls",g),d.setAttribute("aria-expanded","false")))}a={expand:function(a){__p&&__p();var c=a.expander,d=a.menu,e=a.foldedClass,f=a.unfoldedClass,h=a.foldedItemClass,i=a.data;d.subscribe("rendered",function(a){__p&&__p();var j=b("Parent").byTag(c,"a"),k=b("DOMQuery").scry(d.getRoot(),"li."+h);j&&(g(d,k,j),b("Event").listen(j,"click",function(){__p&&__p();b("CSS").toggleClass(d.getRoot(),e),b("CSS").toggleClass(d.getRoot(),f),j.setAttribute("aria-expanded","true"),k.forEach(function(a,c){__p&&__p();if(c===0){c=d._getItemInstance(a);d._focusItem(c)}c=a.getAttribute("data-feed-option-name");if(c){new(b("FeedStoryOptionMenuTypedLogger"))().setOptionName(c).setOptionPos(b("EntstreamHomeFeedObjectOptionsMenuUtils").findMenuItemPosition(d,a)).setMenuSize(b("EntstreamHomeFeedObjectOptionsMenuUtils").calculateMenuSize(d)).setIsSecondary(1).setEventType("imp").setFeedLocation(i.location).setSessionID(i.session_id).setIsSponsored(i.is_sponsored?1:0).setIsSelfStory(i.is_self_story?1:0).log();a="loc:"+i.location;b("FunnelLogger").appendActionWithTag("WWW_CHEVRON_FUNNEL","imp:"+c,"loc:"+a)}},this)}))})}};e.exports=a}),null);