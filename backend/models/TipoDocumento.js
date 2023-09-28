//Se importa la conexion a la base de datos 
import db from "../config/db.js";
//importa sequelize
import { DataTypes, Sequelize } from 'sequelize'
// Importar la biblioteca bcrypt para el hashing de contraseñas
import bcrypt from 'bcrypt';

const TipoDocumento = db.define('tipodocumento', {
    idTipoDocumento: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  
  export default TipoDocumento;