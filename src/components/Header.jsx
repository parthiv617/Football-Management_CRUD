import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="text-white py-3 mb-4" style={{ backgroundColor: "#000000ff" }}>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#0f0707ff" }}>
                    <div className="container-fluid">
                        <Link className="navbar-brand fw-bold" to="/">
                            <i className="bi bi-people-fill me-2"></i>
                            Player Management
                        </Link>
                        
                        <button 
                            className="navbar-toggler" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/" aria-current="page">
                                        <i className="bi bi-house-door me-1"></i>
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/players?view=table">
                                        <i className="bi bi-people me-1"></i>
                                        Players
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/players?view=add">
                                        <i className="bi bi-person-plus me-1"></i>
                                        Add Player
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
