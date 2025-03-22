import React from 'react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#333', color: '#fff', padding: '1rem', textAlign: 'center' }}>
            <p>&copy; {new Date().getFullYear()} Carbon Print Generator. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
