import React, { useState } from 'react';
import axios from 'axios';

const ConsultarExportador = () => {
    const [exportadorId, setExportadorId] = useState('');
    const [exportadorData, setExportadorData] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setExportadorId(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:8080/api/exportadores/${exportadorId}`);
            console.log('Exportador consultado:', response.data);
            setExportadorData(response.data);
            setErrorMessage('');
        } catch (error) {
            console.error('Error al consultar exportador:', error);
            setErrorMessage('Exportador no encontrado');
            setExportadorData(null);
        }
    };

    return (
        <div className="consultar-exportador">
            <h2>Consultar Exportador por ID</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exportadorId">ID del Exportador:</label>
                    <p>*Consulta por Id de exportador, a pesar de no ser buena practica en la vida real.</p>
                    <input type="text" id="exportadorId" name="exportadorId" value={exportadorId} onChange={handleChange} required />
                </div>
                <button type="submit">Consultar</button>
            </form>
            {exportadorData && (
                <div className="exportador-info">
                    <h3>Datos del Exportador</h3>
                    <p>ID: {exportadorData.id}</p>
                    <p>Estado: {exportadorData.status === 'A' ? 'Activo' : 'Inactivo'}</p>
                    <p>Nombre de la Empresa: {exportadorData.company.name}</p>
                </div>
            )}
            {errorMessage && <p>{errorMessage}</p>}
        </div>
    );
};

export default ConsultarExportador;
