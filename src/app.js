// Libs
import express from 'express';
import manipuladorDeErros from './middleware/manipuladorDeErros.js';

// Local
import connectDB from './config/dbConnect.js';
import routes from './routes/index.js';

const conexao = await connectDB();

conexao.on("error", (err) => {
  console.log("Erro de conexão: " + err);
});

conexao.once("open", () => {
  console.log("Banco de dados conectado com sucesso!");
});

const app = express();
routes(app);

// Middlewares
app.use(manipuladorDeErros);

export default app;