import express from "express";

const router = express.Router();

import {obtenerClientes, agregarCliente, obtenerClienteID, borrarCliente, actualizarCliente, } from "../controllers/clientes.controllers.js"

router.get("/all", obtenerClientes);
router.get("/get/:id", obtenerClienteID);
router.post("/add", agregarCliente);
router.delete("/delete/:id", borrarCliente);
router.patch("/update/:id", actualizarCliente)

export default router;