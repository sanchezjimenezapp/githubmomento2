const {model,Schema}=require('mongoose');

const HuespedEsqueleto=Schema({

    nombre: {
        type: String,
        required:[true, 'este campo es necesario']
    },
    apellido:{
        type: String,
        required:[true, 'este campo es necesario']
    },
    telefono:{
        type: Number,
        required: [true, 'este campo es necesario']
    },
    fechaInicioReserva:{
        type: String,
        required: [true, 'este campo es necesario']
    },
    fechaFinReserva:{
        type: String,
        required: [true, 'este campo es necesario']
    },
    numeroPersonas:{
        type: Number,
        required: [true, 'este campo es necesario']
    },
    tipoPaquete:{
        type: String,
        required: [true, 'este campo es necesario']
    }
});

module.exports=model('Huesped',HuespedEsqueleto);