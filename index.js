const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const talker = 'talker.json';

const error1 = {
  message: 'Pessoa palestrante não encontrada',
};

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});

app.get('/talker', (_request, response) => {
  const data = JSON.parse(fs.readFileSync(talker, 'utf-8'));
  if (!data) return response.status(200).json([]);
  response.status(200).json(data);
});

app.get('/talker:id', (request, response) => {
  const { id } = request.params;
  const data = JSON.parse(fs.readFileSync(talker, 'utf-8'));
  const wantedObj = data.find((obj) => obj.id === parseInt(id, 10));
  if (!wantedObj) return response.status(200).json(error1);
  response.status(200).json(wantedObj);
});