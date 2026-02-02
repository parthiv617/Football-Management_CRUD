import React from 'react';
import footballImage from '../assets/wp8255680.webp';

function LandingPage() {
    return (
        <div 
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${footballImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                height: '100vh',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                overflow: 'hidden',
                margin: 0,
                padding: 0
            }}
        >
            <div style={{ 
                textAlign: 'center', 
                maxWidth: '90%', 
                padding: '20px',
                width: '100%',
                boxSizing: 'border-box'
            }}>
                <h1 style={{ 
                    fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
                    fontWeight: 'bold', 
                    marginBottom: '20px',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
                    lineHeight: '1.2'
                }}>
                    Player Management Pro
                </h1>
                <p style={{ 
                    fontSize: 'clamp(1rem, 3vw, 1.5rem)', 
                    marginBottom: '30px',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.7)',
                    lineHeight: '1.5'
                }}>
                    Manage your team players with ease - Add, Edit, Delete, and View player information
                </p>
                <a 
                    href="/players" 
                    style={{ 
                        padding: 'clamp(12px, 3vw, 15px) clamp(25px, 6vw, 40px)', 
                        backgroundColor: '#007bff', 
                        color: 'white', 
                        textDecoration: 'none',
                        borderRadius: '50px',
                        fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                        fontWeight: 'bold',
                        boxShadow: '0 4px 15px rgba(0,123,255,0.3)',
                        transition: 'all 0.3s ease',
                        display: 'inline-block'
                    }}
                    onMouseOver={(e) => {
                        e.target.style.backgroundColor = '#0056b3';
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 6px 20px rgba(0,123,255,0.4)';
                    }}
                    onMouseOut={(e) => {
                        e.target.style.backgroundColor = '#007bff';
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 4px 15px rgba(0,123,255,0.3)';
                    }}
                >
                    Let's Get Started
                </a>
            </div>
        </div>
    );
}

export default LandingPage;