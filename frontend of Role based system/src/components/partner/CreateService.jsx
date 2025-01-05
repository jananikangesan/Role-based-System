import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { extractRoleFromToken } from "../extractRoleFromToken";
import { createService } from "../../services/PartnerService";

function CreateService() {
  const [formData, setFormData] = useState({
    serviceName: "",
    description: "",
    price: "",
    partnerEmail: "",
  });
  const [error, setError] = useState({});
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const email = extractRoleFromToken(token).sub;
      setFormData((prevFormData) => ({
        ...prevFormData,
        partnerEmail: email,
      }));
    }
  }, []);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };


  const validateForm = () => {
    const newErrors = {};
    if (!formData.serviceName.trim()) {
      newErrors.serviceName = "Service name is required.";
    }
    if (!formData.description.trim()) {
      newErrors.description = "Description is required.";
    }
    if (!formData.price.trim() || Number(formData.price) <= 0) {
      newErrors.price = "Price must be a positive number.";
    }
    return newErrors;
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
      return;
    }

    createService(formData).then(() => {
        setSuccess("Service created successfully!");
        setError({});
        setFormData({
          serviceName: "",
          description: "",
          price: "",
          partnerEmail: formData.partnerEmail,
        });
      })
      .catch(() => {
        setError({ general: "Service creation failed. Please try again." });
      });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Create Service</h2>
      {error.general && <div className="alert alert-danger">{error.general}</div>}
      {success && <div className="alert alert-success">{success}</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label>Service Name</label>
          <input
            type="text"
            className={`form-control ${error.serviceName ? "is-invalid" : ""}`}
            name="serviceName"
            value={formData.serviceName}
            onChange={handleChange}
          />
          {error.serviceName && <div className="invalid-feedback">{error.serviceName}</div>}
        </div>

        <div className="form-group mb-3">
          <label>Description</label>
          <textarea
            className={`form-control ${error.description ? "is-invalid" : ""}`}
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
          {error.description && <div className="invalid-feedback">{error.description}</div>}
        </div>

        <div className="form-group mb-3">
          <label>Price</label>
          <input
            type="number"
            className={`form-control ${error.price ? "is-invalid" : ""}`}
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
          {error.price && <div className="invalid-feedback">{error.price}</div>}
        </div>

        <button type="submit" className="btn btn-primary me-2">Create Service</button>
        <button type="button"className="btn btn-secondary" onClick={() => navigate("/partner-dashboard")} >
          Back to Services
        </button>
      </form>
    </div>
  );
}

export default CreateService;
