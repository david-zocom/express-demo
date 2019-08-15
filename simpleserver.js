const express = require('express');
const server = express();

console.log('Server is in '+__dirname);
// server.get('/', (request, response) => {
// 	console.log('GET request to "/" ');
// 	response.send('Welcome to web root');
// })
server.get('/', (req, res) => res.send('Web root') );
server.all('/about/', (req, res) => res.send('Made by me') );
server.post('/form/', (req, res) => res.send('Data received POST') );
server.get('/form/', (req, res) => res.send('Data received GET') );

const staticPath = __dirname + '\\static\\';
console.log('Static folder: ' + staticPath);
server.use( express.static('static') );


server.listen(2000, () => {
	console.log('Server listening on port 2000.');
});
