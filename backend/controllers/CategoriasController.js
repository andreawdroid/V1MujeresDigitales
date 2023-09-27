import CategoriaServicios from "../models/CategoriasServicios.js";

//** Crear categoria servicios */

export const crearCategoriaServicios = async (req, res) => {
    try {
      const categoriaservicios = await CategoriaServicios.create(req.body);
      res.status(201).json(categoriaservicios);
  
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

//** Mostrar Categorias */

export const mostrarCategoriaServicios = async (req, res) => {
    try {
      const categoriaservicios = await CategoriaServicios.findAll();
      res.status(200).json(categoriaservicios);
  
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

//** CRUD */

//** Actualizar categorias */
export const updateCategorias = async (req, res) => {
    const { idCategoriaServicios } = req.params
    try {
        await  CategoriaServicios.update(req.body, {
            where: { idCategoriaServicios }
        })
        res.json({
            msg: 'Categorias updated successfully'
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
};

//** Eliminar categorias */

export const deleteCategorias = async (req, res) => {
    const { idCategoriaServicios } = req.params
    try {
        await  CategoriaServicios.destroy({
            where: { idCategoriaServicios }
        })
        res.json({
            msg: 'Categorias deleted successfully'
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}; 
