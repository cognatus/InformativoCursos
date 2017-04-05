//coleccion de usuario
var mongoose = require('mongoose');

var Admin = mongoose.Schema({

	_id: {type: String, required: true},//email
	psw: {type: String, required: true}

});

module.exports = mongoose.model('admin', Admin);
