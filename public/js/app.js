var myApp = angular.module('myApp',[
	'myApp.directive',
	'myApp.service',
	'myApp.controller',
	'ui.router'
	]);


myApp.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('event', {
		url:'/event',
		templateUrl: 'templates/event.html'
	})
	.state('post', {
		url:'/post',
		templateUrl: 'templates/post.html'
	});

	$urlRouterProvider.otherwise('/event');
		
})

