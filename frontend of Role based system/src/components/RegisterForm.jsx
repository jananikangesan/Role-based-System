import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { userSignUp } from '../services/UserService';

function RegisterForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [role, setRole] = useState('Partner'); 
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
    };

    const handleRoleSelect = (selectedRole) => {
        setRole(selectedRole);
        setErrors({ ...errors, role: '' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm(formData, role);
        if (Object.keys(validationErrors).length === 0) {
            const formDataWithRole = { ...formData, role };

            console.log(formDataWithRole);

            userSignUp(formDataWithRole)
                .then((response) => {
                    console.log('User registered successfully', response.data);
                    setSuccessMessage('Registration successful!');
                    setFormData({ name: '', email: '', password: '', confirmPassword: '' });
                    setRole('Partner');
                })
                .catch((error) => {
                    console.error('Error during registration', error);
                    setSuccessMessage('Registration failed. Please try again.');
                });
        } else {
            setErrors(validationErrors);
        }
    };

    const validateForm = (data, selectedRole) => {
        const errors = {};
        if (!selectedRole) {
            errors.role = 'Role is required';
        }
        if (!data.name.trim()) {
            errors.name = 'Name is required';
        }
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
        if (data.password !== data.confirmPassword) {
            errors.confirmPassword = 'Passwords do not match';
        }
        return errors;
    };

    return (
        <div className="container" style={{ maxHeight: '1024px' }}>
            <div className="row" style={{ width: "640px", alignItems: 'center', maxHeight: "100%" }}>
                <div className="col-md-7" style={{ alignItems: 'center', maxHeight: "100%" }}>
                    <h2 className="text-center mb-4">Create your account</h2>
                    <div className="mb-3 d-flex justify-content-center">
                        <button
                            type="button"
                            className={`btn btn-outline-primary me-2 ${role === 'Partner' ? 'active' : ''}`}
                            onClick={() => handleRoleSelect('Partner')}>
                            Register as Partner
                        </button>
                        <button
                            type="button"
                            className={`btn btn-outline-primary ${role === 'Client' ? 'active' : ''}`}
                            onClick={() => handleRoleSelect('Client')}>
                            Register as Client
                        </button>
                    </div>
                    {errors.role && <div className="text-danger text-center mb-3">{errors.role}</div>}
                    <form onSubmit={handleSubmit}>
                        {successMessage && <div className="alert alert-success">{successMessage}</div>}
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">{role === 'Partner' ? "Full name" : "Organization Reference"}</label>
                            <input
                                type="text"
                                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                            />
                            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                        </div>
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
                        <div className="mb-3">
                            <label htmlFor="confirmPassword" className="form-label">Repeat Password</label>
                            <input
                                type="password"
                                className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                                id="confirmPassword"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="Repeat your password"
                            />
                            {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Register</button>
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

export default RegisterForm;
