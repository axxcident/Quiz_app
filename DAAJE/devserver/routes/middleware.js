//	Imports
const fs 			  = require ("fs");
const path            = require("path/posix");
const { v4: uuidv4 }  = require("uuid");

//	Declarations

const mockQuestions = fs.readFileSync(path.normalize(`${__dirname}/../public/data/quizQuestions.json`));
console.log(mockQuestions);

const mwFunctions = {
	headers(req, res, next) {
			let origin = 'http://localhost:8080';
			res.set({'Access-Control-Allow-Origin': '*',
					'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
					'Access-Control-Allow-Headers': 'content-type',
					'Access-Control-Allow-Credentials': true,});
			res.set('Access-Control-Expose-Headers', 'Access-Control-Allow-Origin');
			console.log('response headers set');
			next();
	    },
	getMockQuestions(req, res) {
			res.status(200).send(mockQuestions);
	    },
	assignQuizId(req, res) {
			res.send(200, "OK!");
			//return quiz with added uuid property
	    }
};

module.exports = mwFunctions;