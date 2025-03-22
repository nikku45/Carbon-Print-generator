import Link from "next/link";

const InteractiveBox = () => {
   

  

    return (
        <>
          
           <div
          
           style={{
                width: '60%',
                height: '60%',
                margin: 'auto',
               marginTop: '2rem',
               marginBottom: '2rem',
               cursor: 'pointer',
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center',
               justifyContent: 'center',
               background: 'linear-gradient(135deg, #4CAF50, #8BC34A)',
               padding: '20px',
               borderRadius: '10px',
               boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
               transition: 'transform 0.3s ease, box-shadow 0.3s ease',
           }}
           // onMouseOver={(e) => {
           //     e.currentTarget.style.transform = 'scale(1.05)';
           //     e.currentTarget.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.2)';
           // }}
           // onMouseOut={(e) => {
           //     e.currentTarget.style.transform = 'scale(1)';
           //     e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
           // }}
       >
           <Link href="/Carbon-Footprint-Calculator" style={{ color: '#fff', fontSize: '50px', fontWeight: 'bold', textAlign: 'center' }}>
               Calculate Your Carbon Footprint
           </Link>
           <a href="/Carbon-Footprint-Calculator" style={{textDecoration: 'none', marginTop: '1rem'}}>
           <img src="https://img.freepik.com/premium-photo/co2-emissions-carbon-reduction-global-warming-climate-change-environment-energy-saving-sustainable-development-earth-leaf-business-industry_36325-4504.jpg?ga=GA1.1.944648832.1742602162" style={{ width: '70%', marginTop: '20px',margin:"auto", borderRadius:'10px' }} />
           </a>
           <a href="/Carbon-Footprint-Calculator" style={{textDecoration: 'none',fontSize:'50px', marginTop: '1rem'}}>
           <h1>Visit Now!</h1>
        </a>        
           <p style={{ color: '#f9f9f9', fontSize: '14px', textAlign: 'center', marginTop: '10px' }}>
               Discover how your daily activities impact the environment and explore ways to reduce your carbon footprint.
           </p>
           
       </div>
        </>
       
    );
};

export default InteractiveBox;