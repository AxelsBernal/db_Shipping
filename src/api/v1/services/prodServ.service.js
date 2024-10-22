
import Entrega from '../models/ProdServ';

class EntregaService {
    async listAll() {
        try {
            return await Entrega.find({});
        } catch (error) {
            throw error;
        }
    }

    async findById(entregaId) {
        try {
            return await Entrega.findById(entregaId);
        } catch (error) {
            throw error;
        }
    }

    async create(entregaData) {
        try {
            const entrega = new Entrega(entregaData);
            return await entrega.save();
        } catch (error) {
            throw error;
        }
    }

    async update(entregaId, entregaData) {
        try {
            return await Entrega.findByIdAndUpdate(entregaId, entregaData, { new: true });
        } catch (error) {
            throw error;
        }
    }

    async delete(entregaId) {
        try {
            const result = await Entrega.findByIdAndDelete(entregaId);
            if (!result) {
                throw new Error('Entrega no encontrada');
            }
            return result;  // Retorna el documento eliminado o `null` si no se encontró.
        } catch (error) {
            throw error;
        }
    }
    
    
}

export default new EntregaService();
