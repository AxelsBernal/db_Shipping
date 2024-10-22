import * as mongoose from 'mongoose';

const entregaSchema = new mongoose.Schema({
    IdInstitutoOK: { type: String, required: true },
    IdNegocioOK: { type: String, required: true },
    IdEntregaOK: { type: String, required: true },
    IdEntregaBK: { type: String },
    IdOrdenOK: { type: String },
    info_ad: [
        {
            IdEtiquetaOK: { type: String },
            IdEtiqueta: { type: String, required: true },
            Etiqueta: { type: String, required: true },
            Valor: { type: String },
            IdTipoSeccionOK: { type: String },
            Secuencia: { type: Number },
            detail_row: {
                Activo: { type: String, default: 'S' },
                Borrado: { type: String, default: 'N' },
                detail_row_reg: [
                    {
                        FechaReg: { type: Date, default: Date.now },
                        UsuarioReg: { type: String }
                    }
                ],
                _id: false
            },
            _id: false
        }
    ],
    envios: [
        {
            IdDomicilioOK: { type: String },
            IdPaqueteriaOK: { type: String },
            IdTipoMetodoEnvio: { type: String },
            CostoEnvio: { type: Number },
            info_ad: [
                {
                    IdEtiquetaOK: { type: String },
                    IdEtiqueta: { type: String, required: true },
                    Etiqueta: { type: String, required: true },
                    Valor: { type: String },
                    IdTipoSeccionOK: { type: String },
                    Secuencia: { type: Number },
                    detail_row: {
                        Activo: { type: String, default: 'S' },
                        Borrado: { type: String, default: 'N' },
                        detail_row_reg: [
                            {
                                FechaReg: { type: Date, default: Date.now },
                                UsuarioReg: { type: String }
                            }
                        ],
                        _id: false
                    },
                    _id: false
                }
            ],
            productos: [
                {
                    IdProdServOK: { type: String },
                    IdPresentaOK: { type: String },
                    DesProdServ: { type: String },
                    DesPresenta: { type: String },
                    CantidadPed: { type: Number },
                    CantidadEnt: { type: Number }
                }
            ],
            estatus: [
                {
                    IdTipoEstatusOK: { type: String },
                    Actual: { type: String },
                    Observacion: { type: String },
                    detail_row: {
                        Activo: { type: String, default: 'S' },
                        Borrado: { type: String, default: 'N' },
                        detail_row_reg: [
                            {
                                FechaReg: { type: Date, default: Date.now },
                                UsuarioReg: { type: String }
                            }
                        ],
                        _id: false
                    },
                    _id: false
                }
            ],
            rastreos: {
                NumeroGuia: { type: String },
                IdRepartidorOK: { type: String },
                NombreRepartidor: { type: String },
                Alias: { type: String },
                seguimiento: [
                    {
                        Ubicacion: { type: String },
                        DesUbicacion: { type: String },
                        Referencias: { type: String },
                        Observacion: { type: String },
                        FechaReg: { type: Date },
                        UsuarioReg: { type: String }
                    }
                ],
                _id: false
            }
        }
    ],
    detail_row: {
        Activo: { type: String, default: 'S' },
        Borrado: { type: String, default: 'N' },
        detail_row_reg: [
            {
                FechaReg: { type: Date, default: Date.now },
                UsuarioReg: { type: String }
            }
        ]
    }
});

export default mongoose.model('Entrega', entregaSchema, 'entregas');
