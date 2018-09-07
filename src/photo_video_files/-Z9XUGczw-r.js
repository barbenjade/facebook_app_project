if (self.CavalryLogger) { CavalryLogger.start_js(["+WFYI"]); }

__d("relay-runtime/experimental/getRequestKey_UNSTABLE",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a,b){var c;if(a.kind==="BatchRequest")c=JSON.stringify({id:a.requests.map(function(a){return String(a.id!=null?a.id:a.text)})});else{a=a.id!=null?a.id:a.text;c=String(a)}return c+JSON.stringify(b)}e.exports=a}),null);