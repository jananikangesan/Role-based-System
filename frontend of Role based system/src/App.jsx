import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import ClientDashBoard from './components/client/ClientDashBoard';
import AdminDashBoard from './components/admin/AdminDashBoard';
import PartnerDashBoard from './components/partner/PartnerDashBoard';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/register">Sign up</Link></li>
          <li><Link to="/login">Log in</Link></li>
        </ul>
      </div>
      <div className="App">
        <Routes>
          <Route path="/register" element={<RegisterForm />} />
          <Route path="login" element={<LoginForm/>}/>
          <Route path="/" element={<h1>Welcome to the app!</h1>} />

          <Route path="/client-dashboard" element={<ClientDashBoard />} />
          <Route path="/admin-dashboard" element={<AdminDashBoard />} />
          <Route path="/partner-dashboard" element={<PartnerDashBoard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
