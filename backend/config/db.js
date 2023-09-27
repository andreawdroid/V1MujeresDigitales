//importacion sequelize
import { Sequelize } from 'sequelize';

// Crea una nueva instancia de Sequelize y la almacena en la variable 'db'.
// Esta instancia representa una conexión a la base de datos.
const db = new Sequelize('mujeresselecion', 'root', '', {
  host: 'localhost', // El host de la base de datos
  dialect: 'mysql'
});

//se exporta la instancia de la base de datos
export default db;