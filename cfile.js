// JavaScript Document
simpleCart.email = 'avelinolucas.fs@gmail.com'; //please enter your email address here
	simpleCart.checkoutTo = PayPal;
//	simpleCart.merchantId = "";
//	simpleCart.checkoutTo = GoogleCheckout;
//	simpleCart.currency = AUD;
//	simpleCart.currency = GBP;
    simpleCart.currency = EUR;
//	simpleCart.taxRate  = 0.08;
//simpleCart.shippingFlatRate = 35.00;
//simpleCart.shippingQuantityRate = 45.00;
/*	CartItem.prototype.shipping = function(){
		if( this.size ){
			switch( this.size.toLowerCase() ){
				case 'small':
					return this.quantity * 10.00;
				case 'medium':
					return this.quantity * 12.00;
				case 'large':
					return this.quantity * 15.00;
				case 'bull':
					return 45.00;
				default:
					return this.quantity * 5.00;
			}
		}
	};
*/
simpleCart.cartHeaders = ['Name','thumb_image','Quantity_input','increment','decrement','Total'];