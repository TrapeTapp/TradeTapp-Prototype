(function() {

	angular.module('tradeTapp').config(config);

	function config($interpolateProvider,$httpProvider,$stateProvider,$urlRouterProvider) 
	{
		$interpolateProvider.startSymbol('[[');
		$interpolateProvider.endSymbol(']]');
		$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

		$urlRouterProvider.otherwise("/");
		$stateProvider
		.state('grid', {
			url: "/grid",
			templateUrl: "grid.html"
		})
		.state('form', {
			url: "/form",
			templateUrl: "form.html"
		})
		.state('setup', {
			url: "/setup",
			templateUrl: "setup.html"
		})
		.state('profile', {
			url: "/profile",
			templateUrl: "profile.html"
		});

	}
})();