// importera Express-paketet
// registrera en route: '/', som ska returnera index.html
// starta servern - lyssna på port
const express = require('express');
const server = express();

server.get('/', (request, response) => {
	console.log('Server received request with url: ' + request.url);
	response.sendFile(__dirname + '/static/index.html')
})
server.get('/style.css', (request, response) => {
	console.log('Server received request for style.css');
	response.sendFile(__dirname + '/static/style.css')
})

const data = [
	{ title: 'Köttbullar', author: 'Olga' },
	{ title: 'Kyckling', author: 'Julian' }
]

// endpoint
server.get('/api/recipe/', (request, response) => {
	console.log('API request (GET) for ', request.query);
	if( request.query.title ) {
		console.log('We have a title: ' + request.query.title);
		let foundRecipes = data.filter(recipe => recipe.title === request.query.title);
		response.send(JSON.stringify(foundRecipes));
	} else {
		console.log('No title, returns all recipes');
		response.send(JSON.stringify(data));
	}
})

const port = 2048;
server.listen(port, () => {
	console.log('Server is listening on port ' + port);
})



// lägg till nya routes efter hand:
// /style.css
// /api?
// /api/:x
