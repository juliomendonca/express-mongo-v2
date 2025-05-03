import express from "express";
import LivrosController from "../controllers/livrosController.js";

const routes = express.Router();

// Get
routes.get("/livros", LivrosController.listarLivros)
    .get("/livros/busca", LivrosController.listarLivrosPorFiltro)
    .get("/livros/:id", LivrosController.listarLivroPorId);

// Post
routes.post("/livros", LivrosController.cadastrarLivro);

// Put
routes.put("/livros/:id", LivrosController.atualizarLivro);

// Delete
routes.delete("/livros/:id", LivrosController.excluirLivro);

export default routes;