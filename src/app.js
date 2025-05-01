// Libs
import express from 'express';

// Local
import connectDB from './config/dbConnect.js';
import manipulador404 from "./middlewares/manipulador404.js";
import manipuladorDeErros from './middleware/manipuladorDeErros.js';
import routes from './routes/index.js';

const conexao = await connectDB();

conexao.on("error", (err) => {
  console.log("Erro de conexão: " + err);
});

conexao.once("open", () => {
  console.log("Banco de dados conectado com sucesso!");
});

const app = express();
app.use(express.json());
routes(app);

app.use(manipulador404);

// Middlewares
app.use(manipuladorDeErros);

export default app;