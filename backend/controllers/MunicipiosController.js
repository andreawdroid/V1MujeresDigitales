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
    const { idMunicipios} = req.params
    try {
        await Municipios.update(req.body, {
            where: { idMunicipios: req.params.idMunicipios}
        })
        res.json({
            "message":"¡Registro actualizado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
