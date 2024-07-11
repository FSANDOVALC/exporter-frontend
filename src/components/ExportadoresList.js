import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
            console.error('Error fetching exportadores:', error);
        }
    };

    return (
        <div>
            <h2>Lista de Exportadores</h2>
            <ul>
                {exportadores.map(exportador => (
                    <li key={exportador.id}>
                        <strong>Empresa:</strong> {exportador.company.name}<br />
                        <strong>Estado:</strong> {exportador.status}<br />
                        <strong>Email:</strong> {exportador.email}<br />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExportadoresList;
