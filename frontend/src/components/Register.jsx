// frontend/src/components/Register.js
import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('buyer');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/users/register', {
                username,
                email,
                role,
                password
            });
            alert(response.data.message);
        } catch (error) {
            alert(error.response.data.message);
        }
    };

    return (
        <div 
    className="min-vh-100 d-flex align-items-center justify-content-center" 
    style={{
        background: '#152f04ff',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh'
    }}
>
    <div className="card shadow-lg border-0" style={{maxWidth: '450px', width:'100%',height:'750px', marginTop: '10px',background:'linear-gradient(135deg, #152f04ff 0%, #3e5b3eff 50%, #0a3b24ff 100%)',borderRadius:'25px'}}>
        <div className="card-body ">
            <div className="text-center ">
                <div className="d-inline-block p-3 rounded-circle " style={{backgroundColor: '#030b0320',top:0}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#5A7C5A" className="bi bi-person-plus" viewBox="0 0 16 16">
                        <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                        <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5"/>
                    </svg>
                </div>
                <h2 className="fw-bold mb-2" style={{color: '#103121ff'}}>Create Account</h2>
                <p style={{color:'#e2e7e5ff'}}>Register to get started</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label fw-semibold" style={{color: '#172517ff'}}>Username</label>
                    <input 
                        type="text" 
                        className="form-control form-control-lg border-2" 
                        placeholder="Enter your username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required 
                        style={{borderRadius:'30px'}}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label fw-semibold" style={{color: '#172517ff'}}>Email Address</label>
                    <input 
                        type="email" 
                        className="form-control form-control-lg border-2" 
                        placeholder="Enter your email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                        style={{borderRadius:'30px'}}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label fw-semibold" style={{color: '#172517ff'}}>Password</label>
                    <input 
                        type="password" 
                        className="form-control form-control-lg border-2" 
                        placeholder="Enter your password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                        style={{borderRadius:'30px'}}
                    />
                </div>
                <div className="mb-4">
                    <label className="form-label fw-semibold" style={{color: '#172517ff'}}>Role</label>
                    <select 
                        className="form-select form-select-lg border-2" 
                        value={role} 
                        onChange={(e) => setRole(e.target.value)}
                        style={{borderRadius:'30px'}}
                    >
                        <option value="buyer">Buyer</option>
                        <option value="owner">Seller</option>
                        <option value="government">Government</option>
                    </select>
                </div>
                
                <button 
                    type="submit" 
                    className="btn btn-lg w-100 fw-semibold shadow-sm text-white"
                    style={{backgroundColor: '#083208ff', border: 'none'}}
                >
                    Register
                </button>
            </form>
            <div className="text-center mt-4">
                <p style={{color:'#e2e7e5ff'}}>
                    Already have an account? <a href="#" className="fw-semibold text-decoration-none" style={{color: '#5A7C5A'}}>Login</a>
                </p>
            </div>
        </div>
    </div>
</div>
    );
};

export default Register;
