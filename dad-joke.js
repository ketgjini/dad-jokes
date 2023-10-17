const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'API_KEY',
		'X-RapidAPI-Host': 'HOST'
	}
};

fetch('https://dad-jokes.p.rapidapi.com/random/joke', options)
	.then(response => response.json())
	.then(response => {
        console.log(response);
        // Variable to store json result
        const data = response.body[0];
        let display = `<h2>${data.setup}</h2>
                   <h2>${data.punchline}</h2>`;

        // DOM Display result
        document.getElementById("joke").innerHTML = display;
    })
	.catch(err => console.error(err));