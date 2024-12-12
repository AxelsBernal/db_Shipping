import Movie from '../models/ProdServ';

class MovieService {
    async listAll() {
        return await Movie.find({});
    }

    async findById(movieId) {
        return await Movie.findOne({ id: movieId });
    }

    async create(data) {
        const movie = new Movie(data);
        return await movie.save();
    }

    async update(movieId, data) {
        return await Movie.findOneAndUpdate({ id: movieId }, data, { new: true });
    }

    async delete(movieId) {
        return await Movie.findOneAndDelete({ id: movieId });
    }
}

export default new MovieService();
