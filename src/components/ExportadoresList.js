import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ToggleExportador from './ToggleExportador';

const ExportadoresList = () => {
    const [exportadores, setExportadores] = useState([]);

    useEffect(() => {
        fetchExportadores();
    }, []);

    const fetchExportadores = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/exportadores');
            setExportadores(response.data);
        } catch (error) {
            console.error('Error al obtener exportadores:', error);
        }
    };

    const handleUpdate = () => {
        fetchExportadores(); // Actualiza la lista de exportadores después de cada cambio
    };

    return (
        <div>
            <h2>Lista de Exportadores</h2>
            <ul>
                {exportadores.map(exportador => (
                    <li key={exportador.id}>
                        <p>Nombre: {exportador.company.name}</p>
                        <p>Estado: {exportador.status === 'A' ? 'Activo' : 'Inactivo'}</p>
                        <ToggleExportador
                            exportadorId={exportador.id}
                            status={exportador.status} // Cambiado de 'estado' a 'status'
                            onUpdate={handleUpdate}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExportadoresList;
