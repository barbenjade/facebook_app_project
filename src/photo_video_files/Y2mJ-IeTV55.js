if (self.CavalryLogger) { CavalryLogger.start_js(["hJnoX"]); }

__d("FantaReducersParticipants",["FantaGetMessageActions","ImmutableObject","MercuryIDs","MessengerParticipants.bs","setImmediate"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("FantaGetMessageActions").Types;function a(a,b){switch(b.type){case g.ON_GET_THREAD_RESPONSE:b=b.thread;a=h(a,b);break}return a}function h(a,c){var d=c.thread_id,e=a.mercury.tabContents.get(d);if(!e)return a;e=i(c).concat(j(c));b("MessengerParticipants.bs").getMulti(e,function(a){b("setImmediate")(function(){return b("FantaGetMessageActions").onParticipantResponse(d)})});return k(a,c)}function i(a){return a&&a.participants?a.participants.filter(function(a){return!b("MessengerParticipants.bs").getNow(a)}):[]}function j(a){return a&&a.group_approval_queue?a.group_approval_queue.reduce(function(a,c){var d=c.requester;c=c.inviter;return a.concat([b("MercuryIDs").getParticipantIDFromUserID(d.id),b("MercuryIDs").getParticipantIDFromUserID(c.id)])},[]):[]}function c(a,b){__p&&__p();switch(b.type){case g.ON_GET_PARTICIPANT_RESPONSE:b=b.tabID;b=a.mercury.tabContents.get(b);if(!b)return a;b=b.thread;if(!b)return a;a=k(a,b)}return a}function k(a,c){__p&&__p();var d=c.thread_id,e=a.mercury.tabContents.get(d);if(!e)return a;var f=c.participants?c.participants.map(function(a){return b("MessengerParticipants.bs").getNow(a)}).filter(function(a){return!!a}).reduce(function(a,b){a[b.id]=b;return a},{}):null;c=c.group_approval_queue?c.group_approval_queue.reduce(function(a,c){var d=c.requester;c=c.inviter;d=b("MessengerParticipants.bs").getNow(b("MercuryIDs").getParticipantIDFromUserID(d.id));d&&(a[d.id]=d);d=b("MessengerParticipants.bs").getNow(b("MercuryIDs").getParticipantIDFromUserID(c.id));d&&(a[d.id]=d);return a},{}):null;e=e.merge({membershipParticipants:c,participants:f});a=a.setIn(["mercury","tabContents",d],e);return a}function d(a,c){switch(c.type){case g.THREADS_UPDATED:c.threads.forEach(function(c){a=h(a,new(b("ImmutableObject"))(c))})}return a}e.exports={onGetThreadResponse_Participants:a,threadsUpdated_Participants:d,onParticipantResponse_Participants:c}}),null);