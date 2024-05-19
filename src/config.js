import {config} from "dotenv"

config ()

export const MYSQLHOST = process.env.MYSQLHOST
export const MYSQLDB = process.env.MYSQLDB
export const MYSQLUSER = process.env.MYSQLUSER
export const MYSQLPASSWORD = process.env.MYSQLPASSWORD
export const MYSQLPORT = process.env.MYSQLPORT
