import React, { useState, useEffect } from 'react';
import { extractRoleFromToken } from '../extractRoleFromToken';
import { registerCompany } from '../../services/PartnerService';

function CompanyRegistrationForm() {
  const [formData, setFormData] = useState({
    companyName: '',
    address: '',
    contactNumber: '',
    email: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const email = extractRoleFromToken(token).sub; // Extract the email from the token
        setFormData((prevData) => ({ ...prevData, email }));
      } catch (error) {
        console.error('Error extracting email from token:', error);
      }
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required.';
    }
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required.';
    }
    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = 'Contact number is required.';
    } else if (!/^\d{10}$/.test(formData.contactNumber)) {
      newErrors.contactNumber = 'Contact number must be a 10-digit number.';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
        console.log(formData)
       
        registerCompany(formData)
        .then((response) => {
            console.log('Form Submitted:', response.data);
            setSuccessMessage('Company registered successfully!');
            setFormData({ companyName: '', address: '', contactNumber: '', email: formData.email });
        })
        .catch((error) => {
            if (error.response && error.response.status === 403) {
            setSuccessMessage('You are not authorized to register the company.');
            } else {
            console.error('Error during Company registration', error);
            setSuccessMessage('Company Registration failed. Please try again.');
            }
        });

      
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card p-4" style={{ width: '400px' }}>
        <h2 className="text-center mb-4">Register a Company</h2>
        {successMessage && <div className="alert alert-success">{successMessage}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="companyName" className="form-label">Company Name</label>
            <input
              type="text"
              className={`form-control ${errors.companyName ? 'is-invalid' : ''}`}
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Enter company name"
            />
            {errors.companyName && <div className="invalid-feedback">{errors.companyName}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">Address</label>
            <textarea
              className={`form-control ${errors.address ? 'is-invalid' : ''}`}
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows="3"
              placeholder="Enter company address"
            ></textarea>
            {errors.address && <div className="invalid-feedback">{errors.address}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="contactNumber" className="form-label">Contact Number</label>
            <input
              type="text"
              className={`form-control ${errors.contactNumber ? 'is-invalid' : ''}`}
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              placeholder="Enter contact number"
            />
            {errors.contactNumber && <div className="invalid-feedback">{errors.contactNumber}</div>}
          </div>
          
          <button type="submit" className="btn btn-primary w-100">Register Company</button>
        </form>
      </div>
    </div>
  );
}

export default CompanyRegistrationForm;
