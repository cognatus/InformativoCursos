(function() {

	'use strict';

	angular.module('aplicacion').controller('adminCtrl', adminController);
	adminController.$inject = ['$scope','$document','$http', 'adminFactory'];


	function adminController($scope, $document, $http, registroFactory){

		var vm = $scope;
		var fc = registroFactory;

		vm.alumnos = [];
		vm.sesion = false;

		vm.loguea = function() {
			fc.loguearse( vm.user, vm.psw ).then(
				function(data) {
					alert(data.data);
					vm.obten();
					vm.sesion = true;
				},
				function(err) {
					alert(err.data);
				}	
			);
		}
		
		vm.obten = function(){
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