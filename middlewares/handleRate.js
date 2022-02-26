function handleRate(request, response, next) {
  const { talk: { rate } } = request.body;
  const isInteger = Number.isInteger(rate);
  if (isInteger === false || rate < 1 || rate > 5) {
    return response.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  }
  next();
}

module.exports = handleRate;