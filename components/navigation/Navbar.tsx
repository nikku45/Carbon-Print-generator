import React from 'react';

const Navbar = () => {
    return (
        <nav
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 20px',
                backgroundColor: '#4CAF50',
                color: '#fff',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                position: 'sticky',
                top: '0',
                zIndex: '1000',
            }}
        >
            {/* Logo Section */}
            <div>
                <a href="/" style={{ fontSize: '24px', fontWeight: 'bold', color: '#fff', textDecoration: 'none' }}>
                    CarbonCounter
                </a>
            </div>

            {/* Links Section */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <a href="/community" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>
                    Explore Communities
                </a>
                <a href="/Carbon-Footprint-Calculator" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>
                    Carbon Footprints
                </a>
             
                <a href="/login" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>
                    Login
                </a>
                <a href="/signup" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>
                    Signup
                </a>
            </div>
        </nav>
    );
};

export default Navbar;