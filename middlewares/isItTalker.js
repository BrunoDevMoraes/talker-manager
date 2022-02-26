const fs = require('fs');

const talker = 'talker.json';

function isItTalker(request, response, next) {
  const { id } = request.params;
  const data = JSON.parse(fs.readFileSync(talker, 'utf-8'));
  const talkObj = data.find((obj) => obj.id === parseInt(id, 10));
  if (!talkObj) return response.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  response.status(200).json(talkObj);
  next();
}

module.exports = isItTalker;
