import mongoose from "mongoose";
import { autorSchema } from "./Autor.js";

const livroSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId, required: true },
  titulo: {
    type: String,
    required: [true, "O título do livro é obrigatório"]
  },
  editora: {
    type: String,
    required: [true, "A editora é obrigatória"]
  },
  preco: { type: mongoose.Schema.Types.Double, required: true },
  paginas: { type: mongoose.Schema.Types.Int32, required: true },
  autor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "autores",
    required: [true, "O(a) autor(a) é obrigatório"]
  },
}, {
  versionKey: false
});

const livro = mongoose.model("livros", livroSchema);

export default livro;