import React, { useEffect, useState } from "react";
import { viewProfile } from "../../services/PartnerService";
import { extractRoleFromToken } from "../extractRoleFromToken";


function Profile() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    companyName: "",
    address: "",
    contactNumber: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const email = extractRoleFromToken(token).sub; 
        if (!email) {
          throw new Error("No email found. Please log in again.");
        }

        const response = await viewProfile(email); 
        setProfile(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message || "Failed to fetch profile data.");
        setLoading(false);
      }
    };

    fetchProfile();
  }, []); 

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    <div className="container mt-5 justify-content-center">
      <div className="card p-4">
        <h2 className="text-center mb-4">Profile</h2>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" value={profile.name} readOnly />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" value={profile.email} readOnly />
        </div>
        <div className="mb-3">
          <label className="form-label">Company Name</label>
          <input type="text" className="form-control" value={profile.companyName} readOnly />
        </div>
        <div className="mb-3">
          <label className="form-label">Address</label>
          <textarea className="form-control" value={profile.address} readOnly rows="3"></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Contact Number</label>
          <input type="text" className="form-control" value={profile.contactNumber} readOnly />
        </div>
      </div>
    </div>
  );
}

export default Profile;
