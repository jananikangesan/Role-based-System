import React, { useEffect, useState } from "react";
import { getAllServices } from "../../services/PartnerService";


function BrowseService() {
  const [services, setServices] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = () => {
    getAllServices().then((response) => {
        setServices(response.data);
        setError("");
      })
      .catch(() => setError("Failed to fetch services"));
  };

  return (
    <div>
      <h2>Available Services</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>No</th>
            <th>Service Name</th>
            <th>Description</th>
            <th>Price (LKR)</th>
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
                <button className="btn btn-primary btn-sm">Book</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BrowseService;
