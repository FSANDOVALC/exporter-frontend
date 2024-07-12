import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ExportadoresList from './components/ExportadoresList';
import ExportadorDetails from './components/ExportadorDetails';
import CreateExportador from './components/CreateExportador';

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
                    </nav>
                </header>
                <Routes>
                    <Route path="/" element={<ExportadoresList />} />
                    <Route path="/exportador/:id" element={<ExportadorDetails />} />
                    <Route path="/crear-exportador" element={<CreateExportador />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
