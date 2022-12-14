const validator = require('email-validator');

function handleEmail(request, response, next) {
  const { email } = request.body;
  if (!email) return response.status(400).json({ message: 'O campo "email" é obrigatório' });
  if (!(validator.validate(email))) {
    return response.status(400)
      .json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
  next();
}

module.exports = handleEmail;