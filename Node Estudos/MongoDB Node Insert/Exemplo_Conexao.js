const { MongoClient, ServerApiVersion } = require('mongodb');
const url = "mongodb+srv://rafaelmachado032:010203@cluster0.84oxr2p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Cria um MongoClient com um objeto MongoClientOptions para definir a versão estável da API
const client = new MongoClient(url, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Conecta o cliente ao servidor (opcional a partir da v4.7)
    await client.connect();
    // Envia um ping para confirmar uma conexão bem-sucedida
    await client.db("admin").command({ ping: 1 });
    console.log("Pingou sua implantação. Você se conectou com sucesso ao MongoDB!");
  } finally {
    // Garante que o cliente fechará quando você terminar/errar
    await client.close();
  }
}
run().catch(console.dir);
