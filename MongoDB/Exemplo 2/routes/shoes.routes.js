const express = require("express");
const router = express.Router();

const ShoesController = require("./../controllers/shoes.controller")

const shoesController = new ShoesController();

// [GET] /filmes - Retorna a lista de filmes
router.get("/calcados", shoesController.getShoes);

// [GET] /filmes/{id} - Retorna apenas um Ãºnico filme pelo ID
router.get("/calcados/:id", shoesController.getShoesById);

// [POST] - /filmes - Cria um novo filme
router.post("/calcados", shoesController.createShoes);

// [PUT] - /filmes/{id} - Atualiza um filme pelo ID
router.put("/calcados/:id", shoesController.updateShoes);

// [Delete] - /filmes{id} - Remover um filme pelo ID
router.delete("/calcados/:id", shoesController.deleteShoes);

module.exports = router;