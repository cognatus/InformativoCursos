var express = require('express');
var router = express.Router();
var Alumno = require('../moduls/Alumno');

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

router.get('/obtenerAlumnos', function(req, res, next) {
	Alumno.find({}, function(err, alumnos){
		if (err)
			res.send(err);
		res.json(alumnos);
	 });
});




module.exports = router;
