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
    try {
        const { codigo } = req.params; // Obtén el código de la manzana a actualizar desde la URL
        const { nuevoNombre, nuevaLocalidad, nuevaDireccion, nuevoIdMunicipios } = req.body; // Obtén los nuevos valores desde el cuerpo de la solicitud

        // Busca la manzana por su código
        const manzana = await Manzanas.findOne({
            where: { codigo: codigo }
        });

        // Si no se encuentra la manzana, responde con un error
        if (!manzana) {
            return res.status(404).json({ error: 'Manzana no encontrada' });
        }

        // Actualiza los campos de la manzana con los nuevos valores
        if (nuevoNombre) {
            manzana.nombre = nuevoNombre;
        }
        if (nuevaLocalidad) {
            manzana.localidad = nuevaLocalidad;
        }
        if (nuevaDireccion) {
            manzana.direccion = nuevaDireccion;
        }
        if (nuevoIdMunicipios) {
            manzana.idMunicipios = nuevoIdMunicipios;
        }

        // Guarda los cambios en la base de datos
        await manzana.save();

        // Recupera la manzana actualizada desde la base de datos
        const manzanaActualizada = await Manzanas.findOne({
            where: { codigo: codigo }
        });

        return res.status(200).json(manzanaActualizada);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};