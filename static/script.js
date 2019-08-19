window.addEventListener('load', () => {
	document.getElementById('postRecipeButton').addEventListener('click', () => {
		let title = document.getElementById('title').value;
		let author = document.getElementById('author').value;
		// Alternativ för AJAX: fetch, XMLHttpRequest, jQuery, axios
		let url = `/api/recipe?title=${title}&author=${author}`;
		// ojoj... Vi hoppas på att ingen skickar med en funktion eller liknade till sörven.
		fetch(url, { method: 'POST' })
		.then(response => {
			console.log('Fetch successful', response);
			// TODO: återkoppla för användaren - säg att ordet har lagts till
		})
		.catch(error => {
			console.log('Fetch failed.', error)
		})
	})

})
