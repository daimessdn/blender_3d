const express = require('express');

const app = express();

const PORT = 5000;

app.use(express.static('public'));

app.listen(PORT, () => {
	console.log(`the server is listening in 127.0.0.1/${PORT} on your browser.`);
});