const fs = require('fs');

const talker = 'talker.json';

async function handleTalkerGetTerm(request, response, _next) {
  const { q } = request.query;
  const parsedData = JSON.parse(await fs.readFile(talker, 'utf-8', (_err, data) => data));
  const filteredData = parsedData.filter((r) => r.name.includes(q));
  if (filteredData === []) return response.status(200).json([]);
  return response.status(200).json(filteredData);
}

module.exports = handleTalkerGetTerm;