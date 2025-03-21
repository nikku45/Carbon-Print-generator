import Link from "next/link";

const InteractiveBox = () => {
   

  

    return (
        <div
           
            style={{
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
            <Link href="/other" style={{ color: '#fff', fontSize: '20px', fontWeight: 'bold', textAlign: 'center' }}>
                Calculate Your Carbon Footprint
            </Link>
            <p style={{ color: '#f9f9f9', fontSize: '14px', textAlign: 'center', marginTop: '10px' }}>
                Discover how your daily activities impact the environment and explore ways to reduce your carbon footprint.
            </p>
        </div>
    );
};

export default InteractiveBox;