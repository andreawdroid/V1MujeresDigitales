//Se importa la conexion a la base de datos 
import db from "../config/db.js";
//importa sequelize
import { DataTypes } from 'sequelize'

//Se crea el modelo
const Establecimientos = db.define('establecimientos', {
    idEstablecimiento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    codigo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    responsable: {
        type: DataTypes.STRING,
        allowNull: false
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idServicios: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

//Se exporta el modelo
export default Establecimientos;