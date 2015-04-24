angular.module('myApp.controller',[])	

.controller('StudentCtrl',function($scope,$http){
	console.log("Hello");
	 $http.get("/event").success(function(response){
	 	$scope.gets = response;

	 	console.log(response);

	 })
})
.controller('postCtrl',function($scope,$http){
	console.log("Hello");
	$scope.addData = function(){
		console.log($scope.submit);
	}
})
