import Link from 'next/link';

const Navbar = () => {
    return (
        <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 20px', background: '#4CAF50', color: '#fff' }}>
            <div>
                <Link href="/" style={{ textDecoration: 'none', color: '#fff', fontWeight: 'bold' }}>EnviroBlog</Link>
            </div>
            <div style={{ display: 'flex', gap: '20px' }}>
                <Link href="/login" style={{ textDecoration: 'none', color: '#fff' }}>Login</Link>
                <Link href="/signup" style={{ textDecoration: 'none', color: '#fff' }}>Sign Up</Link>
                <Link href="/other" style={{ textDecoration: 'none', color: '#fff' }}>Carbon Footprint calculator</Link>
            </div>
        </nav>
    );
};

export default Navbar;