const express = require('express');
const Equipment = require('../models/Equipment');  // Importa o modelo Equipment
const Condominium = require('../models/Condominium');  // Importa o modelo Condominium
const router = express.Router();

// Criar novo equipamento (CREATE)
router.post('/add', async (req, res) => {
  try {
    const condominium = await Condominium.findById(req.body.condominium);
    if (!condominium) {
      return res.status(404).send('Condomínio não encontrado');
    }

    const newEquipment = new Equipment({
      name: req.body.name,
      model: req.body.model,
      port: req.body.port,
      serialNumber: req.body.serialNumber,
      login: req.body.login,
      password: req.body.password,
      status: req.body.status,
      condominium: req.body.condominium  // Vincula ao condomínio
    });

    await newEquipment.save();

    // Opcional: adicionar o equipamento ao condomínio
    condominium.equipments.push(newEquipment);
    await condominium.save();

    res.status(201).send('Equipamento criado com sucesso!');
  } catch (err) {
    res.status(500).send('Erro ao criar equipamento');
  }
});

// Listar todos os equipamentos (READ)
router.get('/list', async (req, res) => {
  try {
    const equipments = await Equipment.find().populate('condominium');
    res.json(equipments);
  } catch (err) {
    res.status(500).send('Erro ao listar equipamentos');
  }
});

// Atualizar um equipamento (UPDATE)
router.put('/update/:id', async (req, res) => {
  try {
    await Equipment.findByIdAndUpdate(req.params.id, req.body);
    res.send('Equipamento atualizado com sucesso!');
  } catch (err) {
    res.status(500).send('Erro ao atualizar equipamento');
  }
});

// Deletar um equipamento (DELETE)
router.delete('/delete/:id', async (req, res) => {
  try {
    await Equipment.findByIdAndDelete(req.params.id);
    res.send('Equipamento deletado com sucesso!');
  } catch (err) {
    res.status(500).send('Erro ao deletar equipamento');
  }
});

module.exports = router;
