const Signup = () => {
    return (
        <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#f0f4f8' }}>
            <div style={{ width: '400px', padding: '30px', background: '#fff', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Sign Up</h2>
                <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <input
                        type="text"
                        placeholder="Full Name"
                        style={{
                            padding: '10px',
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                            fontSize: '16px',
                        }}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        style={{
                            padding: '10px',
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                            fontSize: '16px',
                        }}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        style={{
                            padding: '10px',
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                            fontSize: '16px',
                        }}
                        required
                    />
                    <button
                        type="submit"
                        style={{
                            padding: '10px',
                            background: '#4CAF50',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '5px',
                            fontSize: '16px',
                            cursor: 'pointer',
                        }}
                    >
                        Sign Up
                    </button>
                </form>
                <p style={{ textAlign: 'center', marginTop: '15px' }}>
                    Already have an account? <a href="/login" style={{ color: '#4CAF50', textDecoration: 'none' }}>Login</a>
                </p>
            </div>
        </main>
    );
};

export default Signup;