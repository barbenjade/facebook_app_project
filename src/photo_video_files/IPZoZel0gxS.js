if (self.CavalryLogger) { CavalryLogger.start_js(["TxIcT"]); }

__d("P2PMessageSellerConfirmationDialog.react",["cx","fbt","ix","Image.react","P2PButton.react","P2PDialog.react","P2PDialogBody.react","P2PDialogFooter.react","P2PListRow.react","P2PText.react","React","XUICloseButton.react"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j;c=b("React").PropTypes;j=babelHelpers.inherits(a,b("React").Component);j&&j.prototype;a.prototype.render=function(){return b("React").createElement(b("P2PDialog.react"),{width:480},b("React").createElement(b("P2PDialogBody.react"),{className:"_4-ft"},b("React").createElement(b("XUICloseButton.react"),{className:"_4-fu",onClick:this.props.onCancel}),b("React").createElement(b("P2PListRow.react"),{offsetRight:16,offsetBottom:0},b("React").createElement(b("Image.react"),{height:100,src:i("94406"),width:105}),b("React").createElement("div",null,b("React").createElement(b("P2PText.react"),{className:"_3-94",size:"large",type:"primary",weight:"bold"},h._("Connect with the seller before you pay")),b("React").createElement(b("P2PText.react"),{size:"medium",type:"primary"},h._("Make sure to discuss price and logistics with the seller before you send payment for this item."))))),b("React").createElement(b("P2PDialogFooter.react"),null,b("React").createElement(b("P2PButton.react"),{label:h._("Start Conversation"),onClick:this.props.onCancel}),b("React").createElement(b("P2PButton.react"),{label:h._("Continue to Pay"),onClick:this.props.onPay,use:"confirm"})))};function a(){j.apply(this,arguments)}a.propTypes={onCancel:c.func.isRequired,onPay:c.func.isRequired};e.exports=a}),null);