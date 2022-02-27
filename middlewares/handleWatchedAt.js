function handleWatchedAt(request, response, next) {
  const { talk: { watchedAt } } = request.body;
  const dateRegex = new RegExp('(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[012])/(19|20){2}', 'i');
  if (!dateRegex.test(watchedAt)) {
    return response.status(400)
    .json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }
  next();
}

module.exports = handleWatchedAt;
