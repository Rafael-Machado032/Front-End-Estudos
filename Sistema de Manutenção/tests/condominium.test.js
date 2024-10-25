const request = require('supertest');
const app = require('../server'); // Importar o app (servidor Express)

describe('Testes de Condomínios', () => {
  // Teste para adicionar um condomínio
  it('Deve criar um novo condomínio', async () => {
    const response = await request(app)
      .post('/api/condominiums/add')
      .send({
        name: 'Condomínio Exemplo',
        externalIP: '192.168.1.1'
      });

    expect(response.statusCode).toBe(201);
    expect(response.text).toBe('Condomínio criado com sucesso!');
  });

  // Teste para listar os condomínios
  it('Deve listar todos os condomínios', async () => {
    const response = await request(app).get('/api/condominiums/list');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBeTruthy();
  });
});
