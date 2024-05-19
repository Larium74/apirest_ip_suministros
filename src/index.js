import express from "express"
import connectiondb from "../database/connection.js"
import routerClientes from "../routes/clientes.routes.js"


let app = express ()

app.use (express.json ())
app.use (express.urlencoded ({extended: false}))

app.use (routerClientes)


app.listen (4000, ()=> console.log ("Servidor inivcializado en el puerto "+4000))