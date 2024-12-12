import movieService from '../services/prodServ.service';

export const getAllMovies = async (req, res, next) => {
    try {
        const movies = await movieService.listAll();
        res.status(200).json(movies);
    } catch (error) {
        console.error('Error en getAllMovies:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

export const getMovieById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const movie = await movieService.findById(Number(id));
        if (!movie) {
            return res.status(404).json({ message: 'Película no encontrada' });
        }
        res.status(200).json(movie);
    } catch (error) {
        console.error('Error en getMovieById:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

export const createMovie = async (req, res, next) => {
    try {
        const movie = await movieService.create(req.body);
        res.status(201).json(movie);
    } catch (error) {
        console.error('Error en createMovie:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

export const updateMovie = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedMovie = await movieService.update(Number(id), req.body);
        if (!updatedMovie) {
            return res.status(404).json({ message: 'Película no encontrada' });
        }
        res.status(200).json(updatedMovie);
    } catch (error) {
        console.error('Error en updateMovie:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

export const deleteMovie = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedMovie = await movieService.delete(Number(id));
        if (!deletedMovie) {
            return res.status(404).json({ message: 'Película no encontrada' });
        }
        res.status(200).json({ message: 'Película eliminada exitosamente' });
    } catch (error) {
        console.error('Error en deleteMovie:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};
