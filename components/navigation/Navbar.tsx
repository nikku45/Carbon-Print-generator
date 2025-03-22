import Link from 'next/link';

const Navbar = () => {
    return (
        <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 20px', background: '#4CAF50', color: '#fff' }}>
            <div>
                <Link href="/" style={{ textDecoration: 'none', color: '#fff', fontWeight: 'bold' }}>CarbonCounter</Link>
            </div>
            <div style={{ display: 'flex', gap: '20px' }}>
            <Link href="/community" style={{ textDecoration: 'none', color: '#fff' }}><b>Explore communities</b></Link>
            <Link href="/Carbon-Footprint-Calculator" style={{ textDecoration: 'none', color: '#fff' }}><b>Carbon-Footprints</b></Link>
            <Link href="/login" style={{ textDecoration: 'none', color: '#fff' }}><b>Login</b></Link>
            <Link href="/signup" style={{ textDecoration: 'none', color: '#fff' }}><b>signup</b></Link>
               
            </div>
        </nav>
    );
};

export default Navbar;


// import Link from 'next/link';
// import { useState } from 'react';

// const Navbar = () => {
//     const [isDropdownOpen, setDropdownOpen] = useState(false);

//     const toggleDropdown = () => {
//         setDropdownOpen(!isDropdownOpen);
//     };

//     return (
//         <nav
//             style={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 alignItems: 'center',
//                 padding: '10px 20px',
//                 backgroundColor: '#4CAF50',
//                 color: '#fff',
//                 boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//                 position: 'sticky',
//                 top: '0',
//                 zIndex: '1000',
//             }}
//         >
//             {/* Logo Section */}
//             <div>
//                 <Link href="/" style={{ fontSize: '24px', fontWeight: 'bold', color: '#fff', textDecoration: 'none' }}>
//                     EnviroBlog
//                 </Link>
//             </div>

//             {/* Links Section */}
//             <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
//                 <Link href="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>
//                     Home
//                 </Link>
//                 <Link href="/about" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>
//                     About Us
//                 </Link>
//                 <Link href="/contact" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>
//                     Contact
//                 </Link>

//                 {/* Dropdown Section */}
//                 <div style={{ position: 'relative' }}>
//                     <button
//                         onClick={toggleDropdown}
//                         style={{
//                             backgroundColor: 'transparent',
//                             color: '#fff',
//                             border: 'none',
//                             cursor: 'pointer',
//                             fontWeight: 'bold',
//                             fontSize: '16px',
//                         }}
//                     >
//                         More ▼
//                     </button>
//                     {isDropdownOpen && (
//                         <div
//                             style={{
//                                 position: 'absolute',
//                                 top: '40px',
//                                 right: '0',
//                                 backgroundColor: '#fff',
//                                 color: '#333',
//                                 boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//                                 borderRadius: '8px',
//                                 overflow: 'hidden',
//                             }}
//                         >
//                             <Link
//                                 href="/carbon-calculator"
//                                 style={{
//                                     display: 'block',
//                                     padding: '10px 20px',
//                                     textDecoration: 'none',
//                                     color: '#4CAF50',
//                                     fontWeight: 'bold',
//                                     borderBottom: '1px solid #f0f0f0',
//                                 }}
//                             >
//                                 Carbon Calculator
//                             </Link>
//                             <Link
//                                 href="/blog"
//                                 style={{
//                                     display: 'block',
//                                     padding: '10px 20px',
//                                     textDecoration: 'none',
//                                     color: '#4CAF50',
//                                     fontWeight: 'bold',
//                                     borderBottom: '1px solid #f0f0f0',
//                                 }}
//                             >
//                                 Blog
//                             </Link>
//                             <Link
//                                 href="/faq"
//                                 style={{
//                                     display: 'block',
//                                     padding: '10px 20px',
//                                     textDecoration: 'none',
//                                     color: '#4CAF50',
//                                     fontWeight: 'bold',
//                                 }}
//                             >
//                                 FAQ
//                             </Link>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;