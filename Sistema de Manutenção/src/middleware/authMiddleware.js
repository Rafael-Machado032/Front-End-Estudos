const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const authHeader = req.header('Authorization'); // Obter o cabeçalho de autorização

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).send('Acesso negado. Sem token.');
  }

  const token = authHeader.split(' ')[1]; // Extrair o token do formato "Bearer TOKEN"

  try {
    const verified = jwt.verify(token, process.env.SECRET_KEY);
    req.user = verified; // Adiciona os dados do usuário na requisição
    next(); // Passa para a próxima função de middleware
  } catch (err) {
    res.status(400).send('Token inválido.');
  }
};

module.exports = authMiddleware;
