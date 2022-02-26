function handleTalk(request, response, next) {
  const { talk } = request.body;
  const { watchedAt, rate } = talk;
  if (!talk || !watchedAt || !rate) {
    return response.status(400)
    .json({ message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' });
  }
  next();
}

module.exports = handleTalk;