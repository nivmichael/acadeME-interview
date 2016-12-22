angular.module('directoryApp', ['ui.router'])
	.config(function($stateProvider, $urlRouterProvider){

		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home', {

				url: '/e',
				templateUrl: 'static/home.html',
				controller: "directoryController as dirList"
			})
			.state('about', {

				url: '/about',
				templateUrl: 'static/about.html'
			});

	})
	.controller('directoryController', function() {
		
		var dirList = this;

		dirList.toggle = false;

		dirList.list = [
			{name:'Yossi', age: 29, img:'img/img1.png'},
			{name:'David', age: 31, img:'img/img2.png'},
			{name:'Yuri', age: 32, img:'img/img3.png'},
		];

		dirList.addPerson = function() {
			dirList.list.push({name:dirList.name, age: dirList.age});
			dirList.name = '';
			dirList.age = 0;
		};
	});