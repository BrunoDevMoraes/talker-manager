const fs = require('fs').promises;

const talker = 'talker.json';

async function handleTalkerPutOk(request, response, _next) {
  const { id } = request.params;
  const { name, age, talk: { watchedAt, rate } } = request.body;
  const updatedTalker = { id, name, age, talk: { watchedAt, rate } };
  const parsedData = JSON.parse(await fs.readFile(talker, 'utf-8', (_err, data) => data));
  parsedData.splice((id - 1), 1, updatedTalker);
  // fs.writeFile(talker, 'utf-8', parsedData);
  return response.status(200).json(parsedData);
}

module.exports = handleTalkerPutOk;