import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import RegisterForm from './components/RegisterForm';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/register">Sign up</Link></li>
          <li>Log in</li>
        </ul>
      </div>
      <div className="App">
        <Routes>
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/" element={<h1>Welcome to the app!</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
