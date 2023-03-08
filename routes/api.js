const express = require ('express');
const router = express.Router();
const apiController = require('../controllers/apiController');
const { validar } = require('../middleware/validar');
const { check } =require("express-validator");
const { validarID } = require('../middleware/validarID');

router.get('/verPet',apiController.verPets)
router.get('/buscar/:legajo',validar,apiController.busquedaPet)
router.post('/crear',[
    check("nombre").not().isEmpty().withMessage("el campo nombre es obligatorio"),
    check("sexo").not().isEmpty().withMessage("el campo sexo  es obligatorio"),
    check("especie").not().isEmpty().withMessage("el campo especie es obligatorio"),
    check("raza").not().isEmpty().withMessage("el campo raza es obligatorio"),
    check("peso").not().isEmpty().withMessage("el campo peso es obligatorio"),
],apiController.guardarPet)
router.put("/editar/:legajo",validar,[
    check("legajo").not().isEmpty().withMessage("el campo legajo es obligatorio para modificar"),
    check("nombre").not().isEmpty().withMessage("el campo nombre es obligatorio para modificar"),
    check("sexo").not().isEmpty().withMessage("el campo sexo es obligatorio para modificar"),
    check("especie").not().isEmpty().withMessage("el campo especie es obligatorio para modificar"),
    check("raza").not().isEmpty().withMessage("el campo raza es obligatorio para modificar"),
    check("peso").not().isEmpty().withMessage("el campo peso es obligatorio para modificar"),
],apiController.editarPet)
router.delete("/eliminar/:id",validarID,apiController.eliminarPet)

router.get("/poke",apiController.consultaAxios)

module.exports = router