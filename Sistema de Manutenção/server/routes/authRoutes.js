const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../src/models/User'); // Importa o modelo User
const router = express.Router();

// Registrar um novo usuário (POST)
router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Verificar se o usuário já existe
    let user = await User.findOne({ username });
    if (user) return res.status(400).send('Usuário já existe');

    // Criar novo usuário
    user = new User({ username, password: await bcrypt.hash(password, 10) });
    await user.save();

    res.status(201).send('Usuário registrado com sucesso!');
  } catch (err) {
    res.status(500).send('Erro ao registrar usuário');
  }
});

// Logar um usuário (POST)
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(400).send('Usuário não encontrado');

    // Comparar a senha
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).send('Senha inválida');

    // Criar e retornar um token
    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    res.status(500).send('Erro ao logar');
  }
});

module.exports = router;
