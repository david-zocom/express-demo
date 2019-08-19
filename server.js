// importera Express-paketet
// registrera en route: '/', som ska returnera index.html
// starta servern - lyssna på port
const express = require('express');
const server = express();

server.use((request, response, next) => {
	console.log('Logger:', request.url, request.method);
	next();
})

server.use( express.static(__dirname + '/static/') );

// server.get('/', (request, response) => {
// 	console.log('Server received request with url: ' + request.url);
// 	response.sendFile(__dirname + '/static/index.html')
// })
// server.get('/style.css', (request, response) => {
// 	console.log('Server received request for style.css');
// 	response.sendFile(__dirname + '/static/style.css')
// })

const data = [
	{ title: 'Köttbullar', author: 'Olga' },
	{ title: 'Kyckling', author: 'Julian' }
]

// endpoint
server.get('/api/recipe/', (request, response) => {
	console.log('API request (GET) for ', request.query);
	if( request.query.title ) {
		console.log('Searching for title: ' + request.query.title);
		let foundRecipes = data.filter(recipe => recipe.title === request.query.title);
		response.send(JSON.stringify(foundRecipes));
	} else if( request.query.author ) {
		console.log('Searching for author: ' + request.query.author);
		let foundRecipes = data.filter(recipe => recipe.author === request.query.author);
		response.send(JSON.stringify(foundRecipes));
	} else {
		console.log('No title, returns all recipes');
		response.send(JSON.stringify(data));
	}
})

server.post('/api/recipe/', (request, response) => {
	let title = request.query.title;
	let author = request.query.author;
	data.push({ title, author });
})


server.get('/demo1', (req, res) => {
	res.send('Request to /demo1');
})
server.get('/demo2/hej1', (req, res) => {
	res.send('Request to /demo2/hej1');
})
server.get('/demo2/hej2', (req, res) => {
	res.send('Request to /demo2/hej2');
})
server.get('/demo2/:x', (req, res) => {
	res.send('Request to /demo2/:x with parameter ' + JSON.stringify(req.params));
})

server.get('/error', (req, res) => {
	throw Error('User error');
})

server.use((error, request, response, next) => {
	console.log('An internal error occurred.', error);
	response.status(500)
		.send('505: An internal error occurred. Try again later and reboot your computer.');
})


const port = 2048;
server.listen(port, () => {
	console.log('Server is listening on port ' + port);
})



// lägg till nya routes efter hand:
// /style.css
// /api?
// /api/:x
