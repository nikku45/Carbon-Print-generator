const Login = () => {
    return (
        <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#f0f4f8' }}>
            <div style={{ width: '400px', padding: '30px', background: '#fff', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Login</h2>
                <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
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
                        Login
                    </button>
                </form>
                <p style={{ textAlign: 'center', marginTop: '15px' }}>
                    Don't have an account? <a href="/signup" style={{ color: '#4CAF50', textDecoration: 'none' }}>Sign Up</a>
                </p>
            </div>
        </main>
    );
};

export default Login;
// import * as React from 'react';
// import { AppProvider } from '@toolpad/core/AppProvider';
// import { SignInPage } from '@toolpad/core/SignInPage';
// import { useTheme } from '@mui/material/styles';

// const providers = [{ id: 'credentials', name: 'Credentials' }];
// // preview-start
// const BRANDING = {
//   logo: (
//     <img
//       src="https://mui.com/static/logo.svg"
//       alt="MUI logo"
//       style={{ height: 24 }}
//     />
//   ),
//   title: 'MUI',
// };
// // preview-end

// const signIn = async (provider) => {
//   const promise = new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(`Sign in with ${provider.id}`);
//       resolve();
//     }, 500);
//   });
//   return promise;
// };

// export default function BrandingSignInPage() {
//   const theme = useTheme();
//   return (
//     // preview-start
//     <AppProvider branding={BRANDING} theme={theme}>
//       <SignInPage
//         signIn={signIn}
//         providers={providers}
//         slotProps={{ emailField: { autoFocus: false }, form: { noValidate: true } }}
//       />
//     </AppProvider>
//     // preview-end
//   );
// }
