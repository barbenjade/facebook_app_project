if (self.CavalryLogger) { CavalryLogger.start_js(["kknHY"]); }

__d("PageEventsTabUpcomingEventsCardPaginationQuery.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"LocalArgument",name:"pageID",type:"ID!",defaultValue:null},{kind:"LocalArgument",name:"count",type:"Int",defaultValue:null},{kind:"LocalArgument",name:"cursor",type:"ID",defaultValue:null}],b=[{kind:"Variable",name:"id",variableName:"pageID",type:"ID!"}],c=[{kind:"Variable",name:"after",variableName:"cursor",type:"ID"},{kind:"Literal",name:"allowed_states",value:["CANCELED","DRAFT","SCHEDULED_DRAFT_FOR_PUBLICATION","PUBLISHED"],type:"[EventStateEnum]"},{kind:"Literal",name:"filter_child_events",value:"HIDE_EVENTS_WITH_CHILDREN_AND_IF_NO_PINNED_EVENT_HIDE_CHILD_EVENT",type:"ChildEventsFilterEnum"},{kind:"Literal",name:"filter_out_canceled_events_if_not_connected",value:!0,type:"Boolean"},{kind:"Literal",name:"filter_tour_events",value:"EXCLUDE_TOUR_EVENTS",type:"TourEventsFilterEnum"},{kind:"Variable",name:"first",variableName:"count",type:"Int"},{kind:"Literal",name:"upcoming",value:!0,type:"Boolean"}],d={kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null},e=[{kind:"ScalarField",alias:null,name:"text",args:null,storageKey:null}],f={kind:"ScalarField",alias:null,name:"__typename",args:null,storageKey:null},g={kind:"ScalarField",alias:null,name:"contextual_name",args:null,storageKey:null},h={kind:"ScalarField",alias:null,name:"name",args:null,storageKey:null};return{kind:"Request",operationKind:"query",name:"PageEventsTabUpcomingEventsCardPaginationQuery",id:"1738953119537067",text:null,metadata:{},fragment:{kind:"Fragment",name:"PageEventsTabUpcomingEventsCardPaginationQuery",type:"Query",metadata:null,argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"page",storageKey:null,args:b,concreteType:"Page",plural:!1,selections:[{kind:"FragmentSpread",name:"PageEventsTabUpcomingEventsCard_page",args:[{kind:"Variable",name:"count",variableName:"count",type:null},{kind:"Variable",name:"cursor",variableName:"cursor",type:null}]}]}]},operation:{kind:"Operation",name:"PageEventsTabUpcomingEventsCardPaginationQuery",argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"page",storageKey:null,args:b,concreteType:"Page",plural:!1,selections:[{kind:"LinkedField",alias:"upcoming_events",name:"all_owned_events",storageKey:null,args:c,concreteType:"AllOwnedEventsConnection",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"edges",storageKey:null,args:null,concreteType:"AllOwnedEventsEdge",plural:!0,selections:[{kind:"ScalarField",alias:null,name:"is_hidden_on_profile_calendar",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"is_added_to_profile_calendar",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"node",storageKey:null,args:null,concreteType:"Event",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"imported_source_name",args:null,storageKey:null},d,{kind:"LinkedField",alias:null,name:"time_range",storageKey:null,args:null,concreteType:"EventTimeRange",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"start",args:null,storageKey:null}]},{kind:"ScalarField",alias:null,name:"timezone",args:null,storageKey:null},{kind:"ScalarField",alias:"happensOnSingleDay",name:"happens_on_single_day",args:null,storageKey:null},{kind:"LinkedField",alias:"childEvents",name:"child_events",storageKey:null,args:null,concreteType:"EventToChildEventsConnection",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"count",args:null,storageKey:null}]},{kind:"ScalarField",alias:null,name:"is_event_draft",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"scheduled_publish_timestamp",args:null,storageKey:null},{kind:"ScalarField",alias:"shortTimeLabel",name:"start_time_sentence",args:[{kind:"Literal",name:"format",value:"SHORT_TIME_LABEL",type:"EventStartTimeSentenceFormat"}],storageKey:'start_time_sentence(format:"SHORT_TIME_LABEL")'},{kind:"ScalarField",alias:"shortDateLabel",name:"start_time_sentence",args:[{kind:"Literal",name:"format",value:"SHORT_DATE_LABEL",type:"EventStartTimeSentenceFormat"}],storageKey:'start_time_sentence(format:"SHORT_DATE_LABEL")'},{kind:"LinkedField",alias:null,name:"suggested_event_context_sentence",storageKey:"suggested_event_context_sentence(show_category:false)",args:[{kind:"Literal",name:"show_category",value:!1,type:"Boolean"}],concreteType:"TextWithEntities",plural:!1,selections:e},{kind:"LinkedField",alias:null,name:"event_place",storageKey:null,args:null,concreteType:null,plural:!1,selections:[f,g,d,{kind:"InlineFragment",type:"Page",selections:[{kind:"LinkedField",alias:null,name:"city",storageKey:null,args:null,concreteType:"Page",plural:!1,selections:[{kind:"ScalarField",alias:"cityContextualName",name:"contextual_name",args:[{kind:"Literal",name:"force_format",value:!0,type:"Boolean"},{kind:"Literal",name:"name_format",value:{show_city:!0,show_country:"SHOW_NON_US",show_region:"SHOW_ABBR_OR_FULL"},type:"LocationNameFormat"}],storageKey:'contextual_name(force_format:true,name_format:{"show_city":true,"show_country":"SHOW_NON_US","show_region":"SHOW_ABBR_OR_FULL"})'},d,g]},h,{kind:"ScalarField",alias:null,name:"url",args:null,storageKey:null}]}]},{kind:"LinkedField",alias:null,name:"event_viewer_capability",storageKey:null,args:null,concreteType:"EventViewerCapability",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"is_viewer_admin",args:null,storageKey:null},{kind:"ScalarField",alias:"is_viewer_admin_no_business_permissions",name:"is_viewer_admin",args:[{kind:"Literal",name:"enable_business_permissions",value:!1,type:"Boolean"}],storageKey:"is_viewer_admin(enable_business_permissions:false)"},{kind:"ScalarField",alias:null,name:"can_viewer_edit",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"can_viewer_share",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"can_viewer_create_repeat_event",args:null,storageKey:null},{kind:"ScalarField",alias:"canViewerWatch",name:"can_viewer_watch",args:null,storageKey:null}]},{kind:"ScalarField",alias:null,name:"is_canceled",args:null,storageKey:null},{kind:"ScalarField",alias:"startTimestampForDisplay",name:"start_timestamp_for_display",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"preassigned_discount_note",storageKey:'preassigned_discount_note(surface:"PAGE_CALENDAR")',args:[{kind:"Literal",name:"surface",value:"PAGE_CALENDAR",type:"EventTicketingDiscountNoteSurface"}],concreteType:"TextWithEntities",plural:!1,selections:e},h,{kind:"ScalarField",alias:null,name:"has_child_events",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"event_buy_ticket_url",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"can_viewer_purchase_onsite_tickets",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"tickets_type",args:null,storageKey:null},{kind:"ScalarField",alias:"canViewerJoin",name:"can_viewer_join",args:null,storageKey:null},{kind:"ScalarField",alias:"isPast",name:"is_past",args:null,storageKey:null},{kind:"ScalarField",alias:"connectionStyle",name:"connection_style",args:null,storageKey:null},{kind:"ScalarField",alias:"eventID",name:"id",args:null,storageKey:null},{kind:"ScalarField",alias:"watchStatus",name:"viewer_watch_status",args:null,storageKey:null},{kind:"ScalarField",alias:"canJoin",name:"can_viewer_join",args:null,storageKey:null},f]},{kind:"ScalarField",alias:null,name:"cursor",args:null,storageKey:null}]},{kind:"LinkedField",alias:null,name:"page_info",storageKey:null,args:null,concreteType:"PageInfo",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"has_next_page",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"end_cursor",args:null,storageKey:null}]}]},{kind:"LinkedHandle",alias:"upcoming_events",name:"all_owned_events",args:c,handle:"connection",key:"PageEventsTabUpcomingEventsCard_upcoming_events",filters:["filter_tour_events","filter_child_events","upcoming","allowed_states","filter_out_canceled_events_if_not_connected"]},d,{kind:"ScalarField",alias:null,name:"viewer_profile_permissions",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"admin_info",storageKey:null,args:null,concreteType:"PageAdminInfo",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"is_viewer_business_manager_admin",args:null,storageKey:null}]},{kind:"ScalarField",alias:null,name:"can_pin_event",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"pinned_event",storageKey:null,args:null,concreteType:"Event",plural:!1,selections:[d]}]}]}}}();e.exports=a}),null);
__d("PageEventsTabUpcomingEventsCard_page.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null};return{kind:"Fragment",name:"PageEventsTabUpcomingEventsCard_page",type:"Page",metadata:{connection:[{count:"count",cursor:"cursor",direction:"forward",path:["upcoming_events"]}]},argumentDefinitions:[{kind:"LocalArgument",name:"count",type:"Int",defaultValue:6},{kind:"LocalArgument",name:"cursor",type:"ID",defaultValue:null}],selections:[{kind:"LinkedField",alias:"upcoming_events",name:"__PageEventsTabUpcomingEventsCard_upcoming_events_connection",storageKey:'__PageEventsTabUpcomingEventsCard_upcoming_events_connection(allowed_states:["CANCELED","DRAFT","SCHEDULED_DRAFT_FOR_PUBLICATION","PUBLISHED"],filter_child_events:"HIDE_EVENTS_WITH_CHILDREN_AND_IF_NO_PINNED_EVENT_HIDE_CHILD_EVENT",filter_out_canceled_events_if_not_connected:true,filter_tour_events:"EXCLUDE_TOUR_EVENTS",upcoming:true)',args:[{kind:"Literal",name:"allowed_states",value:["CANCELED","DRAFT","SCHEDULED_DRAFT_FOR_PUBLICATION","PUBLISHED"],type:"[EventStateEnum]"},{kind:"Literal",name:"filter_child_events",value:"HIDE_EVENTS_WITH_CHILDREN_AND_IF_NO_PINNED_EVENT_HIDE_CHILD_EVENT",type:"ChildEventsFilterEnum"},{kind:"Literal",name:"filter_out_canceled_events_if_not_connected",value:!0,type:"Boolean"},{kind:"Literal",name:"filter_tour_events",value:"EXCLUDE_TOUR_EVENTS",type:"TourEventsFilterEnum"},{kind:"Literal",name:"upcoming",value:!0,type:"Boolean"}],concreteType:"AllOwnedEventsConnection",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"edges",storageKey:null,args:null,concreteType:"AllOwnedEventsEdge",plural:!0,selections:[{kind:"ScalarField",alias:null,name:"is_hidden_on_profile_calendar",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"is_added_to_profile_calendar",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"node",storageKey:null,args:null,concreteType:"Event",plural:!1,selections:[a,{kind:"FragmentSpread",name:"EventInfoRow_event",args:null},{kind:"ScalarField",alias:null,name:"__typename",args:null,storageKey:null}]},{kind:"ScalarField",alias:null,name:"cursor",args:null,storageKey:null}]},{kind:"LinkedField",alias:null,name:"page_info",storageKey:null,args:null,concreteType:"PageInfo",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"has_next_page",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"end_cursor",args:null,storageKey:null}]}]},a,{kind:"FragmentSpread",name:"EventInfoRow_page",args:null}]}}();e.exports=a}),null);
__d("PageEventsTabUpcomingEventsCard_viewer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"Fragment",name:"PageEventsTabUpcomingEventsCard_viewer",type:"Viewer",metadata:null,argumentDefinitions:[],selections:[{kind:"FragmentSpread",name:"EventInfoRow_viewer",args:null}]};e.exports=a}),null);
__d("PageEventsTabUpcomingEventsCard.react",["cx","EventInfoRow.react","OnVisible.react","PageEventsTab","PageEventsTabCard.react","PageEventsTabCardName","React","RelayCompat","XUISpinner.react","nullthrows","PageEventsTabUpcomingEventsCard_viewer.graphql","PageEventsTabUpcomingEventsCard_page.graphql","PageEventsTabUpcomingEventsCardPaginationQuery.graphql"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;a=b("RelayCompat").createPaginationContainer;b("RelayCompat").graphql;var i=9;c=babelHelpers.inherits(j,b("React").Component);h=c&&c.prototype;function j(){var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=h.constructor).call.apply(a,[this].concat(d)),this.state={loadingMore:!1,refetching:!1},this.$1=function(){var a=this.props.relay;if(!a.hasMore()||a.isLoading())return;this.setState({loadingMore:!0});a.loadMore(i)}.bind(this),b}j.prototype.componentDidMount=function(){b("PageEventsTab").cardLoaded(b("PageEventsTabCardName").UPCOMING_EVENTS_CARD,function(){this.props.relay.refetchConnection(6,null,null)}.bind(this))};j.prototype.UNSAFE_componentWillReceiveProps=function(a){this.setState({loadingMore:!1})};j.prototype.render=function(){__p&&__p();var a=this.props,c=a.page,d=a.actionContext,e=a.viewer;a=a.relay;var f=c.upcoming_events?c.upcoming_events.edges:null;if(!f||f.length===0)return null;f=f.map(function(a){return b("React").createElement(b("EventInfoRow.react"),{key:b("nullthrows")(a.node).id,page:c,event:a.node,actionContext:d,isPastEvent:!1,isHiddenEvent:a.is_hidden_on_profile_calendar,isAddedToCalendar:a.is_added_to_profile_calendar,viewer:e})});var g=null;a.hasMore()&&(g=b("React").createElement("div",{className:"_p6a"},this.state.loadingMore?b("React").createElement(b("XUISpinner.react"),{className:"_p6b",background:"light",size:"large"}):b("React").createElement(b("OnVisible.react"),{buffer:100,onVisible:this.$1},b("React").createElement(b("XUISpinner.react"),{className:"_p6b",background:"light",size:"large"}))));return b("React").createElement(b("PageEventsTabCard.react"),{keyID:"upcoming",pageID:b("nullthrows")(c.id),loading:this.state.refetching,acontext:d},f,g)};e.exports=a(j,{viewer:{modern:function(){return b("PageEventsTabUpcomingEventsCard_viewer.graphql")},classic:function(a){var c=b("EventInfoRow.react").getFragment("viewer");return{kind:"FragmentDefinition",argumentDefinitions:[],node:function(){return{children:[].concat.apply([],[a.__frag(c)]),id:a.__id(),kind:"Fragment",metadata:{},name:"PageEventsTabUpcomingEventsCard_viewer",type:"Viewer"}}()}}},page:{modern:function(){return b("PageEventsTabUpcomingEventsCard_page.graphql")},classic:function(a){var c=b("EventInfoRow.react").getFragment("event"),d=b("EventInfoRow.react").getFragment("page");return{kind:"FragmentDefinition",argumentDefinitions:[{defaultValue:6,kind:"LocalArgument",name:"count"},{defaultValue:null,kind:"LocalArgument",name:"cursor"}],node:function(){return{children:[].concat.apply([],[{alias:"upcoming_events",calls:[{kind:"Call",metadata:{type:"TourEventsFilterEnum"},name:"filter_tour_events",value:{kind:"CallValue",callValue:"EXCLUDE_TOUR_EVENTS"}},{kind:"Call",metadata:{type:"ChildEventsFilterEnum"},name:"filter_child_events",value:{kind:"CallValue",callValue:"HIDE_EVENTS_WITH_CHILDREN_AND_IF_NO_PINNED_EVENT_HIDE_CHILD_EVENT"}},{kind:"Call",metadata:{},name:"upcoming",value:{kind:"CallValue",callValue:!0}},{kind:"Call",metadata:{type:"[EventStateEnum]"},name:"allowed_states",value:[{kind:"CallValue",callValue:"CANCELED"},{kind:"CallValue",callValue:"DRAFT"},{kind:"CallValue",callValue:"SCHEDULED_DRAFT_FOR_PUBLICATION"},{kind:"CallValue",callValue:"PUBLISHED"}]},{kind:"Call",metadata:{},name:"filter_out_canceled_events_if_not_connected",value:{kind:"CallValue",callValue:!0}},{kind:"Call",metadata:{type:"Int"},name:"first",value:{kind:"CallVariable",callVariableName:"count"}},{kind:"Call",metadata:{},name:"after",value:{kind:"CallVariable",callVariableName:"cursor"}}],children:[{children:[{fieldName:"is_hidden_on_profile_calendar",kind:"Field",metadata:{},type:"Boolean"},{fieldName:"is_added_to_profile_calendar",kind:"Field",metadata:{},type:"Boolean"},{children:[].concat.apply([],[{fieldName:"id",kind:"Field",metadata:{isRequisite:!0},type:"ID"},a.__frag(c)]),fieldName:"node",kind:"Field",metadata:{canHaveSubselections:!0,inferredRootCallName:"node",inferredPrimaryKey:"id",isRequisite:!0},type:"Event"},{fieldName:"cursor",kind:"Field",metadata:{isGenerated:!0,isRequisite:!0},type:"ID"}],fieldName:"edges",kind:"Field",metadata:{canHaveSubselections:!0,isPlural:!0},type:"AllOwnedEventsEdge"},{children:[{fieldName:"has_next_page",kind:"Field",metadata:{isRequisite:!0},type:"Boolean"},{fieldName:"end_cursor",kind:"Field",metadata:{},type:"ID"},{fieldName:"has_previous_page",kind:"Field",metadata:{isGenerated:!0,isRequisite:!0},type:"Boolean"}],fieldName:"page_info",kind:"Field",metadata:{canHaveSubselections:!0,isRequisite:!0},type:"PageInfo"}],fieldName:"all_owned_events",kind:"Field",metadata:{canHaveSubselections:!0,isConnection:!0,isFindable:!0},type:"AllOwnedEventsConnection"},{fieldName:"id",kind:"Field",metadata:{isRequisite:!0},type:"ID"},a.__frag(d)]),id:a.__id(),kind:"Fragment",metadata:{},name:"PageEventsTabUpcomingEventsCard_page",type:"Page"}}()}}}},{direction:"forward",getConnectionFromProps:function(a){return(a=a)!=null?(a=a.page)!=null?a.upcoming_events:a:a},getFragmentVariables:function(a,b){return babelHelpers["extends"]({},a,{count:b})},getVariables:function(a,b,c){c=b.count;b=b.cursor;return{pageID:a.page.id,count:c,cursor:b}},query:{modern:function(){return b("PageEventsTabUpcomingEventsCardPaginationQuery.graphql")},classic:function(a){var b=(j.__container__||j).getFragment("page",{count:{kind:"CallVariable",callVariableName:"count"},cursor:{kind:"CallVariable",callVariableName:"cursor"}});return{kind:"OperationDefinition",argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"pageID"},{defaultValue:null,kind:"LocalArgument",name:"count"},{defaultValue:null,kind:"LocalArgument",name:"cursor"}],name:"PageEventsTabUpcomingEventsCardPaginationQuery",operation:"query",node:function(){return{children:[{calls:[{kind:"Call",metadata:{},name:"id",value:{kind:"CallVariable",callVariableName:"pageID"}}],children:[].concat.apply([],[{fieldName:"id",kind:"Field",metadata:{isGenerated:!0,isRequisite:!0},type:"ID"},a.__frag(b)]),fieldName:"page",kind:"Field",metadata:{canHaveSubselections:!0,inferredRootCallName:"node",inferredPrimaryKey:"id"},type:"Page"}],directives:[{kind:"Directive",name:"fb_owner",args:[{name:"oncall",value:{kind:"CallValue",callValue:"events"}}]}],id:a.__id(),kind:"Fragment",metadata:{},name:"PageEventsTabUpcomingEventsCardPaginationQuery",type:"Query"}}()}}}})}),null);
__d("PageEventsTabUpcomingEventsCardRendererQuery.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"LocalArgument",name:"pageID",type:"ID!",defaultValue:null}],b=[{kind:"Variable",name:"id",variableName:"pageID",type:"ID!"}],c=[{kind:"Literal",name:"allowed_states",value:["CANCELED","DRAFT","SCHEDULED_DRAFT_FOR_PUBLICATION","PUBLISHED"],type:"[EventStateEnum]"},{kind:"Literal",name:"filter_child_events",value:"HIDE_EVENTS_WITH_CHILDREN_AND_IF_NO_PINNED_EVENT_HIDE_CHILD_EVENT",type:"ChildEventsFilterEnum"},{kind:"Literal",name:"filter_out_canceled_events_if_not_connected",value:!0,type:"Boolean"},{kind:"Literal",name:"filter_tour_events",value:"EXCLUDE_TOUR_EVENTS",type:"TourEventsFilterEnum"},{kind:"Literal",name:"first",value:6,type:"Int"},{kind:"Literal",name:"upcoming",value:!0,type:"Boolean"}],d={kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null},e=[{kind:"ScalarField",alias:null,name:"text",args:null,storageKey:null}],f={kind:"ScalarField",alias:null,name:"__typename",args:null,storageKey:null},g={kind:"ScalarField",alias:null,name:"contextual_name",args:null,storageKey:null},h={kind:"ScalarField",alias:null,name:"name",args:null,storageKey:null};return{kind:"Request",operationKind:"query",name:"PageEventsTabUpcomingEventsCardRendererQuery",id:"2126769500730630",text:null,metadata:{},fragment:{kind:"Fragment",name:"PageEventsTabUpcomingEventsCardRendererQuery",type:"Query",metadata:null,argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"page",storageKey:null,args:b,concreteType:"Page",plural:!1,selections:[{kind:"FragmentSpread",name:"PageEventsTabUpcomingEventsCard_page",args:null}]},{kind:"LinkedField",alias:"viewer",name:"__viewer_viewer",storageKey:null,args:null,concreteType:"Viewer",plural:!1,selections:[{kind:"FragmentSpread",name:"PageEventsTabUpcomingEventsCard_viewer",args:null}]}]},operation:{kind:"Operation",name:"PageEventsTabUpcomingEventsCardRendererQuery",argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"page",storageKey:null,args:b,concreteType:"Page",plural:!1,selections:[{kind:"LinkedField",alias:"upcoming_events",name:"all_owned_events",storageKey:'all_owned_events(allowed_states:["CANCELED","DRAFT","SCHEDULED_DRAFT_FOR_PUBLICATION","PUBLISHED"],filter_child_events:"HIDE_EVENTS_WITH_CHILDREN_AND_IF_NO_PINNED_EVENT_HIDE_CHILD_EVENT",filter_out_canceled_events_if_not_connected:true,filter_tour_events:"EXCLUDE_TOUR_EVENTS",first:6,upcoming:true)',args:c,concreteType:"AllOwnedEventsConnection",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"edges",storageKey:null,args:null,concreteType:"AllOwnedEventsEdge",plural:!0,selections:[{kind:"ScalarField",alias:null,name:"is_hidden_on_profile_calendar",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"is_added_to_profile_calendar",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"node",storageKey:null,args:null,concreteType:"Event",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"imported_source_name",args:null,storageKey:null},d,{kind:"LinkedField",alias:null,name:"time_range",storageKey:null,args:null,concreteType:"EventTimeRange",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"start",args:null,storageKey:null}]},{kind:"ScalarField",alias:null,name:"timezone",args:null,storageKey:null},{kind:"ScalarField",alias:"happensOnSingleDay",name:"happens_on_single_day",args:null,storageKey:null},{kind:"LinkedField",alias:"childEvents",name:"child_events",storageKey:null,args:null,concreteType:"EventToChildEventsConnection",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"count",args:null,storageKey:null}]},{kind:"ScalarField",alias:null,name:"is_event_draft",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"scheduled_publish_timestamp",args:null,storageKey:null},{kind:"ScalarField",alias:"shortTimeLabel",name:"start_time_sentence",args:[{kind:"Literal",name:"format",value:"SHORT_TIME_LABEL",type:"EventStartTimeSentenceFormat"}],storageKey:'start_time_sentence(format:"SHORT_TIME_LABEL")'},{kind:"ScalarField",alias:"shortDateLabel",name:"start_time_sentence",args:[{kind:"Literal",name:"format",value:"SHORT_DATE_LABEL",type:"EventStartTimeSentenceFormat"}],storageKey:'start_time_sentence(format:"SHORT_DATE_LABEL")'},{kind:"LinkedField",alias:null,name:"suggested_event_context_sentence",storageKey:"suggested_event_context_sentence(show_category:false)",args:[{kind:"Literal",name:"show_category",value:!1,type:"Boolean"}],concreteType:"TextWithEntities",plural:!1,selections:e},{kind:"LinkedField",alias:null,name:"event_place",storageKey:null,args:null,concreteType:null,plural:!1,selections:[f,g,d,{kind:"InlineFragment",type:"Page",selections:[{kind:"LinkedField",alias:null,name:"city",storageKey:null,args:null,concreteType:"Page",plural:!1,selections:[{kind:"ScalarField",alias:"cityContextualName",name:"contextual_name",args:[{kind:"Literal",name:"force_format",value:!0,type:"Boolean"},{kind:"Literal",name:"name_format",value:{show_city:!0,show_country:"SHOW_NON_US",show_region:"SHOW_ABBR_OR_FULL"},type:"LocationNameFormat"}],storageKey:'contextual_name(force_format:true,name_format:{"show_city":true,"show_country":"SHOW_NON_US","show_region":"SHOW_ABBR_OR_FULL"})'},d,g]},h,{kind:"ScalarField",alias:null,name:"url",args:null,storageKey:null}]}]},{kind:"LinkedField",alias:null,name:"event_viewer_capability",storageKey:null,args:null,concreteType:"EventViewerCapability",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"is_viewer_admin",args:null,storageKey:null},{kind:"ScalarField",alias:"is_viewer_admin_no_business_permissions",name:"is_viewer_admin",args:[{kind:"Literal",name:"enable_business_permissions",value:!1,type:"Boolean"}],storageKey:"is_viewer_admin(enable_business_permissions:false)"},{kind:"ScalarField",alias:null,name:"can_viewer_edit",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"can_viewer_share",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"can_viewer_create_repeat_event",args:null,storageKey:null},{kind:"ScalarField",alias:"canViewerWatch",name:"can_viewer_watch",args:null,storageKey:null}]},{kind:"ScalarField",alias:null,name:"is_canceled",args:null,storageKey:null},{kind:"ScalarField",alias:"startTimestampForDisplay",name:"start_timestamp_for_display",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"preassigned_discount_note",storageKey:'preassigned_discount_note(surface:"PAGE_CALENDAR")',args:[{kind:"Literal",name:"surface",value:"PAGE_CALENDAR",type:"EventTicketingDiscountNoteSurface"}],concreteType:"TextWithEntities",plural:!1,selections:e},h,{kind:"ScalarField",alias:null,name:"has_child_events",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"event_buy_ticket_url",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"can_viewer_purchase_onsite_tickets",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"tickets_type",args:null,storageKey:null},{kind:"ScalarField",alias:"canViewerJoin",name:"can_viewer_join",args:null,storageKey:null},{kind:"ScalarField",alias:"isPast",name:"is_past",args:null,storageKey:null},{kind:"ScalarField",alias:"connectionStyle",name:"connection_style",args:null,storageKey:null},{kind:"ScalarField",alias:"eventID",name:"id",args:null,storageKey:null},{kind:"ScalarField",alias:"watchStatus",name:"viewer_watch_status",args:null,storageKey:null},{kind:"ScalarField",alias:"canJoin",name:"can_viewer_join",args:null,storageKey:null},f]},{kind:"ScalarField",alias:null,name:"cursor",args:null,storageKey:null}]},{kind:"LinkedField",alias:null,name:"page_info",storageKey:null,args:null,concreteType:"PageInfo",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"has_next_page",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"end_cursor",args:null,storageKey:null}]}]},{kind:"LinkedHandle",alias:"upcoming_events",name:"all_owned_events",args:c,handle:"connection",key:"PageEventsTabUpcomingEventsCard_upcoming_events",filters:["filter_tour_events","filter_child_events","upcoming","allowed_states","filter_out_canceled_events_if_not_connected"]},d,{kind:"ScalarField",alias:null,name:"viewer_profile_permissions",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"admin_info",storageKey:null,args:null,concreteType:"PageAdminInfo",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"is_viewer_business_manager_admin",args:null,storageKey:null}]},{kind:"ScalarField",alias:null,name:"can_pin_event",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"pinned_event",storageKey:null,args:null,concreteType:"Event",plural:!1,selections:[d]}]},{kind:"LinkedField",alias:null,name:"viewer",storageKey:null,args:null,concreteType:"Viewer",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"actor",storageKey:null,args:null,concreteType:null,plural:!1,selections:[f,d]}]},{kind:"LinkedHandle",alias:null,name:"viewer",args:null,handle:"viewer",key:"",filters:null}]}}}();e.exports=a}),null);
__d("PageEventsTabUpcomingEventsCardRenderer.react",["PageEventsTabUpcomingEventsCard.react","React","RelayFBEnvironment","RelayModern","PageEventsTabUpcomingEventsCardRendererQuery.graphql"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=b("RelayModern").QueryRenderer;b("RelayModern").graphql;var i=function(){return b("PageEventsTabUpcomingEventsCardRendererQuery.graphql")};g=babelHelpers.inherits(a,b("React").Component);g&&g.prototype;a.prototype.render=function(){var a=this.props,c=a.pageID,d=a.actionContext;return b("React").createElement(h,{environment:b("RelayFBEnvironment"),cacheConfig:{force:!0},query:i,variables:{pageID:c},render:function(a){a.error;a=a.props;return a?b("React").createElement(b("PageEventsTabUpcomingEventsCard.react"),{actionContext:d,page:a.page,viewer:a.viewer}):null}})};function a(){g.apply(this,arguments)}e.exports=a}),null);