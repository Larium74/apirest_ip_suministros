import connectiondb from "../database/connection.js";

export let getClientes = (req, res) => {
    console.log("Accediendo a la ruta GET /clientes");
    connectiondb.query("SELECT ID_Cliente, Nombre_Cliente, Fecha_nacimiento_Cliente, Telefono_Cliente FROM clientes;")
        .then((data) => {
            console.log("Se han obtenido los clientes ", data[0]);
            res.status(200).json({
                Mensaje: "Los clientes han sido obtenidos exitosamente",
                Clientes: data[0]
            });
        })
        .catch((error) => {
            console.error("Hubo un error al obtener los clientes: ", error);
            res.status(500).json({
                Mensaje: "Error al obtener los clientes",
                Error: error
            });
        });
};

export let postCliente = (req, res) => {
    console.log("Accediendo a la ruta POST /cliente");

    const { nombreCli, fecha_nacimientoCli, telefonoCli } = req.body;
    connectiondb.query("INSERT INTO clientes (Nombre_Cliente, Fecha_nacimiento_Cliente, Telefono_Cliente) VALUES (?, ?, ?)", [nombreCli, fecha_nacimientoCli, telefonoCli])
        .then(() => {
            console.log("El cliente ha sido agregado exitosamente");
            res.status(200).json({
                Mensaje: "El cliente ha sido agregado exitosamente"
            });
        })
        .catch((error) => {
            console.error("Hubo un error al agregar el cliente: ", error);
            res.status(400).json({
                Mensaje: "Hubo un error al agregar el cliente",
                Error: error
            });
        });
};



export let mainRuta = (req, res) => {
    console.log ("Accediendo a la ruta princiapl")
    res.status (200).json ({
        Mensaej: "Bienvenidos a la ruta principal"
    })

}