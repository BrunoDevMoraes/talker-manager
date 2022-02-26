const fs = require('fs');

const talker = 'talker.json';

function getAllTalkers(request, response, next) {
  const data = JSON.parse(fs.readFileSync(talker, 'utf-8'));
  if (!data) return response.status(200).json([]);
  response.status(200).json(data);
  next();
}

module.exports = getAllTalkers;