//Se importa la conexion a la base de datos 
import db from "../config/db.js";
//importa sequelize
import { DataTypes, Sequelize } from 'sequelize'
// Importar la biblioteca bcrypt para el hashing de contraseñas
import bcrypt from 'bcrypt';

const Usuario = db.define('usuarios', {
    idUsuarios: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombres: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellidos: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tipoDoc: {
        type: DataTypes.STRING,
        allowNull: false
    },
    documento: {
        type: DataTypes.STRING,
        allowNull: false
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ciudad: {
        type: DataTypes.STRING,
        allowNull: false
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ocupacion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idServicios: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    password: {
        type: DataTypes.TEXT, // Cambiado a DataType.TEXT
        allowNull: false
    },
    idRol: {
        type: DataTypes.INTEGER,
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
    hooks: {
        // Agregar un hook antes de crear un nuevo usuario para hacer el hash de la contraseña
        beforeCreate: async (usuarios) => {
            console.log('Contraseña sin hashear:', usuarios.password);
            const saltRounds = 10; // Número de rondas de hashing
            const hashedPassword = await bcrypt.hash(usuarios.password, saltRounds);
            console.log('Contraseña hasheada:', hashedPassword);
            usuarios.password = hashedPassword;
        },
        
    }
});

export default Usuario;
