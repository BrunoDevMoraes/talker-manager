const crypto = require('crypto');

function handleLoginOk(request, response, next) {
  const token = (crypto.randomBytes(8)).toString('hex');
  response.status(200).json({ token });
  next();
}

module.exports = handleLoginOk;