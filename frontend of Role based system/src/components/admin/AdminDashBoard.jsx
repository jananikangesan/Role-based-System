import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { extractRoleFromToken } from '../extractRoleFromToken';
import ViewUser from './ViewUser';
import ViewCompanyServices from './ViewCompanyServices';


function AdminDashBoard() {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState('Home');
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const email = extractRoleFromToken(token).sub; 
        setUserEmail(email); 
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  // Dynamic content for the main body
  const renderContent = () => {
    switch (activeMenu) {
      case 'Users':
        return <ViewUser/>;
      case 'Companies':
        return <ViewCompanyServices/>;
      case 'Bookings':
        return ;
      default:
        return <h3>Welcome to the Admin Dashboard!</h3>;
    }
  };

  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        {/* Vertical Navbar */}
        <div className="col-md-3 bg-light border-end p-3">
          <ul className="nav flex-column">
            <li className="nav-item">
              <button
                className={`nav-link btn btn-link ${activeMenu === 'Users' ? 'active' : ''}`}
                onClick={() => setActiveMenu('Users')}
              >
                Users
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link btn btn-link ${activeMenu === 'Companies' ? 'active' : ''}`}
                onClick={() => setActiveMenu('Companies')}
              >
                Companies
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link btn btn-link ${activeMenu === 'Bookings' ? 'active' : ''}`}
                onClick={() => setActiveMenu('Bookings')}
              >
                Bookings
              </button>
            </li>
          </ul>
        </div>

        {/* Main Content Area */}
        <div className="col-md-9 d-flex flex-column">
          {/* Header */}
          <div className="d-flex justify-content-between align-items-center bg-secondary-subtle text-black p-3">
            <span>{userEmail}</span>
            <button onClick={handleLogout} className="btn btn-danger">
              Logout
            </button>
          </div>

          {/* Body */}
          <div className="flex-grow-1 p-4">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashBoard;
