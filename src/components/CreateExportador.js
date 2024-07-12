import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateExportador = ({ onCreate }) => {
    const navigate = useNavigate();

    const [exportadorData, setExportadorData] = useState({
        status: 'A', // Valor por defecto
        company: {
            identificationType: '',
            identification: '',
            name: ''
        },
        version: 0,
        acceptance: '',
        expiration: '',
        provinceCode: 0,
        cantonCode: 0,
        districtCode: 0,
        email: '',
        sector: ''
    });

    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name.startsWith('company.')) {
            const companyField = name.split('.')[1];
            setExportadorData(prevState => ({
                ...prevState,
                company: {
                    ...prevState.company,
                    [companyField]: value
                }
            }));
        } else {
            setExportadorData({ ...exportadorData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const requestData = {
                ...exportadorData,
                acceptance: new Date(exportadorData.acceptance).toISOString().substring(0, 10),
                expiration: new Date(exportadorData.expiration).toISOString().substring(0, 10)
            };

            const response = await axios.post('http://localhost:8080/api/exportadores', requestData);
            console.log('Exportador creado:', response.data);

            setSuccessMessage('¡Exportador creado exitosamente!');
            setTimeout(() => {
                setSuccessMessage('');
                navigate('/'); // Redirige a la página principal
            }, 4000); // Redirigir después de 4 segundos

            if (onCreate && typeof onCreate === 'function') {
                onCreate();
            }
        } catch (error) {
            console.error('Error al crear exportador:', error);
        }
    };

    return (
        <div className="create-exportador">
            <h2>Crear Exportador</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="status">Estado:</label>
                    <select id="status" name="status" value={exportadorData.status} onChange={handleChange}>
                        <option value="A">Activo</option>
                        <option value="I">Inactivo</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="company.identificationType">Tipo de Identificación de la Empresa:</label>
                    <input type="text" id="company.identificationType" name="company.identificationType" value={exportadorData.company.identificationType} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="company.identification">Identificación de la Empresa:</label>
                    <input type="text" id="company.identification" name="company.identification" value={exportadorData.company.identification} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="company.name">Nombre de la Empresa:</label>
                    <input type="text" id="company.name" name="company.name" value={exportadorData.company.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="acceptance">Fecha de Aceptación:</label>
                    <input type="date" id="acceptance" name="acceptance" value={exportadorData.acceptance} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="expiration">Fecha de Expiración:</label>
                    <input type="date" id="expiration" name="expiration" value={exportadorData.expiration} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="provinceCode">Código de Provincia:</label>
                    <input type="text" id="provinceCode" name="provinceCode" value={exportadorData.provinceCode} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="cantonCode">Código de Cantón:</label>
                    <input type="text" id="cantonCode" name="cantonCode" value={exportadorData.cantonCode} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="districtCode">Código de Distrito:</label>
                    <input type="text" id="districtCode" name="districtCode" value={exportadorData.districtCode} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={exportadorData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="sector">Sector:</label>
                    <input type="text" id="sector" name="sector" value={exportadorData.sector} onChange={handleChange} required />
                </div>
                <button type="submit">Crear Exportador</button>
            </form>
            {successMessage && <p>{successMessage}</p>}
        </div>
    );
};

export default CreateExportador;
