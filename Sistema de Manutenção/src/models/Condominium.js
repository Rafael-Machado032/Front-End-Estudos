const mongoose = require('mongoose');

// Definir o esquema para condomínios
const condominiumSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, 'O nome do condomínio é obrigatório'], // Mensagem de erro em português
    minlength: [3, 'O nome deve ter pelo menos 3 caracteres'],
    maxlength: 100 // Nome máximo de 100 caracteres 
  },       // Nome do condomínio (obrigatório)
  externalIP: {
    type: String,
    required: [true, 'O IP ou DDNS é obrigatório'],
    validate: {
      validator: function (v) {
        // Regex para validar formato de IP ou DDNS
        const ipRegex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        const ddnsRegex = /^(?!:\/\/)([a-zA-Z0-9\-]+\.)+[a-zA-Z]{2,6}$/; // Regex simples para DDNS
        return ipRegex.test(v) || ddnsRegex.test(v); // Aceita IP ou DDNS
      },
      message: props => `${props.value} não é um IP ou DDNS válido`
    }
  }, // IP Externo do condomínio (obrigatório)
  equipments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Equipment' }]  // Referência para os equipamentos
});

// Criar o modelo baseado no esquema
const Condominium = mongoose.model('Condominium', condominiumSchema);

module.exports = Condominium;  // Exportar o modelo para ser usado em outros arquivos
