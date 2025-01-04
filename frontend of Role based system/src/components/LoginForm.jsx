import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { userLogin } from '../services/UserService'; 

import { extractRoleFromToken } from './extractRoleFromToken';


function LoginForm() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm(formData);
        if (Object.keys(validationErrors).length === 0) {
            userLogin(formData)
                .then((response) => {
                    const token = response.data.token;
                    console.log(token); 
                    const role = extractRoleFromToken(token); 
                    if (role) {
                        localStorage.setItem('token', token);
                        redirectToDashboard(role);
                    } else {
                        setErrorMessage('Role not found in token.');
                    }
                })
                .catch((error) => {
                    console.error('Login failed', error);
                    setErrorMessage('Invalid email or password. Please try again.');
                });
        } else {
            setErrors(validationErrors);
        }
    };

    const validateForm = (data) => {
        const errors = {};
        if (!data.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = 'Email is invalid';
        }
        if (!data.password) {
            errors.password = 'Password is required';
        } else if (data.password.length < 8) {
            errors.password = 'Password must be at least 8 characters';
        }
        return errors;
    };

    const redirectToDashboard = (role) => {
        switch (role) {
            case 'Client':
                navigate('/client-dashboard');
                break;
            case 'Super-Admin':
                navigate('/admin-dashboard');
                break;
            case 'Partner':
                navigate('/partner-dashboard');
                break;
            default:
                setErrorMessage('Invalid role. Please contact support.');
        }
    };

    return (
        <div className="container" style={{ maxHeight: '1024px' }}>
            <div className="row" style={{ width: "640px", alignItems: 'center', maxHeight: "100%" }}>
                <div className="col-md-7" style={{ alignItems: 'center', maxHeight: "100%" }}>
                    <h2 className="text-center mb-4">Log in</h2>
                    <form onSubmit={handleSubmit}>
                        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                            />
                            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                            />
                            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Sign In</button>
                    </form>
                </div>
                <div className="col-md-5 d-flex align-items-center justify-content-center" style={{ maxWidth: '800px' }}>
                    <img
                        src="images/company.jfif"
                        alt="company"
                        className="img-fluid rounded"
                        style={{ maxWidth: '200px', maxHeight: '1024px' }}
                    />
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
