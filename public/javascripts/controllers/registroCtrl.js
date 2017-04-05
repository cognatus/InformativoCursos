(function() {

	'use strict';

	angular.module('aplicacion').controller('registroCtrl', registroController);
	registroController.$inject = ['$scope','$document','$http', 'registroFactory'];


	function registroController($scope, $document, $http, registroFactory){

		var vm = $scope;
		var fc = registroFactory;
		
		vm.registra = function(){
			console.log(vm.registro)
			fc.registrar(vm.registro).then(
				function(data) {
					alert("Furulo");
				},
				function(err) {
					alert("No Furulo");
				}	
			);
		};

	}
})();