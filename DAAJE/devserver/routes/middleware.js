//	Imports
const fs 			  = require ("fs");
const path            = require("path/posix");
const { v4: uuidv4 }  = require("uuid");

//	Declarations
const dataPath = path.normalize(`${__dirname}/../public/data/`);
						//sync fn used here for only for server setup(serving mock questions). Use async for further db handling.
const mockQuestions = fs.readFileSync(path.join(dataPath, 'quizQuestions.json'));
const isVerified = () => {/* verify caller fn and return bool */};

//  Main export body
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
			res.status(200).send(JSON.parse(mockQuestions));
	    },
	assignQuizId(req, res, next) {
			//add uuid property to request and redirect to add id to url param
			console.log('Request from: ' + req.url);
			let newId = uuidv4();
			req.body.uuid = newId;
			console.log(`Appended ID: ${newId}`);
			next();
	    },
	writeNewQuiz(req, res) {
			//write new quiz into db
			console.log(req.body);
			const data = JSON.stringify(req.body);
			fs.writeFile(path.join(dataPath, 'sessionUserQuiz.json'), data, isVerified)
			res.status(200).send({ msg: "Posted new quiz!" });
		}
};

module.exports = mwFunctions;