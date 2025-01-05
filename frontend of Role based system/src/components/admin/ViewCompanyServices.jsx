import React, { useEffect, useState } from "react";
import { getCompanyServices } from "../../services/PartnerService";

function ViewCompanyServices() {
  const [services, setServices] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  
  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = () => {
    getCompanyServices().then((response) => {
        setServices(response.data);
        setError("");
      }).catch(() => setError("Failed to fetch company and services"));
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Companies and Services List</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>No</th>
            <th>Company Name</th>
            <th>Service Name</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{service.companyName}</td>
              <td>{service.serviceName}</td>
              <td>{service.description}</td>
              <td>{service.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewCompanyServices;
