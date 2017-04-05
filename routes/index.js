var express = require('express');
var router = express.Router();
var Alumno = require('./moduls/Alumno');

/* Routes for pages */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Cursos Locos' });
});

/* API stuff */
router.post('/registrar', function(req, res, next) {
	var guardaAlumno = new Alumno({
					_id: req.query.email,//email
					nombre: req.query.nombre,
					edad: req.query.edad,
					curso: req.query.curso,
					telefono: req.query.telefono,
					escuela: req.query.escuela

	});
	guardaAlumno.save(function(err, alumno) {
		if (err)
			res.send(err);
		res.json(alumno);
	});
});

module.exports = router;
