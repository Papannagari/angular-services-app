var app=angular.module("myApp",[])

app.controller("myController",["$scope","customerData","SamsungService","OrganizationFactory","IdeabytesConstants","ValueService",function($scope,customerData,SamsungService,OrganizationFactory,IdeabytesConstants,ValueService){
	//console.log("myController :myProvider")
	console.log("from contoller provider:"+customerData)
	
	$scope.custdata=customerData
	$scope.samsungproductData=SamsungService.productDetails()
	$scope.techEraInfo=OrganizationFactory
	$scope.constantData=IdeabytesConstants
	$scope.organisationCode=ValueService
	
}])
