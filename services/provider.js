app.provider("customerData",function(){
	    custDataObj = {
	    	id:"1101",
	    	firstName:"Papa",
	    	lastName:"Srinivas",
	    	email:"srinuswan47@gmail.com",
	    	dob:"25-03-1992",
	    	gender:"M",
	    	mothertounge:"Telugu",
	    	state:"Telangana"
	    };
		this.$get = function(){
		return custDataObj;
	}
})