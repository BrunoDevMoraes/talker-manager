const fs = require('fs').promises;

const talker = 'talker.json';

async function handleTalkerDeleteOk(request, response, _next) {
  const { id } = request.params;
  const parsedData = JSON.parse(await fs.readFile(talker, 'utf-8', (_err, data) => data));
  parsedData.splice((id - 1), 1);
  // fs.writeFile(talker, 'utf-8', parsedData);
  console.log(parsedData);
  return response.status(204).end();
}

module.exports = handleTalkerDeleteOk;