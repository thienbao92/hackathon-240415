angular.module('myApp.controller',[])	
.controller('StudentCtrl',function($scope,$http,$state){
	var date = new Date();
	$scope.submit = {
		date: "con cho Khang"
	};
	var refresh = function(){
		$http.get("/event").success(function(response){
	 	$scope.gets = response;

	 	console.log(response);

	 })

	}
	refresh();


	 $scope.remove = function(_id){
	 	console.log(_id);
	$http.delete('/event/' +_id).success(function(remove){
		console.log("remove");
		refresh();
	})
}

	$scope.edit = function(_id){
		console.log(_id);
		$http.get('/event/' +_id).success(function(edit){
	 	$scope.submit = edit;
	 	console.log(edit);
	 	$state.go("post");

	 })
	}

	$scope.addData = function(){
		console.log($scope.submit);
	$http.post("/event",$scope.submit).success(function(data){
		console.log(data);
		refresh();
		$state.go("event");

	})

	}
	$scope.update = function(){
		console.log($scope.submit._id);
		$http.put('/event/'+$scope.submit._id, $scope.submit).success(function(update){
			console.log(update);
			refresh();
			$state.go("event");

		});
	}

})

