const express = require("express");
const router = express.Router();
const usuariosController = require("../controllers/usuarios.controller");

router.post("/login", ()=>(console.log("Rota de login")));
router.post("/", usuariosController.cadastrarUsuario);
router.put("/:id", usuariosController.atualizarUsuario);

module.exports = router;