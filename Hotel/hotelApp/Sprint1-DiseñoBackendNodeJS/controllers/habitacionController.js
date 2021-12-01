const Habitacion = require('../models/Habitacion');

//Crear Habitacion -- A cargo del Administrador
exports.registrarHabitacion = async (req, res) => {

    try{

        let habitacion;
        habitacion = new Habitacion(req.body);
        await habitacion.save();
        res.send(habitacion);
    }
    catch (Error){
        console.log(Error);
        res.status(500).send('Error al intentar registrar los datos');
    }
}

//Consultar todos las habitaciones
exports.consultarHabitaciones = async (req, res) => {
    try{
        const habitacion = await Habitacion.find();
        res.json(habitacion);
    }
    catch(error){
        console.log(error);
        res.status(500).send('Hay un error al consultar los datos');
    }
}

//Consultar por id
exports.consultarHabitacion = async (req, res) => {

    try{
        let habitacion = await Habitacion.findById(req.params.id);

        if(!habitacion){
            res.status(404).json({ msg: 'No existe la habitación' });
        }

        res.json(habitacion);
    }
    catch (error){
        console.log(error);
        res.status(500).send( 'Ha ocurrido un error' );
    }
}

//Actualizar datos de la habitación
exports.actualizarHabitacion = async (req, res) => {

    try{
        const {numeroHabitacion, categoria, descripcion, precio, estado} = req.body;

        let habitacion1 = await Habitacion.findById(req.params.id);

        if(!habitacion1){
            res.status(404).json({msg: 'No existe la habitación a buscar'});
        }

        habitacion1.numeroHabitacion = numeroHabitacion;
        habitacion1.categoria = categoria;
        habitacion1.descripcion = descripcion;
        habitacion1.precio = precio;
        habitacion1.estado = estado;
        

        habitacion1 = await Habitacion.findOneAndUpdate({ _id: req.params.id}, habitacion1, {new:true});
        res.json(habitacion1);
    }
    catch (error){
        console.log(error);
        res.status(500).send('Ocurrió un error');
    }
}

//Eliminar una habitación
exports.eliminarHabitacion = async (req, res) => {
    try{

        let habitacion1 = await Habitacion.findById(req.params.id);

        if(!habitacion1){
            res.status(404).json({ msg: 'La habitación a buscar no existe' });
        }

        await Habitacion.findOneAndDelete({ _id: req.params.id });
        res.json({ msg: 'La habitación ha sido eliminada correctamente' });
    }
    catch (error){
        console.log(error);
        res.status(500).send('Ha ocurrido un error');
    }
}