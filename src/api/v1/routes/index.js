import { Router } from 'express';
import config from '../../../config/config';
// Importar rutas
import entregaRoutes from './prodServ.routes'; // Asegúrate de que el nombre del archivo importado sea correcto

const routerAPI = (app) => {
  const router = Router();
  const api = config.API_URL; // Asegúrate de que config tenga una propiedad API_URL

  app.use(api, router);
  // Rutas
  router.use('/entregas', entregaRoutes); // Cambiado de '/prod-serv' a '/entregas' para reflejar el enfoque en envíos

  // Retorna el router
  return router;
};

module.exports = routerAPI;
