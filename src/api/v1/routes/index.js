import { Router } from 'express';
import config from '../../../config/config';
import movieRoutes from './prodServ.routes'; // Rutas específicas para películas

const routerAPI = (app) => {
    const router = Router();
    const api = config.API_URL; // '/api/v1'

    app.use(api, router);

    // Rutas
    router.use('/peliculas', movieRoutes); // Se asocia directamente al prefijo '/api/v1/peliculas'

    return router;
};

module.exports = routerAPI;
