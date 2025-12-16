import React from 'react';
import logo from '../assets/logo.png'; // Adjust the path as needed

function Dashboard({ image }) {
  return (
    <div className="DashboardImage" style={{ textAlign: 'center' }}>
      <h1 style={{ textAlign: 'center' }}>Welcome to Your Task Manager</h1>
      <div
        style={{
          backgroundImage: `url(${image})`,
          height: '10px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          margin: '20px auto',
          width: '100%',
          borderRadius: '12px',
        }}
      />
      <img src={logo} alt="Logo" style={{ marginTop: '10 px', height: '400px' }} />
    </div>
  );
}

export default Dashboard;
