import Servicios from "../models/Servicios.js";
import bcrypt from 'bcrypt'

//** Creacion de servicios */

export const crearServicios = async (req, res) => {
    try {
        const { idCategoriaServicios, ...datosServicio } = req.body;

        // Verifica si idCategoriaServicios es un número válido
        if (!idCategoriaServicios || isNaN(idCategoriaServicios)) {
            return res.status(400).json({ error: 'El campo idCategoriaServicios es requerido y debe ser un número válido.' });
        }

        const servicios = await Servicios.create({
            ...datosServicio,
            idCategoriaServicios, // Asigna el valor de idCategoriaServicios
        });

        res.status(201).json(servicios);

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//** Mostrar los servicios */

export const mostrarServicios = async (req, res) => {
    try {
        const servicios = await Servicios.findAll();

        res.status(200).json(servicios);

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//** CRUD */

//** Actualizar servicios */

export const updateMunicipio = async (req, res) => {
    const { idServicios } = req.params
    try {
        await Servicios.update(req.body, {
            where: { idServicios }
        })
        res.json({
            msg: 'Servicios updated successfully'
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//** Eliminar servicios */

export const deleteMunicipio = async (req, res) => {
    const { idServicios } = req.params
    try {
        await Servicios.destroy({
            where: { idServicios }
        })
        res.json({
            msg: 'Servicios deleted successfully'
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}