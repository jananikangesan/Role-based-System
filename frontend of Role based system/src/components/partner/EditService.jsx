import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getServiceById, updateService } from "../../services/PartnerService";

function EditService() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    serviceName: "",
    description: "",
    price: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchServiceDetails();
  }, []);

  const fetchServiceDetails = () => {
    getServiceById(id)
      .then((response) => {
        setFormData(response.data);
      })
      .catch(() => setError("Failed to fetch service details"));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updateService(id, formData).then((response) => {
        console.log("Service updated:", response.data);
        setSuccess("Service updated successfully");
        setError("");
        navigate("/partner-dashboard");
      })
      .catch((error) =>{ setError("Failed to update service")}
    );
    
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Edit Service</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label>Service Name</label>
          <input
            type="text"
            className="form-control"
            name="serviceName"
            value={formData.serviceName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-3">
          <label>Description</label>
          <textarea
            className="form-control"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-3">
          <label>Price</label>
          <input
            type="number"
            className="form-control"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Update Service</button>
      </form>
    </div>
  );
}

export default EditService;
