import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ExportadoresList from './components/ExportadoresList';
import ExportadorDetails from './components/ExportadorDetails';
import CreateExportador from './components/CreateExportador';
import ConsultarExportador from './components/ConsultarExportador';

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <h1>App de Exportadores</h1>
                    <nav>
                        <Link to="/" className="App-link">
                            Lista de Exportadores
                        </Link>
                        <br />
                        <Link to="/crear-exportador" className="App-link">
                            Crear Exportador
                        </Link>
                        <br />
                        <Link to="/consultar-exportador" className="App-link">
                            Consultar Exportador
                        </Link>
                    </nav>
                </header>
                <Routes>
                    <Route path="/" element={<ExportadoresList />} />
                    <Route path="/exportador/:id" element={<ExportadorDetails />} />
                    <Route path="/crear-exportador" element={<CreateExportador />} />
                    <Route path="/consultar-exportador" element={<ConsultarExportador />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
