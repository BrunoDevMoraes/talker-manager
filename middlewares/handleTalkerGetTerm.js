const fs = require('fs').promises;

const talker = 'talker.json';

async function handleTalkerGetTerm(request, response, _next) {
  const { q } = request.query;
  const stringFileData = await fs.readFile(talker, 'utf8', (_err, data) => data);
  const parsedData = JSON.parse(stringFileData);

  const filteredData = parsedData.filter((r) => r.name.includes(q));

  return response.status(200).json(filteredData);
}

module.exports = handleTalkerGetTerm;