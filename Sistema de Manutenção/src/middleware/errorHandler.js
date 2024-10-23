// Middleware de tratamento de erros
const errorHandler = (err, req, res) => {
    console.error(err.stack);  // Loga o erro para o servidor
  
    // Verifica se o erro já tem um código de status, caso contrário, usa 500
    const statusCode = err.status || 500;
    
    const message = err.message || 'Erro interno do servidor';
    // Retorna a resposta com o erro
    res.status(statusCode).json({
      error: {
        message: message, // Aqui é retornada a mensagem do Mongoose
        statusCode: statusCode
      }
    });
  };
  
  module.exports = errorHandler;
  