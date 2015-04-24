angular.module('myApp.controller',[])	

.controller('StudentCtrl',function($scope,$http){
	console.log("Hello");
	 $http.get("/event").success(function(response){
	 	$scope.gets = response;

	 	console.log(response);

	 })
})
.controller('StudentCtrl',function($scope,$http){
	console.log("Hello");
})
