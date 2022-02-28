const fs = require('fs').promises;

const talker = 'talker.json';

async function handleTalkerDeleteOk(request, response, _next) {
  const { id } = request.params;

  const stringFileData = await fs.readFile(talker, 'utf8', (_err, data) => data);
  const parsedData = JSON.parse(stringFileData);

  parsedData.splice((Number(id) - 1), 1);
  await fs.writeFile(talker, JSON.stringify(parsedData));

  return response.status(204).end();
}

module.exports = handleTalkerDeleteOk;