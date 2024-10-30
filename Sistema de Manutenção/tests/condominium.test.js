const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../server');  // Aqui está o app, não o server
let server;
let token;  // Para armazenar o token JWT

describe('Testes de Condomínios', () => {
  beforeAll(async () => {
    server = app.listen(3001);  // Inicia o servidor na porta 3001
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

    // Realizar login para obter o token JWT (ou gerar um token manualmente)
    const loginResponse = await request(server)
      .post('/api/login')  // Ajuste de acordo com a rota de login
      .send({
        username: 'seuUsuario',  // Insira um usuário de teste
        password: 'suaSenha'     // Insira a senha de teste
      });
    token = loginResponse.body.token;  // Armazenar o token JWT
  });

  afterAll(async () => {
    await mongoose.connection.close();  // Fecha a conexão com o MongoDB
    server.close();  // Fecha o servidor corretamente
  });

  // Teste para adicionar um condomínio
  it('Deve criar um novo condomínio', async () => {
    const response = await request(server)
      .post('/api/condominiums/add')
      .set('Authorization', `Bearer ${token}`)  // Adicionar o token no cabeçalho
      .send({
        name: 'Condomínio Exemplo',
        externalIP: '192.168.1.1'
      });

    expect(response.statusCode).toBe(201);
    expect(response.text).toBe('Condomínio criado com sucesso!');
  });

  // Teste para listar os condomínios
  it('Deve listar todos os condomínios', async () => {
    const response = await request(server)
      .get('/api/condominiums/list')
      .set('Authorization', `Bearer ${token}`);  // Adicionar o token no cabeçalho
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBeTruthy();
  });
});
