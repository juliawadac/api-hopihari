const express = require("express");
const router = express.Router();
const login = require("../middleware.js/usuarios.middlewre");
const filaController = require("../controllers/filascontroller");

router.post("/:idRide", login.required, filaController.verificarFilas, filaController.entrarFila);

module.exports = router;