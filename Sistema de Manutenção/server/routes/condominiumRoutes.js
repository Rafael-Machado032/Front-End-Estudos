const express = require('express');
const authMiddleware = require('../../src/middleware/authMiddleware'); // Importar o middleware
const Condominium = require('../../src/models/Condominium');  // Importa o modelo Condominium
const router = express.Router();

// Usar o middleware para proteger as rotas
router.use(authMiddleware);


// Criar novo condomínio (CREATE)
router.post('/add', async (req, res) => {
  try {
    
    const newCondominium = new Condominium({
      name: req.body.name,
      externalIP: req.body.externalIP
    });

    await newCondominium.save();

    res.status(201).send('Condomínio criado com sucesso!');
  } catch (err) {
    console.error('Erro ao criar condomínio:', err);
    res.status(500).send('Erro ao criar condomínio');
  }
});


// Listar todos os condomínios (READ)
router.get('/list', async (req, res) => {
  try {
    const condominiums = await Condominium.find().populate('equipments');
    res.json(condominiums);
  } catch (err) {
    res.status(500).send('Erro ao listar condomínios');
  }
});

// Atualizar um condomínio (UPDATE)
router.put('/update/:id', async (req, res) => {
  try {
    await Condominium.findByIdAndUpdate(req.params.id, req.body);
    res.send('Condomínio atualizado com sucesso!');
  } catch (err) {
    res.status(500).send('Erro ao atualizar condomínio');
  }
});

// Deletar um condomínio (DELETE)
router.delete('/delete/:id', async (req, res) => {
  try {
    await Condominium.findByIdAndDelete(req.params.id);
    res.send('Condomínio deletado com sucesso!');
  } catch (err) {
    res.status(500).send('Erro ao deletar condomínio');
  }
});

module.exports = router;
