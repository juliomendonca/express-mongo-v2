import { autor } from "../models/Autor.js";
import NaoEncontrado from "../erros/naoEncontrado.js";

class AutoresController {
  static atualizarAutor = async (req, res, next) => {
    try {
      const id = req.params.id;
      await autor.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "autor atualizado" });
    } catch (erro) {
      next(erro);
    }
  };

  static cadastrarAutor = async (req, res, next) => {
    try {
      const novoAutor = await autor.create(req.body);
      res.status(201).json({ message: "criado com sucesso", autor: novoAutor });
    } catch (erro) {
      next(erro);
    }
  }

  static excluirAutor = async (req, res, next) => {
    try {
      const id = req.params.id;
      await autor.findByIdAndDelete(id);
      res.status(200).json({ message: "autor excluído com sucesso" });
    } catch (erro) {
      next(erro);
    }
  };

  static listarAutores = async (req, res, next) => {
    try {
      const listaAutores = await autor.find({});
      res.status(200).json(listaAutores);
    } catch (erro) {
      next(erro);
    }
  };

  static listarAutorPorId = async (req, res, next) => {
    try {
      const id = req.params.id;

      const autoresResultado = await autores.findById(id);

      if (autorResultado !== null) {
        res.status(200).send(autoresResultado);
      } else {
        next(new NaoEncontrado("Id do Autor não localizado."));
      }

    } catch (erro) {
      next(erro);
    }
  };
};

export default AutoresController;