(function() {
	'use strict';

	angular.module('aplicacion').factory('adminFactory', adminF);
	adminF.$inject = ['$http'];

	function adminF($http){
		return {
			getAlumnos: function(datos) {
				return $http({
					method: 'GET',
					url: '/obtenerAlumnos/'
				});
			},
			loguearse: function(user, psw) {
				return $http({
					method: 'POST',
					url: '/loguearse/',
					data: {
						user: 	user,
						psw: 	psw
					}
				});
			}
		}
	}

})();