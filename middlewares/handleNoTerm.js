const fs = require('fs');

const talker = 'talker.json';

async function handleNoTerm(request, response, next) {
  const { q } = request.query;
  const parsedData = JSON.parse(await fs.readFile(talker, 'utf-8', (_err, data) => data));
  if (!q) return response.status(200).json(parsedData);
  next();
}

module.exports = handleNoTerm;