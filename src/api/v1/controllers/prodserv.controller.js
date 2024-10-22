import entregaService from '../services/prodServ.service';
import boom from '@hapi/boom';

// Obtener lista de todos los envíos
export const getAllEntregas = async (req, res, next) => {
    try {
        const entregasList = await entregaService.listAll();
        if (!entregasList || entregasList.length === 0) {
            return res.status(404).json({ message: 'No se encontraron envíos registrados.' });
        }
        return res.status(200).json(entregasList);
    } catch (error) {
        console.error('Error en getAllEntregas:', error);
        next(boom.internal(error.message));
    }
};

// Obtener un envío específico por ID
export const getEntregaById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const entrega = await entregaService.findById(id);
        if (!entrega) {
            return res.status(404).json({ message: 'Envío no encontrado.' });
        }
        return res.status(200).json(entrega);
    } catch (error) {
        console.error('Error en getEntregaById:', error);
        next(boom.internal(error.message));
    }
};

// Crear un nuevo envío
export const createEntrega = async (req, res, next) => {
    try {
        const newEntrega = await entregaService.create(req.body);
        if (!newEntrega) {
            throw boom.badRequest('No se pudo crear el envío.');
        }
        res.status(201).json(newEntrega);
    } catch (error) {
        console.log(error);
        next(boom.internal(error.message));
    }
};

// Actualizar un envío
export const updateEntrega = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedEntrega = await entregaService.update(id, req.body);
        if (!updatedEntrega) {
            return res.status(404).json({ message: 'Envío no encontrado.' });
        }
        return res.status(200).json(updatedEntrega);
    } catch (error) {
        console.error('Error en updateEntrega:', error);
        next(boom.internal(error.message));
    }
};

// Eliminar un envío
export const deleteEntrega = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedEntrega = await entregaService.delete(id);
        if (!deletedEntrega) {
            return res.status(404).json({ message: 'Envío no encontrado.' });
        }
        return res.status(200).json({ message: 'Envío eliminado exitosamente.' });
    } catch (error) {
        console.error('Error en deleteEntrega:', error);
        next(boom.internal(error.message));
    }
};
