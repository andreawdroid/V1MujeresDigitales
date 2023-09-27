import Municipios from "../models/Municipios.js";


//** Crear municipio */

export const createMunicipio = async (req, res) => {
    try {
        const municipios = new Municipios(req.body);
        await municipios.save();
        return res.status(201).json(municipios);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

//** Mostrar los municipios */

export const obtnerMunicipios = async (req, res) => {
    try {
        const municipios = await Municipios.findAll();
        return res.status(200).json(municipios);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

//** CRUD MUNICIPIOS */

//** Editar municipios */

export const updateMunicipio = async (req, res) => {
    try {
        const { idMunicipios } = req.params; // Obtén el ID del municipio a actualizar desde la URL
        const { nuevoNombre } = req.body; // Obtén el nuevo nombre desde el cuerpo de la solicitud

        // Busca el municipio por su ID
        const municipio = await Municipios.update(idMunicipios);

        // Si no se encuentra el municipio, responde con un error
        if (!municipio) {
            return res.status(404).json({ error: 'Municipio no encontrado' });
        }

        // Actualiza el nombre del municipio con el nuevo nombre
        municipio.nombre = nuevoNombre;

        // Guarda los cambios en la base de datos
        await municipio.save();

        return res.status(200).json({ message: 'Municipio actualizado correctamente' });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}
