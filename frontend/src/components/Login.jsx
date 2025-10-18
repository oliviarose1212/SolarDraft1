// frontend/src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/users/login', {
                email,
                password
            });
            alert(response.data.message);
        } catch (error) {
            alert(error.response.data.message);
        }
    };

    return (
        <div className="min-vh-100 d-flex align-items-center justify-content-center" style={{background: '#152f04ff',position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh'}}>
    <div className="card shadow-lg border-0" style={{maxWidth: '450px', width: '100%', margin: '20px', background:'linear-gradient(135deg, #152f04ff 0%, #3e5b3eff 50%, #0a3b24ff 100%)', borderRadius:'25px'}}>
        <div className="card-body p-5">
            <div className="text-center mb-4">
                <div className="d-inline-block p-3 rounded-circle mb-3" style={{backgroundColor: '#030b0320'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#5A7C5A" className="bi bi-person-lock" viewBox="0 0 16 16">
                        <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 5.996V14H3s-1 0-1-1 1-4 6-4q.845.002 1.544.107a4.5 4.5 0 0 0-.803.918A11 11 0 0 0 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664zM9 13a1 1 0 0 1 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1"/>
                    </svg>
                </div>
                <h2 className="fw-bold mb-2" style={{color: '#103121ff'}}>LOGIN</h2>
                <p  style={{color:'#e2e7e5ff'}}>Please login to your account</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="form-label fw-semibold" style={{color: '#172517ff'}}>Email Address</label>
                    <input 
                        type="email" 
                        className="form-control form-control-lg border-2" 
                        placeholder="Enter your email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                        style={{ borderRadius:'30px'}}
                    />
                </div>
                <div className="mb-4">
                    <label className="form-label fw-semibold" style={{color: '#172517ff'}}>Password</label>
                    <input 
                        type="password" 
                        className="form-control form-control-lg border-2" 
                        placeholder="Enter your password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                        style={{ borderRadius:'30px'}}
                    />
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="rememberMe" />
                        <label style={{color:'#e2e7e5ff'}} htmlFor="rememberMe">
                            Remember me
                        </label>
                    </div>
                    <a href="#" className="text-decoration-none" style={{color: '#809580ff'}}>Forgot password?</a>
                </div>
                <button 
                    type="submit" 
                    className="btn btn-lg w-100 fw-semibold shadow-sm text-white"
                    style={{backgroundColor: '#083208ff', border: 'none'}}
                >
                    Login
                </button>
            </form>
            <div className="text-center mt-4">
                <p style={{color:'#e2e7e5ff'}}>
                    Don't have an account? <a href="#" className="fw-semibold text-decoration-none" style={{color: '#5A7C5A'}}>Sign up</a>
                </p>
            </div>
        </div>
    </div>
</div>
    );
};

export default Login;
