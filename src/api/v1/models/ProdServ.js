import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    title: { type: String, required: true },
    director: { type: String, required: true },
    year: { type: Number, required: true },
    genre: { type: String, required: true },
});

export default mongoose.model('Movie', movieSchema, 'movies');
