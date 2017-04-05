(function() {

	'use strict';

	angular.module('aplicacion').controller('adminCtrl', adminController);
	adminController.$inject = ['$scope','$document','$http', 'adminFactory'];


	function adminController($scope, $document, $http, registroFactory){

		var vm = $scope;
		var fc = registroFactory;

		vm.alumnos = [];
		
		vm.init = function(){
			fc.getAlumnos().then(
				function(data) {
					vm.alumnos = data.data;
				},
				function(err) {
					alert("No Furulo");
				}	
			);
		};

	}
})();