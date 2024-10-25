// Carregar as variáveis de ambiente

require('dotenv').config();               //Essa linha carrega as variáveis de ambiente do arquivo .env. O pacote dotenv permite que você defina variáveis sensíveis (como senhas ou strings de conexão) em um arquivo separado, para que não fiquem expostas no código-fonte. Quando você chama config(), todas as variáveis definidas no .env ficam disponíveis em process.env.
const mongoose = require('mongoose');     //Aqui, você está importando o módulo Mongoose, que é uma biblioteca para facilitar a interação com o MongoDB usando esquemas e modelos.
const express = require('express');       //Essa linha importa o módulo Express, um framework web para Node.js, que facilita a criação de aplicações web e APIs.
const app = express();                    //Aqui, você cria uma instância do aplicativo Express. Essa instância (app) será usada para definir rotas e middleware.
const port = process.env.PORT || 3000;    //Essa linha define a porta em que o servidor irá escutar. Ele primeiro tenta pegar a variável de ambiente PORT (definida no .env) e, se não existir, usa a porta 3000 como padrão


// Middleware para processar JSON no corpo das requisições
app.use(express.json());

// Importar as rotas de Condomínio
const condominiumRoutes = require('./server/routes/condominiumRoutes'); // Certifique-se de que o caminho está correto
app.use('/api/condominiums', condominiumRoutes); // Usar as rotas de Condomínio
//http://localhost:3000/api/condominiums/add
/**
 *
{
  "name": "Condomínio Exemplo",
  "externalIP": "192.168.1.100"
}
 */

// Importar as rotas de Equipamentos
const equipmentRoutes = require('./server/routes/equipmentRoutes');
app.use('/api/equipments', equipmentRoutes);
//http://localhost:3000/api/equipments/add
/**
{
  "name": "Equipamento Exemplo",
  "model": "Modelo X",
  "port": "8080",
  "serialNumber": "123456789",
  "login": "admin",
  "password": "admin123",
  "status": "ativo",
  "condominium": "6710769a05f5bed2b0725190"
}
*/

const authRoutes = require('./server/routes/authRoutes'); // Ajuste o caminho para o arquivo de rotas
app.use('/api/auth', authRoutes); // Usar as rotas de autenticação

const errorHandler = require('./src/middleware/errorHandler');

// Outras importações e definições de rotas...

// Middleware global de erros
app.use(errorHandler);


// Atualizar string de conexão do MongoDB

const uri = process.env.MONGO_URI;        // Agora usamos a variável de ambiente
//Aqui, você obtém a string de conexão do MongoDB, que foi definida no .env. Isso permite que você se conecte ao banco de dados usando a string correta, sem expor informações sensíveis no código.

// Conectar ao MongoDB com Mongoose
async function connectMongoDB() { //Essa função assíncrona é responsável por conectar ao MongoDB usando Mongoose.
  
  try {
    await mongoose.connect(uri);   //Essa linha tenta conectar ao MongoDB usando a string de conexão obtida anteriormente. O await é usado porque mongoose.connect retorna uma Promise (uma operação assíncrona) e queremos esperar até que a conexão seja estabelecida.
    console.log('Conectado ao MongoDB com sucesso!');
    
    // Testar conexão enviando um ping
    await mongoose.connection.db.command({ ping: 1 });  //Esta linha envia um comando de ping para o banco de dados MongoDB, confirmando que a conexão está ativa. É uma maneira de verificar a saúde da conexão.
    console.log('Ping bem-sucedido ao MongoDB!');

  } catch (err) {
    console.error('Erro ao conectar ao MongoDB:', err);
  }

}

// Chamar a função de conexão
connectMongoDB();

// Exportar o app para ser usado nos testes
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });
}

module.exports = app;  // Exporta o app para ser utilizado em testes



