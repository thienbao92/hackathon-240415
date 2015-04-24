angular.module('myApp.controller',[])	

.controller('StudentCtrl',function($scope,$http){
	 $http.get("/event").success(function(response){
	 	//$scope.gets = response;
	 	console.log(response);
	 })
})


