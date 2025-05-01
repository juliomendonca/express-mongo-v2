import mongoose from "mongoose";

const autorSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  nome: {
    type: String,
    required: [true, "O nome do(a) autor(a) é obrigatório"]
  },
  nacionalidade: { type: String, required: true }
},
  {
    versionKey: false
  }
);

const autor = mongoose.model("autores", autorSchema);

export {
  autorSchema,
  autor
}

