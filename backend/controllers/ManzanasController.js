import Manzanas from "../models/Manzanas.js";

//** Crear manzanas */

export const createManzana = async (req, res) => {
  try {
    const manzanas = await Manzanas.create(req.body);
    res.status(201).json(manzanas);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//** Mostrar las manzanas */

export const getAllManzanas = async (req, res) => {
  try {
    const manzanas = await Manzanas.findAll();
    res.status(200).json(manzanas);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//** CRUD */

//** Actualizar manzanas */

export const updateManzana = async (req, res) => {
    const { idManzanas } = req.params
    try {
        await Manzanas.update(req.body, {
            where: { idManzanas}
        })
        res.json({
            msg: 'Manzanas updated successfully'
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
};

//** Eliminar manzanas */

export const deleteManzana = async (req, res) => {
    const { idManzanas } = req.params
    try {
        await Manzanas.destroy({
            where: { idManzanas}
        })
        res.json({
            msg: 'Manzanas deleted successfully'
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
};