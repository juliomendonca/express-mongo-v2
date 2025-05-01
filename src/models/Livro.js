import mongoose from "mongoose";
import { autorSchema } from "./Autor.js";

const livroSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId, required: true },
  titulo: { type: String, required: true },
  editora: { type: String, required: true },
  preco: { type: mongoose.Schema.Types.Double, required: true },
  paginas: { type: mongoose.Schema.Types.Int32, required: true },
  autor: autorSchema,
}, {
  versionKey: false
});

const livro = mongoose.model("livros", livroSchema);

export default livro;