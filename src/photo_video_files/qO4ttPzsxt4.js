if (self.CavalryLogger) { CavalryLogger.start_js(["4kHI+"]); }

__d("getMentionsSearchSource",["AtSignMentionsStrategy","CapitalizedNameMentionsStrategy","DocumentCompositeMentionsSource","DocumentMentionsSource","FilteredSearchSource","SearchSourceWithMetrics","WebAsyncSearchSource","filterCapitalizedNames"],(function(a,b,c,d,e,f){__p&&__p();function g(a){var c={bootstrapRequests:[],queryRequests:[],auxiliaryFields:{authorativePerson:"is_authoritative_person",connectedPage:"connected_page",disableAutosuggest:"disable_autosuggest",workForeignEntity:"is_work_foreign_entity",renderType:"render_type",verified:"is_verified",workUser:"is_work_user"}};a._bootstrapEndpoints&&a._bootstrapEndpoints.forEach(function(a){c.bootstrapRequests.push({uri:a.endpoint,data:a.data})});a.bootstrapEndpoint&&c.bootstrapRequests.push({uri:a.bootstrapEndpoint,data:a.bootstrapData});a.queryEndpoint&&c.queryRequests.push({uri:a.queryEndpoint,data:a.queryData});return new(b("WebAsyncSearchSource"))(c)}function a(a,c){a=g(a);a=new(b("SearchSourceWithMetrics"))(a,c);c=new(b("FilteredSearchSource"))(b("filterCapitalizedNames"),a);a=[new(b("DocumentMentionsSource"))(b("AtSignMentionsStrategy"),a),new(b("DocumentMentionsSource"))(b("CapitalizedNameMentionsStrategy"),c)];return new(b("DocumentCompositeMentionsSource"))(a)}e.exports=a}),null);