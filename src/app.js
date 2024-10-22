import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
//FIC: imports Swagger
//FIC: imports Routes
//FIC: imports Middlewares
//FIC: Config para variables de entorno
import config from './config/config'
//FIC: Declaramos la constante app igualandola a express
const app = express();

//FIC: Establece la conexion a la BD
import { mongoose } from './config/database.config';
//FIC: Settings
app.set('port', config.PORT);
//FIC: Middlewares generales
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//FIC: Routes
// Import Routes
import routeAPI from './api/v1/routes/index';

const api = config.API_URL;
app.get(`${api}`, (req,res)=>{
    res.send(
        `<h1>RESTful running in root</h1> <p> Shipping: <b>${api}/api-docs</b> for more information.</p>`
    );
})
app.get('/DrFIC', (req,res)=>{
    res.send(
        `<h1>RESTful running in DrFIC</h1> <p> Shipping: <b>${api}/api-docs</b> for more information.</p>`
    );
})
// Routes
// Swagger Docs
// Middleware para el manejo de errores
// Routes

routeAPI(app);

// Export App
export default app;