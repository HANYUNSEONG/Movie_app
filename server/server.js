const express = require('express');
const route = require('./routes/index');
const bodyParser = require('body-parser');
const app = express();
const port = 4000;

app.use(bodyParser.json());
// app.use('/api', (req, res) => res.json({ username: 'username' }));
app.use('/', route);

app.listen(port, () => {
	console.log(`express is running on ${port}`);
})