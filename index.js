const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const crypto = require('crypto');
const validator = require("email-validator");

const talker = 'talker.json';

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

app.get('/talker/:id', (request, response) => {
  const { id } = request.params;
  const data = JSON.parse(fs.readFileSync(talker, 'utf-8'));
  const talkObj = data.find((obj) => obj.id === parseInt(id, 10));
  if (!talkObj) return response.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  response.status(200).json(talkObj);
});

app.use(bodyParser.json());

app.post('/login', (request, response) => {
  const { email, password } = request.body;
  if (!email) return response.status(400).json({ message: 'O campo "email" é obrigatório'});
  if (!(validator.validate(email))) {
    return response.status(400)
      .json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
  if (!password) return response.status(400).json({ message: 'O campo "password" é obrigatório' });
  if (password.length < 6) {
    return response.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
  }
  const token = (crypto.randomBytes(8)).toString('hex');
  response.status(200).json({ token });
});