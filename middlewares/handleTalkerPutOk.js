const fs = require('fs').promises;

const talker = 'talker.json';

async function handleTalkerPutOk(request, response, _next) {
  const { id } = request.params;
  const { name, age, talk: { watchedAt, rate } } = request.body;
  const updatedTalker = { id: Number(id), name, age, talk: { watchedAt, rate } };

  const stringFileData = await fs.readFile(talker, 'utf-8', (_err, data) => data);
  const parsedData = JSON.parse(stringFileData);

  const index = parsedData.findIndex((r) => Number(r.id) === Number(id));
  parsedData[index] = updatedTalker;

  await fs.writeFile(talker, JSON.stringify(parsedData));
  return response.status(200).json({
    name,
    age,
    id: Number(id),
    talk: { watchedAt, rate },
  });
}

module.exports = handleTalkerPutOk;