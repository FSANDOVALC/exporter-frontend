import React from 'react';
import axios from 'axios';

const ToggleExportador = ({ exportadorId, status, onUpdate }) => {
    const toggleEstado = async () => {
        try {
            // Determinar el nuevo estado
            const nuevoEstado = status === 'A' ? 'I' : 'A';

            const response = await axios.patch(
                `http://localhost:8080/api/exportadores/${exportadorId}/estado`,
                nuevoEstado,
                {
                    headers: {
                        'Content-Type': 'text/plain'
                    }
                }
            );

            console.log('Exportador actualizado:', response.data);
            onUpdate(); // Actualizar la interfaz de usuario después de la actualización
        } catch (error) {
            console.error('Error al actualizar exportador:', error);
        }
    };

    return (
        <button onClick={toggleEstado}>{status === 'A' ? 'Desactivar' : 'Activar'}</button>
    );
};

export default ToggleExportador;
