const mongoose = require('mongoose');

// Definir o esquema para condomínios
const condominiumSchema = new mongoose.Schema({
  name: { type: String, required: true },       // Nome do condomínio (obrigatório)
  externalIP: { type: String, required: true }, // IP Externo do condomínio (obrigatório)
  equipments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Equipment' }]  // Referência para os equipamentos
});

// Criar o modelo baseado no esquema
const Condominium = mongoose.model('Condominium', condominiumSchema);

module.exports = Condominium;  // Exportar o modelo para ser usado em outros arquivos
