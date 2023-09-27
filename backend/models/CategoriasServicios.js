//Se importa la conexion a la base de datos 
import db from "../config/db.js";
//importa sequelize
import { DataTypes, Sequelize } from 'sequelize'

//Se crea el modelo

const CategoriaServicios = db.define('categoriaservicios', {
    idCategoriaServicios: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
}, {
});

export default CategoriaServicios;