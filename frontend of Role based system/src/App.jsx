import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import './App.css';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import ClientDashBoard from './components/client/ClientDashBoard';
import AdminDashBoard from './components/admin/AdminDashBoard';
import PartnerDashBoard from './components/partner/PartnerDashBoard';
import { extractRoleFromToken } from './components/extractRoleFromToken';
import CompanyRegistrationForm from './components/partner/CompanyRegistrationForm';
import Profile from './components/partner/Profile';
import ViewService from './components/partner/ViewService';
import CreateService from './components/partner/CreateService';
import EditService from './components/partner/EditService';

const ProtectedRoute = ({ component: Component, allowedRoles }) => {
  const token = localStorage.getItem('token');
  console.log(token);

  if (!token) {
    return <Navigate to="/" />;
  }

  try {
    const role = extractRoleFromToken(token).role; 
    console.log("role of user:", role);
    if (allowedRoles.includes(role)) {
      return <Component />;
    } else {
      return <Navigate to="/" />;
    }
  } catch (error) {
    console.error('Invalid token', error);
    return <Navigate to="/" />;
  }
};

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Home Page */}
          <Route 
            path="/" 
            element={
             
                <div className="home-container">
                  <div className="header">
                    <ul className="nav-links">
                      <li><Link to="/register">Sign up</Link></li>
                      <li><Link to="/login">Log in</Link></li>
                    </ul>
                  </div>
                  <h1 className="welcome-message">Welcome to the Role Based System</h1>
                </div>
              
            } 
          />
          
          {/* Other Routes */}
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/client-dashboard" element={<ProtectedRoute component={ClientDashBoard}allowedRoles={['Client']} />} />


          <Route path="/partner-dashboard" element={<ProtectedRoute component={PartnerDashBoard} allowedRoles={['Partner']} />} />
          <Route path="/company-register" element={<ProtectedRoute component={CompanyRegistrationForm} allowedRoles={['Partner']} />} />
          <Route path="/profile" element={<ProtectedRoute component={Profile} 
          allowedRoles={['Partner']} />} />
          <Route path="/get-service" element={<ProtectedRoute component={ViewService} 
          allowedRoles={['Partner']} />} />
          <Route path="/create-service" element={<ProtectedRoute component={CreateService} 
          allowedRoles={['Partner']} />} />
          <Route path="/edit-service/:id" element={<ProtectedRoute component={EditService} 
          allowedRoles={['Partner']} />} />


          <Route path="/admin-dashboard" element={<ProtectedRoute component={AdminDashBoard} allowedRoles={['Super-Admin']} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
