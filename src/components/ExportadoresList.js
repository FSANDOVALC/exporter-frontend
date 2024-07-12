import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ToggleExportador from './ToggleExportador';
import '../ExportadoresList.css'; // Importa el archivo CSS para los estilos de grid

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
        <div className="exportadores-grid">
            <h2>Lista de Exportadores</h2>
            <div className="exportadores-container">
                {exportadores.map(exportador => (
                    <div key={exportador.id} className="exportador-card">
                        <p><strong>Nombre de la empresa:</strong> {exportador.company.name}</p>
                        <p><strong>Estado:</strong> {exportador.status === 'A' ? 'Activo' : 'Inactivo'}</p>
                        <ToggleExportador
                            exportadorId={exportador.id}
                            status={exportador.status}
                            onUpdate={handleUpdate}
                        />
                        <p><strong>ID de la empresa:</strong> {exportador.company.id}</p>
                        <p><strong>Tipo de identificación:</strong> {exportador.company.identificationType}</p>
                        <p><strong>Identificación:</strong> {exportador.company.identification}</p>
                        <p><strong>Versión:</strong> {exportador.version}</p>
                        <p><strong>Aceptación:</strong> {exportador.acceptance}</p>
                        <p><strong>Vencimiento:</strong> {exportador.expiration}</p>
                        <p><strong>Código de provincia:</strong> {exportador.provinceCode}</p>
                        <p><strong>Código de cantón:</strong> {exportador.cantonCode}</p>
                        <p><strong>Código de distrito:</strong> {exportador.districtCode}</p>
                        <p><strong>Email:</strong> {exportador.email}</p>
                        <p><strong>Sector:</strong> {exportador.sector}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExportadoresList;
