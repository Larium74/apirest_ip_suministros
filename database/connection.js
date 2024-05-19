import {createPool} from "mysql2/promise"
import { objectConnection } from "./objectConnection.js"

let connectiondb = createPool (objectConnection)

connectiondb.getConnection ()
.then (()=> console.log ("Conexión a la base de datos exitosa"))
.catch ((error)=> console.log ("Error al conectar con la base de datos "+error))

export default connectiondb