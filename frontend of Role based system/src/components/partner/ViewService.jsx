import React, { useEffect, useState } from "react";
import { getServices, deleteService } from "../../services/PartnerService";
import { useNavigate } from "react-router-dom";

function ViewService() {
  const [services, setServices] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  
  const navigate = useNavigate();

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = () => {
    getServices().then((response) => {
        setServices(response.data);
        setError("");
      }).catch(() => setError("Failed to fetch services"));
  };

  const handleDelete = (id) => {
   
    deleteService(id).then(() => {
        setSuccess("Service deleted successfully");
        setError("");
        fetchServices(); 
      })
      .catch(() => setError("Failed to delete service"));
  };

  const handleEdit = (id) => {
    navigate(`/edit-service/${id}`);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Services List</h2>
      <div className="d-flex justify-content-between mb-3">
        <button className="btn btn-primary" onClick={() => navigate("/create-service")}>Create Service</button>
      </div>
        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>No</th>
            <th>Service Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service, index) => (
            <tr key={service.id}>
              <td>{index + 1}</td>
              <td>{service.serviceName}</td>
              <td>{service.description}</td>
              <td>{service.price}</td>
              <td>
                <button className="btn btn-primary btn-sm me-2" onClick={() => handleEdit(service.id)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(service.id)} > Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewService;
