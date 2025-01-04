import React from 'react'
import { useNavigate } from 'react-router-dom';

function ClientDashBoard() {
    const navigate = useNavigate();

    // Logout function
      const handleLogout = () => {
          localStorage.removeItem('token');
          navigate('/');
      };
  
  return (
    <div>
      <h2>client Dashboard</h2>
      <button onClick={handleLogout} className="btn btn-danger">Logout</button>
    </div>
  )
}

export default ClientDashBoard
