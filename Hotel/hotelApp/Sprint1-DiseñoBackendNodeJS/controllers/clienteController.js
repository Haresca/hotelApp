const Cliente = require('../models/Cliente');

//Crear Cliente - Lo va a realizar el cliente como tal.
exports.registrarCliente = async (req, res) => {
    
    try{

        let cliente = new Cliente(req.body);
        if(cliente.consultarClientes){
            res.json({ msg: 'El cliente ya se encuentra registrado'});
        }
        else{
            await cliente.save();
            res.send(cliente);
        }
    }
    catch (Error){
        console.log(Error);
        res.status(500).send('Error al intentar registrar los datos');
    }
}

//Consultar todos los clientes
exports.consultarClientes = async (req, res) => {
    try{
        const cliente = await Cliente.find();
        res.json(cliente);
    }
    catch(error){
        console.log(error);
        res.status(500).send('Hay un error al consultar los datos');
    }
}

//Consultar por id
exports.consultarCliente = async (req, res) => {

    try{
        let cliente = await Cliente.findById(req.params.id);

        if(!cliente){
            res.status(404).json({ msg: 'No existe el cliente' });
        }

        res.json(cliente);
    }
    catch (error){
        console.log(error);
        res.status(500).send( 'Ha ocurrido un error' );
    }
}

//Actualizar cliente
exports.actualizarCliente = async (req, res) => {

    try{
        const {tipoDocumento, numeroDocumento, primerNombre, segundoNombre, primerApellido, segundoApellido,
            email, direccion, fechaNacimiento, telefono} = req.body;

        let cliente1 = await Cliente.findById(req.params.id);

        if(!cliente1){
            res.status(404).json({msg: 'No existe el Cliente a buscar'});
        }

        cliente1.tipoDocumento = tipoDocumento;
        cliente1.numeroDocumento = numeroDocumento;
        cliente1.primerNombre = primerNombre;
        cliente1.segundoNombre = segundoNombre;
        cliente1.primerApellido = primerApellido;
        cliente1.segundoApellido = segundoApellido;
        cliente1.email = email;
        cliente1.direccion = direccion;
        cliente1.fechaNacimiento = fechaNacimiento;
        cliente1.telefono = telefono;

        cliente1 = await Cliente.findOneAndUpdate({ _id: req.params.id}, cliente1, {new:true});
        res.json(cliente1);
    }
    catch (error){
        console.log(error);
        res.status(500).send('Ocurrió un error');
    }
}

//Eliminar un cliente
exports.eliminarCliente = async (req, res) => {
    try{

        let cliente1 = await Cliente.findById(req.params.id);

        if(!cliente1){
            res.status(404).json({ msg: 'El cliente a buscar no existe' });
        }

        await Cliente.findOneAndDelete({ _id: req.params.id });
        res.json({ msg: 'El cliente ha sido eliminado correctamente' });
    }
    catch (error){
        console.log(error);
        res.status(500).send('Ha ocurrido un error');
    }
}