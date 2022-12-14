const fs = require('fs').promises;

const talker = 'talker.json';

async function handleTalkerPostOk(request, response, _next) {
  const { name, age, talk: { watchedAt, rate } } = request.body;
  const stringFileData = await fs.readFile(talker, 'utf-8', (_err, data) => data);
  const parsedData = JSON.parse(stringFileData);

  const newTalker = { id: (parsedData.length + 1), name, age, talk: { watchedAt, rate } };

  await fs.writeFile(talker, JSON.stringify([...parsedData, newTalker]));
  return response.status(201).json(newTalker);
}

module.exports = handleTalkerPostOk;