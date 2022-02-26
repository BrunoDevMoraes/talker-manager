const validateDate = require('validate-date');

function handleWatchedAt(request, response, next) {
  const { talk: { watchedAt } } = request.body;
  const isDateValid = validateDate(watchedAt, 'boolean', 'dd/mm/yyyy');
  if (isDateValid === false) {
    return response.status(400)
    .json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }
  next();
}

module.exports = handleWatchedAt;
