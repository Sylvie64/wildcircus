const connection = require('./config/conf');
const express = require('express');
const port = 8000;

app.get('/', (req, res) => {
  res.send('Bienvenue sur Express');
});




app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
	}
	console.log(`Server is listening on ${port}`);
});