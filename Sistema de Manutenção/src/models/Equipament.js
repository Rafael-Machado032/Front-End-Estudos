const mongoose = require('mongoose');

// Definir o esquema para equipamentos
const equipmentSchema = new mongoose.Schema({
  name: { type: String, required: true },          // Nome do equipamento (obrigatório)
  model: { type: String, required: true },         // Modelo do equipamento (obrigatório)
  port: { type: Number, required: true },          // Porta de comunicação externa (obrigatório)
  serialNumber: { type: String, required: true },  // Serial do equipamento (obrigatório)
  login: { type: String, required: true },         // Login do equipamento (obrigatório)
  password: { type: String, required: true },      // Senha do equipamento (obrigatório)
  status: { type: String, required: true },        // Status (ativo, inativo, manutenção)
  lastMaintenance: { type: Date, default: Date.now }, // Última manutenção (valor padrão: data atual)
  condominium: { type: mongoose.Schema.Types.ObjectId, ref: 'Condominium', required: true }  // Referência ao Condomínio
});

// Criar o modelo baseado no esquema
const Equipment = mongoose.model('Equipment', equipmentSchema);

module.exports = Equipment;  // Exportar o modelo para ser usado em outros arquivos
