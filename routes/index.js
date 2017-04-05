var express = require('express');
var router = express.Router();
var Alumno = require('../moduls/Alumno');
var Admin = require('../moduls/Admin');

/* Routes for pages */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Cursos Locos' });
});
router.get('/admin', function(req, res, next) {
	res.render('admin', { title: 'Cursos Locos Admin' });
});

/* API stuff */
router.post('/registrar', function(req, res, next) {
	var guardaAlumno = new Alumno({
					_id: req.body.email,//email
					nombre: req.body.nombre,
					edad: req.body.edad,
					curso: req.body.curso,
					telefono: req.body.telefono,
					escuela: req.body.escuela

	});
	guardaAlumno.save(function(err, alumno) {
		if (err)
			res.send(err);
		res.json(alumno);
	});
});

router.post('/loguearse', function(req, res, next) {

	Admin.find({ user: req.body.user, psw: req.body.psw }, function(err, admin){

		if( err || admin[0] == undefined ){

			console.log(req)

			res.status(405).send('No tienes permiso dude');

		}else{
			res.status(200).send("furulo");
		}
	});
});

router.get('/obtenerAlumnos', function(req, res, next) {
	Alumno.find({}, function(err, alumnos){
		if (err)
			res.send(err);
		res.json(alumnos);
	});
});




module.exports = router;
