import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    
    <div className="home-container">
        <div className="header">
            <ul className="nav-links">
                <li><Link to="/register">Sign up</Link></li>
                <li><Link to="/login">Log in</Link></li>
            </ul>
        </div>
        <h1 className="welcome-message">Welcome to the Role Based System</h1>
    </div>
   
  )
}

export default Home
