
const { Router }= require('express');


const { consultarReserva }= require('../controllers/controladorReservas.js');
const { crearReserva }= require('../controllers/controladorReservas.js');
const { editarReserva }= require('../controllers/controladorReservas.js');
const { eliminarReserva }= require('../controllers/controladorReservas.js');


const {validarPeticion}=require('../validations/validaciones.js');


const {check}=require('express-validator');



let validaciones=Array(

    check('nombre',"este campo es obligatorio").not().isEmpty(),
    check('apellido',"este campo es obligatorio").not().isEmpty(),
    check('telefono',"este campo es obligatorio").not().isEmpty(),
    check('fechaInicioReserva',"este campo es obligatorio").not().isEmpty(),
    check('fechaFinReserva',"este campo es obligatorio").not().isEmpty(),
    check('numeroPersonas',"este campo es obligatorio").not().isEmpty(),
    check('tipoPaquete',"este campo es obligatorio").not().isEmpty(),
    validarPeticion

);

const rutas=Router();


rutas.get('/huespedes',consultarReserva);
rutas.post('/huesped/nuevo',validaciones,crearReserva); 
rutas.put('/huesped/editar/:id',editarReserva);
rutas.delete('/huesped/eliminar/:id',eliminarReserva)



module.exports=rutas;
