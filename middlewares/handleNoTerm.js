const fs = require('fs').promises;

const talker = 'talker.json';

async function handleNoTerm(request, response, next) {
  const { q } = request.query;
  const stringFileData = await fs.readFile(talker, 'utf8', (_err, data) => data);
  const parsedData = JSON.parse(stringFileData);
  if (!q || q.length === 0) return response.status(200).json(parsedData);
  next();
}

module.exports = handleNoTerm;