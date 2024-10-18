const mongoose = require('mongoose');

// Definir o esquema para equipamentos
const equipmentSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true,
    minlength: 3, // Nome do equipamento deve ter pelo menos 3 caracteres
    maxlength: 100 // Nome máximo de 100 caracteres
   },          // Nome do equipamento (obrigatório)
  model: { 
    type: String, 
    required: true,
    minlength: 2, // Modelo deve ter pelo menos 2 caracteres
    maxlength: 50 // Modelo máximo de 50 caracteres
  },         // Modelo do equipamento (obrigatório)
  port: { 
    type: Number, 
    required: true 
  },          // Porta de comunicação externa (obrigatório)
  serialNumber: { 
    type: String, 
    required: true,
    unique: true // Número de série deve ser único
  },  // Serial do equipamento (obrigatório)
  login: { 
    type: String, 
    required: true 
  },         // Login do equipamento (obrigatório)
  password: { 
    type: String, 
    required: true 
  },      // Senha do equipamento (obrigatório)
  status: { 
    type: String, 
    required: true,
    default: 'ativo',
    enum: ['ativo', 'inativo'] // Somente valores 'ativo' ou 'inativo' permitidos
  },        // Status (ativo, inativo, manutenção)
  lastMaintenance: { 
    type: Date, 
    default: Date.now }, // Última manutenção (valor padrão: data atual)
  condominium: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Condominium', 
    required: true 
  }  // Referência ao Condomínio
});

// Criar o modelo baseado no esquema
const Equipment = mongoose.model('Equipment', equipmentSchema);

module.exports = Equipment;  // Exportar o modelo para ser usado em outros arquivos
