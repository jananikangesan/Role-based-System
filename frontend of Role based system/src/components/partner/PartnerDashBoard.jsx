import React from 'react';
import { useNavigate } from 'react-router-dom';

function PartnerDashBoard() {
  const navigate = useNavigate();

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div>
      <h2>Partner Dashboard</h2>
      <button onClick={handleLogout} className="btn btn-danger">Logout</button>
    </div>
  );
}

export default PartnerDashBoard;
