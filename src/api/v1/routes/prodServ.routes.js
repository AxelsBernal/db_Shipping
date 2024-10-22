// Shipping
import { Router } from 'express';
import * as entregaController from '../controllers/prodserv.controller';
const router = Router();

// Ruta para obtener la lista de todos los envíos
router.get('/', entregaController.getAllEntregas);

// Ruta para obtener un envío específico por ID
router.get('/:id', entregaController.getEntregaById);

// Ruta para crear un nuevo envío
router.post('/', entregaController.createEntrega);

// Ruta para actualizar un envío existente
router.put('/:id', entregaController.updateEntrega);

// Ruta para eliminar un envío
router.delete('/:id', entregaController.deleteEntrega);

export default router;
