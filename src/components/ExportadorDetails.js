import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ExportadorDetails = ({ match }) => {
    const [exportador, setExportador] = useState(null);

    useEffect(() => {
        cargarExportador();
    }, []);

    const cargarExportador = async () => {
        const exportadorId = match.params.id;
        try {
            const response = await axios.get(`http://localhost:8080/api/exportadores/${exportadorId}`);
            setExportador(response.data);
        } catch (error) {
            console.error('Error al cargar exportador:', error);
        }
    };

    if (!exportador) {
        return <div>Cargando exportador...</div>;
    }

    return (
        <div>
            <h2>Detalles del Exportador</h2>
            <p>ID: {exportador.id}</p>
            <p>Nombre: {exportador.nombre}</p>
            <p>Activo: {exportador.activo ? 'Sí' : 'No'}</p>
        </div>
    );
};

export default ExportadorDetails;
