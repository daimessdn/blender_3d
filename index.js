const express = require('express');
const serverless = require("serverless-http");

const app = express();

const PORT = 8000;

app.use(express.static('public'));

app.listen(PORT, () => {
	console.log(`the server is listening in http://127.0.0.1:${PORT} on your browser.`);
});

module.exports = app;
module.exports.handler = serverless(app);