//coleccion de usuario
var mongoose = require('mongoose');

var Alumno = mongoose.Schema({

	_id: {type: String, required: true},//email
	nombre: {type: String, required: true},
	edad: {type: String, required: true},
	curso: {type: String, required: true},
	telefono: {type: String, required: true},
	escuela: {type: String, required: false}

});

module.exports = mongoose.model('alumno', Alumno);
