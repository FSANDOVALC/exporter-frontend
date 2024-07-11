import React from 'react';
import axios from 'axios';

const ToggleExportador = ({ exportadorId, activo, onUpdate }) => {
    // Función para activar o desactivar el exportador
    const toggleEstado = async () => {
        try {
            const response = await axios.patch(`http://localhost:8080/api/exportadores/${exportadorId}`, {
                activo: !activo
            });
            console.log('Exportador actualizado:', response.data);
            onUpdate();
        } catch (error) {
            console.error('Error al actualizar exportador:', error);
        }
    };

    return (
        <button onClick={toggleEstado}>{activo ? 'Desactivar' : 'Activar'}</button>
    );
};

export default ToggleExportador;

