//Se importa la conexion a la base de datos 
import db from "../config/db.js";
//importa sequelize
import { DataType} from 'sequelize'

//Se crea el modelo

const ServicioMujer = db.define('serviciosmujer', {
    idServiciosMujer: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idUsuarios: {
        type: DataType.INTEGER,
        references: {
            model: 'usuarios',
            key: 'idUsuarios'
        }
    },
    idManzanas: {
        type: DataType.INTEGER,
        references: {
            model:'manzanas',
            key: 'idManzanas'
        }
    },
    idServicios: {
        type: DataType.INTEGER,
        references: {
            model:'servicios',
            key: 'idServicios'
        }
    },
    fecha: {
        type: DataType.DATEONLY
    },
    hora: {
        type: DataType.TIME
    }
})