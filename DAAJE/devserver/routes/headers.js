const headers = (req, res, next) => {
	let origin = 'http://localhost:8080';
	res.set({'Access-Control-Allow-Origin': '*',
			 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
			 'Access-Control-Allow-Headers': 'content-type',
			 'Access-Control-Allow-Credentials': true,});
	res.set('Access-Control-Expose-Headers', 'Access-Control-Allow-Origin');
	console.log('response headers set');
	next();
};

module.exports = headers;
