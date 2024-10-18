const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).send('Acesso negado. Sem token.');
  }

  try {
    const verified = jwt.verify(token, process.env.SECRET_KEY);
    req.user = verified; // Adiciona os dados do usuário na requisição
    next(); // Passa para a próxima função de middleware
  } catch (err) {
    res.status(400).send('Token inválido.');
  }
};

module.exports = authMiddleware;
