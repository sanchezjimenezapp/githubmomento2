
const { request,response }=require('express');


const huespedModelo=require('../models/huespedModelo.js');




async function consultarReserva(peticion=request,respuesta=response){

    let datosconsultados=await huespedModelo.find();

    respuesta.json({
        estado:true,
        mensaje:datosconsultados
    });

}

async function crearReserva(peticion=request,respuesta=response){

    let datosReservas=peticion.body;

    let huesped=new huespedModelo(datosReservas);
    await huesped.save();
    
    respuesta.json({
        estado:true,
        mensaje:'Reserva agregada con exito',
        datos:huesped
    });

}

async function editarReserva(peticion=request,respuesta=response){

    let id=peticion.params.id;
    let datosReservas=peticion.body;

    await huespedModelo.findByIdAndUpdate(id,datosReservas);


    respuesta.json({
        estado:true,
        mensaje:'huesped actualizado con exito'
    });

}

async function eliminarReserva(peticion=request,respuesta=response){

    let id=peticion.params.id;
    await huespedModelo.findByIdAndDelete(id);

    respuesta.json({
        estado:true,
        mensaje:'huesped eliminado con exito'
    });

}

module.exports={
    consultarReserva,
    crearReserva,
    editarReserva,
    eliminarReserva
}