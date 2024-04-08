const express = require('express');
const bodyParser = require('body-parser');
const usersRouter = require('./users');

const app = express();

app.use(bodyParser.json());

app.use('/users', usersRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});