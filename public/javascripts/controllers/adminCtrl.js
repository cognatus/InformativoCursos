!function(){"use strict";function n(n,t,o,a){var e=n,u=a;e.alumnos=[],e.sesion=!1,e.loguea=function(){u.loguearse(e.user,e.psw).then(function(n){alert(n.data),e.obten(),e.sesion=!0},function(n){alert(n.data)})},e.obten=function(){u.getAlumnos().then(function(n){e.alumnos=n.data},function(n){alert("No Furulo")})}}angular.module("aplicacion").controller("adminCtrl",n),n.$inject=["$scope","$document","$http","adminFactory"]}();