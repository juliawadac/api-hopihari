const express = require("express");
const router = express.Router();
const usuariosController = require("../controllers/usuarios.controller");
const login = require ("../middleware.js/usuarios.middlewre")
router.post("/login", usuariosController.login);
router.post("/", usuariosController.cadastrarUsuario);
router.put("", login.required, usuariosController.atualizarUsuario);

module.exports = router;