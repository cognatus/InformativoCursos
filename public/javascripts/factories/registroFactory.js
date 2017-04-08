(function() {
	'use strict';

	angular.module('aplicacion').factory('registroFactory', registroF);
	registroF.$inject = ['$http'];

	function registroF($http){
	    return {
	    	registrar: function(datos) {
	    		return $http({
					method: 'POST',
					url: '/registrar/',
					data: {
						nombre: 	datos.nombre,
						curso: 		datos.curso,
						edad: 		datos.edad,
						email: 		datos.email,
						telefono: 	datos.telefono,
						escuela: 	datos.escuela
					} 
				}).then(function successCallback(response) {
					alert('Registrado con exito');
					window.location.href = "/";
				}, function errorCallback(response) {
					
				});;
	    	}
	    }
	}

})();