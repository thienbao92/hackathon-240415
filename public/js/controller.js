angular.module('myApp.controller',[])	
.controller('StudentCtrl',function($scope,$http){
	var refresh = function(){
		$http.get("/event").success(function(response){
	 	$scope.gets = response;

	 	console.log(response);

	 })

	}
	refresh();
	console.log("Hello");
	 $http.get("/event").success(function(response){
	 	$scope.gets = response;

	 	console.log(response);

	 })
	 $scope.remove = function(_id){
	 	console.log(_id);
	$http.delete('/event/' +_id).success(function(remove){
		console.log("remove");
		refresh();
	})
	
}
})
.controller('postCtrl',function($scope,$http,$state){
	console.log("Hello");
	$scope.addData = function(){
		console.log($scope.submit);
	$http.post("/event",$scope.submit).success(function(data){
		console.log(data);
		$state.go("event");
	})

	}
})

