app.service("SamsungService",function(){
         samsungData = {
	    	technology:"GSM / HSPA / LTE",
	    	weight:"169 g (5.96 oz)",
	    	os:"Android 6.0.1 (Marshmallow)",
	    	color:"white",
	    	camera:"Photo / Video",
	    	display:"4.5 inch",
	    	internal:"64 GB",
	    	primary:"13.5mpx",
	    	ram:"3GB"

	    };
	this.productDetails = function(){
        return samsungData;
	}
})